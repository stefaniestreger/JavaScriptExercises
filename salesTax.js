"use strict";

const $ = selector => document.querySelector(selector);

// Create fuction for handling data validation and calculations
const processEntries = () => {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);

    if(isNaN(subtotal) || subtotal > 10000) { 
        alert("Subtotal must be > 0 and < 10,000");
        focusAndSelect("#subtotal");
    } else if (isNaN(taxRate) || taxRate > 12) {
        alert("Tax Rate must be > 0 and < 12");
        focusAndSelect("#tax_rate");
    } else {
        $("#sales_tax").value = ((taxRate / 100) * subtotal).toFixed(2);
        const salesTax = parseFloat($("#sales_tax").value);
        $("#total").value = (subtotal + salesTax);
    }
};

// Create event handler for clicking the Calculate button
document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#subtotal").focus();
});

// Create function to clear entries from all boxes when Clear button selected
const clearEntries = () => {
    $("#subtotal").value = "";
    $("#tax_rate").value = "";
    $("#sales_tax").value = "";
    $("#total").value = "";
};

// Create event handler for clicking the Clear button
document.addEventListener("DOMContentLoaded", () => {
    $("#clear").addEventListener("click", clearEntries);
    $("#subtotal").focus();
});
