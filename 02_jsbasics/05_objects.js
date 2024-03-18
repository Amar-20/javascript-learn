  /* De-Structuring of objects */

  const course={
    coursename:'Web dev',
    cost:1000,
    coursementor:'hitesh'

  } 

// const { coursementor} =course         /* This is called de_strructuing the object */
// console.log(coursementor)


const {coursementor:mentor}=course
console.log(mentor)                     /* This is also  called as de-structuing of object */




/* JSON API intro */

{
  "amar":"name"     /* Json format.  JSON format can also be array of objects. */
}