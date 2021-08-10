# @mr687/request-info [![NPM version](https://img.shields.io/npm/v/request-info.svg?style=flat)](https://www.npmjs.com/package/@mr687/request-info) [![NPM monthly downloads](https://img.shields.io/npm/dm/request-info.svg?style=flat)](https://npmjs.org/package/@mr687/request-info) [![NPM total downloads](https://img.shields.io/npm/dt/request-info.svg?style=flat)](https://npmjs.org/package/@mr687/request-info)

> get user info from request IP

## install
```sh
$ npm install @mr687/request-info
```

## usage
```js
const requestInfo = require('@mr687/request-info')

async function run() {
  const ip = '8.8.8.8'
  const info = await requestInfo(ip)
  console.log(info)
}
run()
```

```
// it will returns
{
  title: '8.8.8.8 Tracking Report',
  info: {
    ip_address: '8.8.8.8',
    hostname: 'dns.google',
    latitude: '37.751',
    longtitude: '-97.822',
    continent: 'North America',
    continent_code: 'NA',
    country: 'United States',
    country_code: 'US',
    region: 'Not Detected',
    city: 'Not Detected',
    organization: 'GOOGLE',
    internet_service_provider: 'GOOGLE',
    asn: 'AS15169 GOOGLE',
    monetary_currency: 'United States Dollar($) (USD)',
    dial_out_code: '+1',
    language: 'English',
    blacklist: 'Not Detected',
    proxy: 'Detected',
    gmt: '09',
    sunrise_time: '06',
    greenwich_mean_time_zone: '-18000',
    timezone: 'America/North_Dakota/Center'
  }
}
```

## api
**params**
* `ip` <string>: ip address