(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),l=p(n),d=a,m=l["".concat(i,".").concat(d)]||l[d]||u[d]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},105:function(e,t,n){"use strict";var a=n(0),r=n(18);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},106:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(105),r=n(107);function o(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,c=void 0!==i&&i,b=o.absolute,s=void 0!==b&&b;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var p=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+p:p}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},107:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(104)),i=n(106),c={id:"running-your-code",sidebar_label:"Running your code",title:"Running your code"},b={unversionedId:"running-your-code",id:"running-your-code",isDocsHomePage:!1,title:"Running your code",description:"QA-Board works as a CLI wrapper for your code. As a default to get started, it runs commands you provide as extra arguments:",source:"@site/docs/running-your-code.md",permalink:"/qaboard/docs/running-your-code",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/running-your-code.md",sidebar_label:"Running your code",sidebar:"docs",previous:{title:"Input files",permalink:"/qaboard/docs/inputs"},next:{title:"Creating and viewing outputs files",permalink:"/qaboard/docs/creating-and-viewing-outputs-files"}},s=[{value:"Wrapping your code",id:"wrapping-your-code",children:[]},{value:"What should your wrapper do?",id:"what-should-your-wrapper-do",children:[{value:"Use-case #1: Running Python code",id:"use-case-1-running-python-code",children:[]},{value:"Use-case #2: Running an executable",id:"use-case-2-running-an-executable",children:[]},{value:"Use-case #3: Importing existing results (Advanced)",id:"use-case-3-importing-existing-results-advanced",children:[]}]},{value:"Useful <code>context</code> properties (Reference)",id:"useful-context-properties-reference",children:[]},{value:"Accessing the QA-Board configuration from the entrypoint (Reference)",id:"accessing-the-qa-board-configuration-from-the-entrypoint-reference",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"QA-Board works as a CLI wrapper for your code. As a default to get started, it runs commands you provide as extra arguments: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"qa run --input path/to/your/input.file 'echo \"{absolute_input_path} => {output_directory}\"'\n#=> runs this echo command with useful info\n\nqa --share run --input path/to/your/input.file 'echo \"{absolute_input_path} => {output_directory}\"'\n#=> View logs in the web interface! It should print the URL\n")),Object(o.b)("img",{alt:"First results",src:Object(i.a)("img/first-outputs.png")}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Results are saved under ",Object(o.b)("em",{parentName:"p"},"output/"),". ",Object(o.b)("inlineCode",{parentName:"p"},"--share"),"'d results are saved in ",Object(o.b)("em",{parentName:"p"},"/mnt/qaboard"),". To change it, edit ",Object(o.b)("inlineCode",{parentName:"p"},"ci_root")," in ",Object(o.b)("inlineCode",{parentName:"p"},"qaboard.yml"),"."))),Object(o.b)("h2",{id:"wrapping-your-code"},"Wrapping your code"),Object(o.b)("p",null,"How does it work? When you ",Object(o.b)("inlineCode",{parentName:"p"},"pip install")," QA-Board with ",Object(o.b)("inlineCode",{parentName:"p"},"pip"),", you get the ",Object(o.b)("inlineCode",{parentName:"p"},"qa")," executable. ",Object(o.b)("inlineCode",{parentName:"p"},"qa")," opens ",Object(o.b)("em",{parentName:"p"},"qaboard.yaml")," and imports the python file specified by ",Object(o.b)("inlineCode",{parentName:"p"},"project.entrypoint"),". Then it runs your entrypoint's ",Object(o.b)("inlineCode",{parentName:"p"},"run()")," function with information about the current run: input, configuration, where outputs should be saved etc."),Object(o.b)("p",null,"Take a look at the default ",Object(o.b)("inlineCode",{parentName:"p"},"run()")," in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Samsung/qaboard/blob/master/qaboard/sample_project/qa/main.py"}),Object(o.b)("em",{parentName:"a"},"qa/main.py")),". You should change it to run your code. In most cases that means finding and executing an executable file, or importing+running python code..."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Many users want to separate algorithm runs and postprocessing. To make this flow easier, you can optionnaly implement ",Object(o.b)("inlineCode",{parentName:"p"},"postprocess()"),". Then you will get ",Object(o.b)("inlineCode",{parentName:"p"},"qa run")," and ",Object(o.b)("inlineCode",{parentName:"p"},"qa postprocess"),"."))),Object(o.b)("h2",{id:"what-should-your-wrapper-do"},"What should your wrapper do?"),Object(o.b)("p",null,"The main assumption is that your code"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Write ",Object(o.b)("em",{parentName:"li"},'"qualitative"')," files in the ",Object(o.b)("inlineCode",{parentName:"li"},"output_directory")),Object(o.b)("li",{parentName:"ul"},"Returns ",Object(o.b)("em",{parentName:"li"},'"quantitative"')," metrics/KPIs.")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"run()")," function receives as argument a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#reference-useful-context-properties"}),Object(o.b)("inlineCode",{parentName:"a"},"context")," object whose properties")," tell us ",Object(o.b)("strong",{parentName:"p"},"how")," you should run ",Object(o.b)("strong",{parentName:"p"},"what"),", and ",Object(o.b)("strong",{parentName:"p"},"where")," outputs are expected to be saved."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Below are the most common ways users wrap their code. Identify what works for you and continue to the next page!"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"use-case-1-running-python-code"},"Use-case #1: Running Python code"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="qa/main.py"',title:'"qa/main.py"'}),"from pathlib import  Path\n\ndef run(context):\n  # Assuming your code is at *src/my_code.py*...\n  sys.path.append(str(Path(__file__).parent.parent))\n  from src.my_code import MyRun\n\n  # People commonly wrap their code within Classes/functions...\n  metrics = MyRun(\n      input=context.obj['absolute_input_path'],\n      output=context.obj['output_directory'],\n      # The next page will show you to supply configurations\n      params={\"hard-coded\": \"values\"}, \n  ).run()\n  metrics['is_failed'] = False # True if your code raises an exception\n  return metrics\n")),Object(o.b)("h3",{id:"use-case-2-running-an-executable"},"Use-case #2: Running an executable"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"QA-Board")," assumes you already built your code.     "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="qa/main.py"',title:'"qa/main.py"'}),'import os\nimport sys\nfrom pathlib import Path\n\ndef binary_path():\n    """Find and return the path of the executable. It\'s often different on Windows/Linux..."""\n    if os.environ.get(\'PROJECT_BINARY\'): # Overwrite location via ENV variables\n        return Path(os.environ[\'PROJECT_BINARY\'])\n    if sys.platform == \'win32\':\n        return Path("build/x64/my_binary.exe")\n    else:  # Easy support for build types: Release/Debug/Coverage/ASAN...\n        return Path(f"build/{os.environ.get(\'PROJECT_BUILD_TYPE\', \'Release\')}/my_binary")\n\ndef run():\n    command = [\n        f\'{binary_path()}\',\n        "--input", str(context.obj["absolute_input_path"]),\n        "--output", str(context.obj["output_directory"]),\n        context.obj["output_directory"]\n    ]\n    process = subprocess.run(\n        command,\n        check=True,  # will raise an exception on exit code != 0\n    )\n    return {"is_failed": False}\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Instead of returning metrics, if you don't want to touch too much python, you can simply write them as JSON in ",Object(o.b)("em",{parentName:"p"},"$output_directory/metrics.json"),"."))),Object(o.b)("h3",{id:"use-case-3-importing-existing-results-advanced"},"Use-case #3: Importing existing results (Advanced)"),Object(o.b)("p",null,"It's is sometimes needed to easily compare results versus reference implementations or benchmarks. Let's say the benchmark results can be found alongside images in your database like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-log"}),"database\n\u251c\u2500\u2500 images\n\u2502  \u251c\u2500\u2500 A.jpg\n\u2502  \u2514\u2500\u2500 B.jpg\n\u2514\u2500\u2500 standard-benchmark\n   \u2514\u2500\u2500 images\n      \u251c\u2500\u2500 A\n      \u2502  \u2514\u2500\u2500 output.jpg\n      \u2514\u2500\u2500 B\n         \u2514\u2500\u2500 output.jpg\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="qa/main.py"',title:'"qa/main.py"'}),"def run(context):\n    if context.obj[\"input_type\"] == 'benchmark':\n        import shutil\n        # Next page you will learn how you can provided configurations/parameters to the run.\n        benchmark = context.obj['configurations'][0]['benchmark']\n        # Find the benchmark results...\n        benchmark_outputs = context.obj['database'] / benchmark context.obj['input_path'].parent / context.obj['input_path'].stem\n        # To copy the result image only\n        os.copy(str(benchmark_outputs / 'output.jpg'), str(context.obj['output_directory'])\n        # To copy the whole directory\n        shutil.copytree(\n            str(benchmark_outputs),\n            str(context.obj['output_directory'],\n            dirs_exist_ok=True, # python>=3.8, otherwise just call `cp -R` to do it yourself...\n        )\n    # Otherwise run your code, that create *output.jpg*\n")),Object(o.b)("p",null,"To actually import the results, create a batch (more info later) for the benchmark. ",Object(o.b)("inlineCode",{parentName:"p"},"qa batch import-standard-benchmark")," with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="qa/batches.yaml"',title:'"qa/batches.yaml"'}),"import-standard-benchmark:\n  type: benchmark\n  configurations:\n  - benchmark: standard-benchmark\n  inputs:\n  - images\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Now you can make comparaisons!")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'From the QA-Board web application, you can set the benchark as a "milestone", to compare your results to it in a click.'))),Object(o.b)("h2",{id:"useful-context-properties-reference"},"Useful ",Object(o.b)("inlineCode",{parentName:"h2"},"context")," properties (Reference)"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Yes, the API is ugly, it will change before the open-source release and we're open to suggestions!"))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"What")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"absolute_input_path")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"$database / $input_path")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"database")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"path to the database")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"input_path")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"path of the test, relative to the database")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"input_type")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"input type")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"input_metadata")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"if relevant, input metadata (more info later)")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"How")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"configurations")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"array of strings or dicts. ",Object(o.b)("em",{parentName:"td"},"You")," decide how to interpret  it!")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"extra_parameters")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When doing tuning, a dict of ",Object(o.b)("inlineCode",{parentName:"td"},"key:values")," that should override specific algo parameters.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"platform")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Usually the host (linux/windows), but can be overwritten as part of your custom logic")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"forwarded_args")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Extra CLI flags provided to qa. Usually used for debugging.")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Where")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"output_directory")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"where your code should save its outputs")))),Object(o.b)("h2",{id:"accessing-the-qa-board-configuration-from-the-entrypoint-reference"},"Accessing the QA-Board configuration from the entrypoint (Reference)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from qaboard.config import config\nconfig['project']['name']\n#\n# etc\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Work in Progress")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A full reference for ",Object(o.b)("inlineCode",{parentName:"p"},"from qaboard.config import ...")," will arrive in the docs!"))))}l.isMDXComponent=!0}}]);