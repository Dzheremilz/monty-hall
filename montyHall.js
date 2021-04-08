const readlineSync = require('readline-sync')
const { log } = require('./log')
const { gatesSetup, doorChoice, montyChoice, lastDoor, changeChoice } = require('./function')


const player = readlineSync.question('Player name: ')

console.log(`Hello ${player}, you know the rules, let's make a deal now`)

const gates = gatesSetup()

console.log(`${player}, you have the choice between this 3 doors`)
let doorPick = doorChoice()
console.log(`You pick the door No. ${doorPick + 1}`)

//Monty reveal a goat door
let montyReveal = montyChoice(gates, doorPick)
console.log(`Monty reveal the No. ${montyReveal + 1} door, it's a ${gates[montyReveal]}\n`)

let lastPick = lastDoor(gates, montyReveal, doorPick)
//Monty ask if you wanna change your choice
if (changeChoice(lastPick)) {
  doorPick = lastPick
}
if (gates[doorPick] === 'car') {
  console.log(`Congratulation ${player}, behind the door No. ${doorPick + 1} is the ${gates[doorPick]}`)
} else {
  console.log(`Sadly behind door No. ${doorPick + 1} there's a ${gates[doorPick]}`)
}
log(player, gates[doorPick] === 'car')