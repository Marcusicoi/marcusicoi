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

function untilSucceed(chance, mob, petal) {
  let attempts = 1
  let succeeded = 0
  let average = (1 / chance)
  let overageL = `Your luckiness is higher than the average (${average})!`
  let underageL = `Your luckiness is lower than the average (${average}).`
  let ouageL = average > attempts ? overageL : underageL
  do  {
    if (ran(chance) > Math.random()) {
        succeeded += 1
    } else {
        attempts += 1
    }
  } while (succeeded === 0)
  console.log(`
  The chance of ${petal} from ${mob} is ${chance}%
  You need ${average} attempts for it to drop ${petal} from ${mob}!
  But you got ${attempts} attempts! ${ouageL}
  `)
}

untilSucceed(0.03, "Mythic Spider", "Mythic Third Eye")