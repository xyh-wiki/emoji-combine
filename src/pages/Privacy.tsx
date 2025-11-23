// @Author:XYH
// @Date:2025-11-23
// @Description: 隐私政策页面，提供静态隐私说明文本

import { Seo } from "../components/common/Seo";
import { useI18n } from "../i18n";

export function PrivacyPage() {
  const { t } = useI18n();

  return (
    <main>
      <Seo
        title={t("legal.privacyTitle")}
        description={t("legal.privacyContent")}
        path="/privacy"
      />
      <section className="container" style={{ padding: "32px 0", maxWidth: 760 }}>
        <h1>{t("legal.privacyTitle")}</h1>
        <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.7 }}>
          {t("legal.privacyContent")}
        </p>
      </section>
    </main>
  );
}
