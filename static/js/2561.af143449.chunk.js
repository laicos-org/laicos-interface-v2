"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[2561],{7456:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(1413),i=t(45987),o=t(58195),s=t(40464),l=t(8440),a=t(77248),c=t(61091),d=t(80184),u=["title","content","action","open","onClose"];function h(e){var n=e.title,t=e.content,h=e.action,x=e.open,f=e.onClose,g=(0,i.Z)(e,u);return(0,d.jsxs)(o.Z,(0,r.Z)((0,r.Z)({fullWidth:!0,maxWidth:"xs",open:x,onClose:f},g),{},{children:[(0,d.jsx)(s.Z,{sx:{pb:2},children:n}),t&&(0,d.jsxs)(l.Z,{sx:{typography:"body2"},children:[" ",t," "]}),(0,d.jsxs)(a.Z,{children:[h,(0,d.jsx)(c.Z,{variant:"outlined",color:"inherit",onClick:f,children:"Cancel"})]})]}))}},87383:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(1413),i=t(45987),o=t(50228),s=t(94162),l=t(4565),a=t(33888),c=t(46283),d=t(11087),u=t(80184);function h(e){var n=e.link,t=e.activeLast,i=e.disabled,s=n.name,l=n.href,a=n.icon,h=(0,r.Z)({display:"inline-flex",alignItems:"center",color:"text.primary"},i&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[a&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:a}),s]});return l?(0,u.jsx)(c.Z,{component:d.rU,to:l,sx:h,children:x}):(0,u.jsxs)(o.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function f(e){var n=e.links,t=e.action,d=e.heading,f=e.moreLink,Z=e.activeLast,p=e.sx,j=(0,i.Z)(e,x),v=n[n.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},p),children:[(0,u.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(a.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(g,{})},j),{},{children:n.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:Z,disabled:e.name===v},e.name||"")}))}))]}),t&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!f&&(0,u.jsx)(o.Z,{sx:{mt:2},children:f.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function g(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},54278:function(e,n,t){function r(e,n,t){return e>0?Math.max(0,(1+e)*n-t):0}function i(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function o(e,n){return"desc"===e?function(e,t){return i(e,t,n)}:function(e,t){return-i(e,t,n)}}t.d(n,{$W:function(){return v},K:function(){return k},et:function(){return x},S_:function(){return F},Z4:function(){return D},hM:function(){return j},fQ:function(){return r},sQ:function(){return o},x6:function(){return a}});var s=t(29439),l=t(72791);function a(e){var n=(0,l.useState)(!(null===e||void 0===e||!e.defaultDense)),t=(0,s.Z)(n,2),r=t[0],i=t[1],o=(0,l.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),a=(0,s.Z)(o,2),c=a[0],d=a[1],u=(0,l.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),h=(0,s.Z)(u,2),x=h[0],f=h[1],g=(0,l.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),Z=(0,s.Z)(g,2),p=Z[0],j=Z[1],v=(0,l.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),m=(0,s.Z)(v,2),w=m[0],S=m[1],b=(0,l.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),C=(0,s.Z)(b,2),k=C[0],y=C[1],P=(0,l.useCallback)((function(e){""!==e&&(f(c===e&&"asc"===x?"desc":"asc"),d(e))}),[x,c]),R=(0,l.useCallback)((function(e){var n=k.indexOf(e),t=[];-1===n?t=t.concat(k,e):0===n?t=t.concat(k.slice(1)):n===k.length-1?t=t.concat(k.slice(0,-1)):n>0&&(t=t.concat(k.slice(0,n),k.slice(n+1))),y(t)}),[k]),D=(0,l.useCallback)((function(e,n){y(e?n:[])}),[]),_=(0,l.useCallback)((function(e,n){j(n)}),[]),L=(0,l.useCallback)((function(e){j(0),S(parseInt(e.target.value,10))}),[]),B=(0,l.useCallback)((function(e){i(e.target.checked)}),[]);return{dense:r,order:x,page:p,orderBy:c,rowsPerPage:w,selected:k,onSelectRow:R,onSelectAllRows:D,onSort:P,onChangePage:_,onChangeDense:B,onChangeRowsPerPage:L,setPage:j,setDense:i,setOrder:f,setOrderBy:d,setSelected:y,setRowsPerPage:S}}var c=t(60807),d=t(24390),u=t(14133),h=t(80184);function x(e){var n=e.isNotFound;return(0,h.jsx)(c.Z,{children:n?(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsx)(u.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,h.jsx)(d.Z,{colSpan:12,sx:{p:0}})})}var f=t(1413),g=t(36459),Z=t(94162),p=t(91441);function j(e){var n=Object.assign({},((0,g.Z)(e),e));return(0,h.jsx)(c.Z,(0,f.Z)((0,f.Z)({},n),{},{children:(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsxs)(Z.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,h.jsx)(p.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1,flexShrink:0}}),(0,h.jsx)(p.Z,{variant:"text",width:"100%",height:20}),(0,h.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(p.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(p.Z,{variant:"text",width:160,height:20})]})})}))}function v(e){var n=e.emptyRows,t=e.height;return n?(0,h.jsx)(c.Z,{sx:(0,f.Z)({},t&&{height:t*n}),children:(0,h.jsx)(d.Z,{colSpan:9})}):null}var m=t(9827),w=t(45473),S=t(53769),b=t(50228),C={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function k(e){var n=e.order,t=e.orderBy,r=e.rowCount,i=void 0===r?0:r,o=e.headLabel,s=e.numSelected,l=void 0===s?0:s,a=e.onSort,u=e.onSelectAllRows,x=e.sx;return(0,h.jsx)(m.Z,{sx:x,children:(0,h.jsxs)(c.Z,{children:[u&&(0,h.jsx)(d.Z,{padding:"checkbox",children:(0,h.jsx)(w.Z,{indeterminate:l>0&&l<i,checked:i>0&&l===i,onChange:function(e){return u(e.target.checked)}})}),o.map((function(e){return(0,h.jsx)(d.Z,{align:e.align||"left",sortDirection:t===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:a?(0,h.jsxs)(S.Z,{hideSortIcon:!0,active:t===e.id,direction:t===e.id?n:"asc",onClick:function(){return a(e.id)},sx:{textTransform:"capitalize"},children:[e.label,t===e.id?(0,h.jsx)(b.Z,{sx:(0,f.Z)({},C),children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var y=t(45987),P=t(4565),R=["dense","action","rowCount","numSelected","onSelectAllRows","sx"];function D(e){var n=e.dense,t=e.action,r=e.rowCount,i=e.numSelected,o=e.onSelectAllRows,s=e.sx,l=(0,y.Z)(e,R);return i?(0,h.jsxs)(Z.Z,(0,f.Z)((0,f.Z)({direction:"row",alignItems:"center",sx:(0,f.Z)((0,f.Z)({pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter"},n&&{height:38}),s)},l),{},{children:[(0,h.jsx)(w.Z,{indeterminate:i>0&&i<r,checked:r>0&&i===r,onChange:function(e){return o(e.target.checked)}}),(0,h.jsxs)(P.Z,{variant:"subtitle1",sx:(0,f.Z)({ml:2,flexGrow:1,color:"primary.main"},n&&{ml:3}),children:[i," selected"]}),t&&t]})):null}var _=t(27561),L=t(72900),B=t(71770),A=["dense","onChangeDense","rowsPerPageOptions","sx"];function F(e){var n=e.dense,t=e.onChangeDense,r=e.rowsPerPageOptions,i=void 0===r?[5,10,25]:r,o=e.sx,s=(0,y.Z)(e,A);return(0,h.jsxs)(b.Z,{sx:(0,f.Z)({position:"relative"},o),children:[(0,h.jsx)(_.Z,(0,f.Z)({rowsPerPageOptions:i,component:"div"},s)),t&&(0,h.jsx)(L.Z,{label:"Dense",control:(0,h.jsx)(B.Z,{checked:n,onChange:t}),sx:{pl:2,py:1.5,top:0,position:{md:"absolute"}}})]})}},42561:function(e,n,t){t.r(n),t.d(n,{default:function(){return X}});var r=t(93433),i=t(29439),o=t(6907),s=t(31282),l=t(72791),a=t(57689),c=t(11087),d=t(476),u=t(61091),h=t(48928),x=t(69963),f=t(75814),g=t(13811),Z=t(21680),p=t(19773),j=t(9440),v=t(91242),m=t(7055),w=t(15398),S=t(54278),b=t(63402),C=t(53512),k=t(87383),y=t(7456),P=t(81260),R=t(60807),D=t(24390),_=t(45473),L=t(94162),B=t(46283),A=t(35702),F=t(65734),I=t(50289),O=t(35922),W=t(43932),N=t(22734),E=t(80184);function M(e){var n=e.row,t=e.selected,r=e.onSelectRow,o=e.onDeleteRow,s=e.onEditRow,a=e.onViewRow,c=n.name,d=n.coverUrl,h=n.createdAt,x=n.inventoryType,f=n.price,Z=(0,l.useState)(!1),p=(0,i.Z)(Z,2),j=p[0],v=p[1],m=(0,l.useState)(null),w=(0,i.Z)(m,2),S=w[0],C=w[1],k=function(){C(null)};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(R.Z,{hover:!0,selected:t,children:[(0,E.jsx)(D.Z,{padding:"checkbox",children:(0,E.jsx)(_.Z,{checked:t,onClick:r})}),(0,E.jsx)(D.Z,{children:(0,E.jsxs)(L.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,E.jsx)(W.Z,{disabledEffect:!0,visibleByDefault:!0,alt:c,src:d,sx:{borderRadius:1.5,width:48,height:48}}),(0,E.jsx)(B.Z,{noWrap:!0,color:"inherit",variant:"subtitle2",onClick:a,sx:{cursor:"pointer"},children:c})]})}),(0,E.jsx)(D.Z,{children:(0,F.Mu)(h)}),(0,E.jsx)(D.Z,{align:"center",children:(0,E.jsx)(O.Z,{variant:"soft",color:("out_of_stock"===x?"error":"low_stock"===x&&"warning")||"success",sx:{textTransform:"capitalize"},children:x?(0,P.G)(x):""})}),(0,E.jsx)(D.Z,{align:"right",children:(0,I.e_)(f)}),(0,E.jsx)(D.Z,{align:"right",children:(0,E.jsx)(g.Z,{color:S?"primary":"default",onClick:function(e){C(e.currentTarget)},children:(0,E.jsx)(b.Z,{icon:"eva:more-vertical-fill"})})})]}),(0,E.jsxs)(N.Z,{open:S,onClose:k,arrow:"right-top",sx:{width:140},children:[(0,E.jsxs)(A.Z,{onClick:function(){v(!0),k()},sx:{color:"error.main"},children:[(0,E.jsx)(b.Z,{icon:"eva:trash-2-outline"}),"Delete"]}),(0,E.jsxs)(A.Z,{onClick:function(){s(),k()},children:[(0,E.jsx)(b.Z,{icon:"eva:edit-fill"}),"Edit"]})]}),(0,E.jsx)(y.Z,{open:j,onClose:function(){v(!1)},title:"Delete",content:"Are you sure want to delete?",action:(0,E.jsx)(u.Z,{variant:"contained",color:"error",onClick:o,children:"Delete"})})]})}var T=t(81898),z=t(40508),G=t(81346),Q=t(96746),K=t(59911),U=t(38254);function V(e){var n=e.isFiltered,t=e.filterName,r=e.filterStatus,i=e.onFilterName,o=e.statusOptions,s=e.onResetFilter,l=e.onFilterStatus;return(0,E.jsxs)(L.Z,{spacing:2,alignItems:"center",direction:{xs:"column",md:"row"},sx:{px:2.5,py:3},children:[(0,E.jsxs)(T.Z,{sx:{width:{xs:1,md:240}},children:[(0,E.jsx)(z.Z,{sx:{"&.Mui-focused":{color:"text.primary"}},children:"Status"}),(0,E.jsx)(G.Z,{multiple:!0,value:r,onChange:l,input:(0,E.jsx)(Q.Z,{label:"Status"}),renderValue:function(e){return e.map((function(e){return(0,P.G)(e)})).join(", ")},children:o.map((function(e){return(0,E.jsxs)(A.Z,{value:e.value,sx:{p:0,mx:1,borderRadius:.75,typography:"body2",textTransform:"capitalize"},children:[(0,E.jsx)(_.Z,{disableRipple:!0,size:"small",checked:r.includes(e.value)}),e.label]},e.value)}))})]}),(0,E.jsx)(K.Z,{fullWidth:!0,value:t,onChange:i,placeholder:"Search...",InputProps:{startAdornment:(0,E.jsx)(U.Z,{position:"start",children:(0,E.jsx)(b.Z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),n&&(0,E.jsx)(u.Z,{color:"error",sx:{flexShrink:0},onClick:s,startIcon:(0,E.jsx)(b.Z,{icon:"eva:trash-2-outline"}),children:"Clear"})]})}var $=[{id:"name",label:"Product",align:"left"},{id:"createdAt",label:"Create at",align:"left"},{id:"inventoryType",label:"Status",align:"center",width:180},{id:"price",label:"Price",align:"right"},{id:""}],q=[{value:"in_stock",label:"In stock"},{value:"low_stock",label:"Low stock"},{value:"out_of_stock",label:"Out of stock"}];function X(){var e=(0,S.x6)({defaultOrderBy:"createdAt"}),n=e.dense,t=e.page,P=e.order,R=e.orderBy,D=e.rowsPerPage,_=e.setPage,L=e.selected,B=e.setSelected,A=e.onSelectRow,F=e.onSelectAllRows,I=e.onSort,O=e.onChangeDense,W=e.onChangePage,N=e.onChangeRowsPerPage,T=(0,w.K$)().themeStretch,z=(0,a.s0)(),G=(0,j.I0)(),Q=(0,j.v9)((function(e){return e.product})),K=Q.products,U=Q.isLoading,X=(0,l.useState)([]),H=(0,i.Z)(X,2),J=H[0],Y=H[1],ee=(0,l.useState)(""),ne=(0,i.Z)(ee,2),te=ne[0],re=ne[1],ie=(0,l.useState)([]),oe=(0,i.Z)(ie,2),se=oe[0],le=oe[1],ae=(0,l.useState)(!1),ce=(0,i.Z)(ae,2),de=ce[0],ue=ce[1];(0,l.useEffect)((function(){G((0,v.Xp)())}),[G]),(0,l.useEffect)((function(){K.length&&Y(K)}),[K]);var he=function(e){var n=e.inputData,t=e.comparator,r=e.filterName,i=e.filterStatus,o=n.map((function(e,n){return[e,n]}));o.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n=o.map((function(e){return e[0]})),r&&(n=n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(r.toLowerCase())})));i.length&&(n=n.filter((function(e){return i.includes(e.inventoryType)})));return n}({inputData:J,comparator:(0,S.sQ)(P,R),filterName:te,filterStatus:se}),xe=he.slice(t*D,t*D+D),fe=n?60:80,ge=""!==te||!!se.length,Ze=!he.length&&!!te||!U&&!he.length,pe=function(){ue(!1)};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(o.ql,{children:(0,E.jsx)("title",{children:" Ecommerce: Product List | Laicos"})}),(0,E.jsxs)(d.Z,{maxWidth:!T&&"lg",children:[(0,E.jsx)(k.Z,{heading:"Product List",links:[{name:"Dashboard",href:m.vB.root},{name:"E-Commerce",href:m.vB.dn404.root},{name:"List"}],action:(0,E.jsx)(u.Z,{component:c.rU,to:m.vB.dn404.new,variant:"contained",startIcon:(0,E.jsx)(b.Z,{icon:"eva:plus-fill"}),children:"New Product"})}),(0,E.jsxs)(h.Z,{children:[(0,E.jsx)(V,{filterName:te,filterStatus:se,onFilterName:function(e){_(0),re(e.target.value)},onFilterStatus:function(e){var n=e.target.value;_(0),le("string"===typeof n?n.split(","):n)},statusOptions:q,isFiltered:ge,onResetFilter:function(){re(""),le([])}}),(0,E.jsxs)(x.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,E.jsx)(S.Z4,{dense:n,numSelected:L.length,rowCount:J.length,onSelectAllRows:function(e){return F(e,J.map((function(e){return e.id})))},action:(0,E.jsx)(f.Z,{title:"Delete",children:(0,E.jsx)(g.Z,{color:"primary",onClick:function(){ue(!0)},children:(0,E.jsx)(b.Z,{icon:"eva:trash-2-outline"})})})}),(0,E.jsx)(C.Z,{children:(0,E.jsxs)(Z.Z,{size:n?"small":"medium",sx:{minWidth:960},children:[(0,E.jsx)(S.K,{order:P,orderBy:R,headLabel:$,rowCount:J.length,numSelected:L.length,onSort:I,onSelectAllRows:function(e){return F(e,J.map((function(e){return e.id})))}}),(0,E.jsxs)(p.Z,{children:[(U?(0,r.Z)(Array(D)):he).slice(t*D,t*D+D).map((function(e,n){return e?(0,E.jsx)(M,{row:e,selected:L.includes(e.id),onSelectRow:function(){return A(e.id)},onDeleteRow:function(){return function(e){var n=J.filter((function(n){return n.id!==e}));B([]),Y(n),t>0&&xe.length<2&&_(t-1)}(e.id)},onEditRow:function(){return n=e.name,void z(m.vB.dn404.edit((0,s.o)(n)));var n},onViewRow:function(){return n=e.name,void z(m.vB.dn404.view((0,s.o)(n)));var n}},e.id):!Ze&&(0,E.jsx)(S.hM,{sx:{height:fe}},n)})),(0,E.jsx)(S.$W,{height:fe,emptyRows:(0,S.fQ)(t,D,J.length)}),(0,E.jsx)(S.et,{isNotFound:Ze})]})]})})]}),(0,E.jsx)(S.S_,{count:he.length,page:t,rowsPerPage:D,onPageChange:W,onRowsPerPageChange:N,dense:n,onChangeDense:O})]})]}),(0,E.jsx)(y.Z,{open:de,onClose:pe,title:"Delete",content:(0,E.jsxs)(E.Fragment,{children:["Are you sure want to delete ",(0,E.jsxs)("strong",{children:[" ",L.length," "]})," items?"]}),action:(0,E.jsx)(u.Z,{variant:"contained",color:"error",onClick:function(){!function(e){var n=J.filter((function(n){return!e.includes(n.id)}));if(B([]),Y(n),t>0)if(e.length===xe.length)_(t-1);else if(e.length===he.length)_(0);else if(e.length>xe.length){var r=Math.ceil((J.length-e.length)/D)-1;_(r)}}(L),pe()},children:"Delete"})})]})}}}]);
//# sourceMappingURL=2561.af143449.chunk.js.map