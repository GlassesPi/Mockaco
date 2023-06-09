"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="Mocking XML responses",s={unversionedId:"guides/mocking-xml",id:"guides/mocking-xml",title:"Mocking XML responses",description:"Mockaco is able to parse XML request and make its elements available to be used in the response and/or callback templates.",source:"@site/docs/guides/mocking-xml.md",sourceDirName:"guides",slug:"/guides/mocking-xml",permalink:"/Mockaco/docs/guides/mocking-xml",draft:!1,editUrl:"https://github.com/natenho/Mockaco/tree/master/website/docs/guides/mocking-xml.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stateful mocks",permalink:"/Mockaco/docs/guides/mocking-stateful"}},i={},c=[{value:"Example",id:"example",level:2},{value:"Create the request/response template",id:"create-the-requestresponse-template",level:2},{value:"Send the request and get the mocked response",id:"send-the-request-and-get-the-mocked-response",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mocking-xml-responses"},"Mocking XML responses"),(0,a.kt)("p",null,"Mockaco is able to parse XML request and make its elements available to be used in the response and/or callback templates."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"This example is composed by a XML request which is transformed and returned with a different schema."),(0,a.kt)("p",null,"Given the XML request payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <theSongName>Glycerine</theSongName>\n    <theAlbum year="1994">Sixteen Stone</theAlbum>\n</root>\n')),(0,a.kt)("h2",{id:"create-the-requestresponse-template"},"Create the request/response template"),(0,a.kt)("p",null,"Create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"songs.json")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"Mocks")," folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "request": {\n    "method": "POST",\n    "route": "songs"\n  },\n  "response": {\n    "status": "OK",\n    "headers": {\n      "Content-Type": "application/xml"\n    },\n    "body": "\n<?xml version=\\"1.0\\" encoding=\\"UTF-8\\" ?>\n<song>\n  <name><#=Request.Body["root"]?["theSongName"]#></name>\n  <album>\n    <name><#=Request.Body["root"]?["theAlbum"]?["#text"]#></name>\n    <year><#=Request.Body["root"]?["theAlbum"]?["@year"]#></year>\n  </album>\n</song>\n"\n  }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," header must be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"application/xml")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"text/xml"),".\nNotice that XML double quotes must be properly escaped, but inline C# scripts should not be escaped."),(0,a.kt)("p",null,"To access the request XML data and use it inside the response:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An element ",(0,a.kt)("strong",{parentName:"li"},"without")," attributes can be directly accessed by its name:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'Request.Body["root"]?["theSongName"]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An element ",(0,a.kt)("strong",{parentName:"li"},"with")," one or more attributes can be accessed using ",(0,a.kt)("inlineCode",{parentName:"li"},"#text")," key:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'Request.Body["root"]?["theAlbum"]?["#text"]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An element attribute can be accessed using ",(0,a.kt)("inlineCode",{parentName:"li"},"@")," prefix:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'Request.Body["root"]?["theAlbum"]?["@year"]\n')),(0,a.kt)("h2",{id:"send-the-request-and-get-the-mocked-response"},"Send the request and get the mocked response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'curl -iX POST \\\n  --url http://localhost:5000/songs \\\n  --header \'Content-Type: application/xml\' \\\n  --data $\'<?xml version="1.0" encoding="UTF-8" ?>\\r\\n<root>\\r\\n    <theSongName>Glycerine</theSongName>\\r\\n    <theAlbum year="1994">Sixteen Stone</theAlbum>\\r\\n</root>\'\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nDate: Tue, 13 Aug 2019 05:09:40 GMT\nContent-Type: application/xml\nServer: Kestrel\nTransfer-Encoding: chunked\n\n<?xml version="1.0" encoding="UTF-8"?>\n<song>\n  <name>Glycerine</name>\n  <album>\n    <name>Sixteen Stone</name>\n    <year>1994</year>\n  </album>\n</song>\n')))}m.isMDXComponent=!0}}]);