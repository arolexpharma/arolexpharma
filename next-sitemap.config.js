/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.arolexpharma.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  generateIndexSitemap: true,
  robotsTxtOptions: {
    additionalEntries: []
  },
  transform: async (config, path) => {
    return {
      loc: path.replace("https://arolexpharma.com", "https://www.arolexpharma.com"),
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: path === "/" ? 1.0 : 0.8,
    };
  }
};
