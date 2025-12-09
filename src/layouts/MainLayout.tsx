import { Outlet } from 'react-router-dom';
import SideBar from '../components/header-sidebar/SideBar';
import Header from '../components/header-sidebar/Header';

const MainLayout = () => {
  return (
    <div className="flex flex-row-reverse">
      <SideBar />
      <div className="mr-64 flex-1 min-h-screen bg-gray-100">
        <Header />
        <main className="flex flex-col items-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
