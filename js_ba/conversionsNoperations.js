let a= 23
console.log(a)
console.log(typeof a)  // So, to convert this number type into string type we use.

let b= String(a)
console.log(b)
console.log(typeof b)  //Now this number is converted into string type.



let number= true
console.log(number)
console.log(typeof number)   // Here we are tryng to convert boolean  value into Number value

let numberTy=Number(number)  // This how we converted boolean value into Number value.
console.log(numberTy)
console.log(typeof numberTy)



let name='49a'
console.log(name)
console.log(typeof name)   // Here we are trying to convert string value into number value.




let nameNumber= Number(name)    // so, while trying to convert this string format into number we get NaN (not a number)
console.log(nameNumber)
console.log(typeof nameNumber)  // but, the datatype has changed to number

 
let number1=null
console.log(number1)
console.log(typeof number1)   // This is an object datatype and it value is also object. 

let numberN= Number(number1)  // Here we get 0 value after converting null but, its type has chnaged to number.
console.log(numberN)
console.log(typeof numberN)



let a1=undefined
console.log(a1)
console.log(typeof a1)  // here datatype and typeof same "undifined"


// // Try to convert we get 'NaN'
let b2= Number(a1)
console.log(b2)
console.log(typeof b2) //  Typeof is Number



let isLoggedin=1


let b1= Boolean(isLoggedin)       // 1=> true; 0=>false;   //"" => false;  "Amar" =>true
console.log(b1)
console.log(typeof b1)
