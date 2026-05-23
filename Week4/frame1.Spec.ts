import {test,expect} from "@playwright/test"
test("Service Now",async({page})=>{
    await page.goto("https://dev304842.service-now.com/login.do")
    await page.getByRole("textbox",{name: "User name"}).first().fill("admin")
    await page.getByRole("textbox",{name: "Password"}).fill("T3REAv8g@lo@")
    await page.getByRole("button",{name: "Log in"}).click()
    await page.getByRole("menuitem",{name: "All"}).click()
    await page.getByText("Service Catalog").first().click()
    
    let frames = page.frameLocator(`[title="Main Content"]`)
    await frames.locator(`//h2[contains(text(),"Mobiles")]`).click()
    await frames.locator(`//strong[text()="Apple iPhone 13"]`).click()
    await frames.locator(`//label[text()="No"]`).click()
    
    await frames.locator(`[class="form-control cat_item_option "]`).selectOption({label:"500MB [add $1.00]"})
    await expect(frames.locator(`//label[text()="Starlight"]`)).toBeVisible()
    await frames.locator(`//label[text()="Starlight"]`).click()
    await frames.getByText(`256 GB [add $100.00]`).click()
    await frames.getByRole("button",{name: "Order Now"}).first().click()
    let text = frames.getByText("Thank you, your request has been submitted")
    await page.waitForLoadState()
    await expect(text).toBeVisible()
    let status = await text.innerText()
    console.log(`text of submission${status}`);
    let titlle = await expect(page).toHaveTitle(/ServiceNow/)
    let url = await expect(page).toHaveURL(/service-now/)
})