let text="My name is john"   // we can assign a string between double quotes 
let text_1='My name is john'  // we can also assign a string between single quotes


let place= `John's father lives in "hyderabad."`  // we can use backticks if we have both single and double quotes in the sentence.

const name="hitesh"
const count=60
console.log(name + " "+ count + ' value') // This is not recommended

console.log(`Hello my name is ${name} and my count is ${count}`) // string interpolation


/////////////////////////////////     String declaration     //////////////////////////////

const savename= String("My name is John")
console.log(savename)
console.log(typeof savename)
console.log(savename[1])
console.log(savename.charAt(3))
console.log(savename.toUpperCase())
console.log(savename.toLocaleLowerCase())
console.log(savename.concat(1234))
console.log(savename.indexOf("J"))
console.log(savename.substring(1,11))
console.log(savename.slice(4,9))
console.log(savename.split( ))            // Look for space in between the paranthesis. o/p:- ['My name is John']
console.log(nameSave.split(" "))          //o/p:- ['my','name','is','John']

const gameName="   Amar     "        
console.log(gameName.trim())                  // Trim will eliminate both staring and ending spaces.  we also have trim start and trim end.

console.log(gameName.replace('Amar','Rama'))  // we can replace a string values using 'Replace function'.
console.log(gameName.includes('r'))           // we can check a string value present or not.


