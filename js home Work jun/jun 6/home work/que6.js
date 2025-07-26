let year = parseInt(prompt("Enter a year:"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    document.writeln(year + " is a leap year.");
} else {
    document.writeln(year + " is not a leap year.");
}
