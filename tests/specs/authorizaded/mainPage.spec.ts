import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера авторизованного пользователя', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов попапа уведомлений авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationsPopup();
  await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов раскрытого меню авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaSnapshot();
});

test('Изменение темы', async ({ mainPage }) => {
  await mainPage.openProfileMenu();
  await mainPage.profileMenuHasCorrectAriaSnapshot();

  const before = await mainPage.getThemeValue();
  await mainPage.changeTheme();
  const after = await mainPage.getThemeValue();

  expect(after).not.toBe(before);
  expect(after).toMatch(/^(dark|light)$/);
});
