export const bradmdConfig = {
    siteName: "BradMD",
    siteDescription: "A simple, fast, and easy to use Markdown Site Generator",
    mainPage: "/home",
    siteLogoUrl: "https://avatars.githubusercontent.com/u/135108994?v=4",
      ogImg: "https://avatars.githubusercontent.com/u/135108994?v=4",
      defaultTitle: "Bradmd Site",
      // used when no title is provided in the frontmatter
      defaultDescription: "This Site was made using Bradmd",
      // used when no description is provided in the frontmatter
    siteUrl: "https://bradmd.bradcn.site/",
    navItems: [
      { title: "Home", path: "/" },
      { title: "About", path:"/about" },
      { title: "Contact", path: "/contact" },
    ],
    footerItems: [
  
          {
              label: "Resources",
              items: [
                  {
                      href: '/contact',
                      name: 'Contact'
                  },
                  {
                      href: '/support',
                      name: 'Support'
                  },
                  {
                      href: 'https://bradmd.bradcn.site/',
                      name: 'Documentation'
                  },
              ],
          },
          {
              label: "About",
              items: [
                {
                    href: 'https://bradmd.bradcn.site/blog',
                    name: 'Terms'
                },
                  {
                      href: 'https://bradcn.site/terms',
                      name: 'Terms'
                  },
                  {
                      href: 'https://github.com/bradcn/bradmd/blob/main/LICENSE',
                      name: 'License'
                  },
                  {
                      href: '/about',
                      name: 'About US'
                  },
              ]
          },
          {
              label: "Company",
              items: [
                  {
                      href: 'https://bradcn.site/',
                      name: 'Company Page'
                  },
                  {
                      href: '/team',
                      name: 'Team'
                  },
              ],
          }
      ]
  
  };