const { randomInt } = require('crypto')
const { gatesSetup, montyChoice, lastDoor } = require('./function')

const solveMonty = (nbTry, change) => {
  let i = 0
  let victory = 0
  while (++i <= nbTry) {
    let gates = gatesSetup()
    let doorPick = randomInt(0, gates.length)
    let montyReveal = montyChoice(gates, doorPick)
    let lastPick = lastDoor(gates, montyReveal, doorPick)
    if (change) {
      doorPick = lastPick
    }
    if (gates[doorPick] === 'car') {
      victory++
    }
  }
  console.log(`Nombre de tentatives: ${nbTry}\nNombre de voiture remportée: ${victory}`)
  console.log(`Si l'utilisateur ${change ? 'change' : 'ne change pas'} de porte, il a un taux de victoire de : ${(victory / nbTry * 100).toFixed(2)}%\n`)
}

solveMonty(100000, true)
solveMonty(100000, false)