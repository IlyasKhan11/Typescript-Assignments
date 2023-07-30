// Tests for equality and inequality with strings
var name1 = 'John';
var name2 = 'Jane';
console.log("Is name1 == 'John'? I predict True.");
console.log(name1 == 'John');
console.log("Is name1 != name2? I predict True.");
console.log(name1 != name2);
console.log("Is name1 == 'Jane'? I predict False.");
console.log(name1 == 'Jane');
console.log("Is name1 != 'John'? I predict False.");
console.log(name1 != 'John');
// Tests using the lowercase function
var word1 = 'HELLO';
var word2 = 'hello';
console.log("Is word1 lowercase 'hello'? I predict False.");
console.log(word1.toLowerCase() == 'hello');
console.log("Is word2 lowercase 'hello'? I predict True.");
console.log(word2.toLowerCase() == 'hello');
// Numerical tests
var num1 = 20;
var num2 = 30;
console.log("Is num1 == 20? I predict True.");
console.log(num1 == 20);
console.log("Is num1 != 25? I predict True.");
console.log(num1 != 25);
console.log("Is num1 > 10? I predict True.");
console.log(num1 > 10);
console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2);
console.log("Is num1 >= 20? I predict True.");
console.log(num1 >= 20);
console.log("Is num1 <= 25? I predict True.");
console.log(num1 <= 25);
// Tests using "and" and "or" operators
var a = true;
var b = false;
console.log("Is a true and b false? I predict True.");
console.log(a && b);
console.log("Is a true and b true? I predict False.");
console.log(a && !b);
console.log("Is a true or b false? I predict True.");
console.log(a || b);
console.log("Is a false or b false? I predict False.");
console.log(!a || !b);
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape'));
// Test whether an item is not in an array
var colors = ['red', 'green', 'blue'];
console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes('yellow'));
console.log("Is 'blue' not in the colors array? I predict False.");
console.log(!colors.includes('blue'));
