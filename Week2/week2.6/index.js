// map,filter,arrow fns


// ARROW FUNCTION
// =================
// function sum(a,b){       
//     return a+b;
// }

// const sum = (a,b) =>{
//     return a+b;
// }


// const ans = sum(1,2);
// console.log(ans);

// =======================

// Map

// give an array, give me back a new array in which every value is multiple by 2
// [1,2,3,4,5]
// [2,4,6,8,10]

// const input = [1,2,3,4,5];

// solution
// const newArray=[];
// for(let i=0;i<input.length;i++){
//     newArray.push(input[i]*3);
// }
// console.log(newArray);

// Other Solution
// function transform(i){
//     return i*2;
// }

// const ans = input.map(transform);
// console.log(ans);

// filtering
// what if i tell u , given an input array ,give me back all the even values from it

const arr=[1,2,3,4,5]
// ans
// const newArr = [];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);
// filter

function filterLogic(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}
const ans = arr.filter(filterLogic);
console.log(ans)

