import { defineConfig } from "vitepress";
import sidebar from "./sidebar";
import markdownItKatex from 'markdown-it-katex'

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]

export default defineConfig({
  lang: "zh-CN",
  title: "中考摆烂笔记",
  description: "以极致的效率考进职高",
  lastUpdated: true,
  base: "/",
  head: [
    // 51La统计
    ['script', { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js?id=Jfyz2AtpDiNlSRpE&ck=Jfyz2AtpDiNlSRpE' }],
    // 改变title的图标
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    ['script', { type: 'text/javascript', src: '/js/main.u.js' }],
    ['link', { rel: 'stylesheet', href: 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/KaTeX/0.5.1/katex.min.css', crossorigin: '' }]

  ],
  themeConfig: {
    logo: "/favicon.ico",
    sidebar,
    nav: [
      {
        text: "博客",
        link: "https://blog.hotpe.top/",
      },
    ],
    footer: {
      message: "<a href='https://beian.miit.gov.cn/' target='_blank' class='class-link' rel='noopener'>蜀ICP备2023001640号-2</a>",
      copyright: "Copyright © 2023-present VirtualHotBar",
    },
    editLink: {
      style: 'github',
      domain: 'github.com',
      repo: 'VirtualHotBar/HotPEToolBox',
      branch: 'main',
      dir: 'docs',
      text: '在 GitHub 上编辑此页',
      pattern: 'https://github.com/VirtualHotBar/ExamNotesForJuniorMiddleSchool/edit/main/docs/:path'
    },
    lastUpdatedText: "最近更新于",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/VirtualHotBar/ExamNotesForJuniorMiddleSchool' }
    ],
  },
  
  

  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },
  // 由于vitepress编译生成静态html文件时，无法识别插件生成的特殊标签，故需在编译时进行处理，将特殊标签定位自定义标签，防止编译报错
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  }

});



