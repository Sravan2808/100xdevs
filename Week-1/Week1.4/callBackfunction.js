// function square(n){
//     return n*n;
// }
// function Cubes(n){
//     return n*n*n
// }
// function sumOfSquares(a,b){
//     const val1 = square(a);
//     const val2 = square(b);
//     return val1+val2; 
// }
// function sumOfCubes(a,b){
//     const val1 = Cubes(a)
//     const val2 =Cubes(b)
//     return val1+val2; 
// }
// console.log(sumOfSquares(1,2))
// console.log(sumOfCubes(2,2))

function square(n){
    return n*n
}
function cubes(n){
    return n*n*n
}
function sumOfSomething(a,b,fn){
    console.log(a)
    console.log(a)
    console.log(fn)

    const val1 =fn(a);
    const val2=fn(b);
    return val1+val2
}
console.log(sumOfSomething(2,2,square))
console.log(sumOfSomething(2,2,cubes))