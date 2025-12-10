import { useEffect, useState, type JSX } from 'react';
import { NavLink } from 'react-router-dom';
import api from '../../config/axios.interceptor';
import {
  CornerDownLeft,
  DollarSign,
  Droplets,
  FileSpreadsheet,
  LayoutDashboard,
  Newspaper,
  Receipt,
  ShoppingBag,
  ShoppingCart,
  UserPlus,
  Users,
} from 'lucide-react';

type MenuItem = {
  id: number;
  label: string;
  link: string;
  icon: string;
};

export default function SideBar() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

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
  };

  useEffect(() => {
    const fetchMenuItems = async () => {
      const res = await api.get('/api/public/menu-items');
      setMenuItems(res.data.menuItems);
    };

    fetchMenuItems();
  }, []);

  return (
    <aside className="w-64 bg-primary text-white h-screen fixed right-0 top-0 p-4">
      <ul className="space-y-2">
        {menuItems.map((menu) => (
          <li key={menu.id}>
            <NavLink
              to={menu.link}
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
            >
              {menu.icon && iconMap[menu.icon]}

              <span>{menu.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
