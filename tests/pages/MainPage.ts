import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabsLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationsButtonLocator: Locator;
  private readonly headerLoginButtonLocator: Locator;
  private readonly headerAddButtonPopupListLocator: Locator;
  private readonly headerNotificationsPopupLocator: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly openProfileMenuButtonLocator: Locator;
  private readonly profileMenuLocator: Locator;
  private readonly changeThemeButtonLocator: Locator;
  private readonly themeAttributeLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByRole('banner');
    this.categoriesTabsLocator = this.page.getByRole('tablist');
    this.menuLocator = this.page.getByRole('navigation', { name: 'Облегченная панель навигации' });
    this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
    this.headerNotificationsButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход' });
    this.headerAddButtonPopupListLocator = this.page.getByRole('menu', { name: 'Добавить' });
    this.headerNotificationsPopupLocator = this.page.locator(
      '.wdp-notifications-popup-module__wrapper',
    );
    this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.openMenuAriaLocator = this.page.locator('.menu-content-module__content--open');
    this.openProfileMenuButtonLocator = this.page.getByRole('button', {
      name: 'Открыть меню пользователя',
    });
    this.profileMenuLocator = this.page.getByRole('dialog', { name: 'Меню пользователя' });
    this.changeThemeButtonLocator = this.page.getByRole('button', {
      name: 'Изменить тему оформления',
    });
    this.themeAttributeLocator = this.page.locator('html[data-themeid]');
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
  }
  async openAddPopupList() {
    await this.headerAddButtonLocator.click();
  }
  async openNotificationsPopUp() {
    await this.headerNotificationsButtonLocator.click();
  }
  async clickLoginButton() {
    await this.headerLoginButtonLocator.click();
  }
  async openFullMenu() {
    await this.menuButtonLocator.click();
  }
  async openProfileMenu() {
    await this.openProfileMenuButtonLocator.click();
  }
  async changeTheme() {
    await this.changeThemeButtonLocator.click();
  }
  async getThemeValue(): Promise<string | null> {
    return this.themeAttributeLocator.getAttribute('data-themeid');
  }
  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({ name: 'headerAriaSnapshot.yml' });
  }
  async categoriesTabsHasCorrectAriaSnapshot() {
    await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({ name: 'categoriesTabs.yml' });
  }
  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({ name: 'menuSnapshot.yml' });
  }
  async addPopupListHasCorrectAriaShapshot() {
    await expect(this.headerAddButtonPopupListLocator).toMatchAriaSnapshot({
      name: 'addButtonPopupList.yml',
    });
  }
  async notificationsPopupHasCorrectAriaShapshot() {
    await expect(this.headerNotificationsPopupLocator).toMatchAriaSnapshot({
      name: 'notificationsPopup.yml',
    });
  }
  async fullMenuHasCorrectAriaShapshot() {
    await expect(this.openMenuAriaLocator).toMatchAriaSnapshot({
      name: 'fullMenuSnapshot.yml',
    });
  }
  async profileMenuHasCorrectAriaShapshot() {
    await expect(this.profileMenuLocator).toMatchAriaSnapshot({
      name: 'profileShapshot.yml',
    });
  }
}
