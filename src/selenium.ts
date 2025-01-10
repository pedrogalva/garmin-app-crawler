import { Builder, Browser } from 'selenium-webdriver';


const seleniumService = async () => {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    return driver;
}


export default seleniumService;