//install dependencies excel npm install exceljs --savedev
const ExcelJs = require('exceljs');

let output = {row: -1, column: -1};

async function writeExcelTest(searchText, replaceText, change, filePath) {
    const workBook = new ExcelJs.Workbook();
    await workBook.xlsx.readFile(filePath);
    const workSheet = workBook.getWorksheet('Sheet1');
    await readExcel(workSheet, searchText);

    const cell = workSheet.getCell(output.row, output.column + change.colChange);
    cell.value = replaceText;
    await workBook.xlsx.writeFile(filePath);
    console.log('The data where rewrited!');
}

async function readExcel(workSheet, searchText) {
    workSheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText) {
                output.row = rowNumber;
                output.column = colNumber;
                console.log('This is the row: ', output.row);
                console.log('This is the colon number: ', output.column);
            }
            // console.log('This are all the data: ', cell.value);
        });
    });
}

// writeExcelTest("Mango", 350, {rowChange: 0 , colChange: 2}, 'C:/Users/Stefana/Downloads/download.xlsx')
module.exports = {writeExcelTest}

