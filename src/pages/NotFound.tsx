// @Author:XYH
// @Date:2025-11-23
// @Description: 404 页面，当路由未匹配时展示友好的提示与返回首页按钮

import { Link } from "react-router-dom";
import { Seo } from "../components/common/Seo";
import { useI18n } from "../i18n";

export function NotFoundPage() {
  const { t } = useI18n();

  return (
    <main>
      <Seo title={t("notFound.title")} path="/404" />
      <section className="container" style={{ padding: "40px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: 36 }}>{t("notFound.title")}</h1>
        <p style={{ marginTop: 8, fontSize: 14, color: "var(--color-text-subtle)" }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <div style={{ marginTop: 20 }}>
          <Link to="/" className="btn-primary">
            {t("notFound.backHome")}
          </Link>
        </div>
      </section>
    </main>
  );
}
