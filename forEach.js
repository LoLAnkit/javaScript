const user = [
{name: 'ankit', age: 25 },
{name: 'ankush', age: 23 }
];


console.log(user[0].name);

const name=[];
 
user.forEach(function(user){
name.push(user.name)


});

console.log(name);

const age =[];

user.forEach(
function(user)
{
    age.push(user.age)
}

)
console.log(age);


const num=[1,2,3,4,5,6,7,8,9,10]

// if we add {} in arrow function we need to add return keyword 
// if we add {} in arrow function we need to ad return keyword

const newNum = num.filter( (n)=> n>4)  // auo return

console.log(newNum);

let nm=[]
num.forEach(
    function(num)
    {
    if(num>4)
        {
        nm.push(num)
    }
})
console.log(nm);















// forEach loops through every element
// we need to manually push to new array unlike for map
// manually push
// dont return any thing