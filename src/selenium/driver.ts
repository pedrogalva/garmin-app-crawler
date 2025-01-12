import { Builder, Browser, WebDriver, By } from "selenium-webdriver";

export class SeleniumDriver {
  #driver!: WebDriver;

  constructor() {}

  public async init() {
    this.#driver = await this.createSeleniumService();
  }

  private async createSeleniumService() {
    return await new Builder().forBrowser(Browser.CHROME).build();
  }

  public async getUrl(url: string) {
    await this.#driver.get(url);
  }

  public async findElementXPath(xPath: string) {
    return await this.#driver.findElement(By.xpath(xPath));
  }

  public async clickElementXPath(xPath: string) {
    let element = await this.findElementXPath(xPath);
    await element.click();
  }

  public async getPageHtml() {
    return await this.#driver.getPageSource();
  }
}
