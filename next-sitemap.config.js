/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.dittdomene.no", // Endre til ditt domene
  generateRobotsTxt: false, // Vi lager vår egen robots.txt, sett til true for automatisk
  // Exclude paths hvis du vil blokkere sider f.eks:
  // exclude: ['/admin/*', '/login'],
};
