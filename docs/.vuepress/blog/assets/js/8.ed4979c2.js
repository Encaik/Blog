(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{523:function(t,a,s){"use strict";s.r(a);var n=s(18),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"学习使用-angular"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学习使用-angular"}},[t._v("#")]),t._v(" 学习使用 Angular")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/blog/angular.png",alt:"banner"}})]),t._v(" "),s("h2",{attrs:{id:"搭建开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建开发环境"}},[t._v("#")]),t._v(" 搭建开发环境")]),t._v(" "),s("ul",[s("li",[t._v("node.js")])]),t._v(" "),s("p",[t._v("最新版 node.js 即可")]),t._v(" "),s("ul",[s("li",[t._v("Angular cli 工具")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @angular/cli\n")])])]),s("h2",{attrs:{id:"创建新项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建新项目"}},[t._v("#")]),t._v(" 创建新项目")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("ng new "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("project_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("然后根据提示，配置项目。")]),t._v(" "),s("ul",[s("li",[t._v("是否需要添加路由？")]),t._v(" "),s("li",[t._v("选择要使用的 CSS 规范")])]),t._v(" "),s("h2",{attrs:{id:"项目结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("文件夹或文件")]),t._v(" "),s("th",[t._v("用途")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("e2e/")]),t._v(" "),s("td",[t._v("e2e 测试配置文件")])]),t._v(" "),s("tr",[s("td",[t._v("node_modules/")]),t._v(" "),s("td",[t._v("node 模块")])]),t._v(" "),s("tr",[s("td",[t._v("src/")]),t._v(" "),s("td",[t._v("根项目的源文件")])]),t._v(" "),s("tr",[s("td",[t._v(".editorconfig")]),t._v(" "),s("td",[t._v("代码编辑器的配置")])]),t._v(" "),s("tr",[s("td",[t._v(".gitignore")]),t._v(" "),s("td",[t._v("指定 Git 应忽略的不必追踪的文件")])]),t._v(" "),s("tr",[s("td",[t._v("angular.json")]),t._v(" "),s("td",[t._v("为工作区中的所有项目指定 CLI 的默认配置，包括 CLI 要用到的构建、启动开发服务器和测试工具的配置项")])]),t._v(" "),s("tr",[s("td",[t._v("browserslist")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("karma.conf.js")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("package-lock.json")]),t._v(" "),s("td",[t._v("提供 npm 客户端安装到 node_modules 的所有软件包的版本信息")])]),t._v(" "),s("tr",[s("td",[t._v("package.json")]),t._v(" "),s("td",[t._v("配置工作空间中所有项目可用的 npm 包依赖")])]),t._v(" "),s("tr",[s("td",[t._v("README.md")]),t._v(" "),s("td",[t._v("根应用的简介文档")])]),t._v(" "),s("tr",[s("td",[t._v("tsconfig.app.json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("tsconfig.json")]),t._v(" "),s("td",[t._v("工作空间中各个项目的默认 TypeScript 配置")])]),t._v(" "),s("tr",[s("td",[t._v("tsconfig.spec.json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("tslint.json")]),t._v(" "),s("td",[t._v("工作空间中各个项目的默认 TSLint 配置")])])])]),t._v(" "),s("h2",{attrs:{id:"主文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主文件"}},[t._v("#")]),t._v(" 主文件")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BrowserModule "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@angular/platform-browser"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NgModule "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@angular/core"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AppRoutingModule "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./app-routing.module"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AppComponent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./app.component"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HomeComponent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./home/home.component"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AboutComponent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./about/about.component"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  declarations"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AppComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HomeComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AboutComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  imports"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("BrowserModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AppRoutingModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  providers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bootstrap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AppComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppModule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("ul",[s("li",[t._v("模板语法")])]),t._v(" "),s("p",[t._v(t._s(t.变量名)+"，变量在 ts 文件中声明，如下：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnInit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("变量名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("变量值"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ngOnInit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("绑定方法")])]),t._v(" "),s("p",[t._v('(click)="[方法名]",方法在 ts 文件中声明，如下：')]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnInit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ngOnInit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("方法名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//方法体")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("双向绑定")])]),t._v(" "),s("p",[t._v('[(ngModel)]="[变量名]",如下：')]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("[(ngModel)]")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[变量名]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("使用表单，需要在主文件中引入表单模块，如下：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" FormsModule "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/forms'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  imports"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    FormsModule\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"基础概念-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础概念-模块"}},[t._v("#")]),t._v(" 基础概念-模块")]),t._v(" "),s("h3",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("Angular 是模块化的，NgModule 是构成应用的主要功能。NgModule 可以看做是一个容器，在里面是专注于某项功能的 html、样式及 ts 代码。如果 NgModule 之间想要互相调用，则需要在 NgModule 的配置项中导入或导出某个模块，这样 NgModule 将产生层次，以创建应用的 app.module.ts 的 AppModule 为根模块的树状模块依赖关系。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/blog/angular/1.png",alt:"banner"}})]),t._v(" "),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("NgModule 的声明是以装饰器的方法实现的，因此需要在文件中使用@NgModule()装饰器声明这是一个模块定义文件，@NgModule 是一个函数，里面接受以下参数：")]),t._v(" "),s("ol",[s("li",[t._v("*declarations（可声明对象表） —— 那些属于本 NgModule 的组件、指令、管道。")]),t._v(" "),s("li",[t._v("*exports（导出表） —— 那些能在其它模块的组件模板中使用的可声明对象的子集。")]),t._v(" "),s("li",[t._v("*imports（导入表） —— 那些导出了本模块中的组件模板所需的类的其它模块。")]),t._v(" "),s("li",[t._v("providers —— 本模块贡献的那些服务的创建器。 这些服务能被本模块中的任何部分使用。")]),t._v(" "),s("li",[t._v("bootstrap —— 应用的主视图，称为根组件。它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性。")])]),t._v(" "),s("h3",{attrs:{id:"官方模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#官方模块"}},[t._v("#")]),t._v(" 官方模块")]),t._v(" "),s("ol",[s("li",[t._v("BrowserModule：@angular/platform-browser 引入，当你想要在浏览器中运行应用时")]),t._v(" "),s("li",[t._v("CommonModule：@angular/common 引入，当你想要使用 NgIf 和 NgFor 时")]),t._v(" "),s("li",[t._v("FormsModule：@angular/forms 引入，当要构建模板驱动表单时（它包含 NgModel ）")]),t._v(" "),s("li",[t._v("ReactiveFormsModule：@angular/forms 引入，当要构建响应式表单时")]),t._v(" "),s("li",[t._v("RouterModule：@angular/router 引入，要使用路由功能，并且你要用到 RouterLink,.forRoot() 和 .forChild() 时")]),t._v(" "),s("li",[t._v("HttpClientModule：@angular/common/http 引入，当你要和服务器对话时\n推荐使用第一种方法声明服务，因为 Angular 可以通过 shake tree 对服务进行优化。")])]),t._v(" "),s("h3",{attrs:{id:"forroot-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#forroot-模式"}},[t._v("#")]),t._v(" forRoot()模式")]),t._v(" "),s("p",[t._v("RouterModule 中提供了 Router 服务，同时还有一些路由指令，比如 RouterOutlet 和 routerLink 等。应用的根模块导入了 RouterModule，以便应用中有一个 Router 服务，并且让应用的根组件可以访问各个路由器指令。任何一个特性模块也必须导入 RouterModule，这样它们的组件模板中才能使用这些路由器指令。")]),t._v(" "),s("p",[t._v("如果 RouterModule 没有 forRoot()，那么每个特性模块都会实例化一个新的 Router 实例，而这会破坏应用的正常逻辑，因为应用中只能有一个 Router 实例。通过使用 forRoot() 方法，应用的根模块中会导入 RouterModule.forRoot(...)，从而获得一个 Router 实例，而所有的特性模块要导入 RouterModule.forChild(...)，它就不会实例化另外的 Router。")]),t._v(" "),s("h2",{attrs:{id:"基础概念-组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础概念-组件"}},[t._v("#")]),t._v(" 基础概念-组件")]),t._v(" "),s("h3",{attrs:{id:"简介-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介-2"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("Component 是组成模块的主要部分，不同组件与更深层次的模块构成了一个完整的视图。同一视图的组件及模块将会一起创建、更新、销毁。Component 中要声明描述视图的模板，即 html 与 css 文件。然后视图的双向绑定及控制都是由组件来完成。")]),t._v(" "),s("h3",{attrs:{id:"使用-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-2"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("Component 的声明也需要用到装饰器，在文件中使用@Component 装饰器声明这是一个组件定义文件，@Component 中需要组件元数据的配置，配置项如下：")]),t._v(" "),s("ol",[s("li",[t._v("selector：是一个 CSS 选择器，它会告诉 Angular，一旦在模板 HTML 中找到了这个选择器对应的标签，就创建并插入该组件的一个实例。 比如，如果应用的 HTML 中包含"),s("code",[t._v("<app-hero-list></app-hero-list>")]),t._v("，Angular 就会在这些标签中插入一个 HeroListComponent 实例的视图。")]),t._v(" "),s("li",[t._v("templateUrl：该组件的 HTML 模板文件相对于这个组件文件的地址。 另外，你还可以用 template 属性的值来提供内联的 HTML 模板。 这个模板定义了该组件的宿主视图。")]),t._v(" "),s("li",[t._v("styleUrls：该组件的样式文件相对于组件文件的地址，这是一个数组，可以引入多个样式文件。这里也可以使用 style 属性来提供内联的 style 样式。")]),t._v(" "),s("li",[t._v("providers：当前组件所需的服务提供者的一个数组。在这个例子中，它告诉 Angular 该如何提供一个 HeroService 实例，以获取要显示的英雄列表。")])]),t._v(" "),s("h3",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("ol",[s("li",[t._v("Constructor:类的构造器，不属于 Angular 框架的内容，因此不应该在此方法中做任何操作，但是可以在该方法的参数中用来依赖注入。")]),t._v(" "),s("li",[t._v("ngOnChanges()：当 Angular 设置或重新设置数据绑定的输入属性时响应。注意，如果你的组件没有输入，或者你使用它时没有提供任何输入，那么框架就不会调用 ngOnChanges()。")]),t._v(" "),s("li",[t._v("ngOnInit()：在第一轮 ngOnChanges() 完成之后调用，只调用一次。在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。")]),t._v(" "),s("li",[t._v("ngDoCheck()：紧跟在每次执行变更检测时的 ngOnChanges() 和 首次执行变更检测时的 ngOnInit() 后调用。检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应。")]),t._v(" "),s("li",[t._v("ngAfterContentInit()：第一次 ngDoCheck() 之后，当 Angular 把外部内容投影进组件视图或指令所在的视图之后调用，只调用一次。")]),t._v(" "),s("li",[t._v("ngAfterContentChecked()：ngAfterContentInit() 和每次 ngDoCheck() 之后，每当 Angular 检查完被投影到组件或指令中的内容之后调用。")]),t._v(" "),s("li",[t._v("ngAfterViewInit():第一次 ngAfterContentChecked() 之后，当 Angular 初始化完组件视图及其子视图或包含该指令的视图之后调用，只调用一次。")]),t._v(" "),s("li",[t._v("ngAfterViewChecked():ngAfterViewInit() 和每次 ngAfterContentChecked() 之后，每当 Angular 做完组件视图和子视图或包含该指令的视图的变更检测之后调用。")]),t._v(" "),s("li",[t._v("ngOnDestroy():在 Angular 销毁指令或组件之前立即调用。每当 Angular 每次销毁指令/组件之前调用并清扫。 在这儿取消订阅可观察对象和分离事件处理器，以防内存泄漏。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/blog/angular/2.png",alt:"banner"}})]),t._v(" "),s("h3",{attrs:{id:"组件视图间交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件视图间交互"}},[t._v("#")]),t._v(" 组件视图间交互")]),t._v(" "),s("h4",{attrs:{id:"输入绑定数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入绑定数据"}},[t._v("#")]),t._v(" 输入绑定数据")]),t._v(" "),s("p",[t._v("通过@Input()装饰器来声明一个变量作为输入属性，该属性应该在父组件中的子组件标签上绑定。")]),t._v(" "),s("h4",{attrs:{id:"输出绑定方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出绑定方法"}},[t._v("#")]),t._v(" 输出绑定方法")]),t._v(" "),s("p",[t._v("通过@Output()装饰器来声明一个变量作为输出属性，并使用 new EventEmitter"),s("T",[t._v("()来创建一个事件发射器，在父组件的子组件标签上应该绑定一个方法。在子组件中触发事件需要用 emit()方法，如果需要传递参数则直接带在括号中，然后在父组件绑定时括号中填写$event。")])],1),t._v(" "),s("p",[s("img",{attrs:{src:"/img/blog/angular/3.png",alt:"banner"}})]),t._v(" "),s("h2",{attrs:{id:"基础概念-服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础概念-服务"}},[t._v("#")]),t._v(" 基础概念-服务")]),t._v(" "),s("h3",{attrs:{id:"简介-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介-3"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("服务是一个广义的概念，它包括应用所需的任何值、函数或特性。狭义的服务是一个明确定义了用途的类。它应该做一些具体的事，并做好。理想情况下，组件的工作只管用户体验，而不用顾及其它。 它应该提供用于数据绑定的属性和方法，以便作为视图（由模板渲染）和应用逻辑（通常包含一些模型的概念）的中介者。组件应该把诸如从服务器获取数据、验证用户输入或直接往控制台中写日志等工作委托给各种服务。通过把各种处理任务定义到可注入的服务类中，你可以让它被任何组件使用。")]),t._v(" "),s("h3",{attrs:{id:"使用-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-3"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("服务的声明同样也需要装饰器来完成，服务的声明采用了依赖注入的方式，通过@Injectable()装饰器声明。依赖需要注册一个提供者，分为以下三种情况：")]),t._v(" "),s("ol",[s("li",[t._v("根注入器\n这是 Angular CLI 创建服务后默认的方式，是把服务注册在了应用的根注入器中，这样可以让所有组件使用此服务，随着应用创建。")]),t._v(" "),s("li",[t._v("模块注入\n可以通过@NgModule()装饰器的 providers 属性注册服务为模块服务，这会让该服务对模块中的所有组件可用，随着模块创建。")]),t._v(" "),s("li",[t._v("组件注入\n可以通过@Component()装饰器的 providers 属性注册服务为组件服务，这样的服务只有该组件可以使用，随着组件创建。")])]),t._v(" "),s("h3",{attrs:{id:"单例服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单例服务"}},[t._v("#")]),t._v(" 单例服务")]),t._v(" "),s("p",[t._v("在 Angular 中有两种方式创建单例服务（指在应用中只存在一个实例的服务），分别是：")]),t._v(" "),s("ol",[s("li",[t._v('Angular6 之后\n把 @Injectable() 中的 providedIn 属性设置为 "root"。')]),t._v(" "),s("li",[t._v("Angular6 及之前\n把该服务包含在 AppModule 或某个只会被 AppModule 导入的模块中。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/blog/angular/4.png",alt:"banner"}})]),t._v(" "),s("h2",{attrs:{id:"基础概念-rxjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础概念-rxjs"}},[t._v("#")]),t._v(" 基础概念-RxJS")]),t._v(" "),s("h3",{attrs:{id:"简介-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介-4"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("响应式编程是一种面向数据流和变更传播的异步编程范式。RxJS（响应式扩展的 JavaScript 版）是一个使用可观察对象进行响应式编程的库，它让组合异步代码和基于回调的代码变得更简单。")]),t._v(" "),s("h3",{attrs:{id:"使用-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-4"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@angular/core"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Observable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rxjs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  selector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app-watch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  templateUrl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./watch.component.html"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WatchComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  watchValue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  watchValue$"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Observable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("number"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startWatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("watchValue$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("watchValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("watchValue$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("watchValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"/img/blog/angular/5.png",alt:"banner"}})]),t._v(" "),s("h2",{attrs:{id:"基础概念-changedetectorref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础概念-changedetectorref"}},[t._v("#")]),t._v(" 基础概念-ChangeDetectorRef")]),t._v(" "),s("h3",{attrs:{id:"简介-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介-5"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("Angular 各种视图的基础类，提供变更检测功能。 变更检测树会收集要检查的所有视图。 使用这些方法从树中添加或移除视图、初始化变更检测并显式地把这些视图标记为脏的，意思是它们变了、需要重新渲染。")]),t._v(" "),s("h3",{attrs:{id:"使用-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-5"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("ol",[s("li",[t._v("markForCheck()\n当视图使用 OnPush（checkOnce）变更检测策略时，把该视图显式标记为已更改，以便它再次进行检查。")]),t._v(" "),s("li",[t._v("detach()\n从变更检测树中分离开视图。 已分离的视图在重新附加上去之前不会被检查。 与 detectChanges() 结合使用，可以实现局部变更检测。")]),t._v(" "),s("li",[t._v("detectChanges()\n检查该视图及其子视图。与 detach 结合使用可以实现局部变更检测。")])]),t._v(" "),s("Valine")],1)}),[],!1,null,null,null);a.default=r.exports}}]);