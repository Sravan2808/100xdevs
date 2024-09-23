let counter = 1
let counterStop=10
function runCounter(){
    console.log(counter);
    counter++;
    if(counter<=counterStop){
        setTimeout(runCounter,1000)
    }
    else{
        console.log("Counter stopped")
    }
}
runCounter();

