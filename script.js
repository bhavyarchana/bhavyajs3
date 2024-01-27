// setInterval(() => {
//     console.log("Hello");
// },3000 );
// setInterval(() => {
//     console.log("HI");
// },4000 );

// setTimeout(() => {
//     console.log("hi");
// },5000);
// setTimeout(() => {
//     console.log("hi");
// },4000);
// setTimeout(() => {
//     console.log("hi");
// },3000);
// setTimeout(() => {
//     console.log("hi");
// },2000);
// setTimeout(() => {
//     console.log("hi");
// },1000);

// 

// callback function
// function add1(a,b,callback){
//     var sum =a+b 
//     callback(sum)
// }
// function display(val){
//     document.getElementById("textc").innerText=`the sum is ${val}`
// }
// add1(10,45,display)

// promise function
// function add1(a,b){
//     let promise  = new Promise((revolve,reject)=>{
//         var sub = a+b
//         if(sub>10){
//             revolve(sub)
//         }
//         else{
//             reject("sum is greater than 10")
//         }
//     })
// promise.then((val)=>{
//     document.getElementById("text1").innerText=`the product is ${val}`
// })
// .catch((err)=>{
//         document.getElementById("text1").innerText=`the error message is ${err}`
//  })
// }
// add2(4,5)
// function add2(a,b){
//     let promise  = new Promise((revolve,reject)=>{
//         var mult = a*b
//         if(mult>10){
//             revolve(mult)
//         }
//         else{
//             reject("sum is greater than 10")
//         }
//     })
// promise.then((val)=>{
//     document.getElementById("text1").innerText=`the product is ${val}`
// })
// .catch((err)=>{
//         document.getElementById("text1").innerText=`the error message is ${err}`
//  })
// }
// add2(4,5)

// function add3(a,b){
//     let promise  = new Promise((revolve,reject)=>{
//         var sub = a-b
//         if(sub>10){
//             revolve(sub)
//         }
//         else{
//             reject("sum is greater than 10")
//         }
//     })
// promise.then((val)=>{
//     document.getElementById("text2").innerText=`the product is ${val}`
// })
// .catch((err)=>{
//         document.getElementById("text2").innerText=`the error message is ${err}`
//  })
// }
// add3(20,5)

// function add4(a,b){
//     let promise  = new Promise((revolve,reject)=>{
//         var div = a/b
//         if(div>10){
//             revolve(div)
//         }
//         else{
//             reject("sum is greater than 10")
//         }
//     })
// promise.then((val)=>{
//     document.getElementById("text3").innerText=`the product is ${val}`
// })
// .catch((err)=>{
//         document.getElementById("text3").innerText=`the error message is ${err}`
//  })
// }
// add4(50,2)

//  async function add1(a,b){
//     let promise  = new Promise((revolve,reject)=>{
//         var sum = a+b
//         if(sum>10){
//             revolve(sum)
//         }
//         else{
//             reject("error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("textc").innerHTML=`the sum is ${ans}`
// }
// add1(10,2)
// async function add2(a,b){
//     let promise  = new Promise((revolve,reject)=>{
//         var mult = a*b
//         if(mult>10){
//             revolve(mult)
//         }
//         else{
//             reject("error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("text1").innerHTML=`the product is ${ans}`
// }
// add2(5,3)
// async function add3(a,b){
//     let promise  = new Promise((revolve,reject)=>{
//         var sub = a-b
//         if(sub>10){
//             revolve(sub)
//         }
//         else{
//             reject("error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("text2").innerHTML=`the difference is ${ans}`
// }
// add3(15,3)
// async function add4(a,b){
//     let promise  = new Promise((revolve,reject)=>{
//         var div = a/b
//         if(div>10){
//             revolve(div)
//         }
//         else{
//             reject("error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("text3").innerHTML=`the difference is ${ans}`
// }
// add4(50,2)
    
function ajaxcall(){
    var xhttp = new XMLHttpRequest()
    xhttp.open('GET','https://dummyjson.com/products',true)
    xhttp.send()
    xhttp.onreadystatechange= function(){
        let promise = new Promise((resolve,reject)=>{
            if(this.readyState==4 && this.status==200){
                resolve("it is done")
            }
        })
        promise.then((val)=>{
            document.getElementById("textc").innerHTML=`the result is ${val}`
        })
    }
    }
ajaxcall()