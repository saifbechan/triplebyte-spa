(this["webpackJsonptriplebytes-spa"]=this["webpackJsonptriplebytes-spa"]||[]).push([[0],{20:function(n,e,t){n.exports=t(31)},29:function(n,e,t){},31:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(9),o=t.n(c),l=t(4),u=(t(29),{TOGGLE_BYTE:"TOGGLE_BYTE"}),i=t(2),s=t(3);function f(){var n=Object(i.a)(["\n  color: white;\n  cursor: pointer;\n  display: inline-block;\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n  font-size: 5vw;\n  margin: 0 3px;\n\n  &:hover {\n    color: grey;\n  }\n\n  &:nth-child(-n + 16) {\n    color: grey;\n    &:hover {\n      color: white;\n    }\n  }\n\n  &:nth-child(-n + 8) {\n    color: white;\n    &:hover {\n      color: grey;\n    }\n  }\n"]);return f=function(){return n},n}var v=s.a.div(f()),d=Object(l.b)(null,(function(n){return{toggleByte:function(e){return n(function(n){return{type:u.TOGGLE_BYTE,payload:n}}(e))}}}))((function(n){var e=n.idx,t=n.toggleByte,r=n.children;return a.a.createElement(v,{onClick:function(){return t(e)}},r)}));function p(){var n=Object(i.a)(["\n  text-align: center;\n"]);return p=function(){return n},n}var b=s.a.div(p()),h=Object(l.b)((function(n){return{values:n.bytes.values}}))((function(n){var e=n.values;return a.a.createElement(b,null,e.map((function(n,e){return a.a.createElement(d,{key:e,idx:e},n)})))}));function y(){var n=Object(i.a)(["\n  color: #4a90e2;\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n  font-size: 14vw;\n"]);return y=function(){return n},n}var g=s.a.div(y()),m=Object(l.b)((function(n){return{values:n.bytes.values}}))((function(n){var e=n.values;return a.a.createElement(g,null,parseInt(e.join(""),2))}));function E(){var n=Object(i.a)(["\n  background-image: url('//dvokhk8ohqhd8.cloudfront.net/assets/ntriplebyte_logo_70-4b3c02fcd9866c06c492cdc677b28edf3010a9a0c1261db64c820943266f9333.png');\n  background-position: center top;\n  background-repeat: no-repeat;\n  text-align: center;\n  padding-top: 100px;\n"]);return E=function(){return n},n}var O=s.a.div(E()),w=function(){return a.a.createElement(O,null,a.a.createElement(h,null),a.a.createElement(m,null))},j=t(5),k=t(17),B=t.n(k),G=t(19),T={values:new Array(24).fill(0)},x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u.TOGGLE_BYTE:return Object(G.a)({},n,{values:n.values.map((function(n,t){return t===e.payload?n?0:1:n}))});default:return n}},_=Object(j.c)({bytes:x}),I=[B.a],L=Object(j.d)(_,j.a.apply(void 0,I));o.a.render(a.a.createElement(l.a,{store:L},a.a.createElement(w,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.262f0222.chunk.js.map