import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ColorProvider from "./components/ColorProvider";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </StrictMode>
);
