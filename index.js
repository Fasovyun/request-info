const axios = require('axios')
const cheerio = require('cheerio')
const pretty = require('pretty')
const UserAgent = require('user-agents')

const randomUA = () => {
  const userAgent = new UserAgent({deviceCategory: 'desktop'})
  return userAgent.toString()
}

const keyFormat = (text) => {
  return text.toLowerCase()
    .trim()
    .replace(/ /g, '_')
    .replace(/\/_/g, '')
    .replace('vpn/tor/', '')
}

const resolveInfo = (info) => {
  const result = {}
  info.each((i, x) => {
    const text = cheerio.load(x).text().trim()
    if (text.includes(':') && !text.includes('Latitude')) {
      const splitted = text.split(':')
      result[keyFormat(splitted[0])] = splitted[1].trim()
    }
    if (text.includes('Latitude')) {
      const x = text.split('/')
      x.forEach(y => {
        const z = y.split(':')
        result[keyFormat(z[0])] = z[1].trim()
      })
    }
  })
  return result
}

const url = 'https://www.ip-lookup.org/location/103.227.254.100'

async function run(){
  const {data} = await axios.get(url, {
    headers: {'User-Agent': randomUA()}
  })
  const $ = cheerio.load(data)
  const info = $('article.blog-post-zajedno').first()
  const result = {
    title: info.find('div').first().text().trim(),
    info: resolveInfo(info.find('ul li'))
  }
  return result
}
run()
module.exports = run