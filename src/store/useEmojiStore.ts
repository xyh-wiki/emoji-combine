// @Author:XYH
// @Date:2025-11-23
// @Description: 负责管理 Emoji 选择与合成结果的全局状态

import { create } from "zustand";

export interface EmojiCombination {
  id: string;
  emojiA: string;
  emojiB: string;
  dataUrl: string;
}

interface EmojiState {
  emojiA: string;
  emojiB: string;
  resultDataUrl: string | null;
  history: EmojiCombination[];
  setEmojiA: (value: string) => void;
  setEmojiB: (value: string) => void;
  setResult: (dataUrl: string) => void;
  addHistory: (item: EmojiCombination) => void;
}

export const useEmojiStore = create<EmojiState>((set) => ({
  emojiA: "😀",
  emojiB: "😂",
  resultDataUrl: null,
  history: [],
  setEmojiA: (value: string) => set({ emojiA: value }),
  setEmojiB: (value: string) => set({ emojiB: value }),
  setResult: (dataUrl: string) => set({ resultDataUrl: dataUrl }),
  addHistory: (item: EmojiCombination) =>
    set((state) => ({
      history: [item, ...state.history].slice(0, 20)
    }))
}));
