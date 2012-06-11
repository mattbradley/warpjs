(function() {
  var factor = 1,
      date = Date,
      now = Date.now || function() { return +new Date; },
      then = now(),
      when = then,

  warpTimestamp = function() {
    var rightNow = now();
    then += (rightNow - when) * factor;
    when = rightNow;
    return then;
  },

  warped = function() {
    if (!(this instanceof Date))
      return date();

    var args = arguments;
    if (args[0] === true)
      return new date;

    switch (args.length) {
      case 0: return new date(warpTimestamp());
      case 1: return new date(args[0]);
      case 2: return new date(args[0], args[1]);
      case 3: return new date(args[0], args[1], args[2]);
      case 4: return new date(args[0], args[1], args[2], args[3]);
      case 5: return new date(args[0], args[1], args[2], args[3], args[4]);
      default: return new date(args[0], args[1], args[2], args[3], args[4], args[5]);
    }
  };

  warped.now = function(unwarped) {
    return unwarped? now() : warpTimestamp();
  };

  warped.UTC = Date.UTC;
  warped.parse = Date.parse;

  warped.warp = Date.warp = {
    on: function() {
      Date = warped;
      warpTimestamp();
    },
    off: function() {
      Date = date;
    },
    setFactor: function(warpFactor) {
      factor = warpFactor;
      warpTimestamp();
    },
    reset: function() {
      factor = 1;
      when = then = now();
    },
    setDate: function(newDate) {
      if (typeof newDate == 'number')
        then = newDate;
      else if (newDate instanceof date)
        then = +newDate;
    },
    dateObject: Date
  };

  Date = warped;
})();
