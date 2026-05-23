import {test} from "@playwright/test"
import values from "../../Data/Data.json"
import { stat } from "fs"
test.describe("Test run serial mode",()=> {
test ("Data Permentization ",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByRole("textbox",{name: "Username"}).fill("democsr2")
    await page.getByRole("textbox",{name: "Password"}).fill("crmsfa")
    await page.getByRole("button",{name: "Login"}).click()
    await page.getByRole("link",{name: "CRM/SFA"}).click()
    await page.getByRole("link",{name: "Leads"}).click()
    for(let data of values){
    await page.getByRole("link",{name: "Create Lead"}).click()
    await page.locator(`[name="companyName"]`).first().fill(data.companyName)
    await page.locator(`//input[@name="firstName"]`).last().fill(data.firstName)
    await page.locator(`//input[@name="lastName"]`).last().fill(data.lastName)
    await page.locator(`[name="dataSourceId"]`).selectOption(data.Source)
    let campain1 = page.locator(`[name="marketingCampaignId"]`)
    let count = await campain1.count()
    for (let i = 0; i < count; i++) {
        const element = await campain1.nth(i).innerText()
        console.log(element);
            
    }
        await campain1.selectOption(data.Campaign)
        
    await page.locator(`[name="industryEnumId"]`).selectOption(data.Industry)
    await page.locator(`[name="currencyUomId"]`).selectOption(data.Currency)
    await page.locator(`[name="generalCountryGeoId"]`).selectOption(data.Country)
    let state1 =  page.locator(`[name="generalStateProvinceGeoId"]`)
    let stateCount = await state1.count()
    for (let n = 0; n < stateCount; n++) {
        const element1 = await state1.nth(n).innerText();
        console.log(element1);
        
        
    }
    await page.locator('[id="createLeadForm_generalStateProvinceGeoId"]').selectOption(data.State);
    await page.locator(`[name="submitButton"]`).click()
     }


})
})