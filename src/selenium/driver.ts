import {
  Builder,
  Browser,
  WebDriver,
  By,
  WebElement,
} from "selenium-webdriver";

import { sleep } from "../utils";

export class SeleniumDriver {
  #driver!: WebDriver;
  #defaultDelayMs: number;

  constructor(defaultDelayMs: number = 1000) {
    this.#defaultDelayMs = defaultDelayMs;
  }

  private async delayUse(delayMs: number) {
    await sleep(delayMs);
  }

  public async init() {
    this.#driver = await this.createSeleniumService();
  }

  private async createSeleniumService() {
    return await new Builder().forBrowser(Browser.CHROME).build();
  }

  public async getUrl(url: string, customDelay = this.#defaultDelayMs) {
    await this.delayUse(customDelay);

    await this.#driver.get(url);
  }

  public async findElementXPath(
    xPath: string,
    customDelay = this.#defaultDelayMs
  ) {
    await this.delayUse(customDelay);

    return await this.#driver.findElement(By.xpath(xPath));
  }

  public async getPageHtml(customDelay = this.#defaultDelayMs) {
    await this.delayUse(customDelay);

    return await this.#driver.getPageSource();
  }

  public async getCurrentUrl(customDelay = this.#defaultDelayMs) {
    await this.delayUse(customDelay);

    return await this.#driver.getCurrentUrl();
  }

  public async clickElement(
    element: WebElement | false,
    xPath = "",
    customDelay = this.#defaultDelayMs
  ) {
    await this.delayUse(customDelay);

    if (element === false) {
      element = await this.findElementXPath(xPath);
    }
    await element.click();
  }

  public async sendKeys(
    keys: string,
    element: WebElement | false,
    xPath = "",
    customDelay = this.#defaultDelayMs
  ) {
    await this.delayUse(customDelay);

    if (element === false) {
      element = await this.findElementXPath(xPath);
    }
    await element.sendKeys(keys);
  }
}
