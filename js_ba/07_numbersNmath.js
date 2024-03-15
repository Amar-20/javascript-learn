   const score=500
   const balance = new Number(250)    // This becomes Number object rather than primitive number value. o/p;- [Number :250]
   console.log(score)
   console.log(balance)


   console.log(score.toString().length) // Here we used number property toString to convert namuber to string type so, now we can use string properties also. 
   console.log(score.toFixed(3))        // op:- 500.000

   


   const number=1247.8497
   console.log(number.toPrecision(4))
   console.log(number.toPrecision(3))




   const hundreds=1000000
   console.log(hundreds.toLocaleString('en-IN'))



   ////////////////////////////////+++++++++++++++++++++++++++++++    maths  library  +++++++++++++++++++++++++++++++++++++++++++///


console.log(Math.abs(-4))      // converts neg numbers into positive.
console.log(Math.round(23.89))  // rounds up the value
console.log(Math.ceil(234.0876))
console.log(Math.floor(23.999))
console.log(Math.min(3,6,233,8,97))
console.log(Math.max(2,6,235,9,10))


console.log(Math.random())       /// random value always comes between 0 and 1 emaple:- 0.523324
console.log(Math.random()*10)    /// here that random value is multipled by 10 we get exmaple:- 0.523324 *10 =5.23324

// now for suppose that random value is example 0.0245 than even after multiplying aslo we get 0.245 (but we have set a min value should be displayed is 1 and above)
// To slove this we add 1 to this "console.log(Math.random()*10)  "
console.log(Math.floor(Math.random()*10)+1)   // floor is used to get floor value rather than decimal values.





// now a problem we have is that we need to difine both min and max number value also.
const min=10
const max=21
console.log(Math.floor(Math.random()*(max-min+1)+min)) // now we can  have min valu of 10 and max of 21. (Note imp)

 

