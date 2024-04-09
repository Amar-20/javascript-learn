/*                                       Declear an object                   */


const userData={
    user:"Amar",
    cost: 999,

    welcomeGreeting:function(){
        console.log(`${this.user},Welcome to the site`)
        console.log(this)

    }
}
userData.welcomeGreeting()
userData.user="Ram"
userData.welcomeGreeting()
console.log(this)                                    //This output referes to empty object.(In node environment).But in browser its window object(window object)


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function code(){
    const username="Amar"
    console.log(this.username);         // Undefined. `this keyword only refers to the object that owns the function being executed. It allows access to properties and methods of that object. `
}

code()

const chai= function(){
    let username="Amar"
    console.log(this.username)
}

chai()                                 // undifined. Same as above with different function declaration.

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* In Node Environment. In normal function declaration. If we console.log 'this' keyword it will result in  some values like :- global:,clearInmmediate,setImmediate etc,.*/
function ab(){
    let user="Amar"
    console.log(this)
}
ab()


/* In node Environment. In the Arrow function declaration. If we console.log() 'this' keyword it will result in {} empty object */

const code= ()=>{
    let user="Amar"
    console.log(this)
}
code()



/********************************************************* Arrow functions syntax **************************************/

const aur = () =>  {
    username="Amar"
    console.log(this)               
}
aur()                                // {}

// ()=>{}                              // simple syntax for arrow function
/*************************************************************************************************************************************************************************** */

// const addOne=( num1,num2) =>{                   // arrow function and its parameters.
//     return num1+num2                


// }
// console.log(addOne(3,3))    




/** we can also define above code in this manner */

// const addone=(num1,num2)=>num1+num2             // implicit return
const addone=(num1,num2)=>(num1+num2)             // implicit return
// const addone=(num1,num2)=>({username:"Amar"})    //  here we are returing an object '({})'
// console.log(addone(username, 420)) 
// console.log(typeof username)



const myArr=[1,3,4,5,3,2]
myArr.forEach(function(){})        // In forEach loop  simple function declaration
myArr.forEach(()=>{})              // In forEach loop  Arrow function declaration
myArr.forEach(()=>({}))            // In forEach loop  Arrow function delclaration which returns object.


