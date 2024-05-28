const myArr=["Thor",'ironman','spiderman']
const myArry=['Superman','flash','batman']

console.log(myArr)
console.log(myArry)

// const pusharry= myArr.push(myArry)
// console.log(pusharry)


const newarry=myArr.concat(myArry)       /////concat joins two arrays 
console.log(newarry)


////////////////////////////////////////////we can also use spread insted of concat.Becoz it will help expansion of elements from an iterable (like an array, or string) into another iterable or function call.


const heros=[...myArr,...myArry]    /// spread operater
console.log(heros)


const newarr=[1,2,4,[5,6,7,],8,[9,10,[11,12]]]
const realarr=newarr.flat(1)       ///// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. And we have to give number of depth it has to concat.
console.log(realarr)



const name= "Amar"          
console.log(Array.isArray(name))       //// This is to check a give element is array or not

//////////////////////////////////////// now we convert it to array.

const arrayName= "Amar"
// const arr=Array.from(arrayName)   /// Now the name is converted it array.
// console.log(arr)

////////or///
console.log(Array.from(arrayName))



const A=100
const B=200
const C=300
console.log(Array.of(A,B,C))       // We can also convert variable values into arrays.
