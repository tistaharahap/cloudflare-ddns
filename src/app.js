import Rx from 'rxjs'
import request from 'request-promise-native'
import env from './env'
import constants from './constants'

const interval = env.INTERVAL_PERIOD_IN_SECONDS * 1000
const ddns = Rx.Observable.interval(interval)
  .startWith(0)
  .do(() => console.log('Querying for public IP'))
  .switchMap(() => {
    const promise = request(constants.IPIFY_URL)
    return Rx.Observable.fromPromise(promise)
      .map(res => JSON.parse(res))
      .map(res => res.ip)
  })
  .do(ip => console.log(`Public IP Address: ${ip}`))
  .switchMap((ip) => {
    const opts = {
      uri: `${constants.CLOUDFLARE_API_BASE_URL}/zones/${env.CLOUDFLARE_ZONE_ID}/dns_records/${env.CLOUDFLARE_DNS_RECORDS_ID}`,
      headers: {
        'X-Auth-Key': env.CLOUDFLARE_API_KEY,
        'X-Auth-Email': env.CLOUDFLARE_API_EMAIL,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      json: true,
      body: {
        type: 'A',
        name: env.CLOUDFLARE_DNS_SUBDOMAIN,
        content: ip,
        ttl: parseInt(env.CLOUDFLARE_DNS_TTL, 10),
        proxied: false,
      },
    }
    const zonelistPromise = request(opts)
    return Rx.Observable.fromPromise(zonelistPromise)
      .map(() => ip)
  })
  .do(ip => console.log(`Subdomain ${env.CLOUDFLARE_DNS_SUBDOMAIN} DNS records is updated to ${ip}`))

ddns.subscribe(() => console.log('Done. Sleeping until the next interval..'))
