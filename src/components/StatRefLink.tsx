"use client"
import Link from "next/link";
import { Stat } from "../constants";
import {useSelector} from "react-redux"
import { RootType } from "../store/store";

interface StatRefLink {
  stat: Stat;
  name: string;
}

const StatRefLink = (props: StatRefLink) => {
  const { stat, name } = props;
  const lang = useSelector((state: RootType) => state.lang.lang)

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-green-200 hover:border-green-500">
      <Link
        href={`/stats/${name}`}
        className="block p-6 text-green-800 hover:text-green-600 font-semibold text-lg hover:bg-green-50 rounded-lg transition-colors duration-200"
      >
        {stat[lang]}
      </Link>
    </div>
  );
};

export default StatRefLink;
