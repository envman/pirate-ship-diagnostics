const request = require('request')
const server = require('./server')

const args = process.argv.slice(2, process.argv.length)

let bonusMode
if (args[0] && args[0] == 'bonus') {

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
  }
}, (err, response, body) => {
  if (err) return console.error(err)

  if (response.statusCode !== 200) {
    return console.error(`Problem Diagnosing Pirate Ship ${response.statusCode}`, body)
  }

  console.log(body)
})
