(window.webpackJsonp=window.webpackJsonp||[]).push([[26,17],{114:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(111),l=t.n(c),o=t(109),s=t(105),i=!1;a.a=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),u=Object(o.useHistory)(),h=Object(s.a)().siteConfig,d=(void 0===h?{}:h).baseUrl,m=function(){a.current||(new window.DocSearch({searchData:window.searchData,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=d+t.url;document.createElement("a").href=n,u.push(n)}}),a.current=!0)},f=function(){i?m():Promise.all([fetch(d+"search-data.json").then((function(e){return e.json()})),Promise.all([t.e(50),t.e(53)]).then(t.bind(null,117)),t.e(37).then(t.t.bind(null,116,7))]).then((function(e){var a=e[0],t=e[1].default;i=!0,window.searchData=a,window.DocSearch=t,m()}))},p=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:f,onMouseOver:f,onFocus:p,onBlur:p,ref:c}))}},79:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=(t(111),t(113)),l=(t(108),t(105));t(106),t(45);a.default=function(){var e=Object(l.a)().siteConfig,a=void 0===e?{}:e;return r.a.createElement(c.a,{title:"Hello from "+a.title,description:"Description will go into a meta tag in <head />"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3 padding-vert--lg"},r.a.createElement("h1",null,"Need Help?"),r.a.createElement("p",null,"QA-Board is worked on full-time by Samsung's algorithm infrastructure teams. They're often around and available for questions. Contact ",r.a.createElement("a",{href:"mailto:arthur.flam@samsung.com"},"Arthur Flam")),r.a.createElement("h2",null,"Twitter"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://twitter.com/search?q=%23fluxjs"},"#qaboard hash tag on Twitter")," is used to keep up with the latest QA-Board news.")))))}}}]);