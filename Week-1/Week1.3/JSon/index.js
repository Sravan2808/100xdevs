// JSon stand for JavaScript Object Notation

const users = '{"name":"Harkirat","age":24,"gender":"male"}'

// Json.parse
// json.stringify

const user = JSON.parse(users)
console.log(user["gender"]);