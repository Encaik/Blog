(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{539:function(e,t,s){"use strict";s.r(t);var n=s(30),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vue-test-utils学习-用jest进行单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-test-utils学习-用jest进行单元测试"}},[e._v("#")]),e._v(" vue-test-utils学习-用jest进行单元测试")]),e._v(" "),s("h2",{attrs:{id:"安装-jest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-jest"}},[e._v("#")]),e._v(" 安装 Jest")]),e._v(" "),s("p",[e._v("我们假定你在一开始已经安装并配置好了 webpack、vue-loader 和 Babel——例如通过 vue-cli 创建了 webpack-simple 模板脚手架。")]),e._v(" "),s("p",[e._v("我们要做的第一件事就是安装 Jest 和 Vue Test Utils：")]),e._v(" "),s("p",[e._v("$ npm install --save-dev jest @vue/test-utils\n然后我们需要在 package.json 中定义一个单元测试的脚本。")]),e._v(" "),s("p",[e._v('// package.json\n{\n"scripts": {\n"test": "jest"\n}\n}')]),e._v(" "),s("h2",{attrs:{id:"在-jest-中处理单文件组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-jest-中处理单文件组件"}},[e._v("#")]),e._v(" 在 Jest 中处理单文件组件")]),e._v(" "),s("p",[e._v("为了告诉 Jest 如何处理 *.vue 文件，我们需要安装和配置 vue-jest 预处理器：")]),e._v(" "),s("p",[e._v("npm install --save-dev vue-jest\n接下来在 package.json 中创建一个 jest 块：")]),e._v(" "),s("p",[e._v('{\n// ...\n"jest": {\n"moduleFileExtensions": [\n"js",\n"json",\n// 告诉 Jest 处理 '),s("code",[e._v("*.vue")]),e._v(' 文件\n"vue"\n],\n"transform": {\n// 用 '),s("code",[e._v("vue-jest")]),e._v(" 处理 "),s("code",[e._v("*.vue")]),e._v(' 文件\n".*\\.(vue)$": "vue-jest"\n}\n}\n}\n注意：vue-jest 目前并不支持 vue-loader 所有的功能，比如自定义块和样式加载。额外的，诸如代码分隔等 webpack 特有的功能也是不支持的。如果要使用这些不支持的特性，你需要用 Mocha 取代 Jest 来运行你的测试，同时用 webpack 来编译你的组件。想知道如何起步，请阅读教程里的用 Mocha + webpack 测试单文件组件。')]),e._v(" "),s("h2",{attrs:{id:"处理-webpack-别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理-webpack-别名"}},[e._v("#")]),e._v(" 处理 webpack 别名")]),e._v(" "),s("p",[e._v("如果你在 webpack 中配置了别名解析，比如把 @ 设置为 /src 的别名，那么你也需要用 moduleNameMapper 选项为 Jest 增加一个匹配配置：")]),e._v(" "),s("p",[e._v('{\n// ...\n"jest": {\n// ...\n// 支持源代码中相同的 '),s("code",[e._v("@")]),e._v(" -> "),s("code",[e._v("src")]),e._v(' 别名\n"moduleNameMapper": {\n"^@/(.*)$": "<rootDir>/src/$1"\n}\n}\n}')]),e._v(" "),s("h2",{attrs:{id:"为-jest-配置-babel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为-jest-配置-babel"}},[e._v("#")]),e._v(" 为 Jest 配置 Babel")]),e._v(" "),s("p",[e._v("尽管最新版本的 Node 已经支持绝大多数的 ES2015 特性，你可能仍然想要在你的测试中使用 ES modules 语法和 stage-x 的特性。为此我们需要安装 babel-jest：")]),e._v(" "),s("p",[e._v("npm install --save-dev babel-jest\n接下来，我们需要在 package.json 的 jest.transform 里添加一个入口，来告诉 Jest 用 babel-jest 处理 JavaScript 测试文件：")]),e._v(" "),s("p",[e._v('{\n// ...\n"jest": {\n// ...\n"transform": {\n// ...\n// 用 '),s("code",[e._v("babel-jest")]),e._v(' 处理 js\n"^.+\\.js$": "<rootDir>/node_modules/babel-jest"\n}\n// ...\n}\n}\n默认情况下，babel-jest 会在其安装完毕后自动进行配置。尽管如此，因为我们已经显性的添加了对 *.vue 文件的转换，所以现在我们也需要显性的配置 babel-jest。')]),e._v(" "),s("p",[e._v("我们假设 webpack 使用了 babel-preset-env，这时默认的 Babel 配置会关闭 ES modules 的转译，因为 webpack 已经可以处理 ES modules 了。然而，我们还是需要为我们的测试而开启它，因为 Jest 的测试用例会直接运行在 Node 上。")]),e._v(" "),s("p",[e._v("同样的，我们可以告诉 babel-preset-env 面向我们使用的 Node 版本。这样做会跳过转译不必要的特性使得测试启动更快。")]),e._v(" "),s("p",[e._v("为了仅在测试时应用这些选项，可以把它们放到一个独立的 env.test 配置项中 (这会被 babel-jest 自动获取)。")]),e._v(" "),s("p",[e._v(".babelrc 文件示例：")]),e._v(" "),s("p",[e._v('{\n"presets": [["env", { "modules": false }]],\n"env": {\n"test": {\n"presets": [["env", { "targets": { "node": "current" } }]]\n}\n}\n}')]),e._v(" "),s("h2",{attrs:{id:"放置测试文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#放置测试文件"}},[e._v("#")]),e._v(" 放置测试文件")]),e._v(" "),s("p",[e._v("默认情况下，Jest 将会递归的找到整个工程里所有 .spec.js 或 .test.js 扩展名的文件。如果这不符合你的需求，你也可以在 package.json 里的配置段落中改变它的 testRegex。")]),e._v(" "),s("p",[e._v("Jest 推荐你在被测试代码的所在目录下创建一个 "),s("strong",[e._v("tests")]),e._v(" 目录，但你也可以为你的测试文件随意设计自己习惯的文件结构。不过要当心 Jest 会为快照测试在临近测试文件的地方创建一个 "),s("strong",[e._v("snapshots")]),e._v(" 目录。")]),e._v(" "),s("h2",{attrs:{id:"测试覆盖率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试覆盖率"}},[e._v("#")]),e._v(" 测试覆盖率")]),e._v(" "),s("p",[e._v("Jest 可以被用来生成多种格式的测试覆盖率报告。以下是一个简单的起步的例子：")]),e._v(" "),s("p",[e._v("扩展你的 jest 配置 (通常在 package.json 或 jest.config.js 中) 的 collectCoverage 选项，然后添加 collectCoverageFrom 数组来定义需要收集测试覆盖率信息的文件。")]),e._v(" "),s("p",[e._v('{\n"jest": {\n// ...\n"collectCoverage": true,\n"collectCoverageFrom": ["'),s("strong",[e._v('/*.{js,vue}", "!')]),e._v('/node_modules/**"]\n}\n}\n这样就会开启默认格式的测试覆盖率报告。你可以通过 coverageReporters 选项来定制它们。')]),e._v(" "),s("p",[e._v('{\n"jest": {\n// ...\n"coverageReporters": ["html", "text-summary"]\n}\n}\n更多文档内容请移步至 Jest 配置文档，在那里你可以找到覆盖率阀值、目标输出目录等选项。')]),e._v(" "),s("h2",{attrs:{id:"测试规范示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试规范示例"}},[e._v("#")]),e._v(" 测试规范示例")]),e._v(" "),s("p",[e._v("如果你已经熟悉了 Jasmine，你应该很适应 Jest 的断言 API：")]),e._v(" "),s("p",[e._v("import { mount } from '@vue/test-utils'\nimport Component from './component'")]),e._v(" "),s("p",[e._v("describe('Component', () => {\ntest('is a Vue instance', () => {\nconst wrapper = mount(Component)\nexpect(wrapper.isVueInstance()).toBeTruthy()\n})\n})")]),e._v(" "),s("h2",{attrs:{id:"快照测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快照测试"}},[e._v("#")]),e._v(" 快照测试")]),e._v(" "),s("p",[e._v("当你用 Vue Test Utils 挂载一个组件时，你可以访问到 HTML 根元素。这可以保存为一个快照为 Jest 快照测试所用。")]),e._v(" "),s("p",[e._v("test('renders correctly', () => {\nconst wrapper = mount(Component)\nexpect(wrapper.element).toMatchSnapshot()\n})\n我们可以通过一个自定义的序列化工具改进被保存的快照：")]),e._v(" "),s("p",[e._v("npm install --save-dev jest-serializer-vue\n然后在 package.json 中配置它：")]),e._v(" "),s("p",[e._v('{\n// ...\n"jest": {\n// ...\n// 快照的序列化工具\n"snapshotSerializers": ["jest-serializer-vue"]\n}\n}')])])}),[],!1,null,null,null);t.default=a.exports}}]);