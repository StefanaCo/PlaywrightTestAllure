import {expect, test} from '@playwright/test'

test(`@OCS Open home page and verify the title`, async ({page}) => {
    const credentials = Buffer.from('stage2user:RodeteQuakenDuttDreherAf').toString('base64');
    await page.setExtraHTTPHeaders({
        'Authorization': `Basic ${credentials}`
    });
    await page.goto('https://mini-co-uk-awsint-m3.int.miniweb.eu-central-1.aws.bmw.cloud/');
    await page.locator('[class="accept-button button-primary"]').click();
    const header = await page.locator('[class="md-heading md-fixedtext"]');
    await header.allTextContents();
    console.log(header);
    await expect(header.first()).toContainText('The New All-ElectricMINI Cooper.NICE TO MEET YOU AGAIN.');
});