let basicSalary = Number(prompt("Enter basic salary:"));
let hra, da, grossSalary;

if (basicSalary <= 10000) {
    hra = basicSalary * 0.20;
    da = basicSalary * 0.80;
} else 
if (basicSalary <= 20000) {
    hra = basicSalary * 0.25;
    da = basicSalary * 0.90;
} else {
    hra = basicSalary * 0.30;
    da = basicSalary * 0.95;
}

grossSalary = basicSalary + hra + da;

document.writeln("Gross Salary = ₹" + grossSalary);
