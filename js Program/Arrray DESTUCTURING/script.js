// let items =["computer","mouse","printer","SDD"];
// let [, , , i1] = items;
// document.writeln( i1," ")//," ", i3, " ",i4);

// let a1=[1,2,3,4,5];
// let a2=[20,30,40,50.,...a1,6,7,8,9,10];
// document.writeln(a1 +"<br>"+a2);

// let a1=[1,2,3,4,5];
// let a2=[6,7,8,9,10];
// let a3 = [...a1,...a2];
// document.writeln(a3);


//  Rest Operator 

// function add(...n){
//     document.writeln("<br>Arguments :- " + n.length,);
//     let sum = 0;
//     for (i=0;i<n.length;i++)
//         sum += n[i];
//     return sum;
// }
// let r1=add(1,2,3);
// document.writeln("<br>Addition :- "+r1,"<br>");
// let r2=add(1,2,3,4,5,6);
// document.writeln("<br>Addition :- ",r2+"<br>");
// let r3=add(1);
// document.writeln("<br>Addition :- ",r3);


// function fun(){
//     document.writeln("Hello, Wold!");
// }
// function fun2(action){
//     action();
//     action();
// }

// fun2(fun);

// some function

// const n=[1,2,3,4,5];
// const hasNeg = n.some((num) => num < 0);
// document.writeln(hasNeg);

//

// function add(x){
//     return x + 2;
// }
// function mul(x){
//     return x*3;
// }
// function compose(f,g){
//     return function (x){
//         return f(g(x));
//     };

// }
// var res = compose(add,mul);
// document.writeln(res(4));

// Currying

// function mul(x){
//     return function(y){
//         return x*y;
//     };

// }
// let mulFn = mul(2);
// document.writeln(mulFn(5));

// function greet(name, callback){
//     document.writeln("Hello, "+ name);
//     callback();
// }

// function sayGoodbye(){
//     document.writeln("Goodbay!");
// }
// greet("Rohan", sayGoodbye);

function mul(factor){
    return function(num){
        return num*factor;
    };

}

let mul2 = mul(2);
document.writeln(mul2(5));
let mul3 = mul(3);
document.writeln(mul3(5));
