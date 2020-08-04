(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{108:function(t,e,a){"use strict";a.d(e,"a",(function(){return b})),a.d(e,"b",(function(){return f}));var r=a(0),n=a.n(r);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=n.a.createContext({}),u=function(t){var e=n.a.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},b=function(t){var e=u(t.components);return n.a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},p=n.a.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),b=u(a),p=r,f=b["".concat(c,".").concat(p)]||b[p]||d[p]||i;return a?n.a.createElement(f,o(o({ref:e},l),{},{components:a})):n.a.createElement(f,o({ref:e},l))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},109:function(t,e,a){"use strict";var r=a(0),n=a(18);e.a=function(){var t=Object(r.useContext)(n.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},110:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return c}));var r=a(109),n=a(111);function i(){var t=Object(r.a)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,a=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,a,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,o=void 0!==c&&c,s=i.absolute,l=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(o)return e+a;var u=!a.startsWith(e)?e+a.replace(/^\//,""):a;return l?t+u:u}(i,a,t,e)}}}function c(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},111:function(t,e,a){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function n(t){return void 0!==t&&!r(t)}a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return n}))},54:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return s})),a.d(e,"rightToc",(function(){return l})),a.d(e,"default",(function(){return b}));var r=a(2),n=a(6),i=(a(0),a(108)),c=a(110),o={id:"artifacts",sidebar_label:"Artifacts",title:"Artifacts"},s={unversionedId:"storage/artifacts",id:"storage/artifacts",isDocsHomePage:!1,title:"Artifacts",description:"Artifacts are needed by QA-Board to start tuning experiments",source:"@site/docs/storage/artifacts.md",permalink:"/qaboard/docs/storage/artifacts",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/storage/artifacts.md",sidebar_label:"Artifacts",sidebar:"docs",previous:{title:"Where is the data saved?",permalink:"/qaboard/docs/storage/where-is-the-data"},next:{title:"Deleting Old Outputs and Artifacts",permalink:"/qaboard/docs/storage/deleting-old-data"}},l=[{value:"What are artifacts?",id:"what-are-artifacts",children:[]},{value:"Defining artifacts",id:"defining-artifacts",children:[]},{value:"How to save artifacts?",id:"how-to-save-artifacts",children:[]}],u={rightToc:l};function b(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Artifacts are needed by QA-Board to start tuning experiments"),Object(i.b)("h2",{id:"what-are-artifacts"},"What are artifacts?"),Object(i.b)("p",null,"To run your code, you generally need:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"binaries compiled automatically during the continuous integration."),Object(i.b)("li",{parentName:"ul"},"wrapper scripts..."),Object(i.b)("li",{parentName:"ul"},"depending on how you view things, trained networks or calibrated data.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Defining those as artifacts makes it possible to upload them to QA-Board's storage, then start tuning experiments.")),Object(i.b)("h2",{id:"defining-artifacts"},"Defining artifacts"),Object(i.b)("p",null,"Artifacts are defined with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="qaboard.yaml"',title:'"qaboard.yaml"'}),'# Basic example\nartifacts:\n  binary:\n    glob: build/binary\n  configurations:\n    globs:\n    - configurations/*.json\n    - "*.yaml"\n')),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For convenience, ",Object(i.b)("em",{parentName:"p"},"qaboard.yaml")," and ",Object(i.b)("em",{parentName:"p"},"qa/")," are pre-defined as artifacts."))),Object(i.b)("p",null,'In QA-Board, you can view each commit\'s artifacts in the "Configuration" tab.'),Object(i.b)("img",{alt:"Artifacts",src:Object(c.a)("img/artifacts-tab.jpg")}),Object(i.b)("h2",{id:"how-to-save-artifacts"},"How to save artifacts?"),Object(i.b)("p",null,"After your build is done, call:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"qa save-artifacts\n")),Object(i.b)("p",null,"Usually you can do it simply in your CI tool:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="gitlab-ci.yml"',title:'"gitlab-ci.yml"'}),"after_script:\n  - qa save-artifacts\n")))}b.isMDXComponent=!0}}]);