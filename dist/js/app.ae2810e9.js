(function(){"use strict";var e={9623:function(e,t,n){var i=n(144),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o=n(3736),u={},a=(0,o.Z)(u,s,r,!1,null,null,null),c=a.exports,l=n(8345),f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("ChatWindow")],1)},p=[],d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"chat-window"},[t("div",{staticClass:"message-container"},e._l(e.messages,(function(n){return t("div",{key:n.id,staticClass:"message"},[n.isMe?t("div",{staticClass:"message-text mine"},[e._v(e._s(n.text))]):t("div",{staticClass:"message-text"},[e._v(e._s(n.text))])])})),0),t("form",{staticClass:"input-form"},[t("el-input",{attrs:{type:"textarea",rows:2,placeholder:"Enter question..."},model:{value:e.inputText,callback:function(t){e.inputText=t},expression:"inputText"}}),t("div",[t("el-button",{attrs:{size:"mini"},on:{click:e.sendMessage}},[e._v(" 发送 ")]),t("el-button",{attrs:{size:"mini"},on:{click:e.test}},[e._v(" 测试 ")])],1)],1)])},h=[],v=(n(560),n(6154));const m=v.Z.create({baseURL:"/api",timeout:1e5});m.interceptors.request.use((e=>(e.headers["Content-Type"]="application/json;charset=utf-8",e)),(e=>Promise.reject(e))),m.interceptors.response.use((e=>{let t=e.data;return"blob"===e.config.responseType||"string"===typeof t&&(t=t?JSON.parse(t):t),t}),(e=>(console.log("err"+e),Promise.reject(e))));var g=m,x={data(){return{inputText:"",messages:[{id:1,text:"请输入问题",isMe:!1}]}},methods:{sendMessage(){this.inputText.trim()&&(this.messages.push({id:Date.now(),text:this.inputText,isMe:!0}),g.get("/query/"+this.inputText).then((e=>{console.log(e),this.messages.push({id:Date.now(),text:e.answer,isMe:!1})})),this.inputText="")},test(){this.inputText.trim()&&(this.messages.push({id:Date.now(),text:this.inputText,isMe:!0}),g.get("/").then((e=>{console.log(e),this.messages.push({id:Date.now(),text:e.message,isMe:!1})})),this.inputText="")}}},b=x,w=(0,o.Z)(b,d,h,!1,null,"e631be52",null),y=w.exports,T={name:"HomeView",components:{ChatWindow:y}},_=T,O=(0,o.Z)(_,f,p,!1,null,null,null),C=O.exports;i["default"].use(l.ZP);const j=[{path:"/",name:"home",component:C}],M=new l.ZP({mode:"history",base:"/",routes:j});var k=M,P=n(4720),S=n.n(P);i["default"].use(S()),i["default"].prototype.request=g,i["default"].config.productionTip=!1,new i["default"]({router:k,render:e=>e(c)}).$mount("#app")}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,i,s,r){if(!i){var o=1/0;for(l=0;l<e.length;l++){i=e[l][0],s=e[l][1],r=e[l][2];for(var u=!0,a=0;a<i.length;a++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](i[a])}))?i.splice(a--,1):(u=!1,r<o&&(o=r));if(u){e.splice(l--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[i,s,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,r,o=i[0],u=i[1],a=i[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in u)n.o(u,s)&&(n.m[s]=u[s]);if(a)var l=a(n)}for(t&&t(i);c<o.length;c++)r=o[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},i=self["webpackChunkvue"]=self["webpackChunkvue"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9623)}));i=n.O(i)})();
//# sourceMappingURL=app.ae2810e9.js.map