import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  description: "Help Center",
  base: '/help-center/',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    logo: 'https://public.dev.sairis.ai/images/f6eb7bac-3a9c-4db2-aa32-39cfadbc1e29/logo_light.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Get Started', link: '/sairis-overview' },
      { text: 'Assistant', link: '/sairis-overview' },
      { text: 'Admin Portal', link: '../public-docs' },
    ],

    sidebar: [
      {
        text: 'Assistant',
        collapsed: false,
        items: [
          { text: 'Assistant Home', link: '/Assistant/assistant-home' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Sairis', link: '/sairis-overview' },
          { text: 'Settings', collapsed: true, items: 
            [ 
              {text: 'Branding', link: 'brads-page'}, 
              {text: 'Single Sign On', link: 'brads-page'}, 
              {text: 'Messaging', link: 'brads-page'}] 
            },
        ]
      },
      {
        text: 'Resources',
        collapsed: false,
        items: [
          { text: 'YATESTYY', link: '/markdown-examples' },
          { text: 'BooYah', link: '/api-examples' },
          { text: 'Double CHeck', link: '/sairis-overview' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
