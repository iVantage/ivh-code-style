# Page Headers

Use page headers for general notes about a file or library. Note that page level
DocBlocks must either include the `@package`/`@subpackage` tag or be immediately
followed by another DocBlock. They must also be the first DocBlock of the file.

At a minimum iVantage page headers should include copyright information and a
summary line.

Try to always include the `@package` tag to avoid inadvertently assigning your
DocBlock to something other than the entire page.

Here is a pretty standard (minimal) iVantage page header template.

```
/**
 * {{SUMMARY}}
 *
 * {{DESCRIPTION}}
 *
 * @package {{PACKAGE}}
 * @copyright {{YEAR}} iVantage Health Analytics, Inc.
 */
```

e.g.

```
/**
 * Explain page header DocBlocks
 * 
 * If I needed to tell peeps more info about page header DocBlocks I would do
 * that right here, in the description.
 * 
 * Luckily the summary line is pretty self explanatory so I do not really need
 * to have that long of a description, which is nice because these things can
 * tend to be wordy for no real purpose.
 * 
 * @package headers
 * @copyright 2013 iVantage Health Analytics, Inc.
*/
```

If you are super responsible and want to let others know when your library
became available, feel free to take on the `@since` tag. Note that this should
be a version number, not a date.

Libraries that need some love should include the `@todo` tag in their header
followed by a brief description of what needs to be done.

Lastly, if down the road we decide that your code is kinda sucky we may make use
of the `@deprecated` tag. If you do know that a particular library is no longer
intended for use you should probably slap this tag on there... or just delete
it.
