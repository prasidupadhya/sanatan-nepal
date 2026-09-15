import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ThemeControl from '../src/components/ui/ThemeControl';
import { useThemeStore } from '../src/store/useThemeStore';
afterEach(cleanup);
it('applies and persists Diya mode', () => {
  useThemeStore.setState({ theme: 'light' });
  render(<ThemeControl />);
  fireEvent.change(screen.getByRole('combobox', { name: 'Color theme' }), {
    target: { value: 'diya' },
  });
  expect(document.documentElement.dataset.theme).toBe('diya');
  expect(
    JSON.parse(localStorage.getItem('sanatan-nepal-theme')!).state.theme,
  ).toBe('diya');
});
