import { test, expect } from '@playwright/test';
test('homepage fits desktop and mobile', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Many paths. One living heritage.' }),
  ).toBeVisible();
  await page.screenshot({
    path: 'test-results/home-desktop.png',
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({
    path: 'test-results/home-mobile.png',
    fullPage: true,
  });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
test('deep links, Gita chapters, bookmarks, themes and search', async ({
  page,
}) => {
  await page.goto('/read/bhagavad-gita?chapter=18');
  await expect(
    page.getByRole('heading', { name: 'Freedom and commitment' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Previous', exact: true }).click();
  await expect(page).toHaveURL(/chapter=17/);
  await page.getByRole('button', { name: 'Save chapter', exact: true }).click();
  await page.getByRole('button', { name: 'Mark as completed' }).click();
  await page.getByLabel('Color theme').selectOption('diya');
  await page.reload();
  await expect(
    page.getByRole('button', { name: 'Saved chapter', exact: true }),
  ).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'diya');
  await page.goto('/search?q=Ravan');
  await page
    .getByRole('link', { name: /Ravana/ })
    .first()
    .click();
  await expect(
    page.getByRole('heading', { name: 'Ravana', exact: true }),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Shiva', exact: true }).click();
  await expect(
    page.getByRole('heading', { name: 'Shiva’s family and connections' }),
  ).toBeVisible();
});
test('family, festival and temple interactions', async ({ page }) => {
  await page.goto('/read/mahabharata');
  await expect(
    page.getByRole('heading', { name: 'The Kuru family' }),
  ).toBeVisible();
  await page.getByText('Choose a person from a list').click();
  await page
    .getByRole('button', { name: 'Arjuna', exact: true })
    .last()
    .click();
  await expect(page.locator('.tree-panel h3')).toHaveText('Arjuna');
  await page.goto('/read/ramayana');
  await expect(
    page.getByRole('heading', { name: 'The Ikshvaku / Raghu lineage' }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Trace the exile journey' }),
  ).toBeVisible();
  await page.goto('/read/festivals');
  await page.getByRole('button', { name: '7. Tihar', exact: true }).click();
  await expect(page.locator('.gita-reading h3')).toHaveText('Tihar');
  await page.goto('/temples');
  await page
    .locator('.chips')
    .getByRole('button', { name: 'Muktinath', exact: true })
    .click();
  await expect(page.locator('.gita-reading h3')).toHaveText('Muktinath');
  await expect(page).toHaveURL(/temple=muktinath/);
});
test('knowledge tree selection and small-screen explorers', async ({
  page,
}) => {
  await page.goto('/explore');
  await expect(page.locator('.react-flow__node').first()).toBeVisible();
  await page
    .locator('.react-flow__node')
    .filter({ hasText: 'The Great Epics' })
    .click();
  await expect(page.locator('.tree-panel h2')).toHaveText('The Great Epics');
  await page
    .locator('.react-flow__node')
    .filter({ hasText: 'Mahabharata' })
    .click();
  await expect(page.locator('.tree-panel h2')).toHaveText('Mahabharata');
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of [
    '/explore',
    '/read/mahabharata',
    '/read/ramayana',
    '/read/festivals',
    '/temples',
    '/saved',
  ]) {
    await page.goto(route);
    await page.locator('h1').waitFor();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      route,
    ).toBe(true);
  }
  await page.goto('/read/festivals');
  await page.screenshot({
    path: 'test-results/festival-mobile.png',
    fullPage: true,
  });
});
test('tree illuminates Ravana’s cross-branch connection to Shiva', async ({
  page,
}) => {
  await page.goto('/explore');
  await page
    .locator('.react-flow__node')
    .filter({ hasText: 'The Great Epics' })
    .click();
  const node = page
    .locator('.react-flow__node')
    .filter({ hasText: /^Ravana$/ });
  await node.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.tree-panel h2')).toHaveText('Ravana');
  await expect(page.locator('.react-flow__node.related-node')).toHaveText(
    'Shiva',
  );
});
