// Variables and constants
// note :----Varibale names are case sencitive.
const  accountId=1432;          //////Here 'const' is the keyword,'accountId' is the variable name and it does't change if we assign a new value in future.
let accountEmail= 'mail@1234';
var accountNumber='54321';     //Perfer not to use var while assigning variable names, becoz of issue in block scope and functional scope
accountCity='hyderabad';      // javascript is forgiving but, don't use this type of variable naming(with out a keyword)


let accountCountry;            // Here we can just name the variable without giving the variable value to it.

// These are the sample results if we chnage the variable values
// accountId=432                // not allowed
// accountEmail='234@mail'     // This is allowed and value is also chnaged 
// accountNumber='09876'      //This is allowed but, it's not advisable to use.
// accountCity='bangalore'   // This  is allowed but , it's the best practice to use this way to either to name a variable and change a varibale name.
 
console.log(accountCity);
console.table([accountId,accountEmail,accountNumber,accountCity,accountCountry]) // We can print multiple number of outputs in a table format.
