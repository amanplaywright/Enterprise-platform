import {test,expect} from'@playwright/test';
test("demo",async({page})=>{

await page.goto("https://www.saucedemo.com/");
await page.locator("//input[@name='user-name']").fill("standard_user");
await page.locator("//input[@type='password']").fill("secret_sauce ")
await page.locator("//input[@id='login-button']").click();




})