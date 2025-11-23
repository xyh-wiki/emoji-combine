// @Author:XYH
// @Date:2025-11-23
// @Description: 用户协议页面，提供静态条款说明文本

import { Seo } from "../components/common/Seo";
import { useI18n } from "../i18n";

export function TermsPage() {
  const { t } = useI18n();

  return (
    <main>
      <Seo
        title={t("legal.termsTitle")}
        description={t("legal.termsContent")}
        path="/terms"
      />
      <section className="container" style={{ padding: "32px 0", maxWidth: 760 }}>
        <h1>{t("legal.termsTitle")}</h1>
        <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.7 }}>
          {t("legal.termsContent")}
        </p>
      </section>
    </main>
  );
}
