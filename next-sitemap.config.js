/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://lalibertadavanzalobos.ar",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 1,
  exclude: [],
  alternateRefs: [],
  additionalPaths: async (config) => [
    {
      loc: `${config.siteUrl}/#news`,
      changefreq: "daily",
      priority: 1,
    },
    {
      loc: `${config.siteUrl}/#balance`,
      changefreq: "daily",
      priority: 0.7,
    },
    {
      loc: `${config.siteUrl}/#contact`,
      changefreq: "monthly",
      priority: 0.5,
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
