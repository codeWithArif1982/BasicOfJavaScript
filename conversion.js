// In JavaScript, parseInt, parseFloat, and toFixed are all methods that can be used to manipulate numbers.

/** parseInt is a function that converts a string to an integer.It takes two arguments: 
  *the string to convert and the radix, which is the base number system to use(typically either 10 for decimal or 16 for hexadecimal).
  *If the radix is not specified, parseInt assumes base 10.
**/

// parseFloat is similar to parseInt, but it converts a string to a floating - point number.It only takes one argument, the string to convert.
const floatString = "3.14";
const floatNum = parseFloat(floatString); 
console.log(floatNum); // 3.14

/** toFixed is a method that rounds a number to a specified number of decimal places and returns a string representation of the result.
  *It takes one argument, the number of decimal places to round to.
**/

const num = 3.14159265359;
const roundedNum = num.toFixed(2);
console.log(roundNum) // "3.14"
console.log(num.toFixed(4)); // "3.1415"
