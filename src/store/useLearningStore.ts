import { create } from 'zustand';
import { persist } from 'zustand/middleware';
type LearningState = {
  scores: Record<string, number>;
  bookmarks: string[];
  completed: string[];
  saveScore: (section: string, score: number) => void;
  toggleBookmark: (id: string) => void;
  toggleCompleted: (id: string) => void;
};
const toggle = (list: string[], id: string) =>
  list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      scores: {},
      bookmarks: [],
      completed: [],
      saveScore: (section, score) =>
        set((s) => ({
          scores: {
            ...s.scores,
            [section]: Math.max(s.scores[section] ?? 0, score),
          },
        })),
      toggleBookmark: (id) =>
        set((s) => ({ bookmarks: toggle(s.bookmarks, id) })),
      toggleCompleted: (id) =>
        set((s) => ({ completed: toggle(s.completed, id) })),
    }),
    { name: 'sanatan-nepal-learning', version: 1 },
  ),
);
