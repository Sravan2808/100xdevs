// const express = require("express");
// const zod = require("zod");
// const app = express();

// const schema = zod.array(zod.number());



// app.use(express.json());

// app.post("/health-checkup",function(req,res){
//     //kidneys=[1,2]
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);
//     res.send({
//         response
//     })
// });

// app.listen(300);

const zod = require("zod");

// //if this is an array of number with atleast 1 input,return true,else return false
function validateInput(obj){
//     const schema = zod.array(zod.number());

//     const response = schema.safeParse(arr);
//     console.log(response);

const schema = zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
})
const response=schema.safeParse(obj);
console.log(response);
}
validateInput({
    email:"vsurya@gmail.com",
    password:"12345678"
});


