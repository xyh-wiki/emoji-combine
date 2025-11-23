// @Author:XYH
// @Date:2025-11-23
// @Description: 简单的全局 Toast 提示组件，从 UI Store 中读取消息并展示

import { useEffect } from "react";
import { useUiStore } from "../../store/useUiStore";

export function Toast() {
  const message = useUiStore((s) => s.toastMessage);
  const clearToast = useUiStore((s) => s.clearToast);

  // 当有消息时自动几秒后隐藏
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => clearToast(), 3000);
    return () => clearTimeout(timer);
  }, [message, clearToast]);

  if (!message) return null;

  return (
    <div
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#111827",
        color: "#f9fafb",
        borderRadius: 999,
        padding: "10px 16px",
        fontSize: 14,
        boxShadow: "0 10px 30px rgba(15,23,42,0.4)",
        zIndex: 50
      }}
    >
      {message}
    </div>
  );
}
