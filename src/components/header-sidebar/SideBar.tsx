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
  icon?: string;
};

export default function SideBar() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const iconMap: Record<string, JSX.Element> = {
    // Dashboard
    dashboardIcon: <LayoutDashboard size={20} />,

    // Purchases
    purchaseIcon: <ShoppingCart size={20} />,

    // Sales
    salesIcon: <ShoppingBag size={20} />,

    // Expenses
    expensesIcon: <Receipt size={20} />,

    // Users
    usersIcon: <Users size={20} />,

    // Money-related pages
    moneyIcon: <DollarSign size={20} />,

    // Installments / Add user / Agreements
    installmentIcon: <UserPlus size={20} />,

    // News / Messages / Communication
    newspaper: <Newspaper size={20} />,

    // Returns / Back navigation / Return items
    returnIcon: <CornerDownLeft size={20} />,

    // Pre-purchase documents
    prePurchaseIcon: <FileSpreadsheet size={20} />,

    // Pre-sale documents
    preSaleIcon: <FileSpreadsheet size={20} />,

    // Water / Liquid / Chemistry / Filters
    Droplets: <Droplets size={20} />,
  };

  useEffect(() => {
    const fetchMenuItems = async () => {
      const res = await api.get('/api/public/menu-items');
      setMenuItems(res.data.menuItems);
      console.log(res);
    };

    fetchMenuItems();
  }, []);

  return (
    <aside className="w-64 bg-primary text-white h-screen fixed right-0 top-0 p-4">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.link}
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
            >
              {item.icon && iconMap[item.icon]}

              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
