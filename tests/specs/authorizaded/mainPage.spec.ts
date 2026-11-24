import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Изменение темы', async ({ mainPage }) => {
  await mainPage.openProfileMenu();
  await mainPage.profileMenuHasCorrectAriaShapshot();

  const before = await mainPage.getThemeValue();
  await mainPage.changeTheme();
  const after = await mainPage.getThemeValue();

  expect(after).not.toBe(before);
  expect(after).toMatch(/^(dark|light)$/);
});
