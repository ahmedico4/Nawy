import { test, expect , Page } from '@playwright/test';

test('Valid Sign Up Scenario_1', async ({page})=> {
    page.on('dialog', async dialog => {
    if(dialog.message()==='Sign up successful.'){
            console.log(`Dialog message: ${dialog.message()}`);
            // await expect(dialog.message()).toMatch('Sign up successful.')
            await dialog.accept();
        }
    else{
        console.log(`ERROR:${dialog.message()}`);
        await expect(dialog.message()).toMatch('Sign up successful.');
        await dialog.dismiss();
    }
  });
    await page.goto('https://www.demoblaze.com/');
    await page.locator("//a[@id='signin2']").click(); 
    await page.locator("//input[@id='sign-username']").fill('Ahmed1234567891011123');
    await page.locator("//input[@id='sign-password']").fill('AhmedAhmed');
    await page.locator("//button[normalize-space()='Sign up']").click();
    await page.waitForTimeout(2000);
});

test('Valid Sign in Scenario_2', async ({page})=> {

    await page.goto('https://www.demoblaze.com/');
    await page.locator("//a[@id='login2']").click(); 
    await page.locator("//input[@id='loginusername']").fill('Ahmed1234567891011123');
    await page.locator("//input[@id='loginpassword']").fill('AhmedAhmed');
    await page.locator("//button[normalize-space()='Log in']").click();
    await expect(page.locator("//a[@id='nameofuser']")).toContainText("Welcome Ahmed1234567891011123");
});

test('Log out Scenario_3', async ({page})=> {

    await page.goto('https://www.demoblaze.com/');
    await page.locator("//a[@id='login2']").click(); 
    await page.locator("//input[@id='loginusername']").fill('Ahmed1234567891011123');
    await page.locator("//input[@id='loginpassword']").fill('AhmedAhmed');
    await page.locator("//button[normalize-space()='Log in']").click();
    await expect(page.locator("//a[@id='nameofuser']")).toContainText("Welcome Ahmed1234567891011123");
    await page.locator("//a[@id='logout2']").click();
    await expect(page.locator("//a[@id='login2']")).toContainText("Log in");
});

test('Create an order Scenario_4', async ({page})=> {

    page.on('dialog', async dialog => {
    if(dialog.message()==='Sign up successful.'){
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        }
    else{
        console.log(`ERROR:${dialog.message()}`);
        // await expect(dialog.message()).toMatch('Sign up successful.');
        await dialog.dismiss();
    }
  });

    await page.goto('https://www.demoblaze.com/');
    await page.locator("//a[@id='login2']").click(); 
    await page.locator("//input[@id='loginusername']").fill('Ahmed1234567891011123');
    await page.locator("//input[@id='loginpassword']").fill('AhmedAhmed');
    await page.locator("//button[normalize-space()='Log in']").click();
    await expect(page.locator("//a[@id='nameofuser']")).toContainText("Welcome Ahmed1234567891011123");
    await page.locator("(//a[normalize-space()='Monitors'])[1]").click();
    await expect(page.locator("//a[normalize-space()='Apple monitor 24']")).toContainText("Apple monitor 24");
    await page.locator("//a[normalize-space()='Apple monitor 24']").click();
    await expect(page.locator("//a[normalize-space()='Add to cart']")).toContainText("Add to cart");
    await page.locator("//a[normalize-space()='Add to cart']").click();
    await page.locator("(//a[normalize-space()='Cart'])[1]").click();
    await expect(page.locator("//button[normalize-space()='Place Order']")).toContainText("Place Order");
    await page.locator("//button[normalize-space()='Place Order']").click();
    await page.locator("//input[@id='name']").fill('Ahmed'); 
    await page.locator("//input[@id='country']").fill('Egypt');
    await page.locator("//input[@id='city']").fill('Cairo');
    await page.locator("//input[@id='card']").fill('123456789');
    await page.locator("//input[@id='month']").fill('7'); 
    await page.locator("//input[@id='year']").fill('1997');
    await page.locator("//button[normalize-space()='Purchase']").click();
    await expect(page.locator("//h2[normalize-space()='Thank you for your purchase!']")).toContainText("Thank you for your purchase!");
});