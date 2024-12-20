// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import GlobalStyle from "./style/GlobalStyle.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
    <GlobalStyle />
  </BrowserRouter>
);
