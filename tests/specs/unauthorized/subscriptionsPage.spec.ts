import test, { expect } from '@playwright/test';
import { SubscriptionsPage } from '../../pages/SubscriptionsPage';

test('Проверка доступности контента для неавторизованного пользователя', async ({ page }) => {
  const subscriptionsPage = new SubscriptionsPage(page);
  await subscriptionsPage.open();
  await subscriptionsPage.closeCookieAlert();
  await subscriptionsPage.contentHasCorrectAriaSnapshot();
});
