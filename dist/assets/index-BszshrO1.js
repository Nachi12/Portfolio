(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function rx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zd={exports:{}},Ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function cM(){if(D_)return Ko;D_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Ko.Fragment=e,Ko.jsx=i,Ko.jsxs=i,Ko}var U_;function uM(){return U_||(U_=1,zd.exports=cM()),zd.exports}var T=uM(),Hd={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function fM(){if(L_)return at;L_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function b(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,y={};function S(O,Z,be){this.props=O,this.context=Z,this.refs=y,this.updater=be||A}S.prototype.isReactComponent={},S.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function B(){}B.prototype=S.prototype;function I(O,Z,be){this.props=O,this.context=Z,this.refs=y,this.updater=be||A}var w=I.prototype=new B;w.constructor=I,N(w,S.prototype),w.isPureReactComponent=!0;var P=Array.isArray;function U(){}var F={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(O,Z,be){var Ce=be.ref;return{$$typeof:r,type:O,key:Z,ref:Ce!==void 0?Ce:null,props:be}}function X(O,Z){return D(O.type,Z,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function K(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(be){return Z[be]})}var ue=/\/+/g;function ge(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?K(""+O.key):Z.toString(36)}function J(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(U,U):(O.status="pending",O.then(function(Z){O.status==="pending"&&(O.status="fulfilled",O.value=Z)},function(Z){O.status==="pending"&&(O.status="rejected",O.reason=Z)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function z(O,Z,be,Ce,Fe){var se=typeof O;(se==="undefined"||se==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(se){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case r:case e:Se=!0;break;case v:return Se=O._init,z(Se(O._payload),Z,be,Ce,Fe)}}if(Se)return Fe=Fe(O),Se=Ce===""?"."+ge(O,0):Ce,P(Fe)?(be="",Se!=null&&(be=Se.replace(ue,"$&/")+"/"),z(Fe,Z,be,"",function(nt){return nt})):Fe!=null&&(V(Fe)&&(Fe=X(Fe,be+(Fe.key==null||O&&O.key===Fe.key?"":(""+Fe.key).replace(ue,"$&/")+"/")+Se)),Z.push(Fe)),1;Se=0;var Me=Ce===""?".":Ce+":";if(P(O))for(var He=0;He<O.length;He++)Ce=O[He],se=Me+ge(Ce,He),Se+=z(Ce,Z,be,se,Fe);else if(He=b(O),typeof He=="function")for(O=He.call(O),He=0;!(Ce=O.next()).done;)Ce=Ce.value,se=Me+ge(Ce,He++),Se+=z(Ce,Z,be,se,Fe);else if(se==="object"){if(typeof O.then=="function")return z(J(O),Z,be,Ce,Fe);throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Se}function G(O,Z,be){if(O==null)return O;var Ce=[],Fe=0;return z(O,Ce,"","",function(se){return Z.call(be,se,Fe++)}),Ce}function ne(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(be){(O._status===0||O._status===-1)&&(O._status=1,O._result=be)},function(be){(O._status===0||O._status===-1)&&(O._status=2,O._result=be)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var _e=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Ee={map:G,forEach:function(O,Z,be){G(O,function(){Z.apply(this,arguments)},be)},count:function(O){var Z=0;return G(O,function(){Z++}),Z},toArray:function(O){return G(O,function(Z){return Z})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return at.Activity=x,at.Children=Ee,at.Component=S,at.Fragment=i,at.Profiler=l,at.PureComponent=I,at.StrictMode=s,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,at.__COMPILER_RUNTIME={__proto__:null,c:function(O){return F.H.useMemoCache(O)}},at.cache=function(O){return function(){return O.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(O,Z,be){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ce=N({},O.props),Fe=O.key;if(Z!=null)for(se in Z.key!==void 0&&(Fe=""+Z.key),Z)!E.call(Z,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&Z.ref===void 0||(Ce[se]=Z[se]);var se=arguments.length-2;if(se===1)Ce.children=be;else if(1<se){for(var Se=Array(se),Me=0;Me<se;Me++)Se[Me]=arguments[Me+2];Ce.children=Se}return D(O.type,Fe,Ce)},at.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},at.createElement=function(O,Z,be){var Ce,Fe={},se=null;if(Z!=null)for(Ce in Z.key!==void 0&&(se=""+Z.key),Z)E.call(Z,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Fe[Ce]=Z[Ce]);var Se=arguments.length-2;if(Se===1)Fe.children=be;else if(1<Se){for(var Me=Array(Se),He=0;He<Se;He++)Me[He]=arguments[He+2];Fe.children=Me}if(O&&O.defaultProps)for(Ce in Se=O.defaultProps,Se)Fe[Ce]===void 0&&(Fe[Ce]=Se[Ce]);return D(O,se,Fe)},at.createRef=function(){return{current:null}},at.forwardRef=function(O){return{$$typeof:p,render:O}},at.isValidElement=V,at.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ne}},at.memo=function(O,Z){return{$$typeof:h,type:O,compare:Z===void 0?null:Z}},at.startTransition=function(O){var Z=F.T,be={};F.T=be;try{var Ce=O(),Fe=F.S;Fe!==null&&Fe(be,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(U,_e)}catch(se){_e(se)}finally{Z!==null&&be.types!==null&&(Z.types=be.types),F.T=Z}},at.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},at.use=function(O){return F.H.use(O)},at.useActionState=function(O,Z,be){return F.H.useActionState(O,Z,be)},at.useCallback=function(O,Z){return F.H.useCallback(O,Z)},at.useContext=function(O){return F.H.useContext(O)},at.useDebugValue=function(){},at.useDeferredValue=function(O,Z){return F.H.useDeferredValue(O,Z)},at.useEffect=function(O,Z){return F.H.useEffect(O,Z)},at.useEffectEvent=function(O){return F.H.useEffectEvent(O)},at.useId=function(){return F.H.useId()},at.useImperativeHandle=function(O,Z,be){return F.H.useImperativeHandle(O,Z,be)},at.useInsertionEffect=function(O,Z){return F.H.useInsertionEffect(O,Z)},at.useLayoutEffect=function(O,Z){return F.H.useLayoutEffect(O,Z)},at.useMemo=function(O,Z){return F.H.useMemo(O,Z)},at.useOptimistic=function(O,Z){return F.H.useOptimistic(O,Z)},at.useReducer=function(O,Z,be){return F.H.useReducer(O,Z,be)},at.useRef=function(O){return F.H.useRef(O)},at.useState=function(O){return F.H.useState(O)},at.useSyncExternalStore=function(O,Z,be){return F.H.useSyncExternalStore(O,Z,be)},at.useTransition=function(){return F.H.useTransition()},at.version="19.2.0",at}var O_;function Au(){return O_||(O_=1,Hd.exports=fM()),Hd.exports}var kt=Au();const dM=rx(kt);var Gd={exports:{}},Qo={},Vd={exports:{}},kd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function hM(){return P_||(P_=1,(function(r){function e(z,G){var ne=z.length;z.push(G);e:for(;0<ne;){var _e=ne-1>>>1,Ee=z[_e];if(0<l(Ee,G))z[_e]=G,z[ne]=Ee,ne=_e;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var G=z[0],ne=z.pop();if(ne!==G){z[0]=ne;e:for(var _e=0,Ee=z.length,O=Ee>>>1;_e<O;){var Z=2*(_e+1)-1,be=z[Z],Ce=Z+1,Fe=z[Ce];if(0>l(be,ne))Ce<Ee&&0>l(Fe,be)?(z[_e]=Fe,z[Ce]=ne,_e=Ce):(z[_e]=be,z[Z]=ne,_e=Z);else if(Ce<Ee&&0>l(Fe,ne))z[_e]=Fe,z[Ce]=ne,_e=Ce;else break e}}return G}function l(z,G){var ne=z.sortIndex-G.sortIndex;return ne!==0?ne:z.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],v=1,x=null,g=3,b=!1,A=!1,N=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var G=i(h);G!==null;){if(G.callback===null)s(h);else if(G.startTime<=z)s(h),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(h)}}function P(z){if(N=!1,w(z),!A)if(i(m)!==null)A=!0,U||(U=!0,K());else{var G=i(h);G!==null&&J(P,G.startTime-z)}}var U=!1,F=-1,E=5,D=-1;function X(){return y?!0:!(r.unstable_now()-D<E)}function V(){if(y=!1,U){var z=r.unstable_now();D=z;var G=!0;try{e:{A=!1,N&&(N=!1,B(F),F=-1),b=!0;var ne=g;try{t:{for(w(z),x=i(m);x!==null&&!(x.expirationTime>z&&X());){var _e=x.callback;if(typeof _e=="function"){x.callback=null,g=x.priorityLevel;var Ee=_e(x.expirationTime<=z);if(z=r.unstable_now(),typeof Ee=="function"){x.callback=Ee,w(z),G=!0;break t}x===i(m)&&s(m),w(z)}else s(m);x=i(m)}if(x!==null)G=!0;else{var O=i(h);O!==null&&J(P,O.startTime-z),G=!1}}break e}finally{x=null,g=ne,b=!1}G=void 0}}finally{G?K():U=!1}}}var K;if(typeof I=="function")K=function(){I(V)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,ge=ue.port2;ue.port1.onmessage=V,K=function(){ge.postMessage(null)}}else K=function(){S(V,0)};function J(z,G){F=S(function(){z(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(z){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var ne=g;g=G;try{return z()}finally{g=ne}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ne=g;g=z;try{return G()}finally{g=ne}},r.unstable_scheduleCallback=function(z,G,ne){var _e=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?_e+ne:_e):ne=_e,z){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ne+Ee,z={id:v++,callback:G,priorityLevel:z,startTime:ne,expirationTime:Ee,sortIndex:-1},ne>_e?(z.sortIndex=ne,e(h,z),i(m)===null&&z===i(h)&&(N?(B(F),F=-1):N=!0,J(P,ne-_e))):(z.sortIndex=Ee,e(m,z),A||b||(A=!0,U||(U=!0,K()))),z},r.unstable_shouldYield=X,r.unstable_wrapCallback=function(z){var G=g;return function(){var ne=g;g=G;try{return z.apply(this,arguments)}finally{g=ne}}}})(kd)),kd}var F_;function pM(){return F_||(F_=1,Vd.exports=hM()),Vd.exports}var Xd={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function mM(){if(I_)return Ln;I_=1;var r=Au();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:h,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,v)},Ln.flushSync=function(m){var h=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=v,s.d.f()}},Ln.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,x=p(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:b}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ln.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Ln.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,x=p(v,h.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ln.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,h){return m(h)},Ln.useFormState=function(m,h,v){return f.H.useFormState(m,h,v)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.2.0",Ln}var B_;function gM(){if(B_)return Xd.exports;B_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Xd.exports=mM(),Xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function _M(){if(z_)return Qo;z_=1;var r=pM(),e=Au(),i=gM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var _=!1,C=u.child;C;){if(C===a){_=!0,a=u,o=d;break}if(C===o){_=!0,o=u,a=d;break}C=C.sibling}if(!_){for(C=d.child;C;){if(C===a){_=!0,a=d,o=u;break}if(C===o){_=!0,o=d,a=u;break}C=C.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),I=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function ge(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case P:return"Suspense";case U:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case I:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ge(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return ge(t(n))}catch{}}return null}var J=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},_e=[],Ee=-1;function O(t){return{current:t}}function Z(t){0>Ee||(t.current=_e[Ee],_e[Ee]=null,Ee--)}function be(t,n){Ee++,_e[Ee]=t.current,t.current=n}var Ce=O(null),Fe=O(null),se=O(null),Se=O(null);function Me(t,n){switch(be(se,n),be(Fe,t),be(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?e_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=e_(n),t=t_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Ce),be(Ce,t)}function He(){Z(Ce),Z(Fe),Z(se)}function nt(t){t.memoizedState!==null&&be(Se,t);var n=Ce.current,a=t_(n,t.type);n!==a&&(be(Fe,t),be(Ce,a))}function Ke(t){Fe.current===t&&(Z(Ce),Z(Fe)),Se.current===t&&(Z(Se),qo._currentValue=ne)}var jt,ut;function _t(t){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+t+ut}var vt=!1;function ft(t,n){if(!t||vt)return"";vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var le=ce}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ce){le=ce}t.call(xe.prototype)}}else{try{throw Error()}catch(ce){le=ce}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&le&&typeof ce.stack=="string")return[ce.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),_=d[0],C=d[1];if(_&&C){var H=_.split(`
`),te=C.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===te.length)for(o=H.length-1,u=te.length-1;1<=o&&0<=u&&H[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==te[u]){var pe=`
`+H[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{vt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function nn(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return _t("Activity");default:return""}}function an(t){try{var n="",a=null;do n+=nn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var sn=Object.prototype.hasOwnProperty,cn=r.unstable_scheduleCallback,qt=r.unstable_cancelCallback,rn=r.unstable_shouldYield,j=r.unstable_requestPaint,zt=r.unstable_now,Ct=r.unstable_getCurrentPriorityLevel,L=r.unstable_ImmediatePriority,M=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,re=r.unstable_LowPriority,de=r.unstable_IdlePriority,Ae=r.log,Ne=r.unstable_setDisableYieldValue,fe=null,he=null;function Re(t){if(typeof Ae=="function"&&Ne(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(fe,t)}catch{}}var Be=Math.clz32?Math.clz32:Ze,Le=Math.log,De=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(Le(t)/De|0)|0}var Qe=256,it=262144,W=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~d,o!==0?u=Te(o):(_&=C,_!==0?u=Te(_):a||(a=C&~t,a!==0&&(u=Te(a))))):(C=o&~d,C!==0?u=Te(C):_!==0?u=Te(_):a||(a=o&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ye(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Kt(t,n,a,o,u,d){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,H=t.expirationTimes,te=t.hiddenUpdates;for(a=_&~a;0<a;){var pe=31-Be(a),xe=1<<pe;C[pe]=0,H[pe]=-1;var le=te[pe];if(le!==null)for(te[pe]=null,pe=0;pe<le.length;pe++){var ce=le[pe];ce!==null&&(ce.lane&=-536870913)}a&=~xe}o!==0&&Ut(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~n))}function Ut(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Kn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Qn(t,n){var a=n&-n;return a=(a&42)!==0?1:so(a),(a&(t.suspendedLanes|n))!==0?0:a}function so(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ro(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function oo(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:E_(t.type))}function Js(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var Pi=Math.random().toString(36).slice(2),dn="__reactFiber$"+Pi,An="__reactProps$"+Pi,Gn="__reactContainer$"+Pi,gs="__reactEvents$"+Pi,vl="__reactListeners$"+Pi,xl="__reactHandles$"+Pi,_s="__reactResources$"+Pi,Na="__reactMarker$"+Pi;function Da(t){delete t[dn],delete t[An],delete t[gs],delete t[vl],delete t[xl]}function Ji(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Gn]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=l_(t);t!==null;){if(a=t[dn])return a;t=l_(t)}return n}t=a,a=t.parentNode}return null}function $i(t){if(t=t[dn]||t[Gn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function vs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ua(t){var n=t[_s];return n||(n=t[_s]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(t){t[Na]=!0}var Sl=new Set,R={};function q(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(R[t]=n,t=0;t<n.length;t++)Sl.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Oe={};function Ge(t){return sn.call(Oe,t)?!0:sn.call(ae,t)?!1:ie.test(t)?Oe[t]=!0:(ae[t]=!0,!1)}function Ue(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,d.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function At(t){if(!t._valueTracker){var n=rt(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function Qt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=rt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Xt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lt=/[\n"\\]/g;function Ot(t){return t.replace(Lt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ze(t,n,a,o,u,d,_,C){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Je(n)):t.value!==""+Je(n)&&(t.value=""+Je(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?dt(t,_,Je(n)):a!=null?dt(t,_,Je(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+Je(C):t.removeAttribute("name")}function Un(t,n,a,o,u,d,_,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){At(t);return}a=a!=null?""+Je(a):"",n=n!=null?""+Je(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),At(t)}function dt(t,n,a){n==="number"&&Xt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Je(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Jn(t,n,a){if(n!=null&&(n=""+Je(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Je(a):""}function Ai(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Je(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),At(t)}function $n(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Pt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ti(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Jt(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Jt(t,d,n[d])}function Dt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),La=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xs(t){return La.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var Pu=null;function Fu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $s=null,er=null;function $p(t){var n=$i(t);if(n&&(t=n.stateNode)){var a=t[An]||null;e:switch(t=n.stateNode,n.type){case"input":if(ze(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[An]||null;if(!u)throw Error(s(90));ze(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Qt(o)}break e;case"textarea":Jn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&xn(t,!!a.multiple,n,!1)}}}var Iu=!1;function em(t,n,a){if(Iu)return t(n,a);Iu=!0;try{var o=t(n);return o}finally{if(Iu=!1,($s!==null||er!==null)&&(oc(),$s&&(n=$s,t=er,er=$s=null,$p(n),t)))for(n=0;n<t.length;n++)$p(t[n])}}function lo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=!1;if(ta)try{var co={};Object.defineProperty(co,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Bu=!1}var Oa=null,zu=null,yl=null;function tm(){if(yl)return yl;var t,n=zu,a=n.length,o,u="value"in Oa?Oa.value:Oa.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[d-o];o++);return yl=u.slice(t,1<o?1-o:void 0)}function Ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function bl(){return!0}function nm(){return!1}function Vn(t){function n(a,o,u,d,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?bl:nm,this.isPropagationStopped=nm,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),n}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Vn(Ss),uo=x({},Ss,{view:0,detail:0}),oS=Vn(uo),Hu,Gu,fo,Al=x({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Hu=t.screenX-fo.screenX,Gu=t.screenY-fo.screenY):Gu=Hu=0,fo=t),Hu)},movementY:function(t){return"movementY"in t?t.movementY:Gu}}),im=Vn(Al),lS=x({},Al,{dataTransfer:0}),cS=Vn(lS),uS=x({},uo,{relatedTarget:0}),Vu=Vn(uS),fS=x({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),dS=Vn(fS),hS=x({},Ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pS=Vn(hS),mS=x({},Ss,{data:0}),am=Vn(mS),gS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_S={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=vS[t])?!!n[t]:!1}function ku(){return xS}var SS=x({},uo,{key:function(t){if(t.key){var n=gS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_S[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(t){return t.type==="keypress"?Ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yS=Vn(SS),MS=x({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=Vn(MS),bS=x({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),ES=Vn(bS),AS=x({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),TS=Vn(AS),RS=x({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CS=Vn(RS),wS=x({},Ss,{newState:0,oldState:0}),NS=Vn(wS),DS=[9,13,27,32],Xu=ta&&"CompositionEvent"in window,ho=null;ta&&"documentMode"in document&&(ho=document.documentMode);var US=ta&&"TextEvent"in window&&!ho,rm=ta&&(!Xu||ho&&8<ho&&11>=ho),om=" ",lm=!1;function cm(t,n){switch(t){case"keyup":return DS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function um(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tr=!1;function LS(t,n){switch(t){case"compositionend":return um(n);case"keypress":return n.which!==32?null:(lm=!0,om);case"textInput":return t=n.data,t===om&&lm?null:t;default:return null}}function OS(t,n){if(tr)return t==="compositionend"||!Xu&&cm(t,n)?(t=tm(),yl=zu=Oa=null,tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rm&&n.locale!=="ko"?null:n.data;default:return null}}var PS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!PS[t.type]:n==="textarea"}function dm(t,n,a,o){$s?er?er.push(o):er=[o]:$s=o,n=pc(n,"onChange"),0<n.length&&(a=new El("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var po=null,mo=null;function FS(t){Y0(t,0)}function Tl(t){var n=vs(t);if(Qt(n))return t}function hm(t,n){if(t==="change")return n}var pm=!1;if(ta){var Wu;if(ta){var qu="oninput"in document;if(!qu){var mm=document.createElement("div");mm.setAttribute("oninput","return;"),qu=typeof mm.oninput=="function"}Wu=qu}else Wu=!1;pm=Wu&&(!document.documentMode||9<document.documentMode)}function gm(){po&&(po.detachEvent("onpropertychange",_m),mo=po=null)}function _m(t){if(t.propertyName==="value"&&Tl(mo)){var n=[];dm(n,mo,t,Fu(t)),em(FS,n)}}function IS(t,n,a){t==="focusin"?(gm(),po=n,mo=a,po.attachEvent("onpropertychange",_m)):t==="focusout"&&gm()}function BS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(mo)}function zS(t,n){if(t==="click")return Tl(n)}function HS(t,n){if(t==="input"||t==="change")return Tl(n)}function GS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:GS;function go(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!sn.call(n,u)||!ei(t[u],n[u]))return!1}return!0}function vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xm(t,n){var a=vm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vm(a)}}function Sm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Sm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ym(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Xt(t.document)}return n}function ju(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var VS=ta&&"documentMode"in document&&11>=document.documentMode,nr=null,Yu=null,_o=null,Zu=!1;function Mm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zu||nr==null||nr!==Xt(o)||(o=nr,"selectionStart"in o&&ju(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),_o&&go(_o,o)||(_o=o,o=pc(Yu,"onSelect"),0<o.length&&(n=new El("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=nr)))}function ys(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ir={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},Ku={},bm={};ta&&(bm=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function Ms(t){if(Ku[t])return Ku[t];if(!ir[t])return t;var n=ir[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in bm)return Ku[t]=n[a];return t}var Em=Ms("animationend"),Am=Ms("animationiteration"),Tm=Ms("animationstart"),kS=Ms("transitionrun"),XS=Ms("transitionstart"),WS=Ms("transitioncancel"),Rm=Ms("transitionend"),Cm=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function Ri(t,n){Cm.set(t,n),q(n,[t])}var Rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],ar=0,Ju=0;function Cl(){for(var t=ar,n=Ju=ar=0;n<t;){var a=di[n];di[n++]=null;var o=di[n];di[n++]=null;var u=di[n];di[n++]=null;var d=di[n];if(di[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}d!==0&&wm(a,u,d)}}function wl(t,n,a,o){di[ar++]=t,di[ar++]=n,di[ar++]=a,di[ar++]=o,Ju|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function $u(t,n,a,o){return wl(t,n,a,o),Nl(t)}function bs(t,n){return wl(t,null,null,n),Nl(t)}function wm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Be(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Nl(t){if(50<zo)throw zo=0,cd=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var sr={};function qS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,a,o){return new qS(t,n,a,o)}function ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function na(t,n){var a=t.alternate;return a===null?(a=ti(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Nm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Dl(t,n,a,o,u,d){var _=0;if(o=t,typeof t=="function")ef(t)&&(_=1);else if(typeof t=="string")_=Qy(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=ti(31,a,n,u),t.elementType=D,t.lanes=d,t;case N:return Es(a.children,u,d,n);case y:_=8,u|=24;break;case S:return t=ti(12,a,n,u|2),t.elementType=S,t.lanes=d,t;case P:return t=ti(13,a,n,u),t.elementType=P,t.lanes=d,t;case U:return t=ti(19,a,n,u),t.elementType=U,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:_=10;break e;case B:_=9;break e;case w:_=11;break e;case F:_=14;break e;case E:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ti(_,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Es(t,n,a,o){return t=ti(7,t,o,n),t.lanes=a,t}function tf(t,n,a){return t=ti(6,t,null,n),t.lanes=a,t}function Dm(t){var n=ti(18,null,null,0);return n.stateNode=t,n}function nf(t,n,a){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Um=new WeakMap;function hi(t,n){if(typeof t=="object"&&t!==null){var a=Um.get(t);return a!==void 0?a:(n={value:t,source:n,stack:an(n)},Um.set(t,n),n)}return{value:t,source:n,stack:an(n)}}var rr=[],or=0,Ul=null,vo=0,pi=[],mi=0,Pa=null,Ii=1,Bi="";function ia(t,n){rr[or++]=vo,rr[or++]=Ul,Ul=t,vo=n}function Lm(t,n,a){pi[mi++]=Ii,pi[mi++]=Bi,pi[mi++]=Pa,Pa=t;var o=Ii;t=Bi;var u=32-Be(o)-1;o&=~(1<<u),a+=1;var d=32-Be(n)+u;if(30<d){var _=u-u%5;d=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Ii=1<<32-Be(n)+u|a<<u|o,Bi=d+t}else Ii=1<<d|a<<u|o,Bi=t}function af(t){t.return!==null&&(ia(t,1),Lm(t,1,0))}function sf(t){for(;t===Ul;)Ul=rr[--or],rr[or]=null,vo=rr[--or],rr[or]=null;for(;t===Pa;)Pa=pi[--mi],pi[mi]=null,Bi=pi[--mi],pi[mi]=null,Ii=pi[--mi],pi[mi]=null}function Om(t,n){pi[mi++]=Ii,pi[mi++]=Bi,pi[mi++]=Pa,Ii=n.id,Bi=n.overflow,Pa=t}var Tn=null,Yt=null,xt=!1,Fa=null,gi=!1,rf=Error(s(519));function Ia(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(hi(n,t)),rf}function Pm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[dn]=t,n[An]=o,a){case"dialog":pt("cancel",n),pt("close",n);break;case"iframe":case"object":case"embed":pt("load",n);break;case"video":case"audio":for(a=0;a<Go.length;a++)pt(Go[a],n);break;case"source":pt("error",n);break;case"img":case"image":case"link":pt("error",n),pt("load",n);break;case"details":pt("toggle",n);break;case"input":pt("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":pt("invalid",n);break;case"textarea":pt("invalid",n),Ai(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||J0(n.textContent,a)?(o.popover!=null&&(pt("beforetoggle",n),pt("toggle",n)),o.onScroll!=null&&pt("scroll",n),o.onScrollEnd!=null&&pt("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||Ia(t,!0)}function Fm(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Tn=Tn.return}}function lr(t){if(t!==Tn)return!1;if(!xt)return Fm(t),xt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ed(t.type,t.memoizedProps)),a=!a),a&&Yt&&Ia(t),Fm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=o_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=o_(t)}else n===27?(n=Yt,Qa(t.type)?(t=wd,wd=null,Yt=t):Yt=n):Yt=Tn?vi(t.stateNode.nextSibling):null;return!0}function As(){Yt=Tn=null,xt=!1}function of(){var t=Fa;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Fa=null),t}function xo(t){Fa===null?Fa=[t]:Fa.push(t)}var lf=O(null),Ts=null,aa=null;function Ba(t,n,a){be(lf,n._currentValue),n._currentValue=a}function sa(t){t._currentValue=lf.current,Z(lf)}function cf(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function uf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var _=u.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=u;for(var H=0;H<n.length;H++)if(C.context===n[H]){d.lanes|=a,C=d.alternate,C!==null&&(C.lanes|=a),cf(d.return,a,t),o||(_=null);break e}d=C.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),cf(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function cr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var C=u.type;ei(u.pendingProps.value,_.value)||(t!==null?t.push(C):t=[C])}}else if(u===Se.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(qo):t=[qo])}u=u.return}t!==null&&uf(n,t,a,o),n.flags|=262144}function Ll(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rs(t){Ts=t,aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Im(Ts,t)}function Ol(t,n){return Ts===null&&Rs(t),Im(t,n)}function Im(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(t===null)throw Error(s(308));aa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else aa=aa.next=n;return a}var jS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},YS=r.unstable_scheduleCallback,ZS=r.unstable_NormalPriority,pn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ff(){return{controller:new jS,data:new Map,refCount:0}}function So(t){t.refCount--,t.refCount===0&&YS(ZS,function(){t.controller.abort()})}var yo=null,df=0,ur=0,fr=null;function KS(t,n){if(yo===null){var a=yo=[];df=0,ur=md(),fr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return df++,n.then(Bm,Bm),n}function Bm(){if(--df===0&&yo!==null){fr!==null&&(fr.status="fulfilled");var t=yo;yo=null,ur=0,fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function QS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var zm=z.S;z.S=function(t,n){M0=zt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&KS(t,n),zm!==null&&zm(t,n)};var Cs=O(null);function hf(){var t=Cs.current;return t!==null?t:Wt.pooledCache}function Pl(t,n){n===null?be(Cs,Cs.current):be(Cs,n.pool)}function Hm(){var t=hf();return t===null?null:{parent:pn._currentValue,pool:t}}var dr=Error(s(460)),pf=Error(s(474)),Fl=Error(s(542)),Il={then:function(){}};function Gm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Vm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Xm(t),t;default:if(typeof n.status=="string")n.then(ea,ea);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Xm(t),t}throw Ns=n,dr}}function ws(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ns=a,dr):a}}var Ns=null;function km(){if(Ns===null)throw Error(s(459));var t=Ns;return Ns=null,t}function Xm(t){if(t===dr||t===Fl)throw Error(s(483))}var hr=null,Mo=0;function Bl(t){var n=Mo;return Mo+=1,hr===null&&(hr=[]),Vm(hr,t,n)}function bo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function zl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Wm(t){function n(Y,k){if(t){var ee=Y.deletions;ee===null?(Y.deletions=[k],Y.flags|=16):ee.push(k)}}function a(Y,k){if(!t)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=na(Y,k),Y.index=0,Y.sibling=null,Y}function d(Y,k,ee){return Y.index=ee,t?(ee=Y.alternate,ee!==null?(ee=ee.index,ee<k?(Y.flags|=67108866,k):ee):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function C(Y,k,ee,ve){return k===null||k.tag!==6?(k=tf(ee,Y.mode,ve),k.return=Y,k):(k=u(k,ee),k.return=Y,k)}function H(Y,k,ee,ve){var $e=ee.type;return $e===N?pe(Y,k,ee.props.children,ve,ee.key):k!==null&&(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===E&&ws($e)===k.type)?(k=u(k,ee.props),bo(k,ee),k.return=Y,k):(k=Dl(ee.type,ee.key,ee.props,null,Y.mode,ve),bo(k,ee),k.return=Y,k)}function te(Y,k,ee,ve){return k===null||k.tag!==4||k.stateNode.containerInfo!==ee.containerInfo||k.stateNode.implementation!==ee.implementation?(k=nf(ee,Y.mode,ve),k.return=Y,k):(k=u(k,ee.children||[]),k.return=Y,k)}function pe(Y,k,ee,ve,$e){return k===null||k.tag!==7?(k=Es(ee,Y.mode,ve,$e),k.return=Y,k):(k=u(k,ee),k.return=Y,k)}function xe(Y,k,ee){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=tf(""+k,Y.mode,ee),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case b:return ee=Dl(k.type,k.key,k.props,null,Y.mode,ee),bo(ee,k),ee.return=Y,ee;case A:return k=nf(k,Y.mode,ee),k.return=Y,k;case E:return k=ws(k),xe(Y,k,ee)}if(J(k)||K(k))return k=Es(k,Y.mode,ee,null),k.return=Y,k;if(typeof k.then=="function")return xe(Y,Bl(k),ee);if(k.$$typeof===I)return xe(Y,Ol(Y,k),ee);zl(Y,k)}return null}function le(Y,k,ee,ve){var $e=k!==null?k.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return $e!==null?null:C(Y,k,""+ee,ve);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case b:return ee.key===$e?H(Y,k,ee,ve):null;case A:return ee.key===$e?te(Y,k,ee,ve):null;case E:return ee=ws(ee),le(Y,k,ee,ve)}if(J(ee)||K(ee))return $e!==null?null:pe(Y,k,ee,ve,null);if(typeof ee.then=="function")return le(Y,k,Bl(ee),ve);if(ee.$$typeof===I)return le(Y,k,Ol(Y,ee),ve);zl(Y,ee)}return null}function ce(Y,k,ee,ve,$e){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Y=Y.get(ee)||null,C(k,Y,""+ve,$e);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case b:return Y=Y.get(ve.key===null?ee:ve.key)||null,H(k,Y,ve,$e);case A:return Y=Y.get(ve.key===null?ee:ve.key)||null,te(k,Y,ve,$e);case E:return ve=ws(ve),ce(Y,k,ee,ve,$e)}if(J(ve)||K(ve))return Y=Y.get(ee)||null,pe(k,Y,ve,$e,null);if(typeof ve.then=="function")return ce(Y,k,ee,Bl(ve),$e);if(ve.$$typeof===I)return ce(Y,k,ee,Ol(k,ve),$e);zl(k,ve)}return null}function We(Y,k,ee,ve){for(var $e=null,Tt=null,je=k,lt=k=0,gt=null;je!==null&&lt<ee.length;lt++){je.index>lt?(gt=je,je=null):gt=je.sibling;var Rt=le(Y,je,ee[lt],ve);if(Rt===null){je===null&&(je=gt);break}t&&je&&Rt.alternate===null&&n(Y,je),k=d(Rt,k,lt),Tt===null?$e=Rt:Tt.sibling=Rt,Tt=Rt,je=gt}if(lt===ee.length)return a(Y,je),xt&&ia(Y,lt),$e;if(je===null){for(;lt<ee.length;lt++)je=xe(Y,ee[lt],ve),je!==null&&(k=d(je,k,lt),Tt===null?$e=je:Tt.sibling=je,Tt=je);return xt&&ia(Y,lt),$e}for(je=o(je);lt<ee.length;lt++)gt=ce(je,Y,lt,ee[lt],ve),gt!==null&&(t&&gt.alternate!==null&&je.delete(gt.key===null?lt:gt.key),k=d(gt,k,lt),Tt===null?$e=gt:Tt.sibling=gt,Tt=gt);return t&&je.forEach(function(ns){return n(Y,ns)}),xt&&ia(Y,lt),$e}function et(Y,k,ee,ve){if(ee==null)throw Error(s(151));for(var $e=null,Tt=null,je=k,lt=k=0,gt=null,Rt=ee.next();je!==null&&!Rt.done;lt++,Rt=ee.next()){je.index>lt?(gt=je,je=null):gt=je.sibling;var ns=le(Y,je,Rt.value,ve);if(ns===null){je===null&&(je=gt);break}t&&je&&ns.alternate===null&&n(Y,je),k=d(ns,k,lt),Tt===null?$e=ns:Tt.sibling=ns,Tt=ns,je=gt}if(Rt.done)return a(Y,je),xt&&ia(Y,lt),$e;if(je===null){for(;!Rt.done;lt++,Rt=ee.next())Rt=xe(Y,Rt.value,ve),Rt!==null&&(k=d(Rt,k,lt),Tt===null?$e=Rt:Tt.sibling=Rt,Tt=Rt);return xt&&ia(Y,lt),$e}for(je=o(je);!Rt.done;lt++,Rt=ee.next())Rt=ce(je,Y,lt,Rt.value,ve),Rt!==null&&(t&&Rt.alternate!==null&&je.delete(Rt.key===null?lt:Rt.key),k=d(Rt,k,lt),Tt===null?$e=Rt:Tt.sibling=Rt,Tt=Rt);return t&&je.forEach(function(lM){return n(Y,lM)}),xt&&ia(Y,lt),$e}function Vt(Y,k,ee,ve){if(typeof ee=="object"&&ee!==null&&ee.type===N&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case b:e:{for(var $e=ee.key;k!==null;){if(k.key===$e){if($e=ee.type,$e===N){if(k.tag===7){a(Y,k.sibling),ve=u(k,ee.props.children),ve.return=Y,Y=ve;break e}}else if(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===E&&ws($e)===k.type){a(Y,k.sibling),ve=u(k,ee.props),bo(ve,ee),ve.return=Y,Y=ve;break e}a(Y,k);break}else n(Y,k);k=k.sibling}ee.type===N?(ve=Es(ee.props.children,Y.mode,ve,ee.key),ve.return=Y,Y=ve):(ve=Dl(ee.type,ee.key,ee.props,null,Y.mode,ve),bo(ve,ee),ve.return=Y,Y=ve)}return _(Y);case A:e:{for($e=ee.key;k!==null;){if(k.key===$e)if(k.tag===4&&k.stateNode.containerInfo===ee.containerInfo&&k.stateNode.implementation===ee.implementation){a(Y,k.sibling),ve=u(k,ee.children||[]),ve.return=Y,Y=ve;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}ve=nf(ee,Y.mode,ve),ve.return=Y,Y=ve}return _(Y);case E:return ee=ws(ee),Vt(Y,k,ee,ve)}if(J(ee))return We(Y,k,ee,ve);if(K(ee)){if($e=K(ee),typeof $e!="function")throw Error(s(150));return ee=$e.call(ee),et(Y,k,ee,ve)}if(typeof ee.then=="function")return Vt(Y,k,Bl(ee),ve);if(ee.$$typeof===I)return Vt(Y,k,Ol(Y,ee),ve);zl(Y,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,k!==null&&k.tag===6?(a(Y,k.sibling),ve=u(k,ee),ve.return=Y,Y=ve):(a(Y,k),ve=tf(ee,Y.mode,ve),ve.return=Y,Y=ve),_(Y)):a(Y,k)}return function(Y,k,ee,ve){try{Mo=0;var $e=Vt(Y,k,ee,ve);return hr=null,$e}catch(je){if(je===dr||je===Fl)throw je;var Tt=ti(29,je,null,Y.mode);return Tt.lanes=ve,Tt.return=Y,Tt}finally{}}}var Ds=Wm(!0),qm=Wm(!1),za=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ga(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(wt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Nl(t),wm(t,null,a),n}return wl(t,o,n,a),Nl(t)}function Eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Kn(t,a)}}function _f(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var vf=!1;function Ao(){if(vf){var t=fr;if(t!==null)throw t}}function To(t,n,a,o){vf=!1;var u=t.updateQueue;za=!1;var d=u.firstBaseUpdate,_=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var H=C,te=H.next;H.next=null,_===null?d=te:_.next=te,_=H;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,C=pe.lastBaseUpdate,C!==_&&(C===null?pe.firstBaseUpdate=te:C.next=te,pe.lastBaseUpdate=H))}if(d!==null){var xe=u.baseState;_=0,pe=te=H=null,C=d;do{var le=C.lane&-536870913,ce=le!==C.lane;if(ce?(mt&le)===le:(o&le)===le){le!==0&&le===ur&&(vf=!0),pe!==null&&(pe=pe.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var We=t,et=C;le=n;var Vt=a;switch(et.tag){case 1:if(We=et.payload,typeof We=="function"){xe=We.call(Vt,xe,le);break e}xe=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=et.payload,le=typeof We=="function"?We.call(Vt,xe,le):We,le==null)break e;xe=x({},xe,le);break e;case 2:za=!0}}le=C.callback,le!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[le]:ce.push(le))}else ce={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},pe===null?(te=pe=ce,H=xe):pe=pe.next=ce,_|=le;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ce=C,C=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);pe===null&&(H=xe),u.baseState=H,u.firstBaseUpdate=te,u.lastBaseUpdate=pe,d===null&&(u.shared.lanes=0),qa|=_,t.lanes=_,t.memoizedState=xe}}function jm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Ym(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)jm(a[t],n)}var pr=O(null),Hl=O(0);function Zm(t,n){t=pa,be(Hl,t),be(pr,n),pa=t|n.baseLanes}function xf(){be(Hl,pa),be(pr,pr.current)}function Sf(){pa=Hl.current,Z(pr),Z(Hl)}var ni=O(null),_i=null;function Va(t){var n=t.alternate;be(un,un.current&1),be(ni,t),_i===null&&(n===null||pr.current!==null||n.memoizedState!==null)&&(_i=t)}function yf(t){be(un,un.current),be(ni,t),_i===null&&(_i=t)}function Km(t){t.tag===22?(be(un,un.current),be(ni,t),_i===null&&(_i=t)):ka()}function ka(){be(un,un.current),be(ni,ni.current)}function ii(t){Z(ni),_i===t&&(_i=null),Z(un)}var un=O(0);function Gl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Rd(a)||Cd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ra=0,ot=null,Ht=null,mn=null,Vl=!1,mr=!1,Us=!1,kl=0,Ro=0,gr=null,JS=0;function on(){throw Error(s(321))}function Mf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function bf(t,n,a,o,u,d){return ra=d,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Lg:Bf,Us=!1,d=a(o,u),Us=!1,mr&&(d=Jm(n,a,o,u)),Qm(t),d}function Qm(t){z.H=No;var n=Ht!==null&&Ht.next!==null;if(ra=0,mn=Ht=ot=null,Vl=!1,Ro=0,gr=null,n)throw Error(s(300));t===null||gn||(t=t.dependencies,t!==null&&Ll(t)&&(gn=!0))}function Jm(t,n,a,o){ot=t;var u=0;do{if(mr&&(gr=null),Ro=0,mr=!1,25<=u)throw Error(s(301));if(u+=1,mn=Ht=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=Og,d=n(a,o)}while(mr);return d}function $S(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Co(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(ot.flags|=1024),n}function Ef(){var t=kl!==0;return kl=0,t}function Af(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Tf(t){if(Vl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Vl=!1}ra=0,mn=Ht=ot=null,mr=!1,Ro=kl=0,gr=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?ot.memoizedState=mn=t:mn=mn.next=t,mn}function fn(){if(Ht===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=mn===null?ot.memoizedState:mn.next;if(n!==null)mn=n,Ht=t;else{if(t===null)throw ot.alternate===null?Error(s(467)):Error(s(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},mn===null?ot.memoizedState=mn=t:mn=mn.next=t}return mn}function Xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(t){var n=Ro;return Ro+=1,gr===null&&(gr=[]),t=Vm(gr,t,n),n=ot,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Lg:Bf),t}function Wl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Co(t);if(t.$$typeof===I)return Rn(t)}throw Error(s(438,String(t)))}function Rf(t){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ot.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Xl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=X;return n.index++,a}function oa(t,n){return typeof n=="function"?n(t):n}function ql(t){var n=fn();return Cf(n,Ht,t)}function Cf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var _=u.next;u.next=d.next,d.next=_}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var C=_=null,H=null,te=n,pe=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(mt&xe)===xe:(ra&xe)===xe){var le=te.revertLane;if(le===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===ur&&(pe=!0);else if((ra&le)===le){te=te.next,le===ur&&(pe=!0);continue}else xe={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(C=H=xe,_=d):H=H.next=xe,ot.lanes|=le,qa|=le;xe=te.action,Us&&a(d,xe),d=te.hasEagerState?te.eagerState:a(d,xe)}else le={lane:xe,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(C=H=le,_=d):H=H.next=le,ot.lanes|=xe,qa|=xe;te=te.next}while(te!==null&&te!==n);if(H===null?_=d:H.next=C,!ei(d,t.memoizedState)&&(gn=!0,pe&&(a=fr,a!==null)))throw a;t.memoizedState=d,t.baseState=_,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function wf(t){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do d=t(d,_.action),_=_.next;while(_!==u);ei(d,n.memoizedState)||(gn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function $m(t,n,a){var o=ot,u=fn(),d=xt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ei((Ht||u).memoizedState,a);if(_&&(u.memoizedState=a,gn=!0),u=u.queue,Uf(ng.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,_r(9,{destroy:void 0},tg.bind(null,o,u,a,n),null),Wt===null)throw Error(s(349));d||(ra&127)!==0||eg(o,n,a)}return a}function eg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=Xl(),ot.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function tg(t,n,a,o){n.value=a,n.getSnapshot=o,ig(n)&&ag(t)}function ng(t,n,a){return a(function(){ig(n)&&ag(t)})}function ig(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function ag(t){var n=bs(t,2);n!==null&&jn(n,t,2)}function Nf(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),Us){Re(!0);try{a()}finally{Re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},n}function sg(t,n,a,o){return t.baseState=a,Cf(t,Ht,typeof o=="function"?o:oa)}function ey(t,n,a,o,u){if(Zl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,rg(n,d)):(d.next=a.next,n.pending=a.next=d)}}function rg(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=z.T,_={};z.T=_;try{var C=a(u,o),H=z.S;H!==null&&H(_,C),og(t,n,C)}catch(te){Df(t,n,te)}finally{d!==null&&_.types!==null&&(d.types=_.types),z.T=d}}else try{d=a(u,o),og(t,n,d)}catch(te){Df(t,n,te)}}function og(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){lg(t,n,o)},function(o){return Df(t,n,o)}):lg(t,n,a)}function lg(t,n,a){n.status="fulfilled",n.value=a,cg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,rg(t,a)))}function Df(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,cg(n),n=n.next;while(n!==o)}t.action=null}function cg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ug(t,n){return n}function fg(t,n){if(xt){var a=Wt.formState;if(a!==null){e:{var o=ot;if(xt){if(Yt){t:{for(var u=Yt,d=gi;u.nodeType!==8;){if(!d){u=null;break t}if(u=vi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Yt=vi(u.nextSibling),o=u.data==="F!";break e}}Ia(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ug,lastRenderedState:n},a.queue=o,a=Ng.bind(null,ot,o),o.dispatch=a,o=Nf(!1),d=If.bind(null,ot,!1,o.queue),o=In(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=ey.bind(null,ot,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function dg(t){var n=fn();return hg(n,Ht,t)}function hg(t,n,a){if(n=Cf(t,n,ug)[0],t=ql(oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Co(n)}catch(_){throw _===dr?Fl:_}else o=n;n=fn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,_r(9,{destroy:void 0},ty.bind(null,u,a),null)),[o,d,t]}function ty(t,n){t.action=n}function pg(t){var n=fn(),a=Ht;if(a!==null)return hg(n,a,t);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function _r(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ot.updateQueue,n===null&&(n=Xl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function mg(){return fn().memoizedState}function jl(t,n,a,o){var u=In();ot.flags|=t,u.memoizedState=_r(1|n,{destroy:void 0},a,o===void 0?null:o)}function Yl(t,n,a,o){var u=fn();o=o===void 0?null:o;var d=u.memoizedState.inst;Ht!==null&&o!==null&&Mf(o,Ht.memoizedState.deps)?u.memoizedState=_r(n,d,a,o):(ot.flags|=t,u.memoizedState=_r(1|n,d,a,o))}function gg(t,n){jl(8390656,8,t,n)}function Uf(t,n){Yl(2048,8,t,n)}function ny(t){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=Xl(),ot.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function _g(t){var n=fn().memoizedState;return ny({ref:n,nextImpl:t}),function(){if((wt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function vg(t,n){return Yl(4,2,t,n)}function xg(t,n){return Yl(4,4,t,n)}function Sg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function yg(t,n,a){a=a!=null?a.concat([t]):null,Yl(4,4,Sg.bind(null,n,t),a)}function Lf(){}function Mg(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Mf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function bg(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Mf(n,o[1]))return o[0];if(o=t(),Us){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o}function Of(t,n,a){return a===void 0||(ra&1073741824)!==0&&(mt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=E0(),ot.lanes|=t,qa|=t,a)}function Eg(t,n,a,o){return ei(a,n)?a:pr.current!==null?(t=Of(t,a,o),ei(t,n)||(gn=!0),t):(ra&42)===0||(ra&1073741824)!==0&&(mt&261930)===0?(gn=!0,t.memoizedState=a):(t=E0(),ot.lanes|=t,qa|=t,n)}function Ag(t,n,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var _=z.T,C={};z.T=C,If(t,!1,n,a);try{var H=u(),te=z.S;if(te!==null&&te(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pe=QS(H,o);wo(t,n,pe,ri(t))}else wo(t,n,o,ri(t))}catch(xe){wo(t,n,{then:function(){},status:"rejected",reason:xe},ri())}finally{G.p=d,_!==null&&C.types!==null&&(_.types=C.types),z.T=_}}function iy(){}function Pf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Tg(t).queue;Ag(t,u,n,ne,a===null?iy:function(){return Rg(t),a(o)})}function Tg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Rg(t){var n=Tg(t);n.next===null&&(n=t.alternate.memoizedState),wo(t,n.next.queue,{},ri())}function Ff(){return Rn(qo)}function Cg(){return fn().memoizedState}function wg(){return fn().memoizedState}function ay(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=Ha(a);var o=Ga(n,t,a);o!==null&&(jn(o,n,a),Eo(o,n,a)),n={cache:ff()},t.payload=n;return}n=n.return}}function sy(t,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Zl(t)?Dg(n,a):(a=$u(t,n,a,o),a!==null&&(jn(a,t,o),Ug(a,n,o)))}function Ng(t,n,a){var o=ri();wo(t,n,a,o)}function wo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zl(t))Dg(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var _=n.lastRenderedState,C=d(_,a);if(u.hasEagerState=!0,u.eagerState=C,ei(C,_))return wl(t,n,u,0),Wt===null&&Cl(),!1}catch{}finally{}if(a=$u(t,n,u,o),a!==null)return jn(a,t,o),Ug(a,n,o),!0}return!1}function If(t,n,a,o){if(o={lane:2,revertLane:md(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Zl(t)){if(n)throw Error(s(479))}else n=$u(t,a,o,2),n!==null&&jn(n,t,2)}function Zl(t){var n=t.alternate;return t===ot||n!==null&&n===ot}function Dg(t,n){mr=Vl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Ug(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Kn(t,a)}}var No={readContext:Rn,use:Wl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};No.useEffectEvent=on;var Lg={readContext:Rn,use:Wl,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:gg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,jl(4194308,4,Sg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return jl(4194308,4,t,n)},useInsertionEffect:function(t,n){jl(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var o=t();if(Us){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=In();if(a!==void 0){var u=a(n);if(Us){Re(!0);try{a(n)}finally{Re(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=sy.bind(null,ot,t),[o.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=Nf(t);var n=t.queue,a=Ng.bind(null,ot,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Lf,useDeferredValue:function(t,n){var a=In();return Of(a,t,n)},useTransition:function(){var t=Nf(!1);return t=Ag.bind(null,ot,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ot,u=In();if(xt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Wt===null)throw Error(s(349));(mt&127)!==0||eg(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,gg(ng.bind(null,o,d,t),[t]),o.flags|=2048,_r(9,{destroy:void 0},tg.bind(null,o,d,a,n),null),a},useId:function(){var t=In(),n=Wt.identifierPrefix;if(xt){var a=Bi,o=Ii;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=kl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=JS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ff,useFormState:fg,useActionState:fg,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=If.bind(null,ot,!0,a),a.dispatch=n,[t,n]},useMemoCache:Rf,useCacheRefresh:function(){return In().memoizedState=ay.bind(null,ot)},useEffectEvent:function(t){var n=In(),a={impl:t};return n.memoizedState=a,function(){if((wt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Bf={readContext:Rn,use:Wl,useCallback:Mg,useContext:Rn,useEffect:Uf,useImperativeHandle:yg,useInsertionEffect:vg,useLayoutEffect:xg,useMemo:bg,useReducer:ql,useRef:mg,useState:function(){return ql(oa)},useDebugValue:Lf,useDeferredValue:function(t,n){var a=fn();return Eg(a,Ht.memoizedState,t,n)},useTransition:function(){var t=ql(oa)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Co(t),n]},useSyncExternalStore:$m,useId:Cg,useHostTransitionStatus:Ff,useFormState:dg,useActionState:dg,useOptimistic:function(t,n){var a=fn();return sg(a,Ht,t,n)},useMemoCache:Rf,useCacheRefresh:wg};Bf.useEffectEvent=_g;var Og={readContext:Rn,use:Wl,useCallback:Mg,useContext:Rn,useEffect:Uf,useImperativeHandle:yg,useInsertionEffect:vg,useLayoutEffect:xg,useMemo:bg,useReducer:wf,useRef:mg,useState:function(){return wf(oa)},useDebugValue:Lf,useDeferredValue:function(t,n){var a=fn();return Ht===null?Of(a,t,n):Eg(a,Ht.memoizedState,t,n)},useTransition:function(){var t=wf(oa)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Co(t),n]},useSyncExternalStore:$m,useId:Cg,useHostTransitionStatus:Ff,useFormState:pg,useActionState:pg,useOptimistic:function(t,n){var a=fn();return Ht!==null?sg(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:wg};Og.useEffectEvent=_g;function zf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Hf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ri(),u=Ha(o);u.payload=n,a!=null&&(u.callback=a),n=Ga(t,u,o),n!==null&&(jn(n,t,o),Eo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ri(),u=Ha(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ga(t,u,o),n!==null&&(jn(n,t,o),Eo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),o=Ha(a);o.tag=2,n!=null&&(o.callback=n),n=Ga(t,o,a),n!==null&&(jn(n,t,a),Eo(n,t,a))}};function Pg(t,n,a,o,u,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,_):n.prototype&&n.prototype.isPureReactComponent?!go(a,o)||!go(u,d):!0}function Fg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Hf.enqueueReplaceState(n,n.state,null)}function Ls(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Ig(t){Rl(t)}function Bg(t){console.error(t)}function zg(t){Rl(t)}function Kl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Hg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Gf(t,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Kl(t,n)},a}function Gg(t){return t=Ha(t),t.tag=3,t}function Vg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){Hg(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Hg(n,a,o),typeof u!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function ry(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&cr(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?lc():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),dd(t,o,u)),!1;case 22:return a.flags|=65536,o===Il?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),dd(t,o,u)),!1}throw Error(s(435,a.tag))}return dd(t,o,u),lc(),!1}if(xt)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==rf&&(t=Error(s(422),{cause:o}),xo(hi(t,a)))):(o!==rf&&(n=Error(s(423),{cause:o}),xo(hi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=hi(o,a),u=Gf(t.stateNode,o,u),_f(t,u),ln!==4&&(ln=2)),!1;var d=Error(s(520),{cause:o});if(d=hi(d,a),Bo===null?Bo=[d]:Bo.push(d),ln!==4&&(ln=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Gf(a.stateNode,o,t),_f(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ja===null||!ja.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Gg(u),Vg(u,t,a,o),_f(a,u),!1}a=a.return}while(a!==null);return!1}var Vf=Error(s(461)),gn=!1;function Cn(t,n,a,o){n.child=t===null?qm(n,null,a,o):Ds(n,t.child,a,o)}function kg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var _={};for(var C in o)C!=="ref"&&(_[C]=o[C])}else _=o;return Rs(n),o=bf(t,n,a,_,d,u),C=Ef(),t!==null&&!gn?(Af(t,n,u),la(t,n,u)):(xt&&C&&af(n),n.flags|=1,Cn(t,n,o,u),n.child)}function Xg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!ef(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Wg(t,n,d,o,u)):(t=Dl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Kf(t,u)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:go,a(_,o)&&t.ref===n.ref)return la(t,n,u)}return n.flags|=1,t=na(d,o),t.ref=n.ref,t.return=n,n.child=t}function Wg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(go(d,o)&&t.ref===n.ref)if(gn=!1,n.pendingProps=o=d,Kf(t,u))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,la(t,n,u)}return kf(t,n,a,o,u)}function qg(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return jg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pl(n,d!==null?d.cachePool:null),d!==null?Zm(n,d):xf(),Km(n);else return o=n.lanes=536870912,jg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Pl(n,d.cachePool),Zm(n,d),ka(),n.memoizedState=null):(t!==null&&Pl(n,null),xf(),ka());return Cn(t,n,u,a),n.child}function Do(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function jg(t,n,a,o,u){var d=hf();return d=d===null?null:{parent:pn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Pl(n,null),xf(),Km(n),t!==null&&cr(t,n,o,!0),n.childLanes=u,null}function Ql(t,n){return n=$l({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Yg(t,n,a){return Ds(n,t.child,null,a),t=Ql(n,n.pendingProps),t.flags|=2,ii(n),n.memoizedState=null,t}function oy(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xt){if(o.mode==="hidden")return t=Ql(n,o),n.lanes=536870912,Do(null,t);if(yf(n),(t=Yt)?(t=r_(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Pa!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=Dm(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw Ia(n);return n.lanes=536870912,null}return Ql(n,o)}var d=t.memoizedState;if(d!==null){var _=d.dehydrated;if(yf(n),u)if(n.flags&256)n.flags&=-257,n=Yg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(gn||cr(t,n,a,!1),u=(a&t.childLanes)!==0,gn||u){if(o=Wt,o!==null&&(_=Qn(o,a),_!==0&&_!==d.retryLane))throw d.retryLane=_,bs(t,_),jn(o,t,_),Vf;lc(),n=Yg(t,n,a)}else t=d.treeContext,Yt=vi(_.nextSibling),Tn=n,xt=!0,Fa=null,gi=!1,t!==null&&Om(n,t),n=Ql(n,o),n.flags|=4096;return n}return t=na(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Jl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function kf(t,n,a,o,u){return Rs(n),a=bf(t,n,a,o,void 0,u),o=Ef(),t!==null&&!gn?(Af(t,n,u),la(t,n,u)):(xt&&o&&af(n),n.flags|=1,Cn(t,n,a,u),n.child)}function Zg(t,n,a,o,u,d){return Rs(n),n.updateQueue=null,a=Jm(n,o,a,u),Qm(t),o=Ef(),t!==null&&!gn?(Af(t,n,d),la(t,n,d)):(xt&&o&&af(n),n.flags|=1,Cn(t,n,a,d),n.child)}function Kg(t,n,a,o,u){if(Rs(n),n.stateNode===null){var d=sr,_=a.contextType;typeof _=="object"&&_!==null&&(d=Rn(_)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Hf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},mf(n),_=a.contextType,d.context=typeof _=="object"&&_!==null?Rn(_):sr,d.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(zf(n,a,_,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Hf.enqueueReplaceState(d,d.state,null),To(n,o,d,u),Ao(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var C=n.memoizedProps,H=Ls(a,C);d.props=H;var te=d.context,pe=a.contextType;_=sr,typeof pe=="object"&&pe!==null&&(_=Rn(pe));var xe=a.getDerivedStateFromProps;pe=typeof xe=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,pe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||te!==_)&&Fg(n,d,o,_),za=!1;var le=n.memoizedState;d.state=le,To(n,o,d,u),Ao(),te=n.memoizedState,C||le!==te||za?(typeof xe=="function"&&(zf(n,a,xe,o),te=n.memoizedState),(H=za||Pg(n,a,H,o,le,te,_))?(pe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),d.props=o,d.state=te,d.context=_,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,gf(t,n),_=n.memoizedProps,pe=Ls(a,_),d.props=pe,xe=n.pendingProps,le=d.context,te=a.contextType,H=sr,typeof te=="object"&&te!==null&&(H=Rn(te)),C=a.getDerivedStateFromProps,(te=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==xe||le!==H)&&Fg(n,d,o,H),za=!1,le=n.memoizedState,d.state=le,To(n,o,d,u),Ao();var ce=n.memoizedState;_!==xe||le!==ce||za||t!==null&&t.dependencies!==null&&Ll(t.dependencies)?(typeof C=="function"&&(zf(n,a,C,o),ce=n.memoizedState),(pe=za||Pg(n,a,pe,o,le,ce,H)||t!==null&&t.dependencies!==null&&Ll(t.dependencies))?(te||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ce,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ce,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),d.props=o,d.state=ce,d.context=H,o=pe):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Jl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Ds(n,t.child,null,u),n.child=Ds(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=la(t,n,u),t}function Qg(t,n,a,o){return As(),n.flags|=256,Cn(t,n,a,o),n.child}var Xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wf(t){return{baseLanes:t,cachePool:Hm()}}function qf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=si),t}function Jg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(xt){if(u?Va(n):ka(),(t=Yt)?(t=r_(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Pa!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=Dm(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw Ia(n);return Cd(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(ka(),u=n.mode,C=$l({mode:"hidden",children:C},u),o=Es(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Wf(a),o.childLanes=qf(t,_,a),n.memoizedState=Xf,Do(null,o)):(Va(n),jf(n,C))}var H=t.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(d)n.flags&256?(Va(n),n.flags&=-257,n=Yf(t,n,a)):n.memoizedState!==null?(ka(),n.child=t.child,n.flags|=128,n=null):(ka(),C=o.fallback,u=n.mode,o=$l({mode:"visible",children:o.children},u),C=Es(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Ds(n,t.child,null,a),o=n.child,o.memoizedState=Wf(a),o.childLanes=qf(t,_,a),n.memoizedState=Xf,n=Do(null,o));else if(Va(n),Cd(C)){if(_=C.nextSibling&&C.nextSibling.dataset,_)var te=_.dgst;_=te,o=Error(s(419)),o.stack="",o.digest=_,xo({value:o,source:null,stack:null}),n=Yf(t,n,a)}else if(gn||cr(t,n,a,!1),_=(a&t.childLanes)!==0,gn||_){if(_=Wt,_!==null&&(o=Qn(_,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,bs(t,o),jn(_,t,o),Vf;Rd(C)||lc(),n=Yf(t,n,a)}else Rd(C)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Yt=vi(C.nextSibling),Tn=n,xt=!0,Fa=null,gi=!1,t!==null&&Om(n,t),n=jf(n,o.children),n.flags|=4096);return n}return u?(ka(),C=o.fallback,u=n.mode,H=t.child,te=H.sibling,o=na(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,te!==null?C=na(te,C):(C=Es(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Do(null,o),o=n.child,C=t.child.memoizedState,C===null?C=Wf(a):(u=C.cachePool,u!==null?(H=pn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Hm(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=qf(t,_,a),n.memoizedState=Xf,Do(t.child,o)):(Va(n),a=t.child,t=a.sibling,a=na(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function jf(t,n){return n=$l({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function $l(t,n){return t=ti(22,t,null,n),t.lanes=0,t}function Yf(t,n,a){return Ds(n,t.child,null,a),t=jf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function $g(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),cf(t.return,n,a)}function Zf(t,n,a,o,u,d){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=d)}function e0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var _=un.current,C=(_&2)!==0;if(C?(_=_&1|2,n.flags|=128):_&=1,be(un,_),Cn(t,n,o,a),o=xt?vo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$g(t,a,n);else if(t.tag===19)$g(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Gl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Zf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Gl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Zf(n,!0,a,null,d,o);break;case"together":Zf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function la(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(cr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=na(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=na(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Kf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ll(t)))}function ly(t,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),Ba(n,pn,t.memoizedState.cache),As();break;case 27:case 5:nt(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,yf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Jg(t,n,a):(Va(n),t=la(t,n,a),t!==null?t.sibling:null);Va(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(cr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return e0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(un,un.current),o)break;return null;case 22:return n.lanes=0,qg(t,n,a,n.pendingProps);case 24:Ba(n,pn,t.memoizedState.cache)}return la(t,n,a)}function t0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!Kf(t,a)&&(n.flags&128)===0)return gn=!1,ly(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,xt&&(n.flags&1048576)!==0&&Lm(n,vo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=ws(n.elementType),n.type=t,typeof t=="function")ef(t)?(o=Ls(t,o),n.tag=1,n=Kg(null,n,t,o,a)):(n.tag=0,n=kf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=kg(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=Xg(null,n,t,o,a);break e}}throw n=ge(t)||t,Error(s(306,n,""))}}return n;case 0:return kf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ls(o,n.pendingProps),Kg(t,n,o,u,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,gf(t,n),To(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ba(n,pn,o),o!==d.cache&&uf(n,[pn],a,!0),Ao(),o=_.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Qg(t,n,o,a);break e}else if(o!==u){u=hi(Error(s(424)),n),xo(u),n=Qg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=vi(t.firstChild),Tn=n,xt=!0,Fa=null,gi=!0,a=qm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(As(),o===u){n=la(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return Jl(t,n),t===null?(a=d_(n.type,null,n.pendingProps,null))?n.memoizedState=a:xt||(a=n.type,t=n.pendingProps,o=mc(se.current).createElement(a),o[dn]=n,o[An]=t,wn(o,a,t),hn(o),n.stateNode=o):n.memoizedState=d_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&xt&&(o=n.stateNode=c_(n.type,n.pendingProps,se.current),Tn=n,gi=!0,u=Yt,Qa(n.type)?(wd=u,Yt=vi(o.firstChild)):Yt=u),Cn(t,n,n.pendingProps.children,a),Jl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xt&&((u=o=Yt)&&(o=By(o,n.type,n.pendingProps,gi),o!==null?(n.stateNode=o,Tn=n,Yt=vi(o.firstChild),gi=!1,u=!0):u=!1),u||Ia(n)),nt(n),u=n.type,d=n.pendingProps,_=t!==null?t.memoizedProps:null,o=d.children,Ed(u,d)?o=null:_!==null&&Ed(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=bf(t,n,$S,null,null,a),qo._currentValue=u),Jl(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&xt&&((t=a=Yt)&&(a=zy(a,n.pendingProps,gi),a!==null?(n.stateNode=a,Tn=n,Yt=null,t=!0):t=!1),t||Ia(n)),null;case 13:return Jg(t,n,a);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ds(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return kg(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ba(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Rs(n),u=Rn(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return Xg(t,n,n.type,n.pendingProps,a);case 15:return Wg(t,n,n.type,n.pendingProps,a);case 19:return e0(t,n,a);case 31:return oy(t,n,a);case 22:return qg(t,n,a,n.pendingProps);case 24:return Rs(n),o=Rn(pn),t===null?(u=hf(),u===null&&(u=Wt,d=ff(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},mf(n),Ba(n,pn,u)):((t.lanes&a)!==0&&(gf(t,n),To(n,null,null,a),Ao()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ba(n,pn,o)):(o=d.cache,Ba(n,pn,o),o!==u.cache&&uf(n,[pn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ca(t){t.flags|=4}function Qf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(C0())t.flags|=8192;else throw Ns=Il,pf}else t.flags&=-16777217}function n0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!__(n))if(C0())t.flags|=8192;else throw Ns=Il,pf}function ec(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ye():536870912,t.lanes|=n,yr|=n)}function Uo(t,n){if(!xt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function cy(t,n,a){var o=n.pendingProps;switch(sf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),sa(pn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(lr(n)?ca(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,of())),Zt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ca(n),d!==null?(Zt(n),n0(n,d)):(Zt(n),Qf(n,u,null,o,a))):d?d!==t.memoizedState?(ca(n),Zt(n),n0(n,d)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ca(n),Zt(n),Qf(n,u,t,o,a)),null;case 27:if(Ke(n),a=se.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}t=Ce.current,lr(n)?Pm(n):(t=c_(u,o,a),n.stateNode=t,ca(n))}return Zt(n),null;case 5:if(Ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}if(d=Ce.current,lr(n))Pm(n);else{var _=mc(se.current);switch(d){case 1:d=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=_.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}d[dn]=n,d[An]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)d.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=d;e:switch(wn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ca(n)}}return Zt(n),Qf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=se.current,lr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||J0(t.nodeValue,a)),t||Ia(n,!0)}else t=mc(t).createTextNode(o),t[dn]=n,n.stateNode=t}return Zt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=lr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[dn]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else a=of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Zt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=lr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[dn]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),ec(n,n.updateQueue),Zt(n),null);case 4:return He(),t===null&&xd(n.stateNode.containerInfo),Zt(n),null;case 10:return sa(n.type),Zt(n),null;case 19:if(Z(un),o=n.memoizedState,o===null)return Zt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Uo(o,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Gl(t),d!==null){for(n.flags|=128,Uo(o,!1),t=d.updateQueue,n.updateQueue=t,ec(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Nm(a,t),a=a.sibling;return be(un,un.current&1|2),xt&&ia(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&zt()>sc&&(n.flags|=128,u=!0,Uo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Gl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,ec(n,t),Uo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!xt)return Zt(n),null}else 2*zt()-o.renderingStartTime>sc&&a!==536870912&&(n.flags|=128,u=!0,Uo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=zt(),t.sibling=null,a=un.current,be(un,u?a&1|2:a&1),xt&&ia(n,o.treeForkCount),t):(Zt(n),null);case 22:case 23:return ii(n),Sf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&ec(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(Cs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),sa(pn),Zt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function uy(t,n){switch(sf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return sa(pn),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ke(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(s(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(un),null;case 4:return He(),null;case 10:return sa(n.type),null;case 22:case 23:return ii(n),Sf(),t!==null&&Z(Cs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return sa(pn),null;case 25:return null;default:return null}}function i0(t,n){switch(sf(n),n.tag){case 3:sa(pn),He();break;case 26:case 27:case 5:Ke(n);break;case 4:He();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:Z(un);break;case 10:sa(n.type);break;case 22:case 23:ii(n),Sf(),t!==null&&Z(Cs);break;case 24:sa(pn)}}function Lo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,_=a.inst;o=d(),_.destroy=o}a=a.next}while(a!==u)}}catch(C){It(n,n.return,C)}}function Xa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var _=o.inst,C=_.destroy;if(C!==void 0){_.destroy=void 0,u=n;var H=a,te=C;try{te()}catch(pe){It(u,H,pe)}}}o=o.next}while(o!==d)}}catch(pe){It(n,n.return,pe)}}function a0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Ym(n,a)}catch(o){It(t,t.return,o)}}}function s0(t,n,a){a.props=Ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){It(t,n,o)}}function Oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){It(t,n,u)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){It(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){It(t,n,u)}else a.current=null}function r0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){It(t,t.return,u)}}function Jf(t,n,a){try{var o=t.stateNode;Uy(o,t.type,a,n),o[An]=n}catch(u){It(t,t.return,u)}}function o0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function $f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||o0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ed(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&Qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ed(t,n,a),t=t.sibling;t!==null;)ed(t,n,a),t=t.sibling}function tc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(tc(t,n,a),t=t.sibling;t!==null;)tc(t,n,a),t=t.sibling}function l0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[dn]=t,n[An]=a}catch(d){It(t,t.return,d)}}var ua=!1,_n=!1,td=!1,c0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function fy(t,n){if(t=t.containerInfo,Md=Mc,t=ym(t),ju(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,C=-1,H=-1,te=0,pe=0,xe=t,le=null;t:for(;;){for(var ce;xe!==a||u!==0&&xe.nodeType!==3||(C=_+u),xe!==d||o!==0&&xe.nodeType!==3||(H=_+o),xe.nodeType===3&&(_+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)le=xe,xe=ce;for(;;){if(xe===t)break t;if(le===a&&++te===u&&(C=_),le===d&&++pe===o&&(H=_),(ce=xe.nextSibling)!==null)break;xe=le,le=xe.parentNode}xe=ce}a=C===-1||H===-1?null:{start:C,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(bd={focusedElem:t,selectionRange:a},Mc=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var We=Ls(a.type,u);t=o.getSnapshotBeforeUpdate(We,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){It(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Td(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Td(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function u0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:da(t,a),o&4&&Lo(5,a);break;case 1:if(da(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){It(a,a.return,_)}else{var u=Ls(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){It(a,a.return,_)}}o&64&&a0(a),o&512&&Oo(a,a.return);break;case 3:if(da(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ym(t,n)}catch(_){It(a,a.return,_)}}break;case 27:n===null&&o&4&&l0(a);case 26:case 5:da(t,a),n===null&&o&4&&r0(a),o&512&&Oo(a,a.return);break;case 12:da(t,a);break;case 31:da(t,a),o&4&&h0(t,a);break;case 13:da(t,a),o&4&&p0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Sy.bind(null,a),Hy(t,a))));break;case 22:if(o=a.memoizedState!==null||ua,!o){n=n!==null&&n.memoizedState!==null||_n,u=ua;var d=_n;ua=o,(_n=n)&&!d?ha(t,a,(a.subtreeFlags&8772)!==0):da(t,a),ua=u,_n=d}break;case 30:break;default:da(t,a)}}function f0(t){var n=t.alternate;n!==null&&(t.alternate=null,f0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Da(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,kn=!1;function fa(t,n,a){for(a=a.child;a!==null;)d0(t,n,a),a=a.sibling}function d0(t,n,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:_n||zi(a,n),fa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_n||zi(a,n);var o=$t,u=kn;Qa(a.type)&&($t=a.stateNode,kn=!1),fa(t,n,a),ko(a.stateNode),$t=o,kn=u;break;case 5:_n||zi(a,n);case 6:if(o=$t,u=kn,$t=null,fa(t,n,a),$t=o,kn=u,$t!==null)if(kn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(d){It(a,n,d)}else try{$t.removeChild(a.stateNode)}catch(d){It(a,n,d)}break;case 18:$t!==null&&(kn?(t=$t,a_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),wr(t)):a_($t,a.stateNode));break;case 4:o=$t,u=kn,$t=a.stateNode.containerInfo,kn=!0,fa(t,n,a),$t=o,kn=u;break;case 0:case 11:case 14:case 15:Xa(2,a,n),_n||Xa(4,a,n),fa(t,n,a);break;case 1:_n||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&s0(a,n,o)),fa(t,n,a);break;case 21:fa(t,n,a);break;case 22:_n=(o=_n)||a.memoizedState!==null,fa(t,n,a),_n=o;break;default:fa(t,n,a)}}function h0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{wr(t)}catch(a){It(n,n.return,a)}}}function p0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wr(t)}catch(a){It(n,n.return,a)}}function dy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new c0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new c0),n;default:throw Error(s(435,t.tag))}}function nc(t,n){var a=dy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=yy.bind(null,t,o);o.then(u,u)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,_=n,C=_;e:for(;C!==null;){switch(C.tag){case 27:if(Qa(C.type)){$t=C.stateNode,kn=!1;break e}break;case 5:$t=C.stateNode,kn=!1;break e;case 3:case 4:$t=C.stateNode.containerInfo,kn=!0;break e}C=C.return}if($t===null)throw Error(s(160));d0(d,_,u),$t=null,kn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)m0(n,t),n=n.sibling}var Ci=null;function m0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),o&4&&(Xa(3,t,t.return),Lo(3,t),Xa(5,t,t.return));break;case 1:Xn(n,t),Wn(t),o&512&&(_n||a===null||zi(a,a.return)),o&64&&ua&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ci;if(Xn(n,t),Wn(t),o&512&&(_n||a===null||zi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Na]||d[dn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),wn(d,o,a),d[dn]=t,hn(d),o=d;break e;case"link":var _=m_("link","href",u).get(o+(a.href||""));if(_){for(var C=0;C<_.length;C++)if(d=_[C],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(C,1);break t}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;case"meta":if(_=m_("meta","content",u).get(o+(a.content||""))){for(C=0;C<_.length;C++)if(d=_[C],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(C,1);break t}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[dn]=t,hn(d),o=d}t.stateNode=o}else g_(u,t.type,t.stateNode);else t.stateNode=p_(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?g_(u,t.type,t.stateNode):p_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Jf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),o&512&&(_n||a===null||zi(a,a.return)),a!==null&&o&4&&Jf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),o&512&&(_n||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{$n(u,"")}catch(We){It(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Jf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(td=!0);break;case 6:if(Xn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){It(t,t.return,We)}}break;case 3:if(vc=null,u=Ci,Ci=gc(n.containerInfo),Xn(n,t),Ci=u,Wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{wr(n.containerInfo)}catch(We){It(t,t.return,We)}td&&(td=!1,g0(t));break;case 4:o=Ci,Ci=gc(t.stateNode.containerInfo),Xn(n,t),Wn(t),Ci=o;break;case 12:Xn(n,t),Wn(t);break;case 31:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,nc(t,o)));break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ac=zt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,nc(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,te=ua,pe=_n;if(ua=te||u,_n=pe||H,Xn(n,t),_n=pe,ua=te,Wn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ua||_n||Os(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{C=H.stateNode;var xe=H.memoizedProps.style,le=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(We){It(H,H.return,We)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(We){It(H,H.return,We)}}}else if(n.tag===18){if(a===null){H=n;try{var ce=H.stateNode;u?s_(ce,!0):s_(H.stateNode,!1)}catch(We){It(H,H.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,nc(t,a))));break;case 19:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,nc(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(o0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=$f(t);tc(t,d,u);break;case 5:var _=a.stateNode;a.flags&32&&($n(_,""),a.flags&=-33);var C=$f(t);tc(t,C,_);break;case 3:case 4:var H=a.stateNode.containerInfo,te=$f(t);ed(t,te,H);break;default:throw Error(s(161))}}catch(pe){It(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function g0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;g0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)u0(t,n.alternate,n),n=n.sibling}function Os(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),Os(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&s0(n,n.return,a),Os(n);break;case 27:ko(n.stateNode);case 26:case 5:zi(n,n.return),Os(n);break;case 22:n.memoizedState===null&&Os(n);break;case 30:Os(n);break;default:Os(n)}t=t.sibling}}function ha(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,_=d.flags;switch(d.tag){case 0:case 11:case 15:ha(u,d,a),Lo(4,d);break;case 1:if(ha(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){It(o,o.return,te)}if(o=d,u=o.updateQueue,u!==null){var C=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)jm(H[u],C)}catch(te){It(o,o.return,te)}}a&&_&64&&a0(d),Oo(d,d.return);break;case 27:l0(d);case 26:case 5:ha(u,d,a),a&&o===null&&_&4&&r0(d),Oo(d,d.return);break;case 12:ha(u,d,a);break;case 31:ha(u,d,a),a&&_&4&&h0(u,d);break;case 13:ha(u,d,a),a&&_&4&&p0(u,d);break;case 22:d.memoizedState===null&&ha(u,d,a),Oo(d,d.return);break;case 30:break;default:ha(u,d,a)}n=n.sibling}}function nd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&So(a))}function id(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&So(t))}function wi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_0(t,n,a,o),n=n.sibling}function _0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(t,n,a,o),u&2048&&Lo(9,n);break;case 1:wi(t,n,a,o);break;case 3:wi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&So(t)));break;case 12:if(u&2048){wi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,_=d.id,C=d.onPostCommit;typeof C=="function"&&C(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){It(n,n.return,H)}}else wi(t,n,a,o);break;case 31:wi(t,n,a,o);break;case 13:wi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,_=n.alternate,n.memoizedState!==null?d._visibility&2?wi(t,n,a,o):Po(t,n):d._visibility&2?wi(t,n,a,o):(d._visibility|=2,vr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&nd(_,n);break;case 24:wi(t,n,a,o),u&2048&&id(n.alternate,n);break;default:wi(t,n,a,o)}}function vr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,_=n,C=a,H=o,te=_.flags;switch(_.tag){case 0:case 11:case 15:vr(d,_,C,H,u),Lo(8,_);break;case 23:break;case 22:var pe=_.stateNode;_.memoizedState!==null?pe._visibility&2?vr(d,_,C,H,u):Po(d,_):(pe._visibility|=2,vr(d,_,C,H,u)),u&&te&2048&&nd(_.alternate,_);break;case 24:vr(d,_,C,H,u),u&&te&2048&&id(_.alternate,_);break;default:vr(d,_,C,H,u)}n=n.sibling}}function Po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Po(a,o),u&2048&&nd(o.alternate,o);break;case 24:Po(a,o),u&2048&&id(o.alternate,o);break;default:Po(a,o)}n=n.sibling}}var Fo=8192;function xr(t,n,a){if(t.subtreeFlags&Fo)for(t=t.child;t!==null;)v0(t,n,a),t=t.sibling}function v0(t,n,a){switch(t.tag){case 26:xr(t,n,a),t.flags&Fo&&t.memoizedState!==null&&Jy(a,Ci,t.memoizedState,t.memoizedProps);break;case 5:xr(t,n,a);break;case 3:case 4:var o=Ci;Ci=gc(t.stateNode.containerInfo),xr(t,n,a),Ci=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Fo,Fo=16777216,xr(t,n,a),Fo=o):xr(t,n,a));break;default:xr(t,n,a)}}function x0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Io(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,y0(o,t)}x0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)S0(t),t=t.sibling}function S0(t){switch(t.tag){case 0:case 11:case 15:Io(t),t.flags&2048&&Xa(9,t,t.return);break;case 3:Io(t);break;case 12:Io(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ic(t)):Io(t);break;default:Io(t)}}function ic(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,y0(o,t)}x0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),ic(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ic(n));break;default:ic(n)}t=t.sibling}}function y0(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:So(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=t;bn!==null;){o=bn;var u=o.sibling,d=o.return;if(f0(o),o===a){bn=null;break e}if(u!==null){u.return=d,bn=u;break e}bn=d}}}var hy={getCacheForType:function(t){var n=Rn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(pn).controller.signal}},py=typeof WeakMap=="function"?WeakMap:Map,wt=0,Wt=null,ht=null,mt=0,Ft=0,ai=null,Wa=!1,Sr=!1,ad=!1,pa=0,ln=0,qa=0,Ps=0,sd=0,si=0,yr=0,Bo=null,qn=null,rd=!1,ac=0,M0=0,sc=1/0,rc=null,ja=null,Sn=0,Ya=null,Mr=null,ma=0,od=0,ld=null,b0=null,zo=0,cd=null;function ri(){return(wt&2)!==0&&mt!==0?mt&-mt:z.T!==null?md():oo()}function E0(){if(si===0)if((mt&536870912)===0||xt){var t=it;it<<=1,(it&3932160)===0&&(it=262144),si=t}else si=536870912;return t=ni.current,t!==null&&(t.flags|=32),si}function jn(t,n,a){(t===Wt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(br(t,0),Za(t,mt,si,!1)),Ve(t,a),((wt&2)===0||t!==Wt)&&(t===Wt&&((wt&2)===0&&(Ps|=a),ln===4&&Za(t,mt,si,!1)),Hi(t))}function A0(t,n,a){if((wt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=o?_y(t,n):fd(t,n,!0),d=o;do{if(u===0){Sr&&!o&&Za(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!my(a)){u=fd(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var C=t;u=Bo;var H=C.current.memoizedState.isDehydrated;if(H&&(br(C,_).flags|=256),_=fd(C,_,!1),_!==2){if(ad&&!H){C.errorRecoveryDisabledLanes|=d,Ps|=d,u=4;break e}d=qn,qn=u,d!==null&&(qn===null?qn=d:qn.push.apply(qn,d))}u=_}if(d=!1,u!==2)continue}}if(u===1){br(t,0),Za(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(o,n,si,!Wa);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ac+300-zt(),10<u)){if(Za(o,n,si,!Wa),me(o,0,!0)!==0)break e;ma=n,o.timeoutHandle=n_(T0.bind(null,o,a,qn,rc,rd,n,si,Ps,yr,Wa,d,"Throttled",-0,0),u);break e}T0(o,a,qn,rc,rd,n,si,Ps,yr,Wa,d,null,-0,0)}}break}while(!0);Hi(t)}function T0(t,n,a,o,u,d,_,C,H,te,pe,xe,le,ce){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},v0(n,d,xe);var We=(d&62914560)===d?ac-zt():(d&4194048)===d?M0-zt():0;if(We=$y(xe,We),We!==null){ma=d,t.cancelPendingCommit=We(O0.bind(null,t,n,d,a,o,u,_,C,H,pe,xe,null,le,ce)),Za(t,d,_,!te);return}}O0(t,n,d,a,o,u,_,C,H)}function my(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!ei(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(t,n,a,o){n&=~sd,n&=~Ps,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Be(u),_=1<<d;o[d]=-1,u&=~_}a!==0&&Ut(t,a,n)}function oc(){return(wt&6)===0?(Ho(0),!1):!0}function ud(){if(ht!==null){if(Ft===0)var t=ht.return;else t=ht,aa=Ts=null,Tf(t),hr=null,Mo=0,t=ht;for(;t!==null;)i0(t.alternate,t),t=t.return;ht=null}}function br(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Py(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ma=0,ud(),Wt=t,ht=a=na(t.current,null),mt=n,Ft=0,ai=null,Wa=!1,Sr=we(t,n),ad=!1,yr=si=sd=Ps=qa=ln=0,qn=Bo=null,rd=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),d=1<<u;n|=t[u],o&=~d}return pa=n,Cl(),a}function R0(t,n){ot=null,z.H=No,n===dr||n===Fl?(n=km(),Ft=3):n===pf?(n=km(),Ft=4):Ft=n===Vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,ht===null&&(ln=1,Kl(t,hi(n,t.current)))}function C0(){var t=ni.current;return t===null?!0:(mt&4194048)===mt?_i===null:(mt&62914560)===mt||(mt&536870912)!==0?t===_i:!1}function w0(){var t=z.H;return z.H=No,t===null?No:t}function N0(){var t=z.A;return z.A=hy,t}function lc(){ln=4,Wa||(mt&4194048)!==mt&&ni.current!==null||(Sr=!0),(qa&134217727)===0&&(Ps&134217727)===0||Wt===null||Za(Wt,mt,si,!1)}function fd(t,n,a){var o=wt;wt|=2;var u=w0(),d=N0();(Wt!==t||mt!==n)&&(rc=null,br(t,n)),n=!1;var _=ln;e:do try{if(Ft!==0&&ht!==null){var C=ht,H=ai;switch(Ft){case 8:ud(),_=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var te=Ft;if(Ft=0,ai=null,Er(t,C,H,te),a&&Sr){_=0;break e}break;default:te=Ft,Ft=0,ai=null,Er(t,C,H,te)}}gy(),_=ln;break}catch(pe){R0(t,pe)}while(!0);return n&&t.shellSuspendCounter++,aa=Ts=null,wt=o,z.H=u,z.A=d,ht===null&&(Wt=null,mt=0,Cl()),_}function gy(){for(;ht!==null;)D0(ht)}function _y(t,n){var a=wt;wt|=2;var o=w0(),u=N0();Wt!==t||mt!==n?(rc=null,sc=zt()+500,br(t,n)):Sr=we(t,n);e:do try{if(Ft!==0&&ht!==null){n=ht;var d=ai;t:switch(Ft){case 1:Ft=0,ai=null,Er(t,n,d,1);break;case 2:case 9:if(Gm(d)){Ft=0,ai=null,U0(n);break}n=function(){Ft!==2&&Ft!==9||Wt!==t||(Ft=7),Hi(t)},d.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Gm(d)?(Ft=0,ai=null,U0(n)):(Ft=0,ai=null,Er(t,n,d,7));break;case 5:var _=null;switch(ht.tag){case 26:_=ht.memoizedState;case 5:case 27:var C=ht;if(_?__(_):C.stateNode.complete){Ft=0,ai=null;var H=C.sibling;if(H!==null)ht=H;else{var te=C.return;te!==null?(ht=te,cc(te)):ht=null}break t}}Ft=0,ai=null,Er(t,n,d,5);break;case 6:Ft=0,ai=null,Er(t,n,d,6);break;case 8:ud(),ln=6;break e;default:throw Error(s(462))}}vy();break}catch(pe){R0(t,pe)}while(!0);return aa=Ts=null,z.H=o,z.A=u,wt=a,ht!==null?0:(Wt=null,mt=0,Cl(),ln)}function vy(){for(;ht!==null&&!rn();)D0(ht)}function D0(t){var n=t0(t.alternate,t,pa);t.memoizedProps=t.pendingProps,n===null?cc(t):ht=n}function U0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Zg(a,n,n.pendingProps,n.type,void 0,mt);break;case 11:n=Zg(a,n,n.pendingProps,n.type.render,n.ref,mt);break;case 5:Tf(n);default:i0(a,n),n=ht=Nm(n,pa),n=t0(a,n,pa)}t.memoizedProps=t.pendingProps,n===null?cc(t):ht=n}function Er(t,n,a,o){aa=Ts=null,Tf(n),hr=null,Mo=0;var u=n.return;try{if(ry(t,u,n,a,mt)){ln=1,Kl(t,hi(a,t.current)),ht=null;return}}catch(d){if(u!==null)throw ht=u,d;ln=1,Kl(t,hi(a,t.current)),ht=null;return}n.flags&32768?(xt||o===1?t=!0:Sr||(mt&536870912)!==0?t=!1:(Wa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),L0(n,t)):cc(n)}function cc(t){var n=t;do{if((n.flags&32768)!==0){L0(n,Wa);return}t=n.return;var a=cy(n.alternate,n,pa);if(a!==null){ht=a;return}if(n=n.sibling,n!==null){ht=n;return}ht=n=t}while(n!==null);ln===0&&(ln=5)}function L0(t,n){do{var a=uy(t.alternate,t);if(a!==null){a.flags&=32767,ht=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ht=t;return}ht=t=a}while(t!==null);ln=6,ht=null}function O0(t,n,a,o,u,d,_,C,H){t.cancelPendingCommit=null;do uc();while(Sn!==0);if((wt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Ju,Kt(t,a,d,_,C,H),t===Wt&&(ht=Wt=null,mt=0),Mr=n,Ya=t,ma=a,od=d,ld=u,b0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,My(Q,function(){return z0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=G.p,G.p=2,_=wt,wt|=4;try{fy(t,n,a)}finally{wt=_,G.p=u,z.T=o}}Sn=1,P0(),F0(),I0()}}function P0(){if(Sn===1){Sn=0;var t=Ya,n=Mr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=G.p;G.p=2;var u=wt;wt|=4;try{m0(n,t);var d=bd,_=ym(t.containerInfo),C=d.focusedElem,H=d.selectionRange;if(_!==C&&C&&C.ownerDocument&&Sm(C.ownerDocument.documentElement,C)){if(H!==null&&ju(C)){var te=H.start,pe=H.end;if(pe===void 0&&(pe=te),"selectionStart"in C)C.selectionStart=te,C.selectionEnd=Math.min(pe,C.value.length);else{var xe=C.ownerDocument||document,le=xe&&xe.defaultView||window;if(le.getSelection){var ce=le.getSelection(),We=C.textContent.length,et=Math.min(H.start,We),Vt=H.end===void 0?et:Math.min(H.end,We);!ce.extend&&et>Vt&&(_=Vt,Vt=et,et=_);var Y=xm(C,et),k=xm(C,Vt);if(Y&&k&&(ce.rangeCount!==1||ce.anchorNode!==Y.node||ce.anchorOffset!==Y.offset||ce.focusNode!==k.node||ce.focusOffset!==k.offset)){var ee=xe.createRange();ee.setStart(Y.node,Y.offset),ce.removeAllRanges(),et>Vt?(ce.addRange(ee),ce.extend(k.node,k.offset)):(ee.setEnd(k.node,k.offset),ce.addRange(ee))}}}}for(xe=[],ce=C;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<xe.length;C++){var ve=xe[C];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Mc=!!Md,bd=Md=null}finally{wt=u,G.p=o,z.T=a}}t.current=n,Sn=2}}function F0(){if(Sn===2){Sn=0;var t=Ya,n=Mr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=G.p;G.p=2;var u=wt;wt|=4;try{u0(t,n.alternate,n)}finally{wt=u,G.p=o,z.T=a}}Sn=3}}function I0(){if(Sn===4||Sn===3){Sn=0,j();var t=Ya,n=Mr,a=ma,o=b0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,Mr=Ya=null,B0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ja=null),ro(a),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=G.p,G.p=2,z.T=null;try{for(var d=t.onRecoverableError,_=0;_<o.length;_++){var C=o[_];d(C.value,{componentStack:C.stack})}}finally{z.T=n,G.p=u}}(ma&3)!==0&&uc(),Hi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===cd?zo++:(zo=0,cd=t):zo=0,Ho(0)}}function B0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,So(n)))}function uc(){return P0(),F0(),I0(),z0()}function z0(){if(Sn!==5)return!1;var t=Ya,n=od;od=0;var a=ro(ma),o=z.T,u=G.p;try{G.p=32>a?32:a,z.T=null,a=ld,ld=null;var d=Ya,_=ma;if(Sn=0,Mr=Ya=null,ma=0,(wt&6)!==0)throw Error(s(331));var C=wt;if(wt|=4,S0(d.current),_0(d,d.current,_,a),wt=C,Ho(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(fe,d)}catch{}return!0}finally{G.p=u,z.T=o,B0(t,n)}}function H0(t,n,a){n=hi(a,n),n=Gf(t.stateNode,n,2),t=Ga(t,n,2),t!==null&&(Ve(t,2),Hi(t))}function It(t,n,a){if(t.tag===3)H0(t,t,a);else for(;n!==null;){if(n.tag===3){H0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ja===null||!ja.has(o))){t=hi(a,t),a=Gg(2),o=Ga(n,a,2),o!==null&&(Vg(a,o,n,t),Ve(o,2),Hi(o));break}}n=n.return}}function dd(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new py;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(ad=!0,u.add(a),t=xy.bind(null,t,n,a),n.then(t,t))}function xy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(mt&a)===a&&(ln===4||ln===3&&(mt&62914560)===mt&&300>zt()-ac?(wt&2)===0&&br(t,0):sd|=a,yr===mt&&(yr=0)),Hi(t)}function G0(t,n){n===0&&(n=ye()),t=bs(t,n),t!==null&&(Ve(t,n),Hi(t))}function Sy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),G0(t,a)}function yy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),G0(t,a)}function My(t,n){return cn(t,n)}var fc=null,Ar=null,hd=!1,dc=!1,pd=!1,Ka=0;function Hi(t){t!==Ar&&t.next===null&&(Ar===null?fc=Ar=t:Ar=Ar.next=t),dc=!0,hd||(hd=!0,Ey())}function Ho(t,n){if(!pd&&dc){pd=!0;do for(var a=!1,o=fc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var _=o.suspendedLanes,C=o.pingedLanes;d=(1<<31-Be(42|t)+1)-1,d&=u&~(_&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,W0(o,d))}else d=mt,d=me(o,o===Wt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||we(o,d)||(a=!0,W0(o,d));o=o.next}while(a);pd=!1}}function by(){V0()}function V0(){dc=hd=!1;var t=0;Ka!==0&&Oy()&&(t=Ka);for(var n=zt(),a=null,o=fc;o!==null;){var u=o.next,d=k0(o,n);d===0?(o.next=null,a===null?fc=u:a.next=u,u===null&&(Ar=a)):(a=o,(t!==0||(d&3)!==0)&&(dc=!0)),o=u}Sn!==0&&Sn!==5||Ho(t),Ka!==0&&(Ka=0)}function k0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-Be(d),C=1<<_,H=u[_];H===-1?((C&a)===0||(C&o)!==0)&&(u[_]=Ie(C,n)):H<=n&&(t.expiredLanes|=C),d&=~C}if(n=Wt,a=mt,a=me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&qt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&qt(o),ro(a)){case 2:case 8:a=M;break;case 32:a=Q;break;case 268435456:a=de;break;default:a=Q}return o=X0.bind(null,t),a=cn(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&qt(o),t.callbackPriority=2,t.callbackNode=null,2}function X0(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(uc()&&t.callbackNode!==a)return null;var o=mt;return o=me(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(A0(t,o,n),k0(t,zt()),t.callbackNode!=null&&t.callbackNode===a?X0.bind(null,t):null)}function W0(t,n){if(uc())return null;A0(t,n,!0)}function Ey(){Fy(function(){(wt&6)!==0?cn(L,by):V0()})}function md(){if(Ka===0){var t=ur;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),Ka=t}return Ka}function q0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xs(""+t)}function j0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Ay(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=q0((u[An]||null).action),_=o.submitter;_&&(n=(n=_[An]||null)?q0(n.formAction):_.getAttribute("formAction"),n!==null&&(d=n,_=null));var C=new El("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ka!==0){var H=_?j0(u,_):new FormData(u);Pf(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(C.preventDefault(),H=_?j0(u,_):new FormData(u),Pf(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var gd=0;gd<Qu.length;gd++){var _d=Qu[gd],Ty=_d.toLowerCase(),Ry=_d[0].toUpperCase()+_d.slice(1);Ri(Ty,"on"+Ry)}Ri(Em,"onAnimationEnd"),Ri(Am,"onAnimationIteration"),Ri(Tm,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(kS,"onTransitionRun"),Ri(XS,"onTransitionStart"),Ri(WS,"onTransitionCancel"),Ri(Rm,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function Y0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var _=o.length-1;0<=_;_--){var C=o[_],H=C.instance,te=C.currentTarget;if(C=C.listener,H!==d&&u.isPropagationStopped())break e;d=C,u.currentTarget=te;try{d(u)}catch(pe){Rl(pe)}u.currentTarget=null,d=H}else for(_=0;_<o.length;_++){if(C=o[_],H=C.instance,te=C.currentTarget,C=C.listener,H!==d&&u.isPropagationStopped())break e;d=C,u.currentTarget=te;try{d(u)}catch(pe){Rl(pe)}u.currentTarget=null,d=H}}}}function pt(t,n){var a=n[gs];a===void 0&&(a=n[gs]=new Set);var o=t+"__bubble";a.has(o)||(Z0(n,t,2,!1),a.add(o))}function vd(t,n,a){var o=0;n&&(o|=4),Z0(a,t,o,n)}var hc="_reactListening"+Math.random().toString(36).slice(2);function xd(t){if(!t[hc]){t[hc]=!0,Sl.forEach(function(a){a!=="selectionchange"&&(Cy.has(a)||vd(a,!1,t),vd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[hc]||(n[hc]=!0,vd("selectionchange",!1,n))}}function Z0(t,n,a,o){switch(E_(n)){case 2:var u=nM;break;case 8:u=iM;break;default:u=Od}a=u.bind(null,n,a,t),u=void 0,!Bu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Sd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var C=o.stateNode.containerInfo;if(C===u)break;if(_===4)for(_=o.return;_!==null;){var H=_.tag;if((H===3||H===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;C!==null;){if(_=Ji(C),_===null)return;if(H=_.tag,H===5||H===6||H===26||H===27){o=d=_;continue e}C=C.parentNode}}o=o.return}em(function(){var te=d,pe=Fu(a),xe=[];e:{var le=Cm.get(t);if(le!==void 0){var ce=El,We=t;switch(t){case"keypress":if(Ml(a)===0)break e;case"keydown":case"keyup":ce=yS;break;case"focusin":We="focus",ce=Vu;break;case"focusout":We="blur",ce=Vu;break;case"beforeblur":case"afterblur":ce=Vu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=cS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=ES;break;case Em:case Am:case Tm:ce=dS;break;case Rm:ce=TS;break;case"scroll":case"scrollend":ce=oS;break;case"wheel":ce=CS;break;case"copy":case"cut":case"paste":ce=pS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=sm;break;case"toggle":case"beforetoggle":ce=NS}var et=(n&4)!==0,Vt=!et&&(t==="scroll"||t==="scrollend"),Y=et?le!==null?le+"Capture":null:le;et=[];for(var k=te,ee;k!==null;){var ve=k;if(ee=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ee===null||Y===null||(ve=lo(k,Y),ve!=null&&et.push(Vo(k,ve,ee))),Vt)break;k=k.return}0<et.length&&(le=new ce(le,We,null,a,pe),xe.push({event:le,listeners:et}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",le&&a!==Pu&&(We=a.relatedTarget||a.fromElement)&&(Ji(We)||We[Gn]))break e;if((ce||le)&&(le=pe.window===pe?pe:(le=pe.ownerDocument)?le.defaultView||le.parentWindow:window,ce?(We=a.relatedTarget||a.toElement,ce=te,We=We?Ji(We):null,We!==null&&(Vt=c(We),et=We.tag,We!==Vt||et!==5&&et!==27&&et!==6)&&(We=null)):(ce=null,We=te),ce!==We)){if(et=im,ve="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(et=sm,ve="onPointerLeave",Y="onPointerEnter",k="pointer"),Vt=ce==null?le:vs(ce),ee=We==null?le:vs(We),le=new et(ve,k+"leave",ce,a,pe),le.target=Vt,le.relatedTarget=ee,ve=null,Ji(pe)===te&&(et=new et(Y,k+"enter",We,a,pe),et.target=ee,et.relatedTarget=Vt,ve=et),Vt=ve,ce&&We)t:{for(et=wy,Y=ce,k=We,ee=0,ve=Y;ve;ve=et(ve))ee++;ve=0;for(var $e=k;$e;$e=et($e))ve++;for(;0<ee-ve;)Y=et(Y),ee--;for(;0<ve-ee;)k=et(k),ve--;for(;ee--;){if(Y===k||k!==null&&Y===k.alternate){et=Y;break t}Y=et(Y),k=et(k)}et=null}else et=null;ce!==null&&K0(xe,le,ce,et,!1),We!==null&&Vt!==null&&K0(xe,Vt,We,et,!0)}}e:{if(le=te?vs(te):window,ce=le.nodeName&&le.nodeName.toLowerCase(),ce==="select"||ce==="input"&&le.type==="file")var Tt=hm;else if(fm(le))if(pm)Tt=HS;else{Tt=BS;var je=IS}else ce=le.nodeName,!ce||ce.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?te&&Dt(te.elementType)&&(Tt=hm):Tt=zS;if(Tt&&(Tt=Tt(t,te))){dm(xe,Tt,a,pe);break e}je&&je(t,le,te),t==="focusout"&&te&&le.type==="number"&&te.memoizedProps.value!=null&&dt(le,"number",le.value)}switch(je=te?vs(te):window,t){case"focusin":(fm(je)||je.contentEditable==="true")&&(nr=je,Yu=te,_o=null);break;case"focusout":_o=Yu=nr=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,Mm(xe,a,pe);break;case"selectionchange":if(VS)break;case"keydown":case"keyup":Mm(xe,a,pe)}var lt;if(Xu)e:{switch(t){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else tr?cm(t,a)&&(gt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(rm&&a.locale!=="ko"&&(tr||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&tr&&(lt=tm()):(Oa=pe,zu="value"in Oa?Oa.value:Oa.textContent,tr=!0)),je=pc(te,gt),0<je.length&&(gt=new am(gt,t,null,a,pe),xe.push({event:gt,listeners:je}),lt?gt.data=lt:(lt=um(a),lt!==null&&(gt.data=lt)))),(lt=US?LS(t,a):OS(t,a))&&(gt=pc(te,"onBeforeInput"),0<gt.length&&(je=new am("onBeforeInput","beforeinput",null,a,pe),xe.push({event:je,listeners:gt}),je.data=lt)),Ay(xe,t,te,a,pe)}Y0(xe,n)})}function Vo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function pc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=lo(t,a),u!=null&&o.unshift(Vo(t,u,d)),u=lo(t,n),u!=null&&o.push(Vo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function wy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function K0(t,n,a,o,u){for(var d=n._reactName,_=[];a!==null&&a!==o;){var C=a,H=C.alternate,te=C.stateNode;if(C=C.tag,H!==null&&H===o)break;C!==5&&C!==26&&C!==27||te===null||(H=te,u?(te=lo(a,d),te!=null&&_.unshift(Vo(a,te,H))):u||(te=lo(a,d),te!=null&&_.push(Vo(a,te,H)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Ny=/\r\n?/g,Dy=/\u0000|\uFFFD/g;function Q0(t){return(typeof t=="string"?t:""+t).replace(Ny,`
`).replace(Dy,"")}function J0(t,n){return n=Q0(n),Q0(t)===n}function Gt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||$n(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&$n(t,""+o);break;case"className":Xe(t,"class",o);break;case"tabIndex":Xe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,o);break;case"style":Ti(t,o,d);break;case"data":if(n!=="object"){Xe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",u.name,u,null),Gt(t,n,"formEncType",u.formEncType,u,null),Gt(t,n,"formMethod",u.formMethod,u,null),Gt(t,n,"formTarget",u.formTarget,u,null)):(Gt(t,n,"encType",u.encType,u,null),Gt(t,n,"method",u.method,u,null),Gt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ea);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=xs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":pt("beforetoggle",t),pt("toggle",t),Ue(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ue(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fi.get(a)||a,Ue(t,a,o))}}function yd(t,n,a,o,u,d){switch(a){case"style":Ti(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?$n(t,o):(typeof o=="number"||typeof o=="bigint")&&$n(t,""+o);break;case"onScroll":o!=null&&pt("scroll",t);break;case"onScrollEnd":o!=null&&pt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[An]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ue(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pt("error",t),pt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(t,n,d,_,a,null)}}u&&Gt(t,n,"srcSet",a.srcSet,a,null),o&&Gt(t,n,"src",a.src,a,null);return;case"input":pt("invalid",t);var C=d=_=u=null,H=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":_=pe;break;case"checked":H=pe;break;case"defaultChecked":te=pe;break;case"value":d=pe;break;case"defaultValue":C=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:Gt(t,n,o,pe,a,null)}}Un(t,d,C,H,te,_,u,!1);return;case"select":pt("invalid",t),o=_=d=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":d=C;break;case"defaultValue":_=C;break;case"multiple":o=C;default:Gt(t,n,u,C,a,null)}n=d,a=_,t.multiple=!!o,n!=null?xn(t,!!o,n,!1):a!=null&&xn(t,!!o,a,!0);return;case"textarea":pt("invalid",t),d=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(C=a[_],C!=null))switch(_){case"value":o=C;break;case"defaultValue":u=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Gt(t,n,_,C,a,null)}Ai(t,o,u,d);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Gt(t,n,H,o,a,null)}return;case"dialog":pt("beforetoggle",t),pt("toggle",t),pt("cancel",t),pt("close",t);break;case"iframe":case"object":pt("load",t);break;case"video":case"audio":for(o=0;o<Go.length;o++)pt(Go[o],t);break;case"image":pt("error",t),pt("load",t);break;case"details":pt("toggle",t);break;case"embed":case"source":case"link":pt("error",t),pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(t,n,te,o,a,null)}return;default:if(Dt(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&yd(t,n,pe,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Gt(t,n,C,o,a,null))}function Uy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,_=null,C=null,H=null,te=null,pe=null;for(ce in a){var xe=a[ce];if(a.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=xe;default:o.hasOwnProperty(ce)||Gt(t,n,ce,null,o,xe)}}for(var le in o){var ce=o[le];if(xe=a[le],o.hasOwnProperty(le)&&(ce!=null||xe!=null))switch(le){case"type":d=ce;break;case"name":u=ce;break;case"checked":te=ce;break;case"defaultChecked":pe=ce;break;case"value":_=ce;break;case"defaultValue":C=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==xe&&Gt(t,n,le,ce,o,xe)}}ze(t,_,C,H,te,pe,d,u);return;case"select":ce=_=C=le=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":ce=H;default:o.hasOwnProperty(d)||Gt(t,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":le=d;break;case"defaultValue":C=d;break;case"multiple":_=d;default:d!==H&&Gt(t,n,u,d,o,H)}n=C,a=_,o=ce,le!=null?xn(t,!!a,le,!1):!!o!=!!a&&(n!=null?xn(t,!!a,n,!0):xn(t,!!a,a?[]:"",!1));return;case"textarea":ce=le=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Gt(t,n,C,null,o,u)}for(_ in o)if(u=o[_],d=a[_],o.hasOwnProperty(_)&&(u!=null||d!=null))switch(_){case"value":le=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Gt(t,n,_,u,o,d)}Jn(t,le,ce);return;case"option":for(var We in a)if(le=a[We],a.hasOwnProperty(We)&&le!=null&&!o.hasOwnProperty(We))switch(We){case"selected":t.selected=!1;break;default:Gt(t,n,We,null,o,le)}for(H in o)if(le=o[H],ce=a[H],o.hasOwnProperty(H)&&le!==ce&&(le!=null||ce!=null))switch(H){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Gt(t,n,H,le,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)le=a[et],a.hasOwnProperty(et)&&le!=null&&!o.hasOwnProperty(et)&&Gt(t,n,et,null,o,le);for(te in o)if(le=o[te],ce=a[te],o.hasOwnProperty(te)&&le!==ce&&(le!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:Gt(t,n,te,le,o,ce)}return;default:if(Dt(n)){for(var Vt in a)le=a[Vt],a.hasOwnProperty(Vt)&&le!==void 0&&!o.hasOwnProperty(Vt)&&yd(t,n,Vt,void 0,o,le);for(pe in o)le=o[pe],ce=a[pe],!o.hasOwnProperty(pe)||le===ce||le===void 0&&ce===void 0||yd(t,n,pe,le,o,ce);return}}for(var Y in a)le=a[Y],a.hasOwnProperty(Y)&&le!=null&&!o.hasOwnProperty(Y)&&Gt(t,n,Y,null,o,le);for(xe in o)le=o[xe],ce=a[xe],!o.hasOwnProperty(xe)||le===ce||le==null&&ce==null||Gt(t,n,xe,le,o,ce)}function $0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ly(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,_=u.initiatorType,C=u.duration;if(d&&C&&$0(_)){for(_=0,C=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],te=H.startTime;if(te>C)break;var pe=H.transferSize,xe=H.initiatorType;pe&&$0(xe)&&(H=H.responseEnd,_+=pe*(H<C?1:(C-te)/(H-te)))}if(--o,n+=8*(d+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Md=null,bd=null;function mc(t){return t.nodeType===9?t:t.ownerDocument}function e_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ed(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ad=null;function Oy(){var t=window.event;return t&&t.type==="popstate"?t===Ad?!1:(Ad=t,!0):(Ad=null,!1)}var n_=typeof setTimeout=="function"?setTimeout:void 0,Py=typeof clearTimeout=="function"?clearTimeout:void 0,i_=typeof Promise=="function"?Promise:void 0,Fy=typeof queueMicrotask=="function"?queueMicrotask:typeof i_<"u"?function(t){return i_.resolve(null).then(t).catch(Iy)}:n_;function Iy(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function a_(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),wr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")ko(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ko(a);for(var d=a.firstChild;d;){var _=d.nextSibling,C=d.nodeName;d[Na]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=_}}else a==="body"&&ko(t.ownerDocument.body);a=u}while(a);wr(n)}function s_(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Td(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Td(a),Da(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function By(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Na])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function zy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function r_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function Rd(t){return t.data==="$?"||t.data==="$~"}function Cd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Hy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var wd=null;function o_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function l_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function c_(t,n,a){switch(n=mc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function ko(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Da(t)}var xi=new Map,u_=new Set;function gc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ga=G.d;G.d={f:Gy,r:Vy,D:ky,C:Xy,L:Wy,m:qy,X:Yy,S:jy,M:Zy};function Gy(){var t=ga.f(),n=oc();return t||n}function Vy(t){var n=$i(t);n!==null&&n.tag===5&&n.type==="form"?Rg(n):ga.r(t)}var Tr=typeof document>"u"?null:document;function f_(t,n,a){var o=Tr;if(o&&typeof n=="string"&&n){var u=Ot(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),u_.has(u)||(u_.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),hn(n),o.head.appendChild(n)))}}function ky(t){ga.D(t),f_("dns-prefetch",t,null)}function Xy(t,n){ga.C(t,n),f_("preconnect",t,n)}function Wy(t,n,a){ga.L(t,n,a);var o=Tr;if(o&&t&&n){var u='link[rel="preload"][as="'+Ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ot(a.imageSizes)+'"]')):u+='[href="'+Ot(t)+'"]';var d=u;switch(n){case"style":d=Rr(t);break;case"script":d=Cr(t)}xi.has(d)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),xi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Xo(d))||n==="script"&&o.querySelector(Wo(d))||(n=o.createElement("link"),wn(n,"link",t),hn(n),o.head.appendChild(n)))}}function qy(t,n){ga.m(t,n);var a=Tr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ot(o)+'"][href="'+Ot(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Cr(t)}if(!xi.has(d)&&(t=x({rel:"modulepreload",href:t},n),xi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wo(d)))return}o=a.createElement("link"),wn(o,"link",t),hn(o),a.head.appendChild(o)}}}function jy(t,n,a){ga.S(t,n,a);var o=Tr;if(o&&t){var u=Ua(o).hoistableStyles,d=Rr(t);n=n||"default";var _=u.get(d);if(!_){var C={loading:0,preload:null};if(_=o.querySelector(Xo(d)))C.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=xi.get(d))&&Nd(t,a);var H=_=o.createElement("link");hn(H),wn(H,"link",t),H._p=new Promise(function(te,pe){H.onload=te,H.onerror=pe}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,_c(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:C},u.set(d,_)}}}function Yy(t,n){ga.X(t,n);var a=Tr;if(a&&t){var o=Ua(a).hoistableScripts,u=Cr(t),d=o.get(u);d||(d=a.querySelector(Wo(u)),d||(t=x({src:t,async:!0},n),(n=xi.get(u))&&Dd(t,n),d=a.createElement("script"),hn(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Zy(t,n){ga.M(t,n);var a=Tr;if(a&&t){var o=Ua(a).hoistableScripts,u=Cr(t),d=o.get(u);d||(d=a.querySelector(Wo(u)),d||(t=x({src:t,async:!0,type:"module"},n),(n=xi.get(u))&&Dd(t,n),d=a.createElement("script"),hn(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function d_(t,n,a,o){var u=(u=se.current)?gc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Rr(a.href),a=Ua(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Rr(a.href);var d=Ua(u).hoistableStyles,_=d.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=u.querySelector(Xo(t)))&&!d._p&&(_.instance=d,_.state.loading=5),xi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(t,a),d||Ky(u,t,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Cr(a),a=Ua(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Rr(t){return'href="'+Ot(t)+'"'}function Xo(t){return'link[rel="stylesheet"]['+t+"]"}function h_(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Ky(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),hn(n),t.head.appendChild(n))}function Cr(t){return'[src="'+Ot(t)+'"]'}function Wo(t){return"script[async]"+t}function p_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),hn(o),wn(o,"style",u),_c(o,a.precedence,t),n.instance=o;case"stylesheet":u=Rr(a.href);var d=t.querySelector(Xo(u));if(d)return n.state.loading|=4,n.instance=d,hn(d),d;o=h_(a),(u=xi.get(u))&&Nd(o,u),d=(t.ownerDocument||t).createElement("link"),hn(d);var _=d;return _._p=new Promise(function(C,H){_.onload=C,_.onerror=H}),wn(d,"link",o),n.state.loading|=4,_c(d,a.precedence,t),n.instance=d;case"script":return d=Cr(a.src),(u=t.querySelector(Wo(d)))?(n.instance=u,hn(u),u):(o=a,(u=xi.get(d))&&(o=x({},a),Dd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),hn(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,_c(o,a.precedence,t));return n.instance}function _c(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,_=0;_<o.length;_++){var C=o[_];if(C.dataset.precedence===n)d=C;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Dd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var vc=null;function m_(t,n,a){if(vc===null){var o=new Map,u=vc=new Map;u.set(a,o)}else u=vc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Na]||d[dn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(n)||"";_=t+_;var C=o.get(_);C?C.push(d):o.set(_,[d])}}return o}function g_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Qy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function __(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Jy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Rr(o.href),d=n.querySelector(Xo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=xc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,hn(d);return}d=n.ownerDocument||n,o=h_(o),(u=xi.get(u))&&Nd(o,u),d=d.createElement("link"),hn(d);var _=d;_._p=new Promise(function(C,H){_.onload=C,_.onerror=H}),wn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=xc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ud=0;function $y(t,n){return t.stylesheets&&t.count===0&&yc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&yc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&Ud===0&&(Ud=62500*Ly());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&yc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Ud?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Sc=null;function yc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Sc=new Map,n.forEach(eM,t),Sc=null,xc.call(t))}function eM(t,n){if(!(n.state.loading&4)){var a=Sc.get(t);if(a)var o=a.get(null);else{a=new Map,Sc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var _=u[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),d=a.get(_)||o,d===o&&a.set(null,u),a.set(_,u),this.count++,o=xc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var qo={$$typeof:I,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function tM(t,n,a,o,u,d,_,C,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function v_(t,n,a,o,u,d,_,C,H,te,pe,xe){return t=new tM(t,n,a,_,H,te,pe,xe,C),n=1,d===!0&&(n|=24),d=ti(3,null,null,n),t.current=d,d.stateNode=t,n=ff(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},mf(d),t}function x_(t){return t?(t=sr,t):sr}function S_(t,n,a,o,u,d){u=x_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ha(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ga(t,o,n),a!==null&&(jn(a,t,n),Eo(a,t,n))}function y_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Ld(t,n){y_(t,n),(t=t.alternate)&&y_(t,n)}function M_(t){if(t.tag===13||t.tag===31){var n=bs(t,67108864);n!==null&&jn(n,t,67108864),Ld(t,67108864)}}function b_(t){if(t.tag===13||t.tag===31){var n=ri();n=so(n);var a=bs(t,n);a!==null&&jn(a,t,n),Ld(t,n)}}var Mc=!0;function nM(t,n,a,o){var u=z.T;z.T=null;var d=G.p;try{G.p=2,Od(t,n,a,o)}finally{G.p=d,z.T=u}}function iM(t,n,a,o){var u=z.T;z.T=null;var d=G.p;try{G.p=8,Od(t,n,a,o)}finally{G.p=d,z.T=u}}function Od(t,n,a,o){if(Mc){var u=Pd(o);if(u===null)Sd(t,n,o,bc,a),A_(t,o);else if(sM(u,t,n,a,o))o.stopPropagation();else if(A_(t,o),n&4&&-1<aM.indexOf(t)){for(;u!==null;){var d=$i(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Te(d.pendingLanes);if(_!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;_;){var H=1<<31-Be(_);C.entanglements[1]|=H,_&=~H}Hi(d),(wt&6)===0&&(sc=zt()+500,Ho(0))}}break;case 31:case 13:C=bs(d,2),C!==null&&jn(C,d,2),oc(),Ld(d,2)}if(d=Pd(o),d===null&&Sd(t,n,o,bc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Sd(t,n,o,null,a)}}function Pd(t){return t=Fu(t),Fd(t)}var bc=null;function Fd(t){if(bc=null,t=Ji(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return bc=t,null}function E_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case L:return 2;case M:return 8;case Q:case re:return 32;case de:return 268435456;default:return 32}default:return 32}}var Id=!1,Ja=null,$a=null,es=null,jo=new Map,Yo=new Map,ts=[],aM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function A_(t,n){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(n.pointerId)}}function Zo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=$i(n),n!==null&&M_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function sM(t,n,a,o,u){switch(n){case"focusin":return Ja=Zo(Ja,t,n,a,o,u),!0;case"dragenter":return $a=Zo($a,t,n,a,o,u),!0;case"mouseover":return es=Zo(es,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return jo.set(d,Zo(jo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Yo.set(d,Zo(Yo.get(d)||null,t,n,a,o,u)),!0}return!1}function T_(t){var n=Ji(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Js(t.priority,function(){b_(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Js(t.priority,function(){b_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Pd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Pu=o,a.target.dispatchEvent(o),Pu=null}else return n=$i(a),n!==null&&M_(n),t.blockedOn=a,!1;n.shift()}return!0}function R_(t,n,a){Ec(t)&&a.delete(n)}function rM(){Id=!1,Ja!==null&&Ec(Ja)&&(Ja=null),$a!==null&&Ec($a)&&($a=null),es!==null&&Ec(es)&&(es=null),jo.forEach(R_),Yo.forEach(R_)}function Ac(t,n){t.blockedOn===n&&(t.blockedOn=null,Id||(Id=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,rM)))}var Tc=null;function C_(t){Tc!==t&&(Tc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Tc===t&&(Tc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Fd(o||a)===null)continue;break}var d=$i(a);d!==null&&(t.splice(n,3),n-=3,Pf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function wr(t){function n(H){return Ac(H,t)}Ja!==null&&Ac(Ja,t),$a!==null&&Ac($a,t),es!==null&&Ac(es,t),jo.forEach(n),Yo.forEach(n);for(var a=0;a<ts.length;a++){var o=ts[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ts.length&&(a=ts[0],a.blockedOn===null);)T_(a),a.blockedOn===null&&ts.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],_=u[An]||null;if(typeof d=="function")_||C_(a);else if(_){var C=null;if(d&&d.hasAttribute("formAction")){if(u=d,_=d[An]||null)C=_.formAction;else if(Fd(u)!==null)continue}else C=_.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),C_(a)}}}function w_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Bd(t){this._internalRoot=t}Rc.prototype.render=Bd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ri();S_(a,o,t,n,null,null)},Rc.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;S_(t.current,2,null,t,null,null),oc(),n[Gn]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var n=oo();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ts.length&&n!==0&&n<ts[a].priority;a++);ts.splice(a,0,t),a===0&&T_(t)}};var N_=e.version;if(N_!=="19.2.0")throw Error(s(527,N_,"19.2.0"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var oM={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{fe=Cc.inject(oM),he=Cc}catch{}}return Qo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Ig,d=Bg,_=zg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=v_(t,1,!1,null,null,a,o,null,u,d,_,w_),t[Gn]=n.current,xd(t),new Bd(n)},Qo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=Ig,_=Bg,C=zg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=v_(t,1,!0,n,a??null,o,u,H,d,_,C,w_),n.context=x_(null),a=n.current,o=ri(),o=so(o),u=Ha(o),u.callback=null,Ga(a,u,o),a=o,n.current.lanes=a,Ve(n,a),Hi(n),t[Gn]=n.current,xd(t),new Rc(n)},Qo.version="19.2.0",Qo}var H_;function vM(){if(H_)return Gd.exports;H_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Gd.exports=_M(),Gd.exports}var xM=vM();const SM=rx(xM);var Wd={exports:{}},qd={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function yM(){if(G_)return qd;G_=1;var r=Au();function e(m,h){return m===h&&(m!==0||1/m===1/h)||m!==m&&h!==h}var i=typeof Object.is=="function"?Object.is:e,s=r.useSyncExternalStore,l=r.useRef,c=r.useEffect,f=r.useMemo,p=r.useDebugValue;return qd.useSyncExternalStoreWithSelector=function(m,h,v,x,g){var b=l(null);if(b.current===null){var A={hasValue:!1,value:null};b.current=A}else A=b.current;b=f(function(){function y(P){if(!S){if(S=!0,B=P,P=x(P),g!==void 0&&A.hasValue){var U=A.value;if(g(U,P))return I=U}return I=P}if(U=I,i(B,P))return U;var F=x(P);return g!==void 0&&g(U,F)?(B=P,U):(B=P,I=F)}var S=!1,B,I,w=v===void 0?null:v;return[function(){return y(h())},w===null?void 0:function(){return y(w())}]},[h,v,x,g]);var N=s(m,b[0],b[1]);return c(function(){A.hasValue=!0,A.value=N},[N]),p(N),N},qd}var V_;function MM(){return V_||(V_=1,Wd.exports=yM()),Wd.exports}var bM=MM();function EM(r){r()}function AM(){let r=null,e=null;return{clear(){r=null,e=null},notify(){EM(()=>{let i=r;for(;i;)i.callback(),i=i.next})},get(){const i=[];let s=r;for(;s;)i.push(s),s=s.next;return i},subscribe(i){let s=!0;const l=e={callback:i,next:null,prev:e};return l.prev?l.prev.next=l:r=l,function(){!s||r===null||(s=!1,l.next?l.next.prev=l.prev:e=l.prev,l.prev?l.prev.next=l.next:r=l.next)}}}}var k_={notify(){},get:()=>[]};function TM(r,e){let i,s=k_,l=0,c=!1;function f(N){v();const y=s.subscribe(N);let S=!1;return()=>{S||(S=!0,y(),x())}}function p(){s.notify()}function m(){A.onStateChange&&A.onStateChange()}function h(){return c}function v(){l++,i||(i=r.subscribe(m),s=AM())}function x(){l--,i&&l===0&&(i(),i=void 0,s.clear(),s=k_)}function g(){c||(c=!0,v())}function b(){c&&(c=!1,x())}const A={addNestedSub:f,notifyNestedSubs:p,handleChangeWrapper:m,isSubscribed:h,trySubscribe:g,tryUnsubscribe:b,getListeners:()=>s};return A}var RM=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CM=RM(),wM=()=>typeof navigator<"u"&&navigator.product==="ReactNative",NM=wM(),DM=()=>CM||NM?kt.useLayoutEffect:kt.useEffect,UM=DM(),LM=Symbol.for("react-redux-context"),OM=typeof globalThis<"u"?globalThis:{};function PM(){if(!kt.createContext)return{};const r=OM[LM]??=new Map;let e=r.get(kt.createContext);return e||(e=kt.createContext(null),r.set(kt.createContext,e)),e}var hs=PM();function FM(r){const{children:e,context:i,serverState:s,store:l}=r,c=kt.useMemo(()=>{const m=TM(l);return{store:l,subscription:m,getServerState:s?()=>s:void 0}},[l,s]),f=kt.useMemo(()=>l.getState(),[l]);UM(()=>{const{subscription:m}=c;return m.onStateChange=m.notifyNestedSubs,m.trySubscribe(),f!==l.getState()&&m.notifyNestedSubs(),()=>{m.tryUnsubscribe(),m.onStateChange=void 0}},[c,f]);const p=i||hs;return kt.createElement(p.Provider,{value:c},e)}var IM=FM;function Np(r=hs){return function(){return kt.useContext(r)}}var ox=Np();function lx(r=hs){const e=r===hs?ox:Np(r),i=()=>{const{store:s}=e();return s};return Object.assign(i,{withTypes:()=>i}),i}var BM=lx();function zM(r=hs){const e=r===hs?BM:lx(r),i=()=>e().dispatch;return Object.assign(i,{withTypes:()=>i}),i}var eo=zM(),HM=(r,e)=>r===e;function GM(r=hs){const e=r===hs?ox:Np(r),i=(s,l={})=>{const{equalityFn:c=HM}=typeof l=="function"?{equalityFn:l}:l,f=e(),{store:p,subscription:m,getServerState:h}=f;kt.useRef(!0);const v=kt.useCallback({[s.name](g){return s(g)}}[s.name],[s]),x=bM.useSyncExternalStoreWithSelector(m.addNestedSub,p.getState,h||p.getState,v,c);return kt.useDebugValue(x),x};return Object.assign(i,{withTypes:()=>i}),i}var Dh=GM();function Nn(r){return`Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}var VM=typeof Symbol=="function"&&Symbol.observable||"@@observable",X_=VM,jd=()=>Math.random().toString(36).substring(7).split("").join("."),kM={INIT:`@@redux/INIT${jd()}`,REPLACE:`@@redux/REPLACE${jd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${jd()}`},du=kM;function Dp(r){if(typeof r!="object"||r===null)return!1;let e=r;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(r)===e||Object.getPrototypeOf(r)===null}function cx(r,e,i){if(typeof r!="function")throw new Error(Nn(2));if(typeof e=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(Nn(0));if(typeof e=="function"&&typeof i>"u"&&(i=e,e=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(Nn(1));return i(cx)(r,e)}let s=r,l=e,c=new Map,f=c,p=0,m=!1;function h(){f===c&&(f=new Map,c.forEach((y,S)=>{f.set(S,y)}))}function v(){if(m)throw new Error(Nn(3));return l}function x(y){if(typeof y!="function")throw new Error(Nn(4));if(m)throw new Error(Nn(5));let S=!0;h();const B=p++;return f.set(B,y),function(){if(S){if(m)throw new Error(Nn(6));S=!1,h(),f.delete(B),c=null}}}function g(y){if(!Dp(y))throw new Error(Nn(7));if(typeof y.type>"u")throw new Error(Nn(8));if(typeof y.type!="string")throw new Error(Nn(17));if(m)throw new Error(Nn(9));try{m=!0,l=s(l,y)}finally{m=!1}return(c=f).forEach(B=>{B()}),y}function b(y){if(typeof y!="function")throw new Error(Nn(10));s=y,g({type:du.REPLACE})}function A(){const y=x;return{subscribe(S){if(typeof S!="object"||S===null)throw new Error(Nn(11));function B(){const w=S;w.next&&w.next(v())}return B(),{unsubscribe:y(B)}},[X_](){return this}}}return g({type:du.INIT}),{dispatch:g,subscribe:x,getState:v,replaceReducer:b,[X_]:A}}function XM(r){Object.keys(r).forEach(e=>{const i=r[e];if(typeof i(void 0,{type:du.INIT})>"u")throw new Error(Nn(12));if(typeof i(void 0,{type:du.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Nn(13))})}function WM(r){const e=Object.keys(r),i={};for(let c=0;c<e.length;c++){const f=e[c];typeof r[f]=="function"&&(i[f]=r[f])}const s=Object.keys(i);let l;try{XM(i)}catch(c){l=c}return function(f={},p){if(l)throw l;let m=!1;const h={};for(let v=0;v<s.length;v++){const x=s[v],g=i[x],b=f[x],A=g(b,p);if(typeof A>"u")throw p&&p.type,new Error(Nn(14));h[x]=A,m=m||A!==b}return m=m||s.length!==Object.keys(f).length,m?h:f}}function hu(...r){return r.length===0?e=>e:r.length===1?r[0]:r.reduce((e,i)=>(...s)=>e(i(...s)))}function qM(...r){return e=>(i,s)=>{const l=e(i,s);let c=()=>{throw new Error(Nn(15))};const f={getState:l.getState,dispatch:(m,...h)=>c(m,...h)},p=r.map(m=>m(f));return c=hu(...p)(l.dispatch),{...l,dispatch:c}}}function jM(r){return Dp(r)&&"type"in r&&typeof r.type=="string"}var ux=Symbol.for("immer-nothing"),W_=Symbol.for("immer-draftable"),fi=Symbol.for("immer-state");function Li(r,...e){throw new Error(`[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`)}var Yr=Object.getPrototypeOf;function qs(r){return!!r&&!!r[fi]}function Ra(r){return r?fx(r)||Array.isArray(r)||!!r[W_]||!!r.constructor?.[W_]||ml(r)||Ru(r):!1}var YM=Object.prototype.constructor.toString();function fx(r){if(!r||typeof r!="object")return!1;const e=Yr(r);if(e===null)return!0;const i=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return i===Object?!0:typeof i=="function"&&Function.toString.call(i)===YM}function pu(r,e){Tu(r)===0?Reflect.ownKeys(r).forEach(i=>{e(i,r[i],r)}):r.forEach((i,s)=>e(s,i,r))}function Tu(r){const e=r[fi];return e?e.type_:Array.isArray(r)?1:ml(r)?2:Ru(r)?3:0}function Uh(r,e){return Tu(r)===2?r.has(e):Object.prototype.hasOwnProperty.call(r,e)}function dx(r,e,i){const s=Tu(r);s===2?r.set(e,i):s===3?r.add(i):r[e]=i}function ZM(r,e){return r===e?r!==0||1/r===1/e:r!==r&&e!==e}function ml(r){return r instanceof Map}function Ru(r){return r instanceof Set}function Hs(r){return r.copy_||r.base_}function Lh(r,e){if(ml(r))return new Map(r);if(Ru(r))return new Set(r);if(Array.isArray(r))return Array.prototype.slice.call(r);const i=fx(r);if(e===!0||e==="class_only"&&!i){const s=Object.getOwnPropertyDescriptors(r);delete s[fi];let l=Reflect.ownKeys(s);for(let c=0;c<l.length;c++){const f=l[c],p=s[f];p.writable===!1&&(p.writable=!0,p.configurable=!0),(p.get||p.set)&&(s[f]={configurable:!0,writable:!0,enumerable:p.enumerable,value:r[f]})}return Object.create(Yr(r),s)}else{const s=Yr(r);if(s!==null&&i)return{...r};const l=Object.create(s);return Object.assign(l,r)}}function Up(r,e=!1){return Cu(r)||qs(r)||!Ra(r)||(Tu(r)>1&&Object.defineProperties(r,{set:{value:wc},add:{value:wc},clear:{value:wc},delete:{value:wc}}),Object.freeze(r),e&&Object.values(r).forEach(i=>Up(i,!0))),r}function wc(){Li(2)}function Cu(r){return Object.isFrozen(r)}var KM={};function js(r){const e=KM[r];return e||Li(0,r),e}var ul;function hx(){return ul}function QM(r,e){return{drafts_:[],parent_:r,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function q_(r,e){e&&(js("Patches"),r.patches_=[],r.inversePatches_=[],r.patchListener_=e)}function Oh(r){Ph(r),r.drafts_.forEach(JM),r.drafts_=null}function Ph(r){r===ul&&(ul=r.parent_)}function j_(r){return ul=QM(ul,r)}function JM(r){const e=r[fi];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function Y_(r,e){e.unfinalizedDrafts_=e.drafts_.length;const i=e.drafts_[0];return r!==void 0&&r!==i?(i[fi].modified_&&(Oh(e),Li(4)),Ra(r)&&(r=mu(e,r),e.parent_||gu(e,r)),e.patches_&&js("Patches").generateReplacementPatches_(i[fi].base_,r,e.patches_,e.inversePatches_)):r=mu(e,i,[]),Oh(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),r!==ux?r:void 0}function mu(r,e,i){if(Cu(e))return e;const s=e[fi];if(!s)return pu(e,(l,c)=>Z_(r,s,e,l,c,i)),e;if(s.scope_!==r)return e;if(!s.modified_)return gu(r,s.base_,!0),s.base_;if(!s.finalized_){s.finalized_=!0,s.scope_.unfinalizedDrafts_--;const l=s.copy_;let c=l,f=!1;s.type_===3&&(c=new Set(l),l.clear(),f=!0),pu(c,(p,m)=>Z_(r,s,l,p,m,i,f)),gu(r,l,!1),i&&r.patches_&&js("Patches").generatePatches_(s,i,r.patches_,r.inversePatches_)}return s.copy_}function Z_(r,e,i,s,l,c,f){if(qs(l)){const p=c&&e&&e.type_!==3&&!Uh(e.assigned_,s)?c.concat(s):void 0,m=mu(r,l,p);if(dx(i,s,m),qs(m))r.canAutoFreeze_=!1;else return}else f&&i.add(l);if(Ra(l)&&!Cu(l)){if(!r.immer_.autoFreeze_&&r.unfinalizedDrafts_<1)return;mu(r,l),(!e||!e.scope_.parent_)&&typeof s!="symbol"&&(ml(i)?i.has(s):Object.prototype.propertyIsEnumerable.call(i,s))&&gu(r,l)}}function gu(r,e,i=!1){!r.parent_&&r.immer_.autoFreeze_&&r.canAutoFreeze_&&Up(e,i)}function $M(r,e){const i=Array.isArray(r),s={type_:i?1:0,scope_:e?e.scope_:hx(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:r,draft_:null,copy_:null,revoke_:null,isManual_:!1};let l=s,c=Lp;i&&(l=[s],c=fl);const{revoke:f,proxy:p}=Proxy.revocable(l,c);return s.draft_=p,s.revoke_=f,p}var Lp={get(r,e){if(e===fi)return r;const i=Hs(r);if(!Uh(i,e))return eb(r,i,e);const s=i[e];return r.finalized_||!Ra(s)?s:s===Yd(r.base_,e)?(Zd(r),r.copy_[e]=Ih(s,r)):s},has(r,e){return e in Hs(r)},ownKeys(r){return Reflect.ownKeys(Hs(r))},set(r,e,i){const s=px(Hs(r),e);if(s?.set)return s.set.call(r.draft_,i),!0;if(!r.modified_){const l=Yd(Hs(r),e),c=l?.[fi];if(c&&c.base_===i)return r.copy_[e]=i,r.assigned_[e]=!1,!0;if(ZM(i,l)&&(i!==void 0||Uh(r.base_,e)))return!0;Zd(r),Fh(r)}return r.copy_[e]===i&&(i!==void 0||e in r.copy_)||Number.isNaN(i)&&Number.isNaN(r.copy_[e])||(r.copy_[e]=i,r.assigned_[e]=!0),!0},deleteProperty(r,e){return Yd(r.base_,e)!==void 0||e in r.base_?(r.assigned_[e]=!1,Zd(r),Fh(r)):delete r.assigned_[e],r.copy_&&delete r.copy_[e],!0},getOwnPropertyDescriptor(r,e){const i=Hs(r),s=Reflect.getOwnPropertyDescriptor(i,e);return s&&{writable:!0,configurable:r.type_!==1||e!=="length",enumerable:s.enumerable,value:i[e]}},defineProperty(){Li(11)},getPrototypeOf(r){return Yr(r.base_)},setPrototypeOf(){Li(12)}},fl={};pu(Lp,(r,e)=>{fl[r]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});fl.deleteProperty=function(r,e){return fl.set.call(this,r,e,void 0)};fl.set=function(r,e,i){return Lp.set.call(this,r[0],e,i,r[0])};function Yd(r,e){const i=r[fi];return(i?Hs(i):r)[e]}function eb(r,e,i){const s=px(e,i);return s?"value"in s?s.value:s.get?.call(r.draft_):void 0}function px(r,e){if(!(e in r))return;let i=Yr(r);for(;i;){const s=Object.getOwnPropertyDescriptor(i,e);if(s)return s;i=Yr(i)}}function Fh(r){r.modified_||(r.modified_=!0,r.parent_&&Fh(r.parent_))}function Zd(r){r.copy_||(r.copy_=Lh(r.base_,r.scope_.immer_.useStrictShallowCopy_))}var tb=class{constructor(r){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,i,s)=>{if(typeof e=="function"&&typeof i!="function"){const c=i;i=e;const f=this;return function(m=c,...h){return f.produce(m,v=>i.call(this,v,...h))}}typeof i!="function"&&Li(6),s!==void 0&&typeof s!="function"&&Li(7);let l;if(Ra(e)){const c=j_(this),f=Ih(e,void 0);let p=!0;try{l=i(f),p=!1}finally{p?Oh(c):Ph(c)}return q_(c,s),Y_(l,c)}else if(!e||typeof e!="object"){if(l=i(e),l===void 0&&(l=e),l===ux&&(l=void 0),this.autoFreeze_&&Up(l,!0),s){const c=[],f=[];js("Patches").generateReplacementPatches_(e,l,c,f),s(c,f)}return l}else Li(1,e)},this.produceWithPatches=(e,i)=>{if(typeof e=="function")return(f,...p)=>this.produceWithPatches(f,m=>e(m,...p));let s,l;return[this.produce(e,i,(f,p)=>{s=f,l=p}),s,l]},typeof r?.autoFreeze=="boolean"&&this.setAutoFreeze(r.autoFreeze),typeof r?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(r.useStrictShallowCopy)}createDraft(r){Ra(r)||Li(8),qs(r)&&(r=nb(r));const e=j_(this),i=Ih(r,void 0);return i[fi].isManual_=!0,Ph(e),i}finishDraft(r,e){const i=r&&r[fi];(!i||!i.isManual_)&&Li(9);const{scope_:s}=i;return q_(s,e),Y_(void 0,s)}setAutoFreeze(r){this.autoFreeze_=r}setUseStrictShallowCopy(r){this.useStrictShallowCopy_=r}applyPatches(r,e){let i;for(i=e.length-1;i>=0;i--){const l=e[i];if(l.path.length===0&&l.op==="replace"){r=l.value;break}}i>-1&&(e=e.slice(i+1));const s=js("Patches").applyPatches_;return qs(r)?s(r,e):this.produce(r,l=>s(l,e))}};function Ih(r,e){const i=ml(r)?js("MapSet").proxyMap_(r,e):Ru(r)?js("MapSet").proxySet_(r,e):$M(r,e);return(e?e.scope_:hx()).drafts_.push(i),i}function nb(r){return qs(r)||Li(10,r),mx(r)}function mx(r){if(!Ra(r)||Cu(r))return r;const e=r[fi];let i;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,i=Lh(r,e.scope_.immer_.useStrictShallowCopy_)}else i=Lh(r,!0);return pu(i,(s,l)=>{dx(i,s,mx(l))}),e&&(e.finalized_=!1),i}var ib=new tb,gx=ib.produce;function _x(r){return({dispatch:i,getState:s})=>l=>c=>typeof c=="function"?c(i,s,r):l(c)}var ab=_x(),sb=_x,rb=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?hu:hu.apply(null,arguments)};function K_(r,e){function i(...s){if(e){let l=e(...s);if(!l)throw new Error(Ea(0));return{type:r,payload:l.payload,..."meta"in l&&{meta:l.meta},..."error"in l&&{error:l.error}}}return{type:r,payload:s[0]}}return i.toString=()=>`${r}`,i.type=r,i.match=s=>jM(s)&&s.type===r,i}var vx=class rl extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,rl.prototype)}static get[Symbol.species](){return rl}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new rl(...e[0].concat(this)):new rl(...e.concat(this))}};function Q_(r){return Ra(r)?gx(r,()=>{}):r}function Nc(r,e,i){return r.has(e)?r.get(e):r.set(e,i(e)).get(e)}function ob(r){return typeof r=="boolean"}var lb=()=>function(e){const{thunk:i=!0,immutableCheck:s=!0,serializableCheck:l=!0,actionCreatorCheck:c=!0}=e??{};let f=new vx;return i&&(ob(i)?f.push(ab):f.push(sb(i.extraArgument))),f},cb="RTK_autoBatch",J_=r=>e=>{setTimeout(e,r)},ub=(r={type:"raf"})=>e=>(...i)=>{const s=e(...i);let l=!0,c=!1,f=!1;const p=new Set,m=r.type==="tick"?queueMicrotask:r.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:J_(10):r.type==="callback"?r.queueNotification:J_(r.timeout),h=()=>{f=!1,c&&(c=!1,p.forEach(v=>v()))};return Object.assign({},s,{subscribe(v){const x=()=>l&&v(),g=s.subscribe(x);return p.add(v),()=>{g(),p.delete(v)}},dispatch(v){try{return l=!v?.meta?.[cb],c=!l,c&&(f||(f=!0,m(h))),s.dispatch(v)}finally{l=!0}}})},fb=r=>function(i){const{autoBatch:s=!0}=i??{};let l=new vx(r);return s&&l.push(ub(typeof s=="object"?s:void 0)),l};function db(r){const e=lb(),{reducer:i=void 0,middleware:s,devTools:l=!0,preloadedState:c=void 0,enhancers:f=void 0}=r||{};let p;if(typeof i=="function")p=i;else if(Dp(i))p=WM(i);else throw new Error(Ea(1));let m;typeof s=="function"?m=s(e):m=e();let h=hu;l&&(h=rb({trace:!1,...typeof l=="object"&&l}));const v=qM(...m),x=fb(v);let g=typeof f=="function"?f(x):x();const b=h(...g);return cx(p,c,b)}function xx(r){const e={},i=[];let s;const l={addCase(c,f){const p=typeof c=="string"?c:c.type;if(!p)throw new Error(Ea(28));if(p in e)throw new Error(Ea(29));return e[p]=f,l},addAsyncThunk(c,f){return f.pending&&(e[c.pending.type]=f.pending),f.rejected&&(e[c.rejected.type]=f.rejected),f.fulfilled&&(e[c.fulfilled.type]=f.fulfilled),f.settled&&i.push({matcher:c.settled,reducer:f.settled}),l},addMatcher(c,f){return i.push({matcher:c,reducer:f}),l},addDefaultCase(c){return s=c,l}};return r(l),[e,i,s]}function hb(r){return typeof r=="function"}function pb(r,e){let[i,s,l]=xx(e),c;if(hb(r))c=()=>Q_(r());else{const p=Q_(r);c=()=>p}function f(p=c(),m){let h=[i[m.type],...s.filter(({matcher:v})=>v(m)).map(({reducer:v})=>v)];return h.filter(v=>!!v).length===0&&(h=[l]),h.reduce((v,x)=>{if(x)if(qs(v)){const b=x(v,m);return b===void 0?v:b}else{if(Ra(v))return gx(v,g=>x(g,m));{const g=x(v,m);if(g===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}}return v},p)}return f.getInitialState=c,f}var mb=Symbol.for("rtk-slice-createasyncthunk");function gb(r,e){return`${r}/${e}`}function _b({creators:r}={}){const e=r?.asyncThunk?.[mb];return function(s){const{name:l,reducerPath:c=l}=s;if(!l)throw new Error(Ea(11));const f=(typeof s.reducers=="function"?s.reducers(xb()):s.reducers)||{},p=Object.keys(f),m={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},h={addCase(I,w){const P=typeof I=="string"?I:I.type;if(!P)throw new Error(Ea(12));if(P in m.sliceCaseReducersByType)throw new Error(Ea(13));return m.sliceCaseReducersByType[P]=w,h},addMatcher(I,w){return m.sliceMatchers.push({matcher:I,reducer:w}),h},exposeAction(I,w){return m.actionCreators[I]=w,h},exposeCaseReducer(I,w){return m.sliceCaseReducersByName[I]=w,h}};p.forEach(I=>{const w=f[I],P={reducerName:I,type:gb(l,I),createNotation:typeof s.reducers=="function"};yb(w)?bb(P,w,h,e):Sb(P,w,h)});function v(){const[I={},w=[],P=void 0]=typeof s.extraReducers=="function"?xx(s.extraReducers):[s.extraReducers],U={...I,...m.sliceCaseReducersByType};return pb(s.initialState,F=>{for(let E in U)F.addCase(E,U[E]);for(let E of m.sliceMatchers)F.addMatcher(E.matcher,E.reducer);for(let E of w)F.addMatcher(E.matcher,E.reducer);P&&F.addDefaultCase(P)})}const x=I=>I,g=new Map,b=new WeakMap;let A;function N(I,w){return A||(A=v()),A(I,w)}function y(){return A||(A=v()),A.getInitialState()}function S(I,w=!1){function P(F){let E=F[I];return typeof E>"u"&&w&&(E=Nc(b,P,y)),E}function U(F=x){const E=Nc(g,w,()=>new WeakMap);return Nc(E,F,()=>{const D={};for(const[X,V]of Object.entries(s.selectors??{}))D[X]=vb(V,F,()=>Nc(b,F,y),w);return D})}return{reducerPath:I,getSelectors:U,get selectors(){return U(P)},selectSlice:P}}const B={name:l,reducer:N,actions:m.actionCreators,caseReducers:m.sliceCaseReducersByName,getInitialState:y,...S(c),injectInto(I,{reducerPath:w,...P}={}){const U=w??c;return I.inject({reducerPath:U,reducer:N},P),{...B,...S(U,!0)}}};return B}}function vb(r,e,i,s){function l(c,...f){let p=e(c);return typeof p>"u"&&s&&(p=i()),r(p,...f)}return l.unwrapped=r,l}var Sx=_b();function xb(){function r(e,i){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...i}}return r.withTypes=()=>r,{reducer(e){return Object.assign({[e.name](...i){return e(...i)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,i){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:i}},asyncThunk:r}}function Sb({type:r,reducerName:e,createNotation:i},s,l){let c,f;if("reducer"in s){if(i&&!Mb(s))throw new Error(Ea(17));c=s.reducer,f=s.prepare}else c=s;l.addCase(r,c).exposeCaseReducer(e,c).exposeAction(e,f?K_(r,f):K_(r))}function yb(r){return r._reducerDefinitionType==="asyncThunk"}function Mb(r){return r._reducerDefinitionType==="reducerWithPrepare"}function bb({type:r,reducerName:e},i,s,l){if(!l)throw new Error(Ea(18));const{payloadCreator:c,fulfilled:f,pending:p,rejected:m,settled:h,options:v}=i,x=l(r,c,v);s.exposeAction(e,x),f&&s.addCase(x.fulfilled,f),p&&s.addCase(x.pending,p),m&&s.addCase(x.rejected,m),h&&s.addMatcher(x.settled,h),s.exposeCaseReducer(e,{fulfilled:f||Dc,pending:p||Dc,rejected:m||Dc,settled:h||Dc})}function Dc(){}function Ea(r){return`Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}const Eb={activeTab:"home",aboutContent:""},yx=Sx({name:"tab",initialState:Eb,reducers:{setActiveTab:(r,e)=>{r.activeTab=e.payload},setAboutContent:(r,e)=>{r.aboutContent=e.payload}}}),{setActiveTab:Mx,setAboutContent:yC}=yx.actions,Ab=yx.reducer,Tb=r=>r.tab.activeTab,Rb={projectPreview:{url:"",isVisible:!1},certificatePreview:{url:"",isVisible:!1},resumePreview:{url:"",isVisible:!1}},bx=Sx({name:"preview",initialState:Rb,reducers:{showProjectPreview:(r,e)=>{r.projectPreview.url=e.payload,r.projectPreview.isVisible=!0},hideProjectPreview:r=>{r.projectPreview.url="",r.projectPreview.isVisible=!1},showCertificatePreview:(r,e)=>{r.certificatePreview.url=e.payload,r.certificatePreview.isVisible=!0},hideCertificatePreview:r=>{r.certificatePreview.url="",r.certificatePreview.isVisible=!1},showResumePreview:(r,e)=>{r.resumePreview.url=e.payload,r.resumePreview.isVisible=!0},hideResumePreview:r=>{r.resumePreview.url="",r.resumePreview.isVisible=!1}}}),{showProjectPreview:Cb,hideProjectPreview:wb,showCertificatePreview:MC,hideCertificatePreview:bC,showResumePreview:wu,hideResumePreview:Nb}=bx.actions,Db=bx.reducer,Ub=r=>r.preview.projectPreview,Lb=r=>r.preview.resumePreview,Ob=db({reducer:{tab:Ab,preview:Db}}),Zr="/assets/NACHIKETA_NR_MERN_STACK_DEVELOPER%20(1)-DO-i2yLH.pdf",$_=[{id:"projects",label:"Work"},{id:"methodology",label:"Engineering"},{id:"experience",label:"Experience"},{id:"about",label:"About"},{id:"resume",label:"Resume"},{id:"contact",label:"Contact"}],Pb=()=>{const r=eo(),e=Dh(Tb),[i,s]=kt.useState(!1),l=f=>{r(Mx(f)),s(!1);const p=document.getElementById(f);p&&p.scrollIntoView({behavior:"smooth"})},c=()=>{r(wu(Zr))};return T.jsxs("header",{className:"sticky top-0 z-50 w-full border-b border-[#242424] bg-[#050505]/95 backdrop-blur-md",children:[T.jsxs("div",{className:"mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",children:[T.jsx("div",{className:"flex items-center gap-3",children:T.jsxs("button",{type:"button",onClick:()=>l("home"),className:"flex items-center gap-2.5 text-left group focus:outline-none",children:[T.jsx("span",{className:"font-mono text-xs font-bold bg-[#111111] border border-[#242424] text-[#F5F5F5] px-2 py-0.5 rounded transition group-hover:border-[#383838]",children:"NR"}),T.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:gap-2",children:[T.jsx("span",{className:"font-sans text-sm font-semibold text-[#F5F5F5] tracking-tight group-hover:text-white",children:"Nachiketa NR"}),T.jsx("span",{className:"hidden sm:inline text-xs text-[#71717A]",children:"•"}),T.jsx("span",{className:"font-mono text-[11px] text-[#71717A]",children:"Full Stack Developer"})]})]})}),T.jsx("nav",{className:"hidden md:flex items-center gap-6","aria-label":"Main Navigation",children:$_.map(f=>{const p=e===f.id;return T.jsxs("button",{type:"button",onClick:()=>l(f.id),className:`font-sans text-xs font-medium transition-colors relative py-1 ${p?"text-[#F5F5F5] font-semibold":"text-[#A1A1AA] hover:text-[#F5F5F5]"}`,children:[f.label,p&&T.jsx("span",{className:"absolute inset-x-0 -bottom-[15px] h-[2px] bg-[#22C55E]"})]},f.id)})}),T.jsxs("div",{className:"hidden lg:flex items-center gap-4 border-l border-[#242424] pl-5 font-mono text-xs text-[#A1A1AA]",children:[T.jsx("a",{href:"https://github.com/Nachi12",target:"_blank",rel:"noreferrer",className:"hover:text-[#F5F5F5] transition-colors",children:"GitHub ↗"}),T.jsx("a",{href:"https://www.linkedin.com/in/nachiketa12/",target:"_blank",rel:"noreferrer",className:"hover:text-[#F5F5F5] transition-colors",children:"LinkedIn ↗"}),T.jsx("button",{type:"button",onClick:c,className:"ml-2 rounded border border-[#242424] bg-[#111111] px-2.5 py-1 text-xs text-[#F5F5F5] hover:border-[#383838] transition-colors",children:"Resume PDF"})]}),T.jsx("button",{type:"button",onClick:()=>s(!i),className:"flex h-9 w-9 items-center justify-center rounded border border-[#242424] bg-[#0A0A0A] text-[#A1A1AA] md:hidden","aria-label":"Toggle navigation menu",children:T.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:i?T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):T.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),i&&T.jsx("div",{className:"border-b border-[#242424] bg-[#050505] px-4 pb-4 pt-2 md:hidden",children:T.jsxs("nav",{className:"flex flex-col space-y-2",children:[$_.map(f=>T.jsx("button",{type:"button",onClick:()=>l(f.id),className:`text-left font-sans text-xs py-2 transition-colors border-b border-[#111111] ${e===f.id?"text-[#F5F5F5] font-semibold":"text-[#A1A1AA]"}`,children:f.label},f.id)),T.jsxs("div",{className:"pt-2 flex items-center justify-between font-mono text-xs text-[#A1A1AA]",children:[T.jsx("a",{href:"https://github.com/Nachi12",target:"_blank",rel:"noreferrer",className:"hover:text-white",children:"GitHub ↗"}),T.jsx("a",{href:"https://www.linkedin.com/in/nachiketa12/",target:"_blank",rel:"noreferrer",className:"hover:text-white",children:"LinkedIn ↗"}),T.jsx("button",{onClick:c,className:"text-[#22C55E]",children:"Resume PDF"})]})]})})]})},Fb=()=>T.jsx("footer",{className:"mt-20 border-t border-[#242424] bg-[#050505] py-8 text-[#A1A1AA]",children:T.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("span",{className:"font-mono text-xs font-bold text-[#F5F5F5] bg-[#111111] border border-[#242424] px-2 py-0.5 rounded",children:"NR"}),T.jsxs("span",{className:"font-sans text-xs font-semibold text-[#F5F5F5]",children:["Nachiketa NR ",T.jsx("span",{className:"text-[#71717A] font-normal",children:"| Full Stack Developer"})]})]}),T.jsxs("div",{className:"flex items-center gap-5 font-mono text-xs text-[#71717A]",children:[T.jsx("a",{href:"https://github.com/Nachi12",target:"_blank",rel:"noreferrer",className:"hover:text-[#F5F5F5] transition-colors",children:"GitHub ↗"}),T.jsx("a",{href:"https://www.linkedin.com/in/nachiketa12/",target:"_blank",rel:"noreferrer",className:"hover:text-[#F5F5F5] transition-colors",children:"LinkedIn ↗"}),T.jsx("a",{href:"mailto:nrnachi34@gmail.com",className:"hover:text-[#F5F5F5] transition-colors",children:"Email"}),T.jsxs("span",{children:["© ",new Date().getFullYear()]})]})]})}),Ib=()=>{const r=eo(),[e,i]=kt.useState(!1),s=()=>{navigator.clipboard.writeText("nrnachi34@gmail.com"),i(!0),setTimeout(()=>i(!1),2500)},l=()=>{r(wu(Zr))};return T.jsx("aside",{className:"fixed bottom-5 left-1/2 z-40 -translate-x-1/2 transform px-4 w-full max-w-lg","aria-label":"Quick Actions",children:T.jsxs("div",{className:"flex items-center justify-between gap-3 rounded-lg border border-[#242424] bg-[#0A0A0A]/95 p-2 shadow-xl backdrop-blur-md",children:[T.jsxs("div",{className:"hidden sm:flex items-center gap-2 pl-3 font-mono text-xs text-[#A1A1AA]",children:[T.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-[#22C55E]"}),T.jsx("span",{children:"Available for Roles"})]}),T.jsxs("div",{className:"flex items-center gap-2 w-full sm:w-auto justify-end font-mono text-xs",children:[T.jsx("button",{type:"button",onClick:s,className:"flex-1 sm:flex-initial rounded border border-[#242424] bg-[#111111] px-3 py-1.5 text-[#F5F5F5] hover:border-[#383838] transition-colors",children:e?"Copied! ✓":"nrnachi34@gmail.com"}),T.jsx("button",{type:"button",onClick:l,className:"rounded border border-[#242424] bg-[#111111] px-3 py-1.5 text-[#F5F5F5] hover:border-[#383838] transition-colors",children:"View Resume"}),T.jsx("a",{href:Zr,download:!0,className:"rounded bg-[#F5F5F5] px-3 py-1.5 text-[#050505] font-semibold hover:bg-white transition-colors",children:"PDF ⬇"})]})]})})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Op="185",Bb=0,ev=1,zb=2,su=1,Hb=2,ol=3,ps=0,Zn=1,Ma=2,Aa=0,Wr=1,tv=2,nv=3,iv=4,Gb=5,Vs=100,Vb=101,kb=102,Xb=103,Wb=104,qb=200,jb=201,Yb=202,Zb=203,Bh=204,zh=205,Kb=206,Qb=207,Jb=208,$b=209,eE=210,tE=211,nE=212,iE=213,aE=214,Hh=0,Gh=1,Vh=2,Kr=3,kh=4,Xh=5,Wh=6,qh=7,Ex=0,sE=1,rE=2,qi=0,Ax=1,Tx=2,Rx=3,Cx=4,wx=5,Nx=6,Dx=7,Ux=300,Ys=301,Qr=302,Kd=303,Qd=304,Nu=306,jh=1e3,ba=1001,Yh=1002,Dn=1003,oE=1004,Uc=1005,Fn=1006,Jd=1007,Xs=1008,ui=1009,Lx=1010,Ox=1011,dl=1012,Pp=1013,Zi=1014,Xi=1015,Ca=1016,Fp=1017,Ip=1018,hl=1020,Px=35902,Fx=35899,Ix=1021,Bx=1022,Oi=1023,wa=1026,Ws=1027,zx=1028,Bp=1029,Zs=1030,zp=1031,Hp=1033,ru=33776,ou=33777,lu=33778,cu=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,ep=37492,tp=37496,np=37488,ip=37489,_u=37490,ap=37491,sp=37808,rp=37809,op=37810,lp=37811,cp=37812,up=37813,fp=37814,dp=37815,hp=37816,pp=37817,mp=37818,gp=37819,_p=37820,vp=37821,xp=36492,Sp=36494,yp=36495,Mp=36283,bp=36284,vu=36285,Ep=36286,lE=3200,Ap=0,cE=1,fs="",yi="srgb",xu="srgb-linear",Su="linear",Bt="srgb",Nr=7680,av=519,uE=512,fE=513,dE=514,Gp=515,hE=516,pE=517,Vp=518,mE=519,sv=35044,rv="300 es",Wi=2e3,pl=2001;function gE(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _E(){const r=yu("canvas");return r.style.display="block",r}const ov={};function lv(...r){const e="THREE."+r.shift();console.log(e,...r)}function Hx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function tt(...r){r=Hx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function bt(...r){r=Hx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function qr(...r){const e=r.join(" ");e in ov||(ov[e]=!0,tt(...r))}function vE(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const xE={[Hh]:Gh,[Vh]:Wh,[kh]:qh,[Kr]:Xh,[Gh]:Hh,[Wh]:Vh,[qh]:kh,[Xh]:Kr};class Ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uu=Math.PI/180,Tp=180/Math.PI;function gl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function yt(r,e,i){return Math.max(e,Math.min(i,r))}function SE(r,e){return(r%e+e)%e}function $d(r,e,i){return(1-i)*r+i*e}function Jo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Yp=class Yp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(yt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yp.prototype.isVector2=!0;let Mt=Yp;class to{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],v=s[l+2],x=s[l+3],g=c[f+0],b=c[f+1],A=c[f+2],N=c[f+3];if(x!==N||m!==g||h!==b||v!==A){let y=m*g+h*b+v*A+x*N;y<0&&(g=-g,b=-b,A=-A,N=-N,y=-y);let S=1-p;if(y<.9995){const B=Math.acos(y),I=Math.sin(B);S=Math.sin(S*B)/I,p=Math.sin(p*B)/I,m=m*S+g*p,h=h*S+b*p,v=v*S+A*p,x=x*S+N*p}else{m=m*S+g*p,h=h*S+b*p,v=v*S+A*p,x=x*S+N*p;const B=1/Math.sqrt(m*m+h*h+v*v+x*x);m*=B,h*=B,v*=B,x*=B}}e[i]=m,e[i+1]=h,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],v=s[l+3],x=c[f],g=c[f+1],b=c[f+2],A=c[f+3];return e[i]=p*A+v*x+m*b-h*g,e[i+1]=m*A+v*g+h*x-p*b,e[i+2]=h*A+v*b+p*g-m*x,e[i+3]=v*A-p*x-m*g-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(s/2),v=p(l/2),x=p(c/2),g=m(s/2),b=m(l/2),A=m(c/2);switch(f){case"XYZ":this._x=g*v*x+h*b*A,this._y=h*b*x-g*v*A,this._z=h*v*A+g*b*x,this._w=h*v*x-g*b*A;break;case"YXZ":this._x=g*v*x+h*b*A,this._y=h*b*x-g*v*A,this._z=h*v*A-g*b*x,this._w=h*v*x+g*b*A;break;case"ZXY":this._x=g*v*x-h*b*A,this._y=h*b*x+g*v*A,this._z=h*v*A+g*b*x,this._w=h*v*x-g*b*A;break;case"ZYX":this._x=g*v*x-h*b*A,this._y=h*b*x+g*v*A,this._z=h*v*A-g*b*x,this._w=h*v*x+g*b*A;break;case"YZX":this._x=g*v*x+h*b*A,this._y=h*b*x+g*v*A,this._z=h*v*A-g*b*x,this._w=h*v*x-g*b*A;break;case"XZY":this._x=g*v*x-h*b*A,this._y=h*b*x-g*v*A,this._z=h*v*A+g*b*x,this._w=h*v*x+g*b*A;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],v=i[6],x=i[10],g=s+p+x;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(v-m)*b,this._y=(c-h)*b,this._z=(f-l)*b}else if(s>p&&s>x){const b=2*Math.sqrt(1+s-p-x);this._w=(v-m)/b,this._x=.25*b,this._y=(l+f)/b,this._z=(c+h)/b}else if(p>x){const b=2*Math.sqrt(1+p-s-x);this._w=(c-h)/b,this._x=(l+f)/b,this._y=.25*b,this._z=(m+v)/b}else{const b=2*Math.sqrt(1+x-s-p);this._w=(f-l)/b,this._x=(c+h)/b,this._y=(m+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=s*v+f*p+l*h-c*m,this._y=l*v+f*m+c*p-s*h,this._z=c*v+f*h+s*m-l*p,this._w=f*v-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zp=class Zp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(cv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(cv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*s),v=2*(p*i-c*l),x=2*(c*s-f*i);return this.x=i+m*h+f*x-p*v,this.y=s+m*v+p*h-c*x,this.z=l+m*x+c*v-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return eh.copy(this).projectOnVector(e),this.sub(eh)}reflect(e){return this.sub(eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(yt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zp.prototype.isVector3=!0;let $=Zp;const eh=new $,cv=new to,Kp=class Kp{constructor(e,i,s,l,c,f,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h)}set(e,i,s,l,c,f,p,m,h){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=f,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],v=s[4],x=s[7],g=s[2],b=s[5],A=s[8],N=l[0],y=l[3],S=l[6],B=l[1],I=l[4],w=l[7],P=l[2],U=l[5],F=l[8];return c[0]=f*N+p*B+m*P,c[3]=f*y+p*I+m*U,c[6]=f*S+p*w+m*F,c[1]=h*N+v*B+x*P,c[4]=h*y+v*I+x*U,c[7]=h*S+v*w+x*F,c[2]=g*N+b*B+A*P,c[5]=g*y+b*I+A*U,c[8]=g*S+b*w+A*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8];return i*f*v-i*p*h-s*c*v+s*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8],x=v*f-p*h,g=p*m-v*c,b=h*c-f*m,A=i*x+s*g+l*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/A;return e[0]=x*N,e[1]=(l*h-v*s)*N,e[2]=(p*s-l*f)*N,e[3]=g*N,e[4]=(v*i-l*m)*N,e[5]=(l*c-p*i)*N,e[6]=b*N,e[7]=(s*m-h*i)*N,e[8]=(f*i-s*c)*N,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(th.makeScale(e,i)),this}rotate(e){return qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(th.makeRotation(-e)),this}translate(e,i){return qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(th.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kp.prototype.isMatrix3=!0;let st=Kp;const th=new st,uv=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fv=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yE(){const r={enabled:!0,workingColorSpace:xu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Bt&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Bt&&(l.r=jr(l.r),l.g=jr(l.g),l.b=jr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fs?Su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return qr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return qr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[xu]:{primaries:e,whitePoint:s,transfer:Su,toXYZ:uv,fromXYZ:fv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:s,transfer:Bt,toXYZ:uv,fromXYZ:fv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),r}const St=yE();function Ta(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Dr;class ME{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Dr===void 0&&(Dr=yu("canvas")),Dr.width=e.width,Dr.height=e.height;const l=Dr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Dr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=yu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ta(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ta(i[s]/255)*255):i[s]=Ta(i[s]);return{data:i,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bE=0;class kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=gl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(nh(l[f].image)):c.push(nh(l[f]))}else c=nh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function nh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ME.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let EE=0;const ih=new $;class zn extends Ks{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=ba,l=ba,c=Fn,f=Xs,p=Oi,m=ui,h=zn.DEFAULT_ANISOTROPY,v=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=gl(),this.name="",this.source=new kp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ih).x}get height(){return this.source.getSize(ih).y}get depth(){return this.source.getSize(ih).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){tt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){tt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ux)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case ba:e.x=e.x<0?0:1;break;case Yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case ba:e.y=e.y<0?0:1;break;case Yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Ux;zn.DEFAULT_ANISOTROPY=1;const Qp=class Qp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],v=m[4],x=m[8],g=m[1],b=m[5],A=m[9],N=m[2],y=m[6],S=m[10];if(Math.abs(v-g)<.01&&Math.abs(x-N)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+N)<.1&&Math.abs(A+y)<.1&&Math.abs(h+b+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(h+1)/2,w=(b+1)/2,P=(S+1)/2,U=(v+g)/4,F=(x+N)/4,E=(A+y)/4;return I>w&&I>P?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=U/s,c=F/s):w>P?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=U/l,c=E/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=F/c,l=E/c),this.set(s,l,c,i),this}let B=Math.sqrt((y-A)*(y-A)+(x-N)*(x-N)+(g-v)*(g-v));return Math.abs(B)<.001&&(B=1),this.x=(y-A)/B,this.y=(x-N)/B,this.z=(g-v)/B,this.w=Math.acos((h+b+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qp.prototype.isVector4=!0;let tn=Qp;class AE extends Ks{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new zn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new kp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends AE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Gx extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class TE extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eu=class Eu{constructor(e,i,s,l,c,f,p,m,h,v,x,g,b,A,N,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h,v,x,g,b,A,N,y)}set(e,i,s,l,c,f,p,m,h,v,x,g,b,A,N,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=p,S[13]=m,S[2]=h,S[6]=v,S[10]=x,S[14]=g,S[3]=b,S[7]=A,S[11]=N,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Eu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ur.setFromMatrixColumn(e,0).length(),c=1/Ur.setFromMatrixColumn(e,1).length(),f=1/Ur.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=f*v,b=f*x,A=p*v,N=p*x;i[0]=m*v,i[4]=-m*x,i[8]=h,i[1]=b+A*h,i[5]=g-N*h,i[9]=-p*m,i[2]=N-g*h,i[6]=A+b*h,i[10]=f*m}else if(e.order==="YXZ"){const g=m*v,b=m*x,A=h*v,N=h*x;i[0]=g+N*p,i[4]=A*p-b,i[8]=f*h,i[1]=f*x,i[5]=f*v,i[9]=-p,i[2]=b*p-A,i[6]=N+g*p,i[10]=f*m}else if(e.order==="ZXY"){const g=m*v,b=m*x,A=h*v,N=h*x;i[0]=g-N*p,i[4]=-f*x,i[8]=A+b*p,i[1]=b+A*p,i[5]=f*v,i[9]=N-g*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const g=f*v,b=f*x,A=p*v,N=p*x;i[0]=m*v,i[4]=A*h-b,i[8]=g*h+N,i[1]=m*x,i[5]=N*h+g,i[9]=b*h-A,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,b=f*h,A=p*m,N=p*h;i[0]=m*v,i[4]=N-g*x,i[8]=A*x+b,i[1]=x,i[5]=f*v,i[9]=-p*v,i[2]=-h*v,i[6]=b*x+A,i[10]=g-N*x}else if(e.order==="XZY"){const g=f*m,b=f*h,A=p*m,N=p*h;i[0]=m*v,i[4]=-x,i[8]=h*v,i[1]=g*x+N,i[5]=f*v,i[9]=b*x-A,i[2]=A*x-b,i[6]=p*v,i[10]=N*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RE,e,CE)}lookAt(e,i,s){const l=this.elements;return oi.subVectors(e,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),is.crossVectors(s,oi),is.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),is.crossVectors(s,oi)),is.normalize(),Lc.crossVectors(oi,is),l[0]=is.x,l[4]=Lc.x,l[8]=oi.x,l[1]=is.y,l[5]=Lc.y,l[9]=oi.y,l[2]=is.z,l[6]=Lc.z,l[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],v=s[1],x=s[5],g=s[9],b=s[13],A=s[2],N=s[6],y=s[10],S=s[14],B=s[3],I=s[7],w=s[11],P=s[15],U=l[0],F=l[4],E=l[8],D=l[12],X=l[1],V=l[5],K=l[9],ue=l[13],ge=l[2],J=l[6],z=l[10],G=l[14],ne=l[3],_e=l[7],Ee=l[11],O=l[15];return c[0]=f*U+p*X+m*ge+h*ne,c[4]=f*F+p*V+m*J+h*_e,c[8]=f*E+p*K+m*z+h*Ee,c[12]=f*D+p*ue+m*G+h*O,c[1]=v*U+x*X+g*ge+b*ne,c[5]=v*F+x*V+g*J+b*_e,c[9]=v*E+x*K+g*z+b*Ee,c[13]=v*D+x*ue+g*G+b*O,c[2]=A*U+N*X+y*ge+S*ne,c[6]=A*F+N*V+y*J+S*_e,c[10]=A*E+N*K+y*z+S*Ee,c[14]=A*D+N*ue+y*G+S*O,c[3]=B*U+I*X+w*ge+P*ne,c[7]=B*F+I*V+w*J+P*_e,c[11]=B*E+I*K+w*z+P*Ee,c[15]=B*D+I*ue+w*G+P*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],v=e[2],x=e[6],g=e[10],b=e[14],A=e[3],N=e[7],y=e[11],S=e[15],B=m*b-h*g,I=p*b-h*x,w=p*g-m*x,P=f*b-h*v,U=f*g-m*v,F=f*x-p*v;return i*(N*B-y*I+S*w)-s*(A*B-y*P+S*U)+l*(A*I-N*P+S*F)-c*(A*w-N*U+y*F)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],f=e[5],p=e[9],m=e[2],h=e[6],v=e[10];return i*(f*v-p*h)-s*(c*v-p*m)+l*(c*h-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8],x=e[9],g=e[10],b=e[11],A=e[12],N=e[13],y=e[14],S=e[15],B=i*p-s*f,I=i*m-l*f,w=i*h-c*f,P=s*m-l*p,U=s*h-c*p,F=l*h-c*m,E=v*N-x*A,D=v*y-g*A,X=v*S-b*A,V=x*y-g*N,K=x*S-b*N,ue=g*S-b*y,ge=B*ue-I*K+w*V+P*X-U*D+F*E;if(ge===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/ge;return e[0]=(p*ue-m*K+h*V)*J,e[1]=(l*K-s*ue-c*V)*J,e[2]=(N*F-y*U+S*P)*J,e[3]=(g*U-x*F-b*P)*J,e[4]=(m*X-f*ue-h*D)*J,e[5]=(i*ue-l*X+c*D)*J,e[6]=(y*w-A*F-S*I)*J,e[7]=(v*F-g*w+b*I)*J,e[8]=(f*K-p*X+h*E)*J,e[9]=(s*X-i*K-c*E)*J,e[10]=(A*U-N*w+S*B)*J,e[11]=(x*w-v*U-b*B)*J,e[12]=(p*D-f*V-m*E)*J,e[13]=(i*V-s*D+l*E)*J,e[14]=(N*I-A*P-y*B)*J,e[15]=(v*P-x*I+g*B)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,m=e.z,h=c*f,v=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+s,v*m-l*f,0,h*m-l*p,v*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,v=f+f,x=p+p,g=c*h,b=c*v,A=c*x,N=f*v,y=f*x,S=p*x,B=m*h,I=m*v,w=m*x,P=s.x,U=s.y,F=s.z;return l[0]=(1-(N+S))*P,l[1]=(b+w)*P,l[2]=(A-I)*P,l[3]=0,l[4]=(b-w)*U,l[5]=(1-(g+S))*U,l[6]=(y+B)*U,l[7]=0,l[8]=(A+I)*F,l[9]=(y-B)*F,l[10]=(1-(g+N))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Ur.set(l[0],l[1],l[2]).length();const p=Ur.set(l[4],l[5],l[6]).length(),m=Ur.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ni.copy(this);const h=1/f,v=1/p,x=1/m;return Ni.elements[0]*=h,Ni.elements[1]*=h,Ni.elements[2]*=h,Ni.elements[4]*=v,Ni.elements[5]*=v,Ni.elements[6]*=v,Ni.elements[8]*=x,Ni.elements[9]*=x,Ni.elements[10]*=x,i.setFromRotationMatrix(Ni),s.x=f,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,f,p=Wi,m=!1){const h=this.elements,v=2*c/(i-e),x=2*c/(s-l),g=(i+e)/(i-e),b=(s+l)/(s-l);let A,N;if(m)A=c/(f-c),N=f*c/(f-c);else if(p===Wi)A=-(f+c)/(f-c),N=-2*f*c/(f-c);else if(p===pl)A=-f/(f-c),N=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=x,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=N,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=Wi,m=!1){const h=this.elements,v=2/(i-e),x=2/(s-l),g=-(i+e)/(i-e),b=-(s+l)/(s-l);let A,N;if(m)A=1/(f-c),N=f/(f-c);else if(p===Wi)A=-2/(f-c),N=-(f+c)/(f-c);else if(p===pl)A=-1/(f-c),N=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=x,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=A,h[14]=N,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Eu.prototype.isMatrix4=!0;let en=Eu;const Ur=new $,Ni=new en,RE=new $(0,0,0),CE=new $(1,1,1),is=new $,Lc=new $,oi=new $,dv=new en,hv=new to;class ms{constructor(e=0,i=0,s=0,l=ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],v=l[9],x=l[2],g=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,b),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return dv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return hv.setFromEuler(this),this.setFromQuaternion(hv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ms.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wE=0;const pv=new $,Lr=new to,_a=new en,Oc=new $,$o=new $,NE=new $,DE=new to,mv=new $(1,0,0),gv=new $(0,1,0),_v=new $(0,0,1),vv={type:"added"},UE={type:"removed"},Or={type:"childadded",child:null},ah={type:"childremoved",child:null};class Hn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new $,i=new ms,s=new to,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new st}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Lr.setFromAxisAngle(e,i),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,i){return Lr.setFromAxisAngle(e,i),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(mv,e)}rotateY(e){return this.rotateOnAxis(gv,e)}rotateZ(e){return this.rotateOnAxis(_v,e)}translateOnAxis(e,i){return pv.copy(e).applyQuaternion(this.quaternion),this.position.add(pv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(mv,e)}translateY(e){return this.translateOnAxis(gv,e)}translateZ(e){return this.translateOnAxis(_v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Oc.copy(e):Oc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt($o,Oc,this.up):_a.lookAt(Oc,$o,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Lr.setFromRotationMatrix(_a),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vv),Or.child=e,this.dispatchEvent(Or),Or.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(UE),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vv),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,NE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,DE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const x=m[h];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),v=f(e.images),x=f(e.shapes),g=f(e.skeletons),b=f(e.animations),A=f(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),b.length>0&&(s.animations=b),A.length>0&&(s.nodes=A)}return s.object=l,s;function f(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new $(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xr extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LE={type:"move"};class sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const N of e.hand.values()){const y=i.getJointPose(N,s),S=this._getHandJoint(h,N);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],g=v.position.distanceTo(x.position),b=.02,A=.005;h.inputState.pinching&&g>b+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=b-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(LE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Xr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function rh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Et{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=St.workingColorSpace){return this.r=e,this.g=i,this.b=s,St.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=St.workingColorSpace){if(e=SE(e,1),i=yt(i,0,1),s=yt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=rh(f,c,e+1/3),this.g=rh(f,c,e),this.b=rh(f,c,e-1/3)}return St.colorSpaceToWorking(this,l),this}setStyle(e,i=yi){function s(c){c!==void 0&&parseFloat(c)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:tt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=yi){const s=Vx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return St.workingToColorSpace(Pn.copy(this),e),Math.round(yt(Pn.r*255,0,255))*65536+Math.round(yt(Pn.g*255,0,255))*256+Math.round(yt(Pn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=St.workingColorSpace){St.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const v=(p+f)/2;if(p===f)m=0,h=0;else{const x=f-p;switch(h=v<=.5?x/(f+p):x/(2-f-p),f){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,i=St.workingColorSpace){return St.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=yi){St.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,s=Pn.g,l=Pn.b;return e!==yi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(as),this.setHSL(as.h+e,as.s+i,as.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(as),e.getHSL(Pc);const s=$d(as.h,Pc.h,i),l=$d(as.s,Pc.s,i),c=$d(as.l,Pc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Et;Et.NAMES=Vx;class OE extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ms,this.environmentIntensity=1,this.environmentRotation=new ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Di=new $,va=new $,oh=new $,xa=new $,Pr=new $,Fr=new $,xv=new $,lh=new $,ch=new $,uh=new $,fh=new tn,dh=new tn,hh=new tn;class Mi{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Di.subVectors(e,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Di.subVectors(l,i),va.subVectors(s,i),oh.subVectors(e,i);const f=Di.dot(Di),p=Di.dot(va),m=Di.dot(oh),h=va.dot(va),v=va.dot(oh),x=f*h-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,b=(h*m-p*v)*g,A=(f*v-p*m)*g;return c.set(1-b-A,A,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,i,s,l,c,f,p,m){return this.getBarycoord(e,i,s,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(f,xa.y),m.addScaledVector(p,xa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return fh.setScalar(0),dh.setScalar(0),hh.setScalar(0),fh.fromBufferAttribute(e,i),dh.fromBufferAttribute(e,s),hh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(fh,c.x),f.addScaledVector(dh,c.y),f.addScaledVector(hh,c.z),f}static isFrontFacing(e,i,s,l){return Di.subVectors(s,i),va.subVectors(e,i),Di.cross(va).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Di.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Mi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;Pr.subVectors(l,s),Fr.subVectors(c,s),lh.subVectors(e,s);const m=Pr.dot(lh),h=Fr.dot(lh);if(m<=0&&h<=0)return i.copy(s);ch.subVectors(e,l);const v=Pr.dot(ch),x=Fr.dot(ch);if(v>=0&&x<=v)return i.copy(l);const g=m*x-v*h;if(g<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(s).addScaledVector(Pr,f);uh.subVectors(e,c);const b=Pr.dot(uh),A=Fr.dot(uh);if(A>=0&&b<=A)return i.copy(c);const N=b*h-m*A;if(N<=0&&h>=0&&A<=0)return p=h/(h-A),i.copy(s).addScaledVector(Fr,p);const y=v*A-b*x;if(y<=0&&x-v>=0&&b-A>=0)return xv.subVectors(c,l),p=(x-v)/(x-v+(b-A)),i.copy(l).addScaledVector(xv,p);const S=1/(y+N+g);return f=N*S,p=g*S,i.copy(s).addScaledVector(Pr,f).addScaledVector(Fr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _l{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Ui):Ui.fromBufferAttribute(c,f),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Fc.copy(s.boundingBox)),Fc.applyMatrix4(e.matrixWorld),this.union(Fc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),Ic.subVectors(this.max,el),Ir.subVectors(e.a,el),Br.subVectors(e.b,el),zr.subVectors(e.c,el),ss.subVectors(Br,Ir),rs.subVectors(zr,Br),Fs.subVectors(Ir,zr);let i=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Fs.z,Fs.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Fs.z,0,-Fs.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Fs.y,Fs.x,0];return!ph(i,Ir,Br,zr,Ic)||(i=[1,0,0,0,1,0,0,0,1],!ph(i,Ir,Br,zr,Ic))?!1:(Bc.crossVectors(ss,rs),i=[Bc.x,Bc.y,Bc.z],ph(i,Ir,Br,zr,Ic))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sa=[new $,new $,new $,new $,new $,new $,new $,new $],Ui=new $,Fc=new _l,Ir=new $,Br=new $,zr=new $,ss=new $,rs=new $,Fs=new $,el=new $,Ic=new $,Bc=new $,Is=new $;function ph(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Is.fromArray(r,c);const p=l.x*Math.abs(Is.x)+l.y*Math.abs(Is.y)+l.z*Math.abs(Is.z),m=e.dot(Is),h=i.dot(Is),v=s.dot(Is);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const vn=new $,zc=new Mt;let PE=0;class Yi extends Ks{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=sv,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)zc.fromBufferAttribute(this,i),zc.applyMatrix3(e),this.setXY(i,zc.x,zc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Jo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Yn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Jo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Jo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Jo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Jo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class kx extends Yi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Xx extends Yi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class bi extends Yi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const FE=new _l,tl=new $,mh=new $;class Du{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):FE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);const i=tl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(tl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(mh)),this.expandByPoint(tl.copy(e.center).sub(mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let IE=0;const Si=new en,gh=new Hn,Hr=new $,li=new _l,nl=new _l,En=new $;class Ei extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=gl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gE(e)?Xx:kx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new st().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,s){return Si.makeTranslation(e,i,s),this.applyMatrix4(Si),this}scale(e,i,s){return Si.makeScale(e,i,s),this.applyMatrix4(Si),this}lookAt(e){return gh.lookAt(e),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new bi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];li.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Du);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];nl.setFromBufferAttribute(p),this.morphTargetsRelative?(En.addVectors(li.min,nl.min),li.expandByPoint(En),En.addVectors(li.max,nl.max),li.expandByPoint(En)):(li.expandByPoint(nl.min),li.expandByPoint(nl.max))}li.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)En.fromBufferAttribute(p,h),m&&(Hr.fromBufferAttribute(e,h),En.add(Hr)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new Yi(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const p=[],m=[];for(let E=0;E<s.count;E++)p[E]=new $,m[E]=new $;const h=new $,v=new $,x=new $,g=new Mt,b=new Mt,A=new Mt,N=new $,y=new $;function S(E,D,X){h.fromBufferAttribute(s,E),v.fromBufferAttribute(s,D),x.fromBufferAttribute(s,X),g.fromBufferAttribute(c,E),b.fromBufferAttribute(c,D),A.fromBufferAttribute(c,X),v.sub(h),x.sub(h),b.sub(g),A.sub(g);const V=1/(b.x*A.y-A.x*b.y);isFinite(V)&&(N.copy(v).multiplyScalar(A.y).addScaledVector(x,-b.y).multiplyScalar(V),y.copy(x).multiplyScalar(b.x).addScaledVector(v,-A.x).multiplyScalar(V),p[E].add(N),p[D].add(N),p[X].add(N),m[E].add(y),m[D].add(y),m[X].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let E=0,D=B.length;E<D;++E){const X=B[E],V=X.start,K=X.count;for(let ue=V,ge=V+K;ue<ge;ue+=3)S(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const I=new $,w=new $,P=new $,U=new $;function F(E){P.fromBufferAttribute(l,E),U.copy(P);const D=p[E];I.copy(D),I.sub(P.multiplyScalar(P.dot(D))).normalize(),w.crossVectors(U,D);const V=w.dot(m[E])<0?-1:1;f.setXYZW(E,I.x,I.y,I.z,V)}for(let E=0,D=B.length;E<D;++E){const X=B[E],V=X.start,K=X.count;for(let ue=V,ge=V+K;ue<ge;ue+=3)F(e.getX(ue+0)),F(e.getX(ue+1)),F(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,b=s.count;g<b;g++)s.setXYZ(g,0,0,0);const l=new $,c=new $,f=new $,p=new $,m=new $,h=new $,v=new $,x=new $;if(e)for(let g=0,b=e.count;g<b;g+=3){const A=e.getX(g+0),N=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,N),f.fromBufferAttribute(i,y),v.subVectors(f,c),x.subVectors(l,c),v.cross(x),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,N),h.fromBufferAttribute(s,y),p.add(v),m.add(v),h.add(v),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(N,m.x,m.y,m.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,b=i.count;g<b;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),v.subVectors(f,c),x.subVectors(l,c),v.cross(x),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(p,m){const h=p.array,v=p.itemSize,x=p.normalized,g=new h.constructor(m.length*v);let b=0,A=0;for(let N=0,y=m.length;N<y;N++){p.isInterleavedBufferAttribute?b=m[N]*p.data.stride+p.offset:b=m[N]*v;for(let S=0;S<v;S++)g[A++]=h[b++]}return new Yi(g,v,x)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ei,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let v=0,x=h.length;v<x;v++){const g=h[v],b=e(g,s);m.push(b)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let x=0,g=h.length;x<g;x++){const b=h[x];v.push(b.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const c=e.morphAttributes;for(const h in c){const v=[],x=c[h];for(let g=0,b=x.length;g<b;g++)v.push(x[g].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,v=f.length;h<v;h++){const x=f[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let BE=0;class no extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=gl(),this.name="",this.type="Material",this.blending=Wr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=zh,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){tt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){tt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(s.blending=this.blending),this.side!==ps&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Bh&&(s.blendSrc=this.blendSrc),this.blendDst!==zh&&(s.blendDst=this.blendDst),this.blendEquation!==Vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==av&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Mt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ya=new $,_h=new $,Hc=new $,os=new $,vh=new $,Gc=new $,xh=new $;class Wp{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ya)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ya.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){_h.copy(e).add(i).multiplyScalar(.5),Hc.copy(i).sub(e).normalize(),os.copy(this.origin).sub(_h);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Hc),p=os.dot(this.direction),m=-os.dot(Hc),h=os.lengthSq(),v=Math.abs(1-f*f);let x,g,b,A;if(v>0)if(x=f*m-p,g=f*p-m,A=c*v,x>=0)if(g>=-A)if(g<=A){const N=1/v;x*=N,g*=N,b=x*(x+f*g+2*p)+g*(f*x+g+2*m)+h}else g=c,x=Math.max(0,-(f*g+p)),b=-x*x+g*(g+2*m)+h;else g=-c,x=Math.max(0,-(f*g+p)),b=-x*x+g*(g+2*m)+h;else g<=-A?(x=Math.max(0,-(-f*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),b=-x*x+g*(g+2*m)+h):g<=A?(x=0,g=Math.min(Math.max(-c,-m),c),b=g*(g+2*m)+h):(x=Math.max(0,-(f*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),b=-x*x+g*(g+2*m)+h);else g=f>0?-c:c,x=Math.max(0,-(f*g+p)),b=-x*x+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(_h).addScaledVector(Hc,g),b}intersectSphere(e,i){ya.subVectors(e.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,m;const h=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),v>=0?(c=(e.min.y-g.y)*v,f=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,f=(e.min.y-g.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),x>=0?(p=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(p=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ya)!==null}intersectTriangle(e,i,s,l,c){vh.subVectors(i,e),Gc.subVectors(s,e),xh.crossVectors(vh,Gc);let f=this.direction.dot(xh),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;os.subVectors(this.origin,e);const m=p*this.direction.dot(Gc.crossVectors(os,Gc));if(m<0)return null;const h=p*this.direction.dot(vh.cross(os));if(h<0||m+h>f)return null;const v=-p*os.dot(xh);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wx extends no{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.combine=Ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sv=new en,Bs=new Wp,Vc=new Du,yv=new $,kc=new $,Xc=new $,Wc=new $,Sh=new $,qc=new $,Mv=new $,jc=new $;class Ki extends Hn{constructor(e=new Ei,i=new Wx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){qc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const v=p[m],x=c[m];v!==0&&(Sh.fromBufferAttribute(x,e),f?qc.addScaledVector(Sh,v):qc.addScaledVector(Sh.sub(i),v))}i.add(qc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Vc.copy(s.boundingSphere),Vc.applyMatrix4(c),Bs.copy(e.ray).recast(e.near),!(Vc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Vc,yv)===null||Bs.origin.distanceToSquared(yv)>(e.far-e.near)**2))&&(Sv.copy(c).invert(),Bs.copy(e.ray).applyMatrix4(Sv),!(s.boundingBox!==null&&Bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Bs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,g=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(f))for(let A=0,N=g.length;A<N;A++){const y=g[A],S=f[y.materialIndex],B=Math.max(y.start,b.start),I=Math.min(p.count,Math.min(y.start+y.count,b.start+b.count));for(let w=B,P=I;w<P;w+=3){const U=p.getX(w),F=p.getX(w+1),E=p.getX(w+2);l=Yc(this,S,e,s,h,v,x,U,F,E),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),N=Math.min(p.count,b.start+b.count);for(let y=A,S=N;y<S;y+=3){const B=p.getX(y),I=p.getX(y+1),w=p.getX(y+2);l=Yc(this,f,e,s,h,v,x,B,I,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let A=0,N=g.length;A<N;A++){const y=g[A],S=f[y.materialIndex],B=Math.max(y.start,b.start),I=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let w=B,P=I;w<P;w+=3){const U=w,F=w+1,E=w+2;l=Yc(this,S,e,s,h,v,x,U,F,E),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),N=Math.min(m.count,b.start+b.count);for(let y=A,S=N;y<S;y+=3){const B=y,I=y+1,w=y+2;l=Yc(this,f,e,s,h,v,x,B,I,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function zE(r,e,i,s,l,c,f,p){let m;if(e.side===Zn?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,e.side===ps,p),m===null)return null;jc.copy(p),jc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(jc);return h<i.near||h>i.far?null:{distance:h,point:jc.clone(),object:r}}function Yc(r,e,i,s,l,c,f,p,m,h){r.getVertexPosition(p,kc),r.getVertexPosition(m,Xc),r.getVertexPosition(h,Wc);const v=zE(r,e,i,s,kc,Xc,Wc,Mv);if(v){const x=new $;Mi.getBarycoord(Mv,kc,Xc,Wc,x),l&&(v.uv=Mi.getInterpolatedAttribute(l,p,m,h,x,new Mt)),c&&(v.uv1=Mi.getInterpolatedAttribute(c,p,m,h,x,new Mt)),f&&(v.normal=Mi.getInterpolatedAttribute(f,p,m,h,x,new $),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new $,materialIndex:0};Mi.getNormal(kc,Xc,Wc,g.normal),v.face=g,v.barycoord=x}return v}class HE extends zn{constructor(e=null,i=1,s=1,l,c,f,p,m,h=Dn,v=Dn,x,g){super(null,f,p,m,h,v,l,c,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yh=new $,GE=new $,VE=new st;class Gs{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=yh.subVectors(s,i).cross(GE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(yh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||VE.getNormalMatrix(e),l=this.coplanarPoint(yh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new Du,kE=new Mt(.5,.5),Zc=new $;class qp{constructor(e=new Gs,i=new Gs,s=new Gs,l=new Gs,c=new Gs,f=new Gs){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Wi,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],v=c[4],x=c[5],g=c[6],b=c[7],A=c[8],N=c[9],y=c[10],S=c[11],B=c[12],I=c[13],w=c[14],P=c[15];if(l[0].setComponents(h-f,b-v,S-A,P-B).normalize(),l[1].setComponents(h+f,b+v,S+A,P+B).normalize(),l[2].setComponents(h+p,b+x,S+N,P+I).normalize(),l[3].setComponents(h-p,b-x,S-N,P-I).normalize(),s)l[4].setComponents(m,g,y,w).normalize(),l[5].setComponents(h-m,b-g,S-y,P-w).normalize();else if(l[4].setComponents(h-m,b-g,S-y,P-w).normalize(),i===Wi)l[5].setComponents(h+m,b+g,S+y,P+w).normalize();else if(i===pl)l[5].setComponents(m,g,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const i=kE.distanceTo(e.center);return zs.radius=.7071067811865476+i,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Zc.x=l.normal.x>0?e.max.x:e.min.x,Zc.y=l.normal.y>0?e.max.y:e.min.y,Zc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Zc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jp extends no{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mu=new $,bu=new $,bv=new en,il=new Wp,Kc=new Du,Mh=new $,Ev=new $;class qx extends Hn{constructor(e=new Ei,i=new jp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Mu.fromBufferAttribute(i,l-1),bu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Mu.distanceTo(bu);e.setAttribute("lineDistance",new bi(s,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Kc.copy(s.boundingSphere),Kc.applyMatrix4(l),Kc.radius+=c,e.ray.intersectsSphere(Kc)===!1)return;bv.copy(l).invert(),il.copy(e.ray).applyMatrix4(bv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const b=Math.max(0,f.start),A=Math.min(v.count,f.start+f.count);for(let N=b,y=A-1;N<y;N+=h){const S=v.getX(N),B=v.getX(N+1),I=Qc(this,e,il,m,S,B,N);I&&i.push(I)}if(this.isLineLoop){const N=v.getX(A-1),y=v.getX(b),S=Qc(this,e,il,m,N,y,A-1);S&&i.push(S)}}else{const b=Math.max(0,f.start),A=Math.min(g.count,f.start+f.count);for(let N=b,y=A-1;N<y;N+=h){const S=Qc(this,e,il,m,N,N+1,N);S&&i.push(S)}if(this.isLineLoop){const N=Qc(this,e,il,m,A-1,b,A-1);N&&i.push(N)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Qc(r,e,i,s,l,c,f){const p=r.geometry.attributes.position;if(Mu.fromBufferAttribute(p,l),bu.fromBufferAttribute(p,c),i.distanceSqToSegment(Mu,bu,Mh,Ev)>s)return;Mh.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Mh);if(!(h<e.near||h>e.far))return{distance:h,point:Ev.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const Av=new $,Tv=new $;class XE extends qx{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Av.fromBufferAttribute(i,l),Tv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Av.distanceTo(Tv);e.setAttribute("lineDistance",new bi(s,1))}else tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jx extends zn{constructor(e=[],i=Ys,s,l,c,f,p,m,h,v){super(e,i,s,l,c,f,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jr extends zn{constructor(e,i,s=Zi,l,c,f,p=Dn,m=Dn,h,v=wa,x=1){if(v!==wa&&v!==Ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,c,f,p,m,v,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class WE extends Jr{constructor(e,i=Zi,s=Ys,l,c,f=Dn,p=Dn,m,h=wa){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,i,s,l,c,f,p,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yx extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class io extends Ei{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],v=[],x=[];let g=0,b=0;A("z","y","x",-1,-1,s,i,e,f,c,0),A("z","y","x",1,-1,s,i,-e,f,c,1),A("x","z","y",1,1,e,s,i,l,f,2),A("x","z","y",1,-1,e,s,-i,l,f,3),A("x","y","z",1,-1,e,i,s,l,c,4),A("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new bi(h,3)),this.setAttribute("normal",new bi(v,3)),this.setAttribute("uv",new bi(x,2));function A(N,y,S,B,I,w,P,U,F,E,D){const X=w/F,V=P/E,K=w/2,ue=P/2,ge=U/2,J=F+1,z=E+1;let G=0,ne=0;const _e=new $;for(let Ee=0;Ee<z;Ee++){const O=Ee*V-ue;for(let Z=0;Z<J;Z++){const be=Z*X-K;_e[N]=be*B,_e[y]=O*I,_e[S]=ge,h.push(_e.x,_e.y,_e.z),_e[N]=0,_e[y]=0,_e[S]=U>0?1:-1,v.push(_e.x,_e.y,_e.z),x.push(Z/F),x.push(1-Ee/E),G+=1}}for(let Ee=0;Ee<E;Ee++)for(let O=0;O<F;O++){const Z=g+O+J*Ee,be=g+O+J*(Ee+1),Ce=g+(O+1)+J*(Ee+1),Fe=g+(O+1)+J*Ee;m.push(Z,be,Fe),m.push(be,Ce,Fe),ne+=6}p.addGroup(b,ne,D),b+=ne,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const Jc=new $,$c=new $,bh=new $,eu=new Mi;class qE extends Ei{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),c=Math.cos(uu*i),f=e.getIndex(),p=e.getAttribute("position"),m=f?f.count:p.count,h=[0,0,0],v=["a","b","c"],x=new Array(3),g={},b=[];for(let A=0;A<m;A+=3){f?(h[0]=f.getX(A),h[1]=f.getX(A+1),h[2]=f.getX(A+2)):(h[0]=A,h[1]=A+1,h[2]=A+2);const{a:N,b:y,c:S}=eu;if(N.fromBufferAttribute(p,h[0]),y.fromBufferAttribute(p,h[1]),S.fromBufferAttribute(p,h[2]),eu.getNormal(bh),x[0]=`${Math.round(N.x*l)},${Math.round(N.y*l)},${Math.round(N.z*l)}`,x[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,x[2]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let B=0;B<3;B++){const I=(B+1)%3,w=x[B],P=x[I],U=eu[v[B]],F=eu[v[I]],E=`${w}_${P}`,D=`${P}_${w}`;D in g&&g[D]?(bh.dot(g[D].normal)<=c&&(b.push(U.x,U.y,U.z),b.push(F.x,F.y,F.z)),g[D]=null):E in g||(g[E]={index0:h[B],index1:h[I],normal:bh.clone()})}}for(const A in g)if(g[A]){const{index0:N,index1:y}=g[A];Jc.fromBufferAttribute(p,N),$c.fromBufferAttribute(p,y),b.push(Jc.x,Jc.y,Jc.z),b.push($c.x,$c.y,$c.z)}this.setAttribute("position",new bi(b,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Uu extends Ei{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,v=m+1,x=e/p,g=i/m,b=[],A=[],N=[],y=[];for(let S=0;S<v;S++){const B=S*g-f;for(let I=0;I<h;I++){const w=I*x-c;A.push(w,-B,0),N.push(0,0,1),y.push(I/p),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let B=0;B<p;B++){const I=B+h*S,w=B+h*(S+1),P=B+1+h*(S+1),U=B+1+h*S;b.push(I,w,U),b.push(w,P,U)}this.setIndex(b),this.setAttribute("position",new bi(A,3)),this.setAttribute("normal",new bi(N,3)),this.setAttribute("uv",new bi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.width,e.height,e.widthSegments,e.heightSegments)}}function $r(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Rv(l))l.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Rv(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Bn(r){const e={};for(let i=0;i<r.length;i++){const s=$r(r[i]);for(const l in s)e[l]=s[l]}return e}function Rv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function jE(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Zx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const YE={clone:$r,merge:Bn};var ZE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends no{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZE,this.fragmentShader=KE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=jE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Et().setHex(l.value);break;case"v2":this.uniforms[s].value=new Mt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new $().fromArray(l.value);break;case"v4":this.uniforms[s].value=new tn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new st().fromArray(l.value);break;case"m4":this.uniforms[s].value=new en().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class QE extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class JE extends no{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ap,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $E extends no{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e1 extends no{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class t1 extends jp{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Kx extends Hn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Eh=new en,Cv=new $,wv=new $;class n1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qp,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Cv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cv),wv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(wv),i.updateMatrixWorld(),Eh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===pl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const tu=new $,nu=new to,Gi=new $;class Qx extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tu,nu,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tu,nu,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(tu,nu,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tu,nu,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ls=new $,Nv=new Mt,Dv=new Mt;class ci extends Qx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Tp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tp*2*Math.atan(Math.tan(uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,i){return this.getViewBounds(e,Nv,Dv),i.subVectors(Dv,Nv)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(uu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class i1 extends n1{constructor(){super(new ci(90,1,.5,500)),this.isPointLightShadow=!0}}class a1 extends Kx{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new i1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Jx extends Qx{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class s1 extends Kx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gr=-90,Vr=1;class r1 extends Hn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(Gr,Vr,e,i);l.layers=this.layers,this.add(l);const c=new ci(Gr,Vr,e,i);c.layers=this.layers,this.add(c);const f=new ci(Gr,Vr,e,i);f.layers=this.layers,this.add(f);const p=new ci(Gr,Vr,e,i);p.layers=this.layers,this.add(p);const m=new ci(Gr,Vr,e,i);m.layers=this.layers,this.add(m);const h=new ci(Gr,Vr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===pl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=N,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(x,g,b),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class o1 extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Uv=new en;class l1{constructor(e,i,s=0,l=1/0){this.ray=new Wp(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Xp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):bt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Uv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uv),this}intersectObject(e,i=!0,s=[]){return Rp(e,this,s,i),s.sort(Lv),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)Rp(e[l],this,s,i);return s.sort(Lv),s}}function Lv(r,e){return r.distance-e.distance}function Rp(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,p=c.length;f<p;f++)Rp(c[f],e,i,!0)}}const Jp=class Jp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Jp.prototype.isMatrix2=!0;let Ov=Jp;function Pv(r,e,i,s){const l=c1(s);switch(i){case Ix:return r*e;case zx:return r*e/l.components*l.byteLength;case Bp:return r*e/l.components*l.byteLength;case Zs:return r*e*2/l.components*l.byteLength;case zp:return r*e*2/l.components*l.byteLength;case Bx:return r*e*3/l.components*l.byteLength;case Oi:return r*e*4/l.components*l.byteLength;case Hp:return r*e*4/l.components*l.byteLength;case ru:case ou:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case lu:case cu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kh:case Jh:return Math.max(r,16)*Math.max(e,8)/4;case Zh:case Qh:return Math.max(r,8)*Math.max(e,8)/2;case $h:case ep:case np:case ip:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case tp:case _u:case ap:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case op:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case lp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case cp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case up:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case fp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case dp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case hp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case pp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case mp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case gp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case _p:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case vp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case xp:case Sp:case yp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Mp:case bp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case vu:case Ep:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function c1(r){switch(r){case ui:case Lx:return{byteLength:1,components:1};case dl:case Ox:case Ca:return{byteLength:2,components:1};case Fp:case Ip:return{byteLength:2,components:4};case Zi:case Pp:case Xi:return{byteLength:4,components:1};case Px:case Fx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Op}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Op);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $x(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function u1(r){const e=new WeakMap;function i(p,m){const h=p.array,v=p.usage,x=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,v),p.onUploadCallback();let b;if(h instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=r.SHORT;else if(h instanceof Uint32Array)b=r.UNSIGNED_INT;else if(h instanceof Int32Array)b=r.INT;else if(h instanceof Int8Array)b=r.BYTE;else if(h instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,h){const v=m.array,x=m.updateRanges;if(r.bindBuffer(h,p),x.length===0)r.bufferSubData(h,0,v);else{x.sort((b,A)=>b.start-A.start);let g=0;for(let b=1;b<x.length;b++){const A=x[g],N=x[b];N.start<=A.start+A.count+1?A.count=Math.max(A.count,N.start+N.count-A.start):(++g,x[g]=N)}x.length=g+1;for(let b=0,A=x.length;b<A;b++){const N=x[b];r.bufferSubData(h,N.start*v.BYTES_PER_ELEMENT,v,N.start,N.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var f1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,h1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,S1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,E1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,O1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,P1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,F1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G1="gl_FragColor = linearToOutputTexel( gl_FragColor );",V1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,iA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_A=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,OA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,GA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,YA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$A=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ST=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:f1,alphahash_pars_fragment:d1,alphamap_fragment:h1,alphamap_pars_fragment:p1,alphatest_fragment:m1,alphatest_pars_fragment:g1,aomap_fragment:_1,aomap_pars_fragment:v1,batching_pars_vertex:x1,batching_vertex:S1,begin_vertex:y1,beginnormal_vertex:M1,bsdfs:b1,iridescence_fragment:E1,bumpmap_pars_fragment:A1,clipping_planes_fragment:T1,clipping_planes_pars_fragment:R1,clipping_planes_pars_vertex:C1,clipping_planes_vertex:w1,color_fragment:N1,color_pars_fragment:D1,color_pars_vertex:U1,color_vertex:L1,common:O1,cube_uv_reflection_fragment:P1,defaultnormal_vertex:F1,displacementmap_pars_vertex:I1,displacementmap_vertex:B1,emissivemap_fragment:z1,emissivemap_pars_fragment:H1,colorspace_fragment:G1,colorspace_pars_fragment:V1,envmap_fragment:k1,envmap_common_pars_fragment:X1,envmap_pars_fragment:W1,envmap_pars_vertex:q1,envmap_physical_pars_fragment:iA,envmap_vertex:j1,fog_vertex:Y1,fog_pars_vertex:Z1,fog_fragment:K1,fog_pars_fragment:Q1,gradientmap_pars_fragment:J1,lightmap_pars_fragment:$1,lights_lambert_fragment:eA,lights_lambert_pars_fragment:tA,lights_pars_begin:nA,lights_toon_fragment:aA,lights_toon_pars_fragment:sA,lights_phong_fragment:rA,lights_phong_pars_fragment:oA,lights_physical_fragment:lA,lights_physical_pars_fragment:cA,lights_fragment_begin:uA,lights_fragment_maps:fA,lights_fragment_end:dA,lightprobes_pars_fragment:hA,logdepthbuf_fragment:pA,logdepthbuf_pars_fragment:mA,logdepthbuf_pars_vertex:gA,logdepthbuf_vertex:_A,map_fragment:vA,map_pars_fragment:xA,map_particle_fragment:SA,map_particle_pars_fragment:yA,metalnessmap_fragment:MA,metalnessmap_pars_fragment:bA,morphinstance_vertex:EA,morphcolor_vertex:AA,morphnormal_vertex:TA,morphtarget_pars_vertex:RA,morphtarget_vertex:CA,normal_fragment_begin:wA,normal_fragment_maps:NA,normal_pars_fragment:DA,normal_pars_vertex:UA,normal_vertex:LA,normalmap_pars_fragment:OA,clearcoat_normal_fragment_begin:PA,clearcoat_normal_fragment_maps:FA,clearcoat_pars_fragment:IA,iridescence_pars_fragment:BA,opaque_fragment:zA,packing:HA,premultiplied_alpha_fragment:GA,project_vertex:VA,dithering_fragment:kA,dithering_pars_fragment:XA,roughnessmap_fragment:WA,roughnessmap_pars_fragment:qA,shadowmap_pars_fragment:jA,shadowmap_pars_vertex:YA,shadowmap_vertex:ZA,shadowmask_pars_fragment:KA,skinbase_vertex:QA,skinning_pars_vertex:JA,skinning_vertex:$A,skinnormal_vertex:eT,specularmap_fragment:tT,specularmap_pars_fragment:nT,tonemapping_fragment:iT,tonemapping_pars_fragment:aT,transmission_fragment:sT,transmission_pars_fragment:rT,uv_pars_fragment:oT,uv_pars_vertex:lT,uv_vertex:cT,worldpos_vertex:uT,background_vert:fT,background_frag:dT,backgroundCube_vert:hT,backgroundCube_frag:pT,cube_vert:mT,cube_frag:gT,depth_vert:_T,depth_frag:vT,distance_vert:xT,distance_frag:ST,equirect_vert:yT,equirect_frag:MT,linedashed_vert:bT,linedashed_frag:ET,meshbasic_vert:AT,meshbasic_frag:TT,meshlambert_vert:RT,meshlambert_frag:CT,meshmatcap_vert:wT,meshmatcap_frag:NT,meshnormal_vert:DT,meshnormal_frag:UT,meshphong_vert:LT,meshphong_frag:OT,meshphysical_vert:PT,meshphysical_frag:FT,meshtoon_vert:IT,meshtoon_frag:BT,points_vert:zT,points_frag:HT,shadow_vert:GT,shadow_frag:VT,sprite_vert:kT,sprite_frag:XT},Pe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ki={basic:{uniforms:Bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Bn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Bn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Bn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Bn([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Bn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Bn([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Bn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Bn([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Bn([Pe.common,Pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Bn([Pe.lights,Pe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};ki.physical={uniforms:Bn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const iu={r:0,b:0,g:0},WT=new en,eS=new st;eS.set(-1,0,0,0,1,0,0,0,1);function qT(r,e,i,s,l,c){const f=new Et(0);let p=l===!0?0:1,m,h,v=null,x=0,g=null;function b(B){let I=B.isScene===!0?B.background:null;if(I&&I.isTexture){const w=B.backgroundBlurriness>0;I=e.get(I,w)}return I}function A(B){let I=!1;const w=b(B);w===null?y(f,p):w&&w.isColor&&(y(w,1),I=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function N(B,I){const w=b(I);w&&(w.isCubeTexture||w.mapping===Nu)?(h===void 0&&(h=new Ki(new io(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:$r(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(WT.makeRotationFromEuler(I.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(eS),h.material.toneMapped=St.getTransfer(w.colorSpace)!==Bt,(v!==w||x!==w.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,v=w,x=w.version,g=r.toneMapping),h.layers.enableAll(),B.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Ki(new Uu(2,2),new Qi({name:"BackgroundMaterial",uniforms:$r(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=St.getTransfer(w.colorSpace)!==Bt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||x!==w.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=w,x=w.version,g=r.toneMapping),m.layers.enableAll(),B.unshift(m,m.geometry,m.material,0,0,null))}function y(B,I){B.getRGB(iu,Zx(r)),i.buffers.color.setClear(iu.r,iu.g,iu.b,I,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(B,I=1){f.set(B),p=I,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(B){p=B,y(f,p)},render:A,addToRenderList:N,dispose:S}}function jT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function p(V,K,ue,ge,J){let z=!1;const G=x(V,ge,ue,K);c!==G&&(c=G,h(c.object)),z=b(V,ge,ue,J),z&&A(V,ge,ue,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(z||f)&&(f=!1,w(V,K,ue,ge),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return r.createVertexArray()}function h(V){return r.bindVertexArray(V)}function v(V){return r.deleteVertexArray(V)}function x(V,K,ue,ge){const J=ge.wireframe===!0;let z=s[K.id];z===void 0&&(z={},s[K.id]=z);const G=V.isInstancedMesh===!0?V.id:0;let ne=z[G];ne===void 0&&(ne={},z[G]=ne);let _e=ne[ue.id];_e===void 0&&(_e={},ne[ue.id]=_e);let Ee=_e[J];return Ee===void 0&&(Ee=g(m()),_e[J]=Ee),Ee}function g(V){const K=[],ue=[],ge=[];for(let J=0;J<i;J++)K[J]=0,ue[J]=0,ge[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ue,attributeDivisors:ge,object:V,attributes:{},index:null}}function b(V,K,ue,ge){const J=c.attributes,z=K.attributes;let G=0;const ne=ue.getAttributes();for(const _e in ne)if(ne[_e].location>=0){const O=J[_e];let Z=z[_e];if(Z===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(Z=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(Z=V.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;G++}return c.attributesNum!==G||c.index!==ge}function A(V,K,ue,ge){const J={},z=K.attributes;let G=0;const ne=ue.getAttributes();for(const _e in ne)if(ne[_e].location>=0){let O=z[_e];O===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(O=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(O=V.instanceColor));const Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),J[_e]=Z,G++}c.attributes=J,c.attributesNum=G,c.index=ge}function N(){const V=c.newAttributes;for(let K=0,ue=V.length;K<ue;K++)V[K]=0}function y(V){S(V,0)}function S(V,K){const ue=c.newAttributes,ge=c.enabledAttributes,J=c.attributeDivisors;ue[V]=1,ge[V]===0&&(r.enableVertexAttribArray(V),ge[V]=1),J[V]!==K&&(r.vertexAttribDivisor(V,K),J[V]=K)}function B(){const V=c.newAttributes,K=c.enabledAttributes;for(let ue=0,ge=K.length;ue<ge;ue++)K[ue]!==V[ue]&&(r.disableVertexAttribArray(ue),K[ue]=0)}function I(V,K,ue,ge,J,z,G){G===!0?r.vertexAttribIPointer(V,K,ue,J,z):r.vertexAttribPointer(V,K,ue,ge,J,z)}function w(V,K,ue,ge){N();const J=ge.attributes,z=ue.getAttributes(),G=K.defaultAttributeValues;for(const ne in z){const _e=z[ne];if(_e.location>=0){let Ee=J[ne];if(Ee===void 0&&(ne==="instanceMatrix"&&V.instanceMatrix&&(Ee=V.instanceMatrix),ne==="instanceColor"&&V.instanceColor&&(Ee=V.instanceColor)),Ee!==void 0){const O=Ee.normalized,Z=Ee.itemSize,be=e.get(Ee);if(be===void 0)continue;const Ce=be.buffer,Fe=be.type,se=be.bytesPerElement,Se=Fe===r.INT||Fe===r.UNSIGNED_INT||Ee.gpuType===Pp;if(Ee.isInterleavedBufferAttribute){const Me=Ee.data,He=Me.stride,nt=Ee.offset;if(Me.isInstancedInterleavedBuffer){for(let Ke=0;Ke<_e.locationSize;Ke++)S(_e.location+Ke,Me.meshPerAttribute);V.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ke=0;Ke<_e.locationSize;Ke++)y(_e.location+Ke);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Ke=0;Ke<_e.locationSize;Ke++)I(_e.location+Ke,Z/_e.locationSize,Fe,O,He*se,(nt+Z/_e.locationSize*Ke)*se,Se)}else{if(Ee.isInstancedBufferAttribute){for(let Me=0;Me<_e.locationSize;Me++)S(_e.location+Me,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Me=0;Me<_e.locationSize;Me++)y(_e.location+Me);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Me=0;Me<_e.locationSize;Me++)I(_e.location+Me,Z/_e.locationSize,Fe,O,Z*se,Z/_e.locationSize*Me*se,Se)}}else if(G!==void 0){const O=G[ne];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(_e.location,O);break;case 3:r.vertexAttrib3fv(_e.location,O);break;case 4:r.vertexAttrib4fv(_e.location,O);break;default:r.vertexAttrib1fv(_e.location,O)}}}}B()}function P(){D();for(const V in s){const K=s[V];for(const ue in K){const ge=K[ue];for(const J in ge){const z=ge[J];for(const G in z)v(z[G].object),delete z[G];delete ge[J]}}delete s[V]}}function U(V){if(s[V.id]===void 0)return;const K=s[V.id];for(const ue in K){const ge=K[ue];for(const J in ge){const z=ge[J];for(const G in z)v(z[G].object),delete z[G];delete ge[J]}}delete s[V.id]}function F(V){for(const K in s){const ue=s[K];for(const ge in ue){const J=ue[ge];if(J[V.id]===void 0)continue;const z=J[V.id];for(const G in z)v(z[G].object),delete z[G];delete J[V.id]}}}function E(V){for(const K in s){const ue=s[K],ge=V.isInstancedMesh===!0?V.id:0,J=ue[ge];if(J!==void 0){for(const z in J){const G=J[z];for(const ne in G)v(G[ne].object),delete G[ne];delete J[z]}delete ue[ge],Object.keys(ue).length===0&&delete s[K]}}}function D(){X(),f=!0,c!==l&&(c=l,h(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:U,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:N,enableAttribute:y,disableUnusedAttributes:B}}function YT(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function f(m,h,v){v!==0&&(r.drawArraysInstanced(s,m,h,v),i.update(h,s,v))}function p(m,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,v);let g=0;for(let b=0;b<v;b++)g+=h[b];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function ZT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Oi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const E=F===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ui&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Xi&&!E)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(tt("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),B=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:A,maxTextureSize:N,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:B,maxVaryings:I,maxFragmentUniforms:w,maxSamples:P,samples:U}}function KT(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Gs,p=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const b=x.length!==0||g||s!==0||l;return l=g,s=x.length,b},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=v(x,g,0)},this.setState=function(x,g,b){const A=x.clippingPlanes,N=x.clipIntersection,y=x.clipShadows,S=r.get(x);if(!l||A===null||A.length===0||c&&!y)c?v(null):h();else{const B=c?0:s,I=B*4;let w=S.clippingState||null;m.value=w,w=v(A,g,I,b);for(let P=0;P!==I;++P)w[P]=i[P];S.clippingState=w,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=B}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,g,b,A){const N=x!==null?x.length:0;let y=null;if(N!==0){if(y=m.value,A!==!0||y===null){const S=b+N*4,B=g.matrixWorldInverse;p.getNormalMatrix(B),(y===null||y.length<S)&&(y=new Float32Array(S));for(let I=0,w=b;I!==N;++I,w+=4)f.copy(x[I]).applyMatrix4(B,p),f.normal.toArray(y,w),y[w+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,y}}const ds=4,Fv=[.125,.215,.35,.446,.526,.582],ks=20,QT=256,al=new Jx,Iv=new Et;let Ah=null,Th=0,Rh=0,Ch=!1;const JT=new $;class Bv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=JT}=c;Ah=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Th,Rh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ys||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ca,format:Oi,colorSpace:xu,depthBuffer:!1},l=zv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$T(c)),this._blurMaterial=t2(c,e,i),this._ggxMaterial=e2(c,e,i)}return l}_compileMaterial(e){const i=new Ki(new Ei,e);this._renderer.compile(i,al)}_sceneToCubeUV(e,i,s,l,c){const m=new ci(90,1,i,s),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,b=x.toneMapping;x.getClearColor(Iv),x.toneMapping=qi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ki(new io,new Wx({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,y=N.material;let S=!1;const B=e.background;B?B.isColor&&(y.color.copy(B),e.background=null,S=!0):(y.color.copy(Iv),S=!0);for(let I=0;I<6;I++){const w=I%3;w===0?(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[I],c.y,c.z)):w===1?(m.up.set(0,0,h[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[I],c.z)):(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[I]));const P=this._cubeSize;kr(l,w*P,I>2?P:0,P,P),x.setRenderTarget(l),S&&x.render(N,m),x.render(e,m)}x.toneMapping=b,x.autoClear=g,e.background=B}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ys||e.mapping===Qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;kr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,al)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(h*h-v*v),g=0+h*1.25,b=x*g,{_lodMax:A}=this,N=this._sizeLods[s],y=3*N*(s>A-ds?s-A+ds:0),S=4*(this._cubeSize-N);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=A-i,kr(c,y,S,3*N,2*N),l.setRenderTarget(c),l.render(p,al),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,kr(e,y,S,3*N,2*N),l.setRenderTarget(e),l.render(p,al)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&bt("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=h;const g=h.uniforms,b=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*ks-1),N=c/A,y=isFinite(c)?1+Math.floor(v*N):ks;y>ks&&tt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ks}`);const S=[];let B=0;for(let F=0;F<ks;++F){const E=F/N,D=Math.exp(-E*E/2);S.push(D),F===0?B+=D:F<y&&(B+=2*D)}for(let F=0;F<S.length;F++)S[F]=S[F]/B;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:I}=this;g.dTheta.value=A,g.mipInt.value=I-s;const w=this._sizeLods[l],P=3*w*(l>I-ds?l-I+ds:0),U=4*(this._cubeSize-w);kr(i,P,U,3*w,2*w),m.setRenderTarget(i),m.render(x,al)}}function $T(r){const e=[],i=[],s=[];let l=r;const c=r-ds+1+Fv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>r-ds?m=Fv[f-r+ds-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,x=1+h,g=[v,v,x,v,x,x,v,v,x,x,v,x],b=6,A=6,N=3,y=2,S=1,B=new Float32Array(N*A*b),I=new Float32Array(y*A*b),w=new Float32Array(S*A*b);for(let U=0;U<b;U++){const F=U%3*2/3-1,E=U>2?0:-1,D=[F,E,0,F+2/3,E,0,F+2/3,E+1,0,F,E,0,F+2/3,E+1,0,F,E+1,0];B.set(D,N*A*U),I.set(g,y*A*U);const X=[U,U,U,U,U,U];w.set(X,S*A*U)}const P=new Ei;P.setAttribute("position",new Yi(B,N)),P.setAttribute("uv",new Yi(I,y)),P.setAttribute("faceIndex",new Yi(w,S)),s.push(new Ki(P,null)),l>ds&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function zv(r,e,i){const s=new ji(r,e,i);return s.texture.mapping=Nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function kr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function e2(r,e,i){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function t2(r,e,i){const s=new Float32Array(ks),l=new $(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Hv(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Gv(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class tS extends ji{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new jx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new io(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:$r(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:Aa});c.uniforms.tEquirect.value=i;const f=new Ki(l,c),p=i.minFilter;return i.minFilter===Xs&&(i.minFilter=Fn),new r1(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function n2(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,b=!1){return g==null?null:b?f(g):c(g)}function c(g){if(g&&g.isTexture){const b=g.mapping;if(b===Kd||b===Qd)if(e.has(g)){const A=e.get(g).texture;return p(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const N=new tS(A.height);return N.fromEquirectangularTexture(r,g),e.set(g,N),g.addEventListener("dispose",h),p(N.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const b=g.mapping,A=b===Kd||b===Qd,N=b===Ys||b===Qr;if(A||N){let y=i.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Bv(r)),y=A?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const B=g.image;return A&&B&&B.height>0||N&&B&&m(B)?(s===null&&(s=new Bv(r)),y=A?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function p(g,b){return b===Kd?g.mapping=Ys:b===Qd&&(g.mapping=Qr),g}function m(g){let b=0;const A=6;for(let N=0;N<A;N++)g[N]!==void 0&&b++;return b===A}function h(g){const b=g.target;b.removeEventListener("dispose",h);const A=e.get(b);A!==void 0&&(e.delete(b),A.dispose())}function v(g){const b=g.target;b.removeEventListener("dispose",v);const A=i.get(b);A!==void 0&&(i.delete(b),A.dispose())}function x(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function i2(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&qr("WebGLRenderer: "+s+" extension not supported."),l}}}function a2(r,e,i,s){const l={},c=new WeakMap;function f(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",f),delete l[g.id];const b=c.get(g);b&&(e.remove(b),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const b in g)e.update(g[b],r.ARRAY_BUFFER)}function h(x){const g=[],b=x.index,A=x.attributes.position;let N=0;if(A===void 0)return;if(b!==null){const B=b.array;N=b.version;for(let I=0,w=B.length;I<w;I+=3){const P=B[I+0],U=B[I+1],F=B[I+2];g.push(P,U,U,F,F,P)}}else{const B=A.array;N=A.version;for(let I=0,w=B.length/3-1;I<w;I+=3){const P=I+0,U=I+1,F=I+2;g.push(P,U,U,F,F,P)}}const y=new(A.count>=65535?Xx:kx)(g,1);y.version=N;const S=c.get(x);S&&e.remove(S),c.set(x,y)}function v(x){const g=c.get(x);if(g){const b=x.index;b!==null&&g.version<b.version&&h(x)}else h(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:v}}function s2(r,e,i){let s;function l(x){s=x}let c,f;function p(x){c=x.type,f=x.bytesPerElement}function m(x,g){r.drawElements(s,g,c,x*f),i.update(g,s,1)}function h(x,g,b){b!==0&&(r.drawElementsInstanced(s,g,c,x*f,b),i.update(g,s,b))}function v(x,g,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,b);let N=0;for(let y=0;y<b;y++)N+=g[y];i.update(N,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v}function r2(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:bt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function o2(r,e,i){const s=new WeakMap,l=new tn;function c(f,p,m){const h=f.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=v!==void 0?v.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let X=function(){E.dispose(),s.delete(p),p.removeEventListener("dispose",X)};var b=X;g!==void 0&&g.texture.dispose();const A=p.morphAttributes.position!==void 0,N=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],B=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let w=0;A===!0&&(w=1),N===!0&&(w=2),y===!0&&(w=3);let P=p.attributes.position.count*w,U=1;P>e.maxTextureSize&&(U=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*U*4*x),E=new Gx(F,P,U,x);E.type=Xi,E.needsUpdate=!0;const D=w*4;for(let V=0;V<x;V++){const K=S[V],ue=B[V],ge=I[V],J=P*U*4*V;for(let z=0;z<K.count;z++){const G=z*D;A===!0&&(l.fromBufferAttribute(K,z),F[J+G+0]=l.x,F[J+G+1]=l.y,F[J+G+2]=l.z,F[J+G+3]=0),N===!0&&(l.fromBufferAttribute(ue,z),F[J+G+4]=l.x,F[J+G+5]=l.y,F[J+G+6]=l.z,F[J+G+7]=0),y===!0&&(l.fromBufferAttribute(ge,z),F[J+G+8]=l.x,F[J+G+9]=l.y,F[J+G+10]=l.z,F[J+G+11]=ge.itemSize===4?l.w:1)}}g={count:x,texture:E,size:new Mt(P,U)},s.set(p,g),p.addEventListener("dispose",X)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let A=0;for(let y=0;y<h.length;y++)A+=h[y];const N=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(r,"morphTargetBaseInfluence",N),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function l2(r,e,i,s,l){let c=new WeakMap;function f(h){const v=l.render.frame,x=h.geometry,g=e.get(h,x);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==v&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==v&&(b.update(),c.set(b,v))}return g}function p(){c=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:p}}const c2={[Ax]:"LINEAR_TONE_MAPPING",[Tx]:"REINHARD_TONE_MAPPING",[Rx]:"CINEON_TONE_MAPPING",[Cx]:"ACES_FILMIC_TONE_MAPPING",[Nx]:"AGX_TONE_MAPPING",[Dx]:"NEUTRAL_TONE_MAPPING",[wx]:"CUSTOM_TONE_MAPPING"};function u2(r,e,i,s,l,c){const f=new ji(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Jr(e,i):void 0}),p=new ji(e,i,{type:Ca,depthBuffer:!1,stencilBuffer:!1}),m=new Ei;m.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new bi([0,2,0,0,2,0],2));const h=new QE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Ki(m,h),x=new Jx(-1,1,1,-1,0,1);let g=null,b=null,A=!1,N,y=null,S=[],B=!1;this.setSize=function(I,w){f.setSize(I,w),p.setSize(I,w);for(let P=0;P<S.length;P++){const U=S[P];U.setSize&&U.setSize(I,w)}},this.setEffects=function(I){S=I,B=S.length>0&&S[0].isRenderPass===!0;const w=f.width,P=f.height;for(let U=0;U<S.length;U++){const F=S[U];F.setSize&&F.setSize(w,P)}},this.begin=function(I,w){if(A||I.toneMapping===qi&&S.length===0)return!1;if(y=w,w!==null){const P=w.width,U=w.height;(f.width!==P||f.height!==U)&&this.setSize(P,U)}return B===!1&&I.setRenderTarget(f),N=I.toneMapping,I.toneMapping=qi,!0},this.hasRenderPass=function(){return B},this.end=function(I,w){I.toneMapping=N,A=!0;let P=f,U=p;for(let F=0;F<S.length;F++){const E=S[F];if(E.enabled!==!1&&(E.render(I,U,P,w),E.needsSwap!==!1)){const D=P;P=U,U=D}}if(g!==I.outputColorSpace||b!==I.toneMapping){g=I.outputColorSpace,b=I.toneMapping,h.defines={},St.getTransfer(g)===Bt&&(h.defines.SRGB_TRANSFER="");const F=c2[b];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,I.setRenderTarget(y),I.render(v,x),y=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),p.dispose(),m.dispose(),h.dispose()}}const nS=new zn,Cp=new Jr(1,1),iS=new Gx,aS=new TE,sS=new jx,Vv=[],kv=[],Xv=new Float32Array(16),Wv=new Float32Array(9),qv=new Float32Array(4);function ao(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Vv[l];if(c===void 0&&(c=new Float32Array(l),Vv[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function yn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Mn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Ou(r,e){let i=kv[e];i===void 0&&(i=new Int32Array(e),kv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function f2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function d2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2fv(this.addr,e),Mn(i,e)}}function h2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;r.uniform3fv(this.addr,e),Mn(i,e)}}function p2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4fv(this.addr,e),Mn(i,e)}}function m2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;qv.set(s),r.uniformMatrix2fv(this.addr,!1,qv),Mn(i,s)}}function g2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;Wv.set(s),r.uniformMatrix3fv(this.addr,!1,Wv),Mn(i,s)}}function _2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;Xv.set(s),r.uniformMatrix4fv(this.addr,!1,Xv),Mn(i,s)}}function v2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function x2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2iv(this.addr,e),Mn(i,e)}}function S2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;r.uniform3iv(this.addr,e),Mn(i,e)}}function y2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4iv(this.addr,e),Mn(i,e)}}function M2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function b2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2uiv(this.addr,e),Mn(i,e)}}function E2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;r.uniform3uiv(this.addr,e),Mn(i,e)}}function A2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4uiv(this.addr,e),Mn(i,e)}}function T2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Cp.compareFunction=i.isReversedDepthBuffer()?Vp:Gp,c=Cp):c=nS,i.setTexture2D(e||c,l)}function R2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||aS,l)}function C2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||sS,l)}function w2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||iS,l)}function N2(r){switch(r){case 5126:return f2;case 35664:return d2;case 35665:return h2;case 35666:return p2;case 35674:return m2;case 35675:return g2;case 35676:return _2;case 5124:case 35670:return v2;case 35667:case 35671:return x2;case 35668:case 35672:return S2;case 35669:case 35673:return y2;case 5125:return M2;case 36294:return b2;case 36295:return E2;case 36296:return A2;case 35678:case 36198:case 36298:case 36306:case 35682:return T2;case 35679:case 36299:case 36307:return R2;case 35680:case 36300:case 36308:case 36293:return C2;case 36289:case 36303:case 36311:case 36292:return w2}}function D2(r,e){r.uniform1fv(this.addr,e)}function U2(r,e){const i=ao(e,this.size,2);r.uniform2fv(this.addr,i)}function L2(r,e){const i=ao(e,this.size,3);r.uniform3fv(this.addr,i)}function O2(r,e){const i=ao(e,this.size,4);r.uniform4fv(this.addr,i)}function P2(r,e){const i=ao(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function F2(r,e){const i=ao(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function I2(r,e){const i=ao(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function B2(r,e){r.uniform1iv(this.addr,e)}function z2(r,e){r.uniform2iv(this.addr,e)}function H2(r,e){r.uniform3iv(this.addr,e)}function G2(r,e){r.uniform4iv(this.addr,e)}function V2(r,e){r.uniform1uiv(this.addr,e)}function k2(r,e){r.uniform2uiv(this.addr,e)}function X2(r,e){r.uniform3uiv(this.addr,e)}function W2(r,e){r.uniform4uiv(this.addr,e)}function q2(r,e,i){const s=this.cache,l=e.length,c=Ou(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Cp:f=nS;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function j2(r,e,i){const s=this.cache,l=e.length,c=Ou(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||aS,c[f])}function Y2(r,e,i){const s=this.cache,l=e.length,c=Ou(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||sS,c[f])}function Z2(r,e,i){const s=this.cache,l=e.length,c=Ou(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||iS,c[f])}function K2(r){switch(r){case 5126:return D2;case 35664:return U2;case 35665:return L2;case 35666:return O2;case 35674:return P2;case 35675:return F2;case 35676:return I2;case 5124:case 35670:return B2;case 35667:case 35671:return z2;case 35668:case 35672:return H2;case 35669:case 35673:return G2;case 5125:return V2;case 36294:return k2;case 36295:return X2;case 36296:return W2;case 35678:case 36198:case 36298:case 36306:case 35682:return q2;case 35679:case 36299:case 36307:return j2;case 35680:case 36300:case 36308:case 36293:return Y2;case 36289:case 36303:case 36311:case 36292:return Z2}}class Q2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=N2(i.type)}}class J2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=K2(i.type)}}class $2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function jv(r,e){r.seq.push(e),r.map[e.id]=e}function eR(r,e,i){const s=r.name,l=s.length;for(wh.lastIndex=0;;){const c=wh.exec(s),f=wh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){jv(i,h===void 0?new Q2(p,r,e):new J2(p,r,e));break}else{let x=i.map[p];x===void 0&&(x=new $2(p),jv(i,x)),i=x}}}class fu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);eR(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function Yv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const tR=37297;let nR=0;function iR(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const Zv=new st;function aR(r){St._getMatrix(Zv,St.workingColorSpace,r);const e=`mat3( ${Zv.elements.map(i=>i.toFixed(4))} )`;switch(St.getTransfer(r)){case Su:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Kv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+iR(r.getShaderSource(e),p)}else return c}function sR(r,e){const i=aR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const rR={[Ax]:"Linear",[Tx]:"Reinhard",[Rx]:"Cineon",[Cx]:"ACESFilmic",[Nx]:"AgX",[Dx]:"Neutral",[wx]:"Custom"};function oR(r,e){const i=rR[e];return i===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const au=new $;function lR(){St.getLuminanceCoefficients(au);const r=au.x.toFixed(4),e=au.y.toFixed(4),i=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function uR(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function fR(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function ll(r){return r!==""}function Qv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dR=/^[ \t]*#include +<([\w\d./]+)>/gm;function wp(r){return r.replace(dR,pR)}const hR=new Map;function pR(r,e){let i=ct[e];if(i===void 0){const s=hR.get(e);if(s!==void 0)i=ct[s],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wp(i)}const mR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $v(r){return r.replace(mR,gR)}function gR(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ex(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _R={[su]:"SHADOWMAP_TYPE_PCF",[ol]:"SHADOWMAP_TYPE_VSM"};function vR(r){return _R[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xR={[Ys]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE",[Nu]:"ENVMAP_TYPE_CUBE_UV"};function SR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":xR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const yR={[Qr]:"ENVMAP_MODE_REFRACTION"};function MR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":yR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bR={[Ex]:"ENVMAP_BLENDING_MULTIPLY",[sE]:"ENVMAP_BLENDING_MIX",[rE]:"ENVMAP_BLENDING_ADD"};function ER(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":bR[r.combine]||"ENVMAP_BLENDING_NONE"}function AR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function TR(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=vR(i),h=SR(i),v=MR(i),x=ER(i),g=AR(i),b=cR(i),A=uR(c),N=l.createProgram();let y,S,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(ll).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(ll).join(`
`),S.length>0&&(S+=`
`)):(y=[ex(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),S=[ex(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?ct.tonemapping_pars_fragment:"",i.toneMapping!==qi?oR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,sR("linearToOutputTexel",i.outputColorSpace),lR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ll).join(`
`)),f=wp(f),f=Qv(f,i),f=Jv(f,i),p=wp(p),p=Qv(p,i),p=Jv(p,i),f=$v(f),p=$v(p),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===rv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===rv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const I=B+y+f,w=B+S+p,P=Yv(l,l.VERTEX_SHADER,I),U=Yv(l,l.FRAGMENT_SHADER,w);l.attachShader(N,P),l.attachShader(N,U),i.index0AttributeName!==void 0?l.bindAttribLocation(N,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(N,0,"position"),l.linkProgram(N);function F(V){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(N)||"",ue=l.getShaderInfoLog(P)||"",ge=l.getShaderInfoLog(U)||"",J=K.trim(),z=ue.trim(),G=ge.trim();let ne=!0,_e=!0;if(l.getProgramParameter(N,l.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,N,P,U);else{const Ee=Kv(l,P,"vertex"),O=Kv(l,U,"fragment");bt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(N,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+J+`
`+Ee+`
`+O)}else J!==""?tt("WebGLProgram: Program Info Log:",J):(z===""||G==="")&&(_e=!1);_e&&(V.diagnostics={runnable:ne,programLog:J,vertexShader:{log:z,prefix:y},fragmentShader:{log:G,prefix:S}})}l.deleteShader(P),l.deleteShader(U),E=new fu(l,N),D=fR(l,N)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(N,tR)),X},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=nR++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=P,this.fragmentShader=U,this}let RR=0;class CR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new wR(e),i.set(e,s)),s}}class wR{constructor(e){this.id=RR++,this.code=e,this.usedTimes=0}}function NR(r){return r===Zs||r===_u||r===vu}function DR(r,e,i,s,l,c){const f=new Xp,p=new CR,m=new Set,h=[],v=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return m.add(E),E===0?"uv":`uv${E}`}function N(E,D,X,V,K,ue){const ge=V.fog,J=K.geometry,z=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ne=e.get(E.envMap||z,G),_e=ne&&ne.mapping===Nu?ne.image.height:null,Ee=b[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&tt("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const O=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Z=O!==void 0?O.length:0;let be=0;J.morphAttributes.position!==void 0&&(be=1),J.morphAttributes.normal!==void 0&&(be=2),J.morphAttributes.color!==void 0&&(be=3);let Ce,Fe,se,Se;if(Ee){const Ve=ki[Ee];Ce=Ve.vertexShader,Fe=Ve.fragmentShader}else{Ce=E.vertexShader,Fe=E.fragmentShader;const Ve=p.getVertexShaderStage(E),Kt=p.getFragmentShaderStage(E);p.update(E,Ve,Kt),se=Ve.id,Se=Kt.id}const Me=r.getRenderTarget(),He=r.state.buffers.depth.getReversed(),nt=K.isInstancedMesh===!0,Ke=K.isBatchedMesh===!0,jt=!!E.map,ut=!!E.matcap,_t=!!ne,vt=!!E.aoMap,ft=!!E.lightMap,nn=!!E.bumpMap&&E.wireframe===!1,an=!!E.normalMap,sn=!!E.displacementMap,cn=!!E.emissiveMap,qt=!!E.metalnessMap,rn=!!E.roughnessMap,j=E.anisotropy>0,zt=E.clearcoat>0,Ct=E.dispersion>0,L=E.iridescence>0,M=E.sheen>0,Q=E.transmission>0,re=j&&!!E.anisotropyMap,de=zt&&!!E.clearcoatMap,Ae=zt&&!!E.clearcoatNormalMap,Ne=zt&&!!E.clearcoatRoughnessMap,fe=L&&!!E.iridescenceMap,he=L&&!!E.iridescenceThicknessMap,Re=M&&!!E.sheenColorMap,Be=M&&!!E.sheenRoughnessMap,Le=!!E.specularMap,De=!!E.specularColorMap,Ze=!!E.specularIntensityMap,Qe=Q&&!!E.transmissionMap,it=Q&&!!E.thicknessMap,W=!!E.gradientMap,Te=!!E.alphaMap,me=E.alphaTest>0,we=!!E.alphaHash,Ie=!!E.extensions;let ye=qi;E.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ye=r.toneMapping);const qe={shaderID:Ee,shaderType:E.type,shaderName:E.name,vertexShader:Ce,fragmentShader:Fe,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&K._colorsTexture!==null,instancing:nt,instancingColor:nt&&K.instanceColor!==null,instancingMorph:nt&&K.morphTexture!==null,outputColorSpace:Me===null?r.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:jt,matcap:ut,envMap:_t,envMapMode:_t&&ne.mapping,envMapCubeUVHeight:_e,aoMap:vt,lightMap:ft,bumpMap:nn,normalMap:an,displacementMap:sn,emissiveMap:cn,normalMapObjectSpace:an&&E.normalMapType===cE,normalMapTangentSpace:an&&E.normalMapType===Ap,packedNormalMap:an&&E.normalMapType===Ap&&NR(E.normalMap.format),metalnessMap:qt,roughnessMap:rn,anisotropy:j,anisotropyMap:re,clearcoat:zt,clearcoatMap:de,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ne,dispersion:Ct,iridescence:L,iridescenceMap:fe,iridescenceThicknessMap:he,sheen:M,sheenColorMap:Re,sheenRoughnessMap:Be,specularMap:Le,specularColorMap:De,specularIntensityMap:Ze,transmission:Q,transmissionMap:Qe,thicknessMap:it,gradientMap:W,opaque:E.transparent===!1&&E.blending===Wr&&E.alphaToCoverage===!1,alphaMap:Te,alphaTest:me,alphaHash:we,combine:E.combine,mapUv:jt&&A(E.map.channel),aoMapUv:vt&&A(E.aoMap.channel),lightMapUv:ft&&A(E.lightMap.channel),bumpMapUv:nn&&A(E.bumpMap.channel),normalMapUv:an&&A(E.normalMap.channel),displacementMapUv:sn&&A(E.displacementMap.channel),emissiveMapUv:cn&&A(E.emissiveMap.channel),metalnessMapUv:qt&&A(E.metalnessMap.channel),roughnessMapUv:rn&&A(E.roughnessMap.channel),anisotropyMapUv:re&&A(E.anisotropyMap.channel),clearcoatMapUv:de&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:he&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(E.sheenRoughnessMap.channel),specularMapUv:Le&&A(E.specularMap.channel),specularColorMapUv:De&&A(E.specularColorMap.channel),specularIntensityMapUv:Ze&&A(E.specularIntensityMap.channel),transmissionMapUv:Qe&&A(E.transmissionMap.channel),thicknessMapUv:it&&A(E.thicknessMap.channel),alphaMapUv:Te&&A(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(an||j),vertexNormals:!!J.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!J.attributes.uv&&(jt||Te),fog:!!ge,useFog:E.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||J.attributes.normal===void 0&&an===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:He,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:be,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:ye,decodeVideoTexture:jt&&E.map.isVideoTexture===!0&&St.getTransfer(E.map.colorSpace)===Bt,decodeVideoTextureEmissive:cn&&E.emissiveMap.isVideoTexture===!0&&St.getTransfer(E.emissiveMap.colorSpace)===Bt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ma,flipSided:E.side===Zn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ie&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&E.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function y(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const X in E.defines)D.push(X),D.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(S(D,E),B(D,E),D.push(r.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function S(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function B(E,D){f.disableAll(),D.instancing&&f.enable(0),D.instancingColor&&f.enable(1),D.instancingMorph&&f.enable(2),D.matcap&&f.enable(3),D.envMap&&f.enable(4),D.normalMapObjectSpace&&f.enable(5),D.normalMapTangentSpace&&f.enable(6),D.clearcoat&&f.enable(7),D.iridescence&&f.enable(8),D.alphaTest&&f.enable(9),D.vertexColors&&f.enable(10),D.vertexAlphas&&f.enable(11),D.vertexUv1s&&f.enable(12),D.vertexUv2s&&f.enable(13),D.vertexUv3s&&f.enable(14),D.vertexTangents&&f.enable(15),D.anisotropy&&f.enable(16),D.alphaHash&&f.enable(17),D.batching&&f.enable(18),D.dispersion&&f.enable(19),D.batchingColor&&f.enable(20),D.gradientMap&&f.enable(21),D.packedNormalMap&&f.enable(22),D.vertexNormals&&f.enable(23),E.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),D.numLightProbeGrids>0&&f.enable(22),D.hasPositionAttribute&&f.enable(23),E.push(f.mask)}function I(E){const D=b[E.type];let X;if(D){const V=ki[D];X=YE.clone(V.uniforms)}else X=E.uniforms;return X}function w(E,D){let X=v.get(D);return X!==void 0?++X.usedTimes:(X=new TR(r,D,E,l),h.push(X),v.set(D,X)),X}function P(E){if(--E.usedTimes===0){const D=h.indexOf(E);h[D]=h[h.length-1],h.pop(),v.delete(E.cacheKey),E.destroy()}}function U(E){p.remove(E)}function F(){p.dispose()}return{getParameters:N,getProgramCacheKey:y,getUniforms:I,acquireProgram:w,releaseProgram:P,releaseShaderCache:U,programs:h,dispose:F}}function UR(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function LR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function tx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function nx(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function p(g,b,A,N,y,S){let B=r[e];return B===void 0?(B={id:g.id,object:g,geometry:b,material:A,materialVariant:f(g),groupOrder:N,renderOrder:g.renderOrder,z:y,group:S},r[e]=B):(B.id=g.id,B.object=g,B.geometry=b,B.material=A,B.materialVariant=f(g),B.groupOrder=N,B.renderOrder=g.renderOrder,B.z=y,B.group=S),e++,B}function m(g,b,A,N,y,S){const B=p(g,b,A,N,y,S);A.transmission>0?s.push(B):A.transparent===!0?l.push(B):i.push(B)}function h(g,b,A,N,y,S){const B=p(g,b,A,N,y,S);A.transmission>0?s.unshift(B):A.transparent===!0?l.unshift(B):i.unshift(B)}function v(g,b,A){i.length>1&&i.sort(g||LR),s.length>1&&s.sort(b||tx),l.length>1&&l.sort(b||tx),A&&(i.reverse(),s.reverse(),l.reverse())}function x(){for(let g=e,b=r.length;g<b;g++){const A=r[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:x,sort:v}}function OR(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new nx,r.set(s,[f])):l>=c.length?(f=new nx,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function PR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new Et};break;case"SpotLight":i={position:new $,direction:new $,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=i,i}}}function FR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let IR=0;function BR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function zR(r){const e=new PR,i=FR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new $);const l=new $,c=new en,f=new en;function p(h){let v=0,x=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let b=0,A=0,N=0,y=0,S=0,B=0,I=0,w=0,P=0,U=0,F=0;h.sort(BR);for(let D=0,X=h.length;D<X;D++){const V=h[D],K=V.color,ue=V.intensity,ge=V.distance;let J=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Zs?J=V.shadow.map.texture:J=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=K.r*ue,x+=K.g*ue,g+=K.b*ue;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],ue);F++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,ne=i.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,s.directionalShadow[b]=ne,s.directionalShadowMap[b]=J,s.directionalShadowMatrix[b]=V.shadow.matrix,B++}s.directional[b]=z,b++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(K).multiplyScalar(ue),z.distance=ge,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[N]=z;const G=V.shadow;if(V.map&&(s.spotLightMap[P]=V.map,P++,G.updateMatrices(V),V.castShadow&&U++),s.spotLightMatrix[N]=G.matrix,V.castShadow){const ne=i.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,s.spotShadow[N]=ne,s.spotShadowMap[N]=J,w++}N++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(K).multiplyScalar(ue),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=z,y++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const G=V.shadow,ne=i.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,ne.shadowCameraNear=G.camera.near,ne.shadowCameraFar=G.camera.far,s.pointShadow[A]=ne,s.pointShadowMap[A]=J,s.pointShadowMatrix[A]=V.shadow.matrix,I++}s.point[A]=z,A++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(ue),z.groundColor.copy(V.groundColor).multiplyScalar(ue),s.hemi[S]=z,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==b||E.pointLength!==A||E.spotLength!==N||E.rectAreaLength!==y||E.hemiLength!==S||E.numDirectionalShadows!==B||E.numPointShadows!==I||E.numSpotShadows!==w||E.numSpotMaps!==P||E.numLightProbes!==F)&&(s.directional.length=b,s.spot.length=N,s.rectArea.length=y,s.point.length=A,s.hemi.length=S,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=w+P-U,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=F,E.directionalLength=b,E.pointLength=A,E.spotLength=N,E.rectAreaLength=y,E.hemiLength=S,E.numDirectionalShadows=B,E.numPointShadows=I,E.numSpotShadows=w,E.numSpotMaps=P,E.numLightProbes=F,s.version=IR++)}function m(h,v){let x=0,g=0,b=0,A=0,N=0;const y=v.matrixWorldInverse;for(let S=0,B=h.length;S<B;S++){const I=h[S];if(I.isDirectionalLight){const w=s.directional[x];w.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),x++}else if(I.isSpotLight){const w=s.spot[b];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),b++}else if(I.isRectAreaLight){const w=s.rectArea[A];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),f.identity(),c.copy(I.matrixWorld),c.premultiply(y),f.extractRotation(c),w.halfWidth.set(I.width*.5,0,0),w.halfHeight.set(0,I.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),A++}else if(I.isPointLight){const w=s.point[g];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),g++}else if(I.isHemisphereLight){const w=s.hemi[N];w.direction.setFromMatrixPosition(I.matrixWorld),w.direction.transformDirection(y),N++}}}return{setup:p,setupView:m,state:s}}function ix(r){const e=new zR(r),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function v(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:h,setupLightsView:v,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function HR(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new ix(r),e.set(l,[p])):c>=f.length?(p=new ix(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const GR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kR=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],XR=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],ax=new en,sl=new $,Nh=new $;function WR(r,e,i){let s=new qp;const l=new Mt,c=new Mt,f=new tn,p=new $E,m=new e1,h={},v=i.maxTextureSize,x={[ps]:Zn,[Zn]:ps,[Ma]:Ma},g=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:GR,fragmentShader:VR}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const A=new Ei;A.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Ki(A,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let S=this.type;this.render=function(U,F,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===Hb&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=su);const D=r.getRenderTarget(),X=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Aa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ue=S!==this.type;ue&&F.traverse(function(ge){ge.material&&(Array.isArray(ge.material)?ge.material.forEach(J=>J.needsUpdate=!0):ge.material.needsUpdate=!0)});for(let ge=0,J=U.length;ge<J;ge++){const z=U[ge],G=z.shadow;if(G===void 0){tt("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ne=G.getFrameExtents();l.multiply(ne),c.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ne.x),l.x=c.x*ne.x,G.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ne.y),l.y=c.y*ne.y,G.mapSize.y=c.y));const _e=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=_e,G.map===null||ue===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ol){if(z.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ji(l.x,l.y,{format:Zs,type:Ca,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new Jr(l.x,l.y,Xi),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=wa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn}else z.isPointLight?(G.map=new tS(l.x),G.map.depthTexture=new WE(l.x,Zi)):(G.map=new ji(l.x,l.y),G.map.depthTexture=new Jr(l.x,l.y,Zi)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=wa,this.type===su?(G.map.depthTexture.compareFunction=_e?Vp:Gp,G.map.depthTexture.minFilter=Fn,G.map.depthTexture.magFilter=Fn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn);G.camera.updateProjectionMatrix()}const Ee=G.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Ee;O++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,O),r.clear();else{O===0&&(r.setRenderTarget(G.map),r.clear());const Z=G.getViewport(O);f.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),K.viewport(f)}if(z.isPointLight){const Z=G.camera,be=G.matrix,Ce=z.distance||Z.far;Ce!==Z.far&&(Z.far=Ce,Z.updateProjectionMatrix()),sl.setFromMatrixPosition(z.matrixWorld),Z.position.copy(sl),Nh.copy(Z.position),Nh.add(kR[O]),Z.up.copy(XR[O]),Z.lookAt(Nh),Z.updateMatrixWorld(),be.makeTranslation(-sl.x,-sl.y,-sl.z),ax.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ax,Z.coordinateSystem,Z.reversedDepth)}else G.updateMatrices(z);s=G.getFrustum(),w(F,E,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===ol&&B(G,E),G.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(D,X,V)};function B(U,F){const E=e.update(N);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,b.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ji(l.x,l.y,{format:Zs,type:Ca})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(F,null,E,g,N,null),b.uniforms.shadow_pass.value=U.mapPass.texture,b.uniforms.resolution.value=U.mapSize,b.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(F,null,E,b,N,null)}function I(U,F,E,D){let X=null;const V=E.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)X=V;else if(X=E.isPointLight===!0?m:p,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=X.uuid,ue=F.uuid;let ge=h[K];ge===void 0&&(ge={},h[K]=ge);let J=ge[ue];J===void 0&&(J=X.clone(),ge[ue]=J,F.addEventListener("dispose",P)),X=J}if(X.visible=F.visible,X.wireframe=F.wireframe,D===ol?X.side=F.shadowSide!==null?F.shadowSide:F.side:X.side=F.shadowSide!==null?F.shadowSide:x[F.side],X.alphaMap=F.alphaMap,X.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,X.map=F.map,X.clipShadows=F.clipShadows,X.clippingPlanes=F.clippingPlanes,X.clipIntersection=F.clipIntersection,X.displacementMap=F.displacementMap,X.displacementScale=F.displacementScale,X.displacementBias=F.displacementBias,X.wireframeLinewidth=F.wireframeLinewidth,X.linewidth=F.linewidth,E.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const K=r.properties.get(X);K.light=E}return X}function w(U,F,E,D,X){if(U.visible===!1)return;if(U.layers.test(F.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&X===ol)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,U.matrixWorld);const ue=e.update(U),ge=U.material;if(Array.isArray(ge)){const J=ue.groups;for(let z=0,G=J.length;z<G;z++){const ne=J[z],_e=ge[ne.materialIndex];if(_e&&_e.visible){const Ee=I(U,_e,D,X);U.onBeforeShadow(r,U,F,E,ue,Ee,ne),r.renderBufferDirect(E,null,ue,Ee,U,ne),U.onAfterShadow(r,U,F,E,ue,Ee,ne)}}}else if(ge.visible){const J=I(U,ge,D,X);U.onBeforeShadow(r,U,F,E,ue,J,null),r.renderBufferDirect(E,null,ue,J,U,null),U.onAfterShadow(r,U,F,E,ue,J,null)}}const K=U.children;for(let ue=0,ge=K.length;ue<ge;ue++)w(K[ue],F,E,D,X)}function P(U){U.target.removeEventListener("dispose",P);for(const E in h){const D=h[E],X=U.target.uuid;X in D&&(D[X].dispose(),delete D[X])}}}function qR(r,e){function i(){let W=!1;const Te=new tn;let me=null;const we=new tn(0,0,0,0);return{setMask:function(Ie){me!==Ie&&!W&&(r.colorMask(Ie,Ie,Ie,Ie),me=Ie)},setLocked:function(Ie){W=Ie},setClear:function(Ie,ye,qe,Ve,Kt){Kt===!0&&(Ie*=Ve,ye*=Ve,qe*=Ve),Te.set(Ie,ye,qe,Ve),we.equals(Te)===!1&&(r.clearColor(Ie,ye,qe,Ve),we.copy(Te))},reset:function(){W=!1,me=null,we.set(-1,0,0,0)}}}function s(){let W=!1,Te=!1,me=null,we=null,Ie=null;return{setReversed:function(ye){if(Te!==ye){const qe=e.get("EXT_clip_control");ye?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Te=ye;const Ve=Ie;Ie=null,this.setClear(Ve)}},getReversed:function(){return Te},setTest:function(ye){ye?Me(r.DEPTH_TEST):He(r.DEPTH_TEST)},setMask:function(ye){me!==ye&&!W&&(r.depthMask(ye),me=ye)},setFunc:function(ye){if(Te&&(ye=xE[ye]),we!==ye){switch(ye){case Hh:r.depthFunc(r.NEVER);break;case Gh:r.depthFunc(r.ALWAYS);break;case Vh:r.depthFunc(r.LESS);break;case Kr:r.depthFunc(r.LEQUAL);break;case kh:r.depthFunc(r.EQUAL);break;case Xh:r.depthFunc(r.GEQUAL);break;case Wh:r.depthFunc(r.GREATER);break;case qh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=ye}},setLocked:function(ye){W=ye},setClear:function(ye){Ie!==ye&&(Ie=ye,Te&&(ye=1-ye),r.clearDepth(ye))},reset:function(){W=!1,me=null,we=null,Ie=null,Te=!1}}}function l(){let W=!1,Te=null,me=null,we=null,Ie=null,ye=null,qe=null,Ve=null,Kt=null;return{setTest:function(Ut){W||(Ut?Me(r.STENCIL_TEST):He(r.STENCIL_TEST))},setMask:function(Ut){Te!==Ut&&!W&&(r.stencilMask(Ut),Te=Ut)},setFunc:function(Ut,Kn,Qn){(me!==Ut||we!==Kn||Ie!==Qn)&&(r.stencilFunc(Ut,Kn,Qn),me=Ut,we=Kn,Ie=Qn)},setOp:function(Ut,Kn,Qn){(ye!==Ut||qe!==Kn||Ve!==Qn)&&(r.stencilOp(Ut,Kn,Qn),ye=Ut,qe=Kn,Ve=Qn)},setLocked:function(Ut){W=Ut},setClear:function(Ut){Kt!==Ut&&(r.clearStencil(Ut),Kt=Ut)},reset:function(){W=!1,Te=null,me=null,we=null,Ie=null,ye=null,qe=null,Ve=null,Kt=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let v={},x={},g={},b=new WeakMap,A=[],N=null,y=!1,S=null,B=null,I=null,w=null,P=null,U=null,F=null,E=new Et(0,0,0),D=0,X=!1,V=null,K=null,ue=null,ge=null,J=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ne=0;const _e=r.getParameter(r.VERSION);_e.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(_e)[1]),G=ne>=1):_e.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),G=ne>=2);let Ee=null,O={};const Z=r.getParameter(r.SCISSOR_BOX),be=r.getParameter(r.VIEWPORT),Ce=new tn().fromArray(Z),Fe=new tn().fromArray(be);function se(W,Te,me,we){const Ie=new Uint8Array(4),ye=r.createTexture();r.bindTexture(W,ye),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<me;qe++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Te+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return ye}const Se={};Se[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Me(r.DEPTH_TEST),f.setFunc(Kr),nn(!1),an(ev),Me(r.CULL_FACE),vt(Aa);function Me(W){v[W]!==!0&&(r.enable(W),v[W]=!0)}function He(W){v[W]!==!1&&(r.disable(W),v[W]=!1)}function nt(W,Te){return g[W]!==Te?(r.bindFramebuffer(W,Te),g[W]=Te,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Te),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ke(W,Te){let me=A,we=!1;if(W){me=b.get(Te),me===void 0&&(me=[],b.set(Te,me));const Ie=W.textures;if(me.length!==Ie.length||me[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,qe=Ie.length;ye<qe;ye++)me[ye]=r.COLOR_ATTACHMENT0+ye;me.length=Ie.length,we=!0}}else me[0]!==r.BACK&&(me[0]=r.BACK,we=!0);we&&r.drawBuffers(me)}function jt(W){return N!==W?(r.useProgram(W),N=W,!0):!1}const ut={[Vs]:r.FUNC_ADD,[Vb]:r.FUNC_SUBTRACT,[kb]:r.FUNC_REVERSE_SUBTRACT};ut[Xb]=r.MIN,ut[Wb]=r.MAX;const _t={[qb]:r.ZERO,[jb]:r.ONE,[Yb]:r.SRC_COLOR,[Bh]:r.SRC_ALPHA,[eE]:r.SRC_ALPHA_SATURATE,[Jb]:r.DST_COLOR,[Kb]:r.DST_ALPHA,[Zb]:r.ONE_MINUS_SRC_COLOR,[zh]:r.ONE_MINUS_SRC_ALPHA,[$b]:r.ONE_MINUS_DST_COLOR,[Qb]:r.ONE_MINUS_DST_ALPHA,[tE]:r.CONSTANT_COLOR,[nE]:r.ONE_MINUS_CONSTANT_COLOR,[iE]:r.CONSTANT_ALPHA,[aE]:r.ONE_MINUS_CONSTANT_ALPHA};function vt(W,Te,me,we,Ie,ye,qe,Ve,Kt,Ut){if(W===Aa){y===!0&&(He(r.BLEND),y=!1);return}if(y===!1&&(Me(r.BLEND),y=!0),W!==Gb){if(W!==S||Ut!==X){if((B!==Vs||P!==Vs)&&(r.blendEquation(r.FUNC_ADD),B=Vs,P=Vs),Ut)switch(W){case Wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tv:r.blendFunc(r.ONE,r.ONE);break;case nv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case iv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:bt("WebGLState: Invalid blending: ",W);break}else switch(W){case Wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case nv:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iv:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",W);break}I=null,w=null,U=null,F=null,E.set(0,0,0),D=0,S=W,X=Ut}return}Ie=Ie||Te,ye=ye||me,qe=qe||we,(Te!==B||Ie!==P)&&(r.blendEquationSeparate(ut[Te],ut[Ie]),B=Te,P=Ie),(me!==I||we!==w||ye!==U||qe!==F)&&(r.blendFuncSeparate(_t[me],_t[we],_t[ye],_t[qe]),I=me,w=we,U=ye,F=qe),(Ve.equals(E)===!1||Kt!==D)&&(r.blendColor(Ve.r,Ve.g,Ve.b,Kt),E.copy(Ve),D=Kt),S=W,X=!1}function ft(W,Te){W.side===Ma?He(r.CULL_FACE):Me(r.CULL_FACE);let me=W.side===Zn;Te&&(me=!me),nn(me),W.blending===Wr&&W.transparent===!1?vt(Aa):vt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const we=W.stencilWrite;p.setTest(we),we&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),cn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Me(r.SAMPLE_ALPHA_TO_COVERAGE):He(r.SAMPLE_ALPHA_TO_COVERAGE)}function nn(W){V!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),V=W)}function an(W){W!==Bb?(Me(r.CULL_FACE),W!==K&&(W===ev?r.cullFace(r.BACK):W===zb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):He(r.CULL_FACE),K=W}function sn(W){W!==ue&&(G&&r.lineWidth(W),ue=W)}function cn(W,Te,me){W?(Me(r.POLYGON_OFFSET_FILL),(ge!==Te||J!==me)&&(ge=Te,J=me,f.getReversed()&&(Te=-Te),r.polygonOffset(Te,me))):He(r.POLYGON_OFFSET_FILL)}function qt(W){W?Me(r.SCISSOR_TEST):He(r.SCISSOR_TEST)}function rn(W){W===void 0&&(W=r.TEXTURE0+z-1),Ee!==W&&(r.activeTexture(W),Ee=W)}function j(W,Te,me){me===void 0&&(Ee===null?me=r.TEXTURE0+z-1:me=Ee);let we=O[me];we===void 0&&(we={type:void 0,texture:void 0},O[me]=we),(we.type!==W||we.texture!==Te)&&(Ee!==me&&(r.activeTexture(me),Ee=me),r.bindTexture(W,Te||Se[W]),we.type=W,we.texture=Te)}function zt(){const W=O[Ee];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ct(){try{r.compressedTexImage2D(...arguments)}catch(W){bt("WebGLState:",W)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(W){bt("WebGLState:",W)}}function M(){try{r.texSubImage2D(...arguments)}catch(W){bt("WebGLState:",W)}}function Q(){try{r.texSubImage3D(...arguments)}catch(W){bt("WebGLState:",W)}}function re(){try{r.compressedTexSubImage2D(...arguments)}catch(W){bt("WebGLState:",W)}}function de(){try{r.compressedTexSubImage3D(...arguments)}catch(W){bt("WebGLState:",W)}}function Ae(){try{r.texStorage2D(...arguments)}catch(W){bt("WebGLState:",W)}}function Ne(){try{r.texStorage3D(...arguments)}catch(W){bt("WebGLState:",W)}}function fe(){try{r.texImage2D(...arguments)}catch(W){bt("WebGLState:",W)}}function he(){try{r.texImage3D(...arguments)}catch(W){bt("WebGLState:",W)}}function Re(W){return x[W]!==void 0?x[W]:r.getParameter(W)}function Be(W,Te){x[W]!==Te&&(r.pixelStorei(W,Te),x[W]=Te)}function Le(W){Ce.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Ce.copy(W))}function De(W){Fe.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Fe.copy(W))}function Ze(W,Te){let me=h.get(Te);me===void 0&&(me=new WeakMap,h.set(Te,me));let we=me.get(W);we===void 0&&(we=r.getUniformBlockIndex(Te,W.name),me.set(W,we))}function Qe(W,Te){const we=h.get(Te).get(W);m.get(Te)!==we&&(r.uniformBlockBinding(Te,we,W.__bindingPointIndex),m.set(Te,we))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},x={},Ee=null,O={},g={},b=new WeakMap,A=[],N=null,y=!1,S=null,B=null,I=null,w=null,P=null,U=null,F=null,E=new Et(0,0,0),D=0,X=!1,V=null,K=null,ue=null,ge=null,J=null,Ce.set(0,0,r.canvas.width,r.canvas.height),Fe.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Me,disable:He,bindFramebuffer:nt,drawBuffers:Ke,useProgram:jt,setBlending:vt,setMaterial:ft,setFlipSided:nn,setCullFace:an,setLineWidth:sn,setPolygonOffset:cn,setScissorTest:qt,activeTexture:rn,bindTexture:j,unbindTexture:zt,compressedTexImage2D:Ct,compressedTexImage3D:L,texImage2D:fe,texImage3D:he,pixelStorei:Be,getParameter:Re,updateUBOMapping:Ze,uniformBlockBinding:Qe,texStorage2D:Ae,texStorage3D:Ne,texSubImage2D:M,texSubImage3D:Q,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:Le,viewport:De,reset:it}}function jR(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Mt,v=new WeakMap,x=new Set;let g;const b=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(L,M){return A?new OffscreenCanvas(L,M):yu("canvas")}function y(L,M,Q){let re=1;const de=Ct(L);if((de.width>Q||de.height>Q)&&(re=Q/Math.max(de.width,de.height)),re<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ae=Math.floor(re*de.width),Ne=Math.floor(re*de.height);g===void 0&&(g=N(Ae,Ne));const fe=M?N(Ae,Ne):g;return fe.width=Ae,fe.height=Ne,fe.getContext("2d").drawImage(L,0,0,Ae,Ne),tt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Ae+"x"+Ne+")."),fe}else return"data"in L&&tt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),L;return L}function S(L){return L.generateMipmaps}function B(L){r.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(L,M,Q,re,de,Ae=!1){if(L!==null){if(r[L]!==void 0)return r[L];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ne;re&&(Ne=e.get("EXT_texture_norm16"),Ne||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=M;if(M===r.RED&&(Q===r.FLOAT&&(fe=r.R32F),Q===r.HALF_FLOAT&&(fe=r.R16F),Q===r.UNSIGNED_BYTE&&(fe=r.R8),Q===r.UNSIGNED_SHORT&&Ne&&(fe=Ne.R16_EXT),Q===r.SHORT&&Ne&&(fe=Ne.R16_SNORM_EXT)),M===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(fe=r.R8UI),Q===r.UNSIGNED_SHORT&&(fe=r.R16UI),Q===r.UNSIGNED_INT&&(fe=r.R32UI),Q===r.BYTE&&(fe=r.R8I),Q===r.SHORT&&(fe=r.R16I),Q===r.INT&&(fe=r.R32I)),M===r.RG&&(Q===r.FLOAT&&(fe=r.RG32F),Q===r.HALF_FLOAT&&(fe=r.RG16F),Q===r.UNSIGNED_BYTE&&(fe=r.RG8),Q===r.UNSIGNED_SHORT&&Ne&&(fe=Ne.RG16_EXT),Q===r.SHORT&&Ne&&(fe=Ne.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(fe=r.RG8UI),Q===r.UNSIGNED_SHORT&&(fe=r.RG16UI),Q===r.UNSIGNED_INT&&(fe=r.RG32UI),Q===r.BYTE&&(fe=r.RG8I),Q===r.SHORT&&(fe=r.RG16I),Q===r.INT&&(fe=r.RG32I)),M===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),Q===r.UNSIGNED_INT&&(fe=r.RGB32UI),Q===r.BYTE&&(fe=r.RGB8I),Q===r.SHORT&&(fe=r.RGB16I),Q===r.INT&&(fe=r.RGB32I)),M===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),Q===r.UNSIGNED_INT&&(fe=r.RGBA32UI),Q===r.BYTE&&(fe=r.RGBA8I),Q===r.SHORT&&(fe=r.RGBA16I),Q===r.INT&&(fe=r.RGBA32I)),M===r.RGB&&(Q===r.UNSIGNED_SHORT&&Ne&&(fe=Ne.RGB16_EXT),Q===r.SHORT&&Ne&&(fe=Ne.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),M===r.RGBA){const he=Ae?Su:St.getTransfer(de);Q===r.FLOAT&&(fe=r.RGBA32F),Q===r.HALF_FLOAT&&(fe=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(fe=he===Bt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&Ne&&(fe=Ne.RGBA16_EXT),Q===r.SHORT&&Ne&&(fe=Ne.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function P(L,M){let Q;return L?M===null||M===Zi||M===hl?Q=r.DEPTH24_STENCIL8:M===Xi?Q=r.DEPTH32F_STENCIL8:M===dl&&(Q=r.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zi||M===hl?Q=r.DEPTH_COMPONENT24:M===Xi?Q=r.DEPTH_COMPONENT32F:M===dl&&(Q=r.DEPTH_COMPONENT16),Q}function U(L,M){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Dn&&L.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function F(L){const M=L.target;M.removeEventListener("dispose",F),D(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&x.delete(M)}function E(L){const M=L.target;M.removeEventListener("dispose",E),V(M)}function D(L){const M=s.get(L);if(M.__webglInit===void 0)return;const Q=L.source,re=b.get(Q);if(re){const de=re[M.__cacheKey];de.usedTimes--,de.usedTimes===0&&X(L),Object.keys(re).length===0&&b.delete(Q)}s.remove(L)}function X(L){const M=s.get(L);r.deleteTexture(M.__webglTexture);const Q=L.source,re=b.get(Q);delete re[M.__cacheKey],f.memory.textures--}function V(L){const M=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let de=0;de<M.__webglFramebuffer[re].length;de++)r.deleteFramebuffer(M.__webglFramebuffer[re][de]);else r.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)r.deleteFramebuffer(M.__webglFramebuffer[re]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=L.textures;for(let re=0,de=Q.length;re<de;re++){const Ae=s.get(Q[re]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),f.memory.textures--),s.remove(Q[re])}s.remove(L)}let K=0;function ue(){K=0}function ge(){return K}function J(L){K=L}function z(){const L=K;return L>=l.maxTextures&&tt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),K+=1,L}function G(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function ne(L,M){const Q=s.get(L);if(L.isVideoTexture&&j(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Q.__version!==L.version){const re=L.image;if(re===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(Q,L,M);return}}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+M)}function _e(L,M){const Q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){He(Q,L,M);return}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+M)}function Ee(L,M){const Q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){He(Q,L,M);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+M)}function O(L,M){const Q=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Q.__version!==L.version){nt(Q,L,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+M)}const Z={[jh]:r.REPEAT,[ba]:r.CLAMP_TO_EDGE,[Yh]:r.MIRRORED_REPEAT},be={[Dn]:r.NEAREST,[oE]:r.NEAREST_MIPMAP_NEAREST,[Uc]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[Jd]:r.LINEAR_MIPMAP_NEAREST,[Xs]:r.LINEAR_MIPMAP_LINEAR},Ce={[uE]:r.NEVER,[mE]:r.ALWAYS,[fE]:r.LESS,[Gp]:r.LEQUAL,[dE]:r.EQUAL,[Vp]:r.GEQUAL,[hE]:r.GREATER,[pE]:r.NOTEQUAL};function Fe(L,M){if(M.type===Xi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===Jd||M.magFilter===Uc||M.magFilter===Xs||M.minFilter===Fn||M.minFilter===Jd||M.minFilter===Uc||M.minFilter===Xs)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Z[M.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Z[M.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Z[M.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,be[M.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,be[M.minFilter]),M.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Dn||M.minFilter!==Uc&&M.minFilter!==Xs||M.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function se(L,M){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",F));const re=M.source;let de=b.get(re);de===void 0&&(de={},b.set(re,de));const Ae=G(M);if(Ae!==L.__cacheKey){de[Ae]===void 0&&(de[Ae]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),de[Ae].usedTimes++;const Ne=de[L.__cacheKey];Ne!==void 0&&(de[L.__cacheKey].usedTimes--,Ne.usedTimes===0&&X(M)),L.__cacheKey=Ae,L.__webglTexture=de[Ae].texture}return Q}function Se(L,M,Q){return Math.floor(Math.floor(L/Q)/M)}function Me(L,M,Q,re){const Ae=L.updateRanges;if(Ae.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,Q,re,M.data);else{Ae.sort((Be,Le)=>Be.start-Le.start);let Ne=0;for(let Be=1;Be<Ae.length;Be++){const Le=Ae[Ne],De=Ae[Be],Ze=Le.start+Le.count,Qe=Se(De.start,M.width,4),it=Se(Le.start,M.width,4);De.start<=Ze+1&&Qe===it&&Se(De.start+De.count-1,M.width,4)===Qe?Le.count=Math.max(Le.count,De.start+De.count-Le.start):(++Ne,Ae[Ne]=De)}Ae.length=Ne+1;const fe=i.getParameter(r.UNPACK_ROW_LENGTH),he=i.getParameter(r.UNPACK_SKIP_PIXELS),Re=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Be=0,Le=Ae.length;Be<Le;Be++){const De=Ae[Be],Ze=Math.floor(De.start/4),Qe=Math.ceil(De.count/4),it=Ze%M.width,W=Math.floor(Ze/M.width),Te=Qe,me=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,it),i.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,it,W,Te,me,Q,re,M.data)}L.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,fe),i.pixelStorei(r.UNPACK_SKIP_PIXELS,he),i.pixelStorei(r.UNPACK_SKIP_ROWS,Re)}}function He(L,M,Q){let re=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=r.TEXTURE_3D);const de=se(L,M),Ae=M.source;i.bindTexture(re,L.__webglTexture,r.TEXTURE0+Q);const Ne=s.get(Ae);if(Ae.version!==Ne.__version||de===!0){if(i.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const me=St.getPrimaries(St.workingColorSpace),we=M.colorSpace===fs?null:St.getPrimaries(M.colorSpace),Ie=M.colorSpace===fs||me===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let he=y(M.image,!1,l.maxTextureSize);he=zt(M,he);const Re=c.convert(M.format,M.colorSpace),Be=c.convert(M.type);let Le=w(M.internalFormat,Re,Be,M.normalized,M.colorSpace,M.isVideoTexture);Fe(re,M);let De;const Ze=M.mipmaps,Qe=M.isVideoTexture!==!0,it=Ne.__version===void 0||de===!0,W=Ae.dataReady,Te=U(M,he);if(M.isDepthTexture)Le=P(M.format===Ws,M.type),it&&(Qe?i.texStorage2D(r.TEXTURE_2D,1,Le,he.width,he.height):i.texImage2D(r.TEXTURE_2D,0,Le,he.width,he.height,0,Re,Be,null));else if(M.isDataTexture)if(Ze.length>0){Qe&&it&&i.texStorage2D(r.TEXTURE_2D,Te,Le,Ze[0].width,Ze[0].height);for(let me=0,we=Ze.length;me<we;me++)De=Ze[me],Qe?W&&i.texSubImage2D(r.TEXTURE_2D,me,0,0,De.width,De.height,Re,Be,De.data):i.texImage2D(r.TEXTURE_2D,me,Le,De.width,De.height,0,Re,Be,De.data);M.generateMipmaps=!1}else Qe?(it&&i.texStorage2D(r.TEXTURE_2D,Te,Le,he.width,he.height),W&&Me(M,he,Re,Be)):i.texImage2D(r.TEXTURE_2D,0,Le,he.width,he.height,0,Re,Be,he.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qe&&it&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Le,Ze[0].width,Ze[0].height,he.depth);for(let me=0,we=Ze.length;me<we;me++)if(De=Ze[me],M.format!==Oi)if(Re!==null)if(Qe){if(W)if(M.layerUpdates.size>0){const Ie=Pv(De.width,De.height,M.format,M.type);for(const ye of M.layerUpdates){const qe=De.data.subarray(ye*Ie/De.data.BYTES_PER_ELEMENT,(ye+1)*Ie/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,ye,De.width,De.height,1,Re,qe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,De.width,De.height,he.depth,Re,De.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,me,Le,De.width,De.height,he.depth,0,De.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?W&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,De.width,De.height,he.depth,Re,Be,De.data):i.texImage3D(r.TEXTURE_2D_ARRAY,me,Le,De.width,De.height,he.depth,0,Re,Be,De.data)}else{Qe&&it&&i.texStorage2D(r.TEXTURE_2D,Te,Le,Ze[0].width,Ze[0].height);for(let me=0,we=Ze.length;me<we;me++)De=Ze[me],M.format!==Oi?Re!==null?Qe?W&&i.compressedTexSubImage2D(r.TEXTURE_2D,me,0,0,De.width,De.height,Re,De.data):i.compressedTexImage2D(r.TEXTURE_2D,me,Le,De.width,De.height,0,De.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?W&&i.texSubImage2D(r.TEXTURE_2D,me,0,0,De.width,De.height,Re,Be,De.data):i.texImage2D(r.TEXTURE_2D,me,Le,De.width,De.height,0,Re,Be,De.data)}else if(M.isDataArrayTexture)if(Qe){if(it&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Le,he.width,he.height,he.depth),W)if(M.layerUpdates.size>0){const me=Pv(he.width,he.height,M.format,M.type);for(const we of M.layerUpdates){const Ie=he.data.subarray(we*me/he.data.BYTES_PER_ELEMENT,(we+1)*me/he.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,we,he.width,he.height,1,Re,Be,Ie)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Re,Be,he.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,he.width,he.height,he.depth,0,Re,Be,he.data);else if(M.isData3DTexture)Qe?(it&&i.texStorage3D(r.TEXTURE_3D,Te,Le,he.width,he.height,he.depth),W&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Re,Be,he.data)):i.texImage3D(r.TEXTURE_3D,0,Le,he.width,he.height,he.depth,0,Re,Be,he.data);else if(M.isFramebufferTexture){if(it)if(Qe)i.texStorage2D(r.TEXTURE_2D,Te,Le,he.width,he.height);else{let me=he.width,we=he.height;for(let Ie=0;Ie<Te;Ie++)i.texImage2D(r.TEXTURE_2D,Ie,Le,me,we,0,Re,Be,null),me>>=1,we>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const me=r.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),he.parentNode!==me){me.appendChild(he),x.add(M),me.onpaint=we=>{const Ie=we.changedElements;for(const ye of x)Ie.includes(ye.image)&&(ye.needsUpdate=!0)},me.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,he);else{const Ie=r.RGBA,ye=r.RGBA,qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ie,ye,qe,he)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Qe&&it){const me=Ct(Ze[0]);i.texStorage2D(r.TEXTURE_2D,Te,Le,me.width,me.height)}for(let me=0,we=Ze.length;me<we;me++)De=Ze[me],Qe?W&&i.texSubImage2D(r.TEXTURE_2D,me,0,0,Re,Be,De):i.texImage2D(r.TEXTURE_2D,me,Le,Re,Be,De);M.generateMipmaps=!1}else if(Qe){if(it){const me=Ct(he);i.texStorage2D(r.TEXTURE_2D,Te,Le,me.width,me.height)}W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,Be,he)}else i.texImage2D(r.TEXTURE_2D,0,Le,Re,Be,he);S(M)&&B(re),Ne.__version=Ae.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function nt(L,M,Q){if(M.image.length!==6)return;const re=se(L,M),de=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+Q);const Ae=s.get(de);if(de.version!==Ae.__version||re===!0){i.activeTexture(r.TEXTURE0+Q);const Ne=St.getPrimaries(St.workingColorSpace),fe=M.colorSpace===fs?null:St.getPrimaries(M.colorSpace),he=M.colorSpace===fs||Ne===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,Le=[];for(let ye=0;ye<6;ye++)!Re&&!Be?Le[ye]=y(M.image[ye],!0,l.maxCubemapSize):Le[ye]=Be?M.image[ye].image:M.image[ye],Le[ye]=zt(M,Le[ye]);const De=Le[0],Ze=c.convert(M.format,M.colorSpace),Qe=c.convert(M.type),it=w(M.internalFormat,Ze,Qe,M.normalized,M.colorSpace),W=M.isVideoTexture!==!0,Te=Ae.__version===void 0||re===!0,me=de.dataReady;let we=U(M,De);Fe(r.TEXTURE_CUBE_MAP,M);let Ie;if(Re){W&&Te&&i.texStorage2D(r.TEXTURE_CUBE_MAP,we,it,De.width,De.height);for(let ye=0;ye<6;ye++){Ie=Le[ye].mipmaps;for(let qe=0;qe<Ie.length;qe++){const Ve=Ie[qe];M.format!==Oi?Ze!==null?W?me&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,0,0,Ve.width,Ve.height,Ze,Ve.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,it,Ve.width,Ve.height,0,Ve.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,0,0,Ve.width,Ve.height,Ze,Qe,Ve.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,it,Ve.width,Ve.height,0,Ze,Qe,Ve.data)}}}else{if(Ie=M.mipmaps,W&&Te){Ie.length>0&&we++;const ye=Ct(Le[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,we,it,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Be){W?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Le[ye].width,Le[ye].height,Ze,Qe,Le[ye].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,it,Le[ye].width,Le[ye].height,0,Ze,Qe,Le[ye].data);for(let qe=0;qe<Ie.length;qe++){const Kt=Ie[qe].image[ye].image;W?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,0,0,Kt.width,Kt.height,Ze,Qe,Kt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,it,Kt.width,Kt.height,0,Ze,Qe,Kt.data)}}else{W?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ze,Qe,Le[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,it,Ze,Qe,Le[ye]);for(let qe=0;qe<Ie.length;qe++){const Ve=Ie[qe];W?me&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,0,0,Ze,Qe,Ve.image[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,it,Ze,Qe,Ve.image[ye])}}}S(M)&&B(r.TEXTURE_CUBE_MAP),Ae.__version=de.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Ke(L,M,Q,re,de,Ae){const Ne=c.convert(Q.format,Q.colorSpace),fe=c.convert(Q.type),he=w(Q.internalFormat,Ne,fe,Q.normalized,Q.colorSpace),Re=s.get(M),Be=s.get(Q);if(Be.__renderTarget=M,!Re.__hasExternalTextures){const Le=Math.max(1,M.width>>Ae),De=Math.max(1,M.height>>Ae);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?i.texImage3D(de,Ae,he,Le,De,M.depth,0,Ne,fe,null):i.texImage2D(de,Ae,he,Le,De,0,Ne,fe,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),rn(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,de,Be.__webglTexture,0,qt(M)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,de,Be.__webglTexture,Ae),i.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(L,M,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,L),M.depthBuffer){const re=M.depthTexture,de=re&&re.isDepthTexture?re.type:null,Ae=P(M.stencilBuffer,de),Ne=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;rn(M)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(M),Ae,M.width,M.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(M),Ae,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,L)}else{const re=M.textures;for(let de=0;de<re.length;de++){const Ae=re[de],Ne=c.convert(Ae.format,Ae.colorSpace),fe=c.convert(Ae.type),he=w(Ae.internalFormat,Ne,fe,Ae.normalized,Ae.colorSpace);rn(M)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(M),he,M.width,M.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(M),he,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,he,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(L,M,Q){const re=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=s.get(M.depthTexture);if(de.__renderTarget=M,(!de.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),re){if(de.__webglInit===void 0&&(de.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),de.__webglTexture===void 0){de.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,M.depthTexture);const Re=c.convert(M.depthTexture.format),Be=c.convert(M.depthTexture.type);let Le;M.depthTexture.format===wa?Le=r.DEPTH_COMPONENT24:M.depthTexture.format===Ws&&(Le=r.DEPTH24_STENCIL8);for(let De=0;De<6;De++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Le,M.width,M.height,0,Re,Be,null)}}else ne(M.depthTexture,0);const Ae=de.__webglTexture,Ne=qt(M),fe=re?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,he=M.depthTexture.format===Ws?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===wa)rn(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,fe,Ae,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,he,fe,Ae,0);else if(M.depthTexture.format===Ws)rn(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,fe,Ae,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,he,fe,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(L){const M=s.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const re=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){const de=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",de)};re.addEventListener("dispose",de),M.__depthDisposeCallback=de}M.__boundDepthTexture=re}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(Q)for(let re=0;re<6;re++)ut(M.__webglFramebuffer[re],L,re);else{const re=L.texture.mipmaps;re&&re.length>0?ut(M.__webglFramebuffer[0],L,0):ut(M.__webglFramebuffer,L,0)}else if(Q){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=r.createRenderbuffer(),jt(M.__webglDepthbuffer[re],L,!1);else{const de=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=M.__webglDepthbuffer[re];r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Ae)}}else{const re=L.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),jt(M.__webglDepthbuffer,L,!1);else{const de=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Ae)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(L,M,Q){const re=s.get(L);M!==void 0&&Ke(re.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&_t(L)}function ft(L){const M=L.texture,Q=s.get(L),re=s.get(M);L.addEventListener("dispose",E);const de=L.textures,Ae=L.isWebGLCubeRenderTarget===!0,Ne=de.length>1;if(Ne||(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=M.version,f.memory.textures++),Ae){Q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[fe]=[];for(let he=0;he<M.mipmaps.length;he++)Q.__webglFramebuffer[fe][he]=r.createFramebuffer()}else Q.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)Q.__webglFramebuffer[fe]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let fe=0,he=de.length;fe<he;fe++){const Re=s.get(de[fe]);Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture(),f.memory.textures++)}if(L.samples>0&&rn(L)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let fe=0;fe<de.length;fe++){const he=de[fe];Q.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[fe]);const Re=c.convert(he.format,he.colorSpace),Be=c.convert(he.type),Le=w(he.internalFormat,Re,Be,he.normalized,he.colorSpace,L.isXRRenderTarget===!0),De=qt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,Le,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,Q.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),jt(Q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)Ke(Q.__webglFramebuffer[fe][he],L,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else Ke(Q.__webglFramebuffer[fe],L,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);S(M)&&B(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ne){for(let fe=0,he=de.length;fe<he;fe++){const Re=de[fe],Be=s.get(Re);let Le=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Le=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Le,Be.__webglTexture),Fe(Le,Re),Ke(Q.__webglFramebuffer,L,Re,r.COLOR_ATTACHMENT0+fe,Le,0),S(Re)&&B(Le)}i.unbindTexture()}else{let fe=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(fe,re.__webglTexture),Fe(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)Ke(Q.__webglFramebuffer[he],L,M,r.COLOR_ATTACHMENT0,fe,he);else Ke(Q.__webglFramebuffer,L,M,r.COLOR_ATTACHMENT0,fe,0);S(M)&&B(fe),i.unbindTexture()}L.depthBuffer&&_t(L)}function nn(L){const M=L.textures;for(let Q=0,re=M.length;Q<re;Q++){const de=M[Q];if(S(de)){const Ae=I(L),Ne=s.get(de).__webglTexture;i.bindTexture(Ae,Ne),B(Ae),i.unbindTexture()}}}const an=[],sn=[];function cn(L){if(L.samples>0){if(rn(L)===!1){const M=L.textures,Q=L.width,re=L.height;let de=r.COLOR_BUFFER_BIT;const Ae=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=s.get(L),fe=M.length>1;if(fe)for(let Re=0;Re<M.length;Re++)i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const he=L.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Re]);const Be=s.get(M[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Be,0)}r.blitFramebuffer(0,0,Q,re,0,0,Q,re,de,r.NEAREST),m===!0&&(an.length=0,sn.length=0,an.push(r.COLOR_ATTACHMENT0+Re),L.depthBuffer&&L.resolveDepthBuffer===!1&&(an.push(Ae),sn.push(Ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,sn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,an))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Re=0;Re<M.length;Re++){i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Re]);const Be=s.get(M[Re]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,Be,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const M=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function qt(L){return Math.min(l.maxSamples,L.samples)}function rn(L){const M=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function j(L){const M=f.render.frame;v.get(L)!==M&&(v.set(L,M),L.update())}function zt(L,M){const Q=L.colorSpace,re=L.format,de=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==xu&&Q!==fs&&(St.getTransfer(Q)===Bt?(re!==Oi||de!==ui)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",Q)),M}function Ct(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=ue,this.getTextureUnits=ge,this.setTextureUnits=J,this.setTexture2D=ne,this.setTexture2DArray=_e,this.setTexture3D=Ee,this.setTextureCube=O,this.rebindTextures=vt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=rn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function YR(r,e){function i(s,l=fs){let c;const f=St.getTransfer(l);if(s===ui)return r.UNSIGNED_BYTE;if(s===Fp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ip)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Px)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Fx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Lx)return r.BYTE;if(s===Ox)return r.SHORT;if(s===dl)return r.UNSIGNED_SHORT;if(s===Pp)return r.INT;if(s===Zi)return r.UNSIGNED_INT;if(s===Xi)return r.FLOAT;if(s===Ca)return r.HALF_FLOAT;if(s===Ix)return r.ALPHA;if(s===Bx)return r.RGB;if(s===Oi)return r.RGBA;if(s===wa)return r.DEPTH_COMPONENT;if(s===Ws)return r.DEPTH_STENCIL;if(s===zx)return r.RED;if(s===Bp)return r.RED_INTEGER;if(s===Zs)return r.RG;if(s===zp)return r.RG_INTEGER;if(s===Hp)return r.RGBA_INTEGER;if(s===ru||s===ou||s===lu||s===cu)if(f===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ru)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ru)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ou)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h||s===ep||s===tp||s===np||s===ip||s===_u||s===ap)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===$h||s===ep)return f===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===tp)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===np)return c.COMPRESSED_R11_EAC;if(s===ip)return c.COMPRESSED_SIGNED_R11_EAC;if(s===_u)return c.COMPRESSED_RG11_EAC;if(s===ap)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===sp||s===rp||s===op||s===lp||s===cp||s===up||s===fp||s===dp||s===hp||s===pp||s===mp||s===gp||s===_p||s===vp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===sp)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rp)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===op)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lp)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cp)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===up)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fp)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dp)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hp)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pp)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mp)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gp)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_p)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vp)return f===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xp||s===Sp||s===yp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===xp)return f===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Mp||s===bp||s===vu||s===Ep)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Mp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===bp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ep)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const ZR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Yx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Qi({vertexShader:ZR,fragmentShader:KR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ki(new Uu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JR extends Ks{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,v=null,x=null,g=null,b=null,A=null;const N=typeof XRWebGLBinding<"u",y=new QR,S={},B=i.getContextAttributes();let I=null,w=null;const P=[],U=[],F=new Mt;let E=null;const D=new ci;D.viewport=new tn;const X=new ci;X.viewport=new tn;const V=[D,X],K=new o1;let ue=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Se=P[se];return Se===void 0&&(Se=new sh,P[se]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(se){let Se=P[se];return Se===void 0&&(Se=new sh,P[se]=Se),Se.getGripSpace()},this.getHand=function(se){let Se=P[se];return Se===void 0&&(Se=new sh,P[se]=Se),Se.getHandSpace()};function J(se){const Se=U.indexOf(se.inputSource);if(Se===-1)return;const Me=P[Se];Me!==void 0&&(Me.update(se.inputSource,se.frame,h||f),Me.dispatchEvent({type:se.type,data:se.inputSource}))}function z(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",G);for(let se=0;se<P.length;se++){const Se=U[se];Se!==null&&(U[se]=null,P[se].disconnect(Se))}ue=null,ge=null,y.reset();for(const se in S)delete S[se];e.setRenderTarget(I),b=null,g=null,x=null,l=null,w=null,Fe.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,s.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){p=se,s.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return x===null&&N&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",z),l.addEventListener("inputsourceschange",G),B.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,He=null,nt=null;B.depth&&(nt=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=B.stencil?Ws:wa,He=B.stencil?hl:Zi);const Ke={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Ke),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new ji(g.textureWidth,g.textureHeight,{format:Oi,type:ui,depthTexture:new Jr(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:B.stencil,colorSpace:e.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),w=new ji(b.framebufferWidth,b.framebufferHeight,{format:Oi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Fe.setContext(l),Fe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(se){for(let Se=0;Se<se.removed.length;Se++){const Me=se.removed[Se],He=U.indexOf(Me);He>=0&&(U[He]=null,P[He].disconnect(Me))}for(let Se=0;Se<se.added.length;Se++){const Me=se.added[Se];let He=U.indexOf(Me);if(He===-1){for(let Ke=0;Ke<P.length;Ke++)if(Ke>=U.length){U.push(Me),He=Ke;break}else if(U[Ke]===null){U[Ke]=Me,He=Ke;break}if(He===-1)break}const nt=P[He];nt&&nt.connect(Me)}}const ne=new $,_e=new $;function Ee(se,Se,Me){ne.setFromMatrixPosition(Se.matrixWorld),_e.setFromMatrixPosition(Me.matrixWorld);const He=ne.distanceTo(_e),nt=Se.projectionMatrix.elements,Ke=Me.projectionMatrix.elements,jt=nt[14]/(nt[10]-1),ut=nt[14]/(nt[10]+1),_t=(nt[9]+1)/nt[5],vt=(nt[9]-1)/nt[5],ft=(nt[8]-1)/nt[0],nn=(Ke[8]+1)/Ke[0],an=jt*ft,sn=jt*nn,cn=He/(-ft+nn),qt=cn*-ft;if(Se.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(qt),se.translateZ(cn),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),nt[10]===-1)se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const rn=jt+cn,j=ut+cn,zt=an-qt,Ct=sn+(He-qt),L=_t*ut/j*rn,M=vt*ut/j*rn;se.projectionMatrix.makePerspective(zt,Ct,L,M,rn,j),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function O(se,Se){Se===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Se.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let Se=se.near,Me=se.far;y.texture!==null&&(y.depthNear>0&&(Se=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),K.near=X.near=D.near=Se,K.far=X.far=D.far=Me,(ue!==K.near||ge!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ue=K.near,ge=K.far),K.layers.mask=se.layers.mask|6,D.layers.mask=K.layers.mask&-5,X.layers.mask=K.layers.mask&-3;const He=se.parent,nt=K.cameras;O(K,He);for(let Ke=0;Ke<nt.length;Ke++)O(nt[Ke],He);nt.length===2?Ee(K,D,X):K.projectionMatrix.copy(D.projectionMatrix),Z(se,K,He)};function Z(se,Se,Me){Me===null?se.matrix.copy(Se.matrixWorld):(se.matrix.copy(Me.matrixWorld),se.matrix.invert(),se.matrix.multiply(Se.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Tp*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&b===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(se){return S[se]};let be=null;function Ce(se,Se){if(v=Se.getViewerPose(h||f),A=Se,v!==null){const Me=v.views;b!==null&&(e.setRenderTargetFramebuffer(w,b.framebuffer),e.setRenderTarget(w));let He=!1;Me.length!==K.cameras.length&&(K.cameras.length=0,He=!0);for(let ut=0;ut<Me.length;ut++){const _t=Me[ut];let vt=null;if(b!==null)vt=b.getViewport(_t);else{const nn=x.getViewSubImage(g,_t);vt=nn.viewport,ut===0&&(e.setRenderTargetTextures(w,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(w))}let ft=V[ut];ft===void 0&&(ft=new ci,ft.layers.enable(ut),ft.viewport=new tn,V[ut]=ft),ft.matrix.fromArray(_t.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(_t.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(vt.x,vt.y,vt.width,vt.height),ut===0&&(K.matrix.copy(ft.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),He===!0&&K.cameras.push(ft)}const nt=l.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){x=s.getBinding();const ut=x.getDepthInformation(Me[0]);ut&&ut.isValid&&ut.texture&&y.init(ut,l.renderState)}if(nt&&nt.includes("camera-access")&&N){e.state.unbindTexture(),x=s.getBinding();for(let ut=0;ut<Me.length;ut++){const _t=Me[ut].camera;if(_t){let vt=S[_t];vt||(vt=new Yx,S[_t]=vt);const ft=x.getCameraImage(_t);vt.sourceTexture=ft}}}}for(let Me=0;Me<P.length;Me++){const He=U[Me],nt=P[Me];He!==null&&nt!==void 0&&nt.update(He,Se,h||f)}be&&be(se,Se),Se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Se}),A=null}const Fe=new $x;Fe.setAnimationLoop(Ce),this.setAnimationLoop=function(se){be=se},this.dispose=function(){}}}const $R=new en,rS=new st;rS.set(-1,0,0,0,1,0,0,0,1);function eC(r,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Zx(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,B,I,w){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),x(y,S)):S.isMeshPhongMaterial?(c(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&b(y,S,w)):S.isMeshMatcapMaterial?(c(y,S),A(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),N(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(f(y,S),S.isLineDashedMaterial&&p(y,S)):S.isPointsMaterial?m(y,S,B,I):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Zn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Zn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const B=e.get(S),I=B.envMap,w=B.envMapRotation;I&&(y.envMap.value=I,y.envMapRotation.value.setFromMatrix4($R.makeRotationFromEuler(w)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(rS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function p(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,B,I){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*B,y.scale.value=I*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function b(y,S,B){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Zn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,S){S.matcap&&(y.matcap.value=S.matcap)}function N(y,S){const B=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function tC(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,P){const U=P.program;s.uniformBlockBinding(w,U)}function h(w,P){let U=l[w.id];U===void 0&&(y(w),U=v(w),l[w.id]=U,w.addEventListener("dispose",B));const F=P.program;s.updateUBOMapping(w,F);const E=e.render.frame;c[w.id]!==E&&(g(w),c[w.id]=E)}function v(w){const P=x();w.__bindingPointIndex=P;const U=r.createBuffer(),F=w.__size,E=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,F,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,U),U}function x(){for(let w=0;w<p;w++)if(f.indexOf(w)===-1)return f.push(w),w;return bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const P=l[w.id],U=w.uniforms,F=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let E=0,D=U.length;E<D;E++){const X=U[E];if(Array.isArray(X))for(let V=0,K=X.length;V<K;V++)b(X[V],E,V,F);else b(X,E,0,F)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(w,P,U,F){if(N(w,P,U,F)===!0){const E=w.__offset,D=w.value;if(Array.isArray(D)){let X=0;for(let V=0;V<D.length;V++){const K=D[V],ue=S(K);A(K,w.__data,X),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(X+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(D,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,w.__data)}}function A(w,P,U){typeof w=="number"||typeof w=="boolean"?P[0]=w:w.isMatrix3?(P[0]=w.elements[0],P[1]=w.elements[1],P[2]=w.elements[2],P[3]=0,P[4]=w.elements[3],P[5]=w.elements[4],P[6]=w.elements[5],P[7]=0,P[8]=w.elements[6],P[9]=w.elements[7],P[10]=w.elements[8],P[11]=0):ArrayBuffer.isView(w)?P.set(new w.constructor(w.buffer,w.byteOffset,P.length)):w.toArray(P,U)}function N(w,P,U,F){const E=w.value,D=P+"_"+U;if(F[D]===void 0)return typeof E=="number"||typeof E=="boolean"?F[D]=E:ArrayBuffer.isView(E)?F[D]=E.slice():F[D]=E.clone(),!0;{const X=F[D];if(typeof E=="number"||typeof E=="boolean"){if(X!==E)return F[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(X.equals(E)===!1)return X.copy(E),!0}}return!1}function y(w){const P=w.uniforms;let U=0;const F=16;for(let D=0,X=P.length;D<X;D++){const V=Array.isArray(P[D])?P[D]:[P[D]];for(let K=0,ue=V.length;K<ue;K++){const ge=V[K],J=Array.isArray(ge.value)?ge.value:[ge.value];for(let z=0,G=J.length;z<G;z++){const ne=J[z],_e=S(ne),Ee=U%F,O=Ee%_e.boundary,Z=Ee+O;U+=O,Z!==0&&F-Z<_e.storage&&(U+=F-Z),ge.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),ge.__offset=U,U+=_e.storage}}}const E=U%F;return E>0&&(U+=F-E),w.__size=U,w.__cache={},this}function S(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(P.boundary=16,P.storage=w.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",w),P}function B(w){const P=w.target;P.removeEventListener("dispose",B);const U=f.indexOf(P.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function I(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:h,dispose:I}}const nC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function iC(){return Vi===null&&(Vi=new HE(nC,16,16,Zs,Ca),Vi.name="DFG_LUT",Vi.minFilter=Fn,Vi.magFilter=Fn,Vi.wrapS=ba,Vi.wrapT=ba,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class aC{constructor(e={}){const{canvas:i=_E(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:b=ui}=e;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=f;const N=b,y=new Set([Hp,zp,Bp]),S=new Set([ui,Zi,dl,hl,Fp,Ip]),B=new Uint32Array(4),I=new Int32Array(4),w=new $;let P=null,U=null;const F=[],E=[];let D=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let V=!1,K=null,ue=null,ge=null,J=null;this._outputColorSpace=yi;let z=0,G=0,ne=null,_e=-1,Ee=null;const O=new tn,Z=new tn;let be=null;const Ce=new Et(0);let Fe=0,se=i.width,Se=i.height,Me=1,He=null,nt=null;const Ke=new tn(0,0,se,Se),jt=new tn(0,0,se,Se);let ut=!1;const _t=new qp;let vt=!1,ft=!1;const nn=new en,an=new $,sn=new tn,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function rn(){return ne===null?Me:1}let j=s;function zt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Op}`),i.addEventListener("webglcontextlost",Kt,!1),i.addEventListener("webglcontextrestored",Ut,!1),i.addEventListener("webglcontextcreationerror",Kn,!1),j===null){const q="webgl2";if(j=zt(q,R),j===null)throw zt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw bt("WebGLRenderer: "+R.message),R}let Ct,L,M,Q,re,de,Ae,Ne,fe,he,Re,Be,Le,De,Ze,Qe,it,W,Te,me,we,Ie,ye;function qe(){Ct=new i2(j),Ct.init(),we=new YR(j,Ct),L=new ZT(j,Ct,e,we),M=new qR(j,Ct),L.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),ue=j.createFramebuffer(),ge=j.createFramebuffer(),J=j.createFramebuffer(),Q=new r2(j),re=new UR,de=new jR(j,Ct,M,re,L,we,Q),Ae=new n2(X),Ne=new u1(j),Ie=new jT(j,Ne),fe=new a2(j,Ne,Q,Ie),he=new l2(j,fe,Ne,Ie,Q),W=new o2(j,L,de),Ze=new KT(re),Re=new DR(X,Ae,Ct,L,Ie,Ze),Be=new eC(X,re),Le=new OR,De=new HR(Ct),it=new qT(X,Ae,M,he,A,m),Qe=new WR(X,he,L),ye=new tC(j,Q,L,M),Te=new YT(j,Ct,Q),me=new s2(j,Ct,Q),Q.programs=Re.programs,X.capabilities=L,X.extensions=Ct,X.properties=re,X.renderLists=Le,X.shadowMap=Qe,X.state=M,X.info=Q}qe(),N!==ui&&(D=new u2(N,i.width,i.height,p,l,c));const Ve=new JR(X,j);this.xr=Ve,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=Ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(R){R!==void 0&&(Me=R,this.setSize(se,Se,!1))},this.getSize=function(R){return R.set(se,Se)},this.setSize=function(R,q,oe=!0){if(Ve.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=R,Se=q,i.width=Math.floor(R*Me),i.height=Math.floor(q*Me),oe===!0&&(i.style.width=R+"px",i.style.height=q+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(se*Me,Se*Me).floor()},this.setDrawingBufferSize=function(R,q,oe){se=R,Se=q,Me=oe,i.width=Math.floor(R*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(N===ui){bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(Ke)},this.setViewport=function(R,q,oe,ie){R.isVector4?Ke.set(R.x,R.y,R.z,R.w):Ke.set(R,q,oe,ie),M.viewport(O.copy(Ke).multiplyScalar(Me).round())},this.getScissor=function(R){return R.copy(jt)},this.setScissor=function(R,q,oe,ie){R.isVector4?jt.set(R.x,R.y,R.z,R.w):jt.set(R,q,oe,ie),M.scissor(Z.copy(jt).multiplyScalar(Me).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(R){M.setScissorTest(ut=R)},this.setOpaqueSort=function(R){He=R},this.setTransparentSort=function(R){nt=R},this.getClearColor=function(R){return R.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,oe=!0){let ie=0;if(R){let ae=!1;if(ne!==null){const Oe=ne.texture.format;ae=y.has(Oe)}if(ae){const Oe=ne.texture.type,Ge=S.has(Oe),Ue=it.getClearColor(),Xe=it.getClearAlpha(),ke=Ue.r,Je=Ue.g,rt=Ue.b;Ge?(B[0]=ke,B[1]=Je,B[2]=rt,B[3]=Xe,j.clearBufferuiv(j.COLOR,0,B)):(I[0]=ke,I[1]=Je,I[2]=rt,I[3]=Xe,j.clearBufferiv(j.COLOR,0,I))}else ie|=j.COLOR_BUFFER_BIT}q&&(ie|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),K=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Kt,!1),i.removeEventListener("webglcontextrestored",Ut,!1),i.removeEventListener("webglcontextcreationerror",Kn,!1),it.dispose(),Le.dispose(),De.dispose(),re.dispose(),Ae.dispose(),he.dispose(),Ie.dispose(),ye.dispose(),Re.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",dn),Ve.removeEventListener("sessionend",An),Gn.stop()};function Kt(R){R.preventDefault(),lv("WebGLRenderer: Context Lost."),V=!0}function Ut(){lv("WebGLRenderer: Context Restored."),V=!1;const R=Q.autoReset,q=Qe.enabled,oe=Qe.autoUpdate,ie=Qe.needsUpdate,ae=Qe.type;qe(),Q.autoReset=R,Qe.enabled=q,Qe.autoUpdate=oe,Qe.needsUpdate=ie,Qe.type=ae}function Kn(R){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Qn(R){const q=R.target;q.removeEventListener("dispose",Qn),so(q)}function so(R){ro(R),re.remove(R)}function ro(R){const q=re.get(R).programs;q!==void 0&&(q.forEach(function(oe){Re.releaseProgram(oe)}),R.isShaderMaterial&&Re.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,oe,ie,ae,Oe){q===null&&(q=cn);const Ge=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Ue=Ua(R,q,oe,ie,ae);M.setMaterial(ie,Ge);let Xe=oe.index,ke=1;if(ie.wireframe===!0){if(Xe=fe.getWireframeAttribute(oe),Xe===void 0)return;ke=2}const Je=oe.drawRange,rt=oe.attributes.position;let Ye=Je.start*ke,At=(Je.start+Je.count)*ke;Oe!==null&&(Ye=Math.max(Ye,Oe.start*ke),At=Math.min(At,(Oe.start+Oe.count)*ke)),Xe!==null?(Ye=Math.max(Ye,0),At=Math.min(At,Xe.count)):rt!=null&&(Ye=Math.max(Ye,0),At=Math.min(At,rt.count));const Qt=At-Ye;if(Qt<0||Qt===1/0)return;Ie.setup(ae,ie,Ue,oe,Xe);let Xt,Lt=Te;if(Xe!==null&&(Xt=Ne.get(Xe),Lt=me,Lt.setIndex(Xt)),ae.isMesh)ie.wireframe===!0?(M.setLineWidth(ie.wireframeLinewidth*rn()),Lt.setMode(j.LINES)):Lt.setMode(j.TRIANGLES);else if(ae.isLine){let Ot=ie.linewidth;Ot===void 0&&(Ot=1),M.setLineWidth(Ot*rn()),ae.isLineSegments?Lt.setMode(j.LINES):ae.isLineLoop?Lt.setMode(j.LINE_LOOP):Lt.setMode(j.LINE_STRIP)}else ae.isPoints?Lt.setMode(j.POINTS):ae.isSprite&&Lt.setMode(j.TRIANGLES);if(ae.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Ot=ae._multiDrawStarts,ze=ae._multiDrawCounts,Un=ae._multiDrawCount,dt=Xe?Ne.get(Xe).bytesPerElement:1,xn=re.get(ie).currentProgram.getUniforms();for(let Jn=0;Jn<Un;Jn++)xn.setValue(j,"_gl_DrawID",Jn),Lt.render(Ot[Jn]/dt,ze[Jn])}else if(ae.isInstancedMesh)Lt.renderInstances(Ye,Qt,ae.count);else if(oe.isInstancedBufferGeometry){const Ot=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ze=Math.min(oe.instanceCount,Ot);Lt.renderInstances(Ye,Qt,ze)}else Lt.render(Ye,Qt)};function oo(R,q,oe){R.transparent===!0&&R.side===Ma&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,Da(R,q,oe),R.side=ps,R.needsUpdate=!0,Da(R,q,oe),R.side=Ma):Da(R,q,oe)}this.compile=function(R,q,oe=null){oe===null&&(oe=R),U=De.get(oe),U.init(q),E.push(U),oe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(U.pushLight(ae),ae.castShadow&&U.pushShadow(ae))}),R!==oe&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(U.pushLight(ae),ae.castShadow&&U.pushShadow(ae))}),U.setupLights();const ie=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Oe=ae.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const Ue=Oe[Ge];oo(Ue,oe,ae),ie.add(Ue)}else oo(Oe,oe,ae),ie.add(Oe)}),U=E.pop(),ie},this.compileAsync=function(R,q,oe=null){const ie=this.compile(R,q,oe);return new Promise(ae=>{function Oe(){if(ie.forEach(function(Ge){re.get(Ge).currentProgram.isReady()&&ie.delete(Ge)}),ie.size===0){ae(R);return}setTimeout(Oe,10)}Ct.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Js=null;function Pi(R){Js&&Js(R)}function dn(){Gn.stop()}function An(){Gn.start()}const Gn=new $x;Gn.setAnimationLoop(Pi),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(R){Js=R,Ve.setAnimationLoop(R),R===null?Gn.stop():Gn.start()},Ve.addEventListener("sessionstart",dn),Ve.addEventListener("sessionend",An),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;K!==null&&K.renderStart(R,q);const oe=Ve.enabled===!0&&Ve.isPresenting===!0,ie=D!==null&&(ne===null||oe)&&D.begin(X,ne);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(q),q=Ve.getCamera()),R.isScene===!0&&R.onBeforeRender(X,R,q,ne),U=De.get(R,E.length),U.init(q),U.state.textureUnits=de.getTextureUnits(),E.push(U),nn.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),_t.setFromProjectionMatrix(nn,Wi,q.reversedDepth),ft=this.localClippingEnabled,vt=Ze.init(this.clippingPlanes,ft),P=Le.get(R,F.length),P.init(),F.push(P),Ve.enabled===!0&&Ve.isPresenting===!0){const Ge=X.xr.getDepthSensingMesh();Ge!==null&&gs(Ge,q,-1/0,X.sortObjects)}gs(R,q,0,X.sortObjects),P.finish(),X.sortObjects===!0&&P.sort(He,nt,q.reversedDepth),qt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,qt&&it.addToRenderList(P,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&Ze.beginShadows();const ae=U.state.shadowsArray;if(Qe.render(ae,R,q),vt===!0&&Ze.endShadows(),(ie&&D.hasRenderPass())===!1){const Ge=P.opaque,Ue=P.transmissive;if(U.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(Ue.length>0)for(let ke=0,Je=Xe.length;ke<Je;ke++){const rt=Xe[ke];xl(Ge,Ue,R,rt)}qt&&it.render(R);for(let ke=0,Je=Xe.length;ke<Je;ke++){const rt=Xe[ke];vl(P,R,rt,rt.viewport)}}else Ue.length>0&&xl(Ge,Ue,R,q),qt&&it.render(R),vl(P,R,q)}ne!==null&&G===0&&(de.updateMultisampleRenderTarget(ne),de.updateRenderTargetMipmap(ne)),ie&&D.end(X),R.isScene===!0&&R.onAfterRender(X,R,q),Ie.resetDefaultState(),_e=-1,Ee=null,E.pop(),E.length>0?(U=E[E.length-1],de.setTextureUnits(U.state.textureUnits),vt===!0&&Ze.setGlobalState(X.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?P=F[F.length-1]:P=null,K!==null&&K.renderEnd()};function gs(R,q,oe,ie){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLightProbeGrid)U.pushLightProbeGrid(R);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||_t.intersectsSprite(R)){ie&&sn.setFromMatrixPosition(R.matrixWorld).applyMatrix4(nn);const Ge=he.update(R),Ue=R.material;Ue.visible&&P.push(R,Ge,Ue,oe,sn.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||_t.intersectsObject(R))){const Ge=he.update(R),Ue=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),sn.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),sn.copy(Ge.boundingSphere.center)),sn.applyMatrix4(R.matrixWorld).applyMatrix4(nn)),Array.isArray(Ue)){const Xe=Ge.groups;for(let ke=0,Je=Xe.length;ke<Je;ke++){const rt=Xe[ke],Ye=Ue[rt.materialIndex];Ye&&Ye.visible&&P.push(R,Ge,Ye,oe,sn.z,rt)}}else Ue.visible&&P.push(R,Ge,Ue,oe,sn.z,null)}}const Oe=R.children;for(let Ge=0,Ue=Oe.length;Ge<Ue;Ge++)gs(Oe[Ge],q,oe,ie)}function vl(R,q,oe,ie){const{opaque:ae,transmissive:Oe,transparent:Ge}=R;U.setupLightsView(oe),vt===!0&&Ze.setGlobalState(X.clippingPlanes,oe),ie&&M.viewport(O.copy(ie)),ae.length>0&&_s(ae,q,oe),Oe.length>0&&_s(Oe,q,oe),Ge.length>0&&_s(Ge,q,oe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function xl(R,q,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ie.id]===void 0){const Ye=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ie.id]=new ji(1,1,{generateMipmaps:!0,type:Ye?Ca:ui,minFilter:Xs,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const Oe=U.state.transmissionRenderTarget[ie.id],Ge=ie.viewport||O;Oe.setSize(Ge.z*X.transmissionResolutionScale,Ge.w*X.transmissionResolutionScale);const Ue=X.getRenderTarget(),Xe=X.getActiveCubeFace(),ke=X.getActiveMipmapLevel();X.setRenderTarget(Oe),X.getClearColor(Ce),Fe=X.getClearAlpha(),Fe<1&&X.setClearColor(16777215,.5),X.clear(),qt&&it.render(oe);const Je=X.toneMapping;X.toneMapping=qi;const rt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),U.setupLightsView(ie),vt===!0&&Ze.setGlobalState(X.clippingPlanes,ie),_s(R,oe,ie),de.updateMultisampleRenderTarget(Oe),de.updateRenderTargetMipmap(Oe),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let At=0,Qt=q.length;At<Qt;At++){const Xt=q[At],{object:Lt,geometry:Ot,material:ze,group:Un}=Xt;if(ze.side===Ma&&Lt.layers.test(ie.layers)){const dt=ze.side;ze.side=Zn,ze.needsUpdate=!0,Na(Lt,oe,ie,Ot,ze,Un),ze.side=dt,ze.needsUpdate=!0,Ye=!0}}Ye===!0&&(de.updateMultisampleRenderTarget(Oe),de.updateRenderTargetMipmap(Oe))}X.setRenderTarget(Ue,Xe,ke),X.setClearColor(Ce,Fe),rt!==void 0&&(ie.viewport=rt),X.toneMapping=Je}function _s(R,q,oe){const ie=q.isScene===!0?q.overrideMaterial:null;for(let ae=0,Oe=R.length;ae<Oe;ae++){const Ge=R[ae],{object:Ue,geometry:Xe,group:ke}=Ge;let Je=Ge.material;Je.allowOverride===!0&&ie!==null&&(Je=ie),Ue.layers.test(oe.layers)&&Na(Ue,q,oe,Xe,Je,ke)}}function Na(R,q,oe,ie,ae,Oe){R.onBeforeRender(X,q,oe,ie,ae,Oe),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(X,q,oe,ie,R,Oe),ae.transparent===!0&&ae.side===Ma&&ae.forceSinglePass===!1?(ae.side=Zn,ae.needsUpdate=!0,X.renderBufferDirect(oe,q,ie,ae,R,Oe),ae.side=ps,ae.needsUpdate=!0,X.renderBufferDirect(oe,q,ie,ae,R,Oe),ae.side=Ma):X.renderBufferDirect(oe,q,ie,ae,R,Oe),R.onAfterRender(X,q,oe,ie,ae,Oe)}function Da(R,q,oe){q.isScene!==!0&&(q=cn);const ie=re.get(R),ae=U.state.lights,Oe=U.state.shadowsArray,Ge=ae.state.version,Ue=Re.getParameters(R,ae.state,Oe,q,oe,U.state.lightProbeGridArray),Xe=Re.getProgramCacheKey(Ue);let ke=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;const Je=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=Ae.get(R.envMap||ie.environment,Je),ie.envMapRotation=ie.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,ke===void 0&&(R.addEventListener("dispose",Qn),ke=new Map,ie.programs=ke);let rt=ke.get(Xe);if(rt!==void 0){if(ie.currentProgram===rt&&ie.lightsStateVersion===Ge)return $i(R,Ue),rt}else Ue.uniforms=Re.getUniforms(R),K!==null&&R.isNodeMaterial&&K.build(R,oe,Ue),R.onBeforeCompile(Ue,X),rt=Re.acquireProgram(Ue,Xe),ke.set(Xe,rt),ie.uniforms=Ue.uniforms;const Ye=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Ze.uniform),$i(R,Ue),ie.needsLights=Sl(R),ie.lightsStateVersion=Ge,ie.needsLights&&(Ye.ambientLightColor.value=ae.state.ambient,Ye.lightProbe.value=ae.state.probe,Ye.directionalLights.value=ae.state.directional,Ye.directionalLightShadows.value=ae.state.directionalShadow,Ye.spotLights.value=ae.state.spot,Ye.spotLightShadows.value=ae.state.spotShadow,Ye.rectAreaLights.value=ae.state.rectArea,Ye.ltc_1.value=ae.state.rectAreaLTC1,Ye.ltc_2.value=ae.state.rectAreaLTC2,Ye.pointLights.value=ae.state.point,Ye.pointLightShadows.value=ae.state.pointShadow,Ye.hemisphereLights.value=ae.state.hemi,Ye.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ae.state.spotLightMatrix,Ye.spotLightMap.value=ae.state.spotLightMap,Ye.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=U.state.lightProbeGridArray.length>0,ie.currentProgram=rt,ie.uniformsList=null,rt}function Ji(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=fu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function $i(R,q){const oe=re.get(R);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function vs(R,q){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;w.setFromMatrixPosition(q.matrixWorld);for(let oe=0,ie=R.length;oe<ie;oe++){const ae=R[oe];if(ae.texture!==null&&ae.boundingBox.containsPoint(w))return ae}return null}function Ua(R,q,oe,ie,ae){q.isScene!==!0&&(q=cn),de.resetTextureUnits();const Oe=q.fog,Ge=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,Ue=ne===null?X.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:St.workingColorSpace,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,ke=Ae.get(ie.envMap||Ge,Xe),Je=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,rt=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ye=!!oe.morphAttributes.position,At=!!oe.morphAttributes.normal,Qt=!!oe.morphAttributes.color;let Xt=qi;ie.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Xt=X.toneMapping);const Lt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ot=Lt!==void 0?Lt.length:0,ze=re.get(ie),Un=U.state.lights;if(vt===!0&&(ft===!0||R!==Ee)){const Dt=R===Ee&&ie.id===_e;Ze.setState(ie,R,Dt)}let dt=!1;ie.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Un.state.version||ze.outputColorSpace!==Ue||ae.isBatchedMesh&&ze.batching===!1||!ae.isBatchedMesh&&ze.batching===!0||ae.isBatchedMesh&&ze.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&ze.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&ze.instancing===!1||!ae.isInstancedMesh&&ze.instancing===!0||ae.isSkinnedMesh&&ze.skinning===!1||!ae.isSkinnedMesh&&ze.skinning===!0||ae.isInstancedMesh&&ze.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&ze.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&ze.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&ze.instancingMorph===!1&&ae.morphTexture!==null||ze.envMap!==ke||ie.fog===!0&&ze.fog!==Oe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ze.numPlanes||ze.numIntersection!==Ze.numIntersection)||ze.vertexAlphas!==Je||ze.vertexTangents!==rt||ze.morphTargets!==Ye||ze.morphNormals!==At||ze.morphColors!==Qt||ze.toneMapping!==Xt||ze.morphTargetsCount!==Ot||!!ze.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,ze.__version=ie.version);let xn=ze.currentProgram;dt===!0&&(xn=Da(ie,q,ae),K&&ie.isNodeMaterial&&K.onUpdateProgram(ie,xn,ze));let Jn=!1,Ai=!1,$n=!1;const Pt=xn.getUniforms(),Jt=ze.uniforms;if(M.useProgram(xn.program)&&(Jn=!0,Ai=!0,$n=!0),ie.id!==_e&&(_e=ie.id,Ai=!0),ze.needsLights){const Dt=vs(U.state.lightProbeGridArray,ae);ze.lightProbeGrid!==Dt&&(ze.lightProbeGrid=Dt,Ai=!0)}if(Jn||Ee!==R){M.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Pt.setValue(j,"projectionMatrix",R.projectionMatrix),Pt.setValue(j,"viewMatrix",R.matrixWorldInverse);const Fi=Pt.map.cameraPosition;Fi!==void 0&&Fi.setValue(j,an.setFromMatrixPosition(R.matrixWorld)),L.logarithmicDepthBuffer&&Pt.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),Ee!==R&&(Ee=R,Ai=!0,$n=!0)}if(ze.needsLights&&(Un.state.directionalShadowMap.length>0&&Pt.setValue(j,"directionalShadowMap",Un.state.directionalShadowMap,de),Un.state.spotShadowMap.length>0&&Pt.setValue(j,"spotShadowMap",Un.state.spotShadowMap,de),Un.state.pointShadowMap.length>0&&Pt.setValue(j,"pointShadowMap",Un.state.pointShadowMap,de)),ae.isSkinnedMesh){Pt.setOptional(j,ae,"bindMatrix"),Pt.setOptional(j,ae,"bindMatrixInverse");const Dt=ae.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Pt.setValue(j,"boneTexture",Dt.boneTexture,de))}ae.isBatchedMesh&&(Pt.setOptional(j,ae,"batchingTexture"),Pt.setValue(j,"batchingTexture",ae._matricesTexture,de),Pt.setOptional(j,ae,"batchingIdTexture"),Pt.setValue(j,"batchingIdTexture",ae._indirectTexture,de),Pt.setOptional(j,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Pt.setValue(j,"batchingColorTexture",ae._colorsTexture,de));const Ti=oe.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&W.update(ae,oe,xn),(Ai||ze.receiveShadow!==ae.receiveShadow)&&(ze.receiveShadow=ae.receiveShadow,Pt.setValue(j,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&(Jt.envMapIntensity.value=q.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=iC()),Ai){if(Pt.setValue(j,"toneMappingExposure",X.toneMappingExposure),ze.needsLights&&hn(Jt,$n),Oe&&ie.fog===!0&&Be.refreshFogUniforms(Jt,Oe),Be.refreshMaterialUniforms(Jt,ie,Me,Se,U.state.transmissionRenderTarget[R.id]),ze.needsLights&&ze.lightProbeGrid){const Dt=ze.lightProbeGrid;Jt.probesSH.value=Dt.texture,Jt.probesMin.value.copy(Dt.boundingBox.min),Jt.probesMax.value.copy(Dt.boundingBox.max),Jt.probesResolution.value.copy(Dt.resolution)}fu.upload(j,Ji(ze),Jt,de)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(fu.upload(j,Ji(ze),Jt,de),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(j,"center",ae.center),Pt.setValue(j,"modelViewMatrix",ae.modelViewMatrix),Pt.setValue(j,"normalMatrix",ae.normalMatrix),Pt.setValue(j,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Dt=ie.uniformsGroups;for(let Fi=0,La=Dt.length;Fi<La;Fi++){const xs=Dt[Fi];ye.update(xs,xn),ye.bind(xs,xn)}}return xn}function hn(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Sl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(R,q,oe){const ie=re.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),re.get(R.texture).__webglTexture=q,re.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const oe=re.get(R);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,oe=0){ne=R,z=q,G=oe;let ie=null,ae=!1,Oe=!1;if(R){const Ue=re.get(R);if(Ue.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(j.FRAMEBUFFER,Ue.__webglFramebuffer),O.copy(R.viewport),Z.copy(R.scissor),be=R.scissorTest,M.viewport(O),M.scissor(Z),M.setScissorTest(be),_e=-1;return}else if(Ue.__webglFramebuffer===void 0)de.setupRenderTarget(R);else if(Ue.__hasExternalTextures)de.rebindTextures(R,re.get(R.texture).__webglTexture,re.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Ue.__boundDepthTexture!==Je){if(Je!==null&&re.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const ke=re.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[q])?ie=ke[q][oe]:ie=ke[q],ae=!0):R.samples>0&&de.useMultisampledRTT(R)===!1?ie=re.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?ie=ke[oe]:ie=ke,O.copy(R.viewport),Z.copy(R.scissor),be=R.scissorTest}else O.copy(Ke).multiplyScalar(Me).floor(),Z.copy(jt).multiplyScalar(Me).floor(),be=ut;if(oe!==0&&(ie=ue),M.bindFramebuffer(j.FRAMEBUFFER,ie)&&M.drawBuffers(R,ie),M.viewport(O),M.scissor(Z),M.setScissorTest(be),ae){const Ue=re.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ue.__webglTexture,oe)}else if(Oe){const Ue=q;for(let Xe=0;Xe<R.textures.length;Xe++){const ke=re.get(R.textures[Xe]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,oe,Ue)}}else if(R!==null&&oe!==0){const Ue=re.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ue.__webglTexture,oe)}_e=-1},this.readRenderTargetPixels=function(R,q,oe,ie,ae,Oe,Ge,Ue=0){if(!(R&&R.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){M.bindFramebuffer(j.FRAMEBUFFER,Xe);try{const ke=R.textures[Ue],Je=ke.format,rt=ke.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ue),!L.textureFormatReadable(Je)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(rt)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ie&&oe>=0&&oe<=R.height-ae&&j.readPixels(q,oe,ie,ae,we.convert(Je),we.convert(rt),Oe)}finally{const ke=ne!==null?re.get(ne).__webglFramebuffer:null;M.bindFramebuffer(j.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(R,q,oe,ie,ae,Oe,Ge,Ue=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe)if(q>=0&&q<=R.width-ie&&oe>=0&&oe<=R.height-ae){M.bindFramebuffer(j.FRAMEBUFFER,Xe);const ke=R.textures[Ue],Je=ke.format,rt=ke.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ue),!L.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Ye),j.bufferData(j.PIXEL_PACK_BUFFER,Oe.byteLength,j.STREAM_READ),j.readPixels(q,oe,ie,ae,we.convert(Je),we.convert(rt),0);const At=ne!==null?re.get(ne).__webglFramebuffer:null;M.bindFramebuffer(j.FRAMEBUFFER,At);const Qt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await vE(j,Qt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Ye),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Oe),j.deleteBuffer(Ye),j.deleteSync(Qt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,oe=0){const ie=Math.pow(2,-oe),ae=Math.floor(R.image.width*ie),Oe=Math.floor(R.image.height*ie),Ge=q!==null?q.x:0,Ue=q!==null?q.y:0;de.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,oe,0,0,Ge,Ue,ae,Oe),M.unbindTexture()},this.copyTextureToTexture=function(R,q,oe=null,ie=null,ae=0,Oe=0){let Ge,Ue,Xe,ke,Je,rt,Ye,At,Qt;const Xt=R.isCompressedTexture?R.mipmaps[Oe]:R.image;if(oe!==null)Ge=oe.max.x-oe.min.x,Ue=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,ke=oe.min.x,Je=oe.min.y,rt=oe.isBox3?oe.min.z:0;else{const Jt=Math.pow(2,-ae);Ge=Math.floor(Xt.width*Jt),Ue=Math.floor(Xt.height*Jt),R.isDataArrayTexture?Xe=Xt.depth:R.isData3DTexture?Xe=Math.floor(Xt.depth*Jt):Xe=1,ke=0,Je=0,rt=0}ie!==null?(Ye=ie.x,At=ie.y,Qt=ie.z):(Ye=0,At=0,Qt=0);const Lt=we.convert(q.format),Ot=we.convert(q.type);let ze;q.isData3DTexture?(de.setTexture3D(q,0),ze=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(de.setTexture2DArray(q,0),ze=j.TEXTURE_2D_ARRAY):(de.setTexture2D(q,0),ze=j.TEXTURE_2D),M.activeTexture(j.TEXTURE0),M.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),M.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),M.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const Un=M.getParameter(j.UNPACK_ROW_LENGTH),dt=M.getParameter(j.UNPACK_IMAGE_HEIGHT),xn=M.getParameter(j.UNPACK_SKIP_PIXELS),Jn=M.getParameter(j.UNPACK_SKIP_ROWS),Ai=M.getParameter(j.UNPACK_SKIP_IMAGES);M.pixelStorei(j.UNPACK_ROW_LENGTH,Xt.width),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Xt.height),M.pixelStorei(j.UNPACK_SKIP_PIXELS,ke),M.pixelStorei(j.UNPACK_SKIP_ROWS,Je),M.pixelStorei(j.UNPACK_SKIP_IMAGES,rt);const $n=R.isDataArrayTexture||R.isData3DTexture,Pt=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Jt=re.get(R),Ti=re.get(q),Dt=re.get(Jt.__renderTarget),Fi=re.get(Ti.__renderTarget);M.bindFramebuffer(j.READ_FRAMEBUFFER,Dt.__webglFramebuffer),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let La=0;La<Xe;La++)$n&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,re.get(R).__webglTexture,ae,rt+La),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,re.get(q).__webglTexture,Oe,Qt+La)),j.blitFramebuffer(ke,Je,Ge,Ue,Ye,At,Ge,Ue,j.DEPTH_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||re.has(R)){const Jt=re.get(R),Ti=re.get(q);M.bindFramebuffer(j.READ_FRAMEBUFFER,ge),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,J);for(let Dt=0;Dt<Xe;Dt++)$n?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Jt.__webglTexture,ae,rt+Dt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Jt.__webglTexture,ae),Pt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ti.__webglTexture,Oe,Qt+Dt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ti.__webglTexture,Oe),ae!==0?j.blitFramebuffer(ke,Je,Ge,Ue,Ye,At,Ge,Ue,j.COLOR_BUFFER_BIT,j.NEAREST):Pt?j.copyTexSubImage3D(ze,Oe,Ye,At,Qt+Dt,ke,Je,Ge,Ue):j.copyTexSubImage2D(ze,Oe,Ye,At,ke,Je,Ge,Ue);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Pt?R.isDataTexture||R.isData3DTexture?j.texSubImage3D(ze,Oe,Ye,At,Qt,Ge,Ue,Xe,Lt,Ot,Xt.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(ze,Oe,Ye,At,Qt,Ge,Ue,Xe,Lt,Xt.data):j.texSubImage3D(ze,Oe,Ye,At,Qt,Ge,Ue,Xe,Lt,Ot,Xt):R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Oe,Ye,At,Ge,Ue,Lt,Ot,Xt.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Oe,Ye,At,Xt.width,Xt.height,Lt,Xt.data):j.texSubImage2D(j.TEXTURE_2D,Oe,Ye,At,Ge,Ue,Lt,Ot,Xt);M.pixelStorei(j.UNPACK_ROW_LENGTH,Un),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,dt),M.pixelStorei(j.UNPACK_SKIP_PIXELS,xn),M.pixelStorei(j.UNPACK_SKIP_ROWS,Jn),M.pixelStorei(j.UNPACK_SKIP_IMAGES,Ai),Oe===0&&q.generateMipmaps&&j.generateMipmap(ze),M.unbindTexture()},this.initRenderTarget=function(R){re.get(R).__webglFramebuffer===void 0&&de.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?de.setTextureCube(R,0):R.isData3DTexture?de.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?de.setTexture2DArray(R,0):de.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){z=0,G=0,ne=null,M.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),i.unpackColorSpace=St._getUnpackColorSpace()}}const cs=[{id:"react",name:"REACT CLIENT",role:"Frontend Interface Layer",desc:"Modular component architecture, Redux Toolkit global state, responsive Tailwind UI.",pos:[-2.2,1.2,0],color:16119285},{id:"node",name:"NODE.JS API",role:"Backend Server Runtime",desc:"Asynchronous Express controllers, 15+ REST endpoints, error handling middleware.",pos:[0,0,0],color:2278750},{id:"auth",name:"AUTH MIDDLEWARE",role:"API Security & Verification",desc:"JWT authentication, HTTP-only cookie validation, role-based access control (RBAC).",pos:[2.2,1.2,0],color:16119285},{id:"mongodb",name:"MONGODB DATABASE",role:"Document Persistence Layer",desc:"Mongoose collection schemas, compound query indexing, validated CRUD pipelines.",pos:[0,-1.8,0],color:16119285}],sC=()=>{const r=kt.useRef(null),[e,i]=kt.useState(cs[1]);return kt.useEffect(()=>{const s=r.current;if(!s)return;const l=new OE,c=s.clientWidth||500,f=s.clientHeight||400,p=new ci(40,c/f,.1,1e3);p.position.z=7.5;const m=new aC({alpha:!0,antialias:!0});m.setSize(c,f),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.appendChild(m.domElement);const h=new Xr;l.add(h);const v=[];cs.forEach(D=>{const X=new Xr;X.position.set(...D.pos);const V=new io(1.6,.9,.3),K=new JE({color:D.id==="node"?1118481:657930,metalness:.8,roughness:.2,wireframe:!1}),ue=new Ki(V,K);X.add(ue);const ge=new qE(V),J=new jp({color:D.id==="node"?2278750:3684408,linewidth:1.5}),z=new XE(ge,J);X.add(z),ue.userData={nodeData:D,lineMat:J},h.add(X),v.push(ue)});const x=new t1({color:2368548,dashSize:.1,gapSize:.05});[[cs[0].pos,cs[1].pos],[cs[1].pos,cs[2].pos],[cs[1].pos,cs[3].pos]].forEach(([D,X])=>{const V=[new $(...D),new $(...X)],K=new Ei().setFromPoints(V),ue=new qx(K,x);h.add(ue)});const b=new s1(16777215,.6);l.add(b);const A=new a1(2278750,2,10);A.position.set(0,0,4),l.add(A);const N=new l1,y=new Mt;let S=0,B=0;const I=D=>{const X=s.getBoundingClientRect(),V=(D.clientX-X.left)/X.width-.5,K=(D.clientY-X.top)/X.height-.5;S=V*1.2,B=K*1.2,y.x=(D.clientX-X.left)/X.width*2-1,y.y=-((D.clientY-X.top)/X.height)*2+1,N.setFromCamera(y,p);const ue=N.intersectObjects(v);if(ue.length>0){const ge=ue[0].object.userData.nodeData;ge&&i(ge)}};s.addEventListener("mousemove",I);let w,P=!0;const U=new IntersectionObserver(([D])=>{P=D.isIntersecting},{threshold:.1});U.observe(s);const F=()=>{P&&(h.rotation.y+=(S-h.rotation.y)*.04,h.rotation.x+=(-B-h.rotation.x)*.04,m.render(l,p)),w=requestAnimationFrame(F)};F();const E=()=>{if(!s)return;const D=s.clientWidth,X=s.clientHeight;p.aspect=D/X,p.updateProjectionMatrix(),m.setSize(D,X)};return window.addEventListener("resize",E),()=>{cancelAnimationFrame(w),U.disconnect(),s.removeEventListener("mousemove",I),window.removeEventListener("resize",E),s.contains(m.domElement)&&s.removeChild(m.domElement),m.dispose()}},[]),T.jsxs("div",{className:"relative w-full border border-[#242424] rounded-xl bg-[#0A0A0A] overflow-hidden",children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-[#242424] bg-[#111111] px-4 py-2.5",children:[T.jsxs("div",{className:"flex items-center gap-2",children:[T.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-[#242424]"}),T.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-[#242424]"}),T.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-[#242424]"}),T.jsx("span",{className:"ml-2 font-mono text-xs text-[#71717A]",children:"3D System Architecture"})]}),T.jsx("span",{className:"font-mono text-[10px] text-[#22C55E] uppercase tracking-wider font-bold",children:"Interactive WebGL"})]}),T.jsx("div",{ref:r,className:"w-full h-[280px] sm:h-[340px] cursor-grab active:cursor-grabbing"}),T.jsxs("div",{className:"border-t border-[#242424] bg-[#050505] p-4 font-mono text-xs space-y-1",children:[T.jsxs("div",{className:"flex items-center justify-between",children:[T.jsx("span",{className:"text-[#22C55E] font-bold",children:e.name}),T.jsx("span",{className:"text-[#71717A] text-[10px] uppercase",children:e.role})]}),T.jsx("p",{className:"text-[#A1A1AA] font-sans text-xs leading-relaxed mt-1",children:e.desc})]})]})},sx=[{id:"component",label:"React Component",filename:"KanbanBoard.tsx",code:`import React, { useState } from 'react';
import { useKanbanStore } from '../store/useKanbanStore';

export const KanbanBoard: React.FC = () => {
  const { columns, updateStage } = useKanbanStore();

  const handleDrop = async (id: string, targetStage: string) => {
    updateStage(id, targetStage); // Optimistic UI update
    await api.patch(\`/api/v1/applications/\${id}\`, { stage: targetStage });
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {columns.map(col => <StageColumn key={col.id} column={col} onDrop={handleDrop} />)}
    </div>
  );
};`},{id:"backend",label:"Express Middleware",filename:"authMiddleware.ts",code:`import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Authentication required' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid session token' });
  }
};`},{id:"database",label:"Mongoose Schema",filename:"Application.ts",code:`import { Schema, model } from 'mongoose';

const ApplicationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  company: { type: String, required: true },
  stage: { type: String, enum: ['Wishlist', 'Applied', 'Interviewing'], default: 'Applied' }
}, { timestamps: true });

export const Application = model('Application', ApplicationSchema);`}],rC=()=>{const r=eo(),[e,i]=kt.useState(!1),[s,l]=kt.useState("component"),c=m=>{r(Mx(m));const h=document.getElementById(m);h&&h.scrollIntoView({behavior:"smooth"})},f=()=>{r(wu(Zr))},p=sx.find(m=>m.id===s);return T.jsxs("section",{id:"home",className:"pt-10 pb-16",children:[T.jsxs("div",{className:"grid gap-12 lg:grid-cols-12 lg:items-start",children:[T.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[T.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-[#242424] bg-[#0A0A0A] px-3 py-1 font-mono text-xs text-[#A1A1AA]",children:[T.jsx("span",{className:"h-2 w-2 rounded-full bg-[#22C55E]"}),T.jsx("span",{children:"Available for Full-Time Roles • Bangalore, India"})]}),T.jsx("h1",{className:"font-sans text-3xl font-extrabold tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl leading-[1.15]",children:"Full Stack Developer building thoughtful web applications from frontend to backend."}),T.jsxs("p",{className:"font-sans text-base leading-relaxed text-[#A1A1AA] max-w-2xl sm:text-lg",children:["I am ",T.jsx("strong",{className:"text-[#F5F5F5] font-semibold",children:"Nachiketa NR"}),". I build reliable web products using React, Node.js, Express, and MongoDB. Focused on clean system architecture, REST API security, and intuitive user interfaces."]}),T.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-3 font-mono text-xs",children:[T.jsx("button",{type:"button",onClick:()=>c("projects"),className:"rounded-md bg-[#F5F5F5] px-5 py-2.5 font-semibold text-[#050505] hover:bg-white transition-colors",children:"View Work ↓"}),T.jsx("button",{type:"button",onClick:f,className:"rounded-md border border-[#242424] bg-[#0A0A0A] px-5 py-2.5 text-[#F5F5F5] hover:border-[#383838] hover:bg-[#111111] transition-colors",children:"View Resume"}),T.jsx("button",{type:"button",onClick:()=>i(!e),className:"rounded-md border border-[#242424] bg-[#050505] px-4 py-2.5 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#383838] transition-colors",children:e?"View 3D Arch":"View Code ↗"}),T.jsx("a",{href:"https://github.com/Nachi12",target:"_blank",rel:"noreferrer",className:"rounded-md border border-[#242424] bg-[#050505] px-4 py-2.5 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#383838] transition-colors",children:"GitHub ↗"})]})]}),T.jsx("div",{className:"lg:col-span-5",children:e?T.jsxs("div",{className:"border border-[#242424] rounded-xl bg-[#0A0A0A] overflow-hidden",children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-[#242424] bg-[#111111] px-4 py-2.5",children:[T.jsx("span",{className:"font-mono text-xs text-[#71717A]",children:p.filename}),T.jsx("button",{onClick:()=>i(!1),className:"font-mono text-[10px] text-[#22C55E]",children:"Back to 3D Arch"})]}),T.jsx("div",{className:"flex border-b border-[#242424] bg-[#050505] font-mono text-[11px]",children:sx.map(m=>T.jsx("button",{onClick:()=>l(m.id),className:`flex-1 py-2 text-center border-r border-[#242424] last:border-r-0 ${s===m.id?"bg-[#0A0A0A] text-[#F5F5F5] font-semibold":"text-[#71717A]"}`,children:m.id.toUpperCase()},m.id))}),T.jsx("pre",{className:"p-4 font-mono text-xs text-slate-300 overflow-x-auto min-h-[260px]",children:T.jsx("code",{children:p.code})})]}):T.jsx(sC,{})})]}),T.jsxs("div",{className:"mt-14 border-y border-[#242424] py-5 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs",children:[T.jsxs("div",{children:[T.jsx("span",{className:"text-[#71717A] block text-[10px] uppercase tracking-wider",children:"ROLE"}),T.jsx("span",{className:"text-[#F5F5F5] font-semibold",children:"Full Stack Developer"})]}),T.jsxs("div",{children:[T.jsx("span",{className:"text-[#71717A] block text-[10px] uppercase tracking-wider",children:"PRIMARY STACK"}),T.jsx("span",{className:"text-[#F5F5F5] font-semibold",children:"MERN + TypeScript"})]}),T.jsxs("div",{children:[T.jsx("span",{className:"text-[#71717A] block text-[10px] uppercase tracking-wider",children:"LOCATION"}),T.jsx("span",{className:"text-[#F5F5F5] font-semibold",children:"Bangalore, India"})]}),T.jsxs("div",{children:[T.jsx("span",{className:"text-[#71717A] block text-[10px] uppercase tracking-wider",children:"AVAILABILITY"}),T.jsxs("span",{className:"text-[#22C55E] font-semibold flex items-center gap-1.5",children:[T.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-[#22C55E]"}),"Immediate Joiner"]})]})]})]})},Qs=({number:r,eyebrow:e,title:i,description:s,className:l=""})=>T.jsxs("div",{className:`mb-12 border-b border-[#242424] pb-6 ${l}`,children:[T.jsxs("div",{className:"flex items-center gap-3 font-mono text-xs text-[#71717A] tracking-wider uppercase mb-2",children:[r&&T.jsx("span",{className:"text-[#22C55E] font-bold",children:r}),e&&T.jsxs("span",{children:["// ",e]})]}),T.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4",children:[T.jsx("h2",{className:"font-sans text-2xl font-bold tracking-tight text-[#F5F5F5] sm:text-3xl lg:text-4xl",children:i}),s&&T.jsx("p",{className:"max-w-xl text-sm leading-relaxed text-[#A1A1AA] font-sans",children:s})]})]}),us=({children:r,variant:e="default",size:i="sm",className:s=""})=>{const l="inline-flex items-center font-mono font-medium transition-colors",c={xs:"px-2 py-0.5 text-[10px] rounded-sm",sm:"px-2.5 py-1 text-xs rounded-md",md:"px-3 py-1 text-xs rounded-md"},f={default:"bg-[#111111] text-[#A1A1AA] border border-[#242424]",green:"bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20",muted:"bg-[#0A0A0A] text-[#71717A] border border-[#242424]",white:"bg-[#F5F5F5] text-[#050505] font-semibold"};return T.jsx("span",{className:`${l} ${c[i]} ${f[e]||f.default} ${s}`,children:r})},cl=({children:r,className:e="",maxTilt:i=8,scale:s=1.015,perspective:l=1e3,...c})=>{const f=kt.useRef(null),[p,m]=kt.useState({transform:`perspective(${l}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,transition:"transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)"}),h=x=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!f.current)return;const g=f.current.getBoundingClientRect(),b=g.width,A=g.height,N=x.clientX-g.left,y=x.clientY-g.top,S=N/b-.5,I=(-(y/A-.5)*i).toFixed(2),w=(S*i).toFixed(2);m({transform:`perspective(${l}px) rotateX(${I}deg) rotateY(${w}deg) scale3d(${s}, ${s}, ${s})`,transition:"transform 0.1s cubic-bezier(0.1, 0.2, 0.1, 1)"})},v=()=>{m({transform:`perspective(${l}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,transition:"transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"})};return T.jsx("div",{ref:f,onMouseMove:h,onMouseLeave:v,style:p,className:`relative preserve-3d group ${e}`,...c,children:r})},Nt=[{id:"hirelog",number:"PROJECT 01",name:"HireLog",year:"2025",tagline:"Multi-User Job Application Tracker SaaS Platform",role:"Full Stack Engineer",url:null,github:"https://github.com/Nachi12",problem:"Job seekers struggle to track application stages across dozens of platforms, manage interview dates, and organize candidate metrics.",solution:"Engineered a multi-user 5-stage Kanban SaaS application with 15+ secured REST API endpoints, JWT session cookie verification, CSV exports, and optimistic state updates.",decisions:["Implemented optimistic UI state rendering in Redux Toolkit to provide instantaneous drag-and-drop column transitions.","Secured backend REST endpoints with custom JWT cookie authentication middleware and HTTP-only cookie storage.","Designed MongoDB Mongoose schemas with compound indexes to accelerate user-filtered pipeline queries."],architectureDetails:[{layer:"Frontend",tech:"React.js, Redux Toolkit, Tailwind CSS"},{layer:"Backend API",tech:"Node.js, Express.js, JWT Cookie Auth"},{layer:"Database",tech:"MongoDB, Mongoose ODM (Indexed queries)"}],stack:["React.js","Node.js","Express.js","MongoDB","TypeScript","Redux Toolkit","JWT"]},{id:"connect",number:"PROJECT 02",name:"CONNECT",year:"2024",tagline:"Role-Based Mock Interview & Candidate Assessment Platform",role:"Full Stack Engineer",url:"https://connect-frontend1.netlify.app/",github:"https://github.com/Nachi12",problem:"Bootcamps and assessment teams require structured interview scheduling with granular permission levels for Admins, Interviewers, and Candidates.",solution:"Designed and deployed a role-based access control (RBAC) web application securing 20+ Express API endpoints and serving distinct client dashboards.",decisions:["Enforced RBAC authorization middleware validating user payload claims before permitting access to sensitive interview feedback routes.","Architected modular API client services managing token refreshes and standardized HTTP error responses.","Deployed frontend on Netlify and backend on Render with strict CORS policy and environment isolation."],architectureDetails:[{layer:"Auth Security",tech:"RBAC Access Control, JWT, Bcrypt"},{layer:"API Routes",tech:"20+ Express.js controllers with validation"},{layer:"Deployment",tech:"Netlify (Client) + Render (API Server)"}],stack:["React.js","Node.js","Express.js","MongoDB","RBAC Security","JWT","Netlify"]},{id:"cryptotrack",number:"PROJECT 03",name:"CryptoTrack",year:"2024",tagline:"Real-Time Cryptocurrency Analytics Dashboard",role:"Frontend Developer",url:null,github:"https://github.com/Nachi12",problem:"Digital asset enthusiasts require low-latency market tracking, client-side search filtering, and responsive price visualization across 100+ coins.",solution:"Built a real-time crypto analytics dashboard consuming REST APIs with client-side memoized search and responsive sorting algorithms.",decisions:["Implemented debounced search inputs and memoized state filters to prevent unnecessary re-renders during high-frequency API data streams.","Designed a clean dark typography hierarchy with clear indicator tags for market capitalization and price changes."],architectureDetails:[{layer:"Client State",tech:"React Hooks, Memoized Search Filters"},{layer:"API Layer",tech:"CoinGecko REST API Integration"},{layer:"Styling",tech:"Tailwind CSS, Dark High-Contrast Theme"}],stack:["React.js","REST API Integration","Client-Side Search","Tailwind CSS"]}],oC=()=>{const r=eo(),e=i=>{r(Cb(i))};return T.jsxs("section",{id:"projects",className:"py-16",children:[T.jsx(Qs,{number:"01",eyebrow:"SELECTED WORK",title:"Featured Engineering Case Studies",description:"A selection of full-stack applications and systems demonstrating database design, REST API security, and state management."}),T.jsxs("div",{className:"space-y-16",children:[T.jsx(cl,{maxTilt:5,scale:1.015,children:T.jsx("div",{className:"editorial-card rounded-xl p-6 lg:p-8",children:T.jsxs("div",{className:"flex flex-col lg:flex-row gap-8",children:[T.jsxs("div",{className:"lg:w-7/12 space-y-5",children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-[#242424] pb-3 translate-z-20",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("span",{className:"font-mono text-xs text-[#22C55E] font-bold",children:Nt[0].number}),T.jsxs("span",{className:"font-mono text-xs text-[#71717A]",children:["• ",Nt[0].year]})]}),T.jsx(us,{variant:"muted",children:Nt[0].role})]}),T.jsxs("div",{className:"translate-z-20",children:[T.jsx("h3",{className:"font-sans text-2xl font-bold text-[#F5F5F5]",children:Nt[0].name}),T.jsx("p",{className:"font-mono text-xs text-[#22C55E] mt-1",children:Nt[0].tagline})]}),T.jsxs("div",{className:"space-y-3 font-sans text-xs translate-z-10",children:[T.jsxs("div",{children:[T.jsx("span",{className:"font-mono text-[10px] text-[#71717A] uppercase block",children:"// Problem"}),T.jsx("p",{className:"text-[#A1A1AA] leading-relaxed mt-1",children:Nt[0].problem})]}),T.jsxs("div",{children:[T.jsx("span",{className:"font-mono text-[10px] text-[#22C55E] uppercase block",children:"// Solution"}),T.jsx("p",{className:"text-[#F5F5F5] leading-relaxed mt-1",children:Nt[0].solution})]})]}),T.jsxs("div",{className:"translate-z-10",children:[T.jsx("span",{className:"font-mono text-[10px] text-[#71717A] uppercase block mb-2",children:"// Engineering Decisions"}),T.jsx("ul",{className:"space-y-1.5 font-sans text-xs text-[#A1A1AA]",children:Nt[0].decisions.map((i,s)=>T.jsxs("li",{className:"flex gap-2",children:[T.jsx("span",{className:"text-[#22C55E] font-mono",children:"›"}),T.jsx("span",{children:i})]},s))})]}),T.jsxs("div",{className:"pt-3 border-t border-[#242424] flex flex-wrap items-center justify-between gap-3 font-mono text-xs translate-z-25",children:[T.jsx("div",{className:"flex flex-wrap gap-1.5",children:Nt[0].stack.map(i=>T.jsx(us,{variant:"default",size:"xs",children:i},i))}),T.jsx("a",{href:Nt[0].github,target:"_blank",rel:"noreferrer",className:"text-[#F5F5F5] hover:text-[#22C55E] transition-colors",children:"GitHub Repository ↗"})]})]}),T.jsxs("div",{className:"lg:w-5/12 border border-[#242424] bg-[#050505] rounded-lg p-5 font-mono text-xs flex flex-col justify-between translate-z-20",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-[#242424] pb-3 mb-4",children:[T.jsx("span",{className:"text-[#71717A] uppercase text-[10px]",children:"// System Architecture"}),T.jsx("span",{className:"text-[#22C55E] text-[10px]",children:"REST + Kanban"})]}),T.jsx("div",{className:"space-y-3",children:Nt[0].architectureDetails.map((i,s)=>T.jsxs("div",{className:"border-b border-[#111111] pb-2.5 last:border-b-0",children:[T.jsx("span",{className:"text-[#22C55E] text-[10px] block font-bold",children:i.layer}),T.jsx("span",{className:"text-[#A1A1AA] text-xs mt-0.5 block",children:i.tech})]},s))})]}),T.jsx("div",{className:"mt-6 pt-3 border-t border-[#242424] text-[11px] text-[#71717A]",children:"Status: Production Ready • Local Tested"})]})]})})}),T.jsx(cl,{maxTilt:5,scale:1.015,children:T.jsx("div",{className:"editorial-card rounded-xl p-6 lg:p-8",children:T.jsxs("div",{className:"flex flex-col lg:flex-row-reverse gap-8",children:[T.jsxs("div",{className:"lg:w-7/12 space-y-5",children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-[#242424] pb-3 translate-z-20",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("span",{className:"font-mono text-xs text-[#22C55E] font-bold",children:Nt[1].number}),T.jsxs("span",{className:"font-mono text-xs text-[#71717A]",children:["• ",Nt[1].year]})]}),T.jsx(us,{variant:"muted",children:Nt[1].role})]}),T.jsxs("div",{className:"translate-z-20",children:[T.jsx("h3",{className:"font-sans text-2xl font-bold text-[#F5F5F5]",children:Nt[1].name}),T.jsx("p",{className:"font-mono text-xs text-[#22C55E] mt-1",children:Nt[1].tagline})]}),T.jsxs("div",{className:"space-y-3 font-sans text-xs translate-z-10",children:[T.jsxs("div",{children:[T.jsx("span",{className:"font-mono text-[10px] text-[#71717A] uppercase block",children:"// Problem"}),T.jsx("p",{className:"text-[#A1A1AA] leading-relaxed mt-1",children:Nt[1].problem})]}),T.jsxs("div",{children:[T.jsx("span",{className:"font-mono text-[10px] text-[#22C55E] uppercase block",children:"// Solution"}),T.jsx("p",{className:"text-[#F5F5F5] leading-relaxed mt-1",children:Nt[1].solution})]})]}),T.jsxs("div",{className:"translate-z-10",children:[T.jsx("span",{className:"font-mono text-[10px] text-[#71717A] uppercase block mb-2",children:"// Key Decisions"}),T.jsx("ul",{className:"space-y-1.5 font-sans text-xs text-[#A1A1AA]",children:Nt[1].decisions.map((i,s)=>T.jsxs("li",{className:"flex gap-2",children:[T.jsx("span",{className:"text-[#22C55E] font-mono",children:"›"}),T.jsx("span",{children:i})]},s))})]}),T.jsxs("div",{className:"pt-3 border-t border-[#242424] flex flex-wrap items-center justify-between gap-3 font-mono text-xs translate-z-25",children:[T.jsx("div",{className:"flex flex-wrap gap-1.5",children:Nt[1].stack.map(i=>T.jsx(us,{variant:"default",size:"xs",children:i},i))}),T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("button",{type:"button",onClick:()=>e(Nt[1].url),className:"text-[#22C55E] hover:underline font-bold",children:"Live Demo ↗"}),T.jsx("a",{href:Nt[1].github,target:"_blank",rel:"noreferrer",className:"text-[#F5F5F5] hover:text-[#22C55E] transition-colors",children:"GitHub ↗"})]})]})]}),T.jsxs("div",{className:"lg:w-5/12 border border-[#242424] bg-[#050505] rounded-lg p-5 font-mono text-xs flex flex-col justify-between translate-z-20",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-[#242424] pb-3 mb-4",children:[T.jsx("span",{className:"text-[#71717A] uppercase text-[10px]",children:"// Role Security Architecture"}),T.jsx("span",{className:"text-[#22C55E] text-[10px]",children:"RBAC + JWT"})]}),T.jsxs("div",{className:"space-y-2.5 text-[11px]",children:[T.jsxs("div",{className:"p-2 border border-[#242424] bg-[#0A0A0A] rounded",children:[T.jsx("span",{className:"text-[#F5F5F5] font-bold block",children:"ADMIN ROLE"}),T.jsx("span",{className:"text-[#71717A] text-[10px]",children:"Full system access, interviewer assignment"})]}),T.jsxs("div",{className:"p-2 border border-[#242424] bg-[#0A0A0A] rounded",children:[T.jsx("span",{className:"text-[#F5F5F5] font-bold block",children:"INTERVIEWER ROLE"}),T.jsx("span",{className:"text-[#71717A] text-[10px]",children:"Candidate evaluation, score submission"})]}),T.jsxs("div",{className:"p-2 border border-[#242424] bg-[#0A0A0A] rounded",children:[T.jsx("span",{className:"text-[#F5F5F5] font-bold block",children:"CANDIDATE ROLE"}),T.jsx("span",{className:"text-[#71717A] text-[10px]",children:"Slot booking, feedback review"})]})]})]}),T.jsx("div",{className:"mt-4 pt-3 border-t border-[#242424] text-[10px] text-[#71717A]",children:"Deployed on Netlify (Client) & Render (API)"})]})]})})}),T.jsx(cl,{maxTilt:5,scale:1.015,children:T.jsx("div",{className:"editorial-card rounded-xl p-6 lg:p-8",children:T.jsxs("div",{className:"space-y-5",children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-[#242424] pb-3 translate-z-20",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("span",{className:"font-mono text-xs text-[#22C55E] font-bold",children:Nt[2].number}),T.jsxs("span",{className:"font-mono text-xs text-[#71717A]",children:["• ",Nt[2].year]})]}),T.jsx(us,{variant:"muted",children:Nt[2].role})]}),T.jsxs("div",{className:"translate-z-20",children:[T.jsx("h3",{className:"font-sans text-2xl font-bold text-[#F5F5F5]",children:Nt[2].name}),T.jsx("p",{className:"font-mono text-xs text-[#22C55E] mt-1",children:Nt[2].tagline})]}),T.jsxs("div",{className:"grid gap-6 md:grid-cols-2 font-sans text-xs translate-z-10",children:[T.jsxs("div",{children:[T.jsx("span",{className:"font-mono text-[10px] text-[#71717A] uppercase block",children:"// Problem"}),T.jsx("p",{className:"text-[#A1A1AA] leading-relaxed mt-1",children:Nt[2].problem})]}),T.jsxs("div",{children:[T.jsx("span",{className:"font-mono text-[10px] text-[#22C55E] uppercase block",children:"// Solution"}),T.jsx("p",{className:"text-[#F5F5F5] leading-relaxed mt-1",children:Nt[2].solution})]})]}),T.jsxs("div",{className:"pt-3 border-t border-[#242424] flex flex-wrap items-center justify-between gap-3 font-mono text-xs translate-z-25",children:[T.jsx("div",{className:"flex flex-wrap gap-1.5",children:Nt[2].stack.map(i=>T.jsx(us,{variant:"default",size:"xs",children:i},i))}),T.jsx("a",{href:Nt[2].github,target:"_blank",rel:"noreferrer",className:"text-[#F5F5F5] hover:text-[#22C55E] transition-colors",children:"GitHub Repository ↗"})]})]})})})]})]})},lC=[{num:"01",title:"Understand & Model Requirements",desc:"Clarify product constraints, user workflows, and data relationships before writing code. Define normalized MongoDB collections and TypeScript interfaces."},{num:"02",title:"Design API & State Architecture",desc:"Establish RESTful endpoint conventions, request payloads, error statuses, and frontend global state slices (Redux Toolkit) for clean data flow."},{num:"03",title:"Build Modular MERN Components",desc:"Develop reusable React interfaces with Tailwind CSS and modular Node.js/Express route controllers enforcing clear separation of concerns."},{num:"04",title:"Test & Secure Middleware Layer",desc:"Enforce JWT authentication, role-based access control (RBAC), bcrypt password hashing, and input validation to eliminate API vulnerabilities."},{num:"05",title:"Deploy & Monitor Performance",desc:"Deploy frontend assets to Netlify and backend services to Render/Vercel with isolated environment secrets, CORS security, and Postman API verification."}],cC=()=>T.jsxs("section",{id:"methodology",className:"py-16",children:[T.jsx(Qs,{number:"02",eyebrow:"ENGINEERING PROCESS",title:"How I Build Software",description:"A structured, defensive approach to engineering reliable web applications from data modeling to production deployment."}),T.jsx("div",{className:"grid gap-6 md:grid-cols-5",children:lC.map(r=>T.jsx("div",{className:"editorial-card rounded-xl p-5 flex flex-col justify-between",children:T.jsxs("div",{children:[T.jsx("span",{className:"font-mono text-sm font-bold text-[#22C55E] block mb-3",children:r.num}),T.jsx("h3",{className:"font-sans text-sm font-bold text-[#F5F5F5] mb-2 leading-snug",children:r.title}),T.jsx("p",{className:"font-sans text-xs text-[#A1A1AA] leading-relaxed",children:r.desc})]})},r.num))})]}),uC={"React 19":["TypeScript","Redux Toolkit","Tailwind CSS","REST Architecture"],TypeScript:["React 19","Node.js","Mongoose ODM"],"Node.js":["Express.js","JWT Auth","MongoDB","RBAC Security"],"Express.js":["Node.js","JWT Auth","Bcrypt & Crypto","REST Architecture"],MongoDB:["Mongoose ODM","Node.js","CRUD Pipelines"],"Redux Toolkit":["React 19","TypeScript","REST Architecture"],"JWT Auth":["Node.js","Express.js","RBAC Security"],"Tailwind CSS":["React 19","HTML5 & CSS3"]},fC=[{category:"Frontend Engineering",items:[{name:"React 19",note:"Hooks, Context, State Slices"},{name:"TypeScript",note:"Strict Typings, Interfaces"},{name:"JavaScript (ES6+)",note:"Async/Await, Closures"},{name:"Redux Toolkit",note:"Global Application State"},{name:"Tailwind CSS",note:"Responsive Layout Systems"},{name:"HTML5 & CSS3",note:"Semantic Structure"}]},{category:"Backend & REST APIs",items:[{name:"Node.js",note:"Asynchronous Event Loop"},{name:"Express.js",note:"Route Controllers, Middleware"},{name:"REST Architecture",note:"HTTP Methods, Standard JSON"},{name:"JWT Auth",note:"Token Verification, Cookies"},{name:"RBAC Security",note:"Role Authorization Guards"},{name:"Bcrypt & Crypto",note:"Password Hashing"}]},{category:"Databases & Schemas",items:[{name:"MongoDB",note:"Document Store, Indexing"},{name:"Mongoose ODM",note:"Schema Validation, Queries"},{name:"CRUD Pipelines",note:"Optimized Aggregations"},{name:"SQL Fundamentals",note:"Relational Model Logic"}]},{category:"Tools & Deployment",items:[{name:"Git & GitHub",note:"Branching, Commit History"},{name:"Postman",note:"API Endpoint Testing"},{name:"Netlify & Render",note:"Cloud Hosting & Secrets"},{name:"VS Code Studio",note:"Primary IDE"},{name:"Figma",note:"UI Layout Specification"}]}],dC=()=>{const[r,e]=kt.useState(null),i=r?uC[r]||[]:[];return T.jsxs("section",{id:"stack",className:"py-16",children:[T.jsx(Qs,{number:"03",eyebrow:"DEPENDENCY MAP",title:"Interactive Technical Stack & Dependencies",description:"Hover any core technology to highlight connected architectural dependencies across frontend, backend, and data layers."}),T.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:fC.map(s=>T.jsx(cl,{maxTilt:4,scale:1.01,children:T.jsx("div",{className:"editorial-card rounded-xl p-6 h-full flex flex-col justify-between",children:T.jsxs("div",{children:[T.jsxs("h3",{className:"font-mono text-xs font-bold text-[#22C55E] uppercase tracking-wider mb-4 border-b border-[#242424] pb-2 translate-z-20",children:["// ",s.category]}),T.jsx("div",{className:"space-y-3 font-sans text-xs translate-z-10",children:s.items.map(l=>{const c=r===l.name,f=i.includes(l.name);return T.jsxs("div",{onMouseEnter:()=>e(l.name),onMouseLeave:()=>e(null),className:`flex items-center justify-between border-b border-[#111111] pb-2 last:border-b-0 cursor-pointer transition-all duration-200 p-1 rounded ${c?"bg-[#111111] text-[#22C55E] font-bold border-[#22C55E]/40 translate-x-1":f?"bg-[#22C55E]/10 text-[#F5F5F5] font-semibold border-[#22C55E]/30":"text-[#F5F5F5] hover:bg-[#0A0A0A]"}`,children:[T.jsxs("span",{className:"flex items-center gap-2",children:[f&&T.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-pulse"}),l.name]}),T.jsx("span",{className:"font-mono text-[11px] text-[#71717A]",children:l.note})]},l.name)})})]})})},s.category))})]})},hC=[{id:"shiksha",role:"Founder & Full Stack Developer",company:"Shiksha Source",period:"Jan 2025 – Present",type:"Product Leadership",location:"Bangalore, India",overview:"Architected and developed full-stack educational web application with custom REST API infrastructure and responsive client interface.",highlights:["Engineered React.js client interface and Express.js server routes supporting course delivery and user profile management.","Designed MongoDB database collections with query indexes and schema validation rules.","Integrated Cursor AI, GitHub Copilot, and prompt engineering to accelerate feature delivery cycles by 40%."],tech:["React.js","Node.js","Express.js","MongoDB","REST APIs","JWT"]},{id:"almabetter",role:"Professional Software Fellow",company:"AlmaBetter Fellowship",period:"Completed: 2026",type:"Specialized Engineering",location:"Remote",overview:"Intensive fellowship specializing in modern full-stack development, AI-assisted software workflows, and system architecture.",highlights:["Mastered MERN stack architecture, asynchronous JavaScript, and Redux Toolkit state management.","Practiced version control, defensive code reviews, and cloud deployment pipelines."],tech:["Full Stack","AI Engineering Workflows","MERN Architecture","Git/GitHub"]},{id:"dave",role:"UX/UI Designer Intern",company:"Dave Brother's Technology",period:"Dec 2023 – Jan 2024",type:"Internship",location:"Bangalore, India",overview:"Designed high-fidelity web screen layouts and collaborated directly with frontend engineers.",highlights:["Created wireframes and interactive prototypes in Figma for multi-screen client applications.","Collaborated with frontend developers to ensure accurate layout specs and typography hierarchy."],tech:["Figma","UI Design System","Wireframing","Responsive Layout"]},{id:"epatrakar",role:"UX/UI Designer Intern",company:"E-Patrakar",period:"Dec 2023 – Jan 2024",type:"Internship",location:"Remote",overview:"Focused on digital publishing UX improvements, accessibility, and content hierarchy.",highlights:["Designed responsive UI screens for digital content publishing applications.","Improved layout navigation flow based on usability feedback."],tech:["Figma","User Experience (UX)","Accessibility","Typography"]}],pC=()=>{const[r,e]=kt.useState("shiksha");return T.jsxs("section",{id:"experience",className:"py-16",children:[T.jsx(Qs,{number:"04",eyebrow:"SPATIAL HISTORY",title:"Experience & Career Nodes",description:"Professional engineering work, product development leadership, specialized fellowship, and UX design foundation."}),T.jsx("div",{className:"border-l border-[#242424] pl-6 sm:pl-8 space-y-8 ml-2",children:hC.map(i=>{const s=r===i.id;return T.jsxs("div",{className:"relative",children:[T.jsx("span",{onClick:()=>e(i.id),className:`absolute -left-[31px] sm:-left-[39px] top-4 h-3.5 w-3.5 rounded-full cursor-pointer transition-all duration-300 border-2 ${s?"bg-[#22C55E] border-[#050505] ring-4 ring-[#22C55E]/20 scale-125":"bg-[#242424] border-[#050505] hover:bg-[#383838]"}`}),T.jsx(cl,{maxTilt:4,scale:1.01,children:T.jsxs("div",{onClick:()=>e(i.id),className:`editorial-card rounded-xl p-5 cursor-pointer transition-colors ${s?"border-[#22C55E]/50 bg-[#0D0D0D]":""}`,children:[T.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#242424] pb-3 translate-z-20",children:[T.jsxs("div",{children:[T.jsx("h3",{className:"font-sans text-base font-bold text-[#F5F5F5]",children:i.role}),T.jsx("p",{className:"font-mono text-xs text-[#22C55E]",children:i.company})]}),T.jsxs("div",{className:"font-mono text-xs text-[#71717A] flex items-center gap-3",children:[T.jsx("span",{children:i.location}),T.jsx("span",{children:"•"}),T.jsx("span",{className:"text-[#A1A1AA]",children:i.period})]})]}),T.jsx("p",{className:"font-sans text-xs leading-relaxed text-[#A1A1AA] mt-3 translate-z-10",children:i.overview}),s&&T.jsxs("div",{className:"mt-3 space-y-2 border-t border-[#242424] pt-3 font-sans text-xs text-[#A1A1AA] translate-z-10",children:[T.jsx("span",{className:"font-mono text-[10px] text-[#22C55E] uppercase block font-bold",children:"// Key Contributions"}),i.highlights.map((l,c)=>T.jsxs("div",{className:"flex gap-2",children:[T.jsx("span",{className:"text-[#22C55E] font-mono",children:"›"}),T.jsx("span",{children:l})]},c))]}),T.jsx("div",{className:"flex flex-wrap gap-1.5 pt-3 font-mono text-[11px] translate-z-20",children:i.tech.map(l=>T.jsx(us,{variant:s?"green":"muted",size:"xs",children:l},l))})]})})]},i.id)})})]})},mC=()=>T.jsxs("section",{id:"about",className:"py-16",children:[T.jsx(Qs,{number:"05",eyebrow:"PERSPECTIVE",title:"About & Engineering Philosophy",description:"A quick overview of my background, developer focus, and what drives my software craftsmanship."}),T.jsxs("div",{className:"grid gap-8 lg:grid-cols-12",children:[T.jsxs("div",{className:"lg:col-span-8 space-y-5 font-sans text-sm leading-relaxed text-[#A1A1AA]",children:[T.jsx("p",{className:"text-[#F5F5F5] font-semibold text-base",children:"I am a Full Stack Developer based in Bangalore, India with a background in Computer Applications (BCA) and specialized fellowship training in modern web engineering."}),T.jsxs("p",{children:["I enjoy building software that solves practical problems. Whether it's a multi-stage Kanban application tracker like ",T.jsx("strong",{className:"text-[#F5F5F5]",children:"HireLog"})," or a role-based assessment portal like ",T.jsx("strong",{className:"text-[#F5F5F5]",children:"CONNECT"}),", my goal is to craft systems that are reliable, maintainable, and straightforward for users."]}),T.jsxs("p",{children:["My engineering philosophy centers on ",T.jsx("strong",{className:"text-[#F5F5F5]",children:"precision and defensive design"}),":"]}),T.jsxs("ul",{className:"space-y-2 border-l border-[#242424] pl-4 font-mono text-xs text-[#F5F5F5]",children:[T.jsxs("li",{className:"flex gap-2",children:[T.jsx("span",{className:"text-[#22C55E]",children:"✓"}),T.jsx("span",{children:"Explicit REST API request & response payload schemas"})]}),T.jsxs("li",{className:"flex gap-2",children:[T.jsx("span",{className:"text-[#22C55E]",children:"✓"}),T.jsx("span",{children:"Robust session & JWT authorization middleware"})]}),T.jsxs("li",{className:"flex gap-2",children:[T.jsx("span",{className:"text-[#22C55E]",children:"✓"}),T.jsx("span",{children:"Indexed database queries for instant filtering"})]}),T.jsxs("li",{className:"flex gap-2",children:[T.jsx("span",{className:"text-[#22C55E]",children:"✓"}),T.jsx("span",{children:"Modular React component trees with Redux Toolkit"})]})]}),T.jsx("p",{children:"Currently, I am expanding my backend architecture depth and TypeScript design patterns while actively seeking full-time Full Stack / MERN Developer roles in Bangalore or remote software teams."})]}),T.jsxs("div",{className:"lg:col-span-4 editorial-card rounded-xl p-6 font-mono text-xs space-y-4",children:[T.jsx("h4",{className:"text-[#22C55E] font-bold uppercase tracking-wider border-b border-[#242424] pb-2",children:"// QUICK FACTS"}),T.jsxs("div",{children:[T.jsx("span",{className:"text-[#71717A] block text-[10px] uppercase",children:"Degree"}),T.jsx("span",{className:"text-[#F5F5F5]",children:"BCA (CGPA: 8.3 / 10.0)"})]}),T.jsxs("div",{children:[T.jsx("span",{className:"text-[#71717A] block text-[10px] uppercase",children:"College"}),T.jsx("span",{className:"text-[#F5F5F5]",children:"Vijayanagara College"})]}),T.jsxs("div",{children:[T.jsx("span",{className:"text-[#71717A] block text-[10px] uppercase",children:"Fellowship"}),T.jsx("span",{className:"text-[#F5F5F5]",children:"AlmaBetter Full Stack"})]}),T.jsxs("div",{children:[T.jsx("span",{className:"text-[#71717A] block text-[10px] uppercase",children:"Open To"}),T.jsx("span",{className:"text-[#22C55E]",children:"Full-Time / MERN / React / Node"})]})]})]})]}),gC=()=>{const r=eo(),e=()=>{r(wu(Zr))};return T.jsxs("section",{id:"resume",className:"py-16",children:[T.jsx(Qs,{number:"06",eyebrow:"CREDENTIALS",title:"Resume & Qualifications",description:"Inspect complete professional background online or launch the built-in PDF viewer to verify or download."}),T.jsxs("div",{className:"editorial-card rounded-xl p-6 lg:p-8 space-y-8",children:[T.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#242424] pb-6",children:[T.jsxs("div",{children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsx("h3",{className:"font-sans text-2xl font-bold text-[#F5F5F5]",children:"NACHIKETA NR"}),T.jsx(us,{variant:"green",size:"xs",children:"ATS Verified"})]}),T.jsx("p",{className:"font-mono text-xs text-[#A1A1AA] mt-1",children:"Full Stack Developer • MERN Stack Specialist • Bangalore, KA"})]}),T.jsxs("div",{className:"flex flex-wrap items-center gap-3 font-mono text-xs",children:[T.jsx("button",{type:"button",onClick:e,className:"rounded bg-[#F5F5F5] px-4 py-2 text-[#050505] font-semibold hover:bg-white transition-colors",children:"Launch PDF Viewer"}),T.jsx("a",{href:Zr,download:!0,className:"rounded border border-[#242424] bg-[#050505] px-4 py-2 text-[#F5F5F5] hover:border-[#383838] transition-colors",children:"Download PDF ⬇"})]})]}),T.jsxs("div",{className:"grid gap-6 md:grid-cols-2 font-sans text-xs",children:[T.jsxs("div",{className:"editorial-card-subtle rounded-lg p-5 space-y-2",children:[T.jsx("span",{className:"font-mono text-[10px] text-[#22C55E] uppercase font-bold block",children:"// EDUCATION"}),T.jsx("h4",{className:"font-sans text-sm font-bold text-[#F5F5F5]",children:"Bachelor of Computer Applications (BCA)"}),T.jsx("p",{className:"font-mono text-xs text-[#A1A1AA]",children:"Vijayanagara College, Karnataka"}),T.jsxs("div",{className:"flex justify-between font-mono text-[11px] text-[#71717A] pt-2 border-t border-[#242424]",children:[T.jsx("span",{children:"Oct 2021 – Dec 2024"}),T.jsx("span",{className:"text-[#22C55E]",children:"CGPA: 8.3 / 10.0"})]})]}),T.jsxs("div",{className:"editorial-card-subtle rounded-lg p-5 space-y-2",children:[T.jsx("span",{className:"font-mono text-[10px] text-[#22C55E] uppercase font-bold block",children:"// FELLOWSHIP & CERTIFICATION"}),T.jsx("h4",{className:"font-sans text-sm font-bold text-[#F5F5F5]",children:"Professional Software Fellowship"}),T.jsx("p",{className:"font-mono text-xs text-[#A1A1AA]",children:"AlmaBetter (Software Engineering with AI & DevOps)"}),T.jsxs("div",{className:"flex justify-between font-mono text-[11px] text-[#71717A] pt-2 border-t border-[#242424]",children:[T.jsx("span",{children:"Completed: 2026"}),T.jsx("span",{className:"text-[#F5F5F5]",children:"Full Stack MERN"})]})]})]})]})]})},_C=[{label:"Direct Email",value:"nrnachi34@gmail.com",href:"mailto:nrnachi34@gmail.com"},{label:"Phone / WhatsApp",value:"+91-9380552034",href:"tel:+919380552034"},{label:"LinkedIn",value:"linkedin.com/in/nachiketa12",href:"https://www.linkedin.com/in/nachiketa12/"},{label:"GitHub",value:"github.com/Nachi12",href:"https://github.com/Nachi12"}],vC=()=>{const[r,e]=kt.useState(!1),[i,s]=kt.useState(!1),[l,c]=kt.useState({name:"",email:"",message:""}),f=()=>{navigator.clipboard.writeText("nrnachi34@gmail.com"),e(!0),setTimeout(()=>e(!1),2500)},p=m=>{m.preventDefault(),s(!0),setTimeout(()=>s(!1),4e3),c({name:"",email:"",message:""})};return T.jsxs("section",{id:"contact",className:"py-16",children:[T.jsx(Qs,{number:"07",eyebrow:"GET IN TOUCH",title:"Let's build something useful.",description:"Available for immediate joining on Full Stack (React/Node/TypeScript) roles in Bangalore, remote, or hybrid arrangements."}),T.jsxs("div",{className:"grid gap-8 lg:grid-cols-12",children:[T.jsx("div",{className:"lg:col-span-5 space-y-4",children:T.jsxs("div",{className:"editorial-card rounded-xl p-6 space-y-4",children:[T.jsx("h4",{className:"font-mono text-xs font-bold text-[#22C55E] uppercase tracking-wider",children:"// DIRECT CONTACT"}),T.jsx("div",{className:"space-y-3 font-mono text-xs",children:_C.map(m=>T.jsxs("div",{className:"border-b border-[#111111] pb-2 last:border-b-0",children:[T.jsx("span",{className:"text-[#71717A] text-[10px] uppercase block",children:m.label}),T.jsxs("a",{href:m.href,target:m.href.startsWith("http")?"_blank":void 0,rel:m.href.startsWith("http")?"noreferrer":void 0,className:"text-[#F5F5F5] hover:text-[#22C55E] transition-colors font-semibold mt-0.5 block",children:[m.value," ↗"]})]},m.label))}),T.jsx("div",{className:"pt-2",children:T.jsx("button",{type:"button",onClick:f,className:"w-full rounded border border-[#242424] bg-[#111111] py-2 font-mono text-xs text-[#F5F5F5] hover:border-[#383838] transition-colors",children:r?"Email Copied to Clipboard! ✓":"Copy Email Address"})})]})}),T.jsxs("div",{className:"lg:col-span-7 editorial-card rounded-xl p-6 lg:p-8",children:[T.jsx("h4",{className:"font-mono text-xs font-bold text-[#F5F5F5] uppercase tracking-wider border-b border-[#242424] pb-3 mb-5",children:"// SEND DIRECT MESSAGE"}),i?T.jsx("div",{className:"p-4 rounded border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E] font-mono text-xs text-center",children:"✓ Message recorded. I will get back to you within 24 hours."}):T.jsxs("form",{onSubmit:p,className:"space-y-4 font-sans text-xs",children:[T.jsxs("div",{children:[T.jsx("label",{htmlFor:"name",className:"block font-mono text-[11px] text-[#A1A1AA] mb-1.5",children:"YOUR NAME / ROLE"}),T.jsx("input",{type:"text",id:"name",required:!0,value:l.name,onChange:m=>c({...l,name:m.target.value}),placeholder:"e.g. Sarah Jenkins (Senior Technical Recruiter)",className:"w-full rounded border border-[#242424] bg-[#050505] p-3 text-[#F5F5F5] focus:border-[#22C55E] focus:outline-none font-sans"})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"email",className:"block font-mono text-[11px] text-[#A1A1AA] mb-1.5",children:"YOUR EMAIL"}),T.jsx("input",{type:"email",id:"email",required:!0,value:l.email,onChange:m=>c({...l,email:m.target.value}),placeholder:"sarah@company.com",className:"w-full rounded border border-[#242424] bg-[#050505] p-3 text-[#F5F5F5] focus:border-[#22C55E] focus:outline-none font-sans"})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"message",className:"block font-mono text-[11px] text-[#A1A1AA] mb-1.5",children:"MESSAGE / OPPORTUNITY DETAILS"}),T.jsx("textarea",{id:"message",required:!0,rows:4,value:l.message,onChange:m=>c({...l,message:m.target.value}),placeholder:"We are looking for a Full Stack Engineer for our React & Node.js platform...",className:"w-full rounded border border-[#242424] bg-[#050505] p-3 text-[#F5F5F5] focus:border-[#22C55E] focus:outline-none font-sans"})]}),T.jsx("button",{type:"submit",className:"w-full rounded bg-[#F5F5F5] py-3 font-mono text-xs font-semibold text-[#050505] hover:bg-white transition-colors",children:"Send Message"})]})]})]})]})},xC=()=>{const r=eo(),e=Dh(Ub),i=Dh(Lb),s=e.isVisible||i.isVisible,l=i.isVisible,c=l?i.url:e.url,f=l?"Interactive Resume PDF":"Live Web Application Preview";if(!s)return null;const p=()=>{r(l?Nb():wb())};return T.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fade-in",children:T.jsxs("div",{className:"relative flex h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0f172a] shadow-2xl",children:[T.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 bg-[#0b0f17] px-5 py-3.5",children:[T.jsxs("div",{className:"flex items-center gap-3",children:[T.jsxs("div",{className:"flex items-center gap-1.5",children:[T.jsx("button",{type:"button",onClick:p,className:"h-3.5 w-3.5 rounded-full bg-[#ff5f57] hover:opacity-80",title:"Close"}),T.jsx("span",{className:"h-3.5 w-3.5 rounded-full bg-[#ffbd2e]"}),T.jsx("span",{className:"h-3.5 w-3.5 rounded-full bg-[#28c840]"})]}),T.jsx("span",{className:"font-mono text-xs font-semibold text-slate-300 ml-2",children:f})]}),T.jsxs("div",{className:"flex items-center gap-3",children:[c.startsWith("http")&&T.jsxs("a",{href:c,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 font-mono text-xs text-indigo-400 hover:text-indigo-300 transition-colors",children:[T.jsx("span",{children:"Open in new tab"}),T.jsx("span",{children:"↗"})]}),T.jsx("button",{type:"button",onClick:p,className:"rounded-lg border border-slate-800 bg-slate-900 px-3 py-1 font-mono text-xs text-slate-400 hover:bg-slate-800 hover:text-white transition-colors",children:"Esc / Close"})]})]}),T.jsx("div",{className:"flex-1 bg-white",children:T.jsx("iframe",{src:c,title:f,className:"h-full w-full border-none"})})]})})};function SC(){return T.jsxs("div",{className:"min-h-screen bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#22C55E]/20 selection:text-[#F5F5F5]",children:[T.jsx(Pb,{}),T.jsxs("main",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[T.jsx(rC,{}),T.jsx(oC,{}),T.jsx(cC,{}),T.jsx(dC,{}),T.jsx(pC,{}),T.jsx(mC,{}),T.jsx(gC,{}),T.jsx(vC,{})]}),T.jsx(Fb,{}),T.jsx(Ib,{}),T.jsx(xC,{})]})}SM.createRoot(document.getElementById("root")).render(T.jsx(dM.StrictMode,{children:T.jsx(IM,{store:Ob,children:T.jsx(SC,{})})}));
