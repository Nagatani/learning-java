"use strict";(self.webpackChunkmyjavadoc=self.webpackChunkmyjavadoc||[]).push([[8278],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>s});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),c=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=c(e.components);return t.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},v=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),v=c(n),s=r,m=v["".concat(p,".").concat(s)]||v[s]||d[s]||l;return n?t.createElement(m,i(i({ref:a},u),{},{components:n})):t.createElement(m,i({ref:a},u))}));function s(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=v;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}v.displayName="MDXCreateElement"},8881:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=n(7462),r=(n(7294),n(3905));const l={title:"JavaDoc\u306b\u3088\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3"},i=void 0,o={unversionedId:"use-standard-api/javadoc",id:"use-standard-api/javadoc",title:"JavaDoc\u306b\u3088\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3",description:"JavaDoc\u306b\u3088\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3",source:"@site/docs/06-use-standard-api/05-javadoc.md",sourceDirName:"06-use-standard-api",slug:"/use-standard-api/javadoc",permalink:"/learning-java/use-standard-api/javadoc",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"JavaDoc\u306b\u3088\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3"},sidebar:"tutorialSidebar",previous:{title:"JAR\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210",permalink:"/learning-java/use-standard-api/JAR\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210"},next:{title:"\u5916\u90e8\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4f7f\u7528",permalink:"/learning-java/use-standard-api/\u5916\u90e8\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4f7f\u7528"}},p={},c=[{value:"JavaDoc\u306b\u3088\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3",id:"javadoc\u306b\u3088\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3",level:2},{value:"JavaDoc\u30b3\u30e1\u30f3\u30c8\u306e\u958b\u59cb\u3068\u7d42\u4e86",id:"javadoc\u30b3\u30e1\u30f3\u30c8\u306e\u958b\u59cb\u3068\u7d42\u4e86",level:3},{value:"\u30bf\u30b0\u306e\u5229\u7528",id:"\u30bf\u30b0\u306e\u5229\u7528",level:3},{value:"JavaDoc\u30b3\u30e1\u30f3\u30c8\u306e\u4f8b",id:"javadoc\u30b3\u30e1\u30f3\u30c8\u306e\u4f8b",level:3},{value:"JavaDoc\u306e\u751f\u6210",id:"javadoc\u306e\u751f\u6210",level:2},{value:"IntelliJ IDEA\u3067\u306eJavaDoc\u751f\u6210",id:"intellij-idea\u3067\u306ejavadoc\u751f\u6210",level:2}],u={toc:c};function d(e){let{components:a,...l}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"javadoc\u306b\u3088\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3"},"JavaDoc\u306b\u3088\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"Java\u306b\u306f\u3001JavaDoc\u3068\u547c\u3070\u308c\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\uff08\u8a73\u7d30\u4ed5\u69d8\u66f8\uff09\u751f\u6210\u30c4\u30fc\u30eb\u304c\u3042\u308a\u307e\u3059\u3002\nOracle Java\u306e\u6a19\u6e96API\u4ed5\u69d8\u66f8\u304c\u307e\u3055\u3057\u304f\u305d\u306eJavaDoc\u306b\u3088\u308a\u751f\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"JavaDoc\u306f\u3001Java\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306b\u30b3\u30e1\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u3001API\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u81ea\u52d5\u751f\u6210\u3059\u308b\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u958b\u767a\u8005\u306f\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u8aad\u3080\u3053\u3068\u306a\u304f\u3001\u5fc5\u8981\u306a\u60c5\u5831\u3092\u7c21\u5358\u306b\u7406\u89e3\u3067\u304d\u307e\u3059\u3002JavaDoc\u30b3\u30e1\u30f3\u30c8\u306f\u3001\u6163\u7fd2\u7684\u306b\u30e1\u30bd\u30c3\u30c9\u3084\u30af\u30e9\u30b9\u306e\u5ba3\u8a00\u76f4\u524d\u306b\u8a18\u8ff0\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"javadoc\u30b3\u30e1\u30f3\u30c8\u306e\u958b\u59cb\u3068\u7d42\u4e86"},"JavaDoc\u30b3\u30e1\u30f3\u30c8\u306e\u958b\u59cb\u3068\u7d42\u4e86"),(0,r.kt)("p",null,"JavaDoc\u30b3\u30e1\u30f3\u30c8\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"/**"),"\u3067\u59cb\u307e\u308a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"*/"),"\u3067\u7d42\u308f\u308a\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30b3\u30e1\u30f3\u30c8\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n * \u3053\u3053\u306bJavaDoc\u30b3\u30e1\u30f3\u30c8\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002\n */\n")),(0,r.kt)("h3",{id:"\u30bf\u30b0\u306e\u5229\u7528"},"\u30bf\u30b0\u306e\u5229\u7528"),(0,r.kt)("p",null,"JavaDoc\u30b3\u30e1\u30f3\u30c8\u3067\u306f\u3001\u7279\u5b9a\u306e\u30bf\u30b0\u3092\u4f7f\u3063\u3066\u3001\u3055\u307e\u3056\u307e\u306a\u60c5\u5831\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306f\u3001\u4e00\u822c\u7684\u306a\u30bf\u30b0\u306e\u4f8b\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@author"),": \u4f5c\u8005\u306e\u540d\u524d\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@version"),": \u30d0\u30fc\u30b8\u30e7\u30f3\u60c5\u5831\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@param"),": \u30e1\u30bd\u30c3\u30c9\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002\u30d1\u30e9\u30e1\u30fc\u30bf\u540d\u3068\u8aac\u660e\u6587\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@return"),": \u30e1\u30bd\u30c3\u30c9\u304c\u8fd4\u3059\u5024\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@throws"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"@exception"),": \u30e1\u30bd\u30c3\u30c9\u304c\u6295\u3052\u308b\u4f8b\u5916\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002\u4f8b\u5916\u30af\u30e9\u30b9\u540d\u3068\u8aac\u660e\u6587\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@see"),": \u95a2\u9023\u3059\u308b\u30af\u30e9\u30b9\u3084\u30e1\u30bd\u30c3\u30c9\u3078\u306e\u53c2\u7167\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@since"),": \u6a5f\u80fd\u304c\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u8a18\u8ff0\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@deprecated"),": \u975e\u63a8\u5968\u306e\u6a5f\u80fd\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3057\u3001\u4ee3\u66ff\u624b\u6bb5\u3092\u63d0\u6848\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u307e\u305f\u3001\u30b3\u30e1\u30f3\u30c8\u306e\u6587\u66f8\u4e2d\u306b\u306fHTML\u30bf\u30b0\u3092\u4f7f\u3046\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002\n\u305f\u3068\u3048\u3070\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30c6\u30ad\u30b9\u30c8\u306e\u5185\u90e8\u3067\u6539\u884c\u3092\u5165\u308c\u305f\u3044\u5834\u5408\u306f\u3001\u6539\u884c\u306e\u30bf\u30b0",(0,r.kt)("inlineCode",{parentName:"p"},"<br>"),"\u3092\u4f7f\u3046\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),(0,r.kt)("h3",{id:"javadoc\u30b3\u30e1\u30f3\u30c8\u306e\u4f8b"},"JavaDoc\u30b3\u30e1\u30f3\u30c8\u306e\u4f8b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306f\u3001\u30bf\u30b0\u3092\u4f7f\u7528\u3057\u305fJavaDoc\u30b3\u30e1\u30f3\u30c8\u3092\u30e1\u30bd\u30c3\u30c9\u306b\u8ffd\u52a0\u3057\u305f\u4f8b\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * \u4e0e\u3048\u3089\u308c\u305f2\u3064\u306e\u6574\u6570\u306e\u548c\u3092\u8a08\u7b97\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002\n *\n * @author Yamada Taro\n * @version 1.0\n * @param a \u52a0\u7b97\u3059\u308b\u6700\u521d\u306e\u6574\u6570\n * @param b \u52a0\u7b97\u3059\u308b2\u756a\u76ee\u306e\u6574\u6570\n * @return 2\u3064\u306e\u6574\u6570\u306e\u548c\n * @since 1.0\n */\npublic int add(int a, int b) {\n    return a + b;\n}\n")),(0,r.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u3001JavaDoc\u30b3\u30e1\u30f3\u30c8\u3092\u9069\u5207\u306b\u8a18\u8ff0\u3059\u308b\u3053\u3068\u3067\u3001\u4ed6\u306e\u958b\u767a\u8005\u304c\u30b3\u30fc\u30c9\u3092\u7406\u89e3\u3057\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002\n\u307e\u305f\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u81ea\u52d5\u751f\u6210\u3059\u308b\u3053\u3068\u3067\u3001\u5225\u9014\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u624b\u9593\u3082\u524a\u6e1b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305c\u3072\u3001JavaDoc\u30b3\u30e1\u30f3\u30c8\u306e\u66f8\u304d\u65b9\u3092\u8eab\u306b\u3064\u3051\u3066\u3001\u30c1\u30fc\u30e0\u3067\u306e\u958b\u767a\u3092\u30b9\u30e0\u30fc\u30ba\u306b\u9032\u3081\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"javadoc\u306e\u751f\u6210"},"JavaDoc\u306e\u751f\u6210"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"JarSample.java"),"\u3068\u3057\u3066\u4fdd\u5b58\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class JarSample {\n    /**\n     * \u4e0e\u3048\u3089\u308c\u305f2\u3064\u306e\u6574\u6570\u306e\u548c\u3092\u8a08\u7b97\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002\n     *\n     * @author Yamada Taro\n     * @version 1.0\n     * @param a \u52a0\u7b97\u3059\u308b\u6700\u521d\u306e\u6574\u6570\n     * @param b \u52a0\u7b97\u3059\u308b2\u756a\u76ee\u306e\u6574\u6570\n     * @return 2\u3064\u306e\u6574\u6570\u306e\u548c\n     * @since 1.0\n     */\n    public int add(int a, int b) {\n        return a + b;\n    }\n\n    /**\n     * main\n     *\n     * @param args\n     */\n    public static void main(String[] args) {\n        System.out.println("Hello, JAR FILE!!");\n        System.out.println("add(10,20) -> " + new JarSample().add(10, 20));\n    }\n}\n')),(0,r.kt)("p",null,"\u30bf\u30fc\u30df\u30ca\u30eb\u3067\u4fdd\u5b58\u3057\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\u3057\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ javadoc -private -d doc JarSample.java\n")),(0,r.kt)("p",null,"\u30a8\u30e9\u30fc\u3084\u8b66\u544a\u304c\u51fa\u308b\u5834\u5408\u306f\u3001\u4fee\u6b63\u304c\u5fc5\u8981\u306b\u306a\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"doc"),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u65b0\u305f\u306b\u751f\u6210\u3055\u308c\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u306e\u3067\u3001\u3000",(0,r.kt)("inlineCode",{parentName:"p"},"doc/index.html"),"\u3092\u30d6\u30e9\u30a6\u30b6\u3067\u958b\u304d\u3001\u4f5c\u6210\u3067\u304d\u305f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u78ba\u8a8d\u3057\u3066\u898b\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("h2",{id:"intellij-idea\u3067\u306ejavadoc\u751f\u6210"},"IntelliJ IDEA\u3067\u306eJavaDoc\u751f\u6210"),(0,r.kt)("p",null,"\u30c4\u30fc\u30eb\u30d0\u30fc\u306e\u300cTools\u300d\u2192\u300cGenerate JavaDoc...\u300d\u3092\u9078\u629e\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u304c\u51fa\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1670).Z,width:"1022",height:"1142"})),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e3\u70b9\u306e\u8a2d\u5b9a\u3092\u884c\u308f\u306a\u3044\u3068\u6587\u5b57\u5316\u3051\u304c\u767a\u751f\u3059\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u300cOutput Directory:\u300d\u306b\u306f\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u51fa\u529b\u3057\u305f\u3044\u4efb\u610f\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u300cLocale:\u300d\u306b\u306f",(0,r.kt)("inlineCode",{parentName:"li"},"ja_JP"),"\u3092\u6307\u5b9a\u3057\u3066\u65e5\u672c\u8a9e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3068\u3057\u3066\u751f\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u300cOther command line arguments:\u300d\u306b\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"-encoding utf8 -docencoding utf8 -charset utf8"),"\u3092\u8a2d\u5b9a\u3057\u3066\u3001\u6587\u5b57\u30b3\u30fc\u30c9\u304cUTF-8\u3067\u51fa\u529b\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002")),(0,r.kt)("p",null,"\u300cOK\u300d\u30dc\u30bf\u30f3\u3067\u306e\u751f\u6210\u5f8c\u306f\u3001JavaDco\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\u304c\u884c\u308f\u308c\u3001\u30a8\u30e9\u30fc\u304c\u306a\u3051\u308c\u3070\u6307\u5b9a\u3055\u308c\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u751f\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30a8\u30e9\u30fc\u3084\u8b66\u544a\u304c\u51fa\u3066\u3044\u308b\u5834\u5408\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u4fee\u6b63\u3068\u518d\u751f\u6210\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002"))}d.isMDXComponent=!0},1670:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/javadoc001-10b6358d576e6e67a67ab2185e9f299e.png"}}]);