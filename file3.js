function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let nssf = Math.min(grossSalary * 0.06, 1800);
    let taxableIncome = grossSalary - nssf;
    let payee = 0;
    if (taxableIncome <= 24000) {
        payee = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        payee = 2400 + (taxableIncome - 24000) * 0.25;
    } else {
        payee = 4483 + (taxableIncome - 32333) * 0.3;
    }
    let shif = grossSalary * 0.0275;
let netSalary = grossSalary - (payee + shif + nssf);

console.log("Gross Salary:", grossSalary);
console.log("PAYE (Tax):", payee);
console.log("SHIF Deduction:", shif);
console.log("NSSF Deductions:", nssf);
console.log("Net Salary:", netSalary);
}

let basicSalary = parseFloat(prompt("Enter Basic Salary:"));
let benefits = parseFloat(prompt("Enter Benefits:"));

if (!isNaN(basicSalary) && !isNaN(benefits)){
    calculateNetSalary(basicSalary, benefits);
} else{
    console.log("Invalid Input");
}