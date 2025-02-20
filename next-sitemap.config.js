/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.arolexpharma.com",
  generateRobotsTxt: false,
  changefreq: "weekly",
  generateIndexSitemap: true,
  robotsTxtOptions: {

    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
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
