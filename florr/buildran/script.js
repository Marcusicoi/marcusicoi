const slots = document.getElementById("slotnum")
const button = document.getElementById("butran")
const first = document.getElementById("first")
const second = document.getElementById("second")

let petals = [
  "Air",
  "Ankh",
  "Ant Egg",
  "Antennae",
  "Basic",
  "Basil",
  "Beetle Egg",
  "Bone",
  "Bubble",
  "Bulb",
  "Bur",
  "Cactus",
  "Carrot",
  "Claw",
  "Clover",
  "Corn",
  "Cotton",
  "Cutter",
  "Dahlia",
  "Dandelion",
  "Fangs",
  "Faster",
  "Grapes",
  "Heavy",
  "Honey",
  "Iris",
  "Jelly",
  "Leaf",
  "Light",
  "Lightning",
  "Lotus",
  "Magnet",
  "Mark",
  "Missile",
  "Orange",
  "Pearl",
  "Peas",
  "Pincer",
  "Plank",
  "Pollen",
  "Poo",
  "Powder",
  "Relic",
  "Rice",
  "Rock",
  "Root",
  "Rose",
  "Rubber",
  "Salt",
  "Sand",
  "Shell",
  "Soil",
  "Sponge",
  "Square",
  "Starfish",
  "Stick",
  "Stinger",
  "Blood Stinger",
  "Third Eye",
  "Tomato",
  "Uranium",
  "Web",
  "Wing",
  "Yggdrasil",
  "Yin-yang",
  "Yucca",
]

function petal() {
  return petals[Math.floor[Math.random() * petals.length]]
}

button.onclick = function() {
if (slots.value === 10) {
  first.indexHTML = "petal(), petal(), petal()"
  second.indexHTML = "petal(), petal(), petal()"
}
}