import { useApp } from "../context/Context";

const Home = () => {
  const { backendErrorPopup, setBackendErrorPopup } = useApp();

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
      {backendErrorPopup && <>working</>}
    </div>
  );
};

export default Home;
