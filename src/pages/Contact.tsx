// @Author:XYH
// @Date:2025-11-23
// @Description: 联系页面，包含展示型联系表单以及邮箱信息

import { FormEvent, useState } from "react";
import { Seo } from "../components/common/Seo";
import { useI18n } from "../i18n";
import { useUiStore } from "../store/useUiStore";

export function ContactPage() {
  const { t } = useI18n();
  const showToast = useUiStore((s) => s.showToast);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // 这里只做前端提示，不进行任何真实网络请求
    showToast(t("contact.success"));
    setName("");
    setMessage("");
  };

  return (
    <main>
      <Seo
        title={t("contact.title")}
        description={t("contact.description")}
        path="/contact"
      />
      <section className="container" style={{ padding: "32px 0", maxWidth: 820 }}>
        <h1>{t("contact.title")}</h1>
        <p style={{ marginTop: 8, fontSize: 14, color: "var(--color-text-subtle)" }}>
          {t("contact.description")}
        </p>

        <div
          style={{
            marginTop: 24,
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
            gap: 24
          }}
        >
          {/* 左侧表单 */}
          <form onSubmit={handleSubmit} className="card" style={{ padding: 20 }}>
            <div style={{ marginBottom: 12 }}>
              <label style={{ display: "block", fontSize: 14, marginBottom: 4 }}>
                {t("contact.name")}
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)"
                }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label style={{ display: "block", fontSize: 14, marginBottom: 4 }}>
                {t("contact.message")}
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  resize: "vertical"
                }}
              />
            </div>
            <button type="submit" className="btn-primary">
              {t("contact.submit")}
            </button>
          </form>

          {/* 右侧静态联系方式 */}
          <div className="card" style={{ padding: 20 }}>
            <h2 style={{ marginTop: 0, fontSize: 18 }}>{t("contact.emailLabel")}</h2>
            <p style={{ fontSize: 14, marginBottom: 8 }}>
              <a href="mailto:xyh.wiki@gmail.com">{t("contact.emailValue")}</a>
            </p>
            <p style={{ fontSize: 13, color: "var(--color-text-subtle)" }}>
              For any bug reports or feature ideas, please send a short description together with
              your browser and device information.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
