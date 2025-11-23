// @Author:XYH
// @Date:2025-11-23
// @Description: React 入口文件，将应用挂载到根节点，并注入国际化与 Helmet Provider

import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { App } from "./App";
import { I18nProvider } from "./i18n";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </HelmetProvider>
  </React.StrictMode>
);
