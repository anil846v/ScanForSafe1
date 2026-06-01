function Ku(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(i,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();function Zu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var id={exports:{}},Ei={},sd={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mn=Symbol.for("react.element"),Ju=Symbol.for("react.portal"),ef=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),rf=Symbol.for("react.profiler"),nf=Symbol.for("react.provider"),sf=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),lf=Symbol.for("react.memo"),df=Symbol.for("react.lazy"),Io=Symbol.iterator;function cf(e){return e===null||typeof e!="object"?null:(e=Io&&e[Io]||e["@@iterator"],typeof e=="function"?e:null)}var ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},od=Object.assign,ld={};function br(e,t,r){this.props=e,this.context=t,this.refs=ld,this.updater=r||ad}br.prototype.isReactComponent={};br.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};br.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dd(){}dd.prototype=br.prototype;function za(e,t,r){this.props=e,this.context=t,this.refs=ld,this.updater=r||ad}var Ea=za.prototype=new dd;Ea.constructor=za;od(Ea,br.prototype);Ea.isPureReactComponent=!0;var Bo=Array.isArray,cd=Object.prototype.hasOwnProperty,Ra={current:null},ud={key:!0,ref:!0,__self:!0,__source:!0};function fd(e,t,r){var i,s={},a=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)cd.call(t,i)&&!ud.hasOwnProperty(i)&&(s[i]=t[i]);var l=arguments.length-2;if(l===1)s.children=r;else if(1<l){for(var d=Array(l),c=0;c<l;c++)d[c]=arguments[c+2];s.children=d}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)s[i]===void 0&&(s[i]=l[i]);return{$$typeof:mn,type:e,key:a,ref:o,props:s,_owner:Ra.current}}function uf(e,t){return{$$typeof:mn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ia(e){return typeof e=="object"&&e!==null&&e.$$typeof===mn}function ff(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Po=/\/+/g;function Gi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ff(""+e.key):t.toString(36)}function Un(e,t,r,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case mn:case Ju:o=!0}}if(o)return o=e,s=s(o),e=i===""?"."+Gi(o,0):i,Bo(s)?(r="",e!=null&&(r=e.replace(Po,"$&/")+"/"),Un(s,t,r,"",function(c){return c})):s!=null&&(Ia(s)&&(s=uf(s,r+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Po,"$&/")+"/")+e)),t.push(s)),1;if(o=0,i=i===""?".":i+":",Bo(e))for(var l=0;l<e.length;l++){a=e[l];var d=i+Gi(a,l);o+=Un(a,t,r,d,s)}else if(d=cf(e),typeof d=="function")for(e=d.call(e),l=0;!(a=e.next()).done;)a=a.value,d=i+Gi(a,l++),o+=Un(a,t,r,d,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Cn(e,t,r){if(e==null)return e;var i=[],s=0;return Un(e,i,"","",function(a){return t.call(r,a,s++)}),i}function pf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Hn={transition:null},hf={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Hn,ReactCurrentOwner:Ra};function pd(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Cn,forEach:function(e,t,r){Cn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Cn(e,function(){t++}),t},toArray:function(e){return Cn(e,function(t){return t})||[]},only:function(e){if(!Ia(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=br;M.Fragment=ef;M.Profiler=rf;M.PureComponent=za;M.StrictMode=tf;M.Suspense=of;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hf;M.act=pd;M.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=od({},e.props),s=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Ra.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)cd.call(t,d)&&!ud.hasOwnProperty(d)&&(i[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)i.children=r;else if(1<d){l=Array(d);for(var c=0;c<d;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:mn,type:e.type,key:s,ref:a,props:i,_owner:o}};M.createContext=function(e){return e={$$typeof:sf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nf,_context:e},e.Consumer=e};M.createElement=fd;M.createFactory=function(e){var t=fd.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:af,render:e}};M.isValidElement=Ia;M.lazy=function(e){return{$$typeof:df,_payload:{_status:-1,_result:e},_init:pf}};M.memo=function(e,t){return{$$typeof:lf,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Hn.transition;Hn.transition={};try{e()}finally{Hn.transition=t}};M.unstable_act=pd;M.useCallback=function(e,t){return ce.current.useCallback(e,t)};M.useContext=function(e){return ce.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};M.useEffect=function(e,t){return ce.current.useEffect(e,t)};M.useId=function(){return ce.current.useId()};M.useImperativeHandle=function(e,t,r){return ce.current.useImperativeHandle(e,t,r)};M.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ce.current.useMemo(e,t)};M.useReducer=function(e,t,r){return ce.current.useReducer(e,t,r)};M.useRef=function(e){return ce.current.useRef(e)};M.useState=function(e){return ce.current.useState(e)};M.useSyncExternalStore=function(e,t,r){return ce.current.useSyncExternalStore(e,t,r)};M.useTransition=function(){return ce.current.useTransition()};M.version="18.3.1";sd.exports=M;var v=sd.exports;const hd=Zu(v),gf=Ku({__proto__:null,default:hd},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xf=v,mf=Symbol.for("react.element"),yf=Symbol.for("react.fragment"),bf=Object.prototype.hasOwnProperty,vf=xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wf={key:!0,ref:!0,__self:!0,__source:!0};function gd(e,t,r){var i,s={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)bf.call(t,i)&&!wf.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)s[i]===void 0&&(s[i]=t[i]);return{$$typeof:mf,type:e,key:a,ref:o,props:s,_owner:vf.current}}Ei.Fragment=yf;Ei.jsx=gd;Ei.jsxs=gd;id.exports=Ei;var n=id.exports,zs={},xd={exports:{}},ke={},md={exports:{}},yd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,B){var L=E.length;E.push(B);e:for(;0<L;){var V=L-1>>>1,Z=E[V];if(0<s(Z,B))E[V]=B,E[L]=Z,L=V;else break e}}function r(E){return E.length===0?null:E[0]}function i(E){if(E.length===0)return null;var B=E[0],L=E.pop();if(L!==B){E[0]=L;e:for(var V=0,Z=E.length,kn=Z>>>1;V<kn;){var Et=2*(V+1)-1,Qi=E[Et],Rt=Et+1,Sn=E[Rt];if(0>s(Qi,L))Rt<Z&&0>s(Sn,Qi)?(E[V]=Sn,E[Rt]=L,V=Rt):(E[V]=Qi,E[Et]=L,V=Et);else if(Rt<Z&&0>s(Sn,L))E[V]=Sn,E[Rt]=L,V=Rt;else break e}}return B}function s(E,B){var L=E.sortIndex-B.sortIndex;return L!==0?L:E.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var d=[],c=[],x=1,p=null,g=3,y=!1,w=!1,m=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var B=r(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=E)i(c),B.sortIndex=B.expirationTime,t(d,B);else break;B=r(c)}}function b(E){if(m=!1,h(E),!w)if(r(d)!==null)w=!0,Vi(S);else{var B=r(c);B!==null&&qi(b,B.startTime-E)}}function S(E,B){w=!1,m&&(m=!1,f(I),I=-1),y=!0;var L=g;try{for(h(B),p=r(d);p!==null&&(!(p.expirationTime>B)||E&&!Le());){var V=p.callback;if(typeof V=="function"){p.callback=null,g=p.priorityLevel;var Z=V(p.expirationTime<=B);B=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===r(d)&&i(d),h(B)}else i(d);p=r(d)}if(p!==null)var kn=!0;else{var Et=r(c);Et!==null&&qi(b,Et.startTime-B),kn=!1}return kn}finally{p=null,g=L,y=!1}}var C=!1,z=null,I=-1,_=5,P=-1;function Le(){return!(e.unstable_now()-P<_)}function Cr(){if(z!==null){var E=e.unstable_now();P=E;var B=!0;try{B=z(!0,E)}finally{B?Nr():(C=!1,z=null)}}else C=!1}var Nr;if(typeof u=="function")Nr=function(){u(Cr)};else if(typeof MessageChannel<"u"){var Ro=new MessageChannel,Xu=Ro.port2;Ro.port1.onmessage=Cr,Nr=function(){Xu.postMessage(null)}}else Nr=function(){j(Cr,0)};function Vi(E){z=E,C||(C=!0,Nr())}function qi(E,B){I=j(function(){E(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Vi(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(d)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var L=g;g=B;try{return E()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,B){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=g;g=E;try{return B()}finally{g=L}},e.unstable_scheduleCallback=function(E,B,L){var V=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?V+L:V):L=V,E){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,E={id:x++,callback:B,priorityLevel:E,startTime:L,expirationTime:Z,sortIndex:-1},L>V?(E.sortIndex=L,t(c,E),r(d)===null&&E===r(c)&&(m?(f(I),I=-1):m=!0,qi(b,L-V))):(E.sortIndex=Z,t(d,E),w||y||(w=!0,Vi(S))),E},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(E){var B=g;return function(){var L=g;g=B;try{return E.apply(this,arguments)}finally{g=L}}}})(yd);md.exports=yd;var jf=md.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf=v,je=jf;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bd=new Set,Xr={};function Ht(e,t){fr(e,t),fr(e+"Capture",t)}function fr(e,t){for(Xr[e]=t,e=0;e<t.length;e++)bd.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Es=Object.prototype.hasOwnProperty,Sf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lo={},Mo={};function Cf(e){return Es.call(Mo,e)?!0:Es.call(Lo,e)?!1:Sf.test(e)?Mo[e]=!0:(Lo[e]=!0,!1)}function Nf(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zf(e,t,r,i){if(t===null||typeof t>"u"||Nf(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,r,i,s,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ba=/[\-:]([a-z])/g;function Pa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ba,Pa);ne[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ba,Pa);ne[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ba,Pa);ne[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function La(e,t,r,i){var s=ne.hasOwnProperty(t)?ne[t]:null;(s!==null?s.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zf(t,r,s,i)&&(r=null),i||s===null?Cf(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,i=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var it=kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nn=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Gt=Symbol.for("react.fragment"),Ma=Symbol.for("react.strict_mode"),Rs=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),wd=Symbol.for("react.context"),Ta=Symbol.for("react.forward_ref"),Is=Symbol.for("react.suspense"),Bs=Symbol.for("react.suspense_list"),Fa=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),jd=Symbol.for("react.offscreen"),To=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=To&&e[To]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,Xi;function Wr(e){if(Xi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Xi=t&&t[1]||""}return`
`+Xi+e}var Ki=!1;function Zi(e,t){if(!e||Ki)return"";Ki=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var i=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){i=c}e.call(t.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),a=i.stack.split(`
`),o=s.length-1,l=a.length-1;1<=o&&0<=l&&s[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==a[l]){var d=`
`+s[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=l);break}}}finally{Ki=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Wr(e):""}function Ef(e){switch(e.tag){case 5:return Wr(e.type);case 16:return Wr("Lazy");case 13:return Wr("Suspense");case 19:return Wr("SuspenseList");case 0:case 2:case 15:return e=Zi(e.type,!1),e;case 11:return e=Zi(e.type.render,!1),e;case 1:return e=Zi(e.type,!0),e;default:return""}}function Ps(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gt:return"Fragment";case Qt:return"Portal";case Rs:return"Profiler";case Ma:return"StrictMode";case Is:return"Suspense";case Bs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wd:return(e.displayName||"Context")+".Consumer";case vd:return(e._context.displayName||"Context")+".Provider";case Ta:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fa:return t=e.displayName||null,t!==null?t:Ps(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return Ps(e(t))}catch{}}return null}function Rf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ps(t);case 8:return t===Ma?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function If(e){var t=kd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zn(e){e._valueTracker||(e._valueTracker=If(e))}function Sd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=kd(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ls(e,t){var r=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Fo(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=kt(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cd(e,t){t=t.checked,t!=null&&La(e,"checked",t,!1)}function Ms(e,t){Cd(e,t);var r=kt(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ts(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ts(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wo(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ts(e,t,r){(t!=="number"||ti(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Ar=Array.isArray;function ar(e,t,r,i){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&i&&(e[r].defaultSelected=!0)}else{for(r=""+kt(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Fs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ao(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(k(92));if(Ar(r)){if(1<r.length)throw Error(k(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:kt(r)}}function Nd(e,t){var r=kt(t.value),i=kt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Oo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ws(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var En,Ed=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(En=En||document.createElement("div"),En.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=En.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bf=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(e){Bf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dr[t]=Dr[e]})});function Rd(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Dr.hasOwnProperty(e)&&Dr[e]?(""+t).trim():t+"px"}function Id(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,s=Rd(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,s):e[r]=s}}var Pf=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function As(e,t){if(t){if(Pf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Os(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _s=null;function Wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,or=null,lr=null;function _o(e){if(e=vn(e)){if(typeof Ds!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Li(t),Ds(e.stateNode,e.type,t))}}function Bd(e){or?lr?lr.push(e):lr=[e]:or=e}function Pd(){if(or){var e=or,t=lr;if(lr=or=null,_o(e),t)for(e=0;e<t.length;e++)_o(t[e])}}function Ld(e,t){return e(t)}function Md(){}var Ji=!1;function Td(e,t,r){if(Ji)return e(t,r);Ji=!0;try{return Ld(e,t,r)}finally{Ji=!1,(or!==null||lr!==null)&&(Md(),Pd())}}function Zr(e,t){var r=e.stateNode;if(r===null)return null;var i=Li(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(k(231,t,typeof r));return r}var Us=!1;if(et)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){Us=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{Us=!1}function Lf(e,t,r,i,s,a,o,l,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(x){this.onError(x)}}var Ur=!1,ri=null,ni=!1,Hs=null,Mf={onError:function(e){Ur=!0,ri=e}};function Tf(e,t,r,i,s,a,o,l,d){Ur=!1,ri=null,Lf.apply(Mf,arguments)}function Ff(e,t,r,i,s,a,o,l,d){if(Tf.apply(this,arguments),Ur){if(Ur){var c=ri;Ur=!1,ri=null}else throw Error(k(198));ni||(ni=!0,Hs=c)}}function $t(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Fd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Do(e){if($t(e)!==e)throw Error(k(188))}function Wf(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(k(188));return t!==e?null:e}for(var r=e,i=t;;){var s=r.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){r=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===r)return Do(s),e;if(a===i)return Do(s),t;a=a.sibling}throw Error(k(188))}if(r.return!==i.return)r=s,i=a;else{for(var o=!1,l=s.child;l;){if(l===r){o=!0,r=s,i=a;break}if(l===i){o=!0,i=s,r=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===r){o=!0,r=a,i=s;break}if(l===i){o=!0,i=a,r=s;break}l=l.sibling}if(!o)throw Error(k(189))}}if(r.alternate!==i)throw Error(k(190))}if(r.tag!==3)throw Error(k(188));return r.stateNode.current===r?e:t}function Wd(e){return e=Wf(e),e!==null?Ad(e):null}function Ad(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ad(e);if(t!==null)return t;e=e.sibling}return null}var Od=je.unstable_scheduleCallback,Uo=je.unstable_cancelCallback,Af=je.unstable_shouldYield,Of=je.unstable_requestPaint,q=je.unstable_now,_f=je.unstable_getCurrentPriorityLevel,Aa=je.unstable_ImmediatePriority,_d=je.unstable_UserBlockingPriority,ii=je.unstable_NormalPriority,Df=je.unstable_LowPriority,Dd=je.unstable_IdlePriority,Ri=null,Ye=null;function Uf(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Ri,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Yf,Hf=Math.log,$f=Math.LN2;function Yf(e){return e>>>=0,e===0?32:31-(Hf(e)/$f|0)|0}var Rn=64,In=4194304;function Or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function si(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,s=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~s;l!==0?i=Or(l):(a&=o,a!==0&&(i=Or(a)))}else o=r&~s,o!==0?i=Or(o):a!==0&&(i=Or(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&s)&&(s=i&-i,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Ae(t),s=1<<r,i|=e[r],t&=~s;return i}function Vf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qf(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ae(a),l=1<<o,d=s[o];d===-1?(!(l&r)||l&i)&&(s[o]=Vf(l,t)):d<=t&&(e.expiredLanes|=l),a&=~l}}function $s(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ud(){var e=Rn;return Rn<<=1,!(Rn&4194240)&&(Rn=64),e}function es(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function yn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=r}function Qf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Ae(r),a=1<<s;t[s]=0,i[s]=-1,e[s]=-1,r&=~a}}function Oa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Ae(r),s=1<<i;s&t|e[i]&t&&(e[i]|=t),r&=~s}}var F=0;function Hd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $d,_a,Yd,Vd,qd,Ys=!1,Bn=[],pt=null,ht=null,gt=null,Jr=new Map,en=new Map,lt=[],Gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ho(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":Jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":en.delete(t.pointerId)}}function Rr(e,t,r,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=vn(t),t!==null&&_a(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Xf(e,t,r,i,s){switch(t){case"focusin":return pt=Rr(pt,e,t,r,i,s),!0;case"dragenter":return ht=Rr(ht,e,t,r,i,s),!0;case"mouseover":return gt=Rr(gt,e,t,r,i,s),!0;case"pointerover":var a=s.pointerId;return Jr.set(a,Rr(Jr.get(a)||null,e,t,r,i,s)),!0;case"gotpointercapture":return a=s.pointerId,en.set(a,Rr(en.get(a)||null,e,t,r,i,s)),!0}return!1}function Qd(e){var t=Pt(e.target);if(t!==null){var r=$t(t);if(r!==null){if(t=r.tag,t===13){if(t=Fd(r),t!==null){e.blockedOn=t,qd(e.priority,function(){Yd(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $n(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Vs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);_s=i,r.target.dispatchEvent(i),_s=null}else return t=vn(r),t!==null&&_a(t),e.blockedOn=r,!1;t.shift()}return!0}function $o(e,t,r){$n(e)&&r.delete(t)}function Kf(){Ys=!1,pt!==null&&$n(pt)&&(pt=null),ht!==null&&$n(ht)&&(ht=null),gt!==null&&$n(gt)&&(gt=null),Jr.forEach($o),en.forEach($o)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Ys||(Ys=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Kf)))}function tn(e){function t(s){return Ir(s,e)}if(0<Bn.length){Ir(Bn[0],e);for(var r=1;r<Bn.length;r++){var i=Bn[r];i.blockedOn===e&&(i.blockedOn=null)}}for(pt!==null&&Ir(pt,e),ht!==null&&Ir(ht,e),gt!==null&&Ir(gt,e),Jr.forEach(t),en.forEach(t),r=0;r<lt.length;r++)i=lt[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<lt.length&&(r=lt[0],r.blockedOn===null);)Qd(r),r.blockedOn===null&&lt.shift()}var dr=it.ReactCurrentBatchConfig,ai=!0;function Zf(e,t,r,i){var s=F,a=dr.transition;dr.transition=null;try{F=1,Da(e,t,r,i)}finally{F=s,dr.transition=a}}function Jf(e,t,r,i){var s=F,a=dr.transition;dr.transition=null;try{F=4,Da(e,t,r,i)}finally{F=s,dr.transition=a}}function Da(e,t,r,i){if(ai){var s=Vs(e,t,r,i);if(s===null)cs(e,t,i,oi,r),Ho(e,i);else if(Xf(s,e,t,r,i))i.stopPropagation();else if(Ho(e,i),t&4&&-1<Gf.indexOf(e)){for(;s!==null;){var a=vn(s);if(a!==null&&$d(a),a=Vs(e,t,r,i),a===null&&cs(e,t,i,oi,r),a===s)break;s=a}s!==null&&i.stopPropagation()}else cs(e,t,i,null,r)}}var oi=null;function Vs(e,t,r,i){if(oi=null,e=Wa(i),e=Pt(e),e!==null)if(t=$t(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Fd(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oi=e,null}function Gd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_f()){case Aa:return 1;case _d:return 4;case ii:case Df:return 16;case Dd:return 536870912;default:return 16}default:return 16}}var ct=null,Ua=null,Yn=null;function Xd(){if(Yn)return Yn;var e,t=Ua,r=t.length,i,s="value"in ct?ct.value:ct.textContent,a=s.length;for(e=0;e<r&&t[e]===s[e];e++);var o=r-e;for(i=1;i<=o&&t[r-i]===s[a-i];i++);return Yn=s.slice(e,1<i?1-i:void 0)}function Vn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pn(){return!0}function Yo(){return!1}function Se(e){function t(r,i,s,a,o){this._reactName=r,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Pn:Yo,this.isPropagationStopped=Yo,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),t}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ha=Se(vr),bn=$({},vr,{view:0,detail:0}),ep=Se(bn),ts,rs,Br,Ii=$({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(ts=e.screenX-Br.screenX,rs=e.screenY-Br.screenY):rs=ts=0,Br=e),ts)},movementY:function(e){return"movementY"in e?e.movementY:rs}}),Vo=Se(Ii),tp=$({},Ii,{dataTransfer:0}),rp=Se(tp),np=$({},bn,{relatedTarget:0}),ns=Se(np),ip=$({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),sp=Se(ip),ap=$({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),op=Se(ap),lp=$({},vr,{data:0}),qo=Se(lp),dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=up[e])?!!t[e]:!1}function $a(){return fp}var pp=$({},bn,{key:function(e){if(e.key){var t=dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$a,charCode:function(e){return e.type==="keypress"?Vn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hp=Se(pp),gp=$({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qo=Se(gp),xp=$({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$a}),mp=Se(xp),yp=$({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bp=Se(yp),vp=$({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wp=Se(vp),jp=[9,13,27,32],Ya=et&&"CompositionEvent"in window,Hr=null;et&&"documentMode"in document&&(Hr=document.documentMode);var kp=et&&"TextEvent"in window&&!Hr,Kd=et&&(!Ya||Hr&&8<Hr&&11>=Hr),Go=" ",Xo=!1;function Zd(e,t){switch(e){case"keyup":return jp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function Sp(e,t){switch(e){case"compositionend":return Jd(t);case"keypress":return t.which!==32?null:(Xo=!0,Go);case"textInput":return e=t.data,e===Go&&Xo?null:e;default:return null}}function Cp(e,t){if(Xt)return e==="compositionend"||!Ya&&Zd(e,t)?(e=Xd(),Yn=Ua=ct=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kd&&t.locale!=="ko"?null:t.data;default:return null}}var Np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Np[e.type]:t==="textarea"}function ec(e,t,r,i){Bd(i),t=li(t,"onChange"),0<t.length&&(r=new Ha("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var $r=null,rn=null;function zp(e){uc(e,0)}function Bi(e){var t=Jt(e);if(Sd(t))return e}function Ep(e,t){if(e==="change")return t}var tc=!1;if(et){var is;if(et){var ss="oninput"in document;if(!ss){var Zo=document.createElement("div");Zo.setAttribute("oninput","return;"),ss=typeof Zo.oninput=="function"}is=ss}else is=!1;tc=is&&(!document.documentMode||9<document.documentMode)}function Jo(){$r&&($r.detachEvent("onpropertychange",rc),rn=$r=null)}function rc(e){if(e.propertyName==="value"&&Bi(rn)){var t=[];ec(t,rn,e,Wa(e)),Td(zp,t)}}function Rp(e,t,r){e==="focusin"?(Jo(),$r=t,rn=r,$r.attachEvent("onpropertychange",rc)):e==="focusout"&&Jo()}function Ip(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bi(rn)}function Bp(e,t){if(e==="click")return Bi(t)}function Pp(e,t){if(e==="input"||e==="change")return Bi(t)}function Lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _e=typeof Object.is=="function"?Object.is:Lp;function nn(e,t){if(_e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var s=r[i];if(!Es.call(t,s)||!_e(e[s],t[s]))return!1}return!0}function el(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tl(e,t){var r=el(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=el(r)}}function nc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ic(){for(var e=window,t=ti();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ti(e.document)}return t}function Va(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mp(e){var t=ic(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&nc(r.ownerDocument.documentElement,r)){if(i!==null&&Va(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,a=Math.min(i.start,s);i=i.end===void 0?a:Math.min(i.end,s),!e.extend&&a>i&&(s=i,i=a,a=s),s=tl(r,a);var o=tl(r,i);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tp=et&&"documentMode"in document&&11>=document.documentMode,Kt=null,qs=null,Yr=null,Qs=!1;function rl(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Qs||Kt==null||Kt!==ti(i)||(i=Kt,"selectionStart"in i&&Va(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yr&&nn(Yr,i)||(Yr=i,i=li(qs,"onSelect"),0<i.length&&(t=new Ha("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Kt)))}function Ln(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Zt={animationend:Ln("Animation","AnimationEnd"),animationiteration:Ln("Animation","AnimationIteration"),animationstart:Ln("Animation","AnimationStart"),transitionend:Ln("Transition","TransitionEnd")},as={},sc={};et&&(sc=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function Pi(e){if(as[e])return as[e];if(!Zt[e])return e;var t=Zt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in sc)return as[e]=t[r];return e}var ac=Pi("animationend"),oc=Pi("animationiteration"),lc=Pi("animationstart"),dc=Pi("transitionend"),cc=new Map,nl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){cc.set(e,t),Ht(t,[e])}for(var os=0;os<nl.length;os++){var ls=nl[os],Fp=ls.toLowerCase(),Wp=ls[0].toUpperCase()+ls.slice(1);Ct(Fp,"on"+Wp)}Ct(ac,"onAnimationEnd");Ct(oc,"onAnimationIteration");Ct(lc,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(dc,"onTransitionEnd");fr("onMouseEnter",["mouseout","mouseover"]);fr("onMouseLeave",["mouseout","mouseover"]);fr("onPointerEnter",["pointerout","pointerover"]);fr("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ap=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function il(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,Ff(i,t,void 0,e),e.currentTarget=null}function uc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],s=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var o=i.length-1;0<=o;o--){var l=i[o],d=l.instance,c=l.currentTarget;if(l=l.listener,d!==a&&s.isPropagationStopped())break e;il(s,l,c),a=d}else for(o=0;o<i.length;o++){if(l=i[o],d=l.instance,c=l.currentTarget,l=l.listener,d!==a&&s.isPropagationStopped())break e;il(s,l,c),a=d}}}if(ni)throw e=Hs,ni=!1,Hs=null,e}function A(e,t){var r=t[Js];r===void 0&&(r=t[Js]=new Set);var i=e+"__bubble";r.has(i)||(fc(t,e,2,!1),r.add(i))}function ds(e,t,r){var i=0;t&&(i|=4),fc(r,e,i,t)}var Mn="_reactListening"+Math.random().toString(36).slice(2);function sn(e){if(!e[Mn]){e[Mn]=!0,bd.forEach(function(r){r!=="selectionchange"&&(Ap.has(r)||ds(r,!1,e),ds(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mn]||(t[Mn]=!0,ds("selectionchange",!1,t))}}function fc(e,t,r,i){switch(Gd(t)){case 1:var s=Zf;break;case 4:s=Jf;break;default:s=Da}r=s.bind(null,t,r,e),s=void 0,!Us||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function cs(e,t,r,i,s){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=i.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Pt(l),o===null)return;if(d=o.tag,d===5||d===6){i=a=o;continue e}l=l.parentNode}}i=i.return}Td(function(){var c=a,x=Wa(r),p=[];e:{var g=cc.get(e);if(g!==void 0){var y=Ha,w=e;switch(e){case"keypress":if(Vn(r)===0)break e;case"keydown":case"keyup":y=hp;break;case"focusin":w="focus",y=ns;break;case"focusout":w="blur",y=ns;break;case"beforeblur":case"afterblur":y=ns;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=mp;break;case ac:case oc:case lc:y=sp;break;case dc:y=bp;break;case"scroll":y=ep;break;case"wheel":y=wp;break;case"copy":case"cut":case"paste":y=op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Qo}var m=(t&4)!==0,j=!m&&e==="scroll",f=m?g!==null?g+"Capture":null:g;m=[];for(var u=c,h;u!==null;){h=u;var b=h.stateNode;if(h.tag===5&&b!==null&&(h=b,f!==null&&(b=Zr(u,f),b!=null&&m.push(an(u,b,h)))),j)break;u=u.return}0<m.length&&(g=new y(g,w,null,r,x),p.push({event:g,listeners:m}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&r!==_s&&(w=r.relatedTarget||r.fromElement)&&(Pt(w)||w[tt]))break e;if((y||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,y?(w=r.relatedTarget||r.toElement,y=c,w=w?Pt(w):null,w!==null&&(j=$t(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(m=Vo,b="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(m=Qo,b="onPointerLeave",f="onPointerEnter",u="pointer"),j=y==null?g:Jt(y),h=w==null?g:Jt(w),g=new m(b,u+"leave",y,r,x),g.target=j,g.relatedTarget=h,b=null,Pt(x)===c&&(m=new m(f,u+"enter",w,r,x),m.target=h,m.relatedTarget=j,b=m),j=b,y&&w)t:{for(m=y,f=w,u=0,h=m;h;h=qt(h))u++;for(h=0,b=f;b;b=qt(b))h++;for(;0<u-h;)m=qt(m),u--;for(;0<h-u;)f=qt(f),h--;for(;u--;){if(m===f||f!==null&&m===f.alternate)break t;m=qt(m),f=qt(f)}m=null}else m=null;y!==null&&sl(p,g,y,m,!1),w!==null&&j!==null&&sl(p,j,w,m,!0)}}e:{if(g=c?Jt(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=Ep;else if(Ko(g))if(tc)S=Pp;else{S=Ip;var C=Rp}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Bp);if(S&&(S=S(e,c))){ec(p,S,r,x);break e}C&&C(e,g,c),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Ts(g,"number",g.value)}switch(C=c?Jt(c):window,e){case"focusin":(Ko(C)||C.contentEditable==="true")&&(Kt=C,qs=c,Yr=null);break;case"focusout":Yr=qs=Kt=null;break;case"mousedown":Qs=!0;break;case"contextmenu":case"mouseup":case"dragend":Qs=!1,rl(p,r,x);break;case"selectionchange":if(Tp)break;case"keydown":case"keyup":rl(p,r,x)}var z;if(Ya)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Xt?Zd(e,r)&&(I="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(I="onCompositionStart");I&&(Kd&&r.locale!=="ko"&&(Xt||I!=="onCompositionStart"?I==="onCompositionEnd"&&Xt&&(z=Xd()):(ct=x,Ua="value"in ct?ct.value:ct.textContent,Xt=!0)),C=li(c,I),0<C.length&&(I=new qo(I,e,null,r,x),p.push({event:I,listeners:C}),z?I.data=z:(z=Jd(r),z!==null&&(I.data=z)))),(z=kp?Sp(e,r):Cp(e,r))&&(c=li(c,"onBeforeInput"),0<c.length&&(x=new qo("onBeforeInput","beforeinput",null,r,x),p.push({event:x,listeners:c}),x.data=z))}uc(p,t)})}function an(e,t,r){return{instance:e,listener:t,currentTarget:r}}function li(e,t){for(var r=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Zr(e,r),a!=null&&i.unshift(an(e,a,s)),a=Zr(e,t),a!=null&&i.push(an(e,a,s))),e=e.return}return i}function qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sl(e,t,r,i,s){for(var a=t._reactName,o=[];r!==null&&r!==i;){var l=r,d=l.alternate,c=l.stateNode;if(d!==null&&d===i)break;l.tag===5&&c!==null&&(l=c,s?(d=Zr(r,a),d!=null&&o.unshift(an(r,d,l))):s||(d=Zr(r,a),d!=null&&o.push(an(r,d,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Op=/\r\n?/g,_p=/\u0000|\uFFFD/g;function al(e){return(typeof e=="string"?e:""+e).replace(Op,`
`).replace(_p,"")}function Tn(e,t,r){if(t=al(t),al(e)!==t&&r)throw Error(k(425))}function di(){}var Gs=null,Xs=null;function Ks(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zs=typeof setTimeout=="function"?setTimeout:void 0,Dp=typeof clearTimeout=="function"?clearTimeout:void 0,ol=typeof Promise=="function"?Promise:void 0,Up=typeof queueMicrotask=="function"?queueMicrotask:typeof ol<"u"?function(e){return ol.resolve(null).then(e).catch(Hp)}:Zs;function Hp(e){setTimeout(function(){throw e})}function us(e,t){var r=t,i=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(i===0){e.removeChild(s),tn(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=s}while(r);tn(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ll(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),He="__reactFiber$"+wr,on="__reactProps$"+wr,tt="__reactContainer$"+wr,Js="__reactEvents$"+wr,$p="__reactListeners$"+wr,Yp="__reactHandles$"+wr;function Pt(e){var t=e[He];if(t)return t;for(var r=e.parentNode;r;){if(t=r[tt]||r[He]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ll(e);e!==null;){if(r=e[He])return r;e=ll(e)}return t}e=r,r=e.parentNode}return null}function vn(e){return e=e[He]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Li(e){return e[on]||null}var ea=[],er=-1;function Nt(e){return{current:e}}function O(e){0>er||(e.current=ea[er],ea[er]=null,er--)}function W(e,t){er++,ea[er]=e.current,e.current=t}var St={},oe=Nt(St),xe=Nt(!1),At=St;function pr(e,t){var r=e.type.contextTypes;if(!r)return St;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in r)s[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function me(e){return e=e.childContextTypes,e!=null}function ci(){O(xe),O(oe)}function dl(e,t,r){if(oe.current!==St)throw Error(k(168));W(oe,t),W(xe,r)}function pc(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var s in i)if(!(s in t))throw Error(k(108,Rf(e)||"Unknown",s));return $({},r,i)}function ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,At=oe.current,W(oe,e),W(xe,xe.current),!0}function cl(e,t,r){var i=e.stateNode;if(!i)throw Error(k(169));r?(e=pc(e,t,At),i.__reactInternalMemoizedMergedChildContext=e,O(xe),O(oe),W(oe,e)):O(xe),W(xe,r)}var Qe=null,Mi=!1,fs=!1;function hc(e){Qe===null?Qe=[e]:Qe.push(e)}function Vp(e){Mi=!0,hc(e)}function zt(){if(!fs&&Qe!==null){fs=!0;var e=0,t=F;try{var r=Qe;for(F=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}Qe=null,Mi=!1}catch(s){throw Qe!==null&&(Qe=Qe.slice(e+1)),Od(Aa,zt),s}finally{F=t,fs=!1}}return null}var tr=[],rr=0,fi=null,pi=0,Ce=[],Ne=0,Ot=null,Xe=1,Ke="";function It(e,t){tr[rr++]=pi,tr[rr++]=fi,fi=e,pi=t}function gc(e,t,r){Ce[Ne++]=Xe,Ce[Ne++]=Ke,Ce[Ne++]=Ot,Ot=e;var i=Xe;e=Ke;var s=32-Ae(i)-1;i&=~(1<<s),r+=1;var a=32-Ae(t)+s;if(30<a){var o=s-s%5;a=(i&(1<<o)-1).toString(32),i>>=o,s-=o,Xe=1<<32-Ae(t)+s|r<<s|i,Ke=a+e}else Xe=1<<a|r<<s|i,Ke=e}function qa(e){e.return!==null&&(It(e,1),gc(e,1,0))}function Qa(e){for(;e===fi;)fi=tr[--rr],tr[rr]=null,pi=tr[--rr],tr[rr]=null;for(;e===Ot;)Ot=Ce[--Ne],Ce[Ne]=null,Ke=Ce[--Ne],Ce[Ne]=null,Xe=Ce[--Ne],Ce[Ne]=null}var we=null,ve=null,D=!1,We=null;function xc(e,t){var r=Ee(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ul(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ve=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ot!==null?{id:Xe,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ee(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,we=e,ve=null,!0):!1;default:return!1}}function ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ra(e){if(D){var t=ve;if(t){var r=t;if(!ul(e,t)){if(ta(e))throw Error(k(418));t=xt(r.nextSibling);var i=we;t&&ul(e,t)?xc(i,r):(e.flags=e.flags&-4097|2,D=!1,we=e)}}else{if(ta(e))throw Error(k(418));e.flags=e.flags&-4097|2,D=!1,we=e}}}function fl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Fn(e){if(e!==we)return!1;if(!D)return fl(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ks(e.type,e.memoizedProps)),t&&(t=ve)){if(ta(e))throw mc(),Error(k(418));for(;t;)xc(e,t),t=xt(t.nextSibling)}if(fl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ve=xt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=we?xt(e.stateNode.nextSibling):null;return!0}function mc(){for(var e=ve;e;)e=xt(e.nextSibling)}function hr(){ve=we=null,D=!1}function Ga(e){We===null?We=[e]:We.push(e)}var qp=it.ReactCurrentBatchConfig;function Pr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(k(309));var i=r.stateNode}if(!i)throw Error(k(147,e));var s=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=s.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(k(284));if(!r._owner)throw Error(k(290,e))}return e}function Wn(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pl(e){var t=e._init;return t(e._payload)}function yc(e){function t(f,u){if(e){var h=f.deletions;h===null?(f.deletions=[u],f.flags|=16):h.push(u)}}function r(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function i(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function s(f,u){return f=vt(f,u),f.index=0,f.sibling=null,f}function a(f,u,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<u?(f.flags|=2,u):h):(f.flags|=2,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,u,h,b){return u===null||u.tag!==6?(u=bs(h,f.mode,b),u.return=f,u):(u=s(u,h),u.return=f,u)}function d(f,u,h,b){var S=h.type;return S===Gt?x(f,u,h.props.children,b,h.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===at&&pl(S)===u.type)?(b=s(u,h.props),b.ref=Pr(f,u,h),b.return=f,b):(b=Jn(h.type,h.key,h.props,null,f.mode,b),b.ref=Pr(f,u,h),b.return=f,b)}function c(f,u,h,b){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=vs(h,f.mode,b),u.return=f,u):(u=s(u,h.children||[]),u.return=f,u)}function x(f,u,h,b,S){return u===null||u.tag!==7?(u=Ft(h,f.mode,b,S),u.return=f,u):(u=s(u,h),u.return=f,u)}function p(f,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=bs(""+u,f.mode,h),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Nn:return h=Jn(u.type,u.key,u.props,null,f.mode,h),h.ref=Pr(f,null,u),h.return=f,h;case Qt:return u=vs(u,f.mode,h),u.return=f,u;case at:var b=u._init;return p(f,b(u._payload),h)}if(Ar(u)||zr(u))return u=Ft(u,f.mode,h,null),u.return=f,u;Wn(f,u)}return null}function g(f,u,h,b){var S=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(f,u,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Nn:return h.key===S?d(f,u,h,b):null;case Qt:return h.key===S?c(f,u,h,b):null;case at:return S=h._init,g(f,u,S(h._payload),b)}if(Ar(h)||zr(h))return S!==null?null:x(f,u,h,b,null);Wn(f,h)}return null}function y(f,u,h,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(h)||null,l(u,f,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Nn:return f=f.get(b.key===null?h:b.key)||null,d(u,f,b,S);case Qt:return f=f.get(b.key===null?h:b.key)||null,c(u,f,b,S);case at:var C=b._init;return y(f,u,h,C(b._payload),S)}if(Ar(b)||zr(b))return f=f.get(h)||null,x(u,f,b,S,null);Wn(u,b)}return null}function w(f,u,h,b){for(var S=null,C=null,z=u,I=u=0,_=null;z!==null&&I<h.length;I++){z.index>I?(_=z,z=null):_=z.sibling;var P=g(f,z,h[I],b);if(P===null){z===null&&(z=_);break}e&&z&&P.alternate===null&&t(f,z),u=a(P,u,I),C===null?S=P:C.sibling=P,C=P,z=_}if(I===h.length)return r(f,z),D&&It(f,I),S;if(z===null){for(;I<h.length;I++)z=p(f,h[I],b),z!==null&&(u=a(z,u,I),C===null?S=z:C.sibling=z,C=z);return D&&It(f,I),S}for(z=i(f,z);I<h.length;I++)_=y(z,f,I,h[I],b),_!==null&&(e&&_.alternate!==null&&z.delete(_.key===null?I:_.key),u=a(_,u,I),C===null?S=_:C.sibling=_,C=_);return e&&z.forEach(function(Le){return t(f,Le)}),D&&It(f,I),S}function m(f,u,h,b){var S=zr(h);if(typeof S!="function")throw Error(k(150));if(h=S.call(h),h==null)throw Error(k(151));for(var C=S=null,z=u,I=u=0,_=null,P=h.next();z!==null&&!P.done;I++,P=h.next()){z.index>I?(_=z,z=null):_=z.sibling;var Le=g(f,z,P.value,b);if(Le===null){z===null&&(z=_);break}e&&z&&Le.alternate===null&&t(f,z),u=a(Le,u,I),C===null?S=Le:C.sibling=Le,C=Le,z=_}if(P.done)return r(f,z),D&&It(f,I),S;if(z===null){for(;!P.done;I++,P=h.next())P=p(f,P.value,b),P!==null&&(u=a(P,u,I),C===null?S=P:C.sibling=P,C=P);return D&&It(f,I),S}for(z=i(f,z);!P.done;I++,P=h.next())P=y(z,f,I,P.value,b),P!==null&&(e&&P.alternate!==null&&z.delete(P.key===null?I:P.key),u=a(P,u,I),C===null?S=P:C.sibling=P,C=P);return e&&z.forEach(function(Cr){return t(f,Cr)}),D&&It(f,I),S}function j(f,u,h,b){if(typeof h=="object"&&h!==null&&h.type===Gt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Nn:e:{for(var S=h.key,C=u;C!==null;){if(C.key===S){if(S=h.type,S===Gt){if(C.tag===7){r(f,C.sibling),u=s(C,h.props.children),u.return=f,f=u;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===at&&pl(S)===C.type){r(f,C.sibling),u=s(C,h.props),u.ref=Pr(f,C,h),u.return=f,f=u;break e}r(f,C);break}else t(f,C);C=C.sibling}h.type===Gt?(u=Ft(h.props.children,f.mode,b,h.key),u.return=f,f=u):(b=Jn(h.type,h.key,h.props,null,f.mode,b),b.ref=Pr(f,u,h),b.return=f,f=b)}return o(f);case Qt:e:{for(C=h.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){r(f,u.sibling),u=s(u,h.children||[]),u.return=f,f=u;break e}else{r(f,u);break}else t(f,u);u=u.sibling}u=vs(h,f.mode,b),u.return=f,f=u}return o(f);case at:return C=h._init,j(f,u,C(h._payload),b)}if(Ar(h))return w(f,u,h,b);if(zr(h))return m(f,u,h,b);Wn(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(r(f,u.sibling),u=s(u,h),u.return=f,f=u):(r(f,u),u=bs(h,f.mode,b),u.return=f,f=u),o(f)):r(f,u)}return j}var gr=yc(!0),bc=yc(!1),hi=Nt(null),gi=null,nr=null,Xa=null;function Ka(){Xa=nr=gi=null}function Za(e){var t=hi.current;O(hi),e._currentValue=t}function na(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function cr(e,t){gi=e,Xa=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Ie(e){var t=e._currentValue;if(Xa!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(gi===null)throw Error(k(308));nr=e,gi.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var Lt=null;function Ja(e){Lt===null?Lt=[e]:Lt.push(e)}function vc(e,t,r,i){var s=t.interleaved;return s===null?(r.next=r,Ja(t)):(r.next=s.next,s.next=r),t.interleaved=r,rt(e,i)}function rt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ot=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,T&2){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,rt(e,r)}return s=i.interleaved,s===null?(t.next=t,Ja(i)):(t.next=s.next,s.next=t),i.interleaved=t,rt(e,r)}function qn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Oa(e,r)}}function hl(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var s=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?s=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?s=a=t:a=a.next=t}else s=a=t;r={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function xi(e,t,r,i){var s=e.updateQueue;ot=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var d=l,c=d.next;d.next=null,o===null?a=c:o.next=c,o=d;var x=e.alternate;x!==null&&(x=x.updateQueue,l=x.lastBaseUpdate,l!==o&&(l===null?x.firstBaseUpdate=c:l.next=c,x.lastBaseUpdate=d))}if(a!==null){var p=s.baseState;o=0,x=c=d=null,l=a;do{var g=l.lane,y=l.eventTime;if((i&g)===g){x!==null&&(x=x.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,m=l;switch(g=t,y=r,m.tag){case 1:if(w=m.payload,typeof w=="function"){p=w.call(y,p,g);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=m.payload,g=typeof w=="function"?w.call(y,p,g):w,g==null)break e;p=$({},p,g);break e;case 2:ot=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},x===null?(c=x=y,d=p):x=x.next=y,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(x===null&&(d=p),s.baseState=d,s.firstBaseUpdate=c,s.lastBaseUpdate=x,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);Dt|=o,e.lanes=o,e.memoizedState=p}}function gl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],s=i.callback;if(s!==null){if(i.callback=null,i=r,typeof s!="function")throw Error(k(191,s));s.call(i)}}}var wn={},Ve=Nt(wn),ln=Nt(wn),dn=Nt(wn);function Mt(e){if(e===wn)throw Error(k(174));return e}function to(e,t){switch(W(dn,t),W(ln,e),W(Ve,wn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ws(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ws(t,e)}O(Ve),W(Ve,t)}function xr(){O(Ve),O(ln),O(dn)}function jc(e){Mt(dn.current);var t=Mt(Ve.current),r=Ws(t,e.type);t!==r&&(W(ln,e),W(Ve,r))}function ro(e){ln.current===e&&(O(Ve),O(ln))}var U=Nt(0);function mi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ps=[];function no(){for(var e=0;e<ps.length;e++)ps[e]._workInProgressVersionPrimary=null;ps.length=0}var Qn=it.ReactCurrentDispatcher,hs=it.ReactCurrentBatchConfig,_t=0,H=null,X=null,J=null,yi=!1,Vr=!1,cn=0,Qp=0;function ie(){throw Error(k(321))}function io(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!_e(e[r],t[r]))return!1;return!0}function so(e,t,r,i,s,a){if(_t=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qn.current=e===null||e.memoizedState===null?Zp:Jp,e=r(i,s),Vr){a=0;do{if(Vr=!1,cn=0,25<=a)throw Error(k(301));a+=1,J=X=null,t.updateQueue=null,Qn.current=e0,e=r(i,s)}while(Vr)}if(Qn.current=bi,t=X!==null&&X.next!==null,_t=0,J=X=H=null,yi=!1,t)throw Error(k(300));return e}function ao(){var e=cn!==0;return cn=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?H.memoizedState=J=e:J=J.next=e,J}function Be(){if(X===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=J===null?H.memoizedState:J.next;if(t!==null)J=t,X=e;else{if(e===null)throw Error(k(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},J===null?H.memoizedState=J=e:J=J.next=e}return J}function un(e,t){return typeof t=="function"?t(e):t}function gs(e){var t=Be(),r=t.queue;if(r===null)throw Error(k(311));r.lastRenderedReducer=e;var i=X,s=i.baseQueue,a=r.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}i.baseQueue=s=a,r.pending=null}if(s!==null){a=s.next,i=i.baseState;var l=o=null,d=null,c=a;do{var x=c.lane;if((_t&x)===x)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var p={lane:x,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(l=d=p,o=i):d=d.next=p,H.lanes|=x,Dt|=x}c=c.next}while(c!==null&&c!==a);d===null?o=i:d.next=l,_e(i,t.memoizedState)||(ge=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=d,r.lastRenderedState=i}if(e=r.interleaved,e!==null){s=e;do a=s.lane,H.lanes|=a,Dt|=a,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function xs(e){var t=Be(),r=t.queue;if(r===null)throw Error(k(311));r.lastRenderedReducer=e;var i=r.dispatch,s=r.pending,a=t.memoizedState;if(s!==null){r.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);_e(a,t.memoizedState)||(ge=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,i]}function kc(){}function Sc(e,t){var r=H,i=Be(),s=t(),a=!_e(i.memoizedState,s);if(a&&(i.memoizedState=s,ge=!0),i=i.queue,oo(zc.bind(null,r,i,e),[e]),i.getSnapshot!==t||a||J!==null&&J.memoizedState.tag&1){if(r.flags|=2048,fn(9,Nc.bind(null,r,i,s,t),void 0,null),ee===null)throw Error(k(349));_t&30||Cc(r,t,s)}return s}function Cc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Nc(e,t,r,i){t.value=r,t.getSnapshot=i,Ec(t)&&Rc(e)}function zc(e,t,r){return r(function(){Ec(t)&&Rc(e)})}function Ec(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!_e(e,r)}catch{return!0}}function Rc(e){var t=rt(e,1);t!==null&&Oe(t,e,1,-1)}function xl(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:e},t.queue=e,e=e.dispatch=Kp.bind(null,H,e),[t.memoizedState,e]}function fn(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function Ic(){return Be().memoizedState}function Gn(e,t,r,i){var s=Ue();H.flags|=e,s.memoizedState=fn(1|t,r,void 0,i===void 0?null:i)}function Ti(e,t,r,i){var s=Be();i=i===void 0?null:i;var a=void 0;if(X!==null){var o=X.memoizedState;if(a=o.destroy,i!==null&&io(i,o.deps)){s.memoizedState=fn(t,r,a,i);return}}H.flags|=e,s.memoizedState=fn(1|t,r,a,i)}function ml(e,t){return Gn(8390656,8,e,t)}function oo(e,t){return Ti(2048,8,e,t)}function Bc(e,t){return Ti(4,2,e,t)}function Pc(e,t){return Ti(4,4,e,t)}function Lc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mc(e,t,r){return r=r!=null?r.concat([e]):null,Ti(4,4,Lc.bind(null,t,e),r)}function lo(){}function Tc(e,t){var r=Be();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&io(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function Fc(e,t){var r=Be();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&io(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Wc(e,t,r){return _t&21?(_e(r,t)||(r=Ud(),H.lanes|=r,Dt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=r)}function Gp(e,t){var r=F;F=r!==0&&4>r?r:4,e(!0);var i=hs.transition;hs.transition={};try{e(!1),t()}finally{F=r,hs.transition=i}}function Ac(){return Be().memoizedState}function Xp(e,t,r){var i=bt(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Oc(e))_c(t,r);else if(r=vc(e,t,r,i),r!==null){var s=de();Oe(r,e,i,s),Dc(r,t,i)}}function Kp(e,t,r){var i=bt(e),s={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Oc(e))_c(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,r);if(s.hasEagerState=!0,s.eagerState=l,_e(l,o)){var d=t.interleaved;d===null?(s.next=s,Ja(t)):(s.next=d.next,d.next=s),t.interleaved=s;return}}catch{}finally{}r=vc(e,t,s,i),r!==null&&(s=de(),Oe(r,e,i,s),Dc(r,t,i))}}function Oc(e){var t=e.alternate;return e===H||t!==null&&t===H}function _c(e,t){Vr=yi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Dc(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Oa(e,r)}}var bi={readContext:Ie,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Zp={readContext:Ie,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:ml,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Gn(4194308,4,Lc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Gn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gn(4,2,e,t)},useMemo:function(e,t){var r=Ue();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Ue();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Xp.bind(null,H,e),[i.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:xl,useDebugValue:lo,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=xl(!1),t=e[0];return e=Gp.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=H,s=Ue();if(D){if(r===void 0)throw Error(k(407));r=r()}else{if(r=t(),ee===null)throw Error(k(349));_t&30||Cc(i,t,r)}s.memoizedState=r;var a={value:r,getSnapshot:t};return s.queue=a,ml(zc.bind(null,i,a,e),[e]),i.flags|=2048,fn(9,Nc.bind(null,i,a,r,t),void 0,null),r},useId:function(){var e=Ue(),t=ee.identifierPrefix;if(D){var r=Ke,i=Xe;r=(i&~(1<<32-Ae(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=cn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Qp++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jp={readContext:Ie,useCallback:Tc,useContext:Ie,useEffect:oo,useImperativeHandle:Mc,useInsertionEffect:Bc,useLayoutEffect:Pc,useMemo:Fc,useReducer:gs,useRef:Ic,useState:function(){return gs(un)},useDebugValue:lo,useDeferredValue:function(e){var t=Be();return Wc(t,X.memoizedState,e)},useTransition:function(){var e=gs(un)[0],t=Be().memoizedState;return[e,t]},useMutableSource:kc,useSyncExternalStore:Sc,useId:Ac,unstable_isNewReconciler:!1},e0={readContext:Ie,useCallback:Tc,useContext:Ie,useEffect:oo,useImperativeHandle:Mc,useInsertionEffect:Bc,useLayoutEffect:Pc,useMemo:Fc,useReducer:xs,useRef:Ic,useState:function(){return xs(un)},useDebugValue:lo,useDeferredValue:function(e){var t=Be();return X===null?t.memoizedState=e:Wc(t,X.memoizedState,e)},useTransition:function(){var e=xs(un)[0],t=Be().memoizedState;return[e,t]},useMutableSource:kc,useSyncExternalStore:Sc,useId:Ac,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ia(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:$({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Fi={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=de(),s=bt(e),a=Ze(i,s);a.payload=t,r!=null&&(a.callback=r),t=mt(e,a,s),t!==null&&(Oe(t,e,s,i),qn(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=de(),s=bt(e),a=Ze(i,s);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=mt(e,a,s),t!==null&&(Oe(t,e,s,i),qn(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=de(),i=bt(e),s=Ze(r,i);s.tag=2,t!=null&&(s.callback=t),t=mt(e,s,i),t!==null&&(Oe(t,e,i,r),qn(t,e,i))}};function yl(e,t,r,i,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):t.prototype&&t.prototype.isPureReactComponent?!nn(r,i)||!nn(s,a):!0}function Uc(e,t,r){var i=!1,s=St,a=t.contextType;return typeof a=="object"&&a!==null?a=Ie(a):(s=me(t)?At:oe.current,i=t.contextTypes,a=(i=i!=null)?pr(e,s):St),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fi,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function bl(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Fi.enqueueReplaceState(t,t.state,null)}function sa(e,t,r,i){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},eo(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Ie(a):(a=me(t)?At:oe.current,s.context=pr(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ia(e,t,a,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Fi.enqueueReplaceState(s,s.state,null),xi(e,r,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t){try{var r="",i=t;do r+=Ef(i),i=i.return;while(i);var s=r}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function ms(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function aa(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var t0=typeof WeakMap=="function"?WeakMap:Map;function Hc(e,t,r){r=Ze(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){wi||(wi=!0,xa=i),aa(e,t)},r}function $c(e,t,r){r=Ze(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=t.value;r.payload=function(){return i(s)},r.callback=function(){aa(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){aa(e,t),typeof i!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function vl(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new t0;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(r)||(s.add(r),e=g0.bind(null,e,t,r),t.then(e,e))}function wl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jl(e,t,r,i,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ze(-1,1),t.tag=2,mt(r,t,1))),r.lanes|=1),e)}var r0=it.ReactCurrentOwner,ge=!1;function le(e,t,r,i){t.child=e===null?bc(t,null,r,i):gr(t,e.child,r,i)}function kl(e,t,r,i,s){r=r.render;var a=t.ref;return cr(t,s),i=so(e,t,r,i,a,s),r=ao(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,nt(e,t,s)):(D&&r&&qa(t),t.flags|=1,le(e,t,i,s),t.child)}function Sl(e,t,r,i,s){if(e===null){var a=r.type;return typeof a=="function"&&!mo(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Yc(e,t,a,i,s)):(e=Jn(r.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:nn,r(o,i)&&e.ref===t.ref)return nt(e,t,s)}return t.flags|=1,e=vt(a,i),e.ref=t.ref,e.return=t,t.child=e}function Yc(e,t,r,i,s){if(e!==null){var a=e.memoizedProps;if(nn(a,i)&&e.ref===t.ref)if(ge=!1,t.pendingProps=i=a,(e.lanes&s)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,nt(e,t,s)}return oa(e,t,r,i,s)}function Vc(e,t,r){var i=t.pendingProps,s=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(sr,be),be|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(sr,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,W(sr,be),be|=i}else a!==null?(i=a.baseLanes|r,t.memoizedState=null):i=r,W(sr,be),be|=i;return le(e,t,s,r),t.child}function qc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function oa(e,t,r,i,s){var a=me(r)?At:oe.current;return a=pr(t,a),cr(t,s),r=so(e,t,r,i,a,s),i=ao(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,nt(e,t,s)):(D&&i&&qa(t),t.flags|=1,le(e,t,r,s),t.child)}function Cl(e,t,r,i,s){if(me(r)){var a=!0;ui(t)}else a=!1;if(cr(t,s),t.stateNode===null)Xn(e,t),Uc(t,r,i),sa(t,r,i,s),i=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var d=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=Ie(c):(c=me(r)?At:oe.current,c=pr(t,c));var x=r.getDerivedStateFromProps,p=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||d!==c)&&bl(t,o,i,c),ot=!1;var g=t.memoizedState;o.state=g,xi(t,i,o,s),d=t.memoizedState,l!==i||g!==d||xe.current||ot?(typeof x=="function"&&(ia(t,r,x,i),d=t.memoizedState),(l=ot||yl(t,r,l,i,g,d,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=d),o.props=i,o.state=d,o.context=c,i=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,wc(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Te(t.type,l),o.props=c,p=t.pendingProps,g=o.context,d=r.contextType,typeof d=="object"&&d!==null?d=Ie(d):(d=me(r)?At:oe.current,d=pr(t,d));var y=r.getDerivedStateFromProps;(x=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==d)&&bl(t,o,i,d),ot=!1,g=t.memoizedState,o.state=g,xi(t,i,o,s);var w=t.memoizedState;l!==p||g!==w||xe.current||ot?(typeof y=="function"&&(ia(t,r,y,i),w=t.memoizedState),(c=ot||yl(t,r,c,i,g,w,d)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,w,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,w,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=w),o.props=i,o.state=w,o.context=d,i=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),i=!1)}return la(e,t,r,i,a,s)}function la(e,t,r,i,s,a){qc(e,t);var o=(t.flags&128)!==0;if(!i&&!o)return s&&cl(t,r,!1),nt(e,t,a);i=t.stateNode,r0.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&o?(t.child=gr(t,e.child,null,a),t.child=gr(t,null,l,a)):le(e,t,l,a),t.memoizedState=i.state,s&&cl(t,r,!0),t.child}function Qc(e){var t=e.stateNode;t.pendingContext?dl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dl(e,t.context,!1),to(e,t.containerInfo)}function Nl(e,t,r,i,s){return hr(),Ga(s),t.flags|=256,le(e,t,r,i),t.child}var da={dehydrated:null,treeContext:null,retryLane:0};function ca(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gc(e,t,r){var i=t.pendingProps,s=U.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),W(U,s&1),e===null)return ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Oi(o,i,0,null),e=Ft(e,i,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ca(r),t.memoizedState=da,e):co(t,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return n0(e,t,o,i,l,s,r);if(a){a=i.fallback,o=t.mode,s=e.child,l=s.sibling;var d={mode:"hidden",children:i.children};return!(o&1)&&t.child!==s?(i=t.child,i.childLanes=0,i.pendingProps=d,t.deletions=null):(i=vt(s,d),i.subtreeFlags=s.subtreeFlags&14680064),l!==null?a=vt(l,a):(a=Ft(a,o,r,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o=o===null?ca(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,t.memoizedState=da,i}return a=e.child,e=a.sibling,i=vt(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function co(e,t){return t=Oi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function An(e,t,r,i){return i!==null&&Ga(i),gr(t,e.child,null,r),e=co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function n0(e,t,r,i,s,a,o){if(r)return t.flags&256?(t.flags&=-257,i=ms(Error(k(422))),An(e,t,o,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,s=t.mode,i=Oi({mode:"visible",children:i.children},s,0,null),a=Ft(a,s,o,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&gr(t,e.child,null,o),t.child.memoizedState=ca(o),t.memoizedState=da,a);if(!(t.mode&1))return An(e,t,o,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,a=Error(k(419)),i=ms(a,i,void 0),An(e,t,o,i)}if(l=(o&e.childLanes)!==0,ge||l){if(i=ee,i!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,rt(e,s),Oe(i,e,s,-1))}return xo(),i=ms(Error(k(421))),An(e,t,o,i)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=x0.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,ve=xt(s.nextSibling),we=t,D=!0,We=null,e!==null&&(Ce[Ne++]=Xe,Ce[Ne++]=Ke,Ce[Ne++]=Ot,Xe=e.id,Ke=e.overflow,Ot=t),t=co(t,i.children),t.flags|=4096,t)}function zl(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),na(e.return,t,r)}function ys(e,t,r,i,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=s)}function Xc(e,t,r){var i=t.pendingProps,s=i.revealOrder,a=i.tail;if(le(e,t,i.children,r),i=U.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zl(e,r,t);else if(e.tag===19)zl(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(W(U,i),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&mi(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),ys(t,!1,s,r,a);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&mi(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}ys(t,!0,r,null,a);break;case"together":ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Dt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,r=vt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=vt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function i0(e,t,r){switch(t.tag){case 3:Qc(t),hr();break;case 5:jc(t);break;case 1:me(t.type)&&ui(t);break;case 4:to(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,s=t.memoizedProps.value;W(hi,i._currentValue),i._currentValue=s;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(W(U,U.current&1),t.flags|=128,null):r&t.child.childLanes?Gc(e,t,r):(W(U,U.current&1),e=nt(e,t,r),e!==null?e.sibling:null);W(U,U.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return Xc(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),W(U,U.current),i)break;return null;case 22:case 23:return t.lanes=0,Vc(e,t,r)}return nt(e,t,r)}var Kc,ua,Zc,Jc;Kc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ua=function(){};Zc=function(e,t,r,i){var s=e.memoizedProps;if(s!==i){e=t.stateNode,Mt(Ve.current);var a=null;switch(r){case"input":s=Ls(e,s),i=Ls(e,i),a=[];break;case"select":s=$({},s,{value:void 0}),i=$({},i,{value:void 0}),a=[];break;case"textarea":s=Fs(e,s),i=Fs(e,i),a=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=di)}As(r,i);var o;r=null;for(c in s)if(!i.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xr.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var d=i[c];if(l=s!=null?s[c]:void 0,i.hasOwnProperty(c)&&d!==l&&(d!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in d)d.hasOwnProperty(o)&&l[o]!==d[o]&&(r||(r={}),r[o]=d[o])}else r||(a||(a=[]),a.push(c,r)),r=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(a=a||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xr.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&A("scroll",e),a||l===d||(a=[])):(a=a||[]).push(c,d))}r&&(a=a||[]).push("style",r);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Jc=function(e,t,r,i){r!==i&&(t.flags|=4)};function Lr(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function s0(e,t,r){var i=t.pendingProps;switch(Qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return me(t.type)&&ci(),se(t),null;case 3:return i=t.stateNode,xr(),O(xe),O(oe),no(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Fn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(ba(We),We=null))),ua(e,t),se(t),null;case 5:ro(t);var s=Mt(dn.current);if(r=t.type,e!==null&&t.stateNode!=null)Zc(e,t,r,i,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(k(166));return se(t),null}if(e=Mt(Ve.current),Fn(t)){i=t.stateNode,r=t.type;var a=t.memoizedProps;switch(i[He]=t,i[on]=a,e=(t.mode&1)!==0,r){case"dialog":A("cancel",i),A("close",i);break;case"iframe":case"object":case"embed":A("load",i);break;case"video":case"audio":for(s=0;s<_r.length;s++)A(_r[s],i);break;case"source":A("error",i);break;case"img":case"image":case"link":A("error",i),A("load",i);break;case"details":A("toggle",i);break;case"input":Fo(i,a),A("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},A("invalid",i);break;case"textarea":Ao(i,a),A("invalid",i)}As(r,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?i.textContent!==l&&(a.suppressHydrationWarning!==!0&&Tn(i.textContent,l,e),s=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Tn(i.textContent,l,e),s=["children",""+l]):Xr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&A("scroll",i)}switch(r){case"input":zn(i),Wo(i,a,!0);break;case"textarea":zn(i),Oo(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=di)}i=s,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zd(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(r,{is:i.is}):(e=o.createElement(r),r==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,r),e[He]=t,e[on]=i,Kc(e,t,!1,!1),t.stateNode=e;e:{switch(o=Os(r,i),r){case"dialog":A("cancel",e),A("close",e),s=i;break;case"iframe":case"object":case"embed":A("load",e),s=i;break;case"video":case"audio":for(s=0;s<_r.length;s++)A(_r[s],e);s=i;break;case"source":A("error",e),s=i;break;case"img":case"image":case"link":A("error",e),A("load",e),s=i;break;case"details":A("toggle",e),s=i;break;case"input":Fo(e,i),s=Ls(e,i),A("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=$({},i,{value:void 0}),A("invalid",e);break;case"textarea":Ao(e,i),s=Fs(e,i),A("invalid",e);break;default:s=i}As(r,s),l=s;for(a in l)if(l.hasOwnProperty(a)){var d=l[a];a==="style"?Id(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Ed(e,d)):a==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Kr(e,d):typeof d=="number"&&Kr(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xr.hasOwnProperty(a)?d!=null&&a==="onScroll"&&A("scroll",e):d!=null&&La(e,a,d,o))}switch(r){case"input":zn(e),Wo(e,i,!1);break;case"textarea":zn(e),Oo(e);break;case"option":i.value!=null&&e.setAttribute("value",""+kt(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?ar(e,!!i.multiple,a,!1):i.defaultValue!=null&&ar(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=di)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Jc(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(k(166));if(r=Mt(dn.current),Mt(Ve.current),Fn(t)){if(i=t.stateNode,r=t.memoizedProps,i[He]=t,(a=i.nodeValue!==r)&&(e=we,e!==null))switch(e.tag){case 3:Tn(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tn(i.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[He]=t,t.stateNode=i}return se(t),null;case 13:if(O(U),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&ve!==null&&t.mode&1&&!(t.flags&128))mc(),hr(),t.flags|=98560,a=!1;else if(a=Fn(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(k(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(k(317));a[He]=t}else hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),a=!1}else We!==null&&(ba(We),We=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?K===0&&(K=3):xo())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return xr(),ua(e,t),e===null&&sn(t.stateNode.containerInfo),se(t),null;case 10:return Za(t.type._context),se(t),null;case 17:return me(t.type)&&ci(),se(t),null;case 19:if(O(U),a=t.memoizedState,a===null)return se(t),null;if(i=(t.flags&128)!==0,o=a.rendering,o===null)if(i)Lr(a,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mi(e),o!==null){for(t.flags|=128,Lr(a,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)a=r,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return W(U,U.current&1|2),t.child}e=e.sibling}a.tail!==null&&q()>yr&&(t.flags|=128,i=!0,Lr(a,!1),t.lanes=4194304)}else{if(!i)if(e=mi(o),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Lr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!D)return se(t),null}else 2*q()-a.renderingStartTime>yr&&r!==1073741824&&(t.flags|=128,i=!0,Lr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(r=a.last,r!==null?r.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=q(),t.sibling=null,r=U.current,W(U,i?r&1|2:r&1),t):(se(t),null);case 22:case 23:return go(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?be&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function a0(e,t){switch(Qa(t),t.tag){case 1:return me(t.type)&&ci(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xr(),O(xe),O(oe),no(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ro(t),null;case 13:if(O(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(U),null;case 4:return xr(),null;case 10:return Za(t.type._context),null;case 22:case 23:return go(),null;case 24:return null;default:return null}}var On=!1,ae=!1,o0=typeof WeakSet=="function"?WeakSet:Set,N=null;function ir(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Y(e,t,i)}else r.current=null}function fa(e,t,r){try{r()}catch(i){Y(e,t,i)}}var El=!1;function l0(e,t){if(Gs=ai,e=ic(),Va(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,l=-1,d=-1,c=0,x=0,p=e,g=null;t:for(;;){for(var y;p!==r||s!==0&&p.nodeType!==3||(l=o+s),p!==a||i!==0&&p.nodeType!==3||(d=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===e)break t;if(g===r&&++c===s&&(l=o),g===a&&++x===i&&(d=o),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}r=l===-1||d===-1?null:{start:l,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Xs={focusedElem:e,selectionRange:r},ai=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var m=w.memoizedProps,j=w.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?m:Te(t.type,m),j);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(b){Y(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return w=El,El=!1,w}function qr(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&fa(t,r,a)}s=s.next}while(s!==i)}}function Wi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function pa(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[on],delete t[Js],delete t[$p],delete t[Yp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function Rl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ha(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=di));else if(i!==4&&(e=e.child,e!==null))for(ha(e,t,r),e=e.sibling;e!==null;)ha(e,t,r),e=e.sibling}function ga(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(ga(e,t,r),e=e.sibling;e!==null;)ga(e,t,r),e=e.sibling}var te=null,Fe=!1;function st(e,t,r){for(r=r.child;r!==null;)ru(e,t,r),r=r.sibling}function ru(e,t,r){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Ri,r)}catch{}switch(r.tag){case 5:ae||ir(r,t);case 6:var i=te,s=Fe;te=null,st(e,t,r),te=i,Fe=s,te!==null&&(Fe?(e=te,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):te.removeChild(r.stateNode));break;case 18:te!==null&&(Fe?(e=te,r=r.stateNode,e.nodeType===8?us(e.parentNode,r):e.nodeType===1&&us(e,r),tn(e)):us(te,r.stateNode));break;case 4:i=te,s=Fe,te=r.stateNode.containerInfo,Fe=!0,st(e,t,r),te=i,Fe=s;break;case 0:case 11:case 14:case 15:if(!ae&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&fa(r,t,o),s=s.next}while(s!==i)}st(e,t,r);break;case 1:if(!ae&&(ir(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(l){Y(r,t,l)}st(e,t,r);break;case 21:st(e,t,r);break;case 22:r.mode&1?(ae=(i=ae)||r.memoizedState!==null,st(e,t,r),ae=i):st(e,t,r);break;default:st(e,t,r)}}function Il(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new o0),t.forEach(function(i){var s=m0.bind(null,e,i);r.has(i)||(r.add(i),i.then(s,s))})}}function Me(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:te=l.stateNode,Fe=!1;break e;case 3:te=l.stateNode.containerInfo,Fe=!0;break e;case 4:te=l.stateNode.containerInfo,Fe=!0;break e}l=l.return}if(te===null)throw Error(k(160));ru(a,o,s),te=null,Fe=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(c){Y(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nu(t,e),t=t.sibling}function nu(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),De(e),i&4){try{qr(3,e,e.return),Wi(3,e)}catch(m){Y(e,e.return,m)}try{qr(5,e,e.return)}catch(m){Y(e,e.return,m)}}break;case 1:Me(t,e),De(e),i&512&&r!==null&&ir(r,r.return);break;case 5:if(Me(t,e),De(e),i&512&&r!==null&&ir(r,r.return),e.flags&32){var s=e.stateNode;try{Kr(s,"")}catch(m){Y(e,e.return,m)}}if(i&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Cd(s,a),Os(l,o);var c=Os(l,a);for(o=0;o<d.length;o+=2){var x=d[o],p=d[o+1];x==="style"?Id(s,p):x==="dangerouslySetInnerHTML"?Ed(s,p):x==="children"?Kr(s,p):La(s,x,p,c)}switch(l){case"input":Ms(s,a);break;case"textarea":Nd(s,a);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?ar(s,!!a.multiple,y,!1):g!==!!a.multiple&&(a.defaultValue!=null?ar(s,!!a.multiple,a.defaultValue,!0):ar(s,!!a.multiple,a.multiple?[]:"",!1))}s[on]=a}catch(m){Y(e,e.return,m)}}break;case 6:if(Me(t,e),De(e),i&4){if(e.stateNode===null)throw Error(k(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(m){Y(e,e.return,m)}}break;case 3:if(Me(t,e),De(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(m){Y(e,e.return,m)}break;case 4:Me(t,e),De(e);break;case 13:Me(t,e),De(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(po=q())),i&4&&Il(e);break;case 22:if(x=r!==null&&r.memoizedState!==null,e.mode&1?(ae=(c=ae)||x,Me(t,e),ae=c):Me(t,e),De(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!x&&e.mode&1)for(N=e,x=e.child;x!==null;){for(p=N=x;N!==null;){switch(g=N,y=g.child,g.tag){case 0:case 11:case 14:case 15:qr(4,g,g.return);break;case 1:ir(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){i=g,r=g.return;try{t=i,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(m){Y(i,r,m)}}break;case 5:ir(g,g.return);break;case 22:if(g.memoizedState!==null){Pl(p);continue}}y!==null?(y.return=g,N=y):Pl(p)}x=x.sibling}e:for(x=null,p=e;;){if(p.tag===5){if(x===null){x=p;try{s=p.stateNode,c?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=p.stateNode,d=p.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=Rd("display",o))}catch(m){Y(e,e.return,m)}}}else if(p.tag===6){if(x===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(m){Y(e,e.return,m)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;x===p&&(x=null),p=p.return}x===p&&(x=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Me(t,e),De(e),i&4&&Il(e);break;case 21:break;default:Me(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(tu(r)){var i=r;break e}r=r.return}throw Error(k(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Kr(s,""),i.flags&=-33);var a=Rl(e);ga(e,a,s);break;case 3:case 4:var o=i.stateNode.containerInfo,l=Rl(e);ha(e,l,o);break;default:throw Error(k(161))}}catch(d){Y(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function d0(e,t,r){N=e,iu(e)}function iu(e,t,r){for(var i=(e.mode&1)!==0;N!==null;){var s=N,a=s.child;if(s.tag===22&&i){var o=s.memoizedState!==null||On;if(!o){var l=s.alternate,d=l!==null&&l.memoizedState!==null||ae;l=On;var c=ae;if(On=o,(ae=d)&&!c)for(N=s;N!==null;)o=N,d=o.child,o.tag===22&&o.memoizedState!==null?Ll(s):d!==null?(d.return=o,N=d):Ll(s);for(;a!==null;)N=a,iu(a),a=a.sibling;N=s,On=l,ae=c}Bl(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,N=a):Bl(e)}}function Bl(e){for(;N!==null;){var t=N;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Wi(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!ae)if(r===null)i.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Te(t.type,r.memoizedProps);i.componentDidUpdate(s,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&gl(t,a,i);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}gl(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var x=c.memoizedState;if(x!==null){var p=x.dehydrated;p!==null&&tn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ae||t.flags&512&&pa(t)}catch(g){Y(t,t.return,g)}}if(t===e){N=null;break}if(r=t.sibling,r!==null){r.return=t.return,N=r;break}N=t.return}}function Pl(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var r=t.sibling;if(r!==null){r.return=t.return,N=r;break}N=t.return}}function Ll(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Wi(4,t)}catch(d){Y(t,r,d)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var s=t.return;try{i.componentDidMount()}catch(d){Y(t,s,d)}}var a=t.return;try{pa(t)}catch(d){Y(t,a,d)}break;case 5:var o=t.return;try{pa(t)}catch(d){Y(t,o,d)}}}catch(d){Y(t,t.return,d)}if(t===e){N=null;break}var l=t.sibling;if(l!==null){l.return=t.return,N=l;break}N=t.return}}var c0=Math.ceil,vi=it.ReactCurrentDispatcher,uo=it.ReactCurrentOwner,Re=it.ReactCurrentBatchConfig,T=0,ee=null,Q=null,re=0,be=0,sr=Nt(0),K=0,pn=null,Dt=0,Ai=0,fo=0,Qr=null,pe=null,po=0,yr=1/0,qe=null,wi=!1,xa=null,yt=null,_n=!1,ut=null,ji=0,Gr=0,ma=null,Kn=-1,Zn=0;function de(){return T&6?q():Kn!==-1?Kn:Kn=q()}function bt(e){return e.mode&1?T&2&&re!==0?re&-re:qp.transition!==null?(Zn===0&&(Zn=Ud()),Zn):(e=F,e!==0||(e=window.event,e=e===void 0?16:Gd(e.type)),e):1}function Oe(e,t,r,i){if(50<Gr)throw Gr=0,ma=null,Error(k(185));yn(e,r,i),(!(T&2)||e!==ee)&&(e===ee&&(!(T&2)&&(Ai|=r),K===4&&dt(e,re)),ye(e,i),r===1&&T===0&&!(t.mode&1)&&(yr=q()+500,Mi&&zt()))}function ye(e,t){var r=e.callbackNode;qf(e,t);var i=si(e,e===ee?re:0);if(i===0)r!==null&&Uo(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&Uo(r),t===1)e.tag===0?Vp(Ml.bind(null,e)):hc(Ml.bind(null,e)),Up(function(){!(T&6)&&zt()}),r=null;else{switch(Hd(i)){case 1:r=Aa;break;case 4:r=_d;break;case 16:r=ii;break;case 536870912:r=Dd;break;default:r=ii}r=fu(r,su.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function su(e,t){if(Kn=-1,Zn=0,T&6)throw Error(k(327));var r=e.callbackNode;if(ur()&&e.callbackNode!==r)return null;var i=si(e,e===ee?re:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=ki(e,i);else{t=i;var s=T;T|=2;var a=ou();(ee!==e||re!==t)&&(qe=null,yr=q()+500,Tt(e,t));do try{p0();break}catch(l){au(e,l)}while(!0);Ka(),vi.current=a,T=s,Q!==null?t=0:(ee=null,re=0,t=K)}if(t!==0){if(t===2&&(s=$s(e),s!==0&&(i=s,t=ya(e,s))),t===1)throw r=pn,Tt(e,0),dt(e,i),ye(e,q()),r;if(t===6)dt(e,i);else{if(s=e.current.alternate,!(i&30)&&!u0(s)&&(t=ki(e,i),t===2&&(a=$s(e),a!==0&&(i=a,t=ya(e,a))),t===1))throw r=pn,Tt(e,0),dt(e,i),ye(e,q()),r;switch(e.finishedWork=s,e.finishedLanes=i,t){case 0:case 1:throw Error(k(345));case 2:Bt(e,pe,qe);break;case 3:if(dt(e,i),(i&130023424)===i&&(t=po+500-q(),10<t)){if(si(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){de(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Zs(Bt.bind(null,e,pe,qe),t);break}Bt(e,pe,qe);break;case 4:if(dt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,s=-1;0<i;){var o=31-Ae(i);a=1<<o,o=t[o],o>s&&(s=o),i&=~a}if(i=s,i=q()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*c0(i/1960))-i,10<i){e.timeoutHandle=Zs(Bt.bind(null,e,pe,qe),i);break}Bt(e,pe,qe);break;case 5:Bt(e,pe,qe);break;default:throw Error(k(329))}}}return ye(e,q()),e.callbackNode===r?su.bind(null,e):null}function ya(e,t){var r=Qr;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=ki(e,t),e!==2&&(t=pe,pe=r,t!==null&&ba(t)),e}function ba(e){pe===null?pe=e:pe.push.apply(pe,e)}function u0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var s=r[i],a=s.getSnapshot;s=s.value;try{if(!_e(a(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dt(e,t){for(t&=~fo,t&=~Ai,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ae(t),i=1<<r;e[r]=-1,t&=~i}}function Ml(e){if(T&6)throw Error(k(327));ur();var t=si(e,0);if(!(t&1))return ye(e,q()),null;var r=ki(e,t);if(e.tag!==0&&r===2){var i=$s(e);i!==0&&(t=i,r=ya(e,i))}if(r===1)throw r=pn,Tt(e,0),dt(e,t),ye(e,q()),r;if(r===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bt(e,pe,qe),ye(e,q()),null}function ho(e,t){var r=T;T|=1;try{return e(t)}finally{T=r,T===0&&(yr=q()+500,Mi&&zt())}}function Ut(e){ut!==null&&ut.tag===0&&!(T&6)&&ur();var t=T;T|=1;var r=Re.transition,i=F;try{if(Re.transition=null,F=1,e)return e()}finally{F=i,Re.transition=r,T=t,!(T&6)&&zt()}}function go(){be=sr.current,O(sr)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Dp(r)),Q!==null)for(r=Q.return;r!==null;){var i=r;switch(Qa(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ci();break;case 3:xr(),O(xe),O(oe),no();break;case 5:ro(i);break;case 4:xr();break;case 13:O(U);break;case 19:O(U);break;case 10:Za(i.type._context);break;case 22:case 23:go()}r=r.return}if(ee=e,Q=e=vt(e.current,null),re=be=t,K=0,pn=null,fo=Ai=Dt=0,pe=Qr=null,Lt!==null){for(t=0;t<Lt.length;t++)if(r=Lt[t],i=r.interleaved,i!==null){r.interleaved=null;var s=i.next,a=r.pending;if(a!==null){var o=a.next;a.next=s,i.next=o}r.pending=i}Lt=null}return e}function au(e,t){do{var r=Q;try{if(Ka(),Qn.current=bi,yi){for(var i=H.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}yi=!1}if(_t=0,J=X=H=null,Vr=!1,cn=0,uo.current=null,r===null||r.return===null){K=1,pn=t,Q=null;break}e:{var a=e,o=r.return,l=r,d=t;if(t=re,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,x=l,p=x.tag;if(!(x.mode&1)&&(p===0||p===11||p===15)){var g=x.alternate;g?(x.updateQueue=g.updateQueue,x.memoizedState=g.memoizedState,x.lanes=g.lanes):(x.updateQueue=null,x.memoizedState=null)}var y=wl(o);if(y!==null){y.flags&=-257,jl(y,o,l,a,t),y.mode&1&&vl(a,c,t),t=y,d=c;var w=t.updateQueue;if(w===null){var m=new Set;m.add(d),t.updateQueue=m}else w.add(d);break e}else{if(!(t&1)){vl(a,c,t),xo();break e}d=Error(k(426))}}else if(D&&l.mode&1){var j=wl(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),jl(j,o,l,a,t),Ga(mr(d,l));break e}}a=d=mr(d,l),K!==4&&(K=2),Qr===null?Qr=[a]:Qr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Hc(a,d,t);hl(a,f);break e;case 1:l=d;var u=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(yt===null||!yt.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=$c(a,l,t);hl(a,b);break e}}a=a.return}while(a!==null)}du(r)}catch(S){t=S,Q===r&&r!==null&&(Q=r=r.return);continue}break}while(!0)}function ou(){var e=vi.current;return vi.current=bi,e===null?bi:e}function xo(){(K===0||K===3||K===2)&&(K=4),ee===null||!(Dt&268435455)&&!(Ai&268435455)||dt(ee,re)}function ki(e,t){var r=T;T|=2;var i=ou();(ee!==e||re!==t)&&(qe=null,Tt(e,t));do try{f0();break}catch(s){au(e,s)}while(!0);if(Ka(),T=r,vi.current=i,Q!==null)throw Error(k(261));return ee=null,re=0,K}function f0(){for(;Q!==null;)lu(Q)}function p0(){for(;Q!==null&&!Af();)lu(Q)}function lu(e){var t=uu(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?du(e):Q=t,uo.current=null}function du(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=a0(r,t),r!==null){r.flags&=32767,Q=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Q=null;return}}else if(r=s0(r,t,be),r!==null){Q=r;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);K===0&&(K=5)}function Bt(e,t,r){var i=F,s=Re.transition;try{Re.transition=null,F=1,h0(e,t,r,i)}finally{Re.transition=s,F=i}return null}function h0(e,t,r,i){do ur();while(ut!==null);if(T&6)throw Error(k(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Qf(e,a),e===ee&&(Q=ee=null,re=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||_n||(_n=!0,fu(ii,function(){return ur(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Re.transition,Re.transition=null;var o=F;F=1;var l=T;T|=4,uo.current=null,l0(e,r),nu(r,e),Mp(Xs),ai=!!Gs,Xs=Gs=null,e.current=r,d0(r),Of(),T=l,F=o,Re.transition=a}else e.current=r;if(_n&&(_n=!1,ut=e,ji=s),a=e.pendingLanes,a===0&&(yt=null),Uf(r.stateNode),ye(e,q()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],i(s.value,{componentStack:s.stack,digest:s.digest});if(wi)throw wi=!1,e=xa,xa=null,e;return ji&1&&e.tag!==0&&ur(),a=e.pendingLanes,a&1?e===ma?Gr++:(Gr=0,ma=e):Gr=0,zt(),null}function ur(){if(ut!==null){var e=Hd(ji),t=Re.transition,r=F;try{if(Re.transition=null,F=16>e?16:e,ut===null)var i=!1;else{if(e=ut,ut=null,ji=0,T&6)throw Error(k(331));var s=T;for(T|=4,N=e.current;N!==null;){var a=N,o=a.child;if(N.flags&16){var l=a.deletions;if(l!==null){for(var d=0;d<l.length;d++){var c=l[d];for(N=c;N!==null;){var x=N;switch(x.tag){case 0:case 11:case 15:qr(8,x,a)}var p=x.child;if(p!==null)p.return=x,N=p;else for(;N!==null;){x=N;var g=x.sibling,y=x.return;if(eu(x),x===c){N=null;break}if(g!==null){g.return=y,N=g;break}N=y}}}var w=a.alternate;if(w!==null){var m=w.child;if(m!==null){w.child=null;do{var j=m.sibling;m.sibling=null,m=j}while(m!==null)}}N=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,N=o;else e:for(;N!==null;){if(a=N,a.flags&2048)switch(a.tag){case 0:case 11:case 15:qr(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,N=f;break e}N=a.return}}var u=e.current;for(N=u;N!==null;){o=N;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,N=h;else e:for(o=u;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wi(9,l)}}catch(S){Y(l,l.return,S)}if(l===o){N=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,N=b;break e}N=l.return}}if(T=s,zt(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Ri,e)}catch{}i=!0}return i}finally{F=r,Re.transition=t}}return!1}function Tl(e,t,r){t=mr(r,t),t=Hc(e,t,1),e=mt(e,t,1),t=de(),e!==null&&(yn(e,1,t),ye(e,t))}function Y(e,t,r){if(e.tag===3)Tl(e,e,r);else for(;t!==null;){if(t.tag===3){Tl(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(yt===null||!yt.has(i))){e=mr(r,e),e=$c(t,e,1),t=mt(t,e,1),e=de(),t!==null&&(yn(t,1,e),ye(t,e));break}}t=t.return}}function g0(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&r,ee===e&&(re&r)===r&&(K===4||K===3&&(re&130023424)===re&&500>q()-po?Tt(e,0):fo|=r),ye(e,t)}function cu(e,t){t===0&&(e.mode&1?(t=In,In<<=1,!(In&130023424)&&(In=4194304)):t=1);var r=de();e=rt(e,t),e!==null&&(yn(e,t,r),ye(e,r))}function x0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),cu(e,r)}function m0(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(k(314))}i!==null&&i.delete(t),cu(e,r)}var uu;uu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ge=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ge=!1,i0(e,t,r);ge=!!(e.flags&131072)}else ge=!1,D&&t.flags&1048576&&gc(t,pi,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Xn(e,t),e=t.pendingProps;var s=pr(t,oe.current);cr(t,r),s=so(null,t,i,e,s,r);var a=ao();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(i)?(a=!0,ui(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,eo(t),s.updater=Fi,t.stateNode=s,s._reactInternals=t,sa(t,i,e,r),t=la(null,t,i,!0,a,r)):(t.tag=0,D&&a&&qa(t),le(null,t,s,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Xn(e,t),e=t.pendingProps,s=i._init,i=s(i._payload),t.type=i,s=t.tag=b0(i),e=Te(i,e),s){case 0:t=oa(null,t,i,e,r);break e;case 1:t=Cl(null,t,i,e,r);break e;case 11:t=kl(null,t,i,e,r);break e;case 14:t=Sl(null,t,i,Te(i.type,e),r);break e}throw Error(k(306,i,""))}return t;case 0:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Te(i,s),oa(e,t,i,s,r);case 1:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Te(i,s),Cl(e,t,i,s,r);case 3:e:{if(Qc(t),e===null)throw Error(k(387));i=t.pendingProps,a=t.memoizedState,s=a.element,wc(e,t),xi(t,i,null,r);var o=t.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=mr(Error(k(423)),t),t=Nl(e,t,i,r,s);break e}else if(i!==s){s=mr(Error(k(424)),t),t=Nl(e,t,i,r,s);break e}else for(ve=xt(t.stateNode.containerInfo.firstChild),we=t,D=!0,We=null,r=bc(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(hr(),i===s){t=nt(e,t,r);break e}le(e,t,i,r)}t=t.child}return t;case 5:return jc(t),e===null&&ra(t),i=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,Ks(i,s)?o=null:a!==null&&Ks(i,a)&&(t.flags|=32),qc(e,t),le(e,t,o,r),t.child;case 6:return e===null&&ra(t),null;case 13:return Gc(e,t,r);case 4:return to(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=gr(t,null,i,r):le(e,t,i,r),t.child;case 11:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Te(i,s),kl(e,t,i,s,r);case 7:return le(e,t,t.pendingProps,r),t.child;case 8:return le(e,t,t.pendingProps.children,r),t.child;case 12:return le(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,s=t.pendingProps,a=t.memoizedProps,o=s.value,W(hi,i._currentValue),i._currentValue=o,a!==null)if(_e(a.value,o)){if(a.children===s.children&&!xe.current){t=nt(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var d=l.firstContext;d!==null;){if(d.context===i){if(a.tag===1){d=Ze(-1,r&-r),d.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var x=c.pending;x===null?d.next=d:(d.next=x.next,x.next=d),c.pending=d}}a.lanes|=r,d=a.alternate,d!==null&&(d.lanes|=r),na(a.return,r,t),l.lanes|=r;break}d=d.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(k(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),na(o,r,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}le(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,i=t.pendingProps.children,cr(t,r),s=Ie(s),i=i(s),t.flags|=1,le(e,t,i,r),t.child;case 14:return i=t.type,s=Te(i,t.pendingProps),s=Te(i.type,s),Sl(e,t,i,s,r);case 15:return Yc(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Te(i,s),Xn(e,t),t.tag=1,me(i)?(e=!0,ui(t)):e=!1,cr(t,r),Uc(t,i,s),sa(t,i,s,r),la(null,t,i,!0,e,r);case 19:return Xc(e,t,r);case 22:return Vc(e,t,r)}throw Error(k(156,t.tag))};function fu(e,t){return Od(e,t)}function y0(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,r,i){return new y0(e,t,r,i)}function mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function b0(e){if(typeof e=="function")return mo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ta)return 11;if(e===Fa)return 14}return 2}function vt(e,t){var r=e.alternate;return r===null?(r=Ee(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Jn(e,t,r,i,s,a){var o=2;if(i=e,typeof e=="function")mo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Gt:return Ft(r.children,s,a,t);case Ma:o=8,s|=8;break;case Rs:return e=Ee(12,r,t,s|2),e.elementType=Rs,e.lanes=a,e;case Is:return e=Ee(13,r,t,s),e.elementType=Is,e.lanes=a,e;case Bs:return e=Ee(19,r,t,s),e.elementType=Bs,e.lanes=a,e;case jd:return Oi(r,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vd:o=10;break e;case wd:o=9;break e;case Ta:o=11;break e;case Fa:o=14;break e;case at:o=16,i=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ee(o,r,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Ft(e,t,r,i){return e=Ee(7,e,i,t),e.lanes=r,e}function Oi(e,t,r,i){return e=Ee(22,e,i,t),e.elementType=jd,e.lanes=r,e.stateNode={isHidden:!1},e}function bs(e,t,r){return e=Ee(6,e,null,t),e.lanes=r,e}function vs(e,t,r){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function v0(e,t,r,i,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=es(0),this.expirationTimes=es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function yo(e,t,r,i,s,a,o,l,d){return e=new v0(e,t,r,l,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ee(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},eo(a),e}function w0(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qt,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function pu(e){if(!e)return St;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var r=e.type;if(me(r))return pc(e,r,t)}return t}function hu(e,t,r,i,s,a,o,l,d){return e=yo(r,i,!0,e,s,a,o,l,d),e.context=pu(null),r=e.current,i=de(),s=bt(r),a=Ze(i,s),a.callback=t??null,mt(r,a,s),e.current.lanes=s,yn(e,s,i),ye(e,i),e}function _i(e,t,r,i){var s=t.current,a=de(),o=bt(s);return r=pu(r),t.context===null?t.context=r:t.pendingContext=r,t=Ze(a,o),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=mt(s,t,o),e!==null&&(Oe(e,s,o,a),qn(e,s,o)),o}function Si(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function bo(e,t){Fl(e,t),(e=e.alternate)&&Fl(e,t)}function j0(){return null}var gu=typeof reportError=="function"?reportError:function(e){console.error(e)};function vo(e){this._internalRoot=e}Di.prototype.render=vo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));_i(e,t,null,null)};Di.prototype.unmount=vo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ut(function(){_i(null,e,null,null)}),t[tt]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vd();e={blockedOn:null,target:e,priority:t};for(var r=0;r<lt.length&&t!==0&&t<lt[r].priority;r++);lt.splice(r,0,e),r===0&&Qd(e)}};function wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wl(){}function k0(e,t,r,i,s){if(s){if(typeof i=="function"){var a=i;i=function(){var c=Si(o);a.call(c)}}var o=hu(t,i,e,0,null,!1,!1,"",Wl);return e._reactRootContainer=o,e[tt]=o.current,sn(e.nodeType===8?e.parentNode:e),Ut(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var l=i;i=function(){var c=Si(d);l.call(c)}}var d=yo(e,0,!1,null,null,!1,!1,"",Wl);return e._reactRootContainer=d,e[tt]=d.current,sn(e.nodeType===8?e.parentNode:e),Ut(function(){_i(t,d,r,i)}),d}function Hi(e,t,r,i,s){var a=r._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var l=s;s=function(){var d=Si(o);l.call(d)}}_i(t,o,e,s)}else o=k0(r,t,e,s,i);return Si(o)}$d=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Or(t.pendingLanes);r!==0&&(Oa(t,r|1),ye(t,q()),!(T&6)&&(yr=q()+500,zt()))}break;case 13:Ut(function(){var i=rt(e,1);if(i!==null){var s=de();Oe(i,e,1,s)}}),bo(e,1)}};_a=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var r=de();Oe(t,e,134217728,r)}bo(e,134217728)}};Yd=function(e){if(e.tag===13){var t=bt(e),r=rt(e,t);if(r!==null){var i=de();Oe(r,e,t,i)}bo(e,t)}};Vd=function(){return F};qd=function(e,t){var r=F;try{return F=e,t()}finally{F=r}};Ds=function(e,t,r){switch(t){case"input":if(Ms(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var s=Li(i);if(!s)throw Error(k(90));Sd(i),Ms(i,s)}}}break;case"textarea":Nd(e,r);break;case"select":t=r.value,t!=null&&ar(e,!!r.multiple,t,!1)}};Ld=ho;Md=Ut;var S0={usingClientEntryPoint:!1,Events:[vn,Jt,Li,Bd,Pd,ho]},Mr={findFiberByHostInstance:Pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C0={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wd(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||j0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dn.isDisabled&&Dn.supportsFiber)try{Ri=Dn.inject(C0),Ye=Dn}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S0;ke.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wo(t))throw Error(k(200));return w0(e,t,null,r)};ke.createRoot=function(e,t){if(!wo(e))throw Error(k(299));var r=!1,i="",s=gu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=yo(e,1,!1,null,null,r,!1,i,s),e[tt]=t.current,sn(e.nodeType===8?e.parentNode:e),new vo(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Wd(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Ut(e)};ke.hydrate=function(e,t,r){if(!Ui(t))throw Error(k(200));return Hi(null,e,t,!0,r)};ke.hydrateRoot=function(e,t,r){if(!wo(e))throw Error(k(405));var i=r!=null&&r.hydratedSources||null,s=!1,a="",o=gu;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=hu(t,null,e,1,r??null,s,!1,a,o),e[tt]=t.current,sn(e),i)for(e=0;e<i.length;e++)r=i[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new Di(t)};ke.render=function(e,t,r){if(!Ui(t))throw Error(k(200));return Hi(null,e,t,!1,r)};ke.unmountComponentAtNode=function(e){if(!Ui(e))throw Error(k(40));return e._reactRootContainer?(Ut(function(){Hi(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};ke.unstable_batchedUpdates=ho;ke.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Ui(r))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Hi(e,t,r,!1,i)};ke.version="18.3.1-next-f1338f8080-20240426";function xu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xu)}catch(e){console.error(e)}}xu(),xd.exports=ke;var N0=xd.exports,Al=N0;zs.createRoot=Al.createRoot,zs.hydrateRoot=Al.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hn(){return hn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},hn.apply(this,arguments)}var ft;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ft||(ft={}));const Ol="popstate";function z0(e){e===void 0&&(e={});function t(i,s){let{pathname:a,search:o,hash:l}=i.location;return va("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(i,s){return typeof s=="string"?s:Ci(s)}return R0(t,r,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function jo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function E0(){return Math.random().toString(36).substr(2,8)}function _l(e,t){return{usr:e.state,key:e.key,idx:t}}function va(e,t,r,i){return r===void 0&&(r=null),hn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jr(t):t,{state:r,key:t&&t.key||i||E0()})}function Ci(e){let{pathname:t="/",search:r="",hash:i=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function jr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function R0(e,t,r,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:a=!1}=i,o=s.history,l=ft.Pop,d=null,c=x();c==null&&(c=0,o.replaceState(hn({},o.state,{idx:c}),""));function x(){return(o.state||{idx:null}).idx}function p(){l=ft.Pop;let j=x(),f=j==null?null:j-c;c=j,d&&d({action:l,location:m.location,delta:f})}function g(j,f){l=ft.Push;let u=va(m.location,j,f);c=x()+1;let h=_l(u,c),b=m.createHref(u);try{o.pushState(h,"",b)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(b)}a&&d&&d({action:l,location:m.location,delta:1})}function y(j,f){l=ft.Replace;let u=va(m.location,j,f);c=x();let h=_l(u,c),b=m.createHref(u);o.replaceState(h,"",b),a&&d&&d({action:l,location:m.location,delta:0})}function w(j){let f=s.location.origin!=="null"?s.location.origin:s.location.href,u=typeof j=="string"?j:Ci(j);return u=u.replace(/ $/,"%20"),G(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let m={get action(){return l},get location(){return e(s,o)},listen(j){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(Ol,p),d=j,()=>{s.removeEventListener(Ol,p),d=null}},createHref(j){return t(s,j)},createURL:w,encodeLocation(j){let f=w(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:y,go(j){return o.go(j)}};return m}var Dl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Dl||(Dl={}));function I0(e,t,r){return r===void 0&&(r="/"),B0(e,t,r)}function B0(e,t,r,i){let s=typeof t=="string"?jr(t):t,a=ko(s.pathname||"/",r);if(a==null)return null;let o=mu(e);P0(o);let l=null;for(let d=0;l==null&&d<o.length;++d){let c=$0(a);l=D0(o[d],c)}return l}function mu(e,t,r,i){t===void 0&&(t=[]),r===void 0&&(r=[]),i===void 0&&(i="");let s=(a,o,l)=>{let d={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};d.relativePath.startsWith("/")&&(G(d.relativePath.startsWith(i),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(i.length));let c=wt([i,d.relativePath]),x=r.concat(d);a.children&&a.children.length>0&&(G(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),mu(a.children,t,x,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:O0(c,a.index),routesMeta:x})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let d of yu(a.path))s(a,o,d)}),t}function yu(e){let t=e.split("/");if(t.length===0)return[];let[r,...i]=t,s=r.endsWith("?"),a=r.replace(/\?$/,"");if(i.length===0)return s?[a,""]:[a];let o=yu(i.join("/")),l=[];return l.push(...o.map(d=>d===""?a:[a,d].join("/"))),s&&l.push(...o),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function P0(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:_0(t.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const L0=/^:[\w-]+$/,M0=3,T0=2,F0=1,W0=10,A0=-2,Ul=e=>e==="*";function O0(e,t){let r=e.split("/"),i=r.length;return r.some(Ul)&&(i+=A0),t&&(i+=T0),r.filter(s=>!Ul(s)).reduce((s,a)=>s+(L0.test(a)?M0:a===""?F0:W0),i)}function _0(e,t){return e.length===t.length&&e.slice(0,-1).every((i,s)=>i===t[s])?e[e.length-1]-t[t.length-1]:0}function D0(e,t,r){let{routesMeta:i}=e,s={},a="/",o=[];for(let l=0;l<i.length;++l){let d=i[l],c=l===i.length-1,x=a==="/"?t:t.slice(a.length)||"/",p=U0({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},x),g=d.route;if(!p)return null;Object.assign(s,p.params),o.push({params:s,pathname:wt([a,p.pathname]),pathnameBase:G0(wt([a,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(a=wt([a,p.pathnameBase]))}return o}function U0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,i]=H0(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:i.reduce((c,x,p)=>{let{paramName:g,isOptional:y}=x;if(g==="*"){let m=l[p]||"";o=a.slice(0,a.length-m.length).replace(/(.)\/+$/,"$1")}const w=l[p];return y&&!w?c[g]=void 0:c[g]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:o,pattern:e}}function H0(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),jo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,d)=>(i.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),i]}function $0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return jo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ko(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,i=e.charAt(r);return i&&i!=="/"?null:e.slice(r)||"/"}const Y0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,V0=e=>Y0.test(e);function q0(e,t){t===void 0&&(t="/");let{pathname:r,search:i="",hash:s=""}=typeof e=="string"?jr(e):e,a;if(r)if(V0(r))a=r;else{if(r.includes("//")){let o=r;r=r.replace(/\/\/+/g,"/"),jo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+r))}r.startsWith("/")?a=Hl(r.substring(1),"/"):a=Hl(r,t)}else a=t;return{pathname:a,search:X0(i),hash:K0(s)}}function Hl(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function ws(e,t,r,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Q0(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function bu(e,t){let r=Q0(e);return t?r.map((i,s)=>s===r.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function vu(e,t,r,i){i===void 0&&(i=!1);let s;typeof e=="string"?s=jr(e):(s=hn({},e),G(!s.pathname||!s.pathname.includes("?"),ws("?","pathname","search",s)),G(!s.pathname||!s.pathname.includes("#"),ws("#","pathname","hash",s)),G(!s.search||!s.search.includes("#"),ws("#","search","hash",s)));let a=e===""||s.pathname==="",o=a?"/":s.pathname,l;if(o==null)l=r;else{let p=t.length-1;if(!i&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;s.pathname=g.join("/")}l=p>=0?t[p]:"/"}let d=q0(s,l),c=o&&o!=="/"&&o.endsWith("/"),x=(a||o===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(c||x)&&(d.pathname+="/"),d}const wt=e=>e.join("/").replace(/\/\/+/g,"/"),G0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),X0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,K0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Z0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const wu=["post","put","patch","delete"];new Set(wu);const J0=["get",...wu];new Set(J0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gn(){return gn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},gn.apply(this,arguments)}const So=v.createContext(null),eh=v.createContext(null),Yt=v.createContext(null),$i=v.createContext(null),Vt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),ju=v.createContext(null);function th(e,t){let{relative:r}=t===void 0?{}:t;jn()||G(!1);let{basename:i,navigator:s}=v.useContext(Yt),{hash:a,pathname:o,search:l}=Su(e,{relative:r}),d=o;return i!=="/"&&(d=o==="/"?i:wt([i,o])),s.createHref({pathname:d,search:l,hash:a})}function jn(){return v.useContext($i)!=null}function kr(){return jn()||G(!1),v.useContext($i).location}function ku(e){v.useContext(Yt).static||v.useLayoutEffect(e)}function Sr(){let{isDataRoute:e}=v.useContext(Vt);return e?hh():rh()}function rh(){jn()||G(!1);let e=v.useContext(So),{basename:t,future:r,navigator:i}=v.useContext(Yt),{matches:s}=v.useContext(Vt),{pathname:a}=kr(),o=JSON.stringify(bu(s,r.v7_relativeSplatPath)),l=v.useRef(!1);return ku(()=>{l.current=!0}),v.useCallback(function(c,x){if(x===void 0&&(x={}),!l.current)return;if(typeof c=="number"){i.go(c);return}let p=vu(c,JSON.parse(o),a,x.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:wt([t,p.pathname])),(x.replace?i.replace:i.push)(p,x.state,x)},[t,i,o,a,e])}function Su(e,t){let{relative:r}=t===void 0?{}:t,{future:i}=v.useContext(Yt),{matches:s}=v.useContext(Vt),{pathname:a}=kr(),o=JSON.stringify(bu(s,i.v7_relativeSplatPath));return v.useMemo(()=>vu(e,JSON.parse(o),a,r==="path"),[e,o,a,r])}function nh(e,t){return ih(e,t)}function ih(e,t,r,i){jn()||G(!1);let{navigator:s}=v.useContext(Yt),{matches:a}=v.useContext(Vt),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let d=o?o.pathnameBase:"/";o&&o.route;let c=kr(),x;if(t){var p;let j=typeof t=="string"?jr(t):t;d==="/"||(p=j.pathname)!=null&&p.startsWith(d)||G(!1),x=j}else x=c;let g=x.pathname||"/",y=g;if(d!=="/"){let j=d.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let w=I0(e,{pathname:y}),m=dh(w&&w.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:wt([d,s.encodeLocation?s.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?d:wt([d,s.encodeLocation?s.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,r,i);return t&&m?v.createElement($i.Provider,{value:{location:gn({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:ft.Pop}},m):m}function sh(){let e=ph(),t=Z0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:s},r):null,null)}const ah=v.createElement(sh,null);class oh extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?v.createElement(Vt.Provider,{value:this.props.routeContext},v.createElement(ju.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lh(e){let{routeContext:t,match:r,children:i}=e,s=v.useContext(So);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Vt.Provider,{value:t},i)}function dh(e,t,r,i){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),i===void 0&&(i=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=i)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,l=(s=r)==null?void 0:s.errors;if(l!=null){let x=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);x>=0||G(!1),o=o.slice(0,Math.min(o.length,x+1))}let d=!1,c=-1;if(r&&i&&i.v7_partialHydration)for(let x=0;x<o.length;x++){let p=o[x];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=x),p.route.id){let{loaderData:g,errors:y}=r,w=p.route.loader&&g[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||w){d=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((x,p,g)=>{let y,w=!1,m=null,j=null;r&&(y=l&&p.route.id?l[p.route.id]:void 0,m=p.route.errorElement||ah,d&&(c<0&&g===0?(gh("route-fallback"),w=!0,j=null):c===g&&(w=!0,j=p.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,g+1)),u=()=>{let h;return y?h=m:w?h=j:p.route.Component?h=v.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=x,v.createElement(lh,{match:p,routeContext:{outlet:x,matches:f,isDataRoute:r!=null},children:h})};return r&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?v.createElement(oh,{location:r.location,revalidation:r.revalidation,component:m,error:y,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var Cu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Cu||{}),Nu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Nu||{});function ch(e){let t=v.useContext(So);return t||G(!1),t}function uh(e){let t=v.useContext(eh);return t||G(!1),t}function fh(e){let t=v.useContext(Vt);return t||G(!1),t}function zu(e){let t=fh(),r=t.matches[t.matches.length-1];return r.route.id||G(!1),r.route.id}function ph(){var e;let t=v.useContext(ju),r=uh(),i=zu();return t!==void 0?t:(e=r.errors)==null?void 0:e[i]}function hh(){let{router:e}=ch(Cu.UseNavigateStable),t=zu(Nu.UseNavigateStable),r=v.useRef(!1);return ku(()=>{r.current=!0}),v.useCallback(function(s,a){a===void 0&&(a={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,gn({fromRouteId:t},a)))},[e,t])}const $l={};function gh(e,t,r){$l[e]||($l[e]=!0)}function xh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function fe(e){G(!1)}function mh(e){let{basename:t="/",children:r=null,location:i,navigationType:s=ft.Pop,navigator:a,static:o=!1,future:l}=e;jn()&&G(!1);let d=t.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:d,navigator:a,static:o,future:gn({v7_relativeSplatPath:!1},l)}),[d,l,a,o]);typeof i=="string"&&(i=jr(i));let{pathname:x="/",search:p="",hash:g="",state:y=null,key:w="default"}=i,m=v.useMemo(()=>{let j=ko(x,d);return j==null?null:{location:{pathname:j,search:p,hash:g,state:y,key:w},navigationType:s}},[d,x,p,g,y,w,s]);return m==null?null:v.createElement(Yt.Provider,{value:c},v.createElement($i.Provider,{children:r,value:m}))}function yh(e){let{children:t,location:r}=e;return nh(wa(t),r)}new Promise(()=>{});function wa(e,t){t===void 0&&(t=[]);let r=[];return v.Children.forEach(e,(i,s)=>{if(!v.isValidElement(i))return;let a=[...t,s];if(i.type===v.Fragment){r.push.apply(r,wa(i.props.children,a));return}i.type!==fe&&G(!1),!i.props.index||!i.props.children||G(!1);let o={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=wa(i.props.children,a)),r.push(o)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},ja.apply(this,arguments)}function bh(e,t){if(e==null)return{};var r={},i=Object.keys(e),s,a;for(a=0;a<i.length;a++)s=i[a],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function vh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wh(e,t){return e.button===0&&(!t||t==="_self")&&!vh(e)}const jh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],kh="6";try{window.__reactRouterVersion=kh}catch{}const Sh="startTransition",Yl=gf[Sh];function Ch(e){let{basename:t,children:r,future:i,window:s}=e,a=v.useRef();a.current==null&&(a.current=z0({window:s,v5Compat:!0}));let o=a.current,[l,d]=v.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},x=v.useCallback(p=>{c&&Yl?Yl(()=>d(p)):d(p)},[d,c]);return v.useLayoutEffect(()=>o.listen(x),[o,x]),v.useEffect(()=>xh(i),[i]),v.createElement(mh,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:o,future:i})}const Nh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ge=v.forwardRef(function(t,r){let{onClick:i,relative:s,reloadDocument:a,replace:o,state:l,target:d,to:c,preventScrollReset:x,viewTransition:p}=t,g=bh(t,jh),{basename:y}=v.useContext(Yt),w,m=!1;if(typeof c=="string"&&zh.test(c)&&(w=c,Nh))try{let h=new URL(window.location.href),b=c.startsWith("//")?new URL(h.protocol+c):new URL(c),S=ko(b.pathname,y);b.origin===h.origin&&S!=null?c=S+b.search+b.hash:m=!0}catch{}let j=th(c,{relative:s}),f=Eh(c,{replace:o,state:l,target:d,preventScrollReset:x,relative:s,viewTransition:p});function u(h){i&&i(h),h.defaultPrevented||f(h)}return v.createElement("a",ja({},g,{href:w||j,onClick:m||a?i:u,ref:r,target:d}))});var Vl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Vl||(Vl={}));var ql;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ql||(ql={}));function Eh(e,t){let{target:r,replace:i,state:s,preventScrollReset:a,relative:o,viewTransition:l}=t===void 0?{}:t,d=Sr(),c=kr(),x=Su(e,{relative:o});return v.useCallback(p=>{if(wh(p,r)){p.preventDefault();let g=i!==void 0?i:Ci(c)===Ci(x);d(e,{replace:g,state:s,preventScrollReset:a,relative:o,viewTransition:l})}},[c,d,x,i,s,r,e,a,o,l])}function Rh(){const[e,t]=v.useState(!1),[r,i]=v.useState(!1),s=kr(),a=Sr();v.useEffect(()=>{const c=()=>t(window.scrollY>10);return window.addEventListener("scroll",c,{passive:!0}),c(),()=>window.removeEventListener("scroll",c)},[]);const o=[{label:"Home",to:"/"},{label:"Features",to:"/features"},{label:"Use Cases",to:"/use-cases"},{label:"How It Works",to:"/how-it-works"},{label:"Franchise",to:"/franchise"},{label:"Contact",to:"/contact"}],l=c=>c==="/"?s.pathname==="/":s.pathname.startsWith(c),d=()=>{i(!1),a("/qr-form")};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        .sfs-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          font-family: 'Space Grotesk', sans-serif;
        }

        .sfs-topbar {
          height: 2px;
          background: linear-gradient(90deg, #064e3b 0%, #16a34a 40%, #4ade80 60%, #16a34a 80%, #064e3b 100%);
        }

        .sfs-bar {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(226,232,240,0.8);
          transition: height .35s ease, box-shadow .35s ease;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04);
        }

        .sfs-nav.scrolled .sfs-bar {
          height: 66px;
          box-shadow: 0 4px 24px rgba(6,78,59,0.08), 0 1px 0 rgba(0,0,0,0.04);
        }

        /* ── LOGO ── */

        .sfs-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .sfs-badge-wrap {
          position: relative;
          width: 62px;
          height: 62px;
          flex-shrink: 0;
          transition: width .35s ease, height .35s ease, transform .25s ease;
        }

        .sfs-nav.scrolled .sfs-badge-wrap {
          width: 50px;
          height: 50px;
        }

        .sfs-logo:hover .sfs-badge-wrap {
          transform: scale(1.05);
        }

        /* Dual pulse rings
        .sfs-pulse-ring {
          position: absolute;
          inset: -7px;
          border-radius: 24px;
          border: 1.5px solid rgba(34,197,94,0.35);
          animation: sfs-pulse-out 2.8s ease-out infinite;
          pointer-events: none;
        }
        .sfs-pulse-ring:nth-child(2) {
          animation-delay: 1s;
          inset: -14px;
          border-radius: 29px;
        } */

        @keyframes sfs-pulse-out {
          0%   { opacity: 0.75; transform: scale(0.9); }
          100% { opacity: 0;    transform: scale(1.2); }
        }

        /* Spinning conic ring — speeds up on hover */
        .sfs-ring-outer {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: linear-gradient(145deg, #22c55e, #16a34a, #1e40af);
          padding: 2.5px;
          transition: border-radius .35s ease;
        }

        .sfs-nav.scrolled .sfs-ring-outer {
          border-radius: 15px;
        }

        .sfs-logo:hover .sfs-ring-outer {
          animation-duration: 1.4s;
        }

        /* @keyframes sfs-spin-ring {
          from { transform: rotate(100deg); }
          to   { transform: rotate(360deg); }
        } */

        /* White face */
        .sfs-badge-face {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 14px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: border-radius .35s ease;
        }

        /* ── Logo Scanning Laser ── */
        .sfs-logo-laser {
          position: absolute;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 10%, #16a34a 40%, #4ade80 50%, #16a34a 60%, transparent 90%);
          box-shadow: 0 0 6px #16a34a, 0 0 10px #4ade80;
          z-index: 5;
          pointer-events: none;
          animation: sfs-logo-scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;

          /* Clip strictly to the transparent shield shape */
          mask-image: url('/logo.png');
          -webkit-mask-image: url('/logo.png');
          mask-size: 92% 92%;
          -webkit-mask-size: 92% 92%;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-position: center;
        }

        .sfs-logo:hover .sfs-logo-laser {
          animation-duration: 1.4s;
          background: linear-gradient(90deg, transparent 10%, #22c55e 40%, #86efac 50%, #22c55e 60%, transparent 90%);
          box-shadow: 0 0 10px #22c55e, 0 0 14px #86efac;
        }

        @keyframes sfs-logo-scan {
          0% {
            top: -6%;
            opacity: 0;
          }
          8%, 92% {
            opacity: 1;
          }
          100% {
            top: 106%;
            opacity: 0;
          }
        }

        /* ── QR Scanner Viewfinder Corners ── */
        .sfs-logo-corner {
          position: absolute;
          width: 9px;
          height: 9px;
          border-color: #2ebd3a;
          border-style: solid;
          border-width: 0;
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .sfs-logo-corner-tl {
          top: -2.5px;
          left: -2.5px;
          border-top-width: 2.2px;
          border-left-width: 2.2px;
          border-top-left-radius: 3.5px;
        }

        .sfs-logo-corner-tr {
          top: -2.5px;
          right: -2.5px;
          border-top-width: 2.2px;
          border-right-width: 2.2px;
          border-top-right-radius: 3.5px;
        }

        .sfs-logo-corner-bl {
          bottom: -2.5px;
          left: -2.5px;
          border-bottom-width: 2.2px;
          border-left-width: 2.2px;
          border-bottom-left-radius: 3.5px;
        }

        .sfs-logo-corner-br {
          bottom: -2.5px;
          right: -2.5px;
          border-bottom-width: 2.2px;
          border-right-width: 2.2px;
          border-bottom-right-radius: 3.5px;
        }

        /* Hover animation - make them pulse or expand slightly! */
        .sfs-logo:hover .sfs-logo-corner {
          border-color: #4ade80;
          filter: drop-shadow(0 0 3px #2ebd3a);
        }
        
        .sfs-logo:hover .sfs-logo-corner-tl { top: -4.5px; left: -4.5px; }
        .sfs-logo:hover .sfs-logo-corner-tr { top: -4.5px; right: -4.5px; }
        .sfs-logo:hover .sfs-logo-corner-bl { bottom: -4.5px; left: -4.5px; }
        .sfs-logo:hover .sfs-logo-corner-br { bottom: -4.5px; right: -4.5px; }

        .sfs-nav.scrolled .sfs-badge-face {
          border-radius: 11px;
        }

        /* Logo — mix-blend-mode removes the black background */
        .sfs-badge-img {
          width: 92%;
          height: 92%;
          object-fit: contain;
          mix-blend-mode: multiply;
          transition: transform .4s cubic-bezier(.34,1.3,.64,1);
          border-radius: 6px;
        }

        .sfs-logo:hover .sfs-badge-img {
          transform: scale(1.08);
        }

        /* ── WORDMARK ── */

        .sfs-wordmark {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 3px;
        }

        .sfs-wordmark-row1 {
          display: flex;
          align-items: center;
          gap: 8px;
          line-height: 1;
        }

        .sfs-wordmark-primary {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 900;
          letter-spacing: -.03em;
          line-height: 1;
          color: #0f172a;
          white-space: nowrap;
        }

        .sfs-wordmark-primary .accent {
          background: linear-gradient(135deg, #16a34a 0%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sfs-status {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #f0fdf4;
          border: 1px solid rgba(22,163,74,0.25);
          border-radius: 999px;
          padding: 2px 7px;
          flex-shrink: 0;
        }

        .sfs-status-pulse {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #16a34a;
          animation: sfs-blink 2.2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes sfs-blink {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50%       { opacity: 1;   transform: scale(1.2); }
        }

        .sfs-status-label {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #15803d;
        }

        .sfs-wordmark-secondary {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .05em;
          color: #94a3b8;
          text-transform: uppercase;
          line-height: 1;
          white-space: nowrap;
        }

        /* ── NAV LINKS ── */

        .sfs-links {
          display: flex;
          align-items: center;
          gap: 0;
          margin-left: auto;
          margin-right: 20px;
        }

        .sfs-link {
          position: relative;
          padding: 8px 14px;
          border-radius: 10px;
          text-decoration: none;
          color: #475569;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: .01em;
          transition: color .2s ease, background .2s ease;
        }

        .sfs-link:hover {
          color: #15803d;
          background: rgba(220,252,231,.6);
        }

        .sfs-link.active {
          color: #15803d;
        }

        .sfs-link.active::after {
          content: "";
          position: absolute;
          left: 14px; right: 14px;
          bottom: 4px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #16a34a, #4ade80);
        }

        /* ── ACTIONS ── */

        .sfs-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sfs-login {
          height: 40px;
          display: flex;
          align-items: center;
          padding: 0 20px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          color: #15803d;
          border: 1.5px solid rgba(22,163,74,.3);
          background: transparent;
          transition: all .22s ease;
        }

        .sfs-login:hover {
          background: #e8f8eb;
          border-color: rgba(46, 189, 58, .65);
          transform: translateY(-1px);
        }

        .sfs-prereg {
          height: 40px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 22px;
          border-radius: 10px;
          background: #16a34a;
          color: #fff;
          border: none;
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .01em;
          box-shadow: 0 1px 0 rgba(0,0,0,.12), 0 4px 16px rgba(22,163,74,.3);
          transition: all .22s ease;
          white-space: nowrap;
        }

        .sfs-prereg:hover {
          background: #1b7a21;
          transform: translateY(-1px);
          box-shadow: 0 1px 0 rgba(0,0,0,.12), 0 8px 24px rgba(22,163,74,.38);
        }

        .prereg-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #86efac;
          flex-shrink: 0;
          animation: sfs-blink 1.8s ease-in-out infinite;
        }

        /* ── MOBILE ── */

        .sfs-mobile-btn {
          display: none;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(22,163,74,.2);
          border-radius: 10px;
          background: #f0fdf4;
          cursor: pointer;
          font-size: 18px;
          color: #15803d;
          align-items: center;
          justify-content: center;
        }
 
        .sfs-mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15,23,42,.5);
          backdrop-filter: blur(8px);
          opacity: 0;
          pointer-events: none;
          transition: opacity .3s ease;
          z-index: 9998;
        }

        .sfs-mobile-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        .sfs-mobile-drawer {
          position: absolute;
          top: 0; right: 0;
          width: min(88vw, 310px);
          height: 100%;
          background: #fff;
          padding: 84px 20px 30px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transform: translateX(100%);
          transition: transform .32s cubic-bezier(.4,0,.2,1);
          box-shadow: -8px 0 40px rgba(15,23,42,.12);
        }

        .sfs-mobile-overlay.open .sfs-mobile-drawer {
          transform: translateX(0);
        }

        .sfs-mobile-link {
          padding: 12px 14px;
          border-radius: 10px;
          text-decoration: none;
          color: #334155;
          font-size: 14.5px;
          font-weight: 600;
          transition: all .15s ease;
        }

        .sfs-mobile-link:hover,
        .sfs-mobile-link.active {
          background: rgba(220,252,231,.8);
          color: #15803d;
        }

        .sfs-mobile-actions {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sfs-mobile-prereg {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 10px;
          background: #16a34a;
          color: #fff;
          border: none;
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(22,163,74,.3);
        }

        .sfs-mobile-login {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          color: #15803d;
          border: 1.5px solid rgba(22,163,74,.3);
          background: transparent;
        }

        /* ── RESPONSIVE ── */

        @media (max-width: 980px) {
          .sfs-links,
          .sfs-actions { display: none; }
          .sfs-mobile-btn { display: flex; }
          .sfs-bar { height: 68px; padding: 0 18px; }
          .sfs-badge-wrap { width: 50px; height: 50px; }
        }

        @media (max-width: 480px) {
          .sfs-status { display: none; }
        }

        @media (max-width: 380px) {
          .sfs-wordmark-secondary { display: none; }
        }
      `}),n.jsxs("header",{className:`sfs-nav ${e?"scrolled":""}`,children:[n.jsx("div",{className:"sfs-topbar"}),n.jsxs("div",{className:"sfs-bar",children:[n.jsxs(Ge,{to:"/",className:"sfs-logo",children:[n.jsxs("div",{className:"sfs-badge-wrap",children:[n.jsx("div",{className:"sfs-logo-corner sfs-logo-corner-tl"}),n.jsx("div",{className:"sfs-logo-corner sfs-logo-corner-tr"}),n.jsx("div",{className:"sfs-logo-corner sfs-logo-corner-bl"}),n.jsx("div",{className:"sfs-logo-corner sfs-logo-corner-br"}),n.jsx("div",{className:"sfs-badge-border",children:n.jsxs("div",{className:"sfs-badge-face",children:[n.jsx("img",{src:"/logo.png",alt:"ScanForSafe",className:"sfs-badge-img"}),n.jsx("div",{className:"sfs-logo-laser"})]})})]}),n.jsxs("div",{className:"sfs-wordmark",children:[n.jsxs("div",{className:"sfs-wordmark-row1",children:[n.jsxs("div",{className:"sfs-wordmark-primary",children:[n.jsx("span",{className:"accent",children:"ScanFor"}),"Safe"]}),n.jsxs("div",{className:"sfs-status",children:[n.jsx("span",{className:"sfs-status-pulse"}),n.jsx("span",{className:"sfs-status-label",children:"Smart Shield"})]})]}),n.jsx("div",{className:"sfs-wordmark-secondary",children:"Innovations Pvt Ltd"})]})]}),n.jsx("nav",{className:"sfs-links",children:o.map(c=>n.jsx(Ge,{to:c.to,className:`sfs-link ${l(c.to)?"active":""}`,children:c.label},c.label))}),n.jsxs("div",{className:"sfs-actions",children:[n.jsx(Ge,{to:"/login",className:"sfs-login",children:"Login"}),n.jsxs("button",{className:"sfs-prereg",onClick:d,children:[n.jsx("span",{className:"prereg-dot"}),"Pre Registration"]})]}),n.jsx("button",{className:"sfs-mobile-btn",onClick:()=>i(!0),"aria-label":"Open menu",children:"☰"})]})]}),n.jsx("div",{className:`sfs-mobile-overlay ${r?"open":""}`,onClick:()=>i(!1),children:n.jsxs("div",{className:"sfs-mobile-drawer",onClick:c=>c.stopPropagation(),children:[o.map(c=>n.jsx(Ge,{to:c.to,className:`sfs-mobile-link ${l(c.to)?"active":""}`,onClick:()=>i(!1),children:c.label},c.label)),n.jsxs("div",{className:"sfs-mobile-actions",children:[n.jsx(Ge,{to:"/login",className:"sfs-mobile-login",onClick:()=>i(!1),children:"Login"}),n.jsxs("button",{className:"sfs-mobile-prereg",onClick:d,children:[n.jsx("span",{className:"prereg-dot"}),"Pre Registration"]})]})]})})]})}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Eu=(...e)=>e.filter((t,r,i)=>!!t&&i.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=v.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:i,className:s="",children:a,iconNode:o,...l},d)=>v.createElement("svg",{ref:d,...Bh,width:t,height:t,stroke:e,strokeWidth:i?Number(r)*24/Number(t):r,className:Eu("lucide",s),...l},[...o.map(([c,x])=>v.createElement(c,x)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(e,t)=>{const r=v.forwardRef(({className:i,...s},a)=>v.createElement(Ph,{ref:a,iconNode:t,className:Eu(`lucide-${Ih(e)}`,i),...s}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=R("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=R("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=R("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=R("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=R("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=R("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=R("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=R("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=R("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=R("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=R("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=R("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=R("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=R("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=R("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=R("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=R("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=R("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=R("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=R("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=R("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=R("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=R("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=R("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=R("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=R("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=R("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=R("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=R("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=R("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=R("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=R("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=R("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=R("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=R("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=R("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=R("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=R("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=R("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=R("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=R("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=R("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=R("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=R("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=R("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=R("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=R("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=R("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=R("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=R("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=R("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=R("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=R("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=R("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=R("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=R("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=R("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=R("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=R("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=R("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=R("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=R("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=R("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=R("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),l1="/logo.png",d1=()=>n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),c1=()=>n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),u1=()=>n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"})}),f1=()=>n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),p1=()=>n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})});function h1(){const[e,t]=v.useState(""),[r,i]=v.useState(!1),s=l=>{l.preventDefault(),e.trim()&&(i(!0),setTimeout(()=>{i(!1),t("")},3e3))},a=[{label:"Home",to:"/"},{label:"Features",to:"/features"},{label:"Use Cases",to:"/use-cases"},{label:"How It Works",to:"/how-it-works"},{label:"Franchise",to:"/franchise"},{label:"Contact",to:"/contact"}],o=[{Icon:c1,href:"https://facebook.com/Scanforsafeinnovations",label:"Facebook"},{Icon:d1,href:"https://www.instagram.com/scanforsafeinnovations?igsh=anhlN2t1eG9qNDV2",label:"Instagram"},{Icon:f1,href:"https://twitter.com",label:"X (Twitter)"},{Icon:p1,href:"https://linkedin.com",label:"LinkedIn"},{Icon:u1,href:"https://t.me/scanforsafe",label:"Telegram"}];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .sfs-footer {
          position: relative;
          background-image: url('/footer_bg.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
          border-top: 3px solid #2ebd3a;
          color: #f1f5f9;
          font-family: 'Inter', sans-serif;
          width: 100%;
          overflow: hidden;
        }

        @media (hover: none) {
          .sfs-footer {
            background-attachment: scroll;
          }
        }

        .sfs-footer-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(11, 37, 69, 0.95) 0%, rgba(5, 18, 36, 0.96) 100%);
          z-index: 1;
        }

        .sfs-footer-container {
          position: relative;
          max-width: 1300px;
          margin: 0 auto;
          padding: 80px clamp(20px, 5vw, 60px) 30px;
          z-index: 2;
        }

        .sfs-footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: clamp(30px, 5vw, 80px);
          margin-bottom: 60px;
        }

        .sfs-footer-brand {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sfs-footer-logo-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .sfs-footer-logo-box {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid #2ebd3a;
          box-shadow: 0 0 20px rgba(46, 189, 58, 0.3);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sfs-footer-logo-img {
          width: 82%;
          height: auto;
          object-fit: contain;
        }

        .sfs-footer-title {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          font-weight: 800;
          margin: 0;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .sfs-footer-title span {
          color: #2ebd3a;
          text-shadow: 0 0 10px rgba(46, 189, 58, 0.2);
        }

        .sfs-footer-tagline {
          font-size: 10px;
          font-weight: 700;
          color: #2ebd3a;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .sfs-footer-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #cbd5e1;
          margin: 0;
          max-width: 440px;
        }

        .sfs-footer-socials {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .sfs-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        /* Platform-specific ALWAYS-ON brand colours */
        .sfs-social-icon[data-platform="Facebook"] {
          color: #1877F2;
          border-color: rgba(24, 119, 242, 0.35);
          background: rgba(24, 119, 242, 0.08);
        }
        .sfs-social-icon[data-platform="Facebook"]:hover {
          background: #1877F2;
          color: #ffffff;
          border-color: #1877F2;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(24, 119, 242, 0.45);
        }

        .sfs-social-icon[data-platform="Instagram"] {
          color: #e1306c;
          border-color: rgba(225, 48, 108, 0.35);
          background: rgba(225, 48, 108, 0.08);
        }
        .sfs-social-icon[data-platform="Instagram"]:hover {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          color: #ffffff;
          border-color: #dc2743;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(220, 39, 67, 0.45);
        }

        .sfs-social-icon[data-platform="X (Twitter)"] {
          color: #e7e9ea;
          border-color: rgba(231, 233, 234, 0.25);
          background: rgba(231, 233, 234, 0.06);
        }
        .sfs-social-icon[data-platform="X (Twitter)"]:hover {
          background: #e7e9ea;
          color: #000000;
          border-color: #e7e9ea;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(231, 233, 234, 0.25);
        }

        .sfs-social-icon[data-platform="LinkedIn"] {
          color: #0A66C2;
          border-color: rgba(10, 102, 194, 0.35);
          background: rgba(10, 102, 194, 0.08);
        }
        .sfs-social-icon[data-platform="LinkedIn"]:hover {
          background: #0A66C2;
          color: #ffffff;
          border-color: #0A66C2;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(10, 102, 194, 0.45);
        }

        .sfs-social-icon[data-platform="Telegram"] {
          color: #26A5E4;
          border-color: rgba(38, 165, 228, 0.35);
          background: rgba(38, 165, 228, 0.08);
        }
        .sfs-social-icon[data-platform="Telegram"]:hover {
          background: #26A5E4;
          color: #ffffff;
          border-color: #26A5E4;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(38, 165, 228, 0.45);
        }

        .sfs-footer-section-title {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #2ebd3a;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin: 0 0 24px 0;
          position: relative;
          display: inline-block;
        }

        .sfs-footer-section-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 32px;
          height: 2px;
          background: #2ebd3a;
          border-radius: 2px;
        }

        .sfs-footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sfs-footer-link {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .sfs-footer-link:hover {
          color: #ffffff;
          transform: translateX(5px);
        }

        .sfs-footer-link-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2ebd3a;
          opacity: 0.6;
          transition: all 0.2s ease;
        }

        .sfs-footer-link:hover .sfs-footer-link-dot {
          opacity: 1;
          transform: scale(1.3);
          box-shadow: 0 0 8px #2ebd3a;
        }

        .sfs-footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sfs-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .sfs-footer-contact-icon {
          color: #2ebd3a;
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .sfs-footer-contact-text strong {
          color: #ffffff;
          display: block;
          margin-bottom: 2px;
        }

        .sfs-footer-newsletter-wrap {
          border-top: 1.5px dashed rgba(255, 255, 255, 0.1);
          border-bottom: 1.5px dashed rgba(255, 255, 255, 0.1);
          padding: 30px 0;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .sfs-newsletter-info h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px 0;
        }

        .sfs-newsletter-info p {
          font-size: 13.5px;
          color: #cbd5e1;
          margin: 0;
        }

        .sfs-newsletter-form {
          display: flex;
          width: 100%;
          max-width: 440px;
          background: rgba(255, 255, 255, 0.04);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 4px;
          transition: all 0.25s ease;
        }

        .sfs-newsletter-form:focus-within {
          border-color: #2ebd3a;
          box-shadow: 0 0 16px rgba(46, 189, 58, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .sfs-newsletter-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          padding: 10px 14px;
          font-size: 13.5px;
          width: 100%;
        }

        .sfs-newsletter-input::placeholder {
          color: #94a3b8;
        }

        .sfs-newsletter-btn {
          background: #2ebd3a;
          color: #ffffff;
          border: none;
          outline: none;
          border-radius: 10px;
          padding: 0 20px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .sfs-newsletter-btn:hover {
          background: #239c2d;
          box-shadow: 0 4px 12px rgba(46, 189, 58, 0.3);
        }

        .sfs-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 30px;
          border-top: 1.5px solid rgba(255, 255, 255, 0.08);
          flex-wrap: wrap;
        }

        .sfs-footer-copy {
          font-size: 13px;
          color: #94a3b8;
          margin: 0;
        }

        .sfs-footer-copy strong {
          color: #cbd5e1;
        }

        .sfs-footer-badges {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .sfs-footer-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #94a3b8;
          font-weight: 500;
        }

        .sfs-footer-badge-icon {
          color: #2ebd3a;
        }

        @media (max-width: 992px) {
          .sfs-footer-main {
            grid-template-columns: 1.2fr 1fr;
          }
          .sfs-footer-brand {
            grid-column: span 2;
          }
        }

        @media (max-width: 600px) {
          .sfs-footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .sfs-footer-brand {
            grid-column: span 1;
          }
          .sfs-footer-container {
            padding-top: 60px;
          }
          .sfs-footer-newsletter-wrap {
            flex-direction: column;
            align-items: flex-start;
          }
          .sfs-newsletter-form {
            max-width: 100%;
          }
          .sfs-footer-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .sfs-footer-badges {
            justify-content: center;
          }
        }
      `}),n.jsxs("footer",{className:"sfs-footer",children:[n.jsx("div",{className:"sfs-footer-overlay"}),n.jsxs("div",{className:"sfs-footer-container",children:[n.jsxs("div",{className:"sfs-footer-newsletter-wrap",children:[n.jsxs("div",{className:"sfs-newsletter-info",children:[n.jsx("h3",{children:"Get Safety Alerts & Updates"}),n.jsx("p",{children:"Subscribe to our corporate newsletter for modern verification insights."})]}),n.jsxs("form",{onSubmit:s,className:"sfs-newsletter-form",children:[n.jsx("input",{className:"sfs-newsletter-input",type:"email",required:!0,placeholder:r?"Thanks for subscribing!":"Enter your corporate email",value:e,onChange:l=>t(l.target.value),disabled:r}),n.jsx("button",{type:"submit",className:"sfs-newsletter-btn",disabled:r,children:r?"Subscribed!":"Subscribe"})]})]}),n.jsxs("div",{className:"sfs-footer-main",children:[n.jsxs("div",{className:"sfs-footer-brand",children:[n.jsxs(Ge,{to:"/",className:"sfs-footer-logo-wrap",style:{textDecoration:"none"},children:[n.jsx("div",{className:"sfs-footer-logo-box",children:n.jsx("img",{src:l1,alt:"ScanForSafe Logo",className:"sfs-footer-logo-img"})}),n.jsxs("div",{children:[n.jsxs("h2",{className:"sfs-footer-title",children:["Scan",n.jsx("span",{children:"ForSafe"})]}),n.jsx("div",{className:"sfs-footer-tagline",children:"Smart Shield"})]})]}),n.jsx("p",{className:"sfs-footer-desc",children:"Pioneering secure QR code solutions, visual verification systems, and smart tracking technologies. Empowering a safer and more authentic world through trusted hardware and visual tags."}),n.jsx("div",{className:"sfs-footer-socials",children:o.map(({Icon:l,href:d,label:c},x)=>n.jsx("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"sfs-social-icon","data-platform":c,title:c,children:n.jsx(l,{})},x))})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"sfs-footer-section-title",children:"Navigation"}),n.jsx("div",{className:"sfs-footer-links",children:a.map((l,d)=>n.jsxs(Ge,{to:l.to,className:"sfs-footer-link",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[n.jsx("span",{className:"sfs-footer-link-dot"}),l.label]},d))})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"sfs-footer-section-title",children:"Contact Us"}),n.jsxs("div",{className:"sfs-footer-contact-list",children:[n.jsxs("div",{className:"sfs-footer-contact-item",children:[n.jsx(Wt,{className:"sfs-footer-contact-icon",size:17}),n.jsxs("div",{className:"sfs-footer-contact-text",children:[n.jsx("strong",{children:"Phone"}),"+91 98765 43210"]})]}),n.jsxs("div",{className:"sfs-footer-contact-item",children:[n.jsx(Tu,{className:"sfs-footer-contact-icon",size:17}),n.jsxs("div",{className:"sfs-footer-contact-text",children:[n.jsx("strong",{children:"Email"}),"info@scanforsafe.com"]})]}),n.jsxs("div",{className:"sfs-footer-contact-item",children:[n.jsx(ze,{className:"sfs-footer-contact-icon",size:17}),n.jsxs("div",{className:"sfs-footer-contact-text",children:[n.jsx("strong",{children:"Corporate Office"}),"SFSI Innovations Tower, Phase-2, Cyber Heights, Hyderabad, India"]})]})]})]})]}),n.jsxs("div",{className:"sfs-footer-bottom",children:[n.jsxs("p",{className:"sfs-footer-copy",children:["© ",new Date().getFullYear()," ",n.jsx("strong",{children:"ScanForSafe Innovations Pvt Ltd"}),". All rights reserved."]}),n.jsxs("div",{className:"sfs-footer-badges",children:[n.jsxs("span",{className:"sfs-footer-badge",children:[n.jsx(xn,{size:14,className:"sfs-footer-badge-icon"}),"SSL Secured"]}),n.jsxs("span",{className:"sfs-footer-badge",children:[n.jsx(Pe,{size:14,className:"sfs-footer-badge-icon"}),"ISO 27001 Certified"]}),n.jsxs("span",{className:"sfs-footer-badge",children:[n.jsx(Qh,{size:14,className:"sfs-footer-badge-icon"}),"Eco Friendly tags"]})]})]})]})]})]})}const g1="/assets/car-BSIz0SDG.png",x1="/assets/bike-CEMC_UmP.png",m1="/assets/luggage-g7ehyfUE.png",js="/assets/qr-B8XSq41G.png",Xl=["🛡️  10,000+ Assets Protected","📡  Live QR & NFC Scanning","🚨  Instant Owner Alerts","🔐  End-to-End Encrypted","⚡  Scan in Under 2 Seconds","🌍  Available in 50+ Countries","✅  4.9 / 5 User Rating","📲  15,000+ Scans Today","🏆  #1 Asset Protection Platform","🔔  8,000+ Alerts Sent Today"],Kl=[{label:"Vehicle Verified",owner:"Rahul Verma",avatar:js,phone:"+91 98765 43210",email:"rahul.verma@mail.com",address:"23, Green Park, New Delhi",asset:"SFS-CAR-4587",emergency:"+91 99887 77665",registered:"12 May 2024, 09:15 AM",img:g1,color:"#2ebd3a"},{label:"Bike Verified",owner:"Aarav Sharma",avatar:js,phone:"+91 98345 22119",email:"aarav.sharma@mail.com",address:"Plot 7, Andheri West, Mumbai",asset:"SFS-BIKE-7712",emergency:"+91 88774 66332",registered:"15 May 2024, 10:30 AM",img:x1,color:"#4bd557"},{label:"Luggage Verified",owner:"Priya Kapoor",avatar:js,phone:"+91 93456 77889",email:"priya.kapoor@mail.com",address:"12, Koramangala, Bangalore",asset:"SFS-LUG-1123",emergency:"+91 90909 88776",registered:"28 Mar 2024, 02:45 PM",img:m1,color:"#7ded88"}],y1=`
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

.sfs-hero, .sfs-hero *, .sfs-hero *::before, .sfs-hero *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }

:root {
  --green: #2ebd3a;
  --green2: #4bd557;
  --green3: #7ded88;
  --green-pale: #e8f8eb;
  --dark: #06160A;
  --mid: #4b6357;
  --bg: #f4f8f4;
  --card-bg: rgba(255,255,255,0.80);
  --glass: rgba(255,255,255,0.60);
  --glass-border: rgba(46,189,58,0.16);
}

/* ══ ROOT ══ */
.sfs-hero {
  font-family: 'DM Sans', sans-serif;
  min-height: auto;
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--dark);
  border: 1.5px solid rgba(46,189,58,0.22);
  border-radius: 32px;
  margin-top: 104px;
  box-shadow:
    0 0 0 1px rgba(46,189,58,0.08),
    0 8px 48px rgba(46,189,58,0.10),
    inset 0 1px 0 rgba(255,255,255,0.9);
}

/* ══ BACKGROUND ══ */
.sfs-bg {
  position: absolute; inset: 0;
  pointer-events: none; z-index: 0;
  border-radius: 30px; overflow: hidden;
}
.sfs-bg::before {
  content: "";
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 900px 600px at 110% 0%, rgba(46,189,58,0.11) 0%, transparent 58%),
    radial-gradient(ellipse 600px 500px at -10% 100%, rgba(46,189,58,0.08) 0%, transparent 55%),
    radial-gradient(ellipse 350px 260px at 55% 45%, rgba(125,237,136,0.04) 0%, transparent 70%),
    linear-gradient(160deg, #f5f9f5 0%, #f5f9f5 40%, #f0fdf2 100%);
}

.sfs-particle {
  position: absolute; border-radius: 50%;
  background: rgba(46,189,58,0.30);
  pointer-events: none;
}

/* ══ GRID ══ */
.sfs-grid {
  flex: 1;
  max-width: 1440px; width: 100%; margin: 0 auto;
  display: grid; grid-template-columns: 44% 56%;
  align-items: center;
  padding: 74px 72px 24px;
  position: relative; z-index: 2;
  gap: 0;
}

/* ══ LEFT ══ */
.sfs-left { padding-right: 28px; }

.sfs-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(46,189,58,0.24);
  border-radius: 12px;
  padding: 8px 14px 8px 10px;
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 10px; font-weight: 700;
  letter-spacing: .08em; color: #1a4a1e;
  text-transform: uppercase;
  box-shadow: 0 2px 14px rgba(46,189,58,0.10), 0 1px 0 rgba(255,255,255,0.9) inset;
  animation: fadeUp .6s .10s cubic-bezier(.22,1,.36,1) both;
  width: fit-content;
}
.sfs-badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--green);
  animation: livePulse 2s ease-out infinite;
  flex-shrink: 0;
}
.sfs-badge-sep {
  width: 1px; height: 14px;
  background: rgba(46,189,58,0.30);
  display: inline-block;
}
.sfs-badge-count {
  font-size: 9.5px; font-weight: 800;
  color: var(--green); letter-spacing: .04em;
}
@keyframes livePulse {
  0%   { box-shadow: 0 0 0 0 rgba(46,189,58,.7); }
  70%  { box-shadow: 0 0 0 8px rgba(46,189,58,0); }
  100% { box-shadow: 0 0 0 0 rgba(46,189,58,0); }
}

.sfs-h1 {
  font-family: 'Sora', sans-serif;
  font-size: 54px; line-height: .92;
  letter-spacing: -3.0px; font-weight: 900;
  color: var(--dark); margin-bottom: 0;
  animation: slideInLeft .8s .04s cubic-bezier(.22,1,.36,1) both;
}
.sfs-h1 .green {
  background: linear-gradient(125deg, #0a2e10 0%, #2ebd3a 52%, #4bd557 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; display: inline-block;
}
.sfs-h1 .outline {
  color: transparent;
  -webkit-text-stroke: 2px rgba(46,189,58,0.25);
  animation: outlinePulse 4s ease-in-out infinite .5s;
}
@keyframes outlinePulse {
  0%,100% { -webkit-text-stroke-color: rgba(46,189,58,0.25); }
  50%      { -webkit-text-stroke-color: rgba(46,189,58,0.45); }
}

.sfs-sub {
  font-size: 14px; line-height: 1.76; color: var(--mid);
  max-width: 480px; margin-top: 10px; margin-bottom: 16px;
  font-weight: 400;
  animation: slideInLeft .85s .14s cubic-bezier(.22,1,.36,1) both;
}

/* ── Feature cards ── */
.sfs-feats { display: flex; gap: 10px; margin-bottom: 16px; }
.sfs-feat {
  flex: 1;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(46,189,58,0.14);
  border-radius: 16px; padding: 12px 14px 10px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,255,255,0.7) inset;
  position: relative; overflow: hidden;
  transition: .32s cubic-bezier(.34,1.46,.64,1);
  cursor: default;
}
.sfs-feat::before {
  content: "";
  position: absolute; top: 0; left: 0; right: 0; height: 1.5px;
  background: linear-gradient(90deg, transparent, rgba(46,189,58,0.5), transparent);
  transform: scaleX(0); transform-origin: center; transition: .32s ease;
}
.sfs-feat:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 18px 40px rgba(46,189,58,0.13), 0 0 0 1px rgba(46,189,58,0.20);
  border-color: rgba(46,189,58,0.26);
  background: rgba(255,255,255,0.88);
}
.sfs-feat:hover::before { transform: scaleX(1); }
.sfs-feat-ico {
  width: 42px; height: 42px; border-radius: 13px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 11px;
  transition: .32s cubic-bezier(.34,1.46,.64,1);
  box-shadow: 0 4px 10px rgba(46,189,58,0.15);
  border: 1px solid rgba(46,189,58,0.16);
  flex-shrink: 0;
}
.sfs-feat:hover .sfs-feat-ico { transform: scale(1.1) rotate(-5deg); }
.sfs-feat h4 { font-size: 13px; font-weight: 700; color: var(--dark); margin-bottom: 5px; }
.sfs-feat p  { font-size: 11px; line-height: 1.6; color: #6a8070; }
.sfs-feat:nth-child(1) { animation: fadeUp .55s .25s both; }
.sfs-feat:nth-child(2) { animation: fadeUp .55s .36s both; }
.sfs-feat:nth-child(3) { animation: fadeUp .55s .47s both; }

/* ── Buttons ── */
.sfs-hero-actions {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 14px;
  animation: fadeUp .55s .56s both;
}
.sfs-btn-main {
  border: none;
  background: linear-gradient(135deg, #1fa82a 0%, #2ebd3a 50%, #0B2545 100%);
  color: white; padding: 15px 30px; border-radius: 14px;
  font-size: 14px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  cursor: pointer; display: flex; align-items: center; gap: 8px;
  box-shadow: 0 10px 28px rgba(46,189,58,0.32), 0 2px 6px rgba(46,189,58,0.18);
  transition: .32s cubic-bezier(.34,1.46,.64,1);
  position: relative; overflow: hidden;
  letter-spacing: -.01em;
}
.sfs-btn-main::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.16) 0%, transparent 55%);
  pointer-events: none;
}
.sfs-btn-main:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 16px 40px rgba(46,189,58,0.40); }
.sfs-btn-main:active { transform: translateY(0) scale(.99); }

.sfs-btn-sec {
  border: 1px solid rgba(46,189,58,0.26);
  background: var(--glass);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  padding: 14px 24px; border-radius: 14px;
  font-size: 13.5px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  display: flex; align-items: center; gap: 9px;
  cursor: pointer; color: var(--dark); transition: .26s ease;
  box-shadow: 0 1px 0 rgba(255,255,255,0.8) inset;
}
.sfs-btn-sec:hover { transform: translateY(-3px); border-color: rgba(46,189,58,0.50); box-shadow: 0 10px 24px rgba(46,189,58,0.10), 0 1px 0 rgba(255,255,255,0.8) inset; }
.sfs-play-ring {
  width: 28px; height: 28px; border-radius: 50%;
  background: linear-gradient(135deg, #2ebd3a, #1fa82a);
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; color: white;
  box-shadow: 0 3px 10px rgba(46,189,58,0.28);
  transition: .26s;
  border: 1px solid rgba(255,255,255,0.28);
}
.sfs-btn-sec:hover .sfs-play-ring { transform: scale(1.1) rotate(8deg); }

/* ── Stats ── */
.sfs-stats {
  display: flex; gap: 20px; align-items: center;
  margin-bottom: 0;
  animation: fadeUp .55s .65s both;
}
.sfs-stat { display: flex; flex-direction: column; }
.sfs-stat-num {
  font-family: 'Sora', sans-serif;
  font-size: 22px; font-weight: 800;
  background: linear-gradient(125deg, #0B2545, #2ebd3a);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  line-height: 1;
}
.sfs-stat-lbl { font-size: 11px; color: var(--mid); margin-top: 3px; font-weight: 500; }
.sfs-stat-div { width: 1px; height: 32px; background: rgba(46,189,58,0.20); }

/* ══ RIGHT ══ */
.sfs-right {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  min-height: 450px;
}

/* Floating badges */
.sfs-shield-badge {
  position: absolute; top: 32px; right: 24px;
  width: 100px; height: 100px; z-index: 10;
  animation: shieldFloat 5s ease-in-out infinite;
  filter: drop-shadow(0 12px 28px rgba(46,189,58,0.28));
}
@keyframes shieldFloat {
  0%,100% { transform: translateY(0) rotate(2deg); }
  50%      { transform: translateY(-12px) rotate(-1deg); }
}

.sfs-lock {
  position: absolute; right: 0; top: 50%;
  transform: translateY(-50%);
  width: 52px; height: 52px;
  background: var(--glass);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.10), 0 0 0 1px rgba(46,189,58,0.16);
  border: 1px solid rgba(255,255,255,0.70);
  z-index: 10;
  animation: lockFloat 5s ease-in-out infinite 1s;
}
@keyframes lockFloat {
  0%,100% { transform: translateY(-50%) scale(1); }
  50%      { transform: translateY(calc(-50% - 10px)) scale(1.05); }
}

/* Alert + Scan floating cards */
.sfs-alert-badge {
  position: absolute; left: 4px; top: 90px;
  background: var(--card-bg);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: 16px; padding: 10px 13px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.8) inset;
  border: 1px solid rgba(46,189,58,0.14);
  z-index: 10; display: flex; align-items: center; gap: 8px;
  animation: alertFloat 6s ease-in-out infinite .8s;
}
@keyframes alertFloat {
  0%,100% { transform: translateY(0) rotate(-0.5deg); }
  50%      { transform: translateY(-8px) rotate(0deg); }
}
.sfs-alert-ico {
  width: 32px; height: 32px; border-radius: 10px;
  background: linear-gradient(135deg, #e8f8eb, #d4f5d8);
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; flex-shrink: 0;
  border: 1px solid rgba(46,189,58,0.18);
}
.sfs-alert-text h5 { font-size: 11px; font-weight: 700; color: var(--dark); }
.sfs-alert-text p  { font-size: 9px; color: var(--mid); margin-top: 1.5px; }

.sfs-scan-badge {
  position: absolute; right: 12px; bottom: 110px;
  background: linear-gradient(135deg, #2ebd3a, #1c9926);
  border-radius: 14px; padding: 9px 14px;
  z-index: 10;
  box-shadow: 0 10px 26px rgba(46,189,58,0.36);
  border: 1px solid rgba(255,255,255,0.18);
  animation: scanBadgeFloat 4.5s ease-in-out infinite 1.5s;
  color: white; display: flex; align-items: center; gap: 7px;
}
@keyframes scanBadgeFloat {
  0%,100% { transform: translateY(0) rotate(.5deg); }
  50%      { transform: translateY(-7px) rotate(-.5deg); }
}
.sfs-scan-badge-ico { font-size: 16px; }
.sfs-scan-badge-text h5 { font-size: 11px; font-weight: 800; }
.sfs-scan-badge-text p  { font-size: 8.5px; opacity: .85; margin-top: 1px; }

.sfs-stage {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  width: 100%;
  min-height: 450px;
}

/* Radial rings */
.sfs-ring {
  position: absolute; border-radius: 50%;
  border: 1px solid rgba(46,189,58,0.12);
  pointer-events: none; z-index: 1;
}
.sfs-ring-1 { width: 320px; height: 320px; animation: ringPulse 4s ease-in-out infinite; }
.sfs-ring-2 { width: 460px; height: 460px; animation: ringPulse 4s ease-in-out infinite .8s; }
.sfs-ring-3 { width: 600px; height: 600px; animation: ringPulse 4s ease-in-out infinite 1.6s; }
@keyframes ringPulse {
  0%,100% { opacity: .5; transform: scale(.96); }
  50%      { opacity: .9; transform: scale(1.04); }
}
.sfs-glow {
  position: absolute;
  width: 420px; height: 420px; border-radius: 50%;
  background: radial-gradient(circle, rgba(46,189,58,0.16) 0%, rgba(46,189,58,0.06) 40%, transparent 70%);
  filter: blur(6px);
  animation: glowPulse 4.5s ease-in-out infinite;
  z-index: 1;
}
@keyframes glowPulse {
  0%,100% { transform: scale(.88); opacity: .55; }
  50%      { transform: scale(1.08); opacity: 1; }
}

/* ══ HOW-IT-WORKS STYLE iPHONE MOCKUP ══ */
.sfs-hiw-phone-wrap {
  position: absolute;
  width: 280px;
  flex-shrink: 0;
  z-index: 5;
  animation: phoneRock 9s ease-in-out infinite;
  scale: 0.78;
}
@keyframes phoneRock {
  0%,100% { transform: perspective(1100px) rotateY(-8deg) rotateX(3deg) translateY(0); }
  33%      { transform: perspective(1100px) rotateY(-6deg) rotateX(2deg) translateY(-7px); }
  66%      { transform: perspective(1100px) rotateY(-9deg) rotateX(4.5deg) translateY(-4px); }
}

.sfs-hiw-frame {
  position: relative;
  width: 280px; height: 560px;
  border-radius: 46px;
  background: linear-gradient(160deg, #5a5a5a 0%, #3a3a3a 30%, #2a2a2a 60%, #1e1e1e 100%);
  box-shadow:
    0 0 0 1px #666 inset,
    2px 4px 0 0 #555 inset,
    -1px -2px 0 0 #111 inset,
    0 30px 80px rgba(0,0,0,0.55),
    0 8px 24px rgba(0,0,0,0.35),
    0 2px 6px rgba(0,0,0,0.25),
    0 0 60px rgba(46,189,58,0.10);
}
.sfs-hiw-frame::before {
  content: "";
  position: absolute; inset: 0; border-radius: 46px;
  background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 40%);
  pointer-events: none; z-index: 10;
}

/* side buttons */
.sfs-hiw-btn-vl  { position: absolute; left: -3px; top: 120px; width: 3px; height: 34px; background: linear-gradient(180deg,#555,#3a3a3a); border-radius: 2px 0 0 2px; box-shadow: -1px 0 3px rgba(0,0,0,0.4); }
.sfs-hiw-btn-vl2 { position: absolute; left: -3px; top: 165px; width: 3px; height: 34px; background: linear-gradient(180deg,#555,#3a3a3a); border-radius: 2px 0 0 2px; box-shadow: -1px 0 3px rgba(0,0,0,0.4); }
.sfs-hiw-btn-mute{ position: absolute; left: -3px; top: 88px;  width: 3px; height: 22px; background: linear-gradient(180deg,#555,#3a3a3a); border-radius: 2px 0 0 2px; box-shadow: -1px 0 3px rgba(0,0,0,0.4); }
.sfs-hiw-btn-pwr { position: absolute; right:-3px; top: 140px; width: 3px; height: 70px; background: linear-gradient(180deg,#555,#3a3a3a); border-radius: 0 2px 2px 0; box-shadow: 1px 0 3px rgba(0,0,0,0.4); }

/* inner glass */
.sfs-hiw-inner {
  position: absolute; inset: 6px;
  border-radius: 41px; background: #0a0a0a; overflow: hidden;
}
.sfs-hiw-screen {
  position: absolute; inset: 3px;
  border-radius: 38px; background: white; overflow: hidden;
  display: flex; flex-direction: column;
}

/* top notch row */
.sfs-hiw-notch-bar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 14px 20px 0; font-size: 10px; font-weight: 700; color: #111;
  position: relative; z-index: 20; flex-shrink: 0;
}
.sfs-hiw-notch-pill {
  position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
  width: 100px; height: 30px; background: #0a0a0a; border-radius: 20px;
}
.sfs-hiw-status-icons { display: flex; gap: 4px; align-items: center; }

/* ── SCAN PHASE (QR code card on screen) ── */
.sfs-hiw-scan-screen {
  flex: 1; display: flex; flex-direction: column; overflow: hidden;
}
.sfs-hiw-scan-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 16px 6px; border-bottom: 1px solid #f0f0f0; flex-shrink: 0;
}
.sfs-hiw-scan-title { font-size: 13px; font-weight: 700; color: #111; text-align: center; }
.sfs-hiw-scan-sub   { font-size: 9px; color: #777; text-align: center; }

.sfs-hiw-qr-card {
  margin: 10px 12px 6px;
  background: #e8f8eb; border-radius: 12px;
  padding: 10px 12px; border: 1px solid #d0f0d4;
  display: flex; align-items: center; gap: 10px; flex-shrink: 0;
}
.sfs-hiw-qr-inner {
  background: white; border-radius: 8px; padding: 4px;
  border: 1px solid #ddd; flex-shrink: 0;
}
.sfs-hiw-qr-id    { font-size: 13px; font-weight: 800; color: #0B2545; letter-spacing: -0.3px; }
.sfs-hiw-qr-type  { font-size: 10px; color: #2ebd3a; margin-bottom: 4px; }
.sfs-hiw-verified {
  display: inline-flex; align-items: center; gap: 3px;
  background: #2ebd3a; border-radius: 4px; padding: 2px 6px;
  font-size: 9px; font-weight: 700; color: white;
}

/* scan beam animation */
.sfs-hiw-scan-area {
  flex: 1; position: relative; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(180deg, #f8fff8 0%, #ffffff 100%);
}
.sfs-hiw-scan-beam {
  position: absolute; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(46,189,58,0.4), rgba(46,189,58,0.9), rgba(125,237,136,0.9), rgba(46,189,58,0.9), rgba(46,189,58,0.4), transparent);
  box-shadow: 0 0 10px rgba(46,189,58,0.5);
  animation: beamScan 1.8s ease-in-out infinite;
  z-index: 5;
}
@keyframes beamScan {
  0%   { top: 10%; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { top: 90%; opacity: 0; }
}
.sfs-hiw-scan-corners {
  position: absolute; inset: 20px; z-index: 3;
}
.sfs-hiw-corner {
  position: absolute; width: 20px; height: 20px;
  border-color: #2ebd3a; border-style: solid; border-width: 0;
}
.sfs-hiw-corner-tl { top: 0; left: 0; border-top-width: 3px; border-left-width: 3px; border-radius: 4px 0 0 0; }
.sfs-hiw-corner-tr { top: 0; right: 0; border-top-width: 3px; border-right-width: 3px; border-radius: 0 4px 0 0; }
.sfs-hiw-corner-bl { bottom: 0; left: 0; border-bottom-width: 3px; border-left-width: 3px; border-radius: 0 0 0 4px; }
.sfs-hiw-corner-br { bottom: 0; right: 0; border-bottom-width: 3px; border-right-width: 3px; border-radius: 0 0 4px 0; }
.sfs-hiw-scan-hint { font-size: 9px; color: #aaa; position: absolute; bottom: 8px; left: 0; right: 0; text-align: center; }

/* ── RESULT PHASE (after scan) ── */
.sfs-hiw-result-screen {
  flex: 1; display: flex; flex-direction: column; overflow: hidden;
}
.sfs-hiw-result-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 16px 6px; border-bottom: 1px solid #f0f0f0; flex-shrink: 0;
}
/* success flash animation */
.sfs-hiw-success-flash {
  animation: successFlash 0.5s ease;
}
@keyframes successFlash {
  0%   { background: #e8f8eb; }
  50%  { background: #b8f0c0; }
  100% { background: white; }
}

/* logo + verified section */
.sfs-hiw-logo-section {
  padding: 12px 16px 8px;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  flex-shrink: 0;
}
.sfs-hiw-logo-wrap {
  width: 54px; height: 54px; border-radius: 14px;
  background: linear-gradient(135deg, #e8f8eb, #d4f5d8);
  border: 2px solid #2ebd3a;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(46,189,58,0.25);
}
.sfs-hiw-logo-wrap img { width: 44px; height: 44px; object-fit: contain; }
.sfs-hiw-result-badge {
  display: inline-flex; align-items: center; gap: 4px;
  background: #e8f8eb; border: 1px solid #2ebd3a;
  border-radius: 20px; padding: 4px 10px;
  font-size: 10px; font-weight: 700; color: #0B2545;
}
.sfs-hiw-result-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #2ebd3a; animation: livePulse 1.5s infinite; }
.sfs-hiw-asset-id {
  font-size: 11px; font-weight: 800; color: #0B2545;
  letter-spacing: 0.5px; text-align: center;
}

/* action buttons */
.sfs-hiw-actions {
  padding: 0 12px 8px;
  display: flex; flex-direction: column; gap: 7px;
  flex-shrink: 0;
}
.sfs-hiw-btn-call {
  background: linear-gradient(135deg, #0B2545, #1a3a6e);
  border-radius: 10px; padding: 11px 14px;
  display: flex; align-items: center; gap: 8px;
  cursor: pointer; border: none; width: 100%;
}
.sfs-hiw-btn-call-ico {
  width: 28px; height: 28px; border-radius: 8px;
  background: rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.sfs-hiw-btn-call-text { text-align: left; }
.sfs-hiw-btn-call-label { font-size: 12px; font-weight: 700; color: white; }
.sfs-hiw-btn-call-sub   { font-size: 9px; color: rgba(255,255,255,0.65); margin-top: 1px; }

.sfs-hiw-btn-emergency {
  background: linear-gradient(135deg, #c62828, #e53935);
  border-radius: 10px; padding: 11px 14px;
  display: flex; align-items: center; gap: 8px;
  cursor: pointer; border: none; width: 100%;
}
.sfs-hiw-btn-emg-ico {
  width: 28px; height: 28px; border-radius: 8px;
  background: rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

/* hidden data section */
.sfs-hiw-hidden-section {
  flex: 1; padding: 0 12px 8px;
  display: flex; flex-direction: column; gap: 4px; overflow: hidden;
}
.sfs-hiw-hidden-label {
  font-size: 8.5px; font-weight: 700; color: #aaa;
  letter-spacing: 0.08em; text-transform: uppercase;
  display: flex; align-items: center; gap: 4px; margin-bottom: 2px;
}
.sfs-hiw-hidden-row {
  display: flex; align-items: center; gap: 6px;
  padding: 4px 8px; background: #f8f8f8; border-radius: 7px;
}
.sfs-hiw-hidden-row-ico {
  width: 18px; height: 18px; border-radius: 5px;
  background: #f0f0f0; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.sfs-hiw-hidden-blur {
  flex: 1; height: 8px; background: #e0e0e0; border-radius: 4px;
  filter: blur(3px); opacity: 0.7;
}
.sfs-hiw-lock-ico {
  flex-shrink: 0;
}

/* protection bar */
.sfs-hiw-protection-bar {
  margin: 0 10px 8px;
  background: linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%);
  border-radius: 12px; padding: 10px 12px;
  display: flex; align-items: center; gap: 8px; flex-shrink: 0;
}
.sfs-hiw-protection-ico {
  width: 28px; height: 28px; border-radius: 50%;
  background: rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.sfs-hiw-protection-title { font-size: 11px; font-weight: 800; color: white; }
.sfs-hiw-protection-sub   { font-size: 8.5px; color: rgba(255,255,255,0.7); }

/* ── phase transitions ── */
.sfs-hiw-fade-in  { animation: hiwFadeIn  .5s cubic-bezier(.22,1,.36,1) both; }
.sfs-hiw-fade-out { animation: hiwFadeOut .3s ease forwards; }
@keyframes hiwFadeIn  { from { opacity:0; transform:scale(.95) translateY(10px); } to { opacity:1; transform:none; } }
@keyframes hiwFadeOut { from { opacity:1; } to { opacity:0; transform:scale(.95) translateY(-10px); } }

/* ══ SCAN STAGE (car/bike/luggage) ══ */
.sfs-scan-stage {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
}
.sfs-asset-img {
  width: 390px; max-width: none;
  position: relative; z-index: 3; object-fit: contain;
  filter: drop-shadow(0 28px 56px rgba(0,0,0,0.16)) drop-shadow(0 0 36px rgba(46,189,58,0.22));
  animation: assetHover 4.5s ease-in-out infinite;
}
@keyframes assetHover {
  0%,100% { transform: translateY(0) scale(1.02) rotateY(-4deg); }
  50%      { transform: translateY(-12px) scale(1.04) rotateY(-2deg); }
}
.sfs-qr-card {
  position: absolute; right: -20px; bottom: 80px;
  background: var(--card-bg);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: 20px; padding: 13px 16px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.10), 0 0 0 1px rgba(255,255,255,0.80) inset;
  border: 1px solid rgba(46,189,58,0.16);
  z-index: 10; display: flex; align-items: center; gap: 10px;
  min-width: 210px;
  transform: perspective(600px) rotateY(-8deg);
  animation: cardBob 5s ease-in-out infinite;
}
@keyframes cardBob {
  0%,100% { transform: perspective(600px) rotateY(-8deg) translateY(0); }
  50%      { transform: perspective(600px) rotateY(-11deg) translateY(-8px); }
}
.sfs-qr-icon {
  width: 48px; height: 48px; border-radius: 13px;
  background: linear-gradient(135deg, #e8f8eb, #d4f5d8);
  display: flex; align-items: center; justify-content: center;
  font-size: 23px; flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(46,189,58,0.18);
  border: 1px solid rgba(46,189,58,0.18);
}
.sfs-qr-card h4 { font-size: 12.5px; font-weight: 800; color: var(--dark); margin-bottom: 3px; }
.sfs-qr-card p  { font-size: 9.5px; color: #5a7060; line-height: 1.4; }

.sfs-status-pill {
  position: absolute; top: 48px; left: 6px;
  background: var(--card-bg);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: 14px; padding: 9px 13px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.80) inset;
  border: 1px solid rgba(46,189,58,0.14);
  z-index: 10; display: flex; align-items: center; gap: 7px;
  animation: pillFloat 6s ease-in-out infinite .5s;
}
@keyframes pillFloat {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-7px); }
}
.sfs-status-dot   { width: 7px; height: 7px; border-radius: 50%; background: var(--green); animation: livePulse 1.8s infinite; flex-shrink: 0; }
.sfs-hero-status-label { font-size: 11px; font-weight: 800; color: var(--dark); }
.sfs-status-sub   { font-size: 8.5px; color: var(--mid); margin-top: 1px; }

/* ══ TRANSITIONS ══ */
.sfs-entering  { animation: enterScene .80s cubic-bezier(.22,1,.36,1) both; }
.sfs-exiting   { animation: exitScene .32s ease forwards; }
.sfs-scan-in   { animation: scanIn .42s ease both; }
.sfs-scan-out  { animation: scanOut .28s ease forwards; }
@keyframes enterScene {
  from { opacity:0; transform: scale(.65) translateY(60px); filter:blur(8px); }
  to   { opacity:1; transform: none; filter:blur(0); }
}
@keyframes exitScene {
  from { opacity:1; transform: none; }
  to   { opacity:0; transform: scale(.88) translateY(-40px); filter:blur(5px); }
}
@keyframes scanIn  { from { opacity:0; transform:scale(.93) translateY(18px); } to { opacity:1; transform:none; } }
@keyframes scanOut { from { opacity:1; } to { opacity:0; transform:scale(.91) translateY(-18px); } }
@keyframes slideInLeft { from { opacity:0; transform: translateX(-32px); } to { opacity:1; transform: none; } }
@keyframes fadeUp      { from { opacity:0; transform: translateY(20px);  } to { opacity:1; transform: none; } }

/* ══ TICKER ══ */
.sfs-ticker {
  width:100%; position:relative; z-index:10; overflow:hidden;
  background: linear-gradient(90deg, #061A0A 0%, #2ebd3a 40%, #061A0A 70%, #2ebd3a 100%);
  border-top: 1px solid rgba(46,189,58,0.22);
  border-radius: 0 0 30px 30px;
}
.::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(91, 19, 19, 0.18) 0%,  rgba(173, 31, 31, 0.18) 100%);
  z-index: 2; pointer-events: none;
}
.sfs-ticker-inner { display:flex; position: relative; z-index: 1; }
.sfs-ticker-label {
  flex-shrink:0; display:flex; align-items:center; padding:0 20px;
  background: rgba(0,0,0,0.20); border-right: 1px solid rgba(255,255,255,0.18);
  font-size:8.5px; font-weight:900; color:white; letter-spacing:2.5px;
  text-transform:uppercase; height:44px; white-space: nowrap;
}
.sfs-ticker-track { display:flex; animation: tickMove 36s linear infinite; }
.sfs-ticker-track:hover { animation-play-state: paused; }
@keyframes tickMove { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
.sfs-ti {
  display:flex; align-items:center; height:44px;
  padding:0 20px; font-size:11.5px; font-weight:600;
  color:rgba(255,255,255,0.90); white-space:nowrap; gap:16px;
}
.sfs-td { width:3px; height:3px; border-radius:50%; background:rgba(255,255,255,0.28); flex-shrink: 0; }

/* ══ BACKGROUND DECORATIONS ══ */
.sfs-mesh {
  position: absolute; top: -60px; right: -60px;
  width: 520px; height: 520px; opacity: .35;
  animation: meshRotate 40s linear infinite;
}
@keyframes meshRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.sfs-globe-wrap {
  position: absolute; bottom: -80px; left: -70px;
  width: 300px; height: 300px;
  animation: globePulse 7s ease-in-out infinite; z-index: 1;
}
@keyframes globePulse {
  0%,100% { transform: scale(1) rotate(-5deg); opacity:.45; }
  50%      { transform: scale(1.04) rotate(-2deg); opacity:.62; }
}

/* ══ RESPONSIVE ══ */
@media(max-width:1200px){
  .sfs-hero { border-radius: 22px; margin-top: 84px; }
  .sfs-grid { grid-template-columns:1fr; padding:48px 32px 28px; gap:28px; }
  .sfs-h1 { font-size:50px; letter-spacing:-2.5px; }
  .sfs-right { min-height:450px; }
  .sfs-asset-img { width:340px; }
  .sfs-shield-badge { width:80px; height:80px; top:20px; right:10px; }
  .sfs-ring-2, .sfs-ring-3 { display:none; }
}

@media(max-width:640px){
  .sfs-hero { border-radius: 20px; border-width: 1px; margin-top: 80px; }
  .sfs-grid { display: flex !important; flex-direction: column !important; padding: 36px 18px 24px; gap: 16px !important; }
  .sfs-left { display: contents !important; }
  
  .sfs-h1 { order: 1 !important; font-size: 38px; letter-spacing: -1.8px; line-height: 1.0; margin-bottom: 0; text-align: center; }
  .sfs-h1 .outline { -webkit-text-stroke-width: 1.5px; }
  .sfs-sub { order: 2 !important; font-size: 13.5px; line-height: 1.78; margin-top: 14px; margin-bottom: 12px; text-align: center; }
  
  /* 3 Feature cards hidden in mobile Layout 1 */
  .sfs-feats { display: none !important; }
  
  /* Phone Mockup ordered 3rd (under subtitle) */
  .sfs-right { 
    order: 3 !important; 
    min-height: 480px !important; 
    overflow: visible; 
    position: relative !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }
  .sfs-stage { min-height: 480px !important; }
  
  /* Phone sizes and frames */
  .sfs-hiw-phone-wrap { width: 220px !important; }
  .sfs-hiw-frame { width: 220px !important; height: 440px !important; border-radius: 36px !important; }
  .sfs-hiw-inner { border-radius: 31px !important; }
  .sfs-hiw-screen { border-radius: 28px !important; }
  
  /* Float Badge 1: Owner Alerted Card (Centered directly above phone notch) */
  .sfs-alert-badge { 
    position: absolute !important;
    left: 50% !important; 
    top: -24px !important; 
    transform: translateX(-50%) !important; 
    padding: 8px 12px !important; 
    border-radius: 12px !important; 
    z-index: 20 !important;
    width: fit-content !important;
    white-space: nowrap !important;
    animation: alertFloat 6s ease-in-out infinite !important;
  }
  .sfs-alert-ico { width: 28px; height: 28px; font-size: 13px; border-radius: 8px; }
  
  /* Float Badge 2: Green Shield Check (Middle Left overlaying phone frame) */
  .sfs-shield-badge { 
    position: absolute !important;
    width: 62px !important; height: 62px !important; 
    left: -20px !important; 
    top: 50% !important; 
    transform: translateY(-50%) !important; 
    right: auto !important;
    z-index: 20 !important;
    animation: shieldFloat 5s ease-in-out infinite !important;
  }
  
  /* Float Badge 3: Yellow Lock (Middle Right overlaying phone frame) */
  .sfs-lock { 
    position: absolute !important;
    width: 44px !important; height: 44px !important; 
    font-size: 18px !important; 
    right: -20px !important; 
    top: 40% !important;
    transform: translateY(-50%) !important;
    left: auto !important;
    z-index: 20 !important;
    display: flex !important; 
    align-items: center !important;
    justify-content: center !important;
  }
  
  /* Float Badge 4: 15,234 Scans Card (Bottom Right overlaying phone frame) */
  .sfs-scan-badge { 
    position: absolute !important;
    right: -32px !important; 
    bottom: 104px !important; 
    padding: 8px 12px !important; 
    border-radius: 11px !important; 
    z-index: 20 !important;
    animation: scanBadgeFloat 4.5s ease-in-out infinite !important;
  }
  
  /* CTA Buttons ordered 4th (at the very bottom) */
  .sfs-hero-actions { 
    order: 4 !important; 
    display: flex !important;
    flex-direction: column !important; 
    gap: 12px !important; 
    margin-bottom: 24px !important; 
    align-items: stretch !important; 
    width: 100% !important;
  }
  .sfs-btn-main { padding: 15px 20px; font-size: 14px; border-radius: 13px; justify-content: center; }
  .sfs-btn-sec  { padding: 14px 20px; font-size: 13.5px; border-radius: 13px; justify-content: center; color: #2ebd3a !important; border-color: rgba(46,189,58,0.4) !important; background: white !important; }
  
  .sfs-stats { gap: 12px; flex-wrap: wrap; }
  .sfs-stat-num { font-size: 18px; }
  .sfs-stat-lbl { font-size: 10px; }
  .sfs-stat-div { height: 28px; }
  
  .sfs-ring-1 { width: 260px; height: 260px; }
  .sfs-ring-2, .sfs-ring-3 { display: none; }
  .sfs-asset-img { width: 260px; }
  .sfs-qr-card { right: -6px; bottom: 68px; min-width: 185px; padding: 10px 13px; border-radius: 17px; transform: none; }
  .sfs-qr-icon { width: 44px; height: 44px; font-size: 22px; border-radius: 11px; }
  .sfs-status-pill { top: 52px; left: 4px; padding: 8px 12px; border-radius: 12px; }
  .sfs-ticker { border-radius: 0 0 18px 18px; }
  .sfs-ticker-label { padding: 0 12px; font-size: 8px; letter-spacing: 1.5px; height: 42px; }
  .sfs-ti { font-size: 11px; padding: 0 14px; height: 42px; }
  .sfs-globe-wrap { width: 200px; height: 200px; bottom: -60px; left: -50px; }
  .sfs-mesh { width: 300px; height: 300px; top: -30px; right: -30px; }
  .sfs-left { padding-right: 0; }
}

@media(max-width:380px){
  .sfs-h1 { font-size: 31px; letter-spacing: -1.2px; }
  .sfs-grid { padding: 22px 14px 16px; }
  .sfs-hiw-phone-wrap { width: 200px; }
  .sfs-hiw-frame { width: 230px; height: 460px; border-radius: 38px; }
  .sfs-hiw-inner { border-radius: 33px; }
  .sfs-hiw-screen { border-radius: 30px; }
  .sfs-asset-img { width: 250px; }
  .sfs-right { min-height: 460px; }
  .sfs-shield-badge { width: 60px; height: 60px; top: 10px; right: 6px; }
  .sfs-lock { display: none; }
}
`;function Zl(){return n.jsxs("svg",{width:"56",height:"56",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("rect",{x:"0",y:"0",width:"7",height:"7",rx:"1",fill:"#0B2545"}),n.jsx("rect",{x:"1",y:"1",width:"5",height:"5",rx:"0.5",fill:"white"}),n.jsx("rect",{x:"2",y:"2",width:"3",height:"3",fill:"#0B2545"}),n.jsx("rect",{x:"14",y:"0",width:"7",height:"7",rx:"1",fill:"#0B2545"}),n.jsx("rect",{x:"15",y:"1",width:"5",height:"5",rx:"0.5",fill:"white"}),n.jsx("rect",{x:"16",y:"2",width:"3",height:"3",fill:"#0B2545"}),n.jsx("rect",{x:"0",y:"14",width:"7",height:"7",rx:"1",fill:"#0B2545"}),n.jsx("rect",{x:"1",y:"15",width:"5",height:"5",rx:"0.5",fill:"white"}),n.jsx("rect",{x:"2",y:"16",width:"3",height:"3",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"0",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"10",y:"0",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"12",y:"0",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"2",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"11",y:"2",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"9",y:"4",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"11",y:"4",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"6",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"10",y:"6",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"0",y:"8",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"3",y:"8",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"5",y:"8",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"8",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"10",y:"8",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"13",y:"8",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"15",y:"8",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"18",y:"8",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"0",y:"10",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"2",y:"10",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"5",y:"10",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"9",y:"10",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"11",y:"10",width:"3",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"15",y:"10",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"17",y:"10",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"0",y:"12",width:"3",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"4",y:"12",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"12",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"11",y:"12",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"13",y:"12",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"16",y:"12",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"18",y:"12",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"14",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"10",y:"14",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"13",y:"14",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"15",y:"14",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"17",y:"14",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"16",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"11",y:"16",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"14",y:"16",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"16",y:"16",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"18",y:"16",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"18",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"10",y:"18",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"14",y:"18",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"19",y:"18",width:"1",height:"2",fill:"#0B2545"})]})}function Jl({asset:e,animClass:t}){const[r,i]=v.useState("scan");return v.useEffect(()=>{i("scan");const s=setTimeout(()=>i("result"),2200);return()=>clearTimeout(s)},[e]),n.jsx("div",{className:`sfs-hiw-phone-wrap ${t}`,children:n.jsxs("div",{className:"sfs-hiw-frame",children:[n.jsx("div",{className:"sfs-hiw-btn-mute"}),n.jsx("div",{className:"sfs-hiw-btn-vl"}),n.jsx("div",{className:"sfs-hiw-btn-vl2"}),n.jsx("div",{className:"sfs-hiw-btn-pwr"}),n.jsx("div",{className:"sfs-hiw-inner",children:n.jsxs("div",{className:"sfs-hiw-screen",children:[n.jsxs("div",{className:"sfs-hiw-notch-bar",children:[n.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#111",position:"relative",zIndex:21},children:"9:41"}),n.jsx("div",{className:"sfs-hiw-notch-pill"}),n.jsxs("div",{className:"sfs-hiw-status-icons",style:{position:"relative",zIndex:21},children:[n.jsxs("svg",{width:"14",height:"10",viewBox:"0 0 14 10",children:[n.jsx("rect",{x:"0",y:"6",width:"2.5",height:"4",rx:"0.5",fill:"#111"}),n.jsx("rect",{x:"3.5",y:"4",width:"2.5",height:"6",rx:"0.5",fill:"#111"}),n.jsx("rect",{x:"7",y:"2",width:"2.5",height:"8",rx:"0.5",fill:"#111"}),n.jsx("rect",{x:"10.5",y:"0",width:"2.5",height:"10",rx:"0.5",fill:"#111"})]}),n.jsxs("svg",{width:"12",height:"10",viewBox:"0 0 13 10",children:[n.jsx("path",{d:"M6.5 7.5 L6.5 9.5",stroke:"#111",strokeWidth:"1.5",strokeLinecap:"round"}),n.jsx("path",{d:"M4 5.5 Q6.5 3.5 9 5.5",stroke:"#111",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"}),n.jsx("path",{d:"M1.5 3 Q6.5 -0.5 11.5 3",stroke:"#111",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"})]}),n.jsxs("svg",{width:"22",height:"11",viewBox:"0 0 22 11",children:[n.jsx("rect",{x:"0",y:"1",width:"19",height:"9",rx:"2",stroke:"#111",strokeWidth:"1",fill:"none"}),n.jsx("rect",{x:"19.5",y:"3.5",width:"2",height:"4",rx:"1",fill:"#111"}),n.jsx("rect",{x:"1.5",y:"2.5",width:"15",height:"6",rx:"1",fill:"#111"})]})]})]}),n.jsxs("div",{className:"sfs-hiw-scan-header",children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#333",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polyline",{points:"15 18 9 12 15 6"})}),n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{className:"sfs-hiw-scan-title",children:r==="scan"?"Scan QR Code":"Asset Found"}),n.jsx("div",{className:"sfs-hiw-scan-sub",children:r==="scan"?"Align QR within frame":"ScanForSafe Verified"})]}),n.jsx("div",{style:{width:18}})]}),r==="scan"&&n.jsxs("div",{className:"sfs-hiw-scan-screen sfs-hiw-fade-in",children:[n.jsxs("div",{className:"sfs-hiw-qr-card",children:[n.jsx("div",{className:"sfs-hiw-qr-inner",children:n.jsx(Zl,{})}),n.jsxs("div",{children:[n.jsx("div",{className:"sfs-hiw-qr-id",children:e.asset}),n.jsx("div",{className:"sfs-hiw-qr-type",children:e.label}),n.jsxs("div",{className:"sfs-hiw-verified",children:[n.jsx("svg",{width:"8",height:"8",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Verified"]})]})]}),n.jsxs("div",{className:"sfs-hiw-scan-area",children:[n.jsx("div",{className:"sfs-hiw-scan-beam"}),n.jsxs("div",{className:"sfs-hiw-scan-corners",children:[n.jsx("div",{className:"sfs-hiw-corner sfs-hiw-corner-tl"}),n.jsx("div",{className:"sfs-hiw-corner sfs-hiw-corner-tr"}),n.jsx("div",{className:"sfs-hiw-corner sfs-hiw-corner-bl"}),n.jsx("div",{className:"sfs-hiw-corner sfs-hiw-corner-br"})]}),n.jsx("div",{style:{opacity:.25},children:n.jsx(Zl,{})}),n.jsx("div",{className:"sfs-hiw-scan-hint",children:"Hold steady · Auto-detecting"})]})]}),r==="result"&&n.jsxs("div",{className:"sfs-hiw-result-screen sfs-hiw-fade-in sfs-hiw-success-flash",children:[n.jsxs("div",{className:"sfs-hiw-logo-section",children:[n.jsx("div",{className:"sfs-hiw-logo-wrap",children:n.jsx("img",{src:"/logo.png",alt:"ScanForSafe"})}),n.jsxs("div",{className:"sfs-hiw-result-badge",children:[n.jsx("div",{className:"sfs-hiw-result-badge-dot"}),"Owner Notified via WhatsApp"]}),n.jsx("div",{className:"sfs-hiw-asset-id",children:e.asset})]}),n.jsxs("div",{className:"sfs-hiw-actions",children:[n.jsxs("button",{className:"sfs-hiw-btn-call",children:[n.jsx("div",{className:"sfs-hiw-btn-call-ico",children:n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.42 2 2 0 0 1 3.56 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.74 16.92z"})})}),n.jsxs("div",{className:"sfs-hiw-btn-call-text",children:[n.jsx("div",{className:"sfs-hiw-btn-call-label",children:"Call Vehicle Owner"}),n.jsx("div",{className:"sfs-hiw-btn-call-sub",children:"Number hidden · Secure relay"})]})]}),n.jsxs("button",{className:"sfs-hiw-btn-emergency",children:[n.jsx("div",{className:"sfs-hiw-btn-emg-ico",children:n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}),n.jsxs("div",{className:"sfs-hiw-btn-call-text",children:[n.jsx("div",{className:"sfs-hiw-btn-call-label",children:"Report Emergency"}),n.jsx("div",{className:"sfs-hiw-btn-call-sub",children:"Alert nearest authorities"})]})]})]}),n.jsxs("div",{className:"sfs-hiw-hidden-section",children:[n.jsxs("div",{className:"sfs-hiw-hidden-label",children:[n.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"#aaa",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),n.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),"Owner details protected"]}),[{ico:"📱"},{ico:"📧"},{ico:"📍"},{ico:"🚨"}].map((s,a)=>n.jsxs("div",{className:"sfs-hiw-hidden-row",children:[n.jsx("div",{className:"sfs-hiw-hidden-row-ico",style:{fontSize:10},children:s.ico}),n.jsx("div",{className:"sfs-hiw-hidden-blur",style:{width:`${55+a*13%30}%`}}),n.jsxs("svg",{className:"sfs-hiw-lock-ico",width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"#ccc",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),n.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})]},a))]}),n.jsxs("div",{className:"sfs-hiw-protection-bar",children:[n.jsx("div",{className:"sfs-hiw-protection-ico",children:n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),n.jsx("polyline",{points:"9 12 11 14 15 10"})]})}),n.jsxs("div",{children:[n.jsx("div",{className:"sfs-hiw-protection-title",children:"Protection Active"}),n.jsx("div",{className:"sfs-hiw-protection-sub",children:"We've got it covered 24/7"})]})]})]})]})})]})})}const b1=Array.from({length:16},(e,t)=>({id:t,x:`${(t*37+11)%100}%`,y:`${(t*53+7)%100}%`,size:`${t%3+2}px`,delay:`${t*.7%6}s`,duration:`${8+t%5}s`,opacity:.09+t%4*.07}));function v1(){return n.jsxs(n.Fragment,{children:[b1.map(e=>n.jsx("div",{className:"sfs-particle",style:{left:e.x,top:e.y,width:e.size,height:e.size,opacity:e.opacity,animation:`particleDrift ${e.duration} ease-in-out infinite ${e.delay}`}},e.id)),n.jsx("style",{children:"@keyframes particleDrift{0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(8px,-11px) scale(1.3);}66%{transform:translate(-6px,7px) scale(0.7);}}"})]})}function w1(){const e=[];for(let t=0;t<=12;t++)e.push(n.jsx("line",{x1:"0",y1:t*50,x2:"600",y2:t*50,stroke:"rgba(46,189,58,.08)",strokeWidth:".8"},`h${t}`),n.jsx("line",{x1:t*50,y1:"0",x2:t*50,y2:"600",stroke:"rgba(46,189,58,.08)",strokeWidth:".8"},`v${t}`));return e.push(n.jsx("line",{x1:"0",y1:"0",x2:"600",y2:"600",stroke:"rgba(46,189,58,.05)",strokeWidth:"1"},"d1"),n.jsx("line",{x1:"600",y1:"0",x2:"0",y2:"600",stroke:"rgba(46,189,58,.05)",strokeWidth:"1"},"d2")),n.jsx("svg",{className:"sfs-mesh",viewBox:"0 0 600 600",xmlns:"http://www.w3.org/2000/svg",children:e})}function j1(){return n.jsx("div",{className:"sfs-globe-wrap",children:n.jsxs("svg",{viewBox:"0 0 300 300",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("defs",{children:n.jsxs("radialGradient",{id:"gGrad3",cx:"38%",cy:"32%",children:[n.jsx("stop",{offset:"0%",stopColor:"rgba(125,237,136,.28)"}),n.jsx("stop",{offset:"55%",stopColor:"rgba(46,189,58,.10)"}),n.jsx("stop",{offset:"100%",stopColor:"rgba(46,189,58,.02)"})]})}),n.jsx("circle",{cx:"150",cy:"150",r:"136",fill:"url(#gGrad3)",stroke:"rgba(46,189,58,.14)",strokeWidth:"1"}),[-90,-54,-18,18,54,90].map((e,t)=>{const r=150+e,i=Math.sqrt(Math.max(0,136*136-e*e));return n.jsx("ellipse",{cx:"150",cy:r,rx:i,ry:i*.26,fill:"none",stroke:"rgba(46,189,58,.10)",strokeWidth:".7"},t)}),[0,30,60,90,120,150].map((e,t)=>n.jsx("ellipse",{cx:"150",cy:"150",rx:"40",ry:"136",fill:"none",stroke:"rgba(46,189,58,.08)",strokeWidth:".7",transform:`rotate(${e} 150 150)`},t)),n.jsx("ellipse",{cx:"150",cy:"150",rx:"172",ry:"44",fill:"none",stroke:"rgba(46,189,58,.18)",strokeWidth:"1.2",strokeDasharray:"7 6",style:{animation:"orbitSpin3 14s linear infinite",transformOrigin:"150px 150px"}}),n.jsx("circle",{cx:"322",cy:"150",r:"7",fill:"rgba(46,189,58,.50)",style:{animation:"orbitSpin3 14s linear infinite",transformOrigin:"150px 150px"}}),n.jsx("style",{children:"@keyframes orbitSpin3{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"})]})})}function k1(){return n.jsxs("svg",{className:"sfs-shield-badge",viewBox:"0 0 110 110",xmlns:"http://www.w3.org/2000/svg",children:[n.jsxs("defs",{children:[n.jsxs("radialGradient",{id:"shGrad3",cx:"40%",cy:"30%",children:[n.jsx("stop",{offset:"0%",stopColor:"rgba(125,237,136,.99)"}),n.jsx("stop",{offset:"60%",stopColor:"rgba(46,189,58,.85)"}),n.jsx("stop",{offset:"100%",stopColor:"rgba(30,150,36,.75)"})]}),n.jsx("filter",{id:"shBlur2",children:n.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2"})})]}),n.jsx("path",{d:"M55 12 L87 25 L87 52 C87 70 72 84 55 92 C38 84 23 70 23 52 L23 25 Z",fill:"rgba(46,189,58,0.22)",filter:"url(#shBlur2)"}),n.jsx("path",{d:"M55 10 L88 24 L88 52 C88 70 73 84 55 92 C37 84 22 70 22 52 L22 24 Z",fill:"url(#shGrad3)",stroke:"rgba(255,255,255,.38)",strokeWidth:"1.5"}),n.jsx("path",{d:"M55 16 L82 28 L82 52 C82 67 69 79 55 86 C41 79 28 67 28 52 L28 28 Z",fill:"none",stroke:"rgba(255,255,255,.18)",strokeWidth:"1"}),n.jsx("polyline",{points:"38,55 50,67 72,43",fill:"none",stroke:"white",strokeWidth:"5.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function ed({asset:e,animClass:t}){return n.jsxs("div",{className:`sfs-scan-stage ${t}`,children:[n.jsx("div",{className:"sfs-glow"}),n.jsx("div",{className:"sfs-ring sfs-ring-1"}),n.jsx("div",{className:"sfs-ring sfs-ring-2"}),n.jsx("div",{className:"sfs-ring sfs-ring-3"}),n.jsx("img",{src:e.img,alt:e.label,className:"sfs-asset-img"}),n.jsxs("div",{className:"sfs-qr-card",children:[n.jsx("div",{className:"sfs-qr-icon",children:"🔐"}),n.jsxs("div",{children:[n.jsx("h4",{children:e.label}),n.jsxs("p",{children:["QR & NFC Protected",n.jsx("br",{}),"Secure Identification"]})]})]}),n.jsxs("div",{className:"sfs-status-pill",children:[n.jsx("div",{className:"sfs-status-dot"}),n.jsxs("div",{children:[n.jsx("div",{className:"sfs-hero-status-label",children:"Scanning…"}),n.jsx("div",{className:"sfs-status-sub",children:"SFS Shield Active"})]})]})]})}function S1(){return n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z",fill:"#0B2545",stroke:"#0B2545",strokeWidth:"0.5"}),n.jsx("path",{d:"M9 12l2 2 4-4",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function C1(){return n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"#0d7a8a"}),n.jsx("path",{d:"M6.34 6.34a8 8 0 0 0 0 11.32",stroke:"#0d7a8a",strokeWidth:"2",strokeLinecap:"round"}),n.jsx("path",{d:"M17.66 6.34a8 8 0 0 1 0 11.32",stroke:"#0d7a8a",strokeWidth:"2",strokeLinecap:"round"}),n.jsx("path",{d:"M9.17 9.17a4 4 0 0 0 0 5.66",stroke:"#0d7a8a",strokeWidth:"2",strokeLinecap:"round"}),n.jsx("path",{d:"M14.83 9.17a4 4 0 0 1 0 5.66",stroke:"#0d7a8a",strokeWidth:"2",strokeLinecap:"round"})]})}function N1(){return n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",fill:"#c0392b",stroke:"#c0392b",strokeWidth:"0.5"}),n.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),n.jsx("circle",{cx:"12",cy:"16.5",r:"0.8",fill:"white"})]})}function z1(){const e=Sr(),[t,r]=v.useState(0),[i,s]=v.useState("scan");v.useEffect(()=>{const d=setTimeout(()=>s("phone"),2400),c=setInterval(()=>{s("phone-out"),setTimeout(()=>{r(x=>(x+1)%Kl.length),s("scan")},360),setTimeout(()=>s("phone"),2800)},9e3);return()=>{clearTimeout(d),clearInterval(c)}},[]);const a=[...Xl,...Xl],o=Kl[t],l=[{ico:n.jsx(S1,{}),bg:"linear-gradient(135deg, #e8eef8, #d0dcf0)",border:"rgba(11,37,69,0.18)",h:"Secure QR & NFC",p:"Military-grade encrypted ID protection system"},{ico:n.jsx(C1,{}),bg:"linear-gradient(135deg, #e0f5f7, #c0eaed)",border:"rgba(13,122,138,0.18)",h:"Live Tracking",p:"Real-time alerts & continuous monitoring"},{ico:n.jsx(N1,{}),bg:"linear-gradient(135deg, #fdecea, #f9d0cc)",border:"rgba(192,57,43,0.18)",h:"Emergency Access",p:"Instant verified owner identification"}];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:y1}),n.jsxs("div",{className:"sfs-hero",children:[n.jsxs("div",{className:"sfs-bg",children:[n.jsx(w1,{}),n.jsx(j1,{}),n.jsx(v1,{})]}),n.jsxs("div",{className:"sfs-grid",children:[n.jsxs("div",{className:"sfs-left",children:[n.jsxs("h1",{className:"sfs-h1",children:["Smart Protection",n.jsx("br",{}),"That ",n.jsx("span",{className:"green",children:"Connects"}),n.jsx("br",{}),n.jsx("span",{className:"green",children:"Your World"})]}),n.jsx("p",{className:"sfs-sub",children:"Protect vehicles, bikes, luggage and valuables with next-generation QR + NFC verification. Instant owner alerts and live smart protection — all with a single scan."}),n.jsx("div",{className:"sfs-feats",children:l.map((d,c)=>n.jsxs("div",{className:"sfs-feat",children:[n.jsx("div",{className:"sfs-feat-ico",style:{background:d.bg,borderColor:d.border},children:d.ico}),n.jsxs("div",{children:[n.jsx("h4",{children:d.h}),n.jsx("p",{children:d.p})]})]},c))}),n.jsxs("div",{className:"sfs-hero-actions",children:[n.jsx("button",{className:"sfs-btn-main",onClick:()=>e("/preregister"),children:"Pre-Registration"}),n.jsxs("button",{className:"sfs-btn-sec",children:[n.jsx("div",{className:"sfs-play-ring",children:"▶"}),"See How It Works"]})]})]}),n.jsxs("div",{className:"sfs-right",children:[n.jsx(k1,{}),n.jsx("div",{className:"sfs-lock",children:"🔒"}),n.jsxs("div",{className:"sfs-alert-badge",children:[n.jsx("div",{className:"sfs-alert-ico",children:"🔔"}),n.jsxs("div",{className:"sfs-alert-text",children:[n.jsx("h5",{children:"Owner Alerted!"}),n.jsx("p",{children:"Scan detected · 2s ago"})]})]}),n.jsxs("div",{className:"sfs-scan-badge",children:[n.jsx("div",{className:"sfs-scan-badge-ico",children:"📲"}),n.jsxs("div",{className:"sfs-scan-badge-text",children:[n.jsx("h5",{children:"15,234 Scans"}),n.jsx("p",{children:"Today worldwide"})]})]}),n.jsxs("div",{className:"sfs-stage",children:[i==="scan"&&n.jsx(ed,{asset:o,animClass:"sfs-scan-in"}),i==="scan-out"&&n.jsx(ed,{asset:o,animClass:"sfs-scan-out"}),i==="phone"&&n.jsx(Jl,{asset:o,animClass:"sfs-entering"}),i==="phone-out"&&n.jsx(Jl,{asset:o,animClass:"sfs-exiting"})]})]})]}),n.jsx("div",{className:"sfs-ticker",children:n.jsxs("div",{className:"sfs-ticker-inner",children:[n.jsx("div",{className:"sfs-ticker-label",children:"Live Updates"}),n.jsx("div",{className:"sfs-ticker-track",children:a.map((d,c)=>n.jsxs("div",{className:"sfs-ti",children:[d,c<a.length-1&&n.jsx("div",{className:"sfs-td"})]},c))})]})})]})]})}const td=[{title:"24/7",text:"Active Monitoring",icon:n.jsx(ka,{size:20})},{title:"50K+",text:"Daily QR Scans",icon:n.jsx(Lh,{size:20})},{title:"ISO 27001",text:"Security Certified",icon:n.jsx(Kh,{size:20})},{title:"99.9%",text:"System Uptime",icon:n.jsx(Uh,{size:20})}];function E1(){return n.jsxs("section",{className:"relative overflow-hidden py-20 bg-gradient-to-b from-[#f8fafc] via-[#f0fbf2] to-white",children:[n.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#2ebd3a]/10 blur-[140px]"}),n.jsx("div",{className:"absolute inset-0 opacity-[0.03]",children:n.jsx("div",{className:"w-full h-full",style:{backgroundImage:"radial-gradient(#2ebd3a 1px, transparent 1px)",backgroundSize:"28px 28px"}})}),n.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsx("div",{className:"flex justify-center mb-14",children:n.jsxs("div",{className:"inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[#e8f8eb] shadow-[0_10px_40px_rgba(46,189,58,0.08)]",children:[n.jsxs("div",{className:"relative flex items-center justify-center",children:[n.jsx("div",{className:"w-3 h-3 rounded-full bg-[#2ebd3a] animate-pulse"}),n.jsx("div",{className:"absolute w-3 h-3 rounded-full bg-[#2ebd3a] animate-ping opacity-30"})]}),n.jsx("span",{className:"text-xs sm:text-sm font-black tracking-[0.25em] uppercase text-slate-700",children:"Live Protection Metrics"})]})}),n.jsxs("div",{className:"mt-14 relative overflow-hidden rounded-[36px] border border-[#e8f8eb] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]",children:[n.jsx("div",{className:"absolute inset-[1px] rounded-[35px] border border-white/80 pointer-events-none"}),n.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-[#2ebd3a]/10 blur-[80px]"}),n.jsx("div",{className:"absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2ebd3a] to-transparent"}),n.jsx("div",{className:"relative grid grid-cols-2 md:grid-cols-4",children:td.map((e,t)=>n.jsxs("div",{className:`group relative px-8 py-10 text-center transition-all duration-300 hover:bg-[#e8f8eb]/40 cursor-pointer ${t!==td.length-1?"border-b md:border-b-0 md:border-r border-[#e8f8eb]":""}`,children:[n.jsx("div",{className:"mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2ebd3a] to-[#1b7a21] text-white flex items-center justify-center shadow-lg shadow-[#2ebd3a]/20 group-hover:scale-110 transition duration-500",children:e.icon}),n.jsx("h4",{className:"text-4xl font-black tracking-tight text-[#0B2545]",children:e.title}),n.jsx("p",{className:"mt-2 text-sm sm:text-base text-slate-500 font-medium",children:e.text}),n.jsx("div",{className:"mx-auto mt-5 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#2ebd3a] to-[#4bd557] group-hover:w-20 transition-all duration-500"})]},e.title))})]})]})]})}function R1(){return n.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("rect",{x:"0",y:"0",width:"7",height:"7",rx:"1",fill:"#0B2545"}),n.jsx("rect",{x:"1",y:"1",width:"5",height:"5",rx:"0.5",fill:"white"}),n.jsx("rect",{x:"2",y:"2",width:"3",height:"3",fill:"#0B2545"}),n.jsx("rect",{x:"14",y:"0",width:"7",height:"7",rx:"1",fill:"#0B2545"}),n.jsx("rect",{x:"15",y:"1",width:"5",height:"5",rx:"0.5",fill:"white"}),n.jsx("rect",{x:"16",y:"2",width:"3",height:"3",fill:"#0B2545"}),n.jsx("rect",{x:"0",y:"14",width:"7",height:"7",rx:"1",fill:"#0B2545"}),n.jsx("rect",{x:"1",y:"15",width:"5",height:"5",rx:"0.5",fill:"white"}),n.jsx("rect",{x:"2",y:"16",width:"3",height:"3",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"0",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"10",y:"0",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"12",y:"0",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"2",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"11",y:"2",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"9",y:"4",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"11",y:"4",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"6",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"10",y:"6",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"0",y:"8",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"3",y:"8",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"5",y:"8",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"8",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"10",y:"8",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"13",y:"8",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"15",y:"8",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"18",y:"8",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"0",y:"10",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"2",y:"10",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"5",y:"10",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"9",y:"10",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"11",y:"10",width:"3",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"15",y:"10",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"17",y:"10",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"0",y:"12",width:"3",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"4",y:"12",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"12",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"11",y:"12",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"13",y:"12",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"16",y:"12",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"18",y:"12",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"14",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"10",y:"14",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"13",y:"14",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"15",y:"14",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"17",y:"14",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"16",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"11",y:"16",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"14",y:"16",width:"1",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"16",y:"16",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"18",y:"16",width:"2",height:"1",fill:"#0B2545"}),n.jsx("rect",{x:"8",y:"18",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"10",y:"18",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"14",y:"18",width:"1",height:"2",fill:"#0B2545"}),n.jsx("rect",{x:"19",y:"18",width:"1",height:"2",fill:"#0B2545"})]})}function I1(){return n.jsxs("div",{style:{position:"relative",width:280,height:560,flexShrink:0},children:[n.jsx("div",{style:{position:"absolute",right:-50,top:"28%",background:"#2ebd3a",borderRadius:"50%",width:44,height:44,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(37,211,102,0.4)",zIndex:10},children:n.jsx(zo,{size:22,color:"white",fill:"white"})}),n.jsx("div",{style:{position:"absolute",right:-44,top:"52%",background:"white",borderRadius:"50%",width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(0,0,0,0.15)",zIndex:10},children:n.jsx(he,{size:18,color:"#0B2545"})}),n.jsxs("div",{style:{position:"absolute",inset:0,borderRadius:46,background:"linear-gradient(160deg, #5a5a5a 0%, #3a3a3a 30%, #2a2a2a 60%, #1e1e1e 100%)",boxShadow:`
          0 0 0 1px #666 inset,
          2px 4px 0 0 #555 inset,
          -1px -2px 0 0 #111 inset,
          0 30px 80px rgba(0,0,0,0.55),
          0 8px 24px rgba(0,0,0,0.35),
          0 2px 6px rgba(0,0,0,0.25)
        `},children:[n.jsx("div",{style:{position:"absolute",inset:0,borderRadius:46,background:"linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 40%)",pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",left:-3,top:120,width:3,height:34,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),n.jsx("div",{style:{position:"absolute",left:-3,top:165,width:3,height:34,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),n.jsx("div",{style:{position:"absolute",left:-3,top:88,width:3,height:22,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),n.jsx("div",{style:{position:"absolute",right:-3,top:140,width:3,height:70,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"0 2px 2px 0",boxShadow:"1px 0 3px rgba(0,0,0,0.4)"}}),n.jsx("div",{style:{position:"absolute",inset:6,borderRadius:41,background:"#0a0a0a",overflow:"hidden"},children:n.jsxs("div",{style:{position:"absolute",inset:3,borderRadius:38,background:"white",overflow:"hidden",display:"flex",flexDirection:"column"},children:[n.jsx("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",width:100,height:30,background:"#0a0a0a",borderRadius:20,zIndex:20}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 20px 0",fontSize:10,fontWeight:700,color:"#111"},children:[n.jsx("span",{children:"9:41"}),n.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[n.jsxs("svg",{width:"14",height:"10",viewBox:"0 0 14 10",children:[n.jsx("rect",{x:"0",y:"6",width:"2.5",height:"4",rx:"0.5",fill:"#111"}),n.jsx("rect",{x:"3.5",y:"4",width:"2.5",height:"6",rx:"0.5",fill:"#111"}),n.jsx("rect",{x:"7",y:"2",width:"2.5",height:"8",rx:"0.5",fill:"#111"}),n.jsx("rect",{x:"10.5",y:"0",width:"2.5",height:"10",rx:"0.5",fill:"#111"})]}),n.jsxs("svg",{width:"13",height:"10",viewBox:"0 0 13 10",children:[n.jsx("path",{d:"M6.5 7.5 L6.5 9.5",stroke:"#111",strokeWidth:"1.5",strokeLinecap:"round"}),n.jsx("path",{d:"M4 5.5 Q6.5 3.5 9 5.5",stroke:"#111",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"}),n.jsx("path",{d:"M1.5 3 Q6.5 -0.5 11.5 3",stroke:"#111",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"})]}),n.jsxs("svg",{width:"22",height:"11",viewBox:"0 0 22 11",children:[n.jsx("rect",{x:"0",y:"1",width:"19",height:"9",rx:"2",stroke:"#111",strokeWidth:"1",fill:"none"}),n.jsx("rect",{x:"19.5",y:"3.5",width:"2",height:"4",rx:"1",fill:"#111"}),n.jsx("rect",{x:"1.5",y:"2.5",width:"15",height:"6",rx:"1",fill:"#111"})]})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px 6px",borderBottom:"1px solid #f0f0f0"},children:[n.jsx(Th,{size:18,color:"#333",strokeWidth:2.5}),n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#111"},children:"Found Item"}),n.jsxs("div",{style:{fontSize:9,color:"#777",display:"flex",alignItems:"center",gap:3},children:[n.jsx(Yi,{size:9,color:"#777"}),"Scan QR Code"]})]}),n.jsx("div",{style:{width:18}})]}),n.jsxs("div",{style:{margin:"10px 12px 6px",background:"#e8f8eb",borderRadius:12,padding:"10px 12px",border:"1px solid #e8f8eb",display:"flex",alignItems:"center",gap:10},children:[n.jsx("div",{style:{background:"white",borderRadius:8,padding:4,border:"1px solid #ddd",flexShrink:0},children:n.jsx(R1,{})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:13,fontWeight:800,color:"#0B2545",letterSpacing:"-0.3px"},children:"PET-7G4K-2L8M"}),n.jsx("div",{style:{fontSize:10,color:"#2ebd3a",marginBottom:4},children:"Pet ID Tag"}),n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:3,background:"#2ebd3a",borderRadius:4,padding:"2px 6px",fontSize:9,fontWeight:700,color:"white"},children:[n.jsx(zi,{size:8,color:"white",fill:"white"}),"Verified"]})]})]}),n.jsxs("div",{style:{padding:"0 12px",flex:1,display:"flex",flexDirection:"column",gap:0},children:[n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0",borderBottom:"1px solid #f5f5f5"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[n.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#e8f8eb",border:"1.5px solid #2ebd3a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx($e,{size:12,color:"#0B2545"})}),n.jsx("div",{style:{width:1.5,height:28,background:"#e0e0e0"}})]}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"OTP Verification"}),n.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"Enter OTP sent to"}),n.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"+91 98765 43210"})]}),n.jsx("div",{style:{background:"#f3f4f6",borderRadius:6,padding:"4px 8px",fontSize:13,fontWeight:800,color:"#0B2545",letterSpacing:1},children:"5321"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0",borderBottom:"1px solid #f5f5f5"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[n.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#e8f8eb",border:"1.5px solid #2ebd3a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx(he,{size:12,color:"#0B2545"})}),n.jsx("div",{style:{width:1.5,height:28,background:"#e0e0e0"}})]}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"Owner Notified"}),n.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"WhatsApp alert sent"}),n.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"instantly"})]}),n.jsx(zi,{size:16,color:"#2ebd3a",fill:"#2ebd3a",style:{flexShrink:0,marginTop:4}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0"},children:[n.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#e8f8eb",border:"1.5px solid #2ebd3a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx(ze,{size:12,color:"#0B2545"})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"Live Location"}),n.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"Sharing location"}),n.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"for safe return"})]}),n.jsxs("div",{style:{width:42,height:38,borderRadius:6,background:"linear-gradient(135deg, #e8f8eb 0%, #e8f8eb 100%)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,overflow:"hidden",position:"relative",border:"1px solid #7ded88"},children:[n.jsxs("div",{style:{position:"absolute",inset:0},children:[n.jsx("div",{style:{position:"absolute",left:"33%",top:0,bottom:0,width:1,background:"rgba(255,255,255,0.5)"}}),n.jsx("div",{style:{position:"absolute",left:"66%",top:0,bottom:0,width:1,background:"rgba(255,255,255,0.5)"}}),n.jsx("div",{style:{position:"absolute",top:"33%",left:0,right:0,height:1,background:"rgba(255,255,255,0.5)"}}),n.jsx("div",{style:{position:"absolute",top:"66%",left:0,right:0,height:1,background:"rgba(255,255,255,0.5)"}})]}),n.jsx(ze,{size:14,color:"#c62828",fill:"#c62828"})]})]})]}),n.jsxs("div",{style:{margin:"6px 10px 10px",background:"linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)",borderRadius:14,padding:"12px 14px",display:"flex",alignItems:"center",gap:10},children:[n.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Pe,{size:18,color:"white"})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:12,fontWeight:800,color:"white"},children:"Protection Active"}),n.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.75)"},children:"We've got it covered 24/7"})]})]})]})})]})]})}function B1({number:e,icon:t,title:r,description:i,badge:s,badgeIcon:a}){const[o,l]=v.useState(!1),[d,c]=v.useState(!1);return n.jsxs("div",{className:"sfs-step-card-wrap",onMouseEnter:()=>l(!0),onMouseLeave:()=>{l(!1),c(!1)},onMouseDown:()=>c(!0),onMouseUp:()=>c(!1),onTouchStart:()=>c(!0),onTouchEnd:()=>c(!1),style:{background:d?"#e8f8eb":o?"#f8fafc":"white",borderRadius:20,padding:"28px 22px 20px",flex:1,minWidth:0,position:"relative",boxShadow:o?"0 16px 48px rgba(46,189,58,0.18), 0 2px 8px rgba(0,0,0,0.05)":"0 4px 20px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",transform:d?"translateY(-2px) scale(0.98)":o?"translateY(-6px) scale(1.02)":"translateY(0) scale(1)",transition:"all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",border:d?"2px solid #0B2545":o?"2px solid #2ebd3a":"2px solid #e8f8eb",display:"flex",flexDirection:"column",cursor:"pointer"},children:[n.jsx("div",{style:{position:"absolute",top:-16,left:"50%",transform:"translateX(-50%)",width:34,height:34,borderRadius:"50%",background:"linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:800,color:"white",boxShadow:"0 4px 12px rgba(6,78,59,0.35)",fontFamily:"Georgia, serif"},children:e}),n.jsx("div",{style:{width:62,height:62,borderRadius:"50%",background:o?"white":"linear-gradient(135deg, #e8f8eb 0%, #f8fafc 100%)",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px auto 16px",border:o?"1.5px solid #2ebd3a":"1.5px solid #7ded88",transition:"all 0.25s ease"},children:n.jsx(t,{size:26,color:"#2ebd3a",strokeWidth:1.8})}),n.jsx("h3",{style:{fontSize:16,fontWeight:800,color:"#0B2545",textAlign:"center",marginBottom:10,lineHeight:1.3,fontFamily:"Georgia, serif"},children:r}),n.jsx("p",{style:{fontSize:12.5,color:"#11355e",textAlign:"center",lineHeight:1.65,flex:1,marginBottom:14,opacity:.75},children:i}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:d?"white":"#e8f8eb",borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:700,color:"#2ebd3a",border:d?"1px solid #7ded88":"1px solid transparent",transition:"all 0.25s ease"},children:[n.jsx(a,{size:12,color:"#2ebd3a"}),s]})]})}function Hu(){const[e,t]=v.useState(!1);v.useEffect(()=>{setTimeout(()=>t(!0),80)},[]);const r=[{number:"1",icon:n1,title:"Order Your QR Tag",description:"Choose the right protection plan for your need and place your order. We deliver premium weatherproof QR tags to your doorstep within 3–5 business days.",badge:"Delivered across India",badgeIcon:Sa},{number:"2",icon:Yi,title:"Activate & Personalise",description:"Scan your tag to activate it, then fill in your contact details, emergency info, and any important notes. Takes less than 3 minutes — no tech skills needed.",badge:"Set up in 3 minutes",badgeIcon:Lu},{number:"3",icon:Pe,title:"Stay Protected 24/7",description:"Attach the tag to your pet, vehicle, or valuables and you're done. Anyone who finds your item scans the code — you get a WhatsApp alert instantly.",badge:"Always-on protection",badgeIcon:Je}],i=[{icon:Du,label:"Trusted by",value:"10,000+ Families"},{icon:()=>n.jsx("span",{style:{fontSize:18},children:"🇮🇳"}),label:"Made in India",value:"Premium Quality"},{icon:Sa,label:"3–5 Day",value:"Fast Delivery"},{icon:zo,label:"24/7",value:"WhatsApp Alerts"},{icon:$e,label:"Bank-level",value:"Data Security"}];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        /* ── Responsive StepCard layout ── */
        .sfs-step-card-wrap {
          flex: 1 1 280px !important;
          min-width: 260px !important;
        }

        /* ── Dotted connector line ── */
        .sfs-connector-line {
          position: absolute;
          top: 50%;
          left: calc(33.33% - 8px);
          right: calc(33.33% - 8px);
          height: 0;
          border-top: 2px dashed #7ded88;
          z-index: 0;
          pointer-events: none;
        }

        @media (max-width: 850px) {
          .sfs-connector-line {
            display: none !important;
          }
        }

        /* ── Responsive Stats Item ── */
        .sfs-stat-item {
          display: flex;
          align-items: center;
          gap: 9px;
          flex: 1 1 140px;
          justify-content: center;
          padding: 4px 0;
          border-right: 1px solid #e8f8eb;
        }

        @media (max-width: 768px) {
          .sfs-stat-item {
            border-right: none !important;
            border-bottom: 1px solid #e8f8eb;
            padding: 10px 0 !important;
          }
          .sfs-stat-item:last-child {
            border-bottom: none !important;
          }
        }
      `}),n.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(160deg, #f8fafc 0%, #fafcfa 50%, #f8fafc 100%)",fontFamily:"'Segoe UI', system-ui, sans-serif",overflow:"hidden"},children:[n.jsx("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"radial-gradient(circle, #7ded88 1px, transparent 1px)",backgroundSize:"28px 28px",opacity:.35}}),n.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:1140,margin:"0 auto",padding:"52px 28px 48px"},children:[n.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:22,opacity:e?1:0,transform:e?"translateY(0)":"translateY(-12px)",transition:"all 0.5s ease"},children:n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"white",borderRadius:40,padding:"7px 18px",fontSize:11,fontWeight:700,color:"#2ebd3a",letterSpacing:"0.08em",textTransform:"uppercase",boxShadow:"0 2px 10px rgba(0,0,0,0.08)",border:"1px solid #7ded88"},children:[n.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:"#2ebd3a",boxShadow:"0 0 0 3px rgba(22,101,52,0.2)"}}),"Simple Process"]})}),n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:48,flexWrap:"wrap"},children:[n.jsxs("div",{style:{flex:"1 1 520px",opacity:e?1:0,transform:e?"translateX(0)":"translateX(-24px)",transition:"all 0.6s ease 0.1s"},children:[n.jsxs("h1",{style:{fontSize:"clamp(32px, 5vw, 52px)",fontWeight:900,color:"#0B2545",lineHeight:1.15,marginBottom:14,fontFamily:"Georgia, 'Times New Roman', serif"},children:["Up and Running in",n.jsx("br",{}),n.jsx("span",{style:{color:"#2ebd3a"},children:"3 Easy Steps"})]}),n.jsxs("p",{style:{fontSize:15,color:"#11355e",marginBottom:36,lineHeight:1.6,maxWidth:520,opacity:.7},children:["No complicated setup. No technical knowledge needed.",n.jsx("br",{}),"Just order, activate, and relax."]}),n.jsxs("div",{style:{position:"relative",display:"flex",gap:16,flexWrap:"wrap"},children:[n.jsx("div",{className:"sfs-connector-line"}),r.map((s,a)=>n.jsx(B1,{...s},a))]}),n.jsxs("div",{style:{marginTop:28,background:"white",borderRadius:18,padding:"18px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,flexWrap:"wrap",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",border:"1px solid #e8f8eb"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"#e8f8eb",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx($e,{size:20,color:"#2ebd3a"})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:14,fontWeight:800,color:"#0B2545"},children:"Peace of mind in 3 simple steps"}),n.jsx("div",{style:{fontSize:11.5,color:"#11355e",opacity:.6},children:"Join thousands of smart families who trust our QR protection."})]})]}),n.jsxs("button",{style:{background:"linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)",color:"white",border:"none",borderRadius:12,padding:"13px 24px",fontSize:13.5,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(6,78,59,0.35)",whiteSpace:"nowrap",transition:"transform 0.15s ease"},onMouseEnter:s=>s.currentTarget.style.transform="scale(1.03)",onMouseLeave:s=>s.currentTarget.style.transform="scale(1)",children:["Start Protecting Now ",n.jsx(Ru,{size:16})]})]})]}),n.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center",paddingTop:20,opacity:e?1:0,transform:e?"translateX(0)":"translateX(24px)",transition:"all 0.6s ease 0.15s"},children:n.jsx(I1,{})})]}),n.jsx("div",{style:{marginTop:48,background:"white",borderRadius:20,padding:"18px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,boxShadow:"0 4px 20px rgba(0,0,0,0.07)",border:"1px solid #e8f8eb",opacity:e?1:0,transform:e?"translateY(0)":"translateY(16px)",transition:"all 0.6s ease 0.35s"},children:i.map((s,a)=>n.jsxs("div",{className:"sfs-stat-item",children:[n.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:"#e8f8eb",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:typeof s.icon=="function"&&s.icon.toString().includes("span")?n.jsx(s.icon,{}):n.jsx(s.icon,{size:16,color:"#2ebd3a"})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:10,color:"#11355e",opacity:.6},children:s.label}),n.jsx("div",{style:{fontSize:12.5,fontWeight:800,color:"#0B2545"},children:s.value})]})]},a))})]})]})]})}function P1(){return n.jsxs("section",{style:{background:"linear-gradient(135deg,#0B2545 0%,#2ebd3a 50%,#081c35 100%)",padding:"90px 0",overflow:"hidden",position:"relative"},children:[n.jsx("div",{style:{position:"absolute",inset:0,opacity:.07,backgroundImage:"radial-gradient(circle, #ffffff 1px, transparent 1px)",backgroundSize:"28px 28px",pointerEvents:"none"}}),n.jsx("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1},children:n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center"},className:"nfc-grid",children:[n.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.jsxs("div",{style:{position:"relative",width:320,height:320},children:[[1,2,3].map(e=>n.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",border:"1.5px solid rgba(232, 248, 235,0.3)",animation:`nfcPulse ${1.6+e*.5}s ease-out ${e*.4}s infinite`}},e)),n.jsx("div",{style:{position:"absolute",inset:"60px",background:"linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.08))",backdropFilter:"blur(12px)",borderRadius:"50%",border:"1.5px solid rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 60px rgba(232, 248, 235,0.2)"},children:n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx(jt,{size:52,color:"#e8f8eb",strokeWidth:1.5}),n.jsx("div",{style:{color:"#e8f8eb",fontWeight:800,fontSize:14,marginTop:8},children:"NFC Ready"})]})}),[{top:"5%",left:"50%",label:"Tap to Scan",icon:n.jsx(Ql,{size:16,color:"#2ebd3a"})},{top:"50%",left:"5%",label:"Instant Alert",icon:n.jsx(he,{size:16,color:"#2ebd3a"})},{bottom:"8%",right:"10%",label:"No App Needed",icon:n.jsx(Je,{size:16,color:"#2ebd3a"})}].map(({top:e,left:t,bottom:r,right:i,label:s,icon:a})=>n.jsxs("div",{style:{position:"absolute",top:e,left:t,bottom:r,right:i,transform:"translate(-50%,-50%)",background:"#e8f8eb",borderRadius:12,padding:"8px 14px",display:"flex",alignItems:"center",gap:8,fontSize:12,fontWeight:700,color:"#2ebd3a",boxShadow:"0 8px 24px rgba(6,78,59,0.3)",whiteSpace:"nowrap"},children:[a," ",s]},s))]})}),n.jsxs("div",{children:[n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 18px",borderRadius:100,background:"rgba(232, 248, 235,0.15)",border:"1px solid rgba(232, 248, 235,0.3)",marginBottom:20},children:[n.jsx(jt,{size:14,color:"#e8f8eb"}),n.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#e8f8eb"},children:"🔥 New Feature"})]}),n.jsxs("h2",{style:{fontSize:"clamp(28px,3.5vw,42px)",fontWeight:900,color:"#f8fafc",margin:"0 0 16px",lineHeight:1.1},children:["NFC Integration —",n.jsx("span",{style:{color:"#7ded88"},children:" Just Tap & Go"})]}),n.jsx("p",{style:{color:"rgba(232, 248, 235,0.85)",fontSize:16,lineHeight:1.7,marginBottom:32},children:"Every ScanForSafe tag now includes an NFC chip. No QR scan needed — just tap any NFC phone and the owner's details appear instantly. Faster than ever."}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:32},children:[{icon:Ql,title:"Tap Any Phone",sub:"Works on all modern NFC phones"},{icon:Je,title:"Instant Access",sub:"Under 0.5 seconds response time"},{icon:Pe,title:"No App Needed",sub:"Browser-based — works anywhere"},{icon:Yi,title:"Dual Mode",sub:"NFC tap + QR scan both work"}].map(({icon:e,title:t,sub:r})=>n.jsxs("div",{style:{background:"rgba(255,255,255,0.08)",backdropFilter:"blur(8px)",borderRadius:16,padding:"14px 16px",border:"1px solid rgba(255,255,255,0.1)"},children:[n.jsx(e,{size:20,color:"#7ded88",style:{marginBottom:8}}),n.jsx("div",{style:{color:"#f8fafc",fontWeight:700,fontSize:14,marginBottom:4},children:t}),n.jsx("div",{style:{color:"rgba(232, 248, 235,0.65)",fontSize:12},children:r})]},t))}),n.jsxs("div",{style:{background:"rgba(232, 248, 235,0.1)",border:"1px solid rgba(232, 248, 235,0.2)",borderRadius:16,padding:"16px 20px",display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"#e8f8eb",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx(jt,{size:22,color:"#2ebd3a"})}),n.jsxs("div",{children:[n.jsx("div",{style:{color:"#f8fafc",fontWeight:700,fontSize:14},children:"Available on all new tags"}),n.jsx("div",{style:{color:"rgba(232, 248, 235,0.7)",fontSize:12,marginTop:3},children:"Order a new ScanForSafe tag to get NFC + QR dual protection"})]})]})]})]})}),n.jsx("style",{children:`
        @keyframes nfcPulse {
          0%   { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @media (max-width: 768px) {
          .nfc-grid { grid-template-columns: 1fr !important; }
        }
      `})]})}function L1(){return n.jsxs("section",{style:{background:"linear-gradient(180deg,#f8fafc 0%,#e8f8eb 100%)",padding:"90px 0"},children:[n.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:52},children:[n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#fff",border:"1.5px solid #e8f8eb",marginBottom:16,boxShadow:"0 2px 8px rgba(22,101,52,0.08)"},children:[n.jsx(ei,{size:14,color:"#2ebd3a",fill:"#2ebd3a"}),n.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#2ebd3a"},children:"🆕 Senior Citizen Care"})]}),n.jsxs("h2",{style:{fontSize:"clamp(28px,4vw,44px)",fontWeight:900,color:"#0B2545",margin:"0 0 14px"},children:["Emergency Protection for",n.jsx("span",{style:{color:"#2ebd3a"},children:" Senior Citizens"})]}),n.jsx("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:540,margin:"0 auto",lineHeight:1.7},children:"One scan gives responders instant access to medical details, blood group, and emergency contacts — no smartphone needed"})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center"},className:"senior-grid",children:[n.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.jsxs("div",{style:{background:"#fff",borderRadius:28,padding:28,maxWidth:360,width:"100%",boxShadow:"0 20px 60px rgba(6,78,59,0.12)",border:"1.5px solid #e8f8eb"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:24,paddingBottom:20,borderBottom:"1px solid #f8fafc"},children:[n.jsx("div",{style:{width:60,height:60,borderRadius:"50%",background:"linear-gradient(135deg,#2ebd3a,#0B2545)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 20px rgba(22,101,52,0.25)"},children:n.jsx(Ca,{size:28,color:"#e8f8eb"})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:800,fontSize:18,color:"#0B2545"},children:"Ramesh Nair"}),n.jsx("div",{style:{fontSize:13,color:"#6b7280",marginTop:2},children:"Age: 72 • Nellore, AP"}),n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,marginTop:4,background:"#e8f8eb",borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:700,color:"#2ebd3a"},children:[n.jsx(Pe,{size:10})," Protected"]})]})]}),n.jsxs("div",{style:{marginBottom:18},children:[n.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:10},children:"Medical Information"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[{label:"Blood Group",value:"B+",icon:n.jsx(Oh,{size:13,color:"#ef4444"})},{label:"Condition",value:"Diabetic",icon:n.jsx(ei,{size:13,color:"#f97316"})},{label:"Allergies",value:"Penicillin",icon:n.jsx(Gl,{size:13,color:"#eab308"})},{label:"Doctor",value:"Dr. Reddy",icon:n.jsx(Ca,{size:13,color:"#2ebd3a"})}].map(({label:e,value:t,icon:r})=>n.jsxs("div",{style:{background:"#f9fafb",borderRadius:10,padding:"10px 12px",border:"1px solid #f8fafc"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:4},children:[r,n.jsx("span",{style:{fontSize:10,color:"#9ca3af",fontWeight:600},children:e})]}),n.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#11355e"},children:t})]},e))})]}),n.jsxs("div",{style:{marginBottom:18},children:[n.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:10},children:"Emergency Contacts"}),[{name:"Suresh Nair (Son)",phone:"+91 98765XXXXX"},{name:"Lakshmi Nair (Daughter)",phone:"+91 87654XXXXX"}].map(e=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 12px",background:"#f8fafc",borderRadius:10,marginBottom:6},children:[n.jsx("span",{style:{fontSize:13,fontWeight:600,color:"#11355e"},children:e.name}),n.jsxs("button",{style:{padding:"4px 12px",borderRadius:8,background:"#2ebd3a",color:"#fff",fontSize:11,fontWeight:700,border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[n.jsx(Wt,{size:11})," Call"]})]},e.name))]}),n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsxs("div",{style:{flex:1,background:"linear-gradient(135deg,#0B2545,#2ebd3a)",borderRadius:12,padding:"12px 0",display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[n.jsx(jt,{size:14,color:"#e8f8eb"}),n.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#e8f8eb"},children:"NFC Tap"})]}),n.jsxs("div",{style:{flex:1,background:"#f8fafc",borderRadius:12,padding:"12px 0",display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid #e8f8eb"},children:[n.jsx(Yi,{size:14,color:"#2ebd3a"}),n.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#2ebd3a"},children:"QR Scan"})]})]})]})}),n.jsx("div",{children:n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:18},children:[{icon:ei,color:"#ef4444",bg:"#fef2f2",title:"Medical Profile",desc:"Blood group, conditions, allergies, medications, and doctor details — all accessible with one scan. Critical in emergencies."},{icon:Gl,color:"#f97316",bg:"#fff7ed",title:"Emergency Alert System",desc:"Tap or scan triggers an instant notification to all registered family members, with GPS location of the senior."},{icon:jt,color:"#2ebd3a",bg:"#f8fafc",title:"NFC + QR Dual Support",desc:"Works with both NFC tap and QR code scan. No app required for responders — opens in any browser instantly."},{icon:Pe,color:"#2ebd3a",bg:"#e8f8eb",title:"Wristband & Wallet Card",desc:"Available as a waterproof wristband or wallet-size card. Comfortable for daily use by senior citizens."}].map(({icon:e,color:t,bg:r,title:i,desc:s})=>n.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start",background:"#fff",borderRadius:18,padding:"18px 20px",border:"1px solid #e8f8eb",boxShadow:"0 2px 12px rgba(22,101,52,0.07)"},children:[n.jsx("div",{style:{width:44,height:44,borderRadius:12,background:r,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx(e,{size:20,color:t})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:800,fontSize:15,color:"#0B2545",marginBottom:5},children:i}),n.jsx("div",{style:{fontSize:14,color:"#4b7a62",lineHeight:1.6},children:s})]})]},i))})})]})]}),n.jsx("style",{children:`
        @media (max-width: 768px) { .senior-grid { grid-template-columns: 1fr !important; } }
      `})]})}function M1(e=.15){const t=v.useRef(null),[r,i]=v.useState(!1);return v.useEffect(()=>{const s=new IntersectionObserver(([a])=>{a.isIntersecting&&i(!0)},{threshold:e});return t.current&&s.observe(t.current),()=>s.disconnect()},[]),[t,r]}function Tr({children:e,delay:t=0,visible:r,style:i={}}){return n.jsx("div",{style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(32px)",transition:`opacity 0.6s ease ${t}ms, transform 0.6s cubic-bezier(0.34,1.2,0.64,1) ${t}ms`,...i},children:e})}function T1(){const[e,t]=M1(.1),r=[{icon:Je,label:"Instant Scan",desc:"Under 2 seconds",color:"#f97316",bg:"#fff7ed"},{icon:jt,label:"Always Online",desc:"99.9% uptime",color:"#0891b2",bg:"#ecfeff"},{icon:xn,label:"Encrypted",desc:"Bank-level security",color:"#7c3aed",bg:"#f5f3ff"},{icon:Wt,label:"Multi-channel",desc:"App · SMS · WhatsApp",color:"#2ebd3a",bg:"#e8f8eb"}],i=[{icon:Ni,title:"Vehicle Info",color:"#2ebd3a",bg:"#e8f8eb",badge:"Essential",badgeColor:"#2ebd3a",badgeBg:"#e8f8eb",items:["Registration Number","Make & Model","Color & Year","Insurance Details"]},{icon:Fu,title:"GPS Tracking",color:"#0891b2",bg:"#ecfeff",badge:"Live",badgeColor:"#0891b2",badgeBg:"#ecfeff",items:["Live scan location","Google Maps link","Scan history log","Last seen timestamp"]},{icon:he,title:"Alert System",color:"#f97316",bg:"#fff7ed",badge:"Instant",badgeColor:"#f97316",badgeBg:"#fff7ed",items:["Instant app notification","WhatsApp for emergencies","SMS fallback alert","5 emergency contacts"]},{icon:Pe,title:"Security",color:"#7c3aed",bg:"#f5f3ff",badge:"Pro",badgeColor:"#7c3aed",badgeBg:"#f5f3ff",items:["Tamper-evident sticker","Privacy controls","Anti-theft mode","QR + NFC dual layer"]}];return n.jsxs("section",{ref:e,style:{background:"#ffffff",padding:"90px 0",overflow:"hidden"},children:[n.jsx("style",{children:`
        @keyframes gradient-x {
          0%,100% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
        }
        @keyframes float-up {
          0%,100% { transform: translateY(0px) }
          50% { transform: translateY(-6px) }
        }
        @keyframes shimmer {
          0% { background-position: -200% center }
          100% { background-position: 200% center }
        }
        .animated-gradient-text {
          background: linear-gradient(135deg, #0B2545 0%, #2ebd3a 40%, #0891b2 70%, #0B2545 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-x 4s ease infinite;
        }
        .highlight-card:hover { transform: translateY(-5px) !important; }
        .feature-card:hover .card-top-line { width: 100% !important; }
      `}),n.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:44},children:[n.jsx(Tr,{visible:t,delay:0,children:n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#e8f8eb",border:"1px solid #c6f0cc",marginBottom:18},children:[n.jsx(Ni,{size:14,color:"#2ebd3a"}),n.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#2ebd3a"},children:"Vehicle Protection"})]})}),n.jsx(Tr,{visible:t,delay:120,children:n.jsx("h2",{className:"animated-gradient-text",style:{fontSize:"clamp(30px,4.5vw,52px)",fontWeight:900,margin:"0 0 14px",lineHeight:1.15},children:"Vehicle Details & Protection"})}),n.jsx(Tr,{visible:t,delay:220,children:n.jsxs("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:520,margin:"0 auto",lineHeight:1.75},children:["Add your vehicle info once. Let the QR sticker do the rest — ",n.jsx("strong",{style:{color:"#0B2545"},children:"24/7 protection"}),", instant alerts, and GPS tracking"]})})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:14,marginBottom:36},children:r.map(({icon:s,label:a,desc:o,color:l,bg:d},c)=>n.jsx(Tr,{visible:t,delay:320+c*80,children:n.jsxs("div",{className:"highlight-card",style:{background:d,border:`1.5px solid ${l}33`,borderRadius:18,padding:"18px 20px",display:"flex",alignItems:"center",gap:14,transition:"all .3s cubic-bezier(0.34,1.2,0.64,1)",cursor:"default",boxShadow:`0 2px 12px ${l}14`,position:"relative",overflow:"hidden"},onMouseEnter:x=>{x.currentTarget.style.boxShadow=`0 12px 32px ${l}30`,x.currentTarget.style.borderColor=l},onMouseLeave:x=>{x.currentTarget.style.boxShadow=`0 2px 12px ${l}14`,x.currentTarget.style.borderColor=`${l}33`,x.currentTarget.style.transform=""},children:[n.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:3,background:l,borderRadius:"18px 0 0 18px"}}),n.jsx("div",{style:{width:44,height:44,borderRadius:13,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:`0 4px 12px ${l}22`,border:`1.5px solid ${l}22`},children:n.jsx(s,{size:21,color:l})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:14,fontWeight:800,color:"#0B2545",marginBottom:2},children:a}),n.jsx("div",{style:{fontSize:12,color:"#64748b",fontWeight:500},children:o})]})]})},a))}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(265px,1fr))",gap:20},children:i.map(({icon:s,title:a,color:o,bg:l,badge:d,badgeColor:c,badgeBg:x,items:p},g)=>n.jsx(Tr,{visible:t,delay:560+g*100,children:n.jsxs("div",{className:"feature-card",style:{background:"#fafafa",borderRadius:22,padding:"26px 24px 28px",border:"1.5px solid #e5e7eb",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",cursor:"pointer",position:"relative",overflow:"hidden",height:"100%"},onMouseEnter:y=>{y.currentTarget.style.transform="translateY(-8px)",y.currentTarget.style.boxShadow=`0 24px 52px ${o}28`,y.currentTarget.style.borderColor=o,y.currentTarget.style.background="#fff"},onMouseLeave:y=>{y.currentTarget.style.transform="",y.currentTarget.style.boxShadow="",y.currentTarget.style.borderColor="#e5e7eb",y.currentTarget.style.background="#fafafa"},children:[n.jsx("div",{className:"card-top-line",style:{position:"absolute",top:0,left:0,height:3,width:"40%",background:`linear-gradient(90deg,${o},${o}55)`,borderRadius:"22px 22px 0 0",transition:"width 0.4s ease"}}),n.jsx("div",{style:{position:"absolute",bottom:-18,right:-18,width:80,height:80,borderRadius:"50%",background:`${o}10`,border:`2px solid ${o}18`}}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18},children:[n.jsx("div",{style:{width:52,height:52,borderRadius:15,background:l,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 4px 14px ${o}28`,animation:"float-up 3s ease-in-out infinite"},children:n.jsx(s,{size:25,color:o})}),n.jsx("span",{style:{background:x,color:c,fontSize:10,fontWeight:900,letterSpacing:".14em",padding:"5px 13px",borderRadius:999,textTransform:"uppercase",border:`1.5px solid ${o}40`,boxShadow:`0 2px 8px ${o}18`},children:d})]}),n.jsx("h3",{style:{margin:"0 0 6px",fontSize:19,fontWeight:900,color:"#0B2545",lineHeight:1.2},children:a}),n.jsx("div",{style:{width:32,height:3,background:`linear-gradient(90deg,${o},${o}44)`,borderRadius:999,marginBottom:16}}),n.jsx("ul",{style:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:10},children:p.map((y,w)=>n.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10,fontSize:13.5,color:"#374151",opacity:t?1:0,transform:t?"translateX(0)":"translateX(-12px)",transition:`opacity 0.5s ease ${700+g*100+w*60}ms, transform 0.5s ease ${700+g*100+w*60}ms`},children:[n.jsx("div",{style:{width:22,height:22,borderRadius:7,background:l,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:`1px solid ${o}33`},children:n.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:o}})}),y]},y))})]})},a))})]})]})}function F1(){const e=[{title:"256-bit Encryption",desc:"AES military-grade encryption at rest and in transit",svg:n.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("rect",{x:"7",y:"12",width:"14",height:"11",rx:"2",stroke:"#166534",strokeWidth:"1.5",fill:"none"}),n.jsx("path",{d:"M10 12V9a4 4 0 0 1 8 0v3",stroke:"#166534",strokeWidth:"1.5",strokeLinecap:"round"}),n.jsx("circle",{cx:"14",cy:"17.5",r:"1.5",fill:"#166534"}),n.jsx("line",{x1:"14",y1:"19",x2:"14",y2:"21",stroke:"#166534",strokeWidth:"1.5",strokeLinecap:"round"})]})},{title:"Emergency-Only Access",desc:"Data surfaced strictly when a genuine emergency is detected",svg:n.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M14 4L5 22h18L14 4z",stroke:"#166534",strokeWidth:"1.5",strokeLinejoin:"round",fill:"none"}),n.jsx("line",{x1:"14",y1:"12",x2:"14",y2:"17",stroke:"#166534",strokeWidth:"1.5",strokeLinecap:"round"}),n.jsx("circle",{cx:"14",cy:"19.5",r:"0.75",fill:"#166534"})]})},{title:"User Controlled",desc:"You decide exactly which data is visible and to whom",svg:n.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("circle",{cx:"14",cy:"10",r:"4",stroke:"#166534",strokeWidth:"1.5",fill:"none"}),n.jsx("path",{d:"M6 22c0-4.418 3.582-8 8-8s8 3.582 8 8",stroke:"#166534",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),n.jsx("circle",{cx:"20",cy:"10",r:"2",fill:"#166534",opacity:"0.35"}),n.jsx("path",{d:"M22 8l1.5-1.5M22 12l1.5 1.5M24 10h2",stroke:"#166534",strokeWidth:"1.2",strokeLinecap:"round"})]})},{title:"Zero Data Selling",desc:"Your information is never shared with or sold to third parties",svg:n.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:[n.jsx("circle",{cx:"10",cy:"10",r:"3.5",stroke:"#166534",strokeWidth:"1.5"}),n.jsx("path",{d:"M4.5 20c0-3 2.5-5.5 5.5-5.5S15.5 17 15.5 20",stroke:"#166534",strokeWidth:"1.5",strokeLinecap:"round"}),n.jsx("path",{d:"M20 12l4 2v3c0 2.2-1.6 4.2-4 5-2.4-.8-4-2.8-4-5v-3l4-2z",stroke:"#166534",strokeWidth:"1.5",strokeLinejoin:"round"})]})}],t=["Encrypted storage — data never exposed publicly","Emergency-only access when actually needed","You control what information is visible","No data sold to third parties"];return n.jsxs("section",{style:{width:"100%",background:"linear-gradient(160deg, #ffffff 0%, #ffffff 60%, #ecfdf5 100%)",padding:"40px",fontFamily:"'Inter', sans-serif"},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        .ps-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; max-width: 1180px; margin: 0 auto; }
        .ps-card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .ps-card {
          background: #ffffff;
          border: 1px solid #bbf7d0;
          border-radius: 20px;
          padding: 28px 24px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .ps-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 60%);
          z-index: 0;
        }
          
        .ps-card:hover {
          transform: translateY(-6px);
  border: 2px solid #16a34a;
  box-shadow: 0 15px 35px rgba(22, 163, 74, 0.15);
        }
        .ps-card > * { position: relative; z-index: 1; }
        .ps-icon-wrap {
          width: 52px; height: 52px;
          background: #dcfce7;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
        }
        .ps-check-row {
          display: flex; align-items: flex-start; gap: 14px; margin-bottom: 18px;
        }
        @media (max-width: 900px) {
          .ps-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 560px) {
          .ps-card-grid { grid-template-columns: 1fr; }
        }
      `}),n.jsxs("div",{className:"ps-grid",children:[n.jsxs("div",{children:[n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,marginBottom:28},children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M8 1.5L2 4v4c0 3.3 2.6 6.4 6 7 3.4-.6 6-3.7 6-7V4L8 1.5z",stroke:"#15803d",strokeWidth:"1.3",fill:"none",strokeLinejoin:"round"}),n.jsx("path",{d:"M5.5 8l2 2 3-3",stroke:"#15803d",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}),n.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:500,color:"#15803d",letterSpacing:"0.08em",textTransform:"uppercase"},children:"Privacy & Security"})]}),n.jsxs("h2",{style:{fontFamily:"Inter, sans-serif",fontSize:"clamp(2.4rem, 4.5vw, 3.6rem)",fontWeight:800,lineHeight:1.1,color:"#0f1a14",marginBottom:24,letterSpacing:"-0.03em"},children:["Your Data Is Always",n.jsx("br",{}),n.jsx("span",{style:{color:"#16a34a",fontWeight:800},children:"In Your Control"}),"          "]}),n.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:16,lineHeight:1.8,color:"#374151",marginBottom:40,maxWidth:460,fontWeight:300},children:"We handle sensitive personal and medical information with the highest level of care. Your family's safety data is protected with enterprise-grade security built for the most demanding environments."}),n.jsx("div",{children:t.map((r,i)=>n.jsxs("div",{className:"ps-check-row",children:[n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{flexShrink:0,marginTop:2},children:[n.jsx("circle",{cx:"11",cy:"11",r:"10.25",stroke:"#16a34a",strokeWidth:"1.5",fill:"#f0fdf4"}),n.jsx("path",{d:"M7 11l3 3 5-5",stroke:"#16a34a",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),n.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:15,color:"#1f2937",lineHeight:1.6,fontWeight:400},children:r})]},i))})]}),n.jsx("div",{className:"ps-card-grid",children:e.map((r,i)=>n.jsxs("div",{className:"ps-card",children:[n.jsx("svg",{width:"60",height:"60",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",top:0,right:0,opacity:.25},children:n.jsx("path",{d:"M60 0 Q60 60 0 60",stroke:"#d0e1d6",strokeWidth:"1",fill:"none"})}),n.jsx("div",{className:"ps-icon-wrap",children:r.svg}),n.jsx("h3",{style:{fontFamily:"Inter, sans-serif",fontSize:18,fontWeight:400,color:"#0f1a14",marginBottom:8,lineHeight:1.25},children:r.title}),n.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:300,color:"#4b5563",lineHeight:1.6,margin:0},children:r.desc}),n.jsx("div",{style:{position:"absolute",bottom:0,left:24,right:24,height:2,background:"linear-gradient(90deg, #0c9e3f, transparent)",borderRadius:1}})]},i))})]})]})}function W1(){const e=[{step:"01",title:"Share Your Link",desc:"Get your unique referral link from your customer dashboard and share it with friends or family.",color:"#0088ff",lightColor:"rgba(0, 136, 255, 0.06)",hoverBg:"rgba(0, 136, 255, 0.12)",bg:"rgba(0, 136, 255, 0.1)",borderColor:"rgba(0, 136, 255, 0.25)",stepColor:"rgba(0, 136, 255, 0.35)",svg:n.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M13 19l-3.5 3.5a3.536 3.536 0 0 1-5-5L8 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),n.jsx("path",{d:"M19 13l3.5-3.5a3.536 3.536 0 0 0-5-5L14 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),n.jsx("path",{d:"M13.5 18.5l5-5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})},{step:"02",title:"Friends Activate Tags",desc:"Your friends purchase and activate any ScanForSafe smart decal, key tag, or safety wristband.",color:"#9d00ff",lightColor:"rgba(157, 0, 255, 0.06)",hoverBg:"rgba(157, 0, 255, 0.12)",bg:"rgba(157, 0, 255, 0.1)",borderColor:"rgba(157, 0, 255, 0.25)",stepColor:"rgba(157, 0, 255, 0.35)",svg:n.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("circle",{cx:"12",cy:"11",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"}),n.jsx("path",{d:"M4 25c0-4.418 3.582-8 8-8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),n.jsx("circle",{cx:"22",cy:"11",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none",opacity:"0.5"}),n.jsx("path",{d:"M20 25c0-4.418 1.343-7.418 4-8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",opacity:"0.5"}),n.jsx("path",{d:"M25 18v6M22 21h6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})},{step:"03",title:"Earn Protection Cash",desc:"Get ₹250 cash commission or premium subscription extensions credited directly to your wallet.",color:"#00c853",lightColor:"rgba(0, 200, 83, 0.06)",hoverBg:"rgba(0, 200, 83, 0.12)",bg:"rgba(0, 200, 83, 0.1)",borderColor:"rgba(0, 200, 83, 0.25)",stepColor:"rgba(0, 200, 83, 0.35)",svg:n.jsx("svg",{width:"34",height:"34",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M16 4l2.9 8.9H28l-7.6 5.5 2.9 8.9L16 21.8l-7.3 5.5 2.9-8.9L4 12.9h9.1L16 4z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round",fill:"none"})})}];return n.jsxs("section",{style:{width:"100%",background:"linear-gradient(180deg, #f4f6f9 0%, #e9ecf1 100%)",padding:"20px 40px 20px 40px",fontFamily:"'Inter', sans-serif",position:"relative",overflowX:"hidden",borderTop:"1px solid rgba(46, 189, 58, 0.08)"},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .ref-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1100px; margin: 0 auto 52px; }
        .ref-card {
          background: linear-gradient(145deg, #ffffff 0%, #f9fafb 100%);
          border: 2px solid var(--step-color-border, rgba(46, 189, 58, 0.12));
          border-radius: 24px;
          padding: 40px 30px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.02);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .ref-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(160px circle at top right, var(--step-color-light, rgba(46, 189, 58, 0.04)), transparent);
          z-index: 0;
          transition: all 0.3s ease;
        }
        .ref-card:hover {
          border-color: var(--step-color, rgba(46, 189, 58, 0.35));
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(11, 37, 69, 0.08);
        }
        .ref-card:hover::before {
          background: radial-gradient(240px circle at top right, var(--step-color-hover-bg, rgba(46, 189, 58, 0.12)), transparent);
        }
        .ref-card:hover .ref-icon-ring {
          transform: scale(1.05);
          box-shadow: 0 4px 12px var(--step-color-light, rgba(46, 189, 58, 0.15));
        }
        .ref-card > * { position: relative; z-index: 1; }
        .ref-icon-ring {
          width: 64px; height: 64px;
          border-radius: 50%;
          border: 2px solid rgba(46, 189, 58, 0.25);
          background: rgba(46, 189, 58, 0.07);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .ref-cta-btn {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #ffffff;
          background: linear-gradient(135deg, #1fa82a 0%, #2ebd3a 100%);
          border: none;
          border-radius: 14px;
          padding: 13px 40px;
          cursor: pointer;
          letter-spacing: -0.01em;
          display: inline-flex;
          align-items: center;
          gap: 2px;
          box-shadow: 0 10px 24px rgba(46, 189, 58, 0.25);
          transition: all 0.25s ease-in-out;
        }
        .ref-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(46, 189, 58, 0.35);
          opacity: 0.95;
        }
        @media (max-width: 760px) {
          .ref-grid { grid-template-columns: 1fr; max-width: 440px; }
        }
      `}),n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 1200 600",preserveAspectRatio:"xMidYMid slice",style:{position:"absolute",inset:0,opacity:.06,pointerEvents:"none"},xmlns:"http://www.w3.org/2000/svg",children:[[0,1,2,3,4,5,6].map(t=>n.jsx("line",{x1:t*200,y1:"0",x2:t*200,y2:"600",stroke:"#2ebd3a",strokeWidth:"1"},`v${t}`)),[0,1,2,3,4].map(t=>n.jsx("line",{x1:"0",y1:t*150,x2:"1200",y2:t*150,stroke:"#2ebd3a",strokeWidth:"1"},`h${t}`))]}),n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",textAlign:"center",position:"relative"},children:[n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,marginBottom:24,padding:"6px 16px",borderRadius:999,border:"2px solid rgba(46, 189, 58, 0.2)",background:"rgba(46, 189, 58, 0.07)"},children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7 1l1.6 4.8H14l-4.2 3 1.6 4.9L7 11l-4.4 2.7 1.6-4.9L0 5.8h5.4L7 1z",stroke:"#2ebd3a",strokeWidth:"1.1",strokeLinejoin:"round",fill:"none"})}),n.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:11,fontWeight:700,color:"#2ebd3a",letterSpacing:"0.1em",textTransform:"uppercase"},children:"Referral Program"})]}),n.jsxs("h2",{style:{fontFamily:"'Inter', sans-serif",fontSize:"clamp(2.2rem, 4.5vw, 3.2rem)",fontWeight:800,lineHeight:1.08,color:"#0B2545",marginBottom:20,letterSpacing:"-0.03em"},children:["Invite Friends, ",n.jsx("span",{style:{color:"#2ebd3a"},children:"Protect Lives"})]}),n.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:15.5,fontWeight:400,color:"#4A5568",lineHeight:1.8,maxWidth:640,margin:"0 auto 60px"},children:"Share your unique ScanForSafe referral link with friends and family. Help them secure their vehicles, bikes, senior citizens, and valuables with smart emergency protection tags, while earning direct commissions credited instantly to your wallet."}),n.jsx("div",{className:"ref-grid",children:e.map((t,r)=>n.jsxs("div",{className:"ref-card",style:{"--step-color":t.color,"--step-color-light":t.lightColor,"--step-color-hover-bg":t.hoverBg,"--step-color-border":t.borderColor},children:[n.jsx("span",{style:{position:"absolute",top:20,right:22,fontFamily:"'Inter', sans-serif",fontSize:11,fontWeight:700,color:t.stepColor,letterSpacing:"0.06em"},children:t.step}),n.jsx("div",{className:"ref-icon-ring",style:{color:t.color,backgroundColor:t.bg,borderColor:t.borderColor},children:t.svg}),n.jsx("h3",{style:{fontFamily:"'Inter', sans-serif",fontSize:18,fontWeight:700,color:"#0B2545",marginBottom:10,letterSpacing:"-0.02em"},children:t.title}),n.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:14,fontWeight:400,color:"#5A6578",lineHeight:1.7,margin:0},children:t.desc}),n.jsx("div",{style:{position:"absolute",bottom:0,left:28,right:28,height:2,background:`linear-gradient(90deg, ${t.color}, transparent)`,borderRadius:1}})]},r))}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[n.jsxs("button",{className:"ref-cta-btn",children:["Get Your Referral Code",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"#ffffff",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})]}),n.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12,color:"rgba(90, 101, 120, 0.6)",display:"flex",alignItems:"center",gap:6},children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6 1L2 3v3c0 2.5 1.8 4.8 4 5.4C8.2 10.8 10 8.5 10 6V3L6 1z",stroke:"rgba(90, 101, 120, 0.5)",strokeWidth:"1.1",strokeLinejoin:"round",fill:"none"})}),"Help your community stay safe and get rewarded."]})]})]})]})}function A1(){return n.jsxs(n.Fragment,{children:[n.jsx(z1,{}),n.jsx(E1,{}),n.jsx(Hu,{}),n.jsx(T1,{}),n.jsx(L1,{}),n.jsx(P1,{}),n.jsx(F1,{}),n.jsx(W1,{})]})}const O1=[{icon:Wt,label:"Phone",value:"+91 XXXXX XXXXX",href:"tel:+91XXXXXXXXXX",color:"#0057b8",bg:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"#bfdbfe",emoji:"📞",desc:"Mon–Sat, 9am to 7pm"},{icon:zo,label:"WhatsApp",value:"Chat with us instantly",href:"https://wa.me/91XXXXXXXXXX",color:"#2ebd3a",bg:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"#e8f8eb",emoji:"💬",desc:"Fastest — reply under 10 min"},{icon:Tu,label:"Email",value:"hello@scanforsafe.in",href:"mailto:hello@scanforsafe.in",color:"#7c3aed",bg:"linear-gradient(135deg,#f8fafc,#ede9fe)",border:"#ddd6fe",emoji:"✉️",desc:"Reply within 2 business hours"},{icon:ze,label:"Office",value:"Your City, State – 000000",href:null,color:"#e11d48",bg:"linear-gradient(135deg,#fff1f2,#ffe4e6)",border:"#fecdd3",emoji:"📍",desc:"Headquarters, India"}];function ks(e=.12){const t=v.useRef(null),[r,i]=v.useState(!1);return v.useEffect(()=>{const s=new IntersectionObserver(([a])=>{a.isIntersecting&&i(!0)},{threshold:e});return t.current&&s.observe(t.current),()=>s.disconnect()},[e]),[t,r]}function _1(e,t=1800,r=!1){const[i,s]=v.useState(0);return v.useEffect(()=>{if(!r)return;let a=null;const o=l=>{a||(a=l);const d=Math.min((l-a)/t,1),c=1-Math.pow(1-d,3);s(Math.floor(c*e)),d<1&&requestAnimationFrame(o)};requestAnimationFrame(o)},[r,e,t]),i}function Ss({num:e,suffix:t,label:r,active:i,delay:s}){const a=_1(e,1600,i);return n.jsxs("div",{style:{textAlign:"center",opacity:i?1:0,transform:i?"translateY(0)":"translateY(20px)",transition:`opacity .6s ease ${s}s, transform .6s ease ${s}s`},children:[n.jsxs("div",{style:{fontFamily:"'Clash Display', 'Cabinet Grotesk', sans-serif",fontSize:28,fontWeight:800,color:"#fff",lineHeight:1,letterSpacing:"-0.04em"},children:[a,t]}),n.jsx("div",{style:{fontSize:11,color:"rgba(186,230,253,0.75)",fontWeight:600,marginTop:4,letterSpacing:".06em",textTransform:"uppercase"},children:r})]})}function D1(){const[e,t]=v.useState({name:"",email:"",phone:"",message:""}),[r,i]=v.useState(!1),[s,a]=v.useState(!1),[o,l]=v.useState(!1),[d,c]=ks(),[x,p]=ks(),[g,y]=ks(.3);v.useEffect(()=>{const j=setTimeout(()=>l(!0),80);return()=>clearTimeout(j)},[]);const w=j=>t({...e,[j.target.name]:j.target.value}),m=j=>{j.preventDefault(),a(!0),setTimeout(()=>{a(!1),i(!0)},1600)};return n.jsxs("div",{style:{fontFamily:"'Instrument Sans', 'Cabin', sans-serif",overflowX:"hidden"},children:[n.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),n.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Fira+Code:wght@400;500&display=swap",rel:"stylesheet"}),n.jsx("style",{children:`
        /* ── Keyframes ── */
        @keyframes morphBlob {
          0%,100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%; }
          25%      { border-radius: 40% 60% 30% 70% / 60% 40% 70% 50%; }
          50%      { border-radius: 70% 30% 50% 50% / 40% 70% 30% 60%; }
          75%      { border-radius: 30% 70% 60% 40% / 70% 30% 60% 40%; }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-18px); }
        }
        @keyframes floatYSlow {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-26px) rotate(6deg); }
        }
        @keyframes scanBeam {
          0%   { top: -4px; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes glowPulse {
          0%,100% { opacity: .5; transform: scale(1); }
          50%      { opacity: 1; transform: scale(1.08); }
        }
        @keyframes badgeIn {
          from { opacity: 0; transform: translateY(-14px) scale(.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes titleIn {
          from { opacity: 0; transform: translateY(40px) skewY(2deg); }
          to   { opacity: 1; transform: translateY(0) skewY(0deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes checkPop {
          0%   { transform: scale(0) rotate(-30deg); opacity: 0; }
          65%  { transform: scale(1.2) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes ripple {
          0%   { transform: scale(1); opacity: .6; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes orbMove1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(60px,-40px) scale(1.1); }
          66%      { transform: translate(-30px,30px) scale(.95); }
        }
        @keyframes orbMove2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-70px,30px) scale(1.05); }
          66%      { transform: translate(40px,-50px) scale(1.1); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 64px; }
        }
        @keyframes cardHoverShine {
          from { left: -100%; }
          to   { left: 150%; }
        }
        @keyframes dotBlink {
          0%,100% { opacity: 1; }
          50%      { opacity: .3; }
        }

        /* ── Responsive Stats Counter (Matches B2B guidelines) ── */
        .cu-stats-counter {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .cu-stats-divider {
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,0.1);
        }

        @media (max-width: 768px) {
          .cu-stats-counter {
            flex-direction: column;
            gap: 24px;
          }
          .cu-stats-divider {
            display: none;
          }
        }

        /* ── Field styles ── */
        .cf-field { position: relative; }
        .cf-field label {
          display: block;
          font-family: 'Fira Code', monospace;
          font-size: 10.5px; font-weight: 500;
          letter-spacing: .14em; text-transform: uppercase;
          color: #64748b; margin-bottom: 7px;
          transition: color .2s;
        }
        .cf-field:focus-within label { color: #0057b8; }
        .cf-input {
          width: 100%; border: 2px solid #e2e8f0; border-radius: 14px;
          padding: 13px 16px; font-size: 14px; font-weight: 500;
          color: #0B2545; background: #f8fafc; outline: none;
          font-family: 'Instrument Sans', sans-serif;
          transition: all .25s cubic-bezier(.4,0,.2,1);
          box-sizing: border-box;
        }
        .cf-input::placeholder { color: #94a3b8; font-weight: 400; }
        .cf-input:focus {
          border-color: #0057b8; background: #fff;
          box-shadow: 0 0 0 4px rgba(0,87,184,0.10);
          transform: translateY(-2px);
        }

        /* ── Info card ── */
        .cf-info-card {
          position: relative; overflow: hidden;
          border-radius: 18px; padding: 18px 20px;
          border-width: 1.5px; border-style: solid;
          display: flex; align-items: flex-start; gap: 15px;
          cursor: default;
          transition: transform .3s cubic-bezier(.34,1.3,.64,1),
                      box-shadow .3s ease;
        }
        .cf-info-card::before {
          content: '';
          position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(105deg, transparent, rgba(255,255,255,0.6), transparent);
          transition: left .5s ease;
        }
        .cf-info-card:hover { transform: translateY(-5px) scale(1.01); box-shadow: 0 18px 48px rgba(0,0,0,0.10); }
        .cf-info-card:hover::before { left: 150%; }

        /* ── Submit button ── */
        .cf-submit {
          width: 100%; padding: 16px; border-radius: 14px;
          background: linear-gradient(135deg, #0057b8 0%, #003580 100%);
          color: white; font-size: 15px; font-weight: 700;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 9px;
          transition: all .25s ease; position: relative; overflow: hidden;
          font-family: 'Instrument Sans', sans-serif;
          letter-spacing: .02em;
        }
        .cf-submit::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%);
          background-size: 200% 100%; background-position: -200% center;
          transition: background-position .6s ease;
        }
        .cf-submit:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(0,87,184,0.40);
        }
        .cf-submit:not(:disabled):hover::after { background-position: 200% center; }
        .cf-submit:disabled { opacity: .65; cursor: not-allowed; }

        /* ── Responsive Layout Grid ── */
        .cu-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1.65fr;
          gap: 36px;
          align-items: start;
        }

        .cf-fields-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 900px) {
          .cu-layout-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .cf-fields-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}),n.jsxs("section",{style:{position:"relative",overflow:"hidden",minHeight:520,paddingTop:110,paddingBottom:80,background:"linear-gradient(150deg, #020c1b 0%, #0a1f44 40%, #003d80 80%, #0057b8 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:[n.jsx("div",{style:{position:"absolute",width:560,height:560,borderRadius:"50%",background:"radial-gradient(circle, rgba(46, 189, 58,0.18) 0%, transparent 65%)",top:-180,right:-120,animation:"orbMove1 14s ease-in-out infinite",pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle, rgba(0,87,184,0.30) 0%, transparent 65%)",bottom:-160,left:-100,animation:"orbMove2 18s ease-in-out infinite",pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",backgroundSize:"32px 32px"}}),n.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:n.jsx("div",{style:{position:"absolute",left:0,right:0,height:3,background:"linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.0) 15%, rgba(74,222,128,0.9) 50%, rgba(74,222,128,0.0) 85%, transparent 100%)",animation:"scanBeam 4s ease-in-out infinite",filter:"blur(1px)"}})}),n.jsx("div",{style:{position:"absolute",top:70,left:"7%",width:64,height:64,border:"2px solid rgba(74,222,128,0.25)",borderRadius:16,transform:"rotate(15deg)",animation:"floatYSlow 6s ease-in-out infinite",pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",bottom:80,right:"8%",width:44,height:44,border:"2px solid rgba(99,179,237,0.2)",borderRadius:"50%",animation:"floatY 5s ease-in-out infinite",pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",top:120,right:"18%",width:28,height:28,background:"rgba(74,222,128,0.12)",borderRadius:8,transform:"rotate(30deg)",animation:"floatYSlow 7s ease-in-out .5s infinite",pointerEvents:"none"}}),n.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",padding:"0 24px",maxWidth:680},children:[n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:9,background:"rgba(46, 189, 58,0.14)",border:"1.5px solid rgba(74,222,128,0.35)",borderRadius:99,padding:"8px 20px",marginBottom:28,opacity:o?1:0,transform:o?"translateY(0) scale(1)":"translateY(-16px) scale(.9)",transition:"opacity .7s cubic-bezier(.34,1.3,.64,1), transform .7s cubic-bezier(.34,1.3,.64,1)",fontFamily:"'Fira Code', monospace"},children:[n.jsxs("span",{style:{position:"relative",display:"inline-block",width:8,height:8},children:[n.jsx("span",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"#4bd557",animation:"ripple 1.6s ease-out infinite"}}),n.jsx("span",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"#4bd557"}})]}),n.jsx("span",{style:{fontSize:11,fontWeight:500,color:"#7ded88",letterSpacing:".1em"},children:"team.online • avg_reply < 10min"})]}),n.jsxs("h1",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:"clamp(2.4rem, 5.5vw, 4rem)",fontWeight:800,color:"#fff",lineHeight:1.08,letterSpacing:"-0.04em",margin:"0 0 22px",opacity:o?1:0,transform:o?"translateY(0) skewY(0deg)":"translateY(40px) skewY(2deg)",transition:"opacity .75s ease .12s, transform .75s cubic-bezier(.34,1.3,.64,1) .12s"},children:["Talk to a",n.jsx("br",{}),n.jsx("span",{style:{background:"linear-gradient(90deg, #4bd557 0%, #7ded88 50%, #4bd557 100%)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:o?"glowPulse 3s ease-in-out infinite":"none",display:"inline-block"},children:"Real Human"})]}),n.jsx("p",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:16.5,color:"rgba(186,230,253,0.85)",lineHeight:1.75,maxWidth:500,margin:"0 auto 40px",opacity:o?1:0,transform:o?"translateY(0)":"translateY(24px)",transition:"opacity .7s ease .26s, transform .7s ease .26s"},children:"Questions about your QR tag, bulk orders, or just need help with setup? We're right here — real people, real fast replies."}),n.jsxs("div",{ref:g,className:"cu-stats-counter",children:[n.jsx(Ss,{num:10,suffix:" min",label:"WhatsApp reply",active:y,delay:0}),n.jsx("div",{className:"cu-stats-divider"}),n.jsx(Ss,{num:2,suffix:" hrs",label:"Email response",active:y,delay:.15}),n.jsx("div",{className:"cu-stats-divider"}),n.jsx(Ss,{num:1e4,suffix:"+",label:"Happy users",active:y,delay:.3})]})]}),n.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,pointerEvents:"none"},children:n.jsx("svg",{viewBox:"0 0 1440 72",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:n.jsx("path",{d:"M0,48 C240,80 480,16 720,40 C960,64 1200,24 1440,48 L1440,72 L0,72 Z",fill:"#f1f5f9"})})})]}),n.jsx("section",{style:{background:"#f1f5f9",padding:"68px 24px 88px"},children:n.jsx("div",{style:{maxWidth:1100,margin:"0 auto"},children:n.jsxs("div",{className:"cu-layout-grid",children:[n.jsxs("div",{ref:x,children:[n.jsxs("div",{style:{opacity:p?1:0,transform:p?"translateX(0)":"translateX(-24px)",transition:"opacity .55s ease, transform .55s ease",marginBottom:28},children:[n.jsxs("span",{style:{fontFamily:"'Fira Code', monospace",fontSize:10,fontWeight:500,letterSpacing:".18em",textTransform:"uppercase",color:"#0057b8",display:"flex",alignItems:"center",gap:8,marginBottom:10},children:[n.jsx("span",{style:{width:20,height:1.5,background:"#0057b8",display:"inline-block"}}),"contact channels"]}),n.jsxs("h2",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:26,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",margin:"0 0 10px"},children:["Reach Us",n.jsx("br",{}),"Your Way"]}),n.jsx("p",{style:{fontSize:14,color:"#64748b",lineHeight:1.75,fontWeight:400},children:"WhatsApp gets you the fastest reply. For detailed queries, email works great too."})]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:O1.map(({icon:j,label:f,value:u,href:h,color:b,bg:S,border:C,emoji:z,desc:I},_)=>n.jsxs("div",{className:"cf-info-card",style:{background:S,borderColor:C,opacity:p?1:0,transform:p?"translateX(0)":"translateX(-28px)",transition:`opacity .5s ease ${_*.1+.1}s, transform .5s cubic-bezier(.34,1.3,.64,1) ${_*.1+.1}s, box-shadow .3s ease, transform .3s ease`},children:[n.jsx("div",{style:{width:48,height:48,borderRadius:14,background:"rgba(255,255,255,0.7)",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,boxShadow:"0 2px 8px rgba(0,0,0,0.06)",border:`1.5px solid ${C}`},children:z}),n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{fontFamily:"'Fira Code', monospace",fontSize:9.5,fontWeight:500,letterSpacing:".14em",textTransform:"uppercase",color:b,marginBottom:3,display:"flex",alignItems:"center",gap:5},children:[n.jsx("span",{style:{width:14,height:1.5,background:b,display:"inline-block"}}),f]}),h?n.jsx("a",{href:h,style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:14,fontWeight:700,color:"#0B2545",textDecoration:"none",display:"block",marginBottom:3,transition:"color .2s"},onMouseEnter:P=>P.target.style.color=b,onMouseLeave:P=>P.target.style.color="#0B2545",children:u}):n.jsx("div",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:14,fontWeight:700,color:"#0B2545",marginBottom:3},children:u}),n.jsx("div",{style:{fontSize:11.5,color:"#94a3b8",fontWeight:400},children:I})]})]},f))}),n.jsxs("div",{style:{marginTop:18,padding:"14px 18px",borderRadius:14,background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"1.5px solid #e8f8eb",display:"flex",alignItems:"center",gap:10,opacity:p?1:0,transform:p?"translateY(0)":"translateY(12px)",transition:"opacity .5s ease .55s, transform .5s ease .55s"},children:[n.jsxs("div",{style:{position:"relative",flexShrink:0},children:[n.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"#2ebd3a"}}),n.jsx("div",{style:{position:"absolute",inset:-3,borderRadius:"50%",border:"1.5px solid rgba(46, 189, 58,0.3)",animation:"ripple 2s ease-out infinite"}})]}),n.jsx("span",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:12.5,fontWeight:600,color:"#0B2545"},children:"We always reply within 2 business hours — guaranteed."})]})]}),n.jsx("div",{ref:d,style:{background:"white",borderRadius:26,padding:"40px 38px",boxShadow:"0 24px 64px rgba(0,40,120,0.10), 0 4px 16px rgba(0,40,120,0.05)",border:"1.5px solid #e8edf3",opacity:c?1:0,transform:c?"translateY(0)":"translateY(36px)",transition:"opacity .65s ease .1s, transform .65s cubic-bezier(.34,1.3,.64,1) .1s"},children:r?n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"44px 0",textAlign:"center"},children:[n.jsx("div",{style:{width:88,height:88,borderRadius:"50%",background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:22,border:"2px solid #e8f8eb",animation:"checkPop .65s cubic-bezier(.34,1.3,.64,1) both",boxShadow:"0 0 0 8px rgba(46, 189, 58,0.08)"},children:n.jsx(zi,{style:{width:40,height:40,color:"#2ebd3a"}})}),n.jsx("h3",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:28,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",marginBottom:12},children:"Message Sent! 🎉"}),n.jsx("p",{style:{fontSize:14.5,color:"#64748b",lineHeight:1.8,maxWidth:340},children:"We've got your message and will reply within 2 hours. Check your inbox for a confirmation shortly."}),n.jsxs("div",{style:{marginTop:24,padding:"12px 28px",borderRadius:12,background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"1.5px solid #e8f8eb",fontFamily:"'Instrument Sans', sans-serif",fontSize:13.5,fontWeight:700,color:"#0B2545"},children:["Thanks, ",e.name||"friend","! We'll be in touch 👋"]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{marginBottom:30},children:[n.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:99,padding:"5px 14px",marginBottom:14},children:n.jsx("span",{style:{fontFamily:"'Fira Code', monospace",fontSize:10,fontWeight:500,color:"#0057b8",letterSpacing:".1em"},children:">_ send_message.tsx"})}),n.jsxs("h2",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:25,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",margin:0},children:["We'd Love to Hear",n.jsx("br",{}),"From You"]}),n.jsx("div",{style:{height:3,borderRadius:99,marginTop:10,background:"linear-gradient(90deg, #0057b8, #2ebd3a)",animation:c?"lineGrow .8s cubic-bezier(.34,1.3,.64,1) .4s both":"none"}})]}),n.jsxs("form",{onSubmit:m,style:{display:"flex",flexDirection:"column",gap:18},children:[n.jsxs("div",{className:"cf-fields-row",children:[n.jsxs("div",{className:"cf-field",children:[n.jsx("label",{children:"Full Name *"}),n.jsx("input",{type:"text",name:"name",required:!0,value:e.name,onChange:w,placeholder:"Rahul Sharma",className:"cf-input"})]}),n.jsxs("div",{className:"cf-field",children:[n.jsx("label",{children:"Phone"}),n.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:w,placeholder:"+91 XXXXX XXXXX",className:"cf-input"})]})]}),n.jsxs("div",{className:"cf-field",children:[n.jsx("label",{children:"Email Address *"}),n.jsx("input",{type:"email",name:"email",required:!0,value:e.email,onChange:w,placeholder:"rahul@example.com",className:"cf-input"})]}),n.jsxs("div",{className:"cf-field",children:[n.jsx("label",{children:"Message *"}),n.jsx("textarea",{name:"message",required:!0,rows:5,value:e.message,onChange:w,placeholder:"Tell us how we can help — setup, bulk orders, feedback...",className:"cf-input",style:{resize:"none"}})]}),n.jsx("button",{type:"submit",disabled:s,className:"cf-submit",children:s?n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",style:{animation:"spin 1s linear infinite",flexShrink:0},children:n.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),"Sending your message..."]}):n.jsxs(n.Fragment,{children:[n.jsx(Eo,{style:{width:16,height:16,flexShrink:0}}),"Send Message"]})}),n.jsx("p",{style:{textAlign:"center",fontFamily:"'Fira Code', monospace",fontSize:10.5,color:"#94a3b8",fontWeight:400,letterSpacing:".04em"},children:"🔒 encrypted • never shared • gdpr safe"})]})]})})]})})})]})}function U1(){return n.jsxs("div",{className:"pt-20 min-h-screen bg-light-bg",children:[n.jsxs("div",{className:"hero-gradient py-16 text-white text-center",children:[n.jsx("h1",{className:"font-display font-extrabold text-4xl mb-4",children:"Privacy Policy"}),n.jsx("p",{className:"text-blue-200",children:"Last updated: January 2025"})]}),n.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:n.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8",children:[{title:"1. Information We Collect",content:"We collect information you provide directly to us when registering your QR tag, such as your name, phone number, email address, emergency contact details, and any additional information you choose to include in your QR profile. We also collect scan data including time, date, and approximate GPS location whenever your QR tag is scanned."},{title:"2. How We Use Your Information",content:"Your personal information is used solely to operate the ScanForSafe service — enabling finders to contact you and sending you real-time notifications. We do not sell, rent, or share your personal data with third parties for marketing purposes."},{title:"3. Data Shared When QR is Scanned",content:"When someone scans your QR code, they see only the information you have chosen to make visible in your profile settings. Your full phone number, email, and private details are protected by default — finders interact through our secure relay system."},{title:"4. Data Security",content:"We use industry-standard encryption (SSL/TLS) to protect your data in transit and at rest. Access to personal data is restricted to authorised team members only, and we conduct regular security audits of our systems."},{title:"5. Data Retention",content:"We retain your personal data for as long as your account is active. You may request deletion of your account and associated data at any time by contacting us at hello@scanforsafe.in. Scan logs are retained for 12 months for your reference."},{title:"6. Your Rights",content:"You have the right to access, correct, or delete your personal information at any time through your account dashboard or by contacting our support team. You may also opt out of non-essential communications at any time."},{title:"7. Contact Us",content:"If you have questions about this Privacy Policy or how we handle your data, please contact us at hello@scanforsafe.in or reach us on WhatsApp."}].map(({title:e,content:t})=>n.jsxs("div",{children:[n.jsx("h2",{className:"font-display font-bold text-lg text-dark-blue mb-2",children:e}),n.jsx("p",{className:"text-slate-600 text-sm leading-relaxed",children:t})]},e))})})]})}function H1(){return n.jsxs("div",{className:"pt-20 min-h-screen bg-light-bg",children:[n.jsxs("div",{className:"hero-gradient py-16 text-white text-center",children:[n.jsx("h1",{className:"font-display font-extrabold text-4xl mb-4",children:"Terms & Conditions"}),n.jsx("p",{className:"text-blue-200",children:"Last updated: January 2025"})]}),n.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:n.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8",children:[{title:"1. Acceptance of Terms",content:"By purchasing and using any ScanForSafe product or service, you agree to these Terms and Conditions. If you do not agree to these terms, please do not use our products or services."},{title:"2. Product Usage",content:"ScanForSafe QR tags are intended for legitimate personal use — protecting your own pets, vehicles, and personal belongings. You must not use our products to track individuals without their knowledge or consent, or for any unlawful purpose."},{title:"3. Account Responsibility",content:"You are responsible for maintaining the accuracy of your profile information and keeping your account credentials secure. You are responsible for all activity that occurs under your account and must notify us immediately of any unauthorised access."},{title:"4. Service Availability",content:"While we strive to maintain 24/7 availability, ScanForSafe does not guarantee uninterrupted service. Planned maintenance, unforeseen technical issues, or force majeure events may temporarily affect service availability."},{title:"5. Refund Policy",content:"We offer a 30-day satisfaction guarantee on all physical QR tag products. If you are unsatisfied with your purchase, contact us within 30 days of delivery for a full refund. Digital activation services are non-refundable once activated."},{title:"6. Limitation of Liability",content:"ScanForSafe provides tools to improve the chances of item recovery and emergency contact. We do not guarantee recovery of any lost item or animal, and shall not be liable for any direct, indirect, or consequential loss arising from use or inability to use our service."},{title:"7. Changes to Terms",content:"We reserve the right to update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms. We will notify registered users of material changes by email."},{title:"8. Contact",content:"For any questions regarding these Terms and Conditions, please contact us at hello@scanforsafe.in."}].map(({title:e,content:t})=>n.jsxs("div",{children:[n.jsx("h2",{className:"font-display font-bold text-lg text-dark-blue mb-2",children:e}),n.jsx("p",{className:"text-slate-600 text-sm leading-relaxed",children:t})]},e))})})]})}function $1({onClose:e}){const[t,r]=v.useState([{role:"assistant",content:"Hi! 👋 I'm ScanForSafe's AI assistant. Ask me anything — lost items, how QR tags work, rewards, or setup help!"}]),[i,s]=v.useState(""),[a,o]=v.useState(!1),l=v.useRef(null);v.useEffect(()=>{var c;(c=l.current)==null||c.scrollIntoView({behavior:"smooth"})},[t,a]);async function d(){var p,g;const c=i.trim();if(!c||a)return;s("");const x=[...t,{role:"user",content:c}];r(x),o(!0);try{const w=await(await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1e3,system:"You are a friendly and helpful AI assistant for ScanForSafe — a QR tag platform that helps people recover lost items (luggage, pets, vehicles, kids, seniors) using WhatsApp alerts, GPS tracking, and a finder reward system. Answer user questions about the product clearly and concisely. Keep responses short (2-4 sentences max). Use emojis sparingly.",messages:x.map(j=>({role:j.role,content:j.content}))})})).json(),m=((g=(p=w==null?void 0:w.content)==null?void 0:p[0])==null?void 0:g.text)??"Sorry, I could not get a response.";r(j=>[...j,{role:"assistant",content:m}])}catch{r(y=>[...y,{role:"assistant",content:"Something went wrong. Please try again."}])}finally{o(!1)}}return n.jsxs("div",{style:{position:"fixed",bottom:"100px",right:"24px",zIndex:60,width:"340px",maxHeight:"480px",borderRadius:"20px",background:"#fff",boxShadow:"0 24px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(37,99,235,0.12)",display:"flex",flexDirection:"column",overflow:"hidden",border:"1.5px solid #e2e8f0",animation:"popIn .25s cubic-bezier(.34,1.3,.64,1)"},children:[n.jsxs("div",{style:{background:"linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%)",padding:"14px 16px",display:"flex",alignItems:"center",gap:"10px"},children:[n.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx(Pu,{size:20,color:"#fff"})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontSize:14,fontWeight:700,color:"#fff",fontFamily:"'Outfit',sans-serif"},children:"ScanForSafe AI"}),n.jsxs("div",{style:{fontSize:11,color:"rgba(255,255,255,0.75)",display:"flex",alignItems:"center",gap:5},children:[n.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#4ade80",display:"inline-block"}}),"Online · Powered by Claude AI"]})]}),n.jsx("button",{onClick:e,style:{background:"rgba(255,255,255,0.15)",border:"none",borderRadius:"50%",width:30,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"background .2s"},onMouseEnter:c=>c.currentTarget.style.background="rgba(255,255,255,0.28)",onMouseLeave:c=>c.currentTarget.style.background="rgba(255,255,255,0.15)",children:n.jsx(Uu,{size:15,color:"#fff"})})]}),n.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"16px 14px",display:"flex",flexDirection:"column",gap:10,background:"#f8fafc"},children:[t.map((c,x)=>n.jsx("div",{style:{display:"flex",justifyContent:c.role==="user"?"flex-end":"flex-start"},children:n.jsx("div",{style:{maxWidth:"80%",padding:"10px 13px",borderRadius:c.role==="user"?"16px 16px 4px 16px":"16px 16px 16px 4px",background:c.role==="user"?"linear-gradient(135deg,#2563eb,#1d4ed8)":"#fff",color:c.role==="user"?"#fff":"#1e293b",fontSize:13,lineHeight:1.65,fontWeight:500,boxShadow:c.role==="user"?"0 4px 12px rgba(37,99,235,0.25)":"0 2px 8px rgba(0,0,0,0.07)",border:c.role==="assistant"?"1px solid #e2e8f0":"none"},children:c.content})},x)),a&&n.jsx("div",{style:{display:"flex",justifyContent:"flex-start"},children:n.jsx("div",{style:{padding:"10px 14px",borderRadius:"16px 16px 16px 4px",background:"#fff",border:"1px solid #e2e8f0",boxShadow:"0 2px 8px rgba(0,0,0,0.07)",display:"flex",gap:5,alignItems:"center"},children:[0,1,2].map(c=>n.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#93c5fd",display:"inline-block",animation:`bounce 1.2s ease-in-out ${c*.2}s infinite`}},c))})}),n.jsx("div",{ref:l})]}),n.jsxs("div",{style:{padding:"12px 14px",background:"#fff",borderTop:"1.5px solid #e2e8f0",display:"flex",gap:8,alignItems:"center"},children:[n.jsx("input",{value:i,onChange:c=>s(c.target.value),onKeyDown:c=>c.key==="Enter"&&d(),placeholder:"Ask anything…",style:{flex:1,border:"1.5px solid #e2e8f0",borderRadius:999,padding:"9px 14px",fontSize:13,fontFamily:"'Space Grotesk',sans-serif",fontWeight:500,color:"#0f172a",outline:"none",background:"#f8fafc",transition:"border-color .2s"},onFocus:c=>c.target.style.borderColor="#60a5fa",onBlur:c=>c.target.style.borderColor="#e2e8f0"}),n.jsx("button",{onClick:d,disabled:!i.trim()||a,style:{width:38,height:38,borderRadius:"50%",border:"none",background:i.trim()&&!a?"linear-gradient(135deg,#2563eb,#1d4ed8)":"#e2e8f0",display:"flex",alignItems:"center",justifyContent:"center",cursor:i.trim()&&!a?"pointer":"default",transition:"all .2s",flexShrink:0,boxShadow:i.trim()&&!a?"0 4px 12px rgba(37,99,235,0.3)":"none"},children:a?n.jsx(Xh,{size:16,color:"#94a3b8",style:{animation:"spin 1s linear infinite"}}):n.jsx(Eo,{size:15,color:i.trim()?"#fff":"#94a3b8"})})]})]})}function Y1(){const[e,t]=v.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap');
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes shine { 0%{left:-120%} 100%{left:120%} }
        @keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes popIn { from{opacity:0;transform:scale(0.88) translateY(12px)} to{opacity:1;transform:scale(1) translateY(0)} }
      `}),e&&n.jsx($1,{onClose:()=>t(!1)}),n.jsx("div",{style:{position:"fixed",bottom:"100px",right:"22px",width:"70px",height:"70px",borderRadius:"9999px",background:"rgba(37,211,102,0.18)",filter:"blur(18px)",zIndex:40}}),n.jsx("div",{style:{position:"fixed",bottom:"22px",right:"22px",width:"70px",height:"70px",borderRadius:"9999px",background:"rgba(37,99,235,0.18)",filter:"blur(18px)",zIndex:40}}),n.jsxs("a",{href:"https://wa.me/919999999999",target:"_blank",rel:"noreferrer","aria-label":"Chat on WhatsApp",style:{position:"fixed",bottom:"96px",right:"24px",zIndex:50,width:"62px",height:"62px",borderRadius:"9999px",background:"linear-gradient(135deg,#2ebd3a 0%,#249e30 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 30px rgba(37,211,102,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",textDecoration:"none",transition:"all 0.35s ease",overflow:"hidden",backdropFilter:"blur(10px)",animation:"float 3s ease-in-out infinite"},onMouseEnter:r=>r.currentTarget.style.transform="translateY(-4px) scale(1.08)",onMouseLeave:r=>r.currentTarget.style.transform="translateY(0) scale(1)",children:[n.jsx("div",{style:{position:"absolute",width:"120%",height:"40%",background:"linear-gradient(to right,transparent,rgba(255,255,255,0.4),transparent)",transform:"rotate(-25deg)",top:"-20%",left:"-120%",animation:"shine 3s infinite"}}),n.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"white",children:n.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),n.jsx("span",{style:{position:"absolute",top:"8px",right:"8px",width:"12px",height:"12px",borderRadius:"9999px",background:"#fff",border:"2px solid #2ebd3a"}})]}),n.jsxs("button",{onClick:()=>t(r=>!r),"aria-label":"Open AI Chat",style:{position:"fixed",bottom:"24px",right:"24px",zIndex:50,width:"62px",height:"62px",borderRadius:"9999px",background:e?"linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 100%)":"linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 30px rgba(37,99,235,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",border:"none",cursor:"pointer",transition:"all 0.35s ease",overflow:"hidden",backdropFilter:"blur(10px)",animation:e?"none":"float 3s ease-in-out infinite"},onMouseEnter:r=>r.currentTarget.style.transform="translateY(-4px) scale(1.08)",onMouseLeave:r=>r.currentTarget.style.transform="translateY(0) scale(1)",children:[n.jsx("div",{style:{position:"absolute",width:"120%",height:"40%",background:"linear-gradient(to right,transparent,rgba(255,255,255,0.4),transparent)",transform:"rotate(-25deg)",top:"-20%",left:"-120%",animation:"shine 3s infinite"}}),e?n.jsx(Uu,{size:26,color:"white",strokeWidth:2.5}):n.jsx(Pu,{size:28,color:"white",strokeWidth:2}),!e&&n.jsx("div",{style:{position:"absolute",top:"7px",right:"7px",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(Ou,{size:14,color:"#fff"})})]}),n.jsxs("div",{style:{position:"fixed",bottom:"180px",right:"18px",zIndex:45,background:"rgba(11,37,69,0.92)",color:"#fff",padding:"10px 14px",borderRadius:"9999px",display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",fontWeight:600,boxShadow:"0 8px 24px rgba(0,0,0,0.18)",backdropFilter:"blur(10px)"},children:["Need Help?",n.jsx(Iu,{size:16})]})]})}function V1(){const e=Sr(),[t,r]=v.useState(!1),i="https://docs.google.com/forms/d/e/1FAIpQLSd9A7Dl1-VyVYOpzuSFH1dy_vWdsYBxjFUqh6h3LpmicZwKRg/viewform",s=`https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${encodeURIComponent(i)}&color=064e3b&bgcolor=ffffff&margin=10`,a=[{num:"5K+",lbl:"Products Scanned"},{num:"98%",lbl:"Detection Accuracy"},{num:"200+",lbl:"Partner Institutes"}];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .qr-page {
          font-family: 'Space Grotesk', sans-serif;
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 100px 16px 40px; /* ← increased top padding to push away from navbar */
          background: #f8fafc;
          position: relative;
          overflow: hidden;
        }

        /* Subtle background texture */
        .qr-page::before {
          content: "";
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(22,163,74,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 100% 100%, rgba(6,78,59,0.05) 0%, transparent 60%);
          pointer-events: none;
        }

        /* ── CARD ── */
        .qr-card {
          position: relative;
          width: 100%; max-width: 440px;
          background: #ffffff;
          border-radius: 28px;
          border: 1px solid rgba(22,163,74,0.15);
          box-shadow:
            0 0 0 1px rgba(22,163,74,0.06),
            0 4px 6px rgba(0,0,0,0.03),
            0 20px 60px rgba(6,78,59,0.10),
            0 40px 80px rgba(0,0,0,0.05);
          padding: 36px 32px 32px;
          text-align: center;
          overflow: hidden;
        }

        /* top green bar accent */
        .qr-card::before {
          content: "";
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #064e3b, #16a34a, #4ade80, #16a34a, #064e3b);
        }

        /* corner dot decorations */
        .qr-card::after {
          content: "";
          position: absolute; bottom: -60px; right: -60px;
          width: 160px; height: 160px; border-radius: 50%;
          background: radial-gradient(circle, rgba(22,163,74,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── BADGE ── */
        .qr-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: #f0fdf4;
          border: 1px solid rgba(22,163,74,0.3);
          border-radius: 999px;
          padding: 5px 14px;
          margin-bottom: 20px;
        }
        .qr-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #16a34a;
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink {
          0%,100% { opacity:.4; transform:scale(.8); }
          50% { opacity:1; transform:scale(1.2); }
        }
        .qr-badge-text {
          font-size: 10px; font-weight: 800;
          letter-spacing: .2em; text-transform: uppercase;
          color: #15803d;
        }

        /* ── HEADING ── */
        .qr-title {
          font-family: 'Outfit', sans-serif;
          font-size: 26px; font-weight: 900;
          color: #0f172a; letter-spacing: -.03em;
          line-height: 1.15; margin-bottom: 8px;
        }
        .qr-title span {
          background: linear-gradient(130deg, #16a34a, #059669);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .qr-subtitle {
          font-size: 13px; color: #64748b; line-height: 1.6;
          margin-bottom: 28px; font-weight: 500;
        }

        /* ── QR FRAME ── */
        .qr-frame-wrap {
          position: relative;
          display: inline-flex;
          align-items: center; justify-content: center;
          margin-bottom: 28px;
        }

        /* removed outer glow ring ::before entirely */

        .qr-frame {
          position: relative;
          padding: 10px;
          background: #fff;
          border-radius: 0;          /* ← removed rounded corners */
          border: none;              /* ← removed border */
          box-shadow: none;          /* ← removed box shadow */
          transition: transform .4s cubic-bezier(.34,1.3,.64,1);
          cursor: pointer;
        }
        .qr-frame.hovered {
          transform: scale(1.03) translateY(-3px);
        }

        /* scan line animation over QR */
        .qr-scan-line {
          position: absolute;
          left: 10px; right: 10px; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(22,163,74,0.7), transparent);
          border-radius: 999px;
          animation: scanQR 2.8s ease-in-out infinite;
          pointer-events: none; z-index: 3;
        }
        @keyframes scanQR {
          0%   { top: 10px; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: .8; }
          100% { top: calc(100% - 10px); opacity: 0; }
        }

        /* corner finder-pattern accents */
        .qr-corner {
          position: absolute;
          width: 18px; height: 18px;
          border-color: #16a34a; border-style: solid;
          z-index: 4; pointer-events: none;
          transition: opacity .3s ease;
        }
        .qr-corner.tl { top: 6px; left: 6px; border-width: 2.5px 0 0 2.5px; border-radius: 0; }
        .qr-corner.tr { top: 6px; right: 6px; border-width: 2.5px 2.5px 0 0; border-radius: 0; }
        .qr-corner.bl { bottom: 6px; left: 6px; border-width: 0 0 2.5px 2.5px; border-radius: 0; }
        .qr-corner.br { bottom: 6px; right: 6px; border-width: 0 2.5px 2.5px 0; border-radius: 0; }

        .qr-img {
          display: block;
          width: 240px; height: 240px;
          border-radius: 0;          /* ← removed rounded corners on image */
          position: relative; z-index: 2;
        }

        /* ── DIVIDER ── */
        .qr-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(22,163,74,0.15), transparent);
          margin: 0 0 20px;
        }

        /* ── MINI STATS ── */
        .qr-stats {
          display: grid; grid-template-columns: repeat(3,1fr);
          gap: 10px; margin-bottom: 24px;
        }
        .qr-stat {
          background: #f8fffe;
          border: 1px solid rgba(22,163,74,0.14);
          border-radius: 14px; padding: 12px 8px;
          transition: all .22s ease;
        }
        .qr-stat:hover {
          background: #f0fdf4;
          border-color: rgba(22,163,74,0.3);
          transform: translateY(-2px);
        }
        .qr-stat-num {
          font-family: 'Outfit', sans-serif;
          font-size: 22px; font-weight: 900;
          color: #064e3b; line-height: 1;
          margin-bottom: 4px;
        }
        .qr-stat-lbl {
          font-size: 10px; font-weight: 600;
          color: #64748b; letter-spacing: .02em;
          line-height: 1.3;
        }

        /* ── CTA BUTTON ── */
        .qr-cta {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%; padding: 14px 24px;
          background: #064e3b; color: #fff;
          border-radius: 14px; text-decoration: none;
          font-family: 'Outfit', sans-serif;
          font-size: 15px; font-weight: 800;
          letter-spacing: -.01em;
          box-shadow: 0 4px 20px rgba(6,78,59,0.28), inset 0 1px 0 rgba(255,255,255,0.1);
          transition: all .25s ease;
          margin-bottom: 16px;
          position: relative; overflow: hidden;
        }
        .qr-cta::before {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(74,222,128,0.15), transparent);
          opacity: 0; transition: opacity .25s ease;
        }
        .qr-cta:hover {
          background: #022c22;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(6,78,59,0.36), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .qr-cta:hover::before { opacity: 1; }
        .qr-cta-arrow {
          font-size: 18px; transition: transform .25s ease;
        }
        .qr-cta:hover .qr-cta-arrow { transform: translateX(3px); }

        /* ── FOOTER TAG ── */
        .qr-footer {
          display: flex; align-items: center; justify-content: center; gap: 16px;
          flex-wrap: wrap;
        }
        .qr-footer-item {
          display: flex; align-items: center; gap: 5px;
          font-size: 11px; font-weight: 600; color: #94a3b8;
        }
        .qr-footer-item::before {
          content: "";
          width: 5px; height: 5px; border-radius: 50%;
          background: #16a34a; flex-shrink: 0;
        }
        .qr-footer-sep {
          width: 3px; height: 3px; border-radius: 50%;
          background: #e2e8f0;
        }
      `}),n.jsx("div",{className:"qr-page",children:n.jsxs("div",{className:"qr-card",children:[n.jsxs("div",{className:"qr-badge",children:[n.jsx("span",{className:"qr-badge-dot"}),n.jsx("span",{className:"qr-badge-text",children:"Smart Shield · Verified"})]}),n.jsxs("div",{className:"qr-title",children:[n.jsx("span",{children:"Scan"})," & Verify"]}),n.jsxs("div",{className:"qr-subtitle",children:["Scan the QR code below to access the official",n.jsx("br",{}),"safety verification form instantly."]}),n.jsx("div",{className:"qr-frame-wrap",children:n.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:n.jsxs("div",{className:`qr-frame ${t?"hovered":""}`,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[n.jsx("div",{className:"qr-scan-line"}),n.jsx("div",{className:"qr-corner tl"}),n.jsx("div",{className:"qr-corner tr"}),n.jsx("div",{className:"qr-corner bl"}),n.jsx("div",{className:"qr-corner br"}),n.jsx("img",{src:s,alt:"ScanForSafe QR Code",className:"qr-img"})]})})}),n.jsx("div",{className:"qr-divider"}),n.jsx("div",{className:"qr-stats",children:a.map((o,l)=>n.jsxs("div",{className:"qr-stat",children:[n.jsx("div",{className:"qr-stat-num",children:o.num}),n.jsx("div",{className:"qr-stat-lbl",children:o.lbl})]},l))}),n.jsxs("button",{onClick:()=>e("/preregister"),className:"qr-cta",style:{border:"none",cursor:"pointer"},children:["Open Verification Form",n.jsx("span",{className:"qr-cta-arrow",children:"→"})]}),n.jsxs("div",{className:"qr-footer",children:[n.jsx("span",{className:"qr-footer-item",children:"Secure"}),n.jsx("span",{className:"qr-footer-sep"}),n.jsx("span",{className:"qr-footer-item",children:"Instant"}),n.jsx("span",{className:"qr-footer-sep"}),n.jsx("span",{className:"qr-footer-item",children:"No App Required"})]})]})})]})}const Na=[{id:"whatsapp",bg:"#dcfce7",accent:"#16a34a",tagBg:"#bbf7d0",tagColor:"#14532d",emoji:"💬",tag:"Most Loved",title:"WhatsApp Alerts",desc:"Instant WhatsApp notification the moment anyone scans your QR — GPS location and direct call included.",pills:["Instant Alert","GPS Included","No App"]},{id:"call",bg:"#e0e7ff",accent:"#4338ca",tagBg:"#c7d2fe",tagColor:"#1e1b4b",emoji:"📞",tag:"Zero Friction",title:"One-Touch Call Connect",desc:"Finders call you in one tap — no app, no sign-up. Works even from a basic feature phone anywhere.",pills:["One Tap","No Sign-up","Any Phone"]},{id:"contacts",bg:"#ede9fe",accent:"#7c3aed",tagBg:"#ddd6fe",tagColor:"#3b0764",emoji:"👨‍👩‍👧",tag:"Family Ready",title:"5 Emergency Contacts",desc:"Add family, friends or your vet. If the first contact misses it, the next is notified automatically.",pills:["5 Contacts","Auto Fallback","5-Min Retry"]},{id:"gps",bg:"#ccfbf1",accent:"#0d9488",tagBg:"#99f6e4",tagColor:"#134e4a",emoji:"📍",tag:"Smart",title:"GPS on Every Scan",desc:"Each scan captures precise GPS coordinates and sends a live Maps link so you can locate your item fast.",pills:["Live GPS","Maps Link","Real-Time"]},{id:"setup",bg:"#fef3c7",accent:"#d97706",tagBg:"#fde68a",tagColor:"#78350f",emoji:"⚡",tag:"3 Minutes",title:"Instant Activation",desc:"Peel, stick and protected. Register your tag in under 3 minutes — zero technical knowledge required.",pills:["Under 3 Min","Guided Setup","Instant Live"]},{id:"privacy",bg:"#ffe4e6",accent:"#e11d48",tagBg:"#fecdd3",tagColor:"#881337",emoji:"🔒",tag:"Privacy First",title:"Your Info Stays Hidden",desc:"Your phone number is never on the tag. The QR links to a secure proxy — finders see only what you allow.",pills:["Encrypted","No Personal Data","GDPR Safe"]},{id:"history",bg:"#dbeafe",accent:"#2563eb",tagBg:"#bfdbfe",tagColor:"#1e3a8a",emoji:"🔔",tag:"Full Visibility",title:"Scan History & Logs",desc:"Dashboard logs every scan — time, location, device. Know exactly when and where your item was found.",pills:["Full Timeline","Device Info","Exportable"]},{id:"update",bg:"#ffedd5",accent:"#ea580c",tagBg:"#fed7aa",tagColor:"#7c2d12",emoji:"🔄",tag:"Always Current",title:"Update Info Anytime",desc:"Changed your number? Update in 30 seconds from any device. The physical tag never needs replacing.",pills:["Instant Update","Any Device","Reassignable"]}],q1=[{emoji:"🚗",label:"Vehicles",sub:"Road accidents & emergencies",bg:"#dcfce7",accent:"#16a34a",textColor:"#14532d",border:"#4ade80",stat:"2yr QR validity"},{emoji:"🧳",label:"Luggage",sub:"Airport & travel recovery",bg:"#dbeafe",accent:"#2563eb",textColor:"#1e3a8a",border:"#60a5fa",stat:"Scan anywhere"},{emoji:"🐾",label:"Pets",sub:"Lost pet QR tag recovery",bg:"#fef3c7",accent:"#d97706",textColor:"#78350f",border:"#fbbf24",stat:"24/7 alerts"},{emoji:"🎒",label:"School Kids",sub:"Bus transit child safety",bg:"#ede9fe",accent:"#7c3aed",textColor:"#3b0764",border:"#a78bfa",stat:"Parent notified"},{emoji:"👴",label:"Senior Citizens",sub:"Medical emergency response",bg:"#ffe4e6",accent:"#e11d48",textColor:"#881337",border:"#fca5a5",stat:"SOS workflow"},{emoji:"💛",label:"Special Needs",sub:"Community assisted return",bg:"#ccfbf1",accent:"#0d9488",textColor:"#134e4a",border:"#5eead4",stat:"Care team alerts"},{emoji:"🔍",label:"Missing Vehicle",sub:"Community alert & recovery",bg:"#ffedd5",accent:"#ea580c",textColor:"#7c2d12",border:"#fb923c",stat:"Anti-fraud verified"},{emoji:"👨‍👩‍👧‍👦",label:"Family Safety",sub:"Daily peace of mind",bg:"#e0e7ff",accent:"#4338ca",textColor:"#1e1b4b",border:"#818cf8",stat:"Up to 5 members"}],Cs=[{id:"scan",delay:0,duration:1e3,label:"QR Scanned",sub:"Someone scanned your tag",icon:"📷",color:"#0ea5e9"},{id:"gps",delay:1200,duration:1200,label:"GPS Captured",sub:"Location: 13.0827° N, 80.2707° E",icon:"📍",color:"#f59e0b"},{id:"send",delay:2600,duration:1e3,label:"Sending WhatsApp…",sub:"Routing to +91-98XXX-XXXXX",icon:"💬",color:"#16a34a"},{id:"deliver",delay:3800,duration:800,label:"Delivered ✓✓",sub:"Message delivered successfully",icon:"✅",color:"#16a34a"},{id:"read",delay:4800,duration:600,label:"Read ✓✓",sub:"Owner opened the WhatsApp message",icon:"👁️",color:"#2563eb"},{id:"call",delay:5600,duration:800,label:"Owner Calling Back",sub:"Direct call connected to finder",icon:"📞",color:"#7c3aed"}],Fr={header:"🔔 *ScanForSafe Alert*",lines:['🏷️ Your item *"Black Laptop Bag"* was scanned.',"📍 Location: *Egmore, Chennai*","🗺️ Maps: maps.google.com/?q=13.08,80.27","⏰ Time: *Just Now*","📱 Device: Android · Chrome","","📞 Tap to call the finder instantly →"]};function Q1(){const[e,t]=v.useState(!1),[r,i]=v.useState([]),[s,a]=v.useState(null),[o,l]=v.useState(!1),[d,c]=v.useState([]),[x,p]=v.useState(!1),g=v.useRef([]),y=()=>{g.current.forEach(clearTimeout),g.current=[],t(!1),i([]),a(null),l(!1),c([]),p(!1)},w=()=>{y(),t(!0),Cs.forEach((m,j)=>{const f=setTimeout(()=>{a(m.id),p(!0),setTimeout(()=>p(!1),400)},m.delay),u=setTimeout(()=>{if(i(h=>[...h,m.id]),j===Cs.length-1){a(null),l(!0),Fr.lines.forEach((b,S)=>{const C=setTimeout(()=>{c(z=>[...z,b])},S*280);g.current.push(C)});const h=setTimeout(()=>t(!1),Fr.lines.length*280+500);g.current.push(h)}},m.delay+m.duration);g.current.push(f,u)})};return n.jsxs("div",{style:{width:260,flexShrink:0},children:[n.jsxs("div",{style:{width:260,height:520,background:"#1e293b",borderRadius:38,padding:10,border:"4px solid #334155",boxShadow:"0 24px 60px rgba(0,0,0,0.28)",position:"relative"},children:[n.jsx("div",{style:{position:"absolute",top:15,left:"50%",transform:"translateX(-50%)",width:75,height:18,background:"#000",borderRadius:12,zIndex:10}}),n.jsxs("div",{style:{width:"100%",height:"100%",borderRadius:30,overflow:"hidden",background:"#ECE5DD",display:"flex",flexDirection:"column",border:"2px solid #000"},children:[n.jsxs("div",{style:{background:"#075E54",padding:"28px 12px 10px",display:"flex",alignItems:"center",gap:8,flexShrink:0},children:[n.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16},children:"🔔"}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:12,fontWeight:800,color:"#fff"},children:"ScanForSafe Bot"}),n.jsx("div",{style:{fontSize:9,color:"#a7f3d0"},children:e?"● typing...":"online"})]})]}),n.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"10px 8px",display:"flex",flexDirection:"column",gap:6},children:[!o&&!e&&r.length===0&&n.jsxs("div",{style:{textAlign:"center",marginTop:60},children:[n.jsx("div",{style:{fontSize:28,marginBottom:8},children:"💬"}),n.jsx("div",{style:{fontSize:11,color:"#64748b",fontWeight:600},children:'Tap "Simulate Alert"'}),n.jsx("div",{style:{fontSize:10,color:"#94a3b8"},children:"See the real-time flow"})]}),(e||r.length>0)&&!o&&n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5,marginBottom:4},children:Cs.map(m=>{const j=r.includes(m.id),f=s===m.id;return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"5px 8px",borderRadius:8,background:j?"#dcfce7":f?"#fff":"rgba(255,255,255,0.4)",border:`1px solid ${j?"#86efac":f?m.color:"transparent"}`,transition:"all 0.3s ease",transform:f?"scale(1.02)":"scale(1)"},children:[n.jsx("span",{style:{fontSize:14},children:j?"✅":f?m.icon:"⬜"}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:9.5,fontWeight:800,color:j?"#15803d":f?m.color:"#94a3b8"},children:m.label}),(j||f)&&n.jsx("div",{style:{fontSize:8.5,color:"#64748b"},children:m.sub})]}),f&&n.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:2},children:[0,1,2].map(u=>n.jsx("div",{style:{width:4,height:4,borderRadius:"50%",background:m.color,animation:`bounce 0.8s ease ${u*.15}s infinite`}},u))})]},m.id)})}),o&&n.jsxs("div",{style:{background:"#fff",borderRadius:"12px 12px 12px 3px",padding:"10px 12px",maxWidth:"85%",boxShadow:"0 2px 6px rgba(0,0,0,0.1)",border:"1px solid #d1fae5",animation:"fadeUp 0.4s ease"},children:[n.jsx("div",{style:{fontSize:9.5,fontWeight:900,color:"#075E54",marginBottom:5},children:Fr.header}),d.map((m,j)=>n.jsx("div",{style:{fontSize:9,color:m===""?void 0:"#1a1a1a",lineHeight:1.7,minHeight:m===""?6:void 0,animation:"fadeUp 0.25s ease"},children:m},j)),d.length===Fr.lines.length&&n.jsx("div",{style:{marginTop:6,background:"#25D366",borderRadius:6,padding:"4px 8px",textAlign:"center",fontSize:8.5,fontWeight:800,color:"#fff",animation:"fadeUp 0.3s ease"},children:"📞 Call Finder Now"}),n.jsxs("div",{style:{textAlign:"right",fontSize:8,color:"#94a3b8",marginTop:3},children:[d.length===Fr.lines.length?"✓✓":"✓"," Just now"]})]})]}),n.jsxs("div",{style:{background:"#f0f0f0",padding:"6px 8px",display:"flex",alignItems:"center",gap:6,flexShrink:0},children:[n.jsx("div",{style:{flex:1,background:"#fff",borderRadius:20,padding:"5px 10px",fontSize:9,color:"#aaa"},children:"Type a message"}),n.jsx("div",{style:{width:24,height:24,borderRadius:"50%",background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11},children:"🎤"})]})]}),n.jsx("div",{style:{position:"absolute",left:-4,top:85,width:3,height:26,background:"#475569",borderRadius:"3px 0 0 3px"}}),n.jsx("div",{style:{position:"absolute",left:-4,top:120,width:3,height:36,background:"#475569",borderRadius:"3px 0 0 3px"}}),n.jsx("div",{style:{position:"absolute",right:-4,top:110,width:3,height:44,background:"#475569",borderRadius:"0 3px 3px 0"}})]}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[n.jsx("button",{onClick:w,disabled:e,style:{flex:1,padding:"10px 0",background:e?"#dcfce7":"linear-gradient(135deg,#16a34a,#22c55e)",color:e?"#15803d":"#fff",border:"none",borderRadius:10,fontSize:11.5,fontWeight:800,cursor:e?"not-allowed":"pointer",transition:"all 0.2s ease",boxShadow:e?"none":"0 4px 14px #16a34a50"},children:e?"⏳ Sending…":"▶ Simulate Alert"}),(r.length>0||o)&&n.jsx("button",{onClick:y,style:{padding:"10px 14px",background:"#f1f5f9",color:"#64748b",border:"1.5px solid #e2e8f0",borderRadius:10,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]}),n.jsxs("div",{style:{background:"#fff",border:"1.5px solid #e2e8f0",borderRadius:12,padding:"10px 16px",textAlign:"center",marginTop:8},children:[n.jsx("div",{style:{fontSize:9.5,color:"#94a3b8",fontWeight:600,letterSpacing:".07em",textTransform:"uppercase",marginBottom:3},children:"Live Simulation"}),n.jsx("div",{style:{fontSize:13.5,fontWeight:800,color:"#0B2545"},children:"💬 WhatsApp Alerts"})]}),n.jsx("style",{children:`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-3px); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}function G1({activeId:e}){const t=Na.find(r=>r.id===e);return n.jsxs("div",{style:{width:260,flexShrink:0},children:[n.jsxs("div",{style:{width:260,height:520,background:"#1e293b",borderRadius:38,padding:10,border:"4px solid #334155",boxShadow:"0 24px 60px rgba(0,0,0,0.22)",position:"relative"},children:[n.jsx("div",{style:{position:"absolute",top:15,left:"50%",transform:"translateX(-50%)",width:75,height:18,background:"#000",borderRadius:12,zIndex:10}}),n.jsxs("div",{style:{width:"100%",height:"100%",borderRadius:30,overflow:"hidden",background:(t==null?void 0:t.bg)||"#f8fafc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,textAlign:"center",border:"2px solid #000"},children:[n.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,marginBottom:16,boxShadow:`0 8px 24px ${t==null?void 0:t.accent}30`,border:`2px solid ${t==null?void 0:t.accent}40`},children:t==null?void 0:t.emoji}),n.jsx("div",{style:{fontSize:14,fontWeight:800,color:t==null?void 0:t.tagColor,marginBottom:6},children:t==null?void 0:t.title}),n.jsx("div",{style:{fontSize:11,color:"#64748b",lineHeight:1.6,marginBottom:16},children:t==null?void 0:t.desc}),n.jsxs("div",{style:{width:"100%",background:"#fff",borderRadius:10,padding:"8px 12px",border:`1.5px solid ${t==null?void 0:t.accent}30`,display:"flex",alignItems:"center",gap:8,boxShadow:"0 2px 10px rgba(0,0,0,0.06)"},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:t==null?void 0:t.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0},children:t==null?void 0:t.emoji}),n.jsxs("div",{style:{textAlign:"left"},children:[n.jsx("div",{style:{fontSize:9.5,fontWeight:800,color:"#0f172a"},children:"ScanForSafe Alert"}),n.jsx("div",{style:{fontSize:8.5,color:"#64748b"},children:"Tap to view details →"})]})]}),n.jsx("div",{style:{marginTop:12,display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center"},children:t==null?void 0:t.pills.map(r=>n.jsx("span",{style:{fontSize:9,fontWeight:700,padding:"3px 8px",borderRadius:99,background:"#fff",color:t==null?void 0:t.tagColor,border:`1px solid ${t==null?void 0:t.accent}30`},children:r},r))})]}),n.jsx("div",{style:{position:"absolute",left:-4,top:85,width:3,height:26,background:"#475569",borderRadius:"3px 0 0 3px"}}),n.jsx("div",{style:{position:"absolute",left:-4,top:120,width:3,height:36,background:"#475569",borderRadius:"3px 0 0 3px"}}),n.jsx("div",{style:{position:"absolute",right:-4,top:110,width:3,height:44,background:"#475569",borderRadius:"0 3px 3px 0"}})]}),n.jsxs("div",{style:{background:"#fff",border:"1.5px solid #e2e8f0",borderRadius:12,padding:"10px 16px",textAlign:"center",marginTop:8},children:[n.jsx("div",{style:{fontSize:9.5,color:"#94a3b8",fontWeight:600,letterSpacing:".07em",textTransform:"uppercase",marginBottom:3},children:"Previewing"}),n.jsxs("div",{style:{fontSize:13.5,fontWeight:800,color:"#0B2545"},children:[t==null?void 0:t.emoji," ",t==null?void 0:t.title]})]})]})}function X1({f:e,active:t,onClick:r}){return n.jsxs("div",{onClick:r,style:{borderRadius:16,padding:"18px 16px",background:t?e.accent:"#fff",border:`1.5px solid ${t?e.accent:e.bg}`,cursor:"pointer",transition:"all 0.25s ease",transform:t?"translateY(-4px)":"none",boxShadow:t?`0 12px 32px ${e.accent}30`:"0 2px 8px rgba(0,0,0,0.04)"},children:[n.jsx("span",{style:{display:"inline-block",background:t?"rgba(255,255,255,0.2)":e.tagBg,color:t?"#fff":e.tagColor,fontSize:10,fontWeight:700,padding:"3px 9px",borderRadius:99,letterSpacing:".06em",textTransform:"uppercase",marginBottom:10},children:e.tag}),n.jsx("div",{style:{fontSize:28,marginBottom:8},children:e.emoji}),n.jsx("h3",{style:{fontSize:14.5,fontWeight:800,margin:"0 0 6px",color:t?"#fff":"#0B2545"},children:e.title}),n.jsx("p",{style:{fontSize:12.5,lineHeight:1.6,margin:"0 0 12px",color:t?"rgba(255,255,255,0.85)":"#64748b"},children:e.desc}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:e.pills.map(i=>n.jsx("span",{style:{fontSize:10,fontWeight:700,padding:"3px 9px",borderRadius:99,background:t?"rgba(255,255,255,0.18)":e.bg,color:t?"#fff":e.tagColor,border:`1px solid ${t?"rgba(255,255,255,0.25)":e.tagBg}`},children:i},i))})]})}function K1({uc:e,active:t,onClick:r}){return n.jsxs("div",{onClick:r,style:{borderRadius:16,padding:"20px 14px 18px",background:t?e.accent:e.bg,border:`2.5px solid ${t?e.accent:e.border}`,textAlign:"center",cursor:"pointer",transition:"all 0.25s ease",transform:t?"translateY(-5px)":"none",boxShadow:t?`0 14px 32px ${e.accent}35`:`0 3px 12px ${e.accent}18, inset 0 0 0 1px ${e.border}40`},children:[n.jsx("div",{style:{fontSize:34,marginBottom:8,transform:t?"scale(1.18)":"scale(1)",transition:"transform 0.25s ease"},children:e.emoji}),n.jsx("div",{style:{fontSize:13.5,fontWeight:800,color:t?"#fff":e.textColor,marginBottom:4},children:e.label}),n.jsx("div",{style:{fontSize:10.5,color:t?"rgba(255,255,255,0.78)":"#64748b",marginBottom:10,lineHeight:1.4},children:e.sub}),n.jsx("span",{style:{display:"inline-block",background:t?"rgba(255,255,255,0.22)":"#fff",border:`1.5px solid ${t?"rgba(255,255,255,0.35)":e.border}`,borderRadius:99,padding:"3px 10px",fontSize:9,fontWeight:800,letterSpacing:".06em",textTransform:"uppercase",color:t?"#fff":e.textColor},children:e.stat})]})}function rd({badge:e,badgeBg:t,badgeBorder:r,badgeColor:i,title:s,highlight:a,highlightGradient:o,desc:l}){return n.jsxs("div",{style:{textAlign:"center",marginBottom:52},children:[n.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:t,border:`1.5px solid ${r}`,borderRadius:99,padding:"7px 20px",fontSize:11.5,fontWeight:800,color:i,letterSpacing:".06em",textTransform:"uppercase",marginBottom:16},children:e}),n.jsxs("h2",{style:{fontSize:"clamp(1.8rem, 3.8vw, 3rem)",fontWeight:900,color:"#0B2545",letterSpacing:"-.04em",lineHeight:1.1,margin:"0 0 14px",fontFamily:"'Outfit', sans-serif"},children:[s," ",n.jsx("span",{style:{background:o,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:a})]}),n.jsx("p",{style:{fontSize:15,color:"#4b7a62",maxWidth:500,margin:"0 auto",lineHeight:1.8},children:l})]})}function Z1(){const[e,t]=v.useState("whatsapp"),[r,i]=v.useState(0);Na.find(a=>a.id===e);const s=e==="whatsapp";return n.jsxs("section",{style:{background:"#f8fafc",padding:"90px 24px 96px"},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&display=swap');
        * { box-sizing: border-box; }
        .feat-layout { display: grid; grid-template-columns: 1fr 280px; gap: 36px; align-items: start; }
        .feat-grid   { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .uc-grid     { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .phone-sticky { position: sticky; top: 90px; display: flex; flex-direction: column; align-items: center; gap: 0; }
        @media (max-width: 1024px) {
          .feat-layout { grid-template-columns: 1fr; }
          .phone-sticky { position: relative; top: 0; margin: 0 auto 32px; }
          .uc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .feat-grid { grid-template-columns: 1fr; }
          .uc-grid   { grid-template-columns: 1fr; }
        }
      `}),n.jsxs("div",{style:{maxWidth:1140,margin:"0 auto"},children:[n.jsx(rd,{badge:"✦ Platform Features",badgeBg:"#dcfce7",badgeBorder:"#4ade80",badgeColor:"#14532d",title:"Powerful Features for",highlight:"Peace of Mind",highlightGradient:"linear-gradient(130deg,#16a34a,#059669)",desc:"Everything you need — no app needed on the finder's end. Click any card to preview."}),n.jsxs("div",{className:"feat-layout",style:{marginBottom:88},children:[n.jsx("div",{className:"feat-grid",children:Na.map(a=>n.jsx(X1,{f:a,active:e===a.id,onClick:()=>t(a.id)},a.id))}),n.jsx("div",{className:"phone-sticky",children:s?n.jsx(Q1,{}):n.jsx(G1,{activeId:e})})]}),n.jsx(rd,{badge:"🛡️ Protection Categories",badgeBg:"#ffedd5",badgeBorder:"#fb923c",badgeColor:"#7c2d12",title:"8 Safety Categories.",highlight:"One Smart Platform.",highlightGradient:"linear-gradient(130deg,#ea580c,#dc2626)",desc:"From lost luggage to road emergencies — ScanForSafe covers every real-world scenario."}),n.jsx("div",{className:"uc-grid",style:{marginBottom:64},children:q1.map((a,o)=>n.jsx(K1,{uc:a,active:r===o,onClick:()=>i(r===o?-1:o)},o))}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"10px 20px",marginTop:16,paddingTop:28,borderTop:"1.5px solid #e2e8f0"},children:["🔐 ISO-grade data privacy","⚡ Works 24/7 — even offline","📱 Any smartphone camera","🔒 End-to-end encrypted","🇮🇳 Made for India"].map(a=>n.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,background:"#fff",border:"1.5px solid #e2e8f0",borderRadius:99,padding:"7px 18px",fontSize:12.5,fontWeight:700,color:"#334155",transition:"all .2s ease",cursor:"default"},onMouseEnter:o=>{o.currentTarget.style.borderColor="#86efac",o.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:o=>{o.currentTarget.style.borderColor="#e2e8f0",o.currentTarget.style.transform="none"},children:a},a))})]})]})}function J1(){return n.jsx("div",{className:"pt-20",children:n.jsx(Z1,{})})}const $u="/assets/bike1-BFtpROlE.png",Yu="/assets/car1-BPYYefFG.png",Vu="/assets/dog-BDzmYqxX.png",qu="/assets/luggage1-DsewfntL.png",Qu="/assets/senior-BytNIsoV.png",Gu="/assets/kid-IKOOf_1f.png",eg={green:{accent:"#2ebd3a",gradient:"linear-gradient(135deg, #2ebd3a, #0B2545)",soft:"#f8fafc",border:"#cbd5e1",active:"#2ebd3a"},orange:{accent:"#ea580c",gradient:"linear-gradient(135deg, #ea580c, #c2410c)",soft:"#fff7ed",border:"#cbd5e1",active:"#ea580c"},purple:{accent:"#7c3aed",gradient:"linear-gradient(135deg, #7c3aed, #6d28d9)",soft:"#faf5ff",border:"#cbd5e1",active:"#7c3aed"},red:{accent:"#dc2626",gradient:"linear-gradient(135deg, #dc2626, #b91c1c)",soft:"#fef2f2",border:"#cbd5e1",active:"#dc2626"},blue:{accent:"#2563eb",gradient:"linear-gradient(135deg, #2563eb, #1d4ed8)",soft:"#eff6ff",border:"#cbd5e1",active:"#2563eb"}},tg=[{id:"car",icon:Ni,image:Yu,title:"Car Protection",subtitle:"Vehicle Security",desc:"Weatherproof QR protection for cars with instant emergency alerts and GPS tracking.",features:[{label:"Weatherproof",icon:Fh},{label:"Live Alerts",icon:he},{label:"GPS Tracking",icon:ze},{label:"24/7 Monitor",icon:Pe}],price:499,original:999,discount:"50% OFF",color:"green",rating:4.9,reviews:2341},{id:"bike",icon:No,image:$u,title:"Bike Security",subtitle:"Two Wheeler Shield",desc:"Scratch resistant QR protection with owner privacy and instant finder alerts.",features:[{label:"Scratch Resistant",icon:$e},{label:"Instant Notify",icon:he},{label:"Owner Privacy",icon:xn},{label:"Quick Connect",icon:Gh}],price:499,original:999,discount:"50% OFF",color:"green",popular:!0,rating:4.8,reviews:3892},{id:"pet",icon:Au,image:Vu,title:"Pet Safety Tag",subtitle:"Pet Guardian",desc:"Smart pet QR with collar support, emergency contact and GPS location sharing.",features:[{label:"Collar Friendly",icon:ei},{label:"GPS Location",icon:Fu},{label:"Emergency Contact",icon:Wt},{label:"Vet Info",icon:Yh}],price:499,original:999,discount:"50% OFF",color:"orange",rating:4.9,reviews:1876},{id:"luggage",icon:Wu,image:qu,title:"Luggage Guard",subtitle:"Travel Protection",desc:"Strong adhesive QR luggage tags for fast recovery and secure travel support.",features:[{label:"Multi Luggage",icon:qh},{label:"Strong Adhesive",icon:$e},{label:"Travel Friendly",icon:Jh},{label:"Quick Recovery",icon:ka}],price:499,original:999,discount:"50% OFF",color:"purple",rating:4.7,reviews:1243},{id:"senior",icon:o1,image:Qu,title:"Senior Safety",subtitle:"Emergency Wrist Band",desc:"Senior citizen wrist QR support with medical info and emergency family alerts.",features:[{label:"Medical Info",icon:$e},{label:"Emergency Alerts",icon:he},{label:"Family Contact",icon:Wt},{label:"Live Tracking",icon:ze}],price:699,original:1299,discount:"46% OFF",color:"red",rating:4.9,reviews:987},{id:"child",icon:Co,image:Gu,title:"Child Safety",subtitle:"Kids Guardian",desc:"Child QR safety patch with emergency contact and quick scan protection.",features:[{label:"QR Patch",icon:$e},{label:"Emergency Alert",icon:he},{label:"Parental Contact",icon:Wt},{label:"Quick Scan",icon:ka}],price:699,original:1299,discount:"46% OFF",color:"blue",rating:5,reviews:2108}],rg=[{icon:Pe,title:"Secure Checkout",sub:"100% Safe & Encrypted",color:"#2ebd3a"},{icon:Sa,title:"Free Shipping",sub:"Pan India Delivery",color:"#2563eb"},{icon:r1,title:"30-Day Returns",sub:"Easy Refund Policy",color:"#7c3aed"},{icon:Hh,title:"24/7 Support",sub:"Always Here To Help",color:"#ea580c"}];function ng({product:e}){const[t,r]=v.useState(1),[i,s]=v.useState(!1),a=eg[e.color],o=e.icon;return n.jsxs("div",{onClick:()=>s(!i),style:{background:"#fff",borderRadius:20,overflow:"visible",border:i?`2px solid ${a.active}`:"1px solid #cbd5e1",boxShadow:i?"0 12px 28px rgba(0,0,0,0.08)":"0 4px 16px rgba(0,0,0,0.03)",position:"relative",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",transform:i?"translateY(-4px)":"translateY(0px)",padding:"20px 16px 16px 16px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e.popular&&n.jsxs("div",{style:{position:"absolute",top:-12,left:20,background:a.gradient,color:"#fff",fontSize:10,fontWeight:800,padding:"4px 12px",borderRadius:20,zIndex:10,display:"flex",alignItems:"center",gap:4,letterSpacing:"0.5px"},children:[n.jsx(Je,{size:10,fill:"#fff"}),"MOST POPULAR"]}),n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:12,background:a.gradient,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx(o,{color:"#fff",size:20})}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700},children:[n.jsx(_u,{size:12,fill:"#f59e0b",color:"#f59e0b"}),n.jsx("span",{style:{color:"#0B2545"},children:e.rating}),n.jsxs("span",{style:{color:"#9ca3af",fontWeight:400},children:["| ",e.reviews.toLocaleString()," reviews"]})]})]}),n.jsx("h3",{style:{fontSize:18,fontWeight:800,color:"#0B2545",margin:"0 0 2px 0"},children:e.title}),n.jsx("p",{style:{color:a.accent,fontWeight:700,fontSize:12,margin:"0 0 12px 0"},children:e.subtitle}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px 1fr",gap:12,alignItems:"start",marginBottom:14},children:[n.jsx("div",{style:{background:"#f8fafc",borderRadius:14,height:120,display:"flex",alignItems:"center",justifyContent:"center",padding:8,border:"1px solid #f1f5f9"},children:n.jsx("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%",objectFit:"contain"}})}),n.jsxs("div",{children:[n.jsx("p",{style:{fontSize:11,color:"#6b7280",lineHeight:1.5,margin:"0 0 10px 0"},children:e.desc}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:6},children:e.features.map(({label:l,icon:d})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx(d,{size:13,color:a.accent,style:{flexShrink:0}}),n.jsx("span",{style:{fontSize:11,fontWeight:500,color:"#374151"},children:l})]},l))})]})]})]}),n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6,marginBottom:12},children:[n.jsxs("span",{style:{fontSize:24,fontWeight:900,color:a.accent},children:["₹",e.price]}),n.jsxs("span",{style:{textDecoration:"line-through",color:"#9ca3af",fontSize:14,fontWeight:500},children:["₹",e.original]}),n.jsx("span",{style:{color:a.accent,fontSize:11,fontWeight:700,marginLeft:"auto",background:a.soft,padding:"2px 8px",borderRadius:12},children:e.discount})]}),n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",border:"1px solid #e2e8f0",borderRadius:10,overflow:"hidden",height:36},children:[n.jsx("button",{onClick:l=>{l.stopPropagation(),r(d=>Math.max(1,d-1))},style:nd,children:n.jsx(Zh,{size:12})}),n.jsx("div",{style:{width:28,textAlign:"center",fontWeight:700,fontSize:13,color:"#0B2545"},children:t}),n.jsx("button",{onClick:l=>{l.stopPropagation(),r(d=>d+1)},style:nd,children:n.jsx(e1,{size:12})})]}),n.jsxs("button",{onClick:l=>l.stopPropagation(),style:{flex:1,height:36,border:"none",borderRadius:10,background:a.gradient,color:"#fff",fontWeight:700,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center",gap:6,cursor:"pointer"},children:[n.jsx(i1,{size:13}),"Buy Now"]})]})]})]})}const nd={width:32,height:"100%",border:"none",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#6b7280"};function ig(){return n.jsxs("section",{style:{padding:"60px 0",background:"linear-gradient(180deg, #f4fbf7 0%, #ffffff 100%)",fontFamily:"'DM Sans', system-ui, sans-serif"},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
      `}),n.jsxs("div",{style:{width:"100%",maxWidth:1200,margin:"0 auto",padding:"0 20px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:44},children:[n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid #e8f8eb",borderRadius:30,padding:"6px 16px",marginBottom:16,boxShadow:"0 4px 12px rgba(0,0,0,0.03)"},children:[n.jsx(Bu,{size:14,color:"#2ebd3a"}),n.jsx("span",{style:{fontWeight:800,fontSize:11,color:"#0B2545",letterSpacing:"0.5px"},children:"OUR PRODUCTS"})]}),n.jsxs("h2",{style:{fontSize:44,lineHeight:1.1,fontWeight:900,marginBottom:12,color:"#0B2545",letterSpacing:"-1px"},children:["Choose Your ",n.jsx("span",{style:{color:"#2ebd3a"},children:"Protection Plan"})]}),n.jsx("p",{style:{maxWidth:640,margin:"0 auto",color:"#4b5563",lineHeight:1.6,fontSize:15},children:"Smart QR solutions for vehicles, pets, luggage, children and senior citizens with instant emergency communication and recovery support."})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:24,marginBottom:44},children:tg.map(e=>n.jsx(ng,{product:e},e.id))}),n.jsx("div",{style:{background:"#fff",borderRadius:16,padding:"20px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:16,boxShadow:"0 4px 20px rgba(0,0,0,0.04)",border:"1px solid #f1f5f9"},children:rg.map(({icon:e,title:t,sub:r,color:i})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,justifyContent:"center"},children:[n.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx(e,{size:20,color:i})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:800,fontSize:14,color:"#0B2545"},children:t}),n.jsx("div",{style:{color:"#6b7280",fontSize:12},children:r})]})]},t))})]})]})}function sg(){return n.jsx("div",{className:"pt-20 bg-[#f8fbff]",children:n.jsx(ig,{})})}const ag=[{icon:No,title:"Motorcycles & Bikes",qrSize:"3.5 cm QR Sticker",description:"Weather-proof 3.5cm QR sticker placed on the fuel tank or handlebar. If your bike is found, the finder scans and you get an instant alert with GPS location.",cardBg:"#EAF3DE",iconBg:"#2ebd3a",tag:"QR Sticker",tagBg:"#C0DD97",tagColor:"#27500A",titleColor:"#27500A",subColor:"#3B6D11",descColor:"#3B6D11",image:$u,badge:"🏍️",qrPosition:"On fuel tank / handlebar",features:["Waterproof","Tamper-evident","UV-resistant"],stats:[{icon:Lu,value:"< 3s",label:"Alert"},{icon:ze,value:"Live",label:"GPS"},{icon:he,value:"24/7",label:"Active"}]},{icon:Wu,title:"Bags & Luggage",qrSize:"3.5 cm QR Sticker",description:"Durable sticker or tag attached to your bag strap. Perfect for travel bags, school bags, and laptop bags. Works even in low-light.",cardBg:"#E6F1FB",iconBg:"#0B2545",tag:"QR Tag",tagBg:"#B5D4F4",tagColor:"#0C447C",titleColor:"#0C447C",subColor:"#185FA5",descColor:"#185FA5",image:qu,badge:"🎒",qrPosition:"On bag strap / handle",features:["Airport-ready","Low-light scan","Flexible tag"],stats:[{icon:jt,value:"NFC",label:"+QR"},{icon:ze,value:"Global",label:"Scan"},{icon:he,value:"Instant",label:"Alert"}]},{icon:Au,title:"Dogs, Cats & Pets",qrSize:"Collar QR Tag",description:"Attach a lightweight QR tag to your pet's collar. If they wander, anyone can scan it and you'll receive an instant notification with their location.",cardBg:"#EAF3DE",iconBg:"#2ebd3a",tag:"Collar Tag",tagBg:"#C0DD97",tagColor:"#27500A",titleColor:"#27500A",subColor:"#3B6D11",descColor:"#3B6D11",image:Vu,badge:"🐕",qrPosition:"On pet collar",features:["Lightweight","Weatherproof","Any camera"],stats:[{icon:ze,value:"GPS",label:"Per scan"},{icon:he,value:"Auto",label:"WhatsApp"},{icon:Je,value:"5+",label:"Contacts"}]},{icon:Co,title:"Children Safety",qrSize:"Hand Band / Shoulder",description:"Wearable QR wristband or shoulder tag for your child. If they get separated in crowded places, a good samaritan scans the band and you get alerted instantly.",cardBg:"#EEEDFE",iconBg:"#0B2545",tag:"Hand Band",tagBg:"#CECBF6",tagColor:"#26215C",titleColor:"#26215C",subColor:"#534AB7",descColor:"#534AB7",image:Gu,badge:"🧒",qrPosition:"On hand band / shoulder",features:["Soft band","No app needed","Instant alert"],stats:[{icon:he,value:"Instant",label:"Parent"},{icon:ze,value:"Live",label:"GPS"},{icon:Je,value:"Any",label:"Phone"}]},{icon:Mu,title:"Laptops & Valuables",qrSize:"QR + NFC Sticker",description:"Stick a dual QR+NFC tag on your laptop, camera, or any valuable. Works with both QR scan and NFC tap for maximum recovery speed.",cardBg:"#E1F5EE",iconBg:"#2ebd3a",tag:"NFC + QR",tagBg:"#9FE1CB",tagColor:"#085041",titleColor:"#085041",subColor:"#0F6E56",descColor:"#0F6E56",image:Yu,badge:"💻",qrPosition:"Back of device",features:["Ultra-thin","Dual mode","No bulge"],stats:[{icon:jt,value:"NFC",label:"+QR"},{icon:he,value:"Auto",label:"Alert"},{icon:ze,value:"Live",label:"GPS"}]},{icon:a1,title:"Senior Citizens",qrSize:"Emergency QR + NFC",description:"Emergency profile with medical info, blood group, and contacts. NFC tap or QR scan gives responders instant access to critical details — no app needed.",cardBg:"#EEEDFE",iconBg:"#7F77DD",tag:"Senior Care",tagBg:"#7F77DD",tagColor:"#fff",titleColor:"#26215C",subColor:"#534AB7",descColor:"#534AB7",image:Qu,badge:"👴",qrPosition:"Wristband / wallet card",isNew:!0,features:["Medical ID","Blood group","SOS alert"],stats:[{icon:Je,value:"SOS",label:"Workflow"},{icon:he,value:"5",label:"Family"},{icon:ze,value:"Med",label:"Info"}]}];function og(){return n.jsxs("section",{id:"use-cases",style:{background:"#ffffff",padding:"90px 0 80px"},children:[n.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:56},children:[n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#e8f8eb",border:"1px solid #c6edd0",marginBottom:16},children:[n.jsx(Pe,{size:15,color:"#2ebd3a",strokeWidth:2.2}),n.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#2ebd3a"},children:"Real-World Use Cases"})]}),n.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 44px)",fontWeight:900,color:"#0B2545",margin:"0 0 14px",lineHeight:1.15},children:"Protect Everything You Love"}),n.jsx("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:540,margin:"0 auto",lineHeight:1.7},children:"From bikes to babies — ScanForSafe QR tags and NFC chips keep your world safe and recoverable"})]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24},className:"use-cases-grid",children:ag.map(e=>n.jsx(lg,{...e},e.title))})]}),n.jsx("style",{children:`
        @media (max-width: 960px) {
          .use-cases-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .use-cases-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]})}function lg({icon:e,title:t,qrSize:r,description:i,cardBg:s,iconBg:a,tag:o,tagBg:l,tagColor:d,titleColor:c,subColor:x,descColor:p,image:g,badge:y,qrPosition:w,isNew:m,features:j,stats:f}){const[u,h]=v.useState(!1);return n.jsxs("div",{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),style:{borderRadius:20,overflow:"hidden",background:s,border:"none",boxShadow:u?"0 20px 48px rgba(0,0,0,0.12)":"0 2px 12px rgba(0,0,0,0.05)",transition:"all 0.3s ease",position:"relative",transform:u?"translateY(-6px)":"translateY(0)",display:"flex",flexDirection:"column",height:"100%"},children:[m&&n.jsx("div",{style:{position:"absolute",top:14,right:14,zIndex:10,background:"#534AB7",color:"#fff",fontSize:11,fontWeight:800,padding:"4px 12px",borderRadius:100,letterSpacing:"0.05em"},children:"NEW"}),n.jsxs("div",{style:{position:"relative",height:244,overflow:"hidden",flexShrink:0},children:[n.jsx("img",{src:g,alt:t,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"contain",objectPosition:"center",display:"block",background:"#f0f0f0",transform:u?"scale(1.04)":"scale(1)",transition:"transform 0.4s ease"}}),n.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.22))"}}),n.jsxs("div",{style:{position:"absolute",bottom:12,left:12,background:"#ffffff",borderRadius:10,padding:"7px 13px",fontSize:12,fontWeight:700,color:"#2ebd3a",display:"flex",alignItems:"center",gap:6,border:"1.5px solid #e8f8eb",zIndex:10,boxShadow:"0 2px 8px rgba(0,0,0,0.18)"},children:[n.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"#2ebd3a",strokeWidth:"2.5",children:[n.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),n.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),n.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),n.jsx("path",{d:"M14 14h3v3m0 4h4m-4-4v4m4-7h-4m4 0v3"})]}),w]})]}),n.jsxs("div",{style:{padding:"18px 18px 20px",display:"flex",flexDirection:"column",gap:10,flex:1},children:[n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx("div",{style:{width:42,height:42,borderRadius:12,background:a,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx(e,{size:20,color:"#fff",strokeWidth:2.2})}),n.jsxs("div",{children:[n.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:800,color:c,lineHeight:1.3},children:t}),n.jsxs("div",{style:{fontSize:11,color:x,fontWeight:600,marginTop:3},children:[y," ",r]})]})]}),n.jsx("span",{style:{fontSize:11,fontWeight:800,padding:"4px 12px",borderRadius:100,background:l,color:d,whiteSpace:"nowrap",flexShrink:0,marginTop:2},children:o})]}),n.jsx("p",{style:{margin:0,fontSize:14,color:p,lineHeight:1.65},children:i}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:j.map(b=>n.jsx("span",{style:{fontSize:11,fontWeight:700,padding:"4px 11px",borderRadius:100,background:l,color:d,border:`1px solid ${d}22`,letterSpacing:"0.02em"},children:b},b))}),n.jsx("div",{style:{display:"flex",gap:6,background:"rgba(255,255,255,0.55)",borderRadius:14,padding:"10px 8px",border:`1px solid ${d}18`},children:f.map((b,S)=>{const C=b.icon;return n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:3,borderRight:S<f.length-1?`1px solid ${d}20`:"none",paddingRight:S<f.length-1?6:0},children:[n.jsx(C,{size:12,color:a,strokeWidth:2.4}),n.jsx("span",{style:{fontSize:13,fontWeight:900,color:c,lineHeight:1},children:b.value}),n.jsx("span",{style:{fontSize:9.5,fontWeight:600,color:x,opacity:.8,textTransform:"uppercase",letterSpacing:"0.04em"},children:b.label})]},S)})}),n.jsxs("div",{style:{marginTop:"auto",paddingTop:4,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,fontSize:12,fontWeight:700,color:x},children:[n.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:"#2ebd3a",boxShadow:"0 0 0 4px rgba(46,189,58,0.10)",flexShrink:0}}),"Finder-friendly setup"]}),n.jsxs("button",{type:"button",style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:13,fontWeight:800,color:c,background:"transparent",border:"none",padding:0,cursor:"pointer"},children:["Learn more",n.jsx(Iu,{size:16,strokeWidth:2.4})]})]})]})]})}function dg(){return n.jsx("div",{className:"pt-20",children:n.jsx(og,{})})}function cg(){return n.jsx(n.Fragment,{children:n.jsx(Hu,{})})}const ug=[{name:"Priya Sharma",role:"Pet Owner",city:"Mumbai",initial:"P",color:"#0057b8",bg:"rgba(0,87,184,0.10)",rating:5,Icon:$e,text:"My dog slipped out one evening. Within 20 minutes, a kind stranger scanned his collar and I got a WhatsApp alert with their location. We reunited so fast! ScanForSafe is absolutely worth every rupee."},{name:"Rajesh Kumar",role:"Car Owner",city:"Delhi",initial:"R",color:"#2ca02c",bg:"rgba(44,160,44,0.10)",rating:5,Icon:Ni,text:"Parking in crowded areas always made me anxious about blocking someone. Now with the QR on my car, people contact me directly without needing my number visible."},{name:"Anita Verma",role:"Parent",city:"Bengaluru",initial:"A",color:"#1a7fd4",bg:"rgba(26,127,212,0.10)",rating:5,Icon:Co,text:"I put a ScanForSafe tag on my son's school bag. The peace of mind knowing someone can reach me immediately in an emergency is priceless."},{name:"Mohammed Farhan",role:"Bike Owner",city:"Hyderabad",initial:"M",color:"#00509e",bg:"rgba(0,80,158,0.10)",rating:5,Icon:No,text:"My bike was towed once and I had no idea where it went. After getting ScanForSafe, I feel so much more in control."},{name:"Sneha Reddy",role:"Frequent Traveller",city:"Chennai",initial:"S",color:"#1d8a1d",bg:"rgba(29,138,29,0.10)",rating:5,Icon:Mh,text:"Lost my suitcase at the airport once — never again. I tag every bag now."},{name:"Vikram Nair",role:"Laptop Owner",city:"Pune",initial:"V",color:"#0057b8",bg:"rgba(0,87,184,0.10)",rating:5,Icon:Mu,text:"Left my laptop at a café once and it was gone for 2 hours. ScanForSafe helped me recover it quickly."}];function fg({count:e}){return n.jsx("div",{className:"flex gap-0.5",children:Array.from({length:e}).map((t,r)=>n.jsx(_u,{className:"w-3.5 h-3.5 text-amber-400 fill-amber-400"},r))})}function pg({t:e}){const{Icon:t}=e;return n.jsxs("div",{className:"relative rounded-2xl p-5 border border-slate-100 bg-white",style:{boxShadow:"0 2px 16px rgba(0,43,91,0.07)"},children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center",style:{background:e.bg},children:n.jsx(t,{style:{width:"18px",height:"18px",color:e.color}})}),n.jsx(fg,{count:e.rating})]}),n.jsx(t1,{className:"absolute top-4 right-14 w-6 h-6",style:{color:"rgba(0,87,184,0.08)"}}),n.jsxs("p",{className:"text-slate-600 text-sm leading-relaxed mb-4",children:['"',e.text,'"']}),n.jsxs("div",{className:"flex items-center gap-3 pt-3 border-t border-slate-100",children:[n.jsx("div",{className:"w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm",style:{background:e.color},children:e.initial}),n.jsxs("div",{children:[n.jsx("p",{className:"font-bold text-sm",style:{color:"#002b5b"},children:e.name}),n.jsxs("p",{className:"text-xs text-slate-400",children:[e.role," · ",e.city]})]})]})]})}function hg(){return n.jsx("section",{id:"testimonials",className:"py-20",style:{background:"#f4f7fb",padding:"120pX"},children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:[n.jsxs("div",{className:"mb-14 text-center",children:[n.jsx("div",{className:"flex justify-center mb-4",children:n.jsx("span",{className:"badge",children:"Customer Stories"})}),n.jsx("h2",{className:"section-heading",children:"Real People, Real Protection Stories"}),n.jsx("p",{className:"section-sub",children:"Join thousands of happy customers across India who trust ScanForSafe every day."}),n.jsx("div",{className:"flex flex-wrap items-center justify-center gap-6 mt-8",children:[{value:"10,000+",label:"Happy Users"},{value:"4.9 ★",label:"Average Rating"},{value:"98%",label:"Reunion Rate"},{value:"50+ Cities",label:"Across India"}].map(e=>n.jsxs("div",{className:"text-center",children:[n.jsx("p",{className:"text-2xl font-black",style:{color:"#0057b8"},children:e.value}),n.jsx("p",{className:"text-xs font-semibold text-slate-500 uppercase tracking-wide",children:e.label})]},e.label))})]}),n.jsx("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:ug.map((e,t)=>n.jsx(pg,{t:e},t))})]})})}function gg(){return n.jsx(n.Fragment,{children:n.jsx(hg,{})})}function xg(){return n.jsxs("svg",{viewBox:"0 0 280 280",className:"w-52 h-52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("ellipse",{cx:"140",cy:"180",rx:"90",ry:"30",fill:"#2ebd3a",fillOpacity:"0.18"}),n.jsx("path",{d:"M140 240 C100 220 68 185 68 145 L68 82 L140 55 L212 82 L212 145 C212 185 180 220 140 240Z",fill:"#0B2545",fillOpacity:"0.25",transform:"translate(4,6)"}),n.jsx("path",{d:"M140 232 C100 212 68 177 68 137 L68 74 L140 47 L212 74 L212 137 C212 177 180 212 140 232Z",fill:"url(#shieldGrad)",stroke:"#0B2545",strokeWidth:"1.5"}),n.jsx("path",{d:"M140 210 C108 193 88 164 88 134 L88 88 L140 66 L192 88 L192 134 C192 164 172 193 140 210Z",fill:"url(#shieldInner)",opacity:"0.6"}),Array.from({length:6},(e,t)=>Array.from({length:6},(r,i)=>{const s=108+i*13,a=80+t*13,o=Math.random()>.4?.5:.15;return n.jsx("rect",{x:s,y:a,width:"8",height:"8",rx:"1.5",fill:"white",fillOpacity:o},`${t}-${i}`)})),n.jsx("circle",{cx:"168",cy:"158",r:"22",fill:"#2ebd3a",stroke:"white",strokeWidth:"2.5"}),n.jsx("circle",{cx:"168",cy:"158",r:"18",fill:"#2ebd3a"}),n.jsx("path",{d:"M158 158 L164 164 L178 150",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("circle",{cx:"140",cy:"30",r:"5",fill:"#4bd557",fillOpacity:"0.7"}),n.jsx("circle",{cx:"228",cy:"100",r:"4",fill:"#7ded88",fillOpacity:"0.6"}),n.jsx("circle",{cx:"210",cy:"210",r:"5",fill:"#4bd557",fillOpacity:"0.5"}),n.jsx("circle",{cx:"68",cy:"195",r:"3.5",fill:"#7ded88",fillOpacity:"0.6"}),n.jsx("circle",{cx:"50",cy:"100",r:"4",fill:"#4bd557",fillOpacity:"0.5"}),n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:"shieldGrad",x1:"140",y1:"47",x2:"140",y2:"232",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{offset:"0%",stopColor:"#2ebd3a"}),n.jsx("stop",{offset:"50%",stopColor:"#2ebd3a"}),n.jsx("stop",{offset:"100%",stopColor:"#081c35"})]}),n.jsxs("linearGradient",{id:"shieldInner",x1:"140",y1:"66",x2:"140",y2:"210",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{offset:"0%",stopColor:"white",stopOpacity:"0.25"}),n.jsx("stop",{offset:"100%",stopColor:"white",stopOpacity:"0"})]})]})]})}const mg=[{icon:$h,label:"Enterprise Security",desc:"End-to-end protection for your ecosystem",tags:"Secure • Reliable • Robust",tagColor:"#2ebd3a"},{icon:Je,label:"Lightning Fast",desc:"Instant AI scanning & verification",tags:"Real-time • Accurate • Fast",tagColor:"#d97706"},{icon:Du,label:"Role-Based Access",desc:"Granular permissions with 4 user roles",tags:"Flexible • Controlled • Safe",tagColor:"#7c3aed"},{icon:Wh,label:"Cloud Scalability",desc:"Reliable, secure & always available",tags:"Scalable • Global • Always On",tagColor:"#0ea5e9"}];function yg(){const[e,t]=v.useState(!1),[r,i]=v.useState(""),[s,a]=v.useState(""),[o,l]=v.useState(!1),[d,c]=v.useState({}),x=()=>{const g={};return r.trim()||(g.username="Username is required"),s?s.length<6&&(g.password="Password must be at least 6 characters"):g.password="Password is required",g},p=g=>{g.preventDefault();const y=x();if(Object.keys(y).length){c(y);return}c({}),l(!0),setTimeout(()=>l(!1),1800)};return n.jsxs("div",{className:"min-h-screen flex font-sans",style:{fontFamily:"'DM Sans', 'Helvetica Neue', sans-serif"},children:[n.jsxs("div",{className:"hidden lg:flex lg:w-[55%] flex-col p-10 relative overflow-hidden",style:{background:"linear-gradient(160deg, #f8fafc 0%, #e8f8eb 40%, #e8f8eb 100%)"},children:[n.jsx("div",{className:"absolute inset-0 opacity-40",style:{backgroundImage:"radial-gradient(circle, #7ded88 1px, transparent 1px)",backgroundSize:"28px 28px"}}),n.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}),n.jsx("div",{className:"absolute top-20 right-20 w-80 h-80 rounded-full opacity-30",style:{background:"radial-gradient(circle, #4bd557, transparent 70%)"}}),n.jsx("div",{className:"absolute bottom-10 left-10 w-60 h-60 rounded-full opacity-20",style:{background:"radial-gradient(circle, #2ebd3a, transparent 70%)"}}),n.jsxs("div",{className:"relative z-10 flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center shadow-md",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)"},children:n.jsx(Pe,{className:"w-5 h-5 text-white"})}),n.jsxs("div",{children:[n.jsx("span",{className:"font-black text-lg text-gray-900 tracking-tight leading-none block",children:"Scan for Safe"}),n.jsx("span",{className:"text-[10px] text-green-700 font-semibold tracking-widest uppercase",children:"Product Protection Platform"})]})]}),n.jsx("div",{className:"relative z-10 mt-6",children:n.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-300 bg-white/60 backdrop-blur-sm text-xs font-bold text-green-800 tracking-widest uppercase shadow-sm",children:[n.jsx(Ou,{className:"w-3.5 h-3.5 text-green-600"}),"AI Powered · Trusted · Secure"]})}),n.jsxs("div",{className:"relative z-10 mt-8 flex gap-8 items-start",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("h2",{className:"text-4xl font-black text-gray-900 leading-tight tracking-tight",children:["Smart Product",n.jsx("br",{}),"Safety &"," ",n.jsx("span",{style:{color:"#2ebd3a"},children:"Authentication"})]}),n.jsx("p",{className:"text-gray-600 text-sm mt-4 leading-relaxed max-w-xs font-medium",children:"AI-driven verification, counterfeit detection, and real-time monitoring to protect your products, customers, and brand integrity."})]}),n.jsx("div",{className:"flex-shrink-0 mt-[-12px]",children:n.jsx(xg,{})})]}),n.jsx("div",{className:"relative z-10 mt-6 grid grid-cols-2 gap-4",children:mg.map(({icon:g,label:y,desc:w,tags:m,tagColor:j})=>n.jsxs("div",{className:"bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl p-4 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-200",children:[n.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center mb-3",style:{background:`${j}18`,border:`1px solid ${j}30`},children:n.jsx(g,{className:"w-4 h-4",style:{color:j}})}),n.jsx("p",{className:"text-gray-900 text-sm font-black leading-tight",children:y}),n.jsx("p",{className:"text-gray-500 text-[11px] mt-1 leading-snug",children:w}),n.jsx("p",{className:"text-[10px] font-bold mt-2",style:{color:j},children:m})]},y))})]}),n.jsxs("div",{className:"w-full lg:w-[45%] flex flex-col justify-center items-center px-8 sm:px-14 py-12 bg-white relative",children:[n.jsxs("div",{className:"lg:hidden flex items-center gap-2 mb-10",children:[n.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)"},children:n.jsx(Pe,{className:"w-5 h-5 text-white"})}),n.jsx("span",{className:"font-black text-xl text-gray-900",children:"Scan for Safe"})]}),n.jsxs("div",{className:"w-full max-w-sm",children:[n.jsxs("div",{className:"mb-8",children:[n.jsxs("h1",{className:"text-4xl font-black text-gray-900 tracking-tight leading-tight",children:["Welcome ",n.jsx("span",{style:{color:"#2ebd3a"},children:"Back!"})]}),n.jsx("p",{className:"text-gray-500 text-sm mt-2 font-medium",children:"Sign in to continue to your dashboard"})]}),n.jsxs("form",{onSubmit:p,noValidate:!0,className:"space-y-5",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-black text-gray-700 tracking-widest uppercase mb-2",children:"Username"}),n.jsxs("div",{className:"relative",children:[n.jsx(Ca,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),n.jsx("input",{type:"text",value:r,onChange:g=>{i(g.target.value),c(y=>({...y,username:""}))},placeholder:"Enter your username",className:`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 ${d.username?"border-red-300 focus:ring-red-100":"border-gray-200 focus:border-green-400 focus:ring-green-50"}`})]}),d.username&&n.jsx("p",{className:"text-red-500 text-[11px] font-semibold mt-1.5 ml-1",children:d.username})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("label",{className:"block text-[11px] font-black text-gray-700 tracking-widest uppercase",children:"Password"}),n.jsx(Ge,{to:"/forgot-password",className:"text-xs font-bold hover:underline",style:{color:"#2ebd3a"},children:"Forgot password?"})]}),n.jsxs("div",{className:"relative",children:[n.jsx(xn,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),n.jsx("input",{type:e?"text":"password",value:s,onChange:g=>{a(g.target.value),c(y=>({...y,password:""}))},placeholder:"Enter your password",className:`w-full pl-10 pr-11 py-3.5 rounded-xl border text-sm font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 ${d.password?"border-red-300 focus:ring-red-100":"border-gray-200 focus:border-green-400 focus:ring-green-50"}`}),n.jsx("button",{type:"button",onClick:()=>t(!e),className:"absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors","aria-label":e?"Hide password":"Show password",children:e?n.jsx(_h,{className:"w-4 h-4"}):n.jsx(Dh,{className:"w-4 h-4"})})]}),d.password&&n.jsx("p",{className:"text-red-500 text-[11px] font-semibold mt-1.5 ml-1",children:d.password})]}),n.jsx("button",{type:"submit",disabled:o,className:"w-full py-4 rounded-xl text-white font-black text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed mt-1",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)",boxShadow:"0 10px 28px rgba(46, 189, 58,.28)"},children:o?n.jsxs(n.Fragment,{children:[n.jsxs("svg",{className:"animate-spin w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",children:[n.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),n.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"})]}),"Signing in…"]}):n.jsxs(n.Fragment,{children:["Access Dashboard",n.jsx(Ru,{className:"w-4 h-4"})]})}),n.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-400 text-[11px] font-semibold",children:[n.jsx(xn,{className:"w-3.5 h-3.5"}),"Your data is encrypted and secure"]})]}),n.jsxs("p",{className:"text-center text-xs text-gray-500 font-medium mt-8",children:["Don't have an account?"," ",n.jsx(Ge,{to:"/register",className:"font-black hover:underline",style:{color:"#2ebd3a"},children:"Get started free →"})]})]})]})]})}function bg(){const e=Sr(),[t,r]=v.useState(!1),[i,s]=v.useState(!1),a=v.useRef(null),[o,l]=v.useState({email:"",name:"",mobile:"",address:"",city:"",pinCode:"",qrType:"",emergencyName:"",emergencyMobile:"",referredBy:"",referralMobile:"",declaration:!1}),[d,c]=v.useState({}),x=[{value:"Car",label:"Car",icon:n.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}),n.jsx("circle",{cx:"7",cy:"17",r:"2"}),n.jsx("path",{d:"M9 17h6"}),n.jsx("circle",{cx:"17",cy:"17",r:"2"})]})},{value:"Bike / Cycle/ Scooty",label:"Bike / Scooty",icon:n.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("circle",{cx:"5",cy:"18",r:"3"}),n.jsx("circle",{cx:"19",cy:"18",r:"3"}),n.jsx("path",{d:"M12 18V12l-3-4M19 18l-4-6h-3"}),n.jsx("path",{d:"M12 8h5M17 8l-1-3"})]})},{value:"Truck / Commercial Vehicle",label:"Truck",icon:n.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("rect",{x:"1",y:"3",width:"15",height:"13",rx:"2",ry:"2"}),n.jsx("polygon",{points:"16 8 20 8 23 11 23 16 16 16 16 8"}),n.jsx("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),n.jsx("circle",{cx:"18.5",cy:"18.5",r:"2.5"})]})},{value:"Auto Rickshaw",label:"Auto Rickshaw",icon:n.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("circle",{cx:"12",cy:"18",r:"3"}),n.jsx("circle",{cx:"5",cy:"10",r:"2"}),n.jsx("circle",{cx:"19",cy:"10",r:"2"}),n.jsx("path",{d:"M5 10h14v4H5z"}),n.jsx("path",{d:"M12 14v4"})]})},{value:"Senior citizen",label:"Senior citizen",icon:n.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),n.jsx("circle",{cx:"9",cy:"7",r:"4"}),n.jsx("path",{d:"M19 8v6M16 11h6"})]})},{value:"Support needed persons",label:"Support needed",icon:n.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})},{value:"Pets",label:"Pets",icon:n.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("circle",{cx:"12",cy:"13",r:"3"}),n.jsx("circle",{cx:"12",cy:"6",r:"2"}),n.jsx("circle",{cx:"7",cy:"9",r:"2"}),n.jsx("circle",{cx:"17",cy:"9",r:"2"})]})},{value:"School kids",label:"School kids",icon:n.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}),n.jsx("path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}),n.jsx("path",{d:"M8 11h8M8 15h8"})]})}],p=(m,j)=>{l(f=>({...f,[m]:j})),d[m]&&c(f=>{const u={...f};return delete u[m],u})},g=()=>{const m={};return o.name.trim()||(m.name="Full Name is required"),o.email.trim()?/\S+@\S+\.\S+/.test(o.email)||(m.email="Invalid email"):m.email="Email is required",o.mobile.trim()?/^\d{10}$/.test(o.mobile)||(m.mobile="Must be 10 digits"):m.mobile="Mobile Number is required",o.address.trim()||(m.address="Address is required"),o.city.trim()||(m.city="City is required"),o.pinCode.trim()||(m.pinCode="PIN Code is required"),o.qrType||(m.qrType="Please select a tag type"),o.emergencyName.trim()||(m.emergencyName="Emergency Name is required"),o.emergencyMobile.trim()?/^\d{10}$/.test(o.emergencyMobile)||(m.emergencyMobile="Must be 10 digits"):m.emergencyMobile="Emergency Phone is required",o.declaration||(m.declaration="Consent is required"),c(m),Object.keys(m).length===0},y=m=>{if(!g()){m.preventDefault();return}setTimeout(()=>{s(!0)},10)},w=()=>{i&&(s(!1),r(!0),window.scrollTo({top:0,behavior:"smooth"}))};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        .pr-page {
          font-family: 'Space Grotesk', sans-serif;
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 95px 24px 35px;
          background: linear-gradient(180deg, #f4f8f4 0%, #f0fdf2 100%);
          position: relative;
          overflow: hidden;
        }

        .pr-page::before {
          content: "";
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 900px 600px at 100% 0%, rgba(46,189,58,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 600px 500px at 0% 100%, rgba(46,189,58,0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        /* ── SINGLE COLUMN WIDE DECK CARD ── */
        .pr-card {
          width: 100%; max-width: 1240px;
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(46, 189, 58, 0.16);
          box-shadow: 0 10px 30px rgba(11, 37, 69, 0.02), 0 30px 60px rgba(6, 78, 59, 0.04);
          position: relative;
          z-index: 2;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ── MAIN CONTENT CONTAINER ── */
        .pr-main {
          padding: 30px 40px;
          display: flex; flex-direction: column; justify-content: space-between;
        }

        /* ── BRAND HEADER ── */
        .pr-form-header {
          text-align: center;
          margin-bottom: 20px;
        }
        .pr-header-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(22, 163, 74, 0.08);
          border: 1px solid rgba(22, 163, 74, 0.16);
          border-radius: 99px; padding: 3px 12px;
          font-size: 9.5px; font-weight: 800; text-transform: uppercase;
          color: #16a34a; letter-spacing: 0.08em; width: fit-content;
          margin-bottom: 8px;
        }
        .pr-form-title {
          font-family: 'Outfit', sans-serif;
          font-size: 24px; font-weight: 900; color: #0B2545;
          letter-spacing: -0.5px; margin-bottom: 4px; line-height: 1.1;
        }
        .pr-form-subtitle {
          font-size: 12.5px; color: #4b5563; line-height: 1.4;
          max-width: 780px; margin: 0 auto;
        }
        .pr-green-text {
          color: #16a34a; font-weight: 700;
        }

        /* ── DASHBOARD SECTION TITLES ── */
        .pr-section-title {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Outfit', sans-serif;
          font-size: 14.5px; font-weight: 800; color: #0B2545;
          margin-bottom: 12px; border-bottom: 1px dashed rgba(22, 163, 74, 0.15);
          padding-bottom: 5px; text-align: left;
        }
        .pr-sec-num {
          background: rgba(22, 163, 74, 0.1);
          color: #16a34a;
          font-size: 9.5px; font-weight: 900;
          padding: 2px 6px; border-radius: 4px;
        }

        /* ── MNC-GRADE COMPACT HORIZONTAL GRID SYSTEM ── */
        .pr-grid-fields {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px 20px;
          text-align: left;
        }
        .pr-span-2-desktop { grid-column: span 2; }
        .pr-span-3-desktop { grid-column: span 3; }
        .pr-span-4-desktop { grid-column: span 4; }

        .pr-group { display: flex; flex-direction: column; justify-content: flex-end; }
        .pr-label {
          font-size: 11.5px; font-weight: 700; color: #0B2545;
          margin-bottom: 5px; letter-spacing: -0.01em;
        }
        .pr-input {
          width: 100%; padding: 8px 12px; border-radius: 8px;
          border: 1.5px solid #cbd5e1; background: #f8fafc;
          font-family: 'Space Grotesk', sans-serif; font-size: 13px;
          color: #0f172a; outline: none; transition: all 0.22s ease;
        }
        .pr-input:focus {
          border-color: #16a34a; background: white;
          box-shadow: 0 0 10px rgba(22, 163, 74, 0.1);
        }
        .pr-textarea { resize: none; height: 34px; min-height: 34px; padding: 7px 12px; }
        
        .pr-error {
          font-size: 10.5px; font-weight: 600; color: #ef4444;
          margin-top: 3px; display: flex; align-items: center; gap: 3px;
        }

        /* ── COMPACT QR TYPE 8-CARD HORIZONTAL SELECTION GRID ── */
        .pr-qr-grid {
          display: grid; grid-template-columns: repeat(8, 1fr); gap: 10px;
          margin-top: 6px;
        }
        .pr-qr-item {
          border: 1.5px solid #e2e8f0; border-radius: 12px;
          padding: 8px 4px; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 5px;
          cursor: pointer; background: #f8fafc; transition: all 0.22s ease;
          color: #475569;
        }
        .pr-qr-item:hover {
          border-color: #cbd5e1; transform: translateY(-1.5px);
          color: #0B2545;
        }
        .pr-qr-item.selected {
          border-color: #16a34a; background: rgba(22, 163, 74, 0.04);
          color: #16a34a;
          box-shadow: 0 3px 10px rgba(22, 163, 74, 0.08);
        }
        .pr-qr-icon {
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.22s ease;
        }
        .pr-qr-item.selected .pr-qr-icon {
          color: #16a34a;
        }
        .pr-qr-item:hover .pr-qr-icon {
          transform: scale(1.1);
        }
        .pr-qr-name { font-size: 10px; font-weight: 700; text-align: center; }

        /* ── DECLARATION ── */
        .pr-dec-box {
          display: flex; gap: 10px; background: #f8fafc;
          border: 1px solid #cbd5e1; padding: 10px 14px; border-radius: 10px;
          cursor: pointer; align-items: center;
          transition: all 0.2s ease;
          min-height: 44px;
        }
        .pr-dec-box:hover { border-color: #16a34a; background: rgba(22, 163, 74, 0.01); }
        .pr-dec-box.checked { border-color: rgba(22, 163, 74, 0.4); background: rgba(22, 163, 74, 0.02); }
        .pr-dec-check {
          width: 18px; height: 18px; border-radius: 5px;
          border: 2px solid #cbd5e1; background: white;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: all 0.2s ease;
        }
        .pr-dec-box.checked .pr-dec-check {
          background: #16a34a; border-color: #16a34a; color: white;
        }
        .pr-dec-text { font-size: 11px; line-height: 1.4; color: #475569; text-align: left; font-weight: 500; }

        /* ── ACTION BUTTONS ── */
        .pr-btn-prev {
          padding: 0; border-radius: 10px;
          border: 1.5px solid #cbd5e1; background: white;
          color: #64748b; font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px; font-weight: 700; cursor: pointer;
          transition: all 0.22s ease;
        }
        .pr-btn-prev:hover { background: #f8fafc; color: #16a34a; border-color: #16a34a; }
        .pr-btn-submit {
          padding: 0; border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #1fa82a 0%, #2ebd3a 50%, #0B2545 100%);
          color: white; font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px; font-weight: 700; cursor: pointer;
          box-shadow: 0 4px 12px rgba(46, 189, 58, 0.15);
          transition: all 0.25s ease-in-out;
        }
        .pr-btn-submit:hover {
          transform: translateY(-1.5px);
          box-shadow: 0 8px 18px rgba(46, 189, 58, 0.25);
        }

        /* ── SUCCESS SCREEN ── */
        .pr-success { text-align: center; padding: 16px 0; }
        .pr-success-icon {
          width: 64px; height: 64px; border-radius: 50%;
          background: #dcfce7; border: 3px solid #16a34a;
          display: flex; align-items: center; justify-content: center;
          color: #16a34a; margin: 0 auto 20px;
          box-shadow: 0 0 20px rgba(22, 163, 74, 0.15);
          animation: scaleUpSuccess 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes scaleUpSuccess {
          from { transform: scale(0.6); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .pr-success h2 {
          font-family: 'Outfit', sans-serif; font-size: 26px; font-weight: 900;
          color: #0B2545; letter-spacing: -0.02em; margin-bottom: 8px;
        }
        .pr-success p { font-size: 13.5px; color: #4A5568; line-height: 1.5; margin-bottom: 24px; }
        
        .pr-offer-box {
          background: linear-gradient(135deg, rgba(22, 163, 74, 0.08) 0%, rgba(0, 136, 255, 0.04) 100%);
          border: 1.5px dashed #16a34a; border-radius: 14px;
          padding: 18px; margin-bottom: 24px; position: relative;
          max-width: 480px; margin-left: auto; margin-right: auto;
        }
        .pr-offer-badge {
          position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
          background: #16a34a; color: white; font-size: 8.5px; font-weight: 900;
          letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 10px;
          border-radius: 99px;
        }
        .pr-offer-code {
          font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 900;
          color: #0B2545; letter-spacing: 1.5px; text-transform: uppercase;
          margin-top: 4px; margin-bottom: 4px;
        }
        
        .pr-btn-home {
          padding: 12px 24px; border-radius: 10px; border: none;
          background: #0B2545; color: white; font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px; font-weight: 700; cursor: pointer; transition: all 0.22s ease;
        }
        .pr-btn-home:hover { background: #081a30; transform: translateY(-1px); }

        /* ── RESPONSIVE ADAPTATIONS ── */
        @media (max-width: 1024px) {
          .pr-qr-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 900px) {
          .pr-grid-fields { grid-template-columns: repeat(2, 1fr); }
          .pr-span-3-desktop { grid-column: span 2; }
          .pr-span-4-desktop { grid-column: span 2; }
          .pr-span-2-desktop { grid-column: span 2; }
        }
        @media (max-width: 580px) {
          .pr-qr-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .pr-grid-fields { grid-template-columns: 1fr; gap: 12px; }
          .pr-span-3-desktop { grid-column: span 1; }
          .pr-span-4-desktop { grid-column: span 1; }
          .pr-span-2-desktop { grid-column: span 1; }
          .pr-main { padding: 24px 16px; }
        }
      `}),n.jsx("div",{className:"pr-page",children:n.jsx("div",{className:"pr-card",children:n.jsx("div",{className:"pr-main",children:t?n.jsxs("div",{className:"pr-success sfs-hiw-fade-in",children:[n.jsx("div",{className:"pr-success-icon",children:n.jsx("svg",{viewBox:"0 0 24 24",width:"32",height:"32",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})})}),n.jsx("h2",{children:"Registration Confirmed!"}),n.jsxs("p",{children:["Thank you, ",n.jsx("strong",{children:o.name}),", for joining India's smartest safety platform! ",n.jsx("br",{}),"Your details have been securely logged in our pre-registration system."]}),n.jsxs("div",{className:"pr-offer-box",children:[n.jsx("div",{className:"pr-offer-badge",children:"Discount Code Unlocked"}),n.jsx("div",{style:{fontSize:11,color:"#64748b",fontWeight:700},children:"🎁 EARLY BIRD OFFER APPLIED"}),n.jsx("div",{className:"pr-offer-code",children:"SFS20OFF"}),n.jsxs("div",{style:{fontSize:11,color:"#16a34a",fontWeight:700},children:["₹20 OFF credit has been mapped to ",o.mobile]})]}),n.jsx("div",{style:{fontSize:12,color:"#64748b",lineHeight:1.7,marginBottom:28},children:"📞 Support: +91 86393 22479  |  ✉ customercare@scanforsafe.com"}),n.jsx("button",{className:"pr-btn-home",onClick:()=>e("/"),children:"Back to Home Page"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"pr-form-header",children:[n.jsx("div",{className:"pr-header-badge",children:"🔒 Secure Pre-Registration"}),n.jsx("h2",{className:"pr-form-title",children:"Join ScanForSafe Early Bird Campaign"}),n.jsxs("p",{className:"pr-form-subtitle",children:["Get an exclusive ",n.jsx("span",{className:"pr-green-text",children:"₹20 instant discount code"})," and protect your family, vehicles, and loved ones with India's smartest QR safety platform."]})]}),n.jsx("iframe",{name:"hidden_iframe",id:"hidden_iframe",ref:a,style:{display:"none"},onLoad:w}),n.jsxs("form",{action:"https://docs.google.com/forms/d/e/1FAIpQLSd9A7Dl1-VyVYOpzuSFH1dy_vWdsYBxjFUqh6h3LpmicZwKRg/formResponse",method:"POST",target:"hidden_iframe",onSubmit:y,children:[n.jsxs("div",{className:"pr-section-title",children:[n.jsx("span",{className:"pr-sec-num",children:"01"})," Contact & Shipping Details"]}),n.jsxs("div",{className:"pr-grid-fields",style:{marginBottom:20},children:[n.jsxs("div",{className:"pr-group",children:[n.jsx("label",{className:"pr-label",children:"Full Name *"}),n.jsx("input",{type:"text",name:"entry.13820436",className:"pr-input",placeholder:"Enter your full name",value:o.name,onChange:m=>p("name",m.target.value),required:!0}),d.name&&n.jsxs("span",{className:"pr-error",children:[n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),d.name]})]}),n.jsxs("div",{className:"pr-group",children:[n.jsx("label",{className:"pr-label",children:"Mobile Number *"}),n.jsx("input",{type:"tel",name:"entry.975997504",className:"pr-input",placeholder:"10-digit Mobile Number",value:o.mobile,onChange:m=>p("mobile",m.target.value),maxLength:10,required:!0}),d.mobile&&n.jsxs("span",{className:"pr-error",children:[n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),d.mobile]})]}),n.jsxs("div",{className:"pr-group",children:[n.jsx("label",{className:"pr-label",children:"Email Address *"}),n.jsx("input",{type:"email",name:"emailAddress",className:"pr-input",placeholder:"yourname@domain.com",value:o.email,onChange:m=>p("email",m.target.value),required:!0}),d.email&&n.jsxs("span",{className:"pr-error",children:[n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),d.email]})]}),n.jsxs("div",{className:"pr-group",children:[n.jsx("label",{className:"pr-label",children:"City *"}),n.jsx("input",{type:"text",name:"entry.757584940",className:"pr-input",placeholder:"e.g. Hyderabad",value:o.city,onChange:m=>p("city",m.target.value),required:!0}),d.city&&n.jsxs("span",{className:"pr-error",children:[n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),d.city]})]}),n.jsxs("div",{className:"pr-group pr-span-3-desktop",children:[n.jsx("label",{className:"pr-label",children:"Full Shipping Address *"}),n.jsx("textarea",{name:"entry.761001486",className:"pr-input pr-textarea",placeholder:"Door No., Street name, Area / Locality",value:o.address,onChange:m=>p("address",m.target.value),required:!0}),d.address&&n.jsxs("span",{className:"pr-error",children:[n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),d.address]})]}),n.jsxs("div",{className:"pr-group",children:[n.jsx("label",{className:"pr-label",children:"PIN Code *"}),n.jsx("input",{type:"text",name:"entry.459245871",className:"pr-input",placeholder:"6-digit PIN code",value:o.pinCode,onChange:m=>p("pinCode",m.target.value),maxLength:6,required:!0}),d.pinCode&&n.jsxs("span",{className:"pr-error",children:[n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),d.pinCode]})]}),n.jsxs("div",{className:"pr-group pr-span-4-desktop",children:[n.jsx("label",{className:"pr-label",style:{marginBottom:2},children:"Select QR Visual Tag Type *"}),n.jsx("input",{type:"hidden",name:"entry.1359574010",value:o.qrType}),n.jsx("div",{className:"pr-qr-grid",children:x.map(m=>n.jsxs("div",{className:`pr-qr-item ${o.qrType===m.value?"selected":""}`,onClick:()=>p("qrType",m.value),children:[n.jsx("span",{className:"pr-qr-icon",children:m.icon}),n.jsx("span",{className:"pr-qr-name",children:m.label})]},m.value))}),d.qrType&&n.jsxs("span",{className:"pr-error",children:[n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),d.qrType]})]})]}),n.jsxs("div",{className:"pr-section-title",children:[n.jsx("span",{className:"pr-sec-num",children:"02"})," Emergency & Referral Details"]}),n.jsxs("div",{className:"pr-grid-fields",children:[n.jsxs("div",{className:"pr-group",children:[n.jsx("label",{className:"pr-label",children:"Emergency Contact Name *"}),n.jsx("input",{type:"text",name:"entry.243129998",className:"pr-input",placeholder:"Emergency contact name",value:o.emergencyName,onChange:m=>p("emergencyName",m.target.value),required:!0}),d.emergencyName&&n.jsxs("span",{className:"pr-error",children:[n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),d.emergencyName]})]}),n.jsxs("div",{className:"pr-group",children:[n.jsx("label",{className:"pr-label",children:"Emergency Contact Phone *"}),n.jsx("input",{type:"tel",name:"entry.1663966446",className:"pr-input",placeholder:"10-digit emergency phone",value:o.emergencyMobile,onChange:m=>p("emergencyMobile",m.target.value),maxLength:10,required:!0}),d.emergencyMobile&&n.jsxs("span",{className:"pr-error",children:[n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),d.emergencyMobile]})]}),n.jsxs("div",{className:"pr-group",children:[n.jsx("label",{className:"pr-label",children:"Who referred you? (Optional)"}),n.jsx("input",{type:"text",name:"entry.1089812369",className:"pr-input",placeholder:"Referrer's name",value:o.referredBy,onChange:m=>p("referredBy",m.target.value)})]}),n.jsxs("div",{className:"pr-group",children:[n.jsx("label",{className:"pr-label",children:"Referral Contact Number (Optional)"}),n.jsx("input",{type:"tel",name:"entry.1221855533",className:"pr-input",placeholder:"Referrer's phone",value:o.referralMobile,onChange:m=>p("referralMobile",m.target.value),maxLength:10})]}),n.jsxs("div",{className:"pr-group pr-span-2-desktop",style:{marginTop:6},children:[n.jsx("input",{type:"hidden",name:"entry.2049827878",value:o.declaration?"I confirm that the details provided are correct and I consent to being contacted by ScanForSafe for order confirmation and activation.":""}),n.jsxs("div",{className:`pr-dec-box ${o.declaration?"checked":""}`,onClick:()=>p("declaration",!o.declaration),children:[n.jsx("div",{className:"pr-dec-check",children:o.declaration&&n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"4",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})})}),n.jsx("div",{className:"pr-dec-text",children:"I confirm that the details provided are correct and I consent to being contacted by ScanForSafe for order confirmation and activation. *"})]}),d.declaration&&n.jsxs("span",{className:"pr-error",children:[n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),d.declaration]})]}),n.jsx("div",{className:"pr-group",style:{marginTop:6,justifyContent:"center"},children:n.jsx("button",{type:"button",className:"pr-btn-prev",onClick:()=>e("/"),style:{width:"100%",height:"46px"},children:"Cancel"})}),n.jsx("div",{className:"pr-group",style:{marginTop:6,justifyContent:"center"},children:n.jsx("button",{type:"submit",className:"pr-btn-submit",disabled:i,style:{width:"100%",height:"46px"},children:i?"Registering...":"Confirm & Pre-Register ✔"})})]})]})]})})})})]})}function vg(e=.12){const t=v.useRef(null),[r,i]=v.useState(!1);return v.useEffect(()=>{const s=new IntersectionObserver(([a])=>{a.isIntersecting&&i(!0)},{threshold:e});return t.current&&s.observe(t.current),()=>s.disconnect()},[e]),[t,r]}function wg(e,t=1800,r=!1){const[i,s]=v.useState(0);return v.useEffect(()=>{if(!r)return;let a=null;const o=l=>{a||(a=l);const d=Math.min((l-a)/t,1),c=1-Math.pow(1-d,3);s(Math.floor(c*e)),d<1&&requestAnimationFrame(o)};requestAnimationFrame(o)},[r,e,t]),i}function Ns({num:e,suffix:t,label:r,active:i,delay:s}){const a=wg(e,1600,i);return n.jsxs("div",{style:{textAlign:"center",opacity:i?1:0,transform:i?"translateY(0)":"translateY(20px)",transition:`opacity .6s ease ${s}s, transform .6s ease ${s}s`},children:[n.jsxs("div",{style:{fontFamily:"'Clash Display', 'Cabinet Grotesk', sans-serif",fontSize:28,fontWeight:800,color:"#fff",lineHeight:1,letterSpacing:"-0.04em"},children:[a,t]}),n.jsx("div",{style:{fontSize:11,color:"rgba(186,230,253,0.75)",fontWeight:600,marginTop:4,letterSpacing:".06em",textTransform:"uppercase"},children:r})]})}function jg(){const e=Sr(),[t,r]=v.useState(!1),[i,s]=v.useState(!1),[a,o]=v.useState(""),[l,d]=v.useState({}),[c,x]=v.useState(!1),[p,g]=vg(.3);v.useEffect(()=>{const b=setTimeout(()=>x(!0),80);return()=>clearTimeout(b)},[]);const[y,w]=v.useState({name:"",email:"",mobile:"",city:"",state:"",investment:"100000",experience:"None",shopAvailable:"No",message:""}),m={5e4:{tierName:"Silver Partner",minInvestment:"₹50,000",margins:"30%",pincodes:"1 Pincode",inventory:"150 Safety Tags",marketingSupport:"Basic Digital Flyers",potentialRoi:"₹25,000 - ₹35,000 / month"},1e5:{tierName:"Gold Partner",minInvestment:"₹1,00,000",margins:"40%",pincodes:"2 Pincodes (Exclusive)",inventory:"350 Safety Tags",marketingSupport:"Brochures, Banners, Digital Ads Support",potentialRoi:"₹60,000 - ₹80,000 / month"},3e5:{tierName:"Platinum Master Franchise",minInvestment:"₹3,00,000+",margins:"50%",pincodes:"Entire City / District",inventory:"1200 Safety Tags + NFC Cards",marketingSupport:"Full Local Ad Campaigns, Store Signage, dedicated account manager",potentialRoi:"₹1,80,000 - ₹2,50,000 / month"}},j=(b,S)=>{w(C=>({...C,[b]:S})),l[b]&&d(C=>{const z={...C};return delete z[b],z})},f=()=>{const b={};return y.name.trim()||(b.name="Full Name is required"),y.email.trim()?/\S+@\S+\.\S+/.test(y.email)||(b.email="Invalid email address"):b.email="Email Address is required",y.mobile.trim()?/^\d{10}$/.test(y.mobile)||(b.mobile="Must be a 10-digit number"):b.mobile="WhatsApp Number is required",y.city.trim()||(b.city="City is required"),y.state.trim()||(b.state="State is required"),d(b),Object.keys(b).length===0},u=b=>{b.preventDefault(),f()&&(s(!0),setTimeout(()=>{const S="SFS-FRANCHISE-"+Math.floor(1e3+Math.random()*9e3);o(S),s(!1),r(!0),window.scrollTo({top:0,behavior:"smooth"})},1200))},h=m[y.investment]||m[1e5];return n.jsxs(n.Fragment,{children:[n.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),n.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Fira+Code:wght@400;500&family=Outfit:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap",rel:"stylesheet"}),n.jsx("style",{children:`
        .fr-page {
          font-family: 'Space Grotesk', sans-serif;
          min-height: 100vh;
          background: #f8fafc;
          padding-top: 80px; /* Space for fixed Navbar */
          overflow-x: hidden;
        }

        /* ── Hero Keyframe Animations (Matches ContactUs.jsx) ── */
        @keyframes morphBlob {
          0%,100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%; }
          25%      { border-radius: 40% 60% 30% 70% / 60% 40% 70% 50%; }
          50%      { border-radius: 70% 30% 50% 50% / 40% 70% 30% 60%; }
          75%      { border-radius: 30% 70% 60% 40% / 70% 30% 60% 40%; }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-18px); }
        }
        @keyframes floatYSlow {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-26px) rotate(6deg); }
        }
        @keyframes scanBeam {
          0%   { top: -4px; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes glowPulse {
          0%,100% { opacity: .5; transform: scale(1); }
          50%      { opacity: 1; transform: scale(1.08); }
        }
        @keyframes ripple {
          0%   { transform: scale(1); opacity: .6; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes orbMove1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(60px,-40px) scale(1.1); }
          66%      { transform: translate(-30px,30px) scale(.95); }
        }
        @keyframes orbMove2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-70px,30px) scale(1.05); }
          66%      { transform: translate(40px,-50px) scale(1.1); }
        }

        /* ── SECTION CARDS ── */
        .fr-section {
          padding: 20px 0px;
          max-width: 1240px;
          margin: 0 auto;
        }

        .fr-grid-split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: start;
        }

        /* Benefits cards layout */
        .fr-benefits-title {
          font-family: 'Outfit', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .fr-benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .fr-benefit-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 20px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.01);
        }

        .fr-benefit-card:hover {
          transform: translateY(-4px);
          border-color: rgba(22, 163, 74, 0.3);
          box-shadow: 0 10px 20px rgba(6, 78, 59, 0.05);
        }

        .fr-benefit-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(22, 163, 74, 0.08);
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .fr-benefit-h {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .fr-benefit-p {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.5;
        }

        /* ── INTERACTIVE CALCULATOR ── */
        .fr-calc-box {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 20px;
          padding: 24px;
          color: white;
          margin-top: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .fr-calc-title {
          font-family: 'Outfit', sans-serif;
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .fr-calc-selector {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin: 16px 0;
        }

        .fr-calc-btn {
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 10px 4px;
          color: #cbd5e1;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.22s ease;
          text-align: center;
        }

        .fr-calc-btn:hover {
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.06);
          color: white;
        }

        .fr-calc-btn.active {
          border-color: #2ebd3a;
          background: rgba(22, 163, 74, 0.12);
          color: #4ade80;
          box-shadow: 0 0 12px rgba(22, 163, 74, 0.2);
        }

        .fr-calc-results {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 16px;
          border: 1px dashed rgba(255, 255, 255, 0.1);
        }

        .fr-calc-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 12px;
        }

        .fr-calc-row:last-child {
          border: none;
          padding-bottom: 0;
        }

        .fr-calc-label {
          color: #94a3b8;
          font-weight: 500;
        }

        .fr-calc-value {
          color: #e2e8f0;
          font-weight: 700;
          text-align: right;
        }

        .fr-roi-badge {
          background: rgba(34, 197, 94, 0.12);
          color: #4ade80;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 800;
        }

        /* ── APPLICATION FORM ── */
        .fr-form-card {
          background: white;
          border: 1px solid #e8edf3;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0, 20, 60, 0.02), 0 30px 60px rgba(0, 20, 60, 0.04);
        }

        .fr-form-head {
          margin-bottom: 24px;
        }

        .fr-form-title {
          font-family: 'Outfit', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }

        .fr-form-subtitle {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.5;
        }

        .fr-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;
          text-align: left;
        }

        .fr-label {
          font-size: 11.5px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .fr-input {
          width: 100%;
          padding: 10px 14px;
          border-radius: 8px;
          border: 1.5px solid #cbd5e1;
          background: #f8fafc;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          color: #0f172a;
          outline: none;
          transition: all 0.22s ease;
        }

        .fr-input:focus {
          border-color: #16a34a;
          background: white;
          box-shadow: 0 0 10px rgba(22, 163, 74, 0.1);
        }

        .fr-textarea {
          resize: none;
          height: 60px;
        }

        .fr-error {
          font-size: 10px;
          font-weight: 600;
          color: #ef4444;
          margin-top: 4px;
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .fr-btn-submit {
          width: 100%;
          padding: 14px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(135deg, #1fa82a 0%, #2ebd3a 100%);
          color: white;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(46, 189, 58, 0.15);
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .fr-btn-submit:hover {
          transform: translateY(-1.5px);
          box-shadow: 0 8px 18px rgba(46, 189, 58, 0.25);
        }

        .fr-btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* ── SUCCESS SCREEN ── */
        .fr-success {
          text-align: center;
          padding: 30px 10px;
        }

        .fr-success-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #dcfce7;
          border: 3px solid #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #16a34a;
          margin: 0 auto 20px;
          box-shadow: 0 0 24px rgba(22, 163, 74, 0.2);
          animation: scaleUpSuccess 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes scaleUpSuccess {
          from { transform: scale(0.6); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .fr-success h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 26px;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .fr-success p {
          font-size: 13.5px;
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .fr-success-ticket {
          background: linear-gradient(135deg, rgba(22, 163, 74, 0.08) 0%, rgba(0, 136, 255, 0.04) 100%);
          border: 1.5px dashed #16a34a;
          border-radius: 14px;
          padding: 18px;
          margin-bottom: 24px;
          max-width: 440px;
          margin-left: auto;
          margin-right: auto;
        }

        .fr-ticket-code {
          font-family: 'Fira Code', monospace;
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-top: 4px;
          letter-spacing: 1px;
        }

        .fr-btn-home {
          padding: 12px 24px;
          border-radius: 8px;
          border: none;
          background: #0f172a;
          color: white;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.22s ease;
        }

        .fr-btn-home:hover {
          background: #1e293b;
          transform: translateY(-1px);
        }

        /* ── Responsive Stats Counter (Matches ContactUs.jsx) ── */
        .fr-stats-counter {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .fr-stats-divider {
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,0.1);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .fr-grid-split {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
        @media (max-width: 768px) {
          .fr-stats-counter {
            flex-direction: column;
            gap: 24px;
          }
          .fr-stats-divider {
            display: none;
          }
        }
        @media (max-width: 580px) {
          .fr-benefits-grid {
            grid-template-columns: 1fr;
          }
          .fr-form-card {
            padding: 24px 18px;
          }
        }
      `}),n.jsxs("div",{className:"fr-page",children:[n.jsxs("section",{style:{position:"relative",overflow:"hidden",minHeight:520,paddingTop:10,paddingBottom:40,background:"linear-gradient(150deg, #020c1b 0%, #0a1f44 40%, #004b23 80%, #16a34a 100%)",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:[n.jsx("div",{style:{position:"absolute",width:560,height:560,borderRadius:"50%",background:"radial-gradient(circle, rgba(34, 197, 94, 0.18) 0%, transparent 65%)",top:-180,right:-120,animation:"orbMove1 14s ease-in-out infinite",pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle, rgba(0,87,184,0.30) 0%, transparent 65%)",bottom:-160,left:-100,animation:"orbMove2 18s ease-in-out infinite",pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",backgroundSize:"32px 32px"}}),n.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:n.jsx("div",{style:{position:"absolute",left:0,right:0,height:3,background:"linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.0) 15%, rgba(74,222,128,0.9) 50%, rgba(74,222,128,0.0) 85%, transparent 100%)",animation:"scanBeam 4s ease-in-out infinite",filter:"blur(1px)"}})}),n.jsx("div",{style:{position:"absolute",top:70,left:"7%",width:64,height:64,border:"2px solid rgba(74,222,128,0.25)",borderRadius:16,transform:"rotate(15deg)",animation:"floatYSlow 6s ease-in-out infinite",pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",bottom:80,right:"8%",width:44,height:44,border:"2px solid rgba(99,179,237,0.2)",borderRadius:"50%",animation:"floatY 5s ease-in-out infinite",pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",top:120,right:"18%",width:28,height:28,background:"rgba(74,222,128,0.12)",borderRadius:8,transform:"rotate(30deg)",animation:"floatYSlow 7s ease-in-out .5s infinite",pointerEvents:"none"}}),n.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",padding:"0 24px",maxWidth:720},children:[n.jsxs("h1",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:"clamp(2.2rem, 5vw, 3.8rem)",fontWeight:800,color:"#fff",lineHeight:1.08,letterSpacing:"-0.04em",margin:"0 0 22px",opacity:c?1:0,transform:c?"translateY(0) skewY(0deg)":"translateY(40px) skewY(2deg)",transition:"opacity .75s ease .12s, transform .75s cubic-bezier(.34,1.3,.64,1) .12s"},children:["Own a",n.jsx("br",{}),n.jsx("span",{style:{background:"linear-gradient(90deg, #4bd557 0%, #7ded88 50%, #4bd557 100%)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:c?"glowPulse 3s ease-in-out infinite":"none",display:"inline-block"},children:"ScanForSafe Franchise"})]}),n.jsx("p",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:16,color:"rgba(186,230,253,0.85)",lineHeight:1.7,maxWidth:580,margin:"0 auto 40px",opacity:c?1:0,transform:c?"translateY(0)":"translateY(24px)",transition:"opacity .7s ease .26s, transform .7s ease .26s"},children:"Partner with India's smartest QR-based safety brand. Scale a high-yielding technology business with exclusive territories, high margins, and 100% advertising support."}),n.jsxs("div",{ref:p,className:"fr-stats-counter",children:[n.jsx(Ns,{num:40,suffix:"%",label:"Profit Margin",active:g,delay:0}),n.jsx("div",{className:"fr-stats-divider"}),n.jsx(Ns,{num:12,suffix:" hrs",label:"Approval turnaround",active:g,delay:.15}),n.jsx("div",{className:"fr-stats-divider"}),n.jsx(Ns,{num:5e4,suffix:"+",label:"Est. Monthly ROI (₹)",active:g,delay:.3})]})]}),n.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,pointerEvents:"none"},children:n.jsx("svg",{viewBox:"0 0 1440 72",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:n.jsx("path",{d:"M0,48 C240,80 480,16 720,40 C960,64 1200,24 1440,48 L1440,72 L0,72 Z",fill:"#f8fafc"})})})]}),n.jsx("section",{className:"fr-section",children:n.jsxs("div",{className:"fr-grid-split",children:[n.jsxs("div",{children:[n.jsxs("h2",{className:"fr-benefits-title",children:[n.jsx(Bu,{style:{color:"#16a34a"}})," Why Partner With Us?"]}),n.jsxs("div",{className:"fr-benefits-grid",children:[n.jsxs("div",{className:"fr-benefit-card",children:[n.jsx("div",{className:"fr-benefit-icon",children:n.jsx(s1,{})}),n.jsx("h3",{className:"fr-benefit-h",children:"High ROI Model"}),n.jsx("p",{className:"fr-benefit-p",children:"Earn up to 40%–50% profit margin on physical QR visual safety tags & smart NFC cards distributed in your region."})]}),n.jsxs("div",{className:"fr-benefit-card",children:[n.jsx("div",{className:"fr-benefit-icon",children:n.jsx($e,{})}),n.jsx("h3",{className:"fr-benefit-h",children:"Exclusive Territory"}),n.jsx("p",{className:"fr-benefit-p",children:"Secure exclusive ownership rights for dedicated pincodes. Zero local brand competition."})]}),n.jsxs("div",{className:"fr-benefit-card",children:[n.jsx("div",{className:"fr-benefit-icon",children:n.jsx(Vh,{})}),n.jsx("h3",{className:"fr-benefit-h",children:"Innovative Tech"}),n.jsx("p",{className:"fr-benefit-p",children:"India's leading cloud network mapping QR-codes for vehicle safety, senior citizens, children, and pets."})]}),n.jsxs("div",{className:"fr-benefit-card",children:[n.jsx("div",{className:"fr-benefit-icon",children:n.jsx($e,{style:{transform:"rotate(45deg)"}})}),n.jsx("h3",{className:"fr-benefit-h",children:"Marketing Support"}),n.jsx("p",{className:"fr-benefit-p",children:"Receive complete physical branding collaterals, digital flyers, and targeted local ad campaign execution."})]})]}),n.jsxs("div",{className:"fr-calc-box",children:[n.jsxs("div",{className:"fr-calc-title",children:[n.jsx(Ah,{style:{color:"#4ade80",width:18,height:18}})," Investment & ROI Calculator"]}),n.jsx("p",{style:{fontSize:11,color:"#94a3b8"},children:"Select an investment tier to estimate your benefits, exclusive boundaries, and estimated returns:"}),n.jsxs("div",{className:"fr-calc-selector",children:[n.jsx("button",{type:"button",className:`fr-calc-btn ${y.investment==="50000"?"active":""}`,onClick:()=>j("investment","50000"),children:"₹50K (Silver)"}),n.jsx("button",{type:"button",className:`fr-calc-btn ${y.investment==="100000"?"active":""}`,onClick:()=>j("investment","100000"),children:"₹1L (Gold)"}),n.jsx("button",{type:"button",className:`fr-calc-btn ${y.investment==="300000"?"active":""}`,onClick:()=>j("investment","300000"),children:"₹3L+ (Platinum)"})]}),n.jsxs("div",{className:"fr-calc-results",children:[n.jsxs("div",{className:"fr-calc-row",children:[n.jsx("span",{className:"fr-calc-label",children:"Franchise Tier:"}),n.jsx("span",{className:"fr-calc-value",style:{color:"#4ade80",fontWeight:800},children:h.tierName})]}),n.jsxs("div",{className:"fr-calc-row",children:[n.jsx("span",{className:"fr-calc-label",children:"Profit Margin:"}),n.jsx("span",{className:"fr-calc-value",children:h.margins})]}),n.jsxs("div",{className:"fr-calc-row",children:[n.jsx("span",{className:"fr-calc-label",children:"Pincode Allocation:"}),n.jsx("span",{className:"fr-calc-value",children:h.pincodes})]}),n.jsxs("div",{className:"fr-calc-row",children:[n.jsx("span",{className:"fr-calc-label",children:"Initial Inventory:"}),n.jsx("span",{className:"fr-calc-value",children:h.inventory})]}),n.jsxs("div",{className:"fr-calc-row",children:[n.jsx("span",{className:"fr-calc-label",children:"Marketing Support:"}),n.jsx("span",{className:"fr-calc-value",children:h.marketingSupport})]}),n.jsxs("div",{className:"fr-calc-row",style:{paddingTop:10,marginTop:4,borderTop:"1px dashed rgba(255,255,255,0.15)"},children:[n.jsx("span",{className:"fr-calc-label",style:{color:"white"},children:"Estimated Net Income:"}),n.jsx("span",{className:"fr-roi-badge",children:h.potentialRoi})]})]})]})]}),n.jsx("div",{className:"fr-form-card",children:t?n.jsxs("div",{className:"fr-success",children:[n.jsx("div",{className:"fr-success-icon",children:n.jsx(zi,{style:{width:34,height:34}})}),n.jsx("h2",{children:"Application Submitted!"}),n.jsxs("p",{children:["Thank you, ",n.jsx("strong",{children:y.name}),", for your interest in ScanForSafe! ",n.jsx("br",{}),"Your franchise application for ",n.jsxs("strong",{children:[y.city,", ",y.state]})," has been securely logged."]}),n.jsxs("div",{className:"fr-success-ticket",children:[n.jsx("div",{style:{fontSize:10,color:"#64748b",fontWeight:700,textTransform:"uppercase"},children:"🎟️ Application Ticket ID"}),n.jsx("div",{className:"fr-ticket-code",children:a}),n.jsxs("div",{style:{fontSize:11,color:"#16a34a",fontWeight:700,marginTop:6},children:["Our Franchise Manager will reach out on ",y.mobile]})]}),n.jsx("p",{style:{fontSize:11.5,color:"#64748b",lineHeight:1.5},children:"📞 WhatsApp Support: +91 86393 22479  |  ✉ partners@scanforsafe.com"}),n.jsx("button",{className:"fr-btn-home",onClick:()=>e("/"),children:"Back to Homepage"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"fr-form-head",children:[n.jsx("h2",{className:"fr-form-title",children:"Franchise Application Form"}),n.jsx("p",{className:"fr-form-subtitle",children:"Submit your regional business query below. Our Franchise Manager will contact you shortly."})]}),n.jsxs("form",{onSubmit:u,children:[n.jsxs("div",{className:"fr-group",children:[n.jsx("label",{className:"fr-label",children:"Full Name *"}),n.jsx("input",{type:"text",className:"fr-input",placeholder:"e.g. Rahul Sharma",value:y.name,onChange:b=>j("name",b.target.value),required:!0}),l.name&&n.jsxs("span",{className:"fr-error",children:["⚠️ ",l.name]})]}),n.jsxs("div",{className:"fr-group",children:[n.jsx("label",{className:"fr-label",children:"WhatsApp Number *"}),n.jsx("input",{type:"tel",className:"fr-input",placeholder:"10-digit WhatsApp number",value:y.mobile,onChange:b=>j("mobile",b.target.value),maxLength:10,required:!0}),l.mobile&&n.jsxs("span",{className:"fr-error",children:["⚠️ ",l.mobile]})]}),n.jsxs("div",{className:"fr-group",children:[n.jsx("label",{className:"fr-label",children:"Email Address *"}),n.jsx("input",{type:"email",className:"fr-input",placeholder:"yourname@example.com",value:y.email,onChange:b=>j("email",b.target.value),required:!0}),l.email&&n.jsxs("span",{className:"fr-error",children:["⚠️ ",l.email]})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[n.jsxs("div",{className:"fr-group",children:[n.jsx("label",{className:"fr-label",children:"City *"}),n.jsx("input",{type:"text",className:"fr-input",placeholder:"e.g. Hyderabad",value:y.city,onChange:b=>j("city",b.target.value),required:!0}),l.city&&n.jsxs("span",{className:"fr-error",children:["⚠️ ",l.city]})]}),n.jsxs("div",{className:"fr-group",children:[n.jsx("label",{className:"fr-label",children:"State *"}),n.jsx("input",{type:"text",className:"fr-input",placeholder:"e.g. Telangana",value:y.state,onChange:b=>j("state",b.target.value),required:!0}),l.state&&n.jsxs("span",{className:"fr-error",children:["⚠️ ",l.state]})]})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:"10px"},children:[n.jsxs("div",{className:"fr-group",children:[n.jsx("label",{className:"fr-label",children:"Business Experience"}),n.jsxs("select",{className:"fr-input",value:y.experience,onChange:b=>j("experience",b.target.value),style:{height:"40px"},children:[n.jsx("option",{value:"None",children:"No prior business"}),n.jsx("option",{value:"1-3 Years",children:"1 - 3 Years"}),n.jsx("option",{value:"3+ Years",children:"3+ Years"})]})]}),n.jsxs("div",{className:"fr-group",children:[n.jsx("label",{className:"fr-label",children:"Shop/Office Available?"}),n.jsxs("select",{className:"fr-input",value:y.shopAvailable,onChange:b=>j("shopAvailable",b.target.value),style:{height:"40px"},children:[n.jsx("option",{value:"No",children:"No Space Yet"}),n.jsx("option",{value:"Yes",children:"Yes, I have"})]})]})]}),n.jsxs("div",{className:"fr-group",children:[n.jsx("label",{className:"fr-label",children:"Investment Interest Level (₹)"}),n.jsxs("select",{className:"fr-input",value:y.investment,onChange:b=>j("investment",b.target.value),style:{height:"40px"},children:[n.jsx("option",{value:"50000",children:"₹50,000 (Silver Partner)"}),n.jsx("option",{value:"100000",children:"₹1,00,000 (Gold Partner)"}),n.jsx("option",{value:"300000",children:"₹3,00,000+ (Platinum Master)"})]})]}),n.jsxs("div",{className:"fr-group",children:[n.jsx("label",{className:"fr-label",children:"Message / Territory Details"}),n.jsx("textarea",{className:"fr-input fr-textarea",placeholder:"Mention proposed pincodes or query...",value:y.message,onChange:b=>j("message",b.target.value)})]}),n.jsx("button",{type:"submit",className:"fr-btn-submit",disabled:i,children:i?"Registering Application...":n.jsxs(n.Fragment,{children:[n.jsx(Eo,{style:{width:14,height:14}})," Apply for Franchise ✔"]})})]})]})})]})})]})]})}function kg(){const t=kr().pathname==="/login",[r,i]=v.useState(!1);return v.useEffect(()=>{const s=setTimeout(()=>{i(!0)},600);return()=>clearTimeout(s)},[]),n.jsxs("div",{className:"min-h-screen flex flex-col",children:[!t&&n.jsx(Rh,{}),n.jsx("main",{className:"flex-1",children:n.jsxs(yh,{children:[n.jsx(fe,{path:"/",element:n.jsx(A1,{})}),n.jsx(fe,{path:"/features",element:n.jsx(J1,{})}),n.jsx(fe,{path:"/products",element:n.jsx(sg,{})}),n.jsx(fe,{path:"/use-cases",element:n.jsx(dg,{})}),n.jsx(fe,{path:"/how-it-works",element:n.jsx(cg,{})}),n.jsx(fe,{path:"/testimonials",element:n.jsx(gg,{})}),n.jsx(fe,{path:"/login",element:n.jsx(yg,{})}),n.jsx(fe,{path:"/contact",element:n.jsx(D1,{})}),n.jsx(fe,{path:"/privacy-policy",element:n.jsx(U1,{})}),n.jsx(fe,{path:"/terms",element:n.jsx(H1,{})}),n.jsx(fe,{path:"/qr-form",element:n.jsx(V1,{})}),n.jsx(fe,{path:"/preregister",element:n.jsx(bg,{})}),n.jsx(fe,{path:"/franchise",element:n.jsx(jg,{})})]})}),!t&&n.jsx(h1,{}),!t&&n.jsx(Y1,{}),r&&n.jsxs("div",{onClick:()=>i(!1),style:{position:"fixed",inset:0,background:"rgba(11, 37, 69, 0.70)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",zIndex:999999,display:"flex",alignItems:"center",justifyContent:"center",padding:24,animation:"fadeInOverlay 0.35s ease-out forwards"},children:[n.jsx("style",{children:`
            @keyframes fadeInOverlay {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes zoomInModal {
              from { transform: scale(0.92) translateY(20px); opacity: 0; }
              to { transform: scale(1) translateY(0); opacity: 1; }
            }
            .sfs-popup-close {
              position: absolute;
              top: 16px;
              right: 16px;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: white;
              border: 1px solid #e2e8f0;
              box-shadow: 0 4px 12px rgba(0,0,0,0.12);
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 16px;
              color: #64748b;
              transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
              z-index: 10;
              outline: none;
            }
            .sfs-popup-close:hover {
              background: #fee2e2;
              border-color: #fca5a5;
              color: #dc2626;
              transform: scale(1.1) rotate(90deg);
            }
            .sfs-popup-card {
              position: relative;
              max-width: min(90vw, 550px);
              width: 100%;
              border-radius: 28px;
              background: white;
              box-shadow: 0 30px 80px rgba(11, 37, 69, 0.45);
              border: 2px solid #2ebd3a;
              overflow: hidden;
              animation: zoomInModal 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }
          `}),n.jsxs("div",{className:"sfs-popup-card",onClick:s=>s.stopPropagation(),children:[n.jsx("button",{className:"sfs-popup-close",onClick:()=>i(!1),children:"✕"}),n.jsx("img",{src:"/popup.png",alt:"ScanForSafe Announcement",style:{width:"100%",height:"auto",display:"block",maxHeight:"80vh",objectFit:"contain"}})]})]})]})}zs.createRoot(document.getElementById("root")).render(n.jsx(hd.StrictMode,{children:n.jsx(Ch,{children:n.jsx(kg,{})})}));
