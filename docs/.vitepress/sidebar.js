import fs from "fs"
import path from "path"
import process from "process"

export default [
  {
    text: "开始",
    items: [
      { text: "写在前面", link: "/started", },
    ],
  },
  {
    text: "数学",
    items: [
      { text: "泸州往年中考数学试卷", link: "/math/0-TestPaper", },
      { text: "数与式的基本概念", link: "/math/p1", },
      { text: "数与式的化简求值", link: "/math/p2", },
      { text: "二次函数相关知识点汇总", link: "/math/p3", },
      { text: "绝对值的意义与解题方法", link: "/math/p4", },
      { text: "常用乘法公式", link: "/math/p5", },
      { text: "配方的进阶技巧", link: "/math/p6", },
      { text: "解方程与方程组", link: "/math/p7", },
      { text: "不等式和不等式组", link: "/math/p8", },
    ],
  }
];

function autoGenerate(dir) {
  let list = fs.readdirSync(path.join(process.cwd(), "docs", dir))
  return list
    .filter(name => name.endsWith(".md"))
    .map(name => {
      name = name.slice(0, -3)
      return {
        text: name,
        link: `/${dir}/${name}`
      }
    })
}
