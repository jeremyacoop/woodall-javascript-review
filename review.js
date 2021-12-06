/*
Jargon!
. - dot
()  - parentheses, parens
[]  - square braces/brackets
{}  - square braces/brackets
<   - less than, bird, etc
>   - greater than, gator
/   - slash, forward slash, whack
\   - backslash
!   - not, bang
#   - hash, pound, octothorp
*   - star, asterisk, splat
||  - or, pipes
$   - bling, cash money, jQuery
NaN - not a number, bread
*/

/**
 * Primitive Data Types
 * 
 * Strings      'taco'
 * Number       18
 * Boolean      true / false
 * Undefined    undefined
 * Null         null            -javascript uses both null & undefined, which is unusual
 * 
 * Complex Data Types
 * 
 * Arrays       [1, 2, 3]
 * Objects      (firstName: "Biff")
 * 
 */

let nothing = null;

/* Always use camelCase (some languages like Python use snake_case, html standard is kebebob-case */
let firstName = "Biff";

/* PascalCase (UpperCamelCase), SCREAMING_CASE */

let thing = {
    x: 'onething',
    y: 'schwartz',
    z: 32
}

/* Better a long rambling function name than a generic one */

/** 
 * Expressions
 * 
 * Operators
 */

// An expression evaluates to a single value
7 + 3; // 10
sum(7, 3);

let aMediumSizeNumber = 7 + 3;
let anotherNumber = sum(7, 3);

console.log('my fave number is ', anotherNumber);
console.log('my fave number is ', sum(7, 3));// same thing

anotherNumber++;// increments by one (increment operator)

anotherNumber += 10;// 22
anotherNumber = anotherNumber + 10;// sameziez

let name = 'Biff';
//name += 'Schwartz';
//name = name + 'Schwartz';

// THE TRICKY PLUS OPERATOR
// Does two things:
// - Adds 2 numbers together
// - concatenates strings together

// plus operator does automatic type conversion from number to string if both types are being joined
// minus does the opposite; only math, so autoconverts string-numerals to numbers when used with both types
// a string w/alphabetic chars, if + or - a number, will return NaN

// Anti-values
// Values that are not values
NaN // not a number
    // usually a type coercion error, e.g. Number('abc)
null;
undefined;// both mean nothing, but function with no return returns undefined
