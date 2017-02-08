// Take a look at the documentation for the Date() built in object right hurr:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var fiveSec = moment().add(5, 'seconds');
var fifteenSec = moment().add(15, 'seconds');

// var now = moment();
var vacationCountdownDate = moment("04-20-2017", "MM-DD-YYYY");
var vacationCountdownDiff = moment().diff(vacationCountdownDate, 'seconds');

var firstSurpriseDate = moment("02-12-2017", "MM-DD-YYYY");
var firstSurpriseDiff = moment().diff(firstSurpriseDate, 'seconds');

var secondSurpriseDate = moment("02-19-2017", "MM-DD-YYYY");
var secondSurpriseDiff = moment().diff(secondSurpriseDate, 'seconds');

var thirdSurpriseDate = moment("02-26-2017", "MM-DD-YYYY");
var thirdSurpriseDiff = moment().diff(thirdSurpriseDate, 'seconds');

var fourthSurpriseDate = moment("03-05-2017", "MM-DD-YYYY");
var fourthSurpriseDiff = moment().diff(fourthSurpriseDate, 'seconds');

var fifthSurpriseDate = moment("03-12-2017", "MM-DD-YYYY");
var fifthSurpriseDiff = moment().diff(fifthSurpriseDate, 'seconds');

var sixthSurpriseDate = moment("03-19-2017", "MM-DD-YYYY");
var sixthSurpriseDiff = moment().diff(sixthSurpriseDate, 'seconds');

var seventhSurpriseDate = moment("03-26-2017", "MM-DD-YYYY");
var seventhSurpriseDiff = moment().diff(seventhSurpriseDate, 'seconds');

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
  figureDate(vacationCountdownDate, '#vacationCountdown')
  figureDate(firstSurpriseDate, '#firstSurprise');
  figureDate(secondSurpriseDate, '#secondSurprise');
  figureDate(thirdSurpriseDate, '#thirdSurprise');
  figureDate(fourthSurpriseDate, '#fourthSurprise');
  figureDate(fifthSurpriseDate, '#fifthSurprise');
  figureDate(sixthSurpriseDate, '#sixthSurprise');
  figureDate(seventhSurpriseDate, '#seventhSurprise');
}, 1000);

var clock0 = $('#vacationCountdown .visible').FlipClock(Math.abs(vacationCountdownDiff), {
  countdown: true,
  clockFace: 'DailyCounter'
})

var clock1 = $('#firstSurprise .visible').FlipClock(Math.abs(firstSurpriseDiff), {
  countdown: true,
  clockFace: 'DailyCounter'
})

var clock2 = $('#secondSurprise .visible').FlipClock(Math.abs(secondSurpriseDiff), {
  countdown: true,
  clockFace: 'DailyCounter'
})

var clock3 = $('#thirdSurprise .visible').FlipClock(Math.abs(thirdSurpriseDiff), {
  countdown: true,
  clockFace: 'DailyCounter'
})

var clock4 = $('#fourthSurprise .visible').FlipClock(Math.abs(fourthSurpriseDiff), {
  countdown: true,
  clockFace: 'DailyCounter'
})

var clock5 = $('#fifthSurprise .visible').FlipClock(Math.abs(fifthSurpriseDiff), {
  countdown: true,
  clockFace: 'DailyCounter'
})

var clock6 = $('#sixthSurprise .visible').FlipClock(Math.abs(sixthSurpriseDiff), {
  countdown: true,
  clockFace: 'DailyCounter'
})

var clock7 = $('#seventhSurprise .visible').FlipClock(Math.abs(seventhSurpriseDiff), {
  countdown: true,
  clockFace: 'DailyCounter'
})
