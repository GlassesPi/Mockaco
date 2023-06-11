"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,k=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?o.createElement(k,c(c({ref:t},h),{},{components:n})):o.createElement(k,c({ref:t},h))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={},c="Health Checks",i={unversionedId:"health-checks/index",id:"health-checks/index",title:"Health Checks",description:"Health checks are often useful when Mockaco container is being used.",source:"@site/docs/health-checks/index.md",sourceDirName:"health-checks",slug:"/health-checks/",permalink:"/Mockaco/docs/health-checks/",draft:!1,editUrl:"https://github.com/natenho/Mockaco/tree/master/website/docs/health-checks/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/Mockaco/docs/configuration/"},next:{title:"Guides",permalink:"/Mockaco/docs/category/guides"}},l={},s=[{value:"<code>/_mockaco/health</code>",id:"_mockacohealth",level:2},{value:"<code>/_mockaco/ready</code>",id:"_mockacoready",level:2},{value:"Using readiness endpoint in Dockerfile",id:"using-readiness-endpoint-in-dockerfile",level:3}],h={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"health-checks"},"Health Checks"),(0,a.kt)("p",null,"Health checks are often useful when Mockaco container is being used."),(0,a.kt)("h2",{id:"_mockacohealth"},(0,a.kt)("inlineCode",{parentName:"h2"},"/_mockaco/health")),(0,a.kt)("p",null,"To determine if Mockaco is running and listening, you can check its health status by accessing http://localhost:5000/_mockaco/health. A successful request will receive an HTTP 200 OK response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ curl -i http://localhost:5000/_mockaco/health\nHTTP/1.1 200 OK\nContent-Type: text/plain\nDate: Sun, 11 Jun 2023 17:46:30 GMT\nServer: Kestrel\nCache-Control: no-store, no-cache\nExpires: Thu, 01 Jan 1970 00:00:00 GMT\nPragma: no-cache\nTransfer-Encoding: chunked\n\nHealthy\n")),(0,a.kt)("h2",{id:"_mockacoready"},(0,a.kt)("inlineCode",{parentName:"h2"},"/_mockaco/ready")),(0,a.kt)("p",null,"During the startup process, Mockaco asynchronously loads and caches mocks. The duration of this process may vary depending on the number of mocks being loaded. However, it's important to note that while this loading is taking place, some requests may not be served as expected, resulting in an HTTP 501 response."),(0,a.kt)("p",null,"To avoid this potential race condition, it is recommended to utilize the readiness endpoint."),(0,a.kt)("p",null,"While the mocks are still loading, the service will respond with an HTTP 503 status code. Here's an example of the response you would receive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ curl -i http://localhost:5000/_mockaco/ready\nHTTP/1.1 503 Service Unavailable\nContent-Type: text/plain\nDate: Sun, 11 Jun 2023 17:47:55 GMT\nServer: Kestrel\nCache-Control: no-store, no-cache\nExpires: Thu, 01 Jan 1970 00:00:00 GMT\nPragma: no-cache\nTransfer-Encoding: chunked\n\nUnhealthy\n")),(0,a.kt)("p",null,"Once the startup process is complete and Mockaco is ready to handle requests, the readiness endpoint will return an HTTP 200 OK status code. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ curl -i http://localhost:5000/_mockaco/ready\nHTTP/1.1 200 OK\nContent-Type: text/plain\nDate: Sun, 11 Jun 2023 17:50:59 GMT\nServer: Kestrel\nCache-Control: no-store, no-cache\nExpires: Thu, 01 Jan 1970 00:00:00 GMT\nPragma: no-cache\nTransfer-Encoding: chunked\n\nHealthy\n")),(0,a.kt)("h3",{id:"using-readiness-endpoint-in-dockerfile"},"Using readiness endpoint in Dockerfile"),(0,a.kt)("p",null,"By default, Mockaco containers does not expose health checks. However, you can create a derived Docker image and utilize the ",(0,a.kt)("inlineCode",{parentName:"p"},"HEALTHCHECK")," instruction to ensure the container's health status is determined only after all the mocks have been loaded. Here's an example Dockerfile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM natenho/mockaco\nCOPY Mocks /app/Mocks\nHEALTHCHECK --interval=5s --timeout=3s \\\n    CMD curl --fail http://localhost:5000/_mockaco/ready || exit 1\n")),(0,a.kt)("p",null,"In this Dockerfile, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Mocks")," folder is copied into the ",(0,a.kt)("inlineCode",{parentName:"p"},"/app/Mocks")," directory within the container. You can replace Mocks with the actual path of your local Mocks folder."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"HEALTHCHECK")," instruction sets up a health check for the container. It specifies the interval and timeout for checking the health, and it runs the curl command to verify the readiness endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/_mockaco/ready"),". If the curl command fails (returns a non-zero exit status), the container will be considered unhealthy and exit with status code 1."),(0,a.kt)("p",null,"To build the derived Docker image, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker build -t mockaco-image .\n")),(0,a.kt)("p",null,"Replace mockaco-image with your desired image name."),(0,a.kt)("p",null,"Once the image is built, you can run a container based on it, mapping the container's port 5000 to the host's port of your choice (e.g., 8080):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 8080:5000 --name mockaco-container mockaco-image\n")),(0,a.kt)("p",null,"Now the container will be running with the Mocks folder mapped to ",(0,a.kt)("inlineCode",{parentName:"p"},"/app/Mocks")," inside it, and the health check will be performed periodically using the specified curl command."))}d.isMDXComponent=!0}}]);