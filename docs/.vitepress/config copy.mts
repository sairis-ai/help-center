import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config



export default defineConfig({
  title: "Sairis",
  description: "Help Center",
  base: '/',
  // head: [['link', { rel: 'icon', href: './help-center/favicon.ico' }]],
  // themeConfig: {
  //   logo: 'https://public.dev.sairis.ai/images/f6eb7bac-3a9c-4db2-aa32-39cfadbc1e29/logo_light.png',
  //   // https://vitepress.dev/reference/default-theme-config
  //   nav: [
  //     { text: 'Get Started', link: '/sairis-overview' },
  //     { text: 'Assistant', link: '/sairis-overview' },
  //     { text: 'Admin Portal', link: '../public-docs' },
  //   ],

  //  Another way to present star bullets ----  {text: '<span style="color:rgb(140,3,252)">☆</span> Quick Start', link: '/Getting-Started/quick-start' }

  themeConfig: {
    logo: {
      light: '/images/mark-light.png',
      dark: '/images/mark-dark.png'
    },
    search: {
      provider: 'algolia',
      options: {
        appId: 'GHBPJGLDFI',
        apiKey: '45d97a19ad7a3e508dc49efff031e5cf',
        indexName: 'help-sairis',
      }
    },
    sidebar: [
      {text: 'Getting Started', collapsed: true, items: 
        [
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Onboarding Experience', link: '/Getting-Started/onboarding' },
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Quick Start', link: '/Getting-Started/quick-start' }   
        ]
      },
      {text: 'Assistant', collapsed: true, items: 
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
      {text: 'AI Management', collapsed: true, items: 
            [ 
              {text: 'AI Content', collapsed: true, items:
                [
                  {text: 'Content Manager', link: '/Administration/AI-Management/Content/content-management'},
                  {text: 'Card', link: '/Administration/AI-Management/Content/card-designer'},
                  {text: 'File Manager', link: '/Administration/AI-Management/Content/document-uploads'},
                  {text: 'Web Link', link: '/Administration/AI-Management/Content/web-links'},
                  {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Content Tutorials', link: '/Administration/AI-Management/Content/content-tutorial'}
                ]
              },
              {text: 'Blueprints', collapsed: true, items:
                [
                  {text: 'Blueprint List',link: '/Administration/AI-Management/Blueprints/blueprint-list-view'},
                  {text: 'Blueprint Settings',link: '/Administration/AI-Management/Blueprints/blueprint-settings'},
                  {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Blueprint Tutorials',link: '/Administration/AI-Management/Blueprints/create-blueprint-tutorial'}            
                ]
              },              
              {text: 'Knowledge Bases', collapsed: true, items:
                [
                  {text: 'Knowledge Base List',link: '/Administration/AI-Management/Knowledge-Bases/knowledge-base-list'},
                  {text: 'Knowledge Base Settings',link: '/Administration/AI-Management/Knowledge-Bases/knowledge-base'},
                  {text: '<span style="color:rgb(140,3,252)">&#9734;</span> KB Tutorials',link: '/Administration/AI-Management/Knowledge-Bases/create-kb-tutorial'},
                ]
              }, 
              // {text: 'Test Cases', link: '/Administration/Test-Cases/ai-test-case-view'}, 
              {text: 'Settings', collapsed: true, items:
                [
                  {text: 'Launch Pad',link: '/Administration/AI-Management/Settings/launchpad'},
                  {text: 'Topics',link: '/Administration/AI-Management/Settings/topics'},
                  {text: 'Tags',link: '/Administration/AI-Management/Settings/tags'},
                  // {text: 'Understanding LLM\'s',link: '/Administration/AI-Management/Settings/llm'},
                  {text: 'LLM\'s',link: '/Administration/AI-Management/Settings/large-language-models'},
                  {text: 'Roles',link: '/Administration/AI-Management/Settings/roles'},
                  {text: 'Bans',link: '/Administration/AI-Management/Settings/bans'}
                ]
              },
            ]         
      },
      {text: 'Dashboard Insights', collapsed: true, items: 
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
      {text: 'Manage', collapsed: true, items: 
        [ 
          {text: 'Users', collapsed: true, items: 
            [
              {text: 'User Management', link: '/Administration/Manage/Users/user-management'},
              {text: 'User Profile', link: '/Administration/Manage/Users/user-profile'},
              {text: 'User Groups', link: '/Administration/Manage/Users/user-groups'},
              {text: 'User Privileges', link: '/Administration/Manage/Users/user-privileges'},
              {text: 'User Preferences', link: '/Administration/Manage/Users/user-preferences'},
              {text: 'User Personal', link: '/Administration/Manage/Users/user-personal'},
              {text: 'User Activities', link: '/Administration/Manage/Users/user-activities'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> User Tutorials', link: '/Administration/Manage/Users/create-user-tutorials'}
            ]
          }, 
          {text: 'Roles', link: '/Administration/Manage/roles' },
          {text: 'Groups', collapsed: true, items: 
            [  
              {text: 'Group Management', link: '/Administration/Manage/Groups/group-management'},
              {text: 'Create Groups', link: '/Administration/Manage/Groups/smart-group'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Group Tutorials', link: '/Administration/Manage/Groups/create-group-tutorials'}
            ]
          }, 
          {text: 'Global Settings',collapsed: true, items: 
            [  
              {text: 'Branding', link: '/Administration/Manage/global-settings/branding'},
              {text: 'Security', link: '/Administration/Manage/global-settings/security'},
              {text: 'Features', link: '/Administration/Manage/global-settings/features'},
              {text: 'Messaging', link: '/Administration/Manage/global-settings/messaging'}
            ]
          }
        ] 
      },
      // {         text: 'View - User Menu', link: '/Administration/View/Users'       },
      {text: 'End User Features', collapsed: true, items: 
        [
          {text: 'Home', link: '/Assistant/assistant-home' },
          {text: 'User Content', link: '/Assistant/assistant-home' },
        ]
      },
      // {
      //  text: 'Tenant', collapsed: true,items: 
      //  [ 
      //    {text: 'Tenant Management', link: '/Administration/Tenant/tenant-management'},
      //    {text: 'Tenant Profile', link: '/Administration/Tenant/tenant-profile'}
      //  ] 
      // },
      {
        text: '<span style="color:rgb(140,3,252)">&#128214;</span> Courses', link: '/Courses/Courses', collapsed: true, items: 
        [ 
          {text: 'Prompt Engineering', collapsed: true, link: '/Courses/prompt-engineering', items: 
          [  
            // {text: '<span style="color:rgb(140,3,252)">&#9734</span> Welcome to Prompt Engineering (PE)',link: '/Courses/prompt-engineering'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 100 - Intro to PE',link: '/Courses/100-intro-to-prompt-engineering'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 101 - What is PE?', link: '/Courses/101-what-is-prompt-engineering'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 102 - Inputs', link: '/Courses/102-writing-clear-user-inputs'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 103 - Instructions', link: '/Courses/103-AI-instructions'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 104 - Design', link: '/Courses/104-prompt-design-patterns'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 105 - Testing & Refining', link: '/Courses/105-testing-&-refining-prompts'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 106 - Context vs RAG', link: '/Courses/106-context-vs-RAG'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 107 - Managing Context', link: '/Courses/107-managing-context-in-prompts'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 108 - Working with Knowledge', link: '/Courses/108-working-with-knowledge'}
          ]
        },
          {text: 'Coming Soon'}
        ] 
      },
      {
        text: '<span style="color:rgb(140,3,252)">&#9734;</span> Tutorials', link: '/Courses/Courses', collapsed: true, items: 
        [ 
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Users', link: '/Administration/Manage/Users/create-user-tutorials'},
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Groups', link: '/Administration/Manage/Groups/create-group-tutorials'},
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Content', link: '/Administration/AI-Management/Content/content-tutorial'},
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> KB Tutorials',link: '/Administration/AI-Management/Knowledge-Bases/create-kb-tutorial'},
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Blueprint Tutorials',link: '/Administration/AI-Management/Blueprints/create-blueprint-tutorial'}    
          ]
      },
    ],
  }
})
