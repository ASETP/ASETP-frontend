(function(){"use strict";var t={9895:function(t,e,n){var i=n(144),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],r=n(3736),a={},l=(0,r.Z)(a,o,s,!1,null,null,null),u=l.exports,c=n(8345),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("ChatWindow")],1)},d=[],f=function(){var t=this,e=t._self._c;return e("el-container",{staticClass:"el-container",staticStyle:{"min-height":"100%","min-width":"100%"}},[e("div",{staticClass:"chat-window"},[e("el-container",{staticClass:"message-container",staticStyle:{height:"540px"}},[e("el-header",{staticStyle:{height:"20px","margin-top":"50px","line-height":"1.7",font:"20px Extra large"}},[t._v(" Stack Overflow 问答 ")]),e("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"infinite-list",staticStyle:{height:"470px",width:"460px",overflow:"auto"}},t._l(t.messages,(function(n){return e("li",{key:n.id,staticClass:"message"},[n.isMe?e("div",{staticClass:"message-text mine"},[e("p",{staticStyle:{"word-wrap":"break-word","font-size":"small"}},[t._v(t._s(n.text))])]):e("div",{staticClass:"message-text"},[e("p",{staticStyle:{"word-wrap":"break-word","font-size":"small"}},[t._v(t._s(n.text))])])])})),0)],1),e("form",{staticClass:"input-form",staticStyle:{width:"500px","margin-left":"10px","margin-bottom":"15px"}},[e("el-input",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{type:"textarea",rows:3,placeholder:"Enter question..."},model:{value:t.inputText,callback:function(e){t.inputText=e},expression:"inputText"}}),e("div",{staticStyle:{"margin-top":"10px"}},[e("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.sendMessage}},[t._v(" 发送 ")]),e("el-button",{attrs:{plain:"",size:"mini",type:"info"},on:{click:t.openShow}},[t._v(" 可视化 ")])],1)],1)],1)])},h=[],m=(n(560),n(6154));const g=m.Z.create({baseURL:"/api",timeout:1e5});g.interceptors.request.use((t=>(t.headers["Content-Type"]="application/json;charset=utf-8",t)),(t=>Promise.reject(t))),g.interceptors.response.use((t=>{let e=t.data;return"blob"===t.config.responseType||"string"===typeof e&&(e=e?JSON.parse(e):e),e}),(t=>(console.log("err"+t),Promise.reject(t))));var v=g,w={data(){return{inputText:"",messages:[],count:0,loading:!1}},methods:{load(){this.count+=2},sendMessage(){this.inputText.trim()&&(this.loading=!0,this.messages.push({id:Date.now(),text:this.inputText,isMe:!0}),v.get("/query/"+this.inputText).then((t=>{console.log(t),this.messages.push({id:Date.now(),text:t.answer,isMe:!1}),this.loading=!1,this.inputText=""})))},test(){this.inputText.trim()&&(this.loading=!0,this.messages.push({id:Date.now(),text:this.inputText,isMe:!0}),v.get("/").then((t=>{console.log(t),this.messages.push({id:Date.now(),text:t.message,isMe:!1}),this.loading=!1,this.inputText=""})))},openShow(){window.location.href="https://workspace-preview.neo4j.io",window.open("https://workspace-preview.neo4j.io/workspace/query","_blank")}}},x=w,y=(0,r.Z)(x,f,h,!1,null,"762221d8",null),b=y.exports,_={name:"HomeView",components:{ChatWindow:b}},T=_,S=(0,r.Z)(T,p,d,!1,null,null,null),k=S.exports;i["default"].use(c.ZP);const O=[{path:"/",name:"home",component:k}],C=new c.ZP({mode:"history",base:"/",routes:O});var j=C,M=n(4720),P=n.n(M);i["default"].use(P()),i["default"].prototype.request=v,i["default"].config.productionTip=!1,new i["default"]({router:j,render:t=>t(u)}).$mount("#app")}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,i,o,s){if(!i){var r=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],s=t[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(a=!1,s<r&&(r=s));if(a){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[i,o,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,s,r=i[0],a=i[1],l=i[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var c=l(n)}for(e&&e(i);u<r.length;u++)s=r[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},i=self["webpackChunkvue"]=self["webpackChunkvue"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9895)}));i=n.O(i)})();
//# sourceMappingURL=app.aeaad413.js.map