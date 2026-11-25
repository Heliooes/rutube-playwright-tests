import { Locator, Page } from '@playwright/test';
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

  // actions

  async open() {
    await this.page.goto('/');
  }
  async openAddPopupList() {
    await this.headerAddButtonLocator.click();
  }
  async openNotificationsPopup() {
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

  // getters
  async getThemeValue(): Promise<string | null> {
    return this.themeAttributeLocator.getAttribute('data-themeid');
  }

  // assertions

  async headerHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerLocator, 'headerAriaSnapshot.yml');
  }
  async categoriesTabsHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.categoriesTabsLocator, 'categoriesTabs.yml');
  }
  async menuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.menuLocator, 'menuSnapshot.yml');
  }
  async addPopupListHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerAddButtonPopupListLocator, 'addButtonPopupList.yml');
  }
  async notificationsPopupHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerNotificationsPopupLocator, 'notificationsPopup.yml');
  }
  async fullMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.openMenuAriaLocator, 'fullMenuSnapshot.yml');
  }
  async profileMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.profileMenuLocator, 'profileSnapshot.yml');
  }
}
