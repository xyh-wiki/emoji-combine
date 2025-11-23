// @Author:XYH
// @Date:2025-11-23
// @Description: 顶层 App 组件，此处主要用来挂载路由与主题

import { useEffect } from "react";
import { AppRouter } from "./router";
import { useUiStore } from "./store/useUiStore";

export function App() {
  const theme = useUiStore((s) => s.theme);

  // 同步主题到 document.documentElement 上，方便使用 CSS 变量
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <AppRouter />;
}
