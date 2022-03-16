//First, Always define the ids.
const text = document.getElementById("text");
const gen = document.getElementById("button");
//Second, Define the variables.
var vowels = ['a', 'e', 'i', 'o', 'u'],
consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];  
//Third, Functions.
function Generate() {
//Randomize the letters
let ranv = vowels[Math.floor(Math.random() * vowels.length)],
ranc = consonants[Math.floor(Math.random() * consonants.length)],
vandc = [vowels, consonants],
letter = vandc[Math.floor(Math.random() * vandc.length)];
//Text
text.innerHTML = 
//Convert it
