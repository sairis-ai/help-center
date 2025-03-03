import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sairis",
  description: "Help Center",
  base: '/help-center/',
  // head: [['link', { rel: 'icon', href: './help-center/favicon.ico' }]],
  // themeConfig: {
  //   logo: 'https://public.dev.sairis.ai/images/f6eb7bac-3a9c-4db2-aa32-39cfadbc1e29/logo_light.png',
  //   // https://vitepress.dev/reference/default-theme-config
  //   nav: [
  //     { text: 'Get Started', link: '/sairis-overview' },
  //     { text: 'Assistant', link: '/sairis-overview' },
  //     { text: 'Admin Portal', link: '../public-docs' },
  //   ],
  themeConfig: {
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
        text: 'Administration',
        collapsed: false,
        items: [
          { text: 'AI Management', link: '/AI-Management' },
          { text: 'Dashboards', link: '/Dashboards' },
          { text: 'Manage', collapsed: true, items: 
            [ 
              {text: 'Users', link: '/Administration/Manage/Users'}, 
              {text: 'Groups', link: 'Administration/Manage/Groups'}, 
              {text: 'Global Settings', link: 'Administration/Manage/Global-Settings'}] 
            }
        ]
      },
      {
        text: 'Resources',
        collapsed: false,
        items: [
          { text: 'Sample 1', link: '/markdown-examples' },
          { text: 'Sample 2', link: '/api-examples' },
          { text: 'Sample 3', link: '/sairis-overview' }
        ]
      }
    ],
  }
})
