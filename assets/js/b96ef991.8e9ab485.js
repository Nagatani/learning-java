"use strict";(self.webpackChunkmyjavadoc=self.webpackChunkmyjavadoc||[]).push([[56],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=d(n),k=l,s=c["".concat(p,".").concat(k)]||c[k]||m[k]||r;return n?a.createElement(s,i(i({ref:e},u),{},{components:n})):a.createElement(s,i({ref:e},u))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1933:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const r={title:"\u30af\u30e9\u30b9\u4f5c\u6210\u306e\u7df4\u7fd2\u554f\u984c",sidebar_position:6},i=void 0,o={unversionedId:"class-and-method/\u30af\u30e9\u30b9\u4f5c\u6210\u306e\u7df4\u7fd2\u554f\u984c",id:"class-and-method/\u30af\u30e9\u30b9\u4f5c\u6210\u306e\u7df4\u7fd2\u554f\u984c",title:"\u30af\u30e9\u30b9\u4f5c\u6210\u306e\u7df4\u7fd2\u554f\u984c",description:"\u30af\u30e9\u30b9\u4f5c\u6210\u306e\u7df4\u7fd2\u554f\u984c\u3092\u901a\u3057\u3066\u3001\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u8a08\u7b97\u51e6\u7406\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4f5c\u6210\u3092\u4f53\u9a13\u3057\u307e\u3057\u3087\u3046\u3002",source:"@site/docs/04-class-and-method/06-\u30af\u30e9\u30b9\u4f5c\u6210\u306e\u7df4\u7fd2\u554f\u984c.md",sourceDirName:"04-class-and-method",slug:"/class-and-method/\u30af\u30e9\u30b9\u4f5c\u6210\u306e\u7df4\u7fd2\u554f\u984c",permalink:"/learning-java/class-and-method/\u30af\u30e9\u30b9\u4f5c\u6210\u306e\u7df4\u7fd2\u554f\u984c",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u30af\u30e9\u30b9\u4f5c\u6210\u306e\u7df4\u7fd2\u554f\u984c",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u30af\u30e9\u30b9",permalink:"/learning-java/class-and-method/\u30af\u30e9\u30b9"},next:{title:"\u7df4\u7fd2\u554f\u984c4-1",permalink:"/learning-java/class-and-method/\u7df4\u7fd2\u554f\u984c1"}},p={},d=[{value:"\u5e73\u9762\u4e0a\u306e3\u70b9\u306e\u5ea7\u6a19\u3092\u4fdd\u6301\u3057\u305d\u306e\u70b9\u304c\u8868\u3059\u4e09\u89d2\u5f62\u306e\u91cd\u5fc3\u3092\u7b97\u51fa\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0",id:"\u5e73\u9762\u4e0a\u306e3\u70b9\u306e\u5ea7\u6a19\u3092\u4fdd\u6301\u3057\u305d\u306e\u70b9\u304c\u8868\u3059\u4e09\u89d2\u5f62\u306e\u91cd\u5fc3\u3092\u7b97\u51fa\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0",level:2},{value:"\u4f5c\u6210\u3059\u308b\u30af\u30e9\u30b9\u4e00\u89a7",id:"\u4f5c\u6210\u3059\u308b\u30af\u30e9\u30b9\u4e00\u89a7",level:3},{value:"\u30af\u30e9\u30b9\u5b9a\u7fa9\u8a73\u7d30",id:"\u30af\u30e9\u30b9\u5b9a\u7fa9\u8a73\u7d30",level:3},{value:"Point (Point.java)",id:"point-pointjava",level:4},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9",id:"\u30d5\u30a3\u30fc\u30eb\u30c9",level:5},{value:"\u30e1\u30bd\u30c3\u30c9",id:"\u30e1\u30bd\u30c3\u30c9",level:5},{value:"TrianglesCentroid (TrianglesCentroid.java)",id:"trianglescentroid-trianglescentroidjava",level:4},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9",id:"\u30d5\u30a3\u30fc\u30eb\u30c9-1",level:5},{value:"\u30e1\u30bd\u30c3\u30c9",id:"\u30e1\u30bd\u30c3\u30c9-1",level:5},{value:"\u91cd\u5fc3\u5ea7\u6a19\u306e\u8a08\u7b97\u306b\u3064\u3044\u3066",id:"\u91cd\u5fc3\u5ea7\u6a19\u306e\u8a08\u7b97\u306b\u3064\u3044\u3066",level:5},{value:"Calculator(Calculator.java)",id:"calculatorcalculatorjava",level:4},{value:"\u89e3\u7b54\u4f8b",id:"\u89e3\u7b54\u4f8b",level:3},{value:"Point.java",id:"pointjava",level:4},{value:"TrianglesCentroid.java",id:"trianglescentroidjava",level:4},{value:"Calculator.java",id:"calculatorjava",level:4}],u={toc:d};function m(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30af\u30e9\u30b9\u4f5c\u6210\u306e\u7df4\u7fd2\u554f\u984c\u3092\u901a\u3057\u3066\u3001\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u8a08\u7b97\u51e6\u7406\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4f5c\u6210\u3092\u4f53\u9a13\u3057\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("h2",{id:"\u5e73\u9762\u4e0a\u306e3\u70b9\u306e\u5ea7\u6a19\u3092\u4fdd\u6301\u3057\u305d\u306e\u70b9\u304c\u8868\u3059\u4e09\u89d2\u5f62\u306e\u91cd\u5fc3\u3092\u7b97\u51fa\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0"},"\u5e73\u9762\u4e0a\u306e3\u70b9\u306e\u5ea7\u6a19\u3092\u4fdd\u6301\u3057\u305d\u306e\u70b9\u304c\u8868\u3059\u4e09\u89d2\u5f62\u306e\u91cd\u5fc3\u3092\u7b97\u51fa\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0"),(0,l.kt)("h3",{id:"\u4f5c\u6210\u3059\u308b\u30af\u30e9\u30b9\u4e00\u89a7"},"\u4f5c\u6210\u3059\u308b\u30af\u30e9\u30b9\u4e00\u89a7"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Point",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5ea7\u6a19\u30af\u30e9\u30b9",(0,l.kt)("inlineCode",{parentName:"li"},"(x, y)")))),(0,l.kt)("li",{parentName:"ol"},"TrianglesCentroid",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"3\u70b9\u306e\u5ea7\u6a19\u3092\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u6301\u3061\u30013\u70b9\u306e\u91cd\u5fc3\u5ea7\u6a19\u3092\u8a08\u7b97\u3059\u308b\u6a5f\u80fd\u3092\u30af\u30e9\u30b9"))),(0,l.kt)("li",{parentName:"ol"},"Calculator",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30e1\u30a4\u30f3\u30af\u30e9\u30b9")))),(0,l.kt)("h3",{id:"\u30af\u30e9\u30b9\u5b9a\u7fa9\u8a73\u7d30"},"\u30af\u30e9\u30b9\u5b9a\u7fa9\u8a73\u7d30"),(0,l.kt)("h4",{id:"point-pointjava"},"Point (Point.java)"),(0,l.kt)("h5",{id:"\u30d5\u30a3\u30fc\u30eb\u30c9"},"\u30d5\u30a3\u30fc\u30eb\u30c9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30d5\u30a3\u30fc\u30eb\u30c9\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"X\u5ea7\u6a19")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"Y\u5ea7\u6a19")))),(0,l.kt)("h5",{id:"\u30e1\u30bd\u30c3\u30c9"},"\u30e1\u30bd\u30c3\u30c9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30e1\u30bd\u30c3\u30c9\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u623b\u308a\u5024\u306e\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5f15\u6570\u8a73\u7d30"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getPrintString")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u306a\u3057"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ea7\u6a19\u30c7\u30fc\u30bf\u3092\u300c",(0,l.kt)("inlineCode",{parentName:"td"},"(x,y)"),"\u300d\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u6587\u5b57\u5217\u3067\u8fd4\u3057\u307e\u3059\u3002\u5c0f\u6570\u70b9\u4ee5\u4e0b\u306e\u6587\u5b57\u5217\u5316\u306f\u5c0f\u6570\u70b9\u4ee5\u4e0b2\u6841\u3092\u8868\u793a\u3055\u305b\u307e\u3059\u3002")))),(0,l.kt)("h4",{id:"trianglescentroid-trianglescentroidjava"},"TrianglesCentroid (TrianglesCentroid.java)"),(0,l.kt)("h5",{id:"\u30d5\u30a3\u30fc\u30eb\u30c9-1"},"\u30d5\u30a3\u30fc\u30eb\u30c9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30d5\u30a3\u30fc\u30eb\u30c9\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"point1")),(0,l.kt)("td",{parentName:"tr",align:null},"Point"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ea7\u6a191")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"point2")),(0,l.kt)("td",{parentName:"tr",align:null},"Point"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ea7\u6a192")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"point3")),(0,l.kt)("td",{parentName:"tr",align:null},"Point"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ea7\u6a193")))),(0,l.kt)("h5",{id:"\u30e1\u30bd\u30c3\u30c9-1"},"\u30e1\u30bd\u30c3\u30c9"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u30e1\u30bd\u30c3\u30c9\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u623b\u308a\u5024\u306e\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5f15\u6570\u8a73\u7d30"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"calc")),(0,l.kt)("td",{parentName:"tr",align:null},"Point"),(0,l.kt)("td",{parentName:"tr",align:null},"\u306a\u3057"),(0,l.kt)("td",{parentName:"tr",align:null},"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e3\u3064\u306e\u5ea7\u6a19\u3088\u308a\u3001\u91cd\u5fc3\u3068\u306a\u308b\u5ea7\u6a19\u3092\u7b97\u51fa\u3057\u623b\u308a\u5024\u3067\u91cd\u5fc3\u5ea7\u6a19\u3092\u8fd4\u3057\u307e\u3059\u3002\u8a08\u7b97\u5f0f\u306f\u3001\u2193\u306e\u6570\u5f0f\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002")))),(0,l.kt)("h5",{id:"\u91cd\u5fc3\u5ea7\u6a19\u306e\u8a08\u7b97\u306b\u3064\u3044\u3066"},"\u91cd\u5fc3\u5ea7\u6a19\u306e\u8a08\u7b97\u306b\u3064\u3044\u3066"),(0,l.kt)("p",null,"\u7b97\u51fa\u3059\u308b\u91cd\u5fc3\u5ea7\u6a19\u3092",(0,l.kt)("inlineCode",{parentName:"p"},"(Dx, Dy)"),"\u3068\u3057\u3001point1\u3092",(0,l.kt)("inlineCode",{parentName:"p"},"(x1, y1)"),"\u3001point2\u3092",(0,l.kt)("inlineCode",{parentName:"p"},"(x2, y2)"),"\u3001point3\u3092",(0,l.kt)("inlineCode",{parentName:"p"},"(x3, y3)"),"\u3068\u3057\u305f\u3068\u304d\u3001\u4ee5\u4e0b\u306e\u6570\u5f0f\u306b\u5f53\u3066\u306f\u3081\u3066\u8a08\u7b97\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(326).Z,width:"930",height:"256"})),(0,l.kt)("h4",{id:"calculatorcalculatorjava"},"Calculator(Calculator.java)"),(0,l.kt)("p",null,"\u3053\u306e\u30af\u30e9\u30b9\u306f\u3001\u30a8\u30f3\u30c8\u30ea\u30dd\u30a4\u30f3\u30c8\u3068\u306a\u308b\u30e1\u30a4\u30f3\u30e1\u30bd\u30c3\u30c9\u306e\u307f\u4fdd\u6301\u3057\u307e\u3059\u3002\n\u3053\u306e\u30af\u30e9\u30b9\u306e\u30e1\u30a4\u30f3\u30e1\u30bd\u30c3\u30c9\u3067\u306f\u4efb\u610f\u306e3\u70b9\u306e\u5ea7\u6a19\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"Point"),"\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\uff09\u3092\u4f5c\u6210\u3057\u3066\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"TrianglesCentroid"),"\u30af\u30e9\u30b9\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3078\u30c7\u30fc\u30bf\u3092\u6e21\u3057\u3001\u8a08\u7b97\u3057\u305f\u7d50\u679c\u3092\u53d6\u5f97\u3001\u753b\u9762\u306b\u305d\u306e\u5ea7\u6a19\u3092\u8868\u793a\u3059\u308b\u51e6\u7406\u3092\u8a18\u8ff0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h3",{id:"\u89e3\u7b54\u4f8b"},"\u89e3\u7b54\u4f8b"),(0,l.kt)("h4",{id:"pointjava"},"Point.java"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u30af\u30ea\u30c3\u30af\u3067\u8868\u793a\u3059\u308b"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class Point {\n    // X\u5ea7\u6a19\n    double x = 0.0;\n    // Y\u5ea7\u6a19\n    double y = 0.0;\n\n    // \u5ea7\u6a19\u30c7\u30fc\u30bf\u3092\u300c`(x,y)`\u300d\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u6587\u5b57\u5217\u3067\u8fd4\u3057\u307e\u3059\u3002\u5c0f\u6570\u70b9\u4ee5\u4e0b\u306e\u6587\u5b57\u5217\u5316\u306f\u5c0f\u6570\u70b9\u4ee5\u4e0b2\u6841\u3092\u8868\u793a\u3055\u305b\u307e\u3059\u3002\n    String getPrintString() {\n        return "(" + String.format("%.2f", x) + "," + String.format("%.2f", y) + ")";\n    }\n}\n')))),(0,l.kt)("h4",{id:"trianglescentroidjava"},"TrianglesCentroid.java"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u30af\u30ea\u30c3\u30af\u3067\u8868\u793a\u3059\u308b"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class TrianglesCentroid {\n    //\u5ea7\u6a191\n    Point point1 = new Point();\n    //\u5ea7\u6a192\n    Point point2 = new Point();\n    //\u5ea7\u6a193\n    Point point3 = new Point();\n\n    // \u30d5\u30a3\u30fc\u30eb\u30c9\u306e3\u3064\u306e\u5ea7\u6a19\u3088\u308a\u3001\u91cd\u5fc3\u3068\u306a\u308b\u5ea7\u6a19\u3092\u7b97\u51fa\u3057\u623b\u308a\u5024\u3067\u91cd\u5fc3\u5ea7\u6a19\u3092\u8fd4\u3057\u307e\u3059\u3002\n    Point calc() {\n        double dx = (point1.x + point2.x + point3.x) / 3.0;\n        double dy = (point1.y + point2.y + point3.y) / 3.0;\n        Point ret = new Point();\n        ret.x = dx;\n        ret.y = dy;\n        return ret;\n    }\n}\n")))),(0,l.kt)("h4",{id:"calculatorjava"},"Calculator.java"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u30af\u30ea\u30c3\u30af\u3067\u8868\u793a\u3059\u308b"),(0,l.kt)("p",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class Calculator {\n    public static void main(String[] args) {\n        TrianglesCentroid tc = new TrianglesCentroid();\n        tc.point1.x = 0.0;\n        tc.point1.y = 0.0;\n        System.out.println("p1:" + tc.point1.getPrintString());\n        tc.point2.x = 2.0;\n        tc.point2.y = 2.0;\n        System.out.println("p2:" + tc.point2.getPrintString());\n        tc.point3.x = 2.0;\n        tc.point3.y = -2.0;\n        System.out.println("p3:" + tc.point3.getPrintString());\n        \n        Point answer = tc.calc();\n        System.out.println("\uff13\u70b9\u306e\u91cd\u5fc3\u70b9\u306f" + answer.getPrintString());\n    }\n}\n')))))}m.isMDXComponent=!0},326:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/fig1-f1be342aa98df5a8ce4b37b8c91f181c.png"}}]);