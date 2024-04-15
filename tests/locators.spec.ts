import {test} from '@playwright/test'

// test.beforeEach(async ({page}) => {
//   await page.goto('http://localhost:4200/')
//   await page.getByText('Forms').click()
//   await page.getByText('Form Layouts').click()
// })
//
// test('Locators Syntax Rules', async ({page}) => {
//   //by tag name
//    await page.locator('input').first().click()
//   //by ID
//   page.locator('#inputEmail1')
//
//   //by Class value
//   page.locator('.shape-rectangle')
//
//   //by attribute
//   page.locator('[placeholder="Jane Doe"]')
//
//   //by Class value(full)
//   page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')
//
//   //combine different selectors
//
//   page.locator('input[placeholder="Jane Doe"][nbinput]')
//
//   //by partial text match
//   page.locator(':text("Using")')
//
//   //by text match
//   page.locator(':text-is("Using the Grid")')
//
// })

test('sdsd', async ({page}) => {
  await page.goto('https://loginauto.agilquest.com/')
  await page.locator('input[name="loginId"]').fill('emailmmm')

})

