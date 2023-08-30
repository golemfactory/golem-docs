/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://docs.golem.network/',
  generateRobotsTxt: true, // (optional)
  sourceDir: 'dist',
}
