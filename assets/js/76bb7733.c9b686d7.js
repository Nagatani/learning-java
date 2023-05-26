"use strict";(self.webpackChunkmyjavadoc=self.webpackChunkmyjavadoc||[]).push([[6090],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),u=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=u(a),c=r,d=s["".concat(m,".").concat(c)]||s[c]||o[c]||l;return a?n.createElement(d,i(i({ref:t},k),{},{components:a})):n.createElement(d,i({ref:t},k))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={title:"\u30af\u30e9\u30b9\u306e\u7d99\u627f"},i=void 0,p={unversionedId:"splitting-the-code/\u30af\u30e9\u30b9\u306e\u7d99\u627f",id:"splitting-the-code/\u30af\u30e9\u30b9\u306e\u7d99\u627f",title:"\u30af\u30e9\u30b9\u306e\u7d99\u627f",description:"\u6ce8\u610f\u70b9",source:"@site/docs/07-splitting-the-code/02-\u30af\u30e9\u30b9\u306e\u7d99\u627f.md",sourceDirName:"07-splitting-the-code",slug:"/splitting-the-code/\u30af\u30e9\u30b9\u306e\u7d99\u627f",permalink:"/learning-java/splitting-the-code/\u30af\u30e9\u30b9\u306e\u7d99\u627f",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u30af\u30e9\u30b9\u306e\u7d99\u627f"},sidebar:"tutorialSidebar",previous:{title:"\u5b66\u7fd2\u7528RPG\u306e\u4f5c\u6210(SimpleRPG)",permalink:"/learning-java/splitting-the-code/\u5b66\u7fd2\u7528RPG\u306e\u4f5c\u6210"},next:{title:"\u30e1\u30bd\u30c3\u30c9\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9",permalink:"/learning-java/splitting-the-code/\u30e1\u30bd\u30c3\u30c9\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9"}},m={},u=[{value:"\u6ce8\u610f\u70b9",id:"\u6ce8\u610f\u70b9",level:2},{value:"\u524d\u7f6e\u304d",id:"\u524d\u7f6e\u304d",level:2},{value:"SimpleRPG\u306e\u8a2d\u8a08\u304b\u3089\u8003\u3048\u308b",id:"simplerpg\u306e\u8a2d\u8a08\u304b\u3089\u8003\u3048\u308b",level:2},{value:"\u4f3c\u901a\u3063\u305f\u30af\u30e9\u30b9\u3092\u307e\u3068\u3081\u3088\u3046",id:"\u4f3c\u901a\u3063\u305f\u30af\u30e9\u30b9\u3092\u307e\u3068\u3081\u3088\u3046",level:3},{value:"\u53cc\u65b9\u306b\u5171\u901a\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u3001\u30e1\u30bd\u30c3\u30c9\u3092\u6301\u3064\u89aa\u3092\u4f5c\u6210\u3059\u308b",id:"\u53cc\u65b9\u306b\u5171\u901a\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u30e1\u30bd\u30c3\u30c9\u3092\u6301\u3064\u89aa\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"CharacterBase.java \u8a73\u7d30",id:"characterbasejava-\u8a73\u7d30",level:3},{value:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf",id:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf",level:4},{value:"\u30e1\u30bd\u30c3\u30c9",id:"\u30e1\u30bd\u30c3\u30c9",level:4},{value:"\u884c\u52d5\u5236\u5fa1\u30e1\u30bd\u30c3\u30c9",id:"\u884c\u52d5\u5236\u5fa1\u30e1\u30bd\u30c3\u30c9",level:4},{value:"\u5171\u901a\u90e8\u5206\u3092\u6301\u3064\u30af\u30e9\u30b9\u3092\u7d99\u627f\u3055\u305b\u308b",id:"\u5171\u901a\u90e8\u5206\u3092\u6301\u3064\u30af\u30e9\u30b9\u3092\u7d99\u627f\u3055\u305b\u308b",level:2},{value:"Hero.java, Enemy.java \u5909\u66f4\u70b9",id:"herojava-enemyjava-\u5909\u66f4\u70b9",level:3},{value:"\u30af\u30e9\u30b9\u5ba3\u8a00\u90e8",id:"\u30af\u30e9\u30b9\u5ba3\u8a00\u90e8",level:4},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9",id:"\u30d5\u30a3\u30fc\u30eb\u30c9",level:4},{value:"\u30e1\u30bd\u30c3\u30c9",id:"\u30e1\u30bd\u30c3\u30c9-1",level:4},{value:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf",id:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf-1",level:4},{value:"Hero.java",id:"herojava",level:4},{value:"public Hero(String name, int hp, int atk, int def, int agi)",id:"public-herostring-name-int-hp-int-atk-int-def-int-agi",level:5},{value:"Enemy.java",id:"enemyjava",level:4},{value:"public Enemy(String name, int hp, int atk, int def, int agi)",id:"public-enemystring-name-int-hp-int-atk-int-def-int-agi",level:5},{value:"\u5909\u66f4\u304c\u5b8c\u4e86\u3057\u305f\u3089\u4e00\u5ea6\u5b9f\u884c\u3057\u3066\u307f\u308b",id:"\u5909\u66f4\u304c\u5b8c\u4e86\u3057\u305f\u3089\u4e00\u5ea6\u5b9f\u884c\u3057\u3066\u307f\u308b",level:3},{value:"\u8ffd\u52a0\uff1a \u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u57fa\u672c\u30af\u30e9\u30b9(CharacterBase.java)",id:"\u8ffd\u52a0-\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u57fa\u672c\u30af\u30e9\u30b9characterbasejava",level:3},{value:"\u5909\u66f4\uff1a \u52c7\u8005\u30af\u30e9\u30b9 (Hero.java)",id:"\u5909\u66f4-\u52c7\u8005\u30af\u30e9\u30b9-herojava",level:3},{value:"\u5909\u66f4\uff1a \u6575\u30af\u30e9\u30b9 (Enemy.java)",id:"\u5909\u66f4-\u6575\u30af\u30e9\u30b9-enemyjava",level:3},{value:"SimpleRPG.java\u3092\u5909\u66f4\u3057\u306a\u304f\u3066\u3082\u5b9f\u884c\u3067\u304d\u308b\u7406\u7531",id:"simplerpgjava\u3092\u5909\u66f4\u3057\u306a\u304f\u3066\u3082\u5b9f\u884c\u3067\u304d\u308b\u7406\u7531",level:2},{value:"\u30a2\u30c3\u30d7\u30ad\u30e3\u30b9\u30c8",id:"\u30a2\u30c3\u30d7\u30ad\u30e3\u30b9\u30c8",level:3},{value:"\u30a2\u30c3\u30d7\u30ad\u30e3\u30b9\u30c8\u306e\u53cd\u5bfe\u306f\u30c0\u30a6\u30f3\u30ad\u30e3\u30b9\u30c8",id:"\u30a2\u30c3\u30d7\u30ad\u30e3\u30b9\u30c8\u306e\u53cd\u5bfe\u306f\u30c0\u30a6\u30f3\u30ad\u30e3\u30b9\u30c8",level:3},{value:"\u7d99\u627f\u3067\u77e5\u3063\u3066\u307b\u3057\u3044\u3053\u3068",id:"\u7d99\u627f\u3067\u77e5\u3063\u3066\u307b\u3057\u3044\u3053\u3068",level:2}],k={toc:u};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6ce8\u610f\u70b9"},"\u6ce8\u610f\u70b9"),(0,r.kt)("p",null,"\u3053\u306e\u8cc7\u6599\u306e\u5185\u5bb9\u306f\u3001\u300c\u5b66\u7fd2\u7528RPG\u306e\u4f5c\u6210\u300d\u306e\u8cc7\u6599\u3067\u4f5c\u6210\u3057\u305fSimpleRPG\u3092\u30d9\u30fc\u30b9\u306b\u3001\u4ed5\u69d8\u5909\u66f4\u3084\u30d6\u30e9\u30c3\u30b7\u30e5\u30a2\u30c3\u30d7\u3092\u884c\u3046\u60f3\u5b9a\u3067\u624b\u3092\u52a0\u3048\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u524d\u7f6e\u304d"},"\u524d\u7f6e\u304d"),(0,r.kt)("p",null,"\u7d99\u627f\u306f\u3001\u3042\u308b\u30af\u30e9\u30b9\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3084\u30e1\u30bd\u30c3\u30c9\u3092\u53d7\u3051\u7d99\u3044\u3067\u65b0\u3057\u3044\u30af\u30e9\u30b9\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5148\u306b\u6ce8\u610f\u70b9\u3092\u6319\u3052\u3066\u304a\u304f\u3068\u3001\u7d99\u627f\u5143\u3068\u306a\u308b\u30af\u30e9\u30b9\u306b\u5bfe\u3057\u3066\u4ed5\u69d8\u5909\u66f4\u3084\u6539\u4fee\u304c\u884c\u308f\u308c\u308b\u5834\u5408\u306b\u306f\u30d7\u30ed\u30b0\u30e9\u30e0\u5168\u4f53\u3092\u58ca\u3057\u3066\u3057\u307e\u3046\u3053\u3068\u304c\u8003\u3048\u3089\u308c\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7d99\u627f\u306f\u3068\u3066\u3082\u4fbf\u5229\u306a\u4ed5\u7d44\u307f\u3067\u3059\u3002\u4fbf\u5229\u306a\u306e\u3067\u7d99\u627f\u3092\u4f7f\u3046\u3053\u3068\u304c\u524d\u63d0\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u8a2d\u8a08\u3057\u3066\u3057\u307e\u3044\u304c\u3061\u3067\u3059\u304c\u3001\u305d\u3046\u3044\u3063\u305f\u72b6\u6cc1\u3053\u305d\u3001",(0,r.kt)("strong",{parentName:"p"},"\u7d99\u627f\u306b\u3088\u308b\u30c7\u30e1\u30ea\u30c3\u30c8\u3092\u3057\u3063\u304b\u308a\u3068\u7406\u89e3"),"\u3057\u3066\u4f7f\u3046\u3001\u3082\u3057\u304f\u306f",(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u308f\u306a\u3044"),"\u9078\u629e\u3092\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("h2",{id:"simplerpg\u306e\u8a2d\u8a08\u304b\u3089\u8003\u3048\u308b"},"SimpleRPG\u306e\u8a2d\u8a08\u304b\u3089\u8003\u3048\u308b"),(0,r.kt)("h3",{id:"\u4f3c\u901a\u3063\u305f\u30af\u30e9\u30b9\u3092\u307e\u3068\u3081\u3088\u3046"},"\u4f3c\u901a\u3063\u305f\u30af\u30e9\u30b9\u3092\u307e\u3068\u3081\u3088\u3046"),(0,r.kt)("p",null,"\u73fe\u6642\u70b9\u306eSimpleRPG\u3067\u306f\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u3084\u30e1\u30bd\u30c3\u30c9\u304c\u307b\u307c\u540c\u3058\u30af\u30e9\u30b9\u304c\u3042\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hero.java"),(0,r.kt)("li",{parentName:"ul"},"Enemy.java")),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u30af\u30e9\u30b9\u306e\u5171\u6709\u70b9\u3092\u6d17\u3044\u51fa\u3057\u3001\u3072\u3068\u307e\u3068\u3081\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u53cc\u65b9\u306b\u5171\u901a\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u30e1\u30bd\u30c3\u30c9\u3092\u6301\u3064\u89aa\u3092\u4f5c\u6210\u3059\u308b"},"\u53cc\u65b9\u306b\u5171\u901a\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u3001\u30e1\u30bd\u30c3\u30c9\u3092\u6301\u3064\u89aa\u3092\u4f5c\u6210\u3059\u308b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CharacterBase"),"\u3068\u3044\u3046\u540d\u524d\u306e\u30af\u30e9\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u203b\u30af\u30e9\u30b9\u306e\u4e2d\u8eab\u306f\u3001Hero.java\u306e\u4e2d\u304b\u3089\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u30e1\u30bd\u30c3\u30c9\u3068\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3092\u30b3\u30d4\u30fc\u3057\u3066\u8cbc\u308a\u4ed8\u3051\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7d30\u304b\u3044\u4fee\u6b63\u7b87\u6240\u306f\u5f8c\u8ff0\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306eCharacterBase\u30af\u30e9\u30b9\u306f\u3001\u30b2\u30fc\u30e0\u4e2d\u306e\u6226\u95d8\u3092\u884c\u3046\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306b\u5171\u901a\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u3084\u30e1\u30bd\u30c3\u30c9\u3092\u63d0\u4f9b\u3059\u308b\u30af\u30e9\u30b9\u3068\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"characterbasejava-\u8a73\u7d30"},"CharacterBase.java \u8a73\u7d30"),(0,r.kt)("p",null,"\u30b2\u30fc\u30e0\u5185\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\uff08\u4e3b\u306b\u6226\u95d8\u3092\u884c\u3046\uff09\u3092\u5b9a\u7fa9\u3059\u308b\u30af\u30e9\u30b9"),(0,r.kt)("p",null,"\uff08Hero.java\u304b\u3089\u5909\u66f4\u3059\u308b\u30e1\u30f3\u30d0\u306e\u307f\u629c\u7c8b\u3057\u3001\u5909\u66f4\u70b9\u306f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u5f37\u8abf\u8868\u793a"))," \u306b\u3057\u3066\u3042\u308a\u307e\u3059\u3002\uff09"),(0,r.kt)("h4",{id:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf"},"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf"),(0,r.kt)("p",null,"Hero\u30af\u30e9\u30b9\u304b\u3089\u306e\u5909\u66f4\u306f\u30af\u30e9\u30b9\u540d\u306e\u307f\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"public ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"CharacterBase")),"(String name, int hp, int atk, int def, int agi)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u305d\u308c\u305e\u308c\u5f15\u6570\u306e\u5024\u3067\u521d\u671f\u5024\u30bb\u30c3\u30c8")))),(0,r.kt)("h4",{id:"\u30e1\u30bd\u30c3\u30c9"},"\u30e1\u30bd\u30c3\u30c9"),(0,r.kt)("h4",{id:"\u884c\u52d5\u5236\u5fa1\u30e1\u30bd\u30c3\u30c9"},"\u884c\u52d5\u5236\u5fa1\u30e1\u30bd\u30c3\u30c9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"public AttackResult attack(",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"CharacterBase"))," target)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"CharacterBase"))," \u306b\u5bfe\u3057\u3066\u653b\u6483\u3092\u884c\u3046\u51e6\u7406\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002")))),(0,r.kt)("h2",{id:"\u5171\u901a\u90e8\u5206\u3092\u6301\u3064\u30af\u30e9\u30b9\u3092\u7d99\u627f\u3055\u305b\u308b"},"\u5171\u901a\u90e8\u5206\u3092\u6301\u3064\u30af\u30e9\u30b9\u3092\u7d99\u627f\u3055\u305b\u308b"),(0,r.kt)("p",null,"Hero\u30af\u30e9\u30b9\u3068Enemy\u30af\u30e9\u30b9\u306f\u3001\u305d\u308c\u305e\u308c\u6226\u95d8\u3092\u884c\u3046\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3092\u5b9a\u7fa9\u3057\u305fCharacterBase\u30af\u30e9\u30b9\u3092\u89aa\u3068\u3057\u3066\u3001\u5171\u901a\u3059\u308b\u90e8\u5206\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u7d99\u627f\u3055\u308c\u308b\u5074\u306e\u30af\u30e9\u30b9\u3092\u3001",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u89aa\u30af\u30e9\u30b9"))," \u3082\u3057\u304f\u306f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u30b9\u30fc\u30d1\u30fc\u30af\u30e9\u30b9"))," \u3068\u547c\u3073\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u305d\u308c\u306b\u5bfe\u3057\u3066\u3001\u7d99\u627f\u3059\u308b\u5074\u306e\u30af\u30e9\u30b9\u3092\u3001",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u5b50\u30af\u30e9\u30b9"))," \u307e\u305f\u306f ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u30b5\u30d6\u30af\u30e9\u30b9"))," \u3068\u547c\u3073\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"herojava-enemyjava-\u5909\u66f4\u70b9"},"Hero.java, Enemy.java \u5909\u66f4\u70b9"),(0,r.kt)("h4",{id:"\u30af\u30e9\u30b9\u5ba3\u8a00\u90e8"},"\u30af\u30e9\u30b9\u5ba3\u8a00\u90e8"),(0,r.kt)("p",null,"\u30af\u30e9\u30b9\u5ba3\u8a00\u90e8\u306b\u3001CharacterBase\u30af\u30e9\u30b9\u3092\u7d99\u627f\u3059\u308b\u65e8\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5909\u66f4\u70b9\u3068\u3057\u3066\u3001Hero\u306e\u5f8c\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"extends CharacterBase"),"\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Hero extends CharacterBase {\n    ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Enemy extends CharacterBase {\n    ...\n}\n")),(0,r.kt)("p",null,"extends\u69cb\u6587\u306f\u3001\u6307\u5b9a\u3057\u305f\u30af\u30e9\u30b9\u3092\u89aa\u3068\u3057\u3066\u305d\u306e\u89aa\u30af\u30e9\u30b9\u304b\u3089\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u3084\u30e1\u30bd\u30c3\u30c9\u3092\u305d\u306e\u307e\u307e\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306b\u7528\u3044\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\uff08\u30e1\u30bd\u30c3\u30c9\u306a\u3069\u306f\u3001\u89aa\u30af\u30e9\u30b9\u306e\u3082\u306e\u304b\u3089\u51e6\u7406\u5185\u5bb9\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002\u203b\u5f8c\u8ff0\uff09"),(0,r.kt)("h4",{id:"\u30d5\u30a3\u30fc\u30eb\u30c9"},"\u30d5\u30a3\u30fc\u30eb\u30c9"),(0,r.kt)("p",null,"\u89aa\u30af\u30e9\u30b9\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u304b\u3089\u5909\u66f4\u304c\u3042\u308a\u307e\u305b\u3093\u306e\u3067\u3001\u305d\u308c\u305e\u308c\u306b\u3042\u308b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u3059\u3079\u3066\u524a\u9664"))," \u3057\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"\u30e1\u30bd\u30c3\u30c9-1"},"\u30e1\u30bd\u30c3\u30c9"),(0,r.kt)("p",null,"\u89aa\u30af\u30e9\u30b9\u3067\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u304b\u3089\u5909\u66f4\u304c\u3042\u308a\u307e\u305b\u3093\u306e\u3067\u3001\u305d\u308c\u305e\u308c\u306b\u3042\u308b ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u30e1\u30bd\u30c3\u30c9\u306f\u3059\u3079\u3066\u524a\u9664"))," \u3057\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf-1"},"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf"),(0,r.kt)("p",null,"\u4e2d\u8eab\u3092\u305d\u308c\u305e\u308c\u4ee5\u4e0b\u306e\u3082\u306e\u306b\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u81ea\u5206\u306e\u30af\u30e9\u30b9\u3092\u6307\u3057\u793a\u3059 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"this"))," \u306b\u5bfe\u3057\u3001\u7d99\u627f\u3057\u3066\u3044\u308b\u89aa\u30af\u30e9\u30b9\u3092\u6307\u3057\u793a\u3059\u306e\u306f\u3001",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"super"))," \u3067\u53ef\u80fd\u3067\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u89aa\u30af\u30e9\u30b9\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3057\u3001\u89aa\u30af\u30e9\u30b9\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3001\u30e1\u30bd\u30c3\u30c9\u3082",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"super.\u3007\u3007"))," \u3067\u547c\u3073\u51fa\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6df7\u4e71\u3057\u3066\u3057\u307e\u3044\u3084\u3059\u3044\u306e\u3067\u6c17\u3092\u4ed8\u3051\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("h4",{id:"herojava"},"Hero.java"),(0,r.kt)("h5",{id:"public-herostring-name-int-hp-int-atk-int-def-int-agi"},"public Hero(String name, int hp, int atk, int def, int agi)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public Hero(String name, int hp, int atk, int def, int agi) {\n    super(name, hp, atk, def, agi);\n}\n")),(0,r.kt)("h4",{id:"enemyjava"},"Enemy.java"),(0,r.kt)("h5",{id:"public-enemystring-name-int-hp-int-atk-int-def-int-agi"},"public Enemy(String name, int hp, int atk, int def, int agi)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public Enemy(String name, int hp, int atk, int def, int agi) {\n    super(name, hp, atk, def, agi);\n}\n")),(0,r.kt)("h3",{id:"\u5909\u66f4\u304c\u5b8c\u4e86\u3057\u305f\u3089\u4e00\u5ea6\u5b9f\u884c\u3057\u3066\u307f\u308b"},"\u5909\u66f4\u304c\u5b8c\u4e86\u3057\u305f\u3089\u4e00\u5ea6\u5b9f\u884c\u3057\u3066\u307f\u308b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SimpleRPG.java"),"\u306b\u306f\u5909\u66f4\u3092\u52a0\u3048\u306a\u3044\u72b6\u614b\u3067\u3082\u4eca\u307e\u3067\u901a\u308a\u52d5\u4f5c\u3059\u308b\u306f\u305a\u3067\u3059\u3002"),(0,r.kt)("h3",{id:"\u8ffd\u52a0-\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u57fa\u672c\u30af\u30e9\u30b9characterbasejava"},"\u8ffd\u52a0\uff1a \u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u57fa\u672c\u30af\u30e9\u30b9(CharacterBase.java)"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u30af\u30ea\u30c3\u30af\u3067\u8868\u793a\u3059\u308b"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package jp.ac.learning;\n\npublic class CharacterBase {\n\n    private String name; // - \u540d\u524d\n    private int hp; // - \u4f53\u529b\n    private int atk; // - \u653b\u6483\u529b\n    private int def; // - \u9632\u5fa1\u529b\n    private int agi; // - \u7d20\u65e9\u3055\n\n    /**\n     * \u5404\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u6307\u5b9a\u3057\u3066\u521d\u671f\u5316\n     * @param name\n     * @param hp\n     * @param atk\n     * @param def\n     * @param agi\n     */\n    public CharacterBase(String name, int hp, int atk, int def, int agi) {\n        // \u305d\u308c\u305e\u308c\u5f15\u6570\u306e\u5024\u3067\u521d\u671f\u5024\u30bb\u30c3\u30c8\n        this.name = name;\n        this.hp = hp;\n        this.atk = atk;\n        this.def = def;\n        this.agi = agi;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public int getHp() {\n        return hp;\n    }\n\n    public int getAtk() {\n        return atk;\n    }\n\n    public int getDef() {\n        return def;\n    }\n\n    public int getAgi() {\n        return agi;\n    }\n\n    public AttackResult attack(CharacterBase target) {\n        // \u6575\u306b\u5bfe\u3057\u3066\u653b\u6483\u3092\u884c\u3046\u51e6\u7406\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002\n\n        // \u5f15\u6570\u306e\u653b\u6483\u5bfe\u8c61target\u306b\u5bfe\u3057\u3066\u4e0e\u3048\u308b\u3053\u3068\u306e\u3067\u304d\u308b\u30c0\u30e1\u30fc\u30b8\u3092\u7b97\u51fa\n        // \u4e0e\u3048\u308b\u30c0\u30e1\u30fc\u30b8 = \u81ea\u8eab\u306e\u653b\u6483\u529b - \u6575\u306e\u9632\u5fa1\u529b / 2 (\u5c0f\u6570\u70b9\u4ee5\u4e0b\u5207\u308a\u4e0a\u3052) \u306b\u3001-3\u301c+3\u306e\u30e9\u30f3\u30c0\u30e0\u306a\u5024\u3092\u52a0\u7b97\n        int damage = (int)Math.ceil((double)this.getAtk() - (target.getDef() / 2.0))\n                + (new java.util.Random().nextInt(7) - 3); // \u2190 \u22123\u301c+3\u306e\u30e9\u30f3\u30c0\u30e0\u306a\u5024\n\n        // \u4e0e\u3048\u308b\u30c0\u30e1\u30fc\u30b8\u306e\u8a08\u7b97\u5f0f\u306b\u5f93\u3063\u3066\u8a08\u7b97\u3055\u308c\u305f\u30c0\u30e1\u30fc\u30b8\u91cf\u3092\u5f15\u6570\u306e\u76f8\u624b\u306b\u4e0e\u3048\u307e\u3059\u3002\n        boolean isBattleEnd = target.receiveDamage(damage);\n\n        // \u623b\u308a\u5024\u306f\u3001AttackResult\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u751f\u6210\u3057\u3001\u30c0\u30e1\u30fc\u30b8\u91cf\u3068\u6226\u95d8\u7d9a\u884c\u304b\u3069\u3046\u304b\u306e\u72b6\u614b\u3092AttackResult\u306e\u5b9a\u6570\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4f7f\u3063\u3066\u8a2d\u5b9a\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002\n        AttackResult ret = new AttackResult();\n        ret.damage = damage;\n        if (isBattleEnd) {  // \u6226\u95d8\u304c\u7d42\u308f\u308b\u5834\u5408\u306b\u3088\u308a\u8a73\u7d30\u306a\u72b6\u614b\u3092\u6e21\u3057\u305f\u3044\n            ret.state = AttackResult.BATTLE_END;\n        } // CONTINUE \u306f\u521d\u671f\u5024\u306a\u306e\u3067\u3001END\u306e\u5834\u5408\u306e\u307f\u8a2d\u5b9a\u3059\u308c\u3070OK\n        return ret;\n    }\n\n    /**\n     * \u30c0\u30e1\u30fc\u30b8\u3092\u53d7\u3051\u308b\n     * @param damage \u53d7\u3051\u308b\u30c0\u30e1\u30fc\u30b8\u91cf\n     * @return \u6226\u95d8\u7d9a\u884c\u53ef\u80fd\u306a\u5834\u5408 false , \u4e0d\u53ef\u80fd\u306a\u5834\u5408 true\n     */\n    public boolean receiveDamage(int damage) {\n        // \u52c7\u8005\u304c\u30c0\u30e1\u30fc\u30b8\u3092\u53d7\u3051\u308b\u3002(\u81ea\u5206\u3067\u547c\u3073\u51fa\u3055\u305a\u3001\u6575\u3067\u3042\u308bEnemy\u304b\u3089\u547c\u3070\u308c\u308b)\n\n        // \u30d5\u30a3\u30fc\u30eb\u30c9\u306ehp\u304b\u3089\u5f15\u6570\u306e\u30c0\u30e1\u30fc\u30b8\u5206\u3092\u6e1b\u7b97\u3057\u3001\n        this.hp -= damage;\n\n        // 0\u3092\u4e0b\u56de\u308b\u5834\u5408\u306fhp\u306b0\u3092\u4ee3\u5165\u3059\u308b\u3002\n        if (this.hp <= 0) {\n            this.hp = 0;\n            // \u623b\u308a\u5024\u306f\u30c0\u30e1\u30fc\u30b8\u3092\u53d7\u3051\u305f\u3042\u3068\u306eHP\u304c0\u4ee5\u4e0b\u306e\u5834\u5408true\u3092\u8fd4\u3057\u3001\u6226\u95d8\u7d9a\u884c\u4e0d\u53ef\u80fd\u3068\u3059\u308b\u3002\n            return true;\n        }\n        // HP\u306f\u307e\u3060\u6b8b\u3063\u3066\u3044\u308b\u306e\u3067\u3001\u6226\u95d8\u306f\u7d9a\u884c\n        return false;\n    }\n}\n")))),(0,r.kt)("h3",{id:"\u5909\u66f4-\u52c7\u8005\u30af\u30e9\u30b9-herojava"},"\u5909\u66f4\uff1a \u52c7\u8005\u30af\u30e9\u30b9 (Hero.java)"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u30af\u30ea\u30c3\u30af\u3067\u8868\u793a\u3059\u308b"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package jp.ac.learning;\n\npublic class Hero extends CharacterBase {\n    /**\n     * \u5404\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u6307\u5b9a\u3057\u3066\u521d\u671f\u5316\n     * @param name\n     * @param hp\n     * @param atk\n     * @param def\n     * @param agi\n     */\n    public Hero(String name, int hp, int atk, int def, int agi) {\n        super(name, hp, atk, def, agi);\n    }\n}\n")))),(0,r.kt)("h3",{id:"\u5909\u66f4-\u6575\u30af\u30e9\u30b9-enemyjava"},"\u5909\u66f4\uff1a \u6575\u30af\u30e9\u30b9 (Enemy.java)"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u30af\u30ea\u30c3\u30af\u3067\u8868\u793a\u3059\u308b"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package jp.ac.learning;\n\npublic class Enemy extends CharacterBase {\n\n    /**\n     * \u5404\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u6307\u5b9a\u3057\u3066\u521d\u671f\u5316\n     * @param name\n     * @param hp\n     * @param atk\n     * @param def\n     * @param agi\n     */\n    public Enemy(String name, int hp, int atk, int def, int agi) {\n        super(name, hp, atk, def, agi);\n    }\n}\n")))),(0,r.kt)("h2",{id:"simplerpgjava\u3092\u5909\u66f4\u3057\u306a\u304f\u3066\u3082\u5b9f\u884c\u3067\u304d\u308b\u7406\u7531"},"SimpleRPG.java\u3092\u5909\u66f4\u3057\u306a\u304f\u3066\u3082\u5b9f\u884c\u3067\u304d\u308b\u7406\u7531"),(0,r.kt)("p",null,"Hero, Enemy\u30af\u30e9\u30b9\u306b\u306f\u3001\u5f15\u6570\u306b\u5404\u3005\u6575\u3068\u306a\u308bHero,Enemy\u3092\u6301\u3064",(0,r.kt)("inlineCode",{parentName:"p"},"attack"),"\u30e1\u30bd\u30c3\u30c9\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u4eca\u56de\u3001SimpleRPG\u306e\u30e1\u30a4\u30f3\u30e1\u30bd\u30c3\u30c9\u3067\u306f\u3001\u305d\u306e\u547c\u3073\u51fa\u3057\u90e8\u5206\u3092\u5909\u66f4\u3057\u306a\u304f\u3066\u3082\u30b3\u30f3\u30d1\u30a4\u30eb\u30a8\u30e9\u30fc\u304c\u51fa\u3066\u3044\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u306f\u3001\u89aa\u30af\u30e9\u30b9\u3078\u306e ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u30a2\u30c3\u30d7\u30ad\u30e3\u30b9\u30c8"))," \u3068\u3044\u3046\u6a5f\u80fd\u304c\u5185\u90e8\u3067\u6697\u9ed9\u7684\u306b\u884c\u308f\u308c\u3066\u3044\u308b\u304b\u3089\u3067\u3059\u3002"),(0,r.kt)("h3",{id:"\u30a2\u30c3\u30d7\u30ad\u30e3\u30b9\u30c8"},"\u30a2\u30c3\u30d7\u30ad\u30e3\u30b9\u30c8"),(0,r.kt)("p",null,"\u7d99\u627f\u3092\u884c\u3063\u305f\u5b50\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001\u89aa\u30af\u30e9\u30b9\u306e\u516c\u958b\u3055\u308c\u305f\u30e1\u30f3\u30d0\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"private"),"\u3067\u306a\u3044\u30d5\u30a3\u30fc\u30eb\u30c9\u3084\u30e1\u30bd\u30c3\u30c9\uff09\u3092\u3059\u3079\u3066\u6301\u3063\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u6697\u9ed9\u7684\u306b\u89aa\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3068\u3057\u3066\u632f\u308b\u821e\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3092\u30a2\u30c3\u30d7\u30ad\u30e3\u30b9\u30c8\u3068\u547c\u3073\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5b50\u30af\u30e9\u30b9\u306f\u3001\u89aa\u30af\u30e9\u30b9\u306e\u6a5f\u80fd\u3092\u5185\u5305\u3059\u308b\u305f\u3081\u3001\u5b50\u30af\u30e9\u30b9\u304c\u89aa\u30af\u30e9\u30b9\u306e\u3088\u3046\u306b\u632f\u308b\u821e\u3063\u305f\u3068\u3057\u3066\u3082\u306a\u3093\u3089\u554f\u984c\u306a\u304f\u52d5\u4f5c\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u3082\u3063\u3068\u8a00\u3048\u3070\u3001\u3059\u3079\u3066\u306e\u30af\u30e9\u30b9\u306fObject\u30af\u30e9\u30b9\u3092\u7d99\u627f\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u5f15\u6570\u306e\u578b\u3092Object\u578b\u306b\u3059\u308b\u3068\u3069\u3093\u306a\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u3082\u6e21\u3059\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002\uff08\u578b\u3092Object\u3068\u3059\u308c\u3070\u3001\u3059\u3079\u3066\u306e\u30af\u30e9\u30b9\u578b\u306e\u5909\u6570\u3092\u4ee3\u5165\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002\u305f\u3060\u3057\u3001\u6b21\u306e\u30c0\u30a6\u30f3\u30ad\u30e3\u30b9\u30c8\u306e\u9805\u76ee\u3092\u3057\u3063\u304b\u308a\u3068\u7406\u89e3\u3059\u308b\u3053\u3068\u3002\uff09"),(0,r.kt)("h3",{id:"\u30a2\u30c3\u30d7\u30ad\u30e3\u30b9\u30c8\u306e\u53cd\u5bfe\u306f\u30c0\u30a6\u30f3\u30ad\u30e3\u30b9\u30c8"},"\u30a2\u30c3\u30d7\u30ad\u30e3\u30b9\u30c8\u306e\u53cd\u5bfe\u306f\u30c0\u30a6\u30f3\u30ad\u30e3\u30b9\u30c8"),(0,r.kt)("p",null,"\u5b8c\u5168\u306b\u4f59\u8ac7\u3067\u3059\u304c\u3001\u89aa\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u5b50\u30af\u30e9\u30b9\u306b\u30ad\u30e3\u30b9\u30c8\u3059\u308b\u3053\u3068\u3092 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u30c0\u30a6\u30f3\u30ad\u30e3\u30b9\u30c8"))," \u3068\u547c\u3073\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u3053\u308c\u306f\u3001\u901a\u5e38\u306e\u30ad\u30e3\u30b9\u30c8\u3068\u540c\u69d8\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"(\u5b50\u30af\u30e9\u30b9\u540d)\u89aa\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u540d"),"\u3067\u884c\u308f\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c0\u30a6\u30f3\u30ad\u30e3\u30b9\u30c8\u3067\u306f\u30a2\u30c3\u30d7\u30ad\u30e3\u30b9\u30c8\u3068\u7570\u306a\u308a\u554f\u984c\u70b9\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u308c\u306f\u3001\u5b50\u30af\u30e9\u30b9\u304c\u89aa\u30af\u30e9\u30b9\u3092\u62e1\u5f35\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u767a\u751f\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u89aa\u30af\u30e9\u30b9\u3067\u306f\u5b9f\u88c5\u3055\u308c\u3066\u3044\u306a\u3044\u30e1\u30bd\u30c3\u30c9\u3084\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u5b50\u30af\u30e9\u30b9\u3067\u5b9f\u88c5\u3057\u3066\u3044\u308b\u306a\u3069\u306e\u72b6\u614b\u3067\u3001\u89aa\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u5b50\u30af\u30e9\u30b9\u306b\u30c0\u30a6\u30f3\u30ad\u30e3\u30b9\u30c8\u3059\u308b\u3068\u3001\u30ad\u30e3\u30b9\u30c8\u3057\u3066\u578b\u306e\u5909\u63db\u304c\u884c\u308f\u308c\u3066\u3044\u308b\u306b\u3082\u304b\u304b\u308f\u3089\u305a\u3001\u305d\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u306f\u5b50\u30af\u30e9\u30b9\u3067\u8ffd\u52a0\u62e1\u5f35\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30eb\u30c9\u3001\u30e1\u30bd\u30c3\u30c9\u304c\u5b58\u5728\u3057\u306a\u3044\u305f\u3081\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"java.lang.ClassCastException"),"\u306a\u3069\u306e\u4f8b\u5916\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a2\u30c3\u30d7\u30ad\u30e3\u30b9\u30c8\u3068\u304f\u3089\u3079\u3066\u3001\u30c0\u30a6\u30f3\u30ad\u30e3\u30b9\u30c8\u306e\u65b9\u304c\u5371\u967a\u6027\u3092\u4f34\u3044\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528\u6642\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"instanceof"),"\u6f14\u7b97\u5b50\u306a\u3069\u3092\u4f7f\u7528\u3057\u3066\u3001\u3053\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u30ad\u30e3\u30b9\u30c8\u3057\u305f\u3044\u30af\u30e9\u30b9\u3068\u540c\u3058\u304b\u3069\u3046\u304b\u3092\u5224\u65ad\u3059\u308b\u306a\u3069\u306e\u624b\u9806\u3092\u8e0f\u3093\u3067\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"\u7d99\u627f\u3067\u77e5\u3063\u3066\u307b\u3057\u3044\u3053\u3068"},"\u7d99\u627f\u3067\u77e5\u3063\u3066\u307b\u3057\u3044\u3053\u3068"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7d99\u627f\u306f\u30af\u30e9\u30b9\u5ba3\u8a00\u6642\u306b\u89aa\u3068\u3059\u308b\u30af\u30e9\u30b9\u3092",(0,r.kt)("inlineCode",{parentName:"li"},"extends"),"\u69cb\u6587\u306b\u3066\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7d99\u627f\u5143\u3068\u306a\u3063\u305f\u89aa\u30af\u30e9\u30b9\u306e",(0,r.kt)("inlineCode",{parentName:"li"},"private"),"\u4fee\u98fe\u5b50\u3067\u306a\u3044\u30e1\u30f3\uff08\u30d5\u30a3\u30fc\u30eb\u30c9\u3084\u30e1\u30bd\u30c3\u30c9\uff09\u306f\u5b50\u30af\u30e9\u30b9\u3067\u3082\u305d\u306e\u307e\u307e\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306f\u7d99\u627f\u3067\u304d\u307e\u305b\u3093\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u89aa\u30af\u30e9\u30b9\u3067\u5f15\u6570\u4ed8\u304d\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3068\u304d\u3001\u5b50\u30af\u30e9\u30b9\u306b\u3082\u5f15\u6570\u4ed8\u304d\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3092\u4f7f\u308f\u305b\u305f\u3044\u5834\u5408\u306b\u306f\u5b50\u30af\u30e9\u30b9\u3067\u3082\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3092\u5b9a\u7fa9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5b50\u30af\u30e9\u30b9\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3092\u4f55\u3082\u5b9a\u7fa9\u3057\u306a\u3044\u3001\u304b\u3064\u3001\u89aa\u30af\u30e9\u30b9\u306b\u3066\u5f15\u6570\u306a\u3057\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306f\u3001\u5b50\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u751f\u6210\u6642\u3001\u6697\u9ed9\u7684\u306b\u89aa\u30af\u30e9\u30b9\u306e\u5f15\u6570\u306a\u3057\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"))),(0,r.kt)("li",{parentName:"ol"},"\u7d99\u627f\u3092\u884c\u3063\u305f\u5b50\u30af\u30e9\u30b9\u306b\u3066",(0,r.kt)("inlineCode",{parentName:"li"},"this."),"\u3092\u4f7f\u3044\u3001\u81ea\u30af\u30e9\u30b9\u306e\u30e1\u30f3\u30d0\u3092\u547c\u3073\u51fa\u3059\u5834\u5408\u306b\u306f\u3001\u5b50\u30af\u30e9\u30b9\u306b\u3066\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\uff08\u4e0a\u66f8\u304d\uff09\u3055\u308c\u305f\u30e1\u30f3\u30d0\u3067\u306a\u3051\u308c\u3070\u6697\u9ed9\u7684\u306b\u89aa\u30af\u30e9\u30b9\u306e",(0,r.kt)("inlineCode",{parentName:"li"},"super."),"\u3067\u547c\u3073\u51fa\u3055\u308c\u305f\u3082\u306e\u3068\u3057\u3066\u52d5\u4f5c\u3057\u307e\u3059\u3002\u5b50\u30af\u30e9\u30b9\u306b\u3066\u660e\u793a\u7684\u306b\u5b9f\u88c5\u3055\u308c\u305f\u30e1\u30f3\u30d0\u306e\u5834\u5408\u306f\u305d\u306e\u307e\u307e\u81ea\u30af\u30e9\u30b9\u306e\u30e1\u30f3\u30d0\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'\u89aa\u30af\u30e9\u30b9\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3001\u30e1\u30bd\u30c3\u30c9\u306b\u5bfe\u3057\u3066"\u660e\u793a\u7684\u306a\u30a2\u30af\u30bb\u30b9"\u3092\u3059\u308b\u5834\u5408\u306f\u3001this\u306e\u4ee3\u308f\u308a\u306b ',(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"super"))," \u3092\u4f7f\u7528\u3057\u307e\u3057\u3087\u3046\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"super"))," \u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u306e\u306f\u3001\u76f4\u8fd1\u306e\u89aa\u30af\u30e9\u30b9\u307e\u3067\u3067\u3059\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u89aa\u30af\u30e9\u30b9\u306e\u89aa\u30af\u30e9\u30b9\u3001\u3064\u307e\u308a\u7956\u7236\u6bcd\u30af\u30e9\u30b9\u306b\u306f\u3001super\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u305b\u3093\u3002(\u7956\u7236\u6bcd\u30af\u30e9\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u3055\u305b\u305f\u3044\u5834\u5408\u306b\u306f\u3001\u76f4\u8fd1\u306e\u89aa\u30af\u30e9\u30b9\u306b\u7956\u7236\u6bcd\u30af\u30e9\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u30d1\u30a4\u30d7\u3059\u308b\u5f79\u5272\u306e\u6a5f\u80fd\u3092\u5225\u9014\u30e1\u30bd\u30c3\u30c9\u7b49\u3067\u6301\u305f\u305b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002)"))),(0,r.kt)("li",{parentName:"ol"},"\u4e00\u5ea6\u306b\u7d99\u627f\u3067\u304d\u308b\u30af\u30e9\u30b9\u306f1\u3064\u307e\u3067\u3067\u3059\u3002\u8907\u6570\u306e\u30af\u30e9\u30b9\u3092\u7d99\u627f\u3057\u305f\u5b50\u30af\u30e9\u30b9\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u305f\u3060\u3057\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"java.lang.Object"),"\u30af\u30e9\u30b9\u306b\u95a2\u3057\u3066\u306f\u4f8b\u5916\u3067\u3001\u3059\u3079\u3066\u306e\u30af\u30e9\u30b9\u306f\u6697\u9ed9\u7684\u306b",(0,r.kt)("inlineCode",{parentName:"li"},"java.lang.Object"),"\u30af\u30e9\u30b9\u3092\u7d99\u627f\u3057\u3066\u3044\u307e\u3059\u3002extends\u3067\u7d99\u627f\u3092\u884c\u3063\u305f\u5834\u5408\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"java.lang.Object"),"\u30af\u30e9\u30b9\u3068\u3001\u6307\u5b9a\u3055\u308c\u305f\u30af\u30e9\u30b9\u3092\u89aa\u306b\u6301\u3064\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u308c\u3088\u308a\u591a\u304f\u7d99\u627f\u3092\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u3001\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"java.lang.Object"),"\u4ee5\u5916\u306e\u8907\u6570\u306e\u30af\u30e9\u30b9\u3092\u540c\u6642\u306b\u7d99\u627f\u3059\u308b\u3053\u3068\u3092\u591a\u91cd\u7d99\u627f\u3068\u547c\u3073\u3001Java\u306b\u304a\u3044\u3066\u305d\u306e\u624b\u6cd5\u306f\u3067\u304d\u307e\u305b\u3093\u3002")))))}o.isMDXComponent=!0}}]);