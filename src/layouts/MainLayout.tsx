import { Outlet } from "react-router-dom";
import SideBar from "../components/header-sidebar/SideBar";
import Header from "../components/header-sidebar/Header";

export default function MainLayout() {
  return (
    <div className="flex  min-h-screen bg-gray-100">
      <SideBar />
      <div className="flex flex-col sm:w-[90%] w-full ">
        <Header />
        <main className=" flex felx-col justify-center p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
