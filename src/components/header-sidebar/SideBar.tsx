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
  Menu,
  Newspaper,
  Receipt,
  ShoppingBag,
  ShoppingCart,
  UserPlus,
  Users,
} from "lucide-react";

type MenuItem = {
  id: number;
  label: string;
  link: string;
  icon: string;
};

export default function SideBar() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [open, setOpen] = useState(false);

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
      console.log(res);
    };
    fetchMenuItems();
  }, []);

  return (
    <>
      {!open ? (
        <button
          className="sm:hidden fixed top-4 right-4 z-60 bg-white shadow p-2 rounded"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      ) : (
        ""
      )}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 right-0 h-full bg-white shadow-xl z-50 w-60 sm:w-70 
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full sm:translate-x-0"}
        `}
      >
        <ul className="space-y-2 p-4">
          <div className="flex flex-col items-center mb-5 font-bold text-xl">
            پنل مدیر
          </div>

          {menuItems.map((menu) => (
            <li key={menu.id}>
              <NavLink
                to={menu.link}
                onClick={() => setOpen(false)} // auto close on click mobile
                className={({ isActive }) =>
                  `flex gap-2 py-2 px-4 text-xl
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
    </>
  );
}
