import { expect, Locator, Page } from '@playwright/test';
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async checkAriaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({ name: ariaName });
  }
  async closeCookieAlert() {
    const okButton = this.page.getByRole('button', { name: 'Ok', exact: true });

    if (await okButton.isVisible({ timeout: 0 })) {
      await okButton.click();
      await this.page.waitForTimeout(300);
    }
  }
  protected async checkLayoutByScreenshot(locator: Locator, screenshotName: string) {
    await expect(locator).toHaveScreenshot(screenshotName);
  }
  protected async hideElement(selector: string) {
    await this.page.evaluate((selector) => {
      const header = document.querySelector(selector);
      if (header) {
        (header as HTMLElement).style.display = 'none';
      }
    }, selector);
  }
}
