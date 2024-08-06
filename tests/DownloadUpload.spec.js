// //install dependencies excel npm install exceljs --savedev
// import {writeExcelTest} from "../utils/ExcelDemoJs";
// import {test, expect} from "@playwright/test";
//
// test('Upload and download excel validation', async ({page}) => {
//     const textSearch = 'Mango';
//     const updateValue = '350';
//     await page.goto(process.env.DOWNLOAD_URL);
//     const downloadPromise = page.waitForEvent('download');
//     await page.getByRole('button', {name: 'Download'}).click();
//     await downloadPromise;
//     await writeExcelTest(textSearch, updateValue, {
//         rowChange: 0,
//         colChange: 2
//     }, "C:/Users/Stefana/Downloads/download.xlsx");
//     await page.locator("#fileinput").click();
//     await page.locator("#fileinput").setInputFiles("C:/Users/Stefana/Downloads/download.xlsx");
//     const textLocator = page.getByText(textSearch);
//     const desiredRow = await page.getByRole('row').filter({has: textLocator});
//     await expect(desiredRow.locator("#cell-4-undefined")).toContainText(updateValue);
// });
