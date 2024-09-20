"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[9837],{22841:function(t,o,e){e.d(o,{ZM:function(){return v},O_:function(){return j},Ct:function(){return h},qT:function(){return u}});var n=e(1413),r=e(93410),i=e(74142),a=e(60277),l=e(83928),s=e(65266),p=e(80184);function c(){var t=(0,i.Z)();return(0,p.jsx)(l.Z,{styles:{".mapboxgl-ctrl.mapboxgl-ctrl-group":{borderRadius:"8px",boxShadow:t.customShadows.z8},".mapboxgl-ctrl-zoom-in":{borderRadius:"8px 8px 0 0"},".mapboxgl-ctrl-compass":{borderRadius:"0 0 8px 8px"},".mapboxgl-ctrl-fullscreen":{".mapboxgl-ctrl-icon":{transform:" scale(0.75)"}},".mapboxgl-ctrl-group button+button":{borderTop:"1px solid ".concat(t.palette.divider)},".mapboxgl-ctrl.mapboxgl-ctrl-scale":{border:"none",lineHeight:"14px",borderRadius:"4px",color:t.palette.common.white,fontWeight:t.typography.fontWeightBold,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}})}var d=(0,a.ZP)(r.GI)((function(t){var o=t.theme,e="rtl"===o.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:o.spacing(1),boxShadow:o.customShadows.z20,borderRadius:o.shape.borderRadius,backgroundColor:o.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:o.palette.common.white,right:e&&"0",left:e&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:o.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:o.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:o.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:o.palette.grey[800]}}})),u=(0,a.ZP)("div")((function(t){var o=t.theme;return(0,n.Z)((0,n.Z)({},(0,s.Ls)({color:o.palette.grey[900]})),{},{zIndex:9,minWidth:200,position:"absolute",top:o.spacing(1),right:o.spacing(1),padding:o.spacing(2),borderRadius:o.shape.borderRadius})})),x=e(45987),m=["sx","children"];function h(t){var o=t.sx,e=t.children,r=(0,x.Z)(t,m);return(0,p.jsx)(d,(0,n.Z)((0,n.Z)({anchor:"bottom",sx:o},r),{},{children:e}))}var g=e(36459),b=e(50228);function j(t){var o=Object.assign({},((0,g.Z)(t),t));return(0,p.jsx)(r.Jx,(0,n.Z)((0,n.Z)({},o),{},{children:(0,p.jsx)(b.Z,{component:"svg",viewBox:"0 0 24 24",sx:{height:20,stroke:"none",cursor:"pointer",fill:function(t){return t.palette.error.main},transform:"translate(".concat(-10,"px,").concat(-20,"px)")},children:(0,p.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}function v(t){var o=t.hideScaleControl,e=t.hideGeolocateControl,n=t.hideFullscreenControl,i=t.hideNavigationnControl;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{}),!e&&(0,p.jsx)(r.$j,{position:"top-left",positionOptions:{enableHighAccuracy:!0}}),!n&&(0,p.jsx)(r.ot,{position:"top-left"}),!o&&(0,p.jsx)(r.jf,{position:"bottom-left"}),!i&&(0,p.jsx)(r.Pv,{position:"bottom-left"})]})}},59837:function(t,o,e){e.r(o),e.d(o,{default:function(){return E}});var n=e(6907),r=e(476),i=e(50228),a=e(93358),l=e(29439),s=e(93410),p=e(72791),c=e(60277),d=e(74142),u=e(4565),x=e(14783),m=e(63402),h=e(22841),g=e(80184),b=(0,c.ZP)("div")((function(t){return{zIndex:0,height:560,overflow:"hidden",position:"relative",borderRadius:t.theme.shape.borderRadius,"& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right":{display:"none"}}}));function j(t){var o=t.contacts,e="light"===(0,d.Z)().palette.mode,n=(0,p.useState)(null),r=(0,l.Z)(n,2),i=r[0],a=r[1];return(0,g.jsx)(b,{children:(0,g.jsxs)(s.ZP,{initialViewState:{latitude:12,longitude:42,zoom:2},mapStyle:"mapbox://styles/mapbox/".concat(e?"light":"dark","-v10"),mapboxAccessToken:x.uU,children:[(0,g.jsx)(h.ZM,{hideGeolocateControl:!0}),o.map((function(t,o){return(0,g.jsx)(h.O_,{latitude:t.latlng[0],longitude:t.latlng[1],onClick:function(o){o.originalEvent.stopPropagation(),a(t)}},"marker-".concat(o))})),i&&(0,g.jsxs)(h.Ct,{longitude:i.latlng[1],latitude:i.latlng[0],onClose:function(){return a(null)},sx:{"& .mapboxgl-popup-content":{bgcolor:"common.white"},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{borderTopColor:"#FFF"},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{borderBottomColor:"#FFF"}},children:[(0,g.jsx)(u.Z,{variant:"subtitle2",sx:{mb:.5},children:"Address"}),(0,g.jsx)(u.Z,{component:"div",variant:"caption",children:i.address}),(0,g.jsxs)(u.Z,{component:"div",variant:"caption",sx:{mt:1,display:"flex",alignItems:"center"},children:[(0,g.jsx)(m.Z,{icon:"eva:phone-fill",width:14,sx:{mr:.5}}),i.phoneNumber]})]})]})})}var v=e(4942),f=e(67098),Z=e(94162),y=e(45953),w=e(83064),C=[{country:"Bali",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(239) 555-0108"},{country:"London",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(319) 555-0115"},{country:"Prague",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(252) 555-0126"},{country:"Moscow",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(307) 555-0133"}],k=(0,c.ZP)("div")((function(t){var o=t.theme;return(0,v.Z)({position:"relative",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(/assets/background/overlay_1.svg), url(/assets/images/contact/hero.jpg)",padding:o.spacing(10,0)},o.breakpoints.up("md"),{height:560,padding:0})})),U=(0,c.ZP)("div")((function(t){var o=t.theme;return(0,v.Z)({textAlign:"center"},o.breakpoints.up("md"),{bottom:80,textAlign:"left",position:"absolute"})}));function N(){return(0,g.jsx)(k,{children:(0,g.jsx)(r.Z,{component:w.NM,children:(0,g.jsxs)(U,{children:[(0,g.jsx)(w.gH,{text:"Where",sx:{color:"primary.main"},variants:(0,w.EU)().inRight}),(0,g.jsx)("br",{}),(0,g.jsxs)(Z.Z,{spacing:2,display:"inline-flex",direction:"row",sx:{color:"common.white"},children:[(0,g.jsx)(w.gH,{text:"to"}),(0,g.jsx)(w.gH,{text:"find"}),(0,g.jsx)(w.gH,{text:"us?"})]}),(0,g.jsx)(y.ZP,{container:!0,spacing:5,sx:{mt:5,color:"common.white"},children:C.map((function(t){return(0,g.jsxs)(y.ZP,{item:!0,xs:12,sm:6,md:3,lg:2,sx:{pr:{md:5}},children:[(0,g.jsx)(f.m.div,{variants:(0,w.EU)().in,children:(0,g.jsx)(u.Z,{variant:"h6",paragraph:!0,children:t.country})}),(0,g.jsx)(f.m.div,{variants:(0,w.EU)().inRight,children:(0,g.jsxs)(u.Z,{variant:"body2",children:[t.address,(0,g.jsx)("br",{})," ",t.phoneNumber]})})]},t.country)}))})]})})})}var R=e(59911),A=e(61091);function S(){return(0,g.jsxs)(Z.Z,{component:w.DG,spacing:5,children:[(0,g.jsx)(f.m.div,{variants:(0,w.EU)().inUp,children:(0,g.jsxs)(u.Z,{variant:"h3",children:["Feel free to contact us. ",(0,g.jsx)("br",{}),"We'll be glad to hear from you, buddy."]})}),(0,g.jsxs)(Z.Z,{spacing:3,children:[(0,g.jsx)(f.m.div,{variants:(0,w.EU)().inUp,children:(0,g.jsx)(R.Z,{fullWidth:!0,label:"Name"})}),(0,g.jsx)(f.m.div,{variants:(0,w.EU)().inUp,children:(0,g.jsx)(R.Z,{fullWidth:!0,label:"Email"})}),(0,g.jsx)(f.m.div,{variants:(0,w.EU)().inUp,children:(0,g.jsx)(R.Z,{fullWidth:!0,label:"Subject"})}),(0,g.jsx)(f.m.div,{variants:(0,w.EU)().inUp,children:(0,g.jsx)(R.Z,{fullWidth:!0,label:"Enter your message here.",multiline:!0,rows:4})})]}),(0,g.jsx)(f.m.div,{variants:(0,w.EU)().inUp,children:(0,g.jsx)(A.Z,{size:"large",variant:"contained",children:"Submit Now"})})]})}function E(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.ql,{children:(0,g.jsx)("title",{children:" Contact us | Laicos"})}),(0,g.jsx)(N,{}),(0,g.jsx)(r.Z,{sx:{py:10},children:(0,g.jsxs)(i.Z,{gap:10,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[(0,g.jsx)(S,{}),(0,g.jsx)(j,{contacts:a.o2})]})})]})}}}]);
//# sourceMappingURL=9837.7db7168d.chunk.js.map