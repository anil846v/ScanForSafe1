function _u(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const s=Object.getOwnPropertyDescriptor(r,l);s&&Object.defineProperty(e,l,s.get?s:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function Wu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nc={exports:{}},Ci={},rc={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gr=Symbol.for("react.element"),Bu=Symbol.for("react.portal"),Ou=Symbol.for("react.fragment"),Au=Symbol.for("react.strict_mode"),Du=Symbol.for("react.profiler"),Uu=Symbol.for("react.provider"),$u=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),Yu=Symbol.for("react.memo"),Qu=Symbol.for("react.lazy"),Pa=Symbol.iterator;function Xu(e){return e===null||typeof e!="object"?null:(e=Pa&&e[Pa]||e["@@iterator"],typeof e=="function"?e:null)}var ic={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lc=Object.assign,sc={};function vn(e,t,n){this.props=e,this.context=t,this.refs=sc,this.updater=n||ic}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ac(){}ac.prototype=vn.prototype;function zs(e,t,n){this.props=e,this.context=t,this.refs=sc,this.updater=n||ic}var Ns=zs.prototype=new ac;Ns.constructor=zs;lc(Ns,vn.prototype);Ns.isPureReactComponent=!0;var Ra=Array.isArray,oc=Object.prototype.hasOwnProperty,Es={current:null},cc={key:!0,ref:!0,__self:!0,__source:!0};function dc(e,t,n){var r,l={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)oc.call(t,r)&&!cc.hasOwnProperty(r)&&(l[r]=t[r]);var o=arguments.length-2;if(o===1)l.children=n;else if(1<o){for(var c=Array(o),d=0;d<o;d++)c[d]=arguments[d+2];l.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)l[r]===void 0&&(l[r]=o[r]);return{$$typeof:gr,type:e,key:s,ref:a,props:l,_owner:Es.current}}function Gu(e,t){return{$$typeof:gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ps(e){return typeof e=="object"&&e!==null&&e.$$typeof===gr}function qu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ia=/\/+/g;function Gi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qu(""+e.key):t.toString(36)}function Ar(e,t,n,r,l){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case gr:case Bu:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Gi(a,0):r,Ra(l)?(n="",e!=null&&(n=e.replace(Ia,"$&/")+"/"),Ar(l,t,n,"",function(d){return d})):l!=null&&(Ps(l)&&(l=Gu(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Ia,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",Ra(e))for(var o=0;o<e.length;o++){s=e[o];var c=r+Gi(s,o);a+=Ar(s,t,n,c,l)}else if(c=Xu(e),typeof c=="function")for(e=c.call(e),o=0;!(s=e.next()).done;)s=s.value,c=r+Gi(s,o++),a+=Ar(s,t,n,c,l);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function jr(e,t,n){if(e==null)return e;var r=[],l=0;return Ar(e,r,"","",function(s){return t.call(n,s,l++)}),r}function Ku(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Dr={transition:null},Zu={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Dr,ReactCurrentOwner:Es};function uc(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:jr,forEach:function(e,t,n){jr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jr(e,function(){t++}),t},toArray:function(e){return jr(e,function(t){return t})||[]},only:function(e){if(!Ps(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=vn;T.Fragment=Ou;T.Profiler=Du;T.PureComponent=zs;T.StrictMode=Au;T.Suspense=Vu;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zu;T.act=uc;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lc({},e.props),l=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Es.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)oc.call(t,c)&&!cc.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){o=Array(c);for(var d=0;d<c;d++)o[d]=arguments[d+2];r.children=o}return{$$typeof:gr,type:e.type,key:l,ref:s,props:r,_owner:a}};T.createContext=function(e){return e={$$typeof:$u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Uu,_context:e},e.Consumer=e};T.createElement=dc;T.createFactory=function(e){var t=dc.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Hu,render:e}};T.isValidElement=Ps;T.lazy=function(e){return{$$typeof:Qu,_payload:{_status:-1,_result:e},_init:Ku}};T.memo=function(e,t){return{$$typeof:Yu,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Dr.transition;Dr.transition={};try{e()}finally{Dr.transition=t}};T.unstable_act=uc;T.useCallback=function(e,t){return de.current.useCallback(e,t)};T.useContext=function(e){return de.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return de.current.useDeferredValue(e)};T.useEffect=function(e,t){return de.current.useEffect(e,t)};T.useId=function(){return de.current.useId()};T.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return de.current.useMemo(e,t)};T.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};T.useRef=function(e){return de.current.useRef(e)};T.useState=function(e){return de.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return de.current.useTransition()};T.version="18.3.1";rc.exports=T;var w=rc.exports;const fc=Wu(w),Ju=_u({__proto__:null,default:fc},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef=w,tf=Symbol.for("react.element"),nf=Symbol.for("react.fragment"),rf=Object.prototype.hasOwnProperty,lf=ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sf={key:!0,ref:!0,__self:!0,__source:!0};function pc(e,t,n){var r,l={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)rf.call(t,r)&&!sf.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:tf,type:e,key:s,ref:a,props:l,_owner:lf.current}}Ci.Fragment=nf;Ci.jsx=pc;Ci.jsxs=pc;nc.exports=Ci;var i=nc.exports,zl={},hc={exports:{}},ke={},gc={exports:{}},xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,I){var M=N.length;N.push(I);e:for(;0<M;){var Y=M-1>>>1,Z=N[Y];if(0<l(Z,I))N[Y]=I,N[M]=Z,M=Y;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var I=N[0],M=N.pop();if(M!==I){N[0]=M;e:for(var Y=0,Z=N.length,br=Z>>>1;Y<br;){var Ct=2*(Y+1)-1,Xi=N[Ct],zt=Ct+1,kr=N[zt];if(0>l(Xi,M))zt<Z&&0>l(kr,Xi)?(N[Y]=kr,N[zt]=M,Y=zt):(N[Y]=Xi,N[Ct]=M,Y=Ct);else if(zt<Z&&0>l(kr,M))N[Y]=kr,N[zt]=M,Y=zt;else break e}}return I}function l(N,I){var M=N.sortIndex-I.sortIndex;return M!==0?M:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var c=[],d=[],x=1,h=null,g=3,m=!1,v=!1,b=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var I=n(d);I!==null;){if(I.callback===null)r(d);else if(I.startTime<=N)r(d),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(d)}}function y(N){if(b=!1,p(N),!v)if(n(c)!==null)v=!0,Yi(S);else{var I=n(d);I!==null&&Qi(y,I.startTime-N)}}function S(N,I){v=!1,b&&(b=!1,f(R),R=-1),m=!0;var M=g;try{for(p(I),h=n(c);h!==null&&(!(h.expirationTime>I)||N&&!Re());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,g=h.priorityLevel;var Z=Y(h.expirationTime<=I);I=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(c)&&r(c),p(I)}else r(c);h=n(c)}if(h!==null)var br=!0;else{var Ct=n(d);Ct!==null&&Qi(y,Ct.startTime-I),br=!1}return br}finally{h=null,g=M,m=!1}}var E=!1,P=null,R=-1,A=5,L=-1;function Re(){return!(e.unstable_now()-L<A)}function Sn(){if(P!==null){var N=e.unstable_now();L=N;var I=!0;try{I=P(!0,N)}finally{I?Cn():(E=!1,P=null)}}else E=!1}var Cn;if(typeof u=="function")Cn=function(){u(Sn)};else if(typeof MessageChannel<"u"){var Ea=new MessageChannel,Fu=Ea.port2;Ea.port1.onmessage=Sn,Cn=function(){Fu.postMessage(null)}}else Cn=function(){j(Sn,0)};function Yi(N){P=N,E||(E=!0,Cn())}function Qi(N,I){R=j(function(){N(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,Yi(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var M=g;g=I;try{return N()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=g;g=N;try{return I()}finally{g=M}},e.unstable_scheduleCallback=function(N,I,M){var Y=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Y+M:Y):M=Y,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=M+Z,N={id:x++,callback:I,priorityLevel:N,startTime:M,expirationTime:Z,sortIndex:-1},M>Y?(N.sortIndex=M,t(d,N),n(c)===null&&N===n(d)&&(b?(f(R),R=-1):b=!0,Qi(y,M-Y))):(N.sortIndex=Z,t(c,N),v||m||(v=!0,Yi(S))),N},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(N){var I=g;return function(){var M=g;g=I;try{return N.apply(this,arguments)}finally{g=M}}}})(xc);gc.exports=xc;var af=gc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of=w,be=af;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mc=new Set,Gn={};function At(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Gn[e]=t,e=0;e<t.length;e++)mc.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nl=Object.prototype.hasOwnProperty,cf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,La={},Ma={};function df(e){return Nl.call(Ma,e)?!0:Nl.call(La,e)?!1:cf.test(e)?Ma[e]=!0:(La[e]=!0,!1)}function uf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ff(e,t,n,r){if(t===null||typeof t>"u"||uf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,l,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rs=/[\-:]([a-z])/g;function Is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rs,Is);re[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rs,Is);re[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rs,Is);re[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ls(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ff(t,n,l,r)&&(n=null),r||l===null?df(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Ms=Symbol.for("react.strict_mode"),El=Symbol.for("react.profiler"),yc=Symbol.for("react.provider"),vc=Symbol.for("react.context"),Ts=Symbol.for("react.forward_ref"),Pl=Symbol.for("react.suspense"),Rl=Symbol.for("react.suspense_list"),Fs=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),wc=Symbol.for("react.offscreen"),Ta=Symbol.iterator;function zn(e){return e===null||typeof e!="object"?null:(e=Ta&&e[Ta]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,qi;function Tn(e){if(qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qi=t&&t[1]||""}return`
`+qi+e}var Ki=!1;function Zi(e,t){if(!e||Ki)return"";Ki=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),s=r.stack.split(`
`),a=l.length-1,o=s.length-1;1<=a&&0<=o&&l[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(l[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||l[a]!==s[o]){var c=`
`+l[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=o);break}}}finally{Ki=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tn(e):""}function pf(e){switch(e.tag){case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 2:case 15:return e=Zi(e.type,!1),e;case 11:return e=Zi(e.type.render,!1),e;case 1:return e=Zi(e.type,!0),e;default:return""}}function Il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Vt:return"Portal";case El:return"Profiler";case Ms:return"StrictMode";case Pl:return"Suspense";case Rl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vc:return(e.displayName||"Context")+".Consumer";case yc:return(e._context.displayName||"Context")+".Provider";case Ts:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fs:return t=e.displayName||null,t!==null?t:Il(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return Il(e(t))}catch{}}return null}function hf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Il(t);case 8:return t===Ms?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gf(e){var t=bc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cr(e){e._valueTracker||(e._valueTracker=gf(e))}function kc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jc(e,t){t=t.checked,t!=null&&Ls(e,"checked",t,!1)}function Ml(e,t){jc(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tl(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _a(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tl(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function rn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Fn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function Sc(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ba(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _l(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zr,zc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xf=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){xf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function Nc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function Ec(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Nc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var mf=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(e,t){if(t){if(mf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ol=null;function _s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,ln=null,sn=null;function Oa(e){if(e=yr(e)){if(typeof Al!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ri(t),Al(e.stateNode,e.type,t))}}function Pc(e){ln?sn?sn.push(e):sn=[e]:ln=e}function Rc(){if(ln){var e=ln,t=sn;if(sn=ln=null,Oa(e),t)for(e=0;e<t.length;e++)Oa(t[e])}}function Ic(e,t){return e(t)}function Lc(){}var Ji=!1;function Mc(e,t,n){if(Ji)return e(t,n);Ji=!0;try{return Ic(e,t,n)}finally{Ji=!1,(ln!==null||sn!==null)&&(Lc(),Rc())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ri(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Dl=!1;if(qe)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Dl=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Dl=!1}function yf(e,t,n,r,l,s,a,o,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(x){this.onError(x)}}var On=!1,ei=null,ti=!1,Ul=null,vf={onError:function(e){On=!0,ei=e}};function wf(e,t,n,r,l,s,a,o,c){On=!1,ei=null,yf.apply(vf,arguments)}function bf(e,t,n,r,l,s,a,o,c){if(wf.apply(this,arguments),On){if(On){var d=ei;On=!1,ei=null}else throw Error(k(198));ti||(ti=!0,Ul=d)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Aa(e){if(Dt(e)!==e)throw Error(k(188))}function kf(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return Aa(l),e;if(s===r)return Aa(l),t;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=s;else{for(var a=!1,o=l.child;o;){if(o===n){a=!0,n=l,r=s;break}if(o===r){a=!0,r=l,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=l;break}if(o===r){a=!0,r=s,n=l;break}o=o.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Fc(e){return e=kf(e),e!==null?_c(e):null}function _c(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_c(e);if(t!==null)return t;e=e.sibling}return null}var Wc=be.unstable_scheduleCallback,Da=be.unstable_cancelCallback,jf=be.unstable_shouldYield,Sf=be.unstable_requestPaint,Q=be.unstable_now,Cf=be.unstable_getCurrentPriorityLevel,Ws=be.unstable_ImmediatePriority,Bc=be.unstable_UserBlockingPriority,ni=be.unstable_NormalPriority,zf=be.unstable_LowPriority,Oc=be.unstable_IdlePriority,zi=null,$e=null;function Nf(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:Rf,Ef=Math.log,Pf=Math.LN2;function Rf(e){return e>>>=0,e===0?32:31-(Ef(e)/Pf|0)|0}var Nr=64,Er=4194304;function _n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~l;o!==0?r=_n(o):(s&=a,s!==0&&(r=_n(s)))}else a=n&~l,a!==0?r=_n(a):s!==0&&(r=_n(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,s=t&-t,l>=s||l===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_e(t),l=1<<n,r|=e[n],t&=~l;return r}function If(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-_e(s),o=1<<a,c=l[a];c===-1?(!(o&n)||o&r)&&(l[a]=If(o,t)):c<=t&&(e.expiredLanes|=o),s&=~o}}function $l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ac(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function el(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_e(t),e[t]=n}function Mf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-_e(n),s=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~s}}function Bs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_e(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var _=0;function Dc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Uc,Os,$c,Hc,Vc,Hl=!1,Pr=[],ut=null,ft=null,pt=null,Zn=new Map,Jn=new Map,it=[],Tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ua(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function En(e,t,n,r,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[l]},t!==null&&(t=yr(t),t!==null&&Os(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ff(e,t,n,r,l){switch(t){case"focusin":return ut=En(ut,e,t,n,r,l),!0;case"dragenter":return ft=En(ft,e,t,n,r,l),!0;case"mouseover":return pt=En(pt,e,t,n,r,l),!0;case"pointerover":var s=l.pointerId;return Zn.set(s,En(Zn.get(s)||null,e,t,n,r,l)),!0;case"gotpointercapture":return s=l.pointerId,Jn.set(s,En(Jn.get(s)||null,e,t,n,r,l)),!0}return!1}function Yc(e){var t=Pt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Tc(n),t!==null){e.blockedOn=t,Vc(e.priority,function(){$c(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ol=r,n.target.dispatchEvent(r),Ol=null}else return t=yr(n),t!==null&&Os(t),e.blockedOn=n,!1;t.shift()}return!0}function $a(e,t,n){Ur(e)&&n.delete(t)}function _f(){Hl=!1,ut!==null&&Ur(ut)&&(ut=null),ft!==null&&Ur(ft)&&(ft=null),pt!==null&&Ur(pt)&&(pt=null),Zn.forEach($a),Jn.forEach($a)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,Hl||(Hl=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,_f)))}function er(e){function t(l){return Pn(l,e)}if(0<Pr.length){Pn(Pr[0],e);for(var n=1;n<Pr.length;n++){var r=Pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&Pn(ut,e),ft!==null&&Pn(ft,e),pt!==null&&Pn(pt,e),Zn.forEach(t),Jn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)Yc(n),n.blockedOn===null&&it.shift()}var an=et.ReactCurrentBatchConfig,ii=!0;function Wf(e,t,n,r){var l=_,s=an.transition;an.transition=null;try{_=1,As(e,t,n,r)}finally{_=l,an.transition=s}}function Bf(e,t,n,r){var l=_,s=an.transition;an.transition=null;try{_=4,As(e,t,n,r)}finally{_=l,an.transition=s}}function As(e,t,n,r){if(ii){var l=Vl(e,t,n,r);if(l===null)dl(e,t,r,li,n),Ua(e,r);else if(Ff(l,e,t,n,r))r.stopPropagation();else if(Ua(e,r),t&4&&-1<Tf.indexOf(e)){for(;l!==null;){var s=yr(l);if(s!==null&&Uc(s),s=Vl(e,t,n,r),s===null&&dl(e,t,r,li,n),s===l)break;l=s}l!==null&&r.stopPropagation()}else dl(e,t,r,null,n)}}var li=null;function Vl(e,t,n,r){if(li=null,e=_s(r),e=Pt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return li=e,null}function Qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cf()){case Ws:return 1;case Bc:return 4;case ni:case zf:return 16;case Oc:return 536870912;default:return 16}default:return 16}}var st=null,Ds=null,$r=null;function Xc(){if($r)return $r;var e,t=Ds,n=t.length,r,l="value"in st?st.value:st.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[s-r];r++);return $r=l.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rr(){return!0}function Ha(){return!1}function je(e){function t(n,r,l,s,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rr:Ha,this.isPropagationStopped=Ha,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rr)},persist:function(){},isPersistent:Rr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Us=je(wn),mr=H({},wn,{view:0,detail:0}),Of=je(mr),tl,nl,Rn,Ni=H({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(tl=e.screenX-Rn.screenX,nl=e.screenY-Rn.screenY):nl=tl=0,Rn=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),Va=je(Ni),Af=H({},Ni,{dataTransfer:0}),Df=je(Af),Uf=H({},mr,{relatedTarget:0}),rl=je(Uf),$f=H({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Hf=je($f),Vf=H({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yf=je(Vf),Qf=H({},wn,{data:0}),Ya=je(Qf),Xf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qf[e])?!!t[e]:!1}function $s(){return Kf}var Zf=H({},mr,{key:function(e){if(e.key){var t=Xf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$s,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jf=je(Zf),e0=H({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qa=je(e0),t0=H({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$s}),n0=je(t0),r0=H({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),i0=je(r0),l0=H({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=je(l0),a0=[9,13,27,32],Hs=qe&&"CompositionEvent"in window,An=null;qe&&"documentMode"in document&&(An=document.documentMode);var o0=qe&&"TextEvent"in window&&!An,Gc=qe&&(!Hs||An&&8<An&&11>=An),Xa=" ",Ga=!1;function qc(e,t){switch(e){case"keyup":return a0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function c0(e,t){switch(e){case"compositionend":return Kc(t);case"keypress":return t.which!==32?null:(Ga=!0,Xa);case"textInput":return e=t.data,e===Xa&&Ga?null:e;default:return null}}function d0(e,t){if(Qt)return e==="compositionend"||!Hs&&qc(e,t)?(e=Xc(),$r=Ds=st=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gc&&t.locale!=="ko"?null:t.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!u0[e.type]:t==="textarea"}function Zc(e,t,n,r){Pc(r),t=si(t,"onChange"),0<t.length&&(n=new Us("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,tr=null;function f0(e){cd(e,0)}function Ei(e){var t=qt(e);if(kc(t))return e}function p0(e,t){if(e==="change")return t}var Jc=!1;if(qe){var il;if(qe){var ll="oninput"in document;if(!ll){var Ka=document.createElement("div");Ka.setAttribute("oninput","return;"),ll=typeof Ka.oninput=="function"}il=ll}else il=!1;Jc=il&&(!document.documentMode||9<document.documentMode)}function Za(){Dn&&(Dn.detachEvent("onpropertychange",ed),tr=Dn=null)}function ed(e){if(e.propertyName==="value"&&Ei(tr)){var t=[];Zc(t,tr,e,_s(e)),Mc(f0,t)}}function h0(e,t,n){e==="focusin"?(Za(),Dn=t,tr=n,Dn.attachEvent("onpropertychange",ed)):e==="focusout"&&Za()}function g0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(tr)}function x0(e,t){if(e==="click")return Ei(t)}function m0(e,t){if(e==="input"||e==="change")return Ei(t)}function y0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:y0;function nr(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Nl.call(t,l)||!Be(e[l],t[l]))return!1}return!0}function Ja(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eo(e,t){var n=Ja(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ja(n)}}function td(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?td(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nd(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function Vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function v0(e){var t=nd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&td(n.ownerDocument.documentElement,n)){if(r!==null&&Vs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,s=Math.min(r.start,l);r=r.end===void 0?s:Math.min(r.end,l),!e.extend&&s>r&&(l=r,r=s,s=l),l=eo(n,s);var a=eo(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var w0=qe&&"documentMode"in document&&11>=document.documentMode,Xt=null,Yl=null,Un=null,Ql=!1;function to(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ql||Xt==null||Xt!==Jr(r)||(r=Xt,"selectionStart"in r&&Vs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&nr(Un,r)||(Un=r,r=si(Yl,"onSelect"),0<r.length&&(t=new Us("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionend:Ir("Transition","TransitionEnd")},sl={},rd={};qe&&(rd=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Pi(e){if(sl[e])return sl[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rd)return sl[e]=t[n];return e}var id=Pi("animationend"),ld=Pi("animationiteration"),sd=Pi("animationstart"),ad=Pi("transitionend"),od=new Map,no="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){od.set(e,t),At(t,[e])}for(var al=0;al<no.length;al++){var ol=no[al],b0=ol.toLowerCase(),k0=ol[0].toUpperCase()+ol.slice(1);kt(b0,"on"+k0)}kt(id,"onAnimationEnd");kt(ld,"onAnimationIteration");kt(sd,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(ad,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function ro(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bf(r,t,void 0,e),e.currentTarget=null}function cd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],c=o.instance,d=o.currentTarget;if(o=o.listener,c!==s&&l.isPropagationStopped())break e;ro(l,o,d),s=c}else for(a=0;a<r.length;a++){if(o=r[a],c=o.instance,d=o.currentTarget,o=o.listener,c!==s&&l.isPropagationStopped())break e;ro(l,o,d),s=c}}}if(ti)throw e=Ul,ti=!1,Ul=null,e}function B(e,t){var n=t[Zl];n===void 0&&(n=t[Zl]=new Set);var r=e+"__bubble";n.has(r)||(dd(t,e,2,!1),n.add(r))}function cl(e,t,n){var r=0;t&&(r|=4),dd(n,e,r,t)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Lr]){e[Lr]=!0,mc.forEach(function(n){n!=="selectionchange"&&(j0.has(n)||cl(n,!1,e),cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lr]||(t[Lr]=!0,cl("selectionchange",!1,t))}}function dd(e,t,n,r){switch(Qc(t)){case 1:var l=Wf;break;case 4:l=Bf;break;default:l=As}n=l.bind(null,t,n,e),l=void 0,!Dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function dl(e,t,n,r,l){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;a=a.return}for(;o!==null;){if(a=Pt(o),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}o=o.parentNode}}r=r.return}Mc(function(){var d=s,x=_s(n),h=[];e:{var g=od.get(e);if(g!==void 0){var m=Us,v=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":m=Jf;break;case"focusin":v="focus",m=rl;break;case"focusout":v="blur",m=rl;break;case"beforeblur":case"afterblur":m=rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=n0;break;case id:case ld:case sd:m=Hf;break;case ad:m=i0;break;case"scroll":m=Of;break;case"wheel":m=s0;break;case"copy":case"cut":case"paste":m=Yf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Qa}var b=(t&4)!==0,j=!b&&e==="scroll",f=b?g!==null?g+"Capture":null:g;b=[];for(var u=d,p;u!==null;){p=u;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Kn(u,f),y!=null&&b.push(ir(u,y,p)))),j)break;u=u.return}0<b.length&&(g=new m(g,v,null,n,x),h.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&n!==Ol&&(v=n.relatedTarget||n.fromElement)&&(Pt(v)||v[Ke]))break e;if((m||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=d,v=v?Pt(v):null,v!==null&&(j=Dt(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=d),m!==v)){if(b=Va,y="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(b=Qa,y="onPointerLeave",f="onPointerEnter",u="pointer"),j=m==null?g:qt(m),p=v==null?g:qt(v),g=new b(y,u+"leave",m,n,x),g.target=j,g.relatedTarget=p,y=null,Pt(x)===d&&(b=new b(f,u+"enter",v,n,x),b.target=p,b.relatedTarget=j,y=b),j=y,m&&v)t:{for(b=m,f=v,u=0,p=b;p;p=Ht(p))u++;for(p=0,y=f;y;y=Ht(y))p++;for(;0<u-p;)b=Ht(b),u--;for(;0<p-u;)f=Ht(f),p--;for(;u--;){if(b===f||f!==null&&b===f.alternate)break t;b=Ht(b),f=Ht(f)}b=null}else b=null;m!==null&&io(h,g,m,b,!1),v!==null&&j!==null&&io(h,j,v,b,!0)}}e:{if(g=d?qt(d):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var S=p0;else if(qa(g))if(Jc)S=m0;else{S=g0;var E=h0}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=x0);if(S&&(S=S(e,d))){Zc(h,S,n,x);break e}E&&E(e,g,d),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Tl(g,"number",g.value)}switch(E=d?qt(d):window,e){case"focusin":(qa(E)||E.contentEditable==="true")&&(Xt=E,Yl=d,Un=null);break;case"focusout":Un=Yl=Xt=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,to(h,n,x);break;case"selectionchange":if(w0)break;case"keydown":case"keyup":to(h,n,x)}var P;if(Hs)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Qt?qc(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Gc&&n.locale!=="ko"&&(Qt||R!=="onCompositionStart"?R==="onCompositionEnd"&&Qt&&(P=Xc()):(st=x,Ds="value"in st?st.value:st.textContent,Qt=!0)),E=si(d,R),0<E.length&&(R=new Ya(R,e,null,n,x),h.push({event:R,listeners:E}),P?R.data=P:(P=Kc(n),P!==null&&(R.data=P)))),(P=o0?c0(e,n):d0(e,n))&&(d=si(d,"onBeforeInput"),0<d.length&&(x=new Ya("onBeforeInput","beforeinput",null,n,x),h.push({event:x,listeners:d}),x.data=P))}cd(h,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function si(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=Kn(e,n),s!=null&&r.unshift(ir(e,s,l)),s=Kn(e,t),s!=null&&r.push(ir(e,s,l))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function io(e,t,n,r,l){for(var s=t._reactName,a=[];n!==null&&n!==r;){var o=n,c=o.alternate,d=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&d!==null&&(o=d,l?(c=Kn(n,s),c!=null&&a.unshift(ir(n,c,o))):l||(c=Kn(n,s),c!=null&&a.push(ir(n,c,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var S0=/\r\n?/g,C0=/\u0000|\uFFFD/g;function lo(e){return(typeof e=="string"?e:""+e).replace(S0,`
`).replace(C0,"")}function Mr(e,t,n){if(t=lo(t),lo(e)!==t&&n)throw Error(k(425))}function ai(){}var Xl=null,Gl=null;function ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,z0=typeof clearTimeout=="function"?clearTimeout:void 0,so=typeof Promise=="function"?Promise:void 0,N0=typeof queueMicrotask=="function"?queueMicrotask:typeof so<"u"?function(e){return so.resolve(null).then(e).catch(E0)}:Kl;function E0(e){setTimeout(function(){throw e})}function ul(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);er(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ao(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+bn,lr="__reactProps$"+bn,Ke="__reactContainer$"+bn,Zl="__reactEvents$"+bn,P0="__reactListeners$"+bn,R0="__reactHandles$"+bn;function Pt(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ao(e);e!==null;){if(n=e[Ue])return n;e=ao(e)}return t}e=n,n=e.parentNode}return null}function yr(e){return e=e[Ue]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ri(e){return e[lr]||null}var Jl=[],Kt=-1;function jt(e){return{current:e}}function O(e){0>Kt||(e.current=Jl[Kt],Jl[Kt]=null,Kt--)}function W(e,t){Kt++,Jl[Kt]=e.current,e.current=t}var bt={},ae=jt(bt),he=jt(!1),Tt=bt;function fn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in n)l[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function oi(){O(he),O(ae)}function oo(e,t,n){if(ae.current!==bt)throw Error(k(168));W(ae,t),W(he,n)}function ud(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,hf(e)||"Unknown",l));return H({},n,r)}function ci(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,Tt=ae.current,W(ae,e),W(he,he.current),!0}function co(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=ud(e,t,Tt),r.__reactInternalMemoizedMergedChildContext=e,O(he),O(ae),W(ae,e)):O(he),W(he,n)}var Ye=null,Ii=!1,fl=!1;function fd(e){Ye===null?Ye=[e]:Ye.push(e)}function I0(e){Ii=!0,fd(e)}function St(){if(!fl&&Ye!==null){fl=!0;var e=0,t=_;try{var n=Ye;for(_=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,Ii=!1}catch(l){throw Ye!==null&&(Ye=Ye.slice(e+1)),Wc(Ws,St),l}finally{_=t,fl=!1}}return null}var Zt=[],Jt=0,di=null,ui=0,Se=[],Ce=0,Ft=null,Qe=1,Xe="";function Nt(e,t){Zt[Jt++]=ui,Zt[Jt++]=di,di=e,ui=t}function pd(e,t,n){Se[Ce++]=Qe,Se[Ce++]=Xe,Se[Ce++]=Ft,Ft=e;var r=Qe;e=Xe;var l=32-_e(r)-1;r&=~(1<<l),n+=1;var s=32-_e(t)+l;if(30<s){var a=l-l%5;s=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Qe=1<<32-_e(t)+l|n<<l|r,Xe=s+e}else Qe=1<<s|n<<l|r,Xe=e}function Ys(e){e.return!==null&&(Nt(e,1),pd(e,1,0))}function Qs(e){for(;e===di;)di=Zt[--Jt],Zt[Jt]=null,ui=Zt[--Jt],Zt[Jt]=null;for(;e===Ft;)Ft=Se[--Ce],Se[Ce]=null,Xe=Se[--Ce],Se[Ce]=null,Qe=Se[--Ce],Se[Ce]=null}var we=null,ve=null,D=!1,Fe=null;function hd(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ve=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:Qe,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ve=null,!0):!1;default:return!1}}function es(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ts(e){if(D){var t=ve;if(t){var n=t;if(!uo(e,t)){if(es(e))throw Error(k(418));t=ht(n.nextSibling);var r=we;t&&uo(e,t)?hd(r,n):(e.flags=e.flags&-4097|2,D=!1,we=e)}}else{if(es(e))throw Error(k(418));e.flags=e.flags&-4097|2,D=!1,we=e}}}function fo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Tr(e){if(e!==we)return!1;if(!D)return fo(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ql(e.type,e.memoizedProps)),t&&(t=ve)){if(es(e))throw gd(),Error(k(418));for(;t;)hd(e,t),t=ht(t.nextSibling)}if(fo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=we?ht(e.stateNode.nextSibling):null;return!0}function gd(){for(var e=ve;e;)e=ht(e.nextSibling)}function pn(){ve=we=null,D=!1}function Xs(e){Fe===null?Fe=[e]:Fe.push(e)}var L0=et.ReactCurrentBatchConfig;function In(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var o=l.refs;a===null?delete o[s]:o[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Fr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function po(e){var t=e._init;return t(e._payload)}function xd(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=yt(f,u),f.index=0,f.sibling=null,f}function s(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,u,p,y){return u===null||u.tag!==6?(u=vl(p,f.mode,y),u.return=f,u):(u=l(u,p),u.return=f,u)}function c(f,u,p,y){var S=p.type;return S===Yt?x(f,u,p.props.children,y,p.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nt&&po(S)===u.type)?(y=l(u,p.props),y.ref=In(f,u,p),y.return=f,y):(y=Kr(p.type,p.key,p.props,null,f.mode,y),y.ref=In(f,u,p),y.return=f,y)}function d(f,u,p,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=wl(p,f.mode,y),u.return=f,u):(u=l(u,p.children||[]),u.return=f,u)}function x(f,u,p,y,S){return u===null||u.tag!==7?(u=Mt(p,f.mode,y,S),u.return=f,u):(u=l(u,p),u.return=f,u)}function h(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=vl(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Sr:return p=Kr(u.type,u.key,u.props,null,f.mode,p),p.ref=In(f,null,u),p.return=f,p;case Vt:return u=wl(u,f.mode,p),u.return=f,u;case nt:var y=u._init;return h(f,y(u._payload),p)}if(Fn(u)||zn(u))return u=Mt(u,f.mode,p,null),u.return=f,u;Fr(f,u)}return null}function g(f,u,p,y){var S=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:o(f,u,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:return p.key===S?c(f,u,p,y):null;case Vt:return p.key===S?d(f,u,p,y):null;case nt:return S=p._init,g(f,u,S(p._payload),y)}if(Fn(p)||zn(p))return S!==null?null:x(f,u,p,y,null);Fr(f,p)}return null}function m(f,u,p,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,o(u,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sr:return f=f.get(y.key===null?p:y.key)||null,c(u,f,y,S);case Vt:return f=f.get(y.key===null?p:y.key)||null,d(u,f,y,S);case nt:var E=y._init;return m(f,u,p,E(y._payload),S)}if(Fn(y)||zn(y))return f=f.get(p)||null,x(u,f,y,S,null);Fr(u,y)}return null}function v(f,u,p,y){for(var S=null,E=null,P=u,R=u=0,A=null;P!==null&&R<p.length;R++){P.index>R?(A=P,P=null):A=P.sibling;var L=g(f,P,p[R],y);if(L===null){P===null&&(P=A);break}e&&P&&L.alternate===null&&t(f,P),u=s(L,u,R),E===null?S=L:E.sibling=L,E=L,P=A}if(R===p.length)return n(f,P),D&&Nt(f,R),S;if(P===null){for(;R<p.length;R++)P=h(f,p[R],y),P!==null&&(u=s(P,u,R),E===null?S=P:E.sibling=P,E=P);return D&&Nt(f,R),S}for(P=r(f,P);R<p.length;R++)A=m(P,f,R,p[R],y),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?R:A.key),u=s(A,u,R),E===null?S=A:E.sibling=A,E=A);return e&&P.forEach(function(Re){return t(f,Re)}),D&&Nt(f,R),S}function b(f,u,p,y){var S=zn(p);if(typeof S!="function")throw Error(k(150));if(p=S.call(p),p==null)throw Error(k(151));for(var E=S=null,P=u,R=u=0,A=null,L=p.next();P!==null&&!L.done;R++,L=p.next()){P.index>R?(A=P,P=null):A=P.sibling;var Re=g(f,P,L.value,y);if(Re===null){P===null&&(P=A);break}e&&P&&Re.alternate===null&&t(f,P),u=s(Re,u,R),E===null?S=Re:E.sibling=Re,E=Re,P=A}if(L.done)return n(f,P),D&&Nt(f,R),S;if(P===null){for(;!L.done;R++,L=p.next())L=h(f,L.value,y),L!==null&&(u=s(L,u,R),E===null?S=L:E.sibling=L,E=L);return D&&Nt(f,R),S}for(P=r(f,P);!L.done;R++,L=p.next())L=m(P,f,R,L.value,y),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?R:L.key),u=s(L,u,R),E===null?S=L:E.sibling=L,E=L);return e&&P.forEach(function(Sn){return t(f,Sn)}),D&&Nt(f,R),S}function j(f,u,p,y){if(typeof p=="object"&&p!==null&&p.type===Yt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:e:{for(var S=p.key,E=u;E!==null;){if(E.key===S){if(S=p.type,S===Yt){if(E.tag===7){n(f,E.sibling),u=l(E,p.props.children),u.return=f,f=u;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nt&&po(S)===E.type){n(f,E.sibling),u=l(E,p.props),u.ref=In(f,E,p),u.return=f,f=u;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===Yt?(u=Mt(p.props.children,f.mode,y,p.key),u.return=f,f=u):(y=Kr(p.type,p.key,p.props,null,f.mode,y),y.ref=In(f,u,p),y.return=f,f=y)}return a(f);case Vt:e:{for(E=p.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=l(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=wl(p,f.mode,y),u.return=f,f=u}return a(f);case nt:return E=p._init,j(f,u,E(p._payload),y)}if(Fn(p))return v(f,u,p,y);if(zn(p))return b(f,u,p,y);Fr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=l(u,p),u.return=f,f=u):(n(f,u),u=vl(p,f.mode,y),u.return=f,f=u),a(f)):n(f,u)}return j}var hn=xd(!0),md=xd(!1),fi=jt(null),pi=null,en=null,Gs=null;function qs(){Gs=en=pi=null}function Ks(e){var t=fi.current;O(fi),e._currentValue=t}function ns(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){pi=e,Gs=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(Gs!==e)if(e={context:e,memoizedValue:t,next:null},en===null){if(pi===null)throw Error(k(308));en=e,pi.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return t}var Rt=null;function Zs(e){Rt===null?Rt=[e]:Rt.push(e)}function yd(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Zs(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function Js(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ze(e,n)}return l=r.interleaved,l===null?(t.next=t,Zs(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ze(e,n)}function Vr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bs(e,n)}}function ho(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?l=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hi(e,t,n,r){var l=e.updateQueue;rt=!1;var s=l.firstBaseUpdate,a=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var c=o,d=c.next;c.next=null,a===null?s=d:a.next=d,a=c;var x=e.alternate;x!==null&&(x=x.updateQueue,o=x.lastBaseUpdate,o!==a&&(o===null?x.firstBaseUpdate=d:o.next=d,x.lastBaseUpdate=c))}if(s!==null){var h=l.baseState;a=0,x=d=c=null,o=s;do{var g=o.lane,m=o.eventTime;if((r&g)===g){x!==null&&(x=x.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=e,b=o;switch(g=t,m=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){h=v.call(m,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,g=typeof v=="function"?v.call(m,h,g):v,g==null)break e;h=H({},h,g);break e;case 2:rt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[o]:g.push(o))}else m={eventTime:m,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},x===null?(d=x=m,c=h):x=x.next=m,a|=g;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;g=o,o=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(x===null&&(c=h),l.baseState=c,l.firstBaseUpdate=d,l.lastBaseUpdate=x,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else s===null&&(l.shared.lanes=0);Wt|=a,e.lanes=a,e.memoizedState=h}}function go(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var vr={},He=jt(vr),sr=jt(vr),ar=jt(vr);function It(e){if(e===vr)throw Error(k(174));return e}function ea(e,t){switch(W(ar,t),W(sr,e),W(He,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_l(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_l(t,e)}O(He),W(He,t)}function gn(){O(He),O(sr),O(ar)}function wd(e){It(ar.current);var t=It(He.current),n=_l(t,e.type);t!==n&&(W(sr,e),W(He,n))}function ta(e){sr.current===e&&(O(He),O(sr))}var U=jt(0);function gi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pl=[];function na(){for(var e=0;e<pl.length;e++)pl[e]._workInProgressVersionPrimary=null;pl.length=0}var Yr=et.ReactCurrentDispatcher,hl=et.ReactCurrentBatchConfig,_t=0,$=null,q=null,J=null,xi=!1,$n=!1,or=0,M0=0;function ie(){throw Error(k(321))}function ra(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function ia(e,t,n,r,l,s){if(_t=s,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yr.current=e===null||e.memoizedState===null?W0:B0,e=n(r,l),$n){s=0;do{if($n=!1,or=0,25<=s)throw Error(k(301));s+=1,J=q=null,t.updateQueue=null,Yr.current=O0,e=n(r,l)}while($n)}if(Yr.current=mi,t=q!==null&&q.next!==null,_t=0,J=q=$=null,xi=!1,t)throw Error(k(300));return e}function la(){var e=or!==0;return or=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?$.memoizedState=J=e:J=J.next=e,J}function Pe(){if(q===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=J===null?$.memoizedState:J.next;if(t!==null)J=t,q=e;else{if(e===null)throw Error(k(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},J===null?$.memoizedState=J=e:J=J.next=e}return J}function cr(e,t){return typeof t=="function"?t(e):t}function gl(e){var t=Pe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=q,l=r.baseQueue,s=n.pending;if(s!==null){if(l!==null){var a=l.next;l.next=s.next,s.next=a}r.baseQueue=l=s,n.pending=null}if(l!==null){s=l.next,r=r.baseState;var o=a=null,c=null,d=s;do{var x=d.lane;if((_t&x)===x)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:x,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(o=c=h,a=r):c=c.next=h,$.lanes|=x,Wt|=x}d=d.next}while(d!==null&&d!==s);c===null?a=r:c.next=o,Be(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do s=l.lane,$.lanes|=s,Wt|=s,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xl(e){var t=Pe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do s=e(s,a.action),a=a.next;while(a!==l);Be(s,t.memoizedState)||(pe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function bd(){}function kd(e,t){var n=$,r=Pe(),l=t(),s=!Be(r.memoizedState,l);if(s&&(r.memoizedState=l,pe=!0),r=r.queue,sa(Cd.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,dr(9,Sd.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(k(349));_t&30||jd(n,t,l)}return l}function jd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sd(e,t,n,r){t.value=n,t.getSnapshot=r,zd(t)&&Nd(e)}function Cd(e,t,n){return n(function(){zd(t)&&Nd(e)})}function zd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Nd(e){var t=Ze(e,1);t!==null&&We(t,e,1,-1)}function xo(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=_0.bind(null,$,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ed(){return Pe().memoizedState}function Qr(e,t,n,r){var l=Ae();$.flags|=e,l.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function Li(e,t,n,r){var l=Pe();r=r===void 0?null:r;var s=void 0;if(q!==null){var a=q.memoizedState;if(s=a.destroy,r!==null&&ra(r,a.deps)){l.memoizedState=dr(t,n,s,r);return}}$.flags|=e,l.memoizedState=dr(1|t,n,s,r)}function mo(e,t){return Qr(8390656,8,e,t)}function sa(e,t){return Li(2048,8,e,t)}function Pd(e,t){return Li(4,2,e,t)}function Rd(e,t){return Li(4,4,e,t)}function Id(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ld(e,t,n){return n=n!=null?n.concat([e]):null,Li(4,4,Id.bind(null,t,e),n)}function aa(){}function Md(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ra(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Td(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ra(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fd(e,t,n){return _t&21?(Be(n,t)||(n=Ac(),$.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function T0(e,t){var n=_;_=n!==0&&4>n?n:4,e(!0);var r=hl.transition;hl.transition={};try{e(!1),t()}finally{_=n,hl.transition=r}}function _d(){return Pe().memoizedState}function F0(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wd(e))Bd(t,n);else if(n=yd(e,t,n,r),n!==null){var l=ce();We(n,e,r,l),Od(n,t,r)}}function _0(e,t,n){var r=mt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wd(e))Bd(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,o=s(a,n);if(l.hasEagerState=!0,l.eagerState=o,Be(o,a)){var c=t.interleaved;c===null?(l.next=l,Zs(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=yd(e,t,l,r),n!==null&&(l=ce(),We(n,e,r,l),Od(n,t,r))}}function Wd(e){var t=e.alternate;return e===$||t!==null&&t===$}function Bd(e,t){$n=xi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Od(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bs(e,n)}}var mi={readContext:Ee,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},W0={readContext:Ee,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:mo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qr(4194308,4,Id.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qr(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=F0.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:xo,useDebugValue:aa,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=xo(!1),t=e[0];return e=T0.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=Ae();if(D){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ee===null)throw Error(k(349));_t&30||jd(r,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,mo(Cd.bind(null,r,s,e),[e]),r.flags|=2048,dr(9,Sd.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ae(),t=ee.identifierPrefix;if(D){var n=Xe,r=Qe;n=(r&~(1<<32-_e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=M0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B0={readContext:Ee,useCallback:Md,useContext:Ee,useEffect:sa,useImperativeHandle:Ld,useInsertionEffect:Pd,useLayoutEffect:Rd,useMemo:Td,useReducer:gl,useRef:Ed,useState:function(){return gl(cr)},useDebugValue:aa,useDeferredValue:function(e){var t=Pe();return Fd(t,q.memoizedState,e)},useTransition:function(){var e=gl(cr)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:bd,useSyncExternalStore:kd,useId:_d,unstable_isNewReconciler:!1},O0={readContext:Ee,useCallback:Md,useContext:Ee,useEffect:sa,useImperativeHandle:Ld,useInsertionEffect:Pd,useLayoutEffect:Rd,useMemo:Td,useReducer:xl,useRef:Ed,useState:function(){return xl(cr)},useDebugValue:aa,useDeferredValue:function(e){var t=Pe();return q===null?t.memoizedState=e:Fd(t,q.memoizedState,e)},useTransition:function(){var e=xl(cr)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:bd,useSyncExternalStore:kd,useId:_d,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mi={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),l=mt(e),s=Ge(r,l);s.payload=t,n!=null&&(s.callback=n),t=gt(e,s,l),t!==null&&(We(t,e,l,r),Vr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),l=mt(e),s=Ge(r,l);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=gt(e,s,l),t!==null&&(We(t,e,l,r),Vr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=mt(e),l=Ge(n,r);l.tag=2,t!=null&&(l.callback=t),t=gt(e,l,r),t!==null&&(We(t,e,r,n),Vr(t,e,r))}};function yo(e,t,n,r,l,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!nr(n,r)||!nr(l,s):!0}function Ad(e,t,n){var r=!1,l=bt,s=t.contextType;return typeof s=="object"&&s!==null?s=Ee(s):(l=ge(t)?Tt:ae.current,r=t.contextTypes,s=(r=r!=null)?fn(e,l):bt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=s),t}function vo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mi.enqueueReplaceState(t,t.state,null)}function is(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Js(e);var s=t.contextType;typeof s=="object"&&s!==null?l.context=Ee(s):(s=ge(t)?Tt:ae.current,l.context=fn(e,s)),l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(rs(e,t,s,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Mi.enqueueReplaceState(l,l.state,null),hi(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=pf(r),r=r.return;while(r);var l=n}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:l,digest:null}}function ml(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var A0=typeof WeakMap=="function"?WeakMap:Map;function Dd(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vi||(vi=!0,gs=r),ls(e,t)},n}function Ud(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ls(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ls(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function wo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new A0;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=ep.bind(null,e,t,n),t.then(e,e))}function bo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ko(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var D0=et.ReactCurrentOwner,pe=!1;function oe(e,t,n,r){t.child=e===null?md(t,null,n,r):hn(t,e.child,n,r)}function jo(e,t,n,r,l){n=n.render;var s=t.ref;return on(t,l),r=ia(e,t,n,r,s,l),n=la(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Je(e,t,l)):(D&&n&&Ys(t),t.flags|=1,oe(e,t,r,l),t.child)}function So(e,t,n,r,l){if(e===null){var s=n.type;return typeof s=="function"&&!ga(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,$d(e,t,s,r,l)):(e=Kr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&l)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:nr,n(a,r)&&e.ref===t.ref)return Je(e,t,l)}return t.flags|=1,e=yt(s,r),e.ref=t.ref,e.return=t,t.child=e}function $d(e,t,n,r,l){if(e!==null){var s=e.memoizedProps;if(nr(s,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=s,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Je(e,t,l)}return ss(e,t,n,r,l)}function Hd(e,t,n){var r=t.pendingProps,l=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(nn,ye),ye|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(nn,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,W(nn,ye),ye|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,W(nn,ye),ye|=r;return oe(e,t,l,n),t.child}function Vd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ss(e,t,n,r,l){var s=ge(n)?Tt:ae.current;return s=fn(t,s),on(t,l),n=ia(e,t,n,r,s,l),r=la(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Je(e,t,l)):(D&&r&&Ys(t),t.flags|=1,oe(e,t,n,l),t.child)}function Co(e,t,n,r,l){if(ge(n)){var s=!0;ci(t)}else s=!1;if(on(t,l),t.stateNode===null)Xr(e,t),Ad(t,n,r),is(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=ge(n)?Tt:ae.current,d=fn(t,d));var x=n.getDerivedStateFromProps,h=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||c!==d)&&vo(t,a,r,d),rt=!1;var g=t.memoizedState;a.state=g,hi(t,r,a,l),c=t.memoizedState,o!==r||g!==c||he.current||rt?(typeof x=="function"&&(rs(t,n,x,r),c=t.memoizedState),(o=rt||yo(t,n,o,r,g,c,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=d,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vd(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:Me(t.type,o),a.props=d,h=t.pendingProps,g=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ee(c):(c=ge(n)?Tt:ae.current,c=fn(t,c));var m=n.getDerivedStateFromProps;(x=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||g!==c)&&vo(t,a,r,c),rt=!1,g=t.memoizedState,a.state=g,hi(t,r,a,l);var v=t.memoizedState;o!==h||g!==v||he.current||rt?(typeof m=="function"&&(rs(t,n,m,r),v=t.memoizedState),(d=rt||yo(t,n,d,r,g,v,c)||!1)?(x||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=c,r=d):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return as(e,t,n,r,s,l)}function as(e,t,n,r,l,s){Vd(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&co(t,n,!1),Je(e,t,s);r=t.stateNode,D0.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=hn(t,e.child,null,s),t.child=hn(t,null,o,s)):oe(e,t,o,s),t.memoizedState=r.state,l&&co(t,n,!0),t.child}function Yd(e){var t=e.stateNode;t.pendingContext?oo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oo(e,t.context,!1),ea(e,t.containerInfo)}function zo(e,t,n,r,l){return pn(),Xs(l),t.flags|=256,oe(e,t,n,r),t.child}var os={dehydrated:null,treeContext:null,retryLane:0};function cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qd(e,t,n){var r=t.pendingProps,l=U.current,s=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),W(U,l&1),e===null)return ts(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=_i(a,r,0,null),e=Mt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=cs(n),t.memoizedState=os,e):oa(t,a));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return U0(e,t,a,r,o,l,n);if(s){s=r.fallback,a=t.mode,l=e.child,o=l.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=yt(l,c),r.subtreeFlags=l.subtreeFlags&14680064),o!==null?s=yt(o,s):(s=Mt(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?cs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=os,r}return s=e.child,e=s.sibling,r=yt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function oa(e,t){return t=_i({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _r(e,t,n,r){return r!==null&&Xs(r),hn(t,e.child,null,n),e=oa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function U0(e,t,n,r,l,s,a){if(n)return t.flags&256?(t.flags&=-257,r=ml(Error(k(422))),_r(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,l=t.mode,r=_i({mode:"visible",children:r.children},l,0,null),s=Mt(s,l,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&hn(t,e.child,null,a),t.child.memoizedState=cs(a),t.memoizedState=os,s);if(!(t.mode&1))return _r(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(k(419)),r=ml(s,r,void 0),_r(e,t,a,r)}if(o=(a&e.childLanes)!==0,pe||o){if(r=ee,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,Ze(e,l),We(r,e,l,-1))}return ha(),r=ml(Error(k(421))),_r(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=tp.bind(null,e),l._reactRetry=t,null):(e=s.treeContext,ve=ht(l.nextSibling),we=t,D=!0,Fe=null,e!==null&&(Se[Ce++]=Qe,Se[Ce++]=Xe,Se[Ce++]=Ft,Qe=e.id,Xe=e.overflow,Ft=t),t=oa(t,r.children),t.flags|=4096,t)}function No(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ns(e.return,t,n)}function yl(e,t,n,r,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=l)}function Xd(e,t,n){var r=t.pendingProps,l=r.revealOrder,s=r.tail;if(oe(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&No(e,n,t);else if(e.tag===19)No(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&gi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),yl(t,!1,l,n,s);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&gi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}yl(t,!0,n,null,s);break;case"together":yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $0(e,t,n){switch(t.tag){case 3:Yd(t),pn();break;case 5:wd(t);break;case 1:ge(t.type)&&ci(t);break;case 4:ea(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;W(fi,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Qd(e,t,n):(W(U,U.current&1),e=Je(e,t,n),e!==null?e.sibling:null);W(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Hd(e,t,n)}return Je(e,t,n)}var Gd,ds,qd,Kd;Gd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ds=function(){};qd=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,It(He.current);var s=null;switch(n){case"input":l=Ll(e,l),r=Ll(e,r),s=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),s=[];break;case"textarea":l=Fl(e,l),r=Fl(e,r),s=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ai)}Wl(n,r);var a;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var o=l[d];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Gn.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var c=r[d];if(o=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&c!==o&&(c!=null||o!=null))if(d==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&B("scroll",e),s||o===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};Kd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ln(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function H0(e,t,n){var r=t.pendingProps;switch(Qs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return ge(t.type)&&oi(),le(t),null;case 3:return r=t.stateNode,gn(),O(he),O(ae),na(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Tr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fe!==null&&(ys(Fe),Fe=null))),ds(e,t),le(t),null;case 5:ta(t);var l=It(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)qd(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return le(t),null}if(e=It(He.current),Tr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ue]=t,r[lr]=s,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(l=0;l<Wn.length;l++)B(Wn[l],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Fa(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":Wa(r,s),B("invalid",r)}Wl(n,s),l=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&Mr(r.textContent,o,e),l=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Mr(r.textContent,o,e),l=["children",""+o]):Gn.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&B("scroll",r)}switch(n){case"input":Cr(r),_a(r,s,!0);break;case"textarea":Cr(r),Ba(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ai)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ue]=t,e[lr]=r,Gd(e,t,!1,!1),t.stateNode=e;e:{switch(a=Bl(n,r),n){case"dialog":B("cancel",e),B("close",e),l=r;break;case"iframe":case"object":case"embed":B("load",e),l=r;break;case"video":case"audio":for(l=0;l<Wn.length;l++)B(Wn[l],e);l=r;break;case"source":B("error",e),l=r;break;case"img":case"image":case"link":B("error",e),B("load",e),l=r;break;case"details":B("toggle",e),l=r;break;case"input":Fa(e,r),l=Ll(e,r),B("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),B("invalid",e);break;case"textarea":Wa(e,r),l=Fl(e,r),B("invalid",e);break;default:l=r}Wl(n,l),o=l;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Ec(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&zc(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&qn(e,c):typeof c=="number"&&qn(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Gn.hasOwnProperty(s)?c!=null&&s==="onScroll"&&B("scroll",e):c!=null&&Ls(e,s,c,a))}switch(n){case"input":Cr(e),_a(e,r,!1);break;case"textarea":Cr(e),Ba(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?rn(e,!!r.multiple,s,!1):r.defaultValue!=null&&rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Kd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=It(ar.current),It(He.current),Tr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(s=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:Mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return le(t),null;case 13:if(O(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&ve!==null&&t.mode&1&&!(t.flags&128))gd(),pn(),t.flags|=98560,s=!1;else if(s=Tr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Ue]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),s=!1}else Fe!==null&&(ys(Fe),Fe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?K===0&&(K=3):ha())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return gn(),ds(e,t),e===null&&rr(t.stateNode.containerInfo),le(t),null;case 10:return Ks(t.type._context),le(t),null;case 17:return ge(t.type)&&oi(),le(t),null;case 19:if(O(U),s=t.memoizedState,s===null)return le(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Ln(s,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=gi(e),a!==null){for(t.flags|=128,Ln(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(U,U.current&1|2),t.child}e=e.sibling}s.tail!==null&&Q()>mn&&(t.flags|=128,r=!0,Ln(s,!1),t.lanes=4194304)}else{if(!r)if(e=gi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!D)return le(t),null}else 2*Q()-s.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,Ln(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Q(),t.sibling=null,n=U.current,W(U,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return pa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function V0(e,t){switch(Qs(t),t.tag){case 1:return ge(t.type)&&oi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),O(he),O(ae),na(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ta(t),null;case 13:if(O(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(U),null;case 4:return gn(),null;case 10:return Ks(t.type._context),null;case 22:case 23:return pa(),null;case 24:return null;default:return null}}var Wr=!1,se=!1,Y0=typeof WeakSet=="function"?WeakSet:Set,z=null;function tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function us(e,t,n){try{n()}catch(r){V(e,t,r)}}var Eo=!1;function Q0(e,t){if(Xl=ii,e=nd(),Vs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,d=0,x=0,h=e,g=null;t:for(;;){for(var m;h!==n||l!==0&&h.nodeType!==3||(o=a+l),h!==s||r!==0&&h.nodeType!==3||(c=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)g=h,h=m;for(;;){if(h===e)break t;if(g===n&&++d===l&&(o=a),g===s&&++x===r&&(c=a),(m=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=m}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gl={focusedElem:e,selectionRange:n},ii=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,j=v.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:Me(t.type,b),j);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){V(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return v=Eo,Eo=!1,v}function Hn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var s=l.destroy;l.destroy=void 0,s!==void 0&&us(t,n,s)}l=l.next}while(l!==r)}}function Ti(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zd(e){var t=e.alternate;t!==null&&(e.alternate=null,Zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[lr],delete t[Zl],delete t[P0],delete t[R0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jd(e){return e.tag===5||e.tag===3||e.tag===4}function Po(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ai));else if(r!==4&&(e=e.child,e!==null))for(ps(e,t,n),e=e.sibling;e!==null;)ps(e,t,n),e=e.sibling}function hs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hs(e,t,n),e=e.sibling;e!==null;)hs(e,t,n),e=e.sibling}var te=null,Te=!1;function tt(e,t,n){for(n=n.child;n!==null;)eu(e,t,n),n=n.sibling}function eu(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 5:se||tn(n,t);case 6:var r=te,l=Te;te=null,tt(e,t,n),te=r,Te=l,te!==null&&(Te?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Te?(e=te,n=n.stateNode,e.nodeType===8?ul(e.parentNode,n):e.nodeType===1&&ul(e,n),er(e)):ul(te,n.stateNode));break;case 4:r=te,l=Te,te=n.stateNode.containerInfo,Te=!0,tt(e,t,n),te=r,Te=l;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var s=l,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&us(n,t,a),l=l.next}while(l!==r)}tt(e,t,n);break;case 1:if(!se&&(tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){V(n,t,o)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,tt(e,t,n),se=r):tt(e,t,n);break;default:tt(e,t,n)}}function Ro(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Y0),t.forEach(function(r){var l=np.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ie(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var s=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:te=o.stateNode,Te=!1;break e;case 3:te=o.stateNode.containerInfo,Te=!0;break e;case 4:te=o.stateNode.containerInfo,Te=!0;break e}o=o.return}if(te===null)throw Error(k(160));eu(s,a,l),te=null,Te=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(d){V(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tu(t,e),t=t.sibling}function tu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),Oe(e),r&4){try{Hn(3,e,e.return),Ti(3,e)}catch(b){V(e,e.return,b)}try{Hn(5,e,e.return)}catch(b){V(e,e.return,b)}}break;case 1:Ie(t,e),Oe(e),r&512&&n!==null&&tn(n,n.return);break;case 5:if(Ie(t,e),Oe(e),r&512&&n!==null&&tn(n,n.return),e.flags&32){var l=e.stateNode;try{qn(l,"")}catch(b){V(e,e.return,b)}}if(r&4&&(l=e.stateNode,l!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&jc(l,s),Bl(o,a);var d=Bl(o,s);for(a=0;a<c.length;a+=2){var x=c[a],h=c[a+1];x==="style"?Ec(l,h):x==="dangerouslySetInnerHTML"?zc(l,h):x==="children"?qn(l,h):Ls(l,x,h,d)}switch(o){case"input":Ml(l,s);break;case"textarea":Sc(l,s);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?rn(l,!!s.multiple,m,!1):g!==!!s.multiple&&(s.defaultValue!=null?rn(l,!!s.multiple,s.defaultValue,!0):rn(l,!!s.multiple,s.multiple?[]:"",!1))}l[lr]=s}catch(b){V(e,e.return,b)}}break;case 6:if(Ie(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,s=e.memoizedProps;try{l.nodeValue=s}catch(b){V(e,e.return,b)}}break;case 3:if(Ie(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{er(t.containerInfo)}catch(b){V(e,e.return,b)}break;case 4:Ie(t,e),Oe(e);break;case 13:Ie(t,e),Oe(e),l=e.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(ua=Q())),r&4&&Ro(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(se=(d=se)||x,Ie(t,e),se=d):Ie(t,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!x&&e.mode&1)for(z=e,x=e.child;x!==null;){for(h=z=x;z!==null;){switch(g=z,m=g.child,g.tag){case 0:case 11:case 14:case 15:Hn(4,g,g.return);break;case 1:tn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){V(r,n,b)}}break;case 5:tn(g,g.return);break;case 22:if(g.memoizedState!==null){Lo(h);continue}}m!==null?(m.return=g,z=m):Lo(h)}x=x.sibling}e:for(x=null,h=e;;){if(h.tag===5){if(x===null){x=h;try{l=h.stateNode,d?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Nc("display",a))}catch(b){V(e,e.return,b)}}}else if(h.tag===6){if(x===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(b){V(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;x===h&&(x=null),h=h.return}x===h&&(x=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ie(t,e),Oe(e),r&4&&Ro(e);break;case 21:break;default:Ie(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(qn(l,""),r.flags&=-33);var s=Po(e);hs(e,s,l);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Po(e);ps(e,o,a);break;default:throw Error(k(161))}}catch(c){V(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function X0(e,t,n){z=e,nu(e)}function nu(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var l=z,s=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Wr;if(!a){var o=l.alternate,c=o!==null&&o.memoizedState!==null||se;o=Wr;var d=se;if(Wr=a,(se=c)&&!d)for(z=l;z!==null;)a=z,c=a.child,a.tag===22&&a.memoizedState!==null?Mo(l):c!==null?(c.return=a,z=c):Mo(l);for(;s!==null;)z=s,nu(s),s=s.sibling;z=l,Wr=o,se=d}Io(e)}else l.subtreeFlags&8772&&s!==null?(s.return=l,z=s):Io(e)}}function Io(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Ti(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&go(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}go(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var x=d.memoizedState;if(x!==null){var h=x.dehydrated;h!==null&&er(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}se||t.flags&512&&fs(t)}catch(g){V(t,t.return,g)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Lo(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Mo(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ti(4,t)}catch(c){V(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(c){V(t,l,c)}}var s=t.return;try{fs(t)}catch(c){V(t,s,c)}break;case 5:var a=t.return;try{fs(t)}catch(c){V(t,a,c)}}}catch(c){V(t,t.return,c)}if(t===e){z=null;break}var o=t.sibling;if(o!==null){o.return=t.return,z=o;break}z=t.return}}var G0=Math.ceil,yi=et.ReactCurrentDispatcher,ca=et.ReactCurrentOwner,Ne=et.ReactCurrentBatchConfig,F=0,ee=null,X=null,ne=0,ye=0,nn=jt(0),K=0,ur=null,Wt=0,Fi=0,da=0,Vn=null,fe=null,ua=0,mn=1/0,Ve=null,vi=!1,gs=null,xt=null,Br=!1,at=null,wi=0,Yn=0,xs=null,Gr=-1,qr=0;function ce(){return F&6?Q():Gr!==-1?Gr:Gr=Q()}function mt(e){return e.mode&1?F&2&&ne!==0?ne&-ne:L0.transition!==null?(qr===0&&(qr=Ac()),qr):(e=_,e!==0||(e=window.event,e=e===void 0?16:Qc(e.type)),e):1}function We(e,t,n,r){if(50<Yn)throw Yn=0,xs=null,Error(k(185));xr(e,n,r),(!(F&2)||e!==ee)&&(e===ee&&(!(F&2)&&(Fi|=n),K===4&&lt(e,ne)),xe(e,r),n===1&&F===0&&!(t.mode&1)&&(mn=Q()+500,Ii&&St()))}function xe(e,t){var n=e.callbackNode;Lf(e,t);var r=ri(e,e===ee?ne:0);if(r===0)n!==null&&Da(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Da(n),t===1)e.tag===0?I0(To.bind(null,e)):fd(To.bind(null,e)),N0(function(){!(F&6)&&St()}),n=null;else{switch(Dc(r)){case 1:n=Ws;break;case 4:n=Bc;break;case 16:n=ni;break;case 536870912:n=Oc;break;default:n=ni}n=du(n,ru.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ru(e,t){if(Gr=-1,qr=0,F&6)throw Error(k(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=ri(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=bi(e,r);else{t=r;var l=F;F|=2;var s=lu();(ee!==e||ne!==t)&&(Ve=null,mn=Q()+500,Lt(e,t));do try{Z0();break}catch(o){iu(e,o)}while(!0);qs(),yi.current=s,F=l,X!==null?t=0:(ee=null,ne=0,t=K)}if(t!==0){if(t===2&&(l=$l(e),l!==0&&(r=l,t=ms(e,l))),t===1)throw n=ur,Lt(e,0),lt(e,r),xe(e,Q()),n;if(t===6)lt(e,r);else{if(l=e.current.alternate,!(r&30)&&!q0(l)&&(t=bi(e,r),t===2&&(s=$l(e),s!==0&&(r=s,t=ms(e,s))),t===1))throw n=ur,Lt(e,0),lt(e,r),xe(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Et(e,fe,Ve);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=ua+500-Q(),10<t)){if(ri(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Kl(Et.bind(null,e,fe,Ve),t);break}Et(e,fe,Ve);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-_e(r);s=1<<a,a=t[a],a>l&&(l=a),r&=~s}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*G0(r/1960))-r,10<r){e.timeoutHandle=Kl(Et.bind(null,e,fe,Ve),r);break}Et(e,fe,Ve);break;case 5:Et(e,fe,Ve);break;default:throw Error(k(329))}}}return xe(e,Q()),e.callbackNode===n?ru.bind(null,e):null}function ms(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=bi(e,t),e!==2&&(t=fe,fe=n,t!==null&&ys(t)),e}function ys(e){fe===null?fe=e:fe.push.apply(fe,e)}function q0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],s=l.getSnapshot;l=l.value;try{if(!Be(s(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~da,t&=~Fi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_e(t),r=1<<n;e[n]=-1,t&=~r}}function To(e){if(F&6)throw Error(k(327));cn();var t=ri(e,0);if(!(t&1))return xe(e,Q()),null;var n=bi(e,t);if(e.tag!==0&&n===2){var r=$l(e);r!==0&&(t=r,n=ms(e,r))}if(n===1)throw n=ur,Lt(e,0),lt(e,t),xe(e,Q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,fe,Ve),xe(e,Q()),null}function fa(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(mn=Q()+500,Ii&&St())}}function Bt(e){at!==null&&at.tag===0&&!(F&6)&&cn();var t=F;F|=1;var n=Ne.transition,r=_;try{if(Ne.transition=null,_=1,e)return e()}finally{_=r,Ne.transition=n,F=t,!(F&6)&&St()}}function pa(){ye=nn.current,O(nn)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,z0(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Qs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oi();break;case 3:gn(),O(he),O(ae),na();break;case 5:ta(r);break;case 4:gn();break;case 13:O(U);break;case 19:O(U);break;case 10:Ks(r.type._context);break;case 22:case 23:pa()}n=n.return}if(ee=e,X=e=yt(e.current,null),ne=ye=t,K=0,ur=null,da=Fi=Wt=0,fe=Vn=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=l,r.next=a}n.pending=r}Rt=null}return e}function iu(e,t){do{var n=X;try{if(qs(),Yr.current=mi,xi){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}xi=!1}if(_t=0,J=q=$=null,$n=!1,or=0,ca.current=null,n===null||n.return===null){K=1,ur=t,X=null;break}e:{var s=e,a=n.return,o=n,c=t;if(t=ne,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,x=o,h=x.tag;if(!(x.mode&1)&&(h===0||h===11||h===15)){var g=x.alternate;g?(x.updateQueue=g.updateQueue,x.memoizedState=g.memoizedState,x.lanes=g.lanes):(x.updateQueue=null,x.memoizedState=null)}var m=bo(a);if(m!==null){m.flags&=-257,ko(m,a,o,s,t),m.mode&1&&wo(s,d,t),t=m,c=d;var v=t.updateQueue;if(v===null){var b=new Set;b.add(c),t.updateQueue=b}else v.add(c);break e}else{if(!(t&1)){wo(s,d,t),ha();break e}c=Error(k(426))}}else if(D&&o.mode&1){var j=bo(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),ko(j,a,o,s,t),Xs(xn(c,o));break e}}s=c=xn(c,o),K!==4&&(K=2),Vn===null?Vn=[s]:Vn.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=Dd(s,c,t);ho(s,f);break e;case 1:o=c;var u=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(xt===null||!xt.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=Ud(s,o,t);ho(s,y);break e}}s=s.return}while(s!==null)}au(n)}catch(S){t=S,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function lu(){var e=yi.current;return yi.current=mi,e===null?mi:e}function ha(){(K===0||K===3||K===2)&&(K=4),ee===null||!(Wt&268435455)&&!(Fi&268435455)||lt(ee,ne)}function bi(e,t){var n=F;F|=2;var r=lu();(ee!==e||ne!==t)&&(Ve=null,Lt(e,t));do try{K0();break}catch(l){iu(e,l)}while(!0);if(qs(),F=n,yi.current=r,X!==null)throw Error(k(261));return ee=null,ne=0,K}function K0(){for(;X!==null;)su(X)}function Z0(){for(;X!==null&&!jf();)su(X)}function su(e){var t=cu(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?au(e):X=t,ca.current=null}function au(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=V0(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,X=null;return}}else if(n=H0(n,t,ye),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);K===0&&(K=5)}function Et(e,t,n){var r=_,l=Ne.transition;try{Ne.transition=null,_=1,J0(e,t,n,r)}finally{Ne.transition=l,_=r}return null}function J0(e,t,n,r){do cn();while(at!==null);if(F&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Mf(e,s),e===ee&&(X=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Br||(Br=!0,du(ni,function(){return cn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ne.transition,Ne.transition=null;var a=_;_=1;var o=F;F|=4,ca.current=null,Q0(e,n),tu(n,e),v0(Gl),ii=!!Xl,Gl=Xl=null,e.current=n,X0(n),Sf(),F=o,_=a,Ne.transition=s}else e.current=n;if(Br&&(Br=!1,at=e,wi=l),s=e.pendingLanes,s===0&&(xt=null),Nf(n.stateNode),xe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(vi)throw vi=!1,e=gs,gs=null,e;return wi&1&&e.tag!==0&&cn(),s=e.pendingLanes,s&1?e===xs?Yn++:(Yn=0,xs=e):Yn=0,St(),null}function cn(){if(at!==null){var e=Dc(wi),t=Ne.transition,n=_;try{if(Ne.transition=null,_=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,wi=0,F&6)throw Error(k(331));var l=F;for(F|=4,z=e.current;z!==null;){var s=z,a=s.child;if(z.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var d=o[c];for(z=d;z!==null;){var x=z;switch(x.tag){case 0:case 11:case 15:Hn(8,x,s)}var h=x.child;if(h!==null)h.return=x,z=h;else for(;z!==null;){x=z;var g=x.sibling,m=x.return;if(Zd(x),x===d){z=null;break}if(g!==null){g.return=m,z=g;break}z=m}}}var v=s.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var j=b.sibling;b.sibling=null,b=j}while(b!==null)}}z=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,z=a;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hn(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,z=f;break e}z=s.return}}var u=e.current;for(z=u;z!==null;){a=z;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,z=p;else e:for(a=u;z!==null;){if(o=z,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ti(9,o)}}catch(S){V(o,o.return,S)}if(o===a){z=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,z=y;break e}z=o.return}}if(F=l,St(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(zi,e)}catch{}r=!0}return r}finally{_=n,Ne.transition=t}}return!1}function Fo(e,t,n){t=xn(n,t),t=Dd(e,t,1),e=gt(e,t,1),t=ce(),e!==null&&(xr(e,1,t),xe(e,t))}function V(e,t,n){if(e.tag===3)Fo(e,e,n);else for(;t!==null;){if(t.tag===3){Fo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=xn(n,e),e=Ud(t,e,1),t=gt(t,e,1),e=ce(),t!==null&&(xr(t,1,e),xe(t,e));break}}t=t.return}}function ep(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(K===4||K===3&&(ne&130023424)===ne&&500>Q()-ua?Lt(e,0):da|=n),xe(e,t)}function ou(e,t){t===0&&(e.mode&1?(t=Er,Er<<=1,!(Er&130023424)&&(Er=4194304)):t=1);var n=ce();e=Ze(e,t),e!==null&&(xr(e,t,n),xe(e,n))}function tp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ou(e,n)}function np(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),ou(e,n)}var cu;cu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,$0(e,t,n);pe=!!(e.flags&131072)}else pe=!1,D&&t.flags&1048576&&pd(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xr(e,t),e=t.pendingProps;var l=fn(t,ae.current);on(t,n),l=ia(null,t,r,e,l,n);var s=la();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(s=!0,ci(t)):s=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Js(t),l.updater=Mi,t.stateNode=l,l._reactInternals=t,is(t,r,e,n),t=as(null,t,r,!0,s,n)):(t.tag=0,D&&s&&Ys(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=ip(r),e=Me(r,e),l){case 0:t=ss(null,t,r,e,n);break e;case 1:t=Co(null,t,r,e,n);break e;case 11:t=jo(null,t,r,e,n);break e;case 14:t=So(null,t,r,Me(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),ss(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Co(e,t,r,l,n);case 3:e:{if(Yd(t),e===null)throw Error(k(387));r=t.pendingProps,s=t.memoizedState,l=s.element,vd(e,t),hi(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){l=xn(Error(k(423)),t),t=zo(e,t,r,n,l);break e}else if(r!==l){l=xn(Error(k(424)),t),t=zo(e,t,r,n,l);break e}else for(ve=ht(t.stateNode.containerInfo.firstChild),we=t,D=!0,Fe=null,n=md(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===l){t=Je(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return wd(t),e===null&&ts(t),r=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,a=l.children,ql(r,l)?a=null:s!==null&&ql(r,s)&&(t.flags|=32),Vd(e,t),oe(e,t,a,n),t.child;case 6:return e===null&&ts(t),null;case 13:return Qd(e,t,n);case 4:return ea(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),jo(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,s=t.memoizedProps,a=l.value,W(fi,r._currentValue),r._currentValue=a,s!==null)if(Be(s.value,a)){if(s.children===l.children&&!he.current){t=Je(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Ge(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var x=d.pending;x===null?c.next=c:(c.next=x.next,x.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),ns(s.return,n,t),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(k(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ns(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,on(t,n),l=Ee(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Me(r,t.pendingProps),l=Me(r.type,l),So(e,t,r,l,n);case 15:return $d(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Xr(e,t),t.tag=1,ge(r)?(e=!0,ci(t)):e=!1,on(t,n),Ad(t,r,l),is(t,r,l,n),as(null,t,r,!0,e,n);case 19:return Xd(e,t,n);case 22:return Hd(e,t,n)}throw Error(k(156,t.tag))};function du(e,t){return Wc(e,t)}function rp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new rp(e,t,n,r)}function ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ip(e){if(typeof e=="function")return ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ts)return 11;if(e===Fs)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,l,s){var a=2;if(r=e,typeof e=="function")ga(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Yt:return Mt(n.children,l,s,t);case Ms:a=8,l|=8;break;case El:return e=ze(12,n,t,l|2),e.elementType=El,e.lanes=s,e;case Pl:return e=ze(13,n,t,l),e.elementType=Pl,e.lanes=s,e;case Rl:return e=ze(19,n,t,l),e.elementType=Rl,e.lanes=s,e;case wc:return _i(n,l,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yc:a=10;break e;case vc:a=9;break e;case Ts:a=11;break e;case Fs:a=14;break e;case nt:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=ze(a,n,t,l),t.elementType=e,t.type=r,t.lanes=s,t}function Mt(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function _i(e,t,n,r){return e=ze(22,e,r,t),e.elementType=wc,e.lanes=n,e.stateNode={isHidden:!1},e}function vl(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function wl(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=el(0),this.expirationTimes=el(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=el(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function xa(e,t,n,r,l,s,a,o,c){return e=new lp(e,t,n,o,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ze(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Js(s),e}function sp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uu(e){if(!e)return bt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ge(n))return ud(e,n,t)}return t}function fu(e,t,n,r,l,s,a,o,c){return e=xa(n,r,!0,e,l,s,a,o,c),e.context=uu(null),n=e.current,r=ce(),l=mt(n),s=Ge(r,l),s.callback=t??null,gt(n,s,l),e.current.lanes=l,xr(e,l,r),xe(e,r),e}function Wi(e,t,n,r){var l=t.current,s=ce(),a=mt(l);return n=uu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(l,t,a),e!==null&&(We(e,l,a,s),Vr(e,l,a)),a}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _o(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ma(e,t){_o(e,t),(e=e.alternate)&&_o(e,t)}function ap(){return null}var pu=typeof reportError=="function"?reportError:function(e){console.error(e)};function ya(e){this._internalRoot=e}Bi.prototype.render=ya.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Wi(e,t,null,null)};Bi.prototype.unmount=ya.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bt(function(){Wi(null,e,null,null)}),t[Ke]=null}};function Bi(e){this._internalRoot=e}Bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&Yc(e)}};function va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wo(){}function op(e,t,n,r,l){if(l){if(typeof r=="function"){var s=r;r=function(){var d=ki(a);s.call(d)}}var a=fu(t,r,e,0,null,!1,!1,"",Wo);return e._reactRootContainer=a,e[Ke]=a.current,rr(e.nodeType===8?e.parentNode:e),Bt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var o=r;r=function(){var d=ki(c);o.call(d)}}var c=xa(e,0,!1,null,null,!1,!1,"",Wo);return e._reactRootContainer=c,e[Ke]=c.current,rr(e.nodeType===8?e.parentNode:e),Bt(function(){Wi(t,c,n,r)}),c}function Ai(e,t,n,r,l){var s=n._reactRootContainer;if(s){var a=s;if(typeof l=="function"){var o=l;l=function(){var c=ki(a);o.call(c)}}Wi(t,a,e,l)}else a=op(n,t,e,l,r);return ki(a)}Uc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_n(t.pendingLanes);n!==0&&(Bs(t,n|1),xe(t,Q()),!(F&6)&&(mn=Q()+500,St()))}break;case 13:Bt(function(){var r=Ze(e,1);if(r!==null){var l=ce();We(r,e,1,l)}}),ma(e,1)}};Os=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=ce();We(t,e,134217728,n)}ma(e,134217728)}};$c=function(e){if(e.tag===13){var t=mt(e),n=Ze(e,t);if(n!==null){var r=ce();We(n,e,t,r)}ma(e,t)}};Hc=function(){return _};Vc=function(e,t){var n=_;try{return _=e,t()}finally{_=n}};Al=function(e,t,n){switch(t){case"input":if(Ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Ri(r);if(!l)throw Error(k(90));kc(r),Ml(r,l)}}}break;case"textarea":Sc(e,n);break;case"select":t=n.value,t!=null&&rn(e,!!n.multiple,t,!1)}};Ic=fa;Lc=Bt;var cp={usingClientEntryPoint:!1,Events:[yr,qt,Ri,Pc,Rc,fa]},Mn={findFiberByHostInstance:Pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dp={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fc(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||ap,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{zi=Or.inject(dp),$e=Or}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cp;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!va(t))throw Error(k(200));return sp(e,t,null,n)};ke.createRoot=function(e,t){if(!va(e))throw Error(k(299));var n=!1,r="",l=pu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=xa(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,rr(e.nodeType===8?e.parentNode:e),new ya(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Fc(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Bt(e)};ke.hydrate=function(e,t,n){if(!Oi(t))throw Error(k(200));return Ai(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!va(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,s="",a=pu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=fu(t,null,e,1,n??null,l,!1,s,a),e[Ke]=t.current,rr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Bi(t)};ke.render=function(e,t,n){if(!Oi(t))throw Error(k(200));return Ai(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!Oi(e))throw Error(k(40));return e._reactRootContainer?(Bt(function(){Ai(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ke.unstable_batchedUpdates=fa;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ai(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function hu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hu)}catch(e){console.error(e)}}hu(),hc.exports=ke;var up=hc.exports,Bo=up;zl.createRoot=Bo.createRoot,zl.hydrateRoot=Bo.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fr(){return fr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fr.apply(this,arguments)}var ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ot||(ot={}));const Oo="popstate";function fp(e){e===void 0&&(e={});function t(r,l){let{pathname:s,search:a,hash:o}=r.location;return vs("",{pathname:s,search:a,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:ji(l)}return hp(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pp(){return Math.random().toString(36).substr(2,8)}function Ao(e,t){return{usr:e.state,key:e.key,idx:t}}function vs(e,t,n,r){return n===void 0&&(n=null),fr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kn(t):t,{state:n,key:t&&t.key||r||pp()})}function ji(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function hp(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:s=!1}=r,a=l.history,o=ot.Pop,c=null,d=x();d==null&&(d=0,a.replaceState(fr({},a.state,{idx:d}),""));function x(){return(a.state||{idx:null}).idx}function h(){o=ot.Pop;let j=x(),f=j==null?null:j-d;d=j,c&&c({action:o,location:b.location,delta:f})}function g(j,f){o=ot.Push;let u=vs(b.location,j,f);d=x()+1;let p=Ao(u,d),y=b.createHref(u);try{a.pushState(p,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;l.location.assign(y)}s&&c&&c({action:o,location:b.location,delta:1})}function m(j,f){o=ot.Replace;let u=vs(b.location,j,f);d=x();let p=Ao(u,d),y=b.createHref(u);a.replaceState(p,"",y),s&&c&&c({action:o,location:b.location,delta:0})}function v(j){let f=l.location.origin!=="null"?l.location.origin:l.location.href,u=typeof j=="string"?j:ji(j);return u=u.replace(/ $/,"%20"),G(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let b={get action(){return o},get location(){return e(l,a)},listen(j){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(Oo,h),c=j,()=>{l.removeEventListener(Oo,h),c=null}},createHref(j){return t(l,j)},createURL:v,encodeLocation(j){let f=v(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:m,go(j){return a.go(j)}};return b}var Do;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Do||(Do={}));function gp(e,t,n){return n===void 0&&(n="/"),xp(e,t,n)}function xp(e,t,n,r){let l=typeof t=="string"?kn(t):t,s=ba(l.pathname||"/",n);if(s==null)return null;let a=gu(e);mp(a);let o=null;for(let c=0;o==null&&c<a.length;++c){let d=Pp(s);o=zp(a[c],d)}return o}function gu(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(s,a,o)=>{let c={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(G(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=vt([r,c.relativePath]),x=n.concat(c);s.children&&s.children.length>0&&(G(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),gu(s.children,t,x,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:Sp(d,s.index),routesMeta:x})};return e.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))l(s,a);else for(let c of xu(s.path))l(s,a,c)}),t}function xu(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return l?[s,""]:[s];let a=xu(r.join("/")),o=[];return o.push(...a.map(c=>c===""?s:[s,c].join("/"))),l&&o.push(...a),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function mp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Cp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yp=/^:[\w-]+$/,vp=3,wp=2,bp=1,kp=10,jp=-2,Uo=e=>e==="*";function Sp(e,t){let n=e.split("/"),r=n.length;return n.some(Uo)&&(r+=jp),t&&(r+=wp),n.filter(l=>!Uo(l)).reduce((l,s)=>l+(yp.test(s)?vp:s===""?bp:kp),r)}function Cp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function zp(e,t,n){let{routesMeta:r}=e,l={},s="/",a=[];for(let o=0;o<r.length;++o){let c=r[o],d=o===r.length-1,x=s==="/"?t:t.slice(s.length)||"/",h=Np({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},x),g=c.route;if(!h)return null;Object.assign(l,h.params),a.push({params:l,pathname:vt([s,h.pathname]),pathnameBase:Tp(vt([s,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(s=vt([s,h.pathnameBase]))}return a}function Np(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ep(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let s=l[0],a=s.replace(/(.)\/+$/,"$1"),o=l.slice(1);return{params:r.reduce((d,x,h)=>{let{paramName:g,isOptional:m}=x;if(g==="*"){let b=o[h]||"";a=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const v=o[h];return m&&!v?d[g]=void 0:d[g]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:a,pattern:e}}function Ep(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,c)=>(r.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Pp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ba(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Rp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ip=e=>Rp.test(e);function Lp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?kn(e):e,s;if(n)if(Ip(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),wa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=$o(n.substring(1),"/"):s=$o(n,t)}else s=t;return{pathname:s,search:Fp(r),hash:_p(l)}}function $o(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function bl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function mu(e,t){let n=Mp(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function yu(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=kn(e):(l=fr({},e),G(!l.pathname||!l.pathname.includes("?"),bl("?","pathname","search",l)),G(!l.pathname||!l.pathname.includes("#"),bl("#","pathname","hash",l)),G(!l.search||!l.search.includes("#"),bl("#","search","hash",l)));let s=e===""||l.pathname==="",a=s?"/":l.pathname,o;if(a==null)o=n;else{let h=t.length-1;if(!r&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),h-=1;l.pathname=g.join("/")}o=h>=0?t[h]:"/"}let c=Lp(l,o),d=a&&a!=="/"&&a.endsWith("/"),x=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||x)&&(c.pathname+="/"),c}const vt=e=>e.join("/").replace(/\/\/+/g,"/"),Tp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Fp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_p=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Wp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vu=["post","put","patch","delete"];new Set(vu);const Bp=["get",...vu];new Set(Bp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pr(){return pr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pr.apply(this,arguments)}const ka=w.createContext(null),Op=w.createContext(null),Ut=w.createContext(null),Di=w.createContext(null),$t=w.createContext({outlet:null,matches:[],isDataRoute:!1}),wu=w.createContext(null);function Ap(e,t){let{relative:n}=t===void 0?{}:t;wr()||G(!1);let{basename:r,navigator:l}=w.useContext(Ut),{hash:s,pathname:a,search:o}=ku(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:vt([r,a])),l.createHref({pathname:c,search:o,hash:s})}function wr(){return w.useContext(Di)!=null}function jn(){return wr()||G(!1),w.useContext(Di).location}function bu(e){w.useContext(Ut).static||w.useLayoutEffect(e)}function Dp(){let{isDataRoute:e}=w.useContext($t);return e?e1():Up()}function Up(){wr()||G(!1);let e=w.useContext(ka),{basename:t,future:n,navigator:r}=w.useContext(Ut),{matches:l}=w.useContext($t),{pathname:s}=jn(),a=JSON.stringify(mu(l,n.v7_relativeSplatPath)),o=w.useRef(!1);return bu(()=>{o.current=!0}),w.useCallback(function(d,x){if(x===void 0&&(x={}),!o.current)return;if(typeof d=="number"){r.go(d);return}let h=yu(d,JSON.parse(a),s,x.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:vt([t,h.pathname])),(x.replace?r.replace:r.push)(h,x.state,x)},[t,r,a,s,e])}function ku(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Ut),{matches:l}=w.useContext($t),{pathname:s}=jn(),a=JSON.stringify(mu(l,r.v7_relativeSplatPath));return w.useMemo(()=>yu(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function $p(e,t){return Hp(e,t)}function Hp(e,t,n,r){wr()||G(!1);let{navigator:l}=w.useContext(Ut),{matches:s}=w.useContext($t),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let d=jn(),x;if(t){var h;let j=typeof t=="string"?kn(t):t;c==="/"||(h=j.pathname)!=null&&h.startsWith(c)||G(!1),x=j}else x=d;let g=x.pathname||"/",m=g;if(c!=="/"){let j=c.replace(/^\//,"").split("/");m="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let v=gp(e,{pathname:m}),b=Gp(v&&v.map(j=>Object.assign({},j,{params:Object.assign({},o,j.params),pathname:vt([c,l.encodeLocation?l.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:vt([c,l.encodeLocation?l.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),s,n,r);return t&&b?w.createElement(Di.Provider,{value:{location:pr({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:ot.Pop}},b):b}function Vp(){let e=Jp(),t=Wp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:l},n):null,null)}const Yp=w.createElement(Vp,null);class Qp extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement($t.Provider,{value:this.props.routeContext},w.createElement(wu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xp(e){let{routeContext:t,match:n,children:r}=e,l=w.useContext(ka);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement($t.Provider,{value:t},r)}function Gp(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=(l=n)==null?void 0:l.errors;if(o!=null){let x=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);x>=0||G(!1),a=a.slice(0,Math.min(a.length,x+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let x=0;x<a.length;x++){let h=a[x];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=x),h.route.id){let{loaderData:g,errors:m}=n,v=h.route.loader&&g[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||v){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((x,h,g)=>{let m,v=!1,b=null,j=null;n&&(m=o&&h.route.id?o[h.route.id]:void 0,b=h.route.errorElement||Yp,c&&(d<0&&g===0?(t1("route-fallback"),v=!0,j=null):d===g&&(v=!0,j=h.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,g+1)),u=()=>{let p;return m?p=b:v?p=j:h.route.Component?p=w.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=x,w.createElement(Xp,{match:h,routeContext:{outlet:x,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?w.createElement(Qp,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var ju=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ju||{}),Su=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Su||{});function qp(e){let t=w.useContext(ka);return t||G(!1),t}function Kp(e){let t=w.useContext(Op);return t||G(!1),t}function Zp(e){let t=w.useContext($t);return t||G(!1),t}function Cu(e){let t=Zp(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function Jp(){var e;let t=w.useContext(wu),n=Kp(),r=Cu();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function e1(){let{router:e}=qp(ju.UseNavigateStable),t=Cu(Su.UseNavigateStable),n=w.useRef(!1);return bu(()=>{n.current=!0}),w.useCallback(function(l,s){s===void 0&&(s={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,pr({fromRouteId:t},s)))},[e,t])}const Ho={};function t1(e,t,n){Ho[e]||(Ho[e]=!0)}function n1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Le(e){G(!1)}function r1(e){let{basename:t="/",children:n=null,location:r,navigationType:l=ot.Pop,navigator:s,static:a=!1,future:o}=e;wr()&&G(!1);let c=t.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:c,navigator:s,static:a,future:pr({v7_relativeSplatPath:!1},o)}),[c,o,s,a]);typeof r=="string"&&(r=kn(r));let{pathname:x="/",search:h="",hash:g="",state:m=null,key:v="default"}=r,b=w.useMemo(()=>{let j=ba(x,c);return j==null?null:{location:{pathname:j,search:h,hash:g,state:m,key:v},navigationType:l}},[c,x,h,g,m,v,l]);return b==null?null:w.createElement(Ut.Provider,{value:d},w.createElement(Di.Provider,{children:n,value:b}))}function i1(e){let{children:t,location:n}=e;return $p(ws(t),n)}new Promise(()=>{});function ws(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,l)=>{if(!w.isValidElement(r))return;let s=[...t,l];if(r.type===w.Fragment){n.push.apply(n,ws(r.props.children,s));return}r.type!==Le&&G(!1),!r.props.index||!r.props.children||G(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ws(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bs(){return bs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bs.apply(this,arguments)}function l1(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,s;for(s=0;s<r.length;s++)l=r[s],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function s1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function a1(e,t){return e.button===0&&(!t||t==="_self")&&!s1(e)}const o1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],c1="6";try{window.__reactRouterVersion=c1}catch{}const d1="startTransition",Vo=Ju[d1];function u1(e){let{basename:t,children:n,future:r,window:l}=e,s=w.useRef();s.current==null&&(s.current=fp({window:l,v5Compat:!0}));let a=s.current,[o,c]=w.useState({action:a.action,location:a.location}),{v7_startTransition:d}=r||{},x=w.useCallback(h=>{d&&Vo?Vo(()=>c(h)):c(h)},[c,d]);return w.useLayoutEffect(()=>a.listen(x),[a,x]),w.useEffect(()=>n1(r),[r]),w.createElement(r1,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a,future:r})}const f1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",p1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,De=w.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:s,replace:a,state:o,target:c,to:d,preventScrollReset:x,viewTransition:h}=t,g=l1(t,o1),{basename:m}=w.useContext(Ut),v,b=!1;if(typeof d=="string"&&p1.test(d)&&(v=d,f1))try{let p=new URL(window.location.href),y=d.startsWith("//")?new URL(p.protocol+d):new URL(d),S=ba(y.pathname,m);y.origin===p.origin&&S!=null?d=S+y.search+y.hash:b=!0}catch{}let j=Ap(d,{relative:l}),f=h1(d,{replace:a,state:o,target:c,preventScrollReset:x,relative:l,viewTransition:h});function u(p){r&&r(p),p.defaultPrevented||f(p)}return w.createElement("a",bs({},g,{href:v||j,onClick:b||s?r:u,ref:n,target:c}))});var Yo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Yo||(Yo={}));var Qo;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Qo||(Qo={}));function h1(e,t){let{target:n,replace:r,state:l,preventScrollReset:s,relative:a,viewTransition:o}=t===void 0?{}:t,c=Dp(),d=jn(),x=ku(e,{relative:a});return w.useCallback(h=>{if(a1(h,n)){h.preventDefault();let g=r!==void 0?r:ji(d)===ji(x);c(e,{replace:g,state:l,preventScrollReset:s,relative:a,viewTransition:o})}},[d,c,x,r,l,n,e,s,a,o])}function g1(){const[e,t]=w.useState(!1),[n,r]=w.useState(!1),l=jn();w.useEffect(()=>{const o=()=>{t(window.scrollY>10)};return window.addEventListener("scroll",o,{passive:!0}),o(),()=>window.removeEventListener("scroll",o)},[]);const s=[{label:"Home",to:"/"},{label:"Products",to:"/products"},{label:"Features",to:"/features"},{label:"Use Cases",to:"/use-cases"},{label:"How It Works",to:"/how-it-works"},{label:"Contact",to:"/contact"}],a=o=>o==="/"?l.pathname==="/":l.pathname.startsWith(o);return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        *{
          box-sizing:border-box;
          -webkit-tap-highlight-color:transparent;
        }

        :root{
          --green:#16a34a;
          --green-dark:#15803d;
          --green-light:#dcfce7;
          --navy:#0f172a;
          --text:#334155;
          --white:#ffffff;
        }

        .sfs-nav{
          position:fixed;
          top:0;
          left:0;
          right:0;
          z-index:9999;
        }

        /* ── TOP LINE ── */
        .sfs-topbar{
          height:2.5px;
          background:linear-gradient(
            90deg,
            #064e3b,
            #16a34a,
            #4ade80,
            #bbf7d0,
            #4ade80,
            #16a34a,
            #064e3b
          );
          background-size:200% 100%;
          animation:topbar-slide 4s linear infinite;
        }

        @keyframes topbar-slide{
          0%  { background-position:0%   0; }
          100%{ background-position:200% 0; }
        }

        /* ── MAIN BAR ── */
        .sfs-bar{
          height:68px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 28px;
          background:rgba(255,255,255,0.82);
          backdrop-filter:blur(18px) saturate(180%);
          -webkit-backdrop-filter:blur(18px) saturate(180%);
          border-bottom:1px solid rgba(187,247,208,0.35);
          transition:all .35s ease;
          box-shadow:0 8px 30px rgba(22,163,74,0.05);
        }

        .sfs-nav.scrolled .sfs-bar{
          height:60px;
          background:rgba(255,255,255,0.90);
          box-shadow:0 10px 24px rgba(15,23,42,0.06);
        }

        /* ══════════════════════════════
           LOGO — FOREST HIGHLIGHT
        ══════════════════════════════ */
        .sfs-logo{
          display:flex;
          align-items:center;
          gap:12px;
          text-decoration:none;
          position:relative;
          padding:7px 14px 7px 8px;
          border-radius:18px;
          background:linear-gradient(
            135deg,
            rgba(6,78,59,0.07)   0%,
            rgba(22,163,74,0.10) 40%,
            rgba(187,247,208,0.22) 100%
          );
          border:1px solid rgba(22,163,74,0.18);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.75),
            0 4px 18px rgba(22,163,74,0.10);
          transition:all .3s ease;
          overflow:hidden;
        }

        /* animated forest shimmer sweep */
        .sfs-logo::before{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(
            105deg,
            transparent 30%,
            rgba(134,239,172,0.28) 50%,
            transparent 70%
          );
          background-size:200% 100%;
          animation:forest-shimmer 3.5s ease-in-out infinite;
          border-radius:18px;
          pointer-events:none;
        }

        @keyframes forest-shimmer{
          0%  { background-position:-100% 0; opacity:0;   }
          30% { opacity:1;                                 }
          60% { background-position:200%  0; opacity:1;   }
          100%{ background-position:200%  0; opacity:0;   }
        }

        /* leaf accent */
        .sfs-logo::after{
          content:"🌿";
          position:absolute;
          right:8px;
          top:4px;
          font-size:11px;
          opacity:0.4;
          animation:leaf-sway 4s ease-in-out infinite;
          pointer-events:none;
        }

        @keyframes leaf-sway{
          0%,100%{ transform:rotate(-8deg) scale(0.9); opacity:0.30; }
          50%    { transform:rotate( 8deg) scale(1.1); opacity:0.60; }
        }

        .sfs-logo:hover{
          background:linear-gradient(
            135deg,
            rgba(6,78,59,0.12)    0%,
            rgba(22,163,74,0.16)  50%,
            rgba(187,247,208,0.35) 100%
          );
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.85),
            0 8px 28px rgba(22,163,74,0.18);
          transform:translateY(-1px);
        }

        .sfs-logo-wrap{
          position:relative;
          width:46px;
          height:46px;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        /* pulsing radial forest glow */
        .sfs-logo-glow{
          position:absolute;
          width:56px;
          height:56px;
          border-radius:50%;
          background:radial-gradient(
            circle,
            rgba(22,163,74,0.30)  0%,
            rgba(6,78,59,0.14)   50%,
            transparent          75%
          );
          animation:logo-pulse 2.8s ease-in-out infinite;
        }

        @keyframes logo-pulse{
          0%,100%{ transform:scale(1);    opacity:0.7; }
          50%    { transform:scale(1.18); opacity:1;   }
        }

        /* expanding ring */
        .sfs-logo-ring{
          position:absolute;
          width:52px;
          height:52px;
          border-radius:50%;
          border:1.5px solid rgba(22,163,74,0.25);
          animation:ring-expand 2.8s ease-out infinite;
        }

        @keyframes ring-expand{
          0%  { transform:scale(0.9); opacity:0.8; }
          100%{ transform:scale(1.6); opacity:0;   }
        }

        .sfs-logo-img{
          position:relative;
          width:42px;
          height:42px;
          object-fit:contain;
          transition:all .3s ease;
          filter:
            drop-shadow(0 4px 12px rgba(22,163,74,0.25))
            drop-shadow(0 0  6px rgba(74,222,128,0.18));
        }

        .sfs-nav.scrolled .sfs-logo-img{
          width:38px;
          height:38px;
        }

        .sfs-logo-text{
          font-size:.82rem;
          font-weight:800;
          color:#16a34a;
          line-height:1;
          letter-spacing:-0.02em;
          font-family:Inter, system-ui, sans-serif;
          white-space:nowrap;
        }

        .sfs-logo-sub{
          margin-top:4px;
          font-size:9px;
          font-weight:800;
          letter-spacing:.22em;
          text-transform:uppercase;
          background:linear-gradient(90deg,#16a34a,#059669);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          display:flex;
          align-items:center;
          gap:5px;
        }

        .sfs-logo-sub::before,
        .sfs-logo-sub::after{
          content:"";
          display:inline-block;
          width:18px;
          height:1.5px;
          background:linear-gradient(90deg,#16a34a,#4ade80);
          border-radius:2px;
          flex-shrink:0;
        }

        /* ══════════════════════════════
           NAV LINKS — nudged right
        ══════════════════════════════ */
        .sfs-links{
          display:flex;
          align-items:center;
          gap:4px;
          margin-left:auto;
          margin-right:16px;
        }

        .sfs-link{
          position:relative;
          padding:10px 14px;
          border-radius:12px;
          text-decoration:none;
          color:#334155;
          font-size:13px;
          font-weight:700;
          transition:all .22s ease;
        }

        .sfs-link:hover{
          color:#16a34a;
          background:rgba(220,252,231,0.72);
        }

        .sfs-link.active{
          color:#15803d;
          background:linear-gradient(
            135deg,
            rgba(22,163,74,0.14),
            rgba(187,247,208,0.50)
          );
          box-shadow:inset 0 0 0 1px rgba(22,163,74,0.10);
        }

        .sfs-link.active::after{
          content:"";
          position:absolute;
          left:14px;
          right:14px;
          bottom:5px;
          height:2px;
          border-radius:999px;
          background:linear-gradient(90deg,#16a34a,#4ade80);
        }

        /* ── ACTIONS ── */
        .sfs-actions{
          display:flex;
          align-items:center;
          gap:10px;
          flex-shrink:0;
        }

        .sfs-login{
          height:40px;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:0 18px;
          border-radius:12px;
          text-decoration:none;
          font-size:13px;
          font-weight:700;
          color:#15803d;
          border:1px solid rgba(22,163,74,0.14);
          background:rgba(255,255,255,0.75);
          transition:all .22s ease;
        }

        .sfs-login:hover{
          background:#fff;
          transform:translateY(-1px);
          box-shadow:0 8px 18px rgba(22,163,74,0.10);
        }

        .sfs-start{
          height:42px;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          padding:0 20px;
          border-radius:13px;
          background:linear-gradient(135deg,#16a34a,#064e3b);
          color:#fff;
          text-decoration:none;
          font-size:13px;
          font-weight:800;
          box-shadow:0 12px 24px rgba(22,163,74,0.22);
          transition:all .22s ease;
        }

        .sfs-start:hover{
          transform:translateY(-2px);
          box-shadow:0 16px 30px rgba(22,163,74,0.28);
        }

        /* ── MOBILE BUTTON ── */
        .sfs-mobile-btn{
          display:none;
          width:40px;
          height:40px;
          border:none;
          border-radius:12px;
          background:rgba(255,255,255,0.75);
          backdrop-filter:blur(14px);
          cursor:pointer;
          font-size:20px;
          color:#15803d;
        }

        /* ── MOBILE MENU ── */
        .sfs-mobile-overlay{
          position:fixed;
          inset:0;
          background:rgba(15,23,42,0.45);
          backdrop-filter:blur(6px);
          opacity:0;
          pointer-events:none;
          transition:all .3s ease;
          z-index:9998;
        }

        .sfs-mobile-overlay.open{
          opacity:1;
          pointer-events:auto;
        }

        .sfs-mobile-drawer{
          position:absolute;
          top:0;
          right:0;
          width:min(88vw,320px);
          height:100%;
          background:rgba(255,255,255,0.96);
          backdrop-filter:blur(30px);
          padding:80px 22px 30px;
          display:flex;
          flex-direction:column;
          gap:10px;
          transform:translateX(100%);
          transition:all .35s ease;
          box-shadow:-10px 0 40px rgba(15,23,42,0.12);
        }

        .sfs-mobile-overlay.open .sfs-mobile-drawer{
          transform:translateX(0);
        }

        .sfs-mobile-link{
          padding:14px 16px;
          border-radius:14px;
          text-decoration:none;
          color:#334155;
          font-size:15px;
          font-weight:700;
          transition:all .18s ease;
        }

        .sfs-mobile-link:hover,
        .sfs-mobile-link.active{
          background:rgba(220,252,231,0.8);
          color:#15803d;
        }

        .sfs-mobile-actions{
          margin-top:18px;
          display:flex;
          flex-direction:column;
          gap:12px;
        }

        @media(max-width:980px){
          .sfs-links,
          .sfs-actions{
            display:none;
          }

          .sfs-mobile-btn{
            display:flex;
            align-items:center;
            justify-content:center;
          }

          .sfs-bar{
            height:64px;
            padding:0 16px;
          }

          .sfs-logo{
            padding:6px 10px 6px 6px;
          }

          .sfs-logo-wrap{
            width:42px;
            height:42px;
          }

          .sfs-logo-img{
            width:38px;
            height:38px;
          }

          .sfs-logo-text{
            font-size:.95rem;
          }

          .sfs-logo-sub{
            font-size:9px;
          }
        }
      `}),i.jsxs("header",{className:`sfs-nav ${e?"scrolled":""}`,children:[i.jsx("div",{className:"sfs-topbar"}),i.jsxs("div",{className:"sfs-bar",children:[i.jsxs(De,{to:"/",className:"sfs-logo",children:[i.jsxs("div",{className:"sfs-logo-wrap",children:[i.jsx("div",{className:"sfs-logo-glow"}),i.jsx("div",{className:"sfs-logo-ring"}),i.jsx("img",{src:"/logo.png",alt:"ScanForSafe",className:"sfs-logo-img"})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"sfs-logo-text",children:["ScanForSafe ",i.jsx("span",{style:{color:"#0f172a"},children:"Innovations Pvt Ltd"})]}),i.jsx("div",{className:"sfs-logo-sub",children:"Smart Shield"})]})]}),i.jsx("nav",{className:"sfs-links",children:s.map(o=>i.jsx(De,{to:o.to,className:`sfs-link ${a(o.to)?"active":""}`,children:o.label},o.label))}),i.jsxs("div",{className:"sfs-actions",children:[i.jsx(De,{to:"/login",className:"sfs-login",children:"Login"}),i.jsx(De,{to:"/products",className:"sfs-start",children:"Get Started →"})]}),i.jsx("button",{className:"sfs-mobile-btn",onClick:()=>r(!0),children:"☰"})]})]}),i.jsx("div",{className:`sfs-mobile-overlay ${n?"open":""}`,onClick:()=>r(!1),children:i.jsxs("div",{className:"sfs-mobile-drawer",onClick:o=>o.stopPropagation(),children:[i.jsx("button",{onClick:()=>r(!1),style:{position:"absolute",top:"18px",right:"18px",width:"38px",height:"38px",border:"none",borderRadius:"10px",background:"rgba(240,253,244,0.9)",cursor:"pointer",fontSize:"16px",color:"#15803d"},children:"✕"}),s.map(o=>i.jsx(De,{to:o.to,className:`sfs-mobile-link ${a(o.to)?"active":""}`,onClick:()=>r(!1),children:o.label},o.label)),i.jsxs("div",{className:"sfs-mobile-actions",children:[i.jsx(De,{to:"/login",className:"sfs-login",onClick:()=>r(!1),children:"Login"}),i.jsx(De,{to:"/products",className:"sfs-start",onClick:()=>r(!1),children:"Get Started"})]})]})})]})}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zu=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:s,iconNode:a,...o},c)=>w.createElement("svg",{ref:c,...m1,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:zu("lucide",l),...o},[...a.map(([d,x])=>w.createElement(d,x)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(e,t)=>{const n=w.forwardRef(({className:r,...l},s)=>w.createElement(y1,{ref:s,iconNode:t,className:zu(`lucide-${x1(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=C("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=C("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=C("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=C("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=C("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=C("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=C("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=C("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=C("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=C("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=C("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=C("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=C("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=C("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=C("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=C("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=C("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=C("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=C("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=C("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=C("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=C("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=C("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=C("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=C("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=C("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=C("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=C("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=C("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=C("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=C("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=C("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=C("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=C("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=C("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=C("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=C("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=C("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=C("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=C("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=C("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=C("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=C("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=C("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=C("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=C("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=C("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=C("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=C("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=C("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=C("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=C("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=C("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=C("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=C("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=C("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=C("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=C("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=C("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=C("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=C("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=C("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=C("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=C("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=C("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=C("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=C("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=C("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=C("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=C("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),nh="/logo.png",rh=[{icon:i.jsx(Ru,{size:15}),label:"Home"},{icon:i.jsx(Vi,{size:15}),label:"About Us"},{icon:i.jsx(Nu,{size:15}),label:"Services"},{icon:i.jsx(Ca,{size:15}),label:"Products"},{icon:i.jsx(O1,{size:15}),label:"Use Cases"},{icon:i.jsx(Na,{size:15}),label:"Features"},{icon:i.jsx(Eu,{size:15}),label:"Blog"},{icon:i.jsx(za,{size:15}),label:"Contact"}],ih=[{icon:i.jsx(me,{size:15}),label:"Safety Guide"},{icon:i.jsx(j1,{size:15}),label:"Scan Manual"},{icon:i.jsx(Vi,{size:15}),label:"FAQ"},{icon:i.jsx(hr,{size:15}),label:"Privacy Policy"},{icon:i.jsx(Eu,{size:15}),label:"Terms of Use"},{icon:i.jsx(Pu,{size:15}),label:"API Docs"}],lh=[{icon:i.jsx(me,{size:22}),number:"50K+",label:"Products verified"},{icon:i.jsx(M1,{size:22}),number:"120+",label:"Partner brands"},{icon:i.jsx(Hi,{size:22}),number:"4.9★",label:"User rating"},{icon:i.jsx(Z1,{size:22}),number:"99.8%",label:"Scan accuracy"}],sh=[{Icon:L1,label:"Facebook"},{Icon:_1,label:"Instagram"},{Icon:J1,label:"Twitter"},{Icon:D1,label:"LinkedIn"},{Icon:za,label:"Telegram"}];function ah(){return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap');

        .footer-root * {
          font-family: 'Plus Jakarta Sans', sans-serif;
          box-sizing: border-box;
        }

        .footer-brand-font {
          font-family: 'Syne', sans-serif;
        }

        .footer-link-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: 12px;
          cursor: pointer;
          color: #374151;
          transition: all 0.17s ease;
          border-bottom: 1px solid #edf2ee;
          gap: 12px;
        }

        .footer-link-row:last-child {
          border-bottom: none;
        }

        .footer-link-row:hover {
          background: #f0fdf4;
          color: #16a34a;
          padding-left: 16px;
        }

        .footer-link-row:hover .fl-arrow {
          transform: translateX(3px);
          color: #16a34a;
        }

        .fl-arrow {
          transition: transform 0.17s ease;
          color: #9ca3af;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 14px;
          border: 1.5px solid #dce5de;
          background: white;
          color: #16a34a;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .social-btn:hover {
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white;
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(22,163,74,0.3);
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 22px;
          position: relative;
        }

        .stat-card::after {
          content: '';
          position: absolute;
          right: 0;
          top: 20%;
          height: 60%;
          width: 1px;
          background: #e5ece7;
        }

        .stat-card:last-child::after {
          display: none;
        }

        .stat-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 16px;
          background: linear-gradient(135deg, #22c55e 0%, #15803d 100%);
          color: white;
          box-shadow: 0 4px 14px rgba(22,163,74,0.3);
          flex-shrink: 0;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border-radius: 18px;
          border: 1px solid #e5ece7;
          background: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .contact-card:hover {
          border-color: #bbf7d0;
          box-shadow: 0 4px 16px rgba(22,163,74,0.1);
          transform: translateX(3px);
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: #dcfce7;
          color: #15803d;
          flex-shrink: 0;
        }

        .cta-footer-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 14px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .cta-footer-btn.primary {
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white;
          border: none;
          box-shadow: 0 4px 16px rgba(22,163,74,0.35);
        }

        .cta-footer-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(22,163,74,0.45);
        }

        .cta-footer-btn.outline {
          background: transparent;
          color: #16a34a;
          border: 1.5px solid #16a34a;
        }

        .cta-footer-btn.outline:hover {
          background: #f0fdf4;
        }

        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
        }

        .newsletter-input {
          flex: 1;
          border: 1.5px solid #e5ece7;
          border-radius: 14px 0 0 14px;
          padding: 12px 14px;
          font-size: 13px;
          color: #374151;
          background: white;
          outline: none;
        }

        .newsletter-input:focus {
          border-color: #16a34a;
        }

        .newsletter-btn {
          padding: 12px 20px;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white;
          border: none;
          border-radius: 0 14px 14px 0;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .logo-footer-img {
          height: 52px;
          width: auto;
          object-fit: contain;
        }

        .section-label {
          font-size: 11px;
          font-weight: 800;
          color: #16a34a;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        @media (max-width: 768px) {
          .footer-mobile-stack {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .newsletter-mobile {
            width: 100% !important;
          }

          .newsletter-mobile input {
            width: 100%;
          }

          .stat-card::after {
            display: none;
          }

          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}),i.jsx("footer",{className:"footer-root",style:{background:"#f4f6f5",width:"100%",margin:0,padding:0},children:i.jsxs("div",{style:{width:"100%",overflow:"hidden",background:"white",boxShadow:"0 10px 40px rgba(0,0,0,0.05)"},children:[i.jsx("div",{style:{height:5,background:"linear-gradient(90deg, #16a34a 0%, #22c55e 50%, #15803d 100%)"}}),i.jsxs("div",{className:"footer-mobile-stack",style:{background:"linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",borderBottom:"1px solid #e5ece7",padding:"28px clamp(20px, 5vw, 60px)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:20,flexWrap:"wrap"},children:[i.jsxs("div",{children:[i.jsx("p",{className:"section-label",style:{marginBottom:4},children:"Stay Updated"}),i.jsx("h3",{style:{fontSize:24,fontWeight:800,color:"#111827",margin:0},children:"Get product safety alerts & news"})]}),i.jsxs("div",{className:"newsletter-mobile",style:{display:"flex",maxWidth:480,width:"100%"},children:[i.jsx("input",{className:"newsletter-input",type:"email",placeholder:"Enter your email address"}),i.jsx("button",{className:"newsletter-btn",children:"Subscribe"})]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:24,padding:"clamp(24px, 5vw, 60px)"},children:[i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:18},children:[i.jsx("img",{src:nh,alt:"ScanForSafe",className:"logo-footer-img"}),i.jsxs("div",{children:[i.jsxs("h2",{className:"footer-brand-font",style:{fontSize:26,fontWeight:800,color:"#111827",margin:0},children:["Scan",i.jsx("span",{style:{color:"#16a34a"},children:"ForSafe"})]}),i.jsx("p",{style:{fontSize:10,fontWeight:700,color:"#16a34a",letterSpacing:"0.18em",textTransform:"uppercase",margin:0},children:"Scan Smarter · Stay Safer"})]})]}),i.jsx("p",{style:{fontSize:14,lineHeight:1.8,color:"#4b5563",maxWidth:320,marginBottom:24},children:"Innovations in product safety & verification. Empowering a safer world through trusted technology."}),i.jsx("div",{style:{display:"flex",gap:10,flexWrap:"wrap",marginBottom:24},children:sh.map(({Icon:e,label:t},n)=>i.jsx("button",{className:"social-btn",title:t,children:i.jsx(e,{size:18})},n))})]}),i.jsxs("div",{style:{background:"#fafcfb",border:"1px solid #e5ece7",borderRadius:18,padding:24},children:[i.jsx("p",{className:"section-label",children:"Navigation"}),i.jsx("h3",{style:{fontSize:18,fontWeight:800,color:"#111827",margin:"0 0 18px"},children:"Quick Links"}),rh.map((e,t)=>i.jsxs("div",{className:"footer-link-row",children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[i.jsx("span",{style:{color:"#16a34a",display:"flex"},children:e.icon}),i.jsx("span",{style:{fontSize:14,fontWeight:600},children:e.label})]}),i.jsx(Qn,{size:14,className:"fl-arrow"})]},t))]}),i.jsxs("div",{style:{background:"#fafcfb",border:"1px solid #e5ece7",borderRadius:18,padding:24},children:[i.jsx("p",{className:"section-label",children:"Help Center"}),i.jsx("h3",{style:{fontSize:18,fontWeight:800,color:"#111827",margin:"0 0 18px"},children:"Resources"}),ih.map((e,t)=>i.jsxs("div",{className:"footer-link-row",children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[i.jsx("span",{style:{color:"#16a34a",display:"flex"},children:e.icon}),i.jsx("span",{style:{fontSize:14,fontWeight:600},children:e.label})]}),i.jsx(Qn,{size:14,className:"fl-arrow"})]},t))]}),i.jsxs("div",{children:[i.jsx("p",{className:"section-label",children:"Get In Touch"}),i.jsx("h3",{style:{fontSize:18,fontWeight:800,color:"#111827",margin:"0 0 18px"},children:"Contact Us"}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[{icon:i.jsx(Lu,{size:17}),title:"Email",value:"info@scanforsafe.com"},{icon:i.jsx(dn,{size:17}),title:"Phone",value:"+91 98765 43210"},{icon:i.jsx(Ot,{size:17}),title:"Location",value:"India"}].map((e,t)=>i.jsxs("div",{className:"contact-card",children:[i.jsx("div",{className:"contact-icon",children:e.icon}),i.jsxs("div",{children:[i.jsx("h4",{style:{fontSize:12,fontWeight:700,color:"#111827",margin:"0 0 2px"},children:e.title}),i.jsx("p",{style:{fontSize:13,color:"#6b7280",margin:0},children:e.value})]})]},t))})]})]}),i.jsx("div",{style:{margin:"0 clamp(20px, 5vw, 60px) 30px",borderRadius:18,border:"1px solid #e5ece7",background:"#f8faf9",overflow:"hidden"},children:i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))"},children:lh.map((e,t)=>i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon-wrap",children:e.icon}),i.jsxs("div",{children:[i.jsx("h4",{style:{fontSize:28,fontWeight:800,color:"#15803d",margin:"0 0 2px"},children:e.number}),i.jsx("p",{style:{fontSize:12,color:"#6b7280",margin:0},children:e.label})]})]},t))})}),i.jsxs("div",{className:"footer-mobile-stack",style:{margin:"0 clamp(20px, 5vw, 60px) 30px",borderRadius:18,border:"1px solid #e5ece7",background:"linear-gradient(135deg, #fafcfb 0%, #f0fdf4 100%)",padding:"32px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:20,flexWrap:"wrap"},children:[i.jsxs("div",{children:[i.jsx("p",{className:"section-label",style:{marginBottom:4},children:"Join Thousands of Users"}),i.jsxs("h2",{style:{fontSize:30,fontWeight:800,color:"#111827",margin:"0 0 8px"},children:["Ready to scan"," ",i.jsx("span",{style:{color:"#16a34a"},children:"smarter?"})]}),i.jsx("p",{style:{fontSize:14,color:"#6b7280",margin:0},children:"Join thousands verifying product safety with ScanForSafe."})]}),i.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[i.jsxs("button",{className:"cta-footer-btn primary",children:[i.jsx(yn,{size:15}),"Get Started Free"]}),i.jsxs("button",{className:"cta-footer-btn outline",children:["Learn More",i.jsx(Qn,{size:14})]})]})]}),i.jsxs("div",{className:"footer-bottom",style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,borderTop:"1px solid #e5ece7",padding:"20px clamp(20px, 5vw, 60px)",flexWrap:"wrap"},children:[i.jsxs("p",{style:{fontSize:13,color:"#6b7280",margin:0},children:["© 2025"," ",i.jsx("strong",{style:{color:"#374151"},children:"ScanForSafe Innovations"}),". All rights reserved."]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:20,flexWrap:"wrap"},children:[i.jsxs("span",{className:"trust-badge",children:[i.jsx(hr,{size:14,style:{color:"#16a34a"}}),"SSL Secured"]}),i.jsxs("span",{className:"trust-badge",children:[i.jsx(me,{size:14,style:{color:"#16a34a"}}),"ISO Certified"]}),i.jsxs("span",{className:"trust-badge",children:[i.jsx(B1,{size:14,style:{color:"#16a34a"}}),"Eco Friendly"]})]})]})]})})]})}const oh="/assets/car-BSIz0SDG.png",ch="/assets/bike-CEMC_UmP.png",dh="/assets/luggage-g7ehyfUE.png",kl="/assets/qr-B8XSq41G.png",qo=["🛡️  10,000+ Assets Protected","📡  Live QR & NFC Scanning","🚨  Instant Owner Alerts","🔐  End-to-End Encrypted","⚡  Scan in Under 2 Seconds","🌍  Available in 50+ Countries","✅  4.9 / 5 User Rating","📲  15,000+ Scans Today","🏆  #1 Asset Protection Platform","🔔  8,000+ Alerts Sent Today"],Ko=[{label:"Vehicle Verified",owner:"Rahul Verma",avatar:kl,phone:"+91 98765 43210",email:"rahul.verma@mail.com",address:"23, Green Park, New Delhi",asset:"SFS-CAR-4587",emergency:"+91 99887 77665",registered:"12 May 2024, 09:15 AM",img:oh,color:"#22c55e"},{label:"Bike Verified",owner:"Aarav Sharma",avatar:kl,phone:"+91 98345 22119",email:"aarav.sharma@mail.com",address:"Plot 7, Andheri West, Mumbai",asset:"SFS-BIKE-7712",emergency:"+91 88774 66332",registered:"15 May 2024, 10:30 AM",img:ch,color:"#4ade80"},{label:"Luggage Verified",owner:"Priya Kapoor",avatar:kl,phone:"+91 93456 77889",email:"priya.kapoor@mail.com",address:"12, Koramangala, Bangalore",asset:"SFS-LUG-1123",emergency:"+91 90909 88776",registered:"28 Mar 2024, 02:45 PM",img:dh,color:"#86efac"}],uh=`
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }

:root {
  --g1: #22c55e;
  --g2: #16a34a;
  --g3: #4ade80;
  --g4: #dcfce7;
  --bg: #f0fdf4;
  --dark: #071a0b;
  --mid: #4b6357;
  --phone-bg: #061009;
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
}

/* ══ BACKGROUND ══ */
.sfs-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.sfs-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 1000px 700px at 115% 10%, rgba(34,197,94,.13) 0%, transparent 60%),
    radial-gradient(ellipse 700px 600px at -15% 100%, rgba(34,197,94,.09) 0%, transparent 58%),
    radial-gradient(ellipse 400px 300px at 60% 50%, rgba(134,239,172,.05) 0%, transparent 70%),
    linear-gradient(165deg, #f0fdf4 0%, #ecfdf5 45%, #f7fef9 100%);
}

.sfs-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(34,197,94,.35);
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
  padding: 68px 88px 52px;
  position: relative; z-index: 2;
}

/* ══ LEFT ══ */
.sfs-left { padding-right: 32px; }

.sfs-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(34,197,94,.22);
  border-radius: 999px;
  padding: 7px 18px 7px 12px;
  margin-bottom: 24px;
  font-size: 10px; font-weight: 800;
  letter-spacing: .10em; color: #15803d;
  text-transform: uppercase;
  box-shadow: 0 2px 20px rgba(34,197,94,.14), 0 0 0 5px rgba(34,197,94,.06);
  animation: slideInLeft .7s cubic-bezier(.22,1,.36,1) both;
}
.sfs-badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--g1);
  animation: livePulse 2s ease-out infinite;
}
@keyframes livePulse {
  0%   { box-shadow: 0 0 0 0 rgba(34,197,94,.7); }
  70%  { box-shadow: 0 0 0 9px rgba(34,197,94,0); }
  100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
}

.sfs-h1 {
  font-family: 'Sora', sans-serif;
  font-size: 76px; line-height: .90;
  letter-spacing: -4.5px; font-weight: 900;
  color: var(--dark); margin-bottom: 20px;
  animation: slideInLeft .85s .08s cubic-bezier(.22,1,.36,1) both;
}
.sfs-h1 .green {
  background: linear-gradient(125deg, #15803d 0%, #22c55e 55%, #4ade80 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}
.sfs-h1 .outline {
  color: transparent;
  -webkit-text-stroke: 2.5px rgba(34,197,94,.28);
  animation: outlinePulse 4s ease-in-out infinite 0.5s;
}
@keyframes outlinePulse {
  0%,100% { -webkit-text-stroke-color: rgba(34,197,94,.28); }
  50%      { -webkit-text-stroke-color: rgba(34,197,94,.50); }
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
  border: 1px solid rgba(34,197,94,.10);
  border-radius: 22px; padding: 22px 16px 20px;
  box-shadow: 0 2px 20px rgba(0,0,0,.04), 0 0 0 1px rgba(255,255,255,.6);
  position: relative; overflow: hidden;
  transition: .35s cubic-bezier(.34,1.46,.64,1);
  cursor: default;
}
.sfs-feat::before {
  content: "";
  position: absolute; top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(34,197,94,.4), transparent);
  transform: scaleX(0); transform-origin: center;
  transition: .35s ease;
}
.sfs-feat::after {
  content: "";
  position: absolute; inset-inline: 0; bottom: 0;
  height: 3px;
  background: linear-gradient(90deg, #22c55e, #16a34a);
  transform: scaleX(0); transform-origin: left;
  transition: .35s ease;
  border-radius: 0 0 22px 22px;
}
.sfs-feat:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 22px 48px rgba(34,197,94,.15), 0 0 0 1px rgba(34,197,94,.12); }
.sfs-feat:hover::before, .sfs-feat:hover::after { transform: scaleX(1); }
.sfs-feat-ico {
  width: 46px; height: 46px; border-radius: 14px;
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  display: flex; align-items: center; justify-content: center;
  font-size: 21px; margin-bottom: 13px;
  transition: .35s cubic-bezier(.34,1.46,.64,1);
  box-shadow: 0 4px 12px rgba(34,197,94,.18);
}
.sfs-feat:hover .sfs-feat-ico { transform: scale(1.12) rotate(-6deg); box-shadow: 0 8px 20px rgba(34,197,94,.25); }
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
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 60%, #15803d 100%);
  color: white; padding: 17px 34px; border-radius: 16px;
  font-size: 15px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  cursor: pointer; display: flex; align-items: center; gap: 9px;
  box-shadow: 0 12px 32px rgba(34,197,94,.35), 0 2px 8px rgba(34,197,94,.20);
  transition: .35s cubic-bezier(.34,1.46,.64,1);
  position: relative; overflow: hidden;
  letter-spacing: -.01em;
}
.sfs-btn-main::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,.18) 0%, transparent 60%);
  pointer-events: none;
}
.sfs-btn-main:hover { transform: translateY(-4px) scale(1.03); box-shadow: 0 20px 48px rgba(34,197,94,.42); }
.sfs-btn-main:active { transform: translateY(-1px) scale(.99); }
.sfs-btn-sec {
  border: 1.5px solid rgba(34,197,94,.25);
  background: rgba(255,255,255,.80);
  backdrop-filter: blur(12px);
  padding: 16px 28px; border-radius: 16px;
  font-size: 14.5px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; color: var(--dark); transition: .28s ease;
}
.sfs-btn-sec:hover { transform: translateY(-4px); border-color: rgba(34,197,94,.50); box-shadow: 0 12px 28px rgba(34,197,94,.10); }
.sfs-play-ring {
  width: 30px; height: 30px; border-radius: 50%;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; color: white;
  box-shadow: 0 4px 12px rgba(34,197,94,.30);
  transition: .28s;
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
  background: linear-gradient(125deg, #15803d, #22c55e);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  line-height: 1;
}
.sfs-stat-lbl { font-size: 10.5px; color: var(--mid); margin-top: 3px; font-weight: 500; }
.sfs-stat-div { width: 1px; height: 36px; background: rgba(34,197,94,.18); }

/* Scroll indicator */
.sfs-scroll {
  display: flex; align-items: center; gap: 10px;
  animation: fadeUp .6s .82s both; opacity: .55;
}
.sfs-scroll-mouse {
  width: 22px; height: 34px;
  border: 2px solid rgba(34,197,94,.40);
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
  filter: drop-shadow(0 16px 32px rgba(34,197,94,.26));
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
  box-shadow: 0 8px 32px rgba(0,0,0,.12), 0 0 0 1px rgba(34,197,94,.12);
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
  box-shadow: 0 8px 28px rgba(0,0,0,.09), 0 0 0 1px rgba(34,197,94,.08);
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
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; flex-shrink: 0;
}
.sfs-alert-text h5 { font-size: 11.5px; font-weight: 700; color: var(--dark); }
.sfs-alert-text p  { font-size: 9.5px; color: var(--mid); margin-top: 2px; }
.sfs-scan-badge {
  position: absolute;
  right: 15px; bottom: 120px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  border-radius: 14px;
  padding: 10px 16px;
  z-index: 10;
  box-shadow: 0 10px 28px rgba(34,197,94,.35);
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
  border: 1px solid rgba(34,197,94,.12);
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
  background: radial-gradient(circle, rgba(34,197,94,.18) 0%, rgba(34,197,94,.07) 40%, transparent 70%);
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
    0 0 0 1px rgba(255,255,255,.06),
    0 0 80px rgba(34,197,94,.12),
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
  background: linear-gradient(to bottom, transparent 70%, rgba(34,197,94,.06));
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
  background: linear-gradient(175deg, #071208, #020604, #061009);
  border-radius: 38px; overflow: hidden;
  padding: 16px 13px 18px;
  display: flex; flex-direction: column; align-items: center; text-align: center;
}
.sfs-verified {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(34,197,94,.12);
  border: 1px solid rgba(34,197,94,.25);
  border-radius: 999px; padding: 4px 12px;
  font-size: 8px; font-weight: 800;
  color: #4ade80; letter-spacing: .07em; text-transform: uppercase;
  margin-bottom: 12px;
}
.sfs-vdot { width: 5px; height: 5px; border-radius: 50%; background: var(--g1); animation: livePulse 1.5s infinite; }
.sfs-avatar {
  width: 70px; height: 70px; border-radius: 50%; object-fit: cover;
  margin-bottom: 11px;
  border: 3px solid rgba(34,197,94,.40);
  box-shadow: 0 0 24px rgba(34,197,94,.30), 0 0 0 6px rgba(34,197,94,.08);
}
.sfs-owner-name {
  color: white; font-size: 18px; font-weight: 800;
  margin-bottom: 3px; font-family: 'Sora', sans-serif;
  letter-spacing: -.4px;
}
.sfs-owner-label { color: #86efac; font-size: 11px; margin-bottom: 16px; font-weight: 500; }
.sfs-divider {
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(34,197,94,.15), transparent);
  margin-bottom: 10px;
}
.sfs-row {
  display: flex; align-items: center; gap: 8px;
  padding: 5.5px 0; border-bottom: 1px solid rgba(34,197,94,.06);
  width: 100%; text-align: left;
}
.sfs-row:last-child { border-bottom: none; }
.sfs-row-ico {
  width: 27px; height: 27px; border-radius: 8px;
  background: rgba(34,197,94,.09);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; flex-shrink: 0;
  transition: .2s;
}
.sfs-row:hover .sfs-row-ico { background: rgba(34,197,94,.18); transform: scale(1.08); }
.sfs-row-lbl { font-size: 7.5px; color: #4a8060; letter-spacing: .07em; text-transform: uppercase; font-weight: 600; }
.sfs-row-val { font-size: 10px; color: #bbf7d0; font-weight: 600; }

/* Scanline */
.sfs-scanline {
  position: absolute; left: -10%; width: 120%; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(34,197,94,.3), rgba(134,239,172,.9), rgba(255,255,255,.5), rgba(134,239,172,.9), rgba(34,197,94,.3), transparent);
  box-shadow: 0 0 16px rgba(34,197,94,.5), 0 0 32px rgba(34,197,94,.2);
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
  filter: drop-shadow(0 32px 64px rgba(0,0,0,.18)) drop-shadow(0 0 40px rgba(34,197,94,.24));
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
  box-shadow: 0 20px 56px rgba(0,0,0,.12), 0 0 0 1px rgba(34,197,94,.10);
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
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  display: flex; align-items: center; justify-content: center;
  font-size: 26px; flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(34,197,94,.20);
}
.sfs-qr-card h4 { font-size: 13px; font-weight: 800; color: var(--dark); margin-bottom: 4px; }
.sfs-qr-card p  { font-size: 10px; color: #5a7060; line-height: 1.4; }
.sfs-status-pill {
  position: absolute; top: 72px; left: 8px;
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(14px);
  border-radius: 16px; padding: 10px 15px;
  box-shadow: 0 8px 28px rgba(0,0,0,.09), 0 0 0 1px rgba(34,197,94,.08);
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
  background: linear-gradient(90deg, #15803d 0%, #166534 35%, #15803d 70%, #166534 100%);
  box-shadow: 0 -1px 0 rgba(34,197,94,.15);
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
  background: rgba(0,0,0,.18); border-right: 1px solid rgba(255,255,255,.15);
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

/* ══ RESPONSIVE ══ */
@media(max-width:1200px){
  .sfs-grid { grid-template-columns:1fr; padding:44px 32px 28px; gap:32px; }
  .sfs-h1 { font-size:56px; letter-spacing:-3px; }
  .sfs-right { min-height:600px; }
  .sfs-asset-img { width:360px; }
  .sfs-shield { width:86px; height:86px; top:28px; right:12px; }
  .sfs-ring-2, .sfs-ring-3 { display:none; }
}
@media(max-width:640px){
  .sfs-h1 { font-size:42px; letter-spacing:-2px; }
  .sfs-feats { flex-direction:column; }
  .sfs-right { min-height:500px; }
  .sfs-phone { width:268px; }
  .sfs-qr-card { right:-6px; transform:scale(.88); }
  .sfs-alert-badge { left:0; transform:scale(.85); }
  .sfs-scan-badge { right:0; transform:scale(.85); }
  .sfs-stats { gap:16px; flex-wrap: wrap; }
}
`,fh=Array.from({length:18},(e,t)=>({id:t,x:`${(t*37+11)%100}%`,y:`${(t*53+7)%100}%`,size:`${t%3+2}px`,delay:`${t*.7%6}s`,duration:`${8+t%5}s`,opacity:.1+t%4*.08}));function ph(){return i.jsxs(i.Fragment,{children:[fh.map(e=>i.jsx("div",{className:"sfs-particle",style:{left:e.x,top:e.y,width:e.size,height:e.size,opacity:e.opacity,animation:`particleDrift ${e.duration} ease-in-out infinite ${e.delay}`}},e.id)),i.jsx("style",{children:`
        @keyframes particleDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(8px,-12px) scale(1.3); }
          66%      { transform: translate(-6px,8px) scale(0.7); }
        }
      `})]})}function hh(){return i.jsxs("svg",{className:"sfs-waves",viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("defs",{children:i.jsx("style",{children:`
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
        `})}),i.jsx("path",{className:"w1",d:"M0,480 C220,415 440,568 640,480 C860,392 1068,548 1270,468 C1375,428 1440,446 1440,446 L1440,900 L0,900 Z",fill:"rgba(34,197,94,.058)"}),i.jsx("path",{className:"w2",d:"M0,594 C200,548 392,644 622,594 C848,544 1052,634 1268,582 C1386,556 1440,564 1440,564 L1440,900 L0,900 Z",fill:"rgba(34,197,94,.042)"}),i.jsx("path",{className:"w3",d:"M0,706 C244,668 452,742 686,706 C908,670 1112,736 1314,698 C1402,678 1440,682 1440,682 L1440,900 L0,900 Z",fill:"rgba(34,197,94,.028)"})]})}function gh(){const e=[];for(let t=0;t<=12;t++)e.push(i.jsx("line",{x1:"0",y1:t*50,x2:"600",y2:t*50,stroke:"rgba(34,197,94,.08)",strokeWidth:".8"},`h${t}`),i.jsx("line",{x1:t*50,y1:"0",x2:t*50,y2:"600",stroke:"rgba(34,197,94,.08)",strokeWidth:".8"},`v${t}`));return e.push(i.jsx("line",{x1:"0",y1:"0",x2:"600",y2:"600",stroke:"rgba(34,197,94,.05)",strokeWidth:"1"},"d1"),i.jsx("line",{x1:"600",y1:"0",x2:"0",y2:"600",stroke:"rgba(34,197,94,.05)",strokeWidth:"1"},"d2")),i.jsx("svg",{className:"sfs-mesh",viewBox:"0 0 600 600",xmlns:"http://www.w3.org/2000/svg",children:e})}function xh(){return i.jsx("div",{className:"sfs-globe-wrap",children:i.jsxs("svg",{viewBox:"0 0 300 300",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("defs",{children:i.jsxs("radialGradient",{id:"gGrad2",cx:"38%",cy:"32%",children:[i.jsx("stop",{offset:"0%",stopColor:"rgba(134,239,172,.30)"}),i.jsx("stop",{offset:"55%",stopColor:"rgba(34,197,94,.12)"}),i.jsx("stop",{offset:"100%",stopColor:"rgba(34,197,94,.03)"})]})}),i.jsx("circle",{cx:"150",cy:"150",r:"138",fill:"url(#gGrad2)",stroke:"rgba(34,197,94,.16)",strokeWidth:"1"}),[-90,-54,-18,18,54,90].map((e,t)=>{const n=150+e,r=Math.sqrt(Math.max(0,138*138-e*e));return i.jsx("ellipse",{cx:"150",cy:n,rx:r,ry:r*.26,fill:"none",stroke:"rgba(34,197,94,.12)",strokeWidth:".7"},t)}),[0,30,60,90,120,150].map((e,t)=>i.jsx("ellipse",{cx:"150",cy:"150",rx:"42",ry:"138",fill:"none",stroke:"rgba(34,197,94,.10)",strokeWidth:".7",transform:`rotate(${e} 150 150)`},t)),i.jsx("ellipse",{cx:"150",cy:"150",rx:"175",ry:"46",fill:"none",stroke:"rgba(34,197,94,.20)",strokeWidth:"1.2",strokeDasharray:"8 6",style:{animation:"orbitSpin2 14s linear infinite",transformOrigin:"150px 150px"}}),i.jsx("circle",{cx:"325",cy:"150",r:"8",fill:"rgba(34,197,94,.55)",style:{animation:"orbitSpin2 14s linear infinite",transformOrigin:"150px 150px"}}),i.jsx("style",{children:"@keyframes orbitSpin2{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"})]})})}function mh(){return i.jsxs("svg",{className:"sfs-shield",viewBox:"0 0 110 110",xmlns:"http://www.w3.org/2000/svg",children:[i.jsxs("defs",{children:[i.jsxs("radialGradient",{id:"shGrad2",cx:"40%",cy:"30%",children:[i.jsx("stop",{offset:"0%",stopColor:"rgba(134,239,172,.99)"}),i.jsx("stop",{offset:"60%",stopColor:"rgba(34,197,94,.85)"}),i.jsx("stop",{offset:"100%",stopColor:"rgba(22,163,74,.75)"})]}),i.jsx("filter",{id:"shBlur",children:i.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2"})})]}),i.jsx("path",{d:"M55 12 L87 25 L87 52 C87 70 72 84 55 92 C38 84 23 70 23 52 L23 25 Z",fill:"rgba(34,197,94,.25)",filter:"url(#shBlur)"}),i.jsx("path",{d:"M55 10 L88 24 L88 52 C88 70 73 84 55 92 C37 84 22 70 22 52 L22 24 Z",fill:"url(#shGrad2)",stroke:"rgba(255,255,255,.40)",strokeWidth:"1.5"}),i.jsx("path",{d:"M55 16 L82 28 L82 52 C82 67 69 79 55 86 C41 79 28 67 28 52 L28 28 Z",fill:"none",stroke:"rgba(255,255,255,.20)",strokeWidth:"1"}),i.jsx("polyline",{points:"38,55 50,67 72,43",fill:"none",stroke:"white",strokeWidth:"5.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Zo({asset:e,animClass:t}){return i.jsxs("div",{className:`sfs-scan-stage ${t}`,children:[i.jsx("div",{className:"sfs-glow"}),i.jsx("div",{className:"sfs-ring sfs-ring-1"}),i.jsx("div",{className:"sfs-ring sfs-ring-2"}),i.jsx("div",{className:"sfs-ring sfs-ring-3"}),i.jsx("img",{src:e.img,alt:e.label,className:"sfs-asset-img"}),i.jsx("div",{className:"sfs-scanline"}),i.jsxs("div",{className:"sfs-qr-card",children:[i.jsx("div",{className:"sfs-qr-icon",children:"🔐"}),i.jsxs("div",{children:[i.jsx("h4",{children:e.label}),i.jsxs("p",{children:["QR & NFC Protected",i.jsx("br",{}),"Secure Identification"]})]})]}),i.jsxs("div",{className:"sfs-status-pill",children:[i.jsx("div",{className:"sfs-status-dot"}),i.jsxs("div",{children:[i.jsx("div",{className:"sfs-status-label",children:"Scanning…"}),i.jsx("div",{className:"sfs-status-sub",children:"SFS Shield Active"})]})]})]})}function Jo({asset:e,animClass:t}){const n=[{ico:"📞",lbl:"Phone",val:e.phone},{ico:"📧",lbl:"Email",val:e.email},{ico:"📍",lbl:"Address",val:e.address},{ico:"🆔",lbl:"Asset ID",val:e.asset},{ico:"🚨",lbl:"Emergency",val:e.emergency},{ico:"📅",lbl:"Registered",val:e.registered}];return i.jsxs("div",{className:`sfs-phone ${t}`,children:[i.jsx("div",{className:"sfs-notch-row",children:i.jsx("div",{className:"sfs-notch"})}),i.jsxs("div",{className:"sfs-screen",children:[i.jsxs("div",{className:"sfs-verified",children:[i.jsx("div",{className:"sfs-vdot"})," Verified Owner"]}),i.jsx("img",{src:e.avatar,alt:"QR",className:"sfs-avatar"}),i.jsx("div",{className:"sfs-owner-name",children:e.owner}),i.jsx("div",{className:"sfs-owner-label",children:e.label}),i.jsx("div",{className:"sfs-divider"}),i.jsx("div",{style:{width:"100%",textAlign:"left"},children:n.map(r=>i.jsxs("div",{className:"sfs-row",children:[i.jsx("div",{className:"sfs-row-ico",children:r.ico}),i.jsxs("div",{children:[i.jsx("div",{className:"sfs-row-lbl",children:r.lbl}),i.jsx("div",{className:"sfs-row-val",children:r.val})]})]},r.lbl))})]})]})}function yh(e,t=2200){const[n,r]=w.useState(0);return w.useEffect(()=>{let l=null;const s=a=>{l||(l=a);const o=Math.min((a-l)/t,1);r(Math.floor(o*e)),o<1&&requestAnimationFrame(s)};requestAnimationFrame(s)},[e,t]),n}function jl({num:e,suffix:t,label:n}){const r=yh(e);return i.jsxs("div",{className:"sfs-stat",children:[i.jsxs("div",{className:"sfs-stat-num",children:[r.toLocaleString(),t]}),i.jsx("div",{className:"sfs-stat-lbl",children:n})]})}function vh(){const[e,t]=w.useState(0),[n,r]=w.useState("scan");w.useEffect(()=>{const a=setTimeout(()=>r("phone"),2400),o=setInterval(()=>{r("phone-out"),setTimeout(()=>{t(c=>(c+1)%Ko.length),r("scan")},360),setTimeout(()=>r("phone"),2800)},7800);return()=>{clearTimeout(a),clearInterval(o)}},[]);const l=[...qo,...qo],s=Ko[e];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:uh}),i.jsxs("div",{className:"sfs-hero",children:[i.jsxs("div",{className:"sfs-bg",children:[i.jsx(hh,{}),i.jsx(gh,{}),i.jsx(xh,{}),i.jsx(ph,{})]}),i.jsxs("div",{className:"sfs-grid",children:[i.jsxs("div",{className:"sfs-left",children:[i.jsxs("div",{className:"sfs-badge",children:[i.jsx("div",{className:"sfs-badge-dot"}),"Live Protection Active"]}),i.jsxs("h1",{className:"sfs-h1",children:["Smart Protection",i.jsx("br",{}),"That ",i.jsx("span",{className:"green",children:"Connects"}),i.jsx("br",{}),i.jsx("span",{className:"outline",children:"Your World"})]}),i.jsx("p",{className:"sfs-sub",children:"Protect vehicles, bikes, luggage and valuables with next-generation QR + NFC verification. Instant owner alerts and live smart protection — all with a single scan."}),i.jsx("div",{className:"sfs-feats",children:[{ico:"🛡️",h:"Secure QR & NFC",p:"Military-grade encrypted ID protection system"},{ico:"📡",h:"Live Tracking",p:"Real-time alerts & continuous monitoring"},{ico:"🚨",h:"Emergency Access",p:"Instant verified owner identification"}].map(a=>i.jsxs("div",{className:"sfs-feat",children:[i.jsx("div",{className:"sfs-feat-ico",children:a.ico}),i.jsx("h4",{children:a.h}),i.jsx("p",{children:a.p})]},a.h))}),i.jsxs("div",{className:"sfs-actions",children:[i.jsx("button",{className:"sfs-btn-main",children:"🔐 Protect Your Assets"}),i.jsxs("button",{className:"sfs-btn-sec",children:[i.jsx("div",{className:"sfs-play-ring",children:"▶"}),"See How It Works"]})]}),i.jsxs("div",{className:"sfs-stats",children:[i.jsx(jl,{num:1e4,suffix:"+",label:"Assets Protected"}),i.jsx("div",{className:"sfs-stat-div"}),i.jsx(jl,{num:15e3,suffix:"+",label:"Scans Today"}),i.jsx("div",{className:"sfs-stat-div"}),i.jsx(jl,{num:50,suffix:"+",label:"Countries"}),i.jsx("div",{className:"sfs-stat-div"}),i.jsxs("div",{className:"sfs-stat",children:[i.jsx("div",{className:"sfs-stat-num",children:"4.9★"}),i.jsx("div",{className:"sfs-stat-lbl",children:"User Rating"})]})]}),i.jsxs("div",{className:"sfs-scroll",children:[i.jsx("div",{className:"sfs-scroll-mouse",children:i.jsx("div",{className:"sfs-scroll-wheel"})}),i.jsx("span",{children:"Scroll Down"})]})]}),i.jsxs("div",{className:"sfs-right",children:[i.jsx(mh,{}),i.jsx("div",{className:"sfs-lock",children:"🔒"}),i.jsxs("div",{className:"sfs-alert-badge",children:[i.jsx("div",{className:"sfs-alert-ico",children:"🔔"}),i.jsxs("div",{className:"sfs-alert-text",children:[i.jsx("h5",{children:"Owner Alerted!"}),i.jsx("p",{children:"Scan detected · 2s ago"})]})]}),i.jsxs("div",{className:"sfs-scan-badge",children:[i.jsx("div",{className:"sfs-scan-badge-ico",children:"📲"}),i.jsxs("div",{className:"sfs-scan-badge-text",children:[i.jsx("h5",{children:"15,234 Scans"}),i.jsx("p",{children:"Today worldwide"})]})]}),i.jsxs("div",{className:"sfs-stage",style:{minHeight:700},children:[n==="scan"&&i.jsx(Zo,{asset:s,animClass:"sfs-scan-in"}),n==="scan-out"&&i.jsx(Zo,{asset:s,animClass:"sfs-scan-out"}),n==="phone"&&i.jsx(Jo,{asset:s,animClass:"sfs-entering"}),n==="phone-out"&&i.jsx(Jo,{asset:s,animClass:"sfs-exiting"})]})]})]}),i.jsx("div",{className:"sfs-ticker",children:i.jsxs("div",{className:"sfs-ticker-inner",children:[i.jsx("div",{className:"sfs-ticker-label",children:"Live Updates"}),i.jsx("div",{className:"sfs-ticker-track",children:l.map((a,o)=>i.jsxs("div",{className:"sfs-ti",children:[a,o<l.length-1&&i.jsx("div",{className:"sfs-td"})]},o))})]})})]})]})}const wh=[{value:"5,000+",label:"Items Protected",icon:i.jsx(me,{size:30})},{value:"98%",label:"Recovery Rate",icon:i.jsx(v1,{size:30})},{value:"< 2 min",label:"Alert Response",icon:i.jsx(C1,{size:30})},{value:"4.9 ★",label:"Customer Rating",icon:i.jsx(Hi,{size:30})}],ec=[{title:"24/7",text:"Active Monitoring",icon:i.jsx(js,{size:20})},{title:"50K+",text:"Daily QR Scans",icon:i.jsx(k1,{size:20})},{title:"ISO 27001",text:"Security Certified",icon:i.jsx(U1,{size:20})},{title:"99.9%",text:"System Uptime",icon:i.jsx(Pu,{size:20})}];function bh(){return i.jsxs("section",{className:"relative overflow-hidden py-20 bg-gradient-to-b from-[#f5fff8] via-[#f8fffb] to-white",children:[i.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-green-400/10 blur-[140px]"}),i.jsx("div",{className:"absolute inset-0 opacity-[0.03]",children:i.jsx("div",{className:"w-full h-full",style:{backgroundImage:"radial-gradient(#16a34a 1px, transparent 1px)",backgroundSize:"28px 28px"}})}),i.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("div",{className:"flex justify-center mb-14",children:i.jsxs("div",{className:"inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-green-200 shadow-[0_10px_40px_rgba(16,185,129,0.08)]",children:[i.jsxs("div",{className:"relative flex items-center justify-center",children:[i.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500 animate-pulse"}),i.jsx("div",{className:"absolute w-3 h-3 rounded-full bg-green-500 animate-ping opacity-30"})]}),i.jsx("span",{className:"text-xs sm:text-sm font-black tracking-[0.25em] uppercase text-slate-700",children:"Live Protection Metrics"})]})}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:wh.map(({value:e,label:t,icon:n},r)=>i.jsxs("div",{className:"group relative overflow-hidden rounded-[34px] border border-green-100 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:border-green-300 hover:shadow-[0_25px_80px_rgba(16,185,129,0.15)]",children:[i.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-400/10 via-transparent to-emerald-200/10"}),i.jsx("div",{className:"absolute inset-[1px] rounded-[33px] border border-white/70 pointer-events-none"}),i.jsx("div",{className:"absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-green-300 to-transparent"}),i.jsx("div",{className:"absolute -top-10 -right-10 w-32 h-32 bg-green-300/10 blur-3xl rounded-full"}),i.jsxs("div",{className:"absolute bottom-2 right-4 text-[85px] font-black text-slate-100 leading-none select-none",children:["0",r+1]}),i.jsx("div",{className:"relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-green-500/30 mb-6 group-hover:scale-110 transition-transform duration-500",children:n}),i.jsx("h3",{className:"relative z-10 text-4xl font-black tracking-tight text-slate-900 leading-none mb-3",children:e}),i.jsx("p",{className:"relative z-10 text-slate-500 text-base font-medium leading-relaxed",children:t}),i.jsx("div",{className:"relative z-10 mt-7 h-[4px] w-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-300 group-hover:w-24 transition-all duration-500"})]},t))}),i.jsxs("div",{className:"mt-14 relative overflow-hidden rounded-[36px] border border-green-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)]",children:[i.jsx("div",{className:"absolute inset-[1px] rounded-[35px] border border-white/80 pointer-events-none"}),i.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-green-400/10 blur-[80px]"}),i.jsx("div",{className:"absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-green-300 to-transparent"}),i.jsx("div",{className:"relative grid grid-cols-2 md:grid-cols-4",children:ec.map((e,t)=>i.jsxs("div",{className:`group relative px-8 py-10 text-center transition-all duration-300 hover:bg-green-50/40 ${t!==ec.length-1?"border-b md:border-b-0 md:border-r border-green-100":""}`,children:[i.jsx("div",{className:"mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition duration-500",children:e.icon}),i.jsx("h4",{className:"text-4xl font-black tracking-tight text-slate-900",children:e.title}),i.jsx("p",{className:"mt-2 text-sm sm:text-base text-slate-500 font-medium",children:e.text}),i.jsx("div",{className:"mx-auto mt-5 h-[3px] w-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-300 group-hover:w-20 transition-all duration-500"})]},e.title))})]})]})]})}function kh(){return i.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{x:"0",y:"0",width:"7",height:"7",rx:"1",fill:"#064e3b"}),i.jsx("rect",{x:"1",y:"1",width:"5",height:"5",rx:"0.5",fill:"white"}),i.jsx("rect",{x:"2",y:"2",width:"3",height:"3",fill:"#064e3b"}),i.jsx("rect",{x:"14",y:"0",width:"7",height:"7",rx:"1",fill:"#064e3b"}),i.jsx("rect",{x:"15",y:"1",width:"5",height:"5",rx:"0.5",fill:"white"}),i.jsx("rect",{x:"16",y:"2",width:"3",height:"3",fill:"#064e3b"}),i.jsx("rect",{x:"0",y:"14",width:"7",height:"7",rx:"1",fill:"#064e3b"}),i.jsx("rect",{x:"1",y:"15",width:"5",height:"5",rx:"0.5",fill:"white"}),i.jsx("rect",{x:"2",y:"16",width:"3",height:"3",fill:"#064e3b"}),i.jsx("rect",{x:"8",y:"0",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"10",y:"0",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"12",y:"0",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"8",y:"2",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"11",y:"2",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"9",y:"4",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"11",y:"4",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"8",y:"6",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"10",y:"6",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"0",y:"8",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"3",y:"8",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"5",y:"8",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"8",y:"8",width:"1",height:"2",fill:"#064e3b"}),i.jsx("rect",{x:"10",y:"8",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"13",y:"8",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"15",y:"8",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"18",y:"8",width:"1",height:"2",fill:"#064e3b"}),i.jsx("rect",{x:"0",y:"10",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"2",y:"10",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"5",y:"10",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"9",y:"10",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"11",y:"10",width:"3",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"15",y:"10",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"17",y:"10",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"0",y:"12",width:"3",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"4",y:"12",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"8",y:"12",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"11",y:"12",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"13",y:"12",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"16",y:"12",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"18",y:"12",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"8",y:"14",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"10",y:"14",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"13",y:"14",width:"1",height:"2",fill:"#064e3b"}),i.jsx("rect",{x:"15",y:"14",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"17",y:"14",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"8",y:"16",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"11",y:"16",width:"1",height:"2",fill:"#064e3b"}),i.jsx("rect",{x:"14",y:"16",width:"1",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"16",y:"16",width:"1",height:"2",fill:"#064e3b"}),i.jsx("rect",{x:"18",y:"16",width:"2",height:"1",fill:"#064e3b"}),i.jsx("rect",{x:"8",y:"18",width:"1",height:"2",fill:"#064e3b"}),i.jsx("rect",{x:"10",y:"18",width:"1",height:"2",fill:"#064e3b"}),i.jsx("rect",{x:"14",y:"18",width:"1",height:"2",fill:"#064e3b"}),i.jsx("rect",{x:"19",y:"18",width:"1",height:"2",fill:"#064e3b"})]})}function jh(){return i.jsxs("div",{style:{position:"relative",width:280,height:560,flexShrink:0},children:[i.jsx("div",{style:{position:"absolute",right:-50,top:"28%",background:"#25D366",borderRadius:"50%",width:44,height:44,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(37,211,102,0.4)",zIndex:10},children:i.jsx(Ui,{size:22,color:"white",fill:"white"})}),i.jsx("div",{style:{position:"absolute",right:-44,top:"52%",background:"white",borderRadius:"50%",width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(0,0,0,0.15)",zIndex:10},children:i.jsx(ct,{size:18,color:"#064e3b"})}),i.jsxs("div",{style:{position:"absolute",inset:0,borderRadius:46,background:"linear-gradient(160deg, #5a5a5a 0%, #3a3a3a 30%, #2a2a2a 60%, #1e1e1e 100%)",boxShadow:`
          0 0 0 1px #666 inset,
          2px 4px 0 0 #555 inset,
          -1px -2px 0 0 #111 inset,
          0 30px 80px rgba(0,0,0,0.55),
          0 8px 24px rgba(0,0,0,0.35),
          0 2px 6px rgba(0,0,0,0.25)
        `},children:[i.jsx("div",{style:{position:"absolute",inset:0,borderRadius:46,background:"linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 40%)",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",left:-3,top:120,width:3,height:34,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",left:-3,top:165,width:3,height:34,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",left:-3,top:88,width:3,height:22,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",right:-3,top:140,width:3,height:70,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"0 2px 2px 0",boxShadow:"1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",inset:6,borderRadius:41,background:"#0a0a0a",overflow:"hidden"},children:i.jsxs("div",{style:{position:"absolute",inset:3,borderRadius:38,background:"white",overflow:"hidden",display:"flex",flexDirection:"column"},children:[i.jsx("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",width:100,height:30,background:"#0a0a0a",borderRadius:20,zIndex:20}}),i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 20px 0",fontSize:10,fontWeight:700,color:"#111"},children:[i.jsx("span",{children:"9:41"}),i.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[i.jsxs("svg",{width:"14",height:"10",viewBox:"0 0 14 10",children:[i.jsx("rect",{x:"0",y:"6",width:"2.5",height:"4",rx:"0.5",fill:"#111"}),i.jsx("rect",{x:"3.5",y:"4",width:"2.5",height:"6",rx:"0.5",fill:"#111"}),i.jsx("rect",{x:"7",y:"2",width:"2.5",height:"8",rx:"0.5",fill:"#111"}),i.jsx("rect",{x:"10.5",y:"0",width:"2.5",height:"10",rx:"0.5",fill:"#111"})]}),i.jsxs("svg",{width:"13",height:"10",viewBox:"0 0 13 10",children:[i.jsx("path",{d:"M6.5 7.5 L6.5 9.5",stroke:"#111",strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("path",{d:"M4 5.5 Q6.5 3.5 9 5.5",stroke:"#111",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"}),i.jsx("path",{d:"M1.5 3 Q6.5 -0.5 11.5 3",stroke:"#111",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"})]}),i.jsxs("svg",{width:"22",height:"11",viewBox:"0 0 22 11",children:[i.jsx("rect",{x:"0",y:"1",width:"19",height:"9",rx:"2",stroke:"#111",strokeWidth:"1",fill:"none"}),i.jsx("rect",{x:"19.5",y:"3.5",width:"2",height:"4",rx:"1",fill:"#111"}),i.jsx("rect",{x:"1.5",y:"2.5",width:"15",height:"6",rx:"1",fill:"#111"})]})]})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px 6px",borderBottom:"1px solid #f0f0f0"},children:[i.jsx(S1,{size:18,color:"#333",strokeWidth:2.5}),i.jsxs("div",{style:{textAlign:"center"},children:[i.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#111"},children:"Found Item"}),i.jsxs("div",{style:{fontSize:9,color:"#777",display:"flex",alignItems:"center",gap:3},children:[i.jsx($i,{size:9,color:"#777"}),"Scan QR Code"]})]}),i.jsx("div",{style:{width:18}})]}),i.jsxs("div",{style:{margin:"10px 12px 6px",background:"#dcfce7",borderRadius:12,padding:"10px 12px",border:"1px solid #bbf7d0",display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{background:"white",borderRadius:8,padding:4,border:"1px solid #ddd",flexShrink:0},children:i.jsx(kh,{})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:13,fontWeight:800,color:"#064e3b",letterSpacing:"-0.3px"},children:"PET-7G4K-2L8M"}),i.jsx("div",{style:{fontSize:10,color:"#166534",marginBottom:4},children:"Pet ID Tag"}),i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:3,background:"#166534",borderRadius:4,padding:"2px 6px",fontSize:9,fontWeight:700,color:"white"},children:[i.jsx(ks,{size:8,color:"white",fill:"white"}),"Verified"]})]})]}),i.jsxs("div",{style:{padding:"0 12px",flex:1,display:"flex",flexDirection:"column",gap:0},children:[i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0",borderBottom:"1px solid #f5f5f5"},children:[i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[i.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#dcfce7",border:"1.5px solid #166534",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(dt,{size:12,color:"#064e3b"})}),i.jsx("div",{style:{width:1.5,height:28,background:"#e0e0e0"}})]}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"OTP Verification"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"Enter OTP sent to"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"+91 98765 43210"})]}),i.jsx("div",{style:{background:"#f3f4f6",borderRadius:6,padding:"4px 8px",fontSize:13,fontWeight:800,color:"#064e3b",letterSpacing:1},children:"5321"})]}),i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0",borderBottom:"1px solid #f5f5f5"},children:[i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[i.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#dcfce7",border:"1.5px solid #166534",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(ct,{size:12,color:"#064e3b"})}),i.jsx("div",{style:{width:1.5,height:28,background:"#e0e0e0"}})]}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"Owner Notified"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"WhatsApp alert sent"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"instantly"})]}),i.jsx(ks,{size:16,color:"#166534",fill:"#166534",style:{flexShrink:0,marginTop:4}})]}),i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0"},children:[i.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#dcfce7",border:"1.5px solid #166534",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(Ot,{size:12,color:"#064e3b"})}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"Live Location"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"Sharing location"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"for safe return"})]}),i.jsxs("div",{style:{width:42,height:38,borderRadius:6,background:"linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,overflow:"hidden",position:"relative",border:"1px solid #86efac"},children:[i.jsxs("div",{style:{position:"absolute",inset:0},children:[i.jsx("div",{style:{position:"absolute",left:"33%",top:0,bottom:0,width:1,background:"rgba(255,255,255,0.5)"}}),i.jsx("div",{style:{position:"absolute",left:"66%",top:0,bottom:0,width:1,background:"rgba(255,255,255,0.5)"}}),i.jsx("div",{style:{position:"absolute",top:"33%",left:0,right:0,height:1,background:"rgba(255,255,255,0.5)"}}),i.jsx("div",{style:{position:"absolute",top:"66%",left:0,right:0,height:1,background:"rgba(255,255,255,0.5)"}})]}),i.jsx(Ot,{size:14,color:"#c62828",fill:"#c62828"})]})]})]}),i.jsxs("div",{style:{margin:"6px 10px 10px",background:"linear-gradient(135deg, #064e3b 0%, #166534 100%)",borderRadius:14,padding:"12px 14px",display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(me,{size:18,color:"white"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:12,fontWeight:800,color:"white"},children:"Protection Active"}),i.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.75)"},children:"We've got it covered 24/7"})]})]})]})})]})]})}function Sh({number:e,icon:t,title:n,description:r,badge:l,badgeIcon:s}){const[a,o]=w.useState(!1);return i.jsxs("div",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{background:"white",borderRadius:20,padding:"28px 22px 20px",flex:1,minWidth:0,position:"relative",boxShadow:a?"0 16px 48px rgba(22,101,52,0.14), 0 2px 8px rgba(0,0,0,0.07)":"0 4px 20px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.05)",transform:a?"translateY(-4px)":"translateY(0)",transition:"all 0.3s ease",border:a?"2px dashed #166534":"2px dashed #bbf7d0",display:"flex",flexDirection:"column"},children:[i.jsx("div",{style:{position:"absolute",top:-16,left:"50%",transform:"translateX(-50%)",width:34,height:34,borderRadius:"50%",background:"linear-gradient(135deg, #064e3b 0%, #166534 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:800,color:"white",boxShadow:"0 4px 12px rgba(6,78,59,0.35)",fontFamily:"Georgia, serif"},children:e}),i.jsx("div",{style:{width:62,height:62,borderRadius:"50%",background:"linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%)",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px auto 16px",border:"1.5px solid #86efac"},children:i.jsx(t,{size:26,color:"#166534",strokeWidth:1.8})}),i.jsx("h3",{style:{fontSize:16,fontWeight:800,color:"#064e3b",textAlign:"center",marginBottom:10,lineHeight:1.3,fontFamily:"Georgia, serif"},children:n}),i.jsx("p",{style:{fontSize:12.5,color:"#1e293b",textAlign:"center",lineHeight:1.65,flex:1,marginBottom:14,opacity:.75},children:r}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:"#dcfce7",borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:700,color:"#166534"},children:[i.jsx(s,{size:12,color:"#166534"}),l]})]})}function Tu(){const[e,t]=w.useState(!1);w.useEffect(()=>{setTimeout(()=>t(!0),80)},[]);const n=[{number:"1",icon:q1,title:"Order Your QR Tag",description:"Choose the right protection plan for your need and place your order. We deliver premium weatherproof QR tags to your doorstep within 3–5 business days.",badge:"Delivered across India",badgeIcon:Ss},{number:"2",icon:$i,title:"Activate & Personalise",description:"Scan your tag to activate it, then fill in your contact details, emergency info, and any important notes. Takes less than 3 minutes — no tech skills needed.",badge:"Set up in 3 minutes",badgeIcon:z1},{number:"3",icon:me,title:"Stay Protected 24/7",description:"Attach the tag to your pet, vehicle, or valuables and you're done. Anyone who finds your item scans the code — you get a WhatsApp alert instantly.",badge:"Always-on protection",badgeIcon:yn}],r=[{icon:Vi,label:"Trusted by",value:"10,000+ Families"},{icon:()=>i.jsx("span",{style:{fontSize:18},children:"🇮🇳"}),label:"Made in India",value:"Premium Quality"},{icon:Ss,label:"3–5 Day",value:"Fast Delivery"},{icon:Ui,label:"24/7",value:"WhatsApp Alerts"},{icon:dt,label:"Bank-level",value:"Data Security"}];return i.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(160deg, #f0fdf4 0%, #fafcfa 50%, #f0fdf4 100%)",fontFamily:"'Segoe UI', system-ui, sans-serif",overflow:"hidden"},children:[i.jsx("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"radial-gradient(circle, #86efac 1px, transparent 1px)",backgroundSize:"28px 28px",opacity:.35}}),i.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:1140,margin:"0 auto",padding:"52px 28px 48px"},children:[i.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:22,opacity:e?1:0,transform:e?"translateY(0)":"translateY(-12px)",transition:"all 0.5s ease"},children:i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"white",borderRadius:40,padding:"7px 18px",fontSize:11,fontWeight:700,color:"#166534",letterSpacing:"0.08em",textTransform:"uppercase",boxShadow:"0 2px 10px rgba(0,0,0,0.08)",border:"1px solid #86efac"},children:[i.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:"#166534",boxShadow:"0 0 0 3px rgba(22,101,52,0.2)"}}),"Simple Process"]})}),i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:48,flexWrap:"wrap"},children:[i.jsxs("div",{style:{flex:"1 1 520px",opacity:e?1:0,transform:e?"translateX(0)":"translateX(-24px)",transition:"all 0.6s ease 0.1s"},children:[i.jsxs("h1",{style:{fontSize:"clamp(32px, 5vw, 52px)",fontWeight:900,color:"#064e3b",lineHeight:1.15,marginBottom:14,fontFamily:"Georgia, 'Times New Roman', serif"},children:["Up and Running in",i.jsx("br",{}),i.jsx("span",{style:{color:"#166534"},children:"3 Easy Steps"})]}),i.jsxs("p",{style:{fontSize:15,color:"#1e293b",marginBottom:36,lineHeight:1.6,maxWidth:520,opacity:.7},children:["No complicated setup. No technical knowledge needed.",i.jsx("br",{}),"Just order, activate, and relax."]}),i.jsxs("div",{style:{position:"relative",display:"flex",gap:16,flexWrap:"wrap"},children:[i.jsx("div",{style:{position:"absolute",top:"50%",left:"calc(33.33% - 8px)",right:"calc(33.33% - 8px)",height:0,borderTop:"2px dashed #86efac",zIndex:0,pointerEvents:"none"}}),n.map((l,s)=>i.jsx(Sh,{...l},s))]}),i.jsxs("div",{style:{marginTop:28,background:"white",borderRadius:18,padding:"18px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,flexWrap:"wrap",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",border:"1px solid #dcfce7"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"#dcfce7",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(dt,{size:20,color:"#166534"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:14,fontWeight:800,color:"#064e3b"},children:"Peace of mind in 3 simple steps"}),i.jsx("div",{style:{fontSize:11.5,color:"#1e293b",opacity:.6},children:"Join thousands of smart families who trust our QR protection."})]})]}),i.jsxs("button",{style:{background:"linear-gradient(135deg, #064e3b 0%, #166534 100%)",color:"white",border:"none",borderRadius:12,padding:"13px 24px",fontSize:13.5,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(6,78,59,0.35)",whiteSpace:"nowrap",transition:"transform 0.15s ease"},onMouseEnter:l=>l.currentTarget.style.transform="scale(1.03)",onMouseLeave:l=>l.currentTarget.style.transform="scale(1)",children:["Start Protecting Now ",i.jsx(Qn,{size:16})]})]})]}),i.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center",paddingTop:20,opacity:e?1:0,transform:e?"translateX(0)":"translateX(24px)",transition:"all 0.6s ease 0.15s"},children:i.jsx(jh,{})})]}),i.jsx("div",{style:{marginTop:48,background:"white",borderRadius:20,padding:"18px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,boxShadow:"0 4px 20px rgba(0,0,0,0.07)",border:"1px solid #dcfce7",opacity:e?1:0,transform:e?"translateY(0)":"translateY(16px)",transition:"all 0.6s ease 0.35s"},children:r.map((l,s)=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,flex:"1 1 140px",justifyContent:"center",padding:"4px 0",borderRight:s<r.length-1?"1px solid #dcfce7":"none"},children:[i.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:"#dcfce7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:typeof l.icon=="function"&&l.icon.toString().includes("span")?i.jsx(l.icon,{}):i.jsx(l.icon,{size:16,color:"#166534"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:10,color:"#1e293b",opacity:.6},children:l.label}),i.jsx("div",{style:{fontSize:12.5,fontWeight:800,color:"#064e3b"},children:l.value})]})]},s))})]})]})}function Ch(){return i.jsxs("section",{style:{background:"linear-gradient(135deg,#064e3b 0%,#166534 50%,#14532d 100%)",padding:"90px 0",overflow:"hidden",position:"relative"},children:[i.jsx("div",{style:{position:"absolute",inset:0,opacity:.07,backgroundImage:"radial-gradient(circle, #ffffff 1px, transparent 1px)",backgroundSize:"28px 28px",pointerEvents:"none"}}),i.jsx("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1},children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center"},className:"nfc-grid",children:[i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsxs("div",{style:{position:"relative",width:320,height:320},children:[[1,2,3].map(e=>i.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",border:"1.5px solid rgba(220,252,231,0.3)",animation:`nfcPulse ${1.6+e*.5}s ease-out ${e*.4}s infinite`}},e)),i.jsx("div",{style:{position:"absolute",inset:"60px",background:"linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.08))",backdropFilter:"blur(12px)",borderRadius:"50%",border:"1.5px solid rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 60px rgba(220,252,231,0.2)"},children:i.jsxs("div",{style:{textAlign:"center"},children:[i.jsx(Xn,{size:52,color:"#dcfce7",strokeWidth:1.5}),i.jsx("div",{style:{color:"#dcfce7",fontWeight:800,fontSize:14,marginTop:8},children:"NFC Ready"})]})}),[{top:"5%",left:"50%",label:"Tap to Scan",icon:i.jsx(Xo,{size:16,color:"#166534"})},{top:"50%",left:"5%",label:"Instant Alert",icon:i.jsx(ct,{size:16,color:"#166534"})},{bottom:"8%",right:"10%",label:"No App Needed",icon:i.jsx(yn,{size:16,color:"#166534"})}].map(({top:e,left:t,bottom:n,right:r,label:l,icon:s})=>i.jsxs("div",{style:{position:"absolute",top:e,left:t,bottom:n,right:r,transform:"translate(-50%,-50%)",background:"#dcfce7",borderRadius:12,padding:"8px 14px",display:"flex",alignItems:"center",gap:8,fontSize:12,fontWeight:700,color:"#166534",boxShadow:"0 8px 24px rgba(6,78,59,0.3)",whiteSpace:"nowrap"},children:[s," ",l]},l))]})}),i.jsxs("div",{children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 18px",borderRadius:100,background:"rgba(220,252,231,0.15)",border:"1px solid rgba(220,252,231,0.3)",marginBottom:20},children:[i.jsx(Xn,{size:14,color:"#dcfce7"}),i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#dcfce7"},children:"🔥 New Feature"})]}),i.jsxs("h2",{style:{fontSize:"clamp(28px,3.5vw,42px)",fontWeight:900,color:"#f0fdf4",margin:"0 0 16px",lineHeight:1.1},children:["NFC Integration —",i.jsx("span",{style:{color:"#86efac"},children:" Just Tap & Go"})]}),i.jsx("p",{style:{color:"rgba(220,252,231,0.85)",fontSize:16,lineHeight:1.7,marginBottom:32},children:"Every ScanForSafe tag now includes an NFC chip. No QR scan needed — just tap any NFC phone and the owner's details appear instantly. Faster than ever."}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:32},children:[{icon:Xo,title:"Tap Any Phone",sub:"Works on all modern NFC phones"},{icon:yn,title:"Instant Access",sub:"Under 0.5 seconds response time"},{icon:me,title:"No App Needed",sub:"Browser-based — works anywhere"},{icon:$i,title:"Dual Mode",sub:"NFC tap + QR scan both work"}].map(({icon:e,title:t,sub:n})=>i.jsxs("div",{style:{background:"rgba(255,255,255,0.08)",backdropFilter:"blur(8px)",borderRadius:16,padding:"14px 16px",border:"1px solid rgba(255,255,255,0.1)"},children:[i.jsx(e,{size:20,color:"#86efac",style:{marginBottom:8}}),i.jsx("div",{style:{color:"#f0fdf4",fontWeight:700,fontSize:14,marginBottom:4},children:t}),i.jsx("div",{style:{color:"rgba(220,252,231,0.65)",fontSize:12},children:n})]},t))}),i.jsxs("div",{style:{background:"rgba(220,252,231,0.1)",border:"1px solid rgba(220,252,231,0.2)",borderRadius:16,padding:"16px 20px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"#dcfce7",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(Xn,{size:22,color:"#166534"})}),i.jsxs("div",{children:[i.jsx("div",{style:{color:"#f0fdf4",fontWeight:700,fontSize:14},children:"Available on all new tags"}),i.jsx("div",{style:{color:"rgba(220,252,231,0.7)",fontSize:12,marginTop:3},children:"Order a new ScanForSafe tag to get NFC + QR dual protection"})]})]})]})]})}),i.jsx("style",{children:`
        @keyframes nfcPulse {
          0%   { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @media (max-width: 768px) {
          .nfc-grid { grid-template-columns: 1fr !important; }
        }
      `})]})}function zh(){return i.jsxs("section",{style:{background:"linear-gradient(180deg,#f0fdf4 0%,#dcfce7 100%)",padding:"90px 0"},children:[i.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:52},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#fff",border:"1.5px solid #bbf7d0",marginBottom:16,boxShadow:"0 2px 8px rgba(22,101,52,0.08)"},children:[i.jsx(Zr,{size:14,color:"#166534",fill:"#166534"}),i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#166534"},children:"🆕 Senior Citizen Care"})]}),i.jsxs("h2",{style:{fontSize:"clamp(28px,4vw,44px)",fontWeight:900,color:"#064e3b",margin:"0 0 14px"},children:["Emergency Protection for",i.jsx("span",{style:{color:"#166534"},children:" Senior Citizens"})]}),i.jsx("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:540,margin:"0 auto",lineHeight:1.7},children:"One scan gives responders instant access to medical details, blood group, and emergency contacts — no smartphone needed"})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center"},className:"senior-grid",children:[i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsxs("div",{style:{background:"#fff",borderRadius:28,padding:28,maxWidth:360,width:"100%",boxShadow:"0 20px 60px rgba(6,78,59,0.12)",border:"1.5px solid #bbf7d0"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:24,paddingBottom:20,borderBottom:"1px solid #f0fdf4"},children:[i.jsx("div",{style:{width:60,height:60,borderRadius:"50%",background:"linear-gradient(135deg,#166534,#064e3b)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 20px rgba(22,101,52,0.25)"},children:i.jsx(Cs,{size:28,color:"#dcfce7"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:800,fontSize:18,color:"#064e3b"},children:"Ramesh Nair"}),i.jsx("div",{style:{fontSize:13,color:"#6b7280",marginTop:2},children:"Age: 72 • Nellore, AP"}),i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,marginTop:4,background:"#dcfce7",borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:700,color:"#166534"},children:[i.jsx(me,{size:10})," Protected"]})]})]}),i.jsxs("div",{style:{marginBottom:18},children:[i.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:10},children:"Medical Information"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[{label:"Blood Group",value:"B+",icon:i.jsx(P1,{size:13,color:"#ef4444"})},{label:"Condition",value:"Diabetic",icon:i.jsx(Zr,{size:13,color:"#f97316"})},{label:"Allergies",value:"Penicillin",icon:i.jsx(Go,{size:13,color:"#eab308"})},{label:"Doctor",value:"Dr. Reddy",icon:i.jsx(Cs,{size:13,color:"#166534"})}].map(({label:e,value:t,icon:n})=>i.jsxs("div",{style:{background:"#f9fafb",borderRadius:10,padding:"10px 12px",border:"1px solid #f0fdf4"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:4},children:[n,i.jsx("span",{style:{fontSize:10,color:"#9ca3af",fontWeight:600},children:e})]}),i.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#1e293b"},children:t})]},e))})]}),i.jsxs("div",{style:{marginBottom:18},children:[i.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:10},children:"Emergency Contacts"}),[{name:"Suresh Nair (Son)",phone:"+91 98765XXXXX"},{name:"Lakshmi Nair (Daughter)",phone:"+91 87654XXXXX"}].map(e=>i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 12px",background:"#f0fdf4",borderRadius:10,marginBottom:6},children:[i.jsx("span",{style:{fontSize:13,fontWeight:600,color:"#1e293b"},children:e.name}),i.jsxs("button",{style:{padding:"4px 12px",borderRadius:8,background:"#166534",color:"#fff",fontSize:11,fontWeight:700,border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[i.jsx(dn,{size:11})," Call"]})]},e.name))]}),i.jsxs("div",{style:{display:"flex",gap:8},children:[i.jsxs("div",{style:{flex:1,background:"linear-gradient(135deg,#064e3b,#166534)",borderRadius:12,padding:"12px 0",display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[i.jsx(Xn,{size:14,color:"#dcfce7"}),i.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#dcfce7"},children:"NFC Tap"})]}),i.jsxs("div",{style:{flex:1,background:"#f0fdf4",borderRadius:12,padding:"12px 0",display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid #bbf7d0"},children:[i.jsx($i,{size:14,color:"#166534"}),i.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#166534"},children:"QR Scan"})]})]})]})}),i.jsx("div",{children:i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:18},children:[{icon:Zr,color:"#ef4444",bg:"#fef2f2",title:"Medical Profile",desc:"Blood group, conditions, allergies, medications, and doctor details — all accessible with one scan. Critical in emergencies."},{icon:Go,color:"#f97316",bg:"#fff7ed",title:"Emergency Alert System",desc:"Tap or scan triggers an instant notification to all registered family members, with GPS location of the senior."},{icon:Xn,color:"#166534",bg:"#f0fdf4",title:"NFC + QR Dual Support",desc:"Works with both NFC tap and QR code scan. No app required for responders — opens in any browser instantly."},{icon:me,color:"#166534",bg:"#dcfce7",title:"Wristband & Wallet Card",desc:"Available as a waterproof wristband or wallet-size card. Comfortable for daily use by senior citizens."}].map(({icon:e,color:t,bg:n,title:r,desc:l})=>i.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start",background:"#fff",borderRadius:18,padding:"18px 20px",border:"1px solid #dcfce7",boxShadow:"0 2px 12px rgba(22,101,52,0.07)"},children:[i.jsx("div",{style:{width:44,height:44,borderRadius:12,background:n,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(e,{size:20,color:t})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:800,fontSize:15,color:"#064e3b",marginBottom:5},children:r}),i.jsx("div",{style:{fontSize:14,color:"#4b7a62",lineHeight:1.6},children:l})]})]},r))})})]})]}),i.jsx("style",{children:`
        @media (max-width: 768px) { .senior-grid { grid-template-columns: 1fr !important; } }
      `})]})}function Nh(){return i.jsx("section",{style:{background:"#ffffff",padding:"90px 0"},children:i.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:52},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#dcfce7",border:"1px solid #bbf7d0",marginBottom:16},children:[i.jsx(Si,{size:14,color:"#166534"}),i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#166534"},children:"Vehicle Protection"})]}),i.jsx("h2",{style:{fontSize:"clamp(26px,4vw,42px)",fontWeight:900,color:"#064e3b",margin:"0 0 12px"},children:"Vehicle Details & Protection"}),i.jsx("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:500,margin:"0 auto",lineHeight:1.7},children:"Add your vehicle info once. Let the QR sticker do the rest — 24/7 protection, instant alerts, and GPS tracking"})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px,1fr))",gap:20},children:[{icon:Si,title:"Vehicle Info",color:"#166534",bg:"#dcfce7",items:["Registration Number","Make & Model","Color & Year","Insurance Details"]},{icon:Ot,title:"GPS Tracking",color:"#0891b2",bg:"#ecfeff",items:["Live scan location","Google Maps link","Scan history log","Last seen timestamp"]},{icon:ct,title:"Alert System",color:"#f97316",bg:"#fff7ed",items:["Instant app notification","WhatsApp for emergencies","SMS fallback alert","5 emergency contacts"]},{icon:me,title:"Security",color:"#166534",bg:"#f0fdf4",items:["Tamper-evident sticker","Privacy controls","Anti-theft mode","QR + NFC dual layer"]}].map(({icon:e,title:t,color:n,bg:r,items:l})=>i.jsxs("div",{style:{background:"#fafafa",borderRadius:20,padding:"22px 22px 24px",border:"1px solid #e5e7eb",transition:"all 0.25s"},onMouseEnter:s=>{s.currentTarget.style.transform="translateY(-4px)",s.currentTarget.style.boxShadow="0 16px 40px rgba(22,101,52,0.1)",s.currentTarget.style.borderColor="#bbf7d0"},onMouseLeave:s=>{s.currentTarget.style.transform="",s.currentTarget.style.boxShadow="",s.currentTarget.style.borderColor="#e5e7eb"},children:[i.jsx("div",{style:{width:46,height:46,borderRadius:14,background:r,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14},children:i.jsx(e,{size:22,color:n})}),i.jsx("h3",{style:{margin:"0 0 12px",fontSize:17,fontWeight:800,color:"#064e3b"},children:t}),i.jsx("ul",{style:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:8},children:l.map(s=>i.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#374151"},children:[i.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:n,flexShrink:0}}),s]},s))})]},t))}),i.jsxs("div",{style:{marginTop:40,background:"linear-gradient(135deg,#064e3b,#166534)",borderRadius:24,padding:"32px 36px",display:"flex",alignItems:"center",gap:32,flexWrap:"wrap"},children:[i.jsxs("div",{style:{flex:1,minWidth:200},children:[i.jsx("div",{style:{color:"#86efac",fontWeight:800,fontSize:13,marginBottom:8,letterSpacing:"0.05em"},children:"📏 OFFICIAL QR SIZE"}),i.jsx("h3",{style:{color:"#f0fdf4",fontWeight:900,fontSize:"clamp(22px,3vw,34px)",margin:"0 0 8px"},children:"3.5 cm × 3.5 cm"}),i.jsx("p",{style:{color:"rgba(220,252,231,0.8)",fontSize:14,margin:0,lineHeight:1.6},children:"Optimized for bike fuel tanks and bag straps. Weather-proof, UV resistant, scan-able from 30cm away"})]}),i.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:["🏍️ Bike Sticker","🎒 Bag Tag","🚗 Car Sticker"].map(e=>i.jsx("div",{style:{background:"rgba(220,252,231,0.15)",border:"1px solid rgba(220,252,231,0.3)",borderRadius:12,padding:"12px 18px",color:"#dcfce7",fontSize:13,fontWeight:700},children:e},e))})]})]})})}function Eh(){return i.jsxs(i.Fragment,{children:[i.jsx(vh,{}),i.jsx(bh,{}),i.jsx(Tu,{}),i.jsx(Nh,{}),i.jsx(zh,{}),i.jsx(Ch,{})]})}const Ph=[{icon:dn,label:"Phone",value:"+91 XXXXX XXXXX",href:"tel:+91XXXXXXXXXX",color:"#0057b8",bg:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"#bfdbfe",emoji:"📞",desc:"Mon–Sat, 9am to 7pm"},{icon:Ui,label:"WhatsApp",value:"Chat with us instantly",href:"https://wa.me/91XXXXXXXXXX",color:"#16a34a",bg:"linear-gradient(135deg,#f0fdf4,#dcfce7)",border:"#bbf7d0",emoji:"💬",desc:"Fastest — reply under 10 min"},{icon:Lu,label:"Email",value:"hello@scanforsafe.in",href:"mailto:hello@scanforsafe.in",color:"#7c3aed",bg:"linear-gradient(135deg,#f5f3ff,#ede9fe)",border:"#ddd6fe",emoji:"✉️",desc:"Reply within 2 business hours"},{icon:Ot,label:"Office",value:"Your City, State – 000000",href:null,color:"#e11d48",bg:"linear-gradient(135deg,#fff1f2,#ffe4e6)",border:"#fecdd3",emoji:"📍",desc:"Headquarters, India"}];function Sl(e=.12){const t=w.useRef(null),[n,r]=w.useState(!1);return w.useEffect(()=>{const l=new IntersectionObserver(([s])=>{s.isIntersecting&&r(!0)},{threshold:e});return t.current&&l.observe(t.current),()=>l.disconnect()},[e]),[t,n]}function Rh(e,t=1800,n=!1){const[r,l]=w.useState(0);return w.useEffect(()=>{if(!n)return;let s=null;const a=o=>{s||(s=o);const c=Math.min((o-s)/t,1),d=1-Math.pow(1-c,3);l(Math.floor(d*e)),c<1&&requestAnimationFrame(a)};requestAnimationFrame(a)},[n,e,t]),r}function Cl({num:e,suffix:t,label:n,active:r,delay:l}){const s=Rh(e,1600,r);return i.jsxs("div",{style:{textAlign:"center",opacity:r?1:0,transform:r?"translateY(0)":"translateY(20px)",transition:`opacity .6s ease ${l}s, transform .6s ease ${l}s`},children:[i.jsxs("div",{style:{fontFamily:"'Clash Display', 'Cabinet Grotesk', sans-serif",fontSize:28,fontWeight:800,color:"#fff",lineHeight:1,letterSpacing:"-0.04em"},children:[s,t]}),i.jsx("div",{style:{fontSize:11,color:"rgba(186,230,253,0.75)",fontWeight:600,marginTop:4,letterSpacing:".06em",textTransform:"uppercase"},children:n})]})}function Ih(){const[e,t]=w.useState({name:"",email:"",phone:"",message:""}),[n,r]=w.useState(!1),[l,s]=w.useState(!1),[a,o]=w.useState(!1),[c,d]=Sl(),[x,h]=Sl(),[g,m]=Sl(.3);w.useEffect(()=>{const j=setTimeout(()=>o(!0),80);return()=>clearTimeout(j)},[]);const v=j=>t({...e,[j.target.name]:j.target.value}),b=j=>{j.preventDefault(),s(!0),setTimeout(()=>{s(!1),r(!0)},1600)};return i.jsxs("div",{style:{fontFamily:"'Instrument Sans', 'Cabin', sans-serif",overflowX:"hidden"},children:[i.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),i.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Fira+Code:wght@400;500&display=swap",rel:"stylesheet"}),i.jsx("style",{children:`
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
          color: #0f172a; background: #f8fafc; outline: none;
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
      `}),i.jsxs("section",{style:{position:"relative",overflow:"hidden",minHeight:520,paddingTop:110,paddingBottom:80,background:"linear-gradient(150deg, #020c1b 0%, #0a1f44 40%, #003d80 80%, #0057b8 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:[i.jsx("div",{style:{position:"absolute",width:560,height:560,borderRadius:"50%",background:"radial-gradient(circle, rgba(22,163,74,0.18) 0%, transparent 65%)",top:-180,right:-120,animation:"orbMove1 14s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle, rgba(0,87,184,0.30) 0%, transparent 65%)",bottom:-160,left:-100,animation:"orbMove2 18s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",backgroundSize:"32px 32px"}}),i.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:i.jsx("div",{style:{position:"absolute",left:0,right:0,height:3,background:"linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.0) 15%, rgba(74,222,128,0.9) 50%, rgba(74,222,128,0.0) 85%, transparent 100%)",animation:"scanBeam 4s ease-in-out infinite",filter:"blur(1px)"}})}),i.jsx("div",{style:{position:"absolute",top:70,left:"7%",width:64,height:64,border:"2px solid rgba(74,222,128,0.25)",borderRadius:16,transform:"rotate(15deg)",animation:"floatYSlow 6s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",bottom:80,right:"8%",width:44,height:44,border:"2px solid rgba(99,179,237,0.2)",borderRadius:"50%",animation:"floatY 5s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",top:120,right:"18%",width:28,height:28,background:"rgba(74,222,128,0.12)",borderRadius:8,transform:"rotate(30deg)",animation:"floatYSlow 7s ease-in-out .5s infinite",pointerEvents:"none"}}),i.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",padding:"0 24px",maxWidth:680},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:9,background:"rgba(22,163,74,0.14)",border:"1.5px solid rgba(74,222,128,0.35)",borderRadius:99,padding:"8px 20px",marginBottom:28,opacity:a?1:0,transform:a?"translateY(0) scale(1)":"translateY(-16px) scale(.9)",transition:"opacity .7s cubic-bezier(.34,1.3,.64,1), transform .7s cubic-bezier(.34,1.3,.64,1)",fontFamily:"'Fira Code', monospace"},children:[i.jsxs("span",{style:{position:"relative",display:"inline-block",width:8,height:8},children:[i.jsx("span",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"#4ade80",animation:"ripple 1.6s ease-out infinite"}}),i.jsx("span",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"#4ade80"}})]}),i.jsx("span",{style:{fontSize:11,fontWeight:500,color:"#86efac",letterSpacing:".1em"},children:"team.online • avg_reply < 10min"})]}),i.jsxs("h1",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:"clamp(2.4rem, 5.5vw, 4rem)",fontWeight:800,color:"#fff",lineHeight:1.08,letterSpacing:"-0.04em",margin:"0 0 22px",opacity:a?1:0,transform:a?"translateY(0) skewY(0deg)":"translateY(40px) skewY(2deg)",transition:"opacity .75s ease .12s, transform .75s cubic-bezier(.34,1.3,.64,1) .12s"},children:["Talk to a",i.jsx("br",{}),i.jsx("span",{style:{background:"linear-gradient(90deg, #4ade80 0%, #86efac 50%, #4ade80 100%)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:a?"glowPulse 3s ease-in-out infinite":"none",display:"inline-block"},children:"Real Human"})]}),i.jsx("p",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:16.5,color:"rgba(186,230,253,0.85)",lineHeight:1.75,maxWidth:500,margin:"0 auto 40px",opacity:a?1:0,transform:a?"translateY(0)":"translateY(24px)",transition:"opacity .7s ease .26s, transform .7s ease .26s"},children:"Questions about your QR tag, bulk orders, or just need help with setup? We're right here — real people, real fast replies."}),i.jsxs("div",{ref:g,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:48,paddingTop:28,borderTop:"1px solid rgba(255,255,255,0.08)"},children:[i.jsx(Cl,{num:10,suffix:" min",label:"WhatsApp reply",active:m,delay:0}),i.jsx("div",{style:{width:1,height:32,background:"rgba(255,255,255,0.1)"}}),i.jsx(Cl,{num:2,suffix:" hrs",label:"Email response",active:m,delay:.15}),i.jsx("div",{style:{width:1,height:32,background:"rgba(255,255,255,0.1)"}}),i.jsx(Cl,{num:1e4,suffix:"+",label:"Happy users",active:m,delay:.3})]})]}),i.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,pointerEvents:"none"},children:i.jsx("svg",{viewBox:"0 0 1440 72",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:i.jsx("path",{d:"M0,48 C240,80 480,16 720,40 C960,64 1200,24 1440,48 L1440,72 L0,72 Z",fill:"#f1f5f9"})})})]}),i.jsx("section",{style:{background:"#f1f5f9",padding:"68px 24px 88px"},children:i.jsx("div",{style:{maxWidth:1100,margin:"0 auto"},children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.65fr",gap:36,alignItems:"start"},children:[i.jsxs("div",{ref:x,children:[i.jsxs("div",{style:{opacity:h?1:0,transform:h?"translateX(0)":"translateX(-24px)",transition:"opacity .55s ease, transform .55s ease",marginBottom:28},children:[i.jsxs("span",{style:{fontFamily:"'Fira Code', monospace",fontSize:10,fontWeight:500,letterSpacing:".18em",textTransform:"uppercase",color:"#0057b8",display:"flex",alignItems:"center",gap:8,marginBottom:10},children:[i.jsx("span",{style:{width:20,height:1.5,background:"#0057b8",display:"inline-block"}}),"contact channels"]}),i.jsxs("h2",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:26,fontWeight:800,color:"#0f172a",letterSpacing:"-0.03em",margin:"0 0 10px"},children:["Reach Us",i.jsx("br",{}),"Your Way"]}),i.jsx("p",{style:{fontSize:14,color:"#64748b",lineHeight:1.75,fontWeight:400},children:"WhatsApp gets you the fastest reply. For detailed queries, email works great too."})]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:Ph.map(({icon:j,label:f,value:u,href:p,color:y,bg:S,border:E,emoji:P,desc:R},A)=>i.jsxs("div",{className:"cf-info-card",style:{background:S,borderColor:E,opacity:h?1:0,transform:h?"translateX(0)":"translateX(-28px)",transition:`opacity .5s ease ${A*.1+.1}s, transform .5s cubic-bezier(.34,1.3,.64,1) ${A*.1+.1}s, box-shadow .3s ease, transform .3s ease`},children:[i.jsx("div",{style:{width:48,height:48,borderRadius:14,background:"rgba(255,255,255,0.7)",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,boxShadow:"0 2px 8px rgba(0,0,0,0.06)",border:`1.5px solid ${E}`},children:P}),i.jsxs("div",{style:{flex:1},children:[i.jsxs("div",{style:{fontFamily:"'Fira Code', monospace",fontSize:9.5,fontWeight:500,letterSpacing:".14em",textTransform:"uppercase",color:y,marginBottom:3,display:"flex",alignItems:"center",gap:5},children:[i.jsx("span",{style:{width:14,height:1.5,background:y,display:"inline-block"}}),f]}),p?i.jsx("a",{href:p,style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:14,fontWeight:700,color:"#0f172a",textDecoration:"none",display:"block",marginBottom:3,transition:"color .2s"},onMouseEnter:L=>L.target.style.color=y,onMouseLeave:L=>L.target.style.color="#0f172a",children:u}):i.jsx("div",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:14,fontWeight:700,color:"#0f172a",marginBottom:3},children:u}),i.jsx("div",{style:{fontSize:11.5,color:"#94a3b8",fontWeight:400},children:R})]})]},f))}),i.jsxs("div",{style:{marginTop:18,padding:"14px 18px",borderRadius:14,background:"linear-gradient(135deg,#f0fdf4,#dcfce7)",border:"1.5px solid #bbf7d0",display:"flex",alignItems:"center",gap:10,opacity:h?1:0,transform:h?"translateY(0)":"translateY(12px)",transition:"opacity .5s ease .55s, transform .5s ease .55s"},children:[i.jsxs("div",{style:{position:"relative",flexShrink:0},children:[i.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"#16a34a"}}),i.jsx("div",{style:{position:"absolute",inset:-3,borderRadius:"50%",border:"1.5px solid rgba(22,163,74,0.3)",animation:"ripple 2s ease-out infinite"}})]}),i.jsx("span",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:12.5,fontWeight:600,color:"#15803d"},children:"We always reply within 2 business hours — guaranteed."})]})]}),i.jsx("div",{ref:c,style:{background:"white",borderRadius:26,padding:"40px 38px",boxShadow:"0 24px 64px rgba(0,40,120,0.10), 0 4px 16px rgba(0,40,120,0.05)",border:"1.5px solid #e8edf3",opacity:d?1:0,transform:d?"translateY(0)":"translateY(36px)",transition:"opacity .65s ease .1s, transform .65s cubic-bezier(.34,1.3,.64,1) .1s"},children:n?i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"44px 0",textAlign:"center"},children:[i.jsx("div",{style:{width:88,height:88,borderRadius:"50%",background:"linear-gradient(135deg,#f0fdf4,#dcfce7)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:22,border:"2px solid #bbf7d0",animation:"checkPop .65s cubic-bezier(.34,1.3,.64,1) both",boxShadow:"0 0 0 8px rgba(22,163,74,0.08)"},children:i.jsx(ks,{style:{width:40,height:40,color:"#16a34a"}})}),i.jsx("h3",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:28,fontWeight:800,color:"#0f172a",letterSpacing:"-0.03em",marginBottom:12},children:"Message Sent! 🎉"}),i.jsx("p",{style:{fontSize:14.5,color:"#64748b",lineHeight:1.8,maxWidth:340},children:"We've got your message and will reply within 2 hours. Check your inbox for a confirmation shortly."}),i.jsxs("div",{style:{marginTop:24,padding:"12px 28px",borderRadius:12,background:"linear-gradient(135deg,#f0fdf4,#dcfce7)",border:"1.5px solid #bbf7d0",fontFamily:"'Instrument Sans', sans-serif",fontSize:13.5,fontWeight:700,color:"#15803d"},children:["Thanks, ",e.name||"friend","! We'll be in touch 👋"]})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{marginBottom:30},children:[i.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:99,padding:"5px 14px",marginBottom:14},children:i.jsx("span",{style:{fontFamily:"'Fira Code', monospace",fontSize:10,fontWeight:500,color:"#0057b8",letterSpacing:".1em"},children:">_ send_message.tsx"})}),i.jsxs("h2",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:25,fontWeight:800,color:"#0f172a",letterSpacing:"-0.03em",margin:0},children:["We'd Love to Hear",i.jsx("br",{}),"From You"]}),i.jsx("div",{style:{height:3,borderRadius:99,marginTop:10,background:"linear-gradient(90deg, #0057b8, #16a34a)",animation:d?"lineGrow .8s cubic-bezier(.34,1.3,.64,1) .4s both":"none"}})]}),i.jsxs("form",{onSubmit:b,style:{display:"flex",flexDirection:"column",gap:18},children:[i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Full Name *"}),i.jsx("input",{type:"text",name:"name",required:!0,value:e.name,onChange:v,placeholder:"Rahul Sharma",className:"cf-input"})]}),i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Phone"}),i.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:v,placeholder:"+91 XXXXX XXXXX",className:"cf-input"})]})]}),i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Email Address *"}),i.jsx("input",{type:"email",name:"email",required:!0,value:e.email,onChange:v,placeholder:"rahul@example.com",className:"cf-input"})]}),i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Message *"}),i.jsx("textarea",{name:"message",required:!0,rows:5,value:e.message,onChange:v,placeholder:"Tell us how we can help — setup, bulk orders, feedback...",className:"cf-input",style:{resize:"none"}})]}),i.jsx("button",{type:"submit",disabled:l,className:"cf-submit",children:l?i.jsxs(i.Fragment,{children:[i.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",style:{animation:"spin 1s linear infinite",flexShrink:0},children:i.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),"Sending your message..."]}):i.jsxs(i.Fragment,{children:[i.jsx(za,{style:{width:16,height:16,flexShrink:0}}),"Send Message"]})}),i.jsx("p",{style:{textAlign:"center",fontFamily:"'Fira Code', monospace",fontSize:10.5,color:"#94a3b8",fontWeight:400,letterSpacing:".04em"},children:"🔒 encrypted • never shared • gdpr safe"})]})]})})]})})})]})}function Lh(){return i.jsxs("div",{className:"pt-20 min-h-screen bg-light-bg",children:[i.jsxs("div",{className:"hero-gradient py-16 text-white text-center",children:[i.jsx("h1",{className:"font-display font-extrabold text-4xl mb-4",children:"Privacy Policy"}),i.jsx("p",{className:"text-blue-200",children:"Last updated: January 2025"})]}),i.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:i.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8",children:[{title:"1. Information We Collect",content:"We collect information you provide directly to us when registering your QR tag, such as your name, phone number, email address, emergency contact details, and any additional information you choose to include in your QR profile. We also collect scan data including time, date, and approximate GPS location whenever your QR tag is scanned."},{title:"2. How We Use Your Information",content:"Your personal information is used solely to operate the ScanForSafe service — enabling finders to contact you and sending you real-time notifications. We do not sell, rent, or share your personal data with third parties for marketing purposes."},{title:"3. Data Shared When QR is Scanned",content:"When someone scans your QR code, they see only the information you have chosen to make visible in your profile settings. Your full phone number, email, and private details are protected by default — finders interact through our secure relay system."},{title:"4. Data Security",content:"We use industry-standard encryption (SSL/TLS) to protect your data in transit and at rest. Access to personal data is restricted to authorised team members only, and we conduct regular security audits of our systems."},{title:"5. Data Retention",content:"We retain your personal data for as long as your account is active. You may request deletion of your account and associated data at any time by contacting us at hello@scanforsafe.in. Scan logs are retained for 12 months for your reference."},{title:"6. Your Rights",content:"You have the right to access, correct, or delete your personal information at any time through your account dashboard or by contacting our support team. You may also opt out of non-essential communications at any time."},{title:"7. Contact Us",content:"If you have questions about this Privacy Policy or how we handle your data, please contact us at hello@scanforsafe.in or reach us on WhatsApp."}].map(({title:e,content:t})=>i.jsxs("div",{children:[i.jsx("h2",{className:"font-display font-bold text-lg text-dark-blue mb-2",children:e}),i.jsx("p",{className:"text-slate-600 text-sm leading-relaxed",children:t})]},e))})})]})}function Mh(){return i.jsxs("div",{className:"pt-20 min-h-screen bg-light-bg",children:[i.jsxs("div",{className:"hero-gradient py-16 text-white text-center",children:[i.jsx("h1",{className:"font-display font-extrabold text-4xl mb-4",children:"Terms & Conditions"}),i.jsx("p",{className:"text-blue-200",children:"Last updated: January 2025"})]}),i.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:i.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8",children:[{title:"1. Acceptance of Terms",content:"By purchasing and using any ScanForSafe product or service, you agree to these Terms and Conditions. If you do not agree to these terms, please do not use our products or services."},{title:"2. Product Usage",content:"ScanForSafe QR tags are intended for legitimate personal use — protecting your own pets, vehicles, and personal belongings. You must not use our products to track individuals without their knowledge or consent, or for any unlawful purpose."},{title:"3. Account Responsibility",content:"You are responsible for maintaining the accuracy of your profile information and keeping your account credentials secure. You are responsible for all activity that occurs under your account and must notify us immediately of any unauthorised access."},{title:"4. Service Availability",content:"While we strive to maintain 24/7 availability, ScanForSafe does not guarantee uninterrupted service. Planned maintenance, unforeseen technical issues, or force majeure events may temporarily affect service availability."},{title:"5. Refund Policy",content:"We offer a 30-day satisfaction guarantee on all physical QR tag products. If you are unsatisfied with your purchase, contact us within 30 days of delivery for a full refund. Digital activation services are non-refundable once activated."},{title:"6. Limitation of Liability",content:"ScanForSafe provides tools to improve the chances of item recovery and emergency contact. We do not guarantee recovery of any lost item or animal, and shall not be liable for any direct, indirect, or consequential loss arising from use or inability to use our service."},{title:"7. Changes to Terms",content:"We reserve the right to update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms. We will notify registered users of material changes by email."},{title:"8. Contact",content:"For any questions regarding these Terms and Conditions, please contact us at hello@scanforsafe.in."}].map(({title:e,content:t})=>i.jsxs("div",{children:[i.jsx("h2",{className:"font-display font-bold text-lg text-dark-blue mb-2",children:e}),i.jsx("p",{className:"text-slate-600 text-sm leading-relaxed",children:t})]},e))})})]})}function Th(){return i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"fixed",bottom:"100px",right:"22px",width:"70px",height:"70px",borderRadius:"9999px",background:"rgba(37,211,102,0.18)",filter:"blur(18px)",zIndex:40}}),i.jsx("div",{style:{position:"fixed",bottom:"22px",right:"22px",width:"70px",height:"70px",borderRadius:"9999px",background:"rgba(37,99,235,0.18)",filter:"blur(18px)",zIndex:40}}),i.jsxs("a",{href:"https://wa.me/919999999999",target:"_blank",rel:"noreferrer","aria-label":"Chat on WhatsApp",style:{position:"fixed",bottom:"96px",right:"24px",zIndex:50,width:"62px",height:"62px",borderRadius:"9999px",background:"linear-gradient(135deg, #25D366 0%, #1ebe5d 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 30px rgba(37,211,102,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",textDecoration:"none",transition:"all 0.35s ease",overflow:"hidden",backdropFilter:"blur(10px)",animation:"float 3s ease-in-out infinite"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-4px) scale(1.08)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0) scale(1)"},children:[i.jsx("div",{style:{position:"absolute",width:"120%",height:"40%",background:"linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)",transform:"rotate(-25deg)",top:"-20%",left:"-120%",animation:"shine 3s infinite"}}),i.jsx(V1,{size:26,color:"white",strokeWidth:2.5}),i.jsx("span",{style:{position:"absolute",top:"8px",right:"8px",width:"12px",height:"12px",borderRadius:"9999px",background:"#fff",border:"2px solid #25D366"}})]}),i.jsxs(De,{to:"/contact","aria-label":"Send us a message",style:{position:"fixed",bottom:"24px",right:"24px",zIndex:50,width:"62px",height:"62px",borderRadius:"9999px",background:"linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 30px rgba(37,99,235,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",textDecoration:"none",transition:"all 0.35s ease",overflow:"hidden",backdropFilter:"blur(10px)",animation:"float 3s ease-in-out infinite"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-4px) scale(1.08)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0) scale(1)"},children:[i.jsx("div",{style:{position:"absolute",width:"120%",height:"40%",background:"linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)",transform:"rotate(-25deg)",top:"-20%",left:"-120%",animation:"shine 3s infinite"}}),i.jsx(Ui,{size:28,color:"white",strokeWidth:2.5}),i.jsx("div",{style:{position:"absolute",top:"7px",right:"7px",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(Na,{size:14,color:"#fff"})})]}),i.jsxs("div",{style:{position:"fixed",bottom:"180px",right:"18px",zIndex:45,background:"rgba(15,23,42,0.92)",color:"#fff",padding:"10px 14px",borderRadius:"9999px",display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",fontWeight:600,boxShadow:"0 8px 24px rgba(0,0,0,0.18)",backdropFilter:"blur(10px)"},children:["Need Help?",i.jsx(w1,{size:16})]}),i.jsx("style",{children:`
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
        `})]})}const Fh=[{id:"whatsapp",icon:i.jsxs("svg",{viewBox:"0 0 32 32",width:"28",height:"28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M16 2C8.268 2 2 8.268 2 16c0 2.478.649 4.8 1.785 6.813L2 30l7.38-1.763A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2z",fill:"#25D366"}),i.jsx("path",{d:"M22.003 19.178c-.306-.153-1.81-.893-2.09-.995-.28-.102-.484-.153-.688.153-.204.306-.79.995-.969 1.2-.178.204-.357.23-.663.077-.306-.154-1.292-.476-2.46-1.517-.91-.811-1.524-1.813-1.702-2.119-.178-.306-.019-.471.134-.623.137-.136.306-.357.459-.536.153-.178.204-.306.306-.51.102-.204.051-.383-.025-.536-.077-.153-.688-1.66-.942-2.272-.248-.597-.5-.516-.688-.526l-.587-.01c-.204 0-.536.077-.816.383-.28.306-1.07 1.046-1.07 2.552 0 1.506 1.096 2.961 1.249 3.165.153.204 2.156 3.292 5.224 4.617.73.315 1.3.503 1.744.644.733.233 1.4.2 1.927.121.588-.088 1.81-.74 2.065-1.455.255-.714.255-1.326.178-1.454-.076-.128-.28-.204-.586-.357z",fill:"#fff"})]}),iconBg:"#E8F8EF",accent:"#25D366",accentDark:"#16a34a",dotColor:"#bbf7d0",cardBg:"linear-gradient(145deg,#ffffff 55%,#f0fdf4 100%)",activeBg:"linear-gradient(145deg,#f0fdf4 0%,#dcfce7 100%)",tag:"Most Loved",title:"WhatsApp Notifications",desc:"Get instant WhatsApp alerts the moment anyone scans your QR tag — with GPS location and a direct call option.",pills:["Instant Alert","GPS Included","No App Needed"]},{id:"call",icon:i.jsx("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#4f46e5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11 19.79 19.79 0 0 1 1 2.38 2 2 0 0 1 2.98.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.1 15.1z"})}),iconBg:"#EEF2FF",accent:"#4f46e5",accentDark:"#3730a3",dotColor:"#c7d2fe",cardBg:"linear-gradient(145deg,#ffffff 55%,#eef2ff 100%)",activeBg:"linear-gradient(145deg,#eef2ff 0%,#e0e7ff 100%)",tag:"Zero Friction",title:"One-Touch Call Connect",desc:"Finders call you in one tap — no app, no sign-up. Works even from a basic feature phone.",pills:["One Tap","No Sign-up","Any Phone"]},{id:"contacts",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#7c3aed",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),i.jsx("circle",{cx:"9",cy:"7",r:"4"}),i.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),i.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),iconBg:"#F3F0FF",accent:"#7c3aed",accentDark:"#5b21b6",dotColor:"#ddd6fe",cardBg:"linear-gradient(145deg,#ffffff 55%,#f5f3ff 100%)",activeBg:"linear-gradient(145deg,#f5f3ff 0%,#ede9fe 100%)",tag:"Family Ready",title:"Up to 5 Emergency Contacts",desc:"Add family, friends or your vet. If the first contact misses it, the next is notified automatically.",pills:["5 Contacts","Auto Fallback","5-Min Retry"]},{id:"gps",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#16a34a",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),i.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),iconBg:"#E8F8EF",accent:"#16a34a",accentDark:"#14532d",dotColor:"#bbf7d0",cardBg:"linear-gradient(145deg,#ffffff 55%,#f0fdf4 100%)",activeBg:"linear-gradient(145deg,#f0fdf4 0%,#dcfce7 100%)",tag:"Smart",title:"GPS Location on Scan",desc:"Every scan captures precise GPS coordinates and sends you a live Maps link to find your item fast.",pills:["Live GPS","Maps Link","Real-Time"]},{id:"setup",icon:i.jsx("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#d97706",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),iconBg:"#FFFBEB",accent:"#f59e0b",accentDark:"#b45309",dotColor:"#fde68a",cardBg:"linear-gradient(145deg,#ffffff 55%,#fffbeb 100%)",activeBg:"linear-gradient(145deg,#fffbeb 0%,#fef3c7 100%)",tag:"3 Minutes",title:"Instant Activation",desc:"Peel, stick and you are protected. Register your tag in under 3 minutes — no technical knowledge needed.",pills:["Under 3 Min","Guided Setup","Instant Live"]},{id:"privacy",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#e11d48",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),i.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),iconBg:"#FFF1F2",accent:"#f43f5e",accentDark:"#9f1239",dotColor:"#fecdd3",cardBg:"linear-gradient(145deg,#ffffff 55%,#fff1f2 100%)",activeBg:"linear-gradient(145deg,#fff1f2 0%,#ffe4e6 100%)",tag:"Privacy First",title:"Your Info Stays Hidden",desc:"Your phone number is never on the tag. The QR links to a secure proxy — finders see only what you allow.",pills:["Encrypted","No Personal Data","GDPR Safe"]},{id:"history",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#2563eb",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),i.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),iconBg:"#EFF6FF",accent:"#3b82f6",accentDark:"#1d4ed8",dotColor:"#bfdbfe",cardBg:"linear-gradient(145deg,#ffffff 55%,#eff6ff 100%)",activeBg:"linear-gradient(145deg,#eff6ff 0%,#dbeafe 100%)",tag:"Full Visibility",title:"Scan History & Logs",desc:"Your dashboard logs every scan — time, location, device. Know exactly when and where your item was found.",pills:["Full Timeline","Device Info","Exportable"]},{id:"update",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#ea580c",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polyline",{points:"23 4 23 10 17 10"}),i.jsx("polyline",{points:"1 20 1 14 7 14"}),i.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),iconBg:"#FFF7ED",accent:"#f97316",accentDark:"#c2410c",dotColor:"#fed7aa",cardBg:"linear-gradient(145deg,#ffffff 55%,#fff7ed 100%)",activeBg:"linear-gradient(145deg,#fff7ed 0%,#ffedd5 100%)",tag:"Always Current",title:"Update Info Anytime",desc:"Changed your number? Update it in 30 seconds from any device. The physical tag never needs replacing.",pills:["Instant Update","Any Device","Reassignable"]}];function _h({color:e}){return i.jsx("svg",{width:"80",height:"62",viewBox:"0 0 80 62",style:{position:"absolute",bottom:10,right:10,opacity:.4,pointerEvents:"none"},children:Array.from({length:5}).map((t,n)=>Array.from({length:7}).map((r,l)=>i.jsx("circle",{cx:l*12+6,cy:n*12+6,r:"2.5",fill:e},`${n}-${l}`)))})}function Wh({color:e,isActive:t}){return i.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",style:{position:"absolute",top:13,right:13,transition:"transform 0.3s ease",transform:t?"scale(1.15)":"scale(1)"},children:[i.jsx("circle",{cx:"11",cy:"11",r:"11",fill:e,opacity:t?".2":".1"}),i.jsx("circle",{cx:"11",cy:"11",r:"8",fill:e,opacity:t?"1":"0.5"}),i.jsx("polyline",{points:"7,11.5 10,14.5 15,9",fill:"none",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Bh({feature:e,isActive:t,onClick:n}){const{icon:r,iconBg:l,accent:s,accentDark:a,dotColor:o,cardBg:c,activeBg:d,tag:x,title:h,desc:g,pills:m}=e;return i.jsxs("div",{onClick:n,style:{position:"relative",borderRadius:20,padding:"22px 20px 28px",background:t?d:c,border:t?`2px solid ${s}`:`2px solid ${s}55`,boxShadow:t?`0 16px 48px ${s}30, 0 4px 12px ${s}18, inset 0 0 0 1px ${s}20`:`0 2px 10px rgba(0,0,0,0.06), inset 0 0 0 1px ${s}15`,transform:t?"translateY(-6px) scale(1.01)":"translateY(0) scale(1)",transition:"all 0.32s cubic-bezier(0.34,1.3,0.64,1)",overflow:"hidden",cursor:"pointer"},children:[i.jsx(Wh,{color:s,isActive:t}),i.jsx(_h,{color:o}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:4,borderRadius:"20px 20px 0 0",background:t?`linear-gradient(90deg, ${s}, ${s}bb)`:`linear-gradient(90deg, ${s}70, ${s}30)`,transition:"all 0.35s ease"}}),i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:5,background:t?`${s}20`:`${s}12`,color:a,border:`1px solid ${t?`${s}50`:`${s}35`}`,borderRadius:99,padding:"3px 10px",fontSize:10,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",marginBottom:14,transition:"all 0.25s"},children:[i.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:s}}),x]}),i.jsx("div",{style:{width:56,height:56,borderRadius:"50%",background:t?`${s}20`:l,border:`1.5px solid ${t?`${s}55`:`${s}30`}`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16,transform:t?"scale(1.1)":"scale(1)",transition:"all 0.3s ease"},children:r}),i.jsx("h3",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:15.5,fontWeight:800,color:t?"#0f172a":"#1e293b",marginBottom:7,lineHeight:1.28,letterSpacing:"-0.02em",transition:"color 0.25s"},children:h}),i.jsx("div",{style:{width:t?44:28,height:3,borderRadius:99,background:t?`linear-gradient(90deg, ${s}, ${s}88)`:`${s}50`,marginBottom:10,transition:"all 0.35s ease"}}),i.jsx("p",{style:{fontSize:13,color:t?"#334155":"#4b5563",lineHeight:1.7,marginBottom:16,fontWeight:t?450:400,transition:"color 0.25s"},children:g}),i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:m.map(v=>i.jsx("span",{style:{fontSize:10.5,fontWeight:600,padding:"3px 9px",borderRadius:99,background:t?`${s}16`:`${s}0e`,color:a,border:`1px solid ${t?`${s}45`:`${s}30`}`,transition:"all 0.25s"},children:v},v))}),i.jsx("div",{style:{position:"absolute",bottom:0,left:0,height:3,width:t?"100%":"0%",background:`linear-gradient(90deg, ${s}, ${s}55)`,transition:"width 0.4s ease"}})]})}function Oh(){const[e,t]=w.useState("whatsapp");return i.jsxs("section",{style:{background:"linear-gradient(180deg,#f8faff 0%,#eef2f7 100%)",padding:"72px 24px 56px",fontFamily:"'DM Sans', sans-serif"},children:[i.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),i.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=DM+Sans:wght@400;500&display=swap",rel:"stylesheet"}),i.jsxs("div",{style:{maxWidth:1160,margin:"0 auto"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:48},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"#f0fdf4",border:"1.5px solid #bbf7d0",borderRadius:99,padding:"6px 16px",fontSize:12,fontWeight:600,color:"#16a34a",marginBottom:18},children:[i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:i.jsx("path",{d:"M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"})}),"Why ScanForSafe"]}),i.jsxs("h2",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:"clamp(1.7rem,3.8vw,2.8rem)",fontWeight:800,color:"#0f172a",letterSpacing:"-0.04em",lineHeight:1.1,margin:"0 0 16px"},children:["Powerful Features for ",i.jsx("span",{style:{color:"#16a34a"},children:"Peace of Mind"})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:14},children:[i.jsx("div",{style:{width:48,height:1.5,background:"linear-gradient(90deg,transparent,#16a34a)"}}),i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#16a34a",strokeWidth:"2.5",children:i.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),i.jsx("div",{style:{width:48,height:1.5,background:"linear-gradient(90deg,#16a34a,transparent)"}})]}),i.jsxs("p",{style:{fontSize:14.5,color:"#475569",maxWidth:480,margin:"0 auto",lineHeight:1.75},children:["Everything you need to keep your loved ones safe — ",i.jsx("strong",{style:{color:"#1e293b",fontWeight:600},children:"no app needed on the finder's end."})]})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0,1fr))",gap:14},children:Fh.map(n=>i.jsx(Bh,{feature:n,isActive:e===n.id,onClick:()=>t(n.id)},n.id))}),i.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:"8px 28px",marginTop:48,paddingTop:24,borderTop:"1.5px solid #e2e8f0"},children:[{label:"ISO-grade data privacy",path:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},{label:"Works 24/7 — even offline",path:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},{label:"Any smartphone camera",path:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1l2-2h6l2 2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zM12 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"},{label:"End-to-end encrypted",path:"M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4"}].map(({label:n,path:r})=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#16a34a",strokeWidth:"2.2",strokeLinecap:"round",children:i.jsx("path",{d:r})}),i.jsx("span",{style:{fontSize:12.5,fontWeight:600,color:"#475569"},children:n})]},n))})]})]})}function Ah(){return i.jsx("div",{className:"pt-20",children:i.jsx(Oh,{})})}const Dh="/assets/bike1-DQV3NgA2.png",Uh="/assets/car1-BPYYefFG.png",$h="/assets/dog-BDzmYqxX.png",Hh="/assets/luggage1-Cam_lo6y.png",Vh="/assets/senior-B8NGG_gO.png",Yh="/assets/kid-BgJG0Ozf.png",Qh={green:{accent:"#16a34a",gradient:"linear-gradient(135deg, #16a34a, #15803d)",soft:"#f0fdf4",border:"#cbd5e1",active:"#16a34a"},orange:{accent:"#ea580c",gradient:"linear-gradient(135deg, #ea580c, #c2410c)",soft:"#fff7ed",border:"#cbd5e1",active:"#ea580c"},purple:{accent:"#7c3aed",gradient:"linear-gradient(135deg, #7c3aed, #6d28d9)",soft:"#faf5ff",border:"#cbd5e1",active:"#7c3aed"},red:{accent:"#dc2626",gradient:"linear-gradient(135deg, #dc2626, #b91c1c)",soft:"#fef2f2",border:"#cbd5e1",active:"#dc2626"},blue:{accent:"#2563eb",gradient:"linear-gradient(135deg, #2563eb, #1d4ed8)",soft:"#eff6ff",border:"#cbd5e1",active:"#2563eb"}},Xh=[{id:"car",icon:Si,image:Uh,title:"Car Protection",subtitle:"Vehicle Security",desc:"Weatherproof QR protection for cars with instant emergency alerts and GPS tracking.",features:[{label:"Weatherproof",icon:N1},{label:"Live Alerts",icon:ct},{label:"GPS Tracking",icon:Ot},{label:"24/7 Monitor",icon:me}],price:499,original:999,discount:"50% OFF",color:"green",rating:4.9,reviews:2341},{id:"bike",icon:Sa,image:Dh,title:"Bike Security",subtitle:"Two Wheeler Shield",desc:"Scratch resistant QR protection with owner privacy and instant finder alerts.",features:[{label:"Scratch Resistant",icon:dt},{label:"Instant Notify",icon:ct},{label:"Owner Privacy",icon:hr},{label:"Quick Connect",icon:A1}],price:499,original:999,discount:"50% OFF",color:"green",popular:!0,rating:4.8,reviews:3892},{id:"pet",icon:Mu,image:$h,title:"Pet Safety Tag",subtitle:"Pet Guardian",desc:"Smart pet QR with collar support, emergency contact and GPS location sharing.",features:[{label:"Collar Friendly",icon:Zr},{label:"GPS Location",icon:H1},{label:"Emergency Contact",icon:dn},{label:"Vet Info",icon:F1}],price:499,original:999,discount:"50% OFF",color:"orange",rating:4.9,reviews:1876},{id:"luggage",icon:Ca,image:Hh,title:"Luggage Guard",subtitle:"Travel Protection",desc:"Strong adhesive QR luggage tags for fast recovery and secure travel support.",features:[{label:"Multi Luggage",icon:W1},{label:"Strong Adhesive",icon:dt},{label:"Travel Friendly",icon:Y1},{label:"Quick Recovery",icon:js}],price:499,original:999,discount:"50% OFF",color:"purple",rating:4.7,reviews:1243},{id:"senior",icon:th,image:Vh,title:"Senior Safety",subtitle:"Emergency Wrist Band",desc:"Senior citizen wrist QR support with medical info and emergency family alerts.",features:[{label:"Medical Info",icon:dt},{label:"Emergency Alerts",icon:ct},{label:"Family Contact",icon:dn},{label:"Live Tracking",icon:Ot}],price:699,original:1299,discount:"46% OFF",color:"red",rating:4.9,reviews:987},{id:"child",icon:ja,image:Yh,title:"Child Safety",subtitle:"Kids Guardian",desc:"Child QR safety patch with emergency contact and quick scan protection.",features:[{label:"QR Patch",icon:dt},{label:"Emergency Alert",icon:ct},{label:"Parental Contact",icon:dn},{label:"Quick Scan",icon:js}],price:699,original:1299,discount:"46% OFF",color:"blue",rating:5,reviews:2108}],Gh=[{icon:me,title:"Secure Checkout",sub:"100% Safe & Encrypted",color:"#16a34a"},{icon:Ss,title:"Free Shipping",sub:"Pan India Delivery",color:"#2563eb"},{icon:G1,title:"30-Day Returns",sub:"Easy Refund Policy",color:"#7c3aed"},{icon:T1,title:"24/7 Support",sub:"Always Here To Help",color:"#ea580c"}];function qh({product:e}){const[t,n]=w.useState(1),[r,l]=w.useState(!1),s=Qh[e.color],a=e.icon;return i.jsxs("div",{onClick:()=>l(!r),style:{background:"#fff",borderRadius:20,overflow:"visible",border:r?`2px solid ${s.active}`:"1px solid #cbd5e1",boxShadow:r?"0 12px 28px rgba(0,0,0,0.08)":"0 4px 16px rgba(0,0,0,0.03)",position:"relative",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",transform:r?"translateY(-4px)":"translateY(0px)",padding:"20px 16px 16px 16px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e.popular&&i.jsxs("div",{style:{position:"absolute",top:-12,left:20,background:s.gradient,color:"#fff",fontSize:10,fontWeight:800,padding:"4px 12px",borderRadius:20,zIndex:10,display:"flex",alignItems:"center",gap:4,letterSpacing:"0.5px"},children:[i.jsx(yn,{size:10,fill:"#fff"}),"MOST POPULAR"]}),i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:12,background:s.gradient,display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(a,{color:"#fff",size:20})}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700},children:[i.jsx(Hi,{size:12,fill:"#f59e0b",color:"#f59e0b"}),i.jsx("span",{style:{color:"#111827"},children:e.rating}),i.jsxs("span",{style:{color:"#9ca3af",fontWeight:400},children:["| ",e.reviews.toLocaleString()," reviews"]})]})]}),i.jsx("h3",{style:{fontSize:18,fontWeight:800,color:"#111827",margin:"0 0 2px 0"},children:e.title}),i.jsx("p",{style:{color:s.accent,fontWeight:700,fontSize:12,margin:"0 0 12px 0"},children:e.subtitle}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px 1fr",gap:12,alignItems:"start",marginBottom:14},children:[i.jsx("div",{style:{background:"#f8fafc",borderRadius:14,height:120,display:"flex",alignItems:"center",justifyContent:"center",padding:8,border:"1px solid #f1f5f9"},children:i.jsx("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%",objectFit:"contain"}})}),i.jsxs("div",{children:[i.jsx("p",{style:{fontSize:11,color:"#6b7280",lineHeight:1.5,margin:"0 0 10px 0"},children:e.desc}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:6},children:e.features.map(({label:o,icon:c})=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[i.jsx(c,{size:13,color:s.accent,style:{flexShrink:0}}),i.jsx("span",{style:{fontSize:11,fontWeight:500,color:"#374151"},children:o})]},o))})]})]})]}),i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6,marginBottom:12},children:[i.jsxs("span",{style:{fontSize:24,fontWeight:900,color:s.accent},children:["₹",e.price]}),i.jsxs("span",{style:{textDecoration:"line-through",color:"#9ca3af",fontSize:14,fontWeight:500},children:["₹",e.original]}),i.jsx("span",{style:{color:s.accent,fontSize:11,fontWeight:700,marginLeft:"auto",background:s.soft,padding:"2px 8px",borderRadius:12},children:e.discount})]}),i.jsxs("div",{style:{display:"flex",gap:8},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",border:"1px solid #e2e8f0",borderRadius:10,overflow:"hidden",height:36},children:[i.jsx("button",{onClick:o=>{o.stopPropagation(),n(c=>Math.max(1,c-1))},style:tc,children:i.jsx($1,{size:12})}),i.jsx("div",{style:{width:28,textAlign:"center",fontWeight:700,fontSize:13,color:"#111827"},children:t}),i.jsx("button",{onClick:o=>{o.stopPropagation(),n(c=>c+1)},style:tc,children:i.jsx(Q1,{size:12})})]}),i.jsxs("button",{onClick:o=>o.stopPropagation(),style:{flex:1,height:36,border:"none",borderRadius:10,background:s.gradient,color:"#fff",fontWeight:700,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center",gap:6,cursor:"pointer"},children:[i.jsx(K1,{size:13}),"Buy Now"]})]})]})]})}const tc={width:32,height:"100%",border:"none",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#6b7280"};function Kh(){return i.jsxs("section",{style:{padding:"60px 0",background:"linear-gradient(180deg, #f4fbf7 0%, #ffffff 100%)",fontFamily:"'DM Sans', system-ui, sans-serif"},children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
      `}),i.jsxs("div",{style:{width:"100%",maxWidth:1200,margin:"0 auto",padding:"0 20px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:44},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid #dcfce7",borderRadius:30,padding:"6px 16px",marginBottom:16,boxShadow:"0 4px 12px rgba(0,0,0,0.03)"},children:[i.jsx(b1,{size:14,color:"#16a34a"}),i.jsx("span",{style:{fontWeight:800,fontSize:11,color:"#15803d",letterSpacing:"0.5px"},children:"OUR PRODUCTS"})]}),i.jsxs("h2",{style:{fontSize:44,lineHeight:1.1,fontWeight:900,marginBottom:12,color:"#111827",letterSpacing:"-1px"},children:["Choose Your ",i.jsx("span",{style:{color:"#16a34a"},children:"Protection Plan"})]}),i.jsx("p",{style:{maxWidth:640,margin:"0 auto",color:"#4b5563",lineHeight:1.6,fontSize:15},children:"Smart QR solutions for vehicles, pets, luggage, children and senior citizens with instant emergency communication and recovery support."})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:24,marginBottom:44},children:Xh.map(e=>i.jsx(qh,{product:e},e.id))}),i.jsx("div",{style:{background:"#fff",borderRadius:16,padding:"20px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:16,boxShadow:"0 4px 20px rgba(0,0,0,0.04)",border:"1px solid #f1f5f9"},children:Gh.map(({icon:e,title:t,sub:n,color:r})=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,justifyContent:"center"},children:[i.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(e,{size:20,color:r})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:800,fontSize:14,color:"#111827"},children:t}),i.jsx("div",{style:{color:"#6b7280",fontSize:12},children:n})]})]},t))})]})]})}function Zh(){return i.jsx("div",{className:"pt-20 bg-[#f8fbff]",children:i.jsx(Kh,{})})}const Jh=[{icon:Sa,title:"Motorcycles & Bikes",qrSize:"3.5 cm QR Sticker",description:"Weather-proof 3.5cm QR sticker placed on the fuel tank or handlebar. If your bike is found, the finder scans and you get an instant alert with GPS location.",cardBg:"linear-gradient(135deg,#f0fdf4,#dcfce7)",iconBg:"#166534",tag:"QR Sticker",tagBg:"#dcfce7",tagColor:"#166534",image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",badge:"🏍️",qrPosition:"On fuel tank / handlebar"},{icon:Ca,title:"Bags & Luggage",qrSize:"3.5 cm QR Sticker",description:"Durable sticker or tag attached to your bag strap. Perfect for travel bags, school bags, and laptop bags. Works even in low-light.",cardBg:"linear-gradient(135deg,#ecfdf5,#a7f3d0)",iconBg:"#064e3b",tag:"QR Tag",tagBg:"#bbf7d0",tagColor:"#064e3b",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",badge:"🎒",qrPosition:"On bag strap / handle"},{icon:Mu,title:"Dogs, Cats & Pets",qrSize:"Collar QR Tag",description:"Attach a lightweight QR tag to your pet's collar. If they wander, anyone can scan it and you'll receive an instant notification with their location.",cardBg:"linear-gradient(135deg,#f0fdf4,#dcfce7)",iconBg:"#166534",tag:"Collar Tag",tagBg:"#dcfce7",tagColor:"#166534",image:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",badge:"🐕",qrPosition:"On pet collar"},{icon:ja,title:"Children Safety",qrSize:"Hand Band / Shoulder",description:"Wearable QR wristband or shoulder tag for your child. If they get separated in crowded places, a good samaritan scans the band and you get alerted instantly.",cardBg:"linear-gradient(135deg,#ecfdf5,#bbf7d0)",iconBg:"#064e3b",tag:"Hand Band",tagBg:"#a7f3d0",tagColor:"#064e3b",image:"https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",badge:"🧒",qrPosition:"On hand band / shoulder"},{icon:Iu,title:"Laptops & Valuables",qrSize:"QR + NFC Sticker",description:"Stick a dual QR+NFC tag on your laptop, camera, or any valuable. Works with both QR scan and NFC tap for maximum recovery speed.",cardBg:"linear-gradient(135deg,#f0fdf4,#dcfce7)",iconBg:"#166534",tag:"NFC + QR",tagBg:"#dcfce7",tagColor:"#166534",image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",badge:"💻",qrPosition:"Back of device"},{icon:eh,title:"Senior Citizens",qrSize:"Emergency QR + NFC",description:"Emergency profile with medical info, blood group, and contacts. NFC tap or QR scan gives responders instant access to critical details — no app needed.",cardBg:"linear-gradient(135deg,#ecfdf5,#a7f3d0)",iconBg:"#064e3b",tag:"Senior Care",tagBg:"#166534",tagColor:"#fff",image:"https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=600&q=80",badge:"👴",qrPosition:"Wristband / wallet card",isNew:!0}];function eg(){return i.jsx("section",{id:"use-cases",style:{background:"#ffffff",padding:"90px 0 80px"},children:i.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:56},children:[i.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#dcfce7",border:"1px solid #bbf7d0",marginBottom:16},children:i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#166534"},children:"Real-World Use Cases"})}),i.jsx("h2",{style:{fontSize:"clamp(28px,4vw,44px)",fontWeight:900,color:"#064e3b",margin:"0 0 14px"},children:"Protect Everything You Love"}),i.jsx("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:540,margin:"0 auto",lineHeight:1.7},children:"From bikes to babies — ScanForSafe QR tags and NFC chips keep your world safe and recoverable"})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:24},children:Jh.map(e=>i.jsx(tg,{...e},e.title))})]})})}function tg({icon:e,title:t,qrSize:n,description:r,cardBg:l,iconBg:s,tag:a,tagBg:o,tagColor:c,image:d,badge:x,qrPosition:h,isNew:g}){const[m,v]=w.useState(!1);return i.jsxs("div",{onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),style:{borderRadius:24,overflow:"hidden",background:l,border:"1.5px solid #bbf7d0",boxShadow:m?"0 24px 56px rgba(6,78,59,0.14)":"0 4px 24px rgba(6,78,59,0.07)",transition:"all 0.3s ease",position:"relative",transform:m?"translateY(-6px)":"translateY(0)"},children:[g&&i.jsx("div",{style:{position:"absolute",top:14,right:14,zIndex:10,background:"#166534",color:"#fff",fontSize:11,fontWeight:800,padding:"4px 12px",borderRadius:100,letterSpacing:"0.05em"},children:"NEW"}),i.jsxs("div",{style:{position:"relative",height:200,overflow:"hidden"},children:[i.jsx("img",{src:d,alt:t,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block",transform:m?"scale(1.04)":"scale(1)",transition:"transform 0.4s ease"}}),i.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, transparent 30%, rgba(6,78,59,0.65))"}}),i.jsxs("div",{style:{position:"absolute",bottom:12,left:12,background:"rgba(255,255,255,0.92)",backdropFilter:"blur(8px)",borderRadius:10,padding:"6px 12px",fontSize:11,fontWeight:700,color:"#166534",display:"flex",alignItems:"center",gap:6,border:"1px solid rgba(255,255,255,0.8)",zIndex:2},children:[i.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#166534",strokeWidth:"2.5",children:[i.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),i.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),i.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),i.jsx("path",{d:"M14 14h3v3m0 4h4m-4-4v4m4-7h-4m4 0v3"})]}),h]})]}),i.jsxs("div",{style:{padding:"20px 20px 22px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:12},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:12,background:s,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(e,{size:20,color:"#fff"})}),i.jsxs("div",{children:[i.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:800,color:"#064e3b"},children:t}),i.jsxs("div",{style:{fontSize:11,color:"#6b7280",fontWeight:600,marginTop:2},children:[x," ",n]})]})]}),i.jsx("span",{style:{fontSize:11,fontWeight:800,padding:"4px 10px",borderRadius:100,background:o,color:c,whiteSpace:"nowrap"},children:a})]}),i.jsx("p",{style:{margin:0,fontSize:14,color:"#374151",lineHeight:1.65},children:r})]})]})}function ng(){return i.jsx("div",{className:"pt-20",children:i.jsx(eg,{})})}function rg(){return i.jsx(i.Fragment,{children:i.jsx(Tu,{})})}const ig=[{name:"Priya Sharma",role:"Pet Owner",city:"Mumbai",initial:"P",color:"#0057b8",bg:"rgba(0,87,184,0.10)",rating:5,Icon:dt,text:"My dog slipped out one evening. Within 20 minutes, a kind stranger scanned his collar and I got a WhatsApp alert with their location. We reunited so fast! ScanForSafe is absolutely worth every rupee."},{name:"Rajesh Kumar",role:"Car Owner",city:"Delhi",initial:"R",color:"#2ca02c",bg:"rgba(44,160,44,0.10)",rating:5,Icon:Si,text:"Parking in crowded areas always made me anxious about blocking someone. Now with the QR on my car, people contact me directly without needing my number visible."},{name:"Anita Verma",role:"Parent",city:"Bengaluru",initial:"A",color:"#1a7fd4",bg:"rgba(26,127,212,0.10)",rating:5,Icon:ja,text:"I put a ScanForSafe tag on my son's school bag. The peace of mind knowing someone can reach me immediately in an emergency is priceless."},{name:"Mohammed Farhan",role:"Bike Owner",city:"Hyderabad",initial:"M",color:"#00509e",bg:"rgba(0,80,158,0.10)",rating:5,Icon:Sa,text:"My bike was towed once and I had no idea where it went. After getting ScanForSafe, I feel so much more in control."},{name:"Sneha Reddy",role:"Frequent Traveller",city:"Chennai",initial:"S",color:"#1d8a1d",bg:"rgba(29,138,29,0.10)",rating:5,Icon:Nu,text:"Lost my suitcase at the airport once — never again. I tag every bag now."},{name:"Vikram Nair",role:"Laptop Owner",city:"Pune",initial:"V",color:"#0057b8",bg:"rgba(0,87,184,0.10)",rating:5,Icon:Iu,text:"Left my laptop at a café once and it was gone for 2 hours. ScanForSafe helped me recover it quickly."}];function lg({count:e}){return i.jsx("div",{className:"flex gap-0.5",children:Array.from({length:e}).map((t,n)=>i.jsx(Hi,{className:"w-3.5 h-3.5 text-amber-400 fill-amber-400"},n))})}function sg({t:e}){const{Icon:t}=e;return i.jsxs("div",{className:"relative rounded-2xl p-5 border border-slate-100 bg-white",style:{boxShadow:"0 2px 16px rgba(0,43,91,0.07)"},children:[i.jsxs("div",{className:"flex items-start justify-between mb-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center",style:{background:e.bg},children:i.jsx(t,{style:{width:"18px",height:"18px",color:e.color}})}),i.jsx(lg,{count:e.rating})]}),i.jsx(X1,{className:"absolute top-4 right-14 w-6 h-6",style:{color:"rgba(0,87,184,0.08)"}}),i.jsxs("p",{className:"text-slate-600 text-sm leading-relaxed mb-4",children:['"',e.text,'"']}),i.jsxs("div",{className:"flex items-center gap-3 pt-3 border-t border-slate-100",children:[i.jsx("div",{className:"w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm",style:{background:e.color},children:e.initial}),i.jsxs("div",{children:[i.jsx("p",{className:"font-bold text-sm",style:{color:"#002b5b"},children:e.name}),i.jsxs("p",{className:"text-xs text-slate-400",children:[e.role," · ",e.city]})]})]})]})}function ag(){return i.jsx("section",{id:"testimonials",className:"py-20",style:{background:"#f4f7fb",padding:"120pX"},children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:[i.jsxs("div",{className:"mb-14 text-center",children:[i.jsx("div",{className:"flex justify-center mb-4",children:i.jsx("span",{className:"badge",children:"Customer Stories"})}),i.jsx("h2",{className:"section-heading",children:"Real People, Real Protection Stories"}),i.jsx("p",{className:"section-sub",children:"Join thousands of happy customers across India who trust ScanForSafe every day."}),i.jsx("div",{className:"flex flex-wrap items-center justify-center gap-6 mt-8",children:[{value:"10,000+",label:"Happy Users"},{value:"4.9 ★",label:"Average Rating"},{value:"98%",label:"Reunion Rate"},{value:"50+ Cities",label:"Across India"}].map(e=>i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-2xl font-black",style:{color:"#0057b8"},children:e.value}),i.jsx("p",{className:"text-xs font-semibold text-slate-500 uppercase tracking-wide",children:e.label})]},e.label))})]}),i.jsx("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:ig.map((e,t)=>i.jsx(sg,{t:e},t))})]})})}function og(){return i.jsx(i.Fragment,{children:i.jsx(ag,{})})}function cg(){return i.jsxs("svg",{viewBox:"0 0 280 280",className:"w-52 h-52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("ellipse",{cx:"140",cy:"180",rx:"90",ry:"30",fill:"#16a34a",fillOpacity:"0.18"}),i.jsx("path",{d:"M140 240 C100 220 68 185 68 145 L68 82 L140 55 L212 82 L212 145 C212 185 180 220 140 240Z",fill:"#15803d",fillOpacity:"0.25",transform:"translate(4,6)"}),i.jsx("path",{d:"M140 232 C100 212 68 177 68 137 L68 74 L140 47 L212 74 L212 137 C212 177 180 212 140 232Z",fill:"url(#shieldGrad)",stroke:"#15803d",strokeWidth:"1.5"}),i.jsx("path",{d:"M140 210 C108 193 88 164 88 134 L88 88 L140 66 L192 88 L192 134 C192 164 172 193 140 210Z",fill:"url(#shieldInner)",opacity:"0.6"}),Array.from({length:6},(e,t)=>Array.from({length:6},(n,r)=>{const l=108+r*13,s=80+t*13,a=Math.random()>.4?.5:.15;return i.jsx("rect",{x:l,y:s,width:"8",height:"8",rx:"1.5",fill:"white",fillOpacity:a},`${t}-${r}`)})),i.jsx("circle",{cx:"168",cy:"158",r:"22",fill:"#16a34a",stroke:"white",strokeWidth:"2.5"}),i.jsx("circle",{cx:"168",cy:"158",r:"18",fill:"#22c55e"}),i.jsx("path",{d:"M158 158 L164 164 L178 150",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("circle",{cx:"140",cy:"30",r:"5",fill:"#4ade80",fillOpacity:"0.7"}),i.jsx("circle",{cx:"228",cy:"100",r:"4",fill:"#86efac",fillOpacity:"0.6"}),i.jsx("circle",{cx:"210",cy:"210",r:"5",fill:"#4ade80",fillOpacity:"0.5"}),i.jsx("circle",{cx:"68",cy:"195",r:"3.5",fill:"#86efac",fillOpacity:"0.6"}),i.jsx("circle",{cx:"50",cy:"100",r:"4",fill:"#4ade80",fillOpacity:"0.5"}),i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:"shieldGrad",x1:"140",y1:"47",x2:"140",y2:"232",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:"0%",stopColor:"#22c55e"}),i.jsx("stop",{offset:"50%",stopColor:"#16a34a"}),i.jsx("stop",{offset:"100%",stopColor:"#14532d"})]}),i.jsxs("linearGradient",{id:"shieldInner",x1:"140",y1:"66",x2:"140",y2:"210",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:"0%",stopColor:"white",stopOpacity:"0.25"}),i.jsx("stop",{offset:"100%",stopColor:"white",stopOpacity:"0"})]})]})]})}const dg=[{icon:Ru,label:"Enterprise Security",desc:"End-to-end protection for your ecosystem",tags:"Secure • Reliable • Robust",tagColor:"#16a34a"},{icon:yn,label:"Lightning Fast",desc:"Instant AI scanning & verification",tags:"Real-time • Accurate • Fast",tagColor:"#d97706"},{icon:Vi,label:"Role-Based Access",desc:"Granular permissions with 4 user roles",tags:"Flexible • Controlled • Safe",tagColor:"#7c3aed"},{icon:E1,label:"Cloud Scalability",desc:"Reliable, secure & always available",tags:"Scalable • Global • Always On",tagColor:"#0ea5e9"}];function ug(){const[e,t]=w.useState(!1),[n,r]=w.useState(""),[l,s]=w.useState(""),[a,o]=w.useState(!1),[c,d]=w.useState({}),x=()=>{const g={};return n.trim()||(g.username="Username is required"),l?l.length<6&&(g.password="Password must be at least 6 characters"):g.password="Password is required",g},h=g=>{g.preventDefault();const m=x();if(Object.keys(m).length){d(m);return}d({}),o(!0),setTimeout(()=>o(!1),1800)};return i.jsxs("div",{className:"min-h-screen flex font-sans",style:{fontFamily:"'DM Sans', 'Helvetica Neue', sans-serif"},children:[i.jsxs("div",{className:"hidden lg:flex lg:w-[55%] flex-col p-10 relative overflow-hidden",style:{background:"linear-gradient(160deg, #f0fdf4 0%, #dcfce7 40%, #bbf7d0 100%)"},children:[i.jsx("div",{className:"absolute inset-0 opacity-40",style:{backgroundImage:"radial-gradient(circle, #86efac 1px, transparent 1px)",backgroundSize:"28px 28px"}}),i.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}),i.jsx("div",{className:"absolute top-20 right-20 w-80 h-80 rounded-full opacity-30",style:{background:"radial-gradient(circle, #4ade80, transparent 70%)"}}),i.jsx("div",{className:"absolute bottom-10 left-10 w-60 h-60 rounded-full opacity-20",style:{background:"radial-gradient(circle, #22c55e, transparent 70%)"}}),i.jsxs("div",{className:"relative z-10 flex items-center gap-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center shadow-md",style:{background:"linear-gradient(135deg, #16a34a, #15803d)"},children:i.jsx(me,{className:"w-5 h-5 text-white"})}),i.jsxs("div",{children:[i.jsx("span",{className:"font-black text-lg text-gray-900 tracking-tight leading-none block",children:"Scan for Safe"}),i.jsx("span",{className:"text-[10px] text-green-700 font-semibold tracking-widest uppercase",children:"Product Protection Platform"})]})]}),i.jsx("div",{className:"relative z-10 mt-6",children:i.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-300 bg-white/60 backdrop-blur-sm text-xs font-bold text-green-800 tracking-widest uppercase shadow-sm",children:[i.jsx(Na,{className:"w-3.5 h-3.5 text-green-600"}),"AI Powered · Trusted · Secure"]})}),i.jsxs("div",{className:"relative z-10 mt-8 flex gap-8 items-start",children:[i.jsxs("div",{className:"flex-1",children:[i.jsxs("h2",{className:"text-4xl font-black text-gray-900 leading-tight tracking-tight",children:["Smart Product",i.jsx("br",{}),"Safety &"," ",i.jsx("span",{style:{color:"#16a34a"},children:"Authentication"})]}),i.jsx("p",{className:"text-gray-600 text-sm mt-4 leading-relaxed max-w-xs font-medium",children:"AI-driven verification, counterfeit detection, and real-time monitoring to protect your products, customers, and brand integrity."})]}),i.jsx("div",{className:"flex-shrink-0 mt-[-12px]",children:i.jsx(cg,{})})]}),i.jsx("div",{className:"relative z-10 mt-6 grid grid-cols-2 gap-4",children:dg.map(({icon:g,label:m,desc:v,tags:b,tagColor:j})=>i.jsxs("div",{className:"bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl p-4 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-200",children:[i.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center mb-3",style:{background:`${j}18`,border:`1px solid ${j}30`},children:i.jsx(g,{className:"w-4 h-4",style:{color:j}})}),i.jsx("p",{className:"text-gray-900 text-sm font-black leading-tight",children:m}),i.jsx("p",{className:"text-gray-500 text-[11px] mt-1 leading-snug",children:v}),i.jsx("p",{className:"text-[10px] font-bold mt-2",style:{color:j},children:b})]},m))})]}),i.jsxs("div",{className:"w-full lg:w-[45%] flex flex-col justify-center items-center px-8 sm:px-14 py-12 bg-white relative",children:[i.jsxs("div",{className:"lg:hidden flex items-center gap-2 mb-10",children:[i.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center",style:{background:"linear-gradient(135deg, #16a34a, #15803d)"},children:i.jsx(me,{className:"w-5 h-5 text-white"})}),i.jsx("span",{className:"font-black text-xl text-gray-900",children:"Scan for Safe"})]}),i.jsxs("div",{className:"w-full max-w-sm",children:[i.jsxs("div",{className:"mb-8",children:[i.jsxs("h1",{className:"text-4xl font-black text-gray-900 tracking-tight leading-tight",children:["Welcome ",i.jsx("span",{style:{color:"#16a34a"},children:"Back!"})]}),i.jsx("p",{className:"text-gray-500 text-sm mt-2 font-medium",children:"Sign in to continue to your dashboard"})]}),i.jsxs("form",{onSubmit:h,noValidate:!0,className:"space-y-5",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-[11px] font-black text-gray-700 tracking-widest uppercase mb-2",children:"Username"}),i.jsxs("div",{className:"relative",children:[i.jsx(Cs,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),i.jsx("input",{type:"text",value:n,onChange:g=>{r(g.target.value),d(m=>({...m,username:""}))},placeholder:"Enter your username",className:`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 ${c.username?"border-red-300 focus:ring-red-100":"border-gray-200 focus:border-green-400 focus:ring-green-50"}`})]}),c.username&&i.jsx("p",{className:"text-red-500 text-[11px] font-semibold mt-1.5 ml-1",children:c.username})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("label",{className:"block text-[11px] font-black text-gray-700 tracking-widest uppercase",children:"Password"}),i.jsx(De,{to:"/forgot-password",className:"text-xs font-bold hover:underline",style:{color:"#16a34a"},children:"Forgot password?"})]}),i.jsxs("div",{className:"relative",children:[i.jsx(hr,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),i.jsx("input",{type:e?"text":"password",value:l,onChange:g=>{s(g.target.value),d(m=>({...m,password:""}))},placeholder:"Enter your password",className:`w-full pl-10 pr-11 py-3.5 rounded-xl border text-sm font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 ${c.password?"border-red-300 focus:ring-red-100":"border-gray-200 focus:border-green-400 focus:ring-green-50"}`}),i.jsx("button",{type:"button",onClick:()=>t(!e),className:"absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors","aria-label":e?"Hide password":"Show password",children:e?i.jsx(R1,{className:"w-4 h-4"}):i.jsx(I1,{className:"w-4 h-4"})})]}),c.password&&i.jsx("p",{className:"text-red-500 text-[11px] font-semibold mt-1.5 ml-1",children:c.password})]}),i.jsx("button",{type:"submit",disabled:a,className:"w-full py-4 rounded-xl text-white font-black text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed mt-1",style:{background:"linear-gradient(135deg, #16a34a, #15803d)",boxShadow:"0 10px 28px rgba(22,163,74,.28)"},children:a?i.jsxs(i.Fragment,{children:[i.jsxs("svg",{className:"animate-spin w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",children:[i.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),i.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"})]}),"Signing in…"]}):i.jsxs(i.Fragment,{children:["Access Dashboard",i.jsx(Qn,{className:"w-4 h-4"})]})}),i.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-400 text-[11px] font-semibold",children:[i.jsx(hr,{className:"w-3.5 h-3.5"}),"Your data is encrypted and secure"]})]}),i.jsxs("p",{className:"text-center text-xs text-gray-500 font-medium mt-8",children:["Don't have an account?"," ",i.jsx(De,{to:"/register",className:"font-black hover:underline",style:{color:"#16a34a"},children:"Get started free →"})]})]})]})]})}function fg(){const t=jn().pathname==="/login";return i.jsxs("div",{className:"min-h-screen flex flex-col",children:[!t&&i.jsx(g1,{}),i.jsx("main",{className:"flex-1",children:i.jsxs(i1,{children:[i.jsx(Le,{path:"/",element:i.jsx(Eh,{})}),i.jsx(Le,{path:"/features",element:i.jsx(Ah,{})}),i.jsx(Le,{path:"/products",element:i.jsx(Zh,{})}),i.jsx(Le,{path:"/use-cases",element:i.jsx(ng,{})}),i.jsx(Le,{path:"/how-it-works",element:i.jsx(rg,{})}),i.jsx(Le,{path:"/testimonials",element:i.jsx(og,{})}),i.jsx(Le,{path:"/login",element:i.jsx(ug,{})}),i.jsx(Le,{path:"/contact",element:i.jsx(Ih,{})}),i.jsx(Le,{path:"/privacy-policy",element:i.jsx(Lh,{})}),i.jsx(Le,{path:"/terms",element:i.jsx(Mh,{})})]})}),!t&&i.jsx(ah,{}),!t&&i.jsx(Th,{})]})}zl.createRoot(document.getElementById("root")).render(i.jsx(fc.StrictMode,{children:i.jsx(u1,{children:i.jsx(fg,{})})}));
