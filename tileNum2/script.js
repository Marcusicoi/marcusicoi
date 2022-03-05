//Stopwatch.
//Get IDs from Index.html
    const number = document.getElementById('num');
    const start = document.getElementById('startbutton');
    const stop = document.getElementById('pausebutton');
    const reset = document.getElementById('resetbutton');
    //Define Variables
    var num = 0;
    var stopincrease = false;
    var spd = 1000;
    //Start increasing
    function startIncreasing() {
      if (stopincrease == true) {
          stopincrease = false;
          numberCycle(); 
      }
    };
    //Stop increasing
    function stopIncreasing() {
      if (stopincrease == false) {
          stopincrease = true;
      }
    };
    //Number Cycle
    function numberCycle() {
    if (stopincrease == false) {
        num = parseInt(num);
        num += 1;
        //Number calculations
        if (num > 10) {
            spd = 900
        }
        if (num > 100) {
            spd = 800
        }
        if (num = 1000) {
            num = num + "K";
            num = 0;
            spd = 700;
        };
        if (num = 1000 + "K") {
            num = num + "M";
            num = 0;
            spd = 600;
        };
        if (num = 1000 + "M") {
            num = num + "B";
            num = 0;
            spd = 500;
        }
        //Set the timeout and change the number by every second based on the spd
        number.innerHTML = num; 
        setTimeout("numberCycle()", spd);
    };
   }
//Reset the number
function resetNumber() {
 stopincrease = true;
 number.innerHTML = 0;
 num = 0;
};
//Make the two buttons invisible
stop.style.visibility = 'hidden';
reset.style.visibility = 'hidden';
//Onclicks
start.onclick = function() {
  stop.style.visibility = 'visible';
  reset.style.visibility = 'visible';
  start.style.visibility = 'hidden';
  startIncreasing();
};
stop.onclick = function() {
  if (start.innerHTML === 'Start') {start.innerHTML = 'Resume'};
  stop.style.visibility = 'hidden';
  start.style.visibility = 'visible';
  stopIncreasing();
};
reset.onclick = function() {
  if (start.innerHTML === 'Resume') {start.innerHTML = 'Start'}; 
  stop.style.visibility = 'hidden';
  reset.style.visibility = 'hidden';
  start.style.visibility = 'visible';
  resetNumber();
}; 
