// @Author:XYH
// @Date:2025-11-23
// @Description: Emoji 列表与合成工具方法。为简单起见，这里仅提供一小部分示例 Emoji。

export const EMOJI_LIST: string[] = [
  "😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊",
  "😎","😍","😘","😗","😙","😚","🙂","🤗","🤔","😐",
  "😑","😶","🙄","😏","😣","😥","😮","🤐","😯","😪",
  "😫","😴","😌","🤓","😛","😜","😝","🤤","😒","😓",
  "😔","😕","🙃","🤑","😲","☹️","🙁","😖","😞","😟",
  "😤","😢","😭","😦","😧","😨","😩","🤯","😬","😰",
  "😱","🥰","🤪","🤩","🥳","😇"
];

/**
 * 使用简单的 Canvas 绘制两个 Emoji 到同一张图中。
 * 注意：这里是示例实现，并不能做到完美跨平台渲染。
 */
export async function combineEmojisToDataUrl(emojiA: string, emojiB: string): Promise<string> {
  const canvas = document.createElement("canvas");
  const size = 256;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas not supported");
  }

  // 填充背景为透明
  ctx.clearRect(0, 0, size, size);

  // 设置文本居中
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // 绘制第一个 Emoji（略微偏左上）
  ctx.font = "140px Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, system-ui";
  ctx.fillText(emojiA, size * 0.42, size * 0.55);

  // 绘制第二个 Emoji（略微偏右下，稍小）
  ctx.font = "120px Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, system-ui";
  ctx.fillText(emojiB, size * 0.6, size * 0.7);

  return canvas.toDataURL("image/png");
}
