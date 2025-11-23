import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// @Author:XYH
// @Date:2025-11-23
// @Description: Vite 配置文件，配置 React 插件与基础路径等信息

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
});
