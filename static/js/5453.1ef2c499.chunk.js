"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[5453],{87383:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(1413),l=n(45987),i=n(50228),r=n(94162),s=n(4565),u=n(33888),o=n(46283),c=n(11087),x=n(80184);function d(e){var t=e.link,n=e.activeLast,l=e.disabled,r=t.name,s=t.href,u=t.icon,d=(0,a.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},l&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,x.jsxs)(x.Fragment,{children:[u&&(0,x.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:u}),r]});return s?(0,x.jsx)(o.Z,{component:c.rU,to:s,sx:d,children:m}):(0,x.jsxs)(i.Z,{sx:d,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function h(e){var t=e.links,n=e.action,c=e.heading,h=e.moreLink,j=e.activeLast,f=e.sx,g=(0,l.Z)(e,m),v=t[t.length-1].name;return(0,x.jsxs)(i.Z,{sx:(0,a.Z)({mb:5},f),children:[(0,x.jsxs)(r.Z,{direction:"row",alignItems:"center",children:[(0,x.jsxs)(i.Z,{sx:{flexGrow:1},children:[c&&(0,x.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:c}),!!t.length&&(0,x.jsx)(u.Z,(0,a.Z)((0,a.Z)({separator:(0,x.jsx)(p,{})},g),{},{children:t.map((function(e){return(0,x.jsx)(d,{link:e,activeLast:j,disabled:e.name===v},e.name||"")}))}))]}),n&&(0,x.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!h&&(0,x.jsx)(i.Z,{sx:{mt:2},children:h.map((function(e){return(0,x.jsx)(o.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function p(){return(0,x.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},85453:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var a=n(29439),l=n(72791),i=n(6907),r=n(50228),s=n(476),u=n(94162),o=n(11601),c=n(12065),x=n(4565),d=n(16002),m=n(7055),h=n(63402),p=n(87383),j=n(26052),f=n(80184),g=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}],v=[{value:0,label:"$0"},{value:25,label:"250"},{value:50,label:"500"},{value:75,label:"750"},{value:100,label:"1000"}],Z={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}};function b(e){return e>0?"$".concat(e,"0"):"".concat(e)}function k(e){return e>0?"$".concat(e):e}function y(e){return"$".concat(e,"\xb0C")}function L(e){return g.findIndex((function(t){return t.value===e}))+1}function V(){var e=(0,l.useState)(30),t=(0,a.Z)(e,2),n=t[0],V=t[1],w=(0,l.useState)([20,37]),C=(0,a.Z)(w,2),P=C[0],_=C[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.ql,{children:(0,f.jsx)("title",{children:" MUI Components: Slider | Laicos"})}),(0,f.jsx)(r.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,f.jsx)(s.Z,{children:(0,f.jsx)(p.Z,{heading:"Slider",links:[{name:"Components",href:m.ko.components},{name:"Slider"}],moreLink:["https://mui.com/components/slider"]})})}),(0,f.jsx)(s.Z,{sx:{my:10},children:(0,f.jsxs)(d.ZP,{columns:{xs:1,md:3},spacing:3,children:[(0,f.jsx)(j.g,{title:"Volume",sx:Z,children:(0,f.jsxs)(u.Z,{direction:"row",alignItems:"center",spacing:1,width:1,children:[(0,f.jsx)(h.Z,{icon:"eva:volume-mute-fill",width:24}),(0,f.jsx)(o.ZP,{value:n,onChange:function(e,t){V(t)},"aria-labelledby":"continuous-slider"}),(0,f.jsx)(h.Z,{icon:"eva:volume-up-fill",width:24})]})}),(0,f.jsx)(j.g,{title:"Disabled",sx:Z,children:(0,f.jsx)(o.ZP,{disabled:!0,defaultValue:30})}),(0,f.jsx)(j.g,{title:"Temperature",sx:Z,children:(0,f.jsx)(o.ZP,{defaultValue:30,getAriaValueText:y,valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110})}),(0,f.jsxs)(j.g,{title:"Size",sx:Z,children:[(0,f.jsx)(o.ZP,{size:"medium",marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:y}),(0,f.jsx)(o.ZP,{marks:!0,min:10,step:10,max:110,defaultValue:30,valueLabelDisplay:"auto",getAriaValueText:y})]}),(0,f.jsx)(j.g,{title:"Small steps",sx:Z,children:(0,f.jsx)(o.ZP,{defaultValue:5e-8,getAriaValueText:y,step:1e-8,marks:!0,min:-5e-8,max:1e-7,valueLabelDisplay:"auto"})}),(0,f.jsx)(j.g,{title:"Custom marks",sx:Z,children:(0,f.jsx)(o.ZP,{defaultValue:20,getAriaValueText:y,step:10,valueLabelDisplay:"auto",marks:g})}),(0,f.jsx)(j.g,{title:"Restricted values",sx:Z,children:(0,f.jsx)(o.ZP,{defaultValue:20,valueLabelFormat:L,getAriaValueText:y,step:null,valueLabelDisplay:"auto",marks:g})}),(0,f.jsxs)(j.g,{title:"Range",sx:Z,children:[(0,f.jsx)(r.Z,{sx:{width:"100%"},children:(0,f.jsx)(o.ZP,{scale:function(e){return 10*e},step:10,marks:v,value:P,onChange:function(e,t){_(t)},valueLabelDisplay:"on",getAriaValueText:b,valueLabelFormat:k})}),(0,f.jsxs)(r.Z,{sx:{p:2,width:"100%",borderRadius:1,bgcolor:function(e){return(0,c.Fq)(e.palette.grey[500],.12)}},children:[(0,f.jsxs)(x.Z,{variant:"subtitle2",gutterBottom:!0,children:["Min: ",b(P[0])]}),(0,f.jsxs)(x.Z,{variant:"subtitle2",children:["Max: ",b(P[1])]})]})]})]})})]})}},26052:function(e,t,n){n.d(t,{_:function(){return x},g:function(){return c}});var a=n(1413),l=n(12065),i=n(30286),r=n(16398),s=n(50228),u=n(4565),o=n(80184);function c(e){var t=e.title,n=e.sx,u=e.children;return(0,o.jsxs)(i.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,l.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,o.jsx)(r.Z,{title:t}),(0,o.jsx)(s.Z,{sx:(0,a.Z)({p:5,minHeight:180},n),children:u})]})}function x(e){var t=e.title;return(0,o.jsx)(u.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}}}]);
//# sourceMappingURL=5453.1ef2c499.chunk.js.map