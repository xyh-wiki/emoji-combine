// @Author:XYH
// @Date:2025-11-23
// @Description: 首页页面组件，包含 Hero、Emoji 合成操作区、推荐组合与特性说明等模块

import { useEffect } from "react";
import { useI18n } from "../i18n";
import { useEmojiStore } from "../store/useEmojiStore";
import { combineEmojisToDataUrl } from "../utils/emojiData";
import { EmojiPicker } from "../components/ui/EmojiPicker";
import { EmojiResult } from "../components/ui/EmojiResult";
import { Seo } from "../components/common/Seo";

const recommendedPairs: [string, string][] = [
  ["😂", "😭"],
  ["😎", "🔥"],
  ["🥰", "😍"],
  ["🤯", "🤩"],
  ["😴", "💤"],
  ["😡", "💢"]
];

export function HomePage() {
  const { t } = useI18n();
  const emojiA = useEmojiStore((s) => s.emojiA);
  const emojiB = useEmojiStore((s) => s.emojiB);
  const setEmojiA = useEmojiStore((s) => s.setEmojiA);
  const setEmojiB = useEmojiStore((s) => s.setEmojiB);
  const setResult = useEmojiStore((s) => s.setResult);
  const addHistory = useEmojiStore((s) => s.addHistory);

  // 当 emoji 发生变化时自动重新合成
  useEffect(() => {
    let cancelled = false;
    async function run() {
      const dataUrl = await combineEmojisToDataUrl(emojiA, emojiB);
      if (!cancelled) {
        setResult(dataUrl);
        addHistory({
          id: `${emojiA}-${emojiB}-${Date.now()}`,
          emojiA,
          emojiB,
          dataUrl
        });
      }
    }
    run().catch((e) => console.error(e));
    return () => {
      cancelled = true;
    };
  }, [emojiA, emojiB, setResult, addHistory]);

  const handleRecommendedClick = (pair: [string, string]) => {
    setEmojiA(pair[0]);
    setEmojiB(pair[1]);
  };

  return (
    <>
      <Seo
        title={t("home.heroTitle")}
        description={t("home.heroSubtitle")}
        path="/"
      />
      <main>
        {/* Hero 顶部区域，带渐变背景与主要文案 */}
        <section
          style={{
            padding: "48px 0 40px",
            background:
              "radial-gradient(circle at top left, #dbeafe, #eff6ff 40%, #fdf2ff 80%)",
            borderBottom: "1px solid rgba(148,163,184,0.3)"
          }}
        >
          <div
            className="container"
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 32 }}
          >
            {/* 左侧文案 */}
            <div style={{ flex: "1 1 260px" }}>
              <div className="badge">Emoji Tool · 100% front-end</div>
              <h1 style={{ fontSize: 40, margin: "16px 0 12px" }}>{t("home.heroTitle")}</h1>
              <p style={{ fontSize: 16, color: "var(--color-text-subtle)", maxWidth: 520 }}>
                {t("home.heroSubtitle")}
              </p>
              <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
                <a href="#combiner" className="btn-primary">
                  {t("home.heroCta")}
                </a>
                <a href="#features" className="btn-secondary">
                  {t("common.actions.learnMore")}
                </a>
              </div>
            </div>

            {/* 右侧示意卡片 */}
            <div
              className="card"
              style={{
                flex: "1 1 260px",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12
              }}
            >
              <span style={{ fontSize: 32 }}>😀 + 😎</span>
              <span style={{ fontSize: 46 }}>😃</span>
              <p style={{ fontSize: 13, color: "var(--color-text-subtle)", textAlign: "center" }}>
                Combine any two emojis into a new image. All processing happens directly in your
                browser.
              </p>
            </div>
          </div>
        </section>

        {/* 核心合成操作区 */}
        <section id="combiner" style={{ padding: "32px 0" }}>
          <div
            className="container"
            style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-start" }}
          >
            <div
              className="card"
              style={{
                flex: "1 1 320px",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 16
              }}
            >
              <h2 style={{ marginTop: 0 }}>{t("home.pickerTitle")}</h2>
              <p style={{ fontSize: 14, color: "var(--color-text-subtle)" }}>
                Pick two emojis below. The combined image will be generated automatically.
              </p>
              <EmojiPicker label="Emoji A" value={emojiA} onChange={setEmojiA} />
              <EmojiPicker label="Emoji B" value={emojiB} onChange={setEmojiB} />
            </div>

            {/* 合成结果展示区 */}
            <div style={{ flex: "1 1 280px" }}>
              <EmojiResult />
            </div>
          </div>
        </section>

        {/* 推荐组合区域 */}
        <section style={{ padding: "8px 0 24px" }}>
          <div className="container">
            <h2 style={{ marginTop: 0 }}>{t("home.recommendedTitle")}</h2>
            <p style={{ fontSize: 14, color: "var(--color-text-subtle)", marginBottom: 12 }}>
              Tap a pair below to try a popular combination.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: 12
              }}
            >
              {recommendedPairs.map((pair) => (
                <button
                  key={pair[0] + pair[1]}
                  type="button"
                  onClick={() => handleRecommendedClick(pair)}
                  className="card"
                  style={{
                    padding: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer"
                  }}
                >
                  <span style={{ fontSize: 24 }}>
                    {pair[0]} + {pair[1]}
                  </span>
                  <span style={{ fontSize: 20 }}>🎲</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 特性说明区域 */}
        <section id="features" style={{ padding: "16px 0 24px" }}>
          <div className="container">
            <h2 style={{ marginTop: 0 }}>{t("home.featuresTitle")}</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 16
              }}
            >
              <div className="card" style={{ padding: 16 }}>
                <h3>{t("home.featureFast")}</h3>
                <p style={{ fontSize: 14, color: "var(--color-text-subtle)" }}>
                  No uploads, no queues, no waiting. Open the page and start combining immediately.
                </p>
              </div>
              <div className="card" style={{ padding: 16 }}>
                <h3>{t("home.featureFree")}</h3>
                <p style={{ fontSize: 14, color: "var(--color-text-subtle)" }}>
                  The tool is completely free and does not require signup or login.
                </p>
              </div>
              <div className="card" style={{ padding: 16 }}>
                <h3>{t("home.featureDownload")}</h3>
                <p style={{ fontSize: 14, color: "var(--color-text-subtle)" }}>
                  Download your combined emoji as a PNG image with a single click.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO 关键字文本区，用于提升长尾搜索匹配 */}
        <section style={{ padding: "8px 0 40px" }}>
          <div className="container">
            <h2 style={{ marginTop: 0 }}>{t("home.seoBlockTitle")}</h2>
            <p style={{ fontSize: 14, color: "var(--color-text-subtle)" }}>
              {t("home.seoBlockText")}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
