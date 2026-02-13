import Link from "next/link";

interface StatRefLink {
  name: string;
}

const StatRefLink = (props: StatRefLink) => {
  const { name } = props;

  return (
    <div>
      <Link href={`/stats/${name}`}>{name}</Link>
    </div>
  );
};

export default StatRefLink;
