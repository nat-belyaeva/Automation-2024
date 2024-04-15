import {test} from '@playwright/test'
//hooks
//test.beforeAll()
//test.afterEach()
//test.afterAll()

//flow Controls
//only skip

test.beforeEach(async ({page}) => {
  await page.goto(' http://localhost:4200/')
})

test.describe('suite1', async () => {
  test.beforeEach(async ({page}) => {
    await page.getByText('Forms').click()
  })
  test('first test', async ({page}) => {
   await page.getByText('Form Layouts').click()
  })

  test('navigate date widget test', async ({page}) => {
    await page.getByText('DatePicker').click()
  })

})

test.describe.only('suite2', async () => {
  test.beforeEach(async ({page}) => {
    await page.getByText('Forms').click()
  })
  test('first test', async ({page}) => {
    await page.getByText('Form Layouts').click()
  })

  test.skip('navigate date widget test', async ({page}) => {
    await page.getByText('DatePicker').click()
  })

})

