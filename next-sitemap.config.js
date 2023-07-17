/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://golem-docs.vercel.app/',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
