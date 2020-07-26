(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return n?i.a.createElement(u,c(c({ref:t},s),{},{components:n})):i.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},105:function(e,t,n){"use strict";var a=n(0),i=n(18);t.a=function(){var e=Object(a.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},106:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(105),i=n(107);function r(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,c=void 0!==o&&o,l=r.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var b=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+b:b}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},107:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),r=(n(0),n(104)),o=n(106),c={id:"triggering-third-party-tools",title:"Triggering CI and third-party tools via the web application",sidebar_label:"Triggering External Tools"},l={unversionedId:"triggering-third-party-tools",id:"triggering-third-party-tools",isDocsHomePage:!1,title:"Triggering CI and third-party tools via the web application",description:"You often want to integrate various tools into your workflow, or show status badges. QA-Board lets you connect to those third-party tools on each commit's page and on commit index pages:",source:"@site/docs/triggering-external-ci-tools.md",permalink:"/qaboard/docs/triggering-third-party-tools",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/triggering-external-ci-tools.md",sidebar_label:"Triggering External Tools",sidebar:"docs",previous:{title:"LSF Integration",permalink:"/qaboard/docs/lsf-integration"},next:{title:"Debugging QA-Board' runs in an IDE",permalink:"/qaboard/docs/debugging-runs-with-an-IDE"}},s=[{value:"Adding badges and external links",id:"adding-badges-and-external-links",children:[]},{value:"Play GitlabCI manual jobs",id:"play-gitlabci-manual-jobs",children:[]},{value:"Trigger Jenkins builds",id:"trigger-jenkins-builds",children:[]},{value:"Using webhooks",id:"using-webhooks",children:[]},{value:"Using variables",id:"using-variables",children:[]},{value:"Styling the integrations",id:"styling-the-integrations",children:[]},{value:"Example: Jenkins integration via Webhooks",id:"example-jenkins-integration-via-webhooks",children:[]}],b={rightToc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You often want to integrate various tools into your workflow, or show ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://shields.io/index.html"}),"status badges"),". QA-Board lets you connect to those third-party tools on each commit's page and on commit index pages:"),Object(r.b)("img",{alt:"Allowing triggered build",src:Object(o.a)("img/ui-triggers.png")}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The screenshots are not up-to-date; the menu is now named ",Object(r.b)("strong",{parentName:"p"},'"Actions & Links"')))),Object(r.b)("h2",{id:"adding-badges-and-external-links"},"Adding badges and external links"),Object(r.b)("p",null,"Configure your project's ",Object(r.b)("em",{parentName:"p"},"qaboard.yaml")," like so to display direct links to docs, build artifacts, coverage reports, etc:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="qaboard.yaml"',title:'"qaboard.yaml"'}),"integrations:\n- text: Docs\n  href: http://my-project/docs\n\n- src: https://gitlab.com/my/project/badges/develop/coverage.svg\n  href: http://my-project/docs\n  alt: Coverage Report\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The menu item will be disabled if the link doesn't work.\nTo show a link but run the check on an other URL, you can provide ",Object(r.b)("inlineCode",{parentName:"p"},"url"),", ",Object(r.b)("inlineCode",{parentName:"p"},"method")," (POST..), etc. If you add ",Object(r.b)("inlineCode",{parentName:"p"},"allow_failed: true")," the link is always enabled."))),Object(r.b)("h2",{id:"play-gitlabci-manual-jobs"},"Play GitlabCI manual jobs"),Object(r.b)("p",null,"Configure your project with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="qaboard.yaml"',title:'"qaboard.yaml"'}),"integrations:\n  - text: Gitlab Job\n    gitlabCI:\n      job_name: build-linux\n")),Object(r.b)("img",{alt:"jenkins-and-gitlab-integrations",src:Object(o.a)("img/gitlab-jenkins.gif")}),Object(r.b)("h2",{id:"trigger-jenkins-builds"},"Trigger Jenkins builds"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="qaboard.yaml"',title:'"qaboard.yaml"'}),'integrations:\n  - text: Jenkins Triggered Build\n    jenkins:\n      build_url: $JENKINS_URL/job/CDE_Project_Linux\n      parameters:\n        commit: "${commit.id}"\n')),Object(r.b)("h2",{id:"using-webhooks"},"Using webhooks"),Object(r.b)("p",null,"You can use webhooks to trigger a variety of external tools:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'integrations:\n  - text: Jenkins Triggered Build\n    webhook:\n    - text: \'Windows\',\n      icon: build\n      webhook:\n      # all the options are send straight to the axios http library. For reference:\n      # https://github.com/axios/axios#axios-api\n      -  url: "https://my-application/${project}"\n         method: POST\n         data:\n           branch: "${commit.branch}"\n')),Object(r.b)("h2",{id:"using-variables"},"Using variables"),Object(r.b)("p",null,"You can use some special variables in your strings with some ",Object(r.b)("inlineCode",{parentName:"p"},"${VARIABLE}")," templating:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Commit"),": ",Object(r.b)("inlineCode",{parentName:"li"},"commit.id"),", ",Object(r.b)("inlineCode",{parentName:"li"},"commit.branch"),"... Also ",Object(r.b)("inlineCode",{parentName:"li"},"branch"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Project"),": ",Object(r.b)("inlineCode",{parentName:"li"},"project")," (full project name), ",Object(r.b)("inlineCode",{parentName:"li"},"subproject")," (project name relative to the root project), "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.gitlab.com/ee/user/project/integrations/webhooks.html#push-event"}),Object(r.b)("strong",{parentName:"a"},"Git")," repository data")," with ",Object(r.b)("inlineCode",{parentName:"li"},"git"),": eg ",Object(r.b)("inlineCode",{parentName:"li"},"git.default_branch"),"... "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Artifacts")," are saved under ",Object(r.b)("inlineCode",{parentName:"li"},"commit.commit_dir_url = commit.repo_commit_dir_url / subproject"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"user")," is the one defined in the tuning tab or the project's default. ")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you use use ",Object(r.b)("inlineCode",{parentName:"p"},"${branch}")," in any of the fields, the integration will only appear on project/branch pages. You can add a dummy ",Object(r.b)("inlineCode",{parentName:"p"},"only: {branch}"),"."))),Object(r.b)("h2",{id:"styling-the-integrations"},"Styling the integrations"),Object(r.b)("p",null,"Optionnaly you can style each menu item:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"integrations:\n  - text: Styled Integration\n    # Full list of icons: https://blueprintjs.com/docs/#icons\n    icon: build\n    # Full list of options: https://blueprintjs.com/docs/#core/components/menu\n    label: docs\n    disabled: false\n    intent: danger\n")),Object(r.b)("p",null,"You can add dividers to group integration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"integrations:\n  # --snip--\n  - divider: true\n    title: Section Title\n  # --snip--\n")),Object(r.b)("h2",{id:"example-jenkins-integration-via-webhooks"},"Example: Jenkins integration via Webhooks"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The out-of-the-box jenkins integration above is much better! This is just an example with webhooks!"))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"If you don't have one, ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/45466090/how-to-get-the-api-token-for-jenkins"}),"get an API token")," for your user")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$JENKINS_URL/me/descriptorByName/jenkins.security.ApiTokenProperty/generateNewToken\n# Enter "OK to retry using POST" and get the "tokenValue"\n')),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Since you'll commit those credentials with the code, make sure you don't have too many privileges... At some point QA-Board will support ",Object(r.b)("em",{parentName:"p"},"secrets"),". "))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Get a crumb to handle ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://support.cloudbees.com/hc/en-us/articles/219257077-CSRF-Protection-Explained"}),"Jenkins' CSRF"),", eg at ",Object(r.b)("em",{parentName:"p"},"$JENKINS_URL/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,%22:%22,//crumb)"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to your Jenkins project configuration page at ",Object(r.b)("em",{parentName:"p"},"$JENKINS_URL/$PROJECT/configure")," and allow triggered builds:"),Object(r.b)("img",{alt:"Allowing triggered build",src:Object(o.a)("img/configure-jenkins-build-triggers.png")})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Configure your project with:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="qaboard.yaml"',title:'"qaboard.yaml"'}),'integrations:\n  - name: Jenkins Triggered Build\n    webhook:\n      method: post\n      url: $JENKINS_URL/job/$PROJECT/buildWithParameters\n      headers:\n        Jenkins-Crumb: $JenkinsCrumb\n      params:\n        token: $TOKEN\n      auth: {\n        username: $username\n        password: api-token    # keep as-is\n      data:\n        commit: "${commit.id}"\n        cause: Triggered on the QA web app\n')),Object(r.b)("p",null,"Alternatively, you can also send users to the build page: "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"integrations:\n  - text: Build\n    label: With Parameters\n    icon: build\n    href: $JENKINS_URL/view/HW_ALG/job/HW_ALG-delivery/build?delay=0sec\n    # Jenkins behaves wtf and returns 405 errors...\n    # https://issues.jenkins-ci.org/browse/JENKINS-3121\n    ignore_failure: true\n")))}d.isMDXComponent=!0}}]);