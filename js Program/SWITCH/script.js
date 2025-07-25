// switch(experession){
//     case (const value1):statements
//         break;
//     case (const value2):statements
//         break;
//     default:statements
// }

// let a = Number (prompt('Enter any value :- '));
// switch (a) {
//     case 1: document.writeln('one');
//         break;
//     case 2: document.writeln('two');
//         break;
//     case 3: document.writeln('three');
//         break;
//     case 4: document.writeln('four');
//         break;
//     default: document.writeln("Not in list...");
// }

// let a= prompt("Enter any character :- ");//'b';
// switch(a){
//     case 'a':
//     case 'A':document.writeln('A for Apple');
//         break;
//     case 'b':
//     case 'B':document.writeln('B for Bat');
//         break;
//     case 'c':
//     case 'C':document.writeln('C for Cat');
//         break;
//     case 'd':
//     case 'D':document.writeln('D for Dog');
//         break;
//     default:document.writeln("Wrong Input")    
// }

// let month=Number(prompt("Enter month (1 to 12)"));
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 9:
//     case 11:document.writeln("31 days in month " +month);
//         break;
//     case 4:
//     case 6:
//     case 8:
//     case 10:
//     case 12:document.writeln("30 days in month " +month);
//         break;
//     case 2:document.writeln("28 days in month");
//         break;
//     default:document.writeln("Invalid month");
// }

// let value=234;
// switch(value){
//     case 456:document.writeln("Hey Hi there");
//         break;
//     case 34:document.writeln("good Afternoon");
//         break;
//     case 342:document.writeln("Nature is beautiful");
//         break;
//     default:document.writeln("Bye Bye");
// }

let option=Number(prompt('1: Addition; 2: sub; 3:multi 4:div'));
let a=Number(prompt("Enter First Number :- "));
let b=Number(prompt("Enter Second Number :- "));
switch (option) {
    case 1: res=a+b;
        document.writeln("Addition is :- "+res);
        break;
    case 2: res=a-b;
        document.writeln("Substraction is :- "+res);
        break;
    case 3: res=a*b;
        document.writeln("Multiolication is :- "+res);
        break;
    case 4: res=a/b;
        document.writeln("Division is :- "+res);
        break;
    default:document.writeln("Wrong input");
}