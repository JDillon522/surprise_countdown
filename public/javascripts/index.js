// Take a look at the documentation for the Date() built in object right hurr:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var fiveSec = moment().add(5, 'seconds');
var fifteenSec = moment().add(15, 'seconds');

// var now = moment();
var firstSurpriseDate = moment("03-15-2017", "MM-DD-YYYY");
var firstSurpriseDiff = moment().diff(fiveSec, 'seconds');

var secondSurpriseDate = moment("03-18-2017", "MM-DD-YYYY");
var secondSurpriseDiff = moment().diff(fifteenSec, 'seconds');

var thirdSurpriseDate = moment("04-20-2017", "MM-DD-YYYY");
var thirdSurpriseDiff = moment().diff(thirdSurpriseDate, 'seconds');

// Replace the '12-25-1995' with a date matching MM-DD-YYYY. Use that date instead of the
// fiveSec or fifteenSec type tools
// var firstSurpriseDate = moment("03-15-2017", "MM-DD-YYYY");

var figureDate = function(bench, selector) {
  if (moment() >= bench) {
    $(selector + ' .visible').hide();
    $(selector + ' .hidden').show();
  } else {
    // console.log('WAITING on ' + selector);
  }
}

// setInterval(function, timeInMilliseconds) will execute the <function> every <timeInMilliseconds>
setInterval(function() {
  figureDate(fiveSec, '#firstSurprise');
  figureDate(fifteenSec, '#secondSurprise');
  figureDate(thirdSurpriseDate, '#thirdSurprise')
}, 1000);


var clock1 = $('#secondSurprise .visible').FlipClock(Math.abs(secondSurpriseDiff), {
  countdown: true,
  clockFace: 'DailyCounter'
})
var clock2 = $('#firstSurprise .visible').FlipClock(Math.abs(firstSurpriseDiff), {
  countdown: true,
  clockFace: 'DailyCounter'
})

var clock3 = $('#thirdSurprise .visible').FlipClock(Math.abs(thirdSurpriseDiff), {
  countdown: true,
  clockFace: 'DailyCounter'
})
