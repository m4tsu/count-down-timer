window.onload = function(){
    var inputMin = document.getElementById("input_min");
    var inputSec = document.getElementById("input_sec");
    var set = document.getElementById("set");
    
    var defaultTime = 180
    var time = defaultTime;
    var counter;
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");
  
    set.onclick = function(){
      var setMin = Number(inputMin.value);
      var setSec = Number(inputSec.value);
      
      min.innerHTML = setMin;
      sec.innerHTML = setSec;

      defaultTime = setMin * 60 + setSec;
      time = defaultTime;
      
      //sample.innerHTML = setSec + setMin*60;　デバッグ用
    }
    
    
    start.onclick = function() {
      toggle();
      counter = setInterval( count, 1000 );
    }
  
    stop.onclick = function() {
      toggle();
      clearInterval( counter );
    }
  
    reset.onclick = function() {
      time = defaultTime;
      sec.innerHTML = time % 60;
      min.innerHTML = Math.floor( time / 60 );
    }
  
    function toggle() {
      if( start.disabled ) {
        start.disabled = false;
        stop.disabled = true;
      } else {
        start.disabled = true
        stop.disabled = false;
      }
    }
  
    function count() {
      if( time === 0 ) {
        sec.innerHTML = 0;
        min.innerHTML = 0;
        toggle();
        alert(`${Math.floor( defaultTime / 60 )}分${defaultTime % 60}秒経過しました`);
        clearInterval( counter );
      } else {
        time -= 1;
        sec.innerHTML = time % 60;
        min.innerHTML = Math.floor( time / 60 );
      }
    }
  
  }