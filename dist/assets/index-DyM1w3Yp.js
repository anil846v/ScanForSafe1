function e0(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(i,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function t0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var md={exports:{}},_i={},yd={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rn=Symbol.for("react.element"),r0=Symbol.for("react.portal"),n0=Symbol.for("react.fragment"),i0=Symbol.for("react.strict_mode"),s0=Symbol.for("react.profiler"),a0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),l0=Symbol.for("react.forward_ref"),d0=Symbol.for("react.suspense"),c0=Symbol.for("react.memo"),u0=Symbol.for("react.lazy"),qo=Symbol.iterator;function p0(e){return e===null||typeof e!="object"?null:(e=qo&&e[qo]||e["@@iterator"],typeof e=="function"?e:null)}var bd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vd=Object.assign,wd={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=wd,this.updater=n||bd}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jd(){}jd.prototype=Ir.prototype;function Da(e,t,n){this.props=e,this.context=t,this.refs=wd,this.updater=n||bd}var Oa=Da.prototype=new jd;Oa.constructor=Da;vd(Oa,Ir.prototype);Oa.isPureReactComponent=!0;var Xo=Array.isArray,kd=Object.prototype.hasOwnProperty,_a={current:null},Sd={key:!0,ref:!0,__self:!0,__source:!0};function Cd(e,t,n){var i,s={},a=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)kd.call(t,i)&&!Sd.hasOwnProperty(i)&&(s[i]=t[i]);var d=arguments.length-2;if(d===1)s.children=n;else if(1<d){for(var l=Array(d),c=0;c<d;c++)l[c]=arguments[c+2];s.children=l}if(e&&e.defaultProps)for(i in d=e.defaultProps,d)s[i]===void 0&&(s[i]=d[i]);return{$$typeof:Rn,type:e,key:a,ref:o,props:s,_owner:_a.current}}function f0(e,t){return{$$typeof:Rn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $a(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rn}function g0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qo=/\/+/g;function ls(e,t){return typeof e=="object"&&e!==null&&e.key!=null?g0(""+e.key):t.toString(36)}function ri(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Rn:case r0:o=!0}}if(o)return o=e,s=s(o),e=i===""?"."+ls(o,0):i,Xo(s)?(n="",e!=null&&(n=e.replace(Qo,"$&/")+"/"),ri(s,t,n,"",function(c){return c})):s!=null&&($a(s)&&(s=f0(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Qo,"$&/")+"/")+e)),t.push(s)),1;if(o=0,i=i===""?".":i+":",Xo(e))for(var d=0;d<e.length;d++){a=e[d];var l=i+ls(a,d);o+=ri(a,t,n,l,s)}else if(l=p0(e),typeof l=="function")for(e=l.call(e),d=0;!(a=e.next()).done;)a=a.value,l=i+ls(a,d++),o+=ri(a,t,n,l,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Wn(e,t,n){if(e==null)return e;var i=[],s=0;return ri(e,i,"","",function(a){return t.call(n,a,s++)}),i}function h0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},ni={transition:null},x0={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:ni,ReactCurrentOwner:_a};function zd(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Wn,forEach:function(e,t,n){Wn(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wn(e,function(){t++}),t},toArray:function(e){return Wn(e,function(t){return t})||[]},only:function(e){if(!$a(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Ir;W.Fragment=n0;W.Profiler=s0;W.PureComponent=Da;W.StrictMode=i0;W.Suspense=d0;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x0;W.act=zd;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=vd({},e.props),s=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=_a.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(l in t)kd.call(t,l)&&!Sd.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&d!==void 0?d[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){d=Array(l);for(var c=0;c<l;c++)d[c]=arguments[c+2];i.children=d}return{$$typeof:Rn,type:e.type,key:s,ref:a,props:i,_owner:o}};W.createContext=function(e){return e={$$typeof:o0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:a0,_context:e},e.Consumer=e};W.createElement=Cd;W.createFactory=function(e){var t=Cd.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:l0,render:e}};W.isValidElement=$a;W.lazy=function(e){return{$$typeof:u0,_payload:{_status:-1,_result:e},_init:h0}};W.memo=function(e,t){return{$$typeof:c0,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=ni.transition;ni.transition={};try{e()}finally{ni.transition=t}};W.unstable_act=zd;W.useCallback=function(e,t){return pe.current.useCallback(e,t)};W.useContext=function(e){return pe.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};W.useEffect=function(e,t){return pe.current.useEffect(e,t)};W.useId=function(){return pe.current.useId()};W.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return pe.current.useMemo(e,t)};W.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};W.useRef=function(e){return pe.current.useRef(e)};W.useState=function(e){return pe.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return pe.current.useTransition()};W.version="18.3.1";yd.exports=W;var x=yd.exports;const Nd=t0(x),m0=e0({__proto__:null,default:Nd},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0=x,b0=Symbol.for("react.element"),v0=Symbol.for("react.fragment"),w0=Object.prototype.hasOwnProperty,j0=y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k0={key:!0,ref:!0,__self:!0,__source:!0};function Rd(e,t,n){var i,s={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)w0.call(t,i)&&!k0.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)s[i]===void 0&&(s[i]=t[i]);return{$$typeof:b0,type:e,key:a,ref:o,props:s,_owner:j0.current}}_i.Fragment=v0;_i.jsx=Rd;_i.jsxs=Rd;md.exports=_i;var r=md.exports,Os={},Id={exports:{}},Ce={},Ed={exports:{}},Md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,P){var L=E.length;E.push(P);e:for(;0<L;){var X=L-1>>>1,ee=E[X];if(0<s(ee,P))E[X]=P,E[L]=ee,L=X;else break e}}function n(E){return E.length===0?null:E[0]}function i(E){if(E.length===0)return null;var P=E[0],L=E.pop();if(L!==P){E[0]=L;e:for(var X=0,ee=E.length,Tn=ee>>>1;X<Tn;){var Tt=2*(X+1)-1,os=E[Tt],Lt=Tt+1,Ln=E[Lt];if(0>s(os,L))Lt<ee&&0>s(Ln,os)?(E[X]=Ln,E[Lt]=L,X=Lt):(E[X]=os,E[Tt]=L,X=Tt);else if(Lt<ee&&0>s(Ln,L))E[X]=Ln,E[Lt]=L,X=Lt;else break e}}return P}function s(E,P){var L=E.sortIndex-P.sortIndex;return L!==0?L:E.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,d=o.now();e.unstable_now=function(){return o.now()-d}}var l=[],c=[],f=1,u=null,h=3,b=!1,v=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var P=n(c);P!==null;){if(P.callback===null)i(c);else if(P.startTime<=E)i(c),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(c)}}function k(E){if(w=!1,m(E),!v)if(n(l)!==null)v=!0,ss(j);else{var P=n(c);P!==null&&as(k,P.startTime-E)}}function j(E,P){v=!1,w&&(w=!1,g(B),B=-1),b=!0;var L=h;try{for(m(P),u=n(l);u!==null&&(!(u.expirationTime>P)||E&&!Le());){var X=u.callback;if(typeof X=="function"){u.callback=null,h=u.priorityLevel;var ee=X(u.expirationTime<=P);P=e.unstable_now(),typeof ee=="function"?u.callback=ee:u===n(l)&&i(l),m(P)}else i(l);u=n(l)}if(u!==null)var Tn=!0;else{var Tt=n(c);Tt!==null&&as(k,Tt.startTime-P),Tn=!1}return Tn}finally{u=null,h=L,b=!1}}var N=!1,M=null,B=-1,$=5,T=-1;function Le(){return!(e.unstable_now()-T<$)}function Tr(){if(M!==null){var E=e.unstable_now();T=E;var P=!0;try{P=M(!0,E)}finally{P?Lr():(N=!1,M=null)}}else N=!1}var Lr;if(typeof p=="function")Lr=function(){p(Tr)};else if(typeof MessageChannel<"u"){var Yo=new MessageChannel,Ju=Yo.port2;Yo.port1.onmessage=Tr,Lr=function(){Ju.postMessage(null)}}else Lr=function(){y(Tr,0)};function ss(E){M=E,N||(N=!0,Lr())}function as(E,P){B=y(function(){E(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||b||(v=!0,ss(j))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var L=h;h=P;try{return E()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=h;h=E;try{return P()}finally{h=L}},e.unstable_scheduleCallback=function(E,P,L){var X=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?X+L:X):L=X,E){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=L+ee,E={id:f++,callback:P,priorityLevel:E,startTime:L,expirationTime:ee,sortIndex:-1},L>X?(E.sortIndex=L,t(c,E),n(l)===null&&E===n(c)&&(w?(g(B),B=-1):w=!0,as(k,L-X))):(E.sortIndex=ee,t(l,E),v||b||(v=!0,ss(j))),E},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(E){var P=h;return function(){var L=h;h=P;try{return E.apply(this,arguments)}finally{h=L}}}})(Md);Ed.exports=Md;var S0=Ed.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=x,Se=S0;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bd=new Set,ln={};function Gt(e,t){jr(e,t),jr(e+"Capture",t)}function jr(e,t){for(ln[e]=t,e=0;e<t.length;e++)Bd.add(t[e])}var rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_s=Object.prototype.hasOwnProperty,z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Go={},Ko={};function N0(e){return _s.call(Ko,e)?!0:_s.call(Go,e)?!1:z0.test(e)?Ko[e]=!0:(Go[e]=!0,!1)}function R0(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I0(e,t,n,i){if(t===null||typeof t>"u"||R0(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,i,s,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ua=/[\-:]([a-z])/g;function Ha(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ua,Ha);se[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ua,Ha);se[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ua,Ha);se[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Va(e,t,n,i){var s=se.hasOwnProperty(t)?se[t]:null;(s!==null?s.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I0(t,n,s,i)&&(n=null),i||s===null?N0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,i=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var ot=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fn=Symbol.for("react.element"),nr=Symbol.for("react.portal"),ir=Symbol.for("react.fragment"),Ya=Symbol.for("react.strict_mode"),$s=Symbol.for("react.profiler"),Pd=Symbol.for("react.provider"),Td=Symbol.for("react.context"),qa=Symbol.for("react.forward_ref"),Us=Symbol.for("react.suspense"),Hs=Symbol.for("react.suspense_list"),Xa=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),Ld=Symbol.for("react.offscreen"),Zo=Symbol.iterator;function Wr(e){return e===null||typeof e!="object"?null:(e=Zo&&e[Zo]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,ds;function qr(e){if(ds===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ds=t&&t[1]||""}return`
`+ds+e}var cs=!1;function us(e,t){if(!e||cs)return"";cs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var i=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){i=c}e.call(t.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),a=i.stack.split(`
`),o=s.length-1,d=a.length-1;1<=o&&0<=d&&s[o]!==a[d];)d--;for(;1<=o&&0<=d;o--,d--)if(s[o]!==a[d]){if(o!==1||d!==1)do if(o--,d--,0>d||s[o]!==a[d]){var l=`
`+s[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=d);break}}}finally{cs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qr(e):""}function E0(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=us(e.type,!1),e;case 11:return e=us(e.type.render,!1),e;case 1:return e=us(e.type,!0),e;default:return""}}function Vs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ir:return"Fragment";case nr:return"Portal";case $s:return"Profiler";case Ya:return"StrictMode";case Us:return"Suspense";case Hs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Td:return(e.displayName||"Context")+".Consumer";case Pd:return(e._context.displayName||"Context")+".Provider";case qa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xa:return t=e.displayName||null,t!==null?t:Vs(e.type)||"Memo";case dt:t=e._payload,e=e._init;try{return Vs(e(t))}catch{}}return null}function M0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vs(t);case 8:return t===Ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function B0(e){var t=Wd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function An(e){e._valueTracker||(e._valueTracker=B0(e))}function Fd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Wd(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ys(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jo(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ad(e,t){t=t.checked,t!=null&&Va(e,"checked",t,!1)}function qs(e,t){Ad(e,t);var n=Nt(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xs(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function el(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xs(e,t,n){(t!=="number"||hi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xr=Array.isArray;function hr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Qs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Xr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function Dd(e,t){var n=Nt(t.value),i=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function rl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Od(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Od(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dn,_d=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Dn=Dn||document.createElement("div"),Dn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Dn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P0=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(e){P0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zr[t]=Zr[e]})});function $d(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zr.hasOwnProperty(e)&&Zr[e]?(""+t).trim():t+"px"}function Ud(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=$d(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,s):e[n]=s}}var T0=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ks(e,t){if(t){if(T0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Zs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Js=null;function Qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ea=null,xr=null,mr=null;function nl(e){if(e=Mn(e)){if(typeof ea!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Yi(t),ea(e.stateNode,e.type,t))}}function Hd(e){xr?mr?mr.push(e):mr=[e]:xr=e}function Vd(){if(xr){var e=xr,t=mr;if(mr=xr=null,nl(e),t)for(e=0;e<t.length;e++)nl(t[e])}}function Yd(e,t){return e(t)}function qd(){}var ps=!1;function Xd(e,t,n){if(ps)return e(t,n);ps=!0;try{return Yd(e,t,n)}finally{ps=!1,(xr!==null||mr!==null)&&(qd(),Vd())}}function cn(e,t){var n=e.stateNode;if(n===null)return null;var i=Yi(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var ta=!1;if(rt)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){ta=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{ta=!1}function L0(e,t,n,i,s,a,o,d,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Jr=!1,xi=null,mi=!1,ra=null,W0={onError:function(e){Jr=!0,xi=e}};function F0(e,t,n,i,s,a,o,d,l){Jr=!1,xi=null,L0.apply(W0,arguments)}function A0(e,t,n,i,s,a,o,d,l){if(F0.apply(this,arguments),Jr){if(Jr){var c=xi;Jr=!1,xi=null}else throw Error(S(198));mi||(mi=!0,ra=c)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function il(e){if(Kt(e)!==e)throw Error(S(188))}function D0(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return il(s),e;if(a===i)return il(s),t;a=a.sibling}throw Error(S(188))}if(n.return!==i.return)n=s,i=a;else{for(var o=!1,d=s.child;d;){if(d===n){o=!0,n=s,i=a;break}if(d===i){o=!0,i=s,n=a;break}d=d.sibling}if(!o){for(d=a.child;d;){if(d===n){o=!0,n=a,i=s;break}if(d===i){o=!0,i=a,n=s;break}d=d.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==i)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Gd(e){return e=D0(e),e!==null?Kd(e):null}function Kd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kd(e);if(t!==null)return t;e=e.sibling}return null}var Zd=Se.unstable_scheduleCallback,sl=Se.unstable_cancelCallback,O0=Se.unstable_shouldYield,_0=Se.unstable_requestPaint,Q=Se.unstable_now,$0=Se.unstable_getCurrentPriorityLevel,Ga=Se.unstable_ImmediatePriority,Jd=Se.unstable_UserBlockingPriority,yi=Se.unstable_NormalPriority,U0=Se.unstable_LowPriority,ec=Se.unstable_IdlePriority,$i=null,Xe=null;function H0(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot($i,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:q0,V0=Math.log,Y0=Math.LN2;function q0(e){return e>>>=0,e===0?32:31-(V0(e)/Y0|0)|0}var On=64,_n=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bi(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,s=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var d=o&~s;d!==0?i=Qr(d):(a&=o,a!==0&&(i=Qr(a)))}else o=n&~s,o!==0?i=Qr(o):a!==0&&(i=Qr(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&s)&&(s=i&-i,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-Oe(t),s=1<<n,i|=e[n],t&=~s;return i}function X0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Oe(a),d=1<<o,l=s[o];l===-1?(!(d&n)||d&i)&&(s[o]=X0(d,t)):l<=t&&(e.expiredLanes|=d),a&=~d}}function na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tc(){var e=On;return On<<=1,!(On&4194240)&&(On=64),e}function fs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function In(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function G0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Oe(n),a=1<<s;t[s]=0,i[s]=-1,e[s]=-1,n&=~a}}function Ka(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Oe(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}var A=0;function rc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nc,Za,ic,sc,ac,ia=!1,$n=[],mt=null,yt=null,bt=null,un=new Map,pn=new Map,ut=[],K0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function al(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(t.pointerId)}}function Ar(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Mn(t),t!==null&&Za(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Z0(e,t,n,i,s){switch(t){case"focusin":return mt=Ar(mt,e,t,n,i,s),!0;case"dragenter":return yt=Ar(yt,e,t,n,i,s),!0;case"mouseover":return bt=Ar(bt,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return un.set(a,Ar(un.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,pn.set(a,Ar(pn.get(a)||null,e,t,n,i,s)),!0}return!1}function oc(e){var t=At(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Qd(n),t!==null){e.blockedOn=t,ac(e.priority,function(){ic(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Js=i,n.target.dispatchEvent(i),Js=null}else return t=Mn(n),t!==null&&Za(t),e.blockedOn=n,!1;t.shift()}return!0}function ol(e,t,n){ii(e)&&n.delete(t)}function J0(){ia=!1,mt!==null&&ii(mt)&&(mt=null),yt!==null&&ii(yt)&&(yt=null),bt!==null&&ii(bt)&&(bt=null),un.forEach(ol),pn.forEach(ol)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,ia||(ia=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,J0)))}function fn(e){function t(s){return Dr(s,e)}if(0<$n.length){Dr($n[0],e);for(var n=1;n<$n.length;n++){var i=$n[n];i.blockedOn===e&&(i.blockedOn=null)}}for(mt!==null&&Dr(mt,e),yt!==null&&Dr(yt,e),bt!==null&&Dr(bt,e),un.forEach(t),pn.forEach(t),n=0;n<ut.length;n++)i=ut[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)oc(n),n.blockedOn===null&&ut.shift()}var yr=ot.ReactCurrentBatchConfig,vi=!0;function ep(e,t,n,i){var s=A,a=yr.transition;yr.transition=null;try{A=1,Ja(e,t,n,i)}finally{A=s,yr.transition=a}}function tp(e,t,n,i){var s=A,a=yr.transition;yr.transition=null;try{A=4,Ja(e,t,n,i)}finally{A=s,yr.transition=a}}function Ja(e,t,n,i){if(vi){var s=sa(e,t,n,i);if(s===null)ks(e,t,i,wi,n),al(e,i);else if(Z0(s,e,t,n,i))i.stopPropagation();else if(al(e,i),t&4&&-1<K0.indexOf(e)){for(;s!==null;){var a=Mn(s);if(a!==null&&nc(a),a=sa(e,t,n,i),a===null&&ks(e,t,i,wi,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else ks(e,t,i,null,n)}}var wi=null;function sa(e,t,n,i){if(wi=null,e=Qa(i),e=At(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wi=e,null}function lc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($0()){case Ga:return 1;case Jd:return 4;case yi:case U0:return 16;case ec:return 536870912;default:return 16}default:return 16}}var ft=null,eo=null,si=null;function dc(){if(si)return si;var e,t=eo,n=t.length,i,s="value"in ft?ft.value:ft.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(i=1;i<=o&&t[n-i]===s[a-i];i++);return si=s.slice(e,1<i?1-i:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Un(){return!0}function ll(){return!1}function ze(e){function t(n,i,s,a,o){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(a):a[d]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Un:ll,this.isPropagationStopped=ll,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),t}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},to=ze(Er),En=Y({},Er,{view:0,detail:0}),rp=ze(En),gs,hs,Or,Ui=Y({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(gs=e.screenX-Or.screenX,hs=e.screenY-Or.screenY):hs=gs=0,Or=e),gs)},movementY:function(e){return"movementY"in e?e.movementY:hs}}),dl=ze(Ui),np=Y({},Ui,{dataTransfer:0}),ip=ze(np),sp=Y({},En,{relatedTarget:0}),xs=ze(sp),ap=Y({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),op=ze(ap),lp=Y({},Er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dp=ze(lp),cp=Y({},Er,{data:0}),cl=ze(cp),up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fp[e])?!!t[e]:!1}function ro(){return gp}var hp=Y({},En,{key:function(e){if(e.key){var t=up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ro,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xp=ze(hp),mp=Y({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ul=ze(mp),yp=Y({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ro}),bp=ze(yp),vp=Y({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),wp=ze(vp),jp=Y({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kp=ze(jp),Sp=[9,13,27,32],no=rt&&"CompositionEvent"in window,en=null;rt&&"documentMode"in document&&(en=document.documentMode);var Cp=rt&&"TextEvent"in window&&!en,cc=rt&&(!no||en&&8<en&&11>=en),pl=" ",fl=!1;function uc(e,t){switch(e){case"keyup":return Sp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function zp(e,t){switch(e){case"compositionend":return pc(t);case"keypress":return t.which!==32?null:(fl=!0,pl);case"textInput":return e=t.data,e===pl&&fl?null:e;default:return null}}function Np(e,t){if(sr)return e==="compositionend"||!no&&uc(e,t)?(e=dc(),si=eo=ft=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cc&&t.locale!=="ko"?null:t.data;default:return null}}var Rp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rp[e.type]:t==="textarea"}function fc(e,t,n,i){Hd(i),t=ji(t,"onChange"),0<t.length&&(n=new to("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var tn=null,gn=null;function Ip(e){Sc(e,0)}function Hi(e){var t=lr(e);if(Fd(t))return e}function Ep(e,t){if(e==="change")return t}var gc=!1;if(rt){var ms;if(rt){var ys="oninput"in document;if(!ys){var hl=document.createElement("div");hl.setAttribute("oninput","return;"),ys=typeof hl.oninput=="function"}ms=ys}else ms=!1;gc=ms&&(!document.documentMode||9<document.documentMode)}function xl(){tn&&(tn.detachEvent("onpropertychange",hc),gn=tn=null)}function hc(e){if(e.propertyName==="value"&&Hi(gn)){var t=[];fc(t,gn,e,Qa(e)),Xd(Ip,t)}}function Mp(e,t,n){e==="focusin"?(xl(),tn=t,gn=n,tn.attachEvent("onpropertychange",hc)):e==="focusout"&&xl()}function Bp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(gn)}function Pp(e,t){if(e==="click")return Hi(t)}function Tp(e,t){if(e==="input"||e==="change")return Hi(t)}function Lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:Lp;function hn(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!_s.call(t,s)||!Ue(e[s],t[s]))return!1}return!0}function ml(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yl(e,t){var n=ml(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ml(n)}}function xc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mc(){for(var e=window,t=hi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hi(e.document)}return t}function io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wp(e){var t=mc(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xc(n.ownerDocument.documentElement,n)){if(i!==null&&io(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(i.start,s);i=i.end===void 0?a:Math.min(i.end,s),!e.extend&&a>i&&(s=i,i=a,a=s),s=yl(n,a);var o=yl(n,i);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fp=rt&&"documentMode"in document&&11>=document.documentMode,ar=null,aa=null,rn=null,oa=!1;function bl(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oa||ar==null||ar!==hi(i)||(i=ar,"selectionStart"in i&&io(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),rn&&hn(rn,i)||(rn=i,i=ji(aa,"onSelect"),0<i.length&&(t=new to("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ar)))}function Hn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var or={animationend:Hn("Animation","AnimationEnd"),animationiteration:Hn("Animation","AnimationIteration"),animationstart:Hn("Animation","AnimationStart"),transitionend:Hn("Transition","TransitionEnd")},bs={},yc={};rt&&(yc=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function Vi(e){if(bs[e])return bs[e];if(!or[e])return e;var t=or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yc)return bs[e]=t[n];return e}var bc=Vi("animationend"),vc=Vi("animationiteration"),wc=Vi("animationstart"),jc=Vi("transitionend"),kc=new Map,vl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){kc.set(e,t),Gt(t,[e])}for(var vs=0;vs<vl.length;vs++){var ws=vl[vs],Ap=ws.toLowerCase(),Dp=ws[0].toUpperCase()+ws.slice(1);It(Ap,"on"+Dp)}It(bc,"onAnimationEnd");It(vc,"onAnimationIteration");It(wc,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(jc,"onTransitionEnd");jr("onMouseEnter",["mouseout","mouseover"]);jr("onMouseLeave",["mouseout","mouseover"]);jr("onPointerEnter",["pointerout","pointerover"]);jr("onPointerLeave",["pointerout","pointerover"]);Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Op=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function wl(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,A0(i,t,void 0,e),e.currentTarget=null}function Sc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var o=i.length-1;0<=o;o--){var d=i[o],l=d.instance,c=d.currentTarget;if(d=d.listener,l!==a&&s.isPropagationStopped())break e;wl(s,d,c),a=l}else for(o=0;o<i.length;o++){if(d=i[o],l=d.instance,c=d.currentTarget,d=d.listener,l!==a&&s.isPropagationStopped())break e;wl(s,d,c),a=l}}}if(mi)throw e=ra,mi=!1,ra=null,e}function O(e,t){var n=t[pa];n===void 0&&(n=t[pa]=new Set);var i=e+"__bubble";n.has(i)||(Cc(t,e,2,!1),n.add(i))}function js(e,t,n){var i=0;t&&(i|=4),Cc(n,e,i,t)}var Vn="_reactListening"+Math.random().toString(36).slice(2);function xn(e){if(!e[Vn]){e[Vn]=!0,Bd.forEach(function(n){n!=="selectionchange"&&(Op.has(n)||js(n,!1,e),js(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vn]||(t[Vn]=!0,js("selectionchange",!1,t))}}function Cc(e,t,n,i){switch(lc(t)){case 1:var s=ep;break;case 4:s=tp;break;default:s=Ja}n=s.bind(null,t,n,e),s=void 0,!ta||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function ks(e,t,n,i,s){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var d=i.stateNode.containerInfo;if(d===s||d.nodeType===8&&d.parentNode===s)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;d!==null;){if(o=At(d),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}d=d.parentNode}}i=i.return}Xd(function(){var c=a,f=Qa(n),u=[];e:{var h=kc.get(e);if(h!==void 0){var b=to,v=e;switch(e){case"keypress":if(ai(n)===0)break e;case"keydown":case"keyup":b=xp;break;case"focusin":v="focus",b=xs;break;case"focusout":v="blur",b=xs;break;case"beforeblur":case"afterblur":b=xs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=dl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=bp;break;case bc:case vc:case wc:b=op;break;case jc:b=wp;break;case"scroll":b=rp;break;case"wheel":b=kp;break;case"copy":case"cut":case"paste":b=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ul}var w=(t&4)!==0,y=!w&&e==="scroll",g=w?h!==null?h+"Capture":null:h;w=[];for(var p=c,m;p!==null;){m=p;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,g!==null&&(k=cn(p,g),k!=null&&w.push(mn(p,k,m)))),y)break;p=p.return}0<w.length&&(h=new b(h,v,null,n,f),u.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",h&&n!==Js&&(v=n.relatedTarget||n.fromElement)&&(At(v)||v[nt]))break e;if((b||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,b?(v=n.relatedTarget||n.toElement,b=c,v=v?At(v):null,v!==null&&(y=Kt(v),v!==y||v.tag!==5&&v.tag!==6)&&(v=null)):(b=null,v=c),b!==v)){if(w=dl,k="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=ul,k="onPointerLeave",g="onPointerEnter",p="pointer"),y=b==null?h:lr(b),m=v==null?h:lr(v),h=new w(k,p+"leave",b,n,f),h.target=y,h.relatedTarget=m,k=null,At(f)===c&&(w=new w(g,p+"enter",v,n,f),w.target=m,w.relatedTarget=y,k=w),y=k,b&&v)t:{for(w=b,g=v,p=0,m=w;m;m=tr(m))p++;for(m=0,k=g;k;k=tr(k))m++;for(;0<p-m;)w=tr(w),p--;for(;0<m-p;)g=tr(g),m--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=tr(w),g=tr(g)}w=null}else w=null;b!==null&&jl(u,h,b,w,!1),v!==null&&y!==null&&jl(u,y,v,w,!0)}}e:{if(h=c?lr(c):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var j=Ep;else if(gl(h))if(gc)j=Tp;else{j=Bp;var N=Mp}else(b=h.nodeName)&&b.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Pp);if(j&&(j=j(e,c))){fc(u,j,n,f);break e}N&&N(e,h,c),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Xs(h,"number",h.value)}switch(N=c?lr(c):window,e){case"focusin":(gl(N)||N.contentEditable==="true")&&(ar=N,aa=c,rn=null);break;case"focusout":rn=aa=ar=null;break;case"mousedown":oa=!0;break;case"contextmenu":case"mouseup":case"dragend":oa=!1,bl(u,n,f);break;case"selectionchange":if(Fp)break;case"keydown":case"keyup":bl(u,n,f)}var M;if(no)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else sr?uc(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(cc&&n.locale!=="ko"&&(sr||B!=="onCompositionStart"?B==="onCompositionEnd"&&sr&&(M=dc()):(ft=f,eo="value"in ft?ft.value:ft.textContent,sr=!0)),N=ji(c,B),0<N.length&&(B=new cl(B,e,null,n,f),u.push({event:B,listeners:N}),M?B.data=M:(M=pc(n),M!==null&&(B.data=M)))),(M=Cp?zp(e,n):Np(e,n))&&(c=ji(c,"onBeforeInput"),0<c.length&&(f=new cl("onBeforeInput","beforeinput",null,n,f),u.push({event:f,listeners:c}),f.data=M))}Sc(u,t)})}function mn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ji(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=cn(e,n),a!=null&&i.unshift(mn(e,a,s)),a=cn(e,t),a!=null&&i.push(mn(e,a,s))),e=e.return}return i}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jl(e,t,n,i,s){for(var a=t._reactName,o=[];n!==null&&n!==i;){var d=n,l=d.alternate,c=d.stateNode;if(l!==null&&l===i)break;d.tag===5&&c!==null&&(d=c,s?(l=cn(n,a),l!=null&&o.unshift(mn(n,l,d))):s||(l=cn(n,a),l!=null&&o.push(mn(n,l,d)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var _p=/\r\n?/g,$p=/\u0000|\uFFFD/g;function kl(e){return(typeof e=="string"?e:""+e).replace(_p,`
`).replace($p,"")}function Yn(e,t,n){if(t=kl(t),kl(e)!==t&&n)throw Error(S(425))}function ki(){}var la=null,da=null;function ca(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ua=typeof setTimeout=="function"?setTimeout:void 0,Up=typeof clearTimeout=="function"?clearTimeout:void 0,Sl=typeof Promise=="function"?Promise:void 0,Hp=typeof queueMicrotask=="function"?queueMicrotask:typeof Sl<"u"?function(e){return Sl.resolve(null).then(e).catch(Vp)}:ua;function Vp(e){setTimeout(function(){throw e})}function Ss(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){e.removeChild(s),fn(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);fn(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Mr,yn="__reactProps$"+Mr,nt="__reactContainer$"+Mr,pa="__reactEvents$"+Mr,Yp="__reactListeners$"+Mr,qp="__reactHandles$"+Mr;function At(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cl(e);e!==null;){if(n=e[Ye])return n;e=Cl(e)}return t}e=n,n=e.parentNode}return null}function Mn(e){return e=e[Ye]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Yi(e){return e[yn]||null}var fa=[],dr=-1;function Et(e){return{current:e}}function _(e){0>dr||(e.current=fa[dr],fa[dr]=null,dr--)}function D(e,t){dr++,fa[dr]=e.current,e.current=t}var Rt={},de=Et(Rt),me=Et(!1),Ht=Rt;function kr(e,t){var n=e.type.contextTypes;if(!n)return Rt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ye(e){return e=e.childContextTypes,e!=null}function Si(){_(me),_(de)}function zl(e,t,n){if(de.current!==Rt)throw Error(S(168));D(de,t),D(me,n)}function zc(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in t))throw Error(S(108,M0(e)||"Unknown",s));return Y({},n,i)}function Ci(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rt,Ht=de.current,D(de,e),D(me,me.current),!0}function Nl(e,t,n){var i=e.stateNode;if(!i)throw Error(S(169));n?(e=zc(e,t,Ht),i.__reactInternalMemoizedMergedChildContext=e,_(me),_(de),D(de,e)):_(me),D(me,n)}var Ke=null,qi=!1,Cs=!1;function Nc(e){Ke===null?Ke=[e]:Ke.push(e)}function Xp(e){qi=!0,Nc(e)}function Mt(){if(!Cs&&Ke!==null){Cs=!0;var e=0,t=A;try{var n=Ke;for(A=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Ke=null,qi=!1}catch(s){throw Ke!==null&&(Ke=Ke.slice(e+1)),Zd(Ga,Mt),s}finally{A=t,Cs=!1}}return null}var cr=[],ur=0,zi=null,Ni=0,Ne=[],Re=0,Vt=null,Je=1,et="";function Wt(e,t){cr[ur++]=Ni,cr[ur++]=zi,zi=e,Ni=t}function Rc(e,t,n){Ne[Re++]=Je,Ne[Re++]=et,Ne[Re++]=Vt,Vt=e;var i=Je;e=et;var s=32-Oe(i)-1;i&=~(1<<s),n+=1;var a=32-Oe(t)+s;if(30<a){var o=s-s%5;a=(i&(1<<o)-1).toString(32),i>>=o,s-=o,Je=1<<32-Oe(t)+s|n<<s|i,et=a+e}else Je=1<<a|n<<s|i,et=e}function so(e){e.return!==null&&(Wt(e,1),Rc(e,1,0))}function ao(e){for(;e===zi;)zi=cr[--ur],cr[ur]=null,Ni=cr[--ur],cr[ur]=null;for(;e===Vt;)Vt=Ne[--Re],Ne[Re]=null,et=Ne[--Re],Ne[Re]=null,Je=Ne[--Re],Ne[Re]=null}var je=null,we=null,U=!1,De=null;function Ic(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Rl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,we=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vt!==null?{id:Je,overflow:et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,we=null,!0):!1;default:return!1}}function ga(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ha(e){if(U){var t=we;if(t){var n=t;if(!Rl(e,t)){if(ga(e))throw Error(S(418));t=vt(n.nextSibling);var i=je;t&&Rl(e,t)?Ic(i,n):(e.flags=e.flags&-4097|2,U=!1,je=e)}}else{if(ga(e))throw Error(S(418));e.flags=e.flags&-4097|2,U=!1,je=e}}}function Il(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function qn(e){if(e!==je)return!1;if(!U)return Il(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ca(e.type,e.memoizedProps)),t&&(t=we)){if(ga(e))throw Ec(),Error(S(418));for(;t;)Ic(e,t),t=vt(t.nextSibling)}if(Il(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=je?vt(e.stateNode.nextSibling):null;return!0}function Ec(){for(var e=we;e;)e=vt(e.nextSibling)}function Sr(){we=je=null,U=!1}function oo(e){De===null?De=[e]:De.push(e)}var Qp=ot.ReactCurrentBatchConfig;function _r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var i=n.stateNode}if(!i)throw Error(S(147,e));var s=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var d=s.refs;o===null?delete d[a]:d[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Xn(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function El(e){var t=e._init;return t(e._payload)}function Mc(e){function t(g,p){if(e){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function i(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function s(g,p){return g=St(g,p),g.index=0,g.sibling=null,g}function a(g,p,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function d(g,p,m,k){return p===null||p.tag!==6?(p=Bs(m,g.mode,k),p.return=g,p):(p=s(p,m),p.return=g,p)}function l(g,p,m,k){var j=m.type;return j===ir?f(g,p,m.props.children,k,m.key):p!==null&&(p.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dt&&El(j)===p.type)?(k=s(p,m.props),k.ref=_r(g,p,m),k.return=g,k):(k=fi(m.type,m.key,m.props,null,g.mode,k),k.ref=_r(g,p,m),k.return=g,k)}function c(g,p,m,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Ps(m,g.mode,k),p.return=g,p):(p=s(p,m.children||[]),p.return=g,p)}function f(g,p,m,k,j){return p===null||p.tag!==7?(p=$t(m,g.mode,k,j),p.return=g,p):(p=s(p,m),p.return=g,p)}function u(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Bs(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fn:return m=fi(p.type,p.key,p.props,null,g.mode,m),m.ref=_r(g,null,p),m.return=g,m;case nr:return p=Ps(p,g.mode,m),p.return=g,p;case dt:var k=p._init;return u(g,k(p._payload),m)}if(Xr(p)||Wr(p))return p=$t(p,g.mode,m,null),p.return=g,p;Xn(g,p)}return null}function h(g,p,m,k){var j=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:d(g,p,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Fn:return m.key===j?l(g,p,m,k):null;case nr:return m.key===j?c(g,p,m,k):null;case dt:return j=m._init,h(g,p,j(m._payload),k)}if(Xr(m)||Wr(m))return j!==null?null:f(g,p,m,k,null);Xn(g,m)}return null}function b(g,p,m,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(m)||null,d(p,g,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Fn:return g=g.get(k.key===null?m:k.key)||null,l(p,g,k,j);case nr:return g=g.get(k.key===null?m:k.key)||null,c(p,g,k,j);case dt:var N=k._init;return b(g,p,m,N(k._payload),j)}if(Xr(k)||Wr(k))return g=g.get(m)||null,f(p,g,k,j,null);Xn(p,k)}return null}function v(g,p,m,k){for(var j=null,N=null,M=p,B=p=0,$=null;M!==null&&B<m.length;B++){M.index>B?($=M,M=null):$=M.sibling;var T=h(g,M,m[B],k);if(T===null){M===null&&(M=$);break}e&&M&&T.alternate===null&&t(g,M),p=a(T,p,B),N===null?j=T:N.sibling=T,N=T,M=$}if(B===m.length)return n(g,M),U&&Wt(g,B),j;if(M===null){for(;B<m.length;B++)M=u(g,m[B],k),M!==null&&(p=a(M,p,B),N===null?j=M:N.sibling=M,N=M);return U&&Wt(g,B),j}for(M=i(g,M);B<m.length;B++)$=b(M,g,B,m[B],k),$!==null&&(e&&$.alternate!==null&&M.delete($.key===null?B:$.key),p=a($,p,B),N===null?j=$:N.sibling=$,N=$);return e&&M.forEach(function(Le){return t(g,Le)}),U&&Wt(g,B),j}function w(g,p,m,k){var j=Wr(m);if(typeof j!="function")throw Error(S(150));if(m=j.call(m),m==null)throw Error(S(151));for(var N=j=null,M=p,B=p=0,$=null,T=m.next();M!==null&&!T.done;B++,T=m.next()){M.index>B?($=M,M=null):$=M.sibling;var Le=h(g,M,T.value,k);if(Le===null){M===null&&(M=$);break}e&&M&&Le.alternate===null&&t(g,M),p=a(Le,p,B),N===null?j=Le:N.sibling=Le,N=Le,M=$}if(T.done)return n(g,M),U&&Wt(g,B),j;if(M===null){for(;!T.done;B++,T=m.next())T=u(g,T.value,k),T!==null&&(p=a(T,p,B),N===null?j=T:N.sibling=T,N=T);return U&&Wt(g,B),j}for(M=i(g,M);!T.done;B++,T=m.next())T=b(M,g,B,T.value,k),T!==null&&(e&&T.alternate!==null&&M.delete(T.key===null?B:T.key),p=a(T,p,B),N===null?j=T:N.sibling=T,N=T);return e&&M.forEach(function(Tr){return t(g,Tr)}),U&&Wt(g,B),j}function y(g,p,m,k){if(typeof m=="object"&&m!==null&&m.type===ir&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Fn:e:{for(var j=m.key,N=p;N!==null;){if(N.key===j){if(j=m.type,j===ir){if(N.tag===7){n(g,N.sibling),p=s(N,m.props.children),p.return=g,g=p;break e}}else if(N.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dt&&El(j)===N.type){n(g,N.sibling),p=s(N,m.props),p.ref=_r(g,N,m),p.return=g,g=p;break e}n(g,N);break}else t(g,N);N=N.sibling}m.type===ir?(p=$t(m.props.children,g.mode,k,m.key),p.return=g,g=p):(k=fi(m.type,m.key,m.props,null,g.mode,k),k.ref=_r(g,p,m),k.return=g,g=k)}return o(g);case nr:e:{for(N=m.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=s(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=Ps(m,g.mode,k),p.return=g,g=p}return o(g);case dt:return N=m._init,y(g,p,N(m._payload),k)}if(Xr(m))return v(g,p,m,k);if(Wr(m))return w(g,p,m,k);Xn(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=s(p,m),p.return=g,g=p):(n(g,p),p=Bs(m,g.mode,k),p.return=g,g=p),o(g)):n(g,p)}return y}var Cr=Mc(!0),Bc=Mc(!1),Ri=Et(null),Ii=null,pr=null,lo=null;function co(){lo=pr=Ii=null}function uo(e){var t=Ri.current;_(Ri),e._currentValue=t}function xa(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function br(e,t){Ii=e,lo=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(lo!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(Ii===null)throw Error(S(308));pr=e,Ii.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var Dt=null;function po(e){Dt===null?Dt=[e]:Dt.push(e)}function Pc(e,t,n,i){var s=t.interleaved;return s===null?(n.next=n,po(t)):(n.next=s.next,s.next=n),t.interleaved=n,it(e,i)}function it(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ct=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wt(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,F&2){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,it(e,n)}return s=i.interleaved,s===null?(t.next=t,po(i)):(t.next=s.next,s.next=t),i.interleaved=t,it(e,n)}function oi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Ka(e,n)}}function Ml(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ei(e,t,n,i){var s=e.updateQueue;ct=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,d=s.shared.pending;if(d!==null){s.shared.pending=null;var l=d,c=l.next;l.next=null,o===null?a=c:o.next=c,o=l;var f=e.alternate;f!==null&&(f=f.updateQueue,d=f.lastBaseUpdate,d!==o&&(d===null?f.firstBaseUpdate=c:d.next=c,f.lastBaseUpdate=l))}if(a!==null){var u=s.baseState;o=0,f=c=l=null,d=a;do{var h=d.lane,b=d.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:b,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var v=e,w=d;switch(h=t,b=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){u=v.call(b,u,h);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(b,u,h):v,h==null)break e;u=Y({},u,h);break e;case 2:ct=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,h=s.effects,h===null?s.effects=[d]:h.push(d))}else b={eventTime:b,lane:h,tag:d.tag,payload:d.payload,callback:d.callback,next:null},f===null?(c=f=b,l=u):f=f.next=b,o|=h;if(d=d.next,d===null){if(d=s.shared.pending,d===null)break;h=d,d=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(f===null&&(l=u),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);qt|=o,e.lanes=o,e.memoizedState=u}}function Bl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(S(191,s));s.call(i)}}}var Bn={},Qe=Et(Bn),bn=Et(Bn),vn=Et(Bn);function Ot(e){if(e===Bn)throw Error(S(174));return e}function go(e,t){switch(D(vn,t),D(bn,e),D(Qe,Bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gs(t,e)}_(Qe),D(Qe,t)}function zr(){_(Qe),_(bn),_(vn)}function Lc(e){Ot(vn.current);var t=Ot(Qe.current),n=Gs(t,e.type);t!==n&&(D(bn,e),D(Qe,n))}function ho(e){bn.current===e&&(_(Qe),_(bn))}var H=Et(0);function Mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zs=[];function xo(){for(var e=0;e<zs.length;e++)zs[e]._workInProgressVersionPrimary=null;zs.length=0}var li=ot.ReactCurrentDispatcher,Ns=ot.ReactCurrentBatchConfig,Yt=0,V=null,Z=null,te=null,Bi=!1,nn=!1,wn=0,Gp=0;function ae(){throw Error(S(321))}function mo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function yo(e,t,n,i,s,a){if(Yt=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,li.current=e===null||e.memoizedState===null?ef:tf,e=n(i,s),nn){a=0;do{if(nn=!1,wn=0,25<=a)throw Error(S(301));a+=1,te=Z=null,t.updateQueue=null,li.current=rf,e=n(i,s)}while(nn)}if(li.current=Pi,t=Z!==null&&Z.next!==null,Yt=0,te=Z=V=null,Bi=!1,t)throw Error(S(300));return e}function bo(){var e=wn!==0;return wn=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?V.memoizedState=te=e:te=te.next=e,te}function Te(){if(Z===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=te===null?V.memoizedState:te.next;if(t!==null)te=t,Z=e;else{if(e===null)throw Error(S(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},te===null?V.memoizedState=te=e:te=te.next=e}return te}function jn(e,t){return typeof t=="function"?t(e):t}function Rs(e){var t=Te(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var i=Z,s=i.baseQueue,a=n.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}i.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,i=i.baseState;var d=o=null,l=null,c=a;do{var f=c.lane;if((Yt&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var u={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(d=l=u,o=i):l=l.next=u,V.lanes|=f,qt|=f}c=c.next}while(c!==null&&c!==a);l===null?o=i:l.next=d,Ue(i,t.memoizedState)||(xe=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){s=e;do a=s.lane,V.lanes|=a,qt|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Is(e){var t=Te(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);Ue(a,t.memoizedState)||(xe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Wc(){}function Fc(e,t){var n=V,i=Te(),s=t(),a=!Ue(i.memoizedState,s);if(a&&(i.memoizedState=s,xe=!0),i=i.queue,vo(Oc.bind(null,n,i,e),[e]),i.getSnapshot!==t||a||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,kn(9,Dc.bind(null,n,i,s,t),void 0,null),re===null)throw Error(S(349));Yt&30||Ac(n,t,s)}return s}function Ac(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dc(e,t,n,i){t.value=n,t.getSnapshot=i,_c(t)&&$c(e)}function Oc(e,t,n){return n(function(){_c(t)&&$c(e)})}function _c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function $c(e){var t=it(e,1);t!==null&&_e(t,e,1,-1)}function Pl(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:e},t.queue=e,e=e.dispatch=Jp.bind(null,V,e),[t.memoizedState,e]}function kn(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Uc(){return Te().memoizedState}function di(e,t,n,i){var s=Ve();V.flags|=e,s.memoizedState=kn(1|t,n,void 0,i===void 0?null:i)}function Xi(e,t,n,i){var s=Te();i=i===void 0?null:i;var a=void 0;if(Z!==null){var o=Z.memoizedState;if(a=o.destroy,i!==null&&mo(i,o.deps)){s.memoizedState=kn(t,n,a,i);return}}V.flags|=e,s.memoizedState=kn(1|t,n,a,i)}function Tl(e,t){return di(8390656,8,e,t)}function vo(e,t){return Xi(2048,8,e,t)}function Hc(e,t){return Xi(4,2,e,t)}function Vc(e,t){return Xi(4,4,e,t)}function Yc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qc(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4,4,Yc.bind(null,t,e),n)}function wo(){}function Xc(e,t){var n=Te();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&mo(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Qc(e,t){var n=Te();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&mo(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Gc(e,t,n){return Yt&21?(Ue(n,t)||(n=tc(),V.lanes|=n,qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function Kp(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var i=Ns.transition;Ns.transition={};try{e(!1),t()}finally{A=n,Ns.transition=i}}function Kc(){return Te().memoizedState}function Zp(e,t,n){var i=kt(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Zc(e))Jc(t,n);else if(n=Pc(e,t,n,i),n!==null){var s=ue();_e(n,e,i,s),eu(n,t,i)}}function Jp(e,t,n){var i=kt(e),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zc(e))Jc(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,d=a(o,n);if(s.hasEagerState=!0,s.eagerState=d,Ue(d,o)){var l=t.interleaved;l===null?(s.next=s,po(t)):(s.next=l.next,l.next=s),t.interleaved=s;return}}catch{}finally{}n=Pc(e,t,s,i),n!==null&&(s=ue(),_e(n,e,i,s),eu(n,t,i))}}function Zc(e){var t=e.alternate;return e===V||t!==null&&t===V}function Jc(e,t){nn=Bi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function eu(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Ka(e,n)}}var Pi={readContext:Pe,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},ef={readContext:Pe,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Tl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,di(4194308,4,Yc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return di(4194308,4,e,t)},useInsertionEffect:function(e,t){return di(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=Ve();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Zp.bind(null,V,e),[i.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Pl,useDebugValue:wo,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Pl(!1),t=e[0];return e=Kp.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=V,s=Ve();if(U){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),re===null)throw Error(S(349));Yt&30||Ac(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Tl(Oc.bind(null,i,a,e),[e]),i.flags|=2048,kn(9,Dc.bind(null,i,a,n,t),void 0,null),n},useId:function(){var e=Ve(),t=re.identifierPrefix;if(U){var n=et,i=Je;n=(i&~(1<<32-Oe(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=wn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tf={readContext:Pe,useCallback:Xc,useContext:Pe,useEffect:vo,useImperativeHandle:qc,useInsertionEffect:Hc,useLayoutEffect:Vc,useMemo:Qc,useReducer:Rs,useRef:Uc,useState:function(){return Rs(jn)},useDebugValue:wo,useDeferredValue:function(e){var t=Te();return Gc(t,Z.memoizedState,e)},useTransition:function(){var e=Rs(jn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Wc,useSyncExternalStore:Fc,useId:Kc,unstable_isNewReconciler:!1},rf={readContext:Pe,useCallback:Xc,useContext:Pe,useEffect:vo,useImperativeHandle:qc,useInsertionEffect:Hc,useLayoutEffect:Vc,useMemo:Qc,useReducer:Is,useRef:Uc,useState:function(){return Is(jn)},useDebugValue:wo,useDeferredValue:function(e){var t=Te();return Z===null?t.memoizedState=e:Gc(t,Z.memoizedState,e)},useTransition:function(){var e=Is(jn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Wc,useSyncExternalStore:Fc,useId:Kc,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ma(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qi={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ue(),s=kt(e),a=tt(i,s);a.payload=t,n!=null&&(a.callback=n),t=wt(e,a,s),t!==null&&(_e(t,e,s,i),oi(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ue(),s=kt(e),a=tt(i,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=wt(e,a,s),t!==null&&(_e(t,e,s,i),oi(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),i=kt(e),s=tt(n,i);s.tag=2,t!=null&&(s.callback=t),t=wt(e,s,i),t!==null&&(_e(t,e,i,n),oi(t,e,i))}};function Ll(e,t,n,i,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):t.prototype&&t.prototype.isPureReactComponent?!hn(n,i)||!hn(s,a):!0}function tu(e,t,n){var i=!1,s=Rt,a=t.contextType;return typeof a=="object"&&a!==null?a=Pe(a):(s=ye(t)?Ht:de.current,i=t.contextTypes,a=(i=i!=null)?kr(e,s):Rt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qi,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function Wl(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Qi.enqueueReplaceState(t,t.state,null)}function ya(e,t,n,i){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},fo(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Pe(a):(a=ye(t)?Ht:de.current,s.context=kr(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ma(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Qi.enqueueReplaceState(s,s.state,null),Ei(e,n,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t){try{var n="",i=t;do n+=E0(i),i=i.return;while(i);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function Es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ba(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var nf=typeof WeakMap=="function"?WeakMap:Map;function ru(e,t,n){n=tt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Li||(Li=!0,Ia=i),ba(e,t)},n}function nu(e,t,n){n=tt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=t.value;n.payload=function(){return i(s)},n.callback=function(){ba(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ba(e,t),typeof i!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Fl(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new nf;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(s.add(n),e=yf.bind(null,e,t,n),t.then(e,e))}function Al(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dl(e,t,n,i,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tt(-1,1),t.tag=2,wt(n,t,1))),n.lanes|=1),e)}var sf=ot.ReactCurrentOwner,xe=!1;function ce(e,t,n,i){t.child=e===null?Bc(t,null,n,i):Cr(t,e.child,n,i)}function Ol(e,t,n,i,s){n=n.render;var a=t.ref;return br(t,s),i=yo(e,t,n,i,a,s),n=bo(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,st(e,t,s)):(U&&n&&so(t),t.flags|=1,ce(e,t,i,s),t.child)}function _l(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Io(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,iu(e,t,a,i,s)):(e=fi(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:hn,n(o,i)&&e.ref===t.ref)return st(e,t,s)}return t.flags|=1,e=St(a,i),e.ref=t.ref,e.return=t,t.child=e}function iu(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(hn(a,i)&&e.ref===t.ref)if(xe=!1,t.pendingProps=i=a,(e.lanes&s)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,st(e,t,s)}return va(e,t,n,i,s)}function su(e,t,n){var i=t.pendingProps,s=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(gr,ve),ve|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(gr,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,D(gr,ve),ve|=i}else a!==null?(i=a.baseLanes|n,t.memoizedState=null):i=n,D(gr,ve),ve|=i;return ce(e,t,s,n),t.child}function au(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function va(e,t,n,i,s){var a=ye(n)?Ht:de.current;return a=kr(t,a),br(t,s),n=yo(e,t,n,i,a,s),i=bo(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,st(e,t,s)):(U&&i&&so(t),t.flags|=1,ce(e,t,n,s),t.child)}function $l(e,t,n,i,s){if(ye(n)){var a=!0;Ci(t)}else a=!1;if(br(t,s),t.stateNode===null)ci(e,t),tu(t,n,i),ya(t,n,i,s),i=!0;else if(e===null){var o=t.stateNode,d=t.memoizedProps;o.props=d;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pe(c):(c=ye(n)?Ht:de.current,c=kr(t,c));var f=n.getDerivedStateFromProps,u=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==i||l!==c)&&Wl(t,o,i,c),ct=!1;var h=t.memoizedState;o.state=h,Ei(t,i,o,s),l=t.memoizedState,d!==i||h!==l||me.current||ct?(typeof f=="function"&&(ma(t,n,f,i),l=t.memoizedState),(d=ct||Ll(t,n,d,i,h,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),o.props=i,o.state=l,o.context=c,i=d):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,Tc(e,t),d=t.memoizedProps,c=t.type===t.elementType?d:Fe(t.type,d),o.props=c,u=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pe(l):(l=ye(n)?Ht:de.current,l=kr(t,l));var b=n.getDerivedStateFromProps;(f=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==u||h!==l)&&Wl(t,o,i,l),ct=!1,h=t.memoizedState,o.state=h,Ei(t,i,o,s);var v=t.memoizedState;d!==u||h!==v||me.current||ct?(typeof b=="function"&&(ma(t,n,b,i),v=t.memoizedState),(c=ct||Ll(t,n,c,i,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return wa(e,t,n,i,a,s)}function wa(e,t,n,i,s,a){au(e,t);var o=(t.flags&128)!==0;if(!i&&!o)return s&&Nl(t,n,!1),st(e,t,a);i=t.stateNode,sf.current=t;var d=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&o?(t.child=Cr(t,e.child,null,a),t.child=Cr(t,null,d,a)):ce(e,t,d,a),t.memoizedState=i.state,s&&Nl(t,n,!0),t.child}function ou(e){var t=e.stateNode;t.pendingContext?zl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zl(e,t.context,!1),go(e,t.containerInfo)}function Ul(e,t,n,i,s){return Sr(),oo(s),t.flags|=256,ce(e,t,n,i),t.child}var ja={dehydrated:null,treeContext:null,retryLane:0};function ka(e){return{baseLanes:e,cachePool:null,transitions:null}}function lu(e,t,n){var i=t.pendingProps,s=H.current,a=!1,o=(t.flags&128)!==0,d;if((d=o)||(d=e!==null&&e.memoizedState===null?!1:(s&2)!==0),d?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),D(H,s&1),e===null)return ha(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Zi(o,i,0,null),e=$t(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ka(n),t.memoizedState=ja,e):jo(t,o));if(s=e.memoizedState,s!==null&&(d=s.dehydrated,d!==null))return af(e,t,o,i,d,s,n);if(a){a=i.fallback,o=t.mode,s=e.child,d=s.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&t.child!==s?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=St(s,l),i.subtreeFlags=s.subtreeFlags&14680064),d!==null?a=St(d,a):(a=$t(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o=o===null?ka(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=ja,i}return a=e.child,e=a.sibling,i=St(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function jo(e,t){return t=Zi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qn(e,t,n,i){return i!==null&&oo(i),Cr(t,e.child,null,n),e=jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function af(e,t,n,i,s,a,o){if(n)return t.flags&256?(t.flags&=-257,i=Es(Error(S(422))),Qn(e,t,o,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,s=t.mode,i=Zi({mode:"visible",children:i.children},s,0,null),a=$t(a,s,o,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&Cr(t,e.child,null,o),t.child.memoizedState=ka(o),t.memoizedState=ja,a);if(!(t.mode&1))return Qn(e,t,o,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var d=i.dgst;return i=d,a=Error(S(419)),i=Es(a,i,void 0),Qn(e,t,o,i)}if(d=(o&e.childLanes)!==0,xe||d){if(i=re,i!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,it(e,s),_e(i,e,s,-1))}return Ro(),i=Es(Error(S(421))),Qn(e,t,o,i)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=bf.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,we=vt(s.nextSibling),je=t,U=!0,De=null,e!==null&&(Ne[Re++]=Je,Ne[Re++]=et,Ne[Re++]=Vt,Je=e.id,et=e.overflow,Vt=t),t=jo(t,i.children),t.flags|=4096,t)}function Hl(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),xa(e.return,t,n)}function Ms(e,t,n,i,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=s)}function du(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;if(ce(e,t,i.children,n),i=H.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hl(e,n,t);else if(e.tag===19)Hl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(D(H,i),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Mi(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Ms(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Mi(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Ms(t,!0,n,null,a);break;case"together":Ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ci(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function of(e,t,n){switch(t.tag){case 3:ou(t),Sr();break;case 5:Lc(t);break;case 1:ye(t.type)&&Ci(t);break;case 4:go(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,s=t.memoizedProps.value;D(Ri,i._currentValue),i._currentValue=s;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(D(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?lu(e,t,n):(D(H,H.current&1),e=st(e,t,n),e!==null?e.sibling:null);D(H,H.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return du(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),D(H,H.current),i)break;return null;case 22:case 23:return t.lanes=0,su(e,t,n)}return st(e,t,n)}var cu,Sa,uu,pu;cu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sa=function(){};uu=function(e,t,n,i){var s=e.memoizedProps;if(s!==i){e=t.stateNode,Ot(Qe.current);var a=null;switch(n){case"input":s=Ys(e,s),i=Ys(e,i),a=[];break;case"select":s=Y({},s,{value:void 0}),i=Y({},i,{value:void 0}),a=[];break;case"textarea":s=Qs(e,s),i=Qs(e,i),a=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=ki)}Ks(n,i);var o;n=null;for(c in s)if(!i.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var d=s[c];for(o in d)d.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ln.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(d=s!=null?s[c]:void 0,i.hasOwnProperty(c)&&l!==d&&(l!=null||d!=null))if(c==="style")if(d){for(o in d)!d.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&d[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,d=d?d.__html:void 0,l!=null&&d!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ln.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&O("scroll",e),a||d===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};pu=function(e,t,n,i){n!==i&&(t.flags|=4)};function $r(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function lf(e,t,n){var i=t.pendingProps;switch(ao(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ye(t.type)&&Si(),oe(t),null;case 3:return i=t.stateNode,zr(),_(me),_(de),xo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(qn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(Ba(De),De=null))),Sa(e,t),oe(t),null;case 5:ho(t);var s=Ot(vn.current);if(n=t.type,e!==null&&t.stateNode!=null)uu(e,t,n,i,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(S(166));return oe(t),null}if(e=Ot(Qe.current),qn(t)){i=t.stateNode,n=t.type;var a=t.memoizedProps;switch(i[Ye]=t,i[yn]=a,e=(t.mode&1)!==0,n){case"dialog":O("cancel",i),O("close",i);break;case"iframe":case"object":case"embed":O("load",i);break;case"video":case"audio":for(s=0;s<Gr.length;s++)O(Gr[s],i);break;case"source":O("error",i);break;case"img":case"image":case"link":O("error",i),O("load",i);break;case"details":O("toggle",i);break;case"input":Jo(i,a),O("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},O("invalid",i);break;case"textarea":tl(i,a),O("invalid",i)}Ks(n,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var d=a[o];o==="children"?typeof d=="string"?i.textContent!==d&&(a.suppressHydrationWarning!==!0&&Yn(i.textContent,d,e),s=["children",d]):typeof d=="number"&&i.textContent!==""+d&&(a.suppressHydrationWarning!==!0&&Yn(i.textContent,d,e),s=["children",""+d]):ln.hasOwnProperty(o)&&d!=null&&o==="onScroll"&&O("scroll",i)}switch(n){case"input":An(i),el(i,a,!0);break;case"textarea":An(i),rl(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=ki)}i=s,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Od(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(n,{is:i.is}):(e=o.createElement(n),n==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,n),e[Ye]=t,e[yn]=i,cu(e,t,!1,!1),t.stateNode=e;e:{switch(o=Zs(n,i),n){case"dialog":O("cancel",e),O("close",e),s=i;break;case"iframe":case"object":case"embed":O("load",e),s=i;break;case"video":case"audio":for(s=0;s<Gr.length;s++)O(Gr[s],e);s=i;break;case"source":O("error",e),s=i;break;case"img":case"image":case"link":O("error",e),O("load",e),s=i;break;case"details":O("toggle",e),s=i;break;case"input":Jo(e,i),s=Ys(e,i),O("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=Y({},i,{value:void 0}),O("invalid",e);break;case"textarea":tl(e,i),s=Qs(e,i),O("invalid",e);break;default:s=i}Ks(n,s),d=s;for(a in d)if(d.hasOwnProperty(a)){var l=d[a];a==="style"?Ud(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_d(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&dn(e,l):typeof l=="number"&&dn(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ln.hasOwnProperty(a)?l!=null&&a==="onScroll"&&O("scroll",e):l!=null&&Va(e,a,l,o))}switch(n){case"input":An(e),el(e,i,!1);break;case"textarea":An(e),rl(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Nt(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?hr(e,!!i.multiple,a,!1):i.defaultValue!=null&&hr(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ki)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)pu(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(S(166));if(n=Ot(vn.current),Ot(Qe.current),qn(t)){if(i=t.stateNode,n=t.memoizedProps,i[Ye]=t,(a=i.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:Yn(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yn(i.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ye]=t,t.stateNode=i}return oe(t),null;case 13:if(_(H),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&t.mode&1&&!(t.flags&128))Ec(),Sr(),t.flags|=98560,a=!1;else if(a=qn(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[Ye]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),a=!1}else De!==null&&(Ba(De),De=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?J===0&&(J=3):Ro())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return zr(),Sa(e,t),e===null&&xn(t.stateNode.containerInfo),oe(t),null;case 10:return uo(t.type._context),oe(t),null;case 17:return ye(t.type)&&Si(),oe(t),null;case 19:if(_(H),a=t.memoizedState,a===null)return oe(t),null;if(i=(t.flags&128)!==0,o=a.rendering,o===null)if(i)$r(a,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Mi(e),o!==null){for(t.flags|=128,$r(a,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)a=n,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(H,H.current&1|2),t.child}e=e.sibling}a.tail!==null&&Q()>Rr&&(t.flags|=128,i=!0,$r(a,!1),t.lanes=4194304)}else{if(!i)if(e=Mi(o),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!U)return oe(t),null}else 2*Q()-a.renderingStartTime>Rr&&n!==1073741824&&(t.flags|=128,i=!0,$r(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Q(),t.sibling=null,n=H.current,D(H,i?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return No(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?ve&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function df(e,t){switch(ao(t),t.tag){case 1:return ye(t.type)&&Si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),_(me),_(de),xo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ho(t),null;case 13:if(_(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(H),null;case 4:return zr(),null;case 10:return uo(t.type._context),null;case 22:case 23:return No(),null;case 24:return null;default:return null}}var Gn=!1,le=!1,cf=typeof WeakSet=="function"?WeakSet:Set,I=null;function fr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){q(e,t,i)}else n.current=null}function Ca(e,t,n){try{n()}catch(i){q(e,t,i)}}var Vl=!1;function uf(e,t){if(la=vi,e=mc(),io(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,d=-1,l=-1,c=0,f=0,u=e,h=null;t:for(;;){for(var b;u!==n||s!==0&&u.nodeType!==3||(d=o+s),u!==a||i!==0&&u.nodeType!==3||(l=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(b=u.firstChild)!==null;)h=u,u=b;for(;;){if(u===e)break t;if(h===n&&++c===s&&(d=o),h===a&&++f===i&&(l=o),(b=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=b}n=d===-1||l===-1?null:{start:d,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(da={focusedElem:e,selectionRange:n},vi=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,y=v.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:Fe(t.type,w),y);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(k){q(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return v=Vl,Vl=!1,v}function sn(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Ca(t,n,a)}s=s.next}while(s!==i)}}function Gi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function za(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fu(e){var t=e.alternate;t!==null&&(e.alternate=null,fu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[yn],delete t[pa],delete t[Yp],delete t[qp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gu(e){return e.tag===5||e.tag===3||e.tag===4}function Yl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Na(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ki));else if(i!==4&&(e=e.child,e!==null))for(Na(e,t,n),e=e.sibling;e!==null;)Na(e,t,n),e=e.sibling}function Ra(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Ra(e,t,n),e=e.sibling;e!==null;)Ra(e,t,n),e=e.sibling}var ne=null,Ae=!1;function lt(e,t,n){for(n=n.child;n!==null;)hu(e,t,n),n=n.sibling}function hu(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount($i,n)}catch{}switch(n.tag){case 5:le||fr(n,t);case 6:var i=ne,s=Ae;ne=null,lt(e,t,n),ne=i,Ae=s,ne!==null&&(Ae?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ae?(e=ne,n=n.stateNode,e.nodeType===8?Ss(e.parentNode,n):e.nodeType===1&&Ss(e,n),fn(e)):Ss(ne,n.stateNode));break;case 4:i=ne,s=Ae,ne=n.stateNode.containerInfo,Ae=!0,lt(e,t,n),ne=i,Ae=s;break;case 0:case 11:case 14:case 15:if(!le&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ca(n,t,o),s=s.next}while(s!==i)}lt(e,t,n);break;case 1:if(!le&&(fr(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(d){q(n,t,d)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(le=(i=le)||n.memoizedState!==null,lt(e,t,n),le=i):lt(e,t,n);break;default:lt(e,t,n)}}function ql(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cf),t.forEach(function(i){var s=vf.bind(null,e,i);n.has(i)||(n.add(i),i.then(s,s))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var a=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 5:ne=d.stateNode,Ae=!1;break e;case 3:ne=d.stateNode.containerInfo,Ae=!0;break e;case 4:ne=d.stateNode.containerInfo,Ae=!0;break e}d=d.return}if(ne===null)throw Error(S(160));hu(a,o,s),ne=null,Ae=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){q(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xu(t,e),t=t.sibling}function xu(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),He(e),i&4){try{sn(3,e,e.return),Gi(3,e)}catch(w){q(e,e.return,w)}try{sn(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:We(t,e),He(e),i&512&&n!==null&&fr(n,n.return);break;case 5:if(We(t,e),He(e),i&512&&n!==null&&fr(n,n.return),e.flags&32){var s=e.stateNode;try{dn(s,"")}catch(w){q(e,e.return,w)}}if(i&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,d=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{d==="input"&&a.type==="radio"&&a.name!=null&&Ad(s,a),Zs(d,o);var c=Zs(d,a);for(o=0;o<l.length;o+=2){var f=l[o],u=l[o+1];f==="style"?Ud(s,u):f==="dangerouslySetInnerHTML"?_d(s,u):f==="children"?dn(s,u):Va(s,f,u,c)}switch(d){case"input":qs(s,a);break;case"textarea":Dd(s,a);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?hr(s,!!a.multiple,b,!1):h!==!!a.multiple&&(a.defaultValue!=null?hr(s,!!a.multiple,a.defaultValue,!0):hr(s,!!a.multiple,a.multiple?[]:"",!1))}s[yn]=a}catch(w){q(e,e.return,w)}}break;case 6:if(We(t,e),He(e),i&4){if(e.stateNode===null)throw Error(S(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(w){q(e,e.return,w)}}break;case 3:if(We(t,e),He(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fn(t.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:We(t,e),He(e);break;case 13:We(t,e),He(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Co=Q())),i&4&&ql(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(le=(c=le)||f,We(t,e),le=c):We(t,e),He(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(I=e,f=e.child;f!==null;){for(u=I=f;I!==null;){switch(h=I,b=h.child,h.tag){case 0:case 11:case 14:case 15:sn(4,h,h.return);break;case 1:fr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{t=i,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){q(i,n,w)}}break;case 5:fr(h,h.return);break;case 22:if(h.memoizedState!==null){Ql(u);continue}}b!==null?(b.return=h,I=b):Ql(u)}f=f.sibling}e:for(f=null,u=e;;){if(u.tag===5){if(f===null){f=u;try{s=u.stateNode,c?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(d=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,d.style.display=$d("display",o))}catch(w){q(e,e.return,w)}}}else if(u.tag===6){if(f===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(w){q(e,e.return,w)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;f===u&&(f=null),u=u.return}f===u&&(f=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:We(t,e),He(e),i&4&&ql(e);break;case 21:break;default:We(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gu(n)){var i=n;break e}n=n.return}throw Error(S(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(dn(s,""),i.flags&=-33);var a=Yl(e);Ra(e,a,s);break;case 3:case 4:var o=i.stateNode.containerInfo,d=Yl(e);Na(e,d,o);break;default:throw Error(S(161))}}catch(l){q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e,t,n){I=e,mu(e)}function mu(e,t,n){for(var i=(e.mode&1)!==0;I!==null;){var s=I,a=s.child;if(s.tag===22&&i){var o=s.memoizedState!==null||Gn;if(!o){var d=s.alternate,l=d!==null&&d.memoizedState!==null||le;d=Gn;var c=le;if(Gn=o,(le=l)&&!c)for(I=s;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?Gl(s):l!==null?(l.return=o,I=l):Gl(s);for(;a!==null;)I=a,mu(a),a=a.sibling;I=s,Gn=d,le=c}Xl(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,I=a):Xl(e)}}function Xl(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||Gi(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!le)if(n===null)i.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Bl(t,a,i);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bl(t,o,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var u=f.dehydrated;u!==null&&fn(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}le||t.flags&512&&za(t)}catch(h){q(t,t.return,h)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Ql(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Gl(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Gi(4,t)}catch(l){q(t,n,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var s=t.return;try{i.componentDidMount()}catch(l){q(t,s,l)}}var a=t.return;try{za(t)}catch(l){q(t,a,l)}break;case 5:var o=t.return;try{za(t)}catch(l){q(t,o,l)}}}catch(l){q(t,t.return,l)}if(t===e){I=null;break}var d=t.sibling;if(d!==null){d.return=t.return,I=d;break}I=t.return}}var ff=Math.ceil,Ti=ot.ReactCurrentDispatcher,ko=ot.ReactCurrentOwner,Be=ot.ReactCurrentBatchConfig,F=0,re=null,G=null,ie=0,ve=0,gr=Et(0),J=0,Sn=null,qt=0,Ki=0,So=0,an=null,he=null,Co=0,Rr=1/0,Ge=null,Li=!1,Ia=null,jt=null,Kn=!1,gt=null,Wi=0,on=0,Ea=null,ui=-1,pi=0;function ue(){return F&6?Q():ui!==-1?ui:ui=Q()}function kt(e){return e.mode&1?F&2&&ie!==0?ie&-ie:Qp.transition!==null?(pi===0&&(pi=tc()),pi):(e=A,e!==0||(e=window.event,e=e===void 0?16:lc(e.type)),e):1}function _e(e,t,n,i){if(50<on)throw on=0,Ea=null,Error(S(185));In(e,n,i),(!(F&2)||e!==re)&&(e===re&&(!(F&2)&&(Ki|=n),J===4&&pt(e,ie)),be(e,i),n===1&&F===0&&!(t.mode&1)&&(Rr=Q()+500,qi&&Mt()))}function be(e,t){var n=e.callbackNode;Q0(e,t);var i=bi(e,e===re?ie:0);if(i===0)n!==null&&sl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&sl(n),t===1)e.tag===0?Xp(Kl.bind(null,e)):Nc(Kl.bind(null,e)),Hp(function(){!(F&6)&&Mt()}),n=null;else{switch(rc(i)){case 1:n=Ga;break;case 4:n=Jd;break;case 16:n=yi;break;case 536870912:n=ec;break;default:n=yi}n=Cu(n,yu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yu(e,t){if(ui=-1,pi=0,F&6)throw Error(S(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var i=bi(e,e===re?ie:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Fi(e,i);else{t=i;var s=F;F|=2;var a=vu();(re!==e||ie!==t)&&(Ge=null,Rr=Q()+500,_t(e,t));do try{xf();break}catch(d){bu(e,d)}while(!0);co(),Ti.current=a,F=s,G!==null?t=0:(re=null,ie=0,t=J)}if(t!==0){if(t===2&&(s=na(e),s!==0&&(i=s,t=Ma(e,s))),t===1)throw n=Sn,_t(e,0),pt(e,i),be(e,Q()),n;if(t===6)pt(e,i);else{if(s=e.current.alternate,!(i&30)&&!gf(s)&&(t=Fi(e,i),t===2&&(a=na(e),a!==0&&(i=a,t=Ma(e,a))),t===1))throw n=Sn,_t(e,0),pt(e,i),be(e,Q()),n;switch(e.finishedWork=s,e.finishedLanes=i,t){case 0:case 1:throw Error(S(345));case 2:Ft(e,he,Ge);break;case 3:if(pt(e,i),(i&130023424)===i&&(t=Co+500-Q(),10<t)){if(bi(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){ue(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ua(Ft.bind(null,e,he,Ge),t);break}Ft(e,he,Ge);break;case 4:if(pt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,s=-1;0<i;){var o=31-Oe(i);a=1<<o,o=t[o],o>s&&(s=o),i&=~a}if(i=s,i=Q()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ff(i/1960))-i,10<i){e.timeoutHandle=ua(Ft.bind(null,e,he,Ge),i);break}Ft(e,he,Ge);break;case 5:Ft(e,he,Ge);break;default:throw Error(S(329))}}}return be(e,Q()),e.callbackNode===n?yu.bind(null,e):null}function Ma(e,t){var n=an;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=Fi(e,t),e!==2&&(t=he,he=n,t!==null&&Ba(t)),e}function Ba(e){he===null?he=e:he.push.apply(he,e)}function gf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Ue(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~So,t&=~Ki,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),i=1<<n;e[n]=-1,t&=~i}}function Kl(e){if(F&6)throw Error(S(327));vr();var t=bi(e,0);if(!(t&1))return be(e,Q()),null;var n=Fi(e,t);if(e.tag!==0&&n===2){var i=na(e);i!==0&&(t=i,n=Ma(e,i))}if(n===1)throw n=Sn,_t(e,0),pt(e,t),be(e,Q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,he,Ge),be(e,Q()),null}function zo(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Rr=Q()+500,qi&&Mt())}}function Xt(e){gt!==null&&gt.tag===0&&!(F&6)&&vr();var t=F;F|=1;var n=Be.transition,i=A;try{if(Be.transition=null,A=1,e)return e()}finally{A=i,Be.transition=n,F=t,!(F&6)&&Mt()}}function No(){ve=gr.current,_(gr)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Up(n)),G!==null)for(n=G.return;n!==null;){var i=n;switch(ao(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Si();break;case 3:zr(),_(me),_(de),xo();break;case 5:ho(i);break;case 4:zr();break;case 13:_(H);break;case 19:_(H);break;case 10:uo(i.type._context);break;case 22:case 23:No()}n=n.return}if(re=e,G=e=St(e.current,null),ie=ve=t,J=0,Sn=null,So=Ki=qt=0,he=an=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,a=n.pending;if(a!==null){var o=a.next;a.next=s,i.next=o}n.pending=i}Dt=null}return e}function bu(e,t){do{var n=G;try{if(co(),li.current=Pi,Bi){for(var i=V.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Bi=!1}if(Yt=0,te=Z=V=null,nn=!1,wn=0,ko.current=null,n===null||n.return===null){J=1,Sn=t,G=null;break}e:{var a=e,o=n.return,d=n,l=t;if(t=ie,d.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=d,u=f.tag;if(!(f.mode&1)&&(u===0||u===11||u===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=Al(o);if(b!==null){b.flags&=-257,Dl(b,o,d,a,t),b.mode&1&&Fl(a,c,t),t=b,l=c;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Fl(a,c,t),Ro();break e}l=Error(S(426))}}else if(U&&d.mode&1){var y=Al(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Dl(y,o,d,a,t),oo(Nr(l,d));break e}}a=l=Nr(l,d),J!==4&&(J=2),an===null?an=[a]:an.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=ru(a,l,t);Ml(a,g);break e;case 1:d=l;var p=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(jt===null||!jt.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=nu(a,d,t);Ml(a,k);break e}}a=a.return}while(a!==null)}ju(n)}catch(j){t=j,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function vu(){var e=Ti.current;return Ti.current=Pi,e===null?Pi:e}function Ro(){(J===0||J===3||J===2)&&(J=4),re===null||!(qt&268435455)&&!(Ki&268435455)||pt(re,ie)}function Fi(e,t){var n=F;F|=2;var i=vu();(re!==e||ie!==t)&&(Ge=null,_t(e,t));do try{hf();break}catch(s){bu(e,s)}while(!0);if(co(),F=n,Ti.current=i,G!==null)throw Error(S(261));return re=null,ie=0,J}function hf(){for(;G!==null;)wu(G)}function xf(){for(;G!==null&&!O0();)wu(G)}function wu(e){var t=Su(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?ju(e):G=t,ko.current=null}function ju(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=df(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,G=null;return}}else if(n=lf(n,t,ve),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);J===0&&(J=5)}function Ft(e,t,n){var i=A,s=Be.transition;try{Be.transition=null,A=1,mf(e,t,n,i)}finally{Be.transition=s,A=i}return null}function mf(e,t,n,i){do vr();while(gt!==null);if(F&6)throw Error(S(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(G0(e,a),e===re&&(G=re=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Kn||(Kn=!0,Cu(yi,function(){return vr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Be.transition,Be.transition=null;var o=A;A=1;var d=F;F|=4,ko.current=null,uf(e,n),xu(n,e),Wp(da),vi=!!la,da=la=null,e.current=n,pf(n),_0(),F=d,A=o,Be.transition=a}else e.current=n;if(Kn&&(Kn=!1,gt=e,Wi=s),a=e.pendingLanes,a===0&&(jt=null),H0(n.stateNode),be(e,Q()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(Li)throw Li=!1,e=Ia,Ia=null,e;return Wi&1&&e.tag!==0&&vr(),a=e.pendingLanes,a&1?e===Ea?on++:(on=0,Ea=e):on=0,Mt(),null}function vr(){if(gt!==null){var e=rc(Wi),t=Be.transition,n=A;try{if(Be.transition=null,A=16>e?16:e,gt===null)var i=!1;else{if(e=gt,gt=null,Wi=0,F&6)throw Error(S(331));var s=F;for(F|=4,I=e.current;I!==null;){var a=I,o=a.child;if(I.flags&16){var d=a.deletions;if(d!==null){for(var l=0;l<d.length;l++){var c=d[l];for(I=c;I!==null;){var f=I;switch(f.tag){case 0:case 11:case 15:sn(8,f,a)}var u=f.child;if(u!==null)u.return=f,I=u;else for(;I!==null;){f=I;var h=f.sibling,b=f.return;if(fu(f),f===c){I=null;break}if(h!==null){h.return=b,I=h;break}I=b}}}var v=a.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var y=w.sibling;w.sibling=null,w=y}while(w!==null)}}I=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,I=o;else e:for(;I!==null;){if(a=I,a.flags&2048)switch(a.tag){case 0:case 11:case 15:sn(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,I=g;break e}I=a.return}}var p=e.current;for(I=p;I!==null;){o=I;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,I=m;else e:for(o=p;I!==null;){if(d=I,d.flags&2048)try{switch(d.tag){case 0:case 11:case 15:Gi(9,d)}}catch(j){q(d,d.return,j)}if(d===o){I=null;break e}var k=d.sibling;if(k!==null){k.return=d.return,I=k;break e}I=d.return}}if(F=s,Mt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot($i,e)}catch{}i=!0}return i}finally{A=n,Be.transition=t}}return!1}function Zl(e,t,n){t=Nr(n,t),t=ru(e,t,1),e=wt(e,t,1),t=ue(),e!==null&&(In(e,1,t),be(e,t))}function q(e,t,n){if(e.tag===3)Zl(e,e,n);else for(;t!==null;){if(t.tag===3){Zl(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(jt===null||!jt.has(i))){e=Nr(n,e),e=nu(t,e,1),t=wt(t,e,1),e=ue(),t!==null&&(In(t,1,e),be(t,e));break}}t=t.return}}function yf(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(ie&n)===n&&(J===4||J===3&&(ie&130023424)===ie&&500>Q()-Co?_t(e,0):So|=n),be(e,t)}function ku(e,t){t===0&&(e.mode&1?(t=_n,_n<<=1,!(_n&130023424)&&(_n=4194304)):t=1);var n=ue();e=it(e,t),e!==null&&(In(e,t,n),be(e,n))}function bf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ku(e,n)}function vf(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(S(314))}i!==null&&i.delete(t),ku(e,n)}var Su;Su=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,of(e,t,n);xe=!!(e.flags&131072)}else xe=!1,U&&t.flags&1048576&&Rc(t,Ni,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;ci(e,t),e=t.pendingProps;var s=kr(t,de.current);br(t,n),s=yo(null,t,i,e,s,n);var a=bo();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(i)?(a=!0,Ci(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,fo(t),s.updater=Qi,t.stateNode=s,s._reactInternals=t,ya(t,i,e,n),t=wa(null,t,i,!0,a,n)):(t.tag=0,U&&a&&so(t),ce(null,t,s,n),t=t.child),t;case 16:i=t.elementType;e:{switch(ci(e,t),e=t.pendingProps,s=i._init,i=s(i._payload),t.type=i,s=t.tag=jf(i),e=Fe(i,e),s){case 0:t=va(null,t,i,e,n);break e;case 1:t=$l(null,t,i,e,n);break e;case 11:t=Ol(null,t,i,e,n);break e;case 14:t=_l(null,t,i,Fe(i.type,e),n);break e}throw Error(S(306,i,""))}return t;case 0:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Fe(i,s),va(e,t,i,s,n);case 1:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Fe(i,s),$l(e,t,i,s,n);case 3:e:{if(ou(t),e===null)throw Error(S(387));i=t.pendingProps,a=t.memoizedState,s=a.element,Tc(e,t),Ei(t,i,null,n);var o=t.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=Nr(Error(S(423)),t),t=Ul(e,t,i,n,s);break e}else if(i!==s){s=Nr(Error(S(424)),t),t=Ul(e,t,i,n,s);break e}else for(we=vt(t.stateNode.containerInfo.firstChild),je=t,U=!0,De=null,n=Bc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),i===s){t=st(e,t,n);break e}ce(e,t,i,n)}t=t.child}return t;case 5:return Lc(t),e===null&&ha(t),i=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,ca(i,s)?o=null:a!==null&&ca(i,a)&&(t.flags|=32),au(e,t),ce(e,t,o,n),t.child;case 6:return e===null&&ha(t),null;case 13:return lu(e,t,n);case 4:return go(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Cr(t,null,i,n):ce(e,t,i,n),t.child;case 11:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Fe(i,s),Ol(e,t,i,s,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,s=t.pendingProps,a=t.memoizedProps,o=s.value,D(Ri,i._currentValue),i._currentValue=o,a!==null)if(Ue(a.value,o)){if(a.children===s.children&&!me.current){t=st(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var d=a.dependencies;if(d!==null){o=a.child;for(var l=d.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=tt(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),xa(a.return,n,t),d.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(S(341));o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),xa(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ce(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,i=t.pendingProps.children,br(t,n),s=Pe(s),i=i(s),t.flags|=1,ce(e,t,i,n),t.child;case 14:return i=t.type,s=Fe(i,t.pendingProps),s=Fe(i.type,s),_l(e,t,i,s,n);case 15:return iu(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:Fe(i,s),ci(e,t),t.tag=1,ye(i)?(e=!0,Ci(t)):e=!1,br(t,n),tu(t,i,s),ya(t,i,s,n),wa(null,t,i,!0,e,n);case 19:return du(e,t,n);case 22:return su(e,t,n)}throw Error(S(156,t.tag))};function Cu(e,t){return Zd(e,t)}function wf(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,i){return new wf(e,t,n,i)}function Io(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jf(e){if(typeof e=="function")return Io(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qa)return 11;if(e===Xa)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fi(e,t,n,i,s,a){var o=2;if(i=e,typeof e=="function")Io(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ir:return $t(n.children,s,a,t);case Ya:o=8,s|=8;break;case $s:return e=Me(12,n,t,s|2),e.elementType=$s,e.lanes=a,e;case Us:return e=Me(13,n,t,s),e.elementType=Us,e.lanes=a,e;case Hs:return e=Me(19,n,t,s),e.elementType=Hs,e.lanes=a,e;case Ld:return Zi(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pd:o=10;break e;case Td:o=9;break e;case qa:o=11;break e;case Xa:o=14;break e;case dt:o=16,i=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Me(o,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function $t(e,t,n,i){return e=Me(7,e,i,t),e.lanes=n,e}function Zi(e,t,n,i){return e=Me(22,e,i,t),e.elementType=Ld,e.lanes=n,e.stateNode={isHidden:!1},e}function Bs(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function Ps(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kf(e,t,n,i,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fs(0),this.expirationTimes=fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fs(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Eo(e,t,n,i,s,a,o,d,l){return e=new kf(e,t,n,d,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Me(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fo(a),e}function Sf(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function zu(e){if(!e)return Rt;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ye(n))return zc(e,n,t)}return t}function Nu(e,t,n,i,s,a,o,d,l){return e=Eo(n,i,!0,e,s,a,o,d,l),e.context=zu(null),n=e.current,i=ue(),s=kt(n),a=tt(i,s),a.callback=t??null,wt(n,a,s),e.current.lanes=s,In(e,s,i),be(e,i),e}function Ji(e,t,n,i){var s=t.current,a=ue(),o=kt(s);return n=zu(n),t.context===null?t.context=n:t.pendingContext=n,t=tt(a,o),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=wt(s,t,o),e!==null&&(_e(e,s,o,a),oi(e,s,o)),o}function Ai(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mo(e,t){Jl(e,t),(e=e.alternate)&&Jl(e,t)}function Cf(){return null}var Ru=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bo(e){this._internalRoot=e}es.prototype.render=Bo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Ji(e,t,null,null)};es.prototype.unmount=Bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xt(function(){Ji(null,e,null,null)}),t[nt]=null}};function es(e){this._internalRoot=e}es.prototype.unstable_scheduleHydration=function(e){if(e){var t=sc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&oc(e)}};function Po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ed(){}function zf(e,t,n,i,s){if(s){if(typeof i=="function"){var a=i;i=function(){var c=Ai(o);a.call(c)}}var o=Nu(t,i,e,0,null,!1,!1,"",ed);return e._reactRootContainer=o,e[nt]=o.current,xn(e.nodeType===8?e.parentNode:e),Xt(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var d=i;i=function(){var c=Ai(l);d.call(c)}}var l=Eo(e,0,!1,null,null,!1,!1,"",ed);return e._reactRootContainer=l,e[nt]=l.current,xn(e.nodeType===8?e.parentNode:e),Xt(function(){Ji(t,l,n,i)}),l}function rs(e,t,n,i,s){var a=n._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var d=s;s=function(){var l=Ai(o);d.call(l)}}Ji(t,o,e,s)}else o=zf(n,t,e,s,i);return Ai(o)}nc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qr(t.pendingLanes);n!==0&&(Ka(t,n|1),be(t,Q()),!(F&6)&&(Rr=Q()+500,Mt()))}break;case 13:Xt(function(){var i=it(e,1);if(i!==null){var s=ue();_e(i,e,1,s)}}),Mo(e,1)}};Za=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var n=ue();_e(t,e,134217728,n)}Mo(e,134217728)}};ic=function(e){if(e.tag===13){var t=kt(e),n=it(e,t);if(n!==null){var i=ue();_e(n,e,t,i)}Mo(e,t)}};sc=function(){return A};ac=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};ea=function(e,t,n){switch(t){case"input":if(qs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=Yi(i);if(!s)throw Error(S(90));Fd(i),qs(i,s)}}}break;case"textarea":Dd(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};Yd=zo;qd=Xt;var Nf={usingClientEntryPoint:!1,Events:[Mn,lr,Yi,Hd,Vd,zo]},Ur={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rf={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gd(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||Cf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zn.isDisabled&&Zn.supportsFiber)try{$i=Zn.inject(Rf),Xe=Zn}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nf;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Po(t))throw Error(S(200));return Sf(e,t,null,n)};Ce.createRoot=function(e,t){if(!Po(e))throw Error(S(299));var n=!1,i="",s=Ru;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Eo(e,1,!1,null,null,n,!1,i,s),e[nt]=t.current,xn(e.nodeType===8?e.parentNode:e),new Bo(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Gd(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Xt(e)};Ce.hydrate=function(e,t,n){if(!ts(t))throw Error(S(200));return rs(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!Po(e))throw Error(S(405));var i=n!=null&&n.hydratedSources||null,s=!1,a="",o=Ru;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Nu(t,null,e,1,n??null,s,!1,a,o),e[nt]=t.current,xn(e),i)for(e=0;e<i.length;e++)n=i[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new es(t)};Ce.render=function(e,t,n){if(!ts(t))throw Error(S(200));return rs(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!ts(e))throw Error(S(40));return e._reactRootContainer?(Xt(function(){rs(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Ce.unstable_batchedUpdates=zo;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!ts(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return rs(e,t,n,!1,i)};Ce.version="18.3.1-next-f1338f8080-20240426";function Iu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iu)}catch(e){console.error(e)}}Iu(),Id.exports=Ce;var If=Id.exports,td=If;Os.createRoot=td.createRoot,Os.hydrateRoot=td.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cn(){return Cn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Cn.apply(this,arguments)}var ht;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ht||(ht={}));const rd="popstate";function Ef(e){e===void 0&&(e={});function t(i,s){let{pathname:a,search:o,hash:d}=i.location;return Pa("",{pathname:a,search:o,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){return typeof s=="string"?s:Di(s)}return Bf(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function To(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Mf(){return Math.random().toString(36).substr(2,8)}function nd(e,t){return{usr:e.state,key:e.key,idx:t}}function Pa(e,t,n,i){return n===void 0&&(n=null),Cn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Br(t):t,{state:n,key:t&&t.key||i||Mf()})}function Di(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function Bf(e,t,n,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:a=!1}=i,o=s.history,d=ht.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(Cn({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function u(){d=ht.Pop;let y=f(),g=y==null?null:y-c;c=y,l&&l({action:d,location:w.location,delta:g})}function h(y,g){d=ht.Push;let p=Pa(w.location,y,g);c=f()+1;let m=nd(p,c),k=w.createHref(p);try{o.pushState(m,"",k)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(k)}a&&l&&l({action:d,location:w.location,delta:1})}function b(y,g){d=ht.Replace;let p=Pa(w.location,y,g);c=f();let m=nd(p,c),k=w.createHref(p);o.replaceState(m,"",k),a&&l&&l({action:d,location:w.location,delta:0})}function v(y){let g=s.location.origin!=="null"?s.location.origin:s.location.href,p=typeof y=="string"?y:Di(y);return p=p.replace(/ $/,"%20"),K(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let w={get action(){return d},get location(){return e(s,o)},listen(y){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(rd,u),l=y,()=>{s.removeEventListener(rd,u),l=null}},createHref(y){return t(s,y)},createURL:v,encodeLocation(y){let g=v(y);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:b,go(y){return o.go(y)}};return w}var id;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(id||(id={}));function Pf(e,t,n){return n===void 0&&(n="/"),Tf(e,t,n)}function Tf(e,t,n,i){let s=typeof t=="string"?Br(t):t,a=Lo(s.pathname||"/",n);if(a==null)return null;let o=Eu(e);Lf(o);let d=null;for(let l=0;d==null&&l<o.length;++l){let c=qf(a);d=Hf(o[l],c)}return d}function Eu(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let s=(a,o,d)=>{let l={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(K(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Ct([i,l.relativePath]),f=n.concat(l);a.children&&a.children.length>0&&(K(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Eu(a.children,t,f,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:$f(c,a.index),routesMeta:f})};return e.forEach((a,o)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))s(a,o);else for(let l of Mu(a.path))s(a,o,l)}),t}function Mu(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return s?[a,""]:[a];let o=Mu(i.join("/")),d=[];return d.push(...o.map(l=>l===""?a:[a,l].join("/"))),s&&d.push(...o),d.map(l=>e.startsWith("/")&&l===""?"/":l)}function Lf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Uf(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Wf=/^:[\w-]+$/,Ff=3,Af=2,Df=1,Of=10,_f=-2,sd=e=>e==="*";function $f(e,t){let n=e.split("/"),i=n.length;return n.some(sd)&&(i+=_f),t&&(i+=Af),n.filter(s=>!sd(s)).reduce((s,a)=>s+(Wf.test(a)?Ff:a===""?Df:Of),i)}function Uf(e,t){return e.length===t.length&&e.slice(0,-1).every((i,s)=>i===t[s])?e[e.length-1]-t[t.length-1]:0}function Hf(e,t,n){let{routesMeta:i}=e,s={},a="/",o=[];for(let d=0;d<i.length;++d){let l=i[d],c=d===i.length-1,f=a==="/"?t:t.slice(a.length)||"/",u=Vf({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),h=l.route;if(!u)return null;Object.assign(s,u.params),o.push({params:s,pathname:Ct([a,u.pathname]),pathnameBase:Zf(Ct([a,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(a=Ct([a,u.pathnameBase]))}return o}function Vf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=Yf(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:i.reduce((c,f,u)=>{let{paramName:h,isOptional:b}=f;if(h==="*"){let w=d[u]||"";o=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const v=d[u];return b&&!v?c[h]=void 0:c[h]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:o,pattern:e}}function Yf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),To(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,d,l)=>(i.push({paramName:d,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),i]}function qf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return To(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Lo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}const Xf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qf=e=>Xf.test(e);function Gf(e,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:s=""}=typeof e=="string"?Br(e):e,a;if(n)if(Qf(n))a=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),To(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?a=ad(n.substring(1),"/"):a=ad(n,t)}else a=t;return{pathname:a,search:Jf(i),hash:e1(s)}}function ad(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Ts(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Kf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bu(e,t){let n=Kf(e);return t?n.map((i,s)=>s===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Pu(e,t,n,i){i===void 0&&(i=!1);let s;typeof e=="string"?s=Br(e):(s=Cn({},e),K(!s.pathname||!s.pathname.includes("?"),Ts("?","pathname","search",s)),K(!s.pathname||!s.pathname.includes("#"),Ts("#","pathname","hash",s)),K(!s.search||!s.search.includes("#"),Ts("#","search","hash",s)));let a=e===""||s.pathname==="",o=a?"/":s.pathname,d;if(o==null)d=n;else{let u=t.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),u-=1;s.pathname=h.join("/")}d=u>=0?t[u]:"/"}let l=Gf(s,d),c=o&&o!=="/"&&o.endsWith("/"),f=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const Ct=e=>e.join("/").replace(/\/\/+/g,"/"),Zf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Jf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,e1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function t1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Tu=["post","put","patch","delete"];new Set(Tu);const r1=["get",...Tu];new Set(r1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zn(){return zn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},zn.apply(this,arguments)}const Wo=x.createContext(null),n1=x.createContext(null),Zt=x.createContext(null),ns=x.createContext(null),Jt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Lu=x.createContext(null);function i1(e,t){let{relative:n}=t===void 0?{}:t;Pn()||K(!1);let{basename:i,navigator:s}=x.useContext(Zt),{hash:a,pathname:o,search:d}=Fu(e,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:Ct([i,o])),s.createHref({pathname:l,search:d,hash:a})}function Pn(){return x.useContext(ns)!=null}function Pr(){return Pn()||K(!1),x.useContext(ns).location}function Wu(e){x.useContext(Zt).static||x.useLayoutEffect(e)}function er(){let{isDataRoute:e}=x.useContext(Jt);return e?m1():s1()}function s1(){Pn()||K(!1);let e=x.useContext(Wo),{basename:t,future:n,navigator:i}=x.useContext(Zt),{matches:s}=x.useContext(Jt),{pathname:a}=Pr(),o=JSON.stringify(Bu(s,n.v7_relativeSplatPath)),d=x.useRef(!1);return Wu(()=>{d.current=!0}),x.useCallback(function(c,f){if(f===void 0&&(f={}),!d.current)return;if(typeof c=="number"){i.go(c);return}let u=Pu(c,JSON.parse(o),a,f.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:Ct([t,u.pathname])),(f.replace?i.replace:i.push)(u,f.state,f)},[t,i,o,a,e])}function Fu(e,t){let{relative:n}=t===void 0?{}:t,{future:i}=x.useContext(Zt),{matches:s}=x.useContext(Jt),{pathname:a}=Pr(),o=JSON.stringify(Bu(s,i.v7_relativeSplatPath));return x.useMemo(()=>Pu(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function a1(e,t){return o1(e,t)}function o1(e,t,n,i){Pn()||K(!1);let{navigator:s}=x.useContext(Zt),{matches:a}=x.useContext(Jt),o=a[a.length-1],d=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Pr(),f;if(t){var u;let y=typeof t=="string"?Br(t):t;l==="/"||(u=y.pathname)!=null&&u.startsWith(l)||K(!1),f=y}else f=c;let h=f.pathname||"/",b=h;if(l!=="/"){let y=l.replace(/^\//,"").split("/");b="/"+h.replace(/^\//,"").split("/").slice(y.length).join("/")}let v=Pf(e,{pathname:b}),w=p1(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},d,y.params),pathname:Ct([l,s.encodeLocation?s.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:Ct([l,s.encodeLocation?s.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),a,n,i);return t&&w?x.createElement(ns.Provider,{value:{location:zn({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ht.Pop}},w):w}function l1(){let e=x1(),t=t1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:s},n):null,null)}const d1=x.createElement(l1,null);class c1 extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(Jt.Provider,{value:this.props.routeContext},x.createElement(Lu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function u1(e){let{routeContext:t,match:n,children:i}=e,s=x.useContext(Wo);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(Jt.Provider,{value:t},i)}function p1(e,t,n,i){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=i)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,d=(s=n)==null?void 0:s.errors;if(d!=null){let f=o.findIndex(u=>u.route.id&&(d==null?void 0:d[u.route.id])!==void 0);f>=0||K(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let u=o[f];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=f),u.route.id){let{loaderData:h,errors:b}=n,v=u.route.loader&&h[u.route.id]===void 0&&(!b||b[u.route.id]===void 0);if(u.route.lazy||v){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,u,h)=>{let b,v=!1,w=null,y=null;n&&(b=d&&u.route.id?d[u.route.id]:void 0,w=u.route.errorElement||d1,l&&(c<0&&h===0?(y1("route-fallback"),v=!0,y=null):c===h&&(v=!0,y=u.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,h+1)),p=()=>{let m;return b?m=w:v?m=y:u.route.Component?m=x.createElement(u.route.Component,null):u.route.element?m=u.route.element:m=f,x.createElement(u1,{match:u,routeContext:{outlet:f,matches:g,isDataRoute:n!=null},children:m})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?x.createElement(c1,{location:n.location,revalidation:n.revalidation,component:w,error:b,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Au=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Au||{}),Du=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Du||{});function f1(e){let t=x.useContext(Wo);return t||K(!1),t}function g1(e){let t=x.useContext(n1);return t||K(!1),t}function h1(e){let t=x.useContext(Jt);return t||K(!1),t}function Ou(e){let t=h1(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function x1(){var e;let t=x.useContext(Lu),n=g1(),i=Ou();return t!==void 0?t:(e=n.errors)==null?void 0:e[i]}function m1(){let{router:e}=f1(Au.UseNavigateStable),t=Ou(Du.UseNavigateStable),n=x.useRef(!1);return Wu(()=>{n.current=!0}),x.useCallback(function(s,a){a===void 0&&(a={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,zn({fromRouteId:t},a)))},[e,t])}const od={};function y1(e,t,n){od[e]||(od[e]=!0)}function b1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ge(e){K(!1)}function v1(e){let{basename:t="/",children:n=null,location:i,navigationType:s=ht.Pop,navigator:a,static:o=!1,future:d}=e;Pn()&&K(!1);let l=t.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:l,navigator:a,static:o,future:zn({v7_relativeSplatPath:!1},d)}),[l,d,a,o]);typeof i=="string"&&(i=Br(i));let{pathname:f="/",search:u="",hash:h="",state:b=null,key:v="default"}=i,w=x.useMemo(()=>{let y=Lo(f,l);return y==null?null:{location:{pathname:y,search:u,hash:h,state:b,key:v},navigationType:s}},[l,f,u,h,b,v,s]);return w==null?null:x.createElement(Zt.Provider,{value:c},x.createElement(ns.Provider,{children:n,value:w}))}function w1(e){let{children:t,location:n}=e;return a1(Ta(t),n)}new Promise(()=>{});function Ta(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(i,s)=>{if(!x.isValidElement(i))return;let a=[...t,s];if(i.type===x.Fragment){n.push.apply(n,Ta(i.props.children,a));return}i.type!==ge&&K(!1),!i.props.index||!i.props.children||K(!1);let o={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Ta(i.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},La.apply(this,arguments)}function j1(e,t){if(e==null)return{};var n={},i=Object.keys(e),s,a;for(a=0;a<i.length;a++)s=i[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function k1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function S1(e,t){return e.button===0&&(!t||t==="_self")&&!k1(e)}const C1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],z1="6";try{window.__reactRouterVersion=z1}catch{}const N1="startTransition",ld=m0[N1];function R1(e){let{basename:t,children:n,future:i,window:s}=e,a=x.useRef();a.current==null&&(a.current=Ef({window:s,v5Compat:!0}));let o=a.current,[d,l]=x.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},f=x.useCallback(u=>{c&&ld?ld(()=>l(u)):l(u)},[l,c]);return x.useLayoutEffect(()=>o.listen(f),[o,f]),x.useEffect(()=>b1(i),[i]),x.createElement(v1,{basename:t,children:n,location:d.location,navigationType:d.action,navigator:o,future:i})}const I1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",E1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=x.forwardRef(function(t,n){let{onClick:i,relative:s,reloadDocument:a,replace:o,state:d,target:l,to:c,preventScrollReset:f,viewTransition:u}=t,h=j1(t,C1),{basename:b}=x.useContext(Zt),v,w=!1;if(typeof c=="string"&&E1.test(c)&&(v=c,I1))try{let m=new URL(window.location.href),k=c.startsWith("//")?new URL(m.protocol+c):new URL(c),j=Lo(k.pathname,b);k.origin===m.origin&&j!=null?c=j+k.search+k.hash:w=!0}catch{}let y=i1(c,{relative:s}),g=M1(c,{replace:o,state:d,target:l,preventScrollReset:f,relative:s,viewTransition:u});function p(m){i&&i(m),m.defaultPrevented||g(m)}return x.createElement("a",La({},h,{href:v||y,onClick:w||a?i:p,ref:n,target:l}))});var dd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(dd||(dd={}));var cd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(cd||(cd={}));function M1(e,t){let{target:n,replace:i,state:s,preventScrollReset:a,relative:o,viewTransition:d}=t===void 0?{}:t,l=er(),c=Pr(),f=Fu(e,{relative:o});return x.useCallback(u=>{if(S1(u,n)){u.preventDefault();let h=i!==void 0?i:Di(c)===Di(f);l(e,{replace:h,state:s,preventScrollReset:a,relative:o,viewTransition:d})}},[c,l,f,i,s,n,e,a,o,d])}const Hr=[{type:"feature",icon:"📷",text:"QR + NFC Enabled"},{type:"feature",icon:"📵",text:"No App Required"},{type:"feature",icon:"💧",text:"Waterproof Tags"},{type:"feature",icon:"🚨",text:"Secure Emergency Access"},{type:"launch",icon:"🚀",text:"Pre-launch is now open, and the official launch starts in July."}];function B1(){const[e,t]=x.useState(!1),[n,i]=x.useState(!1),s=Pr(),a=er();x.useEffect(()=>{const c=()=>t(window.scrollY>10);return window.addEventListener("scroll",c,{passive:!0}),c(),()=>window.removeEventListener("scroll",c)},[]);const o=[{label:"Home",to:"/"},{label:"Features",to:"/features"},{label:"Use Cases",to:"/use-cases"},{label:"How It Works",to:"/how-it-works"},{label:"Franchise",to:"/franchise"},{label:"Contact",to:"/contact"}],d=c=>c==="/"?s.pathname==="/":s.pathname.startsWith(c),l=()=>{i(!1),a("/qr-form")};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        body {
          margin: 0;
          overflow-x: hidden;
        }

        /* ═══════════════════════════════════════
           ROOT
        ═══════════════════════════════════════ */
        .sfs-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          font-family: 'Space Grotesk', sans-serif;
        }

        /* ═══════════════════════════════════════
           TICKER BAR
        ═══════════════════════════════════════ */
        .sfs-ticker-bar {
          height: 32px;
          background: linear-gradient(
            90deg,
            #052e16 0%,
            #064e3b 40%,
            #065f46 60%,
            #064e3b 80%,
            #052e16 100%
          );
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        .sfs-ticker-label {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 22px 0 14px;
          height: 100%;
          background: #16a34a;
          flex-shrink: 0;
          z-index: 3;
          clip-path: polygon(
            0 0, calc(100% - 10px) 0,
            100% 50%, calc(100% - 10px) 100%, 0 100%
          );
        }

        .sfs-ticker-label-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
          animation: sfs-blink 1.6s ease-in-out infinite;
        }

        .sfs-ticker-label-text {
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #fff;
          white-space: nowrap;
        }

        .sfs-ticker-track {
          flex: 1;
          overflow: hidden;
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .sfs-ticker-belt {
          display: flex;
          align-items: center;
          white-space: nowrap;
          will-change: transform;
          animation: sfs-marquee 30s linear infinite;
        }

        .sfs-ticker-belt:hover { animation-play-state: paused; }

        @keyframes sfs-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }

        .sfs-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 0 26px;
          border-right: 1px solid rgba(255,255,255,.08);
          flex-shrink: 0;
        }

        /* ── special highlight for launch item ── */
        .sfs-ticker-item[data-type="launch"] .sfs-ticker-text {
          color: #86efac;
          font-size: 11.5px;
        }
        .sfs-ticker-item[data-type="launch"] {
          padding: 0 30px;
          border-right: 1px solid rgba(134,239,172,.18);
        }

        .sfs-ticker-icon { font-size: 11px; line-height: 1; }

        .sfs-ticker-text {
          font-size: 11px;
          font-weight: 700;
          color: #fcd34d;
          letter-spacing: .02em;
        }

        /* ═══════════════════════════════════════
           TOPBAR LINE
        ═══════════════════════════════════════ */
        .sfs-topbar {
          height: 2px;
          background: linear-gradient(
            90deg,
            #064e3b 0%, #16a34a 30%, #4ade80 50%, #16a34a 70%, #064e3b 100%
          );
          background-size: 200% 100%;
          animation: sfs-shimmer-line 4s linear infinite;
        }

        @keyframes sfs-shimmer-line {
          0%   { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        /* ═══════════════════════════════════════
           MAIN BAR
        ═══════════════════════════════════════ */
        .sfs-bar {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(226,232,240,.9);
          transition: height .35s ease, box-shadow .35s ease;
          box-shadow: 0 1px 0 rgba(0,0,0,.04);
        }

        .sfs-nav.scrolled .sfs-bar {
          height: 60px;
          box-shadow:
            0 6px 30px rgba(6,78,59,.09),
            0 1px 0 rgba(0,0,0,.04);
        }

        /* ═══════════════════════════════════════
           LOGO WRAPPER
        ═══════════════════════════════════════ */
        .sfs-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          flex-shrink: 0;
        }

        /* Badge container – handles size transition */
        .sfs-badge-wrap {
          position: relative;
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          transition: width .35s ease, height .35s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sfs-nav.scrolled .sfs-badge-wrap { width: 44px; height: 44px; }

        /* Logo image – no glow, no shadow */
        .sfs-logo-img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          object-fit: contain;
          animation: logoFloat 4s ease-in-out infinite;
          transition: transform .3s ease;
        }

        @keyframes logoFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-2px); }
        }

        /* ── Corner bracket edges (matching logo style) ── */
        .sfs-logo-corner {
          position: absolute;
          width: 12px;
          height: 12px;
          z-index: 3;
          pointer-events: none;
          transition: opacity .3s ease;
        }

        /* top-left */
        .sfs-logo-corner.tl {
          top: -3px; left: -3px;
          border-top: 2px solid #22c55e;
          border-left: 2px solid #22c55e;
          border-radius: 2px 0 0 0;
        }
        /* top-right */
        .sfs-logo-corner.tr {
          top: -3px; right: -3px;
          border-top: 2px solid #22c55e;
          border-right: 2px solid #22c55e;
          border-radius: 0 2px 0 0;
        }
        /* bottom-left */
        .sfs-logo-corner.bl {
          bottom: -3px; left: -3px;
          border-bottom: 2px solid #22c55e;
          border-left: 2px solid #22c55e;
          border-radius: 0 0 0 2px;
        }
        /* bottom-right */
        .sfs-logo-corner.br {
          bottom: -3px; right: -3px;
          border-bottom: 2px solid #22c55e;
          border-right: 2px solid #22c55e;
          border-radius: 0 0 2px 0;
        }

        /* Corners pulse on hover */
        .sfs-logo:hover .sfs-logo-corner {
          border-color: #4ade80;
          filter: drop-shadow(0 0 4px rgba(74,222,128,.7));
        }

        /* ── Scanner line ── */
        .sfs-scanner-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          z-index: 4;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(74,222,128,.6) 20%,
            #86efac 50%,
            rgba(74,222,128,.6) 80%,
            transparent 100%
          );
          box-shadow:
            0 0 6px 1px rgba(74,222,128,.55),
            0 0 14px 2px rgba(34,197,94,.3);
          border-radius: 999px;
          animation: sfs-scan 2.2s ease-in-out infinite;
        }

        /* thin trailing glow below the line */
        .sfs-scanner-line::after {
          content: "";
          position: absolute;
          left: 10%;
          right: 10%;
          top: 2px;
          height: 6px;
          background: linear-gradient(
            180deg,
            rgba(74,222,128,.18) 0%,
            transparent 100%
          );
          border-radius: 0 0 4px 4px;
        }

        @keyframes sfs-scan {
          0%   { top: 8%;  opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 88%; opacity: 0; }
        }

        /* ═══════════════════════════════════════
           WORDMARK
        ═══════════════════════════════════════ */
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
          border: 1px solid rgba(22,163,74,.25);
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
          0%,100% { opacity: .4; transform: scale(.8); }
          50%      { opacity: 1; transform: scale(1.2); }
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

        /* ═══════════════════════════════════════
           NAV LINKS
        ═══════════════════════════════════════ */
        .sfs-links {
          display: flex;
          align-items: center;
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

        .sfs-link.active { color: #15803d; }

        .sfs-link.active::after {
          content: "";
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 4px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #16a34a, #4ade80);
        }

        /* ═══════════════════════════════════════
           ACTIONS
        ═══════════════════════════════════════ */
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
          border-color: rgba(46,189,58,.65);
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
          box-shadow:
            0 1px 0 rgba(0,0,0,.12),
            0 4px 16px rgba(22,163,74,.3);
          transition: all .22s ease;
          white-space: nowrap;
        }

        .sfs-prereg:hover {
          background: #15803d;
          transform: translateY(-1px);
          box-shadow:
            0 1px 0 rgba(0,0,0,.12),
            0 8px 24px rgba(22,163,74,.38);
        }

        .prereg-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #86efac;
          flex-shrink: 0;
          animation: sfs-blink 1.8s ease-in-out infinite;
        }

        /* ═══════════════════════════════════════
           MOBILE
        ═══════════════════════════════════════ */
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

        @media (max-width: 1060px) {
          .sfs-links,
          .sfs-actions { display: none; }

          .sfs-mobile-btn { display: flex; }

          .sfs-bar {
            height: 64px;
            padding: 0 18px;
          }

          .sfs-badge-wrap {
            width: 46px;
            height: 46px;
          }
        }

        @media (max-width: 480px) {
          .sfs-status { display: none; }
        }

        @media (max-width: 380px) {
          .sfs-wordmark-secondary { display: none; }
        }

        /* ═══════════════════════════════════════
           MOBILE MENU DRAWER
        ═══════════════════════════════════════ */
        .sfs-drawer-overlay {
          position: fixed;
          inset: 0;
          z-index: 100000;
          background: rgba(11, 37, 69, 0);
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          pointer-events: none;
          transition: background 0.35s ease, backdrop-filter 0.35s ease;
        }

        .sfs-drawer-overlay.open {
          background: rgba(11, 37, 69, 0.45);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          pointer-events: auto;
        }

        .sfs-drawer {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(80vw, 320px);
          background: rgba(255, 255, 255, 0.98);
          box-shadow: -10px 0 40px rgba(6, 78, 59, 0.15);
          display: flex;
          flex-direction: column;
          padding: 24px;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sfs-drawer-overlay.open .sfs-drawer {
          transform: translateX(0);
        }

        .sfs-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
        }

        .sfs-drawer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sfs-drawer-logo-img {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }

        .sfs-drawer-brand {
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -.03em;
        }

        .sfs-drawer-brand .accent {
          color: #16a34a;
        }

        .sfs-drawer-close {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .sfs-drawer-close:hover {
          background: #fee2e2;
          border-color: #fca5a5;
          color: #dc2626;
          transform: rotate(90deg);
        }

        .sfs-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: auto;
        }

        .sfs-drawer-link {
          font-size: 15px;
          font-weight: 600;
          color: #475569;
          text-decoration: none;
          padding: 12px 16px;
          border-radius: 10px;
          transition: all 0.2s ease;
          display: block;
        }

        .sfs-drawer-link:hover {
          color: #15803d;
          background: #e8f8eb;
          padding-left: 20px;
        }

        .sfs-drawer-link.active {
          color: #15803d;
          background: #e8f8eb;
          font-weight: 700;
        }

        .sfs-drawer-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 32px;
          padding-top: 20px;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
        }

        .sfs-drawer-login {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          color: #15803d;
          border: 1.5px solid rgba(22, 163, 74, 0.3);
          background: transparent;
          transition: all 0.22s ease;
        }

        .sfs-drawer-login:hover {
          background: #e8f8eb;
        }

        .sfs-drawer-prereg {
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
          box-shadow: 0 4px 16px rgba(22, 163, 74, 0.25);
          transition: all 0.22s ease;
          width: 100%;
        }

        .sfs-drawer-prereg:hover {
          background: #15803d;
        }
      `}),r.jsxs("header",{className:`sfs-nav ${e?"scrolled":""}`,children:[r.jsxs("div",{className:"sfs-ticker-bar",children:[r.jsxs("div",{className:"sfs-ticker-label",children:[r.jsx("span",{className:"sfs-ticker-label-dot"}),r.jsx("span",{className:"sfs-ticker-label-text",children:"Live Feed"})]}),r.jsx("div",{className:"sfs-ticker-track",children:r.jsx("div",{className:"sfs-ticker-belt",children:[...Hr,...Hr,...Hr,...Hr,...Hr].map((c,f)=>r.jsxs("span",{className:"sfs-ticker-item","data-type":c.type,children:[r.jsx("span",{className:"sfs-ticker-icon",children:c.icon}),r.jsx("span",{className:"sfs-ticker-text",children:c.text})]},f))})})]}),r.jsx("div",{className:"sfs-topbar"}),r.jsxs("div",{className:"sfs-bar",children:[r.jsxs(Ze,{to:"/",className:"sfs-logo",children:[r.jsxs("div",{className:"sfs-badge-wrap",children:[r.jsx("span",{className:"sfs-logo-corner tl"}),r.jsx("span",{className:"sfs-logo-corner tr"}),r.jsx("span",{className:"sfs-logo-corner bl"}),r.jsx("span",{className:"sfs-logo-corner br"}),r.jsx("span",{className:"sfs-scanner-line"}),r.jsx("img",{src:"/logo.png",alt:"ScanForSafe Logo",className:"sfs-logo-img"})]}),r.jsxs("div",{className:"sfs-wordmark",children:[r.jsxs("div",{className:"sfs-wordmark-row1",children:[r.jsxs("div",{className:"sfs-wordmark-primary",children:[r.jsx("span",{className:"accent",children:"ScanFor"}),"Safe"]}),r.jsxs("div",{className:"sfs-status",children:[r.jsx("span",{className:"sfs-status-pulse"}),r.jsx("span",{className:"sfs-status-label",children:"Smart Shield"})]})]}),r.jsx("div",{className:"sfs-wordmark-secondary",children:"Innovations Pvt Ltd"})]})]}),r.jsx("nav",{className:"sfs-links",children:o.map(c=>r.jsx(Ze,{to:c.to,className:`sfs-link ${d(c.to)?"active":""}`,children:c.label},c.label))}),r.jsxs("div",{className:"sfs-actions",children:[r.jsx(Ze,{to:"/login",className:"sfs-login",children:"Login"}),r.jsxs("button",{className:"sfs-prereg",onClick:l,children:[r.jsx("span",{className:"prereg-dot"}),"Pre Registration"]})]}),r.jsx("button",{className:"sfs-mobile-btn",onClick:()=>i(!0),"aria-label":"Open menu",children:"☰"})]})]}),r.jsx("div",{className:`sfs-drawer-overlay ${n?"open":""}`,onClick:()=>i(!1),children:r.jsxs("div",{className:"sfs-drawer",onClick:c=>c.stopPropagation(),children:[r.jsxs("div",{className:"sfs-drawer-header",children:[r.jsxs("div",{className:"sfs-drawer-logo",children:[r.jsx("img",{src:"/logo.png",alt:"ScanForSafe",className:"sfs-drawer-logo-img"}),r.jsxs("div",{className:"sfs-drawer-brand",children:[r.jsx("span",{className:"accent",children:"ScanFor"}),"Safe"]})]}),r.jsx("button",{className:"sfs-drawer-close",onClick:()=>i(!1),"aria-label":"Close menu",children:"✕"})]}),r.jsx("nav",{className:"sfs-drawer-links",children:o.map(c=>r.jsx(Ze,{to:c.to,className:`sfs-drawer-link ${d(c.to)?"active":""}`,onClick:()=>i(!1),children:c.label},c.label))}),r.jsxs("div",{className:"sfs-drawer-actions",children:[r.jsx(Ze,{to:"/login",className:"sfs-drawer-login",onClick:()=>i(!1),children:"Login"}),r.jsxs("button",{className:"sfs-drawer-prereg",onClick:l,children:[r.jsx("span",{className:"prereg-dot"}),"Pre Registration"]})]})]})})]})}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_u=(...e)=>e.filter((t,n,i)=>!!t&&i.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var T1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:s="",children:a,iconNode:o,...d},l)=>x.createElement("svg",{ref:l,...T1,width:t,height:t,stroke:e,strokeWidth:i?Number(n)*24/Number(t):n,className:_u("lucide",s),...d},[...o.map(([c,f])=>x.createElement(c,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(e,t)=>{const n=x.forwardRef(({className:i,...s},a)=>x.createElement(L1,{ref:a,iconNode:t,className:_u(`lucide-${P1(e)}`,i),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=R("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=R("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=R("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=R("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=R("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=R("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=R("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=R("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=R("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=R("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=R("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=R("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=R("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=R("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=R("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=R("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=R("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=R("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=R("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=R("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=R("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=R("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=R("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=R("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=R("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=R("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=R("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=R("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=R("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=R("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=R("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=R("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=R("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=R("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=R("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=R("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=R("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=R("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=R("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=R("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=R("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=R("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=R("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=R("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=R("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=R("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=R("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=R("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=R("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=R("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=R("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=R("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=R("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=R("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=R("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=R("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=R("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=R("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=R("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=R("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=R("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=R("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=R("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=R("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=R("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=R("Watch",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=R("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=R("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),vg="/logo.png",wg=()=>r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),jg=()=>r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),kg=()=>r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"})}),Sg=()=>r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),Cg=()=>r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})});function zg(){const[e,t]=x.useState(""),[n,i]=x.useState(!1),s=d=>{d.preventDefault(),e.trim()&&(i(!0),setTimeout(()=>{i(!1),t("")},3e3))},a=[{label:"Home",to:"/"},{label:"Features",to:"/features"},{label:"Use Cases",to:"/use-cases"},{label:"How It Works",to:"/how-it-works"},{label:"Franchise",to:"/franchise"},{label:"Contact",to:"/contact"}],o=[{Icon:jg,href:"https://facebook.com/Scanforsafeinnovations",label:"Facebook",brandBg:"#1877F2",shadow:"rgba(24,119,242,0.55)"},{Icon:wg,href:"https://www.instagram.com/scanforsafeinnovations?igsh=anhlN2t1eG9qNDV2",label:"Instagram",brandBg:"linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",shadow:"rgba(220,39,67,0.55)"},{Icon:Sg,href:"https://twitter.com",label:"X",brandBg:"#000000",shadow:"rgba(255,255,255,0.25)"},{Icon:Cg,href:"https://linkedin.com",label:"LinkedIn",brandBg:"#0A66C2",shadow:"rgba(10,102,194,0.55)"},{Icon:kg,href:"https://t.me/scanforsafe",label:"Telegram",brandBg:"#26A5E4",shadow:"rgba(38,165,228,0.55)"}];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
          .sfs-footer { background-attachment: scroll; }
        }

        .sfs-footer-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(11,37,69,0.95) 0%, rgba(5,18,36,0.96) 100%);
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
          width: 60px; height: 60px;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255,255,255,0.9);
          border: 2px solid #2ebd3a;
          box-shadow: 0 0 20px rgba(46,189,58,0.3);
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }

        .sfs-footer-logo-img {
          width: 82%; height: auto; object-fit: contain;
        }

        .sfs-footer-title {
          font-family: 'Poppins', sans-serif;
          font-size: 22px; font-weight: 800;
          margin: 0; color: #ffffff;
          line-height: 1.2; letter-spacing: -0.02em;
        }

        .sfs-footer-title span { color: #2ebd3a; text-shadow: 0 0 10px rgba(46,189,58,0.2); }

        .sfs-footer-tagline {
          font-size: 10px; font-weight: 700;
          color: #2ebd3a; letter-spacing: 0.16em;
          text-transform: uppercase; margin-top: 4px;
        }

        .sfs-footer-desc {
          font-size: 14px; line-height: 1.7;
          color: #cbd5e1; margin: 0; max-width: 440px;
        }

        /* ── SOCIAL ICONS — app-icon style ── */
        .sfs-footer-socials {
          display: flex;
          gap: 12px;
          margin-top: 10px;
          flex-wrap: wrap;
        }

        .sfs-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  color: #ffffff;
  text-decoration: none;
  flex-shrink: 0;

  border: 2px solid transparent;

  box-shadow:
    0 4px 14px rgba(0,0,0,0.35);

  transition:
    transform 0.25s cubic-bezier(0.34,1.4,0.64,1),
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  position: relative;
  overflow: hidden;
}

        /* Brand backgrounds set via inline style on the element */

        .sfs-social-icon:hover {
          transform: translateY(-5px) scale(1.08);
          border-color: #4ade80;
          box-shadow:
            0 0 0 2px rgba(74,222,128,0.45),
            0 10px 28px var(--social-shadow, rgba(46,189,58,0.5));
        }

        /* subtle inner shine */
        .sfs-social-icon::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 45%;
          background: linear-gradient(180deg,rgba(255,255,255,0.18) 0%,transparent 100%);
          border-radius: 12px 12px 50% 50%;
          pointer-events: none;
        }

        /* ── NAV / CONTACT / BOTTOM (unchanged from original) ── */
        .sfs-footer-section-title {
          font-family: 'Poppins', sans-serif;
          font-size: 16px; font-weight: 700;
          color: #2ebd3a; letter-spacing: 0.08em;
          text-transform: uppercase;
          margin: 0 0 24px 0;
          position: relative; display: inline-block;
        }
        .sfs-footer-section-title::after {
          content: ""; position: absolute;
          left: 0; bottom: -6px;
          width: 32px; height: 2px;
          background: #2ebd3a; border-radius: 2px;
        }

        .sfs-footer-links { display: flex; flex-direction: column; gap: 12px; }

        .sfs-footer-link {
          color: #cbd5e1; text-decoration: none;
          font-size: 14px; font-weight: 500;
          display: flex; align-items: center; gap: 8px;
          transition: all 0.2s ease;
        }
        .sfs-footer-link:hover { color: #ffffff; transform: translateX(5px); }

        .sfs-footer-link-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #2ebd3a; opacity: 0.6;
          transition: all 0.2s ease;
        }
        .sfs-footer-link:hover .sfs-footer-link-dot {
          opacity: 1; transform: scale(1.3); box-shadow: 0 0 8px #2ebd3a;
        }

        .sfs-footer-contact-list { display: flex; flex-direction: column; gap: 16px; }

        .sfs-footer-contact-item {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 14px; color: #cbd5e1; line-height: 1.6;
        }
        .sfs-footer-contact-icon { color: #2ebd3a; flex-shrink: 0; margin-top: 3px; }
        .sfs-footer-contact-text strong { color: #ffffff; display: block; margin-bottom: 2px; }

        .sfs-footer-newsletter-wrap {
          border-top: 1.5px dashed rgba(255,255,255,0.1);
          border-bottom: 1.5px dashed rgba(255,255,255,0.1);
          padding: 30px 0; margin-bottom: 40px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px; flex-wrap: wrap;
        }
        .sfs-newsletter-info h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 18px; font-weight: 700;
          color: #ffffff; margin: 0 0 4px 0;
        }
        .sfs-newsletter-info p { font-size: 13.5px; color: #cbd5e1; margin: 0; }

        .sfs-newsletter-form {
          display: flex; width: 100%; max-width: 440px;
          background: rgba(255,255,255,0.04);
          border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 14px; padding: 4px;
          transition: all 0.25s ease;
        }
        .sfs-newsletter-form:focus-within {
          border-color: #2ebd3a;
          box-shadow: 0 0 16px rgba(46,189,58,0.2);
          background: rgba(255,255,255,0.08);
        }
        .sfs-newsletter-input {
          flex: 1; background: transparent; border: none;
          outline: none; color: #ffffff;
          padding: 10px 14px; font-size: 13.5px; width: 100%;
        }
        .sfs-newsletter-input::placeholder { color: #94a3b8; }
        .sfs-newsletter-btn {
          background: #2ebd3a; color: #ffffff; border: none;
          outline: none; border-radius: 10px; padding: 0 20px;
          font-size: 13.5px; font-weight: 700;
          cursor: pointer; transition: all 0.2s ease; white-space: nowrap;
        }
        .sfs-newsletter-btn:hover {
          background: #239c2d; box-shadow: 0 4px 12px rgba(46,189,58,0.3);
        }

        .sfs-footer-bottom {
          display: flex; align-items: center;
          justify-content: space-between; gap: 20px;
          padding-top: 30px;
          border-top: 1.5px solid rgba(255,255,255,0.08);
          flex-wrap: wrap;
        }
        .sfs-footer-copy { font-size: 13px; color: #94a3b8; margin: 0; }
        .sfs-footer-copy strong { color: #cbd5e1; }

        .sfs-footer-badges { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
        .sfs-footer-badge {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; color: #94a3b8; font-weight: 500;
        }
        .sfs-footer-badge-icon { color: #2ebd3a; }

        @media (max-width: 992px) {
          .sfs-footer-main { grid-template-columns: 1.2fr 1fr; }
          .sfs-footer-brand { grid-column: span 2; }
        }
        @media (max-width: 600px) {
          .sfs-footer-main { grid-template-columns: 1fr; gap: 40px; }
          .sfs-footer-brand { grid-column: span 1; }
          .sfs-footer-container { padding-top: 60px; }
          .sfs-footer-newsletter-wrap { flex-direction: column; align-items: flex-start; }
          .sfs-newsletter-form { max-width: 100%; }
          .sfs-footer-bottom { flex-direction: column; align-items: center; text-align: center; }
          .sfs-footer-badges { justify-content: center; }
        }
      `}),r.jsxs("footer",{className:"sfs-footer",children:[r.jsx("div",{className:"sfs-footer-overlay"}),r.jsxs("div",{className:"sfs-footer-container",children:[r.jsxs("div",{className:"sfs-footer-newsletter-wrap",children:[r.jsxs("div",{className:"sfs-newsletter-info",children:[r.jsx("h3",{children:"Get Safety Alerts & Updates"}),r.jsx("p",{children:"Subscribe to our corporate newsletter for modern verification insights."})]}),r.jsxs("form",{onSubmit:s,className:"sfs-newsletter-form",children:[r.jsx("input",{className:"sfs-newsletter-input",type:"email",required:!0,placeholder:n?"Thanks for subscribing!":"Enter your corporate email",value:e,onChange:d=>t(d.target.value),disabled:n}),r.jsx("button",{type:"submit",className:"sfs-newsletter-btn",disabled:n,children:n?"Subscribed!":"Subscribe"})]})]}),r.jsxs("div",{className:"sfs-footer-main",children:[r.jsxs("div",{className:"sfs-footer-brand",children:[r.jsxs(Ze,{to:"/",className:"sfs-footer-logo-wrap",style:{textDecoration:"none"},children:[r.jsx("div",{className:"sfs-footer-logo-box",children:r.jsx("img",{src:vg,alt:"ScanForSafe Logo",className:"sfs-footer-logo-img"})}),r.jsxs("div",{children:[r.jsxs("h2",{className:"sfs-footer-title",children:["Scan",r.jsx("span",{children:"ForSafe"})]}),r.jsx("div",{className:"sfs-footer-tagline",children:"Smart Shield"})]})]}),r.jsx("p",{className:"sfs-footer-desc",children:"Pioneering secure QR code solutions, visual verification systems, and smart tracking technologies. Empowering a safer and more authentic world through trusted hardware and visual tags."}),r.jsx("div",{className:"sfs-footer-socials",children:o.map(({Icon:d,href:l,label:c,brandBg:f,shadow:u})=>r.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"sfs-social-icon",title:c,style:{background:f,"--social-shadow":u},children:r.jsx(d,{})},c))})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"sfs-footer-section-title",children:"Navigation"}),r.jsx("div",{className:"sfs-footer-links",children:a.map((d,l)=>r.jsxs(Ze,{to:d.to,className:"sfs-footer-link",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[r.jsx("span",{className:"sfs-footer-link-dot"}),d.label]},l))})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"sfs-footer-section-title",children:"Contact Us"}),r.jsxs("div",{className:"sfs-footer-contact-list",children:[r.jsxs("div",{className:"sfs-footer-contact-item",children:[r.jsx($e,{className:"sfs-footer-contact-icon",size:17}),r.jsxs("div",{className:"sfs-footer-contact-text",children:[r.jsx("strong",{children:"Phone"}),"+91 98765 43210"]})]}),r.jsxs("div",{className:"sfs-footer-contact-item",children:[r.jsx(Hu,{className:"sfs-footer-contact-icon",size:17}),r.jsxs("div",{className:"sfs-footer-contact-text",children:[r.jsx("strong",{children:"Email"}),"customercare@scanforsafe.com"]})]}),r.jsxs("div",{className:"sfs-footer-contact-item",children:[r.jsx(qe,{className:"sfs-footer-contact-icon",size:17}),r.jsxs("div",{className:"sfs-footer-contact-text",children:[r.jsx("strong",{children:"Corporate Office"}),"SFSI Innovations Tower, Phase-2, Cyber Heights, Hyderabad, India"]})]})]})]})]}),r.jsxs("div",{className:"sfs-footer-bottom",children:[r.jsxs("p",{className:"sfs-footer-copy",children:["© ",new Date().getFullYear()," ",r.jsx("strong",{children:"ScanForSafe Innovations Pvt Ltd"}),". All rights reserved."]}),r.jsxs("div",{className:"sfs-footer-badges",children:[r.jsxs("span",{className:"sfs-footer-badge",children:[r.jsx(Qt,{size:14,className:"sfs-footer-badge-icon"})," SSL Secured"]}),r.jsxs("span",{className:"sfs-footer-badge",children:[r.jsx(ke,{size:14,className:"sfs-footer-badge-icon"})," ISO 27001 Certified"]}),r.jsxs("span",{className:"sfs-footer-badge",children:[r.jsx(eg,{size:14,className:"sfs-footer-badge-icon"})," Eco Friendly tags"]})]})]})]})]})]})}const Ng="/assets/car-BSIz0SDG.png",$o="/assets/luggage1-C_qRi5FB.png",Uo="/assets/dog-DfJS1NFe.png",Ho="/assets/senior-BmhxVd6c.png",Vo="/assets/kid-CS2W2XO4.png",Xu="/assets/id-DUU_l2qJ.png",Ls=[{label:"Vehicle",verified:"Car Verified",owner:"Rahul Verma",phone:"+91 98765 XXXXX",email:"r***@mail.com",address:"Green Park, New Delhi",asset:"SFS-CAR-4587",emergency:"Protected",registered:"12 May 2024",img:Ng,tagline:"QR tag on windshield",accentColor:"#2ebd3a",type:"Vehicle"},{label:"Luggage",verified:"Luggage Verified",owner:"Priya Kapoor",phone:"+91 93456 XXXXX",email:"p***@mail.com",address:"Koramangala, Bangalore",asset:"SFS-LUG-1123",emergency:"Protected",registered:"28 Mar 2024",img:$o,tagline:"Tag inside handle",accentColor:"#7ded88",type:"Luggage"},{label:"Pet",verified:"Pet Verified",owner:"Meera Nair",phone:"+91 94567 XXXXX",email:"m***@mail.com",address:"Indiranagar, Bangalore",asset:"SFS-DOG-2291",emergency:"Protected",registered:"02 Apr 2024",img:Uo,tagline:"Collar tag protected",accentColor:"#2ebd3a",type:"Pet"},{label:"Senior",verified:"Senior Verified",owner:"Suresh Kumar",phone:"+91 96789 XXXXX",email:"s***@mail.com",address:"Velachery, Chennai",asset:"SFS-SEN-0084",emergency:"Protected",registered:"18 Jun 2024",img:Ho,tagline:"Wearable ID band",accentColor:"#4bd557",type:"Senior"},{label:"Kid",verified:"Kid Verified",owner:"Anjali Singh",phone:"+91 97890 XXXXX",email:"an***@mail.com",address:"Banjara Hills, Hyderabad",asset:"SFS-KID-3301",emergency:"Protected",registered:"22 Jul 2024",img:Vo,tagline:"Smart wristband tag",accentColor:"#2ebd3a",type:"Kid"},{label:"ID / Document",verified:"ID Verified",owner:"Vikram Patel",phone:"+91 99123 XXXXX",email:"v***@mail.com",address:"Satellite, Ahmedabad",asset:"SFS-ID-6650",emergency:"Protected",registered:"05 Aug 2024",img:Xu,tagline:"Document tag secured",accentColor:"#7ded88",type:"ID"}],Rg=`
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

.sfs-hero, .sfs-hero *, .sfs-hero *::before, .sfs-hero *::after {
  margin: 0; padding: 0; box-sizing: border-box;
}

:root {
  --green: #2ebd3a;
  --green2: #4bd557;
  --green3: #7ded88;
  --dark: #06160A;
  --mid: #4b6357;
  --bg: #f4f8f4;
  --card-bg: rgba(255,255,255,0.92);
  --glass: rgba(255,255,255,0.68);
  --navbar-height: 106px;
  --navbar-height-mobile: 98px;
}

.sfs-page { padding-top: var(--navbar-height); }
@media (max-width: 1060px) { .sfs-page { padding-top: var(--navbar-height-mobile); } }

.sfs-hero {
  font-family: 'DM Sans', sans-serif;
  position: relative; overflow: hidden;
  display: flex; flex-direction: column;
  background: var(--bg); color: var(--dark);
  border: 1.5px solid rgba(46,189,58,0.22);
  border-radius: 32px;
  box-shadow: 0 0 0 1px rgba(46,189,58,0.08), 0 8px 64px rgba(46,189,58,0.12), inset 0 1px 0 rgba(255,255,255,0.9);
}

.sfs-bg {
  position: absolute; inset: 0;
  pointer-events: none; z-index: 0;
  border-radius: 30px; overflow: hidden;
}
.sfs-bg::before {
  content: ""; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 900px 600px at 110% 0%, rgba(46,189,58,0.13) 0%, transparent 58%),
    radial-gradient(ellipse 600px 500px at -10% 100%, rgba(46,189,58,0.09) 0%, transparent 55%),
    linear-gradient(160deg, #f5f9f5 0%, #f5f9f5 40%, #f0fdf2 100%);
}

/* ── DESKTOP GRID ── */
.sfs-grid {
  flex: 1; max-width: 1440px; width: 100%; margin: 0 auto;
  display: grid; grid-template-columns: 46% 54%;
  align-items: stretch;
  padding: 40px 56px 40px; gap: 0;
  position: relative; z-index: 2;
}

/* ── LEFT ── */
.sfs-left {
  padding-right: 40px;
  display: flex; flex-direction: column; justify-content: center;
}

.sfs-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--glass);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(46,189,58,0.26); border-radius: 12px;
  padding: 8px 14px 8px 10px; margin-bottom: 18px;
  font-size: 10px; font-weight: 700; letter-spacing: .08em; color: #1a4a1e;
  text-transform: uppercase;
  box-shadow: 0 2px 16px rgba(46,189,58,0.12), 0 1px 0 rgba(255,255,255,0.9) inset;
  animation: fadeUp .6s .10s cubic-bezier(.22,1,.36,1) both;
  width: fit-content;
}
.sfs-badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--green); animation: livePulse 2s ease-out infinite; flex-shrink: 0;
}
.sfs-badge-sep { width: 1px; height: 14px; background: rgba(46,189,58,0.30); }
.sfs-badge-count { font-size: 9.5px; font-weight: 800; color: var(--green); letter-spacing: .04em; }

@keyframes livePulse {
  0%   { box-shadow: 0 0 0 0 rgba(46,189,58,.7); }
  70%  { box-shadow: 0 0 0 8px rgba(46,189,58,0); }
  100% { box-shadow: 0 0 0 0 rgba(46,189,58,0); }
}

.sfs-h1 {
  font-family: 'Sora', sans-serif;
  font-size: 62px; line-height: .91; letter-spacing: -3.5px; font-weight: 900;
  color: var(--dark); margin-bottom: 18px;
  animation: slideInLeft .8s .04s cubic-bezier(.22,1,.36,1) both;
}
.sfs-h1 .green {
  background: linear-gradient(125deg, #0a2e10 0%, #2ebd3a 52%, #4bd557 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.sfs-sub {
  font-size: 14.5px; line-height: 1.75; color: var(--mid);
  max-width: 460px; margin-bottom: 24px; font-weight: 400;
  animation: slideInLeft .85s .14s cubic-bezier(.22,1,.36,1) both;
}

.sfs-feats { display: flex; gap: 9px; margin-bottom: 24px; }
.sfs-feat {
  flex: 1; background: var(--card-bg);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(46,189,58,0.14); border-radius: 18px; padding: 16px 12px 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,255,255,0.7) inset;
  position: relative; overflow: hidden;
  transition: .32s cubic-bezier(.34,1.46,.64,1); cursor: default;
}
.sfs-feat::before {
  content: ""; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(46,189,58,0.6), transparent);
  transform: scaleX(0); transform-origin: center; transition: .32s ease;
}
.sfs-feat:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 18px 40px rgba(46,189,58,0.14), 0 0 0 1px rgba(46,189,58,0.22); }
.sfs-feat:hover::before { transform: scaleX(1); }
.sfs-feat-ico {
  width: 42px; height: 42px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center; margin-bottom: 10px;
  transition: .32s cubic-bezier(.34,1.46,.64,1);
  box-shadow: 0 4px 12px rgba(46,189,58,0.15); border: 1px solid rgba(46,189,58,0.16); flex-shrink: 0;
}
.sfs-feat:hover .sfs-feat-ico { transform: scale(1.12) rotate(-5deg); }
.sfs-feat h4 { font-size: 12.5px; font-weight: 700; color: var(--dark); margin-bottom: 4px; }
.sfs-feat p  { font-size: 10.5px; line-height: 1.5; color: #6a8070; }
.sfs-feat:nth-child(1) { animation: fadeUp .55s .25s both; }
.sfs-feat:nth-child(2) { animation: fadeUp .55s .36s both; }
.sfs-feat:nth-child(3) { animation: fadeUp .55s .47s both; }

.sfs-hero-actions { display: flex; align-items: center; gap: 12px; animation: fadeUp .55s .56s both; }
.sfs-btn-main {
  border: none;
  background: linear-gradient(135deg, #1fa82a 0%, #2ebd3a 50%, #0B2545 100%);
  color: white; padding: 15px 30px; border-radius: 14px;
  font-size: 14px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  cursor: pointer; display: flex; align-items: center; gap: 8px;
  box-shadow: 0 12px 32px rgba(46,189,58,0.34), 0 2px 6px rgba(46,189,58,0.18);
  transition: .32s cubic-bezier(.34,1.46,.64,1); position: relative; overflow: hidden;
}
.sfs-btn-main::before {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%); pointer-events: none;
}
.sfs-btn-main:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 18px 44px rgba(46,189,58,0.42); }
.sfs-btn-sec {
  border: 1px solid rgba(46,189,58,0.28); background: var(--glass);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  padding: 14px 24px; border-radius: 14px;
  font-size: 13px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  display: flex; align-items: center; gap: 9px;
  cursor: pointer; color: var(--dark); transition: .26s ease;
  box-shadow: 0 1px 0 rgba(255,255,255,0.8) inset;
}
.sfs-btn-sec:hover { transform: translateY(-3px); border-color: rgba(46,189,58,0.52); }
.sfs-play-ring {
  width: 28px; height: 28px; border-radius: 50%;
  background: linear-gradient(135deg, #2ebd3a, #1fa82a);
  display: flex; align-items: center; justify-content: center; font-size: 8px; color: white;
  box-shadow: 0 3px 10px rgba(46,189,58,0.30); transition: .26s; border: 1px solid rgba(255,255,255,0.28);
}
.sfs-btn-sec:hover .sfs-play-ring { transform: scale(1.1) rotate(8deg); }

/* ── RIGHT ── */
.sfs-right {
  position: relative; display: flex;
  align-items: center; justify-content: center;
  padding: 24px 0 24px 16px;
}
.sfs-stage {
  position: relative; width: 100%;
  display: flex; align-items: center; justify-content: center;
}

.sfs-img-frame {
  position: relative; z-index: 3;
  width: 100%; max-width: 560px;
  border-radius: 28px; padding: 5px;
  background: linear-gradient(145deg, rgba(46,189,58,0.60) 0%, rgba(125,237,136,0.35) 35%, rgba(46,189,58,0.20) 65%, rgba(11,37,69,0.55) 100%);
  box-shadow: 0 0 0 1px rgba(46,189,58,0.18), 0 0 40px rgba(46,189,58,0.32), 0 0 90px rgba(46,189,58,0.16), 0 28px 70px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.35);
  animation: frameFloat 5s ease-in-out infinite;
  transition: box-shadow .4s ease;
}
.sfs-img-frame:hover {
  box-shadow: 0 0 0 1px rgba(46,189,58,0.35), 0 0 56px rgba(46,189,58,0.48), 0 0 110px rgba(46,189,58,0.22), 0 34px 80px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.45);
}
@keyframes frameFloat {
  0%,100% { transform: translateY(0) rotateY(-2deg) rotateX(0.5deg); }
  50%      { transform: translateY(-10px) rotateY(-0.5deg) rotateX(0deg); }
}
.sfs-img-frame::before {
  content: ""; position: absolute; top: -2px; left: -2px; width: 26px; height: 26px;
  border-color: rgba(125,237,136,0.95); border-style: solid; border-width: 3.5px 0 0 3.5px;
  border-radius: 10px 0 0 0; z-index: 8; pointer-events: none;
}
.sfs-img-frame::after {
  content: ""; position: absolute; bottom: -2px; right: -2px; width: 26px; height: 26px;
  border-color: rgba(125,237,136,0.95); border-style: solid; border-width: 0 3.5px 3.5px 0;
  border-radius: 0 0 10px 0; z-index: 8; pointer-events: none;
}
.sfs-img-frame-inner {
  position: relative; border-radius: 24px; overflow: hidden;
  background: linear-gradient(160deg, #0c1e0f 0%, #091508 100%);
  box-shadow: inset 0 0 0 1px rgba(46,189,58,0.28), inset 0 0 30px rgba(46,189,58,0.10);
}
.sfs-img-frame-inner::before {
  content: ""; position: absolute; top: 8px; right: 8px; width: 20px; height: 20px;
  border-color: rgba(75,213,87,0.75); border-style: solid; border-width: 2.5px 2.5px 0 0;
  border-radius: 0 6px 0 0; z-index: 8; pointer-events: none;
}
.sfs-img-frame-inner::after {
  content: ""; position: absolute; bottom: 8px; left: 8px; width: 20px; height: 20px;
  border-color: rgba(75,213,87,0.75); border-style: solid; border-width: 0 0 2.5px 2.5px;
  border-radius: 0 0 6px 0; z-index: 8; pointer-events: none;
}

.sfs-frame-scanline {
  position: absolute; inset: 0; z-index: 6; pointer-events: none; border-radius: 24px; overflow: hidden;
}
.sfs-frame-scanline::after {
  content: ""; position: absolute; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent 0%, rgba(46,189,58,0.4) 20%, rgba(125,237,136,0.98) 50%, rgba(46,189,58,0.4) 80%, transparent 100%);
  box-shadow: 0 0 14px rgba(46,189,58,0.8), 0 0 36px rgba(46,189,58,0.35);
  animation: inFrameScan 2.6s ease-in-out infinite;
}
@keyframes inFrameScan {
  0%   { top: 12%; opacity: 0; }
  8%   { opacity: 1; }
  92%  { opacity: 1; }
  100% { top: 88%; opacity: 0; }
}

.sfs-frame-status {
  position: absolute; bottom: 0; left: 0; right: 0; z-index: 7;
  background: linear-gradient(180deg, transparent 0%, rgba(6,22,10,0.92) 100%);
  padding: 36px 16px 14px;
  display: flex; align-items: center; justify-content: space-between;
  border-radius: 0 0 24px 24px;
}
.sfs-frame-status-left { display: flex; align-items: center; gap: 7px; }
.sfs-frame-status-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #2ebd3a; animation: livePulse 1.8s infinite; flex-shrink: 0;
}
.sfs-frame-status-txt { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.92); letter-spacing: .06em; }
.sfs-frame-status-id  { font-size: 10px; font-weight: 600; color: rgba(125,237,136,0.85); letter-spacing: .05em; }

.sfs-asset-img {
  width: 100%; max-width: none; display: block;
  object-fit: cover; position: relative; z-index: 4; aspect-ratio: 4/3;
}
.sfs-asset-entering { animation: assetEnter .65s cubic-bezier(.22,1,.36,1) both; }
.sfs-asset-exiting  { animation: assetExit .25s ease forwards; }
.sfs-asset-idle     { animation: none; }
@keyframes assetEnter {
  from { opacity:0; transform:scale(.82) translateY(24px); filter:blur(6px); }
  to   { opacity:1; transform:none; filter:none; }
}
@keyframes assetExit {
  from { opacity:1; transform:none; }
  to   { opacity:0; transform:scale(.90) translateY(-18px); filter:blur(3px); }
}

.sfs-glow {
  position: absolute; width: 500px; height: 500px; border-radius: 50%;
  background: radial-gradient(circle, rgba(46,189,58,0.14) 0%, rgba(46,189,58,0.05) 40%, transparent 70%);
  filter: blur(12px); animation: glowPulse 4.5s ease-in-out infinite; z-index: 1; pointer-events: none;
}
@keyframes glowPulse { 0%,100%{transform:scale(.88);opacity:.5;}50%{transform:scale(1.07);opacity:.95;} }
.sfs-ring {
  position: absolute; border-radius: 50%; border: 1px solid rgba(46,189,58,0.07);
  pointer-events: none; z-index: 1;
}
.sfs-ring-1 { width:560px;height:560px;animation:ringPulse 4s ease-in-out infinite; }
.sfs-ring-2 { width:720px;height:720px;animation:ringPulse 4s ease-in-out infinite .9s; }
@keyframes ringPulse { 0%,100%{opacity:.30;transform:scale(.97);}50%{opacity:.70;transform:scale(1.03);} }

.sfs-qr-float {
  position: absolute; right: -14px; top: 60px;
  background: var(--card-bg); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: 18px; padding: 12px 14px;
  box-shadow: 0 16px 52px rgba(0,0,0,0.10), 0 0 0 1px rgba(255,255,255,0.85) inset;
  border: 1px solid rgba(46,189,58,0.16); z-index: 12;
  display: flex; align-items: center; gap: 10px;
  animation: qrFloat 5.5s ease-in-out infinite .8s;
  transform: perspective(600px) rotateY(-6deg);
}
@keyframes qrFloat {
  0%,100%{transform:perspective(600px) rotateY(-6deg) translateY(0);}
  50%{transform:perspective(600px) rotateY(-9deg) translateY(-10px);}
}
.sfs-qr-float-inner { background:white;border-radius:8px;padding:5px;border:1px solid #e0e0e0;flex-shrink:0; }
.sfs-qr-float-title { font-size:11.5px;font-weight:800;color:var(--dark);margin-bottom:2px; }
.sfs-qr-float-sub   { font-size:8.5px;color:#5a7060;line-height:1.4; }
.sfs-qr-live { display:flex;align-items:center;gap:4px;margin-top:4px;font-size:8px;font-weight:700;color:#2ebd3a;letter-spacing:.04em; }
.sfs-qr-live-dot { width:5px;height:5px;border-radius:50%;background:#2ebd3a;animation:livePulse 1.8s infinite; }

.sfs-alert-float {
  position: absolute; right: 6px; bottom: 70px;
  background: var(--card-bg); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: 14px; padding: 9px 13px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.82) inset;
  border: 1px solid rgba(46,189,58,0.14); z-index: 12;
  display: flex; align-items: center; gap: 9px;
  animation: alertFloat 6s ease-in-out infinite 1.2s;
}
@keyframes alertFloat { 0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);} }
.sfs-alert-ico {
  width: 32px; height: 32px; border-radius: 10px;
  background: linear-gradient(135deg, #e8f8eb, #d4f5d8);
  display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0;
  border: 1px solid rgba(46,189,58,0.18);
}
.sfs-alert-h { font-size:10.5px;font-weight:700;color:var(--dark); }
.sfs-alert-p { font-size:8.5px;color:var(--mid);margin-top:1px; }

.sfs-asset-label {
  position: absolute; top: 12px; left: -8px;
  background: var(--card-bg); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border-radius: 11px; padding: 7px 11px; border: 1px solid rgba(46,189,58,0.14); z-index: 12;
  display: flex; align-items: center; gap: 7px;
  animation: pillFloat 6s ease-in-out infinite .4s;
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
}
@keyframes pillFloat { 0%,100%{transform:translateY(0);}50%{transform:translateY(-7px);} }
.sfs-alabel-dot { width:6px;height:6px;border-radius:50%;background:#2ebd3a;animation:livePulse 1.9s infinite;flex-shrink:0; }
.sfs-alabel-text { font-size:11px;font-weight:700;color:var(--dark); }
.sfs-alabel-sub  { font-size:9px;color:var(--mid); }

.sfs-shield-badge {
  position:absolute; top:14px; right:8px; width:82px; height:82px; z-index:12;
  animation:shieldFloat 5s ease-in-out infinite;
  filter:drop-shadow(0 12px 28px rgba(46,189,58,0.32));
}
@keyframes shieldFloat { 0%,100%{transform:translateY(0) rotate(2deg);}50%{transform:translateY(-13px) rotate(-1deg);} }

.sfs-asset-nav {
  position:absolute; bottom:10px; left:50%; transform:translateX(-50%);
  display:flex; align-items:center; gap:7px; z-index:12;
}
.sfs-nav-dot {
  width:7px;height:7px;border-radius:50%;background:rgba(46,189,58,0.25);cursor:pointer;
  transition:.3s cubic-bezier(.34,1.46,.64,1);border:1px solid rgba(46,189,58,0.20);
}
.sfs-nav-dot.active { background:#2ebd3a;width:20px;border-radius:4px;box-shadow:0 2px 8px rgba(46,189,58,0.40); }

.sfs-mesh {
  position:absolute;top:-60px;right:-60px;width:520px;height:520px;opacity:.28;
  animation:meshRotate 40s linear infinite;pointer-events:none;z-index:0;
}
@keyframes meshRotate{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
.sfs-globe-wrap {
  position:absolute;bottom:-80px;left:-70px;width:300px;height:300px;
  animation:globePulse 7s ease-in-out infinite;z-index:1;pointer-events:none;
}
@keyframes globePulse{0%,100%{transform:scale(1) rotate(-5deg);opacity:.45;}50%{transform:scale(1.04) rotate(-2deg);opacity:.62;}}
.sfs-particle{position:absolute;border-radius:50%;background:rgba(46,189,58,0.28);pointer-events:none;}

@keyframes slideInLeft{from{opacity:0;transform:translateX(-32px);}to{opacity:1;transform:none;}}
@keyframes fadeUp{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:none;}}

/* ── VIDEO MODAL ── */
body.sfs-modal-open{overflow:hidden;}
.sfs-video-overlay {
  position:fixed;inset:0;z-index:99999;
  display:flex;align-items:center;justify-content:center;
  animation:vmFadeIn .28s ease both;
}
@keyframes vmFadeIn{from{opacity:0;}to{opacity:1;}}
@keyframes vmFadeOut{from{opacity:1;}to{opacity:0;}}
.sfs-video-overlay.sfs-closing{animation:vmFadeOut .22s ease forwards;}
.sfs-vm-backdrop {
  position:absolute;inset:0;
  background:rgba(0,0,0,0.94);
  backdrop-filter:blur(20px) saturate(0.2);
  -webkit-backdrop-filter:blur(20px) saturate(0.2);
  cursor:pointer;
}
.sfs-vm-wrap { position:relative;z-index:2;width:min(90vw,1100px);animation:vmSlideUp .36s cubic-bezier(.22,1,.36,1) both; }
@keyframes vmSlideUp{from{opacity:0;transform:scale(.94) translateY(36px);}to{opacity:1;transform:none;}}
@keyframes vmSlideDown{from{opacity:1;transform:none;}to{opacity:0;transform:scale(.93) translateY(28px);}}
.sfs-video-overlay.sfs-closing .sfs-vm-wrap{animation:vmSlideDown .2s ease forwards;}
.sfs-vm-bar { display:flex;align-items:center;justify-content:space-between;padding:0 4px 12px; }
.sfs-vm-bar-left { display:flex;align-items:center;gap:8px; }
.sfs-vm-bar-dot { width:6px;height:6px;border-radius:50%;background:#2ebd3a;animation:livePulse 2s infinite;flex-shrink:0; }
.sfs-vm-bar-label { font-family:'DM Sans',sans-serif;font-size:11px;font-weight:600;color:rgba(255,255,255,0.55);letter-spacing:.08em;text-transform:uppercase; }
.sfs-vm-close {
  width:34px;height:34px;border-radius:8px;
  background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;transition:all .18s ease;color:rgba(255,255,255,0.60);
  font-size:16px;line-height:1;font-family:sans-serif;flex-shrink:0;
}
.sfs-vm-close:hover{background:rgba(255,255,255,0.14);border-color:rgba(255,255,255,0.26);color:#fff;transform:scale(1.08);}
.sfs-vm-player-shell {
  position:relative;border-radius:14px;overflow:hidden;background:#000;
  box-shadow:0 0 0 1px rgba(46,189,58,0.20),0 40px 100px rgba(0,0,0,0.80),0 0 60px rgba(46,189,58,0.10);
  line-height:0;
}
.sfs-vm-loading {
  position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;
  background:#060e07;border-radius:14px;transition:opacity .35s ease;z-index:10;
}
.sfs-vm-loading.sfs-vm-ready{opacity:0;pointer-events:none;}
.sfs-vm-spinner { width:40px;height:40px;border-radius:50%;border:3px solid rgba(46,189,58,0.15);border-top-color:#2ebd3a;animation:sfsSpinIt .75s linear infinite; }
@keyframes sfsSpinIt{to{transform:rotate(360deg);}}
.sfs-vm-loading-label{font-family:'DM Sans',sans-serif;font-size:12px;font-weight:500;color:rgba(125,237,136,0.65);letter-spacing:.04em;}
.sfs-vm-video{width:100%;display:block;max-height:76vh;object-fit:contain;background:#000;vertical-align:bottom;border:none;outline:none;}
.sfs-vm-hint{padding:10px 4px 0;text-align:right;font-family:'DM Sans',sans-serif;font-size:10px;font-weight:500;color:rgba(255,255,255,0.20);letter-spacing:.04em;}
/* ════════════════════════════════════════
   TABLET  ≤ 1200px
════════════════════════════════════════ */
@media(max-width:1200px){
  .sfs-hero{border-radius:22px;}
  .sfs-grid{grid-template-columns:1fr;padding:36px 32px 32px;gap:28px;}
  .sfs-h1{font-size:48px;letter-spacing:-2.2px;}
  .sfs-right{padding:0;}
  .sfs-img-frame{max-width:480px;}
}

/* ════════════════════════════════════════
   MOBILE  ≤ 640px  — full redesign to match screenshot
 ════════════════════════════════════════ */
@media(max-width:640px){

  /* container and layout */
  .sfs-hero {
    border-radius: 20px;
    border-width: 1px;
  }
  .sfs-grid {
    display: flex;
    flex-direction: column;
    padding: 16px 14px;
    gap: 0;
  }

  /* Use display contents to interleave columns */
  .sfs-left {
    display: contents;
  }
  .sfs-right {
    display: contents;
  }

  /* Hide elements not present in the screenshot */
  .sfs-shield-badge {
    display: none !important;
  }
  .sfs-asset-nav {
    display: none !important;
  }
  .sfs-frame-status {
    display: none !important;
  }

  /* ── LEFT — TEXT SECTION ── */
  .sfs-badge {
    order: 1;
    margin-bottom: 10px;
    font-size: 10px;
    font-weight: 700;
    padding: 6px 12px;
    border-radius: 9999px;
    background: #ffffff !important;
    border: 1px solid rgba(46,189,58,0.2) !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    color: #16a34a !important;
    letter-spacing: 0.05em;
    width: fit-content;
    align-self: flex-start;
  }
  .sfs-badge-dot {
    background: #16a34a;
    width: 6px;
    height: 6px;
  }
  .sfs-badge-sep {
    background: rgba(46,189,58,0.2);
    width: 1px;
    height: 12px;
  }
  .sfs-badge-count {
    color: #16a34a !important;
  }

  .sfs-h1 {
    order: 2;
    font-size: 30px;
    line-height: 1.05;
    letter-spacing: -1.4px;
    margin-bottom: 10px;
    font-weight: 900;
    color: #06160A;
  }
  .sfs-h1 .green {
    background: none;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    background-clip: unset;
    color: #16a34a;
  }

  .sfs-sub {
    order: 3;
    font-size: 13.5px;
    line-height: 1.55;
    color: #4b6357;
    margin-bottom: 12px;
    max-width: 100%;
  }

  /* ── ALERT FLOAT (Owner Alerted!) ── */
  .sfs-alert-float {
    order: 1; /* Flows first inside .sfs-stage column */
    position: relative;
    inset: auto;
    display: flex;
    align-items: center;
    gap: 12px;
    background: #ffffff !important;
    border: 1px solid rgba(0,0,0,0.05) !important;
    border-radius: 14px;
    padding: 10px 14px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
    width: fit-content;
    margin: 0 0 12px 0;
    align-self: flex-start;
    animation: fadeUp 0.6s ease both;
  }
  .sfs-alert-ico {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: #fffbeb !important;
    border: 1px solid #fef3c7 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    flex-shrink: 0;
    box-shadow: none;
  }
  .sfs-alert-h {
    font-size: 12px;
    font-weight: 800;
    color: #06160A;
  }
  .sfs-alert-p {
    font-size: 10px;
    color: #6a8070;
    margin-top: 1px;
  }

  /* ── RIGHT — IMAGE FRAME STAGE ── */
  .sfs-stage {
    order: 4; /* Positioned under subtitle in sfs-grid */
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    position: relative;
    margin-bottom: 16px;
  }

  .sfs-img-frame {
    order: 2;
    max-width: 100%;
    border-radius: 18px;
    padding: 4px;
    box-shadow: 0 8px 32px rgba(46,189,58,0.15);
  }
  .sfs-img-frame-inner {
    border-radius: 14px;
  }
  .sfs-asset-img {
    aspect-ratio: 16/10;
    max-height: 220px;
    object-fit: cover;
    border-radius: 14px;
  }

  /* ── FLOATING CHIPS ON IMAGE ── */
  .sfs-asset-label {
    position: absolute;
    bottom: 12px;
    left: 12px;
    top: auto;
    background: rgba(6, 22, 10, 0.85) !important;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(46,189,58,0.4) !important;
    border-radius: 12px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 12;
    box-shadow: 0 4px 16px rgba(0,0,0,0.25);
    animation: pillFloat 6s ease-in-out infinite .4s;
  }
  .sfs-alabel-dot {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #16a34a !important;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    animation: none;
  }
  .sfs-alabel-dot::after {
    content: "✓";
    color: white;
    font-size: 11px;
    font-weight: 900;
    line-height: 1;
  }
  .sfs-alabel-text {
    font-size: 11px;
    font-weight: 700;
    color: #ffffff !important;
  }
  .sfs-alabel-sub {
    font-size: 9px;
    color: rgba(255,255,255,0.7) !important;
  }

  .sfs-qr-float {
    position: absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%) perspective(600px) rotateY(-4deg);
    background: #ffffff !important;
    border: 1px solid rgba(46,189,58,0.18) !important;
    border-radius: 14px;
    padding: 10px 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    z-index: 12;
    display: flex;
    align-items: center;
    gap: 10px;
    animation: qrFloatMobile 5.5s ease-in-out infinite .8s;
  }
  @keyframes qrFloatMobile {
    0%,100%{transform: translateY(-50%) perspective(600px) rotateY(-4deg) scale(0.95);}
    50%{transform: translateY(-56%) perspective(600px) rotateY(-6deg) scale(0.95);}
  }
  .sfs-qr-float-title {
    font-size: 11px;
    font-weight: 800;
    color: #0f172a;
  }
  .sfs-qr-float-sub {
    font-size: 8.5px;
    color: #6b7280;
  }
  .sfs-qr-live {
    font-size: 8.5px;
    font-weight: 700;
    color: #16a34a;
  }
  .sfs-qr-live-dot {
    width: 6px;
    height: 6px;
    background: #16a34a;
  }

  /* ambient rings */
  .sfs-ring-1 {
    width: 280px;
    height: 280px;
  }
  .sfs-ring-2 {
    display: none;
  }

  /* ── FEATURE CARDS ── */
  .sfs-feats {
    order: 5;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-bottom: 16px;
    width: 100%;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    overflow-x: visible;
  }
  .sfs-feat {
    flex: none;
    min-width: 0;
    background: #ffffff;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 10px;
    padding: 10px 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    transition: none;
  }
  .sfs-feat:hover {
    transform: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
  }
  .sfs-feat-ico {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;
    border: none;
  }
  .sfs-feat h4 {
    font-size: 10px;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 2px;
    line-height: 1.2;
  }
  .sfs-feat p {
    font-size: 8.5px;
    line-height: 1.25;
    color: #6b7280;
  }

  /* ── BUTTONS ── */
  .sfs-hero-actions {
    order: 6;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin-top: 4px;
  }
  .sfs-btn-main {
    width: 100%;
    justify-content: center;
    background: #16a34a !important;
    color: #ffffff !important;
    padding: 12px 18px;
    border-radius: 12px;
    font-size: 13.5px;
    font-weight: 700;
    box-shadow: 0 4px 14px rgba(22, 163, 74, 0.2);
    border: none;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: none;
  }
  .sfs-btn-main:hover {
    transform: none;
    box-shadow: 0 4px 14px rgba(22, 163, 74, 0.2);
  }
  .sfs-btn-sec {
    width: 100%;
    justify-content: center;
    background: #ffffff !important;
    color: #16a34a !important;
    border: 1.5px solid rgba(22, 163, 74, 0.2) !important;
    padding: 11px 18px;
    border-radius: 12px;
    font-size: 13.5px;
    font-weight: 700;
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
    display: flex;
    align-items: center;
    gap: 8px;
    transition: none;
  }
  .sfs-btn-sec:hover {
    transform: none;
    border-color: rgba(22, 163, 74, 0.35) !important;
  }
  .sfs-play-ring {
    width: 24px;
    height: 24px;
    background: #16a34a !important;
    border: none !important;
    box-shadow: none !important;
    font-size: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* video modal */
  .sfs-vm-wrap {
    width: calc(100vw - 16px);
    padding: 0;
  }
  .sfs-vm-player-shell {
    border-radius: 10px;
  }
  .sfs-vm-video {
    max-height: 52vh;
  }
}

/* ════════════════════════════════════════
   EXTRA SMALL  ≤ 380px
 ════════════════════════════════════════ */
@media(max-width:380px){
  .sfs-h1 {
    font-size: 28px;
    letter-spacing: -1.3px;
  }
  .sfs-grid {
    padding: 16px 12px 20px;
  }
  .sfs-feats {
    gap: 6px;
  }
  .sfs-feat {
    padding: 10px 6px;
  }
}
`;function Ig({size:e=48}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 21 21",fill:"none",children:[r.jsx("rect",{x:"0",y:"0",width:"7",height:"7",rx:"1",fill:"#0B2545"}),r.jsx("rect",{x:"1",y:"1",width:"5",height:"5",rx:"0.5",fill:"white"}),r.jsx("rect",{x:"2",y:"2",width:"3",height:"3",fill:"#0B2545"}),r.jsx("rect",{x:"14",y:"0",width:"7",height:"7",rx:"1",fill:"#0B2545"}),r.jsx("rect",{x:"15",y:"1",width:"5",height:"5",rx:"0.5",fill:"white"}),r.jsx("rect",{x:"16",y:"2",width:"3",height:"3",fill:"#0B2545"}),r.jsx("rect",{x:"0",y:"14",width:"7",height:"7",rx:"1",fill:"#0B2545"}),r.jsx("rect",{x:"1",y:"15",width:"5",height:"5",rx:"0.5",fill:"white"}),r.jsx("rect",{x:"2",y:"16",width:"3",height:"3",fill:"#0B2545"}),r.jsx("rect",{x:"8",y:"0",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"10",y:"0",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"12",y:"0",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"8",y:"2",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"11",y:"2",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"9",y:"4",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"11",y:"4",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"8",y:"6",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"10",y:"6",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"0",y:"8",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"3",y:"8",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"5",y:"8",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"8",y:"8",width:"1",height:"2",fill:"#0B2545"}),r.jsx("rect",{x:"10",y:"8",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"13",y:"8",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"15",y:"8",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"18",y:"8",width:"1",height:"2",fill:"#0B2545"}),r.jsx("rect",{x:"0",y:"10",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"2",y:"10",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"5",y:"10",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"9",y:"10",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"11",y:"10",width:"3",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"15",y:"10",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"17",y:"10",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"0",y:"12",width:"3",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"4",y:"12",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"8",y:"12",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"11",y:"12",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"13",y:"12",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"16",y:"12",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"18",y:"12",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"8",y:"14",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"10",y:"14",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"13",y:"14",width:"1",height:"2",fill:"#0B2545"}),r.jsx("rect",{x:"15",y:"14",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"17",y:"14",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"8",y:"16",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"11",y:"16",width:"1",height:"2",fill:"#0B2545"}),r.jsx("rect",{x:"14",y:"16",width:"1",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"16",y:"16",width:"1",height:"2",fill:"#0B2545"}),r.jsx("rect",{x:"18",y:"16",width:"2",height:"1",fill:"#0B2545"}),r.jsx("rect",{x:"8",y:"18",width:"1",height:"2",fill:"#0B2545"}),r.jsx("rect",{x:"10",y:"18",width:"1",height:"2",fill:"#0B2545"}),r.jsx("rect",{x:"14",y:"18",width:"1",height:"2",fill:"#0B2545"}),r.jsx("rect",{x:"19",y:"18",width:"1",height:"2",fill:"#0B2545"})]})}const Eg=Array.from({length:18},(e,t)=>({id:t,x:`${(t*37+11)%100}%`,y:`${(t*53+7)%100}%`,size:`${t%3+2}px`,delay:`${t*.7%6}s`,dur:`${8+t%5}s`,op:.09+t%4*.07}));function Mg(){return r.jsxs(r.Fragment,{children:[Eg.map(e=>r.jsx("div",{className:"sfs-particle",style:{left:e.x,top:e.y,width:e.size,height:e.size,opacity:e.op,animation:`pd ${e.dur} ease-in-out infinite ${e.delay}`}},e.id)),r.jsx("style",{children:"@keyframes pd{0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(8px,-11px) scale(1.3);}66%{transform:translate(-6px,7px) scale(0.7);}}"})]})}function Bg(){const e=[];for(let t=0;t<=12;t++)e.push(r.jsx("line",{x1:"0",y1:t*50,x2:"600",y2:t*50,stroke:"rgba(46,189,58,.07)",strokeWidth:".8"},`h${t}`),r.jsx("line",{x1:t*50,y1:"0",x2:t*50,y2:"600",stroke:"rgba(46,189,58,.07)",strokeWidth:".8"},`v${t}`));return r.jsx("svg",{className:"sfs-mesh",viewBox:"0 0 600 600",children:e})}function Pg(){return r.jsx("div",{className:"sfs-globe-wrap",children:r.jsxs("svg",{viewBox:"0 0 300 300",children:[r.jsx("defs",{children:r.jsxs("radialGradient",{id:"gg5",cx:"38%",cy:"32%",children:[r.jsx("stop",{offset:"0%",stopColor:"rgba(125,237,136,.28)"}),r.jsx("stop",{offset:"55%",stopColor:"rgba(46,189,58,.10)"}),r.jsx("stop",{offset:"100%",stopColor:"rgba(46,189,58,.02)"})]})}),r.jsx("circle",{cx:"150",cy:"150",r:"136",fill:"url(#gg5)",stroke:"rgba(46,189,58,.14)",strokeWidth:"1"}),[-90,-54,-18,18,54,90].map((e,t)=>{const n=150+e,i=Math.sqrt(Math.max(0,136*136-e*e));return r.jsx("ellipse",{cx:"150",cy:n,rx:i,ry:i*.26,fill:"none",stroke:"rgba(46,189,58,.09)",strokeWidth:".7"},t)}),[0,30,60,90,120,150].map((e,t)=>r.jsx("ellipse",{cx:"150",cy:"150",rx:"40",ry:"136",fill:"none",stroke:"rgba(46,189,58,.07)",strokeWidth:".7",transform:`rotate(${e} 150 150)`},t)),r.jsx("ellipse",{cx:"150",cy:"150",rx:"172",ry:"44",fill:"none",stroke:"rgba(46,189,58,.18)",strokeWidth:"1.2",strokeDasharray:"7 6",style:{animation:"os5 14s linear infinite",transformOrigin:"150px 150px"}}),r.jsx("circle",{cx:"322",cy:"150",r:"7",fill:"rgba(46,189,58,.50)",style:{animation:"os5 14s linear infinite",transformOrigin:"150px 150px"}}),r.jsx("style",{children:"@keyframes os5{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"})]})})}function Tg(){return r.jsxs("svg",{className:"sfs-shield-badge",viewBox:"0 0 110 110",children:[r.jsxs("defs",{children:[r.jsxs("radialGradient",{id:"sg5",cx:"40%",cy:"30%",children:[r.jsx("stop",{offset:"0%",stopColor:"rgba(125,237,136,.99)"}),r.jsx("stop",{offset:"60%",stopColor:"rgba(46,189,58,.87)"}),r.jsx("stop",{offset:"100%",stopColor:"rgba(30,150,36,.77)"})]}),r.jsx("filter",{id:"sb3",children:r.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2.5"})})]}),r.jsx("path",{d:"M55 12 L87 25 L87 52 C87 70 72 84 55 92 C38 84 23 70 23 52 L23 25 Z",fill:"rgba(46,189,58,0.22)",filter:"url(#sb3)"}),r.jsx("path",{d:"M55 10 L88 24 L88 52 C88 70 73 84 55 92 C37 84 22 70 22 52 L22 24 Z",fill:"url(#sg5)",stroke:"rgba(255,255,255,.40)",strokeWidth:"1.5"}),r.jsx("path",{d:"M55 16 L82 28 L82 52 C82 67 69 79 55 86 C41 79 28 67 28 52 L28 28 Z",fill:"none",stroke:"rgba(255,255,255,.20)",strokeWidth:"1"}),r.jsx("polyline",{points:"38,55 50,67 72,43",fill:"none",stroke:"white",strokeWidth:"5.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Lg(){return r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z",fill:"#0B2545",stroke:"#0B2545",strokeWidth:"0.5"}),r.jsx("path",{d:"M9 12l2 2 4-4",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Wg(){return r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"#0d7a8a"}),r.jsx("path",{d:"M6.34 6.34a8 8 0 0 0 0 11.32",stroke:"#0d7a8a",strokeWidth:"2",strokeLinecap:"round"}),r.jsx("path",{d:"M17.66 6.34a8 8 0 0 1 0 11.32",stroke:"#0d7a8a",strokeWidth:"2",strokeLinecap:"round"}),r.jsx("path",{d:"M9.17 9.17a4 4 0 0 0 0 5.66",stroke:"#0d7a8a",strokeWidth:"2",strokeLinecap:"round"}),r.jsx("path",{d:"M14.83 9.17a4 4 0 0 1 0 5.66",stroke:"#0d7a8a",strokeWidth:"2",strokeLinecap:"round"})]})}function Fg(){return r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",fill:"#c0392b",stroke:"#c0392b",strokeWidth:"0.5"}),r.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),r.jsx("circle",{cx:"12",cy:"16.5",r:"0.8",fill:"white"})]})}function Ag({onClose:e}){const t=x.useRef(null),[n,i]=x.useState(!1),[s,a]=x.useState(!1);x.useEffect(()=>(document.body.classList.add("sfs-modal-open"),()=>document.body.classList.remove("sfs-modal-open")),[]),x.useEffect(()=>{const l=c=>{c.key==="Escape"&&d()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)});const o=()=>{var l;a(!0),(l=t.current)==null||l.play().catch(()=>{})},d=()=>{var l;n||(i(!0),(l=t.current)==null||l.pause(),setTimeout(e,220))};return r.jsxs("div",{className:`sfs-video-overlay${n?" sfs-closing":""}`,children:[r.jsx("div",{className:"sfs-vm-backdrop",onClick:d}),r.jsxs("div",{className:"sfs-vm-wrap",children:[r.jsxs("div",{className:"sfs-vm-bar",children:[r.jsxs("div",{className:"sfs-vm-bar-left",children:[r.jsx("div",{className:"sfs-vm-bar-dot"}),r.jsx("span",{className:"sfs-vm-bar-label",children:"How ScanForSafe Works"})]}),r.jsx("button",{className:"sfs-vm-close",onClick:d,"aria-label":"Close video",children:"✕"})]}),r.jsxs("div",{className:"sfs-vm-player-shell",children:[r.jsxs("div",{className:`sfs-vm-loading${s?" sfs-vm-ready":""}`,children:[r.jsx("div",{className:"sfs-vm-spinner"}),r.jsx("span",{className:"sfs-vm-loading-label",children:"Loading video…"})]}),r.jsx("video",{ref:t,className:"sfs-vm-video",src:"/hero.mp4",preload:"auto",playsInline:!0,controls:!0,onCanPlay:o,onLoadedData:o})]}),r.jsx("div",{className:"sfs-vm-hint",children:"Press ESC to close"})]})]})}function Dg({asset:e,imgClass:t}){return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"sfs-glow"}),r.jsx("div",{className:"sfs-ring sfs-ring-1"}),r.jsx("div",{className:"sfs-ring sfs-ring-2"}),r.jsx("div",{className:"sfs-img-frame",children:r.jsxs("div",{className:"sfs-img-frame-inner",children:[r.jsx("img",{src:e.img,alt:e.label,className:`sfs-asset-img ${t}`}),r.jsx("div",{className:"sfs-frame-scanline"}),r.jsxs("div",{className:"sfs-frame-status",children:[r.jsxs("div",{className:"sfs-frame-status-left",children:[r.jsx("div",{className:"sfs-frame-status-dot"}),r.jsx("span",{className:"sfs-frame-status-txt",children:e.verified})]}),r.jsx("span",{className:"sfs-frame-status-id",children:e.asset})]})]})}),r.jsxs("div",{className:"sfs-asset-label",children:[r.jsx("div",{className:"sfs-alabel-dot"}),r.jsxs("div",{children:[r.jsx("div",{className:"sfs-alabel-text",children:e.verified}),r.jsx("div",{className:"sfs-alabel-sub",children:e.tagline})]})]}),r.jsxs("div",{className:"sfs-qr-float",children:[r.jsx("div",{className:"sfs-qr-float-inner",children:r.jsx(Ig,{size:40})}),r.jsxs("div",{children:[r.jsx("div",{className:"sfs-qr-float-title",children:e.asset}),r.jsx("div",{className:"sfs-qr-float-sub",children:"QR · NFC Protected"}),r.jsxs("div",{className:"sfs-qr-live",children:[r.jsx("div",{className:"sfs-qr-live-dot"}),"Live Active"]})]})]}),r.jsxs("div",{className:"sfs-alert-float",children:[r.jsx("div",{className:"sfs-alert-ico",children:"🔔"}),r.jsxs("div",{children:[r.jsx("div",{className:"sfs-alert-h",children:"Owner Alerted!"}),r.jsx("div",{className:"sfs-alert-p",children:"Scan detected · 2s ago"})]})]})]})}function Og(){const e=er(),[t,n]=x.useState(0),[i,s]=x.useState("sfs-asset-entering"),[a,o]=x.useState(!1);x.useEffect(()=>{const f=setTimeout(()=>s("sfs-asset-idle"),700);return()=>clearTimeout(f)},[]),x.useEffect(()=>{if(a)return;const f=setInterval(()=>{s("sfs-asset-exiting"),setTimeout(()=>{n(u=>(u+1)%Ls.length),s("sfs-asset-entering"),setTimeout(()=>s("sfs-asset-idle"),700)},300)},5500);return()=>clearInterval(f)},[a]);const d=f=>{s("sfs-asset-exiting"),setTimeout(()=>{n(f),s("sfs-asset-entering"),setTimeout(()=>s("sfs-asset-idle"),700)},300)},l=Ls[t],c=[{ico:r.jsx(Lg,{}),bg:"linear-gradient(135deg,#e8eef8,#d0dcf0)",border:"rgba(11,37,69,0.18)",h:"Secure QR & NFC",p:"Military-grade encrypted ID protection"},{ico:r.jsx(Wg,{}),bg:"linear-gradient(135deg,#e0f5f7,#c0eaed)",border:"rgba(13,122,138,0.18)",h:"Live Tracking",p:"Real-time alerts & continuous monitoring"},{ico:r.jsx(Fg,{}),bg:"linear-gradient(135deg,#fdecea,#f9d0cc)",border:"rgba(192,57,43,0.18)",h:"Emergency Access",p:"Instant verified owner identification"}];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Rg}),a&&r.jsx(Ag,{onClose:()=>o(!1)}),r.jsx("div",{className:"sfs-page",children:r.jsxs("div",{className:"sfs-hero",children:[r.jsxs("div",{className:"sfs-bg",children:[r.jsx(Bg,{}),r.jsx(Pg,{}),r.jsx(Mg,{})]}),r.jsxs("div",{className:"sfs-grid",children:[r.jsxs("div",{className:"sfs-left",children:[r.jsxs("div",{className:"sfs-badge",children:[r.jsx("div",{className:"sfs-badge-dot"}),"Live Protection Active",r.jsx("span",{className:"sfs-badge-sep"}),r.jsx("span",{className:"sfs-badge-count",children:"10,000+ Secured"})]}),r.jsxs("h1",{className:"sfs-h1",children:["Smart Protection",r.jsx("br",{}),"That ",r.jsx("span",{className:"green",children:"Connects"}),r.jsx("br",{}),r.jsx("span",{className:"green",children:"Your World"})]}),r.jsx("p",{className:"sfs-sub",children:"Protect vehicles, bikes, luggage, pets and loved ones with next-generation QR + NFC verification. Instant owner alerts and live smart protection — all with a single scan."}),r.jsx("div",{className:"sfs-feats",children:c.map((f,u)=>r.jsxs("div",{className:"sfs-feat",children:[r.jsx("div",{className:"sfs-feat-ico",style:{background:f.bg,borderColor:f.border},children:f.ico}),r.jsxs("div",{children:[r.jsx("h4",{children:f.h}),r.jsx("p",{children:f.p})]})]},u))}),r.jsxs("div",{className:"sfs-hero-actions",children:[r.jsxs("button",{className:"sfs-btn-main",onClick:()=>e("/qr-form"),children:["Pre-Registration",r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),r.jsxs("button",{className:"sfs-btn-sec",onClick:()=>o(!0),children:[r.jsx("div",{className:"sfs-play-ring",children:"▶"}),"See How It Works"]})]})]}),r.jsxs("div",{className:"sfs-right",children:[r.jsx(Tg,{}),r.jsx("div",{className:"sfs-stage",children:r.jsx(Dg,{asset:l,imgClass:i})}),r.jsx("div",{className:"sfs-asset-nav",children:Ls.map((f,u)=>r.jsx("div",{className:`sfs-nav-dot${u===t?" active":""}`,onClick:()=>d(u),title:f.label},u))})]})]})]})})]})}const _g=[{title:"24/7",text:"Active Monitoring",icon:r.jsx(Nn,{size:16})},{title:"50K+",text:"Daily QR Scans",icon:r.jsx(F1,{size:16})},{title:"ISO 27001",text:"Security Certified",icon:r.jsx(rg,{size:16})},{title:"99.9%",text:"System Uptime",icon:r.jsx(X1,{size:16})}];function $g(){return r.jsxs("section",{className:"relative overflow-hidden py-12 bg-gradient-to-b from-[#f8fafc] via-[#f0fbf2] to-white",children:[r.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-[#2ebd3a]/10 blur-[100px]"}),r.jsx("div",{className:"absolute inset-0 opacity-[0.03]",children:r.jsx("div",{className:"w-full h-full",style:{backgroundImage:"radial-gradient(#2ebd3a 1px, transparent 1px)",backgroundSize:"24px 24px"}})}),r.jsxs("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6",children:[r.jsx("div",{className:"flex justify-center mb-10",children:r.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e8f8eb] shadow-[0_8px_30px_rgba(46,189,58,0.08)]",children:[r.jsxs("div",{className:"relative flex items-center justify-center",children:[r.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#2ebd3a] animate-pulse"}),r.jsx("div",{className:"absolute w-2.5 h-2.5 rounded-full bg-[#2ebd3a] animate-ping opacity-30"})]}),r.jsx("span",{className:"text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-slate-700",children:"Live Protection Metrics"})]})}),r.jsxs("div",{className:"mt-10 relative overflow-hidden rounded-[26px] border border-[#e8f8eb] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.04)]",children:[r.jsx("div",{className:"absolute inset-[1px] rounded-[25px] border border-white/80 pointer-events-none"}),r.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[90px] bg-[#2ebd3a]/10 blur-[60px]"}),r.jsx("div",{className:"absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2ebd3a] to-transparent"}),r.jsx("div",{className:"relative grid grid-cols-2 md:grid-cols-4",children:_g.map((e,t)=>r.jsxs("div",{className:`group relative px-5 py-7 text-center transition-all duration-300 hover:bg-[#e8f8eb]/40 cursor-pointer 
                  ${t<2?"border-b border-[#e8f8eb]":""} 
                  ${t%2===0?"border-r border-[#e8f8eb]":""} 
                  md:border-b-0 md:border-r md:last:border-r-0`,children:[r.jsx("div",{className:"mx-auto mb-3 w-10 h-10 rounded-xl bg-gradient-to-br from-[#2ebd3a] to-[#1b7a21] text-white flex items-center justify-center shadow-md shadow-[#2ebd3a]/20 group-hover:scale-110 transition duration-500",children:e.icon}),r.jsx("h4",{className:"text-2xl sm:text-3xl font-black tracking-tight text-[#0B2545]",children:e.title}),r.jsx("p",{className:"mt-1 text-xs sm:text-sm text-slate-500 font-medium",children:e.text}),r.jsx("div",{className:"mx-auto mt-4 h-[2px] w-8 rounded-full bg-gradient-to-r from-[#2ebd3a] to-[#4bd557] group-hover:w-14 transition-all duration-500"})]},e.title))})]})]})]})}const z={green:"#2ebd3a",softGreen:"#e8f8eb",navy:"#0B2545",textMain:"#11355e",borderGreen:"#7ded88"},pd=[{initials:"RS",bg:"#fde8d8",color:"#712b13"},{initials:"PM",bg:"#e8f8eb",color:"#27500a"},{initials:"AK",bg:"#e3f2fd",color:"#0c447c"},{initials:"NV",bg:"#f3e5f5",color:"#534ab7"},{initials:"SK",bg:"#fff8e1",color:"#633806"}];function Ug(){return r.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[pd.map((e,t)=>r.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:e.bg,color:e.color,fontSize:8,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid white",marginLeft:t===0?0:-9,zIndex:pd.length-t,position:"relative",flexShrink:0,boxShadow:"0 1px 4px rgba(0,0,0,0.12)"},children:e.initials},t)),r.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"#0B2545",color:"white",fontSize:7,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid white",marginLeft:-9,flexShrink:0,boxShadow:"0 1px 4px rgba(0,0,0,0.12)"},children:"+9K"})]})}function Hg(){return r.jsxs("svg",{width:"32",height:"21",viewBox:"0 0 900 600",style:{borderRadius:3,display:"block"},children:[r.jsx("rect",{width:"900",height:"600",fill:"#FF9933"}),r.jsx("rect",{y:"200",width:"900",height:"200",fill:"#fff"}),r.jsx("rect",{y:"400",width:"900",height:"200",fill:"#138808"}),r.jsx("circle",{cx:"450",cy:"300",r:"70",fill:"none",stroke:"#000080",strokeWidth:"7"}),r.jsxs("g",{stroke:"#000080",strokeWidth:"2.5",children:[r.jsx("line",{x1:"450",y1:"230",x2:"450",y2:"370"}),r.jsx("line",{x1:"380",y1:"300",x2:"520",y2:"300"}),r.jsx("line",{x1:"400.5",y1:"249.5",x2:"499.5",y2:"350.5"}),r.jsx("line",{x1:"499.5",y1:"249.5",x2:"400.5",y2:"350.5"}),r.jsx("line",{x1:"380",y1:"267",x2:"520",y2:"333"}),r.jsx("line",{x1:"380",y1:"333",x2:"520",y2:"267"})]}),r.jsx("circle",{cx:"450",cy:"300",r:"11",fill:"#000080"})]})}function Vg({size:e=22,color:t="white"}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z",fill:t}),r.jsx("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.402A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.073-1.115l-.292-.174-3.027.852.815-2.981-.19-.306A7.944 7.944 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z",fill:t})]})}const Yg=[{title:"Scan Successful",sub:"ScanForSafe · Verified",prog:"16%"},{title:"Vehicle Information",sub:"ScanForSafe · Verified",prog:"33%"},{title:"Calling Securely",sub:"Secure Call · Connecting",prog:"50%"},{title:"Incoming Call",sub:"Vehicle Owner · Ringing",prog:"66%"},{title:"Active Call",sub:"Secure · Encrypted",prog:"83%"},{title:"Call Connected",sub:"Mission Accomplished",prog:"100%"},{title:"Scan Successful",sub:"ScanForSafe · Verified",prog:"16%"},{title:"Message Owner",sub:"ScanForSafe · Direct SMS",prog:"40%"},{title:"Message Sent",sub:"Delivered to Owner",prog:"75%"},{title:"Owner Received",sub:"Direct SMS · No App",prog:"100%"}];function qg({light:e=!1}){const t=e?"rgba(255,255,255,0.9)":"#111";return r.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[r.jsxs("svg",{width:"12",height:"8",viewBox:"0 0 13 9",children:[r.jsx("rect",{x:"0",y:"5.5",width:"2.2",height:"3.5",rx:"0.4",fill:t}),r.jsx("rect",{x:"3.2",y:"3.5",width:"2.2",height:"5.5",rx:"0.4",fill:t}),r.jsx("rect",{x:"6.4",y:"1.5",width:"2.2",height:"7.5",rx:"0.4",fill:t}),r.jsx("rect",{x:"9.6",y:"0",width:"2.2",height:"9",rx:"0.4",fill:t})]}),r.jsxs("svg",{width:"11",height:"8",viewBox:"0 0 12 9",children:[r.jsx("path",{d:"M6 7L6 8.5",stroke:t,strokeWidth:"1.4",strokeLinecap:"round"}),r.jsx("path",{d:"M3.5 5Q6 3 8.5 5",stroke:t,strokeWidth:"1.1",fill:"none",strokeLinecap:"round"}),r.jsx("path",{d:"M1 2.5Q6 -0.5 11 2.5",stroke:t,strokeWidth:"1.1",fill:"none",strokeLinecap:"round"})]}),r.jsxs("svg",{width:"19",height:"9",viewBox:"0 0 21 10",children:[r.jsx("rect",{x:"0",y:"1",width:"18",height:"8",rx:"1.8",stroke:t,strokeWidth:"0.9",fill:"none"}),r.jsx("rect",{x:"18.5",y:"3.2",width:"2",height:"3.6",rx:"0.9",fill:t}),r.jsx("rect",{x:"1.2",y:"2.2",width:"14",height:"5.6",rx:"0.8",fill:t})]})]})}function Qu({color:e="#2ebd3a",size:t=72}){return r.jsxs("div",{style:{position:"relative",width:t,height:t,flexShrink:0},children:[[0,1,2].map(n=>r.jsx("div",{style:{position:"absolute",inset:-(n*12),borderRadius:"50%",border:`1.5px solid ${e}`,opacity:.22-n*.06,animation:`rippleOut 2s ${n*.55}s infinite ease-out`}},n)),r.jsx("div",{style:{width:t,height:t,borderRadius:"50%",background:`linear-gradient(135deg,${e}22,${e}44)`,border:`3px solid ${e}`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 0 24px ${e}66`},children:r.jsx(at,{size:t*.44,color:e,fill:e})})]})}function Xg({onNavigate:e}){const[t,n]=x.useState(!1);return x.useEffect(()=>{setTimeout(()=>n(!0),100)},[]),r.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflowY:"auto",background:"linear-gradient(160deg,#f0fdf4 0%,#fff 60%,#f0f8ff 100%)"},children:[r.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:14,opacity:t?1:0,transition:"opacity 0.4s"},children:r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:5,background:z.softGreen,borderRadius:20,padding:"4px 10px",fontSize:8,fontWeight:800,color:"#166534",border:`1px solid ${z.borderGreen}`,letterSpacing:"0.06em"},children:[r.jsx("div",{style:{width:5,height:5,borderRadius:"50%",background:z.green,animation:"pulse 1.5s infinite"}})," SCANFORSAFE · SECURE"]})}),r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:16,opacity:t?1:0,transform:t?"scale(1)":"scale(0.7)",transition:"all 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.1s"},children:r.jsx(Qu,{color:z.green,size:68})}),r.jsxs("div",{style:{textAlign:"center",marginTop:14,opacity:t?1:0,transition:"opacity 0.4s 0.3s"},children:[r.jsx("div",{style:{fontSize:15,fontWeight:900,color:z.navy,fontFamily:"'Sora',sans-serif",letterSpacing:"-0.4px"},children:"Scan Successful!"}),r.jsx("div",{style:{fontSize:9,color:"#888",marginTop:3,fontFamily:"'DM Sans',sans-serif"},children:"QR code verified & authenticated"})]}),r.jsxs("div",{style:{margin:"10px 12px 0",background:"white",borderRadius:12,padding:"10px 12px",border:`1.5px solid ${z.borderGreen}`,display:"flex",alignItems:"center",gap:9,boxShadow:"0 4px 16px rgba(46,189,58,0.1)",opacity:t?1:0,transition:"opacity 0.4s 0.45s"},children:[r.jsx("div",{style:{width:36,height:36,borderRadius:10,background:z.softGreen,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx(zt,{size:17,color:z.green})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("div",{style:{fontSize:8,color:z.green,fontWeight:700,marginBottom:1,textTransform:"uppercase",letterSpacing:"0.05em",fontFamily:"'Sora',sans-serif"},children:"Two-Wheeler · KA 05 MX 2847"}),r.jsx("div",{style:{fontSize:11,fontWeight:900,color:z.navy,fontFamily:"'Sora',sans-serif"},children:"VEH-4K9P-2X7R"})]}),r.jsx("div",{style:{background:z.green,borderRadius:5,padding:"2px 7px",fontSize:7,fontWeight:800,color:"white"},children:"✓ LIVE"})]}),r.jsx("div",{style:{display:"flex",gap:6,margin:"8px 12px 0",opacity:t?1:0,transition:"opacity 0.4s 0.55s"},children:["🔒 Encrypted","✓ Verified","🛡 Safe"].map(i=>r.jsx("div",{style:{flex:1,background:"#f8f9fa",borderRadius:7,padding:"5px 4px",textAlign:"center",fontSize:7.5,fontWeight:700,color:"#555",border:"1px solid #eee"},children:i},i))}),r.jsxs("div",{onClick:()=>e(2),style:{margin:"10px 12px 12px",background:`linear-gradient(135deg,${z.navy},${z.green})`,borderRadius:11,padding:"11px",display:"flex",alignItems:"center",justifyContent:"center",gap:6,fontSize:11,fontWeight:800,color:"white",cursor:"pointer",boxShadow:"0 6px 20px rgba(46,189,58,0.35)",opacity:t?1:0,transition:"opacity 0.4s 0.65s",fontFamily:"'Sora',sans-serif"},children:["View Vehicle Details ",r.jsx(Fo,{size:13})]})]})}function Qg({onNavigate:e,onMsgNavigate:t}){const n=[{key:"call",icon:r.jsx($e,{size:14,color:"white"}),iconBg:"#185fa5",cardBg:"#e8f3ff",cardBorder:"#b5d4f4",label:"Call Vehicle Owner",desc:"Connect securely · No number revealed",onClick:()=>e(3)},{key:"msg",icon:r.jsx(Vu,{size:14,color:"white",fill:"white"}),iconBg:z.green,cardBg:z.softGreen,cardBorder:z.borderGreen,label:"Message Owner",desc:"Send a quick SMS · Phone visible to owner",onClick:()=>t()},{key:"loc",icon:r.jsx(qe,{size:14,color:"white"}),iconBg:"#e07b00",cardBg:"#fff3e0",cardBorder:"#facc75",label:"Share My Location",desc:"Let owner know exactly where you are"},{key:"emerg",icon:r.jsx(gi,{size:14,color:"white"}),iconBg:"#dc2626",cardBg:"#fff1f2",cardBorder:"#fca5a5",label:"Report Emergency",desc:"Alert owner · Contact authorities"}];return r.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflowY:"auto"},children:[r.jsxs("div",{style:{background:`linear-gradient(135deg,${z.navy} 0%,#1a3a6e 100%)`,margin:"8px 10px 0",borderRadius:12,padding:"12px",display:"flex",alignItems:"center",gap:10},children:[r.jsx("div",{style:{width:38,height:38,borderRadius:10,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(255,255,255,0.25)"},children:r.jsx(zt,{size:19,color:"white"})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("div",{style:{fontSize:8,color:"rgba(255,255,255,0.6)",fontWeight:700,marginBottom:1,textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:"'Sora',sans-serif"},children:"Two-Wheeler"}),r.jsx("div",{style:{fontSize:13,fontWeight:900,color:"white",letterSpacing:"-0.3px",fontFamily:"'Sora',sans-serif"},children:"KA 05 MX 2847"}),r.jsxs("div",{style:{marginTop:4,display:"flex",gap:4},children:[r.jsxs("span",{style:{background:z.green,borderRadius:4,padding:"2px 6px",fontSize:7,fontWeight:800,color:"white",display:"inline-flex",alignItems:"center",gap:2},children:[r.jsx(at,{size:6,color:"white",fill:"white"})," Verified"]}),r.jsx("span",{style:{background:"rgba(255,255,255,0.15)",borderRadius:4,padding:"2px 6px",fontSize:7,fontWeight:700,color:"rgba(255,255,255,0.85)"},children:"🔒 Owner ID Hidden"})]})]})]}),r.jsx("div",{style:{padding:"8px 10px 4px",fontSize:8,fontWeight:700,color:"#aaa",letterSpacing:"0.08em",textTransform:"uppercase",fontFamily:"'Sora',sans-serif"},children:"Choose an action"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:"0 10px 10px"},children:n.map(i=>r.jsxs("div",{onClick:i.onClick,style:{display:"flex",alignItems:"center",gap:10,padding:"9px 11px",borderRadius:11,background:i.cardBg,border:`1.5px solid ${i.cardBorder}`,cursor:i.onClick?"pointer":"default",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},children:[r.jsx("div",{style:{width:30,height:30,borderRadius:9,background:i.iconBg,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.icon}),r.jsxs("div",{style:{flex:1},children:[r.jsx("div",{style:{fontSize:10.5,fontWeight:800,color:"#111",marginBottom:1,fontFamily:"'Sora',sans-serif"},children:i.label}),r.jsx("div",{style:{fontSize:8.5,color:"#888",lineHeight:1.4,fontFamily:"'DM Sans',sans-serif"},children:i.desc})]}),r.jsx(O1,{size:12,color:"#bbb"})]},i.key))}),r.jsx("div",{style:{background:"#f8f8f8",margin:"0 10px 10px",borderRadius:9,padding:"7px 10px",fontSize:8,color:"#bbb",textAlign:"center",border:"1px solid #eee",lineHeight:1.5},children:"🔒 All communications are fully encrypted."})]})}function Gg({onNavigate:e}){const[t,n]=x.useState(0);return x.useEffect(()=>{const i=setInterval(()=>n(a=>(a+1)%4),500),s=setTimeout(()=>e(4),4e3);return()=>{clearInterval(i),clearTimeout(s)}},[]),r.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,background:"linear-gradient(160deg,#0B2545 0%,#0d3b2e 60%,#0a2218 100%)",alignItems:"center",justifyContent:"center",padding:"14px"},children:[r.jsxs("div",{style:{position:"relative",marginBottom:16},children:[[0,1].map(i=>r.jsx("div",{style:{position:"absolute",inset:-(i+1)*14,borderRadius:"50%",border:"1px solid rgba(46,189,58,0.25)",animation:`rippleOut 2s ${i*.7}s infinite`}},i)),r.jsx("div",{style:{width:70,height:70,borderRadius:"50%",background:"linear-gradient(135deg,#0B2545,#2ebd3a)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 36px rgba(46,189,58,0.4)"},children:r.jsx($e,{size:28,color:"white"})})]}),r.jsx("div",{style:{fontSize:14,fontWeight:900,color:"white",marginBottom:5,fontFamily:"'Sora',sans-serif"},children:"Calling Securely"}),r.jsxs("div",{style:{fontSize:10,color:"rgba(255,255,255,0.6)",marginBottom:5},children:["Connecting to vehicle owner",".".repeat(t)]}),r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:5,background:"rgba(46,189,58,0.15)",borderRadius:20,padding:"4px 11px",fontSize:8,fontWeight:700,color:z.green,border:"1px solid rgba(46,189,58,0.3)",marginBottom:16},children:[r.jsx(xt,{size:8,color:z.green})," 100% Secure · Owner ID Hidden"]}),r.jsx("div",{style:{background:"rgba(255,255,255,0.07)",borderRadius:12,padding:"10px 14px",width:"100%",marginBottom:16,border:"1px solid rgba(255,255,255,0.1)"},children:[["Caller ID","Hidden from owner"],["Encryption","End-to-end 256-bit"],["Route","ScanForSafe Secure"]].map(([i,s])=>r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[r.jsx("span",{style:{fontSize:8.5,color:"rgba(255,255,255,0.5)"},children:i}),r.jsx("span",{style:{fontSize:8.5,color:"white",fontWeight:700},children:s})]},i))}),r.jsx("div",{onClick:()=>e(2),style:{width:46,height:46,borderRadius:"50%",background:"#ef4444",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 6px 20px rgba(239,68,68,0.45)"},children:r.jsx(Oo,{size:19,color:"white"})}),r.jsx("div",{style:{fontSize:8,color:"rgba(255,255,255,0.3)",marginTop:6},children:"Tap to cancel"})]})}function Kg({onNavigate:e}){const[t,n]=x.useState(0);return x.useEffect(()=>{const i=setInterval(()=>n(s=>(s+1)%3),600);return()=>clearInterval(i)},[]),r.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,background:"linear-gradient(160deg,#111 0%,#1a1a2e 50%,#0d0d0d 100%)",alignItems:"center",justifyContent:"space-between",padding:"16px 14px 20px"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:3,width:"100%"},children:[r.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.45)",fontWeight:600,marginBottom:8},children:"Incoming Call"}),r.jsxs("div",{style:{position:"relative",marginBottom:12},children:[[0,1,2].map(i=>r.jsx("div",{style:{position:"absolute",inset:-(i+1)*10,borderRadius:"50%",background:`rgba(46,189,58,${.08-i*.025})`,animation:`rippleOut 2.4s ${i*.6}s infinite`}},i)),r.jsx("div",{style:{width:62,height:62,borderRadius:"50%",background:"linear-gradient(135deg,#0B2545,#2ebd3a)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 28px rgba(46,189,58,0.5)",position:"relative",zIndex:1},children:r.jsx("div",{style:{fontSize:12,fontWeight:900,color:"white",fontFamily:"'Sora',sans-serif"},children:"SS"})})]}),r.jsx("div",{style:{fontSize:15,fontWeight:900,color:"white",fontFamily:"'Sora',sans-serif"},children:"Vehicle Owner"}),r.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.5)",marginBottom:3},children:"ScanForSafe Secure Call"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,background:"rgba(46,189,58,0.12)",borderRadius:20,padding:"4px 10px",border:"1px solid rgba(46,189,58,0.25)",marginBottom:10},children:[r.jsx("div",{style:{display:"flex",gap:3},children:[0,1,2].map(i=>r.jsx("div",{style:{width:4,height:4,borderRadius:"50%",background:i<=t?z.green:"rgba(255,255,255,0.2)",transition:"background 0.3s"}},i))}),r.jsx("span",{style:{fontSize:8,color:"rgba(255,255,255,0.6)",fontWeight:600},children:"Ringing securely…"})]}),r.jsx("div",{style:{background:"rgba(255,255,255,0.05)",borderRadius:10,padding:"8px 12px",width:"100%",border:"1px solid rgba(255,255,255,0.08)"},children:r.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.65)",lineHeight:1.6},children:"Someone scanned your ScanForSafe QR tag. Their identity is verified by ScanForSafe."})})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-around",width:"100%",paddingTop:6},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:5},children:[r.jsx("div",{onClick:()=>e(2),style:{width:46,height:46,borderRadius:"50%",background:"#ef4444",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:r.jsx(Oo,{size:19,color:"white"})}),r.jsx("span",{style:{fontSize:9,color:"rgba(255,255,255,0.45)",fontWeight:600},children:"Decline"})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:5},children:[r.jsx("div",{onClick:()=>e(5),style:{width:46,height:46,borderRadius:"50%",background:z.green,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 6px 20px rgba(46,189,58,0.5)",animation:"acceptPulse 1.2s infinite"},children:r.jsx($e,{size:19,color:"white"})}),r.jsx("span",{style:{fontSize:9,color:"rgba(255,255,255,0.45)",fontWeight:600},children:"Accept"})]})]})]})}function Zg({onNavigate:e}){const[t,n]=x.useState(0),[i,s]=x.useState(!1),[a,o]=x.useState(!1);x.useEffect(()=>{const l=setInterval(()=>n(f=>f+1),1e3),c=setTimeout(()=>e(6),5e3);return()=>{clearInterval(l),clearTimeout(c)}},[]);const d=l=>`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`;return r.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,background:"linear-gradient(160deg,#0B2545 0%,#0d3b2e 100%)",alignItems:"center",justifyContent:"space-between",padding:"16px 14px 20px"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},children:[r.jsx("div",{style:{fontSize:8,color:"rgba(255,255,255,0.4)",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:12},children:"Secure Call Active"}),r.jsx("div",{style:{width:62,height:62,borderRadius:"50%",background:"linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))",border:"2px solid rgba(255,255,255,0.25)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:10},children:r.jsx(Oi,{size:27,color:"rgba(255,255,255,0.8)"})}),r.jsx("div",{style:{fontSize:15,fontWeight:900,color:"white",fontFamily:"'Sora',sans-serif"},children:"Vehicle Owner"}),r.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.45)",marginBottom:5},children:"Connected via ScanForSafe"}),r.jsx("div",{style:{fontSize:22,fontWeight:900,color:z.green,fontFamily:"monospace",letterSpacing:"2px",marginBottom:5},children:d(t)}),r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,background:"rgba(46,189,58,0.15)",borderRadius:20,padding:"3px 9px",border:"1px solid rgba(46,189,58,0.3)",marginBottom:14},children:[r.jsx("div",{style:{width:4,height:4,borderRadius:"50%",background:z.green,animation:"pulse 1s infinite"}}),r.jsx("span",{style:{fontSize:7.5,color:z.green,fontWeight:700},children:"End-to-end encrypted"})]}),r.jsx("div",{style:{display:"flex",alignItems:"center",gap:2.5,height:24,marginBottom:14},children:Array.from({length:16},(l,c)=>r.jsx("div",{style:{width:2.5,borderRadius:2,background:`rgba(46,189,58,${.4+Math.random()*.6})`,height:`${Math.random()*16+4}px`,animation:`waveBar 0.8s ${c*.06}s infinite alternate ease-in-out`}},c))})]}),r.jsxs("div",{style:{width:"100%"},children:[r.jsx("div",{style:{display:"flex",justifyContent:"space-around",marginBottom:12},children:[{icon:r.jsx(ig,{size:16,color:i?"white":"rgba(255,255,255,0.5)"}),label:"Mute",action:()=>s(l=>!l),active:i},{icon:r.jsx(yg,{size:16,color:a?"white":"rgba(255,255,255,0.5)"}),label:"Speaker",action:()=>o(l=>!l),active:a}].map(l=>r.jsxs("div",{onClick:l.action,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer"},children:[r.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:l.active?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center"},children:l.icon}),r.jsx("span",{style:{fontSize:8,color:"rgba(255,255,255,0.4)"},children:l.label})]},l.label))}),r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:r.jsx("div",{onClick:()=>e(6),style:{width:50,height:50,borderRadius:"50%",background:"#ef4444",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:r.jsx(Oo,{size:21,color:"white"})})}),r.jsx("div",{style:{textAlign:"center",fontSize:8,color:"rgba(255,255,255,0.25)",marginTop:5},children:"Tap red button to end call"})]})]})}function Jg(){const[e,t]=x.useState(!1);return x.useEffect(()=>{setTimeout(()=>t(!0),120)},[]),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1,padding:"16px 14px"},children:[r.jsx("div",{style:{width:66,height:66,borderRadius:"50%",background:`linear-gradient(135deg,${z.navy},${z.green})`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12,transform:e?"scale(1)":"scale(0.4)",opacity:e?1:0,transition:"all 0.5s cubic-bezier(0.34,1.56,0.64,1)"},children:r.jsx(at,{size:30,color:"white",fill:"white"})}),r.jsx("div",{style:{fontSize:15,fontWeight:900,color:"#111",fontFamily:"'Sora',sans-serif",marginBottom:4,opacity:e?1:0,transition:"opacity 0.4s 0.25s"},children:"Call Connected!"}),r.jsx("div",{style:{fontSize:9.5,color:"#888",textAlign:"center",lineHeight:1.6,marginBottom:14,maxWidth:180,opacity:e?1:0,transition:"opacity 0.4s 0.35s"},children:"You successfully reached the vehicle owner through ScanForSafe's secure network."}),r.jsx("div",{style:{width:"100%",background:z.softGreen,borderRadius:12,padding:"10px 12px",display:"flex",flexDirection:"column",gap:6,border:`1px solid ${z.borderGreen}`,opacity:e?1:0,transition:"opacity 0.4s 0.45s",marginBottom:12},children:["Your identity was protected throughout","Call was end-to-end encrypted","Owner's info was never exposed","No data stored by ScanForSafe"].map(n=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,fontSize:9,color:z.navy,fontWeight:600},children:[r.jsx(at,{size:10,color:z.green,fill:z.green})," ",n]},n))}),r.jsx("div",{style:{fontSize:9,color:"#aaa",marginBottom:7,opacity:e?1:0,transition:"opacity 0.4s 0.55s"},children:"Rate your experience"}),r.jsx("div",{style:{display:"flex",gap:5,opacity:e?1:0,transition:"opacity 0.4s 0.6s"},children:["⭐","⭐","⭐","⭐","⭐"].map((n,i)=>r.jsx("div",{style:{fontSize:18,cursor:"pointer"},children:n},i))})]})}function eh({onNavigate:e}){const[t,n]=x.useState(!1);return x.useEffect(()=>{setTimeout(()=>n(!0),100)},[]),r.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflowY:"auto",background:"linear-gradient(160deg,#f0fdf4 0%,#fff 60%,#f0f8ff 100%)"},children:[r.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:14,opacity:t?1:0,transition:"opacity 0.4s"},children:r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:5,background:z.softGreen,borderRadius:20,padding:"4px 10px",fontSize:8,fontWeight:800,color:"#166534",border:`1px solid ${z.borderGreen}`,letterSpacing:"0.06em"},children:[r.jsx("div",{style:{width:5,height:5,borderRadius:"50%",background:z.green,animation:"pulse 1.5s infinite"}})," SCANFORSAFE · SECURE"]})}),r.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:16,opacity:t?1:0,transform:t?"scale(1)":"scale(0.7)",transition:"all 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.1s"},children:r.jsx(Qu,{color:z.green,size:68})}),r.jsxs("div",{style:{textAlign:"center",marginTop:14,opacity:t?1:0,transition:"opacity 0.4s 0.3s"},children:[r.jsx("div",{style:{fontSize:15,fontWeight:900,color:z.navy,fontFamily:"'Sora',sans-serif",letterSpacing:"-0.4px"},children:"Scan Successful!"}),r.jsx("div",{style:{fontSize:9,color:"#888",marginTop:3},children:"QR code verified & authenticated"})]}),r.jsxs("div",{style:{margin:"10px 12px 0",background:"white",borderRadius:12,padding:"10px 12px",border:`1.5px solid ${z.borderGreen}`,display:"flex",alignItems:"center",gap:9,opacity:t?1:0,transition:"opacity 0.4s 0.45s"},children:[r.jsx("div",{style:{width:36,height:36,borderRadius:10,background:z.softGreen,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx(zt,{size:17,color:z.green})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("div",{style:{fontSize:8,color:z.green,fontWeight:700,marginBottom:1,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Two-Wheeler · KA 05 MX 2847"}),r.jsx("div",{style:{fontSize:11,fontWeight:900,color:z.navy,fontFamily:"'Sora',sans-serif"},children:"VEH-4K9P-2X7R"})]}),r.jsx("div",{style:{background:z.green,borderRadius:5,padding:"2px 7px",fontSize:7,fontWeight:800,color:"white"},children:"✓ LIVE"})]}),r.jsxs("div",{onClick:()=>e(8),style:{margin:"10px 12px 12px",background:`linear-gradient(135deg,${z.navy},${z.green})`,borderRadius:11,padding:"11px",display:"flex",alignItems:"center",justifyContent:"center",gap:6,fontSize:11,fontWeight:800,color:"white",cursor:"pointer",opacity:t?1:0,transition:"opacity 0.4s 0.65s",fontFamily:"'Sora',sans-serif"},children:["View Vehicle Details ",r.jsx(Fo,{size:13})]})]})}function th({onNavigate:e}){const[t,n]=x.useState(`Hi,
I would like to inform you about your vehicle.
It is parked in a no parking area.
Please check.
Thank you!`);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflowY:"auto",background:"#fff"},children:[r.jsxs("div",{style:{background:`linear-gradient(135deg,${z.navy},#1a3a6e)`,margin:"8px 10px 0",borderRadius:12,padding:"10px 12px",display:"flex",alignItems:"center",gap:9},children:[r.jsx("div",{style:{width:36,height:36,borderRadius:10,background:z.softGreen,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx(ng,{size:17,color:z.green})}),r.jsx("div",{style:{fontSize:11,fontWeight:900,color:"white",fontFamily:"'Sora',sans-serif"},children:"Send a message to the vehicle owner."})]}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5,margin:"8px 10px 0"},children:["Owner details are hidden","Your number will be visible to the owner","No app or login required"].map((i,s)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,padding:"6px 10px",background:s===1?"#fff8e1":z.softGreen,borderRadius:8,border:`1px solid ${s===1?"#facc75":z.borderGreen}`},children:[r.jsx(at,{size:11,color:s===1?"#d97706":z.green,fill:s===1?"#d97706":z.green}),r.jsx("span",{style:{fontSize:9,color:"#333",fontWeight:600},children:i})]},s))}),r.jsxs("div",{style:{margin:"8px 10px 0",padding:"8px 10px",background:"#f8f9fa",borderRadius:9,border:"1px solid #eee"},children:[r.jsx("div",{style:{fontSize:8,color:"#aaa",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:2},children:"To"}),r.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#333"},children:"Vehicle Owner"})]}),r.jsxs("div",{style:{margin:"6px 10px 0",flex:1,position:"relative"},children:[r.jsx("textarea",{value:t,onChange:i=>n(i.target.value),maxLength:160,style:{width:"100%",minHeight:88,padding:"8px 10px",fontSize:9.5,color:"#333",lineHeight:1.6,borderRadius:9,border:"1.5px solid #ddd",resize:"none",outline:"none",background:"#fafafa",boxSizing:"border-box"}}),r.jsxs("div",{style:{position:"absolute",bottom:6,right:8,fontSize:7.5,color:"#bbb"},children:[t.length,"/160"]})]}),r.jsxs("div",{onClick:()=>e(9),style:{margin:"8px 10px 4px",background:z.green,borderRadius:11,padding:"12px",display:"flex",alignItems:"center",justifyContent:"center",gap:7,fontSize:12,fontWeight:800,color:"white",cursor:"pointer",fontFamily:"'Sora',sans-serif"},children:[r.jsx(is,{size:14})," Send Message"]}),r.jsxs("div",{style:{margin:"0 10px 10px",textAlign:"center",fontSize:8,color:"#bbb",lineHeight:1.5},children:["Your phone number will be visible to the owner.",r.jsx("br",{}),"Standard SMS charges may apply."]})]})}function rh({onNavigate:e}){const[t,n]=x.useState(!1);return x.useEffect(()=>{setTimeout(()=>n(!0),120);const i=setTimeout(()=>e(10),4e3);return()=>clearTimeout(i)},[]),r.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,background:"linear-gradient(160deg,#0B2545 0%,#0d3b2e 100%)",alignItems:"center",justifyContent:"center",padding:"20px 16px"},children:[r.jsx("div",{style:{width:72,height:72,borderRadius:"50%",background:z.green,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14,transform:t?"scale(1)":"scale(0.3)",opacity:t?1:0,transition:"all 0.55s cubic-bezier(0.34,1.56,0.64,1)"},children:r.jsx(at,{size:36,color:"white",fill:"white"})}),r.jsx("div",{style:{fontSize:17,fontWeight:900,color:"white",textAlign:"center",marginBottom:6,opacity:t?1:0,transition:"opacity 0.4s 0.25s",fontFamily:"'Sora',sans-serif"},children:"Message Sent Successfully!"}),r.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.65)",textAlign:"center",lineHeight:1.65,marginBottom:20,maxWidth:200,opacity:t?1:0,transition:"opacity 0.4s 0.35s"},children:"Your message has been delivered to the vehicle owner."}),r.jsx("div",{style:{background:"rgba(255,255,255,0.08)",borderRadius:12,padding:"12px 14px",width:"100%",border:"1px solid rgba(255,255,255,0.12)",opacity:t?1:0,transition:"opacity 0.4s 0.45s",marginBottom:16},children:[["Status","✅ Delivered"],["Method","Direct SMS"],["Your Number","Visible to owner"],["Owner Details","Kept hidden"]].map(([i,s])=>r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:5},children:[r.jsx("span",{style:{fontSize:9,color:"rgba(255,255,255,0.5)"},children:i}),r.jsx("span",{style:{fontSize:9,color:"white",fontWeight:700},children:s})]},i))}),r.jsx("div",{onClick:()=>e(10),style:{background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"10px 20px",fontSize:10,fontWeight:700,color:"white",cursor:"pointer",fontFamily:"'Sora',sans-serif",opacity:t?1:0,transition:"opacity 0.4s 0.55s"},children:"OK"})]})}function nh(){const[e,t]=x.useState(!1);return x.useEffect(()=>{setTimeout(()=>t(!0),100)},[]),r.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,background:"#f0f0f0",overflow:"hidden"},children:[r.jsxs("div",{style:{background:"#fff",padding:"8px 12px",display:"flex",alignItems:"center",gap:9,borderBottom:"1px solid #eee"},children:[r.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:`linear-gradient(135deg,${z.navy},${z.green})`,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(xt,{size:16,color:"white"})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:11,fontWeight:900,color:"#111",fontFamily:"'Sora',sans-serif"},children:"ScanForSafe"}),r.jsx("div",{style:{fontSize:8,color:"#888"},children:"Secure Message"})]})]}),r.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"10px 10px 4px",display:"flex",flexDirection:"column",gap:8},children:[r.jsx("div",{style:{textAlign:"center",fontSize:8,color:"#aaa",marginBottom:4},children:"Today 10:30 AM"}),r.jsxs("div",{style:{alignSelf:"flex-start",maxWidth:"85%",opacity:e?1:0,transform:e?"translateX(0)":"translateX(-20px)",transition:"all 0.4s ease 0.1s"},children:[r.jsxs("div",{style:{background:"white",borderRadius:"12px 12px 12px 3px",padding:"9px 11px",boxShadow:"0 1px 4px rgba(0,0,0,0.08)"},children:[r.jsx("div",{style:{fontSize:9,color:"#333",lineHeight:1.65,whiteSpace:"pre-line"},children:`You have a new message from a ScanForSafe user regarding your vehicle.

Message:
Hi, I would like to inform you about your vehicle. It is parked in a no parking area. Please check. Thank you!`}),r.jsxs("div",{style:{marginTop:8,padding:"6px 8px",background:z.softGreen,borderRadius:7,border:`1px solid ${z.borderGreen}`},children:[r.jsx("div",{style:{fontSize:8,color:z.green,fontWeight:700},children:"From: +91 98XXX XXXXX"}),r.jsx("div",{style:{fontSize:7.5,color:"#888",marginTop:1},children:"Tap to call"})]})]}),r.jsx("div",{style:{fontSize:7.5,color:"#bbb",marginTop:3,marginLeft:4},children:"Delivered"})]}),r.jsxs("div",{style:{alignSelf:"flex-end",maxWidth:"78%",opacity:e?1:0,transform:e?"translateX(0)":"translateX(20px)",transition:"all 0.4s ease 0.6s"},children:[r.jsx("div",{style:{background:z.green,borderRadius:"12px 12px 3px 12px",padding:"9px 11px"},children:r.jsx("div",{style:{fontSize:9,color:"white",lineHeight:1.65},children:"Thank you for letting me know. I will check and move it."})}),r.jsx("div",{style:{fontSize:7.5,color:"#bbb",marginTop:3,textAlign:"right"},children:"Delivered"})]})]}),r.jsxs("div",{style:{background:"white",padding:"8px 10px",display:"flex",alignItems:"center",gap:7,borderTop:"1px solid #eee"},children:[r.jsx("div",{style:{flex:1,background:"#f5f5f5",borderRadius:20,padding:"7px 12px",fontSize:9,color:"#bbb"},children:"Reply to respond to the user"}),r.jsx("div",{style:{width:30,height:30,borderRadius:"50%",background:z.green,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(is,{size:13,color:"white"})})]})]})}function ih({targetHeight:e}){const[t,n]=x.useState(1),[i,s]=x.useState(null),[a,o]=x.useState(1),[d,l]=x.useState("call"),c=[2800,3e3,4200,4e3,5200,3200,2800,5e3,3500,4e3],f=p=>{p!==t&&(o(p>t?1:-1),s(t),n(p),l(p<=6?"call":"msg"))};x.useEffect(()=>{const p=setTimeout(()=>s(null),500);return()=>clearTimeout(p)},[t]),x.useEffect(()=>{const p=c[t-1]??3500,m=setTimeout(()=>{let k=t<6?t+1:t===6?7:t<10?t+1:1;o(1),s(t),n(k),l(k<=6?"call":"msg")},p);return()=>clearTimeout(m)},[t]);const u=p=>{const m=p===t,k=p===i;let j="100%";return m?j="0%":k?j=a>0?"-100%":"100%":p<t&&(j="-100%"),{position:"absolute",inset:0,transform:`translateX(${j})`,opacity:m?1:0,transition:"transform 0.45s cubic-bezier(.77,0,.18,1), opacity 0.35s ease",pointerEvents:m?"auto":"none",display:"flex",flexDirection:"column",background:"white",overflow:"hidden"}},h=Yg[t-1],b=[3,4,5,9],v=e||520,w=Math.min(260,Math.max(200,Math.round(v*.47))),y=Math.round(w*.163),g=y-6;return r.jsxs("div",{style:{position:"relative",width:w,flexShrink:0},children:[r.jsxs("div",{style:{position:"absolute",top:-28,left:"50%",transform:"translateX(-50%)",display:"flex",gap:8,whiteSpace:"nowrap"},children:[r.jsx("div",{style:{fontSize:9,fontWeight:800,color:d==="call"?z.green:"#bbb",fontFamily:"'Sora',sans-serif",transition:"color 0.3s",letterSpacing:"0.06em",textTransform:"uppercase"},children:"📞 Call Flow"}),r.jsx("div",{style:{fontSize:9,color:"#ccc"},children:"·"}),r.jsx("div",{style:{fontSize:9,fontWeight:800,color:d==="msg"?z.green:"#bbb",fontFamily:"'Sora',sans-serif",transition:"color 0.3s",letterSpacing:"0.06em",textTransform:"uppercase"},children:"💬 Message Flow"})]}),r.jsxs("div",{style:{width:w,height:v,borderRadius:y,background:"linear-gradient(160deg,#5a5a5a 0%,#3a3a3a 30%,#2a2a2a 60%,#1e1e1e 100%)",boxShadow:"inset 0 0 0 1px #666,inset 2px 4px 0 0 #555,inset -1px -2px 0 0 #111,0 24px 64px rgba(0,0,0,0.55)",position:"relative"},children:[r.jsx("div",{style:{position:"absolute",inset:0,borderRadius:y,background:"linear-gradient(135deg,rgba(255,255,255,0.18) 0%,transparent 40%)",pointerEvents:"none"}}),[{l:!0,t:96,h:28},{l:!0,t:133,h:28},{l:!0,t:70,h:17}].map((p,m)=>r.jsx("div",{style:{position:"absolute",[p.l?"left":"right"]:-3,top:p.t,width:3,height:p.h,background:"linear-gradient(180deg,#555,#3a3a3a)",borderRadius:p.l?"2px 0 0 2px":"0 2px 2px 0"}},m)),r.jsx("div",{style:{position:"absolute",right:-3,top:110,width:3,height:56,background:"linear-gradient(180deg,#555,#3a3a3a)",borderRadius:"0 2px 2px 0"}}),r.jsx("div",{style:{position:"absolute",inset:5,borderRadius:y-2,background:"#0a0a0a",overflow:"hidden"},children:r.jsxs("div",{style:{position:"absolute",inset:2.5,borderRadius:g,background:"white",overflow:"hidden",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{position:"absolute",top:6,left:"50%",transform:"translateX(-50%)",width:72,height:20,background:"#0a0a0a",borderRadius:14,zIndex:30}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 14px 0",fontSize:9,fontWeight:700,color:b.includes(t)?"white":"#111",flexShrink:0,zIndex:10,position:"relative",fontFamily:"'Sora',sans-serif"},children:[r.jsx("span",{children:"9:41"}),r.jsx(qg,{light:b.includes(t)})]}),!b.includes(t)&&t!==9&&r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"5px 11px 4px",borderBottom:"1.5px solid #f0f0f0",flexShrink:0,zIndex:10},children:[r.jsx("div",{onClick:()=>t>1&&f(t-1),style:{cursor:t>1?"pointer":"default",opacity:t>1?1:.25,width:24,height:24,borderRadius:7,background:t>1?"#f0f0f0":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(D1,{size:14,color:"#333",strokeWidth:2.5})}),r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#111",letterSpacing:"-0.3px",fontFamily:"'Sora',sans-serif"},children:h.title}),r.jsxs("div",{style:{fontSize:7.5,color:"#999",marginTop:1,display:"flex",alignItems:"center",justifyContent:"center",gap:2},children:[r.jsx(wr,{size:7,color:"#999"})," ",h.sub]})]}),r.jsx("div",{style:{width:24}})]}),!b.includes(t)&&t!==9&&r.jsx("div",{style:{height:2.5,background:"#f0f0f0",margin:"0 9px",flexShrink:0,borderRadius:2},children:r.jsx("div",{style:{height:"100%",background:"linear-gradient(90deg,#0B2545,#2ebd3a)",borderRadius:2,width:h.prog,transition:"width 0.5s ease"}})}),r.jsxs("div",{style:{position:"relative",flex:1,overflow:"hidden"},children:[r.jsx("div",{style:u(1),children:r.jsx(Xg,{onNavigate:f})}),r.jsx("div",{style:u(2),children:r.jsx(Qg,{onNavigate:f,onMsgNavigate:()=>f(7)})}),r.jsx("div",{style:u(3),children:r.jsx(Gg,{onNavigate:f})}),r.jsx("div",{style:u(4),children:r.jsx(Kg,{onNavigate:f})}),r.jsx("div",{style:u(5),children:r.jsx(Zg,{onNavigate:f})}),r.jsx("div",{style:u(6),children:r.jsx(Jg,{})}),r.jsx("div",{style:u(7),children:r.jsx(eh,{onNavigate:f})}),r.jsx("div",{style:u(8),children:r.jsx(th,{onNavigate:f})}),r.jsx("div",{style:u(9),children:r.jsx(rh,{onNavigate:f})}),r.jsx("div",{style:u(10),children:r.jsx(nh,{})})]})]})})]}),r.jsxs("div",{style:{position:"absolute",bottom:-26,left:"50%",transform:"translateX(-50%)",display:"flex",gap:4,alignItems:"center"},children:[[1,2,3,4,5,6].map(p=>r.jsx("div",{onClick:()=>f(p),style:{width:p===t?14:4,height:4,borderRadius:3,background:d==="call"&&p===t?z.green:p===t?"#aaa":"#ddd",cursor:"pointer",transition:"all 0.3s ease"}},p)),r.jsx("div",{style:{width:1,height:8,background:"#ccc",margin:"0 2px"}}),[7,8,9,10].map(p=>r.jsx("div",{onClick:()=>f(p),style:{width:p===t?14:4,height:4,borderRadius:3,background:d==="msg"&&p===t?z.green:p===t?"#aaa":"#ddd",cursor:"pointer",transition:"all 0.3s ease"}},p))]})]})}const fd=[{accent:"#1a56db",accentLight:"#eff6ff",accentBorder:"#bfdbfe",iconBg:"linear-gradient(135deg,#1e40af 0%,#3b82f6 100%)",numberBg:"linear-gradient(135deg,#0B2545 0%,#1a56db 100%)",badgeBg:"#eff6ff",badgeColor:"#1e40af",shadowColor:"rgba(26,86,219,0.18)",pill:"Step 1",highlight:"Login and Register",bullets:["Weatherproof & durable","Multiple size options","QR + NFC enabled"]},{accent:"#0891b2",accentLight:"#ecfeff",accentBorder:"#a5f3fc",iconBg:"linear-gradient(135deg,#0e7490 0%,#22d3ee 100%)",numberBg:"linear-gradient(135deg,#0B2545 0%,#0891b2 100%)",badgeBg:"#ecfeff",badgeColor:"#0e7490",shadowColor:"rgba(8,145,178,0.18)",pill:"Step 2",highlight:"3 Minutes",bullets:["No tech skills needed","Add emergency contacts","Instant activation"]},{accent:"#2ebd3a",accentLight:"#e8f8eb",accentBorder:"#7ded88",iconBg:"linear-gradient(135deg,#0B2545 0%,#2ebd3a 100%)",numberBg:"linear-gradient(135deg,#0B2545 0%,#2ebd3a 100%)",badgeBg:"#e8f8eb",badgeColor:"#166534",shadowColor:"rgba(46,189,58,0.18)",pill:"Step 3",highlight:"24 / 7",bullets:["Instant WhatsApp alert","Works without an app","Location pinned"]}];function sh({icon:e,title:t,description:n,badge:i,badgeIcon:s,themeIndex:a}){const[o,d]=x.useState(!1),[l,c]=x.useState(!1),f=fd[a]||fd[0];return r.jsxs("div",{className:"hiw-step-card",onMouseEnter:()=>d(!0),onMouseLeave:()=>{d(!1),c(!1)},onMouseDown:()=>c(!0),onMouseUp:()=>c(!1),onTouchStart:()=>c(!0),onTouchEnd:()=>c(!1),style:{background:l||o?f.accentLight:"white",borderRadius:22,padding:"0 0 20px",flex:1,minWidth:0,position:"relative",overflow:"hidden",boxShadow:o?`0 20px 56px ${f.shadowColor}`:"0 4px 20px rgba(0,0,0,0.05)",transform:l?"translateY(-2px) scale(0.98)":o?"translateY(-8px) scale(1.02)":"none",transition:"all 0.28s cubic-bezier(0.4,0,0.2,1)",border:o||l?`2px solid ${f.accentBorder}`:"2px solid #f0f4f8",cursor:"pointer",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:6,background:f.iconBg,borderRadius:"20px 20px 0 0",flexShrink:0}}),r.jsx("div",{style:{position:"absolute",top:18,left:16,display:"inline-flex",alignItems:"center",gap:4,background:f.numberBg,borderRadius:20,padding:"3px 10px",fontSize:9,fontWeight:800,color:"white",letterSpacing:"0.04em",textTransform:"uppercase",fontFamily:"'Sora',sans-serif"},children:f.pill}),r.jsx("div",{style:{width:68,height:68,borderRadius:"50%",background:o?f.iconBg:`linear-gradient(135deg,${f.accentLight} 0%,#f8fafc 100%)`,display:"flex",alignItems:"center",justifyContent:"center",margin:"36px auto 0",border:o?"none":`2px solid ${f.accentBorder}`,transition:"all 0.28s ease",flexShrink:0},children:r.jsx(e,{size:28,color:o?"white":f.accent,strokeWidth:1.7})}),r.jsx("div",{style:{textAlign:"center",margin:"10px 0 4px",fontSize:28,fontWeight:900,color:f.accent,fontFamily:"'Sora',sans-serif",lineHeight:1,flexShrink:0},children:f.highlight}),r.jsx("h3",{style:{fontSize:15,fontWeight:800,color:z.navy,textAlign:"center",margin:"0 16px 8px",lineHeight:1.3,fontFamily:"'Sora',sans-serif",flexShrink:0},children:t}),r.jsx("p",{style:{fontSize:12,color:z.textMain,textAlign:"center",lineHeight:1.65,margin:"0 18px 14px",opacity:.72,flex:1,fontFamily:"'DM Sans',sans-serif"},children:n}),r.jsx("div",{style:{margin:"0 14px 14px",background:o?"rgba(255,255,255,0.7)":f.accentLight,borderRadius:12,padding:"10px 12px",display:"flex",flexDirection:"column",gap:6,border:`1px solid ${f.accentBorder}`,flexShrink:0},children:f.bullets.map(u=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,fontSize:11,color:z.navy,fontWeight:500},children:[r.jsx("div",{style:{width:16,height:16,borderRadius:"50%",background:f.iconBg,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx(at,{size:9,color:"white",fill:"white"})}),u]},u))}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:l?"white":f.badgeBg,borderRadius:20,padding:"7px 14px",margin:"0 14px",fontSize:11,fontWeight:700,color:f.badgeColor,border:`1px solid ${f.accentBorder}`,flexShrink:0},children:[r.jsx(s,{size:12,color:f.badgeColor}),i]})]})}const ah=[{id:"families",gradient:"linear-gradient(135deg,#0B2545 0%,#1a3a6e 100%)",labelColor:"rgba(255,255,255,0.65)",valueColor:"#ffffff",borderColor:"rgba(74,222,128,0.35)",glowColor:"rgba(74,222,128,0.2)",label:"Happy families",value:"10,000+",flex:"1 1 170px"},{id:"india",gradient:"linear-gradient(135deg,#FF9933 0%,#e67d22 50%,#138808 100%)",labelColor:"rgba(255,255,255,0.8)",valueColor:"#ffffff",borderColor:"rgba(255,255,255,0.25)",glowColor:"rgba(255,153,51,0.3)",label:"Proudly made in",value:"India",flex:"1 1 130px"},{id:"delivery",gradient:"linear-gradient(135deg,#185fa5 0%,#2563eb 100%)",labelColor:"rgba(255,255,255,0.65)",valueColor:"#ffffff",borderColor:"rgba(147,197,253,0.35)",glowColor:"rgba(37,99,235,0.25)",label:"Delivery across India",value:"3–5 days",flex:"1 1 140px"},{id:"whatsapp",gradient:"linear-gradient(135deg,#128C7E 0%,#25D366 100%)",labelColor:"rgba(255,255,255,0.7)",valueColor:"#ffffff",borderColor:"rgba(255,255,255,0.25)",glowColor:"rgba(37,211,102,0.25)",label:"Instant alerts via",value:"WhatsApp",flex:"1 1 140px"},{id:"security",gradient:"linear-gradient(135deg,#4c1d95 0%,#7c3aed 60%,#a855f7 100%)",labelColor:"rgba(255,255,255,0.65)",valueColor:"#ffffff",borderColor:"rgba(233,213,255,0.3)",glowColor:"rgba(124,58,237,0.25)",label:"Your data security",value:"Bank-grade 256-bit · Zero data selling · GDPR-aligned",isWide:!0,flex:"2 1 300px"}];function oh({card:e}){const[t,n]=x.useState(!1),i=()=>e.id==="families"?r.jsx(Ug,{}):e.id==="india"?r.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(255,255,255,0.3)"},children:r.jsx(Hg,{})}):e.id==="delivery"?r.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(255,255,255,0.25)"},children:r.jsx(_o,{size:20,color:"white"})}):e.id==="whatsapp"?r.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(255,255,255,0.25)"},children:r.jsx(Vg,{size:24})}):e.id==="security"?r.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(255,255,255,0.25)"},children:r.jsx(Qt,{size:20,color:"white"})}):null;return r.jsxs("div",{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),style:{flex:e.flex,minWidth:0,background:e.gradient,borderRadius:18,padding:"14px 16px",display:"flex",flexDirection:e.id==="families"?"column":"row",alignItems:e.id==="families"?"flex-start":"center",gap:e.id==="families"?9:12,border:`1px solid ${e.borderColor}`,boxShadow:t?`0 16px 48px ${e.glowColor}`:`0 4px 20px ${e.glowColor}`,transform:t?"translateY(-4px) scale(1.015)":"none",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",position:"relative",overflow:"hidden",cursor:"default"},children:[r.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(255,255,255,0.12) 0%,transparent 50%)",borderRadius:18,pointerEvents:"none"}}),i(),r.jsxs("div",{style:{position:"relative",zIndex:1},children:[r.jsx("p",{style:{margin:0,fontSize:9.5,fontWeight:500,color:e.labelColor,letterSpacing:"0.02em",lineHeight:1.3},children:e.label}),r.jsx("p",{style:{margin:"3px 0 0",fontSize:e.isWide?10.5:13,fontWeight:e.isWide?700:800,color:e.valueColor,lineHeight:1.35,letterSpacing:e.isWide?"0":"-0.3px",fontFamily:"'Sora',sans-serif"},children:e.value})]})]})}function Gu(){const[e,t]=x.useState(!1),n=x.useRef(null),[i,s]=x.useState(520),[a,o]=x.useState(!1);x.useEffect(()=>{const l=()=>o(window.innerWidth<=960);return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),x.useEffect(()=>{setTimeout(()=>t(!0),80)},[]),x.useEffect(()=>{if(!n.current)return;const l=new ResizeObserver(c=>{for(const f of c)s(Math.max(400,Math.round(f.contentRect.height-130)))});return l.observe(n.current),()=>l.disconnect()},[]);const d=[{icon:ug,title:"Order Your QR Tag",description:"Choose the right protection plan for your need and place your order. We deliver premium weatherproof QR tags to your doorstep within 3–5 business days.",badge:"Delivered across India",badgeIcon:_o,themeIndex:0},{icon:wr,title:"Activate & Personalise",description:"Scan your tag to activate it, then fill in your contact details, emergency info, and any important notes. Takes less than 3 minutes — no tech skills needed.",badge:"Set up in 3 minutes",badgeIcon:$u,themeIndex:1},{icon:ke,title:"Stay Protected 24/7",description:"Attach the tag to your pet, vehicle, or valuables and you're done. Anyone who finds your item scans the code — you get a WhatsApp alert instantly.",badge:"Always-on protection",badgeIcon:Ee,themeIndex:2}];return r.jsxs("div",{style:{background:"linear-gradient(160deg,#f8fafc 0%,#fafcfa 50%,#f8fafc 100%)",fontFamily:"'DM Sans',system-ui,sans-serif"},children:[r.jsx("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"radial-gradient(circle,#7ded88 1px,transparent 1px)",backgroundSize:"28px 28px",opacity:.35}}),r.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:1200,margin:"0 auto",padding:"48px 24px 44px"},children:[r.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:20,opacity:e?1:0,transform:e?"translateY(0)":"translateY(-12px)",transition:"all 0.5s ease"},children:r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"white",borderRadius:40,padding:"6px 16px",fontSize:10,fontWeight:700,color:z.green,letterSpacing:"0.08em",textTransform:"uppercase",boxShadow:"0 2px 10px rgba(0,0,0,0.08)",border:`1px solid ${z.borderGreen}`,fontFamily:"'Sora',sans-serif"},children:[r.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:z.green,boxShadow:"0 0 0 3px rgba(22,101,52,0.2)"}}),"Simple Process"]})}),r.jsxs("div",{className:"hiw-row",style:{display:"flex",alignItems:"stretch",gap:32},children:[r.jsxs("div",{ref:n,className:"hiw-left",style:{flex:"1 1 0",minWidth:0,opacity:e?1:0,transform:e?"translateX(0)":"translateX(-24px)",transition:"all 0.6s ease 0.1s"},children:[r.jsxs("h1",{style:{fontSize:"clamp(26px,4vw,44px)",fontWeight:900,color:z.navy,lineHeight:1.12,marginBottom:10,fontFamily:"'Sora',sans-serif",letterSpacing:"-0.03em"},children:["Register & Activate in",r.jsx("br",{}),r.jsx("span",{style:{background:"linear-gradient(125deg,#0a2e10 0%,#2ebd3a 52%,#4bd557 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"3 Easy Steps"})]}),r.jsxs("p",{style:{fontSize:13.5,color:z.textMain,marginBottom:28,lineHeight:1.7,maxWidth:500,opacity:.7},children:["No complicated setup. No technical knowledge needed.",r.jsx("br",{}),"Just order, activate, and relax."]}),r.jsxs("div",{className:"hiw-steps-container",style:{position:"relative",display:"flex",gap:12,flexWrap:"wrap",alignItems:"stretch"},children:[r.jsx("div",{className:"hiw-steps-line",style:{position:"absolute",top:"30%",left:"calc(33.33% - 8px)",right:"calc(33.33% - 8px)",height:0,borderTop:`2px dashed ${z.borderGreen}`,zIndex:0,pointerEvents:"none"}}),d.map((l,c)=>r.jsx(sh,{...l},c))]})]}),r.jsx("div",{className:"hiw-phone",style:{flex:"0 0 auto",opacity:e?1:0,transition:"opacity 0.6s ease 0.15s",display:"flex",alignItems:"center",justifyContent:"center",paddingTop:130,paddingBottom:0},children:r.jsx(ih,{targetHeight:a?460:i})})]}),r.jsxs("div",{style:{marginTop:48,opacity:e?1:0,transform:e?"translateY(0)":"translateY(20px)",transition:"all 0.7s ease 0.4s"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12},children:[r.jsx("div",{style:{height:2,flex:1,background:"linear-gradient(90deg,transparent,#7ded88 40%,transparent)"}}),r.jsx("span",{style:{fontSize:9,fontWeight:700,color:"#aaa",letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'Sora',sans-serif"},children:"Trusted by thousands"}),r.jsx("div",{style:{height:2,flex:1,background:"linear-gradient(90deg,transparent,#7ded88 40%,transparent)"}})]}),r.jsx("div",{className:"hiw-stat-row",style:{display:"flex",alignItems:"stretch",gap:10,flexWrap:"wrap"},children:ah.map(l=>r.jsx(oh,{card:l},l.id))})]})]}),r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');
        @keyframes rippleOut   { 0%{transform:scale(0.8);opacity:0.6} 100%{transform:scale(1.8);opacity:0} }
        @keyframes pulse       { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(0.85)} }
        @keyframes acceptPulse { 0%,100%{box-shadow:0 6px 20px rgba(46,189,58,0.5)} 50%{box-shadow:0 6px 36px rgba(46,189,58,0.9),0 0 0 8px rgba(46,189,58,0.15)} }
        @keyframes waveBar     { from{transform:scaleY(0.3)} to{transform:scaleY(1)} }
        .hiw-row { flex-direction: row; }
        @media (max-width: 960px) {
          .hiw-row { flex-direction:column!important; align-items:center!important; gap:48px!important; }
          .hiw-left { flex:none!important; width:100%!important; }
          .hiw-phone { flex:none!important; width:100%!important; padding-top:0!important; padding-bottom:52px!important; }
        }
        @media (max-width: 640px) {
          .hiw-left h1 {
            text-align: center !important;
            font-size: 28px !important;
            line-height: 1.2 !important;
          }
          .hiw-left p {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 24px !important;
            font-size: 13.5px !important;
          }
          .hiw-steps-container {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .hiw-steps-line {
            display: none !important;
          }
          .hiw-step-card {
            flex: none !important;
            width: 100% !important;
            min-width: 0 !important;
          }
          .hiw-stat-row {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .hiw-stat-row > div {
            flex: none !important;
            width: 100% !important;
            min-width: 0 !important;
          }
          .hiw-stat-row > div:nth-child(5) {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 540px) {
          .hiw-row { gap:32px!important; }
          .hiw-phone { padding-bottom:48px!important; }
        }
      `})]})}function lh(){return r.jsxs("section",{style:{background:"linear-gradient(135deg,#0B2545 0%,#2ebd3a 50%,#081c35 100%)",padding:"60px 0",overflow:"hidden",position:"relative"},children:[r.jsx("div",{style:{position:"absolute",inset:0,opacity:.07,backgroundImage:"radial-gradient(circle, #ffffff 1px, transparent 1px)",backgroundSize:"28px 28px",pointerEvents:"none"}}),r.jsx("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1},children:r.jsxs("div",{className:"nfc-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:50,alignItems:"center"},children:[r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:r.jsxs("div",{style:{position:"relative",width:280,height:280},children:[[1,2,3].map(e=>r.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",border:"1.5px solid rgba(232,248,235,0.3)",animation:`nfcPulse ${1.6+e*.5}s ease-out ${e*.4}s infinite`}},e)),r.jsx("div",{style:{position:"absolute",inset:"50px",background:"linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.08))",backdropFilter:"blur(12px)",borderRadius:"50%",border:"1.5px solid rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 60px rgba(232,248,235,0.2)"},children:r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx(Ut,{size:48,color:"#e8f8eb",strokeWidth:1.5}),r.jsx("div",{style:{color:"#e8f8eb",fontWeight:800,fontSize:14,marginTop:8},children:"NFC Ready"})]})}),[{top:"8%",left:"50%",transform:"translateX(-50%)",label:"Tap to Scan",icon:r.jsx(ud,{size:16,color:"#2ebd3a"})},{top:"50%",left:"-5%",transform:"translateY(-50%)",label:"Instant Alert",icon:r.jsx(Ie,{size:16,color:"#2ebd3a"})},{bottom:"8%",right:"0%",label:"No App Needed",icon:r.jsx(Ee,{size:16,color:"#2ebd3a"})}].map(({transform:e,...t})=>r.jsxs("div",{style:{position:"absolute",...t,transform:e,background:"#e8f8eb",borderRadius:12,padding:"8px 14px",display:"flex",alignItems:"center",gap:8,fontSize:12,fontWeight:700,color:"#2ebd3a",boxShadow:"0 8px 24px rgba(6,78,59,0.3)",whiteSpace:"nowrap"},children:[t.icon,t.label]},t.label))]})}),r.jsxs("div",{children:[r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 18px",borderRadius:100,background:"rgba(232,248,235,0.15)",border:"1px solid rgba(232,248,235,0.3)",marginBottom:20},children:[r.jsx(Ut,{size:14,color:"#e8f8eb"}),r.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#e8f8eb"},children:"🔥 New Feature"})]}),r.jsxs("h2",{style:{fontSize:"clamp(28px,3.5vw,42px)",fontWeight:900,color:"#f8fafc",margin:"0 0 16px",lineHeight:1.1},children:["NFC Integration —",r.jsxs("span",{style:{color:"#7ded88"},children:[" ","Just Tap & Go"]})]}),r.jsx("p",{style:{color:"rgba(232,248,235,0.85)",fontSize:16,lineHeight:1.7,marginBottom:24},children:"Every ScanForSafe tag now includes an NFC chip. No QR scan needed — just tap any NFC phone and the owner's details appear instantly. Faster than ever."}),r.jsx("div",{className:"nfc-features-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:24},children:[{icon:ud,title:"Tap Any Phone",sub:"Works on all modern NFC phones"},{icon:Ee,title:"Instant Access",sub:"Under 0.5 seconds response time"},{icon:ke,title:"No App Needed",sub:"Browser-based — works anywhere"},{icon:wr,title:"Dual Mode",sub:"NFC tap + QR scan both work"}].map(({icon:e,title:t,sub:n})=>r.jsxs("div",{style:{background:"rgba(255,255,255,0.08)",backdropFilter:"blur(8px)",borderRadius:16,padding:"14px 16px",border:"1px solid rgba(255,255,255,0.1)"},children:[r.jsx(e,{size:20,color:"#7ded88",style:{marginBottom:8}}),r.jsx("div",{style:{color:"#f8fafc",fontWeight:700,fontSize:14,marginBottom:4},children:t}),r.jsx("div",{style:{color:"rgba(232,248,235,0.65)",fontSize:12},children:n})]},t))}),r.jsxs("div",{style:{background:"rgba(232,248,235,0.1)",border:"1px solid rgba(232,248,235,0.2)",borderRadius:16,padding:"16px 20px",display:"flex",alignItems:"center",gap:12},children:[r.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"#e8f8eb",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx(Ut,{size:22,color:"#2ebd3a"})}),r.jsxs("div",{children:[r.jsx("div",{style:{color:"#f8fafc",fontWeight:700,fontSize:14},children:"Available on all new tags"}),r.jsx("div",{style:{color:"rgba(232,248,235,0.7)",fontSize:12,marginTop:3},children:"Order a new ScanForSafe tag to get NFC + QR dual protection"})]})]})]})]})}),r.jsx("style",{children:`
        @keyframes nfcPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }

          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .nfc-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 480px) {
          .nfc-features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]})}function dh(){const e=[{icon:Kr,color:"#ef4444",bg:"#fef2f2",title:"Medical Profile",desc:"Blood group, conditions, medications & more"},{icon:gi,color:"#f97316",bg:"#fff7ed",title:"Emergency Alerts",desc:"Instant SMS & WhatsApp alerts to family"},{icon:wr,color:"#2ebd3a",bg:"#f0fdf4",title:"NFC + QR Support",desc:"Works with NFC tap or QR code scan"},{icon:bg,color:"#0891b2",bg:"#ecfeff",title:"Smart Band Support",desc:"Wearable ID band for 24/7 safety"}];return r.jsxs("section",{style:{background:"linear-gradient(180deg,#f8fafc 0%,#e8f8eb 100%)",padding:"48px 0 56px"},children:[r.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#fff",border:"1.5px solid #e8f8eb",marginBottom:14,boxShadow:"0 2px 8px rgba(22,101,52,0.08)"},children:[r.jsx(Kr,{size:14,color:"#2ebd3a",fill:"#2ebd3a"}),r.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#2ebd3a",fontFamily:"'Sora', sans-serif"},children:"Senior Citizen Protection"})]}),r.jsxs("h2",{style:{fontSize:"clamp(26px,4vw,42px)",fontWeight:900,color:"#0B2545",margin:"0 0 12px",fontFamily:"'Sora', sans-serif"},children:["Emergency Protection for",r.jsx("span",{style:{color:"#2ebd3a"},children:" Senior Citizens"})]}),r.jsx("p",{style:{color:"#4b7a62",fontSize:15,maxWidth:520,margin:"0 auto",lineHeight:1.7,fontFamily:"'DM Sans', sans-serif"},children:"One scan gives responders instant access to medical details, blood group, and emergency contacts — no smartphone needed"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center"},className:"senior-grid",children:[r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:r.jsxs("div",{style:{background:"#fff",borderRadius:28,padding:24,maxWidth:360,width:"100%",boxShadow:"0 20px 60px rgba(6,78,59,0.12)",border:"1.5px solid #e8f8eb"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:20,paddingBottom:18,borderBottom:"1px solid #f8fafc"},children:[r.jsx("div",{style:{width:60,height:60,borderRadius:"50%",background:"linear-gradient(135deg,#2ebd3a,#0B2545)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 20px rgba(22,101,52,0.25)",flexShrink:0},children:r.jsx(Oi,{size:28,color:"#e8f8eb"})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:800,fontSize:17,color:"#0B2545"},children:"Ramesh Nair"}),r.jsx("div",{style:{fontSize:13,color:"#6b7280",marginTop:2},children:"Age: 72 • Nellore, AP"}),r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,marginTop:4,background:"#e8f8eb",borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:700,color:"#2ebd3a"},children:[r.jsx(ke,{size:10})," Protected"]})]})]}),r.jsxs("div",{style:{marginBottom:16},children:[r.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:9},children:"Medical Information"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:"Blood Group",value:"B+",icon:r.jsx(V1,{size:13,color:"#ef4444"})},{label:"Condition",value:"Diabetic",icon:r.jsx(Kr,{size:13,color:"#f97316"})},{label:"Allergies",value:"Penicillin",icon:r.jsx(gi,{size:13,color:"#eab308"})},{label:"Doctor",value:"Dr. Reddy",icon:r.jsx(Oi,{size:13,color:"#2ebd3a"})}].map(({label:t,value:n,icon:i})=>r.jsxs("div",{style:{background:"#f9fafb",borderRadius:10,padding:"9px 11px",border:"1px solid #f8fafc"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[i,r.jsx("span",{style:{fontSize:10,color:"#9ca3af",fontWeight:600},children:t})]}),r.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#11355e"},children:n})]},t))})]}),r.jsxs("div",{style:{marginBottom:16},children:[r.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:9},children:"Emergency Contacts"}),[{name:"Suresh Nair (Son)",phone:"+91 98765XXXXX"},{name:"Lakshmi Nair (Daughter)",phone:"+91 87654XXXXX"}].map(t=>r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 11px",background:"#f8fafc",borderRadius:10,marginBottom:6},children:[r.jsx("span",{style:{fontSize:13,fontWeight:600,color:"#11355e"},children:t.name}),r.jsxs("button",{style:{padding:"4px 12px",borderRadius:8,background:"#2ebd3a",color:"#fff",fontSize:11,fontWeight:700,border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[r.jsx($e,{size:11})," Call"]})]},t.name))]}),r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsxs("div",{style:{flex:1,background:"linear-gradient(135deg,#0B2545,#2ebd3a)",borderRadius:12,padding:"11px 0",display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[r.jsx(Ut,{size:14,color:"#e8f8eb"}),r.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#e8f8eb"},children:"NFC Tap"})]}),r.jsxs("div",{style:{flex:1,background:"#f8fafc",borderRadius:12,padding:"11px 0",display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid #e8f8eb"},children:[r.jsx(wr,{size:14,color:"#2ebd3a"}),r.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#2ebd3a"},children:"QR Scan"})]})]})]})}),r.jsx("div",{children:r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[{icon:Kr,color:"#ef4444",bg:"#fef2f2",title:"Medical Profile",desc:"Blood group, conditions, allergies, medications, and doctor details — all accessible with one scan. Critical in emergencies."},{icon:gi,color:"#f97316",bg:"#fff7ed",title:"Emergency Alert System",desc:"Tap or scan triggers an instant notification to all registered family members, with GPS location of the senior."},{icon:Ut,color:"#2ebd3a",bg:"#f8fafc",title:"NFC + QR Dual Support",desc:"Works with both NFC tap and QR code scan. No app required for responders — opens in any browser instantly."},{icon:ke,color:"#2ebd3a",bg:"#e8f8eb",title:"Wristband & Wallet Card",desc:"Available as a waterproof wristband or wallet-size card. Comfortable for daily use by senior citizens."}].map(({icon:t,color:n,bg:i,title:s,desc:a})=>r.jsxs("div",{style:{display:"flex",gap:14,alignItems:"flex-start",background:"#fff",borderRadius:16,padding:"16px 18px",border:"1px solid #e8f8eb",boxShadow:"0 2px 12px rgba(22,101,52,0.07)"},children:[r.jsx("div",{style:{width:42,height:42,borderRadius:12,background:i,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx(t,{size:20,color:n})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:800,fontSize:14,color:"#0B2545",marginBottom:4},children:s}),r.jsx("div",{style:{fontSize:13.5,color:"#4b7a62",lineHeight:1.6},children:a})]})]},s))})})]}),r.jsxs("div",{className:"sc-mobile-layout",children:[r.jsxs("div",{className:"sc-mobile-profile",style:{background:"#fff",borderRadius:20,padding:18,border:"1.5px solid #e8f8eb",boxShadow:"0 8px 24px rgba(6,78,59,0.06)",display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",marginBottom:20},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"Ramesh Nair",style:{width:56,height:56,borderRadius:"50%",objectFit:"cover",border:"2px solid #2ebd3a"}}),r.jsxs("div",{style:{textAlign:"left"},children:[r.jsx("div",{style:{fontWeight:800,fontSize:15,color:"#0B2545",fontFamily:"'Sora', sans-serif"},children:"Ramesh Nair"}),r.jsx("div",{style:{fontSize:11,color:"#6b7280",margin:"2px 0 4px",fontFamily:"'DM Sans', sans-serif"},children:"Age: 72 • Nellore, AP"}),r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,background:"#e8f8eb",borderRadius:6,padding:"2px 8px",fontSize:10,fontWeight:700,color:"#2ebd3a",fontFamily:"'DM Sans', sans-serif"},children:[r.jsx(ke,{size:10})," Protected"]})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",background:"#f9fafb",border:"1.5px solid #e2e8f0",borderRadius:12,padding:"8px 12px",minWidth:72},children:[r.jsx(wr,{size:18,color:"#2ebd3a",style:{marginBottom:4}}),r.jsx("span",{style:{fontSize:9,fontWeight:800,color:"#0B2545",lineHeight:1,fontFamily:"'Sora', sans-serif"},children:"SFSI-1123"}),r.jsx("span",{style:{fontSize:8,color:"#9ca3af",fontWeight:600,marginTop:2,fontFamily:"'DM Sans', sans-serif"},children:"Scan ID"})]})]}),r.jsx("div",{className:"sc-mobile-grid",children:e.map(({icon:t,color:n,bg:i,title:s,desc:a})=>r.jsxs("div",{className:"sc-mobile-card",style:{background:"#ffffff",border:"1.5px solid #e8f8eb",borderRadius:16,padding:"16px 14px",display:"flex",flexDirection:"column",gap:8,position:"relative",overflow:"hidden",boxShadow:"0 2px 8px rgba(22,101,52,0.03)",textAlign:"left"},children:[r.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:3,background:n,borderRadius:"16px 0 0 16px"}}),r.jsx("div",{style:{width:36,height:36,borderRadius:10,background:i,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 2px 6px ${n}15`},children:r.jsx(t,{size:18,color:n})}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 2px",fontSize:13,fontWeight:800,color:"#0B2545",fontFamily:"'Sora', sans-serif"},children:s}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748b",fontWeight:500,lineHeight:1.3,fontFamily:"'DM Sans', sans-serif"},children:a})]})]},s))}),r.jsxs("button",{type:"button",className:"sc-mobile-btn",children:["View Full Profile",r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]})]}),r.jsx("style",{children:`
        .sc-mobile-layout {
          display: none;
        }

        @media (max-width: 768px) {
          .senior-grid {
            display: none !important;
          }
          .sc-mobile-layout {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .sc-mobile-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
            width: 100%;
            margin-bottom: 24px !important;
          }
          .sc-mobile-card {
            background: #ffffff;
            border: 1.5px solid #e8f8eb;
            border-radius: 16px;
            padding: 16px 14px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            position: relative;
            box-shadow: 0 2px 8px rgba(22,101,52,0.03);
          }
          .sc-mobile-btn {
            display: flex !important;
            width: 100% !important;
            background: #2ebd3a !important;
            color: #ffffff !important;
            font-family: 'DM Sans', sans-serif !important;
            font-size: 14px !important;
            font-weight: 700 !important;
            padding: 14px 20px !important;
            border-radius: 12px !important;
            border: none !important;
            cursor: pointer !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 8px !important;
            box-shadow: 0 4px 14px rgba(46, 189, 58, 0.25) !important;
            transition: all 0.2s ease !important;
            text-decoration: none !important;
          }
          .sc-mobile-btn:hover {
            background: #27a231 !important;
            box-shadow: 0 6px 18px rgba(46, 189, 58, 0.35) !important;
          }
        }
      `})]})}function ch(e=.15){const t=x.useRef(null),[n,i]=x.useState(!1);return x.useEffect(()=>{const s=new IntersectionObserver(([a])=>{a.isIntersecting&&i(!0)},{threshold:e});return t.current&&s.observe(t.current),()=>s.disconnect()},[]),[t,n]}function Vr({children:e,delay:t=0,visible:n,style:i={}}){return r.jsx("div",{style:{opacity:n?1:0,transform:n?"translateY(0)":"translateY(32px)",transition:`opacity 0.6s ease ${t}ms, transform 0.6s cubic-bezier(0.34,1.2,0.64,1) ${t}ms`,...i},children:e})}function uh(){const[e,t]=ch(.1),n=[{icon:Ee,label:"Instant Scan",desc:"Under 2 seconds",color:"#f97316",bg:"#fff7ed"},{icon:Ut,label:"Always Online",desc:"99.9% uptime",color:"#0891b2",bg:"#ecfeff"},{icon:Qt,label:"Encrypted",desc:"Bank-level security",color:"#7c3aed",bg:"#f5f3ff"},{icon:$e,label:"Multi-channel",desc:"App · SMS · WhatsApp",color:"#2ebd3a",bg:"#e8f8eb"},{icon:zt,label:"Vehicle Info",desc:"All details in one scan",color:"#2ebd3a",bg:"#e8f8eb"},{icon:Fa,label:"GPS Tracking",desc:"Real-time location",color:"#0891b2",bg:"#ecfeff"},{icon:Ie,label:"Alert System",desc:"Instant notifications",color:"#f97316",bg:"#fff7ed"},{icon:ke,label:"Security",desc:"Enterprise grade",color:"#7c3aed",bg:"#f5f3ff"}],i=[{icon:Ee,label:"Instant Scan",desc:"Under 2 seconds",color:"#f97316",bg:"#fff7ed"},{icon:Ut,label:"Always Online",desc:"99.9% uptime",color:"#0891b2",bg:"#ecfeff"},{icon:Qt,label:"Encrypted",desc:"Bank-level security",color:"#7c3aed",bg:"#f5f3ff"},{icon:$e,label:"Multi-channel",desc:"App · SMS · WhatsApp",color:"#2ebd3a",bg:"#e8f8eb"}],s=[{icon:zt,title:"Vehicle Info",color:"#2ebd3a",bg:"#e8f8eb",badge:"Essential",badgeColor:"#2ebd3a",badgeBg:"#e8f8eb",items:["Registration Number","Make & Model","Color & Year","Insurance Details"]},{icon:Fa,title:"GPS Tracking",color:"#0891b2",bg:"#ecfeff",badge:"Live",badgeColor:"#0891b2",badgeBg:"#ecfeff",items:["Live scan location","Google Maps link","Scan history log","Last seen timestamp"]},{icon:Ie,title:"Alert System",color:"#f97316",bg:"#fff7ed",badge:"Instant",badgeColor:"#f97316",badgeBg:"#fff7ed",items:["Instant app notification","WhatsApp for emergencies","SMS fallback alert","5 emergency contacts"]},{icon:ke,title:"Security",color:"#7c3aed",bg:"#f5f3ff",badge:"Pro",badgeColor:"#7c3aed",badgeBg:"#f5f3ff",items:["Tamper-evident sticker","Privacy controls","Anti-theft mode","QR + NFC dual layer"]}];return r.jsxs("section",{ref:e,style:{background:"#ffffff",padding:"48px 0 56px",overflow:"hidden"},children:[r.jsx("style",{children:`
        @keyframes gradient-x {
          0%,100% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
        }
        @keyframes float-up {
          0%,100% { transform: translateY(0px) }
          50% { transform: translateY(-6px) }
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

        .vd-mobile-grid {
          display: none;
        }
        .vd-mobile-btn {
          display: none;
        }

        @media (max-width: 768px) {
          .vd-desktop-highlights, .vd-desktop-cards {
            display: none !important;
          }
          .vd-mobile-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
            margin-bottom: 24px !important;
          }
          .vd-mobile-btn {
            display: flex !important;
            width: 100% !important;
            background: #2ebd3a !important;
            color: #ffffff !important;
            font-family: 'DM Sans', sans-serif !important;
            font-size: 14px !important;
            font-weight: 700 !important;
            padding: 14px 20px !important;
            border-radius: 12px !important;
            border: none !important;
            cursor: pointer !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 8px !important;
            box-shadow: 0 4px 14px rgba(46, 189, 58, 0.25) !important;
            transition: all 0.2s ease !important;
            text-decoration: none !important;
          }
          .vd-mobile-btn:hover {
            background: #27a231 !important;
            box-shadow: 0 6px 18px rgba(46, 189, 58, 0.35) !important;
          }
        }
      `}),r.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:36},children:[r.jsx(Vr,{visible:t,delay:0,children:r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#e8f8eb",border:"1px solid #c6f0cc",marginBottom:14},children:[r.jsx(zt,{size:14,color:"#2ebd3a"}),r.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#2ebd3a"},children:"Vehicle Protection"})]})}),r.jsx(Vr,{visible:t,delay:120,children:r.jsx("h2",{className:"animated-gradient-text",style:{fontSize:"clamp(28px,4vw,48px)",fontWeight:900,margin:"0 0 12px",lineHeight:1.15},children:"Vehicle Details & Protection"})}),r.jsx(Vr,{visible:t,delay:220,children:r.jsxs("p",{style:{color:"#4b7a62",fontSize:15,maxWidth:500,margin:"0 auto",lineHeight:1.7},children:["Add your vehicle info once. Let the QR sticker do the rest — ",r.jsx("strong",{style:{color:"#0B2545"},children:"24/7 protection"}),", instant alerts, and GPS tracking"]})})]}),r.jsx("div",{className:"vd-desktop-highlights",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:14,marginBottom:28},children:i.map(({icon:a,label:o,desc:d,color:l,bg:c},f)=>r.jsx(Vr,{visible:t,delay:320+f*80,children:r.jsxs("div",{className:"highlight-card",style:{background:c,border:`1.5px solid ${l}33`,borderRadius:18,padding:"16px 18px",display:"flex",alignItems:"center",gap:14,transition:"all .3s cubic-bezier(0.34,1.2,0.64,1)",cursor:"default",boxShadow:`0 2px 12px ${l}14`,position:"relative",overflow:"hidden"},onMouseEnter:u=>{u.currentTarget.style.boxShadow=`0 12px 32px ${l}30`,u.currentTarget.style.borderColor=l},onMouseLeave:u=>{u.currentTarget.style.boxShadow=`0 2px 12px ${l}14`,u.currentTarget.style.borderColor=`${l}33`,u.currentTarget.style.transform=""},children:[r.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:3,background:l,borderRadius:"18px 0 0 18px"}}),r.jsx("div",{style:{width:44,height:44,borderRadius:13,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:`0 4px 12px ${l}22`,border:`1.5px solid ${l}22`},children:r.jsx(a,{size:21,color:l})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:14,fontWeight:800,color:"#0B2545",marginBottom:2},children:o}),r.jsx("div",{style:{fontSize:12,color:"#64748b",fontWeight:500},children:d})]})]})},o))}),r.jsx("div",{className:"vd-desktop-cards",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(265px,1fr))",gap:20},children:s.map(({icon:a,title:o,color:d,bg:l,badge:c,badgeColor:f,badgeBg:u,items:h},b)=>r.jsx(Vr,{visible:t,delay:560+b*100,children:r.jsxs("div",{className:"feature-card",style:{background:"#fafafa",borderRadius:22,padding:"24px 22px 26px",border:"1.5px solid #e5e7eb",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",cursor:"pointer",position:"relative",overflow:"hidden",height:"100%"},onMouseEnter:v=>{v.currentTarget.style.transform="translateY(-8px)",v.currentTarget.style.boxShadow=`0 24px 52px ${d}28`,v.currentTarget.style.borderColor=d,v.currentTarget.style.background="#fff"},onMouseLeave:v=>{v.currentTarget.style.transform="",v.currentTarget.style.boxShadow="",v.currentTarget.style.borderColor="#e5e7eb",v.currentTarget.style.background="#fafafa"},children:[r.jsx("div",{className:"card-top-line",style:{position:"absolute",top:0,left:0,height:3,width:"40%",background:`linear-gradient(90deg,${d},${d}55)`,borderRadius:"22px 22px 0 0",transition:"width 0.4s ease"}}),r.jsx("div",{style:{position:"absolute",bottom:-18,right:-18,width:80,height:80,borderRadius:"50%",background:`${d}10`,border:`2px solid ${d}18`}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},children:[r.jsx("div",{style:{width:52,height:52,borderRadius:15,background:l,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 4px 14px ${d}28`,animation:"float-up 3s ease-in-out infinite"},children:r.jsx(a,{size:25,color:d})}),r.jsx("span",{style:{background:u,color:f,fontSize:10,fontWeight:900,letterSpacing:".14em",padding:"5px 13px",borderRadius:999,textTransform:"uppercase",border:`1.5px solid ${d}40`,boxShadow:`0 2px 8px ${d}18`},children:c})]}),r.jsx("h3",{style:{margin:"0 0 6px",fontSize:18,fontWeight:900,color:"#0B2545",lineHeight:1.2},children:o}),r.jsx("div",{style:{width:32,height:3,background:`linear-gradient(90deg,${d},${d}44)`,borderRadius:999,marginBottom:14}}),r.jsx("ul",{style:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:9},children:h.map((v,w)=>r.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10,fontSize:13.5,color:"#374151",opacity:t?1:0,transform:t?"translateX(0)":"translateX(-12px)",transition:`opacity 0.5s ease ${700+b*100+w*60}ms, transform 0.5s ease ${700+b*100+w*60}ms`},children:[r.jsx("div",{style:{width:22,height:22,borderRadius:7,background:l,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:`1px solid ${d}33`},children:r.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:d}})}),v]},v))})]})},o))}),r.jsx("div",{className:"vd-mobile-grid",children:n.map(({icon:a,label:o,desc:d,color:l,bg:c})=>r.jsxs("div",{className:"vd-mobile-card",style:{background:"#ffffff",border:"1.5px solid #e5e7eb",borderRadius:16,padding:"16px 14px",display:"flex",flexDirection:"column",gap:8,position:"relative",overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.02)"},children:[r.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:3,background:l,borderRadius:"16px 0 0 16px"}}),r.jsx("div",{style:{width:36,height:36,borderRadius:10,background:c,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 2px 6px ${l}15`},children:r.jsx(a,{size:18,color:l})}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:"0 0 2px",fontSize:13,fontWeight:800,color:"#0B2545",fontFamily:"'Sora', sans-serif"},children:o}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748b",fontWeight:500,lineHeight:1.3,fontFamily:"'DM Sans', sans-serif"},children:d})]})]},o))}),r.jsxs("button",{type:"button",className:"vd-mobile-btn",children:["View Vehicle Details",r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]})]})}function ph(){const e=[{title:"256-bit Encryption",desc:"AES military-grade encryption at rest and in transit",color:"#7c3aed",bg:"#f5f3ff",borderColor:"#ddd6fe",svg:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("rect",{x:"7",y:"12",width:"14",height:"11",rx:"2",stroke:"#7c3aed",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M10 12V9a4 4 0 0 1 8 0v3",stroke:"#7c3aed",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("circle",{cx:"14",cy:"17.5",r:"1.5",fill:"#7c3aed"}),r.jsx("line",{x1:"14",y1:"19",x2:"14",y2:"21",stroke:"#7c3aed",strokeWidth:"1.5",strokeLinecap:"round"})]})},{title:"Emergency-Only Access",desc:"Data surfaced strictly when a genuine emergency is detected",color:"#f97316",bg:"#fff7ed",borderColor:"#fed7aa",svg:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M14 4L5 22h18L14 4z",stroke:"#f97316",strokeWidth:"1.5",strokeLinejoin:"round",fill:"none"}),r.jsx("line",{x1:"14",y1:"12",x2:"14",y2:"17",stroke:"#f97316",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("circle",{cx:"14",cy:"19.5",r:"0.75",fill:"#f97316"})]})},{title:"User Controlled",desc:"You decide exactly which data is visible and to whom",color:"#0891b2",bg:"#ecfeff",borderColor:"#bae6fd",svg:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"14",cy:"10",r:"4",stroke:"#0891b2",strokeWidth:"1.5",fill:"none"}),r.jsx("path",{d:"M6 22c0-4.418 3.582-8 8-8s8 3.582 8 8",stroke:"#0891b2",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),r.jsx("circle",{cx:"20",cy:"10",r:"2",fill:"#0891b2",opacity:"0.35"}),r.jsx("path",{d:"M22 8l1.5-1.5M22 12l1.5 1.5M24 10h2",stroke:"#0891b2",strokeWidth:"1.2",strokeLinecap:"round"})]})},{title:"Zero Data Selling",desc:"Your information is never shared with or sold to third parties",color:"#16a34a",bg:"#e8f8eb",borderColor:"#bbf7d0",svg:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"10",r:"3.5",stroke:"#16a34a",strokeWidth:"1.5"}),r.jsx("path",{d:"M4.5 20c0-3 2.5-5.5 5.5-5.5S15.5 17 15.5 20",stroke:"#16a34a",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M20 12l4 2v3c0 2.2-1.6 4.2-4 5-2.4-.8-4-2.8-4-5v-3l4-2z",stroke:"#16a34a",strokeWidth:"1.5",strokeLinejoin:"round"})]})}],t=["Encrypted storage — data never exposed publicly","Emergency-only access when actually needed","You control what information is visible","No data sold to third parties"];return r.jsxs("section",{style:{width:"100%",background:"linear-gradient(160deg, #ffffff 0%, #ffffff 60%, #ecfdf5 100%)",padding:"40px 24px"},children:[r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

        .ps-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; max-width: 1180px; margin: 0 auto; }
        .ps-card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .ps-card {
          background: #ffffff;
          border: 1.5px solid var(--ps-border-color);
          border-radius: 20px;
          padding: 28px 24px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .ps-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--ps-bg-color) 0%, #ffffff 70%);
          z-index: 0;
        }
          
        .ps-card:hover {
          transform: translateY(-6px);
          border-color: var(--ps-hover-border) !important;
          box-shadow: 0 15px 35px var(--ps-hover-shadow) !important;
        }
        .ps-card > * { position: relative; z-index: 1; }
        .ps-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }
        .ps-check-row {
          display: flex; align-items: flex-start; gap: 14px; margin-bottom: 18px;
        }

        .ps-mobile-para { display: none; }
        .ps-desktop-para { display: block; }
        .ps-mobile-banner { display: none; }

        @media (max-width: 900px) {
          .ps-grid { grid-template-columns: 1fr; gap: 32px; }
          .ps-desktop-para { display: none !important; }
          .ps-mobile-para { display: block !important; margin-bottom: 24px !important; }
          .ps-checklist { display: none !important; }
          .ps-mobile-banner {
            display: flex !important;
            margin-top: 20px;
            background: #f0fdf4;
            border: 1.5px solid #bbf7d0;
            border-radius: 14px;
            padding: 12px 16px;
            align-items: center;
            gap: 12px;
            text-align: left;
            width: 100%;
          }
        }

        @media (max-width: 560px) {
          .ps-card-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .ps-card {
            padding: 16px 12px !important;
            border-radius: 14px !important;
          }
          .ps-icon-wrap {
            width: 40px !important;
            height: 40px !important;
            border-radius: 10px !important;
            margin-bottom: 12px !important;
          }
          .ps-icon-wrap svg {
            width: 20px !important;
            height: 20px !important;
          }
          .ps-card h3 {
            font-size: 13.5px !important;
            margin-bottom: 4px !important;
            font-weight: 800 !important;
          }
          .ps-card p {
            font-size: 10.5px !important;
            line-height: 1.45 !important;
          }
        }
      `}),r.jsxs("div",{className:"ps-grid",children:[r.jsxs("div",{children:[r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,marginBottom:28},children:[r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M8 1.5L2 4v4c0 3.3 2.6 6.4 6 7 3.4-.6 6-3.7 6-7V4L8 1.5z",stroke:"#15803d",strokeWidth:"1.3",fill:"none",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.5 8l2 2 3-3",stroke:"#15803d",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsx("span",{style:{fontFamily:"'Sora', sans-serif",fontSize:11,fontWeight:700,color:"#15803d",letterSpacing:"0.08em",textTransform:"uppercase"},children:"Privacy & Security"})]}),r.jsxs("h2",{style:{fontFamily:"'Sora', sans-serif",fontSize:"clamp(26px, 4.5vw, 36px)",fontWeight:800,lineHeight:1.1,color:"#0B2545",marginBottom:24,letterSpacing:"-0.03em"},children:["Your Data Is Always",r.jsx("br",{}),r.jsx("span",{style:{color:"#16a34a",fontWeight:800},children:"In Your Control"})]}),r.jsx("p",{className:"ps-desktop-para",style:{fontFamily:"'DM Sans', sans-serif",fontSize:16,lineHeight:1.8,color:"#374151",marginBottom:40,maxWidth:460,fontWeight:500},children:"We handle sensitive personal and medical information with the highest level of care. Your family's safety data is protected with enterprise-grade security built for the most demanding environments."}),r.jsx("p",{className:"ps-mobile-para",style:{fontFamily:"'DM Sans', sans-serif",fontSize:14,lineHeight:1.7,color:"#374151",fontWeight:500,maxWidth:460,margin:0},children:"We handle sensitive personal and medical information with the highest level of care."}),r.jsx("div",{className:"ps-checklist",children:t.map((n,i)=>r.jsxs("div",{className:"ps-check-row",children:[r.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{flexShrink:0,marginTop:2},children:[r.jsx("circle",{cx:"11",cy:"11",r:"10.25",stroke:"#16a34a",strokeWidth:"1.5",fill:"#f0fdf4"}),r.jsx("path",{d:"M7 11l3 3 5-5",stroke:"#16a34a",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:15,color:"#1f2937",lineHeight:1.6,fontWeight:500},children:n})]},i))})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx("div",{className:"ps-card-grid",children:e.map((n,i)=>r.jsxs("div",{className:"ps-card",style:{"--ps-border-color":n.borderColor,"--ps-bg-color":n.bg,"--ps-hover-border":n.color,"--ps-hover-shadow":`rgba(${n.color==="#7c3aed"?"124,58,237":n.color==="#f97316"?"249,115,22":n.color==="#0891b2"?"8,145,178":"22,163,74"}, 0.15)`},children:[r.jsx("svg",{width:"60",height:"60",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",top:0,right:0,opacity:.2},children:r.jsx("path",{d:"M60 0 Q60 60 0 60",stroke:n.color,strokeWidth:"1",fill:"none"})}),r.jsx("div",{className:"ps-icon-wrap",style:{background:n.bg},children:n.svg}),r.jsx("h3",{style:{fontFamily:"'Sora', sans-serif",fontSize:17,fontWeight:800,color:"#0B2545",marginBottom:8,lineHeight:1.25},children:n.title}),r.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:500,color:"#374151",lineHeight:1.6,margin:0},children:n.desc}),r.jsx("div",{style:{position:"absolute",bottom:0,left:24,right:24,height:2,background:`linear-gradient(90deg, ${n.color}, transparent)`,borderRadius:1}})]},i))}),r.jsxs("div",{className:"ps-mobile-banner",children:[r.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#dcfce7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M8 1.5L2 4v4c0 3.3 2.6 6.4 6 7 3.4-.6 6-3.7 6-7V4L8 1.5z",stroke:"#16a34a",strokeWidth:"1.5",fill:"none",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.5 8l2 2 3-3",stroke:"#16a34a",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#14532d",fontFamily:"'Sora', sans-serif"},children:"Your privacy, our priority."}),r.jsx("div",{style:{fontSize:11,color:"#166534",fontWeight:500,marginTop:2,fontFamily:"'DM Sans', sans-serif"},children:"Built for trust. Built for life."})]})]})]})]})]})}function fh(){const e=er(),t=[{step:"01",title:"Share Your Link",desc:"Get your unique referral link from your customer dashboard and share it with friends or family.",mobileDesc:"Get your unique referral link and share it with your loved ones.",color:"#0088ff",lightColor:"rgba(0,136,255,0.06)",hoverBg:"rgba(0,136,255,0.12)",bg:"rgba(0,136,255,0.10)",borderColor:"rgba(0,136,255,0.25)",stepColor:"rgba(0,136,255,0.40)",svg:r.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 32 32",fill:"none",children:[r.jsx("path",{d:"M13 19l-3.5 3.5a3.536 3.536 0 0 1-5-5L8 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),r.jsx("path",{d:"M19 13l3.5-3.5a3.536 3.536 0 0 0-5-5L14 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),r.jsx("path",{d:"M13.5 18.5l5-5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})},{step:"02",title:"Friends Activate Tags",desc:"Your friends purchase and activate any ScanForSafe smart decal, key tag, or safety wristband.",mobileDesc:"They purchase and activate any ScanForSafe product.",color:"#9d00ff",lightColor:"rgba(157,0,255,0.06)",hoverBg:"rgba(157,0,255,0.12)",bg:"rgba(157,0,255,0.10)",borderColor:"rgba(157,0,255,0.25)",stepColor:"rgba(157,0,255,0.40)",svg:r.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 32 32",fill:"none",children:[r.jsx("circle",{cx:"12",cy:"11",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none"}),r.jsx("path",{d:"M4 25c0-4.418 3.582-8 8-8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),r.jsx("circle",{cx:"22",cy:"11",r:"4",stroke:"currentColor",strokeWidth:"2",fill:"none",opacity:"0.5"}),r.jsx("path",{d:"M20 25c0-4.418 1.343-7.418 4-8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",opacity:"0.5"}),r.jsx("path",{d:"M25 18v6M22 21h6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})},{step:"03",title:"Earn Protection Cash",desc:"Get ₹250 cash commission or premium subscription extensions credited directly to your wallet.",mobileDesc:"You earn cashback or premium benefits credited directly to your wallet.",color:"#00c853",lightColor:"rgba(0,200,83,0.06)",hoverBg:"rgba(0,200,83,0.12)",bg:"rgba(0,200,83,0.10)",borderColor:"rgba(0,200,83,0.25)",stepColor:"rgba(0,200,83,0.40)",svg:r.jsx("svg",{width:"34",height:"34",viewBox:"0 0 32 32",fill:"none",children:r.jsx("path",{d:"M16 4l2.9 8.9H28l-7.6 5.5 2.9 8.9L16 21.8l-7.3 5.5 2.9-8.9L4 12.9h9.1L16 4z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round",fill:"none"})})}];return r.jsxs("section",{style:{width:"100%",background:"linear-gradient(180deg, #f4f8f4 0%, #eaf3ea 100%)",padding:"52px 0 56px",fontFamily:"'DM Sans', sans-serif",position:"relative",overflowX:"hidden",borderTop:"1px solid rgba(46,189,58,0.08)"},children:[r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

        .ref-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto 36px;
          padding: 0 24px;
        }
        .ref-card {
          background: linear-gradient(145deg, #ffffff 0%, #f9fafb 100%);
          border: 2px solid var(--step-color-border, rgba(46,189,58,0.12));
          border-radius: 22px;
          padding: 32px 24px 36px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 4px 16px rgba(11,37,69,0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .ref-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(150px circle at top right, var(--step-color-light, rgba(46,189,58,0.04)), transparent);
          z-index: 0;
          transition: all 0.3s ease;
        }
        .ref-card:hover {
          border-color: var(--step-color, rgba(46,189,58,0.35));
          transform: translateY(-5px);
          box-shadow: 0 14px 32px rgba(11,37,69,0.08);
        }
        .ref-card:hover::before {
          background: radial-gradient(220px circle at top right, var(--step-color-hover-bg, rgba(46,189,58,0.10)), transparent);
        }
        .ref-card > * { position: relative; z-index: 1; }

        .ref-icon-ring {
          width: 60px; height: 60px;
          border-radius: 50%;
          border: 2px solid rgba(46,189,58,0.22);
          background: rgba(46,189,58,0.07);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .ref-card:hover .ref-icon-ring {
          transform: scale(1.07);
        }

        .ref-step-num {
          position: absolute;
          top: 16px; right: 18px;
          font-family: 'Sora', sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.07em;
        }
        .ref-card-title {
          font-family: 'Sora', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #06160A;
          margin-bottom: 9px;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .ref-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #4b6357;
          line-height: 1.7;
          margin: 0;
        }

        .ref-cta-btn {
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, #1fa82a 0%, #2ebd3a 50%, #0B2545 100%);
          border: none;
          border-radius: 13px;
          padding: 14px 32px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 28px rgba(46,189,58,0.32);
          transition: all 0.32s cubic-bezier(0.34,1.46,0.64,1);
        }
        .ref-cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.16) 0%, transparent 55%);
          pointer-events: none;
        }
        .ref-cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 16px 40px rgba(46,189,58,0.40);
        }

        .ref-heading {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.9rem, 4vw, 2.8rem);
          font-weight: 900;
          line-height: 1.0;
          color: #06160A;
          margin-bottom: 16px;
          letter-spacing: -0.04em;
        }
        .ref-heading .ref-green {
          background: linear-gradient(125deg, #0a2e10 0%, #2ebd3a 52%, #4bd557 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ref-subtext {
          font-family: 'DM Sans', sans-serif;
          font-size: 14.5px;
          font-weight: 400;
          color: #4b6357;
          line-height: 1.75;
          max-width: 600px;
          margin: 0 auto 40px;
        }
        .ref-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          padding: 5px 14px;
          border-radius: 999px;
          border: 1.5px solid rgba(46,189,58,0.24);
          background: rgba(46,189,58,0.07);
          box-shadow: 0 2px 12px rgba(46,189,58,0.10), 0 1px 0 rgba(255,255,255,0.9) inset;
        }
        .ref-badge span {
          font-family: 'Sora', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: #1a4a1e;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .ref-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #2ebd3a;
          animation: refPulse 2s ease-out infinite;
          flex-shrink: 0;
        }
        @keyframes refPulse {
          0%   { box-shadow: 0 0 0 0 rgba(46,189,58,.7); }
          70%  { box-shadow: 0 0 0 7px rgba(46,189,58,0); }
          100% { box-shadow: 0 0 0 0 rgba(46,189,58,0); }
        }
        .ref-helper {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(75,99,87,0.6);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ref-desktop-subtext { display: block; }
        .ref-mobile-subtext { display: none; }
        .ref-desktop-desc { display: block; }
        .ref-mobile-desc { display: none; }

        @media (max-width: 760px) {
          .ref-desktop-subtext { display: none !important; }
          .ref-mobile-subtext { display: block !important; margin: 0 auto 24px !important; max-width: 460px; padding: 0 16px; }
          .ref-desktop-desc { display: none !important; }
          .ref-mobile-desc { display: block !important; }
          .ref-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
            padding: 0 16px !important;
            max-width: 500px !important;
            margin-bottom: 24px !important;
          }
          .ref-card {
            padding: 20px 14px 22px !important;
            border-radius: 18px !important;
          }
          .ref-card:nth-child(3) {
            grid-column: span 2 !important;
            max-width: 100% !important;
          }
          .ref-icon-ring {
            width: 44px !important;
            height: 44px !important;
            margin-bottom: 12px !important;
          }
          .ref-icon-ring svg {
            width: 22px !important;
            height: 22px !important;
          }
          .ref-card-title {
            font-size: 13px !important;
            margin-bottom: 6px !important;
          }
          .ref-card-desc {
            font-size: 10.5px !important;
            line-height: 1.45 !important;
          }
          .ref-step-num {
            top: 10px !important;
            right: 12px !important;
            font-size: 9px !important;
          }
          .ref-cta-btn {
            width: 100% !important;
            justify-content: center !important;
            background: #2ebd3a !important;
            box-shadow: 0 4px 14px rgba(46, 189, 58, 0.25) !important;
            border-radius: 12px !important;
          }
          .ref-cta-btn:hover {
            background: #27a231 !important;
          }
        }
        @media (max-width: 480px) {
          .ref-cta-btn { width: 100%; justify-content: center; }
        }
      `}),r.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 1200 600",preserveAspectRatio:"xMidYMid slice",style:{position:"absolute",inset:0,opacity:.05,pointerEvents:"none"},children:[[0,1,2,3,4,5,6].map(n=>r.jsx("line",{x1:n*200,y1:"0",x2:n*200,y2:"600",stroke:"#2ebd3a",strokeWidth:"1"},`v${n}`)),[0,1,2,3,4].map(n=>r.jsx("line",{x1:"0",y1:n*150,x2:"1200",y2:n*150,stroke:"#2ebd3a",strokeWidth:"1"},`h${n}`))]}),r.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",textAlign:"center",position:"relative",padding:"0 24px"},children:[r.jsxs("div",{className:"ref-badge",children:[r.jsx("div",{className:"ref-badge-dot"}),r.jsx("span",{children:"Referral Program"})]}),r.jsxs("h2",{className:"ref-heading",children:["Invite Friends,"," ",r.jsx("span",{className:"ref-green",children:"Protect Lives"})]}),r.jsx("p",{className:"ref-subtext ref-desktop-subtext",children:"Share your unique ScanForSafe referral link with friends and family. Help them secure their vehicles, bikes, senior citizens, and valuables with smart emergency protection tags, while earning direct commissions credited instantly to your wallet."}),r.jsx("p",{className:"ref-subtext ref-mobile-subtext",children:"Share your unique ScanForSafe referral link with friends and family. Help them secure their vehicles, bikes, senior citizens, and valuables."}),r.jsx("div",{className:"ref-grid",children:t.map((n,i)=>r.jsxs("div",{className:"ref-card",style:{"--step-color":n.color,"--step-color-light":n.lightColor,"--step-color-hover-bg":n.hoverBg,"--step-color-border":n.borderColor},children:[r.jsx("span",{className:"ref-step-num",style:{color:n.stepColor},children:n.step}),r.jsx("div",{className:"ref-icon-ring",style:{color:n.color,backgroundColor:n.bg,borderColor:n.borderColor},children:n.svg}),r.jsx("h3",{className:"ref-card-title",children:n.title}),r.jsx("p",{className:"ref-card-desc ref-desktop-desc",children:n.desc}),r.jsx("p",{className:"ref-card-desc ref-mobile-desc",children:n.mobileDesc}),r.jsx("div",{style:{position:"absolute",bottom:0,left:24,right:24,height:2,background:`linear-gradient(90deg, ${n.color}, transparent)`,borderRadius:1}})]},i))}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:14,maxWidth:460,margin:"0 auto"},children:[r.jsxs("button",{className:"ref-cta-btn",onClick:()=>e("/qr-form"),children:["Get Your Referral Code",r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M5 12h14"}),r.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),r.jsxs("span",{className:"ref-helper",children:[r.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:r.jsx("path",{d:"M6 1L2 3v3c0 2.5 1.8 4.8 4 5.4C8.2 10.8 10 8.5 10 6V3L6 1z",stroke:"rgba(75,99,87,0.55)",strokeWidth:"1.1",strokeLinejoin:"round",fill:"none"})}),"Help your community stay safe and get rewarded."]})]})]})]})}function gh(){return r.jsxs(r.Fragment,{children:[r.jsx(Og,{}),r.jsx($g,{}),r.jsx(Gu,{}),r.jsx(uh,{}),r.jsx(dh,{}),r.jsx(lh,{}),r.jsx(ph,{}),r.jsx(fh,{})]})}const hh=[{icon:$e,label:"Phone",value:"+91 XXXXX XXXXX",href:"tel:+91XXXXXXXXXX",color:"#0057b8",bg:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"#bfdbfe",emoji:"📞",desc:"Mon - Sat, 9am to 7pm"},{icon:Vu,label:"WhatsApp",value:"Chat with us instantly",href:"https://wa.me/91XXXXXXXXXX",color:"#2ebd3a",bg:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"#e8f8eb",emoji:"💬",desc:"Fastest - reply under 10 min"},{icon:Hu,label:"Email",value:"hello@scanforsafe.in",href:"mailto:hello@scanforsafe.in",color:"#7c3aed",bg:"linear-gradient(135deg,#f8fafc,#ede9fe)",border:"#ddd6fe",emoji:"✉️",desc:"Reply within 2 business hours"},{icon:qe,label:"Office",value:"Your City, State - 000000",href:null,color:"#e11d48",bg:"linear-gradient(135deg,#fff1f2,#ffe4e6)",border:"#fecdd3",emoji:"📍",desc:"Headquarters, India"}];function Ws(e=.12){const t=x.useRef(null),[n,i]=x.useState(!1);return x.useEffect(()=>{const s=new IntersectionObserver(([a])=>{a.isIntersecting&&i(!0)},{threshold:e});return t.current&&s.observe(t.current),()=>s.disconnect()},[e]),[t,n]}function xh(e,t=1800,n=!1){const[i,s]=x.useState(0);return x.useEffect(()=>{if(!n)return;let a=null;const o=d=>{a||(a=d);const l=Math.min((d-a)/t,1),c=1-Math.pow(1-l,3);s(Math.floor(c*e)),l<1&&requestAnimationFrame(o)};requestAnimationFrame(o)},[n,e,t]),i}function Jn({num:e,suffix:t,label:n,active:i,delay:s}){const a=xh(e,1600,i);return r.jsxs("div",{style:{textAlign:"center",opacity:i?1:0,transform:i?"translateY(0)":"translateY(20px)",transition:`opacity .6s ease ${s}s, transform .6s ease ${s}s`},children:[r.jsxs("div",{style:{fontFamily:"'Clash Display', 'Cabinet Grotesk', sans-serif",fontSize:28,fontWeight:800,color:"#fff",lineHeight:1,letterSpacing:"-0.04em"},children:[a,t]}),r.jsx("div",{style:{fontSize:11,color:"rgba(186,230,253,0.75)",fontWeight:600,marginTop:4,letterSpacing:".06em",textTransform:"uppercase"},children:n})]})}function mh(){const[e,t]=x.useState({name:"",email:"",phone:"",message:""}),[n,i]=x.useState(!1),[s,a]=x.useState(!1),[o,d]=x.useState(!1),[l,c]=Ws(),[f,u]=Ws(),[h,b]=Ws(.3);x.useEffect(()=>{const y=setTimeout(()=>d(!0),80);return()=>clearTimeout(y)},[]);const v=y=>t({...e,[y.target.name]:y.target.value}),w=y=>{y.preventDefault(),a(!0),setTimeout(()=>{a(!1),i(!0)},1600)};return r.jsxs("div",{style:{fontFamily:"'Instrument Sans', 'Cabin', sans-serif",overflowX:"hidden"},children:[r.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Fira+Code:wght@400;500&display=swap",rel:"stylesheet"}),r.jsx("style",{children:`
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

        .cu-cards-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .cu-stats-counter {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
            justify-items: center;
          }
          .cu-stats-divider {
            display: none !important;
          }
        }

        @media (max-width: 900px) {
          .cu-cards-container {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
            margin-bottom: 16px !important;
          }
        }

        @media (max-width: 580px) {
          .cu-cards-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .cf-info-card {
            padding: 14px 10px 16px !important;
            border-radius: 14px !important;
            gap: 8px !important;
          }
          .cf-info-card > div:first-child {
            width: 36px !important;
            height: 36px !important;
            border-radius: 10px !important;
            font-size: 16px !important;
          }
          .cf-info-card label {
            font-size: 8.5px !important;
            margin-bottom: 2px !important;
          }
          .cf-info-card a, .cf-info-card div {
            font-size: 11.5px !important;
            margin-bottom: 2px !important;
          }
          .cf-info-card div[style*="94a3b8"] {
            font-size: 9.5px !important;
            line-height: 1.3 !important;
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
      `}),r.jsxs("section",{style:{position:"relative",overflow:"hidden",minHeight:520,paddingTop:110,paddingBottom:80,background:"linear-gradient(150deg, #020c1b 0%, #0a1f44 40%, #003d80 80%, #0057b8 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:[r.jsx("div",{style:{position:"absolute",width:560,height:560,borderRadius:"50%",background:"radial-gradient(circle, rgba(46, 189, 58,0.18) 0%, transparent 65%)",top:-180,right:-120,animation:"orbMove1 14s ease-in-out infinite",pointerEvents:"none"}}),r.jsx("div",{style:{position:"absolute",width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle, rgba(0,87,184,0.30) 0%, transparent 65%)",bottom:-160,left:-100,animation:"orbMove2 18s ease-in-out infinite",pointerEvents:"none"}}),r.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",backgroundSize:"32px 32px"}}),r.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:r.jsx("div",{style:{position:"absolute",left:0,right:0,height:3,background:"linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.0) 15%, rgba(74,222,128,0.9) 50%, rgba(74,222,128,0.0) 85%, transparent 100%)",animation:"scanBeam 4s ease-in-out infinite",filter:"blur(1px)"}})}),r.jsx("div",{style:{position:"absolute",top:70,left:"7%",width:64,height:64,border:"2px solid rgba(74,222,128,0.25)",borderRadius:16,transform:"rotate(15deg)",animation:"floatYSlow 6s ease-in-out infinite",pointerEvents:"none"}}),r.jsx("div",{style:{position:"absolute",bottom:80,right:"8%",width:44,height:44,border:"2px solid rgba(99,179,237,0.2)",borderRadius:"50%",animation:"floatY 5s ease-in-out infinite",pointerEvents:"none"}}),r.jsx("div",{style:{position:"absolute",top:120,right:"18%",width:28,height:28,background:"rgba(74,222,128,0.12)",borderRadius:8,transform:"rotate(30deg)",animation:"floatYSlow 7s ease-in-out .5s infinite",pointerEvents:"none"}}),r.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",padding:"0 24px",maxWidth:680},children:[r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:9,background:"rgba(46, 189, 58,0.14)",border:"1.5px solid rgba(74,222,128,0.35)",borderRadius:99,padding:"8px 20px",marginBottom:28,opacity:o?1:0,transform:o?"translateY(0) scale(1)":"translateY(-16px) scale(.9)",transition:"opacity .7s cubic-bezier(.34,1.3,.64,1), transform .7s cubic-bezier(.34,1.3,.64,1)",fontFamily:"'Fira Code', monospace"},children:[r.jsxs("span",{style:{position:"relative",display:"inline-block",width:8,height:8},children:[r.jsx("span",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"#4bd557",animation:"ripple 1.6s ease-out infinite"}}),r.jsx("span",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"#4bd557"}})]}),r.jsx("span",{style:{fontSize:11,fontWeight:500,color:"#7ded88",letterSpacing:".1em"},children:"team.online • avg_reply < 10min"})]}),r.jsxs("h1",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:"clamp(2.4rem, 5.5vw, 4rem)",fontWeight:800,color:"#fff",lineHeight:1.08,letterSpacing:"-0.04em",margin:"0 0 22px",opacity:o?1:0,transform:o?"translateY(0) skewY(0deg)":"translateY(40px) skewY(2deg)",transition:"opacity .75s ease .12s, transform .75s cubic-bezier(.34,1.3,.64,1) .12s"},children:["Talk to a",r.jsx("br",{}),r.jsx("span",{style:{background:"linear-gradient(90deg, #4bd557 0%, #7ded88 50%, #4bd557 100%)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:o?"glowPulse 3s ease-in-out infinite":"none",display:"inline-block"},children:"Real Human"})]}),r.jsx("p",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:16.5,color:"rgba(186,230,253,0.85)",lineHeight:1.75,maxWidth:500,margin:"0 auto 40px",opacity:o?1:0,transform:o?"translateY(0)":"translateY(24px)",transition:"opacity .7s ease .26s, transform .7s ease .26s"},children:"Questions about your QR tag, bulk orders, or just need help with setup? We're right here — real people, real fast replies."}),r.jsxs("div",{ref:h,className:"cu-stats-counter",children:[r.jsx(Jn,{num:10,suffix:" min",label:"WhatsApp reply",active:b,delay:0}),r.jsx("div",{className:"cu-stats-divider"}),r.jsx(Jn,{num:2,suffix:" hrs",label:"Email response",active:b,delay:.15}),r.jsx("div",{className:"cu-stats-divider"}),r.jsx(Jn,{num:1e4,suffix:"+",label:"Happy users",active:b,delay:.3}),r.jsx("div",{className:"cu-stats-divider"}),r.jsx(Jn,{num:24,suffix:"/7",label:"SOS Active",active:b,delay:.45})]})]}),r.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,pointerEvents:"none"},children:r.jsx("svg",{viewBox:"0 0 1440 72",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:r.jsx("path",{d:"M0,48 C240,80 480,16 720,40 C960,64 1200,24 1440,48 L1440,72 L0,72 Z",fill:"#f1f5f9"})})})]}),r.jsx("section",{style:{background:"#f1f5f9",padding:"68px 24px 88px"},children:r.jsx("div",{style:{maxWidth:1100,margin:"0 auto"},children:r.jsxs("div",{className:"cu-layout-grid",children:[r.jsxs("div",{ref:f,children:[r.jsxs("div",{style:{opacity:u?1:0,transform:u?"translateX(0)":"translateX(-24px)",transition:"opacity .55s ease, transform .55s ease",marginBottom:28},children:[r.jsxs("span",{style:{fontFamily:"'Fira Code', monospace",fontSize:10,fontWeight:500,letterSpacing:".18em",textTransform:"uppercase",color:"#0057b8",display:"flex",alignItems:"center",gap:8,marginBottom:10},children:[r.jsx("span",{style:{width:20,height:1.5,background:"#0057b8",display:"inline-block"}}),"contact channels"]}),r.jsxs("h2",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:26,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",margin:"0 0 10px"},children:["Reach Us",r.jsx("br",{}),"Your Way"]}),r.jsx("p",{style:{fontSize:14,color:"#64748b",lineHeight:1.75,fontWeight:400},children:"WhatsApp gets you the fastest reply. For detailed queries, email works great too."})]}),r.jsx("div",{className:"cu-cards-container",children:hh.map(({icon:y,label:g,value:p,href:m,color:k,bg:j,border:N,emoji:M,desc:B},$)=>r.jsxs("div",{className:"cf-info-card",style:{background:j,borderColor:N,opacity:u?1:0,transform:u?"translateX(0)":"translateX(-28px)",transition:`opacity .5s ease ${$*.1+.1}s, transform .5s cubic-bezier(.34,1.3,.64,1) ${$*.1+.1}s, box-shadow .3s ease, transform .3s ease`},children:[r.jsx("div",{style:{width:48,height:48,borderRadius:14,background:"rgba(255,255,255,0.7)",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,boxShadow:"0 2px 8px rgba(0,0,0,0.06)",border:`1.5px solid ${N}`},children:M}),r.jsxs("div",{style:{flex:1},children:[r.jsxs("div",{style:{fontFamily:"'Fira Code', monospace",fontSize:9.5,fontWeight:500,letterSpacing:".14em",textTransform:"uppercase",color:k,marginBottom:3,display:"flex",alignItems:"center",gap:5},children:[r.jsx("span",{style:{width:14,height:1.5,background:k,display:"inline-block"}}),g]}),m?r.jsx("a",{href:m,style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:14,fontWeight:700,color:"#0B2545",textDecoration:"none",display:"block",marginBottom:3,transition:"color .2s"},onMouseEnter:T=>T.target.style.color=k,onMouseLeave:T=>T.target.style.color="#0B2545",children:p}):r.jsx("div",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:14,fontWeight:700,color:"#0B2545",marginBottom:3},children:p}),r.jsx("div",{style:{fontSize:11.5,color:"#94a3b8",fontWeight:400},children:B})]})]},g))}),r.jsxs("div",{style:{marginTop:18,padding:"14px 18px",borderRadius:14,background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"1.5px solid #e8f8eb",display:"flex",alignItems:"center",gap:10,opacity:u?1:0,transform:u?"translateY(0)":"translateY(12px)",transition:"opacity .5s ease .55s, transform .5s ease .55s"},children:[r.jsxs("div",{style:{position:"relative",flexShrink:0},children:[r.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"#2ebd3a"}}),r.jsx("div",{style:{position:"absolute",inset:-3,borderRadius:"50%",border:"1.5px solid rgba(46, 189, 58,0.3)",animation:"ripple 2s ease-out infinite"}})]}),r.jsx("span",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:12.5,fontWeight:600,color:"#0B2545"},children:"We always reply within 2 business hours - guaranteed."})]})]}),r.jsx("div",{ref:l,style:{background:"white",borderRadius:26,padding:"40px 38px",boxShadow:"0 24px 64px rgba(0,40,120,0.10), 0 4px 16px rgba(0,40,120,0.05)",border:"1.5px solid #e8edf3",opacity:c?1:0,transform:c?"translateY(0)":"translateY(36px)",transition:"opacity .65s ease .1s, transform .65s cubic-bezier(.34,1.3,.64,1) .1s"},children:n?r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"44px 0",textAlign:"center"},children:[r.jsx("div",{style:{width:88,height:88,borderRadius:"50%",background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:22,border:"2px solid #e8f8eb",animation:"checkPop .65s cubic-bezier(.34,1.3,.64,1) both",boxShadow:"0 0 0 8px rgba(46, 189, 58,0.08)"},children:r.jsx(at,{style:{width:40,height:40,color:"#2ebd3a"}})}),r.jsx("h3",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:28,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",marginBottom:12},children:"Message Sent! 🎉"}),r.jsx("p",{style:{fontSize:14.5,color:"#64748b",lineHeight:1.8,maxWidth:340},children:"We've got your message and will reply within 2 hours. Check your inbox for a confirmation shortly."}),r.jsxs("div",{style:{marginTop:24,padding:"12px 28px",borderRadius:12,background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"1.5px solid #e8f8eb",fontFamily:"'Instrument Sans', sans-serif",fontSize:13.5,fontWeight:700,color:"#0B2545"},children:["Thanks, ",e.name||"friend","! We'll be in touch 👋"]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{marginBottom:30},children:[r.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:99,padding:"5px 14px",marginBottom:14},children:r.jsx("span",{style:{fontFamily:"'Fira Code', monospace",fontSize:10,fontWeight:500,color:"#0057b8",letterSpacing:".1em"},children:">_ send_message.tsx"})}),r.jsxs("h2",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:25,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",margin:0},children:["We'd Love to Hear",r.jsx("br",{}),"From You"]}),r.jsx("div",{style:{height:3,borderRadius:99,marginTop:10,background:"linear-gradient(90deg, #0057b8, #2ebd3a)",animation:c?"lineGrow .8s cubic-bezier(.34,1.3,.64,1) .4s both":"none"}})]}),r.jsxs("form",{onSubmit:w,style:{display:"flex",flexDirection:"column",gap:18},children:[r.jsxs("div",{className:"cf-fields-row",children:[r.jsxs("div",{className:"cf-field",children:[r.jsx("label",{children:"Full Name *"}),r.jsx("input",{type:"text",name:"name",required:!0,value:e.name,onChange:v,placeholder:"Rahul Sharma",className:"cf-input"})]}),r.jsxs("div",{className:"cf-field",children:[r.jsx("label",{children:"Phone"}),r.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:v,placeholder:"+91 XXXXX XXXXX",className:"cf-input"})]})]}),r.jsxs("div",{className:"cf-field",children:[r.jsx("label",{children:"Email Address *"}),r.jsx("input",{type:"email",name:"email",required:!0,value:e.email,onChange:v,placeholder:"rahul@example.com",className:"cf-input"})]}),r.jsxs("div",{className:"cf-field",children:[r.jsx("label",{children:"Message *"}),r.jsx("textarea",{name:"message",required:!0,rows:5,value:e.message,onChange:v,placeholder:"Tell us how we can help — setup, bulk orders, feedback...",className:"cf-input",style:{resize:"none"}})]}),r.jsx("button",{type:"submit",disabled:s,className:"cf-submit",children:s?r.jsxs(r.Fragment,{children:[r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",style:{animation:"spin 1s linear infinite",flexShrink:0},children:r.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),"Sending your message..."]}):r.jsxs(r.Fragment,{children:[r.jsx(is,{style:{width:16,height:16,flexShrink:0}}),"Send Message"]})}),r.jsx("p",{style:{textAlign:"center",fontFamily:"'Fira Code', monospace",fontSize:10.5,color:"#94a3b8",fontWeight:400,letterSpacing:".04em"},children:"🔒 encrypted • never shared • gdpr safe"})]})]})})]})})})]})}function yh(){return r.jsxs("div",{className:"pt-20 min-h-screen bg-light-bg",children:[r.jsxs("div",{className:"hero-gradient py-16 text-white text-center",children:[r.jsx("h1",{className:"font-display font-extrabold text-4xl mb-4",children:"Privacy Policy"}),r.jsx("p",{className:"text-blue-200",children:"Last updated: January 2025"})]}),r.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:r.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8",children:[{title:"1. Information We Collect",content:"We collect information you provide directly to us when registering your QR tag, such as your name, phone number, email address, emergency contact details, and any additional information you choose to include in your QR profile. We also collect scan data including time, date, and approximate GPS location whenever your QR tag is scanned."},{title:"2. How We Use Your Information",content:"Your personal information is used solely to operate the ScanForSafe service — enabling finders to contact you and sending you real-time notifications. We do not sell, rent, or share your personal data with third parties for marketing purposes."},{title:"3. Data Shared When QR is Scanned",content:"When someone scans your QR code, they see only the information you have chosen to make visible in your profile settings. Your full phone number, email, and private details are protected by default — finders interact through our secure relay system."},{title:"4. Data Security",content:"We use industry-standard encryption (SSL/TLS) to protect your data in transit and at rest. Access to personal data is restricted to authorised team members only, and we conduct regular security audits of our systems."},{title:"5. Data Retention",content:"We retain your personal data for as long as your account is active. You may request deletion of your account and associated data at any time by contacting us at hello@scanforsafe.in. Scan logs are retained for 12 months for your reference."},{title:"6. Your Rights",content:"You have the right to access, correct, or delete your personal information at any time through your account dashboard or by contacting our support team. You may also opt out of non-essential communications at any time."},{title:"7. Contact Us",content:"If you have questions about this Privacy Policy or how we handle your data, please contact us at hello@scanforsafe.in or reach us on WhatsApp."}].map(({title:e,content:t})=>r.jsxs("div",{children:[r.jsx("h2",{className:"font-display font-bold text-lg text-dark-blue mb-2",children:e}),r.jsx("p",{className:"text-slate-600 text-sm leading-relaxed",children:t})]},e))})})]})}function bh(){return r.jsxs("div",{className:"pt-20 min-h-screen bg-light-bg",children:[r.jsxs("div",{className:"hero-gradient py-16 text-white text-center",children:[r.jsx("h1",{className:"font-display font-extrabold text-4xl mb-4",children:"Terms & Conditions"}),r.jsx("p",{className:"text-blue-200",children:"Last updated: January 2025"})]}),r.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:r.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8",children:[{title:"1. Acceptance of Terms",content:"By purchasing and using any ScanForSafe product or service, you agree to these Terms and Conditions. If you do not agree to these terms, please do not use our products or services."},{title:"2. Product Usage",content:"ScanForSafe QR tags are intended for legitimate personal use — protecting your own pets, vehicles, and personal belongings. You must not use our products to track individuals without their knowledge or consent, or for any unlawful purpose."},{title:"3. Account Responsibility",content:"You are responsible for maintaining the accuracy of your profile information and keeping your account credentials secure. You are responsible for all activity that occurs under your account and must notify us immediately of any unauthorised access."},{title:"4. Service Availability",content:"While we strive to maintain 24/7 availability, ScanForSafe does not guarantee uninterrupted service. Planned maintenance, unforeseen technical issues, or force majeure events may temporarily affect service availability."},{title:"5. Refund Policy",content:"We offer a 30-day satisfaction guarantee on all physical QR tag products. If you are unsatisfied with your purchase, contact us within 30 days of delivery for a full refund. Digital activation services are non-refundable once activated."},{title:"6. Limitation of Liability",content:"ScanForSafe provides tools to improve the chances of item recovery and emergency contact. We do not guarantee recovery of any lost item or animal, and shall not be liable for any direct, indirect, or consequential loss arising from use or inability to use our service."},{title:"7. Changes to Terms",content:"We reserve the right to update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms. We will notify registered users of material changes by email."},{title:"8. Contact",content:"For any questions regarding these Terms and Conditions, please contact us at hello@scanforsafe.in."}].map(({title:e,content:t})=>r.jsxs("div",{children:[r.jsx("h2",{className:"font-display font-bold text-lg text-dark-blue mb-2",children:e}),r.jsx("p",{className:"text-slate-600 text-sm leading-relaxed",children:t})]},e))})})]})}function Ku(){return r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"3",stroke:"white",strokeWidth:"1.8"}),r.jsx("circle",{cx:"8.5",cy:"14",r:"1.5",fill:"white"}),r.jsx("circle",{cx:"15.5",cy:"14",r:"1.5",fill:"white"}),r.jsx("path",{d:"M8 18h8",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M12 7V4",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round"}),r.jsx("circle",{cx:"12",cy:"3",r:"1.2",fill:"white"})]})}function vh(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M22 2L11 13",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M22 2L15 22l-4-9-9-4 20-7z",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function wh(){return r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",style:{position:"absolute",top:10,right:10},children:[r.jsx("path",{d:"M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-5.26L3.82 10l6.09-1.74L12 2z",fill:"rgba(255,255,255,0.8)"}),r.jsx("path",{d:"M19 14l.72 2.18L22 17l-2.28.82L19 20l-.72-2.18L16 17l2.28-.82L19 14z",fill:"rgba(255,255,255,0.6)"})]})}function Zu({size:e=18}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M18 6L6 18M6 6l12 12",stroke:"white",strokeWidth:"2.2",strokeLinecap:"round"})})}function jh(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",style:{animation:"spin 1s linear infinite"},children:[r.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"rgba(255,255,255,0.3)",strokeWidth:"2.5"}),r.jsx("path",{d:"M12 2a10 10 0 0110 10",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round"})]})}const gd=[{icon:"📦",label:"How it Works",reply:"ScanForSafe works using smart QR + NFC tags. If someone finds your lost item, they simply scan the tag and you instantly receive alerts and location updates."},{icon:"🔐",label:"Privacy & Security",reply:"Your personal details stay protected. Only emergency or recovery information is shared securely after scanning."},{icon:"📍",label:"Track Lost Items",reply:"Once a QR tag is scanned, you receive live notifications and the finder can contact you instantly through the secure system."},{icon:"💧",label:"Waterproof Tags",reply:"Yes! All ScanForSafe smart tags are waterproof, durable, and built for daily use."},{icon:"📵",label:"No App Needed",reply:"No app installation is required. Users can scan directly using their phone camera."},{icon:"🚀",label:"Get Started",reply:"You can start by registering your smart QR tag and linking your emergency contact information securely."}];function kh({onClose:e}){const[t,n]=x.useState([{role:"assistant",content:`👋 Welcome to ScanForSafe AI Assistant.

Choose any option below or ask your own question.`}]),[i,s]=x.useState(""),[a,o]=x.useState(!1),d=x.useRef(null);x.useEffect(()=>{var c;(c=d.current)==null||c.scrollIntoView({behavior:"smooth"})},[t,a]);async function l(c=null){const f=c||i.trim();if(!(!f||a)){c||s(""),n(u=>[...u,{role:"user",content:f}]),o(!0);try{await new Promise(b=>setTimeout(b,900));const u=gd.find(b=>b.label.toLowerCase()===f.toLowerCase()),h=u?u.reply:"Thanks for your message 🚀 Our ScanForSafe support team will help you regarding QR tags, recovery, NFC setup, and emergency access.";n(b=>[...b,{role:"assistant",content:h}])}catch{n(u=>[...u,{role:"assistant",content:"Something went wrong. Please try again."}])}finally{o(!1)}}}return r.jsxs("div",{style:{position:"fixed",bottom:"100px",right:"24px",zIndex:100,width:"370px",maxHeight:"620px",background:"linear-gradient(145deg,#0d1b2a,#162236)",borderRadius:"28px",overflow:"hidden",display:"flex",flexDirection:"column",border:"1.5px solid rgba(99,179,255,0.18)",boxShadow:"0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04) inset",backdropFilter:"blur(20px)",animation:"chatPopup .4s cubic-bezier(.34,1.56,.64,1)"},children:[r.jsxs("div",{style:{position:"relative",overflow:"hidden",background:"linear-gradient(135deg,#0a1628 0%,#163460 50%,#1a4b8f 100%)",padding:"18px",display:"flex",alignItems:"center",gap:"14px",borderBottom:"1px solid rgba(99,179,255,0.15)"},children:[r.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(99,179,255,0.08),transparent)",animation:"shineMove 4s linear infinite"}}),r.jsx("div",{style:{width:52,height:52,borderRadius:"18px",background:"linear-gradient(135deg,#1d4ed8,#2563eb)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(37,99,235,0.5)",position:"relative",zIndex:2,flexShrink:0},children:r.jsx(Ku,{})}),r.jsxs("div",{style:{flex:1,position:"relative",zIndex:2},children:[r.jsx("div",{style:{fontSize:"16px",fontWeight:800,color:"#fff",fontFamily:"'Syne',sans-serif",letterSpacing:"-0.02em"},children:"ScanForSafe AI"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"4px",color:"rgba(147,197,253,0.85)",fontSize:"12px",fontFamily:"'DM Sans',sans-serif"},children:[r.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:"#4ade80",animation:"pulseDot 1.8s infinite",display:"inline-block"}}),"Online · Powered by AI"]})]}),r.jsx("button",{onClick:e,style:{width:34,height:34,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.12)",background:"rgba(255,255,255,0.07)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative",zIndex:2,transition:"all 0.2s"},children:r.jsx(Zu,{size:18})})]}),r.jsx("div",{style:{padding:"12px 14px",display:"flex",flexWrap:"wrap",gap:"8px",background:"rgba(255,255,255,0.03)",borderBottom:"1px solid rgba(99,179,255,0.1)"},children:gd.map((c,f)=>r.jsxs("button",{onClick:()=>l(c.label),style:{border:"1px solid rgba(99,179,255,0.2)",cursor:"pointer",padding:"8px 13px",borderRadius:"999px",background:"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",gap:"6px",fontSize:"11.5px",fontWeight:600,color:"#93c5fd",fontFamily:"'DM Sans',sans-serif",transition:"all 0.2s",letterSpacing:"0.01em"},children:[r.jsx("span",{children:c.icon}),c.label]},f))}),r.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"16px",display:"flex",flexDirection:"column",gap:"12px",background:"transparent"},children:[t.map((c,f)=>r.jsx("div",{style:{display:"flex",justifyContent:c.role==="user"?"flex-end":"flex-start"},children:r.jsx("div",{style:{maxWidth:"84%",padding:"12px 15px",borderRadius:c.role==="user"?"20px 20px 6px 20px":"20px 20px 20px 6px",background:c.role==="user"?"linear-gradient(135deg,#1d4ed8,#2563eb)":"rgba(255,255,255,0.07)",color:c.role==="user"?"#fff":"#e2e8f0",fontSize:"13px",lineHeight:1.7,fontFamily:"'DM Sans',sans-serif",boxShadow:c.role==="user"?"0 8px 24px rgba(37,99,235,0.3)":"none",border:c.role==="assistant"?"1px solid rgba(99,179,255,0.15)":"none",whiteSpace:"pre-line"},children:c.content})},f)),a&&r.jsx("div",{style:{display:"flex"},children:r.jsx("div",{style:{background:"rgba(255,255,255,0.07)",padding:"12px 14px",borderRadius:"18px",display:"flex",gap:"6px",border:"1px solid rgba(99,179,255,0.15)"},children:[0,1,2].map(c=>r.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#60a5fa",animation:`bounce 1.2s ${c*.2}s infinite`,display:"inline-block"}},c))})}),r.jsx("div",{ref:d})]}),r.jsxs("div",{style:{padding:"13px",borderTop:"1px solid rgba(99,179,255,0.1)",background:"rgba(255,255,255,0.02)",display:"flex",gap:"10px"},children:[r.jsx("input",{value:i,onChange:c=>s(c.target.value),onKeyDown:c=>c.key==="Enter"&&l(),placeholder:"Type your message...",style:{flex:1,borderRadius:"999px",border:"1.5px solid rgba(99,179,255,0.2)",padding:"11px 16px",fontSize:"13px",outline:"none",background:"rgba(255,255,255,0.06)",color:"#e2e8f0",fontFamily:"'DM Sans',sans-serif"}}),r.jsx("button",{onClick:()=>l(),disabled:!i.trim()||a,style:{width:46,height:46,borderRadius:"50%",border:"none",cursor:"pointer",background:i.trim()&&!a?"linear-gradient(135deg,#2563eb,#1d4ed8)":"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:i.trim()&&!a?"0 8px 24px rgba(37,99,235,0.35)":"none",transition:"all 0.2s"},children:a?r.jsx(jh,{}):r.jsx(vh,{})})]})]})}function Sh(){const[e,t]=x.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        @keyframes float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-6px)} }
        @keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulseDot { 0%{box-shadow:0 0 0 0 rgba(74,222,128,.7)} 70%{box-shadow:0 0 0 10px rgba(74,222,128,0)} 100%{box-shadow:0 0 0 0 rgba(74,222,128,0)} }
        @keyframes shineMove { 0%{transform:translateX(-120%)} 100%{transform:translateX(120%)} }
        @keyframes chatPopup { from{opacity:0;transform:scale(.88) translateY(20px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes waPulse { 0%,100%{box-shadow:0 14px 32px rgba(37,211,102,.35)} 50%{box-shadow:0 14px 48px rgba(37,211,102,.6)} }
        @keyframes aiBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      `}),e&&r.jsx(kh,{onClose:()=>t(!1)}),r.jsxs("a",{href:"https://whatsapp.com/channel/0029VbCNFw0JP2105GmsoT0H",target:"_blank",rel:"noreferrer",style:{position:"fixed",bottom:"100px",right:"24px",zIndex:50,width:"64px",height:"64px",borderRadius:"50%",background:"linear-gradient(135deg,#25D366,#128C48)",display:"flex",alignItems:"center",justifyContent:"center",animation:"float 3s ease-in-out infinite",border:"2px solid rgba(255,255,255,0.25)",boxShadow:"0 14px 32px rgba(37,211,102,.4)",overflow:"hidden",textDecoration:"none"},children:[r.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)",animation:"shineMove 4s linear infinite"}}),r.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"relative",zIndex:2},children:[r.jsx("path",{d:"M16 3C8.82 3 3 8.73 3 15.8c0 2.49.73 4.8 1.98 6.76L3 29l6.66-1.91A13.1 13.1 0 0016 28.6c7.18 0 13-5.73 13-12.8C29 8.73 23.18 3 16 3z",fill:"white"}),r.jsx("path",{d:"M22.1 18.9c-.34-.17-2-1-2.32-1.1-.31-.12-.54-.17-.77.17-.23.33-.88 1.1-1.08 1.33-.2.23-.4.25-.74.08-.34-.17-1.43-.52-2.72-1.66-1-.9-1.68-2-1.88-2.34-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.08-.17-.77-1.84-1.05-2.52-.28-.67-.56-.58-.77-.59h-.65c-.23 0-.6.08-.91.43-.31.34-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.42 3.67 5.86 5 .82.35 1.47.56 1.97.72.83.26 1.58.22 2.17.13.66-.1 2-.82 2.28-1.62.28-.8.28-1.48.2-1.62-.08-.14-.31-.22-.65-.39z",fill:"#25D366"})]})]}),r.jsxs("button",{onClick:()=>t(n=>!n),style:{position:"fixed",bottom:"24px",right:"24px",zIndex:50,height:"64px",borderRadius:"999px",border:"none",cursor:"pointer",background:"linear-gradient(135deg,#1d4ed8,#2563eb,#4f46e5)",display:"flex",alignItems:"center",gap:"12px",padding:"0 22px",boxShadow:"0 16px 40px rgba(37,99,235,.45)",animation:"aiBounce 3s ease-in-out infinite",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)",animation:"shineMove 4s linear infinite"}}),r.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:2,flexShrink:0},children:e?r.jsx(Zu,{size:20}):r.jsx(Ku,{})}),r.jsxs("div",{style:{textAlign:"left",color:"#fff",position:"relative",zIndex:2},children:[r.jsx("div",{style:{fontSize:"14px",fontWeight:800,fontFamily:"'Syne',sans-serif",letterSpacing:"-0.02em"},children:"AI Assistant"}),r.jsxs("div",{style:{fontSize:"11px",opacity:.8,fontFamily:"'DM Sans',sans-serif",display:"flex",alignItems:"center",gap:"4px"},children:["Ask anything",r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M5 12h14M12 5l7 7-7 7",stroke:"white",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),r.jsx(wh,{})]})]})}function Ch(){const e=er(),[t,n]=x.useState(!1),i="https://docs.google.com/forms/d/e/1FAIpQLSd9A7Dl1-VyVYOpzuSFH1dy_vWdsYBxjFUqh6h3LpmicZwKRg/viewform",s=`https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${encodeURIComponent(i)}&color=064e3b&bgcolor=ffffff&margin=10`,a=[{num:"5K+",lbl:"Products Scanned"},{num:"98%",lbl:"Detection Accuracy"},{num:"200+",lbl:"Partner Institutes"}];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("div",{className:"qr-page",children:r.jsxs("div",{className:"qr-card",children:[r.jsxs("div",{className:"qr-badge",children:[r.jsx("span",{className:"qr-badge-dot"}),r.jsx("span",{className:"qr-badge-text",children:"Smart Shield · Verified"})]}),r.jsxs("div",{className:"qr-title",children:[r.jsx("span",{children:"Scan"})," & Verify"]}),r.jsxs("div",{className:"qr-subtitle",children:["Scan the QR code below to access the official",r.jsx("br",{}),"safety verification form instantly."]}),r.jsx("div",{className:"qr-frame-wrap",children:r.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:r.jsxs("div",{className:`qr-frame ${t?"hovered":""}`,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[r.jsx("div",{className:"qr-scan-line"}),r.jsx("div",{className:"qr-corner tl"}),r.jsx("div",{className:"qr-corner tr"}),r.jsx("div",{className:"qr-corner bl"}),r.jsx("div",{className:"qr-corner br"}),r.jsx("img",{src:s,alt:"ScanForSafe QR Code",className:"qr-img"})]})})}),r.jsx("div",{className:"qr-divider"}),r.jsx("div",{className:"qr-stats",children:a.map((o,d)=>r.jsxs("div",{className:"qr-stat",children:[r.jsx("div",{className:"qr-stat-num",children:o.num}),r.jsx("div",{className:"qr-stat-lbl",children:o.lbl})]},d))}),r.jsxs("button",{onClick:()=>e("/preregister"),className:"qr-cta",style:{border:"none",cursor:"pointer"},children:["Open Verification Form",r.jsx("span",{className:"qr-cta-arrow",children:"→"})]}),r.jsxs("div",{className:"qr-footer",children:[r.jsx("span",{className:"qr-footer-item",children:"Secure"}),r.jsx("span",{className:"qr-footer-sep"}),r.jsx("span",{className:"qr-footer-item",children:"Instant"}),r.jsx("span",{className:"qr-footer-sep"}),r.jsx("span",{className:"qr-footer-item",children:"No App Required"})]})]})})]})}const C={WhatsApp:({size:e=20,color:t="currentColor"})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:t,children:r.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),Phone:({size:e=20,color:t="currentColor"})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"})}),Users:({size:e=20,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),r.jsx("circle",{cx:"9",cy:"7",r:"4"}),r.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"})]}),MapPin:({size:e=20,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),Zap:({size:e=20,color:t="currentColor"})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),Shield:({size:e=20,color:t="currentColor"})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),Clock:({size:e=20,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("polyline",{points:"12 6 12 12 16 14"})]}),RefreshCw:({size:e=20,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polyline",{points:"23 4 23 10 17 10"}),r.jsx("polyline",{points:"1 20 1 14 7 14"}),r.jsx("path",{d:"M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"})]}),CheckCircle:({size:e=20,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),Send:({size:e=20,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),r.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),QrCode:({size:e=20,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),r.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),r.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),r.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),r.jsx("rect",{x:"5",y:"5",width:"3",height:"3",fill:t}),r.jsx("rect",{x:"16",y:"5",width:"3",height:"3",fill:t}),r.jsx("rect",{x:"16",y:"16",width:"3",height:"3",fill:t}),r.jsx("rect",{x:"5",y:"16",width:"3",height:"3",fill:t})]}),Lock:({size:e=20,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),r.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]}),Bell:({size:e=20,color:t="currentColor"})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"})}),Heart:({size:e=20,color:t="currentColor"})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),Star:({size:e=20,color:t="currentColor"})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:t,stroke:t,strokeWidth:"1",children:r.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),Wifi:({size:e=16,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0"}),r.jsx("line",{x1:"12",y1:"20",x2:"12.01",y2:"20"})]}),Battery:({size:e=16,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2",y:"7",width:"18",height:"11",rx:"2",ry:"2"}),r.jsx("path",{d:"M22 11v4",strokeWidth:"3",strokeLinecap:"round"}),r.jsx("rect",{x:"4",y:"9",width:"12",height:"7",rx:"1",fill:t,opacity:"0.6"})]}),Signal:({size:e=16,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:t,children:[r.jsx("rect",{x:"0",y:"15",width:"4",height:"9",rx:"1"}),r.jsx("rect",{x:"6",y:"10",width:"4",height:"14",rx:"1"}),r.jsx("rect",{x:"12",y:"5",width:"4",height:"19",rx:"1"}),r.jsx("rect",{x:"18",y:"0",width:"4",height:"24",rx:"1",opacity:"0.3"})]}),MicOff:({size:e=16,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"}),r.jsx("path",{d:"M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6"}),r.jsx("path",{d:"M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8"})]}),Volume2:({size:e=16,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),r.jsx("path",{d:"M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"})]}),ArrowRight:({size:e=16,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.jsx("polyline",{points:"12 5 19 12 12 19"})]}),Sparkles:({size:e=20,color:t="currentColor"})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"}),r.jsx("path",{d:"M5 3l.75 2.25L8 6l-2.25.75L5 9l-.75-2.25L2 6l2.25-.75L5 3z"}),r.jsx("path",{d:"M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75L19 15z"})]})},Aa={whatsapp:C.WhatsApp,call:C.Phone,contacts:C.Users,gps:C.MapPin,setup:C.Zap,privacy:C.Shield,history:C.Clock,update:C.RefreshCw},Fs=[{id:"whatsapp",bg:"#dcfce7",accent:"#16a34a",tagBg:"#bbf7d0",tagColor:"#14532d",tag:"Most Loved",title:"Instant WhatsApp Alerts",desc:"The moment your tag is scanned, you get a WhatsApp message with the finder's GPS location, a live Maps link, and a one-tap call button — all within seconds.",pills:["Instant Alert","GPS Included","No App Needed"],stat:"< 3 sec delivery",statColor:"#16a34a"},{id:"call",bg:"#e0e7ff",accent:"#4338ca",tagBg:"#c7d2fe",tagColor:"#1e1b4b",tag:"Zero Friction",title:"One-Touch Call Connect",desc:"Finders call you directly in one tap — no app download, no sign-up required. Works from any basic phone, feature phone, or smartphone worldwide.",pills:["One Tap","No Sign-up","Any Phone"],stat:"Works globally",statColor:"#4338ca"},{id:"contacts",bg:"#ede9fe",accent:"#7c3aed",tagBg:"#ddd6fe",tagColor:"#3b0764",tag:"Family Ready",title:"3 Emergency Contacts",desc:"Add up to 3 trusted contacts — family, friends, or a caretaker. If the first person misses the alert, the system automatically escalates to the next contact.",pills:["3 Contacts","Auto Fallback","5-Min Retry"],stat:"Auto-escalation",statColor:"#7c3aed"},{id:"gps",bg:"#ccfbf1",accent:"#0d9488",tagBg:"#99f6e4",tagColor:"#134e4a",tag:"Smart Tracking",title:"Precision GPS on Every Scan",desc:"Every scan captures the finder's exact GPS coordinates in real time and sends you a live Google Maps link so you can navigate directly to your item.",pills:["Live GPS","Maps Link","Real-Time"],stat:"Sub-10m accuracy",statColor:"#0d9488"},{id:"setup",bg:"#fef3c7",accent:"#d97706",tagBg:"#fde68a",tagColor:"#78350f",tag:"3 Minutes",title:"Instant Activation",desc:"Peel, stick, and you're protected. Register your tag in under 3 minutes with a guided setup wizard — zero technical knowledge, no instructions manual needed.",pills:["Under 3 Min","Guided Setup","Instant Live"],stat:"Live in 3 steps",statColor:"#d97706"},{id:"privacy",bg:"#ffe4e6",accent:"#e11d48",tagBg:"#fecdd3",tagColor:"#881337",tag:"Privacy First",title:"Your Number Stays Hidden",desc:"Your phone number, address, and identity are never stored on the tag. A secure encrypted proxy handles all communication — finders see only what you allow.",pills:["Encrypted","No Personal Data","GDPR Safe"],stat:"Zero data on tag",statColor:"#e11d48"},{id:"history",bg:"#dbeafe",accent:"#2563eb",tagBg:"#bfdbfe",tagColor:"#1e3a8a",tag:"Full Visibility",title:"Scan History & Audit Logs",desc:"Your dashboard logs every scan with precise timestamp, GPS location, and device info. Export a full timeline as CSV or PDF for insurance or records.",pills:["Full Timeline","Device Info","Exportable"],stat:"Unlimited history",statColor:"#2563eb"},{id:"update",bg:"#ffedd5",accent:"#ea580c",tagBg:"#fed7aa",tagColor:"#7c2d12",tag:"Always Current",title:"Update Info in 30 Seconds",desc:"Changed your number? Switched phones? Update your contact details in 30 seconds from any device, anywhere. The physical tag never needs replacing.",pills:["Instant Update","Any Device","Reassignable"],stat:"No new tag ever",statColor:"#ea580c"}];function Bt({children:e,screenBg:t="#0a0a0a",accentColor:n="#16a34a"}){const s=new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",hour12:!1});return r.jsxs("div",{style:{position:"relative",width:272},children:[r.jsxs("div",{style:{width:272,background:"linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 40%, #242424 70%, #1c1c1c 100%)",borderRadius:46,padding:"0",position:"relative",boxShadow:"0 0 0 1px rgba(255,255,255,0.08), 0 0 0 2px #111, 0 2px 0 3px rgba(255,255,255,0.04), 4px 0 0 2px #0d0d0d, -4px 0 0 2px #0d0d0d, 0 32px 64px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.3)"},children:[r.jsxs("div",{style:{margin:"10px 8px",borderRadius:38,overflow:"hidden",position:"relative",background:t,border:"1px solid rgba(255,255,255,0.06)",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.8)"},children:[r.jsxs("div",{style:{background:"rgba(0,0,0,0.85)",backdropFilter:"blur(8px)",padding:"8px 16px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"relative",zIndex:10,flexShrink:0},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r.jsx("div",{style:{width:11,height:11,borderRadius:"50%",background:"#0a0a0a",border:"1.5px solid rgba(255,255,255,0.08)",boxShadow:"inset 0 0 4px rgba(0,0,0,0.9)"}}),r.jsx("span",{style:{color:"rgba(255,255,255,0.85)",fontSize:10,fontWeight:600,letterSpacing:".02em",marginLeft:4},children:s})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[r.jsx(C.Signal,{size:13,color:"rgba(255,255,255,0.8)"}),r.jsx(C.Wifi,{size:13,color:"rgba(255,255,255,0.8)"}),r.jsx(C.Battery,{size:14,color:"rgba(255,255,255,0.8)"})]})]}),r.jsx("div",{style:{height:478,display:"flex",flexDirection:"column",overflow:"hidden",background:t},children:e}),r.jsx("div",{style:{background:"rgba(0,0,0,0.9)",padding:"5px 0 7px",display:"flex",justifyContent:"center",flexShrink:0},children:r.jsx("div",{style:{width:90,height:4,borderRadius:99,background:`linear-gradient(90deg, rgba(255,255,255,0.15), ${n}90, rgba(255,255,255,0.15))`,boxShadow:`0 0 8px ${n}40`}})})]}),r.jsx("div",{style:{position:"absolute",right:-3,top:130,width:4,height:58,background:"linear-gradient(180deg, #3a3a3a, #1a1a1a, #3a3a3a)",borderRadius:"0 4px 4px 0",boxShadow:"2px 0 4px rgba(0,0,0,0.4)"}}),r.jsx("div",{style:{position:"absolute",right:-3,top:88,width:4,height:30,background:"linear-gradient(180deg, #3a3a3a, #1a1a1a, #3a3a3a)",borderRadius:"0 4px 4px 0"}}),r.jsx("div",{style:{position:"absolute",left:-3,top:100,width:4,height:46,background:"linear-gradient(180deg, #3a3a3a, #1a1a1a, #3a3a3a)",borderRadius:"4px 0 0 4px",boxShadow:"-2px 0 4px rgba(0,0,0,0.4)"}}),r.jsx("div",{style:{position:"absolute",left:-3,top:156,width:4,height:46,background:"linear-gradient(180deg, #3a3a3a, #1a1a1a, #3a3a3a)",borderRadius:"4px 0 0 4px"}})]}),r.jsx("div",{style:{position:"absolute",bottom:-12,left:"50%",transform:"translateX(-50%)",width:160,height:20,background:`radial-gradient(ellipse, ${n}35 0%, transparent 70%)`,filter:"blur(6px)",pointerEvents:"none"}})]})}function Pt({running:e,hasData:t,onRun:n,onReset:i,accent:s,label:a}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:10,marginTop:20},children:[r.jsxs("div",{style:{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:[!e&&!t&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{position:"absolute",width:224,height:52,borderRadius:99,border:`2px solid ${s}`,opacity:.3,animation:"ctaPulse 1.8s ease-out infinite"}}),r.jsx("div",{style:{position:"absolute",width:224,height:52,borderRadius:99,border:`2px solid ${s}`,opacity:.15,animation:"ctaPulse 1.8s ease-out 0.5s infinite"}})]}),r.jsx("button",{onClick:n,disabled:e,style:{width:214,padding:"12px 0",background:e?"#e2e8f0":`linear-gradient(135deg, ${s} 0%, ${s}cc 100%)`,color:e?"#94a3b8":"#fff",border:"none",borderRadius:99,fontSize:13,fontWeight:800,letterSpacing:".04em",cursor:e?"not-allowed":"pointer",transition:"all 0.25s",boxShadow:e?"none":`0 8px 24px ${s}45, 0 2px 8px ${s}30`,position:"relative",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:e?r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{display:"inline-block",animation:"spin 1s linear infinite"},children:"⟳"})," Running…"]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{children:"▶"})," ",a]})})]}),t&&!e&&r.jsx("button",{onClick:i,style:{padding:"5px 20px",background:"transparent",color:"#94a3b8",border:"1.5px solid #e2e8f0",borderRadius:99,fontSize:11,fontWeight:700,cursor:"pointer",transition:"all 0.2s"},onMouseEnter:o=>{o.currentTarget.style.borderColor="#cbd5e1",o.currentTarget.style.color="#64748b"},onMouseLeave:o=>{o.currentTarget.style.borderColor="#e2e8f0",o.currentTarget.style.color="#94a3b8"},children:"↺ Reset"})]})}const As=[{id:"scan",delay:0,duration:1e3,label:"QR Scanned",sub:"Someone scanned your tag",color:"#0ea5e9"},{id:"gps",delay:1200,duration:1200,label:"GPS Captured",sub:"Location: 13.0827°N, 80.2707°E",color:"#f59e0b"},{id:"send",delay:2600,duration:1e3,label:"Sending WhatsApp…",sub:"Routing to +91-98XXX-XXXXX",color:"#16a34a"},{id:"deliver",delay:3800,duration:800,label:"Delivered ✓✓",sub:"Message delivered successfully",color:"#16a34a"},{id:"read",delay:4800,duration:600,label:"Read ✓✓",sub:"Owner opened the message",color:"#2563eb"},{id:"call",delay:5600,duration:800,label:"Owner Calling Back",sub:"Direct call connected",color:"#7c3aed"}],rr={header:"🔔 ScanForSafe Alert",lines:['🏷️ Item "Black Laptop Bag" scanned.',"📍 Location: Egmore, Chennai","🗺️ maps.google.com/?q=13.08,80.27","⏰ Time: Just Now","📱 Device: Android · Chrome","","📞 Tap to call the finder →"]},zh={scan:C.QrCode,gps:C.MapPin,send:C.WhatsApp,deliver:C.CheckCircle,read:C.Bell,call:C.Phone};function Nh(){const[e,t]=x.useState(!1),[n,i]=x.useState([]),[s,a]=x.useState(null),[o,d]=x.useState(!1),[l,c]=x.useState([]),f=x.useRef([]),u=()=>{f.current.forEach(clearTimeout),f.current=[],t(!1),i([]),a(null),d(!1),c([])},h=()=>{u(),t(!0),As.forEach((b,v)=>{const w=setTimeout(()=>a(b.id),b.delay),y=setTimeout(()=>{if(i(g=>[...g,b.id]),v===As.length-1){a(null),d(!0),rr.lines.forEach((p,m)=>{const k=setTimeout(()=>c(j=>[...j,rr.lines[m]]),m*260);f.current.push(k)});const g=setTimeout(()=>t(!1),rr.lines.length*260+500);f.current.push(g)}},b.delay+b.duration);f.current.push(w,y)})};return x.useEffect(()=>(h(),()=>u()),[]),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs(Bt,{screenBg:"#1a1a1a",accentColor:"#16a34a",children:[r.jsxs("div",{style:{background:"linear-gradient(180deg,#075E54,#054d45)",padding:"10px 14px 10px",display:"flex",alignItems:"center",gap:10,flexShrink:0},children:[r.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:"linear-gradient(135deg,#25D366,#16a34a)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.3)"},children:r.jsx(C.Bell,{size:16,color:"#fff"})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,fontWeight:800,color:"#fff"},children:"ScanForSafe Bot"}),r.jsxs("div",{style:{fontSize:9,color:e?"#a7f3d0":"#86efac",display:"flex",alignItems:"center",gap:3},children:[r.jsx("div",{style:{width:5,height:5,borderRadius:"50%",background:"#25D366",boxShadow:"0 0 4px #25D366"}}),e?"typing...":"online"]})]})]}),r.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"10px 10px",display:"flex",flexDirection:"column",gap:5,background:"#0f1f1c"},children:[!o&&!e&&n.length===0&&r.jsxs("div",{style:{textAlign:"center",marginTop:60},children:[r.jsx("div",{style:{width:56,height:56,borderRadius:"50%",background:"rgba(37,211,102,0.15)",border:"2px solid rgba(37,211,102,0.3)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 10px"},children:r.jsx(C.WhatsApp,{size:26,color:"#25D366"})}),r.jsx("div",{style:{fontSize:11,color:"#86efac",fontWeight:700},children:'Tap "Simulate Alert" below'}),r.jsx("div",{style:{fontSize:9.5,color:"#4a7c59",marginTop:3},children:"Watch real-time delivery flow"})]}),(e||n.length>0)&&!o&&As.map(b=>{const v=n.includes(b.id),w=s===b.id,y=zh[b.id]||C.CheckCircle;return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 10px",borderRadius:10,background:v?"rgba(37,211,102,0.12)":w?"rgba(255,255,255,0.06)":"rgba(255,255,255,0.02)",border:`1px solid ${v?"rgba(37,211,102,0.3)":w?b.color+"60":"rgba(255,255,255,0.05)"}`,transition:"all 0.3s"},children:[r.jsx("div",{style:{width:24,height:24,borderRadius:"50%",background:v?"#16a34a":w?b.color+"25":"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.3s"},children:v?r.jsx(C.CheckCircle,{size:12,color:"#fff"}):r.jsx(y,{size:12,color:w?b.color:"#4a7c59"})}),r.jsxs("div",{style:{flex:1},children:[r.jsx("div",{style:{fontSize:9.5,fontWeight:700,color:v?"#25D366":w?b.color:"#4a7c59"},children:b.label}),(v||w)&&r.jsx("div",{style:{fontSize:8.5,color:"#4a7c59",marginTop:1},children:b.sub})]}),w&&r.jsx("div",{style:{display:"flex",gap:2},children:[0,1,2].map(g=>r.jsx("div",{style:{width:4,height:4,borderRadius:"50%",background:b.color,animation:`bounce 0.8s ease ${g*.15}s infinite`}},g))})]},b.id)}),o&&r.jsxs("div",{style:{background:"rgba(37,211,102,0.08)",borderRadius:"14px 14px 14px 4px",padding:"10px 12px",maxWidth:"90%",border:"1px solid rgba(37,211,102,0.25)",animation:"fadeUp 0.4s ease"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6},children:[r.jsx(C.Bell,{size:11,color:"#25D366"}),r.jsx("div",{style:{fontSize:10,fontWeight:900,color:"#25D366"},children:rr.header})]}),l.map((b,v)=>r.jsx("div",{style:{fontSize:9.5,color:"#d1fae5",lineHeight:1.7,minHeight:b===""?5:void 0,animation:"fadeUp 0.25s ease"},children:b},v)),l.length===rr.lines.length&&r.jsxs("div",{style:{marginTop:8,background:"linear-gradient(135deg,#25D366,#16a34a)",borderRadius:8,padding:"5px 10px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",gap:6,animation:"fadeUp 0.3s ease"},children:[r.jsx(C.Phone,{size:11,color:"#fff"}),r.jsx("span",{style:{fontSize:9.5,fontWeight:800,color:"#fff"},children:"Call Finder Now"})]}),r.jsxs("div",{style:{textAlign:"right",fontSize:8,color:"#4a7c59",marginTop:4},children:[l.length===rr.lines.length?"✓✓":"✓"," Just now"]})]})]}),r.jsxs("div",{style:{background:"#0a1a16",padding:"7px 10px",display:"flex",alignItems:"center",gap:8,flexShrink:0,borderTop:"1px solid rgba(255,255,255,0.05)"},children:[r.jsx("div",{style:{flex:1,background:"rgba(255,255,255,0.07)",borderRadius:20,padding:"5px 12px",fontSize:9,color:"#4a7c59",border:"1px solid rgba(255,255,255,0.06)"},children:"Type a message"}),r.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(C.Send,{size:12,color:"#fff"})})]})]}),r.jsx(Pt,{running:e,hasData:n.length>0||o,onRun:h,onReset:u,accent:"#16a34a",label:"Simulate Alert"})]})}const Ds=[{id:"scan",delay:0,duration:900,label:"QR Code Scanned",color:"#4338ca",Icon:C.QrCode},{id:"page",delay:1100,duration:800,label:"Finder Page Loaded",color:"#4338ca",Icon:C.Wifi},{id:"tap",delay:2100,duration:600,label:"Finder Taps Call",color:"#4338ca",Icon:C.Phone},{id:"ring",delay:2900,duration:1400,label:"Calling Owner…",color:"#6366f1",Icon:C.Phone},{id:"answer",delay:4500,duration:800,label:"Owner Answers",color:"#16a34a",Icon:C.CheckCircle},{id:"connect",delay:5500,duration:600,label:"Connected!",color:"#16a34a",Icon:C.Heart}];function Rh(){const[e,t]=x.useState(!1),[n,i]=x.useState([]),[s,a]=x.useState(null),[o,d]=x.useState("idle"),[l,c]=x.useState(0),f=x.useRef([]),u=x.useRef(null),h=()=>{f.current.forEach(clearTimeout),clearInterval(u.current),t(!1),i([]),a(null),d("idle"),c(0)},b=()=>{h(),t(!0),d("qr"),Ds.forEach((y,g)=>{const p=setTimeout(()=>{a(y.id),y.id==="ring"&&d("calling"),y.id==="connect"&&(d("connected"),u.current=setInterval(()=>c(k=>k+1),1e3))},y.delay),m=setTimeout(()=>{i(k=>[...k,y.id]),g===Ds.length-1&&(a(null),t(!1))},y.delay+y.duration);f.current.push(p,m)})};x.useEffect(()=>(b(),()=>h()),[]);const v=y=>`${String(Math.floor(y/60)).padStart(2,"0")}:${String(y%60).padStart(2,"0")}`,w=()=>{if(o==="idle")return r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20,background:"#0a0f1e"},children:[r.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"rgba(67,56,202,0.2)",border:"2px solid rgba(99,102,241,0.4)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14,boxShadow:"0 0 20px rgba(99,102,241,0.2)"},children:r.jsx(C.Phone,{size:28,color:"#818cf8"})}),r.jsx("div",{style:{fontSize:13,fontWeight:800,color:"#e0e7ff",textAlign:"center"},children:"One-Touch Call"}),r.jsxs("div",{style:{fontSize:10,color:"#6366f1",textAlign:"center",marginTop:6,lineHeight:1.6},children:["No app. No sign-up.",r.jsx("br",{}),"Works on any phone."]})]});if(o==="qr")return r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:5,padding:"14px 12px",overflowY:"auto",background:"#0a0f1e"},children:Ds.slice(0,3).map(y=>{const g=n.includes(y.id),p=s===y.id;return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"7px 10px",borderRadius:10,background:g?"rgba(99,102,241,0.15)":p?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.02)",border:`1px solid ${g?"rgba(99,102,241,0.4)":p?y.color+"50":"rgba(255,255,255,0.05)"}`,transition:"all 0.3s"},children:[r.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:g?"#4338ca":"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center"},children:g?r.jsx(C.CheckCircle,{size:13,color:"#fff"}):r.jsx(y.Icon,{size:13,color:p?y.color:"#6366f1"})}),r.jsx("div",{style:{fontSize:10,fontWeight:700,color:g?"#818cf8":p?y.color:"#4a4a7a"},children:y.label}),p&&r.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:2},children:[0,1,2].map(m=>r.jsx("div",{style:{width:4,height:4,borderRadius:"50%",background:y.color,animation:`bounce 0.8s ease ${m*.15}s infinite`}},m))})]},y.id)})});if(o==="calling")return r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(160deg,#0a0f1e,#1e1b4b)",padding:20},children:[r.jsxs("div",{style:{position:"relative",marginBottom:20},children:[r.jsx("div",{style:{position:"absolute",inset:-16,borderRadius:"50%",border:"2px solid rgba(99,102,241,0.2)",animation:"pulse 1.5s ease infinite"}}),r.jsx("div",{style:{position:"absolute",inset:-8,borderRadius:"50%",border:"2px solid rgba(99,102,241,0.35)",animation:"pulse 1.5s ease 0.3s infinite"}}),r.jsx("div",{style:{width:70,height:70,borderRadius:"50%",background:"linear-gradient(135deg,rgba(99,102,241,0.3),rgba(67,56,202,0.4))",border:"2px solid #818cf8",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 30px rgba(99,102,241,0.4)"},children:r.jsx(C.Phone,{size:28,color:"#c7d2fe"})})]}),r.jsx("div",{style:{fontSize:13,fontWeight:800,color:"#e0e7ff",marginBottom:4},children:"Calling Owner…"}),r.jsx("div",{style:{fontSize:10,color:"#6366f1",marginBottom:24},children:"+91-98XXX-XXXXX"}),r.jsxs("div",{style:{display:"flex",gap:20},children:[r.jsx("div",{style:{width:46,height:46,borderRadius:"50%",background:"rgba(239,68,68,0.2)",border:"2px solid rgba(239,68,68,0.5)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(C.Phone,{size:18,color:"#ef4444"})}),r.jsx("div",{style:{width:46,height:46,borderRadius:"50%",background:"rgba(34,197,94,0.2)",border:"2px solid rgba(34,197,94,0.5)",display:"flex",alignItems:"center",justifyContent:"center",animation:"pulse 1s ease infinite"},children:r.jsx(C.Phone,{size:18,color:"#22c55e"})})]})]});if(o==="connected")return r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(160deg,#052e16,#14532d)",padding:20},children:[r.jsx("div",{style:{width:70,height:70,borderRadius:"50%",background:"rgba(22,163,74,0.25)",border:"2px solid #4ade80",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12,boxShadow:"0 0 30px rgba(74,222,128,0.3)"},children:r.jsx(C.Heart,{size:30,color:"#4ade80"})}),r.jsx("div",{style:{fontSize:12,fontWeight:800,color:"#dcfce7",marginBottom:2},children:"Connected!"}),r.jsx("div",{style:{fontSize:10,color:"#86efac",marginBottom:10},children:"Owner & Finder on Call"}),r.jsx("div",{style:{fontSize:22,fontWeight:900,color:"#4ade80",fontFamily:"monospace",letterSpacing:3,background:"rgba(0,0,0,0.3)",padding:"6px 16px",borderRadius:10},children:v(l)}),r.jsx("div",{style:{display:"flex",gap:14,marginTop:20},children:[C.MicOff,C.Phone,C.Volume2].map((y,g)=>r.jsx("div",{style:{width:38,height:38,borderRadius:"50%",background:g===1?"rgba(239,68,68,0.3)":"rgba(255,255,255,0.1)",border:`1px solid ${g===1?"rgba(239,68,68,0.5)":"rgba(255,255,255,0.15)"}`,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(y,{size:16,color:g===1?"#ef4444":"rgba(255,255,255,0.7)"})},g))})]})};return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx(Bt,{screenBg:"#0a0f1e",accentColor:"#4338ca",children:w()}),r.jsx(Pt,{running:e,hasData:n.length>0,onRun:b,onReset:h,accent:"#4338ca",label:"Simulate Call"})]})}const hd=[{name:"Priya (Wife)",num:"+91-98400-XXXXX",relation:"Primary",status:"idle"},{name:"Rajan (Brother)",num:"+91-99400-XXXXX",relation:"Fallback 1",status:"idle"},{name:"Dr. Kumar (Vet)",num:"+91-94400-XXXXX",relation:"Fallback 2",status:"idle"}];function Ih(){const[e,t]=x.useState(!1),[n,i]=x.useState(hd.map(u=>({...u}))),[s,a]=x.useState([]),o=x.useRef([]),d=()=>{o.current.forEach(clearTimeout),t(!1),i(hd.map(u=>({...u}))),a([])},l=()=>{d(),t(!0),[{t:400,i:0,status:"sending",msg:"📤 Alerting Priya…"},{t:1400,i:0,status:"missed",msg:"❌ Priya missed — retrying in 5 min"},{t:2200,i:1,status:"sending",msg:"📤 Alerting Rajan…"},{t:3200,i:1,status:"missed",msg:"❌ Rajan missed — next contact"},{t:4e3,i:2,status:"sending",msg:"📤 Alerting Dr. Kumar…"},{t:5100,i:2,status:"answered",msg:"✅ Dr. Kumar responded!"}].forEach(h=>{const b=setTimeout(()=>{i(v=>{const w=[...v];return w[h.i]={...w[h.i],status:h.status},w}),a(v=>[...v,h.msg]),h.status==="answered"&&t(!1)},h.t);o.current.push(b)})};x.useEffect(()=>(l(),()=>d()),[]);const c={idle:{bg:"rgba(255,255,255,0.04)",border:"rgba(255,255,255,0.08)",color:"#4a4a7a",label:"—"},sending:{bg:"rgba(251,191,36,0.12)",border:"rgba(251,191,36,0.35)",color:"#fbbf24",label:"Alerting…"},missed:{bg:"rgba(239,68,68,0.1)",border:"rgba(239,68,68,0.3)",color:"#ef4444",label:"Missed"},answered:{bg:"rgba(34,197,94,0.12)",border:"rgba(34,197,94,0.35)",color:"#22c55e",label:"Responded ✓"}},f=[C.Heart,C.Users,C.Shield];return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs(Bt,{screenBg:"#0d0720",accentColor:"#7c3aed",children:[r.jsx("div",{style:{background:"linear-gradient(180deg,#1a0a40,#0d0720)",padding:"10px 14px",flexShrink:0,borderBottom:"1px solid rgba(124,58,237,0.3)"},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:"rgba(124,58,237,0.3)",border:"1.5px solid rgba(167,139,250,0.4)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(C.Users,{size:16,color:"#a78bfa"})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,fontWeight:800,color:"#e9d5ff"},children:"Emergency Chain"}),r.jsx("div",{style:{fontSize:9,color:"#7c3aed"},children:"Auto-escalates until answered"})]})]})}),r.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"12px 10px",background:"#0d0720",display:"flex",flexDirection:"column",gap:6},children:[r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:0,marginBottom:8},children:n.map((u,h)=>{const b=c[u.status],v=f[h];return r.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:3},children:[r.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:b.bg,border:`2px solid ${b.border}`,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.4s",boxShadow:u.status==="answered"?"0 0 12px rgba(34,197,94,0.5)":u.status==="sending"?"0 0 12px rgba(251,191,36,0.4)":""},children:r.jsx(v,{size:16,color:u.status==="answered"?"#22c55e":u.status==="missed"?"#ef4444":u.status==="sending"?"#fbbf24":"#7c3aed"})}),r.jsx("div",{style:{fontSize:7.5,fontWeight:700,color:"#a78bfa",textAlign:"center",maxWidth:48,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:u.name.split("(")[0].trim()})]}),h<n.length-1&&r.jsx("div",{style:{width:24,height:2,margin:"0 2px",marginBottom:12,background:n[h].status==="missed"?"#ef4444":"rgba(124,58,237,0.3)",borderRadius:2,transition:"background 0.4s"}})]},h)})}),n.map((u,h)=>{const b=c[u.status],v=f[h];return r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"9px 12px",borderRadius:12,background:b.bg,border:`1.5px solid ${b.border}`,transition:"all 0.4s"},children:[r.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"rgba(124,58,237,0.2)",border:"1px solid rgba(124,58,237,0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx(v,{size:14,color:u.status==="answered"?"#22c55e":u.status==="missed"?"#ef4444":u.status==="sending"?"#fbbf24":"#7c3aed"})}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{style:{fontSize:10.5,fontWeight:800,color:"#e9d5ff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:u.name}),r.jsx("div",{style:{fontSize:8.5,color:"#7c3aed"},children:u.relation})]}),r.jsxs("div",{style:{fontSize:8.5,fontWeight:700,color:b.color,flexShrink:0,display:"flex",alignItems:"center",gap:4},children:[b.label,u.status==="sending"&&r.jsx("div",{style:{display:"flex",gap:2},children:[0,1,2].map(w=>r.jsx("div",{style:{width:3,height:3,borderRadius:"50%",background:"#fbbf24",animation:`bounce 0.8s ease ${w*.15}s infinite`}},w))})]})]},h)}),s.length>0&&r.jsx("div",{style:{marginTop:4,background:"rgba(124,58,237,0.08)",borderRadius:10,padding:"8px 10px",border:"1px solid rgba(124,58,237,0.2)"},children:s.map((u,h)=>r.jsx("div",{style:{fontSize:8.5,color:"#c4b5fd",lineHeight:1.8,animation:"fadeUp 0.3s ease"},children:u},h))}),!e&&s.length===0&&r.jsx("div",{style:{textAlign:"center",paddingTop:10,color:"#4a4a7a",fontSize:9},children:"Tap below to watch auto-escalation"})]})]}),r.jsx(Pt,{running:e,hasData:s.length>0,onRun:l,onReset:d,accent:"#7c3aed",label:"Simulate Chain"})]})}function Eh(){const[e,t]=x.useState("idle"),[n,i]=x.useState(0),[s,a]=x.useState(null),[o,d]=x.useState(!1),[l,c]=x.useState(0),f=x.useRef([]),u=x.useRef(null),h=()=>{f.current.forEach(clearTimeout),clearInterval(u.current),t("idle"),i(0),a(null),d(!1),c(0)},b=()=>{h(),d(!0),t("scanning"),u.current=setInterval(()=>c(w=>(w+1)%4),500),f.current.push(setTimeout(()=>{t("locating");let w=0;const y=setInterval(()=>{w+=8,w>=100&&(w=100,clearInterval(y)),i(w)},60);f.current.push(setTimeout(()=>{clearInterval(y),clearInterval(u.current),a({lat:"13.0827° N",lng:"80.2707° E",area:"Egmore, Chennai, TN",time:"Just now",device:"Android · Chrome 124"}),t("done"),d(!1)},2e3))},1500))};x.useEffect(()=>(b(),()=>h()),[]);const v=".".repeat(l);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs(Bt,{screenBg:"#001a14",accentColor:"#0d9488",children:[r.jsx("div",{style:{background:"linear-gradient(180deg,#001a14,#00221a)",padding:"10px 14px",flexShrink:0,borderBottom:"1px solid rgba(13,148,136,0.3)"},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:"rgba(13,148,136,0.25)",border:"1.5px solid rgba(20,184,166,0.4)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(C.MapPin,{size:16,color:"#5eead4"})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,fontWeight:800,color:"#ccfbf1"},children:"GPS Location Capture"}),r.jsx("div",{style:{fontSize:9,color:"#0d9488"},children:"Precision on every scan"})]})]})}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:16,background:"#001a14"},children:[e==="idle"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{width:72,height:72,borderRadius:"50%",background:"rgba(13,148,136,0.15)",border:"2px solid rgba(20,184,166,0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12,boxShadow:"0 0 30px rgba(13,148,136,0.2)"},children:r.jsx(C.MapPin,{size:34,color:"#14b8a6"})}),r.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#99f6e4",textAlign:"center"},children:"Tap button below to simulate"}),r.jsx("div",{style:{fontSize:10,color:"#0d9488",textAlign:"center",marginTop:4},children:"GPS coordinates will be captured"})]}),e==="scanning"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"rgba(13,148,136,0.15)",border:"2px solid rgba(20,184,166,0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12,animation:"pulse 0.8s ease infinite"},children:r.jsx(C.QrCode,{size:32,color:"#14b8a6"})}),r.jsxs("div",{style:{fontSize:12,fontWeight:700,color:"#5eead4",marginTop:4},children:["Scanning QR",v]})]}),e==="locating"&&r.jsxs("div",{style:{width:"100%",textAlign:"center"},children:[r.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"rgba(13,148,136,0.2)",border:"2px solid #14b8a6",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 10px",animation:"pulse 0.6s ease infinite"},children:r.jsx(C.MapPin,{size:30,color:"#5eead4"})}),r.jsxs("div",{style:{fontSize:11,fontWeight:700,color:"#14b8a6",margin:"4px 0 8px"},children:["Acquiring GPS",v]}),r.jsx("div",{style:{width:"100%",height:8,background:"rgba(13,148,136,0.2)",borderRadius:99,overflow:"hidden"},children:r.jsx("div",{style:{height:"100%",background:"linear-gradient(90deg,#0d9488,#14b8a6)",width:`${n}%`,transition:"width 0.06s linear",borderRadius:99}})}),r.jsxs("div",{style:{fontSize:9,color:"#0d9488",marginTop:4},children:[n,"% accuracy"]})]}),e==="done"&&s&&r.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:7},children:[r.jsxs("div",{style:{background:"rgba(13,148,136,0.12)",borderRadius:12,padding:"10px 12px",border:"1.5px solid rgba(20,184,166,0.3)"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[r.jsx(C.MapPin,{size:12,color:"#5eead4"}),r.jsx("div",{style:{fontSize:8.5,fontWeight:700,color:"#5eead4",textTransform:"uppercase",letterSpacing:".06em"},children:"Location Captured"})]}),r.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#ccfbf1"},children:s.area}),r.jsxs("div",{style:{fontSize:9,color:"#14b8a6",fontFamily:"monospace",marginTop:2},children:[s.lat," · ",s.lng]})]}),r.jsx("div",{style:{background:"rgba(13,148,136,0.08)",borderRadius:12,padding:"10px 12px",border:"1.5px solid rgba(20,184,166,0.2)"},children:[["⏰ Time",s.time],["📱 Device",s.device]].map(([w,y])=>r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,lineHeight:2},children:[r.jsx("span",{style:{color:"#0d9488"},children:w}),r.jsx("span",{style:{fontWeight:700,color:"#ccfbf1"},children:y})]},w))}),r.jsxs("div",{style:{background:"linear-gradient(135deg,#0d9488,#14b8a6)",borderRadius:10,padding:"8px 12px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[r.jsx(C.MapPin,{size:12,color:"#fff"}),r.jsx("span",{style:{fontSize:9.5,fontWeight:800,color:"#fff"},children:"Open in Google Maps →"})]})]})]})]}),r.jsx(Pt,{running:o,hasData:e!=="idle",onRun:b,onReset:h,accent:"#0d9488",label:"Simulate GPS Scan"})]})}const Yr=[{label:"Peel & Stick Tag",sub:"Attach to your item",icon:C.Star,duration:900},{label:"Open Setup Link",sub:"scanforsafe.com/activate",icon:C.Wifi,duration:700},{label:"Enter Your Number",sub:"+91 • Verified instantly",icon:C.Phone,duration:1e3},{label:"Add Emergency Contacts",sub:"Up to 3 contacts",icon:C.Users,duration:800},{label:"Tag Goes Live!",sub:"Your item is now protected",icon:C.CheckCircle,duration:600}];function Mh(){const[e,t]=x.useState(!1),[n,i]=x.useState([]),[s,a]=x.useState(-1),[o,d]=x.useState(0),l=x.useRef([]),c=x.useRef(null),f=Yr.reduce((v,w)=>v+w.duration+400,0),u=()=>{l.current.forEach(clearTimeout),clearInterval(c.current),t(!1),i([]),a(-1),d(0)},h=()=>{u(),t(!0);let v=0;Yr.forEach((w,y)=>{const g=setTimeout(()=>a(y),v);v+=w.duration;const p=setTimeout(()=>{i(m=>[...m,y]),y===Yr.length-1&&(a(-1),t(!1),clearInterval(c.current))},v);v+=400,l.current.push(g,p)}),c.current=setInterval(()=>d(w=>w+100),100)};x.useEffect(()=>(h(),()=>u()),[]);const b=Math.min(100,Math.round(o/f*100));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs(Bt,{screenBg:"#1a0e00",accentColor:"#d97706",children:[r.jsx("div",{style:{background:"linear-gradient(180deg,#2a1600,#1a0e00)",padding:"10px 14px",flexShrink:0,borderBottom:"1px solid rgba(217,119,6,0.3)"},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:"rgba(217,119,6,0.2)",border:"1.5px solid rgba(251,191,36,0.4)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(C.Zap,{size:16,color:"#fbbf24"})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,fontWeight:800,color:"#fef3c7"},children:"Activation Wizard"}),r.jsx("div",{style:{fontSize:9,color:"#d97706"},children:"Under 3 minutes • Zero tech needed"})]})]})}),r.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"10px",background:"#1a0e00"},children:[(e||n.length>0)&&r.jsxs("div",{style:{marginBottom:10},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#d97706",marginBottom:3},children:[r.jsx("span",{children:"Progress"}),r.jsxs("span",{style:{fontWeight:700,color:"#fbbf24"},children:[b,"%"]})]}),r.jsx("div",{style:{height:6,background:"rgba(217,119,6,0.2)",borderRadius:99,overflow:"hidden",border:"1px solid rgba(217,119,6,0.2)"},children:r.jsx("div",{style:{height:"100%",width:`${b}%`,background:"linear-gradient(90deg,#d97706,#f59e0b)",borderRadius:99,transition:"width 0.1s linear",boxShadow:"0 0 8px rgba(251,191,36,0.4)"}})})]}),Yr.map((v,w)=>{const y=n.includes(w),g=s===w;return r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:10,padding:"8px 10px",borderRadius:12,marginBottom:5,background:y?"rgba(217,119,6,0.1)":g?"rgba(255,255,255,0.04)":"rgba(255,255,255,0.02)",border:`1.5px solid ${y?"rgba(217,119,6,0.4)":g?"rgba(217,119,6,0.6)":"rgba(255,255,255,0.05)"}`,transition:"all 0.3s"},children:[r.jsx("div",{style:{width:30,height:30,borderRadius:"50%",flexShrink:0,background:y?"linear-gradient(135deg,#d97706,#f59e0b)":g?"rgba(217,119,6,0.2)":"rgba(255,255,255,0.04)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:y?"0 0 12px rgba(217,119,6,0.4)":""},children:y?r.jsx(C.CheckCircle,{size:14,color:"#fff"}):r.jsx(v.icon,{size:14,color:g?"#fbbf24":"#78350f"})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10.5,fontWeight:800,color:y?"#fbbf24":g?"#d97706":"#4a3000"},children:v.label}),(y||g)&&r.jsx("div",{style:{fontSize:9,color:"#92400e",marginTop:1},children:v.sub}),g&&r.jsx("div",{style:{display:"flex",gap:2,marginTop:4},children:[0,1,2].map(p=>r.jsx("div",{style:{width:4,height:4,borderRadius:"50%",background:"#d97706",animation:`bounce 0.8s ease ${p*.15}s infinite`}},p))})]})]},w)}),n.length===Yr.length&&r.jsxs("div",{style:{textAlign:"center",padding:"10px 0",animation:"fadeUp 0.4s ease"},children:[r.jsx("div",{style:{width:48,height:48,borderRadius:"50%",background:"rgba(217,119,6,0.2)",border:"2px solid #fbbf24",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 8px",boxShadow:"0 0 20px rgba(251,191,36,0.3)"},children:r.jsx(C.CheckCircle,{size:22,color:"#fbbf24"})}),r.jsxs("div",{style:{fontSize:11,fontWeight:800,color:"#fbbf24"},children:["Protected in ",(o/1e3).toFixed(1),"s!"]})]})]})]}),r.jsx(Pt,{running:e,hasData:n.length>0,onRun:h,onReset:u,accent:"#d97706",label:"Start Setup Demo"})]})}function Bh(){const[e,t]=x.useState("idle"),[n,i]=x.useState(!1),[s,a]=x.useState([]),o=x.useRef([]),d=()=>{o.current.forEach(clearTimeout),t("idle"),i(!1),a([])},l=()=>{d(),i(!0),t("scanning"),o.current.push(setTimeout(()=>t("proxy"),1200)),o.current.push(setTimeout(()=>{t("reveal");const u=["name","location","callBtn"];u.forEach((h,b)=>{const v=setTimeout(()=>a(w=>[...w,h]),b*500);o.current.push(v)}),setTimeout(()=>i(!1),u.length*500+400)},2800))};x.useEffect(()=>(l(),()=>d()),[]);const c=["+91-98400-XXXXX","12, MG Road, Chennai","owner@email.com","Bank Details","Aadhaar Number"],f=[C.Phone,C.MapPin,C.Bell,C.Shield,C.Lock];return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs(Bt,{screenBg:"#1a000a",accentColor:"#e11d48",children:[r.jsx("div",{style:{background:"linear-gradient(180deg,#2a0010,#1a000a)",padding:"10px 14px",flexShrink:0,borderBottom:"1px solid rgba(225,29,72,0.3)"},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:"rgba(225,29,72,0.2)",border:"1.5px solid rgba(251,113,133,0.4)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(C.Shield,{size:16,color:"#fb7185"})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,fontWeight:800,color:"#ffe4e6"},children:"Privacy Shield"}),r.jsx("div",{style:{fontSize:9,color:"#e11d48"},children:"Your data never touches the QR"})]})]})}),r.jsxs("div",{style:{flex:1,overflowY:"auto",padding:12,background:"#1a000a"},children:[e==="idle"&&r.jsxs("div",{style:{textAlign:"center",paddingTop:24},children:[r.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"rgba(225,29,72,0.15)",border:"2px solid rgba(251,113,133,0.3)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",boxShadow:"0 0 24px rgba(225,29,72,0.2)"},children:r.jsx(C.Lock,{size:30,color:"#fb7185"})}),r.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#fecdd3"},children:"See what the finder sees"}),r.jsx("div",{style:{fontSize:9,color:"#881337",marginTop:3},children:"vs. what your QR actually contains"})]}),e==="scanning"&&r.jsxs("div",{style:{textAlign:"center",paddingTop:30},children:[r.jsx("div",{style:{width:56,height:56,borderRadius:"50%",background:"rgba(225,29,72,0.15)",border:"2px solid rgba(251,113,133,0.3)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",animation:"pulse 0.6s ease infinite"},children:r.jsx(C.QrCode,{size:28,color:"#fb7185"})}),r.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#fb7185"},children:"Finder scans QR…"})]}),e==="proxy"&&r.jsxs("div",{style:{textAlign:"center",paddingTop:10},children:[r.jsx("div",{style:{width:50,height:50,borderRadius:"50%",background:"rgba(225,29,72,0.2)",border:"2px solid rgba(251,113,133,0.4)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 8px",boxShadow:"0 0 20px rgba(225,29,72,0.3)"},children:r.jsx(C.Lock,{size:22,color:"#fb7185"})}),r.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#fb7185",margin:"0 0 10px"},children:"Secure proxy intercepts"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:c.map((u,h)=>{const b=f[h];return r.jsxs("div",{style:{background:"rgba(225,29,72,0.1)",border:"1px solid rgba(225,29,72,0.25)",borderRadius:8,padding:"5px 10px",display:"flex",alignItems:"center",gap:8},children:[r.jsx(b,{size:11,color:"#e11d48"}),r.jsx("span",{style:{fontSize:9,fontWeight:700,color:"#ef4444",filter:"blur(3px)",flex:1},children:u}),r.jsx(C.Lock,{size:10,color:"#e11d48"})]},h)})})]}),e==="reveal"&&r.jsxs("div",{children:[r.jsxs("div",{style:{fontSize:9,fontWeight:700,color:"#22c55e",background:"rgba(34,197,94,0.1)",border:"1px solid rgba(34,197,94,0.25)",borderRadius:8,padding:"5px 10px",marginBottom:8,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[r.jsx(C.CheckCircle,{size:12,color:"#22c55e"}),r.jsx("span",{children:"What the finder actually sees:"})]}),s.includes("name")&&r.jsxs("div",{style:{background:"rgba(255,255,255,0.04)",border:"1.5px solid rgba(251,113,133,0.25)",borderRadius:10,padding:"8px 12px",marginBottom:6,animation:"fadeUp 0.3s ease"},children:[r.jsx("div",{style:{fontSize:9,color:"#881337",marginBottom:2},children:"Item Owner"}),r.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#fecdd3"},children:"Verified ScanForSafe User"}),r.jsx("div",{style:{fontSize:9,color:"#9f1239"},children:"No name. No address. Just trust."})]}),s.includes("location")&&r.jsxs("div",{style:{background:"rgba(255,255,255,0.04)",border:"1.5px solid rgba(251,113,133,0.25)",borderRadius:10,padding:"8px 12px",marginBottom:6,animation:"fadeUp 0.3s ease"},children:[r.jsx("div",{style:{fontSize:9,color:"#881337",marginBottom:2},children:"Item Name"}),r.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#fecdd3"},children:'"Black Laptop Bag"'})]}),s.includes("callBtn")&&r.jsxs("div",{style:{background:"linear-gradient(135deg,#e11d48,#be123c)",borderRadius:10,padding:"8px 12px",textAlign:"center",animation:"fadeUp 0.3s ease",display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:[r.jsx(C.Phone,{size:13,color:"#fff"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:10,fontWeight:800,color:"#fff"},children:"Call Owner (Proxied)"}),r.jsx("div",{style:{fontSize:8,color:"#fecdd3"},children:"Real number never revealed"})]})]})]})]})]}),r.jsx(Pt,{running:n,hasData:e!=="idle",onRun:l,onReset:d,accent:"#e11d48",label:"Simulate Privacy"})]})}const ei=[{time:"Today, 2:41 PM",loc:"Egmore, Chennai",device:"Android · Chrome",type:"new"},{time:"Yesterday, 8:12 AM",loc:"Chennai Airport, T2",device:"iPhone · Safari",type:"safe"},{time:"Dec 18, 3:55 PM",loc:"Anna Nagar, Chennai",device:"Android · Firefox",type:"safe"},{time:"Dec 15, 11:20 AM",loc:"T. Nagar, Chennai",device:"Android · Chrome",type:"safe"}];function Ph(){const[e,t]=x.useState(!1),[n,i]=x.useState([]),[s,a]=x.useState(null),o=x.useRef([]),d=()=>{o.current.forEach(clearTimeout),t(!1),i([]),a(null)},l=()=>{d(),t(!0),ei.forEach((c,f)=>{const u=setTimeout(()=>{a(f),setTimeout(()=>{i(h=>[...h,f]),a(null),f===ei.length-1&&t(!1)},500)},f*800);o.current.push(u)})};return x.useEffect(()=>(l(),()=>d()),[]),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs(Bt,{screenBg:"#00061a",accentColor:"#2563eb",children:[r.jsx("div",{style:{background:"linear-gradient(180deg,#000d2e,#00061a)",padding:"10px 14px",flexShrink:0,borderBottom:"1px solid rgba(37,99,235,0.3)"},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:"rgba(37,99,235,0.2)",border:"1.5px solid rgba(96,165,250,0.4)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(C.Clock,{size:16,color:"#60a5fa"})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,fontWeight:800,color:"#dbeafe"},children:"Scan Timeline"}),r.jsx("div",{style:{fontSize:9,color:"#2563eb"},children:"Every scan logged • Exportable"})]})]})}),r.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"10px",background:"#00061a"},children:[n.length===0&&!e&&r.jsxs("div",{style:{textAlign:"center",paddingTop:40},children:[r.jsx("div",{style:{width:56,height:56,borderRadius:"50%",background:"rgba(37,99,235,0.15)",border:"2px solid rgba(96,165,250,0.3)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 10px"},children:r.jsx(C.Bell,{size:26,color:"#60a5fa"})}),r.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#bfdbfe"},children:"Tap button below to load history"})]}),ei.map((c,f)=>{const u=n.includes(f),h=s===f;return!u&&!h?null:r.jsxs("div",{style:{background:c.type==="new"?"rgba(37,99,235,0.15)":"rgba(255,255,255,0.03)",border:`1.5px solid ${c.type==="new"?"rgba(96,165,250,0.4)":"rgba(255,255,255,0.08)"}`,borderRadius:12,padding:"9px 10px",marginBottom:6,animation:"fadeUp 0.4s ease",opacity:h?.5:1,transition:"opacity 0.3s"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[r.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"rgba(37,99,235,0.2)",border:"1px solid rgba(96,165,250,0.3)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(C.MapPin,{size:13,color:c.type==="new"?"#60a5fa":"#4a6a9a"})}),r.jsx("div",{style:{fontSize:10,fontWeight:800,color:c.type==="new"?"#93c5fd":"#bfdbfe"},children:c.loc})]}),c.type==="new"&&r.jsx("span",{style:{fontSize:8,fontWeight:700,background:"#2563eb",color:"#fff",padding:"2px 7px",borderRadius:99},children:"NEW"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:8.5,color:"#3b4a6b",paddingLeft:35},children:[r.jsxs("span",{children:["⏰ ",c.time]}),r.jsxs("span",{children:["📱 ",c.device]})]})]},f)}),n.length===ei.length&&r.jsxs("div",{style:{background:"linear-gradient(135deg,#1d4ed8,#2563eb)",borderRadius:10,padding:"8px 12px",textAlign:"center",animation:"fadeUp 0.3s ease",marginTop:4,display:"flex",alignItems:"center",justifyContent:"center",gap:7},children:[r.jsx(C.Bell,{size:12,color:"#fff"}),r.jsx("span",{style:{fontSize:9.5,fontWeight:800,color:"#fff"},children:"Export as CSV / PDF"})]})]})]}),r.jsx(Pt,{running:e,hasData:n.length>0,onRun:l,onReset:d,accent:"#2563eb",label:"Load History"})]})}function Th(){const[e,t]=x.useState("idle"),[n,i]=x.useState(!1),[s,a]=x.useState(""),o=x.useRef([]),d=x.useRef(null),l="+91-77000-12345",c=()=>{o.current.forEach(clearTimeout),clearInterval(d.current),t("idle"),i(!1),a("")},f=()=>{c(),i(!0),t("form");let u=0;d.current=setInterval(()=>{if(u>=l.length){clearInterval(d.current),o.current.push(setTimeout(()=>{t("saving"),o.current.push(setTimeout(()=>{t("done"),i(!1)},1600))},600));return}a(l.slice(0,u+1)),u++},80)};return x.useEffect(()=>(f(),()=>c()),[]),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs(Bt,{screenBg:"#1a0800",accentColor:"#ea580c",children:[r.jsx("div",{style:{background:"linear-gradient(180deg,#2a1000,#1a0800)",padding:"10px 14px",flexShrink:0,borderBottom:"1px solid rgba(234,88,12,0.3)"},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:"rgba(234,88,12,0.2)",border:"1.5px solid rgba(251,146,60,0.4)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(C.RefreshCw,{size:16,color:"#fb923c"})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:12,fontWeight:800,color:"#ffedd5"},children:"Update Dashboard"}),r.jsx("div",{style:{fontSize:9,color:"#ea580c"},children:"Change anytime • No new tag needed"})]})]})}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:14,background:"#1a0800"},children:[e==="idle"&&r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"rgba(234,88,12,0.15)",border:"2px solid rgba(251,146,60,0.35)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",boxShadow:"0 0 24px rgba(234,88,12,0.2)"},children:r.jsx(C.RefreshCw,{size:30,color:"#fb923c"})}),r.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#fed7aa"},children:"Changed your number?"}),r.jsx("div",{style:{fontSize:9,color:"#7c2d12",marginTop:4},children:"Update in 30 seconds — tag stays same"})]}),(e==="form"||e==="saving")&&r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[r.jsxs("div",{style:{background:"rgba(255,255,255,0.04)",borderRadius:12,padding:"10px 14px",border:"1px solid rgba(234,88,12,0.2)"},children:[r.jsx("div",{style:{fontSize:8.5,color:"#7c2d12",marginBottom:3,textTransform:"uppercase",letterSpacing:".06em"},children:"Current Number"}),r.jsxs("div",{style:{fontSize:12,fontWeight:700,color:"rgba(251,146,60,0.4)",textDecoration:"line-through",display:"flex",alignItems:"center",gap:8},children:[r.jsx(C.Phone,{size:12,color:"rgba(251,146,60,0.4)"}),"+91-98400-XXXXX"]})]}),r.jsx("div",{style:{textAlign:"center",fontSize:16,color:"#ea580c"},children:"↓"}),r.jsxs("div",{style:{background:"rgba(255,255,255,0.04)",borderRadius:12,padding:"10px 14px",border:`1.5px solid ${e==="saving"?"rgba(234,88,12,0.6)":"rgba(234,88,12,0.2)"}`,transition:"all 0.3s"},children:[r.jsx("div",{style:{fontSize:8.5,color:"#7c2d12",marginBottom:3,textTransform:"uppercase",letterSpacing:".06em"},children:"New Number"}),r.jsxs("div",{style:{fontSize:12,fontWeight:700,color:"#fb923c",fontFamily:"monospace",display:"flex",alignItems:"center",gap:8},children:[r.jsx(C.Phone,{size:12,color:"#fb923c"}),s,r.jsx("span",{style:{animation:"blink 0.8s step-end infinite",opacity:e==="form"?1:0},children:"|"})]})]}),e==="saving"&&r.jsxs("div",{style:{background:"linear-gradient(135deg,#ea580c,#dc2626)",borderRadius:10,padding:"8px 0",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:[r.jsx("div",{style:{display:"flex",gap:3},children:[0,1,2].map(u=>r.jsx("div",{style:{width:5,height:5,borderRadius:"50%",background:"#fff",animation:`bounce 0.8s ease ${u*.15}s infinite`}},u))}),r.jsx("span",{style:{fontSize:10,fontWeight:800,color:"#fff"},children:"Saving…"})]})]}),e==="done"&&r.jsxs("div",{style:{textAlign:"center",animation:"fadeUp 0.4s ease"},children:[r.jsx("div",{style:{width:56,height:56,borderRadius:"50%",background:"rgba(34,197,94,0.15)",border:"2px solid rgba(74,222,128,0.4)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 10px",boxShadow:"0 0 20px rgba(34,197,94,0.2)"},children:r.jsx(C.CheckCircle,{size:26,color:"#4ade80"})}),r.jsx("div",{style:{fontSize:13,fontWeight:900,color:"#4ade80",marginBottom:6},children:"Updated!"}),r.jsxs("div",{style:{background:"rgba(255,255,255,0.04)",borderRadius:12,padding:"8px 14px",border:"1.5px solid rgba(251,146,60,0.35)",marginBottom:8,display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:[r.jsx(C.Phone,{size:13,color:"#fb923c"}),r.jsx("span",{style:{fontSize:12,fontWeight:800,color:"#fb923c",fontFamily:"monospace"},children:l})]}),r.jsxs("div",{style:{fontSize:9,color:"#7c2d12",lineHeight:1.6},children:["Physical tag unchanged.",r.jsx("br",{}),"All future scans use new number."]})]})]})]}),r.jsx(Pt,{running:n,hasData:e!=="idle",onRun:f,onReset:c,accent:"#ea580c",label:"Demo Update"})]})}function Lh({featureId:e}){switch(e){case"whatsapp":return r.jsx(Nh,{});case"call":return r.jsx(Rh,{});case"contacts":return r.jsx(Ih,{});case"gps":return r.jsx(Eh,{});case"setup":return r.jsx(Mh,{});case"privacy":return r.jsx(Bh,{});case"history":return r.jsx(Ph,{});case"update":return r.jsx(Th,{});default:return null}}function Wh({f:e,active:t,onClick:n,index:i}){const s=Aa[e.id];return r.jsxs("div",{onClick:n,style:{borderRadius:20,padding:"20px 18px",background:t?`linear-gradient(145deg, ${e.accent} 0%, ${e.accent}e0 60%, ${e.accent}bb 100%)`:"#ffffff",border:`2px solid ${t?e.accent:"#f1f5f9"}`,cursor:"pointer",transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",transform:t?"translateY(-6px) scale(1.02)":"translateY(0) scale(1)",boxShadow:t?`0 20px 48px ${e.accent}40, 0 6px 16px ${e.accent}25, inset 0 1px 0 rgba(255,255,255,0.25)`:"0 2px 12px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)",position:"relative",overflow:"hidden"},children:[t&&r.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%)",pointerEvents:"none"}}),!t&&r.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg, transparent, ${e.accent}60, transparent)`,opacity:0,transition:"opacity 0.3s"}}),r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12},children:[r.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:4,background:t?"rgba(255,255,255,0.22)":e.tagBg,color:t?"#fff":e.tagColor,fontSize:9,fontWeight:900,padding:"3px 10px",borderRadius:99,letterSpacing:".08em",textTransform:"uppercase",border:`1px solid ${t?"rgba(255,255,255,0.3)":e.tagBg}`},children:e.tag}),r.jsx("div",{style:{width:42,height:42,borderRadius:13,background:t?"rgba(255,255,255,0.2)":e.bg,border:`1.5px solid ${t?"rgba(255,255,255,0.3)":e.tagBg}`,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s",flexShrink:0},children:r.jsx(s,{size:20,color:t?"#fff":e.accent})})]}),r.jsx("h3",{style:{fontSize:14.5,fontWeight:900,margin:"0 0 7px",color:t?"#fff":"#0f172a",letterSpacing:"-.025em",lineHeight:1.2,fontFamily:"'Outfit', sans-serif"},children:e.title}),r.jsx("p",{style:{fontSize:12,lineHeight:1.7,margin:"0 0 14px",color:t?"rgba(255,255,255,0.88)":"#64748b"},children:e.desc}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:12},children:e.pills.map(a=>r.jsx("span",{style:{fontSize:9.5,fontWeight:700,padding:"3px 9px",borderRadius:99,background:t?"rgba(255,255,255,0.16)":e.bg,color:t?"#fff":e.tagColor,border:`1px solid ${t?"rgba(255,255,255,0.25)":e.tagBg}`},children:a},a))}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:10,borderTop:`1px solid ${t?"rgba(255,255,255,0.2)":"#f1f5f9"}`},children:[r.jsxs("span",{style:{fontSize:10,fontWeight:800,color:t?"rgba(255,255,255,0.9)":e.statColor,display:"flex",alignItems:"center",gap:5},children:[r.jsx(C.Sparkles,{size:11,color:t?"rgba(255,255,255,0.7)":e.statColor}),e.stat]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:9.5,fontWeight:700,color:t?"rgba(255,255,255,0.8)":e.accent},children:["See demo ",r.jsx(C.ArrowRight,{size:11,color:t?"rgba(255,255,255,0.8)":e.accent})]})]})]})}function Fh(){const[e,t]=x.useState("whatsapp"),n=Fs.find(i=>i.id===e);return r.jsxs("section",{style:{background:"linear-gradient(180deg, #f0f4f8 0%, #f8fafc 60%, #f0f4f8 100%)",padding:"90px 24px 96px"},children:[r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&display=swap');
        * { box-sizing: border-box; }

        .feat-section-layout {
          display: grid;
          grid-template-columns: 1fr 310px;
          gap: 44px;
          align-items: start;
        }
        .feat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .phone-sticky {
          position: -webkit-sticky;
          position: sticky;
          top: 100px;
          align-self: start;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 10;
        }

        @media (max-width: 1024px) {
          .feat-section-layout { grid-template-columns: 1fr; }
          .phone-sticky { position: relative; top: 0; margin: 0 auto 36px; order: -1; }
        }
        @media (max-width: 600px) {
          .feat-grid { grid-template-columns: 1fr; }
        }

        @keyframes bounce {
          0%,100% { transform: translateY(0); opacity: 0.4; }
          50%      { transform: translateY(-4px); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.1); opacity: 0.7; }
        }
        @keyframes blink {
          0%,100% { opacity: 1; } 50% { opacity: 0; }
        }
        @keyframes ctaPulse {
          0%   { transform: scale(1);    opacity: 0.5; }
          100% { transform: scale(1.38); opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}),r.jsxs("div",{style:{maxWidth:1160,margin:"0 auto"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:56},children:[r.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"#dcfce7",border:"1.5px solid #4ade80",borderRadius:99,padding:"7px 20px",fontSize:11.5,fontWeight:800,color:"#14532d",letterSpacing:".06em",textTransform:"uppercase",marginBottom:18},children:"✦ Platform Features"}),r.jsxs("h2",{style:{fontSize:"clamp(2rem, 4vw, 3.25rem)",fontWeight:900,color:"#0B2545",letterSpacing:"-.04em",lineHeight:1.08,margin:"0 0 16px",fontFamily:"'Outfit', sans-serif"},children:["Powerful Features for"," ",r.jsx("span",{style:{background:"linear-gradient(130deg,#16a34a,#059669)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Peace of Mind"})]}),r.jsx("p",{style:{fontSize:15.5,color:"#4b7a62",maxWidth:540,margin:"0 auto",lineHeight:1.8},children:"Every feature has a live simulation — click any card, then hit the button to see it in action."}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:8,marginTop:20},children:Fs.map(i=>{const s=Aa[i.id];return r.jsxs("button",{onClick:()=>t(i.id),style:{display:"flex",alignItems:"center",gap:6,padding:"6px 14px",background:e===i.id?i.accent:"#fff",border:`1.5px solid ${e===i.id?i.accent:"#e2e8f0"}`,borderRadius:99,fontSize:11,fontWeight:700,color:e===i.id?"#fff":"#475569",cursor:"pointer",transition:"all 0.2s",boxShadow:e===i.id?`0 4px 14px ${i.accent}40`:"none"},children:[r.jsx(s,{size:12,color:e===i.id?"#fff":i.accent}),i.title.split(" ").slice(-1)[0]]},i.id)})})]}),r.jsxs("div",{className:"feat-section-layout",children:[r.jsx("div",{className:"feat-grid",children:Fs.map((i,s)=>r.jsx(Wh,{f:i,index:s,active:e===i.id,onClick:()=>t(i.id)},i.id))}),r.jsxs("div",{className:"phone-sticky",children:[r.jsx("div",{style:{marginBottom:16,textAlign:"center",animation:"fadeUp 0.3s ease",key:e},children:r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:n==null?void 0:n.bg,border:`1.5px solid ${n==null?void 0:n.tagBg}`,borderRadius:99,padding:"5px 14px",fontSize:11,fontWeight:800,color:n==null?void 0:n.tagColor,letterSpacing:".04em",textTransform:"uppercase"},children:[n&&r.jsx(r.Fragment,{children:(()=>{const i=Aa[n.id];return r.jsx(i,{size:13,color:n.accent})})()}),n==null?void 0:n.title]})}),r.jsx(Lh,{featureId:e}),r.jsx("p",{style:{fontSize:10.5,color:"#94a3b8",textAlign:"center",marginTop:14,maxWidth:220,lineHeight:1.6},children:"← Click any feature card to switch demo"})]})]}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"10px 16px",paddingTop:32,borderTop:"1.5px solid #e2e8f0",marginTop:16},children:[{icon:C.Lock,text:"ISO-grade data privacy"},{icon:C.Zap,text:"Works 24/7 — even offline"},{icon:C.Phone,text:"Any smartphone camera"},{icon:C.Shield,text:"End-to-end encrypted"},{icon:C.Star,text:"Made for India"}].map(({icon:i,text:s})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,background:"#fff",border:"1.5px solid #e2e8f0",borderRadius:99,padding:"7px 18px",fontSize:12.5,fontWeight:700,color:"#334155",transition:"all .2s ease",cursor:"default"},onMouseEnter:a=>{a.currentTarget.style.borderColor="#86efac",a.currentTarget.style.transform="translateY(-2px)",a.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,0.06)"},onMouseLeave:a=>{a.currentTarget.style.borderColor="#e2e8f0",a.currentTarget.style.transform="none",a.currentTarget.style.boxShadow="none"},children:[r.jsx(i,{size:14,color:"#16a34a"}),s]},s))})]})]})}function Ah(){return r.jsx("div",{className:"pt-20",children:r.jsx(Fh,{})})}const Dh="/assets/bike1-R4eEB0IT.png",Oh="/assets/car1-BPYYefFG.png",_h={green:{accent:"#2ebd3a",gradient:"linear-gradient(135deg, #2ebd3a, #0B2545)",soft:"#f8fafc",border:"#cbd5e1",active:"#2ebd3a"},orange:{accent:"#ea580c",gradient:"linear-gradient(135deg, #ea580c, #c2410c)",soft:"#fff7ed",border:"#cbd5e1",active:"#ea580c"},purple:{accent:"#7c3aed",gradient:"linear-gradient(135deg, #7c3aed, #6d28d9)",soft:"#faf5ff",border:"#cbd5e1",active:"#7c3aed"},red:{accent:"#dc2626",gradient:"linear-gradient(135deg, #dc2626, #b91c1c)",soft:"#fef2f2",border:"#cbd5e1",active:"#dc2626"},blue:{accent:"#2563eb",gradient:"linear-gradient(135deg, #2563eb, #1d4ed8)",soft:"#eff6ff",border:"#cbd5e1",active:"#2563eb"}},$h=[{id:"car",icon:zt,image:Oh,title:"Car Protection",subtitle:"Vehicle Security",desc:"Weatherproof QR protection for cars with instant emergency alerts and GPS tracking.",features:[{label:"Weatherproof",icon:_1},{label:"Live Alerts",icon:Ie},{label:"GPS Tracking",icon:qe},{label:"24/7 Monitor",icon:ke}],price:499,original:999,discount:"50% OFF",color:"green",rating:4.9,reviews:2341},{id:"bike",icon:Do,image:Dh,title:"Bike Security",subtitle:"Two Wheeler Shield",desc:"Scratch resistant QR protection with owner privacy and instant finder alerts.",features:[{label:"Scratch Resistant",icon:xt},{label:"Instant Notify",icon:Ie},{label:"Owner Privacy",icon:Qt},{label:"Quick Connect",icon:tg}],price:499,original:999,discount:"50% OFF",color:"green",popular:!0,rating:4.8,reviews:3892},{id:"pet",icon:Yu,image:Uo,title:"Pet Safety Tag",subtitle:"Pet Guardian",desc:"Smart pet QR with collar support, emergency contact and GPS location sharing.",features:[{label:"Collar Friendly",icon:Kr},{label:"GPS Location",icon:Fa},{label:"Emergency Contact",icon:$e},{label:"Vet Info",icon:K1}],price:499,original:999,discount:"50% OFF",color:"orange",rating:4.9,reviews:1876},{id:"luggage",icon:ag,image:$o,title:"Luggage Guard",subtitle:"Travel Protection",desc:"Strong adhesive QR luggage tags for fast recovery and secure travel support.",features:[{label:"Multi Luggage",icon:J1},{label:"Strong Adhesive",icon:xt},{label:"Travel Friendly",icon:og},{label:"Quick Recovery",icon:Nn}],price:499,original:999,discount:"50% OFF",color:"purple",rating:4.7,reviews:1243},{id:"senior",icon:xg,image:Ho,title:"Senior Safety",subtitle:"Emergency Wrist Band",desc:"Senior citizen wrist QR support with medical info and emergency family alerts.",features:[{label:"Medical Info",icon:xt},{label:"Emergency Alerts",icon:Ie},{label:"Family Contact",icon:$e},{label:"Live Tracking",icon:qe}],price:699,original:1299,discount:"46% OFF",color:"red",rating:4.9,reviews:987},{id:"child",icon:Ao,image:Vo,title:"Child Safety",subtitle:"Kids Guardian",desc:"Child QR safety patch with emergency contact and quick scan protection.",features:[{label:"QR Patch",icon:xt},{label:"Emergency Alert",icon:Ie},{label:"Parental Contact",icon:$e},{label:"Quick Scan",icon:Nn}],price:699,original:1299,discount:"46% OFF",color:"blue",rating:5,reviews:2108}],Uh=[{icon:ke,title:"Secure Checkout",sub:"100% Safe & Encrypted",color:"#2ebd3a"},{icon:_o,title:"Free Shipping",sub:"Pan India Delivery",color:"#2563eb"},{icon:cg,title:"30-Day Returns",sub:"Easy Refund Policy",color:"#7c3aed"},{icon:Q1,title:"24/7 Support",sub:"Always Here To Help",color:"#ea580c"}];function Hh({product:e}){const[t,n]=x.useState(1),[i,s]=x.useState(!1),a=_h[e.color],o=e.icon;return r.jsxs("div",{onClick:()=>s(!i),style:{background:"#fff",borderRadius:20,overflow:"visible",border:i?`2px solid ${a.active}`:"1px solid #cbd5e1",boxShadow:i?"0 12px 28px rgba(0,0,0,0.08)":"0 4px 16px rgba(0,0,0,0.03)",position:"relative",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",transform:i?"translateY(-4px)":"translateY(0px)",padding:"20px 16px 16px 16px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e.popular&&r.jsxs("div",{style:{position:"absolute",top:-12,left:20,background:a.gradient,color:"#fff",fontSize:10,fontWeight:800,padding:"4px 12px",borderRadius:20,zIndex:10,display:"flex",alignItems:"center",gap:4,letterSpacing:"0.5px"},children:[r.jsx(Ee,{size:10,fill:"#fff"}),"MOST POPULAR"]}),r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[r.jsx("div",{style:{width:40,height:40,borderRadius:12,background:a.gradient,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(o,{color:"#fff",size:20})}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700},children:[r.jsx(qu,{size:12,fill:"#f59e0b",color:"#f59e0b"}),r.jsx("span",{style:{color:"#0B2545"},children:e.rating}),r.jsxs("span",{style:{color:"#9ca3af",fontWeight:400},children:["| ",e.reviews.toLocaleString()," reviews"]})]})]}),r.jsx("h3",{style:{fontSize:18,fontWeight:800,color:"#0B2545",margin:"0 0 2px 0"},children:e.title}),r.jsx("p",{style:{color:a.accent,fontWeight:700,fontSize:12,margin:"0 0 12px 0"},children:e.subtitle}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px 1fr",gap:12,alignItems:"start",marginBottom:14},children:[r.jsx("div",{style:{background:"#f8fafc",borderRadius:14,height:120,display:"flex",alignItems:"center",justifyContent:"center",padding:8,border:"1px solid #f1f5f9"},children:r.jsx("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%",objectFit:"contain"}})}),r.jsxs("div",{children:[r.jsx("p",{style:{fontSize:11,color:"#6b7280",lineHeight:1.5,margin:"0 0 10px 0"},children:e.desc}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:6},children:e.features.map(({label:d,icon:l})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(l,{size:13,color:a.accent,style:{flexShrink:0}}),r.jsx("span",{style:{fontSize:11,fontWeight:500,color:"#374151"},children:d})]},d))})]})]})]}),r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6,marginBottom:12},children:[r.jsxs("span",{style:{fontSize:24,fontWeight:900,color:a.accent},children:["₹",e.price]}),r.jsxs("span",{style:{textDecoration:"line-through",color:"#9ca3af",fontSize:14,fontWeight:500},children:["₹",e.original]}),r.jsx("span",{style:{color:a.accent,fontSize:11,fontWeight:700,marginLeft:"auto",background:a.soft,padding:"2px 8px",borderRadius:12},children:e.discount})]}),r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",border:"1px solid #e2e8f0",borderRadius:10,overflow:"hidden",height:36},children:[r.jsx("button",{onClick:d=>{d.stopPropagation(),n(l=>Math.max(1,l-1))},style:xd,children:r.jsx(sg,{size:12})}),r.jsx("div",{style:{width:28,textAlign:"center",fontWeight:700,fontSize:13,color:"#0B2545"},children:t}),r.jsx("button",{onClick:d=>{d.stopPropagation(),n(l=>l+1)},style:xd,children:r.jsx(lg,{size:12})})]}),r.jsxs("button",{onClick:d=>d.stopPropagation(),style:{flex:1,height:36,border:"none",borderRadius:10,background:a.gradient,color:"#fff",fontWeight:700,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center",gap:6,cursor:"pointer"},children:[r.jsx(pg,{size:13}),"Buy Now"]})]})]})]})}const xd={width:32,height:"100%",border:"none",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#6b7280"};function Vh(){return r.jsxs("section",{style:{padding:"60px 0",background:"linear-gradient(180deg, #f4fbf7 0%, #ffffff 100%)",fontFamily:"'DM Sans', system-ui, sans-serif"},children:[r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
      `}),r.jsxs("div",{style:{width:"100%",maxWidth:1200,margin:"0 auto",padding:"0 20px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:44},children:[r.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid #e8f8eb",borderRadius:30,padding:"6px 16px",marginBottom:16,boxShadow:"0 4px 12px rgba(0,0,0,0.03)"},children:[r.jsx(Wa,{size:14,color:"#2ebd3a"}),r.jsx("span",{style:{fontWeight:800,fontSize:11,color:"#0B2545",letterSpacing:"0.5px"},children:"OUR PRODUCTS"})]}),r.jsxs("h2",{style:{fontSize:44,lineHeight:1.1,fontWeight:900,marginBottom:12,color:"#0B2545",letterSpacing:"-1px"},children:["Choose Your ",r.jsx("span",{style:{color:"#2ebd3a"},children:"Protection Plan"})]}),r.jsx("p",{style:{maxWidth:640,margin:"0 auto",color:"#4b5563",lineHeight:1.6,fontSize:15},children:"Smart QR solutions for vehicles, pets, luggage, children and senior citizens with instant emergency communication and recovery support."})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:24,marginBottom:44},children:$h.map(e=>r.jsx(Hh,{product:e},e.id))}),r.jsx("div",{style:{background:"#fff",borderRadius:16,padding:"20px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:16,boxShadow:"0 4px 20px rgba(0,0,0,0.04)",border:"1px solid #f1f5f9"},children:Uh.map(({icon:e,title:t,sub:n,color:i})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,justifyContent:"center"},children:[r.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx(e,{size:20,color:i})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:800,fontSize:14,color:"#0B2545"},children:t}),r.jsx("div",{style:{color:"#6b7280",fontSize:12},children:n})]})]},t))})]})]})}function Yh(){return r.jsx("div",{className:"pt-20 bg-[#f8fbff]",children:r.jsx(Vh,{})})}const qh="/assets/bike-CEMC_UmP.png",Xh=[{icon:Do,title:"Motorcycles & Bikes",category:"VEHICLE",qrSize:"3.5 cm QR Sticker",description:"Smart QR recovery sticker for bikes with instant owner GPS alerts.",cardBg:"#EAF3DE",accentColor:"#2ebd3a",iconBg:"#27500A",borderColor:"#92cc5a",tag:"QR Sticker",tagBg:"#C0DD97",tagColor:"#27500A",titleColor:"#1a3d06",subColor:"#3B6D11",descColor:"#3B6D11",image:qh,badge:"🏍️",qrPosition:"Fuel tank / handlebar",features:["Waterproof","Tamper-proof","UV-resistant"],stats:[{icon:$u,value:"< 3s",label:"Alert"},{icon:qe,value:"Live",label:"GPS"},{icon:Ie,value:"24/7",label:"Active"}]},{icon:Uu,title:"Laptops & Valuables",category:"TECH",qrSize:"3.5 cm QR Sticker",description:"Discreet sticker for laptops & cameras. Lost device? Finder scans → instant location.",cardBg:"#E6F1FB",accentColor:"#1a6fbe",iconBg:"#0B2545",borderColor:"#6aaae8",tag:"QR Sticker",tagBg:"#B5D4F4",tagColor:"#0C447C",titleColor:"#062040",subColor:"#185FA5",descColor:"#185FA5",image:$o,badge:"💻",qrPosition:"On device / back cover",features:["Discreet","Strong adhesive","Device-safe"],stats:[{icon:qe,value:"Live",label:"Location"},{icon:Ie,value:"Instant",label:"Alert"},{icon:Ee,value:"24/7",label:"Secure"}]},{icon:Yu,title:"Dogs, Cats & Pets",category:"PETS",qrSize:"Collar QR Tag",description:"Lightweight QR collar tag. Anyone scans → instant owner notification with GPS.",cardBg:"#EAF3DE",accentColor:"#2ebd3a",iconBg:"#27500A",borderColor:"#92cc5a",tag:"Collar Tag",tagBg:"#C0DD97",tagColor:"#27500A",titleColor:"#1a3d06",subColor:"#3B6D11",descColor:"#3B6D11",image:Uo,badge:"🐕",qrPosition:"On pet collar",features:["Lightweight","Weatherproof","Easy scan"],stats:[{icon:qe,value:"GPS",label:"Per scan"},{icon:Ie,value:"Auto",label:"Alert"},{icon:Ee,value:"5+",label:"Contacts"}]},{icon:Ao,title:"Children Safety",category:"SAFETY",qrSize:"Hand Band / Shoulder",description:"QR wristband for kids. Scan in crowds → parents alerted instantly with live GPS.",cardBg:"#EEEDFE",accentColor:"#534AB7",iconBg:"#3C3489",borderColor:"#9b93e8",tag:"Hand Band",tagBg:"#CECBF6",tagColor:"#26215C",titleColor:"#1a1644",subColor:"#534AB7",descColor:"#534AB7",image:Vo,badge:"🧒",qrPosition:"Hand band / shoulder",features:["Soft band","No app needed","Instant alert"],stats:[{icon:Ie,value:"Instant",label:"Parent"},{icon:qe,value:"Live",label:"GPS"},{icon:Ee,value:"Quick",label:"Scan"}]},{icon:Nn,title:"Tags & ID Cards",category:"OFFICE",qrSize:"QR Identity Tag",description:"QR tags for employee IDs, student cards, and visitor badges — scan and identify instantly.",cardBg:"#E1F5EE",accentColor:"#0F6E56",iconBg:"#085041",borderColor:"#3dba96",tag:"Smart Tag",tagBg:"#9FE1CB",tagColor:"#085041",titleColor:"#043328",subColor:"#0F6E56",descColor:"#0F6E56",image:Xu,badge:"🏷️",qrPosition:"Tag / Card",features:["Multi-format","Instant scan","Reusable"],stats:[{icon:Nn,value:"QR",label:"Enabled"},{icon:U1,value:"Card",label:"Format"},{icon:Ee,value:"Fast",label:"Access"}]},{icon:hg,title:"Senior Citizens",category:"CARE",qrSize:"Emergency QR ID",description:"Emergency profile with medical info & family contacts — critical help at one scan.",cardBg:"#EEEDFE",accentColor:"#7F77DD",iconBg:"#534AB7",borderColor:"#9b93e8",tag:"Senior Care",tagBg:"#534AB7",tagColor:"#fff",titleColor:"#1a1644",subColor:"#534AB7",descColor:"#534AB7",image:Ho,badge:"👴",qrPosition:"Wristband / wallet card",isNew:!0,features:["Medical ID","Blood group","SOS alert"],stats:[{icon:Ee,value:"SOS",label:"Support"},{icon:Ie,value:"5",label:"Family"},{icon:qe,value:"Quick",label:"Access"}]}];function Qh(){return r.jsxs("section",{id:"use-cases",style:{background:"#f0f6f1",padding:"52px 0 60px"},children:[r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

        /* ── Grid ── */
        .uc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 940px) { .uc-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 580px) {
          .uc-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        /* ── Card ── */
        .uc-card {
          position: relative; border-radius: 20px; overflow: hidden;
          display: flex; flex-direction: column;
          border: 2px solid var(--uc-border);
          outline: 1px solid rgba(255,255,255,0.55);
          outline-offset: -3px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.08);
          transition: transform 0.3s cubic-bezier(.22,.68,0,1.2),
                      box-shadow 0.3s ease, border-color 0.25s ease;
          animation: ucUp 0.5s ease both;
        }
        @media (max-width: 580px) {
          .uc-card {
            min-width: 0;
            max-width: 100%;
          }
        }
        .uc-card:hover {
          transform: translateY(-8px) scale(1.013);
          border-color: var(--uc-accent);
          box-shadow: 0 4px 8px rgba(0,0,0,0.06), 0 20px 48px rgba(0,0,0,0.14);
        }
        .uc-card:nth-child(1){animation-delay:.04s} .uc-card:nth-child(2){animation-delay:.10s}
        .uc-card:nth-child(3){animation-delay:.16s} .uc-card:nth-child(4){animation-delay:.22s}
        .uc-card:nth-child(5){animation-delay:.28s} .uc-card:nth-child(6){animation-delay:.34s}
        @keyframes ucUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }

        /* ── Image block ── */
        .uc-img-wrap {
          position: relative;
          height: 210px;
          overflow: hidden; flex-shrink: 0;
          border-bottom: 2px solid var(--uc-border);
        }
        .uc-img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.5s cubic-bezier(.25,.46,.45,.94);
        }
        .uc-card:hover .uc-img { transform: scale(1.07); }
        .uc-img-overlay { position: absolute; inset: 0; pointer-events: none; }

        /* category chip on image */
        .uc-cat-chip {
          position: absolute; top: 11px; left: 11px;
          background: rgba(255,255,255,0.92); backdrop-filter: blur(8px);
          border: 1.5px solid rgba(0,0,0,0.09);
          border-radius: 8px; padding: 4px 9px;
          font-size: 8.5px; font-weight: 800; letter-spacing: 0.13em;
          font-family: 'Sora', sans-serif;
          text-transform: uppercase;
        }

        /* QR scan badge */
        .uc-qr-badge {
          position: absolute; bottom: 10px; left: 10px;
          background: rgba(255,255,255,0.95);
          border: 1.5px solid rgba(46,189,58,0.35);
          border-radius: 8px; padding: 5px 10px;
          display: flex; align-items: center; gap: 5px;
          font-size: 9.5px; font-weight: 600; color: #157a24;
          font-family: 'DM Sans', sans-serif;
          box-shadow: 0 2px 10px rgba(0,0,0,0.13);
          animation: ucQrPulse 2.8s ease-in-out infinite;
        }
        @keyframes ucQrPulse {
          0%,100%{ box-shadow: 0 2px 10px rgba(0,0,0,0.13); }
          50%    { box-shadow: 0 3px 16px rgba(46,189,58,0.32); }
        }

        /* NEW badge */
        .uc-new-badge {
          position: absolute; top: 11px; right: 11px;
          background: linear-gradient(135deg,#4a41aa,#8b85e8);
          color: #fff; font-size: 8px; font-weight: 800;
          padding: 4px 10px; border-radius: 100px; letter-spacing: 0.1em;
          font-family: 'Sora', sans-serif;
          border: 1.5px solid rgba(255,255,255,0.28);
          box-shadow: 0 3px 10px rgba(74,65,170,0.42);
        }

        /* ── Body ── */
        .uc-body {
          padding: 12px 14px 14px;
          display: flex; flex-direction: column; gap: 8px; flex: 1;
        }

        /* title row */
        .uc-title-row {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 8px;
        }
        .uc-title-left {
          display: flex; gap: 9px; align-items: center; min-width: 0; flex: 1;
        }
        .uc-icon-box {
          width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid rgba(255,255,255,0.22);
          box-shadow: 0 3px 8px rgba(0,0,0,0.22), 0 1px 0 rgba(255,255,255,0.12) inset;
          transition: transform 0.28s cubic-bezier(.22,.68,0,1.5);
        }
        .uc-card:hover .uc-icon-box { transform: translateY(-3px) scale(1.1); }

        /* ── FONT CHANGES: Sora for title, DM Sans for everything else ── */
        .uc-name {
          margin: 0; font-size: 14.5px; font-weight: 700; line-height: 1.18;
          letter-spacing: -0.03em;
          font-family: 'Sora', sans-serif;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .uc-sub {
          font-size: 10px; font-weight: 500; margin-top: 2px;
          font-family: 'DM Sans', sans-serif; opacity: 0.75;
        }

        .uc-tag-pill {
          font-size: 9px; font-weight: 700; padding: 4px 10px;
          border-radius: 100px; white-space: nowrap; flex-shrink: 0;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.03em;
          border: 2px solid transparent;
        }

        /* thin rule */
        .uc-rule { height: 1px; border: none; opacity: 0.2; flex-shrink: 0; }

        /* description */
        .uc-desc {
          margin: 0; font-size: 12px; line-height: 1.68; font-weight: 400;
          font-family: 'DM Sans', sans-serif;
        }

        /* pills */
        .uc-pills { display: flex; flex-wrap: wrap; gap: 4px; }
        .uc-pill {
          font-size: 9px; font-weight: 600; padding: 3px 9px; border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          border: 1.5px solid transparent;
        }

        /* stats */
        .uc-stats {
          display: flex; border-radius: 12px;
          background: rgba(255,255,255,0.7);
          border: 2px solid rgba(255,255,255,0.88);
          box-shadow: 0 1px 6px rgba(0,0,0,0.06);
          overflow: hidden;
        }
        .uc-stat {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 1px; padding: 8px 4px;
        }
        .uc-stat + .uc-stat { border-left: 1.5px solid rgba(0,0,0,0.08); }
        .uc-stat-val {
          font-size: 13px; font-weight: 800; line-height: 1;
          font-family: 'Sora', sans-serif;
          letter-spacing: -0.02em;
        }
        .uc-stat-lbl {
          font-size: 7px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.09em;
          font-family: 'DM Sans', sans-serif;
        }

        /* footer */
        .uc-footer {
          display: flex; align-items: center;
          justify-content: space-between; gap: 6px; margin-top: auto;
        }
        .uc-live {
          display: flex; align-items: center; gap: 5px;
          font-size: 10px; font-weight: 600;
          font-family: 'DM Sans', sans-serif;
        }
        .uc-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #2ebd3a;
          box-shadow: 0 0 0 2.5px rgba(46,189,58,0.22), 0 0 0 4.5px rgba(46,189,58,0.08);
        }
        .uc-btn {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 10.5px; font-weight: 700; padding: 6px 13px; border-radius: 999px;
          cursor: pointer; font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.01em;
          border: 2px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.82);
          box-shadow: 0 2px 5px rgba(0,0,0,0.07);
          transition: all 0.2s ease;
        }
        .uc-btn:hover { background:#fff; gap:7px; box-shadow:0 4px 12px rgba(0,0,0,0.12); border-color:rgba(0,0,0,0.2); }

        /* mobile swipe hint */
        .uc-swipe {
          display: none; align-items: center; gap: 5px;
          font-size: 11px; color: #999; margin-bottom: 10px;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Section header badge ── */
        .uc-header-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 16px; border-radius: 100px;
          background: #daf2e1; border: 1.5px solid #82cc96; margin-bottom: 14px;
          box-shadow: 0 2px 8px rgba(46,189,58,0.1);
        }
        .uc-header-badge span {
          font-size: 11px; font-weight: 700; color: #157a24;
          font-family: 'Sora', sans-serif; letter-spacing: 0.07em;
          text-transform: uppercase;
        }
        .uc-header-h2 {
          font-size: clamp(26px, 3.5vw, 44px);
          font-weight: 900;
          color: #06160A;
          margin: 0 0 10px;
          line-height: 1.0;
          font-family: 'Sora', sans-serif;
          letter-spacing: -0.04em;
        }
        .uc-header-h2 .uc-green {
          background: linear-gradient(125deg, #0a2e10 0%, #2ebd3a 52%, #4bd557 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .uc-header-p {
          color: #3a6b50; font-size: 14.5px; max-width: 480px; margin: 0 auto;
          line-height: 1.75; font-family: 'DM Sans', sans-serif; font-weight: 400;
        }
      `}),r.jsxs("div",{style:{maxWidth:1140,margin:"0 auto",padding:"0 20px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:36},children:[r.jsxs("div",{className:"uc-header-badge",children:[r.jsx(ke,{size:13,color:"#157a24"}),r.jsx("span",{children:"Real-World Use Cases"})]}),r.jsxs("h2",{className:"uc-header-h2",children:["Protect Everything",r.jsx("br",{}),r.jsx("span",{className:"uc-green",children:"You Love"})]}),r.jsx("p",{className:"uc-header-p",children:"Smart QR safety tags for bikes, laptops, pets, children, ID cards, and senior citizens."})]}),r.jsxs("div",{className:"uc-swipe",children:[r.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"#aaa",strokeWidth:"2",children:r.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})}),"Swipe to explore"]}),r.jsx("div",{className:"uc-grid",children:Xh.map(e=>r.jsx(Gh,{...e},e.title))})]})]})}function Gh({icon:e,title:t,category:n,qrSize:i,description:s,cardBg:a,accentColor:o,iconBg:d,borderColor:l,tag:c,tagBg:f,tagColor:u,titleColor:h,subColor:b,descColor:v,image:w,badge:y,qrPosition:g,isNew:p,features:m,stats:k}){return r.jsxs("div",{className:"uc-card",style:{background:a,"--uc-border":l,"--uc-accent":o},children:[r.jsxs("div",{className:"uc-img-wrap",children:[r.jsx("img",{src:w,alt:t,className:"uc-img"}),r.jsx("div",{className:"uc-img-overlay",style:{background:`linear-gradient(to bottom,
              ${o}10 0%,
              transparent 30%,
              rgba(0,0,0,0.04) 60%,
              rgba(0,0,0,0.22) 100%)`}}),r.jsx("div",{className:"uc-cat-chip",style:{color:o},children:n}),p&&r.jsx("div",{className:"uc-new-badge",children:"✦ NEW"}),r.jsxs("div",{className:"uc-qr-badge",children:[r.jsx(Kh,{}),g]})]}),r.jsxs("div",{className:"uc-body",children:[r.jsxs("div",{className:"uc-title-row",children:[r.jsxs("div",{className:"uc-title-left",children:[r.jsx("div",{className:"uc-icon-box",style:{background:d},children:r.jsx(e,{size:16,color:"#fff"})}),r.jsxs("div",{style:{minWidth:0,flex:1},children:[r.jsx("h3",{className:"uc-name",style:{color:h},children:t}),r.jsxs("div",{className:"uc-sub",style:{color:b},children:[y," ",i]})]})]}),r.jsx("span",{className:"uc-tag-pill",style:{background:f,color:u,borderColor:`${u}50`},children:c})]}),r.jsx("hr",{className:"uc-rule",style:{background:o}}),r.jsx("p",{className:"uc-desc",style:{color:v},children:s}),r.jsx("div",{className:"uc-pills",children:m.map(j=>r.jsx("span",{className:"uc-pill",style:{background:f,color:u,borderColor:`${u}40`},children:j},j))}),r.jsx("div",{className:"uc-stats",children:k.map(j=>{const N=j.icon;return r.jsxs("div",{className:"uc-stat",children:[r.jsx(N,{size:10,color:d}),r.jsx("span",{className:"uc-stat-val",style:{color:h},children:j.value}),r.jsx("span",{className:"uc-stat-lbl",style:{color:b},children:j.label})]},j.label)})}),r.jsxs("div",{className:"uc-footer",children:[r.jsxs("div",{className:"uc-live",style:{color:b},children:[r.jsx("span",{className:"uc-dot"}),"Finder-friendly"]}),r.jsxs("button",{type:"button",className:"uc-btn",style:{color:h},children:["Learn more ",r.jsx(W1,{size:11})]})]})]})]})}function Kh(){return r.jsxs("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"#157a24",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),r.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),r.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),r.jsx("path",{d:"M14 14h3v3m0 4h4m-4-4v4m4-7h-4m4 0v3"})]})}function Zh(){return r.jsx("div",{className:"pt-20",children:r.jsx(Qh,{})})}function Jh(){return r.jsx(r.Fragment,{children:r.jsx(Gu,{})})}const ex=[{name:"Priya Sharma",role:"Pet Owner",city:"Mumbai",initial:"P",color:"#0057b8",bg:"rgba(0,87,184,0.10)",rating:5,Icon:xt,text:"My dog slipped out one evening. Within 20 minutes, a kind stranger scanned his collar and I got a WhatsApp alert with their location. We reunited so fast! ScanForSafe is absolutely worth every rupee."},{name:"Rajesh Kumar",role:"Car Owner",city:"Delhi",initial:"R",color:"#2ca02c",bg:"rgba(44,160,44,0.10)",rating:5,Icon:zt,text:"Parking in crowded areas always made me anxious about blocking someone. Now with the QR on my car, people contact me directly without needing my number visible."},{name:"Anita Verma",role:"Parent",city:"Bengaluru",initial:"A",color:"#1a7fd4",bg:"rgba(26,127,212,0.10)",rating:5,Icon:Ao,text:"I put a ScanForSafe tag on my son's school bag. The peace of mind knowing someone can reach me immediately in an emergency is priceless."},{name:"Mohammed Farhan",role:"Bike Owner",city:"Hyderabad",initial:"M",color:"#00509e",bg:"rgba(0,80,158,0.10)",rating:5,Icon:Do,text:"My bike was towed once and I had no idea where it went. After getting ScanForSafe, I feel so much more in control."},{name:"Sneha Reddy",role:"Frequent Traveller",city:"Chennai",initial:"S",color:"#1d8a1d",bg:"rgba(29,138,29,0.10)",rating:5,Icon:A1,text:"Lost my suitcase at the airport once — never again. I tag every bag now."},{name:"Vikram Nair",role:"Laptop Owner",city:"Pune",initial:"V",color:"#0057b8",bg:"rgba(0,87,184,0.10)",rating:5,Icon:Uu,text:"Left my laptop at a café once and it was gone for 2 hours. ScanForSafe helped me recover it quickly."}];function tx({count:e}){return r.jsx("div",{className:"flex gap-0.5",children:Array.from({length:e}).map((t,n)=>r.jsx(qu,{className:"w-3.5 h-3.5 text-amber-400 fill-amber-400"},n))})}function rx({t:e}){const{Icon:t}=e;return r.jsxs("div",{className:"relative rounded-2xl p-5 border border-slate-100 bg-white",style:{boxShadow:"0 2px 16px rgba(0,43,91,0.07)"},children:[r.jsxs("div",{className:"flex items-start justify-between mb-3",children:[r.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center",style:{background:e.bg},children:r.jsx(t,{style:{width:"18px",height:"18px",color:e.color}})}),r.jsx(tx,{count:e.rating})]}),r.jsx(dg,{className:"absolute top-4 right-14 w-6 h-6",style:{color:"rgba(0,87,184,0.08)"}}),r.jsxs("p",{className:"text-slate-600 text-sm leading-relaxed mb-4",children:['"',e.text,'"']}),r.jsxs("div",{className:"flex items-center gap-3 pt-3 border-t border-slate-100",children:[r.jsx("div",{className:"w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm",style:{background:e.color},children:e.initial}),r.jsxs("div",{children:[r.jsx("p",{className:"font-bold text-sm",style:{color:"#002b5b"},children:e.name}),r.jsxs("p",{className:"text-xs text-slate-400",children:[e.role," · ",e.city]})]})]})]})}function nx(){return r.jsx("section",{id:"testimonials",className:"py-20",style:{background:"#f4f7fb",padding:"120pX"},children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:[r.jsxs("div",{className:"mb-14 text-center",children:[r.jsx("div",{className:"flex justify-center mb-4",children:r.jsx("span",{className:"badge",children:"Customer Stories"})}),r.jsx("h2",{className:"section-heading",children:"Real People, Real Protection Stories"}),r.jsx("p",{className:"section-sub",children:"Join thousands of happy customers across India who trust ScanForSafe every day."}),r.jsx("div",{className:"flex flex-wrap items-center justify-center gap-6 mt-8",children:[{value:"10,000+",label:"Happy Users"},{value:"4.9 ★",label:"Average Rating"},{value:"98%",label:"Reunion Rate"},{value:"50+ Cities",label:"Across India"}].map(e=>r.jsxs("div",{className:"text-center",children:[r.jsx("p",{className:"text-2xl font-black",style:{color:"#0057b8"},children:e.value}),r.jsx("p",{className:"text-xs font-semibold text-slate-500 uppercase tracking-wide",children:e.label})]},e.label))})]}),r.jsx("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:ex.map((e,t)=>r.jsx(rx,{t:e},t))})]})})}function ix(){return r.jsx(r.Fragment,{children:r.jsx(nx,{})})}function sx(){return r.jsxs("svg",{viewBox:"0 0 280 280",className:"w-52 h-52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("ellipse",{cx:"140",cy:"180",rx:"90",ry:"30",fill:"#2ebd3a",fillOpacity:"0.18"}),r.jsx("path",{d:"M140 240 C100 220 68 185 68 145 L68 82 L140 55 L212 82 L212 145 C212 185 180 220 140 240Z",fill:"#0B2545",fillOpacity:"0.25",transform:"translate(4,6)"}),r.jsx("path",{d:"M140 232 C100 212 68 177 68 137 L68 74 L140 47 L212 74 L212 137 C212 177 180 212 140 232Z",fill:"url(#shieldGrad)",stroke:"#0B2545",strokeWidth:"1.5"}),r.jsx("path",{d:"M140 210 C108 193 88 164 88 134 L88 88 L140 66 L192 88 L192 134 C192 164 172 193 140 210Z",fill:"url(#shieldInner)",opacity:"0.6"}),Array.from({length:6},(e,t)=>Array.from({length:6},(n,i)=>{const s=108+i*13,a=80+t*13,o=Math.random()>.4?.5:.15;return r.jsx("rect",{x:s,y:a,width:"8",height:"8",rx:"1.5",fill:"white",fillOpacity:o},`${t}-${i}`)})),r.jsx("circle",{cx:"168",cy:"158",r:"22",fill:"#2ebd3a",stroke:"white",strokeWidth:"2.5"}),r.jsx("circle",{cx:"168",cy:"158",r:"18",fill:"#2ebd3a"}),r.jsx("path",{d:"M158 158 L164 164 L178 150",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"140",cy:"30",r:"5",fill:"#4bd557",fillOpacity:"0.7"}),r.jsx("circle",{cx:"228",cy:"100",r:"4",fill:"#7ded88",fillOpacity:"0.6"}),r.jsx("circle",{cx:"210",cy:"210",r:"5",fill:"#4bd557",fillOpacity:"0.5"}),r.jsx("circle",{cx:"68",cy:"195",r:"3.5",fill:"#7ded88",fillOpacity:"0.6"}),r.jsx("circle",{cx:"50",cy:"100",r:"4",fill:"#4bd557",fillOpacity:"0.5"}),r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:"shieldGrad",x1:"140",y1:"47",x2:"140",y2:"232",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:"0%",stopColor:"#2ebd3a"}),r.jsx("stop",{offset:"50%",stopColor:"#2ebd3a"}),r.jsx("stop",{offset:"100%",stopColor:"#081c35"})]}),r.jsxs("linearGradient",{id:"shieldInner",x1:"140",y1:"66",x2:"140",y2:"210",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:"0%",stopColor:"white",stopOpacity:"0.25"}),r.jsx("stop",{offset:"100%",stopColor:"white",stopOpacity:"0"})]})]})]})}const ax=[{icon:G1,label:"Enterprise Security",desc:"End-to-end protection for your ecosystem",tags:"Secure • Reliable • Robust",tagColor:"#2ebd3a"},{icon:Ee,label:"Lightning Fast",desc:"Instant AI scanning & verification",tags:"Real-time • Accurate • Fast",tagColor:"#d97706"},{icon:mg,label:"Role-Based Access",desc:"Granular permissions with 4 user roles",tags:"Flexible • Controlled • Safe",tagColor:"#7c3aed"},{icon:$1,label:"Cloud Scalability",desc:"Reliable, secure & always available",tags:"Scalable • Global • Always On",tagColor:"#0ea5e9"}];function ox(){const[e,t]=x.useState(!1),[n,i]=x.useState(""),[s,a]=x.useState(""),[o,d]=x.useState(!1),[l,c]=x.useState({}),f=()=>{const h={};return n.trim()||(h.username="Username is required"),s?s.length<6&&(h.password="Password must be at least 6 characters"):h.password="Password is required",h},u=h=>{h.preventDefault();const b=f();if(Object.keys(b).length){c(b);return}c({}),d(!0),setTimeout(()=>d(!1),1800)};return r.jsxs("div",{className:"min-h-screen flex font-sans",style:{fontFamily:"'DM Sans', 'Helvetica Neue', sans-serif"},children:[r.jsxs("div",{className:"hidden lg:flex lg:w-[55%] flex-col p-10 relative overflow-hidden",style:{background:"linear-gradient(160deg, #f8fafc 0%, #e8f8eb 40%, #e8f8eb 100%)"},children:[r.jsx("div",{className:"absolute inset-0 opacity-40",style:{backgroundImage:"radial-gradient(circle, #7ded88 1px, transparent 1px)",backgroundSize:"28px 28px"}}),r.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}),r.jsx("div",{className:"absolute top-20 right-20 w-80 h-80 rounded-full opacity-30",style:{background:"radial-gradient(circle, #4bd557, transparent 70%)"}}),r.jsx("div",{className:"absolute bottom-10 left-10 w-60 h-60 rounded-full opacity-20",style:{background:"radial-gradient(circle, #2ebd3a, transparent 70%)"}}),r.jsxs("div",{className:"relative z-10 flex items-center gap-3",children:[r.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center shadow-md",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)"},children:r.jsx(ke,{className:"w-5 h-5 text-white"})}),r.jsxs("div",{children:[r.jsx("span",{className:"font-black text-lg text-gray-900 tracking-tight leading-none block",children:"Scan for Safe"}),r.jsx("span",{className:"text-[10px] text-green-700 font-semibold tracking-widest uppercase",children:"Product Protection Platform"})]})]}),r.jsx("div",{className:"relative z-10 mt-6",children:r.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-300 bg-white/60 backdrop-blur-sm text-xs font-bold text-green-800 tracking-widest uppercase shadow-sm",children:[r.jsx(fg,{className:"w-3.5 h-3.5 text-green-600"}),"AI Powered · Trusted · Secure"]})}),r.jsxs("div",{className:"relative z-10 mt-8 flex gap-8 items-start",children:[r.jsxs("div",{className:"flex-1",children:[r.jsxs("h2",{className:"text-4xl font-black text-gray-900 leading-tight tracking-tight",children:["Smart Product",r.jsx("br",{}),"Safety &"," ",r.jsx("span",{style:{color:"#2ebd3a"},children:"Authentication"})]}),r.jsx("p",{className:"text-gray-600 text-sm mt-4 leading-relaxed max-w-xs font-medium",children:"AI-driven verification, counterfeit detection, and real-time monitoring to protect your products, customers, and brand integrity."})]}),r.jsx("div",{className:"flex-shrink-0 mt-[-12px]",children:r.jsx(sx,{})})]}),r.jsx("div",{className:"relative z-10 mt-6 grid grid-cols-2 gap-4",children:ax.map(({icon:h,label:b,desc:v,tags:w,tagColor:y})=>r.jsxs("div",{className:"bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl p-4 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-200",children:[r.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center mb-3",style:{background:`${y}18`,border:`1px solid ${y}30`},children:r.jsx(h,{className:"w-4 h-4",style:{color:y}})}),r.jsx("p",{className:"text-gray-900 text-sm font-black leading-tight",children:b}),r.jsx("p",{className:"text-gray-500 text-[11px] mt-1 leading-snug",children:v}),r.jsx("p",{className:"text-[10px] font-bold mt-2",style:{color:y},children:w})]},b))})]}),r.jsxs("div",{className:"w-full lg:w-[45%] flex flex-col justify-center items-center px-8 sm:px-14 py-12 bg-white relative",children:[r.jsxs("div",{className:"lg:hidden flex items-center gap-2 mb-10",children:[r.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)"},children:r.jsx(ke,{className:"w-5 h-5 text-white"})}),r.jsx("span",{className:"font-black text-xl text-gray-900",children:"Scan for Safe"})]}),r.jsxs("div",{className:"w-full max-w-sm",children:[r.jsxs("div",{className:"mb-8",children:[r.jsxs("h1",{className:"text-4xl font-black text-gray-900 tracking-tight leading-tight",children:["Welcome ",r.jsx("span",{style:{color:"#2ebd3a"},children:"Back!"})]}),r.jsx("p",{className:"text-gray-500 text-sm mt-2 font-medium",children:"Sign in to continue to your dashboard"})]}),r.jsxs("form",{onSubmit:u,noValidate:!0,className:"space-y-5",children:[r.jsxs("div",{children:[r.jsx("label",{className:"block text-[11px] font-black text-gray-700 tracking-widest uppercase mb-2",children:"Username"}),r.jsxs("div",{className:"relative",children:[r.jsx(Oi,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),r.jsx("input",{type:"text",value:n,onChange:h=>{i(h.target.value),c(b=>({...b,username:""}))},placeholder:"Enter your username",className:`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 ${l.username?"border-red-300 focus:ring-red-100":"border-gray-200 focus:border-green-400 focus:ring-green-50"}`})]}),l.username&&r.jsx("p",{className:"text-red-500 text-[11px] font-semibold mt-1.5 ml-1",children:l.username})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("label",{className:"block text-[11px] font-black text-gray-700 tracking-widest uppercase",children:"Password"}),r.jsx(Ze,{to:"/forgot-password",className:"text-xs font-bold hover:underline",style:{color:"#2ebd3a"},children:"Forgot password?"})]}),r.jsxs("div",{className:"relative",children:[r.jsx(Qt,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),r.jsx("input",{type:e?"text":"password",value:s,onChange:h=>{a(h.target.value),c(b=>({...b,password:""}))},placeholder:"Enter your password",className:`w-full pl-10 pr-11 py-3.5 rounded-xl border text-sm font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 ${l.password?"border-red-300 focus:ring-red-100":"border-gray-200 focus:border-green-400 focus:ring-green-50"}`}),r.jsx("button",{type:"button",onClick:()=>t(!e),className:"absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors","aria-label":e?"Hide password":"Show password",children:e?r.jsx(Y1,{className:"w-4 h-4"}):r.jsx(q1,{className:"w-4 h-4"})})]}),l.password&&r.jsx("p",{className:"text-red-500 text-[11px] font-semibold mt-1.5 ml-1",children:l.password})]}),r.jsx("button",{type:"submit",disabled:o,className:"w-full py-4 rounded-xl text-white font-black text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed mt-1",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)",boxShadow:"0 10px 28px rgba(46, 189, 58,.28)"},children:o?r.jsxs(r.Fragment,{children:[r.jsxs("svg",{className:"animate-spin w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",children:[r.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),r.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"})]}),"Signing in…"]}):r.jsxs(r.Fragment,{children:["Access Dashboard",r.jsx(Fo,{className:"w-4 h-4"})]})}),r.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-400 text-[11px] font-semibold",children:[r.jsx(Qt,{className:"w-3.5 h-3.5"}),"Your data is encrypted and secure"]})]}),r.jsxs("p",{className:"text-center text-xs text-gray-500 font-medium mt-8",children:["Don't have an account?"," ",r.jsx(Ze,{to:"/register",className:"font-black hover:underline",style:{color:"#2ebd3a"},children:"Get started free →"})]})]})]})]})}function lx(){const e=er(),[t,n]=x.useState(!1),[i,s]=x.useState(!1),a=x.useRef(null),[o,d]=x.useState({email:"",name:"",mobile:"",address:"",city:"",pinCode:"",qrType:[],emergencyName:"",emergencyMobile:"",referredBy:"",referralMobile:"",declaration:!1,password:"",confirmPassword:""}),[l,c]=x.useState({}),f=[{value:"Car",label:"Car",icon:r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}),r.jsx("circle",{cx:"7",cy:"17",r:"2"}),r.jsx("path",{d:"M9 17h6"}),r.jsx("circle",{cx:"17",cy:"17",r:"2"})]})},{value:"Bike / Scooty",label:"Bike / Scooty",icon:r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"5",cy:"18",r:"3"}),r.jsx("circle",{cx:"19",cy:"18",r:"3"}),r.jsx("path",{d:"M12 18V12l-3-4M19 18l-4-6h-3"}),r.jsx("path",{d:"M12 8h5M17 8l-1-3"})]})},{value:"Cycle / Bicycle",label:"Cycle",icon:r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"5.5",cy:"17.5",r:"2.5"}),r.jsx("circle",{cx:"18.5",cy:"17.5",r:"2.5"}),r.jsx("path",{d:"M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5L8.5 12H15L12 17.5zM12 12h3L18.5 17.5M8.5 12L5.5 17.5M12 12V7l-3-1"})]})},{value:"Truck / Commercial Vehicle",label:"Truck",icon:r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"1",y:"3",width:"15",height:"13",rx:"2",ry:"2"}),r.jsx("polygon",{points:"16 8 20 8 23 11 23 16 16 16 16 8"}),r.jsx("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),r.jsx("circle",{cx:"18.5",cy:"18.5",r:"2.5"})]})},{value:"Auto Rickshaw",label:"Auto Rickshaw",icon:r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"18",r:"3"}),r.jsx("circle",{cx:"5",cy:"10",r:"2"}),r.jsx("circle",{cx:"19",cy:"10",r:"2"}),r.jsx("path",{d:"M5 10h14v4H5z"}),r.jsx("path",{d:"M12 14v4"})]})},{value:"Senior citizen",label:"Senior citizen",icon:r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),r.jsx("circle",{cx:"9",cy:"7",r:"4"}),r.jsx("path",{d:"M19 8v6M16 11h6"})]})},{value:"Support needed persons",label:"Support needed",icon:r.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})},{value:"Pets",label:"Pets",icon:r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M4 10c0-3.31 2.69-6 6-6h4c3.31 0 6 2.69 6 6v4a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-4z"}),r.jsx("path",{d:"M4 10 C3 7 1 6 2 4 C3 2 5 4 6 6"}),r.jsx("path",{d:"M20 10 C21 7 23 6 22 4 C21 2 19 4 18 6"}),r.jsx("circle",{cx:"9",cy:"11",r:"1",fill:"currentColor"}),r.jsx("circle",{cx:"15",cy:"11",r:"1",fill:"currentColor"}),r.jsx("ellipse",{cx:"12",cy:"14",rx:"1.5",ry:"1",fill:"currentColor"}),r.jsx("path",{d:"M10.5 15.5 Q12 17 13.5 15.5"})]})},{value:"School kids",label:"School kids",icon:r.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}),r.jsx("path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}),r.jsx("path",{d:"M8 11h8M8 15h8"})]})}],u=(y,g)=>{d(p=>({...p,[y]:g})),l[y]&&c(p=>{const m={...p};return delete m[y],m})},h=y=>{let g=Array.isArray(o.qrType)?[...o.qrType]:[];g.includes(y)?g=g.filter(p=>p!==y):g.push(y),u("qrType",g),g.length>0&&l.qrType&&c(p=>{const m={...p};return delete m.qrType,m})},b=()=>{const y={};return o.name.trim()||(y.name="Full Name is required"),o.email.trim()?/\S+@\S+\.\S+/.test(o.email)||(y.email="Invalid email"):y.email="Email is required",o.mobile.trim()?/^\d{10}$/.test(o.mobile)||(y.mobile="Must be 10 digits"):y.mobile="Mobile Number is required",o.address.trim()||(y.address="Address is required"),o.city.trim()||(y.city="City is required"),o.pinCode.trim()||(y.pinCode="PIN Code is required"),(!o.qrType||o.qrType.length===0)&&(y.qrType="Please select at least one tag type"),o.emergencyName.trim()||(y.emergencyName="Emergency Name is required"),o.emergencyMobile.trim()?/^\d{10}$/.test(o.emergencyMobile)||(y.emergencyMobile="Must be 10 digits"):y.emergencyMobile="Emergency Phone is required",o.password?o.password.length<6&&(y.password="Password must be at least 6 characters"):y.password="Password is required",o.confirmPassword?o.password!==o.confirmPassword&&(y.confirmPassword="Passwords do not match"):y.confirmPassword="Confirm password is required",o.declaration||(y.declaration="Consent is required"),c(y),Object.keys(y).length===0},v=y=>{if(!b()){y.preventDefault();return}setTimeout(()=>{s(!0)},10)},w=()=>{i&&(s(!1),n(!0),window.scrollTo({top:0,behavior:"smooth"}))};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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

        .pr-main {
          padding: 30px 40px;
          display: flex; flex-direction: column; justify-content: space-between;
        }

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

        /* ── MULTI-SELECT QR TYPE GRID ── */
        .pr-qr-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          gap: 10px;
          margin-top: 6px;
        }
        .pr-qr-item {
          border: 1.5px solid #e2e8f0; border-radius: 12px;
          padding: 8px 4px; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 5px;
          cursor: pointer; background: #f8fafc; transition: all 0.22s ease;
          color: #475569;
          position: relative;
          user-select: none;
        }
        .pr-qr-item:hover {
          border-color: #86efac; transform: translateY(-1.5px);
          color: #0B2545; background: #f0fdf4;
        }
        /* ✅ FIXED: uses .selected for multi-select */
        .pr-qr-item.selected {
          border-color: #16a34a; background: rgba(22, 163, 74, 0.06);
          color: #16a34a;
          box-shadow: 0 3px 10px rgba(22, 163, 74, 0.12);
        }
        /* Small checkmark badge on selected items */
        .pr-qr-item.selected::after {
          content: "✓";
          position: absolute;
          top: 4px; right: 6px;
          font-size: 9px; font-weight: 900;
          color: #16a34a;
          line-height: 1;
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

        /* Multi-select hint label */
        .pr-multiselect-hint {
          font-size: 10px; color: #6b7280; font-weight: 500;
          margin-bottom: 4px; margin-top: 2px;
          display: flex; align-items: center; gap: 4px;
        }

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

        @media (max-width: 900px) {
          .pr-grid-fields { grid-template-columns: repeat(2, 1fr); }
          .pr-span-3-desktop { grid-column: span 2; }
          .pr-span-4-desktop { grid-column: span 2; }
          .pr-span-2-desktop { grid-column: span 2; }
        }
        @media (max-width: 520px) {
          .pr-grid-fields { grid-template-columns: 1fr; gap: 12px; }
          .pr-span-3-desktop { grid-column: span 1; }
          .pr-span-4-desktop { grid-column: span 1; }
          .pr-span-2-desktop { grid-column: span 1; }
          .pr-main { padding: 24px 16px; }
        }
      `}),r.jsx("div",{className:"pr-page",children:r.jsx("div",{className:"pr-card",children:r.jsx("div",{className:"pr-main",children:t?r.jsxs("div",{className:"pr-success sfs-hiw-fade-in",children:[r.jsx("div",{className:"pr-success-icon",children:r.jsx("svg",{viewBox:"0 0 24 24",width:"32",height:"32",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})})}),r.jsx("h2",{children:"Registration Confirmed!"}),r.jsxs("p",{children:["Thank you, ",r.jsx("strong",{children:o.name}),", for joining India's smartest safety platform! ",r.jsx("br",{}),"Your details have been securely logged in our pre-registration system."]}),r.jsxs("div",{className:"pr-offer-box",children:[r.jsx("div",{className:"pr-offer-badge",children:"Discount Code Unlocked"}),r.jsx("div",{style:{fontSize:11,color:"#64748b",fontWeight:700},children:"🎁 EARLY BIRD OFFER APPLIED"}),r.jsx("div",{className:"pr-offer-code",children:"SFS20OFF"}),r.jsxs("div",{style:{fontSize:11,color:"#16a34a",fontWeight:700},children:["₹20 OFF credit has been mapped to ",o.mobile]})]}),r.jsx("div",{style:{fontSize:12,color:"#64748b",lineHeight:1.7,marginBottom:28},children:"📞 Support: +91 86393 22479  |  ✉ customercare@scanforsafe.com"}),r.jsx("button",{className:"pr-btn-home",onClick:()=>e("/"),children:"Back to Home Page"})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"pr-form-header",children:[r.jsx("div",{className:"pr-header-badge",children:"🔒 Secure Pre-Registration"}),r.jsx("h2",{className:"pr-form-title",children:"Join ScanForSafe Early Bird Campaign"}),r.jsxs("p",{className:"pr-form-subtitle",children:["Get an exclusive ",r.jsx("span",{className:"pr-green-text",children:"₹20 instant discount code"})," and protect your family, vehicles, and loved ones with India's smartest QR safety platform."]})]}),r.jsx("iframe",{name:"hidden_iframe",id:"hidden_iframe",ref:a,style:{display:"none"},onLoad:w}),r.jsxs("form",{action:"https://docs.google.com/forms/d/e/1FAIpQLSd9A7Dl1-VyVYOpzuSFH1dy_vWdsYBxjFUqh6h3LpmicZwKRg/formResponse",method:"POST",target:"hidden_iframe",onSubmit:v,children:[r.jsxs("div",{className:"pr-section-title",children:[r.jsx("span",{className:"pr-sec-num",children:"01"})," Contact & Shipping Details"]}),r.jsxs("div",{className:"pr-grid-fields",style:{marginBottom:20},children:[r.jsxs("div",{className:"pr-group",children:[r.jsx("label",{className:"pr-label",children:"Full Name *"}),r.jsx("input",{type:"text",name:"entry.13820436",className:"pr-input",placeholder:"Enter your full name",value:o.name,onChange:y=>u("name",y.target.value),required:!0}),l.name&&r.jsxs("span",{className:"pr-error",children:[r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),l.name]})]}),r.jsxs("div",{className:"pr-group",children:[r.jsx("label",{className:"pr-label",children:"Mobile Number *"}),r.jsx("input",{type:"tel",name:"entry.975997504",className:"pr-input",placeholder:"10-digit Mobile Number",value:o.mobile,onChange:y=>u("mobile",y.target.value),maxLength:10,required:!0}),l.mobile&&r.jsxs("span",{className:"pr-error",children:[r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),l.mobile]})]}),r.jsxs("div",{className:"pr-group",children:[r.jsx("label",{className:"pr-label",children:"Email Address *"}),r.jsx("input",{type:"email",name:"emailAddress",className:"pr-input",placeholder:"yourname@domain.com",value:o.email,onChange:y=>u("email",y.target.value),required:!0}),l.email&&r.jsxs("span",{className:"pr-error",children:[r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),l.email]})]}),r.jsxs("div",{className:"pr-group",children:[r.jsx("label",{className:"pr-label",children:"City *"}),r.jsx("input",{type:"text",name:"entry.757584940",className:"pr-input",placeholder:"e.g. Hyderabad",value:o.city,onChange:y=>u("city",y.target.value),required:!0}),l.city&&r.jsxs("span",{className:"pr-error",children:[r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),l.city]})]}),r.jsxs("div",{className:"pr-group pr-span-3-desktop",children:[r.jsx("label",{className:"pr-label",children:"Full Shipping Address *"}),r.jsx("textarea",{name:"entry.761001486",className:"pr-input pr-textarea",placeholder:"Door No., Street name, Area / Locality",value:o.address,onChange:y=>u("address",y.target.value),required:!0}),l.address&&r.jsxs("span",{className:"pr-error",children:[r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),l.address]})]}),r.jsxs("div",{className:"pr-group",children:[r.jsx("label",{className:"pr-label",children:"PIN Code *"}),r.jsx("input",{type:"text",name:"entry.459245871",className:"pr-input",placeholder:"6-digit PIN code",value:o.pinCode,onChange:y=>u("pinCode",y.target.value),maxLength:6,required:!0}),l.pinCode&&r.jsxs("span",{className:"pr-error",children:[r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),l.pinCode]})]}),r.jsxs("div",{className:"pr-group pr-span-4-desktop",children:[r.jsx("label",{className:"pr-label",style:{marginBottom:2},children:"Select QR Visual Tag Type *"}),r.jsxs("div",{className:"pr-multiselect-hint",children:[r.jsxs("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[r.jsx("polyline",{points:"9 11 12 14 22 4"}),r.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]}),"You can select multiple options",o.qrType.length>0&&r.jsxs("span",{style:{color:"#16a34a",fontWeight:700},children:[" — ",o.qrType.length," selected"]})]}),r.jsx("input",{type:"hidden",name:"entry.1359574010",value:o.qrType.join(", ")}),r.jsx("div",{className:"pr-qr-grid",children:f.map(y=>r.jsxs("div",{className:`pr-qr-item ${o.qrType.includes(y.value)?"selected":""}`,onClick:()=>h(y.value),children:[r.jsx("span",{className:"pr-qr-icon",children:y.icon}),r.jsx("span",{className:"pr-qr-name",children:y.label})]},y.value))}),l.qrType&&r.jsxs("span",{className:"pr-error",children:[r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),l.qrType]})]})]}),r.jsxs("div",{className:"pr-section-title",children:[r.jsx("span",{className:"pr-sec-num",children:"02"})," Emergency & Referral Details"]}),r.jsxs("div",{className:"pr-grid-fields",children:[r.jsxs("div",{className:"pr-group",children:[r.jsx("label",{className:"pr-label",children:"Emergency Contact Name *"}),r.jsx("input",{type:"text",name:"entry.243129998",className:"pr-input",placeholder:"Emergency contact name",value:o.emergencyName,onChange:y=>u("emergencyName",y.target.value),required:!0}),l.emergencyName&&r.jsxs("span",{className:"pr-error",children:[r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),l.emergencyName]})]}),r.jsxs("div",{className:"pr-group",children:[r.jsx("label",{className:"pr-label",children:"Emergency Contact Phone *"}),r.jsx("input",{type:"tel",name:"entry.1663966446",className:"pr-input",placeholder:"10-digit emergency phone",value:o.emergencyMobile,onChange:y=>u("emergencyMobile",y.target.value),maxLength:10,required:!0}),l.emergencyMobile&&r.jsxs("span",{className:"pr-error",children:[r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),l.emergencyMobile]})]}),r.jsxs("div",{className:"pr-group",children:[r.jsx("label",{className:"pr-label",children:"Who referred you? (Optional)"}),r.jsx("input",{type:"text",name:"entry.1089812369",className:"pr-input",placeholder:"Referrer's name",value:o.referredBy,onChange:y=>u("referredBy",y.target.value)})]}),r.jsxs("div",{className:"pr-group",children:[r.jsx("label",{className:"pr-label",children:"Referral Contact Number (Optional)"}),r.jsx("input",{type:"tel",name:"entry.1221855533",className:"pr-input",placeholder:"Referrer's phone",value:o.referralMobile,onChange:y=>u("referralMobile",y.target.value),maxLength:10})]}),r.jsxs("div",{className:"pr-group pr-span-2-desktop",style:{marginTop:6},children:[r.jsx("input",{type:"hidden",name:"entry.2049827878",value:o.declaration?"I confirm that the details provided are correct and I consent to being contacted by ScanForSafe for order confirmation and activation.":""}),r.jsxs("div",{className:`pr-dec-box ${o.declaration?"checked":""}`,onClick:()=>u("declaration",!o.declaration),children:[r.jsx("div",{className:"pr-dec-check",children:o.declaration&&r.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"4",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})})}),r.jsx("div",{className:"pr-dec-text",children:"I confirm that the details provided are correct and I consent to being contacted by ScanForSafe for order confirmation and activation. *"})]}),l.declaration&&r.jsxs("span",{className:"pr-error",children:[r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),l.declaration]})]}),r.jsx("div",{className:"pr-group",style:{marginTop:6,justifyContent:"center"},children:r.jsx("button",{type:"button",className:"pr-btn-prev",onClick:()=>e("/"),style:{width:"100%",height:"46px"},children:"Cancel"})}),r.jsx("div",{className:"pr-group",style:{marginTop:6,justifyContent:"center"},children:r.jsx("button",{type:"submit",className:"pr-btn-submit",disabled:i,style:{width:"100%",height:"46px"},children:i?"Registering...":"Confirm & Pre-Register ✔"})})]})]})]})})})})]})}function dx(e=.12){const t=x.useRef(null),[n,i]=x.useState(!1);return x.useEffect(()=>{const s=new IntersectionObserver(([a])=>{a.isIntersecting&&i(!0)},{threshold:e});return t.current&&s.observe(t.current),()=>s.disconnect()},[e]),[t,n]}function cx(e,t=1800,n=!1){const[i,s]=x.useState(0);return x.useEffect(()=>{if(!n)return;let a=null;const o=d=>{a||(a=d);const l=Math.min((d-a)/t,1),c=1-Math.pow(1-l,3);s(Math.floor(c*e)),l<1&&requestAnimationFrame(o)};requestAnimationFrame(o)},[n,e,t]),i}function ti({num:e,suffix:t,label:n,active:i,delay:s}){const a=cx(e,1600,i);return r.jsxs("div",{style:{textAlign:"center",opacity:i?1:0,transform:i?"translateY(0)":"translateY(20px)",transition:`opacity .6s ease ${s}s, transform .6s ease ${s}s`},children:[r.jsxs("div",{style:{fontFamily:"'Clash Display', 'Cabinet Grotesk', sans-serif",fontSize:28,fontWeight:800,color:"#fff",lineHeight:1,letterSpacing:"-0.04em"},children:[a,t]}),r.jsx("div",{style:{fontSize:11,color:"rgba(186,230,253,0.75)",fontWeight:600,marginTop:4,letterSpacing:".06em",textTransform:"uppercase"},children:n})]})}function ux({icon:e,title:t,description:n,color:i,bg:s,borderColor:a,index:o}){const[d,l]=x.useState(!1),[c,f]=x.useState(!1),u=c||d;return r.jsxs("div",{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onClick:()=>f(h=>!h),style:{position:"relative",borderRadius:16,border:u?`2px solid ${i}`:`2px solid ${a}`,background:"#ffffff",padding:"22px 20px 28px",overflow:"hidden",transition:"border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease, transform 0.25s cubic-bezier(0.34,1.3,0.64,1)",transform:u?"translateY(-4px)":"translateY(0)",boxShadow:u?`0 8px 24px ${i}20, 0 2px 8px rgba(0,0,0,0.06)`:"0 1px 4px rgba(0,0,0,0.04)",cursor:"pointer"},children:[r.jsx("div",{style:{position:"absolute",bottom:0,left:20,right:20,height:3,borderRadius:"3px 3px 0 0",background:i,opacity:u?1:.35,transition:"opacity 0.22s ease"}}),r.jsx("div",{className:"fr-benefit-icon-box",style:{width:48,height:48,borderRadius:12,background:s,color:i,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16},children:x.cloneElement(e,{color:i})}),r.jsx("h3",{style:{fontFamily:"'Sora', sans-serif",fontSize:16,fontWeight:800,color:"#0B2545",marginBottom:8,letterSpacing:"-0.01em",lineHeight:1.25},children:t}),r.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:12.5,fontWeight:500,color:"#374151",lineHeight:1.65},children:n})]})}function px(){const e=er(),[t,n]=x.useState(!1),[i,s]=x.useState(!1),[a,o]=x.useState(""),[d,l]=x.useState({}),[c,f]=x.useState(!1),[u,h]=dx(.3);x.useEffect(()=>{const j=setTimeout(()=>f(!0),80);return()=>clearTimeout(j)},[]);const[b,v]=x.useState({name:"",email:"",mobile:"",city:"",state:"",investment:"100000",experience:"None",shopAvailable:"No",message:""}),w={5e4:{tierName:"Silver Partner",minInvestment:"₹50,000",margins:"10%",pincodes:"2 Pincodes",inventory:"200 Safety Tags",marketingSupport:"Basic Digital Flyers & Social Media Kit",potentialRoi:"₹5000 / month"},1e5:{tierName:"Gold Partner",minInvestment:"₹1,00,000",margins:"20%",pincodes:"4 Pincodes (Exclusive)",inventory:"500 Safety Tags",marketingSupport:"Brochures, Banners, Digital Ads Support",potentialRoi:"₹20,000 / month"},3e5:{tierName:"Platinum Master Franchise",minInvestment:"₹3,00,000+",margins:"30%",pincodes:"Entire City / District",inventory:"1500 Safety Tags + NFC Cards",marketingSupport:"Full Local Ad Campaigns, Store Signage, Dedicated Account Manager",potentialRoi:"₹90,000 / month"}},y=(j,N)=>{v(M=>({...M,[j]:N})),d[j]&&l(M=>{const B={...M};return delete B[j],B})},g=()=>{const j={};return b.name.trim()||(j.name="Full Name is required"),b.email.trim()?/\S+@\S+\.\S+/.test(b.email)||(j.email="Invalid email address"):j.email="Email Address is required",b.mobile.trim()?/^\d{10}$/.test(b.mobile)||(j.mobile="Must be a 10-digit number"):j.mobile="WhatsApp Number is required",b.city.trim()||(j.city="City is required"),b.state.trim()||(j.state="State is required"),l(j),Object.keys(j).length===0},p=j=>{j.preventDefault(),g()&&(s(!0),setTimeout(()=>{const N="SFS-FRANCHISE-"+Math.floor(1e3+Math.random()*9e3);o(N),s(!1),n(!0),window.scrollTo({top:0,behavior:"smooth"})},1200))},m=w[b.investment]||w[1e5],k=[{icon:r.jsx(gg,{size:20}),title:"High ROI Model",description:"Earn up to 10% - 30% profit margin on physical QR visual safety tags & smart NFC cards distributed in your region.",color:"#16a34a",bg:"#e8f8eb",borderColor:"#bbf7d0"},{icon:r.jsx(xt,{size:20}),title:"Exclusive Territory",description:"Secure exclusive ownership rights for dedicated pincodes. Zero local brand competition.",color:"#0891b2",bg:"#ecfeff",borderColor:"#bae6fd"},{icon:r.jsx(Z1,{size:20}),title:"Innovative Tech",description:"India's leading cloud network mapping QR codes for vehicle safety, senior citizens, children, and pets.",color:"#7c3aed",bg:"#f5f3ff",borderColor:"#ddd6fe"},{icon:r.jsx(Wa,{size:20}),title:"Marketing Support",description:"Receive complete physical branding collaterals, digital flyers, and targeted local ad campaign execution.",color:"#f97316",bg:"#fff7ed",borderColor:"#fed7aa"}];return r.jsxs(r.Fragment,{children:[r.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Fira+Code:wght@400;500&family=Outfit:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap",rel:"stylesheet"}),r.jsx("style",{children:`
        .fr-page {
          font-family: 'Space Grotesk', sans-serif;
          min-height: 100vh;
          background: #f1f5f9;
          padding-top: 80px;
          overflow-x: hidden;
        }

        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(18px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

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

        .fr-section {
          padding: 20px 24px;
          max-width: 1240px;
          margin: 0 auto;
        }

        .fr-grid-split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: start;
        }

        .fr-benefits-title {
          font-family: 'Outfit', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .fr-benefits-subtitle {
          font-size: 13px;
          color: #64748b;
          margin-bottom: 22px;
          font-weight: 500;
          line-height: 1.5;
        }

        .fr-benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

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

        .fr-calc-label { color: #94a3b8; font-weight: 500; }
        .fr-calc-value { color: #e2e8f0; font-weight: 700; text-align: right; }
        .fr-roi-badge {
          background: rgba(34, 197, 94, 0.12);
          color: #4ade80;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 800;
        }

        .fr-form-card {
          background: white;
          border: 1px solid #e8edf3;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0, 20, 60, 0.02), 0 30px 60px rgba(0, 20, 60, 0.04);
        }

        .fr-form-head { margin-bottom: 24px; }

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

        .fr-textarea { resize: none; height: 60px; }

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

        .fr-btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }

        .fr-success { text-align: center; padding: 30px 10px; }

        .fr-success-icon {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: #dcfce7;
          border: 3px solid #16a34a;
          display: flex; align-items: center; justify-content: center;
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
          font-size: 26px; font-weight: 900;
          color: #0f172a; margin-bottom: 8px;
        }

        .fr-success p { font-size: 13.5px; color: #4b5563; line-height: 1.6; margin-bottom: 24px; }

        .fr-success-ticket {
          background: linear-gradient(135deg, rgba(22, 163, 74, 0.08) 0%, rgba(0, 136, 255, 0.04) 100%);
          border: 1.5px dashed #16a34a;
          border-radius: 14px;
          padding: 18px; margin-bottom: 24px;
          max-width: 440px;
          margin-left: auto; margin-right: auto;
        }

        .fr-ticket-code {
          font-family: 'Fira Code', monospace;
          font-size: 20px; font-weight: 700;
          color: #0f172a; margin-top: 4px;
          letter-spacing: 1px;
        }

        .fr-btn-home {
          padding: 12px 24px; border-radius: 8px; border: none;
          background: #0f172a; color: white;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px; font-weight: 700;
          cursor: pointer; transition: all 0.22s ease;
        }

        .fr-btn-home:hover { background: #1e293b; transform: translateY(-1px); }

        .fr-stats-counter {
          display: flex; align-items: center; justify-content: center;
          gap: 48px; padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .fr-stats-divider { width: 1px; height: 32px; background: rgba(255,255,255,0.1); }

        @media (max-width: 900px) {
          .fr-grid-split { grid-template-columns: 1fr; gap: 30px; }
        }
        @media (max-width: 768px) {
          .fr-stats-counter {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
            justify-items: center;
          }
          .fr-stats-divider { display: none !important; }
        }
        @media (max-width: 580px) {
          .fr-benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .fr-benefits-grid > div {
            padding: 14px 10px 18px !important;
            border-radius: 12px !important;
          }
          .fr-benefits-grid h3 {
            font-size: 13.5px !important;
            margin-bottom: 4px !important;
          }
          .fr-benefits-grid p {
            font-size: 10.5px !important;
            line-height: 1.4 !important;
          }
          .fr-benefits-grid svg {
            width: 18px !important;
            height: 18px !important;
          }
          .fr-benefit-icon-box {
            width: 36px !important;
            height: 36px !important;
            border-radius: 8px !important;
            margin-bottom: 10px !important;
          }
          .fr-form-card { padding: 24px 18px; }
        }
      `}),r.jsxs("div",{className:"fr-page",children:[r.jsxs("section",{style:{position:"relative",overflow:"hidden",minHeight:520,paddingTop:10,paddingBottom:40,background:"linear-gradient(150deg, #020c1b 0%, #0a1f44 40%, #004b23 80%, #16a34a 100%)",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:[r.jsx("div",{style:{position:"absolute",width:560,height:560,borderRadius:"50%",background:"radial-gradient(circle, rgba(34, 197, 94, 0.18) 0%, transparent 65%)",top:-180,right:-120,animation:"orbMove1 14s ease-in-out infinite",pointerEvents:"none"}}),r.jsx("div",{style:{position:"absolute",width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle, rgba(0,87,184,0.30) 0%, transparent 65%)",bottom:-160,left:-100,animation:"orbMove2 18s ease-in-out infinite",pointerEvents:"none"}}),r.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",backgroundSize:"32px 32px"}}),r.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:r.jsx("div",{style:{position:"absolute",left:0,right:0,height:3,background:"linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.0) 15%, rgba(74,222,128,0.9) 50%, rgba(74,222,128,0.0) 85%, transparent 100%)",animation:"scanBeam 4s ease-in-out infinite",filter:"blur(1px)"}})}),r.jsx("div",{style:{position:"absolute",top:70,left:"7%",width:64,height:64,border:"2px solid rgba(74,222,128,0.25)",borderRadius:16,transform:"rotate(15deg)",animation:"floatYSlow 6s ease-in-out infinite",pointerEvents:"none"}}),r.jsx("div",{style:{position:"absolute",bottom:80,right:"8%",width:44,height:44,border:"2px solid rgba(99,179,237,0.2)",borderRadius:"50%",animation:"floatY 5s ease-in-out infinite",pointerEvents:"none"}}),r.jsx("div",{style:{position:"absolute",top:120,right:"18%",width:28,height:28,background:"rgba(74,222,128,0.12)",borderRadius:8,transform:"rotate(30deg)",animation:"floatYSlow 7s ease-in-out .5s infinite",pointerEvents:"none"}}),r.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",padding:"0 24px",maxWidth:720},children:[r.jsxs("h1",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:"clamp(2.2rem, 5vw, 3.8rem)",fontWeight:800,color:"#fff",lineHeight:1.08,letterSpacing:"-0.04em",margin:"0 0 22px",opacity:c?1:0,transform:c?"translateY(0) skewY(0deg)":"translateY(40px) skewY(2deg)",transition:"opacity .75s ease .12s, transform .75s cubic-bezier(.34,1.3,.64,1) .12s"},children:["Own a",r.jsx("br",{}),r.jsx("span",{style:{background:"linear-gradient(90deg, #4bd557 0%, #7ded88 50%, #4bd557 100%)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:c?"glowPulse 3s ease-in-out infinite":"none",display:"inline-block"},children:"ScanForSafe Franchise"})]}),r.jsx("p",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:16,color:"rgba(186,230,253,0.85)",lineHeight:1.7,maxWidth:580,margin:"0 auto 40px",opacity:c?1:0,transform:c?"translateY(0)":"translateY(24px)",transition:"opacity .7s ease .26s, transform .7s ease .26s"},children:"Partner with India's smartest QR-based safety brand. Scale a high-yielding technology business with exclusive territories, high margins, and 100% advertising support."}),r.jsxs("div",{ref:u,className:"fr-stats-counter",children:[r.jsx(ti,{num:30,suffix:"%",label:"Max Profit Margin",active:h,delay:0}),r.jsx("div",{className:"fr-stats-divider"}),r.jsx(ti,{num:12,suffix:" hrs",label:"Approval turnaround",active:h,delay:.15}),r.jsx("div",{className:"fr-stats-divider"}),r.jsx(ti,{num:9e4,suffix:"+",label:"Est. Monthly ROI (₹)",active:h,delay:.3}),r.jsx("div",{className:"fr-stats-divider"}),r.jsx(ti,{num:100,suffix:"%",label:"Exclusive Territory",active:h,delay:.45})]})]}),r.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,pointerEvents:"none"},children:r.jsx("svg",{viewBox:"0 0 1440 72",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:r.jsx("path",{d:"M0,48 C240,80 480,16 720,40 C960,64 1200,24 1440,48 L1440,72 L0,72 Z",fill:"#f1f5f9"})})})]}),r.jsx("section",{className:"fr-section",children:r.jsxs("div",{className:"fr-grid-split",children:[r.jsxs("div",{children:[r.jsxs("h2",{className:"fr-benefits-title",children:[r.jsx(Wa,{style:{color:"#16a34a"}})," Why Partner With Us?"]}),r.jsx("p",{className:"fr-benefits-subtitle",children:"Choose ScanForSafe and unlock a proven safety-tech business model with real territorial advantage."}),r.jsx("div",{className:"fr-benefits-grid",children:k.map((j,N)=>r.jsx(ux,{...j,index:N},j.title))}),r.jsxs("div",{className:"fr-calc-box",children:[r.jsxs("div",{className:"fr-calc-title",children:[r.jsx(H1,{style:{color:"#4ade80",width:18,height:18}})," Investment & ROI Calculator"]}),r.jsx("p",{style:{fontSize:11,color:"#94a3b8"},children:"Select an investment tier to estimate your benefits, exclusive boundaries, and estimated returns:"}),r.jsx("div",{className:"fr-calc-selector",children:[["50000","₹50K (Silver)"],["100000","₹1L (Gold)"],["300000","₹3L+ (Platinum)"]].map(([j,N])=>r.jsx("button",{type:"button",className:`fr-calc-btn ${b.investment===j?"active":""}`,onClick:()=>y("investment",j),children:N},j))}),r.jsxs("div",{className:"fr-calc-results",children:[r.jsxs("div",{className:"fr-calc-row",children:[r.jsx("span",{className:"fr-calc-label",children:"Franchise Tier:"}),r.jsx("span",{className:"fr-calc-value",style:{color:"#4ade80",fontWeight:800},children:m.tierName})]}),r.jsxs("div",{className:"fr-calc-row",children:[r.jsx("span",{className:"fr-calc-label",children:"Profit Margin:"}),r.jsx("span",{className:"fr-calc-value",children:m.margins})]}),r.jsxs("div",{className:"fr-calc-row",children:[r.jsx("span",{className:"fr-calc-label",children:"Pincode Allocation:"}),r.jsx("span",{className:"fr-calc-value",children:m.pincodes})]}),r.jsxs("div",{className:"fr-calc-row",children:[r.jsx("span",{className:"fr-calc-label",children:"Initial Inventory:"}),r.jsx("span",{className:"fr-calc-value",children:m.inventory})]}),r.jsxs("div",{className:"fr-calc-row",children:[r.jsx("span",{className:"fr-calc-label",children:"Marketing Support:"}),r.jsx("span",{className:"fr-calc-value",children:m.marketingSupport})]}),r.jsxs("div",{className:"fr-calc-row",style:{paddingTop:10,marginTop:4,borderTop:"1px dashed rgba(255,255,255,0.15)"},children:[r.jsx("span",{className:"fr-calc-label",style:{color:"white"},children:"Estimated Net Income:"}),r.jsx("span",{className:"fr-roi-badge",children:m.potentialRoi})]})]})]})]}),r.jsx("div",{className:"fr-form-card",children:t?r.jsxs("div",{className:"fr-success",children:[r.jsx("div",{className:"fr-success-icon",children:r.jsx(at,{style:{width:34,height:34}})}),r.jsx("h2",{children:"Application Submitted!"}),r.jsxs("p",{children:["Thank you, ",r.jsx("strong",{children:b.name}),", for your interest in ScanForSafe! ",r.jsx("br",{}),"Your franchise application for ",r.jsxs("strong",{children:[b.city,", ",b.state]})," has been securely logged."]}),r.jsxs("div",{className:"fr-success-ticket",children:[r.jsx("div",{style:{fontSize:10,color:"#64748b",fontWeight:700,textTransform:"uppercase"},children:"🎟️ Application Ticket ID"}),r.jsx("div",{className:"fr-ticket-code",children:a}),r.jsxs("div",{style:{fontSize:11,color:"#16a34a",fontWeight:700,marginTop:6},children:["Our Franchise Manager will reach out on ",b.mobile]})]}),r.jsx("p",{style:{fontSize:11.5,color:"#64748b",lineHeight:1.5},children:"📞 WhatsApp Support: +91 86393 22479  |  ✉ partners@scanforsafe.com"}),r.jsx("button",{className:"fr-btn-home",onClick:()=>e("/"),children:"Back to Homepage"})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"fr-form-head",children:[r.jsx("h2",{className:"fr-form-title",children:"Franchise Application Form"}),r.jsx("p",{className:"fr-form-subtitle",children:"Submit your regional business query below. Our Franchise Manager will contact you shortly."})]}),r.jsxs("form",{onSubmit:p,children:[r.jsxs("div",{className:"fr-group",children:[r.jsx("label",{className:"fr-label",children:"Full Name *"}),r.jsx("input",{type:"text",className:"fr-input",placeholder:"e.g. Rahul Sharma",value:b.name,onChange:j=>y("name",j.target.value),required:!0}),d.name&&r.jsxs("span",{className:"fr-error",children:["⚠️ ",d.name]})]}),r.jsxs("div",{className:"fr-group",children:[r.jsx("label",{className:"fr-label",children:"WhatsApp Number *"}),r.jsx("input",{type:"tel",className:"fr-input",placeholder:"10-digit WhatsApp number",value:b.mobile,onChange:j=>y("mobile",j.target.value),maxLength:10,required:!0}),d.mobile&&r.jsxs("span",{className:"fr-error",children:["⚠️ ",d.mobile]})]}),r.jsxs("div",{className:"fr-group",children:[r.jsx("label",{className:"fr-label",children:"Email Address *"}),r.jsx("input",{type:"email",className:"fr-input",placeholder:"yourname@example.com",value:b.email,onChange:j=>y("email",j.target.value),required:!0}),d.email&&r.jsxs("span",{className:"fr-error",children:["⚠️ ",d.email]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[r.jsxs("div",{className:"fr-group",children:[r.jsx("label",{className:"fr-label",children:"City *"}),r.jsx("input",{type:"text",className:"fr-input",placeholder:"e.g. Hyderabad",value:b.city,onChange:j=>y("city",j.target.value),required:!0}),d.city&&r.jsxs("span",{className:"fr-error",children:["⚠️ ",d.city]})]}),r.jsxs("div",{className:"fr-group",children:[r.jsx("label",{className:"fr-label",children:"State *"}),r.jsx("input",{type:"text",className:"fr-input",placeholder:"e.g. Telangana",value:b.state,onChange:j=>y("state",j.target.value),required:!0}),d.state&&r.jsxs("span",{className:"fr-error",children:["⚠️ ",d.state]})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:"10px"},children:[r.jsxs("div",{className:"fr-group",children:[r.jsx("label",{className:"fr-label",children:"Business Experience"}),r.jsxs("select",{className:"fr-input",value:b.experience,onChange:j=>y("experience",j.target.value),style:{height:"40px"},children:[r.jsx("option",{value:"None",children:"No prior business"}),r.jsx("option",{value:"1-3 Years",children:"1 - 3 Years"}),r.jsx("option",{value:"3+ Years",children:"3+ Years"})]})]}),r.jsxs("div",{className:"fr-group",children:[r.jsx("label",{className:"fr-label",children:"Shop/Office Available?"}),r.jsxs("select",{className:"fr-input",value:b.shopAvailable,onChange:j=>y("shopAvailable",j.target.value),style:{height:"40px"},children:[r.jsx("option",{value:"No",children:"No Space Yet"}),r.jsx("option",{value:"Yes",children:"Yes, I have"})]})]})]}),r.jsxs("div",{className:"fr-group",children:[r.jsx("label",{className:"fr-label",children:"Investment Interest Level (₹)"}),r.jsxs("select",{className:"fr-input",value:b.investment,onChange:j=>y("investment",j.target.value),style:{height:"40px"},children:[r.jsx("option",{value:"50000",children:"₹50,000 (Silver Partner)"}),r.jsx("option",{value:"100000",children:"₹1,00,000 (Gold Partner)"}),r.jsx("option",{value:"300000",children:"₹3,00,000+ (Platinum Master)"})]})]}),r.jsxs("div",{className:"fr-group",children:[r.jsx("label",{className:"fr-label",children:"Message / Territory Details"}),r.jsx("textarea",{className:"fr-input fr-textarea",placeholder:"Mention proposed pincodes or query...",value:b.message,onChange:j=>y("message",j.target.value)})]}),r.jsx("button",{type:"submit",className:"fr-btn-submit",disabled:i,children:i?"Registering Application...":r.jsxs(r.Fragment,{children:[r.jsx(is,{style:{width:14,height:14}})," Apply for Franchise ✔"]})})]})]})})]})})]})]})}function fx(){const e=Pr(),t=e.pathname==="/login",[n,i]=x.useState(!1);return x.useEffect(()=>{window.scrollTo(0,0)},[e.pathname]),x.useEffect(()=>{const s=setTimeout(()=>{i(!0)},600);return()=>clearTimeout(s)},[]),r.jsxs("div",{className:"min-h-screen flex flex-col",children:[!t&&r.jsx(B1,{}),r.jsx("main",{className:"flex-1",children:r.jsxs(w1,{children:[r.jsx(ge,{path:"/",element:r.jsx(gh,{})}),r.jsx(ge,{path:"/features",element:r.jsx(Ah,{})}),r.jsx(ge,{path:"/products",element:r.jsx(Yh,{})}),r.jsx(ge,{path:"/use-cases",element:r.jsx(Zh,{})}),r.jsx(ge,{path:"/how-it-works",element:r.jsx(Jh,{})}),r.jsx(ge,{path:"/testimonials",element:r.jsx(ix,{})}),r.jsx(ge,{path:"/login",element:r.jsx(ox,{})}),r.jsx(ge,{path:"/contact",element:r.jsx(mh,{})}),r.jsx(ge,{path:"/privacy-policy",element:r.jsx(yh,{})}),r.jsx(ge,{path:"/terms",element:r.jsx(bh,{})}),r.jsx(ge,{path:"/qr-form",element:r.jsx(Ch,{})}),r.jsx(ge,{path:"/preregister",element:r.jsx(lx,{})}),r.jsx(ge,{path:"/franchise",element:r.jsx(px,{})})]})}),!t&&r.jsx(zg,{}),!t&&r.jsx(Sh,{}),n&&r.jsxs("div",{onClick:()=>i(!1),style:{position:"fixed",inset:0,background:"rgba(11, 37, 69, 0.70)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",zIndex:999999,display:"flex",alignItems:"center",justifyContent:"center",padding:24,animation:"fadeInOverlay 0.35s ease-out forwards"},children:[r.jsx("style",{children:`
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
          `}),r.jsxs("div",{className:"sfs-popup-card",onClick:s=>s.stopPropagation(),children:[r.jsx("button",{className:"sfs-popup-close",onClick:()=>i(!1),children:"✕"}),r.jsx("img",{src:"/popup.png",alt:"ScanForSafe Announcement",style:{width:"100%",height:"auto",display:"block",maxHeight:"80vh",objectFit:"contain"}})]})]})]})}Os.createRoot(document.getElementById("root")).render(r.jsx(Nd.StrictMode,{children:r.jsx(R1,{children:r.jsx(fx,{})})}));
