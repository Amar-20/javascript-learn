console.log(null>0)
console.log(null>=0)  /* output is "True" because in javascript comparisons(<,>,>=,<=) works differently.  Becz here 'Null' is converted  as '0' */
console.log(null==0)  // Output is "False" because in javascript "Equality Check"(==) works differently.   

//Note:- Equality check (==) and comparisons(>,<,=,<=) works differently.
// Comparisons convert null to a number, treating it as 0.


console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)
console.log(undefined<0)




/*************************************************************************** Basic comparisons *************************************/

console.log(2>3)
console.log(23==22)
console.log(32<72)
console.log(23>=23)


// '===' (strict check)  here both values and datatypes are compared. example
console.log('2'=== 2)
