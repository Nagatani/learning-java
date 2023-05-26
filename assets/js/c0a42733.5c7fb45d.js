"use strict";(self.webpackChunkmyjavadoc=self.webpackChunkmyjavadoc||[]).push([[4595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=c(n),k=l,f=d["".concat(u,".").concat(k)]||d[k]||m[k]||r;return n?a.createElement(f,i(i({ref:t},o),{},{components:n})):a.createElement(f,i({ref:t},o))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const r={title:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9"},i=void 0,p={unversionedId:"abstract-and-interface/\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9",id:"abstract-and-interface/\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9",title:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9",description:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9(interface)\u3068\u306f",source:"@site/docs/08-abstract-and-interface/02-\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9.md",sourceDirName:"08-abstract-and-interface",slug:"/abstract-and-interface/\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9",permalink:"/learning-java/abstract-and-interface/\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9"},sidebar:"tutorialSidebar",previous:{title:"\u62bd\u8c61\u30af\u30e9\u30b9\u3068\u62bd\u8c61\u30e1\u30bd\u30c3\u30c9",permalink:"/learning-java/abstract-and-interface/\u62bd\u8c61\u30af\u30e9\u30b9\u3068\u62bd\u8c61\u30e1\u30bd\u30c3\u30c9"},next:{title:"\u7df4\u7fd2\u8ab2\u984c",permalink:"/learning-java/abstract-and-interface/\u7df4\u7fd2\u8ab2\u984c"}},u={},c=[{value:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9(interface)\u3068\u306f",id:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9interface\u3068\u306f",level:2},{value:"\u300c\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u4f5c\u308b\u300d\u3068\u3044\u3046\u3053\u3068\u306f\u300c\u4ed5\u69d8\u300d\u3092\u6c7a\u5b9a\u3059\u308b\u3053\u3068",id:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u4f5c\u308b\u3068\u3044\u3046\u3053\u3068\u306f\u4ed5\u69d8\u3092\u6c7a\u5b9a\u3059\u308b\u3053\u3068",level:3},{value:"Java\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9",id:"java\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9",level:2},{value:"interface\u5b9a\u7fa9\u69cb\u6587",id:"interface\u5b9a\u7fa9\u69cb\u6587",level:3},{value:"interface\u5b9f\u88c5\u69cb\u6587",id:"interface\u5b9f\u88c5\u69cb\u6587",level:2},{value:"interface\u304c\u6301\u3066\u308b\u3082\u306e",id:"interface\u304c\u6301\u3066\u308b\u3082\u306e",level:2},{value:"interface\u306finterface\u3092\u300c\u7d99\u627f\u300d\u3067\u304d\u308b",id:"interface\u306finterface\u3092\u7d99\u627f\u3067\u304d\u308b",level:2},{value:"interface\u306e\u7279\u5fb4\u307e\u3068\u3081",id:"interface\u306e\u7279\u5fb4\u307e\u3068\u3081",level:2},{value:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u7528\u3044\u305f\u591a\u91cd\u7d99\u627f",id:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u7528\u3044\u305f\u591a\u91cd\u7d99\u627f",level:2},{value:"defalt\u4fee\u98fe\u5b50\u3092\u7528\u3044\u305f\u51e6\u7406\u306e\u5b9f\u88c5",id:"defalt\u4fee\u98fe\u5b50\u3092\u7528\u3044\u305f\u51e6\u7406\u306e\u5b9f\u88c5",level:3},{value:"\u591a\u91cd\u7d99\u627f\u3067\u540c\u3058\u30e1\u30bd\u30c3\u30c9\u304c\u8907\u6570\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3069\u3046\u306a\u308b\u304b",id:"\u591a\u91cd\u7d99\u627f\u3067\u540c\u3058\u30e1\u30bd\u30c3\u30c9\u304c\u8907\u6570\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3069\u3046\u306a\u308b\u304b",level:3},{value:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u6271\u3046\u5834\u5408\u306b\u6ce8\u610f\u3057\u3066\u304a\u3044\u3066\u6b32\u3057\u3044\u3053\u3068",id:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u6271\u3046\u5834\u5408\u306b\u6ce8\u610f\u3057\u3066\u304a\u3044\u3066\u6b32\u3057\u3044\u3053\u3068",level:2}],o={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9interface\u3068\u306f"},"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9(interface)\u3068\u306f"),(0,l.kt)("p",null,"\u62bd\u8c61\u30af\u30e9\u30b9\u3092\u3055\u3089\u306b\u62bd\u8c61\u5316\u3057\u300c\u578b\u300d\u3060\u3051\u3092\u5b9a\u7fa9\u3059\u308b\u30e1\u30ab\u30cb\u30ba\u30e0\u306e\u3053\u3068\u3002"),(0,l.kt)("p",null,"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306b\u306f\u3001\u5b9a\u6570\u3068\u30e1\u30bd\u30c3\u30c9\u306e\u5b9a\u7fa9\uff08\u62bd\u8c61\u30e1\u30bd\u30c3\u30c9\uff09\u3092\u66f8\u304d\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5b9a\u7fa9\u3057\u305f\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9f\u88c5\u3059\u308b\u30af\u30e9\u30b9\u306f\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306e\u5b9a\u7fa9\u3092\u5fe0\u5b9f\u306b\u5b88\u308a\u51e6\u7406\u3092\u5b9f\u88c5\u3059\u308b\u3053\u3068\u3092\u5f37\u5236\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30af\u30e9\u30b9\u306b\u6301\u305f\u305b\u308b\u3079\u304d\u30e1\u30bd\u30c3\u30c9\u306e\u5b9a\u7fa9\u3092\u66f8\u304f\u8a2d\u8a08\u56f3\u3068\u306a\u308a\u3001",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9f\u88c5\u3057\u305f\u5404\u30af\u30e9\u30b9\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3078\u306e\u30a2\u30c3\u30d7\u30ad\u30e3\u30b9\u30c8\u304c\u53ef\u80fd")),"\u3067\u3059\u3002"),(0,l.kt)("h3",{id:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u4f5c\u308b\u3068\u3044\u3046\u3053\u3068\u306f\u4ed5\u69d8\u3092\u6c7a\u5b9a\u3059\u308b\u3053\u3068"},"\u300c\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u4f5c\u308b\u300d\u3068\u3044\u3046\u3053\u3068\u306f\u300c\u4ed5\u69d8\u300d\u3092\u6c7a\u5b9a\u3059\u308b\u3053\u3068"),(0,l.kt)("p",null,"\u300c\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u4f5c\u308b\u300d\u3068\u3044\u3046\u3053\u3068\u306f\u3001\u305d\u308c\u3092\u5b9f\u88c5\u3059\u308b\u30af\u30e9\u30b9\u306b\u300c\u3007\u3007\u3068\u3044\u3046\u30e1\u30bd\u30c3\u30c9\u3092\u6301\u3063\u3066\u304a\u308a\u3001\u5b9f\u884c\u3059\u308b\u3068\u2715\u2715\u3068\u3044\u3046\u7d50\u679c\u304c\u8fd4\u308a\u307e\u3059\u300d\u3068\u3044\u3046\u6c7a\u3081\u4e8b\u3092\u5148\u306b\u4f5c\u308b\u3053\u3068\u306b\u7b49\u3057\u3044\u3067\u3059\u3002\n\u3053\u308c\u306f\u8a00\u3063\u3066\u307f\u308c\u3070\u30d7\u30ed\u30b0\u30e9\u30e0\u30bd\u30fc\u30b9\u4e0a\u3067\u6c7a\u5b9a\u3055\u308c\u308b\u300c\u4ed5\u69d8\u300d\u3068\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u300c\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306b\u3088\u3063\u3066\u5b9a\u7fa9\u3055\u308c\u305f\u578b\u3092\u30af\u30e9\u30b9\u306b\u6301\u305f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u300d\u3068\u3044\u3046\u8003\u3048\u65b9\u3067\u3082\u3088\u3044\u3067\u3057\u3087\u3046\u3002"),(0,l.kt)("p",null,"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u6307\u5411\u306b\u3088\u308b\u8a2d\u8a08\u30fb\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3092\u884c\u3046\u306b\u3042\u305f\u3063\u3066\u3001\u632f\u308b\u821e\u3044\u306e\u540d\u524d\u3084\u3001\u305d\u308c\u306b\u5fc5\u8981\u306a\u30c7\u30fc\u30bf\u578b\u3001\u305d\u308c\u306b\u3088\u3063\u3066\u5f97\u3089\u308c\u308b\u7d50\u679c\u3092\u6c7a\u3081\u3066\u304a\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u91cd\u8981\u306a\u6a5f\u80fd\u3068\u8a00\u3048\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"java\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9"},"Java\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9"),(0,l.kt)("h3",{id:"interface\u5b9a\u7fa9\u69cb\u6587"},"interface\u5b9a\u7fa9\u69cb\u6587"),(0,l.kt)("p",null,"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9a\u7fa9\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u901a\u5e38\u306e\u30af\u30e9\u30b9\u5ba3\u8a00\u306e",(0,l.kt)("inlineCode",{parentName:"p"},"class"),"\u3092",(0,l.kt)("inlineCode",{parentName:"p"},"interface"),"\u3068\u3057\u3066\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u69cb\u6587\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"package \u30d1\u30c3\u30b1\u30fc\u30b8\u540d;\n\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50 interface \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u540d {\n\n    \u5b9a\u6570\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5ba3\u8a00\n\n    \u62bd\u8c61\u30e1\u30bd\u30c3\u30c9\u306e\u5ba3\u8a00\n\n}\n")),(0,l.kt)("h2",{id:"interface\u5b9f\u88c5\u69cb\u6587"},"interface\u5b9f\u88c5\u69cb\u6587"),(0,l.kt)("p",null,"\u30af\u30e9\u30b9\u3092\u300c\u7d99\u627f\u300d\u3059\u308b\u5834\u5408\u306b\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"extends"),"\u3092\u4f7f\u7528\u3057\u307e\u3057\u305f\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u300c\u5b9f\u88c5\u300d\u3059\u308b\u5834\u5408\u306b\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"implements"),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"package \u30d1\u30c3\u30b1\u30fc\u30b8\u540d;\n\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50 class \u30af\u30e9\u30b9\u540d implements \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u540d {\n\n    \u30af\u30e9\u30b9\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\n\n    \u30af\u30e9\u30b9\u306e\u30e1\u30bd\u30c3\u30c9\n\n    \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3067\u4f5c\u6210\u3057\u305f\u62bd\u8c61\u30e1\u30bd\u30c3\u30c9\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\n\n}\n")),(0,l.kt)("p",null,"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3067\u7528\u610f\u3055\u308c\u305f\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u5b9f\u88c5\u3092\u884c\u3046\u30af\u30e9\u30b9\u306b\u3066\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u306a\u3044\u3068\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u30a8\u30e9\u30fc\u3068\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u307e\u305f\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306f\u300c\u7d99\u627f\u300d\u3068\u7570\u306a\u308a\u3001\u8907\u6570\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u30af\u30e9\u30b9\u3067\u300c\u5b9f\u88c5\u300d\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4ee5\u4e0b\u306e\u66f8\u304d\u65b9\u306e\u3088\u3046\u306b\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"implements"),"\u306e\u3042\u3068\u306b\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u300c,\uff08\u30ab\u30f3\u30de\uff09\u300d\u3067\u533a\u5207\u308b\u3053\u3068\u3067\u8907\u6570\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9f\u88c5\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"package \u30d1\u30c3\u30b1\u30fc\u30b8\u540d;\n\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50 class \u30af\u30e9\u30b9\u540d implements \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b91\u540d, \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b92\u540d, \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b93\u540d {\n\n    \u30af\u30e9\u30b9\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\n\n    \u30af\u30e9\u30b9\u306e\u30e1\u30bd\u30c3\u30c9\n\n    \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b91\u3067\u4f5c\u6210\u3057\u305f\u62bd\u8c61\u30e1\u30bd\u30c3\u30c9\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\n\n    \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b92\u3067\u4f5c\u6210\u3057\u305f\u62bd\u8c61\u30e1\u30bd\u30c3\u30c9\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\n\n    \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b93\u3067\u4f5c\u6210\u3057\u305f\u62bd\u8c61\u30e1\u30bd\u30c3\u30c9\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\n}\n")),(0,l.kt)("p",null,"\u3053\u306e\u5834\u5408\u3001\u4e0a\u8a18\u306e\u300c\u30af\u30e9\u30b9\u540d\u3068\u3044\u3046\u30af\u30e9\u30b9\u300d\u306f\u300c\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b91\u300d\u3068\u3057\u3066\u3082\u632f\u308b\u821e\u3044\u3001\u300c\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b92\u300d\u3068\u3057\u3066\u3082\u632f\u308b\u821e\u3044\u3001\u300c\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b93\u300d\u3068\u3057\u3066\u3082\u632f\u308b\u821e\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"interface\u304c\u6301\u3066\u308b\u3082\u306e"},"interface\u304c\u6301\u3066\u308b\u3082\u306e"),(0,l.kt)("p",null,"Java\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306f\u3001\u4ee5\u4e0b\u306e\u3082\u306e\u304c\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u6570\u30d5\u30a3\u30fc\u30eb\u30c9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5024\u304c\u5909\u5316\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u6301\u3066\u307e\u305b\u3093\u3002"),(0,l.kt)("li",{parentName:"ul"},"interface\u5185\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"int a = 1;"),"\u3068\u3059\u308b\u3068\u3001\u5185\u90e8\u7684\u306b\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"public final static int a = 1;"),"\u3068\u3057\u3066\u51e6\u7406\u3055\u308c\u307e\u3059\u3002\u3082\u3061\u308d\u3093\u5024\u306e\u5909\u66f4\u306f\u3067\u304d\u307e\u305b\u3093\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u30e1\u30bd\u30c3\u30c9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"interface\u5185\u3067",(0,l.kt)("inlineCode",{parentName:"li"},"void method(int a);"),"\u3068\u3059\u308b\u3068\u3001\u5185\u90e8\u7684\u306b\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"public abstract void method(int a);"),"\u3068\u3057\u3066\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default"),"\u4fee\u98fe\u30e1\u30bd\u30c3\u30c9\uff08\u3053\u306e\u8cc7\u6599\u306b\u3066\u5f8c\u307b\u3069\u8a73\u3057\u304f\u8aac\u660e\u304c\u3042\u308a\u307e\u3059\uff09",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default"),"\u4fee\u98fe\u5b50\u3068\u3044\u3046\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u5c02\u7528\u306e\u4fee\u98fe\u5b50\u3092\u30e1\u30bd\u30c3\u30c9\u5b9a\u7fa9\u306b\u4f7f\u7528\u3059\u308b\u3068\u3001\u57fa\u672c\u3068\u306a\u308b\u51e6\u7406\u5185\u5bb9\u3092\u66f8\u304f\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default void method(int a) { \u30e1\u30bd\u30c3\u30c9\u306e\u51e6\u7406\u5185\u5bb9 }"),"\u3068\u3059\u308b\u3068\u3001\u5b50\u30af\u30e9\u30b9\u3067\u306f\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u306a\u304f\u3066\u3082\u3088\u304f\u306a\u308a\u3001\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u306a\u3044\u5834\u5408\u306f\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3067\u5b9a\u7fa9\u3057\u305f\u30e1\u30bd\u30c3\u30c9\u306e\u51e6\u7406\u5185\u5bb9\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u305f\u3060\u3057\u3001\u3053\u308c\u306b\u3088\u308a\u591a\u91cd\u7d99\u627f\u304c\u884c\u3048\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u591a\u91cd\u3067\u5b9f\u88c5\u3059\u308b\u5834\u5408\u306f\u3001\u540c\u540d\u306e\u30e1\u30bd\u30c3\u30c9\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u306f\u3001\u5fc5\u305a\u5b50\u30af\u30e9\u30b9\u3067\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"static"),"\u4fee\u98fe\u30e1\u30bd\u30c3\u30c9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u5fc5\u8981\u3068\u3057\u306a\u3044\uff08\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3057\u306a\u304f\u3066\u3082\u4f7f\u3048\u308b\uff09static\u30e1\u30bd\u30c3\u30c9\u306f\u5b9f\u88c5\u53ef\u80fd\u3067\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"static void method(int a) { \u30e1\u30bd\u30c3\u30c9\u306e\u51e6\u7406\u5185\u5bb9 }"),"\u3068\u3059\u308b\u3068\u3001\u6697\u9ed9\u7684\u306b",(0,l.kt)("inlineCode",{parentName:"li"},"public static void method(int a) { \u30e1\u30bd\u30c3\u30c9\u306e\u51e6\u7406\u5185\u5bb9 }"),"\u3068\u3057\u3066\u5b9a\u7fa9\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"static\u30e1\u30bd\u30c3\u30c9\u3060\u3051\u306f",(0,l.kt)("inlineCode",{parentName:"li"},"private"),"\u4fee\u98fe\u5b50\u304c\u4f7f\u7528\u3067\u304d\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"private static"),"\u306a\u30e1\u30bd\u30c3\u30c9\u306f\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u5185\u306e",(0,l.kt)("inlineCode",{parentName:"li"},"default"),"\u3084",(0,l.kt)("inlineCode",{parentName:"li"},"static"),"\u306e\u30e1\u30bd\u30c3\u30c9\u304b\u3089\u547c\u3073\u51fa\u305b\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"static\u306a\u30e1\u30bd\u30c3\u30c9\u304b\u3089\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"default"),"\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3076\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\uff08\u901a\u5e38\u306e\u30af\u30e9\u30b9\u306b\u304a\u3051\u308bstatic\u30e1\u30bd\u30c3\u30c9\u304b\u3089\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3079\u306a\u3044\u5236\u7d04\u3068\u540c\u3058\u3067\u3059\u3002\uff09")))),(0,l.kt)("p",null,"Java\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u306b\u3088\u308a\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306b\u306f\u3044\u304f\u3064\u3082\u306e\u65b0\u6a5f\u80fd\u304c\u8ffd\u52a0\u3055\u308c\u3066\u304a\u308a\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"default"),",",(0,l.kt)("inlineCode",{parentName:"p"},"static"),"\u306f\u305d\u306e\u4ee3\u8868\u7684\u306a\u3082\u306e\u3067\u3059\u3002"),(0,l.kt)("h2",{id:"interface\u306finterface\u3092\u7d99\u627f\u3067\u304d\u308b"},"interface\u306finterface\u3092\u300c\u7d99\u627f\u300d\u3067\u304d\u308b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"package \u30d1\u30c3\u30b1\u30fc\u30b8\u540d;\n\u30a2\u30af\u30bb\u30b9\u4fee\u98fe\u5b50 interface \u5b50\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u540d extends \u89aa\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u540d {\n\n    \u5b9a\u6570\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5ba3\u8a00\n\n    \u30e1\u30bd\u30c3\u30c9\u306e\u5ba3\u8a00\n\n}\n")),(0,l.kt)("p",null,"\u3053\u306e\u5834\u5408\u3001\u5b50\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306f\u89aa\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3001\u62bd\u8c61\u30e1\u30bd\u30c3\u30c9\u3092\u7d99\u627f\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"interface\u306e\u7279\u5fb4\u307e\u3068\u3081"},"interface\u306e\u7279\u5fb4\u307e\u3068\u3081"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u30af\u30e9\u30b9\u3068\u540c\u69d8\u306b\u3001new\u6f14\u7b97\u5b50\u306b\u3088\u308b\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u306f\u3067\u304d\u306a\u3044",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u305f\u3060\u3057\u3001\u578b\u3068\u3057\u3066\u5ba3\u8a00\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3001\u305d\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9f\u88c5\u3057\u3066\u3044\u308b\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u683c\u7d0d\u3067\u304d\u308b"))),(0,l.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306f\u5b9a\u6570\u3068\u62bd\u8c61\u30e1\u30bd\u30c3\u30c9\u3001default\u30e1\u30bd\u30c3\u30c9\uff08\u203b\u5f8c\u8ff0\uff09\u3057\u304b\u6301\u3066\u306a\u3044",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u6570\u306e",(0,l.kt)("inlineCode",{parentName:"li"},"public final static"),"\u4fee\u98fe\u5b50\u3084\u3001\u62bd\u8c61\u30e1\u30bd\u30c3\u30c9\u306e",(0,l.kt)("inlineCode",{parentName:"li"},"public abstract"),"\u306f\u7701\u7565\u53ef\u80fd\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u30af\u30e9\u30b9\u306f\u8907\u6570\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9f\u88c5\u3067\u304d\u308b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u3059\u3079\u3066\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306e\u62bd\u8c61\u30e1\u30bd\u30c3\u30c9\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306f\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u300c\u7d99\u627f\u300d\u3067\u304d\u308b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306e\u62bd\u8c61\u5316\u3092\u5b9f\u73fe\u3067\u304d\u308b\u304c\u3001\u5b89\u6613\u306b\u4f7f\u3046\u3068\u8907\u96d1\u5316\u3057\u3066\u3057\u307e\u3046\u305f\u3081\u30aa\u30b9\u30b9\u30e1\u306f\u3057\u307e\u305b\u3093\u3002")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u7528\u3044\u305f\u591a\u91cd\u7d99\u627f"},"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u7528\u3044\u305f\u591a\u91cd\u7d99\u627f"),(0,l.kt)("h3",{id:"defalt\u4fee\u98fe\u5b50\u3092\u7528\u3044\u305f\u51e6\u7406\u306e\u5b9f\u88c5"},"defalt\u4fee\u98fe\u5b50\u3092\u7528\u3044\u305f\u51e6\u7406\u306e\u5b9f\u88c5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"default"),"\u4fee\u98fe\u5b50\u3068\u547c\u3070\u308c\u308b\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306e\u307f\u3067\u4f7f\u7528\u3067\u304d\u308b\u30e1\u30bd\u30c3\u30c9\u5b9a\u7fa9\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306a\u306e\u306b\u51e6\u7406\u5185\u5bb9\u3092\u66f8\u3051\u307e\u3059\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"default"),"\u30e1\u30bd\u30c3\u30c9\u306f\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9f\u88c5\u3057\u305f\u30af\u30e9\u30b9\u3067\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u306a\u304f\u3066\u3082\u3088\u304f\u3001\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u304c\u3055\u308c\u306a\u3051\u308c\u3070\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3067\u66f8\u304b\u308c\u3066\u3044\u308b\u30e1\u30bd\u30c3\u30c9\u306e\u51e6\u7406\u5185\u5bb9\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"default"),"\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u4e0b\u8a18\u306e\u3088\u3046\u306b\u5b9a\u7fa9\u3067\u304d\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"default"),"\u30e1\u30bd\u30c3\u30c9\u304b\u3089",(0,l.kt)("inlineCode",{parentName:"p"},"default"),"\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3076\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"void methodA();\ndefault void methodBtoA() {\n    methodA();\n}\ndefault int methodHoge() {\n    return 42;\n}\n")),(0,l.kt)("p",null,"\u3053\u308c\u306b\u3088\u308a\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u8907\u6570\u5b9f\u88c5\u3059\u308b\u5834\u5408\u3067\u3082\u51e6\u7406\u3092\u7d99\u627f\u3067\u304d\u307e\u3059\u3002  "),(0,l.kt)("h3",{id:"\u591a\u91cd\u7d99\u627f\u3067\u540c\u3058\u30e1\u30bd\u30c3\u30c9\u304c\u8907\u6570\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3069\u3046\u306a\u308b\u304b"},"\u591a\u91cd\u7d99\u627f\u3067\u540c\u3058\u30e1\u30bd\u30c3\u30c9\u304c\u8907\u6570\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3069\u3046\u306a\u308b\u304b"),(0,l.kt)("p",null,"\u540c\u3058\u30e1\u30bd\u30c3\u30c9\uff08\u30e1\u30bd\u30c3\u30c9\u540d\u3001\u5f15\u6570\u304c\u540c\u3058\uff09\u5834\u5408\u3001\u7d99\u627f\u3092\u884c\u3046\u3068\u3001\u3069\u3063\u3061\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3079\u3070\u826f\u3044\u306e\u304b\u5224\u65ad\u304c\u3064\u304b\u306a\u304f\u306a\u308a\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\uff08\u3053\u308c\u304c\u8a2d\u8a08\u4e0a\u306e\u554f\u984c\u3068\u3057\u3066\u5b58\u5728\u3059\u308b\u306e\u3067\u3001Java\u3067\u306fextends\u3092\u7528\u3044\u305f\u591a\u91cd\u7d99\u627f\u304c\u3067\u304d\u306a\u3044\u8a2d\u8a08\u3068\u306a\u3063\u3066\u3044\u305f\u306e\u3067\u3059\u2026\u2026\u3002\uff09"),(0,l.kt)("p",null,"\u3057\u304b\u3057\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3067\u306e\u30e1\u30bd\u30c3\u30c9\u5b9a\u7fa9\u306f\u3001\u62bd\u8c61\u30e1\u30bd\u30c3\u30c9\u304c\u57fa\u672c\u3068\u306a\u308a\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306b\u3066\u62bd\u8c61\u30e1\u30bd\u30c3\u30c9\u306e\u307f\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u300c\u5b9f\u88c5\u3092\u884c\u3063\u305f\u30af\u30e9\u30b9\u306b\u3066\u305d\u306e\u30e1\u30bd\u30c3\u30c9\u304c\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3055\u308c\u3066\u3044\u308c\u300d\u3070\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"\u540c\u3058\u540d\u524d\u3001\u5f15\u6570\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30e1\u30bd\u30c3\u30c9\u304c\u8907\u6570\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30af\u30e9\u30b9\u306b\u3066\u5fc5\u305a\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u30c7\u30d5\u30a9\u30eb\u30c8\u30e1\u30bd\u30c3\u30c9\u306e\u4e2d\u306b\u66f8\u304b\u308c\u305f\u51e6\u7406\u306f\u591a\u91cd\u7d99\u627f\u306b\u3066\u30d0\u30c3\u30c6\u30a3\u30f3\u30b0\u3057\u305f\u5834\u5408\u306b\u4f7f\u3048\u306a\u304f\u306a\u308a\u307e\u3059\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002\uff08\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u306a\u3044\u3068\u30b3\u30f3\u30d1\u30a4\u30eb\u30a8\u30e9\u30fc\u3068\u306a\u308a\u307e\u3059\uff09"),(0,l.kt)("p",null,"\u4f59\u8ac7:",(0,l.kt)("br",{parentName:"p"}),"\n","C++\u306a\u3069\u306e\u4e00\u90e8\u306e\u8a00\u8a9e\u3067\u306f\u3001\u30af\u30e9\u30b9\u3092\u8907\u6570extends\u3067\u304d\u308b\u3082\u306e\u3082\u3042\u308a\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","Java\u306f\u305d\u308c\u3092\u8a31\u5bb9\u3057\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u305d\u306e\u304b\u308f\u308a\u306b\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306e\u6982\u5ff5\u3092\u5c0e\u5165\u3059\u308b\u3053\u3068\u3068\u306a\u3063\u3066\u3044\u305f\u306f\u305a\u2026\u2026\u306a\u306e\u3067\u3059\u304c\u3001Java 8\u4ee5\u964d\u3067\u306f\u305d\u3053\u304c\u898b\u76f4\u3055\u308c\u53f3\u5023\u3048\u3057\u305f\u3053\u3068\u3068\u306a\u308a\u307e\u3059\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u591a\u91cd\u7d99\u627f\u3057\u305f\u5834\u5408\u306b\u3061\u3083\u3093\u3068\u30b3\u30f3\u30d1\u30a4\u30eb\u30a8\u30e9\u30fc\u3092\u51fa\u305b\u308c\u3070\u826f\u3044\u3068\u3044\u3046\u72b6\u6cc1\u306b\u306a\u3063\u3066\u304f\u308c\u305f\u306e\u306f\u826f\u3044\u3053\u3068\u306a\u306e\u304b\u305d\u308c\u3068\u3082\u3001\u305d\u3082\u305d\u3082\u8907\u6570extends\u3067\u304d\u3066\u3082\u826f\u3044\u306e\u3067\u306f\uff1f\u3068\u601d\u3046\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u6271\u3046\u5834\u5408\u306b\u6ce8\u610f\u3057\u3066\u304a\u3044\u3066\u6b32\u3057\u3044\u3053\u3068"},"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u6271\u3046\u5834\u5408\u306b\u6ce8\u610f\u3057\u3066\u304a\u3044\u3066\u6b32\u3057\u3044\u3053\u3068"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306f\u8a2d\u8a08\u6bb5\u968e\u3067\u7528\u610f\u3059\u308b\u3053\u3068"),(0,l.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306e\u4ed5\u69d8\u5909\u66f4\u306f\u5f71\u97ff\u7bc4\u56f2\u304c\u304b\u306a\u308a\u5927\u304d\u3044\u306e\u3067\u3001\u5f8c\u304b\u3089\u30e1\u30bd\u30c3\u30c9\u306e\u8ffd\u52a0\u3084\u5909\u66f4\u306f\u614e\u91cd\u306b\u884c\u3046\u3053\u3068"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u6570\u3060\u3051\u6301\u3064\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u306f\u4f5c\u3089\u306a\u3044",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u6570\u3060\u3051\u3092\u6301\u3064\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3082\u4f5c\u308c\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u305d\u308c\u306f\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3067\u306a\u304f\u3066\u3082\u826f\u3044\u306f\u305a\u3067\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u6570\u3060\u3051\u3092\u6301\u3064\u30af\u30e9\u30b9\u3092\u4f5c\u308a\u305f\u3044\u5834\u5408\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3067\u3082\u30af\u30e9\u30b9\u3067\u3082\u306a\u304f\u3001\u5217\u6319\u578b\u306e",(0,l.kt)("inlineCode",{parentName:"li"},"enum"),"\u304c\u3042\u308b\u305f\u3081\u3053\u3061\u3089\u3092\u4f7f\u3046\u3068\u826f\u3044\u3067\u3059\u3002")))))}m.isMDXComponent=!0}}]);