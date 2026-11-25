import test, { expect } from '@playwright/test';
import { SubscriptionsPage } from '../../pages/SubscriptionsPage';

test('Проверка доступности контента для неавторизованного пользователя', async ({ page }) => {
  const subscriptionsPage = new SubscriptionsPage(page);
  await subscriptionsPage.open();
  await page.getByRole('heading', { name: /моё/i }).waitFor({ state: 'visible', timeout: 10000 });
  await subscriptionsPage.closeCookieAlert();
  await expect(page.getByRole('heading', { name: /моё/i })).toBeVisible();
  await expect(page.getByRole('navigation')).toBeVisible();
});
