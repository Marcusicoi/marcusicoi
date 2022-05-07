//Stopwatch.
//Get IDs from Index.html
    const timer = document.getElementById('stopwatch');
    const start = document.getElementById('startbutton');
    const stop = document.getElementById('pausebutton');
    const reset = document.getElementById('resetbutton');
    //Define Variables
    var mn = 0, wk = 0, dy = 0, hr = 0, min = 0, sec = 0, stoptime = true;
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
        dy = parseInt(dy);
        wk = parseInt(wk);
        mn = parseInt(mn);
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
        }
        if (dy == 7) {
            wk += 1;
            dy = 0;
            hr = 0;
            min = 0;
            sec = 0;
        }
        if (wk > 4.34524) {
            mn += 1;
            wk = 0;
            dy = 0;
            hr = 0;
            min = 0;
            sec = 0;
        }
        //Set the timeout and change the timer by every second
        timer.getElementsByClassName('months')[0].innerHTML = mn;
        timer.getElementsByClassName('weeks')[0].innerHTML = wk;
        timer.getElementsByClassName('days')[0].innerHTML = dy;
        timer.getElementsByClassName('hours')[0].innerHTML = hr;
        timer.getElementsByClassName('minutes')[0].innerHTML = min;
        timer.getElementsByClassName('seconds')[0].innerHTML = sec; 
        setInterval("stopwatchCycle()", ((0.0000000001 / 100000000) / 10000000));
    };
   }
//Reset the stopwatch
function resetStopwatch() {
    timer.getElementsByClassName('months')[0].innerHTML = '0';
    timer.getElementsByClassName('weeks')[0].innerHTML = '0';
    timer.getElementsByClassName('days')[0].innerHTML = '0';
    timer.getElementsByClassName('hours')[0].innerHTML = '0';
    timer.getElementsByClassName('minutes')[0].innerHTML = '0';
    timer.getElementsByClassName('seconds')[0].innerHTML = '0';
    stoptime = true;
    sec = 0; min = 0; hr = 0; dy = 0; wk = 0; mn = 0;
};/*
function randomColors() {
let colors = ['red', 'orange', 'yellow', '#ccff00', 'lime',
              '##00ffaa', 'cyan', '#00aaff', 'blue', 'purple',
              'pink', '#ff0077'];
 let number = Math.floor(Math.random() * colors.length);
 let random = colors[number];
 let number2 = Math.floor(Math.random() * colors.length);
 let random2 = colors[number2];
 let number3 = Math.floor(Math.random() * colors.length);
 let random3 = colors[number3];
 let number4 = Math.floor(Math.random() * colors.length);
 let random4 = colors[number4];
 timer.getElementsByClassName('day')[0].style.color = 'white'
 timer.getElementsByClassName('day')[0].style.background = random;
 timer.getElementsByClassName('hour')[0].style.color = 'white'
 timer.getElementsByClassName('hour')[0].style.background = random2;
 timer.getElementsByClassName('minute')[0].style.color = 'white'
 timer.getElementsByClassName('minute')[0].style.background = random3;
 timer.getElementsByClassName('second')[0].style.color = 'white'
 timer.getElementsByClassName('second')[0].style.background = random4;
};*/
//Lets make the "timed" class cooler and lets start with gradients
function randomGradient() {
 //All Gradients. the // part was the gradient name
 let gradients = ['linear-gradient(to right, #ffafbd, #ffc3a0)', //Roseannna
                  'linear-gradient(to right, #2193b0, #6dd5ed)', //Sexy Blue
                  'linear-gradient(to right, #cc2b5e, #753a88)', //Purple Love
                  'linear-gradient(to right, #ee9ca7, #ffdde1)', //Piglet
                  'linear-gradient(to right, #42275a, #734b6d)', //Mauve
                  'linear-gradient(to right, #bdc3c7, #2c3e50)', //50 Shades of gray
                  'linear-gradient(to right, #de6262, #ffb88c)', //A Lost Memory
                  'linear-gradient(to right, #06beb6, #48b1bf)', //Socialive
                  'linear-gradient(to right, #eb3349, #f45c43)', //Cherry
                  'linear-gradient(to right, #dd5e89, #f7bb97)', //Pinky
                  'linear-gradient(to right, #56ab2f, #a8e063)', //Lush
                  'linear-gradient(to right, #614385, #516395)', //Kashmir
                  'linear-gradient(to right, #eecda3, #ef629f)', //Tranquil
                  'linear-gradient(to right, #eacda3, #d6ae7b)', //Pale Wood
           'linear-gradient(to bottom right, #02aab0, #00cdac)', //Green Beach
                  'linear-gradient(to right, #d66d75, #e29587)', //Sha La La
                  'linear-gradient(to right, #000428, #004e92)', //Frost
                  'linear-gradient(to right, #ddd6fe, #faaca8)', //Almost
                  'linear-gradient(to right, #7b4397, #dc2430)', //Virgin America
                  'linear-gradient(to right, #43cea2, #185a9d)', //Endless River
                  'linear-gradient(to right, #ba5370, #f4e2d8)', //Purple White
                  'linear-gradient(to right, #ff512f, #dd2476)', //Bloody Mary
                  'linear-gradient(to right, #4568dc, #b06ab3)', //Can you feel the love tonight
                  'linear-gradient(to right, #ec6f66, #f3a183)', //Bourbon
                  'linear-gradient(to right, #ffd89b, #19547b)', //Dusk
         'linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)', //Relay
                  'linear-gradient(to right, #4ca1af, #c4e0e5)', //Decent
                  'linear-gradient(to right, #ff5f6d, #ffce71)', //Sweet Morning
                  'linear-gradient(to right, #36d1dc, #5b86e5)', //Scooter
                  'linear-gradient(to right, #c33764, #1d2671)', //Celestial
                  'linear-gradient(to right, #141e30, #243b55)', //Royal
                  'linear-gradient(to right, #ff7e5f, #feb47b)', //Ed's Sunset Gradient
                  'linear-gradient(to right, #ed4264, #ffedbc)', //Peach
                  'linear-gradient(to right, #2b5876, #4e4376)', //Sea Blue
                  'linear-gradient(to right, #ff9966, #ff5e62)', //Orange Coral
                  'linear-gradient(to right, #aa076b, #61045f)', //Aubergine
                  ];
 //Randomize them (i have to duplicate because it returns the same gradient
 let num = Math.floor(Math.random() * gradients.length);
 let ran = gradients[num];
 let num2 = Math.floor(Math.random() * gradients.length);
 let ran2 = gradients[num2];
 let num3 = Math.floor(Math.random() * gradients.length);
 let ran3 = gradients[num3];
 let num4 = Math.floor(Math.random() * gradients.length);
 let ran4 = gradients[num4];
 let num5 = Math.floor(Math.random() * gradients.length);
 let ran5 = gradients[num5];
 let num6 = Math.floor(Math.random() * gradients.length);
 let ran6 = gradients[num6];
 //Use the gradient randomizer to classes
 timer.getElementsByClassName('month')[0].style.background = ran6;
 timer.getElementsByClassName('week')[0].style.background = ran5;
 timer.getElementsByClassName('day')[0].style.background = ran4;
 timer.getElementsByClassName('hour')[0].style.background = ran3;
 timer.getElementsByClassName('minute')[0].style.background = ran2;
 timer.getElementsByClassName('second')[0].style.background = ran;
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
//Use the randomGradient function while the website is onload
window.onload = function() {randomGradient()};

