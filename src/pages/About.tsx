// @Author:XYH
// @Date:2025-11-23
// @Description: 关于页面，说明网站定位、技术实现方式与隐私理念

import { Seo } from "../components/common/Seo";
import { useI18n } from "../i18n";

export function AboutPage() {
  const { t } = useI18n();

  return (
    <main>
      <Seo
        title={t("about.title")}
        description={t("about.content")}
        path="/about"
      />
      <section className="container" style={{ padding: "32px 0", maxWidth: 760 }}>
        <h1>{t("about.title")}</h1>
        <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.7 }}>{t("about.content")}</p>
        <h2 style={{ marginTop: 24, fontSize: 20 }}>How it works</h2>
        <p style={{ marginTop: 8, fontSize: 14, color: "var(--color-text-subtle)" }}>
          This project draws two emojis on top of each other using a canvas element inside your
          browser. It does not upload your images or emojis to any backend.
        </p>
      </section>
    </main>
  );
}
