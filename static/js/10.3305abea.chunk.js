(this["webpackJsonphq-calculator"]=this["webpackJsonphq-calculator"]||[]).push([[10],{107:function(e,t,a){"use strict";function o(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return null==t?e:function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];e.apply(this,o),t.apply(this,o)}}),(function(){}))}a.d(t,"a",(function(){return o}))},108:function(e,t,a){"use strict";t.a=function(e){return"string"===typeof e}},112:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var o=a(95);function r(e){return Object(o.a)(e).defaultView||window}},157:function(e,t,a){"use strict";var o=a(76);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(77)),n=a(3),c=(0,r.default)((0,n.jsx)("path",{d:"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"}),"VolumeDown");t.default=c},158:function(e,t,a){"use strict";var o=a(76);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(77)),n=a(3),c=(0,r.default)((0,n.jsx)("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),"VolumeUp");t.default=c},238:function(e,t,a){"use strict";var o=a(7),r=a(22),n=a(4),c=a(1),i=a(0),l=a(8),s=a.n(l),u=a(66),d=a(203),b=a(108),p=a(202);function m(e){return Object(p.a)("MuiSlider",e)}var v=Object(d.a)("MuiSlider",["root","active","focusVisible","disabled","dragging","marked","vertical","trackInverted","trackFalse","rail","track","mark","markActive","markLabel","markLabelActive","thumb","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel"]),f=a(3);var O=function(e){var t=e.children,a=e.className,o=e.value,r=e.theme,n=function(e){var t=e.open;return{offset:Object(u.a)(t&&v.valueLabelOpen),circle:v.valueLabelCircle,label:v.valueLabelLabel}}(e);return i.cloneElement(t,{className:Object(u.a)(t.props.className)},Object(f.jsxs)(i.Fragment,{children:[t.props.children,Object(f.jsx)("span",{className:Object(u.a)(n.offset,a),theme:r,"aria-hidden":!0,children:Object(f.jsx)("span",{className:n.circle,children:Object(f.jsx)("span",{className:n.label,children:o})})})]}))},j=a(20),h=a(95),g=a(147),y=a(205),x=a(207),k=a(206),C=a(144),w={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},L=a(201),S=["aria-label","aria-labelledby","aria-valuetext","className","component","classes","defaultValue","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","scale","step","tabIndex","track","value","valueLabelDisplay","valueLabelFormat","isRtl","components","componentsProps"];function z(e,t){return e-t}function P(e,t,a){return null==e?t:Math.min(Math.max(t,e),a)}function R(e,t){return e.reduce((function(e,a,o){var r=Math.abs(t-a);return null===e||r<e.distance||r===e.distance?{distance:r,index:o}:e}),null).index}function I(e,t){if(void 0!==t.current&&e.changedTouches){for(var a=0;a<e.changedTouches.length;a+=1){var o=e.changedTouches[a];if(o.identifier===t.current)return{x:o.clientX,y:o.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function M(e,t,a){return 100*(e-t)/(a-t)}function V(e,t,a){var o=Math.round((e-a)/t)*t+a;return Number(o.toFixed(function(e){if(Math.abs(e)<1){var t=e.toExponential().split("e-"),a=t[0].split(".")[1];return(a?a.length:0)+parseInt(t[1],10)}var o=e.toString().split(".")[1];return o?o.length:0}(t)))}function N(e){var t=e.values,a=e.source,o=e.newValue,r=e.index;if(a[r]===o)return a;var n=t.slice();return n[r]=o,n}function T(e){var t=e.sliderRef,a=e.activeIndex,o=e.setActive,r=Object(h.a)(t.current);t.current.contains(r.activeElement)&&Number(r.activeElement.getAttribute("data-index"))===a||t.current.querySelector('[type="range"][data-index="'.concat(a,'"]')).focus(),o&&o(a)}var A,E={horizontal:{offset:function(e){return{left:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},"horizontal-reverse":{offset:function(e){return{right:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},vertical:{offset:function(e){return{bottom:"".concat(e,"%")}},leap:function(e){return{height:"".concat(e,"%")}}}},D=function(e){return e};function F(){if(void 0===A){var e=document.createElement("div");e.style.touchAction="none",document.body.appendChild(e),A="none"===window.getComputedStyle(e).touchAction,e.parentElement.removeChild(e)}return A}var _=function(e){return e.children},Y=i.forwardRef((function(e,t){var a=e["aria-label"],o=e["aria-labelledby"],l=e["aria-valuetext"],s=e.className,d=e.component,p=void 0===d?"span":d,v=e.classes,A=e.defaultValue,Y=e.disableSwap,B=void 0!==Y&&Y,K=e.disabled,q=void 0!==K&&K,H=e.getAriaLabel,W=e.getAriaValueText,X=e.marks,U=void 0!==X&&X,J=e.max,G=void 0===J?100:J,Q=e.min,Z=void 0===Q?0:Q,$=e.name,ee=e.onChange,te=e.onChangeCommitted,ae=e.onMouseDown,oe=e.orientation,re=void 0===oe?"horizontal":oe,ne=e.scale,ce=void 0===ne?D:ne,ie=e.step,le=void 0===ie?1:ie,se=e.tabIndex,ue=e.track,de=void 0===ue?"normal":ue,be=e.value,pe=e.valueLabelDisplay,me=void 0===pe?"off":pe,ve=e.valueLabelFormat,fe=void 0===ve?D:ve,Oe=e.isRtl,je=void 0!==Oe&&Oe,he=e.components,ge=void 0===he?{}:he,ye=e.componentsProps,xe=void 0===ye?{}:ye,ke=Object(n.a)(e,S),Ce=i.useRef(),we=i.useState(-1),Le=Object(j.a)(we,2),Se=Le[0],ze=Le[1],Pe=i.useState(-1),Re=Object(j.a)(Pe,2),Ie=Re[0],Me=Re[1],Ve=i.useState(!1),Ne=Object(j.a)(Ve,2),Te=Ne[0],Ae=Ne[1],Ee=i.useRef(0),De=Object(g.a)({controlled:be,default:null!=A?A:Z,name:"Slider"}),Fe=Object(j.a)(De,2),_e=Fe[0],Ye=Fe[1],Be=ee&&function(e,t,a){var o=e.nativeEvent||e,r=new o.constructor(o.type,o);Object.defineProperty(r,"target",{writable:!0,value:{value:t,name:$}}),ee(r,t,a)},Ke=Array.isArray(_e),qe=Ke?_e.slice().sort(z):[_e];qe=qe.map((function(e){return P(e,Z,G)}));var He=!0===U&&null!==le?Object(r.a)(Array(Math.floor((G-Z)/le)+1)).map((function(e,t){return{value:Z+le*t}})):U||[],We=Object(y.a)(),Xe=We.isFocusVisibleRef,Ue=We.onBlur,Je=We.onFocus,Ge=We.ref,Qe=i.useState(-1),Ze=Object(j.a)(Qe,2),$e=Ze[0],et=Ze[1],tt=i.useRef(),at=Object(x.a)(Ge,tt),ot=Object(x.a)(t,at),rt=Object(k.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));Je(e),!0===Xe.current&&et(t),Me(t)})),nt=Object(k.a)((function(e){Ue(e),!1===Xe.current&&et(-1),Me(-1)})),ct=Object(k.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));Me(t)})),it=Object(k.a)((function(){Me(-1)}));Object(C.a)((function(){q&&tt.current.contains(document.activeElement)&&document.activeElement.blur()}),[q]),q&&-1!==Se&&ze(-1),q&&-1!==$e&&et(-1);var lt=Object(k.a)((function(e){var t=Number(e.currentTarget.getAttribute("data-index")),a=qe[t],o=He.map((function(e){return e.value})),r=o.indexOf(a),n=e.target.valueAsNumber;if(He&&null==le&&(n=n<a?o[r-1]:o[r+1]),n=P(n,Z,G),He&&null==le){var c=He.map((function(e){return e.value})),i=c.indexOf(qe[t]);n=n<qe[t]?c[i-1]:c[i+1]}if(Ke){B&&(n=P(n,qe[t-1]||-1/0,qe[t+1]||1/0));var l=n;n=N({values:qe,source:_e,newValue:n,index:t}).sort(z);var s=t;B||(s=n.indexOf(l)),T({sliderRef:tt,activeIndex:s})}Ye(n),et(t),Be&&Be(e,n,t),te&&te(e,n)})),st=i.useRef(),ut=re;je&&"vertical"!==re&&(ut+="-reverse");var dt=function(e){var t,a,o=e.finger,r=e.move,n=void 0!==r&&r,c=e.values,i=e.source,l=tt.current.getBoundingClientRect(),s=l.width,u=l.height,d=l.bottom,b=l.left;if(t=0===ut.indexOf("vertical")?(d-o.y)/u:(o.x-b)/s,-1!==ut.indexOf("-reverse")&&(t=1-t),a=function(e,t,a){return(a-t)*e+t}(t,Z,G),le)a=V(a,le,Z);else{var p=He.map((function(e){return e.value}));a=p[R(p,a)]}a=P(a,Z,G);var m=0;if(Ke){m=n?st.current:R(c,a),B&&(a=P(a,c[m-1]||-1/0,c[m+1]||1/0));var v=a;a=N({values:c,source:i,newValue:a,index:m}).sort(z),B&&n||(m=a.indexOf(v),st.current=m)}return{newValue:a,activeIndex:m}},bt=Object(k.a)((function(e){var t=I(e,Ce);if(t)if(Ee.current+=1,"mousemove"!==e.type||0!==e.buttons){var a=dt({finger:t,move:!0,values:qe,source:_e}),o=a.newValue,r=a.activeIndex;T({sliderRef:tt,activeIndex:r,setActive:ze}),Ye(o),!Te&&Ee.current>2&&Ae(!0),Be&&Be(e,o,r)}else pt(e)})),pt=Object(k.a)((function(e){var t=I(e,Ce);if(Ae(!1),t){var a=dt({finger:t,values:qe,source:_e}).newValue;ze(-1),"touchend"===e.type&&Me(-1),te&&te(e,a),Ce.current=void 0,vt()}})),mt=Object(k.a)((function(e){F()||e.preventDefault();var t=e.changedTouches[0];null!=t&&(Ce.current=t.identifier);var a=I(e,Ce),o=dt({finger:a,values:qe,source:_e}),r=o.newValue,n=o.activeIndex;T({sliderRef:tt,activeIndex:n,setActive:ze}),Ye(r),Be&&Be(e,r,n),Ee.current=0;var c=Object(h.a)(tt.current);c.addEventListener("touchmove",bt),c.addEventListener("touchend",pt)})),vt=i.useCallback((function(){var e=Object(h.a)(tt.current);e.removeEventListener("mousemove",bt),e.removeEventListener("mouseup",pt),e.removeEventListener("touchmove",bt),e.removeEventListener("touchend",pt)}),[pt,bt]);i.useEffect((function(){var e=tt.current;return e.addEventListener("touchstart",mt,{passive:F()}),function(){e.removeEventListener("touchstart",mt,{passive:F()}),vt()}}),[vt,mt]),i.useEffect((function(){q&&vt()}),[q,vt]);var ft=Object(k.a)((function(e){if(ae&&ae(e),0===e.button){e.preventDefault();var t=I(e,Ce),a=dt({finger:t,values:qe,source:_e}),o=a.newValue,r=a.activeIndex;T({sliderRef:tt,activeIndex:r,setActive:ze}),Ye(o),Be&&Be(e,o,r),Ee.current=0;var n=Object(h.a)(tt.current);n.addEventListener("mousemove",bt),n.addEventListener("mouseup",pt)}})),Ot=M(Ke?qe[0]:Z,Z,G),jt=M(qe[qe.length-1],Z,G)-Ot,ht=Object(c.a)({},E[ut].offset(Ot),E[ut].leap(jt)),gt=ge.Root||p,yt=xe.root||{},xt=ge.Rail||"span",kt=xe.rail||{},Ct=ge.Track||"span",wt=xe.track||{},Lt=ge.Thumb||"span",St=xe.thumb||{},zt=ge.ValueLabel||O,Pt=xe.valueLabel||{},Rt=ge.Mark||"span",It=xe.mark||{},Mt=ge.MarkLabel||"span",Vt=xe.markLabel||{},Nt=Object(c.a)({},e,{classes:v,disabled:q,dragging:Te,isRtl:je,marked:He.length>0&&He.some((function(e){return e.label})),max:G,min:Z,orientation:re,scale:ce,step:le,track:de,valueLabelDisplay:me,valueLabelFormat:fe}),Tt=function(e){var t=e.disabled,a=e.dragging,o=e.marked,r=e.orientation,n=e.track,c=e.classes,i={root:["root",t&&"disabled",a&&"dragging",o&&"marked","vertical"===r&&"vertical","inverted"===n&&"trackInverted",!1===n&&"trackFalse"],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled"],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Object(L.a)(i,m,c)}(Nt);return Object(f.jsxs)(gt,Object(c.a)({ref:ot,onMouseDown:ft},yt,!Object(b.a)(gt)&&{as:p,styleProps:Object(c.a)({},Nt,yt.styleProps)},ke,{className:Object(u.a)(Tt.root,yt.className,s),children:[Object(f.jsx)(xt,Object(c.a)({},kt,!Object(b.a)(xt)&&{styleProps:Object(c.a)({},Nt,kt.styleProps)},{className:Object(u.a)(Tt.rail,kt.className)})),Object(f.jsx)(Ct,Object(c.a)({},wt,!Object(b.a)(Ct)&&{styleProps:Object(c.a)({},Nt,wt.styleProps)},{className:Object(u.a)(Tt.track,wt.className),style:Object(c.a)({},ht,wt.style)})),He.map((function(e,t){var a,o=M(e.value,Z,G),r=E[ut].offset(o);return a=!1===de?-1!==qe.indexOf(e.value):"normal"===de&&(Ke?e.value>=qe[0]&&e.value<=qe[qe.length-1]:e.value<=qe[0])||"inverted"===de&&(Ke?e.value<=qe[0]||e.value>=qe[qe.length-1]:e.value>=qe[0]),Object(f.jsxs)(i.Fragment,{children:[Object(f.jsx)(Rt,Object(c.a)({"data-index":t},It,!Object(b.a)(Rt)&&{styleProps:Object(c.a)({},Nt,It.styleProps,{markActive:a})},{style:Object(c.a)({},r,It.style),className:Object(u.a)(Tt.mark,It.className,a&&Tt.markActive)})),null!=e.label?Object(f.jsx)(Mt,Object(c.a)({"aria-hidden":!0,"data-index":t},Vt,!Object(b.a)(Mt)&&{styleProps:Object(c.a)({},Nt,Vt.styleProps,{markLabelActive:a})},{style:Object(c.a)({},r,Vt.style),className:Object(u.a)(Tt.markLabel,Vt.className,a&&Tt.markLabelActive),children:e.label})):null]},e.value)})),qe.map((function(t,r){var n=M(t,Z,G),s=E[ut].offset(n),d="off"===me?_:zt;return Object(f.jsx)(i.Fragment,{children:Object(f.jsx)(d,Object(c.a)({valueLabelFormat:fe,valueLabelDisplay:me,value:"function"===typeof fe?fe(ce(t),r):fe,index:r,open:Ie===r||Se===r||"on"===me,disabled:q},Pt,{className:Object(u.a)(Tt.valueLabel,Pt.className)},!Object(b.a)(zt)&&{styleProps:Object(c.a)({},Nt,Pt.styleProps)},{children:Object(f.jsx)(Lt,Object(c.a)({"data-index":r,onMouseOver:ct,onMouseLeave:it},St,{className:Object(u.a)(Tt.thumb,St.className,Se===r&&Tt.active,$e===r&&Tt.focusVisible)},!Object(b.a)(Lt)&&{styleProps:Object(c.a)({},Nt,St.styleProps)},{style:Object(c.a)({},s,{pointerEvents:B&&Se!==r?"none":void 0},St.style),children:Object(f.jsx)("input",{tabIndex:se,"data-index":r,"aria-label":H?H(r):a,"aria-labelledby":o,"aria-orientation":re,"aria-valuemax":ce(G),"aria-valuemin":ce(Z),"aria-valuenow":ce(t),"aria-valuetext":W?W(ce(t),r):l,onFocus:rt,onBlur:nt,name:$,type:"range",min:e.min,max:e.max,step:e.step,disabled:q,value:qe[r],onChange:lt,style:Object(c.a)({},w,{direction:je?"rtl":"ltr",width:"100%",height:"100%"})})}))}))},r)}))]}))})),B=a(63),K=a(67),q=a(65),H=a(93),W=a(68),X=["components","componentsProps","color","size"],U=Object(c.a)({},v,Object(d.a)("MuiSlider",["colorPrimary","colorSecondary","thumbColorPrimary","thumbColorSecondary","sizeSmall","thumbSizeSmall"])),J=Object(q.a)("span",{name:"MuiSlider",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps,o=!0===a.marksProp&&null!==a.step?Object(r.a)(Array(Math.floor((a.max-a.min)/a.step)+1)).map((function(e,t){return{value:a.min+a.step*t}})):a.marksProp||[],n=o.length>0&&o.some((function(e){return e.label}));return Object(c.a)({},t.root,t["color".concat(Object(W.a)(a.color))],"medium"!==a.size&&t["size".concat(Object(W.a)(a.size))],n&&t.marked,"vertical"===a.orientation&&t.vertical,"inverted"===a.track&&t.trackInverted,!1===a.track&&t.trackFalse)}})((function(e){var t,a=e.theme,r=e.styleProps;return Object(c.a)({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:a.palette[r.color].main,WebkitTapHighlightColor:"transparent"},"horizontal"===r.orientation&&Object(c.a)({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},"small"===r.size&&{height:2},r.marked&&{marginBottom:20}),"vertical"===r.orientation&&Object(c.a)({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},"small"===r.size&&{width:2},r.marked&&{marginRight:44}),(t={"@media print":{colorAdjust:"exact"}},Object(o.a)(t,"&.".concat(U.disabled),{pointerEvents:"none",cursor:"default",color:a.palette.grey[400]}),Object(o.a)(t,"&.".concat(U.dragging),Object(o.a)({},"& .".concat(U.thumb,", & .").concat(U.track),{transition:"none"})),t))})),G=Object(q.a)("span",{name:"MuiSlider",slot:"Rail",overridesResolver:function(e,t){return t.rail}})((function(e){var t=e.styleProps;return Object(c.a)({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},"horizontal"===t.orientation&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===t.orientation&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},"inverted"===t.track&&{opacity:1})})),Q=Object(q.a)("span",{name:"MuiSlider",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme,a=e.styleProps,o="light"===t.palette.mode?Object(B.d)(t.palette[a.color].main,.62):Object(B.b)(t.palette[a.color].main,.5);return Object(c.a)({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:t.transitions.create(["left","width","bottom","height"],{duration:t.transitions.duration.shortest})},"small"===a.size&&{border:"none"},"horizontal"===a.orientation&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===a.orientation&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},!1===a.track&&{display:"none"},"inverted"===a.track&&{backgroundColor:o,borderColor:o})})),Z=Object(q.a)("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:function(e,t){var a=e.styleProps;return Object(c.a)({},t.thumb,t["thumbColor".concat(Object(W.a)(a.color))],"medium"!==a.size&&t["thumbSize".concat(Object(W.a)(a.size))])}})((function(e){var t,a=e.theme,r=e.styleProps;return Object(c.a)({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:a.transitions.create(["box-shadow","left","bottom"],{duration:a.transitions.duration.shortest})},"small"===r.size&&{width:12,height:12},"horizontal"===r.orientation&&{top:"50%",transform:"translate(-50%, -50%)"},"vertical"===r.orientation&&{left:"50%",transform:"translate(-50%, 50%)"},(t={"&:before":Object(c.a)({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:a.shadows[2]},"small"===r.size&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},Object(o.a)(t,"&:hover, &.".concat(U.focusVisible),{boxShadow:"0px 0px 0px 8px ".concat(Object(B.a)(a.palette[r.color].main,.16)),"@media (hover: none)":{boxShadow:"none"}}),Object(o.a)(t,"&.".concat(U.active),{boxShadow:"0px 0px 0px 14px ".concat(Object(B.a)(a.palette[r.color].main,.16))}),Object(o.a)(t,"&.".concat(U.disabled),{"&:hover":{boxShadow:"none"}}),t))})),$=Object(q.a)(O,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:function(e,t){return t.valueLabel}})((function(e){var t,a=e.theme,r=e.styleProps;return Object(c.a)((t={},Object(o.a)(t,"&.".concat(U.valueLabelOpen),{transform:"translateY(-100%) scale(1)"}),Object(o.a)(t,"zIndex",1),Object(o.a)(t,"whiteSpace","nowrap"),t),a.typography.body2,{fontWeight:500,transition:a.transitions.create(["transform"],{duration:a.transitions.duration.shortest}),top:-10,transformOrigin:"bottom center",transform:"translateY(-100%) scale(0)",position:"absolute",backgroundColor:a.palette.grey[600],borderRadius:2,color:a.palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},"small"===r.size&&{fontSize:a.typography.pxToRem(12),padding:"0.25rem 0.5rem"},{"&:before":{position:"absolute",content:'""',width:8,height:8,bottom:0,left:"50%",transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit"}})})),ee=Object(q.a)("span",{name:"MuiSlider",slot:"Mark",overridesResolver:function(e,t){return t.mark}})((function(e){var t=e.theme,a=e.styleProps;return Object(c.a)({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},"horizontal"===a.orientation&&{top:"50%",transform:"translate(-1px, -50%)"},"vertical"===a.orientation&&{left:"50%",transform:"translate(-50%, 1px)"},a.markActive&&{backgroundColor:t.palette.background.paper,opacity:.8})})),te=Object(q.a)("span",{name:"MuiSlider",slot:"MarkLabel",overridesResolver:function(e,t){return t.markLabel}})((function(e){var t=e.theme,a=e.styleProps;return Object(c.a)({},t.typography.body2,{color:t.palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},"horizontal"===a.orientation&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},"vertical"===a.orientation&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},a.markLabelActive&&{color:t.palette.text.primary})}));J.propTypes={children:s.a.node,styleProps:s.a.shape({"aria-label":s.a.string,"aria-labelledby":s.a.string,"aria-valuetext":s.a.string,classes:s.a.object,color:s.a.oneOf(["primary","secondary"]),defaultValue:s.a.oneOfType([s.a.arrayOf(s.a.number),s.a.number]),disabled:s.a.bool,getAriaLabel:s.a.func,getAriaValueText:s.a.func,isRtl:s.a.bool,marks:s.a.oneOfType([s.a.arrayOf(s.a.shape({label:s.a.node,value:s.a.number.isRequired})),s.a.bool]),max:s.a.number,min:s.a.number,name:s.a.string,onChange:s.a.func,onChangeCommitted:s.a.func,orientation:s.a.oneOf(["horizontal","vertical"]),scale:s.a.func,step:s.a.number,track:s.a.oneOf(["inverted","normal",!1]),value:s.a.oneOfType([s.a.arrayOf(s.a.number),s.a.number]),valueLabelDisplay:s.a.oneOf(["auto","off","on"]),valueLabelFormat:s.a.oneOfType([s.a.func,s.a.string])})};var ae=function(e){return!e||!Object(b.a)(e)},oe=i.forwardRef((function(e,t){var a,o,r,i,l=Object(K.a)({props:e,name:"MuiSlider"}),s="rtl"===Object(H.a)().direction,d=l.components,b=void 0===d?{}:d,p=l.componentsProps,v=void 0===p?{}:p,O=l.color,j=void 0===O?"primary":O,h=l.size,g=void 0===h?"medium":h,y=Object(n.a)(l,X),x=function(e){var t=e.color,a=e.size,o=e.classes,r=void 0===o?{}:o;return Object(c.a)({},r,{root:Object(u.a)(r.root,m("color".concat(Object(W.a)(t))),r["color".concat(Object(W.a)(t))],a&&[m("size".concat(Object(W.a)(a))),r["size".concat(Object(W.a)(a))]]),thumb:Object(u.a)(r.thumb,m("thumbColor".concat(Object(W.a)(t))),r["thumbColor".concat(Object(W.a)(t))],a&&[m("thumbSize".concat(Object(W.a)(a))),r["thumbSize".concat(Object(W.a)(a))]])})}(Object(c.a)({},l,{color:j,size:g}));return Object(f.jsx)(Y,Object(c.a)({},y,{isRtl:s,components:Object(c.a)({Root:J,Rail:G,Track:Q,Thumb:Z,ValueLabel:$,Mark:ee,MarkLabel:te},b),componentsProps:Object(c.a)({},v,{root:Object(c.a)({},v.root,ae(b.Root)&&{styleProps:Object(c.a)({},null==(a=v.root)?void 0:a.styleProps,{color:j,size:g})}),thumb:Object(c.a)({},v.thumb,ae(b.Thumb)&&{styleProps:Object(c.a)({},null==(o=v.thumb)?void 0:o.styleProps,{color:j,size:g})}),track:Object(c.a)({},v.track,ae(b.Track)&&{styleProps:Object(c.a)({},null==(r=v.track)?void 0:r.styleProps,{color:j,size:g})}),valueLabel:Object(c.a)({},v.valueLabel,ae(b.ValueLabel)&&{styleProps:Object(c.a)({},null==(i=v.valueLabel)?void 0:i.styleProps,{color:j,size:g})})}),classes:x,ref:t}))}));t.a=oe},72:function(e,t,a){"use strict";t.a=function(e,t,a,o,r){return null}},74:function(e,t,a){"use strict";var o=a(144);t.a=o.a},76:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},77:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=a(90)},78:function(e,t,a){"use strict";var o=a(107);t.a=o.a},79:function(e,t,a){"use strict";var o=a(20),r=a(0);t.a=function(e){var t=r.useState(e),a=Object(o.a)(t,2),n=a[0],c=a[1],i=e||n;return r.useEffect((function(){null==n&&c("mui-".concat(Math.round(1e9*Math.random())))}),[n]),i}},80:function(e,t,a){"use strict";var o=a(95);t.a=o.a},81:function(e,t,a){"use strict";t.a=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=this,r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];var i=function(){e.apply(o,n)};clearTimeout(t),t=setTimeout(i,a)}return o.clear=function(){clearTimeout(t)},o}},82:function(e,t,a){"use strict";var o=a(0);t.a=function(e,t){return o.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},83:function(e,t,a){"use strict";var o=a(112);t.a=o.a},84:function(e,t,a){"use strict";var o=a(145);t.a=o.a},85:function(e,t,a){"use strict";a(1);t.a=function(e,t){return function(){return null}}},90:function(e,t,a){"use strict";a.r(t),a.d(t,"capitalize",(function(){return o.a})),a.d(t,"createChainedFunction",(function(){return r.a})),a.d(t,"createSvgIcon",(function(){return n.a})),a.d(t,"debounce",(function(){return c.a})),a.d(t,"deprecatedPropType",(function(){return i})),a.d(t,"isMuiElement",(function(){return l.a})),a.d(t,"ownerDocument",(function(){return s.a})),a.d(t,"ownerWindow",(function(){return u.a})),a.d(t,"requirePropFactory",(function(){return d.a})),a.d(t,"setRef",(function(){return b.a})),a.d(t,"unstable_useEnhancedEffect",(function(){return p.a})),a.d(t,"unstable_useId",(function(){return m.a})),a.d(t,"unsupportedProp",(function(){return v.a})),a.d(t,"useControlled",(function(){return f.a})),a.d(t,"useEventCallback",(function(){return O.a})),a.d(t,"useForkRef",(function(){return j.a})),a.d(t,"useIsFocusVisible",(function(){return h.a}));var o=a(68),r=a(78),n=a(70),c=a(81);var i=function(e,t){return function(){return null}},l=a(82),s=a(80),u=a(83),d=a(85),b=a(84),p=a(74),m=a(79),v=a(72),f=a(75),O=a(88),j=a(69),h=a(86)},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var o=a(27),r=(a(0),a(101));function n(){return Object(o.a)(r.a)}},95:function(e,t,a){"use strict";function o(e){return e&&e.ownerDocument||document}a.d(t,"a",(function(){return o}))},96:function(e,t,a){"use strict";var o=a(7),r=a(4),n=a(1),c=a(0),i=(a(8),a(66)),l=a(201),s=a(63),u=a(70),d=a(3),b=Object(u.a)(Object(d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),p=a(69),m=a(68),v=a(233),f=a(67),O=a(65),j=a(202),h=a(203);function g(e){return Object(j.a)("MuiChip",e)}var y=Object(h.a)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),x=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],k=Object(O.a)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,t){var a,r=e.styleProps,c=r.color,i=r.clickable,l=r.onDelete,s=r.size,u=r.variant;return Object(n.a)((a={},Object(o.a)(a,"& .".concat(y.avatar),Object(n.a)({},t.avatar,t["avatar".concat(Object(m.a)(s))],t["avatarColor".concat(Object(m.a)(c))])),Object(o.a)(a,"& .".concat(y.icon),Object(n.a)({},t.icon,t["icon".concat(Object(m.a)(s))],t["iconColor".concat(Object(m.a)(c))])),Object(o.a)(a,"& .".concat(y.deleteIcon),Object(n.a)({},t.deleteIcon,t["deleteIcon".concat(Object(m.a)(s))],t["deleteIconColor".concat(Object(m.a)(c))],t["deleteIconOutlinedColor".concat(Object(m.a)(c))])),a),t.root,t["size".concat(Object(m.a)(s))],t["color".concat(Object(m.a)(c))],i&&t.clickable,i&&"default"!==c&&t["clickableColor".concat(Object(m.a)(c),")")],l&&t.deletable,l&&"default"!==c&&t["deletableColor".concat(Object(m.a)(c))],t[u],"outlined"===u&&t["outlined".concat(Object(m.a)(c))])}})((function(e){var t,a=e.theme,r=e.styleProps,c=Object(s.a)(a.palette.text.primary,.26);return Object(n.a)((t={fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:a.palette.text.primary,backgroundColor:a.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},Object(o.a)(t,"&.".concat(y.disabled),{opacity:a.palette.action.disabledOpacity,pointerEvents:"none"}),Object(o.a)(t,"& .".concat(y.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],fontSize:a.typography.pxToRem(12)}),Object(o.a)(t,"& .".concat(y.avatarColorPrimary),{color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark}),Object(o.a)(t,"& .".concat(y.avatarColorSecondary),{color:a.palette.secondary.contrastText,backgroundColor:a.palette.secondary.dark}),Object(o.a)(t,"& .".concat(y.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)}),Object(o.a)(t,"& .".concat(y.icon),Object(n.a)({color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],marginLeft:5,marginRight:-6},"small"===r.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==r.color&&{color:"inherit"})),Object(o.a)(t,"& .".concat(y.deleteIcon),Object(n.a)({WebkitTapHighlightColor:"transparent",color:c,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(s.a)(c,.4)}},"small"===r.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==r.color&&{color:Object(s.a)(a.palette[r.color].contrastText,.7),"&:hover, &:active":{color:a.palette[r.color].contrastText}})),t),"small"===r.size&&{height:24},"default"!==r.color&&{backgroundColor:a.palette[r.color].main,color:a.palette[r.color].contrastText},r.onDelete&&Object(o.a)({},"&.".concat(y.focusVisible),{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),r.onDelete&&"default"!==r.color&&Object(o.a)({},"&.".concat(y.focusVisible),{backgroundColor:a.palette[r.color].dark}))}),(function(e){var t,a=e.theme,r=e.styleProps;return Object(n.a)({},r.clickable&&(t={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}},Object(o.a)(t,"&.".concat(y.focusVisible),{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),Object(o.a)(t,"&:active",{boxShadow:a.shadows[1]}),t),r.clickable&&"default"!==r.color&&Object(o.a)({},"&:hover, &.".concat(y.focusVisible),{backgroundColor:a.palette[r.color].dark}))}),(function(e){var t,a,r=e.theme,c=e.styleProps;return Object(n.a)({},"outlined"===c.variant&&(t={backgroundColor:"transparent",border:"1px solid ".concat("light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[700])},Object(o.a)(t,"&.".concat(y.clickable,":hover"),{backgroundColor:r.palette.action.hover}),Object(o.a)(t,"&.".concat(y.focusVisible),{backgroundColor:r.palette.action.focus}),Object(o.a)(t,"& .".concat(y.avatar),{marginLeft:4}),Object(o.a)(t,"& .".concat(y.avatarSmall),{marginLeft:2}),Object(o.a)(t,"& .".concat(y.icon),{marginLeft:4}),Object(o.a)(t,"& .".concat(y.iconSmall),{marginLeft:2}),Object(o.a)(t,"& .".concat(y.deleteIcon),{marginRight:5}),Object(o.a)(t,"& .".concat(y.deleteIconSmall),{marginRight:3}),t),"outlined"===c.variant&&"default"!==c.color&&(a={color:r.palette[c.color].main,border:"1px solid ".concat(Object(s.a)(r.palette[c.color].main,.7))},Object(o.a)(a,"&.".concat(y.clickable,":hover"),{backgroundColor:Object(s.a)(r.palette[c.color].main,r.palette.action.hoverOpacity)}),Object(o.a)(a,"&.".concat(y.focusVisible),{backgroundColor:Object(s.a)(r.palette[c.color].main,r.palette.action.focusOpacity)}),Object(o.a)(a,"& .".concat(y.deleteIcon),{color:Object(s.a)(r.palette[c.color].main,.7),"&:hover, &:active":{color:r.palette[c.color].main}}),a))})),C=Object(O.a)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,t){var a=e.styleProps.size;return Object(n.a)({},t.label,t["label".concat(Object(m.a)(a))])}})((function(e){var t=e.styleProps;return Object(n.a)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===t.size&&{paddingLeft:8,paddingRight:8})}));function w(e){return"Backspace"===e.key||"Delete"===e.key}var L=c.forwardRef((function(e,t){var a=Object(f.a)({props:e,name:"MuiChip"}),o=a.avatar,s=a.className,u=a.clickable,O=a.color,j=void 0===O?"default":O,h=a.component,y=a.deleteIcon,L=a.disabled,S=void 0!==L&&L,z=a.icon,P=a.label,R=a.onClick,I=a.onDelete,M=a.onKeyDown,V=a.onKeyUp,N=a.size,T=void 0===N?"medium":N,A=a.variant,E=void 0===A?"filled":A,D=Object(r.a)(a,x),F=c.useRef(null),_=Object(p.a)(F,t),Y=function(e){e.stopPropagation(),I&&I(e)},B=!(!1===u||!R)||u,K="small"===T,q=B||I?v.a:h||"div",H=Object(n.a)({},a,{component:q,disabled:S,size:T,color:j,onDelete:!!I,clickable:B,variant:E}),W=function(e){var t=e.classes,a=e.disabled,o=e.size,r=e.color,n=e.onDelete,c=e.clickable,i=e.variant,s={root:["root",i,a&&"disabled","size".concat(Object(m.a)(o)),"color".concat(Object(m.a)(r)),c&&"clickable",c&&"clickableColor".concat(Object(m.a)(r)),n&&"deletable",n&&"deletableColor".concat(Object(m.a)(r)),"".concat(i).concat(Object(m.a)(r))],label:["label","label".concat(Object(m.a)(o))],avatar:["avatar","avatar".concat(Object(m.a)(o)),"avatarColor".concat(Object(m.a)(r))],icon:["icon","icon".concat(Object(m.a)(o)),"iconColor".concat(Object(m.a)(r))],deleteIcon:["deleteIcon","deleteIcon".concat(Object(m.a)(o)),"deleteIconColor".concat(Object(m.a)(r)),"deleteIconOutlinedColor".concat(Object(m.a)(r))]};return Object(l.a)(s,g,t)}(H),X=q===v.a?{component:h||"div",focusVisibleClassName:W.focusVisible,disableRipple:Boolean(I)}:{},U=null;if(I){var J=Object(i.a)("default"!==j&&("outlined"===E?W["deleteIconOutlinedColor".concat(Object(m.a)(j))]:W["deleteIconColor".concat(Object(m.a)(j))]),K&&W.deleteIconSmall);U=y&&c.isValidElement(y)?c.cloneElement(y,{className:Object(i.a)(y.props.className,W.deleteIcon,J),onClick:Y}):Object(d.jsx)(b,{className:Object(i.a)(W.deleteIcon,J),onClick:Y})}var G=null;o&&c.isValidElement(o)&&(G=c.cloneElement(o,{className:Object(i.a)(W.avatar,o.props.className)}));var Q=null;return z&&c.isValidElement(z)&&(Q=c.cloneElement(z,{className:Object(i.a)(W.icon,z.props.className)})),Object(d.jsxs)(k,Object(n.a)({as:q,className:Object(i.a)(W.root,s),disabled:!(!B||!S)||void 0,onClick:R,onKeyDown:function(e){e.currentTarget===e.target&&w(e)&&e.preventDefault(),M&&M(e)},onKeyUp:function(e){e.currentTarget===e.target&&(I&&w(e)?I(e):"Escape"===e.key&&F.current&&F.current.blur()),V&&V(e)},ref:_,styleProps:H},X,D,{children:[G||Q,Object(d.jsx)(C,{className:Object(i.a)(W.label),styleProps:H,children:P}),U]}))}));t.a=L}}]);
//# sourceMappingURL=10.3305abea.chunk.js.map