import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export type Theme = 'light' | 'dark' | 'diya';
export const useThemeStore = create<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>()(
  persist((set) => ({ theme: 'light', setTheme: (theme) => set({ theme }) }), {
    name: 'sanatan-nepal-theme',
    version: 1,
  }),
);
