
const fs = require("fs")
let contents="";
function getContentsOfFile(){
fs.readFile("a.txt","utf-8",function(err,data){
    if(err){
        console.log("error" +err)
    }
    else{
        console.log(data)
        writeToFile(data.replace(/\s+/g, ' ').trim())
    }
})
return contents;
}

function writeToFile(data){
    fs.writeFile("a.txt","utf-8",function(err){
        if(err){
            console.log("error"+err)
        }
        else{
            console.log("File Written Successfully")
        }
    })
}
getContentsOfFile()
