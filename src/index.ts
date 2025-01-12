import { SeleniumDriver } from "./selenium";
import { sleep } from "./utils";

const app = async () => {
  let driver = new SeleniumDriver();
  await driver.init();
  await garminAppLogin(driver);
};

const garminAppLogin = async (driver: SeleniumDriver) => {
  driver.getUrl("https://connect.garmin.com/modern/");

  if (
    (await driver.getCurrentUrl()).includes(
      "https://connect.garmin.com/modern/home"
    )
  ) {
    return true;
  }

  await driver.sendKeys("galvanipedro11@gmail.com", false, '//*[@id="email"]');

  await driver.sendKeys("V!v!guita123", false, '//*[@id="password"]');

  await driver.clickElement(
    false,
    '//*[@id="portal"]/div[2]/div/div/div/div/form/section[2]/g-button/button'
  );
};

export default app;
