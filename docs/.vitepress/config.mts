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
    search: {
      provider: 'algolia',
      options: {
        appId: 'GHBPJGLDFI',
        apiKey: '45d97a19ad7a3e508dc49efff031e5cf',
        indexName: 'help-sairis',
      }
    },
    sidebar: 
    {
    '/admin/': 
    [
      {text: 'Getting Started', collapsed: true, items: 
        [
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Onboarding Experience', link: '/admin/Getting-Started/onboarding' },
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Quick Start', link: '/admin/Getting-Started/quick-start' }   
        ]
      },
      {text: 'AI Management', collapsed: true, items: 
            [ 
              {text: 'AI Content', collapsed: true, items:
                [
                  {text: 'Content Manager', link: '/admin/Administration/AI-Management/Content/content-management'},
                  {text: 'Card', link: '/admin/Administration/AI-Management/Content/card-designer'},
                  {text: 'File Manager', link: '/admin/Administration/AI-Management/Content/document-uploads'},
                  {text: 'Web Link', link: '/admin/Administration/AI-Management/Content/web-links'},
                  {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Content Tutorials', link: '/admin/Administration/AI-Management/Content/content-tutorial'}
                ]
              },
              {text: 'Blueprints', collapsed: true, items:
                [
                  {text: 'Blueprint List',link: '/admin/Administration/AI-Management/Blueprints/blueprint-list-view'},
                  {text: 'Blueprint Settings',link: '/admin/Administration/AI-Management/Blueprints/blueprint-settings'},
                  {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Blueprint Tutorials',link: '/admin/Administration/AI-Management/Blueprints/create-blueprint-tutorial'}            
                ]
              },              
              {text: 'Knowledge Bases', collapsed: true, items:
                [
                  {text: 'Knowledge Base List',link: '/admin/Administration/AI-Management/Knowledge-Bases/knowledge-base-list'},
                  {text: 'Knowledge Base Settings',link: '/admin/Administration/AI-Management/Knowledge-Bases/knowledge-base'},
                  {text: '<span style="color:rgb(140,3,252)">&#9734;</span> KB Tutorials',link: '/admin/Administration/AI-Management/Knowledge-Bases/create-kb-tutorial'},
                ]
              }, 
              // {text: 'Test Cases', link: '/admin/Administration/Test-Cases/ai-test-case-view'}, 
              {text: 'Settings', collapsed: true, items:
                [
                  {text: 'Launch Pad',link: '/admin/Administration/AI-Management/Settings/launchpad'},
                  {text: 'Topics',link: '/admin/Administration/AI-Management/Settings/topics'},
                  {text: 'Tags',link: '/admin/Administration/AI-Management/Settings/tags'},
                  // {text: 'Understanding LLM\'s',link: '/admin/Administration/AI-Management/Settings/llm'},
                  {text: 'LLM\'s',link: '/admin/Administration/AI-Management/Settings/large-language-models'},
                  {text: 'Roles',link: '/admin/Administration/AI-Management/Settings/roles'},
                  {text: 'Bans',link: '/admin/Administration/AI-Management/Settings/bans'}
                ]
              },
            ]         
      },
      {text: 'Dashboard Insights', collapsed: true, items: 
        [ 
          {text: 'Platform', link: '/admin/Administration/Dashboard-Insights/platform'}, 
          {text: 'Tokens', link: '/admin/Administration/Dashboard-Insights/tokens'}, 
          {text: 'KB\'s', link: '/admin/Administration/Dashboard-Insights/kbs'},
          {text: 'Content', link: '/admin/Administration/Dashboard-Insights/content'},
          {text: 'Usage', link: '/admin/Administration/Dashboard-Insights/usage'},
          {text: 'Logins', link: '/admin/Administration/Dashboard-Insights/logins'},
          {text: 'Devices', link: '/admin/Administration/Dashboard-Insights/devices'}
          ]
        },
      {text: 'Manage', collapsed: true, items: 
        [ 
          {text: 'Users', collapsed: true, items: 
            [
              {text: 'User Management', link: '/admin/Administration/Manage/Users/user-management'},
              {text: 'User Profile', link: '/admin/Administration/Manage/Users/user-profile'},
              {text: 'User Groups', link: '/admin/Administration/Manage/Users/user-groups'},
              {text: 'User Privileges', link: '/admin/Administration/Manage/Users/user-privileges'},
              {text: 'User Preferences', link: '/admin/Administration/Manage/Users/user-preferences'},
              {text: 'User Personal', link: '/admin/Administration/Manage/Users/user-personal'},
              {text: 'User Activities', link: '/admin/Administration/Manage/Users/user-activities'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> User Tutorials', link: '/admin/Administration/Manage/Users/create-user-tutorials'}
            ]
          }, 
          {text: 'Roles', link: '/Administration/Manage/roles' },
          {text: 'Groups', collapsed: true, items: 
            [  
              {text: 'Group Management', link: '/admin/Administration/Manage/Groups/group-management'},
              {text: 'Create Groups', link: '/admin/Administration/Manage/Groups/smart-group'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Group Tutorials', link: '/admin/Administration/Manage/Groups/create-group-tutorials'}
            ]
          }, 
          {text: 'Global Settings',collapsed: true, items: 
            [  
              {text: 'Branding', link: '/admin/Administration/Manage/global-settings/branding'},
              {text: 'Security', link: '/admin/Administration/Manage/global-settings/security'},
              {text: 'Features', link: '/admin/Administration/Manage/global-settings/features'},
              {text: 'Messaging', link: '/admin/Administration/Manage/global-settings/messaging'}
            ]
          }
        ] 
      },
      // {         text: 'View - User Menu', link: '/admin/Administration/View/Users'       },
      {text: 'End User Features', collapsed: true, items: 
        [
          {text: 'Home', link: '/admin/Assistant/assistant-home' },
          {text: 'User Content', link: '/admin/Assistant/assistant-home' },
        ]
      },
      // {
      //  text: 'Tenant', collapsed: true,items: 
      //  [ 
      //    {text: 'Tenant Management', link: '/admin/Administration/Tenant/tenant-management'},
      //    {text: 'Tenant Profile', link: '/admin/Administration/Tenant/tenant-profile'}
      //  ] 
      // },
      {
        text: '<span style="color:rgb(140,3,252)">&#128214;</span> Courses', link: '/admin/Courses/Courses', collapsed: true, items: 
        [ 
          {text: 'Prompt Engineering', collapsed: true, link: '/Courses/prompt-engineering', items: 
          [  
            // {text: '<span style="color:rgb(140,3,252)">&#9734</span> Welcome to Prompt Engineering (PE)',link: '/Courses/prompt-engineering'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 100 - Intro to PE',link: '/admin/Courses/100-intro-to-prompt-engineering'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 101 - What is PE?', link: '/admin/Courses/101-what-is-prompt-engineering'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 102 - Inputs', link: '/admin/Courses/102-writing-clear-user-inputs'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 103 - Instructions', link: '/admin/Courses/103-AI-instructions'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 104 - Design', link: '/admin/Courses/104-prompt-design-patterns'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 105 - Testing & Refining', link: '/admin/Courses/105-testing-&-refining-prompts'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 106 - Context vs RAG', link: '/admin/Courses/106-context-vs-RAG'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 107 - Managing Context', link: '/admin/Courses/107-managing-context-in-prompts'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 108 - Working with Knowledge', link: '/admin/Courses/108-working-with-knowledge'}
          ]
        },
          {text: 'Coming Soon'}
        ] 
      },
      {
        text: '<span style="color:rgb(140,3,252)">&#9734;</span> Tutorials', link: '/Courses/Courses', collapsed: true, items: 
        [ 
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Users', link: '/admin/Administration/Manage/Users/create-user-tutorials'},
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Groups', link: '/admin/Administration/Manage/Groups/create-group-tutorials'},
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Content', link: '/admin/Administration/AI-Management/Content/content-tutorial'},
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> KB Tutorials',link: '/admin/Administration/AI-Management/Knowledge-Bases/create-kb-tutorial'},
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Blueprint Tutorials',link: '/admin/Administration/AI-Management/Blueprints/create-blueprint-tutorial'}    
          ]
      },
    ],
    'user/': 
    [
      {text: 'Getting Started', collapsed: true, items: 
        [
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Onboarding Experience', link: '/admin/Getting-Started/onboarding' }
        ]
      },
      {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Getting Started Too', link: '/admin/Getting-Started/onboarding'      
      },
      {text: 'Assistant', collapsed: true, items: 
        [
          {text: 'Launchpad', link: '/user/Assistant/launchpad' },
          {text: 'Assistant Home', link: '/user/Assistant/assistant-home' },
          {text: 'Assistant Overview', link: '/user/Assistant/assistant-overview' },
          {text: 'Chat History', link: '/user/Assistant/chat-history' },
          {text: 'Settings', link: '/user/Assistant/chat-settings' },
          {text: 'Chat Tokens', link: '/user/Assistant/chat-token-counts' },
          {text: 'Content Panel', link: '/user/Assistant/content-panel' }          
        ]
      },
      {text: 'Search', collapsed: true, items: 
        [
          {text: 'Launchpad', link: '/user/Search/user-search' }          
        ]
      }
    ]
    },
  }
})
