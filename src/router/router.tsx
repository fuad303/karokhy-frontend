import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import AuthLayout from '../layouts/AuthLayout';
import { Loader } from '../loader/loader';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home />, loader: Loader.dashboardLoader },
      { path: '/*', element: <NotFound /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [{ path: '/login', element: <Login /> }],
  },
]);
