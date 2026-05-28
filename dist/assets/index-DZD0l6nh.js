function Tu(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function Fu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zl={exports:{}},Ci={},Jl={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gr=Symbol.for("react.element"),_u=Symbol.for("react.portal"),Ou=Symbol.for("react.fragment"),Wu=Symbol.for("react.strict_mode"),Au=Symbol.for("react.profiler"),Du=Symbol.for("react.provider"),Uu=Symbol.for("react.context"),$u=Symbol.for("react.forward_ref"),Hu=Symbol.for("react.suspense"),Vu=Symbol.for("react.memo"),Yu=Symbol.for("react.lazy"),zo=Symbol.iterator;function Qu(e){return e===null||typeof e!="object"?null:(e=zo&&e[zo]||e["@@iterator"],typeof e=="function"?e:null)}var ec={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tc=Object.assign,nc={};function bn(e,t,n){this.props=e,this.context=t,this.refs=nc,this.updater=n||ec}bn.prototype.isReactComponent={};bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rc(){}rc.prototype=bn.prototype;function Sa(e,t,n){this.props=e,this.context=t,this.refs=nc,this.updater=n||ec}var Ca=Sa.prototype=new rc;Ca.constructor=Sa;tc(Ca,bn.prototype);Ca.isPureReactComponent=!0;var No=Array.isArray,ic=Object.prototype.hasOwnProperty,za={current:null},sc={key:!0,ref:!0,__self:!0,__source:!0};function ac(e,t,n){var r,s={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)ic.call(t,r)&&!sc.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:gr,type:e,key:a,ref:o,props:s,_owner:za.current}}function qu(e,t){return{$$typeof:gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Na(e){return typeof e=="object"&&e!==null&&e.$$typeof===gr}function Xu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Eo=/\/+/g;function Qi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xu(""+e.key):t.toString(36)}function Ar(e,t,n,r,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case gr:case _u:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+Qi(o,0):r,No(s)?(n="",e!=null&&(n=e.replace(Eo,"$&/")+"/"),Ar(s,t,n,"",function(d){return d})):s!=null&&(Na(s)&&(s=qu(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Eo,"$&/")+"/")+e)),t.push(s)),1;if(o=0,r=r===""?".":r+":",No(e))for(var l=0;l<e.length;l++){a=e[l];var c=r+Qi(a,l);o+=Ar(a,t,n,c,s)}else if(c=Qu(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=r+Qi(a,l++),o+=Ar(a,t,n,c,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function jr(e,t,n){if(e==null)return e;var r=[],s=0;return Ar(e,r,"","",function(a){return t.call(n,a,s++)}),r}function Gu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Dr={transition:null},Ku={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Dr,ReactCurrentOwner:za};function oc(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:jr,forEach:function(e,t,n){jr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jr(e,function(){t++}),t},toArray:function(e){return jr(e,function(t){return t})||[]},only:function(e){if(!Na(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=bn;M.Fragment=Ou;M.Profiler=Au;M.PureComponent=Sa;M.StrictMode=Wu;M.Suspense=Hu;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ku;M.act=oc;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tc({},e.props),s=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=za.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)ic.call(t,c)&&!sc.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:gr,type:e.type,key:s,ref:a,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:Uu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Du,_context:e},e.Consumer=e};M.createElement=ac;M.createFactory=function(e){var t=ac.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:$u,render:e}};M.isValidElement=Na;M.lazy=function(e){return{$$typeof:Yu,_payload:{_status:-1,_result:e},_init:Gu}};M.memo=function(e,t){return{$$typeof:Vu,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Dr.transition;Dr.transition={};try{e()}finally{Dr.transition=t}};M.unstable_act=oc;M.useCallback=function(e,t){return de.current.useCallback(e,t)};M.useContext=function(e){return de.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return de.current.useDeferredValue(e)};M.useEffect=function(e,t){return de.current.useEffect(e,t)};M.useId=function(){return de.current.useId()};M.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return de.current.useMemo(e,t)};M.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};M.useRef=function(e){return de.current.useRef(e)};M.useState=function(e){return de.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return de.current.useTransition()};M.version="18.3.1";Jl.exports=M;var v=Jl.exports;const lc=Fu(v),Zu=Tu({__proto__:null,default:lc},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju=v,ef=Symbol.for("react.element"),tf=Symbol.for("react.fragment"),nf=Object.prototype.hasOwnProperty,rf=Ju.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sf={key:!0,ref:!0,__self:!0,__source:!0};function cc(e,t,n){var r,s={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)nf.call(t,r)&&!sf.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:ef,type:e,key:a,ref:o,props:s,_owner:rf.current}}Ci.Fragment=tf;Ci.jsx=cc;Ci.jsxs=cc;Zl.exports=Ci;var i=Zl.exports,Ss={},dc={exports:{}},we={},uc={exports:{}},fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,I){var L=N.length;N.push(I);e:for(;0<L;){var Y=L-1>>>1,Z=N[Y];if(0<s(Z,I))N[Y]=I,N[L]=Z,L=Y;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var I=N[0],L=N.pop();if(L!==I){N[0]=L;e:for(var Y=0,Z=N.length,wr=Z>>>1;Y<wr;){var Ct=2*(Y+1)-1,Yi=N[Ct],zt=Ct+1,kr=N[zt];if(0>s(Yi,L))zt<Z&&0>s(kr,Yi)?(N[Y]=kr,N[zt]=L,Y=zt):(N[Y]=Yi,N[Ct]=L,Y=Ct);else if(zt<Z&&0>s(kr,L))N[Y]=kr,N[zt]=L,Y=zt;else break e}}return I}function s(N,I){var L=N.sortIndex-I.sortIndex;return L!==0?L:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],g=1,p=null,x=3,m=!1,y=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var I=n(d);I!==null;){if(I.callback===null)r(d);else if(I.startTime<=N)r(d),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(d)}}function b(N){if(w=!1,h(N),!y)if(n(c)!==null)y=!0,Hi(S);else{var I=n(d);I!==null&&Vi(b,I.startTime-N)}}function S(N,I){y=!1,w&&(w=!1,f(P),P=-1),m=!0;var L=x;try{for(h(I),p=n(c);p!==null&&(!(p.expirationTime>I)||N&&!Ie());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,x=p.priorityLevel;var Z=Y(p.expirationTime<=I);I=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(c)&&r(c),h(I)}else r(c);p=n(c)}if(p!==null)var wr=!0;else{var Ct=n(d);Ct!==null&&Vi(b,Ct.startTime-I),wr=!1}return wr}finally{p=null,x=L,m=!1}}var E=!1,R=null,P=-1,A=5,B=-1;function Ie(){return!(e.unstable_now()-B<A)}function Cn(){if(R!==null){var N=e.unstable_now();B=N;var I=!0;try{I=R(!0,N)}finally{I?zn():(E=!1,R=null)}}else E=!1}var zn;if(typeof u=="function")zn=function(){u(Cn)};else if(typeof MessageChannel<"u"){var Co=new MessageChannel,Mu=Co.port2;Co.port1.onmessage=Cn,zn=function(){Mu.postMessage(null)}}else zn=function(){j(Cn,0)};function Hi(N){R=N,E||(E=!0,zn())}function Vi(N,I){P=j(function(){N(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,Hi(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(x){case 1:case 2:case 3:var I=3;break;default:I=x}var L=x;x=I;try{return N()}finally{x=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=x;x=N;try{return I()}finally{x=L}},e.unstable_scheduleCallback=function(N,I,L){var Y=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Y+L:Y):L=Y,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,N={id:g++,callback:I,priorityLevel:N,startTime:L,expirationTime:Z,sortIndex:-1},L>Y?(N.sortIndex=L,t(d,N),n(c)===null&&N===n(d)&&(w?(f(P),P=-1):w=!0,Vi(b,L-Y))):(N.sortIndex=Z,t(c,N),y||m||(y=!0,Hi(S))),N},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(N){var I=x;return function(){var L=x;x=I;try{return N.apply(this,arguments)}finally{x=L}}}})(fc);uc.exports=fc;var af=uc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of=v,be=af;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pc=new Set,Xn={};function At(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Xn[e]=t,e=0;e<t.length;e++)pc.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cs=Object.prototype.hasOwnProperty,lf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ro={},Po={};function cf(e){return Cs.call(Po,e)?!0:Cs.call(Ro,e)?!1:lf.test(e)?Po[e]=!0:(Ro[e]=!0,!1)}function df(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uf(e,t,n,r){if(t===null||typeof t>"u"||df(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,s,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ea=/[\-:]([a-z])/g;function Ra(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ea,Ra);re[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ea,Ra);re[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ea,Ra);re[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pa(e,t,n,r){var s=re.hasOwnProperty(t)?re[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(uf(t,n,s,r)&&(n=null),r||s===null?cf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Ia=Symbol.for("react.strict_mode"),zs=Symbol.for("react.profiler"),hc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),Ba=Symbol.for("react.forward_ref"),Ns=Symbol.for("react.suspense"),Es=Symbol.for("react.suspense_list"),La=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),xc=Symbol.for("react.offscreen"),Io=Symbol.iterator;function Nn(e){return e===null||typeof e!="object"?null:(e=Io&&e[Io]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,qi;function Fn(e){if(qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qi=t&&t[1]||""}return`
`+qi+e}var Xi=!1;function Gi(e,t){if(!e||Xi)return"";Xi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),a=r.stack.split(`
`),o=s.length-1,l=a.length-1;1<=o&&0<=l&&s[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==a[l]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Xi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fn(e):""}function ff(e){switch(e.tag){case 5:return Fn(e.type);case 16:return Fn("Lazy");case 13:return Fn("Suspense");case 19:return Fn("SuspenseList");case 0:case 2:case 15:return e=Gi(e.type,!1),e;case 11:return e=Gi(e.type.render,!1),e;case 1:return e=Gi(e.type,!0),e;default:return""}}function Rs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Vt:return"Portal";case zs:return"Profiler";case Ia:return"StrictMode";case Ns:return"Suspense";case Es:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gc:return(e.displayName||"Context")+".Consumer";case hc:return(e._context.displayName||"Context")+".Provider";case Ba:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case La:return t=e.displayName||null,t!==null?t:Rs(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return Rs(e(t))}catch{}}return null}function pf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rs(t);case 8:return t===Ia?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hf(e){var t=mc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cr(e){e._valueTracker||(e._valueTracker=hf(e))}function yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ps(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vc(e,t){t=t.checked,t!=null&&Pa(e,"checked",t,!1)}function Is(e,t){vc(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bs(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bs(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _n=Array.isArray;function rn(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ls(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(_n(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function bc(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function To(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ms(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zr,kc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gf=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(e){gf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),An[t]=An[e]})});function jc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||An.hasOwnProperty(e)&&An[e]?(""+t).trim():t+"px"}function Sc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=jc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var xf=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ts(e,t){if(t){if(xf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Fs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _s=null;function Ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,sn=null,an=null;function Fo(e){if(e=yr(e)){if(typeof Os!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Pi(t),Os(e.stateNode,e.type,t))}}function Cc(e){sn?an?an.push(e):an=[e]:sn=e}function zc(){if(sn){var e=sn,t=an;if(an=sn=null,Fo(e),t)for(e=0;e<t.length;e++)Fo(t[e])}}function Nc(e,t){return e(t)}function Ec(){}var Ki=!1;function Rc(e,t,n){if(Ki)return e(t,n);Ki=!0;try{return Nc(e,t,n)}finally{Ki=!1,(sn!==null||an!==null)&&(Ec(),zc())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=Pi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Ws=!1;if(Ge)try{var En={};Object.defineProperty(En,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Ws=!1}function mf(e,t,n,r,s,a,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Dn=!1,ei=null,ti=!1,As=null,yf={onError:function(e){Dn=!0,ei=e}};function vf(e,t,n,r,s,a,o,l,c){Dn=!1,ei=null,mf.apply(yf,arguments)}function bf(e,t,n,r,s,a,o,l,c){if(vf.apply(this,arguments),Dn){if(Dn){var d=ei;Dn=!1,ei=null}else throw Error(k(198));ti||(ti=!0,As=d)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _o(e){if(Dt(e)!==e)throw Error(k(188))}function wf(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return _o(s),e;if(a===r)return _o(s),t;a=a.sibling}throw Error(k(188))}if(n.return!==r.return)n=s,r=a;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=a;break}if(l===r){o=!0,r=s,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=s;break}if(l===r){o=!0,r=a,n=s;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Ic(e){return e=wf(e),e!==null?Bc(e):null}function Bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bc(e);if(t!==null)return t;e=e.sibling}return null}var Lc=be.unstable_scheduleCallback,Oo=be.unstable_cancelCallback,kf=be.unstable_shouldYield,jf=be.unstable_requestPaint,Q=be.unstable_now,Sf=be.unstable_getCurrentPriorityLevel,Ta=be.unstable_ImmediatePriority,Mc=be.unstable_UserBlockingPriority,ni=be.unstable_NormalPriority,Cf=be.unstable_LowPriority,Tc=be.unstable_IdlePriority,zi=null,$e=null;function zf(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Rf,Nf=Math.log,Ef=Math.LN2;function Rf(e){return e>>>=0,e===0?32:31-(Nf(e)/Ef|0)|0}var Nr=64,Er=4194304;function On(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=On(l):(a&=o,a!==0&&(r=On(a)))}else o=n&~s,o!==0?r=On(o):a!==0&&(r=On(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),s=1<<n,r|=e[n],t&=~s;return r}function Pf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function If(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Fe(a),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=Pf(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function Ds(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fc(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function Zi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function Bf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Fe(n),a=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~a}}function Fa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var F=0;function _c(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Oc,_a,Wc,Ac,Dc,Us=!1,Rr=[],ut=null,ft=null,pt=null,Zn=new Map,Jn=new Map,it=[],Lf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wo(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function Rn(e,t,n,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},t!==null&&(t=yr(t),t!==null&&_a(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Mf(e,t,n,r,s){switch(t){case"focusin":return ut=Rn(ut,e,t,n,r,s),!0;case"dragenter":return ft=Rn(ft,e,t,n,r,s),!0;case"mouseover":return pt=Rn(pt,e,t,n,r,s),!0;case"pointerover":var a=s.pointerId;return Zn.set(a,Rn(Zn.get(a)||null,e,t,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,Jn.set(a,Rn(Jn.get(a)||null,e,t,n,r,s)),!0}return!1}function Uc(e){var t=Rt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Pc(n),t!==null){e.blockedOn=t,Dc(e.priority,function(){Wc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$s(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_s=r,n.target.dispatchEvent(r),_s=null}else return t=yr(n),t!==null&&_a(t),e.blockedOn=n,!1;t.shift()}return!0}function Ao(e,t,n){Ur(e)&&n.delete(t)}function Tf(){Us=!1,ut!==null&&Ur(ut)&&(ut=null),ft!==null&&Ur(ft)&&(ft=null),pt!==null&&Ur(pt)&&(pt=null),Zn.forEach(Ao),Jn.forEach(Ao)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,Us||(Us=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Tf)))}function er(e){function t(s){return Pn(s,e)}if(0<Rr.length){Pn(Rr[0],e);for(var n=1;n<Rr.length;n++){var r=Rr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&Pn(ut,e),ft!==null&&Pn(ft,e),pt!==null&&Pn(pt,e),Zn.forEach(t),Jn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)Uc(n),n.blockedOn===null&&it.shift()}var on=et.ReactCurrentBatchConfig,ii=!0;function Ff(e,t,n,r){var s=F,a=on.transition;on.transition=null;try{F=1,Oa(e,t,n,r)}finally{F=s,on.transition=a}}function _f(e,t,n,r){var s=F,a=on.transition;on.transition=null;try{F=4,Oa(e,t,n,r)}finally{F=s,on.transition=a}}function Oa(e,t,n,r){if(ii){var s=$s(e,t,n,r);if(s===null)ls(e,t,r,si,n),Wo(e,r);else if(Mf(s,e,t,n,r))r.stopPropagation();else if(Wo(e,r),t&4&&-1<Lf.indexOf(e)){for(;s!==null;){var a=yr(s);if(a!==null&&Oc(a),a=$s(e,t,n,r),a===null&&ls(e,t,r,si,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else ls(e,t,r,null,n)}}var si=null;function $s(e,t,n,r){if(si=null,e=Ma(r),e=Rt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return si=e,null}function $c(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sf()){case Ta:return 1;case Mc:return 4;case ni:case Cf:return 16;case Tc:return 536870912;default:return 16}default:return 16}}var at=null,Wa=null,$r=null;function Hc(){if($r)return $r;var e,t=Wa,n=t.length,r,s="value"in at?at.value:at.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===s[a-r];r++);return $r=s.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pr(){return!0}function Do(){return!1}function ke(e){function t(n,r,s,a,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Pr:Do,this.isPropagationStopped=Do,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pr)},persist:function(){},isPersistent:Pr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Aa=ke(wn),mr=H({},wn,{view:0,detail:0}),Of=ke(mr),Ji,es,In,Ni=H({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Da,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==In&&(In&&e.type==="mousemove"?(Ji=e.screenX-In.screenX,es=e.screenY-In.screenY):es=Ji=0,In=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:es}}),Uo=ke(Ni),Wf=H({},Ni,{dataTransfer:0}),Af=ke(Wf),Df=H({},mr,{relatedTarget:0}),ts=ke(Df),Uf=H({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),$f=ke(Uf),Hf=H({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vf=ke(Hf),Yf=H({},wn,{data:0}),$o=ke(Yf),Qf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xf[e])?!!t[e]:!1}function Da(){return Gf}var Kf=H({},mr,{key:function(e){if(e.key){var t=Qf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Da,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zf=ke(Kf),Jf=H({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ho=ke(Jf),ep=H({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Da}),tp=ke(ep),np=H({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),rp=ke(np),ip=H({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sp=ke(ip),ap=[9,13,27,32],Ua=Ge&&"CompositionEvent"in window,Un=null;Ge&&"documentMode"in document&&(Un=document.documentMode);var op=Ge&&"TextEvent"in window&&!Un,Vc=Ge&&(!Ua||Un&&8<Un&&11>=Un),Vo=" ",Yo=!1;function Yc(e,t){switch(e){case"keyup":return ap.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function lp(e,t){switch(e){case"compositionend":return Qc(t);case"keypress":return t.which!==32?null:(Yo=!0,Vo);case"textInput":return e=t.data,e===Vo&&Yo?null:e;default:return null}}function cp(e,t){if(Qt)return e==="compositionend"||!Ua&&Yc(e,t)?(e=Hc(),$r=Wa=at=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vc&&t.locale!=="ko"?null:t.data;default:return null}}var dp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dp[e.type]:t==="textarea"}function qc(e,t,n,r){Cc(r),t=ai(t,"onChange"),0<t.length&&(n=new Aa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,tr=null;function up(e){sd(e,0)}function Ei(e){var t=Gt(e);if(yc(t))return e}function fp(e,t){if(e==="change")return t}var Xc=!1;if(Ge){var ns;if(Ge){var rs="oninput"in document;if(!rs){var qo=document.createElement("div");qo.setAttribute("oninput","return;"),rs=typeof qo.oninput=="function"}ns=rs}else ns=!1;Xc=ns&&(!document.documentMode||9<document.documentMode)}function Xo(){$n&&($n.detachEvent("onpropertychange",Gc),tr=$n=null)}function Gc(e){if(e.propertyName==="value"&&Ei(tr)){var t=[];qc(t,tr,e,Ma(e)),Rc(up,t)}}function pp(e,t,n){e==="focusin"?(Xo(),$n=t,tr=n,$n.attachEvent("onpropertychange",Gc)):e==="focusout"&&Xo()}function hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(tr)}function gp(e,t){if(e==="click")return Ei(t)}function xp(e,t){if(e==="input"||e==="change")return Ei(t)}function mp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:mp;function nr(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Cs.call(t,s)||!Oe(e[s],t[s]))return!1}return!0}function Go(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ko(e,t){var n=Go(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Go(n)}}function Kc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zc(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function $a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yp(e){var t=Zc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kc(n.ownerDocument.documentElement,n)){if(r!==null&&$a(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=Ko(n,a);var o=Ko(n,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vp=Ge&&"documentMode"in document&&11>=document.documentMode,qt=null,Hs=null,Hn=null,Vs=!1;function Zo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vs||qt==null||qt!==Jr(r)||(r=qt,"selectionStart"in r&&$a(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&nr(Hn,r)||(Hn=r,r=ai(Hs,"onSelect"),0<r.length&&(t=new Aa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xt={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionend:Ir("Transition","TransitionEnd")},is={},Jc={};Ge&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function Ri(e){if(is[e])return is[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jc)return is[e]=t[n];return e}var ed=Ri("animationend"),td=Ri("animationiteration"),nd=Ri("animationstart"),rd=Ri("transitionend"),id=new Map,Jo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){id.set(e,t),At(t,[e])}for(var ss=0;ss<Jo.length;ss++){var as=Jo[ss],bp=as.toLowerCase(),wp=as[0].toUpperCase()+as.slice(1);kt(bp,"on"+wp)}kt(ed,"onAnimationEnd");kt(td,"onAnimationIteration");kt(nd,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(rd,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function el(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bf(r,t,void 0,e),e.currentTarget=null}function sd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==a&&s.isPropagationStopped())break e;el(s,l,d),a=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==a&&s.isPropagationStopped())break e;el(s,l,d),a=c}}}if(ti)throw e=As,ti=!1,As=null,e}function O(e,t){var n=t[Gs];n===void 0&&(n=t[Gs]=new Set);var r=e+"__bubble";n.has(r)||(ad(t,e,2,!1),n.add(r))}function os(e,t,n){var r=0;t&&(r|=4),ad(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Br]){e[Br]=!0,pc.forEach(function(n){n!=="selectionchange"&&(kp.has(n)||os(n,!1,e),os(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Br]||(t[Br]=!0,os("selectionchange",!1,t))}}function ad(e,t,n,r){switch($c(t)){case 1:var s=Ff;break;case 4:s=_f;break;default:s=Oa}n=s.bind(null,t,n,e),s=void 0,!Ws||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function ls(e,t,n,r,s){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Rt(l),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue e}l=l.parentNode}}r=r.return}Rc(function(){var d=a,g=Ma(n),p=[];e:{var x=id.get(e);if(x!==void 0){var m=Aa,y=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":m=Zf;break;case"focusin":y="focus",m=ts;break;case"focusout":y="blur",m=ts;break;case"beforeblur":case"afterblur":m=ts;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=tp;break;case ed:case td:case nd:m=$f;break;case rd:m=rp;break;case"scroll":m=Of;break;case"wheel":m=sp;break;case"copy":case"cut":case"paste":m=Vf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ho}var w=(t&4)!==0,j=!w&&e==="scroll",f=w?x!==null?x+"Capture":null:x;w=[];for(var u=d,h;u!==null;){h=u;var b=h.stateNode;if(h.tag===5&&b!==null&&(h=b,f!==null&&(b=Kn(u,f),b!=null&&w.push(ir(u,b,h)))),j)break;u=u.return}0<w.length&&(x=new m(x,y,null,n,g),p.push({event:x,listeners:w}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",x&&n!==_s&&(y=n.relatedTarget||n.fromElement)&&(Rt(y)||y[Ke]))break e;if((m||x)&&(x=g.window===g?g:(x=g.ownerDocument)?x.defaultView||x.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=d,y=y?Rt(y):null,y!==null&&(j=Dt(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=d),m!==y)){if(w=Uo,b="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ho,b="onPointerLeave",f="onPointerEnter",u="pointer"),j=m==null?x:Gt(m),h=y==null?x:Gt(y),x=new w(b,u+"leave",m,n,g),x.target=j,x.relatedTarget=h,b=null,Rt(g)===d&&(w=new w(f,u+"enter",y,n,g),w.target=h,w.relatedTarget=j,b=w),j=b,m&&y)t:{for(w=m,f=y,u=0,h=w;h;h=Ht(h))u++;for(h=0,b=f;b;b=Ht(b))h++;for(;0<u-h;)w=Ht(w),u--;for(;0<h-u;)f=Ht(f),h--;for(;u--;){if(w===f||f!==null&&w===f.alternate)break t;w=Ht(w),f=Ht(f)}w=null}else w=null;m!==null&&tl(p,x,m,w,!1),y!==null&&j!==null&&tl(p,j,y,w,!0)}}e:{if(x=d?Gt(d):window,m=x.nodeName&&x.nodeName.toLowerCase(),m==="select"||m==="input"&&x.type==="file")var S=fp;else if(Qo(x))if(Xc)S=xp;else{S=hp;var E=pp}else(m=x.nodeName)&&m.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(S=gp);if(S&&(S=S(e,d))){qc(p,S,n,g);break e}E&&E(e,x,d),e==="focusout"&&(E=x._wrapperState)&&E.controlled&&x.type==="number"&&Bs(x,"number",x.value)}switch(E=d?Gt(d):window,e){case"focusin":(Qo(E)||E.contentEditable==="true")&&(qt=E,Hs=d,Hn=null);break;case"focusout":Hn=Hs=qt=null;break;case"mousedown":Vs=!0;break;case"contextmenu":case"mouseup":case"dragend":Vs=!1,Zo(p,n,g);break;case"selectionchange":if(vp)break;case"keydown":case"keyup":Zo(p,n,g)}var R;if(Ua)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Qt?Yc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Vc&&n.locale!=="ko"&&(Qt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Qt&&(R=Hc()):(at=g,Wa="value"in at?at.value:at.textContent,Qt=!0)),E=ai(d,P),0<E.length&&(P=new $o(P,e,null,n,g),p.push({event:P,listeners:E}),R?P.data=R:(R=Qc(n),R!==null&&(P.data=R)))),(R=op?lp(e,n):cp(e,n))&&(d=ai(d,"onBeforeInput"),0<d.length&&(g=new $o("onBeforeInput","beforeinput",null,n,g),p.push({event:g,listeners:d}),g.data=R))}sd(p,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ai(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Kn(e,n),a!=null&&r.unshift(ir(e,a,s)),a=Kn(e,t),a!=null&&r.push(ir(e,a,s))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tl(e,t,n,r,s){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,s?(c=Kn(n,a),c!=null&&o.unshift(ir(n,c,l))):s||(c=Kn(n,a),c!=null&&o.push(ir(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var jp=/\r\n?/g,Sp=/\u0000|\uFFFD/g;function nl(e){return(typeof e=="string"?e:""+e).replace(jp,`
`).replace(Sp,"")}function Lr(e,t,n){if(t=nl(t),nl(e)!==t&&n)throw Error(k(425))}function oi(){}var Ys=null,Qs=null;function qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xs=typeof setTimeout=="function"?setTimeout:void 0,Cp=typeof clearTimeout=="function"?clearTimeout:void 0,rl=typeof Promise=="function"?Promise:void 0,zp=typeof queueMicrotask=="function"?queueMicrotask:typeof rl<"u"?function(e){return rl.resolve(null).then(e).catch(Np)}:Xs;function Np(e){setTimeout(function(){throw e})}function cs(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);er(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function il(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),De="__reactFiber$"+kn,sr="__reactProps$"+kn,Ke="__reactContainer$"+kn,Gs="__reactEvents$"+kn,Ep="__reactListeners$"+kn,Rp="__reactHandles$"+kn;function Rt(e){var t=e[De];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[De]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=il(e);e!==null;){if(n=e[De])return n;e=il(e)}return t}e=n,n=e.parentNode}return null}function yr(e){return e=e[De]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Pi(e){return e[sr]||null}var Ks=[],Kt=-1;function jt(e){return{current:e}}function W(e){0>Kt||(e.current=Ks[Kt],Ks[Kt]=null,Kt--)}function _(e,t){Kt++,Ks[Kt]=e.current,e.current=t}var wt={},oe=jt(wt),he=jt(!1),Tt=wt;function fn(e,t){var n=e.type.contextTypes;if(!n)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ge(e){return e=e.childContextTypes,e!=null}function li(){W(he),W(oe)}function sl(e,t,n){if(oe.current!==wt)throw Error(k(168));_(oe,t),_(he,n)}function od(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(k(108,pf(e)||"Unknown",s));return H({},n,r)}function ci(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,Tt=oe.current,_(oe,e),_(he,he.current),!0}function al(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=od(e,t,Tt),r.__reactInternalMemoizedMergedChildContext=e,W(he),W(oe),_(oe,e)):W(he),_(he,n)}var Ye=null,Ii=!1,ds=!1;function ld(e){Ye===null?Ye=[e]:Ye.push(e)}function Pp(e){Ii=!0,ld(e)}function St(){if(!ds&&Ye!==null){ds=!0;var e=0,t=F;try{var n=Ye;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,Ii=!1}catch(s){throw Ye!==null&&(Ye=Ye.slice(e+1)),Lc(Ta,St),s}finally{F=t,ds=!1}}return null}var Zt=[],Jt=0,di=null,ui=0,Se=[],Ce=0,Ft=null,Qe=1,qe="";function Nt(e,t){Zt[Jt++]=ui,Zt[Jt++]=di,di=e,ui=t}function cd(e,t,n){Se[Ce++]=Qe,Se[Ce++]=qe,Se[Ce++]=Ft,Ft=e;var r=Qe;e=qe;var s=32-Fe(r)-1;r&=~(1<<s),n+=1;var a=32-Fe(t)+s;if(30<a){var o=s-s%5;a=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Qe=1<<32-Fe(t)+s|n<<s|r,qe=a+e}else Qe=1<<a|n<<s|r,qe=e}function Ha(e){e.return!==null&&(Nt(e,1),cd(e,1,0))}function Va(e){for(;e===di;)di=Zt[--Jt],Zt[Jt]=null,ui=Zt[--Jt],Zt[Jt]=null;for(;e===Ft;)Ft=Se[--Ce],Se[Ce]=null,qe=Se[--Ce],Se[Ce]=null,Qe=Se[--Ce],Se[Ce]=null}var ve=null,ye=null,D=!1,Te=null;function dd(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ol(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ye=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:Qe,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ye=null,!0):!1;default:return!1}}function Zs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Js(e){if(D){var t=ye;if(t){var n=t;if(!ol(e,t)){if(Zs(e))throw Error(k(418));t=ht(n.nextSibling);var r=ve;t&&ol(e,t)?dd(r,n):(e.flags=e.flags&-4097|2,D=!1,ve=e)}}else{if(Zs(e))throw Error(k(418));e.flags=e.flags&-4097|2,D=!1,ve=e}}}function ll(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function Mr(e){if(e!==ve)return!1;if(!D)return ll(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qs(e.type,e.memoizedProps)),t&&(t=ye)){if(Zs(e))throw ud(),Error(k(418));for(;t;)dd(e,t),t=ht(t.nextSibling)}if(ll(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=ve?ht(e.stateNode.nextSibling):null;return!0}function ud(){for(var e=ye;e;)e=ht(e.nextSibling)}function pn(){ye=ve=null,D=!1}function Ya(e){Te===null?Te=[e]:Te.push(e)}var Ip=et.ReactCurrentBatchConfig;function Bn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var s=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=s.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Tr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cl(e){var t=e._init;return t(e._payload)}function fd(e){function t(f,u){if(e){var h=f.deletions;h===null?(f.deletions=[u],f.flags|=16):h.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function s(f,u){return f=yt(f,u),f.index=0,f.sibling=null,f}function a(f,u,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<u?(f.flags|=2,u):h):(f.flags|=2,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,u,h,b){return u===null||u.tag!==6?(u=ms(h,f.mode,b),u.return=f,u):(u=s(u,h),u.return=f,u)}function c(f,u,h,b){var S=h.type;return S===Yt?g(f,u,h.props.children,b,h.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nt&&cl(S)===u.type)?(b=s(u,h.props),b.ref=Bn(f,u,h),b.return=f,b):(b=Kr(h.type,h.key,h.props,null,f.mode,b),b.ref=Bn(f,u,h),b.return=f,b)}function d(f,u,h,b){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=ys(h,f.mode,b),u.return=f,u):(u=s(u,h.children||[]),u.return=f,u)}function g(f,u,h,b,S){return u===null||u.tag!==7?(u=Lt(h,f.mode,b,S),u.return=f,u):(u=s(u,h),u.return=f,u)}function p(f,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ms(""+u,f.mode,h),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Sr:return h=Kr(u.type,u.key,u.props,null,f.mode,h),h.ref=Bn(f,null,u),h.return=f,h;case Vt:return u=ys(u,f.mode,h),u.return=f,u;case nt:var b=u._init;return p(f,b(u._payload),h)}if(_n(u)||Nn(u))return u=Lt(u,f.mode,h,null),u.return=f,u;Tr(f,u)}return null}function x(f,u,h,b){var S=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(f,u,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Sr:return h.key===S?c(f,u,h,b):null;case Vt:return h.key===S?d(f,u,h,b):null;case nt:return S=h._init,x(f,u,S(h._payload),b)}if(_n(h)||Nn(h))return S!==null?null:g(f,u,h,b,null);Tr(f,h)}return null}function m(f,u,h,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(h)||null,l(u,f,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Sr:return f=f.get(b.key===null?h:b.key)||null,c(u,f,b,S);case Vt:return f=f.get(b.key===null?h:b.key)||null,d(u,f,b,S);case nt:var E=b._init;return m(f,u,h,E(b._payload),S)}if(_n(b)||Nn(b))return f=f.get(h)||null,g(u,f,b,S,null);Tr(u,b)}return null}function y(f,u,h,b){for(var S=null,E=null,R=u,P=u=0,A=null;R!==null&&P<h.length;P++){R.index>P?(A=R,R=null):A=R.sibling;var B=x(f,R,h[P],b);if(B===null){R===null&&(R=A);break}e&&R&&B.alternate===null&&t(f,R),u=a(B,u,P),E===null?S=B:E.sibling=B,E=B,R=A}if(P===h.length)return n(f,R),D&&Nt(f,P),S;if(R===null){for(;P<h.length;P++)R=p(f,h[P],b),R!==null&&(u=a(R,u,P),E===null?S=R:E.sibling=R,E=R);return D&&Nt(f,P),S}for(R=r(f,R);P<h.length;P++)A=m(R,f,P,h[P],b),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?P:A.key),u=a(A,u,P),E===null?S=A:E.sibling=A,E=A);return e&&R.forEach(function(Ie){return t(f,Ie)}),D&&Nt(f,P),S}function w(f,u,h,b){var S=Nn(h);if(typeof S!="function")throw Error(k(150));if(h=S.call(h),h==null)throw Error(k(151));for(var E=S=null,R=u,P=u=0,A=null,B=h.next();R!==null&&!B.done;P++,B=h.next()){R.index>P?(A=R,R=null):A=R.sibling;var Ie=x(f,R,B.value,b);if(Ie===null){R===null&&(R=A);break}e&&R&&Ie.alternate===null&&t(f,R),u=a(Ie,u,P),E===null?S=Ie:E.sibling=Ie,E=Ie,R=A}if(B.done)return n(f,R),D&&Nt(f,P),S;if(R===null){for(;!B.done;P++,B=h.next())B=p(f,B.value,b),B!==null&&(u=a(B,u,P),E===null?S=B:E.sibling=B,E=B);return D&&Nt(f,P),S}for(R=r(f,R);!B.done;P++,B=h.next())B=m(R,f,P,B.value,b),B!==null&&(e&&B.alternate!==null&&R.delete(B.key===null?P:B.key),u=a(B,u,P),E===null?S=B:E.sibling=B,E=B);return e&&R.forEach(function(Cn){return t(f,Cn)}),D&&Nt(f,P),S}function j(f,u,h,b){if(typeof h=="object"&&h!==null&&h.type===Yt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Sr:e:{for(var S=h.key,E=u;E!==null;){if(E.key===S){if(S=h.type,S===Yt){if(E.tag===7){n(f,E.sibling),u=s(E,h.props.children),u.return=f,f=u;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nt&&cl(S)===E.type){n(f,E.sibling),u=s(E,h.props),u.ref=Bn(f,E,h),u.return=f,f=u;break e}n(f,E);break}else t(f,E);E=E.sibling}h.type===Yt?(u=Lt(h.props.children,f.mode,b,h.key),u.return=f,f=u):(b=Kr(h.type,h.key,h.props,null,f.mode,b),b.ref=Bn(f,u,h),b.return=f,f=b)}return o(f);case Vt:e:{for(E=h.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){n(f,u.sibling),u=s(u,h.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=ys(h,f.mode,b),u.return=f,f=u}return o(f);case nt:return E=h._init,j(f,u,E(h._payload),b)}if(_n(h))return y(f,u,h,b);if(Nn(h))return w(f,u,h,b);Tr(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(n(f,u.sibling),u=s(u,h),u.return=f,f=u):(n(f,u),u=ms(h,f.mode,b),u.return=f,f=u),o(f)):n(f,u)}return j}var hn=fd(!0),pd=fd(!1),fi=jt(null),pi=null,en=null,Qa=null;function qa(){Qa=en=pi=null}function Xa(e){var t=fi.current;W(fi),e._currentValue=t}function ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){pi=e,Qa=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(Qa!==e)if(e={context:e,memoizedValue:t,next:null},en===null){if(pi===null)throw Error(k(308));en=e,pi.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return t}var Pt=null;function Ga(e){Pt===null?Pt=[e]:Pt.push(e)}function hd(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Ga(t)):(n.next=s.next,s.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Ze(e,n)}return s=r.interleaved,s===null?(t.next=t,Ga(r)):(t.next=s.next,s.next=t),r.interleaved=t,Ze(e,n)}function Vr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fa(e,n)}}function dl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hi(e,t,n,r){var s=e.updateQueue;rt=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?a=d:o.next=d,o=c;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==o&&(l===null?g.firstBaseUpdate=d:l.next=d,g.lastBaseUpdate=c))}if(a!==null){var p=s.baseState;o=0,g=d=c=null,l=a;do{var x=l.lane,m=l.eventTime;if((r&x)===x){g!==null&&(g=g.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(x=t,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(m,p,x);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,x=typeof y=="function"?y.call(m,p,x):y,x==null)break e;p=H({},p,x);break e;case 2:rt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,x=s.effects,x===null?s.effects=[l]:x.push(l))}else m={eventTime:m,lane:x,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(d=g=m,c=p):g=g.next=m,o|=x;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;x=l,l=x.next,x.next=null,s.lastBaseUpdate=x,s.shared.pending=null}}while(!0);if(g===null&&(c=p),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=g,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);Ot|=o,e.lanes=o,e.memoizedState=p}}function ul(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(k(191,s));s.call(r)}}}var vr={},He=jt(vr),ar=jt(vr),or=jt(vr);function It(e){if(e===vr)throw Error(k(174));return e}function Za(e,t){switch(_(or,t),_(ar,e),_(He,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ms(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ms(t,e)}W(He),_(He,t)}function gn(){W(He),W(ar),W(or)}function xd(e){It(or.current);var t=It(He.current),n=Ms(t,e.type);t!==n&&(_(ar,e),_(He,n))}function Ja(e){ar.current===e&&(W(He),W(ar))}var U=jt(0);function gi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var us=[];function eo(){for(var e=0;e<us.length;e++)us[e]._workInProgressVersionPrimary=null;us.length=0}var Yr=et.ReactCurrentDispatcher,fs=et.ReactCurrentBatchConfig,_t=0,$=null,G=null,J=null,xi=!1,Vn=!1,lr=0,Bp=0;function ie(){throw Error(k(321))}function to(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function no(e,t,n,r,s,a){if(_t=a,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yr.current=e===null||e.memoizedState===null?Fp:_p,e=n(r,s),Vn){a=0;do{if(Vn=!1,lr=0,25<=a)throw Error(k(301));a+=1,J=G=null,t.updateQueue=null,Yr.current=Op,e=n(r,s)}while(Vn)}if(Yr.current=mi,t=G!==null&&G.next!==null,_t=0,J=G=$=null,xi=!1,t)throw Error(k(300));return e}function ro(){var e=lr!==0;return lr=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?$.memoizedState=J=e:J=J.next=e,J}function Re(){if(G===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?$.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(k(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?$.memoizedState=J=e:J=J.next=e}return J}function cr(e,t){return typeof t=="function"?t(e):t}function ps(e){var t=Re(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=G,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var l=o=null,c=null,d=a;do{var g=d.lane;if((_t&g)===g)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,o=r):c=c.next=p,$.lanes|=g,Ot|=g}d=d.next}while(d!==null&&d!==a);c===null?o=r:c.next=l,Oe(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do a=s.lane,$.lanes|=a,Ot|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hs(e){var t=Re(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);Oe(a,t.memoizedState)||(pe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function md(){}function yd(e,t){var n=$,r=Re(),s=t(),a=!Oe(r.memoizedState,s);if(a&&(r.memoizedState=s,pe=!0),r=r.queue,io(wd.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,dr(9,bd.bind(null,n,r,s,t),void 0,null),ee===null)throw Error(k(349));_t&30||vd(n,t,s)}return s}function vd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bd(e,t,n,r){t.value=n,t.getSnapshot=r,kd(t)&&jd(e)}function wd(e,t,n){return n(function(){kd(t)&&jd(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function jd(e){var t=Ze(e,1);t!==null&&_e(t,e,1,-1)}function fl(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=Tp.bind(null,$,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sd(){return Re().memoizedState}function Qr(e,t,n,r){var s=Ae();$.flags|=e,s.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function Bi(e,t,n,r){var s=Re();r=r===void 0?null:r;var a=void 0;if(G!==null){var o=G.memoizedState;if(a=o.destroy,r!==null&&to(r,o.deps)){s.memoizedState=dr(t,n,a,r);return}}$.flags|=e,s.memoizedState=dr(1|t,n,a,r)}function pl(e,t){return Qr(8390656,8,e,t)}function io(e,t){return Bi(2048,8,e,t)}function Cd(e,t){return Bi(4,2,e,t)}function zd(e,t){return Bi(4,4,e,t)}function Nd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ed(e,t,n){return n=n!=null?n.concat([e]):null,Bi(4,4,Nd.bind(null,t,e),n)}function so(){}function Rd(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&to(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pd(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&to(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Id(e,t,n){return _t&21?(Oe(n,t)||(n=Fc(),$.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function Lp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=fs.transition;fs.transition={};try{e(!1),t()}finally{F=n,fs.transition=r}}function Bd(){return Re().memoizedState}function Mp(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ld(e))Md(t,n);else if(n=hd(e,t,n,r),n!==null){var s=ce();_e(n,e,r,s),Td(n,t,r)}}function Tp(e,t,n){var r=mt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ld(e))Md(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(s.hasEagerState=!0,s.eagerState=l,Oe(l,o)){var c=t.interleaved;c===null?(s.next=s,Ga(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=hd(e,t,s,r),n!==null&&(s=ce(),_e(n,e,r,s),Td(n,t,r))}}function Ld(e){var t=e.alternate;return e===$||t!==null&&t===$}function Md(e,t){Vn=xi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Td(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fa(e,n)}}var mi={readContext:Ee,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Fp={readContext:Ee,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:pl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qr(4194308,4,Nd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qr(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Mp.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:fl,useDebugValue:so,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=fl(!1),t=e[0];return e=Lp.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,s=Ae();if(D){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ee===null)throw Error(k(349));_t&30||vd(r,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,pl(wd.bind(null,r,a,e),[e]),r.flags|=2048,dr(9,bd.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ae(),t=ee.identifierPrefix;if(D){var n=qe,r=Qe;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_p={readContext:Ee,useCallback:Rd,useContext:Ee,useEffect:io,useImperativeHandle:Ed,useInsertionEffect:Cd,useLayoutEffect:zd,useMemo:Pd,useReducer:ps,useRef:Sd,useState:function(){return ps(cr)},useDebugValue:so,useDeferredValue:function(e){var t=Re();return Id(t,G.memoizedState,e)},useTransition:function(){var e=ps(cr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:md,useSyncExternalStore:yd,useId:Bd,unstable_isNewReconciler:!1},Op={readContext:Ee,useCallback:Rd,useContext:Ee,useEffect:io,useImperativeHandle:Ed,useInsertionEffect:Cd,useLayoutEffect:zd,useMemo:Pd,useReducer:hs,useRef:Sd,useState:function(){return hs(cr)},useDebugValue:so,useDeferredValue:function(e){var t=Re();return G===null?t.memoizedState=e:Id(t,G.memoizedState,e)},useTransition:function(){var e=hs(cr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:md,useSyncExternalStore:yd,useId:Bd,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ta(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Li={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),s=mt(e),a=Xe(r,s);a.payload=t,n!=null&&(a.callback=n),t=gt(e,a,s),t!==null&&(_e(t,e,s,r),Vr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),s=mt(e),a=Xe(r,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=gt(e,a,s),t!==null&&(_e(t,e,s,r),Vr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=mt(e),s=Xe(n,r);s.tag=2,t!=null&&(s.callback=t),t=gt(e,s,r),t!==null&&(_e(t,e,r,n),Vr(t,e,r))}};function hl(e,t,n,r,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!nr(n,r)||!nr(s,a):!0}function Fd(e,t,n){var r=!1,s=wt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ee(a):(s=ge(t)?Tt:oe.current,r=t.contextTypes,a=(r=r!=null)?fn(e,s):wt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Li,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function gl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Li.enqueueReplaceState(t,t.state,null)}function na(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Ka(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Ee(a):(a=ge(t)?Tt:oe.current,s.context=fn(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ta(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Li.enqueueReplaceState(s,s.state,null),hi(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=ff(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function gs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ra(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wp=typeof WeakMap=="function"?WeakMap:Map;function _d(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vi||(vi=!0,pa=r),ra(e,t)},n}function Od(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){ra(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ra(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function xl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wp;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Jp.bind(null,e,t,n),t.then(e,e))}function ml(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yl(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var Ap=et.ReactCurrentOwner,pe=!1;function le(e,t,n,r){t.child=e===null?pd(t,null,n,r):hn(t,e.child,n,r)}function vl(e,t,n,r,s){n=n.render;var a=t.ref;return ln(t,s),r=no(e,t,n,r,a,s),n=ro(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Je(e,t,s)):(D&&n&&Ha(t),t.flags|=1,le(e,t,r,s),t.child)}function bl(e,t,n,r,s){if(e===null){var a=n.type;return typeof a=="function"&&!ho(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Wd(e,t,a,r,s)):(e=Kr(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:nr,n(o,r)&&e.ref===t.ref)return Je(e,t,s)}return t.flags|=1,e=yt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Wd(e,t,n,r,s){if(e!==null){var a=e.memoizedProps;if(nr(a,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=a,(e.lanes&s)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Je(e,t,s)}return ia(e,t,n,r,s)}function Ad(e,t,n){var r=t.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(nn,me),me|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(nn,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,_(nn,me),me|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,_(nn,me),me|=r;return le(e,t,s,n),t.child}function Dd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ia(e,t,n,r,s){var a=ge(n)?Tt:oe.current;return a=fn(t,a),ln(t,s),n=no(e,t,n,r,a,s),r=ro(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Je(e,t,s)):(D&&r&&Ha(t),t.flags|=1,le(e,t,n,s),t.child)}function wl(e,t,n,r,s){if(ge(n)){var a=!0;ci(t)}else a=!1;if(ln(t,s),t.stateNode===null)qr(e,t),Fd(t,n,r),na(t,n,r,s),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=ge(n)?Tt:oe.current,d=fn(t,d));var g=n.getDerivedStateFromProps,p=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==d)&&gl(t,o,r,d),rt=!1;var x=t.memoizedState;o.state=x,hi(t,r,o,s),c=t.memoizedState,l!==r||x!==c||he.current||rt?(typeof g=="function"&&(ta(t,n,g,r),c=t.memoizedState),(l=rt||hl(t,n,l,r,x,c,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,gd(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Le(t.type,l),o.props=d,p=t.pendingProps,x=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ee(c):(c=ge(n)?Tt:oe.current,c=fn(t,c));var m=n.getDerivedStateFromProps;(g=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||x!==c)&&gl(t,o,r,c),rt=!1,x=t.memoizedState,o.state=x,hi(t,r,o,s);var y=t.memoizedState;l!==p||x!==y||he.current||rt?(typeof m=="function"&&(ta(t,n,m,r),y=t.memoizedState),(d=rt||hl(t,n,d,r,x,y,c)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return sa(e,t,n,r,a,s)}function sa(e,t,n,r,s,a){Dd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return s&&al(t,n,!1),Je(e,t,a);r=t.stateNode,Ap.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=hn(t,e.child,null,a),t.child=hn(t,null,l,a)):le(e,t,l,a),t.memoizedState=r.state,s&&al(t,n,!0),t.child}function Ud(e){var t=e.stateNode;t.pendingContext?sl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sl(e,t.context,!1),Za(e,t.containerInfo)}function kl(e,t,n,r,s){return pn(),Ya(s),t.flags|=256,le(e,t,n,r),t.child}var aa={dehydrated:null,treeContext:null,retryLane:0};function oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function $d(e,t,n){var r=t.pendingProps,s=U.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),_(U,s&1),e===null)return Js(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Fi(o,r,0,null),e=Lt(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=oa(n),t.memoizedState=aa,e):ao(t,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Dp(e,t,o,r,l,s,n);if(a){a=r.fallback,o=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=yt(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?a=yt(l,a):(a=Lt(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?oa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=aa,r}return a=e.child,e=a.sibling,r=yt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ao(e,t){return t=Fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fr(e,t,n,r){return r!==null&&Ya(r),hn(t,e.child,null,n),e=ao(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dp(e,t,n,r,s,a,o){if(n)return t.flags&256?(t.flags&=-257,r=gs(Error(k(422))),Fr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,s=t.mode,r=Fi({mode:"visible",children:r.children},s,0,null),a=Lt(a,s,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&hn(t,e.child,null,o),t.child.memoizedState=oa(o),t.memoizedState=aa,a);if(!(t.mode&1))return Fr(e,t,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(k(419)),r=gs(a,r,void 0),Fr(e,t,o,r)}if(l=(o&e.childLanes)!==0,pe||l){if(r=ee,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Ze(e,s),_e(r,e,s,-1))}return po(),r=gs(Error(k(421))),Fr(e,t,o,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=e0.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,ye=ht(s.nextSibling),ve=t,D=!0,Te=null,e!==null&&(Se[Ce++]=Qe,Se[Ce++]=qe,Se[Ce++]=Ft,Qe=e.id,qe=e.overflow,Ft=t),t=ao(t,r.children),t.flags|=4096,t)}function jl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ea(e.return,t,n)}function xs(e,t,n,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function Hd(e,t,n){var r=t.pendingProps,s=r.revealOrder,a=r.tail;if(le(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jl(e,n,t);else if(e.tag===19)jl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_(U,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&gi(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),xs(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&gi(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}xs(t,!0,n,null,a);break;case"together":xs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Up(e,t,n){switch(t.tag){case 3:Ud(t),pn();break;case 5:xd(t);break;case 1:ge(t.type)&&ci(t);break;case 4:Za(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;_(fi,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?$d(e,t,n):(_(U,U.current&1),e=Je(e,t,n),e!==null?e.sibling:null);_(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hd(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Ad(e,t,n)}return Je(e,t,n)}var Vd,la,Yd,Qd;Vd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};la=function(){};Yd=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,It(He.current);var a=null;switch(n){case"input":s=Ps(e,s),r=Ps(e,r),a=[];break;case"select":s=H({},s,{value:void 0}),r=H({},r,{value:void 0}),a=[];break;case"textarea":s=Ls(e,s),r=Ls(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oi)}Ts(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Xn.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var c=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Xn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&O("scroll",e),a||l===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Qd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ln(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $p(e,t,n){var r=t.pendingProps;switch(Va(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ge(t.type)&&li(),se(t),null;case 3:return r=t.stateNode,gn(),W(he),W(oe),eo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(xa(Te),Te=null))),la(e,t),se(t),null;case 5:Ja(t);var s=It(or.current);if(n=t.type,e!==null&&t.stateNode!=null)Yd(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return se(t),null}if(e=It(He.current),Mr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[De]=t,r[sr]=a,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(s=0;s<Wn.length;s++)O(Wn[s],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Bo(r,a),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},O("invalid",r);break;case"textarea":Mo(r,a),O("invalid",r)}Ts(n,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Lr(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Lr(r.textContent,l,e),s=["children",""+l]):Xn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":Cr(r),Lo(r,a,!0);break;case"textarea":Cr(r),To(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=oi)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[De]=t,e[sr]=r,Vd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Fs(n,r),n){case"dialog":O("cancel",e),O("close",e),s=r;break;case"iframe":case"object":case"embed":O("load",e),s=r;break;case"video":case"audio":for(s=0;s<Wn.length;s++)O(Wn[s],e);s=r;break;case"source":O("error",e),s=r;break;case"img":case"image":case"link":O("error",e),O("load",e),s=r;break;case"details":O("toggle",e),s=r;break;case"input":Bo(e,r),s=Ps(e,r),O("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=H({},r,{value:void 0}),O("invalid",e);break;case"textarea":Mo(e,r),s=Ls(e,r),O("invalid",e);break;default:s=r}Ts(n,s),l=s;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?Sc(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&kc(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Gn(e,c):typeof c=="number"&&Gn(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xn.hasOwnProperty(a)?c!=null&&a==="onScroll"&&O("scroll",e):c!=null&&Pa(e,a,c,o))}switch(n){case"input":Cr(e),Lo(e,r,!1);break;case"textarea":Cr(e),To(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?rn(e,!!r.multiple,a,!1):r.defaultValue!=null&&rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=oi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Qd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=It(or.current),It(He.current),Mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[De]=t,(a=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:Lr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[De]=t,t.stateNode=r}return se(t),null;case 13:if(W(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&ye!==null&&t.mode&1&&!(t.flags&128))ud(),pn(),t.flags|=98560,a=!1;else if(a=Mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(k(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(k(317));a[De]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),a=!1}else Te!==null&&(xa(Te),Te=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?K===0&&(K=3):po())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return gn(),la(e,t),e===null&&rr(t.stateNode.containerInfo),se(t),null;case 10:return Xa(t.type._context),se(t),null;case 17:return ge(t.type)&&li(),se(t),null;case 19:if(W(U),a=t.memoizedState,a===null)return se(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Ln(a,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=gi(e),o!==null){for(t.flags|=128,Ln(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _(U,U.current&1|2),t.child}e=e.sibling}a.tail!==null&&Q()>mn&&(t.flags|=128,r=!0,Ln(a,!1),t.lanes=4194304)}else{if(!r)if(e=gi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!D)return se(t),null}else 2*Q()-a.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,Ln(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Q(),t.sibling=null,n=U.current,_(U,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return fo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Hp(e,t){switch(Va(t),t.tag){case 1:return ge(t.type)&&li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),W(he),W(oe),eo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ja(t),null;case 13:if(W(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(U),null;case 4:return gn(),null;case 10:return Xa(t.type._context),null;case 22:case 23:return fo(),null;case 24:return null;default:return null}}var _r=!1,ae=!1,Vp=typeof WeakSet=="function"?WeakSet:Set,C=null;function tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function ca(e,t,n){try{n()}catch(r){V(e,t,r)}}var Sl=!1;function Yp(e,t){if(Ys=ii,e=Zc(),$a(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,g=0,p=e,x=null;t:for(;;){for(var m;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==a||r!==0&&p.nodeType!==3||(c=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)x=p,p=m;for(;;){if(p===e)break t;if(x===n&&++d===s&&(l=o),x===a&&++g===r&&(c=o),(m=p.nextSibling)!==null)break;p=x,x=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qs={focusedElem:e,selectionRange:n},ii=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,j=y.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Le(t.type,w),j);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(b){V(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=Sl,Sl=!1,y}function Yn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&ca(t,n,a)}s=s.next}while(s!==r)}}function Mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function da(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qd(e){var t=e.alternate;t!==null&&(e.alternate=null,qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[De],delete t[sr],delete t[Gs],delete t[Ep],delete t[Rp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xd(e){return e.tag===5||e.tag===3||e.tag===4}function Cl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oi));else if(r!==4&&(e=e.child,e!==null))for(ua(e,t,n),e=e.sibling;e!==null;)ua(e,t,n),e=e.sibling}function fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fa(e,t,n),e=e.sibling;e!==null;)fa(e,t,n),e=e.sibling}var te=null,Me=!1;function tt(e,t,n){for(n=n.child;n!==null;)Gd(e,t,n),n=n.sibling}function Gd(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 5:ae||tn(n,t);case 6:var r=te,s=Me;te=null,tt(e,t,n),te=r,Me=s,te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?cs(e.parentNode,n):e.nodeType===1&&cs(e,n),er(e)):cs(te,n.stateNode));break;case 4:r=te,s=Me,te=n.stateNode.containerInfo,Me=!0,tt(e,t,n),te=r,Me=s;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&ca(n,t,o),s=s.next}while(s!==r)}tt(e,t,n);break;case 1:if(!ae&&(tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){V(n,t,l)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,tt(e,t,n),ae=r):tt(e,t,n);break;default:tt(e,t,n)}}function zl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vp),t.forEach(function(r){var s=t0.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:te=l.stateNode,Me=!1;break e;case 3:te=l.stateNode.containerInfo,Me=!0;break e;case 4:te=l.stateNode.containerInfo,Me=!0;break e}l=l.return}if(te===null)throw Error(k(160));Gd(a,o,s),te=null,Me=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){V(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kd(t,e),t=t.sibling}function Kd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),We(e),r&4){try{Yn(3,e,e.return),Mi(3,e)}catch(w){V(e,e.return,w)}try{Yn(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Be(t,e),We(e),r&512&&n!==null&&tn(n,n.return);break;case 5:if(Be(t,e),We(e),r&512&&n!==null&&tn(n,n.return),e.flags&32){var s=e.stateNode;try{Gn(s,"")}catch(w){V(e,e.return,w)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&vc(s,a),Fs(l,o);var d=Fs(l,a);for(o=0;o<c.length;o+=2){var g=c[o],p=c[o+1];g==="style"?Sc(s,p):g==="dangerouslySetInnerHTML"?kc(s,p):g==="children"?Gn(s,p):Pa(s,g,p,d)}switch(l){case"input":Is(s,a);break;case"textarea":bc(s,a);break;case"select":var x=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?rn(s,!!a.multiple,m,!1):x!==!!a.multiple&&(a.defaultValue!=null?rn(s,!!a.multiple,a.defaultValue,!0):rn(s,!!a.multiple,a.multiple?[]:"",!1))}s[sr]=a}catch(w){V(e,e.return,w)}}break;case 6:if(Be(t,e),We(e),r&4){if(e.stateNode===null)throw Error(k(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(w){V(e,e.return,w)}}break;case 3:if(Be(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{er(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Be(t,e),We(e);break;case 13:Be(t,e),We(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(co=Q())),r&4&&zl(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(d=ae)||g,Be(t,e),ae=d):Be(t,e),We(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(C=e,g=e.child;g!==null;){for(p=C=g;C!==null;){switch(x=C,m=x.child,x.tag){case 0:case 11:case 14:case 15:Yn(4,x,x.return);break;case 1:tn(x,x.return);var y=x.stateNode;if(typeof y.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){V(r,n,w)}}break;case 5:tn(x,x.return);break;case 22:if(x.memoizedState!==null){El(p);continue}}m!==null?(m.return=x,C=m):El(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{s=p.stateNode,d?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=jc("display",o))}catch(w){V(e,e.return,w)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(w){V(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Be(t,e),We(e),r&4&&zl(e);break;case 21:break;default:Be(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Gn(s,""),r.flags&=-33);var a=Cl(e);fa(e,a,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Cl(e);ua(e,l,o);break;default:throw Error(k(161))}}catch(c){V(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qp(e,t,n){C=e,Zd(e)}function Zd(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var s=C,a=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||_r;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||ae;l=_r;var d=ae;if(_r=o,(ae=c)&&!d)for(C=s;C!==null;)o=C,c=o.child,o.tag===22&&o.memoizedState!==null?Rl(s):c!==null?(c.return=o,C=c):Rl(s);for(;a!==null;)C=a,Zd(a),a=a.sibling;C=s,_r=l,ae=d}Nl(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,C=a):Nl(e)}}function Nl(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ul(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ul(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&er(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ae||t.flags&512&&da(t)}catch(x){V(t,t.return,x)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function El(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Rl(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mi(4,t)}catch(c){V(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){V(t,s,c)}}var a=t.return;try{da(t)}catch(c){V(t,a,c)}break;case 5:var o=t.return;try{da(t)}catch(c){V(t,o,c)}}}catch(c){V(t,t.return,c)}if(t===e){C=null;break}var l=t.sibling;if(l!==null){l.return=t.return,C=l;break}C=t.return}}var qp=Math.ceil,yi=et.ReactCurrentDispatcher,oo=et.ReactCurrentOwner,Ne=et.ReactCurrentBatchConfig,T=0,ee=null,q=null,ne=0,me=0,nn=jt(0),K=0,ur=null,Ot=0,Ti=0,lo=0,Qn=null,fe=null,co=0,mn=1/0,Ve=null,vi=!1,pa=null,xt=null,Or=!1,ot=null,bi=0,qn=0,ha=null,Xr=-1,Gr=0;function ce(){return T&6?Q():Xr!==-1?Xr:Xr=Q()}function mt(e){return e.mode&1?T&2&&ne!==0?ne&-ne:Ip.transition!==null?(Gr===0&&(Gr=Fc()),Gr):(e=F,e!==0||(e=window.event,e=e===void 0?16:$c(e.type)),e):1}function _e(e,t,n,r){if(50<qn)throw qn=0,ha=null,Error(k(185));xr(e,n,r),(!(T&2)||e!==ee)&&(e===ee&&(!(T&2)&&(Ti|=n),K===4&&st(e,ne)),xe(e,r),n===1&&T===0&&!(t.mode&1)&&(mn=Q()+500,Ii&&St()))}function xe(e,t){var n=e.callbackNode;If(e,t);var r=ri(e,e===ee?ne:0);if(r===0)n!==null&&Oo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Oo(n),t===1)e.tag===0?Pp(Pl.bind(null,e)):ld(Pl.bind(null,e)),zp(function(){!(T&6)&&St()}),n=null;else{switch(_c(r)){case 1:n=Ta;break;case 4:n=Mc;break;case 16:n=ni;break;case 536870912:n=Tc;break;default:n=ni}n=au(n,Jd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jd(e,t){if(Xr=-1,Gr=0,T&6)throw Error(k(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=ri(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wi(e,r);else{t=r;var s=T;T|=2;var a=tu();(ee!==e||ne!==t)&&(Ve=null,mn=Q()+500,Bt(e,t));do try{Kp();break}catch(l){eu(e,l)}while(!0);qa(),yi.current=a,T=s,q!==null?t=0:(ee=null,ne=0,t=K)}if(t!==0){if(t===2&&(s=Ds(e),s!==0&&(r=s,t=ga(e,s))),t===1)throw n=ur,Bt(e,0),st(e,r),xe(e,Q()),n;if(t===6)st(e,r);else{if(s=e.current.alternate,!(r&30)&&!Xp(s)&&(t=wi(e,r),t===2&&(a=Ds(e),a!==0&&(r=a,t=ga(e,a))),t===1))throw n=ur,Bt(e,0),st(e,r),xe(e,Q()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Et(e,fe,Ve);break;case 3:if(st(e,r),(r&130023424)===r&&(t=co+500-Q(),10<t)){if(ri(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Xs(Et.bind(null,e,fe,Ve),t);break}Et(e,fe,Ve);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var o=31-Fe(r);a=1<<o,o=t[o],o>s&&(s=o),r&=~a}if(r=s,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qp(r/1960))-r,10<r){e.timeoutHandle=Xs(Et.bind(null,e,fe,Ve),r);break}Et(e,fe,Ve);break;case 5:Et(e,fe,Ve);break;default:throw Error(k(329))}}}return xe(e,Q()),e.callbackNode===n?Jd.bind(null,e):null}function ga(e,t){var n=Qn;return e.current.memoizedState.isDehydrated&&(Bt(e,t).flags|=256),e=wi(e,t),e!==2&&(t=fe,fe=n,t!==null&&xa(t)),e}function xa(e){fe===null?fe=e:fe.push.apply(fe,e)}function Xp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!Oe(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~lo,t&=~Ti,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Pl(e){if(T&6)throw Error(k(327));cn();var t=ri(e,0);if(!(t&1))return xe(e,Q()),null;var n=wi(e,t);if(e.tag!==0&&n===2){var r=Ds(e);r!==0&&(t=r,n=ga(e,r))}if(n===1)throw n=ur,Bt(e,0),st(e,t),xe(e,Q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,fe,Ve),xe(e,Q()),null}function uo(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(mn=Q()+500,Ii&&St())}}function Wt(e){ot!==null&&ot.tag===0&&!(T&6)&&cn();var t=T;T|=1;var n=Ne.transition,r=F;try{if(Ne.transition=null,F=1,e)return e()}finally{F=r,Ne.transition=n,T=t,!(T&6)&&St()}}function fo(){me=nn.current,W(nn)}function Bt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cp(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Va(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&li();break;case 3:gn(),W(he),W(oe),eo();break;case 5:Ja(r);break;case 4:gn();break;case 13:W(U);break;case 19:W(U);break;case 10:Xa(r.type._context);break;case 22:case 23:fo()}n=n.return}if(ee=e,q=e=yt(e.current,null),ne=me=t,K=0,ur=null,lo=Ti=Ot=0,fe=Qn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=s,r.next=o}n.pending=r}Pt=null}return e}function eu(e,t){do{var n=q;try{if(qa(),Yr.current=mi,xi){for(var r=$.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}xi=!1}if(_t=0,J=G=$=null,Vn=!1,lr=0,oo.current=null,n===null||n.return===null){K=1,ur=t,q=null;break}e:{var a=e,o=n.return,l=n,c=t;if(t=ne,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,g=l,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var x=g.alternate;x?(g.updateQueue=x.updateQueue,g.memoizedState=x.memoizedState,g.lanes=x.lanes):(g.updateQueue=null,g.memoizedState=null)}var m=ml(o);if(m!==null){m.flags&=-257,yl(m,o,l,a,t),m.mode&1&&xl(a,d,t),t=m,c=d;var y=t.updateQueue;if(y===null){var w=new Set;w.add(c),t.updateQueue=w}else y.add(c);break e}else{if(!(t&1)){xl(a,d,t),po();break e}c=Error(k(426))}}else if(D&&l.mode&1){var j=ml(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),yl(j,o,l,a,t),Ya(xn(c,l));break e}}a=c=xn(c,l),K!==4&&(K=2),Qn===null?Qn=[a]:Qn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=_d(a,c,t);dl(a,f);break e;case 1:l=c;var u=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(xt===null||!xt.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=Od(a,l,t);dl(a,b);break e}}a=a.return}while(a!==null)}ru(n)}catch(S){t=S,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function tu(){var e=yi.current;return yi.current=mi,e===null?mi:e}function po(){(K===0||K===3||K===2)&&(K=4),ee===null||!(Ot&268435455)&&!(Ti&268435455)||st(ee,ne)}function wi(e,t){var n=T;T|=2;var r=tu();(ee!==e||ne!==t)&&(Ve=null,Bt(e,t));do try{Gp();break}catch(s){eu(e,s)}while(!0);if(qa(),T=n,yi.current=r,q!==null)throw Error(k(261));return ee=null,ne=0,K}function Gp(){for(;q!==null;)nu(q)}function Kp(){for(;q!==null&&!kf();)nu(q)}function nu(e){var t=su(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?ru(e):q=t,oo.current=null}function ru(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hp(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,q=null;return}}else if(n=$p(n,t,me),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);K===0&&(K=5)}function Et(e,t,n){var r=F,s=Ne.transition;try{Ne.transition=null,F=1,Zp(e,t,n,r)}finally{Ne.transition=s,F=r}return null}function Zp(e,t,n,r){do cn();while(ot!==null);if(T&6)throw Error(k(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Bf(e,a),e===ee&&(q=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Or||(Or=!0,au(ni,function(){return cn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ne.transition,Ne.transition=null;var o=F;F=1;var l=T;T|=4,oo.current=null,Yp(e,n),Kd(n,e),yp(Qs),ii=!!Ys,Qs=Ys=null,e.current=n,Qp(n),jf(),T=l,F=o,Ne.transition=a}else e.current=n;if(Or&&(Or=!1,ot=e,bi=s),a=e.pendingLanes,a===0&&(xt=null),zf(n.stateNode),xe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(vi)throw vi=!1,e=pa,pa=null,e;return bi&1&&e.tag!==0&&cn(),a=e.pendingLanes,a&1?e===ha?qn++:(qn=0,ha=e):qn=0,St(),null}function cn(){if(ot!==null){var e=_c(bi),t=Ne.transition,n=F;try{if(Ne.transition=null,F=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,bi=0,T&6)throw Error(k(331));var s=T;for(T|=4,C=e.current;C!==null;){var a=C,o=a.child;if(C.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(C=d;C!==null;){var g=C;switch(g.tag){case 0:case 11:case 15:Yn(8,g,a)}var p=g.child;if(p!==null)p.return=g,C=p;else for(;C!==null;){g=C;var x=g.sibling,m=g.return;if(qd(g),g===d){C=null;break}if(x!==null){x.return=m,C=x;break}C=m}}}var y=a.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}C=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,C=o;else e:for(;C!==null;){if(a=C,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Yn(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,C=f;break e}C=a.return}}var u=e.current;for(C=u;C!==null;){o=C;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,C=h;else e:for(o=u;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Mi(9,l)}}catch(S){V(l,l.return,S)}if(l===o){C=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,C=b;break e}C=l.return}}if(T=s,St(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(zi,e)}catch{}r=!0}return r}finally{F=n,Ne.transition=t}}return!1}function Il(e,t,n){t=xn(n,t),t=_d(e,t,1),e=gt(e,t,1),t=ce(),e!==null&&(xr(e,1,t),xe(e,t))}function V(e,t,n){if(e.tag===3)Il(e,e,n);else for(;t!==null;){if(t.tag===3){Il(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=xn(n,e),e=Od(t,e,1),t=gt(t,e,1),e=ce(),t!==null&&(xr(t,1,e),xe(t,e));break}}t=t.return}}function Jp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(K===4||K===3&&(ne&130023424)===ne&&500>Q()-co?Bt(e,0):lo|=n),xe(e,t)}function iu(e,t){t===0&&(e.mode&1?(t=Er,Er<<=1,!(Er&130023424)&&(Er=4194304)):t=1);var n=ce();e=Ze(e,t),e!==null&&(xr(e,t,n),xe(e,n))}function e0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),iu(e,n)}function t0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),iu(e,n)}var su;su=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Up(e,t,n);pe=!!(e.flags&131072)}else pe=!1,D&&t.flags&1048576&&cd(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qr(e,t),e=t.pendingProps;var s=fn(t,oe.current);ln(t,n),s=no(null,t,r,e,s,n);var a=ro();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(a=!0,ci(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ka(t),s.updater=Li,t.stateNode=s,s._reactInternals=t,na(t,r,e,n),t=sa(null,t,r,!0,a,n)):(t.tag=0,D&&a&&Ha(t),le(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qr(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=r0(r),e=Le(r,e),s){case 0:t=ia(null,t,r,e,n);break e;case 1:t=wl(null,t,r,e,n);break e;case 11:t=vl(null,t,r,e,n);break e;case 14:t=bl(null,t,r,Le(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Le(r,s),ia(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Le(r,s),wl(e,t,r,s,n);case 3:e:{if(Ud(t),e===null)throw Error(k(387));r=t.pendingProps,a=t.memoizedState,s=a.element,gd(e,t),hi(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=xn(Error(k(423)),t),t=kl(e,t,r,n,s);break e}else if(r!==s){s=xn(Error(k(424)),t),t=kl(e,t,r,n,s);break e}else for(ye=ht(t.stateNode.containerInfo.firstChild),ve=t,D=!0,Te=null,n=pd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===s){t=Je(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return xd(t),e===null&&Js(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,qs(r,s)?o=null:a!==null&&qs(r,a)&&(t.flags|=32),Dd(e,t),le(e,t,o,n),t.child;case 6:return e===null&&Js(t),null;case 13:return $d(e,t,n);case 4:return Za(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Le(r,s),vl(e,t,r,s,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,a=t.memoizedProps,o=s.value,_(fi,r._currentValue),r._currentValue=o,a!==null)if(Oe(a.value,o)){if(a.children===s.children&&!he.current){t=Je(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=Xe(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?c.next=c:(c.next=g.next,g.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ea(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ea(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}le(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,ln(t,n),s=Ee(s),r=r(s),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,s=Le(r,t.pendingProps),s=Le(r.type,s),bl(e,t,r,s,n);case 15:return Wd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Le(r,s),qr(e,t),t.tag=1,ge(r)?(e=!0,ci(t)):e=!1,ln(t,n),Fd(t,r,s),na(t,r,s,n),sa(null,t,r,!0,e,n);case 19:return Hd(e,t,n);case 22:return Ad(e,t,n)}throw Error(k(156,t.tag))};function au(e,t){return Lc(e,t)}function n0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new n0(e,t,n,r)}function ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function r0(e){if(typeof e=="function")return ho(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ba)return 11;if(e===La)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,s,a){var o=2;if(r=e,typeof e=="function")ho(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Yt:return Lt(n.children,s,a,t);case Ia:o=8,s|=8;break;case zs:return e=ze(12,n,t,s|2),e.elementType=zs,e.lanes=a,e;case Ns:return e=ze(13,n,t,s),e.elementType=Ns,e.lanes=a,e;case Es:return e=ze(19,n,t,s),e.elementType=Es,e.lanes=a,e;case xc:return Fi(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hc:o=10;break e;case gc:o=9;break e;case Ba:o=11;break e;case La:o=14;break e;case nt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=ze(o,n,t,s),t.elementType=e,t.type=r,t.lanes=a,t}function Lt(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function Fi(e,t,n,r){return e=ze(22,e,r,t),e.elementType=xc,e.lanes=n,e.stateNode={isHidden:!1},e}function ms(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function ys(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function i0(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zi(0),this.expirationTimes=Zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zi(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function go(e,t,n,r,s,a,o,l,c){return e=new i0(e,t,n,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ze(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ka(a),e}function s0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ou(e){if(!e)return wt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ge(n))return od(e,n,t)}return t}function lu(e,t,n,r,s,a,o,l,c){return e=go(n,r,!0,e,s,a,o,l,c),e.context=ou(null),n=e.current,r=ce(),s=mt(n),a=Xe(r,s),a.callback=t??null,gt(n,a,s),e.current.lanes=s,xr(e,s,r),xe(e,r),e}function _i(e,t,n,r){var s=t.current,a=ce(),o=mt(s);return n=ou(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(s,t,o),e!==null&&(_e(e,s,o,a),Vr(e,s,o)),o}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xo(e,t){Bl(e,t),(e=e.alternate)&&Bl(e,t)}function a0(){return null}var cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function mo(e){this._internalRoot=e}Oi.prototype.render=mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));_i(e,t,null,null)};Oi.prototype.unmount=mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){_i(null,e,null,null)}),t[Ke]=null}};function Oi(e){this._internalRoot=e}Oi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ac();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&Uc(e)}};function yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ll(){}function o0(e,t,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var d=ki(o);a.call(d)}}var o=lu(t,r,e,0,null,!1,!1,"",Ll);return e._reactRootContainer=o,e[Ke]=o.current,rr(e.nodeType===8?e.parentNode:e),Wt(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=ki(c);l.call(d)}}var c=go(e,0,!1,null,null,!1,!1,"",Ll);return e._reactRootContainer=c,e[Ke]=c.current,rr(e.nodeType===8?e.parentNode:e),Wt(function(){_i(t,c,n,r)}),c}function Ai(e,t,n,r,s){var a=n._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var l=s;s=function(){var c=ki(o);l.call(c)}}_i(t,o,e,s)}else o=o0(n,t,e,s,r);return ki(o)}Oc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=On(t.pendingLanes);n!==0&&(Fa(t,n|1),xe(t,Q()),!(T&6)&&(mn=Q()+500,St()))}break;case 13:Wt(function(){var r=Ze(e,1);if(r!==null){var s=ce();_e(r,e,1,s)}}),xo(e,1)}};_a=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=ce();_e(t,e,134217728,n)}xo(e,134217728)}};Wc=function(e){if(e.tag===13){var t=mt(e),n=Ze(e,t);if(n!==null){var r=ce();_e(n,e,t,r)}xo(e,t)}};Ac=function(){return F};Dc=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Os=function(e,t,n){switch(t){case"input":if(Is(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Pi(r);if(!s)throw Error(k(90));yc(r),Is(r,s)}}}break;case"textarea":bc(e,n);break;case"select":t=n.value,t!=null&&rn(e,!!n.multiple,t,!1)}};Nc=uo;Ec=Wt;var l0={usingClientEntryPoint:!1,Events:[yr,Gt,Pi,Cc,zc,uo]},Mn={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},c0={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ic(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||a0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{zi=Wr.inject(c0),$e=Wr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l0;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yo(t))throw Error(k(200));return s0(e,t,null,n)};we.createRoot=function(e,t){if(!yo(e))throw Error(k(299));var n=!1,r="",s=cu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=go(e,1,!1,null,null,n,!1,r,s),e[Ke]=t.current,rr(e.nodeType===8?e.parentNode:e),new mo(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Ic(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Wt(e)};we.hydrate=function(e,t,n){if(!Wi(t))throw Error(k(200));return Ai(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!yo(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",o=cu;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=lu(t,null,e,1,n??null,s,!1,a,o),e[Ke]=t.current,rr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Oi(t)};we.render=function(e,t,n){if(!Wi(t))throw Error(k(200));return Ai(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!Wi(e))throw Error(k(40));return e._reactRootContainer?(Wt(function(){Ai(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=uo;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ai(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function du(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(du)}catch(e){console.error(e)}}du(),dc.exports=we;var d0=dc.exports,Ml=d0;Ss.createRoot=Ml.createRoot,Ss.hydrateRoot=Ml.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fr(){return fr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fr.apply(this,arguments)}var lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lt||(lt={}));const Tl="popstate";function u0(e){e===void 0&&(e={});function t(r,s){let{pathname:a,search:o,hash:l}=r.location;return ma("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:ji(s)}return p0(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function f0(){return Math.random().toString(36).substr(2,8)}function Fl(e,t){return{usr:e.state,key:e.key,idx:t}}function ma(e,t,n,r){return n===void 0&&(n=null),fr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jn(t):t,{state:n,key:t&&t.key||r||f0()})}function ji(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function p0(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:a=!1}=r,o=s.history,l=lt.Pop,c=null,d=g();d==null&&(d=0,o.replaceState(fr({},o.state,{idx:d}),""));function g(){return(o.state||{idx:null}).idx}function p(){l=lt.Pop;let j=g(),f=j==null?null:j-d;d=j,c&&c({action:l,location:w.location,delta:f})}function x(j,f){l=lt.Push;let u=ma(w.location,j,f);d=g()+1;let h=Fl(u,d),b=w.createHref(u);try{o.pushState(h,"",b)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(b)}a&&c&&c({action:l,location:w.location,delta:1})}function m(j,f){l=lt.Replace;let u=ma(w.location,j,f);d=g();let h=Fl(u,d),b=w.createHref(u);o.replaceState(h,"",b),a&&c&&c({action:l,location:w.location,delta:0})}function y(j){let f=s.location.origin!=="null"?s.location.origin:s.location.href,u=typeof j=="string"?j:ji(j);return u=u.replace(/ $/,"%20"),X(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let w={get action(){return l},get location(){return e(s,o)},listen(j){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Tl,p),c=j,()=>{s.removeEventListener(Tl,p),c=null}},createHref(j){return t(s,j)},createURL:y,encodeLocation(j){let f=y(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:x,replace:m,go(j){return o.go(j)}};return w}var _l;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_l||(_l={}));function h0(e,t,n){return n===void 0&&(n="/"),g0(e,t,n)}function g0(e,t,n,r){let s=typeof t=="string"?jn(t):t,a=bo(s.pathname||"/",n);if(a==null)return null;let o=uu(e);x0(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let d=E0(a);l=C0(o[c],d)}return l}function uu(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(a,o,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(X(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=vt([r,c.relativePath]),g=n.concat(c);a.children&&a.children.length>0&&(X(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),uu(a.children,t,g,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:j0(d,a.index),routesMeta:g})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let c of fu(a.path))s(a,o,c)}),t}function fu(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let o=fu(r.join("/")),l=[];return l.push(...o.map(c=>c===""?a:[a,c].join("/"))),s&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function x0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:S0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const m0=/^:[\w-]+$/,y0=3,v0=2,b0=1,w0=10,k0=-2,Ol=e=>e==="*";function j0(e,t){let n=e.split("/"),r=n.length;return n.some(Ol)&&(r+=k0),t&&(r+=v0),n.filter(s=>!Ol(s)).reduce((s,a)=>s+(m0.test(a)?y0:a===""?b0:w0),r)}function S0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function C0(e,t,n){let{routesMeta:r}=e,s={},a="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],d=l===r.length-1,g=a==="/"?t:t.slice(a.length)||"/",p=z0({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},g),x=c.route;if(!p)return null;Object.assign(s,p.params),o.push({params:s,pathname:vt([a,p.pathname]),pathnameBase:L0(vt([a,p.pathnameBase])),route:x}),p.pathnameBase!=="/"&&(a=vt([a,p.pathnameBase]))}return o}function z0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=N0(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((d,g,p)=>{let{paramName:x,isOptional:m}=g;if(x==="*"){let w=l[p]||"";o=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const y=l[p];return m&&!y?d[x]=void 0:d[x]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:o,pattern:e}}function N0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),vo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function E0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return vo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function bo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const R0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,P0=e=>R0.test(e);function I0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?jn(e):e,a;if(n)if(P0(n))a=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),vo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?a=Wl(n.substring(1),"/"):a=Wl(n,t)}else a=t;return{pathname:a,search:M0(r),hash:T0(s)}}function Wl(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function vs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function B0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pu(e,t){let n=B0(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hu(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=jn(e):(s=fr({},e),X(!s.pathname||!s.pathname.includes("?"),vs("?","pathname","search",s)),X(!s.pathname||!s.pathname.includes("#"),vs("#","pathname","hash",s)),X(!s.search||!s.search.includes("#"),vs("#","search","hash",s)));let a=e===""||s.pathname==="",o=a?"/":s.pathname,l;if(o==null)l=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),p-=1;s.pathname=x.join("/")}l=p>=0?t[p]:"/"}let c=I0(s,l),d=o&&o!=="/"&&o.endsWith("/"),g=(a||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||g)&&(c.pathname+="/"),c}const vt=e=>e.join("/").replace(/\/\/+/g,"/"),L0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,T0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function F0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gu=["post","put","patch","delete"];new Set(gu);const _0=["get",...gu];new Set(_0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pr(){return pr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pr.apply(this,arguments)}const wo=v.createContext(null),O0=v.createContext(null),Ut=v.createContext(null),Di=v.createContext(null),$t=v.createContext({outlet:null,matches:[],isDataRoute:!1}),xu=v.createContext(null);function W0(e,t){let{relative:n}=t===void 0?{}:t;br()||X(!1);let{basename:r,navigator:s}=v.useContext(Ut),{hash:a,pathname:o,search:l}=vu(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:vt([r,o])),s.createHref({pathname:c,search:l,hash:a})}function br(){return v.useContext(Di)!=null}function Sn(){return br()||X(!1),v.useContext(Di).location}function mu(e){v.useContext(Ut).static||v.useLayoutEffect(e)}function yu(){let{isDataRoute:e}=v.useContext($t);return e?Z0():A0()}function A0(){br()||X(!1);let e=v.useContext(wo),{basename:t,future:n,navigator:r}=v.useContext(Ut),{matches:s}=v.useContext($t),{pathname:a}=Sn(),o=JSON.stringify(pu(s,n.v7_relativeSplatPath)),l=v.useRef(!1);return mu(()=>{l.current=!0}),v.useCallback(function(d,g){if(g===void 0&&(g={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let p=hu(d,JSON.parse(o),a,g.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:vt([t,p.pathname])),(g.replace?r.replace:r.push)(p,g.state,g)},[t,r,o,a,e])}function vu(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(Ut),{matches:s}=v.useContext($t),{pathname:a}=Sn(),o=JSON.stringify(pu(s,r.v7_relativeSplatPath));return v.useMemo(()=>hu(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function D0(e,t){return U0(e,t)}function U0(e,t,n,r){br()||X(!1);let{navigator:s}=v.useContext(Ut),{matches:a}=v.useContext($t),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=Sn(),g;if(t){var p;let j=typeof t=="string"?jn(t):t;c==="/"||(p=j.pathname)!=null&&p.startsWith(c)||X(!1),g=j}else g=d;let x=g.pathname||"/",m=x;if(c!=="/"){let j=c.replace(/^\//,"").split("/");m="/"+x.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=h0(e,{pathname:m}),w=Q0(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:vt([c,s.encodeLocation?s.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:vt([c,s.encodeLocation?s.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,n,r);return t&&w?v.createElement(Di.Provider,{value:{location:pr({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:lt.Pop}},w):w}function $0(){let e=K0(),t=F0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:s},n):null,null)}const H0=v.createElement($0,null);class V0 extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement($t.Provider,{value:this.props.routeContext},v.createElement(xu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y0(e){let{routeContext:t,match:n,children:r}=e,s=v.useContext(wo);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement($t.Provider,{value:t},r)}function Q0(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(s=n)==null?void 0:s.errors;if(l!=null){let g=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);g>=0||X(!1),o=o.slice(0,Math.min(o.length,g+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<o.length;g++){let p=o[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=g),p.route.id){let{loaderData:x,errors:m}=n,y=p.route.loader&&x[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||y){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((g,p,x)=>{let m,y=!1,w=null,j=null;n&&(m=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||H0,c&&(d<0&&x===0?(J0("route-fallback"),y=!0,j=null):d===x&&(y=!0,j=p.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,x+1)),u=()=>{let h;return m?h=w:y?h=j:p.route.Component?h=v.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=g,v.createElement(Y0,{match:p,routeContext:{outlet:g,matches:f,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?v.createElement(V0,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var bu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bu||{}),wu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wu||{});function q0(e){let t=v.useContext(wo);return t||X(!1),t}function X0(e){let t=v.useContext(O0);return t||X(!1),t}function G0(e){let t=v.useContext($t);return t||X(!1),t}function ku(e){let t=G0(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function K0(){var e;let t=v.useContext(xu),n=X0(),r=ku();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Z0(){let{router:e}=q0(bu.UseNavigateStable),t=ku(wu.UseNavigateStable),n=v.useRef(!1);return mu(()=>{n.current=!0}),v.useCallback(function(s,a){a===void 0&&(a={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,pr({fromRouteId:t},a)))},[e,t])}const Al={};function J0(e,t,n){Al[e]||(Al[e]=!0)}function eh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function je(e){X(!1)}function th(e){let{basename:t="/",children:n=null,location:r,navigationType:s=lt.Pop,navigator:a,static:o=!1,future:l}=e;br()&&X(!1);let c=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:a,static:o,future:pr({v7_relativeSplatPath:!1},l)}),[c,l,a,o]);typeof r=="string"&&(r=jn(r));let{pathname:g="/",search:p="",hash:x="",state:m=null,key:y="default"}=r,w=v.useMemo(()=>{let j=bo(g,c);return j==null?null:{location:{pathname:j,search:p,hash:x,state:m,key:y},navigationType:s}},[c,g,p,x,m,y,s]);return w==null?null:v.createElement(Ut.Provider,{value:d},v.createElement(Di.Provider,{children:n,value:w}))}function nh(e){let{children:t,location:n}=e;return D0(ya(t),n)}new Promise(()=>{});function ya(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,s)=>{if(!v.isValidElement(r))return;let a=[...t,s];if(r.type===v.Fragment){n.push.apply(n,ya(r.props.children,a));return}r.type!==je&&X(!1),!r.props.index||!r.props.children||X(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ya(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},va.apply(this,arguments)}function rh(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,a;for(a=0;a<r.length;a++)s=r[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function ih(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function sh(e,t){return e.button===0&&(!t||t==="_self")&&!ih(e)}const ah=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],oh="6";try{window.__reactRouterVersion=oh}catch{}const lh="startTransition",Dl=Zu[lh];function ch(e){let{basename:t,children:n,future:r,window:s}=e,a=v.useRef();a.current==null&&(a.current=u0({window:s,v5Compat:!0}));let o=a.current,[l,c]=v.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},g=v.useCallback(p=>{d&&Dl?Dl(()=>c(p)):c(p)},[c,d]);return v.useLayoutEffect(()=>o.listen(g),[o,g]),v.useEffect(()=>eh(r),[r]),v.createElement(th,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const dh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ue=v.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:a,replace:o,state:l,target:c,to:d,preventScrollReset:g,viewTransition:p}=t,x=rh(t,ah),{basename:m}=v.useContext(Ut),y,w=!1;if(typeof d=="string"&&uh.test(d)&&(y=d,dh))try{let h=new URL(window.location.href),b=d.startsWith("//")?new URL(h.protocol+d):new URL(d),S=bo(b.pathname,m);b.origin===h.origin&&S!=null?d=S+b.search+b.hash:w=!0}catch{}let j=W0(d,{relative:s}),f=fh(d,{replace:o,state:l,target:c,preventScrollReset:g,relative:s,viewTransition:p});function u(h){r&&r(h),h.defaultPrevented||f(h)}return v.createElement("a",va({},x,{href:y||j,onClick:w||a?r:u,ref:n,target:c}))});var Ul;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ul||(Ul={}));var $l;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($l||($l={}));function fh(e,t){let{target:n,replace:r,state:s,preventScrollReset:a,relative:o,viewTransition:l}=t===void 0?{}:t,c=yu(),d=Sn(),g=vu(e,{relative:o});return v.useCallback(p=>{if(sh(p,n)){p.preventDefault();let x=r!==void 0?r:ji(d)===ji(g);c(e,{replace:x,state:s,preventScrollReset:a,relative:o,viewTransition:l})}},[d,c,g,r,s,n,e,a,o,l])}function ph(){const[e,t]=v.useState(!1),[n,r]=v.useState(!1),s=Sn(),a=yu();v.useEffect(()=>{const d=()=>t(window.scrollY>10);return window.addEventListener("scroll",d,{passive:!0}),d(),()=>window.removeEventListener("scroll",d)},[]);const o=[{label:"Home",to:"/"},{label:"Features",to:"/features"},{label:"Use Cases",to:"/use-cases"},{label:"How It Works",to:"/how-it-works"},{label:"Contact",to:"/contact"}],l=d=>d==="/"?s.pathname==="/":s.pathname.startsWith(d),c=()=>{r(!1),a("/qr-form")};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

        /* ── TOP ACCENT LINE ── */
        .sfs-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
          font-family: 'Space Grotesk', sans-serif;
        }

        .sfs-topbar {
          height: 2px;
          background: linear-gradient(90deg, #0B2545 0%, #2ebd3a 35%, #e8f8eb 50%, #2ebd3a 65%, #0B2545 100%);
        }

        /* ── MAIN BAR ── */
        .sfs-bar {
          height: 80px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(226,232,240,0.8);
          transition: height .35s ease, box-shadow .35s ease;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04);
        }
        .sfs-nav.scrolled .sfs-bar {
          height: 66px;
          box-shadow: 0 4px 24px rgba(6,78,59,0.08), 0 1px 0 rgba(0,0,0,0.04);
        }

        /* ══════════════════════════
           LOGO — clean, layered mark
        ══════════════════════════ */
        .sfs-logo {
          display: flex; align-items: center; gap: 14px;
          text-decoration: none; flex-shrink: 0;
        }

        /* The badge itself — clean rounded square aspect ratio */
        .sfs-badge {
          position: relative;
          width: 56px; height: 56px; flex-shrink: 0;
          transition: transform .4s cubic-bezier(.34,1.3,.64,1);
        }
        .sfs-logo:hover .sfs-badge { transform: scale(1.07) translateY(-1px); }
        .sfs-nav.scrolled .sfs-badge { width: 46px; height: 46px; }

        /* Outer ring — the identity border in high-tech corporate gradient */
        .sfs-badge-ring {
          position: absolute; inset: 0;
          border-radius: 12px;
          background: linear-gradient(145deg, #2ebd3a, #0B2545);
          padding: 2px;
          transition: border-radius .35s ease;
        }
        .sfs-nav.scrolled .sfs-badge-ring { border-radius: 10px; }

        /* Inner face — padded to contain the logo uncropped */
        .sfs-badge-face {
          width: 100%; height: 100%;
          border-radius: 10px;
          background: #fff;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          position: relative;
          padding: 4px;
        }
        .sfs-nav.scrolled .sfs-badge-face { border-radius: 8px; }

        /* Corner accent marks — minimal, structural */
        .sfs-badge-face::before,
        .sfs-badge-face::after {
          content: "";
          position: absolute;
          width: 10px; height: 10px;
          border-color: #2ebd3a; border-style: solid;
          opacity: 0.6;
          transition: opacity .3s ease;
        }
        .sfs-badge-face::before {
          top: 4px; left: 4px;
          border-width: 1.5px 0 0 1.5px;
          border-radius: 2px 0 0 0;
        }
        .sfs-badge-face::after {
          bottom: 4px; right: 4px;
          border-width: 0 1.5px 1.5px 0;
          border-radius: 0 0 2px 0;
        }
        .sfs-logo:hover .sfs-badge-face::before,
        .sfs-logo:hover .sfs-badge-face::after { opacity: 1; }

        /* Logo image — perfectly centered & bounded */
        .sfs-badge-img {
          width: 90%; height: 90%;
          object-fit: contain;
          display: block;
          position: relative; z-index: 1;
          transition: transform .4s cubic-bezier(.34,1.3,.64,1);
          border-radius: 6px;
        }
        .sfs-logo:hover .sfs-badge-img { transform: scale(1.05); }

        /* Subtle scan line — single, calm */
        .sfs-badge-scan {
          position: absolute;
          left: 6px; right: 6px; height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(46, 189, 58, 0.5), transparent);
          border-radius: 999px;
          animation: scan 3s ease-in-out infinite;
          z-index: 2;
          pointer-events: none;
        }
        @keyframes scan {
          0%   { top: 12%; opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: .8; }
          100% { top: 88%; opacity: 0; }
        }

        /* ── LOGO TEXT ── */
        .sfs-wordmark {
          display: flex; flex-direction: column;
          justify-content: center; gap: 2px;
        }

        /* Row 1: Brand name + pill inline */
        .sfs-wordmark-row1 {
          display: flex; align-items: center; gap: 8px; line-height: 1;
        }

        .sfs-wordmark-primary {
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem; font-weight: 900;
          letter-spacing: -.03em; line-height: 1;
          color: #0B2545; white-space: nowrap;
        }
        .sfs-wordmark-primary .accent {
          background: #2ebd3a;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Status pill — inline next to brand name */
        .sfs-status {
          display: inline-flex; align-items: center; gap: 4px;
          background: #e8f8eb; border: 1px solid rgba(46, 189, 58, 0.25);
          border-radius: 999px; padding: 2px 7px;
          flex-shrink: 0;
        }
        .sfs-status-pulse {
          width: 5px; height: 5px; border-radius: 50%; background: #2ebd3a;
          animation: pulse-dot 2.2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: .5; transform: scale(.85); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        .sfs-status-label {
          font-size: 9px; font-weight: 800;
          letter-spacing: .16em; text-transform: uppercase; color: #2ebd3a;
        }

        /* Row 2: Subtitle */
        .sfs-wordmark-secondary {
          font-size: 10px; font-weight: 600;
          letter-spacing: .05em; color: #475569;
          text-transform: uppercase; line-height: 1; white-space: nowrap;
        }

        /* ── NAV LINKS ── */
        .sfs-links {
          display: flex; align-items: center; gap: 0;
          margin-left: auto; margin-right: 20px;
        }
        .sfs-link {
          position: relative; padding: 8px 14px; border-radius: 10px;
          text-decoration: none; color: #475569;
          font-size: 13px; font-weight: 600;
          letter-spacing: .01em;
          transition: color .2s ease, background .2s ease;
        }
        .sfs-link:hover { color: #2ebd3a; background: rgba(232, 248, 235, .6); }
        .sfs-link.active { color: #2ebd3a; }
        .sfs-link.active::after {
          content: ""; position: absolute;
          left: 14px; right: 14px; bottom: 4px;
          height: 2px; border-radius: 999px;
          background: linear-gradient(90deg, #2ebd3a, #4bd557);
        }

        /* ── ACTION BUTTONS ── */
        .sfs-actions { display: flex; align-items: center; gap: 10px; }

        .sfs-login {
          height: 40px; display: flex; align-items: center;
          padding: 0 20px; border-radius: 10px; text-decoration: none;
          font-size: 13px; font-weight: 700; color: #0B2545;
          border: 1.5px solid rgba(46, 189, 58, .3); background: transparent;
          transition: all .22s ease;
        }
        .sfs-login:hover {
          background: #e8f8eb;
          border-color: rgba(46, 189, 58, .65);
          transform: translateY(-1px);
        }

        .sfs-prereg {
          height: 40px; display: flex; align-items: center; gap: 8px;
          padding: 0 22px; border-radius: 10px;
          background: #2ebd3a;
          color: #fff; border: none; cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: .01em;
          box-shadow: 0 1px 0 rgba(0,0,0,.12), 0 4px 16px rgba(46, 189, 58, .3);
          transition: all .22s ease; white-space: nowrap;
        }
        .sfs-prereg:hover {
          background: #1b7a21;
          transform: translateY(-1px);
          box-shadow: 0 1px 0 rgba(0,0,0,.12), 0 8px 24px rgba(46, 189, 58, .38);
        }
        .prereg-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4bd557; flex-shrink: 0;
          animation: pulse-dot 1.8s ease-in-out infinite;
        }

        /* ── MOBILE ── */
        .sfs-mobile-btn {
          display: none; width: 40px; height: 40px; border: none;
          border-radius: 10px; background: #e8f8eb;
          border: 1px solid rgba(46, 189, 58, 0.2);
          cursor: pointer; font-size: 18px; color: #0B2545;
          align-items: center; justify-content: center;
        }
 
        .sfs-mobile-overlay {
          position: fixed; inset: 0; background: rgba(15,23,42,.5);
          backdrop-filter: blur(8px); opacity: 0; pointer-events: none;
          transition: opacity .3s ease; z-index: 9998;
        }
        .sfs-mobile-overlay.open { opacity: 1; pointer-events: auto; }
        .sfs-mobile-drawer {
          position: absolute; top: 0; right: 0;
          width: min(88vw, 310px); height: 100%;
          background: #fff;
          padding: 84px 20px 30px;
          display: flex; flex-direction: column; gap: 6px;
          transform: translateX(100%); transition: transform .32s cubic-bezier(.4,0,.2,1);
          box-shadow: -8px 0 40px rgba(15,23,42,.12);
        }
        .sfs-mobile-overlay.open .sfs-mobile-drawer { transform: translateX(0); }
        .sfs-mobile-link {
          padding: 12px 14px; border-radius: 10px; text-decoration: none;
          color: #334155; font-size: 14.5px; font-weight: 600;
          transition: all .15s ease;
        }
        .sfs-mobile-link:hover, .sfs-mobile-link.active {
          background: rgba(232, 248, 235, .8); color: #2ebd3a;
        }
        .sfs-mobile-actions { margin-top: 16px; display: flex; flex-direction: column; gap: 10px; }

        @media (max-width: 980px) {
          .sfs-links, .sfs-actions { display: none; }
          .sfs-mobile-btn { display: flex; }
          .sfs-bar { height: 68px; padding: 0 18px; }
          .sfs-badge { width: 48px; height: 48px; }
        }
        @media (max-width: 480px) {
          .sfs-status { display: none; }
        }
        @media (max-width: 380px) {
          .sfs-wordmark-secondary { display: none; }
        }
      `}),i.jsxs("header",{className:`sfs-nav ${e?"scrolled":""}`,children:[i.jsx("div",{className:"sfs-topbar"}),i.jsxs("div",{className:"sfs-bar",style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:e?"66px":"80px",padding:"0 40px",transition:"all 0.35s ease"},children:[i.jsxs(Ue,{to:"/",className:"sfs-logo",style:{display:"flex",alignItems:"center",gap:"14px",textDecoration:"none"},children:[i.jsx("div",{className:"sfs-badge",children:i.jsx("div",{className:"sfs-badge-ring",children:i.jsxs("div",{className:"sfs-badge-face",children:[i.jsx("img",{src:"/logo.png",alt:"ScanForSafe",className:"sfs-badge-img"}),i.jsx("div",{className:"sfs-badge-scan"})]})})}),i.jsxs("div",{className:"sfs-wordmark",children:[i.jsxs("div",{className:"sfs-wordmark-row1",children:[i.jsxs("div",{className:"sfs-wordmark-primary",children:[i.jsx("span",{className:"accent",children:"ScanFor"}),"Safe"]}),i.jsxs("div",{className:"sfs-status",children:[i.jsx("span",{className:"sfs-status-pulse"}),i.jsx("span",{className:"sfs-status-label",children:"Smart Shield"})]})]}),i.jsx("div",{className:"sfs-wordmark-secondary",children:"Innovations Pvt Ltd"})]})]}),i.jsx("nav",{className:"sfs-links",style:{display:"flex",alignItems:"center",gap:"0px"},children:o.map(d=>i.jsx(Ue,{to:d.to,className:`sfs-link ${l(d.to)?"active":""}`,children:d.label},d.label))}),i.jsxs("div",{className:"sfs-actions",style:{display:"flex",alignItems:"center",gap:"10px"},children:[i.jsx(Ue,{to:"/login",className:"sfs-login",style:{display:"flex",alignItems:"center"},children:"Login"}),i.jsxs("button",{className:"sfs-prereg",onClick:c,style:{display:"flex",alignItems:"center"},children:[i.jsx("span",{className:"prereg-dot"}),"Pre Registration"]})]}),i.jsx("button",{className:"sfs-mobile-btn",onClick:()=>r(!0),children:"☰"})]})]}),i.jsx("div",{className:`sfs-mobile-overlay ${n?"open":""}`,onClick:()=>r(!1),children:i.jsxs("div",{className:"sfs-mobile-drawer",onClick:d=>d.stopPropagation(),children:[i.jsx("button",{onClick:()=>r(!1),style:{position:"absolute",top:"16px",right:"16px",width:"36px",height:"36px",border:"none",borderRadius:"9px",background:"#e8f8eb",cursor:"pointer",fontSize:"15px",color:"#0B2545",display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"}),o.map(d=>i.jsx(Ue,{to:d.to,className:`sfs-mobile-link ${l(d.to)?"active":""}`,onClick:()=>r(!1),children:d.label},d.label)),i.jsxs("div",{className:"sfs-mobile-actions",children:[i.jsx(Ue,{to:"/login",className:"sfs-login",onClick:()=>r(!1),children:"Login"}),i.jsxs("button",{className:"sfs-prereg",onClick:c,children:[i.jsx("span",{className:"prereg-dot"})," Pre Registration"]})]})]})})]})}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ju=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=v.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:a,iconNode:o,...l},c)=>v.createElement("svg",{ref:c,...gh,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ju("lucide",s),...l},[...o.map(([d,g])=>v.createElement(d,g)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=(e,t)=>{const n=v.forwardRef(({className:r,...s},a)=>v.createElement(xh,{ref:a,iconNode:t,className:ju(`lucide-${hh(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=z("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=z("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=z("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=z("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=z("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=z("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=z("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=z("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=z("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=z("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=z("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=z("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=z("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=z("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=z("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=z("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=z("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=z("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=z("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=z("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=z("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=z("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=z("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=z("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=z("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=z("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=z("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=z("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=z("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=z("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=z("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=z("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=z("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=z("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=z("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=z("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=z("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=z("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=z("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=z("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=z("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=z("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=z("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=z("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=z("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=z("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=z("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=z("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=z("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=z("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=z("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=z("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=z("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=z("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=z("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=z("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=z("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=z("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Zh="/logo.png";function Jh(){const[e,t]=v.useState(""),[n,r]=v.useState(!1),s=l=>{l.preventDefault(),e.trim()&&(r(!0),setTimeout(()=>{r(!1),t("")},3e3))},a=[{label:"Home",to:"/"},{label:"Features",to:"/features"},{label:"Use Cases",to:"/use-cases"},{label:"How It Works",to:"/how-it-works"},{label:"Contact",to:"/contact"}],o=[{Icon:Ph,href:"https://facebook.com",label:"Facebook"},{Icon:Th,href:"https://instagram.com",label:"Instagram"},{Icon:Xh,href:"https://twitter.com",label:"Twitter"},{Icon:Wh,href:"https://linkedin.com",label:"LinkedIn"},{Icon:Pu,href:"https://telegram.org",label:"Telegram"}];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
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

        /* Parallax support for Safari/mobile where fixed attachment breaks */
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

        /* ══ GRID LAYOUT ══ */
        .sfs-footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: clamp(30px, 5vw, 80px);
          margin-bottom: 60px;
        }

        /* ══ COLUMN 1: BRAND ══ */
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

        /* Social Icons */
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

        .sfs-social-icon:hover {
          background: #2ebd3a;
          color: #ffffff;
          border-color: #2ebd3a;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(46, 189, 58, 0.4);
        }

        /* ══ COLUMN 2: NAVIGATION ══ */
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

        /* ══ COLUMN 3: CONTACT ══ */
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

        /* ══ NEWSLETTER ROW ══ */
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

        /* ══ FOOTER BOTTOM ══ */
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

        /* ══ RESPONSIVE BREAKPOINTS ══ */
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
      `}),i.jsxs("footer",{className:"sfs-footer",children:[i.jsx("div",{className:"sfs-footer-overlay"}),i.jsxs("div",{className:"sfs-footer-container",children:[i.jsxs("div",{className:"sfs-footer-newsletter-wrap",children:[i.jsxs("div",{className:"sfs-newsletter-info",children:[i.jsx("h3",{children:"Get Safety Alerts & Updates"}),i.jsx("p",{children:"Subscribe to our corporate newsletter for modern verification insights."})]}),i.jsxs("form",{onSubmit:s,className:"sfs-newsletter-form",children:[i.jsx("input",{className:"sfs-newsletter-input",type:"email",required:!0,placeholder:n?"Thanks for subscribing!":"Enter your corporate email",value:e,onChange:l=>t(l.target.value),disabled:n}),i.jsx("button",{type:"submit",className:"sfs-newsletter-btn",disabled:n,children:n?"Subscribed!":"Subscribe"})]})]}),i.jsxs("div",{className:"sfs-footer-main",children:[i.jsxs("div",{className:"sfs-footer-brand",children:[i.jsxs(Ue,{to:"/",className:"sfs-footer-logo-wrap",style:{textDecoration:"none"},children:[i.jsx("div",{className:"sfs-footer-logo-box",children:i.jsx("img",{src:Zh,alt:"ScanForSafe Logo",className:"sfs-footer-logo-img"})}),i.jsxs("div",{children:[i.jsxs("h2",{className:"sfs-footer-title",children:["Scan",i.jsx("span",{children:"ForSafe"})]}),i.jsx("div",{className:"sfs-footer-tagline",children:"Smart Shield"})]})]}),i.jsx("p",{className:"sfs-footer-desc",children:"Pioneering secure QR code solutions, visual verification systems, and smart tracking technologies. Empowering a safer and more authentic world through trusted hardware and visual tags."}),i.jsx("div",{className:"sfs-footer-socials",children:o.map(({Icon:l,href:c,label:d},g)=>i.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"sfs-social-icon",title:d,children:i.jsx(l,{size:18})},g))})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"sfs-footer-section-title",children:"Navigation"}),i.jsx("div",{className:"sfs-footer-links",children:a.map((l,c)=>i.jsxs(Ue,{to:l.to,className:"sfs-footer-link",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[i.jsx("span",{className:"sfs-footer-link-dot"}),l.label]},c))})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"sfs-footer-section-title",children:"Contact Us"}),i.jsxs("div",{className:"sfs-footer-contact-list",children:[i.jsxs("div",{className:"sfs-footer-contact-item",children:[i.jsx(Mt,{className:"sfs-footer-contact-icon",size:17}),i.jsxs("div",{className:"sfs-footer-contact-text",children:[i.jsx("strong",{children:"Phone"}),"+91 98765 43210"]})]}),i.jsxs("div",{className:"sfs-footer-contact-item",children:[i.jsx(zu,{className:"sfs-footer-contact-icon",size:17}),i.jsxs("div",{className:"sfs-footer-contact-text",children:[i.jsx("strong",{children:"Email"}),"info@scanforsafe.com"]})]}),i.jsxs("div",{className:"sfs-footer-contact-item",children:[i.jsx(yn,{className:"sfs-footer-contact-icon",size:17}),i.jsxs("div",{className:"sfs-footer-contact-text",children:[i.jsx("strong",{children:"Corporate Office"}),"SFSI Innovations Tower, Phase-2, Cyber Heights, Hyderabad, India"]})]})]})]})]}),i.jsxs("div",{className:"sfs-footer-bottom",children:[i.jsxs("p",{className:"sfs-footer-copy",children:["© ",new Date().getFullYear()," ",i.jsx("strong",{children:"ScanForSafe Innovations Pvt Ltd"}),". All rights reserved."]}),i.jsxs("div",{className:"sfs-footer-badges",children:[i.jsxs("span",{className:"sfs-footer-badge",children:[i.jsx(hr,{size:14,className:"sfs-footer-badge-icon"}),"SSL Secured"]}),i.jsxs("span",{className:"sfs-footer-badge",children:[i.jsx(Pe,{size:14,className:"sfs-footer-badge-icon"}),"ISO 27001 Certified"]}),i.jsxs("span",{className:"sfs-footer-badge",children:[i.jsx(_h,{size:14,className:"sfs-footer-badge-icon"}),"Eco Friendly tags"]})]})]})]})]})]})}const e1="/assets/car-BSIz0SDG.png",t1="/assets/bike-CEMC_UmP.png",n1="/assets/luggage-g7ehyfUE.png",bs="/assets/qr-B8XSq41G.png",Yl=["🛡️  10,000+ Assets Protected","📡  Live QR & NFC Scanning","🚨  Instant Owner Alerts","🔐  End-to-End Encrypted","⚡  Scan in Under 2 Seconds","🌍  Available in 50+ Countries","✅  4.9 / 5 User Rating","📲  15,000+ Scans Today","🏆  #1 Asset Protection Platform","🔔  8,000+ Alerts Sent Today"],Ql=[{label:"Vehicle Verified",owner:"Rahul Verma",avatar:bs,phone:"+91 98765 43210",email:"rahul.verma@mail.com",address:"23, Green Park, New Delhi",asset:"SFS-CAR-4587",emergency:"+91 99887 77665",registered:"12 May 2024, 09:15 AM",img:e1,color:"#2ebd3a"},{label:"Bike Verified",owner:"Aarav Sharma",avatar:bs,phone:"+91 98345 22119",email:"aarav.sharma@mail.com",address:"Plot 7, Andheri West, Mumbai",asset:"SFS-BIKE-7712",emergency:"+91 88774 66332",registered:"15 May 2024, 10:30 AM",img:t1,color:"#4bd557"},{label:"Luggage Verified",owner:"Priya Kapoor",avatar:bs,phone:"+91 93456 77889",email:"priya.kapoor@mail.com",address:"12, Koramangala, Bangalore",asset:"SFS-LUG-1123",emergency:"+91 90909 88776",registered:"28 Mar 2024, 02:45 PM",img:n1,color:"#7ded88"}],r1=`
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }

:root {
  --g1: #2ebd3a;
  --g2: #2ebd3a;
  --g3: #4bd557;
  --g4: #e8f8eb;
  --bg: #f8fafc;
  --dark: #0B2545;
  --mid: #4b6357;
  --phone-bg: #081c35;
}

/* ══ ROOT HERO ══ */
.sfs-hero {
  font-family: 'DM Sans', sans-serif;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--dark);
  border: 2px solid rgba(46, 189, 58,.28);
  border-radius: 28px;
  box-shadow:
    0 0 0 1px rgba(46, 189, 58,.10),
    0 4px 32px rgba(46, 189, 58,.10),
    inset 0 1px 0 rgba(255,255,255,.85);
}

/* ══ BACKGROUND ══ */
.sfs-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  border-radius: 26px;
}
.sfs-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 1000px 700px at 115% 10%, rgba(46, 189, 58,.13) 0%, transparent 60%),
    radial-gradient(ellipse 700px 600px at -15% 100%, rgba(46, 189, 58,.09) 0%, transparent 58%),
    radial-gradient(ellipse 400px 300px at 60% 50%, rgba(125, 237, 136,.05) 0%, transparent 70%),
    linear-gradient(165deg, #f8fafc 0%, #f8fafc 45%, #f7fef9 100%);
}

.sfs-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(46, 189, 58,.35);
  pointer-events: none;
}

.sfs-waves {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.sfs-mesh {
  position: absolute;
  top: -80px; right: -80px;
  width: 600px; height: 600px;
  opacity: .45;
  animation: meshRotate 40s linear infinite;
}
@keyframes meshRotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.sfs-globe-wrap {
  position: absolute;
  bottom: -90px; left: -80px;
  width: 340px; height: 340px;
  animation: globePulse 7s ease-in-out infinite;
  z-index: 1;
}
@keyframes globePulse {
  0%,100% { transform: scale(1) rotate(-5deg); opacity:.50; }
  50%      { transform: scale(1.05) rotate(-2deg); opacity:.68; }
}

/* ══ LAYOUT ══ */
.sfs-grid {
  flex: 1;
  max-width: 1440px; width: 100%; margin: 0 auto;
  display: grid; grid-template-columns: 46% 54%;
  align-items: center;
  padding:96px;
  position: relative; z-index: 2;
}

/* ══ LEFT ══ */
.sfs-left { padding-right: 32px; }

.sfs-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(12px);
  border: 1.5px solid rgba(46, 189, 58,.32);
  border-radius: 999px;
  padding: 7px 18px 7px 12px;
  margin-bottom: 24px;
  font-size: 10px; font-weight: 800;
  letter-spacing: .10em; color: #0B2545;
  text-transform: uppercase;
  box-shadow: 0 2px 20px rgba(46, 189, 58,.14), 0 0 0 5px rgba(46, 189, 58,.06);
  animation: slideInLeft .7s cubic-bezier(.22,1,.36,1) both;
}
.sfs-badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--g1);
  animation: livePulse 2s ease-out infinite;
}
@keyframes livePulse {
  0%   { box-shadow: 0 0 0 0 rgba(46, 189, 58,.7); }
  70%  { box-shadow: 0 0 0 9px rgba(46, 189, 58,0); }
  100% { box-shadow: 0 0 0 0 rgba(46, 189, 58,0); }
}

.sfs-h1 {
  font-family: 'Sora', sans-serif;
  font-size: 76px; line-height: .90;
  letter-spacing: -4.5px; font-weight: 900;
  color: var(--dark); margin-bottom: 20px;
  animation: slideInLeft .85s .08s cubic-bezier(.22,1,.36,1) both;
}
.sfs-h1 .green {
  background: linear-gradient(125deg, #0B2545 0%, #2ebd3a 55%, #4bd557 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}
.sfs-h1 .outline {
  color: transparent;
  -webkit-text-stroke: 2.5px rgba(46, 189, 58,.28);
  animation: outlinePulse 4s ease-in-out infinite 0.5s;
}
@keyframes outlinePulse {
  0%,100% { -webkit-text-stroke-color: rgba(46, 189, 58,.28); }
  50%      { -webkit-text-stroke-color: rgba(46, 189, 58,.50); }
}

.sfs-sub {
  font-size: 15.5px; line-height: 1.88; color: var(--mid);
  max-width: 510px; margin-bottom: 32px;
  font-weight: 400;
  animation: slideInLeft .9s .16s cubic-bezier(.22,1,.36,1) both;
}

/* Feature cards */
.sfs-feats { display: flex; gap: 12px; margin-bottom: 32px; }
.sfs-feat {
  flex: 1;
  background: rgba(255,255,255,.85);
  backdrop-filter: blur(14px);
  border: 1.5px solid rgba(46, 189, 58,.16);
  border-radius: 22px; padding: 22px 16px 20px;
  box-shadow: 0 2px 20px rgba(0,0,0,.04), 0 0 0 1px rgba(255,255,255,.6);
  position: relative; overflow: hidden;
  transition: .35s cubic-bezier(.34,1.46,.64,1);
  cursor: default;
}
.sfs-feat::before {
  content: "";
  position: absolute; top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(46, 189, 58,.5), transparent);
  transform: scaleX(0); transform-origin: center;
  transition: .35s ease;
}
.sfs-feat::after {
  content: "";
  position: absolute; inset-inline: 0; bottom: 0;
  height: 3px;
  background: linear-gradient(90deg, #2ebd3a, #2ebd3a);
  transform: scaleX(0); transform-origin: left;
  transition: .35s ease;
  border-radius: 0 0 22px 22px;
}
.sfs-feat:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 22px 48px rgba(46, 189, 58,.15), 0 0 0 1.5px rgba(46, 189, 58,.22); border-color: rgba(46, 189, 58,.30); }
.sfs-feat:hover::before, .sfs-feat:hover::after { transform: scaleX(1); }
.sfs-feat-ico {
  width: 46px; height: 46px; border-radius: 14px;
  background: linear-gradient(135deg, #e8f8eb, #e8f8eb);
  display: flex; align-items: center; justify-content: center;
  font-size: 21px; margin-bottom: 13px;
  transition: .35s cubic-bezier(.34,1.46,.64,1);
  box-shadow: 0 4px 12px rgba(46, 189, 58,.18);
  border: 1px solid rgba(46, 189, 58,.18);
}
.sfs-feat:hover .sfs-feat-ico { transform: scale(1.12) rotate(-6deg); box-shadow: 0 8px 20px rgba(46, 189, 58,.25); }
.sfs-feat h4 { font-size: 13.5px; font-weight: 700; color: var(--dark); margin-bottom: 6px; }
.sfs-feat p  { font-size: 11px; line-height: 1.65; color: #688070; }
.sfs-feat:nth-child(1) { animation: fadeUp .6s .28s both; }
.sfs-feat:nth-child(2) { animation: fadeUp .6s .40s both; }
.sfs-feat:nth-child(3) { animation: fadeUp .6s .52s both; }

/* Buttons */
.sfs-actions {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 28px;
  animation: fadeUp .6s .62s both;
}
.sfs-btn-main {
  border: none;
  background: linear-gradient(135deg, #2ebd3a 0%, #2ebd3a 60%, #0B2545 100%);
  color: white; padding: 17px 34px; border-radius: 16px;
  font-size: 15px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  cursor: pointer; display: flex; align-items: center; gap: 9px;
  box-shadow: 0 12px 32px rgba(46, 189, 58,.35), 0 2px 8px rgba(46, 189, 58,.20);
  transition: .35s cubic-bezier(.34,1.46,.64,1);
  position: relative; overflow: hidden;
  letter-spacing: -.01em;
  outline: 2px solid transparent;
}
.sfs-btn-main::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,.18) 0%, transparent 60%);
  pointer-events: none;
}
.sfs-btn-main:hover { transform: translateY(-4px) scale(1.03); box-shadow: 0 20px 48px rgba(46, 189, 58,.42); outline-color: rgba(46, 189, 58,.30); }
.sfs-btn-main:active { transform: translateY(-1px) scale(.99); }
.sfs-btn-sec {
  border: 1.5px solid rgba(46, 189, 58,.30);
  background: rgba(255,255,255,.80);
  backdrop-filter: blur(12px);
  padding: 16px 28px; border-radius: 16px;
  font-size: 14.5px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; color: var(--dark); transition: .28s ease;
}
.sfs-btn-sec:hover { transform: translateY(-4px); border-color: rgba(46, 189, 58,.55); box-shadow: 0 12px 28px rgba(46, 189, 58,.10); }
.sfs-play-ring {
  width: 30px; height: 30px; border-radius: 50%;
  background: linear-gradient(135deg, #2ebd3a, #2ebd3a);
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; color: white;
  box-shadow: 0 4px 12px rgba(46, 189, 58,.30);
  transition: .28s;
  border: 1.5px solid rgba(255,255,255,.30);
}
.sfs-btn-sec:hover .sfs-play-ring { transform: scale(1.12) rotate(8deg); }

/* Stats row */
.sfs-stats {
  display: flex; gap: 24px; align-items: center;
  margin-bottom: 22px;
  animation: fadeUp .6s .72s both;
}
.sfs-stat { display: flex; flex-direction: column; }
.sfs-stat-num {
  font-family: 'Sora', sans-serif;
  font-size: 22px; font-weight: 800;
  background: linear-gradient(125deg, #0B2545, #2ebd3a);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  line-height: 1;
}
.sfs-stat-lbl { font-size: 10.5px; color: var(--mid); margin-top: 3px; font-weight: 500; }
.sfs-stat-div { width: 1px; height: 36px; background: rgba(46, 189, 58,.22); }

/* Scroll indicator */
.sfs-scroll {
  display: flex; align-items: center; gap: 10px;
  animation: fadeUp .6s .82s both; opacity: .55;
}
.sfs-scroll-mouse {
  width: 22px; height: 34px;
  border: 2px solid rgba(46, 189, 58,.40);
  border-radius: 11px;
  display: flex; justify-content: center;
}
.sfs-scroll-wheel {
  width: 4px; height: 8px;
  background: var(--g1); border-radius: 2px;
  margin-top: 5px;
  animation: scrollWheel 1.8s ease-in-out infinite;
}
@keyframes scrollWheel {
  0%,100% { transform: translateY(0); opacity: 1; }
  50%      { transform: translateY(8px); opacity: .25; }
}
.sfs-scroll span { font-size: 10.5px; color: var(--mid); letter-spacing: .07em; font-weight: 500; }

/* ══ RIGHT ══ */
.sfs-right {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  min-height: 740px;
}
.sfs-shield {
  position: absolute;
  top: 50px; right: 20px;
  width: 116px; height: 116px;
  z-index: 10;
  animation: shieldFloat 5s ease-in-out infinite;
  filter: drop-shadow(0 16px 32px rgba(46, 189, 58,.26));
}
@keyframes shieldFloat {
  0%,100% { transform: translateY(0) rotate(3deg) scale(1); }
  50%      { transform: translateY(-15px) rotate(-1deg) scale(1.03); }
}
.sfs-lock {
  position: absolute;
  right: -4px; top: 50%;
  transform: translateY(-50%);
  width: 58px; height: 58px;
  background: rgba(255,255,255,.95);
  backdrop-filter: blur(12px);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 25px;
  box-shadow: 0 8px 32px rgba(0,0,0,.12), 0 0 0 1px rgba(46, 189, 58,.18);
  border: 1.5px solid rgba(46, 189, 58,.22);
  z-index: 10;
  animation: lockFloat 5s ease-in-out infinite 1s;
}
@keyframes lockFloat {
  0%,100% { transform: translateY(-50%) scale(1); }
  50%      { transform: translateY(calc(-50% - 11px)) scale(1.06); }
}
.sfs-alert-badge {
  position: absolute;
  left: 8px; top: 105px;
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 10px 14px;
  box-shadow: 0 8px 28px rgba(0,0,0,.09), 0 0 0 1px rgba(46, 189, 58,.10);
  border: 1.5px solid rgba(46, 189, 58,.16);
  z-index: 10;
  display: flex; align-items: center; gap: 9px;
  animation: alertFloat 6s ease-in-out infinite .8s;
}
@keyframes alertFloat {
  0%,100% { transform: translateY(0) rotate(-1deg); }
  50%      { transform: translateY(-9px) rotate(0deg); }
}
.sfs-alert-ico {
  width: 34px; height: 34px; border-radius: 10px;
  background: linear-gradient(135deg, #e8f8eb, #e8f8eb);
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; flex-shrink: 0;
  border: 1px solid rgba(46, 189, 58,.18);
}
.sfs-alert-text h5 { font-size: 11.5px; font-weight: 700; color: var(--dark); }
.sfs-alert-text p  { font-size: 9.5px; color: var(--mid); margin-top: 2px; }
.sfs-scan-badge {
  position: absolute;
  right: 15px; bottom: 120px;
  background: linear-gradient(135deg, #2ebd3a, #2ebd3a);
  border-radius: 14px;
  padding: 10px 16px;
  z-index: 10;
  box-shadow: 0 10px 28px rgba(46, 189, 58,.35);
  border: 1.5px solid rgba(255,255,255,.20);
  animation: scanBadgeFloat 4.5s ease-in-out infinite 1.5s;
  color: white;
  display: flex; align-items: center; gap: 8px;
}
@keyframes scanBadgeFloat {
  0%,100% { transform: translateY(0) rotate(1deg); }
  50%      { transform: translateY(-8px) rotate(-1deg); }
}
.sfs-scan-badge-ico { font-size: 18px; }
.sfs-scan-badge-text h5 { font-size: 11.5px; font-weight: 800; }
.sfs-scan-badge-text p  { font-size: 9px; opacity: .85; margin-top: 1px; }

.sfs-stage {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  width: 100%;
}

/* Radial rings */
.sfs-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(46, 189, 58,.14);
  pointer-events: none;
  z-index: 1;
}
.sfs-ring-1 { width: 360px; height: 360px; animation: ringPulse 4s ease-in-out infinite; }
.sfs-ring-2 { width: 500px; height: 500px; animation: ringPulse 4s ease-in-out infinite .8s; }
.sfs-ring-3 { width: 640px; height: 640px; animation: ringPulse 4s ease-in-out infinite 1.6s; }
@keyframes ringPulse {
  0%,100% { opacity: .6; transform: scale(.96); }
  50%      { opacity: 1; transform: scale(1.04); }
}
.sfs-glow {
  position: absolute;
  width: 460px; height: 460px; border-radius: 50%;
  background: radial-gradient(circle, rgba(46, 189, 58,.18) 0%, rgba(46, 189, 58,.07) 40%, transparent 70%);
  filter: blur(4px);
  animation: glowPulse 4.5s ease-in-out infinite;
  z-index: 1;
}
@keyframes glowPulse {
  0%,100% { transform: scale(.88); opacity: .6; }
  50%      { transform: scale(1.08); opacity: 1; }
}

/* ══ PHONE ══ */
.sfs-phone {
  width: 300px;
  background: #0a1510;
  border-radius: 52px; padding: 8px;
  position: relative; z-index: 5;
  box-shadow:
    -20px 36px 90px rgba(0,0,0,.45),
    0 0 0 1.5px rgba(46, 189, 58,.20),
    0 0 0 3px rgba(255,255,255,.06),
    0 0 80px rgba(46, 189, 58,.12),
    inset 0 1px 0 rgba(255,255,255,.08);
  animation: phoneRock 9s ease-in-out infinite;
}
.sfs-phone::before {
  content: "";
  position: absolute; inset: 0; border-radius: 52px;
  background: linear-gradient(135deg, rgba(255,255,255,.08) 0%, transparent 55%);
  pointer-events: none; z-index: 6;
}
.sfs-phone::after {
  content: "";
  position: absolute; inset: 0; border-radius: 52px;
  background: linear-gradient(to bottom, transparent 70%, rgba(46, 189, 58,.06));
  pointer-events: none; z-index: 6;
}
@keyframes phoneRock {
  0%,100% { transform: perspective(1200px) rotateY(-9deg) rotateX(3.5deg) translateY(0); }
  33%      { transform: perspective(1200px) rotateY(-7deg) rotateX(2deg) translateY(-8px); }
  66%      { transform: perspective(1200px) rotateY(-10deg) rotateX(5deg) translateY(-4px); }
}
.sfs-notch-row { height: 34px; display: flex; align-items: center; justify-content: center; }
.sfs-notch { width: 82px; height: 10px; background: #000; border-radius: 999px; }
.sfs-screen {
  background: linear-gradient(175deg, #071208, #020604, #081c35);
  border-radius: 38px; overflow: hidden;
  padding: 16px 13px 18px;
  display: flex; flex-direction: column; align-items: center; text-align: center;
  border: 1px solid rgba(46, 189, 58,.10);
}
.sfs-verified {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(46, 189, 58,.12);
  border: 1px solid rgba(46, 189, 58,.30);
  border-radius: 999px; padding: 4px 12px;
  font-size: 8px; font-weight: 800;
  color: #4bd557; letter-spacing: .07em; text-transform: uppercase;
  margin-bottom: 12px;
}
.sfs-vdot { width: 5px; height: 5px; border-radius: 50%; background: var(--g1); animation: livePulse 1.5s infinite; }
.sfs-avatar {
  width: 70px; height: 70px; border-radius: 50%; object-fit: cover;
  margin-bottom: 11px;
  border: 3px solid rgba(46, 189, 58,.45);
  box-shadow: 0 0 24px rgba(46, 189, 58,.30), 0 0 0 6px rgba(46, 189, 58,.08);
  outline: 1px solid rgba(46, 189, 58,.15);
}
.sfs-owner-name {
  color: white; font-size: 18px; font-weight: 800;
  margin-bottom: 3px; font-family: 'Sora', sans-serif;
  letter-spacing: -.4px;
}
.sfs-owner-label { color: #7ded88; font-size: 11px; margin-bottom: 16px; font-weight: 500; }
.sfs-divider {
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(46, 189, 58,.20), transparent);
  margin-bottom: 10px;
}
.sfs-row {
  display: flex; align-items: center; gap: 8px;
  padding: 5.5px 0; border-bottom: 1px solid rgba(46, 189, 58,.08);
  width: 100%; text-align: left;
}
.sfs-row:last-child { border-bottom: none; }
.sfs-row-ico {
  width: 27px; height: 27px; border-radius: 8px;
  background: rgba(46, 189, 58,.09);
  border: 1px solid rgba(46, 189, 58,.14);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; flex-shrink: 0;
  transition: .2s;
}
.sfs-row:hover .sfs-row-ico { background: rgba(46, 189, 58,.18); transform: scale(1.08); border-color: rgba(46, 189, 58,.28); }
.sfs-row-lbl { font-size: 7.5px; color: #4a8060; letter-spacing: .07em; text-transform: uppercase; font-weight: 600; }
.sfs-row-val { font-size: 10px; color: #e8f8eb; font-weight: 600; }

/* Scanline */
.sfs-scanline {
  position: absolute; left: -10%; width: 120%; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(46, 189, 58,.3), rgba(125, 237, 136,.9), rgba(255,255,255,.5), rgba(125, 237, 136,.9), rgba(46, 189, 58,.3), transparent);
  box-shadow: 0 0 16px rgba(46, 189, 58,.5), 0 0 32px rgba(46, 189, 58,.2);
  z-index: 8;
  animation: scanMove 2.8s cubic-bezier(.45,0,.55,1) infinite;
}
@keyframes scanMove {
  0%   { transform: translateY(-165px); opacity: 0; }
  6%   { opacity: 1; }
  94%  { opacity: 1; }
  100% { transform: translateY(165px); opacity: 0; }
}

/* ══ SCAN STAGE ══ */
.sfs-scan-stage {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
}
.sfs-asset-img {
  width: 480px; max-width: none;
  position: relative; z-index: 3;
  object-fit: contain;
  filter: drop-shadow(0 32px 64px rgba(0,0,0,.18)) drop-shadow(0 0 40px rgba(46, 189, 58,.24));
  animation: assetHover 4.5s ease-in-out infinite;
}
@keyframes assetHover {
  0%,100% { transform: translateY(0) scale(1.03) rotateY(-5deg); }
  50%      { transform: translateY(-15px) scale(1.05) rotateY(-3deg); }
}
.sfs-qr-card {
  position: absolute; right: -24px; bottom: 88px;
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(14px);
  border-radius: 22px; padding: 15px 18px;
  box-shadow: 0 20px 56px rgba(0,0,0,.12), 0 0 0 1px rgba(46, 189, 58,.12);
  border: 1.5px solid rgba(46, 189, 58,.18);
  z-index: 10; display: flex; align-items: center; gap: 12px;
  min-width: 224px;
  transform: perspective(600px) rotateY(-10deg);
  animation: cardBob 5s ease-in-out infinite;
}
@keyframes cardBob {
  0%,100% { transform: perspective(600px) rotateY(-10deg) translateY(0); }
  50%      { transform: perspective(600px) rotateY(-13deg) translateY(-9px); }
}
.sfs-qr-icon {
  width: 54px; height: 54px; border-radius: 14px;
  background: linear-gradient(135deg, #e8f8eb, #e8f8eb);
  display: flex; align-items: center; justify-content: center;
  font-size: 26px; flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(46, 189, 58,.20);
  border: 1px solid rgba(46, 189, 58,.20);
}
.sfs-qr-card h4 { font-size: 13px; font-weight: 800; color: var(--dark); margin-bottom: 4px; }
.sfs-qr-card p  { font-size: 10px; color: #5a7060; line-height: 1.4; }
.sfs-status-pill {
  position: absolute; top: 72px; left: 8px;
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(14px);
  border-radius: 16px; padding: 10px 15px;
  box-shadow: 0 8px 28px rgba(0,0,0,.09), 0 0 0 1px rgba(46, 189, 58,.10);
  border: 1.5px solid rgba(46, 189, 58,.16);
  z-index: 10; display: flex; align-items: center; gap: 8px;
  animation: pillFloat 6s ease-in-out infinite .5s;
}
@keyframes pillFloat {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}
.sfs-status-dot   { width: 8px; height: 8px; border-radius: 50%; background: var(--g1); animation: livePulse 1.8s infinite; }
.sfs-status-label { font-size: 11.5px; font-weight: 800; color: var(--dark); }
.sfs-status-sub   { font-size: 9px; color: var(--mid); margin-top: 1px; }

/* ══ TRANSITIONS ══ */
.sfs-entering  { animation: enterScene .85s cubic-bezier(.22,1,.36,1) both; }
.sfs-exiting   { animation: exitScene .35s ease forwards; }
.sfs-scan-in   { animation: scanIn .45s ease both; }
.sfs-scan-out  { animation: scanOut .30s ease forwards; }
@keyframes enterScene {
  from { opacity:0; transform: scale(.62) translateY(68px); filter:blur(10px); }
  to   { opacity:1; transform: none; filter:blur(0); }
}
@keyframes exitScene {
  from { opacity:1; transform: none; }
  to   { opacity:0; transform: scale(.86) translateY(-44px); filter:blur(6px); }
}
@keyframes scanIn  { from { opacity:0; transform:scale(.92) translateY(20px); } to { opacity:1; transform:none; } }
@keyframes scanOut { from { opacity:1; } to { opacity:0; transform:scale(.90) translateY(-20px); } }
@keyframes slideInLeft { from { opacity:0; transform: translateX(-36px); } to { opacity:1; transform: none; } }
@keyframes fadeUp      { from { opacity:0; transform: translateY(22px);  } to { opacity:1; transform: none; } }

/* ══ TICKER ══ */
.sfs-ticker {
  width:100%; position:relative; z-index:10; overflow:hidden;
  background: linear-gradient(90deg, #0B2545 0%, #2ebd3a 35%, #0B2545 70%, #2ebd3a 100%);
  box-shadow: 0 -1px 0 rgba(46, 189, 58,.20);
  border-top: 1.5px solid rgba(46, 189, 58,.25);
}
.sfs-ticker::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,.15) 0%, transparent 8%, transparent 92%, rgba(0,0,0,.15) 100%);
  z-index: 2; pointer-events: none;
}
.sfs-ticker-inner { display:flex; position: relative; z-index: 1; }
.sfs-ticker-label {
  flex-shrink:0; display:flex; align-items:center; padding:0 22px;
  background: rgba(0,0,0,.18); border-right: 1.5px solid rgba(255,255,255,.20);
  font-size:9px; font-weight:900; color:white; letter-spacing:2.5px;
  text-transform:uppercase; height:48px; white-space: nowrap;
}
.sfs-ticker-track { display:flex; animation: tickMove 36s linear infinite; }
.sfs-ticker-track:hover { animation-play-state: paused; }
@keyframes tickMove { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
.sfs-ti {
  display:flex; align-items:center; height:48px;
  padding:0 24px; font-size:12px; font-weight:600;
  color:rgba(255,255,255,.92); white-space:nowrap; gap:18px;
}
.sfs-td { width:4px; height:4px; border-radius:50%; background:rgba(255,255,255,.30); flex-shrink: 0; }

/* ══ RESPONSIVE — TABLET ══ */
@media(max-width:1200px){
  .sfs-hero { border-radius: 20px; }
  .sfs-grid { grid-template-columns:1fr; padding:44px 32px 28px; gap:32px; }
  .sfs-h1 { font-size:56px; letter-spacing:-3px; }
  .sfs-right { min-height:600px; }
  .sfs-asset-img { width:360px; }
  .sfs-shield { width:86px; height:86px; top:28px; right:12px; }
  .sfs-ring-2, .sfs-ring-3 { display:none; }
}

/* ══ RESPONSIVE — MOBILE ══ */
@media(max-width:640px){
  .sfs-hero {
    border-radius: 16px;
    border-width: 1.5px;
  }

  /* Grid */
  .sfs-grid {
    grid-template-columns: 1fr;
    padding: 24px 16px 20px;
    gap: 24px;
  }

  /* Typography */
  .sfs-h1 {
    font-size: 36px;
    letter-spacing: -1.8px;
    line-height: 1.0;
    margin-bottom: 14px;
  }
  .sfs-h1 .outline { -webkit-text-stroke-width: 1.5px; }
  .sfs-sub {
    font-size: 13.5px;
    line-height: 1.75;
    margin-bottom: 20px;
  }

  /* Badge */
  .sfs-badge {
    font-size: 9px;
    padding: 6px 14px 6px 10px;
    margin-bottom: 16px;
  }

  /* Feature cards — 1-col stack on mobile */
  .sfs-feats {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
  .sfs-feat {
    padding: 16px 14px;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;
  }
  .sfs-feat-ico {
    margin-bottom: 0;
    flex-shrink: 0;
    width: 40px; height: 40px;
    border-radius: 12px;
  }
  .sfs-feat h4 { font-size: 13px; margin-bottom: 3px; }
  .sfs-feat p  { font-size: 11px; }

  /* Buttons */
  .sfs-actions {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    align-items: stretch;
  }
  .sfs-btn-main {
    padding: 15px 20px;
    font-size: 14px;
    border-radius: 14px;
    justify-content: center;
  }
  .sfs-btn-sec {
    padding: 14px 20px;
    font-size: 13.5px;
    border-radius: 14px;
    justify-content: center;
  }

  /* Stats */
  .sfs-stats {
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  .sfs-stat-num { font-size: 18px; }
  .sfs-stat-lbl { font-size: 9.5px; }
  .sfs-stat-div { height: 28px; }

  /* Scroll indicator */
  .sfs-scroll { display: none; }

  /* Right side */
  .sfs-right {
    min-height: 440px;
    overflow: hidden;
  }

  /* Phone */
  .sfs-phone {
    width: 240px;
    border-radius: 40px;
    padding: 6px;
  }
  .sfs-phone .sfs-screen {
    border-radius: 30px;
    padding: 12px 10px 14px;
  }
  .sfs-notch { width: 60px; height: 8px; }
  .sfs-notch-row { height: 26px; }
  .sfs-avatar { width: 56px; height: 56px; border-width: 2px; }
  .sfs-owner-name { font-size: 15px; }
  .sfs-owner-label { font-size: 9.5px; margin-bottom: 12px; }
  .sfs-row { padding: 4px 0; }
  .sfs-row-ico { width: 23px; height: 23px; font-size: 9px; }
  .sfs-row-lbl { font-size: 6.5px; }
  .sfs-row-val { font-size: 8.5px; }
  .sfs-verified { font-size: 7px; padding: 3px 10px; margin-bottom: 8px; }

  /* Shield & overlays */
  .sfs-shield { width: 70px; height: 70px; top: 16px; right: 8px; }
  .sfs-lock { width: 44px; height: 44px; font-size: 18px; right: -6px; }
  .sfs-ring-1 { width: 260px; height: 260px; }
  .sfs-ring-2, .sfs-ring-3 { display: none; }

  /* Floating badges — scale & reposition */
  .sfs-alert-badge {
    left: 2px;
    top: 70px;
    padding: 8px 10px;
    border-radius: 12px;
    transform: scale(0.82);
    transform-origin: top left;
  }
  .sfs-alert-ico { width: 28px; height: 28px; font-size: 13px; border-radius: 8px; }
  .sfs-alert-text h5 { font-size: 10px; }
  .sfs-alert-text p  { font-size: 8px; }

  .sfs-scan-badge {
    right: 2px;
    bottom: 70px;
    padding: 8px 12px;
    border-radius: 11px;
    transform: scale(0.82);
    transform-origin: bottom right;
  }
  .sfs-scan-badge-ico { font-size: 15px; }
  .sfs-scan-badge-text h5 { font-size: 10px; }
  .sfs-scan-badge-text p  { font-size: 8px; }

  /* Scan stage asset */
  .sfs-asset-img { width: 280px; }
  .sfs-qr-card {
    right: -10px;
    bottom: 60px;
    min-width: 180px;
    padding: 10px 12px;
    border-radius: 16px;
    transform: scale(0.85);
    transform-origin: bottom right;
  }
  .sfs-qr-icon { width: 40px; height: 40px; font-size: 20px; border-radius: 10px; }
  .sfs-qr-card h4 { font-size: 11px; }
  .sfs-qr-card p  { font-size: 9px; }

  .sfs-status-pill {
    top: 48px;
    left: 4px;
    padding: 7px 11px;
    border-radius: 12px;
    transform: scale(0.85);
    transform-origin: top left;
  }
  .sfs-status-dot { width: 6px; height: 6px; }
  .sfs-status-label { font-size: 10px; }
  .sfs-status-sub { font-size: 8px; }

  /* Ticker */
  .sfs-ticker-label { padding: 0 12px; font-size: 8px; letter-spacing: 1.5px; }
  .sfs-ti { font-size: 11px; padding: 0 16px; }

  /* Globe & mesh — hide on very small screens */
  .sfs-globe-wrap { width: 200px; height: 200px; bottom: -60px; left: -50px; }
  .sfs-mesh { width: 320px; height: 320px; top: -40px; right: -40px; }

  /* Left padding */
  .sfs-left { padding-right: 0; }
}

/* ══ EXTRA SMALL ══ */
@media(max-width:380px){
  .sfs-h1 { font-size: 30px; letter-spacing: -1.2px; }
  .sfs-grid { padding: 20px 12px 16px; }
  .sfs-phone { width: 210px; }
  .sfs-asset-img { width: 240px; }
  .sfs-right { min-height: 380px; }
  .sfs-shield { display: none; }
  .sfs-lock { display: none; }
}
`,i1=Array.from({length:18},(e,t)=>({id:t,x:`${(t*37+11)%100}%`,y:`${(t*53+7)%100}%`,size:`${t%3+2}px`,delay:`${t*.7%6}s`,duration:`${8+t%5}s`,opacity:.1+t%4*.08}));function s1(){return i.jsxs(i.Fragment,{children:[i1.map(e=>i.jsx("div",{className:"sfs-particle",style:{left:e.x,top:e.y,width:e.size,height:e.size,opacity:e.opacity,animation:`particleDrift ${e.duration} ease-in-out infinite ${e.delay}`}},e.id)),i.jsx("style",{children:`
        @keyframes particleDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(8px,-12px) scale(1.3); }
          66%      { transform: translate(-6px,8px) scale(0.7); }
        }
      `})]})}function a1(){return i.jsxs("svg",{className:"sfs-waves",viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("defs",{children:i.jsx("style",{children:`
          .w1{animation:waveA 16s ease-in-out infinite;}
          .w2{animation:waveB 20s ease-in-out infinite;}
          .w3{animation:waveC 13s ease-in-out infinite;}
          @keyframes waveA{
            0%,100%{d:path("M0,480 C220,415 440,568 640,480 C860,392 1068,548 1270,468 C1375,428 1440,446 1440,446 L1440,900 L0,900 Z");}
            50%{d:path("M0,504 C200,444 420,582 630,508 C848,430 1048,566 1252,494 C1368,456 1440,472 1440,472 L1440,900 L0,900 Z");}
          }
          @keyframes waveB{
            0%,100%{d:path("M0,594 C200,548 392,644 622,594 C848,544 1052,634 1268,582 C1386,556 1440,564 1440,564 L1440,900 L0,900 Z");}
            50%{d:path("M0,616 C178,564 392,660 610,618 C830,570 1028,650 1250,602 C1376,576 1440,584 1440,584 L1440,900 L0,900 Z");}
          }
          @keyframes waveC{
            0%,100%{d:path("M0,706 C244,668 452,742 686,706 C908,670 1112,736 1314,698 C1402,678 1440,682 1440,682 L1440,900 L0,900 Z");}
            50%{d:path("M0,724 C224,682 466,756 706,722 C928,684 1092,752 1330,712 C1408,694 1440,698 1440,698 L1440,900 L0,900 Z");}
          }
        `})}),i.jsx("path",{className:"w1",d:"M0,480 C220,415 440,568 640,480 C860,392 1068,548 1270,468 C1375,428 1440,446 1440,446 L1440,900 L0,900 Z",fill:"rgba(46, 189, 58,.058)"}),i.jsx("path",{className:"w2",d:"M0,594 C200,548 392,644 622,594 C848,544 1052,634 1268,582 C1386,556 1440,564 1440,564 L1440,900 L0,900 Z",fill:"rgba(46, 189, 58,.042)"}),i.jsx("path",{className:"w3",d:"M0,706 C244,668 452,742 686,706 C908,670 1112,736 1314,698 C1402,678 1440,682 1440,682 L1440,900 L0,900 Z",fill:"rgba(46, 189, 58,.028)"})]})}function o1(){const e=[];for(let t=0;t<=12;t++)e.push(i.jsx("line",{x1:"0",y1:t*50,x2:"600",y2:t*50,stroke:"rgba(46, 189, 58,.08)",strokeWidth:".8"},`h${t}`),i.jsx("line",{x1:t*50,y1:"0",x2:t*50,y2:"600",stroke:"rgba(46, 189, 58,.08)",strokeWidth:".8"},`v${t}`));return e.push(i.jsx("line",{x1:"0",y1:"0",x2:"600",y2:"600",stroke:"rgba(46, 189, 58,.05)",strokeWidth:"1"},"d1"),i.jsx("line",{x1:"600",y1:"0",x2:"0",y2:"600",stroke:"rgba(46, 189, 58,.05)",strokeWidth:"1"},"d2")),i.jsx("svg",{className:"sfs-mesh",viewBox:"0 0 600 600",xmlns:"http://www.w3.org/2000/svg",children:e})}function l1(){return i.jsx("div",{className:"sfs-globe-wrap",children:i.jsxs("svg",{viewBox:"0 0 300 300",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("defs",{children:i.jsxs("radialGradient",{id:"gGrad2",cx:"38%",cy:"32%",children:[i.jsx("stop",{offset:"0%",stopColor:"rgba(125, 237, 136,.30)"}),i.jsx("stop",{offset:"55%",stopColor:"rgba(46, 189, 58,.12)"}),i.jsx("stop",{offset:"100%",stopColor:"rgba(46, 189, 58,.03)"})]})}),i.jsx("circle",{cx:"150",cy:"150",r:"138",fill:"url(#gGrad2)",stroke:"rgba(46, 189, 58,.16)",strokeWidth:"1"}),[-90,-54,-18,18,54,90].map((e,t)=>{const n=150+e,r=Math.sqrt(Math.max(0,138*138-e*e));return i.jsx("ellipse",{cx:"150",cy:n,rx:r,ry:r*.26,fill:"none",stroke:"rgba(46, 189, 58,.12)",strokeWidth:".7"},t)}),[0,30,60,90,120,150].map((e,t)=>i.jsx("ellipse",{cx:"150",cy:"150",rx:"42",ry:"138",fill:"none",stroke:"rgba(46, 189, 58,.10)",strokeWidth:".7",transform:`rotate(${e} 150 150)`},t)),i.jsx("ellipse",{cx:"150",cy:"150",rx:"175",ry:"46",fill:"none",stroke:"rgba(46, 189, 58,.20)",strokeWidth:"1.2",strokeDasharray:"8 6",style:{animation:"orbitSpin2 14s linear infinite",transformOrigin:"150px 150px"}}),i.jsx("circle",{cx:"325",cy:"150",r:"8",fill:"rgba(46, 189, 58,.55)",style:{animation:"orbitSpin2 14s linear infinite",transformOrigin:"150px 150px"}}),i.jsx("style",{children:"@keyframes orbitSpin2{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"})]})})}function c1(){return i.jsxs("svg",{className:"sfs-shield",viewBox:"0 0 110 110",xmlns:"http://www.w3.org/2000/svg",children:[i.jsxs("defs",{children:[i.jsxs("radialGradient",{id:"shGrad2",cx:"40%",cy:"30%",children:[i.jsx("stop",{offset:"0%",stopColor:"rgba(125, 237, 136,.99)"}),i.jsx("stop",{offset:"60%",stopColor:"rgba(46, 189, 58,.85)"}),i.jsx("stop",{offset:"100%",stopColor:"rgba(46, 189, 58,.75)"})]}),i.jsx("filter",{id:"shBlur",children:i.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2"})})]}),i.jsx("path",{d:"M55 12 L87 25 L87 52 C87 70 72 84 55 92 C38 84 23 70 23 52 L23 25 Z",fill:"rgba(46, 189, 58,.25)",filter:"url(#shBlur)"}),i.jsx("path",{d:"M55 10 L88 24 L88 52 C88 70 73 84 55 92 C37 84 22 70 22 52 L22 24 Z",fill:"url(#shGrad2)",stroke:"rgba(255,255,255,.40)",strokeWidth:"1.5"}),i.jsx("path",{d:"M55 16 L82 28 L82 52 C82 67 69 79 55 86 C41 79 28 67 28 52 L28 28 Z",fill:"none",stroke:"rgba(255,255,255,.20)",strokeWidth:"1"}),i.jsx("polyline",{points:"38,55 50,67 72,43",fill:"none",stroke:"white",strokeWidth:"5.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function ql({asset:e,animClass:t}){return i.jsxs("div",{className:`sfs-scan-stage ${t}`,children:[i.jsx("div",{className:"sfs-glow"}),i.jsx("div",{className:"sfs-ring sfs-ring-1"}),i.jsx("div",{className:"sfs-ring sfs-ring-2"}),i.jsx("div",{className:"sfs-ring sfs-ring-3"}),i.jsx("img",{src:e.img,alt:e.label,className:"sfs-asset-img"}),i.jsx("div",{className:"sfs-scanline"}),i.jsxs("div",{className:"sfs-qr-card",children:[i.jsx("div",{className:"sfs-qr-icon",children:"🔐"}),i.jsxs("div",{children:[i.jsx("h4",{children:e.label}),i.jsxs("p",{children:["QR & NFC Protected",i.jsx("br",{}),"Secure Identification"]})]})]}),i.jsxs("div",{className:"sfs-status-pill",children:[i.jsx("div",{className:"sfs-status-dot"}),i.jsxs("div",{children:[i.jsx("div",{className:"sfs-status-label",children:"Scanning…"}),i.jsx("div",{className:"sfs-status-sub",children:"SFS Shield Active"})]})]})]})}function Xl({asset:e,animClass:t}){const n=[{ico:"📞",lbl:"Phone",val:e.phone},{ico:"📧",lbl:"Email",val:e.email},{ico:"📍",lbl:"Address",val:e.address},{ico:"🆔",lbl:"Asset ID",val:e.asset},{ico:"🚨",lbl:"Emergency",val:e.emergency},{ico:"📅",lbl:"Registered",val:e.registered}];return i.jsxs("div",{className:`sfs-phone ${t}`,children:[i.jsx("div",{className:"sfs-notch-row",children:i.jsx("div",{className:"sfs-notch"})}),i.jsxs("div",{className:"sfs-screen",children:[i.jsxs("div",{className:"sfs-verified",children:[i.jsx("div",{className:"sfs-vdot"})," Verified Owner"]}),i.jsx("img",{src:e.avatar,alt:"QR",className:"sfs-avatar"}),i.jsx("div",{className:"sfs-owner-name",children:e.owner}),i.jsx("div",{className:"sfs-owner-label",children:e.label}),i.jsx("div",{className:"sfs-divider"}),i.jsx("div",{style:{width:"100%",textAlign:"left"},children:n.map(r=>i.jsxs("div",{className:"sfs-row",children:[i.jsx("div",{className:"sfs-row-ico",children:r.ico}),i.jsxs("div",{children:[i.jsx("div",{className:"sfs-row-lbl",children:r.lbl}),i.jsx("div",{className:"sfs-row-val",children:r.val})]})]},r.lbl))})]})]})}function d1(e,t=2200){const[n,r]=v.useState(0);return v.useEffect(()=>{let s=null;const a=o=>{s||(s=o);const l=Math.min((o-s)/t,1);r(Math.floor(l*e)),l<1&&requestAnimationFrame(a)};requestAnimationFrame(a)},[e,t]),n}function ws({num:e,suffix:t,label:n}){const r=d1(e);return i.jsxs("div",{className:"sfs-stat",children:[i.jsxs("div",{className:"sfs-stat-num",children:[r.toLocaleString(),t]}),i.jsx("div",{className:"sfs-stat-lbl",children:n})]})}function u1(){const[e,t]=v.useState(0),[n,r]=v.useState("scan");v.useEffect(()=>{const o=setTimeout(()=>r("phone"),2400),l=setInterval(()=>{r("phone-out"),setTimeout(()=>{t(c=>(c+1)%Ql.length),r("scan")},360),setTimeout(()=>r("phone"),2800)},7800);return()=>{clearTimeout(o),clearInterval(l)}},[]);const s=[...Yl,...Yl],a=Ql[e];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:r1}),i.jsxs("div",{className:"sfs-hero",children:[i.jsxs("div",{className:"sfs-bg",children:[i.jsx(a1,{}),i.jsx(o1,{}),i.jsx(l1,{}),i.jsx(s1,{})]}),i.jsxs("div",{className:"sfs-grid",children:[i.jsxs("div",{className:"sfs-left",children:[i.jsxs("div",{className:"sfs-badge",children:[i.jsx("div",{className:"sfs-badge-dot"}),"Live Protection Active"]}),i.jsxs("h1",{className:"sfs-h1",children:["Smart Protection",i.jsx("br",{}),"That ",i.jsx("span",{className:"green",children:"Connects"}),i.jsx("br",{}),i.jsx("span",{className:"green",children:"Your World"})]}),i.jsx("p",{className:"sfs-sub",children:"Protect vehicles, bikes, luggage and valuables with next-generation QR + NFC verification. Instant owner alerts and live smart protection — all with a single scan."}),i.jsx("div",{className:"sfs-feats",children:[{ico:"🛡️",h:"Secure QR & NFC",p:"Military-grade encrypted ID protection system"},{ico:"📡",h:"Live Tracking",p:"Real-time alerts & continuous monitoring"},{ico:"🚨",h:"Emergency Access",p:"Instant verified owner identification"}].map(o=>i.jsxs("div",{className:"sfs-feat",children:[i.jsx("div",{className:"sfs-feat-ico",children:o.ico}),i.jsx("h4",{children:o.h}),i.jsx("p",{children:o.p})]},o.h))}),i.jsxs("div",{className:"sfs-actions",children:[i.jsx("button",{className:"sfs-btn-main",children:"🔐 Protect Your Assets"}),i.jsxs("button",{className:"sfs-btn-sec",children:[i.jsx("div",{className:"sfs-play-ring",children:"▶"}),"See How It Works"]})]}),i.jsxs("div",{className:"sfs-stats",children:[i.jsx(ws,{num:1e4,suffix:"+",label:"Assets Protected"}),i.jsx("div",{className:"sfs-stat-div"}),i.jsx(ws,{num:15e3,suffix:"+",label:"Scans Today"}),i.jsx("div",{className:"sfs-stat-div"}),i.jsx(ws,{num:50,suffix:"+",label:"Countries"}),i.jsx("div",{className:"sfs-stat-div"}),i.jsxs("div",{className:"sfs-stat",children:[i.jsx("div",{className:"sfs-stat-num",children:"4.9★"}),i.jsx("div",{className:"sfs-stat-lbl",children:"User Rating"})]})]}),i.jsxs("div",{className:"sfs-scroll",children:[i.jsx("div",{className:"sfs-scroll-mouse",children:i.jsx("div",{className:"sfs-scroll-wheel"})}),i.jsx("span",{children:"Scroll Down"})]})]}),i.jsxs("div",{className:"sfs-right",children:[i.jsx(c1,{}),i.jsx("div",{className:"sfs-lock",children:"🔒"}),i.jsxs("div",{className:"sfs-alert-badge",children:[i.jsx("div",{className:"sfs-alert-ico",children:"🔔"}),i.jsxs("div",{className:"sfs-alert-text",children:[i.jsx("h5",{children:"Owner Alerted!"}),i.jsx("p",{children:"Scan detected · 2s ago"})]})]}),i.jsxs("div",{className:"sfs-scan-badge",children:[i.jsx("div",{className:"sfs-scan-badge-ico",children:"📲"}),i.jsxs("div",{className:"sfs-scan-badge-text",children:[i.jsx("h5",{children:"15,234 Scans"}),i.jsx("p",{children:"Today worldwide"})]})]}),i.jsxs("div",{className:"sfs-stage",style:{minHeight:700},children:[n==="scan"&&i.jsx(ql,{asset:a,animClass:"sfs-scan-in"}),n==="scan-out"&&i.jsx(ql,{asset:a,animClass:"sfs-scan-out"}),n==="phone"&&i.jsx(Xl,{asset:a,animClass:"sfs-entering"}),n==="phone-out"&&i.jsx(Xl,{asset:a,animClass:"sfs-exiting"})]})]})]}),i.jsx("div",{className:"sfs-ticker",children:i.jsxs("div",{className:"sfs-ticker-inner",children:[i.jsx("div",{className:"sfs-ticker-label",children:"Live Updates"}),i.jsx("div",{className:"sfs-ticker-track",children:s.map((o,l)=>i.jsxs("div",{className:"sfs-ti",children:[o,l<s.length-1&&i.jsx("div",{className:"sfs-td"})]},l))})]})})]})]})}const f1=[{value:"5,000+",label:"Items Protected",icon:i.jsx(Pe,{size:30})},{value:"98%",label:"Recovery Rate",icon:i.jsx(mh,{size:30})},{value:"< 2 min",label:"Alert Response",icon:i.jsx(jh,{size:30})},{value:"4.9 ★",label:"Customer Rating",icon:i.jsx(So,{size:30})}],Gl=[{title:"24/7",text:"Active Monitoring",icon:i.jsx(wa,{size:20})},{title:"50K+",text:"Daily QR Scans",icon:i.jsx(bh,{size:20})},{title:"ISO 27001",text:"Security Certified",icon:i.jsx(Ah,{size:20})},{title:"99.9%",text:"System Uptime",icon:i.jsx(Ih,{size:20})}];function p1(){return i.jsxs("section",{className:"relative overflow-hidden py-20 bg-gradient-to-b from-[#f8fafc] via-[#f0fbf2] to-white",children:[i.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#2ebd3a]/10 blur-[140px]"}),i.jsx("div",{className:"absolute inset-0 opacity-[0.03]",children:i.jsx("div",{className:"w-full h-full",style:{backgroundImage:"radial-gradient(#2ebd3a 1px, transparent 1px)",backgroundSize:"28px 28px"}})}),i.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("div",{className:"flex justify-center mb-14",children:i.jsxs("div",{className:"inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[#e8f8eb] shadow-[0_10px_40px_rgba(46,189,58,0.08)]",children:[i.jsxs("div",{className:"relative flex items-center justify-center",children:[i.jsx("div",{className:"w-3 h-3 rounded-full bg-[#2ebd3a] animate-pulse"}),i.jsx("div",{className:"absolute w-3 h-3 rounded-full bg-[#2ebd3a] animate-ping opacity-30"})]}),i.jsx("span",{className:"text-xs sm:text-sm font-black tracking-[0.25em] uppercase text-slate-700",children:"Live Protection Metrics"})]})}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:f1.map(({value:e,label:t,icon:n},r)=>i.jsxs("div",{className:"group relative overflow-hidden rounded-[34px] border-2 border-[#e8f8eb] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:border-[#2ebd3a] active:scale-[0.98] active:border-[#0B2545] cursor-pointer hover:shadow-[0_25px_80px_rgba(46,189,58,0.18)]",children:[i.jsx("div",{className:"absolute inset-[1px] rounded-[33px] border border-white/70 pointer-events-none"}),i.jsx("div",{className:"absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2ebd3a] to-transparent"}),i.jsx("div",{className:"absolute -top-10 -right-10 w-32 h-32 bg-[#2ebd3a]/10 blur-3xl rounded-full"}),i.jsxs("div",{className:"absolute bottom-2 right-4 text-[85px] font-black text-slate-100 leading-none select-none",children:["0",r+1]}),i.jsx("div",{className:"relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2ebd3a] to-[#1b7a21] text-white flex items-center justify-center shadow-lg shadow-[#2ebd3a]/30 mb-6 group-hover:scale-110 transition-transform duration-500",children:n}),i.jsx("h3",{className:"relative z-10 text-4xl font-black tracking-tight text-[#0B2545] leading-none mb-3",children:e}),i.jsx("p",{className:"relative z-10 text-slate-500 text-base font-medium leading-relaxed",children:t}),i.jsx("div",{className:"relative z-10 mt-7 h-[4px] w-14 rounded-full bg-gradient-to-r from-[#2ebd3a] to-[#4bd557] group-hover:w-24 transition-all duration-500"})]},t))}),i.jsxs("div",{className:"mt-14 relative overflow-hidden rounded-[36px] border border-[#e8f8eb] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]",children:[i.jsx("div",{className:"absolute inset-[1px] rounded-[35px] border border-white/80 pointer-events-none"}),i.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-[#2ebd3a]/10 blur-[80px]"}),i.jsx("div",{className:"absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2ebd3a] to-transparent"}),i.jsx("div",{className:"relative grid grid-cols-2 md:grid-cols-4",children:Gl.map((e,t)=>i.jsxs("div",{className:`group relative px-8 py-10 text-center transition-all duration-300 hover:bg-[#e8f8eb]/40 cursor-pointer ${t!==Gl.length-1?"border-b md:border-b-0 md:border-r border-[#e8f8eb]":""}`,children:[i.jsx("div",{className:"mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2ebd3a] to-[#1b7a21] text-white flex items-center justify-center shadow-lg shadow-[#2ebd3a]/20 group-hover:scale-110 transition duration-500",children:e.icon}),i.jsx("h4",{className:"text-4xl font-black tracking-tight text-[#0B2545]",children:e.title}),i.jsx("p",{className:"mt-2 text-sm sm:text-base text-slate-500 font-medium",children:e.text}),i.jsx("div",{className:"mx-auto mt-5 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#2ebd3a] to-[#4bd557] group-hover:w-20 transition-all duration-500"})]},e.title))})]})]})]})}function h1(){return i.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{x:"0",y:"0",width:"7",height:"7",rx:"1",fill:"#0B2545"}),i.jsx("rect",{x:"1",y:"1",width:"5",height:"5",rx:"0.5",fill:"white"}),i.jsx("rect",{x:"2",y:"2",width:"3",height:"3",fill:"#0B2545"}),i.jsx("rect",{x:"14",y:"0",width:"7",height:"7",rx:"1",fill:"#0B2545"}),i.jsx("rect",{x:"15",y:"1",width:"5",height:"5",rx:"0.5",fill:"white"}),i.jsx("rect",{x:"16",y:"2",width:"3",height:"3",fill:"#0B2545"}),i.jsx("rect",{x:"0",y:"14",width:"7",height:"7",rx:"1",fill:"#0B2545"}),i.jsx("rect",{x:"1",y:"15",width:"5",height:"5",rx:"0.5",fill:"white"}),i.jsx("rect",{x:"2",y:"16",width:"3",height:"3",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"0",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"0",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"12",y:"0",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"2",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"2",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"9",y:"4",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"4",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"6",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"6",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"0",y:"8",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"3",y:"8",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"5",y:"8",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"8",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"8",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"13",y:"8",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"15",y:"8",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"18",y:"8",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"0",y:"10",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"2",y:"10",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"5",y:"10",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"9",y:"10",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"10",width:"3",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"15",y:"10",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"17",y:"10",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"0",y:"12",width:"3",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"4",y:"12",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"12",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"12",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"13",y:"12",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"16",y:"12",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"18",y:"12",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"14",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"14",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"13",y:"14",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"15",y:"14",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"17",y:"14",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"16",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"16",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"14",y:"16",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"16",y:"16",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"18",y:"16",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"18",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"18",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"14",y:"18",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"19",y:"18",width:"1",height:"2",fill:"#0B2545"})]})}function g1(){return i.jsxs("div",{style:{position:"relative",width:280,height:560,flexShrink:0},children:[i.jsx("div",{style:{position:"absolute",right:-50,top:"28%",background:"#2ebd3a",borderRadius:"50%",width:44,height:44,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(37,211,102,0.4)",zIndex:10},children:i.jsx(Ui,{size:22,color:"white",fill:"white"})}),i.jsx("div",{style:{position:"absolute",right:-44,top:"52%",background:"white",borderRadius:"50%",width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(0,0,0,0.15)",zIndex:10},children:i.jsx(ct,{size:18,color:"#0B2545"})}),i.jsxs("div",{style:{position:"absolute",inset:0,borderRadius:46,background:"linear-gradient(160deg, #5a5a5a 0%, #3a3a3a 30%, #2a2a2a 60%, #1e1e1e 100%)",boxShadow:`
          0 0 0 1px #666 inset,
          2px 4px 0 0 #555 inset,
          -1px -2px 0 0 #111 inset,
          0 30px 80px rgba(0,0,0,0.55),
          0 8px 24px rgba(0,0,0,0.35),
          0 2px 6px rgba(0,0,0,0.25)
        `},children:[i.jsx("div",{style:{position:"absolute",inset:0,borderRadius:46,background:"linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 40%)",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",left:-3,top:120,width:3,height:34,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",left:-3,top:165,width:3,height:34,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",left:-3,top:88,width:3,height:22,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",right:-3,top:140,width:3,height:70,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"0 2px 2px 0",boxShadow:"1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",inset:6,borderRadius:41,background:"#0a0a0a",overflow:"hidden"},children:i.jsxs("div",{style:{position:"absolute",inset:3,borderRadius:38,background:"white",overflow:"hidden",display:"flex",flexDirection:"column"},children:[i.jsx("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",width:100,height:30,background:"#0a0a0a",borderRadius:20,zIndex:20}}),i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 20px 0",fontSize:10,fontWeight:700,color:"#111"},children:[i.jsx("span",{children:"9:41"}),i.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[i.jsxs("svg",{width:"14",height:"10",viewBox:"0 0 14 10",children:[i.jsx("rect",{x:"0",y:"6",width:"2.5",height:"4",rx:"0.5",fill:"#111"}),i.jsx("rect",{x:"3.5",y:"4",width:"2.5",height:"6",rx:"0.5",fill:"#111"}),i.jsx("rect",{x:"7",y:"2",width:"2.5",height:"8",rx:"0.5",fill:"#111"}),i.jsx("rect",{x:"10.5",y:"0",width:"2.5",height:"10",rx:"0.5",fill:"#111"})]}),i.jsxs("svg",{width:"13",height:"10",viewBox:"0 0 13 10",children:[i.jsx("path",{d:"M6.5 7.5 L6.5 9.5",stroke:"#111",strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("path",{d:"M4 5.5 Q6.5 3.5 9 5.5",stroke:"#111",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"}),i.jsx("path",{d:"M1.5 3 Q6.5 -0.5 11.5 3",stroke:"#111",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"})]}),i.jsxs("svg",{width:"22",height:"11",viewBox:"0 0 22 11",children:[i.jsx("rect",{x:"0",y:"1",width:"19",height:"9",rx:"2",stroke:"#111",strokeWidth:"1",fill:"none"}),i.jsx("rect",{x:"19.5",y:"3.5",width:"2",height:"4",rx:"1",fill:"#111"}),i.jsx("rect",{x:"1.5",y:"2.5",width:"15",height:"6",rx:"1",fill:"#111"})]})]})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px 6px",borderBottom:"1px solid #f0f0f0"},children:[i.jsx(kh,{size:18,color:"#333",strokeWidth:2.5}),i.jsxs("div",{style:{textAlign:"center"},children:[i.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#111"},children:"Found Item"}),i.jsxs("div",{style:{fontSize:9,color:"#777",display:"flex",alignItems:"center",gap:3},children:[i.jsx($i,{size:9,color:"#777"}),"Scan QR Code"]})]}),i.jsx("div",{style:{width:18}})]}),i.jsxs("div",{style:{margin:"10px 12px 6px",background:"#e8f8eb",borderRadius:12,padding:"10px 12px",border:"1px solid #e8f8eb",display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{background:"white",borderRadius:8,padding:4,border:"1px solid #ddd",flexShrink:0},children:i.jsx(h1,{})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:13,fontWeight:800,color:"#0B2545",letterSpacing:"-0.3px"},children:"PET-7G4K-2L8M"}),i.jsx("div",{style:{fontSize:10,color:"#2ebd3a",marginBottom:4},children:"Pet ID Tag"}),i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:3,background:"#2ebd3a",borderRadius:4,padding:"2px 6px",fontSize:9,fontWeight:700,color:"white"},children:[i.jsx(ba,{size:8,color:"white",fill:"white"}),"Verified"]})]})]}),i.jsxs("div",{style:{padding:"0 12px",flex:1,display:"flex",flexDirection:"column",gap:0},children:[i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0",borderBottom:"1px solid #f5f5f5"},children:[i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[i.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#e8f8eb",border:"1.5px solid #2ebd3a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(dt,{size:12,color:"#0B2545"})}),i.jsx("div",{style:{width:1.5,height:28,background:"#e0e0e0"}})]}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"OTP Verification"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"Enter OTP sent to"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"+91 98765 43210"})]}),i.jsx("div",{style:{background:"#f3f4f6",borderRadius:6,padding:"4px 8px",fontSize:13,fontWeight:800,color:"#0B2545",letterSpacing:1},children:"5321"})]}),i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0",borderBottom:"1px solid #f5f5f5"},children:[i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[i.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#e8f8eb",border:"1.5px solid #2ebd3a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(ct,{size:12,color:"#0B2545"})}),i.jsx("div",{style:{width:1.5,height:28,background:"#e0e0e0"}})]}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"Owner Notified"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"WhatsApp alert sent"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"instantly"})]}),i.jsx(ba,{size:16,color:"#2ebd3a",fill:"#2ebd3a",style:{flexShrink:0,marginTop:4}})]}),i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0"},children:[i.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#e8f8eb",border:"1.5px solid #2ebd3a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(yn,{size:12,color:"#0B2545"})}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"Live Location"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"Sharing location"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"for safe return"})]}),i.jsxs("div",{style:{width:42,height:38,borderRadius:6,background:"linear-gradient(135deg, #e8f8eb 0%, #e8f8eb 100%)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,overflow:"hidden",position:"relative",border:"1px solid #7ded88"},children:[i.jsxs("div",{style:{position:"absolute",inset:0},children:[i.jsx("div",{style:{position:"absolute",left:"33%",top:0,bottom:0,width:1,background:"rgba(255,255,255,0.5)"}}),i.jsx("div",{style:{position:"absolute",left:"66%",top:0,bottom:0,width:1,background:"rgba(255,255,255,0.5)"}}),i.jsx("div",{style:{position:"absolute",top:"33%",left:0,right:0,height:1,background:"rgba(255,255,255,0.5)"}}),i.jsx("div",{style:{position:"absolute",top:"66%",left:0,right:0,height:1,background:"rgba(255,255,255,0.5)"}})]}),i.jsx(yn,{size:14,color:"#c62828",fill:"#c62828"})]})]})]}),i.jsxs("div",{style:{margin:"6px 10px 10px",background:"linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)",borderRadius:14,padding:"12px 14px",display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(Pe,{size:18,color:"white"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:12,fontWeight:800,color:"white"},children:"Protection Active"}),i.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.75)"},children:"We've got it covered 24/7"})]})]})]})})]})]})}function x1({number:e,icon:t,title:n,description:r,badge:s,badgeIcon:a}){const[o,l]=v.useState(!1),[c,d]=v.useState(!1);return i.jsxs("div",{onMouseEnter:()=>l(!0),onMouseLeave:()=>{l(!1),d(!1)},onMouseDown:()=>d(!0),onMouseUp:()=>d(!1),onTouchStart:()=>d(!0),onTouchEnd:()=>d(!1),style:{background:c?"#e8f8eb":o?"#f8fafc":"white",borderRadius:20,padding:"28px 22px 20px",flex:1,minWidth:0,position:"relative",boxShadow:o?"0 16px 48px rgba(46,189,58,0.18), 0 2px 8px rgba(0,0,0,0.05)":"0 4px 20px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",transform:c?"translateY(-2px) scale(0.98)":o?"translateY(-6px) scale(1.02)":"translateY(0) scale(1)",transition:"all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",border:c?"2px solid #0B2545":o?"2px solid #2ebd3a":"2px solid #e8f8eb",display:"flex",flexDirection:"column",cursor:"pointer"},children:[i.jsx("div",{style:{position:"absolute",top:-16,left:"50%",transform:"translateX(-50%)",width:34,height:34,borderRadius:"50%",background:"linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:800,color:"white",boxShadow:"0 4px 12px rgba(6,78,59,0.35)",fontFamily:"Georgia, serif"},children:e}),i.jsx("div",{style:{width:62,height:62,borderRadius:"50%",background:o?"white":"linear-gradient(135deg, #e8f8eb 0%, #f8fafc 100%)",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px auto 16px",border:o?"1.5px solid #2ebd3a":"1.5px solid #7ded88",transition:"all 0.25s ease"},children:i.jsx(t,{size:26,color:"#2ebd3a",strokeWidth:1.8})}),i.jsx("h3",{style:{fontSize:16,fontWeight:800,color:"#0B2545",textAlign:"center",marginBottom:10,lineHeight:1.3,fontFamily:"Georgia, serif"},children:n}),i.jsx("p",{style:{fontSize:12.5,color:"#11355e",textAlign:"center",lineHeight:1.65,flex:1,marginBottom:14,opacity:.75},children:r}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:c?"white":"#e8f8eb",borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:700,color:"#2ebd3a",border:c?"1px solid #7ded88":"1px solid transparent",transition:"all 0.25s ease"},children:[i.jsx(a,{size:12,color:"#2ebd3a"}),s]})]})}function Lu(){const[e,t]=v.useState(!1);v.useEffect(()=>{setTimeout(()=>t(!0),80)},[]);const n=[{number:"1",icon:Qh,title:"Order Your QR Tag",description:"Choose the right protection plan for your need and place your order. We deliver premium weatherproof QR tags to your doorstep within 3–5 business days.",badge:"Delivered across India",badgeIcon:ka},{number:"2",icon:$i,title:"Activate & Personalise",description:"Scan your tag to activate it, then fill in your contact details, emergency info, and any important notes. Takes less than 3 minutes — no tech skills needed.",badge:"Set up in 3 minutes",badgeIcon:Sh},{number:"3",icon:Pe,title:"Stay Protected 24/7",description:"Attach the tag to your pet, vehicle, or valuables and you're done. Anyone who finds your item scans the code — you get a WhatsApp alert instantly.",badge:"Always-on protection",badgeIcon:vn}],r=[{icon:Bu,label:"Trusted by",value:"10,000+ Families"},{icon:()=>i.jsx("span",{style:{fontSize:18},children:"🇮🇳"}),label:"Made in India",value:"Premium Quality"},{icon:ka,label:"3–5 Day",value:"Fast Delivery"},{icon:Ui,label:"24/7",value:"WhatsApp Alerts"},{icon:dt,label:"Bank-level",value:"Data Security"}];return i.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(160deg, #f8fafc 0%, #fafcfa 50%, #f8fafc 100%)",fontFamily:"'Segoe UI', system-ui, sans-serif",overflow:"hidden"},children:[i.jsx("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"radial-gradient(circle, #7ded88 1px, transparent 1px)",backgroundSize:"28px 28px",opacity:.35}}),i.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:1140,margin:"0 auto",padding:"52px 28px 48px"},children:[i.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:22,opacity:e?1:0,transform:e?"translateY(0)":"translateY(-12px)",transition:"all 0.5s ease"},children:i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"white",borderRadius:40,padding:"7px 18px",fontSize:11,fontWeight:700,color:"#2ebd3a",letterSpacing:"0.08em",textTransform:"uppercase",boxShadow:"0 2px 10px rgba(0,0,0,0.08)",border:"1px solid #7ded88"},children:[i.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:"#2ebd3a",boxShadow:"0 0 0 3px rgba(22,101,52,0.2)"}}),"Simple Process"]})}),i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:48,flexWrap:"wrap"},children:[i.jsxs("div",{style:{flex:"1 1 520px",opacity:e?1:0,transform:e?"translateX(0)":"translateX(-24px)",transition:"all 0.6s ease 0.1s"},children:[i.jsxs("h1",{style:{fontSize:"clamp(32px, 5vw, 52px)",fontWeight:900,color:"#0B2545",lineHeight:1.15,marginBottom:14,fontFamily:"Georgia, 'Times New Roman', serif"},children:["Up and Running in",i.jsx("br",{}),i.jsx("span",{style:{color:"#2ebd3a"},children:"3 Easy Steps"})]}),i.jsxs("p",{style:{fontSize:15,color:"#11355e",marginBottom:36,lineHeight:1.6,maxWidth:520,opacity:.7},children:["No complicated setup. No technical knowledge needed.",i.jsx("br",{}),"Just order, activate, and relax."]}),i.jsxs("div",{style:{position:"relative",display:"flex",gap:16,flexWrap:"wrap"},children:[i.jsx("div",{style:{position:"absolute",top:"50%",left:"calc(33.33% - 8px)",right:"calc(33.33% - 8px)",height:0,borderTop:"2px dashed #7ded88",zIndex:0,pointerEvents:"none"}}),n.map((s,a)=>i.jsx(x1,{...s},a))]}),i.jsxs("div",{style:{marginTop:28,background:"white",borderRadius:18,padding:"18px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,flexWrap:"wrap",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",border:"1px solid #e8f8eb"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"#e8f8eb",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(dt,{size:20,color:"#2ebd3a"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:14,fontWeight:800,color:"#0B2545"},children:"Peace of mind in 3 simple steps"}),i.jsx("div",{style:{fontSize:11.5,color:"#11355e",opacity:.6},children:"Join thousands of smart families who trust our QR protection."})]})]}),i.jsxs("button",{style:{background:"linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)",color:"white",border:"none",borderRadius:12,padding:"13px 24px",fontSize:13.5,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(6,78,59,0.35)",whiteSpace:"nowrap",transition:"transform 0.15s ease"},onMouseEnter:s=>s.currentTarget.style.transform="scale(1.03)",onMouseLeave:s=>s.currentTarget.style.transform="scale(1)",children:["Start Protecting Now ",i.jsx(Su,{size:16})]})]})]}),i.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center",paddingTop:20,opacity:e?1:0,transform:e?"translateX(0)":"translateX(24px)",transition:"all 0.6s ease 0.15s"},children:i.jsx(g1,{})})]}),i.jsx("div",{style:{marginTop:48,background:"white",borderRadius:20,padding:"18px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,boxShadow:"0 4px 20px rgba(0,0,0,0.07)",border:"1px solid #e8f8eb",opacity:e?1:0,transform:e?"translateY(0)":"translateY(16px)",transition:"all 0.6s ease 0.35s"},children:r.map((s,a)=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,flex:"1 1 140px",justifyContent:"center",padding:"4px 0",borderRight:a<r.length-1?"1px solid #e8f8eb":"none"},children:[i.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:"#e8f8eb",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:typeof s.icon=="function"&&s.icon.toString().includes("span")?i.jsx(s.icon,{}):i.jsx(s.icon,{size:16,color:"#2ebd3a"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:10,color:"#11355e",opacity:.6},children:s.label}),i.jsx("div",{style:{fontSize:12.5,fontWeight:800,color:"#0B2545"},children:s.value})]})]},a))})]})]})}function m1(){return i.jsxs("section",{style:{background:"linear-gradient(135deg,#0B2545 0%,#2ebd3a 50%,#081c35 100%)",padding:"90px 0",overflow:"hidden",position:"relative"},children:[i.jsx("div",{style:{position:"absolute",inset:0,opacity:.07,backgroundImage:"radial-gradient(circle, #ffffff 1px, transparent 1px)",backgroundSize:"28px 28px",pointerEvents:"none"}}),i.jsx("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1},children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center"},className:"nfc-grid",children:[i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsxs("div",{style:{position:"relative",width:320,height:320},children:[[1,2,3].map(e=>i.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",border:"1.5px solid rgba(232, 248, 235,0.3)",animation:`nfcPulse ${1.6+e*.5}s ease-out ${e*.4}s infinite`}},e)),i.jsx("div",{style:{position:"absolute",inset:"60px",background:"linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.08))",backdropFilter:"blur(12px)",borderRadius:"50%",border:"1.5px solid rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 60px rgba(232, 248, 235,0.2)"},children:i.jsxs("div",{style:{textAlign:"center"},children:[i.jsx(dn,{size:52,color:"#e8f8eb",strokeWidth:1.5}),i.jsx("div",{style:{color:"#e8f8eb",fontWeight:800,fontSize:14,marginTop:8},children:"NFC Ready"})]})}),[{top:"5%",left:"50%",label:"Tap to Scan",icon:i.jsx(Hl,{size:16,color:"#2ebd3a"})},{top:"50%",left:"5%",label:"Instant Alert",icon:i.jsx(ct,{size:16,color:"#2ebd3a"})},{bottom:"8%",right:"10%",label:"No App Needed",icon:i.jsx(vn,{size:16,color:"#2ebd3a"})}].map(({top:e,left:t,bottom:n,right:r,label:s,icon:a})=>i.jsxs("div",{style:{position:"absolute",top:e,left:t,bottom:n,right:r,transform:"translate(-50%,-50%)",background:"#e8f8eb",borderRadius:12,padding:"8px 14px",display:"flex",alignItems:"center",gap:8,fontSize:12,fontWeight:700,color:"#2ebd3a",boxShadow:"0 8px 24px rgba(6,78,59,0.3)",whiteSpace:"nowrap"},children:[a," ",s]},s))]})}),i.jsxs("div",{children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 18px",borderRadius:100,background:"rgba(232, 248, 235,0.15)",border:"1px solid rgba(232, 248, 235,0.3)",marginBottom:20},children:[i.jsx(dn,{size:14,color:"#e8f8eb"}),i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#e8f8eb"},children:"🔥 New Feature"})]}),i.jsxs("h2",{style:{fontSize:"clamp(28px,3.5vw,42px)",fontWeight:900,color:"#f8fafc",margin:"0 0 16px",lineHeight:1.1},children:["NFC Integration —",i.jsx("span",{style:{color:"#7ded88"},children:" Just Tap & Go"})]}),i.jsx("p",{style:{color:"rgba(232, 248, 235,0.85)",fontSize:16,lineHeight:1.7,marginBottom:32},children:"Every ScanForSafe tag now includes an NFC chip. No QR scan needed — just tap any NFC phone and the owner's details appear instantly. Faster than ever."}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:32},children:[{icon:Hl,title:"Tap Any Phone",sub:"Works on all modern NFC phones"},{icon:vn,title:"Instant Access",sub:"Under 0.5 seconds response time"},{icon:Pe,title:"No App Needed",sub:"Browser-based — works anywhere"},{icon:$i,title:"Dual Mode",sub:"NFC tap + QR scan both work"}].map(({icon:e,title:t,sub:n})=>i.jsxs("div",{style:{background:"rgba(255,255,255,0.08)",backdropFilter:"blur(8px)",borderRadius:16,padding:"14px 16px",border:"1px solid rgba(255,255,255,0.1)"},children:[i.jsx(e,{size:20,color:"#7ded88",style:{marginBottom:8}}),i.jsx("div",{style:{color:"#f8fafc",fontWeight:700,fontSize:14,marginBottom:4},children:t}),i.jsx("div",{style:{color:"rgba(232, 248, 235,0.65)",fontSize:12},children:n})]},t))}),i.jsxs("div",{style:{background:"rgba(232, 248, 235,0.1)",border:"1px solid rgba(232, 248, 235,0.2)",borderRadius:16,padding:"16px 20px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"#e8f8eb",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(dn,{size:22,color:"#2ebd3a"})}),i.jsxs("div",{children:[i.jsx("div",{style:{color:"#f8fafc",fontWeight:700,fontSize:14},children:"Available on all new tags"}),i.jsx("div",{style:{color:"rgba(232, 248, 235,0.7)",fontSize:12,marginTop:3},children:"Order a new ScanForSafe tag to get NFC + QR dual protection"})]})]})]})]})}),i.jsx("style",{children:`
        @keyframes nfcPulse {
          0%   { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @media (max-width: 768px) {
          .nfc-grid { grid-template-columns: 1fr !important; }
        }
      `})]})}function y1(){return i.jsxs("section",{style:{background:"linear-gradient(180deg,#f8fafc 0%,#e8f8eb 100%)",padding:"90px 0"},children:[i.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:52},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#fff",border:"1.5px solid #e8f8eb",marginBottom:16,boxShadow:"0 2px 8px rgba(22,101,52,0.08)"},children:[i.jsx(Zr,{size:14,color:"#2ebd3a",fill:"#2ebd3a"}),i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#2ebd3a"},children:"🆕 Senior Citizen Care"})]}),i.jsxs("h2",{style:{fontSize:"clamp(28px,4vw,44px)",fontWeight:900,color:"#0B2545",margin:"0 0 14px"},children:["Emergency Protection for",i.jsx("span",{style:{color:"#2ebd3a"},children:" Senior Citizens"})]}),i.jsx("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:540,margin:"0 auto",lineHeight:1.7},children:"One scan gives responders instant access to medical details, blood group, and emergency contacts — no smartphone needed"})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center"},className:"senior-grid",children:[i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsxs("div",{style:{background:"#fff",borderRadius:28,padding:28,maxWidth:360,width:"100%",boxShadow:"0 20px 60px rgba(6,78,59,0.12)",border:"1.5px solid #e8f8eb"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:24,paddingBottom:20,borderBottom:"1px solid #f8fafc"},children:[i.jsx("div",{style:{width:60,height:60,borderRadius:"50%",background:"linear-gradient(135deg,#2ebd3a,#0B2545)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 20px rgba(22,101,52,0.25)"},children:i.jsx(ja,{size:28,color:"#e8f8eb"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:800,fontSize:18,color:"#0B2545"},children:"Ramesh Nair"}),i.jsx("div",{style:{fontSize:13,color:"#6b7280",marginTop:2},children:"Age: 72 • Nellore, AP"}),i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,marginTop:4,background:"#e8f8eb",borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:700,color:"#2ebd3a"},children:[i.jsx(Pe,{size:10})," Protected"]})]})]}),i.jsxs("div",{style:{marginBottom:18},children:[i.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:10},children:"Medical Information"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[{label:"Blood Group",value:"B+",icon:i.jsx(Nh,{size:13,color:"#ef4444"})},{label:"Condition",value:"Diabetic",icon:i.jsx(Zr,{size:13,color:"#f97316"})},{label:"Allergies",value:"Penicillin",icon:i.jsx(Vl,{size:13,color:"#eab308"})},{label:"Doctor",value:"Dr. Reddy",icon:i.jsx(ja,{size:13,color:"#2ebd3a"})}].map(({label:e,value:t,icon:n})=>i.jsxs("div",{style:{background:"#f9fafb",borderRadius:10,padding:"10px 12px",border:"1px solid #f8fafc"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:4},children:[n,i.jsx("span",{style:{fontSize:10,color:"#9ca3af",fontWeight:600},children:e})]}),i.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#11355e"},children:t})]},e))})]}),i.jsxs("div",{style:{marginBottom:18},children:[i.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:10},children:"Emergency Contacts"}),[{name:"Suresh Nair (Son)",phone:"+91 98765XXXXX"},{name:"Lakshmi Nair (Daughter)",phone:"+91 87654XXXXX"}].map(e=>i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 12px",background:"#f8fafc",borderRadius:10,marginBottom:6},children:[i.jsx("span",{style:{fontSize:13,fontWeight:600,color:"#11355e"},children:e.name}),i.jsxs("button",{style:{padding:"4px 12px",borderRadius:8,background:"#2ebd3a",color:"#fff",fontSize:11,fontWeight:700,border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[i.jsx(Mt,{size:11})," Call"]})]},e.name))]}),i.jsxs("div",{style:{display:"flex",gap:8},children:[i.jsxs("div",{style:{flex:1,background:"linear-gradient(135deg,#0B2545,#2ebd3a)",borderRadius:12,padding:"12px 0",display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[i.jsx(dn,{size:14,color:"#e8f8eb"}),i.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#e8f8eb"},children:"NFC Tap"})]}),i.jsxs("div",{style:{flex:1,background:"#f8fafc",borderRadius:12,padding:"12px 0",display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid #e8f8eb"},children:[i.jsx($i,{size:14,color:"#2ebd3a"}),i.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#2ebd3a"},children:"QR Scan"})]})]})]})}),i.jsx("div",{children:i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:18},children:[{icon:Zr,color:"#ef4444",bg:"#fef2f2",title:"Medical Profile",desc:"Blood group, conditions, allergies, medications, and doctor details — all accessible with one scan. Critical in emergencies."},{icon:Vl,color:"#f97316",bg:"#fff7ed",title:"Emergency Alert System",desc:"Tap or scan triggers an instant notification to all registered family members, with GPS location of the senior."},{icon:dn,color:"#2ebd3a",bg:"#f8fafc",title:"NFC + QR Dual Support",desc:"Works with both NFC tap and QR code scan. No app required for responders — opens in any browser instantly."},{icon:Pe,color:"#2ebd3a",bg:"#e8f8eb",title:"Wristband & Wallet Card",desc:"Available as a waterproof wristband or wallet-size card. Comfortable for daily use by senior citizens."}].map(({icon:e,color:t,bg:n,title:r,desc:s})=>i.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start",background:"#fff",borderRadius:18,padding:"18px 20px",border:"1px solid #e8f8eb",boxShadow:"0 2px 12px rgba(22,101,52,0.07)"},children:[i.jsx("div",{style:{width:44,height:44,borderRadius:12,background:n,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(e,{size:20,color:t})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:800,fontSize:15,color:"#0B2545",marginBottom:5},children:r}),i.jsx("div",{style:{fontSize:14,color:"#4b7a62",lineHeight:1.6},children:s})]})]},r))})})]})]}),i.jsx("style",{children:`
        @media (max-width: 768px) { .senior-grid { grid-template-columns: 1fr !important; } }
      `})]})}function v1(e=.15){const t=v.useRef(null),[n,r]=v.useState(!1);return v.useEffect(()=>{const s=new IntersectionObserver(([a])=>{a.isIntersecting&&r(!0)},{threshold:e});return t.current&&s.observe(t.current),()=>s.disconnect()},[]),[t,n]}function Tn({children:e,delay:t=0,visible:n,style:r={}}){return i.jsx("div",{style:{opacity:n?1:0,transform:n?"translateY(0)":"translateY(32px)",transition:`opacity 0.6s ease ${t}ms, transform 0.6s cubic-bezier(0.34,1.2,0.64,1) ${t}ms`,...r},children:e})}function b1(){const[e,t]=v1(.1),n=[{icon:vn,label:"Instant Scan",desc:"Under 2 seconds",color:"#f97316",bg:"#fff7ed"},{icon:dn,label:"Always Online",desc:"99.9% uptime",color:"#0891b2",bg:"#ecfeff"},{icon:hr,label:"Encrypted",desc:"Bank-level security",color:"#7c3aed",bg:"#f5f3ff"},{icon:Mt,label:"Multi-channel",desc:"App · SMS · WhatsApp",color:"#2ebd3a",bg:"#e8f8eb"}],r=[{icon:Si,title:"Vehicle Info",color:"#2ebd3a",bg:"#e8f8eb",badge:"Essential",badgeColor:"#2ebd3a",badgeBg:"#e8f8eb",items:["Registration Number","Make & Model","Color & Year","Insurance Details"]},{icon:Nu,title:"GPS Tracking",color:"#0891b2",bg:"#ecfeff",badge:"Live",badgeColor:"#0891b2",badgeBg:"#ecfeff",items:["Live scan location","Google Maps link","Scan history log","Last seen timestamp"]},{icon:ct,title:"Alert System",color:"#f97316",bg:"#fff7ed",badge:"Instant",badgeColor:"#f97316",badgeBg:"#fff7ed",items:["Instant app notification","WhatsApp for emergencies","SMS fallback alert","5 emergency contacts"]},{icon:Pe,title:"Security",color:"#7c3aed",bg:"#f5f3ff",badge:"Pro",badgeColor:"#7c3aed",badgeBg:"#f5f3ff",items:["Tamper-evident sticker","Privacy controls","Anti-theft mode","QR + NFC dual layer"]}];return i.jsxs("section",{ref:e,style:{background:"#ffffff",padding:"90px 0",overflow:"hidden"},children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:44},children:[i.jsx(Tn,{visible:t,delay:0,children:i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#e8f8eb",border:"1px solid #c6f0cc",marginBottom:18},children:[i.jsx(Si,{size:14,color:"#2ebd3a"}),i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#2ebd3a"},children:"Vehicle Protection"})]})}),i.jsx(Tn,{visible:t,delay:120,children:i.jsx("h2",{className:"animated-gradient-text",style:{fontSize:"clamp(30px,4.5vw,52px)",fontWeight:900,margin:"0 0 14px",lineHeight:1.15},children:"Vehicle Details & Protection"})}),i.jsx(Tn,{visible:t,delay:220,children:i.jsxs("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:520,margin:"0 auto",lineHeight:1.75},children:["Add your vehicle info once. Let the QR sticker do the rest — ",i.jsx("strong",{style:{color:"#0B2545"},children:"24/7 protection"}),", instant alerts, and GPS tracking"]})})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:14,marginBottom:36},children:n.map(({icon:s,label:a,desc:o,color:l,bg:c},d)=>i.jsx(Tn,{visible:t,delay:320+d*80,children:i.jsxs("div",{className:"highlight-card",style:{background:c,border:`1.5px solid ${l}33`,borderRadius:18,padding:"18px 20px",display:"flex",alignItems:"center",gap:14,transition:"all .3s cubic-bezier(0.34,1.2,0.64,1)",cursor:"default",boxShadow:`0 2px 12px ${l}14`,position:"relative",overflow:"hidden"},onMouseEnter:g=>{g.currentTarget.style.boxShadow=`0 12px 32px ${l}30`,g.currentTarget.style.borderColor=l},onMouseLeave:g=>{g.currentTarget.style.boxShadow=`0 2px 12px ${l}14`,g.currentTarget.style.borderColor=`${l}33`,g.currentTarget.style.transform=""},children:[i.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:3,background:l,borderRadius:"18px 0 0 18px"}}),i.jsx("div",{style:{width:44,height:44,borderRadius:13,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:`0 4px 12px ${l}22`,border:`1.5px solid ${l}22`},children:i.jsx(s,{size:21,color:l})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:14,fontWeight:800,color:"#0B2545",marginBottom:2},children:a}),i.jsx("div",{style:{fontSize:12,color:"#64748b",fontWeight:500},children:o})]})]})},a))}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(265px,1fr))",gap:20},children:r.map(({icon:s,title:a,color:o,bg:l,badge:c,badgeColor:d,badgeBg:g,items:p},x)=>i.jsx(Tn,{visible:t,delay:560+x*100,children:i.jsxs("div",{className:"feature-card",style:{background:"#fafafa",borderRadius:22,padding:"26px 24px 28px",border:"1.5px solid #e5e7eb",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",cursor:"pointer",position:"relative",overflow:"hidden",height:"100%"},onMouseEnter:m=>{m.currentTarget.style.transform="translateY(-8px)",m.currentTarget.style.boxShadow=`0 24px 52px ${o}28`,m.currentTarget.style.borderColor=o,m.currentTarget.style.background="#fff"},onMouseLeave:m=>{m.currentTarget.style.transform="",m.currentTarget.style.boxShadow="",m.currentTarget.style.borderColor="#e5e7eb",m.currentTarget.style.background="#fafafa"},children:[i.jsx("div",{className:"card-top-line",style:{position:"absolute",top:0,left:0,height:3,width:"40%",background:`linear-gradient(90deg,${o},${o}55)`,borderRadius:"22px 22px 0 0",transition:"width 0.4s ease"}}),i.jsx("div",{style:{position:"absolute",bottom:-18,right:-18,width:80,height:80,borderRadius:"50%",background:`${o}10`,border:`2px solid ${o}18`}}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18},children:[i.jsx("div",{style:{width:52,height:52,borderRadius:15,background:l,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 4px 14px ${o}28`,animation:"float-up 3s ease-in-out infinite"},children:i.jsx(s,{size:25,color:o})}),i.jsx("span",{style:{background:g,color:d,fontSize:10,fontWeight:900,letterSpacing:".14em",padding:"5px 13px",borderRadius:999,textTransform:"uppercase",border:`1.5px solid ${o}40`,boxShadow:`0 2px 8px ${o}18`},children:c})]}),i.jsx("h3",{style:{margin:"0 0 6px",fontSize:19,fontWeight:900,color:"#0B2545",lineHeight:1.2},children:a}),i.jsx("div",{style:{width:32,height:3,background:`linear-gradient(90deg,${o},${o}44)`,borderRadius:999,marginBottom:16}}),i.jsx("ul",{style:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:10},children:p.map((m,y)=>i.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10,fontSize:13.5,color:"#374151",opacity:t?1:0,transform:t?"translateX(0)":"translateX(-12px)",transition:`opacity 0.5s ease ${700+x*100+y*60}ms, transform 0.5s ease ${700+x*100+y*60}ms`},children:[i.jsx("div",{style:{width:22,height:22,borderRadius:7,background:l,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:`1px solid ${o}33`},children:i.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:o}})}),m]},m))})]})},a))})]})]})}function w1(){return i.jsxs(i.Fragment,{children:[i.jsx(u1,{}),i.jsx(p1,{}),i.jsx(Lu,{}),i.jsx(b1,{}),i.jsx(y1,{}),i.jsx(m1,{})]})}const k1=[{icon:Mt,label:"Phone",value:"+91 XXXXX XXXXX",href:"tel:+91XXXXXXXXXX",color:"#0057b8",bg:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"#bfdbfe",emoji:"📞",desc:"Mon–Sat, 9am to 7pm"},{icon:Ui,label:"WhatsApp",value:"Chat with us instantly",href:"https://wa.me/91XXXXXXXXXX",color:"#2ebd3a",bg:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"#e8f8eb",emoji:"💬",desc:"Fastest — reply under 10 min"},{icon:zu,label:"Email",value:"hello@scanforsafe.in",href:"mailto:hello@scanforsafe.in",color:"#7c3aed",bg:"linear-gradient(135deg,#f8fafc,#ede9fe)",border:"#ddd6fe",emoji:"✉️",desc:"Reply within 2 business hours"},{icon:yn,label:"Office",value:"Your City, State – 000000",href:null,color:"#e11d48",bg:"linear-gradient(135deg,#fff1f2,#ffe4e6)",border:"#fecdd3",emoji:"📍",desc:"Headquarters, India"}];function ks(e=.12){const t=v.useRef(null),[n,r]=v.useState(!1);return v.useEffect(()=>{const s=new IntersectionObserver(([a])=>{a.isIntersecting&&r(!0)},{threshold:e});return t.current&&s.observe(t.current),()=>s.disconnect()},[e]),[t,n]}function j1(e,t=1800,n=!1){const[r,s]=v.useState(0);return v.useEffect(()=>{if(!n)return;let a=null;const o=l=>{a||(a=l);const c=Math.min((l-a)/t,1),d=1-Math.pow(1-c,3);s(Math.floor(d*e)),c<1&&requestAnimationFrame(o)};requestAnimationFrame(o)},[n,e,t]),r}function js({num:e,suffix:t,label:n,active:r,delay:s}){const a=j1(e,1600,r);return i.jsxs("div",{style:{textAlign:"center",opacity:r?1:0,transform:r?"translateY(0)":"translateY(20px)",transition:`opacity .6s ease ${s}s, transform .6s ease ${s}s`},children:[i.jsxs("div",{style:{fontFamily:"'Clash Display', 'Cabinet Grotesk', sans-serif",fontSize:28,fontWeight:800,color:"#fff",lineHeight:1,letterSpacing:"-0.04em"},children:[a,t]}),i.jsx("div",{style:{fontSize:11,color:"rgba(186,230,253,0.75)",fontWeight:600,marginTop:4,letterSpacing:".06em",textTransform:"uppercase"},children:n})]})}function S1(){const[e,t]=v.useState({name:"",email:"",phone:"",message:""}),[n,r]=v.useState(!1),[s,a]=v.useState(!1),[o,l]=v.useState(!1),[c,d]=ks(),[g,p]=ks(),[x,m]=ks(.3);v.useEffect(()=>{const j=setTimeout(()=>l(!0),80);return()=>clearTimeout(j)},[]);const y=j=>t({...e,[j.target.name]:j.target.value}),w=j=>{j.preventDefault(),a(!0),setTimeout(()=>{a(!1),r(!0)},1600)};return i.jsxs("div",{style:{fontFamily:"'Instrument Sans', 'Cabin', sans-serif",overflowX:"hidden"},children:[i.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),i.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Fira+Code:wght@400;500&display=swap",rel:"stylesheet"}),i.jsx("style",{children:`
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
      `}),i.jsxs("section",{style:{position:"relative",overflow:"hidden",minHeight:520,paddingTop:110,paddingBottom:80,background:"linear-gradient(150deg, #020c1b 0%, #0a1f44 40%, #003d80 80%, #0057b8 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:[i.jsx("div",{style:{position:"absolute",width:560,height:560,borderRadius:"50%",background:"radial-gradient(circle, rgba(46, 189, 58,0.18) 0%, transparent 65%)",top:-180,right:-120,animation:"orbMove1 14s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle, rgba(0,87,184,0.30) 0%, transparent 65%)",bottom:-160,left:-100,animation:"orbMove2 18s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",backgroundSize:"32px 32px"}}),i.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:i.jsx("div",{style:{position:"absolute",left:0,right:0,height:3,background:"linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.0) 15%, rgba(74,222,128,0.9) 50%, rgba(74,222,128,0.0) 85%, transparent 100%)",animation:"scanBeam 4s ease-in-out infinite",filter:"blur(1px)"}})}),i.jsx("div",{style:{position:"absolute",top:70,left:"7%",width:64,height:64,border:"2px solid rgba(74,222,128,0.25)",borderRadius:16,transform:"rotate(15deg)",animation:"floatYSlow 6s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",bottom:80,right:"8%",width:44,height:44,border:"2px solid rgba(99,179,237,0.2)",borderRadius:"50%",animation:"floatY 5s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",top:120,right:"18%",width:28,height:28,background:"rgba(74,222,128,0.12)",borderRadius:8,transform:"rotate(30deg)",animation:"floatYSlow 7s ease-in-out .5s infinite",pointerEvents:"none"}}),i.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",padding:"0 24px",maxWidth:680},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:9,background:"rgba(46, 189, 58,0.14)",border:"1.5px solid rgba(74,222,128,0.35)",borderRadius:99,padding:"8px 20px",marginBottom:28,opacity:o?1:0,transform:o?"translateY(0) scale(1)":"translateY(-16px) scale(.9)",transition:"opacity .7s cubic-bezier(.34,1.3,.64,1), transform .7s cubic-bezier(.34,1.3,.64,1)",fontFamily:"'Fira Code', monospace"},children:[i.jsxs("span",{style:{position:"relative",display:"inline-block",width:8,height:8},children:[i.jsx("span",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"#4bd557",animation:"ripple 1.6s ease-out infinite"}}),i.jsx("span",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"#4bd557"}})]}),i.jsx("span",{style:{fontSize:11,fontWeight:500,color:"#7ded88",letterSpacing:".1em"},children:"team.online • avg_reply < 10min"})]}),i.jsxs("h1",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:"clamp(2.4rem, 5.5vw, 4rem)",fontWeight:800,color:"#fff",lineHeight:1.08,letterSpacing:"-0.04em",margin:"0 0 22px",opacity:o?1:0,transform:o?"translateY(0) skewY(0deg)":"translateY(40px) skewY(2deg)",transition:"opacity .75s ease .12s, transform .75s cubic-bezier(.34,1.3,.64,1) .12s"},children:["Talk to a",i.jsx("br",{}),i.jsx("span",{style:{background:"linear-gradient(90deg, #4bd557 0%, #7ded88 50%, #4bd557 100%)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:o?"glowPulse 3s ease-in-out infinite":"none",display:"inline-block"},children:"Real Human"})]}),i.jsx("p",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:16.5,color:"rgba(186,230,253,0.85)",lineHeight:1.75,maxWidth:500,margin:"0 auto 40px",opacity:o?1:0,transform:o?"translateY(0)":"translateY(24px)",transition:"opacity .7s ease .26s, transform .7s ease .26s"},children:"Questions about your QR tag, bulk orders, or just need help with setup? We're right here — real people, real fast replies."}),i.jsxs("div",{ref:x,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:48,paddingTop:28,borderTop:"1px solid rgba(255,255,255,0.08)"},children:[i.jsx(js,{num:10,suffix:" min",label:"WhatsApp reply",active:m,delay:0}),i.jsx("div",{style:{width:1,height:32,background:"rgba(255,255,255,0.1)"}}),i.jsx(js,{num:2,suffix:" hrs",label:"Email response",active:m,delay:.15}),i.jsx("div",{style:{width:1,height:32,background:"rgba(255,255,255,0.1)"}}),i.jsx(js,{num:1e4,suffix:"+",label:"Happy users",active:m,delay:.3})]})]}),i.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,pointerEvents:"none"},children:i.jsx("svg",{viewBox:"0 0 1440 72",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:i.jsx("path",{d:"M0,48 C240,80 480,16 720,40 C960,64 1200,24 1440,48 L1440,72 L0,72 Z",fill:"#f1f5f9"})})})]}),i.jsx("section",{style:{background:"#f1f5f9",padding:"68px 24px 88px"},children:i.jsx("div",{style:{maxWidth:1100,margin:"0 auto"},children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.65fr",gap:36,alignItems:"start"},children:[i.jsxs("div",{ref:g,children:[i.jsxs("div",{style:{opacity:p?1:0,transform:p?"translateX(0)":"translateX(-24px)",transition:"opacity .55s ease, transform .55s ease",marginBottom:28},children:[i.jsxs("span",{style:{fontFamily:"'Fira Code', monospace",fontSize:10,fontWeight:500,letterSpacing:".18em",textTransform:"uppercase",color:"#0057b8",display:"flex",alignItems:"center",gap:8,marginBottom:10},children:[i.jsx("span",{style:{width:20,height:1.5,background:"#0057b8",display:"inline-block"}}),"contact channels"]}),i.jsxs("h2",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:26,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",margin:"0 0 10px"},children:["Reach Us",i.jsx("br",{}),"Your Way"]}),i.jsx("p",{style:{fontSize:14,color:"#64748b",lineHeight:1.75,fontWeight:400},children:"WhatsApp gets you the fastest reply. For detailed queries, email works great too."})]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:k1.map(({icon:j,label:f,value:u,href:h,color:b,bg:S,border:E,emoji:R,desc:P},A)=>i.jsxs("div",{className:"cf-info-card",style:{background:S,borderColor:E,opacity:p?1:0,transform:p?"translateX(0)":"translateX(-28px)",transition:`opacity .5s ease ${A*.1+.1}s, transform .5s cubic-bezier(.34,1.3,.64,1) ${A*.1+.1}s, box-shadow .3s ease, transform .3s ease`},children:[i.jsx("div",{style:{width:48,height:48,borderRadius:14,background:"rgba(255,255,255,0.7)",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,boxShadow:"0 2px 8px rgba(0,0,0,0.06)",border:`1.5px solid ${E}`},children:R}),i.jsxs("div",{style:{flex:1},children:[i.jsxs("div",{style:{fontFamily:"'Fira Code', monospace",fontSize:9.5,fontWeight:500,letterSpacing:".14em",textTransform:"uppercase",color:b,marginBottom:3,display:"flex",alignItems:"center",gap:5},children:[i.jsx("span",{style:{width:14,height:1.5,background:b,display:"inline-block"}}),f]}),h?i.jsx("a",{href:h,style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:14,fontWeight:700,color:"#0B2545",textDecoration:"none",display:"block",marginBottom:3,transition:"color .2s"},onMouseEnter:B=>B.target.style.color=b,onMouseLeave:B=>B.target.style.color="#0B2545",children:u}):i.jsx("div",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:14,fontWeight:700,color:"#0B2545",marginBottom:3},children:u}),i.jsx("div",{style:{fontSize:11.5,color:"#94a3b8",fontWeight:400},children:P})]})]},f))}),i.jsxs("div",{style:{marginTop:18,padding:"14px 18px",borderRadius:14,background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"1.5px solid #e8f8eb",display:"flex",alignItems:"center",gap:10,opacity:p?1:0,transform:p?"translateY(0)":"translateY(12px)",transition:"opacity .5s ease .55s, transform .5s ease .55s"},children:[i.jsxs("div",{style:{position:"relative",flexShrink:0},children:[i.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"#2ebd3a"}}),i.jsx("div",{style:{position:"absolute",inset:-3,borderRadius:"50%",border:"1.5px solid rgba(46, 189, 58,0.3)",animation:"ripple 2s ease-out infinite"}})]}),i.jsx("span",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:12.5,fontWeight:600,color:"#0B2545"},children:"We always reply within 2 business hours — guaranteed."})]})]}),i.jsx("div",{ref:c,style:{background:"white",borderRadius:26,padding:"40px 38px",boxShadow:"0 24px 64px rgba(0,40,120,0.10), 0 4px 16px rgba(0,40,120,0.05)",border:"1.5px solid #e8edf3",opacity:d?1:0,transform:d?"translateY(0)":"translateY(36px)",transition:"opacity .65s ease .1s, transform .65s cubic-bezier(.34,1.3,.64,1) .1s"},children:n?i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"44px 0",textAlign:"center"},children:[i.jsx("div",{style:{width:88,height:88,borderRadius:"50%",background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:22,border:"2px solid #e8f8eb",animation:"checkPop .65s cubic-bezier(.34,1.3,.64,1) both",boxShadow:"0 0 0 8px rgba(46, 189, 58,0.08)"},children:i.jsx(ba,{style:{width:40,height:40,color:"#2ebd3a"}})}),i.jsx("h3",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:28,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",marginBottom:12},children:"Message Sent! 🎉"}),i.jsx("p",{style:{fontSize:14.5,color:"#64748b",lineHeight:1.8,maxWidth:340},children:"We've got your message and will reply within 2 hours. Check your inbox for a confirmation shortly."}),i.jsxs("div",{style:{marginTop:24,padding:"12px 28px",borderRadius:12,background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"1.5px solid #e8f8eb",fontFamily:"'Instrument Sans', sans-serif",fontSize:13.5,fontWeight:700,color:"#0B2545"},children:["Thanks, ",e.name||"friend","! We'll be in touch 👋"]})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{marginBottom:30},children:[i.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:99,padding:"5px 14px",marginBottom:14},children:i.jsx("span",{style:{fontFamily:"'Fira Code', monospace",fontSize:10,fontWeight:500,color:"#0057b8",letterSpacing:".1em"},children:">_ send_message.tsx"})}),i.jsxs("h2",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:25,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",margin:0},children:["We'd Love to Hear",i.jsx("br",{}),"From You"]}),i.jsx("div",{style:{height:3,borderRadius:99,marginTop:10,background:"linear-gradient(90deg, #0057b8, #2ebd3a)",animation:d?"lineGrow .8s cubic-bezier(.34,1.3,.64,1) .4s both":"none"}})]}),i.jsxs("form",{onSubmit:w,style:{display:"flex",flexDirection:"column",gap:18},children:[i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Full Name *"}),i.jsx("input",{type:"text",name:"name",required:!0,value:e.name,onChange:y,placeholder:"Rahul Sharma",className:"cf-input"})]}),i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Phone"}),i.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:y,placeholder:"+91 XXXXX XXXXX",className:"cf-input"})]})]}),i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Email Address *"}),i.jsx("input",{type:"email",name:"email",required:!0,value:e.email,onChange:y,placeholder:"rahul@example.com",className:"cf-input"})]}),i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Message *"}),i.jsx("textarea",{name:"message",required:!0,rows:5,value:e.message,onChange:y,placeholder:"Tell us how we can help — setup, bulk orders, feedback...",className:"cf-input",style:{resize:"none"}})]}),i.jsx("button",{type:"submit",disabled:s,className:"cf-submit",children:s?i.jsxs(i.Fragment,{children:[i.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",style:{animation:"spin 1s linear infinite",flexShrink:0},children:i.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),"Sending your message..."]}):i.jsxs(i.Fragment,{children:[i.jsx(Pu,{style:{width:16,height:16,flexShrink:0}}),"Send Message"]})}),i.jsx("p",{style:{textAlign:"center",fontFamily:"'Fira Code', monospace",fontSize:10.5,color:"#94a3b8",fontWeight:400,letterSpacing:".04em"},children:"🔒 encrypted • never shared • gdpr safe"})]})]})})]})})})]})}function C1(){return i.jsxs("div",{className:"pt-20 min-h-screen bg-light-bg",children:[i.jsxs("div",{className:"hero-gradient py-16 text-white text-center",children:[i.jsx("h1",{className:"font-display font-extrabold text-4xl mb-4",children:"Privacy Policy"}),i.jsx("p",{className:"text-blue-200",children:"Last updated: January 2025"})]}),i.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:i.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8",children:[{title:"1. Information We Collect",content:"We collect information you provide directly to us when registering your QR tag, such as your name, phone number, email address, emergency contact details, and any additional information you choose to include in your QR profile. We also collect scan data including time, date, and approximate GPS location whenever your QR tag is scanned."},{title:"2. How We Use Your Information",content:"Your personal information is used solely to operate the ScanForSafe service — enabling finders to contact you and sending you real-time notifications. We do not sell, rent, or share your personal data with third parties for marketing purposes."},{title:"3. Data Shared When QR is Scanned",content:"When someone scans your QR code, they see only the information you have chosen to make visible in your profile settings. Your full phone number, email, and private details are protected by default — finders interact through our secure relay system."},{title:"4. Data Security",content:"We use industry-standard encryption (SSL/TLS) to protect your data in transit and at rest. Access to personal data is restricted to authorised team members only, and we conduct regular security audits of our systems."},{title:"5. Data Retention",content:"We retain your personal data for as long as your account is active. You may request deletion of your account and associated data at any time by contacting us at hello@scanforsafe.in. Scan logs are retained for 12 months for your reference."},{title:"6. Your Rights",content:"You have the right to access, correct, or delete your personal information at any time through your account dashboard or by contacting our support team. You may also opt out of non-essential communications at any time."},{title:"7. Contact Us",content:"If you have questions about this Privacy Policy or how we handle your data, please contact us at hello@scanforsafe.in or reach us on WhatsApp."}].map(({title:e,content:t})=>i.jsxs("div",{children:[i.jsx("h2",{className:"font-display font-bold text-lg text-dark-blue mb-2",children:e}),i.jsx("p",{className:"text-slate-600 text-sm leading-relaxed",children:t})]},e))})})]})}function z1(){return i.jsxs("div",{className:"pt-20 min-h-screen bg-light-bg",children:[i.jsxs("div",{className:"hero-gradient py-16 text-white text-center",children:[i.jsx("h1",{className:"font-display font-extrabold text-4xl mb-4",children:"Terms & Conditions"}),i.jsx("p",{className:"text-blue-200",children:"Last updated: January 2025"})]}),i.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:i.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8",children:[{title:"1. Acceptance of Terms",content:"By purchasing and using any ScanForSafe product or service, you agree to these Terms and Conditions. If you do not agree to these terms, please do not use our products or services."},{title:"2. Product Usage",content:"ScanForSafe QR tags are intended for legitimate personal use — protecting your own pets, vehicles, and personal belongings. You must not use our products to track individuals without their knowledge or consent, or for any unlawful purpose."},{title:"3. Account Responsibility",content:"You are responsible for maintaining the accuracy of your profile information and keeping your account credentials secure. You are responsible for all activity that occurs under your account and must notify us immediately of any unauthorised access."},{title:"4. Service Availability",content:"While we strive to maintain 24/7 availability, ScanForSafe does not guarantee uninterrupted service. Planned maintenance, unforeseen technical issues, or force majeure events may temporarily affect service availability."},{title:"5. Refund Policy",content:"We offer a 30-day satisfaction guarantee on all physical QR tag products. If you are unsatisfied with your purchase, contact us within 30 days of delivery for a full refund. Digital activation services are non-refundable once activated."},{title:"6. Limitation of Liability",content:"ScanForSafe provides tools to improve the chances of item recovery and emergency contact. We do not guarantee recovery of any lost item or animal, and shall not be liable for any direct, indirect, or consequential loss arising from use or inability to use our service."},{title:"7. Changes to Terms",content:"We reserve the right to update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms. We will notify registered users of material changes by email."},{title:"8. Contact",content:"For any questions regarding these Terms and Conditions, please contact us at hello@scanforsafe.in."}].map(({title:e,content:t})=>i.jsxs("div",{children:[i.jsx("h2",{className:"font-display font-bold text-lg text-dark-blue mb-2",children:e}),i.jsx("p",{className:"text-slate-600 text-sm leading-relaxed",children:t})]},e))})})]})}function N1(){return i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"fixed",bottom:"100px",right:"22px",width:"70px",height:"70px",borderRadius:"9999px",background:"rgba(37,211,102,0.18)",filter:"blur(18px)",zIndex:40}}),i.jsx("div",{style:{position:"fixed",bottom:"22px",right:"22px",width:"70px",height:"70px",borderRadius:"9999px",background:"rgba(37,99,235,0.18)",filter:"blur(18px)",zIndex:40}}),i.jsxs("a",{href:"https://wa.me/919999999999",target:"_blank",rel:"noreferrer","aria-label":"Chat on WhatsApp",style:{position:"fixed",bottom:"96px",right:"24px",zIndex:50,width:"62px",height:"62px",borderRadius:"9999px",background:"linear-gradient(135deg, #2ebd3a 0%, #249e30 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 30px rgba(37,211,102,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",textDecoration:"none",transition:"all 0.35s ease",overflow:"hidden",backdropFilter:"blur(10px)",animation:"float 3s ease-in-out infinite"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-4px) scale(1.08)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0) scale(1)"},children:[i.jsx("div",{style:{position:"absolute",width:"120%",height:"40%",background:"linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)",transform:"rotate(-25deg)",top:"-20%",left:"-120%",animation:"shine 3s infinite"}}),i.jsx(Uh,{size:26,color:"white",strokeWidth:2.5}),i.jsx("span",{style:{position:"absolute",top:"8px",right:"8px",width:"12px",height:"12px",borderRadius:"9999px",background:"#fff",border:"2px solid #2ebd3a"}})]}),i.jsxs(Ue,{to:"/contact","aria-label":"Send us a message",style:{position:"fixed",bottom:"24px",right:"24px",zIndex:50,width:"62px",height:"62px",borderRadius:"9999px",background:"linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 30px rgba(37,99,235,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",textDecoration:"none",transition:"all 0.35s ease",overflow:"hidden",backdropFilter:"blur(10px)",animation:"float 3s ease-in-out infinite"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-4px) scale(1.08)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0) scale(1)"},children:[i.jsx("div",{style:{position:"absolute",width:"120%",height:"40%",background:"linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)",transform:"rotate(-25deg)",top:"-20%",left:"-120%",animation:"shine 3s infinite"}}),i.jsx(Ui,{size:28,color:"white",strokeWidth:2.5}),i.jsx("div",{style:{position:"absolute",top:"7px",right:"7px",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(Iu,{size:14,color:"#fff"})})]}),i.jsxs("div",{style:{position:"fixed",bottom:"180px",right:"18px",zIndex:45,background:"rgba(11, 37, 69,0.92)",color:"#fff",padding:"10px 14px",borderRadius:"9999px",display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",fontWeight:600,boxShadow:"0 8px 24px rgba(0,0,0,0.18)",backdropFilter:"blur(10px)"},children:["Need Help?",i.jsx(yh,{size:16})]}),i.jsx("style",{children:`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-4px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          @keyframes shine {
            0% {
              left: -120%;
            }
            100% {
              left: 120%;
            }
          }
        `})]})}function E1(){const[e,t]=v.useState(!1),n="https://docs.google.com/forms/d/e/1FAIpQLSd9A7Dl1-VyVYOpzuSFH1dy_vWdsYBxjFUqh6h3LpmicZwKRg/viewform",r=`https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${encodeURIComponent(n)}&color=064e3b&bgcolor=ffffff&margin=10`,s=[{num:"5K+",lbl:"Products Scanned"},{num:"98%",lbl:"Detection Accuracy"},{num:"200+",lbl:"Partner Institutes"}];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .qr-page {
          font-family: 'Space Grotesk', sans-serif;
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 40px 16px;
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

        /* outer glow ring */
        .qr-frame-wrap::before {
          content: "";
          position: absolute; inset: -8px;
          border-radius: 28px;
          background: linear-gradient(145deg, #16a34a22, #4ade8011, #16a34a22);
          border: 1.5px solid rgba(22,163,74,0.2);
        }

        .qr-frame {
          position: relative;
          padding: 10px;
          background: #fff;
          border-radius: 20px;
          border: 2.5px solid #16a34a;
          box-shadow:
            0 0 0 6px rgba(22,163,74,0.06),
            0 12px 40px rgba(6,78,59,0.15);
          transition: transform .4s cubic-bezier(.34,1.3,.64,1), box-shadow .4s ease;
          cursor: pointer;
        }
        .qr-frame.hovered {
          transform: scale(1.03) translateY(-3px);
          box-shadow:
            0 0 0 6px rgba(22,163,74,0.1),
            0 20px 56px rgba(6,78,59,0.22);
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
        .qr-corner.tl { top: 6px; left: 6px; border-width: 2.5px 0 0 2.5px; border-radius: 4px 0 0 0; }
        .qr-corner.tr { top: 6px; right: 6px; border-width: 2.5px 2.5px 0 0; border-radius: 0 4px 0 0; }
        .qr-corner.bl { bottom: 6px; left: 6px; border-width: 0 0 2.5px 2.5px; border-radius: 0 0 0 4px; }
        .qr-corner.br { bottom: 6px; right: 6px; border-width: 0 2.5px 2.5px 0; border-radius: 0 0 4px 0; }

        .qr-img {
          display: block;
          width: 240px; height: 240px;
          border-radius: 12px;
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
      `}),i.jsx("div",{className:"qr-page",children:i.jsxs("div",{className:"qr-card",children:[i.jsxs("div",{className:"qr-badge",children:[i.jsx("span",{className:"qr-badge-dot"}),i.jsx("span",{className:"qr-badge-text",children:"Smart Shield · Verified"})]}),i.jsxs("div",{className:"qr-title",children:[i.jsx("span",{children:"Scan"})," & Verify"]}),i.jsxs("div",{className:"qr-subtitle",children:["Scan the QR code below to access the official",i.jsx("br",{}),"safety verification form instantly."]}),i.jsx("div",{className:"qr-frame-wrap",children:i.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:i.jsxs("div",{className:`qr-frame ${e?"hovered":""}`,onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[i.jsx("div",{className:"qr-scan-line"}),i.jsx("div",{className:"qr-corner tl"}),i.jsx("div",{className:"qr-corner tr"}),i.jsx("div",{className:"qr-corner bl"}),i.jsx("div",{className:"qr-corner br"}),i.jsx("img",{src:r,alt:"ScanForSafe QR Code",className:"qr-img"})]})})}),i.jsx("div",{className:"qr-divider"}),i.jsx("div",{className:"qr-stats",children:s.map((a,o)=>i.jsxs("div",{className:"qr-stat",children:[i.jsx("div",{className:"qr-stat-num",children:a.num}),i.jsx("div",{className:"qr-stat-lbl",children:a.lbl})]},o))}),i.jsxs("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"qr-cta",children:["Open Verification Form",i.jsx("span",{className:"qr-cta-arrow",children:"→"})]}),i.jsxs("div",{className:"qr-footer",children:[i.jsx("span",{className:"qr-footer-item",children:"Secure"}),i.jsx("span",{className:"qr-footer-sep"}),i.jsx("span",{className:"qr-footer-item",children:"Instant"}),i.jsx("span",{className:"qr-footer-sep"}),i.jsx("span",{className:"qr-footer-item",children:"No App Required"})]})]})})]})}const R1=[{id:"whatsapp",icon:i.jsxs("svg",{viewBox:"0 0 32 32",width:"28",height:"28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M16 2C8.268 2 2 8.268 2 16c0 2.478.649 4.8 1.785 6.813L2 30l7.38-1.763A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2z",fill:"#2ebd3a"}),i.jsx("path",{d:"M22.003 19.178c-.306-.153-1.81-.893-2.09-.995-.28-.102-.484-.153-.688.153-.204.306-.79.995-.969 1.2-.178.204-.357.23-.663.077-.306-.154-1.292-.476-2.46-1.517-.91-.811-1.524-1.813-1.702-2.119-.178-.306-.019-.471.134-.623.137-.136.306-.357.459-.536.153-.178.204-.306.306-.51.102-.204.051-.383-.025-.536-.077-.153-.688-1.66-.942-2.272-.248-.597-.5-.516-.688-.526l-.587-.01c-.204 0-.536.077-.816.383-.28.306-1.07 1.046-1.07 2.552 0 1.506 1.096 2.961 1.249 3.165.153.204 2.156 3.292 5.224 4.617.73.315 1.3.503 1.744.644.733.233 1.4.2 1.927.121.588-.088 1.81-.74 2.065-1.455.255-.714.255-1.326.178-1.454-.076-.128-.28-.204-.586-.357z",fill:"#fff"})]}),iconBg:"#E8F8EF",accent:"#2ebd3a",accentDark:"#2ebd3a",dotColor:"#e8f8eb",cardBg:"linear-gradient(145deg,#ffffff 55%,#f8fafc 100%)",activeBg:"linear-gradient(145deg,#f8fafc 0%,#e8f8eb 100%)",tag:"Most Loved",title:"WhatsApp Notifications",desc:"Get instant WhatsApp alerts the moment anyone scans your QR tag — with GPS location and a direct call option.",pills:["Instant Alert","GPS Included","No App Needed"]},{id:"call",icon:i.jsx("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#4f46e5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11 19.79 19.79 0 0 1 1 2.38 2 2 0 0 1 2.98.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.1 15.1z"})}),iconBg:"#f8fafc",accent:"#4f46e5",accentDark:"#3730a3",dotColor:"#c7d2fe",cardBg:"linear-gradient(145deg,#ffffff 55%,#f8fafc 100%)",activeBg:"linear-gradient(145deg,#f8fafc 0%,#e0e7ff 100%)",tag:"Zero Friction",title:"One-Touch Call Connect",desc:"Finders call you in one tap — no app, no sign-up. Works even from a basic feature phone.",pills:["One Tap","No Sign-up","Any Phone"]},{id:"contacts",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#7c3aed",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),i.jsx("circle",{cx:"9",cy:"7",r:"4"}),i.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),i.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),iconBg:"#F3F0FF",accent:"#7c3aed",accentDark:"#5b21b6",dotColor:"#ddd6fe",cardBg:"linear-gradient(145deg,#ffffff 55%,#f8fafc 100%)",activeBg:"linear-gradient(145deg,#f8fafc 0%,#ede9fe 100%)",tag:"Family Ready",title:"Up to 5 Emergency Contacts",desc:"Add family, friends or your vet. If the first contact misses it, the next is notified automatically.",pills:["5 Contacts","Auto Fallback","5-Min Retry"]},{id:"gps",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#2ebd3a",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),i.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),iconBg:"#E8F8EF",accent:"#2ebd3a",accentDark:"#081c35",dotColor:"#e8f8eb",cardBg:"linear-gradient(145deg,#ffffff 55%,#f8fafc 100%)",activeBg:"linear-gradient(145deg,#f8fafc 0%,#e8f8eb 100%)",tag:"Smart",title:"GPS Location on Scan",desc:"Every scan captures precise GPS coordinates and sends you a live Maps link to find your item fast.",pills:["Live GPS","Maps Link","Real-Time"]},{id:"setup",icon:i.jsx("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#d97706",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),iconBg:"#FFFBEB",accent:"#f59e0b",accentDark:"#b45309",dotColor:"#fde68a",cardBg:"linear-gradient(145deg,#ffffff 55%,#fffbeb 100%)",activeBg:"linear-gradient(145deg,#fffbeb 0%,#fef3c7 100%)",tag:"3 Minutes",title:"Instant Activation",desc:"Peel, stick and you are protected. Register your tag in under 3 minutes — no technical knowledge needed.",pills:["Under 3 Min","Guided Setup","Instant Live"]},{id:"privacy",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#e11d48",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),i.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),iconBg:"#FFF1F2",accent:"#f43f5e",accentDark:"#9f1239",dotColor:"#fecdd3",cardBg:"linear-gradient(145deg,#ffffff 55%,#fff1f2 100%)",activeBg:"linear-gradient(145deg,#fff1f2 0%,#ffe4e6 100%)",tag:"Privacy First",title:"Your Info Stays Hidden",desc:"Your phone number is never on the tag. The QR links to a secure proxy — finders see only what you allow.",pills:["Encrypted","No Personal Data","GDPR Safe"]},{id:"history",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#2563eb",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),i.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),iconBg:"#EFF6FF",accent:"#3b82f6",accentDark:"#1d4ed8",dotColor:"#bfdbfe",cardBg:"linear-gradient(145deg,#ffffff 55%,#eff6ff 100%)",activeBg:"linear-gradient(145deg,#eff6ff 0%,#dbeafe 100%)",tag:"Full Visibility",title:"Scan History & Logs",desc:"Your dashboard logs every scan — time, location, device. Know exactly when and where your item was found.",pills:["Full Timeline","Device Info","Exportable"]},{id:"update",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#ea580c",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polyline",{points:"23 4 23 10 17 10"}),i.jsx("polyline",{points:"1 20 1 14 7 14"}),i.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),iconBg:"#FFF7ED",accent:"#f97316",accentDark:"#c2410c",dotColor:"#fed7aa",cardBg:"linear-gradient(145deg,#ffffff 55%,#fff7ed 100%)",activeBg:"linear-gradient(145deg,#fff7ed 0%,#ffedd5 100%)",tag:"Always Current",title:"Update Info Anytime",desc:"Changed your number? Update it in 30 seconds from any device. The physical tag never needs replacing.",pills:["Instant Update","Any Device","Reassignable"]}];function P1({color:e}){return i.jsx("svg",{width:"80",height:"62",viewBox:"0 0 80 62",style:{position:"absolute",bottom:10,right:10,opacity:.4,pointerEvents:"none"},children:Array.from({length:5}).map((t,n)=>Array.from({length:7}).map((r,s)=>i.jsx("circle",{cx:s*12+6,cy:n*12+6,r:"2.5",fill:e},`${n}-${s}`)))})}function I1({color:e,isActive:t}){return i.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",style:{position:"absolute",top:13,right:13,transition:"transform 0.3s ease",transform:t?"scale(1.15)":"scale(1)"},children:[i.jsx("circle",{cx:"11",cy:"11",r:"11",fill:e,opacity:t?".2":".1"}),i.jsx("circle",{cx:"11",cy:"11",r:"8",fill:e,opacity:t?"1":"0.5"}),i.jsx("polyline",{points:"7,11.5 10,14.5 15,9",fill:"none",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function B1({feature:e,isActive:t,onClick:n}){const{icon:r,iconBg:s,accent:a,accentDark:o,dotColor:l,cardBg:c,activeBg:d,tag:g,title:p,desc:x,pills:m}=e;return i.jsxs("div",{onClick:n,style:{position:"relative",borderRadius:20,padding:"22px 20px 28px",background:t?d:c,border:t?`2px solid ${a}`:`2px solid ${a}55`,boxShadow:t?`0 16px 48px ${a}30, 0 4px 12px ${a}18, inset 0 0 0 1px ${a}20`:`0 2px 10px rgba(0,0,0,0.06), inset 0 0 0 1px ${a}15`,transform:t?"translateY(-6px) scale(1.01)":"translateY(0) scale(1)",transition:"all 0.32s cubic-bezier(0.34,1.3,0.64,1)",overflow:"hidden",cursor:"pointer"},children:[i.jsx(I1,{color:a,isActive:t}),i.jsx(P1,{color:l}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:4,borderRadius:"20px 20px 0 0",background:t?`linear-gradient(90deg, ${a}, ${a}bb)`:`linear-gradient(90deg, ${a}70, ${a}30)`,transition:"all 0.35s ease"}}),i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:5,background:t?`${a}20`:`${a}12`,color:o,border:`1px solid ${t?`${a}50`:`${a}35`}`,borderRadius:99,padding:"3px 10px",fontSize:10,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",marginBottom:14,transition:"all 0.25s"},children:[i.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:a}}),g]}),i.jsx("div",{style:{width:56,height:56,borderRadius:"50%",background:t?`${a}20`:s,border:`1.5px solid ${t?`${a}55`:`${a}30`}`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16,transform:t?"scale(1.1)":"scale(1)",transition:"all 0.3s ease"},children:r}),i.jsx("h3",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:15.5,fontWeight:800,color:t?"#0B2545":"#11355e",marginBottom:7,lineHeight:1.28,letterSpacing:"-0.02em",transition:"color 0.25s"},children:p}),i.jsx("div",{style:{width:t?44:28,height:3,borderRadius:99,background:t?`linear-gradient(90deg, ${a}, ${a}88)`:`${a}50`,marginBottom:10,transition:"all 0.35s ease"}}),i.jsx("p",{style:{fontSize:13,color:t?"#334155":"#4b5563",lineHeight:1.7,marginBottom:16,fontWeight:t?450:400,transition:"color 0.25s"},children:x}),i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:m.map(y=>i.jsx("span",{style:{fontSize:10.5,fontWeight:600,padding:"3px 9px",borderRadius:99,background:t?`${a}16`:`${a}0e`,color:o,border:`1px solid ${t?`${a}45`:`${a}30`}`,transition:"all 0.25s"},children:y},y))}),i.jsx("div",{style:{position:"absolute",bottom:0,left:0,height:3,width:t?"100%":"0%",background:`linear-gradient(90deg, ${a}, ${a}55)`,transition:"width 0.4s ease"}})]})}function L1(){const[e,t]=v.useState("whatsapp");return i.jsxs("section",{style:{background:"linear-gradient(180deg,#f8fafc 0%,#f8fafc 100%)",padding:"72px 24px 56px",fontFamily:"'DM Sans', sans-serif"},children:[i.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),i.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=DM+Sans:wght@400;500&display=swap",rel:"stylesheet"}),i.jsxs("div",{style:{maxWidth:1160,margin:"0 auto"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:48},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"#f8fafc",border:"1.5px solid #e8f8eb",borderRadius:99,padding:"6px 16px",fontSize:12,fontWeight:600,color:"#2ebd3a",marginBottom:18},children:[i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:i.jsx("path",{d:"M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"})}),"Why ScanForSafe"]}),i.jsxs("h2",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:"clamp(1.7rem,3.8vw,2.8rem)",fontWeight:800,color:"#0B2545",letterSpacing:"-0.04em",lineHeight:1.1,margin:"0 0 16px"},children:["Powerful Features for ",i.jsx("span",{style:{color:"#2ebd3a"},children:"Peace of Mind"})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:14},children:[i.jsx("div",{style:{width:48,height:1.5,background:"linear-gradient(90deg,transparent,#2ebd3a)"}}),i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#2ebd3a",strokeWidth:"2.5",children:i.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),i.jsx("div",{style:{width:48,height:1.5,background:"linear-gradient(90deg,#2ebd3a,transparent)"}})]}),i.jsxs("p",{style:{fontSize:14.5,color:"#475569",maxWidth:480,margin:"0 auto",lineHeight:1.75},children:["Everything you need to keep your loved ones safe — ",i.jsx("strong",{style:{color:"#11355e",fontWeight:600},children:"no app needed on the finder's end."})]})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0,1fr))",gap:14},children:R1.map(n=>i.jsx(B1,{feature:n,isActive:e===n.id,onClick:()=>t(n.id)},n.id))}),i.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:"8px 28px",marginTop:48,paddingTop:24,borderTop:"1.5px solid #e2e8f0"},children:[{label:"ISO-grade data privacy",path:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},{label:"Works 24/7 — even offline",path:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},{label:"Any smartphone camera",path:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1l2-2h6l2 2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zM12 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"},{label:"End-to-end encrypted",path:"M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4"}].map(({label:n,path:r})=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#2ebd3a",strokeWidth:"2.2",strokeLinecap:"round",children:i.jsx("path",{d:r})}),i.jsx("span",{style:{fontSize:12.5,fontWeight:600,color:"#475569"},children:n})]},n))})]})]})}function M1(){return i.jsx("div",{className:"pt-20",children:i.jsx(L1,{})})}const T1="/assets/bike1-DQV3NgA2.png",F1="/assets/car1-BPYYefFG.png",_1="/assets/dog-BDzmYqxX.png",O1="/assets/luggage1-Cam_lo6y.png",W1="/assets/senior-B8NGG_gO.png",A1="/assets/kid-BgJG0Ozf.png",D1={green:{accent:"#2ebd3a",gradient:"linear-gradient(135deg, #2ebd3a, #0B2545)",soft:"#f8fafc",border:"#cbd5e1",active:"#2ebd3a"},orange:{accent:"#ea580c",gradient:"linear-gradient(135deg, #ea580c, #c2410c)",soft:"#fff7ed",border:"#cbd5e1",active:"#ea580c"},purple:{accent:"#7c3aed",gradient:"linear-gradient(135deg, #7c3aed, #6d28d9)",soft:"#faf5ff",border:"#cbd5e1",active:"#7c3aed"},red:{accent:"#dc2626",gradient:"linear-gradient(135deg, #dc2626, #b91c1c)",soft:"#fef2f2",border:"#cbd5e1",active:"#dc2626"},blue:{accent:"#2563eb",gradient:"linear-gradient(135deg, #2563eb, #1d4ed8)",soft:"#eff6ff",border:"#cbd5e1",active:"#2563eb"}},U1=[{id:"car",icon:Si,image:F1,title:"Car Protection",subtitle:"Vehicle Security",desc:"Weatherproof QR protection for cars with instant emergency alerts and GPS tracking.",features:[{label:"Weatherproof",icon:Ch},{label:"Live Alerts",icon:ct},{label:"GPS Tracking",icon:yn},{label:"24/7 Monitor",icon:Pe}],price:499,original:999,discount:"50% OFF",color:"green",rating:4.9,reviews:2341},{id:"bike",icon:jo,image:T1,title:"Bike Security",subtitle:"Two Wheeler Shield",desc:"Scratch resistant QR protection with owner privacy and instant finder alerts.",features:[{label:"Scratch Resistant",icon:dt},{label:"Instant Notify",icon:ct},{label:"Owner Privacy",icon:hr},{label:"Quick Connect",icon:Oh}],price:499,original:999,discount:"50% OFF",color:"green",popular:!0,rating:4.8,reviews:3892},{id:"pet",icon:Ru,image:_1,title:"Pet Safety Tag",subtitle:"Pet Guardian",desc:"Smart pet QR with collar support, emergency contact and GPS location sharing.",features:[{label:"Collar Friendly",icon:Zr},{label:"GPS Location",icon:Nu},{label:"Emergency Contact",icon:Mt},{label:"Vet Info",icon:Mh}],price:499,original:999,discount:"50% OFF",color:"orange",rating:4.9,reviews:1876},{id:"luggage",icon:Eu,image:O1,title:"Luggage Guard",subtitle:"Travel Protection",desc:"Strong adhesive QR luggage tags for fast recovery and secure travel support.",features:[{label:"Multi Luggage",icon:Fh},{label:"Strong Adhesive",icon:dt},{label:"Travel Friendly",icon:$h},{label:"Quick Recovery",icon:wa}],price:499,original:999,discount:"50% OFF",color:"purple",rating:4.7,reviews:1243},{id:"senior",icon:Kh,image:W1,title:"Senior Safety",subtitle:"Emergency Wrist Band",desc:"Senior citizen wrist QR support with medical info and emergency family alerts.",features:[{label:"Medical Info",icon:dt},{label:"Emergency Alerts",icon:ct},{label:"Family Contact",icon:Mt},{label:"Live Tracking",icon:yn}],price:699,original:1299,discount:"46% OFF",color:"red",rating:4.9,reviews:987},{id:"child",icon:ko,image:A1,title:"Child Safety",subtitle:"Kids Guardian",desc:"Child QR safety patch with emergency contact and quick scan protection.",features:[{label:"QR Patch",icon:dt},{label:"Emergency Alert",icon:ct},{label:"Parental Contact",icon:Mt},{label:"Quick Scan",icon:wa}],price:699,original:1299,discount:"46% OFF",color:"blue",rating:5,reviews:2108}],$1=[{icon:Pe,title:"Secure Checkout",sub:"100% Safe & Encrypted",color:"#2ebd3a"},{icon:ka,title:"Free Shipping",sub:"Pan India Delivery",color:"#2563eb"},{icon:Yh,title:"30-Day Returns",sub:"Easy Refund Policy",color:"#7c3aed"},{icon:Bh,title:"24/7 Support",sub:"Always Here To Help",color:"#ea580c"}];function H1({product:e}){const[t,n]=v.useState(1),[r,s]=v.useState(!1),a=D1[e.color],o=e.icon;return i.jsxs("div",{onClick:()=>s(!r),style:{background:"#fff",borderRadius:20,overflow:"visible",border:r?`2px solid ${a.active}`:"1px solid #cbd5e1",boxShadow:r?"0 12px 28px rgba(0,0,0,0.08)":"0 4px 16px rgba(0,0,0,0.03)",position:"relative",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",transform:r?"translateY(-4px)":"translateY(0px)",padding:"20px 16px 16px 16px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e.popular&&i.jsxs("div",{style:{position:"absolute",top:-12,left:20,background:a.gradient,color:"#fff",fontSize:10,fontWeight:800,padding:"4px 12px",borderRadius:20,zIndex:10,display:"flex",alignItems:"center",gap:4,letterSpacing:"0.5px"},children:[i.jsx(vn,{size:10,fill:"#fff"}),"MOST POPULAR"]}),i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:12,background:a.gradient,display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(o,{color:"#fff",size:20})}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700},children:[i.jsx(So,{size:12,fill:"#f59e0b",color:"#f59e0b"}),i.jsx("span",{style:{color:"#0B2545"},children:e.rating}),i.jsxs("span",{style:{color:"#9ca3af",fontWeight:400},children:["| ",e.reviews.toLocaleString()," reviews"]})]})]}),i.jsx("h3",{style:{fontSize:18,fontWeight:800,color:"#0B2545",margin:"0 0 2px 0"},children:e.title}),i.jsx("p",{style:{color:a.accent,fontWeight:700,fontSize:12,margin:"0 0 12px 0"},children:e.subtitle}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px 1fr",gap:12,alignItems:"start",marginBottom:14},children:[i.jsx("div",{style:{background:"#f8fafc",borderRadius:14,height:120,display:"flex",alignItems:"center",justifyContent:"center",padding:8,border:"1px solid #f1f5f9"},children:i.jsx("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%",objectFit:"contain"}})}),i.jsxs("div",{children:[i.jsx("p",{style:{fontSize:11,color:"#6b7280",lineHeight:1.5,margin:"0 0 10px 0"},children:e.desc}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:6},children:e.features.map(({label:l,icon:c})=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[i.jsx(c,{size:13,color:a.accent,style:{flexShrink:0}}),i.jsx("span",{style:{fontSize:11,fontWeight:500,color:"#374151"},children:l})]},l))})]})]})]}),i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6,marginBottom:12},children:[i.jsxs("span",{style:{fontSize:24,fontWeight:900,color:a.accent},children:["₹",e.price]}),i.jsxs("span",{style:{textDecoration:"line-through",color:"#9ca3af",fontSize:14,fontWeight:500},children:["₹",e.original]}),i.jsx("span",{style:{color:a.accent,fontSize:11,fontWeight:700,marginLeft:"auto",background:a.soft,padding:"2px 8px",borderRadius:12},children:e.discount})]}),i.jsxs("div",{style:{display:"flex",gap:8},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",border:"1px solid #e2e8f0",borderRadius:10,overflow:"hidden",height:36},children:[i.jsx("button",{onClick:l=>{l.stopPropagation(),n(c=>Math.max(1,c-1))},style:Kl,children:i.jsx(Dh,{size:12})}),i.jsx("div",{style:{width:28,textAlign:"center",fontWeight:700,fontSize:13,color:"#0B2545"},children:t}),i.jsx("button",{onClick:l=>{l.stopPropagation(),n(c=>c+1)},style:Kl,children:i.jsx(Hh,{size:12})})]}),i.jsxs("button",{onClick:l=>l.stopPropagation(),style:{flex:1,height:36,border:"none",borderRadius:10,background:a.gradient,color:"#fff",fontWeight:700,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center",gap:6,cursor:"pointer"},children:[i.jsx(qh,{size:13}),"Buy Now"]})]})]})]})}const Kl={width:32,height:"100%",border:"none",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#6b7280"};function V1(){return i.jsxs("section",{style:{padding:"60px 0",background:"linear-gradient(180deg, #f4fbf7 0%, #ffffff 100%)",fontFamily:"'DM Sans', system-ui, sans-serif"},children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
      `}),i.jsxs("div",{style:{width:"100%",maxWidth:1200,margin:"0 auto",padding:"0 20px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:44},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid #e8f8eb",borderRadius:30,padding:"6px 16px",marginBottom:16,boxShadow:"0 4px 12px rgba(0,0,0,0.03)"},children:[i.jsx(vh,{size:14,color:"#2ebd3a"}),i.jsx("span",{style:{fontWeight:800,fontSize:11,color:"#0B2545",letterSpacing:"0.5px"},children:"OUR PRODUCTS"})]}),i.jsxs("h2",{style:{fontSize:44,lineHeight:1.1,fontWeight:900,marginBottom:12,color:"#0B2545",letterSpacing:"-1px"},children:["Choose Your ",i.jsx("span",{style:{color:"#2ebd3a"},children:"Protection Plan"})]}),i.jsx("p",{style:{maxWidth:640,margin:"0 auto",color:"#4b5563",lineHeight:1.6,fontSize:15},children:"Smart QR solutions for vehicles, pets, luggage, children and senior citizens with instant emergency communication and recovery support."})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:24,marginBottom:44},children:U1.map(e=>i.jsx(H1,{product:e},e.id))}),i.jsx("div",{style:{background:"#fff",borderRadius:16,padding:"20px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:16,boxShadow:"0 4px 20px rgba(0,0,0,0.04)",border:"1px solid #f1f5f9"},children:$1.map(({icon:e,title:t,sub:n,color:r})=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,justifyContent:"center"},children:[i.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(e,{size:20,color:r})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:800,fontSize:14,color:"#0B2545"},children:t}),i.jsx("div",{style:{color:"#6b7280",fontSize:12},children:n})]})]},t))})]})]})}function Y1(){return i.jsx("div",{className:"pt-20 bg-[#f8fbff]",children:i.jsx(V1,{})})}const Q1=[{icon:jo,title:"Motorcycles & Bikes",qrSize:"3.5 cm QR Sticker",description:"Weather-proof 3.5cm QR sticker placed on the fuel tank or handlebar. If your bike is found, the finder scans and you get an instant alert with GPS location.",cardBg:"linear-gradient(135deg,#f8fafc,#e8f8eb)",iconBg:"#2ebd3a",tag:"QR Sticker",tagBg:"#e8f8eb",tagColor:"#2ebd3a",image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",badge:"🏍️",qrPosition:"On fuel tank / handlebar"},{icon:Eu,title:"Bags & Luggage",qrSize:"3.5 cm QR Sticker",description:"Durable sticker or tag attached to your bag strap. Perfect for travel bags, school bags, and laptop bags. Works even in low-light.",cardBg:"linear-gradient(135deg,#f8fafc,#a7f3d0)",iconBg:"#0B2545",tag:"QR Tag",tagBg:"#e8f8eb",tagColor:"#0B2545",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",badge:"🎒",qrPosition:"On bag strap / handle"},{icon:Ru,title:"Dogs, Cats & Pets",qrSize:"Collar QR Tag",description:"Attach a lightweight QR tag to your pet's collar. If they wander, anyone can scan it and you'll receive an instant notification with their location.",cardBg:"linear-gradient(135deg,#f8fafc,#e8f8eb)",iconBg:"#2ebd3a",tag:"Collar Tag",tagBg:"#e8f8eb",tagColor:"#2ebd3a",image:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",badge:"🐕",qrPosition:"On pet collar"},{icon:ko,title:"Children Safety",qrSize:"Hand Band / Shoulder",description:"Wearable QR wristband or shoulder tag for your child. If they get separated in crowded places, a good samaritan scans the band and you get alerted instantly.",cardBg:"linear-gradient(135deg,#f8fafc,#e8f8eb)",iconBg:"#0B2545",tag:"Hand Band",tagBg:"#a7f3d0",tagColor:"#0B2545",image:"https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",badge:"🧒",qrPosition:"On hand band / shoulder"},{icon:Cu,title:"Laptops & Valuables",qrSize:"QR + NFC Sticker",description:"Stick a dual QR+NFC tag on your laptop, camera, or any valuable. Works with both QR scan and NFC tap for maximum recovery speed.",cardBg:"linear-gradient(135deg,#f8fafc,#e8f8eb)",iconBg:"#2ebd3a",tag:"NFC + QR",tagBg:"#e8f8eb",tagColor:"#2ebd3a",image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",badge:"💻",qrPosition:"Back of device"},{icon:Gh,title:"Senior Citizens",qrSize:"Emergency QR + NFC",description:"Emergency profile with medical info, blood group, and contacts. NFC tap or QR scan gives responders instant access to critical details — no app needed.",cardBg:"linear-gradient(135deg,#f8fafc,#a7f3d0)",iconBg:"#0B2545",tag:"Senior Care",tagBg:"#2ebd3a",tagColor:"#fff",image:"https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=600&q=80",badge:"👴",qrPosition:"Wristband / wallet card",isNew:!0}];function q1(){return i.jsx("section",{id:"use-cases",style:{background:"#ffffff",padding:"90px 0 80px"},children:i.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:56},children:[i.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#e8f8eb",border:"1px solid #e8f8eb",marginBottom:16},children:i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#2ebd3a"},children:"Real-World Use Cases"})}),i.jsx("h2",{style:{fontSize:"clamp(28px,4vw,44px)",fontWeight:900,color:"#0B2545",margin:"0 0 14px"},children:"Protect Everything You Love"}),i.jsx("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:540,margin:"0 auto",lineHeight:1.7},children:"From bikes to babies — ScanForSafe QR tags and NFC chips keep your world safe and recoverable"})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:24},children:Q1.map(e=>i.jsx(X1,{...e},e.title))})]})})}function X1({icon:e,title:t,qrSize:n,description:r,cardBg:s,iconBg:a,tag:o,tagBg:l,tagColor:c,image:d,badge:g,qrPosition:p,isNew:x}){const[m,y]=v.useState(!1);return i.jsxs("div",{onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),style:{borderRadius:24,overflow:"hidden",background:s,border:"1.5px solid #e8f8eb",boxShadow:m?"0 24px 56px rgba(6,78,59,0.14)":"0 4px 24px rgba(6,78,59,0.07)",transition:"all 0.3s ease",position:"relative",transform:m?"translateY(-6px)":"translateY(0)"},children:[x&&i.jsx("div",{style:{position:"absolute",top:14,right:14,zIndex:10,background:"#2ebd3a",color:"#fff",fontSize:11,fontWeight:800,padding:"4px 12px",borderRadius:100,letterSpacing:"0.05em"},children:"NEW"}),i.jsxs("div",{style:{position:"relative",height:200,overflow:"hidden"},children:[i.jsx("img",{src:d,alt:t,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block",transform:m?"scale(1.04)":"scale(1)",transition:"transform 0.4s ease"}}),i.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, transparent 30%, rgba(6,78,59,0.65))"}}),i.jsxs("div",{style:{position:"absolute",bottom:12,left:12,background:"rgba(255,255,255,0.92)",backdropFilter:"blur(8px)",borderRadius:10,padding:"6px 12px",fontSize:11,fontWeight:700,color:"#2ebd3a",display:"flex",alignItems:"center",gap:6,border:"1px solid rgba(255,255,255,0.8)",zIndex:2},children:[i.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#2ebd3a",strokeWidth:"2.5",children:[i.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),i.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),i.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),i.jsx("path",{d:"M14 14h3v3m0 4h4m-4-4v4m4-7h-4m4 0v3"})]}),p]})]}),i.jsxs("div",{style:{padding:"20px 20px 22px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:12},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:12,background:a,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(e,{size:20,color:"#fff"})}),i.jsxs("div",{children:[i.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:800,color:"#0B2545"},children:t}),i.jsxs("div",{style:{fontSize:11,color:"#6b7280",fontWeight:600,marginTop:2},children:[g," ",n]})]})]}),i.jsx("span",{style:{fontSize:11,fontWeight:800,padding:"4px 10px",borderRadius:100,background:l,color:c,whiteSpace:"nowrap"},children:o})]}),i.jsx("p",{style:{margin:0,fontSize:14,color:"#374151",lineHeight:1.65},children:r})]})]})}function G1(){return i.jsx("div",{className:"pt-20",children:i.jsx(q1,{})})}function K1(){return i.jsx(i.Fragment,{children:i.jsx(Lu,{})})}const Z1=[{name:"Priya Sharma",role:"Pet Owner",city:"Mumbai",initial:"P",color:"#0057b8",bg:"rgba(0,87,184,0.10)",rating:5,Icon:dt,text:"My dog slipped out one evening. Within 20 minutes, a kind stranger scanned his collar and I got a WhatsApp alert with their location. We reunited so fast! ScanForSafe is absolutely worth every rupee."},{name:"Rajesh Kumar",role:"Car Owner",city:"Delhi",initial:"R",color:"#2ca02c",bg:"rgba(44,160,44,0.10)",rating:5,Icon:Si,text:"Parking in crowded areas always made me anxious about blocking someone. Now with the QR on my car, people contact me directly without needing my number visible."},{name:"Anita Verma",role:"Parent",city:"Bengaluru",initial:"A",color:"#1a7fd4",bg:"rgba(26,127,212,0.10)",rating:5,Icon:ko,text:"I put a ScanForSafe tag on my son's school bag. The peace of mind knowing someone can reach me immediately in an emergency is priceless."},{name:"Mohammed Farhan",role:"Bike Owner",city:"Hyderabad",initial:"M",color:"#00509e",bg:"rgba(0,80,158,0.10)",rating:5,Icon:jo,text:"My bike was towed once and I had no idea where it went. After getting ScanForSafe, I feel so much more in control."},{name:"Sneha Reddy",role:"Frequent Traveller",city:"Chennai",initial:"S",color:"#1d8a1d",bg:"rgba(29,138,29,0.10)",rating:5,Icon:wh,text:"Lost my suitcase at the airport once — never again. I tag every bag now."},{name:"Vikram Nair",role:"Laptop Owner",city:"Pune",initial:"V",color:"#0057b8",bg:"rgba(0,87,184,0.10)",rating:5,Icon:Cu,text:"Left my laptop at a café once and it was gone for 2 hours. ScanForSafe helped me recover it quickly."}];function J1({count:e}){return i.jsx("div",{className:"flex gap-0.5",children:Array.from({length:e}).map((t,n)=>i.jsx(So,{className:"w-3.5 h-3.5 text-amber-400 fill-amber-400"},n))})}function eg({t:e}){const{Icon:t}=e;return i.jsxs("div",{className:"relative rounded-2xl p-5 border border-slate-100 bg-white",style:{boxShadow:"0 2px 16px rgba(0,43,91,0.07)"},children:[i.jsxs("div",{className:"flex items-start justify-between mb-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center",style:{background:e.bg},children:i.jsx(t,{style:{width:"18px",height:"18px",color:e.color}})}),i.jsx(J1,{count:e.rating})]}),i.jsx(Vh,{className:"absolute top-4 right-14 w-6 h-6",style:{color:"rgba(0,87,184,0.08)"}}),i.jsxs("p",{className:"text-slate-600 text-sm leading-relaxed mb-4",children:['"',e.text,'"']}),i.jsxs("div",{className:"flex items-center gap-3 pt-3 border-t border-slate-100",children:[i.jsx("div",{className:"w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm",style:{background:e.color},children:e.initial}),i.jsxs("div",{children:[i.jsx("p",{className:"font-bold text-sm",style:{color:"#002b5b"},children:e.name}),i.jsxs("p",{className:"text-xs text-slate-400",children:[e.role," · ",e.city]})]})]})]})}function tg(){return i.jsx("section",{id:"testimonials",className:"py-20",style:{background:"#f4f7fb",padding:"120pX"},children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:[i.jsxs("div",{className:"mb-14 text-center",children:[i.jsx("div",{className:"flex justify-center mb-4",children:i.jsx("span",{className:"badge",children:"Customer Stories"})}),i.jsx("h2",{className:"section-heading",children:"Real People, Real Protection Stories"}),i.jsx("p",{className:"section-sub",children:"Join thousands of happy customers across India who trust ScanForSafe every day."}),i.jsx("div",{className:"flex flex-wrap items-center justify-center gap-6 mt-8",children:[{value:"10,000+",label:"Happy Users"},{value:"4.9 ★",label:"Average Rating"},{value:"98%",label:"Reunion Rate"},{value:"50+ Cities",label:"Across India"}].map(e=>i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-2xl font-black",style:{color:"#0057b8"},children:e.value}),i.jsx("p",{className:"text-xs font-semibold text-slate-500 uppercase tracking-wide",children:e.label})]},e.label))})]}),i.jsx("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:Z1.map((e,t)=>i.jsx(eg,{t:e},t))})]})})}function ng(){return i.jsx(i.Fragment,{children:i.jsx(tg,{})})}function rg(){return i.jsxs("svg",{viewBox:"0 0 280 280",className:"w-52 h-52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("ellipse",{cx:"140",cy:"180",rx:"90",ry:"30",fill:"#2ebd3a",fillOpacity:"0.18"}),i.jsx("path",{d:"M140 240 C100 220 68 185 68 145 L68 82 L140 55 L212 82 L212 145 C212 185 180 220 140 240Z",fill:"#0B2545",fillOpacity:"0.25",transform:"translate(4,6)"}),i.jsx("path",{d:"M140 232 C100 212 68 177 68 137 L68 74 L140 47 L212 74 L212 137 C212 177 180 212 140 232Z",fill:"url(#shieldGrad)",stroke:"#0B2545",strokeWidth:"1.5"}),i.jsx("path",{d:"M140 210 C108 193 88 164 88 134 L88 88 L140 66 L192 88 L192 134 C192 164 172 193 140 210Z",fill:"url(#shieldInner)",opacity:"0.6"}),Array.from({length:6},(e,t)=>Array.from({length:6},(n,r)=>{const s=108+r*13,a=80+t*13,o=Math.random()>.4?.5:.15;return i.jsx("rect",{x:s,y:a,width:"8",height:"8",rx:"1.5",fill:"white",fillOpacity:o},`${t}-${r}`)})),i.jsx("circle",{cx:"168",cy:"158",r:"22",fill:"#2ebd3a",stroke:"white",strokeWidth:"2.5"}),i.jsx("circle",{cx:"168",cy:"158",r:"18",fill:"#2ebd3a"}),i.jsx("path",{d:"M158 158 L164 164 L178 150",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("circle",{cx:"140",cy:"30",r:"5",fill:"#4bd557",fillOpacity:"0.7"}),i.jsx("circle",{cx:"228",cy:"100",r:"4",fill:"#7ded88",fillOpacity:"0.6"}),i.jsx("circle",{cx:"210",cy:"210",r:"5",fill:"#4bd557",fillOpacity:"0.5"}),i.jsx("circle",{cx:"68",cy:"195",r:"3.5",fill:"#7ded88",fillOpacity:"0.6"}),i.jsx("circle",{cx:"50",cy:"100",r:"4",fill:"#4bd557",fillOpacity:"0.5"}),i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:"shieldGrad",x1:"140",y1:"47",x2:"140",y2:"232",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:"0%",stopColor:"#2ebd3a"}),i.jsx("stop",{offset:"50%",stopColor:"#2ebd3a"}),i.jsx("stop",{offset:"100%",stopColor:"#081c35"})]}),i.jsxs("linearGradient",{id:"shieldInner",x1:"140",y1:"66",x2:"140",y2:"210",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:"0%",stopColor:"white",stopOpacity:"0.25"}),i.jsx("stop",{offset:"100%",stopColor:"white",stopOpacity:"0"})]})]})]})}const ig=[{icon:Lh,label:"Enterprise Security",desc:"End-to-end protection for your ecosystem",tags:"Secure • Reliable • Robust",tagColor:"#2ebd3a"},{icon:vn,label:"Lightning Fast",desc:"Instant AI scanning & verification",tags:"Real-time • Accurate • Fast",tagColor:"#d97706"},{icon:Bu,label:"Role-Based Access",desc:"Granular permissions with 4 user roles",tags:"Flexible • Controlled • Safe",tagColor:"#7c3aed"},{icon:zh,label:"Cloud Scalability",desc:"Reliable, secure & always available",tags:"Scalable • Global • Always On",tagColor:"#0ea5e9"}];function sg(){const[e,t]=v.useState(!1),[n,r]=v.useState(""),[s,a]=v.useState(""),[o,l]=v.useState(!1),[c,d]=v.useState({}),g=()=>{const x={};return n.trim()||(x.username="Username is required"),s?s.length<6&&(x.password="Password must be at least 6 characters"):x.password="Password is required",x},p=x=>{x.preventDefault();const m=g();if(Object.keys(m).length){d(m);return}d({}),l(!0),setTimeout(()=>l(!1),1800)};return i.jsxs("div",{className:"min-h-screen flex font-sans",style:{fontFamily:"'DM Sans', 'Helvetica Neue', sans-serif"},children:[i.jsxs("div",{className:"hidden lg:flex lg:w-[55%] flex-col p-10 relative overflow-hidden",style:{background:"linear-gradient(160deg, #f8fafc 0%, #e8f8eb 40%, #e8f8eb 100%)"},children:[i.jsx("div",{className:"absolute inset-0 opacity-40",style:{backgroundImage:"radial-gradient(circle, #7ded88 1px, transparent 1px)",backgroundSize:"28px 28px"}}),i.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}),i.jsx("div",{className:"absolute top-20 right-20 w-80 h-80 rounded-full opacity-30",style:{background:"radial-gradient(circle, #4bd557, transparent 70%)"}}),i.jsx("div",{className:"absolute bottom-10 left-10 w-60 h-60 rounded-full opacity-20",style:{background:"radial-gradient(circle, #2ebd3a, transparent 70%)"}}),i.jsxs("div",{className:"relative z-10 flex items-center gap-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center shadow-md",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)"},children:i.jsx(Pe,{className:"w-5 h-5 text-white"})}),i.jsxs("div",{children:[i.jsx("span",{className:"font-black text-lg text-gray-900 tracking-tight leading-none block",children:"Scan for Safe"}),i.jsx("span",{className:"text-[10px] text-green-700 font-semibold tracking-widest uppercase",children:"Product Protection Platform"})]})]}),i.jsx("div",{className:"relative z-10 mt-6",children:i.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-300 bg-white/60 backdrop-blur-sm text-xs font-bold text-green-800 tracking-widest uppercase shadow-sm",children:[i.jsx(Iu,{className:"w-3.5 h-3.5 text-green-600"}),"AI Powered · Trusted · Secure"]})}),i.jsxs("div",{className:"relative z-10 mt-8 flex gap-8 items-start",children:[i.jsxs("div",{className:"flex-1",children:[i.jsxs("h2",{className:"text-4xl font-black text-gray-900 leading-tight tracking-tight",children:["Smart Product",i.jsx("br",{}),"Safety &"," ",i.jsx("span",{style:{color:"#2ebd3a"},children:"Authentication"})]}),i.jsx("p",{className:"text-gray-600 text-sm mt-4 leading-relaxed max-w-xs font-medium",children:"AI-driven verification, counterfeit detection, and real-time monitoring to protect your products, customers, and brand integrity."})]}),i.jsx("div",{className:"flex-shrink-0 mt-[-12px]",children:i.jsx(rg,{})})]}),i.jsx("div",{className:"relative z-10 mt-6 grid grid-cols-2 gap-4",children:ig.map(({icon:x,label:m,desc:y,tags:w,tagColor:j})=>i.jsxs("div",{className:"bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl p-4 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-200",children:[i.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center mb-3",style:{background:`${j}18`,border:`1px solid ${j}30`},children:i.jsx(x,{className:"w-4 h-4",style:{color:j}})}),i.jsx("p",{className:"text-gray-900 text-sm font-black leading-tight",children:m}),i.jsx("p",{className:"text-gray-500 text-[11px] mt-1 leading-snug",children:y}),i.jsx("p",{className:"text-[10px] font-bold mt-2",style:{color:j},children:w})]},m))})]}),i.jsxs("div",{className:"w-full lg:w-[45%] flex flex-col justify-center items-center px-8 sm:px-14 py-12 bg-white relative",children:[i.jsxs("div",{className:"lg:hidden flex items-center gap-2 mb-10",children:[i.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)"},children:i.jsx(Pe,{className:"w-5 h-5 text-white"})}),i.jsx("span",{className:"font-black text-xl text-gray-900",children:"Scan for Safe"})]}),i.jsxs("div",{className:"w-full max-w-sm",children:[i.jsxs("div",{className:"mb-8",children:[i.jsxs("h1",{className:"text-4xl font-black text-gray-900 tracking-tight leading-tight",children:["Welcome ",i.jsx("span",{style:{color:"#2ebd3a"},children:"Back!"})]}),i.jsx("p",{className:"text-gray-500 text-sm mt-2 font-medium",children:"Sign in to continue to your dashboard"})]}),i.jsxs("form",{onSubmit:p,noValidate:!0,className:"space-y-5",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-[11px] font-black text-gray-700 tracking-widest uppercase mb-2",children:"Username"}),i.jsxs("div",{className:"relative",children:[i.jsx(ja,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),i.jsx("input",{type:"text",value:n,onChange:x=>{r(x.target.value),d(m=>({...m,username:""}))},placeholder:"Enter your username",className:`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 ${c.username?"border-red-300 focus:ring-red-100":"border-gray-200 focus:border-green-400 focus:ring-green-50"}`})]}),c.username&&i.jsx("p",{className:"text-red-500 text-[11px] font-semibold mt-1.5 ml-1",children:c.username})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("label",{className:"block text-[11px] font-black text-gray-700 tracking-widest uppercase",children:"Password"}),i.jsx(Ue,{to:"/forgot-password",className:"text-xs font-bold hover:underline",style:{color:"#2ebd3a"},children:"Forgot password?"})]}),i.jsxs("div",{className:"relative",children:[i.jsx(hr,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),i.jsx("input",{type:e?"text":"password",value:s,onChange:x=>{a(x.target.value),d(m=>({...m,password:""}))},placeholder:"Enter your password",className:`w-full pl-10 pr-11 py-3.5 rounded-xl border text-sm font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 ${c.password?"border-red-300 focus:ring-red-100":"border-gray-200 focus:border-green-400 focus:ring-green-50"}`}),i.jsx("button",{type:"button",onClick:()=>t(!e),className:"absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors","aria-label":e?"Hide password":"Show password",children:e?i.jsx(Eh,{className:"w-4 h-4"}):i.jsx(Rh,{className:"w-4 h-4"})})]}),c.password&&i.jsx("p",{className:"text-red-500 text-[11px] font-semibold mt-1.5 ml-1",children:c.password})]}),i.jsx("button",{type:"submit",disabled:o,className:"w-full py-4 rounded-xl text-white font-black text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed mt-1",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)",boxShadow:"0 10px 28px rgba(46, 189, 58,.28)"},children:o?i.jsxs(i.Fragment,{children:[i.jsxs("svg",{className:"animate-spin w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",children:[i.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),i.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"})]}),"Signing in…"]}):i.jsxs(i.Fragment,{children:["Access Dashboard",i.jsx(Su,{className:"w-4 h-4"})]})}),i.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-400 text-[11px] font-semibold",children:[i.jsx(hr,{className:"w-3.5 h-3.5"}),"Your data is encrypted and secure"]})]}),i.jsxs("p",{className:"text-center text-xs text-gray-500 font-medium mt-8",children:["Don't have an account?"," ",i.jsx(Ue,{to:"/register",className:"font-black hover:underline",style:{color:"#2ebd3a"},children:"Get started free →"})]})]})]})]})}function ag(){const t=Sn().pathname==="/login",[n,r]=v.useState(!1);return v.useEffect(()=>{const s=setTimeout(()=>{r(!0)},600);return()=>clearTimeout(s)},[]),i.jsxs("div",{className:"min-h-screen flex flex-col",children:[!t&&i.jsx(ph,{}),i.jsx("main",{className:"flex-1",children:i.jsxs(nh,{children:[i.jsx(je,{path:"/",element:i.jsx(w1,{})}),i.jsx(je,{path:"/features",element:i.jsx(M1,{})}),i.jsx(je,{path:"/products",element:i.jsx(Y1,{})}),i.jsx(je,{path:"/use-cases",element:i.jsx(G1,{})}),i.jsx(je,{path:"/how-it-works",element:i.jsx(K1,{})}),i.jsx(je,{path:"/testimonials",element:i.jsx(ng,{})}),i.jsx(je,{path:"/login",element:i.jsx(sg,{})}),i.jsx(je,{path:"/contact",element:i.jsx(S1,{})}),i.jsx(je,{path:"/privacy-policy",element:i.jsx(C1,{})}),i.jsx(je,{path:"/terms",element:i.jsx(z1,{})}),i.jsx(je,{path:"/qr-form",element:i.jsx(E1,{})})]})}),!t&&i.jsx(Jh,{}),!t&&i.jsx(N1,{}),n&&i.jsxs("div",{onClick:()=>r(!1),style:{position:"fixed",inset:0,background:"rgba(11, 37, 69, 0.70)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",zIndex:999999,display:"flex",alignItems:"center",justifyContent:"center",padding:24,animation:"fadeInOverlay 0.35s ease-out forwards"},children:[i.jsx("style",{children:`
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
          `}),i.jsxs("div",{className:"sfs-popup-card",onClick:s=>s.stopPropagation(),children:[i.jsx("button",{className:"sfs-popup-close",onClick:()=>r(!1),children:"✕"}),i.jsx("img",{src:"/popup.png",alt:"ScanForSafe Announcement",style:{width:"100%",height:"auto",display:"block",maxHeight:"80vh",objectFit:"contain"}})]})]})]})}Ss.createRoot(document.getElementById("root")).render(i.jsx(lc.StrictMode,{children:i.jsx(ch,{children:i.jsx(ag,{})})}));
