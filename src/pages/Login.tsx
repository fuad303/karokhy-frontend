import { useEffect } from "react";
import LoginCompo from "../components/login/LoginCompo";

const Login = () => {
  useEffect(() => {
    console.log("LoginCompo rendered from parent");
  }, []);
  return (
    <>
      <LoginCompo />
    </>
  );
};

export default Login;
