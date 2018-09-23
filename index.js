const request = require('request')
const server = require('./server')

const args = process.argv.slice(2, process.argv.length)
const userId = args[0]

let bonusMode
if (args[1] && args[1] == 'bonus') {

  bonusMode = true
}

let url = `${server}/installpackagescore`

if (bonusMode) {
  url = `${server}/installpackagescoreboooonus`
}

request({
  method: 'POST',
  url,
  json: true,
  body: {
    user: userId
  }
}, (err, response, body) => {
  if (err) return console.error(err)

  if (response.statusCode !== 200) {
    return console.error(`Problem Diagnosing Pirate Ship ${response.statusCode}`, body)
  }

  console.log(body)
})
