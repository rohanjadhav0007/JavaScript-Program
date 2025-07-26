let char = prompt("Enter any character:");

if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
    document.writeln("It is an alphabet.");
} else if (char >= '0' && char <= '9') {
    document.writeln("It is a digit.");
} else {
    document.writeln("It is a special character.");
}
