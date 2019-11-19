(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{69:function(t,a,s){"use strict";s.r(a);var e=s(0),n=function(t){var a,s,e,n,r=(e=void 0,n="Coding",(a={}).type=s="post",a.internal=e,a.contentType="markdown",a.slug="modern-react",a.content=e,a.createdAt=new Date(1552011647e3),a.updatedAt=new Date(1574123529316),a.title="现代的 React",a.layout=s,a.categories=[n],a.date="2019-03-08 10:20:47",a.tags=null,a.markdownHeadings=[],a.excerpt="<p>我一直很想写一本关于 React 的小书，因为我看到很多刚入门前端或刚开始使用 React 的开发者，对 React 有一些误解。也许是因为 JSX, 让很多人误以为 React 是一种黑魔法 —— 竟然能在 JS 文件里写 HTML! 还有很多围绕 React 的问题，像「状态管理」，就让很多人焦头烂额了。也正是因为 JSX, 让很多人依然用模板的思维去写 React.</p>\n",a.permalink="/modern-react",a.assets={},a.attributes=a,a.categoriesInfo=[{name:n,permalink:"/categories/coding"}],a),p=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=r}].concat(p);["layout","transition"].forEach((function(a){var s=t.options.PageComponent;s&&(t.options[a]=s[a]),void 0===t.options[a]&&(t.options[a]=r[a])})),r.slug&&(t.options.name="page-wrapper-"+r.slug.replace(/[^0-9a-z\-]/i,"-"))},r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("layout-manager",[s("p",[t._v("我一直很想写一本关于 React 的小书，因为我看到很多刚入门前端或刚开始使用 React 的开发者，对 React 有一些误解。也许是因为 JSX, 让很多人误以为 React 是一种黑魔法 —— 竟然能在 JS 文件里写 HTML! 还有很多围绕 React 的问题，像「状态管理」，就让很多人焦头烂额了。也正是因为 JSX, 让很多人依然用模板的思维去写 React.")]),t._v(" "),s("p",[t._v("但实际上，如果你理解 React 解决问题的方式的本质，你会发现 React 没有那么难。我写这本小书的主要目的，就是想让还觉得 React 难用的开发者们知道，React 很简单。")]),t._v(" "),s("p",[t._v("React 是一种构建 UI 的思想，关于 "),s("saber-link",{attrs:{to:"https://github.com/reactjs/react-basic"}},[t._v("React 的思想")]),t._v("，我觉得已经是老生常谈了。在所有从本质层面讲解 React 的文章或书里，总不免提到这样的公式：")],1),t._v(" "),s("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[s("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("UI = f(state)")])])]),s("p",[t._v("意思就是，UI 是基于状态的一个函数返回值。这也是 Sebastian (React 设计者) 设想的理想状态。直到当我们真正拿 React 来写 UI 的时候，却发现我们很难遵循这个公式——组件的内部状态需要依靠 Class. 而写 Class 是导致 React 使用者困惑的重要原因。")]),t._v(" "),s("p",[t._v("用 Class 实现内部状态同时也带来了另一个问题——我们怎么复用这些逻辑？常见的做法就是使用 "),s("saber-link",{attrs:{to:"https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9"}},[t._v("Function as Child Component")]),t._v(".")],1),t._v(" "),s("p",[t._v("先不说 Function as Child Component 容不容易被初学者理解, 光是它带来的嵌套问题，就已经足够我们烦恼了——可以想像我们只能用 callback 写 JavaScript 的时代。")]),t._v(" "),s("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"js"}},[s("pre",{pre:!0,attrs:{class:"saber-highlight-code language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("MyForm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DataFetcher"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("actions")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Translations"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("translations")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Styles"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("styles")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("form styles"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("styles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("submit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("translations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("submitText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Styles"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Translations"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("DataFetcher"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])])]),s("p",[t._v("还有，我们应该怎么解决组件之间的状态共享问题？Redux? MobX? 还是其它状态管理工具？")]),t._v(" "),s("p",[t._v("React 应该是简单直接的，但越来越多人「谈 React 色变」，正是由于以上的（或者以上没有提到的）问题，认为 React 复杂，难学。很多关于 React 的文章和书都花了不少篇幅来介绍这些解决问题的「设计模式」。")]),t._v(" "),s("p",[t._v("但随着 React 的不断迭代，有了 Context API, 有了 Hooks API, 一切都变得简单了。我们可以抛开种种「模式」，真正用「函数式」的思维去构建 UI. 这也是标题想表达的意思 —— 我们应该使用「现代」的 React, 去避免不必要的学习成本。")]),t._v(" "),s("p",[t._v("和著名的《设计模式》一样，很多「设计模式」是为了弥补面向对象的缺陷而出现的。React 通过自身 API 的完善，使我们能少写更多不必要的代码，少学习很多不必要的「模式」。")]),t._v(" "),s("p",[t._v("我的目的不是在教你怎么用各种 React 相关的库，而是想让读者知道，我们在解决什么样的问题？我们解决问题的方法是什么？别人的库是怎么解决的？")]),t._v(" "),s("p",[t._v("这个专栏会陆续发布循序渐进的文章。如果你完全没有接触过 React, 那么读完这个专栏后，你就完全能驾驭了 React 了，而且是用优雅的方式去驾驭他。你会发现，"),s("strong",[t._v("写 React 就是写函数那么简单，只不过这个函数的返回值是 Virtual DOM 罢了")]),t._v("。")]),t._v(" "),s("p",[t._v("初学者们，请不必因为不懂所谓的「模式」而感到惭愧，尽情享受技术发展带来的红利吧。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("这是我在小专栏付费连载的"),s("saber-link",{attrs:{to:"https://xiaozhuanlan.com/modern-react"}},[t._v("《Modern React》")]),t._v("的前言，目前正在限时打折，有兴趣的朋友可以订阅。")],1),t._v(" "),s("p",[t._v("之所以选择连载的方式，是因为我想要通过读者的反馈去决定我接下来连载的内容。欢迎读者们积极地来信反馈。")])])}),[],!1,null,null,null);"function"==typeof n&&n(r);a.default=r.exports}}]);