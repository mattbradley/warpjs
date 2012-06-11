Warp.js
=============

Warp.js replaces your JavaScript `Date` object to give you better control over
what is reported as the current date and time. Instead of `new Date()` giving
you the current, lowsy, depressing date and time, you can set the JavaScript
clock to whatever date and time you wish! You can also specify how fast the
clock ticks, making time on your website go by super-fast or extra-slow. You
can even make time go backwards! Warp.js is great for testing front-end
timestamps, confusing your visitors, or reliving your website's heyday in the
late 1990s.

Usage
-----

Warp.js adds a `Date.warp` object that includes functions to control the
JavaScript clock. These functions allow you to set the time and date of the
clock and control how fast the clock ticks. Also, the `Date.now()` function and
`new Date()` constructor are replaced. These will now return a timestamp or
`Date` object based on the time and date that was set and the clock tick speed.

License
-------

Copyright (c) 2012 Matt Bradley

This software is freely distributable under the terms of the
[MIT license](http://www.opensource.org/licenses/MIT).
