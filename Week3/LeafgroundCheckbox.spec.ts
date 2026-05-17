import {test,expect} from "@playwright/test"
test("LeafgroungCheckbox",async({page})=>{
    await page.goto("https://leafground.com/checkbox.xhtml")
    await page.locator('//span[text()="Basic"]').click()
    await page.locator(`//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]`).nth(0).click()
    await expect(page.locator(`[class="ui-growl-title"]`)).toBeVisible()
    await page.getByText('Python').click()
    await page.locator(`[class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]`).nth(4).click()
    await expect(page.getByText(`State has been changed.`)).toBeVisible()
    let state= page.locator('//p[contains(text(),"State")]')
    let text = await state.innerText()
    console.log(`text`);
    await page.locator('[class="ui-toggleswitch-slider"]').click()
    await expect(page.locator('//span[text()="Checked"]')).toBeVisible()
    await page.locator(`//span[text()='Disabled']`).isDisabled()
    await page.locator(`[class="ui-selectcheckboxmenu-trigger ui-state-default ui-corner-right"]`).click()
    await page.locator(`//label[text()="Berlin"]`).nth(1).click()
    await page.locator(`[class="ui-icon ui-icon-circle-close"]`).click()    
}
)