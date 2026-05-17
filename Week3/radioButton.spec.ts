import {test,expect} from "@playwright/test"
test("Radio button",async({page})=>{
    await page.goto("https://leafground.com/radio.xhtml")
    expect(page.getByText('Firefox').last()).toBeVisible()
    await page.getByText("Firefox").last().click()
    await page.getByText('Firefox').first().click()
    expect(page.getByText('Firefox').first()).toBeEnabled()
    await page.getByText('Chennai').last().click()
    await page.getByText(`21-40 Years`).last().click()
    let age = page.locator(`[class="ui-radiobutton-icon ui-icon ui-icon-bullet ui-c"]`).last()
    expect(age).toHaveClass(`ui-radiobutton-icon ui-icon ui-icon-bullet ui-c`)
   
    
})