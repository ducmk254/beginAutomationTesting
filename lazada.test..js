let puppet = require('puppeteer');
let brower = null;
let page = null;

describe('Lazada test',()=>{
    // code nafy chay khi bat dau chay unit test:
    beforeAll(async ()=>{
        brower = (await puppet).launch({headless:flase});
        page = (await brower).newPage();
        await (await page).setViewport({
            width: 1280,
            height: 720
        });
        // timeout of jest is 5s
        // change timeout of jest is 60s
        jest.setTimeout(60000);
    });
    
    //close brower after finish run of test case:
    afterAll(async ()=>{
        await page.close();
        await brower.close();
    });
    // Truoc khi chay moi test case thif vafo trang chu lazada truoc:
    beforeEach(async () => {
        await page.goto('https://lazada.vn');
    });
});