(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{118:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,O=p["".concat(o,".").concat(m)]||p[m]||d[m]||c;return a?r.a.createElement(O,b(b({ref:t},l),{},{components:a})):r.a.createElement(O,b({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),c=(a(0),a(118)),o={id:"deploy",title:"Starting a QA-Board server",sidebar_label:"Server Bringup"},b={unversionedId:"deploy",id:"deploy",isDocsHomePage:!1,title:"Starting a QA-Board server",description:"QA-Board's run-wrapper, qa, will sync with a central server that tracks and displays results.",source:"@site/docs/start-server.md",permalink:"/qaboard/docs/deploy",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/start-server.md",sidebar_label:"Server Bringup",sidebar:"docs",previous:{title:"What is QA-Board?",permalink:"/qaboard/docs/introduction"},next:{title:"Installing QA-Board's client",permalink:"/qaboard/docs/installation"}},i=[{value:"Create a directory to store results",id:"create-a-directory-to-store-results",children:[]},{value:"Starting the server",id:"starting-the-server",children:[]},{value:"(Optional) Environment variables",id:"optional-environment-variables",children:[]},{value:"(Optional) For &quot;production&quot;",id:"optional-for-production",children:[{value:"Backups",id:"backups",children:[]},{value:"Using SSL / hosting behind a reverse proxy",id:"using-ssl--hosting-behind-a-reverse-proxy",children:[]}]},{value:"(Optional) Cleanup",id:"optional-cleanup",children:[]}],l={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"QA-Board's run-wrapper, ",Object(c.b)("inlineCode",{parentName:"p"},"qa"),", will sync with a central server that tracks and displays results."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Need a hosted version?")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"We're considering offering a hosted solution to help you get started. If you are interested, contact the ",Object(c.b)("a",{href:"mailto:arthur.flam@gmail.com"},"maintainers"),"."),Object(c.b)("p",{parentName:"div"},"Until then, please ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Samsung/qaboard/issues"}),"fill issues"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://spectrum.chat/qaboard"}),"chat")," or ",Object(c.b)("a",{href:"mailto:arthur.flam@samsung.com"},"send an email")," to maintainers if you run into issues starting a server. We're responsive."))),Object(c.b)("h2",{id:"create-a-directory-to-store-results"},"Create a directory to store results"),Object(c.b)("p",null,"QA-Board expects that all clients can access a shared storage to save and read results."),Object(c.b)("p",null,"To get started quickly on a single server, create a ",Object(c.b)("em",{parentName:"p"},"local")," folder. Worry about sharing it later: "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p /mnt/qabaord\nchmod -R 777 /mnt/qabaord\n")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If you want to use a different folder, replace ",Object(c.b)("em",{parentName:"p"},"/mnt/qaboard")," with your path in ",Object(c.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," and ",Object(c.b)("em",{parentName:"p"},"services/nginx/conf.d/qaboard.conf"),"."))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Shared Storage?")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Later, read how to setup ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nfs-mount-on-ubuntu-18-04"}),Object(c.b)("strong",{parentName:"a"},"NFS"))," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-a-samba-share-for-a-small-organization-on-ubuntu-16-04"}),Object(c.b)("strong",{parentName:"a"},"Samba")),". If you need fine-tuning read about ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/compose/compose-file/#volume-configuration-reference"}),"options for NFS volumes")," in ",Object(c.b)("em",{parentName:"p"},"docker-compose.yml"),"."))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Working in the cloud?")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Use file-base storage like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/en/efs/"}),"AWS EFS")," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/filestore"}),"GCP Filestore"),"."),Object(c.b)("p",{parentName:"div"},"We plan on supporting blob-stores like AWS ",Object(c.b)("strong",{parentName:"p"},"S3"),". ",Object(c.b)("a",{href:"mailto:arthur.flam@gmail.com"},"Contact us")," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/samsung/qaboard/issues"}),"create an issue")," if it would help."))),Object(c.b)("h2",{id:"starting-the-server"},"Starting the server"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"You need Linux, ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/engine/install/"}),Object(c.b)("inlineCode",{parentName:"a"},"docker")),", ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/"}),Object(c.b)("inlineCode",{parentName:"a"},"docker-compose"))," and ",Object(c.b)("inlineCode",{parentName:"li"},"git"),"."),Object(c.b)("li",{parentName:"ol"},"To start the QA-Board server:")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/Samsung/qaboard.git\ncd qaboard\n\ndocker-compose pull\ndocker-compose up -d\n#=> the application is live at localhost:5151\n\n# if you can't access the application, check the port is not blocked by a firewall\n# cloud services often require you to add the ports you need to an allow-list.\n")),Object(c.b)("p",null,"To have the server restart automatically:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose -f docker-compose.yml -f production.yml up -d\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Want to install from a Kubernetes helm chart, CloudFormation or Terraform plans? ",Object(c.b)("a",{href:"mailto:arthur.flam@gmail.com"},"Get in touch"),"."))),Object(c.b)("h2",{id:"optional-environment-variables"},"(Optional) Environment variables"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"To configure your installation, you can either edit ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/compose/environment-variables/#the-env-file"}),"an ",Object(c.b)("inlineCode",{parentName:"a"},".env")," file")," or ",Object(c.b)("inlineCode",{parentName:"p"},"services.backend.environment")," in one of the ",Object(c.b)("inlineCode",{parentName:"p"},"docker-compose")," files (",Object(c.b)("em",{parentName:"p"},"docker-compose.yml"),", ",Object(c.b)("em",{parentName:"p"},"development.yml"),", ",Object(c.b)("em",{parentName:"p"},"production.yml"),"...).")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"ENV Variable"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Usage"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"GITLAB_ACCESS_TOKEN")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"none")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional for some extra features. Get it with a ",Object(c.b)("inlineCode",{parentName:"td"},"read_repository")," scope at https://$gitlab-server/profile/personal_access_tokens")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"GITLAB_HOST")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"none")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"e.g. ",Object(c.b)("em",{parentName:"td"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://gitlab.com"}),"https://gitlab.com"))," or ",Object(c.b)("em",{parentName:"td"},"http://my-gitlab-srv/"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"QABOARD_PORT_HTTP")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5151"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Port mapped to the app on the host")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"QABOARD_DB_HOST")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"db"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Connect the backend to a non-default database host (e.g. instead of dev'ing with prod dumps, connect directly to it)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"QABOARD_DB_PORT")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5432"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Connect to a non-default database port")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"JENKINS_USER_NAME")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"none")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Used to ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/triggering-third-party-tool"}),"trigger jenkins jobs")," (",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/triggering-third-party-tools#example-jenkins-integration-via-webhooks"}),"how-to-get-it?"),")")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"JENKINS_USER_TOKEN")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"none")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"JENKINS_USER_CRUMB")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"none")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"CANTALOUPE_MEM_START")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1g"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Starting memory for the image server")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"CANTALOUPE_MEM_MAX")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2g"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Max memory for the image server")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"UWSGI_PROCESSS")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default: 1g")))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},'In the future we plan to introduce a proper "secret" store, per user and per project.'))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Consult the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"backend-admin/troubleshooting"}),"Troubleshooting")," page for examples that show how to get logs from the various services composing QA-Board."),Object(c.b)("p",{parentName:"blockquote"},"For development, consult the READMEs for the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Samsung/qaboard/tree/master/backend"}),"backend")," and the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Samsung/qaboard/tree/master/webapp"}),"frontend"),".")),Object(c.b)("h2",{id:"optional-for-production"},'(Optional) For "production"'),Object(c.b)("h3",{id:"backups"},"Backups"),Object(c.b)("p",null,"In ",Object(c.b)("em",{parentName:"p"},"production.yml")," you can uncomment the ",Object(c.b)("inlineCode",{parentName:"p"},"cron-backup-db")," service to enable daily backups, and replace ",Object(c.b)("inlineCode",{parentName:"p"},"/WHERE/TO/SAVE/BACKUPS")," with a (backup'ed!)location on the host."),Object(c.b)("h3",{id:"using-ssl--hosting-behind-a-reverse-proxy"},"Using SSL / hosting behind a reverse proxy"),Object(c.b)("p",null,"What we do is directly change the ",Object(c.b)("inlineCode",{parentName:"p"},"nginx")," confix:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-nginx",metastring:'title="services/nginx/conf.d/qaboard.conf"',title:'"services/nginx/conf.d/qaboard.conf"'}),"server {\n  # ...\n  listen 443 ssl;\n  ssl_certificate_key /ssl/cert.key;\n  ssl_certificate /ssl/cert.pem;\n  # ...\n}\n")),Object(c.b)("p",null,"And mount keys with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'}),'proxy:\n  volumes:\n  - "somewhere/cert.key:/ssl/cert.key"\n  - "somewhere/cert.pem:/ssl/cert.pem"\n')),Object(c.b)("p",null,"If you want to use your own reverse proxy, with ",Object(c.b)("inlineCode",{parentName:"p"},"nginx")," for instance you can set ",Object(c.b)("inlineCode",{parentName:"p"},"QABOARD_PORT_HTTP=8080")," and: "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-nginx"}),"server {\n  listen 80;\n  server_name default_server;\n  location / {\n    proxy_pass http://localhost:8080/;\n  }\n}\n")),Object(c.b)("h2",{id:"optional-cleanup"},"(Optional) Cleanup"),Object(c.b)("p",null,"We run those cron jobs:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cron"}),"# Weekly cleanup of old results\n# https://samsung.github.io/qaboard/docs/deleting-old-data\n59 1 1 * * cd qaboard && docker-compose exec backend qaboard_clean\n\n# Weekly removal of old docker images, helps to avoid filling the disk on the host\n59 1 2 * * docker image prune --force\n\n# Restart the image server, somehow after a while they need it (need research...)\n0 4 * * * cd qaboard && docker-compose -f docker-compose.yml -f production.yml stop cantaloupe && docker-compose -f docker-compose.yml -f production.yml rm -v cantaloupe && docker-compose -f docker-compose.yml -f production.yml up -d cantaloupe\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"It would be cleaner to run those crontabs within ",Object(c.b)("inlineCode",{parentName:"p"},"docker-compose"),"... (pull requests welcome \ud83d\ude04)"))))}s.isMDXComponent=!0}}]);