// Code your solutions in this file

// for ([initialization]); [condition]; [iteration]) {
//     [loop body]
// }
// initialization: typically where the counter is set (i = 0)
// [condition]: if true, loop continues; if false, loop stops
// [iteration]: statement at the end of every iteration (typically tics the counter up or down)
// [loop body]: code that runs on each loop

function writeCards(names, event) {
    let namedGreetings = []
    for ( let i = 0; i < names.length; i++ ) {
        namedGreetings.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
    }
    return namedGreetings
  }
  
  function countDown(number) {
      while (number > 0) {
          console.log(number); 
          number--
      }
      console.log(number)
  }

