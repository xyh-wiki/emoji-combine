// @Author:XYH
// @Date:2025-11-23
// @Description: UI 相关全局状态，例如 Toast 提示与主题模式

import { create } from "zustand";

interface UiState {
  theme: "light" | "dark";
  toastMessage: string | null;
  showToast: (msg: string) => void;
  clearToast: () => void;
  toggleTheme: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  theme: "light",
  toastMessage: null,
  showToast: (msg: string) => set({ toastMessage: msg }),
  clearToast: () => set({ toastMessage: null }),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light"
    }))
}));
