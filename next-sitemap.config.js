module.exports = {
  siteUrl: 'https://hotbox.keepcool.co',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/', '/admin/'],
      },
    ],
  },
};
