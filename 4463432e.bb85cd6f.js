(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},f=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=d(r),b=n,p=f["".concat(a,".").concat(b)]||f[b]||l[b]||i;return r?o.a.createElement(p,u(u({ref:t},s),{},{components:r})):o.a.createElement(p,u({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},114:function(e,t,r){"use strict";var n=r(0),o=r(18);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},115:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(114),o=r(116);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(u)return t+r;var d=!r.startsWith(t)?t+r.replace(/^\//,""):r;return s?e+d:d}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},116:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return f}));var n=r(2),o=r(6),i=(r(0),r(113)),a=r(115),u={id:"tuning-from-the-webapp",sidebar_label:"Tuning from QA-Board",title:"Starting tuning experiments from QA-Board"},c={unversionedId:"tuning-from-the-webapp",id:"tuning-from-the-webapp",isDocsHomePage:!1,title:"Starting tuning experiments from QA-Board",description:"How to do tuning or trigger extra runs from QA-Board",source:"@site/docs/tuning-from-the-webapp.md",permalink:"/qaboard/docs/tuning-from-the-webapp",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/tuning-from-the-webapp.md",sidebar_label:"Tuning from QA-Board",sidebar:"docs",previous:{title:"References & Milestones",permalink:"/qaboard/docs/references-and-milestones"},next:{title:"Using celery as a task runner",permalink:"/qaboard/docs/celery-integration"}},s=[{value:"How to do tuning or trigger extra runs from QA-Board",id:"how-to-do-tuning-or-trigger-extra-runs-from-qa-board",children:[]},{value:"Enabling tuning from QA-Board",id:"enabling-tuning-from-qa-board",children:[{value:"1. Build artifacts",id:"1-build-artifacts",children:[]},{value:"2. Distributed task queue",id:"2-distributed-task-queue",children:[]}]}],d={rightToc:s};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"how-to-do-tuning-or-trigger-extra-runs-from-qa-board"},"How to do tuning or trigger extra runs from QA-Board"),Object(i.b)("p",null,"When doing QA or during development, you often want to run the code/configs from a given commit on new tests. QA-Board lets you define and runs batches of tests with extra tuning parameters:"),Object(i.b)("img",{alt:"Tuning from the UI",src:Object(a.a)("img/tuning-from-the-ui.jpg")}),Object(i.b)("h2",{id:"enabling-tuning-from-qa-board"},"Enabling tuning from QA-Board"),Object(i.b)("h3",{id:"1-build-artifacts"},"1. Build artifacts"),Object(i.b)("p",null,"You must have defined and be using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/storage/artifacts"}),"artifacts")),Object(i.b)("h3",{id:"2-distributed-task-queue"},"2. Distributed task queue"),Object(i.b)("p",null,"You need to configure a task runner, that will execute tuning runs asynchronously. We recommend getting started with Celery. All the details are on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"celery-integration"}),"next page"),"!"))}f.isMDXComponent=!0}}]);