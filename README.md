# Cloudflare DDNS

Use Cloudflare's API to update DNS records effectively making it your DDNS. To detect external IP's, [Ipify](https://www.ipify.org/)'s API is used.

## Running

```shell
$ git clone git@github.com:tistaharahap/cloudflare-ddns.git
$ cd clouflare-ddns
$ npm i
$ export CLOUDFLARE_API_KEY=YOUR_API_KEY
$ export CLOUDFLARE_API_EMAIL=YOUR_EMAIL
$ export CLOUDFLARE_ZONE_ID=YOUR_ZONE_ID
$ export CLOUDFLARE_DNS_RECORDS_ID=YOUR_DNS_RECORDS_ID
$ export CLOUDFLARE_DNS_SUBDOMAIN=YOUR_SUBDOMAIN_FOR_DDNS
$ export CLOUDFLARE_DNS_TTL=TTL_DEFAULTS_TO_300
$ export INTERVAL_PERIOD_IN_SECONDS=INTERVAL_DEFAULTS_TO_3600
$ npm start
```

## Docker

You can run this as a docker container.

```shell
$ docker run -d --name cloudflare-ddns -e CLOUDFLARE_API_KEY=YOUR_API_KEY -e CLOUDFLARE_API_EMAIL=YOUR_EMAIL -e CLOUDFLARE_ZONE_ID=YOUR_ZONE_ID -e CLOUDFLARE_DNS_RECORDS_ID=YOUR_DNS_RECORDS_ID -e CLOUDFLARE_DNS_SUBDOMAIN=YOUR_SUBDOMAIN_FOR_DDNS -e CLOUDFLARE_DNS_TTL=TTL_DEFAULTS_TO_300 -e INTERVAL_PERIOD_IN_SECONDS=INTERVAL_DEFAULTS_TO_3600 tistaharahap/cloudflare-ddns:latest
```
