// store/promptStore.ts
import { create } from "zustand";
import axios from "axios";

interface PromptState {
  prompt1: string;
  prompt2: string;
  setPrompts: (values: Partial<{ prompt1: string; prompt2: string }>) => void;
  fetchInitialPrompts: () => Promise<void>;
}

export const usePromptStore = create<PromptState>((set) => ({
  prompt1: "",
  prompt2: "",
  setPrompts: (values) =>
    set((state) => ({
      ...state,
      ...values,
    })),
  fetchInitialPrompts: async () => {
    try {
      // 🔧 Replace with your real API endpoint later
      const response = await axios.get("/api/prompts/init");

      // Assume API returns { prompt1: "...", prompt2: "..." }
      const { prompt1, prompt2 } = response.data;

      set({
        prompt1: prompt1 || "",
        prompt2: prompt2 || "",
      });
    } catch (error) {
      console.error("Failed to fetch prompts:", error);
    }
  },
}));