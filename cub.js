function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var a=1;
    var b=1;
    var isUnfold = true;
    var ctx = canvas.getContext('2d');
    ctx.strokeRect(10,10,500,500);
    delay = 5,
    i = 0,
    startTimer = function(q){
      var qw=500;
      var tt=500;

      if (a == 1 && b == 1){
        isUnfold = true;
      }else if (a == tt || b == tt){
      	isUnfold = false;
      }

      if(isUnfold){
        a++;
        b++;
      } else{
        	a--;
        	b--;
      }
    }
    timer = setInterval(function (){
      ctx.clearRect(0,0,520,520);
      startTimer(ctx.fillRect(10,10,a,b));
     },
    delay)
  }
}
