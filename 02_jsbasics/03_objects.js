//****************************************************************************** Objects   ********************************************************//

// There are two ways to declear a object
// 1)object literals
// 2)object constructor(singleton)
//////////////////////////////////////////////////////////////   Type 1   //////////////////////////////////////////////////////////////////////////

const myarr=[1,'amar',456,'michigan']     /// Declearing the array
const mysymb=Symbol('Hero')               /// Declearing the symbol
const myObj = {
    name:"Amar",
    fullname:'kogeri',
    age:27,
    location:"michigan",
    email:"amar@google.com",
    loggedIn:false,
    lastLoggedIn:['sataday','sunday','friday'],
    myarry: myarr,                                        //// declaring the array outside and including it in object.(Using array as a value name)
    [mysymb]:'hero'                                      ////  Always Declear SYMBOL in square brackets[] 

}



////////////////////////////////////////////////////////////////  Always use (.name) type for accessing the values instead of ["full name"] or[mysymb] (Only in few cases)




myObj.email='amar@openai.com'     // To chnage the value in the object
myObj.loggedIn=true



myObj.greeting = function(){  
    console.log(`hello ${this.name}`)                      // defining  function 
}



////   We can freeze the values in object
myObj.age=26
// Object.freeze(myObj)                /// Before and after using freeze.(We  can aslo freeze the individual values in object using key names)
myObj.age=28



console.log(myObj)               //  To Print the Object
console.log(myObj.greeting())

// Two types of accessing the object.
console.log(myObj.email)         //   Accessing the object value with using key name(email).
console.log(myObj["email"])
console.log(myObj["full name"])  //  


console.log(myObj[mysymb])       ///  Accessing the symbol in object. Syntax








console.log(typeof myObj.email)  // Print the typeof of key name(String). Becoz js takes all the above key names as 'Strings'. Except("loggedIn => boolean", "lastLoggedIn => oblect").
console.log(typeof myObj.lastLoggedInloggedIn)    // Typeof is object
console.log(typeof myarr)
console.log(mysymb)
