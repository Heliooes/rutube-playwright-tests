import { test, expect } from '@playwright/test';

test('Сессия авторизации работает', async ({ page }) => {
  await page.goto('https://rutube.ru/');
  await page.waitForTimeout(3000); // даём время на рендер шапки

  const avatar = page.locator('button[aria-label="Открыть меню пользователя"]').first();

  await expect(avatar).toBeVisible({ timeout: 10000 });
});
