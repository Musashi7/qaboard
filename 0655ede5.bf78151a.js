(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),c=(n(0),n(183)),i=n(185),o={id:"references-and-milestones",title:"References & Milestones",sidebar_label:"References & Milestones"},s={id:"references-and-milestones",title:"References & Milestones",description:"when looking at results, it is important to compare them to a reference.  It could to a previous version, results from a benchmark",source:"@site/docs/references-and-milestones.md",permalink:"/qaboard/docs/references-and-milestones",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/references-and-milestones.md",sidebar_label:"References & Milestones",sidebar:"docs",previous:{title:"Tips for CLI usage",permalink:"/qaboard/docs/using-the-qa-cli"},next:{title:"Enabling tuning and extra runs from QA-Board",permalink:"/qaboard/docs/tuning-from-the-webapp"}},l=[{value:"Comparing versus a reference",id:"comparing-versus-a-reference",children:[]},{value:"Project References",id:"project-references",children:[]},{value:"Defining Milestones from QA-Board",id:"defining-milestones-from-qa-board",children:[]}],m={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"when looking at results, it is important to ",Object(c.b)("em",{parentName:"p"},"compare")," them to a reference.  It could to a previous version, results from a benchmark"),Object(c.b)("h2",{id:"comparing-versus-a-reference"},"Comparing versus a reference"),Object(c.b)("p",null,"In results pages, QA-Board always compares the commit you selected (labeled ",Object(c.b)("inlineCode",{parentName:"p"},"new"),") versus a reference (",Object(c.b)("inlineCode",{parentName:"p"},"ref"),"):"),Object(c.b)("img",{alt:"new-vs-reference",src:Object(i.a)("img/comparing-new-and-reference.png")}),Object(c.b)("p",null,"The reference is by default the latest commit from the project's reference branch:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="qaboard.yaml"',title:'"qaboard.yaml"'}),"project:\n    reference_branch: master\n")),Object(c.b)("p",null,"To change the selected ",Object(c.b)("inlineCode",{parentName:"p"},"new")," or ",Object(c.b)("inlineCode",{parentName:"p"},"ref")," commit, you can edit the commit ID field in the navbar. Hovering it gives you a menu with other options:"),Object(c.b)("img",{alt:"commit-select-menu.png",src:Object(i.a)("img/commit-select-menu.png")}),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Clicking on the branch name in the navbar will select the latest commit on the branch."))),Object(c.b)("h2",{id:"project-references"},"Project References"),Object(c.b)("p",null,"You can also list in ",Object(c.b)("em",{parentName:"p"},"qaboard.yaml")," other versions as milestones."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'{4-7} title=""qaboard.yaml"',"{4-7}":!0,title:'""qaboard.yaml"'}),"project:\n    reference_branch: master\n    milestones:\n    - release/v1.0.0      # tag\n    - feature/better-perf # branch\n    - e45123a3565         # commit id\n")),Object(c.b)("h2",{id:"defining-milestones-from-qa-board"},"Defining Milestones from QA-Board"),Object(c.b)("p",null,"Every user can save milestones with the \u201cstar\u201d icon in each commit navbar:"),Object(c.b)("img",{alt:"save-as-milestone",src:Object(i.a)("img/save-as-milestone.png")}),Object(c.b)("p",null,"If needed, you can give them a name and leave notes:"),Object(c.b)("img",{alt:"milestone-details",src:Object(i.a)("img/milestone-details.png")}),Object(c.b)("p",null,"You'll now be able to select them in the commit ID hover menu."),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Milestones can be shared with everybody - or kept private."))))}b.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=m(n),u=r,d=b["".concat(i,".").concat(u)]||b[u]||p[u]||c;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},184:function(e,t,n){"use strict";var r=n(0),a=n(49);t.a=function(){return Object(r.useContext)(a.a)}},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(186);var r=n(184);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},186:function(e,t,n){"use strict";var r=n(17),a=n(35),c=n(187),i="".startsWith;r(r.P+r.F*n(188)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})},187:function(e,t,n){var r=n(69),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},188:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);