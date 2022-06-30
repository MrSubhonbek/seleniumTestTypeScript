const { Builder, By, Key } = require('selenium-webdriver');
const assert = require('assert')
async function example() {
    //launch the browser
    let driver = await new Builder().forBrowser('chrome').build();

    //navigate to our applications
    await driver.get('https://mrsubhonbek.github.io/seleniumTestTypeScript/');

    //add a todo
    await driver.findElement(By.id('inputId')).sendKeys('Asadulloev_S@outlook.com', Key.RETURN);

    //assert
    let todoText = await driver.findElement(By.xpath('//p[text() = "Asadulloev_S@outlook.com"]')).getText().then(function (value) {
        return value;
    });
    assert.strictEqual(todoText,'Asadulloev_S@outlook.com');
    //close the browser
    await driver.quit();
}
example();