const {Builder, By, Key}  = require ('selenium-webdriver');

async function example () {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://to-do.live.com/tasks/myday');

    await driver.findElement(By.id('actionButton')).sendKeys(Key.RETURN)
    await driver.findElement(By.id('i0116')).sendKeys('Asadulloev_S@outlook.com', Key.RETURN)
}
example();