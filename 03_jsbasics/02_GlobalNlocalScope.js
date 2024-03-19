let a=20
const cd = 40                   /* Every thing decleared outside the block scope is global scope. And we can not access the local scope values from global scope. */
// var ef= 60


if(true){
    let b=200
    console.log(a+b)          /* The output is 220. This means block scope '{}' can access the global scope values. */
    const cd =400
    var ef=600
    console.log(ef)         /* Every thing inside the "{}" is block scope.*/
}
console.log(a)
console.log(cd)
// console.log(ef)                   /* Look for the out put this gives.This prints the changed value for 'ef' taken from block scope. This type is not good */