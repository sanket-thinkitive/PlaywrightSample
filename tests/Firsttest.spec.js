const{test,expect}= require('@playwright/test')

test('Home page',async({page})=>
{
    await page.goto('https://dev.ssemble.com/');
    //await page.locator().click();
    /*await page.fill("//input[@id='email']","nishant@ssemble.com");
    await page.fill("//input[@id='password']","Test@123");
    await page.click("//button[text()='Sign in']");*/

    await page.waitForTimeout(10000);



// expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixels: 200 });
 

 // Capture a screenshot of the login page
await page.screenshot({ path: 'tests/comparison' + Date.now() + 'loginPage.png' });
expect(await page.screenshot()).toMatchSnapshot();


})