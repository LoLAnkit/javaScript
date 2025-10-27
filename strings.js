// can be denoted in both '' single or "" double quote
// can be denoted in both '' single or "" double quote

    let name = "ankit"
     let age = 21

     console.log("my name is " + name + "I am " + age);

    //  String interpolation means to use back-tick `` for concat 
    //  String interpolation means to use back tick `` for concat 


       console.log(`My name is ${name}, I am ${age}`);
    // console.log(`My name is ${name}, I am ${age}`);

    // you can also creat string using object 
    // you can also creat string using object 

    let animal = new String('Cow')
    console.log(typeof animal)  // object


    console.log(animal.toLowerCase());
    console.log(animal.toUpperCase());

    console.log(animal.charAt(2).toUpperCase());

    // dividing,Slicing string 
    // dividing,Slicing string 

    let stringSlice = name.substring(0,3)   // 3 is excluded
    console.log(stringSlice)

    console.log(stringSlice.toUpperCase())   // 3 is excluded

    let Slice = name.slice(0,3)               // 3 is excluded ,original is changed
    console.log(Slice)

    // trim used to remove white space 
    // trim used to remove white space 

    let sentence = "           why peoople     input unnecessary          space    "

    console.log(sentence)
    console.log(sentence.trim()); // it just remove first and last extra spaces


    const url = "htpps//ankit.com/home%20page"
     
    const changedUrl= url.replace('%20','_')

    console.log(url)
    console.log(changedUrl)
    console.log(sentence.replace(/\s+/g,' '));      // .replace(search, replace_itm)  .replace('search', 'replace_itm') for string it not a synatx

    // regular expression in js /  / 

    