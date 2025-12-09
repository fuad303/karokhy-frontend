import { NavLink } from 'react-router-dom';

export default function SideBar() {
  return (
    <aside className="w-64 bg-primary text-white h-screen fixed right-0 top-0 p-4">
      <h2 className="text-xl font-semibold mb-6">Manager Panel</h2>

      <nav className="space-y-3">
        <NavLink to="/" className="block px-3 py-2 rounded hover:bg-gray-700">
          داشبورد
        </NavLink>
        <NavLink
          to="/about"
          className="block px-3 py-2 rounded hover:bg-gray-700"
        >
          درباره
        </NavLink>
        <NavLink to="/" className="block px-3 py-2 rounded hover:bg-gray-700">
          خدمات
        </NavLink>
      </nav>
    </aside>
  );
}
