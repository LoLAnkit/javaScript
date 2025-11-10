// normal function
// normal function
function sum(a,b) {
return a+b;
}
console.log(sum(1,2));

// arrow function

let Asum = (a,b) => a+b;

//  after =>(arrow) it return automatically no return keyword used unless brackets are open
//  after =>(arrow) it return automatically no return keyword used unless brackets are open
console.log(Asum(2,3));


// function isPositive(num){
//     if(num>0) {
//         return console.log('positive');
        
//     }
//     else if(num==0) {
//         return console.log('zero');
//     }
//     else
//     { return console.log('negative');}
// }

let status = "Positive"
let status1 = "negative"
let status3 = "Zero"

let isPositive2 = (num)=>{
    if (num>0){
        return console.log(status);
        
    }
    else if (num==0){
        return console.log(status3);
        
    }
    else {
        return console.log(status1);
        
    }
}


setTimeout(isPositive2,3000)
setTimeout(isPositive2,4000)
setTimeout(isPositive2,5000)



