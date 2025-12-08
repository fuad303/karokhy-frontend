import { useLoaderData } from "react-router-dom";
import { useApp } from "../context/Context";
import type { HomeInterface } from "../interfaces/home.interface";

const Home = () => {
  const { backendErrorPopup, setBackendErrorPopup } = useApp();
  const data = useLoaderData<HomeInterface>();

  return (
    <div>
      Here is home
      <button
        onClick={() => {
          setBackendErrorPopup((pre) => !pre);
        }}
      >
        Click me
      </button>
      {backendErrorPopup && <>{data.message}</>}
    </div>
  );
};

export default Home;
