// // const fs = require("fs");
// // // fileSystem module

// // fs.readFile("a.txt","utf-8",function(err,data){
// //     console.log(data);
// // })
// // console.log("Jipfjb")



// console.log("Hi!");

// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 5000);

// let a=0;
// for(let i=0;i<10;i++){
//     a=a+i;
// }
// console.log(a);
const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
  return new Promise(function(resolve) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

kiratsReadFile().then(onDone);