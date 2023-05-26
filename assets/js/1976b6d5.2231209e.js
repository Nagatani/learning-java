"use strict";(self.webpackChunkmyjavadoc=self.webpackChunkmyjavadoc||[]).push([[2416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=u(n),d=a,v=k["".concat(o,".").concat(d)]||k[d]||m[d]||i;return n?l.createElement(v,r(r({ref:t},c),{},{components:n})):l.createElement(v,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var u=2;u<i;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const i={title:"\u7df4\u7fd2\u8ab2\u984c"},r="\u8ab2\u984c1",p={unversionedId:"splitting-the-code/\u7df4\u7fd2\u8ab2\u984c",id:"splitting-the-code/\u7df4\u7fd2\u8ab2\u984c",title:"\u7df4\u7fd2\u8ab2\u984c",description:"\u52c7\u8005\u306f\u6b66\u5668\u3092\u88c5\u5099\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b",source:"@site/docs/07-splitting-the-code/05-\u7df4\u7fd2\u8ab2\u984c.md",sourceDirName:"07-splitting-the-code",slug:"/splitting-the-code/\u7df4\u7fd2\u8ab2\u984c",permalink:"/learning-java/splitting-the-code/\u7df4\u7fd2\u8ab2\u984c",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u7df4\u7fd2\u8ab2\u984c"},sidebar:"tutorialSidebar",previous:{title:"final\u4fee\u98fe\u5b50",permalink:"/learning-java/splitting-the-code/final\u4fee\u98fe\u5b50"},next:{title:"\u578b\u3092\u610f\u8b58\u3059\u308b",permalink:"/learning-java/category/\u578b\u3092\u610f\u8b58\u3059\u308b"}},o={},u=[{value:"\u52c7\u8005\u306f\u6b66\u5668\u3092\u88c5\u5099\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b",id:"\u52c7\u8005\u306f\u6b66\u5668\u3092\u88c5\u5099\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b",level:2},{value:"<code>jp.ac.learning.Equipment</code>\u30af\u30e9\u30b9",id:"jpaclearningequipment\u30af\u30e9\u30b9",level:2},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9",id:"\u30d5\u30a3\u30fc\u30eb\u30c9",level:3},{value:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf",id:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf",level:3},{value:"\u30e1\u30bd\u30c3\u30c9",id:"\u30e1\u30bd\u30c3\u30c9",level:3},{value:"<code>jp.ac.learning.Weapon</code>\u30af\u30e9\u30b9",id:"jpaclearningweapon\u30af\u30e9\u30b9",level:2},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9\uff08\u8ffd\u52a0\uff09",id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u8ffd\u52a0",level:3},{value:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf",id:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf-1",level:3},{value:"\u30e1\u30bd\u30c3\u30c9\uff08\u8ffd\u52a0\uff09",id:"\u30e1\u30bd\u30c3\u30c9\u8ffd\u52a0",level:3},{value:"<code>jp.ac.learning.Hero</code>\u30af\u30e9\u30b9\u306b\u4ed5\u69d8\u5909\u66f4",id:"jpaclearninghero\u30af\u30e9\u30b9\u306b\u4ed5\u69d8\u5909\u66f4",level:2},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9\uff08\u8ffd\u52a0\uff09",id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u8ffd\u52a0-1",level:3},{value:"\u30e1\u30bd\u30c3\u30c9\uff08\u8ffd\u52a0\uff09",id:"\u30e1\u30bd\u30c3\u30c9\u8ffd\u52a0-1",level:3},{value:"\u30e1\u30bd\u30c3\u30c9\uff08\u4ed5\u69d8\u5909\u66f4\uff09",id:"\u30e1\u30bd\u30c3\u30c9\u4ed5\u69d8\u5909\u66f4",level:3},{value:"<code>jp.ac.learning.SimpleRPG</code>\u30af\u30e9\u30b9\u306b\u3066\u6b66\u5668\u88c5\u5099\u306e\u51e6\u7406\u3092\u8ffd\u52a0",id:"jpaclearningsimplerpg\u30af\u30e9\u30b9\u306b\u3066\u6b66\u5668\u88c5\u5099\u306e\u51e6\u7406\u3092\u8ffd\u52a0",level:2},{value:"\u30d5\u30ec\u30fc\u30d0\u30fc\u30c6\u30ad\u30b9\u30c8\u306e\u4fee\u6b63",id:"\u30d5\u30ec\u30fc\u30d0\u30fc\u30c6\u30ad\u30b9\u30c8\u306e\u4fee\u6b63",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8ab2\u984c1"},"\u8ab2\u984c1"),(0,a.kt)("h2",{id:"\u52c7\u8005\u306f\u6b66\u5668\u3092\u88c5\u5099\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b"},"\u52c7\u8005\u306f\u6b66\u5668\u3092\u88c5\u5099\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b"),(0,a.kt)("p",null,"\u7df4\u7fd2\u3064\u3044\u3067\u306a\u306e\u3067\u3001\u88c5\u5099\u30af\u30e9\u30b9\u304b\u3089\u4f5c\u6210\u3057\u3001\u88c5\u5099\u30af\u30e9\u30b9\u3092\u7d99\u627f\u3057\u305f\u6b66\u5668\u30af\u30e9\u30b9\u3092\u4f5c\u308a\u307e\u3057\u3087\u3046\u3002\n\u4eca\u56de\u306f\u6b66\u5668\u306e\u8ffd\u52a0\u3092\u884c\u3044\u305f\u3044\u3060\u3051\u306a\u306e\u3067\u3001\u88c5\u5099\u30af\u30e9\u30b9\u306e\u3088\u3046\u306b\u62bd\u8c61\u5316\u3092\u884c\u3046\u610f\u5473\u306f\u3068\u304f\u306b\u306a\u3044\u3067\u3059\u3002"),(0,a.kt)("h2",{id:"jpaclearningequipment\u30af\u30e9\u30b9"},(0,a.kt)("inlineCode",{parentName:"h2"},"jp.ac.learning.Equipment"),"\u30af\u30e9\u30b9"),(0,a.kt)("h3",{id:"\u30d5\u30a3\u30fc\u30eb\u30c9"},"\u30d5\u30a3\u30fc\u30eb\u30c9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"private String name")," - \u540d\u524d")),(0,a.kt)("h3",{id:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf"},"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public Equipment(String name)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u521d\u671f\u5024\u30bb\u30c3\u30c8"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public Equipment()"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u540d\u524d\u3092\u300c\u88c5\u5099\u300d\u3067\u521d\u671f\u5316")))),(0,a.kt)("h3",{id:"\u30e1\u30bd\u30c3\u30c9"},"\u30e1\u30bd\u30c3\u30c9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public String getName()")," - \u540d\u524d\u3092\u8fd4\u3059"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public void setName(String name)")," - \u540d\u524d\u3092\u8a2d\u5b9a\u3059\u308b")),(0,a.kt)("h2",{id:"jpaclearningweapon\u30af\u30e9\u30b9"},(0,a.kt)("inlineCode",{parentName:"h2"},"jp.ac.learning.Weapon"),"\u30af\u30e9\u30b9"),(0,a.kt)("p",null,"Weapon\u30af\u30e9\u30b9\u306f\u3001Equipment\u30af\u30e9\u30b9\u3092\u89aa\u3068\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u8ffd\u52a0"},"\u30d5\u30a3\u30fc\u30eb\u30c9\uff08\u8ffd\u52a0\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"private int atk")," - \u653b\u6483\u529b\u52a0\u7b97\u5024")),(0,a.kt)("h3",{id:"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf-1"},"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public Weapon(String name, int atk)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u521d\u671f\u5024\u30bb\u30c3\u30c8"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"super(name)"),"\u306e\u3042\u3068\u306b",(0,a.kt)("inlineCode",{parentName:"li"},"this.atk = atk")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public Weapon()"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u540d\u524d\u3092\u300c\u6b66\u5668\u300d\u3001\u653b\u6483\u529b\u52a0\u7b97\u5024\u300c0\u300d\u3067\u521d\u671f\u5316")))),(0,a.kt)("h3",{id:"\u30e1\u30bd\u30c3\u30c9\u8ffd\u52a0"},"\u30e1\u30bd\u30c3\u30c9\uff08\u8ffd\u52a0\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public int getAtk()")," - \u653b\u6483\u529b\u52a0\u7b97\u5024\u3092\u8fd4\u3059"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public void setAtk(int atk)")," - \u653b\u6483\u529b\u52a0\u7b97\u5024\u3092\u8a2d\u5b9a\u3059\u308b")),(0,a.kt)("h2",{id:"jpaclearninghero\u30af\u30e9\u30b9\u306b\u4ed5\u69d8\u5909\u66f4"},(0,a.kt)("inlineCode",{parentName:"h2"},"jp.ac.learning.Hero"),"\u30af\u30e9\u30b9\u306b\u4ed5\u69d8\u5909\u66f4"),(0,a.kt)("h3",{id:"\u30d5\u30a3\u30fc\u30eb\u30c9\u8ffd\u52a0-1"},"\u30d5\u30a3\u30fc\u30eb\u30c9\uff08\u8ffd\u52a0\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"private Weapon weapon = null")," - \u6b66\u5668\uff08\u3053\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u304cnull\u306e\u5834\u5408\u3001\u6b66\u5668\u306f\u672a\u88c5\u5099\u72b6\u614b\u3068\u3059\u308b\uff09")),(0,a.kt)("h3",{id:"\u30e1\u30bd\u30c3\u30c9\u8ffd\u52a0-1"},"\u30e1\u30bd\u30c3\u30c9\uff08\u8ffd\u52a0\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public Weapon getWeapon()")," - \u88c5\u5099\u6b66\u5668\u3092\u8fd4\u3059"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public void setWeapon(Weapon weapon)")," - \u88c5\u5099\u6b66\u5668\u3092\u8a2d\u5b9a\u3059\u308b")),(0,a.kt)("h3",{id:"\u30e1\u30bd\u30c3\u30c9\u4ed5\u69d8\u5909\u66f4"},"\u30e1\u30bd\u30c3\u30c9\uff08\u4ed5\u69d8\u5909\u66f4\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public int getAtk()"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6b66\u5668\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u89aa\u30af\u30e9\u30b9\u306b\u3066\u4fdd\u6301\u3057\u3066\u3044\u308b\u653b\u6483\u529b\u306b\u52a0\u3048\u3066\u6b66\u5668\u306e\u653b\u6483\u529b\u52a0\u7b97\u5024\u3092\u8db3\u3057\u3066\u8fd4\u3059\u3088\u3046\u306b\u3059\u308b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6b66\u5668\u304c\u672a\u8a2d\u5b9a\u306e\u5834\u5408\u306f\u3001\u5909\u66f4\u3059\u308b\u524d\u3068\u540c\u3058\u5024\u304c\u8fd4\u3055\u308c\u308b\u3002")))),(0,a.kt)("h2",{id:"jpaclearningsimplerpg\u30af\u30e9\u30b9\u306b\u3066\u6b66\u5668\u88c5\u5099\u306e\u51e6\u7406\u3092\u8ffd\u52a0"},(0,a.kt)("inlineCode",{parentName:"h2"},"jp.ac.learning.SimpleRPG"),"\u30af\u30e9\u30b9\u306b\u3066\u6b66\u5668\u88c5\u5099\u306e\u51e6\u7406\u3092\u8ffd\u52a0"),(0,a.kt)("p",null,"\u52c7\u8005\u306e\u751f\u6210\u5f8c\u3001\u4efb\u610f\u306e\u9069\u5f53\u306a\u6b66\u5668\u3092\u88c5\u5099\u3055\u305b\u3066\u304f\u3060\u3055\u3044\u3002\n\u3053\u306e\u3068\u304d\u3001\u751f\u6210\u3059\u308b\u6b66\u5668\u306e\u653b\u6483\u529b\u52a0\u7b97\u5024\u306f\u3042\u307e\u308a\u5927\u304d\u304f\u3057\u3059\u304e\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3068\u30b2\u30fc\u30e0\u306e\u30d0\u30e9\u30f3\u30b9\u3092\u5d29\u58ca\u3055\u305b\u305a\u306b\u3059\u307f\u307e\u3059\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"\u8ab2\u984c2"},"\u8ab2\u984c2"),(0,a.kt)("h2",{id:"\u30d5\u30ec\u30fc\u30d0\u30fc\u30c6\u30ad\u30b9\u30c8\u306e\u4fee\u6b63"},"\u30d5\u30ec\u30fc\u30d0\u30fc\u30c6\u30ad\u30b9\u30c8\u306e\u4fee\u6b63"),(0,a.kt)("p",null,"SimpleRPG\u30af\u30e9\u30b9\u306b\u3066\u3001\u30b2\u30fc\u30e0\u306e\u9032\u884c\u6642\u306b\u8868\u793a\u3055\u308c\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u3001\u5404\u81ea\u30b9\u30c8\u30fc\u30ea\u30fc\u3092\u8003\u3048\u306a\u304c\u3089\u5909\u66f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u3069\u306e\u3088\u3046\u306a\u5909\u66f4\u3092\u3057\u3066\u3082\u3089\u3063\u3066\u3082\u69cb\u3044\u307e\u305b\u3093\u304c\u3001\u30b2\u30fc\u30e0\u306e\u4e00\u9023\u306e\u6d41\u308c\u3092\u5909\u3048\u308b\u3053\u3068\u306fNG\u3067\u3059\u3002\n\u3042\u304f\u307e\u3067\u3082\u30b9\u30c8\u30fc\u30ea\u30fc\u9032\u884c\u3092\u81ea\u5206\u597d\u307f\u306b\u5909\u3048\u308b\u3053\u3068\u304c\u8ab2\u984c\u3068\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\uff08\u3053\u3053\u3067\u8a00\u3046\u30b2\u30fc\u30e0\u306e\u6d41\u308c\u3068\u306f\u3001\u52c7\u8005\u306e\u540d\u524d\u6c7a\u5b9a\u3084\u6b66\u5668\u88c5\u5099\u2192\u6575\u306e\u4f5c\u6210\u2192\u6226\u95d8\u958b\u59cb\u2192\u52c7\u8005\u3084\u6575\u306e\u884c\u52d5\u2192\u30b2\u30fc\u30e0\u7d42\u4e86\u3068\u3044\u3063\u305f\u4e00\u9023\u306e\u6d41\u308c\u306e\u3053\u3068\u3067\u3059\u3002\u305f\u3068\u3048\u3070\u30b9\u30c8\u30fc\u30ea\u30fc\u306e\u90fd\u5408\u4e0a\u52c7\u8005\u3092\u56de\u5fa9\u3055\u305b\u305f\u3044\u3001\u6575\u304c\u4f55\u5ea6\u3082\u5fa9\u6d3b\u3059\u308b\u3088\u3046\u306b\u3057\u305f\u3044\u3001\u306a\u3069\u306e\u8981\u671b\u306f\u4eca\u4f5c\u6210\u3057\u3066\u3044\u308bRPG\u3067\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u3069\u306e\u3088\u3046\u306b\u6539\u4fee\u3092\u884c\u3048\u3070\u305d\u3046\u3044\u3063\u305f\u6a5f\u80fd\u3092\u8ffd\u52a0\u3067\u304d\u308b\u304b\u8003\u3048\u308b\u306e\u306f\u81ea\u7531\u3067\u3059\u3057\u3001\u5404\u81ea\u3067\u9032\u3081\u3066\u3082\u3089\u3046\u5206\u306b\u306f\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u63d0\u51fa\u3059\u308b\u8ab2\u984c\u3068\u3057\u3066\u306f\u305d\u308c\u306f\u3084\u3089\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\uff09"),(0,a.kt)("p",null,"\u307e\u305f\u3001\u4ee5\u4e0b\u306e\u4fee\u6b63\u306f\u5fc5\u9808\u3067\u5165\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6575\u306e\u540d\u524d\u306e\u5909\u66f4"),(0,a.kt)("li",{parentName:"ol"},"\u653b\u6483\u304c\u30df\u30b9\u3057\u305f\u5834\u5408\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u8ffd\u52a0\uff08\u8b1b\u7fa9\u5185\u3067\u4f5c\u6210\u3057\u305f\u30b3\u30fc\u30c9\u306b\u306f\u3001\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u51fa\u306a\u3044\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u653b\u6483\u304c\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u30d2\u30c3\u30c8\u3057\u305f\u5834\u5408\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u6539\u5909"),(0,a.kt)("li",{parentName:"ol"},"\u52c7\u8005\u304a\u3088\u3073\u6575\u304c\u653b\u6483\u3092\u884c\u3063\u305f\u3042\u3068\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u4e2d\u306b\u3001\u653b\u6483\u5bfe\u8c61\u3060\u3063\u305f\u52c7\u8005\u304a\u3088\u3073\u6575\u306e\u6b8b\u308aHP\u3092\u8ffd\u52a0\u8868\u793a")),(0,a.kt)("p",null,"\u3053\u306e\u8ab2\u984c2\u306b\u6b63\u89e3\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u914d\u5e03\u8cc7\u6599\u3068\u540c\u3058\u3082\u306e\u307e\u305f\u306f\u3088\u304f\u4f3c\u305f\u3082\u306e\u3092\u305d\u306e\u307e\u307e\u51fa\u3059\u3053\u3068\u306f\u6e1b\u70b9\u5bfe\u8c61\u3068\u306a\u308a\u307e\u3059\u3002\n\u5fc5\u305a\u81ea\u5206\u3067\u8003\u3048\u305f\u3082\u306e\u3067\u4fee\u6b63\u3092\u884c\u3044\u3001\u63d0\u51fa\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u307e\u305f\u3001\u63d0\u51fa\u3055\u308c\u305f\u8ab2\u984c\u306e\u5185\u5bb9\u306f\u3001\u6559\u54e1\u304a\u3088\u3073TA\u3055\u3093\u306b\u306f\u95b2\u89a7\u3067\u304d\u308b\u72b6\u614b\u306b\u306a\u308a\u307e\u3059\u3002\n\u7279\u5b9a\u306e\u8ab0\u304b\u3092\u8ab9\u8b17\u4e2d\u50b7\u3059\u308b\u3088\u3046\u306a\u3082\u306e\u3060\u3063\u305f\u308a\u3001\u826f\u8b58\u306e\u7bc4\u56f2\u304b\u3089\u5b8c\u5168\u306b\u9038\u8131\u3059\u308b\u3088\u3046\u306a\u884c\u70ba\u3001\u516c\u5e8f\u826f\u4fd7\u306b\u53cd\u3059\u308b\u5185\u5bb9\u3078\u306e\u6539\u5909\u306f\u3057\u306a\u3044\u3088\u3046\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002"))}m.isMDXComponent=!0}}]);