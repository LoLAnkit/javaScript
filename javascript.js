"use strict";  //treat ypur code according to newer version of js

let name = undefined
console.log(typeof name) // check the type of variable , 



                if(name!= undefined){
                    console.log("name is assigned")
                } else{
                    console.log(typeof name)
                }



// conversion 
// Number() 
// String()
// Boolen()




let age = "18";
console.log(typeof age)
console.log(typeof Number(age))


// 1= true   || 0 = false || "noEmpty"= true || "" = False
let isLoggedIn = 1;
let boolenStatus = Boolean(isLoggedIn);
console.log(boolenStatus);


// a++ increment after 
// ++a increment befor  like moving left to right 
let a = 4
let b = a++;   
console.log( b )   // assigned before increment
console.log( ++b ) // increment and assigned
console.log( a ) 



