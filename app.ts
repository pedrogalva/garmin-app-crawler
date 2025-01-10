import seleniumService from "./src/selenium.ts";

const app = async () => {
    let driver = await seleniumService();
    await driver.get("https://www.google.com");
    await driver.quit();
}

app();