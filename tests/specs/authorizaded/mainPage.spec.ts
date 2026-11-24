import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера авторизованного пользователя', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов попапа уведомлений авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationsPopUp();
  await mainPage.notificationsPopupHasCorrectAriaShapshot();
});

test('Проверка доступности элементов раскрытого меню авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaShapshot();
});

test('Изменение темы', async ({ mainPage }) => {
  await mainPage.openProfileMenu();
  await mainPage.profileMenuHasCorrectAriaShapshot();

  const before = await mainPage.getThemeValue();
  await mainPage.changeTheme();
  const after = await mainPage.getThemeValue();

  expect(after).not.toBe(before);
  expect(after).toMatch(/^(dark|light)$/);
});
