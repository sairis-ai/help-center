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
  //     { text: 'assistant', link: '/sairis-overview' },
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

    nav: [
     { text: 'Admins', link: '/admin/administration/administration-home'},
     { text: 'End Users', link: '/user/assistant/assistant-home'},
     { text: 'Learning', link: '/general/learn/learn'},
     { text: 'Reference', link: '/references/references-home'}
    ],
  
    sidebar: 
    {
    '/admin/': 
    [
      {text: 'AI Management', collapsed: false, items: 
            [ 
              {text: 'AI Content', collapsed: true, items:
                [
                  {text: 'AI Content: Manager', link: '/admin/administration/ai-management/content/content-management'},
                  {text: 'Content Access', link: '/admin/administration/ai-management/content/content-access'},
                  {text: 'Content Properties Management', link: '/admin/administration/ai-management/content/content-properties'},
                  {text: 'Card', link: '/admin/administration/ai-management/content/card-designer'},
                  {text: 'File Manager', link: '/admin/administration/ai-management/content/document-uploads'},
                  {text: 'Web Link', link: '/admin/administration/ai-management/content/web-links'},
                  {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Content Tutorials', link: '/admin/administration/ai-management/content/content-tutorial'}
                ]
              },
              {text: 'Blueprints', collapsed: true, items:
                [
                  {text: 'Blueprint Manager', link: '/admin/administration/ai-management/blueprints/blueprint-list-view'},
                  {text: 'Blueprint Settings', link: '/admin/administration/ai-management/blueprints/blueprint-settings'},
                  {text: 'Blueprint AI Settings', link: '/admin/administration/ai-management/blueprints/blueprint-aisettings'},
                  {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Blueprint Tutorials', link: '/admin/administration/ai-management/blueprints/create-blueprint-tutorial'}            
                ]
              },              
              {text: 'Knowledge Bases', collapsed: true, items:
                [
                  {text: 'Knowledge Base Manager',link: '/admin/administration/ai-management/knowledge-bases/knowledge-base-list'},
                  {text: 'Knowledge Base Settings',link: '/admin/administration/ai-management/knowledge-bases/knowledge-base'},
                  {text: '<span style="color:rgb(140,3,252)">&#9734;</span> KB Tutorials', link: '/admin/administration/ai-management/knowledge-bases/create-kb-tutorial'}
                ]
              }, 
              // {text: 'Test Cases', link: '/admin/administration/Test-Cases/ai-test-case-view'}, 
              {text: 'Settings', collapsed: true, items:
                [
                  {text: 'Launch Pad', link: '/admin/administration/ai-management/settings/launchpad'},
                  {text: 'Topics', link: '/admin/administration/ai-management/settings/topics'},
                  {text: 'Tags', link: '/admin/administration/ai-management/settings/tags'},
                  {text: 'LLM\'s', link: '/admin/administration/ai-management/settings/large-language-models'},
                  {text: 'Roles', link: '/admin/administration/ai-management/settings/roles'},
                  {text: 'Bans', link: '/admin/administration/ai-management/settings/bans'}
                ]
              },
            ]         
      },
      {text: 'Insights', collapsed: true, items:
        [
          {text: 'Dashboards', collapsed: true, items: 
            [ 
              {text: 'Dashboard Guide', link: '/admin/administration/insights/dashboards/ai-dashboard-guide'}, 
              {text: 'Platform', link: '/admin/administration/insights/dashboards/platform'}, 
              {text: 'Tokens', link: '/admin/administration/insights/dashboards/tokens'}, 
              {text: 'KB\'s', link: '/admin/administration/insights/dashboards/kbs'},
              // {text: 'Content', link: '/admin/administration/insights/dashboards/content'},
              {text: 'Usage', link: '/admin/administration/insights/dashboards/usage'},
              {text: 'Logins', link: '/admin/administration/insights/dashboards/logins'},
              {text: 'Devices', link: '/admin/administration/insights/dashboards/devices'}
            ]
          },
          {text: 'Reports', collapsed: true, items: 
            [ 
              {text: 'User Activity', link: '/admin/administration/insights/reports/reports-user-activity'}
            ]
          },
        ]   
      },    
      {text: 'Manage', collapsed: false, items: 
        [ 
          {text: 'Users', collapsed: true, items: 
            [
              {text: 'User Management', link: '/admin/administration/manage/users/user-management'},
              {text: 'User Profile', link: '/admin/administration/manage/users/user-profile'},
              {text: 'User Groups', link: '/admin/administration/manage/users/user-groups'},
              {text: 'User Privileges', link: '/admin/administration/manage/users/user-privileges'},
              {text: 'User Preferences', link: '/admin/administration/manage/users/user-preferences'},
              {text: 'User Personal', link: '/admin/administration/manage/users/user-personal'},
              {text: 'User Activities', link: '/admin/administration/manage/users/user-activities'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> User Tutorials', link: '/admin/administration/manage/users/create-user-tutorials'}
            ]
          }, 
          {text: 'Roles', collapsed: true, items: 
            [
              {text: 'Manager', link: '/admin/administration/manage/roles/manager'},
              {text: 'Settings', link: '/admin/administration/manage/roles/settings'},
              {text: 'Assigned Users', link: '/admin/administration/manage/roles/assign-users'},
              {text: 'Owners', link: '/admin/administration/manage/roles/owners'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Role Tutorials', link: '/admin/administration/manage/roles/create-roles-tutorials'}
            ]
          }, 

          {text: 'Groups', collapsed: true, items: 
            [  
              {text: 'Group Management', link: '/admin/administration/manage/groups/group-management'},
              {text: 'Create Groups', link: '/admin/administration/manage/groups/smart-group-settings'},
              {text: 'Group Members', link: '/admin/administration/manage/groups/smart-group-members'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Group Tutorials', link: '/admin/administration/manage/groups/create-group-tutorials'}
            ]
          }, 
          {text: 'Global Settings',collapsed: true, items: 
            [  
              {text: 'Branding', link: '/admin/administration/manage/global-settings/branding'},
              {text: 'Security', link: '/admin/administration/manage/global-settings/security'},
              {text: 'Messaging Configuration', link: '/admin/administration/manage/global-settings/messaging'},
              {text: 'Messaging Verification', link: '/admin/administration/manage/global-settings/messaging-verification'},
              {text: 'Messaging MFA', link: '/admin/administration/manage/global-settings/messaging-mfa'}
            ]
          }
        ] 
      },
      // {
      //  text: 'Tenant', collapsed: true,items: 
      //  [ 
      //    {text: 'Tenant management', link: '/admin/administration/Tenant/tenant-management'},
      //    {text: 'Tenant Profile', link: '/admin/administration/Tenant/tenant-profile'}
      //  ] 
      // },
    ],
   '/user/': 
    [
      {text: 'Assistant', collapsed: false, items: 
        [
          {text: 'Launchpad', link: '/user/assistant/launchpad' },
          {text: 'Assistant Home', link: '/user/assistant/assistant-home' },
          {text: 'Assistant Overview', link: '/user/assistant/assistant-overview' },
          {text: 'Control Panel', link: '/user/assistant/control-panel' }   ,
          {text: 'Chat History', link: '/user/assistant/chat-history' },
          {text: 'Settings', link: '/user/assistant/chat-settings' },
          {text: 'Chat Tokens', link: '/user/assistant/chat-token-counts' },
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> AI Assistant Tutorials', link: '/user/assistant/assistant-tutorials.md' }                 
        ]
      },
      {text: 'Search', collapsed: false, items: 
        [
          {text: 'Launchpad', link: '/user/search/user-search' }          
        ]
      }
    ], 
    '/general/': 
    [
      {text: 'Getting Started', collapsed: false, items: 
        [
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> 1) Discover Sairis: Explainer Video', link: '/general/getting-started/onboarding' }, 
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> 2) What\'s my role?', link: '/general/getting-started/my-role' },
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> 3) Admin: Quick Start', link: '/general/getting-started/quick-start' }
        ]
      },
      {text: 'Onboarding', collapsed: true, items: 
        [
          {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Onboarding Overview', link: '/general/getting-started/onboarding-overview' }     
        ]
      },
      {
        text: '<span style="color:rgb(140,3,252)">&#128214;</span> Learn', collapsed: true, items: 
        [ 
          {text: 'Prompt Engineering', collapsed: true, link: '/general/learn/prompt-engineering', items: 
          [  
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 100 - Intro to PE',link: '/general/learn/100-intro-to-prompt-engineering'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 101 - What is PE?', link: '/general/learn/101-what-is-prompt-engineering'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 102 - Inputs', link: '/general/learn/102-writing-clear-user-inputs'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 103 - Instructions', link: '/general/learn/103-AI-instructions'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 104 - Design', link: '/general/learn/104-prompt-design-patterns'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 105 - Testing & Refining', link: '/general/learn/105-testing-&-refining-prompts'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 106 - Context vs RAG', link: '/general/learn/106-context-vs-RAG'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 107 - Managing Context', link: '/general/learn/107-managing-context-in-prompts'},
            {text: '<span style="color:rgb(140,3,252)">&#128214;</span> 108 - Working with Knowledge', link: '/general/learn/108-working-with-knowledge'}
          ]
        },
          {text: 'More Coming Soon'}
        ] 
      },
      {
        text: '<span style="color:rgb(140,3,252)">&#9734;</span> Tutorials', collapsed: true, items: 
        [ 
          {text: 'Administrators', collapsed: true, items: 
            [
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Users', link: '/general/tutorials/create-user-tutorials'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Roles', link: '/general/tutorials/create-roles-tutorials'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Groups', link: '/general/tutorials/create-group-tutorials'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Content', link: '/general/tutorials/content-tutorial'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> KB\'s', link: '/general/tutorials/create-kb-tutorial'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Blueprints', link: '/general/tutorials/create-blueprint-tutorial'},
            ]
          },
          {text: 'End User - AI Assistant', collapsed: true, items: 
            [
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Homepage', link: '/general/tutorials/sairis-ai-assistant-homepage'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Control Panel - Chat', link: '/general/tutorials/sairis-ai-assistant-cp-chat'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Control Panel - Blueprints', link: '/general/tutorials/sairis-ai-assistant-cp-bp'},
              {text: '<span style="color:rgb(140,3,252)">&#9734;</span> Control Panel - Settings', link: '/general/tutorials/sairis-ai-assistant-cp-settings'}
            ]
          }  
        ]
      },
    ],
    '/references/': 
    [
      {text: 'LLM\'s', link: '/references/llm/llm'} //,
      // {text: 'Release Notes', collapsed: true, items: 
      //   [
      //     {text: 'Release 1001', link: '/references/release-notes/coming-soon' }
      //   ]
      // },
      // {text: 'Legal', collapsed: true, items: 
      //   [
      //     {text: 'Legal Doc', link: '/references/legal/coming-soon' }          
      //   ]
      // },
      // {text: 'Coming Soon - Network Status', link: '/references/network-status/coming-soon'},
    ], 
    },
  }
})
