import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main className="select-none">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
