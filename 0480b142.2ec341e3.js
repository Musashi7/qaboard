(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return a?n.a.createElement(m,c(c({ref:t},s),{},{components:a})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},109:function(e,t,a){"use strict";var r=a(0),n=a(18);t.a=function(){var e=Object(r.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},110:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var r=a(109),n=a(111);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,b=o.absolute,s=void 0!==b&&b;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(c)return t+a;var l=!a.startsWith(t)?t+a.replace(/^\//,""):a;return s?e+l:l}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},111:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},55:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(6),o=(a(0),a(108)),i=a(110),c={id:"faq",sidebar_label:"FAQ",title:"Frequently Asked Questions"},b={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"There is a bug I'd like you to know about",source:"@site/docs/faq.md",permalink:"/qaboard/docs/faq",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/faq.md",sidebar_label:"FAQ",sidebar:"docs",previous:{title:"Bit accuracy tests",permalink:"/qaboard/docs/bit-accuracy"},next:{title:"Troubleshooting common issues",permalink:"/qaboard/docs/backend-admin/troubleshooting"}},s=[{value:"There is a bug I&#39;d like you to know about",id:"there-is-a-bug-id-like-you-to-know-about",children:[]},{value:"What is QA-Board written with?",id:"what-is-qa-board-written-with",children:[]},{value:"Does QA-Board work with <code>python2.7</code>?",id:"does-qa-board-work-with-python27",children:[]},{value:"Where are results saved?",id:"where-are-results-saved",children:[]},{value:"Can I export the data or use a third-party viewer?",id:"can-i-export-the-data-or-use-a-third-party-viewer",children:[]}],l={rightToc:s};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"there-is-a-bug-id-like-you-to-know-about"},"There is a bug I'd like you to know about"),Object(o.b)("p",null,"Open an issue ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Samsung/qaboard/issues"}),"here"),", or even mail ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:arthur.flam@samsung.com"}),"Arthur Flam"),"."),Object(o.b)("h2",{id:"what-is-qa-board-written-with"},"What is QA-Board written with?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CLI tool")," (wraps your code): ",Object(o.b)("inlineCode",{parentName:"li"},"python")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Frontend:")," views with ",Object(o.b)("inlineCode",{parentName:"li"},"reactjs"),", state with ",Object(o.b)("inlineCode",{parentName:"li"},"reduxjs"),", design with ",Object(o.b)("inlineCode",{parentName:"li"},"blueprintjs"),", images with ",Object(o.b)("inlineCode",{parentName:"li"},"openseadragon"),", plots with ",Object(o.b)("inlineCode",{parentName:"li"},"plotly"),"/",Object(o.b)("inlineCode",{parentName:"li"},"threejs"),"..."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Backend"),": ",Object(o.b)("inlineCode",{parentName:"li"},"postgreSQL")," (to store metadata) accessed via ",Object(o.b)("inlineCode",{parentName:"li"},"flask"))),Object(o.b)("h2",{id:"does-qa-board-work-with-python27"},"Does QA-Board work with ",Object(o.b)("inlineCode",{parentName:"h2"},"python2.7"),"?"),Object(o.b)("p",null,"Well enough! Just call ",Object(o.b)("inlineCode",{parentName:"p"},"python2 your_code.py")," as any other executable."),Object(o.b)("h2",{id:"where-are-results-saved"},"Where are results saved?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Local runs")," are saved under the ",Object(o.b)("em",{parentName:"li"},"output/")," directory in the project."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"During CI runs"),", results are saved under the ",Object(o.b)("inlineCode",{parentName:"li"},"storage")," defined in ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Samsung/qaboard/blob/master/qaboard/sample_project/qaboard.yaml#L119"}),Object(o.b)("em",{parentName:"a"},"qaboard.yaml")),". To be honest, the exact naming conventions is complicated... ",Object(o.b)("strong",{parentName:"li"},"Export the data using the UI's export utilities, or ask QA-Board' simple API.")," ")),Object(o.b)("h2",{id:"can-i-export-the-data-or-use-a-third-party-viewer"},"Can I export the data or use a third-party viewer?"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Yes!")," All the outputs are saved as files, and QA-Board provides multiple ways to get them out."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"At the moment nothing prevents your from modifying/destroying files created from the CI."))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},'In the "Visualization" tab, an export utility')," lets you copy-to-clipboard a path with filtered/nicely-renamed results/files: "),Object(o.b)("img",{alt:"Export batch outputs",src:Object(i.a)("img/export-files-viz.jpg")})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Next to each output"),", there is always a button to copy-to-clipboard the path to the files it created."))),Object(o.b)("img",{alt:"Export batch outputs",src:Object(i.a)("img/export-files-output.jpg")}),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"From the Navigation bar"),", you can copy-to-clipboard the windows-ish path where each commit saves its results:"),Object(o.b)("img",{alt:"Export batch outputs",src:Object(i.a)("img/export-files-commit.jpg")})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You can also ",Object(o.b)("strong",{parentName:"p"},"programmatically access QA-Board's data")," by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"api"}),"querying its API"),"."))))}u.isMDXComponent=!0}}]);