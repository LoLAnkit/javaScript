
// primitive datatype use stack memory if.e Int,string
// primitive datatype use stack memory

// non- primitive (refrence) datatype use heap memory i.e Object, array
// non- primitive (refrence) datatype use heap memory

// in stack original source isnt changed it only provide its copy to another variable
// in stack original source isnt changed it only provide its copy to another variable



// in heap original source  changed as it provide direct refrence to original source



let name= "ankush"
let name2= name;

name2="ankit"


console.log(name2)
console.log(name)





let user1 = {
    name:"ankit",
    email:"ankit@gmail.com"
}
console.log(user1.name)
let user2=user1;
user2.name="ankush"
console.log(user1.name)
console.log(user2.name)


// it actually change in the heap memory i.e original data > source > original refrence
// it actually change in the heap memory i.e original data > source
// it actually change in the heap memory i.e original data > source