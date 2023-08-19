function ID(id) {
  return document.getElementById(id)
}

//Link Petals
function linkPetals(id, damage, cooldown, name) {
  return ID(id).onclick = function() {
  ID("petdmg").value = damage
  ID("petcld").value = cooldown
  ID("petname").value = name
  }
}
//Basic
let cbasic = linkPetals("linkcbasic", 10, 2.5, "Common Basic")
//Stinger
let spinger = linkPetals("linkspinger", (43740 * 5), 10, "Super Stinger")
//Mlight
let mlight = linkPetals("linkmlight", (631.8 * 5), 0.8, "Mythic Light")
let ullight = linkPetals("linkullight", (1895.4 * 5), 0.8, "Ultra Light")
let slight = linkPetals("linkslight", (5686.2 * 5), 0.8, "Super Light")

const allPetals = [
  cbasic, 
  spinger, 
  mlight, ullight, slight
]
export { allPetals }