import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test.use({ reducedMotion: 'reduce' });
test('main explorers meet automated WCAG checks in each theme', async ({
  page,
}) => {
  for (const theme of ['light', 'dark', 'diya']) {
    for (const route of [
      '/',
      '/explore',
      '/read/festivals',
      '/temples',
      '/read/bhagavad-gita',
    ]) {
      await page.goto(route);
      await page.getByLabel('Color theme').selectOption(theme);
      if (route === '/explore')
        await page.locator('.react-flow__node').first().waitFor();
      if (route === '/read/festivals')
        await page.locator('.year-wheel').waitFor();
      if (route === '/temples')
        await page.locator('.leaflet-container').waitFor();
      if (route === '/read/bhagavad-gita')
        await page.locator('.gita-grid').waitFor();
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(result.violations, theme + ' ' + route).toEqual([]);
    }
  }
});
