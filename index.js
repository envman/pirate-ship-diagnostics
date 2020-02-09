const request = require('request')

const args = process.argv.slice(2, process.argv.length)

let bonusMode
if (args[0] && args[0] == 'bonus') {
  bonusMode = true
}

const challenge = (level, challenge) => new Promise((resolve, reject) => {
  request.post('http://localhost:5000/sailing', {
    method: 'POST',
    json: true,
    body: {
      level,
      challenge
    }
  }, (err, response, body) => {
    if (err) return reject(err)

    resolve(body)
  })
})

if (bonusMode) {
  challenge('Package Port', 'Zx3S4Iwu')
} else {
  challenge('Package Port', 'W-EhWiLF')
}