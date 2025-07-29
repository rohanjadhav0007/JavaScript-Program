// import { a,name } from './data.js';
// console.log("a from data :- "+a)
// console.log("Name :- "+name)

import * as bundle from './data.js'
import person from './data.js';
console.log(person);

console.log("a from data :- "+bundle.a)
console.log("Name :- "+bundle.name)
console.log(bundle.sayHello("Rohan"))