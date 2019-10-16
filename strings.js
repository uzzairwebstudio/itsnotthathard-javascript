

let first_name = "Uzzair";
let last_name = "Baharudin";

/**
 * Concatenate 
 */
console.log(first_name + ' ' + last_name);
// Output: Uzzair Baharudin

/**
 * ES6 String Interpolation
 */

console.log(`${first_name} ${last_name}`);
// Output: Uzzair Baharudin

/**
 * String related Methods. What is a Method? A Method is basically a function. You insert something, it output something.
 * 
 */

// .length Returns the length of the string
console.log(`${first_name} ${last_name}`.length);
// Output: 16

// .trim() Remove whitespace from both sides of string
console.log(`         ${first_name} ${last_name}           `.trim());
// Output: Uzzair Baharudin

// .toUpperCase Returns the string in uppercase
console.log(`${first_name} ${last_name}`.toUpperCase());
// Output: UZZAIR BAHARUDIN

// .toLowerCase Returns the string in lowercase
console.log(`${first_name} ${last_name}`.toLowerCase());
// Output: uzzair baharudin

// .split() Split a string into an array of substrings
console.log(`${first_name} ${last_name}`.split(""));
// Output: uzzair baharudin