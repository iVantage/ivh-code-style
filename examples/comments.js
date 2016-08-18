/*
 * Block comments can often have unexpected or annoying consequences and should
 * mostly be used as temporary means of excluding large chunks of code.
 * /

var foo = /blargus.*/
var snap = 'snap'
var crackle = 'crackle'
var pop = 'pop'

/*
 * I hope I realize that regular expression above got swallowed by comments!
 */

// ...

// Also, it's awkward to quickly comment in/out large sections

var foo, bar

foo = 'foo'

/* Try to comment out everything above and below this line with block
 * comments... you can't do it easily which is a pretty common task when you're
 * trying to narrow down a buggy section of code. */

bar = 'bar'

// ...

// Older version of the code should be tucked away safely by our version control
// system. There's no need to save old copies of code in comments.

// var funOld = function() {
//   // do some stuff
// }

var funNew = function() {
  // do the same stuff as funOld with moar cowbell!
}
