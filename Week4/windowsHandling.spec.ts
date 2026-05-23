import {test} from "@playwright/test"
test("windows Handling",async({page,context})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByRole("textbox",{name: "Username"}).fill("demosalesmanager")
    await page.getByRole("textbox",{name: "Password"}).fill("crmsfa")
    await page.getByRole("button",{name: "Login"}).click()
    await page.getByRole("link",{name: "CRM/SFA"}).click()
    await page.getByRole("link",{name: "Leads"}).click()
    await page.getByRole("link",{name: "Merge Leads"}).click()
    await page.waitForLoadState("domcontentloaded")
    let [firstPage] = await Promise.all([context.waitForEvent("page"),page.locator(`[src="/images/fieldlookup.gif"]`).first().click()])
    await firstPage.waitForLoadState("domcontentloaded")
    await firstPage.locator(`//a[@class="linktext"]`).nth(0).click()
    
    let [secondPage] = await Promise.all([context.waitForEvent("page"),page.locator(`[src="/images/fieldlookup.gif"]`).last().click()])
    await secondPage.waitForLoadState("domcontentloaded")
    await secondPage.locator(`[href="javascript:set_value('10128');"]`).first().click()
    await page.bringToFront()
    let merge =   page.getByRole("link",{name: "Merge"})
  
    page.on("dialog",async(alert)=>{
        
        console.log(`type of alert ${alert.type()}`);
        console.log(`messgae of alert${alert.message()}`);
        
        await alert.accept()
    })
    await merge.first().click()
    
    await page.waitForTimeout(6000)
    console.log(await page.title());
})