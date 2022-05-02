!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Cropper=e()}(this,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(e,t){var i,a=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)),a}function k(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(o,!0).forEach(function(t){var e,i,a;e=n,a=o[i=t],i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):i(o).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))})}return n}function yt(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var t="undefined"!=typeof window&&void 0!==window.document,r=t?window:{},a=t&&"ontouchstart"in r.document.documentElement,o=t&&"PointerEvent"in r,d="cropper",O="all",T="crop",E="move",W="zoom",N="e",H="w",L="s",z="n",Y="ne",X="nw",R="se",j="sw",h="".concat(d,"-crop"),s="".concat(d,"-disabled"),A="".concat(d,"-hidden"),l="".concat(d,"-hide"),p="".concat(d,"-invisible"),c="".concat(d,"-modal"),u="".concat(d,"-move"),m="".concat(d,"Action"),g="".concat(d,"Preview"),f="crop",v="move",w="none",b="crop",y="cropend",x="cropmove",M="cropstart",C="dblclick",D=o?"pointerdown":a?"touchstart":"mousedown",B=o?"pointermove":a?"touchmove":"mousemove",S=o?"pointerup pointercancel":a?"touchend touchcancel":"mouseup",P="ready",I="zoom",U="image/jpeg",q=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,$=/^data:/,Q=/^data:image\/jpeg;base64,/,K=/^img|canvas$/i,Z={viewMode:0,dragMode:f,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},F=Number.isNaN||r.isNaN;function G(t){return"number"==typeof t&&!F(t)}var V=function(t){return 0<t&&t<1/0};function J(t){return void 0===t}function _(t){return"object"===e(t)&&null!==t}var tt=Object.prototype.hasOwnProperty;function et(t){if(!_(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&tt.call(i,"isPrototypeOf")}catch(t){return!1}}function it(t){return"function"==typeof t}var at=Array.prototype.slice;function nt(t){return Array.from?Array.from(t):at.call(t)}function ot(i,a){return i&&it(a)&&(Array.isArray(i)||G(i.length)?nt(i).forEach(function(t,e){a.call(i,t,e,i)}):_(i)&&Object.keys(i).forEach(function(t){a.call(i,i[t],t,i)})),i}var rt=Object.assign||function(i){for(var t=arguments.length,e=new Array(1<t?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];return _(i)&&0<e.length&&e.forEach(function(e){_(e)&&Object.keys(e).forEach(function(t){i[t]=e[t]})}),i},ht=/\.\d*(?:0|9){12}\d*$/;function xt(t,e){var i=1<arguments.length&&void 0!==e?e:1e11;return ht.test(t)?Math.round(t*i)/i:t}var st=/^width|height|left|top|marginLeft|marginTop$/;function ct(t,e){var i=t.style;ot(e,function(t,e){st.test(e)&&G(t)&&(t="".concat(t,"px")),i[e]=t})}function dt(t,e){var i;e&&(G(t.length)?ot(t,function(t){dt(t,e)}):t.classList?t.classList.add(e):(i=t.className.trim())?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e)}function lt(t,e){e&&(G(t.length)?ot(t,function(t){lt(t,e)}):t.classList?t.classList.remove(e):0<=t.className.indexOf(e)&&(t.className=t.className.replace(e,"")))}function pt(t,e,i){e&&(G(t.length)?ot(t,function(t){pt(t,e,i)}):(i?dt:lt)(t,e))}var ut=/([a-z\d])([A-Z])/g;function mt(t){return t.replace(ut,"$1-$2").toLowerCase()}function gt(t,e){return _(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(mt(e)))}function ft(t,e,i){_(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(mt(e)),i)}var vt,wt,bt,Mt,Ct=/\s\s*/,Dt=(Mt=!1,t&&(vt=!1,wt=function(){},bt=Object.defineProperty({},"once",{get:function(){return Mt=!0,vt},set:function(t){vt=t}}),r.addEventListener("test",wt,bt),r.removeEventListener("test",wt,bt)),Mt);function Bt(i,t,a,e){var n=3<arguments.length&&void 0!==e?e:{},o=a;t.trim().split(Ct).forEach(function(t){var e;Dt||(e=i.listeners)&&e[t]&&e[t][a]&&(o=e[t][a],delete e[t][a],0===Object.keys(e[t]).length&&delete e[t],0===Object.keys(e).length&&delete i.listeners),i.removeEventListener(t,o,n)})}function kt(o,t,r,e){var h=3<arguments.length&&void 0!==e?e:{},s=r;t.trim().split(Ct).forEach(function(a){var t,n;h.once&&!Dt&&(t=o.listeners,s=function(){delete n[a][r],o.removeEventListener(a,s,h);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];r.apply(o,e)},(n=void 0===t?{}:t)[a]||(n[a]={}),n[a][r]&&o.removeEventListener(a,n[a][r],h),n[a][r]=s,o.listeners=n),o.addEventListener(a,s,h)})}function Ot(t,e,i){var a;return it(Event)&&it(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function Tt(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var Et=r.location,Wt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Nt(t){var e=t.match(Wt);return null!==e&&(e[1]!==Et.protocol||e[2]!==Et.hostname||e[3]!==Et.port)}function Ht(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function Lt(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,r=[];G(n)&&0!==n&&r.push("translateX(".concat(n,"px)")),G(o)&&0!==o&&r.push("translateY(".concat(o,"px)")),G(e)&&0!==e&&r.push("rotate(".concat(e,"deg)")),G(i)&&1!==i&&r.push("scaleX(".concat(i,")")),G(a)&&1!==a&&r.push("scaleY(".concat(a,")"));var h=r.length?r.join(" "):"none";return{WebkitTransform:h,msTransform:h,transform:h}}function zt(t,e){var i=t.pageX,a=t.pageY,n={endX:i,endY:a};return e?n:k({startX:i,startY:a},n)}function Yt(t,e){var i,a=t.aspectRatio,n=t.height,o=t.width,r=1<arguments.length&&void 0!==e?e:"contain",h=V(o),s=V(n);return h&&s?(i=n*a,"contain"===r&&o<i||"cover"===r&&i<o?n=o/a:o=n*a):h?n=o/a:s&&(o=n*a),{width:o,height:n}}var Xt=String.fromCharCode;var Rt=/^data:.*,/;function jt(t){var e,i,a,n,o,r,h,s=new DataView(t);try{if(255===s.getUint8(0)&&216===s.getUint8(1))for(var c=s.byteLength,d=2;d+1<c;){if(255===s.getUint8(d)&&225===s.getUint8(d+1)){i=d;break}d+=1}if(i&&(n=i+10,"Exif"===function(t,e,i){var a="";i+=e;for(var n=e;n<i;n+=1)a+=Xt(t.getUint8(n));return a}(s,i+4,4)&&(!(h=18761===(o=s.getUint16(n)))&&19789!==o||42!==s.getUint16(n+2,h)||8<=(r=s.getUint32(n+4,h))&&(a=n+r))),a)for(var l,p=s.getUint16(a,h),u=0;u<p;u+=1)if(l=a+12*u+2,274===s.getUint16(l,h)){l+=8,e=s.getUint16(l,h),s.setUint16(l,1,h);break}}catch(t){e=1}return e}var At={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper;dt(a,A),lt(t,A);var n={width:Math.max(i.offsetWidth,Number(e.minContainerWidth)||200),height:Math.max(i.offsetHeight,Number(e.minContainerHeight)||100)};ct(a,{width:(this.containerData=n).width,height:n.height}),dt(t,A),lt(a,A)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,r=n/o,h=t.width,s=t.height;t.height*r>t.width?3===i?h=t.height*r:s=t.width/r:3===i?s=t.width/r:h=t.height*r;var c={aspectRatio:r,naturalWidth:n,naturalHeight:o,width:h,height:s};c.left=(t.width-h)/2,c.top=(t.height-s)/2,c.oldLeft=c.left,c.oldTop=c.top,this.canvasData=c,this.limited=1===i||2===i,this.limitCanvas(!0,!0),this.initialImageData=rt({},e),this.initialCanvasData=rt({},c)},limitCanvas:function(t,e){var i,a,n,o,r,h=this.options,s=this.containerData,c=this.canvasData,d=this.cropBoxData,l=h.viewMode,p=c.aspectRatio,u=this.cropped&&d;t&&(a=Number(h.minCanvasWidth)||0,n=Number(h.minCanvasHeight)||0,1<l?(a=Math.max(a,s.width),n=Math.max(n,s.height),3===l&&(a<n*p?a=n*p:n=a/p)):0<l&&(a?a=Math.max(a,u?d.width:0):n?n=Math.max(n,u?d.height:0):u&&((a=d.width)<(n=d.height)*p?a=n*p:n=a/p)),a=(i=Yt({aspectRatio:p,width:a,height:n})).width,n=i.height,c.minWidth=a,c.minHeight=n,c.maxWidth=1/0,c.maxHeight=1/0),e&&((u?0:1)<l?(o=s.width-c.width,r=s.height-c.height,c.minLeft=Math.min(0,o),c.minTop=Math.min(0,r),c.maxLeft=Math.max(0,o),c.maxTop=Math.max(0,r),u&&this.limited&&(c.minLeft=Math.min(d.left,d.left+(d.width-c.width)),c.minTop=Math.min(d.top,d.top+(d.height-c.height)),c.maxLeft=d.left,c.maxTop=d.top,2===l&&(c.width>=s.width&&(c.minLeft=Math.min(0,o),c.maxLeft=Math.max(0,o)),c.height>=s.height&&(c.minTop=Math.min(0,r),c.maxTop=Math.max(0,r))))):(c.minLeft=-c.width,c.minTop=-c.height,c.maxLeft=s.width,c.maxTop=s.height))},renderCanvas:function(t,e){var i,a,n,o,r,h=this.canvasData,s=this.imageData;e&&(a=(i=function(t){var e=t.width,i=t.height,a=t.degree;if(90===(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),r=Math.cos(n),h=e*r+i*o,s=e*o+i*r;return 90<a?{width:s,height:h}:{width:h,height:s}}({width:s.naturalWidth*Math.abs(s.scaleX||1),height:s.naturalHeight*Math.abs(s.scaleY||1),degree:s.rotate||0})).width,n=i.height,o=h.width*(a/h.naturalWidth),r=h.height*(n/h.naturalHeight),h.left-=(o-h.width)/2,h.top-=(r-h.height)/2,h.width=o,h.height=r,h.aspectRatio=a/n,h.naturalWidth=a,h.naturalHeight=n,this.limitCanvas(!0,!1)),(h.width>h.maxWidth||h.width<h.minWidth)&&(h.left=h.oldLeft),(h.height>h.maxHeight||h.height<h.minHeight)&&(h.top=h.oldTop),h.width=Math.min(Math.max(h.width,h.minWidth),h.maxWidth),h.height=Math.min(Math.max(h.height,h.minHeight),h.maxHeight),this.limitCanvas(!1,!0),h.left=Math.min(Math.max(h.left,h.minLeft),h.maxLeft),h.top=Math.min(Math.max(h.top,h.minTop),h.maxTop),h.oldLeft=h.left,h.oldTop=h.top,ct(this.canvas,rt({width:h.width,height:h.height},Lt({translateX:h.left,translateY:h.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);rt(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),ct(this.image,rt({width:i.width,height:i.height},Lt(rt({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:e.width,height:e.height};i&&(e.height*i>e.width?n.height=n.width/i:n.width=n.height*i),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=e.left+(e.width-n.width)/2,n.top=e.top+(e.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=rt({},n)},limitCropBox:function(t,e){var i,a,n,o,r=this.options,h=this.containerData,s=this.canvasData,c=this.cropBoxData,d=this.limited,l=r.aspectRatio;t&&(n=Number(r.minCropBoxWidth)||0,o=Number(r.minCropBoxHeight)||0,i=d?Math.min(h.width,s.width,s.width+s.left,h.width-s.left):h.width,a=d?Math.min(h.height,s.height,s.height+s.top,h.height-s.top):h.height,n=Math.min(n,h.width),o=Math.min(o,h.height),l&&(n&&o?n<o*l?o=n/l:n=o*l:n?o=n/l:o&&(n=o*l),i<a*l?a=i/l:i=a*l),c.minWidth=Math.min(n,i),c.minHeight=Math.min(o,a),c.maxWidth=i,c.maxHeight=a),e&&(d?(c.minLeft=Math.max(0,s.left),c.minTop=Math.max(0,s.top),c.maxLeft=Math.min(h.width,s.left+s.width)-c.width,c.maxTop=Math.min(h.height,s.top+s.height)-c.height):(c.minLeft=0,c.minTop=0,c.maxLeft=h.width-c.width,c.maxTop=h.height-c.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&ft(this.face,m,i.width>=e.width&&i.height>=e.height?E:O),ct(this.cropBox,rt({width:i.width,height:i.height},Lt({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Ot(this.element,b,this.getData())}},St={initPreview:function(){var t,e=this.element,i=this.crossOrigin,a=this.options.preview,n=i?this.crossOriginUrl:this.url,o=e.alt||"The image to preview",r=document.createElement("img");i&&(r.crossOrigin=i),r.src=n,r.alt=o,this.viewBox.appendChild(r),this.viewBoxImage=r,a&&("string"==typeof(t=a)?t=e.ownerDocument.querySelectorAll(a):a.querySelector&&(t=[a]),ot(this.previews=t,function(t){var e=document.createElement("img");ft(t,g,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),i&&(e.crossOrigin=i),e.src=n,e.alt=o,e.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(e)}))},resetPreview:function(){ot(this.previews,function(t){var e=gt(t,g);ct(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(e,i){if(_(e[i]))try{delete e[i]}catch(t){e[i]=void 0}else if(e.dataset)try{delete e.dataset[i]}catch(t){e.dataset[i]=void 0}else e.removeAttribute("data-".concat(mt(i)))}(t,g)})},preview:function(){var h=this.imageData,t=this.canvasData,e=this.cropBoxData,s=e.width,c=e.height,d=h.width,l=h.height,p=e.left-t.left-h.left,u=e.top-t.top-h.top;this.cropped&&!this.disabled&&(ct(this.viewBoxImage,rt({width:d,height:l},Lt(rt({translateX:-p,translateY:-u},h)))),ot(this.previews,function(t){var e=gt(t,g),i=e.width,a=e.height,n=i,o=a,r=1;s&&(o=c*(r=i/s)),c&&a<o&&(n=s*(r=a/c),o=a),ct(t,{width:n,height:o}),ct(t.getElementsByTagName("img")[0],rt({width:d*r,height:l*r},Lt(rt({translateX:-p*r,translateY:-u*r},h))))}))}},Pt={bind:function(){var t=this.element,e=this.options,i=this.cropper;it(e.cropstart)&&kt(t,M,e.cropstart),it(e.cropmove)&&kt(t,x,e.cropmove),it(e.cropend)&&kt(t,y,e.cropend),it(e.crop)&&kt(t,b,e.crop),it(e.zoom)&&kt(t,I,e.zoom),kt(i,D,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&kt(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&kt(i,C,this.onDblclick=this.dblclick.bind(this)),kt(t.ownerDocument,B,this.onCropMove=this.cropMove.bind(this)),kt(t.ownerDocument,S,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&kt(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;it(e.cropstart)&&Bt(t,M,e.cropstart),it(e.cropmove)&&Bt(t,x,e.cropmove),it(e.cropend)&&Bt(t,y,e.cropend),it(e.crop)&&Bt(t,b,e.crop),it(e.zoom)&&Bt(t,I,e.zoom),Bt(i,D,this.onCropStart),e.zoomable&&e.zoomOnWheel&&Bt(i,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Bt(i,C,this.onDblclick),Bt(t.ownerDocument,B,this.onCropMove),Bt(t.ownerDocument,S,this.onCropEnd),e.responsive&&Bt(window,"resize",this.onResize)}},It={resize:function(){var i,a,n,t=this.options,e=this.container,o=this.containerData,r=Number(t.minContainerWidth)||200,h=Number(t.minContainerHeight)||100;this.disabled||o.width<=r||o.height<=h||(1==(i=e.offsetWidth/o.width)&&e.offsetHeight===o.height||(t.restore&&(a=this.getCanvasData(),n=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(ot(a,function(t,e){a[e]=t*i})),this.setCropBoxData(ot(n,function(t,e){n[e]=t*i})))))},dblclick:function(){var t,e;this.disabled||this.options.dragMode===w||this.setDragMode((t=this.dragBox,e=h,(t.classList?t.classList.contains(e):-1<t.className.indexOf(e))?v:f))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),t.deltaY?a=0<t.deltaY?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=0<t.detail?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){var e,i,a,n=t.buttons,o=t.button;this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(G(n)&&1!==n||G(o)&&0!==o||t.ctrlKey)||(e=this.options,i=this.pointers,t.changedTouches?ot(t.changedTouches,function(t){i[t.identifier]=zt(t)}):i[t.pointerId||0]=zt(t),a=1<Object.keys(i).length&&e.zoomable&&e.zoomOnTouch?W:gt(t.target,m),q.test(a)&&!1!==Ot(this.element,M,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===T&&(this.cropping=!0,dt(this.dragBox,c))))},cropMove:function(t){var e,i=this.action;!this.disabled&&i&&(e=this.pointers,t.preventDefault(),!1!==Ot(this.element,x,{originalEvent:t,action:i})&&(t.changedTouches?ot(t.changedTouches,function(t){rt(e[t.identifier]||{},zt(t,!0))}):rt(e[t.pointerId||0]||{},zt(t,!0)),this.change(t)))},cropEnd:function(t){var e,i;this.disabled||(e=this.action,i=this.pointers,t.changedTouches?ot(t.changedTouches,function(t){delete i[t.identifier]}):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,pt(this.dragBox,c,this.cropped&&this.options.modal)),Ot(this.element,y,{originalEvent:t,action:e})))}},Ut={change:function(t){var e,i=this.options,a=this.canvasData,n=this.containerData,o=this.cropBoxData,r=this.pointers,h=this.action,s=i.aspectRatio,c=o.left,d=o.top,l=o.width,p=o.height,u=c+l,m=d+p,g=0,f=0,v=n.width,w=n.height,b=!0;!s&&t.shiftKey&&(s=l&&p?l/p:1),this.limited&&(g=o.minLeft,f=o.minTop,v=g+Math.min(n.width,a.width,a.left+a.width),w=f+Math.min(n.height,a.height,a.top+a.height));function y(t){switch(t){case N:u+B.x>v&&(B.x=v-u);break;case H:c+B.x<g&&(B.x=g-c);break;case z:d+B.y<f&&(B.y=f-d);break;case L:m+B.y>w&&(B.y=w-m)}}var x,M,C,D=r[Object.keys(r)[0]],B={x:D.endX-D.startX,y:D.endY-D.startY};switch(h){case O:c+=B.x,d+=B.y;break;case N:if(0<=B.x&&(v<=u||s&&(d<=f||w<=m))){b=!1;break}y(N),(l+=B.x)<0&&(h=H,c-=l=-l),s&&(p=l/s,d+=(o.height-p)/2);break;case z:if(B.y<=0&&(d<=f||s&&(c<=g||v<=u))){b=!1;break}y(z),p-=B.y,d+=B.y,p<0&&(h=L,d-=p=-p),s&&(l=p*s,c+=(o.width-l)/2);break;case H:if(B.x<=0&&(c<=g||s&&(d<=f||w<=m))){b=!1;break}y(H),l-=B.x,c+=B.x,l<0&&(h=N,c-=l=-l),s&&(p=l/s,d+=(o.height-p)/2);break;case L:if(0<=B.y&&(w<=m||s&&(c<=g||v<=u))){b=!1;break}y(L),(p+=B.y)<0&&(h=z,d-=p=-p),s&&(l=p*s,c+=(o.width-l)/2);break;case Y:if(s){if(B.y<=0&&(d<=f||v<=u)){b=!1;break}y(z),p-=B.y,d+=B.y,l=p*s}else y(z),y(N),!(0<=B.x)||u<v?l+=B.x:B.y<=0&&d<=f&&(b=!1),B.y<=0&&!(f<d)||(p-=B.y,d+=B.y);l<0&&p<0?(h=j,d-=p=-p,c-=l=-l):l<0?(h=X,c-=l=-l):p<0&&(h=R,d-=p=-p);break;case X:if(s){if(B.y<=0&&(d<=f||c<=g)){b=!1;break}y(z),p-=B.y,d+=B.y,l=p*s,c+=o.width-l}else y(z),y(H),!(B.x<=0)||g<c?(l-=B.x,c+=B.x):B.y<=0&&d<=f&&(b=!1),B.y<=0&&!(f<d)||(p-=B.y,d+=B.y);l<0&&p<0?(h=R,d-=p=-p,c-=l=-l):l<0?(h=Y,c-=l=-l):p<0&&(h=j,d-=p=-p);break;case j:if(s){if(B.x<=0&&(c<=g||w<=m)){b=!1;break}y(H),l-=B.x,c+=B.x,p=l/s}else y(L),y(H),!(B.x<=0)||g<c?(l-=B.x,c+=B.x):0<=B.y&&w<=m&&(b=!1),0<=B.y&&!(m<w)||(p+=B.y);l<0&&p<0?(h=Y,d-=p=-p,c-=l=-l):l<0?(h=R,c-=l=-l):p<0&&(h=X,d-=p=-p);break;case R:if(s){if(0<=B.x&&(v<=u||w<=m)){b=!1;break}y(N),p=(l+=B.x)/s}else y(L),y(N),!(0<=B.x)||u<v?l+=B.x:0<=B.y&&w<=m&&(b=!1),0<=B.y&&!(m<w)||(p+=B.y);l<0&&p<0?(h=X,d-=p=-p,c-=l=-l):l<0?(h=j,c-=l=-l):p<0&&(h=Y,d-=p=-p);break;case E:this.move(B.x,B.y),b=!1;break;case W:this.zoom((M=k({},x=r),C=[],ot(x,function(h,t){delete M[t],ot(M,function(t){var e=Math.abs(h.startX-t.startX),i=Math.abs(h.startY-t.startY),a=Math.abs(h.endX-t.endX),n=Math.abs(h.endY-t.endY),o=Math.sqrt(e*e+i*i),r=(Math.sqrt(a*a+n*n)-o)/o;C.push(r)})}),C.sort(function(t,e){return Math.abs(t)<Math.abs(e)}),C[0]),t),b=!1;break;case T:if(!B.x||!B.y){b=!1;break}e=Tt(this.cropper),c=D.startX-e.left,d=D.startY-e.top,l=o.minWidth,p=o.minHeight,0<B.x?h=0<B.y?R:Y:B.x<0&&(c-=l,h=0<B.y?j:X),B.y<0&&(d-=p),this.cropped||(lt(this.cropBox,A),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}b&&(o.width=l,o.height=p,o.left=c,o.top=d,this.action=h,this.renderCropBox()),ot(r,function(t){t.startX=t.endX,t.startY=t.endY})}},qt={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&dt(this.dragBox,c),lt(this.cropBox,A),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=rt({},this.initialImageData),this.canvasData=rt({},this.initialCanvasData),this.cropBoxData=rt({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(rt(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),lt(this.dragBox,c),dt(this.cropBox,A)),this},replace:function(e,t){var i=1<arguments.length&&void 0!==t&&t;return!this.disabled&&e&&(this.isImg&&(this.element.src=e),i?(this.url=e,this.image.src=e,this.ready&&(this.viewBoxImage.src=e,ot(this.previews,function(t){t.getElementsByTagName("img")[0].src=e}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(e))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,lt(this.cropper,s)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,dt(this.cropper,s)),this},destroy:function(){var t=this.element;return t[d]&&(t[d]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate()),this},move:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.canvasData,n=a.left,o=a.top;return this.moveTo(J(t)?t:n+Number(t),J(i)?i:o+Number(i))},moveTo:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.canvasData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(G(t)&&(a.left=t,n=!0),G(i)&&(a.top=i,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var a,n,o,r=this.options,h=this.canvasData,s=h.width,c=h.height,d=h.naturalWidth,l=h.naturalHeight;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&r.zoomable){var p,u,m,g=d*t,f=l*t;if(!1===Ot(this.element,I,{ratio:t,oldRatio:s/d,originalEvent:i}))return this;i?(p=this.pointers,u=Tt(this.cropper),m=p&&Object.keys(p).length?(o=n=a=0,ot(p,function(t){var e=t.startX,i=t.startY;a+=e,n+=i,o+=1}),{pageX:a/=o,pageY:n/=o}):{pageX:i.pageX,pageY:i.pageY},h.left-=(g-s)*((m.pageX-u.left-h.left)/s),h.top-=(f-c)*((m.pageY-u.top-h.top)/c)):et(e)&&G(e.x)&&G(e.y)?(h.left-=(g-s)*((e.x-h.left)/s),h.top-=(f-c)*((e.y-h.top)/c)):(h.left-=(g-s)/2,h.top-=(f-c)/2),h.width=g,h.height=f,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return G(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,G(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(G(e)?e:1,t)},scale:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.imageData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(G(t)&&(a.scaleX=t,n=!0),G(i)&&(a.scaleY=i,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(t){var i,a,e,n,o=0<arguments.length&&void 0!==t&&t,r=this.options,h=this.imageData,s=this.canvasData,c=this.cropBoxData;return this.ready&&this.cropped?(i={x:c.left-s.left,y:c.top-s.top,width:c.width,height:c.height},a=h.width/h.naturalWidth,ot(i,function(t,e){i[e]=t/a}),o&&(e=Math.round(i.y+i.height),n=Math.round(i.x+i.width),i.x=Math.round(i.x),i.y=Math.round(i.y),i.width=n-i.x,i.height=e-i.y)):i={x:0,y:0,width:0,height:0},r.rotatable&&(i.rotate=h.rotate||0),r.scalable&&(i.scaleX=h.scaleX||1,i.scaleY=h.scaleY||1),i},setData:function(t){var e,i,a=this.options,n=this.imageData,o=this.canvasData,r={};return this.ready&&!this.disabled&&et(t)&&(e=!1,a.rotatable&&G(t.rotate)&&t.rotate!==n.rotate&&(n.rotate=t.rotate,e=!0),a.scalable&&(G(t.scaleX)&&t.scaleX!==n.scaleX&&(n.scaleX=t.scaleX,e=!0),G(t.scaleY)&&t.scaleY!==n.scaleY&&(n.scaleY=t.scaleY,e=!0)),e&&this.renderCanvas(!0,!0),i=n.width/n.naturalWidth,G(t.x)&&(r.left=t.x*i+o.left),G(t.y)&&(r.top=t.y*i+o.top),G(t.width)&&(r.width=t.width*i),G(t.height)&&(r.height=t.height*i),this.setCropBoxData(r)),this},getContainerData:function(){return this.ready?rt({},this.containerData):{}},getImageData:function(){return this.sized?rt({},this.imageData):{}},getCanvasData:function(){var e=this.canvasData,i={};return this.ready&&ot(["left","top","width","height","naturalWidth","naturalHeight"],function(t){i[t]=e[t]}),i},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&et(t)&&(G(t.left)&&(e.left=t.left),G(t.top)&&(e.top=t.top),G(t.width)?(e.width=t.width,e.height=t.width/i):G(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,i,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&et(t)&&(G(t.left)&&(a.left=t.left),G(t.top)&&(a.top=t.top),G(t.width)&&t.width!==a.width&&(e=!0,a.width=t.width),G(t.height)&&t.height!==a.height&&(i=!0,a.height=t.height),n&&(e?a.height=a.width/n:i&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(t){var e=0<arguments.length&&void 0!==t?t:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i,a,n,o,r,h,s,c,d,l,p,u,m,g,f,v,w,b,y,x,M,C,D,B,k,O,T,E,W,N,H,L,z,Y,X,R,j,A,S,P,I,U=this.canvasData,q=(i=this.image,a=this.imageData,n=U,o=e,r=a.aspectRatio,h=a.naturalWidth,s=a.naturalHeight,c=a.rotate,d=void 0===c?0:c,l=a.scaleX,p=void 0===l?1:l,u=a.scaleY,m=void 0===u?1:u,g=n.aspectRatio,f=n.naturalWidth,v=n.naturalHeight,w=o.fillColor,b=void 0===w?"transparent":w,y=o.imageSmoothingEnabled,x=void 0===y||y,M=o.imageSmoothingQuality,C=void 0===M?"low":M,D=o.maxWidth,B=void 0===D?1/0:D,k=o.maxHeight,O=void 0===k?1/0:k,T=o.minWidth,E=void 0===T?0:T,W=o.minHeight,N=void 0===W?0:W,H=document.createElement("canvas"),L=H.getContext("2d"),z=Yt({aspectRatio:g,width:B,height:O}),Y=Yt({aspectRatio:g,width:E,height:N},"cover"),X=Math.min(z.width,Math.max(Y.width,f)),R=Math.min(z.height,Math.max(Y.height,v)),j=Yt({aspectRatio:r,width:B,height:O}),A=Yt({aspectRatio:r,width:E,height:N},"cover"),S=Math.min(j.width,Math.max(A.width,h)),P=Math.min(j.height,Math.max(A.height,s)),I=[-S/2,-P/2,S,P],H.width=xt(X),H.height=xt(R),L.fillStyle=b,L.fillRect(0,0,X,R),L.save(),L.translate(X/2,R/2),L.rotate(d*Math.PI/180),L.scale(p,m),L.imageSmoothingEnabled=x,L.imageSmoothingQuality=C,L.drawImage.apply(L,[i].concat(yt(I.map(function(t){return Math.floor(xt(t))})))),L.restore(),H);if(!this.cropped)return q;var $=this.getData(),Q=$.x,K=$.y,Z=$.width,F=$.height,G=q.width/Math.floor(U.naturalWidth);1!=G&&(Q*=G,K*=G,Z*=G,F*=G);var V=Z/F,J=Yt({aspectRatio:V,width:e.maxWidth||1/0,height:e.maxHeight||1/0}),_=Yt({aspectRatio:V,width:e.minWidth||0,height:e.minHeight||0},"cover"),tt=Yt({aspectRatio:V,width:e.width||(1!=G?q.width:Z),height:e.height||(1!=G?q.height:F)}),et=tt.width,it=tt.height,et=Math.min(J.width,Math.max(_.width,et)),it=Math.min(J.height,Math.max(_.height,it)),at=document.createElement("canvas"),nt=at.getContext("2d");at.width=xt(et),at.height=xt(it),nt.fillStyle=e.fillColor||"transparent",nt.fillRect(0,0,et,it);var ot=e.imageSmoothingEnabled,rt=void 0===ot||ot,ht=e.imageSmoothingQuality;nt.imageSmoothingEnabled=rt,ht&&(nt.imageSmoothingQuality=ht);var st,ct,dt,lt,pt,ut,mt=q.width,gt=q.height,ft=Q,vt=K;ft<=-Z||mt<ft?pt=dt=st=ft=0:ft<=0?(dt=-ft,ft=0,pt=st=Math.min(mt,Z+ft)):ft<=mt&&(dt=0,pt=st=Math.min(Z,mt-ft)),st<=0||vt<=-F||gt<vt?ut=lt=ct=vt=0:vt<=0?(lt=-vt,vt=0,ut=ct=Math.min(gt,F+vt)):vt<=gt&&(lt=0,ut=ct=Math.min(F,gt-vt));var wt,bt=[ft,vt,st,ct];return 0<pt&&0<ut&&(wt=et/Z,bt.push(dt*wt,lt*wt,pt*wt,ut*wt)),nt.drawImage.apply(nt,[q].concat(yt(bt.map(function(t){return Math.floor(xt(t))})))),at},setAspectRatio:function(t){var e=this.options;return this.disabled||J(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e,i,a=this.options,n=this.dragBox,o=this.face;return this.ready&&!this.disabled&&(e=t===f,i=a.movable&&t===v,t=e||i?t:w,a.dragMode=t,ft(n,m,t),pt(n,h,e),pt(n,u,i),a.cropBoxMovable||(ft(o,m,t),pt(o,h,e),pt(o,u,i))),this}},$t=r.Cropper,Qt=function(){function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),!t||!K.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=rt({},Z,et(e)&&e),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}var t,e,a;return t=i,a=[{key:"noConflict",value:function(){return window.Cropper=$t,i}},{key:"setDefaults",value:function(t){rt(Z,et(t)&&t)}}],(e=[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e[d]){if(e[d]=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",!(this.originalUrl=t))return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e,i,a,n,o,r,h,s,c=this;t&&(this.url=t,this.imageData={},e=this.element,(i=this.options).rotatable||i.scalable||(i.checkOrientation=!1),i.checkOrientation&&window.ArrayBuffer?$.test(t)?Q.test(t)?this.read((a=t.replace(Rt,""),n=atob(a),o=new ArrayBuffer(n.length),ot(r=new Uint8Array(o),function(t,e){r[e]=n.charCodeAt(e)}),o)):this.clone():(h=new XMLHttpRequest,s=this.clone.bind(this),this.reloading=!0,(this.xhr=h).onabort=s,h.onerror=s,h.ontimeout=s,h.onprogress=function(){h.getResponseHeader("content-type")!==U&&h.abort()},h.onload=function(){c.read(h.response)},h.onloadend=function(){c.reloading=!1,c.xhr=null},i.checkCrossOrigin&&Nt(t)&&e.crossOrigin&&(t=Ht(t)),h.open("GET",t),h.responseType="arraybuffer",h.withCredentials="use-credentials"===e.crossOrigin,h.send()):this.clone())}},{key:"read",value:function(t){var e,i=this.options,a=this.imageData,n=jt(t),o=0,r=1,h=1;1<n&&(this.url=function(t,e){for(var i=[],a=new Uint8Array(t);0<a.length;)i.push(Xt.apply(null,nt(a.subarray(0,8192)))),a=a.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}(t,U),o=(e=function(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}(n)).rotate,r=e.scaleX,h=e.scaleY),i.rotatable&&(a.rotate=o),i.scalable&&(a.scaleX=r,a.scaleY=h),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,a=e;this.options.checkCrossOrigin&&Nt(e)&&(i=i||"anonymous",a=Ht(e)),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e,n.alt=t.alt||"The image to crop",(this.image=n).onload=this.start.bind(this),n.onerror=this.stop.bind(this),dt(n,l),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var i=this,t=this.image;t.onload=null,t.onerror=null,this.sizing=!0;function e(t,e){rt(i.imageData,{naturalWidth:t,naturalHeight:e,aspectRatio:t/e}),i.sizing=!1,i.sized=!0,i.build()}var a,n,o=r.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(r.navigator.userAgent);!t.naturalWidth||o?(a=document.createElement("img"),n=document.body||document.documentElement,(this.sizingImage=a).onload=function(){e(a.width,a.height),o||n.removeChild(a)},a.src=t.src,o||(a.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",n.appendChild(a))):e(t.naturalWidth,t.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){var t,e,i,a,n,o,r,h,s,c;this.sized&&!this.ready&&(t=this.element,e=this.options,i=this.image,a=t.parentNode,(n=document.createElement("div")).innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',r=(o=n.querySelector(".".concat(d,"-container"))).querySelector(".".concat(d,"-canvas")),h=o.querySelector(".".concat(d,"-drag-box")),c=(s=o.querySelector(".".concat(d,"-crop-box"))).querySelector(".".concat(d,"-face")),this.container=a,this.cropper=o,this.canvas=r,this.dragBox=h,this.cropBox=s,this.viewBox=o.querySelector(".".concat(d,"-view-box")),this.face=c,r.appendChild(i),dt(t,A),a.insertBefore(o,t.nextSibling),this.isImg||lt(i,l),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,dt(s,A),e.guides||dt(s.getElementsByClassName("".concat(d,"-dashed")),A),e.center||dt(s.getElementsByClassName("".concat(d,"-center")),A),e.background&&dt(o,"".concat(d,"-bg")),e.highlight||dt(c,p),e.cropBoxMovable&&(dt(c,u),ft(c,m,O)),e.cropBoxResizable||(dt(s.getElementsByClassName("".concat(d,"-line")),A),dt(s.getElementsByClassName("".concat(d,"-point")),A)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),it(e.ready)&&kt(t,P,e.ready,{once:!0}),Ot(t,P))}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),lt(this.element,A))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}])&&n(t.prototype,e),a&&n(t,a),i}();return rt(Qt.prototype,At,St,Pt,It,Ut,qt),Qt}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery"),require("cropperjs")):"function"==typeof define&&define.amd?define(["jquery","cropperjs"],e):e((t=t||self).jQuery,t.Cropper)}(this,function(d,l){"use strict";var t,p;d=d&&d.hasOwnProperty("default")?d.default:d,l=l&&l.hasOwnProperty("default")?l.default:l,d&&d.fn&&l&&(t=d.fn.cropper,p="cropper",d.fn.cropper=function(h){for(var s,t=arguments.length,c=new Array(1<t?t-1:0),e=1;e<t;e++)c[e-1]=arguments[e];return this.each(function(t,e){var i,a=d(e),n="destroy"===h;if(!(r=a.data(p))){if(n)return;var o=d.extend({},a.data(),d.isPlainObject(h)&&h),r=new l(e,o);a.data(p,r)}"string"==typeof h&&(i=r[h],d.isFunction(i)&&((s=i.apply(r,c))===r&&(s=void 0),n&&a.removeData(p)))}),void 0!==s?s:this},d.fn.cropper.Constructor=l,d.fn.cropper.setDefaults=l.setDefaults,d.fn.cropper.noConflict=function(){return d.fn.cropper=t,this})});