console.log("I'm tiny Rick!");

function fib() {
  // Some variables here
  var x = 0;
  var y = 1;

  function nacci() {
    // do something to those variables here
    console.log( y)
    var temp1 = x + y;
    x = y;
    y = temp1;
  }
  return nacci
}
var fibCounter = fib();

fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
