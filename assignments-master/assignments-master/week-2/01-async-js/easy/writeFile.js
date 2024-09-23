const fs = require('fs')
const filePath='a.txt'
const dataToWrite = 'This is some new data written to the file'
fs.writeFile(filePath,dataToWrite,function(err,data){
    if(err){
        console.log(err);
        return
    }
    console.log(data,'File got saved')
})