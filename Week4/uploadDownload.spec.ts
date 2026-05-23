import {test,expect} from"@playwright/test"
import path from "path"
import fs from "fs"
test("file upload and download",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
  let upload = page.waitForEvent("filechooser")
    await page.locator(`[id="drag-drop-upload"]`).click()
    let fileUpload= await upload
    await fileUpload.setFiles(path.join(__dirname,`../../Data/pvr.png`))
    await expect(page).toHaveURL(/upload/);
    await page.waitForTimeout(6000)
    await page.goto("https://the-internet.herokuapp.com/download")
    let download = page.waitForEvent("download")
    await page.locator(`[href="download/some-file.txt"]`).click()
    let downloadFile = await download
    let downloadpath = path.join(__dirname,`../../Data/download.txt`)
    await downloadFile.saveAs(downloadpath)
    expect(fs.existsSync(downloadpath)).toBeTruthy()

    await page.waitForTimeout(6000)
})