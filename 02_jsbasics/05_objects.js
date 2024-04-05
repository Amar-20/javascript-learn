  /* De-Structuring of objects */

  const course={
    coursename:'Web dev',
    cost:1000,
    coursementor:'hitesh'

  } 

// const { coursementor} =course         /* This is called de_strructuing the object */
// console.log(coursementor)


const {coursementor:mentor}=course
console.log(mentor)                     /* This is also  called as de-structuring of object */




/*--------------------------------------------------------------- Array de-Structuring------------------------------------------- */
 ```const colors = ['red', 'green', 'blue'];
 const [firstColor, secondcolor, thirdColor] = colors;

console.log(firstColor);  // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor);  // Output: blue```

/*-----------------------------------------------------------------------------------------------------------------------------*/
```const numbers = [1, 2, 3, 4, 5];

const [firstNumber, , thirdNumber] = numbers;

console.log(firstNumber);  // Output: 1
console.log(thirdNumber);  // Output: 3```


/*-------------------------- You can use the rest parameter syntax (...) to collect remaining array elements into a separate array:------------------------*/
```const numbers = [1, 2, 3, 4, 5];

const [firstNumber, ...remainingNumbers] = numbers;

console.log(firstNumber);       // Output: 1
console.log(remainingNumbers);  // Output: [2, 3, 4, 5]
```


/*--------------------------------------------------------------------Object de-Structuring ---------------------------------------------*/

```const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name, age, city } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30
console.log(city); // Output: New York
```
/*-----------------------You can also assign extracted properties to variables with different names:----------------------*/

```const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name: personName, age: personAge, city: personCity } = person;

console.log(personName); // Output: John
console.log(personAge);  // Output: 30
console.log(personCity); // Output: New York
```
/*--------------------------You can use the rest pattern (...) to capture remaining properties into a separate object:--------------------------*/

```const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  country: 'USA'
};

const { name, age, ...rest } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30
console.log(rest); // Output: { city: 'New York', country: 'USA' }
```

/* JSON API intro */

{
  "amar":"name"     /* Json format.  JSON format can also be array of objects. */
}
