(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var lh={exports:{}},ta={},uh={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function l0(){if(Lp)return Ee;Lp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),N=Symbol.iterator;function j(D){return D===null||typeof D!="object"?null:(D=N&&D[N]||D["@@iterator"],typeof D=="function"?D:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,Z={};function Q(D,z,ae){this.props=D,this.context=z,this.refs=Z,this.updater=ae||G}Q.prototype.isReactComponent={},Q.prototype.setState=function(D,z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,z,"setState")},Q.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _e(){}_e.prototype=Q.prototype;function ye(D,z,ae){this.props=D,this.context=z,this.refs=Z,this.updater=ae||G}var me=ye.prototype=new _e;me.constructor=ye,Y(me,Q.prototype),me.isPureReactComponent=!0;var he=Array.isArray,$e=Object.prototype.hasOwnProperty,Se={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function T(D,z,ae){var ve,we={},ke=null,De=null;if(z!=null)for(ve in z.ref!==void 0&&(De=z.ref),z.key!==void 0&&(ke=""+z.key),z)$e.call(z,ve)&&!P.hasOwnProperty(ve)&&(we[ve]=z[ve]);var Oe=arguments.length-2;if(Oe===1)we.children=ae;else if(1<Oe){for(var be=Array(Oe),ut=0;ut<Oe;ut++)be[ut]=arguments[ut+2];we.children=be}if(D&&D.defaultProps)for(ve in Oe=D.defaultProps,Oe)we[ve]===void 0&&(we[ve]=Oe[ve]);return{$$typeof:i,type:D,key:ke,ref:De,props:we,_owner:Se.current}}function S(D,z){return{$$typeof:i,type:D.type,key:z,ref:D.ref,props:D.props,_owner:D._owner}}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function x(D){var z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ae){return z[ae]})}var O=/\/+/g;function I(D,z){return typeof D=="object"&&D!==null&&D.key!=null?x(""+D.key):z.toString(36)}function Je(D,z,ae,ve,we){var ke=typeof D;(ke==="undefined"||ke==="boolean")&&(D=null);var De=!1;if(D===null)De=!0;else switch(ke){case"string":case"number":De=!0;break;case"object":switch(D.$$typeof){case i:case e:De=!0}}if(De)return De=D,we=we(De),D=ve===""?"."+I(De,0):ve,he(we)?(ae="",D!=null&&(ae=D.replace(O,"$&/")+"/"),Je(we,z,ae,"",function(ut){return ut})):we!=null&&(C(we)&&(we=S(we,ae+(!we.key||De&&De.key===we.key?"":(""+we.key).replace(O,"$&/")+"/")+D)),z.push(we)),1;if(De=0,ve=ve===""?".":ve+":",he(D))for(var Oe=0;Oe<D.length;Oe++){ke=D[Oe];var be=ve+I(ke,Oe);De+=Je(ke,z,ae,be,we)}else if(be=j(D),typeof be=="function")for(D=be.call(D),Oe=0;!(ke=D.next()).done;)ke=ke.value,be=ve+I(ke,Oe++),De+=Je(ke,z,ae,be,we);else if(ke==="object")throw z=String(D),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return De}function At(D,z,ae){if(D==null)return D;var ve=[],we=0;return Je(D,ve,"","",function(ke){return z.call(ae,ke,we++)}),ve}function kt(D){if(D._status===-1){var z=D._result;z=z(),z.then(function(ae){(D._status===0||D._status===-1)&&(D._status=1,D._result=ae)},function(ae){(D._status===0||D._status===-1)&&(D._status=2,D._result=ae)}),D._status===-1&&(D._status=0,D._result=z)}if(D._status===1)return D._result.default;throw D._result}var Le={current:null},J={transition:null},le={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:J,ReactCurrentOwner:Se};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ee.Children={map:At,forEach:function(D,z,ae){At(D,function(){z.apply(this,arguments)},ae)},count:function(D){var z=0;return At(D,function(){z++}),z},toArray:function(D){return At(D,function(z){return z})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ee.Component=Q,Ee.Fragment=n,Ee.Profiler=a,Ee.PureComponent=ye,Ee.StrictMode=s,Ee.Suspense=y,Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Ee.act=te,Ee.cloneElement=function(D,z,ae){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var ve=Y({},D.props),we=D.key,ke=D.ref,De=D._owner;if(z!=null){if(z.ref!==void 0&&(ke=z.ref,De=Se.current),z.key!==void 0&&(we=""+z.key),D.type&&D.type.defaultProps)var Oe=D.type.defaultProps;for(be in z)$e.call(z,be)&&!P.hasOwnProperty(be)&&(ve[be]=z[be]===void 0&&Oe!==void 0?Oe[be]:z[be])}var be=arguments.length-2;if(be===1)ve.children=ae;else if(1<be){Oe=Array(be);for(var ut=0;ut<be;ut++)Oe[ut]=arguments[ut+2];ve.children=Oe}return{$$typeof:i,type:D.type,key:we,ref:ke,props:ve,_owner:De}},Ee.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:c,_context:D},D.Consumer=D},Ee.createElement=T,Ee.createFactory=function(D){var z=T.bind(null,D);return z.type=D,z},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(D){return{$$typeof:g,render:D}},Ee.isValidElement=C,Ee.lazy=function(D){return{$$typeof:k,_payload:{_status:-1,_result:D},_init:kt}},Ee.memo=function(D,z){return{$$typeof:w,type:D,compare:z===void 0?null:z}},Ee.startTransition=function(D){var z=J.transition;J.transition={};try{D()}finally{J.transition=z}},Ee.unstable_act=te,Ee.useCallback=function(D,z){return Le.current.useCallback(D,z)},Ee.useContext=function(D){return Le.current.useContext(D)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(D){return Le.current.useDeferredValue(D)},Ee.useEffect=function(D,z){return Le.current.useEffect(D,z)},Ee.useId=function(){return Le.current.useId()},Ee.useImperativeHandle=function(D,z,ae){return Le.current.useImperativeHandle(D,z,ae)},Ee.useInsertionEffect=function(D,z){return Le.current.useInsertionEffect(D,z)},Ee.useLayoutEffect=function(D,z){return Le.current.useLayoutEffect(D,z)},Ee.useMemo=function(D,z){return Le.current.useMemo(D,z)},Ee.useReducer=function(D,z,ae){return Le.current.useReducer(D,z,ae)},Ee.useRef=function(D){return Le.current.useRef(D)},Ee.useState=function(D){return Le.current.useState(D)},Ee.useSyncExternalStore=function(D,z,ae){return Le.current.useSyncExternalStore(D,z,ae)},Ee.useTransition=function(){return Le.current.useTransition()},Ee.version="18.3.1",Ee}var Mp;function qh(){return Mp||(Mp=1,uh.exports=l0()),uh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function u0(){if(bp)return ta;bp=1;var i=qh(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(g,y,w){var k,N={},j=null,G=null;w!==void 0&&(j=""+w),y.key!==void 0&&(j=""+y.key),y.ref!==void 0&&(G=y.ref);for(k in y)s.call(y,k)&&!c.hasOwnProperty(k)&&(N[k]=y[k]);if(g&&g.defaultProps)for(k in y=g.defaultProps,y)N[k]===void 0&&(N[k]=y[k]);return{$$typeof:e,type:g,key:j,ref:G,props:N,_owner:a.current}}return ta.Fragment=n,ta.jsx=d,ta.jsxs=d,ta}var Up;function c0(){return Up||(Up=1,lh.exports=u0()),lh.exports}var F=c0(),nn=qh(),zl={},ch={exports:{}},Gt={},hh={exports:{}},dh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function h0(){return Fp||(Fp=1,function(i){function e(J,le){var te=J.length;J.push(le);e:for(;0<te;){var D=te-1>>>1,z=J[D];if(0<a(z,le))J[D]=le,J[te]=z,te=D;else break e}}function n(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var le=J[0],te=J.pop();if(te!==le){J[0]=te;e:for(var D=0,z=J.length,ae=z>>>1;D<ae;){var ve=2*(D+1)-1,we=J[ve],ke=ve+1,De=J[ke];if(0>a(we,te))ke<z&&0>a(De,we)?(J[D]=De,J[ke]=te,D=ke):(J[D]=we,J[ve]=te,D=ve);else if(ke<z&&0>a(De,te))J[D]=De,J[ke]=te,D=ke;else break e}}return le}function a(J,le){var te=J.sortIndex-le.sortIndex;return te!==0?te:J.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var d=Date,g=d.now();i.unstable_now=function(){return d.now()-g}}var y=[],w=[],k=1,N=null,j=3,G=!1,Y=!1,Z=!1,Q=typeof setTimeout=="function"?setTimeout:null,_e=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(J){for(var le=n(w);le!==null;){if(le.callback===null)s(w);else if(le.startTime<=J)s(w),le.sortIndex=le.expirationTime,e(y,le);else break;le=n(w)}}function he(J){if(Z=!1,me(J),!Y)if(n(y)!==null)Y=!0,kt($e);else{var le=n(w);le!==null&&Le(he,le.startTime-J)}}function $e(J,le){Y=!1,Z&&(Z=!1,_e(T),T=-1),G=!0;var te=j;try{for(me(le),N=n(y);N!==null&&(!(N.expirationTime>le)||J&&!x());){var D=N.callback;if(typeof D=="function"){N.callback=null,j=N.priorityLevel;var z=D(N.expirationTime<=le);le=i.unstable_now(),typeof z=="function"?N.callback=z:N===n(y)&&s(y),me(le)}else s(y);N=n(y)}if(N!==null)var ae=!0;else{var ve=n(w);ve!==null&&Le(he,ve.startTime-le),ae=!1}return ae}finally{N=null,j=te,G=!1}}var Se=!1,P=null,T=-1,S=5,C=-1;function x(){return!(i.unstable_now()-C<S)}function O(){if(P!==null){var J=i.unstable_now();C=J;var le=!0;try{le=P(!0,J)}finally{le?I():(Se=!1,P=null)}}else Se=!1}var I;if(typeof ye=="function")I=function(){ye(O)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,At=Je.port2;Je.port1.onmessage=O,I=function(){At.postMessage(null)}}else I=function(){Q(O,0)};function kt(J){P=J,Se||(Se=!0,I())}function Le(J,le){T=Q(function(){J(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){Y||G||(Y=!0,kt($e))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return j},i.unstable_getFirstCallbackNode=function(){return n(y)},i.unstable_next=function(J){switch(j){case 1:case 2:case 3:var le=3;break;default:le=j}var te=j;j=le;try{return J()}finally{j=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,le){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var te=j;j=J;try{return le()}finally{j=te}},i.unstable_scheduleCallback=function(J,le,te){var D=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?D+te:D):te=D,J){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=te+z,J={id:k++,callback:le,priorityLevel:J,startTime:te,expirationTime:z,sortIndex:-1},te>D?(J.sortIndex=te,e(w,J),n(y)===null&&J===n(w)&&(Z?(_e(T),T=-1):Z=!0,Le(he,te-D))):(J.sortIndex=z,e(y,J),Y||G||(Y=!0,kt($e))),J},i.unstable_shouldYield=x,i.unstable_wrapCallback=function(J){var le=j;return function(){var te=j;j=le;try{return J.apply(this,arguments)}finally{j=te}}}}(dh)),dh}var jp;function d0(){return jp||(jp=1,hh.exports=h0()),hh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function f0(){if(zp)return Gt;zp=1;var i=qh(),e=d0();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(a[t]=r,t=0;t<r.length;t++)s.add(r[t])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},N={};function j(t){return y.call(N,t)?!0:y.call(k,t)?!1:w.test(t)?N[t]=!0:(k[t]=!0,!1)}function G(t,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Y(t,r,o,u){if(r===null||typeof r>"u"||G(t,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Z(t,r,o,u,h,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Q[t]=new Z(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];Q[r]=new Z(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){Q[t]=new Z(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Q[t]=new Z(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Q[t]=new Z(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){Q[t]=new Z(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){Q[t]=new Z(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){Q[t]=new Z(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){Q[t]=new Z(t,5,!1,t.toLowerCase(),null,!1,!1)});var _e=/[\-:]([a-z])/g;function ye(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(_e,ye);Q[r]=new Z(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(_e,ye);Q[r]=new Z(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(_e,ye);Q[r]=new Z(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){Q[t]=new Z(t,1,!1,t.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new Z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){Q[t]=new Z(t,1,!1,t.toLowerCase(),null,!0,!0)});function me(t,r,o,u){var h=Q.hasOwnProperty(r)?Q[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Y(r,o,h,u)&&(o=null),u||h===null?j(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):h.mustUseProperty?t[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?t.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?t.setAttributeNS(u,r,o):t.setAttribute(r,o))))}var he=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$e=Symbol.for("react.element"),Se=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),x=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),At=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),J=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,D;function z(t){if(D===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+t}var ae=!1;function ve(t,r){if(!t||ae)return"";ae=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(b){var u=b}Reflect.construct(t,[],r)}else{try{r.call()}catch(b){u=b}t.call(r.prototype)}else{try{throw Error()}catch(b){u=b}t()}}catch(b){if(b&&u&&typeof b.stack=="string"){for(var h=b.stack.split(`
`),p=u.stack.split(`
`),v=h.length-1,E=p.length-1;1<=v&&0<=E&&h[v]!==p[E];)E--;for(;1<=v&&0<=E;v--,E--)if(h[v]!==p[E]){if(v!==1||E!==1)do if(v--,E--,0>E||h[v]!==p[E]){var A=`
`+h[v].replace(" at new "," at ");return t.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",t.displayName)),A}while(1<=v&&0<=E);break}}}finally{ae=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?z(t):""}function we(t){switch(t.tag){case 5:return z(t.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return t=ve(t.type,!1),t;case 11:return t=ve(t.type.render,!1),t;case 1:return t=ve(t.type,!0),t;default:return""}}function ke(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case P:return"Fragment";case Se:return"Portal";case S:return"Profiler";case T:return"StrictMode";case I:return"Suspense";case Je:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case x:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case O:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case At:return r=t.displayName||null,r!==null?r:ke(t.type)||"Memo";case kt:r=t._payload,t=t._init;try{return ke(t(r))}catch{}}return null}function De(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Oe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function be(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ut(t){var r=be(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),u=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,p=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(v){u=""+v,p.call(this,v)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Jn(t){t._valueTracker||(t._valueTracker=ut(t))}function Xi(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return t&&(u=be(t)?t.checked?"true":"false":t.value),t=u,t!==o?(r.setValue(t),!0):!1}function Ir(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function li(t,r){var o=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Yi(t,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=Oe(r.value!=null?r.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function oo(t,r){r=r.checked,r!=null&&me(t,"checked",r,!1)}function ao(t,r){oo(t,r);var o=Oe(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Ji(t,r.type,o):r.hasOwnProperty("defaultValue")&&Ji(t,r.type,Oe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function ka(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ji(t,r,o){(r!=="number"||Ir(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Zn=Array.isArray;function er(t,r,o,u){if(t=t.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<t.length;o++)h=r.hasOwnProperty("$"+t[o].value),t[o].selected!==h&&(t[o].selected=h),h&&u&&(t[o].defaultSelected=!0)}else{for(o=""+Oe(o),r=null,h=0;h<t.length;h++){if(t[h].value===o){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function lo(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zi(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(Zn(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:Oe(o)}}function es(t,r){var o=Oe(r.value),u=Oe(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function uo(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function it(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function st(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?it(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tr,co=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return t(r,o,u,h)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(tr=tr||document.createElement("div"),tr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=tr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Sr(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ci=["Webkit","ms","Moz","O"];Object.keys(ui).forEach(function(t){ci.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),ui[r]=ui[t]})});function ho(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||ui.hasOwnProperty(t)&&ui[t]?(""+r).trim():r+"px"}function fo(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=ho(o,r[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,h):t[o]=h}}var po=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mo(t,r){if(r){if(po[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function go(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hi=null;function ts(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ns=null,rn=null,Vn=null;function rs(t){if(t=jo(t)){if(typeof ns!="function")throw Error(n(280));var r=t.stateNode;r&&(r=nl(r),ns(t.stateNode,t.type,r))}}function Ln(t){rn?Vn?Vn.push(t):Vn=[t]:rn=t}function yo(){if(rn){var t=rn,r=Vn;if(Vn=rn=null,rs(t),r)for(t=0;t<r.length;t++)rs(r[t])}}function di(t,r){return t(r)}function vo(){}var nr=!1;function _o(t,r,o){if(nr)return t(r,o);nr=!0;try{return di(t,r,o)}finally{nr=!1,(rn!==null||Vn!==null)&&(vo(),yo())}}function Ze(t,r){var o=t.stateNode;if(o===null)return null;var u=nl(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var is=!1;if(g)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){is=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{is=!1}function fi(t,r,o,u,h,p,v,E,A){var b=Array.prototype.slice.call(arguments,3);try{r.apply(o,b)}catch(H){this.onError(H)}}var pi=!1,ss=null,mn=!1,wo=null,Mu={onError:function(t){pi=!0,ss=t}};function os(t,r,o,u,h,p,v,E,A){pi=!1,ss=null,fi.apply(Mu,arguments)}function Ca(t,r,o,u,h,p,v,E,A){if(os.apply(this,arguments),pi){if(pi){var b=ss;pi=!1,ss=null}else throw Error(n(198));mn||(mn=!0,wo=b)}}function gn(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function mi(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function yn(t){if(gn(t)!==t)throw Error(n(188))}function Ra(t){var r=t.alternate;if(!r){if(r=gn(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,u=r;;){var h=o.return;if(h===null)break;var p=h.alternate;if(p===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===p.child){for(p=h.child;p;){if(p===o)return yn(h),t;if(p===u)return yn(h),r;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=h,u=p;else{for(var v=!1,E=h.child;E;){if(E===o){v=!0,o=h,u=p;break}if(E===u){v=!0,u=h,o=p;break}E=E.sibling}if(!v){for(E=p.child;E;){if(E===o){v=!0,o=p,u=h;break}if(E===u){v=!0,u=p,o=h;break}E=E.sibling}if(!v)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Eo(t){return t=Ra(t),t!==null?as(t):null}function as(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=as(t);if(r!==null)return r;t=t.sibling}return null}var ls=e.unstable_scheduleCallback,To=e.unstable_cancelCallback,Pa=e.unstable_shouldYield,bu=e.unstable_requestPaint,Ue=e.unstable_now,xa=e.unstable_getCurrentPriorityLevel,gi=e.unstable_ImmediatePriority,Ar=e.unstable_UserBlockingPriority,sn=e.unstable_NormalPriority,Io=e.unstable_LowPriority,Na=e.unstable_IdlePriority,yi=null,Qt=null;function Da(t){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(yi,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:Va,So=Math.log,Oa=Math.LN2;function Va(t){return t>>>=0,t===0?32:31-(So(t)/Oa|0)|0}var us=64,cs=4194304;function kr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vi(t,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,p=t.pingedLanes,v=o&268435455;if(v!==0){var E=v&~h;E!==0?u=kr(E):(p&=v,p!==0&&(u=kr(p)))}else v=o&~h,v!==0?u=kr(v):p!==0&&(u=kr(p));if(u===0)return 0;if(r!==0&&r!==u&&!(r&h)&&(h=u&-u,p=r&-r,h>=p||h===16&&(p&4194240)!==0))return r;if(u&4&&(u|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=u;0<r;)o=31-Lt(r),h=1<<o,u|=t[o],r&=~h;return u}function Uu(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rr(t,r){for(var o=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,p=t.pendingLanes;0<p;){var v=31-Lt(p),E=1<<v,A=h[v];A===-1?(!(E&o)||E&u)&&(h[v]=Uu(E,r)):A<=r&&(t.expiredLanes|=E),p&=~E}}function Xt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _i(){var t=us;return us<<=1,!(us&4194240)&&(us=64),t}function Cr(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Rr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Lt(r),t[r]=o}function Me(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var h=31-Lt(o),p=1<<h;r[h]=0,u[h]=-1,t[h]=-1,o&=~p}}function Pr(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var u=31-Lt(o),h=1<<u;h&r|t[u]&r&&(t[u]|=r),o&=~h}}var Ae=0;function xr(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var La,hs,Ma,ba,Ua,Ao=!1,Mn=[],yt=null,vn=null,_n=null,Nr=new Map,on=new Map,bn=[],Fu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fa(t,r){switch(t){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Nr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":on.delete(r.pointerId)}}function Ft(t,r,o,u,h,p){return t===null||t.nativeEvent!==p?(t={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[h]},r!==null&&(r=jo(r),r!==null&&hs(r)),t):(t.eventSystemFlags|=u,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function ju(t,r,o,u,h){switch(r){case"focusin":return yt=Ft(yt,t,r,o,u,h),!0;case"dragenter":return vn=Ft(vn,t,r,o,u,h),!0;case"mouseover":return _n=Ft(_n,t,r,o,u,h),!0;case"pointerover":var p=h.pointerId;return Nr.set(p,Ft(Nr.get(p)||null,t,r,o,u,h)),!0;case"gotpointercapture":return p=h.pointerId,on.set(p,Ft(on.get(p)||null,t,r,o,u,h)),!0}return!1}function ja(t){var r=Si(t.target);if(r!==null){var o=gn(r);if(o!==null){if(r=o.tag,r===13){if(r=mi(o),r!==null){t.blockedOn=r,Ua(t.priority,function(){Ma(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ir(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=ds(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);hi=u,o.target.dispatchEvent(u),hi=null}else return r=jo(o),r!==null&&hs(r),t.blockedOn=o,!1;r.shift()}return!0}function wi(t,r,o){ir(t)&&o.delete(r)}function za(){Ao=!1,yt!==null&&ir(yt)&&(yt=null),vn!==null&&ir(vn)&&(vn=null),_n!==null&&ir(_n)&&(_n=null),Nr.forEach(wi),on.forEach(wi)}function wn(t,r){t.blockedOn===r&&(t.blockedOn=null,Ao||(Ao=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,za)))}function En(t){function r(h){return wn(h,t)}if(0<Mn.length){wn(Mn[0],t);for(var o=1;o<Mn.length;o++){var u=Mn[o];u.blockedOn===t&&(u.blockedOn=null)}}for(yt!==null&&wn(yt,t),vn!==null&&wn(vn,t),_n!==null&&wn(_n,t),Nr.forEach(r),on.forEach(r),o=0;o<bn.length;o++)u=bn[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<bn.length&&(o=bn[0],o.blockedOn===null);)ja(o),o.blockedOn===null&&bn.shift()}var sr=he.ReactCurrentBatchConfig,Dr=!0;function He(t,r,o,u){var h=Ae,p=sr.transition;sr.transition=null;try{Ae=1,ko(t,r,o,u)}finally{Ae=h,sr.transition=p}}function zu(t,r,o,u){var h=Ae,p=sr.transition;sr.transition=null;try{Ae=4,ko(t,r,o,u)}finally{Ae=h,sr.transition=p}}function ko(t,r,o,u){if(Dr){var h=ds(t,r,o,u);if(h===null)Ju(t,r,u,Ei,o),Fa(t,u);else if(ju(h,t,r,o,u))u.stopPropagation();else if(Fa(t,u),r&4&&-1<Fu.indexOf(t)){for(;h!==null;){var p=jo(h);if(p!==null&&La(p),p=ds(t,r,o,u),p===null&&Ju(t,r,u,Ei,o),p===h)break;h=p}h!==null&&u.stopPropagation()}else Ju(t,r,u,null,o)}}var Ei=null;function ds(t,r,o,u){if(Ei=null,t=ts(u),t=Si(t),t!==null)if(r=gn(t),r===null)t=null;else if(o=r.tag,o===13){if(t=mi(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Ei=t,null}function Co(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xa()){case gi:return 1;case Ar:return 4;case sn:case Io:return 16;case Na:return 536870912;default:return 16}default:return 16}}var Yt=null,fs=null,jt=null;function Ro(){if(jt)return jt;var t,r=fs,o=r.length,u,h="value"in Yt?Yt.value:Yt.textContent,p=h.length;for(t=0;t<o&&r[t]===h[t];t++);var v=o-t;for(u=1;u<=v&&r[o-u]===h[p-u];u++);return jt=h.slice(t,1<u?1-u:void 0)}function ps(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Un(){return!0}function Po(){return!1}function vt(t){function r(o,u,h,p,v){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(o=t[E],this[E]=o?o(p):p[E]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Un:Po,this.isPropagationStopped=Po,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),r}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ms=vt(Tn),Fn=te({},Tn,{view:0,detail:0}),Bu=vt(Fn),gs,or,Or,Ti=te({},Fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Or&&(Or&&t.type==="mousemove"?(gs=t.screenX-Or.screenX,or=t.screenY-Or.screenY):or=gs=0,Or=t),gs)},movementY:function(t){return"movementY"in t?t.movementY:or}}),ys=vt(Ti),xo=te({},Ti,{dataTransfer:0}),Ba=vt(xo),vs=te({},Fn,{relatedTarget:0}),_s=vt(vs),$a=te({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),ar=vt($a),Ha=te({},Tn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wa=vt(Ha),Ga=te({},Tn,{data:0}),No=vt(Ga),ws={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qa={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ka(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=qa[t])?!!r[t]:!1}function jn(){return Ka}var l=te({},Fn,{key:function(t){if(t.key){var r=ws[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=ps(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mt[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(t){return t.type==="keypress"?ps(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ps(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),f=vt(l),m=te({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_=vt(m),V=te({},Fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn}),U=vt(V),X=te({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ve=vt(X),ot=te({},Ti,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ce=vt(ot),ct=[9,13,27,32],tt=g&&"CompositionEvent"in window,an=null;g&&"documentMode"in document&&(an=document.documentMode);var Jt=g&&"TextEvent"in window&&!an,Ii=g&&(!tt||an&&8<an&&11>=an),Es=" ",Rd=!1;function Pd(t,r){switch(t){case"keyup":return ct.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function ov(t,r){switch(t){case"compositionend":return xd(r);case"keypress":return r.which!==32?null:(Rd=!0,Es);case"textInput":return t=r.data,t===Es&&Rd?null:t;default:return null}}function av(t,r){if(Ts)return t==="compositionend"||!tt&&Pd(t,r)?(t=Ro(),jt=fs=Yt=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ii&&r.locale!=="ko"?null:r.data;default:return null}}var lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!lv[t.type]:r==="textarea"}function Dd(t,r,o,u){Ln(u),r=Za(r,"onChange"),0<r.length&&(o=new ms("onChange","change",null,o,u),t.push({event:o,listeners:r}))}var Do=null,Oo=null;function uv(t){Xd(t,0)}function Qa(t){var r=Cs(t);if(Xi(r))return t}function cv(t,r){if(t==="change")return r}var Od=!1;if(g){var $u;if(g){var Hu="oninput"in document;if(!Hu){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),Hu=typeof Vd.oninput=="function"}$u=Hu}else $u=!1;Od=$u&&(!document.documentMode||9<document.documentMode)}function Ld(){Do&&(Do.detachEvent("onpropertychange",Md),Oo=Do=null)}function Md(t){if(t.propertyName==="value"&&Qa(Oo)){var r=[];Dd(r,Oo,t,ts(t)),_o(uv,r)}}function hv(t,r,o){t==="focusin"?(Ld(),Do=r,Oo=o,Do.attachEvent("onpropertychange",Md)):t==="focusout"&&Ld()}function dv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qa(Oo)}function fv(t,r){if(t==="click")return Qa(r)}function pv(t,r){if(t==="input"||t==="change")return Qa(r)}function mv(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var In=typeof Object.is=="function"?Object.is:mv;function Vo(t,r){if(In(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!y.call(r,h)||!In(t[h],r[h]))return!1}return!0}function bd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ud(t,r){var o=bd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=r&&u>=r)return{node:o,offset:r-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=bd(o)}}function Fd(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Fd(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function jd(){for(var t=window,r=Ir();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Ir(t.document)}return r}function Wu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function gv(t){var r=jd(),o=t.focusedElem,u=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Fd(o.ownerDocument.documentElement,o)){if(u!==null&&Wu(o)){if(r=u.start,t=u.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var h=o.textContent.length,p=Math.min(u.start,h);u=u.end===void 0?p:Math.min(u.end,h),!t.extend&&p>u&&(h=u,u=p,p=h),h=Ud(o,p);var v=Ud(o,u);h&&v&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==v.node||t.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),t.removeAllRanges(),p>u?(t.addRange(r),t.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yv=g&&"documentMode"in document&&11>=document.documentMode,Is=null,Gu=null,Lo=null,qu=!1;function zd(t,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;qu||Is==null||Is!==Ir(u)||(u=Is,"selectionStart"in u&&Wu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Lo&&Vo(Lo,u)||(Lo=u,u=Za(Gu,"onSelect"),0<u.length&&(r=new ms("onSelect","select",null,r,o),t.push({event:r,listeners:u}),r.target=Is)))}function Xa(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Ss={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},Ku={},Bd={};g&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Ya(t){if(Ku[t])return Ku[t];if(!Ss[t])return t;var r=Ss[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Bd)return Ku[t]=r[o];return t}var $d=Ya("animationend"),Hd=Ya("animationiteration"),Wd=Ya("animationstart"),Gd=Ya("transitionend"),qd=new Map,Kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,r){qd.set(t,r),c(r,[t])}for(var Qu=0;Qu<Kd.length;Qu++){var Xu=Kd[Qu],vv=Xu.toLowerCase(),_v=Xu[0].toUpperCase()+Xu.slice(1);Vr(vv,"on"+_v)}Vr($d,"onAnimationEnd"),Vr(Hd,"onAnimationIteration"),Vr(Wd,"onAnimationStart"),Vr("dblclick","onDoubleClick"),Vr("focusin","onFocus"),Vr("focusout","onBlur"),Vr(Gd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function Qd(t,r,o){var u=t.type||"unknown-event";t.currentTarget=o,Ca(u,r,void 0,t),t.currentTarget=null}function Xd(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],h=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var v=u.length-1;0<=v;v--){var E=u[v],A=E.instance,b=E.currentTarget;if(E=E.listener,A!==p&&h.isPropagationStopped())break e;Qd(h,E,b),p=A}else for(v=0;v<u.length;v++){if(E=u[v],A=E.instance,b=E.currentTarget,E=E.listener,A!==p&&h.isPropagationStopped())break e;Qd(h,E,b),p=A}}}if(mn)throw t=wo,mn=!1,wo=null,t}function ze(t,r){var o=r[ic];o===void 0&&(o=r[ic]=new Set);var u=t+"__bubble";o.has(u)||(Yd(r,t,2,!1),o.add(u))}function Yu(t,r,o){var u=0;r&&(u|=4),Yd(o,t,u,r)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function bo(t){if(!t[Ja]){t[Ja]=!0,s.forEach(function(o){o!=="selectionchange"&&(wv.has(o)||Yu(o,!1,t),Yu(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Ja]||(r[Ja]=!0,Yu("selectionchange",!1,r))}}function Yd(t,r,o,u){switch(Co(r)){case 1:var h=He;break;case 4:h=zu;break;default:h=ko}o=h.bind(null,r,o,t),h=void 0,!is||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(r,o,{capture:!0,passive:h}):t.addEventListener(r,o,!0):h!==void 0?t.addEventListener(r,o,{passive:h}):t.addEventListener(r,o,!1)}function Ju(t,r,o,u,h){var p=u;if(!(r&1)&&!(r&2)&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var E=u.stateNode.containerInfo;if(E===h||E.nodeType===8&&E.parentNode===h)break;if(v===4)for(v=u.return;v!==null;){var A=v.tag;if((A===3||A===4)&&(A=v.stateNode.containerInfo,A===h||A.nodeType===8&&A.parentNode===h))return;v=v.return}for(;E!==null;){if(v=Si(E),v===null)return;if(A=v.tag,A===5||A===6){u=p=v;continue e}E=E.parentNode}}u=u.return}_o(function(){var b=p,H=ts(o),W=[];e:{var $=qd.get(t);if($!==void 0){var ee=ms,re=t;switch(t){case"keypress":if(ps(o)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":re="focus",ee=_s;break;case"focusout":re="blur",ee=_s;break;case"beforeblur":case"afterblur":ee=_s;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Ba;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=U;break;case $d:case Hd:case Wd:ee=ar;break;case Gd:ee=Ve;break;case"scroll":ee=Bu;break;case"wheel":ee=Ce;break;case"copy":case"cut":case"paste":ee=Wa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=_}var ie=(r&4)!==0,et=!ie&&t==="scroll",L=ie?$!==null?$+"Capture":null:$;ie=[];for(var R=b,M;R!==null;){M=R;var K=M.stateNode;if(M.tag===5&&K!==null&&(M=K,L!==null&&(K=Ze(R,L),K!=null&&ie.push(Uo(R,K,M)))),et)break;R=R.return}0<ie.length&&($=new ee($,re,null,o,H),W.push({event:$,listeners:ie}))}}if(!(r&7)){e:{if($=t==="mouseover"||t==="pointerover",ee=t==="mouseout"||t==="pointerout",$&&o!==hi&&(re=o.relatedTarget||o.fromElement)&&(Si(re)||re[lr]))break e;if((ee||$)&&($=H.window===H?H:($=H.ownerDocument)?$.defaultView||$.parentWindow:window,ee?(re=o.relatedTarget||o.toElement,ee=b,re=re?Si(re):null,re!==null&&(et=gn(re),re!==et||re.tag!==5&&re.tag!==6)&&(re=null)):(ee=null,re=b),ee!==re)){if(ie=ys,K="onMouseLeave",L="onMouseEnter",R="mouse",(t==="pointerout"||t==="pointerover")&&(ie=_,K="onPointerLeave",L="onPointerEnter",R="pointer"),et=ee==null?$:Cs(ee),M=re==null?$:Cs(re),$=new ie(K,R+"leave",ee,o,H),$.target=et,$.relatedTarget=M,K=null,Si(H)===b&&(ie=new ie(L,R+"enter",re,o,H),ie.target=M,ie.relatedTarget=et,K=ie),et=K,ee&&re)t:{for(ie=ee,L=re,R=0,M=ie;M;M=As(M))R++;for(M=0,K=L;K;K=As(K))M++;for(;0<R-M;)ie=As(ie),R--;for(;0<M-R;)L=As(L),M--;for(;R--;){if(ie===L||L!==null&&ie===L.alternate)break t;ie=As(ie),L=As(L)}ie=null}else ie=null;ee!==null&&Jd(W,$,ee,ie,!1),re!==null&&et!==null&&Jd(W,et,re,ie,!0)}}e:{if($=b?Cs(b):window,ee=$.nodeName&&$.nodeName.toLowerCase(),ee==="select"||ee==="input"&&$.type==="file")var oe=cv;else if(Nd($))if(Od)oe=pv;else{oe=dv;var ue=hv}else(ee=$.nodeName)&&ee.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(oe=fv);if(oe&&(oe=oe(t,b))){Dd(W,oe,o,H);break e}ue&&ue(t,$,b),t==="focusout"&&(ue=$._wrapperState)&&ue.controlled&&$.type==="number"&&Ji($,"number",$.value)}switch(ue=b?Cs(b):window,t){case"focusin":(Nd(ue)||ue.contentEditable==="true")&&(Is=ue,Gu=b,Lo=null);break;case"focusout":Lo=Gu=Is=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,zd(W,o,H);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":zd(W,o,H)}var ce;if(tt)e:{switch(t){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ts?Pd(t,o)&&(fe="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(fe="onCompositionStart");fe&&(Ii&&o.locale!=="ko"&&(Ts||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ts&&(ce=Ro()):(Yt=H,fs="value"in Yt?Yt.value:Yt.textContent,Ts=!0)),ue=Za(b,fe),0<ue.length&&(fe=new No(fe,t,null,o,H),W.push({event:fe,listeners:ue}),ce?fe.data=ce:(ce=xd(o),ce!==null&&(fe.data=ce)))),(ce=Jt?ov(t,o):av(t,o))&&(b=Za(b,"onBeforeInput"),0<b.length&&(H=new No("onBeforeInput","beforeinput",null,o,H),W.push({event:H,listeners:b}),H.data=ce))}Xd(W,r)})}function Uo(t,r,o){return{instance:t,listener:r,currentTarget:o}}function Za(t,r){for(var o=r+"Capture",u=[];t!==null;){var h=t,p=h.stateNode;h.tag===5&&p!==null&&(h=p,p=Ze(t,o),p!=null&&u.unshift(Uo(t,p,h)),p=Ze(t,r),p!=null&&u.push(Uo(t,p,h))),t=t.return}return u}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jd(t,r,o,u,h){for(var p=r._reactName,v=[];o!==null&&o!==u;){var E=o,A=E.alternate,b=E.stateNode;if(A!==null&&A===u)break;E.tag===5&&b!==null&&(E=b,h?(A=Ze(o,p),A!=null&&v.unshift(Uo(o,A,E))):h||(A=Ze(o,p),A!=null&&v.push(Uo(o,A,E)))),o=o.return}v.length!==0&&t.push({event:r,listeners:v})}var Ev=/\r\n?/g,Tv=/\u0000|\uFFFD/g;function Zd(t){return(typeof t=="string"?t:""+t).replace(Ev,`
`).replace(Tv,"")}function el(t,r,o){if(r=Zd(r),Zd(t)!==r&&o)throw Error(n(425))}function tl(){}var Zu=null,ec=null;function tc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var nc=typeof setTimeout=="function"?setTimeout:void 0,Iv=typeof clearTimeout=="function"?clearTimeout:void 0,ef=typeof Promise=="function"?Promise:void 0,Sv=typeof queueMicrotask=="function"?queueMicrotask:typeof ef<"u"?function(t){return ef.resolve(null).then(t).catch(Av)}:nc;function Av(t){setTimeout(function(){throw t})}function rc(t,r){var o=r,u=0;do{var h=o.nextSibling;if(t.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){t.removeChild(h),En(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);En(r)}function Lr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function tf(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),zn="__reactFiber$"+ks,Fo="__reactProps$"+ks,lr="__reactContainer$"+ks,ic="__reactEvents$"+ks,kv="__reactListeners$"+ks,Cv="__reactHandles$"+ks;function Si(t){var r=t[zn];if(r)return r;for(var o=t.parentNode;o;){if(r=o[lr]||o[zn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=tf(t);t!==null;){if(o=t[zn])return o;t=tf(t)}return r}t=o,o=t.parentNode}return null}function jo(t){return t=t[zn]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function nl(t){return t[Fo]||null}var sc=[],Rs=-1;function Mr(t){return{current:t}}function Be(t){0>Rs||(t.current=sc[Rs],sc[Rs]=null,Rs--)}function Fe(t,r){Rs++,sc[Rs]=t.current,t.current=r}var br={},Ct=Mr(br),zt=Mr(!1),Ai=br;function Ps(t,r){var o=t.type.contextTypes;if(!o)return br;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},p;for(p in o)h[p]=r[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=h),h}function Bt(t){return t=t.childContextTypes,t!=null}function rl(){Be(zt),Be(Ct)}function nf(t,r,o){if(Ct.current!==br)throw Error(n(168));Fe(Ct,r),Fe(zt,o)}function rf(t,r,o){var u=t.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(n(108,De(t)||"Unknown",h));return te({},o,u)}function il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,Ai=Ct.current,Fe(Ct,t),Fe(zt,zt.current),!0}function sf(t,r,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=rf(t,r,Ai),u.__reactInternalMemoizedMergedChildContext=t,Be(zt),Be(Ct),Fe(Ct,t)):Be(zt),Fe(zt,o)}var ur=null,sl=!1,oc=!1;function of(t){ur===null?ur=[t]:ur.push(t)}function Rv(t){sl=!0,of(t)}function Ur(){if(!oc&&ur!==null){oc=!0;var t=0,r=Ae;try{var o=ur;for(Ae=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}ur=null,sl=!1}catch(h){throw ur!==null&&(ur=ur.slice(t+1)),ls(gi,Ur),h}finally{Ae=r,oc=!1}}return null}var xs=[],Ns=0,ol=null,al=0,ln=[],un=0,ki=null,cr=1,hr="";function Ci(t,r){xs[Ns++]=al,xs[Ns++]=ol,ol=t,al=r}function af(t,r,o){ln[un++]=cr,ln[un++]=hr,ln[un++]=ki,ki=t;var u=cr;t=hr;var h=32-Lt(u)-1;u&=~(1<<h),o+=1;var p=32-Lt(r)+h;if(30<p){var v=h-h%5;p=(u&(1<<v)-1).toString(32),u>>=v,h-=v,cr=1<<32-Lt(r)+h|o<<h|u,hr=p+t}else cr=1<<p|o<<h|u,hr=t}function ac(t){t.return!==null&&(Ci(t,1),af(t,1,0))}function lc(t){for(;t===ol;)ol=xs[--Ns],xs[Ns]=null,al=xs[--Ns],xs[Ns]=null;for(;t===ki;)ki=ln[--un],ln[un]=null,hr=ln[--un],ln[un]=null,cr=ln[--un],ln[un]=null}var Zt=null,en=null,We=!1,Sn=null;function lf(t,r){var o=fn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function uf(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Zt=t,en=Lr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Zt=t,en=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ki!==null?{id:cr,overflow:hr}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=fn(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,Zt=t,en=null,!0):!1;default:return!1}}function uc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cc(t){if(We){var r=en;if(r){var o=r;if(!uf(t,r)){if(uc(t))throw Error(n(418));r=Lr(o.nextSibling);var u=Zt;r&&uf(t,r)?lf(u,o):(t.flags=t.flags&-4097|2,We=!1,Zt=t)}}else{if(uc(t))throw Error(n(418));t.flags=t.flags&-4097|2,We=!1,Zt=t}}}function cf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zt=t}function ll(t){if(t!==Zt)return!1;if(!We)return cf(t),We=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!tc(t.type,t.memoizedProps)),r&&(r=en)){if(uc(t))throw hf(),Error(n(418));for(;r;)lf(t,r),r=Lr(r.nextSibling)}if(cf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){en=Lr(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}en=null}}else en=Zt?Lr(t.stateNode.nextSibling):null;return!0}function hf(){for(var t=en;t;)t=Lr(t.nextSibling)}function Ds(){en=Zt=null,We=!1}function hc(t){Sn===null?Sn=[t]:Sn.push(t)}var Pv=he.ReactCurrentBatchConfig;function zo(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var h=u,p=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var E=h.refs;v===null?delete E[p]:E[p]=v},r._stringRef=p,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ul(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function df(t){var r=t._init;return r(t._payload)}function ff(t){function r(L,R){if(t){var M=L.deletions;M===null?(L.deletions=[R],L.flags|=16):M.push(R)}}function o(L,R){if(!t)return null;for(;R!==null;)r(L,R),R=R.sibling;return null}function u(L,R){for(L=new Map;R!==null;)R.key!==null?L.set(R.key,R):L.set(R.index,R),R=R.sibling;return L}function h(L,R){return L=Gr(L,R),L.index=0,L.sibling=null,L}function p(L,R,M){return L.index=M,t?(M=L.alternate,M!==null?(M=M.index,M<R?(L.flags|=2,R):M):(L.flags|=2,R)):(L.flags|=1048576,R)}function v(L){return t&&L.alternate===null&&(L.flags|=2),L}function E(L,R,M,K){return R===null||R.tag!==6?(R=nh(M,L.mode,K),R.return=L,R):(R=h(R,M),R.return=L,R)}function A(L,R,M,K){var oe=M.type;return oe===P?H(L,R,M.props.children,K,M.key):R!==null&&(R.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===kt&&df(oe)===R.type)?(K=h(R,M.props),K.ref=zo(L,R,M),K.return=L,K):(K=Ol(M.type,M.key,M.props,null,L.mode,K),K.ref=zo(L,R,M),K.return=L,K)}function b(L,R,M,K){return R===null||R.tag!==4||R.stateNode.containerInfo!==M.containerInfo||R.stateNode.implementation!==M.implementation?(R=rh(M,L.mode,K),R.return=L,R):(R=h(R,M.children||[]),R.return=L,R)}function H(L,R,M,K,oe){return R===null||R.tag!==7?(R=Li(M,L.mode,K,oe),R.return=L,R):(R=h(R,M),R.return=L,R)}function W(L,R,M){if(typeof R=="string"&&R!==""||typeof R=="number")return R=nh(""+R,L.mode,M),R.return=L,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case $e:return M=Ol(R.type,R.key,R.props,null,L.mode,M),M.ref=zo(L,null,R),M.return=L,M;case Se:return R=rh(R,L.mode,M),R.return=L,R;case kt:var K=R._init;return W(L,K(R._payload),M)}if(Zn(R)||le(R))return R=Li(R,L.mode,M,null),R.return=L,R;ul(L,R)}return null}function $(L,R,M,K){var oe=R!==null?R.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return oe!==null?null:E(L,R,""+M,K);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case $e:return M.key===oe?A(L,R,M,K):null;case Se:return M.key===oe?b(L,R,M,K):null;case kt:return oe=M._init,$(L,R,oe(M._payload),K)}if(Zn(M)||le(M))return oe!==null?null:H(L,R,M,K,null);ul(L,M)}return null}function ee(L,R,M,K,oe){if(typeof K=="string"&&K!==""||typeof K=="number")return L=L.get(M)||null,E(R,L,""+K,oe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case $e:return L=L.get(K.key===null?M:K.key)||null,A(R,L,K,oe);case Se:return L=L.get(K.key===null?M:K.key)||null,b(R,L,K,oe);case kt:var ue=K._init;return ee(L,R,M,ue(K._payload),oe)}if(Zn(K)||le(K))return L=L.get(M)||null,H(R,L,K,oe,null);ul(R,K)}return null}function re(L,R,M,K){for(var oe=null,ue=null,ce=R,fe=R=0,ft=null;ce!==null&&fe<M.length;fe++){ce.index>fe?(ft=ce,ce=null):ft=ce.sibling;var Ne=$(L,ce,M[fe],K);if(Ne===null){ce===null&&(ce=ft);break}t&&ce&&Ne.alternate===null&&r(L,ce),R=p(Ne,R,fe),ue===null?oe=Ne:ue.sibling=Ne,ue=Ne,ce=ft}if(fe===M.length)return o(L,ce),We&&Ci(L,fe),oe;if(ce===null){for(;fe<M.length;fe++)ce=W(L,M[fe],K),ce!==null&&(R=p(ce,R,fe),ue===null?oe=ce:ue.sibling=ce,ue=ce);return We&&Ci(L,fe),oe}for(ce=u(L,ce);fe<M.length;fe++)ft=ee(ce,L,fe,M[fe],K),ft!==null&&(t&&ft.alternate!==null&&ce.delete(ft.key===null?fe:ft.key),R=p(ft,R,fe),ue===null?oe=ft:ue.sibling=ft,ue=ft);return t&&ce.forEach(function(qr){return r(L,qr)}),We&&Ci(L,fe),oe}function ie(L,R,M,K){var oe=le(M);if(typeof oe!="function")throw Error(n(150));if(M=oe.call(M),M==null)throw Error(n(151));for(var ue=oe=null,ce=R,fe=R=0,ft=null,Ne=M.next();ce!==null&&!Ne.done;fe++,Ne=M.next()){ce.index>fe?(ft=ce,ce=null):ft=ce.sibling;var qr=$(L,ce,Ne.value,K);if(qr===null){ce===null&&(ce=ft);break}t&&ce&&qr.alternate===null&&r(L,ce),R=p(qr,R,fe),ue===null?oe=qr:ue.sibling=qr,ue=qr,ce=ft}if(Ne.done)return o(L,ce),We&&Ci(L,fe),oe;if(ce===null){for(;!Ne.done;fe++,Ne=M.next())Ne=W(L,Ne.value,K),Ne!==null&&(R=p(Ne,R,fe),ue===null?oe=Ne:ue.sibling=Ne,ue=Ne);return We&&Ci(L,fe),oe}for(ce=u(L,ce);!Ne.done;fe++,Ne=M.next())Ne=ee(ce,L,fe,Ne.value,K),Ne!==null&&(t&&Ne.alternate!==null&&ce.delete(Ne.key===null?fe:Ne.key),R=p(Ne,R,fe),ue===null?oe=Ne:ue.sibling=Ne,ue=Ne);return t&&ce.forEach(function(a0){return r(L,a0)}),We&&Ci(L,fe),oe}function et(L,R,M,K){if(typeof M=="object"&&M!==null&&M.type===P&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case $e:e:{for(var oe=M.key,ue=R;ue!==null;){if(ue.key===oe){if(oe=M.type,oe===P){if(ue.tag===7){o(L,ue.sibling),R=h(ue,M.props.children),R.return=L,L=R;break e}}else if(ue.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===kt&&df(oe)===ue.type){o(L,ue.sibling),R=h(ue,M.props),R.ref=zo(L,ue,M),R.return=L,L=R;break e}o(L,ue);break}else r(L,ue);ue=ue.sibling}M.type===P?(R=Li(M.props.children,L.mode,K,M.key),R.return=L,L=R):(K=Ol(M.type,M.key,M.props,null,L.mode,K),K.ref=zo(L,R,M),K.return=L,L=K)}return v(L);case Se:e:{for(ue=M.key;R!==null;){if(R.key===ue)if(R.tag===4&&R.stateNode.containerInfo===M.containerInfo&&R.stateNode.implementation===M.implementation){o(L,R.sibling),R=h(R,M.children||[]),R.return=L,L=R;break e}else{o(L,R);break}else r(L,R);R=R.sibling}R=rh(M,L.mode,K),R.return=L,L=R}return v(L);case kt:return ue=M._init,et(L,R,ue(M._payload),K)}if(Zn(M))return re(L,R,M,K);if(le(M))return ie(L,R,M,K);ul(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,R!==null&&R.tag===6?(o(L,R.sibling),R=h(R,M),R.return=L,L=R):(o(L,R),R=nh(M,L.mode,K),R.return=L,L=R),v(L)):o(L,R)}return et}var Os=ff(!0),pf=ff(!1),cl=Mr(null),hl=null,Vs=null,dc=null;function fc(){dc=Vs=hl=null}function pc(t){var r=cl.current;Be(cl),t._currentValue=r}function mc(t,r,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),t===o)break;t=t.return}}function Ls(t,r){hl=t,dc=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&($t=!0),t.firstContext=null)}function cn(t){var r=t._currentValue;if(dc!==t)if(t={context:t,memoizedValue:r,next:null},Vs===null){if(hl===null)throw Error(n(308));Vs=t,hl.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return r}var Ri=null;function gc(t){Ri===null?Ri=[t]:Ri.push(t)}function mf(t,r,o,u){var h=r.interleaved;return h===null?(o.next=o,gc(r)):(o.next=h.next,h.next=o),r.interleaved=o,dr(t,u)}function dr(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Fr=!1;function yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function jr(t,r,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,Pe&2){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,dr(t,o)}return h=u.interleaved,h===null?(r.next=r,gc(u)):(r.next=h.next,h.next=r),u.interleaved=r,dr(t,o)}function dl(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Pr(t,o)}}function yf(t,r){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?h=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?h=p=r:p=p.next=r}else h=p=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function fl(t,r,o,u){var h=t.updateQueue;Fr=!1;var p=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var A=E,b=A.next;A.next=null,v===null?p=b:v.next=b,v=A;var H=t.alternate;H!==null&&(H=H.updateQueue,E=H.lastBaseUpdate,E!==v&&(E===null?H.firstBaseUpdate=b:E.next=b,H.lastBaseUpdate=A))}if(p!==null){var W=h.baseState;v=0,H=b=A=null,E=p;do{var $=E.lane,ee=E.eventTime;if((u&$)===$){H!==null&&(H=H.next={eventTime:ee,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var re=t,ie=E;switch($=r,ee=o,ie.tag){case 1:if(re=ie.payload,typeof re=="function"){W=re.call(ee,W,$);break e}W=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ie.payload,$=typeof re=="function"?re.call(ee,W,$):re,$==null)break e;W=te({},W,$);break e;case 2:Fr=!0}}E.callback!==null&&E.lane!==0&&(t.flags|=64,$=h.effects,$===null?h.effects=[E]:$.push(E))}else ee={eventTime:ee,lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},H===null?(b=H=ee,A=W):H=H.next=ee,v|=$;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;$=E,E=$.next,$.next=null,h.lastBaseUpdate=$,h.shared.pending=null}}while(!0);if(H===null&&(A=W),h.baseState=A,h.firstBaseUpdate=b,h.lastBaseUpdate=H,r=h.shared.interleaved,r!==null){h=r;do v|=h.lane,h=h.next;while(h!==r)}else p===null&&(h.shared.lanes=0);Ni|=v,t.lanes=v,t.memoizedState=W}}function vf(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var u=t[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(n(191,h));h.call(u)}}}var Bo={},Bn=Mr(Bo),$o=Mr(Bo),Ho=Mr(Bo);function Pi(t){if(t===Bo)throw Error(n(174));return t}function vc(t,r){switch(Fe(Ho,r),Fe($o,t),Fe(Bn,Bo),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:st(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=st(r,t)}Be(Bn),Fe(Bn,r)}function Ms(){Be(Bn),Be($o),Be(Ho)}function _f(t){Pi(Ho.current);var r=Pi(Bn.current),o=st(r,t.type);r!==o&&(Fe($o,t),Fe(Bn,o))}function _c(t){$o.current===t&&(Be(Bn),Be($o))}var qe=Mr(0);function pl(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var wc=[];function Ec(){for(var t=0;t<wc.length;t++)wc[t]._workInProgressVersionPrimary=null;wc.length=0}var ml=he.ReactCurrentDispatcher,Tc=he.ReactCurrentBatchConfig,xi=0,Ke=null,at=null,ht=null,gl=!1,Wo=!1,Go=0,xv=0;function Rt(){throw Error(n(321))}function Ic(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!In(t[o],r[o]))return!1;return!0}function Sc(t,r,o,u,h,p){if(xi=p,Ke=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ml.current=t===null||t.memoizedState===null?Vv:Lv,t=o(u,h),Wo){p=0;do{if(Wo=!1,Go=0,25<=p)throw Error(n(301));p+=1,ht=at=null,r.updateQueue=null,ml.current=Mv,t=o(u,h)}while(Wo)}if(ml.current=_l,r=at!==null&&at.next!==null,xi=0,ht=at=Ke=null,gl=!1,r)throw Error(n(300));return t}function Ac(){var t=Go!==0;return Go=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Ke.memoizedState=ht=t:ht=ht.next=t,ht}function hn(){if(at===null){var t=Ke.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var r=ht===null?Ke.memoizedState:ht.next;if(r!==null)ht=r,at=t;else{if(t===null)throw Error(n(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},ht===null?Ke.memoizedState=ht=t:ht=ht.next=t}return ht}function qo(t,r){return typeof r=="function"?r(t):r}function kc(t){var r=hn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=at,h=u.baseQueue,p=o.pending;if(p!==null){if(h!==null){var v=h.next;h.next=p.next,p.next=v}u.baseQueue=h=p,o.pending=null}if(h!==null){p=h.next,u=u.baseState;var E=v=null,A=null,b=p;do{var H=b.lane;if((xi&H)===H)A!==null&&(A=A.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),u=b.hasEagerState?b.eagerState:t(u,b.action);else{var W={lane:H,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};A===null?(E=A=W,v=u):A=A.next=W,Ke.lanes|=H,Ni|=H}b=b.next}while(b!==null&&b!==p);A===null?v=u:A.next=E,In(u,r.memoizedState)||($t=!0),r.memoizedState=u,r.baseState=v,r.baseQueue=A,o.lastRenderedState=u}if(t=o.interleaved,t!==null){h=t;do p=h.lane,Ke.lanes|=p,Ni|=p,h=h.next;while(h!==t)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Cc(t){var r=hn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,h=o.pending,p=r.memoizedState;if(h!==null){o.pending=null;var v=h=h.next;do p=t(p,v.action),v=v.next;while(v!==h);In(p,r.memoizedState)||($t=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function wf(){}function Ef(t,r){var o=Ke,u=hn(),h=r(),p=!In(u.memoizedState,h);if(p&&(u.memoizedState=h,$t=!0),u=u.queue,Rc(Sf.bind(null,o,u,t),[t]),u.getSnapshot!==r||p||ht!==null&&ht.memoizedState.tag&1){if(o.flags|=2048,Ko(9,If.bind(null,o,u,h,r),void 0,null),dt===null)throw Error(n(349));xi&30||Tf(o,r,h)}return h}function Tf(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Ke.updateQueue,r===null?(r={lastEffect:null,stores:null},Ke.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function If(t,r,o,u){r.value=o,r.getSnapshot=u,Af(r)&&kf(t)}function Sf(t,r,o){return o(function(){Af(r)&&kf(t)})}function Af(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!In(t,o)}catch{return!0}}function kf(t){var r=dr(t,1);r!==null&&Rn(r,t,1,-1)}function Cf(t){var r=$n();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},r.queue=t,t=t.dispatch=Ov.bind(null,Ke,t),[r.memoizedState,t]}function Ko(t,r,o,u){return t={tag:t,create:r,destroy:o,deps:u,next:null},r=Ke.updateQueue,r===null?(r={lastEffect:null,stores:null},Ke.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,r.lastEffect=t)),t}function Rf(){return hn().memoizedState}function yl(t,r,o,u){var h=$n();Ke.flags|=t,h.memoizedState=Ko(1|r,o,void 0,u===void 0?null:u)}function vl(t,r,o,u){var h=hn();u=u===void 0?null:u;var p=void 0;if(at!==null){var v=at.memoizedState;if(p=v.destroy,u!==null&&Ic(u,v.deps)){h.memoizedState=Ko(r,o,p,u);return}}Ke.flags|=t,h.memoizedState=Ko(1|r,o,p,u)}function Pf(t,r){return yl(8390656,8,t,r)}function Rc(t,r){return vl(2048,8,t,r)}function xf(t,r){return vl(4,2,t,r)}function Nf(t,r){return vl(4,4,t,r)}function Df(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Of(t,r,o){return o=o!=null?o.concat([t]):null,vl(4,4,Df.bind(null,r,t),o)}function Pc(){}function Vf(t,r){var o=hn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Ic(r,u[1])?u[0]:(o.memoizedState=[t,r],t)}function Lf(t,r){var o=hn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Ic(r,u[1])?u[0]:(t=t(),o.memoizedState=[t,r],t)}function Mf(t,r,o){return xi&21?(In(o,r)||(o=_i(),Ke.lanes|=o,Ni|=o,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=o)}function Nv(t,r){var o=Ae;Ae=o!==0&&4>o?o:4,t(!0);var u=Tc.transition;Tc.transition={};try{t(!1),r()}finally{Ae=o,Tc.transition=u}}function bf(){return hn().memoizedState}function Dv(t,r,o){var u=Hr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Uf(t))Ff(r,o);else if(o=mf(t,r,o,u),o!==null){var h=Ut();Rn(o,t,u,h),jf(o,r,u)}}function Ov(t,r,o){var u=Hr(t),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Uf(t))Ff(r,h);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,E=p(v,o);if(h.hasEagerState=!0,h.eagerState=E,In(E,v)){var A=r.interleaved;A===null?(h.next=h,gc(r)):(h.next=A.next,A.next=h),r.interleaved=h;return}}catch{}finally{}o=mf(t,r,h,u),o!==null&&(h=Ut(),Rn(o,t,u,h),jf(o,r,u))}}function Uf(t){var r=t.alternate;return t===Ke||r!==null&&r===Ke}function Ff(t,r){Wo=gl=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function jf(t,r,o){if(o&4194240){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Pr(t,o)}}var _l={readContext:cn,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},Vv={readContext:cn,useCallback:function(t,r){return $n().memoizedState=[t,r===void 0?null:r],t},useContext:cn,useEffect:Pf,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,yl(4194308,4,Df.bind(null,r,t),o)},useLayoutEffect:function(t,r){return yl(4194308,4,t,r)},useInsertionEffect:function(t,r){return yl(4,2,t,r)},useMemo:function(t,r){var o=$n();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var u=$n();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},u.queue=t,t=t.dispatch=Dv.bind(null,Ke,t),[u.memoizedState,t]},useRef:function(t){var r=$n();return t={current:t},r.memoizedState=t},useState:Cf,useDebugValue:Pc,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=Cf(!1),r=t[0];return t=Nv.bind(null,t[1]),$n().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var u=Ke,h=$n();if(We){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),dt===null)throw Error(n(349));xi&30||Tf(u,r,o)}h.memoizedState=o;var p={value:o,getSnapshot:r};return h.queue=p,Pf(Sf.bind(null,u,p,t),[t]),u.flags|=2048,Ko(9,If.bind(null,u,p,o,r),void 0,null),o},useId:function(){var t=$n(),r=dt.identifierPrefix;if(We){var o=hr,u=cr;o=(u&~(1<<32-Lt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Go++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=xv++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Lv={readContext:cn,useCallback:Vf,useContext:cn,useEffect:Rc,useImperativeHandle:Of,useInsertionEffect:xf,useLayoutEffect:Nf,useMemo:Lf,useReducer:kc,useRef:Rf,useState:function(){return kc(qo)},useDebugValue:Pc,useDeferredValue:function(t){var r=hn();return Mf(r,at.memoizedState,t)},useTransition:function(){var t=kc(qo)[0],r=hn().memoizedState;return[t,r]},useMutableSource:wf,useSyncExternalStore:Ef,useId:bf,unstable_isNewReconciler:!1},Mv={readContext:cn,useCallback:Vf,useContext:cn,useEffect:Rc,useImperativeHandle:Of,useInsertionEffect:xf,useLayoutEffect:Nf,useMemo:Lf,useReducer:Cc,useRef:Rf,useState:function(){return Cc(qo)},useDebugValue:Pc,useDeferredValue:function(t){var r=hn();return at===null?r.memoizedState=t:Mf(r,at.memoizedState,t)},useTransition:function(){var t=Cc(qo)[0],r=hn().memoizedState;return[t,r]},useMutableSource:wf,useSyncExternalStore:Ef,useId:bf,unstable_isNewReconciler:!1};function An(t,r){if(t&&t.defaultProps){r=te({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function xc(t,r,o,u){r=t.memoizedState,o=o(u,r),o=o==null?r:te({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var wl={isMounted:function(t){return(t=t._reactInternals)?gn(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var u=Ut(),h=Hr(t),p=fr(u,h);p.payload=r,o!=null&&(p.callback=o),r=jr(t,p,h),r!==null&&(Rn(r,t,h,u),dl(r,t,h))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var u=Ut(),h=Hr(t),p=fr(u,h);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=jr(t,p,h),r!==null&&(Rn(r,t,h,u),dl(r,t,h))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Ut(),u=Hr(t),h=fr(o,u);h.tag=2,r!=null&&(h.callback=r),r=jr(t,h,u),r!==null&&(Rn(r,t,u,o),dl(r,t,u))}};function zf(t,r,o,u,h,p,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,v):r.prototype&&r.prototype.isPureReactComponent?!Vo(o,u)||!Vo(h,p):!0}function Bf(t,r,o){var u=!1,h=br,p=r.contextType;return typeof p=="object"&&p!==null?p=cn(p):(h=Bt(r)?Ai:Ct.current,u=r.contextTypes,p=(u=u!=null)?Ps(t,h):br),r=new r(o,p),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=wl,t.stateNode=r,r._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=p),r}function $f(t,r,o,u){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==t&&wl.enqueueReplaceState(r,r.state,null)}function Nc(t,r,o,u){var h=t.stateNode;h.props=o,h.state=t.memoizedState,h.refs={},yc(t);var p=r.contextType;typeof p=="object"&&p!==null?h.context=cn(p):(p=Bt(r)?Ai:Ct.current,h.context=Ps(t,p)),h.state=t.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(xc(t,r,p,o),h.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&wl.enqueueReplaceState(h,h.state,null),fl(t,o,h,u),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,r){try{var o="",u=r;do o+=we(u),u=u.return;while(u);var h=o}catch(p){h=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:r,stack:h,digest:null}}function Dc(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function Oc(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var bv=typeof WeakMap=="function"?WeakMap:Map;function Hf(t,r,o){o=fr(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){Cl||(Cl=!0,Kc=u),Oc(t,r)},o}function Wf(t,r,o){o=fr(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){Oc(t,r)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Oc(t,r),typeof u!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),o}function Gf(t,r,o){var u=t.pingCache;if(u===null){u=t.pingCache=new bv;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),t=Yv.bind(null,t,r,o),r.then(t,t))}function qf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Kf(t,r,o,u,h){return t.mode&1?(t.flags|=65536,t.lanes=h,t):(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=fr(-1,1),r.tag=2,jr(o,r,1))),o.lanes|=1),t)}var Uv=he.ReactCurrentOwner,$t=!1;function bt(t,r,o,u){r.child=t===null?pf(r,null,o,u):Os(r,t.child,o,u)}function Qf(t,r,o,u,h){o=o.render;var p=r.ref;return Ls(r,h),u=Sc(t,r,o,u,p,h),o=Ac(),t!==null&&!$t?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,pr(t,r,h)):(We&&o&&ac(r),r.flags|=1,bt(t,r,u,h),r.child)}function Xf(t,r,o,u,h){if(t===null){var p=o.type;return typeof p=="function"&&!th(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=p,Yf(t,r,p,u,h)):(t=Ol(o.type,null,u,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(p=t.child,!(t.lanes&h)){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:Vo,o(v,u)&&t.ref===r.ref)return pr(t,r,h)}return r.flags|=1,t=Gr(p,u),t.ref=r.ref,t.return=r,r.child=t}function Yf(t,r,o,u,h){if(t!==null){var p=t.memoizedProps;if(Vo(p,u)&&t.ref===r.ref)if($t=!1,r.pendingProps=u=p,(t.lanes&h)!==0)t.flags&131072&&($t=!0);else return r.lanes=t.lanes,pr(t,r,h)}return Vc(t,r,o,u,h)}function Jf(t,r,o){var u=r.pendingProps,h=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fe(Fs,tn),tn|=o;else{if(!(o&1073741824))return t=p!==null?p.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Fe(Fs,tn),tn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Fe(Fs,tn),tn|=u}else p!==null?(u=p.baseLanes|o,r.memoizedState=null):u=o,Fe(Fs,tn),tn|=u;return bt(t,r,h,o),r.child}function Zf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Vc(t,r,o,u,h){var p=Bt(o)?Ai:Ct.current;return p=Ps(r,p),Ls(r,h),o=Sc(t,r,o,u,p,h),u=Ac(),t!==null&&!$t?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,pr(t,r,h)):(We&&u&&ac(r),r.flags|=1,bt(t,r,o,h),r.child)}function ep(t,r,o,u,h){if(Bt(o)){var p=!0;il(r)}else p=!1;if(Ls(r,h),r.stateNode===null)Tl(t,r),Bf(r,o,u),Nc(r,o,u,h),u=!0;else if(t===null){var v=r.stateNode,E=r.memoizedProps;v.props=E;var A=v.context,b=o.contextType;typeof b=="object"&&b!==null?b=cn(b):(b=Bt(o)?Ai:Ct.current,b=Ps(r,b));var H=o.getDerivedStateFromProps,W=typeof H=="function"||typeof v.getSnapshotBeforeUpdate=="function";W||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(E!==u||A!==b)&&$f(r,v,u,b),Fr=!1;var $=r.memoizedState;v.state=$,fl(r,u,v,h),A=r.memoizedState,E!==u||$!==A||zt.current||Fr?(typeof H=="function"&&(xc(r,o,H,u),A=r.memoizedState),(E=Fr||zf(r,o,E,u,$,A,b))?(W||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=A),v.props=u,v.state=A,v.context=b,u=E):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{v=r.stateNode,gf(t,r),E=r.memoizedProps,b=r.type===r.elementType?E:An(r.type,E),v.props=b,W=r.pendingProps,$=v.context,A=o.contextType,typeof A=="object"&&A!==null?A=cn(A):(A=Bt(o)?Ai:Ct.current,A=Ps(r,A));var ee=o.getDerivedStateFromProps;(H=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(E!==W||$!==A)&&$f(r,v,u,A),Fr=!1,$=r.memoizedState,v.state=$,fl(r,u,v,h);var re=r.memoizedState;E!==W||$!==re||zt.current||Fr?(typeof ee=="function"&&(xc(r,o,ee,u),re=r.memoizedState),(b=Fr||zf(r,o,b,u,$,re,A)||!1)?(H||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(u,re,A),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(u,re,A)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||E===t.memoizedProps&&$===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&$===t.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=re),v.props=u,v.state=re,v.context=A,u=b):(typeof v.componentDidUpdate!="function"||E===t.memoizedProps&&$===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&$===t.memoizedState||(r.flags|=1024),u=!1)}return Lc(t,r,o,u,p,h)}function Lc(t,r,o,u,h,p){Zf(t,r);var v=(r.flags&128)!==0;if(!u&&!v)return h&&sf(r,o,!1),pr(t,r,p);u=r.stateNode,Uv.current=r;var E=v&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,t!==null&&v?(r.child=Os(r,t.child,null,p),r.child=Os(r,null,E,p)):bt(t,r,E,p),r.memoizedState=u.state,h&&sf(r,o,!0),r.child}function tp(t){var r=t.stateNode;r.pendingContext?nf(t,r.pendingContext,r.pendingContext!==r.context):r.context&&nf(t,r.context,!1),vc(t,r.containerInfo)}function np(t,r,o,u,h){return Ds(),hc(h),r.flags|=256,bt(t,r,o,u),r.child}var Mc={dehydrated:null,treeContext:null,retryLane:0};function bc(t){return{baseLanes:t,cachePool:null,transitions:null}}function rp(t,r,o){var u=r.pendingProps,h=qe.current,p=!1,v=(r.flags&128)!==0,E;if((E=v)||(E=t!==null&&t.memoizedState===null?!1:(h&2)!==0),E?(p=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),Fe(qe,h&1),t===null)return cc(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(v=u.children,t=u.fallback,p?(u=r.mode,p=r.child,v={mode:"hidden",children:v},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Vl(v,u,0,null),t=Li(t,u,o,null),p.return=r,t.return=r,p.sibling=t,r.child=p,r.child.memoizedState=bc(o),r.memoizedState=Mc,t):Uc(r,v));if(h=t.memoizedState,h!==null&&(E=h.dehydrated,E!==null))return Fv(t,r,v,u,E,h,o);if(p){p=u.fallback,v=r.mode,h=t.child,E=h.sibling;var A={mode:"hidden",children:u.children};return!(v&1)&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=A,r.deletions=null):(u=Gr(h,A),u.subtreeFlags=h.subtreeFlags&14680064),E!==null?p=Gr(E,p):(p=Li(p,v,o,null),p.flags|=2),p.return=r,u.return=r,u.sibling=p,r.child=u,u=p,p=r.child,v=t.child.memoizedState,v=v===null?bc(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=t.childLanes&~o,r.memoizedState=Mc,u}return p=t.child,t=p.sibling,u=Gr(p,{mode:"visible",children:u.children}),!(r.mode&1)&&(u.lanes=o),u.return=r,u.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=u,r.memoizedState=null,u}function Uc(t,r){return r=Vl({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function El(t,r,o,u){return u!==null&&hc(u),Os(r,t.child,null,o),t=Uc(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Fv(t,r,o,u,h,p,v){if(o)return r.flags&256?(r.flags&=-257,u=Dc(Error(n(422))),El(t,r,v,u)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(p=u.fallback,h=r.mode,u=Vl({mode:"visible",children:u.children},h,0,null),p=Li(p,h,v,null),p.flags|=2,u.return=r,p.return=r,u.sibling=p,r.child=u,r.mode&1&&Os(r,t.child,null,v),r.child.memoizedState=bc(v),r.memoizedState=Mc,p);if(!(r.mode&1))return El(t,r,v,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var E=u.dgst;return u=E,p=Error(n(419)),u=Dc(p,u,void 0),El(t,r,v,u)}if(E=(v&t.childLanes)!==0,$t||E){if(u=dt,u!==null){switch(v&-v){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=h&(u.suspendedLanes|v)?0:h,h!==0&&h!==p.retryLane&&(p.retryLane=h,dr(t,h),Rn(u,t,h,-1))}return eh(),u=Dc(Error(n(421))),El(t,r,v,u)}return h.data==="$?"?(r.flags|=128,r.child=t.child,r=Jv.bind(null,t),h._reactRetry=r,null):(t=p.treeContext,en=Lr(h.nextSibling),Zt=r,We=!0,Sn=null,t!==null&&(ln[un++]=cr,ln[un++]=hr,ln[un++]=ki,cr=t.id,hr=t.overflow,ki=r),r=Uc(r,u.children),r.flags|=4096,r)}function ip(t,r,o){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r),mc(t.return,r,o)}function Fc(t,r,o,u,h){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=h)}function sp(t,r,o){var u=r.pendingProps,h=u.revealOrder,p=u.tail;if(bt(t,r,u.children,o),u=qe.current,u&2)u=u&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ip(t,o,r);else if(t.tag===19)ip(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Fe(qe,u),!(r.mode&1))r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)t=o.alternate,t!==null&&pl(t)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),Fc(r,!1,h,o,p);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&pl(t)===null){r.child=h;break}t=h.sibling,h.sibling=o,o=h,h=t}Fc(r,!0,o,null,p);break;case"together":Fc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Tl(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function pr(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),Ni|=r.lanes,!(o&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Gr(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Gr(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function jv(t,r,o){switch(r.tag){case 3:tp(r),Ds();break;case 5:_f(r);break;case 1:Bt(r.type)&&il(r);break;case 4:vc(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;Fe(cl,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Fe(qe,qe.current&1),r.flags|=128,null):o&r.child.childLanes?rp(t,r,o):(Fe(qe,qe.current&1),t=pr(t,r,o),t!==null?t.sibling:null);Fe(qe,qe.current&1);break;case 19:if(u=(o&r.childLanes)!==0,t.flags&128){if(u)return sp(t,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Fe(qe,qe.current),u)break;return null;case 22:case 23:return r.lanes=0,Jf(t,r,o)}return pr(t,r,o)}var op,jc,ap,lp;op=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},jc=function(){},ap=function(t,r,o,u){var h=t.memoizedProps;if(h!==u){t=r.stateNode,Pi(Bn.current);var p=null;switch(o){case"input":h=li(t,h),u=li(t,u),p=[];break;case"select":h=te({},h,{value:void 0}),u=te({},u,{value:void 0}),p=[];break;case"textarea":h=lo(t,h),u=lo(t,u),p=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=tl)}mo(o,u);var v;o=null;for(b in h)if(!u.hasOwnProperty(b)&&h.hasOwnProperty(b)&&h[b]!=null)if(b==="style"){var E=h[b];for(v in E)E.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(a.hasOwnProperty(b)?p||(p=[]):(p=p||[]).push(b,null));for(b in u){var A=u[b];if(E=h!=null?h[b]:void 0,u.hasOwnProperty(b)&&A!==E&&(A!=null||E!=null))if(b==="style")if(E){for(v in E)!E.hasOwnProperty(v)||A&&A.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in A)A.hasOwnProperty(v)&&E[v]!==A[v]&&(o||(o={}),o[v]=A[v])}else o||(p||(p=[]),p.push(b,o)),o=A;else b==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,E=E?E.__html:void 0,A!=null&&E!==A&&(p=p||[]).push(b,A)):b==="children"?typeof A!="string"&&typeof A!="number"||(p=p||[]).push(b,""+A):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(a.hasOwnProperty(b)?(A!=null&&b==="onScroll"&&ze("scroll",t),p||E===A||(p=[])):(p=p||[]).push(b,A))}o&&(p=p||[]).push("style",o);var b=p;(r.updateQueue=b)&&(r.flags|=4)}},lp=function(t,r,o,u){o!==u&&(r.flags|=4)};function Qo(t,r){if(!We)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Pt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(r)for(var h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=o,r}function zv(t,r,o){var u=r.pendingProps;switch(lc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(r),null;case 1:return Bt(r.type)&&rl(),Pt(r),null;case 3:return u=r.stateNode,Ms(),Be(zt),Be(Ct),Ec(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(ll(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Sn!==null&&(Yc(Sn),Sn=null))),jc(t,r),Pt(r),null;case 5:_c(r);var h=Pi(Ho.current);if(o=r.type,t!==null&&r.stateNode!=null)ap(t,r,o,u,h),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(n(166));return Pt(r),null}if(t=Pi(Bn.current),ll(r)){u=r.stateNode,o=r.type;var p=r.memoizedProps;switch(u[zn]=r,u[Fo]=p,t=(r.mode&1)!==0,o){case"dialog":ze("cancel",u),ze("close",u);break;case"iframe":case"object":case"embed":ze("load",u);break;case"video":case"audio":for(h=0;h<Mo.length;h++)ze(Mo[h],u);break;case"source":ze("error",u);break;case"img":case"image":case"link":ze("error",u),ze("load",u);break;case"details":ze("toggle",u);break;case"input":Yi(u,p),ze("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},ze("invalid",u);break;case"textarea":Zi(u,p),ze("invalid",u)}mo(o,p),h=null;for(var v in p)if(p.hasOwnProperty(v)){var E=p[v];v==="children"?typeof E=="string"?u.textContent!==E&&(p.suppressHydrationWarning!==!0&&el(u.textContent,E,t),h=["children",E]):typeof E=="number"&&u.textContent!==""+E&&(p.suppressHydrationWarning!==!0&&el(u.textContent,E,t),h=["children",""+E]):a.hasOwnProperty(v)&&E!=null&&v==="onScroll"&&ze("scroll",u)}switch(o){case"input":Jn(u),ka(u,p,!0);break;case"textarea":Jn(u),uo(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=tl)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{v=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=it(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=v.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=v.createElement(o,{is:u.is}):(t=v.createElement(o),o==="select"&&(v=t,u.multiple?v.multiple=!0:u.size&&(v.size=u.size))):t=v.createElementNS(t,o),t[zn]=r,t[Fo]=u,op(t,r,!1,!1),r.stateNode=t;e:{switch(v=go(o,u),o){case"dialog":ze("cancel",t),ze("close",t),h=u;break;case"iframe":case"object":case"embed":ze("load",t),h=u;break;case"video":case"audio":for(h=0;h<Mo.length;h++)ze(Mo[h],t);h=u;break;case"source":ze("error",t),h=u;break;case"img":case"image":case"link":ze("error",t),ze("load",t),h=u;break;case"details":ze("toggle",t),h=u;break;case"input":Yi(t,u),h=li(t,u),ze("invalid",t);break;case"option":h=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},h=te({},u,{value:void 0}),ze("invalid",t);break;case"textarea":Zi(t,u),h=lo(t,u),ze("invalid",t);break;default:h=u}mo(o,h),E=h;for(p in E)if(E.hasOwnProperty(p)){var A=E[p];p==="style"?fo(t,A):p==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&co(t,A)):p==="children"?typeof A=="string"?(o!=="textarea"||A!=="")&&Sr(t,A):typeof A=="number"&&Sr(t,""+A):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?A!=null&&p==="onScroll"&&ze("scroll",t):A!=null&&me(t,p,A,v))}switch(o){case"input":Jn(t),ka(t,u,!1);break;case"textarea":Jn(t),uo(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Oe(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?er(t,!!u.multiple,p,!1):u.defaultValue!=null&&er(t,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=tl)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Pt(r),null;case 6:if(t&&r.stateNode!=null)lp(t,r,t.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(n(166));if(o=Pi(Ho.current),Pi(Bn.current),ll(r)){if(u=r.stateNode,o=r.memoizedProps,u[zn]=r,(p=u.nodeValue!==o)&&(t=Zt,t!==null))switch(t.tag){case 3:el(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&el(u.nodeValue,o,(t.mode&1)!==0)}p&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[zn]=r,r.stateNode=u}return Pt(r),null;case 13:if(Be(qe),u=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(We&&en!==null&&r.mode&1&&!(r.flags&128))hf(),Ds(),r.flags|=98560,p=!1;else if(p=ll(r),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[zn]=r}else Ds(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Pt(r),p=!1}else Sn!==null&&(Yc(Sn),Sn=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(r.child.flags|=8192,r.mode&1&&(t===null||qe.current&1?lt===0&&(lt=3):eh())),r.updateQueue!==null&&(r.flags|=4),Pt(r),null);case 4:return Ms(),jc(t,r),t===null&&bo(r.stateNode.containerInfo),Pt(r),null;case 10:return pc(r.type._context),Pt(r),null;case 17:return Bt(r.type)&&rl(),Pt(r),null;case 19:if(Be(qe),p=r.memoizedState,p===null)return Pt(r),null;if(u=(r.flags&128)!==0,v=p.rendering,v===null)if(u)Qo(p,!1);else{if(lt!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(v=pl(t),v!==null){for(r.flags|=128,Qo(p,!1),u=v.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)p=o,t=u,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,t=v.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Fe(qe,qe.current&1|2),r.child}t=t.sibling}p.tail!==null&&Ue()>js&&(r.flags|=128,u=!0,Qo(p,!1),r.lanes=4194304)}else{if(!u)if(t=pl(v),t!==null){if(r.flags|=128,u=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Qo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!We)return Pt(r),null}else 2*Ue()-p.renderingStartTime>js&&o!==1073741824&&(r.flags|=128,u=!0,Qo(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(o=p.last,o!==null?o.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Ue(),r.sibling=null,o=qe.current,Fe(qe,u?o&1|2:o&1),r):(Pt(r),null);case 22:case 23:return Zc(),u=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(r.flags|=8192),u&&r.mode&1?tn&1073741824&&(Pt(r),r.subtreeFlags&6&&(r.flags|=8192)):Pt(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function Bv(t,r){switch(lc(r),r.tag){case 1:return Bt(r.type)&&rl(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ms(),Be(zt),Be(Ct),Ec(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return _c(r),null;case 13:if(Be(qe),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Ds()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Be(qe),null;case 4:return Ms(),null;case 10:return pc(r.type._context),null;case 22:case 23:return Zc(),null;case 24:return null;default:return null}}var Il=!1,xt=!1,$v=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Us(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Qe(t,r,u)}else o.current=null}function zc(t,r,o){try{o()}catch(u){Qe(t,r,u)}}var up=!1;function Hv(t,r){if(Zu=Dr,t=jd(),Wu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,E=-1,A=-1,b=0,H=0,W=t,$=null;t:for(;;){for(var ee;W!==o||h!==0&&W.nodeType!==3||(E=v+h),W!==p||u!==0&&W.nodeType!==3||(A=v+u),W.nodeType===3&&(v+=W.nodeValue.length),(ee=W.firstChild)!==null;)$=W,W=ee;for(;;){if(W===t)break t;if($===o&&++b===h&&(E=v),$===p&&++H===u&&(A=v),(ee=W.nextSibling)!==null)break;W=$,$=W.parentNode}W=ee}o=E===-1||A===-1?null:{start:E,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(ec={focusedElem:t,selectionRange:o},Dr=!1,ne=r;ne!==null;)if(r=ne,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ne=t;else for(;ne!==null;){r=ne;try{var re=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ie=re.memoizedProps,et=re.memoizedState,L=r.stateNode,R=L.getSnapshotBeforeUpdate(r.elementType===r.type?ie:An(r.type,ie),et);L.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(K){Qe(r,r.return,K)}if(t=r.sibling,t!==null){t.return=r.return,ne=t;break}ne=r.return}return re=up,up=!1,re}function Xo(t,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&t)===t){var p=h.destroy;h.destroy=void 0,p!==void 0&&zc(r,o,p)}h=h.next}while(h!==u)}}function Sl(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function Bc(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function cp(t){var r=t.alternate;r!==null&&(t.alternate=null,cp(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[zn],delete r[Fo],delete r[ic],delete r[kv],delete r[Cv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hp(t){return t.tag===5||t.tag===3||t.tag===4}function dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $c(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=tl));else if(u!==4&&(t=t.child,t!==null))for($c(t,r,o),t=t.sibling;t!==null;)$c(t,r,o),t=t.sibling}function Hc(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Hc(t,r,o),t=t.sibling;t!==null;)Hc(t,r,o),t=t.sibling}var _t=null,kn=!1;function zr(t,r,o){for(o=o.child;o!==null;)fp(t,r,o),o=o.sibling}function fp(t,r,o){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(yi,o)}catch{}switch(o.tag){case 5:xt||Us(o,r);case 6:var u=_t,h=kn;_t=null,zr(t,r,o),_t=u,kn=h,_t!==null&&(kn?(t=_t,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):_t.removeChild(o.stateNode));break;case 18:_t!==null&&(kn?(t=_t,o=o.stateNode,t.nodeType===8?rc(t.parentNode,o):t.nodeType===1&&rc(t,o),En(t)):rc(_t,o.stateNode));break;case 4:u=_t,h=kn,_t=o.stateNode.containerInfo,kn=!0,zr(t,r,o),_t=u,kn=h;break;case 0:case 11:case 14:case 15:if(!xt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var p=h,v=p.destroy;p=p.tag,v!==void 0&&(p&2||p&4)&&zc(o,r,v),h=h.next}while(h!==u)}zr(t,r,o);break;case 1:if(!xt&&(Us(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(E){Qe(o,r,E)}zr(t,r,o);break;case 21:zr(t,r,o);break;case 22:o.mode&1?(xt=(u=xt)||o.memoizedState!==null,zr(t,r,o),xt=u):zr(t,r,o);break;default:zr(t,r,o)}}function pp(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new $v),r.forEach(function(u){var h=Zv.bind(null,t,u);o.has(u)||(o.add(u),u.then(h,h))})}}function Cn(t,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var p=t,v=r,E=v;e:for(;E!==null;){switch(E.tag){case 5:_t=E.stateNode,kn=!1;break e;case 3:_t=E.stateNode.containerInfo,kn=!0;break e;case 4:_t=E.stateNode.containerInfo,kn=!0;break e}E=E.return}if(_t===null)throw Error(n(160));fp(p,v,h),_t=null,kn=!1;var A=h.alternate;A!==null&&(A.return=null),h.return=null}catch(b){Qe(h,r,b)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)mp(r,t),r=r.sibling}function mp(t,r){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(r,t),Hn(t),u&4){try{Xo(3,t,t.return),Sl(3,t)}catch(ie){Qe(t,t.return,ie)}try{Xo(5,t,t.return)}catch(ie){Qe(t,t.return,ie)}}break;case 1:Cn(r,t),Hn(t),u&512&&o!==null&&Us(o,o.return);break;case 5:if(Cn(r,t),Hn(t),u&512&&o!==null&&Us(o,o.return),t.flags&32){var h=t.stateNode;try{Sr(h,"")}catch(ie){Qe(t,t.return,ie)}}if(u&4&&(h=t.stateNode,h!=null)){var p=t.memoizedProps,v=o!==null?o.memoizedProps:p,E=t.type,A=t.updateQueue;if(t.updateQueue=null,A!==null)try{E==="input"&&p.type==="radio"&&p.name!=null&&oo(h,p),go(E,v);var b=go(E,p);for(v=0;v<A.length;v+=2){var H=A[v],W=A[v+1];H==="style"?fo(h,W):H==="dangerouslySetInnerHTML"?co(h,W):H==="children"?Sr(h,W):me(h,H,W,b)}switch(E){case"input":ao(h,p);break;case"textarea":es(h,p);break;case"select":var $=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!p.multiple;var ee=p.value;ee!=null?er(h,!!p.multiple,ee,!1):$!==!!p.multiple&&(p.defaultValue!=null?er(h,!!p.multiple,p.defaultValue,!0):er(h,!!p.multiple,p.multiple?[]:"",!1))}h[Fo]=p}catch(ie){Qe(t,t.return,ie)}}break;case 6:if(Cn(r,t),Hn(t),u&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,p=t.memoizedProps;try{h.nodeValue=p}catch(ie){Qe(t,t.return,ie)}}break;case 3:if(Cn(r,t),Hn(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{En(r.containerInfo)}catch(ie){Qe(t,t.return,ie)}break;case 4:Cn(r,t),Hn(t);break;case 13:Cn(r,t),Hn(t),h=t.child,h.flags&8192&&(p=h.memoizedState!==null,h.stateNode.isHidden=p,!p||h.alternate!==null&&h.alternate.memoizedState!==null||(qc=Ue())),u&4&&pp(t);break;case 22:if(H=o!==null&&o.memoizedState!==null,t.mode&1?(xt=(b=xt)||H,Cn(r,t),xt=b):Cn(r,t),Hn(t),u&8192){if(b=t.memoizedState!==null,(t.stateNode.isHidden=b)&&!H&&t.mode&1)for(ne=t,H=t.child;H!==null;){for(W=ne=H;ne!==null;){switch($=ne,ee=$.child,$.tag){case 0:case 11:case 14:case 15:Xo(4,$,$.return);break;case 1:Us($,$.return);var re=$.stateNode;if(typeof re.componentWillUnmount=="function"){u=$,o=$.return;try{r=u,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(ie){Qe(u,o,ie)}}break;case 5:Us($,$.return);break;case 22:if($.memoizedState!==null){vp(W);continue}}ee!==null?(ee.return=$,ne=ee):vp(W)}H=H.sibling}e:for(H=null,W=t;;){if(W.tag===5){if(H===null){H=W;try{h=W.stateNode,b?(p=h.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(E=W.stateNode,A=W.memoizedProps.style,v=A!=null&&A.hasOwnProperty("display")?A.display:null,E.style.display=ho("display",v))}catch(ie){Qe(t,t.return,ie)}}}else if(W.tag===6){if(H===null)try{W.stateNode.nodeValue=b?"":W.memoizedProps}catch(ie){Qe(t,t.return,ie)}}else if((W.tag!==22&&W.tag!==23||W.memoizedState===null||W===t)&&W.child!==null){W.child.return=W,W=W.child;continue}if(W===t)break e;for(;W.sibling===null;){if(W.return===null||W.return===t)break e;H===W&&(H=null),W=W.return}H===W&&(H=null),W.sibling.return=W.return,W=W.sibling}}break;case 19:Cn(r,t),Hn(t),u&4&&pp(t);break;case 21:break;default:Cn(r,t),Hn(t)}}function Hn(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(hp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Sr(h,""),u.flags&=-33);var p=dp(t);Hc(t,p,h);break;case 3:case 4:var v=u.stateNode.containerInfo,E=dp(t);$c(t,E,v);break;default:throw Error(n(161))}}catch(A){Qe(t,t.return,A)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Wv(t,r,o){ne=t,gp(t)}function gp(t,r,o){for(var u=(t.mode&1)!==0;ne!==null;){var h=ne,p=h.child;if(h.tag===22&&u){var v=h.memoizedState!==null||Il;if(!v){var E=h.alternate,A=E!==null&&E.memoizedState!==null||xt;E=Il;var b=xt;if(Il=v,(xt=A)&&!b)for(ne=h;ne!==null;)v=ne,A=v.child,v.tag===22&&v.memoizedState!==null?_p(h):A!==null?(A.return=v,ne=A):_p(h);for(;p!==null;)ne=p,gp(p),p=p.sibling;ne=h,Il=E,xt=b}yp(t)}else h.subtreeFlags&8772&&p!==null?(p.return=h,ne=p):yp(t)}}function yp(t){for(;ne!==null;){var r=ne;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:xt||Sl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!xt)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:An(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&vf(r,p,u);break;case 3:var v=r.updateQueue;if(v!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}vf(r,v,o)}break;case 5:var E=r.stateNode;if(o===null&&r.flags&4){o=E;var A=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&o.focus();break;case"img":A.src&&(o.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var b=r.alternate;if(b!==null){var H=b.memoizedState;if(H!==null){var W=H.dehydrated;W!==null&&En(W)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}xt||r.flags&512&&Bc(r)}catch($){Qe(r,r.return,$)}}if(r===t){ne=null;break}if(o=r.sibling,o!==null){o.return=r.return,ne=o;break}ne=r.return}}function vp(t){for(;ne!==null;){var r=ne;if(r===t){ne=null;break}var o=r.sibling;if(o!==null){o.return=r.return,ne=o;break}ne=r.return}}function _p(t){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Sl(4,r)}catch(A){Qe(r,o,A)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(A){Qe(r,h,A)}}var p=r.return;try{Bc(r)}catch(A){Qe(r,p,A)}break;case 5:var v=r.return;try{Bc(r)}catch(A){Qe(r,v,A)}}}catch(A){Qe(r,r.return,A)}if(r===t){ne=null;break}var E=r.sibling;if(E!==null){E.return=r.return,ne=E;break}ne=r.return}}var Gv=Math.ceil,Al=he.ReactCurrentDispatcher,Wc=he.ReactCurrentOwner,dn=he.ReactCurrentBatchConfig,Pe=0,dt=null,nt=null,wt=0,tn=0,Fs=Mr(0),lt=0,Yo=null,Ni=0,kl=0,Gc=0,Jo=null,Ht=null,qc=0,js=1/0,mr=null,Cl=!1,Kc=null,Br=null,Rl=!1,$r=null,Pl=0,Zo=0,Qc=null,xl=-1,Nl=0;function Ut(){return Pe&6?Ue():xl!==-1?xl:xl=Ue()}function Hr(t){return t.mode&1?Pe&2&&wt!==0?wt&-wt:Pv.transition!==null?(Nl===0&&(Nl=_i()),Nl):(t=Ae,t!==0||(t=window.event,t=t===void 0?16:Co(t.type)),t):1}function Rn(t,r,o,u){if(50<Zo)throw Zo=0,Qc=null,Error(n(185));Rr(t,o,u),(!(Pe&2)||t!==dt)&&(t===dt&&(!(Pe&2)&&(kl|=o),lt===4&&Wr(t,wt)),Wt(t,u),o===1&&Pe===0&&!(r.mode&1)&&(js=Ue()+500,sl&&Ur()))}function Wt(t,r){var o=t.callbackNode;rr(t,r);var u=vi(t,t===dt?wt:0);if(u===0)o!==null&&To(o),t.callbackNode=null,t.callbackPriority=0;else if(r=u&-u,t.callbackPriority!==r){if(o!=null&&To(o),r===1)t.tag===0?Rv(Ep.bind(null,t)):of(Ep.bind(null,t)),Sv(function(){!(Pe&6)&&Ur()}),o=null;else{switch(xr(u)){case 1:o=gi;break;case 4:o=Ar;break;case 16:o=sn;break;case 536870912:o=Na;break;default:o=sn}o=Pp(o,wp.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function wp(t,r){if(xl=-1,Nl=0,Pe&6)throw Error(n(327));var o=t.callbackNode;if(zs()&&t.callbackNode!==o)return null;var u=vi(t,t===dt?wt:0);if(u===0)return null;if(u&30||u&t.expiredLanes||r)r=Dl(t,u);else{r=u;var h=Pe;Pe|=2;var p=Ip();(dt!==t||wt!==r)&&(mr=null,js=Ue()+500,Oi(t,r));do try{Qv();break}catch(E){Tp(t,E)}while(!0);fc(),Al.current=p,Pe=h,nt!==null?r=0:(dt=null,wt=0,r=lt)}if(r!==0){if(r===2&&(h=Xt(t),h!==0&&(u=h,r=Xc(t,h))),r===1)throw o=Yo,Oi(t,0),Wr(t,u),Wt(t,Ue()),o;if(r===6)Wr(t,u);else{if(h=t.current.alternate,!(u&30)&&!qv(h)&&(r=Dl(t,u),r===2&&(p=Xt(t),p!==0&&(u=p,r=Xc(t,p))),r===1))throw o=Yo,Oi(t,0),Wr(t,u),Wt(t,Ue()),o;switch(t.finishedWork=h,t.finishedLanes=u,r){case 0:case 1:throw Error(n(345));case 2:Vi(t,Ht,mr);break;case 3:if(Wr(t,u),(u&130023424)===u&&(r=qc+500-Ue(),10<r)){if(vi(t,0)!==0)break;if(h=t.suspendedLanes,(h&u)!==u){Ut(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=nc(Vi.bind(null,t,Ht,mr),r);break}Vi(t,Ht,mr);break;case 4:if(Wr(t,u),(u&4194240)===u)break;for(r=t.eventTimes,h=-1;0<u;){var v=31-Lt(u);p=1<<v,v=r[v],v>h&&(h=v),u&=~p}if(u=h,u=Ue()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Gv(u/1960))-u,10<u){t.timeoutHandle=nc(Vi.bind(null,t,Ht,mr),u);break}Vi(t,Ht,mr);break;case 5:Vi(t,Ht,mr);break;default:throw Error(n(329))}}}return Wt(t,Ue()),t.callbackNode===o?wp.bind(null,t):null}function Xc(t,r){var o=Jo;return t.current.memoizedState.isDehydrated&&(Oi(t,r).flags|=256),t=Dl(t,r),t!==2&&(r=Ht,Ht=o,r!==null&&Yc(r)),t}function Yc(t){Ht===null?Ht=t:Ht.push.apply(Ht,t)}function qv(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],p=h.getSnapshot;h=h.value;try{if(!In(p(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Wr(t,r){for(r&=~Gc,r&=~kl,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Lt(r),u=1<<o;t[o]=-1,r&=~u}}function Ep(t){if(Pe&6)throw Error(n(327));zs();var r=vi(t,0);if(!(r&1))return Wt(t,Ue()),null;var o=Dl(t,r);if(t.tag!==0&&o===2){var u=Xt(t);u!==0&&(r=u,o=Xc(t,u))}if(o===1)throw o=Yo,Oi(t,0),Wr(t,r),Wt(t,Ue()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Vi(t,Ht,mr),Wt(t,Ue()),null}function Jc(t,r){var o=Pe;Pe|=1;try{return t(r)}finally{Pe=o,Pe===0&&(js=Ue()+500,sl&&Ur())}}function Di(t){$r!==null&&$r.tag===0&&!(Pe&6)&&zs();var r=Pe;Pe|=1;var o=dn.transition,u=Ae;try{if(dn.transition=null,Ae=1,t)return t()}finally{Ae=u,dn.transition=o,Pe=r,!(Pe&6)&&Ur()}}function Zc(){tn=Fs.current,Be(Fs)}function Oi(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Iv(o)),nt!==null)for(o=nt.return;o!==null;){var u=o;switch(lc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&rl();break;case 3:Ms(),Be(zt),Be(Ct),Ec();break;case 5:_c(u);break;case 4:Ms();break;case 13:Be(qe);break;case 19:Be(qe);break;case 10:pc(u.type._context);break;case 22:case 23:Zc()}o=o.return}if(dt=t,nt=t=Gr(t.current,null),wt=tn=r,lt=0,Yo=null,Gc=kl=Ni=0,Ht=Jo=null,Ri!==null){for(r=0;r<Ri.length;r++)if(o=Ri[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,p=o.pending;if(p!==null){var v=p.next;p.next=h,u.next=v}o.pending=u}Ri=null}return t}function Tp(t,r){do{var o=nt;try{if(fc(),ml.current=_l,gl){for(var u=Ke.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}gl=!1}if(xi=0,ht=at=Ke=null,Wo=!1,Go=0,Wc.current=null,o===null||o.return===null){lt=1,Yo=r,nt=null;break}e:{var p=t,v=o.return,E=o,A=r;if(r=wt,E.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var b=A,H=E,W=H.tag;if(!(H.mode&1)&&(W===0||W===11||W===15)){var $=H.alternate;$?(H.updateQueue=$.updateQueue,H.memoizedState=$.memoizedState,H.lanes=$.lanes):(H.updateQueue=null,H.memoizedState=null)}var ee=qf(v);if(ee!==null){ee.flags&=-257,Kf(ee,v,E,p,r),ee.mode&1&&Gf(p,b,r),r=ee,A=b;var re=r.updateQueue;if(re===null){var ie=new Set;ie.add(A),r.updateQueue=ie}else re.add(A);break e}else{if(!(r&1)){Gf(p,b,r),eh();break e}A=Error(n(426))}}else if(We&&E.mode&1){var et=qf(v);if(et!==null){!(et.flags&65536)&&(et.flags|=256),Kf(et,v,E,p,r),hc(bs(A,E));break e}}p=A=bs(A,E),lt!==4&&(lt=2),Jo===null?Jo=[p]:Jo.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var L=Hf(p,A,r);yf(p,L);break e;case 1:E=A;var R=p.type,M=p.stateNode;if(!(p.flags&128)&&(typeof R.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Br===null||!Br.has(M)))){p.flags|=65536,r&=-r,p.lanes|=r;var K=Wf(p,E,r);yf(p,K);break e}}p=p.return}while(p!==null)}Ap(o)}catch(oe){r=oe,nt===o&&o!==null&&(nt=o=o.return);continue}break}while(!0)}function Ip(){var t=Al.current;return Al.current=_l,t===null?_l:t}function eh(){(lt===0||lt===3||lt===2)&&(lt=4),dt===null||!(Ni&268435455)&&!(kl&268435455)||Wr(dt,wt)}function Dl(t,r){var o=Pe;Pe|=2;var u=Ip();(dt!==t||wt!==r)&&(mr=null,Oi(t,r));do try{Kv();break}catch(h){Tp(t,h)}while(!0);if(fc(),Pe=o,Al.current=u,nt!==null)throw Error(n(261));return dt=null,wt=0,lt}function Kv(){for(;nt!==null;)Sp(nt)}function Qv(){for(;nt!==null&&!Pa();)Sp(nt)}function Sp(t){var r=Rp(t.alternate,t,tn);t.memoizedProps=t.pendingProps,r===null?Ap(t):nt=r,Wc.current=null}function Ap(t){var r=t;do{var o=r.alternate;if(t=r.return,r.flags&32768){if(o=Bv(o,r),o!==null){o.flags&=32767,nt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{lt=6,nt=null;return}}else if(o=zv(o,r,tn),o!==null){nt=o;return}if(r=r.sibling,r!==null){nt=r;return}nt=r=t}while(r!==null);lt===0&&(lt=5)}function Vi(t,r,o){var u=Ae,h=dn.transition;try{dn.transition=null,Ae=1,Xv(t,r,o,u)}finally{dn.transition=h,Ae=u}return null}function Xv(t,r,o,u){do zs();while($r!==null);if(Pe&6)throw Error(n(327));o=t.finishedWork;var h=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(Me(t,p),t===dt&&(nt=dt=null,wt=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Rl||(Rl=!0,Pp(sn,function(){return zs(),null})),p=(o.flags&15990)!==0,o.subtreeFlags&15990||p){p=dn.transition,dn.transition=null;var v=Ae;Ae=1;var E=Pe;Pe|=4,Wc.current=null,Hv(t,o),mp(o,t),gv(ec),Dr=!!Zu,ec=Zu=null,t.current=o,Wv(o),bu(),Pe=E,Ae=v,dn.transition=p}else t.current=o;if(Rl&&(Rl=!1,$r=t,Pl=h),p=t.pendingLanes,p===0&&(Br=null),Da(o.stateNode),Wt(t,Ue()),r!==null)for(u=t.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Cl)throw Cl=!1,t=Kc,Kc=null,t;return Pl&1&&t.tag!==0&&zs(),p=t.pendingLanes,p&1?t===Qc?Zo++:(Zo=0,Qc=t):Zo=0,Ur(),null}function zs(){if($r!==null){var t=xr(Pl),r=dn.transition,o=Ae;try{if(dn.transition=null,Ae=16>t?16:t,$r===null)var u=!1;else{if(t=$r,$r=null,Pl=0,Pe&6)throw Error(n(331));var h=Pe;for(Pe|=4,ne=t.current;ne!==null;){var p=ne,v=p.child;if(ne.flags&16){var E=p.deletions;if(E!==null){for(var A=0;A<E.length;A++){var b=E[A];for(ne=b;ne!==null;){var H=ne;switch(H.tag){case 0:case 11:case 15:Xo(8,H,p)}var W=H.child;if(W!==null)W.return=H,ne=W;else for(;ne!==null;){H=ne;var $=H.sibling,ee=H.return;if(cp(H),H===b){ne=null;break}if($!==null){$.return=ee,ne=$;break}ne=ee}}}var re=p.alternate;if(re!==null){var ie=re.child;if(ie!==null){re.child=null;do{var et=ie.sibling;ie.sibling=null,ie=et}while(ie!==null)}}ne=p}}if(p.subtreeFlags&2064&&v!==null)v.return=p,ne=v;else e:for(;ne!==null;){if(p=ne,p.flags&2048)switch(p.tag){case 0:case 11:case 15:Xo(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,ne=L;break e}ne=p.return}}var R=t.current;for(ne=R;ne!==null;){v=ne;var M=v.child;if(v.subtreeFlags&2064&&M!==null)M.return=v,ne=M;else e:for(v=R;ne!==null;){if(E=ne,E.flags&2048)try{switch(E.tag){case 0:case 11:case 15:Sl(9,E)}}catch(oe){Qe(E,E.return,oe)}if(E===v){ne=null;break e}var K=E.sibling;if(K!==null){K.return=E.return,ne=K;break e}ne=E.return}}if(Pe=h,Ur(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(yi,t)}catch{}u=!0}return u}finally{Ae=o,dn.transition=r}}return!1}function kp(t,r,o){r=bs(o,r),r=Hf(t,r,1),t=jr(t,r,1),r=Ut(),t!==null&&(Rr(t,1,r),Wt(t,r))}function Qe(t,r,o){if(t.tag===3)kp(t,t,o);else for(;r!==null;){if(r.tag===3){kp(r,t,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Br===null||!Br.has(u))){t=bs(o,t),t=Wf(r,t,1),r=jr(r,t,1),t=Ut(),r!==null&&(Rr(r,1,t),Wt(r,t));break}}r=r.return}}function Yv(t,r,o){var u=t.pingCache;u!==null&&u.delete(r),r=Ut(),t.pingedLanes|=t.suspendedLanes&o,dt===t&&(wt&o)===o&&(lt===4||lt===3&&(wt&130023424)===wt&&500>Ue()-qc?Oi(t,0):Gc|=o),Wt(t,r)}function Cp(t,r){r===0&&(t.mode&1?(r=cs,cs<<=1,!(cs&130023424)&&(cs=4194304)):r=1);var o=Ut();t=dr(t,r),t!==null&&(Rr(t,r,o),Wt(t,o))}function Jv(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Cp(t,o)}function Zv(t,r){var o=0;switch(t.tag){case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(r),Cp(t,o)}var Rp;Rp=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||zt.current)$t=!0;else{if(!(t.lanes&o)&&!(r.flags&128))return $t=!1,jv(t,r,o);$t=!!(t.flags&131072)}else $t=!1,We&&r.flags&1048576&&af(r,al,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Tl(t,r),t=r.pendingProps;var h=Ps(r,Ct.current);Ls(r,o),h=Sc(null,r,u,t,h,o);var p=Ac();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Bt(u)?(p=!0,il(r)):p=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,yc(r),h.updater=wl,r.stateNode=h,h._reactInternals=r,Nc(r,u,t,o),r=Lc(null,r,u,!0,p,o)):(r.tag=0,We&&p&&ac(r),bt(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(Tl(t,r),t=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=t0(u),t=An(u,t),h){case 0:r=Vc(null,r,u,t,o);break e;case 1:r=ep(null,r,u,t,o);break e;case 11:r=Qf(null,r,u,t,o);break e;case 14:r=Xf(null,r,u,An(u.type,t),o);break e}throw Error(n(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:An(u,h),Vc(t,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:An(u,h),ep(t,r,u,h,o);case 3:e:{if(tp(r),t===null)throw Error(n(387));u=r.pendingProps,p=r.memoizedState,h=p.element,gf(t,r),fl(r,u,null,o);var v=r.memoizedState;if(u=v.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){h=bs(Error(n(423)),r),r=np(t,r,u,o,h);break e}else if(u!==h){h=bs(Error(n(424)),r),r=np(t,r,u,o,h);break e}else for(en=Lr(r.stateNode.containerInfo.firstChild),Zt=r,We=!0,Sn=null,o=pf(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ds(),u===h){r=pr(t,r,o);break e}bt(t,r,u,o)}r=r.child}return r;case 5:return _f(r),t===null&&cc(r),u=r.type,h=r.pendingProps,p=t!==null?t.memoizedProps:null,v=h.children,tc(u,h)?v=null:p!==null&&tc(u,p)&&(r.flags|=32),Zf(t,r),bt(t,r,v,o),r.child;case 6:return t===null&&cc(r),null;case 13:return rp(t,r,o);case 4:return vc(r,r.stateNode.containerInfo),u=r.pendingProps,t===null?r.child=Os(r,null,u,o):bt(t,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:An(u,h),Qf(t,r,u,h,o);case 7:return bt(t,r,r.pendingProps,o),r.child;case 8:return bt(t,r,r.pendingProps.children,o),r.child;case 12:return bt(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,p=r.memoizedProps,v=h.value,Fe(cl,u._currentValue),u._currentValue=v,p!==null)if(In(p.value,v)){if(p.children===h.children&&!zt.current){r=pr(t,r,o);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var E=p.dependencies;if(E!==null){v=p.child;for(var A=E.firstContext;A!==null;){if(A.context===u){if(p.tag===1){A=fr(-1,o&-o),A.tag=2;var b=p.updateQueue;if(b!==null){b=b.shared;var H=b.pending;H===null?A.next=A:(A.next=H.next,H.next=A),b.pending=A}}p.lanes|=o,A=p.alternate,A!==null&&(A.lanes|=o),mc(p.return,o,r),E.lanes|=o;break}A=A.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(n(341));v.lanes|=o,E=v.alternate,E!==null&&(E.lanes|=o),mc(v,o,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}bt(t,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Ls(r,o),h=cn(h),u=u(h),r.flags|=1,bt(t,r,u,o),r.child;case 14:return u=r.type,h=An(u,r.pendingProps),h=An(u.type,h),Xf(t,r,u,h,o);case 15:return Yf(t,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:An(u,h),Tl(t,r),r.tag=1,Bt(u)?(t=!0,il(r)):t=!1,Ls(r,o),Bf(r,u,h),Nc(r,u,h,o),Lc(null,r,u,!0,t,o);case 19:return sp(t,r,o);case 22:return Jf(t,r,o)}throw Error(n(156,r.tag))};function Pp(t,r){return ls(t,r)}function e0(t,r,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(t,r,o,u){return new e0(t,r,o,u)}function th(t){return t=t.prototype,!(!t||!t.isReactComponent)}function t0(t){if(typeof t=="function")return th(t)?1:0;if(t!=null){if(t=t.$$typeof,t===O)return 11;if(t===At)return 14}return 2}function Gr(t,r){var o=t.alternate;return o===null?(o=fn(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ol(t,r,o,u,h,p){var v=2;if(u=t,typeof t=="function")th(t)&&(v=1);else if(typeof t=="string")v=5;else e:switch(t){case P:return Li(o.children,h,p,r);case T:v=8,h|=8;break;case S:return t=fn(12,o,r,h|2),t.elementType=S,t.lanes=p,t;case I:return t=fn(13,o,r,h),t.elementType=I,t.lanes=p,t;case Je:return t=fn(19,o,r,h),t.elementType=Je,t.lanes=p,t;case Le:return Vl(o,h,p,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:v=10;break e;case x:v=9;break e;case O:v=11;break e;case At:v=14;break e;case kt:v=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=fn(v,o,r,h),r.elementType=t,r.type=u,r.lanes=p,r}function Li(t,r,o,u){return t=fn(7,t,u,r),t.lanes=o,t}function Vl(t,r,o,u){return t=fn(22,t,u,r),t.elementType=Le,t.lanes=o,t.stateNode={isHidden:!1},t}function nh(t,r,o){return t=fn(6,t,null,r),t.lanes=o,t}function rh(t,r,o){return r=fn(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function n0(t,r,o,u,h){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cr(0),this.expirationTimes=Cr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cr(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function ih(t,r,o,u,h,p,v,E,A){return t=new n0(t,r,o,E,A),r===1?(r=1,p===!0&&(r|=8)):r=0,p=fn(3,null,null,r),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(p),t}function r0(t,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:u==null?null:""+u,children:t,containerInfo:r,implementation:o}}function xp(t){if(!t)return br;t=t._reactInternals;e:{if(gn(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Bt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Bt(o))return rf(t,o,r)}return r}function Np(t,r,o,u,h,p,v,E,A){return t=ih(o,u,!0,t,h,p,v,E,A),t.context=xp(null),o=t.current,u=Ut(),h=Hr(o),p=fr(u,h),p.callback=r??null,jr(o,p,h),t.current.lanes=h,Rr(t,h,u),Wt(t,u),t}function Ll(t,r,o,u){var h=r.current,p=Ut(),v=Hr(h);return o=xp(o),r.context===null?r.context=o:r.pendingContext=o,r=fr(p,v),r.payload={element:t},u=u===void 0?null:u,u!==null&&(r.callback=u),t=jr(h,r,v),t!==null&&(Rn(t,h,v,p),dl(t,h,v)),v}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dp(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function sh(t,r){Dp(t,r),(t=t.alternate)&&Dp(t,r)}var Op=typeof reportError=="function"?reportError:function(t){console.error(t)};function oh(t){this._internalRoot=t}bl.prototype.render=oh.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Ll(t,r,null,null)},bl.prototype.unmount=oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Di(function(){Ll(null,t,null,null)}),r[lr]=null}};function bl(t){this._internalRoot=t}bl.prototype.unstable_scheduleHydration=function(t){if(t){var r=ba();t={blockedOn:null,target:t,priority:r};for(var o=0;o<bn.length&&r!==0&&r<bn[o].priority;o++);bn.splice(o,0,t),o===0&&ja(t)}};function ah(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function i0(t,r,o,u,h){if(h){if(typeof u=="function"){var p=u;u=function(){var b=Ml(v);p.call(b)}}var v=Np(r,u,t,0,null,!1,!1,"",Vp);return t._reactRootContainer=v,t[lr]=v.current,bo(t.nodeType===8?t.parentNode:t),Di(),v}for(;h=t.lastChild;)t.removeChild(h);if(typeof u=="function"){var E=u;u=function(){var b=Ml(A);E.call(b)}}var A=ih(t,0,!1,null,null,!1,!1,"",Vp);return t._reactRootContainer=A,t[lr]=A.current,bo(t.nodeType===8?t.parentNode:t),Di(function(){Ll(r,A,o,u)}),A}function Fl(t,r,o,u,h){var p=o._reactRootContainer;if(p){var v=p;if(typeof h=="function"){var E=h;h=function(){var A=Ml(v);E.call(A)}}Ll(r,v,t,h)}else v=i0(o,r,t,h,u);return Ml(v)}La=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=kr(r.pendingLanes);o!==0&&(Pr(r,o|1),Wt(r,Ue()),!(Pe&6)&&(js=Ue()+500,Ur()))}break;case 13:Di(function(){var u=dr(t,1);if(u!==null){var h=Ut();Rn(u,t,1,h)}}),sh(t,1)}},hs=function(t){if(t.tag===13){var r=dr(t,134217728);if(r!==null){var o=Ut();Rn(r,t,134217728,o)}sh(t,134217728)}},Ma=function(t){if(t.tag===13){var r=Hr(t),o=dr(t,r);if(o!==null){var u=Ut();Rn(o,t,r,u)}sh(t,r)}},ba=function(){return Ae},Ua=function(t,r){var o=Ae;try{return Ae=t,r()}finally{Ae=o}},ns=function(t,r,o){switch(r){case"input":if(ao(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==t&&u.form===t.form){var h=nl(u);if(!h)throw Error(n(90));Xi(u),ao(u,h)}}}break;case"textarea":es(t,o);break;case"select":r=o.value,r!=null&&er(t,!!o.multiple,r,!1)}},di=Jc,vo=Di;var s0={usingClientEntryPoint:!1,Events:[jo,Cs,nl,Ln,yo,Jc]},ea={findFiberByHostInstance:Si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},o0={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:he.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Eo(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{yi=jl.inject(o0),Qt=jl}catch{}}return Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s0,Gt.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ah(r))throw Error(n(200));return r0(t,r,null,o)},Gt.createRoot=function(t,r){if(!ah(t))throw Error(n(299));var o=!1,u="",h=Op;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=ih(t,1,!1,null,null,o,!1,u,h),t[lr]=r.current,bo(t.nodeType===8?t.parentNode:t),new oh(r)},Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Eo(r),t=t===null?null:t.stateNode,t},Gt.flushSync=function(t){return Di(t)},Gt.hydrate=function(t,r,o){if(!Ul(r))throw Error(n(200));return Fl(null,t,r,!0,o)},Gt.hydrateRoot=function(t,r,o){if(!ah(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,h=!1,p="",v=Op;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),r=Np(r,null,t,1,o??null,h,!1,p,v),t[lr]=r.current,bo(t),u)for(t=0;t<u.length;t++)o=u[t],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new bl(r)},Gt.render=function(t,r,o){if(!Ul(r))throw Error(n(200));return Fl(null,t,r,!1,o)},Gt.unmountComponentAtNode=function(t){if(!Ul(t))throw Error(n(40));return t._reactRootContainer?(Di(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1},Gt.unstable_batchedUpdates=Jc,Gt.unstable_renderSubtreeIntoContainer=function(t,r,o,u){if(!Ul(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Fl(t,r,o,!1,u)},Gt.version="18.3.1-next-f1338f8080-20240426",Gt}var Bp;function p0(){if(Bp)return ch.exports;Bp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),ch.exports=f0(),ch.exports}var $p;function m0(){if($p)return zl;$p=1;var i=p0();return zl.createRoot=i.createRoot,zl.hydrateRoot=i.hydrateRoot,zl}var g0=m0();const y0="modulepreload",v0=function(i){return"/"+i},Hp={},_0=function(e,n,s){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),g=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=Promise.allSettled(n.map(y=>{if(y=v0(y),y in Hp)return;Hp[y]=!0;const w=y.endsWith(".css"),k=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${k}`))return;const N=document.createElement("link");if(N.rel=w?"stylesheet":y0,w||(N.as="script"),N.crossOrigin="",N.href=y,g&&N.setAttribute("nonce",g),document.head.appendChild(N),w)return new Promise((j,G)=>{N.addEventListener("load",j),N.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${y}`)))})}))}function c(d){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=d,window.dispatchEvent(g),!g.defaultPrevented)throw d}return a.then(d=>{for(const g of d||[])g.status==="rejected"&&c(g.reason);return e().catch(c)})},w0="/assets/mainphoto-DjVq8O6n.webp",E0="/assets/mymap-DC3YhOD3.png",T0="/assets/villadegd-j-iV3sSv.png",I0="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3cpath%20fill='none'%20d='M0%200h24v24H0z'/%3e%3cpath%20d='M12%203c5.799%200%2010.5%203.664%2010.5%208.185%200%204.52-4.701%208.184-10.5%208.184a13.5%2013.5%200%200%201-1.727-.11l-4.408%202.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5%206.665%206.201%203%2012%203zm5.907%208.06l1.47-1.424a.472.472%200%200%200-.656-.678l-1.928%201.866V9.282a.472.472%200%200%200-.944%200v2.557a.471.471%200%200%200%200%20.222V13.5a.472.472%200%200%200%20.944%200v-1.363l.427-.413%201.428%202.033a.472.472%200%201%200%20.773-.543l-1.514-2.155zm-2.958%201.924h-1.46V9.297a.472.472%200%200%200-.943%200v4.159c0%20.26.21.472.471.472h1.932a.472.472%200%201%200%200-.944zm-5.857-1.092l.696-1.707.638%201.707H9.092zm2.523.488l.002-.016a.469.469%200%200%200-.127-.32l-1.046-2.8a.69.69%200%200%200-.627-.474.696.696%200%200%200-.653.447l-1.661%204.075a.472.472%200%200%200%20.874.357l.33-.813h2.07l.299.8a.472.472%200%201%200%20.884-.33l-.345-.926zM8.293%209.302a.472.472%200%200%200-.471-.472H4.577a.472.472%200%201%200%200%20.944h1.16v3.736a.472.472%200%200%200%20.944%200V9.774h1.14c.261%200%20.472-.212.472-.472z'/%3e%3c/g%3e%3c/svg%3e",S0="/assets/audio-B2WamBm3.svg",A0="/assets/link-CkZk0x0J.png",fh=({tr_type:i})=>{var e=i,n="";return i==="bus"?(e="🚍버스",n=`지선버스<br/>2011, 3414, 6411, 3219, 4412, 3412, 3422<br/><br/>
간선버스<br/>141, 401, 640, 472, 147, 301, 241B, 241A, 240<br/><br/>
순환버스 : 41<br/>
마을버스 : 강남08<br/>
공항버스 : 6704`):i==="metro"?(e="🚊지하철",n=`7호선 강남구청역 2번 출구 7분거리 내외<br/>
(2번 출구에서 예식 당일 셔틀버스 운행)<br/>
7호선 학동역 1번 출구 10분거리 내외`):i==="car"&&(e="🚘자동차",n="서울 강남구 언주로 126길 23 (논현동)"),F.jsxs("div",{children:[F.jsxs("div",{style:{fontFamily:"Ej-medium"},children:[e,"로 오시는 분들"]}),F.jsx("div",{style:{fontFamily:"Ej-demilight"},children:F.jsx("div",{dangerouslySetInnerHTML:{__html:n}})}),F.jsx("br",{})]})},k0=()=>{const i=["일","월","화","수","목","금","토"],n=new Date(2025,6,1).getDay(),s=[];for(let c=0;c<n;c++)s.push(F.jsx("td",{},`empty-${c}`));for(let c=1;c<=31;c++)s.push(F.jsx("td",{className:c===13?"special-day":"",children:c},c));const a=[];for(let c=0;c<s.length;c+=7){const d=s.slice(c,c+7);a.push(F.jsx("tr",{children:d.map((g,y)=>F.jsx("td",{className:g.key==="13"?"special-day":y===0?"sunday":"",children:g.props.children},y))},`row-${c}`))}return F.jsx("div",{style:{display:"flex",justifyContent:"center"},children:F.jsxs("table",{className:"calendar",children:[F.jsx("thead",{children:F.jsx("tr",{children:i.map((c,d)=>F.jsx("th",{className:d===0?"sunday":"",children:c},d))})}),F.jsx("tbody",{children:a})]})})},Wp=({children:i})=>F.jsx("div",{children:F.jsx("p",{style:{fontSize:"30px",fontFamily:"MaruBuriBold"},children:i})}),C0="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2064%2064'%20enable-background='new%200%200%2064%2064'%20xml:space='preserve'%3e%3cg%20id='Text-files'%3e%3cpath%20d='M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228%20C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999%20c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64%20h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002%20C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z%20M7.1110516,51.8661003V5.0228%20c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999%20c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z%20M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699%20c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946%20c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999%20h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z'/%3e%3cpath%20d='M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005%20c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997%20C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z'/%3e%3cpath%20d='M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986%20c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016%20C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z'/%3e%3cpath%20d='M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997%20s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997%20S39.16465,29.4603004,38.6031494,29.4603004z'/%3e%3cpath%20d='M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997%20s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997%20S29.0059509,37.5872993,28.4444485,37.5872993z'/%3e%3c/g%3e%3c/svg%3e",R0=({src:i})=>{const e=s=>{navigator.clipboard.writeText(s),alert("계좌가 복사되었습니다.")},n={mother:["조민경","신한은행","110000748757"],father:["안동열","농협은행","40114752101326"],me:["안지연","국민은행","89090100071341"]};return i==="M"&&(n.mother=["유병희","국민은행","293210131434"],n.father=["이종면","국민은행","165210102195"],n.me=["이태우","국민은행","39280104181777"]),F.jsx("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},children:["mother","father","me"].map((s,a)=>F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",textAlign:"left",borderRadius:"12px",padding:"12px",margin:"12px"},children:[F.jsxs("div",{children:[F.jsx("p",{style:{fontFamily:"MaruBuriLight",fontSize:"18px",marginTop:"0px"},children:n[s][0]}),F.jsxs("div",{style:{fontSize:"13px"},children:[n[s][1]," ",n[s][2]]})]}),F.jsx("div",{style:{width:"5vw"}}),F.jsxs("button",{onClick:()=>e(n[s][2]),style:{backgroundColor:"rgb(249, 246, 242)",color:"black",border:"1px solid rgb(197, 219, 238)",padding:"6px",borderRadius:"5px"},children:[F.jsx("img",{src:C0,width:"11px"}),F.jsx("span",{style:{marginLeft:"10px",marginRight:"5px",fontSize:"11px"},children:"복사"})]})]},a))})},ph=({isOpen:i,onClose:e,children:n,mystyle:s})=>i.isopen?F.jsx("div",{className:"modal-overlay",onClick:e,children:F.jsx("div",{style:s,className:"modal-content",onClick:a=>a.stopPropagation(),children:n})}):null;function P0(){Kakao.Share.sendDefault({objectType:"feed",content:{title:"안지연❤이태우",description:"7월 13일 안찌와 태우스의 결혼식으로 초대합니다",imageUrl:"https://teusee.github.io/assets/kakao_photo-DDb0D4Uw.webp",link:{mobileWebUrl:"https://teusee.github.io",webUrl:"https://teusee.github.io"}},buttons:[{title:"청첩장",link:{mobileWebUrl:"https://teusee.github.io",webUrl:"https://teusee.github.io"}},{title:"위치",link:{mobileWebUrl:"https://naver.me/FRLNVrm6",webUrl:"https://naver.me/FRLNVrm6"}}]})}var x0=Object.defineProperty,N0=(i,e,n)=>e in i?x0(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,Bl=(i,e,n)=>N0(i,typeof e!="symbol"?e+"":e,n),Ah=new Map,$l=new WeakMap,Gp=0,D0=void 0;function O0(i){return i?($l.has(i)||(Gp+=1,$l.set(i,Gp.toString())),$l.get(i)):"0"}function V0(i){return Object.keys(i).sort().filter(e=>i[e]!==void 0).map(e=>`${e}_${e==="root"?O0(i.root):i[e]}`).toString()}function L0(i){const e=V0(i);let n=Ah.get(e);if(!n){const s=new Map;let a;const c=new IntersectionObserver(d=>{d.forEach(g=>{var y;const w=g.isIntersecting&&a.some(k=>g.intersectionRatio>=k);i.trackVisibility&&typeof g.isVisible>"u"&&(g.isVisible=w),(y=s.get(g.target))==null||y.forEach(k=>{k(w,g)})})},i);a=c.thresholds||(Array.isArray(i.threshold)?i.threshold:[i.threshold||0]),n={id:e,observer:c,elements:s},Ah.set(e,n)}return n}function M0(i,e,n={},s=D0){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const y=i.getBoundingClientRect();return e(s,{isIntersecting:s,target:i,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:y,intersectionRect:y,rootBounds:y}),()=>{}}const{id:a,observer:c,elements:d}=L0(n),g=d.get(i)||[];return d.has(i)||d.set(i,g),g.push(e),c.observe(i),function(){g.splice(g.indexOf(e),1),g.length===0&&(d.delete(i),c.unobserve(i)),d.size===0&&(c.disconnect(),Ah.delete(a))}}function b0(i){return typeof i.children!="function"}var U0=class extends nn.Component{constructor(i){super(i),Bl(this,"node",null),Bl(this,"_unobserveCb",null),Bl(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),Bl(this,"handleChange",(e,n)=>{e&&this.props.triggerOnce&&this.unobserve(),b0(this.props)||this.setState({inView:e,entry:n}),this.props.onChange&&this.props.onChange(e,n)}),this.state={inView:!!i.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(i){(i.rootMargin!==this.props.rootMargin||i.root!==this.props.root||i.threshold!==this.props.threshold||i.skip!==this.props.skip||i.trackVisibility!==this.props.trackVisibility||i.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:i,root:e,rootMargin:n,trackVisibility:s,delay:a,fallbackInView:c}=this.props;this._unobserveCb=M0(this.node,this.handleChange,{threshold:i,root:e,rootMargin:n,trackVisibility:s,delay:a},c)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:i}=this.props;if(typeof i=="function"){const{inView:G,entry:Y}=this.state;return i({inView:G,entry:Y,ref:this.handleNode})}const{as:e,triggerOnce:n,threshold:s,root:a,rootMargin:c,onChange:d,skip:g,trackVisibility:y,delay:w,initialInView:k,fallbackInView:N,...j}=this.props;return nn.createElement(e||"div",{ref:this.handleNode,...j},i)}};const Kr=({children:i,debug:e})=>F.jsx(U0,{triggerOnce:!0,initialInView:!1,threshold:.75,delay:400,children:({inView:n,ref:s})=>F.jsx("div",{ref:s,children:n?F.jsx("div",{className:"fade-in",style:{border:e},children:i}):F.jsx("div",{style:{visibility:"hidden"},children:i})})}),F0="/assets/background_music-Cy1_sw8p.weba",j0=()=>{};var qp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},z0=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[n++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[n++],d=i[n++],g=i[n++],y=((a&7)<<18|(c&63)<<12|(d&63)<<6|g&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const c=i[n++],d=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|d&63)}}return e.join("")},ug={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],d=a+1<i.length,g=d?i[a+1]:0,y=a+2<i.length,w=y?i[a+2]:0,k=c>>2,N=(c&3)<<4|g>>4;let j=(g&15)<<2|w>>6,G=w&63;y||(G=64,d||(j=64)),s.push(n[k],n[N],n[j],n[G])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(lg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):z0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=n[i.charAt(a++)],g=a<i.length?n[i.charAt(a)]:0;++a;const w=a<i.length?n[i.charAt(a)]:64;++a;const N=a<i.length?n[i.charAt(a)]:64;if(++a,c==null||g==null||w==null||N==null)throw new B0;const j=c<<2|g>>4;if(s.push(j),w!==64){const G=g<<4&240|w>>2;if(s.push(G),N!==64){const Y=w<<6&192|N;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class B0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $0=function(i){const e=lg(i);return ug.encodeByteArray(e,!0)},iu=function(i){return $0(i).replace(/\./g,"")},cg=function(i){try{return ug.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=()=>H0().__FIREBASE_DEFAULTS__,G0=()=>{if(typeof process>"u"||typeof qp>"u")return;const i=qp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},q0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&cg(i[1]);return e&&JSON.parse(e)},Su=()=>{try{return j0()||W0()||G0()||q0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},hg=i=>{var e,n;return(n=(e=Su())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},K0=i=>{const e=hg(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},dg=()=>{var i;return(i=Su())===null||i===void 0?void 0:i.config},fg=i=>{var e;return(e=Su())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[iu(JSON.stringify(n)),iu(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Y0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function J0(){var i;const e=(i=Su())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Z0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function e_(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function t_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n_(){const i=Vt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function r_(){return!J0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function i_(){try{return typeof indexedDB=="object"}catch{return!1}}function s_(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="FirebaseError";class Tr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=o_,Object.setPrototypeOf(this,Tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ga.prototype.create)}}class ga{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],d=c?a_(c,s):"Error",g=`${this.serviceName}: ${d} (${a}).`;return new Tr(a,g,s)}}function a_(i,e){return i.replace(l_,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const l_=/\{\$([^}]+)}/g;function u_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function zi(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const c=i[a],d=e[a];if(Kp(c)&&Kp(d)){if(!zi(c,d))return!1}else if(c!==d)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function Kp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function c_(i,e){const n=new h_(i,e);return n.subscribe.bind(n)}class h_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");d_(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=mh),a.error===void 0&&(a.error=mh),a.complete===void 0&&(a.complete=mh);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d_(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function mh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(i){return i&&i._delegate?i._delegate:i}class Bi{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Q0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(m_(e))try{this.getOrInitializeService({instanceIdentifier:Mi})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=Mi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mi){return this.instances.has(e)}getOptions(e=Mi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,d]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&d.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(a,c);const d=this.instances.get(a);return d&&e(d,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:p_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Mi){return this.component?this.component.multipleInstances?e:Mi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p_(i){return i===Mi?void 0:i}function m_(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new f_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ie||(Ie={}));const y_={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},v_=Ie.INFO,__={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},w_=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=__[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kh{constructor(e){this.name=e,this._logLevel=v_,this._logHandler=w_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?y_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const E_=(i,e)=>e.some(n=>i instanceof n);let Qp,Xp;function T_(){return Qp||(Qp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I_(){return Xp||(Xp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pg=new WeakMap,kh=new WeakMap,mg=new WeakMap,gh=new WeakMap,Qh=new WeakMap;function S_(i){const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",d)},c=()=>{n(ei(i.result)),a()},d=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&pg.set(n,i)}).catch(()=>{}),Qh.set(e,i),e}function A_(i){if(kh.has(i))return;const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",d),i.removeEventListener("abort",d)},c=()=>{n(),a()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",d),i.addEventListener("abort",d)});kh.set(i,e)}let Ch={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return kh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||mg.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ei(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function k_(i){Ch=i(Ch)}function C_(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(yh(this),e,...n);return mg.set(s,e.sort?e.sort():[e]),ei(s)}:I_().includes(i)?function(...e){return i.apply(yh(this),e),ei(pg.get(this))}:function(...e){return ei(i.apply(yh(this),e))}}function R_(i){return typeof i=="function"?C_(i):(i instanceof IDBTransaction&&A_(i),E_(i,T_())?new Proxy(i,Ch):i)}function ei(i){if(i instanceof IDBRequest)return S_(i);if(gh.has(i))return gh.get(i);const e=R_(i);return e!==i&&(gh.set(i,e),Qh.set(e,i)),e}const yh=i=>Qh.get(i);function P_(i,e,{blocked:n,upgrade:s,blocking:a,terminated:c}={}){const d=indexedDB.open(i,e),g=ei(d);return s&&d.addEventListener("upgradeneeded",y=>{s(ei(d.result),y.oldVersion,y.newVersion,ei(d.transaction),y)}),n&&d.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),g.then(y=>{c&&y.addEventListener("close",()=>c()),a&&y.addEventListener("versionchange",w=>a(w.oldVersion,w.newVersion,w))}).catch(()=>{}),g}const x_=["get","getKey","getAll","getAllKeys","count"],N_=["put","add","delete","clear"],vh=new Map;function Yp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(vh.get(e))return vh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=N_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||x_.includes(n)))return;const c=async function(d,...g){const y=this.transaction(d,a?"readwrite":"readonly");let w=y.store;return s&&(w=w.index(g.shift())),(await Promise.all([w[n](...g),a&&y.done]))[0]};return vh.set(e,c),c}k_(i=>({...i,get:(e,n,s)=>Yp(e,n)||i.get(e,n,s),has:(e,n)=>!!Yp(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(O_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function O_(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rh="@firebase/app",Jp="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Kh("@firebase/app"),V_="@firebase/app-compat",L_="@firebase/analytics-compat",M_="@firebase/analytics",b_="@firebase/app-check-compat",U_="@firebase/app-check",F_="@firebase/auth",j_="@firebase/auth-compat",z_="@firebase/database",B_="@firebase/data-connect",$_="@firebase/database-compat",H_="@firebase/functions",W_="@firebase/functions-compat",G_="@firebase/installations",q_="@firebase/installations-compat",K_="@firebase/messaging",Q_="@firebase/messaging-compat",X_="@firebase/performance",Y_="@firebase/performance-compat",J_="@firebase/remote-config",Z_="@firebase/remote-config-compat",e1="@firebase/storage",t1="@firebase/storage-compat",n1="@firebase/firestore",r1="@firebase/vertexai",i1="@firebase/firestore-compat",s1="firebase",o1="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="[DEFAULT]",a1={[Rh]:"fire-core",[V_]:"fire-core-compat",[M_]:"fire-analytics",[L_]:"fire-analytics-compat",[U_]:"fire-app-check",[b_]:"fire-app-check-compat",[F_]:"fire-auth",[j_]:"fire-auth-compat",[z_]:"fire-rtdb",[B_]:"fire-data-connect",[$_]:"fire-rtdb-compat",[H_]:"fire-fn",[W_]:"fire-fn-compat",[G_]:"fire-iid",[q_]:"fire-iid-compat",[K_]:"fire-fcm",[Q_]:"fire-fcm-compat",[X_]:"fire-perf",[Y_]:"fire-perf-compat",[J_]:"fire-rc",[Z_]:"fire-rc-compat",[e1]:"fire-gcs",[t1]:"fire-gcs-compat",[n1]:"fire-fst",[i1]:"fire-fst-compat",[r1]:"fire-vertex","fire-js":"fire-js",[s1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=new Map,l1=new Map,xh=new Map;function Zp(i,e){try{i.container.addComponent(e)}catch(n){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Qs(i){const e=i.name;if(xh.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;xh.set(e,i);for(const n of su.values())Zp(n,i);for(const n of l1.values())Zp(n,i);return!0}function Xh(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Gn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ti=new ga("app","Firebase",u1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ti.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=o1;function gg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ph,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw ti.create("bad-app-name",{appName:String(a)});if(n||(n=dg()),!n)throw ti.create("no-options");const c=su.get(a);if(c){if(zi(n,c.options)&&zi(s,c.config))return c;throw ti.create("duplicate-app",{appName:a})}const d=new g_(a);for(const y of xh.values())d.addComponent(y);const g=new c1(n,s,d);return su.set(a,g),g}function yg(i=Ph){const e=su.get(i);if(!e&&i===Ph&&dg())return gg();if(!e)throw ti.create("no-app",{appName:i});return e}function ni(i,e,n){var s;let a=(s=a1[i])!==null&&s!==void 0?s:i;n&&(a+=`-${n}`);const c=a.match(/\s|\//),d=e.match(/\s|\//);if(c||d){const g=[`Unable to register library "${a}" with version "${e}":`];c&&g.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&d&&g.push("and"),d&&g.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(g.join(" "));return}Qs(new Bi(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="firebase-heartbeat-database",d1=1,ua="firebase-heartbeat-store";let _h=null;function vg(){return _h||(_h=P_(h1,d1,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ua)}catch(n){console.warn(n)}}}}).catch(i=>{throw ti.create("idb-open",{originalErrorMessage:i.message})})),_h}async function f1(i){try{const n=(await vg()).transaction(ua),s=await n.objectStore(ua).get(_g(i));return await n.done,s}catch(e){if(e instanceof Tr)_r.warn(e.message);else{const n=ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_r.warn(n.message)}}}async function em(i,e){try{const s=(await vg()).transaction(ua,"readwrite");await s.objectStore(ua).put(e,_g(i)),await s.done}catch(n){if(n instanceof Tr)_r.warn(n.message);else{const s=ti.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_r.warn(s.message)}}}function _g(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=1024,m1=30;class g1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new v1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=tm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats.length>m1){const d=_1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){_r.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tm(),{heartbeatsToSend:s,unsentEntries:a}=y1(this._heartbeatsCache.heartbeats),c=iu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return _r.warn(n),""}}}function tm(){return new Date().toISOString().substring(0,10)}function y1(i,e=p1){const n=[];let s=i.slice();for(const a of i){const c=n.find(d=>d.agent===a.agent);if(c){if(c.dates.push(a.date),nm(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),nm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class v1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return i_()?s_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await f1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return em(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return em(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function nm(i){return iu(JSON.stringify({version:2,heartbeats:i})).length}function _1(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(i){Qs(new Bi("platform-logger",e=>new D_(e),"PRIVATE")),Qs(new Bi("heartbeat",e=>new g1(e),"PRIVATE")),ni(Rh,Jp,i),ni(Rh,Jp,"esm2017"),ni("fire-js","")}w1("");var rm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yh;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,T){function S(){}S.prototype=T.prototype,P.D=T.prototype,P.prototype=new S,P.prototype.constructor=P,P.C=function(C,x,O){for(var I=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)I[Je-2]=arguments[Je];return T.prototype[x].apply(C,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(P,T,S){S||(S=0);var C=Array(16);if(typeof T=="string")for(var x=0;16>x;++x)C[x]=T.charCodeAt(S++)|T.charCodeAt(S++)<<8|T.charCodeAt(S++)<<16|T.charCodeAt(S++)<<24;else for(x=0;16>x;++x)C[x]=T[S++]|T[S++]<<8|T[S++]<<16|T[S++]<<24;T=P.g[0],S=P.g[1],x=P.g[2];var O=P.g[3],I=T+(O^S&(x^O))+C[0]+3614090360&4294967295;T=S+(I<<7&4294967295|I>>>25),I=O+(x^T&(S^x))+C[1]+3905402710&4294967295,O=T+(I<<12&4294967295|I>>>20),I=x+(S^O&(T^S))+C[2]+606105819&4294967295,x=O+(I<<17&4294967295|I>>>15),I=S+(T^x&(O^T))+C[3]+3250441966&4294967295,S=x+(I<<22&4294967295|I>>>10),I=T+(O^S&(x^O))+C[4]+4118548399&4294967295,T=S+(I<<7&4294967295|I>>>25),I=O+(x^T&(S^x))+C[5]+1200080426&4294967295,O=T+(I<<12&4294967295|I>>>20),I=x+(S^O&(T^S))+C[6]+2821735955&4294967295,x=O+(I<<17&4294967295|I>>>15),I=S+(T^x&(O^T))+C[7]+4249261313&4294967295,S=x+(I<<22&4294967295|I>>>10),I=T+(O^S&(x^O))+C[8]+1770035416&4294967295,T=S+(I<<7&4294967295|I>>>25),I=O+(x^T&(S^x))+C[9]+2336552879&4294967295,O=T+(I<<12&4294967295|I>>>20),I=x+(S^O&(T^S))+C[10]+4294925233&4294967295,x=O+(I<<17&4294967295|I>>>15),I=S+(T^x&(O^T))+C[11]+2304563134&4294967295,S=x+(I<<22&4294967295|I>>>10),I=T+(O^S&(x^O))+C[12]+1804603682&4294967295,T=S+(I<<7&4294967295|I>>>25),I=O+(x^T&(S^x))+C[13]+4254626195&4294967295,O=T+(I<<12&4294967295|I>>>20),I=x+(S^O&(T^S))+C[14]+2792965006&4294967295,x=O+(I<<17&4294967295|I>>>15),I=S+(T^x&(O^T))+C[15]+1236535329&4294967295,S=x+(I<<22&4294967295|I>>>10),I=T+(x^O&(S^x))+C[1]+4129170786&4294967295,T=S+(I<<5&4294967295|I>>>27),I=O+(S^x&(T^S))+C[6]+3225465664&4294967295,O=T+(I<<9&4294967295|I>>>23),I=x+(T^S&(O^T))+C[11]+643717713&4294967295,x=O+(I<<14&4294967295|I>>>18),I=S+(O^T&(x^O))+C[0]+3921069994&4294967295,S=x+(I<<20&4294967295|I>>>12),I=T+(x^O&(S^x))+C[5]+3593408605&4294967295,T=S+(I<<5&4294967295|I>>>27),I=O+(S^x&(T^S))+C[10]+38016083&4294967295,O=T+(I<<9&4294967295|I>>>23),I=x+(T^S&(O^T))+C[15]+3634488961&4294967295,x=O+(I<<14&4294967295|I>>>18),I=S+(O^T&(x^O))+C[4]+3889429448&4294967295,S=x+(I<<20&4294967295|I>>>12),I=T+(x^O&(S^x))+C[9]+568446438&4294967295,T=S+(I<<5&4294967295|I>>>27),I=O+(S^x&(T^S))+C[14]+3275163606&4294967295,O=T+(I<<9&4294967295|I>>>23),I=x+(T^S&(O^T))+C[3]+4107603335&4294967295,x=O+(I<<14&4294967295|I>>>18),I=S+(O^T&(x^O))+C[8]+1163531501&4294967295,S=x+(I<<20&4294967295|I>>>12),I=T+(x^O&(S^x))+C[13]+2850285829&4294967295,T=S+(I<<5&4294967295|I>>>27),I=O+(S^x&(T^S))+C[2]+4243563512&4294967295,O=T+(I<<9&4294967295|I>>>23),I=x+(T^S&(O^T))+C[7]+1735328473&4294967295,x=O+(I<<14&4294967295|I>>>18),I=S+(O^T&(x^O))+C[12]+2368359562&4294967295,S=x+(I<<20&4294967295|I>>>12),I=T+(S^x^O)+C[5]+4294588738&4294967295,T=S+(I<<4&4294967295|I>>>28),I=O+(T^S^x)+C[8]+2272392833&4294967295,O=T+(I<<11&4294967295|I>>>21),I=x+(O^T^S)+C[11]+1839030562&4294967295,x=O+(I<<16&4294967295|I>>>16),I=S+(x^O^T)+C[14]+4259657740&4294967295,S=x+(I<<23&4294967295|I>>>9),I=T+(S^x^O)+C[1]+2763975236&4294967295,T=S+(I<<4&4294967295|I>>>28),I=O+(T^S^x)+C[4]+1272893353&4294967295,O=T+(I<<11&4294967295|I>>>21),I=x+(O^T^S)+C[7]+4139469664&4294967295,x=O+(I<<16&4294967295|I>>>16),I=S+(x^O^T)+C[10]+3200236656&4294967295,S=x+(I<<23&4294967295|I>>>9),I=T+(S^x^O)+C[13]+681279174&4294967295,T=S+(I<<4&4294967295|I>>>28),I=O+(T^S^x)+C[0]+3936430074&4294967295,O=T+(I<<11&4294967295|I>>>21),I=x+(O^T^S)+C[3]+3572445317&4294967295,x=O+(I<<16&4294967295|I>>>16),I=S+(x^O^T)+C[6]+76029189&4294967295,S=x+(I<<23&4294967295|I>>>9),I=T+(S^x^O)+C[9]+3654602809&4294967295,T=S+(I<<4&4294967295|I>>>28),I=O+(T^S^x)+C[12]+3873151461&4294967295,O=T+(I<<11&4294967295|I>>>21),I=x+(O^T^S)+C[15]+530742520&4294967295,x=O+(I<<16&4294967295|I>>>16),I=S+(x^O^T)+C[2]+3299628645&4294967295,S=x+(I<<23&4294967295|I>>>9),I=T+(x^(S|~O))+C[0]+4096336452&4294967295,T=S+(I<<6&4294967295|I>>>26),I=O+(S^(T|~x))+C[7]+1126891415&4294967295,O=T+(I<<10&4294967295|I>>>22),I=x+(T^(O|~S))+C[14]+2878612391&4294967295,x=O+(I<<15&4294967295|I>>>17),I=S+(O^(x|~T))+C[5]+4237533241&4294967295,S=x+(I<<21&4294967295|I>>>11),I=T+(x^(S|~O))+C[12]+1700485571&4294967295,T=S+(I<<6&4294967295|I>>>26),I=O+(S^(T|~x))+C[3]+2399980690&4294967295,O=T+(I<<10&4294967295|I>>>22),I=x+(T^(O|~S))+C[10]+4293915773&4294967295,x=O+(I<<15&4294967295|I>>>17),I=S+(O^(x|~T))+C[1]+2240044497&4294967295,S=x+(I<<21&4294967295|I>>>11),I=T+(x^(S|~O))+C[8]+1873313359&4294967295,T=S+(I<<6&4294967295|I>>>26),I=O+(S^(T|~x))+C[15]+4264355552&4294967295,O=T+(I<<10&4294967295|I>>>22),I=x+(T^(O|~S))+C[6]+2734768916&4294967295,x=O+(I<<15&4294967295|I>>>17),I=S+(O^(x|~T))+C[13]+1309151649&4294967295,S=x+(I<<21&4294967295|I>>>11),I=T+(x^(S|~O))+C[4]+4149444226&4294967295,T=S+(I<<6&4294967295|I>>>26),I=O+(S^(T|~x))+C[11]+3174756917&4294967295,O=T+(I<<10&4294967295|I>>>22),I=x+(T^(O|~S))+C[2]+718787259&4294967295,x=O+(I<<15&4294967295|I>>>17),I=S+(O^(x|~T))+C[9]+3951481745&4294967295,P.g[0]=P.g[0]+T&4294967295,P.g[1]=P.g[1]+(x+(I<<21&4294967295|I>>>11))&4294967295,P.g[2]=P.g[2]+x&4294967295,P.g[3]=P.g[3]+O&4294967295}s.prototype.u=function(P,T){T===void 0&&(T=P.length);for(var S=T-this.blockSize,C=this.B,x=this.h,O=0;O<T;){if(x==0)for(;O<=S;)a(this,P,O),O+=this.blockSize;if(typeof P=="string"){for(;O<T;)if(C[x++]=P.charCodeAt(O++),x==this.blockSize){a(this,C),x=0;break}}else for(;O<T;)if(C[x++]=P[O++],x==this.blockSize){a(this,C),x=0;break}}this.h=x,this.o+=T},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var T=1;T<P.length-8;++T)P[T]=0;var S=8*this.o;for(T=P.length-8;T<P.length;++T)P[T]=S&255,S/=256;for(this.u(P),P=Array(16),T=S=0;4>T;++T)for(var C=0;32>C;C+=8)P[S++]=this.g[T]>>>C&255;return P};function c(P,T){var S=g;return Object.prototype.hasOwnProperty.call(S,P)?S[P]:S[P]=T(P)}function d(P,T){this.h=T;for(var S=[],C=!0,x=P.length-1;0<=x;x--){var O=P[x]|0;C&&O==T||(S[x]=O,C=!1)}this.g=S}var g={};function y(P){return-128<=P&&128>P?c(P,function(T){return new d([T|0],0>T?-1:0)}):new d([P|0],0>P?-1:0)}function w(P){if(isNaN(P)||!isFinite(P))return N;if(0>P)return Q(w(-P));for(var T=[],S=1,C=0;P>=S;C++)T[C]=P/S|0,S*=4294967296;return new d(T,0)}function k(P,T){if(P.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P.charAt(0)=="-")return Q(k(P.substring(1),T));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=w(Math.pow(T,8)),C=N,x=0;x<P.length;x+=8){var O=Math.min(8,P.length-x),I=parseInt(P.substring(x,x+O),T);8>O?(O=w(Math.pow(T,O)),C=C.j(O).add(w(I))):(C=C.j(S),C=C.add(w(I)))}return C}var N=y(0),j=y(1),G=y(16777216);i=d.prototype,i.m=function(){if(Z(this))return-Q(this).m();for(var P=0,T=1,S=0;S<this.g.length;S++){var C=this.i(S);P+=(0<=C?C:4294967296+C)*T,T*=4294967296}return P},i.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(Y(this))return"0";if(Z(this))return"-"+Q(this).toString(P);for(var T=w(Math.pow(P,6)),S=this,C="";;){var x=he(S,T).g;S=_e(S,x.j(T));var O=((0<S.g.length?S.g[0]:S.h)>>>0).toString(P);if(S=x,Y(S))return O+C;for(;6>O.length;)O="0"+O;C=O+C}},i.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function Y(P){if(P.h!=0)return!1;for(var T=0;T<P.g.length;T++)if(P.g[T]!=0)return!1;return!0}function Z(P){return P.h==-1}i.l=function(P){return P=_e(this,P),Z(P)?-1:Y(P)?0:1};function Q(P){for(var T=P.g.length,S=[],C=0;C<T;C++)S[C]=~P.g[C];return new d(S,~P.h).add(j)}i.abs=function(){return Z(this)?Q(this):this},i.add=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],C=0,x=0;x<=T;x++){var O=C+(this.i(x)&65535)+(P.i(x)&65535),I=(O>>>16)+(this.i(x)>>>16)+(P.i(x)>>>16);C=I>>>16,O&=65535,I&=65535,S[x]=I<<16|O}return new d(S,S[S.length-1]&-2147483648?-1:0)};function _e(P,T){return P.add(Q(T))}i.j=function(P){if(Y(this)||Y(P))return N;if(Z(this))return Z(P)?Q(this).j(Q(P)):Q(Q(this).j(P));if(Z(P))return Q(this.j(Q(P)));if(0>this.l(G)&&0>P.l(G))return w(this.m()*P.m());for(var T=this.g.length+P.g.length,S=[],C=0;C<2*T;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(var x=0;x<P.g.length;x++){var O=this.i(C)>>>16,I=this.i(C)&65535,Je=P.i(x)>>>16,At=P.i(x)&65535;S[2*C+2*x]+=I*At,ye(S,2*C+2*x),S[2*C+2*x+1]+=O*At,ye(S,2*C+2*x+1),S[2*C+2*x+1]+=I*Je,ye(S,2*C+2*x+1),S[2*C+2*x+2]+=O*Je,ye(S,2*C+2*x+2)}for(C=0;C<T;C++)S[C]=S[2*C+1]<<16|S[2*C];for(C=T;C<2*T;C++)S[C]=0;return new d(S,0)};function ye(P,T){for(;(P[T]&65535)!=P[T];)P[T+1]+=P[T]>>>16,P[T]&=65535,T++}function me(P,T){this.g=P,this.h=T}function he(P,T){if(Y(T))throw Error("division by zero");if(Y(P))return new me(N,N);if(Z(P))return T=he(Q(P),T),new me(Q(T.g),Q(T.h));if(Z(T))return T=he(P,Q(T)),new me(Q(T.g),T.h);if(30<P.g.length){if(Z(P)||Z(T))throw Error("slowDivide_ only works with positive integers.");for(var S=j,C=T;0>=C.l(P);)S=$e(S),C=$e(C);var x=Se(S,1),O=Se(C,1);for(C=Se(C,2),S=Se(S,2);!Y(C);){var I=O.add(C);0>=I.l(P)&&(x=x.add(S),O=I),C=Se(C,1),S=Se(S,1)}return T=_e(P,x.j(T)),new me(x,T)}for(x=N;0<=P.l(T);){for(S=Math.max(1,Math.floor(P.m()/T.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),O=w(S),I=O.j(T);Z(I)||0<I.l(P);)S-=C,O=w(S),I=O.j(T);Y(O)&&(O=j),x=x.add(O),P=_e(P,I)}return new me(x,P)}i.A=function(P){return he(this,P).h},i.and=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],C=0;C<T;C++)S[C]=this.i(C)&P.i(C);return new d(S,this.h&P.h)},i.or=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],C=0;C<T;C++)S[C]=this.i(C)|P.i(C);return new d(S,this.h|P.h)},i.xor=function(P){for(var T=Math.max(this.g.length,P.g.length),S=[],C=0;C<T;C++)S[C]=this.i(C)^P.i(C);return new d(S,this.h^P.h)};function $e(P){for(var T=P.g.length+1,S=[],C=0;C<T;C++)S[C]=P.i(C)<<1|P.i(C-1)>>>31;return new d(S,P.h)}function Se(P,T){var S=T>>5;T%=32;for(var C=P.g.length-S,x=[],O=0;O<C;O++)x[O]=0<T?P.i(O+S)>>>T|P.i(O+S+1)<<32-T:P.i(O+S);return new d(x,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=w,d.fromString=k,Yh=d}).apply(typeof rm<"u"?rm:typeof self<"u"?self:typeof window<"u"?window:{});var Hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wg,ra,Eg,Xl,Nh,Tg,Ig,Sg;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hl=="object"&&Hl];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=n(this);function a(l,f){if(f)e:{var m=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var V=l[_];if(!(V in m))break e;m=m[V]}l=l[l.length-1],_=m[l],f=f(_),f!=_&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function c(l,f){l instanceof String&&(l+="");var m=0,_=!1,V={next:function(){if(!_&&m<l.length){var U=m++;return{value:f(U,l[U]),done:!1}}return _=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}a("Array.prototype.values",function(l){return l||function(){return c(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},g=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function w(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function k(l,f,m){return l.call.apply(l.bind,arguments)}function N(l,f,m){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,_),l.apply(f,V)}}return function(){return l.apply(f,arguments)}}function j(l,f,m){return j=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k:N,j.apply(null,arguments)}function G(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function Y(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(_,V,U){for(var X=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)X[Ve-2]=arguments[Ve];return f.prototype[V].apply(_,X)}}function Z(l){const f=l.length;if(0<f){const m=Array(f);for(let _=0;_<f;_++)m[_]=l[_];return m}return[]}function Q(l,f){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(y(_)){const V=l.length||0,U=_.length||0;l.length=V+U;for(let X=0;X<U;X++)l[V+X]=_[X]}else l.push(_)}}class _e{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ye(l){return/^[\s\xa0]*$/.test(l)}function me(){var l=g.navigator;return l&&(l=l.userAgent)?l:""}function he(l){return he[" "](l),l}he[" "]=function(){};var $e=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function Se(l,f,m){for(const _ in l)f.call(m,l[_],_,l)}function P(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function T(l){const f={};for(const m in l)f[m]=l[m];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,f){let m,_;for(let V=1;V<arguments.length;V++){_=arguments[V];for(m in _)l[m]=_[m];for(let U=0;U<S.length;U++)m=S[U],Object.prototype.hasOwnProperty.call(_,m)&&(l[m]=_[m])}}function x(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function O(l){g.setTimeout(()=>{throw l},0)}function I(){var l=le;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Je{constructor(){this.h=this.g=null}add(f,m){const _=At.get();_.set(f,m),this.h?this.h.next=_:this.g=_,this.h=_}}var At=new _e(()=>new kt,l=>l.reset());class kt{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,J=!1,le=new Je,te=()=>{const l=g.Promise.resolve(void 0);Le=()=>{l.then(D)}};var D=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(m){O(m)}var f=At;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function z(){this.s=this.s,this.C=this.C}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var ve=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};g.addEventListener("test",m,f),g.removeEventListener("test",m,f)}catch{}return l}();function we(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if($e){e:{try{he(f.nodeName);var V=!0;break e}catch{}V=!1}V||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ke[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&we.aa.h.call(this)}}Y(we,ae);var ke={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Oe=0;function be(l,f,m,_,V){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!_,this.ha=V,this.key=++Oe,this.da=this.fa=!1}function ut(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Jn(l){this.src=l,this.g={},this.h=0}Jn.prototype.add=function(l,f,m,_,V){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var X=Ir(l,f,_,V);return-1<X?(f=l[X],m||(f.fa=!1)):(f=new be(f,this.src,U,!!_,V),f.fa=m,l.push(f)),f};function Xi(l,f){var m=f.type;if(m in l.g){var _=l.g[m],V=Array.prototype.indexOf.call(_,f,void 0),U;(U=0<=V)&&Array.prototype.splice.call(_,V,1),U&&(ut(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Ir(l,f,m,_){for(var V=0;V<l.length;++V){var U=l[V];if(!U.da&&U.listener==f&&U.capture==!!m&&U.ha==_)return V}return-1}var li="closure_lm_"+(1e6*Math.random()|0),Yi={};function oo(l,f,m,_,V){if(Array.isArray(f)){for(var U=0;U<f.length;U++)oo(l,f[U],m,_,V);return null}return m=uo(m),l&&l[De]?l.K(f,m,w(_)?!!_.capture:!!_,V):ao(l,f,m,!1,_,V)}function ao(l,f,m,_,V,U){if(!f)throw Error("Invalid event type");var X=w(V)?!!V.capture:!!V,Ve=Zi(l);if(Ve||(l[li]=Ve=new Jn(l)),m=Ve.add(f,m,_,X,U),m.proxy)return m;if(_=ka(),m.proxy=_,_.src=l,_.listener=m,l.addEventListener)ve||(V=X),V===void 0&&(V=!1),l.addEventListener(f.toString(),_,V);else if(l.attachEvent)l.attachEvent(er(f.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ka(){function l(m){return f.call(l.src,l.listener,m)}const f=lo;return l}function Ji(l,f,m,_,V){if(Array.isArray(f))for(var U=0;U<f.length;U++)Ji(l,f[U],m,_,V);else _=w(_)?!!_.capture:!!_,m=uo(m),l&&l[De]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],m=Ir(U,m,_,V),-1<m&&(ut(U[m]),Array.prototype.splice.call(U,m,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=Zi(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Ir(f,m,_,V)),(m=-1<l?f[l]:null)&&Zn(m))}function Zn(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[De])Xi(f.i,l);else{var m=l.type,_=l.proxy;f.removeEventListener?f.removeEventListener(m,_,l.capture):f.detachEvent?f.detachEvent(er(m),_):f.addListener&&f.removeListener&&f.removeListener(_),(m=Zi(f))?(Xi(m,l),m.h==0&&(m.src=null,f[li]=null)):ut(l)}}}function er(l){return l in Yi?Yi[l]:Yi[l]="on"+l}function lo(l,f){if(l.da)l=!0;else{f=new we(f,this);var m=l.listener,_=l.ha||l.src;l.fa&&Zn(l),l=m.call(_,f)}return l}function Zi(l){return l=l[li],l instanceof Jn?l:null}var es="__closure_events_fn_"+(1e9*Math.random()>>>0);function uo(l){return typeof l=="function"?l:(l[es]||(l[es]=function(f){return l.handleEvent(f)}),l[es])}function it(){z.call(this),this.i=new Jn(this),this.M=this,this.F=null}Y(it,z),it.prototype[De]=!0,it.prototype.removeEventListener=function(l,f,m,_){Ji(this,l,f,m,_)};function st(l,f){var m,_=l.F;if(_)for(m=[];_;_=_.F)m.push(_);if(l=l.M,_=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var V=f;f=new ae(_,l),C(f,V)}if(V=!0,m)for(var U=m.length-1;0<=U;U--){var X=f.g=m[U];V=tr(X,_,!0,f)&&V}if(X=f.g=l,V=tr(X,_,!0,f)&&V,V=tr(X,_,!1,f)&&V,m)for(U=0;U<m.length;U++)X=f.g=m[U],V=tr(X,_,!1,f)&&V}it.prototype.N=function(){if(it.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],_=0;_<m.length;_++)ut(m[_]);delete l.g[f],l.h--}}this.F=null},it.prototype.K=function(l,f,m,_){return this.i.add(String(l),f,!1,m,_)},it.prototype.L=function(l,f,m,_){return this.i.add(String(l),f,!0,m,_)};function tr(l,f,m,_){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var V=!0,U=0;U<f.length;++U){var X=f[U];if(X&&!X.da&&X.capture==m){var Ve=X.listener,ot=X.ha||X.src;X.fa&&Xi(l.i,X),V=Ve.call(ot,_)!==!1&&V}}return V&&!_.defaultPrevented}function co(l,f,m){if(typeof l=="function")m&&(l=j(l,m));else if(l&&typeof l.handleEvent=="function")l=j(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:g.setTimeout(l,f||0)}function Sr(l){l.g=co(()=>{l.g=null,l.i&&(l.i=!1,Sr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class ui extends z{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Sr(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ci(l){z.call(this),this.h=l,this.g={}}Y(ci,z);var ho=[];function fo(l){Se(l.g,function(f,m){this.g.hasOwnProperty(m)&&Zn(f)},l),l.g={}}ci.prototype.N=function(){ci.aa.N.call(this),fo(this)},ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var po=g.JSON.stringify,mo=g.JSON.parse,go=class{stringify(l){return g.JSON.stringify(l,void 0)}parse(l){return g.JSON.parse(l,void 0)}};function hi(){}hi.prototype.h=null;function ts(l){return l.h||(l.h=l.i())}function ns(){}var rn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vn(){ae.call(this,"d")}Y(Vn,ae);function rs(){ae.call(this,"c")}Y(rs,ae);var Ln={},yo=null;function di(){return yo=yo||new it}Ln.La="serverreachability";function vo(l){ae.call(this,Ln.La,l)}Y(vo,ae);function nr(l){const f=di();st(f,new vo(f))}Ln.STAT_EVENT="statevent";function _o(l,f){ae.call(this,Ln.STAT_EVENT,l),this.stat=f}Y(_o,ae);function Ze(l){const f=di();st(f,new _o(f,l))}Ln.Ma="timingevent";function is(l,f){ae.call(this,Ln.Ma,l),this.size=f}Y(is,ae);function pn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){l()},f)}function fi(){this.g=!0}fi.prototype.xa=function(){this.g=!1};function pi(l,f,m,_,V,U){l.info(function(){if(l.g)if(U)for(var X="",Ve=U.split("&"),ot=0;ot<Ve.length;ot++){var Ce=Ve[ot].split("=");if(1<Ce.length){var ct=Ce[0];Ce=Ce[1];var tt=ct.split("_");X=2<=tt.length&&tt[1]=="type"?X+(ct+"="+Ce+"&"):X+(ct+"=redacted&")}}else X=null;else X=U;return"XMLHTTP REQ ("+_+") [attempt "+V+"]: "+f+`
`+m+`
`+X})}function ss(l,f,m,_,V,U,X){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+V+"]: "+f+`
`+m+`
`+U+" "+X})}function mn(l,f,m,_){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Mu(l,m)+(_?" "+_:"")})}function wo(l,f){l.info(function(){return"TIMEOUT: "+f})}fi.prototype.info=function(){};function Mu(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var _=m[l];if(!(2>_.length)){var V=_[1];if(Array.isArray(V)&&!(1>V.length)){var U=V[0];if(U!="noop"&&U!="stop"&&U!="close")for(var X=1;X<V.length;X++)V[X]=""}}}}return po(m)}catch{return f}}var os={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ca={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gn;function mi(){}Y(mi,hi),mi.prototype.g=function(){return new XMLHttpRequest},mi.prototype.i=function(){return{}},gn=new mi;function yn(l,f,m,_){this.j=l,this.i=f,this.l=m,this.R=_||1,this.U=new ci(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ra}function Ra(){this.i=null,this.g="",this.h=!1}var Eo={},as={};function ls(l,f,m){l.L=1,l.v=Pr(Xt(f)),l.m=m,l.P=!0,To(l,null)}function To(l,f){l.F=Date.now(),Ue(l),l.A=Xt(l.v);var m=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Nr(m.i,"t",_),l.C=0,m=l.j.J,l.h=new Ra,l.g=Ga(l.j,m?f:null,!l.m),0<l.O&&(l.M=new ui(j(l.Y,l,l.g),l.O)),f=l.U,m=l.g,_=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(ho[0]=V.toString()),V=ho);for(var U=0;U<V.length;U++){var X=oo(m,V[U],_||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),nr(),pi(l.i,l.u,l.A,l.l,l.R,l.m)}yn.prototype.ca=function(l){l=l.target;const f=this.M;f&&jt(l)==3?f.j():this.Y(l)},yn.prototype.Y=function(l){try{if(l==this.g)e:{const tt=jt(this.g);var f=this.g.Ba();const an=this.g.Z();if(!(3>tt)&&(tt!=3||this.g&&(this.h.h||this.g.oa()||Ro(this.g)))){this.J||tt!=4||f==7||(f==8||0>=an?nr(3):nr(2)),gi(this);var m=this.g.Z();this.X=m;t:if(Pa(this)){var _=Ro(this.g);l="";var V=_.length,U=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sn(this),Ar(this);var X="";break t}this.h.i=new g.TextDecoder}for(f=0;f<V;f++)this.h.h=!0,l+=this.h.i.decode(_[f],{stream:!(U&&f==V-1)});_.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=m==200,ss(this.i,this.u,this.A,this.l,this.R,tt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,ot=this.g;if((Ve=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ye(Ve)){var Ce=Ve;break t}}Ce=null}if(m=Ce)mn(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Io(this,m);else{this.o=!1,this.s=3,Ze(12),sn(this),Ar(this);break e}}if(this.P){m=!0;let Jt;for(;!this.J&&this.C<X.length;)if(Jt=bu(this,X),Jt==as){tt==4&&(this.s=4,Ze(14),m=!1),mn(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==Eo){this.s=4,Ze(15),mn(this.i,this.l,X,"[Invalid Chunk]"),m=!1;break}else mn(this.i,this.l,Jt,null),Io(this,Jt);if(Pa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||X.length!=0||this.h.h||(this.s=1,Ze(16),m=!1),this.o=this.o&&m,!m)mn(this.i,this.l,X,"[Invalid Chunked Response]"),sn(this),Ar(this);else if(0<X.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),xo(ct),ct.M=!0,Ze(11))}}else mn(this.i,this.l,X,null),Io(this,X);tt==4&&sn(this),this.o&&!this.J&&(tt==4?_s(this.j,this):(this.o=!1,Ue(this)))}else ps(this.g),m==400&&0<X.indexOf("Unknown SID")?(this.s=3,Ze(12)):(this.s=0,Ze(13)),sn(this),Ar(this)}}}catch{}finally{}};function Pa(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function bu(l,f){var m=l.C,_=f.indexOf(`
`,m);return _==-1?as:(m=Number(f.substring(m,_)),isNaN(m)?Eo:(_+=1,_+m>f.length?as:(f=f.slice(_,_+m),l.C=_+m,f)))}yn.prototype.cancel=function(){this.J=!0,sn(this)};function Ue(l){l.S=Date.now()+l.I,xa(l,l.I)}function xa(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=pn(j(l.ba,l),f)}function gi(l){l.B&&(g.clearTimeout(l.B),l.B=null)}yn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(wo(this.i,this.A),this.L!=2&&(nr(),Ze(17)),sn(this),this.s=2,Ar(this)):xa(this,this.S-l)};function Ar(l){l.j.G==0||l.J||_s(l.j,l)}function sn(l){gi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,fo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Io(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||Lt(m.h,l))){if(!l.K&&Lt(m.h,l)&&m.G==3){try{var _=m.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var V=_;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)vs(m),Tn(m);else break e;ys(m),Ze(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=pn(j(m.Za,m),6e3));if(1>=Da(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ar(m,11)}else if((l.K||m.g==l)&&vs(m),!ye(f))for(V=m.Da.g.parse(f),f=0;f<V.length;f++){let Ce=V[f];if(m.T=Ce[0],Ce=Ce[1],m.G==2)if(Ce[0]=="c"){m.K=Ce[1],m.ia=Ce[2];const ct=Ce[3];ct!=null&&(m.la=ct,m.j.info("VER="+m.la));const tt=Ce[4];tt!=null&&(m.Aa=tt,m.j.info("SVER="+m.Aa));const an=Ce[5];an!=null&&typeof an=="number"&&0<an&&(_=1.5*an,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const Jt=l.g;if(Jt){const Ii=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ii){var U=_.h;U.g||Ii.indexOf("spdy")==-1&&Ii.indexOf("quic")==-1&&Ii.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(So(U,U.h),U.h=null))}if(_.D){const Es=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Es&&(_.ya=Es,Me(_.I,_.D,Es))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var X=l;if(_.qa=Wa(_,_.J?_.ia:null,_.W),X.K){Oa(_.h,X);var Ve=X,ot=_.L;ot&&(Ve.I=ot),Ve.B&&(gi(Ve),Ue(Ve)),_.g=X}else Ti(_);0<m.i.length&&Fn(m)}else Ce[0]!="stop"&&Ce[0]!="close"||ar(m,7);else m.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?ar(m,7):vt(m):Ce[0]!="noop"&&m.l&&m.l.ta(Ce),m.v=0)}}nr(4)}catch{}}var Na=class{constructor(l,f){this.g=l,this.map=f}};function yi(l){this.l=l||10,g.PerformanceNavigationTiming?(l=g.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Da(l){return l.h?1:l.g?l.g.size:0}function Lt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function So(l,f){l.g?l.g.add(f):l.h=f}function Oa(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}yi.prototype.cancel=function(){if(this.i=Va(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Va(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return Z(l.i)}function us(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],m=l.length,_=0;_<m;_++)f.push(l[_]);return f}f=[],m=0;for(_ in l)f[m++]=l[_];return f}function cs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const _ in l)f[m++]=_;return f}}}function kr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=cs(l),_=us(l),V=_.length,U=0;U<V;U++)f.call(void 0,_[U],m&&m[U],l)}var vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uu(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var _=l[m].indexOf("="),V=null;if(0<=_){var U=l[m].substring(0,_);V=l[m].substring(_+1)}else U=l[m];f(U,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function rr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof rr){this.h=l.h,_i(this,l.j),this.o=l.o,this.g=l.g,Cr(this,l.s),this.l=l.l;var f=l.i,m=new Mn;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Rr(this,m),this.m=l.m}else l&&(f=String(l).match(vi))?(this.h=!1,_i(this,f[1]||"",!0),this.o=Ae(f[2]||""),this.g=Ae(f[3]||"",!0),Cr(this,f[4]),this.l=Ae(f[5]||"",!0),Rr(this,f[6]||"",!0),this.m=Ae(f[7]||"")):(this.h=!1,this.i=new Mn(null,this.h))}rr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(xr(f,hs,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(xr(f,hs,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(xr(m,m.charAt(0)=="/"?ba:Ma,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",xr(m,Ao)),l.join("")};function Xt(l){return new rr(l)}function _i(l,f,m){l.j=m?Ae(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Cr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Rr(l,f,m){f instanceof Mn?(l.i=f,bn(l.i,l.h)):(m||(f=xr(f,Ua)),l.i=new Mn(f,l.h))}function Me(l,f,m){l.i.set(f,m)}function Pr(l){return Me(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ae(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function xr(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,La),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function La(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var hs=/[#\/\?@]/g,Ma=/[#\?:]/g,ba=/[#\?]/g,Ua=/[#\?@]/g,Ao=/#/g;function Mn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function yt(l){l.g||(l.g=new Map,l.h=0,l.i&&Uu(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}i=Mn.prototype,i.add=function(l,f){yt(this),this.i=null,l=on(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function vn(l,f){yt(l),f=on(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function _n(l,f){return yt(l),f=on(l,f),l.g.has(f)}i.forEach=function(l,f){yt(this),this.g.forEach(function(m,_){m.forEach(function(V){l.call(f,V,_,this)},this)},this)},i.na=function(){yt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let _=0;_<f.length;_++){const V=l[_];for(let U=0;U<V.length;U++)m.push(f[_])}return m},i.V=function(l){yt(this);let f=[];if(typeof l=="string")_n(this,l)&&(f=f.concat(this.g.get(on(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},i.set=function(l,f){return yt(this),this.i=null,l=on(this,l),_n(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Nr(l,f,m){vn(l,f),0<m.length&&(l.i=null,l.g.set(on(l,f),Z(m)),l.h+=m.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var _=f[m];const U=encodeURIComponent(String(_)),X=this.V(_);for(_=0;_<X.length;_++){var V=U;X[_]!==""&&(V+="="+encodeURIComponent(String(X[_]))),l.push(V)}}return this.i=l.join("&")};function on(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function bn(l,f){f&&!l.j&&(yt(l),l.i=null,l.g.forEach(function(m,_){var V=_.toLowerCase();_!=V&&(vn(this,_),Nr(this,V,m))},l)),l.j=f}function Fu(l,f){const m=new fi;if(g.Image){const _=new Image;_.onload=G(Ft,m,"TestLoadImage: loaded",!0,f,_),_.onerror=G(Ft,m,"TestLoadImage: error",!1,f,_),_.onabort=G(Ft,m,"TestLoadImage: abort",!1,f,_),_.ontimeout=G(Ft,m,"TestLoadImage: timeout",!1,f,_),g.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else f(!1)}function Fa(l,f){const m=new fi,_=new AbortController,V=setTimeout(()=>{_.abort(),Ft(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:_.signal}).then(U=>{clearTimeout(V),U.ok?Ft(m,"TestPingServer: ok",!0,f):Ft(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),Ft(m,"TestPingServer: error",!1,f)})}function Ft(l,f,m,_,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),_(m)}catch{}}function ju(){this.g=new go}function ja(l,f,m){const _=m||"";try{kr(l,function(V,U){let X=V;w(V)&&(X=po(V)),f.push(_+U+"="+encodeURIComponent(X))})}catch(V){throw f.push(_+"type="+encodeURIComponent("_badmap")),V}}function ir(l){this.l=l.Ub||null,this.j=l.eb||!1}Y(ir,hi),ir.prototype.g=function(){return new wi(this.l,this.j)},ir.prototype.i=function(l){return function(){return l}}({});function wi(l,f){it.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Y(wi,it),i=wi.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,En(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||g).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;za(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function za(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?wn(this):En(this),this.readyState==3&&za(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,wn(this))},i.Qa=function(l){this.g&&(this.response=l,wn(this))},i.ga=function(){this.g&&wn(this)};function wn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,En(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function En(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function sr(l){let f="";return Se(l,function(m,_){f+=_,f+=":",f+=m,f+=`\r
`}),f}function Dr(l,f,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=sr(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Me(l,f,m))}function He(l){it.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Y(He,it);var zu=/^https?$/i,ko=["POST","PUT"];i=He.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gn.g(),this.v=this.o?ts(this.o):ts(gn),this.g.onreadystatechange=j(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Ei(this,U);return}if(l=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var V in _)m.set(V,_[V]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const U of _.keys())m.set(U,_.get(U));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(U=>U.toLowerCase()=="content-type"),V=g.FormData&&l instanceof g.FormData,!(0<=Array.prototype.indexOf.call(ko,f,void 0))||_||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of m)this.g.setRequestHeader(U,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fs(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Ei(this,U)}};function Ei(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ds(l),Yt(l)}function ds(l){l.A||(l.A=!0,st(l,"complete"),st(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,st(this,"complete"),st(this,"abort"),Yt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yt(this,!0)),He.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Co(this):this.bb())},i.bb=function(){Co(this)};function Co(l){if(l.h&&typeof d<"u"&&(!l.v[1]||jt(l)!=4||l.Z()!=2)){if(l.u&&jt(l)==4)co(l.Ea,0,l);else if(st(l,"readystatechange"),jt(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var _;if(_=X===0){var V=String(l.D).match(vi)[1]||null;!V&&g.self&&g.self.location&&(V=g.self.location.protocol.slice(0,-1)),_=!zu.test(V?V.toLowerCase():"")}m=_}if(m)st(l,"complete"),st(l,"success");else{l.m=6;try{var U=2<jt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",ds(l)}}finally{Yt(l)}}}}function Yt(l,f){if(l.g){fs(l);const m=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||st(l,"ready");try{m.onreadystatechange=_}catch{}}}function fs(l){l.I&&(g.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function jt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),mo(f)}};function Ro(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ps(l){const f={};l=(l.g&&2<=jt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(ye(l[_]))continue;var m=x(l[_]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const U=f[V]||[];f[V]=U,U.push(m)}P(f,function(_){return _.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function Po(l){this.Aa=0,this.i=[],this.j=new fi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Un("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Un("baseRetryDelayMs",5e3,l),this.cb=Un("retryDelaySeedMs",1e4,l),this.Wa=Un("forwardChannelMaxRetries",2,l),this.wa=Un("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new yi(l&&l.concurrentRequestLimit),this.Da=new ju,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Po.prototype,i.la=8,i.G=1,i.connect=function(l,f,m,_){Ze(0),this.W=l,this.H=f||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=Wa(this,null,this.W),Fn(this)};function vt(l){if(ms(l),l.G==3){var f=l.U++,m=Xt(l.I);if(Me(m,"SID",l.K),Me(m,"RID",f),Me(m,"TYPE","terminate"),or(l,m),f=new yn(l,l.j,f),f.L=2,f.v=Pr(Xt(m)),m=!1,g.navigator&&g.navigator.sendBeacon)try{m=g.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&g.Image&&(new Image().src=f.v,m=!0),m||(f.g=Ga(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ue(f)}Ha(l)}function Tn(l){l.g&&(xo(l),l.g.cancel(),l.g=null)}function ms(l){Tn(l),l.u&&(g.clearTimeout(l.u),l.u=null),vs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&g.clearTimeout(l.s),l.s=null)}function Fn(l){if(!Qt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Le||te(),J||(Le(),J=!0),le.add(f,l),l.B=0}}function Bu(l,f){return Da(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=pn(j(l.Ga,l,f),$a(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new yn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=T(U),C(U,this.S)):U=this.S),this.m!==null||this.O||(V.H=U,U=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Or(this,V,f),m=Xt(this.I),Me(m,"RID",l),Me(m,"CVER",22),this.D&&Me(m,"X-HTTP-Session-Id",this.D),or(this,m),U&&(this.O?f="headers="+encodeURIComponent(String(sr(U)))+"&"+f:this.m&&Dr(m,this.m,U)),So(this.h,V),this.Ua&&Me(m,"TYPE","init"),this.P?(Me(m,"$req",f),Me(m,"SID","null"),V.T=!0,ls(V,m,null)):ls(V,m,f),this.G=2}}else this.G==3&&(l?gs(this,l):this.i.length==0||Qt(this.h)||gs(this))};function gs(l,f){var m;f?m=f.l:m=l.U++;const _=Xt(l.I);Me(_,"SID",l.K),Me(_,"RID",m),Me(_,"AID",l.T),or(l,_),l.m&&l.o&&Dr(_,l.m,l.o),m=new yn(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Or(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),So(l.h,m),ls(m,_,f)}function or(l,f){l.H&&Se(l.H,function(m,_){Me(f,_,m)}),l.l&&kr({},function(m,_){Me(f,_,m)})}function Or(l,f,m){m=Math.min(l.i.length,m);var _=l.l?j(l.l.Na,l.l,l):null;e:{var V=l.i;let U=-1;for(;;){const X=["count="+m];U==-1?0<m?(U=V[0].g,X.push("ofs="+U)):U=0:X.push("ofs="+U);let Ve=!0;for(let ot=0;ot<m;ot++){let Ce=V[ot].g;const ct=V[ot].map;if(Ce-=U,0>Ce)U=Math.max(0,V[ot].g-100),Ve=!1;else try{ja(ct,X,"req"+Ce+"_")}catch{_&&_(ct)}}if(Ve){_=X.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,_}function Ti(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Le||te(),J||(Le(),J=!0),le.add(f,l),l.v=0}}function ys(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=pn(j(l.Fa,l),$a(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,Ba(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=pn(j(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ze(10),Tn(this),Ba(this))};function xo(l){l.A!=null&&(g.clearTimeout(l.A),l.A=null)}function Ba(l){l.g=new yn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Xt(l.qa);Me(f,"RID","rpc"),Me(f,"SID",l.K),Me(f,"AID",l.T),Me(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Me(f,"TO",l.ja),Me(f,"TYPE","xmlhttp"),or(l,f),l.m&&l.o&&Dr(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Pr(Xt(f)),m.m=null,m.P=!0,To(m,l)}i.Za=function(){this.C!=null&&(this.C=null,Tn(this),ys(this),Ze(19))};function vs(l){l.C!=null&&(g.clearTimeout(l.C),l.C=null)}function _s(l,f){var m=null;if(l.g==f){vs(l),xo(l),l.g=null;var _=2}else if(Lt(l.h,f))m=f.D,Oa(l.h,f),_=1;else return;if(l.G!=0){if(f.o)if(_==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var V=l.B;_=di(),st(_,new is(_,m)),Fn(l)}else Ti(l);else if(V=f.s,V==3||V==0&&0<f.X||!(_==1&&Bu(l,f)||_==2&&ys(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),V){case 1:ar(l,5);break;case 4:ar(l,10);break;case 3:ar(l,6);break;default:ar(l,2)}}}function $a(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function ar(l,f){if(l.j.info("Error code "+f),f==2){var m=j(l.fb,l),_=l.Xa;const V=!_;_=new rr(_||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||_i(_,"https"),Pr(_),V?Fu(_.toString(),m):Fa(_.toString(),m)}else Ze(2);l.G=0,l.l&&l.l.sa(f),Ha(l),ms(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function Ha(l){if(l.G=0,l.ka=[],l.l){const f=Va(l.h);(f.length!=0||l.i.length!=0)&&(Q(l.ka,f),Q(l.ka,l.i),l.h.i.length=0,Z(l.i),l.i.length=0),l.l.ra()}}function Wa(l,f,m){var _=m instanceof rr?Xt(m):new rr(m);if(_.g!="")f&&(_.g=f+"."+_.g),Cr(_,_.s);else{var V=g.location;_=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;var U=new rr(null);_&&_i(U,_),f&&(U.g=f),V&&Cr(U,V),m&&(U.l=m),_=U}return m=l.D,f=l.ya,m&&f&&Me(_,m,f),Me(_,"VER",l.la),or(l,_),_}function Ga(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new He(new ir({eb:m})):new He(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function No(){}i=No.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ws(){}ws.prototype.g=function(l,f){return new Mt(l,f)};function Mt(l,f){it.call(this),this.g=new Po(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ye(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ye(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new jn(this)}Y(Mt,it),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){vt(this.g)},Mt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=po(l),l=m);f.i.push(new Na(f.Ya++,l)),f.G==3&&Fn(f)},Mt.prototype.N=function(){this.g.l=null,delete this.j,vt(this.g),delete this.g,Mt.aa.N.call(this)};function qa(l){Vn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Y(qa,Vn);function Ka(){rs.call(this),this.status=1}Y(Ka,rs);function jn(l){this.g=l}Y(jn,No),jn.prototype.ua=function(){st(this.g,"a")},jn.prototype.ta=function(l){st(this.g,new qa(l))},jn.prototype.sa=function(l){st(this.g,new Ka)},jn.prototype.ra=function(){st(this.g,"b")},ws.prototype.createWebChannel=ws.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,Sg=function(){return new ws},Ig=function(){return di()},Tg=Ln,Nh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},os.NO_ERROR=0,os.TIMEOUT=8,os.HTTP_ERROR=6,Xl=os,Ca.COMPLETE="complete",Eg=Ca,ns.EventType=rn,rn.OPEN="a",rn.CLOSE="b",rn.ERROR="c",rn.MESSAGE="d",it.prototype.listen=it.prototype.K,ra=ns,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,wg=He}).apply(typeof Hl<"u"?Hl:typeof self<"u"?self:typeof window<"u"?window:{});const im="@firebase/firestore",sm="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new Kh("@firebase/firestore");function Bs(){return $i.logLevel}function se(i,...e){if($i.logLevel<=Ie.DEBUG){const n=e.map(Jh);$i.debug(`Firestore (${ro}): ${i}`,...n)}}function Hi(i,...e){if($i.logLevel<=Ie.ERROR){const n=e.map(Jh);$i.error(`Firestore (${ro}): ${i}`,...n)}}function Au(i,...e){if($i.logLevel<=Ie.WARN){const n=e.map(Jh);$i.warn(`Firestore (${ro}): ${i}`,...n)}}function Jh(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(i="Unexpected state"){const e=`FIRESTORE (${ro}) INTERNAL ASSERTION FAILED: `+i;throw Hi(e),new Error(e)}function Ye(i,e){i||Te()}function je(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends Tr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class E1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Dt.UNAUTHENTICATED))}shutdown(){}}class T1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class I1{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ye(this.o===void 0);let s=this.i;const a=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let c=new Ui;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ui,e.enqueueRetryable(()=>a(this.currentUser))};const d=()=>{const y=c;e.enqueueRetryable(async()=>{await y.promise,await a(this.currentUser)})},g=y=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(y=>g(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?g(y):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ui)}},0),d()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ye(typeof s.accessToken=="string"),new Ag(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string"),new Dt(e)}}class S1{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class A1{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new S1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class om{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k1{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Gn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ye(this.o===void 0);const s=c=>{c.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.R;return this.R=c.token,se("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>s(c))};const a=c=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>a(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?a(c):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new om(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ye(typeof n.token=="string"),this.R=n.token,new om(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=C1(40);for(let c=0;c<a.length;++c)s.length<20&&a[c]<n&&(s+=e.charAt(a[c]%62))}return s}}function xe(i,e){return i<e?-1:i>e?1:0}function Dh(i,e){let n=0;for(;n<i.length&&n<e.length;){const s=i.codePointAt(n),a=e.codePointAt(n);if(s!==a){if(s<128&&a<128)return xe(s,a);{const c=R1(),d=P1(c.encode(am(i,n)),c.encode(am(e,n)));return d!==0?d:xe(s,a)}}n+=s>65535?2:1}return xe(i.length,e.length)}function am(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function P1(i,e){for(let n=0;n<i.length&&n<e.length;++n)if(i[n]!==e[n])return xe(i[n],e[n]);return xe(i.length,e.length)}function Xs(i,e,n){return i.length===e.length&&i.every((s,a)=>n(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=-62135596800,um=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*um);return new gt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new de(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new de(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<lm)throw new de(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/um}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-lm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{static fromTimestamp(e){return new Ge(e)}static min(){return new Ge(new gt(0,0))}static max(){return new Ge(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="__name__";class Wn{constructor(e,n,s){n===void 0?n=0:n>e.length&&Te(),s===void 0?s=e.length-n:s>e.length-n&&Te(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let a=0;a<s;a++){const c=Wn.compareSegments(e.get(a),n.get(a));if(c!==0)return c}return xe(e.length,n.length)}static compareSegments(e,n){const s=Wn.isNumericId(e),a=Wn.isNumericId(n);return s&&!a?-1:!s&&a?1:s&&a?Wn.extractNumericId(e).compare(Wn.extractNumericId(n)):Dh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yh.fromString(e.substring(4,e.length-2))}}class Xe extends Wn{construct(e,n,s){return new Xe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new de(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(a=>a.length>0))}return new Xe(n)}static emptyPath(){return new Xe([])}}const x1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends Wn{construct(e,n,s){return new It(e,n,s)}static isValidIdentifier(e){return x1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cm}static keyField(){return new It([cm])}static fromServerFormat(e){const n=[];let s="",a=0;const c=()=>{if(s.length===0)throw new de(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let d=!1;for(;a<e.length;){const g=e[a];if(g==="\\"){if(a+1===e.length)throw new de(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new de(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else g==="`"?(d=!d,a++):g!=="."||d?(s+=g,a++):(c(),a++)}if(c(),d)throw new de(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Xe.fromString(e))}static fromName(e){return new ge(Xe.fromString(e).popFirst(5))}static empty(){return new ge(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Xe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=-1;function N1(i,e){const n=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=Ge.fromTimestamp(s===1e9?new gt(n+1,0):new gt(n,s));return new ii(a,ge.empty(),e)}function D1(i){return new ii(i.readTime,i.key,ca)}class ii{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ii(Ge.min(),ge.empty(),ca)}static max(){return new ii(Ge.max(),ge.empty(),ca)}}function O1(i,e){let n=i.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(i.documentKey,e.documentKey),n!==0?n:xe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class L1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(i){if(i.code!==q.FAILED_PRECONDITION||i.message!==V1)throw i;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((s,a)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,a)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,a)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,s)=>{n(e)})}static reject(e){return new B((n,s)=>{s(e)})}static waitFor(e){return new B((n,s)=>{let a=0,c=0,d=!1;e.forEach(g=>{++a,g.next(()=>{++c,d&&c===a&&n()},y=>s(y))}),d=!0,c===a&&n()})}static or(e){let n=B.resolve(!1);for(const s of e)n=n.next(a=>a?B.resolve(a):s());return n}static forEach(e,n){const s=[];return e.forEach((a,c)=>{s.push(n.call(this,a,c))}),this.waitFor(s)}static mapArray(e,n){return new B((s,a)=>{const c=e.length,d=new Array(c);let g=0;for(let y=0;y<c;y++){const w=y;n(e[w]).next(k=>{d[w]=k,++g,g===c&&s(d)},k=>a(k))}})}static doWhile(e,n){return new B((s,a)=>{const c=()=>{e()===!0?n().next(()=>{c()},a):s()};c()})}}function M1(i){const e=i.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function va(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ed.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=-1;function nd(i){return i==null}function ou(i){return i===0&&1/i==-1/0}function b1(i){return typeof i=="number"&&Number.isInteger(i)&&!ou(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="";function U1(i){let e="";for(let n=0;n<i.length;n++)e.length>0&&(e=hm(e)),e=F1(i.get(n),e);return hm(e)}function F1(i,e){let n=e;const s=i.length;for(let a=0;a<s;a++){const c=i.charAt(a);switch(c){case"\0":n+="";break;case Cg:n+="";break;default:n+=c}}return n}function hm(i){return i+Cg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(i){let e=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e++;return e}function io(i,e){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e(n,i[n])}function Rg(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new Kt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new Kt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return n+s.left.size;a<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wl(this.root,e,this.comparator,!0)}}class Wl{constructor(e,n,s,a){this.isReverse=a,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=n?s(e.key,n):1,n&&a&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,s,a,c){this.key=e,this.value=n,this.color=s??Et.RED,this.left=a??Et.EMPTY,this.right=c??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,a,c){return new Et(e??this.key,n??this.value,s??this.color,a??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const c=s(e,a.key);return a=c<0?a.copy(null,null,null,a.left.insert(e,n,s),null):c===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return Et.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,n,s,a,c){return this}insert(e,n,s){return new Et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.comparator=e,this.data=new Kt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fm(this.data.getIterator())}getIteratorFrom(e){return new fm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,c=s.getNext().key;if(this.comparator(a,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new St(this.comparator);return n.data=e,n}}class fm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new Nn([])}unionWith(e){let n=new St(It.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new j1("Invalid base64 string: "+c):c}}(e);return new Xn(n)}static fromUint8Array(e){const n=function(a){let c="";for(let d=0;d<a.length;++d)c+=String.fromCharCode(a[d]);return c}(e);return new Xn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xn.EMPTY_BYTE_STRING=new Xn("");const z1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wi(i){if(Ye(!!i),typeof i=="string"){let e=0;const n=z1.exec(i);if(Ye(!!n),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Tt(i.seconds),nanos:Tt(i.nanos)}}function Tt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ys(i){return typeof i=="string"?Xn.fromBase64String(i):Xn.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="server_timestamp",xg="__type__",Ng="__previous_value__",Dg="__local_write_time__";function rd(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[xg])===null||n===void 0?void 0:n.stringValue)===Pg}function id(i){const e=i.mapValue.fields[Ng];return rd(e)?id(e):e}function au(i){const e=Wi(i.mapValue.fields[Dg].timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n,s,a,c,d,g,y,w){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=a,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=g,this.longPollingOptions=y,this.useFetchStreams=w}}const lu="(default)";class uu{constructor(e,n){this.projectId=e,this.database=n||lu}static empty(){return new uu("","")}get isDefaultDatabase(){return this.database===lu}isEqual(e){return e instanceof uu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="__type__",Vg="__max__",Gl={mapValue:{fields:{__type__:{stringValue:Vg}}}},Lg="__vector__",Oh="value";function Gi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?rd(i)?4:H1(i)?9007199254740991:$1(i)?10:11:Te()}function Yn(i,e){if(i===e)return!0;const n=Gi(i);if(n!==Gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return au(i).isEqual(au(e));case 3:return function(a,c){if(typeof a.timestampValue=="string"&&typeof c.timestampValue=="string"&&a.timestampValue.length===c.timestampValue.length)return a.timestampValue===c.timestampValue;const d=Wi(a.timestampValue),g=Wi(c.timestampValue);return d.seconds===g.seconds&&d.nanos===g.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,c){return Ys(a.bytesValue).isEqual(Ys(c.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,c){return Tt(a.geoPointValue.latitude)===Tt(c.geoPointValue.latitude)&&Tt(a.geoPointValue.longitude)===Tt(c.geoPointValue.longitude)}(i,e);case 2:return function(a,c){if("integerValue"in a&&"integerValue"in c)return Tt(a.integerValue)===Tt(c.integerValue);if("doubleValue"in a&&"doubleValue"in c){const d=Tt(a.doubleValue),g=Tt(c.doubleValue);return d===g?ou(d)===ou(g):isNaN(d)&&isNaN(g)}return!1}(i,e);case 9:return Xs(i.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:case 11:return function(a,c){const d=a.mapValue.fields||{},g=c.mapValue.fields||{};if(dm(d)!==dm(g))return!1;for(const y in d)if(d.hasOwnProperty(y)&&(g[y]===void 0||!Yn(d[y],g[y])))return!1;return!0}(i,e);default:return Te()}}function ha(i,e){return(i.values||[]).find(n=>Yn(n,e))!==void 0}function Js(i,e){if(i===e)return 0;const n=Gi(i),s=Gi(e);if(n!==s)return xe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(i.booleanValue,e.booleanValue);case 2:return function(c,d){const g=Tt(c.integerValue||c.doubleValue),y=Tt(d.integerValue||d.doubleValue);return g<y?-1:g>y?1:g===y?0:isNaN(g)?isNaN(y)?0:-1:1}(i,e);case 3:return pm(i.timestampValue,e.timestampValue);case 4:return pm(au(i),au(e));case 5:return Dh(i.stringValue,e.stringValue);case 6:return function(c,d){const g=Ys(c),y=Ys(d);return g.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(c,d){const g=c.split("/"),y=d.split("/");for(let w=0;w<g.length&&w<y.length;w++){const k=xe(g[w],y[w]);if(k!==0)return k}return xe(g.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(c,d){const g=xe(Tt(c.latitude),Tt(d.latitude));return g!==0?g:xe(Tt(c.longitude),Tt(d.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return mm(i.arrayValue,e.arrayValue);case 10:return function(c,d){var g,y,w,k;const N=c.fields||{},j=d.fields||{},G=(g=N[Oh])===null||g===void 0?void 0:g.arrayValue,Y=(y=j[Oh])===null||y===void 0?void 0:y.arrayValue,Z=xe(((w=G==null?void 0:G.values)===null||w===void 0?void 0:w.length)||0,((k=Y==null?void 0:Y.values)===null||k===void 0?void 0:k.length)||0);return Z!==0?Z:mm(G,Y)}(i.mapValue,e.mapValue);case 11:return function(c,d){if(c===Gl.mapValue&&d===Gl.mapValue)return 0;if(c===Gl.mapValue)return 1;if(d===Gl.mapValue)return-1;const g=c.fields||{},y=Object.keys(g),w=d.fields||{},k=Object.keys(w);y.sort(),k.sort();for(let N=0;N<y.length&&N<k.length;++N){const j=Dh(y[N],k[N]);if(j!==0)return j;const G=Js(g[y[N]],w[k[N]]);if(G!==0)return G}return xe(y.length,k.length)}(i.mapValue,e.mapValue);default:throw Te()}}function pm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return xe(i,e);const n=Wi(i),s=Wi(e),a=xe(n.seconds,s.seconds);return a!==0?a:xe(n.nanos,s.nanos)}function mm(i,e){const n=i.values||[],s=e.values||[];for(let a=0;a<n.length&&a<s.length;++a){const c=Js(n[a],s[a]);if(c)return c}return xe(n.length,s.length)}function Zs(i){return Vh(i)}function Vh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(n){const s=Wi(n);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(n){return Ys(n).toBase64()}(i.bytesValue):"referenceValue"in i?function(n){return ge.fromName(n).toString()}(i.referenceValue):"geoPointValue"in i?function(n){return`geo(${n.latitude},${n.longitude})`}(i.geoPointValue):"arrayValue"in i?function(n){let s="[",a=!0;for(const c of n.values||[])a?a=!1:s+=",",s+=Vh(c);return s+"]"}(i.arrayValue):"mapValue"in i?function(n){const s=Object.keys(n.fields||{}).sort();let a="{",c=!0;for(const d of s)c?c=!1:a+=",",a+=`${d}:${Vh(n.fields[d])}`;return a+"}"}(i.mapValue):Te()}function Yl(i){switch(Gi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=id(i);return e?16+Yl(e):16;case 5:return 2*i.stringValue.length;case 6:return Ys(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,c)=>a+Yl(c),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return io(s.fields,(c,d)=>{a+=c.length+Yl(d)}),a}(i.mapValue);default:throw Te()}}function Lh(i){return!!i&&"integerValue"in i}function sd(i){return!!i&&"arrayValue"in i}function Jl(i){return!!i&&"mapValue"in i}function $1(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Og])===null||n===void 0?void 0:n.stringValue)===Lg}function ia(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return io(i.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ia(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ia(i.arrayValue.values[n]);return e}return Object.assign({},i)}function H1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Vg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.value=e}static empty(){return new xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Jl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ia(n)}setAll(e){let n=It.emptyPath(),s={},a=[];e.forEach((d,g)=>{if(!n.isImmediateParentOf(g)){const y=this.getFieldsMap(n);this.applyChanges(y,s,a),s={},a=[],n=g.popLast()}d?s[g.lastSegment()]=ia(d):a.push(g.lastSegment())});const c=this.getFieldsMap(n);this.applyChanges(c,s,a)}delete(e){const n=this.field(e.popLast());Jl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=n.mapValue.fields[e.get(s)];Jl(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,s){io(n,(a,c)=>e[a]=c);for(const a of s)delete e[a]}clone(){return new xn(ia(this.value))}}function Mg(i){const e=[];return io(i.fields,(n,s)=>{const a=new It([n]);if(Jl(s)){const c=Mg(s.mapValue).fields;if(c.length===0)e.push(a);else for(const d of c)e.push(a.child(d))}else e.push(a)}),new Nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,s,a,c,d,g){this.key=e,this.documentType=n,this.version=s,this.readTime=a,this.createTime=c,this.data=d,this.documentState=g}static newInvalidDocument(e){return new Pn(e,0,Ge.min(),Ge.min(),Ge.min(),xn.empty(),0)}static newFoundDocument(e,n,s,a){return new Pn(e,1,n,Ge.min(),s,a,0)}static newNoDocument(e,n){return new Pn(e,2,n,Ge.min(),Ge.min(),xn.empty(),0)}static newUnknownDocument(e,n){return new Pn(e,3,n,Ge.min(),Ge.min(),xn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){this.position=e,this.inclusive=n}}function gm(i,e,n){let s=0;for(let a=0;a<i.position.length;a++){const c=e[a],d=i.position[a];if(c.field.isKeyField()?s=ge.comparator(ge.fromName(d.referenceValue),n.key):s=Js(d,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function ym(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!Yn(i.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n="asc"){this.field=e,this.dir=n}}function W1(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{}class mt extends bg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new q1(e,n,s):n==="array-contains"?new X1(e,s):n==="in"?new Y1(e,s):n==="not-in"?new J1(e,s):n==="array-contains-any"?new Z1(e,s):new mt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new K1(e,s):new Q1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Js(n,this.value)):n!==null&&Gi(this.value)===Gi(n)&&this.matchesComparison(Js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class si extends bg{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new si(e,n)}matches(e){return Ug(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Ug(i){return i.op==="and"}function Fg(i){return G1(i)&&Ug(i)}function G1(i){for(const e of i.filters)if(e instanceof si)return!1;return!0}function Mh(i){if(i instanceof mt)return i.field.canonicalString()+i.op.toString()+Zs(i.value);if(Fg(i))return i.filters.map(e=>Mh(e)).join(",");{const e=i.filters.map(n=>Mh(n)).join(",");return`${i.op}(${e})`}}function jg(i,e){return i instanceof mt?function(s,a){return a instanceof mt&&s.op===a.op&&s.field.isEqual(a.field)&&Yn(s.value,a.value)}(i,e):i instanceof si?function(s,a){return a instanceof si&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((c,d,g)=>c&&jg(d,a.filters[g]),!0):!1}(i,e):void Te()}function zg(i){return i instanceof mt?function(n){return`${n.field.canonicalString()} ${n.op} ${Zs(n.value)}`}(i):i instanceof si?function(n){return n.op.toString()+" {"+n.getFilters().map(zg).join(" ,")+"}"}(i):"Filter"}class q1 extends mt{constructor(e,n,s){super(e,n,s),this.key=ge.fromName(s.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class K1 extends mt{constructor(e,n){super(e,"in",n),this.keys=Bg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Q1 extends mt{constructor(e,n){super(e,"not-in",n),this.keys=Bg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bg(i,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ge.fromName(s.referenceValue))}class X1 extends mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sd(n)&&ha(n.arrayValue,this.value)}}class Y1 extends mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ha(this.value.arrayValue,n)}}class J1 extends mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ha(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ha(this.value.arrayValue,n)}}class Z1 extends mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ha(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n=null,s=[],a=[],c=null,d=null,g=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=a,this.limit=c,this.startAt=d,this.endAt=g,this.le=null}}function vm(i,e=null,n=[],s=[],a=null,c=null,d=null){return new ew(i,e,n,s,a,c,d)}function od(i){const e=je(i);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Mh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),nd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Zs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Zs(s)).join(",")),e.le=n}return e.le}function ad(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!W1(i.orderBy[n],e.orderBy[n]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!jg(i.filters[n],e.filters[n]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!ym(i.startAt,e.startAt)&&ym(i.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n=null,s=[],a=[],c=null,d="F",g=null,y=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=a,this.limit=c,this.limitType=d,this.startAt=g,this.endAt=y,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function tw(i,e,n,s,a,c,d,g){return new ku(i,e,n,s,a,c,d,g)}function nw(i){return new ku(i)}function _m(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function rw(i){return i.collectionGroup!==null}function sa(i){const e=je(i);if(e.he===null){e.he=[];const n=new Set;for(const c of e.explicitOrderBy)e.he.push(c),n.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let g=new St(It.comparator);return d.filters.forEach(y=>{y.getFlattenedFilters().forEach(w=>{w.isInequality()&&(g=g.add(w.field))})}),g})(e).forEach(c=>{n.has(c.canonicalString())||c.isKeyField()||e.he.push(new hu(c,s))}),n.has(It.keyField().canonicalString())||e.he.push(new hu(It.keyField(),s))}return e.he}function Fi(i){const e=je(i);return e.Pe||(e.Pe=iw(e,sa(i))),e.Pe}function iw(i,e){if(i.limitType==="F")return vm(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const c=a.dir==="desc"?"asc":"desc";return new hu(a.field,c)});const n=i.endAt?new cu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new cu(i.startAt.position,i.startAt.inclusive):null;return vm(i.path,i.collectionGroup,e,i.filters,i.limit,n,s)}}function bh(i,e,n){return new ku(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,n,i.startAt,i.endAt)}function $g(i,e){return ad(Fi(i),Fi(e))&&i.limitType===e.limitType}function Hg(i){return`${od(Fi(i))}|lt:${i.limitType}`}function na(i){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(a=>zg(a)).join(", ")}]`),nd(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(a=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(a)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(a=>Zs(a)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(a=>Zs(a)).join(",")),`Target(${s})`}(Fi(i))}; limitType=${i.limitType})`}function ld(i,e){return e.isFoundDocument()&&function(s,a){const c=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ge.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(i,e)&&function(s,a){for(const c of sa(s))if(!c.field.isKeyField()&&a.data.field(c.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const c of s.filters)if(!c.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(d,g,y){const w=gm(d,g,y);return d.inclusive?w<=0:w<0}(s.startAt,sa(s),a)||s.endAt&&!function(d,g,y){const w=gm(d,g,y);return d.inclusive?w>=0:w>0}(s.endAt,sa(s),a))}(i,e)}function sw(i){return(e,n)=>{let s=!1;for(const a of sa(i)){const c=ow(a,e,n);if(c!==0)return c;s=s||a.field.isKeyField()}return 0}}function ow(i,e,n){const s=i.field.isKeyField()?ge.comparator(e.key,n.key):function(c,d,g){const y=d.data.field(c),w=g.data.field(c);return y!==null&&w!==null?Js(y,w):Te()}(i.field,e,n);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[a,c]of s)if(this.equalsFn(a,e))return c}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let c=0;c<a.length;c++)if(this.equalsFn(a[c][0],e))return void(a[c]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[n]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){io(this.inner,(n,s)=>{for(const[a,c]of s)e(a,c)})}isEmpty(){return Rg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=new Kt(ge.comparator);function du(){return aw}const Wg=new Kt(ge.comparator);function ql(...i){let e=Wg;for(const n of i)e=e.insert(n.key,n);return e}function Gg(i){let e=Wg;return i.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function bi(){return oa()}function qg(){return oa()}function oa(){return new Ki(i=>i.toString(),(i,e)=>i.isEqual(e))}const lw=new Kt(ge.comparator),uw=new St(ge.comparator);function Ot(...i){let e=uw;for(const n of i)e=e.add(n);return e}const cw=new St(xe);function hw(){return cw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ou(e)?"-0":e}}function Kg(i){return{integerValue:""+i}}function dw(i,e){return b1(e)?Kg(e):ud(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this._=void 0}}function fw(i,e,n){return i instanceof fu?function(a,c){const d={fields:{[xg]:{stringValue:Pg},[Dg]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return c&&rd(c)&&(c=id(c)),c&&(d.fields[Ng]=c),{mapValue:d}}(n,e):i instanceof da?Xg(i,e):i instanceof fa?Yg(i,e):function(a,c){const d=Qg(a,c),g=wm(d)+wm(a.Ie);return Lh(d)&&Lh(a.Ie)?Kg(g):ud(a.serializer,g)}(i,e)}function pw(i,e,n){return i instanceof da?Xg(i,e):i instanceof fa?Yg(i,e):n}function Qg(i,e){return i instanceof pu?function(s){return Lh(s)||function(c){return!!c&&"doubleValue"in c}(s)}(e)?e:{integerValue:0}:null}class fu extends Cu{}class da extends Cu{constructor(e){super(),this.elements=e}}function Xg(i,e){const n=Jg(e);for(const s of i.elements)n.some(a=>Yn(a,s))||n.push(s);return{arrayValue:{values:n}}}class fa extends Cu{constructor(e){super(),this.elements=e}}function Yg(i,e){let n=Jg(e);for(const s of i.elements)n=n.filter(a=>!Yn(a,s));return{arrayValue:{values:n}}}class pu extends Cu{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function wm(i){return Tt(i.integerValue||i.doubleValue)}function Jg(i){return sd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function mw(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof da&&a instanceof da||s instanceof fa&&a instanceof fa?Xs(s.elements,a.elements,Yn):s instanceof pu&&a instanceof pu?Yn(s.Ie,a.Ie):s instanceof fu&&a instanceof fu}(i.transform,e.transform)}class gw{constructor(e,n){this.version=e,this.transformResults=n}}class vr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vr}static exists(e){return new vr(void 0,e)}static updateTime(e){return new vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zl(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Ru{}function Zg(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new ty(i.key,vr.none()):new _a(i.key,i.data,vr.none());{const n=i.data,s=xn.empty();let a=new St(It.comparator);for(let c of e.fields)if(!a.has(c)){let d=n.field(c);d===null&&c.length>1&&(c=c.popLast(),d=n.field(c)),d===null?s.delete(c):s.set(c,d),a=a.add(c)}return new Qi(i.key,s,new Nn(a.toArray()),vr.none())}}function yw(i,e,n){i instanceof _a?function(a,c,d){const g=a.value.clone(),y=Tm(a.fieldTransforms,c,d.transformResults);g.setAll(y),c.convertToFoundDocument(d.version,g).setHasCommittedMutations()}(i,e,n):i instanceof Qi?function(a,c,d){if(!Zl(a.precondition,c))return void c.convertToUnknownDocument(d.version);const g=Tm(a.fieldTransforms,c,d.transformResults),y=c.data;y.setAll(ey(a)),y.setAll(g),c.convertToFoundDocument(d.version,y).setHasCommittedMutations()}(i,e,n):function(a,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()}(0,e,n)}function aa(i,e,n,s){return i instanceof _a?function(c,d,g,y){if(!Zl(c.precondition,d))return g;const w=c.value.clone(),k=Im(c.fieldTransforms,y,d);return w.setAll(k),d.convertToFoundDocument(d.version,w).setHasLocalMutations(),null}(i,e,n,s):i instanceof Qi?function(c,d,g,y){if(!Zl(c.precondition,d))return g;const w=Im(c.fieldTransforms,y,d),k=d.data;return k.setAll(ey(c)),k.setAll(w),d.convertToFoundDocument(d.version,k).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(N=>N.field))}(i,e,n,s):function(c,d,g){return Zl(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):g}(i,e,n)}function vw(i,e){let n=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),c=Qg(s.transform,a||null);c!=null&&(n===null&&(n=xn.empty()),n.set(s.field,c))}return n||null}function Em(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Xs(s,a,(c,d)=>mw(c,d))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class _a extends Ru{constructor(e,n,s,a=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Qi extends Ru{constructor(e,n,s,a,c=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=a,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function ey(i){const e=new Map;return i.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=i.data.field(n);e.set(n,s)}}),e}function Tm(i,e,n){const s=new Map;Ye(i.length===n.length);for(let a=0;a<n.length;a++){const c=i[a],d=c.transform,g=e.data.field(c.field);s.set(c.field,pw(d,g,n[a]))}return s}function Im(i,e,n){const s=new Map;for(const a of i){const c=a.transform,d=n.data.field(a.field);s.set(a.field,fw(c,d,e))}return s}class ty extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _w extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,n,s,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const c=this.mutations[a];c.key.isEqual(e.key)&&yw(c,e,s[a])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=aa(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=aa(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=qg();return this.mutations.forEach(a=>{const c=e.get(a.key),d=c.overlayedDocument;let g=this.applyToLocalView(d,c.mutatedFields);g=n.has(a.key)?null:g;const y=Zg(d,g);y!==null&&s.set(a.key,y),d.isValidDocument()||d.convertToNoDocument(Ge.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ot())}isEqual(e){return this.batchId===e.batchId&&Xs(this.mutations,e.mutations,(n,s)=>Em(n,s))&&Xs(this.baseMutations,e.baseMutations,(n,s)=>Em(n,s))}}class cd{constructor(e,n,s,a){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=a}static from(e,n,s){Ye(e.mutations.length===s.length);let a=function(){return lw}();const c=e.mutations;for(let d=0;d<c.length;d++)a=a.insert(c[d].key,s[d].version);return new cd(e,n,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,Re;function Tw(i){switch(i){case q.OK:return Te();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return Te()}}function Iw(i){if(i===void 0)return Hi("GRPC error has no .code"),q.UNKNOWN;switch(i){case rt.OK:return q.OK;case rt.CANCELLED:return q.CANCELLED;case rt.UNKNOWN:return q.UNKNOWN;case rt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case rt.INTERNAL:return q.INTERNAL;case rt.UNAVAILABLE:return q.UNAVAILABLE;case rt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case rt.NOT_FOUND:return q.NOT_FOUND;case rt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case rt.ABORTED:return q.ABORTED;case rt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case rt.DATA_LOSS:return q.DATA_LOSS;default:return Te()}}(Re=rt||(rt={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Yh([4294967295,4294967295],0);class Sw{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Uh(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Aw(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function kw(i,e){return Uh(i,e.toTimestamp())}function Ws(i){return Ye(!!i),Ge.fromTimestamp(function(n){const s=Wi(n);return new gt(s.seconds,s.nanos)}(i))}function ny(i,e){return Fh(i,e).canonicalString()}function Fh(i,e){const n=function(a){return new Xe(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?n:n.child(e)}function Cw(i){const e=Xe.fromString(i);return Ye(Lw(e)),e}function jh(i,e){return ny(i.databaseId,e.path)}function Rw(i){const e=Cw(i);return e.length===4?Xe.emptyPath():xw(e)}function Pw(i){return new Xe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function xw(i){return Ye(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Sm(i,e,n){return{name:jh(i,e),fields:n.value.mapValue.fields}}function Nw(i,e){let n;if(e instanceof _a)n={update:Sm(i,e.key,e.value)};else if(e instanceof ty)n={delete:jh(i,e.key)};else if(e instanceof Qi)n={update:Sm(i,e.key,e.data),updateMask:Vw(e.fieldMask)};else{if(!(e instanceof _w))return Te();n={verify:jh(i,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(c,d){const g=d.transform;if(g instanceof fu)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof da)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof fa)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof pu)return{fieldPath:d.field.canonicalString(),increment:g.Ie};throw Te()}(0,s))),e.precondition.isNone||(n.currentDocument=function(a,c){return c.updateTime!==void 0?{updateTime:kw(a,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Te()}(i,e.precondition)),n}function Dw(i,e){return i&&i.length>0?(Ye(e!==void 0),i.map(n=>function(a,c){let d=a.updateTime?Ws(a.updateTime):Ws(c);return d.isEqual(Ge.min())&&(d=Ws(c)),new gw(d,a.transformResults||[])}(n,e))):[]}function Ow(i){let e=Rw(i.parent);const n=i.structuredQuery,s=n.from?n.from.length:0;let a=null;if(s>0){Ye(s===1);const k=n.from[0];k.allDescendants?a=k.collectionId:e=e.child(k.collectionId)}let c=[];n.where&&(c=function(N){const j=ry(N);return j instanceof si&&Fg(j)?j.getFilters():[j]}(n.where));let d=[];n.orderBy&&(d=function(N){return N.map(j=>function(Y){return new hu($s(Y.field),function(Q){switch(Q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(Y.direction))}(j))}(n.orderBy));let g=null;n.limit&&(g=function(N){let j;return j=typeof N=="object"?N.value:N,nd(j)?null:j}(n.limit));let y=null;n.startAt&&(y=function(N){const j=!!N.before,G=N.values||[];return new cu(G,j)}(n.startAt));let w=null;return n.endAt&&(w=function(N){const j=!N.before,G=N.values||[];return new cu(G,j)}(n.endAt)),tw(e,a,d,c,g,"F",y,w)}function ry(i){return i.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=$s(n.unaryFilter.field);return mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=$s(n.unaryFilter.field);return mt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=$s(n.unaryFilter.field);return mt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=$s(n.unaryFilter.field);return mt.create(d,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(i):i.fieldFilter!==void 0?function(n){return mt.create($s(n.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(n.fieldFilter.op),n.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(n){return si.create(n.compositeFilter.filters.map(s=>ry(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Te()}}(n.compositeFilter.op))}(i):Te()}function $s(i){return It.fromServerFormat(i.fieldPath)}function Vw(i){const e=[];return i.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Lw(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e){this.Tt=e}}function bw(i){const e=Ow({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?bh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.Tn=new Fw}addToCollectionParentIndex(e,n){return this.Tn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(ii.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(ii.min())}updateCollectionGroup(e,n,s){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class Fw{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n]||new St(Xe.comparator),c=!a.has(s);return this.index[n]=a.add(s),c}has(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n];return a&&a.has(s)}getEntries(e){return(this.index[e]||new St(Xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iy=41943040;class qt{static withCacheSize(e){return new qt(e,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt.DEFAULT_COLLECTION_PERCENTILE=10,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qt.DEFAULT=new qt(iy,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qt.DISABLED=new qt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new eo(0)}static Kn(){return new eo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="LruGarbageCollector",jw=1048576;function Cm([i,e],[n,s]){const a=xe(i,n);return a===0?xe(e,s):a}class zw{constructor(e){this.Hn=e,this.buffer=new St(Cm),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Cm(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Bw{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){se(km,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){va(n)?se(km,"Ignoring IndexedDB error during garbage collection: ",n):await Zh(n)}await this.er(3e5)})}}class $w{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return B.resolve(ed.ae);const s=new zw(n);return this.tr.forEachTarget(e,a=>s.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>s.Zn(a))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.tr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Am)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Am):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let s,a,c,d,g,y,w;const k=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(N=>(N>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${N}`),a=this.params.maximumSequenceNumbersToCollect):a=N,d=Date.now(),this.nthSequenceNumber(e,a))).next(N=>(s=N,g=Date.now(),this.removeTargets(e,s,n))).next(N=>(c=N,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(N=>(w=Date.now(),Bs()<=Ie.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-k}ms
	Determined least recently used ${a} in `+(g-d)+`ms
	Removed ${c} targets in `+(y-g)+`ms
	Removed ${N} documents in `+(w-y)+`ms
Total Duration: ${w-k}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:c,documentsRemoved:N})))}}function Hw(i,e){return new $w(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(){this.changes=new Ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?B.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n,s,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,n))).next(a=>(s!==null&&aa(s.mutation,a,Nn.empty(),gt.now()),a))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ot()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ot()){const a=bi();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,s).next(c=>{let d=ql();return c.forEach((g,y)=>{d=d.insert(g,y.overlayedDocument)}),d}))}getOverlayedDocuments(e,n){const s=bi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ot()))}populateOverlays(e,n,s){const a=[];return s.forEach(c=>{n.has(c)||a.push(c)}),this.documentOverlayCache.getOverlays(e,a).next(c=>{c.forEach((d,g)=>{n.set(d,g)})})}computeViews(e,n,s,a){let c=du();const d=oa(),g=function(){return oa()}();return n.forEach((y,w)=>{const k=s.get(w.key);a.has(w.key)&&(k===void 0||k.mutation instanceof Qi)?c=c.insert(w.key,w):k!==void 0?(d.set(w.key,k.mutation.getFieldMask()),aa(k.mutation,w,k.mutation.getFieldMask(),gt.now())):d.set(w.key,Nn.empty())}),this.recalculateAndSaveOverlays(e,c).next(y=>(y.forEach((w,k)=>d.set(w,k)),n.forEach((w,k)=>{var N;return g.set(w,new Gw(k,(N=d.get(w))!==null&&N!==void 0?N:null))}),g))}recalculateAndSaveOverlays(e,n){const s=oa();let a=new Kt((d,g)=>d-g),c=Ot();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(d=>{for(const g of d)g.keys().forEach(y=>{const w=n.get(y);if(w===null)return;let k=s.get(y)||Nn.empty();k=g.applyToLocalView(w,k),s.set(y,k);const N=(a.get(g.batchId)||Ot()).add(y);a=a.insert(g.batchId,N)})}).next(()=>{const d=[],g=a.getReverseIterator();for(;g.hasNext();){const y=g.getNext(),w=y.key,k=y.value,N=qg();k.forEach(j=>{if(!c.has(j)){const G=Zg(n.get(j),s.get(j));G!==null&&N.set(j,G),c=c.add(j)}}),d.push(this.documentOverlayCache.saveOverlays(e,w,N))}return B.waitFor(d)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,a){return function(d){return ge.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,a):this.getDocumentsMatchingCollectionQuery(e,n,s,a)}getNextDocuments(e,n,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,a).next(c=>{const d=a-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,a-c.size):B.resolve(bi());let g=ca,y=c;return d.next(w=>B.forEach(w,(k,N)=>(g<N.largestBatchId&&(g=N.largestBatchId),c.get(k)?B.resolve():this.remoteDocumentCache.getEntry(e,k).next(j=>{y=y.insert(k,j)}))).next(()=>this.populateOverlays(e,w,c)).next(()=>this.computeViews(e,y,w,Ot())).next(k=>({batchId:g,changes:Gg(k)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next(s=>{let a=ql();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,n,s,a){const c=n.collectionGroup;let d=ql();return this.indexManager.getCollectionParents(e,c).next(g=>B.forEach(g,y=>{const w=function(N,j){return new ku(j,null,N.explicitOrderBy.slice(),N.filters.slice(),N.limit,N.limitType,N.startAt,N.endAt)}(n,y.child(c));return this.getDocumentsMatchingCollectionQuery(e,w,s,a).next(k=>{k.forEach((N,j)=>{d=d.insert(N,j)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(e,n,s,a){let c;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,c,a))).next(d=>{c.forEach((y,w)=>{const k=w.getKey();d.get(k)===null&&(d=d.insert(k,Pn.newInvalidDocument(k)))});let g=ql();return d.forEach((y,w)=>{const k=c.get(y);k!==void 0&&aa(k.mutation,w,Nn.empty(),gt.now()),ld(n,w)&&(g=g.insert(y,w))}),g})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return B.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(a){return{id:a.id,version:a.version,createTime:Ws(a.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(a){return{name:a.name,query:bw(a.bundledQuery),readTime:Ws(a.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.overlays=new Kt(ge.comparator),this.Rr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const s=bi();return B.forEach(n,a=>this.getOverlay(e,a).next(c=>{c!==null&&s.set(a,c)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((a,c)=>{this.Et(e,n,c)}),B.resolve()}removeOverlaysForBatchId(e,n,s){const a=this.Rr.get(s);return a!==void 0&&(a.forEach(c=>this.overlays=this.overlays.remove(c)),this.Rr.delete(s)),B.resolve()}getOverlaysForCollection(e,n,s){const a=bi(),c=n.length+1,d=new ge(n.child("")),g=this.overlays.getIteratorFrom(d);for(;g.hasNext();){const y=g.getNext().value,w=y.getKey();if(!n.isPrefixOf(w.path))break;w.path.length===c&&y.largestBatchId>s&&a.set(y.getKey(),y)}return B.resolve(a)}getOverlaysForCollectionGroup(e,n,s,a){let c=new Kt((w,k)=>w-k);const d=this.overlays.getIterator();for(;d.hasNext();){const w=d.getNext().value;if(w.getKey().getCollectionGroup()===n&&w.largestBatchId>s){let k=c.get(w.largestBatchId);k===null&&(k=bi(),c=c.insert(w.largestBatchId,k)),k.set(w.getKey(),w)}}const g=bi(),y=c.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((w,k)=>g.set(w,k)),!(g.size()>=a)););return B.resolve(g)}Et(e,n,s){const a=this.overlays.get(s.key);if(a!==null){const d=this.Rr.get(a.largestBatchId).delete(s.key);this.Rr.set(a.largestBatchId,d)}this.overlays=this.overlays.insert(s.key,new Ew(n,s));let c=this.Rr.get(n);c===void 0&&(c=Ot(),this.Rr.set(n,c)),this.Rr.set(n,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.sessionToken=Xn.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.Vr=new St(pt.mr),this.gr=new St(pt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const s=new pt(e,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.wr(new pt(e,n))}Sr(e,n){e.forEach(s=>this.removeReference(s,n))}br(e){const n=new ge(new Xe([])),s=new pt(n,e),a=new pt(n,e+1),c=[];return this.gr.forEachInRange([s,a],d=>{this.wr(d),c.push(d.key)}),c}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new ge(new Xe([])),s=new pt(n,e),a=new pt(n,e+1);let c=Ot();return this.gr.forEachInRange([s,a],d=>{c=c.add(d.key)}),c}containsKey(e){const n=new pt(e,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class pt{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return ge.comparator(e.key,n.key)||xe(e.Cr,n.Cr)}static pr(e,n){return xe(e.Cr,n.Cr)||ge.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new St(pt.mr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,a){const c=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new ww(c,n,s,a);this.mutationQueue.push(d);for(const g of a)this.Mr=this.Mr.add(new pt(g.key,c)),this.indexManager.addToCollectionParentIndex(e,g.key.path.popLast());return B.resolve(d)}lookupMutationBatch(e,n){return B.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,a=this.Nr(s),c=a<0?0:a;return B.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?td:this.Fr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new pt(n,0),a=new pt(n,Number.POSITIVE_INFINITY),c=[];return this.Mr.forEachInRange([s,a],d=>{const g=this.Or(d.Cr);c.push(g)}),B.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new St(xe);return n.forEach(a=>{const c=new pt(a,0),d=new pt(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([c,d],g=>{s=s.add(g.Cr)})}),B.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,a=s.length+1;let c=s;ge.isDocumentKey(c)||(c=c.child(""));const d=new pt(new ge(c),0);let g=new St(xe);return this.Mr.forEachWhile(y=>{const w=y.key.path;return!!s.isPrefixOf(w)&&(w.length===a&&(g=g.add(y.Cr)),!0)},d),B.resolve(this.Br(g))}Br(e){const n=[];return e.forEach(s=>{const a=this.Or(s);a!==null&&n.push(a)}),n}removeMutationBatch(e,n){Ye(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return B.forEach(n.mutations,a=>{const c=new pt(a.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,n){const s=new pt(n,0),a=this.Mr.firstAfterOrEqual(s);return B.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.kr=e,this.docs=function(){return new Kt(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,a=this.docs.get(s),c=a?a.size:0,d=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return B.resolve(s?s.document.mutableCopy():Pn.newInvalidDocument(n))}getEntries(e,n){let s=du();return n.forEach(a=>{const c=this.docs.get(a);s=s.insert(a,c?c.document.mutableCopy():Pn.newInvalidDocument(a))}),B.resolve(s)}getDocumentsMatchingQuery(e,n,s,a){let c=du();const d=n.path,g=new ge(d.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(g);for(;y.hasNext();){const{key:w,value:{document:k}}=y.getNext();if(!d.isPrefixOf(w.path))break;w.path.length>d.length+1||O1(D1(k),s)<=0||(a.has(k.key)||ld(n,k))&&(c=c.insert(k.key,k.mutableCopy()))}return B.resolve(c)}getAllFromCollectionGroup(e,n,s,a){Te()}qr(e,n){return B.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Zw(this)}getSize(e){return B.resolve(this.size)}}class Zw extends Ww{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?n.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(s)}),B.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.persistence=e,this.Qr=new Ki(n=>od(n),ad),this.lastRemoteSnapshotVersion=Ge.min(),this.highestTargetId=0,this.$r=0,this.Ur=new hd,this.targetCount=0,this.Kr=eo.Un()}forEachTarget(e,n){return this.Qr.forEach((s,a)=>n(a)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),B.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new eo(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.zn(n),B.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,s){let a=0;const c=[];return this.Qr.forEach((d,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.Qr.delete(d),c.push(this.removeMatchingKeysForTargetId(e,g.targetId)),a++)}),B.waitFor(c).next(()=>a)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const s=this.Qr.get(n)||null;return B.resolve(s)}addMatchingKeys(e,n,s){return this.Ur.yr(n,s),B.resolve()}removeMatchingKeys(e,n,s){this.Ur.Sr(n,s);const a=this.persistence.referenceDelegate,c=[];return a&&n.forEach(d=>{c.push(a.markPotentiallyOrphaned(e,d))}),B.waitFor(c)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),B.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ur.vr(n);return B.resolve(s)}containsKey(e,n){return B.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new ed(0),this.zr=!1,this.zr=!0,this.jr=new Xw,this.referenceDelegate=e(this),this.Hr=new eE(this),this.indexManager=new Uw,this.remoteDocumentCache=function(a){return new Jw(a)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new Mw(n),this.Yr=new Kw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Qw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Wr[e.toKey()];return s||(s=new Yw(n,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,s){se("MemoryPersistence","Starting transaction:",e);const a=new tE(this.Gr.next());return this.referenceDelegate.Zr(),s(a).next(c=>this.referenceDelegate.Xr(a).next(()=>c)).toPromise().then(c=>(a.raiseOnCommittedEvent(),c))}ei(e,n){return B.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,n)))}}class tE extends L1{constructor(e){super(),this.currentSequenceNumber=e}}class dd{constructor(e){this.persistence=e,this.ti=new hd,this.ni=null}static ri(e){return new dd(e)}get ii(){if(this.ni)return this.ni;throw Te()}addReference(e,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),B.resolve()}removeReference(e,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),B.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(a=>this.ii.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(a=>{a.forEach(c=>this.ii.add(c.toString()))}).next(()=>s.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ii,s=>{const a=ge.fromPath(s);return this.si(e,a).next(c=>{c||n.removeEntry(a,Ge.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return B.or([()=>B.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class mu{constructor(e,n){this.persistence=e,this.oi=new Ki(s=>U1(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=Hw(this,n)}static ri(e,n){return new mu(e,n)}Zr(){}Xr(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(a=>s+a))}sr(e){let n=0;return this.rr(e,s=>{n++}).next(()=>n)}rr(e,n){return B.forEach(this.oi,(s,a)=>this.ar(e,s,a).next(c=>c?B.resolve():n(a)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const a=this.persistence.getRemoteDocumentCache(),c=a.newChangeBuffer();return a.qr(e,d=>this.ar(e,d,n).next(g=>{g||(s++,c.removeEntry(d,Ge.min()))})).next(()=>c.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),B.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Yl(e.data.value)),n}ar(e,n,s){return B.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.oi.get(n);return B.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n,s,a){this.targetId=e,this.fromCache=n,this.Hi=s,this.Ji=a}static Yi(e,n){let s=Ot(),a=Ot();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:a=a.add(c.doc.key)}return new fd(e,n.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return r_()?8:M1(Vt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,s,a){const c={result:null};return this.rs(e,n).next(d=>{c.result=d}).next(()=>{if(!c.result)return this.ss(e,n,a,s).next(d=>{c.result=d})}).next(()=>{if(c.result)return;const d=new nE;return this._s(e,n,d).next(g=>{if(c.result=g,this.Xi)return this.us(e,n,d,g.size)})}).next(()=>c.result)}us(e,n,s,a){return s.documentReadCount<this.es?(Bs()<=Ie.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",na(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),B.resolve()):(Bs()<=Ie.DEBUG&&se("QueryEngine","Query:",na(n),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ts*a?(Bs()<=Ie.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",na(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fi(n))):B.resolve())}rs(e,n){if(_m(n))return B.resolve(null);let s=Fi(n);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(n.limit!==null&&a===1&&(n=bh(n,null,"F"),s=Fi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(c=>{const d=Ot(...c);return this.ns.getDocuments(e,d).next(g=>this.indexManager.getMinOffset(e,s).next(y=>{const w=this.cs(n,g);return this.ls(n,w,d,y.readTime)?this.rs(e,bh(n,null,"F")):this.hs(e,w,n,y)}))})))}ss(e,n,s,a){return _m(n)||a.isEqual(Ge.min())?B.resolve(null):this.ns.getDocuments(e,s).next(c=>{const d=this.cs(n,c);return this.ls(n,d,s,a)?B.resolve(null):(Bs()<=Ie.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),na(n)),this.hs(e,d,n,N1(a,ca)).next(g=>g))})}cs(e,n){let s=new St(sw(e));return n.forEach((a,c)=>{ld(e,c)&&(s=s.add(c))}),s}ls(e,n,s,a){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const c=e.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(a)>0)}_s(e,n,s){return Bs()<=Ie.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",na(n)),this.ns.getDocumentsMatchingQuery(e,n,ii.min(),s)}hs(e,n,s,a){return this.ns.getDocumentsMatchingQuery(e,s,a).next(c=>(n.forEach(d=>{c=c.insert(d.key,d)}),c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="LocalStore";class sE{constructor(e,n,s,a){this.persistence=e,this.Ps=n,this.serializer=a,this.Ts=new Kt(xe),this.Is=new Ki(c=>od(c),ad),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qw(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function oE(i,e,n,s){return new sE(i,e,n,s)}async function oy(i,e){const n=je(i);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let a;return n.mutationQueue.getAllMutationBatches(s).next(c=>(a=c,n.As(e),n.mutationQueue.getAllMutationBatches(s))).next(c=>{const d=[],g=[];let y=Ot();for(const w of a){d.push(w.batchId);for(const k of w.mutations)y=y.add(k.key)}for(const w of c){g.push(w.batchId);for(const k of w.mutations)y=y.add(k.key)}return n.localDocuments.getDocuments(s,y).next(w=>({Rs:w,removedBatchIds:d,addedBatchIds:g}))})})}function aE(i,e){const n=je(i);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),c=n.ds.newChangeBuffer({trackRemovals:!0});return function(g,y,w,k){const N=w.batch,j=N.keys();let G=B.resolve();return j.forEach(Y=>{G=G.next(()=>k.getEntry(y,Y)).next(Z=>{const Q=w.docVersions.get(Y);Ye(Q!==null),Z.version.compareTo(Q)<0&&(N.applyToRemoteDocument(Z,w),Z.isValidDocument()&&(Z.setReadTime(w.commitVersion),k.addEntry(Z)))})}),G.next(()=>g.mutationQueue.removeMutationBatch(y,N))}(n,s,e,c).next(()=>c.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(g){let y=Ot();for(let w=0;w<g.mutationResults.length;++w)g.mutationResults[w].transformResults.length>0&&(y=y.add(g.batch.mutations[w].key));return y}(e))).next(()=>n.localDocuments.getDocuments(s,a))})}function lE(i){const e=je(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function uE(i,e){const n=je(i);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=td),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class Rm{constructor(){this.activeTargetIds=hw()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cE{constructor(){this.ho=new Rm,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,s){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Rm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="ConnectivityMonitor";class xm{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){se(Pm,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){se(Pm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl=null;function zh(){return Kl===null?Kl=function(){return 268435456+Math.round(2147483648*Math.random())}():Kl++,"0x"+Kl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="RestConnection",dE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class fE{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${s}/databases/${a}`,this.wo=this.databaseId.database===lu?`project_id=${s}`:`project_id=${s}&database_id=${a}`}So(e,n,s,a,c){const d=zh(),g=this.bo(e,n.toUriEncodedString());se(wh,`Sending RPC '${e}' ${d}:`,g,s);const y={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(y,a,c),this.vo(e,g,y,s).then(w=>(se(wh,`Received RPC '${e}' ${d}: `,w),w),w=>{throw Au(wh,`RPC '${e}' ${d} failed with error: `,w,"url: ",g,"request:",s),w})}Co(e,n,s,a,c,d){return this.So(e,n,s,a,c)}Do(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ro}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((a,c)=>e[c]=a),s&&s.headers.forEach((a,c)=>e[c]=a)}bo(e,n){const s=dE[e];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="WebChannelConnection";class mE extends fE{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,s,a){const c=zh();return new Promise((d,g)=>{const y=new wg;y.setWithCredentials(!0),y.listenOnce(Eg.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Xl.NO_ERROR:const k=y.getResponseJson();se(Nt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(k)),d(k);break;case Xl.TIMEOUT:se(Nt,`RPC '${e}' ${c} timed out`),g(new de(q.DEADLINE_EXCEEDED,"Request time out"));break;case Xl.HTTP_ERROR:const N=y.getStatus();if(se(Nt,`RPC '${e}' ${c} failed with status:`,N,"response text:",y.getResponseText()),N>0){let j=y.getResponseJson();Array.isArray(j)&&(j=j[0]);const G=j==null?void 0:j.error;if(G&&G.status&&G.message){const Y=function(Q){const _e=Q.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(_e)>=0?_e:q.UNKNOWN}(G.status);g(new de(Y,G.message))}else g(new de(q.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new de(q.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{se(Nt,`RPC '${e}' ${c} completed.`)}});const w=JSON.stringify(a);se(Nt,`RPC '${e}' ${c} sending request:`,a),y.send(n,"POST",w,s,15)})}Wo(e,n,s){const a=zh(),c=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=Sg(),g=Ig(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},w=this.longPollingOptions.timeoutSeconds;w!==void 0&&(y.longPollingTimeout=Math.round(1e3*w)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Do(y.initMessageHeaders,n,s),y.encodeInitMessageHeaders=!0;const k=c.join("");se(Nt,`Creating RPC '${e}' stream ${a}: ${k}`,y);const N=d.createWebChannel(k,y);let j=!1,G=!1;const Y=new pE({Fo:Q=>{G?se(Nt,`Not sending because RPC '${e}' stream ${a} is closed:`,Q):(j||(se(Nt,`Opening RPC '${e}' stream ${a} transport.`),N.open(),j=!0),se(Nt,`RPC '${e}' stream ${a} sending:`,Q),N.send(Q))},Mo:()=>N.close()}),Z=(Q,_e,ye)=>{Q.listen(_e,me=>{try{ye(me)}catch(he){setTimeout(()=>{throw he},0)}})};return Z(N,ra.EventType.OPEN,()=>{G||(se(Nt,`RPC '${e}' stream ${a} transport opened.`),Y.Qo())}),Z(N,ra.EventType.CLOSE,()=>{G||(G=!0,se(Nt,`RPC '${e}' stream ${a} transport closed`),Y.Uo())}),Z(N,ra.EventType.ERROR,Q=>{G||(G=!0,Au(Nt,`RPC '${e}' stream ${a} transport errored:`,Q),Y.Uo(new de(q.UNAVAILABLE,"The operation could not be completed")))}),Z(N,ra.EventType.MESSAGE,Q=>{var _e;if(!G){const ye=Q.data[0];Ye(!!ye);const me=ye,he=(me==null?void 0:me.error)||((_e=me[0])===null||_e===void 0?void 0:_e.error);if(he){se(Nt,`RPC '${e}' stream ${a} received error:`,he);const $e=he.status;let Se=function(S){const C=rt[S];if(C!==void 0)return Iw(C)}($e),P=he.message;Se===void 0&&(Se=q.INTERNAL,P="Unknown error status: "+$e+" with message "+he.message),G=!0,Y.Uo(new de(Se,P)),N.close()}else se(Nt,`RPC '${e}' stream ${a} received:`,ye),Y.Ko(ye)}}),Z(g,Tg.STAT_EVENT,Q=>{Q.stat===Nh.PROXY?se(Nt,`RPC '${e}' stream ${a} detected buffering proxy`):Q.stat===Nh.NOPROXY&&se(Nt,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{Y.$o()},0),Y}}function Eh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(i){return new Sw(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,n,s=1e3,a=1.5,c=6e4){this.Ti=e,this.timerId=n,this.Go=s,this.zo=a,this.jo=c,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),a=Math.max(0,n-s);a>0&&se("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="PersistentStream";class gE{constructor(e,n,s,a,c,d,g,y){this.Ti=e,this.n_=s,this.r_=a,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=g,this.listener=y,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new ay(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Hi(n.toString()),Hi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.i_===n&&this.V_(s,a)},s=>{e(()=>{const a=new de(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(a)})})}V_(e,n){const s=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{s(()=>this.m_(a))}),this.stream.onMessage(a=>{s(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return se(Nm,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(se(Nm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yE extends gE{constructor(e,n,s,a,c,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,a,d),this.serializer=c}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ye(!!e.streamToken),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=Dw(e.writeResults,e.commitTime),s=Ws(e.commitTime);return this.listener.v_(s,n)}C_(){const e={};e.database=Pw(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Nw(this.serializer,s))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{}class _E extends vE{constructor(e,n,s,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new de(q.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,s,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.So(e,Fh(n,s),a,c,d)).catch(c=>{throw c.name==="FirebaseError"?(c.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new de(q.UNKNOWN,c.toString())})}Co(e,n,s,a,c){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,g])=>this.connection.Co(e,Fh(n,s),a,d,g,c)).catch(d=>{throw d.name==="FirebaseError"?(d.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new de(q.UNKNOWN,d.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class wE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Hi(n),this.N_=!1):se("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="RemoteStore";class EE{constructor(e,n,s,a,c){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=c,this.z_.To(d=>{s.enqueueAndForget(async()=>{Ta(this)&&(se(wa,"Restarting streams for network reachability change."),await async function(y){const w=je(y);w.W_.add(4),await Ea(w),w.j_.set("Unknown"),w.W_.delete(4),await xu(w)}(this))})}),this.j_=new wE(s,a)}}async function xu(i){if(Ta(i))for(const e of i.G_)await e(!0)}async function Ea(i){for(const e of i.G_)await e(!1)}function Ta(i){return je(i).W_.size===0}async function ly(i,e,n){if(!va(e))throw e;i.W_.add(1),await Ea(i),i.j_.set("Offline"),n||(n=()=>lE(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{se(wa,"Retrying IndexedDB access"),await n(),i.W_.delete(1),await xu(i)})}function uy(i,e){return e().catch(n=>ly(i,n,e))}async function Nu(i){const e=je(i),n=oi(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:td;for(;TE(e);)try{const a=await uE(e.localStore,s);if(a===null){e.U_.length===0&&n.P_();break}s=a.batchId,IE(e,a)}catch(a){await ly(e,a)}cy(e)&&hy(e)}function TE(i){return Ta(i)&&i.U_.length<10}function IE(i,e){i.U_.push(e);const n=oi(i);n.c_()&&n.S_&&n.b_(e.mutations)}function cy(i){return Ta(i)&&!oi(i).u_()&&i.U_.length>0}function hy(i){oi(i).start()}async function SE(i){oi(i).C_()}async function AE(i){const e=oi(i);for(const n of i.U_)e.b_(n.mutations)}async function kE(i,e,n){const s=i.U_.shift(),a=cd.from(s,e,n);await uy(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await Nu(i)}async function CE(i,e){e&&oi(i).S_&&await async function(s,a){if(function(d){return Tw(d)&&d!==q.ABORTED}(a.code)){const c=s.U_.shift();oi(s).h_(),await uy(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,a)),await Nu(s)}}(i,e),cy(i)&&hy(i)}async function Dm(i,e){const n=je(i);n.asyncQueue.verifyOperationInProgress(),se(wa,"RemoteStore received new credentials");const s=Ta(n);n.W_.add(3),await Ea(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await xu(n)}async function RE(i,e){const n=je(i);e?(n.W_.delete(2),await xu(n)):e||(n.W_.add(2),await Ea(n),n.j_.set("Unknown"))}function oi(i){return i.Y_||(i.Y_=function(n,s,a){const c=je(n);return c.M_(),new yE(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,a)}(i.datastore,i.asyncQueue,{xo:()=>Promise.resolve(),No:SE.bind(null,i),Lo:CE.bind(null,i),D_:AE.bind(null,i),v_:kE.bind(null,i)}),i.G_.push(async e=>{e?(i.Y_.h_(),await Nu(i)):(await i.Y_.stop(),i.U_.length>0&&(se(wa,`Stopping write stream with ${i.U_.length} pending writes`),i.U_=[]))})),i.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,n,s,a,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=a,this.removalCallback=c,this.deferred=new Ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,a,c){const d=Date.now()+s,g=new pd(e,n,d,a,c);return g.start(s),g}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dy(i,e){if(Hi("AsyncQueue",`${e}: ${i}`),va(i))return new de(q.UNAVAILABLE,`${e}: ${i}`);throw i}class PE{constructor(){this.queries=Om(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const a=je(n),c=a.queries;a.queries=Om(),c.forEach((d,g)=>{for(const y of g.ta)y.onError(s)})})(this,new de(q.ABORTED,"Firestore shutting down"))}}function Om(){return new Ki(i=>Hg(i),$g)}function xE(i){i.ia.forEach(e=>{e.next()})}var Vm,Lm;(Lm=Vm||(Vm={}))._a="default",Lm.Cache="cache";const NE="SyncEngine";class DE{constructor(e,n,s,a,c,d){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=a,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.La={},this.ka=new Ki(g=>Hg(g),$g),this.qa=new Map,this.Qa=new Set,this.$a=new Kt(ge.comparator),this.Ua=new Map,this.Ka=new hd,this.Wa={},this.Ga=new Map,this.za=eo.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function OE(i,e,n){const s=bE(i);try{const a=await function(d,g){const y=je(d),w=gt.now(),k=g.reduce((G,Y)=>G.add(Y.key),Ot());let N,j;return y.persistence.runTransaction("Locally write mutations","readwrite",G=>{let Y=du(),Z=Ot();return y.ds.getEntries(G,k).next(Q=>{Y=Q,Y.forEach((_e,ye)=>{ye.isValidDocument()||(Z=Z.add(_e))})}).next(()=>y.localDocuments.getOverlayedDocuments(G,Y)).next(Q=>{N=Q;const _e=[];for(const ye of g){const me=vw(ye,N.get(ye.key).overlayedDocument);me!=null&&_e.push(new Qi(ye.key,me,Mg(me.value.mapValue),vr.exists(!0)))}return y.mutationQueue.addMutationBatch(G,w,_e,g)}).next(Q=>{j=Q;const _e=Q.applyToLocalDocumentSet(N,Z);return y.documentOverlayCache.saveOverlays(G,Q.batchId,_e)})}).then(()=>({batchId:j.batchId,changes:Gg(N)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(d,g,y){let w=d.Wa[d.currentUser.toKey()];w||(w=new Kt(xe)),w=w.insert(g,y),d.Wa[d.currentUser.toKey()]=w}(s,a.batchId,n),await Du(s,a.changes),await Nu(s.remoteStore)}catch(a){const c=dy(a,"Failed to persist write");n.reject(c)}}function Mm(i,e,n){const s=je(i);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const a=[];s.ka.forEach((c,d)=>{const g=d.view.sa(e);g.snapshot&&a.push(g.snapshot)}),function(d,g){const y=je(d);y.onlineState=g;let w=!1;y.queries.forEach((k,N)=>{for(const j of N.ta)j.sa(g)&&(w=!0)}),w&&xE(y)}(s.eventManager,e),a.length&&s.La.p_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function VE(i,e){const n=je(i),s=e.batch.batchId;try{const a=await aE(n.localStore,e);py(n,s,null),fy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Du(n,a)}catch(a){await Zh(a)}}async function LE(i,e,n){const s=je(i);try{const a=await function(d,g){const y=je(d);return y.persistence.runTransaction("Reject batch","readwrite-primary",w=>{let k;return y.mutationQueue.lookupMutationBatch(w,g).next(N=>(Ye(N!==null),k=N.keys(),y.mutationQueue.removeMutationBatch(w,N))).next(()=>y.mutationQueue.performConsistencyCheck(w)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(w,k,g)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(w,k)).next(()=>y.localDocuments.getDocuments(w,k))})}(s.localStore,e);py(s,e,n),fy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Du(s,a)}catch(a){await Zh(a)}}function fy(i,e){(i.Ga.get(e)||[]).forEach(n=>{n.resolve()}),i.Ga.delete(e)}function py(i,e,n){const s=je(i);let a=s.Wa[s.currentUser.toKey()];if(a){const c=a.get(e);c&&(n?c.reject(n):c.resolve(),a=a.remove(e)),s.Wa[s.currentUser.toKey()]=a}}async function Du(i,e,n){const s=je(i),a=[],c=[],d=[];s.ka.isEmpty()||(s.ka.forEach((g,y)=>{d.push(s.Ha(y,e,n).then(w=>{var k;if((w||n)&&s.isPrimaryClient){const N=w?!w.fromCache:(k=void 0)===null||k===void 0?void 0:k.current;s.sharedClientState.updateQueryState(y.targetId,N?"current":"not-current")}if(w){a.push(w);const N=fd.Yi(y.targetId,w);c.push(N)}}))}),await Promise.all(d),s.La.p_(a),await async function(y,w){const k=je(y);try{await k.persistence.runTransaction("notifyLocalViewChanges","readwrite",N=>B.forEach(w,j=>B.forEach(j.Hi,G=>k.persistence.referenceDelegate.addReference(N,j.targetId,G)).next(()=>B.forEach(j.Ji,G=>k.persistence.referenceDelegate.removeReference(N,j.targetId,G)))))}catch(N){if(!va(N))throw N;se(iE,"Failed to update sequence numbers: "+N)}for(const N of w){const j=N.targetId;if(!N.fromCache){const G=k.Ts.get(j),Y=G.snapshotVersion,Z=G.withLastLimboFreeSnapshotVersion(Y);k.Ts=k.Ts.insert(j,Z)}}}(s.localStore,c))}async function ME(i,e){const n=je(i);if(!n.currentUser.isEqual(e)){se(NE,"User change. New user:",e.toKey());const s=await oy(n.localStore,e);n.currentUser=e,function(c,d){c.Ga.forEach(g=>{g.forEach(y=>{y.reject(new de(q.CANCELLED,d))})}),c.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Du(n,s.Rs)}}function bE(i){const e=je(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LE.bind(null,e),e}class gu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pu(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return oE(this.persistence,new rE,e.initialUser,this.serializer)}Xa(e){return new sy(dd.ri,this.serializer)}Za(e){return new cE}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gu.provider={build:()=>new gu};class UE extends gu{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ye(this.persistence.referenceDelegate instanceof mu);const s=this.persistence.referenceDelegate.garbageCollector;return new Bw(s,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?qt.withCacheSize(this.cacheSizeBytes):qt.DEFAULT;return new sy(s=>mu.ri(s,n),this.serializer)}}class Bh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Mm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ME.bind(null,this.syncEngine),await RE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PE}()}createDatastore(e){const n=Pu(e.databaseInfo.databaseId),s=function(c){return new mE(c)}(e.databaseInfo);return function(c,d,g,y){return new _E(c,d,g,y)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,a,c,d,g){return new EE(s,a,c,d,g)}(this.localStore,this.datastore,e.asyncQueue,n=>Mm(this.syncEngine,n,0),function(){return xm.D()?new xm:new hE}())}createSyncEngine(e,n){return function(a,c,d,g,y,w,k){const N=new DE(a,c,d,g,y,w);return k&&(N.ja=!0),N}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(a){const c=je(a);se(wa,"RemoteStore shutting down."),c.W_.add(5),await Ea(c),c.z_.shutdown(),c.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Bh.provider={build:()=>new Bh};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="FirestoreClient";class FE{constructor(e,n,s,a,c){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=a,this.user=Dt.UNAUTHENTICATED,this.clientId=kg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async d=>{se(ai,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(s,d=>(se(ai,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=dy(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Th(i,e){i.asyncQueue.verifyOperationInProgress(),se(ai,"Initializing OfflineComponentProvider");const n=i.configuration;await e.initialize(n);let s=n.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await oy(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function bm(i,e){i.asyncQueue.verifyOperationInProgress();const n=await jE(i);se(ai,"Initializing OnlineComponentProvider"),await e.initialize(n,i.configuration),i.setCredentialChangeListener(s=>Dm(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>Dm(e.remoteStore,a)),i._onlineComponents=e}async function jE(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){se(ai,"Using user provided OfflineComponentProvider");try{await Th(i,i._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(a){return a.name==="FirebaseError"?a.code===q.FAILED_PRECONDITION||a.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(n))throw n;Au("Error using user provided cache. Falling back to memory cache: "+n),await Th(i,new gu)}}else se(ai,"Using default OfflineComponentProvider"),await Th(i,new UE(void 0));return i._offlineComponents}async function zE(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(se(ai,"Using user provided OnlineComponentProvider"),await bm(i,i._uninitializedComponentsProvider._online)):(se(ai,"Using default OnlineComponentProvider"),await bm(i,new Bh))),i._onlineComponents}function BE(i){return zE(i).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(i,e,n){if(!n)throw new de(q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function $E(i,e,n,s){if(e===!0&&s===!0)throw new de(q.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function Fm(i){if(!ge.isDocumentKey(i))throw new de(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function jm(i){if(ge.isDocumentKey(i))throw new de(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function md(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Te()}function $h(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new de(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=md(i);throw new de(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="firestore.googleapis.com",zm=!0;class Bm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new de(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yy,this.ssl=zm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:zm;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=iy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jw)throw new de(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$E("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=my((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new de(q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new de(q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new de(q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ou{constructor(e,n,s,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new E1;switch(s.type){case"firstParty":return new A1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Um.get(n);s&&(se("ComponentProvider","Removing Datastore"),Um.delete(n),s.terminate())}(this),Promise.resolve()}}function HE(i,e,n,s={}){var a;const c=(i=$h(i,Ou))._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:i._getEmulatorOptions()}),g=`${e}:${n}`;c.host!==yy&&c.host!==g&&Au("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},c),{host:g,ssl:!1,emulatorOptions:s});if(!zi(y,d)&&(i._setSettings(y),s.mockUserToken)){let w,k;if(typeof s.mockUserToken=="string")w=s.mockUserToken,k=Dt.MOCK_USER;else{w=X0(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const N=s.mockUserToken.sub||s.mockUserToken.user_id;if(!N)throw new de(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");k=new Dt(N)}i._authCredentials=new T1(new Ag(w,k))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new gd(this.firestore,e,this._query)}}class qn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qn(this.firestore,e,this._key)}}class ri extends gd{constructor(e,n,s){super(e,n,nw(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qn(this.firestore,null,new ge(e))}withConverter(e){return new ri(this.firestore,e,this._path)}}function WE(i,e,...n){if(i=On(i),gy("collection","path",e),i instanceof Ou){const s=Xe.fromString(e,...n);return jm(s),new ri(i,null,s)}{if(!(i instanceof qn||i instanceof ri))throw new de(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Xe.fromString(e,...n));return jm(s),new ri(i.firestore,null,s)}}function GE(i,e,...n){if(i=On(i),arguments.length===1&&(e=kg.newId()),gy("doc","path",e),i instanceof Ou){const s=Xe.fromString(e,...n);return Fm(s),new qn(i,null,new ge(s))}{if(!(i instanceof qn||i instanceof ri))throw new de(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Xe.fromString(e,...n));return Fm(s),new qn(i.firestore,i instanceof ri?i.converter:null,new ge(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="AsyncQueue";class Hm{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new ay(this,"async_queue_retry"),this.Su=()=>{const s=Eh();s&&se($m,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const n=Eh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Eh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Ui;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!va(e))throw e;se($m,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const a=function(d){let g=d.message||"";return d.stack&&(g=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),g}(s);throw Hi("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.pu=!1,s))));return this.bu=n,n}enqueueAfterDelay(e,n,s){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const a=pd.createAndSchedule(this,e,n,s,c=>this.Fu(c));return this.fu.push(a),a}Du(){this.gu&&Te()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class vy extends Ou{constructor(e,n,s,a){super(e,n,s,a),this.type="firestore",this._queue=new Hm,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hm(e),this._firestoreClient=void 0,await e}}}function qE(i,e){const n=typeof i=="object"?i:yg(),s=typeof i=="string"?i:lu,a=Xh(n,"firestore").getImmediate({identifier:s});if(!a._initialized){const c=K0("firestore");c&&HE(a,...c)}return a}function KE(i){if(i._terminated)throw new de(q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||QE(i),i._firestoreClient}function QE(i){var e,n,s;const a=i._freezeSettings(),c=function(g,y,w,k){return new B1(g,y,w,k.host,k.ssl,k.experimentalForceLongPolling,k.experimentalAutoDetectLongPolling,my(k.experimentalLongPollingOptions),k.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((n=a.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new FE(i._authCredentials,i._appCheckCredentials,i._queue,c,i._componentsProvider&&function(g){const y=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(y),_online:y}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pa(Xn.fromBase64String(e))}catch(n){throw new de(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pa(Xn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new de(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new de(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new de(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==a[c])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=/^__.*__$/;class YE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,n,this.fieldTransforms):new _a(e,this.data,n,this.fieldTransforms)}}function Iy(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class yd{constructor(e,n,s,a,c,d){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=a,c===void 0&&this.Bu(),this.fieldTransforms=c||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),a=this.ku({path:s,Qu:!1});return a.$u(e),a}Uu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),a=this.ku({path:s,Qu:!1});return a.Bu(),a}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return yu(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Iy(this.Lu)&&XE.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class JE{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Pu(e)}ju(e,n,s,a=!1){return new yd({Lu:e,methodName:n,zu:s,path:It.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ZE(i){const e=i._freezeSettings(),n=Pu(i._databaseId);return new JE(i._databaseId,!!e.ignoreUndefinedProperties,n)}function eT(i,e,n,s,a,c={}){const d=i.ju(c.merge||c.mergeFields?2:0,e,n,a);Cy("Data must be an object, but it was:",d,s);const g=Ay(s,d);let y,w;if(c.merge)y=new Nn(d.fieldMask),w=d.fieldTransforms;else if(c.mergeFields){const k=[];for(const N of c.mergeFields){const j=tT(e,N,n);if(!d.contains(j))throw new de(q.INVALID_ARGUMENT,`Field '${j}' is specified in your field mask but missing from your input data.`);iT(k,j)||k.push(j)}y=new Nn(k),w=d.fieldTransforms.filter(N=>y.covers(N.field))}else y=null,w=d.fieldTransforms;return new YE(new xn(g),y,w)}function Sy(i,e){if(ky(i=On(i)))return Cy("Unsupported field value:",e,i),Ay(i,e);if(i instanceof wy)return function(s,a){if(!Iy(a.Lu))throw a.Wu(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(a);c&&a.fieldTransforms.push(c)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,a){const c=[];let d=0;for(const g of s){let y=Sy(g,a.Ku(d));y==null&&(y={nullValue:"NULL_VALUE"}),c.push(y),d++}return{arrayValue:{values:c}}}(i,e)}return function(s,a){if((s=On(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return dw(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=gt.fromDate(s);return{timestampValue:Uh(a.serializer,c)}}if(s instanceof gt){const c=new gt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Uh(a.serializer,c)}}if(s instanceof Ey)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof pa)return{bytesValue:Aw(a.serializer,s._byteString)};if(s instanceof qn){const c=a.databaseId,d=s.firestore._databaseId;if(!d.isEqual(c))throw a.Wu(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:ny(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Ty)return function(d,g){return{mapValue:{fields:{[Og]:{stringValue:Lg},[Oh]:{arrayValue:{values:d.toArray().map(w=>{if(typeof w!="number")throw g.Wu("VectorValues must only contain numeric values.");return ud(g.serializer,w)})}}}}}}(s,a);throw a.Wu(`Unsupported field value: ${md(s)}`)}(i,e)}function Ay(i,e){const n={};return Rg(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):io(i,(s,a)=>{const c=Sy(a,e.qu(s));c!=null&&(n[s]=c)}),{mapValue:{fields:n}}}function ky(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof gt||i instanceof Ey||i instanceof pa||i instanceof qn||i instanceof wy||i instanceof Ty)}function Cy(i,e,n){if(!ky(n)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(n)){const s=md(n);throw s==="an object"?e.Wu(i+" a custom object"):e.Wu(i+" "+s)}}function tT(i,e,n){if((e=On(e))instanceof _y)return e._internalPath;if(typeof e=="string")return rT(i,e);throw yu("Field path arguments must be of type string or ",i,!1,void 0,n)}const nT=new RegExp("[~\\*/\\[\\]]");function rT(i,e,n){if(e.search(nT)>=0)throw yu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new _y(...e.split("."))._internalPath}catch{throw yu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function yu(i,e,n,s,a){const c=s&&!s.isEmpty(),d=a!==void 0;let g=`Function ${e}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let y="";return(c||d)&&(y+=" (found",c&&(y+=` in field ${s}`),d&&(y+=` in document ${a}`),y+=")"),new de(q.INVALID_ARGUMENT,g+i+y)}function iT(i,e){return i.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(i,e,n){let s;return s=i?i.toFirestore(e):e,s}function oT(i,e,n){i=$h(i,qn);const s=$h(i.firestore,vy),a=sT(i.converter,e);return aT(s,[eT(ZE(s),"setDoc",i._key,a,i.converter!==null,n).toMutation(i._key,vr.none())])}function aT(i,e){return function(s,a){const c=new Ui;return s.asyncQueue.enqueueAndForget(async()=>OE(await BE(s),a,c)),c.promise}(KE(i),e)}(function(e,n=!0){(function(a){ro=a})(no),Qs(new Bi("firestore",(s,{instanceIdentifier:a,options:c})=>{const d=s.getProvider("app").getImmediate(),g=new vy(new I1(s.getProvider("auth-internal")),new k1(d,s.getProvider("app-check-internal")),function(w,k){if(!Object.prototype.hasOwnProperty.apply(w.options,["projectId"]))throw new de(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uu(w.options.projectId,k)}(d,a),d);return c=Object.assign({useFetchStreams:n},c),g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),ni(im,sm,e),ni(im,sm,"esm2017")})();var lT="firebase",uT="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ni(lT,uT,"app");function vd(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(n[s[a]]=i[s[a]]);return n}function Ry(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cT=Ry,Py=new ga("auth","Firebase",Ry());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new Kh("@firebase/auth");function hT(i,...e){vu.logLevel<=Ie.WARN&&vu.warn(`Auth (${no}): ${i}`,...e)}function eu(i,...e){vu.logLevel<=Ie.ERROR&&vu.error(`Auth (${no}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(i,...e){throw _d(i,...e)}function Kn(i,...e){return _d(i,...e)}function xy(i,e,n){const s=Object.assign(Object.assign({},cT()),{[e]:n});return new ga("auth","Firebase",s).create(e,{appName:i.name})}function ji(i){return xy(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _d(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return Py.create(i,...e)}function pe(i,e,...n){if(!i)throw _d(e,...n)}function gr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw eu(e),new Error(e)}function Er(i,e){i||gr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function dT(){return Wm()==="http:"||Wm()==="https:"}function Wm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dT()||e_()||"connection"in navigator)?navigator.onLine:!0}function pT(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,Er(n>e,"Short delay should be less than long delay!"),this.isMobile=Y0()||t_()}get(){return fT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(i,e){Er(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yT=new Ia(3e4,6e4);function Ed(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function so(i,e,n,s,a={}){return Dy(i,a,async()=>{let c={},d={};s&&(e==="GET"?d=s:c={body:JSON.stringify(s)});const g=ya(Object.assign({key:i.config.apiKey},d)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const w=Object.assign({method:e,headers:y},c);return Z0()||(w.referrerPolicy="no-referrer"),Ny.fetch()(await Oy(i,i.config.apiHost,n,g),w)})}async function Dy(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},mT),e);try{const a=new _T(i),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw Ql(i,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const g=c.ok?d.errorMessage:d.error.message,[y,w]=g.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ql(i,"credential-already-in-use",d);if(y==="EMAIL_EXISTS")throw Ql(i,"email-already-in-use",d);if(y==="USER_DISABLED")throw Ql(i,"user-disabled",d);const k=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(w)throw xy(i,k,w);wr(i,k)}}catch(a){if(a instanceof Tr)throw a;wr(i,"network-request-failed",{message:String(a)})}}async function vT(i,e,n,s,a={}){const c=await so(i,e,n,s,a);return"mfaPendingCredential"in c&&wr(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function Oy(i,e,n,s){const a=`${e}${n}?${s}`,c=i,d=c.config.emulator?wd(i.config,a):`${i.config.apiScheme}://${a}`;return gT.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}class _T{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Kn(this.auth,"network-request-failed")),yT.get())})}}function Ql(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=Kn(i,e,s);return a.customData._tokenResponse=n,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(i,e){return so(i,"POST","/v1/accounts:delete",e)}async function _u(i,e){return so(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ET(i,e=!1){const n=On(i),s=await n.getIdToken(e),a=Td(s);pe(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,d=c==null?void 0:c.sign_in_provider;return{claims:a,token:s,authTime:la(Ih(a.auth_time)),issuedAtTime:la(Ih(a.iat)),expirationTime:la(Ih(a.exp)),signInProvider:d||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Ih(i){return Number(i)*1e3}function Td(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return eu("JWT malformed, contained fewer than 3 sections"),null;try{const a=cg(n);return a?JSON.parse(a):(eu("Failed to decode base64 JWT payload"),null)}catch(a){return eu("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Gm(i){const e=Td(i);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Tr&&TT(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function TT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=la(this.lastLoginAt),this.creationTime=la(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wu(i){var e;const n=i.auth,s=await i.getIdToken(),a=await ma(i,_u(n,{idToken:s}));pe(a==null?void 0:a.users.length,n,"internal-error");const c=a.users[0];i._notifyReloadListener(c);const d=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Vy(c.providerUserInfo):[],g=AT(i.providerData,d),y=i.isAnonymous,w=!(i.email&&c.passwordHash)&&!(g!=null&&g.length),k=y?w:!1,N={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new Wh(c.createdAt,c.lastLoginAt),isAnonymous:k};Object.assign(i,N)}async function ST(i){const e=On(i);await wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AT(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Vy(i){return i.map(e=>{var{providerId:n}=e,s=vd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(i,e){const n=await Dy(i,{},async()=>{const s=ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,d=await Oy(i,a,"/v1/token",`key=${c}`),g=await i._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",Ny.fetch()(d,{method:"POST",headers:g,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CT(i,e){return so(i,"POST","/v2/accounts:revokeToken",Ed(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=Gm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:c}=await kT(e,n);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:c}=n,d=new Gs;return s&&(pe(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),a&&(pe(typeof a=="string","internal-error",{appName:e}),d.accessToken=a),c&&(pe(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return gr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(i,e){pe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:n,auth:s,stsTokenManager:a}=e,c=vd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Wh(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await ma(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ET(this,e)}reload(){return ST(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gn(this.auth.app))return Promise.reject(ji(this.auth));const e=await this.getIdToken();return await ma(this,wT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,a,c,d,g,y,w,k;const N=(s=n.displayName)!==null&&s!==void 0?s:void 0,j=(a=n.email)!==null&&a!==void 0?a:void 0,G=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,Y=(d=n.photoURL)!==null&&d!==void 0?d:void 0,Z=(g=n.tenantId)!==null&&g!==void 0?g:void 0,Q=(y=n._redirectEventId)!==null&&y!==void 0?y:void 0,_e=(w=n.createdAt)!==null&&w!==void 0?w:void 0,ye=(k=n.lastLoginAt)!==null&&k!==void 0?k:void 0,{uid:me,emailVerified:he,isAnonymous:$e,providerData:Se,stsTokenManager:P}=n;pe(me&&P,e,"internal-error");const T=Gs.fromJSON(this.name,P);pe(typeof me=="string",e,"internal-error"),Qr(N,e.name),Qr(j,e.name),pe(typeof he=="boolean",e,"internal-error"),pe(typeof $e=="boolean",e,"internal-error"),Qr(G,e.name),Qr(Y,e.name),Qr(Z,e.name),Qr(Q,e.name),Qr(_e,e.name),Qr(ye,e.name);const S=new Dn({uid:me,auth:e,email:j,emailVerified:he,displayName:N,isAnonymous:$e,photoURL:Y,phoneNumber:G,tenantId:Z,stsTokenManager:T,createdAt:_e,lastLoginAt:ye});return Se&&Array.isArray(Se)&&(S.providerData=Se.map(C=>Object.assign({},C))),Q&&(S._redirectEventId=Q),S}static async _fromIdTokenResponse(e,n,s=!1){const a=new Gs;a.updateFromServerResponse(n);const c=new Dn({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await wu(c),c}static async _fromGetAccountInfoResponse(e,n,s){const a=n.users[0];pe(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?Vy(a.providerUserInfo):[],d=!(a.email&&a.passwordHash)&&!(c!=null&&c.length),g=new Gs;g.updateFromIdToken(s);const y=new Dn({uid:a.localId,auth:e,stsTokenManager:g,isAnonymous:d}),w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Wh(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(c!=null&&c.length)};return Object.assign(y,w),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=new Map;function yr(i){Er(i instanceof Function,"Expected a class definition");let e=qm.get(i);return e?(Er(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,qm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ly.type="NONE";const Km=Ly;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(i,e,n){return`firebase:${i}:${e}:${n}`}class qs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=tu(this.userKey,a.apiKey,c),this.fullPersistenceKey=tu("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _u(this.auth,{idToken:e}).catch(()=>{});return n?Dn._fromGetAccountInfoResponse(this.auth,n,e):null}return Dn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new qs(yr(Km),e,s);const a=(await Promise.all(n.map(async w=>{if(await w._isAvailable())return w}))).filter(w=>w);let c=a[0]||yr(Km);const d=tu(s,e.config.apiKey,e.name);let g=null;for(const w of n)try{const k=await w._get(d);if(k){let N;if(typeof k=="string"){const j=await _u(e,{idToken:k}).catch(()=>{});if(!j)break;N=await Dn._fromGetAccountInfoResponse(e,j,k)}else N=Dn._fromJSON(e,k);w!==c&&(g=N),c=w;break}}catch{}const y=a.filter(w=>w._shouldAllowMigration);return!c._shouldAllowMigration||!y.length?new qs(c,e,s):(c=y[0],g&&await c._set(d,g.toJSON()),await Promise.all(n.map(async w=>{if(w!==c)try{await w._remove(d)}catch{}})),new qs(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(My(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zy(e))return"Blackberry";if(By(e))return"Webos";if(by(e))return"Safari";if((e.includes("chrome/")||Uy(e))&&!e.includes("edge/"))return"Chrome";if(jy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function My(i=Vt()){return/firefox\//i.test(i)}function by(i=Vt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uy(i=Vt()){return/crios\//i.test(i)}function Fy(i=Vt()){return/iemobile/i.test(i)}function jy(i=Vt()){return/android/i.test(i)}function zy(i=Vt()){return/blackberry/i.test(i)}function By(i=Vt()){return/webos/i.test(i)}function Id(i=Vt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function RT(i=Vt()){var e;return Id(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PT(){return n_()&&document.documentMode===10}function $y(i=Vt()){return Id(i)||jy(i)||By(i)||zy(i)||/windows phone/i.test(i)||Fy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(i,e=[]){let n;switch(i){case"Browser":n=Qm(Vt());break;case"Worker":n=`${Qm(Vt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${no}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((d,g)=>{try{const y=e(c);d(y)}catch(y){g(y)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NT(i,e={}){return so(i,"GET","/v2/passwordPolicy",Ed(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=6;class OT{constructor(e){var n,s,a,c;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:DT,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,a,c,d,g;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(n=y.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(a=y.containsLowercaseLetter)!==null&&a!==void 0?a:!0),y.isValid&&(y.isValid=(c=y.containsUppercaseLetter)!==null&&c!==void 0?c:!0),y.isValid&&(y.isValid=(d=y.containsNumericCharacter)!==null&&d!==void 0?d:!0),y.isValid&&(y.isValid=(g=y.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),y}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,n,s,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xm(this),this.idTokenSubscription=new Xm(this),this.beforeStateQueue=new xT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Py,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yr(n)),this._initializationPromise=this.queue(async()=>{var s,a,c;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _u(this,{idToken:e}),s=await Dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Gn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=a==null?void 0:a._redirectEventId,y=await this.tryRedirectSignIn(e);(!d||d===g)&&(y!=null&&y.user)&&(a=y.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(d){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gn(this.app))return Promise.reject(ji(this));const n=e?On(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gn(this.app)?Promise.reject(ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gn(this.app)?Promise.reject(ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NT(this),n=new OT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ga("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await CT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yr(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[yr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(g,this,"internal-error"),g.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const y=e.addObserver(n,s,a);return()=>{d=!0,y()}}else{const y=e.addObserver(n);return()=>{d=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){var e;if(Gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Sd(i){return On(i)}class Xm{constructor(e){this.auth=e,this.observer=null,this.addObserver=c_(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ad={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LT(i){Ad=i}function MT(i){return Ad.loadJS(i)}function bT(){return Ad.gapiScript}function UT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(i,e){const n=Xh(i,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(zi(c,e??{}))return a;wr(a,"already-initialized")}return n.initialize({options:e})}function jT(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(yr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function zT(i,e,n){const s=Sd(i);pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,c=Wy(e),{host:d,port:g}=BT(e),y=g===null?"":`:${g}`,w={url:`${c}//${d}${y}/`},k=Object.freeze({host:d,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){pe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pe(zi(w,s.config.emulator)&&zi(k,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=w,s.emulatorConfig=k,s.settings.appVerificationDisabledForTesting=!0,$T()}function Wy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function BT(i){const e=Wy(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:Ym(s.substr(c.length+1))}}else{const[c,d]=s.split(":");return{host:c,port:Ym(d)}}}function Ym(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function $T(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gr("not implemented")}_getIdTokenResponse(e){return gr("not implemented")}_linkToIdToken(e,n){return gr("not implemented")}_getReauthenticationResolver(e){return gr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(i,e){return vT(i,"POST","/v1/accounts:signInWithIdp",Ed(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="http://localhost";class qi extends Gy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=n,c=vd(n,["providerId","signInMethod"]);if(!s||!a)return null;const d=new qi(s,a);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return Ks(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ks(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ks(e,n)}buildRequest(){const e={requestUri:HT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ya(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends qy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Sa{constructor(){super("facebook.com")}static credential(e){return qi._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qi._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yr.credential(n,s)}catch{return null}}}Yr.GOOGLE_SIGN_IN_METHOD="google.com";Yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Sa{constructor(){super("github.com")}static credential(e){return qi._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Sa{constructor(){super("twitter.com")}static credential(e,n){return qi._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Zr.credential(n,s)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const c=await Dn._fromIdTokenResponse(e,s,a),d=Jm(s);return new to({user:c,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=Jm(s);return new to({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function Jm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends Tr{constructor(e,n,s,a){var c;super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Eu.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new Eu(e,n,s,a)}}function Ky(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Eu._fromErrorAndOperation(i,c,e,s):c})}async function WT(i,e,n=!1){const s=await ma(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return to._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(i,e,n=!1){const{auth:s}=i;if(Gn(s.app))return Promise.reject(ji(s));const a="reauthenticate";try{const c=await ma(i,Ky(s,a,e,i),n);pe(c.idToken,s,"internal-error");const d=Td(c.idToken);pe(d,s,"internal-error");const{sub:g}=d;return pe(i.uid===g,s,"user-mismatch"),to._forOperation(i,a,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&wr(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(i,e,n=!1){if(Gn(i.app))return Promise.reject(ji(i));const s="signIn",a=await Ky(i,s,e),c=await to._fromIdTokenResponse(i,s,a);return n||await i._updateCurrentUser(c.user),c}function KT(i,e,n,s){return On(i).onIdTokenChanged(e,n,s)}function QT(i,e,n){return On(i).beforeAuthStateChanged(e,n)}const Tu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tu,"1"),this.storage.removeItem(Tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=1e3,YT=10;class Xy extends Qy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$y(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,g,y)=>{this.notifyListeners(d,y)});return}const s=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},c=this.storage.getItem(s);PT()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,YT):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},XT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xy.type="LOCAL";const JT=Xy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy extends Qy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yy.type="SESSION";const Jy=Yy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const s=new Vu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:a,data:c}=n.data,d=this.handlersMap[a];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const g=Array.from(d).map(async w=>w(n.origin,c)),y=await ZT(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:y})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,d;return new Promise((g,y)=>{const w=kd("",20);a.port1.start();const k=setTimeout(()=>{y(new Error("unsupported_event"))},s);d={messageChannel:a,onMessage(N){const j=N;if(j.data.eventId===w)switch(j.data.status){case"ack":clearTimeout(k),c=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(j.data.response);break;default:clearTimeout(k),clearTimeout(c),y(new Error("invalid_response"));break}}},this.handlers.add(d),a.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:w,data:n},[a.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return window}function tI(i){Qn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(){return typeof Qn().WorkerGlobalScope<"u"&&typeof Qn().importScripts=="function"}async function nI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rI(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function iI(){return Zy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="firebaseLocalStorageDb",sI=1,Iu="firebaseLocalStorage",tv="fbase_key";class Aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lu(i,e){return i.transaction([Iu],e?"readwrite":"readonly").objectStore(Iu)}function oI(){const i=indexedDB.deleteDatabase(ev);return new Aa(i).toPromise()}function Gh(){const i=indexedDB.open(ev,sI);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Iu,{keyPath:tv})}catch(a){n(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Iu)?e(s):(s.close(),await oI(),e(await Gh()))})})}async function Zm(i,e,n){const s=Lu(i,!0).put({[tv]:e,value:n});return new Aa(s).toPromise()}async function aI(i,e){const n=Lu(i,!1).get(e),s=await new Aa(n).toPromise();return s===void 0?null:s.value}function eg(i,e){const n=Lu(i,!0).delete(e);return new Aa(n).toPromise()}const lI=800,uI=3;class nv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>uI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vu._getInstance(iI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nI(),!this.activeServiceWorker)return;this.sender=new eI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gh();return await Zm(e,Tu,"1"),await eg(e,Tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>aI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>eg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=Lu(a,!1).getAll();return new Aa(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nv.type="LOCAL";const cI=nv;new Ia(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(i,e){return e?yr(e):(pe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd extends Gy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dI(i){return qT(i.auth,new Cd(i),i.bypassAuthState)}function fI(i){const{auth:e,user:n}=i;return pe(n,e,"internal-error"),GT(n,new Cd(i),i.bypassAuthState)}async function pI(i){const{auth:e,user:n}=i;return pe(n,e,"internal-error"),WT(n,new Cd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:a,tenantId:c,error:d,type:g}=e;if(d){this.reject(d);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(y))}catch(w){this.reject(w)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dI;case"linkViaPopup":case"linkViaRedirect":return pI;case"reauthViaPopup":case"reauthViaRedirect":return fI;default:wr(this.auth,"internal-error")}}resolve(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=new Ia(2e3,1e4);class Hs extends rv{constructor(e,n,s,a,c){super(e,n,a,c),this.provider=s,this.authWindow=null,this.pollId=null,Hs.currentPopupAction&&Hs.currentPopupAction.cancel(),Hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Er(this.filter.length===1,"Popup operations only handle one event");const e=kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mI.get())};e()}}Hs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="pendingRedirect",nu=new Map;class yI extends rv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=nu.get(this.auth._key());if(!e){try{const s=await vI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}nu.set(this.auth._key(),e)}return this.bypassAuthState||nu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vI(i,e){const n=EI(e),s=wI(i);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}function _I(i,e){nu.set(i._key(),e)}function wI(i){return yr(i._redirectPersistence)}function EI(i){return tu(gI,i.config.apiKey,i.name)}async function TI(i,e,n=!1){if(Gn(i.app))return Promise.reject(ji(i));const s=Sd(i),a=hI(s,e),d=await new yI(s,a,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=10*60*1e3;class SI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!iv(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Kn(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=II&&this.cachedEventUids.clear(),this.cachedEventUids.has(tg(e))}saveEventToCache(e){this.cachedEventUids.add(tg(e)),this.lastProcessedEventTime=Date.now()}}function tg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function iv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iv(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(i,e={}){return so(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RI=/^https?/;async function PI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await kI(i);for(const n of e)try{if(xI(n))return}catch{}wr(i,"unauthorized-domain")}function xI(i){const e=Hh(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!RI.test(n))return!1;if(CI.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=new Ia(3e4,6e4);function ng(){const i=Qn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function DI(i){return new Promise((e,n)=>{var s,a,c;function d(){ng(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ng(),n(Kn(i,"network-request-failed"))},timeout:NI.get()})}if(!((a=(s=Qn().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((c=Qn().gapi)===null||c===void 0)&&c.load)d();else{const g=UT("iframefcb");return Qn()[g]=()=>{gapi.load?d():n(Kn(i,"network-request-failed"))},MT(`${bT()}?onload=${g}`).catch(y=>n(y))}}).catch(e=>{throw ru=null,e})}let ru=null;function OI(i){return ru=ru||DI(i),ru}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=new Ia(5e3,15e3),LI="__/auth/iframe",MI="emulator/auth/iframe",bI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FI(i){const e=i.config;pe(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?wd(e,MI):`https://${i.config.authDomain}/${LI}`,s={apiKey:e.apiKey,appName:i.name,v:no},a=UI.get(i.config.apiHost);a&&(s.eid=a);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${ya(s).slice(1)}`}async function jI(i){const e=await OI(i),n=Qn().gapi;return pe(n,i,"internal-error"),e.open({where:document.body,url:FI(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bI,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const d=Kn(i,"network-request-failed"),g=Qn().setTimeout(()=>{c(d)},VI.get());function y(){Qn().clearTimeout(g),a(s)}s.ping(y).then(y,()=>{c(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BI=500,$I=600,HI="_blank",WI="http://localhost";class rg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GI(i,e,n,s=BI,a=$I){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const y=Object.assign(Object.assign({},zI),{width:s.toString(),height:a.toString(),top:c,left:d}),w=Vt().toLowerCase();n&&(g=Uy(w)?HI:n),My(w)&&(e=e||WI,y.scrollbars="yes");const k=Object.entries(y).reduce((j,[G,Y])=>`${j}${G}=${Y},`,"");if(RT(w)&&g!=="_self")return qI(e||"",g),new rg(null);const N=window.open(e||"",g,k);pe(N,i,"popup-blocked");try{N.focus()}catch{}return new rg(N)}function qI(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="__/auth/handler",QI="emulator/auth/handler",XI=encodeURIComponent("fac");async function ig(i,e,n,s,a,c){pe(i.config.authDomain,i,"auth-domain-config-required"),pe(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:no,eventId:a};if(e instanceof qy){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",u_(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[k,N]of Object.entries({}))d[k]=N}if(e instanceof Sa){const k=e.getScopes().filter(N=>N!=="");k.length>0&&(d.scopes=k.join(","))}i.tenantId&&(d.tid=i.tenantId);const g=d;for(const k of Object.keys(g))g[k]===void 0&&delete g[k];const y=await i._getAppCheckToken(),w=y?`#${XI}=${encodeURIComponent(y)}`:"";return`${YI(i)}?${ya(g).slice(1)}${w}`}function YI({config:i}){return i.emulator?wd(i,QI):`https://${i.authDomain}/${KI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="webStorageSupport";class JI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jy,this._completeRedirectFn=TI,this._overrideRedirectResult=_I}async _openPopup(e,n,s,a){var c;Er((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const d=await ig(e,n,s,Hh(),a);return GI(e,d,kd())}async _openRedirect(e,n,s,a){await this._originValidation(e);const c=await ig(e,n,s,Hh(),a);return tI(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:c}=this.eventManagers[n];return a?Promise.resolve(a):(Er(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await jI(e),s=new SI(e);return n.register("authEvent",a=>(pe(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sh,{type:Sh},a=>{var c;const d=(c=a==null?void 0:a[0])===null||c===void 0?void 0:c[Sh];d!==void 0&&n(!!d),wr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $y()||by()||Id()}}const ZI=JI;var sg="@firebase/auth",og="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nS(i){Qs(new Bi("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:g}=s.options;pe(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:d,authDomain:g,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hy(i)},w=new VT(s,a,c,y);return jT(w,n),w},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Qs(new Bi("auth-internal",e=>{const n=Sd(e.getProvider("auth").getImmediate());return(s=>new eS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ni(sg,og,tS(i)),ni(sg,og,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=5*60,iS=fg("authIdTokenMaxAge")||rS;let ag=null;const sS=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>iS)return;const a=n==null?void 0:n.token;ag!==a&&(ag=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function oS(i=yg()){const e=Xh(i,"auth");if(e.isInitialized())return e.getImmediate();const n=FT(i,{popupRedirectResolver:ZI,persistence:[cI,JT,Jy]}),s=fg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const d=sS(c.toString());QT(n,d,()=>d(n.currentUser)),KT(n,g=>d(g))}}const a=hg("auth");return a&&zT(n,`http://${a}`),n}function aS(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}LT({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const c=Kn("internal-error");c.customData=a,n(c)},s.type="text/javascript",s.charset="UTF-8",aS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nS("Browser");const lS={apiKey:"AIzaSyCWjn26eJUL2HQxUewGjuV_qZHGVAckblk",authDomain:"my-wedding-adc89.firebaseapp.com",projectId:"my-wedding-adc89",storageBucket:"my-wedding-adc89.firebasestorage.app",messagingSenderId:"206245365957",appId:"1:206245365957:web:ac6a3a8e3a315db19048ac",measurementId:"G-HS8YTLVGXK"},sv=gg(lS),uS=qE(sv);oS(sv);const cS=({src:i,user_nm:e,tot_num:n,regist_user:s})=>F.jsxs("div",{children:["🤵먼길을 오시는 하객분들을 위해서👰",F.jsx("br",{}),F.jsx("br",{}),"청주↔예식장 버스를 운행합니다",F.jsx("br",{}),F.jsx("br",{}),"버스 탑승위치 : 정해지면 말씀드릴게요...🙄",F.jsx("br",{}),F.jsx("br",{}),F.jsxs("div",{style:{display:"flex",width:"100%"},children:[F.jsx("div",{style:{width:"30%"},children:"이름 : "}),F.jsx("input",{style:{width:"70%"},type:"text",ref:e})]}),F.jsx("br",{}),F.jsxs("div",{style:{display:"flex",width:"100%"},children:[F.jsx("div",{style:{width:"30%"},children:"총 인원 : "}),F.jsx("input",{style:{width:"70%"},type:"number",ref:n})]}),F.jsx("br",{}),F.jsx("button",{onClick:()=>s(),children:"탑승하기✔"})]});function hS(){const i=()=>{navigator.clipboard.writeText("https://buly.kr/4Frh3tS"),alert("링크주소가 복사되었습니다.")},e="none",n=nn.lazy(()=>_0(()=>import("./Gallery-DWyErdYd.js"),[])),s=new Date,a=new Date(2025,6,13,11,30,0),[c,d]=nn.useState({isopen:!1,src:null,src_snap:null,current_idx:null,image_tot:[]}),[g,y]=nn.useState({isopen:!1,src:null}),[w,k]=nn.useState({isopen:!1,src:null}),[N,j]=nn.useState(!1),G=nn.useRef(null),Y=()=>{G.current||(G.current=new Audio(F0),G.current.load(),G.current.addEventListener("ended",()=>j(!1))),N?G.current.pause():G.current.play(),j(!N)};nn.useEffect(()=>{if(window.scrollTo(0,0),window.Kakao){const me=window.Kakao;me.isInitialized()||me.init("ca75bb8fef5f657c0751fb3a877252ee")}return()=>{G.current&&(G.current.pause(),G.current=null)}},[]);const Z=me=>{const he={...c};me==="left"?he.current_idx=he.current_idx-1:he.current_idx=he.current_idx+1,he.current_idx>11?he.current_idx=0:he.current_idx<0&&(he.current_idx=11),d({...he,src:he.image_tot[he.current_idx].src})},Q=nn.useRef(""),_e=nn.useRef(""),ye=async()=>{let me=Q.current.value,he=_e.current.value;const $e=WE(uS,"Wedding_bus_usage");try{await oT(GE($e),{name:me,number:he})}catch{alert("오류가 발생했어요...!")}finally{alert(`${me} 님 포함 ${he}명 등록 완료!`)}};return F.jsx(F.Fragment,{children:F.jsxs("div",{className:"main-frame",children:[F.jsx("div",{style:{border:e,textAlign:"right"},children:F.jsx("img",{src:S0,width:"20px",style:{marginRight:"10px",marginTop:"10px"},onClick:Y})}),F.jsx("div",{className:"fade-in",style:{border:e},children:F.jsx("p",{style:{marginTop:"20px",marginBottom:"50px",fontSize:"30px",fontFamily:"Ej-medium"},children:"이태우 & 안지연"})}),F.jsxs("div",{className:"fade-in",style:{border:e},children:[F.jsx("p",{children:"2025년 7월 13일 일요일 오전 11시 30분"}),F.jsx("p",{children:"빌라드지디 논현"})]}),F.jsx("div",{className:"fade-in",style:{border:e},children:F.jsxs("div",{style:{position:"relative",border:e},children:[F.jsx("img",{src:w0,width:"100%",style:{display:"block"}}),F.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"22%",background:"linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.88) 30%, rgba(255, 255, 255, 0) 100%)",filter:"blur(0px)"}}),F.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"22%",background:"linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.88) 30%, rgba(255, 255, 255, 0) 100%)",filter:"blur(0px)"}})]})}),F.jsxs(Kr,{debug:e,offset_y:"300",children:[F.jsx(Wp,{children:"INVITATION"}),F.jsxs("div",{style:{margin:"20px",marginLeft:"65px",marginRight:"65px",fontSize:"17px"},children:[F.jsx("b",{children:"태"}),"양처럼 빛나는 우리의 사랑이",F.jsx("br",{}),F.jsx("div",{style:{paddingTop:"12px"}}),F.jsx("b",{children:"우"}),"주 끝까지 이어지길 바라며",F.jsx("br",{}),F.jsx("div",{style:{paddingTop:"12px"}}),F.jsx("b",{children:"지"}),"금 이 순간, 소중한 여러분을",F.jsx("br",{}),F.jsx("div",{style:{paddingTop:"12px"}}),F.jsx("b",{children:"연"}),"결의 자리로 초대합니다.",F.jsx("br",{})]})]}),F.jsxs(Kr,{debug:e,offset_y:"450",children:[F.jsxs("div",{style:{marginBottom:"10px",marginTop:"20px"},children:[F.jsx("b",{children:"이종면 · 유병희"})," 의 차남 ",F.jsx("span",{style:{fontFamily:"MaruBuriBold"},children:"태우"}),F.jsx("br",{})]}),F.jsxs("div",{style:{marginBottom:"10px",marginTop:"10px"},children:[F.jsx("b",{children:"안동열 · 조민경"})," 의 차녀 ",F.jsx("span",{style:{fontFamily:"MaruBuriBold"},children:"지연"})]})]}),F.jsx(Kr,{debug:e,children:F.jsxs("div",{style:{border:e,backgroundColor:"rgb(246, 245, 245)"},children:[F.jsx("p",{style:{fontSize:"20px",fontFamily:"MaruBuri",margin:"20px"},children:"2025. 7. 13"}),"일요일 오전 11시 30분",F.jsx("br",{}),F.jsx(k0,{}),"태우 지연의 결혼식이",F.jsx("span",{style:{color:"magenta"},children:Math.floor((a-s)/(1e3*60*60*24))}),"일 남았습니다."]})}),F.jsx(Kr,{debug:e,children:F.jsx(nn.Suspense,{fallback:F.jsx("div",{children:"Loading..."}),children:F.jsx("div",{children:F.jsx(n,{title:"GALLERY",image_modal:c,set_image_modal:d})})})}),F.jsxs(Kr,{debug:e,children:[F.jsx(Wp,{children:"Location"}),F.jsx("img",{src:T0,width:"35%"}),F.jsx("br",{}),F.jsx("img",{src:E0,width:"90%"}),F.jsx("br",{}),"주소 : 서울 강남구 언주로 126길 23 (논현동)",F.jsx("br",{}),F.jsx("br",{}),F.jsx(fh,{tr_type:"bus"}),F.jsx(fh,{tr_type:"car"}),F.jsx(fh,{tr_type:"metro"})]}),F.jsx(Kr,{debug:e,children:F.jsx("div",{onClick:()=>{k({isopen:!0,src:"M"}),document.body.classList.add("modal-open")},style:{backgroundColor:"rgb(242,238,238)",padding:"12px",margin:"12px",marginLeft:"20%",marginRight:"20%"},children:"청주◀▶서울 셔틀버스"})}),F.jsxs(Kr,{debug:e,children:[F.jsx("p",{style:{fontSize:"20px",fontFamily:"MaruBuri",margin:"20px"},children:"마음 전하실 곳"}),F.jsx("div",{onClick:()=>{y({isopen:!0,src:"M"}),document.body.classList.add("modal-open")},style:{backgroundColor:"rgb(242,238,238)",padding:"12px",margin:"12px",marginLeft:"20%",marginRight:"20%"},children:"신랑측 계좌번호"}),F.jsx("div",{onClick:()=>{y({isopen:!0,src:"W"}),document.body.classList.add("modal-open")},style:{backgroundColor:"rgb(242,238,238)",padding:"12px",margin:"12px",marginLeft:"20%",marginRight:"20%"},children:"신부측 계좌번호"})]}),F.jsxs(Kr,{debug:e,children:[F.jsxs("div",{onClick:()=>P0(),style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"40px"},children:[F.jsx("img",{src:I0,width:25,style:{marginRight:"5px"}}),"카카오톡 공유하기"]}),F.jsxs("div",{onClick:()=>i(),style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"20px"},children:[F.jsx("img",{src:A0,width:25,style:{marginRight:"5px"}}),"링크주소 복사하기"]})]}),F.jsx("div",{style:{border:e,width:"100%"},children:F.jsx("p",{style:{fontSize:"12px"},children:"Copyright 2025. Made By TEUS."})}),F.jsxs(ph,{isOpen:c,onClose:()=>{d({...c,isopen:!1,src:null}),document.body.classList.remove("modal-open")},mystyle:{backgroundColor:"rgb(0, 0, 0)"},children:[F.jsx("div",{style:{display:"flex",justifyContent:"center"},children:F.jsx("img",{src:c.src,width:"100%"})}),F.jsxs("div",{children:[F.jsx("button",{className:"styled-button",onClick:()=>{Z("left")},children:"<"}),F.jsx("button",{className:"styled-button",onClick:()=>{Z("right")},children:">"})]})]}),F.jsx(ph,{isOpen:w,onClose:()=>{k({isopen:!1,src:null}),document.body.classList.remove("modal-open")},mystyle:{backgroundColor:"rgb(255, 255, 255)"},children:F.jsx("div",{style:{display:"flex",justifyContent:"center"},children:F.jsx(cS,{src:w.src,user_nm:Q,tot_num:_e,regist_user:ye})})}),F.jsx(ph,{isOpen:g,onClose:()=>{y({isopen:!1,src:null}),document.body.classList.remove("modal-open")},mystyle:{backgroundColor:"rgb(255, 246, 246)"},children:F.jsx("div",{style:{display:"flex",justifyContent:"center"},children:F.jsx(R0,{src:g.src})})})]})})}document.addEventListener("gesturestart",function(i){i.preventDefault(),document.body.style.zoom=1});g0.createRoot(document.getElementById("root")).render(F.jsx(nn.StrictMode,{children:F.jsx(hS,{})}));export{Wp as S,_0 as _,F as j,nn as r};
