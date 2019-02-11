(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{175:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("You can debug the renderer process using "),e("a",{attrs:{href:"https://github.com/vuejs/vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Devtools"),e("OutboundLink")],1),t._v(". Vue Devtools are automatically installed for you (powered by "),e("a",{attrs:{href:"https://github.com/MarshallOfSound/electron-devtools-installer",target:"_blank",rel:"noopener noreferrer"}},[t._v("electron-devtools-installer"),e("OutboundLink")],1),t._v(").")]),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("First, read "),e("a",{attrs:{href:"https://electronjs.org/docs/tutorial/debugging-main-process#command-line-switches",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electron's instructions"),e("OutboundLink")],1),t._v(" for debugging the main process. Before launching Electron through your debugger, run "),e("code",[t._v("electron:serve")]),t._v(" in debug mode with the "),e("code",[t._v("--debug")]),t._v(" argument. This will prevent Electron from launching automatically and enable source map support. Make sure to set the background file "),e("code",[t._v("dist_electron/background.js")]),t._v(".")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("Before continuing, read about "),e("a",{attrs:{href:"https://github.com/electron/spectron",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spectron"),e("OutboundLink")],1),t._v(". This guide assumes basic knowledge about using Spectron.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("DevTools are not opened as "),e("code",[t._v("IS_TEST")]),t._v(" env variable is set to true. If devtools are opened, Spectron throws an error. See "),e("a",{attrs:{href:"https://github.com/electron/spectron/issues/174",target:"_blank",rel:"noopener noreferrer"}},[t._v("this issue"),e("OutboundLink")],1),t._v(" for more details.")])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"testing-and-debugging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing-and-debugging","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing and Debugging")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"debugging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging","aria-hidden":"true"}},[this._v("#")]),this._v(" Debugging")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"renderer-process-main-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#renderer-process-main-app","aria-hidden":"true"}},[this._v("#")]),this._v(" Renderer Process (Main App)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"main-process-background-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#main-process-background-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Main Process (Background File)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("If you are testing with spectron, make sure to set "),s("code",[this._v("process.env.IS_TEST")]),this._v(" to "),s("code",[this._v("true")]),this._v(". This will prevent dev tools from being loaded which results in errors.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("If you don't want to use Spectron, you can still use this function, just set "),s("code",[this._v("noSpectron")]),this._v(" to "),s("code",[this._v("true")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("vue-cli-plugin-electron-builder exports a "),s("code",[this._v("testWithSpectron")]),this._v(" function. This function will run "),s("code",[this._v("electron:serve")]),this._v(", but instead of launching electron, a new Spectron Application will be created and attached to the dev server. This can be used to run e2e tests with Spectron.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This example uses Jest, but any testing framework will work as well")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" testWithSpectron "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-cli-plugin-electron-builder'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a window is created'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" stdout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stopServe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("testWithSpectron")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// stdout is the log of electron:serve")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`electron:serve returned: ")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("stdout"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// url is the url for the dev server created with electron:serve")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`the dev server url is: ")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("url"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app is a spectron instance. It is attached to the dev server, launched, and waited for to load.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWindowCount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Before your tests end, make sure to stop the dev server and spectron")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopServe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("testWithSpectron")]),this._v(" takes a config argument. That config argument has properties as defined:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" testWithSpectron "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-cli-plugin-electron-builder'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("testWithSpectron")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  noSpectron"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Disables launching of Spectron. Enable this if you want to launch spectron yourself.")]),t._v("\n  noStart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do not start Spectron app or wait for it to load. You will have to call app.start() and app.client.waitUntilWindowLoaded() before running any tests.")]),t._v("\n  forceDev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Run dev server in development mode. By default it is run in production (serve --mode production).")]),t._v("\n  mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set custom Vue env mode.")]),t._v("\n  spectronOptions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Custom options to be passed to Spectron. Defaults are already set, only use this if you need something customized.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);a.options.__file="testingAndDebugging.md";s.default=a.exports}}]);