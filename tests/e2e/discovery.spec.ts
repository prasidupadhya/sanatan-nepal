import { test, expect } from '@playwright/test';

test('homepage selection persists and opens the selected tradition', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  const kumari = page.getByRole('button', { name: /Kumari/ });
  await kumari.focus();
  await page.keyboard.press('Enter');
  await expect(kumari).toHaveAttribute('aria-pressed', 'true');
  await expect(page).toHaveURL(/topic=kumari/);
  await page.reload();
  await expect(
    page.getByRole('heading', { name: 'Kumari: the Living Goddess' }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Explore Kumari', exact: true }).click();
  await expect(page).toHaveURL(/read\/kumari/);
  const sources = page
    .getByRole('navigation', { name: 'On this page' })
    .getByRole('link', { name: 'Sources', exact: true });
  await sources.click();
  await expect(page.locator('#sources')).toBeInViewport();
  await page.reload();
  await expect(page.locator('#sources')).toBeInViewport();
  expect(errors).toEqual([]);
});

test('branch filtering supports alternate spellings, URLs and empty recovery', async ({
  page,
}) => {
  await page.goto('/branch/epics');
  await page.getByLabel('Find a topic in this section').fill('Ravan');
  await expect(page.locator('.topic-rows')).toContainText('Ravana');
  await expect(page).toHaveURL(/q=Ravan/);
  await page.reload();
  await expect(page.getByLabel('Find a topic in this section')).toHaveValue(
    'Ravan',
  );
  await page.getByLabel('Find a topic in this section').fill('zzzzunknown');
  await expect(
    page.getByRole('heading', { name: 'No matching topics in this section' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Clear filter' }).click();
  await expect(page.locator('.topic-rows')).toContainText('Mahabharata');
  await page.goto('/');
  await page.getByLabel('What would you like to understand?').fill('Geeta');
  await page.getByRole('button', { name: 'Search the encyclopedia' }).click();
  await expect(page.locator('.search-results')).toContainText('Bhagavad Gita');
});

test('new layouts fit narrow screens in all themes', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  for (const theme of ['light', 'dark', 'diya']) {
    for (const route of ['/', '/branch/nepal', '/read/kumari']) {
      await page.goto(route);
      await page.getByLabel('Color theme').selectOption(theme);
      await page.locator('h1').waitFor();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        theme + route,
      ).toBe(true);
    }
  }
  await page.screenshot({
    path: 'test-results/reading-mobile.png',
    fullPage: true,
  });
});
