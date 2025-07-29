// let promise=new Promise(function(resolve,reject){
//     if(1)
//         resolve("Promise success");
//     else
//         reject("Error")
// });

// promise.then(
//     result=>console.log(result),
//     error=>console.log(error)  
    
// );

//Error this code
// fetch('./data.json')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(err=>console.log("Some Error =>",err))
// .finally(()=>console.log("Request Completed..."));


// function checkAge(age){
//     return new Promise((resolve,reject)=>{
//         if(age>=18)
//             resolve('You are eligible for voting');
//         else
//             reject("too small to vote");
//     })
// }

// checkAge(20)
// .then(msg=>console.log(msg))
// .catch(err=>console.log(err))

// function delay(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms));

// }
// async function example() {
//     console.log("Before Delay");
//     await delay(3000);
//     console.log("After Delay");
//     console.log("After Delay123");   
// }

// example();

function delay(ms){
    return new Promise(resolve=>setTimeout(resolve('Processing'),ms));

}
async function example() {
    console.log("Input");
    await delay(5000).then(msg=>console.log(msg));
    console.log("Output");
}

example();