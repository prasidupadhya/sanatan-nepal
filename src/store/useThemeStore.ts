import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export type Theme = 'light' | 'dark' | 'diya';
// First visits follow the device setting; a saved choice takes precedence.
const systemTheme = (): Theme =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
export const useThemeStore = create<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>()(
  persist(
    (set) => ({ theme: systemTheme(), setTheme: (theme) => set({ theme }) }),
    {
      name: 'sanatan-nepal-theme',
      version: 1,
    },
  ),
);
