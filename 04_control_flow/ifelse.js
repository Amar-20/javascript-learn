/***************************************************  If  & else  & else if  *********************************************/
const temp=38
if(temp==38){
    console.log(`temp is hot`)
}

/************************************************************************************************************************* */

if (temp<40){
    console.log(`temp is cool`)
}

/************************************************************************************************************************* */
const temp1=41
if(temp1>40){
    console.log(`temp is above 40 `)
}
else{
    console.log(`temp is below 40 `)
}
console.log('Executed')                 // Its prints any way

/************************************************************************************************************************ */

const score =420
if (score>=420){
    const power=' High'
    console.log(`His super power is:${power}`)
}
// console.log(`His power is:${power}`)                // This is error becoz we can't access block scope value in global scope.


/************************************************************************************************************************** */
const balance=1000
if (balance>500) console.log('Balance is higher than 500')     // Implicit code

/************************************************************************************************************************* */

if (balance<500){
    console.log("less than 500")
}
else if (balance<750){
    console.log("less than 750")

}
else if(balance<900){
    console.log("less than 900")
}
else{
    console.log('more than all the statements above')
}


/*************************************************************************************************** */

const userLogged=false
const debitCard=true
if(userLogged&&debitCard){                     // Both should be true.
    console.log('Allow the user to shop')
}
else{
    console.log('User is not allowed')
}

/**************************************************************************************************** */

const logInGoogle= true
const logInEmail=false
if(logInEmail||logInGoogle){                // if any one is true
    console.log("User is logged in")
}