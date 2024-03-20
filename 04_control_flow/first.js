/*************************************************  control flow / logic flow *****************************************/
// 1)if   and   if else

// const roomTemp= 20
// const outTemp=37
// if (!roomTemp < outTemp){
//     console.log(`You are at room tempareture`)           // (condition) 
// }
// else{
//     console.log(`The temperature is hot`)
// }
// console.log( )
// <,>,<=,>=,==,===,!= (comparision operator)


const score=300
if (score>100){
    const power=" fly"
    // console.log(`user power is ${ power}`)
}
// console.log(`User power is ${power}`)        // we can't access block scope values in global scope area.(error)

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const score1 =420
if (score1>300) console.log(`420 is the higher score`)     //implicit code(collapse)

/******************************************************************* ****************************************/
 // nesting  

if (score1<300){
    console.log(' ')
}
