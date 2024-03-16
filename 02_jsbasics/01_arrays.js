//// Arrays

const myArray= [1,2,4,7,4,12]
const myHeros=['BatMan','SuperMan','Deadpool']
const myarray2= new Array(12,4,63,23,3,2)       //// different kind of decleration(array)
console.log(myArray[2])
console.log(myarray2)


///// Array methods.

myArray.push(10)                /// push adds values at the end of the array.
console.log(myArray)

/////////////////////////note:- look for the ouput at the end of each method..(individually).It will tell lot about memory allocation


myArray.pop()            //// removes the last value at the end of the array
console.log(myArray)


myArray.unshift(9)       /// This helps us to insert values at the start of the array. This well create shift of every other value index in the array.
console.log(myArray)



myArray.shift()
console.log(myArray)     /// Removes the first value in the array.



console.log(myArray.includes(12))   /// we can find out a value is present or not in an array.
console.log(typeof myArray)         

console.log(myArray.join())    // converts array into string
console.log(myArray)


//////////////////////////// slice , splice //////////
console.log("A", myArray)
const myarr=myArray.slice(0,3)   //// index  start include from 0 to index exclude 3. 
console.log(myarr)
console.log("B", myArray)


const myarr2=myArray.splice(1,3)  // note :--- splice modifies the original array and returns an array with the removed elements.
console.log("C",myArray)
console.log(myarr2)



