(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"+5HZ":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("0451"),r=function(){function e(e){this.target=e,this.$$broadcastWidth=this.$$broadcastHeight=0}return Object.defineProperty(e.prototype,"broadcastWidth",{get:function(){return this.$$broadcastWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"broadcastHeight",{get:function(){return this.$$broadcastHeight},enumerable:!0,configurable:!0}),e.prototype.isActive=function(){var e=n.ContentRect(this.target);return!!e&&(e.width!==this.broadcastWidth||e.height!==this.broadcastHeight)},e}();t.ResizeObservation=r},"0451":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ContentRect=function(e){if("getBBox"in e){var t=e.getBBox();return Object.freeze({height:t.height,left:0,top:0,width:t.width})}var a=window.getComputedStyle(e);return Object.freeze({height:parseFloat(a.height||"0"),left:parseFloat(a.paddingLeft||"0"),top:parseFloat(a.paddingTop||"0"),width:parseFloat(a.width||"0")})}},"3Qw3":function(e,t,a){e.exports={slider:"styles_slider__1v1SX",handle:"styles_handle__VDtOI"}},"736r":function(e,t,a){e.exports={app:"_app_app__7eKMU",content:"_app_content__3Z-Um",key:"_app_key__1we9z"}},IcvB:function(e,t,a){e.exports={colourIndicator:"styles_colourIndicator__1jzpT"}},Yzjp:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("+5HZ"),r=a("xZdO"),o=[],s=function(){function e(e){this.$$observationTargets=[],this.$$activeTargets=[],this.$$skippedTargets=[];var t=function(e){if("undefined"===typeof e)return"Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";if("function"!==typeof e)return"Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."}(e);if(t)throw TypeError(t);this.$$callback=e,o.push(this)}return e.prototype.observe=function(e){var t=i("observe",e);if(t)throw TypeError(t);c(this.$$observationTargets,e)>0||(this.$$observationTargets.push(new n.ResizeObservation(e)),f())},e.prototype.unobserve=function(e){var t=i("unobserve",e);if(t)throw TypeError(t);var a=c(this.$$observationTargets,e);a<0||(this.$$observationTargets.splice(a,1),m())},e.prototype.disconnect=function(){this.$$observationTargets=[],this.$$activeTargets=[]},e}();function i(e,t){return"undefined"===typeof t?"Failed to execute '"+e+"' on 'ResizeObserver': 1 argument required, but only 0 present.":t instanceof window.Element?void 0:"Failed to execute '"+e+"' on 'ResizeObserver': parameter 1 is not of type 'Element'."}function c(e,t){for(var a=0;a<e.length;a+=1)if(e[a].target===t)return a;return-1}t.ResizeObserver=s;var p,l=function(e){o.forEach((function(t){t.$$activeTargets=[],t.$$skippedTargets=[],t.$$observationTargets.forEach((function(a){a.isActive()&&(d(a.target)>e?t.$$activeTargets.push(a):t.$$skippedTargets.push(a))}))}))},h=function(){var e=1/0;return o.forEach((function(t){if(t.$$activeTargets.length){var a=[];t.$$activeTargets.forEach((function(t){var n=new r.ResizeObserverEntry(t.target);a.push(n),t.$$broadcastWidth=n.contentRect.width,t.$$broadcastHeight=n.contentRect.height;var o=d(t.target);o<e&&(e=o)})),t.$$callback(a,t),t.$$activeTargets=[]}})),e},d=function(e){for(var t=0;e.parentNode;)e=e.parentNode,t+=1;return t},u=function(){var e=0;for(l(e);o.some((function(e){return!!e.$$activeTargets.length}));)e=h(),l(e);o.some((function(e){return!!e.$$skippedTargets.length}))&&function(){var e=new window.ErrorEvent("ResizeLoopError",{message:"ResizeObserver loop completed with undelivered notifications."});window.dispatchEvent(e)}()},f=function(){p||b()},b=function(){p=window.requestAnimationFrame((function(){u(),b()}))},m=function(){p&&!o.some((function(e){return!!e.$$observationTargets.length}))&&(window.cancelAnimationFrame(p),p=void 0)};t.install=function(){return window.ResizeObserver=s}},e4CM:function(e,t,a){"use strict";a.r(t),a.d(t,"metadata",(function(){return W})),a.d(t,"default",(function(){return F}));var n=a("rePB"),r=a("Ff2n"),o=a("q1tI"),s=a.n(o),i=a("7ljp"),c=a("J0Cq"),p=a("nKUr"),l=a("Yzjp");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var u=!("undefined"===typeof window||!window.document||!window.document.createElement),f=function(e,t,a,n){var r=Object(o.useRef)();Object(o.useEffect)((function(){r.current=t}),[t]),Object(o.useEffect)((function(){if(a&&a.addEventListener){var t=function(e){return r.current&&r.current(e)};return a.addEventListener(e,t,n),function(){a.removeEventListener(e,t,n)}}}),[e,a,n])},b=u?o.useLayoutEffect:o.useEffect,m=Object(o.forwardRef)((function(e,t){var a=e.children,n=e.portrait,r={position:"absolute",width:n?"100%":void 0,height:n?void 0:"100%",transform:n?"translateY(-50%)":"translateX(-50%)",pointerEvents:"all"};return s.a.createElement("div",{style:{position:"absolute",top:0,width:"100%",height:"100%",pointerEvents:"none"},"data-rcs":"handle-container",ref:t},s.a.createElement("div",{style:r},a))}));m.displayName="ReactCompareSliderHandleContainer";var g=function(e){var t=e.portrait,a=e.style,n=d(e,["portrait","style"]),r=h({height:t?4:"100%",width:t?"100%":4,backgroundColor:"#fff",boxShadow:"0 0 .2rem #000",cursor:t?"ns-resize":"ew-resize"},a);return s.a.createElement("div",Object.assign({},n,{style:r,"data-rcs":"handle-inner"}))},O=Object(o.forwardRef)((function(e,t){return s.a.createElement("div",Object.assign({},e,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",willChange:"clip",userSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"},"data-rcs":"clip-item",ref:t}))}));O.displayName="ReactCompareSliderClipContainer";var y=function(e){var t=e.handle,a=e.itemOne,n=e.itemTwo,r=e.onlyHandleDraggable,i=void 0!==r&&r,c=e.onPositionChange,p=e.portrait,u=void 0!==p&&p,y=e.position,w=void 0===y?50:y,j=e.boundsPadding,v=void 0===j?0:j,N=e.style,S=d(e,["handle","itemOne","itemTwo","onlyHandleDraggable","onPositionChange","portrait","position","boundsPadding","style"]),x=Object(o.useRef)(null),k=Object(o.useRef)(null),I=Object(o.useRef)(null),E=Object(o.useRef)(w),C=function(e){var t=Object(o.useRef)(e);return Object(o.useEffect)((function(){t.current=e})),t.current}(w),T=Object(o.useState)(!1),$=T[0],P=T[1],z=Object(o.useRef)(!1),R=Object(o.useState)(),M=R[0],_=R[1];Object(o.useEffect)((function(){_(i?I.current:x.current)}),[i]);var G=Object(o.useCallback)((function(e){var t=e.x,a=e.y,n=e.isOffset,r=e.portrait,o=e.boundsPadding,s=x.current.getBoundingClientRect(),i=s.top,p=s.left,l=s.width,h=s.height;if(0!==l&&0!==h){var d=Math.min(Math.max(r?n?a-i-window.pageYOffset:a:n?t-p-window.pageXOffset:t,0),r?h:l),u=d/(r?h:l)*100,f=r?0===d||d===h:0===d||d===l;if(!(u===E.current&&(0===E.current||100===E.current))||!f){E.current=u;var b=Math.min(Math.max(d,0+o),(r?h:l)-o);k.current.style.clip=r?"rect(auto,auto,"+b+"px,auto)":"rect(auto,"+b+"px,auto,auto)",I.current.style.transform=r?"translate3d(0,"+b+"px,0)":"translate3d("+b+"px,0,0)",c&&c(E.current)}}}),[c]);Object(o.useEffect)((function(){var e=x.current.getBoundingClientRect(),t=e.width,a=e.height,n=w===C?E.current:w;G({portrait:u,boundsPadding:v,x:t/100*n,y:a/100*n})}),[u,w,C,v,G]);var q=Object(o.useCallback)((function(e){e.preventDefault(),G({portrait:u,boundsPadding:v,isOffset:!0,x:e instanceof MouseEvent?e.pageX:e.touches[0].pageX,y:e instanceof MouseEvent?e.pageY:e.touches[0].pageY}),P(!0)}),[u,v,G]),D=Object(o.useCallback)((function(e){$&&G({portrait:u,boundsPadding:v,isOffset:!0,x:e instanceof MouseEvent?e.pageX:e.touches[0].pageX,y:e instanceof MouseEvent?e.pageY:e.touches[0].pageY})}),[u,$,v,G]),L=Object(o.useCallback)((function(){P(!1)}),[]),W=Object(o.useCallback)((function(e){var t=e.width,a=e.height;G({portrait:u,boundsPadding:v,x:t/100*E.current,y:a/100*E.current})}),[u,v,G]);Object(o.useEffect)((function(){return $&&!z.current&&(window.addEventListener("mousemove",D,{passive:!0}),window.addEventListener("mouseup",L,{passive:!0}),window.addEventListener("touchmove",D,{passive:!0}),window.addEventListener("touchend",L,{passive:!0}),z.current=!0),function(){z.current&&(window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",L),window.removeEventListener("touchmove",D),window.removeEventListener("touchend",L),z.current=!1)}}),[D,L,$]),function(e,t){var a=Object(o.useRef)(new l.ResizeObserver((function(e){var a=e[0];t(a.contentRect)}))),n=Object(o.useCallback)((function(){a.current.disconnect()}),[]),r=Object(o.useCallback)((function(){e.current&&a.current.observe(e.current)}),[e]);b((function(){return r(),function(){return n()}}),[n,r])}(x,W),f("mousedown",q,M,{capture:!0,passive:!1}),f("touchstart",q,M,{capture:!0,passive:!1});var Q=t||s.a.createElement(g,{portrait:u}),F=h({position:"relative",overflow:"hidden",cursor:$?u?"ns-resize":"ew-resize":void 0,userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"},N);return s.a.createElement("div",Object.assign({},S,{ref:x,style:F,"data-rcs":"root"}),n,s.a.createElement(O,{ref:k},a),s.a.createElement(m,{portrait:u,ref:I},Q))},w=a("3Qw3");function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var v=function(e){var t=function(){return Object(p.jsx)("div",{className:w.handle})};return Object(p.jsx)(y,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({className:w.slider,handle:Object(p.jsx)(t,{}),onlyHandleDraggable:"ontouchstart"in window},e))},N=a("736r"),S=a("IcvB"),x={size:{width:1e3,height:593},src:"/.assets/a78e8c62fcdcb2c3986eec6579052904.webp",srcSet:"/.assets/a78e8c62fcdcb2c3986eec6579052904.webp 1x, /.assets/dc0fe23e51bc611c1d17b2881bb98e80.webp 2x"},k={size:{width:1e3,height:593},src:"/.assets/93418bb95f9fac84e08b6d4d3de93848.webp",srcSet:"/.assets/93418bb95f9fac84e08b6d4d3de93848.webp 1x, /.assets/5cea70b8dfd7e28c3fe09f455f17adfc.webp 2x"},I={size:{width:1e3,height:600},src:"/.assets/e6958491672bcfa21cd59679b7014666.webp",srcSet:"/.assets/e6958491672bcfa21cd59679b7014666.webp 1x, /.assets/712bb6fbb985080d39d74e1d95594c72.webp 2x"},E={size:{width:307,height:290},src:"/.assets/de91817851769571c819fb3ec979dbc1.webp",srcSet:"/.assets/de91817851769571c819fb3ec979dbc1.webp 1x, /.assets/77ef9be312f66451d87f878551c3a47b.webp 2x"},C={size:{width:1e3,height:600},src:"/.assets/acb6d499e2148e05e5e733e5bb48f8cd.webp",srcSet:"/.assets/acb6d499e2148e05e5e733e5bb48f8cd.webp 1x, /.assets/228f8602435643b19084af795db23704.webp 2x"},T={size:{width:1e3,height:600},src:"/.assets/e11a4a1a5059e63525bbf7f690b08088.webp",srcSet:"/.assets/e11a4a1a5059e63525bbf7f690b08088.webp 1x, /.assets/a727c87afb7aa88dcf07105d935f5367.webp 2x"},$={size:{width:1260,height:777},src:"/.assets/73aad0af0ca650fab9d77089fa53e7d5.webp",srcSet:"/.assets/73aad0af0ca650fab9d77089fa53e7d5.webp 1x, /.assets/9bd608000441f0af5baabd239225d1c7.webp 2x"},P={size:{width:527,height:461},src:"/.assets/1d733004357b53a68f18c00c0eb7ae60.webp",srcSet:"/.assets/1d733004357b53a68f18c00c0eb7ae60.webp 1x, /.assets/932da206e857ec7320ac9da29da4a098.webp 2x"},z={size:{width:393,height:456},src:"/.assets/c753079f8969668f5d5dd2c10f5e796d.webp",srcSet:"/.assets/c753079f8969668f5d5dd2c10f5e796d.webp 1x, /.assets/621235376e68912f4546eb3cbdf2e5c9.webp 2x"},R={size:{width:379,height:216},src:"/.assets/a863b275b28ef40012a97ce8e566a642.webp",srcSet:"/.assets/a863b275b28ef40012a97ce8e566a642.webp 1x, /.assets/08b4a5aa8d9da9b77e16bed3edbf7bdd.webp 2x"},M={size:{width:433,height:494},src:"/.assets/f1b5e15aa01b448b1d19044933d6599d.webp",srcSet:"/.assets/f1b5e15aa01b448b1d19044933d6599d.webp 1x, /.assets/35946987d2c7523862dd18b978b10fb3.webp 2x"},_={size:{width:800,height:663},src:"/.assets/b11542aa3082a842d1e6dfcc751273d7.webp",srcSet:"/.assets/b11542aa3082a842d1e6dfcc751273d7.webp 1x, /.assets/33a4ff8bd0da68b887d828d2b60331e2.webp 2x"},G={size:{width:756,height:619},src:"/.assets/6c6bc79fdf7db8c5fa273490b702fe5b.webp",srcSet:"/.assets/6c6bc79fdf7db8c5fa273490b702fe5b.webp 1x, /.assets/ff4e019683e3f52d39972575c8ab4d92.webp 2x"},q={size:{width:1e3,height:593},src:"/.assets/1645d16b4f33dba173609f35eea1ae90.webp",srcSet:"/.assets/1645d16b4f33dba173609f35eea1ae90.webp 1x, /.assets/00895687fc2d3a2e0988351c24572916.webp 2x"};function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W={title:"The Ultimate Adventure Maps",description:"Enhanced OS Maps for Navigation",emoji:"\ud83d\uddfa",date:"2020-12-29",category:["outdoors"],image:{size:{width:1e3,height:600},src:"/.assets/c97104ffd04059c5e86748162832c876.webp",srcSet:"/.assets/c97104ffd04059c5e86748162832c876.webp 1x, /.assets/8f059f8a4db56d750bd735b3775f370a.webp 2x"}},Q={metadata:W};function F(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",L(L(L({},Q),a),{},{components:t,mdxType:"MDXLayout"}),Object(i.a)("h2",L({},{id:"ordnance-survey"}),Object(i.a)("a",L({parentName:"h2"},{href:"#ordnance-survey"}),"Ordnance Survey")),Object(i.a)("p",null,"If you're heading into the mountains, moors, or anywhere you aren't 100% sure you'll have signal, I have no doubts in saying that the de facto maps for most people in the UK",Object(i.a)("sup",L({parentName:"p"},{id:"fnref-1"}),Object(i.a)("a",L({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," will be the iconic tangerine-covered ",Object(i.a)("inlineCode",{parentName:"p"},"1:25000")," OS Explorer maps, published by the Ordnance Survey - the United Kingdom's quasi-quango mapping agency. With a track record of over 200 years' on-the-ground surveys, OS Maps, with their expert cartography, and complete, uninterrupted coverage of Great Britain",Object(i.a)("sup",L({parentName:"p"},{id:"fnref-1"}),Object(i.a)("a",L({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),", are probably the best paper maps you can buy anywhere in the world."),Object(i.a)("p",null,"Backed by the biggest geographical database on earth",Object(i.a)("sup",L({parentName:"p"},{id:"fnref-2"}),Object(i.a)("a",L({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2")),", no other maps include such continuous and consistently rich detail over such a wide area. In most other maps, woods and forests would sometimes be drawn as such; on OS maps, not only are the types of trees included, but also their actual geographic distribution within the woodland. This is just one example of the almost pedantic level of detail these maps include as standard."),Object(i.a)("p",null,"In terms of navigation, the maps also deliver vital information such as contour lines. They are the only complete source of Public Rights of Way, and differentiate between path types and access rights. Important features such as trig points and other coordinate-confirming structures such as cairns and manmade structures are also shown - even at a high scale."),Object(i.a)(v,{itemOne:Object(i.a)(c.a,{image:x,alt:"OS Explorer",mdxType:"Image"}),itemTwo:Object(i.a)(c.a,{image:k,alt:"OpenStreetMap",mdxType:"Image"}),mdxType:"Slider"}),Object(i.a)("p",null,"The OS Explorer maps' recognisable cartography serves more purposes than just looking pretty \u2728. Details such as the tree types mentioned above, terrain data, grasslands + rock formation, and accurate widths of rivers, brooks, and streams impart additional information (perhaps subconsciously), allowing you to intuitively relate and transform the ",Object(i.a)("inlineCode",{parentName:"p"},"2D")," map in your hands to the ",Object(i.a)("inlineCode",{parentName:"p"},"3D")," surroundings before you."),Object(i.a)("p",null,"As with other detailed maps, you may be inclined to think of these as the antiquated one-off remains of some monster mapping movement of yesteryear; however, the maps receive up to ",Object(i.a)("inlineCode",{parentName:"p"},"10 000")," updates per ",Object(i.a)("strong",{parentName:"p"},"day"),Object(i.a)("sup",L({parentName:"p"},{id:"fnref-2"}),Object(i.a)("a",L({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2"))," and so continue to accurately reflect changes to the current day landscape."),Object(i.a)("h2",L({},{id:"what-the-issue-then"}),Object(i.a)("a",L({parentName:"h2"},{href:"#what-the-issue-then"}),"What the issue then?")),Object(i.a)("p",null,"While I'm sure you've got the message that I'm a big fan of OS Maps, I have plenty of issues with them too. The main issue isn't anything specific to OS Maps, it's a problem that plagues pretty much every map, digital or physical: people don't walk where paths are designated, they walk where it's easiest. You probably witness this issue on a daily basis, in the form of desire paths: paths that people create themselves when planners and architects - or even the landscape itself - fail to cater to the needs of their users."),Object(i.a)("p",null,"In terms of maps, this divide between designated, and real-world usage manifests itself in a number of ways."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Firstly, the location of paths on the ground sometimes differs from the printed route"),Object(i.a)("li",{parentName:"ul"},"Newer or simply non-official routes often fail to appear on maps"),Object(i.a)("li",{parentName:"ul"},"Designation does not mean that the path is still there: i.e false paths that don't exist"),Object(i.a)("li",{parentName:"ul"},"Official status misleads and suggests suitability or superiority (e.g surface, directness)"),Object(i.a)("li",{parentName:"ul"},"Recent changes that render paths unsuitable are not reflected")),Object(i.a)("p",null,"While these issues can simply be the obsession of the perfectionist, they can also have problematic ramifications: e.g. safe routes off mountains, or occasions where the planned route is the only one out of a location in unfamiliar territory."),Object(i.a)("p",null,"As previously mentioned, these problems are inherent to pretty much any offline medium - and affect the majority of digital sources equally. This is because maps are effectively ",Object(i.a)("strong",{parentName:"p"},"static snapshots"),", only reflecting the reality as discrete points in time. What we really need is some ",Object(i.a)("strong",{parentName:"p"},"dynamic data")," \ud83d\ude2f."),Object(i.a)("h2",L({},{id:"strava"}),Object(i.a)("a",L({parentName:"h2"},{href:"#strava"}),"Strava")),Object(i.a)("p",null,"In order to remedy this issue, we're going to integrate data from Strava. Strava is one of the largest fitness social networks and receives millions of ",Object(i.a)("inlineCode",{parentName:"p"},"GPS")," tracks per day, from users' running, cycling, and other activities. The data from the past ",Object(i.a)("inlineCode",{parentName:"p"},"2 years")," is exposed via their 'Metro' and 'Heatmap'",Object(i.a)("sup",L({parentName:"p"},{id:"fnref-3"}),Object(i.a)("a",L({parentName:"sup"},{href:"#fn-3",className:"footnote-ref"}),"3"))," services as aggregated and anonymised ",Object(i.a)("inlineCode",{parentName:"p"},"XYZ")," tiles, which we're going to use. Strava only exposes these tiles via their website, which requires a free account if you want the highest resolution data."),Object(i.a)(c.a,{image:I,alt:"Strava Heatmap",mdxType:"Image"}),Object(i.a)("p",null,"It's not especially useful stuck in ",Object(i.a)("inlineCode",{parentName:"p"},"MapboxGL"),", so I just wrote a script in ",Object(i.a)("inlineCode",{parentName:"p"},"Proxyman"),Object(i.a)("sup",L({parentName:"p"},{id:"fnref-4"}),Object(i.a)("a",L({parentName:"sup"},{href:"#fn-4",className:"footnote-ref"}),"4"))," to include the required auth cookie on all tile requests, allowing its use in any ",Object(i.a)("inlineCode",{parentName:"p"},"GIS"),". Would share it, but it's very simple and would probably be breaking some ",Object(i.a)("inlineCode",{parentName:"p"},"ToS"),"s and ",Object(i.a)("inlineCode",{parentName:"p"},"EULA"),"s somewhere. Given Strava's liberal stance on their data be used for OSM",Object(i.a)("sup",L({parentName:"p"},{id:"fnref-5"}),Object(i.a)("a",L({parentName:"sup"},{href:"#fn-5",className:"footnote-ref"}),"5")),", and our obvious personal, not-for-profit intent, I don't think there are any copyright issues with us using the data in this way, as it clearly falls under fair use."),Object(i.a)("h2",L({},{id:"qgis"}),Object(i.a)("a",L({parentName:"h2"},{href:"#qgis"}),"QGIS")),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},"\u26a0\ufe0f Before we get into things, it's important to note that you ",Object(i.a)("strong",{parentName:"p"},"must"),", have the appropriate licence to use the Ordnance Survey basemaps. The rights can be purchased from OS by buying a paper version of the desired area, or through other agencies such as Digimap if for educational purposes",Object(i.a)("sup",L({parentName:"p"},{id:"fnref-6"}),Object(i.a)("a",L({parentName:"sup"},{href:"#fn-6",className:"footnote-ref"}),"6")),". How you get your OS Map into QGIS is dependant on your source.")),Object(i.a)("p",null,"In this post, I'm using QGIS",Object(i.a)("sup",L({parentName:"p"},{id:"fnref-7"}),Object(i.a)("a",L({parentName:"sup"},{href:"#fn-7",className:"footnote-ref"}),"7")),", as it's the only really cross platform, Open Source, and cost-accessible ",Object(i.a)("inlineCode",{parentName:"p"},"GIS")," package."),Object(i.a)(c.a,{image:E,alt:"QGIS Layers",mdxType:"Image"}),Object(i.a)("p",null,"Layering up the Strava Heatmap, and OS Explorer basemap is really easy in QGIS.  While the OS Maps use ",Object(i.a)("inlineCode",{parentName:"p"},"EPSG:27700"),", the slippy ",Object(i.a)("inlineCode",{parentName:"p"},"XYZ")," Strava tiles use a different ",Object(i.a)("inlineCode",{parentName:"p"},"CRS"),": ",Object(i.a)("inlineCode",{parentName:"p"},"EPSG:3857"),", this isn't a problem, as QGIS will project them both into the same coordinate space on the fly - giving us the following:"),Object(i.a)(v,{itemOne:Object(i.a)(c.a,{image:C,alt:"OS Explorer",mdxType:"Image"}),itemTwo:Object(i.a)(c.a,{image:T,alt:"OS Explorer + Strava",mdxType:"Image"}),mdxType:"Slider"}),Object(i.a)("section",{className:N.key},"I've marked up the map as follows:",Object(i.a)("ul",null,Object(i.a)("li",{"data-marker":""},Object(i.a)("div",{style:{color:"#3DFA89"},className:S.colourIndicator}),"not shown on the OS Explorer"),Object(i.a)("li",{"data-marker":""},Object(i.a)("div",{style:{color:"#0CE9E9"},className:S.colourIndicator}),"where the designated path isn't the most trafficked"),Object(i.a)("li",{"data-marker":""},Object(i.a)("div",{style:{color:"#5252FF"},className:S.colourIndicator}),"not seen in use on Strava"))),Object(i.a)("p",null,"Already we can start to see how powerful this technique is, and how much more relevant and useful information the map contains. Whole paths were missing off the original OS Map, and some minor paths are actually the main ones. There are also a few examples (one of which is highlighted in purple), where drawn paths aren't used by the millions of people on Strava over a full 2 years. Sus \ud83d\ude11."),Object(i.a)("p",null,"Using this map to plan routes, we're now much more informed about which paths are a safe bet, and which should be avoided. Combining this with aerial imagery can also give good results."),Object(i.a)("p",null,"(By overlaying the Strava information, we do cover up some map information it's mostly labels, which aren't that important)"),Object(i.a)("h2",L({},{id:"paths-tick-whats-next"}),Object(i.a)("a",L({parentName:"h2"},{href:"#paths-tick-whats-next"}),"Paths Tick! What's Next?")),Object(i.a)("p",null,"While we've remedied one of my main issues with the OS Explorer maps, there are a few other more practical issues with the maps."),Object(i.a)("p",null,"The OS Explorer maps are traditionally supplied as large, bulky, printed sheets at ",Object(i.a)("inlineCode",{parentName:"p"},"8x240x134mm")," folded, and ",Object(i.a)("inlineCode",{parentName:"p"},"1270x945mm")," spread out. This makes them perfect for throwing over the kitchen table to plan adventures, but doesn't make them all that practical when you're trying to flip the map over, in the wind, up top an ar\xeate. People have even resorted to cutting and all sorts of over-the-top solutions",Object(i.a)("sup",L({parentName:"p"},{id:"fnref-8"}),Object(i.a)("a",L({parentName:"sup"},{href:"#fn-8",className:"footnote-ref"}),"8")),"."),Object(i.a)("p",null,"Rather than get the scissors out, I prefer to leave the OS sheets at home and instead print off exactly the area I need - with a buffer for the inevitable navigational mishaps. I'm yet to be convinced that anyone has ever needed the whole ",Object(i.a)("inlineCode",{parentName:"p"},"1200km\xb2")," all at the same time."),Object(i.a)("p",null,"This also benefits us in a number of other ways:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"let's say you want to walk from Scafell Pike to Seatoller - a route that transects the boundary between two OS Explorer sheets. Carrying paper maps means you'd have to carry both ",Object(i.a)("inlineCode",{parentName:"li"},"OL6"),", and ",Object(i.a)("inlineCode",{parentName:"li"},"OL4"),Object(i.a)("sup",L({parentName:"li"},{id:"fnref-9"}),Object(i.a)("a",L({parentName:"sup"},{href:"#fn-9",className:"footnote-ref"}),"9")),". Even though you only need a small area across the two.",Object(i.a)(c.a,{image:$,alt:"OS Explorer map Boundaries",mdxType:"Image"})),Object(i.a)("li",{parentName:"ul"},"you don't have to pay more for lamination, just buy the digital rights"),Object(i.a)("li",{parentName:"ul"},"you don't need to carry ",Object(i.a)("strong",{parentName:"li"},"gigantic")," map cases and other shitty accessories"),Object(i.a)("li",{parentName:"ul"},"if you print on demand, you'll always have the latest version of the map")),Object(i.a)("h2",L({},{id:"pagination-and-printing"}),Object(i.a)("a",L({parentName:"h2"},{href:"#pagination-and-printing"}),"Pagination and Printing")),Object(i.a)("p",null,"QGIS' ",Object(i.a)("inlineCode",{parentName:"p"},"Layout")," functionality makes it really easy to layout our map for printing, even over multiple pages. It's fairly self-explanatory although there are a few things I ran into, doing it for the first time."),Object(i.a)("p",null,"The first thing is that ",Object(i.a)("inlineCode",{parentName:"p"},"layouts")," contain multiple ",Object(i.a)("inlineCode",{parentName:"p"},"pages"),". ",Object(i.a)("inlineCode",{parentName:"p"},"Pages")," are not ",Object(i.a)("inlineCode",{parentName:"p"},"layouts"),". We'll create one ",Object(i.a)("inlineCode",{parentName:"p"},"layout"),", with a few pages to cover the route/area of interest."),Object(i.a)(c.a,{image:P,alt:"QGIS Insert Pages",mdxType:"Image"}),Object(i.a)("p",null,"After adding the map to the page, its best to ",Object(i.a)("strong",{parentName:"p"},"fix")," the map scale to the desired value. In the case of the ",Object(i.a)("inlineCode",{parentName:"p"},"1:25k")," OS Explorer map, we're going to fix the scale to ",Object(i.a)("inlineCode",{parentName:"p"},"25000"),"."),Object(i.a)("p",null,"This is best done using an ",Object(i.a)("inlineCode",{parentName:"p"},"expression"),":"),Object(i.a)(c.a,{image:z,alt:"QGIS Fix Scale",mdxType:"Image"}),Object(i.a)("p",null,"Once we've fixed the scale, we can set the map's position interactively:"),Object(i.a)(c.a,{image:R,alt:"QGIS Position Map",mdxType:"Image"}),Object(i.a)("p",null,"Once you've repeated this for the remaining pages, you can export the pages directly to ",Object(i.a)("inlineCode",{parentName:"p"},".pdf"),", or if you want to further process or compress the files for digital use, you can export to ",Object(i.a)("inlineCode",{parentName:"p"},".png"),":"),Object(i.a)(c.a,{image:M,alt:"QGIS Export",mdxType:"Image"}),Object(i.a)("h2",L({},{id:"extras"}),Object(i.a)("a",L({parentName:"h2"},{href:"#extras"}),"Extras")),Object(i.a)("h3",L({},{id:"routes"}),Object(i.a)("a",L({parentName:"h3"},{href:"#routes"}),"Routes")),Object(i.a)("p",null,"Often you want your maps to detail a preplanned route. Once you've got a ",Object(i.a)("inlineCode",{parentName:"p"},".gpx")," file, it's really easy to import into ",Object(i.a)("inlineCode",{parentName:"p"},"QGIS"),"."),Object(i.a)("h3",L({},{id:"styles"}),Object(i.a)("a",L({parentName:"h3"},{href:"#styles"}),"Styles")),Object(i.a)("p",null,"Once it's in, I like to style it to blend into the surrounding map. In the case of OS Explorer maps the font used is ",Object(i.a)("inlineCode",{parentName:"p"},"Gill Sans"),", and the colours can be 'eyedropped' from the actual map."),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},"\u26a0\ufe0f One thing of note is that the scale for these added details will be off ",Object(i.a)("strong",{parentName:"p"},"until")," you export the print layout from QGIS.")),Object(i.a)("h3",L({},{id:"distance-markers"}),Object(i.a)("a",L({parentName:"h3"},{href:"#distance-markers"}),"Distance Markers")),Object(i.a)("p",null,"Distance markers are also very useful. In QGIS the process for creating them is somewhat convoluted."),Object(i.a)("p",null,"Firstly - if it is not already - reproject the imported ",Object(i.a)("inlineCode",{parentName:"p"},".gpx")," to the projects' ",Object(i.a)("inlineCode",{parentName:"p"},"CRS"),", you can find this tool in the ",Object(i.a)("inlineCode",{parentName:"p"},"processing")," toolbox."),Object(i.a)(c.a,{image:_,alt:"QGIS Reproject",mdxType:"Image"}),Object(i.a)("p",null,"Then you can use the 'points along geometry' tool - found in the same place - to generate the distance markers."),Object(i.a)(c.a,{image:G,alt:"QGIS Points along Geometry",mdxType:"Image"}),Object(i.a)("p",null,"Styling these points leads to really nice distance markers."),Object(i.a)(c.a,{image:q,alt:"Distance Markers on Map",mdxType:"Image"}),Object(i.a)("p",null,"To get the labels to state the distance I'm using the following expression:"),Object(i.a)("pre",L({},{className:"language-php",metastring:"QGIS"}),Object(i.a)("code",L({parentName:"pre"},{className:"language-php",metastring:"QGIS"}),Object(i.a)("span",L({parentName:"code"},{className:"token function"}),"to_int"),Object(i.a)("span",L({parentName:"code"},{className:"token punctuation"}),"("),Object(i.a)("span",L({parentName:"code"},{className:"token variable"}),"$id"),Object(i.a)("span",L({parentName:"code"},{className:"token punctuation"}),")")," ",Object(i.a)("span",L({parentName:"code"},{className:"token operator"}),"||")," ",Object(i.a)("span",L({parentName:"code"},{className:"token single-quoted-string string"}),"'km'"),"\n")),Object(i.a)("p",null,"If you haven't saved the distance marker layer, the numbers will be indexed to ",Object(i.a)("inlineCode",{parentName:"p"},"1")," not ",Object(i.a)("inlineCode",{parentName:"p"},"0"),", and so will give erroneous values. Save the layer and the problem should resolve."),Object(i.a)("h3",L({},{id:"pto-lines"}),Object(i.a)("a",L({parentName:"h3"},{href:"#pto-lines"}),"PTO Lines")),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"P"),"lease ",Object(i.a)("strong",{parentName:"p"},"T"),"urn ",Object(i.a)("strong",{parentName:"p"},"O"),"ver lines can also be really useful for knowing at what point along a route the next sheet should be used. Obviously you can just flip it over if you've printed it duplex, but if the next sheets are packed away in a bag then its useful to know when to turn over. Extra polish \u2728."),Object(i.a)("p",null,"I like to add these manually in the layout section of QGIS, using a two point ",Object(i.a)("inlineCode",{parentName:"p"},"polyline"),"."),Object(i.a)("p",null,"The reason I don't just turn over once I reach the edge of the map is that I always include a decent margin of overlap between consecutive sheets. If the edges line up perfectly with no overlap, it's impossible to take bearings and things accurately. If you include some overlap, then there's never a region where the compass would need to straddle both sheets at the same time. Having an overlap also helps negate any detail being cut off when printing."),Object(i.a)("h3",L({},{id:"safety"}),Object(i.a)("a",L({parentName:"h3"},{href:"#safety"}),"Safety")),Object(i.a)("p",null,"Considering we're going to these great lengths to customise the map, it only makes sense to include some important information too: like phone numbers, precalculated bearings or timings. There's not really any hard-fast rules here, just a head's up that might pay dividends someday \ud83e\uddb8\u200d\u2640\ufe0f."),Object(i.a)("h2",L({},{id:"printing"}),Object(i.a)("a",L({parentName:"h2"},{href:"#printing"}),"Printing")),Object(i.a)("p",null,"Printing from QGIS is easy, just be sure to fix the scale to ensure the print driver doesn't mess around with the map in any way. I tend to print a B&W copy of the first page to check everything's in order before committing."),Object(i.a)("p",null,"Another thing that caught me out is the fact that most laser printers can't print full bleed. This means that they'll always be a white border around the paper. Fixing the scale means that the edges of the map will be cut off - another reason to do a B&W proof."),Object(i.a)("h2",L({},{id:"weatherproofing"}),Object(i.a)("a",L({parentName:"h2"},{href:"#weatherproofing"}),"Weatherproofing")),Object(i.a)("p",null,"Even if it's not raining, paper used outdoors doesn't last. The humidity quickly reduces its integrity to that of a ",Object(i.a)("inlineCode",{parentName:"p"},"**insert E.D. joke**")," - making it impossible to use in combination with a compass, or even just to hold properly. Laminating eliminates this problem, and also makes your map rainproof, +1 over plain OS Maps!"),Object(i.a)("p",null,"I find that the best method is to whack the temperature of your laminator all the way up, and pass the laminate through a few times to ensure a good bond between the ply. I've never had one fail \ud83d\udc4c."),Object(i.a)("p",null,"While lamination makes the maps rainproof, the added rigidity also converts them into the perfect windsail - ready to fly over the edge of a hill. Punching a hole in the map and passing some paracord through to tie to something solves this, but if done with a hole punch will introduce a point of ingress for moisture and lead to delamination in wet weather."),Object(i.a)("p",null,"Of course, I wouldn't be mentioning this unless I had a solution, and that's to use a leather punch - one with different sized holes. Punch a larger hole through the paper layer, and a ",Object(i.a)("inlineCode",{parentName:"p"},"1-2mm")," smaller one though the laminator pocket; when the stack is heated, the outer layers will still be able to seal and prevent infiltration."),Object(i.a)("blockquote",null,Object(i.a)("p",{parentName:"blockquote"},"\u2696\ufe0f"),Object(i.a)("p",{parentName:"blockquote"},Object(i.a)("a",L({parentName:"p"},{href:"https://www.ordnancesurvey.co.uk/"}),"OS Maps")," \xa9 Crown copyright and database rights ",Object(i.a)("span",{dangerouslySetInnerHTML:{__html:(new Date).getFullYear()}})," Ordnance Survey (100025252)"),Object(i.a)("p",{parentName:"blockquote"},Object(i.a)("a",L({parentName:"p"},{href:"https://www.openstreetmap.org/copyright"}),"OpenStreetMap")," \xa9 OpenStreetMap contributors"),Object(i.a)("p",{parentName:"blockquote"},Object(i.a)("a",L({parentName:"p"},{href:"https://www.strava.com/heatmap"}),"Strava Heatmap")," \xa9 2018 Strava")),Object(i.a)("div",L({},{className:"footnotes"}),Object(i.a)("hr",{parentName:"div"}),Object(i.a)("ol",{parentName:"div"},Object(i.a)("li",L({parentName:"ol"},{id:"fn-1","ref-number":"1"}),"Ordnance Survey only covers Great Britain. Northern Ireland has its own counterpart: Ordnance Survey of Northern Ireland. Their maps are not the same.",Object(i.a)("a",L({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")),Object(i.a)("li",L({parentName:"ol"},{id:"fn-2","ref-number":"2"}),Object(i.a)("a",L({parentName:"li"},{href:"https://www.bbc.co.uk/programmes/b06b36q3"}),"https://www.bbc.co.uk/programmes/b06b36q3"),Object(i.a)("a",L({parentName:"li"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9")),Object(i.a)("li",L({parentName:"ol"},{id:"fn-3","ref-number":"3"}),Object(i.a)("a",L({parentName:"li"},{href:"https://www.strava.com/heatmap#5.98/-6.57074/54.52126/hot/all"}),"https://www.strava.com/heatmap#5.98/-6.57074/54.52126/hot/all"),Object(i.a)("a",L({parentName:"li"},{href:"#fnref-3",className:"footnote-backref"}),"\u21a9")),Object(i.a)("li",L({parentName:"ol"},{id:"fn-4","ref-number":"4"}),Object(i.a)("a",L({parentName:"li"},{href:"https://proxyman.io/"}),"https://proxyman.io/"),Object(i.a)("a",L({parentName:"li"},{href:"#fnref-4",className:"footnote-backref"}),"\u21a9")),Object(i.a)("li",L({parentName:"ol"},{id:"fn-5","ref-number":"5"}),Object(i.a)("a",L({parentName:"li"},{href:"https://wiki.openstreetmap.org/wiki/Strava"}),"https://wiki.openstreetmap.org/wiki/Strava"),Object(i.a)("a",L({parentName:"li"},{href:"#fnref-5",className:"footnote-backref"}),"\u21a9")),Object(i.a)("li",L({parentName:"ol"},{id:"fn-6","ref-number":"6"}),Object(i.a)("a",L({parentName:"li"},{href:"https://digimap.edina.ac.uk/"}),"https://digimap.edina.ac.uk/"),Object(i.a)("a",L({parentName:"li"},{href:"#fnref-6",className:"footnote-backref"}),"\u21a9")),Object(i.a)("li",L({parentName:"ol"},{id:"fn-7","ref-number":"7"}),Object(i.a)("a",L({parentName:"li"},{href:"https://www.qgis.org/"}),"https://www.qgis.org/"),Object(i.a)("a",L({parentName:"li"},{href:"#fnref-7",className:"footnote-backref"}),"\u21a9")),Object(i.a)("li",L({parentName:"ol"},{id:"fn-8","ref-number":"8"}),Object(i.a)("a",L({parentName:"li"},{href:"https://www.ordnancesurvey.co.uk/blog/2012/02/how-do-you-look-after-your-paper-map/"}),"https://www.ordnancesurvey.co.uk/blog/2012/02/how-do-you-look-after-your-paper-map/"),Object(i.a)("a",L({parentName:"li"},{href:"#fnref-8",className:"footnote-backref"}),"\u21a9")),Object(i.a)("li",L({parentName:"ol"},{id:"fn-9","ref-number":"9"}),Object(i.a)("a",L({parentName:"li"},{href:"https://shop.ordnancesurvey.co.uk/map-selector/"}),"https://shop.ordnancesurvey.co.uk/map-selector/"),Object(i.a)("a",L({parentName:"li"},{href:"#fnref-9",className:"footnote-backref"}),"\u21a9")))))}F.isMDXComponent=!0},xZdO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("0451"),r=function(e){this.target=e,this.contentRect=n.ContentRect(e)};t.ResizeObserverEntry=r}}]);