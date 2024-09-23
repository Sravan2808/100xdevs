function findSum(n){
    let ans =0;
    for(let i =1 ;i<n ;i++){
        ans=ans+i;
    }
    return ans;
}
let ans = findSum(100)
let ans2 = findSum(1000)
console.log(ans)
console.log(ans2)