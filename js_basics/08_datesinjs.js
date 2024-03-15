let mydate = new Date()
let date= Date()
console.log(date)
console.log(mydate.getMonth())
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString('en-IN'))
console.log(mydate.toLocaleTimeString())


////////////////////////////////////////////////////////////////////////////////
let myCreatedDate= new Date(2024,0,3,3,0)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())


/////////////////////
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))
console.log(typeof date)



let newDate = new Date()
console.log(newDate())