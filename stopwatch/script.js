    //Get IDs from Index.html
    const timer = document.getElementById('stopwatch');
    const start = document.getElementById('startbutton');
    const stop = document.getElementById('pausebutton');
    const reset = document.getElementById('resetbutton'); 
    //Define Variables
    var dy = 0, hr = 0, min = 0, sec = 0, stoptime = true;
    //Start the stopwatch
    function startStopwatch() {
      if (stoptime == true) {
          stoptime = false;
          stopwatchCycle();
      }
    };
    //Stop the stopwatch
    function stopStopwatch() {
      if (stoptime == false) {
          stoptime = true;
      }
    };
    //Stopwatch Cycle
    function stopwatchCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec += 1;
        //Time calculations
        if (sec == 60) {
            min += 1;
            sec = 0;
        };
        if (min == 60) {
            hr += 1;
            min = 0;
            sec = 0;
        };
        if (hr == 24) {
            dy += 1;
            hr = 0;
            min = 0;
            sec = 0;
        }/*
        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        };
        if (min < 10 || min == 0) {
            min = '0' + min;
        };
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        };
        if (dy < 10 || hr == 0) {
            dy = '0' + dy;
        };*/
        //Set the timeout and change the timer by every second
        timer.getElementsByClassName('days')[0].innerHTML = dy;
        timer.getElementsByClassName('hours')[0].innerHTML = hr;
        timer.getElementsByClassName('minutes')[0].innerHTML = min;
        timer.getElementsByClassName('seconds')[0].innerHTML = sec; 
        setTimeout("stopwatchCycle()", 1000);
    };
   }
//Reset the stopwatch
function resetStopwatch() {
    timer.getElementsByClassName('days')[0].innerHTML = '0';
    timer.getElementsByClassName('hours')[0].innerHTML = '0';
    timer.getElementsByClassName('minutes')[0].innerHTML = '0';
    timer.getElementsByClassName('seconds')[0].innerHTML = '0';
    stoptime = true;
    sec = 0; min = 0; hr = 0; dy = 0;
};
//Make the two buttons invisible
stop.style.visibility = 'hidden';
reset.style.visibility = 'hidden';
//Onclicks
start.onclick = function() {
  stop.style.visibility = 'visible';
  reset.style.visibility = 'visible';
  start.style.visibility = 'hidden';
  startStopwatch();
};
stop.onclick = function() {
  if (start.innerHTML === 'Start') {start.innerHTML = 'Resume'};
  stop.style.visibility = 'hidden';
  start.style.visibility = 'visible';
  stopStopwatch();
};
reset.onclick = function() {
  if (start.innerHTML === 'Resume') {start.innerHTML = 'Start'}; 
  stop.style.visibility = 'hidden';
  reset.style.visibility = 'hidden';
  start.style.visibility = 'visible';
  resetStopwatch();
}; 
/*
function randomGradient() {
  function createGradient(dir, hex, hex2) {
    if (dir === 't') {'top'};
    if (dir === 'r') {'right'};
    if (dir === 'b') {'bottom'};
    if (dir === 'l') {'left'};
    if (dir === 'tr') {'top right'};
    if (dir === 'tl') {'top left'};
    if (dir === 'br') {'bottom right'};
    if (dir === 'bl') {'bottom left'};
    'linear-gradient(to ' + dir + ', #' + hex + ', #' + hex2 + ');'
  }
  let g1 = createGradient('r', 'ffafbd', 'ffc3a0');
  let ids = {
    day: document.getElementsByClassName('day'),
    hour: document.getElementsByClassName('hour'),
    min: document.getElementsByClassName('minute'),
    sec: document.getElementsByClassName('second')
  }
  ids.day[0].style.background = g1;
}*/