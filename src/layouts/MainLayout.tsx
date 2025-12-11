import { Outlet } from 'react-router-dom';
import SideBar from '../components/header-sidebar/SideBar';
import Header from '../components/header-sidebar/Header';

export default function MainLayout() {
  return (
    <div className="relative bg-gray-100 min-h-screen">
      <SideBar />
      <div className="sm:mr-70 mr-0 min-h-screen">
        <Header />
        <main className="pt-16 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
