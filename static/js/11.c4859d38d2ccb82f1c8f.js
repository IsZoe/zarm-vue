webpackJsonp([11],{187:function(n,e,t){var s=t(131)(t(234),t(307),null,null,null);n.exports=s.exports},200:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(208);t.n(s);e.default={data:function(){return{windowHeight:window.innerHeight}}}},201:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(209);t.n(s);e.default={}},202:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(210);t.n(s);e.default={props:["title"]}},203:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,".app-container{position:relative;background-color:#f6f6f6}.app-container .github{position:absolute;right:10px;top:10px}","",{version:3,sources:["/Users/chrisHchen/Desktop/gh-pages/src/styles/components/src/styles/components/Container.scss","/Users/chrisHchen/Desktop/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,eACE,kBAAkB,AAClB,wBAAyB,CAO1B,AATD,uBAKI,kBAAkB,AAClB,WCPe,ADQf,QCRe,CDShB",file:"Container.scss",sourcesContent:['@import "../core/func";\n\n.app-container {\n  position: relative;\n  background-color: #f6f6f6;\n\n  .github {\n    position: absolute;\n    right: r(10);\n    top: r(10);\n  }\n}\n\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},204:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,"footer{text-align:center}.copyright{display:inline-block;margin:30px auto 50px;color:#ccc}.copyright-cn{font-size:14px}.copyright-en{font-size:12px}","",{version:3,sources:["/Users/chrisHchen/Desktop/gh-pages/src/styles/components/src/styles/components/Footer.scss","/Users/chrisHchen/Desktop/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,OACE,iBAAkB,CACnB,AAED,WACE,qBAAqB,AACrB,sBAA6B,AAC7B,UAAW,CASZ,AAPC,cACE,cCXe,CDYhB,AAED,cACE,cCfe,CDgBhB",file:"Footer.scss",sourcesContent:['@import "../core/func";\n\nfooter {\n  text-align: center;\n}\n\n.copyright {\n  display: inline-block;\n  margin: r(30) auto r(50) auto;\n  color: #ccc;\n\n  &-cn {\n    font-size: r(14);\n  }\n\n  &-en {\n    font-size: r(12);\n  }\n}',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},205:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,"header{padding:15px}","",{version:3,sources:["/Users/chrisHchen/Desktop/gh-pages/src/styles/components/src/styles/components/Header.scss","/Users/chrisHchen/Desktop/gh-pages/src/styles/components/src/styles/core/func.scss"],names:[],mappings:"AAEA,OACE,YCFiB,CDGlB",file:"Header.scss",sourcesContent:['@import "../core/func";\n\nheader {\n  padding: r(15);\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},206:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"PageFooter.vue",sourceRoot:""}])},207:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"PageHeader.vue",sourceRoot:""}])},208:function(n,e,t){var s=t(203);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(177)("800fcacc",s,!0)},209:function(n,e,t){var s=t(204);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(177)("0a81e2ac",s,!0)},210:function(n,e,t){var s=t(205);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(177)("ce2f83c8",s,!0)},211:function(n,e,t){var s=t(206);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(177)("6c761514",s,!0)},212:function(n,e,t){var s=t(207);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(177)("0f5d00fc",s,!0)},213:function(n,e,t){var s=t(131)(t(200),t(217),null,null,null);n.exports=s.exports},214:function(n,e,t){function s(n){t(211)}var o=t(131)(t(201),t(216),s,null,null);n.exports=o.exports},215:function(n,e,t){function s(n){t(212)}var o=t(131)(t(202),t(218),s,null,null);n.exports=o.exports},216:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("footer",[t("div",{staticClass:"copyright"},[t("div",{staticClass:"copyright-cn"},[n._v("众安·体验设计中心")]),n._v(" "),t("div",{staticClass:"copyright-en"},[n._v("Zhongan UX Densign")])])])}]}},217:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container",style:{minHeight:n.windowHeight+"px"}},[t("a",{staticClass:"github",attrs:{href:"https://github.com/chrisHchen/zarm-vue"}},[t("svg",{attrs:{"aria-hidden":"true",height:"32",version:"1.1",viewBox:"0 0 16 16",width:"32",fill:"#42b983"}},[t("path",{attrs:{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),n._v(" "),n._t("default")],2)},staticRenderFns:[]}},218:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;return(n._self._c||e)("header",{staticClass:"Header"},[n._v(n._s(n.title))])},staticRenderFns:[]}},219:function(n,e,t){e=n.exports=t(176)(!0),e.push([n.i,".badge-page .custom-panel{display:flex;justify-content:space-between;padding:25px;background:#fff}.badge-page .box-item{width:30px;height:30px;background:#ddd}","",{version:3,sources:["/Users/chrisHchen/Desktop/gh-pages/src/styles/pages/src/styles/pages/BadgePage.scss","/Users/chrisHchen/Desktop/gh-pages/src/styles/pages/src/styles/core/func.scss"],names:[],mappings:"AAEA,0BAEI,aAAa,AACb,8BAA8B,AAC9B,aCLe,ADMf,eAAgB,CACjB,AANH,sBAUM,WCXa,ADYb,YCZa,ADab,eAAgB,CACjB",file:"BadgePage.scss",sourcesContent:['@import "../core/func";\n\n.badge-page {\n  .custom-panel {\n    display: flex;\n    justify-content: space-between;\n    padding: r(25);\n    background: #fff;\n  }\n\n  .box {\n    &-item {\n      width: r(30);\n      height: r(30);\n      background: #ddd;\n    }\n  }\n}\n',"@function r($px) {\n  @return $px * 1px;\n}\n\n/*\n$ratio: 750/640;\n$base-fontSize: 14;\n@function r($px) {\n  @if $px != 0 {\n    @return $px / $ratio / $base-fontSize * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n\n/*\n  阿里flexible方案，详见 https://github.com/amfe/lib-flexible\n*/\n/*\n@function r($px) {\n  @if $px != 0 {\n    @return $px * 2 / 75 * 1rem;\n  }\n  @else {\n    @return 0;\n  }\n}\n*/\n"],sourceRoot:""}])},220:function(n,e,t){var s=t(219);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t(177)("67d6762b",s,!0)},234:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(213),o=t.n(s),i=t(215),r=t.n(i),a=t(214),l=t.n(a),c=t(220);t.n(c);e.default={components:{Container:o.a,PageHeader:r.a,PageFooter:l.a},data:function(){return{visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1,visible6:!1,visible7:!1}},methods:{handleClose:function(n,e){console.log(n)},handleOk:function(){alert("ok")},handleCancel:function(){this.visible7=!1}}}},307:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("Container",{staticClass:"modal-page"},[t("PageHeader",{attrs:{title:"模态框 Modal"}}),n._v(" "),t("main",[t("div",[t("za-panel",[t("za-panel-header",[t("za-panel-title",[n._v("基本")])],1),n._v(" "),t("za-panel-body",[t("za-cell",[t("za-button",{attrs:{size:"xs"},on:{click:function(e){n.visible1=!0}},slot:"description"},[n._v("开启")]),n._v("\n            普通\n          ")],1),n._v(" "),t("za-cell",[t("za-button",{attrs:{size:"xs"},on:{click:function(e){n.visible2=!0}},slot:"description"},[n._v("开启")]),n._v("\n            圆角\n          ")],1),n._v(" "),t("za-cell",[t("za-button",{attrs:{size:"xs"},on:{click:function(e){n.visible3=!0}},slot:"description"},[n._v("开启")]),n._v("\n            遮罩层可关闭\n          ")],1),n._v(" "),t("za-cell",[t("za-button",{attrs:{size:"xs"},on:{click:function(e){n.visible4=!0}},slot:"description"},[n._v("开启")]),n._v("\n            无头部\n          ")],1),n._v(" "),t("za-cell",[t("za-button",{attrs:{size:"xs"},on:{click:function(e){n.visible5=!0}},slot:"description"},[n._v("开启")]),n._v("\n            动画效果\n          ")],1)],1)],1),n._v(" "),t("za-panel",[t("za-panel-header",[t("za-panel-title",[n._v("特定场景")])],1),n._v(" "),t("za-panel-body",[t("za-cell",[t("za-button",{attrs:{size:"xs",theme:"warning"},on:{click:function(e){n.visible6=!0}},slot:"description"},[n._v("开启")]),n._v("\n            警告框 Alert\n          ")],1),n._v(" "),t("za-cell",[t("za-button",{attrs:{size:"xs",theme:"warning"},on:{click:function(e){n.visible7=!0}},slot:"description"},[n._v("开启")]),n._v("\n            确认框 Confirm\n          ")],1)],1)],1)],1),n._v(" "),t("za-modal",{attrs:{visible:n.visible1},on:{"update:visible":function(e){n.visible1=e},"modal-close":n.handleClose}},[t("za-modal-header",{attrs:{title:"标题",showClose:!0}}),n._v(" "),t("za-modal-body",[n._v("模态框内容")])],1),n._v(" "),t("za-modal",{attrs:{visible:n.visible2,radius:""},on:{"update:visible":function(e){n.visible2=e},"modal-close":n.handleClose}},[t("za-modal-header",{attrs:{title:"标题",showClose:!0}}),n._v(" "),t("za-modal-body",[n._v("圆角")])],1),n._v(" "),t("za-modal",{attrs:{visible:n.visible3,closeOnClickModal:!0},on:{"update:visible":function(e){n.visible3=e},"modal-close":n.handleClose}},[t("za-modal-header",{attrs:{title:"标题",showClose:!0}}),n._v(" "),t("za-modal-body",[n._v("遮罩层可关闭")])],1),n._v(" "),t("za-modal",{attrs:{visible:n.visible4,closeOnClickModal:!0},on:{"update:visible":function(e){n.visible4=e},"modal-close":n.handleClose}},[t("za-modal-body",[n._v("无头部")])],1),n._v(" "),t("za-modal",{attrs:{visible:n.visible5,animationType:"rotate",closeOnClickModal:!0},on:{"update:visible":function(e){n.visible5=e},"modal-close":n.handleClose}},[t("za-modal-header",{attrs:{title:"标题",showClose:!0}}),n._v(" "),t("za-modal-body",[n._v("\n        当前使用的是rotate旋转效果。"),t("br"),t("br"),n._v("\n        支持多种动画效果："),t("br"),n._v("\n        zoom：缩放效果（默认）"),t("br"),n._v("\n        rotate：旋转效果"),t("br"),n._v("\n        fade：淡出淡入效果"),t("br"),n._v("\n        door：开关门效果"),t("br"),n._v("\n        flip：翻转效果"),t("br"),n._v("\n        moveUp、moveDown、moveLeft、moveRight：移出移入效果"),t("br"),n._v("\n        slideUp、slideDown、slideLeft、slideRight：滑出滑入效果"),t("br")])],1),n._v(" "),t("za-alert",{attrs:{visible:n.visible6,radius:"",title:"警告",message:"这里是警告信息"},on:{"update:visible":function(e){n.visible6=e},"alert-close":n.handleClose}}),n._v(" "),t("za-confirm",{attrs:{visible:n.visible7,title:"确认信息",message:"你确定要这样做吗？","on-ok":n.handleOk,"on-cancel":n.handleCancel},on:{"update:visible":function(e){n.visible7=e}}})],1),n._v(" "),t("PageFooter")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=11.c4859d38d2ccb82f1c8f.js.map