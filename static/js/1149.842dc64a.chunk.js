"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[1149],{87383:function(e,t,r){r.d(t,{Z:function(){return x}});var n=r(1413),o=r(45987),i=r(50228),a=r(94162),l=r(4565),s=r(33888),c=r(46283),u=r(11087),d=r(80184);function p(e){var t=e.link,r=e.activeLast,o=e.disabled,a=t.name,l=t.href,s=t.icon,p=(0,n.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},o&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,d.jsxs)(d.Fragment,{children:[s&&(0,d.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),a]});return l?(0,d.jsx)(c.Z,{component:u.rU,to:l,sx:p,children:m}):(0,d.jsxs)(i.Z,{sx:p,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function x(e){var t=e.links,r=e.action,u=e.heading,x=e.moreLink,f=e.activeLast,g=e.sx,v=(0,o.Z)(e,m),Z=t[t.length-1].name;return(0,d.jsxs)(i.Z,{sx:(0,n.Z)({mb:5},g),children:[(0,d.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(i.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:u}),!!t.length&&(0,d.jsx)(s.Z,(0,n.Z)((0,n.Z)({separator:(0,d.jsx)(h,{})},v),{},{children:t.map((function(e){return(0,d.jsx)(p,{link:e,activeLast:f,disabled:e.name===Z},e.name||"")}))}))]}),r&&(0,d.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!x&&(0,d.jsx)(i.Z,{sx:{mt:2},children:x.map((function(e){return(0,d.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function h(){return(0,d.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},81149:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(29439),o=r(72791),i=r(6907),a=r(50228),l=r(476),s=r(61091),c=r(4407),u=r(4565),d=r(81898),p=r(50120),m=r(97265),x=r(72900),h=r(7226),f=r(7055),g=r(87383),v=r(22734),Z=r(26052),j=r(80184),b={display:"flex",alignItems:"center",justifyContent:"center"};function y(){var e=(0,o.useState)(null),t=(0,n.Z)(e,2),r=t[0],y=t[1],C=(0,o.useState)(null),k=(0,n.Z)(C,2),w=k[0],S=k[1],B=(0,o.useState)(null),R=(0,n.Z)(B,2),P=R[0],_=R[1],L=(0,o.useState)("top-left"),M=(0,n.Z)(L,2),z=M[0],E=M[1],I=function(){S(null)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.ql,{children:(0,j.jsx)("title",{children:" MUI Components: Popover | Laicos"})}),(0,j.jsx)(a.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,j.jsx)(l.Z,{children:(0,j.jsx)(g.Z,{heading:"Popover",links:[{name:"Components",href:f.ko.components},{name:"Popover"}],moreLink:["https://mui.com/components/popover"]})})}),(0,j.jsxs)(l.Z,{sx:{my:10},children:[(0,j.jsxs)(a.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{mb:3},children:[(0,j.jsxs)(Z.g,{title:"Click",sx:b,children:[(0,j.jsx)(s.Z,{variant:"contained",onClick:function(e){y(e.currentTarget)},children:"Open Popover"}),(0,j.jsx)(c.ZP,{open:Boolean(r),anchorEl:r,onClose:function(){y(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:(0,j.jsxs)(a.Z,{sx:{p:2,maxWidth:280},children:[(0,j.jsx)(u.Z,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),(0,j.jsx)(u.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]}),(0,j.jsxs)(Z.g,{title:"Hover",sx:b,children:[(0,j.jsx)(u.Z,{"aria-owns":w?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(e){S(e.currentTarget)},onMouseLeave:I,children:"Hover with a Popover."}),(0,j.jsx)(c.ZP,{id:"mouse-over-popover",open:Boolean(w),anchorEl:w,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:I,disableRestoreFocus:!0,sx:{pointerEvents:"none"},children:(0,j.jsxs)(a.Z,{sx:{p:2,maxWidth:280},children:[(0,j.jsx)(u.Z,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),(0,j.jsx)(u.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]}),(0,j.jsxs)(Z.g,{title:"Customized",sx:b,children:[(0,j.jsx)(s.Z,{variant:"contained",onClick:function(e){_(e.currentTarget)},sx:{mr:5},children:"Open Customized"}),(0,j.jsxs)(d.Z,{children:[(0,j.jsx)(p.Z,{sx:{typography:"body2"},children:"Arrow"}),(0,j.jsx)(m.Z,{value:z,onChange:function(e){return E(e.target.value)},children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom","right-top","right-center","right-bottom"].map((function(e){return(0,j.jsx)(x.Z,{value:e,control:(0,j.jsx)(h.Z,{}),label:e},e)}))})]}),(0,j.jsx)(v.Z,{open:P,onClose:function(){_(null)},arrow:z,children:(0,j.jsxs)(a.Z,{sx:{p:2,maxWidth:280},children:[(0,j.jsx)(u.Z,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),(0,j.jsx)(u.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]})]})}},26052:function(e,t,r){r.d(t,{_:function(){return d},g:function(){return u}});var n=r(1413),o=r(12065),i=r(30286),a=r(16398),l=r(50228),s=r(4565),c=r(80184);function u(e){var t=e.title,r=e.sx,s=e.children;return(0,c.jsxs)(i.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,o.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,c.jsx)(a.Z,{title:t}),(0,c.jsx)(l.Z,{sx:(0,n.Z)({p:5,minHeight:180},r),children:s})]})}function d(e){var t=e.title;return(0,c.jsx)(s.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},33888:function(e,t,r){r.d(t,{Z:function(){return L}});var n=r(93433),o=r(29439),i=r(4942),a=r(87462),l=r(63366),s=r(72791),c=(r(57441),r(28182)),u=r(94419),d=r(60277),p=r(85513),m=r(4565),x=r(12065),h=r(40233),f=r(80184),g=(0,h.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=r(92842),Z=(0,d.ZP)(v.Z)((function(e){var t=e.theme;return(0,a.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,a.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,a.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,x._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,x._4)(t.palette.grey[600],.12)})})})),j=(0,d.ZP)(g)({width:24,height:16});var b=function(e){var t=e;return(0,f.jsx)("li",{children:(0,f.jsx)(Z,(0,a.Z)({focusRipple:!0},e,{ownerState:t,children:(0,f.jsx)(j,{ownerState:t})}))})},y=r(75878),C=r(21217);function k(e){return(0,C.Z)("MuiBreadcrumbs",e)}var w=(0,y.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],B=(0,d.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,i.Z)({},"& .".concat(w.li),t.li),t.root]}})({}),R=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),P=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function _(e,t,r,n){return e.reduce((function(o,i,a){return a<e.length-1?o=o.concat(i,(0,f.jsx)(P,{"aria-hidden":!0,className:t,ownerState:n,children:r},"separator-".concat(a))):o.push(i),o}),[])}var L=s.forwardRef((function(e,t){var r=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),i=r.children,d=r.className,m=r.component,x=void 0===m?"nav":m,h=r.expandText,g=void 0===h?"Show path":h,v=r.itemsAfterCollapse,Z=void 0===v?1:v,j=r.itemsBeforeCollapse,y=void 0===j?1:j,C=r.maxItems,w=void 0===C?8:C,P=r.separator,L=void 0===P?"/":P,M=(0,l.Z)(r,S),z=s.useState(!1),E=(0,o.Z)(z,2),I=E[0],F=E[1],O=(0,a.Z)({},r,{component:x,expanded:I,expandText:g,itemsAfterCollapse:Z,itemsBeforeCollapse:y,maxItems:w,separator:L}),T=function(e){var t=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,t)}(O),N=s.useRef(null),A=s.Children.toArray(i).filter((function(e){return s.isValidElement(e)})).map((function(e,t){return(0,f.jsx)("li",{className:T.li,children:e},"child-".concat(t))}));return(0,f.jsx)(B,(0,a.Z)({ref:t,component:x,color:"text.secondary",className:(0,c.default)(T.root,d),ownerState:O},M,{children:(0,f.jsx)(R,{className:T.ol,ref:N,ownerState:O,children:_(I||w&&A.length<=w?A:function(e){return y+Z>=e.length?e:[].concat((0,n.Z)(e.slice(0,y)),[(0,f.jsx)(b,{"aria-label":g,onClick:function(){F(!0);var e=N.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-Z,e.length)))}(A),T.separator,L,O)})}))}))}}]);
//# sourceMappingURL=1149.842dc64a.chunk.js.map