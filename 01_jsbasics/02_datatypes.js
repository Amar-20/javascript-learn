            // There are two types of datatypes 
       // 1) Primitive datatypes or Value Types ( These are called by value. Changes are made in the copy data.)
       // These are of 7 types.
  
  
"use strict"        // just to indicate that we are using the newer version of js
let name='Amar'    //String (Here Amar is the string ) 
let number=420.2    // Number  
let Yesorno=true //Boolean (just True or false)
let country;   //Unidentified (unidentified and here only variable name is defined)
let binary=null  //Null (standalone value)
const bigInt =12345675433450n  //bigint 
const id=Symbol("1234")
const anotherId = Symbol('1234')
 
let name1=undefined



console.table([name,number,Yesorno,country,binary])
console.log(3+3)
console.log(id===anotherId)     // there are not same


// 2) reference datatypes ( call by memory)

  let heros = ["shaktiman","nagarjuna","chotabeem"]   // *Array


  let myBio = {
     name:'amar',
     AbstractRange:27
   }                                            // *objects



 let myfunction=function(){
     console.log('World hello!!')
}                                           //* functions
 

//javascript is a dynamic type language.///////////////////////

// To know the datatype of any variable we use
console.log(myfunction);
console.log(typeof myfunction);
console.log(typeof heros);
console.log(typeof myBio);
console.log(typeof binary);
