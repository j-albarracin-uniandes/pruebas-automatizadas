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

When('I test pseudo data on element with xpath {kraken-string} with error {kraken-string} on file {kraken-string} expected errors', async function (xpath, errorXpath, file) {
    let data = require(file);
    var mydata = JSON.parse(JSON.stringify(data));  
    
    for (let item of mydata) {   
        console.log(item);     
        let element = await this.driver.$(xpath);
        await element.setValue(item.data);
        await element.setValue("\n");
        if(!await this.driver.$(errorXpath)){
            throw "El resultado no fue lo esperado";
        }
    }
    return true;
});

When('I test pseudo data on element with xpath {kraken-string} with error {kraken-string} on file {kraken-string} expected success', async function (xpath, errorXpath, file) {
    let data = require(file);
    var mydata = JSON.parse(JSON.stringify(data));  
    
    for (let item of mydata) {   
        console.log(item);     
        let element = await this.driver.$(xpath);
        await element.setValue(item.data);
        await element.setValue("\n");
        if(await this.driver.$(errorXpath)){
            throw "El resultado no fue lo esperado";
        }
    }
    return true;
});


