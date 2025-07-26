let P = parseFloat(prompt("Enter Principal (P):"));
let T = parseFloat(prompt("Enter Time in years (T):"));
let R = parseFloat(prompt("Enter Rate of Interest per year (R):"));

let A = P * Math.pow((1 + R / 100), T);
let CI = A - P; 

alert("Compound Interest is: " + CI.toFixed(2));
console.log("Compound Interest is: " + CI.toFixed(2));
