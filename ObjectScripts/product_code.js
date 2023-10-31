"use strict"

function parsePartCode(part1)
{
    let partCode = {};
    const colon = part1.indexOf(":");
    const dash = part1.indexOf("-");

    partCode.supplierCode = part1.substring(0, colon);
    partCode.productNumber = part1.substring(colon + 1, dash);
    partCode.size = part1.substring(dash + 1);

    display(partCode);
}

function display(partCode)
{
    console.log("Supplier: " + partCode.supplierCode);
    console.log("Product Number: " + partCode.productNumber);
    console.log("Size: " + partCode.size);
    console.log("");
}

parsePartCode("XYZ:1234-L");
parsePartCode("QWE:4569-M");

