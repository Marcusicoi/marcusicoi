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
  startStopwatch(); randomGradient();
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

function randomGradient(classname) {
 let gradients = ['linear-gradient(to right, #ffafbd, #ffc3a0)', 
                  'linear-gradient(to right, #2193b0, #6dd5ed)',
                  'linear-gradient(to right, #cc2b5e, #753a88)', 
                  'linear-gradient(to right, #ee9ca7, #ffdde1)',
                  'linear-gradient(to right, #42275a, #734b6d)', 
                  'linear-gradient(to right, #bdc3c7, #2c3e50)',
                  'linear-gradient(to right, #de6262, #ffb88c)', 
                  'linear-gradient(to right, #06beb6, #48b1bf)',];
 let num = Math.floor(Math.random() * gradients.length);
 let ran = gradients[num];
 timer.getElementsByClassName(classname)[0].style.color = 'white'
 timer.getElementsByClassName(classname)[0].style.background = ran;
}