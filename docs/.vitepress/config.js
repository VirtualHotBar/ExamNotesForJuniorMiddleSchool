import { defineConfig } from "vitepress";
import sidebar from "./sidebar";


export default defineConfig({
  lang: "zh-CN",
  title: "中考逆袭笔记",
  description: "以极致的效率逆袭中考",
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
    ['link', { rel: 'stylesheet', href: 'https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/KaTeX/0.15.2/katex.min.css'}],
    ['script', { type: 'text/javascript', src: 'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/KaTeX/0.15.2/katex.min.js'}],
    ['script', { type: 'text/javascript', src: '/js/main.u.js' }],
    ['script', { type: 'text/javascript', src: 'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/KaTeX/0.15.2/contrib/auto-render.min.js',onload:'renderMathInElement(document.body,{delimiters: [{left: "$$", right: "$$", display: true},{left: "$", right: "$", display: false}]})'}]
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
      message: "Released under the MIT License.",
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
  }
});
