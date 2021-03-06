export default {
  CLOUDFLARE_API_KEY: process.env.CLOUDFLARE_API_KEY || '',
  CLOUDFLARE_API_EMAIL: process.env.CLOUDFLARE_API_EMAIL || '',
  CLOUDFLARE_ZONE_ID: process.env.CLOUDFLARE_ZONE_ID || '',
  CLOUDFLARE_DNS_RECORDS_ID: process.env.CLOUDFLARE_DNS_RECORDS_ID || '',
  CLOUDFLARE_DNS_SUBDOMAIN: process.env.CLOUDFLARE_DNS_SUBDOMAIN || '',
  CLOUDFLARE_DNS_TTL: process.env.CLOUDFLARE_DNS_TTL || 300,
  INTERVAL_PERIOD_IN_SECONDS: process.env.INTERVAL_PERIOD_IN_SECONDS || 3600,
}
