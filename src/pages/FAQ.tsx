// @Author:XYH
// @Date:2025-11-23
// @Description: FAQ 页面，展示常见问题与解答，帮助用户快速了解站点规则与使用方式

import { Seo } from "../components/common/Seo";
import { useI18n } from "../i18n";

export function FAQPage() {
  const { t } = useI18n();

  const items = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") }
  ];

  return (
    <main>
      <Seo
        title={t("faq.title")}
        description={t("faq.title")}
        path="/faq"
      />
      <section className="container" style={{ padding: "32px 0" }}>
        <h1>{t("faq.title")}</h1>
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          {items.map((item, index) => (
            <details key={index} className="card" style={{ padding: 16 }}>
              <summary style={{ cursor: "pointer", fontWeight: 500 }}>{item.q}</summary>
              <p style={{ marginTop: 8, fontSize: 14, color: "var(--color-text-subtle)" }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
