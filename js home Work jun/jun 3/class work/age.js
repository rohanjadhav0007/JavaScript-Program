birthYear = prompt("Enter your birth year:");
currentYear = new Date().getFullYear();

age = currentYear - birthYear;

console.log("Your age is: " + age + " years");