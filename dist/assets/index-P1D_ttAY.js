function Yu(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(r,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function Vu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ed={exports:{}},Ci={},td={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gr=Symbol.for("react.element"),Qu=Symbol.for("react.portal"),qu=Symbol.for("react.fragment"),Xu=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),Ku=Symbol.for("react.provider"),Zu=Symbol.for("react.context"),Ju=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.memo"),nf=Symbol.for("react.lazy"),Ea=Symbol.iterator;function rf(e){return e===null||typeof e!="object"?null:(e=Ea&&e[Ea]||e["@@iterator"],typeof e=="function"?e:null)}var nd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rd=Object.assign,id={};function bn(e,t,n){this.props=e,this.context=t,this.refs=id,this.updater=n||nd}bn.prototype.isReactComponent={};bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sd(){}sd.prototype=bn.prototype;function zo(e,t,n){this.props=e,this.context=t,this.refs=id,this.updater=n||nd}var No=zo.prototype=new sd;No.constructor=zo;rd(No,bn.prototype);No.isPureReactComponent=!0;var Ra=Array.isArray,od=Object.prototype.hasOwnProperty,Eo={current:null},ad={key:!0,ref:!0,__self:!0,__source:!0};function ld(e,t,n){var r,s={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)od.call(t,r)&&!ad.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var d=Array(l),c=0;c<l;c++)d[c]=arguments[c+2];s.children=d}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:gr,type:e,key:o,ref:a,props:s,_owner:Eo.current}}function sf(e,t){return{$$typeof:gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ro(e){return typeof e=="object"&&e!==null&&e.$$typeof===gr}function of(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pa=/\/+/g;function Vi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?of(""+e.key):t.toString(36)}function Wr(e,t,n,r,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case gr:case Qu:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+Vi(a,0):r,Ra(s)?(n="",e!=null&&(n=e.replace(Pa,"$&/")+"/"),Wr(s,t,n,"",function(c){return c})):s!=null&&(Ro(s)&&(s=sf(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Pa,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",Ra(e))for(var l=0;l<e.length;l++){o=e[l];var d=r+Vi(o,l);a+=Wr(o,t,n,d,s)}else if(d=rf(e),typeof d=="function")for(e=d.call(e),l=0;!(o=e.next()).done;)o=o.value,d=r+Vi(o,l++),a+=Wr(o,t,n,d,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function jr(e,t,n){if(e==null)return e;var r=[],s=0;return Wr(e,r,"","",function(o){return t.call(n,o,s++)}),r}function af(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Dr={transition:null},lf={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Dr,ReactCurrentOwner:Eo};function dd(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:jr,forEach:function(e,t,n){jr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jr(e,function(){t++}),t},toArray:function(e){return jr(e,function(t){return t})||[]},only:function(e){if(!Ro(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=bn;M.Fragment=qu;M.Profiler=Gu;M.PureComponent=zo;M.StrictMode=Xu;M.Suspense=ef;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lf;M.act=dd;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=rd({},e.props),s=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Eo.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)od.call(t,d)&&!ad.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){l=Array(d);for(var c=0;c<d;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:gr,type:e.type,key:s,ref:o,props:r,_owner:a}};M.createContext=function(e){return e={$$typeof:Zu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ku,_context:e},e.Consumer=e};M.createElement=ld;M.createFactory=function(e){var t=ld.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Ju,render:e}};M.isValidElement=Ro;M.lazy=function(e){return{$$typeof:nf,_payload:{_status:-1,_result:e},_init:af}};M.memo=function(e,t){return{$$typeof:tf,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Dr.transition;Dr.transition={};try{e()}finally{Dr.transition=t}};M.unstable_act=dd;M.useCallback=function(e,t){return ce.current.useCallback(e,t)};M.useContext=function(e){return ce.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};M.useEffect=function(e,t){return ce.current.useEffect(e,t)};M.useId=function(){return ce.current.useId()};M.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ce.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};M.useRef=function(e){return ce.current.useRef(e)};M.useState=function(e){return ce.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ce.current.useTransition()};M.version="18.3.1";td.exports=M;var y=td.exports;const cd=Vu(y),df=Yu({__proto__:null,default:cd},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cf=y,uf=Symbol.for("react.element"),ff=Symbol.for("react.fragment"),pf=Object.prototype.hasOwnProperty,hf=cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gf={key:!0,ref:!0,__self:!0,__source:!0};function ud(e,t,n){var r,s={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)pf.call(t,r)&&!gf.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:uf,type:e,key:o,ref:a,props:s,_owner:hf.current}}Ci.Fragment=ff;Ci.jsx=ud;Ci.jsxs=ud;ed.exports=Ci;var i=ed.exports,Ss={},fd={exports:{}},we={},pd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,I){var B=N.length;N.push(I);e:for(;0<B;){var V=B-1>>>1,Z=N[V];if(0<s(Z,I))N[V]=I,N[B]=Z,B=V;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var I=N[0],B=N.pop();if(B!==I){N[0]=B;e:for(var V=0,Z=N.length,wr=Z>>>1;V<wr;){var Ct=2*(V+1)-1,Yi=N[Ct],zt=Ct+1,kr=N[zt];if(0>s(Yi,B))zt<Z&&0>s(kr,Yi)?(N[V]=kr,N[zt]=B,V=zt):(N[V]=Yi,N[Ct]=B,V=Ct);else if(zt<Z&&0>s(kr,B))N[V]=kr,N[zt]=B,V=zt;else break e}}return I}function s(N,I){var B=N.sortIndex-I.sortIndex;return B!==0?B:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var d=[],c=[],g=1,p=null,x=3,m=!1,v=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=N)r(c),I.sortIndex=I.expirationTime,t(d,I);else break;I=n(c)}}function b(N){if(w=!1,h(N),!v)if(n(d)!==null)v=!0,$i(S);else{var I=n(c);I!==null&&Hi(b,I.startTime-N)}}function S(N,I){v=!1,w&&(w=!1,f(P),P=-1),m=!0;var B=x;try{for(h(I),p=n(d);p!==null&&(!(p.expirationTime>I)||N&&!Pe());){var V=p.callback;if(typeof V=="function"){p.callback=null,x=p.priorityLevel;var Z=V(p.expirationTime<=I);I=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(d)&&r(d),h(I)}else r(d);p=n(d)}if(p!==null)var wr=!0;else{var Ct=n(c);Ct!==null&&Hi(b,Ct.startTime-I),wr=!1}return wr}finally{p=null,x=B,m=!1}}var E=!1,R=null,P=-1,W=5,T=-1;function Pe(){return!(e.unstable_now()-T<W)}function Cn(){if(R!==null){var N=e.unstable_now();T=N;var I=!0;try{I=R(!0,N)}finally{I?zn():(E=!1,R=null)}}else E=!1}var zn;if(typeof u=="function")zn=function(){u(Cn)};else if(typeof MessageChannel<"u"){var Na=new MessageChannel,Hu=Na.port2;Na.port1.onmessage=Cn,zn=function(){Hu.postMessage(null)}}else zn=function(){j(Cn,0)};function $i(N){R=N,E||(E=!0,zn())}function Hi(N,I){P=j(function(){N(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,$i(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(N){switch(x){case 1:case 2:case 3:var I=3;break;default:I=x}var B=x;x=I;try{return N()}finally{x=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=x;x=N;try{return I()}finally{x=B}},e.unstable_scheduleCallback=function(N,I,B){var V=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?V+B:V):B=V,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=B+Z,N={id:g++,callback:I,priorityLevel:N,startTime:B,expirationTime:Z,sortIndex:-1},B>V?(N.sortIndex=B,t(c,N),n(d)===null&&N===n(c)&&(w?(f(P),P=-1):w=!0,Hi(b,B-V))):(N.sortIndex=Z,t(d,N),v||m||(v=!0,$i(S))),N},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(N){var I=x;return function(){var B=x;x=I;try{return N.apply(this,arguments)}finally{x=B}}}})(hd);pd.exports=hd;var xf=pd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf=y,be=xf;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gd=new Set,Xn={};function Wt(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Xn[e]=t,e=0;e<t.length;e++)gd.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cs=Object.prototype.hasOwnProperty,yf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ia={},Ta={};function vf(e){return Cs.call(Ta,e)?!0:Cs.call(Ia,e)?!1:yf.test(e)?Ta[e]=!0:(Ia[e]=!0,!1)}function bf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wf(e,t,n,r){if(t===null||typeof t>"u"||bf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,s,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Po=/[\-:]([a-z])/g;function Io(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Po,Io);re[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Po,Io);re[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Po,Io);re[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function To(e,t,n,r){var s=re.hasOwnProperty(t)?re[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wf(t,n,s,r)&&(n=null),r||s===null?vf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),Bo=Symbol.for("react.strict_mode"),zs=Symbol.for("react.profiler"),xd=Symbol.for("react.provider"),md=Symbol.for("react.context"),Mo=Symbol.for("react.forward_ref"),Ns=Symbol.for("react.suspense"),Es=Symbol.for("react.suspense_list"),Lo=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),yd=Symbol.for("react.offscreen"),Ba=Symbol.iterator;function Nn(e){return e===null||typeof e!="object"?null:(e=Ba&&e[Ba]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Qi;function Fn(e){if(Qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qi=t&&t[1]||""}return`
`+Qi+e}var qi=!1;function Xi(e,t){if(!e||qi)return"";qi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),o=r.stack.split(`
`),a=s.length-1,l=o.length-1;1<=a&&0<=l&&s[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==o[l]){var d=`
`+s[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=l);break}}}finally{qi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fn(e):""}function kf(e){switch(e.tag){case 5:return Fn(e.type);case 16:return Fn("Lazy");case 13:return Fn("Suspense");case 19:return Fn("SuspenseList");case 0:case 2:case 15:return e=Xi(e.type,!1),e;case 11:return e=Xi(e.type.render,!1),e;case 1:return e=Xi(e.type,!0),e;default:return""}}function Rs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Yt:return"Portal";case zs:return"Profiler";case Bo:return"StrictMode";case Ns:return"Suspense";case Es:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case md:return(e.displayName||"Context")+".Consumer";case xd:return(e._context.displayName||"Context")+".Provider";case Mo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lo:return t=e.displayName||null,t!==null?t:Rs(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return Rs(e(t))}catch{}}return null}function jf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rs(t);case 8:return t===Bo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sf(e){var t=vd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cr(e){e._valueTracker||(e._valueTracker=Sf(e))}function bd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ps(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ma(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wd(e,t){t=t.checked,t!=null&&To(e,"checked",t,!1)}function Is(e,t){wd(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ts(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ts(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function La(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ts(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _n=Array.isArray;function rn(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Bs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(_n(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function kd(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _a(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ms(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zr,Sd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cf=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(e){Cf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wn[t]=Wn[e]})});function Cd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wn.hasOwnProperty(e)&&Wn[e]?(""+t).trim():t+"px"}function zd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Cd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var zf=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ls(e,t){if(t){if(zf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Fs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _s=null;function Fo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,sn=null,on=null;function Oa(e){if(e=yr(e)){if(typeof Os!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Pi(t),Os(e.stateNode,e.type,t))}}function Nd(e){sn?on?on.push(e):on=[e]:sn=e}function Ed(){if(sn){var e=sn,t=on;if(on=sn=null,Oa(e),t)for(e=0;e<t.length;e++)Oa(t[e])}}function Rd(e,t){return e(t)}function Pd(){}var Gi=!1;function Id(e,t,n){if(Gi)return e(t,n);Gi=!0;try{return Rd(e,t,n)}finally{Gi=!1,(sn!==null||on!==null)&&(Pd(),Ed())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=Pi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var As=!1;if(Ge)try{var En={};Object.defineProperty(En,"passive",{get:function(){As=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{As=!1}function Nf(e,t,n,r,s,o,a,l,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Dn=!1,ei=null,ti=!1,Ws=null,Ef={onError:function(e){Dn=!0,ei=e}};function Rf(e,t,n,r,s,o,a,l,d){Dn=!1,ei=null,Nf.apply(Ef,arguments)}function Pf(e,t,n,r,s,o,a,l,d){if(Rf.apply(this,arguments),Dn){if(Dn){var c=ei;Dn=!1,ei=null}else throw Error(k(198));ti||(ti=!0,Ws=c)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Td(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Aa(e){if(Dt(e)!==e)throw Error(k(188))}function If(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Aa(s),e;if(o===r)return Aa(s),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=s,r=o;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,r=o;break}if(l===r){a=!0,r=s,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=s;break}if(l===r){a=!0,r=o,n=s;break}l=l.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Bd(e){return e=If(e),e!==null?Md(e):null}function Md(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Md(e);if(t!==null)return t;e=e.sibling}return null}var Ld=be.unstable_scheduleCallback,Wa=be.unstable_cancelCallback,Tf=be.unstable_shouldYield,Bf=be.unstable_requestPaint,Q=be.unstable_now,Mf=be.unstable_getCurrentPriorityLevel,_o=be.unstable_ImmediatePriority,Fd=be.unstable_UserBlockingPriority,ni=be.unstable_NormalPriority,Lf=be.unstable_LowPriority,_d=be.unstable_IdlePriority,zi=null,Ue=null;function Ff(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Af,_f=Math.log,Of=Math.LN2;function Af(e){return e>>>=0,e===0?32:31-(_f(e)/Of|0)|0}var Nr=64,Er=4194304;function On(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~s;l!==0?r=On(l):(o&=a,o!==0&&(r=On(o)))}else a=n&~s,a!==0?r=On(a):o!==0&&(r=On(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),s=1<<n,r|=e[n],t&=~s;return r}function Wf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Df(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Le(o),l=1<<a,d=s[a];d===-1?(!(l&n)||l&r)&&(s[a]=Wf(l,t)):d<=t&&(e.expiredLanes|=l),o&=~l}}function Ds(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Od(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function Ki(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function Uf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Le(n),o=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~o}}function Oo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var F=0;function Ad(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wd,Ao,Dd,Ud,$d,Us=!1,Rr=[],ut=null,ft=null,pt=null,Zn=new Map,Jn=new Map,it=[],$f="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Da(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function Rn(e,t,n,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},t!==null&&(t=yr(t),t!==null&&Ao(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Hf(e,t,n,r,s){switch(t){case"focusin":return ut=Rn(ut,e,t,n,r,s),!0;case"dragenter":return ft=Rn(ft,e,t,n,r,s),!0;case"mouseover":return pt=Rn(pt,e,t,n,r,s),!0;case"pointerover":var o=s.pointerId;return Zn.set(o,Rn(Zn.get(o)||null,e,t,n,r,s)),!0;case"gotpointercapture":return o=s.pointerId,Jn.set(o,Rn(Jn.get(o)||null,e,t,n,r,s)),!0}return!1}function Hd(e){var t=Rt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Td(n),t!==null){e.blockedOn=t,$d(e.priority,function(){Dd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$s(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_s=r,n.target.dispatchEvent(r),_s=null}else return t=yr(n),t!==null&&Ao(t),e.blockedOn=n,!1;t.shift()}return!0}function Ua(e,t,n){Ur(e)&&n.delete(t)}function Yf(){Us=!1,ut!==null&&Ur(ut)&&(ut=null),ft!==null&&Ur(ft)&&(ft=null),pt!==null&&Ur(pt)&&(pt=null),Zn.forEach(Ua),Jn.forEach(Ua)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,Us||(Us=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Yf)))}function er(e){function t(s){return Pn(s,e)}if(0<Rr.length){Pn(Rr[0],e);for(var n=1;n<Rr.length;n++){var r=Rr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&Pn(ut,e),ft!==null&&Pn(ft,e),pt!==null&&Pn(pt,e),Zn.forEach(t),Jn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)Hd(n),n.blockedOn===null&&it.shift()}var an=et.ReactCurrentBatchConfig,ii=!0;function Vf(e,t,n,r){var s=F,o=an.transition;an.transition=null;try{F=1,Wo(e,t,n,r)}finally{F=s,an.transition=o}}function Qf(e,t,n,r){var s=F,o=an.transition;an.transition=null;try{F=4,Wo(e,t,n,r)}finally{F=s,an.transition=o}}function Wo(e,t,n,r){if(ii){var s=$s(e,t,n,r);if(s===null)as(e,t,r,si,n),Da(e,r);else if(Hf(s,e,t,n,r))r.stopPropagation();else if(Da(e,r),t&4&&-1<$f.indexOf(e)){for(;s!==null;){var o=yr(s);if(o!==null&&Wd(o),o=$s(e,t,n,r),o===null&&as(e,t,r,si,n),o===s)break;s=o}s!==null&&r.stopPropagation()}else as(e,t,r,null,n)}}var si=null;function $s(e,t,n,r){if(si=null,e=Fo(r),e=Rt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Td(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return si=e,null}function Yd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mf()){case _o:return 1;case Fd:return 4;case ni:case Lf:return 16;case _d:return 536870912;default:return 16}default:return 16}}var ot=null,Do=null,$r=null;function Vd(){if($r)return $r;var e,t=Do,n=t.length,r,s="value"in ot?ot.value:ot.textContent,o=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[o-r];r++);return $r=s.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pr(){return!0}function $a(){return!1}function ke(e){function t(n,r,s,o,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Pr:$a,this.isPropagationStopped=$a,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pr)},persist:function(){},isPersistent:Pr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uo=ke(wn),mr=H({},wn,{view:0,detail:0}),qf=ke(mr),Zi,Ji,In,Ni=H({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$o,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==In&&(In&&e.type==="mousemove"?(Zi=e.screenX-In.screenX,Ji=e.screenY-In.screenY):Ji=Zi=0,In=e),Zi)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),Ha=ke(Ni),Xf=H({},Ni,{dataTransfer:0}),Gf=ke(Xf),Kf=H({},mr,{relatedTarget:0}),es=ke(Kf),Zf=H({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jf=ke(Zf),ep=H({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tp=ke(ep),np=H({},wn,{data:0}),Ya=ke(np),rp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ip={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function op(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sp[e])?!!t[e]:!1}function $o(){return op}var ap=H({},mr,{key:function(e){if(e.key){var t=rp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ip[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$o,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lp=ke(ap),dp=H({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Va=ke(dp),cp=H({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$o}),up=ke(cp),fp=H({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),pp=ke(fp),hp=H({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gp=ke(hp),xp=[9,13,27,32],Ho=Ge&&"CompositionEvent"in window,Un=null;Ge&&"documentMode"in document&&(Un=document.documentMode);var mp=Ge&&"TextEvent"in window&&!Un,Qd=Ge&&(!Ho||Un&&8<Un&&11>=Un),Qa=" ",qa=!1;function qd(e,t){switch(e){case"keyup":return xp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function yp(e,t){switch(e){case"compositionend":return Xd(t);case"keypress":return t.which!==32?null:(qa=!0,Qa);case"textInput":return e=t.data,e===Qa&&qa?null:e;default:return null}}function vp(e,t){if(Qt)return e==="compositionend"||!Ho&&qd(e,t)?(e=Vd(),$r=Do=ot=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qd&&t.locale!=="ko"?null:t.data;default:return null}}var bp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bp[e.type]:t==="textarea"}function Gd(e,t,n,r){Nd(r),t=oi(t,"onChange"),0<t.length&&(n=new Uo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,tr=null;function wp(e){ac(e,0)}function Ei(e){var t=Gt(e);if(bd(t))return e}function kp(e,t){if(e==="change")return t}var Kd=!1;if(Ge){var ts;if(Ge){var ns="oninput"in document;if(!ns){var Ga=document.createElement("div");Ga.setAttribute("oninput","return;"),ns=typeof Ga.oninput=="function"}ts=ns}else ts=!1;Kd=ts&&(!document.documentMode||9<document.documentMode)}function Ka(){$n&&($n.detachEvent("onpropertychange",Zd),tr=$n=null)}function Zd(e){if(e.propertyName==="value"&&Ei(tr)){var t=[];Gd(t,tr,e,Fo(e)),Id(wp,t)}}function jp(e,t,n){e==="focusin"?(Ka(),$n=t,tr=n,$n.attachEvent("onpropertychange",Zd)):e==="focusout"&&Ka()}function Sp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(tr)}function Cp(e,t){if(e==="click")return Ei(t)}function zp(e,t){if(e==="input"||e==="change")return Ei(t)}function Np(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _e=typeof Object.is=="function"?Object.is:Np;function nr(e,t){if(_e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Cs.call(t,s)||!_e(e[s],t[s]))return!1}return!0}function Za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ja(e,t){var n=Za(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Za(n)}}function Jd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ec(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function Yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ep(e){var t=ec(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jd(n.ownerDocument.documentElement,n)){if(r!==null&&Yo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=Ja(n,o);var a=Ja(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rp=Ge&&"documentMode"in document&&11>=document.documentMode,qt=null,Hs=null,Hn=null,Ys=!1;function el(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ys||qt==null||qt!==Jr(r)||(r=qt,"selectionStart"in r&&Yo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&nr(Hn,r)||(Hn=r,r=oi(Hs,"onSelect"),0<r.length&&(t=new Uo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xt={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionend:Ir("Transition","TransitionEnd")},rs={},tc={};Ge&&(tc=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function Ri(e){if(rs[e])return rs[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tc)return rs[e]=t[n];return e}var nc=Ri("animationend"),rc=Ri("animationiteration"),ic=Ri("animationstart"),sc=Ri("transitionend"),oc=new Map,tl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){oc.set(e,t),Wt(t,[e])}for(var is=0;is<tl.length;is++){var ss=tl[is],Pp=ss.toLowerCase(),Ip=ss[0].toUpperCase()+ss.slice(1);kt(Pp,"on"+Ip)}kt(nc,"onAnimationEnd");kt(rc,"onAnimationIteration");kt(ic,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(sc,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tp=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function nl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Pf(r,t,void 0,e),e.currentTarget=null}function ac(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],d=l.instance,c=l.currentTarget;if(l=l.listener,d!==o&&s.isPropagationStopped())break e;nl(s,l,c),o=d}else for(a=0;a<r.length;a++){if(l=r[a],d=l.instance,c=l.currentTarget,l=l.listener,d!==o&&s.isPropagationStopped())break e;nl(s,l,c),o=d}}}if(ti)throw e=Ws,ti=!1,Ws=null,e}function O(e,t){var n=t[Gs];n===void 0&&(n=t[Gs]=new Set);var r=e+"__bubble";n.has(r)||(lc(t,e,2,!1),n.add(r))}function os(e,t,n){var r=0;t&&(r|=4),lc(n,e,r,t)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Tr]){e[Tr]=!0,gd.forEach(function(n){n!=="selectionchange"&&(Tp.has(n)||os(n,!1,e),os(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tr]||(t[Tr]=!0,os("selectionchange",!1,t))}}function lc(e,t,n,r){switch(Yd(t)){case 1:var s=Vf;break;case 4:s=Qf;break;default:s=Wo}n=s.bind(null,t,n,e),s=void 0,!As||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function as(e,t,n,r,s){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;a=a.return}for(;l!==null;){if(a=Rt(l),a===null)return;if(d=a.tag,d===5||d===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Id(function(){var c=o,g=Fo(n),p=[];e:{var x=oc.get(e);if(x!==void 0){var m=Uo,v=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":m=lp;break;case"focusin":v="focus",m=es;break;case"focusout":v="blur",m=es;break;case"beforeblur":case"afterblur":m=es;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ha;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=up;break;case nc:case rc:case ic:m=Jf;break;case sc:m=pp;break;case"scroll":m=qf;break;case"wheel":m=gp;break;case"copy":case"cut":case"paste":m=tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Va}var w=(t&4)!==0,j=!w&&e==="scroll",f=w?x!==null?x+"Capture":null:x;w=[];for(var u=c,h;u!==null;){h=u;var b=h.stateNode;if(h.tag===5&&b!==null&&(h=b,f!==null&&(b=Kn(u,f),b!=null&&w.push(ir(u,b,h)))),j)break;u=u.return}0<w.length&&(x=new m(x,v,null,n,g),p.push({event:x,listeners:w}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",x&&n!==_s&&(v=n.relatedTarget||n.fromElement)&&(Rt(v)||v[Ke]))break e;if((m||x)&&(x=g.window===g?g:(x=g.ownerDocument)?x.defaultView||x.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Rt(v):null,v!==null&&(j=Dt(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(w=Ha,b="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=Va,b="onPointerLeave",f="onPointerEnter",u="pointer"),j=m==null?x:Gt(m),h=v==null?x:Gt(v),x=new w(b,u+"leave",m,n,g),x.target=j,x.relatedTarget=h,b=null,Rt(g)===c&&(w=new w(f,u+"enter",v,n,g),w.target=h,w.relatedTarget=j,b=w),j=b,m&&v)t:{for(w=m,f=v,u=0,h=w;h;h=Ht(h))u++;for(h=0,b=f;b;b=Ht(b))h++;for(;0<u-h;)w=Ht(w),u--;for(;0<h-u;)f=Ht(f),h--;for(;u--;){if(w===f||f!==null&&w===f.alternate)break t;w=Ht(w),f=Ht(f)}w=null}else w=null;m!==null&&rl(p,x,m,w,!1),v!==null&&j!==null&&rl(p,j,v,w,!0)}}e:{if(x=c?Gt(c):window,m=x.nodeName&&x.nodeName.toLowerCase(),m==="select"||m==="input"&&x.type==="file")var S=kp;else if(Xa(x))if(Kd)S=zp;else{S=Sp;var E=jp}else(m=x.nodeName)&&m.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(S=Cp);if(S&&(S=S(e,c))){Gd(p,S,n,g);break e}E&&E(e,x,c),e==="focusout"&&(E=x._wrapperState)&&E.controlled&&x.type==="number"&&Ts(x,"number",x.value)}switch(E=c?Gt(c):window,e){case"focusin":(Xa(E)||E.contentEditable==="true")&&(qt=E,Hs=c,Hn=null);break;case"focusout":Hn=Hs=qt=null;break;case"mousedown":Ys=!0;break;case"contextmenu":case"mouseup":case"dragend":Ys=!1,el(p,n,g);break;case"selectionchange":if(Rp)break;case"keydown":case"keyup":el(p,n,g)}var R;if(Ho)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Qt?qd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Qd&&n.locale!=="ko"&&(Qt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Qt&&(R=Vd()):(ot=g,Do="value"in ot?ot.value:ot.textContent,Qt=!0)),E=oi(c,P),0<E.length&&(P=new Ya(P,e,null,n,g),p.push({event:P,listeners:E}),R?P.data=R:(R=Xd(n),R!==null&&(P.data=R)))),(R=mp?yp(e,n):vp(e,n))&&(c=oi(c,"onBeforeInput"),0<c.length&&(g=new Ya("onBeforeInput","beforeinput",null,n,g),p.push({event:g,listeners:c}),g.data=R))}ac(p,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oi(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Kn(e,n),o!=null&&r.unshift(ir(e,o,s)),o=Kn(e,t),o!=null&&r.push(ir(e,o,s))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rl(e,t,n,r,s){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,d=l.alternate,c=l.stateNode;if(d!==null&&d===r)break;l.tag===5&&c!==null&&(l=c,s?(d=Kn(n,o),d!=null&&a.unshift(ir(n,d,l))):s||(d=Kn(n,o),d!=null&&a.push(ir(n,d,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Bp=/\r\n?/g,Mp=/\u0000|\uFFFD/g;function il(e){return(typeof e=="string"?e:""+e).replace(Bp,`
`).replace(Mp,"")}function Br(e,t,n){if(t=il(t),il(e)!==t&&n)throw Error(k(425))}function ai(){}var Vs=null,Qs=null;function qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xs=typeof setTimeout=="function"?setTimeout:void 0,Lp=typeof clearTimeout=="function"?clearTimeout:void 0,sl=typeof Promise=="function"?Promise:void 0,Fp=typeof queueMicrotask=="function"?queueMicrotask:typeof sl<"u"?function(e){return sl.resolve(null).then(e).catch(_p)}:Xs;function _p(e){setTimeout(function(){throw e})}function ls(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);er(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ol(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),De="__reactFiber$"+kn,sr="__reactProps$"+kn,Ke="__reactContainer$"+kn,Gs="__reactEvents$"+kn,Op="__reactListeners$"+kn,Ap="__reactHandles$"+kn;function Rt(e){var t=e[De];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[De]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ol(e);e!==null;){if(n=e[De])return n;e=ol(e)}return t}e=n,n=e.parentNode}return null}function yr(e){return e=e[De]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Pi(e){return e[sr]||null}var Ks=[],Kt=-1;function jt(e){return{current:e}}function A(e){0>Kt||(e.current=Ks[Kt],Ks[Kt]=null,Kt--)}function _(e,t){Kt++,Ks[Kt]=e.current,e.current=t}var wt={},ae=jt(wt),he=jt(!1),Lt=wt;function fn(e,t){var n=e.type.contextTypes;if(!n)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ge(e){return e=e.childContextTypes,e!=null}function li(){A(he),A(ae)}function al(e,t,n){if(ae.current!==wt)throw Error(k(168));_(ae,t),_(he,n)}function dc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(k(108,jf(e)||"Unknown",s));return H({},n,r)}function di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,Lt=ae.current,_(ae,e),_(he,he.current),!0}function ll(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=dc(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,A(he),A(ae),_(ae,e)):A(he),_(he,n)}var Ye=null,Ii=!1,ds=!1;function cc(e){Ye===null?Ye=[e]:Ye.push(e)}function Wp(e){Ii=!0,cc(e)}function St(){if(!ds&&Ye!==null){ds=!0;var e=0,t=F;try{var n=Ye;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,Ii=!1}catch(s){throw Ye!==null&&(Ye=Ye.slice(e+1)),Ld(_o,St),s}finally{F=t,ds=!1}}return null}var Zt=[],Jt=0,ci=null,ui=0,Se=[],Ce=0,Ft=null,Qe=1,qe="";function Nt(e,t){Zt[Jt++]=ui,Zt[Jt++]=ci,ci=e,ui=t}function uc(e,t,n){Se[Ce++]=Qe,Se[Ce++]=qe,Se[Ce++]=Ft,Ft=e;var r=Qe;e=qe;var s=32-Le(r)-1;r&=~(1<<s),n+=1;var o=32-Le(t)+s;if(30<o){var a=s-s%5;o=(r&(1<<a)-1).toString(32),r>>=a,s-=a,Qe=1<<32-Le(t)+s|n<<s|r,qe=o+e}else Qe=1<<o|n<<s|r,qe=e}function Vo(e){e.return!==null&&(Nt(e,1),uc(e,1,0))}function Qo(e){for(;e===ci;)ci=Zt[--Jt],Zt[Jt]=null,ui=Zt[--Jt],Zt[Jt]=null;for(;e===Ft;)Ft=Se[--Ce],Se[Ce]=null,qe=Se[--Ce],Se[Ce]=null,Qe=Se[--Ce],Se[Ce]=null}var ve=null,ye=null,D=!1,Me=null;function fc(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ye=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:Qe,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ye=null,!0):!1;default:return!1}}function Zs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Js(e){if(D){var t=ye;if(t){var n=t;if(!dl(e,t)){if(Zs(e))throw Error(k(418));t=ht(n.nextSibling);var r=ve;t&&dl(e,t)?fc(r,n):(e.flags=e.flags&-4097|2,D=!1,ve=e)}}else{if(Zs(e))throw Error(k(418));e.flags=e.flags&-4097|2,D=!1,ve=e}}}function cl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function Mr(e){if(e!==ve)return!1;if(!D)return cl(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qs(e.type,e.memoizedProps)),t&&(t=ye)){if(Zs(e))throw pc(),Error(k(418));for(;t;)fc(e,t),t=ht(t.nextSibling)}if(cl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=ve?ht(e.stateNode.nextSibling):null;return!0}function pc(){for(var e=ye;e;)e=ht(e.nextSibling)}function pn(){ye=ve=null,D=!1}function qo(e){Me===null?Me=[e]:Me.push(e)}var Dp=et.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var s=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=s.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Lr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ul(e){var t=e._init;return t(e._payload)}function hc(e){function t(f,u){if(e){var h=f.deletions;h===null?(f.deletions=[u],f.flags|=16):h.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function s(f,u){return f=yt(f,u),f.index=0,f.sibling=null,f}function o(f,u,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<u?(f.flags|=2,u):h):(f.flags|=2,u)):(f.flags|=1048576,u)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,u,h,b){return u===null||u.tag!==6?(u=xs(h,f.mode,b),u.return=f,u):(u=s(u,h),u.return=f,u)}function d(f,u,h,b){var S=h.type;return S===Vt?g(f,u,h.props.children,b,h.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nt&&ul(S)===u.type)?(b=s(u,h.props),b.ref=Tn(f,u,h),b.return=f,b):(b=Kr(h.type,h.key,h.props,null,f.mode,b),b.ref=Tn(f,u,h),b.return=f,b)}function c(f,u,h,b){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=ms(h,f.mode,b),u.return=f,u):(u=s(u,h.children||[]),u.return=f,u)}function g(f,u,h,b,S){return u===null||u.tag!==7?(u=Bt(h,f.mode,b,S),u.return=f,u):(u=s(u,h),u.return=f,u)}function p(f,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=xs(""+u,f.mode,h),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Sr:return h=Kr(u.type,u.key,u.props,null,f.mode,h),h.ref=Tn(f,null,u),h.return=f,h;case Yt:return u=ms(u,f.mode,h),u.return=f,u;case nt:var b=u._init;return p(f,b(u._payload),h)}if(_n(u)||Nn(u))return u=Bt(u,f.mode,h,null),u.return=f,u;Lr(f,u)}return null}function x(f,u,h,b){var S=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(f,u,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Sr:return h.key===S?d(f,u,h,b):null;case Yt:return h.key===S?c(f,u,h,b):null;case nt:return S=h._init,x(f,u,S(h._payload),b)}if(_n(h)||Nn(h))return S!==null?null:g(f,u,h,b,null);Lr(f,h)}return null}function m(f,u,h,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(h)||null,l(u,f,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Sr:return f=f.get(b.key===null?h:b.key)||null,d(u,f,b,S);case Yt:return f=f.get(b.key===null?h:b.key)||null,c(u,f,b,S);case nt:var E=b._init;return m(f,u,h,E(b._payload),S)}if(_n(b)||Nn(b))return f=f.get(h)||null,g(u,f,b,S,null);Lr(u,b)}return null}function v(f,u,h,b){for(var S=null,E=null,R=u,P=u=0,W=null;R!==null&&P<h.length;P++){R.index>P?(W=R,R=null):W=R.sibling;var T=x(f,R,h[P],b);if(T===null){R===null&&(R=W);break}e&&R&&T.alternate===null&&t(f,R),u=o(T,u,P),E===null?S=T:E.sibling=T,E=T,R=W}if(P===h.length)return n(f,R),D&&Nt(f,P),S;if(R===null){for(;P<h.length;P++)R=p(f,h[P],b),R!==null&&(u=o(R,u,P),E===null?S=R:E.sibling=R,E=R);return D&&Nt(f,P),S}for(R=r(f,R);P<h.length;P++)W=m(R,f,P,h[P],b),W!==null&&(e&&W.alternate!==null&&R.delete(W.key===null?P:W.key),u=o(W,u,P),E===null?S=W:E.sibling=W,E=W);return e&&R.forEach(function(Pe){return t(f,Pe)}),D&&Nt(f,P),S}function w(f,u,h,b){var S=Nn(h);if(typeof S!="function")throw Error(k(150));if(h=S.call(h),h==null)throw Error(k(151));for(var E=S=null,R=u,P=u=0,W=null,T=h.next();R!==null&&!T.done;P++,T=h.next()){R.index>P?(W=R,R=null):W=R.sibling;var Pe=x(f,R,T.value,b);if(Pe===null){R===null&&(R=W);break}e&&R&&Pe.alternate===null&&t(f,R),u=o(Pe,u,P),E===null?S=Pe:E.sibling=Pe,E=Pe,R=W}if(T.done)return n(f,R),D&&Nt(f,P),S;if(R===null){for(;!T.done;P++,T=h.next())T=p(f,T.value,b),T!==null&&(u=o(T,u,P),E===null?S=T:E.sibling=T,E=T);return D&&Nt(f,P),S}for(R=r(f,R);!T.done;P++,T=h.next())T=m(R,f,P,T.value,b),T!==null&&(e&&T.alternate!==null&&R.delete(T.key===null?P:T.key),u=o(T,u,P),E===null?S=T:E.sibling=T,E=T);return e&&R.forEach(function(Cn){return t(f,Cn)}),D&&Nt(f,P),S}function j(f,u,h,b){if(typeof h=="object"&&h!==null&&h.type===Vt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Sr:e:{for(var S=h.key,E=u;E!==null;){if(E.key===S){if(S=h.type,S===Vt){if(E.tag===7){n(f,E.sibling),u=s(E,h.props.children),u.return=f,f=u;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nt&&ul(S)===E.type){n(f,E.sibling),u=s(E,h.props),u.ref=Tn(f,E,h),u.return=f,f=u;break e}n(f,E);break}else t(f,E);E=E.sibling}h.type===Vt?(u=Bt(h.props.children,f.mode,b,h.key),u.return=f,f=u):(b=Kr(h.type,h.key,h.props,null,f.mode,b),b.ref=Tn(f,u,h),b.return=f,f=b)}return a(f);case Yt:e:{for(E=h.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){n(f,u.sibling),u=s(u,h.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=ms(h,f.mode,b),u.return=f,f=u}return a(f);case nt:return E=h._init,j(f,u,E(h._payload),b)}if(_n(h))return v(f,u,h,b);if(Nn(h))return w(f,u,h,b);Lr(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(n(f,u.sibling),u=s(u,h),u.return=f,f=u):(n(f,u),u=xs(h,f.mode,b),u.return=f,f=u),a(f)):n(f,u)}return j}var hn=hc(!0),gc=hc(!1),fi=jt(null),pi=null,en=null,Xo=null;function Go(){Xo=en=pi=null}function Ko(e){var t=fi.current;A(fi),e._currentValue=t}function eo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){pi=e,Xo=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(Xo!==e)if(e={context:e,memoizedValue:t,next:null},en===null){if(pi===null)throw Error(k(308));en=e,pi.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return t}var Pt=null;function Zo(e){Pt===null?Pt=[e]:Pt.push(e)}function xc(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Zo(t)):(n.next=s.next,s.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function Jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Ze(e,n)}return s=r.interleaved,s===null?(t.next=t,Zo(r)):(t.next=s.next,s.next=t),r.interleaved=t,Ze(e,n)}function Yr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oo(e,n)}}function fl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?s=o=t:o=o.next=t}else s=o=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hi(e,t,n,r){var s=e.updateQueue;rt=!1;var o=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var d=l,c=d.next;d.next=null,a===null?o=c:a.next=c,a=d;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==a&&(l===null?g.firstBaseUpdate=c:l.next=c,g.lastBaseUpdate=d))}if(o!==null){var p=s.baseState;a=0,g=c=d=null,l=o;do{var x=l.lane,m=l.eventTime;if((r&x)===x){g!==null&&(g=g.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(x=t,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){p=v.call(m,p,x);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,x=typeof v=="function"?v.call(m,p,x):v,x==null)break e;p=H({},p,x);break e;case 2:rt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,x=s.effects,x===null?s.effects=[l]:x.push(l))}else m={eventTime:m,lane:x,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(c=g=m,d=p):g=g.next=m,a|=x;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;x=l,l=x.next,x.next=null,s.lastBaseUpdate=x,s.shared.pending=null}}while(!0);if(g===null&&(d=p),s.baseState=d,s.firstBaseUpdate=c,s.lastBaseUpdate=g,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);Ot|=a,e.lanes=a,e.memoizedState=p}}function pl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(k(191,s));s.call(r)}}}var vr={},$e=jt(vr),or=jt(vr),ar=jt(vr);function It(e){if(e===vr)throw Error(k(174));return e}function ea(e,t){switch(_(ar,t),_(or,e),_($e,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ms(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ms(t,e)}A($e),_($e,t)}function gn(){A($e),A(or),A(ar)}function yc(e){It(ar.current);var t=It($e.current),n=Ms(t,e.type);t!==n&&(_(or,e),_($e,n))}function ta(e){or.current===e&&(A($e),A(or))}var U=jt(0);function gi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cs=[];function na(){for(var e=0;e<cs.length;e++)cs[e]._workInProgressVersionPrimary=null;cs.length=0}var Vr=et.ReactCurrentDispatcher,us=et.ReactCurrentBatchConfig,_t=0,$=null,G=null,J=null,xi=!1,Yn=!1,lr=0,Up=0;function ie(){throw Error(k(321))}function ra(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_e(e[n],t[n]))return!1;return!0}function ia(e,t,n,r,s,o){if(_t=o,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vr.current=e===null||e.memoizedState===null?Vp:Qp,e=n(r,s),Yn){o=0;do{if(Yn=!1,lr=0,25<=o)throw Error(k(301));o+=1,J=G=null,t.updateQueue=null,Vr.current=qp,e=n(r,s)}while(Yn)}if(Vr.current=mi,t=G!==null&&G.next!==null,_t=0,J=G=$=null,xi=!1,t)throw Error(k(300));return e}function sa(){var e=lr!==0;return lr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?$.memoizedState=J=e:J=J.next=e,J}function Re(){if(G===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?$.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(k(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?$.memoizedState=J=e:J=J.next=e}return J}function dr(e,t){return typeof t=="function"?t(e):t}function fs(e){var t=Re(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=G,s=r.baseQueue,o=n.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}r.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,r=r.baseState;var l=a=null,d=null,c=o;do{var g=c.lane;if((_t&g)===g)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(l=d=p,a=r):d=d.next=p,$.lanes|=g,Ot|=g}c=c.next}while(c!==null&&c!==o);d===null?a=r:d.next=l,_e(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do o=s.lane,$.lanes|=o,Ot|=o,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ps(e){var t=Re(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,o=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do o=e(o,a.action),a=a.next;while(a!==s);_e(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function vc(){}function bc(e,t){var n=$,r=Re(),s=t(),o=!_e(r.memoizedState,s);if(o&&(r.memoizedState=s,pe=!0),r=r.queue,oa(jc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,cr(9,kc.bind(null,n,r,s,t),void 0,null),ee===null)throw Error(k(349));_t&30||wc(n,t,s)}return s}function wc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kc(e,t,n,r){t.value=n,t.getSnapshot=r,Sc(t)&&Cc(e)}function jc(e,t,n){return n(function(){Sc(t)&&Cc(e)})}function Sc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_e(e,n)}catch{return!0}}function Cc(e){var t=Ze(e,1);t!==null&&Fe(t,e,1,-1)}function hl(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=Yp.bind(null,$,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zc(){return Re().memoizedState}function Qr(e,t,n,r){var s=We();$.flags|=e,s.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function Ti(e,t,n,r){var s=Re();r=r===void 0?null:r;var o=void 0;if(G!==null){var a=G.memoizedState;if(o=a.destroy,r!==null&&ra(r,a.deps)){s.memoizedState=cr(t,n,o,r);return}}$.flags|=e,s.memoizedState=cr(1|t,n,o,r)}function gl(e,t){return Qr(8390656,8,e,t)}function oa(e,t){return Ti(2048,8,e,t)}function Nc(e,t){return Ti(4,2,e,t)}function Ec(e,t){return Ti(4,4,e,t)}function Rc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pc(e,t,n){return n=n!=null?n.concat([e]):null,Ti(4,4,Rc.bind(null,t,e),n)}function aa(){}function Ic(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ra(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tc(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ra(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bc(e,t,n){return _t&21?(_e(n,t)||(n=Od(),$.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function $p(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=us.transition;us.transition={};try{e(!1),t()}finally{F=n,us.transition=r}}function Mc(){return Re().memoizedState}function Hp(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lc(e))Fc(t,n);else if(n=xc(e,t,n,r),n!==null){var s=de();Fe(n,e,r,s),_c(n,t,r)}}function Yp(e,t,n){var r=mt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lc(e))Fc(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(s.hasEagerState=!0,s.eagerState=l,_e(l,a)){var d=t.interleaved;d===null?(s.next=s,Zo(t)):(s.next=d.next,d.next=s),t.interleaved=s;return}}catch{}finally{}n=xc(e,t,s,r),n!==null&&(s=de(),Fe(n,e,r,s),_c(n,t,r))}}function Lc(e){var t=e.alternate;return e===$||t!==null&&t===$}function Fc(e,t){Yn=xi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _c(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oo(e,n)}}var mi={readContext:Ee,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Vp={readContext:Ee,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:gl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qr(4194308,4,Rc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qr(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hp.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:hl,useDebugValue:aa,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=hl(!1),t=e[0];return e=$p.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,s=We();if(D){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ee===null)throw Error(k(349));_t&30||wc(r,t,n)}s.memoizedState=n;var o={value:n,getSnapshot:t};return s.queue=o,gl(jc.bind(null,r,o,e),[e]),r.flags|=2048,cr(9,kc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=We(),t=ee.identifierPrefix;if(D){var n=qe,r=Qe;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Up++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qp={readContext:Ee,useCallback:Ic,useContext:Ee,useEffect:oa,useImperativeHandle:Pc,useInsertionEffect:Nc,useLayoutEffect:Ec,useMemo:Tc,useReducer:fs,useRef:zc,useState:function(){return fs(dr)},useDebugValue:aa,useDeferredValue:function(e){var t=Re();return Bc(t,G.memoizedState,e)},useTransition:function(){var e=fs(dr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:bc,useId:Mc,unstable_isNewReconciler:!1},qp={readContext:Ee,useCallback:Ic,useContext:Ee,useEffect:oa,useImperativeHandle:Pc,useInsertionEffect:Nc,useLayoutEffect:Ec,useMemo:Tc,useReducer:ps,useRef:zc,useState:function(){return ps(dr)},useDebugValue:aa,useDeferredValue:function(e){var t=Re();return G===null?t.memoizedState=e:Bc(t,G.memoizedState,e)},useTransition:function(){var e=ps(dr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:bc,useId:Mc,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function to(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bi={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),s=mt(e),o=Xe(r,s);o.payload=t,n!=null&&(o.callback=n),t=gt(e,o,s),t!==null&&(Fe(t,e,s,r),Yr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),s=mt(e),o=Xe(r,s);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gt(e,o,s),t!==null&&(Fe(t,e,s,r),Yr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=mt(e),s=Xe(n,r);s.tag=2,t!=null&&(s.callback=t),t=gt(e,s,r),t!==null&&(Fe(t,e,r,n),Yr(t,e,r))}};function xl(e,t,n,r,s,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!nr(n,r)||!nr(s,o):!0}function Oc(e,t,n){var r=!1,s=wt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ee(o):(s=ge(t)?Lt:ae.current,r=t.contextTypes,o=(r=r!=null)?fn(e,s):wt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function ml(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bi.enqueueReplaceState(t,t.state,null)}function no(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Jo(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=Ee(o):(o=ge(t)?Lt:ae.current,s.context=fn(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(to(e,t,o,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Bi.enqueueReplaceState(s,s.state,null),hi(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=kf(r),r=r.return;while(r);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function hs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ro(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xp=typeof WeakMap=="function"?WeakMap:Map;function Ac(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vi||(vi=!0,ho=r),ro(e,t)},n}function Wc(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){ro(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ro(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function yl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xp;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=d0.bind(null,e,t,n),t.then(e,e))}function vl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bl(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var Gp=et.ReactCurrentOwner,pe=!1;function le(e,t,n,r){t.child=e===null?gc(t,null,n,r):hn(t,e.child,n,r)}function wl(e,t,n,r,s){n=n.render;var o=t.ref;return ln(t,s),r=ia(e,t,n,r,o,s),n=sa(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Je(e,t,s)):(D&&n&&Vo(t),t.flags|=1,le(e,t,r,s),t.child)}function kl(e,t,n,r,s){if(e===null){var o=n.type;return typeof o=="function"&&!ga(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Dc(e,t,o,r,s)):(e=Kr(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:nr,n(a,r)&&e.ref===t.ref)return Je(e,t,s)}return t.flags|=1,e=yt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Dc(e,t,n,r,s){if(e!==null){var o=e.memoizedProps;if(nr(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&s)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Je(e,t,s)}return io(e,t,n,r,s)}function Uc(e,t,n){var r=t.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(nn,me),me|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(nn,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_(nn,me),me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,_(nn,me),me|=r;return le(e,t,s,n),t.child}function $c(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function io(e,t,n,r,s){var o=ge(n)?Lt:ae.current;return o=fn(t,o),ln(t,s),n=ia(e,t,n,r,o,s),r=sa(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Je(e,t,s)):(D&&r&&Vo(t),t.flags|=1,le(e,t,n,s),t.child)}function jl(e,t,n,r,s){if(ge(n)){var o=!0;di(t)}else o=!1;if(ln(t,s),t.stateNode===null)qr(e,t),Oc(t,n,r),no(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var d=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=ge(n)?Lt:ae.current,c=fn(t,c));var g=n.getDerivedStateFromProps,p=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||d!==c)&&ml(t,a,r,c),rt=!1;var x=t.memoizedState;a.state=x,hi(t,r,a,s),d=t.memoizedState,l!==r||x!==d||he.current||rt?(typeof g=="function"&&(to(t,n,g,r),d=t.memoizedState),(l=rt||xl(t,n,l,r,x,d,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),a.props=r,a.state=d,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,mc(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Te(t.type,l),a.props=c,p=t.pendingProps,x=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ee(d):(d=ge(n)?Lt:ae.current,d=fn(t,d));var m=n.getDerivedStateFromProps;(g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||x!==d)&&ml(t,a,r,d),rt=!1,x=t.memoizedState,a.state=x,hi(t,r,a,s);var v=t.memoizedState;l!==p||x!==v||he.current||rt?(typeof m=="function"&&(to(t,n,m,r),v=t.memoizedState),(c=rt||xl(t,n,c,r,x,v,d)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,d)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=d,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return so(e,t,n,r,o,s)}function so(e,t,n,r,s,o){$c(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&ll(t,n,!1),Je(e,t,o);r=t.stateNode,Gp.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=hn(t,e.child,null,o),t.child=hn(t,null,l,o)):le(e,t,l,o),t.memoizedState=r.state,s&&ll(t,n,!0),t.child}function Hc(e){var t=e.stateNode;t.pendingContext?al(e,t.pendingContext,t.pendingContext!==t.context):t.context&&al(e,t.context,!1),ea(e,t.containerInfo)}function Sl(e,t,n,r,s){return pn(),qo(s),t.flags|=256,le(e,t,n,r),t.child}var oo={dehydrated:null,treeContext:null,retryLane:0};function ao(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yc(e,t,n){var r=t.pendingProps,s=U.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),_(U,s&1),e===null)return Js(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Fi(a,r,0,null),e=Bt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ao(n),t.memoizedState=oo,e):la(t,a));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Kp(e,t,a,r,l,s,n);if(o){o=r.fallback,a=t.mode,s=e.child,l=s.sibling;var d={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=yt(s,d),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?o=yt(l,o):(o=Bt(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ao(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=oo,r}return o=e.child,e=o.sibling,r=yt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function la(e,t){return t=Fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fr(e,t,n,r){return r!==null&&qo(r),hn(t,e.child,null,n),e=la(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kp(e,t,n,r,s,o,a){if(n)return t.flags&256?(t.flags&=-257,r=hs(Error(k(422))),Fr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,s=t.mode,r=Fi({mode:"visible",children:r.children},s,0,null),o=Bt(o,s,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&hn(t,e.child,null,a),t.child.memoizedState=ao(a),t.memoizedState=oo,o);if(!(t.mode&1))return Fr(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(k(419)),r=hs(o,r,void 0),Fr(e,t,a,r)}if(l=(a&e.childLanes)!==0,pe||l){if(r=ee,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Ze(e,s),Fe(r,e,s,-1))}return ha(),r=hs(Error(k(421))),Fr(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=c0.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,ye=ht(s.nextSibling),ve=t,D=!0,Me=null,e!==null&&(Se[Ce++]=Qe,Se[Ce++]=qe,Se[Ce++]=Ft,Qe=e.id,qe=e.overflow,Ft=t),t=la(t,r.children),t.flags|=4096,t)}function Cl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),eo(e.return,t,n)}function gs(e,t,n,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=s)}function Vc(e,t,n){var r=t.pendingProps,s=r.revealOrder,o=r.tail;if(le(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cl(e,n,t);else if(e.tag===19)Cl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_(U,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&gi(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),gs(t,!1,s,n,o);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&gi(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}gs(t,!0,n,null,o);break;case"together":gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zp(e,t,n){switch(t.tag){case 3:Hc(t),pn();break;case 5:yc(t);break;case 1:ge(t.type)&&di(t);break;case 4:ea(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;_(fi,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Yc(e,t,n):(_(U,U.current&1),e=Je(e,t,n),e!==null?e.sibling:null);_(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Uc(e,t,n)}return Je(e,t,n)}var Qc,lo,qc,Xc;Qc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lo=function(){};qc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,It($e.current);var o=null;switch(n){case"input":s=Ps(e,s),r=Ps(e,r),o=[];break;case"select":s=H({},s,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":s=Bs(e,s),r=Bs(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ai)}Ls(n,r);var a;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var d=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&d!==l&&(d!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&l[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(o||(o=[]),o.push(c,n)),n=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(o=o||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xn.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&O("scroll",e),o||l===d||(o=[])):(o=o||[]).push(c,d))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Xc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bn(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jp(e,t,n){var r=t.pendingProps;switch(Qo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ge(t.type)&&li(),se(t),null;case 3:return r=t.stateNode,gn(),A(he),A(ae),na(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(mo(Me),Me=null))),lo(e,t),se(t),null;case 5:ta(t);var s=It(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)qc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return se(t),null}if(e=It($e.current),Mr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[De]=t,r[sr]=o,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(s=0;s<An.length;s++)O(An[s],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Ma(r,o),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},O("invalid",r);break;case"textarea":Fa(r,o),O("invalid",r)}Ls(n,o),s=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Br(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Br(r.textContent,l,e),s=["children",""+l]):Xn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&O("scroll",r)}switch(n){case"input":Cr(r),La(r,o,!0);break;case"textarea":Cr(r),_a(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ai)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[De]=t,e[sr]=r,Qc(e,t,!1,!1),t.stateNode=e;e:{switch(a=Fs(n,r),n){case"dialog":O("cancel",e),O("close",e),s=r;break;case"iframe":case"object":case"embed":O("load",e),s=r;break;case"video":case"audio":for(s=0;s<An.length;s++)O(An[s],e);s=r;break;case"source":O("error",e),s=r;break;case"img":case"image":case"link":O("error",e),O("load",e),s=r;break;case"details":O("toggle",e),s=r;break;case"input":Ma(e,r),s=Ps(e,r),O("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=H({},r,{value:void 0}),O("invalid",e);break;case"textarea":Fa(e,r),s=Bs(e,r),O("invalid",e);break;default:s=r}Ls(n,s),l=s;for(o in l)if(l.hasOwnProperty(o)){var d=l[o];o==="style"?zd(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Sd(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Gn(e,d):typeof d=="number"&&Gn(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xn.hasOwnProperty(o)?d!=null&&o==="onScroll"&&O("scroll",e):d!=null&&To(e,o,d,a))}switch(n){case"input":Cr(e),La(e,r,!1);break;case"textarea":Cr(e),_a(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?rn(e,!!r.multiple,o,!1):r.defaultValue!=null&&rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Xc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=It(ar.current),It($e.current),Mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[De]=t,(o=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[De]=t,t.stateNode=r}return se(t),null;case 13:if(A(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&ye!==null&&t.mode&1&&!(t.flags&128))pc(),pn(),t.flags|=98560,o=!1;else if(o=Mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[De]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Me!==null&&(mo(Me),Me=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?K===0&&(K=3):ha())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return gn(),lo(e,t),e===null&&rr(t.stateNode.containerInfo),se(t),null;case 10:return Ko(t.type._context),se(t),null;case 17:return ge(t.type)&&li(),se(t),null;case 19:if(A(U),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Bn(o,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=gi(e),a!==null){for(t.flags|=128,Bn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>mn&&(t.flags|=128,r=!0,Bn(o,!1),t.lanes=4194304)}else{if(!r)if(e=gi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!D)return se(t),null}else 2*Q()-o.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,Bn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=U.current,_(U,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return pa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function e0(e,t){switch(Qo(t),t.tag){case 1:return ge(t.type)&&li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),A(he),A(ae),na(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ta(t),null;case 13:if(A(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(U),null;case 4:return gn(),null;case 10:return Ko(t.type._context),null;case 22:case 23:return pa(),null;case 24:return null;default:return null}}var _r=!1,oe=!1,t0=typeof WeakSet=="function"?WeakSet:Set,C=null;function tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function co(e,t,n){try{n()}catch(r){Y(e,t,r)}}var zl=!1;function n0(e,t){if(Vs=ii,e=ec(),Yo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,d=-1,c=0,g=0,p=e,x=null;t:for(;;){for(var m;p!==n||s!==0&&p.nodeType!==3||(l=a+s),p!==o||r!==0&&p.nodeType!==3||(d=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)x=p,p=m;for(;;){if(p===e)break t;if(x===n&&++c===s&&(l=a),x===o&&++g===r&&(d=a),(m=p.nextSibling)!==null)break;p=x,x=p.parentNode}p=m}n=l===-1||d===-1?null:{start:l,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qs={focusedElem:e,selectionRange:n},ii=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,j=v.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Te(t.type,w),j);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(b){Y(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return v=zl,zl=!1,v}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&co(t,n,o)}s=s.next}while(s!==r)}}function Mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function uo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gc(e){var t=e.alternate;t!==null&&(e.alternate=null,Gc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[De],delete t[sr],delete t[Gs],delete t[Op],delete t[Ap])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kc(e){return e.tag===5||e.tag===3||e.tag===4}function Nl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ai));else if(r!==4&&(e=e.child,e!==null))for(fo(e,t,n),e=e.sibling;e!==null;)fo(e,t,n),e=e.sibling}function po(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(po(e,t,n),e=e.sibling;e!==null;)po(e,t,n),e=e.sibling}var te=null,Be=!1;function tt(e,t,n){for(n=n.child;n!==null;)Zc(e,t,n),n=n.sibling}function Zc(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 5:oe||tn(n,t);case 6:var r=te,s=Be;te=null,tt(e,t,n),te=r,Be=s,te!==null&&(Be?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Be?(e=te,n=n.stateNode,e.nodeType===8?ls(e.parentNode,n):e.nodeType===1&&ls(e,n),er(e)):ls(te,n.stateNode));break;case 4:r=te,s=Be,te=n.stateNode.containerInfo,Be=!0,tt(e,t,n),te=r,Be=s;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&co(n,t,a),s=s.next}while(s!==r)}tt(e,t,n);break;case 1:if(!oe&&(tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Y(n,t,l)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,tt(e,t,n),oe=r):tt(e,t,n);break;default:tt(e,t,n)}}function El(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new t0),t.forEach(function(r){var s=u0.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ie(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:te=l.stateNode,Be=!1;break e;case 3:te=l.stateNode.containerInfo,Be=!0;break e;case 4:te=l.stateNode.containerInfo,Be=!0;break e}l=l.return}if(te===null)throw Error(k(160));Zc(o,a,s),te=null,Be=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(c){Y(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jc(t,e),t=t.sibling}function Jc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),Ae(e),r&4){try{Vn(3,e,e.return),Mi(3,e)}catch(w){Y(e,e.return,w)}try{Vn(5,e,e.return)}catch(w){Y(e,e.return,w)}}break;case 1:Ie(t,e),Ae(e),r&512&&n!==null&&tn(n,n.return);break;case 5:if(Ie(t,e),Ae(e),r&512&&n!==null&&tn(n,n.return),e.flags&32){var s=e.stateNode;try{Gn(s,"")}catch(w){Y(e,e.return,w)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&wd(s,o),Fs(l,a);var c=Fs(l,o);for(a=0;a<d.length;a+=2){var g=d[a],p=d[a+1];g==="style"?zd(s,p):g==="dangerouslySetInnerHTML"?Sd(s,p):g==="children"?Gn(s,p):To(s,g,p,c)}switch(l){case"input":Is(s,o);break;case"textarea":kd(s,o);break;case"select":var x=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?rn(s,!!o.multiple,m,!1):x!==!!o.multiple&&(o.defaultValue!=null?rn(s,!!o.multiple,o.defaultValue,!0):rn(s,!!o.multiple,o.multiple?[]:"",!1))}s[sr]=o}catch(w){Y(e,e.return,w)}}break;case 6:if(Ie(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(k(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(w){Y(e,e.return,w)}}break;case 3:if(Ie(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{er(t.containerInfo)}catch(w){Y(e,e.return,w)}break;case 4:Ie(t,e),Ae(e);break;case 13:Ie(t,e),Ae(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(ua=Q())),r&4&&El(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||g,Ie(t,e),oe=c):Ie(t,e),Ae(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(C=e,g=e.child;g!==null;){for(p=C=g;C!==null;){switch(x=C,m=x.child,x.tag){case 0:case 11:case 14:case 15:Vn(4,x,x.return);break;case 1:tn(x,x.return);var v=x.stateNode;if(typeof v.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){Y(r,n,w)}}break;case 5:tn(x,x.return);break;case 22:if(x.memoizedState!==null){Pl(p);continue}}m!==null?(m.return=x,C=m):Pl(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{s=p.stateNode,c?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,d=p.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=Cd("display",a))}catch(w){Y(e,e.return,w)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){Y(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ie(t,e),Ae(e),r&4&&El(e);break;case 21:break;default:Ie(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Gn(s,""),r.flags&=-33);var o=Nl(e);po(e,o,s);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Nl(e);fo(e,l,a);break;default:throw Error(k(161))}}catch(d){Y(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function r0(e,t,n){C=e,eu(e)}function eu(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var s=C,o=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||_r;if(!a){var l=s.alternate,d=l!==null&&l.memoizedState!==null||oe;l=_r;var c=oe;if(_r=a,(oe=d)&&!c)for(C=s;C!==null;)a=C,d=a.child,a.tag===22&&a.memoizedState!==null?Il(s):d!==null?(d.return=a,C=d):Il(s);for(;o!==null;)C=o,eu(o),o=o.sibling;C=s,_r=l,oe=c}Rl(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,C=o):Rl(e)}}function Rl(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&pl(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pl(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&er(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}oe||t.flags&512&&uo(t)}catch(x){Y(t,t.return,x)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Pl(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Il(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mi(4,t)}catch(d){Y(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(d){Y(t,s,d)}}var o=t.return;try{uo(t)}catch(d){Y(t,o,d)}break;case 5:var a=t.return;try{uo(t)}catch(d){Y(t,a,d)}}}catch(d){Y(t,t.return,d)}if(t===e){C=null;break}var l=t.sibling;if(l!==null){l.return=t.return,C=l;break}C=t.return}}var i0=Math.ceil,yi=et.ReactCurrentDispatcher,da=et.ReactCurrentOwner,Ne=et.ReactCurrentBatchConfig,L=0,ee=null,q=null,ne=0,me=0,nn=jt(0),K=0,ur=null,Ot=0,Li=0,ca=0,Qn=null,fe=null,ua=0,mn=1/0,He=null,vi=!1,ho=null,xt=null,Or=!1,at=null,bi=0,qn=0,go=null,Xr=-1,Gr=0;function de(){return L&6?Q():Xr!==-1?Xr:Xr=Q()}function mt(e){return e.mode&1?L&2&&ne!==0?ne&-ne:Dp.transition!==null?(Gr===0&&(Gr=Od()),Gr):(e=F,e!==0||(e=window.event,e=e===void 0?16:Yd(e.type)),e):1}function Fe(e,t,n,r){if(50<qn)throw qn=0,go=null,Error(k(185));xr(e,n,r),(!(L&2)||e!==ee)&&(e===ee&&(!(L&2)&&(Li|=n),K===4&&st(e,ne)),xe(e,r),n===1&&L===0&&!(t.mode&1)&&(mn=Q()+500,Ii&&St()))}function xe(e,t){var n=e.callbackNode;Df(e,t);var r=ri(e,e===ee?ne:0);if(r===0)n!==null&&Wa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wa(n),t===1)e.tag===0?Wp(Tl.bind(null,e)):cc(Tl.bind(null,e)),Fp(function(){!(L&6)&&St()}),n=null;else{switch(Ad(r)){case 1:n=_o;break;case 4:n=Fd;break;case 16:n=ni;break;case 536870912:n=_d;break;default:n=ni}n=lu(n,tu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tu(e,t){if(Xr=-1,Gr=0,L&6)throw Error(k(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var r=ri(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wi(e,r);else{t=r;var s=L;L|=2;var o=ru();(ee!==e||ne!==t)&&(He=null,mn=Q()+500,Tt(e,t));do try{a0();break}catch(l){nu(e,l)}while(!0);Go(),yi.current=o,L=s,q!==null?t=0:(ee=null,ne=0,t=K)}if(t!==0){if(t===2&&(s=Ds(e),s!==0&&(r=s,t=xo(e,s))),t===1)throw n=ur,Tt(e,0),st(e,r),xe(e,Q()),n;if(t===6)st(e,r);else{if(s=e.current.alternate,!(r&30)&&!s0(s)&&(t=wi(e,r),t===2&&(o=Ds(e),o!==0&&(r=o,t=xo(e,o))),t===1))throw n=ur,Tt(e,0),st(e,r),xe(e,Q()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Et(e,fe,He);break;case 3:if(st(e,r),(r&130023424)===r&&(t=ua+500-Q(),10<t)){if(ri(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Xs(Et.bind(null,e,fe,He),t);break}Et(e,fe,He);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-Le(r);o=1<<a,a=t[a],a>s&&(s=a),r&=~o}if(r=s,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*i0(r/1960))-r,10<r){e.timeoutHandle=Xs(Et.bind(null,e,fe,He),r);break}Et(e,fe,He);break;case 5:Et(e,fe,He);break;default:throw Error(k(329))}}}return xe(e,Q()),e.callbackNode===n?tu.bind(null,e):null}function xo(e,t){var n=Qn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=wi(e,t),e!==2&&(t=fe,fe=n,t!==null&&mo(t)),e}function mo(e){fe===null?fe=e:fe.push.apply(fe,e)}function s0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],o=s.getSnapshot;s=s.value;try{if(!_e(o(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~ca,t&=~Li,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function Tl(e){if(L&6)throw Error(k(327));dn();var t=ri(e,0);if(!(t&1))return xe(e,Q()),null;var n=wi(e,t);if(e.tag!==0&&n===2){var r=Ds(e);r!==0&&(t=r,n=xo(e,r))}if(n===1)throw n=ur,Tt(e,0),st(e,t),xe(e,Q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,fe,He),xe(e,Q()),null}function fa(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(mn=Q()+500,Ii&&St())}}function At(e){at!==null&&at.tag===0&&!(L&6)&&dn();var t=L;L|=1;var n=Ne.transition,r=F;try{if(Ne.transition=null,F=1,e)return e()}finally{F=r,Ne.transition=n,L=t,!(L&6)&&St()}}function pa(){me=nn.current,A(nn)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lp(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Qo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&li();break;case 3:gn(),A(he),A(ae),na();break;case 5:ta(r);break;case 4:gn();break;case 13:A(U);break;case 19:A(U);break;case 10:Ko(r.type._context);break;case 22:case 23:pa()}n=n.return}if(ee=e,q=e=yt(e.current,null),ne=me=t,K=0,ur=null,ca=Li=Ot=0,fe=Qn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=s,r.next=a}n.pending=r}Pt=null}return e}function nu(e,t){do{var n=q;try{if(Go(),Vr.current=mi,xi){for(var r=$.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}xi=!1}if(_t=0,J=G=$=null,Yn=!1,lr=0,da.current=null,n===null||n.return===null){K=1,ur=t,q=null;break}e:{var o=e,a=n.return,l=n,d=t;if(t=ne,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,g=l,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var x=g.alternate;x?(g.updateQueue=x.updateQueue,g.memoizedState=x.memoizedState,g.lanes=x.lanes):(g.updateQueue=null,g.memoizedState=null)}var m=vl(a);if(m!==null){m.flags&=-257,bl(m,a,l,o,t),m.mode&1&&yl(o,c,t),t=m,d=c;var v=t.updateQueue;if(v===null){var w=new Set;w.add(d),t.updateQueue=w}else v.add(d);break e}else{if(!(t&1)){yl(o,c,t),ha();break e}d=Error(k(426))}}else if(D&&l.mode&1){var j=vl(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),bl(j,a,l,o,t),qo(xn(d,l));break e}}o=d=xn(d,l),K!==4&&(K=2),Qn===null?Qn=[o]:Qn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Ac(o,d,t);fl(o,f);break e;case 1:l=d;var u=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(xt===null||!xt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Wc(o,l,t);fl(o,b);break e}}o=o.return}while(o!==null)}su(n)}catch(S){t=S,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function ru(){var e=yi.current;return yi.current=mi,e===null?mi:e}function ha(){(K===0||K===3||K===2)&&(K=4),ee===null||!(Ot&268435455)&&!(Li&268435455)||st(ee,ne)}function wi(e,t){var n=L;L|=2;var r=ru();(ee!==e||ne!==t)&&(He=null,Tt(e,t));do try{o0();break}catch(s){nu(e,s)}while(!0);if(Go(),L=n,yi.current=r,q!==null)throw Error(k(261));return ee=null,ne=0,K}function o0(){for(;q!==null;)iu(q)}function a0(){for(;q!==null&&!Tf();)iu(q)}function iu(e){var t=au(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?su(e):q=t,da.current=null}function su(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=e0(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,q=null;return}}else if(n=Jp(n,t,me),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);K===0&&(K=5)}function Et(e,t,n){var r=F,s=Ne.transition;try{Ne.transition=null,F=1,l0(e,t,n,r)}finally{Ne.transition=s,F=r}return null}function l0(e,t,n,r){do dn();while(at!==null);if(L&6)throw Error(k(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Uf(e,o),e===ee&&(q=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Or||(Or=!0,lu(ni,function(){return dn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ne.transition,Ne.transition=null;var a=F;F=1;var l=L;L|=4,da.current=null,n0(e,n),Jc(n,e),Ep(Qs),ii=!!Vs,Qs=Vs=null,e.current=n,r0(n),Bf(),L=l,F=a,Ne.transition=o}else e.current=n;if(Or&&(Or=!1,at=e,bi=s),o=e.pendingLanes,o===0&&(xt=null),Ff(n.stateNode),xe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(vi)throw vi=!1,e=ho,ho=null,e;return bi&1&&e.tag!==0&&dn(),o=e.pendingLanes,o&1?e===go?qn++:(qn=0,go=e):qn=0,St(),null}function dn(){if(at!==null){var e=Ad(bi),t=Ne.transition,n=F;try{if(Ne.transition=null,F=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,bi=0,L&6)throw Error(k(331));var s=L;for(L|=4,C=e.current;C!==null;){var o=C,a=o.child;if(C.flags&16){var l=o.deletions;if(l!==null){for(var d=0;d<l.length;d++){var c=l[d];for(C=c;C!==null;){var g=C;switch(g.tag){case 0:case 11:case 15:Vn(8,g,o)}var p=g.child;if(p!==null)p.return=g,C=p;else for(;C!==null;){g=C;var x=g.sibling,m=g.return;if(Gc(g),g===c){C=null;break}if(x!==null){x.return=m,C=x;break}C=m}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}C=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,C=a;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,C=f;break e}C=o.return}}var u=e.current;for(C=u;C!==null;){a=C;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,C=h;else e:for(a=u;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Mi(9,l)}}catch(S){Y(l,l.return,S)}if(l===a){C=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,C=b;break e}C=l.return}}if(L=s,St(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(zi,e)}catch{}r=!0}return r}finally{F=n,Ne.transition=t}}return!1}function Bl(e,t,n){t=xn(n,t),t=Ac(e,t,1),e=gt(e,t,1),t=de(),e!==null&&(xr(e,1,t),xe(e,t))}function Y(e,t,n){if(e.tag===3)Bl(e,e,n);else for(;t!==null;){if(t.tag===3){Bl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=xn(n,e),e=Wc(t,e,1),t=gt(t,e,1),e=de(),t!==null&&(xr(t,1,e),xe(t,e));break}}t=t.return}}function d0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(K===4||K===3&&(ne&130023424)===ne&&500>Q()-ua?Tt(e,0):ca|=n),xe(e,t)}function ou(e,t){t===0&&(e.mode&1?(t=Er,Er<<=1,!(Er&130023424)&&(Er=4194304)):t=1);var n=de();e=Ze(e,t),e!==null&&(xr(e,t,n),xe(e,n))}function c0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ou(e,n)}function u0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),ou(e,n)}var au;au=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Zp(e,t,n);pe=!!(e.flags&131072)}else pe=!1,D&&t.flags&1048576&&uc(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qr(e,t),e=t.pendingProps;var s=fn(t,ae.current);ln(t,n),s=ia(null,t,r,e,s,n);var o=sa();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(o=!0,di(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Jo(t),s.updater=Bi,t.stateNode=s,s._reactInternals=t,no(t,r,e,n),t=so(null,t,r,!0,o,n)):(t.tag=0,D&&o&&Vo(t),le(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qr(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=p0(r),e=Te(r,e),s){case 0:t=io(null,t,r,e,n);break e;case 1:t=jl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,Te(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Te(r,s),io(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Te(r,s),jl(e,t,r,s,n);case 3:e:{if(Hc(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,s=o.element,mc(e,t),hi(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=xn(Error(k(423)),t),t=Sl(e,t,r,n,s);break e}else if(r!==s){s=xn(Error(k(424)),t),t=Sl(e,t,r,n,s);break e}else for(ye=ht(t.stateNode.containerInfo.firstChild),ve=t,D=!0,Me=null,n=gc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===s){t=Je(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return yc(t),e===null&&Js(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,a=s.children,qs(r,s)?a=null:o!==null&&qs(r,o)&&(t.flags|=32),$c(e,t),le(e,t,a,n),t.child;case 6:return e===null&&Js(t),null;case 13:return Yc(e,t,n);case 4:return ea(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Te(r,s),wl(e,t,r,s,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,o=t.memoizedProps,a=s.value,_(fi,r._currentValue),r._currentValue=a,o!==null)if(_e(o.value,a)){if(o.children===s.children&&!he.current){t=Je(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var d=l.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=Xe(-1,n&-n),d.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?d.next=d:(d.next=g.next,g.next=d),c.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),eo(o.return,n,t),l.lanes|=n;break}d=d.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(k(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),eo(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}le(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,ln(t,n),s=Ee(s),r=r(s),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,s=Te(r,t.pendingProps),s=Te(r.type,s),kl(e,t,r,s,n);case 15:return Dc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Te(r,s),qr(e,t),t.tag=1,ge(r)?(e=!0,di(t)):e=!1,ln(t,n),Oc(t,r,s),no(t,r,s,n),so(null,t,r,!0,e,n);case 19:return Vc(e,t,n);case 22:return Uc(e,t,n)}throw Error(k(156,t.tag))};function lu(e,t){return Ld(e,t)}function f0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new f0(e,t,n,r)}function ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function p0(e){if(typeof e=="function")return ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mo)return 11;if(e===Lo)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,s,o){var a=2;if(r=e,typeof e=="function")ga(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Vt:return Bt(n.children,s,o,t);case Bo:a=8,s|=8;break;case zs:return e=ze(12,n,t,s|2),e.elementType=zs,e.lanes=o,e;case Ns:return e=ze(13,n,t,s),e.elementType=Ns,e.lanes=o,e;case Es:return e=ze(19,n,t,s),e.elementType=Es,e.lanes=o,e;case yd:return Fi(n,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xd:a=10;break e;case md:a=9;break e;case Mo:a=11;break e;case Lo:a=14;break e;case nt:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=ze(a,n,t,s),t.elementType=e,t.type=r,t.lanes=o,t}function Bt(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function Fi(e,t,n,r){return e=ze(22,e,r,t),e.elementType=yd,e.lanes=n,e.stateNode={isHidden:!1},e}function xs(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function ms(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function h0(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ki(0),this.expirationTimes=Ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function xa(e,t,n,r,s,o,a,l,d){return e=new h0(e,t,n,l,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jo(o),e}function g0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function du(e){if(!e)return wt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ge(n))return dc(e,n,t)}return t}function cu(e,t,n,r,s,o,a,l,d){return e=xa(n,r,!0,e,s,o,a,l,d),e.context=du(null),n=e.current,r=de(),s=mt(n),o=Xe(r,s),o.callback=t??null,gt(n,o,s),e.current.lanes=s,xr(e,s,r),xe(e,r),e}function _i(e,t,n,r){var s=t.current,o=de(),a=mt(s);return n=du(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(s,t,a),e!==null&&(Fe(e,s,a,o),Yr(e,s,a)),a}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ml(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ma(e,t){Ml(e,t),(e=e.alternate)&&Ml(e,t)}function x0(){return null}var uu=typeof reportError=="function"?reportError:function(e){console.error(e)};function ya(e){this._internalRoot=e}Oi.prototype.render=ya.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));_i(e,t,null,null)};Oi.prototype.unmount=ya.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){_i(null,e,null,null)}),t[Ke]=null}};function Oi(e){this._internalRoot=e}Oi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ud();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&Hd(e)}};function va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ll(){}function m0(e,t,n,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var c=ki(a);o.call(c)}}var a=cu(t,r,e,0,null,!1,!1,"",Ll);return e._reactRootContainer=a,e[Ke]=a.current,rr(e.nodeType===8?e.parentNode:e),At(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=ki(d);l.call(c)}}var d=xa(e,0,!1,null,null,!1,!1,"",Ll);return e._reactRootContainer=d,e[Ke]=d.current,rr(e.nodeType===8?e.parentNode:e),At(function(){_i(t,d,n,r)}),d}function Wi(e,t,n,r,s){var o=n._reactRootContainer;if(o){var a=o;if(typeof s=="function"){var l=s;s=function(){var d=ki(a);l.call(d)}}_i(t,a,e,s)}else a=m0(n,t,e,s,r);return ki(a)}Wd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=On(t.pendingLanes);n!==0&&(Oo(t,n|1),xe(t,Q()),!(L&6)&&(mn=Q()+500,St()))}break;case 13:At(function(){var r=Ze(e,1);if(r!==null){var s=de();Fe(r,e,1,s)}}),ma(e,1)}};Ao=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=de();Fe(t,e,134217728,n)}ma(e,134217728)}};Dd=function(e){if(e.tag===13){var t=mt(e),n=Ze(e,t);if(n!==null){var r=de();Fe(n,e,t,r)}ma(e,t)}};Ud=function(){return F};$d=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Os=function(e,t,n){switch(t){case"input":if(Is(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Pi(r);if(!s)throw Error(k(90));bd(r),Is(r,s)}}}break;case"textarea":kd(e,n);break;case"select":t=n.value,t!=null&&rn(e,!!n.multiple,t,!1)}};Rd=fa;Pd=At;var y0={usingClientEntryPoint:!1,Events:[yr,Gt,Pi,Nd,Ed,fa]},Mn={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v0={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bd(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||x0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ar.isDisabled&&Ar.supportsFiber)try{zi=Ar.inject(v0),Ue=Ar}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y0;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!va(t))throw Error(k(200));return g0(e,t,null,n)};we.createRoot=function(e,t){if(!va(e))throw Error(k(299));var n=!1,r="",s=uu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=xa(e,1,!1,null,null,n,!1,r,s),e[Ke]=t.current,rr(e.nodeType===8?e.parentNode:e),new ya(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Bd(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return At(e)};we.hydrate=function(e,t,n){if(!Ai(t))throw Error(k(200));return Wi(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!va(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,s=!1,o="",a=uu;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=cu(t,null,e,1,n??null,s,!1,o,a),e[Ke]=t.current,rr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Oi(t)};we.render=function(e,t,n){if(!Ai(t))throw Error(k(200));return Wi(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!Ai(e))throw Error(k(40));return e._reactRootContainer?(At(function(){Wi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=fa;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ai(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Wi(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function fu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fu)}catch(e){console.error(e)}}fu(),fd.exports=we;var b0=fd.exports,Fl=b0;Ss.createRoot=Fl.createRoot,Ss.hydrateRoot=Fl.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fr(){return fr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fr.apply(this,arguments)}var lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lt||(lt={}));const _l="popstate";function w0(e){e===void 0&&(e={});function t(r,s){let{pathname:o,search:a,hash:l}=r.location;return yo("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:ji(s)}return j0(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ba(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function k0(){return Math.random().toString(36).substr(2,8)}function Ol(e,t){return{usr:e.state,key:e.key,idx:t}}function yo(e,t,n,r){return n===void 0&&(n=null),fr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jn(t):t,{state:n,key:t&&t.key||r||k0()})}function ji(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function j0(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:o=!1}=r,a=s.history,l=lt.Pop,d=null,c=g();c==null&&(c=0,a.replaceState(fr({},a.state,{idx:c}),""));function g(){return(a.state||{idx:null}).idx}function p(){l=lt.Pop;let j=g(),f=j==null?null:j-c;c=j,d&&d({action:l,location:w.location,delta:f})}function x(j,f){l=lt.Push;let u=yo(w.location,j,f);c=g()+1;let h=Ol(u,c),b=w.createHref(u);try{a.pushState(h,"",b)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(b)}o&&d&&d({action:l,location:w.location,delta:1})}function m(j,f){l=lt.Replace;let u=yo(w.location,j,f);c=g();let h=Ol(u,c),b=w.createHref(u);a.replaceState(h,"",b),o&&d&&d({action:l,location:w.location,delta:0})}function v(j){let f=s.location.origin!=="null"?s.location.origin:s.location.href,u=typeof j=="string"?j:ji(j);return u=u.replace(/ $/,"%20"),X(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let w={get action(){return l},get location(){return e(s,a)},listen(j){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(_l,p),d=j,()=>{s.removeEventListener(_l,p),d=null}},createHref(j){return t(s,j)},createURL:v,encodeLocation(j){let f=v(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:x,replace:m,go(j){return a.go(j)}};return w}var Al;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Al||(Al={}));function S0(e,t,n){return n===void 0&&(n="/"),C0(e,t,n)}function C0(e,t,n,r){let s=typeof t=="string"?jn(t):t,o=wa(s.pathname||"/",n);if(o==null)return null;let a=pu(e);z0(a);let l=null;for(let d=0;l==null&&d<a.length;++d){let c=O0(o);l=L0(a[d],c)}return l}function pu(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(o,a,l)=>{let d={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};d.relativePath.startsWith("/")&&(X(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let c=vt([r,d.relativePath]),g=n.concat(d);o.children&&o.children.length>0&&(X(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),pu(o.children,t,g,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:B0(c,o.index),routesMeta:g})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,a);else for(let d of hu(o.path))s(o,a,d)}),t}function hu(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return s?[o,""]:[o];let a=hu(r.join("/")),l=[];return l.push(...a.map(d=>d===""?o:[o,d].join("/"))),s&&l.push(...a),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function z0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:M0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const N0=/^:[\w-]+$/,E0=3,R0=2,P0=1,I0=10,T0=-2,Wl=e=>e==="*";function B0(e,t){let n=e.split("/"),r=n.length;return n.some(Wl)&&(r+=T0),t&&(r+=R0),n.filter(s=>!Wl(s)).reduce((s,o)=>s+(N0.test(o)?E0:o===""?P0:I0),r)}function M0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function L0(e,t,n){let{routesMeta:r}=e,s={},o="/",a=[];for(let l=0;l<r.length;++l){let d=r[l],c=l===r.length-1,g=o==="/"?t:t.slice(o.length)||"/",p=F0({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},g),x=d.route;if(!p)return null;Object.assign(s,p.params),a.push({params:s,pathname:vt([o,p.pathname]),pathnameBase:$0(vt([o,p.pathnameBase])),route:x}),p.pathnameBase!=="/"&&(o=vt([o,p.pathnameBase]))}return a}function F0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_0(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let o=s[0],a=o.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((c,g,p)=>{let{paramName:x,isOptional:m}=g;if(x==="*"){let w=l[p]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const v=l[p];return m&&!v?c[x]=void 0:c[x]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:a,pattern:e}}function _0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ba(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,d)=>(r.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function O0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ba(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const A0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,W0=e=>A0.test(e);function D0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?jn(e):e,o;if(n)if(W0(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),ba(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Dl(n.substring(1),"/"):o=Dl(n,t)}else o=t;return{pathname:o,search:H0(r),hash:Y0(s)}}function Dl(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function ys(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function U0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gu(e,t){let n=U0(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function xu(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=jn(e):(s=fr({},e),X(!s.pathname||!s.pathname.includes("?"),ys("?","pathname","search",s)),X(!s.pathname||!s.pathname.includes("#"),ys("#","pathname","hash",s)),X(!s.search||!s.search.includes("#"),ys("#","search","hash",s)));let o=e===""||s.pathname==="",a=o?"/":s.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let x=a.split("/");for(;x[0]==="..";)x.shift(),p-=1;s.pathname=x.join("/")}l=p>=0?t[p]:"/"}let d=D0(s,l),c=a&&a!=="/"&&a.endsWith("/"),g=(o||a===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(c||g)&&(d.pathname+="/"),d}const vt=e=>e.join("/").replace(/\/\/+/g,"/"),$0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),H0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Y0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function V0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const mu=["post","put","patch","delete"];new Set(mu);const Q0=["get",...mu];new Set(Q0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pr(){return pr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pr.apply(this,arguments)}const ka=y.createContext(null),q0=y.createContext(null),Ut=y.createContext(null),Di=y.createContext(null),$t=y.createContext({outlet:null,matches:[],isDataRoute:!1}),yu=y.createContext(null);function X0(e,t){let{relative:n}=t===void 0?{}:t;br()||X(!1);let{basename:r,navigator:s}=y.useContext(Ut),{hash:o,pathname:a,search:l}=wu(e,{relative:n}),d=a;return r!=="/"&&(d=a==="/"?r:vt([r,a])),s.createHref({pathname:d,search:l,hash:o})}function br(){return y.useContext(Di)!=null}function Sn(){return br()||X(!1),y.useContext(Di).location}function vu(e){y.useContext(Ut).static||y.useLayoutEffect(e)}function bu(){let{isDataRoute:e}=y.useContext($t);return e?lh():G0()}function G0(){br()||X(!1);let e=y.useContext(ka),{basename:t,future:n,navigator:r}=y.useContext(Ut),{matches:s}=y.useContext($t),{pathname:o}=Sn(),a=JSON.stringify(gu(s,n.v7_relativeSplatPath)),l=y.useRef(!1);return vu(()=>{l.current=!0}),y.useCallback(function(c,g){if(g===void 0&&(g={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=xu(c,JSON.parse(a),o,g.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:vt([t,p.pathname])),(g.replace?r.replace:r.push)(p,g.state,g)},[t,r,a,o,e])}function wu(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(Ut),{matches:s}=y.useContext($t),{pathname:o}=Sn(),a=JSON.stringify(gu(s,r.v7_relativeSplatPath));return y.useMemo(()=>xu(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function K0(e,t){return Z0(e,t)}function Z0(e,t,n,r){br()||X(!1);let{navigator:s}=y.useContext(Ut),{matches:o}=y.useContext($t),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let c=Sn(),g;if(t){var p;let j=typeof t=="string"?jn(t):t;d==="/"||(p=j.pathname)!=null&&p.startsWith(d)||X(!1),g=j}else g=c;let x=g.pathname||"/",m=x;if(d!=="/"){let j=d.replace(/^\//,"").split("/");m="/"+x.replace(/^\//,"").split("/").slice(j.length).join("/")}let v=S0(e,{pathname:m}),w=rh(v&&v.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:vt([d,s.encodeLocation?s.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?d:vt([d,s.encodeLocation?s.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n,r);return t&&w?y.createElement(Di.Provider,{value:{location:pr({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:lt.Pop}},w):w}function J0(){let e=ah(),t=V0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:s},n):null,null)}const eh=y.createElement(J0,null);class th extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement($t.Provider,{value:this.props.routeContext},y.createElement(yu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nh(e){let{routeContext:t,match:n,children:r}=e,s=y.useContext(ka);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement($t.Provider,{value:t},r)}function rh(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(s=n)==null?void 0:s.errors;if(l!=null){let g=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);g>=0||X(!1),a=a.slice(0,Math.min(a.length,g+1))}let d=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<a.length;g++){let p=a[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=g),p.route.id){let{loaderData:x,errors:m}=n,v=p.route.loader&&x[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||v){d=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((g,p,x)=>{let m,v=!1,w=null,j=null;n&&(m=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||eh,d&&(c<0&&x===0?(dh("route-fallback"),v=!0,j=null):c===x&&(v=!0,j=p.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,x+1)),u=()=>{let h;return m?h=w:v?h=j:p.route.Component?h=y.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=g,y.createElement(nh,{match:p,routeContext:{outlet:g,matches:f,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?y.createElement(th,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var ku=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ku||{}),ju=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ju||{});function ih(e){let t=y.useContext(ka);return t||X(!1),t}function sh(e){let t=y.useContext(q0);return t||X(!1),t}function oh(e){let t=y.useContext($t);return t||X(!1),t}function Su(e){let t=oh(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function ah(){var e;let t=y.useContext(yu),n=sh(),r=Su();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function lh(){let{router:e}=ih(ku.UseNavigateStable),t=Su(ju.UseNavigateStable),n=y.useRef(!1);return vu(()=>{n.current=!0}),y.useCallback(function(s,o){o===void 0&&(o={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,pr({fromRouteId:t},o)))},[e,t])}const Ul={};function dh(e,t,n){Ul[e]||(Ul[e]=!0)}function ch(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function je(e){X(!1)}function uh(e){let{basename:t="/",children:n=null,location:r,navigationType:s=lt.Pop,navigator:o,static:a=!1,future:l}=e;br()&&X(!1);let d=t.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:d,navigator:o,static:a,future:pr({v7_relativeSplatPath:!1},l)}),[d,l,o,a]);typeof r=="string"&&(r=jn(r));let{pathname:g="/",search:p="",hash:x="",state:m=null,key:v="default"}=r,w=y.useMemo(()=>{let j=wa(g,d);return j==null?null:{location:{pathname:j,search:p,hash:x,state:m,key:v},navigationType:s}},[d,g,p,x,m,v,s]);return w==null?null:y.createElement(Ut.Provider,{value:c},y.createElement(Di.Provider,{children:n,value:w}))}function fh(e){let{children:t,location:n}=e;return K0(vo(t),n)}new Promise(()=>{});function vo(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,s)=>{if(!y.isValidElement(r))return;let o=[...t,s];if(r.type===y.Fragment){n.push.apply(n,vo(r.props.children,o));return}r.type!==je&&X(!1),!r.props.index||!r.props.children||X(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=vo(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bo(){return bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bo.apply(this,arguments)}function ph(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,o;for(o=0;o<r.length;o++)s=r[o],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function hh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gh(e,t){return e.button===0&&(!t||t==="_self")&&!hh(e)}const xh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],mh="6";try{window.__reactRouterVersion=mh}catch{}const yh="startTransition",$l=df[yh];function vh(e){let{basename:t,children:n,future:r,window:s}=e,o=y.useRef();o.current==null&&(o.current=w0({window:s,v5Compat:!0}));let a=o.current,[l,d]=y.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},g=y.useCallback(p=>{c&&$l?$l(()=>d(p)):d(p)},[d,c]);return y.useLayoutEffect(()=>a.listen(g),[a,g]),y.useEffect(()=>ch(r),[r]),y.createElement(uh,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const bh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ve=y.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:o,replace:a,state:l,target:d,to:c,preventScrollReset:g,viewTransition:p}=t,x=ph(t,xh),{basename:m}=y.useContext(Ut),v,w=!1;if(typeof c=="string"&&wh.test(c)&&(v=c,bh))try{let h=new URL(window.location.href),b=c.startsWith("//")?new URL(h.protocol+c):new URL(c),S=wa(b.pathname,m);b.origin===h.origin&&S!=null?c=S+b.search+b.hash:w=!0}catch{}let j=X0(c,{relative:s}),f=kh(c,{replace:a,state:l,target:d,preventScrollReset:g,relative:s,viewTransition:p});function u(h){r&&r(h),h.defaultPrevented||f(h)}return y.createElement("a",bo({},x,{href:v||j,onClick:w||o?r:u,ref:n,target:d}))});var Hl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hl||(Hl={}));var Yl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yl||(Yl={}));function kh(e,t){let{target:n,replace:r,state:s,preventScrollReset:o,relative:a,viewTransition:l}=t===void 0?{}:t,d=bu(),c=Sn(),g=wu(e,{relative:a});return y.useCallback(p=>{if(gh(p,n)){p.preventDefault();let x=r!==void 0?r:ji(c)===ji(g);d(e,{replace:x,state:s,preventScrollReset:o,relative:a,viewTransition:l})}},[c,d,g,r,s,n,e,o,a,l])}function jh(){const[e,t]=y.useState(!1),[n,r]=y.useState(!1),s=Sn(),o=bu();y.useEffect(()=>{const c=()=>t(window.scrollY>10);return window.addEventListener("scroll",c,{passive:!0}),c(),()=>window.removeEventListener("scroll",c)},[]);const a=[{label:"Home",to:"/"},{label:"Features",to:"/features"},{label:"Use Cases",to:"/use-cases"},{label:"How It Works",to:"/how-it-works"},{label:"Contact",to:"/contact"}],l=c=>c==="/"?s.pathname==="/":s.pathname.startsWith(c),d=()=>{r(!1),o("/qr-form")};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        /* ══════════════════════════════════════
           NAV SHELL
        ══════════════════════════════════════ */

        .sfs-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          font-family: 'Space Grotesk', sans-serif;
        }

        .sfs-topbar {
          height: 2px;
          background: linear-gradient(
            90deg,
            #064e3b 0%,
            #16a34a 40%,
            #4ade80 60%,
            #16a34a 80%,
            #064e3b 100%
          );
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
          box-shadow:
            0 4px 24px rgba(6,78,59,0.08),
            0 1px 0 rgba(0,0,0,0.04);
        }

        /* ══════════════════════════════════════
           LOGO BADGE — full redesign
        ══════════════════════════════════════ */

        .sfs-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          flex-shrink: 0;
        }

        /* Outer wrapper — float + size transition */
        .sfs-badge-wrap {
          position: relative;
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          animation: sfs-float 4s ease-in-out infinite;
          transition: width .35s ease, height .35s ease;
        }

        .sfs-nav.scrolled .sfs-badge-wrap {
          width: 52px;
          height: 52px;
        }

        @keyframes sfs-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }

        .sfs-logo:hover .sfs-badge-wrap {
          animation-play-state: paused;
          transform: scale(1.07) translateY(-3px);
          transition: transform .3s cubic-bezier(.34,1.3,.64,1);
        }

        /* Dual pulse rings */
        // .sfs-pulse-ring {
        //   position: absolute;
        //   inset: -7px;
        //   border-radius: 24px;
        //   border: 1.5px solid rgba(34,197,94,0.35);
        //   animation: sfs-pulse-out 2.8s ease-out infinite;
        //   pointer-events: none;
        // }
        // .sfs-pulse-ring:nth-child(2) {
        //   animation-delay: 1s;
        //   inset: -14px;
        //   border-radius: 29px;
        // }

        @keyframes sfs-pulse-out {
          0%   { opacity: 0.75; transform: scale(0.9); }
          100% { opacity: 0;    transform: scale(1.2); }
        }

        /* Spinning conic ring — speeds up on hover */
        .sfs-ring-outer {
          position: absolute;
          inset: 0;
          border-radius: 18px;
          /* Conic gradient gives the spinning rainbow-green effect */
          background: conic-gradient(
            from 0deg,
            #22c55e 0%,
            #16a34a 25%,
            #0d9488 50%,
            #1d4ed8 65%,
            #16a34a 80%,
            #22c55e 100%
          );
          animation: sfs-spin-ring 5s linear infinite;
          padding: 3px;
          transition: border-radius .35s ease;
        }

        .sfs-nav.scrolled .sfs-ring-outer {
          border-radius: 15px;
        }

        .sfs-logo:hover .sfs-ring-outer {
          animation-duration: 1.4s;
        }

        // @keyframes sfs-spin-ring {
        //   from { transform: rotate(100deg); }
        //   to   { transform: rotate(360deg); }
        // }

        /* White badge face */
        .sfs-badge-face {
          width: 100%;
          height: 100%;
          border-radius: 15px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition: border-radius .35s ease;
        }

        .sfs-nav.scrolled .sfs-badge-face {
          border-radius: 13px;
        }

        /* Inner soft white vignette so edges feel clean */
        .sfs-badge-face::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 10px rgba(255,255,255,0.9);
          pointer-events: none;
          z-index: 5;
        }

        /* QR scan line */
        .sfs-scan-line {
          position: absolute;
          left: 6px; right: 6px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(22,163,74,0.65), transparent);
          animation: sfs-scan 2.6s ease-in-out infinite;
          border-radius: 999px;
          z-index: 4;
          pointer-events: none;
        }

        @keyframes sfs-scan {
          0%   { top: 8%;  opacity: 0; }
          12%  { opacity: 1; }
          88%  { opacity: 0.85; }
          100% { top: 92%; opacity: 0; }
        }

        /* Corner brackets */
        .sfs-bracket {
          position: absolute;
          width: 11px;
          height: 11px;
          z-index: 6;
          pointer-events: none;
          border-color: #16a34a;
          border-style: solid;
          opacity: 0.8;
        }
        .sfs-bracket.tl { top:5px;    left:5px;   border-width: 2px 0 0 2px; border-radius: 2px 0 0 0; }
        .sfs-bracket.tr { top:5px;    right:5px;  border-width: 2px 2px 0 0; border-radius: 0 2px 0 0; }
        .sfs-bracket.bl { bottom:5px; left:5px;   border-width: 0 0 2px 2px; border-radius: 0 0 0 2px; }
        .sfs-bracket.br { bottom:5px; right:5px;  border-width: 0 2px 2px 0; border-radius: 0 0 2px 0; }

        /*
          KEY FIX: mix-blend-mode: multiply makes the black background of the logo
          completely transparent against the white badge face.
          The green/blue shield fills the full badge area.
          object-fit: contain + 100% size = fills edge to edge.
        */
        .sfs-badge-img {
          width: 92%;
          height: 92%;
          object-fit: contain;
          position: relative;
          z-index: 3;
          mix-blend-mode: multiply;
          transition: transform .4s cubic-bezier(.34,1.3,.64,1);
          border-radius: 6px;
        }

        .sfs-logo:hover .sfs-badge-img {
          transform: scale(1.08);
        }

        /* ══════════════════════════════════════
           WORDMARK
        ══════════════════════════════════════ */

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

        /* ══════════════════════════════════════
           NAV LINKS
        ══════════════════════════════════════ */

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

        /* ══════════════════════════════════════
           ACTION BUTTONS
        ══════════════════════════════════════ */

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
          box-shadow:
            0 1px 0 rgba(0,0,0,.12),
            0 4px 16px rgba(22,163,74,.3);
          transition: all .22s ease;
          white-space: nowrap;
        }

        .sfs-prereg:hover {
          background: #1b7a21;
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

        /* ══════════════════════════════════════
           MOBILE
        ══════════════════════════════════════ */

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

        /* ══════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════ */

        @media (max-width: 980px) {
          .sfs-links,
          .sfs-actions { display: none; }

          .sfs-mobile-btn { display: flex; }

          .sfs-bar {
            height: 68px;
            padding: 0 18px;
          }

          .sfs-badge-wrap {
            width: 52px;
            height: 52px;
          }
        }

        @media (max-width: 480px) {
          .sfs-status { display: none; }
        }

        @media (max-width: 380px) {
          .sfs-wordmark-secondary { display: none; }
        }
      `}),i.jsxs("header",{className:`sfs-nav ${e?"scrolled":""}`,children:[i.jsx("div",{className:"sfs-topbar"}),i.jsxs("div",{className:"sfs-bar",children:[i.jsxs(Ve,{to:"/",className:"sfs-logo",children:[i.jsxs("div",{className:"sfs-badge-wrap",children:[i.jsx("div",{className:"sfs-pulse-ring"}),i.jsx("div",{className:"sfs-pulse-ring"}),i.jsx("div",{className:"sfs-ring-outer",children:i.jsxs("div",{className:"sfs-badge-face",children:[i.jsx("div",{className:"sfs-bracket tl"}),i.jsx("div",{className:"sfs-bracket tr"}),i.jsx("div",{className:"sfs-bracket bl"}),i.jsx("div",{className:"sfs-bracket br"}),i.jsx("div",{className:"sfs-scan-line"}),i.jsx("img",{src:"/logo.png",alt:"ScanForSafe",className:"sfs-badge-img"})]})})]}),i.jsxs("div",{className:"sfs-wordmark",children:[i.jsxs("div",{className:"sfs-wordmark-row1",children:[i.jsxs("div",{className:"sfs-wordmark-primary",children:[i.jsx("span",{className:"accent",children:"ScanFor"}),"Safe"]}),i.jsxs("div",{className:"sfs-status",children:[i.jsx("span",{className:"sfs-status-pulse"}),i.jsx("span",{className:"sfs-status-label",children:"Smart Shield"})]})]}),i.jsx("div",{className:"sfs-wordmark-secondary",children:"Innovations Pvt Ltd"})]})]}),i.jsx("nav",{className:"sfs-links",style:{display:"flex",alignItems:"center",gap:"0px"},children:a.map(c=>i.jsx(Ve,{to:c.to,className:`sfs-link ${l(c.to)?"active":""}`,children:c.label},c.label))}),i.jsxs("div",{className:"sfs-actions",children:[i.jsx(Ve,{to:"/login",className:"sfs-login",children:"Login"}),i.jsxs("button",{className:"sfs-prereg",onClick:d,children:[i.jsx("span",{className:"prereg-dot"}),"Pre Registration"]})]}),i.jsx("button",{className:"sfs-mobile-btn",onClick:()=>r(!0),"aria-label":"Open menu",children:"☰"})]})]}),i.jsx("div",{className:`sfs-mobile-overlay ${n?"open":""}`,onClick:()=>r(!1),children:i.jsxs("div",{className:"sfs-mobile-drawer",onClick:c=>c.stopPropagation(),children:[a.map(c=>i.jsx(Ve,{to:c.to,className:`sfs-mobile-link ${l(c.to)?"active":""}`,onClick:()=>r(!1),children:c.label},c.label)),i.jsxs("div",{className:"sfs-mobile-actions",children:[i.jsx(Ve,{to:"/login",className:"sfs-mobile-login",onClick:()=>r(!1),children:"Login"}),i.jsxs("button",{className:"sfs-mobile-prereg",onClick:d,children:[i.jsx("span",{className:"prereg-dot"}),"Pre Registration"]})]})]})})]})}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cu=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ch={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:o,iconNode:a,...l},d)=>y.createElement("svg",{ref:d,...Ch,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Cu("lucide",s),...l},[...a.map(([c,g])=>y.createElement(c,g)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=(e,t)=>{const n=y.forwardRef(({className:r,...s},o)=>y.createElement(zh,{ref:o,iconNode:t,className:Cu(`lucide-${Sh(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=z("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=z("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=z("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=z("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=z("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=z("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=z("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=z("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=z("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=z("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=z("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=z("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=z("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=z("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=z("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=z("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=z("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=z("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=z("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=z("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=z("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=z("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=z("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=z("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=z("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=z("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=z("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=z("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=z("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=z("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=z("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=z("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=z("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=z("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=z("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=z("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=z("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=z("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=z("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=z("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=z("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=z("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=z("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=z("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=z("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=z("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=z("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=z("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=z("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=z("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=z("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=z("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=z("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=z("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=z("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=z("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=z("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),og="/logo.png";function ag(){const[e,t]=y.useState(""),[n,r]=y.useState(!1),s=l=>{l.preventDefault(),e.trim()&&(r(!0),setTimeout(()=>{r(!1),t("")},3e3))},o=[{label:"Home",to:"/"},{label:"Features",to:"/features"},{label:"Use Cases",to:"/use-cases"},{label:"How It Works",to:"/how-it-works"},{label:"Contact",to:"/contact"}],a=[{Icon:Oh,href:"https://facebook.com",label:"Facebook"},{Icon:$h,href:"https://instagram.com",label:"Instagram"},{Icon:rg,href:"https://twitter.com",label:"Twitter"},{Icon:Qh,href:"https://linkedin.com",label:"LinkedIn"},{Icon:za,href:"https://telegram.org",label:"Telegram"}];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
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
      `}),i.jsxs("footer",{className:"sfs-footer",children:[i.jsx("div",{className:"sfs-footer-overlay"}),i.jsxs("div",{className:"sfs-footer-container",children:[i.jsxs("div",{className:"sfs-footer-newsletter-wrap",children:[i.jsxs("div",{className:"sfs-newsletter-info",children:[i.jsx("h3",{children:"Get Safety Alerts & Updates"}),i.jsx("p",{children:"Subscribe to our corporate newsletter for modern verification insights."})]}),i.jsxs("form",{onSubmit:s,className:"sfs-newsletter-form",children:[i.jsx("input",{className:"sfs-newsletter-input",type:"email",required:!0,placeholder:n?"Thanks for subscribing!":"Enter your corporate email",value:e,onChange:l=>t(l.target.value),disabled:n}),i.jsx("button",{type:"submit",className:"sfs-newsletter-btn",disabled:n,children:n?"Subscribed!":"Subscribe"})]})]}),i.jsxs("div",{className:"sfs-footer-main",children:[i.jsxs("div",{className:"sfs-footer-brand",children:[i.jsxs(Ve,{to:"/",className:"sfs-footer-logo-wrap",style:{textDecoration:"none"},children:[i.jsx("div",{className:"sfs-footer-logo-box",children:i.jsx("img",{src:og,alt:"ScanForSafe Logo",className:"sfs-footer-logo-img"})}),i.jsxs("div",{children:[i.jsxs("h2",{className:"sfs-footer-title",children:["Scan",i.jsx("span",{children:"ForSafe"})]}),i.jsx("div",{className:"sfs-footer-tagline",children:"Smart Shield"})]})]}),i.jsx("p",{className:"sfs-footer-desc",children:"Pioneering secure QR code solutions, visual verification systems, and smart tracking technologies. Empowering a safer and more authentic world through trusted hardware and visual tags."}),i.jsx("div",{className:"sfs-footer-socials",children:a.map(({Icon:l,href:d,label:c},g)=>i.jsx("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"sfs-social-icon",title:c,children:i.jsx(l,{size:18})},g))})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"sfs-footer-section-title",children:"Navigation"}),i.jsx("div",{className:"sfs-footer-links",children:o.map((l,d)=>i.jsxs(Ve,{to:l.to,className:"sfs-footer-link",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[i.jsx("span",{className:"sfs-footer-link-dot"}),l.label]},d))})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"sfs-footer-section-title",children:"Contact Us"}),i.jsxs("div",{className:"sfs-footer-contact-list",children:[i.jsxs("div",{className:"sfs-footer-contact-item",children:[i.jsx(Mt,{className:"sfs-footer-contact-icon",size:17}),i.jsxs("div",{className:"sfs-footer-contact-text",children:[i.jsx("strong",{children:"Phone"}),"+91 98765 43210"]})]}),i.jsxs("div",{className:"sfs-footer-contact-item",children:[i.jsx(Ru,{className:"sfs-footer-contact-icon",size:17}),i.jsxs("div",{className:"sfs-footer-contact-text",children:[i.jsx("strong",{children:"Email"}),"info@scanforsafe.com"]})]}),i.jsxs("div",{className:"sfs-footer-contact-item",children:[i.jsx(yn,{className:"sfs-footer-contact-icon",size:17}),i.jsxs("div",{className:"sfs-footer-contact-text",children:[i.jsx("strong",{children:"Corporate Office"}),"SFSI Innovations Tower, Phase-2, Cyber Heights, Hyderabad, India"]})]})]})]})]}),i.jsxs("div",{className:"sfs-footer-bottom",children:[i.jsxs("p",{className:"sfs-footer-copy",children:["© ",new Date().getFullYear()," ",i.jsx("strong",{children:"ScanForSafe Innovations Pvt Ltd"}),". All rights reserved."]}),i.jsxs("div",{className:"sfs-footer-badges",children:[i.jsxs("span",{className:"sfs-footer-badge",children:[i.jsx(hr,{size:14,className:"sfs-footer-badge-icon"}),"SSL Secured"]}),i.jsxs("span",{className:"sfs-footer-badge",children:[i.jsx(Oe,{size:14,className:"sfs-footer-badge-icon"}),"ISO 27001 Certified"]}),i.jsxs("span",{className:"sfs-footer-badge",children:[i.jsx(Yh,{size:14,className:"sfs-footer-badge-icon"}),"Eco Friendly tags"]})]})]})]})]})]})}const lg="/assets/car-BSIz0SDG.png",dg="/assets/bike-CEMC_UmP.png",cg="/assets/luggage-g7ehyfUE.png",vs="/assets/qr-B8XSq41G.png",ql=["🛡️  10,000+ Assets Protected","📡  Live QR & NFC Scanning","🚨  Instant Owner Alerts","🔐  End-to-End Encrypted","⚡  Scan in Under 2 Seconds","🌍  Available in 50+ Countries","✅  4.9 / 5 User Rating","📲  15,000+ Scans Today","🏆  #1 Asset Protection Platform","🔔  8,000+ Alerts Sent Today"],Xl=[{label:"Vehicle Verified",owner:"Rahul Verma",avatar:vs,phone:"+91 98765 43210",email:"rahul.verma@mail.com",address:"23, Green Park, New Delhi",asset:"SFS-CAR-4587",emergency:"+91 99887 77665",registered:"12 May 2024, 09:15 AM",img:lg,color:"#2ebd3a"},{label:"Bike Verified",owner:"Aarav Sharma",avatar:vs,phone:"+91 98345 22119",email:"aarav.sharma@mail.com",address:"Plot 7, Andheri West, Mumbai",asset:"SFS-BIKE-7712",emergency:"+91 88774 66332",registered:"15 May 2024, 10:30 AM",img:dg,color:"#4bd557"},{label:"Luggage Verified",owner:"Priya Kapoor",avatar:vs,phone:"+91 93456 77889",email:"priya.kapoor@mail.com",address:"12, Koramangala, Bangalore",asset:"SFS-LUG-1123",emergency:"+91 90909 88776",registered:"28 Mar 2024, 02:45 PM",img:cg,color:"#7ded88"}],ug=`
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
  min-height: calc(100vh - 96px);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--dark);
  border: 1.5px solid rgba(46,189,58,0.22);
  border-radius: 32px;
  margin-top: 20px;
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
  padding: 72px 72px 52px;
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
  margin-top: 14px;
  margin-bottom: 20px;
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
  font-size: 64px; line-height: .92;
  letter-spacing: -3.5px; font-weight: 900;
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
  font-size: 14.5px; line-height: 1.82; color: var(--mid);
  max-width: 480px; margin-bottom: 26px;
  font-weight: 400;
  animation: slideInLeft .85s .14s cubic-bezier(.22,1,.36,1) both;
}

/* ── Feature cards ── */
.sfs-feats { display: flex; gap: 10px; margin-bottom: 26px; }
.sfs-feat {
  flex: 1;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(46,189,58,0.14);
  border-radius: 20px; padding: 18px 14px 16px;
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
  background: linear-gradient(135deg, #e8f8eb, #d4f5d8);
  display: flex; align-items: center; justify-content: center;
  font-size: 19px; margin-bottom: 11px;
  transition: .32s cubic-bezier(.34,1.46,.64,1);
  box-shadow: 0 4px 10px rgba(46,189,58,0.15);
  border: 1px solid rgba(46,189,58,0.16);
}
.sfs-feat:hover .sfs-feat-ico { transform: scale(1.1) rotate(-5deg); }
.sfs-feat h4 { font-size: 12.5px; font-weight: 700; color: var(--dark); margin-bottom: 5px; }
.sfs-feat p  { font-size: 10.5px; line-height: 1.6; color: #6a8070; }
.sfs-feat:nth-child(1) { animation: fadeUp .55s .25s both; }
.sfs-feat:nth-child(2) { animation: fadeUp .55s .36s both; }
.sfs-feat:nth-child(3) { animation: fadeUp .55s .47s both; }

/* ── Buttons ── */
.sfs-hero-actions {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 24px;
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
  font-size: 20px; font-weight: 800;
  background: linear-gradient(125deg, #0B2545, #2ebd3a);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  line-height: 1;
}
.sfs-stat-lbl { font-size: 10px; color: var(--mid); margin-top: 3px; font-weight: 500; }
.sfs-stat-div { width: 1px; height: 32px; background: rgba(46,189,58,0.20); }

/* ══ RIGHT ══ */
.sfs-right {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  min-height: 640px;
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

/* ══ PREMIUM iPHONE SHELL ══ */
.sfs-phone {
  width: 290px;
  position: relative; z-index: 5;
  animation: phoneRock 9s ease-in-out infinite;
}

/* outer titanium frame */
.sfs-phone-frame {
  background: linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 40%, #111 100%);
  border-radius: 56px;
  padding: 3px;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.10),
    -18px 32px 80px rgba(0,0,0,0.50),
    0 0 0 2px rgba(0,0,0,0.60),
    0 0 60px rgba(46,189,58,0.10),
    inset 0 1px 0 rgba(255,255,255,0.12);
  position: relative;
}

/* titanium side sheen */
.sfs-phone-frame::before {
  content: "";
  position: absolute; inset: 0; border-radius: 56px;
  background: linear-gradient(135deg,
    rgba(255,255,255,0.10) 0%,
    transparent 30%,
    transparent 65%,
    rgba(255,255,255,0.05) 100%);
  pointer-events: none; z-index: 10;
}

/* inner bezel */
.sfs-phone-inner {
  background: #0a0a0a;
  border-radius: 53px;
  padding: 2px;
  overflow: hidden;
}

/* screen glass reflection */
.sfs-phone-glass {
  position: absolute; inset: 0; border-radius: 53px;
  background: linear-gradient(135deg,
    rgba(255,255,255,0.07) 0%,
    transparent 40%,
    transparent 75%,
    rgba(255,255,255,0.03) 100%);
  pointer-events: none; z-index: 20;
}

@keyframes phoneRock {
  0%,100% { transform: perspective(1100px) rotateY(-8deg) rotateX(3deg) translateY(0); }
  33%      { transform: perspective(1100px) rotateY(-6deg) rotateX(2deg) translateY(-7px); }
  66%      { transform: perspective(1100px) rotateY(-9deg) rotateX(4.5deg) translateY(-4px); }
}

/* side buttons */
.sfs-phone-btn-l {
  position: absolute; left: -3px; top: 120px;
  width: 3px; height: 32px; background: #333; border-radius: 2px 0 0 2px;
  box-shadow: inset 1px 0 0 rgba(255,255,255,0.08);
}
.sfs-phone-btn-l2 {
  position: absolute; left: -3px; top: 164px;
  width: 3px; height: 32px; background: #333; border-radius: 2px 0 0 2px;
  box-shadow: inset 1px 0 0 rgba(255,255,255,0.08);
}
.sfs-phone-btn-r {
  position: absolute; right: -3px; top: 140px;
  width: 3px; height: 58px; background: #333; border-radius: 0 2px 2px 0;
  box-shadow: inset -1px 0 0 rgba(255,255,255,0.06);
}

.sfs-notch-row { height: 32px; display: flex; align-items: center; justify-content: center; position: relative; z-index: 5; }
.sfs-notch {
  width: 90px; height: 26px;
  background: #000;
  border-radius: 0 0 20px 20px;
  display: flex; align-items: center; justify-content: center; gap: 5px;
}
.sfs-notch-cam { width: 10px; height: 10px; border-radius: 50%; background: #111; border: 1.5px solid #1a1a1a; box-shadow: 0 0 0 1px rgba(255,255,255,0.04); }
.sfs-notch-pill { width: 48px; height: 12px; background: #0a0a0a; border-radius: 8px; }

.sfs-screen {
  background: linear-gradient(170deg, #050d06 0%, #020904 50%, #060e14 100%);
  border-radius: 0 0 50px 50px;
  overflow: hidden;
  padding: 14px 12px 20px;
  display: flex; flex-direction: column; align-items: center; text-align: center;
  position: relative;
}

/* screen ambient glow */
.sfs-screen::before {
  content: "";
  position: absolute; top: -40px; left: 50%; transform: translateX(-50%);
  width: 200px; height: 120px;
  background: radial-gradient(ellipse, rgba(46,189,58,0.18) 0%, transparent 70%);
  pointer-events: none; z-index: 0;
}

/* status bar */
.sfs-status-bar {
  display: flex; justify-content: space-between; align-items: center;
  width: 100%; padding: 0 6px 10px; position: relative; z-index: 2;
}
.sfs-status-time { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.70); letter-spacing: .02em; }
.sfs-status-icons { display: flex; align-items: center; gap: 4px; }
.sfs-signal { display: flex; align-items: flex-end; gap: 1.5px; }
.sfs-signal-bar { width: 2.5px; background: rgba(255,255,255,0.65); border-radius: 1px; }
.sfs-battery { width: 14px; height: 7px; border: 1px solid rgba(255,255,255,0.55); border-radius: 2px; position: relative; }
.sfs-battery::before { content: ""; position: absolute; right: -3px; top: 50%; transform: translateY(-50%); width: 2px; height: 4px; background: rgba(255,255,255,0.50); border-radius: 1px; }
.sfs-battery-fill { width: 70%; height: 100%; background: #2ebd3a; border-radius: 1px; }

.sfs-verified {
  display: inline-flex; align-items: center; gap: 5px;
  background: rgba(46,189,58,0.12);
  border: 1px solid rgba(46,189,58,0.28);
  border-radius: 999px; padding: 4px 11px;
  font-size: 8px; font-weight: 800;
  color: #4bd557; letter-spacing: .07em; text-transform: uppercase;
  margin-bottom: 11px; position: relative; z-index: 2;
}
.sfs-vdot { width: 5px; height: 5px; border-radius: 50%; background: var(--green); animation: livePulse 1.5s infinite; flex-shrink:0; }

/* avatar with premium glow ring */
.sfs-avatar-wrap {
  position: relative; margin-bottom: 10px; z-index: 2;
}
.sfs-avatar-glow {
  position: absolute; inset: -6px; border-radius: 50%;
  background: conic-gradient(from 0deg, #2ebd3a, #4bd557, #7ded88, #2ebd3a);
  animation: avatarSpin 4s linear infinite;
  filter: blur(1px);
}
@keyframes avatarSpin { to { transform: rotate(360deg); } }
.sfs-avatar-glow-inner {
  position: absolute; inset: 2px; border-radius: 50%;
  background: #050d06;
}
.sfs-avatar {
  width: 66px; height: 66px; border-radius: 50%; object-fit: cover;
  position: relative; z-index: 2;
  border: 2px solid rgba(46,189,58,0.30);
}

.sfs-owner-name {
  color: white; font-size: 17px; font-weight: 800;
  margin-bottom: 2px; font-family: 'Sora', sans-serif;
  letter-spacing: -.4px; position: relative; z-index: 2;
}
.sfs-owner-label { color: #7ded88; font-size: 10.5px; margin-bottom: 14px; font-weight: 500; position: relative; z-index: 2; }

.sfs-divider {
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(46,189,58,0.20), transparent);
  margin-bottom: 10px; position: relative; z-index: 2;
}

/* info rows */
.sfs-rows-wrap { width: 100%; text-align: left; position: relative; z-index: 2; }
.sfs-row {
  display: flex; align-items: center; gap: 7px;
  padding: 5px 0; border-bottom: 1px solid rgba(46,189,58,0.07);
}
.sfs-row:last-child { border-bottom: none; }
.sfs-row-ico {
  width: 26px; height: 26px; border-radius: 8px;
  background: rgba(46,189,58,0.09);
  border: 1px solid rgba(46,189,58,0.14);
  display: flex; align-items: center; justify-content: center;
  font-size: 10.5px; flex-shrink: 0;
  transition: .2s;
}
.sfs-row:hover .sfs-row-ico { background: rgba(46,189,58,0.18); transform: scale(1.08); }
.sfs-row-lbl { font-size: 7px; color: #3a7050; letter-spacing: .07em; text-transform: uppercase; font-weight: 700; }
.sfs-row-val { font-size: 9.5px; color: #e0f7e4; font-weight: 600; }

/* home indicator */
.sfs-home-ind {
  width: 100px; height: 4px; background: rgba(255,255,255,0.20);
  border-radius: 2px; margin: 14px auto 0;
  position: relative; z-index: 2;
}

/* Scanline */
.sfs-scanline {
  position: absolute; left: -10%; width: 120%; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(46,189,58,0.28), rgba(125,237,136,0.85), rgba(255,255,255,0.45), rgba(125,237,136,0.85), rgba(46,189,58,0.28), transparent);
  box-shadow: 0 0 14px rgba(46,189,58,0.45), 0 0 28px rgba(46,189,58,0.18);
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
  width: 460px; max-width: none;
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
  position: absolute; top: 68px; left: 6px;
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
.sfs-ticker::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,0.18) 0%, transparent 7%, transparent 93%, rgba(0,0,0,0.18) 100%);
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
  .sfs-hero { border-radius: 22px; margin-top: 16px; }
  .sfs-grid { grid-template-columns:1fr; padding:48px 32px 28px; gap:28px; }
  .sfs-h1 { font-size:50px; letter-spacing:-2.5px; }
  .sfs-right { min-height:560px; }
  .sfs-asset-img { width:340px; }
  .sfs-shield-badge { width:80px; height:80px; top:20px; right:10px; }
  .sfs-ring-2, .sfs-ring-3 { display:none; }
}

@media(max-width:640px){
  .sfs-hero { border-radius: 20px; border-width: 1px; margin-top: 12px; }
  .sfs-grid { grid-template-columns: 1fr; padding: 36px 18px 24px; gap: 28px; }

  /* Typography */
  .sfs-h1 { font-size: 38px; letter-spacing: -1.8px; line-height: 1.0; margin-bottom: 0; }
  .sfs-h1 .outline { -webkit-text-stroke-width: 1.5px; }
  .sfs-sub { font-size: 13.5px; line-height: 1.78; margin-bottom: 20px; }

  /* Badge below heading */
  .sfs-badge {
    font-size: 8.5px; margin-top: 12px; margin-bottom: 18px;
    padding: 7px 12px 7px 9px; border-radius: 10px;
  }
  .sfs-badge-sep { height: 12px; }
  .sfs-badge-count { font-size: 8.5px; }

  /* Feature cards — horizontal row on mobile */
  .sfs-feats { flex-direction: column; gap: 9px; margin-bottom: 20px; }
  .sfs-feat {
    padding: 14px 14px; border-radius: 16px;
    flex-direction: row; align-items: center; gap: 13px;
  }
  .sfs-feat-ico { margin-bottom: 0; flex-shrink: 0; width: 40px; height: 40px; border-radius: 12px; }
  .sfs-feat h4 { font-size: 13px; margin-bottom: 3px; }
  .sfs-feat p  { font-size: 11px; }

  /* Buttons */
  .sfs-hero-actions { flex-direction: column; gap: 10px; margin-bottom: 20px; align-items: stretch; }
  .sfs-btn-main { padding: 15px 20px; font-size: 14px; border-radius: 13px; justify-content: center; }
  .sfs-btn-sec  { padding: 14px 20px; font-size: 13.5px; border-radius: 13px; justify-content: center; }

  /* Stats */
  .sfs-stats { gap: 12px; flex-wrap: wrap; }
  .sfs-stat-num { font-size: 18px; }
  .sfs-stat-lbl { font-size: 9.5px; }
  .sfs-stat-div { height: 28px; }

  /* Right section — bigger, more breathing room */
  .sfs-right { min-height: 540px; overflow: visible; }
  .sfs-stage { min-height: 540px !important; }

  /* Phone — significantly bigger on mobile */
  .sfs-phone { width: 265px; }
  .sfs-phone-frame { border-radius: 50px; }
  .sfs-phone-inner { border-radius: 47px; }
  .sfs-screen { border-radius: 0 0 46px 46px; padding: 13px 11px 18px; }
  .sfs-notch { width: 78px; height: 23px; border-radius: 0 0 18px 18px; }
  .sfs-notch-cam { width: 9px; height: 9px; }
  .sfs-notch-row { height: 29px; }
  .sfs-status-bar { padding: 0 4px 8px; }
  .sfs-status-time { font-size: 9.5px; }
  .sfs-avatar { width: 62px; height: 62px; }
  .sfs-avatar-wrap { margin-bottom: 9px; }
  .sfs-verified { font-size: 7.5px; margin-bottom: 9px; padding: 4px 10px; }
  .sfs-owner-name { font-size: 16px; }
  .sfs-owner-label { font-size: 10px; margin-bottom: 12px; }
  .sfs-row { padding: 4.5px 0; }
  .sfs-row-ico { width: 25px; height: 25px; font-size: 10px; border-radius: 8px; }
  .sfs-row-lbl { font-size: 6.5px; }
  .sfs-row-val { font-size: 9px; }
  .sfs-home-ind { margin-top: 12px; width: 80px; }

  /* Right floating elements */
  .sfs-shield-badge { width: 72px; height: 72px; top: 16px; right: 10px; }
  .sfs-lock { width: 46px; height: 46px; font-size: 20px; right: -4px; }
  .sfs-ring-1 { width: 280px; height: 280px; }
  .sfs-ring-2, .sfs-ring-3 { display: none; }

  /* Floating cards — well positioned, not clipped */
  .sfs-alert-badge { left: 2px; top: 76px; padding: 8px 11px; border-radius: 13px; transform: none; }
  .sfs-alert-ico { width: 30px; height: 30px; font-size: 14px; border-radius: 9px; }
  .sfs-alert-text h5 { font-size: 10.5px; }
  .sfs-alert-text p  { font-size: 8.5px; }

  .sfs-scan-badge { right: 2px; bottom: 80px; padding: 9px 13px; border-radius: 12px; transform: none; }
  .sfs-scan-badge-ico { font-size: 15px; }
  .sfs-scan-badge-text h5 { font-size: 10.5px; }
  .sfs-scan-badge-text p  { font-size: 8.5px; }

  /* Scan stage */
  .sfs-asset-img { width: 300px; }
  .sfs-qr-card {
    right: -6px; bottom: 68px; min-width: 185px;
    padding: 10px 13px; border-radius: 17px; transform: none;
  }
  .sfs-qr-icon { width: 44px; height: 44px; font-size: 22px; border-radius: 11px; }
  .sfs-qr-card h4 { font-size: 12px; }
  .sfs-qr-card p  { font-size: 9px; }

  .sfs-status-pill { top: 52px; left: 4px; padding: 8px 12px; border-radius: 12px; transform: none; }
  .sfs-status-dot { width: 6px; height: 6px; }
  .sfs-hero-status-label { font-size: 10.5px; }
  .sfs-status-sub { font-size: 8.5px; }

  /* Ticker */
  .sfs-ticker { border-radius: 0 0 18px 18px; }
  .sfs-ticker-label { padding: 0 12px; font-size: 8px; letter-spacing: 1.5px; height: 42px; }
  .sfs-ti { font-size: 11px; padding: 0 14px; height: 42px; }

  /* BG */
  .sfs-globe-wrap { width: 200px; height: 200px; bottom: -60px; left: -50px; }
  .sfs-mesh { width: 300px; height: 300px; top: -30px; right: -30px; }
  .sfs-left { padding-right: 0; }
}

@media(max-width:380px){
  .sfs-h1 { font-size: 31px; letter-spacing: -1.2px; }
  .sfs-grid { padding: 22px 14px 16px; }
  .sfs-phone { width: 232px; }
  .sfs-phone-frame { border-radius: 44px; }
  .sfs-phone-inner { border-radius: 41px; }
  .sfs-screen { border-radius: 0 0 40px 40px; }
  .sfs-asset-img { width: 250px; }
  .sfs-right { min-height: 460px; }
  .sfs-shield-badge { width: 60px; height: 60px; top: 10px; right: 6px; }
  .sfs-lock { display: none; }
  .sfs-alert-badge { transform: scale(0.88); transform-origin: top left; }
  .sfs-scan-badge { transform: scale(0.88); transform-origin: bottom right; }
}
`,fg=Array.from({length:16},(e,t)=>({id:t,x:`${(t*37+11)%100}%`,y:`${(t*53+7)%100}%`,size:`${t%3+2}px`,delay:`${t*.7%6}s`,duration:`${8+t%5}s`,opacity:.09+t%4*.07}));function pg(){return i.jsxs(i.Fragment,{children:[fg.map(e=>i.jsx("div",{className:"sfs-particle",style:{left:e.x,top:e.y,width:e.size,height:e.size,opacity:e.opacity,animation:`particleDrift ${e.duration} ease-in-out infinite ${e.delay}`}},e.id)),i.jsx("style",{children:"@keyframes particleDrift{0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(8px,-11px) scale(1.3);}66%{transform:translate(-6px,7px) scale(0.7);}}"})]})}function hg(){const e=[];for(let t=0;t<=12;t++)e.push(i.jsx("line",{x1:"0",y1:t*50,x2:"600",y2:t*50,stroke:"rgba(46,189,58,.08)",strokeWidth:".8"},`h${t}`),i.jsx("line",{x1:t*50,y1:"0",x2:t*50,y2:"600",stroke:"rgba(46,189,58,.08)",strokeWidth:".8"},`v${t}`));return e.push(i.jsx("line",{x1:"0",y1:"0",x2:"600",y2:"600",stroke:"rgba(46,189,58,.05)",strokeWidth:"1"},"d1"),i.jsx("line",{x1:"600",y1:"0",x2:"0",y2:"600",stroke:"rgba(46,189,58,.05)",strokeWidth:"1"},"d2")),i.jsx("svg",{className:"sfs-mesh",viewBox:"0 0 600 600",xmlns:"http://www.w3.org/2000/svg",children:e})}function gg(){return i.jsx("div",{className:"sfs-globe-wrap",children:i.jsxs("svg",{viewBox:"0 0 300 300",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("defs",{children:i.jsxs("radialGradient",{id:"gGrad3",cx:"38%",cy:"32%",children:[i.jsx("stop",{offset:"0%",stopColor:"rgba(125,237,136,.28)"}),i.jsx("stop",{offset:"55%",stopColor:"rgba(46,189,58,.10)"}),i.jsx("stop",{offset:"100%",stopColor:"rgba(46,189,58,.02)"})]})}),i.jsx("circle",{cx:"150",cy:"150",r:"136",fill:"url(#gGrad3)",stroke:"rgba(46,189,58,.14)",strokeWidth:"1"}),[-90,-54,-18,18,54,90].map((e,t)=>{const n=150+e,r=Math.sqrt(Math.max(0,136*136-e*e));return i.jsx("ellipse",{cx:"150",cy:n,rx:r,ry:r*.26,fill:"none",stroke:"rgba(46,189,58,.10)",strokeWidth:".7"},t)}),[0,30,60,90,120,150].map((e,t)=>i.jsx("ellipse",{cx:"150",cy:"150",rx:"40",ry:"136",fill:"none",stroke:"rgba(46,189,58,.08)",strokeWidth:".7",transform:`rotate(${e} 150 150)`},t)),i.jsx("ellipse",{cx:"150",cy:"150",rx:"172",ry:"44",fill:"none",stroke:"rgba(46,189,58,.18)",strokeWidth:"1.2",strokeDasharray:"7 6",style:{animation:"orbitSpin3 14s linear infinite",transformOrigin:"150px 150px"}}),i.jsx("circle",{cx:"322",cy:"150",r:"7",fill:"rgba(46,189,58,.50)",style:{animation:"orbitSpin3 14s linear infinite",transformOrigin:"150px 150px"}}),i.jsx("style",{children:"@keyframes orbitSpin3{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"})]})})}function xg(){return i.jsxs("svg",{className:"sfs-shield-badge",viewBox:"0 0 110 110",xmlns:"http://www.w3.org/2000/svg",children:[i.jsxs("defs",{children:[i.jsxs("radialGradient",{id:"shGrad3",cx:"40%",cy:"30%",children:[i.jsx("stop",{offset:"0%",stopColor:"rgba(125,237,136,.99)"}),i.jsx("stop",{offset:"60%",stopColor:"rgba(46,189,58,.85)"}),i.jsx("stop",{offset:"100%",stopColor:"rgba(30,150,36,.75)"})]}),i.jsx("filter",{id:"shBlur2",children:i.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2"})})]}),i.jsx("path",{d:"M55 12 L87 25 L87 52 C87 70 72 84 55 92 C38 84 23 70 23 52 L23 25 Z",fill:"rgba(46,189,58,0.22)",filter:"url(#shBlur2)"}),i.jsx("path",{d:"M55 10 L88 24 L88 52 C88 70 73 84 55 92 C37 84 22 70 22 52 L22 24 Z",fill:"url(#shGrad3)",stroke:"rgba(255,255,255,.38)",strokeWidth:"1.5"}),i.jsx("path",{d:"M55 16 L82 28 L82 52 C82 67 69 79 55 86 C41 79 28 67 28 52 L28 28 Z",fill:"none",stroke:"rgba(255,255,255,.18)",strokeWidth:"1"}),i.jsx("polyline",{points:"38,55 50,67 72,43",fill:"none",stroke:"white",strokeWidth:"5.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Gl({asset:e,animClass:t}){const n=[{ico:"📞",lbl:"Phone",val:e.phone},{ico:"📧",lbl:"Email",val:e.email},{ico:"📍",lbl:"Address",val:e.address},{ico:"🆔",lbl:"Asset ID",val:e.asset},{ico:"🚨",lbl:"Emergency",val:e.emergency},{ico:"📅",lbl:"Registered",val:e.registered}];return i.jsx("div",{className:`sfs-phone ${t}`,children:i.jsxs("div",{className:"sfs-phone-frame",children:[i.jsx("div",{className:"sfs-phone-btn-l"}),i.jsx("div",{className:"sfs-phone-btn-l2"}),i.jsx("div",{className:"sfs-phone-btn-r"}),i.jsx("div",{className:"sfs-phone-glass"}),i.jsxs("div",{className:"sfs-phone-inner",children:[i.jsx("div",{className:"sfs-notch-row",children:i.jsxs("div",{className:"sfs-notch",children:[i.jsx("div",{className:"sfs-notch-cam"}),i.jsx("div",{className:"sfs-notch-pill"})]})}),i.jsxs("div",{className:"sfs-screen",children:[i.jsxs("div",{className:"sfs-status-bar",children:[i.jsx("span",{className:"sfs-status-time",children:"9:41"}),i.jsxs("div",{className:"sfs-status-icons",children:[i.jsx("div",{className:"sfs-signal",children:[6,9,12,15].map((r,s)=>i.jsx("div",{className:"sfs-signal-bar",style:{height:`${r}px`}},s))}),i.jsx("div",{className:"sfs-battery",children:i.jsx("div",{className:"sfs-battery-fill"})})]})]}),i.jsxs("div",{className:"sfs-verified",children:[i.jsx("div",{className:"sfs-vdot"})," Verified Owner"]}),i.jsxs("div",{className:"sfs-avatar-wrap",children:[i.jsx("div",{className:"sfs-avatar-glow"}),i.jsx("div",{className:"sfs-avatar-glow-inner"}),i.jsx("img",{src:e.avatar,alt:"Owner",className:"sfs-avatar"})]}),i.jsx("div",{className:"sfs-owner-name",children:e.owner}),i.jsx("div",{className:"sfs-owner-label",children:e.label}),i.jsx("div",{className:"sfs-divider"}),i.jsx("div",{className:"sfs-rows-wrap",children:n.map(r=>i.jsxs("div",{className:"sfs-row",children:[i.jsx("div",{className:"sfs-row-ico",children:r.ico}),i.jsxs("div",{children:[i.jsx("div",{className:"sfs-row-lbl",children:r.lbl}),i.jsx("div",{className:"sfs-row-val",children:r.val})]})]},r.lbl))}),i.jsx("div",{className:"sfs-home-ind"})]})]})]})})}function Kl({asset:e,animClass:t}){return i.jsxs("div",{className:`sfs-scan-stage ${t}`,children:[i.jsx("div",{className:"sfs-glow"}),i.jsx("div",{className:"sfs-ring sfs-ring-1"}),i.jsx("div",{className:"sfs-ring sfs-ring-2"}),i.jsx("div",{className:"sfs-ring sfs-ring-3"}),i.jsx("img",{src:e.img,alt:e.label,className:"sfs-asset-img"}),i.jsx("div",{className:"sfs-scanline"}),i.jsxs("div",{className:"sfs-qr-card",children:[i.jsx("div",{className:"sfs-qr-icon",children:"🔐"}),i.jsxs("div",{children:[i.jsx("h4",{children:e.label}),i.jsxs("p",{children:["QR & NFC Protected",i.jsx("br",{}),"Secure Identification"]})]})]}),i.jsxs("div",{className:"sfs-status-pill",children:[i.jsx("div",{className:"sfs-status-dot"}),i.jsxs("div",{children:[i.jsx("div",{className:"sfs-hero-status-label",children:"Scanning…"}),i.jsx("div",{className:"sfs-status-sub",children:"SFS Shield Active"})]})]})]})}function mg(e,t=2e3){const[n,r]=y.useState(0);return y.useEffect(()=>{let s=null;const o=a=>{s||(s=a);const l=Math.min((a-s)/t,1);r(Math.floor(l*e)),l<1&&requestAnimationFrame(o)};requestAnimationFrame(o)},[e,t]),n}function bs({num:e,suffix:t,label:n}){const r=mg(e);return i.jsxs("div",{className:"sfs-stat",children:[i.jsxs("div",{className:"sfs-stat-num",children:[r.toLocaleString(),t]}),i.jsx("div",{className:"sfs-stat-lbl",children:n})]})}function yg(){const[e,t]=y.useState(0),[n,r]=y.useState("scan");y.useEffect(()=>{const a=setTimeout(()=>r("phone"),2400),l=setInterval(()=>{r("phone-out"),setTimeout(()=>{t(d=>(d+1)%Xl.length),r("scan")},360),setTimeout(()=>r("phone"),2800)},7800);return()=>{clearTimeout(a),clearInterval(l)}},[]);const s=[...ql,...ql],o=Xl[e];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:ug}),i.jsxs("div",{className:"sfs-hero",children:[i.jsxs("div",{className:"sfs-bg",children:[i.jsx(hg,{}),i.jsx(gg,{}),i.jsx(pg,{})]}),i.jsxs("div",{className:"sfs-grid",children:[i.jsxs("div",{className:"sfs-left",children:[i.jsxs("h1",{className:"sfs-h1",children:["Smart Protection",i.jsx("br",{}),"That ",i.jsx("span",{className:"green",children:"Connects"}),i.jsx("br",{}),i.jsx("span",{className:"green",children:"Your World"})]}),i.jsxs("div",{className:"sfs-badge",children:[i.jsx("div",{className:"sfs-badge-dot"}),"Live Protection Active",i.jsx("span",{className:"sfs-badge-sep"}),i.jsx("span",{className:"sfs-badge-count",children:"10,000+ Secured"})]}),i.jsx("p",{className:"sfs-sub",children:"Protect vehicles, bikes, luggage and valuables with next-generation QR + NFC verification. Instant owner alerts and live smart protection — all with a single scan."}),i.jsx("div",{className:"sfs-feats",children:[{ico:"🛡️",h:"Secure QR & NFC",p:"Military-grade encrypted ID protection system"},{ico:"📡",h:"Live Tracking",p:"Real-time alerts & continuous monitoring"},{ico:"🚨",h:"Emergency Access",p:"Instant verified owner identification"}].map(a=>i.jsxs("div",{className:"sfs-feat",children:[i.jsx("div",{className:"sfs-feat-ico",children:a.ico}),i.jsxs("div",{children:[i.jsx("h4",{children:a.h}),i.jsx("p",{children:a.p})]})]},a.h))}),i.jsxs("div",{className:"sfs-hero-actions",children:[i.jsx("button",{className:"sfs-btn-main",children:"🔐 Protect Your Assets"}),i.jsxs("button",{className:"sfs-btn-sec",children:[i.jsx("div",{className:"sfs-play-ring",children:"▶"}),"See How It Works"]})]}),i.jsxs("div",{className:"sfs-stats",children:[i.jsx(bs,{num:1e4,suffix:"+",label:"Assets Protected"}),i.jsx("div",{className:"sfs-stat-div"}),i.jsx(bs,{num:15e3,suffix:"+",label:"Scans Today"}),i.jsx("div",{className:"sfs-stat-div"}),i.jsx(bs,{num:50,suffix:"+",label:"Countries"}),i.jsx("div",{className:"sfs-stat-div"}),i.jsxs("div",{className:"sfs-stat",children:[i.jsx("div",{className:"sfs-stat-num",children:"4.9★"}),i.jsx("div",{className:"sfs-stat-lbl",children:"User Rating"})]})]})]}),i.jsxs("div",{className:"sfs-right",children:[i.jsx(xg,{}),i.jsx("div",{className:"sfs-lock",children:"🔒"}),i.jsxs("div",{className:"sfs-alert-badge",children:[i.jsx("div",{className:"sfs-alert-ico",children:"🔔"}),i.jsxs("div",{className:"sfs-alert-text",children:[i.jsx("h5",{children:"Owner Alerted!"}),i.jsx("p",{children:"Scan detected · 2s ago"})]})]}),i.jsxs("div",{className:"sfs-scan-badge",children:[i.jsx("div",{className:"sfs-scan-badge-ico",children:"📲"}),i.jsxs("div",{className:"sfs-scan-badge-text",children:[i.jsx("h5",{children:"15,234 Scans"}),i.jsx("p",{children:"Today worldwide"})]})]}),i.jsxs("div",{className:"sfs-stage",style:{minHeight:660},children:[n==="scan"&&i.jsx(Kl,{asset:o,animClass:"sfs-scan-in"}),n==="scan-out"&&i.jsx(Kl,{asset:o,animClass:"sfs-scan-out"}),n==="phone"&&i.jsx(Gl,{asset:o,animClass:"sfs-entering"}),n==="phone-out"&&i.jsx(Gl,{asset:o,animClass:"sfs-exiting"})]})]})]}),i.jsx("div",{className:"sfs-ticker",children:i.jsxs("div",{className:"sfs-ticker-inner",children:[i.jsx("div",{className:"sfs-ticker-label",children:"Live Updates"}),i.jsx("div",{className:"sfs-ticker-track",children:s.map((a,l)=>i.jsxs("div",{className:"sfs-ti",children:[a,l<s.length-1&&i.jsx("div",{className:"sfs-td"})]},l))})]})})]})]})}const Zl=[{title:"24/7",text:"Active Monitoring",icon:i.jsx(ko,{size:20})},{title:"50K+",text:"Daily QR Scans",icon:i.jsx(Rh,{size:20})},{title:"ISO 27001",text:"Security Certified",icon:i.jsx(Xh,{size:20})},{title:"99.9%",text:"System Uptime",icon:i.jsx(Ah,{size:20})}];function vg(){return i.jsxs("section",{className:"relative overflow-hidden py-20 bg-gradient-to-b from-[#f8fafc] via-[#f0fbf2] to-white",children:[i.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#2ebd3a]/10 blur-[140px]"}),i.jsx("div",{className:"absolute inset-0 opacity-[0.03]",children:i.jsx("div",{className:"w-full h-full",style:{backgroundImage:"radial-gradient(#2ebd3a 1px, transparent 1px)",backgroundSize:"28px 28px"}})}),i.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("div",{className:"flex justify-center mb-14",children:i.jsxs("div",{className:"inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[#e8f8eb] shadow-[0_10px_40px_rgba(46,189,58,0.08)]",children:[i.jsxs("div",{className:"relative flex items-center justify-center",children:[i.jsx("div",{className:"w-3 h-3 rounded-full bg-[#2ebd3a] animate-pulse"}),i.jsx("div",{className:"absolute w-3 h-3 rounded-full bg-[#2ebd3a] animate-ping opacity-30"})]}),i.jsx("span",{className:"text-xs sm:text-sm font-black tracking-[0.25em] uppercase text-slate-700",children:"Live Protection Metrics"})]})}),i.jsxs("div",{className:"mt-14 relative overflow-hidden rounded-[36px] border border-[#e8f8eb] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]",children:[i.jsx("div",{className:"absolute inset-[1px] rounded-[35px] border border-white/80 pointer-events-none"}),i.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-[#2ebd3a]/10 blur-[80px]"}),i.jsx("div",{className:"absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2ebd3a] to-transparent"}),i.jsx("div",{className:"relative grid grid-cols-2 md:grid-cols-4",children:Zl.map((e,t)=>i.jsxs("div",{className:`group relative px-8 py-10 text-center transition-all duration-300 hover:bg-[#e8f8eb]/40 cursor-pointer ${t!==Zl.length-1?"border-b md:border-b-0 md:border-r border-[#e8f8eb]":""}`,children:[i.jsx("div",{className:"mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2ebd3a] to-[#1b7a21] text-white flex items-center justify-center shadow-lg shadow-[#2ebd3a]/20 group-hover:scale-110 transition duration-500",children:e.icon}),i.jsx("h4",{className:"text-4xl font-black tracking-tight text-[#0B2545]",children:e.title}),i.jsx("p",{className:"mt-2 text-sm sm:text-base text-slate-500 font-medium",children:e.text}),i.jsx("div",{className:"mx-auto mt-5 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#2ebd3a] to-[#4bd557] group-hover:w-20 transition-all duration-500"})]},e.title))})]})]})]})}function bg(){return i.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{x:"0",y:"0",width:"7",height:"7",rx:"1",fill:"#0B2545"}),i.jsx("rect",{x:"1",y:"1",width:"5",height:"5",rx:"0.5",fill:"white"}),i.jsx("rect",{x:"2",y:"2",width:"3",height:"3",fill:"#0B2545"}),i.jsx("rect",{x:"14",y:"0",width:"7",height:"7",rx:"1",fill:"#0B2545"}),i.jsx("rect",{x:"15",y:"1",width:"5",height:"5",rx:"0.5",fill:"white"}),i.jsx("rect",{x:"16",y:"2",width:"3",height:"3",fill:"#0B2545"}),i.jsx("rect",{x:"0",y:"14",width:"7",height:"7",rx:"1",fill:"#0B2545"}),i.jsx("rect",{x:"1",y:"15",width:"5",height:"5",rx:"0.5",fill:"white"}),i.jsx("rect",{x:"2",y:"16",width:"3",height:"3",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"0",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"0",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"12",y:"0",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"2",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"2",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"9",y:"4",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"4",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"6",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"6",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"0",y:"8",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"3",y:"8",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"5",y:"8",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"8",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"8",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"13",y:"8",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"15",y:"8",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"18",y:"8",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"0",y:"10",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"2",y:"10",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"5",y:"10",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"9",y:"10",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"10",width:"3",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"15",y:"10",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"17",y:"10",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"0",y:"12",width:"3",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"4",y:"12",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"12",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"12",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"13",y:"12",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"16",y:"12",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"18",y:"12",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"14",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"14",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"13",y:"14",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"15",y:"14",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"17",y:"14",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"16",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"16",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"14",y:"16",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"16",y:"16",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"18",y:"16",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"18",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"18",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"14",y:"18",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"19",y:"18",width:"1",height:"2",fill:"#0B2545"})]})}function wg(){return i.jsxs("div",{style:{position:"relative",width:280,height:560,flexShrink:0},children:[i.jsx("div",{style:{position:"absolute",right:-50,top:"28%",background:"#2ebd3a",borderRadius:"50%",width:44,height:44,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(37,211,102,0.4)",zIndex:10},children:i.jsx(Ca,{size:22,color:"white",fill:"white"})}),i.jsx("div",{style:{position:"absolute",right:-44,top:"52%",background:"white",borderRadius:"50%",width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(0,0,0,0.15)",zIndex:10},children:i.jsx(dt,{size:18,color:"#0B2545"})}),i.jsxs("div",{style:{position:"absolute",inset:0,borderRadius:46,background:"linear-gradient(160deg, #5a5a5a 0%, #3a3a3a 30%, #2a2a2a 60%, #1e1e1e 100%)",boxShadow:`
          0 0 0 1px #666 inset,
          2px 4px 0 0 #555 inset,
          -1px -2px 0 0 #111 inset,
          0 30px 80px rgba(0,0,0,0.55),
          0 8px 24px rgba(0,0,0,0.35),
          0 2px 6px rgba(0,0,0,0.25)
        `},children:[i.jsx("div",{style:{position:"absolute",inset:0,borderRadius:46,background:"linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 40%)",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",left:-3,top:120,width:3,height:34,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",left:-3,top:165,width:3,height:34,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",left:-3,top:88,width:3,height:22,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",right:-3,top:140,width:3,height:70,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"0 2px 2px 0",boxShadow:"1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",inset:6,borderRadius:41,background:"#0a0a0a",overflow:"hidden"},children:i.jsxs("div",{style:{position:"absolute",inset:3,borderRadius:38,background:"white",overflow:"hidden",display:"flex",flexDirection:"column"},children:[i.jsx("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",width:100,height:30,background:"#0a0a0a",borderRadius:20,zIndex:20}}),i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 20px 0",fontSize:10,fontWeight:700,color:"#111"},children:[i.jsx("span",{children:"9:41"}),i.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[i.jsxs("svg",{width:"14",height:"10",viewBox:"0 0 14 10",children:[i.jsx("rect",{x:"0",y:"6",width:"2.5",height:"4",rx:"0.5",fill:"#111"}),i.jsx("rect",{x:"3.5",y:"4",width:"2.5",height:"6",rx:"0.5",fill:"#111"}),i.jsx("rect",{x:"7",y:"2",width:"2.5",height:"8",rx:"0.5",fill:"#111"}),i.jsx("rect",{x:"10.5",y:"0",width:"2.5",height:"10",rx:"0.5",fill:"#111"})]}),i.jsxs("svg",{width:"13",height:"10",viewBox:"0 0 13 10",children:[i.jsx("path",{d:"M6.5 7.5 L6.5 9.5",stroke:"#111",strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("path",{d:"M4 5.5 Q6.5 3.5 9 5.5",stroke:"#111",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"}),i.jsx("path",{d:"M1.5 3 Q6.5 -0.5 11.5 3",stroke:"#111",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"})]}),i.jsxs("svg",{width:"22",height:"11",viewBox:"0 0 22 11",children:[i.jsx("rect",{x:"0",y:"1",width:"19",height:"9",rx:"2",stroke:"#111",strokeWidth:"1",fill:"none"}),i.jsx("rect",{x:"19.5",y:"3.5",width:"2",height:"4",rx:"1",fill:"#111"}),i.jsx("rect",{x:"1.5",y:"2.5",width:"15",height:"6",rx:"1",fill:"#111"})]})]})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px 6px",borderBottom:"1px solid #f0f0f0"},children:[i.jsx(Ih,{size:18,color:"#333",strokeWidth:2.5}),i.jsxs("div",{style:{textAlign:"center"},children:[i.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#111"},children:"Found Item"}),i.jsxs("div",{style:{fontSize:9,color:"#777",display:"flex",alignItems:"center",gap:3},children:[i.jsx(Ui,{size:9,color:"#777"}),"Scan QR Code"]})]}),i.jsx("div",{style:{width:18}})]}),i.jsxs("div",{style:{margin:"10px 12px 6px",background:"#e8f8eb",borderRadius:12,padding:"10px 12px",border:"1px solid #e8f8eb",display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{background:"white",borderRadius:8,padding:4,border:"1px solid #ddd",flexShrink:0},children:i.jsx(bg,{})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:13,fontWeight:800,color:"#0B2545",letterSpacing:"-0.3px"},children:"PET-7G4K-2L8M"}),i.jsx("div",{style:{fontSize:10,color:"#2ebd3a",marginBottom:4},children:"Pet ID Tag"}),i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:3,background:"#2ebd3a",borderRadius:4,padding:"2px 6px",fontSize:9,fontWeight:700,color:"white"},children:[i.jsx(wo,{size:8,color:"white",fill:"white"}),"Verified"]})]})]}),i.jsxs("div",{style:{padding:"0 12px",flex:1,display:"flex",flexDirection:"column",gap:0},children:[i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0",borderBottom:"1px solid #f5f5f5"},children:[i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[i.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#e8f8eb",border:"1.5px solid #2ebd3a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(ct,{size:12,color:"#0B2545"})}),i.jsx("div",{style:{width:1.5,height:28,background:"#e0e0e0"}})]}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"OTP Verification"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"Enter OTP sent to"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"+91 98765 43210"})]}),i.jsx("div",{style:{background:"#f3f4f6",borderRadius:6,padding:"4px 8px",fontSize:13,fontWeight:800,color:"#0B2545",letterSpacing:1},children:"5321"})]}),i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0",borderBottom:"1px solid #f5f5f5"},children:[i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[i.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#e8f8eb",border:"1.5px solid #2ebd3a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(dt,{size:12,color:"#0B2545"})}),i.jsx("div",{style:{width:1.5,height:28,background:"#e0e0e0"}})]}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"Owner Notified"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"WhatsApp alert sent"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"instantly"})]}),i.jsx(wo,{size:16,color:"#2ebd3a",fill:"#2ebd3a",style:{flexShrink:0,marginTop:4}})]}),i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0"},children:[i.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#e8f8eb",border:"1.5px solid #2ebd3a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(yn,{size:12,color:"#0B2545"})}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"Live Location"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"Sharing location"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"for safe return"})]}),i.jsxs("div",{style:{width:42,height:38,borderRadius:6,background:"linear-gradient(135deg, #e8f8eb 0%, #e8f8eb 100%)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,overflow:"hidden",position:"relative",border:"1px solid #7ded88"},children:[i.jsxs("div",{style:{position:"absolute",inset:0},children:[i.jsx("div",{style:{position:"absolute",left:"33%",top:0,bottom:0,width:1,background:"rgba(255,255,255,0.5)"}}),i.jsx("div",{style:{position:"absolute",left:"66%",top:0,bottom:0,width:1,background:"rgba(255,255,255,0.5)"}}),i.jsx("div",{style:{position:"absolute",top:"33%",left:0,right:0,height:1,background:"rgba(255,255,255,0.5)"}}),i.jsx("div",{style:{position:"absolute",top:"66%",left:0,right:0,height:1,background:"rgba(255,255,255,0.5)"}})]}),i.jsx(yn,{size:14,color:"#c62828",fill:"#c62828"})]})]})]}),i.jsxs("div",{style:{margin:"6px 10px 10px",background:"linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)",borderRadius:14,padding:"12px 14px",display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(Oe,{size:18,color:"white"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:12,fontWeight:800,color:"white"},children:"Protection Active"}),i.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.75)"},children:"We've got it covered 24/7"})]})]})]})})]})]})}function kg({number:e,icon:t,title:n,description:r,badge:s,badgeIcon:o}){const[a,l]=y.useState(!1),[d,c]=y.useState(!1);return i.jsxs("div",{onMouseEnter:()=>l(!0),onMouseLeave:()=>{l(!1),c(!1)},onMouseDown:()=>c(!0),onMouseUp:()=>c(!1),onTouchStart:()=>c(!0),onTouchEnd:()=>c(!1),style:{background:d?"#e8f8eb":a?"#f8fafc":"white",borderRadius:20,padding:"28px 22px 20px",flex:1,minWidth:0,position:"relative",boxShadow:a?"0 16px 48px rgba(46,189,58,0.18), 0 2px 8px rgba(0,0,0,0.05)":"0 4px 20px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",transform:d?"translateY(-2px) scale(0.98)":a?"translateY(-6px) scale(1.02)":"translateY(0) scale(1)",transition:"all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",border:d?"2px solid #0B2545":a?"2px solid #2ebd3a":"2px solid #e8f8eb",display:"flex",flexDirection:"column",cursor:"pointer"},children:[i.jsx("div",{style:{position:"absolute",top:-16,left:"50%",transform:"translateX(-50%)",width:34,height:34,borderRadius:"50%",background:"linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:800,color:"white",boxShadow:"0 4px 12px rgba(6,78,59,0.35)",fontFamily:"Georgia, serif"},children:e}),i.jsx("div",{style:{width:62,height:62,borderRadius:"50%",background:a?"white":"linear-gradient(135deg, #e8f8eb 0%, #f8fafc 100%)",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px auto 16px",border:a?"1.5px solid #2ebd3a":"1.5px solid #7ded88",transition:"all 0.25s ease"},children:i.jsx(t,{size:26,color:"#2ebd3a",strokeWidth:1.8})}),i.jsx("h3",{style:{fontSize:16,fontWeight:800,color:"#0B2545",textAlign:"center",marginBottom:10,lineHeight:1.3,fontFamily:"Georgia, serif"},children:n}),i.jsx("p",{style:{fontSize:12.5,color:"#11355e",textAlign:"center",lineHeight:1.65,flex:1,marginBottom:14,opacity:.75},children:r}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:d?"white":"#e8f8eb",borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:700,color:"#2ebd3a",border:d?"1px solid #7ded88":"1px solid transparent",transition:"all 0.25s ease"},children:[i.jsx(o,{size:12,color:"#2ebd3a"}),s]})]})}function _u(){const[e,t]=y.useState(!1);y.useEffect(()=>{setTimeout(()=>t(!0),80)},[]);const n=[{number:"1",icon:tg,title:"Order Your QR Tag",description:"Choose the right protection plan for your need and place your order. We deliver premium weatherproof QR tags to your doorstep within 3–5 business days.",badge:"Delivered across India",badgeIcon:jo},{number:"2",icon:Ui,title:"Activate & Personalise",description:"Scan your tag to activate it, then fill in your contact details, emergency info, and any important notes. Takes less than 3 minutes — no tech skills needed.",badge:"Set up in 3 minutes",badgeIcon:Th},{number:"3",icon:Oe,title:"Stay Protected 24/7",description:"Attach the tag to your pet, vehicle, or valuables and you're done. Anyone who finds your item scans the code — you get a WhatsApp alert instantly.",badge:"Always-on protection",badgeIcon:vn}],r=[{icon:Lu,label:"Trusted by",value:"10,000+ Families"},{icon:()=>i.jsx("span",{style:{fontSize:18},children:"🇮🇳"}),label:"Made in India",value:"Premium Quality"},{icon:jo,label:"3–5 Day",value:"Fast Delivery"},{icon:Ca,label:"24/7",value:"WhatsApp Alerts"},{icon:ct,label:"Bank-level",value:"Data Security"}];return i.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(160deg, #f8fafc 0%, #fafcfa 50%, #f8fafc 100%)",fontFamily:"'Segoe UI', system-ui, sans-serif",overflow:"hidden"},children:[i.jsx("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"radial-gradient(circle, #7ded88 1px, transparent 1px)",backgroundSize:"28px 28px",opacity:.35}}),i.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:1140,margin:"0 auto",padding:"52px 28px 48px"},children:[i.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:22,opacity:e?1:0,transform:e?"translateY(0)":"translateY(-12px)",transition:"all 0.5s ease"},children:i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"white",borderRadius:40,padding:"7px 18px",fontSize:11,fontWeight:700,color:"#2ebd3a",letterSpacing:"0.08em",textTransform:"uppercase",boxShadow:"0 2px 10px rgba(0,0,0,0.08)",border:"1px solid #7ded88"},children:[i.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:"#2ebd3a",boxShadow:"0 0 0 3px rgba(22,101,52,0.2)"}}),"Simple Process"]})}),i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:48,flexWrap:"wrap"},children:[i.jsxs("div",{style:{flex:"1 1 520px",opacity:e?1:0,transform:e?"translateX(0)":"translateX(-24px)",transition:"all 0.6s ease 0.1s"},children:[i.jsxs("h1",{style:{fontSize:"clamp(32px, 5vw, 52px)",fontWeight:900,color:"#0B2545",lineHeight:1.15,marginBottom:14,fontFamily:"Georgia, 'Times New Roman', serif"},children:["Up and Running in",i.jsx("br",{}),i.jsx("span",{style:{color:"#2ebd3a"},children:"3 Easy Steps"})]}),i.jsxs("p",{style:{fontSize:15,color:"#11355e",marginBottom:36,lineHeight:1.6,maxWidth:520,opacity:.7},children:["No complicated setup. No technical knowledge needed.",i.jsx("br",{}),"Just order, activate, and relax."]}),i.jsxs("div",{style:{position:"relative",display:"flex",gap:16,flexWrap:"wrap"},children:[i.jsx("div",{style:{position:"absolute",top:"50%",left:"calc(33.33% - 8px)",right:"calc(33.33% - 8px)",height:0,borderTop:"2px dashed #7ded88",zIndex:0,pointerEvents:"none"}}),n.map((s,o)=>i.jsx(kg,{...s},o))]}),i.jsxs("div",{style:{marginTop:28,background:"white",borderRadius:18,padding:"18px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,flexWrap:"wrap",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",border:"1px solid #e8f8eb"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"#e8f8eb",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(ct,{size:20,color:"#2ebd3a"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:14,fontWeight:800,color:"#0B2545"},children:"Peace of mind in 3 simple steps"}),i.jsx("div",{style:{fontSize:11.5,color:"#11355e",opacity:.6},children:"Join thousands of smart families who trust our QR protection."})]})]}),i.jsxs("button",{style:{background:"linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)",color:"white",border:"none",borderRadius:12,padding:"13px 24px",fontSize:13.5,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(6,78,59,0.35)",whiteSpace:"nowrap",transition:"transform 0.15s ease"},onMouseEnter:s=>s.currentTarget.style.transform="scale(1.03)",onMouseLeave:s=>s.currentTarget.style.transform="scale(1)",children:["Start Protecting Now ",i.jsx(zu,{size:16})]})]})]}),i.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center",paddingTop:20,opacity:e?1:0,transform:e?"translateX(0)":"translateX(24px)",transition:"all 0.6s ease 0.15s"},children:i.jsx(wg,{})})]}),i.jsx("div",{style:{marginTop:48,background:"white",borderRadius:20,padding:"18px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,boxShadow:"0 4px 20px rgba(0,0,0,0.07)",border:"1px solid #e8f8eb",opacity:e?1:0,transform:e?"translateY(0)":"translateY(16px)",transition:"all 0.6s ease 0.35s"},children:r.map((s,o)=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,flex:"1 1 140px",justifyContent:"center",padding:"4px 0",borderRight:o<r.length-1?"1px solid #e8f8eb":"none"},children:[i.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:"#e8f8eb",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:typeof s.icon=="function"&&s.icon.toString().includes("span")?i.jsx(s.icon,{}):i.jsx(s.icon,{size:16,color:"#2ebd3a"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:10,color:"#11355e",opacity:.6},children:s.label}),i.jsx("div",{style:{fontSize:12.5,fontWeight:800,color:"#0B2545"},children:s.value})]})]},o))})]})]})}function jg(){return i.jsxs("section",{style:{background:"linear-gradient(135deg,#0B2545 0%,#2ebd3a 50%,#081c35 100%)",padding:"90px 0",overflow:"hidden",position:"relative"},children:[i.jsx("div",{style:{position:"absolute",inset:0,opacity:.07,backgroundImage:"radial-gradient(circle, #ffffff 1px, transparent 1px)",backgroundSize:"28px 28px",pointerEvents:"none"}}),i.jsx("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1},children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center"},className:"nfc-grid",children:[i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsxs("div",{style:{position:"relative",width:320,height:320},children:[[1,2,3].map(e=>i.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",border:"1.5px solid rgba(232, 248, 235,0.3)",animation:`nfcPulse ${1.6+e*.5}s ease-out ${e*.4}s infinite`}},e)),i.jsx("div",{style:{position:"absolute",inset:"60px",background:"linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.08))",backdropFilter:"blur(12px)",borderRadius:"50%",border:"1.5px solid rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 60px rgba(232, 248, 235,0.2)"},children:i.jsxs("div",{style:{textAlign:"center"},children:[i.jsx(cn,{size:52,color:"#e8f8eb",strokeWidth:1.5}),i.jsx("div",{style:{color:"#e8f8eb",fontWeight:800,fontSize:14,marginTop:8},children:"NFC Ready"})]})}),[{top:"5%",left:"50%",label:"Tap to Scan",icon:i.jsx(Vl,{size:16,color:"#2ebd3a"})},{top:"50%",left:"5%",label:"Instant Alert",icon:i.jsx(dt,{size:16,color:"#2ebd3a"})},{bottom:"8%",right:"10%",label:"No App Needed",icon:i.jsx(vn,{size:16,color:"#2ebd3a"})}].map(({top:e,left:t,bottom:n,right:r,label:s,icon:o})=>i.jsxs("div",{style:{position:"absolute",top:e,left:t,bottom:n,right:r,transform:"translate(-50%,-50%)",background:"#e8f8eb",borderRadius:12,padding:"8px 14px",display:"flex",alignItems:"center",gap:8,fontSize:12,fontWeight:700,color:"#2ebd3a",boxShadow:"0 8px 24px rgba(6,78,59,0.3)",whiteSpace:"nowrap"},children:[o," ",s]},s))]})}),i.jsxs("div",{children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 18px",borderRadius:100,background:"rgba(232, 248, 235,0.15)",border:"1px solid rgba(232, 248, 235,0.3)",marginBottom:20},children:[i.jsx(cn,{size:14,color:"#e8f8eb"}),i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#e8f8eb"},children:"🔥 New Feature"})]}),i.jsxs("h2",{style:{fontSize:"clamp(28px,3.5vw,42px)",fontWeight:900,color:"#f8fafc",margin:"0 0 16px",lineHeight:1.1},children:["NFC Integration —",i.jsx("span",{style:{color:"#7ded88"},children:" Just Tap & Go"})]}),i.jsx("p",{style:{color:"rgba(232, 248, 235,0.85)",fontSize:16,lineHeight:1.7,marginBottom:32},children:"Every ScanForSafe tag now includes an NFC chip. No QR scan needed — just tap any NFC phone and the owner's details appear instantly. Faster than ever."}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:32},children:[{icon:Vl,title:"Tap Any Phone",sub:"Works on all modern NFC phones"},{icon:vn,title:"Instant Access",sub:"Under 0.5 seconds response time"},{icon:Oe,title:"No App Needed",sub:"Browser-based — works anywhere"},{icon:Ui,title:"Dual Mode",sub:"NFC tap + QR scan both work"}].map(({icon:e,title:t,sub:n})=>i.jsxs("div",{style:{background:"rgba(255,255,255,0.08)",backdropFilter:"blur(8px)",borderRadius:16,padding:"14px 16px",border:"1px solid rgba(255,255,255,0.1)"},children:[i.jsx(e,{size:20,color:"#7ded88",style:{marginBottom:8}}),i.jsx("div",{style:{color:"#f8fafc",fontWeight:700,fontSize:14,marginBottom:4},children:t}),i.jsx("div",{style:{color:"rgba(232, 248, 235,0.65)",fontSize:12},children:n})]},t))}),i.jsxs("div",{style:{background:"rgba(232, 248, 235,0.1)",border:"1px solid rgba(232, 248, 235,0.2)",borderRadius:16,padding:"16px 20px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"#e8f8eb",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(cn,{size:22,color:"#2ebd3a"})}),i.jsxs("div",{children:[i.jsx("div",{style:{color:"#f8fafc",fontWeight:700,fontSize:14},children:"Available on all new tags"}),i.jsx("div",{style:{color:"rgba(232, 248, 235,0.7)",fontSize:12,marginTop:3},children:"Order a new ScanForSafe tag to get NFC + QR dual protection"})]})]})]})]})}),i.jsx("style",{children:`
        @keyframes nfcPulse {
          0%   { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @media (max-width: 768px) {
          .nfc-grid { grid-template-columns: 1fr !important; }
        }
      `})]})}function Sg(){return i.jsxs("section",{style:{background:"linear-gradient(180deg,#f8fafc 0%,#e8f8eb 100%)",padding:"90px 0"},children:[i.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:52},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#fff",border:"1.5px solid #e8f8eb",marginBottom:16,boxShadow:"0 2px 8px rgba(22,101,52,0.08)"},children:[i.jsx(Zr,{size:14,color:"#2ebd3a",fill:"#2ebd3a"}),i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#2ebd3a"},children:"🆕 Senior Citizen Care"})]}),i.jsxs("h2",{style:{fontSize:"clamp(28px,4vw,44px)",fontWeight:900,color:"#0B2545",margin:"0 0 14px"},children:["Emergency Protection for",i.jsx("span",{style:{color:"#2ebd3a"},children:" Senior Citizens"})]}),i.jsx("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:540,margin:"0 auto",lineHeight:1.7},children:"One scan gives responders instant access to medical details, blood group, and emergency contacts — no smartphone needed"})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center"},className:"senior-grid",children:[i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsxs("div",{style:{background:"#fff",borderRadius:28,padding:28,maxWidth:360,width:"100%",boxShadow:"0 20px 60px rgba(6,78,59,0.12)",border:"1.5px solid #e8f8eb"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:24,paddingBottom:20,borderBottom:"1px solid #f8fafc"},children:[i.jsx("div",{style:{width:60,height:60,borderRadius:"50%",background:"linear-gradient(135deg,#2ebd3a,#0B2545)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 20px rgba(22,101,52,0.25)"},children:i.jsx(So,{size:28,color:"#e8f8eb"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:800,fontSize:18,color:"#0B2545"},children:"Ramesh Nair"}),i.jsx("div",{style:{fontSize:13,color:"#6b7280",marginTop:2},children:"Age: 72 • Nellore, AP"}),i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,marginTop:4,background:"#e8f8eb",borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:700,color:"#2ebd3a"},children:[i.jsx(Oe,{size:10})," Protected"]})]})]}),i.jsxs("div",{style:{marginBottom:18},children:[i.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:10},children:"Medical Information"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[{label:"Blood Group",value:"B+",icon:i.jsx(Lh,{size:13,color:"#ef4444"})},{label:"Condition",value:"Diabetic",icon:i.jsx(Zr,{size:13,color:"#f97316"})},{label:"Allergies",value:"Penicillin",icon:i.jsx(Ql,{size:13,color:"#eab308"})},{label:"Doctor",value:"Dr. Reddy",icon:i.jsx(So,{size:13,color:"#2ebd3a"})}].map(({label:e,value:t,icon:n})=>i.jsxs("div",{style:{background:"#f9fafb",borderRadius:10,padding:"10px 12px",border:"1px solid #f8fafc"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:4},children:[n,i.jsx("span",{style:{fontSize:10,color:"#9ca3af",fontWeight:600},children:e})]}),i.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#11355e"},children:t})]},e))})]}),i.jsxs("div",{style:{marginBottom:18},children:[i.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:10},children:"Emergency Contacts"}),[{name:"Suresh Nair (Son)",phone:"+91 98765XXXXX"},{name:"Lakshmi Nair (Daughter)",phone:"+91 87654XXXXX"}].map(e=>i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 12px",background:"#f8fafc",borderRadius:10,marginBottom:6},children:[i.jsx("span",{style:{fontSize:13,fontWeight:600,color:"#11355e"},children:e.name}),i.jsxs("button",{style:{padding:"4px 12px",borderRadius:8,background:"#2ebd3a",color:"#fff",fontSize:11,fontWeight:700,border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[i.jsx(Mt,{size:11})," Call"]})]},e.name))]}),i.jsxs("div",{style:{display:"flex",gap:8},children:[i.jsxs("div",{style:{flex:1,background:"linear-gradient(135deg,#0B2545,#2ebd3a)",borderRadius:12,padding:"12px 0",display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[i.jsx(cn,{size:14,color:"#e8f8eb"}),i.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#e8f8eb"},children:"NFC Tap"})]}),i.jsxs("div",{style:{flex:1,background:"#f8fafc",borderRadius:12,padding:"12px 0",display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid #e8f8eb"},children:[i.jsx(Ui,{size:14,color:"#2ebd3a"}),i.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#2ebd3a"},children:"QR Scan"})]})]})]})}),i.jsx("div",{children:i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:18},children:[{icon:Zr,color:"#ef4444",bg:"#fef2f2",title:"Medical Profile",desc:"Blood group, conditions, allergies, medications, and doctor details — all accessible with one scan. Critical in emergencies."},{icon:Ql,color:"#f97316",bg:"#fff7ed",title:"Emergency Alert System",desc:"Tap or scan triggers an instant notification to all registered family members, with GPS location of the senior."},{icon:cn,color:"#2ebd3a",bg:"#f8fafc",title:"NFC + QR Dual Support",desc:"Works with both NFC tap and QR code scan. No app required for responders — opens in any browser instantly."},{icon:Oe,color:"#2ebd3a",bg:"#e8f8eb",title:"Wristband & Wallet Card",desc:"Available as a waterproof wristband or wallet-size card. Comfortable for daily use by senior citizens."}].map(({icon:e,color:t,bg:n,title:r,desc:s})=>i.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start",background:"#fff",borderRadius:18,padding:"18px 20px",border:"1px solid #e8f8eb",boxShadow:"0 2px 12px rgba(22,101,52,0.07)"},children:[i.jsx("div",{style:{width:44,height:44,borderRadius:12,background:n,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(e,{size:20,color:t})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:800,fontSize:15,color:"#0B2545",marginBottom:5},children:r}),i.jsx("div",{style:{fontSize:14,color:"#4b7a62",lineHeight:1.6},children:s})]})]},r))})})]})]}),i.jsx("style",{children:`
        @media (max-width: 768px) { .senior-grid { grid-template-columns: 1fr !important; } }
      `})]})}function Cg(e=.15){const t=y.useRef(null),[n,r]=y.useState(!1);return y.useEffect(()=>{const s=new IntersectionObserver(([o])=>{o.isIntersecting&&r(!0)},{threshold:e});return t.current&&s.observe(t.current),()=>s.disconnect()},[]),[t,n]}function Ln({children:e,delay:t=0,visible:n,style:r={}}){return i.jsx("div",{style:{opacity:n?1:0,transform:n?"translateY(0)":"translateY(32px)",transition:`opacity 0.6s ease ${t}ms, transform 0.6s cubic-bezier(0.34,1.2,0.64,1) ${t}ms`,...r},children:e})}function zg(){const[e,t]=Cg(.1),n=[{icon:vn,label:"Instant Scan",desc:"Under 2 seconds",color:"#f97316",bg:"#fff7ed"},{icon:cn,label:"Always Online",desc:"99.9% uptime",color:"#0891b2",bg:"#ecfeff"},{icon:hr,label:"Encrypted",desc:"Bank-level security",color:"#7c3aed",bg:"#f5f3ff"},{icon:Mt,label:"Multi-channel",desc:"App · SMS · WhatsApp",color:"#2ebd3a",bg:"#e8f8eb"}],r=[{icon:Si,title:"Vehicle Info",color:"#2ebd3a",bg:"#e8f8eb",badge:"Essential",badgeColor:"#2ebd3a",badgeBg:"#e8f8eb",items:["Registration Number","Make & Model","Color & Year","Insurance Details"]},{icon:Pu,title:"GPS Tracking",color:"#0891b2",bg:"#ecfeff",badge:"Live",badgeColor:"#0891b2",badgeBg:"#ecfeff",items:["Live scan location","Google Maps link","Scan history log","Last seen timestamp"]},{icon:dt,title:"Alert System",color:"#f97316",bg:"#fff7ed",badge:"Instant",badgeColor:"#f97316",badgeBg:"#fff7ed",items:["Instant app notification","WhatsApp for emergencies","SMS fallback alert","5 emergency contacts"]},{icon:Oe,title:"Security",color:"#7c3aed",bg:"#f5f3ff",badge:"Pro",badgeColor:"#7c3aed",badgeBg:"#f5f3ff",items:["Tamper-evident sticker","Privacy controls","Anti-theft mode","QR + NFC dual layer"]}];return i.jsxs("section",{ref:e,style:{background:"#ffffff",padding:"90px 0",overflow:"hidden"},children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:44},children:[i.jsx(Ln,{visible:t,delay:0,children:i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#e8f8eb",border:"1px solid #c6f0cc",marginBottom:18},children:[i.jsx(Si,{size:14,color:"#2ebd3a"}),i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#2ebd3a"},children:"Vehicle Protection"})]})}),i.jsx(Ln,{visible:t,delay:120,children:i.jsx("h2",{className:"animated-gradient-text",style:{fontSize:"clamp(30px,4.5vw,52px)",fontWeight:900,margin:"0 0 14px",lineHeight:1.15},children:"Vehicle Details & Protection"})}),i.jsx(Ln,{visible:t,delay:220,children:i.jsxs("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:520,margin:"0 auto",lineHeight:1.75},children:["Add your vehicle info once. Let the QR sticker do the rest — ",i.jsx("strong",{style:{color:"#0B2545"},children:"24/7 protection"}),", instant alerts, and GPS tracking"]})})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:14,marginBottom:36},children:n.map(({icon:s,label:o,desc:a,color:l,bg:d},c)=>i.jsx(Ln,{visible:t,delay:320+c*80,children:i.jsxs("div",{className:"highlight-card",style:{background:d,border:`1.5px solid ${l}33`,borderRadius:18,padding:"18px 20px",display:"flex",alignItems:"center",gap:14,transition:"all .3s cubic-bezier(0.34,1.2,0.64,1)",cursor:"default",boxShadow:`0 2px 12px ${l}14`,position:"relative",overflow:"hidden"},onMouseEnter:g=>{g.currentTarget.style.boxShadow=`0 12px 32px ${l}30`,g.currentTarget.style.borderColor=l},onMouseLeave:g=>{g.currentTarget.style.boxShadow=`0 2px 12px ${l}14`,g.currentTarget.style.borderColor=`${l}33`,g.currentTarget.style.transform=""},children:[i.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:3,background:l,borderRadius:"18px 0 0 18px"}}),i.jsx("div",{style:{width:44,height:44,borderRadius:13,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:`0 4px 12px ${l}22`,border:`1.5px solid ${l}22`},children:i.jsx(s,{size:21,color:l})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:14,fontWeight:800,color:"#0B2545",marginBottom:2},children:o}),i.jsx("div",{style:{fontSize:12,color:"#64748b",fontWeight:500},children:a})]})]})},o))}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(265px,1fr))",gap:20},children:r.map(({icon:s,title:o,color:a,bg:l,badge:d,badgeColor:c,badgeBg:g,items:p},x)=>i.jsx(Ln,{visible:t,delay:560+x*100,children:i.jsxs("div",{className:"feature-card",style:{background:"#fafafa",borderRadius:22,padding:"26px 24px 28px",border:"1.5px solid #e5e7eb",transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",cursor:"pointer",position:"relative",overflow:"hidden",height:"100%"},onMouseEnter:m=>{m.currentTarget.style.transform="translateY(-8px)",m.currentTarget.style.boxShadow=`0 24px 52px ${a}28`,m.currentTarget.style.borderColor=a,m.currentTarget.style.background="#fff"},onMouseLeave:m=>{m.currentTarget.style.transform="",m.currentTarget.style.boxShadow="",m.currentTarget.style.borderColor="#e5e7eb",m.currentTarget.style.background="#fafafa"},children:[i.jsx("div",{className:"card-top-line",style:{position:"absolute",top:0,left:0,height:3,width:"40%",background:`linear-gradient(90deg,${a},${a}55)`,borderRadius:"22px 22px 0 0",transition:"width 0.4s ease"}}),i.jsx("div",{style:{position:"absolute",bottom:-18,right:-18,width:80,height:80,borderRadius:"50%",background:`${a}10`,border:`2px solid ${a}18`}}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18},children:[i.jsx("div",{style:{width:52,height:52,borderRadius:15,background:l,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 4px 14px ${a}28`,animation:"float-up 3s ease-in-out infinite"},children:i.jsx(s,{size:25,color:a})}),i.jsx("span",{style:{background:g,color:c,fontSize:10,fontWeight:900,letterSpacing:".14em",padding:"5px 13px",borderRadius:999,textTransform:"uppercase",border:`1.5px solid ${a}40`,boxShadow:`0 2px 8px ${a}18`},children:d})]}),i.jsx("h3",{style:{margin:"0 0 6px",fontSize:19,fontWeight:900,color:"#0B2545",lineHeight:1.2},children:o}),i.jsx("div",{style:{width:32,height:3,background:`linear-gradient(90deg,${a},${a}44)`,borderRadius:999,marginBottom:16}}),i.jsx("ul",{style:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:10},children:p.map((m,v)=>i.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10,fontSize:13.5,color:"#374151",opacity:t?1:0,transform:t?"translateX(0)":"translateX(-12px)",transition:`opacity 0.5s ease ${700+x*100+v*60}ms, transform 0.5s ease ${700+x*100+v*60}ms`},children:[i.jsx("div",{style:{width:22,height:22,borderRadius:7,background:l,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:`1px solid ${a}33`},children:i.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:a}})}),m]},m))})]})},o))})]})]})}function Ng(){return i.jsxs(i.Fragment,{children:[i.jsx(yg,{}),i.jsx(vg,{}),i.jsx(_u,{}),i.jsx(zg,{}),i.jsx(Sg,{}),i.jsx(jg,{})]})}const Eg=[{icon:Mt,label:"Phone",value:"+91 XXXXX XXXXX",href:"tel:+91XXXXXXXXXX",color:"#0057b8",bg:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"#bfdbfe",emoji:"📞",desc:"Mon–Sat, 9am to 7pm"},{icon:Ca,label:"WhatsApp",value:"Chat with us instantly",href:"https://wa.me/91XXXXXXXXXX",color:"#2ebd3a",bg:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"#e8f8eb",emoji:"💬",desc:"Fastest — reply under 10 min"},{icon:Ru,label:"Email",value:"hello@scanforsafe.in",href:"mailto:hello@scanforsafe.in",color:"#7c3aed",bg:"linear-gradient(135deg,#f8fafc,#ede9fe)",border:"#ddd6fe",emoji:"✉️",desc:"Reply within 2 business hours"},{icon:yn,label:"Office",value:"Your City, State – 000000",href:null,color:"#e11d48",bg:"linear-gradient(135deg,#fff1f2,#ffe4e6)",border:"#fecdd3",emoji:"📍",desc:"Headquarters, India"}];function ws(e=.12){const t=y.useRef(null),[n,r]=y.useState(!1);return y.useEffect(()=>{const s=new IntersectionObserver(([o])=>{o.isIntersecting&&r(!0)},{threshold:e});return t.current&&s.observe(t.current),()=>s.disconnect()},[e]),[t,n]}function Rg(e,t=1800,n=!1){const[r,s]=y.useState(0);return y.useEffect(()=>{if(!n)return;let o=null;const a=l=>{o||(o=l);const d=Math.min((l-o)/t,1),c=1-Math.pow(1-d,3);s(Math.floor(c*e)),d<1&&requestAnimationFrame(a)};requestAnimationFrame(a)},[n,e,t]),r}function ks({num:e,suffix:t,label:n,active:r,delay:s}){const o=Rg(e,1600,r);return i.jsxs("div",{style:{textAlign:"center",opacity:r?1:0,transform:r?"translateY(0)":"translateY(20px)",transition:`opacity .6s ease ${s}s, transform .6s ease ${s}s`},children:[i.jsxs("div",{style:{fontFamily:"'Clash Display', 'Cabinet Grotesk', sans-serif",fontSize:28,fontWeight:800,color:"#fff",lineHeight:1,letterSpacing:"-0.04em"},children:[o,t]}),i.jsx("div",{style:{fontSize:11,color:"rgba(186,230,253,0.75)",fontWeight:600,marginTop:4,letterSpacing:".06em",textTransform:"uppercase"},children:n})]})}function Pg(){const[e,t]=y.useState({name:"",email:"",phone:"",message:""}),[n,r]=y.useState(!1),[s,o]=y.useState(!1),[a,l]=y.useState(!1),[d,c]=ws(),[g,p]=ws(),[x,m]=ws(.3);y.useEffect(()=>{const j=setTimeout(()=>l(!0),80);return()=>clearTimeout(j)},[]);const v=j=>t({...e,[j.target.name]:j.target.value}),w=j=>{j.preventDefault(),o(!0),setTimeout(()=>{o(!1),r(!0)},1600)};return i.jsxs("div",{style:{fontFamily:"'Instrument Sans', 'Cabin', sans-serif",overflowX:"hidden"},children:[i.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),i.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Fira+Code:wght@400;500&display=swap",rel:"stylesheet"}),i.jsx("style",{children:`
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
      `}),i.jsxs("section",{style:{position:"relative",overflow:"hidden",minHeight:520,paddingTop:110,paddingBottom:80,background:"linear-gradient(150deg, #020c1b 0%, #0a1f44 40%, #003d80 80%, #0057b8 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:[i.jsx("div",{style:{position:"absolute",width:560,height:560,borderRadius:"50%",background:"radial-gradient(circle, rgba(46, 189, 58,0.18) 0%, transparent 65%)",top:-180,right:-120,animation:"orbMove1 14s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle, rgba(0,87,184,0.30) 0%, transparent 65%)",bottom:-160,left:-100,animation:"orbMove2 18s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",backgroundSize:"32px 32px"}}),i.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:i.jsx("div",{style:{position:"absolute",left:0,right:0,height:3,background:"linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.0) 15%, rgba(74,222,128,0.9) 50%, rgba(74,222,128,0.0) 85%, transparent 100%)",animation:"scanBeam 4s ease-in-out infinite",filter:"blur(1px)"}})}),i.jsx("div",{style:{position:"absolute",top:70,left:"7%",width:64,height:64,border:"2px solid rgba(74,222,128,0.25)",borderRadius:16,transform:"rotate(15deg)",animation:"floatYSlow 6s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",bottom:80,right:"8%",width:44,height:44,border:"2px solid rgba(99,179,237,0.2)",borderRadius:"50%",animation:"floatY 5s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",top:120,right:"18%",width:28,height:28,background:"rgba(74,222,128,0.12)",borderRadius:8,transform:"rotate(30deg)",animation:"floatYSlow 7s ease-in-out .5s infinite",pointerEvents:"none"}}),i.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",padding:"0 24px",maxWidth:680},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:9,background:"rgba(46, 189, 58,0.14)",border:"1.5px solid rgba(74,222,128,0.35)",borderRadius:99,padding:"8px 20px",marginBottom:28,opacity:a?1:0,transform:a?"translateY(0) scale(1)":"translateY(-16px) scale(.9)",transition:"opacity .7s cubic-bezier(.34,1.3,.64,1), transform .7s cubic-bezier(.34,1.3,.64,1)",fontFamily:"'Fira Code', monospace"},children:[i.jsxs("span",{style:{position:"relative",display:"inline-block",width:8,height:8},children:[i.jsx("span",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"#4bd557",animation:"ripple 1.6s ease-out infinite"}}),i.jsx("span",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"#4bd557"}})]}),i.jsx("span",{style:{fontSize:11,fontWeight:500,color:"#7ded88",letterSpacing:".1em"},children:"team.online • avg_reply < 10min"})]}),i.jsxs("h1",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:"clamp(2.4rem, 5.5vw, 4rem)",fontWeight:800,color:"#fff",lineHeight:1.08,letterSpacing:"-0.04em",margin:"0 0 22px",opacity:a?1:0,transform:a?"translateY(0) skewY(0deg)":"translateY(40px) skewY(2deg)",transition:"opacity .75s ease .12s, transform .75s cubic-bezier(.34,1.3,.64,1) .12s"},children:["Talk to a",i.jsx("br",{}),i.jsx("span",{style:{background:"linear-gradient(90deg, #4bd557 0%, #7ded88 50%, #4bd557 100%)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:a?"glowPulse 3s ease-in-out infinite":"none",display:"inline-block"},children:"Real Human"})]}),i.jsx("p",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:16.5,color:"rgba(186,230,253,0.85)",lineHeight:1.75,maxWidth:500,margin:"0 auto 40px",opacity:a?1:0,transform:a?"translateY(0)":"translateY(24px)",transition:"opacity .7s ease .26s, transform .7s ease .26s"},children:"Questions about your QR tag, bulk orders, or just need help with setup? We're right here — real people, real fast replies."}),i.jsxs("div",{ref:x,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:48,paddingTop:28,borderTop:"1px solid rgba(255,255,255,0.08)"},children:[i.jsx(ks,{num:10,suffix:" min",label:"WhatsApp reply",active:m,delay:0}),i.jsx("div",{style:{width:1,height:32,background:"rgba(255,255,255,0.1)"}}),i.jsx(ks,{num:2,suffix:" hrs",label:"Email response",active:m,delay:.15}),i.jsx("div",{style:{width:1,height:32,background:"rgba(255,255,255,0.1)"}}),i.jsx(ks,{num:1e4,suffix:"+",label:"Happy users",active:m,delay:.3})]})]}),i.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,pointerEvents:"none"},children:i.jsx("svg",{viewBox:"0 0 1440 72",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:i.jsx("path",{d:"M0,48 C240,80 480,16 720,40 C960,64 1200,24 1440,48 L1440,72 L0,72 Z",fill:"#f1f5f9"})})})]}),i.jsx("section",{style:{background:"#f1f5f9",padding:"68px 24px 88px"},children:i.jsx("div",{style:{maxWidth:1100,margin:"0 auto"},children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.65fr",gap:36,alignItems:"start"},children:[i.jsxs("div",{ref:g,children:[i.jsxs("div",{style:{opacity:p?1:0,transform:p?"translateX(0)":"translateX(-24px)",transition:"opacity .55s ease, transform .55s ease",marginBottom:28},children:[i.jsxs("span",{style:{fontFamily:"'Fira Code', monospace",fontSize:10,fontWeight:500,letterSpacing:".18em",textTransform:"uppercase",color:"#0057b8",display:"flex",alignItems:"center",gap:8,marginBottom:10},children:[i.jsx("span",{style:{width:20,height:1.5,background:"#0057b8",display:"inline-block"}}),"contact channels"]}),i.jsxs("h2",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:26,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",margin:"0 0 10px"},children:["Reach Us",i.jsx("br",{}),"Your Way"]}),i.jsx("p",{style:{fontSize:14,color:"#64748b",lineHeight:1.75,fontWeight:400},children:"WhatsApp gets you the fastest reply. For detailed queries, email works great too."})]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:Eg.map(({icon:j,label:f,value:u,href:h,color:b,bg:S,border:E,emoji:R,desc:P},W)=>i.jsxs("div",{className:"cf-info-card",style:{background:S,borderColor:E,opacity:p?1:0,transform:p?"translateX(0)":"translateX(-28px)",transition:`opacity .5s ease ${W*.1+.1}s, transform .5s cubic-bezier(.34,1.3,.64,1) ${W*.1+.1}s, box-shadow .3s ease, transform .3s ease`},children:[i.jsx("div",{style:{width:48,height:48,borderRadius:14,background:"rgba(255,255,255,0.7)",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,boxShadow:"0 2px 8px rgba(0,0,0,0.06)",border:`1.5px solid ${E}`},children:R}),i.jsxs("div",{style:{flex:1},children:[i.jsxs("div",{style:{fontFamily:"'Fira Code', monospace",fontSize:9.5,fontWeight:500,letterSpacing:".14em",textTransform:"uppercase",color:b,marginBottom:3,display:"flex",alignItems:"center",gap:5},children:[i.jsx("span",{style:{width:14,height:1.5,background:b,display:"inline-block"}}),f]}),h?i.jsx("a",{href:h,style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:14,fontWeight:700,color:"#0B2545",textDecoration:"none",display:"block",marginBottom:3,transition:"color .2s"},onMouseEnter:T=>T.target.style.color=b,onMouseLeave:T=>T.target.style.color="#0B2545",children:u}):i.jsx("div",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:14,fontWeight:700,color:"#0B2545",marginBottom:3},children:u}),i.jsx("div",{style:{fontSize:11.5,color:"#94a3b8",fontWeight:400},children:P})]})]},f))}),i.jsxs("div",{style:{marginTop:18,padding:"14px 18px",borderRadius:14,background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"1.5px solid #e8f8eb",display:"flex",alignItems:"center",gap:10,opacity:p?1:0,transform:p?"translateY(0)":"translateY(12px)",transition:"opacity .5s ease .55s, transform .5s ease .55s"},children:[i.jsxs("div",{style:{position:"relative",flexShrink:0},children:[i.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"#2ebd3a"}}),i.jsx("div",{style:{position:"absolute",inset:-3,borderRadius:"50%",border:"1.5px solid rgba(46, 189, 58,0.3)",animation:"ripple 2s ease-out infinite"}})]}),i.jsx("span",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:12.5,fontWeight:600,color:"#0B2545"},children:"We always reply within 2 business hours — guaranteed."})]})]}),i.jsx("div",{ref:d,style:{background:"white",borderRadius:26,padding:"40px 38px",boxShadow:"0 24px 64px rgba(0,40,120,0.10), 0 4px 16px rgba(0,40,120,0.05)",border:"1.5px solid #e8edf3",opacity:c?1:0,transform:c?"translateY(0)":"translateY(36px)",transition:"opacity .65s ease .1s, transform .65s cubic-bezier(.34,1.3,.64,1) .1s"},children:n?i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"44px 0",textAlign:"center"},children:[i.jsx("div",{style:{width:88,height:88,borderRadius:"50%",background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:22,border:"2px solid #e8f8eb",animation:"checkPop .65s cubic-bezier(.34,1.3,.64,1) both",boxShadow:"0 0 0 8px rgba(46, 189, 58,0.08)"},children:i.jsx(wo,{style:{width:40,height:40,color:"#2ebd3a"}})}),i.jsx("h3",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:28,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",marginBottom:12},children:"Message Sent! 🎉"}),i.jsx("p",{style:{fontSize:14.5,color:"#64748b",lineHeight:1.8,maxWidth:340},children:"We've got your message and will reply within 2 hours. Check your inbox for a confirmation shortly."}),i.jsxs("div",{style:{marginTop:24,padding:"12px 28px",borderRadius:12,background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"1.5px solid #e8f8eb",fontFamily:"'Instrument Sans', sans-serif",fontSize:13.5,fontWeight:700,color:"#0B2545"},children:["Thanks, ",e.name||"friend","! We'll be in touch 👋"]})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{marginBottom:30},children:[i.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:99,padding:"5px 14px",marginBottom:14},children:i.jsx("span",{style:{fontFamily:"'Fira Code', monospace",fontSize:10,fontWeight:500,color:"#0057b8",letterSpacing:".1em"},children:">_ send_message.tsx"})}),i.jsxs("h2",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:25,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",margin:0},children:["We'd Love to Hear",i.jsx("br",{}),"From You"]}),i.jsx("div",{style:{height:3,borderRadius:99,marginTop:10,background:"linear-gradient(90deg, #0057b8, #2ebd3a)",animation:c?"lineGrow .8s cubic-bezier(.34,1.3,.64,1) .4s both":"none"}})]}),i.jsxs("form",{onSubmit:w,style:{display:"flex",flexDirection:"column",gap:18},children:[i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Full Name *"}),i.jsx("input",{type:"text",name:"name",required:!0,value:e.name,onChange:v,placeholder:"Rahul Sharma",className:"cf-input"})]}),i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Phone"}),i.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:v,placeholder:"+91 XXXXX XXXXX",className:"cf-input"})]})]}),i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Email Address *"}),i.jsx("input",{type:"email",name:"email",required:!0,value:e.email,onChange:v,placeholder:"rahul@example.com",className:"cf-input"})]}),i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Message *"}),i.jsx("textarea",{name:"message",required:!0,rows:5,value:e.message,onChange:v,placeholder:"Tell us how we can help — setup, bulk orders, feedback...",className:"cf-input",style:{resize:"none"}})]}),i.jsx("button",{type:"submit",disabled:s,className:"cf-submit",children:s?i.jsxs(i.Fragment,{children:[i.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",style:{animation:"spin 1s linear infinite",flexShrink:0},children:i.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),"Sending your message..."]}):i.jsxs(i.Fragment,{children:[i.jsx(za,{style:{width:16,height:16,flexShrink:0}}),"Send Message"]})}),i.jsx("p",{style:{textAlign:"center",fontFamily:"'Fira Code', monospace",fontSize:10.5,color:"#94a3b8",fontWeight:400,letterSpacing:".04em"},children:"🔒 encrypted • never shared • gdpr safe"})]})]})})]})})})]})}function Ig(){return i.jsxs("div",{className:"pt-20 min-h-screen bg-light-bg",children:[i.jsxs("div",{className:"hero-gradient py-16 text-white text-center",children:[i.jsx("h1",{className:"font-display font-extrabold text-4xl mb-4",children:"Privacy Policy"}),i.jsx("p",{className:"text-blue-200",children:"Last updated: January 2025"})]}),i.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:i.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8",children:[{title:"1. Information We Collect",content:"We collect information you provide directly to us when registering your QR tag, such as your name, phone number, email address, emergency contact details, and any additional information you choose to include in your QR profile. We also collect scan data including time, date, and approximate GPS location whenever your QR tag is scanned."},{title:"2. How We Use Your Information",content:"Your personal information is used solely to operate the ScanForSafe service — enabling finders to contact you and sending you real-time notifications. We do not sell, rent, or share your personal data with third parties for marketing purposes."},{title:"3. Data Shared When QR is Scanned",content:"When someone scans your QR code, they see only the information you have chosen to make visible in your profile settings. Your full phone number, email, and private details are protected by default — finders interact through our secure relay system."},{title:"4. Data Security",content:"We use industry-standard encryption (SSL/TLS) to protect your data in transit and at rest. Access to personal data is restricted to authorised team members only, and we conduct regular security audits of our systems."},{title:"5. Data Retention",content:"We retain your personal data for as long as your account is active. You may request deletion of your account and associated data at any time by contacting us at hello@scanforsafe.in. Scan logs are retained for 12 months for your reference."},{title:"6. Your Rights",content:"You have the right to access, correct, or delete your personal information at any time through your account dashboard or by contacting our support team. You may also opt out of non-essential communications at any time."},{title:"7. Contact Us",content:"If you have questions about this Privacy Policy or how we handle your data, please contact us at hello@scanforsafe.in or reach us on WhatsApp."}].map(({title:e,content:t})=>i.jsxs("div",{children:[i.jsx("h2",{className:"font-display font-bold text-lg text-dark-blue mb-2",children:e}),i.jsx("p",{className:"text-slate-600 text-sm leading-relaxed",children:t})]},e))})})]})}function Tg(){return i.jsxs("div",{className:"pt-20 min-h-screen bg-light-bg",children:[i.jsxs("div",{className:"hero-gradient py-16 text-white text-center",children:[i.jsx("h1",{className:"font-display font-extrabold text-4xl mb-4",children:"Terms & Conditions"}),i.jsx("p",{className:"text-blue-200",children:"Last updated: January 2025"})]}),i.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:i.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8",children:[{title:"1. Acceptance of Terms",content:"By purchasing and using any ScanForSafe product or service, you agree to these Terms and Conditions. If you do not agree to these terms, please do not use our products or services."},{title:"2. Product Usage",content:"ScanForSafe QR tags are intended for legitimate personal use — protecting your own pets, vehicles, and personal belongings. You must not use our products to track individuals without their knowledge or consent, or for any unlawful purpose."},{title:"3. Account Responsibility",content:"You are responsible for maintaining the accuracy of your profile information and keeping your account credentials secure. You are responsible for all activity that occurs under your account and must notify us immediately of any unauthorised access."},{title:"4. Service Availability",content:"While we strive to maintain 24/7 availability, ScanForSafe does not guarantee uninterrupted service. Planned maintenance, unforeseen technical issues, or force majeure events may temporarily affect service availability."},{title:"5. Refund Policy",content:"We offer a 30-day satisfaction guarantee on all physical QR tag products. If you are unsatisfied with your purchase, contact us within 30 days of delivery for a full refund. Digital activation services are non-refundable once activated."},{title:"6. Limitation of Liability",content:"ScanForSafe provides tools to improve the chances of item recovery and emergency contact. We do not guarantee recovery of any lost item or animal, and shall not be liable for any direct, indirect, or consequential loss arising from use or inability to use our service."},{title:"7. Changes to Terms",content:"We reserve the right to update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms. We will notify registered users of material changes by email."},{title:"8. Contact",content:"For any questions regarding these Terms and Conditions, please contact us at hello@scanforsafe.in."}].map(({title:e,content:t})=>i.jsxs("div",{children:[i.jsx("h2",{className:"font-display font-bold text-lg text-dark-blue mb-2",children:e}),i.jsx("p",{className:"text-slate-600 text-sm leading-relaxed",children:t})]},e))})})]})}function Bg({onClose:e}){const[t,n]=y.useState([{role:"assistant",content:"Hi! 👋 I'm ScanForSafe's AI assistant. Ask me anything — lost items, how QR tags work, rewards, or setup help!"}]),[r,s]=y.useState(""),[o,a]=y.useState(!1),l=y.useRef(null);y.useEffect(()=>{var c;(c=l.current)==null||c.scrollIntoView({behavior:"smooth"})},[t,o]);async function d(){var p,x;const c=r.trim();if(!c||o)return;s("");const g=[...t,{role:"user",content:c}];n(g),a(!0);try{const v=await(await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1e3,system:"You are a friendly and helpful AI assistant for ScanForSafe — a QR tag platform that helps people recover lost items (luggage, pets, vehicles, kids, seniors) using WhatsApp alerts, GPS tracking, and a finder reward system. Answer user questions about the product clearly and concisely. Keep responses short (2-4 sentences max). Use emojis sparingly.",messages:g.map(j=>({role:j.role,content:j.content}))})})).json(),w=((x=(p=v==null?void 0:v.content)==null?void 0:p[0])==null?void 0:x.text)??"Sorry, I could not get a response.";n(j=>[...j,{role:"assistant",content:w}])}catch{n(m=>[...m,{role:"assistant",content:"Something went wrong. Please try again."}])}finally{a(!1)}}return i.jsxs("div",{style:{position:"fixed",bottom:"100px",right:"24px",zIndex:60,width:"340px",maxHeight:"480px",borderRadius:"20px",background:"#fff",boxShadow:"0 24px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(37,99,235,0.12)",display:"flex",flexDirection:"column",overflow:"hidden",border:"1.5px solid #e2e8f0",animation:"popIn .25s cubic-bezier(.34,1.3,.64,1)"},children:[i.jsxs("div",{style:{background:"linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%)",padding:"14px 16px",display:"flex",alignItems:"center",gap:"10px"},children:[i.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(Nu,{size:20,color:"#fff"})}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:14,fontWeight:700,color:"#fff",fontFamily:"'Outfit',sans-serif"},children:"ScanForSafe AI"}),i.jsxs("div",{style:{fontSize:11,color:"rgba(255,255,255,0.75)",display:"flex",alignItems:"center",gap:5},children:[i.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#4ade80",display:"inline-block"}}),"Online · Powered by Claude AI"]})]}),i.jsx("button",{onClick:e,style:{background:"rgba(255,255,255,0.15)",border:"none",borderRadius:"50%",width:30,height:30,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"background .2s"},onMouseEnter:c=>c.currentTarget.style.background="rgba(255,255,255,0.28)",onMouseLeave:c=>c.currentTarget.style.background="rgba(255,255,255,0.15)",children:i.jsx(Fu,{size:15,color:"#fff"})})]}),i.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"16px 14px",display:"flex",flexDirection:"column",gap:10,background:"#f8fafc"},children:[t.map((c,g)=>i.jsx("div",{style:{display:"flex",justifyContent:c.role==="user"?"flex-end":"flex-start"},children:i.jsx("div",{style:{maxWidth:"80%",padding:"10px 13px",borderRadius:c.role==="user"?"16px 16px 4px 16px":"16px 16px 16px 4px",background:c.role==="user"?"linear-gradient(135deg,#2563eb,#1d4ed8)":"#fff",color:c.role==="user"?"#fff":"#1e293b",fontSize:13,lineHeight:1.65,fontWeight:500,boxShadow:c.role==="user"?"0 4px 12px rgba(37,99,235,0.25)":"0 2px 8px rgba(0,0,0,0.07)",border:c.role==="assistant"?"1px solid #e2e8f0":"none"},children:c.content})},g)),o&&i.jsx("div",{style:{display:"flex",justifyContent:"flex-start"},children:i.jsx("div",{style:{padding:"10px 14px",borderRadius:"16px 16px 16px 4px",background:"#fff",border:"1px solid #e2e8f0",boxShadow:"0 2px 8px rgba(0,0,0,0.07)",display:"flex",gap:5,alignItems:"center"},children:[0,1,2].map(c=>i.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#93c5fd",display:"inline-block",animation:`bounce 1.2s ease-in-out ${c*.2}s infinite`}},c))})}),i.jsx("div",{ref:l})]}),i.jsxs("div",{style:{padding:"12px 14px",background:"#fff",borderTop:"1.5px solid #e2e8f0",display:"flex",gap:8,alignItems:"center"},children:[i.jsx("input",{value:r,onChange:c=>s(c.target.value),onKeyDown:c=>c.key==="Enter"&&d(),placeholder:"Ask anything…",style:{flex:1,border:"1.5px solid #e2e8f0",borderRadius:999,padding:"9px 14px",fontSize:13,fontFamily:"'Space Grotesk',sans-serif",fontWeight:500,color:"#0f172a",outline:"none",background:"#f8fafc",transition:"border-color .2s"},onFocus:c=>c.target.style.borderColor="#60a5fa",onBlur:c=>c.target.style.borderColor="#e2e8f0"}),i.jsx("button",{onClick:d,disabled:!r.trim()||o,style:{width:38,height:38,borderRadius:"50%",border:"none",background:r.trim()&&!o?"linear-gradient(135deg,#2563eb,#1d4ed8)":"#e2e8f0",display:"flex",alignItems:"center",justifyContent:"center",cursor:r.trim()&&!o?"pointer":"default",transition:"all .2s",flexShrink:0,boxShadow:r.trim()&&!o?"0 4px 12px rgba(37,99,235,0.3)":"none"},children:o?i.jsx(qh,{size:16,color:"#94a3b8",style:{animation:"spin 1s linear infinite"}}):i.jsx(za,{size:15,color:r.trim()?"#fff":"#94a3b8"})})]})]})}function Mg(){const[e,t]=y.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap');
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes shine { 0%{left:-120%} 100%{left:120%} }
        @keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes popIn { from{opacity:0;transform:scale(0.88) translateY(12px)} to{opacity:1;transform:scale(1) translateY(0)} }
      `}),e&&i.jsx(Bg,{onClose:()=>t(!1)}),i.jsx("div",{style:{position:"fixed",bottom:"100px",right:"22px",width:"70px",height:"70px",borderRadius:"9999px",background:"rgba(37,211,102,0.18)",filter:"blur(18px)",zIndex:40}}),i.jsx("div",{style:{position:"fixed",bottom:"22px",right:"22px",width:"70px",height:"70px",borderRadius:"9999px",background:"rgba(37,99,235,0.18)",filter:"blur(18px)",zIndex:40}}),i.jsxs("a",{href:"https://wa.me/919999999999",target:"_blank",rel:"noreferrer","aria-label":"Chat on WhatsApp",style:{position:"fixed",bottom:"96px",right:"24px",zIndex:50,width:"62px",height:"62px",borderRadius:"9999px",background:"linear-gradient(135deg,#2ebd3a 0%,#249e30 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 30px rgba(37,211,102,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",textDecoration:"none",transition:"all 0.35s ease",overflow:"hidden",backdropFilter:"blur(10px)",animation:"float 3s ease-in-out infinite"},onMouseEnter:n=>n.currentTarget.style.transform="translateY(-4px) scale(1.08)",onMouseLeave:n=>n.currentTarget.style.transform="translateY(0) scale(1)",children:[i.jsx("div",{style:{position:"absolute",width:"120%",height:"40%",background:"linear-gradient(to right,transparent,rgba(255,255,255,0.4),transparent)",transform:"rotate(-25deg)",top:"-20%",left:"-120%",animation:"shine 3s infinite"}}),i.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"white",children:i.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),i.jsx("span",{style:{position:"absolute",top:"8px",right:"8px",width:"12px",height:"12px",borderRadius:"9999px",background:"#fff",border:"2px solid #2ebd3a"}})]}),i.jsxs("button",{onClick:()=>t(n=>!n),"aria-label":"Open AI Chat",style:{position:"fixed",bottom:"24px",right:"24px",zIndex:50,width:"62px",height:"62px",borderRadius:"9999px",background:e?"linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 100%)":"linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 30px rgba(37,99,235,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",border:"none",cursor:"pointer",transition:"all 0.35s ease",overflow:"hidden",backdropFilter:"blur(10px)",animation:e?"none":"float 3s ease-in-out infinite"},onMouseEnter:n=>n.currentTarget.style.transform="translateY(-4px) scale(1.08)",onMouseLeave:n=>n.currentTarget.style.transform="translateY(0) scale(1)",children:[i.jsx("div",{style:{position:"absolute",width:"120%",height:"40%",background:"linear-gradient(to right,transparent,rgba(255,255,255,0.4),transparent)",transform:"rotate(-25deg)",top:"-20%",left:"-120%",animation:"shine 3s infinite"}}),e?i.jsx(Fu,{size:26,color:"white",strokeWidth:2.5}):i.jsx(Nu,{size:28,color:"white",strokeWidth:2}),!e&&i.jsx("div",{style:{position:"absolute",top:"7px",right:"7px",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(Bu,{size:14,color:"#fff"})})]}),i.jsxs("div",{style:{position:"fixed",bottom:"180px",right:"18px",zIndex:45,background:"rgba(11,37,69,0.92)",color:"#fff",padding:"10px 14px",borderRadius:"9999px",display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",fontWeight:600,boxShadow:"0 8px 24px rgba(0,0,0,0.18)",backdropFilter:"blur(10px)"},children:["Need Help?",i.jsx(Nh,{size:16})]})]})}function Lg(){const[e,t]=y.useState(!1),n="https://docs.google.com/forms/d/e/1FAIpQLSd9A7Dl1-VyVYOpzuSFH1dy_vWdsYBxjFUqh6h3LpmicZwKRg/viewform",r=`https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${encodeURIComponent(n)}&color=064e3b&bgcolor=ffffff&margin=10`,s=[{num:"5K+",lbl:"Products Scanned"},{num:"98%",lbl:"Detection Accuracy"},{num:"200+",lbl:"Partner Institutes"}];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
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
      `}),i.jsx("div",{className:"qr-page",children:i.jsxs("div",{className:"qr-card",children:[i.jsxs("div",{className:"qr-badge",children:[i.jsx("span",{className:"qr-badge-dot"}),i.jsx("span",{className:"qr-badge-text",children:"Smart Shield · Verified"})]}),i.jsxs("div",{className:"qr-title",children:[i.jsx("span",{children:"Scan"})," & Verify"]}),i.jsxs("div",{className:"qr-subtitle",children:["Scan the QR code below to access the official",i.jsx("br",{}),"safety verification form instantly."]}),i.jsx("div",{className:"qr-frame-wrap",children:i.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:i.jsxs("div",{className:`qr-frame ${e?"hovered":""}`,onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[i.jsx("div",{className:"qr-scan-line"}),i.jsx("div",{className:"qr-corner tl"}),i.jsx("div",{className:"qr-corner tr"}),i.jsx("div",{className:"qr-corner bl"}),i.jsx("div",{className:"qr-corner br"}),i.jsx("img",{src:r,alt:"ScanForSafe QR Code",className:"qr-img"})]})})}),i.jsx("div",{className:"qr-divider"}),i.jsx("div",{className:"qr-stats",children:s.map((o,a)=>i.jsxs("div",{className:"qr-stat",children:[i.jsx("div",{className:"qr-stat-num",children:o.num}),i.jsx("div",{className:"qr-stat-lbl",children:o.lbl})]},a))}),i.jsxs("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"qr-cta",children:["Open Verification Form",i.jsx("span",{className:"qr-cta-arrow",children:"→"})]}),i.jsxs("div",{className:"qr-footer",children:[i.jsx("span",{className:"qr-footer-item",children:"Secure"}),i.jsx("span",{className:"qr-footer-sep"}),i.jsx("span",{className:"qr-footer-item",children:"Instant"}),i.jsx("span",{className:"qr-footer-sep"}),i.jsx("span",{className:"qr-footer-item",children:"No App Required"})]})]})})]})}const Co=[{id:"whatsapp",bg:"#dcfce7",accent:"#16a34a",tagBg:"#bbf7d0",tagColor:"#14532d",emoji:"💬",tag:"Most Loved",title:"WhatsApp Alerts",desc:"Instant WhatsApp notification the moment anyone scans your QR — GPS location and direct call included.",pills:["Instant Alert","GPS Included","No App"]},{id:"call",bg:"#e0e7ff",accent:"#4338ca",tagBg:"#c7d2fe",tagColor:"#1e1b4b",emoji:"📞",tag:"Zero Friction",title:"One-Touch Call Connect",desc:"Finders call you in one tap — no app, no sign-up. Works even from a basic feature phone anywhere.",pills:["One Tap","No Sign-up","Any Phone"]},{id:"contacts",bg:"#ede9fe",accent:"#7c3aed",tagBg:"#ddd6fe",tagColor:"#3b0764",emoji:"👨‍👩‍👧",tag:"Family Ready",title:"5 Emergency Contacts",desc:"Add family, friends or your vet. If the first contact misses it, the next is notified automatically.",pills:["5 Contacts","Auto Fallback","5-Min Retry"]},{id:"gps",bg:"#ccfbf1",accent:"#0d9488",tagBg:"#99f6e4",tagColor:"#134e4a",emoji:"📍",tag:"Smart",title:"GPS on Every Scan",desc:"Each scan captures precise GPS coordinates and sends a live Maps link so you can locate your item fast.",pills:["Live GPS","Maps Link","Real-Time"]},{id:"setup",bg:"#fef3c7",accent:"#d97706",tagBg:"#fde68a",tagColor:"#78350f",emoji:"⚡",tag:"3 Minutes",title:"Instant Activation",desc:"Peel, stick and protected. Register your tag in under 3 minutes — zero technical knowledge required.",pills:["Under 3 Min","Guided Setup","Instant Live"]},{id:"privacy",bg:"#ffe4e6",accent:"#e11d48",tagBg:"#fecdd3",tagColor:"#881337",emoji:"🔒",tag:"Privacy First",title:"Your Info Stays Hidden",desc:"Your phone number is never on the tag. The QR links to a secure proxy — finders see only what you allow.",pills:["Encrypted","No Personal Data","GDPR Safe"]},{id:"history",bg:"#dbeafe",accent:"#2563eb",tagBg:"#bfdbfe",tagColor:"#1e3a8a",emoji:"🔔",tag:"Full Visibility",title:"Scan History & Logs",desc:"Dashboard logs every scan — time, location, device. Know exactly when and where your item was found.",pills:["Full Timeline","Device Info","Exportable"]},{id:"update",bg:"#ffedd5",accent:"#ea580c",tagBg:"#fed7aa",tagColor:"#7c2d12",emoji:"🔄",tag:"Always Current",title:"Update Info Anytime",desc:"Changed your number? Update in 30 seconds from any device. The physical tag never needs replacing.",pills:["Instant Update","Any Device","Reassignable"]}],Fg=[{emoji:"🚗",label:"Vehicles",sub:"Road accidents & emergencies",bg:"#dcfce7",accent:"#16a34a",textColor:"#14532d",reward:!0,stat:"2yr QR validity"},{emoji:"🧳",label:"Luggage",sub:"Airport & travel recovery",bg:"#dbeafe",accent:"#2563eb",textColor:"#1e3a8a",reward:!1,stat:"Scan anywhere"},{emoji:"🐾",label:"Pets",sub:"Lost pet QR tag recovery",bg:"#fef3c7",accent:"#d97706",textColor:"#78350f",reward:!0,stat:"24/7 alerts"},{emoji:"🎒",label:"School Kids",sub:"Bus transit child safety",bg:"#ede9fe",accent:"#7c3aed",textColor:"#3b0764",reward:!1,stat:"Parent notified"},{emoji:"👴",label:"Senior Citizens",sub:"Medical emergency response",bg:"#ffe4e6",accent:"#e11d48",textColor:"#881337",reward:!1,stat:"SOS workflow"},{emoji:"💛",label:"Special Needs",sub:"Community assisted return",bg:"#ccfbf1",accent:"#0d9488",textColor:"#134e4a",reward:!1,stat:"Care team alerts"},{emoji:"🔍",label:"Missing Vehicle",sub:"Community alert & recovery",bg:"#ffedd5",accent:"#ea580c",textColor:"#7c2d12",reward:!0,stat:"Anti-fraud verified"},{emoji:"👨‍👩‍👧‍👦",label:"Family Safety",sub:"Daily peace of mind",bg:"#e0e7ff",accent:"#4338ca",textColor:"#1e1b4b",reward:!1,stat:"Up to 5 members"}],_g=[{tier:"Bronze",range:"₹500 – ₹1,000",icon:"🥉",headerFrom:"#78350f",headerTo:"#b45309",bodyBg:"#fef3c7",border:"#fbbf24",titleColor:"#78350f"},{tier:"Silver",range:"₹1,000 – ₹5,000",icon:"🥈",headerFrom:"#334155",headerTo:"#64748b",bodyBg:"#f1f5f9",border:"#94a3b8",titleColor:"#1e293b"},{tier:"Gold",range:"₹5,000 – ₹25,000",icon:"🥇",headerFrom:"#92400e",headerTo:"#d97706",bodyBg:"#fffbeb",border:"#f59e0b",titleColor:"#78350f"},{tier:"Platinum",range:"₹25,000+",icon:"💎",headerFrom:"#3b0764",headerTo:"#7c3aed",bodyBg:"#f5f3ff",border:"#a78bfa",titleColor:"#3b0764"}],Og=[{step:"01",emoji:"📝",label:"Owner sets reward",desc:"Reports missing item and commits a chosen reward amount"},{step:"02",emoji:"🔍",label:"Finder scans QR",desc:"Reward notice pops up instantly on the finder's scan page"},{step:"03",emoji:"📲",label:"Submit verified report",desc:"Finder submits OTP-verified report — fraud checked"},{step:"04",emoji:"💸",label:"Reward transferred",desc:"Cash sent instantly via UPI/Bank once verified by owner"}];function Ag({f:e,active:t,onClick:n}){return i.jsxs("div",{onClick:n,style:{borderRadius:16,padding:"18px 16px",background:t?e.accent:"#fff",border:`1.5px solid ${t?e.accent:e.bg}`,cursor:"pointer",transition:"all 0.25s ease",transform:t?"translateY(-4px)":"none",boxShadow:t?`0 12px 32px ${e.accent}30`:"0 2px 8px rgba(0,0,0,0.04)"},children:[i.jsx("span",{style:{display:"inline-block",background:t?"rgba(255,255,255,0.2)":e.tagBg,color:t?"#fff":e.tagColor,fontSize:10,fontWeight:700,padding:"3px 9px",borderRadius:99,letterSpacing:".06em",textTransform:"uppercase",marginBottom:10},children:e.tag}),i.jsx("div",{style:{fontSize:28,marginBottom:8},children:e.emoji}),i.jsx("h3",{style:{fontSize:14.5,fontWeight:800,margin:"0 0 6px",color:t?"#fff":"#0B2545"},children:e.title}),i.jsx("p",{style:{fontSize:12.5,lineHeight:1.6,margin:"0 0 12px",color:t?"rgba(255,255,255,0.85)":"#64748b"},children:e.desc}),i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:e.pills.map(r=>i.jsx("span",{style:{fontSize:10,fontWeight:700,padding:"3px 9px",borderRadius:99,background:t?"rgba(255,255,255,0.18)":e.bg,color:t?"#fff":e.tagColor,border:`1px solid ${t?"rgba(255,255,255,0.25)":e.tagBg}`},children:r},r))})]})}function Wg({uc:e,active:t,onClick:n}){return i.jsxs("div",{onClick:n,style:{borderRadius:16,padding:"18px 14px 16px",background:t?e.accent:"#fff",border:`1.5px solid ${t?e.accent:e.bg}`,textAlign:"center",cursor:"pointer",transition:"all 0.25s ease",transform:t?"translateY(-4px)":"none",boxShadow:t?`0 12px 28px ${e.accent}28`:"0 2px 8px rgba(0,0,0,0.04)",position:"relative"},children:[e.reward&&i.jsx("div",{style:{position:"absolute",top:8,right:8,background:t?"rgba(255,255,255,0.2)":"#fef9c3",border:`1px solid ${t?"rgba(255,255,255,0.3)":"#fbbf24"}`,borderRadius:99,padding:"2px 7px",fontSize:8.5,fontWeight:800,color:t?"#fff":"#92400e"},children:"🏆 Reward"}),i.jsx("div",{style:{fontSize:34,marginBottom:8,transform:t?"scale(1.15)":"scale(1)",transition:"transform 0.25s ease"},children:e.emoji}),i.jsx("div",{style:{fontSize:14,fontWeight:800,color:t?"#fff":e.textColor,marginBottom:4},children:e.label}),i.jsx("div",{style:{fontSize:10.5,color:t?"rgba(255,255,255,0.75)":"#64748b",marginBottom:10,lineHeight:1.4},children:e.sub}),i.jsx("span",{style:{display:"inline-block",background:t?"rgba(255,255,255,0.18)":e.bg,border:`1px solid ${t?"rgba(255,255,255,0.25)":e.accent}30`,borderRadius:99,padding:"3px 9px",fontSize:9,fontWeight:800,letterSpacing:".06em",textTransform:"uppercase",color:t?"#fff":e.textColor},children:e.stat})]})}function Dg({activeId:e}){const t=Co.find(n=>n.id===e);return i.jsxs("div",{style:{width:260,height:520,background:"#1e293b",borderRadius:38,padding:10,border:"4px solid #334155",boxShadow:"0 24px 60px rgba(0,0,0,0.22)",position:"relative",flexShrink:0},children:[i.jsx("div",{style:{position:"absolute",top:15,left:"50%",transform:"translateX(-50%)",width:75,height:18,background:"#000",borderRadius:12,zIndex:10}}),i.jsxs("div",{style:{width:"100%",height:"100%",borderRadius:30,overflow:"hidden",background:(t==null?void 0:t.bg)||"#f8fafc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,textAlign:"center",border:"2px solid #000"},children:[i.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,marginBottom:16,boxShadow:`0 8px 24px ${t==null?void 0:t.accent}30`,border:`2px solid ${t==null?void 0:t.accent}40`},children:t==null?void 0:t.emoji}),i.jsx("div",{style:{fontSize:14,fontWeight:800,color:t==null?void 0:t.tagColor,marginBottom:6},children:t==null?void 0:t.title}),i.jsx("div",{style:{fontSize:11,color:"#64748b",lineHeight:1.6,marginBottom:16},children:t==null?void 0:t.desc}),i.jsxs("div",{style:{width:"100%",background:"#fff",borderRadius:10,padding:"8px 12px",border:`1.5px solid ${t==null?void 0:t.accent}30`,display:"flex",alignItems:"center",gap:8,boxShadow:"0 2px 10px rgba(0,0,0,0.06)"},children:[i.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:t==null?void 0:t.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0},children:t==null?void 0:t.emoji}),i.jsxs("div",{style:{textAlign:"left"},children:[i.jsx("div",{style:{fontSize:9.5,fontWeight:800,color:"#0f172a"},children:"ScanForSafe Alert"}),i.jsx("div",{style:{fontSize:8.5,color:"#64748b"},children:"Tap to view details →"})]})]}),i.jsx("div",{style:{marginTop:12,display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center"},children:t==null?void 0:t.pills.map(n=>i.jsx("span",{style:{fontSize:9,fontWeight:700,padding:"3px 8px",borderRadius:99,background:"#fff",color:t==null?void 0:t.tagColor,border:`1px solid ${t==null?void 0:t.accent}30`},children:n},n))})]}),i.jsx("div",{style:{position:"absolute",left:-4,top:85,width:3,height:26,background:"#475569",borderRadius:"3px 0 0 3px"}}),i.jsx("div",{style:{position:"absolute",left:-4,top:120,width:3,height:36,background:"#475569",borderRadius:"3px 0 0 3px"}}),i.jsx("div",{style:{position:"absolute",right:-4,top:110,width:3,height:44,background:"#475569",borderRadius:"0 3px 3px 0"}})]})}function js({badge:e,badgeBg:t,badgeBorder:n,badgeColor:r,title:s,highlight:o,highlightGradient:a,desc:l}){return i.jsxs("div",{style:{textAlign:"center",marginBottom:52},children:[i.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:t,border:`1.5px solid ${n}`,borderRadius:99,padding:"7px 20px",fontSize:11.5,fontWeight:800,color:r,letterSpacing:".06em",textTransform:"uppercase",marginBottom:16},children:e}),i.jsxs("h2",{style:{fontSize:"clamp(1.8rem, 3.8vw, 3rem)",fontWeight:900,color:"#0B2545",letterSpacing:"-.04em",lineHeight:1.1,margin:"0 0 14px",fontFamily:"'Outfit', sans-serif"},children:[s," ",i.jsx("span",{style:{background:a,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:o})]}),i.jsx("p",{style:{fontSize:15,color:"#4b7a62",maxWidth:500,margin:"0 auto",lineHeight:1.8},children:l})]})}function Ug(){const[e,t]=y.useState("whatsapp"),[n,r]=y.useState(0),s=Co.find(o=>o.id===e);return i.jsxs("section",{style:{background:"#f8fafc",padding:"90px 24px 96px"},children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&display=swap');
        * { box-sizing: border-box; }
        .feat-layout { display: grid; grid-template-columns: 1fr 280px; gap: 36px; align-items: start; }
        .feat-grid   { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .uc-grid     { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .tier-grid   { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .step-grid   { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .phone-sticky { position: sticky; top: 90px; display: flex; flex-direction: column; align-items: center; gap: 12px; }
        @media (max-width: 1024px) {
          .feat-layout { grid-template-columns: 1fr; }
          .phone-sticky { position: relative; top: 0; margin: 0 auto 32px; }
          .uc-grid { grid-template-columns: repeat(2, 1fr); }
          .tier-grid { grid-template-columns: repeat(2, 1fr); }
          .step-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .feat-grid { grid-template-columns: 1fr; }
          .uc-grid   { grid-template-columns: 1fr; }
          .tier-grid { grid-template-columns: 1fr; }
          .step-grid { grid-template-columns: 1fr; }
        }
      `}),i.jsxs("div",{style:{maxWidth:1140,margin:"0 auto"},children:[i.jsx(js,{badge:"✦ Platform Features",badgeBg:"#dcfce7",badgeBorder:"#4ade80",badgeColor:"#14532d",title:"Powerful Features for",highlight:"Peace of Mind",highlightGradient:"linear-gradient(130deg,#16a34a,#059669)",desc:"Everything you need — no app needed on the finder's end. Click any card to preview."}),i.jsxs("div",{className:"feat-layout",style:{marginBottom:88},children:[i.jsx("div",{className:"feat-grid",children:Co.map(o=>i.jsx(Ag,{f:o,active:e===o.id,onClick:()=>t(o.id)},o.id))}),i.jsxs("div",{className:"phone-sticky",children:[i.jsx(Dg,{activeId:e}),i.jsxs("div",{style:{background:"#fff",border:"1.5px solid #e2e8f0",borderRadius:12,padding:"10px 16px",textAlign:"center",width:"100%",maxWidth:260},children:[i.jsx("div",{style:{fontSize:9.5,color:"#94a3b8",fontWeight:600,letterSpacing:".07em",textTransform:"uppercase",marginBottom:3},children:"Previewing"}),i.jsxs("div",{style:{fontSize:13.5,fontWeight:800,color:"#0B2545"},children:[s==null?void 0:s.emoji," ",s==null?void 0:s.title]})]})]})]}),i.jsx(js,{badge:"🛡️ Protection Categories",badgeBg:"#ffedd5",badgeBorder:"#fb923c",badgeColor:"#7c2d12",title:"8 Safety Categories.",highlight:"One Smart Platform.",highlightGradient:"linear-gradient(130deg,#ea580c,#dc2626)",desc:"From lost luggage to road emergencies — ScanForSafe covers every real-world scenario."}),i.jsx("div",{className:"uc-grid",style:{marginBottom:88},children:Fg.map((o,a)=>i.jsx(Wg,{uc:o,active:n===a,onClick:()=>r(n===a?-1:a)},a))}),i.jsxs("div",{style:{background:"#fff",borderRadius:24,padding:"48px 36px 40px",border:"1.5px solid #e2e8f0",boxShadow:"0 8px 32px rgba(15,23,42,0.05)"},children:[i.jsx(js,{badge:"🏆 Reward System",badgeBg:"#fef9c3",badgeBorder:"#fbbf24",badgeColor:"#92400e",title:"Get Rewarded for",highlight:"Finding & Returning",highlightGradient:"linear-gradient(130deg,#16a34a,#22c55e)",desc:"Owners set an optional cash reward. Verified finders receive payouts directly — OTP protected, secure, and fraud-resistant."}),i.jsx("div",{className:"tier-grid",style:{marginBottom:36},children:_g.map((o,a)=>i.jsxs("div",{style:{borderRadius:18,overflow:"hidden",border:`1.5px solid ${o.border}`,boxShadow:"0 4px 18px rgba(0,0,0,0.06)"},children:[i.jsxs("div",{style:{background:`linear-gradient(135deg,${o.headerFrom},${o.headerTo})`,padding:"22px 14px 18px",textAlign:"center"},children:[i.jsx("div",{style:{fontSize:38,lineHeight:1,marginBottom:6},children:o.icon}),i.jsx("div",{style:{fontSize:17,fontWeight:900,color:"#fff",fontFamily:"'Outfit',sans-serif"},children:o.tier})]}),i.jsxs("div",{style:{background:o.bodyBg,padding:"16px 14px",textAlign:"center",borderTop:`1px solid ${o.border}`},children:[i.jsx("div",{style:{fontSize:14.5,fontWeight:900,color:o.titleColor,marginBottom:3,fontFamily:"'Outfit',sans-serif"},children:o.range}),i.jsx("div",{style:{fontSize:10,color:o.titleColor,fontWeight:700,textTransform:"uppercase",letterSpacing:".04em",opacity:.7},children:"Reward Range"})]})]},a))}),i.jsxs("div",{style:{background:"#f8fafc",borderRadius:16,padding:"28px 24px",border:"1px solid #e2e8f0"},children:[i.jsx("div",{style:{textAlign:"center",marginBottom:22},children:i.jsx("span",{style:{fontSize:11,fontWeight:800,color:"#16a34a",letterSpacing:".1em",textTransform:"uppercase"},children:"How Payouts Work"})}),i.jsx("div",{className:"step-grid",children:Og.map((o,a)=>i.jsxs("div",{style:{background:"#fff",borderRadius:14,border:"1.5px solid #e2e8f0",padding:"20px 14px",textAlign:"center",transition:"all .25s ease"},onMouseEnter:l=>{l.currentTarget.style.borderColor="#86efac",l.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:l=>{l.currentTarget.style.borderColor="#e2e8f0",l.currentTarget.style.transform="none"},children:[i.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:32,height:32,borderRadius:"50%",background:"linear-gradient(135deg,#16a34a,#4ade80)",fontSize:11,fontWeight:900,color:"#fff",marginBottom:10},children:o.step}),i.jsx("div",{style:{fontSize:22,marginBottom:8},children:o.emoji}),i.jsx("div",{style:{fontSize:12.5,fontWeight:800,color:"#0B2545",marginBottom:5},children:o.label}),i.jsx("div",{style:{fontSize:11,color:"#64748b",lineHeight:1.6},children:o.desc})]},a))})]})]}),i.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"10px 20px",marginTop:52,paddingTop:28,borderTop:"1.5px solid #e2e8f0"},children:["🔐 ISO-grade data privacy","⚡ Works 24/7 — even offline","📱 Any smartphone camera","🔒 End-to-end encrypted","🇮🇳 Made for India"].map(o=>i.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,background:"#fff",border:"1.5px solid #e2e8f0",borderRadius:99,padding:"7px 18px",fontSize:12.5,fontWeight:700,color:"#334155",transition:"all .2s ease",cursor:"default"},onMouseEnter:a=>{a.currentTarget.style.borderColor="#86efac",a.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:a=>{a.currentTarget.style.borderColor="#e2e8f0",a.currentTarget.style.transform="none"},children:o},o))})]})]})}function $g(){return i.jsx("div",{className:"pt-20",children:i.jsx(Ug,{})})}const Ou="/assets/bike1-DQV3NgA2.png",Au="/assets/car1-BPYYefFG.png",Wu="/assets/dog-BDzmYqxX.png",Du="/assets/luggage1-Cam_lo6y.png",Uu="/assets/senior-B8NGG_gO.png",$u="/assets/kid-BgJG0Ozf.png",Hg={green:{accent:"#2ebd3a",gradient:"linear-gradient(135deg, #2ebd3a, #0B2545)",soft:"#f8fafc",border:"#cbd5e1",active:"#2ebd3a"},orange:{accent:"#ea580c",gradient:"linear-gradient(135deg, #ea580c, #c2410c)",soft:"#fff7ed",border:"#cbd5e1",active:"#ea580c"},purple:{accent:"#7c3aed",gradient:"linear-gradient(135deg, #7c3aed, #6d28d9)",soft:"#faf5ff",border:"#cbd5e1",active:"#7c3aed"},red:{accent:"#dc2626",gradient:"linear-gradient(135deg, #dc2626, #b91c1c)",soft:"#fef2f2",border:"#cbd5e1",active:"#dc2626"},blue:{accent:"#2563eb",gradient:"linear-gradient(135deg, #2563eb, #1d4ed8)",soft:"#eff6ff",border:"#cbd5e1",active:"#2563eb"}},Yg=[{id:"car",icon:Si,image:Au,title:"Car Protection",subtitle:"Vehicle Security",desc:"Weatherproof QR protection for cars with instant emergency alerts and GPS tracking.",features:[{label:"Weatherproof",icon:Bh},{label:"Live Alerts",icon:dt},{label:"GPS Tracking",icon:yn},{label:"24/7 Monitor",icon:Oe}],price:499,original:999,discount:"50% OFF",color:"green",rating:4.9,reviews:2341},{id:"bike",icon:Sa,image:Ou,title:"Bike Security",subtitle:"Two Wheeler Shield",desc:"Scratch resistant QR protection with owner privacy and instant finder alerts.",features:[{label:"Scratch Resistant",icon:ct},{label:"Instant Notify",icon:dt},{label:"Owner Privacy",icon:hr},{label:"Quick Connect",icon:Vh}],price:499,original:999,discount:"50% OFF",color:"green",popular:!0,rating:4.8,reviews:3892},{id:"pet",icon:Tu,image:Wu,title:"Pet Safety Tag",subtitle:"Pet Guardian",desc:"Smart pet QR with collar support, emergency contact and GPS location sharing.",features:[{label:"Collar Friendly",icon:Zr},{label:"GPS Location",icon:Pu},{label:"Emergency Contact",icon:Mt},{label:"Vet Info",icon:Uh}],price:499,original:999,discount:"50% OFF",color:"orange",rating:4.9,reviews:1876},{id:"luggage",icon:Iu,image:Du,title:"Luggage Guard",subtitle:"Travel Protection",desc:"Strong adhesive QR luggage tags for fast recovery and secure travel support.",features:[{label:"Multi Luggage",icon:Hh},{label:"Strong Adhesive",icon:ct},{label:"Travel Friendly",icon:Kh},{label:"Quick Recovery",icon:ko}],price:499,original:999,discount:"50% OFF",color:"purple",rating:4.7,reviews:1243},{id:"senior",icon:sg,image:Uu,title:"Senior Safety",subtitle:"Emergency Wrist Band",desc:"Senior citizen wrist QR support with medical info and emergency family alerts.",features:[{label:"Medical Info",icon:ct},{label:"Emergency Alerts",icon:dt},{label:"Family Contact",icon:Mt},{label:"Live Tracking",icon:yn}],price:699,original:1299,discount:"46% OFF",color:"red",rating:4.9,reviews:987},{id:"child",icon:ja,image:$u,title:"Child Safety",subtitle:"Kids Guardian",desc:"Child QR safety patch with emergency contact and quick scan protection.",features:[{label:"QR Patch",icon:ct},{label:"Emergency Alert",icon:dt},{label:"Parental Contact",icon:Mt},{label:"Quick Scan",icon:ko}],price:699,original:1299,discount:"46% OFF",color:"blue",rating:5,reviews:2108}],Vg=[{icon:Oe,title:"Secure Checkout",sub:"100% Safe & Encrypted",color:"#2ebd3a"},{icon:jo,title:"Free Shipping",sub:"Pan India Delivery",color:"#2563eb"},{icon:eg,title:"30-Day Returns",sub:"Easy Refund Policy",color:"#7c3aed"},{icon:Wh,title:"24/7 Support",sub:"Always Here To Help",color:"#ea580c"}];function Qg({product:e}){const[t,n]=y.useState(1),[r,s]=y.useState(!1),o=Hg[e.color],a=e.icon;return i.jsxs("div",{onClick:()=>s(!r),style:{background:"#fff",borderRadius:20,overflow:"visible",border:r?`2px solid ${o.active}`:"1px solid #cbd5e1",boxShadow:r?"0 12px 28px rgba(0,0,0,0.08)":"0 4px 16px rgba(0,0,0,0.03)",position:"relative",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",transform:r?"translateY(-4px)":"translateY(0px)",padding:"20px 16px 16px 16px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e.popular&&i.jsxs("div",{style:{position:"absolute",top:-12,left:20,background:o.gradient,color:"#fff",fontSize:10,fontWeight:800,padding:"4px 12px",borderRadius:20,zIndex:10,display:"flex",alignItems:"center",gap:4,letterSpacing:"0.5px"},children:[i.jsx(vn,{size:10,fill:"#fff"}),"MOST POPULAR"]}),i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:12,background:o.gradient,display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(a,{color:"#fff",size:20})}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700},children:[i.jsx(Mu,{size:12,fill:"#f59e0b",color:"#f59e0b"}),i.jsx("span",{style:{color:"#0B2545"},children:e.rating}),i.jsxs("span",{style:{color:"#9ca3af",fontWeight:400},children:["| ",e.reviews.toLocaleString()," reviews"]})]})]}),i.jsx("h3",{style:{fontSize:18,fontWeight:800,color:"#0B2545",margin:"0 0 2px 0"},children:e.title}),i.jsx("p",{style:{color:o.accent,fontWeight:700,fontSize:12,margin:"0 0 12px 0"},children:e.subtitle}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px 1fr",gap:12,alignItems:"start",marginBottom:14},children:[i.jsx("div",{style:{background:"#f8fafc",borderRadius:14,height:120,display:"flex",alignItems:"center",justifyContent:"center",padding:8,border:"1px solid #f1f5f9"},children:i.jsx("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%",objectFit:"contain"}})}),i.jsxs("div",{children:[i.jsx("p",{style:{fontSize:11,color:"#6b7280",lineHeight:1.5,margin:"0 0 10px 0"},children:e.desc}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:6},children:e.features.map(({label:l,icon:d})=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[i.jsx(d,{size:13,color:o.accent,style:{flexShrink:0}}),i.jsx("span",{style:{fontSize:11,fontWeight:500,color:"#374151"},children:l})]},l))})]})]})]}),i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6,marginBottom:12},children:[i.jsxs("span",{style:{fontSize:24,fontWeight:900,color:o.accent},children:["₹",e.price]}),i.jsxs("span",{style:{textDecoration:"line-through",color:"#9ca3af",fontSize:14,fontWeight:500},children:["₹",e.original]}),i.jsx("span",{style:{color:o.accent,fontSize:11,fontWeight:700,marginLeft:"auto",background:o.soft,padding:"2px 8px",borderRadius:12},children:e.discount})]}),i.jsxs("div",{style:{display:"flex",gap:8},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",border:"1px solid #e2e8f0",borderRadius:10,overflow:"hidden",height:36},children:[i.jsx("button",{onClick:l=>{l.stopPropagation(),n(d=>Math.max(1,d-1))},style:Jl,children:i.jsx(Gh,{size:12})}),i.jsx("div",{style:{width:28,textAlign:"center",fontWeight:700,fontSize:13,color:"#0B2545"},children:t}),i.jsx("button",{onClick:l=>{l.stopPropagation(),n(d=>d+1)},style:Jl,children:i.jsx(Zh,{size:12})})]}),i.jsxs("button",{onClick:l=>l.stopPropagation(),style:{flex:1,height:36,border:"none",borderRadius:10,background:o.gradient,color:"#fff",fontWeight:700,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center",gap:6,cursor:"pointer"},children:[i.jsx(ng,{size:13}),"Buy Now"]})]})]})]})}const Jl={width:32,height:"100%",border:"none",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#6b7280"};function qg(){return i.jsxs("section",{style:{padding:"60px 0",background:"linear-gradient(180deg, #f4fbf7 0%, #ffffff 100%)",fontFamily:"'DM Sans', system-ui, sans-serif"},children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
      `}),i.jsxs("div",{style:{width:"100%",maxWidth:1200,margin:"0 auto",padding:"0 20px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:44},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid #e8f8eb",borderRadius:30,padding:"6px 16px",marginBottom:16,boxShadow:"0 4px 12px rgba(0,0,0,0.03)"},children:[i.jsx(Eh,{size:14,color:"#2ebd3a"}),i.jsx("span",{style:{fontWeight:800,fontSize:11,color:"#0B2545",letterSpacing:"0.5px"},children:"OUR PRODUCTS"})]}),i.jsxs("h2",{style:{fontSize:44,lineHeight:1.1,fontWeight:900,marginBottom:12,color:"#0B2545",letterSpacing:"-1px"},children:["Choose Your ",i.jsx("span",{style:{color:"#2ebd3a"},children:"Protection Plan"})]}),i.jsx("p",{style:{maxWidth:640,margin:"0 auto",color:"#4b5563",lineHeight:1.6,fontSize:15},children:"Smart QR solutions for vehicles, pets, luggage, children and senior citizens with instant emergency communication and recovery support."})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:24,marginBottom:44},children:Yg.map(e=>i.jsx(Qg,{product:e},e.id))}),i.jsx("div",{style:{background:"#fff",borderRadius:16,padding:"20px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:16,boxShadow:"0 4px 20px rgba(0,0,0,0.04)",border:"1px solid #f1f5f9"},children:Vg.map(({icon:e,title:t,sub:n,color:r})=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,justifyContent:"center"},children:[i.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(e,{size:20,color:r})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:800,fontSize:14,color:"#0B2545"},children:t}),i.jsx("div",{style:{color:"#6b7280",fontSize:12},children:n})]})]},t))})]})]})}function Xg(){return i.jsx("div",{className:"pt-20 bg-[#f8fbff]",children:i.jsx(qg,{})})}const Gg=[{icon:Sa,title:"Motorcycles & Bikes",qrSize:"3.5 cm QR Sticker",description:"Weather-proof 3.5cm QR sticker placed on the fuel tank or handlebar. If your bike is found, the finder scans and you get an instant alert with GPS location.",cardBg:"#EAF3DE",iconBg:"#2ebd3a",tag:"QR Sticker",tagBg:"#C0DD97",tagColor:"#27500A",titleColor:"#27500A",subColor:"#3B6D11",descColor:"#3B6D11",image:Ou,badge:"🏍️",qrPosition:"On fuel tank / handlebar"},{icon:Iu,title:"Bags & Luggage",qrSize:"3.5 cm QR Sticker",description:"Durable sticker or tag attached to your bag strap. Perfect for travel bags, school bags, and laptop bags. Works even in low-light.",cardBg:"#E6F1FB",iconBg:"#0B2545",tag:"QR Tag",tagBg:"#B5D4F4",tagColor:"#0C447C",titleColor:"#0C447C",subColor:"#185FA5",descColor:"#185FA5",image:Du,badge:"🎒",qrPosition:"On bag strap / handle"},{icon:Tu,title:"Dogs, Cats & Pets",qrSize:"Collar QR Tag",description:"Attach a lightweight QR tag to your pet's collar. If they wander, anyone can scan it and you'll receive an instant notification with their location.",cardBg:"#EAF3DE",iconBg:"#2ebd3a",tag:"Collar Tag",tagBg:"#C0DD97",tagColor:"#27500A",titleColor:"#27500A",subColor:"#3B6D11",descColor:"#3B6D11",image:Wu,badge:"🐕",qrPosition:"On pet collar"},{icon:ja,title:"Children Safety",qrSize:"Hand Band / Shoulder",description:"Wearable QR wristband or shoulder tag for your child. If they get separated in crowded places, a good samaritan scans the band and you get alerted instantly.",cardBg:"#EEEDFE",iconBg:"#0B2545",tag:"Hand Band",tagBg:"#CECBF6",tagColor:"#26215C",titleColor:"#26215C",subColor:"#534AB7",descColor:"#534AB7",image:$u,badge:"🧒",qrPosition:"On hand band / shoulder"},{icon:Eu,title:"Laptops & Valuables",qrSize:"QR + NFC Sticker",description:"Stick a dual QR+NFC tag on your laptop, camera, or any valuable. Works with both QR scan and NFC tap for maximum recovery speed.",cardBg:"#E1F5EE",iconBg:"#2ebd3a",tag:"NFC + QR",tagBg:"#9FE1CB",tagColor:"#085041",titleColor:"#085041",subColor:"#0F6E56",descColor:"#0F6E56",image:Au,badge:"💻",qrPosition:"Back of device"},{icon:ig,title:"Senior Citizens",qrSize:"Emergency QR + NFC",description:"Emergency profile with medical info, blood group, and contacts. NFC tap or QR scan gives responders instant access to critical details — no app needed.",cardBg:"#EEEDFE",iconBg:"#7F77DD",tag:"Senior Care",tagBg:"#7F77DD",tagColor:"#fff",titleColor:"#26215C",subColor:"#534AB7",descColor:"#534AB7",image:Uu,badge:"👴",qrPosition:"Wristband / wallet card",isNew:!0}];function Kg(){return i.jsxs("section",{id:"use-cases",style:{background:"#ffffff",padding:"90px 0 80px"},children:[i.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:56},children:[i.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#e8f8eb",border:"1px solid #c6edd0",marginBottom:16},children:i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#2ebd3a"},children:"Real-World Use Cases"})}),i.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 44px)",fontWeight:900,color:"#0B2545",margin:"0 0 14px",lineHeight:1.15},children:"Protect Everything You Love"}),i.jsx("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:540,margin:"0 auto",lineHeight:1.7},children:"From bikes to babies — ScanForSafe QR tags and NFC chips keep your world safe and recoverable"})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24},className:"use-cases-grid",children:Gg.map(e=>i.jsx(Zg,{...e},e.title))})]}),i.jsx("style",{children:`
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
      `})]})}function Zg({icon:e,title:t,qrSize:n,description:r,cardBg:s,iconBg:o,tag:a,tagBg:l,tagColor:d,titleColor:c,subColor:g,descColor:p,image:x,badge:m,qrPosition:v,isNew:w}){const[j,f]=y.useState(!1);return i.jsxs("div",{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),style:{borderRadius:20,overflow:"hidden",background:s,border:"none",boxShadow:j?"0 20px 48px rgba(0,0,0,0.12)":"0 2px 12px rgba(0,0,0,0.05)",transition:"all 0.3s ease",position:"relative",transform:j?"translateY(-6px)":"translateY(0)",display:"flex",flexDirection:"column"},children:[w&&i.jsx("div",{style:{position:"absolute",top:14,right:14,zIndex:10,background:"#534AB7",color:"#fff",fontSize:11,fontWeight:800,padding:"4px 12px",borderRadius:100,letterSpacing:"0.05em"},children:"NEW"}),i.jsxs("div",{style:{position:"relative",height:244,overflow:"hidden",flexShrink:0},children:[i.jsx("img",{src:x,alt:t,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"contain",objectPosition:"center",display:"block",background:"#f0f0f0",transform:j?"scale(1.04)":"scale(1)",transition:"transform 0.4s ease"}}),i.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.22))"}}),i.jsxs("div",{style:{position:"absolute",bottom:12,left:12,background:"#ffffff",borderRadius:10,padding:"7px 13px",fontSize:12,fontWeight:700,color:"#2ebd3a",display:"flex",alignItems:"center",gap:6,border:"1.5px solid #e8f8eb",zIndex:10,boxShadow:"0 2px 8px rgba(0,0,0,0.18)"},children:[i.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"#2ebd3a",strokeWidth:"2.5",children:[i.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),i.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),i.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),i.jsx("path",{d:"M14 14h3v3m0 4h4m-4-4v4m4-7h-4m4 0v3"})]}),v]})]}),i.jsxs("div",{style:{padding:"18px 18px 20px",display:"flex",flexDirection:"column",gap:10},children:[i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:10},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{width:42,height:42,borderRadius:12,background:o,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(e,{size:20,color:"#fff"})}),i.jsxs("div",{children:[i.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:800,color:c,lineHeight:1.3},children:t}),i.jsxs("div",{style:{fontSize:11,color:g,fontWeight:600,marginTop:3},children:[m," ",n]})]})]}),i.jsx("span",{style:{fontSize:11,fontWeight:800,padding:"4px 12px",borderRadius:100,background:l,color:d,whiteSpace:"nowrap",flexShrink:0,marginTop:2},children:a})]}),i.jsx("p",{style:{margin:0,fontSize:14,color:p,lineHeight:1.65},children:r})]})]})}function Jg(){return i.jsx("div",{className:"pt-20",children:i.jsx(Kg,{})})}function e1(){return i.jsx(i.Fragment,{children:i.jsx(_u,{})})}const t1=[{name:"Priya Sharma",role:"Pet Owner",city:"Mumbai",initial:"P",color:"#0057b8",bg:"rgba(0,87,184,0.10)",rating:5,Icon:ct,text:"My dog slipped out one evening. Within 20 minutes, a kind stranger scanned his collar and I got a WhatsApp alert with their location. We reunited so fast! ScanForSafe is absolutely worth every rupee."},{name:"Rajesh Kumar",role:"Car Owner",city:"Delhi",initial:"R",color:"#2ca02c",bg:"rgba(44,160,44,0.10)",rating:5,Icon:Si,text:"Parking in crowded areas always made me anxious about blocking someone. Now with the QR on my car, people contact me directly without needing my number visible."},{name:"Anita Verma",role:"Parent",city:"Bengaluru",initial:"A",color:"#1a7fd4",bg:"rgba(26,127,212,0.10)",rating:5,Icon:ja,text:"I put a ScanForSafe tag on my son's school bag. The peace of mind knowing someone can reach me immediately in an emergency is priceless."},{name:"Mohammed Farhan",role:"Bike Owner",city:"Hyderabad",initial:"M",color:"#00509e",bg:"rgba(0,80,158,0.10)",rating:5,Icon:Sa,text:"My bike was towed once and I had no idea where it went. After getting ScanForSafe, I feel so much more in control."},{name:"Sneha Reddy",role:"Frequent Traveller",city:"Chennai",initial:"S",color:"#1d8a1d",bg:"rgba(29,138,29,0.10)",rating:5,Icon:Ph,text:"Lost my suitcase at the airport once — never again. I tag every bag now."},{name:"Vikram Nair",role:"Laptop Owner",city:"Pune",initial:"V",color:"#0057b8",bg:"rgba(0,87,184,0.10)",rating:5,Icon:Eu,text:"Left my laptop at a café once and it was gone for 2 hours. ScanForSafe helped me recover it quickly."}];function n1({count:e}){return i.jsx("div",{className:"flex gap-0.5",children:Array.from({length:e}).map((t,n)=>i.jsx(Mu,{className:"w-3.5 h-3.5 text-amber-400 fill-amber-400"},n))})}function r1({t:e}){const{Icon:t}=e;return i.jsxs("div",{className:"relative rounded-2xl p-5 border border-slate-100 bg-white",style:{boxShadow:"0 2px 16px rgba(0,43,91,0.07)"},children:[i.jsxs("div",{className:"flex items-start justify-between mb-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center",style:{background:e.bg},children:i.jsx(t,{style:{width:"18px",height:"18px",color:e.color}})}),i.jsx(n1,{count:e.rating})]}),i.jsx(Jh,{className:"absolute top-4 right-14 w-6 h-6",style:{color:"rgba(0,87,184,0.08)"}}),i.jsxs("p",{className:"text-slate-600 text-sm leading-relaxed mb-4",children:['"',e.text,'"']}),i.jsxs("div",{className:"flex items-center gap-3 pt-3 border-t border-slate-100",children:[i.jsx("div",{className:"w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm",style:{background:e.color},children:e.initial}),i.jsxs("div",{children:[i.jsx("p",{className:"font-bold text-sm",style:{color:"#002b5b"},children:e.name}),i.jsxs("p",{className:"text-xs text-slate-400",children:[e.role," · ",e.city]})]})]})]})}function i1(){return i.jsx("section",{id:"testimonials",className:"py-20",style:{background:"#f4f7fb",padding:"120pX"},children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:[i.jsxs("div",{className:"mb-14 text-center",children:[i.jsx("div",{className:"flex justify-center mb-4",children:i.jsx("span",{className:"badge",children:"Customer Stories"})}),i.jsx("h2",{className:"section-heading",children:"Real People, Real Protection Stories"}),i.jsx("p",{className:"section-sub",children:"Join thousands of happy customers across India who trust ScanForSafe every day."}),i.jsx("div",{className:"flex flex-wrap items-center justify-center gap-6 mt-8",children:[{value:"10,000+",label:"Happy Users"},{value:"4.9 ★",label:"Average Rating"},{value:"98%",label:"Reunion Rate"},{value:"50+ Cities",label:"Across India"}].map(e=>i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-2xl font-black",style:{color:"#0057b8"},children:e.value}),i.jsx("p",{className:"text-xs font-semibold text-slate-500 uppercase tracking-wide",children:e.label})]},e.label))})]}),i.jsx("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:t1.map((e,t)=>i.jsx(r1,{t:e},t))})]})})}function s1(){return i.jsx(i.Fragment,{children:i.jsx(i1,{})})}function o1(){return i.jsxs("svg",{viewBox:"0 0 280 280",className:"w-52 h-52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("ellipse",{cx:"140",cy:"180",rx:"90",ry:"30",fill:"#2ebd3a",fillOpacity:"0.18"}),i.jsx("path",{d:"M140 240 C100 220 68 185 68 145 L68 82 L140 55 L212 82 L212 145 C212 185 180 220 140 240Z",fill:"#0B2545",fillOpacity:"0.25",transform:"translate(4,6)"}),i.jsx("path",{d:"M140 232 C100 212 68 177 68 137 L68 74 L140 47 L212 74 L212 137 C212 177 180 212 140 232Z",fill:"url(#shieldGrad)",stroke:"#0B2545",strokeWidth:"1.5"}),i.jsx("path",{d:"M140 210 C108 193 88 164 88 134 L88 88 L140 66 L192 88 L192 134 C192 164 172 193 140 210Z",fill:"url(#shieldInner)",opacity:"0.6"}),Array.from({length:6},(e,t)=>Array.from({length:6},(n,r)=>{const s=108+r*13,o=80+t*13,a=Math.random()>.4?.5:.15;return i.jsx("rect",{x:s,y:o,width:"8",height:"8",rx:"1.5",fill:"white",fillOpacity:a},`${t}-${r}`)})),i.jsx("circle",{cx:"168",cy:"158",r:"22",fill:"#2ebd3a",stroke:"white",strokeWidth:"2.5"}),i.jsx("circle",{cx:"168",cy:"158",r:"18",fill:"#2ebd3a"}),i.jsx("path",{d:"M158 158 L164 164 L178 150",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("circle",{cx:"140",cy:"30",r:"5",fill:"#4bd557",fillOpacity:"0.7"}),i.jsx("circle",{cx:"228",cy:"100",r:"4",fill:"#7ded88",fillOpacity:"0.6"}),i.jsx("circle",{cx:"210",cy:"210",r:"5",fill:"#4bd557",fillOpacity:"0.5"}),i.jsx("circle",{cx:"68",cy:"195",r:"3.5",fill:"#7ded88",fillOpacity:"0.6"}),i.jsx("circle",{cx:"50",cy:"100",r:"4",fill:"#4bd557",fillOpacity:"0.5"}),i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:"shieldGrad",x1:"140",y1:"47",x2:"140",y2:"232",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:"0%",stopColor:"#2ebd3a"}),i.jsx("stop",{offset:"50%",stopColor:"#2ebd3a"}),i.jsx("stop",{offset:"100%",stopColor:"#081c35"})]}),i.jsxs("linearGradient",{id:"shieldInner",x1:"140",y1:"66",x2:"140",y2:"210",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:"0%",stopColor:"white",stopOpacity:"0.25"}),i.jsx("stop",{offset:"100%",stopColor:"white",stopOpacity:"0"})]})]})]})}const a1=[{icon:Dh,label:"Enterprise Security",desc:"End-to-end protection for your ecosystem",tags:"Secure • Reliable • Robust",tagColor:"#2ebd3a"},{icon:vn,label:"Lightning Fast",desc:"Instant AI scanning & verification",tags:"Real-time • Accurate • Fast",tagColor:"#d97706"},{icon:Lu,label:"Role-Based Access",desc:"Granular permissions with 4 user roles",tags:"Flexible • Controlled • Safe",tagColor:"#7c3aed"},{icon:Mh,label:"Cloud Scalability",desc:"Reliable, secure & always available",tags:"Scalable • Global • Always On",tagColor:"#0ea5e9"}];function l1(){const[e,t]=y.useState(!1),[n,r]=y.useState(""),[s,o]=y.useState(""),[a,l]=y.useState(!1),[d,c]=y.useState({}),g=()=>{const x={};return n.trim()||(x.username="Username is required"),s?s.length<6&&(x.password="Password must be at least 6 characters"):x.password="Password is required",x},p=x=>{x.preventDefault();const m=g();if(Object.keys(m).length){c(m);return}c({}),l(!0),setTimeout(()=>l(!1),1800)};return i.jsxs("div",{className:"min-h-screen flex font-sans",style:{fontFamily:"'DM Sans', 'Helvetica Neue', sans-serif"},children:[i.jsxs("div",{className:"hidden lg:flex lg:w-[55%] flex-col p-10 relative overflow-hidden",style:{background:"linear-gradient(160deg, #f8fafc 0%, #e8f8eb 40%, #e8f8eb 100%)"},children:[i.jsx("div",{className:"absolute inset-0 opacity-40",style:{backgroundImage:"radial-gradient(circle, #7ded88 1px, transparent 1px)",backgroundSize:"28px 28px"}}),i.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}),i.jsx("div",{className:"absolute top-20 right-20 w-80 h-80 rounded-full opacity-30",style:{background:"radial-gradient(circle, #4bd557, transparent 70%)"}}),i.jsx("div",{className:"absolute bottom-10 left-10 w-60 h-60 rounded-full opacity-20",style:{background:"radial-gradient(circle, #2ebd3a, transparent 70%)"}}),i.jsxs("div",{className:"relative z-10 flex items-center gap-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center shadow-md",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)"},children:i.jsx(Oe,{className:"w-5 h-5 text-white"})}),i.jsxs("div",{children:[i.jsx("span",{className:"font-black text-lg text-gray-900 tracking-tight leading-none block",children:"Scan for Safe"}),i.jsx("span",{className:"text-[10px] text-green-700 font-semibold tracking-widest uppercase",children:"Product Protection Platform"})]})]}),i.jsx("div",{className:"relative z-10 mt-6",children:i.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-300 bg-white/60 backdrop-blur-sm text-xs font-bold text-green-800 tracking-widest uppercase shadow-sm",children:[i.jsx(Bu,{className:"w-3.5 h-3.5 text-green-600"}),"AI Powered · Trusted · Secure"]})}),i.jsxs("div",{className:"relative z-10 mt-8 flex gap-8 items-start",children:[i.jsxs("div",{className:"flex-1",children:[i.jsxs("h2",{className:"text-4xl font-black text-gray-900 leading-tight tracking-tight",children:["Smart Product",i.jsx("br",{}),"Safety &"," ",i.jsx("span",{style:{color:"#2ebd3a"},children:"Authentication"})]}),i.jsx("p",{className:"text-gray-600 text-sm mt-4 leading-relaxed max-w-xs font-medium",children:"AI-driven verification, counterfeit detection, and real-time monitoring to protect your products, customers, and brand integrity."})]}),i.jsx("div",{className:"flex-shrink-0 mt-[-12px]",children:i.jsx(o1,{})})]}),i.jsx("div",{className:"relative z-10 mt-6 grid grid-cols-2 gap-4",children:a1.map(({icon:x,label:m,desc:v,tags:w,tagColor:j})=>i.jsxs("div",{className:"bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl p-4 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-200",children:[i.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center mb-3",style:{background:`${j}18`,border:`1px solid ${j}30`},children:i.jsx(x,{className:"w-4 h-4",style:{color:j}})}),i.jsx("p",{className:"text-gray-900 text-sm font-black leading-tight",children:m}),i.jsx("p",{className:"text-gray-500 text-[11px] mt-1 leading-snug",children:v}),i.jsx("p",{className:"text-[10px] font-bold mt-2",style:{color:j},children:w})]},m))})]}),i.jsxs("div",{className:"w-full lg:w-[45%] flex flex-col justify-center items-center px-8 sm:px-14 py-12 bg-white relative",children:[i.jsxs("div",{className:"lg:hidden flex items-center gap-2 mb-10",children:[i.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)"},children:i.jsx(Oe,{className:"w-5 h-5 text-white"})}),i.jsx("span",{className:"font-black text-xl text-gray-900",children:"Scan for Safe"})]}),i.jsxs("div",{className:"w-full max-w-sm",children:[i.jsxs("div",{className:"mb-8",children:[i.jsxs("h1",{className:"text-4xl font-black text-gray-900 tracking-tight leading-tight",children:["Welcome ",i.jsx("span",{style:{color:"#2ebd3a"},children:"Back!"})]}),i.jsx("p",{className:"text-gray-500 text-sm mt-2 font-medium",children:"Sign in to continue to your dashboard"})]}),i.jsxs("form",{onSubmit:p,noValidate:!0,className:"space-y-5",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-[11px] font-black text-gray-700 tracking-widest uppercase mb-2",children:"Username"}),i.jsxs("div",{className:"relative",children:[i.jsx(So,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),i.jsx("input",{type:"text",value:n,onChange:x=>{r(x.target.value),c(m=>({...m,username:""}))},placeholder:"Enter your username",className:`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 ${d.username?"border-red-300 focus:ring-red-100":"border-gray-200 focus:border-green-400 focus:ring-green-50"}`})]}),d.username&&i.jsx("p",{className:"text-red-500 text-[11px] font-semibold mt-1.5 ml-1",children:d.username})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("label",{className:"block text-[11px] font-black text-gray-700 tracking-widest uppercase",children:"Password"}),i.jsx(Ve,{to:"/forgot-password",className:"text-xs font-bold hover:underline",style:{color:"#2ebd3a"},children:"Forgot password?"})]}),i.jsxs("div",{className:"relative",children:[i.jsx(hr,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),i.jsx("input",{type:e?"text":"password",value:s,onChange:x=>{o(x.target.value),c(m=>({...m,password:""}))},placeholder:"Enter your password",className:`w-full pl-10 pr-11 py-3.5 rounded-xl border text-sm font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 ${d.password?"border-red-300 focus:ring-red-100":"border-gray-200 focus:border-green-400 focus:ring-green-50"}`}),i.jsx("button",{type:"button",onClick:()=>t(!e),className:"absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors","aria-label":e?"Hide password":"Show password",children:e?i.jsx(Fh,{className:"w-4 h-4"}):i.jsx(_h,{className:"w-4 h-4"})})]}),d.password&&i.jsx("p",{className:"text-red-500 text-[11px] font-semibold mt-1.5 ml-1",children:d.password})]}),i.jsx("button",{type:"submit",disabled:a,className:"w-full py-4 rounded-xl text-white font-black text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed mt-1",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)",boxShadow:"0 10px 28px rgba(46, 189, 58,.28)"},children:a?i.jsxs(i.Fragment,{children:[i.jsxs("svg",{className:"animate-spin w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",children:[i.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),i.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"})]}),"Signing in…"]}):i.jsxs(i.Fragment,{children:["Access Dashboard",i.jsx(zu,{className:"w-4 h-4"})]})}),i.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-400 text-[11px] font-semibold",children:[i.jsx(hr,{className:"w-3.5 h-3.5"}),"Your data is encrypted and secure"]})]}),i.jsxs("p",{className:"text-center text-xs text-gray-500 font-medium mt-8",children:["Don't have an account?"," ",i.jsx(Ve,{to:"/register",className:"font-black hover:underline",style:{color:"#2ebd3a"},children:"Get started free →"})]})]})]})]})}function d1(){const t=Sn().pathname==="/login",[n,r]=y.useState(!1);return y.useEffect(()=>{const s=setTimeout(()=>{r(!0)},600);return()=>clearTimeout(s)},[]),i.jsxs("div",{className:"min-h-screen flex flex-col",children:[!t&&i.jsx(jh,{}),i.jsx("main",{className:"flex-1",children:i.jsxs(fh,{children:[i.jsx(je,{path:"/",element:i.jsx(Ng,{})}),i.jsx(je,{path:"/features",element:i.jsx($g,{})}),i.jsx(je,{path:"/products",element:i.jsx(Xg,{})}),i.jsx(je,{path:"/use-cases",element:i.jsx(Jg,{})}),i.jsx(je,{path:"/how-it-works",element:i.jsx(e1,{})}),i.jsx(je,{path:"/testimonials",element:i.jsx(s1,{})}),i.jsx(je,{path:"/login",element:i.jsx(l1,{})}),i.jsx(je,{path:"/contact",element:i.jsx(Pg,{})}),i.jsx(je,{path:"/privacy-policy",element:i.jsx(Ig,{})}),i.jsx(je,{path:"/terms",element:i.jsx(Tg,{})}),i.jsx(je,{path:"/qr-form",element:i.jsx(Lg,{})})]})}),!t&&i.jsx(ag,{}),!t&&i.jsx(Mg,{}),n&&i.jsxs("div",{onClick:()=>r(!1),style:{position:"fixed",inset:0,background:"rgba(11, 37, 69, 0.70)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",zIndex:999999,display:"flex",alignItems:"center",justifyContent:"center",padding:24,animation:"fadeInOverlay 0.35s ease-out forwards"},children:[i.jsx("style",{children:`
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
          `}),i.jsxs("div",{className:"sfs-popup-card",onClick:s=>s.stopPropagation(),children:[i.jsx("button",{className:"sfs-popup-close",onClick:()=>r(!1),children:"✕"}),i.jsx("img",{src:"/popup.png",alt:"ScanForSafe Announcement",style:{width:"100%",height:"auto",display:"block",maxHeight:"80vh",objectFit:"contain"}})]})]})]})}Ss.createRoot(document.getElementById("root")).render(i.jsx(cd.StrictMode,{children:i.jsx(vh,{children:i.jsx(d1,{})})}));
