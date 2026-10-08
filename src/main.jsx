import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import { AppProvider } from "./context/AppContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
          }}
        />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);