// @Author:XYH
// @Date:2025-11-23
// @Description: Emoji 选择组件，以网格形式展示预设 Emoji，点击即可选中

import { EMOJI_LIST } from "../../utils/emojiData";

interface EmojiPickerProps {
  value: string;
  onChange: (emoji: string) => void;
  label: string;
}

export function EmojiPicker({ value, onChange, label }: EmojiPickerProps) {
  return (
    <div>
      <div style={{ marginBottom: 8, display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 14, fontWeight: 500 }}>{label}</span>
        <span style={{ fontSize: 13, color: "var(--color-text-subtle)" }}>{value}</span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(38px, 1fr))",
          gap: 6,
          maxHeight: 220,
          overflowY: "auto",
          padding: 8,
          borderRadius: 12,
          border: "1px solid var(--color-border)",
          backgroundColor: "var(--color-bg-card)"
        }}
      >
        {EMOJI_LIST.map((emoji) => (
          <button
            key={emoji}
            type="button"
            aria-label={emoji}
            onClick={() => onChange(emoji)}
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              border:
                emoji === value ? "2px solid var(--color-primary)" : "1px solid var(--color-border)",
              fontSize: 22,
              cursor: "pointer",
              backgroundColor: "transparent"
            }}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
