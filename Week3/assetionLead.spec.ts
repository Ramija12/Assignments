//Create Lead
/* import {test,expect} from "@playwright/test"
test("Creat Lead by CSS",async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr2")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator("#label").click()
    await page.locator(`[href="/crmsfa/control/leadsMain"]`).click()
    await page.locator(`[href="/crmsfa/control/createLeadForm"]`).click()
    const companyName = page.locator(`#createLeadForm_companyName`)
    expect (companyName).toBeEditable
    companyName.fill("TCS")
    const firstName = page.locator(`//input[@name="firstName"]`).nth(2)
    expect (firstName).toBeEmpty
    firstName.fill("Rami")
    const lastName = page.locator("#createLeadForm_lastName")
    expect(lastName).toBeEditable
    lastName.fill("S")
    await page.locator("#createLeadForm_personalTitle").fill("MS")
    await page.locator("#createLeadForm_generalProfTitle").fill("LEAD")
    await page.locator("#createLeadForm_annualRevenue").fill("23")
    await page.locator("#createLeadForm_departmentName").fill("TRE")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("901909090")
    await page.locator(".smallSubmit").click()
    const Title = await page.title()
    console.log(`(Title of Lead:${Title})`);
    
}
) */

//Edit LEad
/* import {test,expect} from "@playwright/test"
test("Creat Lead by CSS",async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr2")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator("#label").click()
    await page.locator(`[href="/crmsfa/control/leadsMain"]`).click()
    await page.getByRole("link",{name: "Find Leads"}).first().click()
    await page.locator(`[name="firstName"]`).nth(2).click()
    await page.locator(`[name="firstName"]`).nth(2).fill("Rami")
    await page.getByRole(`button`,{name: "Find Leads"}).click()
    await page.locator(`//td//div//a[@class="linktext"]`).nth(0).click()
    await page.title()
    await page.getByRole("link",{name: "Edit"}).first().click()
    let companyName = page.locator(`[name="companyName"]`).nth(1)
    companyName.clear()
    expect(companyName).toBeEditable
    companyName.fill("RAJ")
    let annualRevenue = page.locator(`[name="annualRevenue"]`)
    annualRevenue.clear()
    expect(annualRevenue).toBeEmpty
    annualRevenue.fill("20")
    const departmentName= page.locator(`[name="departmentName"]`)
    departmentName.clear()
    expect(departmentName).toBeEditable
    departmentName.fill("RES")
    await page.screenshot({path:"Lead.png"})
    await page.locator(`[id="updateLeadForm_description"]`).fill("Edit")
    await page.locator(`[value="Update"]`).click()   

}
) */

//create Account
import {test,expect} from "@playwright/test"
test("Create Accpunt",async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("Password").fill("TestLeaf@2025")
    await page.getByRole(`button`,{name: "Log In"}).click()
    await expect(page).toHaveTitle(`Lightning Experience`)
    await expect(page).toHaveURL(`https://testleaf.lightning.force.com/lightning/page/home`)
    await page.locator(`.slds-icon-waffle`).click()
    await page.getByRole("button",{name: "View All Applications"}).first().click()
    await page.getByPlaceholder(`Search apps or items...`).last().fill("Service")
    await page.locator(`//span//p//mark[(text()="Service")]`).nth(0).click()
    await page.locator(`[title="Accounts"]`).click()
    await page.getByRole("button",{name: "New"}).first().click()
    await page.locator(`[name="Name"]`).fill("908909766")
    await page.locator(`//button[@name="SaveEdit"]`).click()
    let toastMessage = page.locator(`[class="toastMessage slds-text-heading--small forceActionsText"]`)
    await page.waitForTimeout(2000)
    let meessage = expect(toastMessage).toBeVisible()
    console.log(toastMessage);
    

}
)