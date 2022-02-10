var prevTime, stopwatchInterval, elapsedTime = 0;
var start = document.getElementById("startButton");
var stop = document.getElementById("stopButton");
var reset = document.getElementById("resetButton");
var timehtml = document.getElementById("time"); 
var updateTime = function () {
  var tempTime = elapsedTime;
  var milliseconds = tempTime % 1000;
  tempTime = Math.floor(tempTime / 1000);
  var seconds = tempTime % 60;
  tempTime = Math.floor(tempTime / 60);
  var minutes = tempTime % 60;
  tempTime = Math.floor(tempTime / 60);
  var hours = tempTime % 60;
  
  var time = hours + " : " + minutes + " : " + seconds + "." + milliseconds;
  
  timehtml.innerHTML = time;
};

start.onclick(function () {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(function () {
      if (!prevTime) {
        prevTime = Date.now();
      }
      
      elapsedTime += Date.now() - prevTime;
      prevTime = Date.now();
      
      updateTime();
    }, 50);
  }
});

stop.onclick(function () {
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  }
  prevTime = null;
});

reset.onclick(function () {
  stop.onclick();
  elapsedTime = 0;
  updateTime();
});

$(document).ready(function () {
  updateTime();
});