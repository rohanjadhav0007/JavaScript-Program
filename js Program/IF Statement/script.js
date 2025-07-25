// let age=Number(prompt("Enter age :-"),0);
// // Syntax
// // if(condition)
// //     true part
// // else
// //     false part

// // let age =54;
// if (age >= 18)
//     document.writeln("Person is Eligible for Voting");
// else
//     document.writeln("Person is Not Eligible for Voting");

// let a = 45, b = 45;
// if (a >= b)
//     document.writeln('a is greatest');
// else
//     document.writeln('b is greatest');
// document.writeln("<br>");
// if (a == b)
//     document.writeln('both are equal');
// else
//     document.writeln('Not Equal');

// let no = Number(prompt('Enter any number :- '));
// if (no % 2 == 0)
//     document.writeln(no + ' is Even');
// else
//     document.writeln(no + ' is odd');

// let no = Number(prompt('Enter any number :- '));
// if(no>=10 && no<=99)
//     document.writeln(no+ " is Two Digit Number");
// else
//     document.writeln(no + " is more or less then Two Digit");

// let hasAdhar=true;//=prompt("Has Adhar :- (true/false)");
// let hasPan = true;//=prompt("Has pan :- (true/false)");

// if (hasAdhar || haspan)
//     document.writeln("Eligible for gov job");
// else
//     document.writeln("Not Eligible");
// document.writeln("<br>");
// if (false)
//     document.writeln("Good Afternoon");
// else(true)
//     document.writeln("Good Evening");

// let per=90;

// if(per>=90 && per<=100)
//     document.writeln("Distinction");
// else
// if(per>=70)
//     document.writeln("First class");
// else
// if(per>=50)
//     document.writeln("Second class");
// else
// if(per>=36)
//     document.writeln("Pass");

// else
//     document.writeln("Fail");

// let a=4,b=5,c=9;
// if (a > b && a>c)
//     document.writeln("a is greatest");
// else
//     if (b > c)
//         document.writeln("b id grestest");
//     else
//         document.writeln("c is greatest");

// let salary = 800000;
// let bonus, gsal;

// if (salary >= 500000)
//     bonus = salary * 0.2;
// else
//     if (salary >= 400000)
//         bonus = salary * 0.15;
//     else
//         if (salary >= 300000)
//             bonus = salary * 0.1;
//         else
//             if (salary >= 200000)
//                 bonus = salary * 0.1;
//             else
//             bonus = salary *0.05;

// gsal = salary + bonus;
// document.writeln("Gross Salary :- " + gsal);

// let amt = 11100;
// let n2000 = 0,
//   n500 = 0,
//   n200 = 0,
//   n100 = 0;
// if (amt >= 2000) {
//   n2000 = Math.floor(amt / 2000);
//   amt = amt % 2000;
// }
// if (amt >= 500) {
//   n500 = Math.floor(amt / 500);
//   amt = amt % 500;
// }
// if (amt >= 200) {
//   n200 = Math.floor(amt / 200);
//   amt = amt % 200;
// }
// if (amt >= 100) {
//   n100 = Math.floor(amt / 100);
//   amt = amt % 100;
// }
// if (n2000 != 0) document.writeln("2000 :- " + n2000);
// if (n500 != 0) document.writeln("<br>500 :- " + n500);
// if (n200 != 0) document.writeln("<br>200 :- " + n200);
// if (n100 != 0) document.writeln("<br>100 :- " + n100);

// let age = 1;
// document.writeln(age >= 18? "Eligible for Voting":"You Small to vode");

// let no=44;
// document.writeln(no%2==0?"This No is even No":"this No is odd No");

let a=3,b=10,c=6;
document.writeln((a>b && a<c)?"a is greatest":(b>c)?"b is greatest":"c is greatest");