const requestInfo = require('./index')

async function run() {
  const ip = '8.8.8.8'
  const info = await requestInfo(ip)
  console.log(info)
}
run()