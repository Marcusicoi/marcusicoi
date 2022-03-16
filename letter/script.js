//First, Always define the ids.
const text = document.getElementById("text");
const gen = document.getElementById("button");
const input = document.getElementById("input");
//Second, Define the variables.
var vowels = ['a', 'e', 'i', 'o', 'u'],
consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];  
//Third, Functions.
function Generate() {
//Randomize the letters
let ranv = Math.floor(Math.random() * vowels.length),
ranc = Math.floor(Math.random() * consonants.length),
vandc = [vowels, consonants],
letter = Math.floor(Math.random() * vandc.length);
//Make another function that manages the text and the input
function Text() {
//First, Let's generate vowels and consonants based of characters
let value = input.value;
let result = "";
for (let i; i != value; i++) result += vandc[letter];
text.innerHTML = result
//Second, Let's now fix the unpronounceable letters
if (result = vowels[1] + vowels[ranv]) result = "";
}}