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
      {text: 'Home', link: '/Assistant/assistant-home' },
      {text: 'User Content', link: '/Content/user-content' },
      {text: 'Assistant', collapsed: false, items: 
        [
          {text: 'Launchpad', link: '/Assistant/launchpad' },
          {text: 'Assistant Home', link: '/Assistant/assistant-home' },
          {text: 'Assistant Overview', link: '/Assistant/assistant-overview' },
          {text: 'Chat History', link: '/Assistant/chat-history' },
          {text: 'Settings', link: '/Assistant/chat-settings' },
          {text: 'Chat Tokens', link: '/Assistant/chat-token-counts' },
          {text: 'Content Panel', link: '/Assistant/content-panel' }          
        ]
      },
      {text: 'AI Management', collapsed: false, items: 
            [ 
              {text: 'AI Content', collapsed: false, items:
                [
                  {text: 'Content Manager', link: '/Administration/AI-Management/Content/content-management'},
                  {text: 'Card', link: '/Administration/AI-Management/Content/card-designer'},
                  {text: 'File Manager', link: '/Administration/AI-Management/Content/document-uploads'},
                  {text: 'Web Link', link: '/Administration/AI-Management/Content/web-links'}
                ]
              },
              {text: 'Blueprints', collapsed: false, items:
                [
                  {text: 'Blueprint List',link: '/Administration/AI-Management/Blueprints/blueprint-list-view'},
                  {text: 'Blueprint Settings',link: '/Administration/AI-Management/Blueprints/blueprint-settings'}
                ]
              },              
              {text: 'Knowledge Bases', collapsed: false, items:
                [
                  {text: 'Knowledge Base List',link: '/Administration/AI-Management/Knowledge-Bases/knowledge-base-list'},
                  {text: 'Knowledge Base Settings',link: '/Administration/AI-Management/Knowledge-Bases/knowledge-base'}
                ]
              }, 
              {text: 'Test Cases', link: '/Administration/Test-Cases/ai-test-case-view'}, 
              {text: 'Settings', collapsed: false, items:
                [
                  {text: 'Launch Pad',link: '/Administration/AI-Management/Settings/launchpad'},
                  {text: 'Topics',link: '/Administration/AI-Management/Settings/topics'},
                  {text: 'Tags',link: '/Administration/AI-Management/Settings/tags'},
                  {text: 'LLM\'s',link: '/Administration/AI-Management/Settings/large-language-models'},
                  {text: 'Roles',link: '/Administration/AI-Management/Settings/roles'},
                  {text: 'Bans',link: '/Administration/AI-Management/Settings/bans'}
                ]
              },
            ]         
      },
      {text: 'Dashboard Insights', collapsed: false, items: 
        [ 
          {text: 'Platform', link: '/Administration/Dashboard-Insights/platform'}, 
          {text: 'Tokens', link: 'Administration/Dashboard-Insights/tokens'}, 
          {text: 'KB\'s', link: 'Administration/Dashboard-Insights/kbs'},
          {text: 'Content', link: 'Administration/Dashboard-Insights/content'},
          {text: 'Usage', link: 'Administration/Dashboard-Insights/usage'},
          {text: 'Logins', link: 'Administration/Dashboard-Insights/logins'},
          {text: 'Devices', link: 'Administration/Dashboard-Insights/devices'}
          ]
        },
      {text: 'Manage', collapsed: false, items: 
        [ 
          {text: 'Users', collapsed: false, items: 
            [
              {text: 'User Management', link: '/Administration/Manage/Users/user-management'},
              {text: 'User Profile', link: '/Administration/Manage/Users/user-profile'},
              {text: 'User Groups', link: '/Administration/Manage/Users/user-groups'},
              {text: 'User Privileges', link: '/Administration/Manage/Users/user-privileges'},
              {text: 'User Preferences', link: '/Administration/Manage/Users/user-preferences'},
              {text: 'User Personal', link: '/Administration/Manage/Users/user-personal'},
              {text: 'User Activities', link: '/Administration/Manage/Users/user-activities'}
            ]
          }, 
          {text: 'Groups', collapsed: false, items: 
            [  
              {text: 'Group Management', link: '/Administration/Manage/Groups/group-management'},
              {text: 'Create Groups', link: '/Administration/Manage/Groups/smart-group'}
            ]
          }, 
          {text: 'Global Settings',collapsed: false, items: 
            [  
              {text: 'Branding', link: '/Administration/Manage/global-settings/branding'},
              {text: 'Security', link: '/Administration/Manage/global-settings/security'},
              {text: 'Features', link: '/Administration/Manage/global-settings/features'},
              {text: 'Messaging', link: '/Administration/Manage/global-settings/messaging'}
            ]
          }
        ] 
      },
      {
        text: 'View - User Menu', link: '/Administration/View/Users'
      },
      {
        text: 'Tenant', collapsed: false,items: 
        [ 
          {text: 'Tenant Management', link: '/Administration/Tenant/tenant-management'},
          {text: 'Tenant Profile', link: '/Administration/Tenant/tenant-profile'}
        ] 
      }
    ],
  }
})
