"use client";
import { useDispatch, useSelector } from "react-redux";
import StatRefLink from "../components/StatRefLink";
import { stats } from "../constants";
import { switchLang } from "../store/languageSlice";
import { RootType } from "../store/store";

const Page = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state: RootType) => state.lang.lang);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      <div className="flex justify-end p-4">
        <button 
          onClick={() => dispatch(switchLang())}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 uppercase"
        >
          {lang}
        </button>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-green-900 mb-12 text-center border-b-4 border-green-600 pb-6">
          TEECH DATA VIZUALISATION
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.keys(stats).map((id: string) => (
            <StatRefLink name={id} stat={stats[id]} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
