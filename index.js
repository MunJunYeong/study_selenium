const {Builder, By, Key, until} = require('selenium-webdriver');

const init = async () => {
    const driver = await new Builder()
    .forBrowser('chrome')
    .build();

    return driver;
}

const delay = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve();} ,time);
    })
}

const start = async () => {
    const driver = await init();
    
    await driver.get('http://ticket.interpark.com/');

    
    // // const query = await driver.findElement({id: 'query'});
    // await driver.executeScript("document.getElementById('userPwd').setAttribute('value','당산 맛집')");
    await driver.executeScript("document.getElementById('aLogin').click()");
    await driver.sleep(5000);
    await delay(5000);
    
    
    await driver.executeScript("document.getElementById('userId').value = 'hihi'");
    await driver.executeScript("document.getElementById('userPwd').value = 'hihi'");
    await driver.executeScript("document.getElementById('btn_login').click()");
    
};

start();
