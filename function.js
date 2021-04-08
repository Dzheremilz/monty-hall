const { randomInt } = require('crypto')
const readlineSync = require('readline-sync')

const gatesSetup = () => {
  const gates = ['goat', 'goat', 'goat']
  const n = randomInt(0, gates.length)
  gates[n] = 'car'
  return gates
}

const doorChoice = () => {
  let doorPick = Number(readlineSync.keyIn('Which door you wanna pick:\n[1] ?\n[2] ?\n[3] ?\n', { hideEchoBack: true, mask: '', limit: '$<0-3>' }))
  if (doorPick === 0) {
    process.exit(0)
  }
  doorPick -= 1 // index trick
  return doorPick
}

const montyChoice = (gates, doorPick) => {
  let montyReveal = 0
  do {
    montyReveal = randomInt(0, gates.length)
  } while (montyReveal === doorPick || gates[montyReveal] === 'car')
  return montyReveal
}

const lastDoor = (gates, montyReveal, doorPick) => {
  let lastPick = 0
  do {
    lastPick = randomInt(0, gates.length)
  } while (lastPick === montyReveal || lastPick === doorPick)
  return lastPick
}

const changeChoice = (lastPick) => {
  return readlineSync.keyInYN(`Do you want to pick door No. ${lastPick + 1} : `)
}

exports.gatesSetup = gatesSetup
exports.doorChoice = doorChoice
exports.montyChoice = montyChoice
exports.lastDoor = lastDoor
exports.changeChoice = changeChoice