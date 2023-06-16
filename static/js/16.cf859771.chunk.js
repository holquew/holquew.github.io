(this["webpackJsonphq-calculator"]=this["webpackJsonphq-calculator"]||[]).push([[16],{132:function(e,t,a){"use strict";var o=a(7),c=a(4),n=a(1),i=a(0),r=(a(8),a(66)),l=a(201),s=a(63),d=a(65),b=a(67),p=a(233),u=a(68),j=a(202),m=a(203);function O(e){return Object(j.a)("MuiButton",e)}var h=Object(m.a)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),v=a(3),x=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],f=function(e){return Object(n.a)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},g=Object(d.a)(p.a,{shouldForwardProp:function(e){return Object(d.b)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(n.a)({},t.root,t[a.variant],t["".concat(a.variant).concat(Object(u.a)(a.color))],t["size".concat(Object(u.a)(a.size))],t["".concat(a.variant,"Size").concat(Object(u.a)(a.size))],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth)}})((function(e){var t,a=e.theme,c=e.styleProps;return Object(n.a)({},a.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:a.shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":Object(n.a)({textDecoration:"none",backgroundColor:Object(s.a)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:Object(s.a)(a.palette[c.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat(a.palette[c.color].main),backgroundColor:Object(s.a)(a.palette[c.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:a.palette.grey.A100,boxShadow:a.shadows[4],"@media (hover: none)":{boxShadow:a.shadows[2],backgroundColor:a.palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:a.palette[c.color].dark,"@media (hover: none)":{backgroundColor:a.palette[c.color].main}}),"&:active":Object(n.a)({},"contained"===c.variant&&{boxShadow:a.shadows[8]})},Object(o.a)(t,"&.".concat(h.focusVisible),Object(n.a)({},"contained"===c.variant&&{boxShadow:a.shadows[6]})),Object(o.a)(t,"&.".concat(h.disabled),Object(n.a)({color:a.palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat(a.palette.action.disabledBackground)},"outlined"===c.variant&&"secondary"===c.color&&{border:"1px solid ".concat(a.palette.action.disabled)},"contained"===c.variant&&{color:a.palette.action.disabled,boxShadow:a.shadows[0],backgroundColor:a.palette.action.disabledBackground})),t),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:a.palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===a.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===c.variant&&"inherit"!==c.color&&{color:a.palette[c.color].main,border:"1px solid ".concat(Object(s.a)(a.palette[c.color].main,.5))},"contained"===c.variant&&{color:a.palette.getContrastText(a.palette.grey[300]),backgroundColor:a.palette.grey[300],boxShadow:a.shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:a.palette[c.color].contrastText,backgroundColor:a.palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:a.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:a.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:a.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:a.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:a.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:a.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(e){var t;return e.styleProps.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},Object(o.a)(t,"&.".concat(h.focusVisible),{boxShadow:"none"}),Object(o.a)(t,"&:active",{boxShadow:"none"}),Object(o.a)(t,"&.".concat(h.disabled),{boxShadow:"none"}),t)})),y=Object(d.a)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var a=e.styleProps;return Object(n.a)({},t.startIcon,t["iconSize".concat(Object(u.a)(a.size))])}})((function(e){var t=e.styleProps;return Object(n.a)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},f(t))})),S=Object(d.a)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var a=e.styleProps;return Object(n.a)({},t.endIcon,t["iconSize".concat(Object(u.a)(a.size))])}})((function(e){var t=e.styleProps;return Object(n.a)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},f(t))})),C=i.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiButton"}),o=a.children,i=a.color,s=void 0===i?"primary":i,d=a.component,p=void 0===d?"button":d,j=a.disabled,m=void 0!==j&&j,h=a.disableElevation,f=void 0!==h&&h,C=a.disableFocusRipple,k=void 0!==C&&C,z=a.endIcon,I=a.focusVisibleClassName,R=a.fullWidth,w=void 0!==R&&R,P=a.size,W=void 0===P?"medium":P,L=a.startIcon,M=a.type,N=a.variant,T=void 0===N?"text":N,V=Object(c.a)(a,x),E=Object(n.a)({},a,{color:s,component:p,disabled:m,disableElevation:f,disableFocusRipple:k,fullWidth:w,size:W,type:M,variant:T}),D=function(e){var t=e.color,a=e.disableElevation,o=e.fullWidth,c=e.size,i=e.variant,r=e.classes,s={root:["root",i,"".concat(i).concat(Object(u.a)(t)),"size".concat(Object(u.a)(c)),"".concat(i,"Size").concat(Object(u.a)(c)),"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(Object(u.a)(c))],endIcon:["endIcon","iconSize".concat(Object(u.a)(c))]},d=Object(l.a)(s,O,r);return Object(n.a)({},r,d)}(E),B=L&&Object(v.jsx)(y,{className:D.startIcon,styleProps:E,children:L}),G=z&&Object(v.jsx)(S,{className:D.endIcon,styleProps:E,children:z});return Object(v.jsxs)(g,Object(n.a)({styleProps:E,component:p,disabled:m,focusRipple:!k,focusVisibleClassName:Object(r.a)(D.focusVisible,I),ref:t,type:M},V,{classes:D,children:[B,o,G]}))}));t.a=C},160:function(e,t,a){"use strict";var o=a(7),c=a(4),n=a(1),i=a(0),r=(a(8),a(66)),l=a(201),s=a(67),d=a(65),b=a(202),p=a(203);function u(e){return Object(b.a)("MuiContainer",e)}Object(p.a)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var j=a(68),m=a(3),O=["className","component","disableGutters","fixed","maxWidth"],h=Object(d.a)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(n.a)({},t.root,t["maxWidth".concat(Object(j.a)(String(a.maxWidth)))],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters)}})((function(e){var t=e.theme,a=e.styleProps;return Object(n.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&Object(o.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.styleProps.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,a){var o=t.breakpoints.values[a];return 0!==o&&(e[t.breakpoints.up(a)]={maxWidth:"".concat(o).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,a=e.styleProps;return Object(n.a)({},"xs"===a.maxWidth&&Object(o.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),a.maxWidth&&"xs"!==a.maxWidth&&Object(o.a)({},t.breakpoints.up(a.maxWidth),{maxWidth:"".concat(t.breakpoints.values[a.maxWidth]).concat(t.breakpoints.unit)}))})),v=i.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiContainer"}),o=a.className,i=a.component,d=void 0===i?"div":i,b=a.disableGutters,p=void 0!==b&&b,v=a.fixed,x=void 0!==v&&v,f=a.maxWidth,g=void 0===f?"lg":f,y=Object(c.a)(a,O),S=Object(n.a)({},a,{component:d,disableGutters:p,fixed:x,maxWidth:g}),C=function(e){var t=e.classes,a=e.fixed,o=e.disableGutters,c=e.maxWidth,n={root:["root",c&&"maxWidth".concat(Object(j.a)(String(c))),a&&"fixed",o&&"disableGutters"]};return Object(l.a)(n,u,t)}(S);return Object(m.jsx)(h,Object(n.a)({as:d,styleProps:S,className:Object(r.a)(C.root,o),ref:t},y))}));t.a=v},223:function(e,t,a){"use strict";a.r(t);var o=a(20),c=a(0),n=a(245),i=a(132),r=a(240),l=a(160),s=a(249),d=a(231),b=a(71),p=a(3);t.default=function(){var e=Object(c.useState)({name:"\ubca0\ud2b8\ub0a8",currency:"VND"}),t=Object(o.a)(e,1)[0],a=Object(c.useState)({name:"\ub300\ud55c\ubbfc\uad6d",currency:"KRW"}),u=Object(o.a)(a,1)[0],j=Object(c.useState)(.054),m=Object(o.a)(j,2),O=m[0],h=m[1],v=Object(c.useState)(),x=Object(o.a)(v,2),f=x[0],g=x[1],y=Object(c.useState)(),S=Object(o.a)(y,2),C=S[0],k=S[1],z=Object(c.useState)(!1),I=Object(o.a)(z,2),R=I[0],w=I[1],P=Object(c.useCallback)((function(e){g(e.target.value)}),[]),W=Object(c.useCallback)((function(e){var t=parseFloat(e.target.value);h(t)}),[]),L=Object(c.useCallback)((function(){w((function(e){return!e}))}),[]),M=Object(c.useCallback)((function(){w(!1),h(.054),g(""),k("")}),[]);return Object(c.useEffect)((function(){if(f){var e=(f*O).toLocaleString();k(e)}}),[f,O]),Object(p.jsxs)(n.a,{children:[Object(p.jsx)(i.a,{variant:"contained",color:"primary",sx:{mr:1,mb:1,float:"right",marginRight:"20px"},onClick:M,children:"Set to default"}),Object(p.jsxs)(r.a,{container:!0,spacing:0,children:[Object(p.jsx)(r.a,{item:!0,xs:12,lg:12,sm:12,sx:{display:"flex",alignItems:"stretch"},children:Object(p.jsx)(b.a,{title:"\uc801\uc6a9 \ud658\uc728",children:Object(p.jsxs)(n.a,{children:[t.name," 1 ",t.currency," ",Object(p.jsx)("br",{}),Object(p.jsxs)(l.a,{sx:{display:"flex",justifyContent:"space-between"},children:[R?Object(p.jsx)(s.a,{id:"exchange-rate",label:"\uc801\uc6a9 \ud658\uc728",type:"number",fullWidth:!0,value:O,onChange:W}):Object(p.jsxs)(n.a,{sx:{marginTop:"10px",fontSize:"20px"},children:["= ",u.name," ",O," ",u.currency]}),Object(p.jsx)(i.a,{variant:"outlined",color:"primary",sx:{mr:1,mb:{xs:1,sm:0,lg:0}},onClick:L,children:R?"\uc800\uc7a5":"\uc218\uc815"})]})]})})}),Object(p.jsx)(r.a,{item:!0,xs:12,lg:6,sm:6,sx:{display:"flex",alignItems:"stretch"},children:Object(p.jsx)(b.a,{title:"\uc5bc\ub9c8\uc784?",children:Object(p.jsx)(d.a,{id:"source",label:"".concat(t.name," \ub3c8"),type:"number",fullWidth:!0,value:f,onChange:P,InputLabelProps:{shrink:!0}})})}),Object(p.jsx)(r.a,{item:!0,xs:12,lg:6,sm:6,sx:{display:"flex",alignItems:"stretch"},children:Object(p.jsxs)(b.a,{title:"\uc774\uac70\uc784.",children:[Object(p.jsxs)(n.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(p.jsxs)("h3",{children:[f?parseFloat(f).toLocaleString():"0"," "]}),Object(p.jsx)("h3",{children:t.currency})]}),Object(p.jsxs)(n.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(p.jsxs)("h3",{children:[C||"0"," "]}),Object(p.jsx)("h3",{children:u.currency})]})]})})]})]})}},71:function(e,t,a){"use strict";a(0);var o=a(161),c=a(245),n=a(247),i=a(96),r=a(224),l=a(162),s=a(3);t.a=function(e){return Object(s.jsxs)(o.a,{variant:"outlined",sx:{p:0,width:"100%"},children:[Object(s.jsxs)(c.a,{p:2,display:"flex",alignItems:"center",children:[Object(s.jsx)(c.a,{children:Object(s.jsx)(n.a,{variant:"h4",children:e.title})}),e.chiptitle?Object(s.jsx)(i.a,{label:e.chiptitle,size:"small",sx:{ml:"auto",fontSize:"12px",fontWeight:"500"}}):""]}),Object(s.jsx)(r.a,{}),Object(s.jsx)(l.a,{children:e.children})]})}},96:function(e,t,a){"use strict";var o=a(7),c=a(4),n=a(1),i=a(0),r=(a(8),a(66)),l=a(201),s=a(63),d=a(70),b=a(3),p=Object(d.a)(Object(b.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),u=a(69),j=a(68),m=a(233),O=a(67),h=a(65),v=a(202),x=a(203);function f(e){return Object(v.a)("MuiChip",e)}var g=Object(x.a)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),y=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],S=Object(h.a)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,t){var a,c=e.styleProps,i=c.color,r=c.clickable,l=c.onDelete,s=c.size,d=c.variant;return Object(n.a)((a={},Object(o.a)(a,"& .".concat(g.avatar),Object(n.a)({},t.avatar,t["avatar".concat(Object(j.a)(s))],t["avatarColor".concat(Object(j.a)(i))])),Object(o.a)(a,"& .".concat(g.icon),Object(n.a)({},t.icon,t["icon".concat(Object(j.a)(s))],t["iconColor".concat(Object(j.a)(i))])),Object(o.a)(a,"& .".concat(g.deleteIcon),Object(n.a)({},t.deleteIcon,t["deleteIcon".concat(Object(j.a)(s))],t["deleteIconColor".concat(Object(j.a)(i))],t["deleteIconOutlinedColor".concat(Object(j.a)(i))])),a),t.root,t["size".concat(Object(j.a)(s))],t["color".concat(Object(j.a)(i))],r&&t.clickable,r&&"default"!==i&&t["clickableColor".concat(Object(j.a)(i),")")],l&&t.deletable,l&&"default"!==i&&t["deletableColor".concat(Object(j.a)(i))],t[d],"outlined"===d&&t["outlined".concat(Object(j.a)(i))])}})((function(e){var t,a=e.theme,c=e.styleProps,i=Object(s.a)(a.palette.text.primary,.26);return Object(n.a)((t={fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:a.palette.text.primary,backgroundColor:a.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},Object(o.a)(t,"&.".concat(g.disabled),{opacity:a.palette.action.disabledOpacity,pointerEvents:"none"}),Object(o.a)(t,"& .".concat(g.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],fontSize:a.typography.pxToRem(12)}),Object(o.a)(t,"& .".concat(g.avatarColorPrimary),{color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark}),Object(o.a)(t,"& .".concat(g.avatarColorSecondary),{color:a.palette.secondary.contrastText,backgroundColor:a.palette.secondary.dark}),Object(o.a)(t,"& .".concat(g.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)}),Object(o.a)(t,"& .".concat(g.icon),Object(n.a)({color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],marginLeft:5,marginRight:-6},"small"===c.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==c.color&&{color:"inherit"})),Object(o.a)(t,"& .".concat(g.deleteIcon),Object(n.a)({WebkitTapHighlightColor:"transparent",color:i,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(s.a)(i,.4)}},"small"===c.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==c.color&&{color:Object(s.a)(a.palette[c.color].contrastText,.7),"&:hover, &:active":{color:a.palette[c.color].contrastText}})),t),"small"===c.size&&{height:24},"default"!==c.color&&{backgroundColor:a.palette[c.color].main,color:a.palette[c.color].contrastText},c.onDelete&&Object(o.a)({},"&.".concat(g.focusVisible),{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),c.onDelete&&"default"!==c.color&&Object(o.a)({},"&.".concat(g.focusVisible),{backgroundColor:a.palette[c.color].dark}))}),(function(e){var t,a=e.theme,c=e.styleProps;return Object(n.a)({},c.clickable&&(t={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}},Object(o.a)(t,"&.".concat(g.focusVisible),{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),Object(o.a)(t,"&:active",{boxShadow:a.shadows[1]}),t),c.clickable&&"default"!==c.color&&Object(o.a)({},"&:hover, &.".concat(g.focusVisible),{backgroundColor:a.palette[c.color].dark}))}),(function(e){var t,a,c=e.theme,i=e.styleProps;return Object(n.a)({},"outlined"===i.variant&&(t={backgroundColor:"transparent",border:"1px solid ".concat("light"===c.palette.mode?c.palette.grey[400]:c.palette.grey[700])},Object(o.a)(t,"&.".concat(g.clickable,":hover"),{backgroundColor:c.palette.action.hover}),Object(o.a)(t,"&.".concat(g.focusVisible),{backgroundColor:c.palette.action.focus}),Object(o.a)(t,"& .".concat(g.avatar),{marginLeft:4}),Object(o.a)(t,"& .".concat(g.avatarSmall),{marginLeft:2}),Object(o.a)(t,"& .".concat(g.icon),{marginLeft:4}),Object(o.a)(t,"& .".concat(g.iconSmall),{marginLeft:2}),Object(o.a)(t,"& .".concat(g.deleteIcon),{marginRight:5}),Object(o.a)(t,"& .".concat(g.deleteIconSmall),{marginRight:3}),t),"outlined"===i.variant&&"default"!==i.color&&(a={color:c.palette[i.color].main,border:"1px solid ".concat(Object(s.a)(c.palette[i.color].main,.7))},Object(o.a)(a,"&.".concat(g.clickable,":hover"),{backgroundColor:Object(s.a)(c.palette[i.color].main,c.palette.action.hoverOpacity)}),Object(o.a)(a,"&.".concat(g.focusVisible),{backgroundColor:Object(s.a)(c.palette[i.color].main,c.palette.action.focusOpacity)}),Object(o.a)(a,"& .".concat(g.deleteIcon),{color:Object(s.a)(c.palette[i.color].main,.7),"&:hover, &:active":{color:c.palette[i.color].main}}),a))})),C=Object(h.a)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,t){var a=e.styleProps.size;return Object(n.a)({},t.label,t["label".concat(Object(j.a)(a))])}})((function(e){var t=e.styleProps;return Object(n.a)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===t.size&&{paddingLeft:8,paddingRight:8})}));function k(e){return"Backspace"===e.key||"Delete"===e.key}var z=i.forwardRef((function(e,t){var a=Object(O.a)({props:e,name:"MuiChip"}),o=a.avatar,s=a.className,d=a.clickable,h=a.color,v=void 0===h?"default":h,x=a.component,g=a.deleteIcon,z=a.disabled,I=void 0!==z&&z,R=a.icon,w=a.label,P=a.onClick,W=a.onDelete,L=a.onKeyDown,M=a.onKeyUp,N=a.size,T=void 0===N?"medium":N,V=a.variant,E=void 0===V?"filled":V,D=Object(c.a)(a,y),B=i.useRef(null),G=Object(u.a)(B,t),F=function(e){e.stopPropagation(),W&&W(e)},K=!(!1===d||!P)||d,U="small"===T,q=K||W?m.a:x||"div",A=Object(n.a)({},a,{component:q,disabled:I,size:T,color:v,onDelete:!!W,clickable:K,variant:E}),H=function(e){var t=e.classes,a=e.disabled,o=e.size,c=e.color,n=e.onDelete,i=e.clickable,r=e.variant,s={root:["root",r,a&&"disabled","size".concat(Object(j.a)(o)),"color".concat(Object(j.a)(c)),i&&"clickable",i&&"clickableColor".concat(Object(j.a)(c)),n&&"deletable",n&&"deletableColor".concat(Object(j.a)(c)),"".concat(r).concat(Object(j.a)(c))],label:["label","label".concat(Object(j.a)(o))],avatar:["avatar","avatar".concat(Object(j.a)(o)),"avatarColor".concat(Object(j.a)(c))],icon:["icon","icon".concat(Object(j.a)(o)),"iconColor".concat(Object(j.a)(c))],deleteIcon:["deleteIcon","deleteIcon".concat(Object(j.a)(o)),"deleteIconColor".concat(Object(j.a)(c)),"deleteIconOutlinedColor".concat(Object(j.a)(c))]};return Object(l.a)(s,f,t)}(A),J=q===m.a?{component:x||"div",focusVisibleClassName:H.focusVisible,disableRipple:Boolean(W)}:{},X=null;if(W){var Q=Object(r.a)("default"!==v&&("outlined"===E?H["deleteIconOutlinedColor".concat(Object(j.a)(v))]:H["deleteIconColor".concat(Object(j.a)(v))]),U&&H.deleteIconSmall);X=g&&i.isValidElement(g)?i.cloneElement(g,{className:Object(r.a)(g.props.className,H.deleteIcon,Q),onClick:F}):Object(b.jsx)(p,{className:Object(r.a)(H.deleteIcon,Q),onClick:F})}var Y=null;o&&i.isValidElement(o)&&(Y=i.cloneElement(o,{className:Object(r.a)(H.avatar,o.props.className)}));var Z=null;return R&&i.isValidElement(R)&&(Z=i.cloneElement(R,{className:Object(r.a)(H.icon,R.props.className)})),Object(b.jsxs)(S,Object(n.a)({as:q,className:Object(r.a)(H.root,s),disabled:!(!K||!I)||void 0,onClick:P,onKeyDown:function(e){e.currentTarget===e.target&&k(e)&&e.preventDefault(),L&&L(e)},onKeyUp:function(e){e.currentTarget===e.target&&(W&&k(e)?W(e):"Escape"===e.key&&B.current&&B.current.blur()),M&&M(e)},ref:G,styleProps:A},J,D,{children:[Y||Z,Object(b.jsx)(C,{className:Object(r.a)(H.label),styleProps:A,children:w}),X]}))}));t.a=z}}]);
//# sourceMappingURL=16.cf859771.chunk.js.map