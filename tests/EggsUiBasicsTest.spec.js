import {test, expect} from "@playwright/test";

// test.describe.configure({mode: 'parallel'}); /* will run in parallel, otherwise will run sequential */
// test.describe.configure({mode: 'serial'}); /* when one test is dependent of other test, will skip next test */
test('My first test', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://google.com');
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

test('My second test', async ({page}) => {
    await page.goto('https://eggs.ro');
    const gridTitle = page.locator('[class="eggs-grid__item"]');
    const allTheTitles = await gridTitle.allTextContents();
    const headlineTitles = await page.locator('[class="eggs-hero-slider-item__headline"]');
    const selectBenefits = await page.locator('[class="eggs-teaser-overview-item"]');
    const acceptCookie = await page.locator('[class="eggs__button eggs-cookie-consent__button eggs-cookie-consent__button--yellow"]');
    const headerBar = await page.locator('[class="eggs-headerbar__svg eggs-headerbar__svg--open"]');
    const searchBar = await page.locator('[class="search-text"]');
    const benefitsHeadline = await page.locator('[id="benefits"]');
    const allBenefits = await page.locator('[class="eggs-textColumn--title"]');
    const factsAboutCompany = await page.locator('[class="eggs-product-overview__row"]');

    console.log('This is the page title:  ',await page.title());
    await expect(page).toHaveTitle("eggs unimedia romania");
    console.log('This are all the title from the page: ', allTheTitles.toLocaleString())
    await acceptCookie.click();
    await headerBar.click();
    await expect(gridTitle.first()).toContainText('eggs');
    await expect(gridTitle.nth(1)).toContainText('Careers at eggs');
    await expect(gridTitle.nth(2)).toContainText('Blog');
    await expect(searchBar).toBeVisible();
    await gridTitle.nth(1).click();
    console.log('This is the page title: ', await page.title());
    const [headLine] = await Promise.all([
        headlineTitles.allTextContents(),
    ])
    console.log('This is the headline: ', headLine.toLocaleString());
    console.log(headLine[1].toLocaleString());
    await selectBenefits.nth(2).click();
    console.log('This is the benefits headline: ', await benefitsHeadline.textContent());
    await expect(benefitsHeadline).toContainText('These benefits are waiting for you in our company');
    const benefits = await allBenefits.allTextContents()
    console.log(`This are facts about company: `, benefits.toLocaleString());

    const facts = await factsAboutCompany.allTextContents()
    console.log(`This are facts about company: `, facts.toLocaleString());
});