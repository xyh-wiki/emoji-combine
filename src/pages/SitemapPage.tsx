// @Author:XYH
// @Date:2025-11-23
// @Description: 网站地图页面，列出前端可访问的所有主要路由

import { Link } from "react-router-dom";
import { Seo } from "../components/common/Seo";
import { useI18n } from "../i18n";

export function SitemapPage() {
  const { t } = useI18n();

  const links = [
    { path: "/", labelKey: "common.nav.home" },
    { path: "/faq", labelKey: "common.nav.faq" },
    { path: "/about", labelKey: "common.nav.about" },
    { path: "/contact", labelKey: "common.nav.contact" },
    { path: "/privacy", labelKey: "common.nav.privacy" },
    { path: "/terms", labelKey: "common.nav.terms" },
    { path: "/sitemap", labelKey: "common.nav.sitemap" }
  ];

  return (
    <main>
      <Seo
        title={t("sitemap.title")}
        description={t("sitemap.title")}
        path="/sitemap"
      />
      <section className="container" style={{ padding: "32px 0", maxWidth: 640 }}>
        <h1>{t("sitemap.title")}</h1>
        <ul style={{ marginTop: 16, paddingLeft: 20 }}>
          {links.map((item) => (
            <li key={item.path} style={{ marginBottom: 8 }}>
              <Link to={item.path}>{t(item.labelKey)}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
