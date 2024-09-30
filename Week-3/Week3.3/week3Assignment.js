const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
// const zod = require("zod");

// const emailSchema = zod.string().email();
// const passwordSchema = zod.string().min(6);
// function signJwt(username, password) {
//     // Your code here
//     const usernameResponse = emailSchema.safeParse(username);
//     const passwordResponse = passwordSchema.safeParse(password);
//     if(!usernameResponse.success || !passwordResponse.success){
//         return null;
//     }
//     const signature=jwt.sign({
//         username,
//     },jwtPassword);
//     return signature;   
// }
// const ans =signJwt("sravansurya@gmail.com","akdcndkdldkc");
// console.log(ans);

// function decodeJwt(token) {
//     // Your code here
//     // true ,false
//     const decoded = jwt.decode(token);
//     if(!decoded){
//         return false;
//     }
//     else return true;
// }
// console.log(decodeJwt("kvjf"));
// console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNyYXZhbnN1cnlhQGdtYWlsLmNvbSIsImlhdCI6MTcyNzcxNzY4N30.xCC2wgsvi3xn6sQapcbE32Rioe031S_EODY-mPagtKI"
// ));
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNyYXZhbnN1cnlhQGdtYWlsLmNvbSIsImlhdCI6MTcyNzcxNzY4N30.xCC2wgsvi3xn6sQapcbE32Rioe031S_EODY-mPagtKI

function verifyJwt(token) {
    // Your code here
    ans = true;
    try{
    const verified=jwt.verify(token,jwtPassword);
    }
    catch(e){
        ans=false
    }
    return ans;
    
}
// console.log(verifyJwt("ghdwkjh"));
console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNyYXZhbnN1cnlhQGdtYWlsLmNvbSIsImlhdCI6MTcyNzcxNzY4N30.xCC2wgsvi3xn6sQapcbE32Rioe031S_EODY-mPagtKI"));