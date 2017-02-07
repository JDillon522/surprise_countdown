// Take a look at the documentation for the Date() built in object right hurr:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var fiveSec = moment().add(5, 'seconds');
var fifteenSec = moment().add(15, 'seconds');
var now = moment();
// Replace the '12-25-1995' with a date matching MM-DD-YYYY. Use that date instead of the
// fiveSec or fifteenSec type tools
var firstSurpriseDate = moment("12-25-1995", "MM-DD-YYYY");

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


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
