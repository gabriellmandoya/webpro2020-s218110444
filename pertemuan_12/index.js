//Exercise #02
//Convert to ES6
// function yearUntilRetirement(year, firstName) {
//     var age = 28;
//     var retirement = 65 - age;
//     if(retirement > 0) {
//         console.log(firstName + " retired in " + retirement + " years");    
//     } else {
//         console.log(firstName + " is already retired.");
//     }
// }
// yearUntilRetirement();

//ES6
const yearUntilRetirement = (year, firstName) => {
    const age = 28;
    let retirement = 65 - age;
    if(retirement > 0) {
        console.log(`${firstName} retired in ${retirement} years`);    
    } else {
        console.log(`${firstName} is already retired.`);
    }
}
yearUntilRetirement();