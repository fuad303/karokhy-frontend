/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from 'react';

interface AppContextInterface {
  backendErrorPopup: boolean;
  setBackendErrorPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextInterface | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [backendErrorPopup, setBackendErrorPopup] = useState(false);

  return (
    <AppContext.Provider value={{ backendErrorPopup, setBackendErrorPopup }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
};
