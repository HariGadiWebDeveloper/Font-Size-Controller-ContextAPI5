import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FontSizeControllerContextProvider } from "./Context/FontSizeControllerContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FontSizeControllerContextProvider>
      <App />
    </FontSizeControllerContextProvider>
  </StrictMode>
);
