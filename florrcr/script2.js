function ran(num) {
  Math.floor(Math.random() * (num / 100))
}

function MULS(amount) {
  let Mchance = 3.6
  let ULchance = 2.4
  let Schance = 1.2
  //
  let successes = 0
  let fails = 0
  let loseOne = 0
  let loseTwo = 0
  let loseThree = 0
}

function untilSucceed(chance, mob) {
  let attempts = 1
  let succeeded = 0
  do  {
    if (ran(chance) > Math.random()) {
        succeeded += 1
    } else {
        attempts += 1
    }
  } while (succeeded === 0)
  console.log(`
  You need
}