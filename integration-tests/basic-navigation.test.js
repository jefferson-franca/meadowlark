const portfinder = require('portfinder')
const puppeteer = require('puppeteer')

const app = require('../meadowlark.js')

let server = null
let port = null

beforeEach(async()=>{
    port = await portfinder.getPortPromise()
    server = app.listen(port)
})
afterEach(()=>{
    server.close()
})

    test('home page links to about page', async()=>{
    const browser = await puppeteer.launch({
        headless:false
    })
    const page = await browser.newPage()
    await page.goto('http://localhost:'+ port)
    await page.setViewport({ width: 1600, height: 800 });
    await page.screenshot({ path: 'print_tela_jest.png' })
    await Promise.all([
        page.waitForNavigation(),
        page.click('[data-test-id="about"]'),
    ])
    expect(page.url()).toBe('http://localhost:'+ port + '/about')
    await browser.close()
    })