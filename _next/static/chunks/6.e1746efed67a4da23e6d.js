(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"7ljp":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),s=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var m=s.a.createContext({}),l=function(e){var a=s.a.useContext(m),t=a;return e&&(t="function"===typeof e?e(a):o(o({},a),e)),t},b={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},N=s.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),N=l(t),i=n,d=N["".concat(c,".").concat(i)]||N[i]||b[i]||r;return t?s.a.createElement(d,o(o({ref:a},m),{},{components:t})):s.a.createElement(d,o({ref:a},m))}));function i(e,a){var t=arguments,n=a&&a.mdxType;if("string"===typeof e||n){var r=t.length,c=new Array(r);c[0]=N;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"===typeof e?e:n,c[1]=o;for(var m=2;m<r;m++)c[m]=t[m];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,t)}N.displayName="MDXCreateElement"},qsOL:function(e,a,t){"use strict";t.r(a),t.d(a,"metadata",(function(){return p})),t.d(a,"default",(function(){return l}));var n=t("rePB"),s=t("Ff2n"),r=(t("q1tI"),t("7ljp"));function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var p={title:"Making My Interactive Memoji",description:"Interactive Memojis on the Web",emoji:"\ud83d\udc66\ud83c\udffb",date:"2020-07-07",category:["dev"]},m={metadata:p};function l(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(r.a)("wrapper",o(o(o({},m),t),{},{components:a,mdxType:"MDXLayout"}),Object(r.a)("p",null,"take the video in messages - send to yourself\ncopy video from messages on mac"),Object(r.a)("p",null,"cut to length\nFCP - export as image sequence - imovie doesnt work"),Object(r.a)("pre",o({},{className:"language-bash",metastring:"ZSH"}),Object(r.a)("code",o({parentName:"pre"},{className:"language-bash",metastring:"ZSH"}),"ffmpeg",Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -framerate")," ",Object(r.a)("span",o({parentName:"code"},{className:"token number"}),"60"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -i")," /Users/reuben/Developer/next/reu-test/public/fcp/me-cut/frame-%06d.tiff",Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -c:v")," libvpx-vp9",Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -pix_fmt")," yuva420p",Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -speed")," ",Object(r.a)("span",o({parentName:"code"},{className:"token number"}),"0"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -crf")," ",Object(r.a)("span",o({parentName:"code"},{className:"token number"}),"16"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -an")," /Users/reuben/Developer/next/reu-test/public/me-cut.webm\nffmpeg",Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -framerate")," ",Object(r.a)("span",o({parentName:"code"},{className:"token number"}),"60"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -i")," /Users/reuben/Developer/next/reu-test/public/fcp/me-cut/frame-%06d.tiff",Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -c:v")," libvpx-vp9",Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -pix_fmt")," yuva420p",Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -speed")," ",Object(r.a)("span",o({parentName:"code"},{className:"token number"}),"0"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -lossless")," ",Object(r.a)("span",o({parentName:"code"},{className:"token number"}),"1"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -an")," /Users/reuben/Developer/next/reu-test/public/me-cut.webm\n")),Object(r.a)("p",null,"chrome too laggy lowered FPS lowered CRF, no difference - maybe as codecs' efficiency relies on the compression being done in a forwards direction frame after frame only (there was more lag moving backwards)\nsafari fine - h265 better????"),Object(r.a)("p",null,"tried vp8 - no difference\n",Object(r.a)("a",o({parentName:"p"},{href:"https://stackoverflow.com/questions/31196113/draw-video-frame-by-frame-on-html5-canvas-and-control-with-slider"}),"https://stackoverflow.com/questions/31196113/draw-video-frame-by-frame-on-html5-canvas-and-control-with-slider")),Object(r.a)("p",null,"better to use image sequence tiff didnt work png better"),Object(r.a)("p",null,"wrote swift tool uPVC"),Object(r.a)("p",null,Object(r.a)("a",o({parentName:"p"},{href:"https://stackoverflow.com/a/39573702"}),"https://stackoverflow.com/a/39573702")),Object(r.a)("p",null,"65.4MB in\nreduce number of frames by 3 - nodejs script (redid swift tho)\nimageoptim - reduce by..... 47% not helped by fact png doesnt enocde high fidelity well - need alpha channel tho.....led to webp"),Object(r.a)("p",null,"didnt go for avif as support is shite\nwebp - reduce by..... lossless=4.6MB; near-lossless60=3.6MB near-lossless0=3.3MB q100=2.2MB q90=1.3MB q80=868KB q50=868KB ALSO\n",Object(r.a)("a",o({parentName:"p"},{href:"https://developers.google.com/speed/webp/docs/cwebp"}),"https://developers.google.com/speed/webp/docs/cwebp"),"\n1.3272171254% of input = 98.6727828746% reduction"),Object(r.a)("p",null,"less when gzipped????"),Object(r.a)("pre",o({},{className:"language-bash",metastring:"ZSH"}),Object(r.a)("code",o({parentName:"pre"},{className:"language-bash",metastring:"ZSH"}),Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"for")," ",Object(r.a)("span",o({parentName:"code"},{className:"token for-or-select variable"}),"file")," ",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"in")," *.png",Object(r.a)("span",o({parentName:"code"},{className:"token punctuation"}),";")," ",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"do")," cwebp",Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -lossless"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -mt")," ",Object(r.a)("span",o({parentName:"code"},{className:"token string"}),"'./",Object(r.a)("span",o({parentName:"span"},{className:"token variable"}),"$file"),"'"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -o")," ",Object(r.a)("span",o({parentName:"code"},{className:"token string"}),"'./",Object(r.a)("span",o({parentName:"span"},{className:"token variable"}),"${file",Object(r.a)("span",o({parentName:"span"},{className:"token operator"}),"/"),Object(r.a)("span",o({parentName:"span"},{className:"token operator"}),"/"),"\\.png",Object(r.a)("span",o({parentName:"span"},{className:"token operator"}),"/"),".webp}"),"'"),Object(r.a)("span",o({parentName:"code"},{className:"token punctuation"}),";")," ",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"done"),"\n",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"for")," ",Object(r.a)("span",o({parentName:"code"},{className:"token for-or-select variable"}),"file")," ",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"in")," *.png",Object(r.a)("span",o({parentName:"code"},{className:"token punctuation"}),";")," ",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"do")," cwebp",Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -near_lossless")," ",Object(r.a)("span",o({parentName:"code"},{className:"token number"}),"60"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -mt")," ",Object(r.a)("span",o({parentName:"code"},{className:"token string"}),"'./",Object(r.a)("span",o({parentName:"span"},{className:"token variable"}),"$file"),"'"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -o")," ",Object(r.a)("span",o({parentName:"code"},{className:"token string"}),"'./",Object(r.a)("span",o({parentName:"span"},{className:"token variable"}),"${file",Object(r.a)("span",o({parentName:"span"},{className:"token operator"}),"/"),Object(r.a)("span",o({parentName:"span"},{className:"token operator"}),"/"),"\\.png",Object(r.a)("span",o({parentName:"span"},{className:"token operator"}),"/"),".webp}"),"'"),Object(r.a)("span",o({parentName:"code"},{className:"token punctuation"}),";")," ",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"done"),"\n",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"for")," ",Object(r.a)("span",o({parentName:"code"},{className:"token for-or-select variable"}),"file")," ",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"in")," *.png",Object(r.a)("span",o({parentName:"code"},{className:"token punctuation"}),";")," ",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"do")," cwebp",Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -q")," ",Object(r.a)("span",o({parentName:"code"},{className:"token number"}),"80"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -mt")," ",Object(r.a)("span",o({parentName:"code"},{className:"token string"}),"'./",Object(r.a)("span",o({parentName:"span"},{className:"token variable"}),"$file"),"'"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -o")," ",Object(r.a)("span",o({parentName:"code"},{className:"token string"}),"'./",Object(r.a)("span",o({parentName:"span"},{className:"token variable"}),"${file",Object(r.a)("span",o({parentName:"span"},{className:"token operator"}),"/"),Object(r.a)("span",o({parentName:"span"},{className:"token operator"}),"/"),"\\.png",Object(r.a)("span",o({parentName:"span"},{className:"token operator"}),"/"),".webp}"),"'"),Object(r.a)("span",o({parentName:"code"},{className:"token punctuation"}),";")," ",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"done"),"\n",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"for")," ",Object(r.a)("span",o({parentName:"code"},{className:"token for-or-select variable"}),"file")," ",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"in")," *.png",Object(r.a)("span",o({parentName:"code"},{className:"token punctuation"}),";")," ",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"do")," cwebp",Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -q")," ",Object(r.a)("span",o({parentName:"code"},{className:"token number"}),"80"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -mt"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -crop")," ",Object(r.a)("span",o({parentName:"code"},{className:"token number"}),"100")," ",Object(r.a)("span",o({parentName:"code"},{className:"token number"}),"26")," ",Object(r.a)("span",o({parentName:"code"},{className:"token number"}),"459")," ",Object(r.a)("span",o({parentName:"code"},{className:"token number"}),"350")," ",Object(r.a)("span",o({parentName:"code"},{className:"token string"}),"'./",Object(r.a)("span",o({parentName:"span"},{className:"token variable"}),"$file"),"'"),Object(r.a)("span",o({parentName:"code"},{className:"token argument"})," -o")," ",Object(r.a)("span",o({parentName:"code"},{className:"token string"}),"'./",Object(r.a)("span",o({parentName:"span"},{className:"token variable"}),"${file",Object(r.a)("span",o({parentName:"span"},{className:"token operator"}),"/"),Object(r.a)("span",o({parentName:"span"},{className:"token operator"}),"/"),"\\.png",Object(r.a)("span",o({parentName:"span"},{className:"token operator"}),"/"),".webp}"),"'"),Object(r.a)("span",o({parentName:"code"},{className:"token punctuation"}),";")," ",Object(r.a)("span",o({parentName:"code"},{className:"token keyword"}),"done"),"\n")),Object(r.a)("p",null,"webp is based off VP8 so basically gone full circle to the (very close) to VP9 of the first attempt"),Object(r.a)("p",null,"animated webp exists but isn't obvious way to seek through - probably has same encoding issues as VP8 itself"),Object(r.a)("p",null,"talk about react components\nloading / ready\nanimation"),Object(r.a)("p",null,"wanted to change on click but impossible to sync frames - AE and motion track sunglasses on etc..."))}l.isMDXComponent=!0}}]);