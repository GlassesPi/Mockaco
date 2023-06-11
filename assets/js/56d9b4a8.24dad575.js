"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,b=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(b,a(a({ref:t},l),{},{components:r})):n.createElement(b,a({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:3},a="condition attribute",c={unversionedId:"reference/request/condition-attribute",id:"reference/request/condition-attribute",title:"condition attribute",description:"Any condition that evaluates to `true` will return the response. The condition is suitable to be used with scripting.",source:"@site/docs/reference/request/condition-attribute.md",sourceDirName:"reference/request",slug:"/reference/request/condition-attribute",permalink:"/Mockaco/docs/reference/request/condition-attribute",draft:!1,editUrl:"https://github.com/natenho/Mockaco/tree/master/website/docs/reference/request/condition-attribute.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"route attribute",permalink:"/Mockaco/docs/reference/request/route-attribute"},next:{title:"response object",permalink:"/Mockaco/docs/category/response-object"}},u={},s=[{value:"Example",id:"example",level:2}],l={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"condition-attribute"},"condition attribute"),(0,o.kt)("p",null,"Any condition that evaluates to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," will return the response. The condition is suitable to be used with scripting."),(0,o.kt)("p",null,"If omitted, empty or null, defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "condition": "<#= DateTime.Now.Second % 2 == 0 #>"\n  },\n  "response": {\n    "status": "OK"\n  }\n}\n')))}d.isMDXComponent=!0}}]);