import{test,expect} from'@playwright/test';
test('email validation',async({page})=>{
    //Navigate to platform-qa env
    await page.goto("https://platform-qa.terradotta.com/");
    //Set timeout to remove missing translation
    await page.locator("//input[@id='email-input']").waitFor({timeout:20000});
    //check if email field is enabled
    await expect (page.locator("//input[@id='email-input']")).toBeEnabled();
    //check if email field is editable
    await expect (page.locator("//input[@id='email-input']")).toBeEditable();
    //check by filling if its editable
    await page.locator("//input[@id='email-input']").fill("test_email_using_playwright");
    //check if email field is having correct set of value
    await expect(page.locator("//input[@id='email-input']")).toHaveValue("test_email_using_playwright");






})