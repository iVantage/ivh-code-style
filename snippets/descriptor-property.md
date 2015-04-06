# Property and Attribute Descriptors

Externally visible properties, descriptors, process/interprocess variables
should have their own DocBlocks.

In the case of 4D applications, you should only document process/interprocess
variables if you are creating them. When just reading/modifying/depending on
these abominations you should add notes about side effects and preconditions in
your page or method header.

Try this on for size:

```
/**
 * {{SUMMARY}}
 * 
 * {{DESCRIPTION}}
 */
```

e.g.

```
/**
 * Tracks whether or not this is a process variable
 * 
 * If this variable is a process variable it will be set to True, other wise it
 * will be set to False.
 */
C_BOOLEAN(is_process_variable)
is_process_variable := True
```

Where appropriate you should use the `@access` tag to distinguish between
public, private, and protected properties.
