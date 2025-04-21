const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

describe('Google Search Test', function (){
    let driver;

    beforeEach(async function (){
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Visit SauceDemo dan cek page title', async function (){
        options = new chrome.Options();
        //driver = await new Builder().forBrowser('chrome').build();
        
        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        assert.strictEqual(title, 'Swag Labs');

        let inputUsername = await driver.findElement(By.css('[data-test="username"]'));
        let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'));
        let buttonLogin = await driver.findElement(By.className('submit-button btn_action'));

        await inputUsername.sendKeys('standard_user');
        await inputPassword.sendKeys('secret_sauce');
        await buttonLogin.click();

        let buttonCart = await driver.wait(until.elementLocated(By.xpath('//*[@data-test="shopping-cart-link"]')),
        10000
        );
        await driver.wait(until.elementIsVisible(buttonCart), 5000, 'shopping cart harus tampil');

        await buttonCart.isDisplayed()

        //await driver.sleep(3000);
    });
    
    

    it.skip('Sort mengurutkan barang dari Z ke A', async function () {
        await driver.get('https://www.saucedemo.com');
        //const title = await driver.getTitle(); 

        // Login
        await driver.findElement(By.css('[data-test="username"]')).sendKeys('standard_user');
        await driver.findElement(By.css('[data-test="password"]')).sendKeys('secret_sauce');
        await driver.findElement(By.css('[data-test="login-button"]')).click();

        // Tunggu redirect ke halaman produk
        await driver.wait(until.urlContains('inventory.html'), 10000);
        await driver.wait(until.elementLocated(By.className('inventory_list')), 10000);
        await driver.wait(until.elementLocated(By.css('[data-test="product_sort_container"]')), 5000);

        // Sort Z ke A
        const sortDropdown = await driver.findElement(By.css('[data-test="product_sort_container"]'));
        await sortDropdown.sendKeys('Name (Z to A)');

        // Tunggu sejenak supaya produk tersortir
        await driver.sleep(1000);

        // Ambil semua nama produk
        const productElements = await driver.findElements(By.className('inventory_item_name'));
        const productNames = [];
        for (let el of productElements) {
            const name = await el.getText();
            productNames.push(name);
        }

        // Verifikasi urutan Z ke A
        const sortedNames = [...productNames].sort((a, b) => b.localeCompare(a));
        assert.deepStrictEqual(productNames, sortedNames, 'Produk tidak diurutkan dari Z ke A');
    });

    afterEach(async function () {
        await driver.sleep(3000);
        await driver.quit()
    });
});