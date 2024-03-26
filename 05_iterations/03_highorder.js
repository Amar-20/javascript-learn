/******************************************************************* Array specific loops  *******************************/

/******************************************************* For of ***************************************/

let myArry=[1,2,3,4,5,6,7,8]
for (const num of myArry) {
    console.log(`Nubmer is ${num}`)
    
}

/******************************************************************  adding a if in for of *************************/

let myArray=[1,2,3,4,5,6,7,8,9]
for (const numb of myArray) {
    if(numb==7){console.log(`MSD number`)}
    console.log(`Number is ${numb}`)
    
}

/**************************************************************** for of loop on strings with 'continue'  *************************************************/

const greetings="Hello World!"
for (const greet of greetings) {
    if(greet==" "){
        continue                                 
    }
    console.log(`Each char is ${greet}`)
    
}

/******************************************************************************* Maps  **************************/

//Maps
const x = new Map()
x.set('IN',"India")
x.set('CH',"China")
x.set('RUS',"Russia")
// x.set('IN',"India")     
                                               /** The Map object holds key-value pairs and remembers the original insertion order of the keys. And Map() have unique values only
                                                           *  Any value (both objects and primitive values) may be used as either a key or a value. and these are not iteratable. */

 
  for (const [key,values] of x) {
    console.log(key, ":-", values )
    
  }
console.log(x);

/************************************************************** for of loop with object ******************************/

// const myob={"a":"Amar","b":"Ball","c":"cat","d":"dog"}
// for (const alpha of myob) {
    
//     comsole.log(`alpha`)
// }

// for (const [key,value] of myob){              // We got to know that objects are not literable when we use 'for of' loop.(we have different methods(for in) to iterate)
    // console.log(key,":-",value)

// }

/**************************************************************************** for in loop on object ****************************************/

const myobj={
    'java':"spring",
    'js':"node",
    'swift':"swift by apple"
}
for (const key in myobj) {
    console.log(`${key}:-${myobj[key]}`)        ///The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
    
}

/************************************************************************** for in  loop on array ************************************/

 const arr=['js','rb','py','java']
 for (const key in arr) {
    console.log(`${arr[key]} :-${key}`)                           
 }
 
/***************************************************************  for in on map ************************************/


const map = new Map()
map.set('CH',"China")
map.set('IN',"India")
map.set('RUS',"Russia")

for (const key in map) {                 /// maps are not iteratble.
    console.log(key)
   
    }

/********************************************************************** for each loop on array   **********************/


// const code=['js','java','python','c','ruby']
// code.forEach( function (val){                      // callback function 
//     console.log(val)
// })

//---------------------------------------------------------------
const code=['js','java','python','c','ruby']
code.forEach( (val) => {console.log(val);} )

//-----------------------------------------------------------

function num(val){
    console.log(val)
}
code.forEach(num)    // Here we have first defined a function and used it in a 'for each loop ' with just its function name reference.

//------------------------------------------------------------------------------

code.forEach((val,index,array)=>{console.log(val,index,array)}) // 'for each' can also hold different types of values about array like index,array,val.

//---------------------------------------------------------------------------------------------------


/*********************************************** 'For Each' loop with 'array of objects' ****************************/

const mycode=[
    {
        "languagename":"java",
        "languagex":"jv"
    },
    {
        "languagename":"python",
        "languagex":"py"
    },
    {
        "languagename":"javascript",
        "languagex":"js"
    }

]
mycode.forEach((item)=>{
    console.log(item.languagex)
})
