const express = require("express");
const zod = require("zod");

const app = express();

app.use(express.json());

app.post("/health-checkup",function(req,res){
    //kidneys=[1,2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have " + kidneyLength + " kidneys");
});
// global catches
app.use(function(err,req,res,next){
    res.json({
        msg:"Sorry something is up with ourr server"
    })
})

app.listen(300);