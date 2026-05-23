import {test} from "@playwright/test"
import path, { dirname } from "path"

test("upload file",async({page})=>{
    await page.goto("https://leafground.com/file.xhtml;jsessionid=node0qmdifo8brour1457q9ij2a2it14242458.node0")
    let file = page.waitForEvent("filechooser")
    let uploadclick = page.locator(`[id="j_idt97:j_idt98_label"]`).click()
    const uploadedfile = await file

    await uploadedfile.setFiles([path.join(__dirname,"../Data/Lead.png"),path.join(__dirname,"../Data/type.png")])
    await page.waitForTimeout(3000)
})