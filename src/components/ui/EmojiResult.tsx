// @Author:XYH
// @Date:2025-11-23
// @Description: Emoji 合成结果展示组件，显示预览图片以及下载按钮

import { useEmojiStore } from "../../store/useEmojiStore";
import { useI18n } from "../../i18n";
import { useUiStore } from "../../store/useUiStore";

export function EmojiResult() {
  const { t } = useI18n();
  const resultDataUrl = useEmojiStore((s) => s.resultDataUrl);
  const emojiA = useEmojiStore((s) => s.emojiA);
  const emojiB = useEmojiStore((s) => s.emojiB);
  const showToast = useUiStore((s) => s.showToast);

  const handleDownload = () => {
    if (!resultDataUrl) return;
    const a = document.createElement("a");
    a.href = resultDataUrl;
    a.download = `emoji-combo-${encodeURIComponent(emojiA)}-${encodeURIComponent(
      emojiB
    )}.png`.replace(/%/g, "");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast("PNG downloaded.");
  };

  return (
    <div className="card" style={{ padding: 20, width: "100%", textAlign: "center" }}>
      <h3 style={{ marginTop: 0, marginBottom: 12 }}>{t("home.resultTitle")}</h3>
      <div
        style={{
          width: 220,
          height: 220,
          margin: "0 auto 16px",
          borderRadius: 24,
          border: "1px solid var(--color-border)",
          background:
            "radial-gradient(circle at 20% 0%, #fef3c7, #e0f2fe 40%, #f5d0fe 70%, #e0e7ff 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {resultDataUrl ? (
          <img
            src={resultDataUrl}
            alt={`${emojiA} + ${emojiB} combined emoji`}
            style={{ maxWidth: "80%", maxHeight: "80%", borderRadius: 16 }}
          />
        ) : (
          <span style={{ fontSize: 42 }}>
            {emojiA}
            {emojiB}
          </span>
        )}
      </div>
      <button
        type="button"
        className="btn-primary"
        onClick={handleDownload}
        disabled={!resultDataUrl}
        style={{ opacity: resultDataUrl ? 1 : 0.6 }}
      >
        {t("common.actions.download")}
      </button>
    </div>
  );
}
