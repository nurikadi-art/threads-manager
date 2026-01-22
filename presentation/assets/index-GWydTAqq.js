(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function r(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(f){if(f.ep)return;f.ep=!0;const m=r(f);fetch(f.href,m)}})();var kc={exports:{}},cl={};var r0;function $5(){if(r0)return cl;r0=1;var n=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(o,f,m){var h=null;if(m!==void 0&&(h=""+m),f.key!==void 0&&(h=""+f.key),"key"in f){m={};for(var x in f)x!=="key"&&(m[x]=f[x])}else m=f;return f=m.ref,{$$typeof:n,type:o,key:h,ref:f!==void 0?f:null,props:m}}return cl.Fragment=l,cl.jsx=r,cl.jsxs=r,cl}var o0;function W5(){return o0||(o0=1,kc.exports=$5()),kc.exports}var u=W5(),Oc={exports:{}},lt={};var c0;function I5(){if(c0)return lt;c0=1;var n=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),h=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),j=Symbol.iterator;function k(N){return N===null||typeof N!="object"?null:(N=j&&N[j]||N["@@iterator"],typeof N=="function"?N:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,G={};function q(N,U,X){this.props=N,this.context=U,this.refs=G,this.updater=X||B}q.prototype.isReactComponent={},q.prototype.setState=function(N,U){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,U,"setState")},q.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function K(){}K.prototype=q.prototype;function R(N,U,X){this.props=N,this.context=U,this.refs=G,this.updater=X||B}var Q=R.prototype=new K;Q.constructor=R,L(Q,q.prototype),Q.isPureReactComponent=!0;var F=Array.isArray;function nt(){}var tt={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function st(N,U,X){var $=X.ref;return{$$typeof:n,type:N,key:U,ref:$!==void 0?$:null,props:X}}function zt(N,U){return st(N.type,U,N.props)}function Ut(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function qt(N){var U={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(X){return U[X]})}var Ge=/\/+/g;function ze(N,U){return typeof N=="object"&&N!==null&&N.key!=null?qt(""+N.key):U.toString(36)}function ce(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(nt,nt):(N.status="pending",N.then(function(U){N.status==="pending"&&(N.status="fulfilled",N.value=U)},function(U){N.status==="pending"&&(N.status="rejected",N.reason=U)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,U,X,$,rt){var ut=typeof N;(ut==="undefined"||ut==="boolean")&&(N=null);var St=!1;if(N===null)St=!0;else switch(ut){case"bigint":case"string":case"number":St=!0;break;case"object":switch(N.$$typeof){case n:case l:St=!0;break;case b:return St=N._init,O(St(N._payload),U,X,$,rt)}}if(St)return rt=rt(N),St=$===""?"."+ze(N,0):$,F(rt)?(X="",St!=null&&(X=St.replace(Ge,"$&/")+"/"),O(rt,U,X,"",function(gn){return gn})):rt!=null&&(Ut(rt)&&(rt=zt(rt,X+(rt.key==null||N&&N.key===rt.key?"":(""+rt.key).replace(Ge,"$&/")+"/")+St)),U.push(rt)),1;St=0;var le=$===""?".":$+":";if(F(N))for(var Bt=0;Bt<N.length;Bt++)$=N[Bt],ut=le+ze($,Bt),St+=O($,U,X,ut,rt);else if(Bt=k(N),typeof Bt=="function")for(N=Bt.call(N),Bt=0;!($=N.next()).done;)$=$.value,ut=le+ze($,Bt++),St+=O($,U,X,ut,rt);else if(ut==="object"){if(typeof N.then=="function")return O(ce(N),U,X,$,rt);throw U=String(N),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return St}function H(N,U,X){if(N==null)return N;var $=[],rt=0;return O(N,$,"","",function(ut){return U.call(X,ut,rt++)}),$}function W(N){if(N._status===-1){var U=N._result;U=U(),U.then(function(X){(N._status===0||N._status===-1)&&(N._status=1,N._result=X)},function(X){(N._status===0||N._status===-1)&&(N._status=2,N._result=X)}),N._status===-1&&(N._status=0,N._result=U)}if(N._status===1)return N._result.default;throw N._result}var ht=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},yt={map:H,forEach:function(N,U,X){H(N,function(){U.apply(this,arguments)},X)},count:function(N){var U=0;return H(N,function(){U++}),U},toArray:function(N){return H(N,function(U){return U})||[]},only:function(N){if(!Ut(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return lt.Activity=v,lt.Children=yt,lt.Component=q,lt.Fragment=r,lt.Profiler=f,lt.PureComponent=R,lt.StrictMode=o,lt.Suspense=y,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=tt,lt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return tt.H.useMemoCache(N)}},lt.cache=function(N){return function(){return N.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(N,U,X){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var $=L({},N.props),rt=N.key;if(U!=null)for(ut in U.key!==void 0&&(rt=""+U.key),U)!P.call(U,ut)||ut==="key"||ut==="__self"||ut==="__source"||ut==="ref"&&U.ref===void 0||($[ut]=U[ut]);var ut=arguments.length-2;if(ut===1)$.children=X;else if(1<ut){for(var St=Array(ut),le=0;le<ut;le++)St[le]=arguments[le+2];$.children=St}return st(N.type,rt,$)},lt.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:m,_context:N},N},lt.createElement=function(N,U,X){var $,rt={},ut=null;if(U!=null)for($ in U.key!==void 0&&(ut=""+U.key),U)P.call(U,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(rt[$]=U[$]);var St=arguments.length-2;if(St===1)rt.children=X;else if(1<St){for(var le=Array(St),Bt=0;Bt<St;Bt++)le[Bt]=arguments[Bt+2];rt.children=le}if(N&&N.defaultProps)for($ in St=N.defaultProps,St)rt[$]===void 0&&(rt[$]=St[$]);return st(N,ut,rt)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(N){return{$$typeof:x,render:N}},lt.isValidElement=Ut,lt.lazy=function(N){return{$$typeof:b,_payload:{_status:-1,_result:N},_init:W}},lt.memo=function(N,U){return{$$typeof:g,type:N,compare:U===void 0?null:U}},lt.startTransition=function(N){var U=tt.T,X={};tt.T=X;try{var $=N(),rt=tt.S;rt!==null&&rt(X,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(nt,ht)}catch(ut){ht(ut)}finally{U!==null&&X.types!==null&&(U.types=X.types),tt.T=U}},lt.unstable_useCacheRefresh=function(){return tt.H.useCacheRefresh()},lt.use=function(N){return tt.H.use(N)},lt.useActionState=function(N,U,X){return tt.H.useActionState(N,U,X)},lt.useCallback=function(N,U){return tt.H.useCallback(N,U)},lt.useContext=function(N){return tt.H.useContext(N)},lt.useDebugValue=function(){},lt.useDeferredValue=function(N,U){return tt.H.useDeferredValue(N,U)},lt.useEffect=function(N,U){return tt.H.useEffect(N,U)},lt.useEffectEvent=function(N){return tt.H.useEffectEvent(N)},lt.useId=function(){return tt.H.useId()},lt.useImperativeHandle=function(N,U,X){return tt.H.useImperativeHandle(N,U,X)},lt.useInsertionEffect=function(N,U){return tt.H.useInsertionEffect(N,U)},lt.useLayoutEffect=function(N,U){return tt.H.useLayoutEffect(N,U)},lt.useMemo=function(N,U){return tt.H.useMemo(N,U)},lt.useOptimistic=function(N,U){return tt.H.useOptimistic(N,U)},lt.useReducer=function(N,U,X){return tt.H.useReducer(N,U,X)},lt.useRef=function(N){return tt.H.useRef(N)},lt.useState=function(N){return tt.H.useState(N)},lt.useSyncExternalStore=function(N,U,X){return tt.H.useSyncExternalStore(N,U,X)},lt.useTransition=function(){return tt.H.useTransition()},lt.version="19.2.3",lt}var u0;function Tu(){return u0||(u0=1,Oc.exports=I5()),Oc.exports}var Y=Tu(),_c={exports:{}},ul={},Rc={exports:{}},Vc={};var f0;function t2(){return f0||(f0=1,(function(n){function l(O,H){var W=O.length;O.push(H);t:for(;0<W;){var ht=W-1>>>1,yt=O[ht];if(0<f(yt,H))O[ht]=H,O[W]=yt,W=ht;else break t}}function r(O){return O.length===0?null:O[0]}function o(O){if(O.length===0)return null;var H=O[0],W=O.pop();if(W!==H){O[0]=W;t:for(var ht=0,yt=O.length,N=yt>>>1;ht<N;){var U=2*(ht+1)-1,X=O[U],$=U+1,rt=O[$];if(0>f(X,W))$<yt&&0>f(rt,X)?(O[ht]=rt,O[$]=W,ht=$):(O[ht]=X,O[U]=W,ht=U);else if($<yt&&0>f(rt,W))O[ht]=rt,O[$]=W,ht=$;else break t}}return H}function f(O,H){var W=O.sortIndex-H.sortIndex;return W!==0?W:O.id-H.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;n.unstable_now=function(){return m.now()}}else{var h=Date,x=h.now();n.unstable_now=function(){return h.now()-x}}var y=[],g=[],b=1,v=null,j=3,k=!1,B=!1,L=!1,G=!1,q=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function Q(O){for(var H=r(g);H!==null;){if(H.callback===null)o(g);else if(H.startTime<=O)o(g),H.sortIndex=H.expirationTime,l(y,H);else break;H=r(g)}}function F(O){if(L=!1,Q(O),!B)if(r(y)!==null)B=!0,nt||(nt=!0,qt());else{var H=r(g);H!==null&&ce(F,H.startTime-O)}}var nt=!1,tt=-1,P=5,st=-1;function zt(){return G?!0:!(n.unstable_now()-st<P)}function Ut(){if(G=!1,nt){var O=n.unstable_now();st=O;var H=!0;try{t:{B=!1,L&&(L=!1,K(tt),tt=-1),k=!0;var W=j;try{e:{for(Q(O),v=r(y);v!==null&&!(v.expirationTime>O&&zt());){var ht=v.callback;if(typeof ht=="function"){v.callback=null,j=v.priorityLevel;var yt=ht(v.expirationTime<=O);if(O=n.unstable_now(),typeof yt=="function"){v.callback=yt,Q(O),H=!0;break e}v===r(y)&&o(y),Q(O)}else o(y);v=r(y)}if(v!==null)H=!0;else{var N=r(g);N!==null&&ce(F,N.startTime-O),H=!1}}break t}finally{v=null,j=W,k=!1}H=void 0}}finally{H?qt():nt=!1}}}var qt;if(typeof R=="function")qt=function(){R(Ut)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,ze=Ge.port2;Ge.port1.onmessage=Ut,qt=function(){ze.postMessage(null)}}else qt=function(){q(Ut,0)};function ce(O,H){tt=q(function(){O(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(O){O.callback=null},n.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<O?Math.floor(1e3/O):5},n.unstable_getCurrentPriorityLevel=function(){return j},n.unstable_next=function(O){switch(j){case 1:case 2:case 3:var H=3;break;default:H=j}var W=j;j=H;try{return O()}finally{j=W}},n.unstable_requestPaint=function(){G=!0},n.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=j;j=O;try{return H()}finally{j=W}},n.unstable_scheduleCallback=function(O,H,W){var ht=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ht+W:ht):W=ht,O){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=W+yt,O={id:b++,callback:H,priorityLevel:O,startTime:W,expirationTime:yt,sortIndex:-1},W>ht?(O.sortIndex=W,l(g,O),r(y)===null&&O===r(g)&&(L?(K(tt),tt=-1):L=!0,ce(F,W-ht))):(O.sortIndex=yt,l(y,O),B||k||(B=!0,nt||(nt=!0,qt()))),O},n.unstable_shouldYield=zt,n.unstable_wrapCallback=function(O){var H=j;return function(){var W=j;j=H;try{return O.apply(this,arguments)}finally{j=W}}}})(Vc)),Vc}var d0;function e2(){return d0||(d0=1,Rc.exports=t2()),Rc.exports}var Uc={exports:{}},ie={};var h0;function a2(){if(h0)return ie;h0=1;var n=Tu();function l(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(l(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(y,g,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:v==null?null:""+v,children:y,containerInfo:g,implementation:b}}var h=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ie.createPortal=function(y,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(l(299));return m(y,g,null,b)},ie.flushSync=function(y){var g=h.T,b=o.p;try{if(h.T=null,o.p=2,y)return y()}finally{h.T=g,o.p=b,o.d.f()}},ie.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(y,g))},ie.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},ie.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var b=g.as,v=x(b,g.crossOrigin),j=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?o.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:j,fetchPriority:k}):b==="script"&&o.d.X(y,{crossOrigin:v,integrity:j,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ie.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=x(g.as,g.crossOrigin);o.d.M(y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(y)},ie.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,v=x(b,g.crossOrigin);o.d.L(y,b,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ie.preloadModule=function(y,g){if(typeof y=="string")if(g){var b=x(g.as,g.crossOrigin);o.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(y)},ie.requestFormReset=function(y){o.d.r(y)},ie.unstable_batchedUpdates=function(y,g){return y(g)},ie.useFormState=function(y,g,b){return h.H.useFormState(y,g,b)},ie.useFormStatus=function(){return h.H.useHostTransitionStatus()},ie.version="19.2.3",ie}var m0;function i2(){if(m0)return Uc.exports;m0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(l){console.error(l)}}return n(),Uc.exports=a2(),Uc.exports}var p0;function n2(){if(p0)return ul;p0=1;var n=e2(),l=Tu(),r=i2();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(m(t)!==t)throw Error(o(188))}function g(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(o(188));return e!==t?null:t}for(var a=t,i=e;;){var s=a.return;if(s===null)break;var c=s.alternate;if(c===null){if(i=s.return,i!==null){a=i;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===a)return y(s),t;if(c===i)return y(s),e;c=c.sibling}throw Error(o(188))}if(a.return!==i.return)a=s,i=c;else{for(var d=!1,p=s.child;p;){if(p===a){d=!0,a=s,i=c;break}if(p===i){d=!0,i=s,a=c;break}p=p.sibling}if(!d){for(p=c.child;p;){if(p===a){d=!0,a=c,i=s;break}if(p===i){d=!0,i=c,a=s;break}p=p.sibling}if(!d)throw Error(o(189))}}if(a.alternate!==i)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:e}function b(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=b(t),e!==null)return e;t=t.sibling}return null}var v=Object.assign,j=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),R=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),tt=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),st=Symbol.for("react.activity"),zt=Symbol.for("react.memo_cache_sentinel"),Ut=Symbol.iterator;function qt(t){return t===null||typeof t!="object"?null:(t=Ut&&t[Ut]||t["@@iterator"],typeof t=="function"?t:null)}var Ge=Symbol.for("react.client.reference");function ze(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ge?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case L:return"Fragment";case q:return"Profiler";case G:return"StrictMode";case F:return"Suspense";case nt:return"SuspenseList";case st:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case B:return"Portal";case R:return t.displayName||"Context";case K:return(t._context.displayName||"Context")+".Consumer";case Q:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tt:return e=t.displayName||null,e!==null?e:ze(t.type)||"Memo";case P:e=t._payload,t=t._init;try{return ze(t(e))}catch{}}return null}var ce=Array.isArray,O=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ht=[],yt=-1;function N(t){return{current:t}}function U(t){0>yt||(t.current=ht[yt],ht[yt]=null,yt--)}function X(t,e){yt++,ht[yt]=t.current,t.current=e}var $=N(null),rt=N(null),ut=N(null),St=N(null);function le(t,e){switch(X(ut,e),X(rt,t),X($,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Dm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Dm(e),t=Cm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}U($),X($,t)}function Bt(){U($),U(rt),U(ut)}function gn(t){t.memoizedState!==null&&X(St,t);var e=$.current,a=Cm(e,t.type);e!==a&&(X(rt,t),X($,a))}function zl(t){rt.current===t&&(U($),U(rt)),St.current===t&&(U(St),ll._currentValue=W)}var hr,sf;function Pa(t){if(hr===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);hr=e&&e[1]||"",sf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hr+t+sf}var mr=!1;function pr(t,e){if(!t||mr)return"";mr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(D){var E=D}Reflect.construct(t,[],V)}else{try{V.call()}catch(D){E=D}t.call(V.prototype)}}else{try{throw Error()}catch(D){E=D}(V=t())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(D){if(D&&E&&typeof D.stack=="string")return[D.stack,E.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),d=c[0],p=c[1];if(d&&p){var S=d.split(`
`),z=p.split(`
`);for(s=i=0;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;for(;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;if(i===S.length||s===z.length)for(i=S.length-1,s=z.length-1;1<=i&&0<=s&&S[i]!==z[s];)s--;for(;1<=i&&0<=s;i--,s--)if(S[i]!==z[s]){if(i!==1||s!==1)do if(i--,s--,0>s||S[i]!==z[s]){var C=`
`+S[i].replace(" at new "," at ");return t.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",t.displayName)),C}while(1<=i&&0<=s);break}}}finally{mr=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Pa(a):""}function zy(t,e){switch(t.tag){case 26:case 27:case 5:return Pa(t.type);case 16:return Pa("Lazy");case 13:return t.child!==e&&e!==null?Pa("Suspense Fallback"):Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 15:return pr(t.type,!1);case 11:return pr(t.type.render,!1);case 1:return pr(t.type,!0);case 31:return Pa("Activity");default:return""}}function rf(t){try{var e="",a=null;do e+=zy(t,a),a=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var gr=Object.prototype.hasOwnProperty,yr=n.unstable_scheduleCallback,xr=n.unstable_cancelCallback,Ey=n.unstable_shouldYield,Dy=n.unstable_requestPaint,ye=n.unstable_now,Cy=n.unstable_getCurrentPriorityLevel,of=n.unstable_ImmediatePriority,cf=n.unstable_UserBlockingPriority,El=n.unstable_NormalPriority,ky=n.unstable_LowPriority,uf=n.unstable_IdlePriority,Oy=n.log,_y=n.unstable_setDisableYieldValue,yn=null,xe=null;function va(t){if(typeof Oy=="function"&&_y(t),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(yn,t)}catch{}}var be=Math.clz32?Math.clz32:Uy,Ry=Math.log,Vy=Math.LN2;function Uy(t){return t>>>=0,t===0?32:31-(Ry(t)/Vy|0)|0}var Dl=256,Cl=262144,kl=4194304;function $a(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ol(t,e,a){var i=t.pendingLanes;if(i===0)return 0;var s=0,c=t.suspendedLanes,d=t.pingedLanes;t=t.warmLanes;var p=i&134217727;return p!==0?(i=p&~c,i!==0?s=$a(i):(d&=p,d!==0?s=$a(d):a||(a=p&~t,a!==0&&(s=$a(a))))):(p=i&~c,p!==0?s=$a(p):d!==0?s=$a(d):a||(a=i&~t,a!==0&&(s=$a(a)))),s===0?0:e!==0&&e!==s&&(e&c)===0&&(c=s&-s,a=e&-e,c>=a||c===32&&(a&4194048)!==0)?e:s}function xn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function By(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ff(){var t=kl;return kl<<=1,(kl&62914560)===0&&(kl=4194304),t}function br(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function bn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Hy(t,e,a,i,s,c){var d=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var p=t.entanglements,S=t.expirationTimes,z=t.hiddenUpdates;for(a=d&~a;0<a;){var C=31-be(a),V=1<<C;p[C]=0,S[C]=-1;var E=z[C];if(E!==null)for(z[C]=null,C=0;C<E.length;C++){var D=E[C];D!==null&&(D.lane&=-536870913)}a&=~V}i!==0&&df(t,i,0),c!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=c&~(d&~e))}function df(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-be(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|a&261930}function hf(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var i=31-be(a),s=1<<i;s&e|t[i]&e&&(t[i]|=e),a&=~s}}function mf(t,e){var a=e&-e;return a=(a&42)!==0?1:vr(a),(a&(t.suspendedLanes|e))!==0?0:a}function vr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Sr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function pf(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:t0(t.type))}function gf(t,e){var a=H.p;try{return H.p=t,e()}finally{H.p=a}}var Sa=Math.random().toString(36).slice(2),$t="__reactFiber$"+Sa,ue="__reactProps$"+Sa,vi="__reactContainer$"+Sa,jr="__reactEvents$"+Sa,Ly="__reactListeners$"+Sa,qy="__reactHandles$"+Sa,yf="__reactResources$"+Sa,vn="__reactMarker$"+Sa;function Tr(t){delete t[$t],delete t[ue],delete t[jr],delete t[Ly],delete t[qy]}function Si(t){var e=t[$t];if(e)return e;for(var a=t.parentNode;a;){if(e=a[vi]||a[$t]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Bm(t);t!==null;){if(a=t[$t])return a;t=Bm(t)}return e}t=a,a=t.parentNode}return null}function ji(t){if(t=t[$t]||t[vi]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Sn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function Ti(t){var e=t[yf];return e||(e=t[yf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ft(t){t[vn]=!0}var xf=new Set,bf={};function Wa(t,e){Ni(t,e),Ni(t+"Capture",e)}function Ni(t,e){for(bf[t]=e,t=0;t<e.length;t++)xf.add(e[t])}var Gy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vf={},Sf={};function Yy(t){return gr.call(Sf,t)?!0:gr.call(vf,t)?!1:Gy.test(t)?Sf[t]=!0:(vf[t]=!0,!1)}function _l(t,e,a){if(Yy(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Rl(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ta(t,e,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+i)}}function Ee(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Xy(t,e,a){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,c=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(d){a=""+d,c.call(this,d)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Nr(t){if(!t._valueTracker){var e=jf(t)?"checked":"value";t._valueTracker=Xy(t,e,""+t[e])}}function Tf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),i="";return t&&(i=jf(t)?t.checked?"true":"false":t.value),t=i,t!==a?(e.setValue(t),!0):!1}function Vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Qy=/[\n"\\]/g;function De(t){return t.replace(Qy,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function wr(t,e,a,i,s,c,d,p){t.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.type=d:t.removeAttribute("type"),e!=null?d==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ee(e)):t.value!==""+Ee(e)&&(t.value=""+Ee(e)):d!=="submit"&&d!=="reset"||t.removeAttribute("value"),e!=null?Ar(t,d,Ee(e)):a!=null?Ar(t,d,Ee(a)):i!=null&&t.removeAttribute("value"),s==null&&c!=null&&(t.defaultChecked=!!c),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.name=""+Ee(p):t.removeAttribute("name")}function Nf(t,e,a,i,s,c,d,p){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){Nr(t);return}a=a!=null?""+Ee(a):"",e=e!=null?""+Ee(e):a,p||e===t.value||(t.value=e),t.defaultValue=e}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=p?t.checked:!!i,t.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.name=d),Nr(t)}function Ar(t,e,a){e==="number"&&Vl(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function wi(t,e,a,i){if(t=t.options,e){e={};for(var s=0;s<a.length;s++)e["$"+a[s]]=!0;for(a=0;a<t.length;a++)s=e.hasOwnProperty("$"+t[a].value),t[a].selected!==s&&(t[a].selected=s),s&&i&&(t[a].defaultSelected=!0)}else{for(a=""+Ee(a),e=null,s=0;s<t.length;s++){if(t[s].value===a){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function wf(t,e,a){if(e!=null&&(e=""+Ee(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Ee(a):""}function Af(t,e,a,i){if(e==null){if(i!=null){if(a!=null)throw Error(o(92));if(ce(i)){if(1<i.length)throw Error(o(93));i=i[0]}a=i}a==null&&(a=""),e=a}a=Ee(e),t.defaultValue=a,i=t.textContent,i===a&&i!==""&&i!==null&&(t.value=i),Nr(t)}function Ai(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Ky=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mf(t,e,a){var i=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,a):typeof a!="number"||a===0||Ky.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function zf(t,e,a){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var s in e)i=e[s],e.hasOwnProperty(s)&&a[s]!==i&&Mf(t,s,i)}else for(var c in e)e.hasOwnProperty(c)&&Mf(t,c,e[c])}function Mr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(t){return Jy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var zr=null;function Er(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mi=null,zi=null;function Ef(t){var e=ji(t);if(e&&(t=e.stateNode)){var a=t[ue]||null;t:switch(t=e.stateNode,e.type){case"input":if(wr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+De(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var i=a[e];if(i!==t&&i.form===t.form){var s=i[ue]||null;if(!s)throw Error(o(90));wr(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<a.length;e++)i=a[e],i.form===t.form&&Tf(i)}break t;case"textarea":wf(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&wi(t,!!a.multiple,e,!1)}}}var Dr=!1;function Df(t,e,a){if(Dr)return t(e,a);Dr=!0;try{var i=t(e);return i}finally{if(Dr=!1,(Mi!==null||zi!==null)&&(Ns(),Mi&&(e=Mi,t=zi,zi=Mi=null,Ef(e),t)))for(e=0;e<t.length;e++)Ef(t[e])}}function jn(t,e){var a=t.stateNode;if(a===null)return null;var i=a[ue]||null;if(i===null)return null;a=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,e,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cr=!1;if(aa)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Cr=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Cr=!1}var ja=null,kr=null,Bl=null;function Cf(){if(Bl)return Bl;var t,e=kr,a=e.length,i,s="value"in ja?ja.value:ja.textContent,c=s.length;for(t=0;t<a&&e[t]===s[t];t++);var d=a-t;for(i=1;i<=d&&e[a-i]===s[c-i];i++);return Bl=s.slice(t,1<i?1-i:void 0)}function Hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ll(){return!0}function kf(){return!1}function fe(t){function e(a,i,s,c,d){this._reactName=a,this._targetInst=s,this.type=i,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var p in t)t.hasOwnProperty(p)&&(a=t[p],this[p]=a?a(c):c[p]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ll:kf,this.isPropagationStopped=kf,this}return v(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),e}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=fe(Ia),Nn=v({},Ia,{view:0,detail:0}),Fy=fe(Nn),Or,_r,wn,Gl=v({},Nn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wn&&(wn&&t.type==="mousemove"?(Or=t.screenX-wn.screenX,_r=t.screenY-wn.screenY):_r=Or=0,wn=t),Or)},movementY:function(t){return"movementY"in t?t.movementY:_r}}),Of=fe(Gl),Py=v({},Gl,{dataTransfer:0}),$y=fe(Py),Wy=v({},Nn,{relatedTarget:0}),Rr=fe(Wy),Iy=v({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),t1=fe(Iy),e1=v({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a1=fe(e1),i1=v({},Ia,{data:0}),_f=fe(i1),n1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=s1[t])?!!e[t]:!1}function Vr(){return r1}var o1=v({},Nn,{key:function(t){if(t.key){var e=n1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?l1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vr,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),c1=fe(o1),u1=v({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rf=fe(u1),f1=v({},Nn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vr}),d1=fe(f1),h1=v({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),m1=fe(h1),p1=v({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),g1=fe(p1),y1=v({},Ia,{newState:0,oldState:0}),x1=fe(y1),b1=[9,13,27,32],Ur=aa&&"CompositionEvent"in window,An=null;aa&&"documentMode"in document&&(An=document.documentMode);var v1=aa&&"TextEvent"in window&&!An,Vf=aa&&(!Ur||An&&8<An&&11>=An),Uf=" ",Bf=!1;function Hf(t,e){switch(t){case"keyup":return b1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ei=!1;function S1(t,e){switch(t){case"compositionend":return Lf(e);case"keypress":return e.which!==32?null:(Bf=!0,Uf);case"textInput":return t=e.data,t===Uf&&Bf?null:t;default:return null}}function j1(t,e){if(Ei)return t==="compositionend"||!Ur&&Hf(t,e)?(t=Cf(),Bl=kr=ja=null,Ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vf&&e.locale!=="ko"?null:e.data;default:return null}}var T1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!T1[t.type]:e==="textarea"}function Gf(t,e,a,i){Mi?zi?zi.push(i):zi=[i]:Mi=i,e=Cs(e,"onChange"),0<e.length&&(a=new ql("onChange","change",null,a,i),t.push({event:a,listeners:e}))}var Mn=null,zn=null;function N1(t){Nm(t,0)}function Yl(t){var e=Sn(t);if(Tf(e))return t}function Yf(t,e){if(t==="change")return e}var Xf=!1;if(aa){var Br;if(aa){var Hr="oninput"in document;if(!Hr){var Qf=document.createElement("div");Qf.setAttribute("oninput","return;"),Hr=typeof Qf.oninput=="function"}Br=Hr}else Br=!1;Xf=Br&&(!document.documentMode||9<document.documentMode)}function Kf(){Mn&&(Mn.detachEvent("onpropertychange",Zf),zn=Mn=null)}function Zf(t){if(t.propertyName==="value"&&Yl(zn)){var e=[];Gf(e,zn,t,Er(t)),Df(N1,e)}}function w1(t,e,a){t==="focusin"?(Kf(),Mn=e,zn=a,Mn.attachEvent("onpropertychange",Zf)):t==="focusout"&&Kf()}function A1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(zn)}function M1(t,e){if(t==="click")return Yl(e)}function z1(t,e){if(t==="input"||t==="change")return Yl(e)}function E1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ve=typeof Object.is=="function"?Object.is:E1;function En(t,e){if(ve(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var s=a[i];if(!gr.call(e,s)||!ve(t[s],e[s]))return!1}return!0}function Jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ff(t,e){var a=Jf(t);t=0;for(var i;a;){if(a.nodeType===3){if(i=t+a.textContent.length,t<=e&&i>=e)return{node:a,offset:e-t};t=i}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Jf(a)}}function Pf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $f(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Vl(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Vl(t.document)}return e}function Lr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var D1=aa&&"documentMode"in document&&11>=document.documentMode,Di=null,qr=null,Dn=null,Gr=!1;function Wf(t,e,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gr||Di==null||Di!==Vl(i)||(i=Di,"selectionStart"in i&&Lr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Dn&&En(Dn,i)||(Dn=i,i=Cs(qr,"onSelect"),0<i.length&&(e=new ql("onSelect","select",null,e,a),t.push({event:e,listeners:i}),e.target=Di)))}function ti(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Ci={animationend:ti("Animation","AnimationEnd"),animationiteration:ti("Animation","AnimationIteration"),animationstart:ti("Animation","AnimationStart"),transitionrun:ti("Transition","TransitionRun"),transitionstart:ti("Transition","TransitionStart"),transitioncancel:ti("Transition","TransitionCancel"),transitionend:ti("Transition","TransitionEnd")},Yr={},If={};aa&&(If=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function ei(t){if(Yr[t])return Yr[t];if(!Ci[t])return t;var e=Ci[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in If)return Yr[t]=e[a];return t}var td=ei("animationend"),ed=ei("animationiteration"),ad=ei("animationstart"),C1=ei("transitionrun"),k1=ei("transitionstart"),O1=ei("transitioncancel"),id=ei("transitionend"),nd=new Map,Xr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xr.push("scrollEnd");function Ye(t,e){nd.set(t,e),Wa(e,[t])}var Xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ce=[],ki=0,Qr=0;function Ql(){for(var t=ki,e=Qr=ki=0;e<t;){var a=Ce[e];Ce[e++]=null;var i=Ce[e];Ce[e++]=null;var s=Ce[e];Ce[e++]=null;var c=Ce[e];if(Ce[e++]=null,i!==null&&s!==null){var d=i.pending;d===null?s.next=s:(s.next=d.next,d.next=s),i.pending=s}c!==0&&ld(a,s,c)}}function Kl(t,e,a,i){Ce[ki++]=t,Ce[ki++]=e,Ce[ki++]=a,Ce[ki++]=i,Qr|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Kr(t,e,a,i){return Kl(t,e,a,i),Zl(t)}function ai(t,e){return Kl(t,null,null,e),Zl(t)}function ld(t,e,a){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a);for(var s=!1,c=t.return;c!==null;)c.childLanes|=a,i=c.alternate,i!==null&&(i.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(s=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,s&&e!==null&&(s=31-be(a),t=c.hiddenUpdates,i=t[s],i===null?t[s]=[e]:i.push(e),e.lane=a|536870912),c):null}function Zl(t){if(50<Wn)throw Wn=0,ac=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Oi={};function _1(t,e,a,i){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(t,e,a,i){return new _1(t,e,a,i)}function Zr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ia(t,e){var a=t.alternate;return a===null?(a=Se(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function sd(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Jl(t,e,a,i,s,c){var d=0;if(i=t,typeof t=="function")Zr(t)&&(d=1);else if(typeof t=="string")d=H5(t,a,$.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case st:return t=Se(31,a,e,s),t.elementType=st,t.lanes=c,t;case L:return ii(a.children,s,c,e);case G:d=8,s|=24;break;case q:return t=Se(12,a,e,s|2),t.elementType=q,t.lanes=c,t;case F:return t=Se(13,a,e,s),t.elementType=F,t.lanes=c,t;case nt:return t=Se(19,a,e,s),t.elementType=nt,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:d=10;break t;case K:d=9;break t;case Q:d=11;break t;case tt:d=14;break t;case P:d=16,i=null;break t}d=29,a=Error(o(130,t===null?"null":typeof t,"")),i=null}return e=Se(d,a,e,s),e.elementType=t,e.type=i,e.lanes=c,e}function ii(t,e,a,i){return t=Se(7,t,i,e),t.lanes=a,t}function Jr(t,e,a){return t=Se(6,t,null,e),t.lanes=a,t}function rd(t){var e=Se(18,null,null,0);return e.stateNode=t,e}function Fr(t,e,a){return e=Se(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var od=new WeakMap;function ke(t,e){if(typeof t=="object"&&t!==null){var a=od.get(t);return a!==void 0?a:(e={value:t,source:e,stack:rf(e)},od.set(t,e),e)}return{value:t,source:e,stack:rf(e)}}var _i=[],Ri=0,Fl=null,Cn=0,Oe=[],_e=0,Ta=null,Je=1,Fe="";function na(t,e){_i[Ri++]=Cn,_i[Ri++]=Fl,Fl=t,Cn=e}function cd(t,e,a){Oe[_e++]=Je,Oe[_e++]=Fe,Oe[_e++]=Ta,Ta=t;var i=Je;t=Fe;var s=32-be(i)-1;i&=~(1<<s),a+=1;var c=32-be(e)+s;if(30<c){var d=s-s%5;c=(i&(1<<d)-1).toString(32),i>>=d,s-=d,Je=1<<32-be(e)+s|a<<s|i,Fe=c+t}else Je=1<<c|a<<s|i,Fe=t}function Pr(t){t.return!==null&&(na(t,1),cd(t,1,0))}function $r(t){for(;t===Fl;)Fl=_i[--Ri],_i[Ri]=null,Cn=_i[--Ri],_i[Ri]=null;for(;t===Ta;)Ta=Oe[--_e],Oe[_e]=null,Fe=Oe[--_e],Oe[_e]=null,Je=Oe[--_e],Oe[_e]=null}function ud(t,e){Oe[_e++]=Je,Oe[_e++]=Fe,Oe[_e++]=Ta,Je=e.id,Fe=e.overflow,Ta=t}var Wt=null,Et=null,gt=!1,Na=null,Re=!1,Wr=Error(o(519));function wa(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kn(ke(e,t)),Wr}function fd(t){var e=t.stateNode,a=t.type,i=t.memoizedProps;switch(e[$t]=t,e[ue]=i,a){case"dialog":dt("cancel",e),dt("close",e);break;case"iframe":case"object":case"embed":dt("load",e);break;case"video":case"audio":for(a=0;a<tl.length;a++)dt(tl[a],e);break;case"source":dt("error",e);break;case"img":case"image":case"link":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"input":dt("invalid",e),Nf(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":dt("invalid",e);break;case"textarea":dt("invalid",e),Af(e,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||i.suppressHydrationWarning===!0||zm(e.textContent,a)?(i.popover!=null&&(dt("beforetoggle",e),dt("toggle",e)),i.onScroll!=null&&dt("scroll",e),i.onScrollEnd!=null&&dt("scrollend",e),i.onClick!=null&&(e.onclick=ea),e=!0):e=!1,e||wa(t,!0)}function dd(t){for(Wt=t.return;Wt;)switch(Wt.tag){case 5:case 31:case 13:Re=!1;return;case 27:case 3:Re=!0;return;default:Wt=Wt.return}}function Vi(t){if(t!==Wt)return!1;if(!gt)return dd(t),gt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||yc(t.type,t.memoizedProps)),a=!a),a&&Et&&wa(t),dd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Et=Um(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Et=Um(t)}else e===27?(e=Et,Ha(t.type)?(t=jc,jc=null,Et=t):Et=e):Et=Wt?Ue(t.stateNode.nextSibling):null;return!0}function ni(){Et=Wt=null,gt=!1}function Ir(){var t=Na;return t!==null&&(pe===null?pe=t:pe.push.apply(pe,t),Na=null),t}function kn(t){Na===null?Na=[t]:Na.push(t)}var to=N(null),li=null,la=null;function Aa(t,e,a){X(to,e._currentValue),e._currentValue=a}function sa(t){t._currentValue=to.current,U(to)}function eo(t,e,a){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===a)break;t=t.return}}function ao(t,e,a,i){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){var d=s.child;c=c.firstContext;t:for(;c!==null;){var p=c;c=s;for(var S=0;S<e.length;S++)if(p.context===e[S]){c.lanes|=a,p=c.alternate,p!==null&&(p.lanes|=a),eo(c.return,a,t),i||(d=null);break t}c=p.next}}else if(s.tag===18){if(d=s.return,d===null)throw Error(o(341));d.lanes|=a,c=d.alternate,c!==null&&(c.lanes|=a),eo(d,a,t),d=null}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===t){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}}function Ui(t,e,a,i){t=null;for(var s=e,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var d=s.alternate;if(d===null)throw Error(o(387));if(d=d.memoizedProps,d!==null){var p=s.type;ve(s.pendingProps.value,d.value)||(t!==null?t.push(p):t=[p])}}else if(s===St.current){if(d=s.alternate,d===null)throw Error(o(387));d.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(ll):t=[ll])}s=s.return}t!==null&&ao(e,t,a,i),e.flags|=262144}function Pl(t){for(t=t.firstContext;t!==null;){if(!ve(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function si(t){li=t,la=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function It(t){return hd(li,t)}function $l(t,e){return li===null&&si(t),hd(t,e)}function hd(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},la===null){if(t===null)throw Error(o(308));la=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else la=la.next=e;return a}var R1=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},V1=n.unstable_scheduleCallback,U1=n.unstable_NormalPriority,Gt={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function io(){return{controller:new R1,data:new Map,refCount:0}}function On(t){t.refCount--,t.refCount===0&&V1(U1,function(){t.controller.abort()})}var _n=null,no=0,Bi=0,Hi=null;function B1(t,e){if(_n===null){var a=_n=[];no=0,Bi=oc(),Hi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return no++,e.then(md,md),e}function md(){if(--no===0&&_n!==null){Hi!==null&&(Hi.status="fulfilled");var t=_n;_n=null,Bi=0,Hi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function H1(t,e){var a=[],i={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var s=0;s<a.length;s++)(0,a[s])(e)},function(s){for(i.status="rejected",i.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),i}var pd=O.S;O.S=function(t,e){Wh=ye(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&B1(t,e),pd!==null&&pd(t,e)};var ri=N(null);function lo(){var t=ri.current;return t!==null?t:Mt.pooledCache}function Wl(t,e){e===null?X(ri,ri.current):X(ri,e.pool)}function gd(){var t=lo();return t===null?null:{parent:Gt._currentValue,pool:t}}var Li=Error(o(460)),so=Error(o(474)),Il=Error(o(542)),ts={then:function(){}};function yd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xd(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(ea,ea),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,vd(t),t;default:if(typeof e.status=="string")e.then(ea,ea);else{if(t=Mt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=i}},function(i){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,vd(t),t}throw ci=e,Li}}function oi(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ci=a,Li):a}}var ci=null;function bd(){if(ci===null)throw Error(o(459));var t=ci;return ci=null,t}function vd(t){if(t===Li||t===Il)throw Error(o(483))}var qi=null,Rn=0;function es(t){var e=Rn;return Rn+=1,qi===null&&(qi=[]),xd(qi,t,e)}function Vn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function as(t,e){throw e.$$typeof===j?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Sd(t){function e(A,T){if(t){var M=A.deletions;M===null?(A.deletions=[T],A.flags|=16):M.push(T)}}function a(A,T){if(!t)return null;for(;T!==null;)e(A,T),T=T.sibling;return null}function i(A){for(var T=new Map;A!==null;)A.key!==null?T.set(A.key,A):T.set(A.index,A),A=A.sibling;return T}function s(A,T){return A=ia(A,T),A.index=0,A.sibling=null,A}function c(A,T,M){return A.index=M,t?(M=A.alternate,M!==null?(M=M.index,M<T?(A.flags|=67108866,T):M):(A.flags|=67108866,T)):(A.flags|=1048576,T)}function d(A){return t&&A.alternate===null&&(A.flags|=67108866),A}function p(A,T,M,_){return T===null||T.tag!==6?(T=Jr(M,A.mode,_),T.return=A,T):(T=s(T,M),T.return=A,T)}function S(A,T,M,_){var et=M.type;return et===L?C(A,T,M.props.children,_,M.key):T!==null&&(T.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===P&&oi(et)===T.type)?(T=s(T,M.props),Vn(T,M),T.return=A,T):(T=Jl(M.type,M.key,M.props,null,A.mode,_),Vn(T,M),T.return=A,T)}function z(A,T,M,_){return T===null||T.tag!==4||T.stateNode.containerInfo!==M.containerInfo||T.stateNode.implementation!==M.implementation?(T=Fr(M,A.mode,_),T.return=A,T):(T=s(T,M.children||[]),T.return=A,T)}function C(A,T,M,_,et){return T===null||T.tag!==7?(T=ii(M,A.mode,_,et),T.return=A,T):(T=s(T,M),T.return=A,T)}function V(A,T,M){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Jr(""+T,A.mode,M),T.return=A,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case k:return M=Jl(T.type,T.key,T.props,null,A.mode,M),Vn(M,T),M.return=A,M;case B:return T=Fr(T,A.mode,M),T.return=A,T;case P:return T=oi(T),V(A,T,M)}if(ce(T)||qt(T))return T=ii(T,A.mode,M,null),T.return=A,T;if(typeof T.then=="function")return V(A,es(T),M);if(T.$$typeof===R)return V(A,$l(A,T),M);as(A,T)}return null}function E(A,T,M,_){var et=T!==null?T.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return et!==null?null:p(A,T,""+M,_);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case k:return M.key===et?S(A,T,M,_):null;case B:return M.key===et?z(A,T,M,_):null;case P:return M=oi(M),E(A,T,M,_)}if(ce(M)||qt(M))return et!==null?null:C(A,T,M,_,null);if(typeof M.then=="function")return E(A,T,es(M),_);if(M.$$typeof===R)return E(A,T,$l(A,M),_);as(A,M)}return null}function D(A,T,M,_,et){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return A=A.get(M)||null,p(T,A,""+_,et);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case k:return A=A.get(_.key===null?M:_.key)||null,S(T,A,_,et);case B:return A=A.get(_.key===null?M:_.key)||null,z(T,A,_,et);case P:return _=oi(_),D(A,T,M,_,et)}if(ce(_)||qt(_))return A=A.get(M)||null,C(T,A,_,et,null);if(typeof _.then=="function")return D(A,T,M,es(_),et);if(_.$$typeof===R)return D(A,T,M,$l(T,_),et);as(T,_)}return null}function Z(A,T,M,_){for(var et=null,xt=null,I=T,ct=T=0,pt=null;I!==null&&ct<M.length;ct++){I.index>ct?(pt=I,I=null):pt=I.sibling;var bt=E(A,I,M[ct],_);if(bt===null){I===null&&(I=pt);break}t&&I&&bt.alternate===null&&e(A,I),T=c(bt,T,ct),xt===null?et=bt:xt.sibling=bt,xt=bt,I=pt}if(ct===M.length)return a(A,I),gt&&na(A,ct),et;if(I===null){for(;ct<M.length;ct++)I=V(A,M[ct],_),I!==null&&(T=c(I,T,ct),xt===null?et=I:xt.sibling=I,xt=I);return gt&&na(A,ct),et}for(I=i(I);ct<M.length;ct++)pt=D(I,A,ct,M[ct],_),pt!==null&&(t&&pt.alternate!==null&&I.delete(pt.key===null?ct:pt.key),T=c(pt,T,ct),xt===null?et=pt:xt.sibling=pt,xt=pt);return t&&I.forEach(function(Xa){return e(A,Xa)}),gt&&na(A,ct),et}function at(A,T,M,_){if(M==null)throw Error(o(151));for(var et=null,xt=null,I=T,ct=T=0,pt=null,bt=M.next();I!==null&&!bt.done;ct++,bt=M.next()){I.index>ct?(pt=I,I=null):pt=I.sibling;var Xa=E(A,I,bt.value,_);if(Xa===null){I===null&&(I=pt);break}t&&I&&Xa.alternate===null&&e(A,I),T=c(Xa,T,ct),xt===null?et=Xa:xt.sibling=Xa,xt=Xa,I=pt}if(bt.done)return a(A,I),gt&&na(A,ct),et;if(I===null){for(;!bt.done;ct++,bt=M.next())bt=V(A,bt.value,_),bt!==null&&(T=c(bt,T,ct),xt===null?et=bt:xt.sibling=bt,xt=bt);return gt&&na(A,ct),et}for(I=i(I);!bt.done;ct++,bt=M.next())bt=D(I,A,ct,bt.value,_),bt!==null&&(t&&bt.alternate!==null&&I.delete(bt.key===null?ct:bt.key),T=c(bt,T,ct),xt===null?et=bt:xt.sibling=bt,xt=bt);return t&&I.forEach(function(P5){return e(A,P5)}),gt&&na(A,ct),et}function At(A,T,M,_){if(typeof M=="object"&&M!==null&&M.type===L&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case k:t:{for(var et=M.key;T!==null;){if(T.key===et){if(et=M.type,et===L){if(T.tag===7){a(A,T.sibling),_=s(T,M.props.children),_.return=A,A=_;break t}}else if(T.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===P&&oi(et)===T.type){a(A,T.sibling),_=s(T,M.props),Vn(_,M),_.return=A,A=_;break t}a(A,T);break}else e(A,T);T=T.sibling}M.type===L?(_=ii(M.props.children,A.mode,_,M.key),_.return=A,A=_):(_=Jl(M.type,M.key,M.props,null,A.mode,_),Vn(_,M),_.return=A,A=_)}return d(A);case B:t:{for(et=M.key;T!==null;){if(T.key===et)if(T.tag===4&&T.stateNode.containerInfo===M.containerInfo&&T.stateNode.implementation===M.implementation){a(A,T.sibling),_=s(T,M.children||[]),_.return=A,A=_;break t}else{a(A,T);break}else e(A,T);T=T.sibling}_=Fr(M,A.mode,_),_.return=A,A=_}return d(A);case P:return M=oi(M),At(A,T,M,_)}if(ce(M))return Z(A,T,M,_);if(qt(M)){if(et=qt(M),typeof et!="function")throw Error(o(150));return M=et.call(M),at(A,T,M,_)}if(typeof M.then=="function")return At(A,T,es(M),_);if(M.$$typeof===R)return At(A,T,$l(A,M),_);as(A,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,T!==null&&T.tag===6?(a(A,T.sibling),_=s(T,M),_.return=A,A=_):(a(A,T),_=Jr(M,A.mode,_),_.return=A,A=_),d(A)):a(A,T)}return function(A,T,M,_){try{Rn=0;var et=At(A,T,M,_);return qi=null,et}catch(I){if(I===Li||I===Il)throw I;var xt=Se(29,I,null,A.mode);return xt.lanes=_,xt.return=A,xt}}}var ui=Sd(!0),jd=Sd(!1),Ma=!1;function ro(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oo(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ea(t,e,a){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(vt&2)!==0){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,e=Zl(t),ld(t,null,a),e}return Kl(t,i,e,a),Zl(t)}function Un(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,hf(t,a)}}function co(t,e){var a=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var s=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?s=c=d:c=c.next=d,a=a.next}while(a!==null);c===null?s=c=e:c=c.next=e}else s=c=e;a={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var uo=!1;function Bn(){if(uo){var t=Hi;if(t!==null)throw t}}function Hn(t,e,a,i){uo=!1;var s=t.updateQueue;Ma=!1;var c=s.firstBaseUpdate,d=s.lastBaseUpdate,p=s.shared.pending;if(p!==null){s.shared.pending=null;var S=p,z=S.next;S.next=null,d===null?c=z:d.next=z,d=S;var C=t.alternate;C!==null&&(C=C.updateQueue,p=C.lastBaseUpdate,p!==d&&(p===null?C.firstBaseUpdate=z:p.next=z,C.lastBaseUpdate=S))}if(c!==null){var V=s.baseState;d=0,C=z=S=null,p=c;do{var E=p.lane&-536870913,D=E!==p.lane;if(D?(mt&E)===E:(i&E)===E){E!==0&&E===Bi&&(uo=!0),C!==null&&(C=C.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});t:{var Z=t,at=p;E=e;var At=a;switch(at.tag){case 1:if(Z=at.payload,typeof Z=="function"){V=Z.call(At,V,E);break t}V=Z;break t;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=at.payload,E=typeof Z=="function"?Z.call(At,V,E):Z,E==null)break t;V=v({},V,E);break t;case 2:Ma=!0}}E=p.callback,E!==null&&(t.flags|=64,D&&(t.flags|=8192),D=s.callbacks,D===null?s.callbacks=[E]:D.push(E))}else D={lane:E,tag:p.tag,payload:p.payload,callback:p.callback,next:null},C===null?(z=C=D,S=V):C=C.next=D,d|=E;if(p=p.next,p===null){if(p=s.shared.pending,p===null)break;D=p,p=D.next,D.next=null,s.lastBaseUpdate=D,s.shared.pending=null}}while(!0);C===null&&(S=V),s.baseState=S,s.firstBaseUpdate=z,s.lastBaseUpdate=C,c===null&&(s.shared.lanes=0),_a|=d,t.lanes=d,t.memoizedState=V}}function Td(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function Nd(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Td(a[t],e)}var Gi=N(null),is=N(0);function wd(t,e){t=pa,X(is,t),X(Gi,e),pa=t|e.baseLanes}function fo(){X(is,pa),X(Gi,Gi.current)}function ho(){pa=is.current,U(Gi),U(is)}var je=N(null),Ve=null;function Da(t){var e=t.alternate;X(Ht,Ht.current&1),X(je,t),Ve===null&&(e===null||Gi.current!==null||e.memoizedState!==null)&&(Ve=t)}function mo(t){X(Ht,Ht.current),X(je,t),Ve===null&&(Ve=t)}function Ad(t){t.tag===22?(X(Ht,Ht.current),X(je,t),Ve===null&&(Ve=t)):Ca()}function Ca(){X(Ht,Ht.current),X(je,je.current)}function Te(t){U(je),Ve===t&&(Ve=null),U(Ht)}var Ht=N(0);function ns(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vc(a)||Sc(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ra=0,ot=null,Nt=null,Yt=null,ls=!1,Yi=!1,fi=!1,ss=0,Ln=0,Xi=null,L1=0;function _t(){throw Error(o(321))}function po(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ve(t[a],e[a]))return!1;return!0}function go(t,e,a,i,s,c){return ra=c,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,O.H=t===null||t.memoizedState===null?ch:Co,fi=!1,c=a(i,s),fi=!1,Yi&&(c=zd(e,a,i,s)),Md(t),c}function Md(t){O.H=Yn;var e=Nt!==null&&Nt.next!==null;if(ra=0,Yt=Nt=ot=null,ls=!1,Ln=0,Xi=null,e)throw Error(o(300));t===null||Xt||(t=t.dependencies,t!==null&&Pl(t)&&(Xt=!0))}function zd(t,e,a,i){ot=t;var s=0;do{if(Yi&&(Xi=null),Ln=0,Yi=!1,25<=s)throw Error(o(301));if(s+=1,Yt=Nt=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}O.H=uh,c=e(a,i)}while(Yi);return c}function q1(){var t=O.H,e=t.useState()[0];return e=typeof e.then=="function"?qn(e):e,t=t.useState()[0],(Nt!==null?Nt.memoizedState:null)!==t&&(ot.flags|=1024),e}function yo(){var t=ss!==0;return ss=0,t}function xo(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function bo(t){if(ls){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ls=!1}ra=0,Yt=Nt=ot=null,Yi=!1,Ln=ss=0,Xi=null}function se(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?ot.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function Lt(){if(Nt===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Yt===null?ot.memoizedState:Yt.next;if(e!==null)Yt=e,Nt=t;else{if(t===null)throw ot.alternate===null?Error(o(467)):Error(o(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Yt===null?ot.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function rs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qn(t){var e=Ln;return Ln+=1,Xi===null&&(Xi=[]),t=xd(Xi,t,e),e=ot,(Yt===null?e.memoizedState:Yt.next)===null&&(e=e.alternate,O.H=e===null||e.memoizedState===null?ch:Co),t}function os(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return qn(t);if(t.$$typeof===R)return It(t)}throw Error(o(438,String(t)))}function vo(t){var e=null,a=ot.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var i=ot.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=rs(),ot.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),i=0;i<t;i++)a[i]=zt;return e.index++,a}function oa(t,e){return typeof e=="function"?e(t):e}function cs(t){var e=Lt();return So(e,Nt,t)}function So(t,e,a){var i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=a;var s=t.baseQueue,c=i.pending;if(c!==null){if(s!==null){var d=s.next;s.next=c.next,c.next=d}e.baseQueue=s=c,i.pending=null}if(c=t.baseState,s===null)t.memoizedState=c;else{e=s.next;var p=d=null,S=null,z=e,C=!1;do{var V=z.lane&-536870913;if(V!==z.lane?(mt&V)===V:(ra&V)===V){var E=z.revertLane;if(E===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),V===Bi&&(C=!0);else if((ra&E)===E){z=z.next,E===Bi&&(C=!0);continue}else V={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(p=S=V,d=c):S=S.next=V,ot.lanes|=E,_a|=E;V=z.action,fi&&a(c,V),c=z.hasEagerState?z.eagerState:a(c,V)}else E={lane:V,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(p=S=E,d=c):S=S.next=E,ot.lanes|=V,_a|=V;z=z.next}while(z!==null&&z!==e);if(S===null?d=c:S.next=p,!ve(c,t.memoizedState)&&(Xt=!0,C&&(a=Hi,a!==null)))throw a;t.memoizedState=c,t.baseState=d,t.baseQueue=S,i.lastRenderedState=c}return s===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function jo(t){var e=Lt(),a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var i=a.dispatch,s=a.pending,c=e.memoizedState;if(s!==null){a.pending=null;var d=s=s.next;do c=t(c,d.action),d=d.next;while(d!==s);ve(c,e.memoizedState)||(Xt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),a.lastRenderedState=c}return[c,i]}function Ed(t,e,a){var i=ot,s=Lt(),c=gt;if(c){if(a===void 0)throw Error(o(407));a=a()}else a=e();var d=!ve((Nt||s).memoizedState,a);if(d&&(s.memoizedState=a,Xt=!0),s=s.queue,wo(kd.bind(null,i,s,t),[t]),s.getSnapshot!==e||d||Yt!==null&&Yt.memoizedState.tag&1){if(i.flags|=2048,Qi(9,{destroy:void 0},Cd.bind(null,i,s,a,e),null),Mt===null)throw Error(o(349));c||(ra&127)!==0||Dd(i,e,a)}return a}function Dd(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ot.updateQueue,e===null?(e=rs(),ot.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Cd(t,e,a,i){e.value=a,e.getSnapshot=i,Od(e)&&_d(t)}function kd(t,e,a){return a(function(){Od(e)&&_d(t)})}function Od(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ve(t,a)}catch{return!0}}function _d(t){var e=ai(t,2);e!==null&&ge(e,t,2)}function To(t){var e=se();if(typeof t=="function"){var a=t;if(t=a(),fi){va(!0);try{a()}finally{va(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},e}function Rd(t,e,a,i){return t.baseState=a,So(t,Nt,typeof i=="function"?i:oa)}function G1(t,e,a,i,s){if(ds(t))throw Error(o(485));if(t=e.action,t!==null){var c={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};O.T!==null?a(!0):c.isTransition=!1,i(c),a=e.pending,a===null?(c.next=e.pending=c,Vd(e,c)):(c.next=a.next,e.pending=a.next=c)}}function Vd(t,e){var a=e.action,i=e.payload,s=t.state;if(e.isTransition){var c=O.T,d={};O.T=d;try{var p=a(s,i),S=O.S;S!==null&&S(d,p),Ud(t,e,p)}catch(z){No(t,e,z)}finally{c!==null&&d.types!==null&&(c.types=d.types),O.T=c}}else try{c=a(s,i),Ud(t,e,c)}catch(z){No(t,e,z)}}function Ud(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){Bd(t,e,i)},function(i){return No(t,e,i)}):Bd(t,e,a)}function Bd(t,e,a){e.status="fulfilled",e.value=a,Hd(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Vd(t,a)))}function No(t,e,a){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=a,Hd(e),e=e.next;while(e!==i)}t.action=null}function Hd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ld(t,e){return e}function qd(t,e){if(gt){var a=Mt.formState;if(a!==null){t:{var i=ot;if(gt){if(Et){e:{for(var s=Et,c=Re;s.nodeType!==8;){if(!c){s=null;break e}if(s=Ue(s.nextSibling),s===null){s=null;break e}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){Et=Ue(s.nextSibling),i=s.data==="F!";break t}}wa(i)}i=!1}i&&(e=a[0])}}return a=se(),a.memoizedState=a.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ld,lastRenderedState:e},a.queue=i,a=sh.bind(null,ot,i),i.dispatch=a,i=To(!1),c=Do.bind(null,ot,!1,i.queue),i=se(),s={state:e,dispatch:null,action:t,pending:null},i.queue=s,a=G1.bind(null,ot,s,c,a),s.dispatch=a,i.memoizedState=t,[e,a,!1]}function Gd(t){var e=Lt();return Yd(e,Nt,t)}function Yd(t,e,a){if(e=So(t,e,Ld)[0],t=cs(oa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=qn(e)}catch(d){throw d===Li?Il:d}else i=e;e=Lt();var s=e.queue,c=s.dispatch;return a!==e.memoizedState&&(ot.flags|=2048,Qi(9,{destroy:void 0},Y1.bind(null,s,a),null)),[i,c,t]}function Y1(t,e){t.action=e}function Xd(t){var e=Lt(),a=Nt;if(a!==null)return Yd(e,a,t);Lt(),e=e.memoizedState,a=Lt();var i=a.queue.dispatch;return a.memoizedState=t,[e,i,!1]}function Qi(t,e,a,i){return t={tag:t,create:a,deps:i,inst:e,next:null},e=ot.updateQueue,e===null&&(e=rs(),ot.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(i=a.next,a.next=t,t.next=i,e.lastEffect=t),t}function Qd(){return Lt().memoizedState}function us(t,e,a,i){var s=se();ot.flags|=t,s.memoizedState=Qi(1|e,{destroy:void 0},a,i===void 0?null:i)}function fs(t,e,a,i){var s=Lt();i=i===void 0?null:i;var c=s.memoizedState.inst;Nt!==null&&i!==null&&po(i,Nt.memoizedState.deps)?s.memoizedState=Qi(e,c,a,i):(ot.flags|=t,s.memoizedState=Qi(1|e,c,a,i))}function Kd(t,e){us(8390656,8,t,e)}function wo(t,e){fs(2048,8,t,e)}function X1(t){ot.flags|=4;var e=ot.updateQueue;if(e===null)e=rs(),ot.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function Zd(t){var e=Lt().memoizedState;return X1({ref:e,nextImpl:t}),function(){if((vt&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function Jd(t,e){return fs(4,2,t,e)}function Fd(t,e){return fs(4,4,t,e)}function Pd(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $d(t,e,a){a=a!=null?a.concat([t]):null,fs(4,4,Pd.bind(null,e,t),a)}function Ao(){}function Wd(t,e){var a=Lt();e=e===void 0?null:e;var i=a.memoizedState;return e!==null&&po(e,i[1])?i[0]:(a.memoizedState=[t,e],t)}function Id(t,e){var a=Lt();e=e===void 0?null:e;var i=a.memoizedState;if(e!==null&&po(e,i[1]))return i[0];if(i=t(),fi){va(!0);try{t()}finally{va(!1)}}return a.memoizedState=[i,e],i}function Mo(t,e,a){return a===void 0||(ra&1073741824)!==0&&(mt&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=tm(),ot.lanes|=t,_a|=t,a)}function th(t,e,a,i){return ve(a,e)?a:Gi.current!==null?(t=Mo(t,a,i),ve(t,e)||(Xt=!0),t):(ra&42)===0||(ra&1073741824)!==0&&(mt&261930)===0?(Xt=!0,t.memoizedState=a):(t=tm(),ot.lanes|=t,_a|=t,e)}function eh(t,e,a,i,s){var c=H.p;H.p=c!==0&&8>c?c:8;var d=O.T,p={};O.T=p,Do(t,!1,e,a);try{var S=s(),z=O.S;if(z!==null&&z(p,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var C=H1(S,i);Gn(t,e,C,Ae(t))}else Gn(t,e,i,Ae(t))}catch(V){Gn(t,e,{then:function(){},status:"rejected",reason:V},Ae())}finally{H.p=c,d!==null&&p.types!==null&&(d.types=p.types),O.T=d}}function Q1(){}function zo(t,e,a,i){if(t.tag!==5)throw Error(o(476));var s=ah(t).queue;eh(t,s,e,W,a===null?Q1:function(){return ih(t),a(i)})}function ah(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:W},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ih(t){var e=ah(t);e.next===null&&(e=t.alternate.memoizedState),Gn(t,e.next.queue,{},Ae())}function Eo(){return It(ll)}function nh(){return Lt().memoizedState}function lh(){return Lt().memoizedState}function K1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Ae();t=za(a);var i=Ea(e,t,a);i!==null&&(ge(i,e,a),Un(i,e,a)),e={cache:io()},t.payload=e;return}e=e.return}}function Z1(t,e,a){var i=Ae();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ds(t)?rh(e,a):(a=Kr(t,e,a,i),a!==null&&(ge(a,t,i),oh(a,e,i)))}function sh(t,e,a){var i=Ae();Gn(t,e,a,i)}function Gn(t,e,a,i){var s={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ds(t))rh(e,s);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var d=e.lastRenderedState,p=c(d,a);if(s.hasEagerState=!0,s.eagerState=p,ve(p,d))return Kl(t,e,s,0),Mt===null&&Ql(),!1}catch{}if(a=Kr(t,e,s,i),a!==null)return ge(a,t,i),oh(a,e,i),!0}return!1}function Do(t,e,a,i){if(i={lane:2,revertLane:oc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ds(t)){if(e)throw Error(o(479))}else e=Kr(t,a,i,2),e!==null&&ge(e,t,2)}function ds(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function rh(t,e){Yi=ls=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function oh(t,e,a){if((a&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,hf(t,a)}}var Yn={readContext:It,use:os,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t};Yn.useEffectEvent=_t;var ch={readContext:It,use:os,useCallback:function(t,e){return se().memoizedState=[t,e===void 0?null:e],t},useContext:It,useEffect:Kd,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,us(4194308,4,Pd.bind(null,e,t),a)},useLayoutEffect:function(t,e){return us(4194308,4,t,e)},useInsertionEffect:function(t,e){us(4,2,t,e)},useMemo:function(t,e){var a=se();e=e===void 0?null:e;var i=t();if(fi){va(!0);try{t()}finally{va(!1)}}return a.memoizedState=[i,e],i},useReducer:function(t,e,a){var i=se();if(a!==void 0){var s=a(e);if(fi){va(!0);try{a(e)}finally{va(!1)}}}else s=e;return i.memoizedState=i.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},i.queue=t,t=t.dispatch=Z1.bind(null,ot,t),[i.memoizedState,t]},useRef:function(t){var e=se();return t={current:t},e.memoizedState=t},useState:function(t){t=To(t);var e=t.queue,a=sh.bind(null,ot,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Ao,useDeferredValue:function(t,e){var a=se();return Mo(a,t,e)},useTransition:function(){var t=To(!1);return t=eh.bind(null,ot,t.queue,!0,!1),se().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var i=ot,s=se();if(gt){if(a===void 0)throw Error(o(407));a=a()}else{if(a=e(),Mt===null)throw Error(o(349));(mt&127)!==0||Dd(i,e,a)}s.memoizedState=a;var c={value:a,getSnapshot:e};return s.queue=c,Kd(kd.bind(null,i,c,t),[t]),i.flags|=2048,Qi(9,{destroy:void 0},Cd.bind(null,i,c,a,e),null),a},useId:function(){var t=se(),e=Mt.identifierPrefix;if(gt){var a=Fe,i=Je;a=(i&~(1<<32-be(i)-1)).toString(32)+a,e="_"+e+"R_"+a,a=ss++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=L1++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Eo,useFormState:qd,useActionState:qd,useOptimistic:function(t){var e=se();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Do.bind(null,ot,!0,a),a.dispatch=e,[t,e]},useMemoCache:vo,useCacheRefresh:function(){return se().memoizedState=K1.bind(null,ot)},useEffectEvent:function(t){var e=se(),a={impl:t};return e.memoizedState=a,function(){if((vt&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Co={readContext:It,use:os,useCallback:Wd,useContext:It,useEffect:wo,useImperativeHandle:$d,useInsertionEffect:Jd,useLayoutEffect:Fd,useMemo:Id,useReducer:cs,useRef:Qd,useState:function(){return cs(oa)},useDebugValue:Ao,useDeferredValue:function(t,e){var a=Lt();return th(a,Nt.memoizedState,t,e)},useTransition:function(){var t=cs(oa)[0],e=Lt().memoizedState;return[typeof t=="boolean"?t:qn(t),e]},useSyncExternalStore:Ed,useId:nh,useHostTransitionStatus:Eo,useFormState:Gd,useActionState:Gd,useOptimistic:function(t,e){var a=Lt();return Rd(a,Nt,t,e)},useMemoCache:vo,useCacheRefresh:lh};Co.useEffectEvent=Zd;var uh={readContext:It,use:os,useCallback:Wd,useContext:It,useEffect:wo,useImperativeHandle:$d,useInsertionEffect:Jd,useLayoutEffect:Fd,useMemo:Id,useReducer:jo,useRef:Qd,useState:function(){return jo(oa)},useDebugValue:Ao,useDeferredValue:function(t,e){var a=Lt();return Nt===null?Mo(a,t,e):th(a,Nt.memoizedState,t,e)},useTransition:function(){var t=jo(oa)[0],e=Lt().memoizedState;return[typeof t=="boolean"?t:qn(t),e]},useSyncExternalStore:Ed,useId:nh,useHostTransitionStatus:Eo,useFormState:Xd,useActionState:Xd,useOptimistic:function(t,e){var a=Lt();return Nt!==null?Rd(a,Nt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:vo,useCacheRefresh:lh};uh.useEffectEvent=Zd;function ko(t,e,a,i){e=t.memoizedState,a=a(i,e),a=a==null?e:v({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Oo={enqueueSetState:function(t,e,a){t=t._reactInternals;var i=Ae(),s=za(i);s.payload=e,a!=null&&(s.callback=a),e=Ea(t,s,i),e!==null&&(ge(e,t,i),Un(e,t,i))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var i=Ae(),s=za(i);s.tag=1,s.payload=e,a!=null&&(s.callback=a),e=Ea(t,s,i),e!==null&&(ge(e,t,i),Un(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Ae(),i=za(a);i.tag=2,e!=null&&(i.callback=e),e=Ea(t,i,a),e!==null&&(ge(e,t,a),Un(e,t,a))}};function fh(t,e,a,i,s,c,d){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,c,d):e.prototype&&e.prototype.isPureReactComponent?!En(a,i)||!En(s,c):!0}function dh(t,e,a,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,i),e.state!==t&&Oo.enqueueReplaceState(e,e.state,null)}function di(t,e){var a=e;if("ref"in e){a={};for(var i in e)i!=="ref"&&(a[i]=e[i])}if(t=t.defaultProps){a===e&&(a=v({},a));for(var s in t)a[s]===void 0&&(a[s]=t[s])}return a}function hh(t){Xl(t)}function mh(t){console.error(t)}function ph(t){Xl(t)}function hs(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function gh(t,e,a){try{var i=t.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function _o(t,e,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){hs(t,e)},a}function yh(t){return t=za(t),t.tag=3,t}function xh(t,e,a,i){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var c=i.value;t.payload=function(){return s(c)},t.callback=function(){gh(e,a,i)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(t.callback=function(){gh(e,a,i),typeof s!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var p=i.stack;this.componentDidCatch(i.value,{componentStack:p!==null?p:""})})}function J1(t,e,a,i,s){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=a.alternate,e!==null&&Ui(e,a,s,!0),a=je.current,a!==null){switch(a.tag){case 31:case 13:return Ve===null?ws():a.alternate===null&&Rt===0&&(Rt=3),a.flags&=-257,a.flags|=65536,a.lanes=s,i===ts?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([i]):e.add(i),lc(t,i,s)),!1;case 22:return a.flags|=65536,i===ts?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([i]):a.add(i)),lc(t,i,s)),!1}throw Error(o(435,a.tag))}return lc(t,i,s),ws(),!1}if(gt)return e=je.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,i!==Wr&&(t=Error(o(422),{cause:i}),kn(ke(t,a)))):(i!==Wr&&(e=Error(o(423),{cause:i}),kn(ke(e,a))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,i=ke(i,a),s=_o(t.stateNode,i,s),co(t,s),Rt!==4&&(Rt=2)),!1;var c=Error(o(520),{cause:i});if(c=ke(c,a),$n===null?$n=[c]:$n.push(c),Rt!==4&&(Rt=2),e===null)return!0;i=ke(i,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=s&-s,a.lanes|=t,t=_o(a.stateNode,i,t),co(a,t),!1;case 1:if(e=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ra===null||!Ra.has(c))))return a.flags|=65536,s&=-s,a.lanes|=s,s=yh(s),xh(s,t,a,i),co(a,s),!1}a=a.return}while(a!==null);return!1}var Ro=Error(o(461)),Xt=!1;function te(t,e,a,i){e.child=t===null?jd(e,null,a,i):ui(e,t.child,a,i)}function bh(t,e,a,i,s){a=a.render;var c=e.ref;if("ref"in i){var d={};for(var p in i)p!=="ref"&&(d[p]=i[p])}else d=i;return si(e),i=go(t,e,a,d,c,s),p=yo(),t!==null&&!Xt?(xo(t,e,s),ca(t,e,s)):(gt&&p&&Pr(e),e.flags|=1,te(t,e,i,s),e.child)}function vh(t,e,a,i,s){if(t===null){var c=a.type;return typeof c=="function"&&!Zr(c)&&c.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=c,Sh(t,e,c,i,s)):(t=Jl(a.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Yo(t,s)){var d=c.memoizedProps;if(a=a.compare,a=a!==null?a:En,a(d,i)&&t.ref===e.ref)return ca(t,e,s)}return e.flags|=1,t=ia(c,i),t.ref=e.ref,t.return=e,e.child=t}function Sh(t,e,a,i,s){if(t!==null){var c=t.memoizedProps;if(En(c,i)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=i=c,Yo(t,s))(t.flags&131072)!==0&&(Xt=!0);else return e.lanes=t.lanes,ca(t,e,s)}return Vo(t,e,a,i,s)}function jh(t,e,a,i){var s=i.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(i=e.child=t.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~c}else i=0,e.child=null;return Th(t,e,c,a,i)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wl(e,c!==null?c.cachePool:null),c!==null?wd(e,c):fo(),Ad(e);else return i=e.lanes=536870912,Th(t,e,c!==null?c.baseLanes|a:a,a,i)}else c!==null?(Wl(e,c.cachePool),wd(e,c),Ca(),e.memoizedState=null):(t!==null&&Wl(e,null),fo(),Ca());return te(t,e,s,a),e.child}function Xn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Th(t,e,a,i,s){var c=lo();return c=c===null?null:{parent:Gt._currentValue,pool:c},e.memoizedState={baseLanes:a,cachePool:c},t!==null&&Wl(e,null),fo(),Ad(e),t!==null&&Ui(t,e,i,!0),e.childLanes=s,null}function ms(t,e){return e=gs({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Nh(t,e,a){return ui(e,t.child,null,a),t=ms(e,e.pendingProps),t.flags|=2,Te(e),e.memoizedState=null,t}function F1(t,e,a){var i=e.pendingProps,s=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(gt){if(i.mode==="hidden")return t=ms(e,i),e.lanes=536870912,Xn(null,t);if(mo(e),(t=Et)?(t=Vm(t,Re),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Je,overflow:Fe}:null,retryLane:536870912,hydrationErrors:null},a=rd(t),a.return=e,e.child=a,Wt=e,Et=null)):t=null,t===null)throw wa(e);return e.lanes=536870912,null}return ms(e,i)}var c=t.memoizedState;if(c!==null){var d=c.dehydrated;if(mo(e),s)if(e.flags&256)e.flags&=-257,e=Nh(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(Xt||Ui(t,e,a,!1),s=(a&t.childLanes)!==0,Xt||s){if(i=Mt,i!==null&&(d=mf(i,a),d!==0&&d!==c.retryLane))throw c.retryLane=d,ai(t,d),ge(i,t,d),Ro;ws(),e=Nh(t,e,a)}else t=c.treeContext,Et=Ue(d.nextSibling),Wt=e,gt=!0,Na=null,Re=!1,t!==null&&ud(e,t),e=ms(e,i),e.flags|=4096;return e}return t=ia(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ps(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Vo(t,e,a,i,s){return si(e),a=go(t,e,a,i,void 0,s),i=yo(),t!==null&&!Xt?(xo(t,e,s),ca(t,e,s)):(gt&&i&&Pr(e),e.flags|=1,te(t,e,a,s),e.child)}function wh(t,e,a,i,s,c){return si(e),e.updateQueue=null,a=zd(e,i,a,s),Md(t),i=yo(),t!==null&&!Xt?(xo(t,e,c),ca(t,e,c)):(gt&&i&&Pr(e),e.flags|=1,te(t,e,a,c),e.child)}function Ah(t,e,a,i,s){if(si(e),e.stateNode===null){var c=Oi,d=a.contextType;typeof d=="object"&&d!==null&&(c=It(d)),c=new a(i,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Oo,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=i,c.state=e.memoizedState,c.refs={},ro(e),d=a.contextType,c.context=typeof d=="object"&&d!==null?It(d):Oi,c.state=e.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(ko(e,a,d,i),c.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&Oo.enqueueReplaceState(c,c.state,null),Hn(e,i,c,s),Bn(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){c=e.stateNode;var p=e.memoizedProps,S=di(a,p);c.props=S;var z=c.context,C=a.contextType;d=Oi,typeof C=="object"&&C!==null&&(d=It(C));var V=a.getDerivedStateFromProps;C=typeof V=="function"||typeof c.getSnapshotBeforeUpdate=="function",p=e.pendingProps!==p,C||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p||z!==d)&&dh(e,c,i,d),Ma=!1;var E=e.memoizedState;c.state=E,Hn(e,i,c,s),Bn(),z=e.memoizedState,p||E!==z||Ma?(typeof V=="function"&&(ko(e,a,V,i),z=e.memoizedState),(S=Ma||fh(e,a,S,i,E,z,d))?(C||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=z),c.props=i,c.state=z,c.context=d,i=S):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{c=e.stateNode,oo(t,e),d=e.memoizedProps,C=di(a,d),c.props=C,V=e.pendingProps,E=c.context,z=a.contextType,S=Oi,typeof z=="object"&&z!==null&&(S=It(z)),p=a.getDerivedStateFromProps,(z=typeof p=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==V||E!==S)&&dh(e,c,i,S),Ma=!1,E=e.memoizedState,c.state=E,Hn(e,i,c,s),Bn();var D=e.memoizedState;d!==V||E!==D||Ma||t!==null&&t.dependencies!==null&&Pl(t.dependencies)?(typeof p=="function"&&(ko(e,a,p,i),D=e.memoizedState),(C=Ma||fh(e,a,C,i,E,D,S)||t!==null&&t.dependencies!==null&&Pl(t.dependencies))?(z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,D,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,D,S)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=D),c.props=i,c.state=D,c.context=S,i=C):(typeof c.componentDidUpdate!="function"||d===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),i=!1)}return c=i,ps(t,e),i=(e.flags&128)!==0,c||i?(c=e.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&i?(e.child=ui(e,t.child,null,s),e.child=ui(e,null,a,s)):te(t,e,a,s),e.memoizedState=c.state,t=e.child):t=ca(t,e,s),t}function Mh(t,e,a,i){return ni(),e.flags|=256,te(t,e,a,i),e.child}var Uo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bo(t){return{baseLanes:t,cachePool:gd()}}function Ho(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=we),t}function zh(t,e,a){var i=e.pendingProps,s=!1,c=(e.flags&128)!==0,d;if((d=c)||(d=t!==null&&t.memoizedState===null?!1:(Ht.current&2)!==0),d&&(s=!0,e.flags&=-129),d=(e.flags&32)!==0,e.flags&=-33,t===null){if(gt){if(s?Da(e):Ca(),(t=Et)?(t=Vm(t,Re),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Je,overflow:Fe}:null,retryLane:536870912,hydrationErrors:null},a=rd(t),a.return=e,e.child=a,Wt=e,Et=null)):t=null,t===null)throw wa(e);return Sc(t)?e.lanes=32:e.lanes=536870912,null}var p=i.children;return i=i.fallback,s?(Ca(),s=e.mode,p=gs({mode:"hidden",children:p},s),i=ii(i,s,a,null),p.return=e,i.return=e,p.sibling=i,e.child=p,i=e.child,i.memoizedState=Bo(a),i.childLanes=Ho(t,d,a),e.memoizedState=Uo,Xn(null,i)):(Da(e),Lo(e,p))}var S=t.memoizedState;if(S!==null&&(p=S.dehydrated,p!==null)){if(c)e.flags&256?(Da(e),e.flags&=-257,e=qo(t,e,a)):e.memoizedState!==null?(Ca(),e.child=t.child,e.flags|=128,e=null):(Ca(),p=i.fallback,s=e.mode,i=gs({mode:"visible",children:i.children},s),p=ii(p,s,a,null),p.flags|=2,i.return=e,p.return=e,i.sibling=p,e.child=i,ui(e,t.child,null,a),i=e.child,i.memoizedState=Bo(a),i.childLanes=Ho(t,d,a),e.memoizedState=Uo,e=Xn(null,i));else if(Da(e),Sc(p)){if(d=p.nextSibling&&p.nextSibling.dataset,d)var z=d.dgst;d=z,i=Error(o(419)),i.stack="",i.digest=d,kn({value:i,source:null,stack:null}),e=qo(t,e,a)}else if(Xt||Ui(t,e,a,!1),d=(a&t.childLanes)!==0,Xt||d){if(d=Mt,d!==null&&(i=mf(d,a),i!==0&&i!==S.retryLane))throw S.retryLane=i,ai(t,i),ge(d,t,i),Ro;vc(p)||ws(),e=qo(t,e,a)}else vc(p)?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,Et=Ue(p.nextSibling),Wt=e,gt=!0,Na=null,Re=!1,t!==null&&ud(e,t),e=Lo(e,i.children),e.flags|=4096);return e}return s?(Ca(),p=i.fallback,s=e.mode,S=t.child,z=S.sibling,i=ia(S,{mode:"hidden",children:i.children}),i.subtreeFlags=S.subtreeFlags&65011712,z!==null?p=ia(z,p):(p=ii(p,s,a,null),p.flags|=2),p.return=e,i.return=e,i.sibling=p,e.child=i,Xn(null,i),i=e.child,p=t.child.memoizedState,p===null?p=Bo(a):(s=p.cachePool,s!==null?(S=Gt._currentValue,s=s.parent!==S?{parent:S,pool:S}:s):s=gd(),p={baseLanes:p.baseLanes|a,cachePool:s}),i.memoizedState=p,i.childLanes=Ho(t,d,a),e.memoizedState=Uo,Xn(t.child,i)):(Da(e),a=t.child,t=a.sibling,a=ia(a,{mode:"visible",children:i.children}),a.return=e,a.sibling=null,t!==null&&(d=e.deletions,d===null?(e.deletions=[t],e.flags|=16):d.push(t)),e.child=a,e.memoizedState=null,a)}function Lo(t,e){return e=gs({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function gs(t,e){return t=Se(22,t,null,e),t.lanes=0,t}function qo(t,e,a){return ui(e,t.child,null,a),t=Lo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Eh(t,e,a){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),eo(t.return,e,a)}function Go(t,e,a,i,s,c){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:s,treeForkCount:c}:(d.isBackwards=e,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=a,d.tailMode=s,d.treeForkCount=c)}function Dh(t,e,a){var i=e.pendingProps,s=i.revealOrder,c=i.tail;i=i.children;var d=Ht.current,p=(d&2)!==0;if(p?(d=d&1|2,e.flags|=128):d&=1,X(Ht,d),te(t,e,i,a),i=gt?Cn:0,!p&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eh(t,a,e);else if(t.tag===19)Eh(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(s){case"forwards":for(a=e.child,s=null;a!==null;)t=a.alternate,t!==null&&ns(t)===null&&(s=a),a=a.sibling;a=s,a===null?(s=e.child,e.child=null):(s=a.sibling,a.sibling=null),Go(e,!1,s,a,c,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ns(t)===null){e.child=s;break}t=s.sibling,s.sibling=a,a=s,s=t}Go(e,!0,a,null,c,i);break;case"together":Go(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function ca(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),_a|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Ui(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,a=ia(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=ia(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Yo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Pl(t)))}function P1(t,e,a){switch(e.tag){case 3:le(e,e.stateNode.containerInfo),Aa(e,Gt,t.memoizedState.cache),ni();break;case 27:case 5:gn(e);break;case 4:le(e,e.stateNode.containerInfo);break;case 10:Aa(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,mo(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Da(e),e.flags|=128,null):(a&e.child.childLanes)!==0?zh(t,e,a):(Da(e),t=ca(t,e,a),t!==null?t.sibling:null);Da(e);break;case 19:var s=(t.flags&128)!==0;if(i=(a&e.childLanes)!==0,i||(Ui(t,e,a,!1),i=(a&e.childLanes)!==0),s){if(i)return Dh(t,e,a);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),X(Ht,Ht.current),i)break;return null;case 22:return e.lanes=0,jh(t,e,a,e.pendingProps);case 24:Aa(e,Gt,t.memoizedState.cache)}return ca(t,e,a)}function Ch(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Xt=!0;else{if(!Yo(t,a)&&(e.flags&128)===0)return Xt=!1,P1(t,e,a);Xt=(t.flags&131072)!==0}else Xt=!1,gt&&(e.flags&1048576)!==0&&cd(e,Cn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=oi(e.elementType),e.type=t,typeof t=="function")Zr(t)?(i=di(t,i),e.tag=1,e=Ah(null,e,t,i,a)):(e.tag=0,e=Vo(null,e,t,i,a));else{if(t!=null){var s=t.$$typeof;if(s===Q){e.tag=11,e=bh(null,e,t,i,a);break t}else if(s===tt){e.tag=14,e=vh(null,e,t,i,a);break t}}throw e=ze(t)||t,Error(o(306,e,""))}}return e;case 0:return Vo(t,e,e.type,e.pendingProps,a);case 1:return i=e.type,s=di(i,e.pendingProps),Ah(t,e,i,s,a);case 3:t:{if(le(e,e.stateNode.containerInfo),t===null)throw Error(o(387));i=e.pendingProps;var c=e.memoizedState;s=c.element,oo(t,e),Hn(e,i,null,a);var d=e.memoizedState;if(i=d.cache,Aa(e,Gt,i),i!==c.cache&&ao(e,[Gt],a,!0),Bn(),i=d.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:d.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Mh(t,e,i,a);break t}else if(i!==s){s=ke(Error(o(424)),e),kn(s),e=Mh(t,e,i,a);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Et=Ue(t.firstChild),Wt=e,gt=!0,Na=null,Re=!0,a=jd(e,null,i,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ni(),i===s){e=ca(t,e,a);break t}te(t,e,i,a)}e=e.child}return e;case 26:return ps(t,e),t===null?(a=Gm(e.type,null,e.pendingProps,null))?e.memoizedState=a:gt||(a=e.type,t=e.pendingProps,i=ks(ut.current).createElement(a),i[$t]=e,i[ue]=t,ee(i,a,t),Ft(i),e.stateNode=i):e.memoizedState=Gm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return gn(e),t===null&&gt&&(i=e.stateNode=Hm(e.type,e.pendingProps,ut.current),Wt=e,Re=!0,s=Et,Ha(e.type)?(jc=s,Et=Ue(i.firstChild)):Et=s),te(t,e,e.pendingProps.children,a),ps(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&gt&&((s=i=Et)&&(i=A5(i,e.type,e.pendingProps,Re),i!==null?(e.stateNode=i,Wt=e,Et=Ue(i.firstChild),Re=!1,s=!0):s=!1),s||wa(e)),gn(e),s=e.type,c=e.pendingProps,d=t!==null?t.memoizedProps:null,i=c.children,yc(s,c)?i=null:d!==null&&yc(s,d)&&(e.flags|=32),e.memoizedState!==null&&(s=go(t,e,q1,null,null,a),ll._currentValue=s),ps(t,e),te(t,e,i,a),e.child;case 6:return t===null&&gt&&((t=a=Et)&&(a=M5(a,e.pendingProps,Re),a!==null?(e.stateNode=a,Wt=e,Et=null,t=!0):t=!1),t||wa(e)),null;case 13:return zh(t,e,a);case 4:return le(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ui(e,null,i,a):te(t,e,i,a),e.child;case 11:return bh(t,e,e.type,e.pendingProps,a);case 7:return te(t,e,e.pendingProps,a),e.child;case 8:return te(t,e,e.pendingProps.children,a),e.child;case 12:return te(t,e,e.pendingProps.children,a),e.child;case 10:return i=e.pendingProps,Aa(e,e.type,i.value),te(t,e,i.children,a),e.child;case 9:return s=e.type._context,i=e.pendingProps.children,si(e),s=It(s),i=i(s),e.flags|=1,te(t,e,i,a),e.child;case 14:return vh(t,e,e.type,e.pendingProps,a);case 15:return Sh(t,e,e.type,e.pendingProps,a);case 19:return Dh(t,e,a);case 31:return F1(t,e,a);case 22:return jh(t,e,a,e.pendingProps);case 24:return si(e),i=It(Gt),t===null?(s=lo(),s===null&&(s=Mt,c=io(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=a),s=c),e.memoizedState={parent:i,cache:s},ro(e),Aa(e,Gt,s)):((t.lanes&a)!==0&&(oo(t,e),Hn(e,null,null,a),Bn()),s=t.memoizedState,c=e.memoizedState,s.parent!==i?(s={parent:i,cache:i},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),Aa(e,Gt,i)):(i=c.cache,Aa(e,Gt,i),i!==s.cache&&ao(e,[Gt],a,!0))),te(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function ua(t){t.flags|=4}function Xo(t,e,a,i,s){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(s&335544128)===s)if(t.stateNode.complete)t.flags|=8192;else if(nm())t.flags|=8192;else throw ci=ts,so}else t.flags&=-16777217}function kh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Zm(e))if(nm())t.flags|=8192;else throw ci=ts,so}function ys(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ff():536870912,t.lanes|=e,Fi|=e)}function Qn(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,i=0;if(e)for(var s=t.child;s!==null;)a|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)a|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=a,e}function $1(t,e,a){var i=e.pendingProps;switch($r(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return Dt(e),null;case 3:return a=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),sa(Gt),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Vi(e)?ua(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ir())),Dt(e),null;case 26:var s=e.type,c=e.memoizedState;return t===null?(ua(e),c!==null?(Dt(e),kh(e,c)):(Dt(e),Xo(e,s,null,i,a))):c?c!==t.memoizedState?(ua(e),Dt(e),kh(e,c)):(Dt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&ua(e),Dt(e),Xo(e,s,t,i,a)),null;case 27:if(zl(e),a=ut.current,s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&ua(e);else{if(!i){if(e.stateNode===null)throw Error(o(166));return Dt(e),null}t=$.current,Vi(e)?fd(e):(t=Hm(s,i,a),e.stateNode=t,ua(e))}return Dt(e),null;case 5:if(zl(e),s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&ua(e);else{if(!i){if(e.stateNode===null)throw Error(o(166));return Dt(e),null}if(c=$.current,Vi(e))fd(e);else{var d=ks(ut.current);switch(c){case 1:c=d.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:c=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":c=d.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":c=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":c=d.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?d.createElement(s,{is:i.is}):d.createElement(s)}}c[$t]=e,c[ue]=i;t:for(d=e.child;d!==null;){if(d.tag===5||d.tag===6)c.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break t;for(;d.sibling===null;){if(d.return===null||d.return===e)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}e.stateNode=c;t:switch(ee(c,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ua(e)}}return Dt(e),Xo(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&ua(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(o(166));if(t=ut.current,Vi(e)){if(t=e.stateNode,a=e.memoizedProps,i=null,s=Wt,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}t[$t]=e,t=!!(t.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||zm(t.nodeValue,a)),t||wa(e,!0)}else t=ks(t).createTextNode(i),t[$t]=e,e.stateNode=t}return Dt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(i=Vi(e),a!==null){if(t===null){if(!i)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[$t]=e}else ni(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Dt(e),t=!1}else a=Ir(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Te(e),e):(Te(e),null);if((e.flags&128)!==0)throw Error(o(558))}return Dt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=Vi(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(o(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[$t]=e}else ni(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else s=Ir(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(Te(e),e):(Te(e),null)}return Te(e),(e.flags&128)!==0?(e.lanes=a,e):(a=i!==null,t=t!==null&&t.memoizedState!==null,a&&(i=e.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==s&&(i.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),ys(e,e.updateQueue),Dt(e),null);case 4:return Bt(),t===null&&dc(e.stateNode.containerInfo),Dt(e),null;case 10:return sa(e.type),Dt(e),null;case 19:if(U(Ht),i=e.memoizedState,i===null)return Dt(e),null;if(s=(e.flags&128)!==0,c=i.rendering,c===null)if(s)Qn(i,!1);else{if(Rt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=ns(t),c!==null){for(e.flags|=128,Qn(i,!1),t=c.updateQueue,e.updateQueue=t,ys(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)sd(a,t),a=a.sibling;return X(Ht,Ht.current&1|2),gt&&na(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&ye()>js&&(e.flags|=128,s=!0,Qn(i,!1),e.lanes=4194304)}else{if(!s)if(t=ns(c),t!==null){if(e.flags|=128,s=!0,t=t.updateQueue,e.updateQueue=t,ys(e,t),Qn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!gt)return Dt(e),null}else 2*ye()-i.renderingStartTime>js&&a!==536870912&&(e.flags|=128,s=!0,Qn(i,!1),e.lanes=4194304);i.isBackwards?(c.sibling=e.child,e.child=c):(t=i.last,t!==null?t.sibling=c:e.child=c,i.last=c)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ye(),t.sibling=null,a=Ht.current,X(Ht,s?a&1|2:a&1),gt&&na(e,i.treeForkCount),t):(Dt(e),null);case 22:case 23:return Te(e),ho(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(a&536870912)!==0&&(e.flags&128)===0&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),a=e.updateQueue,a!==null&&ys(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==a&&(e.flags|=2048),t!==null&&U(ri),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),sa(Gt),Dt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function W1(t,e){switch($r(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sa(Gt),Bt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return zl(e),null;case 31:if(e.memoizedState!==null){if(Te(e),e.alternate===null)throw Error(o(340));ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Te(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return U(Ht),null;case 4:return Bt(),null;case 10:return sa(e.type),null;case 22:case 23:return Te(e),ho(),t!==null&&U(ri),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return sa(Gt),null;case 25:return null;default:return null}}function Oh(t,e){switch($r(e),e.tag){case 3:sa(Gt),Bt();break;case 26:case 27:case 5:zl(e);break;case 4:Bt();break;case 31:e.memoizedState!==null&&Te(e);break;case 13:Te(e);break;case 19:U(Ht);break;case 10:sa(e.type);break;case 22:case 23:Te(e),ho(),t!==null&&U(ri);break;case 24:sa(Gt)}}function Kn(t,e){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&t)===t){i=void 0;var c=a.create,d=a.inst;i=c(),d.destroy=i}a=a.next}while(a!==s)}}catch(p){Tt(e,e.return,p)}}function ka(t,e,a){try{var i=e.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var c=s.next;i=c;do{if((i.tag&t)===t){var d=i.inst,p=d.destroy;if(p!==void 0){d.destroy=void 0,s=e;var S=a,z=p;try{z()}catch(C){Tt(s,S,C)}}}i=i.next}while(i!==c)}}catch(C){Tt(e,e.return,C)}}function _h(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Nd(e,a)}catch(i){Tt(t,t.return,i)}}}function Rh(t,e,a){a.props=di(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(i){Tt(t,e,i)}}function Zn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof a=="function"?t.refCleanup=a(i):a.current=i}}catch(s){Tt(t,e,s)}}function Pe(t,e){var a=t.ref,i=t.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(s){Tt(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){Tt(t,e,s)}else a.current=null}function Vh(t){var e=t.type,a=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break t;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(s){Tt(t,t.return,s)}}function Qo(t,e,a){try{var i=t.stateNode;v5(i,t.type,a,e),i[ue]=e}catch(s){Tt(t,t.return,s)}}function Uh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ha(t.type)||t.tag===4}function Ko(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Uh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ha(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zo(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=ea));else if(i!==4&&(i===27&&Ha(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Zo(t,e,a),t=t.sibling;t!==null;)Zo(t,e,a),t=t.sibling}function xs(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(i!==4&&(i===27&&Ha(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(xs(t,e,a),t=t.sibling;t!==null;)xs(t,e,a),t=t.sibling}function Bh(t){var e=t.stateNode,a=t.memoizedProps;try{for(var i=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ee(e,i,a),e[$t]=t,e[ue]=a}catch(c){Tt(t,t.return,c)}}var fa=!1,Qt=!1,Jo=!1,Hh=typeof WeakSet=="function"?WeakSet:Set,Pt=null;function I1(t,e){if(t=t.containerInfo,pc=Hs,t=$f(t),Lr(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var s=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break t}var d=0,p=-1,S=-1,z=0,C=0,V=t,E=null;e:for(;;){for(var D;V!==a||s!==0&&V.nodeType!==3||(p=d+s),V!==c||i!==0&&V.nodeType!==3||(S=d+i),V.nodeType===3&&(d+=V.nodeValue.length),(D=V.firstChild)!==null;)E=V,V=D;for(;;){if(V===t)break e;if(E===a&&++z===s&&(p=d),E===c&&++C===i&&(S=d),(D=V.nextSibling)!==null)break;V=E,E=V.parentNode}V=D}a=p===-1||S===-1?null:{start:p,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(gc={focusedElem:t,selectionRange:a},Hs=!1,Pt=e;Pt!==null;)if(e=Pt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pt=t;else for(;Pt!==null;){switch(e=Pt,c=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)s=t[a],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,a=e,s=c.memoizedProps,c=c.memoizedState,i=a.stateNode;try{var Z=di(a.type,s);t=i.getSnapshotBeforeUpdate(Z,c),i.__reactInternalSnapshotBeforeUpdate=t}catch(at){Tt(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)bc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,Pt=t;break}Pt=e.return}}function Lh(t,e,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ha(t,a),i&4&&Kn(5,a);break;case 1:if(ha(t,a),i&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(d){Tt(a,a.return,d)}else{var s=di(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(d){Tt(a,a.return,d)}}i&64&&_h(a),i&512&&Zn(a,a.return);break;case 3:if(ha(t,a),i&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Nd(t,e)}catch(d){Tt(a,a.return,d)}}break;case 27:e===null&&i&4&&Bh(a);case 26:case 5:ha(t,a),e===null&&i&4&&Vh(a),i&512&&Zn(a,a.return);break;case 12:ha(t,a);break;case 31:ha(t,a),i&4&&Yh(t,a);break;case 13:ha(t,a),i&4&&Xh(t,a),i&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=o5.bind(null,a),z5(t,a))));break;case 22:if(i=a.memoizedState!==null||fa,!i){e=e!==null&&e.memoizedState!==null||Qt,s=fa;var c=Qt;fa=i,(Qt=e)&&!c?ma(t,a,(a.subtreeFlags&8772)!==0):ha(t,a),fa=s,Qt=c}break;case 30:break;default:ha(t,a)}}function qh(t){var e=t.alternate;e!==null&&(t.alternate=null,qh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Tr(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var kt=null,de=!1;function da(t,e,a){for(a=a.child;a!==null;)Gh(t,e,a),a=a.sibling}function Gh(t,e,a){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(yn,a)}catch{}switch(a.tag){case 26:Qt||Pe(a,e),da(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qt||Pe(a,e);var i=kt,s=de;Ha(a.type)&&(kt=a.stateNode,de=!1),da(t,e,a),al(a.stateNode),kt=i,de=s;break;case 5:Qt||Pe(a,e);case 6:if(i=kt,s=de,kt=null,da(t,e,a),kt=i,de=s,kt!==null)if(de)try{(kt.nodeType===9?kt.body:kt.nodeName==="HTML"?kt.ownerDocument.body:kt).removeChild(a.stateNode)}catch(c){Tt(a,e,c)}else try{kt.removeChild(a.stateNode)}catch(c){Tt(a,e,c)}break;case 18:kt!==null&&(de?(t=kt,_m(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),nn(t)):_m(kt,a.stateNode));break;case 4:i=kt,s=de,kt=a.stateNode.containerInfo,de=!0,da(t,e,a),kt=i,de=s;break;case 0:case 11:case 14:case 15:ka(2,a,e),Qt||ka(4,a,e),da(t,e,a);break;case 1:Qt||(Pe(a,e),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Rh(a,e,i)),da(t,e,a);break;case 21:da(t,e,a);break;case 22:Qt=(i=Qt)||a.memoizedState!==null,da(t,e,a),Qt=i;break;default:da(t,e,a)}}function Yh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{nn(t)}catch(a){Tt(e,e.return,a)}}}function Xh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{nn(t)}catch(a){Tt(e,e.return,a)}}function t5(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Hh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Hh),e;default:throw Error(o(435,t.tag))}}function bs(t,e){var a=t5(t);e.forEach(function(i){if(!a.has(i)){a.add(i);var s=c5.bind(null,t,i);i.then(s,s)}})}function he(t,e){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var s=a[i],c=t,d=e,p=d;t:for(;p!==null;){switch(p.tag){case 27:if(Ha(p.type)){kt=p.stateNode,de=!1;break t}break;case 5:kt=p.stateNode,de=!1;break t;case 3:case 4:kt=p.stateNode.containerInfo,de=!0;break t}p=p.return}if(kt===null)throw Error(o(160));Gh(c,d,s),kt=null,de=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Qh(e,t),e=e.sibling}var Xe=null;function Qh(t,e){var a=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:he(e,t),me(t),i&4&&(ka(3,t,t.return),Kn(3,t),ka(5,t,t.return));break;case 1:he(e,t),me(t),i&512&&(Qt||a===null||Pe(a,a.return)),i&64&&fa&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var s=Xe;if(he(e,t),me(t),i&512&&(Qt||a===null||Pe(a,a.return)),i&4){var c=a!==null?a.memoizedState:null;if(i=t.memoizedState,a===null)if(i===null)if(t.stateNode===null){t:{i=t.type,a=t.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":c=s.getElementsByTagName("title")[0],(!c||c[vn]||c[$t]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(i),s.head.insertBefore(c,s.querySelector("head > title"))),ee(c,i,a),c[$t]=t,Ft(c),i=c;break t;case"link":var d=Qm("link","href",s).get(i+(a.href||""));if(d){for(var p=0;p<d.length;p++)if(c=d[p],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(p,1);break e}}c=s.createElement(i),ee(c,i,a),s.head.appendChild(c);break;case"meta":if(d=Qm("meta","content",s).get(i+(a.content||""))){for(p=0;p<d.length;p++)if(c=d[p],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(p,1);break e}}c=s.createElement(i),ee(c,i,a),s.head.appendChild(c);break;default:throw Error(o(468,i))}c[$t]=t,Ft(c),i=c}t.stateNode=i}else Km(s,t.type,t.stateNode);else t.stateNode=Xm(s,i,t.memoizedProps);else c!==i?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,i===null?Km(s,t.type,t.stateNode):Xm(s,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Qo(t,t.memoizedProps,a.memoizedProps)}break;case 27:he(e,t),me(t),i&512&&(Qt||a===null||Pe(a,a.return)),a!==null&&i&4&&Qo(t,t.memoizedProps,a.memoizedProps);break;case 5:if(he(e,t),me(t),i&512&&(Qt||a===null||Pe(a,a.return)),t.flags&32){s=t.stateNode;try{Ai(s,"")}catch(Z){Tt(t,t.return,Z)}}i&4&&t.stateNode!=null&&(s=t.memoizedProps,Qo(t,s,a!==null?a.memoizedProps:s)),i&1024&&(Jo=!0);break;case 6:if(he(e,t),me(t),i&4){if(t.stateNode===null)throw Error(o(162));i=t.memoizedProps,a=t.stateNode;try{a.nodeValue=i}catch(Z){Tt(t,t.return,Z)}}break;case 3:if(Rs=null,s=Xe,Xe=Os(e.containerInfo),he(e,t),Xe=s,me(t),i&4&&a!==null&&a.memoizedState.isDehydrated)try{nn(e.containerInfo)}catch(Z){Tt(t,t.return,Z)}Jo&&(Jo=!1,Kh(t));break;case 4:i=Xe,Xe=Os(t.stateNode.containerInfo),he(e,t),me(t),Xe=i;break;case 12:he(e,t),me(t);break;case 31:he(e,t),me(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,bs(t,i)));break;case 13:he(e,t),me(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ss=ye()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,bs(t,i)));break;case 22:s=t.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,z=fa,C=Qt;if(fa=z||s,Qt=C||S,he(e,t),Qt=C,fa=z,me(t),i&8192)t:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(a===null||S||fa||Qt||hi(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){S=a=e;try{if(c=S.stateNode,s)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{p=S.stateNode;var V=S.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null;p.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(Z){Tt(S,S.return,Z)}}}else if(e.tag===6){if(a===null){S=e;try{S.stateNode.nodeValue=s?"":S.memoizedProps}catch(Z){Tt(S,S.return,Z)}}}else if(e.tag===18){if(a===null){S=e;try{var D=S.stateNode;s?Rm(D,!0):Rm(S.stateNode,!1)}catch(Z){Tt(S,S.return,Z)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,bs(t,a))));break;case 19:he(e,t),me(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,bs(t,i)));break;case 30:break;case 21:break;default:he(e,t),me(t)}}function me(t){var e=t.flags;if(e&2){try{for(var a,i=t.return;i!==null;){if(Uh(i)){a=i;break}i=i.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var s=a.stateNode,c=Ko(t);xs(t,c,s);break;case 5:var d=a.stateNode;a.flags&32&&(Ai(d,""),a.flags&=-33);var p=Ko(t);xs(t,p,d);break;case 3:case 4:var S=a.stateNode.containerInfo,z=Ko(t);Zo(t,z,S);break;default:throw Error(o(161))}}catch(C){Tt(t,t.return,C)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Kh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Kh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ha(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Lh(t,e.alternate,e),e=e.sibling}function hi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ka(4,e,e.return),hi(e);break;case 1:Pe(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Rh(e,e.return,a),hi(e);break;case 27:al(e.stateNode);case 26:case 5:Pe(e,e.return),hi(e);break;case 22:e.memoizedState===null&&hi(e);break;case 30:hi(e);break;default:hi(e)}t=t.sibling}}function ma(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,s=t,c=e,d=c.flags;switch(c.tag){case 0:case 11:case 15:ma(s,c,a),Kn(4,c);break;case 1:if(ma(s,c,a),i=c,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(z){Tt(i,i.return,z)}if(i=c,s=i.updateQueue,s!==null){var p=i.stateNode;try{var S=s.shared.hiddenCallbacks;if(S!==null)for(s.shared.hiddenCallbacks=null,s=0;s<S.length;s++)Td(S[s],p)}catch(z){Tt(i,i.return,z)}}a&&d&64&&_h(c),Zn(c,c.return);break;case 27:Bh(c);case 26:case 5:ma(s,c,a),a&&i===null&&d&4&&Vh(c),Zn(c,c.return);break;case 12:ma(s,c,a);break;case 31:ma(s,c,a),a&&d&4&&Yh(s,c);break;case 13:ma(s,c,a),a&&d&4&&Xh(s,c);break;case 22:c.memoizedState===null&&ma(s,c,a),Zn(c,c.return);break;case 30:break;default:ma(s,c,a)}e=e.sibling}}function Fo(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&On(a))}function Po(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&On(t))}function Qe(t,e,a,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zh(t,e,a,i),e=e.sibling}function Zh(t,e,a,i){var s=e.flags;switch(e.tag){case 0:case 11:case 15:Qe(t,e,a,i),s&2048&&Kn(9,e);break;case 1:Qe(t,e,a,i);break;case 3:Qe(t,e,a,i),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&On(t)));break;case 12:if(s&2048){Qe(t,e,a,i),t=e.stateNode;try{var c=e.memoizedProps,d=c.id,p=c.onPostCommit;typeof p=="function"&&p(d,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Tt(e,e.return,S)}}else Qe(t,e,a,i);break;case 31:Qe(t,e,a,i);break;case 13:Qe(t,e,a,i);break;case 23:break;case 22:c=e.stateNode,d=e.alternate,e.memoizedState!==null?c._visibility&2?Qe(t,e,a,i):Jn(t,e):c._visibility&2?Qe(t,e,a,i):(c._visibility|=2,Ki(t,e,a,i,(e.subtreeFlags&10256)!==0||!1)),s&2048&&Fo(d,e);break;case 24:Qe(t,e,a,i),s&2048&&Po(e.alternate,e);break;default:Qe(t,e,a,i)}}function Ki(t,e,a,i,s){for(s=s&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,d=e,p=a,S=i,z=d.flags;switch(d.tag){case 0:case 11:case 15:Ki(c,d,p,S,s),Kn(8,d);break;case 23:break;case 22:var C=d.stateNode;d.memoizedState!==null?C._visibility&2?Ki(c,d,p,S,s):Jn(c,d):(C._visibility|=2,Ki(c,d,p,S,s)),s&&z&2048&&Fo(d.alternate,d);break;case 24:Ki(c,d,p,S,s),s&&z&2048&&Po(d.alternate,d);break;default:Ki(c,d,p,S,s)}e=e.sibling}}function Jn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,i=e,s=i.flags;switch(i.tag){case 22:Jn(a,i),s&2048&&Fo(i.alternate,i);break;case 24:Jn(a,i),s&2048&&Po(i.alternate,i);break;default:Jn(a,i)}e=e.sibling}}var Fn=8192;function Zi(t,e,a){if(t.subtreeFlags&Fn)for(t=t.child;t!==null;)Jh(t,e,a),t=t.sibling}function Jh(t,e,a){switch(t.tag){case 26:Zi(t,e,a),t.flags&Fn&&t.memoizedState!==null&&L5(a,Xe,t.memoizedState,t.memoizedProps);break;case 5:Zi(t,e,a);break;case 3:case 4:var i=Xe;Xe=Os(t.stateNode.containerInfo),Zi(t,e,a),Xe=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Fn,Fn=16777216,Zi(t,e,a),Fn=i):Zi(t,e,a));break;default:Zi(t,e,a)}}function Fh(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Pn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Pt=i,$h(i,t)}Fh(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ph(t),t=t.sibling}function Ph(t){switch(t.tag){case 0:case 11:case 15:Pn(t),t.flags&2048&&ka(9,t,t.return);break;case 3:Pn(t);break;case 12:Pn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,vs(t)):Pn(t);break;default:Pn(t)}}function vs(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];Pt=i,$h(i,t)}Fh(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ka(8,e,e.return),vs(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,vs(e));break;default:vs(e)}t=t.sibling}}function $h(t,e){for(;Pt!==null;){var a=Pt;switch(a.tag){case 0:case 11:case 15:ka(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:On(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Pt=i;else t:for(a=t;Pt!==null;){i=Pt;var s=i.sibling,c=i.return;if(qh(i),i===a){Pt=null;break t}if(s!==null){s.return=c,Pt=s;break t}Pt=c}}}var e5={getCacheForType:function(t){var e=It(Gt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return It(Gt).controller.signal}},a5=typeof WeakMap=="function"?WeakMap:Map,vt=0,Mt=null,ft=null,mt=0,jt=0,Ne=null,Oa=!1,Ji=!1,$o=!1,pa=0,Rt=0,_a=0,mi=0,Wo=0,we=0,Fi=0,$n=null,pe=null,Io=!1,Ss=0,Wh=0,js=1/0,Ts=null,Ra=null,Zt=0,Va=null,Pi=null,ga=0,tc=0,ec=null,Ih=null,Wn=0,ac=null;function Ae(){return(vt&2)!==0&&mt!==0?mt&-mt:O.T!==null?oc():pf()}function tm(){if(we===0)if((mt&536870912)===0||gt){var t=Cl;Cl<<=1,(Cl&3932160)===0&&(Cl=262144),we=t}else we=536870912;return t=je.current,t!==null&&(t.flags|=32),we}function ge(t,e,a){(t===Mt&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&($i(t,0),Ua(t,mt,we,!1)),bn(t,a),((vt&2)===0||t!==Mt)&&(t===Mt&&((vt&2)===0&&(mi|=a),Rt===4&&Ua(t,mt,we,!1)),$e(t))}function em(t,e,a){if((vt&6)!==0)throw Error(o(327));var i=!a&&(e&127)===0&&(e&t.expiredLanes)===0||xn(t,e),s=i?l5(t,e):nc(t,e,!0),c=i;do{if(s===0){Ji&&!i&&Ua(t,e,0,!1);break}else{if(a=t.current.alternate,c&&!i5(a)){s=nc(t,e,!1),c=!1;continue}if(s===2){if(c=e,t.errorRecoveryDisabledLanes&c)var d=0;else d=t.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){e=d;t:{var p=t;s=$n;var S=p.current.memoizedState.isDehydrated;if(S&&($i(p,d).flags|=256),d=nc(p,d,!1),d!==2){if($o&&!S){p.errorRecoveryDisabledLanes|=c,mi|=c,s=4;break t}c=pe,pe=s,c!==null&&(pe===null?pe=c:pe.push.apply(pe,c))}s=d}if(c=!1,s!==2)continue}}if(s===1){$i(t,0),Ua(t,e,0,!0);break}t:{switch(i=t,c=s,c){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Ua(i,e,we,!Oa);break t;case 2:pe=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(s=Ss+300-ye(),10<s)){if(Ua(i,e,we,!Oa),Ol(i,0,!0)!==0)break t;ga=e,i.timeoutHandle=km(am.bind(null,i,a,pe,Ts,Io,e,we,mi,Fi,Oa,c,"Throttled",-0,0),s);break t}am(i,a,pe,Ts,Io,e,we,mi,Fi,Oa,c,null,-0,0)}}break}while(!0);$e(t)}function am(t,e,a,i,s,c,d,p,S,z,C,V,E,D){if(t.timeoutHandle=-1,V=e.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},Jh(e,c,V);var Z=(c&62914560)===c?Ss-ye():(c&4194048)===c?Wh-ye():0;if(Z=q5(V,Z),Z!==null){ga=c,t.cancelPendingCommit=Z(um.bind(null,t,e,c,a,i,s,d,p,S,C,V,null,E,D)),Ua(t,c,d,!z);return}}um(t,e,c,a,i,s,d,p,S)}function i5(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var s=a[i],c=s.getSnapshot;s=s.value;try{if(!ve(c(),s))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ua(t,e,a,i){e&=~Wo,e&=~mi,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var s=e;0<s;){var c=31-be(s),d=1<<c;i[c]=-1,s&=~d}a!==0&&df(t,a,e)}function Ns(){return(vt&6)===0?(In(0),!1):!0}function ic(){if(ft!==null){if(jt===0)var t=ft.return;else t=ft,la=li=null,bo(t),qi=null,Rn=0,t=ft;for(;t!==null;)Oh(t.alternate,t),t=t.return;ft=null}}function $i(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,T5(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ga=0,ic(),Mt=t,ft=a=ia(t.current,null),mt=e,jt=0,Ne=null,Oa=!1,Ji=xn(t,e),$o=!1,Fi=we=Wo=mi=_a=Rt=0,pe=$n=null,Io=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var s=31-be(i),c=1<<s;e|=t[s],i&=~c}return pa=e,Ql(),a}function im(t,e){ot=null,O.H=Yn,e===Li||e===Il?(e=bd(),jt=3):e===so?(e=bd(),jt=4):jt=e===Ro?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ne=e,ft===null&&(Rt=1,hs(t,ke(e,t.current)))}function nm(){var t=je.current;return t===null?!0:(mt&4194048)===mt?Ve===null:(mt&62914560)===mt||(mt&536870912)!==0?t===Ve:!1}function lm(){var t=O.H;return O.H=Yn,t===null?Yn:t}function sm(){var t=O.A;return O.A=e5,t}function ws(){Rt=4,Oa||(mt&4194048)!==mt&&je.current!==null||(Ji=!0),(_a&134217727)===0&&(mi&134217727)===0||Mt===null||Ua(Mt,mt,we,!1)}function nc(t,e,a){var i=vt;vt|=2;var s=lm(),c=sm();(Mt!==t||mt!==e)&&(Ts=null,$i(t,e)),e=!1;var d=Rt;t:do try{if(jt!==0&&ft!==null){var p=ft,S=Ne;switch(jt){case 8:ic(),d=6;break t;case 3:case 2:case 9:case 6:je.current===null&&(e=!0);var z=jt;if(jt=0,Ne=null,Wi(t,p,S,z),a&&Ji){d=0;break t}break;default:z=jt,jt=0,Ne=null,Wi(t,p,S,z)}}n5(),d=Rt;break}catch(C){im(t,C)}while(!0);return e&&t.shellSuspendCounter++,la=li=null,vt=i,O.H=s,O.A=c,ft===null&&(Mt=null,mt=0,Ql()),d}function n5(){for(;ft!==null;)rm(ft)}function l5(t,e){var a=vt;vt|=2;var i=lm(),s=sm();Mt!==t||mt!==e?(Ts=null,js=ye()+500,$i(t,e)):Ji=xn(t,e);t:do try{if(jt!==0&&ft!==null){e=ft;var c=Ne;e:switch(jt){case 1:jt=0,Ne=null,Wi(t,e,c,1);break;case 2:case 9:if(yd(c)){jt=0,Ne=null,om(e);break}e=function(){jt!==2&&jt!==9||Mt!==t||(jt=7),$e(t)},c.then(e,e);break t;case 3:jt=7;break t;case 4:jt=5;break t;case 7:yd(c)?(jt=0,Ne=null,om(e)):(jt=0,Ne=null,Wi(t,e,c,7));break;case 5:var d=null;switch(ft.tag){case 26:d=ft.memoizedState;case 5:case 27:var p=ft;if(d?Zm(d):p.stateNode.complete){jt=0,Ne=null;var S=p.sibling;if(S!==null)ft=S;else{var z=p.return;z!==null?(ft=z,As(z)):ft=null}break e}}jt=0,Ne=null,Wi(t,e,c,5);break;case 6:jt=0,Ne=null,Wi(t,e,c,6);break;case 8:ic(),Rt=6;break t;default:throw Error(o(462))}}s5();break}catch(C){im(t,C)}while(!0);return la=li=null,O.H=i,O.A=s,vt=a,ft!==null?0:(Mt=null,mt=0,Ql(),Rt)}function s5(){for(;ft!==null&&!Ey();)rm(ft)}function rm(t){var e=Ch(t.alternate,t,pa);t.memoizedProps=t.pendingProps,e===null?As(t):ft=e}function om(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=wh(a,e,e.pendingProps,e.type,void 0,mt);break;case 11:e=wh(a,e,e.pendingProps,e.type.render,e.ref,mt);break;case 5:bo(e);default:Oh(a,e),e=ft=sd(e,pa),e=Ch(a,e,pa)}t.memoizedProps=t.pendingProps,e===null?As(t):ft=e}function Wi(t,e,a,i){la=li=null,bo(e),qi=null,Rn=0;var s=e.return;try{if(J1(t,s,e,a,mt)){Rt=1,hs(t,ke(a,t.current)),ft=null;return}}catch(c){if(s!==null)throw ft=s,c;Rt=1,hs(t,ke(a,t.current)),ft=null;return}e.flags&32768?(gt||i===1?t=!0:Ji||(mt&536870912)!==0?t=!1:(Oa=t=!0,(i===2||i===9||i===3||i===6)&&(i=je.current,i!==null&&i.tag===13&&(i.flags|=16384))),cm(e,t)):As(e)}function As(t){var e=t;do{if((e.flags&32768)!==0){cm(e,Oa);return}t=e.return;var a=$1(e.alternate,e,pa);if(a!==null){ft=a;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);Rt===0&&(Rt=5)}function cm(t,e){do{var a=W1(t.alternate,t);if(a!==null){a.flags&=32767,ft=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ft=t;return}ft=t=a}while(t!==null);Rt=6,ft=null}function um(t,e,a,i,s,c,d,p,S){t.cancelPendingCommit=null;do Ms();while(Zt!==0);if((vt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(c=e.lanes|e.childLanes,c|=Qr,Hy(t,a,c,d,p,S),t===Mt&&(ft=Mt=null,mt=0),Pi=e,Va=t,ga=a,tc=c,ec=s,Ih=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,u5(El,function(){return pm(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=O.T,O.T=null,s=H.p,H.p=2,d=vt,vt|=4;try{I1(t,e,a)}finally{vt=d,H.p=s,O.T=i}}Zt=1,fm(),dm(),hm()}}function fm(){if(Zt===1){Zt=0;var t=Va,e=Pi,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var i=H.p;H.p=2;var s=vt;vt|=4;try{Qh(e,t);var c=gc,d=$f(t.containerInfo),p=c.focusedElem,S=c.selectionRange;if(d!==p&&p&&p.ownerDocument&&Pf(p.ownerDocument.documentElement,p)){if(S!==null&&Lr(p)){var z=S.start,C=S.end;if(C===void 0&&(C=z),"selectionStart"in p)p.selectionStart=z,p.selectionEnd=Math.min(C,p.value.length);else{var V=p.ownerDocument||document,E=V&&V.defaultView||window;if(E.getSelection){var D=E.getSelection(),Z=p.textContent.length,at=Math.min(S.start,Z),At=S.end===void 0?at:Math.min(S.end,Z);!D.extend&&at>At&&(d=At,At=at,at=d);var A=Ff(p,at),T=Ff(p,At);if(A&&T&&(D.rangeCount!==1||D.anchorNode!==A.node||D.anchorOffset!==A.offset||D.focusNode!==T.node||D.focusOffset!==T.offset)){var M=V.createRange();M.setStart(A.node,A.offset),D.removeAllRanges(),at>At?(D.addRange(M),D.extend(T.node,T.offset)):(M.setEnd(T.node,T.offset),D.addRange(M))}}}}for(V=[],D=p;D=D.parentNode;)D.nodeType===1&&V.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<V.length;p++){var _=V[p];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Hs=!!pc,gc=pc=null}finally{vt=s,H.p=i,O.T=a}}t.current=e,Zt=2}}function dm(){if(Zt===2){Zt=0;var t=Va,e=Pi,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var i=H.p;H.p=2;var s=vt;vt|=4;try{Lh(t,e.alternate,e)}finally{vt=s,H.p=i,O.T=a}}Zt=3}}function hm(){if(Zt===4||Zt===3){Zt=0,Dy();var t=Va,e=Pi,a=ga,i=Ih;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Zt=5:(Zt=0,Pi=Va=null,mm(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(Ra=null),Sr(a),e=e.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(yn,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=O.T,s=H.p,H.p=2,O.T=null;try{for(var c=t.onRecoverableError,d=0;d<i.length;d++){var p=i[d];c(p.value,{componentStack:p.stack})}}finally{O.T=e,H.p=s}}(ga&3)!==0&&Ms(),$e(t),s=t.pendingLanes,(a&261930)!==0&&(s&42)!==0?t===ac?Wn++:(Wn=0,ac=t):Wn=0,In(0)}}function mm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,On(e)))}function Ms(){return fm(),dm(),hm(),pm()}function pm(){if(Zt!==5)return!1;var t=Va,e=tc;tc=0;var a=Sr(ga),i=O.T,s=H.p;try{H.p=32>a?32:a,O.T=null,a=ec,ec=null;var c=Va,d=ga;if(Zt=0,Pi=Va=null,ga=0,(vt&6)!==0)throw Error(o(331));var p=vt;if(vt|=4,Ph(c.current),Zh(c,c.current,d,a),vt=p,In(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(yn,c)}catch{}return!0}finally{H.p=s,O.T=i,mm(t,e)}}function gm(t,e,a){e=ke(a,e),e=_o(t.stateNode,e,2),t=Ea(t,e,2),t!==null&&(bn(t,2),$e(t))}function Tt(t,e,a){if(t.tag===3)gm(t,t,a);else for(;e!==null;){if(e.tag===3){gm(e,t,a);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ra===null||!Ra.has(i))){t=ke(a,t),a=yh(2),i=Ea(e,a,2),i!==null&&(xh(a,i,e,t),bn(i,2),$e(i));break}}e=e.return}}function lc(t,e,a){var i=t.pingCache;if(i===null){i=t.pingCache=new a5;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(a)||($o=!0,s.add(a),t=r5.bind(null,t,e,a),e.then(t,t))}function r5(t,e,a){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Mt===t&&(mt&a)===a&&(Rt===4||Rt===3&&(mt&62914560)===mt&&300>ye()-Ss?(vt&2)===0&&$i(t,0):Wo|=a,Fi===mt&&(Fi=0)),$e(t)}function ym(t,e){e===0&&(e=ff()),t=ai(t,e),t!==null&&(bn(t,e),$e(t))}function o5(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),ym(t,a)}function c5(t,e){var a=0;switch(t.tag){case 31:case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(a=s.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(e),ym(t,a)}function u5(t,e){return yr(t,e)}var zs=null,Ii=null,sc=!1,Es=!1,rc=!1,Ba=0;function $e(t){t!==Ii&&t.next===null&&(Ii===null?zs=Ii=t:Ii=Ii.next=t),Es=!0,sc||(sc=!0,d5())}function In(t,e){if(!rc&&Es){rc=!0;do for(var a=!1,i=zs;i!==null;){if(t!==0){var s=i.pendingLanes;if(s===0)var c=0;else{var d=i.suspendedLanes,p=i.pingedLanes;c=(1<<31-be(42|t)+1)-1,c&=s&~(d&~p),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Sm(i,c))}else c=mt,c=Ol(i,i===Mt?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||xn(i,c)||(a=!0,Sm(i,c));i=i.next}while(a);rc=!1}}function f5(){xm()}function xm(){Es=sc=!1;var t=0;Ba!==0&&j5()&&(t=Ba);for(var e=ye(),a=null,i=zs;i!==null;){var s=i.next,c=bm(i,e);c===0?(i.next=null,a===null?zs=s:a.next=s,s===null&&(Ii=a)):(a=i,(t!==0||(c&3)!==0)&&(Es=!0)),i=s}Zt!==0&&Zt!==5||In(t),Ba!==0&&(Ba=0)}function bm(t,e){for(var a=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var d=31-be(c),p=1<<d,S=s[d];S===-1?((p&a)===0||(p&i)!==0)&&(s[d]=By(p,e)):S<=e&&(t.expiredLanes|=p),c&=~p}if(e=Mt,a=mt,a=Ol(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,a===0||t===e&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&xr(i),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||xn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(i!==null&&xr(i),Sr(a)){case 2:case 8:a=cf;break;case 32:a=El;break;case 268435456:a=uf;break;default:a=El}return i=vm.bind(null,t),a=yr(a,i),t.callbackPriority=e,t.callbackNode=a,e}return i!==null&&i!==null&&xr(i),t.callbackPriority=2,t.callbackNode=null,2}function vm(t,e){if(Zt!==0&&Zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ms()&&t.callbackNode!==a)return null;var i=mt;return i=Ol(t,t===Mt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(em(t,i,e),bm(t,ye()),t.callbackNode!=null&&t.callbackNode===a?vm.bind(null,t):null)}function Sm(t,e){if(Ms())return null;em(t,e,!0)}function d5(){N5(function(){(vt&6)!==0?yr(of,f5):xm()})}function oc(){if(Ba===0){var t=Bi;t===0&&(t=Dl,Dl<<=1,(Dl&261888)===0&&(Dl=256)),Ba=t}return Ba}function jm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ul(""+t)}function Tm(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function h5(t,e,a,i,s){if(e==="submit"&&a&&a.stateNode===s){var c=jm((s[ue]||null).action),d=i.submitter;d&&(e=(e=d[ue]||null)?jm(e.formAction):d.getAttribute("formAction"),e!==null&&(c=e,d=null));var p=new ql("action","action",null,i,s);t.push({event:p,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ba!==0){var S=d?Tm(s,d):new FormData(s);zo(a,{pending:!0,data:S,method:s.method,action:c},null,S)}}else typeof c=="function"&&(p.preventDefault(),S=d?Tm(s,d):new FormData(s),zo(a,{pending:!0,data:S,method:s.method,action:c},c,S))},currentTarget:s}]})}}for(var cc=0;cc<Xr.length;cc++){var uc=Xr[cc],m5=uc.toLowerCase(),p5=uc[0].toUpperCase()+uc.slice(1);Ye(m5,"on"+p5)}Ye(td,"onAnimationEnd"),Ye(ed,"onAnimationIteration"),Ye(ad,"onAnimationStart"),Ye("dblclick","onDoubleClick"),Ye("focusin","onFocus"),Ye("focusout","onBlur"),Ye(C1,"onTransitionRun"),Ye(k1,"onTransitionStart"),Ye(O1,"onTransitionCancel"),Ye(id,"onTransitionEnd"),Ni("onMouseEnter",["mouseout","mouseover"]),Ni("onMouseLeave",["mouseout","mouseover"]),Ni("onPointerEnter",["pointerout","pointerover"]),Ni("onPointerLeave",["pointerout","pointerover"]),Wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function Nm(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var i=t[a],s=i.event;i=i.listeners;t:{var c=void 0;if(e)for(var d=i.length-1;0<=d;d--){var p=i[d],S=p.instance,z=p.currentTarget;if(p=p.listener,S!==c&&s.isPropagationStopped())break t;c=p,s.currentTarget=z;try{c(s)}catch(C){Xl(C)}s.currentTarget=null,c=S}else for(d=0;d<i.length;d++){if(p=i[d],S=p.instance,z=p.currentTarget,p=p.listener,S!==c&&s.isPropagationStopped())break t;c=p,s.currentTarget=z;try{c(s)}catch(C){Xl(C)}s.currentTarget=null,c=S}}}}function dt(t,e){var a=e[jr];a===void 0&&(a=e[jr]=new Set);var i=t+"__bubble";a.has(i)||(wm(e,t,2,!1),a.add(i))}function fc(t,e,a){var i=0;e&&(i|=4),wm(a,t,i,e)}var Ds="_reactListening"+Math.random().toString(36).slice(2);function dc(t){if(!t[Ds]){t[Ds]=!0,xf.forEach(function(a){a!=="selectionchange"&&(g5.has(a)||fc(a,!1,t),fc(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ds]||(e[Ds]=!0,fc("selectionchange",!1,e))}}function wm(t,e,a,i){switch(t0(e)){case 2:var s=X5;break;case 8:s=Q5;break;default:s=Mc}a=s.bind(null,e,a,t),s=void 0,!Cr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,a,{capture:!0,passive:s}):t.addEventListener(e,a,!0):s!==void 0?t.addEventListener(e,a,{passive:s}):t.addEventListener(e,a,!1)}function hc(t,e,a,i,s){var c=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var p=i.stateNode.containerInfo;if(p===s)break;if(d===4)for(d=i.return;d!==null;){var S=d.tag;if((S===3||S===4)&&d.stateNode.containerInfo===s)return;d=d.return}for(;p!==null;){if(d=Si(p),d===null)return;if(S=d.tag,S===5||S===6||S===26||S===27){i=c=d;continue t}p=p.parentNode}}i=i.return}Df(function(){var z=c,C=Er(a),V=[];t:{var E=nd.get(t);if(E!==void 0){var D=ql,Z=t;switch(t){case"keypress":if(Hl(a)===0)break t;case"keydown":case"keyup":D=c1;break;case"focusin":Z="focus",D=Rr;break;case"focusout":Z="blur",D=Rr;break;case"beforeblur":case"afterblur":D=Rr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=$y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=d1;break;case td:case ed:case ad:D=t1;break;case id:D=m1;break;case"scroll":case"scrollend":D=Fy;break;case"wheel":D=g1;break;case"copy":case"cut":case"paste":D=a1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Rf;break;case"toggle":case"beforetoggle":D=x1}var at=(e&4)!==0,At=!at&&(t==="scroll"||t==="scrollend"),A=at?E!==null?E+"Capture":null:E;at=[];for(var T=z,M;T!==null;){var _=T;if(M=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||M===null||A===null||(_=jn(T,A),_!=null&&at.push(el(T,_,M))),At)break;T=T.return}0<at.length&&(E=new D(E,Z,null,a,C),V.push({event:E,listeners:at}))}}if((e&7)===0){t:{if(E=t==="mouseover"||t==="pointerover",D=t==="mouseout"||t==="pointerout",E&&a!==zr&&(Z=a.relatedTarget||a.fromElement)&&(Si(Z)||Z[vi]))break t;if((D||E)&&(E=C.window===C?C:(E=C.ownerDocument)?E.defaultView||E.parentWindow:window,D?(Z=a.relatedTarget||a.toElement,D=z,Z=Z?Si(Z):null,Z!==null&&(At=m(Z),at=Z.tag,Z!==At||at!==5&&at!==27&&at!==6)&&(Z=null)):(D=null,Z=z),D!==Z)){if(at=Of,_="onMouseLeave",A="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(at=Rf,_="onPointerLeave",A="onPointerEnter",T="pointer"),At=D==null?E:Sn(D),M=Z==null?E:Sn(Z),E=new at(_,T+"leave",D,a,C),E.target=At,E.relatedTarget=M,_=null,Si(C)===z&&(at=new at(A,T+"enter",Z,a,C),at.target=M,at.relatedTarget=At,_=at),At=_,D&&Z)e:{for(at=y5,A=D,T=Z,M=0,_=A;_;_=at(_))M++;_=0;for(var et=T;et;et=at(et))_++;for(;0<M-_;)A=at(A),M--;for(;0<_-M;)T=at(T),_--;for(;M--;){if(A===T||T!==null&&A===T.alternate){at=A;break e}A=at(A),T=at(T)}at=null}else at=null;D!==null&&Am(V,E,D,at,!1),Z!==null&&At!==null&&Am(V,At,Z,at,!0)}}t:{if(E=z?Sn(z):window,D=E.nodeName&&E.nodeName.toLowerCase(),D==="select"||D==="input"&&E.type==="file")var xt=Yf;else if(qf(E))if(Xf)xt=z1;else{xt=A1;var I=w1}else D=E.nodeName,!D||D.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?z&&Mr(z.elementType)&&(xt=Yf):xt=M1;if(xt&&(xt=xt(t,z))){Gf(V,xt,a,C);break t}I&&I(t,E,z),t==="focusout"&&z&&E.type==="number"&&z.memoizedProps.value!=null&&Ar(E,"number",E.value)}switch(I=z?Sn(z):window,t){case"focusin":(qf(I)||I.contentEditable==="true")&&(Di=I,qr=z,Dn=null);break;case"focusout":Dn=qr=Di=null;break;case"mousedown":Gr=!0;break;case"contextmenu":case"mouseup":case"dragend":Gr=!1,Wf(V,a,C);break;case"selectionchange":if(D1)break;case"keydown":case"keyup":Wf(V,a,C)}var ct;if(Ur)t:{switch(t){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else Ei?Hf(t,a)&&(pt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(Vf&&a.locale!=="ko"&&(Ei||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Ei&&(ct=Cf()):(ja=C,kr="value"in ja?ja.value:ja.textContent,Ei=!0)),I=Cs(z,pt),0<I.length&&(pt=new _f(pt,t,null,a,C),V.push({event:pt,listeners:I}),ct?pt.data=ct:(ct=Lf(a),ct!==null&&(pt.data=ct)))),(ct=v1?S1(t,a):j1(t,a))&&(pt=Cs(z,"onBeforeInput"),0<pt.length&&(I=new _f("onBeforeInput","beforeinput",null,a,C),V.push({event:I,listeners:pt}),I.data=ct)),h5(V,t,z,a,C)}Nm(V,e)})}function el(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Cs(t,e){for(var a=e+"Capture",i=[];t!==null;){var s=t,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=jn(t,a),s!=null&&i.unshift(el(t,s,c)),s=jn(t,e),s!=null&&i.push(el(t,s,c))),t.tag===3)return i;t=t.return}return[]}function y5(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Am(t,e,a,i,s){for(var c=e._reactName,d=[];a!==null&&a!==i;){var p=a,S=p.alternate,z=p.stateNode;if(p=p.tag,S!==null&&S===i)break;p!==5&&p!==26&&p!==27||z===null||(S=z,s?(z=jn(a,c),z!=null&&d.unshift(el(a,z,S))):s||(z=jn(a,c),z!=null&&d.push(el(a,z,S)))),a=a.return}d.length!==0&&t.push({event:e,listeners:d})}var x5=/\r\n?/g,b5=/\u0000|\uFFFD/g;function Mm(t){return(typeof t=="string"?t:""+t).replace(x5,`
`).replace(b5,"")}function zm(t,e){return e=Mm(e),Mm(t)===e}function wt(t,e,a,i,s,c){switch(a){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Ai(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Ai(t,""+i);break;case"className":Rl(t,"class",i);break;case"tabIndex":Rl(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Rl(t,a,i);break;case"style":zf(t,i,c);break;case"data":if(e!=="object"){Rl(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Ul(""+i),t.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(e!=="input"&&wt(t,e,"name",s.name,s,null),wt(t,e,"formEncType",s.formEncType,s,null),wt(t,e,"formMethod",s.formMethod,s,null),wt(t,e,"formTarget",s.formTarget,s,null)):(wt(t,e,"encType",s.encType,s,null),wt(t,e,"method",s.method,s,null),wt(t,e,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Ul(""+i),t.setAttribute(a,i);break;case"onClick":i!=null&&(t.onclick=ea);break;case"onScroll":i!=null&&dt("scroll",t);break;case"onScrollEnd":i!=null&&dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(s.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}a=Ul(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""+i):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":i===!0?t.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,i):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(a,i):t.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(a):t.setAttribute(a,i);break;case"popover":dt("beforetoggle",t),dt("toggle",t),_l(t,"popover",i);break;case"xlinkActuate":ta(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ta(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ta(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ta(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ta(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ta(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ta(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ta(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ta(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":_l(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zy.get(a)||a,_l(t,a,i))}}function mc(t,e,a,i,s,c){switch(a){case"style":zf(t,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(s.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"children":typeof i=="string"?Ai(t,i):(typeof i=="number"||typeof i=="bigint")&&Ai(t,""+i);break;case"onScroll":i!=null&&dt("scroll",t);break;case"onScrollEnd":i!=null&&dt("scrollend",t);break;case"onClick":i!=null&&(t.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bf.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),e=a.slice(2,s?a.length-7:void 0),c=t[ue]||null,c=c!=null?c[a]:null,typeof c=="function"&&t.removeEventListener(e,c,s),typeof i=="function")){typeof c!="function"&&c!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,i,s);break t}a in t?t[a]=i:i===!0?t.setAttribute(a,""):_l(t,a,i)}}}function ee(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",t),dt("load",t);var i=!1,s=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(d!=null)switch(c){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:wt(t,e,c,d,a,null)}}s&&wt(t,e,"srcSet",a.srcSet,a,null),i&&wt(t,e,"src",a.src,a,null);return;case"input":dt("invalid",t);var p=c=d=s=null,S=null,z=null;for(i in a)if(a.hasOwnProperty(i)){var C=a[i];if(C!=null)switch(i){case"name":s=C;break;case"type":d=C;break;case"checked":S=C;break;case"defaultChecked":z=C;break;case"value":c=C;break;case"defaultValue":p=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(o(137,e));break;default:wt(t,e,i,C,a,null)}}Nf(t,c,p,S,z,d,s,!1);return;case"select":dt("invalid",t),i=d=c=null;for(s in a)if(a.hasOwnProperty(s)&&(p=a[s],p!=null))switch(s){case"value":c=p;break;case"defaultValue":d=p;break;case"multiple":i=p;default:wt(t,e,s,p,a,null)}e=c,a=d,t.multiple=!!i,e!=null?wi(t,!!i,e,!1):a!=null&&wi(t,!!i,a,!0);return;case"textarea":dt("invalid",t),c=s=i=null;for(d in a)if(a.hasOwnProperty(d)&&(p=a[d],p!=null))switch(d){case"value":i=p;break;case"defaultValue":s=p;break;case"children":c=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(o(91));break;default:wt(t,e,d,p,a,null)}Af(t,i,s,c);return;case"option":for(S in a)a.hasOwnProperty(S)&&(i=a[S],i!=null)&&(S==="selected"?t.selected=i&&typeof i!="function"&&typeof i!="symbol":wt(t,e,S,i,a,null));return;case"dialog":dt("beforetoggle",t),dt("toggle",t),dt("cancel",t),dt("close",t);break;case"iframe":case"object":dt("load",t);break;case"video":case"audio":for(i=0;i<tl.length;i++)dt(tl[i],t);break;case"image":dt("error",t),dt("load",t);break;case"details":dt("toggle",t);break;case"embed":case"source":case"link":dt("error",t),dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(i=a[z],i!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:wt(t,e,z,i,a,null)}return;default:if(Mr(e)){for(C in a)a.hasOwnProperty(C)&&(i=a[C],i!==void 0&&mc(t,e,C,i,a,void 0));return}}for(p in a)a.hasOwnProperty(p)&&(i=a[p],i!=null&&wt(t,e,p,i,a,null))}function v5(t,e,a,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,d=null,p=null,S=null,z=null,C=null;for(D in a){var V=a[D];if(a.hasOwnProperty(D)&&V!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":S=V;default:i.hasOwnProperty(D)||wt(t,e,D,null,i,V)}}for(var E in i){var D=i[E];if(V=a[E],i.hasOwnProperty(E)&&(D!=null||V!=null))switch(E){case"type":c=D;break;case"name":s=D;break;case"checked":z=D;break;case"defaultChecked":C=D;break;case"value":d=D;break;case"defaultValue":p=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,e));break;default:D!==V&&wt(t,e,E,D,i,V)}}wr(t,d,p,S,z,C,c,s);return;case"select":D=d=p=E=null;for(c in a)if(S=a[c],a.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":D=S;default:i.hasOwnProperty(c)||wt(t,e,c,null,i,S)}for(s in i)if(c=i[s],S=a[s],i.hasOwnProperty(s)&&(c!=null||S!=null))switch(s){case"value":E=c;break;case"defaultValue":p=c;break;case"multiple":d=c;default:c!==S&&wt(t,e,s,c,i,S)}e=p,a=d,i=D,E!=null?wi(t,!!a,E,!1):!!i!=!!a&&(e!=null?wi(t,!!a,e,!0):wi(t,!!a,a?[]:"",!1));return;case"textarea":D=E=null;for(p in a)if(s=a[p],a.hasOwnProperty(p)&&s!=null&&!i.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:wt(t,e,p,null,i,s)}for(d in i)if(s=i[d],c=a[d],i.hasOwnProperty(d)&&(s!=null||c!=null))switch(d){case"value":E=s;break;case"defaultValue":D=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==c&&wt(t,e,d,s,i,c)}wf(t,E,D);return;case"option":for(var Z in a)E=a[Z],a.hasOwnProperty(Z)&&E!=null&&!i.hasOwnProperty(Z)&&(Z==="selected"?t.selected=!1:wt(t,e,Z,null,i,E));for(S in i)E=i[S],D=a[S],i.hasOwnProperty(S)&&E!==D&&(E!=null||D!=null)&&(S==="selected"?t.selected=E&&typeof E!="function"&&typeof E!="symbol":wt(t,e,S,E,i,D));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)E=a[at],a.hasOwnProperty(at)&&E!=null&&!i.hasOwnProperty(at)&&wt(t,e,at,null,i,E);for(z in i)if(E=i[z],D=a[z],i.hasOwnProperty(z)&&E!==D&&(E!=null||D!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,e));break;default:wt(t,e,z,E,i,D)}return;default:if(Mr(e)){for(var At in a)E=a[At],a.hasOwnProperty(At)&&E!==void 0&&!i.hasOwnProperty(At)&&mc(t,e,At,void 0,i,E);for(C in i)E=i[C],D=a[C],!i.hasOwnProperty(C)||E===D||E===void 0&&D===void 0||mc(t,e,C,E,i,D);return}}for(var A in a)E=a[A],a.hasOwnProperty(A)&&E!=null&&!i.hasOwnProperty(A)&&wt(t,e,A,null,i,E);for(V in i)E=i[V],D=a[V],!i.hasOwnProperty(V)||E===D||E==null&&D==null||wt(t,e,V,E,i,D)}function Em(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function S5(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var s=a[i],c=s.transferSize,d=s.initiatorType,p=s.duration;if(c&&p&&Em(d)){for(d=0,p=s.responseEnd,i+=1;i<a.length;i++){var S=a[i],z=S.startTime;if(z>p)break;var C=S.transferSize,V=S.initiatorType;C&&Em(V)&&(S=S.responseEnd,d+=C*(S<p?1:(p-z)/(S-z)))}if(--i,e+=8*(c+d)/(s.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var pc=null,gc=null;function ks(t){return t.nodeType===9?t:t.ownerDocument}function Dm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function yc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xc=null;function j5(){var t=window.event;return t&&t.type==="popstate"?t===xc?!1:(xc=t,!0):(xc=null,!1)}var km=typeof setTimeout=="function"?setTimeout:void 0,T5=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,N5=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(t){return Om.resolve(null).then(t).catch(w5)}:km;function w5(t){setTimeout(function(){throw t})}function Ha(t){return t==="head"}function _m(t,e){var a=e,i=0;do{var s=a.nextSibling;if(t.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(i===0){t.removeChild(s),nn(e);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")al(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,al(a);for(var c=a.firstChild;c;){var d=c.nextSibling,p=c.nodeName;c[vn]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=d}}else a==="body"&&al(t.ownerDocument.body);a=s}while(a);nn(e)}function Rm(t,e){var a=t;t=0;do{var i=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=i}while(a)}function bc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bc(a),Tr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function A5(t,e,a,i){for(;t.nodeType===1;){var s=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[vn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ue(t.nextSibling),t===null)break}return null}function M5(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ue(t.nextSibling),t===null))return null;return t}function Vm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ue(t.nextSibling),t===null))return null;return t}function vc(t){return t.data==="$?"||t.data==="$~"}function Sc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function z5(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var i=function(){e(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Ue(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var jc=null;function Um(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Ue(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Hm(t,e,a){switch(e=ks(a),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function al(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Tr(t)}var Be=new Map,Lm=new Set;function Os(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ya=H.d;H.d={f:E5,r:D5,D:C5,C:k5,L:O5,m:_5,X:V5,S:R5,M:U5};function E5(){var t=ya.f(),e=Ns();return t||e}function D5(t){var e=ji(t);e!==null&&e.tag===5&&e.type==="form"?ih(e):ya.r(t)}var tn=typeof document>"u"?null:document;function qm(t,e,a){var i=tn;if(i&&typeof e=="string"&&e){var s=De(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),Lm.has(s)||(Lm.add(s),t={rel:t,crossOrigin:a,href:e},i.querySelector(s)===null&&(e=i.createElement("link"),ee(e,"link",t),Ft(e),i.head.appendChild(e)))}}function C5(t){ya.D(t),qm("dns-prefetch",t,null)}function k5(t,e){ya.C(t,e),qm("preconnect",t,e)}function O5(t,e,a){ya.L(t,e,a);var i=tn;if(i&&t&&e){var s='link[rel="preload"][as="'+De(e)+'"]';e==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+De(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+De(a.imageSizes)+'"]')):s+='[href="'+De(t)+'"]';var c=s;switch(e){case"style":c=en(t);break;case"script":c=an(t)}Be.has(c)||(t=v({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Be.set(c,t),i.querySelector(s)!==null||e==="style"&&i.querySelector(il(c))||e==="script"&&i.querySelector(nl(c))||(e=i.createElement("link"),ee(e,"link",t),Ft(e),i.head.appendChild(e)))}}function _5(t,e){ya.m(t,e);var a=tn;if(a&&t){var i=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+De(i)+'"][href="'+De(t)+'"]',c=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=an(t)}if(!Be.has(c)&&(t=v({rel:"modulepreload",href:t},e),Be.set(c,t),a.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(nl(c)))return}i=a.createElement("link"),ee(i,"link",t),Ft(i),a.head.appendChild(i)}}}function R5(t,e,a){ya.S(t,e,a);var i=tn;if(i&&t){var s=Ti(i).hoistableStyles,c=en(t);e=e||"default";var d=s.get(c);if(!d){var p={loading:0,preload:null};if(d=i.querySelector(il(c)))p.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Be.get(c))&&Tc(t,a);var S=d=i.createElement("link");Ft(S),ee(S,"link",t),S._p=new Promise(function(z,C){S.onload=z,S.onerror=C}),S.addEventListener("load",function(){p.loading|=1}),S.addEventListener("error",function(){p.loading|=2}),p.loading|=4,_s(d,e,i)}d={type:"stylesheet",instance:d,count:1,state:p},s.set(c,d)}}}function V5(t,e){ya.X(t,e);var a=tn;if(a&&t){var i=Ti(a).hoistableScripts,s=an(t),c=i.get(s);c||(c=a.querySelector(nl(s)),c||(t=v({src:t,async:!0},e),(e=Be.get(s))&&Nc(t,e),c=a.createElement("script"),Ft(c),ee(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(s,c))}}function U5(t,e){ya.M(t,e);var a=tn;if(a&&t){var i=Ti(a).hoistableScripts,s=an(t),c=i.get(s);c||(c=a.querySelector(nl(s)),c||(t=v({src:t,async:!0,type:"module"},e),(e=Be.get(s))&&Nc(t,e),c=a.createElement("script"),Ft(c),ee(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(s,c))}}function Gm(t,e,a,i){var s=(s=ut.current)?Os(s):null;if(!s)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=en(a.href),a=Ti(s).hoistableStyles,i=a.get(e),i||(i={type:"style",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=en(a.href);var c=Ti(s).hoistableStyles,d=c.get(t);if(d||(s=s.ownerDocument||s,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,d),(c=s.querySelector(il(t)))&&!c._p&&(d.instance=c,d.state.loading=5),Be.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Be.set(t,a),c||B5(s,t,a,d.state))),e&&i===null)throw Error(o(528,""));return d}if(e&&i!==null)throw Error(o(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=an(a),a=Ti(s).hoistableScripts,i=a.get(e),i||(i={type:"script",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function en(t){return'href="'+De(t)+'"'}function il(t){return'link[rel="stylesheet"]['+t+"]"}function Ym(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function B5(t,e,a,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),ee(e,"link",a),Ft(e),t.head.appendChild(e))}function an(t){return'[src="'+De(t)+'"]'}function nl(t){return"script[async]"+t}function Xm(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+De(a.href)+'"]');if(i)return e.instance=i,Ft(i),i;var s=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Ft(i),ee(i,"style",s),_s(i,a.precedence,t),e.instance=i;case"stylesheet":s=en(a.href);var c=t.querySelector(il(s));if(c)return e.state.loading|=4,e.instance=c,Ft(c),c;i=Ym(a),(s=Be.get(s))&&Tc(i,s),c=(t.ownerDocument||t).createElement("link"),Ft(c);var d=c;return d._p=new Promise(function(p,S){d.onload=p,d.onerror=S}),ee(c,"link",i),e.state.loading|=4,_s(c,a.precedence,t),e.instance=c;case"script":return c=an(a.src),(s=t.querySelector(nl(c)))?(e.instance=s,Ft(s),s):(i=a,(s=Be.get(c))&&(i=v({},a),Nc(i,s)),t=t.ownerDocument||t,s=t.createElement("script"),Ft(s),ee(s,"link",i),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,_s(i,a.precedence,t));return e.instance}function _s(t,e,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,c=s,d=0;d<i.length;d++){var p=i[d];if(p.dataset.precedence===e)c=p;else if(c!==s)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Tc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Nc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Rs=null;function Qm(t,e,a){if(Rs===null){var i=new Map,s=Rs=new Map;s.set(a,i)}else s=Rs,i=s.get(a),i||(i=new Map,s.set(a,i));if(i.has(t))return i;for(i.set(t,null),a=a.getElementsByTagName(t),s=0;s<a.length;s++){var c=a[s];if(!(c[vn]||c[$t]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(e)||"";d=t+d;var p=i.get(d);p?p.push(c):i.set(d,[c])}}return i}function Km(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function H5(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Zm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function L5(t,e,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=en(i.href),c=e.querySelector(il(s));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Vs.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=c,Ft(c);return}c=e.ownerDocument||e,i=Ym(i),(s=Be.get(s))&&Tc(i,s),c=c.createElement("link"),Ft(c);var d=c;d._p=new Promise(function(p,S){d.onload=p,d.onerror=S}),ee(c,"link",i),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Vs.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var wc=0;function q5(t,e){return t.stylesheets&&t.count===0&&Bs(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var i=setTimeout(function(){if(t.stylesheets&&Bs(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&wc===0&&(wc=62500*S5());var s=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bs(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>wc?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Vs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bs(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Us=null;function Bs(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Us=new Map,e.forEach(G5,t),Us=null,Vs.call(t))}function G5(t,e){if(!(e.state.loading&4)){var a=Us.get(t);if(a)var i=a.get(null);else{a=new Map,Us.set(t,a);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var d=s[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),i=d)}i&&a.set(null,i)}s=e.instance,d=s.getAttribute("data-precedence"),c=a.get(d)||i,c===i&&a.set(null,s),a.set(d,s),this.count++,i=Vs.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),c?c.parentNode.insertBefore(s,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var ll={$$typeof:R,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Y5(t,e,a,i,s,c,d,p,S){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=br(0),this.hiddenUpdates=br(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Jm(t,e,a,i,s,c,d,p,S,z,C,V){return t=new Y5(t,e,a,d,S,z,C,V,p),e=1,c===!0&&(e|=24),c=Se(3,null,null,e),t.current=c,c.stateNode=t,e=io(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:i,isDehydrated:a,cache:e},ro(c),t}function Fm(t){return t?(t=Oi,t):Oi}function Pm(t,e,a,i,s,c){s=Fm(s),i.context===null?i.context=s:i.pendingContext=s,i=za(e),i.payload={element:a},c=c===void 0?null:c,c!==null&&(i.callback=c),a=Ea(t,i,e),a!==null&&(ge(a,t,e),Un(a,t,e))}function $m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Ac(t,e){$m(t,e),(t=t.alternate)&&$m(t,e)}function Wm(t){if(t.tag===13||t.tag===31){var e=ai(t,67108864);e!==null&&ge(e,t,67108864),Ac(t,67108864)}}function Im(t){if(t.tag===13||t.tag===31){var e=Ae();e=vr(e);var a=ai(t,e);a!==null&&ge(a,t,e),Ac(t,e)}}var Hs=!0;function X5(t,e,a,i){var s=O.T;O.T=null;var c=H.p;try{H.p=2,Mc(t,e,a,i)}finally{H.p=c,O.T=s}}function Q5(t,e,a,i){var s=O.T;O.T=null;var c=H.p;try{H.p=8,Mc(t,e,a,i)}finally{H.p=c,O.T=s}}function Mc(t,e,a,i){if(Hs){var s=zc(i);if(s===null)hc(t,e,i,Ls,a),e0(t,i);else if(Z5(s,t,e,a,i))i.stopPropagation();else if(e0(t,i),e&4&&-1<K5.indexOf(t)){for(;s!==null;){var c=ji(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=$a(c.pendingLanes);if(d!==0){var p=c;for(p.pendingLanes|=2,p.entangledLanes|=2;d;){var S=1<<31-be(d);p.entanglements[1]|=S,d&=~S}$e(c),(vt&6)===0&&(js=ye()+500,In(0))}}break;case 31:case 13:p=ai(c,2),p!==null&&ge(p,c,2),Ns(),Ac(c,2)}if(c=zc(i),c===null&&hc(t,e,i,Ls,a),c===s)break;s=c}s!==null&&i.stopPropagation()}else hc(t,e,i,null,a)}}function zc(t){return t=Er(t),Ec(t)}var Ls=null;function Ec(t){if(Ls=null,t=Si(t),t!==null){var e=m(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=h(e),t!==null)return t;t=null}else if(a===31){if(t=x(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ls=t,null}function t0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cy()){case of:return 2;case cf:return 8;case El:case ky:return 32;case uf:return 268435456;default:return 32}default:return 32}}var Dc=!1,La=null,qa=null,Ga=null,sl=new Map,rl=new Map,Ya=[],K5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e0(t,e){switch(t){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":sl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(e.pointerId)}}function ol(t,e,a,i,s,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:a,eventSystemFlags:i,nativeEvent:c,targetContainers:[s]},e!==null&&(e=ji(e),e!==null&&Wm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Z5(t,e,a,i,s){switch(e){case"focusin":return La=ol(La,t,e,a,i,s),!0;case"dragenter":return qa=ol(qa,t,e,a,i,s),!0;case"mouseover":return Ga=ol(Ga,t,e,a,i,s),!0;case"pointerover":var c=s.pointerId;return sl.set(c,ol(sl.get(c)||null,t,e,a,i,s)),!0;case"gotpointercapture":return c=s.pointerId,rl.set(c,ol(rl.get(c)||null,t,e,a,i,s)),!0}return!1}function a0(t){var e=Si(t.target);if(e!==null){var a=m(e);if(a!==null){if(e=a.tag,e===13){if(e=h(a),e!==null){t.blockedOn=e,gf(t.priority,function(){Im(a)});return}}else if(e===31){if(e=x(a),e!==null){t.blockedOn=e,gf(t.priority,function(){Im(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=zc(t.nativeEvent);if(a===null){a=t.nativeEvent;var i=new a.constructor(a.type,a);zr=i,a.target.dispatchEvent(i),zr=null}else return e=ji(a),e!==null&&Wm(e),t.blockedOn=a,!1;e.shift()}return!0}function i0(t,e,a){qs(t)&&a.delete(e)}function J5(){Dc=!1,La!==null&&qs(La)&&(La=null),qa!==null&&qs(qa)&&(qa=null),Ga!==null&&qs(Ga)&&(Ga=null),sl.forEach(i0),rl.forEach(i0)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Dc||(Dc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,J5)))}var Ys=null;function n0(t){Ys!==t&&(Ys=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ys===t&&(Ys=null);for(var e=0;e<t.length;e+=3){var a=t[e],i=t[e+1],s=t[e+2];if(typeof i!="function"){if(Ec(i||a)===null)continue;break}var c=ji(a);c!==null&&(t.splice(e,3),e-=3,zo(c,{pending:!0,data:s,method:a.method,action:i},i,s))}}))}function nn(t){function e(S){return Gs(S,t)}La!==null&&Gs(La,t),qa!==null&&Gs(qa,t),Ga!==null&&Gs(Ga,t),sl.forEach(e),rl.forEach(e);for(var a=0;a<Ya.length;a++){var i=Ya[a];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)a0(a),a.blockedOn===null&&Ya.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var s=a[i],c=a[i+1],d=s[ue]||null;if(typeof c=="function")d||n0(a);else if(d){var p=null;if(c&&c.hasAttribute("formAction")){if(s=c,d=c[ue]||null)p=d.formAction;else if(Ec(s)!==null)continue}else p=d.action;typeof p=="function"?a[i+1]=p:(a.splice(i,3),i-=3),n0(a)}}}function l0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(d){return s=d})},focusReset:"manual",scroll:"manual"})}function e(){s!==null&&(s(),s=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),s!==null&&(s(),s=null)}}}function Cc(t){this._internalRoot=t}Xs.prototype.render=Cc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var a=e.current,i=Ae();Pm(a,i,t,e,null,null)},Xs.prototype.unmount=Cc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pm(t.current,2,null,t,null,null),Ns(),e[vi]=null}};function Xs(t){this._internalRoot=t}Xs.prototype.unstable_scheduleHydration=function(t){if(t){var e=pf();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Ya.length&&e!==0&&e<Ya[a].priority;a++);Ya.splice(a,0,t),a===0&&a0(t)}};var s0=l.version;if(s0!=="19.2.3")throw Error(o(527,s0,"19.2.3"));H.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=g(e),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var F5={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qs.isDisabled&&Qs.supportsFiber)try{yn=Qs.inject(F5),xe=Qs}catch{}}return ul.createRoot=function(t,e){if(!f(t))throw Error(o(299));var a=!1,i="",s=hh,c=mh,d=ph;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError)),e=Jm(t,1,!1,null,null,a,i,null,s,c,d,l0),t[vi]=e.current,dc(t),new Cc(e)},ul.hydrateRoot=function(t,e,a){if(!f(t))throw Error(o(299));var i=!1,s="",c=hh,d=mh,p=ph,S=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(p=a.onRecoverableError),a.formState!==void 0&&(S=a.formState)),e=Jm(t,1,!0,e,a??null,i,s,S,c,d,p,l0),e.context=Fm(null),a=e.current,i=Ae(),i=vr(i),s=za(i),s.callback=null,Ea(a,s,i),a=i,e.current.lanes=a,bn(e,a),$e(e),t[vi]=e.current,dc(t),new Xs(e)},ul.version="19.2.3",ul}var g0;function l2(){if(g0)return _c.exports;g0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(l){console.error(l)}}return n(),_c.exports=n2(),_c.exports}var s2=l2();const Nu=Y.createContext({});function wu(n){const l=Y.useRef(null);return l.current===null&&(l.current=n()),l.current}const Bp=typeof window<"u",Hp=Bp?Y.useLayoutEffect:Y.useEffect,rr=Y.createContext(null);function Au(n,l){n.indexOf(l)===-1&&n.push(l)}function Mu(n,l){const r=n.indexOf(l);r>-1&&n.splice(r,1)}const Ie=(n,l,r)=>r>l?l:r<n?n:r;let zu=()=>{};const ba={},Lp=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function qp(n){return typeof n=="object"&&n!==null}const Gp=n=>/^0[^.\s]+$/u.test(n);function Eu(n){let l;return()=>(l===void 0&&(l=n()),l)}const qe=n=>n,r2=(n,l)=>r=>l(n(r)),Nl=(...n)=>n.reduce(r2),bl=(n,l,r)=>{const o=l-n;return o===0?1:(r-n)/o};class Du{constructor(){this.subscriptions=[]}add(l){return Au(this.subscriptions,l),()=>Mu(this.subscriptions,l)}notify(l,r,o){const f=this.subscriptions.length;if(f)if(f===1)this.subscriptions[0](l,r,o);else for(let m=0;m<f;m++){const h=this.subscriptions[m];h&&h(l,r,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const xa=n=>n*1e3,Le=n=>n/1e3;function Yp(n,l){return l?n*(1e3/l):0}const Xp=(n,l,r)=>(((1-3*r+3*l)*n+(3*r-6*l))*n+3*l)*n,o2=1e-7,c2=12;function u2(n,l,r,o,f){let m,h,x=0;do h=l+(r-l)/2,m=Xp(h,o,f)-n,m>0?r=h:l=h;while(Math.abs(m)>o2&&++x<c2);return h}function wl(n,l,r,o){if(n===l&&r===o)return qe;const f=m=>u2(m,0,1,n,r);return m=>m===0||m===1?m:Xp(f(m),l,o)}const Qp=n=>l=>l<=.5?n(2*l)/2:(2-n(2*(1-l)))/2,Kp=n=>l=>1-n(1-l),Zp=wl(.33,1.53,.69,.99),Cu=Kp(Zp),Jp=Qp(Cu),Fp=n=>(n*=2)<1?.5*Cu(n):.5*(2-Math.pow(2,-10*(n-1))),ku=n=>1-Math.sin(Math.acos(n)),Pp=Kp(ku),$p=Qp(ku),f2=wl(.42,0,1,1),d2=wl(0,0,.58,1),Wp=wl(.42,0,.58,1),h2=n=>Array.isArray(n)&&typeof n[0]!="number",Ip=n=>Array.isArray(n)&&typeof n[0]=="number",m2={linear:qe,easeIn:f2,easeInOut:Wp,easeOut:d2,circIn:ku,circInOut:$p,circOut:Pp,backIn:Cu,backInOut:Jp,backOut:Zp,anticipate:Fp},p2=n=>typeof n=="string",y0=n=>{if(Ip(n)){zu(n.length===4);const[l,r,o,f]=n;return wl(l,r,o,f)}else if(p2(n))return m2[n];return n},Ks=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function g2(n,l){let r=new Set,o=new Set,f=!1,m=!1;const h=new WeakSet;let x={delta:0,timestamp:0,isProcessing:!1};function y(b){h.has(b)&&(g.schedule(b),n()),b(x)}const g={schedule:(b,v=!1,j=!1)=>{const B=j&&f?r:o;return v&&h.add(b),B.has(b)||B.add(b),b},cancel:b=>{o.delete(b),h.delete(b)},process:b=>{if(x=b,f){m=!0;return}f=!0,[r,o]=[o,r],r.forEach(y),r.clear(),f=!1,m&&(m=!1,g.process(b))}};return g}const y2=40;function tg(n,l){let r=!1,o=!0;const f={delta:0,timestamp:0,isProcessing:!1},m=()=>r=!0,h=Ks.reduce((R,Q)=>(R[Q]=g2(m),R),{}),{setup:x,read:y,resolveKeyframes:g,preUpdate:b,update:v,preRender:j,render:k,postRender:B}=h,L=()=>{const R=ba.useManualTiming?f.timestamp:performance.now();r=!1,ba.useManualTiming||(f.delta=o?1e3/60:Math.max(Math.min(R-f.timestamp,y2),1)),f.timestamp=R,f.isProcessing=!0,x.process(f),y.process(f),g.process(f),b.process(f),v.process(f),j.process(f),k.process(f),B.process(f),f.isProcessing=!1,r&&l&&(o=!1,n(L))},G=()=>{r=!0,o=!0,f.isProcessing||n(L)};return{schedule:Ks.reduce((R,Q)=>{const F=h[Q];return R[Q]=(nt,tt=!1,P=!1)=>(r||G(),F.schedule(nt,tt,P)),R},{}),cancel:R=>{for(let Q=0;Q<Ks.length;Q++)h[Ks[Q]].cancel(R)},state:f,steps:h}}const{schedule:Ct,cancel:Za,state:ae,steps:Bc}=tg(typeof requestAnimationFrame<"u"?requestAnimationFrame:qe,!0);let Ps;function x2(){Ps=void 0}const re={now:()=>(Ps===void 0&&re.set(ae.isProcessing||ba.useManualTiming?ae.timestamp:performance.now()),Ps),set:n=>{Ps=n,queueMicrotask(x2)}},eg=n=>l=>typeof l=="string"&&l.startsWith(n),ag=eg("--"),b2=eg("var(--"),Ou=n=>b2(n)?v2.test(n.split("/*")[0].trim()):!1,v2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function x0(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const hn={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},vl={...hn,transform:n=>Ie(0,1,n)},Zs={...hn,default:1},pl=n=>Math.round(n*1e5)/1e5,_u=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function S2(n){return n==null}const j2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ru=(n,l)=>r=>!!(typeof r=="string"&&j2.test(r)&&r.startsWith(n)||l&&!S2(r)&&Object.prototype.hasOwnProperty.call(r,l)),ig=(n,l,r)=>o=>{if(typeof o!="string")return o;const[f,m,h,x]=o.match(_u);return{[n]:parseFloat(f),[l]:parseFloat(m),[r]:parseFloat(h),alpha:x!==void 0?parseFloat(x):1}},T2=n=>Ie(0,255,n),Hc={...hn,transform:n=>Math.round(T2(n))},yi={test:Ru("rgb","red"),parse:ig("red","green","blue"),transform:({red:n,green:l,blue:r,alpha:o=1})=>"rgba("+Hc.transform(n)+", "+Hc.transform(l)+", "+Hc.transform(r)+", "+pl(vl.transform(o))+")"};function N2(n){let l="",r="",o="",f="";return n.length>5?(l=n.substring(1,3),r=n.substring(3,5),o=n.substring(5,7),f=n.substring(7,9)):(l=n.substring(1,2),r=n.substring(2,3),o=n.substring(3,4),f=n.substring(4,5),l+=l,r+=r,o+=o,f+=f),{red:parseInt(l,16),green:parseInt(r,16),blue:parseInt(o,16),alpha:f?parseInt(f,16)/255:1}}const tu={test:Ru("#"),parse:N2,transform:yi.transform},Al=n=>({test:l=>typeof l=="string"&&l.endsWith(n)&&l.split(" ").length===1,parse:parseFloat,transform:l=>`${l}${n}`}),Qa=Al("deg"),We=Al("%"),J=Al("px"),w2=Al("vh"),A2=Al("vw"),b0={...We,parse:n=>We.parse(n)/100,transform:n=>We.transform(n*100)},sn={test:Ru("hsl","hue"),parse:ig("hue","saturation","lightness"),transform:({hue:n,saturation:l,lightness:r,alpha:o=1})=>"hsla("+Math.round(n)+", "+We.transform(pl(l))+", "+We.transform(pl(r))+", "+pl(vl.transform(o))+")"},Kt={test:n=>yi.test(n)||tu.test(n)||sn.test(n),parse:n=>yi.test(n)?yi.parse(n):sn.test(n)?sn.parse(n):tu.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?yi.transform(n):sn.transform(n),getAnimatableNone:n=>{const l=Kt.parse(n);return l.alpha=0,Kt.transform(l)}},M2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function z2(n){return isNaN(n)&&typeof n=="string"&&(n.match(_u)?.length||0)+(n.match(M2)?.length||0)>0}const ng="number",lg="color",E2="var",D2="var(",v0="${}",C2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Sl(n){const l=n.toString(),r=[],o={color:[],number:[],var:[]},f=[];let m=0;const x=l.replace(C2,y=>(Kt.test(y)?(o.color.push(m),f.push(lg),r.push(Kt.parse(y))):y.startsWith(D2)?(o.var.push(m),f.push(E2),r.push(y)):(o.number.push(m),f.push(ng),r.push(parseFloat(y))),++m,v0)).split(v0);return{values:r,split:x,indexes:o,types:f}}function sg(n){return Sl(n).values}function rg(n){const{split:l,types:r}=Sl(n),o=l.length;return f=>{let m="";for(let h=0;h<o;h++)if(m+=l[h],f[h]!==void 0){const x=r[h];x===ng?m+=pl(f[h]):x===lg?m+=Kt.transform(f[h]):m+=f[h]}return m}}const k2=n=>typeof n=="number"?0:Kt.test(n)?Kt.getAnimatableNone(n):n;function O2(n){const l=sg(n);return rg(n)(l.map(k2))}const Ja={test:z2,parse:sg,createTransformer:rg,getAnimatableNone:O2};function Lc(n,l,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(l-n)*6*r:r<1/2?l:r<2/3?n+(l-n)*(2/3-r)*6:n}function _2({hue:n,saturation:l,lightness:r,alpha:o}){n/=360,l/=100,r/=100;let f=0,m=0,h=0;if(!l)f=m=h=r;else{const x=r<.5?r*(1+l):r+l-r*l,y=2*r-x;f=Lc(y,x,n+1/3),m=Lc(y,x,n),h=Lc(y,x,n-1/3)}return{red:Math.round(f*255),green:Math.round(m*255),blue:Math.round(h*255),alpha:o}}function tr(n,l){return r=>r>0?l:n}const Ot=(n,l,r)=>n+(l-n)*r,qc=(n,l,r)=>{const o=n*n,f=r*(l*l-o)+o;return f<0?0:Math.sqrt(f)},R2=[tu,yi,sn],V2=n=>R2.find(l=>l.test(n));function S0(n){const l=V2(n);if(!l)return!1;let r=l.parse(n);return l===sn&&(r=_2(r)),r}const j0=(n,l)=>{const r=S0(n),o=S0(l);if(!r||!o)return tr(n,l);const f={...r};return m=>(f.red=qc(r.red,o.red,m),f.green=qc(r.green,o.green,m),f.blue=qc(r.blue,o.blue,m),f.alpha=Ot(r.alpha,o.alpha,m),yi.transform(f))},eu=new Set(["none","hidden"]);function U2(n,l){return eu.has(n)?r=>r<=0?n:l:r=>r>=1?l:n}function B2(n,l){return r=>Ot(n,l,r)}function Vu(n){return typeof n=="number"?B2:typeof n=="string"?Ou(n)?tr:Kt.test(n)?j0:q2:Array.isArray(n)?og:typeof n=="object"?Kt.test(n)?j0:H2:tr}function og(n,l){const r=[...n],o=r.length,f=n.map((m,h)=>Vu(m)(m,l[h]));return m=>{for(let h=0;h<o;h++)r[h]=f[h](m);return r}}function H2(n,l){const r={...n,...l},o={};for(const f in r)n[f]!==void 0&&l[f]!==void 0&&(o[f]=Vu(n[f])(n[f],l[f]));return f=>{for(const m in o)r[m]=o[m](f);return r}}function L2(n,l){const r=[],o={color:0,var:0,number:0};for(let f=0;f<l.values.length;f++){const m=l.types[f],h=n.indexes[m][o[m]],x=n.values[h]??0;r[f]=x,o[m]++}return r}const q2=(n,l)=>{const r=Ja.createTransformer(l),o=Sl(n),f=Sl(l);return o.indexes.var.length===f.indexes.var.length&&o.indexes.color.length===f.indexes.color.length&&o.indexes.number.length>=f.indexes.number.length?eu.has(n)&&!f.values.length||eu.has(l)&&!o.values.length?U2(n,l):Nl(og(L2(o,f),f.values),r):tr(n,l)};function cg(n,l,r){return typeof n=="number"&&typeof l=="number"&&typeof r=="number"?Ot(n,l,r):Vu(n)(n,l)}const G2=n=>{const l=({timestamp:r})=>n(r);return{start:(r=!0)=>Ct.update(l,r),stop:()=>Za(l),now:()=>ae.isProcessing?ae.timestamp:re.now()}},ug=(n,l,r=10)=>{let o="";const f=Math.max(Math.round(l/r),2);for(let m=0;m<f;m++)o+=Math.round(n(m/(f-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},er=2e4;function Uu(n){let l=0;const r=50;let o=n.next(l);for(;!o.done&&l<er;)l+=r,o=n.next(l);return l>=er?1/0:l}function Y2(n,l=100,r){const o=r({...n,keyframes:[0,l]}),f=Math.min(Uu(o),er);return{type:"keyframes",ease:m=>o.next(f*m).value/l,duration:Le(f)}}const X2=5;function fg(n,l,r){const o=Math.max(l-X2,0);return Yp(r-n(o),l-o)}const Vt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Gc=.001;function Q2({duration:n=Vt.duration,bounce:l=Vt.bounce,velocity:r=Vt.velocity,mass:o=Vt.mass}){let f,m,h=1-l;h=Ie(Vt.minDamping,Vt.maxDamping,h),n=Ie(Vt.minDuration,Vt.maxDuration,Le(n)),h<1?(f=g=>{const b=g*h,v=b*n,j=b-r,k=au(g,h),B=Math.exp(-v);return Gc-j/k*B},m=g=>{const v=g*h*n,j=v*r+r,k=Math.pow(h,2)*Math.pow(g,2)*n,B=Math.exp(-v),L=au(Math.pow(g,2),h);return(-f(g)+Gc>0?-1:1)*((j-k)*B)/L}):(f=g=>{const b=Math.exp(-g*n),v=(g-r)*n+1;return-Gc+b*v},m=g=>{const b=Math.exp(-g*n),v=(r-g)*(n*n);return b*v});const x=5/n,y=Z2(f,m,x);if(n=xa(n),isNaN(y))return{stiffness:Vt.stiffness,damping:Vt.damping,duration:n};{const g=Math.pow(y,2)*o;return{stiffness:g,damping:h*2*Math.sqrt(o*g),duration:n}}}const K2=12;function Z2(n,l,r){let o=r;for(let f=1;f<K2;f++)o=o-n(o)/l(o);return o}function au(n,l){return n*Math.sqrt(1-l*l)}const J2=["duration","bounce"],F2=["stiffness","damping","mass"];function T0(n,l){return l.some(r=>n[r]!==void 0)}function P2(n){let l={velocity:Vt.velocity,stiffness:Vt.stiffness,damping:Vt.damping,mass:Vt.mass,isResolvedFromDuration:!1,...n};if(!T0(n,F2)&&T0(n,J2))if(n.visualDuration){const r=n.visualDuration,o=2*Math.PI/(r*1.2),f=o*o,m=2*Ie(.05,1,1-(n.bounce||0))*Math.sqrt(f);l={...l,mass:Vt.mass,stiffness:f,damping:m}}else{const r=Q2(n);l={...l,...r,mass:Vt.mass},l.isResolvedFromDuration=!0}return l}function ar(n=Vt.visualDuration,l=Vt.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:l}:n;let{restSpeed:o,restDelta:f}=r;const m=r.keyframes[0],h=r.keyframes[r.keyframes.length-1],x={done:!1,value:m},{stiffness:y,damping:g,mass:b,duration:v,velocity:j,isResolvedFromDuration:k}=P2({...r,velocity:-Le(r.velocity||0)}),B=j||0,L=g/(2*Math.sqrt(y*b)),G=h-m,q=Le(Math.sqrt(y/b)),K=Math.abs(G)<5;o||(o=K?Vt.restSpeed.granular:Vt.restSpeed.default),f||(f=K?Vt.restDelta.granular:Vt.restDelta.default);let R;if(L<1){const F=au(q,L);R=nt=>{const tt=Math.exp(-L*q*nt);return h-tt*((B+L*q*G)/F*Math.sin(F*nt)+G*Math.cos(F*nt))}}else if(L===1)R=F=>h-Math.exp(-q*F)*(G+(B+q*G)*F);else{const F=q*Math.sqrt(L*L-1);R=nt=>{const tt=Math.exp(-L*q*nt),P=Math.min(F*nt,300);return h-tt*((B+L*q*G)*Math.sinh(P)+F*G*Math.cosh(P))/F}}const Q={calculatedDuration:k&&v||null,next:F=>{const nt=R(F);if(k)x.done=F>=v;else{let tt=F===0?B:0;L<1&&(tt=F===0?xa(B):fg(R,F,nt));const P=Math.abs(tt)<=o,st=Math.abs(h-nt)<=f;x.done=P&&st}return x.value=x.done?h:nt,x},toString:()=>{const F=Math.min(Uu(Q),er),nt=ug(tt=>Q.next(F*tt).value,F,30);return F+"ms "+nt},toTransition:()=>{}};return Q}ar.applyToOptions=n=>{const l=Y2(n,100,ar);return n.ease=l.ease,n.duration=xa(l.duration),n.type="keyframes",n};function iu({keyframes:n,velocity:l=0,power:r=.8,timeConstant:o=325,bounceDamping:f=10,bounceStiffness:m=500,modifyTarget:h,min:x,max:y,restDelta:g=.5,restSpeed:b}){const v=n[0],j={done:!1,value:v},k=P=>x!==void 0&&P<x||y!==void 0&&P>y,B=P=>x===void 0?y:y===void 0||Math.abs(x-P)<Math.abs(y-P)?x:y;let L=r*l;const G=v+L,q=h===void 0?G:h(G);q!==G&&(L=q-v);const K=P=>-L*Math.exp(-P/o),R=P=>q+K(P),Q=P=>{const st=K(P),zt=R(P);j.done=Math.abs(st)<=g,j.value=j.done?q:zt};let F,nt;const tt=P=>{k(j.value)&&(F=P,nt=ar({keyframes:[j.value,B(j.value)],velocity:fg(R,P,j.value),damping:f,stiffness:m,restDelta:g,restSpeed:b}))};return tt(0),{calculatedDuration:null,next:P=>{let st=!1;return!nt&&F===void 0&&(st=!0,Q(P),tt(P)),F!==void 0&&P>=F?nt.next(P-F):(!st&&Q(P),j)}}}function $2(n,l,r){const o=[],f=r||ba.mix||cg,m=n.length-1;for(let h=0;h<m;h++){let x=f(n[h],n[h+1]);if(l){const y=Array.isArray(l)?l[h]||qe:l;x=Nl(y,x)}o.push(x)}return o}function W2(n,l,{clamp:r=!0,ease:o,mixer:f}={}){const m=n.length;if(zu(m===l.length),m===1)return()=>l[0];if(m===2&&l[0]===l[1])return()=>l[1];const h=n[0]===n[1];n[0]>n[m-1]&&(n=[...n].reverse(),l=[...l].reverse());const x=$2(l,o,f),y=x.length,g=b=>{if(h&&b<n[0])return l[0];let v=0;if(y>1)for(;v<n.length-2&&!(b<n[v+1]);v++);const j=bl(n[v],n[v+1],b);return x[v](j)};return r?b=>g(Ie(n[0],n[m-1],b)):g}function I2(n,l){const r=n[n.length-1];for(let o=1;o<=l;o++){const f=bl(0,l,o);n.push(Ot(r,1,f))}}function tx(n){const l=[0];return I2(l,n.length-1),l}function ex(n,l){return n.map(r=>r*l)}function ax(n,l){return n.map(()=>l||Wp).splice(0,n.length-1)}function gl({duration:n=300,keyframes:l,times:r,ease:o="easeInOut"}){const f=h2(o)?o.map(y0):y0(o),m={done:!1,value:l[0]},h=ex(r&&r.length===l.length?r:tx(l),n),x=W2(h,l,{ease:Array.isArray(f)?f:ax(l,f)});return{calculatedDuration:n,next:y=>(m.value=x(y),m.done=y>=n,m)}}const ix=n=>n!==null;function Bu(n,{repeat:l,repeatType:r="loop"},o,f=1){const m=n.filter(ix),x=f<0||l&&r!=="loop"&&l%2===1?0:m.length-1;return!x||o===void 0?m[x]:o}const nx={decay:iu,inertia:iu,tween:gl,keyframes:gl,spring:ar};function dg(n){typeof n.type=="string"&&(n.type=nx[n.type])}class Hu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(l=>{this.resolve=l})}notifyFinished(){this.resolve()}then(l,r){return this.finished.then(l,r)}}const lx=n=>n/100;class Lu extends Hu{constructor(l){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:r}=this.options;r&&r.updatedAt!==re.now()&&this.tick(re.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=l,this.initAnimation(),this.play(),l.autoplay===!1&&this.pause()}initAnimation(){const{options:l}=this;dg(l);const{type:r=gl,repeat:o=0,repeatDelay:f=0,repeatType:m,velocity:h=0}=l;let{keyframes:x}=l;const y=r||gl;y!==gl&&typeof x[0]!="number"&&(this.mixKeyframes=Nl(lx,cg(x[0],x[1])),x=[0,100]);const g=y({...l,keyframes:x});m==="mirror"&&(this.mirroredGenerator=y({...l,keyframes:[...x].reverse(),velocity:-h})),g.calculatedDuration===null&&(g.calculatedDuration=Uu(g));const{calculatedDuration:b}=g;this.calculatedDuration=b,this.resolvedDuration=b+f,this.totalDuration=this.resolvedDuration*(o+1)-f,this.generator=g}updateTime(l){const r=Math.round(l-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(l,r=!1){const{generator:o,totalDuration:f,mixKeyframes:m,mirroredGenerator:h,resolvedDuration:x,calculatedDuration:y}=this;if(this.startTime===null)return o.next(0);const{delay:g=0,keyframes:b,repeat:v,repeatType:j,repeatDelay:k,type:B,onUpdate:L,finalKeyframe:G}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,l):this.speed<0&&(this.startTime=Math.min(l-f/this.speed,this.startTime)),r?this.currentTime=l:this.updateTime(l);const q=this.currentTime-g*(this.playbackSpeed>=0?1:-1),K=this.playbackSpeed>=0?q<0:q>f;this.currentTime=Math.max(q,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=f);let R=this.currentTime,Q=o;if(v){const P=Math.min(this.currentTime,f)/x;let st=Math.floor(P),zt=P%1;!zt&&P>=1&&(zt=1),zt===1&&st--,st=Math.min(st,v+1),st%2&&(j==="reverse"?(zt=1-zt,k&&(zt-=k/x)):j==="mirror"&&(Q=h)),R=Ie(0,1,zt)*x}const F=K?{done:!1,value:b[0]}:Q.next(R);m&&(F.value=m(F.value));let{done:nt}=F;!K&&y!==null&&(nt=this.playbackSpeed>=0?this.currentTime>=f:this.currentTime<=0);const tt=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&nt);return tt&&B!==iu&&(F.value=Bu(b,this.options,G,this.speed)),L&&L(F.value),tt&&this.finish(),F}then(l,r){return this.finished.then(l,r)}get duration(){return Le(this.calculatedDuration)}get iterationDuration(){const{delay:l=0}=this.options||{};return this.duration+Le(l)}get time(){return Le(this.currentTime)}set time(l){l=xa(l),this.currentTime=l,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=l:this.driver&&(this.startTime=this.driver.now()-l/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(l){this.updateTime(re.now());const r=this.playbackSpeed!==l;this.playbackSpeed=l,r&&(this.time=Le(this.currentTime))}play(){if(this.isStopped)return;const{driver:l=G2,startTime:r}=this.options;this.driver||(this.driver=l(f=>this.tick(f))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=r??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(re.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(l){return this.startTime=0,this.tick(l,!0)}attachTimeline(l){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),l.observe(this)}}function sx(n){for(let l=1;l<n.length;l++)n[l]??(n[l]=n[l-1])}const xi=n=>n*180/Math.PI,nu=n=>{const l=xi(Math.atan2(n[1],n[0]));return lu(l)},rx={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:nu,rotateZ:nu,skewX:n=>xi(Math.atan(n[1])),skewY:n=>xi(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},lu=n=>(n=n%360,n<0&&(n+=360),n),N0=nu,w0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),A0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),ox={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:w0,scaleY:A0,scale:n=>(w0(n)+A0(n))/2,rotateX:n=>lu(xi(Math.atan2(n[6],n[5]))),rotateY:n=>lu(xi(Math.atan2(-n[2],n[0]))),rotateZ:N0,rotate:N0,skewX:n=>xi(Math.atan(n[4])),skewY:n=>xi(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function su(n){return n.includes("scale")?1:0}function ru(n,l){if(!n||n==="none")return su(l);const r=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,f;if(r)o=ox,f=r;else{const x=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=rx,f=x}if(!f)return su(l);const m=o[l],h=f[1].split(",").map(ux);return typeof m=="function"?m(h):h[m]}const cx=(n,l)=>{const{transform:r="none"}=getComputedStyle(n);return ru(r,l)};function ux(n){return parseFloat(n.trim())}const mn=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],pn=new Set(mn),M0=n=>n===hn||n===J,fx=new Set(["x","y","z"]),dx=mn.filter(n=>!fx.has(n));function hx(n){const l=[];return dx.forEach(r=>{const o=n.getValue(r);o!==void 0&&(l.push([r,o.get()]),o.set(r.startsWith("scale")?1:0))}),l}const Ka={width:({x:n},{paddingLeft:l="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(l)-parseFloat(r),height:({y:n},{paddingTop:l="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(l)-parseFloat(r),top:(n,{top:l})=>parseFloat(l),left:(n,{left:l})=>parseFloat(l),bottom:({y:n},{top:l})=>parseFloat(l)+(n.max-n.min),right:({x:n},{left:l})=>parseFloat(l)+(n.max-n.min),x:(n,{transform:l})=>ru(l,"x"),y:(n,{transform:l})=>ru(l,"y")};Ka.translateX=Ka.x;Ka.translateY=Ka.y;const bi=new Set;let ou=!1,cu=!1,uu=!1;function hg(){if(cu){const n=Array.from(bi).filter(o=>o.needsMeasurement),l=new Set(n.map(o=>o.element)),r=new Map;l.forEach(o=>{const f=hx(o);f.length&&(r.set(o,f),o.render())}),n.forEach(o=>o.measureInitialState()),l.forEach(o=>{o.render();const f=r.get(o);f&&f.forEach(([m,h])=>{o.getValue(m)?.set(h)})}),n.forEach(o=>o.measureEndState()),n.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}cu=!1,ou=!1,bi.forEach(n=>n.complete(uu)),bi.clear()}function mg(){bi.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(cu=!0)})}function mx(){uu=!0,mg(),hg(),uu=!1}class qu{constructor(l,r,o,f,m,h=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...l],this.onComplete=r,this.name=o,this.motionValue=f,this.element=m,this.isAsync=h}scheduleResolve(){this.state="scheduled",this.isAsync?(bi.add(this),ou||(ou=!0,Ct.read(mg),Ct.resolveKeyframes(hg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:l,name:r,element:o,motionValue:f}=this;if(l[0]===null){const m=f?.get(),h=l[l.length-1];if(m!==void 0)l[0]=m;else if(o&&r){const x=o.readValue(r,h);x!=null&&(l[0]=x)}l[0]===void 0&&(l[0]=h),f&&m===void 0&&f.set(l[0])}sx(l)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(l=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,l),bi.delete(this)}cancel(){this.state==="scheduled"&&(bi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const px=n=>n.startsWith("--");function gx(n,l,r){px(l)?n.style.setProperty(l,r):n.style[l]=r}const yx=Eu(()=>window.ScrollTimeline!==void 0),xx={};function bx(n,l){const r=Eu(n);return()=>xx[l]??r()}const pg=bx(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),hl=([n,l,r,o])=>`cubic-bezier(${n}, ${l}, ${r}, ${o})`,z0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:hl([0,.65,.55,1]),circOut:hl([.55,0,1,.45]),backIn:hl([.31,.01,.66,-.59]),backOut:hl([.33,1.53,.69,.99])};function gg(n,l){if(n)return typeof n=="function"?pg()?ug(n,l):"ease-out":Ip(n)?hl(n):Array.isArray(n)?n.map(r=>gg(r,l)||z0.easeOut):z0[n]}function vx(n,l,r,{delay:o=0,duration:f=300,repeat:m=0,repeatType:h="loop",ease:x="easeOut",times:y}={},g=void 0){const b={[l]:r};y&&(b.offset=y);const v=gg(x,f);Array.isArray(v)&&(b.easing=v);const j={delay:o,duration:f,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:m+1,direction:h==="reverse"?"alternate":"normal"};return g&&(j.pseudoElement=g),n.animate(b,j)}function yg(n){return typeof n=="function"&&"applyToOptions"in n}function Sx({type:n,...l}){return yg(n)&&pg()?n.applyToOptions(l):(l.duration??(l.duration=300),l.ease??(l.ease="easeOut"),l)}class jx extends Hu{constructor(l){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!l)return;const{element:r,name:o,keyframes:f,pseudoElement:m,allowFlatten:h=!1,finalKeyframe:x,onComplete:y}=l;this.isPseudoElement=!!m,this.allowFlatten=h,this.options=l,zu(typeof l.type!="string");const g=Sx(l);this.animation=vx(r,o,f,g,m),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!m){const b=Bu(f,this.options,x,this.speed);this.updateMotionValue?this.updateMotionValue(b):gx(r,o,b),this.animation.cancel()}y?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:l}=this;l==="idle"||l==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const l=this.animation.effect?.getComputedTiming?.().duration||0;return Le(Number(l))}get iterationDuration(){const{delay:l=0}=this.options||{};return this.duration+Le(l)}get time(){return Le(Number(this.animation.currentTime)||0)}set time(l){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=xa(l)}get speed(){return this.animation.playbackRate}set speed(l){l<0&&(this.finishedTime=null),this.animation.playbackRate=l}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(l){this.manualStartTime=this.animation.startTime=l}attachTimeline({timeline:l,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,l&&yx()?(this.animation.timeline=l,qe):r(this)}}const xg={anticipate:Fp,backInOut:Jp,circInOut:$p};function Tx(n){return n in xg}function Nx(n){typeof n.ease=="string"&&Tx(n.ease)&&(n.ease=xg[n.ease])}const Yc=10;class wx extends jx{constructor(l){Nx(l),dg(l),super(l),l.startTime!==void 0&&(this.startTime=l.startTime),this.options=l}updateMotionValue(l){const{motionValue:r,onUpdate:o,onComplete:f,element:m,...h}=this.options;if(!r)return;if(l!==void 0){r.set(l);return}const x=new Lu({...h,autoplay:!1}),y=Math.max(Yc,re.now()-this.startTime),g=Ie(0,Yc,y-Yc);r.setWithVelocity(x.sample(Math.max(0,y-g)).value,x.sample(y).value,g),x.stop()}}const E0=(n,l)=>l==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ja.test(n)||n==="0")&&!n.startsWith("url("));function Ax(n){const l=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==l)return!0}function Mx(n,l,r,o){const f=n[0];if(f===null)return!1;if(l==="display"||l==="visibility")return!0;const m=n[n.length-1],h=E0(f,l),x=E0(m,l);return!h||!x?!1:Ax(n)||(r==="spring"||yg(r))&&o}function fu(n){n.duration=0,n.type="keyframes"}const zx=new Set(["opacity","clipPath","filter","transform"]),Ex=Eu(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Dx(n){const{motionValue:l,name:r,repeatDelay:o,repeatType:f,damping:m,type:h}=n;if(!(l?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=l.owner.getProps();return Ex()&&r&&zx.has(r)&&(r!=="transform"||!g)&&!y&&!o&&f!=="mirror"&&m!==0&&h!=="inertia"}const Cx=40;class kx extends Hu{constructor({autoplay:l=!0,delay:r=0,type:o="keyframes",repeat:f=0,repeatDelay:m=0,repeatType:h="loop",keyframes:x,name:y,motionValue:g,element:b,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=re.now();const j={autoplay:l,delay:r,type:o,repeat:f,repeatDelay:m,repeatType:h,name:y,motionValue:g,element:b,...v},k=b?.KeyframeResolver||qu;this.keyframeResolver=new k(x,(B,L,G)=>this.onKeyframesResolved(B,L,j,!G),y,g,b),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(l,r,o,f){this.keyframeResolver=void 0;const{name:m,type:h,velocity:x,delay:y,isHandoff:g,onUpdate:b}=o;this.resolvedAt=re.now(),Mx(l,m,h,x)||((ba.instantAnimations||!y)&&b?.(Bu(l,o,r)),l[0]=l[l.length-1],fu(o),o.repeat=0);const j={startTime:f?this.resolvedAt?this.resolvedAt-this.createdAt>Cx?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...o,keyframes:l},k=!g&&Dx(j),B=j.motionValue?.owner?.current,L=k?new wx({...j,element:B}):new Lu(j);L.finished.then(()=>{this.notifyFinished()}).catch(qe),this.pendingTimeline&&(this.stopTimeline=L.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=L}get finished(){return this._animation?this.animation.finished:this._finished}then(l,r){return this.finished.finally(l).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),mx()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(l){this.animation.time=l}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(l){this.animation.speed=l}get startTime(){return this.animation.startTime}attachTimeline(l){return this._animation?this.stopTimeline=this.animation.attachTimeline(l):this.pendingTimeline=l,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function bg(n,l,r,o=0,f=1){const m=Array.from(n).sort((g,b)=>g.sortNodePosition(b)).indexOf(l),h=n.size,x=(h-1)*o;return typeof r=="function"?r(m,h):f===1?m*o:x-m*o}const Ox=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function _x(n){const l=Ox.exec(n);if(!l)return[,];const[,r,o,f]=l;return[`--${r??o}`,f]}function vg(n,l,r=1){const[o,f]=_x(n);if(!o)return;const m=window.getComputedStyle(l).getPropertyValue(o);if(m){const h=m.trim();return Lp(h)?parseFloat(h):h}return Ou(f)?vg(f,l,r+1):f}const Rx={type:"spring",stiffness:500,damping:25,restSpeed:10},Vx=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Ux={type:"keyframes",duration:.8},Bx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Hx=(n,{keyframes:l})=>l.length>2?Ux:pn.has(n)?n.startsWith("scale")?Vx(l[1]):Rx:Bx,Lx=n=>n!==null;function qx(n,{repeat:l,repeatType:r="loop"},o){const f=n.filter(Lx),m=l&&r!=="loop"&&l%2===1?0:f.length-1;return f[m]}function Gu(n,l){return n?.[l]??n?.default??n}function Gx({when:n,delay:l,delayChildren:r,staggerChildren:o,staggerDirection:f,repeat:m,repeatType:h,repeatDelay:x,from:y,elapsed:g,...b}){return!!Object.keys(b).length}const Yu=(n,l,r,o={},f,m)=>h=>{const x=Gu(o,n)||{},y=x.delay||o.delay||0;let{elapsed:g=0}=o;g=g-xa(y);const b={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:l.getVelocity(),...x,delay:-g,onUpdate:j=>{l.set(j),x.onUpdate&&x.onUpdate(j)},onComplete:()=>{h(),x.onComplete&&x.onComplete()},name:n,motionValue:l,element:m?void 0:f};Gx(x)||Object.assign(b,Hx(n,b)),b.duration&&(b.duration=xa(b.duration)),b.repeatDelay&&(b.repeatDelay=xa(b.repeatDelay)),b.from!==void 0&&(b.keyframes[0]=b.from);let v=!1;if((b.type===!1||b.duration===0&&!b.repeatDelay)&&(fu(b),b.delay===0&&(v=!0)),(ba.instantAnimations||ba.skipAnimations)&&(v=!0,fu(b),b.delay=0),b.allowFlatten=!x.type&&!x.ease,v&&!m&&l.get()!==void 0){const j=qx(b.keyframes,x);if(j!==void 0){Ct.update(()=>{b.onUpdate(j),b.onComplete()});return}}return x.isSync?new Lu(b):new kx(b)};function D0(n){const l=[{},{}];return n?.values.forEach((r,o)=>{l[0][o]=r.get(),l[1][o]=r.getVelocity()}),l}function Xu(n,l,r,o){if(typeof l=="function"){const[f,m]=D0(o);l=l(r!==void 0?r:n.custom,f,m)}if(typeof l=="string"&&(l=n.variants&&n.variants[l]),typeof l=="function"){const[f,m]=D0(o);l=l(r!==void 0?r:n.custom,f,m)}return l}function un(n,l,r){const o=n.getProps();return Xu(o,l,r!==void 0?r:o.custom,n)}const Sg=new Set(["width","height","top","left","right","bottom",...mn]),C0=30,Yx=n=>!isNaN(parseFloat(n));class Xx{constructor(l,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const f=re.now();if(this.updatedAt!==f&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const m of this.dependents)m.dirty()},this.hasAnimated=!1,this.setCurrent(l),this.owner=r.owner}setCurrent(l){this.current=l,this.updatedAt=re.now(),this.canTrackVelocity===null&&l!==void 0&&(this.canTrackVelocity=Yx(this.current))}setPrevFrameValue(l=this.current){this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt}onChange(l){return this.on("change",l)}on(l,r){this.events[l]||(this.events[l]=new Du);const o=this.events[l].add(r);return l==="change"?()=>{o(),Ct.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const l in this.events)this.events[l].clear()}attach(l,r){this.passiveEffect=l,this.stopPassiveEffect=r}set(l){this.passiveEffect?this.passiveEffect(l,this.updateAndNotify):this.updateAndNotify(l)}setWithVelocity(l,r,o){this.set(r),this.prev=void 0,this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt-o}jump(l,r=!0){this.updateAndNotify(l),this.prev=l,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(l){this.dependents||(this.dependents=new Set),this.dependents.add(l)}removeDependent(l){this.dependents&&this.dependents.delete(l)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const l=re.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||l-this.updatedAt>C0)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,C0);return Yp(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(l){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=l(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fn(n,l){return new Xx(n,l)}const du=n=>Array.isArray(n);function Qx(n,l,r){n.hasValue(l)?n.getValue(l).set(r):n.addValue(l,fn(r))}function Kx(n){return du(n)?n[n.length-1]||0:n}function Zx(n,l){const r=un(n,l);let{transitionEnd:o={},transition:f={},...m}=r||{};m={...m,...o};for(const h in m){const x=Kx(m[h]);Qx(n,h,x)}}const ne=n=>!!(n&&n.getVelocity);function Jx(n){return!!(ne(n)&&n.add)}function hu(n,l){const r=n.getValue("willChange");if(Jx(r))return r.add(l);if(!r&&ba.WillChange){const o=new ba.WillChange("auto");n.addValue("willChange",o),o.add(l)}}function Qu(n){return n.replace(/([A-Z])/g,l=>`-${l.toLowerCase()}`)}const Fx="framerAppearId",jg="data-"+Qu(Fx);function Tg(n){return n.props[jg]}function Px({protectedKeys:n,needsAnimating:l},r){const o=n.hasOwnProperty(r)&&l[r]!==!0;return l[r]=!1,o}function Ng(n,l,{delay:r=0,transitionOverride:o,type:f}={}){let{transition:m=n.getDefaultTransition(),transitionEnd:h,...x}=l;o&&(m=o);const y=[],g=f&&n.animationState&&n.animationState.getState()[f];for(const b in x){const v=n.getValue(b,n.latestValues[b]??null),j=x[b];if(j===void 0||g&&Px(g,b))continue;const k={delay:r,...Gu(m||{},b)},B=v.get();if(B!==void 0&&!v.isAnimating&&!Array.isArray(j)&&j===B&&!k.velocity)continue;let L=!1;if(window.MotionHandoffAnimation){const q=Tg(n);if(q){const K=window.MotionHandoffAnimation(q,b,Ct);K!==null&&(k.startTime=K,L=!0)}}hu(n,b),v.start(Yu(b,v,j,n.shouldReduceMotion&&Sg.has(b)?{type:!1}:k,n,L));const G=v.animation;G&&y.push(G)}return h&&Promise.all(y).then(()=>{Ct.update(()=>{h&&Zx(n,h)})}),y}function mu(n,l,r={}){const o=un(n,l,r.type==="exit"?n.presenceContext?.custom:void 0);let{transition:f=n.getDefaultTransition()||{}}=o||{};r.transitionOverride&&(f=r.transitionOverride);const m=o?()=>Promise.all(Ng(n,o,r)):()=>Promise.resolve(),h=n.variantChildren&&n.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:b,staggerDirection:v}=f;return $x(n,l,y,g,b,v,r)}:()=>Promise.resolve(),{when:x}=f;if(x){const[y,g]=x==="beforeChildren"?[m,h]:[h,m];return y().then(()=>g())}else return Promise.all([m(),h(r.delay)])}function $x(n,l,r=0,o=0,f=0,m=1,h){const x=[];for(const y of n.variantChildren)y.notify("AnimationStart",l),x.push(mu(y,l,{...h,delay:r+(typeof o=="function"?0:o)+bg(n.variantChildren,y,o,f,m)}).then(()=>y.notify("AnimationComplete",l)));return Promise.all(x)}function Wx(n,l,r={}){n.notify("AnimationStart",l);let o;if(Array.isArray(l)){const f=l.map(m=>mu(n,m,r));o=Promise.all(f)}else if(typeof l=="string")o=mu(n,l,r);else{const f=typeof l=="function"?un(n,l,r.custom):l;o=Promise.all(Ng(n,f,r))}return o.then(()=>{n.notify("AnimationComplete",l)})}const Ix={test:n=>n==="auto",parse:n=>n},wg=n=>l=>l.test(n),Ag=[hn,J,We,Qa,A2,w2,Ix],k0=n=>Ag.find(wg(n));function tb(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Gp(n):!0}const eb=new Set(["brightness","contrast","saturate","opacity"]);function ab(n){const[l,r]=n.slice(0,-1).split("(");if(l==="drop-shadow")return n;const[o]=r.match(_u)||[];if(!o)return n;const f=r.replace(o,"");let m=eb.has(l)?1:0;return o!==r&&(m*=100),l+"("+m+f+")"}const ib=/\b([a-z-]*)\(.*?\)/gu,pu={...Ja,getAnimatableNone:n=>{const l=n.match(ib);return l?l.map(ab).join(" "):n}},O0={...hn,transform:Math.round},nb={rotate:Qa,rotateX:Qa,rotateY:Qa,rotateZ:Qa,scale:Zs,scaleX:Zs,scaleY:Zs,scaleZ:Zs,skew:Qa,skewX:Qa,skewY:Qa,distance:J,translateX:J,translateY:J,translateZ:J,x:J,y:J,z:J,perspective:J,transformPerspective:J,opacity:vl,originX:b0,originY:b0,originZ:J},Ku={borderWidth:J,borderTopWidth:J,borderRightWidth:J,borderBottomWidth:J,borderLeftWidth:J,borderRadius:J,borderTopLeftRadius:J,borderTopRightRadius:J,borderBottomRightRadius:J,borderBottomLeftRadius:J,width:J,maxWidth:J,height:J,maxHeight:J,top:J,right:J,bottom:J,left:J,inset:J,insetBlock:J,insetBlockStart:J,insetBlockEnd:J,insetInline:J,insetInlineStart:J,insetInlineEnd:J,padding:J,paddingTop:J,paddingRight:J,paddingBottom:J,paddingLeft:J,paddingBlock:J,paddingBlockStart:J,paddingBlockEnd:J,paddingInline:J,paddingInlineStart:J,paddingInlineEnd:J,margin:J,marginTop:J,marginRight:J,marginBottom:J,marginLeft:J,marginBlock:J,marginBlockStart:J,marginBlockEnd:J,marginInline:J,marginInlineStart:J,marginInlineEnd:J,fontSize:J,backgroundPositionX:J,backgroundPositionY:J,...nb,zIndex:O0,fillOpacity:vl,strokeOpacity:vl,numOctaves:O0},lb={...Ku,color:Kt,backgroundColor:Kt,outlineColor:Kt,fill:Kt,stroke:Kt,borderColor:Kt,borderTopColor:Kt,borderRightColor:Kt,borderBottomColor:Kt,borderLeftColor:Kt,filter:pu,WebkitFilter:pu},Mg=n=>lb[n];function zg(n,l){let r=Mg(n);return r!==pu&&(r=Ja),r.getAnimatableNone?r.getAnimatableNone(l):void 0}const sb=new Set(["auto","none","0"]);function rb(n,l,r){let o=0,f;for(;o<n.length&&!f;){const m=n[o];typeof m=="string"&&!sb.has(m)&&Sl(m).values.length&&(f=n[o]),o++}if(f&&r)for(const m of l)n[m]=zg(r,f)}class ob extends qu{constructor(l,r,o,f,m){super(l,r,o,f,m,!0)}readKeyframes(){const{unresolvedKeyframes:l,element:r,name:o}=this;if(!r||!r.current)return;super.readKeyframes();for(let b=0;b<l.length;b++){let v=l[b];if(typeof v=="string"&&(v=v.trim(),Ou(v))){const j=vg(v,r.current);j!==void 0&&(l[b]=j),b===l.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!Sg.has(o)||l.length!==2)return;const[f,m]=l,h=k0(f),x=k0(m),y=x0(f),g=x0(m);if(y!==g&&Ka[o]){this.needsMeasurement=!0;return}if(h!==x)if(M0(h)&&M0(x))for(let b=0;b<l.length;b++){const v=l[b];typeof v=="string"&&(l[b]=parseFloat(v))}else Ka[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:l,name:r}=this,o=[];for(let f=0;f<l.length;f++)(l[f]===null||tb(l[f]))&&o.push(f);o.length&&rb(l,o,r)}measureInitialState(){const{element:l,unresolvedKeyframes:r,name:o}=this;if(!l||!l.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ka[o](l.measureViewportBox(),window.getComputedStyle(l.current)),r[0]=this.measuredOrigin;const f=r[r.length-1];f!==void 0&&l.getValue(o,f).jump(f,!1)}measureEndState(){const{element:l,name:r,unresolvedKeyframes:o}=this;if(!l||!l.current)return;const f=l.getValue(r);f&&f.jump(this.measuredOrigin,!1);const m=o.length-1,h=o[m];o[m]=Ka[r](l.measureViewportBox(),window.getComputedStyle(l.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),this.removedTransforms?.length&&this.removedTransforms.forEach(([x,y])=>{l.getValue(x).set(y)}),this.resolveNoneKeyframes()}}function cb(n,l,r){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let o=document;const f=r?.[n]??o.querySelectorAll(n);return f?Array.from(f):[]}return Array.from(n).filter(o=>o!=null)}const Eg=(n,l)=>l&&typeof n=="number"?l.transform(n):n;function gu(n){return qp(n)&&"offsetHeight"in n}const{schedule:Zu}=tg(queueMicrotask,!1),Ze={x:!1,y:!1};function Dg(){return Ze.x||Ze.y}function ub(n){return n==="x"||n==="y"?Ze[n]?null:(Ze[n]=!0,()=>{Ze[n]=!1}):Ze.x||Ze.y?null:(Ze.x=Ze.y=!0,()=>{Ze.x=Ze.y=!1})}function Cg(n,l){const r=cb(n),o=new AbortController,f={passive:!0,...l,signal:o.signal};return[r,f,()=>o.abort()]}function _0(n){return!(n.pointerType==="touch"||Dg())}function fb(n,l,r={}){const[o,f,m]=Cg(n,r),h=x=>{if(!_0(x))return;const{target:y}=x,g=l(y,x);if(typeof g!="function"||!y)return;const b=v=>{_0(v)&&(g(v),y.removeEventListener("pointerleave",b))};y.addEventListener("pointerleave",b,f)};return o.forEach(x=>{x.addEventListener("pointerenter",h,f)}),m}const kg=(n,l)=>l?n===l?!0:kg(n,l.parentElement):!1,Ju=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,db=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Og(n){return db.has(n.tagName)||n.isContentEditable===!0}const $s=new WeakSet;function R0(n){return l=>{l.key==="Enter"&&n(l)}}function Xc(n,l){n.dispatchEvent(new PointerEvent("pointer"+l,{isPrimary:!0,bubbles:!0}))}const hb=(n,l)=>{const r=n.currentTarget;if(!r)return;const o=R0(()=>{if($s.has(r))return;Xc(r,"down");const f=R0(()=>{Xc(r,"up")}),m=()=>Xc(r,"cancel");r.addEventListener("keyup",f,l),r.addEventListener("blur",m,l)});r.addEventListener("keydown",o,l),r.addEventListener("blur",()=>r.removeEventListener("keydown",o),l)};function V0(n){return Ju(n)&&!Dg()}function mb(n,l,r={}){const[o,f,m]=Cg(n,r),h=x=>{const y=x.currentTarget;if(!V0(x))return;$s.add(y);const g=l(y,x),b=(k,B)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",j),$s.has(y)&&$s.delete(y),V0(k)&&typeof g=="function"&&g(k,{success:B})},v=k=>{b(k,y===window||y===document||r.useGlobalTarget||kg(y,k.target))},j=k=>{b(k,!1)};window.addEventListener("pointerup",v,f),window.addEventListener("pointercancel",j,f)};return o.forEach(x=>{(r.useGlobalTarget?window:x).addEventListener("pointerdown",h,f),gu(x)&&(x.addEventListener("focus",g=>hb(g,f)),!Og(x)&&!x.hasAttribute("tabindex")&&(x.tabIndex=0))}),m}function _g(n){return qp(n)&&"ownerSVGElement"in n}function pb(n){return _g(n)&&n.tagName==="svg"}const gb=[...Ag,Kt,Ja],yb=n=>gb.find(wg(n)),U0=()=>({translate:0,scale:1,origin:0,originPoint:0}),rn=()=>({x:U0(),y:U0()}),B0=()=>({min:0,max:0}),Jt=()=>({x:B0(),y:B0()}),yu={current:null},Rg={current:!1},xb=typeof window<"u";function bb(){if(Rg.current=!0,!!xb)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),l=()=>yu.current=n.matches;n.addEventListener("change",l),l()}else yu.current=!1}const vb=new WeakMap;function or(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function jl(n){return typeof n=="string"||Array.isArray(n)}const Fu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Pu=["initial",...Fu];function cr(n){return or(n.animate)||Pu.some(l=>jl(n[l]))}function Vg(n){return!!(cr(n)||n.variants)}function Sb(n,l,r){for(const o in l){const f=l[o],m=r[o];if(ne(f))n.addValue(o,f);else if(ne(m))n.addValue(o,fn(f,{owner:n}));else if(m!==f)if(n.hasValue(o)){const h=n.getValue(o);h.liveStyle===!0?h.jump(f):h.hasAnimated||h.set(f)}else{const h=n.getStaticValue(o);n.addValue(o,fn(h!==void 0?h:f,{owner:n}))}}for(const o in r)l[o]===void 0&&n.removeValue(o);return l}const H0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ir={};function Ug(n){ir=n}function jb(){return ir}class Tb{scrapeMotionValuesFromProps(l,r,o){return{}}constructor({parent:l,props:r,presenceContext:o,reducedMotionConfig:f,blockInitialAnimation:m,visualState:h},x={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=qu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const j=re.now();this.renderScheduledAt<j&&(this.renderScheduledAt=j,Ct.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=h;this.latestValues=y,this.baseTarget={...y},this.initialValues=r.initial?{...y}:{},this.renderState=g,this.parent=l,this.props=r,this.presenceContext=o,this.depth=l?l.depth+1:0,this.reducedMotionConfig=f,this.options=x,this.blockInitialAnimation=!!m,this.isControllingVariants=cr(r),this.isVariantNode=Vg(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(l&&l.current);const{willChange:b,...v}=this.scrapeMotionValuesFromProps(r,{},this);for(const j in v){const k=v[j];y[j]!==void 0&&ne(k)&&k.set(y[j])}}mount(l){this.current=l,vb.set(l,this),this.projection&&!this.projection.instance&&this.projection.mount(l),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Rg.current||bb(),this.shouldReduceMotion=yu.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Za(this.notifyUpdate),Za(this.render),this.valueSubscriptions.forEach(l=>l()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const l in this.events)this.events[l].clear();for(const l in this.features){const r=this.features[l];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(l){this.children.add(l),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(l)}removeChild(l){this.children.delete(l),this.enteringChildren&&this.enteringChildren.delete(l)}bindToMotionValue(l,r){this.valueSubscriptions.has(l)&&this.valueSubscriptions.get(l)();const o=pn.has(l);o&&this.onBindTransform&&this.onBindTransform();const f=r.on("change",h=>{this.latestValues[l]=h,this.props.onUpdate&&Ct.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let m;typeof window<"u"&&window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,l,r)),this.valueSubscriptions.set(l,()=>{f(),m&&m(),r.owner&&r.stop()})}sortNodePosition(l){return!this.current||!this.sortInstanceNodePosition||this.type!==l.type?0:this.sortInstanceNodePosition(this.current,l.current)}updateFeatures(){let l="animation";for(l in ir){const r=ir[l];if(!r)continue;const{isEnabled:o,Feature:f}=r;if(!this.features[l]&&f&&o(this.props)&&(this.features[l]=new f(this)),this.features[l]){const m=this.features[l];m.isMounted?m.update():(m.mount(),m.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Jt()}getStaticValue(l){return this.latestValues[l]}setStaticValue(l,r){this.latestValues[l]=r}update(l,r){(l.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=l,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let o=0;o<H0.length;o++){const f=H0[o];this.propEventSubscriptions[f]&&(this.propEventSubscriptions[f](),delete this.propEventSubscriptions[f]);const m="on"+f,h=l[m];h&&(this.propEventSubscriptions[f]=this.on(f,h))}this.prevMotionValues=Sb(this,this.scrapeMotionValuesFromProps(l,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(l){return this.props.variants?this.props.variants[l]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(l){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(l),()=>r.variantChildren.delete(l)}addValue(l,r){const o=this.values.get(l);r!==o&&(o&&this.removeValue(l),this.bindToMotionValue(l,r),this.values.set(l,r),this.latestValues[l]=r.get())}removeValue(l){this.values.delete(l);const r=this.valueSubscriptions.get(l);r&&(r(),this.valueSubscriptions.delete(l)),delete this.latestValues[l],this.removeValueFromRenderState(l,this.renderState)}hasValue(l){return this.values.has(l)}getValue(l,r){if(this.props.values&&this.props.values[l])return this.props.values[l];let o=this.values.get(l);return o===void 0&&r!==void 0&&(o=fn(r===null?void 0:r,{owner:this}),this.addValue(l,o)),o}readValue(l,r){let o=this.latestValues[l]!==void 0||!this.current?this.latestValues[l]:this.getBaseTargetFromProps(this.props,l)??this.readValueFromInstance(this.current,l,this.options);return o!=null&&(typeof o=="string"&&(Lp(o)||Gp(o))?o=parseFloat(o):!yb(o)&&Ja.test(r)&&(o=zg(l,r)),this.setBaseTarget(l,ne(o)?o.get():o)),ne(o)?o.get():o}setBaseTarget(l,r){this.baseTarget[l]=r}getBaseTarget(l){const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const m=Xu(this.props,r,this.presenceContext?.custom);m&&(o=m[l])}if(r&&o!==void 0)return o;const f=this.getBaseTargetFromProps(this.props,l);return f!==void 0&&!ne(f)?f:this.initialValues[l]!==void 0&&o===void 0?void 0:this.baseTarget[l]}on(l,r){return this.events[l]||(this.events[l]=new Du),this.events[l].add(r)}notify(l,...r){this.events[l]&&this.events[l].notify(...r)}scheduleRenderMicrotask(){Zu.render(this.render)}}class Bg extends Tb{constructor(){super(...arguments),this.KeyframeResolver=ob}sortInstanceNodePosition(l,r){return l.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(l,r){const o=l.style;return o?o[r]:void 0}removeValueFromRenderState(l,{vars:r,style:o}){delete r[l],delete o[l]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:l}=this.props;ne(l)&&(this.childSubscription=l.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}class Fa{constructor(l){this.isMounted=!1,this.node=l}update(){}}function Hg({top:n,left:l,right:r,bottom:o}){return{x:{min:l,max:r},y:{min:n,max:o}}}function Nb({x:n,y:l}){return{top:l.min,right:n.max,bottom:l.max,left:n.min}}function wb(n,l){if(!l)return n;const r=l({x:n.left,y:n.top}),o=l({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:o.y,right:o.x}}function Qc(n){return n===void 0||n===1}function xu({scale:n,scaleX:l,scaleY:r}){return!Qc(n)||!Qc(l)||!Qc(r)}function gi(n){return xu(n)||Lg(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Lg(n){return L0(n.x)||L0(n.y)}function L0(n){return n&&n!=="0%"}function nr(n,l,r){const o=n-r,f=l*o;return r+f}function q0(n,l,r,o,f){return f!==void 0&&(n=nr(n,f,o)),nr(n,r,o)+l}function bu(n,l=0,r=1,o,f){n.min=q0(n.min,l,r,o,f),n.max=q0(n.max,l,r,o,f)}function qg(n,{x:l,y:r}){bu(n.x,l.translate,l.scale,l.originPoint),bu(n.y,r.translate,r.scale,r.originPoint)}const G0=.999999999999,Y0=1.0000000000001;function Ab(n,l,r,o=!1){const f=r.length;if(!f)return;l.x=l.y=1;let m,h;for(let x=0;x<f;x++){m=r[x],h=m.projectionDelta;const{visualElement:y}=m.options;y&&y.props.style&&y.props.style.display==="contents"||(o&&m.options.layoutScroll&&m.scroll&&m!==m.root&&cn(n,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),h&&(l.x*=h.x.scale,l.y*=h.y.scale,qg(n,h)),o&&gi(m.latestValues)&&cn(n,m.latestValues))}l.x<Y0&&l.x>G0&&(l.x=1),l.y<Y0&&l.y>G0&&(l.y=1)}function on(n,l){n.min=n.min+l,n.max=n.max+l}function X0(n,l,r,o,f=.5){const m=Ot(n.min,n.max,f);bu(n,l,r,m,o)}function cn(n,l){X0(n.x,l.x,l.scaleX,l.scale,l.originX),X0(n.y,l.y,l.scaleY,l.scale,l.originY)}function Gg(n,l){return Hg(wb(n.getBoundingClientRect(),l))}function Mb(n,l,r){const o=Gg(n,r),{scroll:f}=l;return f&&(on(o.x,f.offset.x),on(o.y,f.offset.y)),o}const zb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Eb=mn.length;function Db(n,l,r){let o="",f=!0;for(let m=0;m<Eb;m++){const h=mn[m],x=n[h];if(x===void 0)continue;let y=!0;if(typeof x=="number")y=x===(h.startsWith("scale")?1:0);else{const g=parseFloat(x);y=h.startsWith("scale")?g===1:g===0}if(!y||r){const g=Eg(x,Ku[h]);if(!y){f=!1;const b=zb[h]||h;o+=`${b}(${g}) `}r&&(l[h]=g)}}return o=o.trim(),r?o=r(l,f?"":o):f&&(o="none"),o}function $u(n,l,r){const{style:o,vars:f,transformOrigin:m}=n;let h=!1,x=!1;for(const y in l){const g=l[y];if(pn.has(y)){h=!0;continue}else if(ag(y)){f[y]=g;continue}else{const b=Eg(g,Ku[y]);y.startsWith("origin")?(x=!0,m[y]=b):o[y]=b}}if(l.transform||(h||r?o.transform=Db(l,n.transform,r):o.transform&&(o.transform="none")),x){const{originX:y="50%",originY:g="50%",originZ:b=0}=m;o.transformOrigin=`${y} ${g} ${b}`}}function Yg(n,{style:l,vars:r},o,f){const m=n.style;let h;for(h in l)m[h]=l[h];f?.applyProjectionStyles(m,o);for(h in r)m.setProperty(h,r[h])}function Q0(n,l){return l.max===l.min?0:n/(l.max-l.min)*100}const fl={correct:(n,l)=>{if(!l.target)return n;if(typeof n=="string")if(J.test(n))n=parseFloat(n);else return n;const r=Q0(n,l.target.x),o=Q0(n,l.target.y);return`${r}% ${o}%`}},Cb={correct:(n,{treeScale:l,projectionDelta:r})=>{const o=n,f=Ja.parse(n);if(f.length>5)return o;const m=Ja.createTransformer(n),h=typeof f[0]!="number"?1:0,x=r.x.scale*l.x,y=r.y.scale*l.y;f[0+h]/=x,f[1+h]/=y;const g=Ot(x,y,.5);return typeof f[2+h]=="number"&&(f[2+h]/=g),typeof f[3+h]=="number"&&(f[3+h]/=g),m(f)}},vu={borderRadius:{...fl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fl,borderTopRightRadius:fl,borderBottomLeftRadius:fl,borderBottomRightRadius:fl,boxShadow:Cb};function Xg(n,{layout:l,layoutId:r}){return pn.has(n)||n.startsWith("origin")||(l||r!==void 0)&&(!!vu[n]||n==="opacity")}function Wu(n,l,r){const o=n.style,f=l?.style,m={};if(!o)return m;for(const h in o)(ne(o[h])||f&&ne(f[h])||Xg(h,n)||r?.getValue(h)?.liveStyle!==void 0)&&(m[h]=o[h]);return m}function kb(n){return window.getComputedStyle(n)}class Ob extends Bg{constructor(){super(...arguments),this.type="html",this.renderInstance=Yg}readValueFromInstance(l,r){if(pn.has(r))return this.projection?.isProjecting?su(r):cx(l,r);{const o=kb(l),f=(ag(r)?o.getPropertyValue(r):o[r])||0;return typeof f=="string"?f.trim():f}}measureInstanceViewportBox(l,{transformPagePoint:r}){return Gg(l,r)}build(l,r,o){$u(l,r,o.transformTemplate)}scrapeMotionValuesFromProps(l,r,o){return Wu(l,r,o)}}const _b={offset:"stroke-dashoffset",array:"stroke-dasharray"},Rb={offset:"strokeDashoffset",array:"strokeDasharray"};function Vb(n,l,r=1,o=0,f=!0){n.pathLength=1;const m=f?_b:Rb;n[m.offset]=`${-o}`,n[m.array]=`${l} ${r}`}const Ub=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Qg(n,{attrX:l,attrY:r,attrScale:o,pathLength:f,pathSpacing:m=1,pathOffset:h=0,...x},y,g,b){if($u(n,x,g),y){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:j}=n;v.transform&&(j.transform=v.transform,delete v.transform),(j.transform||v.transformOrigin)&&(j.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),j.transform&&(j.transformBox=b?.transformBox??"fill-box",delete v.transformBox);for(const k of Ub)v[k]!==void 0&&(j[k]=v[k],delete v[k]);l!==void 0&&(v.x=l),r!==void 0&&(v.y=r),o!==void 0&&(v.scale=o),f!==void 0&&Vb(v,f,m,h,!1)}const Kg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Zg=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Bb(n,l,r,o){Yg(n,l,void 0,o);for(const f in l.attrs)n.setAttribute(Kg.has(f)?f:Qu(f),l.attrs[f])}function Jg(n,l,r){const o=Wu(n,l,r);for(const f in n)if(ne(n[f])||ne(l[f])){const m=mn.indexOf(f)!==-1?"attr"+f.charAt(0).toUpperCase()+f.substring(1):f;o[m]=n[f]}return o}class Hb extends Bg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Jt}getBaseTargetFromProps(l,r){return l[r]}readValueFromInstance(l,r){if(pn.has(r)){const o=Mg(r);return o&&o.default||0}return r=Kg.has(r)?r:Qu(r),l.getAttribute(r)}scrapeMotionValuesFromProps(l,r,o){return Jg(l,r,o)}build(l,r,o){Qg(l,r,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(l,r,o,f){Bb(l,r,o,f)}mount(l){this.isSVGTag=Zg(l.tagName),super.mount(l)}}const Lb=Pu.length;function Fg(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?Fg(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const l={};for(let r=0;r<Lb;r++){const o=Pu[r],f=n.props[o];(jl(f)||f===!1)&&(l[o]=f)}return l}function Pg(n,l){if(!Array.isArray(l))return!1;const r=l.length;if(r!==n.length)return!1;for(let o=0;o<r;o++)if(l[o]!==n[o])return!1;return!0}const qb=[...Fu].reverse(),Gb=Fu.length;function Yb(n){return l=>Promise.all(l.map(({animation:r,options:o})=>Wx(n,r,o)))}function Xb(n){let l=Yb(n),r=K0(),o=!0;const f=y=>(g,b)=>{const v=un(n,b,y==="exit"?n.presenceContext?.custom:void 0);if(v){const{transition:j,transitionEnd:k,...B}=v;g={...g,...B,...k}}return g};function m(y){l=y(n)}function h(y){const{props:g}=n,b=Fg(n.parent)||{},v=[],j=new Set;let k={},B=1/0;for(let G=0;G<Gb;G++){const q=qb[G],K=r[q],R=g[q]!==void 0?g[q]:b[q],Q=jl(R),F=q===y?K.isActive:null;F===!1&&(B=G);let nt=R===b[q]&&R!==g[q]&&Q;if(nt&&o&&n.manuallyAnimateOnMount&&(nt=!1),K.protectedKeys={...k},!K.isActive&&F===null||!R&&!K.prevProp||or(R)||typeof R=="boolean")continue;const tt=Qb(K.prevProp,R);let P=tt||q===y&&K.isActive&&!nt&&Q||G>B&&Q,st=!1;const zt=Array.isArray(R)?R:[R];let Ut=zt.reduce(f(q),{});F===!1&&(Ut={});const{prevResolvedValues:qt={}}=K,Ge={...qt,...Ut},ze=H=>{P=!0,j.has(H)&&(st=!0,j.delete(H)),K.needsAnimating[H]=!0;const W=n.getValue(H);W&&(W.liveStyle=!1)};for(const H in Ge){const W=Ut[H],ht=qt[H];if(k.hasOwnProperty(H))continue;let yt=!1;du(W)&&du(ht)?yt=!Pg(W,ht):yt=W!==ht,yt?W!=null?ze(H):j.add(H):W!==void 0&&j.has(H)?ze(H):K.protectedKeys[H]=!0}K.prevProp=R,K.prevResolvedValues=Ut,K.isActive&&(k={...k,...Ut}),o&&n.blockInitialAnimation&&(P=!1);const ce=nt&&tt;P&&(!ce||st)&&v.push(...zt.map(H=>{const W={type:q};if(typeof H=="string"&&o&&!ce&&n.manuallyAnimateOnMount&&n.parent){const{parent:ht}=n,yt=un(ht,H);if(ht.enteringChildren&&yt){const{delayChildren:N}=yt.transition||{};W.delay=bg(ht.enteringChildren,n,N)}}return{animation:H,options:W}}))}if(j.size){const G={};if(typeof g.initial!="boolean"){const q=un(n,Array.isArray(g.initial)?g.initial[0]:g.initial);q&&q.transition&&(G.transition=q.transition)}j.forEach(q=>{const K=n.getBaseTarget(q),R=n.getValue(q);R&&(R.liveStyle=!0),G[q]=K??null}),v.push({animation:G})}let L=!!v.length;return o&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(L=!1),o=!1,L?l(v):Promise.resolve()}function x(y,g){if(r[y].isActive===g)return Promise.resolve();n.variantChildren?.forEach(v=>v.animationState?.setActive(y,g)),r[y].isActive=g;const b=h(y);for(const v in r)r[v].protectedKeys={};return b}return{animateChanges:h,setActive:x,setAnimateFunction:m,getState:()=>r,reset:()=>{r=K0()}}}function Qb(n,l){return typeof l=="string"?l!==n:Array.isArray(l)?!Pg(l,n):!1}function pi(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function K0(){return{animate:pi(!0),whileInView:pi(),whileHover:pi(),whileTap:pi(),whileDrag:pi(),whileFocus:pi(),exit:pi()}}function Z0(n,l){n.min=l.min,n.max=l.max}function Ke(n,l){Z0(n.x,l.x),Z0(n.y,l.y)}function J0(n,l){n.translate=l.translate,n.scale=l.scale,n.originPoint=l.originPoint,n.origin=l.origin}const $g=1e-4,Kb=1-$g,Zb=1+$g,Wg=.01,Jb=0-Wg,Fb=0+Wg;function oe(n){return n.max-n.min}function Pb(n,l,r){return Math.abs(n-l)<=r}function F0(n,l,r,o=.5){n.origin=o,n.originPoint=Ot(l.min,l.max,n.origin),n.scale=oe(r)/oe(l),n.translate=Ot(r.min,r.max,n.origin)-n.originPoint,(n.scale>=Kb&&n.scale<=Zb||isNaN(n.scale))&&(n.scale=1),(n.translate>=Jb&&n.translate<=Fb||isNaN(n.translate))&&(n.translate=0)}function yl(n,l,r,o){F0(n.x,l.x,r.x,o?o.originX:void 0),F0(n.y,l.y,r.y,o?o.originY:void 0)}function P0(n,l,r){n.min=r.min+l.min,n.max=n.min+oe(l)}function $b(n,l,r){P0(n.x,l.x,r.x),P0(n.y,l.y,r.y)}function $0(n,l,r){n.min=l.min-r.min,n.max=n.min+oe(l)}function lr(n,l,r){$0(n.x,l.x,r.x),$0(n.y,l.y,r.y)}function W0(n,l,r,o,f){return n-=l,n=nr(n,1/r,o),f!==void 0&&(n=nr(n,1/f,o)),n}function Wb(n,l=0,r=1,o=.5,f,m=n,h=n){if(We.test(l)&&(l=parseFloat(l),l=Ot(h.min,h.max,l/100)-h.min),typeof l!="number")return;let x=Ot(m.min,m.max,o);n===m&&(x-=l),n.min=W0(n.min,l,r,x,f),n.max=W0(n.max,l,r,x,f)}function I0(n,l,[r,o,f],m,h){Wb(n,l[r],l[o],l[f],l.scale,m,h)}const Ib=["x","scaleX","originX"],tv=["y","scaleY","originY"];function tp(n,l,r,o){I0(n.x,l,Ib,r?r.x:void 0,o?o.x:void 0),I0(n.y,l,tv,r?r.y:void 0,o?o.y:void 0)}function ep(n){return n.translate===0&&n.scale===1}function Ig(n){return ep(n.x)&&ep(n.y)}function ap(n,l){return n.min===l.min&&n.max===l.max}function ev(n,l){return ap(n.x,l.x)&&ap(n.y,l.y)}function ip(n,l){return Math.round(n.min)===Math.round(l.min)&&Math.round(n.max)===Math.round(l.max)}function ty(n,l){return ip(n.x,l.x)&&ip(n.y,l.y)}function np(n){return oe(n.x)/oe(n.y)}function lp(n,l){return n.translate===l.translate&&n.scale===l.scale&&n.originPoint===l.originPoint}function He(n){return[n("x"),n("y")]}function av(n,l,r){let o="";const f=n.x.translate/l.x,m=n.y.translate/l.y,h=r?.z||0;if((f||m||h)&&(o=`translate3d(${f}px, ${m}px, ${h}px) `),(l.x!==1||l.y!==1)&&(o+=`scale(${1/l.x}, ${1/l.y}) `),r){const{transformPerspective:g,rotate:b,rotateX:v,rotateY:j,skewX:k,skewY:B}=r;g&&(o=`perspective(${g}px) ${o}`),b&&(o+=`rotate(${b}deg) `),v&&(o+=`rotateX(${v}deg) `),j&&(o+=`rotateY(${j}deg) `),k&&(o+=`skewX(${k}deg) `),B&&(o+=`skewY(${B}deg) `)}const x=n.x.scale*l.x,y=n.y.scale*l.y;return(x!==1||y!==1)&&(o+=`scale(${x}, ${y})`),o||"none"}const ey=["TopLeft","TopRight","BottomLeft","BottomRight"],iv=ey.length,sp=n=>typeof n=="string"?parseFloat(n):n,rp=n=>typeof n=="number"||J.test(n);function nv(n,l,r,o,f,m){f?(n.opacity=Ot(0,r.opacity??1,lv(o)),n.opacityExit=Ot(l.opacity??1,0,sv(o))):m&&(n.opacity=Ot(l.opacity??1,r.opacity??1,o));for(let h=0;h<iv;h++){const x=`border${ey[h]}Radius`;let y=op(l,x),g=op(r,x);if(y===void 0&&g===void 0)continue;y||(y=0),g||(g=0),y===0||g===0||rp(y)===rp(g)?(n[x]=Math.max(Ot(sp(y),sp(g),o),0),(We.test(g)||We.test(y))&&(n[x]+="%")):n[x]=g}(l.rotate||r.rotate)&&(n.rotate=Ot(l.rotate||0,r.rotate||0,o))}function op(n,l){return n[l]!==void 0?n[l]:n.borderRadius}const lv=ay(0,.5,Pp),sv=ay(.5,.95,qe);function ay(n,l,r){return o=>o<n?0:o>l?1:r(bl(n,l,o))}function rv(n,l,r){const o=ne(n)?n:fn(n);return o.start(Yu("",o,l,r)),o.animation}function Tl(n,l,r,o={passive:!0}){return n.addEventListener(l,r,o),()=>n.removeEventListener(l,r)}const ov=(n,l)=>n.depth-l.depth;class cv{constructor(){this.children=[],this.isDirty=!1}add(l){Au(this.children,l),this.isDirty=!0}remove(l){Mu(this.children,l),this.isDirty=!0}forEach(l){this.isDirty&&this.children.sort(ov),this.isDirty=!1,this.children.forEach(l)}}function uv(n,l){const r=re.now(),o=({timestamp:f})=>{const m=f-r;m>=l&&(Za(o),n(m-l))};return Ct.setup(o,!0),()=>Za(o)}function Ws(n){return ne(n)?n.get():n}class fv{constructor(){this.members=[]}add(l){Au(this.members,l),l.scheduleRender()}remove(l){if(Mu(this.members,l),l===this.prevLead&&(this.prevLead=void 0),l===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(l){const r=this.members.findIndex(f=>l===f);if(r===0)return!1;let o;for(let f=r;f>=0;f--){const m=this.members[f];if(m.isPresent!==!1){o=m;break}}return o?(this.promote(o),!0):!1}promote(l,r){const o=this.lead;if(l!==o&&(this.prevLead=o,this.lead=l,l.show(),o)){o.instance&&o.scheduleRender(),l.scheduleRender();const f=o.options.layoutDependency,m=l.options.layoutDependency;f!==void 0&&m!==void 0&&f===m||(l.resumeFrom=o,r&&(l.resumeFrom.preserveOpacity=!0),o.snapshot&&(l.snapshot=o.snapshot,l.snapshot.latestValues=o.animationValues||o.latestValues),l.root&&l.root.isUpdating&&(l.isLayoutDirty=!0));const{crossfade:x}=l.options;x===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(l=>{const{options:r,resumingFrom:o}=l;r.onExitComplete&&r.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(l=>{l.instance&&l.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Is={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Kc=["","X","Y","Z"],dv=1e3;let hv=0;function Zc(n,l,r,o){const{latestValues:f}=l;f[n]&&(r[n]=f[n],l.setStaticValue(n,0),o&&(o[n]=0))}function iy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:l}=n.options;if(!l)return;const r=Tg(l);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:f,layoutId:m}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",Ct,!(f||m))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&iy(o)}function ny({attachResizeListener:n,defaultParent:l,measureScroll:r,checkIsScrollRoot:o,resetTransform:f}){return class{constructor(h={},x=l?.()){this.id=hv++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(gv),this.nodes.forEach(vv),this.nodes.forEach(Sv),this.nodes.forEach(yv)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=h,this.root=x?x.root||x:this,this.path=x?[...x.path,x]:[],this.parent=x,this.depth=x?x.depth+1:0;for(let y=0;y<this.path.length;y++)this.path[y].shouldResetTransform=!0;this.root===this&&(this.nodes=new cv)}addEventListener(h,x){return this.eventHandlers.has(h)||this.eventHandlers.set(h,new Du),this.eventHandlers.get(h).add(x)}notifyListeners(h,...x){const y=this.eventHandlers.get(h);y&&y.notify(...x)}hasListeners(h){return this.eventHandlers.has(h)}mount(h){if(this.instance)return;this.isSVG=_g(h)&&!pb(h),this.instance=h;const{layoutId:x,layout:y,visualElement:g}=this.options;if(g&&!g.current&&g.mount(h),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(y||x)&&(this.isLayoutDirty=!0),n){let b,v=0;const j=()=>this.root.updateBlockedByResize=!1;Ct.read(()=>{v=window.innerWidth}),n(h,()=>{const k=window.innerWidth;k!==v&&(v=k,this.root.updateBlockedByResize=!0,b&&b(),b=uv(j,250),Is.hasAnimatedSinceResize&&(Is.hasAnimatedSinceResize=!1,this.nodes.forEach(fp)))})}x&&this.root.registerSharedNode(x,this),this.options.animate!==!1&&g&&(x||y)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:v,hasRelativeLayoutChanged:j,layout:k})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const B=this.options.transition||g.getDefaultTransition()||Av,{onLayoutAnimationStart:L,onLayoutAnimationComplete:G}=g.getProps(),q=!this.targetLayout||!ty(this.targetLayout,k),K=!v&&j;if(this.options.layoutRoot||this.resumeFrom||K||v&&(q||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const R={...Gu(B,"layout"),onPlay:L,onComplete:G};(g.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R),this.setAnimationOrigin(b,K)}else v||fp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=k})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const h=this.getStack();h&&h.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Za(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(jv),this.animationId++)}getTransformTemplate(){const{visualElement:h}=this.options;return h&&h.getProps().transformTemplate}willUpdate(h=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&iy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let b=0;b<this.path.length;b++){const v=this.path[b];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:x,layout:y}=this.options;if(x===void 0&&!y)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),h&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(cp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(up);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(bv),this.nodes.forEach(mv),this.nodes.forEach(pv)):this.nodes.forEach(up),this.clearAllSnapshots();const x=re.now();ae.delta=Ie(0,1e3/60,x-ae.timestamp),ae.timestamp=x,ae.isProcessing=!0,Bc.update.process(ae),Bc.preRender.process(ae),Bc.render.process(ae),ae.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Zu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(xv),this.sharedNodes.forEach(Tv)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ct.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ct.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!oe(this.snapshot.measuredBox.x)&&!oe(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let y=0;y<this.path.length;y++)this.path[y].updateScroll();const h=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Jt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:x}=this.options;x&&x.notify("LayoutMeasure",this.layout.layoutBox,h?h.layoutBox:void 0)}updateScroll(h="measure"){let x=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===h&&(x=!1),x&&this.instance){const y=o(this.instance);this.scroll={animationId:this.root.animationId,phase:h,isRoot:y,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:y}}}resetTransform(){if(!f)return;const h=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,x=this.projectionDelta&&!Ig(this.projectionDelta),y=this.getTransformTemplate(),g=y?y(this.latestValues,""):void 0,b=g!==this.prevTransformTemplateValue;h&&this.instance&&(x||gi(this.latestValues)||b)&&(f(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(h=!0){const x=this.measurePageBox();let y=this.removeElementScroll(x);return h&&(y=this.removeTransform(y)),Mv(y),{animationId:this.root.animationId,measuredBox:x,layoutBox:y,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:h}=this.options;if(!h)return Jt();const x=h.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(zv))){const{scroll:g}=this.root;g&&(on(x.x,g.offset.x),on(x.y,g.offset.y))}return x}removeElementScroll(h){const x=Jt();if(Ke(x,h),this.scroll?.wasRoot)return x;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:b,options:v}=g;g!==this.root&&b&&v.layoutScroll&&(b.wasRoot&&Ke(x,h),on(x.x,b.offset.x),on(x.y,b.offset.y))}return x}applyTransform(h,x=!1){const y=Jt();Ke(y,h);for(let g=0;g<this.path.length;g++){const b=this.path[g];!x&&b.options.layoutScroll&&b.scroll&&b!==b.root&&cn(y,{x:-b.scroll.offset.x,y:-b.scroll.offset.y}),gi(b.latestValues)&&cn(y,b.latestValues)}return gi(this.latestValues)&&cn(y,this.latestValues),y}removeTransform(h){const x=Jt();Ke(x,h);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!g.instance||!gi(g.latestValues))continue;xu(g.latestValues)&&g.updateSnapshot();const b=Jt(),v=g.measurePageBox();Ke(b,v),tp(x,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,b)}return gi(this.latestValues)&&tp(x,this.latestValues),x}setTargetDelta(h){this.targetDelta=h,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(h){this.options={...this.options,...h,crossfade:h.crossfade!==void 0?h.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ae.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(h=!1){const x=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=x.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=x.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=x.isSharedProjectionDirty);const y=!!this.resumingFrom||this!==x;if(!(h||y&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:v}=this.options;if(!this.layout||!(b||v))return;this.resolvedRelativeTargetAt=ae.timestamp;const j=this.getClosestProjectingParent();j&&this.linkedParentVersion!==j.layoutVersion&&!j.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(j&&j.layout?this.createRelativeTarget(j,this.layout.layoutBox,j.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Jt(),this.targetWithTransforms=Jt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),$b(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ke(this.target,this.layout.layoutBox),qg(this.target,this.targetDelta)):Ke(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,j&&!!j.resumingFrom==!!this.resumingFrom&&!j.options.layoutScroll&&j.target&&this.animationProgress!==1?this.createRelativeTarget(j,this.target,j.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||xu(this.parent.latestValues)||Lg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(h,x,y){this.relativeParent=h,this.linkedParentVersion=h.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Jt(),this.relativeTargetOrigin=Jt(),lr(this.relativeTargetOrigin,x,y),Ke(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const h=this.getLead(),x=!!this.resumingFrom||this!==h;let y=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(y=!1),x&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(y=!1),this.resolvedRelativeTargetAt===ae.timestamp&&(y=!1),y)return;const{layout:g,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||b))return;Ke(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,j=this.treeScale.y;Ab(this.layoutCorrected,this.treeScale,this.path,x),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=Jt());const{target:k}=h;if(!k){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(J0(this.prevProjectionDelta.x,this.projectionDelta.x),J0(this.prevProjectionDelta.y,this.projectionDelta.y)),yl(this.projectionDelta,this.layoutCorrected,k,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==j||!lp(this.projectionDelta.x,this.prevProjectionDelta.x)||!lp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",k))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(h=!0){if(this.options.visualElement?.scheduleRender(),h){const x=this.getStack();x&&x.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=rn(),this.projectionDelta=rn(),this.projectionDeltaWithTransform=rn()}setAnimationOrigin(h,x=!1){const y=this.snapshot,g=y?y.latestValues:{},b={...this.latestValues},v=rn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!x;const j=Jt(),k=y?y.source:void 0,B=this.layout?this.layout.source:void 0,L=k!==B,G=this.getStack(),q=!G||G.members.length<=1,K=!!(L&&!q&&this.options.crossfade===!0&&!this.path.some(wv));this.animationProgress=0;let R;this.mixTargetDelta=Q=>{const F=Q/1e3;dp(v.x,h.x,F),dp(v.y,h.y,F),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(lr(j,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Nv(this.relativeTarget,this.relativeTargetOrigin,j,F),R&&ev(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=Jt()),Ke(R,this.relativeTarget)),L&&(this.animationValues=b,nv(b,g,this.latestValues,F,K,q)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(h){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Za(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ct.update(()=>{Is.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=fn(0)),this.currentAnimation=rv(this.motionValue,[0,1e3],{...h,velocity:0,isSync:!0,onUpdate:x=>{this.mixTargetDelta(x),h.onUpdate&&h.onUpdate(x)},onStop:()=>{},onComplete:()=>{h.onComplete&&h.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const h=this.getStack();h&&h.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(dv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const h=this.getLead();let{targetWithTransforms:x,target:y,layout:g,latestValues:b}=h;if(!(!x||!y||!g)){if(this!==h&&this.layout&&g&&ly(this.options.animationType,this.layout.layoutBox,g.layoutBox)){y=this.target||Jt();const v=oe(this.layout.layoutBox.x);y.x.min=h.target.x.min,y.x.max=y.x.min+v;const j=oe(this.layout.layoutBox.y);y.y.min=h.target.y.min,y.y.max=y.y.min+j}Ke(x,y),cn(x,b),yl(this.projectionDeltaWithTransform,this.layoutCorrected,x,b)}}registerSharedNode(h,x){this.sharedNodes.has(h)||this.sharedNodes.set(h,new fv),this.sharedNodes.get(h).add(x);const g=x.options.initialPromotionConfig;x.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(x):void 0})}isLead(){const h=this.getStack();return h?h.lead===this:!0}getLead(){const{layoutId:h}=this.options;return h?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:h}=this.options;return h?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:h}=this.options;if(h)return this.root.sharedNodes.get(h)}promote({needsReset:h,transition:x,preserveFollowOpacity:y}={}){const g=this.getStack();g&&g.promote(this,y),h&&(this.projectionDelta=void 0,this.needsReset=!0),x&&this.setOptions({transition:x})}relegate(){const h=this.getStack();return h?h.relegate(this):!1}resetSkewAndRotation(){const{visualElement:h}=this.options;if(!h)return;let x=!1;const{latestValues:y}=h;if((y.z||y.rotate||y.rotateX||y.rotateY||y.rotateZ||y.skewX||y.skewY)&&(x=!0),!x)return;const g={};y.z&&Zc("z",h,g,this.animationValues);for(let b=0;b<Kc.length;b++)Zc(`rotate${Kc[b]}`,h,g,this.animationValues),Zc(`skew${Kc[b]}`,h,g,this.animationValues);h.render();for(const b in g)h.setStaticValue(b,g[b]),this.animationValues&&(this.animationValues[b]=g[b]);h.scheduleRender()}applyProjectionStyles(h,x){if(!this.instance||this.isSVG)return;if(!this.isVisible){h.visibility="hidden";return}const y=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,h.visibility="",h.opacity="",h.pointerEvents=Ws(x?.pointerEvents)||"",h.transform=y?y(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(h.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,h.pointerEvents=Ws(x?.pointerEvents)||""),this.hasProjected&&!gi(this.latestValues)&&(h.transform=y?y({},""):"none",this.hasProjected=!1);return}h.visibility="";const b=g.animationValues||g.latestValues;this.applyTransformsToTarget();let v=av(this.projectionDeltaWithTransform,this.treeScale,b);y&&(v=y(b,v)),h.transform=v;const{x:j,y:k}=this.projectionDelta;h.transformOrigin=`${j.origin*100}% ${k.origin*100}% 0`,g.animationValues?h.opacity=g===this?b.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:b.opacityExit:h.opacity=g===this?b.opacity!==void 0?b.opacity:"":b.opacityExit!==void 0?b.opacityExit:0;for(const B in vu){if(b[B]===void 0)continue;const{correct:L,applyTo:G,isCSSVariable:q}=vu[B],K=v==="none"?b[B]:L(b[B],g);if(G){const R=G.length;for(let Q=0;Q<R;Q++)h[G[Q]]=K}else q?this.options.visualElement.renderState.vars[B]=K:h[B]=K}this.options.layoutId&&(h.pointerEvents=g===this?Ws(x?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(h=>h.currentAnimation?.stop()),this.root.nodes.forEach(cp),this.root.sharedNodes.clear()}}}function mv(n){n.updateLayout()}function pv(n){const l=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&l&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:f}=n.options,m=l.source!==n.layout.source;f==="size"?He(b=>{const v=m?l.measuredBox[b]:l.layoutBox[b],j=oe(v);v.min=r[b].min,v.max=v.min+j}):ly(f,l.layoutBox,r)&&He(b=>{const v=m?l.measuredBox[b]:l.layoutBox[b],j=oe(r[b]);v.max=v.min+j,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+j)});const h=rn();yl(h,r,l.layoutBox);const x=rn();m?yl(x,n.applyTransform(o,!0),l.measuredBox):yl(x,r,l.layoutBox);const y=!Ig(h);let g=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:v,layout:j}=b;if(v&&j){const k=Jt();lr(k,l.layoutBox,v.layoutBox);const B=Jt();lr(B,r,j.layoutBox),ty(k,B)||(g=!0),b.options.layoutRoot&&(n.relativeTarget=B,n.relativeTargetOrigin=k,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:l,delta:x,layoutDelta:h,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function gv(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function yv(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function xv(n){n.clearSnapshot()}function cp(n){n.clearMeasurements()}function up(n){n.isLayoutDirty=!1}function bv(n){const{visualElement:l}=n.options;l&&l.getProps().onBeforeLayoutMeasure&&l.notify("BeforeLayoutMeasure"),n.resetTransform()}function fp(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function vv(n){n.resolveTargetDelta()}function Sv(n){n.calcProjection()}function jv(n){n.resetSkewAndRotation()}function Tv(n){n.removeLeadSnapshot()}function dp(n,l,r){n.translate=Ot(l.translate,0,r),n.scale=Ot(l.scale,1,r),n.origin=l.origin,n.originPoint=l.originPoint}function hp(n,l,r,o){n.min=Ot(l.min,r.min,o),n.max=Ot(l.max,r.max,o)}function Nv(n,l,r,o){hp(n.x,l.x,r.x,o),hp(n.y,l.y,r.y,o)}function wv(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Av={duration:.45,ease:[.4,0,.1,1]},mp=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),pp=mp("applewebkit/")&&!mp("chrome/")?Math.round:qe;function gp(n){n.min=pp(n.min),n.max=pp(n.max)}function Mv(n){gp(n.x),gp(n.y)}function ly(n,l,r){return n==="position"||n==="preserve-aspect"&&!Pb(np(l),np(r),.2)}function zv(n){return n!==n.root&&n.scroll?.wasRoot}const Ev=ny({attachResizeListener:(n,l)=>Tl(n,"resize",l),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Jc={current:void 0},sy=ny({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Jc.current){const n=new Ev({});n.mount(window),n.setOptions({layoutScroll:!0}),Jc.current=n}return Jc.current},resetTransform:(n,l)=>{n.style.transform=l!==void 0?l:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Iu=Y.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function yp(n,l){if(typeof n=="function")return n(l);n!=null&&(n.current=l)}function Dv(...n){return l=>{let r=!1;const o=n.map(f=>{const m=yp(f,l);return!r&&typeof m=="function"&&(r=!0),m});if(r)return()=>{for(let f=0;f<o.length;f++){const m=o[f];typeof m=="function"?m():yp(n[f],null)}}}}function Cv(...n){return Y.useCallback(Dv(...n),n)}class kv extends Y.Component{getSnapshotBeforeUpdate(l){const r=this.props.childRef.current;if(r&&l.isPresent&&!this.props.isPresent){const o=r.offsetParent,f=gu(o)&&o.offsetWidth||0,m=gu(o)&&o.offsetHeight||0,h=this.props.sizeRef.current;h.height=r.offsetHeight||0,h.width=r.offsetWidth||0,h.top=r.offsetTop,h.left=r.offsetLeft,h.right=f-h.width-h.left,h.bottom=m-h.height-h.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Ov({children:n,isPresent:l,anchorX:r,anchorY:o,root:f}){const m=Y.useId(),h=Y.useRef(null),x=Y.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=Y.useContext(Iu),g=n.props?.ref??n?.ref,b=Cv(h,g);return Y.useInsertionEffect(()=>{const{width:v,height:j,top:k,left:B,right:L,bottom:G}=x.current;if(l||!h.current||!v||!j)return;const q=r==="left"?`left: ${B}`:`right: ${L}`,K=o==="bottom"?`bottom: ${G}`:`top: ${k}`;h.current.dataset.motionPopId=m;const R=document.createElement("style");y&&(R.nonce=y);const Q=f??document.head;return Q.appendChild(R),R.sheet&&R.sheet.insertRule(`
          [data-motion-pop-id="${m}"] {
            position: absolute !important;
            width: ${v}px !important;
            height: ${j}px !important;
            ${q}px !important;
            ${K}px !important;
          }
        `),()=>{Q.contains(R)&&Q.removeChild(R)}},[l]),u.jsx(kv,{isPresent:l,childRef:h,sizeRef:x,children:Y.cloneElement(n,{ref:b})})}const _v=({children:n,initial:l,isPresent:r,onExitComplete:o,custom:f,presenceAffectsLayout:m,mode:h,anchorX:x,anchorY:y,root:g})=>{const b=wu(Rv),v=Y.useId();let j=!0,k=Y.useMemo(()=>(j=!1,{id:v,initial:l,isPresent:r,custom:f,onExitComplete:B=>{b.set(B,!0);for(const L of b.values())if(!L)return;o&&o()},register:B=>(b.set(B,!1),()=>b.delete(B))}),[r,b,o]);return m&&j&&(k={...k}),Y.useMemo(()=>{b.forEach((B,L)=>b.set(L,!1))},[r]),Y.useEffect(()=>{!r&&!b.size&&o&&o()},[r]),h==="popLayout"&&(n=u.jsx(Ov,{isPresent:r,anchorX:x,anchorY:y,root:g,children:n})),u.jsx(rr.Provider,{value:k,children:n})};function Rv(){return new Map}function ry(n=!0){const l=Y.useContext(rr);if(l===null)return[!0,null];const{isPresent:r,onExitComplete:o,register:f}=l,m=Y.useId();Y.useEffect(()=>{if(n)return f(m)},[n]);const h=Y.useCallback(()=>n&&o&&o(m),[m,o,n]);return!r&&o?[!1,h]:[!0]}const Js=n=>n.key||"";function xp(n){const l=[];return Y.Children.forEach(n,r=>{Y.isValidElement(r)&&l.push(r)}),l}const Vv=({children:n,custom:l,initial:r=!0,onExitComplete:o,presenceAffectsLayout:f=!0,mode:m="sync",propagate:h=!1,anchorX:x="left",anchorY:y="top",root:g})=>{const[b,v]=ry(h),j=Y.useMemo(()=>xp(n),[n]),k=h&&!b?[]:j.map(Js),B=Y.useRef(!0),L=Y.useRef(j),G=wu(()=>new Map),q=Y.useRef(new Set),[K,R]=Y.useState(j),[Q,F]=Y.useState(j);Hp(()=>{B.current=!1,L.current=j;for(let P=0;P<Q.length;P++){const st=Js(Q[P]);k.includes(st)?(G.delete(st),q.current.delete(st)):G.get(st)!==!0&&G.set(st,!1)}},[Q,k.length,k.join("-")]);const nt=[];if(j!==K){let P=[...j];for(let st=0;st<Q.length;st++){const zt=Q[st],Ut=Js(zt);k.includes(Ut)||(P.splice(st,0,zt),nt.push(zt))}return m==="wait"&&nt.length&&(P=nt),F(xp(P)),R(j),null}const{forceRender:tt}=Y.useContext(Nu);return u.jsx(u.Fragment,{children:Q.map(P=>{const st=Js(P),zt=h&&!b?!1:j===Q||k.includes(st),Ut=()=>{if(q.current.has(st))return;if(q.current.add(st),G.has(st))G.set(st,!0);else return;let qt=!0;G.forEach(Ge=>{Ge||(qt=!1)}),qt&&(tt?.(),F(L.current),h&&v?.(),o&&o())};return u.jsx(_v,{isPresent:zt,initial:!B.current||r?void 0:!1,custom:l,presenceAffectsLayout:f,mode:m,root:g,onExitComplete:zt?void 0:Ut,anchorX:x,anchorY:y,children:P},st)})})},oy=Y.createContext({strict:!1}),bp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let vp=!1;function Uv(){if(vp)return;const n={};for(const l in bp)n[l]={isEnabled:r=>bp[l].some(o=>!!r[o])};Ug(n),vp=!0}function cy(){return Uv(),jb()}function Bv(n){const l=cy();for(const r in n)l[r]={...l[r],...n[r]};Ug(l)}const Hv=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function sr(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Hv.has(n)}let uy=n=>!sr(n);function Lv(n){typeof n=="function"&&(uy=l=>l.startsWith("on")?!sr(l):n(l))}try{Lv(require("@emotion/is-prop-valid").default)}catch{}function qv(n,l,r){const o={};for(const f in n)f==="values"&&typeof n.values=="object"||(uy(f)||r===!0&&sr(f)||!l&&!sr(f)||n.draggable&&f.startsWith("onDrag"))&&(o[f]=n[f]);return o}const ur=Y.createContext({});function Gv(n,l){if(cr(n)){const{initial:r,animate:o}=n;return{initial:r===!1||jl(r)?r:void 0,animate:jl(o)?o:void 0}}return n.inherit!==!1?l:{}}function Yv(n){const{initial:l,animate:r}=Gv(n,Y.useContext(ur));return Y.useMemo(()=>({initial:l,animate:r}),[Sp(l),Sp(r)])}function Sp(n){return Array.isArray(n)?n.join(" "):n}const tf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function fy(n,l,r){for(const o in l)!ne(l[o])&&!Xg(o,r)&&(n[o]=l[o])}function Xv({transformTemplate:n},l){return Y.useMemo(()=>{const r=tf();return $u(r,l,n),Object.assign({},r.vars,r.style)},[l])}function Qv(n,l){const r=n.style||{},o={};return fy(o,r,n),Object.assign(o,Xv(n,l)),o}function Kv(n,l){const r={},o=Qv(n,l);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=o,r}const dy=()=>({...tf(),attrs:{}});function Zv(n,l,r,o){const f=Y.useMemo(()=>{const m=dy();return Qg(m,l,Zg(o),n.transformTemplate,n.style),{...m.attrs,style:{...m.style}}},[l]);if(n.style){const m={};fy(m,n.style,n),f.style={...m,...f.style}}return f}const Jv=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ef(n){return typeof n!="string"||n.includes("-")?!1:!!(Jv.indexOf(n)>-1||/[A-Z]/u.test(n))}function Fv(n,l,r,{latestValues:o},f,m=!1,h){const y=(h??ef(n)?Zv:Kv)(l,o,f,n),g=qv(l,typeof n=="string",m),b=n!==Y.Fragment?{...g,...y,ref:r}:{},{children:v}=l,j=Y.useMemo(()=>ne(v)?v.get():v,[v]);return Y.createElement(n,{...b,children:j})}function Pv({scrapeMotionValuesFromProps:n,createRenderState:l},r,o,f){return{latestValues:$v(r,o,f,n),renderState:l()}}function $v(n,l,r,o){const f={},m=o(n,{});for(const j in m)f[j]=Ws(m[j]);let{initial:h,animate:x}=n;const y=cr(n),g=Vg(n);l&&g&&!y&&n.inherit!==!1&&(h===void 0&&(h=l.initial),x===void 0&&(x=l.animate));let b=r?r.initial===!1:!1;b=b||h===!1;const v=b?x:h;if(v&&typeof v!="boolean"&&!or(v)){const j=Array.isArray(v)?v:[v];for(let k=0;k<j.length;k++){const B=Xu(n,j[k]);if(B){const{transitionEnd:L,transition:G,...q}=B;for(const K in q){let R=q[K];if(Array.isArray(R)){const Q=b?R.length-1:0;R=R[Q]}R!==null&&(f[K]=R)}for(const K in L)f[K]=L[K]}}}return f}const hy=n=>(l,r)=>{const o=Y.useContext(ur),f=Y.useContext(rr),m=()=>Pv(n,l,o,f);return r?m():wu(m)},Wv=hy({scrapeMotionValuesFromProps:Wu,createRenderState:tf}),Iv=hy({scrapeMotionValuesFromProps:Jg,createRenderState:dy}),t3=Symbol.for("motionComponentSymbol");function e3(n,l,r){const o=Y.useRef(r);Y.useInsertionEffect(()=>{o.current=r});const f=Y.useRef(null);return Y.useCallback(m=>{m&&n.onMount?.(m),l&&(m?l.mount(m):l.unmount());const h=o.current;if(typeof h=="function")if(m){const x=h(m);typeof x=="function"&&(f.current=x)}else f.current?(f.current(),f.current=null):h(m);else h&&(h.current=m)},[l])}const my=Y.createContext({});function ml(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function a3(n,l,r,o,f,m){const{visualElement:h}=Y.useContext(ur),x=Y.useContext(oy),y=Y.useContext(rr),g=Y.useContext(Iu).reducedMotion,b=Y.useRef(null),v=Y.useRef(!1);o=o||x.renderer,!b.current&&o&&(b.current=o(n,{visualState:l,parent:h,props:r,presenceContext:y,blockInitialAnimation:y?y.initial===!1:!1,reducedMotionConfig:g,isSVG:m}),v.current&&b.current&&(b.current.manuallyAnimateOnMount=!0));const j=b.current,k=Y.useContext(my);j&&!j.projection&&f&&(j.type==="html"||j.type==="svg")&&i3(b.current,r,f,k);const B=Y.useRef(!1);Y.useInsertionEffect(()=>{j&&B.current&&j.update(r,y)});const L=r[jg],G=Y.useRef(!!L&&!window.MotionHandoffIsComplete?.(L)&&window.MotionHasOptimisedAnimation?.(L));return Hp(()=>{v.current=!0,j&&(B.current=!0,window.MotionIsMounted=!0,j.updateFeatures(),j.scheduleRenderMicrotask(),G.current&&j.animationState&&j.animationState.animateChanges())}),Y.useEffect(()=>{j&&(!G.current&&j.animationState&&j.animationState.animateChanges(),G.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(L)}),G.current=!1),j.enteringChildren=void 0)}),j}function i3(n,l,r,o){const{layoutId:f,layout:m,drag:h,dragConstraints:x,layoutScroll:y,layoutRoot:g,layoutCrossfade:b}=l;n.projection=new r(n.latestValues,l["data-framer-portal-id"]?void 0:py(n.parent)),n.projection.setOptions({layoutId:f,layout:m,alwaysMeasureLayout:!!h||x&&ml(x),visualElement:n,animationType:typeof m=="string"?m:"both",initialPromotionConfig:o,crossfade:b,layoutScroll:y,layoutRoot:g})}function py(n){if(n)return n.options.allowProjection!==!1?n.projection:py(n.parent)}function Fc(n,{forwardMotionProps:l=!1,type:r}={},o,f){o&&Bv(o);const m=r?r==="svg":ef(n),h=m?Iv:Wv;function x(g,b){let v;const j={...Y.useContext(Iu),...g,layoutId:n3(g)},{isStatic:k}=j,B=Yv(g),L=h(g,k);if(!k&&Bp){l3();const G=s3(j);v=G.MeasureLayout,B.visualElement=a3(n,L,j,f,G.ProjectionNode,m)}return u.jsxs(ur.Provider,{value:B,children:[v&&B.visualElement?u.jsx(v,{visualElement:B.visualElement,...j}):null,Fv(n,g,e3(L,B.visualElement,b),L,k,l,m)]})}x.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const y=Y.forwardRef(x);return y[t3]=n,y}function n3({layoutId:n}){const l=Y.useContext(Nu).id;return l&&n!==void 0?l+"-"+n:n}function l3(n,l){Y.useContext(oy).strict}function s3(n){const l=cy(),{drag:r,layout:o}=l;if(!r&&!o)return{};const f={...r,...o};return{MeasureLayout:r?.isEnabled(n)||o?.isEnabled(n)?f.MeasureLayout:void 0,ProjectionNode:f.ProjectionNode}}function r3(n,l){if(typeof Proxy>"u")return Fc;const r=new Map,o=(m,h)=>Fc(m,h,n,l),f=(m,h)=>o(m,h);return new Proxy(f,{get:(m,h)=>h==="create"?o:(r.has(h)||r.set(h,Fc(h,void 0,n,l)),r.get(h))})}const o3=(n,l)=>l.isSVG??ef(n)?new Hb(l):new Ob(l,{allowProjection:n!==Y.Fragment});class c3 extends Fa{constructor(l){super(l),l.animationState||(l.animationState=Xb(l))}updateAnimationControlsSubscription(){const{animate:l}=this.node.getProps();or(l)&&(this.unmountControls=l.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:l}=this.node.getProps(),{animate:r}=this.node.prevProps||{};l!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let u3=0;class f3 extends Fa{constructor(){super(...arguments),this.id=u3++}update(){if(!this.node.presenceContext)return;const{isPresent:l,onExitComplete:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||l===o)return;const f=this.node.animationState.setActive("exit",!l);r&&!l&&f.then(()=>{r(this.id)})}mount(){const{register:l,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),l&&(this.unmount=l(this.id))}unmount(){}}const d3={animation:{Feature:c3},exit:{Feature:f3}};function Ml(n){return{point:{x:n.pageX,y:n.pageY}}}const h3=n=>l=>Ju(l)&&n(l,Ml(l));function xl(n,l,r,o){return Tl(n,l,h3(r),o)}const gy=({current:n})=>n?n.ownerDocument.defaultView:null,jp=(n,l)=>Math.abs(n-l);function m3(n,l){const r=jp(n.x,l.x),o=jp(n.y,l.y);return Math.sqrt(r**2+o**2)}const Tp=new Set(["auto","scroll"]);class yy{constructor(l,r,{transformPagePoint:o,contextWindow:f=window,dragSnapToOrigin:m=!1,distanceThreshold:h=3,element:x}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=k=>{this.handleScroll(k.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=$c(this.lastMoveEventInfo,this.history),B=this.startEvent!==null,L=m3(k.offset,{x:0,y:0})>=this.distanceThreshold;if(!B&&!L)return;const{point:G}=k,{timestamp:q}=ae;this.history.push({...G,timestamp:q});const{onStart:K,onMove:R}=this.handlers;B||(K&&K(this.lastMoveEvent,k),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,k)},this.handlePointerMove=(k,B)=>{this.lastMoveEvent=k,this.lastMoveEventInfo=Pc(B,this.transformPagePoint),Ct.update(this.updatePoint,!0)},this.handlePointerUp=(k,B)=>{this.end();const{onEnd:L,onSessionEnd:G,resumeAnimation:q}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&q&&q(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const K=$c(k.type==="pointercancel"?this.lastMoveEventInfo:Pc(B,this.transformPagePoint),this.history);this.startEvent&&L&&L(k,K),G&&G(k,K)},!Ju(l))return;this.dragSnapToOrigin=m,this.handlers=r,this.transformPagePoint=o,this.distanceThreshold=h,this.contextWindow=f||window;const y=Ml(l),g=Pc(y,this.transformPagePoint),{point:b}=g,{timestamp:v}=ae;this.history=[{...b,timestamp:v}];const{onSessionStart:j}=r;j&&j(l,$c(g,this.history)),this.removeListeners=Nl(xl(this.contextWindow,"pointermove",this.handlePointerMove),xl(this.contextWindow,"pointerup",this.handlePointerUp),xl(this.contextWindow,"pointercancel",this.handlePointerUp)),x&&this.startScrollTracking(x)}startScrollTracking(l){let r=l.parentElement;for(;r;){const o=getComputedStyle(r);(Tp.has(o.overflowX)||Tp.has(o.overflowY))&&this.scrollPositions.set(r,{x:r.scrollLeft,y:r.scrollTop}),r=r.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(l){const r=this.scrollPositions.get(l);if(!r)return;const o=l===window,f=o?{x:window.scrollX,y:window.scrollY}:{x:l.scrollLeft,y:l.scrollTop},m={x:f.x-r.x,y:f.y-r.y};m.x===0&&m.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=m.x,this.lastMoveEventInfo.point.y+=m.y):this.history.length>0&&(this.history[0].x-=m.x,this.history[0].y-=m.y),this.scrollPositions.set(l,f),Ct.update(this.updatePoint,!0))}updateHandlers(l){this.handlers=l}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Za(this.updatePoint)}}function Pc(n,l){return l?{point:l(n.point)}:n}function Np(n,l){return{x:n.x-l.x,y:n.y-l.y}}function $c({point:n},l){return{point:n,delta:Np(n,xy(l)),offset:Np(n,p3(l)),velocity:g3(l,.1)}}function p3(n){return n[0]}function xy(n){return n[n.length-1]}function g3(n,l){if(n.length<2)return{x:0,y:0};let r=n.length-1,o=null;const f=xy(n);for(;r>=0&&(o=n[r],!(f.timestamp-o.timestamp>xa(l)));)r--;if(!o)return{x:0,y:0};const m=Le(f.timestamp-o.timestamp);if(m===0)return{x:0,y:0};const h={x:(f.x-o.x)/m,y:(f.y-o.y)/m};return h.x===1/0&&(h.x=0),h.y===1/0&&(h.y=0),h}function y3(n,{min:l,max:r},o){return l!==void 0&&n<l?n=o?Ot(l,n,o.min):Math.max(n,l):r!==void 0&&n>r&&(n=o?Ot(r,n,o.max):Math.min(n,r)),n}function wp(n,l,r){return{min:l!==void 0?n.min+l:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function x3(n,{top:l,left:r,bottom:o,right:f}){return{x:wp(n.x,r,f),y:wp(n.y,l,o)}}function Ap(n,l){let r=l.min-n.min,o=l.max-n.max;return l.max-l.min<n.max-n.min&&([r,o]=[o,r]),{min:r,max:o}}function b3(n,l){return{x:Ap(n.x,l.x),y:Ap(n.y,l.y)}}function v3(n,l){let r=.5;const o=oe(n),f=oe(l);return f>o?r=bl(l.min,l.max-o,n.min):o>f&&(r=bl(n.min,n.max-f,l.min)),Ie(0,1,r)}function S3(n,l){const r={};return l.min!==void 0&&(r.min=l.min-n.min),l.max!==void 0&&(r.max=l.max-n.min),r}const Su=.35;function j3(n=Su){return n===!1?n=0:n===!0&&(n=Su),{x:Mp(n,"left","right"),y:Mp(n,"top","bottom")}}function Mp(n,l,r){return{min:zp(n,l),max:zp(n,r)}}function zp(n,l){return typeof n=="number"?n:n[l]||0}const T3=new WeakMap;class N3{constructor(l){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Jt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=l}start(l,{snapToCursor:r=!1,distanceThreshold:o}={}){const{presenceContext:f}=this.visualElement;if(f&&f.isPresent===!1)return;const m=v=>{r?(this.stopAnimation(),this.snapToCursor(Ml(v).point)):this.pauseAnimation()},h=(v,j)=>{this.stopAnimation();const{drag:k,dragPropagation:B,onDragStart:L}=this.getProps();if(k&&!B&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ub(k),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=j,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),He(q=>{let K=this.getAxisMotionValue(q).get()||0;if(We.test(K)){const{projection:R}=this.visualElement;if(R&&R.layout){const Q=R.layout.layoutBox[q];Q&&(K=oe(Q)*(parseFloat(K)/100))}}this.originPoint[q]=K}),L&&Ct.postRender(()=>L(v,j)),hu(this.visualElement,"transform");const{animationState:G}=this.visualElement;G&&G.setActive("whileDrag",!0)},x=(v,j)=>{this.latestPointerEvent=v,this.latestPanInfo=j;const{dragPropagation:k,dragDirectionLock:B,onDirectionLock:L,onDrag:G}=this.getProps();if(!k&&!this.openDragLock)return;const{offset:q}=j;if(B&&this.currentDirection===null){this.currentDirection=w3(q),this.currentDirection!==null&&L&&L(this.currentDirection);return}this.updateAxis("x",j.point,q),this.updateAxis("y",j.point,q),this.visualElement.render(),G&&G(v,j)},y=(v,j)=>{this.latestPointerEvent=v,this.latestPanInfo=j,this.stop(v,j),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>He(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:b}=this.getProps();this.panSession=new yy(l,{onSessionStart:m,onStart:h,onMove:x,onSessionEnd:y,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:b,distanceThreshold:o,contextWindow:gy(this.visualElement),element:this.visualElement.current})}stop(l,r){const o=l||this.latestPointerEvent,f=r||this.latestPanInfo,m=this.isDragging;if(this.cancel(),!m||!f||!o)return;const{velocity:h}=f;this.startAnimation(h);const{onDragEnd:x}=this.getProps();x&&Ct.postRender(()=>x(o,f))}cancel(){this.isDragging=!1;const{projection:l,animationState:r}=this.visualElement;l&&(l.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(l,r,o){const{drag:f}=this.getProps();if(!o||!Fs(l,f,this.currentDirection))return;const m=this.getAxisMotionValue(l);let h=this.originPoint[l]+o[l];this.constraints&&this.constraints[l]&&(h=y3(h,this.constraints[l],this.elastic[l])),m.set(h)}resolveConstraints(){const{dragConstraints:l,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,f=this.constraints;l&&ml(l)?this.constraints||(this.constraints=this.resolveRefConstraints()):l&&o?this.constraints=x3(o.layoutBox,l):this.constraints=!1,this.elastic=j3(r),f!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&He(m=>{this.constraints!==!1&&this.getAxisMotionValue(m)&&(this.constraints[m]=S3(o.layoutBox[m],this.constraints[m]))})}resolveRefConstraints(){const{dragConstraints:l,onMeasureDragConstraints:r}=this.getProps();if(!l||!ml(l))return!1;const o=l.current,{projection:f}=this.visualElement;if(!f||!f.layout)return!1;const m=Mb(o,f.root,this.visualElement.getTransformPagePoint());let h=b3(f.layout.layoutBox,m);if(r){const x=r(Nb(h));this.hasMutatedConstraints=!!x,x&&(h=Hg(x))}return h}startAnimation(l){const{drag:r,dragMomentum:o,dragElastic:f,dragTransition:m,dragSnapToOrigin:h,onDragTransitionEnd:x}=this.getProps(),y=this.constraints||{},g=He(b=>{if(!Fs(b,r,this.currentDirection))return;let v=y&&y[b]||{};h&&(v={min:0,max:0});const j=f?200:1e6,k=f?40:1e7,B={type:"inertia",velocity:o?l[b]:0,bounceStiffness:j,bounceDamping:k,timeConstant:750,restDelta:1,restSpeed:10,...m,...v};return this.startAxisValueAnimation(b,B)});return Promise.all(g).then(x)}startAxisValueAnimation(l,r){const o=this.getAxisMotionValue(l);return hu(this.visualElement,l),o.start(Yu(l,o,0,r,this.visualElement,!1))}stopAnimation(){He(l=>this.getAxisMotionValue(l).stop())}pauseAnimation(){He(l=>this.getAxisMotionValue(l).animation?.pause())}getAnimationState(l){return this.getAxisMotionValue(l).animation?.state}getAxisMotionValue(l){const r=`_drag${l.toUpperCase()}`,o=this.visualElement.getProps(),f=o[r];return f||this.visualElement.getValue(l,(o.initial?o.initial[l]:void 0)||0)}snapToCursor(l){He(r=>{const{drag:o}=this.getProps();if(!Fs(r,o,this.currentDirection))return;const{projection:f}=this.visualElement,m=this.getAxisMotionValue(r);if(f&&f.layout){const{min:h,max:x}=f.layout.layoutBox[r],y=m.get()||0;m.set(l[r]-Ot(h,x,.5)+y)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:l,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!ml(r)||!o||!this.constraints)return;this.stopAnimation();const f={x:0,y:0};He(h=>{const x=this.getAxisMotionValue(h);if(x&&this.constraints!==!1){const y=x.get();f[h]=v3({min:y,max:y},this.constraints[h])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),He(h=>{if(!Fs(h,l,null))return;const x=this.getAxisMotionValue(h),{min:y,max:g}=this.constraints[h];x.set(Ot(y,g,f[h]))})}addListeners(){if(!this.visualElement.current)return;T3.set(this.visualElement,this);const l=this.visualElement.current,r=xl(l,"pointerdown",y=>{const{drag:g,dragListener:b=!0}=this.getProps(),v=y.target,j=v!==l&&Og(v);g&&b&&!j&&this.start(y)}),o=()=>{const{dragConstraints:y}=this.getProps();ml(y)&&y.current&&(this.constraints=this.resolveRefConstraints())},{projection:f}=this.visualElement,m=f.addEventListener("measure",o);f&&!f.layout&&(f.root&&f.root.updateScroll(),f.updateLayout()),Ct.read(o);const h=Tl(window,"resize",()=>this.scalePositionWithinConstraints()),x=f.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(He(b=>{const v=this.getAxisMotionValue(b);v&&(this.originPoint[b]+=y[b].translate,v.set(v.get()+y[b].translate))}),this.visualElement.render())}));return()=>{h(),r(),m(),x&&x()}}getProps(){const l=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:o=!1,dragPropagation:f=!1,dragConstraints:m=!1,dragElastic:h=Su,dragMomentum:x=!0}=l;return{...l,drag:r,dragDirectionLock:o,dragPropagation:f,dragConstraints:m,dragElastic:h,dragMomentum:x}}}function Fs(n,l,r){return(l===!0||l===n)&&(r===null||r===n)}function w3(n,l=10){let r=null;return Math.abs(n.y)>l?r="y":Math.abs(n.x)>l&&(r="x"),r}class A3 extends Fa{constructor(l){super(l),this.removeGroupControls=qe,this.removeListeners=qe,this.controls=new N3(l)}mount(){const{dragControls:l}=this.node.getProps();l&&(this.removeGroupControls=l.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qe}update(){const{dragControls:l}=this.node.getProps(),{dragControls:r}=this.node.prevProps||{};l!==r&&(this.removeGroupControls(),l&&(this.removeGroupControls=l.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Ep=n=>(l,r)=>{n&&Ct.postRender(()=>n(l,r))};class M3 extends Fa{constructor(){super(...arguments),this.removePointerDownListener=qe}onPointerDown(l){this.session=new yy(l,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:gy(this.node)})}createPanHandlers(){const{onPanSessionStart:l,onPanStart:r,onPan:o,onPanEnd:f}=this.node.getProps();return{onSessionStart:Ep(l),onStart:Ep(r),onMove:o,onEnd:(m,h)=>{delete this.session,f&&Ct.postRender(()=>f(m,h))}}}mount(){this.removePointerDownListener=xl(this.node.current,"pointerdown",l=>this.onPointerDown(l))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Wc=!1;class z3 extends Y.Component{componentDidMount(){const{visualElement:l,layoutGroup:r,switchLayoutGroup:o,layoutId:f}=this.props,{projection:m}=l;m&&(r.group&&r.group.add(m),o&&o.register&&f&&o.register(m),Wc&&m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Is.hasEverUpdated=!0}getSnapshotBeforeUpdate(l){const{layoutDependency:r,visualElement:o,drag:f,isPresent:m}=this.props,{projection:h}=o;return h&&(h.isPresent=m,l.layoutDependency!==r&&h.setOptions({...h.options,layoutDependency:r}),Wc=!0,f||l.layoutDependency!==r||r===void 0||l.isPresent!==m?h.willUpdate():this.safeToRemove(),l.isPresent!==m&&(m?h.promote():h.relegate()||Ct.postRender(()=>{const x=h.getStack();(!x||!x.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:l}=this.props.visualElement;l&&(l.root.didUpdate(),Zu.postRender(()=>{!l.currentAnimation&&l.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:l,layoutGroup:r,switchLayoutGroup:o}=this.props,{projection:f}=l;Wc=!0,f&&(f.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(f),o&&o.deregister&&o.deregister(f))}safeToRemove(){const{safeToRemove:l}=this.props;l&&l()}render(){return null}}function by(n){const[l,r]=ry(),o=Y.useContext(Nu);return u.jsx(z3,{...n,layoutGroup:o,switchLayoutGroup:Y.useContext(my),isPresent:l,safeToRemove:r})}const E3={pan:{Feature:M3},drag:{Feature:A3,ProjectionNode:sy,MeasureLayout:by}};function Dp(n,l,r){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",r==="Start");const f="onHover"+r,m=o[f];m&&Ct.postRender(()=>m(l,Ml(l)))}class D3 extends Fa{mount(){const{current:l}=this.node;l&&(this.unmount=fb(l,(r,o)=>(Dp(this.node,o,"Start"),f=>Dp(this.node,f,"End"))))}unmount(){}}class C3 extends Fa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let l=!1;try{l=this.node.current.matches(":focus-visible")}catch{l=!0}!l||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Nl(Tl(this.node.current,"focus",()=>this.onFocus()),Tl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Cp(n,l,r){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",r==="Start");const f="onTap"+(r==="End"?"":r),m=o[f];m&&Ct.postRender(()=>m(l,Ml(l)))}class k3 extends Fa{mount(){const{current:l}=this.node;l&&(this.unmount=mb(l,(r,o)=>(Cp(this.node,o,"Start"),(f,{success:m})=>Cp(this.node,f,m?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ju=new WeakMap,Ic=new WeakMap,O3=n=>{const l=ju.get(n.target);l&&l(n)},_3=n=>{n.forEach(O3)};function R3({root:n,...l}){const r=n||document;Ic.has(r)||Ic.set(r,{});const o=Ic.get(r),f=JSON.stringify(l);return o[f]||(o[f]=new IntersectionObserver(_3,{root:n,...l})),o[f]}function V3(n,l,r){const o=R3(l);return ju.set(n,r),o.observe(n),()=>{ju.delete(n),o.unobserve(n)}}const U3={some:0,all:1};class B3 extends Fa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:l={}}=this.node.getProps(),{root:r,margin:o,amount:f="some",once:m}=l,h={root:r?r.current:void 0,rootMargin:o,threshold:typeof f=="number"?f:U3[f]},x=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,m&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:b,onViewportLeave:v}=this.node.getProps(),j=g?b:v;j&&j(y)};return V3(this.node.current,h,x)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:l,prevProps:r}=this.node;["amount","margin","root"].some(H3(l,r))&&this.startObserver()}unmount(){}}function H3({viewport:n={}},{viewport:l={}}={}){return r=>n[r]!==l[r]}const L3={inView:{Feature:B3},tap:{Feature:k3},focus:{Feature:C3},hover:{Feature:D3}},q3={layout:{ProjectionNode:sy,MeasureLayout:by}},G3={...d3,...L3,...E3,...q3},w=r3(G3,o3);const Y3=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),X3=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,r,o)=>o?o.toUpperCase():r.toLowerCase()),kp=n=>{const l=X3(n);return l.charAt(0).toUpperCase()+l.slice(1)},vy=(...n)=>n.filter((l,r,o)=>!!l&&l.trim()!==""&&o.indexOf(l)===r).join(" ").trim(),Q3=n=>{for(const l in n)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};var K3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Z3=Y.forwardRef(({color:n="currentColor",size:l=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:f="",children:m,iconNode:h,...x},y)=>Y.createElement("svg",{ref:y,...K3,width:l,height:l,stroke:n,strokeWidth:o?Number(r)*24/Number(l):r,className:vy("lucide",f),...!m&&!Q3(x)&&{"aria-hidden":"true"},...x},[...h.map(([g,b])=>Y.createElement(g,b)),...Array.isArray(m)?m:[m]]));const it=(n,l)=>{const r=Y.forwardRef(({className:o,...f},m)=>Y.createElement(Z3,{ref:m,iconNode:l,className:vy(`lucide-${Y3(kp(n))}`,`lucide-${n}`,o),...f}));return r.displayName=kp(n),r};const J3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],af=it("arrow-right",J3);const F3=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],P3=it("bot",F3);const $3=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],W3=it("brain",$3);const I3=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],tS=it("calendar",I3);const eS=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],aS=it("camera",eS);const iS=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],nS=it("chart-column",iS);const lS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Op=it("check",lS);const sS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],rS=it("chevron-left",sS);const oS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],cS=it("chevron-right",oS);const uS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],fS=it("circle-alert",uS);const dS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],_p=it("circle-question-mark",dS);const hS=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],nf=it("clock",hS);const mS=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],lf=it("dollar-sign",mS);const pS=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],gS=it("eye",pS);const yS=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],xS=it("file-text",yS);const bS=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],vS=it("fingerprint-pattern",bS);const SS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],jS=it("frown",SS);const TS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Sy=it("globe",TS);const NS=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],wS=it("instagram",NS);const AS=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],jy=it("layers",AS);const MS=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Ty=it("lightbulb",MS);const zS=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Ny=it("linkedin",zS);const ES=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],DS=it("mail",ES);const CS=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],wy=it("message-circle",CS);const kS=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],OS=it("message-square",kS);const _S=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],RS=it("mic",_S);const VS=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],US=it("moon",VS);const BS=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],HS=it("music-2",BS);const LS=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],qS=it("palette",LS);const GS=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],YS=it("pen-line",GS);const XS=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Rp=it("play",XS);const QS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],KS=it("search",QS);const ZS=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],JS=it("share-2",ZS);const FS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],PS=it("shield",FS);const $S=[["path",{d:"M12 10.189V14",key:"1p8cqu"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",key:"7tigtc"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"1924j5"}]],WS=it("ship",$S);const IS=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],tj=it("shopping-cart",IS);const ej=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],aj=it("smartphone",ej);const ij=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Me=it("sparkles",ij);const nj=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Vp=it("star",nj);const lj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],sj=it("target",lj);const rj=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],oj=it("trending-down",rj);const cj=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],dn=it("trending-up",cj);const uj=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],fj=it("triangle-alert",uj);const dj=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Ay=it("trophy",dj);const hj=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],My=it("twitter",hj);const mj=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],pj=it("user",mj);const gj=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],fr=it("users",gj);const yj=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],xj=it("video",yj);const bj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Up=it("x",bj);const vj=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Sj=it("youtube",vj);const jj=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],dr=it("zap",jj);function Tj(){return u.jsxs("div",{className:"slide slide-title",children:[u.jsxs(w.div,{className:"title-content",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[u.jsxs("div",{className:"floating-shapes",children:[u.jsx(w.div,{className:"shape shape-1",animate:{y:[0,-20,0],rotate:[0,180,360]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}}),u.jsx(w.div,{className:"shape shape-2",animate:{y:[0,20,0],rotate:[360,180,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),u.jsx(w.div,{className:"shape shape-3",animate:{x:[0,30,0],y:[0,-15,0]},transition:{duration:6,repeat:1/0,ease:"easeInOut"}})]}),u.jsx(w.div,{className:"hero-badge",initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3,duration:.8},children:u.jsx("span",{className:"badge-text",children:"SECTION 01 — THE WHY"})}),u.jsxs(w.h1,{className:"hero-title",initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.5,duration:.8},children:[u.jsx("span",{className:"title-line",children:"The"}),u.jsx("span",{className:"title-line gradient-text",children:"Algorithmic"}),u.jsx("span",{className:"title-line",children:"Imperative"})]}),u.jsx(w.p,{className:"hero-subtitle",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.8,duration:.8},children:"Why the rules of content have fundamentally changed"}),u.jsxs(w.div,{className:"scroll-indicator",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5},children:[u.jsx(w.div,{className:"scroll-line",animate:{y:[0,10,0]},transition:{duration:1.5,repeat:1/0}}),u.jsx("span",{children:"Press → or swipe to continue"})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-title {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .title-content {
          position: relative;
          z-index: 2;
          max-width: 1000px;
          padding: 2rem;
        }

        .floating-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.1));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          top: -100px;
          right: -50px;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          bottom: -50px;
          left: -30px;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          top: 50%;
          left: 10%;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.75rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          margin-bottom: 2rem;
        }

        .badge-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.3em;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 10vw, 7rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .title-line {
          display: block;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 30%, #f093fb 60%, #4facfe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.6);
          max-width: 500px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        .scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }

        .scroll-line {
          width: 1px;
          height: 30px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
        }
      `})]})}function Nj(){const n=[{icon:wS,color:"#E1306C",name:"Instagram"},{icon:Sj,color:"#FF0000",name:"YouTube"},{icon:My,color:"#1DA1F2",name:"X/Twitter"},{icon:HS,color:"#00f2ea",name:"TikTok"},{icon:Ny,color:"#0077B5",name:"LinkedIn"},{icon:wy,color:"#25D366",name:"WhatsApp"},{icon:aj,color:"#667eea",name:"Threads"}];return u.jsxs("div",{className:"slide slide-platforms",children:[u.jsxs("div",{className:"content-grid",children:[u.jsxs(w.div,{className:"stat-section",initial:{x:-50,opacity:0},animate:{x:0,opacity:1},transition:{duration:.8},children:[u.jsx("span",{className:"stat-label",children:"Average user presence"}),u.jsxs("div",{className:"mega-stat",children:[u.jsx(w.span,{className:"stat-number",initial:{scale:0},animate:{scale:1},transition:{delay:.3,type:"spring",stiffness:100},children:"6.84"}),u.jsx("span",{className:"stat-unit",children:"Platforms"})]}),u.jsx("p",{className:"stat-description",children:"The modern creator must maintain presence across nearly 7 different platforms simultaneously"})]}),u.jsx(w.div,{className:"visual-section",initial:{x:50,opacity:0},animate:{x:0,opacity:1},transition:{duration:.8,delay:.2},children:u.jsxs("div",{className:"juggling-container",children:[u.jsx(w.div,{className:"central-figure",animate:{y:[0,-5,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},children:u.jsxs("div",{className:"figure-body",children:[u.jsx("div",{className:"figure-head"}),u.jsx("div",{className:"figure-torso"}),u.jsxs("div",{className:"figure-arms",children:[u.jsx(w.div,{className:"arm left",animate:{rotate:[-10,10,-10]},transition:{duration:.5,repeat:1/0}}),u.jsx(w.div,{className:"arm right",animate:{rotate:[10,-10,10]},transition:{duration:.5,repeat:1/0,delay:.25}})]})]})}),n.map((l,r)=>{const o=r*360/n.length,f=140;return u.jsxs(w.div,{className:"app-orb",style:{"--app-color":l.color},initial:{opacity:0,scale:0},animate:{opacity:1,scale:1,x:Math.cos(o*Math.PI/180)*f,y:Math.sin(o*Math.PI/180)*f},transition:{delay:.5+r*.1,type:"spring",stiffness:100},whileHover:{scale:1.2},children:[u.jsx(w.div,{animate:{y:[0,-10,0],rotate:[0,5,-5,0]},transition:{duration:2+r*.3,repeat:1/0,ease:"easeInOut",delay:r*.2},children:u.jsx(l.icon,{size:24})}),u.jsx("span",{className:"app-name",children:l.name})]},r)})]})})]}),u.jsx("style",{jsx:!0,children:`
        .slide-platforms {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          width: 100%;
          align-items: center;
        }

        .stat-section {
          text-align: left;
        }

        .stat-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 1rem;
          display: block;
        }

        .mega-stat {
          margin-bottom: 1.5rem;
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: clamp(5rem, 12vw, 8rem);
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          display: block;
        }

        .stat-unit {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          display: block;
          margin-top: 0.5rem;
        }

        .stat-description {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
          max-width: 400px;
        }

        .visual-section {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .juggling-container {
          position: relative;
          width: 350px;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .central-figure {
          position: relative;
          z-index: 10;
        }

        .figure-body {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .figure-head {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 10px;
        }

        .figure-torso {
          width: 40px;
          height: 60px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.2));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px 20px 10px 10px;
        }

        .figure-arms {
          position: absolute;
          top: 60px;
          width: 120px;
          display: flex;
          justify-content: space-between;
        }

        .arm {
          width: 8px;
          height: 50px;
          background: linear-gradient(180deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.2));
          border-radius: 4px;
          transform-origin: top center;
        }

        .app-orb {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          color: var(--app-color);
          cursor: pointer;
          transition: box-shadow 0.3s ease;
        }

        .app-orb:hover {
          box-shadow: 0 0 30px var(--app-color);
        }

        .app-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.6rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 900px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .stat-section {
            text-align: center;
          }

          .stat-description {
            margin: 0 auto;
          }
        }
      `})]})}function wj(){return u.jsxs("div",{className:"slide slide-video",children:[u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsx("span",{className:"slide-label",children:"The Dominant Medium"}),u.jsxs("h2",{className:"slide-title",children:["Video is ",u.jsx("span",{className:"highlight",children:"King"})]})]}),u.jsxs(w.div,{className:"market-visual",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.8,delay:.3},children:[u.jsxs("div",{className:"glass-card main-stat",children:[u.jsx(w.div,{className:"stat-icon",animate:{rotate:[0,360]},transition:{duration:20,repeat:1/0,ease:"linear"},children:u.jsx(lf,{size:40})}),u.jsx(w.div,{className:"stat-value",initial:{scale:0},animate:{scale:1},transition:{delay:.6,type:"spring",stiffness:100},children:"$140B"}),u.jsx("div",{className:"stat-label",children:"Video Ad Market"}),u.jsx("div",{className:"stat-year",children:"2024 Global Value"})]}),u.jsxs(w.div,{className:"metric-card metric-1",initial:{x:-50,opacity:0},animate:{x:0,opacity:1},transition:{delay:.8},children:[u.jsx(Rp,{size:20}),u.jsx("span",{children:"82% of internet traffic"})]}),u.jsxs(w.div,{className:"metric-card metric-2",initial:{x:50,opacity:0},animate:{x:0,opacity:1},transition:{delay:.9},children:[u.jsx(dn,{size:20}),u.jsx("span",{children:"15% YoY growth"})]}),u.jsxs(w.div,{className:"metric-card metric-3",initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{delay:1},children:[u.jsx("span",{className:"big-number",children:"2x"}),u.jsx("span",{children:"engagement vs static"})]})]}),u.jsx("div",{className:"video-frame-deco",children:u.jsx(w.div,{className:"play-button",animate:{scale:[1,1.1,1],boxShadow:["0 0 0 0 rgba(102, 126, 234, 0.4)","0 0 0 20px rgba(102, 126, 234, 0)","0 0 0 0 rgba(102, 126, 234, 0)"]},transition:{duration:2,repeat:1/0},children:u.jsx(Rp,{size:32,fill:"white"})})})]}),u.jsx("style",{jsx:!0,children:`
        .slide-video {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem;
          position: relative;
          overflow: hidden;
        }

        .content-wrapper {
          max-width: 1100px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 3rem;
        }

        .slide-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          display: block;
          margin-bottom: 1rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 700;
          color: white;
        }

        .highlight {
          background: linear-gradient(135deg, #f5576c 0%, #f093fb 50%, #667eea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .market-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 350px;
        }

        .glass-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 30px;
          padding: 3rem;
          text-align: center;
        }

        .main-stat {
          position: relative;
          z-index: 2;
        }

        .stat-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: clamp(4rem, 10vw, 6rem);
          font-weight: 700;
          background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .stat-label {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          margin-top: 0.5rem;
        }

        .stat-year {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.5rem;
        }

        .metric-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .metric-1 {
          top: 20%;
          left: 0;
        }

        .metric-2 {
          top: 20%;
          right: 0;
        }

        .metric-3 {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .big-number {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #38ef7d;
        }

        .video-frame-deco {
          position: absolute;
          top: 50%;
          right: 5%;
          transform: translateY(-50%);
          width: 200px;
          height: 120px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
        }

        .play-button {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .metric-card {
            position: relative;
            margin: 1rem auto;
          }

          .metric-1, .metric-2, .metric-3 {
            top: auto;
            left: auto;
            right: auto;
            bottom: auto;
            transform: none;
          }

          .market-visual {
            flex-direction: column;
          }

          .video-frame-deco {
            display: none;
          }
        }
      `})]})}function Aj(){return u.jsxs("div",{className:"slide slide-discovery",children:[u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsx("span",{className:"slide-label",children:"Behavioral Shift"}),u.jsxs("h2",{className:"slide-title",children:["The Discovery ",u.jsx("span",{className:"highlight",children:"Shift"})]}),u.jsx("p",{className:"slide-subtitle",children:"Social Media has surpassed Search as the primary discovery channel"})]}),u.jsxs("div",{className:"comparison-container",children:[u.jsxs(w.div,{className:"platform-card social",initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{delay:.4,duration:.8},children:[u.jsxs("div",{className:"card-header",children:[u.jsx(JS,{size:28}),u.jsx("span",{children:"Social Media"})]}),u.jsx(w.div,{className:"trend-bar",initial:{height:0},animate:{height:"80%"},transition:{delay:.8,duration:1,ease:"easeOut"},children:u.jsx("span",{className:"trend-value",children:"54%"})}),u.jsxs("div",{className:"trend-label",children:[u.jsx(dn,{size:16}),"Primary Discovery"]})]}),u.jsx(w.div,{className:"vs-indicator",initial:{scale:0},animate:{scale:1},transition:{delay:.6,type:"spring"},children:u.jsx("span",{children:"VS"})}),u.jsxs(w.div,{className:"platform-card search",initial:{x:100,opacity:0},animate:{x:0,opacity:1},transition:{delay:.4,duration:.8},children:[u.jsxs("div",{className:"card-header",children:[u.jsx(KS,{size:28}),u.jsx("span",{children:"Traditional Search"})]}),u.jsx(w.div,{className:"trend-bar declining",initial:{height:0},animate:{height:"45%"},transition:{delay:.8,duration:1,ease:"easeOut"},children:u.jsx("span",{className:"trend-value",children:"46%"})}),u.jsxs("div",{className:"trend-label declining",children:[u.jsx(dn,{size:16,style:{transform:"rotate(180deg)"}}),"Secondary Source"]})]})]}),u.jsxs(w.div,{className:"genz-stat",initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{delay:1.2},children:[u.jsx(fr,{size:24}),u.jsxs("span",{children:[u.jsx("strong",{children:"67%"})," of Gen Z start product research on TikTok"]})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-discovery {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }

        .content-wrapper {
          max-width: 1100px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 3rem;
        }

        .slide-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          display: block;
          margin-bottom: 1rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 600px;
          margin: 0 auto;
        }

        .comparison-container {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 2rem;
          height: 350px;
          margin-bottom: 2rem;
        }

        .platform-card {
          flex: 1;
          max-width: 280px;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin-bottom: auto;
        }

        .platform-card.social .card-header {
          color: #4facfe;
        }

        .platform-card.search .card-header {
          color: rgba(255, 255, 255, 0.5);
        }

        .trend-bar {
          width: 100%;
          background: linear-gradient(180deg, #4facfe 0%, #00f2fe 100%);
          border-radius: 16px 16px 0 0;
          margin-top: auto;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 1rem;
          position: relative;
        }

        .trend-bar.declining {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
        }

        .trend-value {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
        }

        .trend-label {
          position: absolute;
          bottom: -2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: #4facfe;
          white-space: nowrap;
        }

        .trend-label.declining {
          color: rgba(255, 255, 255, 0.4);
        }

        .vs-indicator {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 3rem;
          flex-shrink: 0;
        }

        .genz-stat {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 2rem;
        }

        .genz-stat strong {
          color: #00f2fe;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .comparison-container {
            flex-direction: column;
            height: auto;
            gap: 1rem;
          }

          .platform-card {
            max-width: 100%;
            height: 200px;
          }

          .vs-indicator {
            margin: 0;
          }
        }
      `})]})}function Mj(){const n=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],l=[1,2,3,4];return u.jsxs("div",{className:"slide slide-consistency",children:[u.jsxs(w.div,{className:"section-badge",initial:{y:-30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6},children:[u.jsx(fj,{size:16}),u.jsx("span",{children:"SECTION 02 — THE PAIN"})]}),u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsxs("h2",{className:"slide-title",children:["The Consistency ",u.jsx("span",{className:"highlight",children:"Paradox"})]}),u.jsx("p",{className:"slide-subtitle",children:"Success demands relentless content output, but humans weren't built for algorithms"})]}),u.jsxs(w.div,{className:"calendar-visual",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.4,duration:.8},children:[u.jsxs("div",{className:"calendar-header",children:[u.jsx(tS,{size:24}),u.jsx("span",{children:"Content Calendar"}),u.jsx("span",{className:"month",children:"Every Month. Forever."})]}),u.jsxs("div",{className:"calendar-grid",children:[u.jsx("div",{className:"days-row",children:n.map((r,o)=>u.jsx("div",{className:"day-label",children:r},o))}),l.map((r,o)=>u.jsx("div",{className:"week-row",children:n.map((f,m)=>u.jsx(w.div,{className:"calendar-cell",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:.6+(o*7+m)*.03,type:"spring",stiffness:200},children:u.jsx(w.span,{className:"post-badge",animate:{scale:[1,1.05,1],opacity:[.8,1,.8]},transition:{duration:1.5,repeat:1/0,delay:(o*7+m)*.1},children:"POST"})},m))},o))]}),u.jsx("div",{className:"calendar-footer",children:u.jsxs(w.div,{className:"stress-indicator",animate:{opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0},children:[u.jsx("span",{className:"pulse-dot"}),u.jsx("span",{children:"28 posts required this month"})]})})]}),u.jsxs(w.div,{className:"insight-card",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:1.2},children:[u.jsx("span",{className:"insight-stat",children:"3-5x daily"}),u.jsx("span",{className:"insight-text",children:"posting frequency needed for algorithmic visibility"})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-consistency {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }

        .section-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(245, 87, 108, 0.2), rgba(245, 87, 108, 0.05));
          border: 1px solid rgba(245, 87, 108, 0.3);
          border-radius: 100px;
          margin-bottom: 2rem;
          color: #f5576c;
        }

        .section-badge span {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        .content-wrapper {
          max-width: 900px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2.5rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 500px;
          margin: 0 auto;
        }

        .calendar-visual {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .calendar-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 1rem;
          color: white;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
        }

        .month {
          margin-left: auto;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.4);
        }

        .calendar-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .days-row, .week-row {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
        }

        .day-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          text-align: center;
          padding: 0.5rem;
        }

        .calendar-cell {
          aspect-ratio: 1;
          background: rgba(245, 87, 108, 0.1);
          border: 1px solid rgba(245, 87, 108, 0.2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .post-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.6rem;
          font-weight: 700;
          color: #f5576c;
          letter-spacing: 0.05em;
        }

        .calendar-footer {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stress-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #f5576c;
          border-radius: 50%;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }

        .insight-card {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem 2.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
        }

        .insight-stat {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #f5576c, #f093fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .insight-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.25rem;
        }
      `})]})}function zj(){return u.jsxs("div",{className:"slide slide-burnout",children:[u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsxs("h2",{className:"slide-title",children:[u.jsx("span",{className:"highlight",children:"70%"})," Burnout"]}),u.jsx("p",{className:"slide-subtitle",children:"of content creators report experiencing burnout within their first year"})]}),u.jsx(w.div,{className:"battery-visual",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.4,duration:.8},children:u.jsxs("div",{className:"battery-container",children:[u.jsxs(w.div,{className:"battery-body",initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},children:[u.jsx("div",{className:"battery-cap"}),u.jsxs("div",{className:"battery-inner",children:[u.jsx(w.div,{className:"battery-level",initial:{width:"100%"},animate:{width:"15%"},transition:{delay:1,duration:2,ease:"easeOut"}}),u.jsx(w.div,{className:"battery-warning",initial:{opacity:0},animate:{opacity:[0,1,0]},transition:{delay:2.5,duration:1,repeat:1/0},children:u.jsx(fS,{size:32})})]}),u.jsx(w.span,{className:"battery-percent",initial:{opacity:0},animate:{opacity:1},transition:{delay:3},children:"15%"})]}),u.jsx("div",{className:"drain-indicators",children:["Scripting","Filming","Editing","Posting","Engaging"].map((n,l)=>u.jsxs(w.div,{className:"drain-item",initial:{x:50,opacity:0},animate:{x:0,opacity:1},transition:{delay:.8+l*.15},children:[u.jsx("span",{className:"drain-label",children:n}),u.jsx(w.div,{className:"drain-bar",initial:{width:0},animate:{width:`${80-l*10}%`},transition:{delay:1+l*.15,duration:.8}})]},l))})]})}),u.jsxs(w.div,{className:"stats-row",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:1.5},children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-value",children:"61%"}),u.jsx("span",{className:"stat-label",children:"Feel overwhelmed daily"})]}),u.jsx("div",{className:"stat-divider"}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-value",children:"42%"}),u.jsx("span",{className:"stat-label",children:"Consider quitting"})]}),u.jsx("div",{className:"stat-divider"}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-value",children:"8hrs"}),u.jsx("span",{className:"stat-label",children:"Avg. daily content work"})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-burnout {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }

        .content-wrapper {
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 3rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 10vw, 6rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #f5576c 0%, #f5af19 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 500px;
          margin: 0 auto;
        }

        .battery-visual {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .battery-container {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .battery-body {
          position: relative;
          width: 200px;
          height: 100px;
          background: rgba(255, 255, 255, 0.05);
          border: 3px solid rgba(245, 87, 108, 0.5);
          border-radius: 16px;
          display: flex;
          align-items: center;
          padding: 8px;
        }

        .battery-cap {
          position: absolute;
          right: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 40px;
          background: rgba(245, 87, 108, 0.5);
          border-radius: 0 4px 4px 0;
        }

        .battery-inner {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          position: relative;
          overflow: hidden;
        }

        .battery-level {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: linear-gradient(90deg, #f5576c 0%, #f5af19 100%);
          border-radius: 8px;
        }

        .battery-warning {
          position: absolute;
          right: 50%;
          top: 50%;
          transform: translate(50%, -50%);
          color: #f5576c;
        }

        .battery-percent {
          position: absolute;
          bottom: -2rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #f5576c;
        }

        .drain-indicators {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          min-width: 200px;
        }

        .drain-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .drain-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          text-align: left;
        }

        .drain-bar {
          height: 6px;
          background: linear-gradient(90deg, #f5576c, rgba(245, 87, 108, 0.3));
          border-radius: 3px;
        }

        .stats-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #f5576c;
        }

        .stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .battery-container {
            flex-direction: column;
          }

          .stats-row {
            flex-direction: column;
            border-radius: 24px;
            padding: 1.5rem;
          }

          .stat-divider {
            width: 100%;
            height: 1px;
          }
        }
      `})]})}function Ej(){const n=[{icon:aS,label:"Videographer",color:"#667eea"},{icon:YS,label:"Editor",color:"#764ba2"},{icon:qS,label:"Designer",color:"#f093fb"},{icon:nS,label:"Analyst",color:"#4facfe"},{icon:OS,label:"Community Mgr",color:"#00f2fe"},{icon:nf,label:"Scheduler",color:"#38ef7d"},{icon:lf,label:"Accountant",color:"#f5af19"},{icon:RS,label:"Host",color:"#f5576c"},{icon:Ty,label:"Strategist",color:"#fa709a"},{icon:pj,label:"Talent",color:"#fee140"}];return u.jsxs("div",{className:"slide slide-army",children:[u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsxs("h2",{className:"slide-title",children:["The One-Person Army ",u.jsx("span",{className:"highlight",children:"Fallacy"})]}),u.jsx("p",{className:"slide-subtitle",children:"Modern content creation demands an impossible breadth of skills"})]}),u.jsxs(w.div,{className:"hats-visual",initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},children:[u.jsxs(w.div,{className:"central-person",animate:{y:[0,-5,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},children:[u.jsx("div",{className:"person-glow"}),u.jsxs("div",{className:"person-body",children:[u.jsx("div",{className:"person-head",children:u.jsx(w.div,{className:"stress-indicator",animate:{scale:[1,1.2,1],opacity:[.5,1,.5]},transition:{duration:1.5,repeat:1/0},children:"!"})}),u.jsxs("div",{className:"person-torso",children:[u.jsx("div",{className:"arm arm-left"}),u.jsx("div",{className:"arm arm-right"})]})]})]}),n.map((l,r)=>{const o=r*360/n.length-90,f=180,m=Math.cos(o*Math.PI/180)*f,h=Math.sin(o*Math.PI/180)*f;return u.jsxs(w.div,{className:"hat-item",style:{"--hat-color":l.color},initial:{opacity:0,scale:0},animate:{opacity:1,scale:1,x:m,y:h},transition:{delay:.6+r*.08,type:"spring",stiffness:150},whileHover:{scale:1.15},children:[u.jsx(w.div,{className:"hat-icon",animate:{rotate:[0,5,-5,0],y:[0,-3,0]},transition:{duration:2+r*.2,repeat:1/0,ease:"easeInOut",delay:r*.15},children:u.jsx(l.icon,{size:20})}),u.jsx("span",{className:"hat-label",children:l.label})]},r)}),u.jsx("svg",{className:"connection-lines",viewBox:"-250 -250 500 500",children:n.map((l,r)=>{const o=r*360/n.length-90,f=180,m=Math.cos(o*Math.PI/180)*f,h=Math.sin(o*Math.PI/180)*f;return u.jsx(w.line,{x1:"0",y1:"0",x2:m,y2:h,stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"1",initial:{pathLength:0},animate:{pathLength:1},transition:{delay:.8+r*.05,duration:.5}},r)})})]}),u.jsxs(w.div,{className:"insight-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:2},children:[u.jsx("span",{className:"count",children:"10"})," distinct roles, one exhausted creator"]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-army {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }

        .content-wrapper {
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #f5576c 0%, #f5af19 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .hats-visual {
          position: relative;
          width: 450px;
          height: 450px;
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .connection-lines {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .central-person {
          position: relative;
          z-index: 10;
        }

        .person-glow {
          position: absolute;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(245, 87, 108, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .person-body {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .person-head {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stress-indicator {
          font-family: 'Syne', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #f5576c;
        }

        .person-torso {
          width: 35px;
          height: 50px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px 15px 10px 10px;
          margin-top: -5px;
          position: relative;
        }

        .arm {
          position: absolute;
          width: 8px;
          height: 40px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
          border-radius: 4px;
          top: 5px;
        }

        .arm-left {
          left: -15px;
          transform: rotate(45deg);
        }

        .arm-right {
          right: -15px;
          transform: rotate(-45deg);
        }

        .hat-item {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .hat-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--hat-color);
          cursor: pointer;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .hat-item:hover .hat-icon {
          box-shadow: 0 0 25px var(--hat-color);
          border-color: var(--hat-color);
        }

        .hat-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.6);
          white-space: nowrap;
        }

        .insight-text {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .count {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #f5576c;
        }

        @media (max-width: 600px) {
          .hats-visual {
            transform: scale(0.7);
          }
        }
      `})]})}function Dj(){return u.jsxs("div",{className:"slide slide-ideation",children:[u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsxs("h2",{className:"slide-title",children:["Ideation ",u.jsx("span",{className:"highlight",children:"Fatigue"})]}),u.jsx("p",{className:"slide-subtitle",children:"The constant pressure to create original, engaging content drains creative reserves"})]}),u.jsxs(w.div,{className:"blank-page-visual",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.4,duration:.8},children:[u.jsxs("div",{className:"page-container",children:[u.jsxs(w.div,{className:"paper",animate:{boxShadow:["0 20px 60px rgba(0, 0, 0, 0.3)","0 25px 80px rgba(0, 0, 0, 0.4)","0 20px 60px rgba(0, 0, 0, 0.3)"]},transition:{duration:3,repeat:1/0},children:[u.jsx("div",{className:"paper-lines",children:[...Array(12)].map((n,l)=>u.jsx("div",{className:"line"},l))}),u.jsx(w.div,{className:"cursor",animate:{opacity:[1,0,1]},transition:{duration:1,repeat:1/0}}),u.jsx(w.div,{className:"thought-bubble bubble-1",animate:{y:[0,-20,0],opacity:[.3,.6,.3]},transition:{duration:4,repeat:1/0},children:u.jsx(Ty,{size:16})}),u.jsx(w.div,{className:"thought-bubble bubble-2",animate:{y:[0,-15,0],opacity:[.2,.4,.2]},transition:{duration:3,repeat:1/0,delay:1},children:"?"}),u.jsx(w.div,{className:"thought-bubble bubble-3",animate:{y:[0,-25,0],opacity:[.1,.3,.1]},transition:{duration:5,repeat:1/0,delay:2},children:"..."})]}),u.jsx(w.div,{className:"emotion-indicator",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:1,type:"spring"},children:u.jsx(jS,{size:32})})]}),u.jsx("div",{className:"stressors",children:["What to post?","Writer's block","No inspiration","Deadline pressure","Content gap"].map((n,l)=>u.jsx(w.div,{className:"stressor-pill",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.2+l*.15},style:{"--delay":`${l*.5}s`},children:n},l))})]}),u.jsxs(w.div,{className:"stats-container",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:1.8},children:[u.jsxs("div",{className:"stat-box",children:[u.jsx("span",{className:"stat-number",children:"4hrs"}),u.jsx("span",{className:"stat-text",children:"average time stuck on ideation per week"})]}),u.jsxs("div",{className:"stat-box",children:[u.jsx("span",{className:"stat-number",children:"52%"}),u.jsx("span",{className:"stat-text",children:"creators cite ideation as biggest challenge"})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-ideation {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }

        .content-wrapper {
          max-width: 900px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2.5rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #f5576c 0%, #f5af19 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 500px;
          margin: 0 auto;
        }

        .blank-page-visual {
          position: relative;
          margin-bottom: 2.5rem;
        }

        .page-container {
          position: relative;
          display: inline-block;
        }

        .paper {
          width: 280px;
          height: 350px;
          background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 4px;
          padding: 2rem 1.5rem;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .paper-lines {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .line {
          height: 1px;
          background: rgba(0, 0, 0, 0.1);
          width: 100%;
        }

        .cursor {
          position: absolute;
          top: 2rem;
          left: 1.5rem;
          width: 2px;
          height: 20px;
          background: #333;
        }

        .thought-bubble {
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(102, 126, 234, 0.5);
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
        }

        .bubble-1 {
          top: -20px;
          right: 20px;
        }

        .bubble-2 {
          top: 30px;
          right: -25px;
        }

        .bubble-3 {
          top: 80px;
          right: -15px;
        }

        .emotion-indicator {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(245, 87, 108, 0.2), rgba(245, 87, 108, 0.1));
          border: 1px solid rgba(245, 87, 108, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f5576c;
        }

        .stressors {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 3rem;
        }

        .stressor-pill {
          padding: 0.5rem 1rem;
          background: rgba(245, 87, 108, 0.1);
          border: 1px solid rgba(245, 87, 108, 0.2);
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          animation: float 3s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .stats-container {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .stat-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.25rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #f5576c;
        }

        .stat-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          max-width: 150px;
          margin-top: 0.25rem;
        }

        @media (max-width: 600px) {
          .stats-container {
            flex-direction: column;
          }
        }
      `})]})}function Cj(){return u.jsxs("div",{className:"slide slide-avatar-intro",children:[u.jsxs(w.div,{className:"section-badge",initial:{y:-30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6},children:[u.jsx(Me,{size:16}),u.jsx("span",{children:"SECTION 03 — THE SOLUTION"})]}),u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsxs("h2",{className:"slide-title",children:["Enter the ",u.jsx("span",{className:"highlight",children:"Avatar"})]}),u.jsx("p",{className:"slide-subtitle",children:"AI-powered digital twins that look, sound, and move like you"})]}),u.jsxs("div",{className:"comparison-visual",children:[u.jsxs(w.div,{className:"avatar-card cartoon",initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{delay:.4,duration:.8},children:[u.jsxs("div",{className:"card-header",children:[u.jsx("span",{className:"card-label",children:"Traditional"}),u.jsx("span",{className:"card-badge outdated",children:"Outdated"})]}),u.jsxs("div",{className:"avatar-preview cartoon-preview",children:[u.jsxs("div",{className:"cartoon-face",children:[u.jsxs("div",{className:"cartoon-eyes",children:[u.jsx("div",{className:"eye"}),u.jsx("div",{className:"eye"})]}),u.jsx("div",{className:"cartoon-mouth"})]}),u.jsx("div",{className:"cartoon-body"})]}),u.jsxs("ul",{className:"feature-list negative",children:[u.jsx("li",{children:"Obviously fake"}),u.jsx("li",{children:"Limited expressions"}),u.jsx("li",{children:"Breaks trust"}),u.jsx("li",{children:"Low engagement"})]})]}),u.jsx(w.div,{className:"vs-badge",initial:{scale:0},animate:{scale:1},transition:{delay:.6,type:"spring"},children:"VS"}),u.jsxs(w.div,{className:"avatar-card realistic",initial:{x:100,opacity:0},animate:{x:0,opacity:1},transition:{delay:.4,duration:.8},children:[u.jsxs("div",{className:"card-header",children:[u.jsx("span",{className:"card-label",children:"AI Avatar"}),u.jsx("span",{className:"card-badge modern",children:"Cutting Edge"})]}),u.jsxs("div",{className:"avatar-preview realistic-preview",children:[u.jsx(w.div,{className:"realistic-glow",animate:{opacity:[.3,.6,.3],scale:[1,1.1,1]},transition:{duration:3,repeat:1/0}}),u.jsx("div",{className:"realistic-silhouette",children:u.jsxs("div",{className:"face-detail",children:[u.jsx("div",{className:"eye-realistic left"}),u.jsx("div",{className:"eye-realistic right"}),u.jsx(w.div,{className:"mouth-realistic",animate:{scaleY:[1,1.2,1]},transition:{duration:2,repeat:1/0}})]})}),u.jsx(w.div,{className:"ai-particles",animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"},children:[...Array(8)].map((n,l)=>u.jsx("div",{className:"particle",style:{transform:`rotate(${l*45}deg) translateY(-60px)`}},l))})]}),u.jsxs("ul",{className:"feature-list positive",children:[u.jsx("li",{children:"Photorealistic quality"}),u.jsx("li",{children:"Natural expressions"}),u.jsx("li",{children:"Builds connection"}),u.jsx("li",{children:"High engagement"})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-avatar-intro {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }

        .section-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(56, 239, 125, 0.2), rgba(56, 239, 125, 0.05));
          border: 1px solid rgba(56, 239, 125, 0.3);
          border-radius: 100px;
          margin-bottom: 2rem;
          color: #38ef7d;
        }

        .section-badge span {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        .content-wrapper {
          max-width: 1100px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2.5rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .comparison-visual {
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: 2rem;
        }

        .avatar-card {
          flex: 1;
          max-width: 320px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 1.5rem;
          text-align: left;
        }

        .avatar-card.realistic {
          border-color: rgba(56, 239, 125, 0.3);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .card-label {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: white;
        }

        .card-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-badge.outdated {
          background: rgba(245, 87, 108, 0.2);
          color: #f5576c;
        }

        .card-badge.modern {
          background: rgba(56, 239, 125, 0.2);
          color: #38ef7d;
        }

        .avatar-preview {
          height: 180px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 16px;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .cartoon-preview {
          flex-direction: column;
        }

        .cartoon-face {
          width: 60px;
          height: 60px;
          background: #ffd93d;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .cartoon-eyes {
          display: flex;
          gap: 12px;
        }

        .eye {
          width: 8px;
          height: 8px;
          background: #333;
          border-radius: 50%;
        }

        .cartoon-mouth {
          width: 20px;
          height: 3px;
          background: #333;
          border-radius: 2px;
        }

        .cartoon-body {
          width: 50px;
          height: 40px;
          background: #74b9ff;
          border-radius: 10px 10px 0 0;
          margin-top: -5px;
        }

        .realistic-preview {
          position: relative;
        }

        .realistic-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(56, 239, 125, 0.3) 0%, transparent 70%);
          border-radius: 50%;
        }

        .realistic-silhouette {
          width: 80px;
          height: 100px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          border-radius: 40px 40px 20px 20px;
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 20px;
        }

        .face-detail {
          width: 50px;
          height: 50px;
          position: relative;
        }

        .eye-realistic {
          position: absolute;
          width: 8px;
          height: 12px;
          background: rgba(56, 239, 125, 0.6);
          border-radius: 50%;
          top: 10px;
        }

        .eye-realistic.left { left: 8px; }
        .eye-realistic.right { right: 8px; }

        .mouth-realistic {
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 15px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        .ai-particles {
          position: absolute;
          width: 140px;
          height: 140px;
        }

        .particle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 4px;
          background: #38ef7d;
          border-radius: 50%;
          box-shadow: 0 0 10px #38ef7d;
        }

        .feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .feature-list li {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .feature-list.negative li {
          color: rgba(255, 255, 255, 0.4);
        }

        .feature-list.negative li::before {
          content: '✕';
          position: absolute;
          left: 0;
          color: #f5576c;
        }

        .feature-list.positive li {
          color: rgba(255, 255, 255, 0.8);
        }

        .feature-list.positive li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #38ef7d;
        }

        .vs-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          font-family: 'Syne', sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
          flex-shrink: 0;
          align-self: center;
        }

        @media (max-width: 800px) {
          .comparison-visual {
            flex-direction: column;
            align-items: center;
          }

          .vs-badge {
            margin: 1rem 0;
          }
        }
      `})]})}function kj(){return u.jsxs("div",{className:"slide slide-cost",children:[u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsxs("h2",{className:"slide-title",children:["The ",u.jsx("span",{className:"highlight",children:"99%"})," Cost Reduction"]}),u.jsx("p",{className:"slide-subtitle",children:"Professional video content at a fraction of traditional costs"})]}),u.jsxs("div",{className:"cost-comparison",children:[u.jsxs(w.div,{className:"cost-card traditional",initial:{x:-80,opacity:0},animate:{x:0,opacity:1},transition:{delay:.4,duration:.8},children:[u.jsx("div",{className:"cost-header",children:u.jsx("span",{className:"cost-type",children:"Traditional Production"})}),u.jsxs("div",{className:"cost-breakdown",children:[u.jsxs("div",{className:"cost-item",children:[u.jsx("span",{className:"item-label",children:"Talent/Actor"}),u.jsx("span",{className:"item-cost",children:"$3,000"})]}),u.jsxs("div",{className:"cost-item",children:[u.jsx("span",{className:"item-label",children:"Crew & Equipment"}),u.jsx("span",{className:"item-cost",children:"$2,500"})]}),u.jsxs("div",{className:"cost-item",children:[u.jsx("span",{className:"item-label",children:"Studio Rental"}),u.jsx("span",{className:"item-cost",children:"$1,500"})]}),u.jsxs("div",{className:"cost-item",children:[u.jsx("span",{className:"item-label",children:"Post-Production"}),u.jsx("span",{className:"item-cost",children:"$2,000"})]}),u.jsxs("div",{className:"cost-item",children:[u.jsx("span",{className:"item-label",children:"Misc & Contingency"}),u.jsx("span",{className:"item-cost",children:"$1,000"})]})]}),u.jsxs("div",{className:"cost-total",children:[u.jsx("span",{className:"total-label",children:"Per Video"}),u.jsx(w.span,{className:"total-amount",initial:{scale:0},animate:{scale:1},transition:{delay:.8,type:"spring"},children:"$10,000"})]})]}),u.jsx(w.div,{className:"reduction-indicator",initial:{scale:0},animate:{scale:1},transition:{delay:1,type:"spring"},children:u.jsxs(w.div,{className:"reduction-badge",animate:{boxShadow:["0 0 20px rgba(56, 239, 125, 0.3)","0 0 40px rgba(56, 239, 125, 0.5)","0 0 20px rgba(56, 239, 125, 0.3)"]},transition:{duration:2,repeat:1/0},children:[u.jsx(oj,{size:24}),u.jsx("span",{className:"reduction-percent",children:"99%"}),u.jsx("span",{className:"reduction-text",children:"LESS"})]})}),u.jsxs(w.div,{className:"cost-card ai-avatar",initial:{x:80,opacity:0},animate:{x:0,opacity:1},transition:{delay:.4,duration:.8},children:[u.jsxs("div",{className:"cost-header",children:[u.jsx("span",{className:"cost-type",children:"AI Avatar"}),u.jsx("span",{className:"recommended-badge",children:"Recommended"})]}),u.jsxs("div",{className:"cost-features",children:[u.jsx("div",{className:"feature-item",children:"✓ Unlimited takes"}),u.jsx("div",{className:"feature-item",children:"✓ No scheduling"}),u.jsx("div",{className:"feature-item",children:"✓ Instant delivery"}),u.jsx("div",{className:"feature-item",children:"✓ Easy edits"}),u.jsx("div",{className:"feature-item",children:"✓ Multi-language"})]}),u.jsxs("div",{className:"cost-total highlight-total",children:[u.jsx("span",{className:"total-label",children:"Per Video"}),u.jsx(w.span,{className:"total-amount",initial:{scale:0},animate:{scale:1},transition:{delay:1.2,type:"spring"},children:"$89"})]})]})]}),u.jsxs(w.div,{className:"roi-banner",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:1.5},children:[u.jsxs("div",{className:"roi-stat",children:[u.jsx("span",{className:"roi-number",children:"112x"}),u.jsx("span",{className:"roi-label",children:"more videos per budget"})]}),u.jsx("div",{className:"roi-divider"}),u.jsxs("div",{className:"roi-stat",children:[u.jsx("span",{className:"roi-number",children:"48hrs"}),u.jsx("span",{className:"roi-label",children:"time saved per video"})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-cost {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
        }

        .content-wrapper {
          max-width: 1100px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2.5rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .cost-comparison {
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .cost-card {
          flex: 1;
          max-width: 320px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 1.5rem;
          text-align: left;
        }

        .cost-card.traditional {
          opacity: 0.7;
        }

        .cost-card.ai-avatar {
          border-color: rgba(56, 239, 125, 0.3);
          box-shadow: 0 0 40px rgba(56, 239, 125, 0.1);
        }

        .cost-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cost-type {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: white;
        }

        .recommended-badge {
          padding: 0.25rem 0.75rem;
          background: rgba(56, 239, 125, 0.2);
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          color: #38ef7d;
          text-transform: uppercase;
        }

        .cost-breakdown {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .cost-item {
          display: flex;
          justify-content: space-between;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
        }

        .item-label {
          color: rgba(255, 255, 255, 0.5);
        }

        .item-cost {
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }

        .cost-features {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .feature-item {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .cost-total {
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .total-label {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .total-amount {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
        }

        .highlight-total .total-amount {
          background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .reduction-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          align-self: center;
        }

        .reduction-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(56, 239, 125, 0.2), rgba(56, 239, 125, 0.05));
          border: 2px solid rgba(56, 239, 125, 0.4);
          border-radius: 50%;
          color: #38ef7d;
        }

        .reduction-percent {
          font-family: 'Syne', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .reduction-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .roi-banner {
          display: inline-flex;
          align-items: center;
          gap: 2rem;
          padding: 1.25rem 2.5rem;
          background: rgba(56, 239, 125, 0.05);
          border: 1px solid rgba(56, 239, 125, 0.2);
          border-radius: 100px;
        }

        .roi-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .roi-number {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #38ef7d;
        }

        .roi-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .roi-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 900px) {
          .cost-comparison {
            flex-direction: column;
            align-items: center;
          }

          .reduction-indicator {
            transform: rotate(90deg);
            margin: 1rem 0;
          }

          .roi-banner {
            flex-direction: column;
            border-radius: 24px;
            padding: 1.5rem;
          }

          .roi-divider {
            width: 100%;
            height: 1px;
          }
        }
      `})]})}function Oj(){return u.jsxs("div",{className:"slide slide-reliability",children:[u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsxs("h2",{className:"slide-title",children:[u.jsx("span",{className:"highlight",children:"24/7"})," Reliability"]}),u.jsx("p",{className:"slide-subtitle",children:"Your AI avatar never sleeps, never calls in sick, never needs a break"})]}),u.jsxs(w.div,{className:"city-visual",initial:{opacity:0},animate:{opacity:1},transition:{delay:.4,duration:1},children:[u.jsxs("div",{className:"night-sky",children:[[...Array(30)].map((n,l)=>u.jsx(w.div,{className:"star",style:{left:`${Math.random()*100}%`,top:`${Math.random()*60}%`,animationDelay:`${Math.random()*3}s`},animate:{opacity:[.3,1,.3],scale:[.8,1,.8]},transition:{duration:2+Math.random()*2,repeat:1/0,delay:Math.random()*2}},l)),u.jsx(w.div,{className:"moon",animate:{y:[0,-5,0]},transition:{duration:6,repeat:1/0},children:u.jsx(US,{size:40})})]}),u.jsx("div",{className:"skyline",children:[120,180,100,220,140,190,110,160,200,130].map((n,l)=>u.jsx("div",{className:"building",style:{height:`${n}px`},children:u.jsx("div",{className:"windows",children:[...Array(Math.floor(n/30))].map((r,o)=>u.jsxs("div",{className:"window-row",children:[u.jsx("div",{className:"window dark"}),u.jsx("div",{className:"window dark"})]},o))})},l))}),u.jsxs(w.div,{className:"avatar-workstation",initial:{scale:0},animate:{scale:1},transition:{delay:1,type:"spring"},children:[u.jsx(w.div,{className:"glow-effect",animate:{opacity:[.3,.6,.3],scale:[1,1.1,1]},transition:{duration:3,repeat:1/0}}),u.jsxs("div",{className:"workstation-content",children:[u.jsxs("div",{className:"avatar-icon",children:[u.jsx(w.div,{className:"pulse-ring",animate:{scale:[1,1.5,1],opacity:[.5,0,.5]},transition:{duration:2,repeat:1/0}}),u.jsx(dr,{size:24})]}),u.jsxs("div",{className:"status-text",children:[u.jsx("span",{className:"status-main",children:"CREATING"}),u.jsx(w.span,{className:"status-dots",animate:{opacity:[1,.3,1]},transition:{duration:1.5,repeat:1/0},children:"..."})]})]})]}),u.jsxs(w.div,{className:"time-badge",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5},children:[u.jsx(nf,{size:14}),u.jsx("span",{children:"3:47 AM"})]})]}),u.jsx(w.div,{className:"benefits-grid",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:1.8},children:[{label:"Zero Downtime",value:"0%"},{label:"Always Available",value:"24/7"},{label:"Response Time",value:"<1hr"},{label:"Reliability",value:"99.9%"}].map((n,l)=>u.jsxs("div",{className:"benefit-item",children:[u.jsx("span",{className:"benefit-value",children:n.value}),u.jsx("span",{className:"benefit-label",children:n.label})]},l))})]}),u.jsx("style",{jsx:!0,children:`
        .slide-reliability {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem;
        }

        .content-wrapper {
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .city-visual {
          position: relative;
          height: 300px;
          margin-bottom: 2rem;
          overflow: hidden;
          border-radius: 24px;
          background: linear-gradient(180deg, #0a0a1a 0%, #1a1a3e 100%);
        }

        .night-sky {
          position: absolute;
          inset: 0;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
        }

        .moon {
          position: absolute;
          top: 30px;
          right: 50px;
          color: #ffeaa7;
          opacity: 0.8;
        }

        .skyline {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 8px;
          padding: 0 20px;
        }

        .building {
          width: 60px;
          background: linear-gradient(180deg, #2d3436 0%, #1a1a2e 100%);
          border-radius: 4px 4px 0 0;
          padding: 8px;
        }

        .windows {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .window-row {
          display: flex;
          justify-content: space-around;
        }

        .window {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }

        .window.dark {
          background: rgba(255, 255, 255, 0.05);
        }

        .window.lit {
          background: #ffeaa7;
          box-shadow: 0 0 10px rgba(255, 234, 167, 0.5);
        }

        .avatar-workstation {
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }

        .glow-effect {
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(56, 239, 125, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .workstation-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem 2rem;
          background: linear-gradient(135deg, rgba(56, 239, 125, 0.2), rgba(56, 239, 125, 0.05));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(56, 239, 125, 0.3);
          border-radius: 20px;
        }

        .avatar-icon {
          position: relative;
          width: 50px;
          height: 50px;
          background: rgba(56, 239, 125, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #38ef7d;
        }

        .pulse-ring {
          position: absolute;
          inset: 0;
          border: 2px solid #38ef7d;
          border-radius: 50%;
        }

        .status-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #38ef7d;
          letter-spacing: 0.1em;
        }

        .time-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .benefits-grid {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .benefit-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          min-width: 140px;
        }

        .benefit-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #38ef7d;
        }

        .benefit-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.25rem;
        }

        @media (max-width: 600px) {
          .benefits-grid {
            gap: 1rem;
          }

          .benefit-item {
            min-width: 120px;
            padding: 0.75rem 1rem;
          }
        }
      `})]})}function _j(){const n=[{icon:xS,label:"Write Script",desc:"AI-assisted or manual"},{icon:Me,label:"Select Avatar",desc:"Choose your digital twin"},{icon:xj,label:"Generate Video",desc:"Instant production"}];return u.jsxs("div",{className:"slide slide-ideation-solve",children:[u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsxs("h2",{className:"slide-title",children:["Solving ",u.jsx("span",{className:"highlight",children:"Ideation"})]}),u.jsx("p",{className:"slide-subtitle",children:"From blank page to finished video in minutes, not days"})]}),u.jsx("div",{className:"workflow-visual",children:n.map((l,r)=>u.jsxs(w.div,{className:"workflow-step",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.4+r*.2},children:[u.jsxs(w.div,{className:"step-card",whileHover:{scale:1.05,y:-5},transition:{type:"spring",stiffness:300},children:[u.jsx("div",{className:"step-number",children:String(r+1).padStart(2,"0")}),u.jsx(w.div,{className:"step-icon",animate:r===2?{boxShadow:["0 0 20px rgba(56, 239, 125, 0.3)","0 0 40px rgba(56, 239, 125, 0.5)","0 0 20px rgba(56, 239, 125, 0.3)"]}:{},transition:{duration:2,repeat:1/0},children:u.jsx(l.icon,{size:28})}),u.jsx("h3",{className:"step-label",children:l.label}),u.jsx("p",{className:"step-desc",children:l.desc})]}),r<n.length-1&&u.jsx(w.div,{className:"step-arrow",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.6+r*.2},children:u.jsx(af,{size:20})})]},r))}),u.jsxs(w.div,{className:"demo-container",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{delay:1.2},children:[u.jsxs("div",{className:"demo-header",children:[u.jsxs("div",{className:"demo-dots",children:[u.jsx("span",{className:"dot red"}),u.jsx("span",{className:"dot yellow"}),u.jsx("span",{className:"dot green"})]}),u.jsx("span",{className:"demo-title",children:"AI Video Generator"})]}),u.jsxs("div",{className:"demo-content",children:[u.jsxs("div",{className:"input-section",children:[u.jsx("div",{className:"input-label",children:"Your Script"}),u.jsx(w.div,{className:"input-preview",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5},children:u.jsx(w.span,{animate:{opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0},children:'"Welcome to our product launch..."'})})]}),u.jsx(w.div,{className:"processing-bar",initial:{scaleX:0},animate:{scaleX:1},transition:{delay:1.8,duration:1.5,ease:"easeOut"}}),u.jsxs("div",{className:"output-section",children:[u.jsx("div",{className:"output-label",children:"Generated Video"}),u.jsxs(w.div,{className:"video-preview",initial:{opacity:0},animate:{opacity:1},transition:{delay:3},children:[u.jsx("div",{className:"video-placeholder",children:u.jsx(w.div,{className:"play-indicator",animate:{scale:[1,1.1,1]},transition:{duration:1.5,repeat:1/0},children:"▶"})}),u.jsx("span",{className:"video-duration",children:"02:34"})]})]})]})]}),u.jsxs(w.div,{className:"time-comparison",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:3.5},children:[u.jsxs("div",{className:"time-item",children:[u.jsx("span",{className:"time-value old",children:"48 hours"}),u.jsx("span",{className:"time-label",children:"Traditional"})]}),u.jsx("div",{className:"time-arrow",children:"→"}),u.jsxs("div",{className:"time-item",children:[u.jsx("span",{className:"time-value new",children:"15 minutes"}),u.jsx("span",{className:"time-label",children:"With AI Avatar"})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-ideation-solve {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
        }

        .content-wrapper {
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2.5rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .workflow-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .workflow-step {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .step-card {
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          cursor: pointer;
          min-width: 160px;
        }

        .step-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.3);
          margin-bottom: 0.75rem;
        }

        .step-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 1rem;
          background: linear-gradient(135deg, rgba(56, 239, 125, 0.2), rgba(56, 239, 125, 0.05));
          border: 1px solid rgba(56, 239, 125, 0.3);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #38ef7d;
        }

        .step-label {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.25rem;
        }

        .step-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .step-arrow {
          color: rgba(255, 255, 255, 0.3);
          padding: 0 0.5rem;
        }

        .demo-container {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .demo-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .demo-dots {
          display: flex;
          gap: 0.4rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot.red { background: #ff5f57; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #28ca42; }

        .demo-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .demo-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .input-section, .output-section {
          text-align: left;
        }

        .input-label, .output-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .input-preview {
          padding: 1rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          font-style: italic;
        }

        .processing-bar {
          height: 4px;
          background: linear-gradient(90deg, #38ef7d, #11998e);
          border-radius: 2px;
          transform-origin: left;
        }

        .video-preview {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .video-placeholder {
          width: 120px;
          height: 70px;
          background: linear-gradient(135deg, rgba(56, 239, 125, 0.2), rgba(56, 239, 125, 0.05));
          border: 1px solid rgba(56, 239, 125, 0.3);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .play-indicator {
          color: #38ef7d;
          font-size: 1.25rem;
        }

        .video-duration {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .time-comparison {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
        }

        .time-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .time-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .time-value.old {
          color: rgba(255, 255, 255, 0.4);
          text-decoration: line-through;
        }

        .time-value.new {
          color: #38ef7d;
        }

        .time-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .time-arrow {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 700px) {
          .workflow-visual {
            flex-direction: column;
          }

          .step-arrow {
            transform: rotate(90deg);
          }
        }
      `})]})}function Rj(){const n=[{name:"Video Quality",heygen:"4K",synthesia:"1080p",winner:"heygen"},{name:"Lip Sync Accuracy",heygen:"98%",synthesia:"92%",winner:"heygen"},{name:"Avatar Customization",heygen:"Extensive",synthesia:"Limited",winner:"heygen"},{name:"Languages Supported",heygen:"140+",synthesia:"120+",winner:"heygen"},{name:"Starting Price",heygen:"$24/mo",synthesia:"$29/mo",winner:"heygen"},{name:"API Access",heygen:!0,synthesia:!0,winner:"tie"},{name:"Custom Avatar",heygen:!0,synthesia:!0,winner:"tie"},{name:"Real-time Streaming",heygen:!0,synthesia:!1,winner:"heygen"}];return u.jsxs("div",{className:"slide slide-comparison",children:[u.jsxs(w.div,{className:"section-badge",initial:{y:-30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6},children:[u.jsx(Ay,{size:16}),u.jsx("span",{children:"SECTION 04 — THE SHOWCASE"})]}),u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsxs("h2",{className:"slide-title",children:["Platform ",u.jsx("span",{className:"highlight",children:"Face-off"})]}),u.jsx("p",{className:"slide-subtitle",children:"Comparing the leading AI avatar platforms"})]}),u.jsxs(w.div,{className:"comparison-table",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[u.jsxs("div",{className:"table-header",children:[u.jsx("div",{className:"header-cell feature-header",children:"Features"}),u.jsxs("div",{className:"header-cell platform-header heygen",children:[u.jsx("div",{className:"platform-logo",children:"H"}),u.jsx("span",{children:"HeyGen"})]}),u.jsxs("div",{className:"header-cell platform-header synthesia",children:[u.jsx("div",{className:"platform-logo",children:"S"}),u.jsx("span",{children:"Synthesia"})]})]}),u.jsx("div",{className:"table-body",children:n.map((l,r)=>u.jsxs(w.div,{className:"table-row",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.5+r*.08},children:[u.jsx("div",{className:"row-cell feature-cell",children:l.name}),u.jsx("div",{className:`row-cell value-cell ${l.winner==="heygen"?"winner":""}`,children:typeof l.heygen=="boolean"?l.heygen?u.jsx(Op,{size:18,className:"check-icon"}):u.jsx(Up,{size:18,className:"x-icon"}):l.heygen}),u.jsx("div",{className:`row-cell value-cell ${l.winner==="synthesia"?"winner":""}`,children:typeof l.synthesia=="boolean"?l.synthesia?u.jsx(Op,{size:18,className:"check-icon"}):u.jsx(Up,{size:18,className:"x-icon"}):l.synthesia})]},r))})]}),u.jsx(w.p,{className:"table-note",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5},children:"* Data as of 2024. Features and pricing subject to change."})]}),u.jsx("style",{jsx:!0,children:`
        .slide-comparison {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
        }

        .section-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(79, 172, 254, 0.05));
          border: 1px solid rgba(79, 172, 254, 0.3);
          border-radius: 100px;
          margin-bottom: 1.5rem;
          color: #4facfe;
        }

        .section-badge span {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        .content-wrapper {
          max-width: 900px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
        }

        .highlight {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .comparison-table {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
        }

        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header-cell {
          padding: 1rem 1.25rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
        }

        .feature-header {
          text-align: left;
        }

        .platform-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .platform-logo {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
        }

        .heygen .platform-logo {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .synthesia .platform-logo {
          background: linear-gradient(135deg, #00d4aa, #00a388);
          color: white;
        }

        .table-body {
          display: flex;
          flex-direction: column;
        }

        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .row-cell {
          padding: 0.875rem 1.25rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
        }

        .feature-cell {
          color: rgba(255, 255, 255, 0.7);
          text-align: left;
        }

        .value-cell {
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
        }

        .value-cell.winner {
          color: #4facfe;
          font-weight: 600;
        }

        .check-icon {
          color: #38ef7d;
        }

        .x-icon {
          color: rgba(255, 255, 255, 0.3);
        }

        .table-note {
          margin-top: 1rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 600px) {
          .table-header, .table-row {
            grid-template-columns: 1.5fr 1fr 1fr;
          }

          .header-cell, .row-cell {
            padding: 0.75rem;
            font-size: 0.75rem;
          }

          .platform-header span {
            display: none;
          }
        }
      `})]})}function Vj(){const n=[{code:"🇺🇸",name:"English"},{code:"🇪🇸",name:"Spanish"},{code:"🇫🇷",name:"French"},{code:"🇩🇪",name:"German"},{code:"🇨🇳",name:"Chinese"},{code:"🇯🇵",name:"Japanese"},{code:"🇰🇷",name:"Korean"},{code:"🇵🇹",name:"Portuguese"},{code:"🇮🇹",name:"Italian"},{code:"🇷🇺",name:"Russian"},{code:"🇸🇦",name:"Arabic"},{code:"🇮🇳",name:"Hindi"}];return u.jsxs("div",{className:"slide slide-multilingual",children:[u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsxs("h2",{className:"slide-title",children:["Multilingual ",u.jsx("span",{className:"highlight",children:"Magic"})]}),u.jsx("p",{className:"slide-subtitle",children:"One video, 140+ languages — instant global reach"})]}),u.jsxs(w.div,{className:"globe-visual",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.4,duration:.8},children:[u.jsx(w.div,{className:"globe-center",animate:{rotate:360},transition:{duration:60,repeat:1/0,ease:"linear"},children:u.jsx("div",{className:"globe-inner",children:u.jsx(Sy,{size:80})})}),n.map((l,r)=>{const o=r*360/n.length;return u.jsx(w.div,{className:"flag-orbit",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:.6+r*.1,type:"spring",stiffness:100},style:{transform:`rotate(${o}deg) translateY(-180px)`},children:u.jsxs(w.div,{className:"flag-item",style:{transform:`rotate(-${o}deg)`},animate:{y:[0,-5,0]},transition:{duration:2+Math.random()*2,repeat:1/0,ease:"easeInOut",delay:r*.2},whileHover:{scale:1.2},children:[u.jsx("span",{className:"flag-emoji",children:l.code}),u.jsx("span",{className:"flag-name",children:l.name})]})},r)}),u.jsx("svg",{className:"connection-svg",viewBox:"-250 -250 500 500",children:n.map((l,r)=>{const o=r*360/n.length,f=180,m=Math.sin(o*Math.PI/180)*f,h=-Math.cos(o*Math.PI/180)*f;return u.jsx(w.line,{x1:"0",y1:"0",x2:m,y2:h,stroke:"rgba(79, 172, 254, 0.15)",strokeWidth:"1",initial:{pathLength:0},animate:{pathLength:1},transition:{delay:.8+r*.05}},r)})})]}),u.jsxs(w.div,{className:"stats-row",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:2},children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"140+"}),u.jsx("span",{className:"stat-label",children:"Languages"})]}),u.jsx("div",{className:"stat-divider"}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"95%"}),u.jsx("span",{className:"stat-label",children:"Lip-sync Accuracy"})]}),u.jsx("div",{className:"stat-divider"}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"1-Click"}),u.jsx("span",{className:"stat-label",children:"Translation"})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-multilingual {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
        }

        .content-wrapper {
          max-width: 900px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .globe-visual {
          position: relative;
          width: 450px;
          height: 450px;
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .connection-svg {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .globe-center {
          position: relative;
          z-index: 10;
        }

        .globe-inner {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.1));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(79, 172, 254, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4facfe;
          box-shadow: 0 0 60px rgba(79, 172, 254, 0.3);
        }

        .flag-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center center;
        }

        .flag-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 0.75rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          cursor: pointer;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .flag-item:hover {
          border-color: rgba(79, 172, 254, 0.5);
          box-shadow: 0 0 20px rgba(79, 172, 254, 0.3);
        }

        .flag-emoji {
          font-size: 1.5rem;
        }

        .flag-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.6rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .stats-row {
          display: inline-flex;
          align-items: center;
          gap: 2rem;
          padding: 1.25rem 2.5rem;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #4facfe;
        }

        .stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 600px) {
          .globe-visual {
            transform: scale(0.7);
          }

          .stats-row {
            flex-direction: column;
            border-radius: 24px;
            padding: 1.5rem;
            gap: 1rem;
          }

          .stat-divider {
            width: 100%;
            height: 1px;
          }
        }
      `})]})}function Uj(){return u.jsxs("div",{className:"slide slide-case-study",children:[u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsx("span",{className:"case-label",children:"Case Study"}),u.jsxs("h2",{className:"slide-title",children:["Virgin ",u.jsx("span",{className:"highlight",children:"Voyages"})]}),u.jsx("p",{className:"slide-subtitle",children:"How a luxury cruise line revolutionized guest communication with AI avatars"})]}),u.jsxs("div",{className:"case-visual",children:[u.jsx(w.div,{className:"avatar-showcase",initial:{x:-50,opacity:0},animate:{x:0,opacity:1},transition:{delay:.4,duration:.8},children:u.jsxs("div",{className:"avatar-frame",children:[u.jsx("div",{className:"avatar-glow"}),u.jsx("div",{className:"avatar-silhouette",children:u.jsxs("div",{className:"avatar-face",children:[u.jsx(w.div,{className:"sparkle sparkle-1",animate:{scale:[1,1.2,1],opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0}}),u.jsx(w.div,{className:"sparkle sparkle-2",animate:{scale:[1,1.3,1],opacity:[.3,.8,.3]},transition:{duration:2.5,repeat:1/0,delay:.5}})]})}),u.jsxs("div",{className:"avatar-label",children:[u.jsx(Vp,{size:14}),u.jsx("span",{children:"Celebrity AI Avatar"})]})]})}),u.jsxs(w.div,{className:"results-panel",initial:{x:50,opacity:0},animate:{x:0,opacity:1},transition:{delay:.6,duration:.8},children:[u.jsxs("div",{className:"brand-header",children:[u.jsx(WS,{size:24}),u.jsx("span",{children:"Virgin Voyages"})]}),u.jsxs("div",{className:"results-grid",children:[u.jsxs(w.div,{className:"result-card",initial:{scale:0},animate:{scale:1},transition:{delay:.8,type:"spring"},children:[u.jsx(dn,{size:20}),u.jsx("span",{className:"result-value",children:"150%"}),u.jsx("span",{className:"result-label",children:"Engagement Increase"})]}),u.jsxs(w.div,{className:"result-card",initial:{scale:0},animate:{scale:1},transition:{delay:.9,type:"spring"},children:[u.jsx(fr,{size:20}),u.jsx("span",{className:"result-value",children:"2.5M"}),u.jsx("span",{className:"result-label",children:"Video Views"})]}),u.jsxs(w.div,{className:"result-card highlight-card",initial:{scale:0},animate:{scale:1},transition:{delay:1,type:"spring"},children:[u.jsx(Vp,{size:20}),u.jsx("span",{className:"result-value",children:"Viral"}),u.jsx("span",{className:"result-label",children:"Campaign Status"})]})]}),u.jsxs("div",{className:"testimonial",children:[u.jsx("p",{children:'"AI avatars allowed us to create personalized experiences at scale that would have been impossible with traditional production."'}),u.jsx("span",{className:"testimonial-author",children:"— Marketing Director, Virgin Voyages"})]})]})]}),u.jsxs(w.div,{className:"takeaway",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:1.5},children:[u.jsx("span",{className:"takeaway-label",children:"Key Insight"}),u.jsx("p",{children:"Celebrity AI avatars deliver star power without the logistical complexity"})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-case-study {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
        }

        .content-wrapper {
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2.5rem;
        }

        .case-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #4facfe;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          display: block;
          margin-bottom: 0.75rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 500px;
          margin: 0 auto;
        }

        .case-visual {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
          margin-bottom: 2rem;
          align-items: center;
        }

        .avatar-showcase {
          display: flex;
          justify-content: center;
        }

        .avatar-frame {
          position: relative;
          width: 220px;
          height: 280px;
          background: linear-gradient(135deg, rgba(245, 87, 108, 0.1), rgba(240, 147, 251, 0.05));
          border: 1px solid rgba(245, 87, 108, 0.3);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .avatar-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(245, 87, 108, 0.4) 0%, transparent 70%);
          border-radius: 50%;
        }

        .avatar-silhouette {
          width: 120px;
          height: 160px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
          border-radius: 60px 60px 30px 30px;
          position: relative;
          z-index: 2;
        }

        .avatar-face {
          width: 80px;
          height: 80px;
          margin: 20px auto 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          border-radius: 50%;
          position: relative;
        }

        .sparkle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #f5576c;
          border-radius: 50%;
          box-shadow: 0 0 10px #f5576c;
        }

        .sparkle-1 { top: 10px; right: 10px; }
        .sparkle-2 { bottom: 15px; left: 15px; }

        .avatar-label {
          position: absolute;
          bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          color: #f5576c;
        }

        .results-panel {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 1.5rem;
          text-align: left;
        }

        .brand-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: #f5576c;
          font-family: 'Syne', sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .result-card {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
        }

        .result-card.highlight-card {
          background: rgba(79, 172, 254, 0.1);
          border-color: rgba(79, 172, 254, 0.3);
          color: #4facfe;
        }

        .result-value {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0.5rem 0 0.25rem;
        }

        .highlight-card .result-value {
          color: #4facfe;
        }

        .result-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .testimonial {
          padding: 1rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
        }

        .testimonial p {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-style: italic;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }

        .testimonial-author {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .takeaway {
          padding: 1.25rem 2rem;
          background: linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(79, 172, 254, 0.02));
          border: 1px solid rgba(79, 172, 254, 0.2);
          border-radius: 16px;
          display: inline-block;
        }

        .takeaway-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          color: #4facfe;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.5rem;
        }

        .takeaway p {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 800px) {
          .case-visual {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Bj(){const n=[{month:"Jan",value:20},{month:"Feb",value:25},{month:"Mar",value:35},{month:"Apr",value:50},{month:"May",value:75},{month:"Jun",value:120}];return u.jsxs("div",{className:"slide slide-small-business",children:[u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsx("span",{className:"case-label",children:"Case Study"}),u.jsxs("h2",{className:"slide-title",children:["Small Business ",u.jsx("span",{className:"highlight",children:"Success"})]}),u.jsx("p",{className:"slide-subtitle",children:"How a local e-commerce store 6x'd their sales with AI video content"})]}),u.jsxs("div",{className:"case-content",children:[u.jsx(w.div,{className:"graph-section",initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{delay:.4},children:u.jsxs("div",{className:"graph-container",children:[u.jsxs("div",{className:"graph-header",children:[u.jsx("span",{className:"graph-title",children:"Monthly Revenue"}),u.jsxs("span",{className:"graph-trend",children:[u.jsx(dn,{size:14}),"+487%"]})]}),u.jsx("div",{className:"graph-bars",children:n.map((l,r)=>u.jsxs("div",{className:"bar-group",children:[u.jsx(w.div,{className:"bar",initial:{height:0},animate:{height:`${l.value}%`},transition:{delay:.8+r*.15,duration:.8,ease:"easeOut"},children:u.jsxs("span",{className:"bar-value",children:["$",l.value,"K"]})}),u.jsx("span",{className:"bar-label",children:l.month})]},r))}),u.jsxs("div",{className:"graph-legend",children:[u.jsxs("div",{className:"legend-item before",children:[u.jsx("span",{className:"legend-dot"}),u.jsx("span",{children:"Before AI Avatars"})]}),u.jsxs("div",{className:"legend-item after",children:[u.jsx("span",{className:"legend-dot"}),u.jsx("span",{children:"After AI Avatars"})]})]})]})}),u.jsxs(w.div,{className:"metrics-section",initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{delay:.6},children:[u.jsxs("div",{className:"business-card",children:[u.jsxs("div",{className:"business-header",children:[u.jsx(tj,{size:20}),u.jsx("span",{children:"Local E-Commerce Store"})]}),u.jsx("p",{className:"business-desc",children:"A family-owned boutique struggling with content creation adopted AI avatars for product demonstrations and customer education."})]}),u.jsxs("div",{className:"metrics-grid",children:[u.jsxs(w.div,{className:"metric-card",initial:{scale:0},animate:{scale:1},transition:{delay:1.2,type:"spring"},children:[u.jsx(lf,{size:20}),u.jsx("span",{className:"metric-value",children:"6x"}),u.jsx("span",{className:"metric-label",children:"Revenue Growth"})]}),u.jsxs(w.div,{className:"metric-card",initial:{scale:0},animate:{scale:1},transition:{delay:1.3,type:"spring"},children:[u.jsx(fr,{size:20}),u.jsx("span",{className:"metric-value",children:"340%"}),u.jsx("span",{className:"metric-label",children:"Follower Increase"})]}),u.jsxs(w.div,{className:"metric-card",initial:{scale:0},animate:{scale:1},transition:{delay:1.4,type:"spring"},children:[u.jsx(dn,{size:20}),u.jsx("span",{className:"metric-value",children:"$89"}),u.jsx("span",{className:"metric-label",children:"Cost Per Video"})]})]}),u.jsxs("div",{className:"timeline",children:[u.jsxs("div",{className:"timeline-item",children:[u.jsx("span",{className:"timeline-marker",children:"1"}),u.jsx("span",{className:"timeline-text",children:"Created AI avatar of founder"})]}),u.jsxs("div",{className:"timeline-item",children:[u.jsx("span",{className:"timeline-marker",children:"2"}),u.jsx("span",{className:"timeline-text",children:"Posted daily product videos"})]}),u.jsxs("div",{className:"timeline-item",children:[u.jsx("span",{className:"timeline-marker",children:"3"}),u.jsx("span",{className:"timeline-text",children:"Scaled to 3 platforms simultaneously"})]})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-small-business {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
        }

        .content-wrapper {
          max-width: 1100px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2rem;
        }

        .case-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #38ef7d;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          display: block;
          margin-bottom: 0.75rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
        }

        .highlight {
          background: linear-gradient(135deg, #38ef7d 0%, #11998e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .case-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          text-align: left;
        }

        .graph-container {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 1.5rem;
          height: 100%;
        }

        .graph-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .graph-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: white;
        }

        .graph-trend {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #38ef7d;
        }

        .graph-bars {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 200px;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 1rem;
        }

        .bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
        }

        .bar {
          width: 100%;
          max-width: 40px;
          background: linear-gradient(180deg, #38ef7d 0%, #11998e 100%);
          border-radius: 8px 8px 0 0;
          position: relative;
          min-height: 20px;
        }

        .bar-value {
          position: absolute;
          top: -1.5rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          color: #38ef7d;
          white-space: nowrap;
        }

        .bar-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .graph-legend {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .legend-item.before .legend-dot {
          background: rgba(255, 255, 255, 0.3);
        }

        .legend-item.after .legend-dot {
          background: #38ef7d;
        }

        .metrics-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .business-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.25rem;
        }

        .business-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #38ef7d;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .business-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .metric-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
        }

        .metric-value {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #38ef7d;
          margin: 0.5rem 0 0.25rem;
        }

        .metric-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .timeline {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 16px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .timeline-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .timeline-marker {
          width: 24px;
          height: 24px;
          background: rgba(56, 239, 125, 0.2);
          border: 1px solid rgba(56, 239, 125, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          color: #38ef7d;
          flex-shrink: 0;
        }

        .timeline-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 800px) {
          .case-content {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Hj(){return u.jsxs("div",{className:"slide slide-hybrid",children:[u.jsxs(w.div,{className:"section-badge",initial:{y:-30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6},children:[u.jsx(jy,{size:16}),u.jsx("span",{children:"SECTION 05 — CONCLUSION"})]}),u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsxs("h2",{className:"slide-title",children:["The Hybrid ",u.jsx("span",{className:"highlight",children:"Workflow"})]}),u.jsx("p",{className:"slide-subtitle",children:"Human creativity directing AI execution — the best of both worlds"})]}),u.jsxs("div",{className:"workflow-visual",children:[u.jsxs(w.div,{className:"role-card human",initial:{x:-80,opacity:0},animate:{x:0,opacity:1},transition:{delay:.4,duration:.8},children:[u.jsx("div",{className:"role-icon",children:u.jsx(fr,{size:32})}),u.jsx("h3",{className:"role-title",children:"Human Director"}),u.jsxs("ul",{className:"role-tasks",children:[u.jsxs("li",{children:[u.jsx(Me,{size:14}),u.jsx("span",{children:"Creative vision & strategy"})]}),u.jsxs("li",{children:[u.jsx(Me,{size:14}),u.jsx("span",{children:"Script & narrative development"})]}),u.jsxs("li",{children:[u.jsx(Me,{size:14}),u.jsx("span",{children:"Brand voice & tone"})]}),u.jsxs("li",{children:[u.jsx(Me,{size:14}),u.jsx("span",{children:"Quality oversight"})]})]})]}),u.jsxs(w.div,{className:"connection",initial:{scale:0},animate:{scale:1},transition:{delay:.8,type:"spring"},children:[u.jsx(w.div,{className:"connection-line",animate:{background:["linear-gradient(90deg, #f5af19 0%, #667eea 50%, #f5af19 100%)","linear-gradient(90deg, #667eea 0%, #f5af19 50%, #667eea 100%)","linear-gradient(90deg, #f5af19 0%, #667eea 50%, #f5af19 100%)"]},transition:{duration:3,repeat:1/0}}),u.jsx(w.div,{className:"connection-arrow",animate:{x:[0,10,0]},transition:{duration:1.5,repeat:1/0},children:u.jsx(af,{size:24})}),u.jsx("span",{className:"connection-label",children:"Synergy"})]}),u.jsxs(w.div,{className:"role-card ai",initial:{x:80,opacity:0},animate:{x:0,opacity:1},transition:{delay:.4,duration:.8},children:[u.jsx(w.div,{className:"role-icon",animate:{boxShadow:["0 0 20px rgba(102, 126, 234, 0.3)","0 0 40px rgba(102, 126, 234, 0.5)","0 0 20px rgba(102, 126, 234, 0.3)"]},transition:{duration:2,repeat:1/0},children:u.jsx(P3,{size:32})}),u.jsx("h3",{className:"role-title",children:"AI Actor"}),u.jsxs("ul",{className:"role-tasks",children:[u.jsxs("li",{children:[u.jsx(Me,{size:14}),u.jsx("span",{children:"24/7 content production"})]}),u.jsxs("li",{children:[u.jsx(Me,{size:14}),u.jsx("span",{children:"Consistent on-camera presence"})]}),u.jsxs("li",{children:[u.jsx(Me,{size:14}),u.jsx("span",{children:"Multilingual delivery"})]}),u.jsxs("li",{children:[u.jsx(Me,{size:14}),u.jsx("span",{children:"Infinite scalability"})]})]})]})]}),u.jsxs(w.div,{className:"result-banner",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:1.2},children:[u.jsx(w.div,{className:"result-glow",animate:{opacity:[.3,.6,.3]},transition:{duration:3,repeat:1/0}}),u.jsxs("span",{className:"result-text",children:[u.jsx("strong",{children:"10x"})," output with ",u.jsx("strong",{children:"human authenticity"})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-hybrid {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
        }

        .section-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(245, 175, 25, 0.2), rgba(245, 175, 25, 0.05));
          border: 1px solid rgba(245, 175, 25, 0.3);
          border-radius: 100px;
          margin-bottom: 2rem;
          color: #f5af19;
        }

        .section-badge span {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        .content-wrapper {
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2.5rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #f5af19 0%, #f12711 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .workflow-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .role-card {
          flex: 1;
          max-width: 300px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
          text-align: left;
        }

        .role-card.human {
          border-color: rgba(245, 175, 25, 0.3);
        }

        .role-card.ai {
          border-color: rgba(102, 126, 234, 0.3);
        }

        .role-icon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .human .role-icon {
          background: linear-gradient(135deg, rgba(245, 175, 25, 0.2), rgba(245, 175, 25, 0.05));
          color: #f5af19;
        }

        .ai .role-icon {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(102, 126, 234, 0.05));
          color: #667eea;
        }

        .role-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .role-tasks {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .role-tasks li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .human .role-tasks li svg {
          color: #f5af19;
        }

        .ai .role-tasks li svg {
          color: #667eea;
        }

        .connection {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .connection-line {
          width: 60px;
          height: 4px;
          border-radius: 2px;
          background: linear-gradient(90deg, #f5af19, #667eea);
        }

        .connection-arrow {
          color: rgba(255, 255, 255, 0.5);
        }

        .connection-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .result-banner {
          position: relative;
          display: inline-block;
          padding: 1.5rem 3rem;
          background: linear-gradient(135deg, rgba(245, 175, 25, 0.1), rgba(102, 126, 234, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 100px;
          overflow: hidden;
        }

        .result-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(245, 175, 25, 0.2), rgba(102, 126, 234, 0.2));
          filter: blur(20px);
        }

        .result-text {
          position: relative;
          z-index: 2;
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .result-text strong {
          background: linear-gradient(135deg, #f5af19, #667eea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        @media (max-width: 800px) {
          .workflow-visual {
            flex-direction: column;
          }

          .connection {
            transform: rotate(90deg);
            margin: 1rem 0;
          }
        }
      `})]})}function Lj(){const n=[{icon:gS,title:"Emotion Recognition",desc:"Avatars that read and respond to viewer emotions in real-time"},{icon:vS,title:"Hyper-Personalization",desc:"Unique video for every viewer, tailored to their preferences"},{icon:dr,title:"Real-time Interaction",desc:"Live conversations with AI avatars that feel natural"},{icon:Sy,title:"Universal Translation",desc:"Perfect lip-sync in any language, instantly"}];return u.jsxs("div",{className:"slide slide-future",children:[u.jsxs("div",{className:"content-wrapper",children:[u.jsxs(w.div,{className:"text-content",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:[u.jsxs("span",{className:"year-badge",children:[u.jsx(Me,{size:14}),"2026 & Beyond"]}),u.jsxs("h2",{className:"slide-title",children:["Future ",u.jsx("span",{className:"highlight",children:"Outlook"})]}),u.jsx("p",{className:"slide-subtitle",children:"The next frontier of AI-powered content creation"})]}),u.jsx("div",{className:"future-grid",children:n.map((l,r)=>u.jsxs(w.div,{className:"future-card",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.4+r*.15},whileHover:{y:-5,scale:1.02},children:[u.jsx(w.div,{className:"card-glow",animate:{opacity:[.2,.4,.2]},transition:{duration:3,repeat:1/0,delay:r*.5}}),u.jsx(w.div,{className:"feature-icon",animate:{rotate:[0,5,-5,0]},transition:{duration:4,repeat:1/0,delay:r*.3},children:u.jsx(l.icon,{size:28})}),u.jsx("h3",{className:"feature-title",children:l.title}),u.jsx("p",{className:"feature-desc",children:l.desc})]},r))}),u.jsxs(w.div,{className:"timeline-bar",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2},children:[u.jsx("div",{className:"timeline-track",children:u.jsx(w.div,{className:"timeline-progress",initial:{width:0},animate:{width:"100%"},transition:{delay:1.5,duration:2,ease:"easeOut"}})}),u.jsxs("div",{className:"timeline-markers",children:[u.jsxs("div",{className:"marker",children:[u.jsx("span",{className:"marker-year",children:"2024"}),u.jsx("span",{className:"marker-label",children:"Current State"})]}),u.jsxs("div",{className:"marker",children:[u.jsx("span",{className:"marker-year",children:"2025"}),u.jsx("span",{className:"marker-label",children:"Enhanced Realism"})]}),u.jsxs("div",{className:"marker active",children:[u.jsx("span",{className:"marker-year",children:"2026"}),u.jsx("span",{className:"marker-label",children:"Hyper-Personalization"})]})]})]}),u.jsxs(w.div,{className:"insight-box",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:2},children:[u.jsx(Me,{size:16}),u.jsxs("span",{children:["Early adopters will have a ",u.jsx("strong",{children:"2-year advantage"})," over competitors"]})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-future {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
        }

        .content-wrapper {
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .text-content {
          margin-bottom: 2.5rem;
        }

        .year-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          background: linear-gradient(135deg, rgba(245, 175, 25, 0.2), rgba(245, 175, 25, 0.05));
          border: 1px solid rgba(245, 175, 25, 0.3);
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: #f5af19;
          margin-bottom: 1rem;
        }

        .slide-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .highlight {
          background: linear-gradient(135deg, #f5af19 0%, #f12711 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .slide-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .future-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .future-card {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.5rem;
          text-align: center;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        .future-card:hover {
          border-color: rgba(245, 175, 25, 0.4);
        }

        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(245, 175, 25, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          background: linear-gradient(135deg, rgba(245, 175, 25, 0.2), rgba(245, 175, 25, 0.05));
          border: 1px solid rgba(245, 175, 25, 0.3);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f5af19;
          position: relative;
          z-index: 2;
        }

        .feature-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 2;
        }

        .feature-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.5;
          position: relative;
          z-index: 2;
        }

        .timeline-bar {
          margin-bottom: 2rem;
          padding: 0 2rem;
        }

        .timeline-track {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .timeline-progress {
          height: 100%;
          background: linear-gradient(90deg, #f5af19, #f12711);
          border-radius: 2px;
        }

        .timeline-markers {
          display: flex;
          justify-content: space-between;
        }

        .marker {
          text-align: center;
        }

        .marker-year {
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 0.25rem;
        }

        .marker.active .marker-year {
          color: #f5af19;
        }

        .marker-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .marker.active .marker-label {
          color: rgba(255, 255, 255, 0.7);
        }

        .insight-box {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: rgba(245, 175, 25, 0.1);
          border: 1px solid rgba(245, 175, 25, 0.2);
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .insight-box svg {
          color: #f5af19;
        }

        .insight-box strong {
          color: #f5af19;
        }

        @media (max-width: 800px) {
          .future-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 500px) {
          .future-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function qj(){return u.jsxs("div",{className:"slide slide-cta",children:[u.jsxs("div",{className:"content-wrapper",children:[u.jsxs("div",{className:"deco-elements",children:[u.jsx(w.div,{className:"deco-circle circle-1",animate:{scale:[1,1.2,1],opacity:[.1,.2,.1]},transition:{duration:4,repeat:1/0}}),u.jsx(w.div,{className:"deco-circle circle-2",animate:{scale:[1.2,1,1.2],opacity:[.15,.25,.15]},transition:{duration:5,repeat:1/0}}),u.jsx(w.div,{className:"deco-circle circle-3",animate:{scale:[1,1.3,1],opacity:[.05,.15,.05]},transition:{duration:6,repeat:1/0}})]}),u.jsxs(w.div,{className:"badge",initial:{y:-30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6},children:[u.jsx(Me,{size:14}),u.jsx("span",{children:"Ready to Transform?"})]}),u.jsxs(w.h2,{className:"cta-title",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2,duration:.8},children:["Start Your ",u.jsx("span",{className:"gradient-text",children:"Twin"})]}),u.jsx(w.p,{className:"cta-subtitle",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4,duration:.8},children:"Create your AI avatar today and join the content revolution"}),u.jsx(w.div,{className:"cta-button-wrapper",initial:{scale:0},animate:{scale:1},transition:{delay:.6,type:"spring",stiffness:100},children:u.jsxs(w.button,{className:"cta-button",whileHover:{scale:1.05},whileTap:{scale:.95},animate:{boxShadow:["0 0 30px rgba(102, 126, 234, 0.3)","0 0 60px rgba(102, 126, 234, 0.5)","0 0 30px rgba(102, 126, 234, 0.3)"]},transition:{duration:2,repeat:1/0},children:[u.jsx("span",{children:"Get Started"}),u.jsx(af,{size:20})]})}),u.jsxs(w.div,{className:"trust-row",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.9},children:[u.jsxs("div",{className:"trust-item",children:[u.jsx(dr,{size:18}),u.jsx("span",{children:"Instant Setup"})]}),u.jsxs("div",{className:"trust-item",children:[u.jsx(PS,{size:18}),u.jsx("span",{children:"Enterprise Security"})]}),u.jsxs("div",{className:"trust-item",children:[u.jsx(nf,{size:18}),u.jsx("span",{children:"24/7 Support"})]})]}),u.jsxs(w.div,{className:"pricing-teaser",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:1.2},children:[u.jsx("span",{className:"price-from",children:"Starting from"}),u.jsxs("span",{className:"price-amount",children:["$24",u.jsx("span",{className:"price-period",children:"/mo"})]}),u.jsx("span",{className:"price-note",children:"Cancel anytime • No credit card required for trial"})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .content-wrapper {
          max-width: 800px;
          width: 100%;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .deco-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .deco-circle {
          position: absolute;
          border-radius: 50%;
          border: 1px solid;
        }

        .circle-1 {
          width: 600px;
          height: 600px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-color: rgba(102, 126, 234, 0.2);
        }

        .circle-2 {
          width: 450px;
          height: 450px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-color: rgba(118, 75, 162, 0.2);
        }

        .circle-3 {
          width: 300px;
          height: 300px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-color: rgba(240, 147, 251, 0.2);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(102, 126, 234, 0.05));
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 100px;
          margin-bottom: 2rem;
          color: #667eea;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 10vw, 6rem);
          font-weight: 700;
          color: white;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 30%, #f093fb 60%, #4facfe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 450px;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }

        .cta-button-wrapper {
          margin-bottom: 2rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 3rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 100px;
          font-family: 'Syne', sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .trust-row {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .trust-item svg {
          color: #667eea;
        }

        .pricing-teaser {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem 2.5rem;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          display: inline-flex;
        }

        .price-from {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .price-amount {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
        }

        .price-period {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.5);
        }

        .price-note {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 600px) {
          .trust-row {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `})]})}function Gj(){const n=["How realistic are AI avatars?","What's the production timeline?","Can I use my own voice?","How does pricing work?"];return u.jsxs("div",{className:"slide slide-qa",children:[u.jsxs("div",{className:"content-wrapper",children:[u.jsx("div",{className:"qa-background",children:[...Array(6)].map((l,r)=>u.jsx(w.div,{className:"floating-question",style:{left:`${10+Math.random()*80}%`,top:`${10+Math.random()*80}%`},animate:{y:[0,-20,0],opacity:[.1,.3,.1],rotate:[0,5,-5,0]},transition:{duration:4+Math.random()*2,repeat:1/0,delay:r*.5},children:u.jsx(_p,{size:40})},r))}),u.jsxs(w.div,{className:"main-content",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[u.jsxs(w.div,{className:"qa-icon",initial:{scale:0},animate:{scale:1},transition:{delay:.3,type:"spring"},children:[u.jsx(w.div,{className:"icon-ring",animate:{scale:[1,1.2,1],opacity:[.3,.6,.3]},transition:{duration:2,repeat:1/0}}),u.jsx(wy,{size:50})]}),u.jsxs(w.h2,{className:"qa-title",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},children:["Questions ",u.jsx("span",{className:"ampersand",children:"&"})," Answers"]}),u.jsx(w.p,{className:"qa-subtitle",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.5},children:"Let's discuss how AI avatars can transform your content strategy"}),u.jsx(w.div,{className:"questions-preview",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.7},children:n.map((l,r)=>u.jsxs(w.div,{className:"question-chip",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.9+r*.1},whileHover:{scale:1.05,x:5},children:[u.jsx(_p,{size:14}),u.jsx("span",{children:l})]},r))}),u.jsxs(w.div,{className:"contact-section",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{delay:1.3},children:[u.jsx("span",{className:"contact-label",children:"Connect With Us"}),u.jsxs("div",{className:"contact-links",children:[u.jsx(w.a,{href:"#",className:"contact-link",whileHover:{scale:1.1,y:-3},children:u.jsx(DS,{size:20})}),u.jsx(w.a,{href:"#",className:"contact-link",whileHover:{scale:1.1,y:-3},children:u.jsx(Ny,{size:20})}),u.jsx(w.a,{href:"#",className:"contact-link",whileHover:{scale:1.1,y:-3},children:u.jsx(My,{size:20})})]})]}),u.jsx(w.div,{className:"thank-you",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.8},children:u.jsx("span",{children:"Thank you for your attention"})})]})]}),u.jsx("style",{jsx:!0,children:`
        .slide-qa {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .content-wrapper {
          max-width: 800px;
          width: 100%;
          text-align: center;
          position: relative;
        }

        .qa-background {
          position: absolute;
          inset: -100px;
          pointer-events: none;
        }

        .floating-question {
          position: absolute;
          color: rgba(102, 126, 234, 0.15);
        }

        .main-content {
          position: relative;
          z-index: 2;
        }

        .qa-icon {
          position: relative;
          width: 100px;
          height: 100px;
          margin: 0 auto 2rem;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.1));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(102, 126, 234, 0.3);
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
        }

        .icon-ring {
          position: absolute;
          inset: -10px;
          border: 2px solid rgba(102, 126, 234, 0.3);
          border-radius: 35px;
        }

        .qa-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .ampersand {
          font-style: italic;
          background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .qa-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 2.5rem;
        }

        .questions-preview {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
        }

        .question-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          transition: border-color 0.3s ease;
        }

        .question-chip:hover {
          border-color: rgba(102, 126, 234, 0.5);
        }

        .question-chip svg {
          color: #667eea;
        }

        .contact-section {
          margin-bottom: 2.5rem;
        }

        .contact-label {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 1rem;
        }

        .contact-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .contact-link {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          background: rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.5);
          color: #667eea;
        }

        .thank-you {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 100px;
          display: inline-block;
        }

        .thank-you span {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-style: italic;
          color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 600px) {
          .question-chip {
            font-size: 0.75rem;
            padding: 0.5rem 1rem;
          }
        }
      `})]})}const ln=[Tj,Nj,wj,Aj,Mj,zj,Ej,Dj,Cj,kj,Oj,_j,Rj,Vj,Uj,Bj,Hj,Lj,qj,Gj],dl=[{name:"The Why",icon:dr,slides:[0,1,2,3],color:"#667eea"},{name:"The Pain",icon:sj,slides:[4,5,6,7],color:"#f5576c"},{name:"The Solution",icon:W3,slides:[8,9,10,11],color:"#38ef7d"},{name:"The Showcase",icon:Ay,slides:[12,13,14,15],color:"#4facfe"},{name:"Conclusion",icon:jy,slides:[16,17,18,19],color:"#f5af19"}];function Yj(){const[n,l]=Y.useState(0),[r,o]=Y.useState(0),[f,m]=Y.useState(!1),h=Y.useRef(null),x=()=>{for(let R=0;R<dl.length;R++)if(dl[R].slides.includes(n))return R;return 0},y=R=>{R===n||f||(o(R>n?1:-1),m(!0),l(R),setTimeout(()=>m(!1),600))},g=()=>{n<ln.length-1&&!f&&y(n+1)},b=()=>{n>0&&!f&&y(n-1)};Y.useEffect(()=>{const R=Q=>{Q.key==="ArrowRight"||Q.key===" "?(Q.preventDefault(),g()):Q.key==="ArrowLeft"&&(Q.preventDefault(),b())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[n,f]);const v=Y.useRef(0),j=Y.useRef(0),k=R=>{v.current=R.touches[0].clientX},B=R=>{j.current=R.touches[0].clientX},L=()=>{const R=v.current-j.current;Math.abs(R)>50&&(R>0?g():b())},G=ln[n],q=x(),K={enter:R=>({x:R>0?"100%":"-100%",opacity:0,scale:.95}),center:{x:0,opacity:1,scale:1},exit:R=>({x:R<0?"100%":"-100%",opacity:0,scale:.95})};return u.jsxs("div",{className:"presentation-container",ref:h,onTouchStart:k,onTouchMove:B,onTouchEnd:L,children:[u.jsxs("div",{className:"background-effects",children:[u.jsx("div",{className:"gradient-orb orb-1"}),u.jsx("div",{className:"gradient-orb orb-2"}),u.jsx("div",{className:"gradient-orb orb-3"}),u.jsx("div",{className:"noise-overlay"})]}),u.jsx(w.div,{className:"section-indicator",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.5},children:dl.map((R,Q)=>{const F=R.icon;return u.jsxs(w.button,{className:`section-tab ${q===Q?"active":""}`,onClick:()=>y(R.slides[0]),whileHover:{scale:1.05},whileTap:{scale:.95},style:{"--section-color":R.color},children:[u.jsx(F,{size:16}),u.jsx("span",{children:R.name})]},Q)})}),u.jsx("div",{className:"slide-viewport",children:u.jsx(Vv,{mode:"wait",custom:r,children:u.jsx(w.div,{custom:r,variants:K,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.4},scale:{duration:.4}},className:"slide-wrapper",children:u.jsx(G,{})},n)})}),u.jsxs("div",{className:"navigation-controls",children:[u.jsx(w.button,{className:"nav-button prev",onClick:b,disabled:n===0,whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(rS,{size:24})}),u.jsx("div",{className:"slide-dots",children:ln.map((R,Q)=>u.jsx(w.button,{className:`dot ${Q===n?"active":""}`,onClick:()=>y(Q),whileHover:{scale:1.3},style:{backgroundColor:dl[x()]?.color||"#667eea"}},Q))}),u.jsx(w.button,{className:"nav-button next",onClick:g,disabled:n===ln.length-1,whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsx(cS,{size:24})})]}),u.jsx(w.div,{className:"progress-bar",style:{background:`linear-gradient(90deg, ${dl[q]?.color||"#667eea"} 0%, transparent 100%)`},children:u.jsx(w.div,{className:"progress-fill",initial:{width:0},animate:{width:`${(n+1)/ln.length*100}%`},transition:{duration:.3}})}),u.jsxs("div",{className:"slide-counter",children:[u.jsx("span",{className:"current",children:String(n+1).padStart(2,"0")}),u.jsx("span",{className:"separator",children:"/"}),u.jsx("span",{className:"total",children:String(ln.length).padStart(2,"0")})]})]})}s2.createRoot(document.getElementById("root")).render(u.jsx(Y.StrictMode,{children:u.jsx(Yj,{})}));
