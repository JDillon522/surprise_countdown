// Take a look at the documentation for the Date() built in object right hurr:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var tenSec = moment().second(10);
var now = moment();

$('#one').html(tenSec);

var showshit = function(hide, show){
  $(hide).hide()
  $(show).show()
}
showshit('#two','#one')

var dateconfig = function(gdate) {
  if(today >= gdate) {

  }else {

  }
}

var figureDate = function(now, bench) {

  if (now < bench) {
    console.log('GREATER')
  } else {
    console.log('WAITING')
  }
}

setInterval(function() {
  // figureDate(now, tenSec)
  console.log(tenSec)
  console.log(now)
}, 1000);
