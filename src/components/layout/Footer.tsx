// @Author:XYH
// @Date:2025-11-23
// @Description: 全站底部 Footer，包含版权信息与法律页面链接

import { Link } from "react-router-dom";
import { useI18n } from "../../i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        marginTop: 40,
        paddingBlock: 16
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ fontSize: 13, color: "var(--color-text-subtle)" }}>
          © {year} Emoji Combiner · {t("common.footer.copyright")}
        </span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 12, fontSize: 13 }}>
          <Link to="/privacy">{t("common.nav.privacy")}</Link>
          <Link to="/terms">{t("common.nav.terms")}</Link>
          <Link to="/sitemap">{t("common.nav.sitemap")}</Link>
        </div>
      </div>
    </footer>
  );
}
