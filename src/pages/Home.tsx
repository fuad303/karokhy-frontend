// import { useLoaderData } from "react-router-dom";
// import { useApp } from "../context/Context";
// import type { HomeInterface } from "../interfaces/home.interface";

import Chart from "../components/dashboard/Chart";
import DailyReports from "../components/dashboard/DailyReports";

const Home = () => {
  // const { backendErrorPopup, setBackendErrorPopup } = useApp();
  // const data = useLoaderData<HomeInterface>();

  return (
    <div className="p-4">
      <h1
        className="text-primary font-bold mb-6 
               text-xl sm:text-2xl md:text-3xl text-center"
      >
        داشبورد
      </h1>

      <div className="grid gap-5">
        <DailyReports />
        {/* <Chart /> */}
      </div>
    </div>
  );
};

export default Home;
