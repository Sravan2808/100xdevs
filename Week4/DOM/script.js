// const express = require("express");

// const app = express();
// app.get("/sum",function(req,res){
//     const a=parseInt(req.query.a);
//     const b=parseInt(req.query.b);
//     const sum =a+b;
//     res.send(sum.toString())
// })
// app.listen(3000);

const express = require("express");
const app = express();
app.get("/simpleinterest",function(req,res){
    const principle = parseInt(req.query.principle)
    const rate = parseInt(req.query.rate)
    const time = parseInt(req.query.time)
    const simpleinterest=(principle*rate*time)/100;
    res.json({simpleinterest});
    
})
app.listen(3000);