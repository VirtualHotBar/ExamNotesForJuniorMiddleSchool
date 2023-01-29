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
      { text: "数与式的基本概念", link: "/math/p1", },
      { text: "数与式的化简求值", link: "/math/p2", },
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
