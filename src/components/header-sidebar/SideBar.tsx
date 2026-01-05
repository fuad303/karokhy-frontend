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
  PackageSearch,
  Receipt,
  Save,
  ShoppingBag,
  ShoppingCart,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { useApp } from "../../context/Context";

type MenuItem = {
  id: number;
  label: string;
  link: string;
  icon: string;
  order: number;
};

export default function SideBar() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const { openSidebar, setOpenSidebar } = useApp();
  const sortedMenueItems = [...menuItems].sort((a, b) => a.order - b.order);

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
    processIcon: <PackageSearch />,
    userManagementIcon: <User size={20} />,
    saveIcon: <Save />,
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
        fixed sm:static inset-y-0 right-0
        w-64
        bg-white
        shadow-xl
        z-50
        transform transition-transform duration-300
        ${openSidebar ? "translate-x-0" : "translate-x-full sm:translate-x-0"}
      `}
    >
      <nav className="h-full overflow-y-auto p-4">
        <div className="text-center mb-8 font-bold text-xl text-gray-700">
          پنل مدیریت
        </div>

        <ul className="space-y-2">
          {sortedMenueItems.map((menu) => (
            <li key={menu.id}>
              <NavLink
                to={menu.link}
                onClick={() => setOpenSidebar(false)}
                className={({ isActive }) =>
                  `
                  flex items-center gap-3 px-4 py-2 rounded
                  text-gray-600 text-base
                  ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-blue-50 hover:text-blue-500"
                  }
                `
                }
              >
                {iconMap[menu.icon]}
                <span>{menu.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
