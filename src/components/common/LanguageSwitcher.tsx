// @Author:XYH
// @Date:2025-11-23
// @Description: 语言切换组件，支持英文与中文互相切换

import { useI18n, SupportedLang } from "../../i18n";

export function LanguageSwitcher() {
  const { lang, switchLang, t } = useI18n();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SupportedLang;
    switchLang(value);
  };

  return (
    <select
      value={lang}
      onChange={handleChange}
      style={{
        borderRadius: 999,
        border: "1px solid var(--color-border)",
        padding: "6px 10px",
        fontSize: 13,
        backgroundColor: "var(--color-bg-card)"
      }}
      aria-label="Select language"
    >
      <option value="en">{t("common.language.en")}</option>
      <option value="zh">{t("common.language.zh")}</option>
    </select>
  );
}
