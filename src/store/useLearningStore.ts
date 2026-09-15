import { create } from 'zustand';
import { persist } from 'zustand/middleware';
type LearningState = {
  scores: Record<string, number>;
  saveScore: (section: string, score: number) => void;
};
export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      scores: {},
      saveScore: (section, score) =>
        set((s) => ({
          scores: {
            ...s.scores,
            [section]: Math.max(s.scores[section] ?? 0, score),
          },
        })),
    }),
    { name: 'sanatan-nepal-learning', version: 1 },
  ),
);
