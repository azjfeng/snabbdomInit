(()=>{"use strict";var e={createElement:function(e,t){return document.createElement(e,t)},createElementNS:function(e,t,n){return document.createElementNS(e,t,n)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},getTextContent:function(e){return e.textContent},isElement:function(e){return 1===e.nodeType},isText:function(e){return 3===e.nodeType},isComment:function(e){return 8===e.nodeType}};function t(e,t,n,o,r){return{sel:e,data:t,children:n,text:o,elm:r,key:void 0===t?void 0:t.key}}var n=function n(o,r){var i=void 0!==r?r:e;if(i.isElement(o)){var u,d=o.id?"#"+o.id:"",c=o.getAttribute("class"),a=c?"."+c.split(" ").join("."):"",m=i.tagName(o).toLowerCase()+d+a,l={},s=[],f=void 0,v=void 0,C=o.attributes,g=o.childNodes;for(f=0,v=C.length;f<v;f++)"id"!==(u=C[f].nodeName)&&"class"!==u&&(l[u]=C[f].nodeValue);for(f=0,v=g.length;f<v;f++)s.push(n(g[f],r));return t(m,{attrs:l},s,void 0,o)}return i.isText(o)?t(void 0,void 0,void 0,i.getTextContent(o),o):i.isComment(o)?t("!",{},[],i.getTextContent(o),o):t("",{},[],void 0,o)}(document.getElementById("root"));console.log(n)})();