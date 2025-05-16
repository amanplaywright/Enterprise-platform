import {test,expect} from'@playwright/test';
test("demo",async({page})=>{

await page.goto("https://www.saucedemo.com/");
await page.locator("//input[@id='login-button']")
await expect(page.locator("//input[@id='login-button']")).toHaveCount(1);



})