"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=i,h=s["".concat(c,".").concat(f)]||s[f]||u[f]||r;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const r={},a="Verification",l={unversionedId:"verification/index",id:"verification/index",title:"Verification",description:"There is a default endpoint provided that let you verify the last call for each mocked endpoint. The default path for this endpoint is `http5000/_mockaco/verification?route={path to verify}`.",source:"@site/docs/verification/index.md",sourceDirName:"verification",slug:"/verification/",permalink:"/Mockaco/docs/verification/",draft:!1,editUrl:"https://github.com/natenho/Mockaco/tree/master/website/docs/verification/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generating fake data",permalink:"/Mockaco/docs/scripting/fake-data"},next:{title:"Generator",permalink:"/Mockaco/docs/generator/"}},c={},p=[{value:"Example: Verifying call to mocked endpoint",id:"example-verifying-call-to-mocked-endpoint",level:2},{value:"Verify request without body",id:"verify-request-without-body",level:3},{value:"Verify request with body",id:"verify-request-with-body",level:3},{value:"Verify request with headers",id:"verify-request-with-headers",level:3},{value:"Configure hidden headers in verification endpoint",id:"configure-hidden-headers-in-verification-endpoint",level:3},{value:"Configure custom name of verification endpoint",id:"configure-custom-name-of-verification-endpoint",level:2},{value:"Configure the duration of cache storing last request for verification",id:"configure-the-duration-of-cache-storing-last-request-for-verification",level:2},{value:"Verification summary",id:"verification-summary",level:2}],d={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"verification"},"Verification"),(0,i.kt)("p",null,"There is a default endpoint provided that let you verify the last call for each mocked endpoint. The default path for this endpoint is ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/_mockaco/verification?route={path to verify}"),"."),(0,i.kt)("h2",{id:"example-verifying-call-to-mocked-endpoint"},"Example: Verifying call to mocked endpoint"),(0,i.kt)("h3",{id:"verify-request-without-body"},"Verify request without body"),(0,i.kt)("p",null,"If you have just called ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/hello/Jane Doe"),", the verification endpoint\ncalled in the following way: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/_mockaco/verification?route=/hello/Jane Doe")," will respond like so: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "route": "/hello/Hello There",\n    "timestamp": "14:15",\n    "body": ""\n}\n')),(0,i.kt)("h3",{id:"verify-request-with-body"},"Verify request with body"),(0,i.kt)("p",null,"If you have just called ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/hello/Jane Doe"),", with the following body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "username": "Jane1",\n    "lastname": "Doe1"\n}\n')),(0,i.kt)("p",null,"the verification endpoint called in the following way: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/_mockaco/verification?route=/hello/Jane Doe")," will respond like so: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "route": "/hello/Jane Doe",\n    "timestamp": "14:39",\n    "body": "{\\r\\n    \\"username\\": \\"Jane1\\",\\r\\n    \\"lastname\\": \\"Doe1\\"\\r\\n}"\n}\n')),(0,i.kt)("p",null,"Both JSON body and x-www-form-urlencoded body are supported."),(0,i.kt)("h3",{id:"verify-request-with-headers"},"Verify request with headers"),(0,i.kt)("p",null,"If you have just called ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/hello/Jane Doe"),", with the following headers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    x-user-id:someone@email.com\n    Authorization:some-bearer-token\n    endtoend:b9802abd-106f-4d50-b68e-de3198777456\n")),(0,i.kt)("p",null,"the verification endpoint called in the following way: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/_mockaco/verification?route=/hello/Jane Doe")," will respond like so: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "route": "/hello/Jane Doe",\n    "timestamp": "14:41",\n    "headers": [\n        {\n            "key": "x-user-id",\n            "value": "someone@email.com"\n        },\n        {\n            "key": "Authorization",\n            "value": "some-bearer-token"\n        },\n        {\n            "key": "endtoend",\n            "value": "b9802abd-106f-4d50-b68e-de3198777456"\n        }\n    ],\n    "body": ""\n}\n')),(0,i.kt)("h3",{id:"configure-hidden-headers-in-verification-endpoint"},"Configure hidden headers in verification endpoint"),(0,i.kt)("p",null,"You can configure to not display headers that are not relevant to your test. By default the following headers will not be displayed:  ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept, Connection, Host, User-Agent, Accept-Encoding, Postman-Token, Content-Type, Content-Length.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"Mockaco": {\n    ...\n    "VerificationIgnoredHeaders": [        \n        "Postman-Token",\n        "Some-Irrelevant-Header",\n    ],\n    ...\n  },\n')),(0,i.kt)("h2",{id:"configure-custom-name-of-verification-endpoint"},"Configure custom name of verification endpoint"),(0,i.kt)("p",null,"You can configure the default name of verification enpoint by modifying ",(0,i.kt)("inlineCode",{parentName:"p"},"Mockaco.VerificationEndpointName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Mockaco.VerificationEndpointPrefix")," fields in ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file. So if you will rename it like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"Mockaco": {\n    ...\n    "VerificationEndpointName": "customVerify",\n    "VerificationEndpointPrefix": "_internal"\n  },\n')),(0,i.kt)("p",null,"You will be able to access the verification endpoint on ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/_internal/customVerify")),(0,i.kt)("h2",{id:"configure-the-duration-of-cache-storing-last-request-for-verification"},"Configure the duration of cache storing last request for verification"),(0,i.kt)("p",null,"Each request with the exact time of being invoked, body and path is being stored in the internal .Net cache for 60 minutes. You can configure this time by changing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"Mockaco": {\n    ...\n    "MatchedRoutesCacheDuration": 60, \n    ...\n  },\n')),(0,i.kt)("p",null,"in ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json"),"."),(0,i.kt)("h2",{id:"verification-summary"},"Verification summary"),(0,i.kt)("p",null,"Let's assume that you have the following endpoints mocked:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://localhost:5000/hello/{message}\nhttp://localhost:5000/test\n")),(0,i.kt)("p",null,"With the verification functionality you can check the last performed call for each of these 2 endpoints and different variations of {message}, so if you called these 2 endpoints in the following ways:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl --location --request GET 'http://localhost:5000/hello/Jane Doe'\ncurl --location --request GET 'http://localhost:5000/hello/Marzipan'\ncurl --location --request GET 'http://localhost:5000/hello/There!'\ncurl --location --request GET 'http://localhost:5000/test'\n")),(0,i.kt)("p",null,"You can perform these checks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://localhost:5000/_mockaco/verification?route=/hello/Jane Doe\nhttp://localhost:5000/_mockaco/verification?route=/hello/Marzipan\nhttp://localhost:5000/_mockaco/verification?route=/hello/There!\nhttp://localhost:5000/_mockaco/verification?route=/test\n")),(0,i.kt)("p",null,"You cannot perform verification based on the generic url like ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/_mockaco/verification?route=/hello/{message}")))}u.isMDXComponent=!0}}]);