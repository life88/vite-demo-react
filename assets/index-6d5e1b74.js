import{w as it}from"./CSSMotionList-5f918094.js";import{K as w,r as g,c as B,d as At,_ as zt,h as It,e as Nt,g as Dt,m as bt,i as Bt,a as lt,C as ht,T as yt,as as wt,at as Et,au as at,av as kt,aw as Rt,ax as Lt,ay as ct,Z as Mt,w as Vt,$ as Xt,p as vt}from"./index-3a9f0ebf.js";import{h as Ht,T as Zt,b as Kt,g as Ft}from"./motion-d64c282e.js";const K=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"],Wt=(t,e,o,n,r)=>{const a=t/2,s=0,i=a,l=o*1/Math.sqrt(2),m=a-o*(1-1/Math.sqrt(2)),f=a-e*(1/Math.sqrt(2)),c=o*(Math.sqrt(2)-1)+e*(1/Math.sqrt(2)),b=2*a-f,u=c,O=2*a-l,A=m,E=2*a-s,z=i,I=a*Math.sqrt(2)+o*(Math.sqrt(2)-2);return{borderRadius:{_skip_check_:!0,value:`0 0 ${e}px`},pointerEvents:"none",width:t,height:t,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:t,height:t/2,background:n,clipPath:`path('M ${s} ${i} A ${o} ${o} 0 0 0 ${l} ${m} L ${f} ${c} A ${e} ${e} 0 0 1 ${b} ${u} L ${O} ${A} A ${o} ${o} 0 0 0 ${E} ${z} Z')`,content:'""'},"&::after":{content:'""',position:"absolute",width:I,height:I,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${e}px 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:r,zIndex:0,background:"transparent"}}};function Yt(t,e){return K.reduce((o,n)=>{const r=t[`${n}-1`],a=t[`${n}-3`],s=t[`${n}-6`],i=t[`${n}-7`];return Object.assign(Object.assign({},o),e(n,{lightColor:r,lightBorderColor:a,darkColor:s,textColor:i}))},{})}function nt(t){return t!=null&&t===t.window}function Ut(t,e){var o,n;if(typeof window>"u")return 0;const r=e?"scrollTop":"scrollLeft";let a=0;return nt(t)?a=t[e?"pageYOffset":"pageXOffset"]:t instanceof Document?a=t.documentElement[r]:(t instanceof HTMLElement||t)&&(a=t[r]),t&&!nt(t)&&typeof a!="number"&&(a=(n=((o=t.ownerDocument)!==null&&o!==void 0?o:t).documentElement)===null||n===void 0?void 0:n[r]),a}function qt(t,e,o,n){const r=o-e;return t/=n/2,t<1?r/2*t*t*t+e:r/2*((t-=2)*t*t+2)+e}function ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{getContainer:o=()=>window,callback:n,duration:r=450}=e,a=o(),s=Ut(a,!0),i=Date.now(),l=()=>{const f=Date.now()-i,c=qt(f>r?r:f,s,t,r);nt(a)?a.scrollTo(window.pageXOffset,c):a instanceof Document||a.constructor.name==="HTMLDocument"?a.documentElement.scrollTop=c:a.scrollTop=c,f<r?it(l):typeof n=="function"&&n()};it(l)}const Gt=new w("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),Qt=new w("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),ft=new w("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),mt=new w("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),Jt=new w("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),te=new w("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),ee=new w("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),oe=new w("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),ne=new w("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),re=new w("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}}),ae=new w("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),se=new w("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}}),ie={zoom:{inKeyframes:Gt,outKeyframes:Qt},"zoom-big":{inKeyframes:ft,outKeyframes:mt},"zoom-big-fast":{inKeyframes:ft,outKeyframes:mt},"zoom-left":{inKeyframes:ee,outKeyframes:oe},"zoom-right":{inKeyframes:ne,outKeyframes:re},"zoom-up":{inKeyframes:Jt,outKeyframes:te},"zoom-down":{inKeyframes:ae,outKeyframes:se}},le=(t,e)=>{const{antCls:o}=t,n=`${o}-${e}`,{inKeyframes:r,outKeyframes:a}=ie[e];return[Ht(n,r,a,e==="zoom-big-fast"?t.motionDurationFast:t.motionDurationMid),{[`
        ${n}-enter,
        ${n}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:t.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${n}-leave`]:{animationTimingFunction:t.motionEaseInOutCirc}}]};var h={adjustX:1,adjustY:1},y=[0,0],rt={left:{points:["cr","cl"],overflow:h,offset:[-4,0],targetOffset:y},right:{points:["cl","cr"],overflow:h,offset:[4,0],targetOffset:y},top:{points:["bc","tc"],overflow:h,offset:[0,-4],targetOffset:y},bottom:{points:["tc","bc"],overflow:h,offset:[0,4],targetOffset:y},topLeft:{points:["bl","tl"],overflow:h,offset:[0,-4],targetOffset:y},leftTop:{points:["tr","tl"],overflow:h,offset:[-4,0],targetOffset:y},topRight:{points:["br","tr"],overflow:h,offset:[0,-4],targetOffset:y},rightTop:{points:["tl","tr"],overflow:h,offset:[4,0],targetOffset:y},bottomRight:{points:["tr","br"],overflow:h,offset:[0,4],targetOffset:y},rightBottom:{points:["bl","br"],overflow:h,offset:[4,0],targetOffset:y},bottomLeft:{points:["tl","bl"],overflow:h,offset:[0,4],targetOffset:y},leftBottom:{points:["br","bl"],overflow:h,offset:[-4,0],targetOffset:y}};function Ot(t){var e=t.showArrow,o=t.arrowContent,n=t.children,r=t.prefixCls,a=t.id,s=t.overlayInnerStyle,i=t.className,l=t.style;return g.createElement("div",{className:B("".concat(r,"-content"),i),style:l},e!==!1&&g.createElement("div",{className:"".concat(r,"-arrow"),key:"arrow"},o),g.createElement("div",{className:"".concat(r,"-inner"),id:a,role:"tooltip",style:s},typeof n=="function"?n():n))}var ce=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],fe=function(e,o){var n=e.overlayClassName,r=e.trigger,a=r===void 0?["hover"]:r,s=e.mouseEnterDelay,i=s===void 0?0:s,l=e.mouseLeaveDelay,m=l===void 0?.1:l,f=e.overlayStyle,c=e.prefixCls,b=c===void 0?"rc-tooltip":c,u=e.children,O=e.onVisibleChange,A=e.afterVisibleChange,E=e.transitionName,z=e.animation,I=e.motion,L=e.placement,F=L===void 0?"right":L,N=e.align,W=N===void 0?{}:N,k=e.destroyTooltipOnHide,_=k===void 0?!1:k,Y=e.defaultVisible,U=e.getTooltipContainer,q=e.overlayInnerStyle,G=e.arrowContent,Q=e.overlay,J=e.id,M=e.showArrow,tt=M===void 0?!0:M,C=At(e,ce),V=g.useRef(null);g.useImperativeHandle(o,function(){return V.current});var X=zt({},C);"visible"in e&&(X.popupVisible=e.visible);var R=function(){return g.createElement(Ot,{showArrow:tt,arrowContent:G,key:"content",prefixCls:b,id:J,overlayInnerStyle:q},Q)},T=!1,x=!1;if(typeof _=="boolean")T=_;else if(_&&It(_)==="object"){var H=_.keepParent;T=H===!0,x=H===!1}return g.createElement(Zt,Nt({popupClassName:n,prefixCls:b,popup:R,action:a,builtinPlacements:rt,popupPlacement:F,ref:V,popupAlign:W,getPopupContainer:U,onPopupVisibleChange:O,afterPopupVisibleChange:A,popupTransitionName:E,popupAnimation:z,popupMotion:I,defaultPopupVisible:Y,destroyPopupOnHide:T,autoDestroy:x,mouseLeaveDelay:m,popupStyle:f,mouseEnterDelay:i},X),u)};const me=g.forwardRef(fe),ue={adjustX:1,adjustY:1},ut={adjustX:0,adjustY:0},pe=[0,0];function pt(t){return typeof t=="boolean"?t?ue:ut:Object.assign(Object.assign({},ut),t)}function gt(t,e,o){switch(t){case"top":case"topLeft":case"topRight":return[0,-(e/2+o)];case"bottom":case"bottomLeft":case"bottomRight":return[0,e/2+o];case"left":case"leftTop":case"leftBottom":return[-(e/2+o),0];case"right":case"rightTop":case"rightBottom":return[e/2+o,0];default:return[0,0]}}function dt(t,e){return[t[0]+e[0],t[1]+e[1]]}function ge(t){const{arrowWidth:e,horizontalArrowShift:o=16,verticalArrowShift:n=8,autoAdjustOverflow:r,arrowPointAtCenter:a,offset:s}=t,i=e/2,l={left:{points:["cr","cl"],offset:[-s,0]},right:{points:["cl","cr"],offset:[s,0]},top:{points:["bc","tc"],offset:[0,-s]},bottom:{points:["tc","bc"],offset:[0,s]},topLeft:{points:["bl","tc"],offset:[-(o+i),-s]},leftTop:{points:["tr","cl"],offset:[-s,-(n+i)]},topRight:{points:["br","tc"],offset:[o+i,-s]},rightTop:{points:["tl","cr"],offset:[s,-(n+i)]},bottomRight:{points:["tr","bc"],offset:[o+i,s]},rightBottom:{points:["bl","cr"],offset:[s,n+i]},bottomLeft:{points:["tl","bc"],offset:[-(o+i),s]},leftBottom:{points:["br","cl"],offset:[-s,n+i]}};return Object.keys(l).forEach(m=>{l[m]=a?Object.assign(Object.assign({},l[m]),{offset:dt(l[m].offset,gt(m,e,s)),overflow:pt(r),targetOffset:pe}):Object.assign(Object.assign({},rt[m]),{offset:dt(rt[m].offset,gt(m,e,s)),overflow:pt(r)}),l[m].ignoreShake=!0}),l}const Ct=8;function de(t){const e=Ct,{contentRadius:o,limitVerticalRadius:n}=t,r=o>12?o+2:12;return{dropdownArrowOffset:r,dropdownArrowOffsetVertical:n?e:r}}function Z(t,e){return t?e:{}}function be(t,e){const{componentCls:o,sizePopupArrow:n,borderRadiusXS:r,borderRadiusOuter:a,boxShadowPopoverArrow:s}=t,{colorBg:i,contentRadius:l=t.borderRadiusLG,limitVerticalRadius:m,arrowDistance:f=0,arrowPlacement:c={left:!0,right:!0,top:!0,bottom:!0}}=e,{dropdownArrowOffsetVertical:b,dropdownArrowOffset:u}=de({contentRadius:l,limitVerticalRadius:m});return{[o]:Object.assign(Object.assign(Object.assign(Object.assign({[`${o}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},Wt(n,r,a,i,s)),{"&:before":{background:i}})]},Z(!!c.top,{[[`&-placement-top ${o}-arrow`,`&-placement-topLeft ${o}-arrow`,`&-placement-topRight ${o}-arrow`].join(",")]:{bottom:f,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top ${o}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft ${o}-arrow`]:{left:{_skip_check_:!0,value:u}},[`&-placement-topRight ${o}-arrow`]:{right:{_skip_check_:!0,value:u}}})),Z(!!c.bottom,{[[`&-placement-bottom ${o}-arrow`,`&-placement-bottomLeft ${o}-arrow`,`&-placement-bottomRight ${o}-arrow`].join(",")]:{top:f,transform:"translateY(-100%)"},[`&-placement-bottom ${o}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft ${o}-arrow`]:{left:{_skip_check_:!0,value:u}},[`&-placement-bottomRight ${o}-arrow`]:{right:{_skip_check_:!0,value:u}}})),Z(!!c.left,{[[`&-placement-left ${o}-arrow`,`&-placement-leftTop ${o}-arrow`,`&-placement-leftBottom ${o}-arrow`].join(",")]:{right:{_skip_check_:!0,value:f},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left ${o}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop ${o}-arrow`]:{top:b},[`&-placement-leftBottom ${o}-arrow`]:{bottom:b}})),Z(!!c.right,{[[`&-placement-right ${o}-arrow`,`&-placement-rightTop ${o}-arrow`,`&-placement-rightBottom ${o}-arrow`].join(",")]:{left:{_skip_check_:!0,value:f},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right ${o}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop ${o}-arrow`]:{top:b},[`&-placement-rightBottom ${o}-arrow`]:{bottom:b}}))}}const he=t=>{const{componentCls:e,tooltipMaxWidth:o,tooltipColor:n,tooltipBg:r,tooltipBorderRadius:a,zIndexPopup:s,controlHeight:i,boxShadowSecondary:l,paddingSM:m,paddingXS:f,tooltipRadiusOuter:c}=t;return[{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},Bt(t)),{position:"absolute",zIndex:s,display:"block","&":[{width:"max-content"},{width:"intrinsic"}],maxWidth:o,visibility:"visible","&-hidden":{display:"none"},"--antd-arrow-background-color":r,[`${e}-inner`]:{minWidth:i,minHeight:i,padding:`${m/2}px ${f}px`,color:n,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:r,borderRadius:a,boxShadow:l},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${e}-inner`]:{borderRadius:Math.min(a,Ct)}},[`${e}-content`]:{position:"relative"}}),Yt(t,(b,u)=>{let{darkColor:O}=u;return{[`&${e}-${b}`]:{[`${e}-inner`]:{backgroundColor:O},[`${e}-arrow`]:{"--antd-arrow-background-color":O}}}})),{"&-rtl":{direction:"rtl"}})},be(bt(t,{borderRadiusOuter:c}),{colorBg:"var(--antd-arrow-background-color)",contentRadius:a,limitVerticalRadius:!0}),{[`${e}-pure`]:{position:"relative",maxWidth:"none"}}]},$t=(t,e)=>Dt("Tooltip",n=>{if(e===!1)return[];const{borderRadius:r,colorTextLightSolid:a,colorBgDefault:s,borderRadiusOuter:i}=n,l=bt(n,{tooltipMaxWidth:250,tooltipColor:a,tooltipBorderRadius:r,tooltipBg:s,tooltipRadiusOuter:i>4?4:i});return[he(l),le(n,"zoom-big-fast")]},n=>{let{zIndexPopupBase:r,colorBgSpotlight:a}=n;return{zIndexPopup:r+70,colorBgDefault:a}})(t),ye=K.map(t=>`${t}-inverse`);function we(t){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat(lt(ye),lt(K)).includes(t):K.includes(t)}function St(t,e){const o=we(e),n=B({[`${t}-${e}`]:e&&o}),r={},a={};return e&&!o&&(r.background=e,a["--antd-arrow-background-color"]=e),{className:n,overlayStyle:r,arrowStyle:a}}function ve(t){const{prefixCls:e,className:o,placement:n="top",title:r,color:a,overlayInnerStyle:s}=t,{getPrefixCls:i}=g.useContext(ht),l=i("tooltip",e),[m,f]=$t(l,!0),c=St(l,a),b=Object.assign(Object.assign({},s),c.overlayStyle),u=c.arrowStyle;return m(g.createElement("div",{className:B(f,l,`${l}-pure`,`${l}-placement-${n}`,o,c.className),style:u},g.createElement(Ot,Object.assign({},t,{className:f,prefixCls:l,overlayInnerStyle:b}),r)))}const S=(t,e)=>new yt(t).setAlpha(e).toRgbString(),D=(t,e)=>new yt(t).lighten(e).toHexString(),Oe=t=>{const e=wt(t,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},Ce=(t,e)=>{const o=t||"#000",n=e||"#fff";return{colorBgBase:o,colorTextBase:n,colorText:S(n,.85),colorTextSecondary:S(n,.65),colorTextTertiary:S(n,.45),colorTextQuaternary:S(n,.25),colorFill:S(n,.18),colorFillSecondary:S(n,.12),colorFillTertiary:S(n,.08),colorFillQuaternary:S(n,.04),colorBgElevated:D(o,12),colorBgContainer:D(o,8),colorBgLayout:D(o,0),colorBgSpotlight:D(o,26),colorBorder:D(o,26),colorBorderSecondary:D(o,19)}},$e=(t,e)=>{const o=Object.keys(Et).map(r=>{const a=wt(t[r],{theme:"dark"});return new Array(10).fill(1).reduce((s,i,l)=>(s[`${r}-${l+1}`]=a[l],s),{})}).reduce((r,a)=>(r=Object.assign(Object.assign({},r),a),r),{}),n=e??at(t);return Object.assign(Object.assign(Object.assign({},n),o),kt(t,{generateColorPalettes:Oe,generateNeutralColorPalettes:Ce}))},Se=$e;function _e(t){const{sizeUnit:e,sizeStep:o}=t,n=o-2;return{sizeXXL:e*(n+10),sizeXL:e*(n+6),sizeLG:e*(n+2),sizeMD:e*(n+2),sizeMS:e*(n+1),size:e*n,sizeSM:e*n,sizeXS:e*(n-1),sizeXXS:e*(n-1)}}const Te=(t,e)=>{const o=e??at(t),n=o.fontSizeSM,r=o.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},o),_e(e??t)),Rt(n)),{controlHeight:r}),Lt(Object.assign(Object.assign({},o),{controlHeight:r})))},xe=Te;function je(){const[t,e,o]=Mt();return{theme:t,token:e,hashId:o}}const Pe={defaultConfig:ct,defaultSeed:ct.token,useToken:je,defaultAlgorithm:at,darkAlgorithm:Se,compactAlgorithm:xe};var Ae=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};const{useToken:ze}=Pe,Ie=(t,e)=>{const o={},n=Object.assign({},t);return e.forEach(r=>{t&&r in t&&(o[r]=t[r],delete n[r])}),{picked:o,omitted:n}};function Ne(t,e){const o=t.type;if((o.__ANT_BUTTON===!0||t.type==="button")&&t.props.disabled||o.__ANT_SWITCH===!0&&(t.props.disabled||t.props.loading)||o.__ANT_RADIO===!0&&t.props.disabled){const{picked:n,omitted:r}=Ie(t.props.style,["position","left","right","top","bottom","float","display","zIndex"]),a=Object.assign(Object.assign({display:"inline-block"},n),{cursor:"not-allowed",width:t.props.block?"100%":void 0}),s=Object.assign(Object.assign({},r),{pointerEvents:"none"}),i=vt(t,{style:s,className:null});return g.createElement("span",{style:a,className:B(t.props.className,`${e}-disabled-compatible-wrapper`)},i)}return t}const _t=g.forwardRef((t,e)=>{var o,n;const{prefixCls:r,openClassName:a,getTooltipContainer:s,overlayClassName:i,color:l,overlayInnerStyle:m,children:f,afterOpenChange:c,afterVisibleChange:b,arrow:u=!0}=t,O=!!u,{token:A}=ze(),{getPopupContainer:E,getPrefixCls:z,direction:I}=g.useContext(ht),[L,F]=Kt(!1,{value:(o=t.open)!==null&&o!==void 0?o:t.visible,defaultValue:(n=t.defaultOpen)!==null&&n!==void 0?n:t.defaultVisible}),N=()=>{const{title:p,overlay:d}=t;return!p&&!d&&p!==0},W=p=>{var d,$;F(N()?!1:p),N()||((d=t.onOpenChange)===null||d===void 0||d.call(t,p),($=t.onVisibleChange)===null||$===void 0||$.call(t,p))},k=()=>{var p;const{builtinPlacements:d,arrowPointAtCenter:$=!1,autoAdjustOverflow:j=!0}=t,P=(p=typeof u!="boolean"&&(u==null?void 0:u.arrowPointAtCenter))!==null&&p!==void 0?p:$;return d||ge({arrowPointAtCenter:P,autoAdjustOverflow:j,arrowWidth:O?A.sizePopupArrow:0,offset:A.marginXXS})},_=(p,d)=>{const $=k(),j=Object.keys($).find(P=>{var v,ot;return $[P].points[0]===((v=d.points)===null||v===void 0?void 0:v[0])&&$[P].points[1]===((ot=d.points)===null||ot===void 0?void 0:ot[1])});if(j){const P=p.getBoundingClientRect(),v={top:"50%",left:"50%"};/top|Bottom/.test(j)?v.top=`${P.height-d.offset[1]}px`:/Top|bottom/.test(j)&&(v.top=`${-d.offset[1]}px`),/left|Right/.test(j)?v.left=`${P.width-d.offset[0]}px`:/right|Left/.test(j)&&(v.left=`${-d.offset[0]}px`),p.style.transformOrigin=`${v.left} ${v.top}`}},Y=()=>{const{title:p,overlay:d}=t;return p===0?p:d||p||""},{getPopupContainer:U,placement:q="top",mouseEnterDelay:G=.1,mouseLeaveDelay:Q=.1,overlayStyle:J,rootClassName:M}=t,tt=Ae(t,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),C=z("tooltip",r),V=z(),X=t["data-popover-inject"];let R=L;!("open"in t)&&!("visible"in t)&&N()&&(R=!1);const T=Ne(Vt(f)&&!Xt(f)?f:g.createElement("span",null,f),C),x=T.props,H=!x.className||typeof x.className=="string"?B(x.className,{[a||`${C}-open`]:!0}):x.className,[st,Tt]=$t(C,!X),et=St(C,l),xt=Object.assign(Object.assign({},m),et.overlayStyle),jt=et.arrowStyle,Pt=B(i,{[`${C}-rtl`]:I==="rtl"},et.className,M,Tt);return st(g.createElement(me,Object.assign({},tt,{showArrow:O,placement:q,mouseEnterDelay:G,mouseLeaveDelay:Q,prefixCls:C,overlayClassName:Pt,overlayStyle:Object.assign(Object.assign({},jt),J),getTooltipContainer:U||s||E,ref:e,builtinPlacements:k(),overlay:Y(),visible:R,onVisibleChange:W,afterVisibleChange:c??b,onPopupAlign:_,overlayInnerStyle:xt,arrowContent:g.createElement("span",{className:`${C}-arrow-content`}),motion:{motionName:Ft(V,"zoom-big-fast",t.transitionName),motionDeadline:1e3}}),R?vt(T,{className:H}):T))});_t._InternalPanelDoNotUseOrYouWillBeFired=ve;const Re=_t;export{Re as T,be as a,ge as b,Ut as c,de as g,le as i,ke as s,Pe as t,Gt as z};
