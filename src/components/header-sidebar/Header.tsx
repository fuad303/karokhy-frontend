import { CircleUser, Menu, Search } from "lucide-react";
import { useApp } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Header() {
  const { openSidebar, setOpenSidebar } = useApp();
  const navigate = useNavigate();

  function handleLogoOut() {
    sessionStorage.removeItem("token");

    navigate("/login", { replace: true });
  }

  return (
    <header className="h-16 bg-white shadow fixed right-0 left-0 top-0 sm:mr-70 z-30 flex items-center justify-between px-6">
      <div className="flex gap-4 items-center">
        {!openSidebar ? (
          <button onClick={() => setOpenSidebar(true)} className="sm:hidden">
            <Menu />
          </button>
        ) : (
          ""
        )}

        {openSidebar && (
          <div
            className="fixed inset-0 bg-black/40 z-40 sm:hidden"
            onClick={() => setOpenSidebar(false)}
          />
        )}
        <div className="w-12">
          <img src={logo} alt="" />
        </div>
      </div>
      <div dir="rtl" className="relative sm:w-full sm:max-w-md hidden sm:block">
        <Search
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="جستجو..."
          className="
          w-full
          rounded-lg
          border
          border-gray-300
          py-2
          pr-10
          pl-4
          text-sm
          text-right
          focus:border-blue-500
          focus:outline-none
          focus:ring-2
          focus:ring-blue-200
        "
        />
      </div>

      <div className="flex gap-5 items-center">
        <button
          onClick={handleLogoOut}
          className="  border bg-primary text-white sm:px-3 sm:py-2 px-1 py-2 text-sm rounded-[5px] cursor-pointer"
        >
          قفل سیستم
        </button>
        <CircleUser className="text-gray-500" size={35} />
      </div>
    </header>
  );
}
