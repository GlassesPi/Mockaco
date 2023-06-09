"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},l="Stateful mocks",s={unversionedId:"guides/mocking-stateful",id:"guides/mocking-stateful",title:"Stateful mocks",description:"Mockaco can persist states to allow mocking multiple behaviors for the same endpoint.",source:"@site/docs/guides/mocking-stateful.md",sourceDirName:"guides",slug:"/guides/mocking-stateful",permalink:"/Mockaco/docs/guides/mocking-stateful",draft:!1,editUrl:"https://github.com/natenho/Mockaco/tree/master/website/docs/guides/mocking-stateful.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mocking binary/raw responses",permalink:"/Mockaco/docs/guides/mocking-raw"},next:{title:"Mocking XML responses",permalink:"/Mockaco/docs/guides/mocking-xml"}},i={},p=[{value:"Example",id:"example",level:2},{value:"Create the request/response templates",id:"create-the-requestresponse-templates",level:2},{value:"Testing the Example",id:"testing-the-example",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stateful-mocks"},"Stateful mocks"),(0,a.kt)("p",null,"Mockaco can persist states to allow mocking multiple behaviors for the same endpoint.\nThese states are simple global variables persisted in memory and available for all active mocks."),(0,a.kt)("p",null,"To create a global variable, simply use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Global")," object indexer and set it inside a code block, surrounded by ",(0,a.kt)("inlineCode",{parentName:"p"},"<#")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"#>"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<#\n    Global["my-custom-variable"] = "my-custom-state";\n#>\n')),(0,a.kt)("p",null,"To retrieve an existing global variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<#=Global["my-custom-variable"]#>\n')),(0,a.kt)("p",null,"Global object can hold any object such as boolean flags, strings or your entire request payload, for instance."),(0,a.kt)("p",null,"Inexistent global variables will always return ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's suppose the following scenario of 3 requests, registering a customer:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"GET /customers returns HTTP 404 Not Found"),(0,a.kt)("li",{parentName:"ol"},"POST /customers returns HTTP 201 Created"),(0,a.kt)("li",{parentName:"ol"},"GET /customers returns HTTP 200 OK with the newly created customer (at this moment, the mock should reset its state so the behavior can be repeated)")),(0,a.kt)("h2",{id:"create-the-requestresponse-templates"},"Create the request/response templates"),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"customers-get-not-found.json")," under the Mocks folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "request": {\n    "method": "GET",\n    "route": "/customers",\n    "condition": "<#=Global["get-customers-state"] == null#>"\n  },\n  "response": {\n    "status": "NotFound"    \n  }\n}\n')),(0,a.kt)("p",null,"This template will match GET /customers requests whenever the global variable ",(0,a.kt)("inlineCode",{parentName:"p"},"get-customers-state")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"null")),(0,a.kt)("p",null,"Then, create ",(0,a.kt)("inlineCode",{parentName:"p"},"customers-post.json")," under the Mocks folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{ \n  "request": {\n    "method": "POST",\n    "route": "/customers"\n  },\n  "response": {\n    "status": "201" \n  }\n}\n<#\n    // Set the state with the request payload\n    Global["get-customers-state"] = Request.Body;\n#>\n')),(0,a.kt)("p",null,"This template will match POST requests to the same endpoint. It will store the entire request body into a global variable named ",(0,a.kt)("inlineCode",{parentName:"p"},"get-customers-state")," and return HTTP 201 Created."),(0,a.kt)("p",null,"Last, create ",(0,a.kt)("inlineCode",{parentName:"p"},"customers-get-ok.json")," under the Mocks folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "request": {\n    "method": "GET",\n    "route": "/customers",\n    "condition": "<#=Global["get-customers-state"] != null#>"\n  },\n  "response": {\n    "status": "200",\n    "body": <#=Global["get-customers-state"].ToString()#>\n  }\n}\n<#\n    // Reset state after the request\n    Global["get-customers-state"] = null;\n#>\n')),(0,a.kt)("p",null,"This template will match GET /customers requests whenever the global variable ",(0,a.kt)("inlineCode",{parentName:"p"},"get-customers-state")," is ",(0,a.kt)("em",{parentName:"p"},"not")," ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),".\nIt will return HTTP 200 OK and output the content of the global variable named ",(0,a.kt)("inlineCode",{parentName:"p"},"get-customers-state")," in the response body.\nAfter that, it resets the global variable named ",(0,a.kt)("inlineCode",{parentName:"p"},"get-customers-state")," back to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", allowing the cycle to be restarted."),(0,a.kt)("h2",{id:"testing-the-example"},"Testing the Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"curl -iX GET http://localhost:5000/customers\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"HTTP/1.1 404 Not Found\nDate: Tue, 21 Jul 2020 05:56:25 GMT\nContent-Type: application/json\nServer: Kestrel\nContent-Length: 0\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"curl -iX POST \\\n  --url http://localhost:5000/customers \\\n  --header 'Content-Type: application/json' \\\n  --data $'{ \"name\": \"John Doe\" }'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"HTTP/1.1 201 Created\nDate: Tue, 21 Jul 2020 05:58:39 GMT\nContent-Type: application/json\nServer: Kestrel\nContent-Length: 0\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"curl -iX GET http://localhost:5000/customers\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nDate: Tue, 21 Jul 2020 06:06:05 GMT\nContent-Type: application/json\nServer: Kestrel\nTransfer-Encoding: chunked\n\n{\n  "name": "John Doe"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"curl -iX GET http://localhost:5000/customers\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"HTTP/1.1 404 Not Found\nDate: Tue, 21 Jul 2020 05:56:25 GMT\nContent-Type: application/json\nServer: Kestrel\nContent-Length: 0\n")))}m.isMDXComponent=!0}}]);