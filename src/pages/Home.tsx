// import { useLoaderData } from "react-router-dom";
// import { useApp } from "../context/Context";
// import type { HomeInterface } from "../interfaces/home.interface";

import Chart from "../components/dashboard/Chart";
import DailyReports from "../components/dashboard/DailyReports";

const Home = () => {
  // const { backendErrorPopup, setBackendErrorPopup } = useApp();
  // const data = useLoaderData<HomeInterface>();

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-primary font-bold text-base md:text-2xl mb-2">
          داشبورد
        </h1>

        <div className="grid gap-5 grid-cols-1">
          <DailyReports />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
