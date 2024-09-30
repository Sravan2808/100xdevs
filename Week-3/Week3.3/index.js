const jwt = require("jsonwebtoken");

// decode ,verify , generate

const value={
    name:"harkirat",
    accountNumber:123123123
}

// jwt
// sign and not generated
const token = jwt.sign(value,"secret");
console.log(token);

const verifiedValue=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcyNzYzNjc1N30.0Qxxwil8LXQrXnn4XSFlPL8XEwLaO5eBW5N3h2aMWzw.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcyNzcxNTYzNH0.Olzi7kkl3czNXJLDy5Ec4w6le3x8XhswtKZ6Sj8uD_c","sceret")
console.log(verifiedValue)
// this token has been generated using this secret , and hence this token can only verified using this sceret
// this is your checkbox
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcyNzYzNjc1N30.0Qxxwil8LXQrXnn4XSFlPL8XEwLaO5eBW5N3h2aMWzw