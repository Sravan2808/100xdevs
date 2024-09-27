const express = require("express");

const app = express();

function userMiddleware(req,res,next){
    if(username!="harkirat" && password != "pass"){
        res.status(403).json({
            msg:"Incorrect inputs"
        });
    }else{
        next();
    }
};

function kidneyMiddleWare(req,res,next){
    if(kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            msg:"Incorrect inputs"
        });
    }else{
        next();
    }
}

app.get("/healthy-checkup",userMiddleware,kidneyMiddleWare,function(req,res){
    //do something with kidney here
    res.send("Your heart is healthy");
});

app.get("/kidney-checkup",userMiddleware,kidneyMiddleWare,function(req,res){
    //do something with kidney here
    res.send("Your heart is healthy");
});

app.get("/hearth-checkup",userMiddleware,kidneyMiddleWare,function(req,res){
    //do something with kidney here
    res.send("Your heart is healthy");
});

