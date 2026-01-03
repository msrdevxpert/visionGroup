// next-sitemap.config.js
const navbarData = [
  {
    id: 1,
    submenus: [
      { id: 1.2, link: '/solar/' },
      { id: 1.4, link: '/agriculture/' },
      { id: 1.6, link: '/civil/' },
      { id: 1.3, link: 'https://msrdevxpert.com/' }, // external, skip
    ],
  },
  { id: 2, link: '/about-us/' },
  { id: 3, submenus: [{ id: 3.1, link: '/services/' }] },
  { id: 4, submenus: [{ id: 4.1, link: '/blogs/' }, { id: 4.2, link: '/blog-grid/' }] },
  {
    id: 6,
    submenus: [
      { id: 6.1, link: '/projects/' },
      { id: 6.3, link: '/certificate' },
      { id: 6.4, link: '/contact/' },
      { id: 6.5, link: '/faq/' },
      { id: 6.7, link: '/sign-in/' },
    ],
  },
  { id: 7, link: '/careers/' },
];

// Flatten internal links only
const links = [];
navbarData.forEach(item => {
  if (item.link && item.link.startsWith('/')) links.push(item.link);
  if (item.submenus) {
    item.submenus.forEach(sub => {
      if (sub.link && sub.link.startsWith('/')) links.push(sub.link);
    });
  }
});

module.exports = {
  siteUrl: 'https://visionoriginn.com/', // your domain
  generateRobotsTxt: true,               // optional: generates robots.txt
  sitemapSize: 7000,
  additionalPaths: async () => {
    return links.map(path => ({
      loc: path,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};
