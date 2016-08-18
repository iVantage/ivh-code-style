// This file demonstrates various style aspects that should be observed when
// coding in JavaScript. In projects where it is currently enabled, JSHint and
// JSCS will enforce these rules.

// Always use curly braces for code blocks!

// GOOD
if(foobar) {
  console.log('foo!');
}

// BAD
if(foobar) console.log('foo');


// Use camelCase for variable names,
// UPPER_CASE with underscores for constants

// GOOD
var myCoolVariable;
var MY_CONSTANT = 1;

// BAD
var my_coolvariable;
var Myconstant = 1;


// Always use singles quotes instead of double quotes
// for strings

// GOOD
var foo = 'bar';

// BAD
var foo = "bar";

// Never split a string on two lines. Use two strings
// and concatenate them if the string is too long.

// GOOD
var x = 'line one ' +
    'line two';

// BAD
var x = 'line one \
   line two';

// Cuddle your curly braces! Structure if/else blocks such that else is on the
// same line as the closing curly brace of the if

// GOOD
if(a === 1) {
  a = 2;
} else {
  a = 3;
}

// BAD
if(a === 1)
{
  a = 2;
}
else
{
  a = 3;
}

// Pad spaces around binary operators and in ternary
// expressions. E.g. +, =, >, etc.
//
// Use spaces:
// - before block statements
// - before opening curly brace of a function
// - in for statements
//
// Don't use spaces:
// - to pad the front and end of parentheses or array
//   brackets
//
// Overall, just make sure your code doesn't look too
// squished.

// GOOD
var foo = 1;
foo = 1 + 2;
foo = bar ? 3 : 4;

var funky = function(a, b) {
  for(var i = 0; i < 3; i++) {
    a = a *2;
  }
};

var baz = [1, 2, 3];

// BAD
var foo=1;
foo=1+2;
foo = bar?3:4;

var funky = function( a,b ){
  for(var i=0;i<3;i++){
    a = a *2;
  }
};

var baz = [ 1, 2, 3 ];

// Whitespace considerations
// - Use spaces instead of tabs
// - Don't leave trailing whitespace on the end of a line

