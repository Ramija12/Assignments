import {test,firefox,chromium} from "@playwright/test"

test ("Launch Browser", async()=> {

    const Browser = await firefox.launch()
    const Browsercontext = await Browser.newContext()
    const page = await Browsercontext.newPage()


   await page.goto("https://www.abhibus.com/bus-ticket-offers")
   await page.waitForTimeout(3000)

   const title = await page.title()
    const url = await page.url()
    console.log(`Abhibus title ${title}`);
    console.log(`Abhibus URL ${url}`);

  const Browser1 = await chromium.launch({
    channel: `msedge`,headless:false
  })

    const Browsercontext1 = await Browser1.newContext()
    const page1 = await Browsercontext1.newPage()

   await page1.goto("https://www.flipkart.com/")
   await page1.waitForTimeout(3000)

   const title1 = await page1.title()
    const url1 = await page1.url()
    console.log(`flipkart title ${title1}`);
    console.log(`Flipkart URL ${url1}`);

}

)