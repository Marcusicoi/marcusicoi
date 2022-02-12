    //Get IDs from Index.html
    const timer = document.getElementById('stopwatch');
    const start = document.getElementById('startbutton');
    const stop = document.getElementById('pausebutton');
    const reset = document.getElementById('resetbutton'); 
    //Define Variables
    var hr = 0, min = 0, sec = 0, stoptime = true;
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
            min = min + 1;
            sec = 0;
        };
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        };
        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        };
        if (min < 10 || min == 0) {
            min = '0' + min;
        };
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        };
        //Set the timeout and change the timer by every second
        timer.innerHTML = hr + ':' + min + ':' + sec;
        setTimeout("stopwatchCycle()", 1000);
    };
   }
//Reset the stopwatch
function resetStopwatch() {
    timer.innerHTML = '00:00:00';
    stoptime = true;
    sec = 0; min = 0; hr = 0;
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
}
stop.onclick = function() {
  if (start.innerHTML === 'Start') {start.innerHTML = 'Resume'};
  stop.style.visibility = 'hidden';
  start.style.visibility = 'visible';
  stopStopwatch();
}
reset.onclick = function() {
  if (start.innerHTML === '