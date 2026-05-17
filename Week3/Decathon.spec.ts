import {test,expect} from "@playwright/test"
test("Decalathon" , async({page})=>{
    await page.goto("https://www.decathlon.in/")
    const homePage = await page.title()
    console.log(`Home Page:${homePage}`)
    await page.waitForTimeout(3000)
    const search = page.locator(`[type="search"]`)
    await expect(search).toBeEnabled()
    await search.fill("shoes")
    await page.keyboard.press("Enter")
    let shoePage= await page.title()
    console.log(shoePage);
    const category = page.locator("//span[(text()='Sport')]")
    await category.click()
    await page.locator(`[data-test-id="filter-checkbox-sport_pratice_en-Running"]`).click()
    await page.locator(`//span[(text()="Gender")]`).click()
    await page.locator(`[data-test-id="filter-item-gender_id_en-MEN"]`).click()
    await page.locator(`//span[(text()="Size")]`).click()
    await page.locator(`[data-test-id="filter-checkbox-indian_size-10.5"]`).click()
    await page.locator(`//span[(text()="Most relevant")]`).click()
    await page.locator(`//span[(text()="Price (high → low) ")]`).click()
    await page.locator(`[data-test-id="product-card:container"]`).nth(2).click()
    let popUp = page.locator(`[style="overflow: visible;"]`)
    if (await popUp.isVisible().catch(()=>false)){
        await popUp.click()    
    }
    await page.locator(`[data-test-id="pdp-size-option-text-5"]`).click()
    await page.locator(`//span[(text()="Add to cart")]`).click()
    await page.locator('//span[(text()="Cart")]').click()
    const value = await page.locator(`[data-test-id="cart:cart-checkout-total-cart-value"]`).innerText()
    console.log(value);
}
)