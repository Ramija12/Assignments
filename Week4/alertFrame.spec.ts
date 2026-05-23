import {test} from "@playwright/test"

test("Alert& Frame Interactions",async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    let frame =  page.frameLocator(`[id="iframeResult"]`)
    
    page.on("dialog",async(alert)=>{
        console.log(`Alert Type:${alert.type()}`)
        alert.accept()

    })
    await frame.getByRole("button",{name:"Try it"}).click()
    let Text = await frame.locator(`[id="demo"]`).innerText()
    console.log(Text);
    

})