import { useEffect } from 'react';
import { Sun, Moon, Flame } from 'lucide-react';
import { useThemeStore, type Theme } from '../../store/useThemeStore';
export default function ThemeControl() {
  const { theme, setTheme } = useThemeStore();
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme =
      theme === 'light' ? 'light' : 'dark';
  }, [theme]);
  const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Flame;
  return (
    <label className="theme-control">
      <Icon size={18} />
      <span className="sr-only">Color theme</span>
      <select
        aria-label="Color theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value as Theme)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="diya">Diya</option>
      </select>
    </label>
  );
}
