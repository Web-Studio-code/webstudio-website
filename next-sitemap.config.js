/** next-sitemap.config.js */
module.exports = {
  siteUrl: 'https://web-studio.info',     // stavi ovde svoj produkcioni domen
  generateRobotsTxt: true,                // da bi automatski dobio i robots.txt
  changefreq: 'weekly',                   // učestalost ažuriranja cele mape
  priority: 0.7,                          // podrazumevana prioriteta URL-ova
  sitemapSize: 5000,                      // max URL-ova po fajlu (za veće sajtove)
  // exclude: ['/secret-page'],           // po potrebi možeš izuzeti neke rute
}
