// initialisation
// while(condition){
//     statements
//     inc/dec
// }

// let a = 1;
// while (a <= 10){
//     document.writeln(a+" Hello<br>");
//     a++;
// }

// let a = 10;
// while (a >= 1){
//     document.writeln(a+" Hello<br>");
//     a--;
// }

// let i=1;
// let sum=0;
// while(i<=10){
//     sum += i;
//     i++;
// }
//     document.writeln("Addition is :- "+sum);

// let n = 0;
// while (n <= 800) {
//     if (n % 2 == 0)
//         document.writeln(n);
//     n++;
// }

// let no=Number(prompt("Enter any Number :- "));
// let i=1,t;
// while(i<=10){
//     t=no * i;
//     document.writeln(`${no} * ${i} = ${t}<br>`);
//     i++;
// }

// let i=1,f=1;
// let n=Number(prompt("Enter any Number :-",0));
// while(i<=n){
//     f=f*i;
//     i++;
// }
// document.writeln("Factorial :- "+f);

// let pow = 1;
// let base=Number(prompt("Enter base Number :-",0));
// let index=Number(prompt("Enter index Number :-",0));
// while (index >= 1){
//     pow = pow * base ;
//     index--;
// }
// document.writeln("Power is " + pow)

// 0 1 1 2 3 5 8 13 21 34 Fibbonacci Series

// let f0=0, f1=1, f2, cnt =3;
// document.writeln(f0+" "+f1+" ");
// while (cnt <=10){
//     f2 = f0 + f1;
//     document.writeln(f2 + " ");
//     cnt++;
//     f0 = f1;
//     f1 = f2;
// }               

// let no=2, i=2, prime=true;
// while(i<=no/2){
//     if (no % i == 0){
//         prime = false;
//         break;
//     }
//     i++;
// }
// if (prime)
//     document.writeln("Prime");
// else 
//     document.writeln("Not Prime")

// let  no = Number(prompt("Enter any Number :- "));
// document.writeln("Number is :- "+no);
// let rem, rev =0, t=no;
// while(no > 0){
//     rem = no % 10;
//     rev = rev *10 + rem;
//     no = Math.floor(no / 10);
// }
// document.writeln("<br>Reverse is "+rev );
// document.writeln("<br>")
// if(rev == t)
//     document.writeln(t + " is Palindrom");
// else
//     document.writeln(t + " is Not Palindrom");

// let n = 40;
// document.writeln("Value :- " + n + " type of n :- "+ typeof(n));
// document.writeln("<br><br>")
// let c = 9.99;
// document.writeln("Value :- " + c + " type of c :- "+ typeof(c));
// document.writeln("<br><br>");
// let name = 'Rohan';
// document.writeln("Value :- " + name + " type of name :- "+ typeof(name));
// document.writeln("<br><br>")
// let a = 'a';
// document.writeln("Value :- " + a + " type of a :- "+ typeof(a));
// document.writeln("<br><br>")
// let b = 40945657483949n;
// document.writeln("Value :- " + b + " type of b :- "+ typeof(b));
// document.writeln("<br><br>")


// let i = 1, j;
// while (i <= 10){
//     j =1;
//     while (j <= 10) {
//         document.writeln(i * j + " ");
//         j++;
//     }
//     document.writeln("<br>");
//     i++;
// }

// let i = 1, j;
// while (i <= 10){
//     j =1;
//     while (j <= 10) {
//         document.writeln("* ");
//         j++;
//     }
//     document.writeln("<br>");
//     i++;
// }

// let i = 1, j;
// while (i <= 5){
//     j =1;
//     while (j <= i) {
//         document.writeln("* ");
//         j++;
//     }
//     document.writeln("<br>");
//     i++;
// }
//  document.writeln("<hr>");

// let i = 5, j;
// while (i >= 1){
//     j = 1;
//     while (j <= i) {
//         document.writeln("* ");
//         j++;
//     }
//     document.writeln("<br>");
//     i--;
// }

// let a = 1, b;
// while (a <= 5){
//     b = a;
//     while (b <= 5) {
//         document.writeln("* ");
//         b++;
//     }
//     document.writeln("<br>");
//     a++;
// }

// let i =1 , j;
// while(i<=5){
//     j=i;
//     while(j<5){
//         document.writeln("&nbsp;&nbsp;");
//         j++;
//     }
//     j=1;
//     while(j<=i){
//         document.writeln(" * ");
//         j++;
//     }
//      document.writeln("<br>");
//      i++;
// }


// let i=1;
// while(i<=10){
//     ++i;
//     document.writeln(i);
    
// }

// let i=Number(prompt("Enter any number:- ",0));
// while (i % 7 === 0) {
//         document.writeln("This no is div by 7 :-" +i);
//         i++;
//         }
//     while(i=i) {
//         document.writeln("It is not div by 7:- "+ i);
        
//     }

// let n=6;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i>=j){
//             document.writeln(" * ");
//         }
//     }
//     document.writeln(" <br> ");
// }


// let no=5;
// for(let a=1;a<=no;a++){
    
//     for(let b=a;b<no;b++){
//         document.writeln("&nbsp;&nbsp;");
//     }
//     for(let b=1;b<=a;b++){
//         document.writeln(" * ");
//     }
//     document.writeln("<br>");
// }


    // for (let i= 1; i <= 7; i++) {

    //     for (let j = 1; j <= 7 - i; j++) {
    //         document.write(" ");
    //     }
    //     for (let j = 1; j <= i; j++) {
    //         document.write(" * ");
    //     }

    //     document.write("\n");
    // }


//     let no=7
//     for(let i=1;i<=no;i++){
//     for(let j=no;j>i;j--){
//         document.writeln("&nbsp;");
//     }
//     for(let k=1;k<=((2*i)-1);k++
// ){
//         document.writeln(" *");
//     }
//     document.writeln("<br>");
// }

    // let no=15;   
    // for(let i=1;i<=no;i++){
    //       document.writeln("&nbsp;");
    //     for(let j=1;j<=no;j++){
    //         if(i===j || i + j === no + 1){
    //             document.writeln("* *");
    //         }else{
    //             document.writeln("&nbsp;&nbsp;");
    //         }
             
    //     }
    //     document.writeln("<br>");
    // }

    // let num=23487585;
    // let count=0;
    // let temp=num;
    // do{
    //     count++;
    //     temp=Math.floor(temp/10);
    // }
    // while(temp>0);
    //     document.writeln(count);

//    let no = Number(prompt("Enter any number:-"));
// let temp = no;
// let sum = 0
// let digits = no.toString().length;

// for (let i = 0; i < digits; i++) {
//     let digit = temp % 10;
//     sum += Math.pow(digit, digits); 
//     temp = Math.floor(temp / 10);
// }

// if (sum === no) {
//     document.writeln(no + " is an Armstrong number");
// } else {
//     document.writeln(no + " is NOT an Armstrong number");
// }

    // let number = 234567;
    // let min = 9;
    // for (let i = 0; i < number; i++) {
    //     let digit = parseInt(number[i]);
    //     if (!isNaN(digit) && digit < min) {
    //         min = digit;
    //     }
    // }
    // document.writeln("The smallest digit is: " + min);

    let num=1234554;
    let temp=num;
    let rem;
    let min=9;
    while(temp>0){
        rem = temp%10;
    
    if(min<rem){
        min=rem;
        temp=Math.floor(temp/10);
    }
    }
    document.writeln("The smallest digit is: " + min);
