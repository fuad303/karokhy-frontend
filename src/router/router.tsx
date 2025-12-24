import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import { Loader } from "../loader/loader";
import NotFound from "../pages/NotFound";
import AdminManage from "../pages/AdminManage";

import { lazy } from "react";
const AddUserForm = lazy(() => import("../components/admin-form/AddUserForm"));
const AdminUserList = lazy(
  () => import("../components/admin-form/AdminUserList")
);
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home />, loader: Loader.dashboardLoader },
      // { path: "/users", element: <AdminManage /> },
      {
        path: "/users",
        element: <AdminManage />,
        children: [
          {
            index: true,
            element: <Navigate to="list" replace />,
          },
          {
            path: "add",
            element: <AddUserForm />,
          },
          {
            path: "list",
            element: <AdminUserList />,
            loader: Loader.userListLoader,
            errorElement: <div>خطا در بارگذاری لیست کاربران</div>,
          },
        ],
      },
      { path: "/*", element: <NotFound /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [{ path: "/login", element: <Login /> }],
  },
]);
