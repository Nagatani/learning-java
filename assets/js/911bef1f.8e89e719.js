"use strict";(self.webpackChunkmyjavadoc=self.webpackChunkmyjavadoc||[]).push([[535],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o=a.createContext({}),u=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=u(n.components);return a.createElement(o.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,o=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),m=u(t),d=r,k=m["".concat(o,".").concat(d)]||m[d]||s[d]||l;return t?a.createElement(k,i(i({ref:e},c),{},{components:t})):a.createElement(k,i({ref:e},c))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=n,p.mdxType="string"==typeof n?n:r,i[1]=p;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8072:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={title:"java.util.Scanner\u30af\u30e9\u30b9\u306e\u89e3\u8aac"},i=void 0,p={unversionedId:"use-standard-api/java.util.Scanner\u30af\u30e9\u30b9\u306e\u89e3\u8aac",id:"use-standard-api/java.util.Scanner\u30af\u30e9\u30b9\u306e\u89e3\u8aac",title:"java.util.Scanner\u30af\u30e9\u30b9\u306e\u89e3\u8aac",description:"\u6a19\u6e96\u5165\u529b\u304b\u3089\u6587\u5b57\u5217\u3092\u53d6\u5f97\u3059\u308b\u5834\u5408\u306b\u4f7f\u7528\u3057\u3066\u3044\u308bScanner\u30af\u30e9\u30b9\u306e\u89e3\u8aac\u3092\u901a\u3058\u3066\u3001\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u898b\u65b9\u3084\u3001\u8abf\u3079\u65b9\u306a\u3069\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002",source:"@site/docs/06-use-standard-api/02-java.util.Scanner\u30af\u30e9\u30b9\u306e\u89e3\u8aac.md",sourceDirName:"06-use-standard-api",slug:"/use-standard-api/java.util.Scanner\u30af\u30e9\u30b9\u306e\u89e3\u8aac",permalink:"/learning-java/use-standard-api/java.util.Scanner\u30af\u30e9\u30b9\u306e\u89e3\u8aac",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"java.util.Scanner\u30af\u30e9\u30b9\u306e\u89e3\u8aac"},sidebar:"tutorialSidebar",previous:{title:"Java\u6a19\u6e96\u306e\u30af\u30e9\u30b9\u30e9\u30a4\u30d6\u30e9\u30ea",permalink:"/learning-java/use-standard-api/Java\u6a19\u6e96\u306e\u30af\u30e9\u30b9\u30e9\u30a4\u30d6\u30e9\u30ea"},next:{title:"\u30d1\u30c3\u30b1\u30fc\u30b8\u3068import",permalink:"/learning-java/use-standard-api/\u30d1\u30c3\u30b1\u30fc\u30b8\u3068import"}},o={},u=[{value:"\u6a19\u6e96\u5165\u529b",id:"\u6a19\u6e96\u5165\u529b",level:2},{value:"Scanner\u4ee5\u524d\u306e\u6a19\u6e96\u5165\u529b",id:"scanner\u4ee5\u524d\u306e\u6a19\u6e96\u5165\u529b",level:3},{value:"Scanner\u30af\u30e9\u30b9",id:"scanner\u30af\u30e9\u30b9",level:2},{value:"\u6587\u5b57\u3092\u8907\u6570\u5206\u3051\u3066\u8aad\u307f\u53d6\u308a",id:"\u6587\u5b57\u3092\u8907\u6570\u5206\u3051\u3066\u8aad\u307f\u53d6\u308a",level:3},{value:"\u5165\u529b\u3055\u308c\u305f\u5024\u3092\u6574\u6570\u3068\u3057\u3066\u8907\u6570\u5206\u3051\u3066\u8aad\u307f\u53d6\u308a",id:"\u5165\u529b\u3055\u308c\u305f\u5024\u3092\u6574\u6570\u3068\u3057\u3066\u8907\u6570\u5206\u3051\u3066\u8aad\u307f\u53d6\u308a",level:3},{value:"\u5165\u529b\u3055\u308c\u305f\u6587\u5b57\u5217\u304c\u5bfe\u5fdc\u3059\u308b\u578b\u3067\u306a\u304b\u3063\u305f\u5834\u5408",id:"\u5165\u529b\u3055\u308c\u305f\u6587\u5b57\u5217\u304c\u5bfe\u5fdc\u3059\u308b\u578b\u3067\u306a\u304b\u3063\u305f\u5834\u5408",level:4},{value:"\u4ed6\u306e\u578b",id:"\u4ed6\u306e\u578b",level:3},{value:"Scanner\u30af\u30e9\u30b9\u306e\u30e1\u30ea\u30c3\u30c8",id:"scanner\u30af\u30e9\u30b9\u306e\u30e1\u30ea\u30c3\u30c8",level:3}],c={toc:u};function s(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6a19\u6e96\u5165\u529b\u304b\u3089\u6587\u5b57\u5217\u3092\u53d6\u5f97\u3059\u308b\u5834\u5408\u306b\u4f7f\u7528\u3057\u3066\u3044\u308bScanner\u30af\u30e9\u30b9\u306e\u89e3\u8aac\u3092\u901a\u3058\u3066\u3001\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u898b\u65b9\u3084\u3001\u8abf\u3079\u65b9\u306a\u3069\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("h2",{id:"\u6a19\u6e96\u5165\u529b"},"\u6a19\u6e96\u5165\u529b"),(0,r.kt)("p",null,"\u73fe\u5728\u6a19\u6e96\u5165\u529b\u304b\u3089\u6587\u5b57\u5217\u3092\u53d7\u3051\u53d6\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u6210\u3059\u308b\u969b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.Scanner"),"\u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Scanner\u304c\u5b9f\u88c5\u3055\u308c\u308b\u307e\u3067\u306f\u3001\u3059\u3079\u3066",(0,r.kt)("inlineCode",{parentName:"p"},"BufferedReader"),"\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"System.in"),"\u306e\u6a19\u6e96\u5165\u529b\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"InputStreamReader"),"\u3092\u7d4c\u7531\u3057\u3066\u53d7\u3051\u53d6\u308b\u65b9\u6cd5\u3067\u884c\u3063\u3066\u304d\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"Scanner\u30af\u30e9\u30b9\u304c\u5b9f\u88c5\u3055\u308c\u305f\u73fe\u5728\u3067\u306f\u3001\u753b\u9762\u304b\u3089\u306e\u30c7\u30fc\u30bf\u306e\u5165\u529b\u306fScanner\u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3059\u308c\u3070\u4e8b\u8db3\u308a\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("h3",{id:"scanner\u4ee5\u524d\u306e\u6a19\u6e96\u5165\u529b"},"Scanner\u4ee5\u524d\u306e\u6a19\u6e96\u5165\u529b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import java.io.BufferedReader;\nimport java.io.IOException;\nimport java.io.InputStreamReader;\n\npublic class BufferedReaderSample {\n  public static void main(String[] args) throws IOException {\n    // \u2191\u691c\u67fb\u4f8b\u5916\u3067\u3042\u308bIOException\u306f\u3001InputStreamReader\u306a\u3069\u306e\u5165\u51fa\u529b\u95a2\u9023\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u767a\u751f\u3057\u307e\u3059\u3002\n    // \u672c\u6765\u4f8b\u5916\u51e6\u7406\u3092\u9069\u5207\u306b\u884c\u308f\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u304c\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u5185\u3067\u306f\u305d\u306e\u4f8b\u5916\u767a\u751f\u6642\u306b\u5bfe\u51e6\u3067\u304d\u306a\u3044\u305f\u3081\n    // throws\u69cb\u6587\u3092\u7528\u3044\u3066\u4f8b\u5916\u3092\u547c\u3073\u51fa\u3057\u3082\u3068\u3078\u4f1d\u64ad\u3055\u305b\u307e\u3059\u3002\n\n    // InputStreamReader\u3092System.in\u304b\u3089\u751f\u6210 (InputStreamReader\u306f1byte\u305a\u3064\u9806\u6b21\u8aad\u307f\u8fbc\u307f)\n    InputStreamReader isr = new InputStreamReader(System.in);\n    // \u6539\u884c\u30b3\u30fc\u30c9\u304c\u9001\u4fe1\u3055\u308c\u308b\u307e\u3067\u5f85\u3061\u3001\n    // \u30d0\u30c3\u30d5\u30a1\u306b\u6e9c\u3081\u8fbc\u3093\u3067\u304a\u3044\u3066\u304f\u308c\u308bBufferedReader\u3092InputStreamReader\u304b\u3089\u751f\u6210\n    BufferedReader bf = new BufferedReader(isr);\n\n    // \u6539\u884c\u30b3\u30fc\u30c9\u304c\u9001\u4fe1\u3055\u308c\u308b\u306e\u3092\u5f85\u3063\u30661\u884c\u5206\u3092String\u578b\u3068\u3057\u3066\u8fd4\u3059\n    String str = bf.readLine();\n\n    // \u5165\u529b\u3055\u308c\u305f\u6587\u5b57\u5217\u3092\u305d\u306e\u307e\u307e\u51fa\u529b\u3059\u308b\n    System.out.println(str);\n\n  }\n}\n")),(0,r.kt)("h2",{id:"scanner\u30af\u30e9\u30b9"},"Scanner\u30af\u30e9\u30b9"),(0,r.kt)("p",null,"\u6b21\u306eAPI\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u898b\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://docs.oracle.com/javase/jp/17/docs/api/java.base/java/util/Scanner.html",target:"_blank"},"Scanner (Java SE 17 & JDK 17 )"))),(0,r.kt)("p",null,"Scanner\u30af\u30e9\u30b9\u306b\u306f\u3001\u4e00\u884c\u3054\u3068\u306b\u6587\u5b57\u5217\u3092\u8aad\u307f\u53d6\u308b\u3053\u3068\u306f\u3082\u3061\u308d\u3093\u306e\u3053\u3068\u3001\u6587\u5b57\u901a\u308a\u5165\u529b\u3055\u308c\u305f\u6587\u5b57\u5217\u3092\u30b9\u30ad\u30e3\u30f3\u3057\u3066\u6307\u5b9a\u3055\u308c\u305f\u578b\u3068\u3057\u3066\u8a8d\u8b58\u3067\u304d\u308b\u3082\u306e\u3092\u53d7\u3051\u53d6\u308b\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.Scanner;\n\npublic class Main {\n  public static void main(String[] args) {\n    Scanner in = new Scanner(System.in);  // IOException\u306f\u5185\u90e8\u3067\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u767a\u751f\u3057\u306a\u3044\n    System.out.println("\u6587\u5b57\u5217\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002");\n    String str = in.nextLine();\n    System.out.println("\u5165\u529b\u3057\u305f\u6587\u5b57\u5217\u306f " + str + " \u3067\u3059\u3002");\n  }\n}\n')),(0,r.kt)("p",null,"\u4e0a\u8a18\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u306f\u3001\u4eca\u307e\u3067\u306e\u5165\u529b\u65b9\u6cd5\u3068\u540c\u3058\u304f1\u884c\u305a\u3064\u753b\u9762\u304b\u3089\u5165\u529b\u3055\u305b\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),"\u306b\u306f\u3001\u5165\u529b\u3055\u308c\u305f1\u884c\u306e\u6587\u5b57\u304c\u5165\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"Scanner\u30af\u30e9\u30b9\u306f\u3001\u3053\u308c\u306e\u4ed6\u306b\u3001\u578b\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u3044\u304f\u3064\u304b\u30b5\u30f3\u30d7\u30eb\u3092\u6319\u3052\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u6587\u5b57\u3092\u8907\u6570\u5206\u3051\u3066\u8aad\u307f\u53d6\u308a"},"\u6587\u5b57\u3092\u8907\u6570\u5206\u3051\u3066\u8aad\u307f\u53d6\u308a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.Scanner;\n\npublic class Main {\n  public static void main(String[] args) {\n    Scanner in = new Scanner(System.in);\n    System.out.println("\u5358\u8a9e\u3092\uff12\u3064\u30b9\u30da\u30fc\u30b9\u3067\u533a\u5207\u3063\u3066\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002");\n    String str1 = in.next();\n    String str2 = in.next();\n    System.out.println("\u5165\u529b\u3057\u305f\u5358\u8a9e\uff11\u306f " + str1 + " \u3067\u3059\u3002");\n    System.out.println("\u5165\u529b\u3057\u305f\u5358\u8a9e\uff12\u306f " + str2 + " \u3067\u3059\u3002");\n  }\n}\n')),(0,r.kt)("p",null,"Scanner\u30af\u30e9\u30b9\u3067\u306f\u3001\u901a\u5e38\u534a\u89d2\u30b9\u30da\u30fc\u30b9\u306e\u7a7a\u767d\u6587\u5b57\u3092\u30c7\u30ea\u30df\u30bf\u3068\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e0a\u8a18\u4f8b\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u69d8\u306a\u5b9f\u884c\u7d50\u679c\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u5358\u8a9e\u3092\uff12\u3064\u30b9\u30da\u30fc\u30b9\u3067\u533a\u5207\u3063\u3066\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\naaa bbb\n\u5165\u529b\u3057\u305f\u5358\u8a9e\uff11\u306f aaa \u3067\u3059\u3002\n\u5165\u529b\u3057\u305f\u5358\u8a9e\uff12\u306f bbb \u3067\u3059\u3002\n")),(0,r.kt)("p",null,"\u3053\u308c\u30671\u884c\u306b\u8907\u6570\u306e\u5024\u3092\u6301\u305f\u305b\u308b\u3053\u3068\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u307e\u305f\u3001\u6a19\u6e96\u3067\u306f\u30c7\u30ea\u30df\u30bf\u306f\u534a\u89d2\u30b9\u30da\u30fc\u30b9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u4ee5\u4e0b\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u5909\u66f4\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'in.useDelimiter(",");\n')),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u30b3\u30fc\u30c9\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"next()"),"\u30e1\u30bd\u30c3\u30c9\u306e\u524d\u306b\u547c\u3073\u51fa\u3057\u3066\u304a\u304f\u3053\u3068\u3067\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30ab\u30f3\u30de\u533a\u5207\u308a\u3067\u306e\u6a19\u6e96\u5165\u529b\u304c\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u5358\u8a9e\u3092\uff12\u3064\u30ab\u30f3\u30de\u3067\u533a\u5207\u3063\u3066\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\naaa,bbb\n\u5165\u529b\u3057\u305f\u5358\u8a9e\uff11\u306f aaa \u3067\u3059\u3002\n\u5165\u529b\u3057\u305f\u5358\u8a9e\uff12\u306f bbb \u3067\u3059\u3002\n")),(0,r.kt)("h3",{id:"\u5165\u529b\u3055\u308c\u305f\u5024\u3092\u6574\u6570\u3068\u3057\u3066\u8907\u6570\u5206\u3051\u3066\u8aad\u307f\u53d6\u308a"},"\u5165\u529b\u3055\u308c\u305f\u5024\u3092\u6574\u6570\u3068\u3057\u3066\u8907\u6570\u5206\u3051\u3066\u8aad\u307f\u53d6\u308a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.Scanner;\n\npublic class Main {\n  public static void main(String[] args) {\n    Scanner in = new Scanner(System.in);\n    System.out.println("\u6574\u6570\u3092\uff12\u3064\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002");\n    int x = in.nextInt();\n    int y = in.nextInt();\n    System.out.println("\u5165\u529b\u3057\u305f\u6574\u6570\uff11\u306f " + x + " \u3067\u3059\u3002");\n    System.out.println("\u5165\u529b\u3057\u305f\u6574\u6570\uff12\u306f " + y + " \u3067\u3059\u3002");\n  }\n}\n')),(0,r.kt)("p",null,"\u4e0a\u8a18\u30b5\u30f3\u30d7\u30eb\u3067\u3001\u4ee5\u4e0b\u306e\u69d8\u306a\u51e6\u7406\u304c\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u6574\u6570\u3092\uff12\u3064\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n10 20\n\u5165\u529b\u3057\u305f\u6574\u6570\uff11\u306f 10 \u3067\u3059\u3002\n\u5165\u529b\u3057\u305f\u6574\u6570\uff12\u306f 20 \u3067\u3059\u3002\n")),(0,r.kt)("h4",{id:"\u5165\u529b\u3055\u308c\u305f\u6587\u5b57\u5217\u304c\u5bfe\u5fdc\u3059\u308b\u578b\u3067\u306a\u304b\u3063\u305f\u5834\u5408"},"\u5165\u529b\u3055\u308c\u305f\u6587\u5b57\u5217\u304c\u5bfe\u5fdc\u3059\u308b\u578b\u3067\u306a\u304b\u3063\u305f\u5834\u5408"),(0,r.kt)("p",null,"\u4e0a\u8a18\u30b5\u30f3\u30d7\u30eb\u3067\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u6570\u5024\u4ee5\u5916\u3092\u5165\u529b\u3055\u305b\u305f\u5834\u5408\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.InputMismatchException"),"\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u6574\u6570\u3092\uff12\u3064\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u3042\u3042\u3042 \u3044\u3044\u3044\nException in thread "main" java.util.InputMismatchException\n    at java.util.Scanner.throwFor(Scanner.java:864)\n    at java.util.Scanner.next(Scanner.java:1485)\n    at java.util.Scanner.nextInt(Scanner.java:2117)\n    at java.util.Scanner.nextInt(Scanner.java:2076)\n    at scannersample.ScannerSample.main(ScannerSample.java:23)\n/Users/Nagatani/Library/Caches/NetBeans/8.1/executor-snippets/run.xml:53: Java returned: 1\n')),(0,r.kt)("p",null,"\u3053\u306e\u4f8b\u5916\u306f\u3001\u5b9f\u884c\u6642\u4f8b\u5916\u3067\u3059\u306e\u3067\u3001\u53b3\u5bc6\u306btry\u69cb\u6587\u3092\u4f7f\u7528\u3057\u306a\u304f\u3066\u3082\u826f\u3044\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u305f\u3060\u3057\u3001\u6a19\u6e96\u5165\u529b\u306e\u3088\u3046\u306b\u578b\u304c\u5224\u65ad\u3067\u304d\u306a\u3044\u6587\u5b57\u5217\u3092\u5165\u529b\u3055\u308c\u308b\u3053\u3068\u304c\u60f3\u5b9a\u3055\u308c\u308b\u5834\u5408\u306f\u3001\u304d\u3061\u3093\u3068try\u69cb\u6587\u3092\u4f7f\u7528\u3057\u3066\u4f8b\u5916\u51e6\u7406\u3092\u66f8\u304d\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u4f8b\u5916\u51e6\u7406\u3092\u5165\u308c\u3066\u3042\u3052\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.Scanner;\n\npublic class Main {\n  public static void main(String[] args) {\n    Scanner in = new Scanner(System.in);\n    System.out.println("\u6574\u6570\u3092\uff12\u3064\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002");\n    try {\n      int x = in.nextInt();\n      System.out.println("\u5165\u529b\u3057\u305f\u6574\u6570\uff11\u306f " + x + " \u3067\u3059\u3002");\n      int y = in.nextInt();\n      System.out.println("\u5165\u529b\u3057\u305f\u6574\u6570\uff12\u306f " + y + " \u3067\u3059\u3002");\n    } catch(InputMismatchException e) {\n      System.out.println("\u5165\u529b\u3055\u308c\u305f\u6587\u5b57\u5217\u306f\u6574\u6570\u5024\u306b\u5909\u63db\u3067\u304d\u307e\u305b\u3093");\n    }\n  }\n}\n')),(0,r.kt)("p",null,"\u4f8b\u5916\u51e6\u7406\u306b\u3064\u3044\u3066\u306f\u3001\u5f8c\u307b\u3069\u3058\u3063\u304f\u308a\u3068\u89e3\u8aac\u3044\u305f\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u4ed6\u306e\u578b"},"\u4ed6\u306e\u578b"),(0,r.kt)("p",null,"Scanner\u30af\u30e9\u30b9\u3067\u306f\u3001String\u3084int\u306e\u4ed6\u306b\u3001\u4ee5\u4e0b\u306e\u578b\u3067\u306e\u5909\u63db\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5bfe\u5fdc\u3059\u308bnext\u30e1\u30bd\u30c3\u30c9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"byte")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nextByte()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"short")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nextShort()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nextLong()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nextFloat()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"double")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nextDouble()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nextBoolean()"))))),(0,r.kt)("p",null,"\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u578b\u306f\u3001String\u3068\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u578b\u5168\u90e8\u3067\u3059\u3002"),(0,r.kt)("h3",{id:"scanner\u30af\u30e9\u30b9\u306e\u30e1\u30ea\u30c3\u30c8"},"Scanner\u30af\u30e9\u30b9\u306e\u30e1\u30ea\u30c3\u30c8"),(0,r.kt)("p",null,"\u306a\u3093\u3068\u3044\u3063\u3066\u3082\u3001IOException\u304c\u767a\u751f\u3057\u306a\u3044\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u3082\u305d\u3082\u30bf\u30fc\u30df\u30ca\u30eb\u306a\u3069\u304b\u3089\u30ad\u30fc\u30dc\u30fc\u30c9\u306b\u3088\u308b\u5165\u529b\u3092\u53d7\u3051\u4ed8\u3051\u308b\u6a19\u6e96\u5165\u529b\u3067\u306f\u3001IOException\u306f\u306a\u304b\u306a\u304b\u767a\u751f\u3057\u306b\u304f\u3044\u3067\u3059\u3002\n\u65b0\u3057\u304f\u8ffd\u52a0\u3055\u308c\u305fScanner\u30af\u30e9\u30b9\u306f\u3001\u691c\u67fb\u4f8b\u5916\u3067\u3042\u308bIOException\u3067\u306f\u306a\u304f\u3001\u5b9f\u884c\u6642\u4f8b\u5916\u3057\u304b\u51fa\u529b\u3057\u306a\u3044\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305f\u3060\u3057\u3001Scanner\u30af\u30e9\u30b9\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"IOException ioException()"),"\u30e1\u30bd\u30c3\u30c9\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u304a\u308a\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066IOException\u3092\u53d6\u308a\u51fa\u3059\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002\u4f8b\u5916\u304c\u767a\u751f\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u306f\u3001null\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3060\u3051\u3067\u3001\u30e1\u30bd\u30c3\u30c9\u306e\u5ba3\u8a00\u6642\u306b\u3001",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"throws"))," \u304c\u8981\u3089\u306a\u3044\u3068\u3044\u3046\u7d20\u6674\u3089\u3057\u3044\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);