import { SeleniumDriver } from "./selenium";
import { sleep } from "./utils";

const app = async () => {
  let driver = new SeleniumDriver();
  await driver.init();
  await driver.getUrl("https://www.google.com");
};

export default app;
