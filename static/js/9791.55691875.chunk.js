"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[9791],{87383:function(e,n,r){r.d(n,{Z:function(){return p}});var t=r(1413),a=r(45987),i=r(50228),o=r(94162),s=r(4565),l=r(33888),c=r(46283),d=r(11087),u=r(80184);function h(e){var n=e.link,r=e.activeLast,a=e.disabled,o=n.name,s=n.href,l=n.icon,h=(0,t.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},a&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),f=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),o]});return s?(0,u.jsx)(c.Z,{component:d.rU,to:s,sx:h,children:f}):(0,u.jsxs)(i.Z,{sx:h,children:[" ",f," "]})}var f=["links","action","heading","moreLink","activeLast","sx"];function p(e){var n=e.links,r=e.action,d=e.heading,p=e.moreLink,g=e.activeLast,v=e.sx,x=(0,a.Z)(e,f),b=n[n.length-1].name;return(0,u.jsxs)(i.Z,{sx:(0,t.Z)({mb:5},v),children:[(0,u.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(i.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(l.Z,(0,t.Z)((0,t.Z)({separator:(0,u.jsx)(m,{})},x),{},{children:n.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:g,disabled:e.name===b},e.name||"")}))}))]}),r&&(0,u.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!p&&(0,u.jsx)(i.Z,{sx:{mt:2},children:p.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function m(){return(0,u.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},9791:function(e,n,r){r.r(n),r.d(n,{default:function(){return ln}});var t=r(1413),a=r(6907),i=r(74142),o=r(50228),s=r(476),l=r(94162),c=r(7055),d=r(71353),u=r(87383),h=r(45987),f=r(72791);function p(e,n){return n||(n=e.slice(0)),e.raw=n,e}var m=function(){function e(e){var n=this;this._insertTag=function(e){n.container.insertBefore(e,0===n.tags.length?n.insertionPoint?n.insertionPoint.nextSibling:n.prepend?n.container.firstChild:n.before:n.tags[n.tags.length-1].nextSibling),n.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(e){e.forEach(this._insertTag)},n.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),void 0!==e.nonce&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}(n);try{r.insertRule(e,r.cssRules.length)}catch(n){}}else n.appendChild(document.createTextNode(e));this.ctr++},n.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),g="-ms-",v="-webkit-",x=Math.abs,b=String.fromCharCode,Z=Object.assign;function y(e){return e.trim()}function k(e,n,r){return e.replace(n,r)}function w(e,n){return e.indexOf(n)}function j(e,n){return 0|e.charCodeAt(n)}function C(e,n,r){return e.slice(n,r)}function S(e){return e.length}function A(e){return e.length}function P(e,n){return n.push(e),e}var $=1,E=1,R=0,z=0,_=0,O="";function N(e,n,r,t,a,i,o){return{value:e,root:n,parent:r,type:t,props:a,children:i,line:$,column:E,length:o,return:""}}function I(e,n){return Z(N("",null,null,"",null,null,0),e,{length:-e.length},n)}function T(){return _=z>0?j(O,--z):0,E--,10===_&&(E=1,$--),_}function B(){return _=z<R?j(O,z++):0,E++,10===_&&(E=1,$++),_}function W(){return j(O,z)}function L(){return z}function M(e,n){return C(O,e,n)}function D(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F(e){return $=E=1,R=S(O=e),z=0,[]}function G(e){return O="",e}function q(e){return y(M(z-1,V(91===e?e+2:40===e?e+1:e)))}function H(e){for(;(_=W())&&_<33;)B();return D(e)>2||D(_)>3?"":" "}function U(e,n){for(;--n&&B()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return M(e,L()+(n<6&&32==W()&&32==B()))}function V(e){for(;B();)switch(_){case e:return z;case 34:case 39:34!==e&&39!==e&&V(_);break;case 40:41===e&&V(e);break;case 92:B()}return z}function J(e,n){for(;B()&&e+_!==57&&(e+_!==84||47!==W()););return"/*"+M(n,z-1)+"*"+b(47===e?e:B())}function K(e){for(;!D(W());)B();return M(e,z)}function Q(e){return G(X("",null,null,null,[""],e=F(e),0,[0],e))}function X(e,n,r,t,a,i,o,s,l){for(var c=0,d=0,u=o,h=0,f=0,p=0,m=1,g=1,v=1,x=0,Z="",y=a,j=i,C=t,A=Z;g;)switch(p=x,x=B()){case 40:if(108!=p&&58==A.charCodeAt(u-1)){-1!=w(A+=k(q(x),"&","&\f"),"&\f")&&(v=-1);break}case 34:case 39:case 91:A+=q(x);break;case 9:case 10:case 13:case 32:A+=H(p);break;case 92:A+=U(L()-1,7);continue;case 47:switch(W()){case 42:case 47:P(ee(J(B(),L()),n,r),l);break;default:A+="/"}break;case 123*m:s[c++]=S(A)*v;case 125*m:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+d:f>0&&S(A)-u&&P(f>32?ne(A+";",t,r,u-1):ne(k(A," ","")+";",t,r,u-2),l);break;case 59:A+=";";default:if(P(C=Y(A,n,r,c,d,a,s,Z,y=[],j=[],u),i),123===x)if(0===d)X(A,n,C,C,y,i,u,s,j);else switch(h){case 100:case 109:case 115:X(e,C,C,t&&P(Y(e,C,C,0,0,a,s,Z,a,y=[],u),j),a,j,u,s,t?y:j);break;default:X(A,C,C,C,[""],j,0,s,j)}}c=d=f=0,m=v=1,Z=A="",u=o;break;case 58:u=1+S(A),f=p;default:if(m<1)if(123==x)--m;else if(125==x&&0==m++&&125==T())continue;switch(A+=b(x),x*m){case 38:v=d>0?1:(A+="\f",-1);break;case 44:s[c++]=(S(A)-1)*v,v=1;break;case 64:45===W()&&(A+=q(B())),h=W(),d=u=S(Z=A+=K(L())),x++;break;case 45:45===p&&2==S(A)&&(m=0)}}return i}function Y(e,n,r,t,a,i,o,s,l,c,d){for(var u=a-1,h=0===a?i:[""],f=A(h),p=0,m=0,g=0;p<t;++p)for(var v=0,b=C(e,u+1,u=x(m=o[p])),Z=e;v<f;++v)(Z=y(m>0?h[v]+" "+b:k(b,/&\f/g,h[v])))&&(l[g++]=Z);return N(e,n,r,0===a?"rule":s,l,c,d)}function ee(e,n,r){return N(e,n,r,"comm",b(_),C(e,2,-2),0)}function ne(e,n,r,t){return N(e,n,r,"decl",C(e,0,t),C(e,t+1,-1),t)}function re(e,n){switch(function(e,n){return(((n<<2^j(e,0))<<2^j(e,1))<<2^j(e,2))<<2^j(e,3)}(e,n)){case 5103:return v+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return v+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return v+e+"-moz-"+e+g+e+e;case 6828:case 4268:return v+e+g+e+e;case 6165:return v+e+g+"flex-"+e+e;case 5187:return v+e+k(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return v+e+g+"flex-item-"+k(e,/flex-|-self/,"")+e;case 4675:return v+e+g+"flex-line-pack"+k(e,/align-content|flex-|-self/,"")+e;case 5548:return v+e+g+k(e,"shrink","negative")+e;case 5292:return v+e+g+k(e,"basis","preferred-size")+e;case 6060:return v+"box-"+k(e,"-grow","")+v+e+g+k(e,"grow","positive")+e;case 4554:return v+k(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return k(k(k(e,/(zoom-|grab)/,v+"$1"),/(image-set)/,v+"$1"),e,"")+e;case 5495:case 3959:return k(e,/(image-set\([^]*)/,v+"$1$`$1");case 4968:return k(k(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+v+e+e;case 4095:case 3583:case 4068:case 2532:return k(e,/(.+)-inline(.+)/,v+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(S(e)-1-n>6)switch(j(e,n+1)){case 109:if(45!==j(e,n+4))break;case 102:return k(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+(108==j(e,n+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch")?re(k(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(115!==j(e,n+1))break;case 6444:switch(j(e,S(e)-3-(~w(e,"!important")&&10))){case 107:return k(e,":",":"+v)+e;case 101:return k(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+v+(45===j(e,14)?"inline-":"")+"box$3$1"+v+"$2$3$1"+g+"$2box$3")+e}break;case 5936:switch(j(e,n+11)){case 114:return v+e+g+k(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return v+e+g+k(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return v+e+g+k(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return v+e+g+e+e}return e}function te(e,n){for(var r="",t=A(e),a=0;a<t;a++)r+=n(e[a],a,e,n)||"";return r}function ae(e,n,r,t){switch(e.type){case"@import":case"decl":return e.return=e.return||e.value;case"comm":return"";case"@keyframes":return e.return=e.value+"{"+te(e.children,t)+"}";case"rule":e.value=e.props.join(",")}return S(r=te(e.children,t))?e.return=e.value+"{"+r+"}":""}var ie=function(e,n,r){for(var t=0,a=0;t=a,a=W(),38===t&&12===a&&(n[r]=1),!D(a);)B();return M(e,z)},oe=new WeakMap,se=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var n=e.value,r=e.parent,t=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===n.charCodeAt(0)||oe.get(r))&&!t){oe.set(e,!0);for(var a=[],i=function(e,n){return G(function(e,n){var r=-1,t=44;do{switch(D(t)){case 0:38===t&&12===W()&&(n[r]=1),e[r]+=ie(z-1,n,r);break;case 2:e[r]+=q(t);break;case 4:if(44===t){e[++r]=58===W()?"&\f":"",n[r]=e[r].length;break}default:e[r]+=b(t)}}while(t=B());return e}(F(e),n))}(n,a),o=r.props,s=0,l=0;s<i.length;s++)for(var c=0;c<o.length;c++,l++)e.props[l]=a[s]?i[s].replace(/&\f/g,o[c]):o[c]+" "+i[s]}}},le=function(e){if("decl"===e.type){var n=e.value;108===n.charCodeAt(0)&&98===n.charCodeAt(2)&&(e.return="",e.value="")}},ce=[function(e,n,r,t){if(e.length>-1&&!e.return)switch(e.type){case"decl":e.return=re(e.value,e.length);break;case"@keyframes":return te([I(e,{value:k(e.value,"@","@"+v)})],t);case"rule":if(e.length)return function(e,n){return e.map(n).join("")}(e.props,(function(n){switch(function(e,n){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(n)){case":read-only":case":read-write":return te([I(e,{props:[k(n,/:(read-\w+)/,":-moz-$1")]})],t);case"::placeholder":return te([I(e,{props:[k(n,/:(plac\w+)/,":-webkit-input-$1")]}),I(e,{props:[k(n,/:(plac\w+)/,":-moz-$1")]}),I(e,{props:[k(n,/:(plac\w+)/,g+"input-$1")]})],t)}return""}))}}],de={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ue=/[A-Z]|^ms/g,he=/_EMO_([^_]+?)_([^]*?)_EMO_/g,fe=function(e){return 45===e.charCodeAt(1)},pe=function(e){return null!=e&&"boolean"!=typeof e},me=function(e){var n=Object.create(null);return function(r){return void 0===n[r]&&(n[r]=e(r)),n[r]}}((function(e){return fe(e)?e:e.replace(ue,"-$&").toLowerCase()})),ge=function(e,n){switch(e){case"animation":case"animationName":if("string"==typeof n)return n.replace(he,(function(e,n,r){return xe={name:n,styles:r,next:xe},n}))}return 1===de[e]||fe(e)||"number"!=typeof n||0===n?n:n+"px"};function ve(e,n,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return xe={name:r.name,styles:r.styles,next:xe},r.name;if(void 0!==r.styles){var t=r.next;if(void 0!==t)for(;void 0!==t;)xe={name:t.name,styles:t.styles,next:xe},t=t.next;return r.styles+";"}return function(e,n,r){var t="";if(Array.isArray(r))for(var a=0;a<r.length;a++)t+=ve(e,n,r[a])+";";else for(var i in r){var o=r[i];if("object"!=typeof o)null!=n&&void 0!==n[o]?t+=i+"{"+n[o]+"}":pe(o)&&(t+=me(i)+":"+ge(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=n&&void 0!==n[o[0]]){var s=ve(e,n,o);switch(i){case"animation":case"animationName":t+=me(i)+":"+s+";";break;default:t+=i+"{"+s+"}"}}else for(var l=0;l<o.length;l++)pe(o[l])&&(t+=me(i)+":"+ge(i,o[l])+";")}return t}(e,n,r);case"function":if(void 0!==e){var a=xe,i=r(e);return xe=a,ve(e,n,i)}}if(null==n)return r;var o=n[r];return void 0!==o?o:r}var xe,be=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ze=function(e,n,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var t=!0,a="";xe=void 0;var i=e[0];null==i||void 0===i.raw?(t=!1,a+=ve(r,n,i)):a+=i[0];for(var o=1;o<e.length;o++)a+=ve(r,n,e[o]),t&&(a+=i[o]);be.lastIndex=0;for(var s,l="";null!==(s=be.exec(a));)l+="-"+s[1];var c=function(e){for(var n,r=0,t=0,a=e.length;a>=4;++t,a-=4)n=1540483477*(65535&(n=255&e.charCodeAt(t)|(255&e.charCodeAt(++t))<<8|(255&e.charCodeAt(++t))<<16|(255&e.charCodeAt(++t))<<24))+(59797*(n>>>16)<<16),r=1540483477*(65535&(n^=n>>>24))+(59797*(n>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(t+2))<<16;case 2:r^=(255&e.charCodeAt(t+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(t)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+l;return{name:c,styles:a,next:xe}};function ye(e,n,r){var t="";return r.split(" ").forEach((function(r){void 0!==e[r]?n.push(e[r]+";"):t+=r+" "})),t}var ke=function(e,n,r){!function(e,n,r){var t=e.key+"-"+n.name;!1===r&&void 0===e.registered[t]&&(e.registered[t]=n.styles)}(e,n,r);var t=e.key+"-"+n.name;if(void 0===e.inserted[n.name]){var a=n;do{e.insert(n===a?"."+t:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}};function we(e,n){if(void 0===e.inserted[n.name])return e.insert("",n,e.sheet,!0)}function je(e,n,r){var t=[],a=ye(e,t,r);return t.length<2?r:a+n(t)}var Ce,Se,Ae,Pe,$e,Ee=function e(n){for(var r="",t=0;t<n.length;t++){var a=n[t];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var o in i="",a)a[o]&&o&&(i&&(i+=" "),i+=o);break;default:i=a}i&&(r&&(r+=" "),r+=i)}}return r},Re=function(e){var n=function(e){var n=e.key;if("css"===n){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var t=e.stylisPlugins||ce;var a,i,o={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),(function(e){for(var n=e.getAttribute("data-emotion").split(" "),r=1;r<n.length;r++)o[n[r]]=!0;s.push(e)}));var l,c,d=[ae,(c=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&c(e)})],u=function(e){var n=A(e);return function(r,t,a,i){for(var o="",s=0;s<n;s++)o+=e[s](r,t,a,i)||"";return o}}([se,le].concat(t,d));i=function(e,n,r,t){l=r,te(Q(e?e+"{"+n.styles+"}":n.styles),u),t&&(h.inserted[n.name]=!0)};var h={key:n,sheet:new m({key:n,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:i};return h.sheet.hydrate(s),h}({key:"css"});n.sheet.speedy=function(e){this.isSpeedy=e},n.compat=!0;var r=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=Ze(r,n.registered,void 0);return ke(n,a,!1),n.key+"-"+a.name};return{css:r,cx:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return je(n.registered,r,Ee(t))},injectGlobal:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=Ze(r,n.registered);we(n,a)},keyframes:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=Ze(r,n.registered),i="animation-"+a.name;return we(n,{name:a.name,styles:"@keyframes "+i+"{"+a.styles+"}"}),i},hydrate:function(e){e.forEach((function(e){n.inserted[e]=!0}))},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:ye.bind(null,n.registered),merge:je.bind(null,n.registered,r)}}(),ze=Re.cx,_e=Re.css,Oe=_e(Ce||(Ce=p(["\n  content: '';\n  position: absolute;\n  top: 0;\n  height: var(--tree-line-height);\n  box-sizing: border-box;\n"]))),Ne=_e(Se||(Se=p(["\n  display: flex;\n  padding-inline-start: 0;\n  margin: 0;\n  padding-top: var(--tree-line-height);\n  position: relative;\n\n  ::before {\n    ",";\n    left: 50%;\n    width: 0;\n    border-left: var(--tree-line-width) var(--tree-node-line-style)\n      var(--tree-line-color);\n  }\n"])),Oe),Ie=_e(Ae||(Ae=p(["\n  flex: auto;\n  text-align: center;\n  list-style-type: none;\n  position: relative;\n  padding: var(--tree-line-height) var(--tree-node-padding) 0\n    var(--tree-node-padding);\n"]))),Te=_e(Pe||(Pe=p(["\n  ::before,\n  ::after {\n    ",";\n    right: 50%;\n    width: 50%;\n    border-top: var(--tree-line-width) var(--tree-node-line-style)\n      var(--tree-line-color);\n  }\n  ::after {\n    left: 50%;\n    border-left: var(--tree-line-width) var(--tree-node-line-style)\n      var(--tree-line-color);\n  }\n\n  :only-of-type {\n    padding: 0;\n    ::after,\n    :before {\n      display: none;\n    }\n  }\n\n  :first-of-type {\n    ::before {\n      border: 0 none;\n    }\n    ::after {\n      border-radius: var(--tree-line-border-radius) 0 0 0;\n    }\n  }\n\n  :last-of-type {\n    ::before {\n      border-right: var(--tree-line-width) var(--tree-node-line-style)\n        var(--tree-line-color);\n      border-radius: 0 var(--tree-line-border-radius) 0 0;\n    }\n    ::after {\n      border: 0 none;\n    }\n  }\n"])),Oe);function Be(e){var n=e.children,r=e.label;return f.createElement("li",{className:ze(Ie,Te,e.className)},r,f.Children.count(n)>0&&f.createElement("ul",{className:Ne},n))}function We(e){var n=e.children,r=e.label,t=e.lineHeight,a=void 0===t?"20px":t,i=e.lineWidth,o=void 0===i?"1px":i,s=e.lineColor,l=void 0===s?"black":s,c=e.nodePadding,d=void 0===c?"5px":c,u=e.lineStyle,h=void 0===u?"solid":u,m=e.lineBorderRadius,g=void 0===m?"5px":m;return f.createElement("ul",{className:_e($e||($e=p(["\n        padding-inline-start: 0;\n        margin: 0;\n        display: flex;\n\n        --line-height: ",";\n        --line-width: ",";\n        --line-color: ",";\n        --line-border-radius: ",";\n        --line-style: ",";\n        --node-padding: ",";\n\n        --tree-line-height: var(--line-height, 20px);\n        --tree-line-width: var(--line-width, 1px);\n        --tree-line-color: var(--line-color, black);\n        --tree-line-border-radius: var(--line-border-radius, 5px);\n        --tree-node-line-style: var(--line-style, solid);\n        --tree-node-padding: var(--node-padding, 5px);\n      "])),a,o,l,g,h,d)},f.createElement(Be,{label:r},n))}var Le=r(93433);function Me(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children",r=[],t=null===e||void 0===e?void 0:e.map((function(e){return e[n]&&e[n].length&&(r=[].concat((0,Le.Z)(r),(0,Le.Z)(e[n]))),e}));return null===t||void 0===t?void 0:t.concat(r.length?Me(r,n):r)}var De=r(12065),Fe=r(83423),Ge=r(48928),qe=r(4565),He=r(37749),Ue=r(80184);function Ve(e){var n=e.node,r=e.depth,a=e.length,s=e.sx,c=(0,i.Z)(),d="light"===c.palette.mode,u=function(e){return{bgcolor:(0,De.Fq)(c.palette[e].main,.08),border:"solid 1px ".concat((0,De.Fq)(c.palette[e].main,.24)),color:d?c.palette[e].darker:c.palette[e].lighter}},h=1===r,f="root"===n.group,p="product design"===n.group,m="development"===n.group,g="marketing"===n.group;return(0,Ue.jsxs)(l.Z,{sx:{position:"relative",display:"inline-flex"},alignItems:"center",children:[!h&&(0,Ue.jsx)(Fe.Z,{alt:n.name,src:n.avatar||"",sx:{mt:-3.5,zIndex:9,width:56,height:56,position:"absolute",border:"solid 4px ".concat(c.palette.background.paper)}}),(0,Ue.jsxs)(Ge.Z,{sx:(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({pt:5,pb:3,minWidth:200,borderRadius:1.5,textTransform:"capitalize"},h&&{py:2}),h&&p&&u("primary")),h&&m&&u("info")),h&&g&&u("warning")),s),children:[1!==r&&!f&&(0,Ue.jsx)(o.Z,{sx:(0,t.Z)((0,t.Z)((0,t.Z)({top:0,left:0,width:1,height:4,position:"absolute",borderRadius:1.5},p&&{bgcolor:"primary.light"}),m&&{bgcolor:"info.light"}),g&&{bgcolor:"warning.light"})}),(0,Ue.jsxs)(qe.Z,{variant:h?"subtitle1":"subtitle2",noWrap:!0,children:[n.name,h&&(0,Ue.jsx)(He.Z,{color:(m?"info":g&&"warning")||"primary",sx:{ml:1},children:a})]}),!h&&(0,Ue.jsx)(qe.Z,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:n.role})]})]})}function Je(e){var n=e.node,r=e.sx;return(0,Ue.jsx)(Ge.Z,{sx:(0,t.Z)({p:2,boxShadow:0,borderRadius:1.5,display:"inline-flex",textTransform:"capitalize",color:function(e){return"light"===e.palette.mode?"primary.darker":"primary.lighter"},bgcolor:function(e){return(0,De.Fq)(e.palette.primary.main,.08)},border:function(e){return"1px solid ".concat((0,De.Fq)(e.palette.primary.main,.24))}},r),children:(0,Ue.jsx)(qe.Z,{variant:"subtitle2",children:n.name})})}var Ke=r(29439),Qe=r(13811),Xe=r(35702),Ye=r(63402),en=r(22734);function nn(e){var n=e.node,r=e.onEdit,a=e.onDelete,i=e.sx,o=(0,f.useState)(null),s=(0,Ke.Z)(o,2),l=s[0],c=s[1],d=function(){c(null)};return(0,Ue.jsxs)(Ue.Fragment,{children:[(0,Ue.jsxs)(Ge.Z,{sx:(0,t.Z)({p:2,minWidth:200,borderRadius:1.5,textAlign:"left",position:"relative",display:"inline-flex",flexDirection:"column",textTransform:"capitalize"},i),children:[(0,Ue.jsx)(Qe.Z,{color:l?"inherit":"default",onClick:function(e){c(e.currentTarget)},sx:{position:"absolute",top:8,right:8},children:(0,Ue.jsx)(Ye.Z,{icon:"eva:more-horizontal-fill"})}),(0,Ue.jsx)(Fe.Z,{alt:n.name,src:n.avatar||"",sx:{mr:2,mb:1,width:48,height:48}}),(0,Ue.jsx)(qe.Z,{variant:"subtitle2",noWrap:!0,children:n.name}),(0,Ue.jsx)(qe.Z,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:n.role})]}),(0,Ue.jsxs)(en.Z,{open:l,onClose:d,anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"},arrow:"left-center",sx:{width:160},children:[a&&(0,Ue.jsxs)(Xe.Z,{onClick:function(){d(),a()},sx:{color:"error.main"},children:[(0,Ue.jsx)(Ye.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),r&&(0,Ue.jsxs)(Xe.Z,{onClick:function(){d(),r()},children:[(0,Ue.jsx)(Ye.Z,{icon:"eva:edit-fill"}),"Edit"]})]})]})}var rn=["data","variant","sx"];function tn(e){var n=e.data,r=e.variant,a=void 0===r?"simple":r,o=e.sx,s=(0,h.Z)(e,rn),l=(0,i.Z)();return(0,Ue.jsx)(We,(0,t.Z)((0,t.Z)({lineWidth:"1.5px",nodePadding:"4px",lineBorderRadius:"24px",lineColor:l.palette.divider,label:"simple"===a&&(0,Ue.jsx)(Je,{sx:o,node:n})||"standard"===a&&(0,Ue.jsx)(nn,{sx:o,node:n,onEdit:function(){return console.log("EDIT",n.name)},onDelete:function(){return console.log("DELETE",n.name)}})||"group"===a&&(0,Ue.jsx)(Ve,{sx:o,node:n})},s),{},{children:n.children.map((function(e){return(0,Ue.jsx)(an,{depth:1,data:e,variant:a,sx:o},e.name)}))}))}function an(e){var n,r=e.data,t=e.depth,a=e.variant,i=e.sx,o=r.children&&!!r.children;return(0,Ue.jsx)(Be,{label:"simple"===a&&(0,Ue.jsx)(Je,{sx:i,node:r})||"standard"===a&&(0,Ue.jsx)(nn,{sx:i,node:r,onEdit:function(){return console.log("EDIT",r.name)},onDelete:function(){return console.log("DELETE",r.name)}})||"group"===a&&(0,Ue.jsx)(Ve,{sx:i,node:r,depth:t,length:null===(n=Me(r.children,"children"))||void 0===n?void 0:n.length}),children:o&&(0,Ue.jsx)(on,{data:r.children,depth:t,variant:a,sx:i})})}function on(e){var n=e.data,r=e.depth,t=e.variant,a=e.sx;return(0,Ue.jsx)(Ue.Fragment,{children:n.map((function(e){return(0,Ue.jsx)(an,{data:e,depth:r+1,variant:t,sx:a},e.name)}))})}var sn=r(26052);function ln(){var e=(0,i.Z)();return(0,Ue.jsxs)(Ue.Fragment,{children:[(0,Ue.jsx)(a.ql,{children:(0,Ue.jsx)("title",{children:" Extra Components: Organizational Chart | Laicos"})}),(0,Ue.jsx)(o.Z,{sx:{pt:6,pb:1,bgcolor:"light"===e.palette.mode?"grey.200":"grey.800"},children:(0,Ue.jsx)(s.Z,{children:(0,Ue.jsx)(u.Z,{heading:"Organizational Chart",links:[{name:"Components",href:c.ko.components},{name:"Organizational Chart"}],moreLink:["https://www.npmjs.com/package/react-organizational-chart","https://daniel-hauser.github.io/react-organizational-chart/?path=/story/example-tree--basic"]})})}),(0,Ue.jsx)(s.Z,{sx:{my:10},children:(0,Ue.jsxs)(l.Z,{spacing:5,children:[(0,Ue.jsx)(sn.g,{title:"Simple",children:(0,Ue.jsx)(tn,{data:dn,lineColor:e.palette.primary.light})}),(0,Ue.jsx)(sn.g,{title:"Standard",sx:{overflow:"auto"},children:(0,Ue.jsx)(tn,{data:dn,variant:"standard",lineHeight:"40px"})}),(0,Ue.jsx)(sn.g,{title:"By Group",sx:{overflow:"auto"},children:(0,Ue.jsx)(tn,{data:un,variant:"group",lineHeight:"64px"})})]})})]})}var cn=function(e,n,r,t){return{name:e,group:n,role:r,avatar:t}},dn=(0,t.Z)((0,t.Z)({},cn("tasha mcneill","root","ceo, co-founder",d.ZP.image.avatar(1))),{},{children:[(0,t.Z)((0,t.Z)({},cn("john stone","product design","lead",d.ZP.image.avatar(2))),{},{children:[(0,t.Z)((0,t.Z)({},cn("rimsha wynn","product design","senior",d.ZP.image.avatar(3))),{},{children:null})]}),(0,t.Z)((0,t.Z)({},cn("ponnappa priya","development","lead",d.ZP.image.avatar(4))),{},{children:[(0,t.Z)((0,t.Z)({},cn("tyra elliott","development","senior",d.ZP.image.avatar(5))),{},{children:[(0,t.Z)((0,t.Z)({},cn("sheridan mckee","development","back end developer",d.ZP.image.avatar(6))),{},{children:[(0,t.Z)((0,t.Z)({},cn("ang li","development","back end developer",d.ZP.image.avatar(7))),{},{children:null})]}),(0,t.Z)((0,t.Z)({},cn("hope ahmad","development","front end",d.ZP.image.avatar(8))),{},{children:null})]})]}),(0,t.Z)((0,t.Z)({},cn("peter stanbridge","marketing","lead",d.ZP.image.avatar(9))),{},{children:[(0,t.Z)((0,t.Z)({},cn("madeline harding","marketing","support",d.ZP.image.avatar(10))),{},{children:null}),(0,t.Z)((0,t.Z)({},cn("eoin medrano","marketing","content writer",d.ZP.image.avatar(11))),{},{children:null})]})]}),un=(0,t.Z)((0,t.Z)({},cn("tasha mcneill","root","ceo, co-founder",d.ZP.image.avatar(1))),{},{children:[(0,t.Z)((0,t.Z)({},cn("product design","product design",null,null)),{},{children:[(0,t.Z)((0,t.Z)({},cn("john stone","product design","lead",d.ZP.image.avatar(2))),{},{children:[(0,t.Z)((0,t.Z)({},cn("rimsha wynn","product design","senior",d.ZP.image.avatar(3))),{},{children:null})]})]}),(0,t.Z)((0,t.Z)({},cn("development","development",null,null)),{},{children:[(0,t.Z)((0,t.Z)({},cn("ponnappa priya","development","lead",d.ZP.image.avatar(4))),{},{children:[(0,t.Z)((0,t.Z)({},cn("tyra elliott","development","senior",d.ZP.image.avatar(5))),{},{children:[(0,t.Z)((0,t.Z)({},cn("sheridan mckee","development","back end developer",d.ZP.image.avatar(6))),{},{children:[(0,t.Z)((0,t.Z)({},cn("ang li","development","back end developer",d.ZP.image.avatar(7))),{},{children:null})]}),(0,t.Z)((0,t.Z)({},cn("hope ahmad","development","front end",d.ZP.image.avatar(8))),{},{children:null})]})]})]}),(0,t.Z)((0,t.Z)({},cn("marketing","marketing",null,null)),{},{children:[(0,t.Z)((0,t.Z)({},cn("peter stanbridge","marketing","lead",d.ZP.image.avatar(9))),{},{children:[(0,t.Z)((0,t.Z)({},cn("madeline harding","marketing","support",d.ZP.image.avatar(10))),{},{children:null}),(0,t.Z)((0,t.Z)({},cn("eoin medrano","marketing","content writer",d.ZP.image.avatar(11))),{},{children:null})]})]})]})},26052:function(e,n,r){r.d(n,{_:function(){return u},g:function(){return d}});var t=r(1413),a=r(12065),i=r(30286),o=r(16398),s=r(50228),l=r(4565),c=r(80184);function d(e){var n=e.title,r=e.sx,l=e.children;return(0,c.jsxs)(i.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,a.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,c.jsx)(o.Z,{title:n}),(0,c.jsx)(s.Z,{sx:(0,t.Z)({p:5,minHeight:180},r),children:l})]})}function u(e){var n=e.title;return(0,c.jsx)(l.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}},33888:function(e,n,r){r.d(n,{Z:function(){return R}});var t=r(93433),a=r(29439),i=r(4942),o=r(87462),s=r(63366),l=r(72791),c=(r(57441),r(28182)),d=r(94419),u=r(60277),h=r(85513),f=r(4565),p=r(12065),m=r(40233),g=r(80184),v=(0,m.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=r(92842),b=(0,u.ZP)(x.Z)((function(e){var n=e.theme;return(0,o.Z)({display:"flex",marginLeft:"calc(".concat(n.spacing(1)," * 0.5)"),marginRight:"calc(".concat(n.spacing(1)," * 0.5)")},"light"===n.palette.mode?{backgroundColor:n.palette.grey[100],color:n.palette.grey[700]}:{backgroundColor:n.palette.grey[700],color:n.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===n.palette.mode?{backgroundColor:n.palette.grey[200]}:{backgroundColor:n.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:n.shadows[0]},"light"===n.palette.mode?{backgroundColor:(0,p._4)(n.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(n.palette.grey[600],.12)})})})),Z=(0,u.ZP)(v)({width:24,height:16});var y=function(e){var n=e;return(0,g.jsx)("li",{children:(0,g.jsx)(b,(0,o.Z)({focusRipple:!0},e,{ownerState:n,children:(0,g.jsx)(Z,{ownerState:n})}))})},k=r(75878),w=r(21217);function j(e){return(0,w.Z)("MuiBreadcrumbs",e)}var C=(0,k.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],A=(0,u.ZP)(f.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,n){return[(0,i.Z)({},"& .".concat(C.li),n.li),n.root]}})({}),P=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,n){return n.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),$=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,n){return n.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function E(e,n,r,t){return e.reduce((function(a,i,o){return o<e.length-1?a=a.concat(i,(0,g.jsx)($,{"aria-hidden":!0,className:n,ownerState:t,children:r},"separator-".concat(o))):a.push(i),a}),[])}var R=l.forwardRef((function(e,n){var r=(0,h.Z)({props:e,name:"MuiBreadcrumbs"}),i=r.children,u=r.className,f=r.component,p=void 0===f?"nav":f,m=r.expandText,v=void 0===m?"Show path":m,x=r.itemsAfterCollapse,b=void 0===x?1:x,Z=r.itemsBeforeCollapse,k=void 0===Z?1:Z,w=r.maxItems,C=void 0===w?8:w,$=r.separator,R=void 0===$?"/":$,z=(0,s.Z)(r,S),_=l.useState(!1),O=(0,a.Z)(_,2),N=O[0],I=O[1],T=(0,o.Z)({},r,{component:p,expanded:N,expandText:v,itemsAfterCollapse:b,itemsBeforeCollapse:k,maxItems:C,separator:R}),B=function(e){var n=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},j,n)}(T),W=l.useRef(null),L=l.Children.toArray(i).filter((function(e){return l.isValidElement(e)})).map((function(e,n){return(0,g.jsx)("li",{className:B.li,children:e},"child-".concat(n))}));return(0,g.jsx)(A,(0,o.Z)({ref:n,component:p,color:"text.secondary",className:(0,c.default)(B.root,u),ownerState:T},z,{children:(0,g.jsx)(P,{className:B.ol,ref:W,ownerState:T,children:E(N||C&&L.length<=C?L:function(e){return k+b>=e.length?e:[].concat((0,t.Z)(e.slice(0,k)),[(0,g.jsx)(y,{"aria-label":v,onClick:function(){I(!0);var e=W.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,t.Z)(e.slice(e.length-b,e.length)))}(L),B.separator,R,T)})}))}))}}]);
//# sourceMappingURL=9791.55691875.chunk.js.map