"use strict";(self.webpackChunkmyjavadoc=self.webpackChunkmyjavadoc||[]).push([[13],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=o(n),d=l,c=k["".concat(u,".").concat(d)]||k[d]||m[d]||r;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const r={title:"\u6761\u4ef6\u5206\u5c90",sidebar_position:3},i=void 0,p={unversionedId:"programming-syntax/\u6761\u4ef6\u5206\u5c90",id:"programming-syntax/\u6761\u4ef6\u5206\u5c90",title:"\u6761\u4ef6\u5206\u5c90",description:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u3082\u3063\u3068\u3082\u91cd\u8981\u3067\u3082\u3063\u3068\u3082\u30d0\u30b0\u3092\u51fa\u3057\u3084\u3059\u3044\u90e8\u5206\u3067\u3059\u3002",source:"@site/docs/03-programming-syntax/03-\u6761\u4ef6\u5206\u5c90.md",sourceDirName:"03-programming-syntax",slug:"/programming-syntax/\u6761\u4ef6\u5206\u5c90",permalink:"/learning-java/programming-syntax/\u6761\u4ef6\u5206\u5c90",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u6761\u4ef6\u5206\u5c90",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u6f14\u7b97\u5b50",permalink:"/learning-java/programming-syntax/\u6f14\u7b97\u5b50"},next:{title:"\u7e70\u308a\u8fd4\u3057",permalink:"/learning-java/programming-syntax/\u7e70\u308a\u8fd4\u3057"}},u={},o=[{value:"if\u6587\u306b\u3088\u308b\u6761\u4ef6\u5206\u5c90",id:"if\u6587\u306b\u3088\u308b\u6761\u4ef6\u5206\u5c90",level:2},{value:"if \u2013 \u57fa\u672c\u7684\u306a\u66f8\u304d\u65b9",id:"if--\u57fa\u672c\u7684\u306a\u66f8\u304d\u65b9",level:3},{value:"if\u6587\u306e\u6761\u4ef6\u306b\u4f7f\u3046\u6bd4\u8f03\u6f14\u7b97\u5b50(\u95a2\u4fc2\u6f14\u7b97\u5b50)",id:"if\u6587\u306e\u6761\u4ef6\u306b\u4f7f\u3046\u6bd4\u8f03\u6f14\u7b97\u5b50\u95a2\u4fc2\u6f14\u7b97\u5b50",level:4},{value:"\u6bd4\u8f03\u6f14\u7b97\u5b50\u4e00\u89a7",id:"\u6bd4\u8f03\u6f14\u7b97\u5b50\u4e00\u89a7",level:5},{value:"if-else \u2013 \u3069\u3061\u3089\u304b\u3092\u5b9f\u884c",id:"if-else--\u3069\u3061\u3089\u304b\u3092\u5b9f\u884c",level:3},{value:"if-elseif-else \u2013 \u8907\u6570\u306e\u6761\u4ef6",id:"if-elseif-else--\u8907\u6570\u306e\u6761\u4ef6",level:3},{value:"\u6bd4\u8f03\u6f14\u7b97\u5b50\u3068\u8ad6\u7406\u6f14\u7b97\u5b50\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u8907\u6570\u6761\u4ef6\u6307\u5b9a",id:"\u6bd4\u8f03\u6f14\u7b97\u5b50\u3068\u8ad6\u7406\u6f14\u7b97\u5b50\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u8907\u6570\u6761\u4ef6\u6307\u5b9a",level:3},{value:"\u8ad6\u7406\u6f14\u7b97\u5b50(\u30b7\u30e7\u30fc\u30c8\u30b5\u30fc\u30ad\u30c3\u30c8\u6f14\u7b97\u5b50)",id:"\u8ad6\u7406\u6f14\u7b97\u5b50\u30b7\u30e7\u30fc\u30c8\u30b5\u30fc\u30ad\u30c3\u30c8\u6f14\u7b97\u5b50",level:4},{value:"AND\uff08\u301c\u304b\u3064\u301c\uff09",id:"and\u304b\u3064",level:3},{value:"OR\uff08\u301c\u307e\u305f\u306f\u301c\uff09",id:"or\u307e\u305f\u306f",level:3},{value:"\u5f0f\u306e\u4e2d\u3067if else\u3092\u5b9f\u73fe\u3059\u308b\u4e09\u9805\u6f14\u7b97\u5b50",id:"\u5f0f\u306e\u4e2d\u3067if-else\u3092\u5b9f\u73fe\u3059\u308b\u4e09\u9805\u6f14\u7b97\u5b50",level:2},{value:"switch\u6587\u306b\u3088\u308b\u6761\u4ef6\u5206\u5c90",id:"switch\u6587\u306b\u3088\u308b\u6761\u4ef6\u5206\u5c90",level:2},{value:"\u4e00\u3064\u306e\u5024\u306b\u5bfe\u3059\u308b\u6761\u4ef6\u5206\u5c90",id:"\u4e00\u3064\u306e\u5024\u306b\u5bfe\u3059\u308b\u6761\u4ef6\u5206\u5c90",level:3},{value:"switch\u6587\u306e\u6ce8\u610f\u70b9",id:"switch\u6587\u306e\u6ce8\u610f\u70b9",level:4},{value:"String\u578b\u306e\u5185\u5bb9\u8a55\u4fa1\u306b\u3064\u3044\u3066",id:"string\u578b\u306e\u5185\u5bb9\u8a55\u4fa1\u306b\u3064\u3044\u3066",level:2},{value:"String\u306a\u3069\u306e\u30af\u30e9\u30b9\u578b\u306e\u6bd4\u8f03\u65b9\u6cd5",id:"string\u306a\u3069\u306e\u30af\u30e9\u30b9\u578b\u306e\u6bd4\u8f03\u65b9\u6cd5",level:2},{value:"switch\u5f0f\u306e\u4f59\u8ac7\uff1aString\u3092switch\u5f0f\u3067\u8a55\u4fa1\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u308b",id:"switch\u5f0f\u306e\u4f59\u8ac7string\u3092switch\u5f0f\u3067\u8a55\u4fa1\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u308b",level:2}],s={toc:o};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u3082\u3063\u3068\u3082\u91cd\u8981\u3067\u3082\u3063\u3068\u3082\u30d0\u30b0\u3092\u51fa\u3057\u3084\u3059\u3044\u90e8\u5206\u3067\u3059\u3002"),(0,l.kt)("h2",{id:"if\u6587\u306b\u3088\u308b\u6761\u4ef6\u5206\u5c90"},"if\u6587\u306b\u3088\u308b\u6761\u4ef6\u5206\u5c90"),(0,l.kt)("h3",{id:"if--\u57fa\u672c\u7684\u306a\u66f8\u304d\u65b9"},"if \u2013 \u57fa\u672c\u7684\u306a\u66f8\u304d\u65b9"),(0,l.kt)("p",null,"\u62ec\u5f27\u5185\u306e\u6761\u4ef6\uff08",(0,l.kt)("em",{parentName:"p"},"boolean\u578b"),"\uff09\u306b\u5408\u81f4\u3059\u308b\uff08\u5024\u304c",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uff09\u306e\u5834\u5408\u306b\u3001\u6ce2\u62ec\u5f27",(0,l.kt)("inlineCode",{parentName:"p"},"{ }"),"\u5185\u306e\u30d6\u30ed\u30c3\u30af\u306e\u51e6\u7406\u3092\u884c\u3044\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"if ( \u6761\u4ef6 ) {\n    \u3053\u3053\u306f\u6761\u4ef6\u306b\u5408\u81f4\u3057\u305f\u5834\u5408\u306b\u306e\u307f\u5b9f\u884c\u3055\u308c\u308b\n}\n")),(0,l.kt)("p",null,"\u6ce2\u62ec\u5f27\u306e\u30d6\u30ed\u30c3\u30af\u306f\u3001\u5b9f\u884c\u3059\u308b\u51e6\u7406\u304c1\u884c\u306e\u5834\u5408\u306e\u307f\u7701\u7565\u304c\u53ef\u80fd\u3067\u3059\u304c\u3001\u6ce2\u62ec\u5f27\u306f\u7701\u7565\u3057\u306a\u3044\u65b9\u304c\u826f\u3044\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u3082\u3057\u3001\u6761\u4ef6\u306b\u5408\u81f4\u3057\u305f\u5834\u5408\u5b9f\u884c\u3059\u308b\u51e6\u7406\u304c1\u884c\u3060\u3051\u306e\u3068\u304d\u3001\u6b21\u306e\u66f8\u304d\u65b9\u306e\u3088\u3046\u306b\u6539\u884c\u3092\u631f\u307e\u305a1\u884c\u3067\u66f8\u304f\u3088\u3046\u306b\u3059\u308b\u3068\u5206\u304b\u308a\u3084\u3059\u3044\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"if ( \u6761\u4ef6 ) \u3053\u3053\u306f\u6761\u4ef6\u306b\u5408\u81f4\u3057\u305f\u5834\u5408\u306b\u306e\u307f\u5b9f\u884c\u3055\u308c\u308b\n")),(0,l.kt)("p",null,"\u6ce2\u62ec\u5f27\u3092\u7701\u7565\u3057\u3066\u307b\u3057\u304f\u306a\u3044\u7406\u7531\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u30d1\u30bf\u30fc\u30f3\u304c\u8003\u3048\u3089\u308c\u308b\u304b\u3089\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"if ( \u6761\u4ef6 )\n    \u6700\u521d\u306bif\u6587\u3092\u66f8\u3044\u305f\u4eba\u304c\u66f8\u3044\u305f\u6761\u4ef6\u5185\u306e\u30b3\u30fc\u30c9\n")),(0,l.kt)("p",null,"\u3053\u308c\u306f\u6b63\u5e38\u306b\u52d5\u304d\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u6b21\u306b\u3001\u3053\u306e\u30b3\u30fc\u30c9\u3092\u6539\u4fee\u3059\u308b\u969b\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30b3\u30fc\u30c9\u306e\u4fee\u6b63\u3092\u884c\u3063\u3066\u3057\u307e\u3044\u3084\u3059\u3044\u70b9\u304c\u6ce2\u62ec\u5f27\u3092\u7701\u7565\u3057\u305f\u969b\u306b\u8d77\u3053\u308a\u3084\u3059\u3044\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"if ( \u6761\u4ef6 )\n    \u6700\u521d\u306bif\u6587\u3092\u66f8\u3044\u305f\u4eba\u304c\u66f8\u3044\u305f\u6761\u4ef6\u5185\u306e\u30b3\u30fc\u30c9\n    \u8ffd\u52a0\u3055\u308c\u305f\u6761\u4ef6\u5185\u30b3\u30fc\u30c9\u306e\u3064\u3082\u308a\u3067\u66f8\u304b\u308c\u305f\u30b3\u30fc\u30c9\n")),(0,l.kt)("p",null,"\u3053\u306e\u3068\u304d\u3001\u8ffd\u52a0\u3055\u308c\u305f\u30b3\u30fc\u30c9\u306f\u3001if\u306e\u6761\u4ef6\u306b\u307e\u3063\u305f\u304f\u95a2\u4fc2\u306a\u304f\u51e6\u7406\u304c\u5b9f\u884c\u3055\u308c\u3066\u3057\u307e\u3044\u3001\u3053\u308c\u304c\u610f\u56f3\u3057\u306a\u3044\u51e6\u7406\u3068\u3057\u3066\u30d0\u30b0\u306b\u3064\u306a\u304c\u308a\u307e\u3059\u3002\n\u3059\u3050\u306b\u6c17\u4ed8\u3051\u308b\u3088\u3046\u3060\u3063\u305f\u3089\u826f\u3044\u306e\u3067\u3059\u304c\u3001\u8ffd\u52a0\u3055\u308c\u305f\u30b3\u30fc\u30c9\u306e\u5f71\u97ff\u304c\u3001\u304b\u306a\u308a\u5f8c\u306e\u65b9\uff08\u305f\u3068\u3048\u3070\u30ea\u30ea\u30fc\u30b9\u5f8c\u306a\u3069\uff09\u3067\u6c17\u4ed8\u304f\u72b6\u6cc1\u3082\u5c11\u306a\u304b\u3089\u305a\u3042\u308a\u307e\u3059\u3002\n\u305d\u3082\u305d\u3082\u6ce2\u62ec\u5f27\u3092\u7701\u7565\u3057\u3066\u3044\u306a\u3051\u308c\u3070\u9632\u3052\u3066\u3044\u308b\u30d0\u30b0\u3092\u767a\u751f\u3055\u305b\u306a\u3044\u305f\u3081\u306b\u3082\u3001\u5fc5\u305a\u6ce2\u62ec\u5f27\u3092\u66f8\u304d\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("p",null,"\u5c11\u3057\u9038\u308c\u307e\u3059\u304c\u30d0\u30b0\u306e\u6df7\u5165\u3092\u9632\u3050\u8a71\u3068\u3057\u3066\u3001\u30a4\u30f3\u30c7\u30f3\u30c8\u3092\u63c3\u3048\u308b\u3053\u3068\u3082\u91cd\u8981\u3067\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u30a4\u30f3\u30c7\u30f3\u30c8\u306f\u30bf\u30d6\u3067\u3082\u30b9\u30da\u30fc\u30b9\u3067\u3082\u69cb\u3044\u307e\u305b\u3093\u304c\u3001\u30b3\u30fc\u30c9\u30d6\u30ed\u30c3\u30af\u304c\u5206\u304b\u308a\u3084\u3059\u304f\u306a\u308b\u3088\u3046\u306b\u9069\u5207\u306a\u5b57\u4e0b\u3052\u3092\u3057\u307e\u3057\u3087\u3046\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u307e\u305f\u3001\u30a4\u30f3\u30c7\u30f3\u30c8\u306b\u95a2\u3057\u3066\u3044\u3048\u3070\u3001IDE\u306b\u642d\u8f09\u3055\u308c\u3066\u3044\u308b\u30b3\u30fc\u30c9\u30d5\u30a9\u30fc\u30de\u30c3\u30bf\u3092\u4f7f\u3046\u306e\u3082\u3088\u3044\u3067\u3059\u3002\u81ea\u52d5\u7684\u306b\u30b3\u30fc\u30c9\u306e\u6574\u5f62\u3092\u884c\u3063\u3066\u304f\u308c\u308b\u305f\u3081\u3001\u5148\u307b\u3069\u306e\u8ffd\u52a0\u30b3\u30fc\u30c9\u306e\u3088\u3046\u306a\u4e0d\u5177\u5408\u3082\u30b3\u30fc\u30c9\u306e\u6574\u5f62\u306b\u3088\u3063\u3066\u6c17\u4ed8\u304d\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h4",{id:"if\u6587\u306e\u6761\u4ef6\u306b\u4f7f\u3046\u6bd4\u8f03\u6f14\u7b97\u5b50\u95a2\u4fc2\u6f14\u7b97\u5b50"},"if\u6587\u306e\u6761\u4ef6\u306b\u4f7f\u3046\u6bd4\u8f03\u6f14\u7b97\u5b50(\u95a2\u4fc2\u6f14\u7b97\u5b50)"),(0,l.kt)("p",null,"\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u578b\u306b\u5bfe\u3057\u3066\u3001\u7b49\u3057\u3044\u7570\u306a\u308b\u5927\u304d\u3044\u5c0f\u3055\u3044\u306a\u3069\u306e\u8a55\u4fa1\u3092\u884c\u3046\u6f14\u7b97\u5b50\u3092\u6bd4\u8f03\u6f14\u7b97\u5b50\u3068\u547c\u3073\u307e\u3059\u3002\n\uff08\u539f\u5247\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u578b\u306b\u5bfe\u3057\u3066\u306e\u307f\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u308b\u3082\u306e\u306a\u306e\u3067\u5fd8\u308c\u306a\u3044\u3053\u3068\uff09"),(0,l.kt)("p",null,"\u6bd4\u8f03\u6f14\u7b97\u5b50\u306e\u7d50\u679c\u306f\u3001boolean\u578b\u3068\u306a\u308a\u307e\u3059\u3002\n\u7d50\u679c\u304ctrue\u3067\u3042\u308b\u5834\u5408\u306b\u3001\u300c\u6761\u4ef6\u306b\u5408\u81f4\u3057\u3066\u3044\u308b\u300d\u3068\u3044\u3048\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u6bd4\u8f03\u6f14\u7b97\u5b50\u3092\u7528\u3044\u305f\u4e21\u8fba\u306e\u6bd4\u8f03\u3060\u3051\u3067\u306a\u304f\u3001\u95a2\u6570\u547c\u3073\u51fa\u3057\u306e\u623b\u308a\u5024\u3092\u6761\u4ef6\u3068\u3059\u308b\u3088\u3046\u306a\u4f7f\u3044\u65b9\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u7b49\u3057\u3044\u3053\u3068\u3092\u8a55\u4fa1\u3059\u308b ",(0,l.kt)("inlineCode",{parentName:"p"},"=="),"\uff08\u95a2\u4fc2\u6f14\u7b97\u5b50\uff09\u306f\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"="),"\uff08\u4ee3\u5165\u6f14\u7b97\u5b50\uff09\u3068\u9593\u9055\u3048\u3084\u3059\u3044\u306e\u3067\u6c17\u3092\u4ed8\u3051\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("h5",{id:"\u6bd4\u8f03\u6f14\u7b97\u5b50\u4e00\u89a7"},"\u6bd4\u8f03\u6f14\u7b97\u5b50\u4e00\u89a7"),(0,l.kt)("p",null,"\u203b\u4e21\u8fba\u3092\u6bd4\u8f03\u3059\u308b\u5834\u5408\u306b\u4f7f\u7528\u3057\u3001\u6f14\u7b97\u5b50\u306e\u7d50\u679c\u306fboolean\u578b\u3067\u623b\u3063\u3066\u304d\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6f14\u7b97\u5b50"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"==")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a == b")),(0,l.kt)("td",{parentName:"tr",align:null},"a\u3068b\u304c\u7b49\u3057\u3044\u3068\u304dtrue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!=")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a != b")),(0,l.kt)("td",{parentName:"tr",align:null},"a\u3068b\u304c\u7b49\u3057\u304f\u306a\u3044\u3068\u304dtrue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a > b")),(0,l.kt)("td",{parentName:"tr",align:null},"a\u304cb\u3088\u308a\u5927\u304d\u3044\u3068\u304dtrue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a < b")),(0,l.kt)("td",{parentName:"tr",align:null},"a\u304cb\u3088\u308a\u5c0f\u3055\u3044\u304d\u3068true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">=")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a >= b")),(0,l.kt)("td",{parentName:"tr",align:null},"a\u304cb\u4ee5\u4e0a\u306e\u3068\u304dtrue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<=")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a <= b")),(0,l.kt)("td",{parentName:"tr",align:null},"a\u304cb\u4ee5\u4e0b\u306e\u3068\u304dtrue")))),(0,l.kt)("h3",{id:"if-else--\u3069\u3061\u3089\u304b\u3092\u5b9f\u884c"},"if-else \u2013 \u3069\u3061\u3089\u304b\u3092\u5b9f\u884c"),(0,l.kt)("p",null,"if\u306e\u6761\u4ef6\u306b\u5408\u81f4\u3057\u306a\u304b\u3063\u305f\u5834\u5408\u306e\u307f\u5b9f\u884c\u3055\u308c\u308b\u51e6\u7406\u3092\u66f8\u3051\u308b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"if ( \u6761\u4ef6 ) {\n    \u3053\u3053\u306f\u6761\u4ef6\u306b\u5408\u81f4\u3057\u305f\u5834\u5408\u306b\u306e\u307f\u5b9f\u884c\u3055\u308c\u308b\n} else {\n    \u6761\u4ef6\u306b\u5408\u81f4\u3057\u306a\u304b\u3063\u305f\u5834\u5408\u306b\u306e\u307f\u5b9f\u884c\u3055\u308c\u308b\n}\n")),(0,l.kt)("h3",{id:"if-elseif-else--\u8907\u6570\u306e\u6761\u4ef6"},"if-elseif-else \u2013 \u8907\u6570\u306e\u6761\u4ef6"),(0,l.kt)("p",null,"\u6761\u4ef6\u306b\u5408\u81f4\u3057\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u518d\u5ea6\u8a55\u4fa1\u3092\u884c\u3046\u3053\u3068\u3082\u3067\u304d\u308b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"if ( \u6761\u4ef61 ) {\n    \u6761\u4ef61\u306b\u5408\u81f4\u3057\u305f\u5834\u5408\u306b\u306e\u307f\u5b9f\u884c\u3055\u308c\u308b\n} else if ( \u6761\u4ef62 ) {\n    \u6761\u4ef61\u306b\u5408\u81f4\u305b\u305a\u3001\u6761\u4ef62\u306b\u5408\u81f4\u3057\u305f\u5834\u5408\n} else {\n    \u4e0a\u8a18\u3059\u3079\u3066\u306e\u6761\u4ef6\u306b\u5408\u81f4\u3057\u306a\u304b\u3063\u305f\u5834\u5408\n}\n")),(0,l.kt)("h3",{id:"\u6bd4\u8f03\u6f14\u7b97\u5b50\u3068\u8ad6\u7406\u6f14\u7b97\u5b50\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u8907\u6570\u6761\u4ef6\u6307\u5b9a"},"\u6bd4\u8f03\u6f14\u7b97\u5b50\u3068\u8ad6\u7406\u6f14\u7b97\u5b50\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u8907\u6570\u6761\u4ef6\u6307\u5b9a"),(0,l.kt)("p",null,"if\u6587\u306e\u6761\u4ef6\u306f\u3001\u6761\u4ef61\u304b\u3064\u6761\u4ef62\u3068\u8a00\u3063\u305f\u3088\u3046\u306b\u30011\u3064\u306eif\u6587\u3067\u8907\u6570\u306e\u6761\u4ef6\u3092\u5165\u308c\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u305d\u306e\u6642\u306b\u4f7f\u7528\u3059\u308b\u6f14\u7b97\u5b50\u304c\u3001\u8ad6\u7406\u6f14\u7b97\u5b50\uff08\u30b7\u30e7\u30fc\u30c8\u30b5\u30fc\u30ad\u30c3\u30c8\u6f14\u7b97\u5b50\uff09\u3068\u547c\u3070\u308c\u308b\u3082\u306e\u3067\u3059\u3002"),(0,l.kt)("h4",{id:"\u8ad6\u7406\u6f14\u7b97\u5b50\u30b7\u30e7\u30fc\u30c8\u30b5\u30fc\u30ad\u30c3\u30c8\u6f14\u7b97\u5b50"},"\u8ad6\u7406\u6f14\u7b97\u5b50(\u30b7\u30e7\u30fc\u30c8\u30b5\u30fc\u30ad\u30c3\u30c8\u6f14\u7b97\u5b50)"),(0,l.kt)("p",null,"\u203b\u4e21\u8fba\u3068\u3082boolean\u306e\u5834\u5408\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6f14\u7b97\u5b50"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"&&")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a && b")),(0,l.kt)("td",{parentName:"tr",align:null},"a\u3068b\u306e\u4e21\u65b9\u304ctrue\u306e\u3068\u304dtrue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"|","|")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"a ","|","|"," b")),(0,l.kt)("td",{parentName:"tr",align:null},"a\u3068b\u306e\u3069\u3061\u3089\u304b\u304ctrue\u306e\u3068\u304dtrue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!a")),(0,l.kt)("td",{parentName:"tr",align:null},"a\u304cfalse\u306e\u3068\u304dtrue\u3002\u9006\u306b\u306a\u308b")))),(0,l.kt)("h3",{id:"and\u304b\u3064"},"AND\uff08\u301c\u304b\u3064\u301c\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"if ( \u6761\u4ef6\uff11 && \u6761\u4ef6\uff12 ) {\n    \u6761\u4ef6\uff11\u3068\u6761\u4ef6\uff12\u3069\u3061\u3089\u306b\u3082\u5408\u81f4\u3057\u305f\u5834\u5408\u306b\u306e\u307f\u5b9f\u884c\u3055\u308c\u308b\n}\n")),(0,l.kt)("h3",{id:"or\u307e\u305f\u306f"},"OR\uff08\u301c\u307e\u305f\u306f\u301c\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"if ( \u6761\u4ef6\uff11 || \u6761\u4ef6\uff12 ) {\n    \u6761\u4ef6\uff11\u304b\u6761\u4ef6\uff12\u306e\u3069\u3061\u3089\u304b\u306b\u5408\u81f4\u3057\u305f\u5834\u5408\u306b\u306e\u307f\u5b9f\u884c\u3055\u308c\u308b\n}\n")),(0,l.kt)("h2",{id:"\u5f0f\u306e\u4e2d\u3067if-else\u3092\u5b9f\u73fe\u3059\u308b\u4e09\u9805\u6f14\u7b97\u5b50"},"\u5f0f\u306e\u4e2d\u3067if else\u3092\u5b9f\u73fe\u3059\u308b\u4e09\u9805\u6f14\u7b97\u5b50"),(0,l.kt)("p",null,"\u4e09\u9805\u6f14\u7b97\u5b50\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"if...else..."),"\u3092\u5f0f\u3068\u3057\u3066\u6271\u3048\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'System.out.println(\u6761\u4ef6 ? "true" : "false");\n//\u6761\u4ef6\u306b\u5408\u81f4\u3057\u3066\u3044\u308c\u3070true\u3068\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u5408\u81f4\u3057\u3066\u3044\u306a\u3051\u308c\u3070false\u3068\u8868\u793a\u3055\u308c\u307e\u3059\u3002\n\n//\u2191\u306e\u51e6\u7406\u3068\u540c\u3058\u3088\u3046\u306b\u66f8\u304f\u5834\u5408\u2193\nif ( \u6761\u4ef6 ) {\n    System.out.println("true");\n} else {\n    System.out.println("false");\n}\n')),(0,l.kt)("p",null,"\u5f0f\u306e\u4e2d\u3067\u6761\u4ef6\u5206\u5c90\u3092\u5b9f\u73fe\u3067\u304d\u3001\u7d50\u679c\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u305f\u3081\u5927\u5909\u4fbf\u5229\u3067\u3059\u3002"),(0,l.kt)("h2",{id:"switch\u6587\u306b\u3088\u308b\u6761\u4ef6\u5206\u5c90"},"switch\u6587\u306b\u3088\u308b\u6761\u4ef6\u5206\u5c90"),(0,l.kt)("h3",{id:"\u4e00\u3064\u306e\u5024\u306b\u5bfe\u3059\u308b\u6761\u4ef6\u5206\u5c90"},"\u4e00\u3064\u306e\u5024\u306b\u5bfe\u3059\u308b\u6761\u4ef6\u5206\u5c90"),(0,l.kt)("p",null,"1\u3064\u306e\u5f0f\uff08\u5909\u6570\u3067\u3082\u6f14\u7b97\u5b50\u3092\u7528\u3044\u305f\u5f0f\u3067\u3082\u3088\u3044\uff09\u306b\u5bfe\u3057\u3066\u3001\u305d\u308c\u305e\u308c\u306e\u5024\u3068\u7b49\u3057\u3044\u304b\u3092\u6761\u4ef6\u5206\u5c90\u3057\u305f\u3044\u5834\u5408\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3082\u66f8\u3051\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"switch ( \u5f0f ) {\n    case \u50241:\n        \u5f0f\u306e\u7d50\u679c\u304c\u50241\u3068\u7b49\u3057\u3044\u6642\u306b\u51e6\u7406\u3092\u5b9f\u884c\n        break;\n    case \u50242:\n        \u5f0f\u306e\u7d50\u679c\u304c\u50242\u3068\u7b49\u3057\u3044\u6642\u306b\u51e6\u7406\u3092\u5b9f\u884c\n        break;\n    default:\n        \u4e0a\u8a18\u306e\u3069\u306e\u5024\u3068\u3082\u7b49\u3057\u304f\u306a\u3044\u6642\u306b\u51e6\u7406\u3092\u5b9f\u884c\n        break;\n}\n")),(0,l.kt)("p",null,"\u4e0a\u8a18\u306e\u30b3\u30fc\u30c9\u306f\u3001\u4ee5\u4e0b\u306eif\u2026else if\u2026else\u3068\u540c\u7fa9\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"if ( \u5f0f == \u50241 ) {\n    \u5f0f\u306e\u7d50\u679c\u304c\u50241\u3068\u7b49\u3057\u3044\u6642\u306b\u51e6\u7406\u3092\u5b9f\u884c\n} else if ( \u5f0f == \u50242 ) {\n    \u5f0f\u306e\u7d50\u679c\u304c\u50242\u3068\u7b49\u3057\u3044\u6642\u306b\u51e6\u7406\u3092\u5b9f\u884c\n} else {\n    \u4e0a\u8a18\u306e\u3069\u306e\u5024\u3068\u3082\u7b49\u3057\u304f\u306a\u3044\u6642\u306b\u51e6\u7406\u3092\u5b9f\u884c\n}\n")),(0,l.kt)("h4",{id:"switch\u6587\u306e\u6ce8\u610f\u70b9"},"switch\u6587\u306e\u6ce8\u610f\u70b9"),(0,l.kt)("p",null,"\u6761\u4ef6\u5206\u5c90\u5f8c\u306e\u51e6\u7406\u3092\u66f8\u3044\u305f\u3089\u3001break;\u3067switch\u6587\u3092\u629c\u3051\u308b\u3088\u3046\u306b\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e\u66f8\u304d\u65b9\u3092\u884c\u3063\u305f\u5834\u5408\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"case \u50241"),"\u3067\u51e6\u7406\u3059\u308b\u3079\u304d\u4ee5\u964d\u306e\u6761\u4ef6\u304c\u610f\u56f3\u3057\u305f\u3082\u306e\u3068\u9055\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"switch ( \u5f0f ) {\n    case \u50241:\n        \u5f0f\u306e\u7d50\u679c\u304c\u50241\u3068\u7b49\u3057\u3044\u6642\u306b\u51e6\u7406\u3092\u5b9f\u884c\n    case \u50242:\n        \u5f0f\u306e\u7d50\u679c\u304c\u50241\u3068\u7b49\u3057\u3044\u6642\u3068\u50242\u3068\u7b49\u3057\u3044\u6642\u306b\u51e6\u7406\u3092\u5b9f\u884c\n        //\u2191\u672c\u6765\u306f\u3001\u300c\u5f0f\u306e\u7d50\u679c\u304c\u50242\u3068\u7b49\u3057\u3044\u6642\u306b\u51e6\u7406\u3092\u5b9f\u884c\u300d\u306e\u3064\u3082\u308a\u3067\u66f8\u3044\u305f\u304c\u3001\n        // break;\u3092\u5fd8\u308c\u305f\u3053\u3068\u3067\u610f\u56f3\u3057\u306a\u3044\u6761\u4ef6\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3057\u307e\u3063\u3066\u3044\u308b\u3002\n        break;\n    default:\n        \u4e0a\u8a18\u306e\u3069\u306e\u5024\u3068\u3082\u7b49\u3057\u304f\u306a\u3044\u6642\u306b\u51e6\u7406\u3092\u5b9f\u884c\n        break;\n}\n")),(0,l.kt)("p",null,"\u3053\u306e\u7279\u6027\u3092\u5229\u7528\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5fdc\u7528\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u8907\u6570\u306e\u5024\u3067\u5f0f\u3092\u8a55\u4fa1\u3059\u308b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"switch ( \u5f0f ) {\n    case \u50241:\n    case \u50242:\n        \u5f0f\u306e\u7d50\u679c\u304c\u50241\u304b\u50242\u3068\u7b49\u3057\u3044\u6642\u306b\u51e6\u7406\u3092\u5b9f\u884c\n        break;\n    default:\n        \u4e0a\u8a18\u306e\u3069\u306e\u5024\u3068\u3082\u7b49\u3057\u304f\u306a\u3044\u6642\u306b\u51e6\u7406\u3092\u5b9f\u884c\n        break;\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"string\u578b\u306e\u5185\u5bb9\u8a55\u4fa1\u306b\u3064\u3044\u3066"},"String\u578b\u306e\u5185\u5bb9\u8a55\u4fa1\u306b\u3064\u3044\u3066"),(0,l.kt)("p",null,"\u6b21\u306e\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u3088\u304f\u898b\u3066\u3001\u5b9f\u884c\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class StringEval {\n  public static void main(String[] args) {\n\n    String a = "Hello";\n    String b = "Hello";\n\n    if (a == b) {\n      System.out.println("\u540c\u3058\u3060\u3088\uff01");  // \u3053\u3063\u3061\n    } else {\n      System.out.println("\u9055\u3046\u3088\uff01");\n    }\n\n    // a,b\u4e21\u65b9\u306b\u51e6\u7406\u3092\u52a0\u3048\u3066\u5024\u3092\u5909\u5316\u3055\u305b\u308b\n    a += 1;\n    b += 1;\n    System.out.println("a:" + a);\n    System.out.println("b:" + b);\n\n    if (a == b) {\n      System.out.println("\u540c\u3058\u3060\u3088\uff01");\n    } else {\n      System.out.println("\u9055\u3046\u3088\uff01");   // \u3053\u3063\u3061\n    }\n  }\n}\n')),(0,l.kt)("p",null,"\u5909\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),"\u3069\u3061\u3089\u3082\u3001\u5024\u3068\u3057\u3066\u306f",(0,l.kt)("inlineCode",{parentName:"p"},'"Hello"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"Hello1"'),"\u3068\u306a\u3063\u3066\u304a\u308a\u3001\u898b\u305f\u76ee\u4e0a\u540c\u3058\u6587\u5b57\u5217\u3067\u3059\u304c\u30012\u3064\u76ee\u306e\u6761\u4ef6\u5206\u5c90\u304c\u610f\u56f3\u3057\u306a\u3044\u7d50\u679c\u306b\u306a\u3063\u305f\u3068\u601d\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"Java\u306e\u8a00\u8a9e\u4ed5\u69d8\u3067\u6ce8\u610f\u3057\u3066\u307b\u3057\u3044\u306e\u304c\u3001",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"String\u578b\u306f\u552f\u4e00\u7279\u5225\u6271\u3044\u3055\u308c\u308b\u30af\u30e9\u30b9\u578b")),"\u3067\u3042\u308b\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"),(0,l.kt)("p",null,"String\u578b\u306e\u521d\u671f\u5316\u6642\u70b9\u3084\u3001String\u578b\u306e\u30ea\u30c6\u30e9\u30eb\u306f\u3001\u3069\u308c\u3082\u64ec\u4f3c\u7684\u306b\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u578b\u3068\u540c\u3058\u3088\u3046\u306a\u52d5\u4f5c\u3092\u3057\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u5024\u306e\u5909\u5316\u304c\u767a\u751f\u3059\u308b\u51e6\u7406\u3092\u4e00\u5ea6\u884c\u308f\u308c\u308b\u3068\u3001\u305d\u306e\u5909\u6570\u306f\u901a\u5e38\u306e\u30af\u30e9\u30b9\u578b\u5909\u6570\u3068\u540c\u3058\u52d5\u4f5c\u3092\u3059\u308b\u3088\u3046\u306b\u5207\u308a\u66ff\u308f\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30af\u30e9\u30b9\u578b\u5909\u6570\u3092\u5909\u6570\u306b\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u5024\u3092\u6bd4\u3079\u308b\u6f14\u7b97\u5b50\u3067\u6bd4\u8f03\u3057\u305f\u3068\u3057\u3066\u3082\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u306b\u306a\u308a\u307e\u305b\u3093\u3002\n\u7406\u7531\u306f\u3001\u5909\u6570\u306e\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u30c7\u30fc\u30bf\u306f\u30af\u30e9\u30b9\u578b\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u30e1\u30e2\u30ea\u30a2\u30c9\u30ec\u30b9\u306e\u307f\u3092\u4fdd\u6301\u3057\u3066\u3044\u308b\u304b\u3089\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u3082\u3046\u5c11\u3057\u8a73\u3057\u304f\u66f8\u304f\u3068\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u30af\u30e9\u30b9\u578b\u306e\u5909\u6570\u5ba3\u8a00\u6642\u3001\u5909\u6570\u306b\u306fnull\u304c\u521d\u671f\u5024\u3067\u4ee3\u5165\u3055\u308c\u3066\u3044\u308b"),(0,l.kt)("li",{parentName:"ol"},"new\u69cb\u6587\u3092\u7528\u3044\u3066\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u304c\u884c\u308f\u308c\u305f\u969b\u306b\u30e1\u30e2\u30ea\u4e0a\u3078\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u5c55\u958b\u3055\u308c\u308b"),(0,l.kt)("li",{parentName:"ol"},"\u5c55\u958b\u3055\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u30e1\u30e2\u30ea\u30a2\u30c9\u30ec\u30b9\u3092\u5909\u6570\u304c\u4fdd\u6301\u3059\u308b")),(0,l.kt)("p",null,"\u3053\u3053\u3067\u6ce8\u610f\u3057\u3066\u307b\u3057\u3044\u306e\u304c\u3001\u30e1\u30e2\u30ea\u30a2\u30c9\u30ec\u30b9\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u4e0a\u8a18\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u3064\u3044\u3066\u3001\u5909\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),"\u306e\u30e1\u30e2\u30ea\u30a2\u30c9\u30ec\u30b9\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u5024\u304c\u9055\u3046\u3068\u3044\u3046\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u65b9\u6cd5\u306fJava\u306b\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u64ec\u4f3c\u7684\u306b\u30cf\u30c3\u30b7\u30e5\u5024\u3092\u7528\u3044\u305f\u6bd4\u8f03\u3092\u884c\u3044\u3001\u6bd4\u8f03\u6f14\u7b97\u5b50\u3067\u5358\u7d14\u306a\u6bd4\u8f03\u306f\u3067\u304d\u306a\u3044\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u6b21\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u78ba\u8a8d\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class StringEval {\n  public static void main(String[] args) {\n\n    // \u3053\u306e\u521d\u671f\u5316\u65b9\u6cd5\u306b\u3088\u3063\u3066\u5f97\u3089\u308c\u308bString\u578b\u306f\u7591\u4f3c\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\n    String a = "Hello";\n    String b = "Hello";\n\n    // System.identityHashCode()\u306b\u3088\u3063\u3066\u30cf\u30c3\u30b7\u30e5\u5024\u3092\u53d6\u5f97\n    System.out.println("a:" + System.identityHashCode(a));\n    System.out.println("b:" + System.identityHashCode(b));\n    // \u3053\u306e\u6642\u70b9\u3067\u306f\u30cf\u30c3\u30b7\u30e5\u5024\u306f\u540c\u3058\n\n    if (a == b) {\n      System.out.println("\u540c\u3058\u3060\u3088\uff01");  // \u3053\u3063\u3061\n    } else {\n      System.out.println("\u9055\u3046\u3088\uff01");\n    }\n\n    // a,b\u4e21\u65b9\u306b\u51e6\u7406\u3092\u52a0\u3048\u3066\u5024\u3092\u5909\u5316\u3055\u305b\u308b\n    a += 1;\n    b += 1;\n    System.out.println("a:" + System.identityHashCode(a));\n    System.out.println("b:" + System.identityHashCode(b));\n    // \u6587\u5b57\u306e\u9023\u7d50\u306b\u3088\u3063\u3066\u3001a,b\u306e\u53c2\u7167\u3057\u3066\u3044\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u305d\u308c\u305e\u308c\u8a08\u7b97\u3055\u308c\u305f\u5225\u306e\u3082\u306e\u3078\u3068\u5909\u5316\u3057\u305f\n\n    if (a == b) {\n      System.out.println("\u540c\u3058\u3060\u3088\uff01");\n    } else {\n      System.out.println("\u9055\u3046\u3088\uff01");   // \u3053\u3063\u3061\n    }\n  }\n}\n')),(0,l.kt)("p",null,"\u30b3\u30fc\u30c9\u5185\u306e\u30b3\u30e1\u30f3\u30c8\u306b\u3066\u8aac\u660e\u3092\u66f8\u304d\u307e\u3057\u305f\u304c\u3001\u5185\u90e8\u7684\u306a\u5024\uff08String\u578b\u306a\u3069\u306e\u30af\u30e9\u30b9\u578b\u306e\u5834\u5408\u30e1\u30e2\u30ea\u30a2\u30c9\u30ec\u30b9\uff09\u3092\u30cf\u30c3\u30b7\u30e5\u5024\u3067\u898b\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u5024\u304c\u5909\u5316\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u5206\u304b\u308a\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"string\u306a\u3069\u306e\u30af\u30e9\u30b9\u578b\u306e\u6bd4\u8f03\u65b9\u6cd5"},"String\u306a\u3069\u306e\u30af\u30e9\u30b9\u578b\u306e\u6bd4\u8f03\u65b9\u6cd5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Object#equals"),"\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3063\u3066\u6bd4\u8f03\u3057\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("p",null,"Java\u306b\u304a\u3051\u308b\u3059\u3079\u3066\u306e\u30af\u30e9\u30b9\u578b\u306e\u3082\u3068\u3068\u306a\u3063\u3066\u3044\u308bObject\u578b\u306b\u306f\u3001\u5024\u3092\u6bd4\u8f03\u3059\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9",(0,l.kt)("inlineCode",{parentName:"p"},"equals()"),"\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3055\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3001\u5f15\u6570\u3067\u6e21\u3057\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u5024\u3068\u306a\u308b\u3082\u306e\u540c\u58eb\u3092\u6bd4\u8f03\u3057\u3001\u540c\u3058\u3067\u3042\u308c\u3070",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u3092\u8fd4\u3057\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"equals()"),"\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3055\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3057\u304b\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002\u521d\u671f\u5316\u3055\u308c\u3066\u3044\u306a\u3044\uff08\u3064\u307e\u308a\u5909\u6570\u306e\u5024\u304cnull\u3067\u3042\u308b\u72b6\u614b\u306e\uff09\u6642\u306b",(0,l.kt)("inlineCode",{parentName:"p"},"equals()"),"\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u3068\u3001NullPointerException\u3068\u547c\u3070\u308c\u308b\u4f8b\u5916\u304c\u767a\u751f\u3057\u307e\u3059\u3002\u203b\u305d\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u6301\u3063\u3066\u3044\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3055\u308c\u3066\u306a\u3044\u304b\u3089\u547c\u3073\u51fa\u305b\u306a\u3044\u3088\uff01\u3063\u3066\u3044\u3046\u30a8\u30e9\u30fc\u3067\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"equals()"),"\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3046\u3053\u3068\u3067\u3001String\u578b\u306e\u6587\u5b57\u5217\u304c\u540c\u3058\u304b\u3069\u3046\u304b\u3092\u6bd4\u8f03\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u6b21\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u78ba\u8a8d\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class StringEquals {\n  public static void main(String[] args) {\n\n    String a = "Hello";\n    String b = "Hello";\n\n    System.out.println("a:" + System.identityHashCode(a));\n    System.out.println("b:" + System.identityHashCode(b));\n\n    if (a.equals(b)) {\n      System.out.println("\u540c\u3058\u3060\u3088\uff01");  // \u3053\u3063\u3061\n    } else {\n      System.out.println("\u9055\u3046\u3088\uff01");\n    }\n\n    a += 1;\n    b += 1;\n    System.out.println("a:" + System.identityHashCode(a));\n    System.out.println("b:" + System.identityHashCode(b));\n\n    if (a.equals(b)) {\n      System.out.println("\u540c\u3058\u3060\u3088\uff01");  // \u3053\u3063\u3061\n    } else {\n      System.out.println("\u9055\u3046\u3088\uff01");\n    }\n  }\n}\n')),(0,l.kt)("p",null,"\u5b9f\u884c\u7d50\u679c\u3092\u78ba\u8a8d\u3059\u308b\u3068\u3001\u304d\u3061\u3093\u3068\u610f\u56f3\u3057\u305f\u7d50\u679c\u306b\u306a\u3063\u305f\u3068\u601d\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u3001\u5185\u90e8\u7684\u306a\u52d5\u4f5c\u3092\u77e5\u3063\u3066\u304a\u304b\u306a\u3044\u3068\u73fe\u8c61\u3092\u7406\u89e3\u3067\u304d\u306a\u3044\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u6587\u5b57\u5217\u3092\u59cb\u3081\u3068\u3057\u305f",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u30af\u30e9\u30b9\u578b\u306e\u6bd4\u8f03\u306fequals()\u3092\u4f7f\u3046")),"\u3068\u3044\u3046\u3053\u3068\u3092\u5fc5\u305a\u899a\u3048\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("p",null,"\u3061\u306a\u307f\u306b\u3001\u300c\u540c\u3058\u3067\u306a\u3044\u300d\u3092\u8868\u73fe\u3059\u308b\u306b\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"!a.equals(b)"),"\u304c\u5229\u7528\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"switch\u5f0f\u306e\u4f59\u8ac7string\u3092switch\u5f0f\u3067\u8a55\u4fa1\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u308b"},"switch\u5f0f\u306e\u4f59\u8ac7\uff1aString\u3092switch\u5f0f\u3067\u8a55\u4fa1\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u308b"),(0,l.kt)("p",null,"JavaSDK\u306eversion 7\u4ee5\u964d\u3001switch\u306e\u8a55\u4fa1\u5f0f\u306bString\u306e\u6587\u5b57\u5217\u578b\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u6587\u5b57\u5217\u3092\u3088\u308a\u7c21\u5358\u306b\u8a55\u4fa1\u3067\u304d\u308b\u53cd\u9762\u3001\u8a55\u4fa1\u3059\u308bString\u578b\u306e\u5909\u6570\u304c\u521d\u671f\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u4f8b\u5916\u304c\u767a\u751f\u3057\u3066\u3057\u307e\u3046\u306a\u3069\u306e\u6ce8\u610f\u70b9\u304c\u3042\u308a\u307e\u3059\u3002\n\u6587\u5b57\u5217\u3092switch\u3057\u305f\u3044\u5834\u5408\u3067\u8a55\u4fa1\u3059\u308b\u5f0f\u306e\u7d50\u679c\u304c\u5224\u65ad\u306b\u56f0\u308b\u306e\u306a\u3089\u3001switch\u5f0f\u306e\u4e8b\u524d\u306bnull\u3068\u306e\u6bd4\u8f03\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"target == null"),"\uff09\u3092\u884c\u3046\u306a\u3069\u306e\u4e8b\u524d\u51e6\u7406\u3092\u884c\u3046\u304b\u3001\u6700\u521d\u304b\u3089if-elseif-else\u306e\u5f62\u5f0f\u3067\u66f8\u3044\u305f\u65b9\u304c\u5b89\u5168\u3067\u3059\u3002"))}m.isMDXComponent=!0}}]);