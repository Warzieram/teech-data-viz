"use client"
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";

const fetchData = async (statId: string) => {
  console.log("FETCHING")
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
  const { slug } =  useParams<{slug: string}>();
  const { isLoading, data, error } = useQuery({
    queryKey: ["reference", slug],
    queryFn: () => fetchData(slug),
    enabled: !!slug
  });

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Error while fetching data !</p>

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Link href="/" >Home</Link>
    </div>
  );
};

export default Page;
