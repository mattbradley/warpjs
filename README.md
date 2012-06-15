Warp.js
=======

Warp.js improves your JavaScript `Date` object allowing you to change the
current datetime and control the tick speed. Instead of `new Date()` giving you
the current, lousy, depressing date and time, you can set the JavaScript clock
to whatever date and time you wish! You can also specify how fast the clock
ticks, making time on your website go by super-fast or extra-slow. You can even
make time go backwards! Warp.js is great for testing front-end timestamps,
confusing your visitors, or reliving your website's heyday in the late 1990s.

Usage
-----

Warp.js adds a `Date.warp` object that includes functions to control the
JavaScript clock. These functions allow you to set the time and date of the
clock and control how fast the clock ticks. Also, the `Date.now()` function and
`new Date()` constructor are replaced. These will now return a *warped*
timestamp or `Date` object based on the clock tick speed and the set datetime.

### `Date.now([unwarped])`

This function returns the warped integer timestamp of the clock. This is the
number of milliseconds since the Unix epoch. Setting the optional `unwarped`
argument to `true` returns the current *unwarped* timestamp of your computer's
clock.

### `new Date([...])` constructor

The replaced `Date` constructor can be invoked the [same ways]
(http://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date)
that the actual constructor can be invoked:

    new Date()
    new Date(dateObject)
    new Date(millisecond)
    new Date(dateString)
    new Date(year, month, day [, hour, minute, second, millisecond ])

Instantiating a new `Date` object with the default, zero-argument constructor
will return a `Date` object that represents the warped date and time of the
clock. The other three constructors work as expected: they return a `Date`
object that represents the time based on the supplied arguments.

Similar to the `Date.now()` function, if the first argument is `true`, the
returned `Date` object will represent the current *unwarped* date and time.

### `Date()`

The `Date()` function called without the `new` keyword will not create a new
`Date` object, but will return a string representation of the current warped
datetime. This functionality is similar to the standard `Date` object; however,
the warped `Date()` and unwarped `Date()` may return slightly different
formatted strings based on how the browser implements the `Date.toString()`
method.

### `Date.warp.clock([...])`

The `clock()` function gets or sets the warped date and time of the clock.
Sending no arguments will return the current *warped* `Date` object. This
function accepts the same arguments as the `new Date()` constructor and will
set the warped clock based on `Date` object created with those arguments. A
single argument of `true` will set the clock to the actual unwarped datetime.

### `Date.warp.speed([speed])`

The `speed()` function gets or sets the tick speed of the warped clock. Sending
no arguments will return the current tick speed. The `speed` argument can be
thought of as a multiplicative factor: setting the speed to 2 will make the
clock tick at 2 seconds per second -- or twice as fast. Negative speeds make
the clock tick backwards.

### `Date.warp.reset()`

The `reset()` function sets the clock tick speed back to 1 and resets the clock
to the current *unwarped* date and time.

### `Date.warp.on()`, `Date.warp.off()`

The `on()` and `off()` functions, surprisingly, turn the clock warping on and
off. Turning the warping off with `Date.warp.off()` will not reset or pause the
warped clock; it will simply redefine the original `Date` object, allowing it
to report actual *unwarped* times. When `Date.warp.on()` is called, the warped
`Date` object is replaced, and it will report *warped* times at the previously
set speed from the previous warped datetime as if warping had not been turned
off at all.

### `Date.warp.date`

The `date` property will always point to the unwarped `Date` object. This is
useful for when you need to get the current *unwarped* time without having to
fool with turning the warping on and off.

License
-------

Copyright (c) 2012 Matt Bradley

This software is freely distributable under the terms of the
[MIT license](http://www.opensource.org/licenses/MIT).
