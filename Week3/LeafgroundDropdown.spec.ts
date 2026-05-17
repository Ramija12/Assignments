import {test} from "@playwright/test"
test("LeafgroundDropdown",async({page})=>{
    await page.goto("https://leafground.com/select.xhtml")
    let Tool =  page.locator('[class="ui-selectonemenu"]').first()
    
    let tool1 = await Tool.count()
    for (let index = 0; index <tool1; index++) {
        let total = await Tool.nth(index).innerText()
        console.log(`total tool${index} : ${total}`);       
    }
    
    await page.locator('//label[text()="Select Country"]').nth(0).click()
    await page.locator('//li[text()="Germany"]').click()
    await page.locator('//label[text()="Select City"]').click()
    await page.locator(`//li[text()="Munich"]`).click()
    await page.locator(`[class="ui-button-text"]`).click()
    await page.locator(`//li[text()="AWS"]`).click()
    await page.locator(`[class="ui-button-text"]`).click()
    await page.locator(`//li[text()="Appium"]`).click()
    await page.locator(`[class="ui-button-text"]`).click()
    await page.locator(`//li[text()="Playwright"]`).click()
    await page.locator(`//label[text()="Select Language"]`).click()
    let language =page.locator('//ul[contains(@id,"lang_items")]/li')
     
    
    let count = await language.count()
    for (let i = 0; i < count; i++) {
        let textvalue = await language.nth(i).innerText()
        console.log(textvalue);
        
    }
    
    await page.locator(`//li[text()="Telugu"]`).click()
    await page.locator(`//label[text()="Select Values"]`).click()
    await page.locator(`[data-label="మూడు"]`).click()


})