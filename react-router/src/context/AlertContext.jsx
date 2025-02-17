import { createContext, useContext, useState } from "react";

// Context
const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(""), 3000);
  };

  const hideAlert = () => setAlertMessage("");

  return (
    <AlertContext.Provider value={{ alertMessage, showAlert, hideAlert }}>
      <Alert />
      {children}
    </AlertContext.Provider>
  );
};
