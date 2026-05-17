/* //Create Lead
import {test,expect} from "@playwright/test";
test("Create Lead",async({page})=>{

    await page.context().clearPermissions()

    let firstName = 'Rami'
    let lastName = "S"
    
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.locator('[title="App Launcher"]').click()
    await page.waitForTimeout(2000)
    await page.locator(`//button[text()="View All"]`).click()
    
    await page.locator(`//p[text()="Sales"]`).click()
    await page.locator('//span[text()="Leads"]').nth(0).click()
    await page.locator(`//div[@title="New"]`).click()
    await page.locator(`[name="salutation"]`).click()
    await page.locator(`[data-value="Ms."]`).click()
    await page.locator(`[name="firstName"]`).fill(firstName)
    await page.locator(`[name="lastName"]`).fill(lastName)
    await page.locator(`[name="Company"]`).fill("TCS")
    await page.locator(`[name="SaveEdit"]`).click()
    let value = await page.locator(`[slot="primaryField"]`).innerText()
    console.log(`Lead name: ${value}`);
    await page.waitForTimeout(3000)        
}
) */

//Edit Lead
/* 
import {test} from "@playwright/test"

test("Edit Lead", async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.getByRole("textbox",{name:"Username"}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025")
    await page.getByRole("button",{name:"Log In"}).click()
    await page.getByRole("button",{name:"App Launcher"}).click()
    await page.getByRole("combobox",{name:"Search apps and items..."}).fill("Leads")
    await page.locator(`//b[text()="Leads"]`).click()
    await page.waitForTimeout(3000)
    await page.locator(`[name="inlineEditButton"]`).click()
    await page.locator(`//span[contains(text(),"Rami")]`).nth(0).click()
    await page.locator('//button[@name="Edit"]').last().click()
    await page.waitForTimeout(3000)
    await page.getByRole("combobox",{name:"Salutation"}).click()
    await page.locator('//lightning-base-combobox-item[@data-value="Mrs."]').click()
    await page.getByPlaceholder(`First Name`).clear()
    await page.getByPlaceholder(`First Name`).fill("Ramij")
    await page.locator(`[name="lastName"]`).clear()
    await page.locator(`[name="lastName"]`).fill(`R`)
    await page.locator(`[name="SaveEdit"]`).click()
    let value = await page.locator('[slot="primaryField"]').last().innerText()
    console.log(`Lead Name: ${value}`);
    
    await page.waitForTimeout(3000)

}
) */

//Create Individuals
/* 
import {test} from "@playwright/test"
test("Create Individuals",async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.getByRole("textbox",{name:"Username"}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025")
    await page.getByRole("button",{name:"Log In"}).click()
    const title = await page.title()
    console.log(`Title of Salesforce: ${title}`);
    await page.getByRole("button",{name:"App Launcher"}).click()
    await page.getByRole(`button`,{name:"View All Applications"}).click()
    await page.getByRole("combobox",{name:"Search apps or items..."}).fill("Indivi")
    await page.getByText("Individuals").click()
    await page.getByRole("button",{name:"New"}).click()
    await page.waitForTimeout(3000)
    await page.getByRole("textbox",{name:"Last Name"}).fill("Rami")
    await page.getByRole("button",{name:"Save",exact:true}).click()
    let value = await page.locator('//span[@data-aura-class="uiOutputText"]/parent::div').innerText()
    console.log(`Lead Name: ${value}`);
    
    
}
) */

//Edit Individuals Test
/* 
import {test} from "@playwright/test"
test("Edit individual", async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.getByRole("textbox",{name:`Username`}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025")
    await page.getByRole("button",{name:"Log In"}).click()
    await page.getByRole("button",{name:"App Launcher"}).click()
    await page.getByRole("button",{name:"View All Applications"}).click()
    await page.getByRole("combobox",{name: "Search apps or items..."}).fill("Individuals")
    await page.waitForTimeout(5000)
    await page.getByRole("link",{name: "Individuals",exact:true}).click({force:true})
    await page.getByRole("searchbox",{name: "Search this list..."}).fill("Sel")
    await page.keyboard.press("Enter");
    await page.getByRole("button",{name: "Show actions"}).first().click()
    await page.waitForTimeout(3000)
    await page.locator(`[title="Edit"][role="menuitem"]`).first().click({force:true})
    await page.getByRole("button",{name: "Salutation"}).first().click()
    await page.locator(`[title="Ms."]`).click()
    await page.getByRole("textbox",{name: "First Name"}).clear()
    await page.getByRole("textbox",{name: "First Name"}).fill("SA")
    await page.getByRole("button",{name: "Save",exact:true}).click()
    const name =  await page.locator(`//a[@class="slds-truncate"]/slot/span`).nth(0).innerText()
    console.log(name[0].split(""));
    
}
) */