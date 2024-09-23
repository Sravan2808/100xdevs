// const currentDate = new Date();
// console.log(currentDate.getMonth()+1 + "/" + currentDate.getDate()  + "/" +currentDate.getFullYear())

// function dateMethods() {
//     const currentDate = new Date();
//     console.log("Current Date:", currentDate);
  
//     // Getting various components of the date
//     console.log("Date:", currentDate.getDate());
//     console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
//     console.log("Year:", currentDate.getFullYear());
//     console.log("Hours:", currentDate.getHours());
//     console.log("Minutes:", currentDate.getMinutes());
//     console.log("Seconds:", currentDate.getSeconds());
  
//     // Setting components of the date
//     currentDate.setFullYear(2022);
//     console.log("After setFullYear:", currentDate);
  
//     currentDate.setMonth(5); // Setting month to June (zero-indexed)
//     console.log("After setMonth:", currentDate);
  
//     // Getting and setting time in milliseconds since 1970 Important
//     console.log("Time in milliseconds since 1970:", currentDate.getTime());
  
//     const newDate = new Date(2023, 8, 15); // Creating a new date
//     console.log("New Date:", newDate);
//   }
  
//   // Example Usage for Date Methods
//   dateMethods();
  
// function calculateSum(n){
//     let a=0;
//     for(let i=0;i<n;i++){
//         a=a+i;
//     }
//     return a;
// }

// const beforeDate = new Date();
// const beforeTimeInMs = beforeDate.getTime();
// calculateSum(1000000);

// const afterDate = new Date();
// const afterTimeInMs = afterDate.getTime();

// console.log(afterTimeInMs-beforeTimeInMs)

function currentTimePrint(){
    console.log(new Date().getTime());
}
setInterval(currentTimePrint,1000);