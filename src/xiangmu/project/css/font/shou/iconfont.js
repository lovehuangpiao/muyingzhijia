(function(window){var svgSprite='<svg><symbol id="icon-ego-favoritefull" viewBox="0 0 1024 1024"><path d="M545.935 131.638l74.941 231.892c4.242 15.553 18.382 25.452 33.935 25.452h243.205c35.349 0 49.49 45.248 21.21 65.043l-195.13 142.813c-12.725 9.899-18.382 25.452-12.725 41.007l74.941 231.892c11.312 33.935-26.866 60.801-56.56 41.007l-196.543-144.226c-12.725-9.899-29.694-9.899-42.42 0l-196.543 144.226c-28.278 21.21-66.458-7.069-56.56-41.007l74.941-231.892c4.242-15.553 0-31.108-12.725-41.007l-196.543-142.813c-28.278-21.21-14.141-65.043 21.21-65.043h243.205c15.553 0 29.694-9.899 33.935-25.452l74.941-231.892c11.312-33.935 59.387-33.935 69.285 0z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)