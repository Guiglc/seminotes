import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'stylesheet', href: '/seminotes/theme/style.css' }]
  ],
  markdown: {
    math: true
  },
  title: "HUMMER INDUSTRIES",
  base: '/seminotes/',
  description: "seminote",
  appearance: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: {
      '/content/': [
        {
          text: 'Docs Overview',
          items: [
            { text: 'Seminotes', link: 'content/seminotes.md' },
            { text: 'Memory', link: 'content/memory.md' },
            { text: 'Statistics', link: 'content/statistics.md' },
            { text: 'Failure Analysis', link: 'content/failure_analysis.md' },
            { text: 'Material Analysis', link: 'content/material_analysis.md' },
            { text: 'Reliability Analysis', link: 'content/reliability_analysis.md' }
          ]
        }
      ],

      '/Razavi/': [
        {
          text: 'Docs Overview',
          items: [
            // { text: 'Markdown Examples', link: '/markdown-examples' },
            // { text: 'Runtime API Examples', link: '/api-examples' }
            { text: 'Ch2. Basic Concept', link: 'Razavi/ch2.md' },
            { text: 'Ch3. Amplifier', link: 'Razavi/ch3.md' },
            { text: 'Ch4. ', link: 'Razavi/Ch4.md' },
            { text: 'Ch5. ', link: 'Razavi/Ch5.md' },
            { text: 'Ch6. ', link: 'Razavi/Ch6.md' },
            { text: 'Ch7. ', link: 'Razavi/Ch7.md' },
            { text: 'Ch8. ', link: 'Razavi/Ch8.md' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Guiglc' }
    ],

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})

