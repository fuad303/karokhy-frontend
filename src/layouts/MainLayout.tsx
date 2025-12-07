import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      main layout
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
