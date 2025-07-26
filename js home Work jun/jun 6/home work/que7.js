let number = parseInt(prompt("Enter a number:"));

if (number % 5 === 0 && number % 11 === 0) {
    document.writeln(number + " is divisible by both 5 and 11.");
} else {
    document.writeln(number + " is not divisible by both 5 and 11.");
}
