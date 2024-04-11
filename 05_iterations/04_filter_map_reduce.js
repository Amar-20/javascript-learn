
/****************************************************************************** for each  **************************************************/

// const myArr=[1,2,3,4,5,6,7,8,9,10]
// const myval=myArr.forEach(element => { 
//      console.log(element)
//     return element                                // for each will not return values.
// })
// console.log(myval)                                // for each will not return values.


/************************************************************************** so, we came up with filter,map and reduce ****************************************************/

/******************************************************************************* filter *********************************************************************************/

const myArr=[1,2,3,4,5,6,7,8,9,10]
// const myNum=myArr.filter( (items)=>{ 
//     return items>6 && items>8                           //filter Returns array[].It returns a new array containing only the elements that satisfy the provided condition(&&).
// } )
// console.log(myNum) 
 
/***************************************************** Below is example returing new array with foreach and if loop **************************/


const newNums=[]

myArr.forEach(num => {
    if(num>4){
        newNums.push(num)
    }
    
});
// console.log(newNums)

/***************************************************************************  Filter()  **********************************************/

/************************** It returns a new array containing only the elements that satisfy the provided condition. 
 * The original array remains unchanged; filter() creates a new array with the filtered elements. The provided function defines the condition that each element must satisfy to be included in the resulting array. 
 * If the function returns true, the element is included; otherwise, it's excluded. **/


const books=[
    {title:'Book One',genre:'Fiction',publish:1981,edition:2004},
    {title:'Book Two',genre:'Histry',publish:1992,edition:2008},
    {title:'Book Three',genre:'Non-fiction',publish:1999,edition:2007},
    {title:'Book Four',genre:'Histry',publish:1989,edition:2010},
    {title:'Book five',genre:'science',publish:1999,edition:2014},
    {title:'Book six',genre:'Fiction',publish:2000,edition:2006},
    {title:'Book Seven',genre:'Non-Fiction',publish:1996,edition:2017},
    {title:'Book Eight',genre:'Science',publish:1997,edition:2005},
    {title:'Book Nine',genre:'maths',publish:1994,edition:2015},
    {title:'Book Ten',genre:'Fiction',publish:1993,edition:2020},
    
]


let userBooks= books.filter((bk)=>{return bk.genre==='Fiction' })    // with scope so  use return (arrow function)


userBooks=books.filter( (bk)=> bk.publish>=2000)                    // without scope so,without return (arror function)
console.log(userBooks)


/**************************************************************************************** Map() *****************************************************************/

/** map() also iterates over each element in the array. map() returns a new array with the results of applying the provided function to each element in the original array. The provided function defines how each element of the original array will be transformed in the resulting array**/


const myNumb=[1,2,3,4,5,6,7,8,9]
let newNum=myNumb.map( (num)=>{return num+20 } )
console.log(newNum)

/***********************************************************************************  Chaining  ****************************************************************/


newNum=myNumb.map( (num)=>num *10).map( (num)=> num+1  )           //chaining
console.log(newNum)                                          

newNum=myNumb.map( (num)=>num *10).map( (num)=> num+1  ).filter((num)=>num>=51)           //chaining map().map().filter()  /// Note:- The first map() makes the changes and provides an array and when it comes to the second map() it makes the changes from the changed Array from the first map().and so on
console.log(newNum)

/*************************************************************************************** Reduce()  ****************************************************************/

// const arry=[1,2,3,4,5]
// const newarr=arry.reduce((acc,cval)=>{ 
//     console.log(`acc : ${acc} and cval: ${cval}`)
//     return acc+cval
//     },0)                                                                          //  with arrow function..output is 15
// console.log(newarr)

const arry=[1,2,3,4,5]
const newarr=arry.reduce(function(acc,cval){
    console.log(`acc: ${acc} and cval: ${cval}`)
    return acc+cval
},1)
console.log(newarr) 

/************************************************************************************ reduce with array of objects      ********************************/

const arrobj=[
    {
        itemName:"javascript",
        price:2000
    },
    {
        itemName:"java",
        price:1020
    },
    {
        itemName:"data science",
        price:19900
    },
]
const cart=arrobj.reduce((acc,items)=>acc+items.price,0)
console.log(arrobj.reduce((acc,items)=>acc+items.price,0))
console.log(cart)

