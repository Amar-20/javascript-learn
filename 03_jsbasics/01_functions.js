 /* Functions */

//  function sayMyName(firstn,lastn){

//     console.log(firstn + lastn)                       /*   function 1    */



//  }
// const result= sayMyName(4,5)
// console.log("Result :",result)                             /* This leads to undefined output becoz we didn't use 'Return' */


/************************************************************************************************************************************************************************** */

// function sayMyName(firstn,lastn){

//     // let result=firstn+lastn   
//     // return result      /* in function after 'return' every code is unreachable */   //(or)//
//     console.log('Amar')


//     return firstn+lastn

//  }

//  sayMyName(4, 5)
 
//  const result1= sayMyName(4,5)                         /* We can only assign variable to 'return' function */
//  console.log( "Result :",result1)

/********************************************************************************************************************************************************************** */

// function loginUserMessage(username){
//     return `${username} you just logged in` 

// }
// // loginUserMessage("Hello! Amar")           // there is no print function to display the output

// console.log(loginUserMessage("Hello! Amar"))     // Now it will print the output. If there is no vakue passed it will display undefined. To avoid this we use ifand if-else.(below example)

/*************************************************************************************************************************************************************************** */

// function loginUserMessage(username){
//     if(username === undefined ){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username}you just logged in`
// }
// console.log(loginUserMessage())      // Here we didn't pass any arguments.


/************************************************************************************************************************************************************************** */

/** Setting a default value for the username */

// function loginUserMessage(username="Ram"){
//     if(!username){
//         console.log("Please enter a user name")
//         return
//     }
//     return  `${username} you just logged in`
// }
// console.log(loginUserMessage())  // Here the output will be 'ram ' has it is a default value.
// console.log(loginUserMessage("Amar"))    // Here arguments are given so, the defaut value is overwritten.



/************************************************************************************************************************************************************************** */

/************************************************************************************************************************************************************************* */

// function cartPrice(val,val1,...num1){           /* This is 'Rest ' Operator. This will help us in adding as many values as possible at the time of argument declaration. And the numbers will convert into Array*/
//     return num1
// }
// console.log(cartPrice(200,800,566,33,5600,5839,2000,493))     /* Here the first two numbers will be taken by 'val'& 'val1' and the remaining will be converted into array*/


/********************************************************************************************************************************************************************** */


/************************************************ Using objects in functions(passing objects in functions)  ************************************************************/

//  const user={
//     username:"Amar",
//     price:200
//  }

//  function handleingObject(object){
//     return `username is ${object.username} and price is ${object.price}`  // In this type of method we have to be careful  with type safty. 

//  }

//  console.log(handleingObject(user))



/**************************************************** Using Arrays in functions(passing objects in functions)******************************************************* */

const prices=[200,444,120,757,568,900]

function handleingarray(anyarray){
    // return `These are the prices of each item ${anyarray}`;      // This will return entire string of array values .
    
    return anyarray[1]                                            // This will return the array value with index posistion.
 
}
console.log(handleingarray(prices))


