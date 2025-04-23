/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://lalibertadavanzalobos.ar",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.5,
  exclude: [],
  alternateRefs: [],
  additionalPaths: async (config) => [
    {
      loc: `${config.siteUrl}/news`,
      changefreq: "daily",
      priority: 0.9,
    },
    {
      loc: `${config.siteUrl}/balance`,
      changefreq: "daily",
      priority: 0.8,
    },
    {
      loc: `${config.siteUrl}/doc`,
      changefreq: "monthly",
      priority: 0.5,
    },    
    {
      loc: `${config.siteUrl}/contact`,
      changefreq: "monthly",
      priority: 0.3,
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
