/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

interface AppContextInterface {
  backendErrorPopup: boolean;
  setBackendErrorPopup: React.Dispatch<React.SetStateAction<boolean>>;
  backendErrorMessage: string;
  setBackendErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextInterface | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [backendErrorPopup, setBackendErrorPopup] = useState(false);
  const [backendErrorMessage, setBackendErrorMessage] = useState("");

  return (
    <AppContext.Provider
      value={{
        backendErrorPopup,
        setBackendErrorPopup,
        backendErrorMessage,
        setBackendErrorMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
};
