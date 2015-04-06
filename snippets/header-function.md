# Function and Method Headers

Functions and methods that are part of a public API should at a minimum have
their parameters and return types documented. If your code has side effects you
should probably refactor it... I mean you should be sure to document side
effects and preconditions in the description section.

Do not worry about repeating your function/method name in the DocBlock itself.

Here is a template for ya:

```
/**
 * {{SUMMARY}}
 * 
 * {{DESCRIPTION}}
 * 
 * @param {{{TYPES}}} {{NAME}} {{USAGE}}
 * @return {{{TYPE}}} {{USAGE}}
 */
```

e.g.

```
/**
 * Build a bar of foo
 * 
 * @param {Object|Array} foo The foo to build from 
 * @return {Object} The bar of foo
 */
exports.foobar = function(foo) { ... };
```

Where appropriate you should use the `@access` tag to distinguish between
public, private, and protected properties.

Functions or methods that are in need of some love should use the `@todo` tag in
their header, followed by a brief description of the work that needs to be done.
