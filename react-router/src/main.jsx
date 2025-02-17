import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AlertProvider } from "./context/AlertContext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </StrictMode>
);
