import { useEffect, useState, type JSX } from "react";
import { NavLink } from "react-router-dom";
import api from "../../config/axios.interceptor";
import {
  CornerDownLeft,
  DollarSign,
  Droplets,
  Earth,
  FileSpreadsheet,
  LayoutDashboard,
  Newspaper,
  Receipt,
  ShoppingBag,
  ShoppingCart,
  UserPlus,
  Users,
} from "lucide-react";
import { useApp } from "../../context/Context";

type MenuItem = {
  id: number;
  label: string;
  link: string;
  icon: string;
};

export default function SideBar() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const { openSidebar, setOpenSidebar } = useApp();

  const iconMap: Record<string, JSX.Element> = {
    dashboardIcon: <LayoutDashboard size={20} />,
    purchaseIcon: <ShoppingCart size={20} />,
    salesIcon: <ShoppingBag size={20} />,
    expensesIcon: <Receipt size={20} />,
    usersIcon: <Users size={20} />,
    moneyIcon: <DollarSign size={20} />,
    installmentIcon: <UserPlus size={20} />,
    newspaper: <Newspaper size={20} />,
    returnIcon: <CornerDownLeft size={20} />,
    prePurchaseIcon: <FileSpreadsheet size={20} />,
    preSaleIcon: <FileSpreadsheet size={20} />,
    Droplets: <Droplets size={20} />,
    internationalIcon: <Earth size={20} />,
  };

  useEffect(() => {
    const fetchMenuItems = async () => {
      const res = await api.get("/api/public/menu-items");
      setMenuItems(res.data.menuItems);
    };
    fetchMenuItems();
  }, []);

  return (
    <aside
      className={`
          fixed top-0 right-0 h-screen overflow-y-scroll bg-white shadow-xl z-50 w-60 sm:w-70 
          transition-transform duration-300
          ${openSidebar ? "translate-x-0" : "translate-x-full sm:translate-x-0"}
        `}
    >
      <ul className="space-y-2 p-4">
        <div className="flex flex-col items-center mb-10 font-bold text-xl text-gray-700">
          پنل مدیریت
        </div>

        {menuItems.map((menu) => (
          <li key={menu.id}>
            <NavLink
              to={menu.link}
              onClick={() => setOpenSidebar(false)}
              className={({ isActive }) =>
                `flex gap-2 py-2 px-4 text-xl rounded-[5px] text-gray-600
                  ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-blue-50 hover:text-blue-500"
                  }`
              }
            >
              {iconMap[menu.icon]}
              <span>{menu.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
