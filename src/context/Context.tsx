/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from "react";
import { errorNotifier } from "../config/event-notifier";
import ErrorMessageCompo from "../components/errors/ErrorMessage";

interface AppContextInterface {
  backendErrorPopup: boolean;
  setBackendErrorPopup: React.Dispatch<React.SetStateAction<boolean>>;
  backendErrorMessage: string;
  setBackendErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  backendErrorStatus?: number;
  setBackendErrorStatus?: React.Dispatch<React.SetStateAction<string>>;
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextInterface | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [backendErrorPopup, setBackendErrorPopup] = useState(false);
  const [backendErrorMessage, setBackendErrorMessage] = useState("");
  const [backendErrorStatus, setBackendErrorStatus] = useState<
    number | undefined
  >();
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const unsubscribe = errorNotifier.subscribe((event) => {
      setBackendErrorMessage(event.message);
      setBackendErrorStatus(event.statusCode);
      if (
        event.statusCode === 401 ||
        event.statusCode === 404 ||
        event.statusCode === 400 ||
        event.statusCode >= 500
      ) {
        setBackendErrorPopup(true);
      }
    });

    return unsubscribe;
  }, []);

  const shouldBlockApp = backendErrorPopup && backendErrorStatus !== undefined;

  return (
    <AppContext.Provider
      value={{
        backendErrorPopup,
        setBackendErrorPopup,
        backendErrorMessage,
        setBackendErrorMessage,
        openSidebar,
        setOpenSidebar,
      }}
    >
      {shouldBlockApp && (
        <ErrorMessageCompo onClose={() => setBackendErrorPopup(false)} />
      )}
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
};
