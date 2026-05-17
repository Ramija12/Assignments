import {test} from "@playwright/test"
test("Book Ticket",async({page})=>{
    await page.goto("https://www.pvrcinemas.com/")
    await page.locator(`[class="p-inputtext p-component p-autocomplete-input p-autocomplete-input"]`).click()
    await page.locator(`[class="p-inputtext p-component p-autocomplete-input p-autocomplete-input"]`).fill("chennai")
    await page.locator(`[class="p-autocomplete-item"]`).click()
    await page.locator(`[class="cinemas-inactive"]`).click()
    await page.locator(`[class="p-dropdown-label p-inputtext p-placeholder"]`).nth(1).click()
    await page.getByText("INOX The Marina Mall, OMR, Chennai").click()
    await page.locator(`[class="p-dropdown-item"]`).nth(1).click()
    await page.locator(`//li[@class="p-dropdown-item"]`).nth(1).click()
    await page.locator(`[class="p-dropdown-item"]`).nth(0).click()
    await page.locator('[type="submit"]').click()
    await page.getByText("Accept").click()
    await page.getByText("Accept").first().click()
    await page.locator(`[class="seat-current-pvr"]`).nth(10).click()
    const Total = await page.locator(`[class="grand-prices"]`).innerText()
    console.log(`Total Ticket Amount ${Total}`);
    let title = await page.title()
    console.log(title);
    
    await page.getByRole("button",{name: "Proceed"}).click()
    await page.screenshot({path: 'pvr.png'})

    
}

)

