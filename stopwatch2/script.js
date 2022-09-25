
  var x = setInterval(function() {
  // Get the current date
  var date = new Date('May 17, 2022 4:00:00');
  var now = date - new Date().getTime();

  // Time calculations for time
  var milleniums = Math.floor(now / (10 * 10 * 10 * 60 * 60 * 24 * 7 * 4 * 12 * 10 * 10 * 10));
  var centuries = Math.floor((now % (10 * 10 * 10 * 60 * 60 * 24 * 7 * 4 * 12 * 10 * 10 * 10)) / (10 * 10 * 10 * 60 * 60 * 24 * 7 * 4 * 12 * 10 * 10));
  var decades = Math.floor((now % (10 * 10 * 10 * 60 * 60 * 24 * 7 * 4 * 12 * 10 * 10)) / (10 * 10 * 10 * 60 * 60 * 24 * 7 * 4 * 12 * 10));
  var years = Math.floor((now % (10 * 10 * 10 * 60 * 60 * 24 * 7 * 4 * 12 * 10)) / (10 * 10 * 10 * 60 * 60 * 24 * 7 * 4 * 12));
  var months = Math.floor((now % (10 * 10 * 10 * 60 * 60 * 24 * 7 * 4 * 12)) / (10 * 10 * 10 * 60 * 60 * 24 * 7 * 4));
  var weeks = Math.floor((now % (10 * 10 * 10 * 60 * 60 * 24 * 7 * 4)) / (10 * 10 * 10 * 60 * 60 * 24 * 7));
  var days = Math.floor((now % (10 * 10 * 10 * 60 * 60 * 24 * 7)) / (10 * 10 * 10 * 60 * 60 * 24));
  var hours = Math.floor((now % (10 * 10 * 10 * 60 * 60 * 24)) / (10 * 10 * 10 * 60 * 60));
  var minutes = Math.floor((now % (10 * 10 * 10 * 60 * 60)) / (10 * 10 * 10 * 60));
  var seconds = Math.floor((now % (10 * 10 * 10 * 60)) / (10 * 10 * 10));
  var deciseconds = Math.floor((now % (10 * 10 * 10)) / (10 * 10));
  var centiseconds = Math.floor((now % (10 * 10)) / 10);
  // Display the result in the element with id="time"
  document.getElementById("time").innerHTML = milleniums + "mm " + centuries + "c " + decades + "dc " + years + "y " + months + "mo " + weeks + "w " + days + "d " + hours + "h " + minutes + "m " + seconds + "s " + deciseconds + "ds " + centiseconds + "cs";
  
  //If the count down is finished, write some text
  if (now < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "0mm 0c 0dc 0y 0mo 0w 0d 0h 0m 0s 0ds 0cs";
  }
}, 10);
window.onload = function() {
  // Month Day, Year Hour:Minute:Second
  countUpFromTime("February 13, 2022 13:21:54"); 
  background();
};

function countUpFromTime(countFrom) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
      countFrom = new Date(countFrom),
      timeDifference = (now - countFrom);
  var secondsInADay = 60 * 60 * 1000,
      secondsInAHour = 60 * 60 * 1000,
      hours = Math.floor(timeDifference / (secondsInAHour) * 1),
      mins = Math.floor((timeDifference % (secondsInAHour)) / (60 * 1000) * 1),
      secs = Math.floor(((timeDifference % (secondsInAHour)) % (60 * 1000)) / 1000 * 1)
  document.getElementById('time2').innerHTML = hours + ":" + mins + ":" + secs;
  clearTimeout(countUpFromTime.interval);
  countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom); }, 1000);
}

 function background() {
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
                  'linear-gradient(to right, #02aab0, #00cdac)', //Green Beach
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
  ]
  let num = Math.floor(Math.random() * gradients.length);
  let ran = gradients[num];
  document.body.style.background = ran; //4,16,30,33
  if (gradients[4]) {
    document.getElementsByClassName('text')[0].style.color = "white";
    document.getElementsByClassName('text')[1].style.color = "white";
    document.getElementsByClassName('text')[2].style.color = "white";
    document.getElementsByClassName('text')[3].style.color = "white";
  }}
////////////////////////////////////////////////
var AllVersionTotal = 57;
var BSVersionTotal = (AllVersionTotal - 7);
var FLWSVersionTotal = (AllVersionTotal - 1);
var sentries = (AllVersionTotal * 6);
var bosses = (BSVersionTotal * 9);
var celestials = (BSVersionTotal * 8);
var eternals = (BSVersionTotal * 3);
var woomysentries = (FLWSVersionTotal * 3 + 1);
var woomyelites = (BSVersionTotal * 8);
var reanimateds = (AllVersionTotal * 4 + 14);
var fallens = (FLWSVersionTotal * 6 + 1);
var splits = (BSVersionTotal * 3);
var influxes = (BSVersionTotal * 10);
var nests = (BSVersionTotal * 11);
var specials = (BSVersionTotal * 17 + 21);
var armies = (AllVersionTotal * 4);
var tiers = (BSVersionTotal * 66 + 4);
var awps = (BSVersionTotal * 26 + 12);
var woomycelests = (BSVersionTotal * 9);
var betas = (BSVersionTotal * 75 + 16);
var devs = (BSVersionTotal * 12 + 13);