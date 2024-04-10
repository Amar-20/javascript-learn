const userEmail=[]
if (userEmail){
    console.log('got the Email')

}
else{
    console.log("Don't have user Email")
}

//falsy values
// false, 0,-0,Bigint 0n,"",null,undefined,NaN

//Truthy values
// true,"false" ,"0"," ",[],{},function(){}

/**************************************************************************************  */

console.log(userEmail.length)                
if (userEmail.length===0){                     // checking the array is empty are not
    console.log("Array is empty")
}                             

/******************************************************************************************************* */
  

const empobj={}
if(Object.keys(empobj).length===0){
    console.log("object is empty")
}

/**************************************************** Nullish coalescing Operator(??) ********************************* */

let val1
val1=40??50
val1=null??30
val1=undefined??10
val1=null??5??10
val1=""??100
val1="Amar"??40


console.log(val1)


/********************************************************** Terniary operator(?)  ************************** */

// condition?true:false                  // syntax

const iceCreamPrice=5.00
iceCreamPrice <= 4.00? console.log('Less than 4.00') ``: console.log('more than 4.00')
