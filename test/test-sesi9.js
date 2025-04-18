const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

describe('Google Search Test', function () {
  let driver;

    it('Visit SauceDemo dan cek page title', async function () {
        options = new chrome.Options();
        driver = await new Builder().forBrowser('chrome').build();
        
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
    });

    it('Urutkan Produk dari Z ke A', async function () {
    // Pastikan halaman produk sudah terbuka
    await driver.wait(until.elementLocated(By.className('inventory_list')), 10000);

    // Pilih opsi pengurutan dari Z ke A
    let sortDropdown = await driver.findElement(By.css('[data-test="product_sort_container"]'));
    await sortDropdown.click();

    let zkea= await driver.findElement(By.css('option[value="za"]'));
    await zkea.findElement(By.css('option[value="za"]')).click();

    // // Ambil nama produk setelah diurutkan
    // let productNames = await driver.findElements(By.className('inventory_item_name'));
    // let productTexts = [];
    // for (let product of productNames) {
    //   productTexts.push(await product.getText());
    // }

    // Verifikasi bahwa produk diurutkan dari Z ke A
    let sortedProducts = [...productTexts].sort((a, b) => b.localeCompare(a));
    assert.deepStrictEqual(productTexts, sortedProducts, 'Produk tidak diurutkan dari Z ke A');

    await driver.sleep(3000);
    await driver.quit();
  });

//   it('Visit SauceDemo dan cek page title', async function () {
//     options = new chrome.Options();
//     driver = await new Builder().forBrowser('chrome').build();
//     // driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

//     await driver.get('https://www.saucedemo.com');
//     const title = await driver.getTitle();

//     // assert: memastikan object sama persis
//     assert.strictEqual(title, 'Swag Labs');

//     //input 
//     let inputUsername = await driver.findElement(By.css('[data-test="username"]'));
//     let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'));
//     let buttonLogin = await driver.findElement(By.className('submit-button btn_action'));

//     await inputUsername.sendKeys('standard_user');
//     await inputPassword.sendKeys('secret_sauce');
//     await buttonLogin.click();
    
//     //tunggu samoai element ada
//     let buttonCart = await driver.wait(until.elementLocated(By.xpath('//*[@data-test="shopping-cart-link"]')),
//         10000
//     );
//     await driver.wait(until.elementIsVisible(buttonCart), 5000, 'shopping cart harus tampil');

//     // //assert : memastikan object sama persis
//     await buttonCart.isDisplayed()
    
//     });
    // //assert: text dalam element benar
    // let textAppLogo = await driver.findElement(By.className('app_logo'));
    // let logotext = await textAppLogo.getText();
    // assert.strictEqual(logotext, 'Swag Labs');
    
    //urutkan produk dari Z-A
//     it('Urutkan Produk dari Z ke A', async function () {
//         // Pastikan halaman produk sudah terbuka
//         await driver.wait(until.elementLocated(By.className('inventory_list')), 10000);
    
//         // Pilih opsi pengurutan dari Z ke A
//         let sortDropdown = await driver.findElement(By.css('[data-test="product_sort_container"]'));
//         await sortDropdown.click();
//         await sortDropdown.findElement(By.css('option[value="za"]')).click();
    
//         // Ambil nama produk setelah diurutkan
//         let productNames = await driver.findElements(By.className('inventory_item_name'));
//         let productTexts = [];
//         for (let product of productNames) {
//           productTexts.push(await product.getText());
//         }
    
//         // Verifikasi bahwa produk diurutkan dari Z ke A
//         let sortedProducts = [...productTexts].sort((a, b) => b.localeCompare(a));
//         assert.deepStrictEqual(productTexts, sortedProducts, 'Produk tidak diurutkan dari Z ke A');
//     });
    

    // await driver.sleep(3000);
    // await driver.quit();
//   };

//   it ('Visit SauceDemo dan cek page title', async function () {
//     options = new chrome.Options();
//     options.addArguments('--headless');

//     driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

//     //driver = await new Builder().forBrowser('chrome').build();

//     await driver.get('https://www.saucedemo.com');
//     const title = await driver.getTitle();

//     await driver.quit();
});
