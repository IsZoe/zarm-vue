webpackJsonp([14],{184:function(n,e,t){var r=t(131)(t(231),t(313),null,null,null);n.exports=r.exports},200:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(208);t.n(r);e.default={data:function(){return{windowHeight:window.innerHeight}}}},201:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(209);t.n(r);e.default={}},202:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(210);t.n(r);e.default={props:["title"]}},203:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,".app-container{position:relative;background-color:#f6f6f6}.app-container .github{position:absolute;right:10px;top:10px}","",{version:3,sources:["/Users/chrisHchen/Desktop/gh-pages/src/styles/components/src/styles/components/Container.scss","/Users/chrisHchen/Desktop/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,eACE,kBAAkB,AAClB,wBAAyB,CAO1B,AATD,uBAKI,kBAAkB,AAClB,WCPe,ADQf,QCRe,CDShB",file:"Container.scss",sourcesContent:['@import "../core/func";\n\n.app-container {\n  position: relative;\n  background-color: #f6f6f6;\n\n  .github {\n    position: absolute;\n    right: r(10);\n    top: r(10);\n  }\n}\n\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},204:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,"footer{text-align:center}.copyright{display:inline-block;margin:30px auto 50px;color:#ccc}.copyright-cn{font-size:14px}.copyright-en{font-size:12px}","",{version:3,sources:["/Users/chrisHchen/Desktop/gh-pages/src/styles/components/src/styles/components/Footer.scss","/Users/chrisHchen/Desktop/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,OACE,iBAAkB,CACnB,AAED,WACE,qBAAqB,AACrB,sBAA6B,AAC7B,UAAW,CASZ,AAPC,cACE,cCXe,CDYhB,AAED,cACE,cCfe,CDgBhB",file:"Footer.scss",sourcesContent:['@import "../core/func";\n\nfooter {\n  text-align: center;\n}\n\n.copyright {\n  display: inline-block;\n  margin: r(30) auto r(50) auto;\n  color: #ccc;\n\n  &-cn {\n    font-size: r(14);\n  }\n\n  &-en {\n    font-size: r(12);\n  }\n}',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},205:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,"header{padding:15px}","",{version:3,sources:["/Users/chrisHchen/Desktop/gh-pages/src/styles/components/src/styles/components/Header.scss","/Users/chrisHchen/Desktop/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,OACE,YCFiB,CDGlB",file:"Header.scss",sourcesContent:['@import "../core/func";\n\nheader {\n  padding: r(15);\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},206:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"PageFooter.vue",sourceRoot:""}])},207:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"PageHeader.vue",sourceRoot:""}])},208:function(n,e,t){var r=t(203);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t(177)("800fcacc",r,!0)},209:function(n,e,t){var r=t(204);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t(177)("0a81e2ac",r,!0)},210:function(n,e,t){var r=t(205);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t(177)("ce2f83c8",r,!0)},211:function(n,e,t){var r=t(206);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t(177)("6c761514",r,!0)},212:function(n,e,t){var r=t(207);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t(177)("0f5d00fc",r,!0)},213:function(n,e,t){var r=t(131)(t(200),t(217),null,null,null);n.exports=r.exports},214:function(n,e,t){function r(n){t(211)}var s=t(131)(t(201),t(216),r,null,null);n.exports=s.exports},215:function(n,e,t){function r(n){t(212)}var s=t(131)(t(202),t(218),r,null,null);n.exports=s.exports},216:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("footer",[t("div",{staticClass:"copyright"},[t("div",{staticClass:"copyright-cn"},[n._v("众安·体验设计中心")]),n._v(" "),t("div",{staticClass:"copyright-en"},[n._v("Zhongan UX Densign")])])])}]}},217:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container",style:{minHeight:n.windowHeight+"px"}},[t("a",{staticClass:"github",attrs:{href:"https://github.com/chrisHchen/zarm-vue"}},[t("svg",{attrs:{"aria-hidden":"true",height:"32",version:"1.1",viewBox:"0 0 16 16",width:"32",fill:"#42b983"}},[t("path",{attrs:{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),n._v(" "),n._t("default")],2)},staticRenderFns:[]}},218:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;return(n._self._c||e)("header",{staticClass:"Header"},[n._v(n._s(n.title))])},staticRenderFns:[]}},231:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(213),s=t.n(r),o=t(215),i=t.n(o),a=t(214),c=t.n(a),l=t(285);t.n(l);e.default={components:{Container:s.a,PageHeader:i.a,PageFooter:c.a},data:function(){return{}},methods:{}}},269:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,".index-page .brand{padding:30px 30px 0}.index-page .brand-title{font-size:30px}.index-page .brand-description{font-size:14px}.index-page main{padding:15px}.index-page .za-panel-body{border-radius:2px}.index-page .za-panel-body:after{display:none}.index-page .za-cell{background-color:transparent}.index-page .za-cell:first-of-type:after{display:none}","",{version:3,sources:["/Users/chrisHchen/Desktop/gh-pages/src/styles/pages/src/styles/pages/IndexPage.scss","/Users/chrisHchen/Desktop/gh-pages/src/styles/pages/src/styles/core/func.scss"],names:[],mappings:"AAEA,mBAEI,mBCHe,CDYhB,AAXH,yBAKM,cCNa,CDOd,AANL,+BASM,cCVa,CDWd,AAVL,iBAcI,YCfe,CDgBhB,AAfH,2BAkBI,iBCnBe,CDwBhB,AAvBH,iCAqBM,YAAa,CACd,AAtBL,qBA0BI,4BAA6B,CAO9B,AAjCH,yCA8BQ,YAAa,CACd",file:"IndexPage.scss",sourcesContent:['@import "../core/func";\n\n.index-page {\n  .brand {\n    padding: r(30) r(30) 0 r(30);\n\n    &-title {\n      font-size: r(30);\n    }\n\n    &-description {\n      font-size: r(14);\n    }\n  }\n\n  main {\n    padding: r(15);\n  }\n\n  .za-panel-body {\n    border-radius: r(2);\n\n    &:after {\n      display: none;\n    }\n  }\n\n  .za-cell {\n    background-color: transparent;\n\n    &:first-of-type {\n      &:after {\n        display: none;\n      }\n    }\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},285:function(n,e,t){var r=t(269);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t(177)("52af949a",r,!0)},313:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("Container",{staticClass:"index-page"},[t("header",[t("section",{staticClass:"brand"},[t("div",{staticClass:"brand-title"},[n._v("Zarm-vue UI")]),n._v(" "),t("div",{staticClass:"brand-description"},[n._v("众安科技移动端组件库 (zarm in Vue.js)")])])]),n._v(" "),t("main",[t("za-panel",[t("za-panel-header",[t("za-panel-title",[n._v("表单组件")])],1),n._v(" "),t("za-panel-body",[t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/checkbox")}}},[n._v("\n          复选框 Checkbox\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""}},[t("router-link",{staticStyle:{width:"100%"},attrs:{to:"input",tag:"div"}},[n._v("文本框 Input")])],1),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/picker")}}},[n._v("\n          选择器 Picker\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/radio")}}},[n._v("\n          单选框 Radio\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/stepper")}}},[n._v("\n          步进器 Stepper\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/switch")}}},[n._v("\n          开关 Switch\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/uploader")}}},[n._v("\n          上传组件 Uploader\n        ")])],1)],1),n._v(" "),t("za-panel",[t("za-panel-header",[t("za-panel-title",[n._v("操作反馈")])],1),n._v(" "),t("za-panel-body",[t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/actionsheet")}}},[n._v("\n          动作面板 ActionSheet\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/button")}}},[n._v("\n          按钮 Button\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/modal")}}},[n._v("\n          模态框 Modal\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/popup")}}},[n._v("\n          弹出框 Popup\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/swipeaction")}}},[n._v("\n          滑动操作 SwipeAction\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/toast")}}},[n._v("\n          轻提示 Toast\n        ")])],1)],1),n._v(" "),t("za-panel",[t("za-panel-header",[t("za-panel-title",[n._v("数据展示")])],1),n._v(" "),t("za-panel-body",[t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/badge")}}},[n._v("\n          徽标 Badge\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/cell")}}},[n._v("\n          列表项 Cell\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/icon")}}},[n._v("\n          图标 Icon\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/message")}}},[n._v("\n          消息 Message\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/progress")}}},[n._v("\n          进度条 Progress\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/spinner")}}},[n._v("\n          指示器 Spinner\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/swipe")}}},[n._v("\n          图片轮播 swipe\n        ")]),n._v(" "),t("za-cell",{attrs:{hasArrow:""},on:{click:function(e){n.$router.push("/tabs")}}},[n._v("\n          标签页 Tabs\n        ")])],1)],1)],1),n._v(" "),t("PageFooter")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=14.fe19fbd8cee2fcdbec15.js.map