/* Nested scope  using Functions ************************************/

function one(){
    const username="Amar"
    // console.log(username)
    function two(){
        const userid=420
        console.log(userid,username)
        console.log(typeof userid)
    }
    // console.log(userid)  
                                 /* We can't access the block scope value out side of it. 1)When a function is called, it is added to the call stack, and its execution begins. 
                                 2)If a function calls another function (nested function), the nested function is added to the top of the call stack, and its execution starts.
                                 3)The nested function will complete its execution before control returns to the outer function.*/
    two()

}
one()



/* nested scope using if ***************************************************/


if(true){
    const username=" Amar"
    if(username===" Amar"){
        const code="github"
        console.log(code+ username)
    }
    // console.log(code)           // We can't access the block scope values{}

}
// console.log(username)            // we can't access the block scope{} values in global scope area.




/***************************************   Interesting (function declaration types( Hoisting)) *************************************************************/

console.log(addOne(10))
function addOne(num){                                 /** just function declaration.This type of function can be called any vary. For Example
                                                        This function will run even if we call it before declaration of function or after declaration of function.(line47=>41) */
    return num+1
    
}
// console.log(addOne(10))     


// console.log(addTwo(10))                              //Cannot access 'addTwo' before initialization
const addTwo=function(num){                         // Variable hold function declartion
    return num+2
}
console.log(addTwo(10))