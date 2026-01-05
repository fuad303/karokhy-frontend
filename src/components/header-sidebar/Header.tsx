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
    <>
      {/* Overlay */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      <header className="h-16 bg-white shadow flex items-center px-4 sm:px-6 z-30">
        <div className="flex items-center gap-4">
          <button className="sm:hidden" onClick={() => setOpenSidebar(true)}>
            <Menu />
          </button>

          <img src={logo} alt="logo" className="w-10" />
        </div>

        <div
          className="hidden md:block mx-auto max-w-md w-full relative"
          dir="rtl"
        >
          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" 
            size={18}
          />
          <input
            placeholder="جستجو..."
            className="w-full border rounded-lg py-2 pr-10 pl-4 text-sm focus:ring-2 focus:ring-primary focus:outline-primary"
          />
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <button
            onClick={handleLogoOut}
            className="bg-primary text-white px-3 py-1.5 rounded text-sm"
          >
            قفل سیستم
          </button>
          <CircleUser size={32} className="text-gray-500" />
        </div>
      </header>
    </>
  );
}
