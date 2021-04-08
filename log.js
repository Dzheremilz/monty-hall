const fs = require('fs')

const log = (player, win) => {
  let newLog = `${player} has ${win ? 'won a car' : 'lost'}\n`
  fs.appendFileSync('log.txt', newLog)
}

exports.log = log