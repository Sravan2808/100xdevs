const fs = require('fs');
fs.readFile('a.txt','utf-8',function(err,data){
    console.log(data)
})

// ExpensiveOperation
let a = 0;
for(let i=0;i<99;i++){
    a=a+i
}
console.log(a);