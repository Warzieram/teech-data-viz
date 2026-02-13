"use client";
import { StatReferenceData } from "@/src/type/StatReferenceData";
import { LineChart } from "@mui/x-charts";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../../loading";

const fetchData = async (statId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v3/referenceV2/${statId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const Page = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isLoading, data, error } = useQuery({
    queryKey: ["reference", slug],
    queryFn: () => fetchData(slug),
    enabled: !!slug,
  });
  const [xAxis, setXAxis] = useState<number[]>([]);
  const [series, setSeries] = useState<Array<{ data: number[]; label: string }>>([]);

  useEffect(() => {
    if (!isLoading && data && xAxis.length === 0) {
      const keys = Object.keys(data).map((d) => +d);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setXAxis(keys);
      
      const values = Object.values(data);
      
      // Check if the first value is a Record<string, number>
      if (values.length > 0 && typeof values[0] === 'object' && values[0] !== null && !Array.isArray(values[0])) {
        // Handle Record<string, number> values - create multiple series
        const recordValues = values as Record<string, number>[];
        const seriesKeys = Object.keys(recordValues[0] || {});
        
        const newSeries = seriesKeys.map((key) => ({
          data: recordValues.map((record) => record[key] || 0),
          label: key,
        }));
        
        setSeries(newSeries);
      } else {
        // Handle simple number[] values - single series
        setSeries([{ data: values as number[], label: slug }]);
      }
    }
  }, [data, isLoading, slug, xAxis.length]);

  useEffect(() => {
    console.log("Raw data:", data);
    console.log("X-Axis:", xAxis);
    console.log("Series:", series);
  }, [data, xAxis, series]);

  if (isLoading) return <Loading />;
  if (error) return <p>Error while fetching data !</p>;

  return (
    <div>
      <LineChart
        xAxis={[{ data: xAxis, label: "Index" }]}
        series={series}
        height={300}
      />
    </div>
  );
};

export default Page;
