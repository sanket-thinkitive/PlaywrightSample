const{test,expect}= require('@playwright/test')

test('Home page',async({page})=>
{
    await page.goto('https://www.dev.com');

})