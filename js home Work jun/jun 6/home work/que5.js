let units = Number(prompt("Enter electricity units consumed:"));
let bill = 0;

if (units <= 50) {
    bill = units * 0.50;
} 
else 
if (units <= 150) {
    bill = (50 * 0.50) + ((units - 50) * 0.75);
}
else 
if (units <= 250) {
    bill = (50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20);
} 
else {
    bill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((units - 250) * 1.50);
}

let surcharge = bill * 0.20;
let totalBill = bill + surcharge;

document.writeln("Total Electricity Bill = ₹" + totalBill);
