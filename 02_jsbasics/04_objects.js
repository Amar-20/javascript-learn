/*                Type 2 declaration            */

//****************************************     Singleton                  */

// const myobj1= new Object()       /* new Object() is a constructor function that creates a new object instance. */
const myobj={}                 /* {} is an object literal syntax that creates a new object directly without using a constructor function. */
// console.log(myobj1)

/* Adding vales in the object */

myobj.id='420a'
myobj.name='amar'
myobj.isloggedIn='false'
// console.log(myobj)

const anotherapp={
    email:'amar@another.com',
    fullname:{
        username:{
            firstname:'amark',
            lastname:'konan'

        }
    }
}

console.log(anotherapp.fullname?.username?.firstname);  //  optional chaining (?) This helps in avoiding errors that would otherwise occur if any intermediate property in the chain is null or undefined.




/*  Mergeing the objects  */


const obj1={1:'ab',2:'cd',3:'ef'}
const obj2={4:'gh',5:'ij',6:'kl'}

const obj3={obj1,obj2}          // object  inside object inside object. But, (we want to combine to objects)
console.log(obj3)                 // object  inside object inside object. But, (we want to combine to objects)


const obj4=Object.assign({},obj1,obj2)  /* Here obj1 acts as 'Target' and obj2 acts as 'source'. 
                                          Then source is combined into target object. But, when we have more than two objects to combine its best to use '{}' at the starting of the assign property.
                                          To let know that '{}' is the target and remaining objects are source. */

console.log(obj4)                      /* we now here combined the two above objects in one object */


/* Spread  */
const obj5={...obj1,...obj2}
console.log(obj5)



/* Array of objects (data base values) */

const user=[
    {
        id:23,
        email:'chintu@gmail.com'

    },
    {
        id:13,
        email:'asd@google.com'
    },
    {

    },
    {

    }
]


console.log(user[0].email)   /* accessing the object in array with index usage.*/


/* accessing the keys and values seperately */

console.log(myobj)
console.log(Object.values(myobj))    // Here output is in the form of Array 
console.log(Object.keys(myobj))     // Here output is in the form of Array



/*  Entries */
console.log(Object.entries(myobj))    // makes every 'kay:value' pair  into seperate Arrays.


/*   Includes  */

console.log(myobj.hasOwnProperty('name'))







