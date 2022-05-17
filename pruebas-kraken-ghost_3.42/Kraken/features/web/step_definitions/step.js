const { Given, When, Then } = require('@cucumber/cucumber');

When('Enter on element with xpath {kraken-string}', async function(xpath) {
    let element = await this.driver.$(xpath);
    return await element.setValue("\n");
});

When('I click element with xpath {kraken-string}', async function(xpath) {
    let element = await this.driver.$(xpath);
    return await element.click();
});

Then('I set text {kraken-string} on element with xpath {kraken-string}', async function (input, xpath) {
    let view = await this.driver.$(xpath);
    return await view.setValue(input);
});
