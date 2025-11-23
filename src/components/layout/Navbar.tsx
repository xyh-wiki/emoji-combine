// @Author:XYH
// @Date:2025-11-23
// @Description: 网站顶部导航栏组件，包含主要路由入口与语言切换、主题切换控件

import { Link, NavLink } from "react-router-dom";
import { useI18n } from "../../i18n";
import { useUiStore } from "../../store/useUiStore";
import { LanguageSwitcher } from "../common/LanguageSwitcher";

export function Navbar() {
  const { t } = useI18n();
  const theme = useUiStore((s) => s.theme);
  const toggleTheme = useUiStore((s) => s.toggleTheme);

  return (
    <header
      style={{
        borderBottom: "1px solid rgba(148,163,184,0.4)",
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(249,250,251,0.9)"
      }}
    >
      <nav className="container" style={{ display: "flex", alignItems: "center", height: 64 }}>
        {/* 左侧 Logo 与标题区域 */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 999,
              background:
                "radial-gradient(circle at 30% 30%, #facc15, #f97316 40%, #ec4899 70%, #6366f1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18
            }}
          >
            😊
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 700, fontSize: 18 }}>Emoji Combiner</span>
            <span style={{ fontSize: 12, color: "var(--color-text-subtle)" }}>
              {t("common.siteTagline")}
            </span>
          </div>
        </Link>

        {/* 中间导航链接 */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontSize: 14,
              fontWeight: 500,
              color: isActive ? "var(--color-primary)" : "var(--color-text-subtle)"
            })}
          >
            {t("common.nav.home")}
          </NavLink>
          <NavLink
            to="/faq"
            style={({ isActive }) => ({
              fontSize: 14,
              fontWeight: 500,
              color: isActive ? "var(--color-primary)" : "var(--color-text-subtle)"
            })}
          >
            {t("common.nav.faq")}
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              fontSize: 14,
              fontWeight: 500,
              color: isActive ? "var(--color-primary)" : "var(--color-text-subtle)"
            })}
          >
            {t("common.nav.about")}
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              fontSize: 14,
              fontWeight: 500,
              color: isActive ? "var(--color-primary)" : "var(--color-text-subtle)"
            })}
          >
            {t("common.nav.contact")}
          </NavLink>

          {/* 语言切换组件 */}
          <LanguageSwitcher />

          {/* 主题切换按钮 */}
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-secondary"
            style={{ paddingInline: 12, fontSize: 13 }}
          >
            {theme === "light" ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
}
