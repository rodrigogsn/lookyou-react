(this["webpackJsonplookyou-react"]=this["webpackJsonplookyou-react"]||[]).push([[93],{120:function(t,r,e){"use strict";e.r(r),e.d(r,"scopeCss",(function(){return L}));var n=e(1),s=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",o=new RegExp("(-shadowcsshost"+s,"gim"),c=new RegExp("(-shadowcsscontext"+s,"gim"),a=new RegExp("(-shadowcssslotted"+s,"gim"),i=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],h=/-shadowcsshost/gim,l=/:host/gim,p=/::slotted/gim,f=/:host-context/gim,d=/\/\*\s*[\s\S]*?\*\//g,g=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,v=/([{}])/g,w=function(t,r){var e=_(t),n=0;return e.escapedString.replace(m,(function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];var o=t[2],c="",a=t[4],i="";a&&a.startsWith("{%BLOCK%")&&(c=e.blocks[n++],a=a.substring("%BLOCK%".length+1),i="{");var u={selector:o,content:c},h=r(u);return""+t[1]+h.selector+t[3]+i+h.content+a}))},_=function(t){for(var r=t.split(v),e=[],n=[],s=0,o=[],c=0;c<r.length;c++){var a=r[c];"}"===a&&s--,s>0?o.push(a):(o.length>0&&(n.push(o.join("")),e.push("%BLOCK%"),o=[]),e.push(a)),"{"===a&&s++}return o.length>0&&(n.push(o.join("")),e.push("%BLOCK%")),{escapedString:e.join(""),blocks:n}},b=function(t,r,e){return t.replace(r,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t[2]){for(var n=t[2].split(","),s=[],o=0;o<n.length;o++){var c=n[o].trim();if(!c)break;s.push(e("-shadowcsshost-no-combinator",c,t[3]))}return s.join(",")}return"-shadowcsshost-no-combinator"+t[3]}))},x=function(t,r,e){return t+r.replace("-shadowcsshost","")+e},O=function(t,r,e){return r.indexOf("-shadowcsshost")>-1?x(t,r,e):t+r+e+", "+r+" "+t+e},W=function(t,r){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(r).test(t)},j=function(t,r,e){for(var n,s="."+(r=r.replace(/\[is=([^\]]*)\]/g,(function(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return r[0]}))),o=function(t){var n=t.trim();if(!n)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)n=function(t,r,e){if(h.lastIndex=0,h.test(t)){var n="."+e;return t.replace(i,(function(t,r){return r.replace(/([^:]*)(:*)(.*)/,(function(t,r,e,s){return r+n+e+s}))})).replace(h,n+" ")}return r+" "+t}(t,r,e);else{var o=t.replace(h,"");if(o.length>0){var c=o.match(/([^:]*)(:*)(.*)/);c&&(n=c[1]+s+c[2]+c[3])}}return n},c=function(t){var r=[],e=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var s="__ph-"+e+"__";return r.push(n),e++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,s){var o="__ph-"+e+"__";return r.push(s),e++,n+o})),placeholders:r}}(t),a="",u=0,l=/( |>|\+|~(?!=))\s*/g,p=!((t=c.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(n=l.exec(t));){var f=n[1],d=t.slice(u,n.index).trim();a+=((p=p||d.indexOf("-shadowcsshost-no-combinator")>-1)?o(d):d)+" "+f+" ",u=l.lastIndex}var g,m=t.substring(u);return a+=(p=p||m.indexOf("-shadowcsshost-no-combinator")>-1)?o(m):m,g=c.placeholders,a.replace(/__ph-(\d+)__/g,(function(t,r){return g[+r]}))},k=function t(r,e,n,s,o){return w(r,(function(r){var o=r.selector,c=r.content;return"@"!==r.selector[0]?o=function(t,r,e,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():W(t,r)?j(t,r,e).trim():t.trim()})).join(", ")}(r.selector,e,n,s):(r.selector.startsWith("@media")||r.selector.startsWith("@supports")||r.selector.startsWith("@page")||r.selector.startsWith("@document"))&&(c=t(r.content,e,n,s)),{selector:o.replace(/\s{2,}/g," ").trim(),content:c}}))},C=function(t,r,e,n,s){return t=function(t){return u.reduce((function(t,r){return t.replace(r," ")}),t)}(t=function(t,r){var e=a;return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){var n=t[2].trim(),s=t[3],o="."+r+" > "+n+s;return o}return"-shadowcsshost-no-combinator"+t[3]}))}(t=function(t){return b(t,c,O)}(t=function(t){return b(t,o,x)}(t=t.replace(f,"-shadowcsscontext").replace(l,"-shadowcsshost").replace(p,"-shadowcssslotted"))),n)),r&&(t=k(t,r,e,n)),(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+e)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim()},L=function(t,r,e){var s=r+"-h",o=r+"-s",c=t.match(g)||[];t=function(t){return t.replace(d,"")}(t);var a=[];if(e){var i=function(t){var r="/*!@___"+a.length+"___*/",e="/*!@"+t.selector+"*/";return a.push({placeholder:r,comment:e}),t.selector=r+t.selector,t};t=w(t,(function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=w(t.content,i),t):t}))}var u=C(t,r,s,o);return t=Object(n.__spreadArrays)([u],c).join("\n"),e&&a.forEach((function(r){var e=r.placeholder,n=r.comment;t=t.replace(e,n)})),t}}}]);
//# sourceMappingURL=93.bdaba446.chunk.js.map