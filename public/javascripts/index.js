// Take a look at the documentation for the Date() built in object right hurr:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var fiveSec = moment().add(5, 'seconds');
var fifteenSec = moment().add(15, 'seconds');
var now = moment();


var figureDate = function(bench, selector) {
  if (moment() >= bench) {
    $(selector + ' .visible').hide();
    $(selector + ' .hidden').show();
  } else {
    console.log('WAITING on ' + selector);
  }
}

// setInterval(function, timeInMilliseconds) will execute the <function> every <timeInMilliseconds>
setInterval(function() {
  figureDate(fiveSec, '#firstSurprise');
  figureDate(fifteenSec, '#secondSurprise');
}, 1000);
