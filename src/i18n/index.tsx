// @Author:XYH
// @Date:2025-11-23
// @Description: 国际化 i18n 初始化配置，使用简单字典方式实现中英双语切换

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

export type SupportedLang = "en" | "zh";

type Dict = typeof en;

interface I18nContextValue {
  lang: SupportedLang;
  dict: Dict;
  switchLang: (lang: SupportedLang) => void;
  t: (path: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * 简单的通过路径访问多级 JSON 文本的工具函数
 * 例如 t("home.heroTitle")
 */
function getByPath(obj: any, path: string): string {
  const parts = path.split(".");
  let current: any = obj;
  for (const key of parts) {
    if (current && typeof current === "object" && key in current) {
      current = current[key];
    } else {
      return path;
    }
  }
  return typeof current === "string" ? current : path;
}

const dictionaries: Record<SupportedLang, Dict> = {
  en,
  zh
};

export function I18nProvider({ children }: { children: ReactNode }) {
  // 从浏览器或默认语言中推断首选语言
  const [lang, setLang] = useState<SupportedLang>("en");

  const value: I18nContextValue = useMemo(
    () => ({
      lang,
      dict: dictionaries[lang],
      switchLang: (l: SupportedLang) => setLang(l),
      t: (path: string) => getByPath(dictionaries[lang], path)
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return ctx;
}
