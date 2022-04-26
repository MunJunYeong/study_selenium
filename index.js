const {Builder, By, Key, until} = require('selenium-webdriver');

const secret = require('./secret');

const init = async () => {
    const driver = await new Builder()
    .forBrowser('chrome')
    .build();

    return driver;
}

const musinsa = async () => {
    const driver = await init();

    await driver.get('https://www.musinsa.com/app/');
    await driver.executeScript("document.getElementsByClassName('header-member__login')[0].click()");

    await driver.wait(until.elementLocated(By.className('login-input__input')), 10000);
    await driver.executeScript(`document.getElementsByClassName('login-input__input')[0].value = '${secret.interpark.id}'`);
    await driver.executeScript(`document.getElementsByClassName('login-input__input')[1].value = '${secret.interpark.pw}'`);

    await driver.executeScript("document.getElementsByClassName('login-button__item login-button__item--black')[0].click()");

}

const file = async () => {
    const driver = await init();
    await driver.get('https://www.filejo.com/');
    await driver.SwitchTo().Frame(driver.FindElement(By.Id("Frame1")));
    // await driver.wait(until.elementLocated(By.className('id_focus')), 10000);
    await driver.executeScript(`document.getElementsByClassName('id_focus')[0].value = '${secret.interpark.id}'`);
    // await driver.executeScript(`document.getElementsByName('mb_pw').value = '${secret.interpark.pw}'`);
    
}

const interpark = async () => {
    const driver = await init();
    
    await driver.get('http://ticket.interpark.com/');
    await driver.executeScript("document.getElementById('aLogin').click()");

    await driver.switchTo().frame(0);
    

    
    // await driver.wait(until.elementLocated(By.id('userId')), 10000);


    //
    await driver.executeScript(`document.getElementById('userId').value = '${secret.interpark.id}'`);
    await driver.executeScript(`document.getElementById('userPwd').value = '${secret.interpark.pw}'`);
    await driver.executeScript("document.getElementById('btn_login').click()");

    await driver.get('https://ticket.interpark.com/Contents/Sports/GoodsInfo?SportsCode=07032&TeamCode=PE015');
    
};

file();
// musinsa();
// interpark();
