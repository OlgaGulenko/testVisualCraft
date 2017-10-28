function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var a=10;
    var b=1;
    // var c=100;
    // var k=10;
    // var i=1;
    var ctx = canvas.getContext('2d');
    ctx.strokeRect(10,10,500,500);
    // console.log(ctx);
    delay = 100,
    i = 0,
    startTimer = function(q){
      // console.log(ctx);
      var qw=499;
      var tt=249.5;
      // if ((q > 0 && ))
      if(i<qw && a<tt && b<tt){
        a++;
        b++;
        // c++;
        // i++;
        q++;
      } else{
        clearInterval(timer);

        ctx.clearRect (10, 10, 500, 500)
      }
      i++;
      console.log(i);
    }
    timer = setInterval(function (){

      startTimer(ctx.fillRect(a,a,b,b),
                )
    }, delay)
  }
}

// var a=ctx.fillRect(0,0,0,0);
// for (a = 0; a<500; a++){
//   return(setTimeout(ctx.fillRect(10,10,10,10), 10000))}
//  var a=ctx.fillRect(10,10,10,10);
//  for (a = 0; a<500; a++){
//    setInterval(function() {
//
//    }, 10000);
// }
// function fon() {
//   var i = ctx.fillRect(10,10,10,10);
//   var timerId = setInterval(function() {
//     console.log(i);
//     if (i == 500) clearInterval(timerId);
//     else {
//       i++;
//     }
//   }, 1000);
//   return i;
// }

//  for (a = 0; a<500; a++){
//   setInterval(ctx.fillRect(10,10,10,10),10000)

  // var timerId = setInterval(function() {
  //   var a=ctx.fillRect(0,0,0,0)
  //   for (a = 0; a<500; a++){
  //     ctx.fillRect(10,10,10,10)
  //   }
  // }, 20000);
  // //
  // // через 5 сек остановить повторы
  // setTimeout(function() {
  //   clearInterval(timerId);
  //
  // }, 5000);

  // }
  // do {
  //   setTimeout(ctx.fillRect(10,10,10,10), 1000)
  // } while (a = 0; a<500; a++);

// requestAnimationFrame(ctx.fillRect(10,10,10,10))

    // setInterval(function(){
    //   var a=ctx.fillRect(0,0,0,0);
    //     if(a = 0; a<500; a++){
    //         ctx.fillRect(10,10,10,10);
    //         leftOrRight = "right";
    //     }else{
    //         ctx.clearRect(10,10,10,10);
    //         leftOrRight = "left";
    //     }
    // }, 1000);
