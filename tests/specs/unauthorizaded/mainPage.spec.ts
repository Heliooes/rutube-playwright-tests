import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов табов категорий', async ({ mainPage }) => {
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов списка добавления контента', async ({ mainPage }) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaShapshot();
});

test('Проверка доступности элементов попапа уведомлений', async ({ mainPage }) => {
  await mainPage.openNotificationsPopUp();
  await mainPage.notificationsPopupHasCorrectAriaShapshot();
});

test('Клик по кнопке "Вход" ведёт на страницу авторизации', async ({ mainPage }) => {
  await mainPage.clickLoginButton();
  await expect(mainPage.page).toHaveURL(/auth\.gid\.ru/);
});

test('Проверка доступности элементов раскрытого меню', async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaShapshot();
});
